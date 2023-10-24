import {createStore} from 'vuex';
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
    state() {
        return{
            member_num : '',
            member_email: '',
            member_name: '',
            member_password: '',
            role_name: '',
            token: {
                grantType: '',
                accessToken: '',
                refreshToken: ''
            },
            loginState: false
        }    
    },
    getters: {
        getTokenInfo(state){
            return state.token;
        },
        getAccessToken(state){
            return state.token.accessToken;
        },
        getRefreshToken(state){
            return state.token.refreshToken;
        },
        getUserNum(state){
            return state.member_num;
        },
        getUserEmail(state){
            return state.member_email;
        },
        getUserPassword(state){
            return state.member_password;
        },
        getUserName(state){
            return state.member_name;
        },
        getUserInfo(state){
            const info: object = {
                member_num : state.member_num,
                member_email: state.member_email,
                member_name: state.member_name,
                member_password: state.member_password,
                role_name: state.role_name,
                token: state.token
            }
            return info;
        },
        getLoginState(state){
            return state.loginState;
        }
    },
    mutations: {
        regenerateToken(state,token){
            state.token.accessToken = token.accessToken;
            state.token.refreshToken = token.refreshToken;
        },
        settingInfo(state:any, paylode): void{
            state.member_num = paylode.member_num;
            state.member_email = paylode.member_email;
            state.member_name = paylode.member_name;
            state.member_password = paylode.member_password;
            state.role_name = paylode.role_name;
            state.token = paylode.token;
        },
        successLogin(state){
            state.loginState = true;
        },
        successLogout(state){
            state.loginState = false;
            state.member_num = '';
            state.member_email = '';
            state.member_name = '';
            state.member_password = '';
            state.role_name = '';
            state.token.accessToken = '';
            state.token.grantType = '';
            state.token.refreshToken = '';
        }
    },
    plugins: [
        createPersistedState({
            paths: ["token","loginState","member_num","member_email","member_name","member_password"]
        })
    ]
});
