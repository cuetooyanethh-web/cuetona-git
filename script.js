// 🔴 CURSOR PERSONALIZADO
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    }
});


// 🔴 NAVBAR + TERMINAL SCROLL
const navbar = document.getElementById("navbar");
const terminal = document.querySelector(".terminal");

window.addEventListener("scroll", () => {

    // NAVBAR EFFECT
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = "#000";
            navbar.style.boxShadow = "0 0 10px rgba(255,0,0,0.5)";
        } else {
            navbar.style.background = "rgba(10,10,10,0.9)";
            navbar.style.boxShadow = "none";
        }
    }

    // TERMINAL SHOW
    if (terminal && window.scrollY > 300) {
        terminal.classList.add("show");
    }
});


// 🔴 SCROLL SUAVE
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute('href'));

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// 🔴 EFECTO APARICIÓN
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


// 🔴 TEXTO TIPO HACKER
const texto = "Ingeniería en Ciberseguridad";
let i = 0;

function escribir() {
    const h2 = document.querySelector(".hero-text h2");

    if (!h2) return;

    if (i < texto.length) {
        h2.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, 60);
    }
}

// limpiar texto antes de escribir
const h2 = document.querySelector(".hero-text h2");
if (h2) {
    h2.textContent = "";
    escribir();
}


// 🔴 MATRIX EFECTO
const canvas = document.getElementById("matrix");

if (canvas) {
    const ctx = canvas.getContext("2d");

    const letters = "01";
    const fontSize = 14;
    let columns;
    let drops = [];

    function init() {
        columns = Math.floor(canvas.width / fontSize);
        drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init(); // 🔥 importante
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#ff2e2e";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 33);
}


// 🔴 GLITCH TITLE
const title = document.querySelector(".hero-text h1");

if (title) {
    setInterval(() => {
        title.style.textShadow = `
            ${Math.random() * 5}px 0 red,
            -${Math.random() * 5}px 0 blue
        `;
    }, 100);
}


