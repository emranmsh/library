const myLibrary = [];

function Book(name, author, pages, read) {
  // the constructor...
  this.name=name;
  this.author=author;
  this.pages=pages;
  this.read=read;
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

function loopLibrary(){
    //for(let i=0; i<myLibrary.length; i++)
        //alert(myLibrary[i]);
}
 
const addBook = document.querySelector("button");
const topSection = document.querySelector(".top");
const bottomSection = document.querySelector(".bottom");




addBook.addEventListener("click", createForm);

function createForm(){

const username = document.querySelector("#name");
const writer = document.querySelector("#author");
const totalPages = document.querySelector("#page");
const haveRead = document.querySelector("#read");

const popup = document.querySelector("dialog");
popup.showModal();
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", (e)=>{
 e.preventDefault();
 popup.close();
})

const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  const newBook = new Book(username.value, writer.value,totalPages.value, haveRead.value);
  addBookToLibrary(newBook);
   
 
  popup.close();
   
});


    /*const form = document.createElement("div");
    const name = document.createElement("input");
    const author = document.createElement("input");
    const pages = document.createElement("input");
    const read = document.createElement("input");
    const submitBtn = document.createElement("button");
    form.appendChild(name);
    form.appendChild(author);
    form.appendChild(pages);
    form.appendChild(read);
    form.appendChild(submitBtn);
    
    name.setAttribute("placeholder", "Name");
    author.setAttribute("placeholder", "Author");
    pages.setAttribute("placeholder", "Pages");
    read.setAttribute("placeholder", "Read");
    submitBtn.textContent="Submit"; 
    topSection.appendChild(form);

    submitBtn.addEventListener("click", createBook);*/
}


