const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const countryRouter = require('./routes/country-router')
const civilDepartmentRouter = require('./routes/civil-department-router')
const nonGovOrgRouter = require('./routes/non-gov-org-router')

const app = express()
const apiPort = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', countryRouter)
app.use('/api', civilDepartmentRouter)
app.use('/api', nonGovOrgRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))