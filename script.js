import { setupGround, updateGround } from './ground.js'
import { setupDino, updateDino, getDinoRects, setDinoLose } from './dino.js'
import { setupCactus, updateCactus, getCactusRects } from './cactus.js'

const worldWidth = 100
const worldHeight = 30
const speedScaleIncrease = 0.00001

const worldElement = document.querySelector('[data-world]')
const scoreElement = document.querySelector('[data-score]')
const startScreenElement = document.querySelector('[data-start-screen]')


setPixelToWorldScale()
window.addEventListener("resize", setPixelToWorldScale)
document.addEventListener("keydown", handleStart, { once: true })

let lastTime
let speedScale
let score
function update(time) {
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime

    updateGround(delta, speedScale)
    updateDino(delta, speedScale)
    updateCactus(delta, speedScale)
    updateSpeedScale(delta)
    updateScore(delta)
    if (checkLose()) return handleLose()

    lastTime = time
    window.requestAnimationFrame(update)
}

function updateSpeedScale(delta) {
    speedScale += delta * speedScaleIncrease
}

function checkLose() {
    const dinoRect = getDinoRects()
    return getCactusRects().some(rect => isCollision(rect, dinoRect))
}

function isCollision(rect1, rect2) {
    return (
        rect1.left < rect2.right &&
        rect1.top < rect2.bottom &&
        rect1.right > rect2.left &&
        rect1.bottom > rect2.top
    )
}

function updateScore(delta) {
    score += delta * 0.01
    scoreElement.textContent = Math.floor(score)
}

function handleStart() {
    lastTime = null
    speedScale = 1
    score = 0
    setupGround()
    setupDino()
    setupCactus()
    startScreenElement.classList.add("hide")
    window.requestAnimationFrame(update)
}

function handleLose() {
    setDinoLose()
    setTimeout(() => {
        document.addEventListener("keydown", handleStart, { once: true})
    }, 100)
}

function setPixelToWorldScale() {
    let worldToPixelScale
    if (window.innerWidth / window.innerHeight < worldWidth / worldHeight) {
        worldToPixelScale = window.innerWidth / worldWidth
    } else {
        worldToPixelScale = window.innerHeight / worldHeight
    }
    console.log(worldToPixelScale )

    worldElement.style.width = `${worldWidth * worldToPixelScale}px`
    worldElement.style.height = `${worldHeight * worldToPixelScale}px`
}
