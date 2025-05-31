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

// Cierra el menú al hacer clic en cualquier botón del menú
const menuButtons = menu.querySelectorAll("button, a");

menuButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Evitar cerrar si es el botón del dropdown
    if (!btn.classList.contains("dropbtn") && menu.classList.contains("abierto")) {
      menu.classList.remove("abierto");
    }
  });
});