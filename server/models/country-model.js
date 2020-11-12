const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Country = new Schema(
    {
        NameKaz: {type: String},
        NameRus: {type: String},
        Code: {type: String},
    },
)

module.exports = mongoose.model('countries', Country)
