var path = require('path'),
    resultRegex = require(path.join(__dirname, '../../../support/resultRegex')),
    string = ['abcdefghij', 'abcdghij', 'abefij'],
    regex = /(ab(cd|ef)((gh)|ij))/

string.forEach(function (subject) {
    console.log(resultRegex(regex, subject).join(' '))
})
