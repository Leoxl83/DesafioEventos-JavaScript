const nom = document.getElementById ("nom");
const apell = document.getElementById ("apell");

const btnReg = document.getElementById("btnReg");
    btnReg.addEventListener("click", () => {
    saludar()
});

function saludar() {
     const saludo = document.getElementById("Saludo")
     saludo.innerHTML = `Bienvenido/a: ${nom.value} ${apell.value} al curso JavaScript`
 }
