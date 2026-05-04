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
    if (terminal && window.scrollY > 500) {
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
    const h1 = document.querySelector(".hero-text h2");

    if (!h1) return;

    if (i < texto.length) {
        h1.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, 60);
    }
}

// limpiar texto
const h1 = document.querySelector(".hero-text h2");
if (h1) {
    h1.textContent = "";
    escribir();
}


// 🔴 MATRIX EFECTO
const canvas = document.getElementById("matrix");

if (canvas) {
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const letters = "01";
    const fontSize = 14;
    let columns = canvas.width / fontSize;
    let drops = [];

    function init() {
        columns = canvas.width / fontSize;
        drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
    }

    init();

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


// 🔴 TERMINAL HACKER
const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

if (input && output) {

    input.addEventListener("keydown", function(e) {

        if (e.key === "Enter") {

            const command = input.value.toLowerCase();
            let response = "";

            if (command === "help") {
                response = "help | about | skills | whoami | ip | hack | clear";
            }
            else if (command === "about") {
                response = "Especialista en ciberseguridad 🔐";
            }
            else if (command === "skills") {
                response = "Nmap | Metasploit | Burp Suite | Wireshark";
            }
            else if (command === "whoami") {
                response = "cybercueto@root";
            }
            else if (command === "ip") {
                const fakeIP = `192.168.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;
                response = `Tu IP: ${fakeIP}`;
            }
            else if (command === "hack") {
                simularHackeo();
                input.value = "";
                return;
            }
            else if (command === "clear") {
                output.innerHTML = "";
                input.value = "";
                return;
            }
            else {
                response = "❌ Comando no reconocido";
            }

            output.innerHTML += `<p>> ${command}</p>`;
            output.innerHTML += `<p>${response}</p>`;
            output.scrollTop = output.scrollHeight;

            input.value = "";
        }
    });
}


// 🔴 SIMULACIÓN HACK
function simularHackeo() {
    const pasos = [
        "[+] Iniciando...",
        "[+] Escaneando red...",
        "[+] IP detectada...",
        "[+] Puerto 22 abierto",
        "[+] Acceso root...",
        "[✔] SYSTEM COMPROMISED 💀"
    ];

    let i = 0;

    function ejecutar() {
        if (i < pasos.length) {
            output.innerHTML += `<p>${pasos[i]}</p>`;
            output.scrollTop = output.scrollHeight;
            i++;
            setTimeout(ejecutar, 600);
        }
    }

    ejecutar();
}
