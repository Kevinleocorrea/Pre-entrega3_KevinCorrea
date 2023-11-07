let puntajeJugadores = [];
const puntajeEntrenamientos = [];
var lastId = 0;

function calcularPromedio(array) {
    sum = 0;
    array.forEach((element) => {
        sum += element;
    });
    return sum / array.length;
}
function almacenarJugador(jugador) {
    localStorage.setItem("jugadores", JSON.stringify(puntajeJugadores));
}

function agregarJugador(nombreJugador, puntajeEntrenamientos) {
    let promedio = calcularPromedio(puntajeEntrenamientos);
    puntajeEntrenamientos.splice(0, puntajeEntrenamientos.length);


    let jugador = {
        id: "jugador-" + (puntajeJugadores.length + 1),
        nombre: nombreJugador,
        promedio: promedio,
    };

    puntajeJugadores.push(jugador);
    almacenarJugador(jugador);
}


function mostrarJugadores() {

    for (let i = 0; i < puntajeJugadores.length; i++) {

        if (!document.getElementById(puntajeJugadores[i].id)) {
            let li = document.createElement("li");
            li.id = puntajeJugadores[i].id;
            li.textContent = `${puntajeJugadores[i].nombre}: ${puntajeJugadores[i].promedio}` ;
            resultado.appendChild(li);
        }
    }

}

function submitJugador(event) {

    let nombreJugador = document.getElementById("nombreDelJugador").value;
    let entrenamiento1 = parseInt(document.getElementById("entrenamiento1").value);
    puntajeEntrenamientos.push(entrenamiento1);
    let entrenamiento2 = parseInt(document.getElementById("entrenamiento2").value);
    puntajeEntrenamientos.push(entrenamiento2);
    let entrenamiento3 = parseInt(document.getElementById("entrenamiento3").value);
    puntajeEntrenamientos.push(entrenamiento3);

    agregarJugador(nombreJugador, puntajeEntrenamientos);
    mostrarJugadores();
    event.preventDefault();
}

function getJugadoresFromLocalStorage() {
    if (localStorage.getItem('jugadores')) {
        puntajeJugadores = JSON.parse(localStorage.getItem('jugadores'));
    }
}

let formulario = document.getElementById("formulario");
let resultado = document.getElementById("resultado")

getJugadoresFromLocalStorage();
mostrarJugadores();
formulario.addEventListener("submit", submitJugador);