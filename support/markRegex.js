var markRegex = function (pattern, subject) {
  var firstStep = subject.replace(pattern, '§$1§')
  var match = false
  var result = ''
  for (var i = 0; i < firstStep.length; i++) {
    if (firstStep[i] == '§') {
      match ^= true
      continue
    }
    result += match ? '_' : firstStep[i]
  }
  return result
}

module.exports = markRegex
