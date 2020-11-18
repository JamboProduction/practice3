const express = require('express')

const NonGovOrgCtrl = require('../controllers/non-gov-org-ctrl')

const router = express.Router()

router.get('/non-gov-orgs', NonGovOrgCtrl.getNonGovOrgs)
router.get('/non-gov-orgs/:id', NonGovOrgCtrl.getNonGovOrgById)
router.post('/non-gov-orgs', NonGovOrgCtrl.createNonGovOrg)
router.put('/non-gov-orgs/:id', NonGovOrgCtrl.updateNonGovOrg)
router.delete('/non-gov-orgs/:id', NonGovOrgCtrl.deleteNonGovOrg)

module.exports = router