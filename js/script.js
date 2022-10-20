/* **Consegna**
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

//creare html
//creare griglia dinamicamente
//numerare i quadrati
//click quadrati

const container = document.querySelector(`.container`);
const numElements = 100
const numberSquare = []
//creo quadrato

function createSquare(val) {
  const square = document.createElement(`div`)
  square.className = `square`;
  square.innerText = val;
  container.append(square);
}

console.log(numElements);

for (let i = 0; i < numElements; i++) {
  createSquare(i + 1);
}




