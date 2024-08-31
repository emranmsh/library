const myLibrary = []; 
const addBook = document.querySelector(".add");
const topSection = document.querySelector(".top");
const bottomSection = document.querySelector(".bottom"); 

function Book(name, author, pages, read) {
  // the constructor...
  this.name=name;
  this.author=author;
  this.pages=pages;
  this.read=read;
}

Book.prototype.delete = function(parent, child){
  parent.removeChild(child);
};

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

function loopLibrary(library){
    
      const card= document.createElement("div");  
      const label1 = document.createElement("p");
      const label2 = document.createElement("p");
      const label3 = document.createElement("p");
      const label4 = document.createElement("div");
      const label5 = document.createElement("p");
      const label6 = document.createElement("div");
      const label7 = document.createElement("button");
      const label8 = document.createElement("button");
      card.style.backgroundColor="rgb(255, 239, 197)";
      label7.addEventListener("click", ()=>{
        label6.classList.toggle("selected");
          
      });
      card.appendChild(label1);
      card.appendChild(label2);
      card.appendChild(label3);
      card.appendChild(label4);
      label4.appendChild(label5);
      label4.appendChild(label6);
      label4.appendChild(label7);
      card.appendChild(label8);
      label1.textContent = "Name: "+ library.name;
      label2.textContent = "Author "+ library.author;
      label3.textContent = "Pages: "+ library.pages;
      label5.textContent = "Read: ";
      label7.textContent = "Read Status";
      label8.textContent = "Delete";
      label8.className="delete";
      label7.style.borderRadius= "20px 0px 20px 0px"; 
      if(library.read=="Yes")
        label6.setAttribute("class", "selected");
      bottomSection.appendChild(card); 
      label8.addEventListener("click", ()=>{library.delete(bottomSection, card)});
           
} 
  

addBook.addEventListener("click", createForm);

function createForm(){

const bookName = document.querySelector("#name");
const writer = document.querySelector("#author");
const totalPages = document.querySelector("#page");
const haveRead = document.querySelector("#read");

const popup = document.querySelector("dialog");
popup.showModal();

const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", submitForm);

function submitForm(e){
  const form = document.querySelector("form");
  const newBook = new Book(bookName.value, writer.value,totalPages.value, haveRead.value);
  addBookToLibrary(newBook);
    e.preventDefault(); 
    popup.close();
    form.reset();
    submitBtn.removeEventListener("click", submitForm);
    loopLibrary(newBook);
  }

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeForm);


function closeForm(e){
 e.preventDefault();
 popup.close();
 closeBtn.removeEventListener("click", closeForm);
}

 
}


 

