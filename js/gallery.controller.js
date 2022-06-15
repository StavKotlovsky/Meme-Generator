'use strict'

function onInit() {
  renderGallery()
}

var gImgIdx = 1

var gImgs = [
  { id: gImgIdx++, url: './imgs/1.jpg', keywords: ['donald trump', 'president', 'moron'] },
  { id: gImgIdx++, url: './imgs/2.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/3.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/4.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/5.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/6.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/7.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/8.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/9.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/10.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/11.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/12.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/13.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/14.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/15.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/16.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/17.jpg', keywords: ['puppies', 'dogs', 'cute'] },
  { id: gImgIdx++, url: './imgs/18.jpg', keywords: ['puppies', 'dogs', 'cute'] },
]

function renderGallery() {
  const elGallery = document.querySelector('.gallery-container')
  var strHtml = ''
  gImgs.forEach(img =>
    strHtml += `<img onclick="onImgSelect(${img.id})" class="img img${img.id}" src=${img.url} alt="">`
  )
  elGallery.innerHTML = strHtml
}

function onImgSelect(id) {
  showMemePage()
  setImg(id)
  renderMeme()
}

function showMemePage() {
  document.querySelector('.gallery-container').style.display = 'none'
  document.querySelector('.meme-container').style.display = 'flex'
}