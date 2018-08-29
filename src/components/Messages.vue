<template>
    <div class="messages-canvas-container" ref="container">
        <canvas ref="canvas" @mouseenter="cancleAnimation" @mouseleave="draw"></canvas>
    </div>
</template>
<script>
import Message from '../utils/message-draw'
export default {
  props: ['messages'],
  data() {
    return {
      canvas: null,
      w: 0,
      h: 0,
      ctx: null,
      data: [],
      messageList: []
    }
  },
  watch: {
    messages: {
      handler: function(newValue, oldValue) {
        this.setData(newValue)
      },
      deep: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      const container = this.$refs.container
      this.canvas = this.$refs.canvas
      this.canvas.width = container.clientWidth
      this.canvas.height = container.clientHeight
      const rect = this.canvas.getBoundingClientRect()
      this.w = rect.right - rect.left
      this.h = rect.bottom - rect.top
      this.ctx = this.canvas.getContext('2d')
      this.ctx.font = '20px Microsoft YaHei'
      this.messageList = []
      this.speed = 0.3 // 移动量
      this.maxy = null
      this.style = {
        fillColor: '#4760ff',
        color: '#fff',
        height: 80
      }
      this.loadData(this.messages)
    })
  },
  methods: {
    loadData(data) {
      if (!data) {
        return
      }

      this.data = data

      data.forEach((item, index) => {
        this.addItem(item)
      })

      this.draw()
    },
    setData(data) {
      this.clear()
      this.loadData(data)
    },
    // 添加弹幕列表
    addItem(item) {
      const height = this.style.height
      const x = 0
      let y
      if (this.maxy === null) {
        this.maxy = 0
        y = this.maxy
      } else {
        y = this.maxy + height
        this.maxy = y
      }

      const message = new Message(item, x, y, this.w, height, this.style)
      this.messageList.push(message)
    },
    // 开始绘制
    draw() {
      if (this.messageList.length) {
        this.ctx.clearRect(0, 0, this.w, this.h)
        const maxy = this.maxy > this.h ? this.maxy : this.h
        for (let i = 0; i < this.messageList.length; i++) {
          const message = this.messageList[i]
          if (message.y + message.height < 0) {
            message.y = maxy
            continue
          }
          message.draw(this.ctx)
          message.y -= this.speed
        }
      }
      this.requestId = requestAnimationFrame(this.draw.bind(this))
    },
    cancleAnimation() {
      cancelAnimationFrame(this.requestId)
    },
    clear() {
      this.data = []
      this.maxy = null
      this.messageList = []
      this.cancleAnimation()
    }
  }
}
</script>

<style>
.messages-canvas-container {
  width: 100%;
  height: 100%;
}
.messages-canvas-container canvas {
  width: 100%;
  height: 100%;
}
</style>
