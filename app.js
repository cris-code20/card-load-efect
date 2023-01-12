const header = document.querySelector('#header');
const title = document.querySelector('#title');
const execpt = document.querySelector('#execpt');
const profile_img = document.querySelector('#profile_img');
const name = document.querySelector('#name');
const date = document.querySelector('#date');

const animateBg = document.querySelectorAll('.animate-bg')
const animateBg_text = document.querySelectorAll('.animate-bg-text')


setTimeout(getDate, 3000)

function getDate(){
    header.innerHTML      = '<img src="laptop.jpg" alt="" />'
    title.innerHTML       = 'Lorem ipsum dolor sit amet.'
    execpt.innerHTML      = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,quidem.' 
    profile_img.innerHTML = '<img src="mujer.jpg" alt="" />'
    name.innerHTML        = 'mari doe'
    date.innerHTML        = 'OCT 08, 2023'

    animateBg.forEach(bg =>{
        bg.classList.remove('animate-bg')
    })

    animateBg_text.forEach(bgText => bgText.classList.remove('animate-bg-text'))
}

