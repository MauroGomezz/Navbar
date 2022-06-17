const icon = document.querySelector(".nav-toggle");
const list = document.querySelector(".list")

icon.addEventListener('click', () => {
    list.classList.toggle("links")
})
