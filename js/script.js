function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
    seccion.style.display = 'none';
  });

  const activa = document.getElementById(id);
  if (activa) {
    activa.style.display = 'block';
  }
}


const toggleBtn = document.getElementById("toggle-menu");
const menu = document.querySelector(".navbar-menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("abierto");
});