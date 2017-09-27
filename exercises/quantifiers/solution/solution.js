var path = require('path')
var resultRegex = require(path.join(__dirname, '../../../support/resultRegex'))
var string = 'Pinturicchio'
var regex = [/(.+)(h|i)(.*)/, /(.+)(h|i|o)(.*)/]

regex.forEach(function (re) {
  console.log(resultRegex(re, string).join(' '))
})
