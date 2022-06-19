'use strict'


const STORAGE_KEY = 'memesDB'

let gSaveMeme
let gImgNextId = 1

const NEW_LINE_TXT = 'Enter text'

let gStickers = [
  '<img class="sticker" src="./Stickers/5.png">',
  '<img class="sticker" src="./Stickers/6.png">',
  '<img class="sticker" src="./Stickers/7.png">',
  '<img class="sticker" src="./Stickers/8.png">'
]


let gMeme


function createMeme(selectedImgId) {
  gMeme = {
    selectedImgId,
    selectedLineIdx: 0,
    lines: [
      {
        txt: NEW_LINE_TXT,
        size: 30,
        align: 'middle',
        color: 'purple',
        font: 'monospace',
        pos: { x: 150, y: 60 },
        isSaved: false,
        isDrag: false
      }
    ]
  }
}

function getMeme() {
  return gMeme
}

function setSticker() {
  const line = gMeme.lines
  const currText = line[gMeme.selectedLineIdx]
  currText.txt = gStickers
  console.log(currText)

}

function setImg(id) {
  gMeme.selectedImgId = id
}

function getSavedMemes() {
  return gSaveMeme
}

function setSize(diff) {
  const line = gMeme.lines
  const currSize = line[gMeme.selectedLineIdx]
  const newSize = currSize.size + diff
  if (newSize > 110 || newSize < 20) return
  currSize.size += diff
}

function setLineTxt(txt) {
  const line = gMeme.lines
  const currText = line[gMeme.selectedLineIdx]
  currText.txt = txt
  return currText.txt
}

function setColor(color) {
  const line = gMeme.lines
  const currColor = line[gMeme.selectedLineIdx]
  currColor.color = color
  return currColor.color
}

function addLine() {
  const newLine = {
    txt: NEW_LINE_TXT,
    size: 30,
    align: 'middle',
    font: 'monospace',
    pos: { x: 150, y: 400 },
    color: 'purple',
    isSaved: false,
    isDrag: false

  }
  gMeme.lines.push(newLine)
  if (gMeme.selectedLineIdx >= 1) {
    newLine.pos = { x: 150, y: 200 }
    newLine.color = 'black'
  }
  gMeme.selectedLineIdx++
}

function changeFont(font) {
  gMeme.lines[gMeme.selectedLineIdx].font = font
}

function alignTxt(direction) {
  const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
  if (direction === 'left') {
    selectedLine.pos.x = 10
    selectedLine.align = 'left'
  } else if (direction === 'right') {
    let txtWidth = gCtx.measureText(selectedLine.txt)
    let right = gCanvas.width - 10 - txtWidth.width
    selectedLine.pos.x = right
    selectedLine.align = 'right'
  } else if (direction === 'middle') {
    var txtWidth = gCtx.measureText(selectedLine.txt)
    var middle = gCanvas.width / 2 - txtWidth.width / 2
    selectedLine.pos.x = middle
    selectedLine.align = 'middle'
  }
}

function removeSelectedLine() {
  if (!gMeme.lines.length) return
  gMeme.lines.splice(gMeme.selectedLineIdx, 1)
  switchLine()
}

function switchLine() {
  gMeme.selectedLineIdx++
  if (gMeme.selectedLineIdx > gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
}

function saveMeme() {
  gMeme.isSaved = true
  gSaveMeme.push(gMeme)
  _saveMemeToStorage()
}

function setSavedMemes() {
  gSaveMeme = _loadMemeFromStorage()
  if (!gSaveMeme || !gSaveMeme.length) {
    gSaveMeme = []
  }
}

function _saveMemeToStorage() {
  saveToStorage(STORAGE_KEY, gSaveMeme)
}

function _loadMemeFromStorage() {
  return loadFromStorage(STORAGE_KEY)
}