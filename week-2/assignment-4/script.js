const myHeading = document.getElementById('myHeading');
const CalltoAction = document.querySelector('.action');
const hide_section = document.querySelector('div.hide-section');
const close = document.getElementById('close');
const burger = document.getElementById('burger');
const nav = document.querySelector('.mobile');

myHeading.addEventListener('click', () => {
    if (myHeading.innerHTML == 'Welcome My Week-1 Assignmet'){
        myHeading.innerHTML = 'Have a Good Time' ;        
    }else{
        myHeading.innerHTML = 'Welcome My Week-1 Assignmet';
    }                          
});

CalltoAction.addEventListener('click', () => {
    if (hide_section.style.display == 'block'){
        hide_section.style.display = 'none';
        CalltoAction.textContent = 'Show Contents';
    }else {
        hide_section.style.display = 'block';
        CalltoAction.textContent = 'Hide Contents';        
    }                         
});

burger.addEventListener('click', ()=> {
    close.style.display = 'block';
    close.style.zIndex = '9999';
    nav.style.display = 'block';
    nav.style.zIndex = '3';
})

close.addEventListener('click', ()=> {
    nav.style.display = 'none';
    close.style.display = 'none';
})