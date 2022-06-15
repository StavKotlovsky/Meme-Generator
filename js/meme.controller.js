'use strict'

var gCanvas
var gCtx
gCanvas = document.getElementById('canvas')
gCtx = gCanvas.getContext('2d')

renderMeme()

function renderMeme() {
  var memes = getMeme()
  var memeImg = gImgs.find(img => img.id === memes.selectedImgId)
  var img = new Image()
  img.src = memeImg.url
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    memes.lines.forEach(line => {
      gCtx.font = `${line.size}px Ariel`
      gCtx.fillStyle = line.color
      gCtx.fillText(line.txt, 50, 90)
    })
  }
}

function onChangeTxt(txt) {
  renderMeme()
  setLineTxt(txt)
}

function onGalleryPage() {
  document.querySelector('.gallery-container').style.display = 'grid'
  document.querySelector('.meme-container').style.display = 'none'

}
