var path = require('path'),
  resultRegex = require(path.join(__dirname, '../../../support/resultRegex.js')),
  subject = 'Pinturicchio',
  regexs = [/^(.+?)(h|i)(.*?)$/, /^(.+?)(h|i|o)(.+?)/]

regexs.forEach(function (regex) {
  console.log(resultRegex(regex, subject).join(' '))
})
