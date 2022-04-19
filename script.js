import { setupGround, updateGround } from './ground.js'

const worldWidth = 100
const worldHeight = 30

const worldElement = document.querySelector('[data-world]')

setPixelToWorldScale()
window.addEventListener("resize", setPixelToWorldScale)
document.addEventListener("keydown", handleStart, { once: true })

let lastTime
function update(time) {
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime

    updateGround(delta, 1)

    lastTime = time
    window.requestAnimationFrame(update)
}

function handleStart() {
    lastTime = null
    setupGround()
    window.requestAnimationFrame(update)
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
