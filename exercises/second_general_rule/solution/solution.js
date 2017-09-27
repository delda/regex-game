var path = require('path')
var resultRegex = require(path.join(__dirname, '../../../support/resultRegex'))
var phrase = 'Sono stati 56388480 i residenti in Italia nel 1980.'
var regexes = [/.*(\d+)/, /.*(\d*)/, /(\d+)(?!.*\d)/]

regexes.forEach(function (regex) {
  console.log(resultRegex(regex, phrase).join(' '))
})
