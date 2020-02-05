console.log('JobTask1');
// отключаем рекламу
document.querySelector('.adv').style.display = 'none';

let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book'),
    bookMassiv=[];
console.log(books);
console.log(book);

function findBook(bookItem) {
    let book = bookItem.textContent.trim().split('.'); // делаем массив
    return book[0].toString().slice(-1); // получаем номер книги
}

function removBook(elem,params) {
    console.log(elem);
    console.log(params);
    console.log(params2);
    for (let index = 0; index < params.length; index++) {
        const element = elem[0];
        element[0].removeChild(params[index]);
    }
    
}
for (let index = 0; index < book.length; index++) {
    
    const element = findBook(book[index]);
    bookMassiv[element] = book[index];
       
}
bookMassiv = bookMassiv.sort();
let foo = (i) => books[0].removeChild(book[i]);
let faa = function(i){books[0].appendChild(bookMassiv[i]);}


for (let i = 0; i < book.length; i++) {
    
    foo(i);
}
for (let i = 0; i < book.length; i++) {
   
    faa(i);
}
// let book3 = book[2].bookItem.textContent.trim().split('.');
let num3;
// book[3].getElementsByTagName('h2').firstChild.nodeValue;
// console.log('nodeValue: ', book[3].getElementsByTagName('h2'));
for (let index = 0; index < book.length; index++) {
    const element = findBook(book[index]);
    if(+element === 3){
       num3 = book[index].getElementsByTagName('h2');
       book[index].getElementsByTagName('h2')[0] = 'Получится - "Книга 3. this и Прототипы Объектов"';
       console.log(book[index]);
    }
}
console.log(num3);

console.log('bookMassiv: ', bookMassiv);
console.log('bookMassiv: ', bookMassiv.sort());
// Получится - "Книга 3. this и Прототипы Объектов"





