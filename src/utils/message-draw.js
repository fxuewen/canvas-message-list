class Message {
  constructor(message, x, y, width, height, style, attr) {
    this.message = message || {}
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.style = style || {}
    this.attr = attr || {}
  }

  draw(ctx) {
    if (!ctx) {
      return
    }

    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = this.style.fillColor || '#fff'
    ctx.strokeStyle = '#fff'
    ctx.rect(this.x, this.y, this.width, this.height)
    ctx.fillStyle = this.style.color || '#black'
    ctx.fillText(this.message.title, this.x + 15, this.y + 30)
    const textwidth = ctx.measureText('新加的title')
    ctx.fillText('新加的title', this.width - textwidth.width - 10, this.y + 30)
    ctx.fillText(this.message.text, this.x + 15, this.y + 30 + 35)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
  }
}

export default Message
