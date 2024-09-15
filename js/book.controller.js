'use strict'

function onInit(){
    renderBooks()
}
function renderBooks(){
    const elItems = document.querySelector('tbody')
    const books = getBooks()

    const strHtmls = books.map(book =>`
         <tr>
                <td>${book.title}</td>
                <td>${book.price}</td>
                <td>
                    <button>Read</button>
                    <button>Update</button>
                    <button>Delete</button>
                </td>
            </tr>
        `)
        elItems.innerHTML = strHtmls.join('')
}