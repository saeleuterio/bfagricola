// Menu responsivo
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Scroll reveal para a seção "sobre"
const sobreSection = document.querySelector(".sobre");

window.addEventListener("scroll", () => {
    const posicao = sobreSection.getBoundingClientRect().top;
    const alturaTela = window.innerHeight / 1.2;

    if (posicao < alturaTela) {
        sobreSection.classList.add("visible");
    }
});
