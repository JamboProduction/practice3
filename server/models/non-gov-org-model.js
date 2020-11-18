const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NonGovOrg = new Schema(
    {
        contack: {type: String},
        name_npo: {type: String},
        bagyty: {type: String},
        geoposition: {type: String},
        adress: {type: String},
        zandy_nysany: {type: String},
        sait: {type: String},
        fio: {type: String},
        email: {type: String},
    },
)

module.exports = mongoose.model('non_gov_orgs', NonGovOrg)
