var string = 'ab\ncd'
var regexs = [/.*/, /.*$/, /^cd/m, /^.cd/m, /^ab.cd$/m, /^cd$/m]
var path = require('path')
var resultRegex = require(path.join(__dirname, '../../../support/resultRegex'))

regexs.forEach(function (regex) {
  console.log(resultRegex(regex, string)[0] || '')
})
