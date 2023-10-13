import {createStore} from 'vuex';

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
            }
        }    
    },
    getters: {
        getTokenInfo(state){
            return state.token;
        },
        getUserNum(state){
            return state.member_num;
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
        }
    },
    mutations: {
        regenerateToken(state,accessToken){
            state.token.accessToken = accessToken;
        },
        settingInfo(state:any, paylode): void{
            state.member_num = paylode.member_num;
            state.member_email = paylode.member_email;
            state.member_name = paylode.member_name;
            state.member_password = paylode.member_password;
            state.role_name = paylode.role_name;
            state.token = paylode.token;
        }
    }
});
