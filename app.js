//Selecting the Toggle Button and link
const toggleBtn = document.querySelector('.toggleBtn');
const links = document.querySelector('.links');

const toggleAfterClick = () =>  links.classList.toggle('hidden')

toggleBtn.addEventListener('click' , toggleAfterClick)