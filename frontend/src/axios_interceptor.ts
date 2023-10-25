import axios from 'axios'
import {store} from './store'
import { type InternalAxiosRequestConfig } from 'axios'


const BASE_URL = 'http://localhost:8020';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {"Content-Type": "application/json"}
});

instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        const accessToken = store.getters.getAccessToken;
        const refreshToken = store.getters.getRefreshToken;

        if(!accessToken){
            config.headers.accessToken = null;
            config.headers.refreshToken = null;
            return config;
        }

        if(config.headers && accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`;
            config.headers.refreshToken = `Bearer ${refreshToken}`;
            return config;
        }
        
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        console.log('get response', response);
        return response;
    },
    async (error) => {
        console.log("axios interceptor Error : " + error.response.status);
        const {config, response: {status}} = error;
        console.log("axios interceptor Error의 status = " + status);
        console.log("axios interceptor Error의 data Message 값 : " + error.response.data);
        if(status === 401){
            if(error.response.data === 'EXPIRED_TOKEN'){
                const originalRequest = config;
                const refreshToken = store.getters.getRefreshToken;
                const {data} = await axios.post(BASE_URL+'/refreshToken',
                    {}, {
                        headers: {Authorization: `Bearer ${refreshToken}`},
                        params: {member_email: store.getters.getUserEmail,member_pw: store.getters.getUserPassword}
                    
                    }
                );

                
                // 새로 발급 받은 토큰 저장
                const newToken = {
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken
                }
                store.commit('regenerateToken', newToken);

                originalRequest.headers.Authorization = `Bearer ${newToken.accessToken}`;
                return axios(originalRequest);
            }
        }

        console.log('response error',error);
        return Promise.reject(error);
    }
);

export default instance;