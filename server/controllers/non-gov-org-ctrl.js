const NonGovOrg = require('../models/non-gov-org-model')

createNonGovOrg = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a nonGovOrg',
        })
    }

    const nonGovOrg = new NonGovOrg(body)

    if (!nonGovOrg) {
        return res.status(400).json({ success: false, error: err })
    }

    nonGovOrg
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: nonGovOrg._id,
                message: 'NonGovOrg created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'NonGovOrg not created!',
            })
        })
}

updateNonGovOrg = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    NonGovOrg.findOne({ _id: req.params.id }, (err, nonGovOrg) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'NonGovOrg not found!',
            })
        }
        nonGovOrg.NameKaz = body.NameKaz
        nonGovOrg.NameRus = body.NameRus
        nonGovOrg.Code = body.Code
        nonGovOrg
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: nonGovOrg._id,
                    message: 'NonGovOrg updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'NonGovOrg not updated!',
                })
            })
    })
}

deleteNonGovOrg = async (req, res) => {
    await NonGovOrg.findOneAndDelete({ _id: req.params.id }, (err, nonGovOrg) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!nonGovOrg) {
            return res
                .status(404)
                .json({ success: false, error: `NonGovOrg not found` })
        }

        return res.status(200).json({ success: true, data: nonGovOrg })
    }).catch(err => console.log(err))
}

getNonGovOrgById = async (req, res) => {
    await NonGovOrg.findOne({ _id: req.params.id }, (err, nonGovOrg) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!nonGovOrg) {
            return res
                .status(404)
                .json({ success: false, error: `NonGovOrg not found` })
        }
        return res.status(200).json({ success: true, data: nonGovOrg })
    }).catch(err => console.log(err))
}

getNonGovOrgs = async (req, res) => {
    await NonGovOrg.find({}, (err, nonGovOrgs) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }

        if (!nonGovOrgs.length) {
            return res
                .status(404)
                .json({
                    success: false,
                    error: `NonGovOrg not found`
                })
        }
        return res.status(200).json({
            success: true,
            data: nonGovOrgs
        })
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    getNonGovOrgs,
    getNonGovOrgById,
    createNonGovOrg,
    updateNonGovOrg,
    deleteNonGovOrg,
}