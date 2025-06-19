const spriteSectionB = document.querySelector("#spritesB")
const spriteImgB = spriteSectionB.querySelector("#spriteImgB")

const posXDescB = spriteSectionB.querySelector("#PosXB")
const posYDescB = spriteSectionB.querySelector("#PosYB")
const widthDescB = spriteSectionB.querySelector("#WidthB")
const heightDescB = spriteSectionB.querySelector("#HeightB")
const tagDescB = spriteSectionB.querySelector("#TagNameB")

spriteImgB.addEventListener("click", function() {
  const newSpriteB = new SpriteB(this)
  newSpriteB.getPosX()
  newSpriteB.getPosY()
  newSpriteB.getWidth()
  newSpriteB.getHeight()
  newSpriteB.getTagName()
})

class SpriteB {
  constructor(element) {
    this.rect = element.getBoundingClientRect()

    this.posX = Math.round(this.rect.left)
    this.posY = Math.round(this.rect.top)

    this.width = this.rect.width
    this.height = this.rect.height

    this.tag = element.tagName.toLowerCase()
  }

  getPosX() { posXDescB.textContent = `Position X: ${this.posX}` }
  getPosY() { posYDescB.textContent = `Position Y: ${this.posY}` }
  getWidth() { widthDescB.textContent = `Width: ${this.width}` }
  getHeight() { heightDescB.textContent = `Height: ${this.height}` }
  getTagName() { tagDescB.textContent = `Tag name: ${this.tag}` }
}

