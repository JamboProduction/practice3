const express = require('express')

const CountryCtrl = require('../controllers/country-ctrl')

const router = express.Router()

router.get('/countries', CountryCtrl.getCountries)
router.get('/countries/:id', CountryCtrl.getCountryById)
router.post('/countries', CountryCtrl.createCountry)
router.put('/countries/:id', CountryCtrl.updateCountry)
router.delete('/countries/:id', CountryCtrl.deleteCountry)

module.exports = router