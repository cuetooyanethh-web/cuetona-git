// 🌙 MODO OSCURO / CLARO

const botonModo = document.createElement("button");

botonModo.innerText = "🌙 Modo Oscuro";

botonModo.style.position = "fixed";
botonModo.style.bottom = "20px";
botonModo.style.right = "20px";
botonModo.style.padding = "12px 20px";
botonModo.style.background = "#222";
botonModo.style.color = "#fff";
botonModo.style.border = "none";
botonModo.style.borderRadius = "8px";
botonModo.style.cursor = "pointer";
botonModo.style.fontSize = "14px";
botonModo.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
botonModo.style.zIndex = "999";

document.body.appendChild(botonModo);

let oscuro = false;

botonModo.addEventListener("click", () => {

    if(!oscuro){

        document.body.style.background = "#111";

        document.querySelectorAll(".pagina, .portada")
        .forEach((hoja) => {

            hoja.style.background = "#1e1e1e";
            hoja.style.color = "#fff";

        });

        botonModo.innerText = "☀️ Modo Claro";

        oscuro = true;

    } else {

        document.body.style.background = "#0f0e0e";

        document.querySelectorAll(".pagina, .portada")
        .forEach((hoja) => {

            hoja.style.background = "#fff";
            hoja.style.color = "#000";

        });

        botonModo.innerText = "🌙 Modo Oscuro";

        oscuro = false;
    }

});
// 🔝 BOTÓN VOLVER ARRIBA

const botonArriba = document.createElement("button");

botonArriba.innerText = "⬆";

botonArriba.style.position = "fixed";
botonArriba.style.bottom = "20px";
botonArriba.style.left = "20px";
botonArriba.style.padding = "10px 15px";
botonArriba.style.border = "none";
botonArriba.style.borderRadius = "50%";
botonArriba.style.background = "#b30000";
botonArriba.style.color = "#fff";
botonArriba.style.cursor = "pointer";
botonArriba.style.fontSize = "18px";
botonArriba.style.zIndex = "999";

document.body.appendChild(botonArriba);

botonArriba.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});