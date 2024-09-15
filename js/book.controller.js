'use strict'

const gQueryOptions = {
    filterBy: { txt: '', minPrice: 0 },
    sortBy: {},
    page: { idx: 0, size: 4 },
}

function onInit() {
    renderBooks()
}
function renderBooks() {
    const elTbody = document.querySelector('tbody')
    const books = getBooks(gQueryOptions)

    const strHtmls = books.map(book => `
         <tr>
                <td>${book.title}</td>
                <td>${book.price}</td>
                <td>
                    <button onclick="onOpenModal('${book.id}')">Details</button>
                    <button onclick="onUpdateBook('${book.id}')">Update</button>
                    <button onclick="onRemoveBook('${book.id}')">Delete</button>
                </td>
            </tr>
        `)
    elTbody.innerHTML = strHtmls.join('')
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

function onOpenModal(bookId) {
    const book = gBooks.filter(book => book.id === bookId)[0]
    var display = JSON.stringify(book, null, 2)

    const elPre = document.querySelector('pre')
    const elModal = document.querySelector('.details-container')

    elPre.innerText = display
    elModal.showModal()

}

function onSetFilterBy() {
    const elTitle = document.querySelector('.filter-by .title')
    const elMinPrice = document.querySelector('.filter-by .min-price')

    gQueryOptions.filterBy.txt = elTitle.value
    gQueryOptions.filterBy.minPrice = +elMinPrice.value

    gQueryOptions.page.idx = 0
    renderBooks()
}

function onSetSortBy() {
    var elsortField = document.querySelector('.sort-by .sort-field')
    var elDescending = document.querySelector('.sort-by .descending')

    gQueryOptions.sortBy.sortField = elsortField.value
    gQueryOptions.sortBy.descending = elDescending.checked ? -1 : 1
    renderBooks()
}