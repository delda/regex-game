var path = require('path'),
    resultRegex = require(path.join(__dirname, '../../../support/resultRegex.js')),
    subject = 'Pinturicchio',
    regexs = [/^(.+?)(u|r)(.*?)$/, /^(.+?)(u|r|i)(.+?)/]

regexs.forEach(function (regex) {
    console.log(resultRegex(regex, subject).join(' '))
})