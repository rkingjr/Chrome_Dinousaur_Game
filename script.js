const worldElement = document.querySelector("[data-world]")
const worldWidth = 100
const worldHeight = 30

setPixelToWorldScale()
window.addEventListener("resize", setPixelToWorldScale)

function setPixelToWorldScale() {
    let worldPixelScale
    if (window.innerWidth / window.innerHeight < worldWidth / worldHeight) {
        worldToPixelScale = window.innerWidth / worldWidth
    } else {
        worldToPixelScale = window.innerHeight / worldHeight
    }

    worldElement.style.width = `${worldWidth * worldToPixelScale}px`
    worldElement.style.height = `${worldHeight * worldPixelScale}px `
}
