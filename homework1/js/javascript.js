/* 1.Как тебя зовут? Какого ты года рождения? И с помощью алерта 
выводится сообщение с именем и возрастом. Например, если пользователь 
ответил "Юра" и "1989" то выводится "Юра 28"*/

// проверка на символ
let name = prompt('Как Ваше имя?');
if (!isNaN(name)) {
  alert('введите имя');
  name = prompt('Как Ваше имя?');
}
// проверка на число  
let age = prompt('Введите год рождения');
if (isNaN(age)) {
  alert("введите дату");
  age = prompt('Введите год рождения?');
}
/* так бы я сделал

let data =new Date();
let thisYear = data.getFullYear();
alert(name + ":" + (thisYear - age));

*/
alert(name + ":" + (2021 - age));


/*2 .Ввести с клавиатуры 3 переменные (a, b, c). Привести их все в число.
 Выполнить операцию
 суммирования всех переменных. Указать какие переменные являются чётными.*/


let a = Number(prompt("введите a:"));
let b = Number(prompt("введите b:"));
let c = Number(prompt("введите c:"));

//проверка численного символа

if (isNaN(a || b || c)) {
  alert("некоректно заполнено поле")

} else {

  // сумируем все переменные
  let resultSumma = a + b + c;
  console.log("сумма" + ":" + resultSumma);


  // проверка на четность
  if (a % 2 == 0) {
    console.log("a : четное");
  }
  if (b % 2 == 0) {
    console.log("b : четное");
  }
  if (c % 2 == 0) {
    console.log("c : четное");
  }

  // среднее арифметическое 3 чисел

  console.log("среднее арифметическое" + ":" + (a + b + c / 3));
}


//Разбиваем число на символы

//Наверное бред ... но я вижу так
let a1 = 12345 % 10;
let b1 = 1234 % 10;
let c1 = 123 % 10;
let d1 = 12 % 10;
let x1 = 1 % 10;
//т.к. Я прибавляю пробел то число становится все равно строкой и Number() 
//уже не поможет NaN
console.log("прамой порядок:" + a1 + ' ' + b1 + ' ' + c1 + ' ' + d1 + ' ' + x1);
console.log('обратный порядок:' + x1 + ' ' + d1 + ' ' + c1 + ' ' + b1 + ' ' + a1);



// преобразуем в сроку
//originalNumber = String(originalNumber);
//console.log(originalNumber);

//делаем массив 
//let arr2 = originalNumber.split('');

// перебором что то пошло не так

/*
 arr2.forEach(element => {
  arr2[element] = arr2[element] + " ";
  console.log(arr2);
    });*/

//Делаю в ручную  
//arr2[0] = originalNumber[0] + " ";
//arr2[1] = originalNumber[1] + " ";
//arr2[2] = originalNumber[2] + " ";
//arr2[3] = originalNumber[3] + " ";
//arr2[4] = originalNumber[4] + " ";

//опять в строку
//arr2.join();
//let arr3 = arr2.join();

//Удаляю ","
// Регулярные выражения знаю плохо,
//поэcdтому ответ нашел на Хабр   












