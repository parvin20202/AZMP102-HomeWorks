/*
Rəqəmləri eyni olan bütün iki rəqəmli ədələrin çapa verən proqram tərtib edin.

function findSame() {
  let fill = [];
  for (let i = 10; i < 100; i++) {
    let num1 = i % 10;
    let num2 = Math.floor(i / 10);
    if (num1 == num2) {
      fill.push(i);
    }
  }
  return fill;
}
console.log(findSame());
*/

/*
3 rəqəmli ədədin rəqəmlərindən ibarət olan max kombinasiyanı return edən funksiya yazı

function findMaxNumber(number) {
  return number
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
console.log(findMaxNumber(461));
*/

/*
Daxil edilən cümlədə necə söz olduğun tapan funksiya yazın.

function findWord(sentence) {
  return sentence.trim().split(" ");
}
let sentence = prompt("Sozlerini sayini tapmaq istediyiniz cumleni yazin");

console.log(findWord(sentence));
*/
