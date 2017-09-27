var path = require('path')
var resultRegex = require(path.join(__dirname, '../../../support/resultRegex'))
var string = ['abcdefghij', 'abcdghij', 'abefij']
var regex = /(ab(cd|ef)((gh)|ij))/

string.forEach(function (subject) {
  console.log(resultRegex(regex, subject).join(' '))
})
