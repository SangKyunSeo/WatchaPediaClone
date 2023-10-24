<script lang="ts">
import axios from 'axios';
import { useRouter } from 'vue-router';
import instance from '@/axios_interceptor';

// defineProps<{
//   msg: string
// }>()
export default {

  data() {
    return {
      msg: '',
      router: useRouter(),
      checkLogin: true,
      memberNum: ''
      
    }
  },
  mounted(){
    this.checkingLogin();
  },
  methods: {
    login() {
      axios.get('/loginForm').then((result) => {
        this.router.push({
          path: '/loginForm'
        })
      });
    },
    // logout(){
    //   axios.get('/logout', { headers: { Authorization: 'Bearer ' + this.$store.getters.getAccessToken } }).then((result) => {
    //     this.$store.commit('successLogout');
    //     localStorage.clear;
    //     this.router.push({
    //       path: '/main'
    //     })
    //   })
    //   .catch((error) => {
    //     alert(error.response.status);
    //     console.log(error.response.status);
    //   });
    // },
    async logout() {
      try{
        const response = await instance.get('/logout')
        console.log("Response: " + response);
        this.$store.commit('successLogout');
        localStorage.clear;
      }catch(error: any){
        console.log("Error: " + error);
      }
    },
    checkingLogin(){
      this.memberNum = this.$store.getters.checkLogin;
      if(!this.memberNum) this.checkLogin = false;
      else this.checkLogin = true;
    }
  },
  computed: {
    checkLoginState(){
      return this.$store.getters.getLoginState;
    }
  }
}
</script>

<template>
  <nav>
    <div class="header-container">
      <div class="header-content">
        <ul class="header-list">
          <li class="header-title">
            <router-link to="/main">WatchaPedia</router-link>
          </li>
          <li class="header-movie css-header">
            <router-link to="/movie">영화</router-link>
          </li>
          <li class="header-tv css-header">
            <router-link to="/tv">TV</router-link>
          </li>
          <li class="header-search css-header">
            <div class="search-parent">
              <div class="search-child">
                <input type="text" placeholder="검색어 입력">
              </div>
            </div>
          </li>
          <li class="header-login">
            <button type="button" @click="login()" v-if="checkLoginState == false">로그인</button>
            <button type="button" @click="logout()" v-if="checkLoginState == true">로그아웃</button>
            <!-- <router-link to="/loginForm">로그인</router-link> -->
          </li>
        </ul>
      </div>
    </div>
    
  </nav>
  <!-- <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>  </div> -->
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

ul{
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  overflow: hidden;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.header-container{
  text-align: center;
}

.header-title{
  margin: 15px 15px 0 0;
}
.header-search{
  margin: 0 0 0 auto;
  height: 62px;
  align-items: center;
  display: flex;
}
.header-search .search-parent{
  position: relative;
  width: 300px;
}
.header-search .search-child{
  margin: 12px 0;
}

.header-login{
  display: flex;
  align-items: center;
  height: 62px;
  margin: 0 0 0 20px;
}
  .header-content{
    margin: 0 3.5%;
  }
  .header-movie{
    margin: 0 0 0 24px;
  }
  .header-tv{
    margin: 0 0 0 24px;
  }

.css-header{
  display: flex;
  align-items: center;
  height: 62px;
  -webkit-box-align: center;
  flex-shrink: 0;
}
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
