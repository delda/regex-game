var path = require('path'),
    resultRegex = require(path.join(__dirname, '../../../support/resultRegex')),
    string = 'Pinturicchio',
    regex = [/(.+)(h|i)(.*)/, /(.+)(h|i|o)(.*)/]

regex.forEach(function (re) {
    console.log(resultRegex(re, string).join(' '))
})
