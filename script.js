// 🔴 NAVBAR EFECTO SCROLL
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#000";
        navbar.style.boxShadow = "0 0 10px rgba(255,0,0,0.5)";
    } else {
        navbar.style.background = "rgba(10,10,10,0.9)";
        navbar.style.boxShadow = "none";
    }
});


// 🔴 SCROLL SUAVE (ya lo tienes en CSS pero esto mejora compatibilidad)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// 🔴 EFECTO APARICIÓN (animación al bajar)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".timeline-item, .projects-card").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// 🔴 TEXTO TIPO HACKER (escribiendo)
const texto = "Ingeniería en Ciberseguridad";
let i = 0;

function escribir() {
    const h2 = document.querySelector(".hero-text h2");

    if (i < texto.length) {
        h2.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, 60);
    }
}

// limpiar antes
document.querySelector(".hero-text h2").textContent = "";
escribir();