const spriteSection = document.querySelector("#sprites")
const spriteImg = spriteSection.querySelector("#spriteImg")

const posXDesc = spriteSection.querySelector("#PosX")
const posYDesc = spriteSection.querySelector("#PosY")
const widthDesc = spriteSection.querySelector("#Width")
const heightDesc = spriteSection.querySelector("#Height")
const tagDesc = spriteSection.querySelector("#TagName")

spriteImg.addEventListener("click", function() {
  const newSprite = Object.create(sprite.prototype)
  sprite.call(newSprite, this)
  newSprite.getPosX()
  newSprite.getPosY()
  newSprite.getWidth()
  newSprite.getHeight()
  newSprite.getTagName()
})


function sprite(element) {
  this.rect = element.getBoundingClientRect()

  this.posX = Math.round(this.rect.left)
  this.posY = Math.round(this.rect.top)

  this.width = this.rect.width
  this.height = this.rect.height

  this.tag = element.tagName.toLowerCase()
}

sprite.prototype.getPosX = function() {
  posXDesc.textContent = `Position X: ${this.posX}`
}

sprite.prototype.getPosY = function() {
  posYDesc.textContent = `Position Y: ${this.posY}`
}

sprite.prototype.getWidth = function() {
  widthDesc.textContent = `Width: ${this.width}`
}

sprite.prototype.getHeight = function() {
  heightDesc.textContent = `Height: ${this.height}`
}

sprite.prototype.getTagName = function() {
  tagDesc.textContent = `Tag name: ${this.tag}`
}

