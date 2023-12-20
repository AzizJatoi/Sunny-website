const navList = document.querySelector('.nav-list')
const hamburgerEl = document.querySelector('.hamburger')


hamburgerEl.addEventListener("click", () => {
    navList.classList.toggle('nav-open')
    hamburgerEl.classList.toggle('hamburger-open')
    console.log("yes")
})

// const nav = document.querySelector(".header-nav")
// const hamburger = document.querySelector(".hamburger")


// hamburger.addEventListener("click", () => {
//     nav.classList.toggle('nav-open')
//     hamburger.classList.toggle('hamburger-open')

// })