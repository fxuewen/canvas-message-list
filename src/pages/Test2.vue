<template>
  <div class="test2-container"><div class="msg">{{msg}}</div></div>
</template>

<script>
export default {
  name: 'Test2',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.test2-container .msg {
  text-align: center;
  margin-top: 50px;
}
</style>
