document.getElementById('click-me').addEventListener('click', secondButton)

document.getElementById('button-two').addEventListener('click', buttonOn)

document.getElementById('report').addEventListener ('click', specialButton)
function specialButton () {
  document.getElementById('paragraph').innerHTML = 'Done!'
  document.getElementById('picture').src =
  './images/img1.jpg'
  document.getElementById('background').style.backgroundColor = 'grey'
}

function secondButton () {
  document.getElementById('paragraph').innerHTML = 'Done!'
  document.getElementById('picture').src =
  './images/AlfredAhoPortrait.jpg'
  document.getElementById('background').style.backgroundColor = 'green'
  document.getElementById('paragraph').display = 'none'
}

function buttonOn () {
  document.getElementById('picture').style.display = 'inline'
  document.getElementById('paragraph').innerHTML = 'Done!'
  document.getElementById('picture').src = './images/golden-puppy.jpg'
  document.getElementById('background').style.backgroundColor = 'blue'
  document.getElementById('paragraph').display = 'none'
}

document.getElementById('click-me').addEventListener('click', secondButton)

document.getElementById('button-two').addEventListener('click', buttonOn)

document.getElementById('button-three').addEventListener('click', thirdButton)

function thirdButton () {
  document.getElementById('picture').style.display = 'inline'
  document.getElementById('picture').src = './images/images.jpeg'
  document.getElementById('background').style.backgroundColor = 'orange'
}
