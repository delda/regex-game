var path = require('path'),
  markRegex = require(path.join(__dirname, '../../../support/markRegex.js')),
  word = 'barbar!e'

console.log(markRegex(/(bar)\b/, word))
console.log(markRegex(/(bar)\B/, word))
