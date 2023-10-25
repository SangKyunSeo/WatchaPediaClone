<script lang="ts">
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
    data() {
        return {
            member_name: '',
            member_email: '',
            member_pw: '',
            router: useRouter(),
            isSuccess: {}
        }
    },
    methods: {
        register() {
            if(this.member_name == ''){
                alert('이름을 입력하세요!');
                return;
            }
            if(this.member_email == ''){
                alert('이메일을 입력하세요!');
                return;
            }
            if(this.member_pw == ''){
                alert('비밀번호를 입력하세요!');
                return;
            }

            axios.post('http://localhost:8020/register', null, {params: {member_email: this.member_email, member_name: this.member_name, member_pw: this.member_pw}})
            .then((result) => {
                if(result.data === 'success' ){
                    alert('회원가입 성공!');
                    this.router.push({
                        path: '/main'
                    });
                }else if(result.data === 'used'){
                    alert('회원 이메일 중복!');
                }else{
                    alert('회원 가입 통신 실패');
                }
            })
            .catch((e) => {
                console.log("<<Error>> : " + e);
            });
        },
    }
}
</script>

<template>
    <main>
        <h1>회원가입 화면</h1>
        <form method="post">
            <input type="text" name="member_name" placeholder="이름" v-model="member_name">
            <input type="text" name="member_email" placeholder="이메일" v-model="member_email">
            <input type="password" name="member_pw" placeholder="비밀번호" v-model="member_pw">
            <button type="button" @click="register()">가입</button>
        </form>
    </main>
</template>
