const myDatabase = []

const token = 'Un1v4$.2022'

const create = movie => {
    myDatabase.push(movie)
}

const getAll = () => myDatabase

const get = movieId => myDatabase.find(sub => sub.id == movieId)

const update = (movieId, movie) => {
    const index = myDatabase.findIndex(sub => sub.id == movieId)
    myDatabase[index] = movie
}

const remove = movieId => {
    const index = myDatabase.findIndex(sub => sub.id == movieId)
    myDatabase.splice(index, 1)
}

module.exports = {
    create,
    getAll,
    get,
    update,
    remove
}




