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