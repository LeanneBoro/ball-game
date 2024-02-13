'use strict'


var size = 100

function onBallClick(elBall) {
    size += 50
    elBall.style.height = size + 'px'
    elBall.style.width = size + 'px'
    elBall.innerHTML = size
}