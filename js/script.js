// Promesa para que el núumero aleatorio se genere dentro y lo resuleva y pueda compararlo al final
// setTimeout() esto lo que hace es que al pasar 5 segundos aparece el número aleatrio
// setInterval() esto lo que hace es contabilizar paso a paso intervalos de tiempo

// número aleatorio -> Math.random() -> revisar la documentación porque no me acuerdo como se hace
// Coger el valor del usuario del input id userInput
// Poner el resultado final id result
// Poner la cuenta atrás del setInterval id countdown
// reestablecer el juego con el botón id restart

let time = 5;
let userNumber = 0;
const userInput = document.getElementById("userInput"),
  result = document.getElementById("result"),
  countdown = document.getElementById("countdown");
restart = document.getElementById("restart");

const randomNumber = (min, max) => Math.floor(Math.random() * (min, max) + min);

userInput.addEventListener("change", () => {
  userNumber = userInput.value;
});

function startGame() {
  count();
  const mysteryNumber = new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomNumber(1, 3));
    }, 6000);
  });
  return mysteryNumber;
}

startGame().then((number) => {
  let mensaje = "";
  if (number == userNumber) {
    mensaje = `¡Has salvado el mundo!. El número seleccionado es ${userNumber} y el número aleatorio es ${number}`;
  } else {
    mensaje = `¡Ha estallado el mundo!. El número seleccionado es ${userNumber} y el número aleatorio es ${number}`;
  }
  result.innerHTML = `<p>${mensaje}</p>`;
});

function count() {
  const intervalo = setInterval(() => {
    if (time === 0) {
      clearInterval(intervalo);
    }
    countdown.innerHTML = `<p>${time}</p>`;
    time--;
  }, 1000);
}

restart.addEventListener("click", () => {
  location.reload();
});
