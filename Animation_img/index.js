import { arrImg } from "./img_url.js";

const animArray = 
 ['animate__bounce',
'animate__flash',
'animate__pulse',
'animate__rubberBand',
'animate__shakeX',
'animate__shakeY',
'animate__headShake',
'animate__swing',
'animate__tada',
'animate__wobble',
'animate__jello',
'animate__heartBeat',
'animate__backInDown',
'animate__backInLeft',
'animate__backInRight',
'animate__backInUp',
'animate__backOutDown',
'animate__backOutLeft',
'animate__backOutRight',
'animate__backOutUp ',
'animate__bounceIn',
'animate__bounceInDown'
]
const gallary = document.querySelector('.gallary')
const btnNext = document.querySelector('#btn_next')
const btnBack = document.querySelector('#btn_back')
const h2 = document.querySelector('.animation_name')
// let count = 0;
// let animCount = 0;
let currentSlide = 0;
btnNext.addEventListener('click', nextImgOnClick)
btnBack.addEventListener('click', backImgOnClick)
  const img = document.createElement('img')
  img.classList.add(`${animArray[currentSlide]}`)


  gallary.prepend(img)

  nextImgOnClick(currentSlide)
function nextImgOnClick(){

if(currentSlide >= arrImg.length){
  currentSlide = 0;
  }else{
    img.classList.remove(`${animArray[currentSlide]}`)
    h2.textContent = `${animArray[currentSlide]}`
     currentSlide++
 
    }
makeImg()  
  img.classList.add(`${animArray[currentSlide]}`)

console.log(currentSlide)

 
}

function backImgOnClick(){ 
  img.classList.remove(`${animArray[currentSlide]}`)
  if(currentSlide <= 0){
    currentSlide = arrImg.length
}else{
  currentSlide-=1
}
img.classList.add(`${animArray[currentSlide]}`)
h2.textContent = `${animArray[currentSlide]}`
  makeImg(currentSlide)  
}

makeImg(currentSlide)  
function makeImg(){
  console.log(arrImg[currentSlide].src)
img.classList.add('item')
img.classList.add('animate__animated')

img.src = arrImg[currentSlide].src


}


