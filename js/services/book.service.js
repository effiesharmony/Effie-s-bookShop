'use strict'

var gBooks = [
    {
        id: 'bg4J78',
        title: 'The Holy Bible',
        price: 50,
        imgUrl: 'bible.jpg'
    },
    {
        id: 'bg4J79',
        title: 'Pinocchio',
        price: 150,
        imgUrl: 'bible.jpg'
    },
    {
        id: 'bg4J70',
        title: 'Little Red Riding Hood',
        price: 300,
        imgUrl: 'bible.jpg'
    },
]

function getBooks(options = {}) {

    var filteredBooks = _filterBooks(options.filterBy)

    if (options.sortBy.sortField === 'title') {
        filteredBooks.sort((b1, b2) => b1.title.localeCompare(b2.title) * options.sortBy.descending)
    } else if (options.sortBy.sortField === 'price') {
        filteredBooks.sort((b1, b2) => (b1.price - b2.price) * options.sortBy.descending) 
    }
    return filteredBooks
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

function _filterBooks(filterBy) {
    var books = gBooks.slice()

    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        books = books.filter(book => regex.test(book.title))
    }

    if (filterBy.minPrice) {
        books = books.filter(book => book.price > filterBy.minPrice)
    }
    return books
}