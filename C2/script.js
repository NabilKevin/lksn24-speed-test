const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 600
canvas.height = 500

class Rain 
{
  constructor({
    position,
    width = 5,
    height = 100
  }) {
    this.position = position
    this.width = width
    this.height = height
    this.velocity = {
      y: 5
    }
  }

  draw() {
    c.beginPath()
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
    c.closePath()
  }

  update() {
    this.draw()
    this.move()
  }

  move() {
    this.position.y += this.velocity.y
  }
}

const rains = []

setInterval(() => {
  rains.push(new Rain({
    position: {
      x: Math.random() * 600 - 5,
      y: 0 - 100
    }
  }))
}, 100)

const animate = () => {
  window.requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  rains.forEach((rain, i) => {
    rain.update()
    if(rain.position.y >= canvas.height) {
      rains.splice(i, 1)
    }
  })
}
animate()