// Navbar
const btnAbrir = document.querySelector('#btnAbrir');
const btnCerrar = document.querySelector('#btnCerrar');
const navbar = document.querySelector('#nav');

// Slider
const sliderFrame = document.querySelector('.slider-frame');
const punto = document.querySelectorAll('.punto');
const flecha = document.querySelectorAll('.flecha');


// Navbar
btnAbrir.addEventListener('click', () => {
    navbar.classList.add('visible');
});

btnCerrar.addEventListener('click', () => {
    navbar.classList.remove('visible');
});

// Slider

punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        let posicion = i;
        let operacion = posicion * -50;

        sliderFrame.style.transform = `translateX(${ operacion }%)`;

        punto.forEach( (cadaPunto, i) => {
            punto[i].classList.remove('activo')
        });
        punto[i].classList.add('activo');
    })
})

flecha.forEach((cadaflecha, index) => {
    flecha[index].addEventListener('click', () => {
        let posicion = index;
        let operacion = posicion * -50;

        sliderFrame.style.transform = `translateX(${ operacion }%)`;

        punto.forEach( (cadaPunto, i) => {
            punto[i].classList.remove('activo')
        });
        punto[index].classList.add('activo');
    })
})