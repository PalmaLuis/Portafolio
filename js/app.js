const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

let flag = 0;
navToggle.addEventListener('click', () => {
	// alert("pelig")
	if (flag === 0) {
		navMenu.style.left = 0;
		navMenu.style.transition = '0.5s';
		flag = 1;
	} else {
		navMenu.style.left = '100%';
		navMenu.style.transition = '0.5s';
		flag = 0;
	}
});

let darkMode = 0;
const icon_moon = document.getElementById('img-moon');
const icon_sun = document.getElementById('img-sun');
const cuerpo = document.getElementById('body');
const header = document.getElementById('header');
const links_nav = document.querySelectorAll('.nav-menu-link');
const logo = document.getElementById('logo');
const curvitas = document.querySelectorAll('.curvitas');
const first_section = document.getElementById('first-name')

icon_moon.addEventListener('click', () => {
	// para el cambio de icono darkmode
	icon_moon.style.display = 'none';
	icon_sun.style.display = 'inline-block';

	// cambios que se haran en la pagina
	cuerpo.classList.add('dark-active');
	header.classList.add('dark-active');
	logo.classList.add('dark-active');
  first_section.classList.add('dark-active')

	curvitas.forEach((elemento) => elemento.classList.add('dark-active'));
	links_nav.forEach((elemento) => elemento.classList.add('dark-active'));
});

icon_sun.addEventListener('click', () => {
	// para el cambio de icono darkmode
	icon_moon.style.display = 'inline-block';
	icon_sun.style.display = 'none';

	// cambios que se haran en la pagina
	cuerpo.classList.remove('dark-active');
	header.classList.remove('dark-active');
	logo.classList.remove('dark-active');

	curvitas.forEach((elemento) => elemento.classList.remove('dark-active'));
	links_nav.forEach((elemento) => elemento.classList.remove('dark-active'));
});
