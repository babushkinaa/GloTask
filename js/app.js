console.log('JobTask1');
// отключаем рекламу
document.querySelector('.adv').style.display = 'none';
document.querySelector('body').style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
console.dir( document.querySelector('body'));

let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book'),
    bookMassiv=[];
console.log(books);
console.log(book);

function findBook(bookItem) {
    let book = bookItem.textContent.trim().split('.'); // делаем массив
    return book[0].toString().slice(-1); // получаем номер книги
}
for (let index = 0; index < book.length; index++) { // перебераем массив книг
    
    const element = findBook(book[index]);
    bookMassiv[element] = book[index];
       
}
bookMassiv = bookMassiv.sort();
let foo = (i) => books[0].removeChild(book[i]);
let faa = (i)=> books[0].appendChild(bookMassiv[i]);

for (let i = 0; i < book.length; i++) {
    
    foo(i);
}
for (let i = 0; i < book.length; i++) {
   
    faa(i);
}
let num3;
for (let index = 0; index < book.length; index++) {
    const element = findBook(book[index]);
    if(+element === 3){
       num3 = book[index].getElementsByTagName('h2');
       book[index].querySelector('a').textContent = '"Книга 3. this и Прототипы Объектов"';
    }
}

// книга 2
bookGlava = book[0].querySelectorAll('li');
bookGlava[0].textContent = 'Введение';
bookGlava[1].textContent = 'Предисловие';
bookGlava[2].textContent = 'Глава 1: Что такое область видимости?';
bookGlava[3].textContent = 'Глава 2: Лексическая область видимости';
bookGlava[4].textContent = 'Глава 3: Область видимости: функции против блоков';
bookGlava[5].textContent = 'Глава 4: Поднятие переменных (Hoisting)';
bookGlava[6].textContent = 'Глава 5: Замыкание области видимости';
bookGlava[7].textContent = 'Приложение A: Динамическая область видимости';
bookGlava[8].textContent = 'Приложение B: Полифиллинг блочной области видимости';
bookGlava[9].textContent = 'Приложение C: Лексический this';
bookGlava[10].textContent = 'Приложение D: Благодарности!';


bookGlava5 = book[5].querySelectorAll('li');
bookGlava5[0].textContent = 'Введение';
bookGlava5[1].textContent = 'Предисловие';
bookGlava5[2].textContent = 'Глава 1: Асинхронность: Сейчас и Тогда';
bookGlava5[3].textContent = 'Глава 2: Колбеки';
bookGlava5[4].textContent = 'Глава 3: Обещания';
bookGlava5[5].textContent = 'Глава 4: Генераторы';
bookGlava5[6].textContent = 'Глава 5: Производительность программы';
bookGlava5[7].textContent = 'Глава 6: Бенчмаркинг и настройка';
bookGlava5[8].textContent = 'Приложение A: Библиотека: asynquence';
bookGlava5[9].textContent = 'Приложение B: Расширенные асинхронные шаблоны';
bookGlava5[10].textContent = 'Приложение C: Благодарности!';




bookGlava6ul = book[2].querySelectorAll('ul');
bookGlava6 = book[2].querySelectorAll('li');
let g8 = document.createElement('li');
    g8.textContent = 'Глава 8: За пределами ES6';

bookGlava6ul[0].insertBefore(g8,bookGlava6[9] )








