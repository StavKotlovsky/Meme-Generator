'use strict'


function onInit() {
  renderGallery()
  setSavedMemes()
}

var gImgIdx = 1

var gImgs = [
  { id: gImgNextId++, url: './imgs/1.jpg', keywords: ['donald trump', 'president', 'moron'] },
  { id: gImgNextId++, url: './imgs/2.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgNextId++, url: './imgs/3.jpg', keywords: ['funny', 'dog', 'sleep', 'baby'] },
  { id: gImgNextId++, url: './imgs/4.jpg', keywords: ['funny', 'cat', 'tired'] },
  { id: gImgNextId++, url: './imgs/5.jpg', keywords: ['funny', 'baby', 'mad'] },
  { id: gImgNextId++, url: './imgs/6.jpg', keywords: ['explaing', 'history'] },
  { id: gImgNextId++, url: './imgs/7.jpg', keywords: ['baby', 'funny', 'cute'] },
  { id: gImgNextId++, url: './imgs/8.jpg', keywords: ['funny', 'actor', 'men'] },
  { id: gImgNextId++, url: './imgs/9.jpg', keywords: ['baby', 'funny', 'evil'] },
  { id: gImgNextId++, url: './imgs/10.jpg', keywords: ['president', 'funny', 'men', 'barak obama'] },
  { id: gImgNextId++, url: './imgs/11.jpg', keywords: ['kiss', 'fight', 'men'] },
  { id: gImgNextId++, url: './imgs/12.jpg', keywords: ['men', 'what will you do', 'you'] },
  { id: gImgNextId++, url: './imgs/13.jpg', keywords: ['actor', 'men', 'cheers'] },
  { id: gImgNextId++, url: './imgs/14.jpg', keywords: ['men', 'metrix', 'actor'] },
  { id: gImgNextId++, url: './imgs/15.jpg', keywords: ['men', '0', 'zero'] },
  { id: gImgNextId++, url: './imgs/16.jpg', keywords: ['funny', 'men', 'actor'] },
  { id: gImgNextId++, url: './imgs/17.jpg', keywords: ['putin', 'men', 'president'] },
  { id: gImgNextId++, url: './imgs/18.jpg', keywords: ['buzz', 'woodie', 'funny'] },
]

function renderGallery() {
  const elGallery = document.querySelector('.gallery-container')
  var strHtml = ''
  gImgs.forEach(img =>
    strHtml += `<img onclick="onImgSelect(${img.id})" class="img img${img.id}" src=${img.url} alt="">`
  )
  elGallery.innerHTML = strHtml
}

function renderSavedImgs() {
  showGallery()
  const elGallery = document.querySelector('.gallery-container')
  var strHtml = ''
  gSaveMeme.forEach(meme => {
    var id = meme.selectedImgId
    var img = gImgs.find(img => img.id === id)
    strHtml += `<img onclick="onImgSelect(${img.id})" class="img img${img.id}" src=${img.url} alt="">`
  }
  )
  elGallery.innerHTML = strHtml
}

function onImgSelect(id) {
  showMemePage()
  initMeme(id)
}

function showMemePage() {
  document.querySelector('.gallery-container').classList.add('hidden')
  document.querySelector('.main-footer').classList.add('hidden')
  document.querySelector('.meme-container').classList.remove('hidden')
}

function showGallery() {
  document.querySelector('.meme-container').classList.add('hidden')
  document.querySelector('.gallery-container').classList.remove('hidden')
  document.querySelector('.main-footer').classList.add('hidden')
}

