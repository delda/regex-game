var exercise = require('workshopper-exercise')(),
  filecheck = require('workshopper-exercise/filecheck'),
  execute = require('workshopper-exercise/execute'),
  comparestdout = require('workshopper-exercise/comparestdout'),
  path = require('path'),
  replaceSolutionFile = require(path.join(__dirname, '../../support/replaceSolutionFile')),
  solutionFile = path.join(__dirname, './solution/tmpSolution'),
  tmpFile = '/tmp/unicode'

exercise.addSetup(function (mode, callback) {
  this.args = [tmpFile]
  process.nextTick(callback)
})

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

exercise = replaceSolutionFile(exercise, process.argv[3], solutionFile, tmpFile)

exercise.addSetup(function (mode, callback) {
  process.nextTick(callback)
})

module.exports = exercise
