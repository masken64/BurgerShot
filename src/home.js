
import store from './out.png';

function loadHome() {
    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = `
        <h3 class="opening">"Burger Shot. Die with a smile on your face!"</h3>
        <p class="home">Burger Shot: where heart disease meets happiness! Devour our factory-farmed delights, lovingly crafted to accelerate your journey to the grave with a grin. Join the global parade toward obesity and artery blockage! Remember, at Burger Shot, every bite brings you closer to that blissful, cholesterol-induced demise. Die with a smile on your face!</p>
        <p class="closing">KILL YOUR HUNGER</p>
    `;
    const contentContainer = document.querySelector('.contentContainer');
    const myStore = new Image();
    myStore.src = store;
    myStore.style.height = '200px';
    myStore.style.borderRadius = '10px';
    contentContainer.appendChild(myStore);
    contentContainer.appendChild(content);
}

export default loadHome;
