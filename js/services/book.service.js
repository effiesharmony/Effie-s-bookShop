'use strict'

var gBooks = [
    {
        id: 'bg4J78',
        title: 'The Holy Bible',
        price: 5,
        imgUrl: 'bible.jpg'
    },
    {
        id: 'bg4J79',
        title: 'Pinocchio',
        price: 10,
        imgUrl: 'bible.jpg'
    },
    {
        id: 'bg4J70',
        title: 'Little Red Riding Hood',
        price: 15,
        imgUrl: 'bible.jpg'
    },
]

function getBooks() {
    return gBooks
}

function removeBook(bookId) {
    const idx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(idx, 1)
}

function updatePrice(bookId, price) {
    const book = gBooks.find(book => book.id === bookId)
    book.price = price
}

function addBook(title, price) {
    var newBook = _createBook(title, price)
    gBooks.push(newBook)
}

function _createBook(title, price) {
    return {
        id: makeId(),
        title,
        price,
    }
}

function getBookById(bookId) {
	return gBooks.find(book => book.id === bookId)
}
