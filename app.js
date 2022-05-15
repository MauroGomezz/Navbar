const icon = document.querySelector(".nav-toggle");
const list = document.querySelector(".list")

icon.addEventListener('click', () => {
    list.classList.toggle("links")
})

window.addEventListener('click', (e) =>{
	if(list.classList.contains('links') && e.target != list && e.target != icon) {
		list.classList.toggle("links")
	}
})