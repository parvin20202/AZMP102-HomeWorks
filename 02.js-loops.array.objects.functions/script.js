/*
1) Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.

let number, firstNum, averageNum, lastNum;
number = +prompt("3 reqemli edded daxil edin");

if (number >= 100 && number <= 999) {
  lastNum = number % 10;
  averageNum = ((number % 100) - lastNum) / 10;
  firstNum = (number - averageNum * 10 - lastNum) / 100;
  let choose = +prompt(
    "Daxil etdiyiniz eded uzerinde hansi emeliyyati aparmaq isteyirsiniz? 1:Cem 2:Hasil 3:Ededi orta"
  );
  if (choose == 1) {
    console.log(
      `Daxil etdiyiniz ededlerin cemi: ${firstNum + averageNum + lastNum}`
    );
  } else if (choose == 2) {
    console.log(
      `Daxil etdiyiniz ededlerin hasili: ${firstNum * averageNum * lastNum}`
    );
  } else if (choose == 3) {
    console.log(
      `Daxil etdiyiniz ededlerin ededi ortasi: ${
        (firstNum + averageNum + lastNum) / 3
      }`
    );
  } else {
    console.error("Yalnis secim");
  }
} else {
  console.warn(" Daxil etdiyiniz eded 3 reqemli olmalidir");
}
*/

/*
2) Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

let number = +prompt("Eded daxil edin");
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    console.log(`${number} boleni: ${i}`);
  }
}
*/

/*
3) Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

let number,
  count = 0;
number = +prompt("Eded daxil edin");
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    count++;
  }
}
console.log(`Daxil etdiyiniz ${number} ededin bolenlerin sayi ${count}`);
*/

/*
4) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın

for (let i = 0; i <= 10; i++) {
  console.log(i + "x" + i + "=" + i * i);
}
*/

/*
5)  for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın

for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`);
}
*/

/*
6)  0 - 100 arası yalnız sadə ədədləri console'da çap edin

 1ci usul
for (let i = 0; i < 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

2ci usul
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}
*/

/*
7) 0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın

let oddSum = 0,
  evenSum = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 == 1) {
    oddSum += i;
  } else {
    evenSum += i;
  }
}
console.log(`Tek ededlerin cemi:${oddSum} Cut ededlerin cemi:${evenSum}`);
*/

/*
8) studentlərin ortalama score'nu yeni bir arrayda yığın

let sum = 0,
  average,
  newArray = [];
const students = [
  { name: "Ali", scores: [90, 85, 92] },
  { name: "Davud", scores: [100, 100, 100] },
  { name: "Mammal", scores: [75, 80, 85] },
  { name: "Camil", scores: [90, 95, 85] },
];
for (let i = 0; i < students.length; i++) {
  sum += students[i].scores[i];
  average = sum / students[i].scores.length;
  newArray.push(students[i].name, average);
}
console.log(newArray);
*/

/*
9) webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın

const webTechs = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "JS",
  "Redux",
  "Node",
  "JS",
  "MongDB",
];

let newArray = [];
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > 4) {
    newArray.push(webTechs[i]);
  }
}
console.log(newArray);
*/

/*
10) product arrayindəki producların qiymətləri cəmini və ortalamasını tapın

let sumPrice = 0;
const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
  },
];

for (let i = 0; i < products.length; i++) {
  sumPrice += products[i].price;
}

for (let i = 0; i < products.length; i++) {}

console.log(`Umumi qiymetlerin cemi: ${sumPrice}`);
console.log(`Umumi qiymetlerin ededi ortasi ${sumPrice / products.length}`);
*/

/*
11) countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın

let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
for (let i = 0; i < countries.length; i++) {
  if (
    countries[i].startsWith("A") ||
    countries[i][i].startsWith("a") ||
    countries[i].endsWith("A") ||
    countries[i][i].endsWith("a")
  ) {
    console.log(countries[i]);
  }
}
*/

/*
12) Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

let number = +prompt("Bolenlerini tapmaq istediyiniz ededi daxil edin");

function findNumberOfDivisors(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  return count;
}

console.log(findNumberOfDivisors(number));
*/

/*
13) daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin

let sentence = prompt(
  "Daxilinde bosluqlarini tapmaq itediyiniz cumle daxil edin"
);

function findSpaceCounts(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      count++;
    }
  }
  return count;
}

console.log(findSpaceCounts(sentence));
*/

/*
14) printFullName adında funksiya yaradırsız və 2 parameter qəbul edir (firstName: "lorem", lastName: ipsum)

let firstName, lastName;
firstName = prompt("Adinizi daxil edin");
lastName = prompt("Soyadinizi daxil edin");

function printFullName(firstName, lastName) {
  console.log(`Name: ${firstName} Surname: ${lastName}`);
}

console.log(printFullName(firstName, lastName));
*/

/*
15) daxil edilən ədədin kvadratını return edən funksiya yazın

let number = +prompt("Kvadratini hesablamaq istediyiniz ededi daxil edin");

function square(number) {
  return Math.pow(number, 2);
}

console.log(square(number));

/*
16) 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.

let num1, num2;
num1 = +prompt("1ci ededi daxil edin");
num2 = +prompt("2ci ededi daxil edin");

function sum(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function subtruct(num1, num2) {
  return num1 - num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

console.log(sum(num1, num2));
console.log(multiply(num1, num2));
console.log(subtruct(num1, num2));
console.log(divide(num1, num2));
*/

/*
17) Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.

let num1, num2, operator;
num1 = +prompt("1ci ededi daxil edin");
num2 = +prompt("2ci ededi daxil edin");
operator = +prompt("Operatoru daxil edin 1:+ 2:- 3:* 4:/");

function calculator(num1, num2, operator) {
  if (operator == 1) {
    return num1 + num2;
  } else if (operator == 2) {
    return num1 - num2;
  } else if (operator == 3) {
    return num1 * -num2;
  } else if (operator == 4) {
    return num1 / num2;
  } else console.log("Yalnis operator daxil etmisiniz");
}

console.log(calculator(num1, num2, operator));
*/

/*
18) arrayın ilk və son elementinin cəmini return edən function yazın

const getSum = (array) => {
  return array[0] + array.length - 1;
};
console.log(getSum([1,6,2]));
console.log(getSum([2,5,3]));
*/

/*
19) arrayın bütün elementlərinin cəmini qaytaran funksiya yazın

function getSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(getSum([1, 4, 10]));
*/

/*
20) arrayin daxilindəki max elementi return edən funksiya yazın

function getMax(array) {
  return Math.max(...array);
}
console.log(getMax([1, 2, 5]));
*/

/*
21) filterEmployees adında funksiya yaradın, parameter kimi bir array alsın və salary > 60000 olan objectləri return etsin
const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

function filterEmployees(array) {
  let findEmployer = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].salary > 60000) {
      findEmployer.push(array[i]);
    }
  }
  return findEmployer;
}
console.log(filterEmployees(employees));
*/

/*
21) verilmiş ədədin array'in elementləri arasında olub olmadığını müəyyən edən function yazın

function findNumber(array, number) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] == number) {
      return true;
    }
  }
  return false;
}
console.log(findNumber([1, 5, 6], 5));
*/

/*
22)sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın

let sampleNews =
  "As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.";
function findSpaceCounts(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      count++;
    }
  }
  return count;
}
console.log(findSpaceCounts(sampleNews));
*/

/*
23) Daxil edilən iki arrayi birləşdirən funksiya yazın.

function concatArray(array1, array2) {
  let newArray = array1.concat(array2);
  return newArray;
}
console.log(concatArray([1, 5, 7], [2, 6, 8]));
*/

/*
24). Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.

function arrayFill(count, value) {
  let newArray = [];
  for (let i = 0; i < count; i++) {
    newArray.push(value);
  }
  return newArray;
}
console.log(arrayFill(6, 0));
*/

// console.log(array_filled(6, 0));
// Expected Output:
// [0, 0, 0, 0, 0, 0]

/*        Defelere

25) Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni,
3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.

                                Important Message
Muellim dersde sizden sorusmagi ustun tutdum sebeb arxa fonda nece istediyini tam anlamaq isdeyirem


*/

/*
26) Bir funksiya yazın 2 parametr qəbul etsin, birinci başlanğıcı ikinci sonu göstərsin. Siz isə arada qalan rəqəmləri doldurun.


function range(num1, num2) {
  let newArray = [];
  for (let i = num1; i <= num2; i++) {
    newArray.push(i);
  }
  return newArray;
}
console.log(range(1, 4));
*/
