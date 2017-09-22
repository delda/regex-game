var string = "ab\ncd",
    regexs = [/.*/, /.*$/, /^cd/m, /^.cd/m, /^ab.cd$/m],
    path = require('path'),
    resultRegex = require(path.join(__dirname, '../../../support/resultRegex'))

regexs.forEach(function(regex){
    console.log(resultRegex(regex, string)[0] || '')
})