/* 1.Как тебя зовут? Какого ты года рождения? И с помощью алерта 
выводится сообщение с именем и возрастом. Например, если пользователь 
ответил "Юра" и "1989" то выводится "Юра 28"*/

  // проверка на символ
    let name = prompt('what is you name?');
      if(!isNaN(name)){
        alert('введите имя');
        name = prompt('what is you name?');
      }
    // проверка на число  
    let age =  prompt('How old are you?');
      if(isNaN(age)){
        alert("введите дату");
        age =  prompt('How old are you?');
      }
    alert(name +":"+age);


/*2 .Ввести с клавиатуры 3 переменные (a, b, c). Привести их все в число.
 Выполнить операцию
 суммирования всех переменных. Указать какие переменные являются чётными.*/

 //Находими елементы DOM
  let a = document.querySelector("#a");
  let b = document.querySelector("#b");
  let c = document.querySelector("#c");
  
  
  

  document.querySelector('#run').onclick = start;
      

 // Функция для вычисления

  function start(){
   //берем значение input 

    let aValue = a.value;
    let bValue = b.value;
    let cValue = c.value;

    //проверка численного символа

    if(isNaN(aValue || bValue || cValue)){
      alert("некоректно заполнено поле")
      return false;
    }else{

    

   // преобразуем полученное значение в Number

    aValue = Number(aValue);
    bValue = Number(bValue);
    cValue = Number(cValue);
    console.log(aValue ,  bValue , cValue );

    // сумируем все переменные
    let resultSumma = aValue + bValue + cValue;
    console.log("сумма"+":"+ resultSumma);
    

    // проверка на четность
    if(aValue % 2 == 0){
      console.log("a : четное");
    }
    if(bValue % 2 == 0){
      console.log("b : четное");
    }
    if(cValue % 2 == 0){
      console.log("c : четное");
    }

   // среднее арифметическое 3 чисел
    
    console.log("среднее арифметическое" + ":" + (aValue + bValue + cValue)/3);
  }
  }

 //Разбиваем число на символы
 
 let originalNumber = 12345;

 // преобразуем в сроку
 originalNumber = String(originalNumber);
 console.log(originalNumber);

 //делаем массив 
 let arr2 = originalNumber.split('');

 // перебором что то пошло не так

 /*
  arr2.forEach(element => {
   arr2[element] = arr2[element] + " ";
   console.log(arr2);
     });*/

   //Делаю в ручную  
  arr2[0] = originalNumber[0] + " ";
  arr2[1] = originalNumber[1] + " ";
  arr2[2] = originalNumber[2] + " ";
  arr2[3] = originalNumber[3] + " ";
  arr2[4] = originalNumber[4] + " ";
  
  //опять в строку
  arr2.join();
  let arr3 =  arr2.join();

  //Удаляю ","
  // Регулярные выражения знаю плохо,
  //поэcdтому ответ нашел на Хабр   
  console.log(arr3.replace(/[, ]+/g, " "));
  
  

 
  
  

  



  