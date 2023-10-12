<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script lang="ts">
import { reactive } from 'vue'

export default {
  name: 'calculator-composition-components',
  components: {},
  setup() {
    let state = reactive({ // reactive를 이용해서 num1, num2, result를 실시간 변경사항에 대한 반응형 적용
      num1: 0,
      num2: 0,
      result: 0
    });

    function plusNumbers() {
      state.result = state.num1 + state.num2;
    }

    return {
      state,
      plusNumbers
    }
  },
  created() { },
  mounted() { },
  unmounted() { },
  methods: {}
}
</script>
  
