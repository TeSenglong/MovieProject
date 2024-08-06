let lastScrollY = 0 
const navbar = document.getElementById("hidenn")
window.addEventListener('scroll',() =>{
    const currentScrollY = window.scrollY
    if(currentScrollY > lastScrollY) {
        console.log('scroll Down')
        navbar.classList.add('hiddenn')
    }else {
        console.log('scroll up')
        navbar.classList.remove('hiddenn')
    }
    lastScrollY = currentScrollY
})