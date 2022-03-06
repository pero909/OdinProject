class BooK{
    constructor(
        title="Unknown",
        author='Unknown',
        pages='0',
        isRead=false
    ) {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isRead=isRead;
    }
}

class Library{
    constructor() {
        this.books=[];
    }
    addBook(newBook){
        if(!this.isInLibrary(newBook)){
            this.books.push(newBook);
        }
    }
    isInLibrary(newBook){
        return this.books.some((book) => book.title === newBook.title);
    }


}
const library=new Library();
let booksGrid=document.getElementsByClassName('books-Grid');
const resetBookGrid= () => {
    booksGrid.innerHTML="";
}

createBookCard = (book) => {
    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const readBtn = document.createElement('button')


    bookCard.classList.add('book-card')
    readBtn.classList.add('btn')

    title.textContent = "Title:" + `"${book.title}"`
    author.textContent ="Author:" +`${book.author}`;
    pages.textContent =`${book.pages} pages`


    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    booksGrid[0].appendChild(bookCard);
}
const displayLibrary=()=>{
    resetBookGrid();

    for(let book of library.books){
        createBookCard(book);
    }
}

function bookModal(){
    document.querySelector(".bookModal").style.display = "flex";
}
function addBook(){
    let title=document.getElementById("title").value;
    let author=document.getElementById('author').value;
    let pages=document.getElementById('pages').value;
    pages=parseInt(pages);
    let isRead=document.getElementById('isRead').checked;
    if(title!==""&&author!==""&&!isNaN(pages)) {
        library.addBook(new BooK(title, author, pages, isRead));
        displayLibrary();

    }else window.alert("Please fillout every field");


    document.querySelector(".bookModal").style.display = "none";

}
