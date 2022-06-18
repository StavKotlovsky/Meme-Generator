'use strict'

var gCanvas
var gCtx
var gStartPos
var gImg = new Image()
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

function initMeme(selectedImgId) {
  gCanvas = document.getElementById('canvas')
  gCtx = gCanvas.getContext('2d')

  createMeme(selectedImgId)
  const memeImg = gImgs.find(img => img.id === selectedImgId)
  gImg.onload = () => { renderMeme() }
  gImg.src = memeImg.url
}

function renderMeme() {
  const meme = getMeme()
  gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
  meme.lines.forEach((line, idx) => {
    gCtx.font = `${line.size}px ${line.font}`
    if (idx === meme.selectedLineIdx) {
      drawSelectedBox(line)
    }
    gCtx.fillStyle = line.color
    gCtx.fillText(line.txt, line.pos.x, line.pos.y)
  })
  renderStickers()
}

function renderStickers() {
  const stickers = getStickers()
  const strHTMLs = stickers.map((sticker) =>
    `<button onclick="onStickerSelect(this)">${sticker}</button>`
  )
  document.querySelector('.stickers-container').innerHTML = strHTMLs.join('')
}

function onStickerSelect(el) {
  const selectedSticker = el.querySelector('img')
  gCtx.drawImage(selectedSticker, gCanvas.width / 2, gCanvas.height / 2, 80, 80)
}

function drawSelectedBox(selectedLine) {
  var info = gCtx.measureText(selectedLine.txt)
  drawRect(selectedLine.pos, info.width, info.fontBoundingBoxAscent)
}

function drawRect(pos, width, height) {
  gCtx.beginPath()
  const boxDiff = 5
  gCtx.rect(pos.x - boxDiff, pos.y - height, width + boxDiff * 2, height + boxDiff * 2);
  gCtx.fillStyle = '#02020229'
  gCtx.fillRect(pos.x - boxDiff, pos.y - height, width + boxDiff * 2, height + boxDiff * 2);
  gCtx.strokeStyle = 'black'
  gCtx.stroke()
}

function onSizeChange(diff) {
  setSize(diff)
  renderMeme()
}

function onChangeTxt(txt) {
  setLineTxt(txt)
  renderMeme()
}

function onChangeColor(color) {
  setColor(color)
  renderMeme()
}

function onChangeFont(font) {
  changeFont(font)
  renderMeme()
}

function onAlignTxt(direction) {
  alignTxt(direction)
  renderMeme()
}

function onAddLine() {
  addLine()
  document.querySelector('.txt-input').value = ''
  renderMeme()
}

function onRemoveSelectedLine() {
  removeSelectedLine()
  renderMeme()
}

function onSwitchLine() {
  switchLine()
  const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
  var textInp = document.querySelector('.txt-input')
  textInp.value = selectedLine.txt === NEW_LINE_TXT ? '' : selectedLine.txt
  renderMeme()
}

function onGalleryPage() {
  document.querySelector('.gallery-container').classList.remove('hidden')
  document.querySelector('.main-footer').classList.remove('hidden')
  document.querySelector('.meme-container').classList.add('hidden')
  renderGallery()
}

function onSaveMeme() {
  saveMeme()
}

function onDownloadMeme(elLink) {
  var imgContent = gCanvas.toDataURL('image/jpeg')
  elLink.href = imgContent
}