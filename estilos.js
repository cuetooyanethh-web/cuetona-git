// 🔴 EFECTO ESCRITURA (TIPO HACKER)
const texto = "App de Gestión de Tareas";
let i = 0;

function escribir() {
    const titulo = document.querySelector("h1");

    if (!titulo) return;

    titulo.textContent = "";

    function loop() {
        if (i < texto.length) {
            titulo.textContent += texto.charAt(i);
            i++;
            setTimeout(loop, 50);
        }
    }

    loop();
}

escribir();


// 🔴 EFECTO GLOW ALEATORIO
const title = document.querySelector("h1");

if (title) {
    setInterval(() => {
        title.style.textShadow = `
            ${Math.random() * 5}px 0 red,
            -${Math.random() * 5}px 0 blue
        `;
    }, 120);
}


// 🔴 EFECTO APARICIÓN
const elementos = document.querySelectorAll(".descripcion, .proyecto-img, .botones, .volver");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elementos.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// 🔴 SCROLL SUAVE (por si agregas más secciones)
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});