const express = require('express')

const CivilDepartmentCtrl = require('../controllers/civil-department-ctrl')

const router = express.Router()

router.get('/civil-departments', CivilDepartmentCtrl.getCivilDepartments)
router.get('/civil-departments/:id', CivilDepartmentCtrl.getCivilDepartmentById)
router.post('/civil-departments', CivilDepartmentCtrl.createCivilDepartment)
router.put('/civil-departments/:id', CivilDepartmentCtrl.updateCivilDepartment)
router.delete('/civil-departments/:id', CivilDepartmentCtrl.deleteCivilDepartment)

module.exports = router