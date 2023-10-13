<script lang="ts">
import axios from 'axios';
import { useRouter } from 'vue-router';

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
    checkingLogin(){
      this.memberNum = this.$store.getters.checkLogin;
      if(!this.memberNum) this.checkLogin = false;
      else this.checkLogin = true;
    }
  }
}
</script>

<template>
  <nav>
    <div class="header_container">
      <div class="header_content">
        <ul class="header_list">
          <li class="header_title">
            <a>{{ msg }}</a>
          </li>
          <li class="header_movie">
            <router-link to="/movie">영화</router-link>
          </li>
          <li class="header_tv">
            <a>TV</a>
          </li>
          <li class="header_search">
            <input type="text" placeholder="검색어 입력">
          </li>
          <li class="header_login">
            <button type="button" @click="login()" v-if="checkLogin == false">로그인</button>
            <button type="button" v-if="checkLogin == true">로그아웃</button>
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

.greetings h1,
.greetings h3 {
  text-align: center;
}

.header_container{
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
