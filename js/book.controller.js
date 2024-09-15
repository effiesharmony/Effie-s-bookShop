'use strict'

const gQueryOptions = {
    filterBy: { txt: '', minPrice: 0 },
    sortBy: {},
}

function onInit() {
    readQueryParams()
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
    setQueryParams()
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

    renderBooks()
}

function onSetSortBy() {
    var elsortField = document.querySelector('.sort-by .sort-field')
    var elDescending = document.querySelector('.sort-by .descending')

    gQueryOptions.sortBy.sortField = elsortField.value
    gQueryOptions.sortBy.descending = elDescending.checked ? -1 : 1
    renderBooks()
}

function readQueryParams() {
    const queryParams = new URLSearchParams(window.location.search)
    
    gQueryOptions.filterBy = {
        txt: queryParams.get('title') || '',
        minPrice: +queryParams.get('price') || 0
    }

    if(queryParams.get('sortField')) {
        const prop = queryParams.get('sortField')
        const descending = queryParams.get('descending')

        gQueryOptions.sortBy.sortField = prop
        gQueryOptions.sortBy.descending = descending
    }

    renderQueryParams()
}

function renderQueryParams() {
    
    document.querySelector('.title').value = gQueryOptions.filterBy.txt
    document.querySelector('.min-price').value = gQueryOptions.filterBy.minPrice
    
    const sortField = gQueryOptions.sortBy.sortField
    const descending = +gQueryOptions.sortBy.descending

    document.querySelector('.sort-by select').value = sortField || ''
    document.querySelector('.sort-by input').checked = (descending === -1) ? true : false
}

function setQueryParams() {
    const queryParams = new URLSearchParams()

    queryParams.set('title', gQueryOptions.filterBy.txt)
    queryParams.set('price', gQueryOptions.filterBy.minPrice)

    if(gQueryOptions.sortBy.sortField) {
        queryParams.set('sortField', gQueryOptions.sortBy.sortField)
        queryParams.set('descending', gQueryOptions.sortBy.descending)
    }

    const newUrl = 
        window.location.protocol + "//" + 
        window.location.host + 
        window.location.pathname + '?' + queryParams.toString()

    window.history.pushState({ path: newUrl }, '', newUrl)
}
