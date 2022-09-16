const express = require('express')
const router = require('./route/subject.route')

const app = express()
app.use(express.json())
app.use('/subjects', router)
const port = 8087

app.listen(port, () => console.log(`Server up on port ${port}`))
