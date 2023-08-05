const nav = document.querySelector(".navigation-mobile");
const burgerBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".navigation-item")
const handleNav = () => {
    nav.classList.toggle("navigation-mobile-active")

    allNavItems.forEach(item => {
        item.addEventListener('click', () =>{
            nav.classList.remove('navigation-mobile-active')
        })
    })
}

burgerBtn.addEventListener("click", handleNav);