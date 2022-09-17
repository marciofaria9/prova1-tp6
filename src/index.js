const express = require('express')
const router = require('./route/movies.route')

const app = express()
app.use(express.json())
app.use('/movies', router)
const port = 8087

app.listen(port, () => console.log(`Server up on port ${port}`))
