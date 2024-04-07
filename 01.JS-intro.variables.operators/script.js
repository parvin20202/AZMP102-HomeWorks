/*                                            Task1
                        1 dən 100'ə qədər sadecə cüt ədədləri çapa verin.

1-ci usul
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
2-ci usul
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(i);
}
*/

/*                                            Task2
                         Number type'lı bir dəyişən daxil edin. Verilən rəqəmin tək və ya cüt olduğunu console'a çıxaran proqram tərtib edin. 
let inputNumber = +prompt(
  "Tek veya cut oldugunu yoxlamaq istediyiniz ededi daxil edin"
);
if (inputNumber % 2 == 0) {
  console.log("Cut");
} else {
  console.log("Tek");
}
*/

/*                                            Task3
                         Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin. 
let inputNumber = +prompt("Bolenlerini tapmaq istediyiniz ededi daxil edin");
for (let i = 0; i < inputNumber; i++) {
  if (inputNumber % i == 0) {
    console.log(i);
  }
}
*/

/*                                            Task4
                          Düzbucaqlı üçbucağın katetləri və hipotenuzunun uzunluğu verilib. Verilən məlumatlara əsəsən bu üçbucağın düzbucaqlı üçbucaq olub olmadığını yoxlayan proqram tərtib edin.  
                        Hipetonosun kvadrati= katetlerin kvadratlarin cemine 
let katetBir = +prompt("1-ci katetin uzunlugunu daxil edin");
let katetIki = +prompt("2-ci katetin uzunlugunu daxil edin");
let hipotenuz = +prompt("Hiptenuzun uzunulugunu daxil edin");
if (Math.pow(hipotenuz, 2) == Math.pow(katetBir, 2) + Math.pow(katetIki, 2)) {
  console.log("Duzbucaqli ucbucaqdir");
} else {
  console.log("Duzbucaqli ucbucaq deyil");
}
*/

/*                                            Task5
                         3 rəqəmli hər hansı bir ədəd verilib. Həmin ədədin hansı rəqəmlərdən ibarət olduğunu bizə qaytaran bir proqram tərtib edin. Məsələn: number=652 daxil etdikdə cavab bu şəkildə olmalıdır: 
let input = +prompt("3 reqemli eded daxil edin");
let numbers = [];


if (input >= 100 && input <= 999) {
  while (input > 0) {
    let num = input % 10;
    numbers.unshift(num);
    input = Math.floor(input / 10);
  }
  numbers = numbers.reverse();
} else {
  console.log("Duzgun daxil edin");
}

console.log(
  numbers[0].toString() + numbers[1].toString() + numbers[2].toString()
);
*/

/*                                            Task6
                        Üçbücağın 3 tərəfi verilib. Onların bərabərtərəfli üçbucaq olduğunu təyin edən proqram tərtib edin.   
                        Bütün tərəfləri bərabər olan üçbucağa bərabərtərəfli üçbucaq deyilir.
                        
let birinciTeref = +prompt("Birinci terefi daxil edin");
let ikinciTeref = +prompt("İkinci terefi daxil edin");
let ucuncuTeref = +prompt("Ucuncu terefi daxil edin");
if (birinciTeref == ikinciTeref && ikinciTeref == ucuncuTeref) {
  console.log("Beraberterefli ucbucaqdir");
} else {
  console.log("Beraberterefli ucbucaq deyil");
}
*/

/*                                            Task7
                        Üçbücağın 3 tərəfi verilib. Onların bərabəryanlı üçbucaq olduğunu təyin edən proqram tərtib edin.    
                        Bərabəryanlı üçbucaq — iki tərəfi bərabər olan üçbucağa deyilir. `

let birinciTeref = +prompt("Birinci terefi daxil edin");
let ikinciTeref = +prompt("İkinci terefi daxil edin");
let ucuncuTeref = +prompt("Ucuncu terefi daxil edin");
if (
  birinciTeref == ikinciTeref ||
  ikinciTeref == ucuncuTeref ||
  ucuncuTeref == birinciTeref
) {
  console.log("Beraberyanli ucbucaqdir");
} else {
  console.log("Beraberyanli ucbucaq deyil");
}
*/
/*                                            Task8
                        3 dəyişən daxil edin. Bu ədədlərin üçbucağın tərəfi olub olmadığını yoxlayan proqram tərtib edin.     
                        2 terefin cemi digerinden boyukdurse ` 

let birinciTeref = +prompt("Birinci terefi daxil edin");
let ikinciTeref = +prompt("İkinci terefi daxil edin");
let ucuncuTeref = +prompt("Ucuncu terefi daxil edin");
if (
  birinciTeref + ikinciTeref > ucuncuTeref &&
  birinciTeref + ucuncuTeref > ikinciTeref &&
  ikinciTeref + ucuncuTeref > birinciTeref
) {
  console.log("Bu ədədlər üçbucağın tərəfi ola biler");
} else {
  console.log("Bu ədədlər üçbucağın tərəfi olmaya biler");
}
*/
/*                                            Task9
                       Ayın adlarına uyğun olaraq neçə gündən ibarət olduğunu cavablandıran alqoritm tərtib edin. Alqoritm Switch Case vasitəsi yazılsın. 

let input = prompt("Ayi daxil edin");
switch (input.toLocaleLowerCase()) {
  case "mart":
  case "may":
  case "iyun":
  case "avqust":
  case "oktyabir":
  case "dekabir":
  case "yanvar":
    console.log("31 gunden ibaretdir");
    break;
  case "fevral":
    console.log("28 gunden ibaretdir");
    break;
  case "aprel":
  case "iyul":
  case "sentyabir":
  case "noyabir":
    console.log("30 gunden ibaretdir");
    break;
  default:
    console.log("Duzgun ayi daxil edin");
}
*/

/*                                            Task10
                       3 rəqəmli hər hansı bir ədəd verilib. Həmin ədədin rəqəmlərindən ibarət olan max və min ədədlərini tapın  

let input = +prompt("3 reqemli eded daxil edin");
let numbers = [];

if (input >= 100 && input <= 999) {
  while (input > 0) {
    let num = input % 10;
    numbers.unshift(num);
    input = Math.floor(input / 10);
  }
} else {
  console.log("Duzgun daxil edin");
}

//Qisa yolu bunu fikirlesdim :)
console.log(`Maximum reqem ${numbers.sort()[numbers.length - 1]}`);
console.log(`Minimum reqem ${numbers.sort()[0]}`);
*/

/*                                            Task11
                      Tələbənin daxil etdiyi bala görə A B C D E F qiymətlərindən hansını aldığını müəyyənləşdirrən proqram yazın. 90 və yuxarı üçün "A", 80-89 üçün "B", 70-79 üçün "C", 60-69 üçün "D", 59 və daha aşağı qiymətlər üçün "F". Daxil edilən rəqəm müsbət, sıfırdan böyük və 100-dən kiçik olmalıdır. ` 

let telebeBali = +prompt("Telebenin balini daxil edin");
if (telebeBali > 0 && telebeBali <= 100) {
  if (telebeBali >= 90) {
    console.log("Telebenin aldigi qiymet A");
  } else if (telebeBali >= 80 || telebeBali <= 89) {
    console.log("Telebenin aldigi qiymet B");
  } else if (telebeBali >= 70 || telebeBali <= 79) {
    console.log("Telebenin aldigi qiymet C");
  } else if (telebeBali >= 60 || telebeBali <= 69) {
    console.log("Telebenin aldigi qiymet D");
  } else if (telebeBali >= 50 || telebeBali <= 59) {
    console.log("Telebenin aldigi qiymet F kesilib");
  }
} else {
  console.log("Telebenin bali duzgun qeyd edilmeyib");
}
*/

/*                                            Task12
                      İstifadəçidən 3 dəyər alın bunlardan ikisi rəqəm, biri isə riyazi əməl olsun. Riyazi əmələ görə rəqəmlər üzərində əməliyyat aparsın. Riyazi əməllər toplama,çıxma,vurma və bölmə olacaq.Bu dörd əməldən başqası daxil edilərsə console "Zəhmət olmasa düzgün əməl daxil edin yazılsın." Taskı switch-case ilə yazın.s` 

let birinci = +prompt("1ci reqemi daxil edin");
let ikinci = +prompt("2ci reqemi daxil edin");
let emel = prompt("Hansi emelden istifade etmek isteyirsiniz. +,-,*,/");
switch (emel) {
  case "+":
    console.log(`Netice ${birinci + ikinci}`);
    break;
  case "-":
    console.log(`Netice ${birinci - ikinci}`);
    break;
  case "*":
    console.log(`Netice ${birinci * ikinci}`);
    break;
  case "/":
    console.log(`Netice ${birinci / ikinci}`);
    break;
  default:
    console.log("Duzgun emeli secmediniz ");
}
*/
