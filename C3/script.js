const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const textData = document.querySelector('.data')

canvas.width = 500
canvas.height = 300

const distance = 25

const positions = []
const move = () => {
  positions.forEach(position => {
    position.x -= distance
  })
}

setInterval(() => {
  move()
  const y = Math.random() * canvas.height
  positions.push({
    x: 500,
    y: y
  });
  textData.textContent = 100 - Math.round(y/canvas.height * 100 ) + '%'
}, 1000)

const update = () => {
  c.fillStyle = 'rgba(0, 255, 0, 0.2)'
  c.strokeStyle = 'green'
  c.beginPath()
  c.moveTo(500 - (distance * positions.length), 300)
  positions.forEach(position => {
    c.lineTo(position.x, position.y)
  })
  c.lineTo(500, 300)
  c.closePath()
  c.stroke()
  c.fill()
}

const percentageLine = (i) => {
  c.strokeStyle = 'rgba(128, 128, 128, 0.5)'
  c.beginPath()
  c.moveTo(0, 300 - Math.round(i/100 * canvas.height ))
  c.lineTo(canvas.width, 300 - Math.round(i/100 * canvas.height ))
  c.closePath()
  c.stroke()
}

const text = (i) => {
  c.fillStyle = 'black'
  c.fillText(`${i}%`, 500 - 20, 300 - Math.round(i/100 * canvas.height), 100)
}

const animate = () => {
  window.requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  for(let i = 0; i < 10; i++) {
    text(i * 10)
    percentageLine(i * 10)
  }

  update()
}
animate()