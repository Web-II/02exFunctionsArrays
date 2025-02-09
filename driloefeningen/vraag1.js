// 1. Definieer een functie left(string,length) die het eerste karakter
// of de eerste karakters in een string als resultaat geeft,
// op basis van het aantal opgegeven karakters.
// Voorbeelden:
// left('abcd') returnt 'a'
// left('abcd', 2) returnt 'ab'

console.log(left("abcd")); // a
console.log(left("abcd", 2)); // ab

// 2. Herschrijf getAvatar() met een 'function expression'
function getAvatar(points) {
  let avatar;
  if (points < 100) {
    avatar = "Mouse";
  } else if (points < 1000) {
    avatar = "Cat";
  } else {
    avatar = "Gorilla";
  }
  return avatar;
}

const myAvatar = getAvatar(335);
console.log(myAvatar);

// 3. Creëer een array 'myArray' met de volgende elementen: "bob", 23, false

// 4. Wat wordt er afgebeeld in de console?
console.log(["uno", "dos", "tres"].length);

// 5. Wat wordt er afgebeeld in de console?
const arr = [1, "bob"];
console.log(arr[1]);

// 6. Wat wordt er afgebeeld in de console?
const b = [1, 2];
b[0] = "test";
console.log(b);

// 7. Geef het eerste en het laatste element van de array 'dieren' weer in de console.
// Jouw code moet voldoende algemeen zijn zodat als er dieren worden toegevoegd
// ze blijft werken.
const dieren = ["paard", "varken", "koe", "kip"];

// 8.
// - Overloop de volledige array 'words' met een for-lus en concateneer alles tot 1 string.
//   Gebruik als scheidingsteken een min-teken.
//   Geef de bekomen string 'teenage-mutant-ninja-turtles' weer in de console.
// - Kan je hetzelfde resultaat bekomen met een in JavaScript ingebouwde array-method?
const words = ["teenage", "mutant", "ninja", "turtles"];

// 9. Wat denk je dat er wordt afgebeeld in de console?
// Controleer door in de Developer Tools de expressie
//     typeof ['katten']
// in te typen in de Console.
console.log(typeof ["katten"]);

// 10. Wat denk je dat er wordt afgebeeld in de console?
// Controleer door in de Developer Tools de expressie
//     [1, 89] === [1, 89];
// in te typen in de Console.
console.log([1, 89] === [1, 89]);

// 11. Wat wordt er afgebeeld in de console?
const blue = ["da ba dee da ba da"];
const green = blue;
console.log(blue === green);

// 12.
// a) Voeg vooraan aan de array 'numberArray' het getal 11 toe en achteraan het getal 55.
//    De te bekomen array is [11, 101, 22 ,33 ,55].
// b) Verwijder het tweede element uit de array.
// c) Gebruik de methode arr.splice() om net voor het laatste element
//    het getal 44 toe te voegen.
//    De te bekomen array is [11, 22, 33, 44, 55]
const numberArray = [101, 22, 33];

console.log(numberArray); // [11, 22, 33, 44, 55]

// 13. Definieer een functie getNumbers(arr).
// Deze functie zet een array om naar een nieuwe array die enkel de elementen uit de array bevat
// die van het type number zijn. Werk met een for-of-lus.

const vanalles = [1, 40, "bob", [], false, 89];
// console.log(getNumbers(vanalles)); // [1, 40, 89]

// 14. Log de gevraagde zaken naar de console zonder de array "origineel"
//     te wijzigen
const origineel = ["D", "B", "A", "E", "C"];
// - de originele array gesorteerd

// - de originele array in omgekeerde volgorde

// - de originele array met de 2 letters "A" en "E" vervangen door 1 letter "Z"

// - de originele array is ongewijzigd:
console.log(origineel); // ["D", "B", "A", "E", "C"]
