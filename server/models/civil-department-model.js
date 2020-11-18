const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CivilDepartment = new Schema(
    {
        AddressKaz: {type: String},
        AddressRus: {type: String},
        NameKaz: {type: String},
        NameRus: {type: String},
        CodeInPsc: {type: String},
        Code: {type: String},
    },
)

module.exports = mongoose.model('civil_departments', CivilDepartment)
