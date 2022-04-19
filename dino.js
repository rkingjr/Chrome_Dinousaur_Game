const dinoElement = document.querySelector('[data-dino]')
const jumpSpeed = 0.45
const gravity = 0.011
const dinoFrameCount = 2
const frameTime = 100

let isJumping
let dinoFrame
let currentFrameTime
export function setupDino() {
    isJumping = false
    dinoFrame = 0
    currentFrameTime = 0
}

export function updateDino(delta, speedScale) {
    handleRun(delta, speedScale)
    // handleJump()
}

function handleRun(delta, speedScale) {
    if (isJumping) {
        dinoElement.src= `./images/dino-stationary.png`
        return
    }

    if (currentFrameTime >= frameTime) {
        dinoFrame = (dinoFrame + 1) % dinoFrameCount
        dinoElement.src=`./images/dino-run-${dinoFrame}.png`
        currentFrameTime -= frameTime
    }
    currentFrameTime += delta * speedScale
}

// function handleJunp() {

// }
