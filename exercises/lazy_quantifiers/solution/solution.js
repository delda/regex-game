var path = require('path')
var resultRegex = require(path.join(__dirname, '../../../support/resultRegex.js'))
var subject = 'Pinturicchio'
var regexs = [/^(.+?)(h|i)(.*?)$/, /^(.+?)(h|i|o)(.+?)/]

regexs.forEach(function (regex) {
  console.log(resultRegex(regex, subject).join(' '))
})
