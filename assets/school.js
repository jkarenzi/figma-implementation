const dropdown = document.getElementsByClassName('dropdown')[0]
const hamburger = document.getElementsByClassName('ham')[0]

console.log(dropdown)
console.log(hamburger)


hamburger.addEventListener('click', () => {
    if(dropdown.style.display === 'flex'){
        dropdown.style.display = 'none';
    }else{
        dropdown.style.display = 'flex';
    }
})