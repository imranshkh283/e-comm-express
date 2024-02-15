const express = require('express');
const excelController = require('../controllers/excel.controller');

const router = express.Router();

router.get('/read-xlsx', excelController.readXlsFile);


module.exports = router;