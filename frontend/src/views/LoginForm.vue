<script lang="ts">
import {useRouter} from 'vue-router';
import axios from 'axios';

//import TheWelcome from '../components/TheWelcome.vue'
export default{
  data(){
    return{
      username: '',
      password: '',
      router: useRouter(),
      isSuccess: {}
    }
  },
  methods: {
    register(){
      this.router.push({
        path: '/registerForm'
      });
    },
    login(){
      axios.post('http://localhost:8020/login', null, { params: {username:this.username, password:this.password}})
      .then((result) => {
        if(result.data === 'loginError'){
          alert('로그인 실패!');
        }else{
          console.log(result.config);
          this.router.push({
            path: '/main'
          });
        }
      })
      .catch((e) => {
        console.log("username : " + this.username + ", password : " + this.password);
        console.log(e);
      });
    }
  }
}
</script>

<template>
  <main>
    <h1>로그인 화면</h1>
    <form method="post">
      <input type="text" name="username" id="username" placeholder="이메일 입력" v-model="username">
      <input type="password" name="password" id="password" placeholder="비밀번호 입력" v-model="password">
      <button type="button" id="login_btn" class="login-btn" @click="login()">로그인</button>
      <button type="button" id="register_btn" class="register-btn" @click="register()">회원가입</button>
    </form>
  </main>
</template>
