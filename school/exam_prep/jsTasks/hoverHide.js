const hoverHideSection = document.querySelector("#hoverHide")
const img = hoverHideSection.querySelector("img")

img.addEventListener("mouseover", hide)
img.addEventListener("mouseleave", show)

function hide() { img.style.opacity = "0" }

function show() { img.style.opacity = "1" }
