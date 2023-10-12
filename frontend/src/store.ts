import {createStore} from 'vuex';

const store = createStore({
    state(){
        return{
            member_num : '',
            member_email: '',
            member_pw: '',
            member_name: '',
            role_name: ''
        }
    }
});


export interface userInfo{
    
}