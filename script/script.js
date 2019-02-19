/* ALL THE CONSTS -------------------------------------------------*/

const restart = document.querySelector('.restartbutton')
const startbutton = document.querySelector('.startbutton')
const text = document.querySelector(".text")
const buttonturn = document.querySelector('.buttonturn')
const buttonstop = document.querySelector('.buttonstop')
const redplanetbutton = document.querySelector('.planetcolorbutton1')
const yellowplanetbutton = document.querySelector('.planetcolorbutton2')
const purpleplanetbutton = document.querySelector('.planetcolorbutton3')
const border = document.querySelectorAll('.border')
const radiationtestbutton = document.querySelector('.radiationtestbutton')
const bar = document.querySelectorAll('.bar')
const error = document.querySelector('.errortext')
const buttondestroy = document.querySelector('.buttondestroy')
const buttonmoon = document.querySelector('.buttonmoon')
const moon = document.querySelector('.moon')
const moonborder = document.querySelectorAll('.moonborder')
const connectiontestbutton = document.querySelector('.connectiontestbutton')
const circle = document.querySelectorAll('.circle')
const bigcircle = document.querySelector('.bigcircle')

/* STARTING BUTTON FADE EFFECT -------------------------------------------------*/

startbutton.addEventListener('click',
() =>{
  text.classList.add("textanimation")

})

/* TURN/STOP PLANET -------------------------------------------------*/
buttonturn.addEventListener('click',
() =>{

for (let i = 0; i < 24; i++) {
  border[i].classList.add(`animation${[i]}`)
}})

buttonstop.addEventListener('click',
() =>{
for (let i = 0; i < 24; i++) {
  border[i].classList.remove(`animation${[i]}`)

}})

/* PLANET CHANGING COLORS BUTTONS -------------------------------------------------*/

redplanetbutton.addEventListener('click',
() =>{
for (let i = 0; i < 24; i++) {
  border[i].style.border = '0.5px solid red'
  border[i].style.boxShadow = '0px 0px 3px #c0392b'

  /* Transition but its freezing the site -------------------------------------------------
  border[i].classList.add('redplanetanim')
  border[i].style.border = '0.5px solid red'
  border[i].style.boxShadow = '0px 0px 3px #c0392b'
  */
}})

yellowplanetbutton.addEventListener('click',
() =>{
for (let i = 0; i < 24; i++) {
  border[i].style.border = '0.5px solid #f1c40f'
  border[i].style.boxShadow = '0px 0px 3px #f39c12'
}})

purpleplanetbutton.addEventListener('click',
() =>{
for (let i = 0; i < 24; i++) {
  border[i].style.border = '0.5px solid #9b59b6'
  border[i].style.boxShadow = '0px 0px 3px #8e44ad'
}})

/* MOON BUTTONS -------------------------------------------------*/
buttonmoon.addEventListener('click',
() =>{


  moon.classList.add('moonanimation')
  for (let i = 0; i < 24; i++){
  moonborder[i].classList.add(`animationmoon${[i]}`)

}})


buttondestroy.addEventListener('click',
() =>{

for (let i = 0; i < 24; i++) {
  moonborder[i].classList.remove(`animationmoon${[i]}`)
  moonborder[i].classList.add(`moondestruction${i}`)
  moonborder[i].style.opacity= '0'

}})
/* RELOAD */

restart.addEventListener('click',
() =>{
  window.location.reload();
})


/* RADIATION TEST BUTTON -------------------------------------------------*/

radiationtestbutton.addEventListener('click',
() =>{
  for (let i = 0; i < 20; i++) {
  bar[i].classList.remove('animationbar')
  bar[i].classList.add('animationbar2')


}
  error.classList.add('erroranimation')
})


/* CONNECTION DESTROY BUTTON -------------------------------------------------*/

connectiontestbutton.addEventListener('click',
() =>{
  bigcircle.classList.add('connectionlost')

})
