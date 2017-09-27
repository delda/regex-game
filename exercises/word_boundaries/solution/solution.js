var path = require('path')
var markRegex = require(path.join(__dirname, '../../../support/markRegex.js'))
var word = 'barbar!e'

console.log(markRegex(/(bar)\b/, word))
console.log(markRegex(/(bar)\B/, word))
