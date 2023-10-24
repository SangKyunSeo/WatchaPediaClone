<script lang="ts">
import { useRouter } from 'vue-router';
  export default{
    data(){
      return{
          router: useRouter(),
      }
    },
    created(){
      this.router.push({
      path: '/main'
    });
    }
  }
</script>

<template>
  <main>
    <h1>teetadgsgf</h1>
    <TheWelcome />
  </main>
</template>
