<template>
    <div class="messages-container">
        <messages :messages="messages"></messages>
    </div>
</template>
<script>
import Messages from '../components/Messages'
export default {
  name: 'Test',
  components: {
    Messages
  },
  data() {
    return {
      messages: [
        { title: 'javascript', text: 'here is javascript descript' },
        { title: 'html', text: 'here is html descript' },
        { title: 'css', text: 'here is css descript' },
        { title: '前端框架', text: 'here is 前端框架 descript' },
        { title: 'Vue', text: 'here is Vue descript' },
        { title: 'React', text: 'here is React descript' }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      // setTimeout(() => {
      //   this.messages.push({ title: '新加的', text: '新加的内容' })
      // }, 2000)
    })
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;

  .messages-container {
    margin-top: 60px;
    background-color: #4760ff;
    height: 400px;
    width: 500px;
    position: relative;
    left: 300px;
  }
}
</style>
