const service = require('../service/movies.service')



const create = (req, res) => {
    const movie = req.body
    if (isValidBody(res, movie)) {
        service.create(movie)
        res.status(201).send('Created')
    }
}

const getAll = (req, res) => {
    res.status(200).send(service.getAll())
}

const get = (req, res) => {
    const movie = service.get(req.params.id)
    if (movie) {
        res.status(200).send(movie)
    } else {
        res.status(404).send('movie not found')
    }
}

const update = (req, res) => {
    const movie = service.get(req.params.id)
    if (movie) {
        if (isValidBody(res, movie)) {
            service.update(req.params.id, req.body)
            res.status(200).send('movie updated')
        }
    } else {
        res.status(404).send('movie not found')
    }
}

const remove = (req, res) => {
    const movie = service.get(req.params.id)

    if (movie) {
        service.remove(req.params.id)
        res.status(200).send('movie removed')
    }

    else {
        res.status(404).send('movie not found')
    }
}

const isValidBody = (res, movie) => {
    if (!movie.id || !movie.title || !movie.decription || !movie.release_year) {
        res.status(400).send('Invalid data supplied!')
        return false
    }


    return true
}

module.exports = {
    create,
    getAll,
    get,
    update,
    remove
}
