import './styles.css';
import loadHome from './home.js';
import burger from './logo.png';



const logo = document.querySelector('.logo');
const myBurger = new Image();
myBurger.src = burger;
myBurger.style.height = '200px';
logo.appendChild(myBurger);


loadHome();

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');


home.addEventListener('click', handleHome);
function handleHome(event){
    const contentContainer = document.querySelector('.contentContainer');
    contentContainer.innerHTML = '';
    
    loadHome();
}

menu.addEventListener('click', handleMenu);
function handleMenu(event){
    const contentContainer = document.querySelector('.contentContainer');
    contentContainer.innerHTML = '';
    contentContainer.innerHTML = 'menu';
    
}
contact.addEventListener('click', handleContact);
function handleContact(event){
    const contentContainer = document.querySelector('.contentContainer');
    contentContainer.innerHTML = '';
    contentContainer.innerHTML = 'contact';
    
}



