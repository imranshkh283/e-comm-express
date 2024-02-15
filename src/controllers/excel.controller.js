const xlsx = require('xlsx');
const httpStatus = require('http-status');

const readXlsFile = async (req, res) => {
    const workbook = await xlsx.readFile('./../../ShoppingExcel.xlsx');
    // const sheetName = workbook.SheetNames[0];
    // const sheet = workbook.Sheets[sheetName];
    // const data = xlsx.utils.sheet_to_json(sheet);
    res.status(httpStatus.CREATED).send({
        message: workbook
    });
}

module.exports = {
    readXlsFile
};