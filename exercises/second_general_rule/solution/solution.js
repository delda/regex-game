var path = require('path'),
    resultRegex = require(path.join(__dirname, '../../../support/resultRegex')),
    phrase = 'Sono stati 56388480 i residenti in Italia nel 1980.',
    regexes = [/.*(\d+)/, /.*(\d*)/, /(\d+)(?!.*\d)/]

regexes.forEach(function (regex) {
    console.log(resultRegex(regex, phrase).join(' '))
})
