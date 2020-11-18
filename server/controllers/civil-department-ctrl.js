const CivilDepartment = require('../models/civil-department-model')

createCivilDepartment = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a civilDepartment',
        })
    }

    const civilDepartment = new CivilDepartment(body)

    if (!civilDepartment) {
        return res.status(400).json({ success: false, error: err })
    }

    civilDepartment
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: civilDepartment._id,
                message: 'CivilDepartment created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'CivilDepartment not created!',
            })
        })
}

updateCivilDepartment = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    CivilDepartment.findOne({ _id: req.params.id }, (err, civilDepartment) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'CivilDepartment not found!',
            })
        }
        civilDepartment.NameKaz = body.NameKaz
        civilDepartment.NameRus = body.NameRus
        civilDepartment.Code = body.Code
        civilDepartment
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: civilDepartment._id,
                    message: 'CivilDepartment updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'CivilDepartment not updated!',
                })
            })
    })
}

deleteCivilDepartment = async (req, res) => {
    await CivilDepartment.findOneAndDelete({ _id: req.params.id }, (err, civilDepartment) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!civilDepartment) {
            return res
                .status(404)
                .json({ success: false, error: `CivilDepartment not found` })
        }

        return res.status(200).json({ success: true, data: civilDepartment })
    }).catch(err => console.log(err))
}

getCivilDepartmentById = async (req, res) => {
    await CivilDepartment.findOne({ _id: req.params.id }, (err, civilDepartment) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!civilDepartment) {
            return res
                .status(404)
                .json({ success: false, error: `CivilDepartment not found` })
        }
        return res.status(200).json({ success: true, data: civilDepartment })
    }).catch(err => console.log(err))
}

getCivilDepartments = async (req, res) => {
    await CivilDepartment.find({}, (err, countries) => {
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
                    error: `CivilDepartment not found`
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
    getCivilDepartments,
    getCivilDepartmentById,
    createCivilDepartment,
    updateCivilDepartment,
    deleteCivilDepartment,
}