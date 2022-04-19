const worldWidth = 100
const worldHeight = 30

const worldElem = document.querySelector('[data-world]')

setPixelToWorldScale()
window.addEventListener("resize", setPixelToWorldScale)

function setPixelToWorldScale() {
    let worldToPixelScale
    if (window.innerWidth / window.innerHeight < worldWidth / worldHeight) {
        worldToPixelScale = window.innerWidth / worldWidth
    } else {
        worldToPixelScale = window.innerHeight / worldHeight
    }
    console.log(worldToPixelScale)

    worldElem.style.width = `${worldWidth * worldToPixelScale}px`
    worldElem.style.height = `${worldHeight * worldToPixelScale}px`
}
