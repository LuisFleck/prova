
let booksData = [];
let id = 0

export const addBook = (data) => {
    const book = {
        id: id++,
        title: data.title.value,
        author: data.author.value,
        year: data.year.value,
        situation: data.situation,
    }

    booksData.push(book)

    return booksData

}

export const updateBooks = (id, situation) => {
    const books = booksData.map(book => {
        if(book.id === id)
        book.situation = situation

        return book

    });

    return booksData = books;

}

export const situationBooks = [
    'Disponível',
    'Reservado',
    'Emprestado'
]