window.addEventListener('load', function() {
    setInterval(createRandomStroke, 3000)
}, false);

function createRandomStroke() {
    const user = document.querySelector('.user')
    const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789"; //строка символов
    //для теста лучше использовать эту строку:
    // const alphabet = "666666666y0"; 

    const lenthStroke = 5 //количество символов
    let randomLetter; //рендомная буква/число
    let arrayRandomStroke = []; //массив рендомных символов
    let randomStroke; //рендомная строка
    let isNumber = 0;
    let isZero = false ;


    for (let i = 0; i < lenthStroke; i++) {
        //вывожу случайный символ по его индексуго
        let randomIndex = Math.floor(Math.random() * alphabet.length);
        randomLetter = alphabet[randomIndex];

        //проверка на 0
        if (+randomLetter === 0) isZero = true;
        //проверка на number
        isNumber += +randomLetter 
        //формирую массив случайных символов
        arrayRandomStroke.push(randomLetter)
    }

    //создаю строку
    randomStroke = arrayRandomStroke.join(''); 
    //создаю палиндромом строки
    let palindrom = randomStroke.split("").reverse().join(""); 

    //обновляю первоначальный стиль
    user.className = 'user';
    //меняю стили
    if(isZero) user.classList.add('unvisible'); //если есть 0
    if (randomStroke === palindrom) user.classList.add('red'); // если палиндромом
    if (isNumber) user.classList.add('blue'); //если все числа
    
    //вывожу строку
    user.innerHTML = randomStroke; 

    console.log(randomLetter);
    console.log(arrayRandomStroke);
    console.log(randomStroke);
    console.log(palindrom);
    console.log(isNumber)
    console.log(isZero)
}