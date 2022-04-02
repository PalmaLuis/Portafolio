let darkMode = 0;
const icon_moon = document.getElementById('img-moon');
const icon_sun = document.getElementById('img-sun');

icon_moon.addEventListener('click', () => {
	// para el cambio de icono darkmode
	icon_moon.style.display = 'none';
	icon_sun.style.display = 'inline-block';
})

icon_sun.addEventListener('click', () => {
	// para el cambio de icono darkmode
	icon_moon.style.display = 'inline-block';
	icon_sun.style.display = 'none';
})