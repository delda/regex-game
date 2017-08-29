var exercise = require('workshopper-exercise')()
var filecheck = require('workshopper-exercise/filecheck')
var execute = require('workshopper-exercise/execute')
var comparestdout = require('workshopper-exercise/comparestdout')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

exercise.addSetup(function (mode, callback) {
    var args = ['Ciao Mondo', 'Hello World', 'Hello World!', 'hello world', 'hello world!']
    this.submissionArgs = this.solutionArgs = args
    process.nextTick(callback)
})

module.exports = exercise