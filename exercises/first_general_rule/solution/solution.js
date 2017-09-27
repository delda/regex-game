var path = require('path'),
  resultRegex = require(path.join(__dirname, '../../../support/resultRegex'))

console.log(resultRegex(/disastro|segue|tra|titani/, 'Uno scontro tra titani ha conseguenze disastrose.').join(' '))
