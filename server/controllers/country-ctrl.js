const Country = require('../models/country-model')

createCountry = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a country',
        })
    }

    const country = new Country(body)

    if (!country) {
        return res.status(400).json({ success: false, error: err })
    }

    country
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: country._id,
                message: 'Country created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Country not created!',
            })
        })
}

updateCountry = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Country.findOne({ _id: req.params.id }, (err, country) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Country not found!',
            })
        }
        country.NameKaz = body.NameKaz
        country.NameRus = body.NameRus
        country.Code = body.Code
        country
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: country._id,
                    message: 'Country updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Country not updated!',
                })
            })
    })
}

deleteCountry = async (req, res) => {
    await Country.findOneAndDelete({ _id: req.params.id }, (err, country) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!country) {
            return res
                .status(404)
                .json({ success: false, error: `Country not found` })
        }

        return res.status(200).json({ success: true, data: country })
    }).catch(err => console.log(err))
}

getCountryById = async (req, res) => {
    await Country.findOne({ _id: req.params.id }, (err, country) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!country) {
            return res
                .status(404)
                .json({ success: false, error: `Country not found` })
        }
        return res.status(200).json({ success: true, data: country })
    }).catch(err => console.log(err))
}

getCountries = async (req, res) => {
    await Country.find({}, (err, countries) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }

        if (!countries.length) {
            return res
                .status(404)
                .json({
                    success: false,
                    error: `Country not found`
                })
        }
        return res.status(200).json({
            success: true,
            data: countries
        })
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    getCountries,
    getCountryById,
    createCountry,
    updateCountry,
    deleteCountry,
}