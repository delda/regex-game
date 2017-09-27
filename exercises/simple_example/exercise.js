var exercise = require('workshopper-exercise')()
var filecheck = require('workshopper-exercise/filecheck')
var execute = require('workshopper-exercise/execute')
var comparestdout = require('workshopper-exercise/comparestdout')
var path = require('path')
var replaceSolutionFile = require(path.join(__dirname, '../../support/replaceSolutionFile'))
var solutionFile = path.join(__dirname, './solution/tmpSolution')
var tmpFile = '/tmp/simple_example'

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
