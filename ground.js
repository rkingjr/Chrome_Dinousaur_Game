import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"

const speed = 0.05
const groundElements = document.querySelectorAll("[data-ground]")

export function updateGround(delta) {
    groundElements.forEach(ground => {
        incrementCustomProperty(ground, "--left", delta * speed * -1)
    })
}
