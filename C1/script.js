const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 400
canvas.height = 400

const color = ['blue', 'red', 'green']
const velocitys = [
  {
    x: 3,
    y: 0
  },
  {
    x: 3,
    y: 3
  },
  {
    x: 0,
    y: 3
  }
]
const positions = [
  {
    x: 0,
    y: canvas.height/2 - 10
  },
  {
    x: 3,
    y: 3
  },
  {
    x: canvas.width/2 - 10,
    y: 0
  }
]

class Cube 
{
  constructor({
    position,
    width = 20,
    height = 20,
    color,
    velocity
  }) {
    this.position = position
    this.width = width
    this.height = height
    this.color = color
    this.velocity = velocity
  }

  draw() {
    c.beginPath()
    c.fillStyle = this.color
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
    c.closePath()
  }

  update() {
    this.draw()
    this.move()
  }

  move() {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    if(this.position.x + this.velocity.x + this.width >= canvas.width || this.position.x + this.velocity.x < 0) {
      this.velocity.x = -this.velocity.x
    }
    if(this.position.y + this.velocity.y + this.height >= canvas.height || this.position.y + this.velocity.y < 0) {
      this.velocity.y = -this.velocity.y
    }
  }
}

const cubes = [...Array(3)].map((_, i) => new Cube({
  position: positions[i],
  color: color[i],
  velocity: velocitys[i]
}))

const animate = () => {
  window.requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  cubes.forEach(cube => {
    cube.update()
  })
}

animate()