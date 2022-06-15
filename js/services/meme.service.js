'use strict'

var gImgIdx = 1

var gImgs
  = [
    {
      id: gImgIdx++,
      url: 'imgs/2.jpg',
      keyWords: ['funny', 'cat']
    }]

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 30,
      align: 'left',
      color: 'red'
    }
  ]
}


function getMeme() {
  return gMeme
}

function setImg(id) {
  gMeme.selectedImgId = id
}

function setLineTxt(txt) {
  var line = gMeme.lines
  line[0].txt = txt
  return line[0].txt
}


