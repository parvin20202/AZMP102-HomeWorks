let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)
const startT = arr.filter((item) => item.name.startsWith("t"));
console.log(startT);

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
let count = 0;
arr.forEach((item) => {
  if (item.name.startsWith(t) && item.name.endsWith("t")) {
    count++;
  }
});
console.log(count);

// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
let sum = 0;
arr.forEach((item) => {
  if (item.name.startsWith(t) && item.name.endsWith("t")) {
    sum += item.key;
  }
});
console.log(sum);

// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
const replaceName = arr.filter((item) => item.name.endsWith("e"));
replaceName.forEach((item) => {
  item.name = "SuperDev";
});
console.log(replaceName);

// 5) "name"-i en uzun olan obyekti tapin

// 6) "name"-i en uzun olan obyektin key'ni tapin
let namenew = 0;
arr.forEach((item) => {
  if (item.name > namenew) {
    namenew = item.name;
  }
});

console.log(arr.filter((item) => (item.name = namenew).key));

// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)
const lengthUp4 = arr.filter((item) => item.name > 4);
console.log(lengthUp4);

// 9)  en boyuk "key" - i olan obyektin "name"-i ni tapin
let max = 0;
let name = "";
arr.forEach((item) => {
  if (item.key > max) {
    max = item.key;
    name = item.name;
  }
});
console.log(`max ${max} +${name}`);

// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)in index(ler)ini tapin.
let index = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].name.includes("el")) {
    index.push(i);
  }
}

console.log(index);
// 10) keylərin cəmini tapın
let sumkey = 0;
arr.forEach((item) => {
  sumkey += item.key;
});
console.log(sumkey);
// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.

console.log(sum);
// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq
arr.forEach((item) => {
  if (item.key > 10 && item.name.startsWith("l")) {
    console.log(item);
  }
});
