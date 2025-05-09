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

const botonMenu = document.getElementById("toggle-menu");
const menuLateral = document.querySelector(".menu-lateral");

botonMenu.addEventListener("click", () => {
    menuLateral.classList.toggle("abierto");
});

const botonesMenu = document.querySelectorAll(".menu-lateral button");

botonesMenu.forEach(boton => {
    boton.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            menuLateral.classList.remove("abierto");
        }
    });
});