<script setup lang="ts">
defineProps<{
  msg: string
}>()
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
            <router-link to="/loginForm">로그인</router-link>
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
