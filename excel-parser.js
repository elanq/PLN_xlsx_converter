const XLSX = require('xlsx')
const xlsxMatcher = /\.[(^xlsx)]+$/g;

module.exports = {
  parseFile: function(fileLocation, context) {
    if(xlsxMatcher.test(fileLocation[0])) {
      var workbook = XLSX.readFile(fileLocation[0])
      this.parseWorkbook(workbook)
      context.innerText = "completed"
    } else {
      context.innerText = "wrong document format"
    }
  },

  parseWorkbook: function(workbook) {
    console.log(workbook)
  }
}
