const menu = document.getElementById('menu');
const links = document.querySelector('.navbar__links');

menu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    links.classList.toggle('active')
}
)


const accordionTitle = document.querySelectorAll('.accordion__item');
accordionTitle.forEach((event) => {
    event.addEventListener('click', () => {
        if(event.classList.contains('active')) {
            event.classList.remove('active')
        } else {
            event.classList.add('active')
        }
    })
})
