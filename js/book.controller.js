'use strict'

function onInit() {
    renderBooks()
}
function renderBooks() {
    const elItems = document.querySelector('tbody')
    const books = getBooks()

    const strHtmls = books.map(book => `
         <tr>
                <td>${book.title}</td>
                <td>${book.price}</td>
                <td>
                    <button onclick="">Read</button>
                    <button onclick="onUpdateBook('${book.id}')">Update</button>
                    <button onclick="onRemoveBook('${book.id}')">Delete</button>
                </td>
            </tr>
        `)
    elItems.innerHTML = strHtmls.join('')
}

function onRemoveBook(bookId) {
    // model
    removeBook(bookId)
    // DOM
    renderBooks()
}

function onUpdateBook(bookId) {
    const price = +prompt('Select a new price:')
    // model
    updatePrice(bookId, price)
    // DOM
    renderBooks()
}

function onAddBook() {
    const title = prompt(`Enter the book's title:`)
    const price = +prompt(`Enter the book's price:`)
    addBook(title, price)
    renderBooks()
}
