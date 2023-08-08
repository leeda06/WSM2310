// let name = "이가현";
// consol.log(`안녕하세요 ${name}`);

// const bookId = "1"
// console.log(`bookId : ${bookId}`);

// // URL의 파라미터 값을 가져오고 인덱스로 전환
// const title = book[0].title;
// console.log(`bookTitle: ${bookTitle}`);

// const urlParams = new URL(location.href).searchParams;
// const urlName = urlParams.get('book');
// const url = (parseInt(urlName) - 1)
// const bookIdNumber = parseInt(urlName); 
// console.log(`bookId: ${id}, type : ${typeof bookIdNumber}`);

// for (let book of books){
//     if(bookIdNumber === book.id){
//         bookData = book;
//         break;
//     }
// }
// let title = bookData.title

// 내가 짠 코드
// const urlParams = new URL(location.href).searchParams;
// const url = urlParams.get('book');
// const number = (parseInt(url) - 1);

// const id = books[number].id; 
// console.log(`bookId: ${id}`);

// const title = books[number].title; 
// console.log(`bookTitle: ${title}`);

// 수업


// const bookId = books[0].id;
// console.log(`bookId : ${bookId}`);
// const bookTitle = books[0].title;
// console.log(`bookTitle : ${bookTitle}`);
// const bookAuthor = books[0].author;
// console.log(`bookAuthor : ${bookAuthor}`);


// URL이 있는 book parameter 값(string) 
let url_href = window.location.href;    //브라우저 창에 있는 주
const bookId = new URL(url_href).searchParams.get("book");
console.log(`bookId: ${bookId}, type : ${typeof bookId}`);

//-> String 을 number로 변환:bookIdNumber 
let bookIdNumber = parseInt(bookId);    //string->number
// let bookIdNumber = Number(bookId);         //string->number
// let bookIdNumber = bookId * 1;          //string->number

console.log(`bookIdNumber: ${bookIdNumber}, type : ${typeof bookIdNumber}`);  //3, number

//-> books에서 하나씩 꺼내어서 bookIdNumber랑 꺼낸 book의 id랑 같으면 데이터 뺴자 :bookData
//bookIdNumber: URL에서 가져온 id값 === books 하나씩 꺼낸 book의 id 값
let bookData;
for(let book of books) {
    if(bookIdNumber === book.id) {
        bookData = book;    //id가 같으면, 걔를 꺼내서 bookData에 넣자
        break;
    }
}
console.log(bookData);


// -> title, author, publisher, bookImage 알아내자
let title = bookData.title;

let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.img;
console.log(title, author, publisher, bookImage);

// -> HTML에 넣자
// HTML요소 => js 변수
const titleDiv = document.getElementsByClassName("title")[1];   //  
titleDiv.innerHTML = title;
// titleDiv.innerHTML = `<u>${title}</u>`;
const authorDiv = document.getElementsByClassName("author")[1];
authorDiv.innerHTML = author;
const publisherDiv = document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = publisher;

const bookImageDiv = document.getElementsByClassName("book-image")[0];
bookImageDiv.innerHTML = `<img src="${bookImage}"/>`;
