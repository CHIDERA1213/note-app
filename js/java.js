let title = document.getElementById("noteTitle") 
let Notes = document.getElementById("notes") 
let error =  document.getElementById("errorParagraph")
const Getnotes = document.querySelector('.Getnotes')
// const notes = document.querySelector('.notes')

    //  else{window.location.href = '/'}
    // window.location.assign('/')

//     const userInfo = {
//         "name": "Chibuzor",
//         "age": 20,
//         "sex": "male"
//      }
//      console.log(userInfo.name)

//  localStorage.setItem("user", JSON.stringify(userInfo))

//  const userData = JSON.parse(localStorage.getItem("user"))
//  console.log((localStorage.getItem("user")))
// console.log(userData.name)

function createNote(){
    let bookArray = JSON.parse(localStorage.getItem('book')) || [];
    if(title.value === "" || Notes.value === ""){
        error.textContent = "Please fill in all fields"
    }  else {
        let bookDetails = {
            title: title.value,
            body: Notes.value,
            id: Date.now() + Math.random()
        }
        bookArray.push(bookDetails)
        localStorage.setItem("book", JSON.stringify(bookArray))

        window.location.assign('/')
    }
    if(title.value && Notes.value === ""){
        error.textContent = "fill in the notes"
    } 
    if (title.value === "" && Notes.value ){
        error.textContent = "fill in the title"
    }

}

function getNote(){
    let bookArray = JSON.parse(localStorage.getItem('book'));
    if(!bookArray) return
    console.log(bookArray)
    bookArray.forEach((book) => {
        const notes = document.createElement('div')
        notes.innerHTML += `
        <div class="notes">
            <div>
                <p>Title : ${book.title}</p>
                <p>Notes :${book.body}</p>
            </div>
            <button onclick="deleteNote(${book.id})">Del</button>
        </div>
        `
        Getnotes.appendChild(notes)
    })
}

getNote()

function deleteNote(id){
    let bookArray = JSON.parse(localStorage.getItem('book'));
    let index = bookArray.findIndex(book => book.id === id);
    bookArray.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(bookArray));
    location.reload()
}

// https://fullstackheroes.com/tutorials/javascript/local-storage/
