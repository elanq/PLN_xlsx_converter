// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const parser = require('./excel-parser')
const { dialog }  = require('electron').remote

let submitButton = document.getElementById('submitButton')
let chooseButton = document.getElementById('chooseButton')
let textStatus = document.getElementById('textStatus')
let fileLocation

chooseButton.addEventListener('click', function() {
  fileLocation = dialog.showOpenDialog({ properties: [ 'openFile' ]})
  textStatus.innerText = fileLocation
  textStatus.value = fileLocation
})

submitButton.addEventListener('click', function() {
  textStatus.innerText= "loading...."
  parser.parseFile(fileLocation, textStatus)
})
