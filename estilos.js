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
alert("Bienvenido al Proyecto de Ciberseguridad");