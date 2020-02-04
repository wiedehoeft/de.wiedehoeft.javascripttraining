function zaehler() {
  const cache = [];

  return (...numbers) => {

    const result = cache[numbers];
    //....
  }
}

const zaehler1 = zaehler('Zähler1');
console.log(zaehler1()); // Zähler1: 1
console.log(zaehler1()); // Zähler1: 2

const zaehler2 = zaehler('Zähler2');
console.log(zaehler2()); // Zähler1: 1
console.log(zaehler2()); // Zähler1: 2
