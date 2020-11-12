const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://ZA:qwerty123@cluster0.earrg.mongodb.net/pratice3?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB connected!')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db