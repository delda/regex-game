var exercise = require('workshopper-exercise')(),
    filecheck = require('workshopper-exercise/filecheck'),
    execute = require('workshopper-exercise/execute'),
    comparestdout = require('workshopper-exercise/comparestdout'),
    fs = require('fs'),
    path = require('path'),
    tmpFile = '/tmp/lookaround',
    solutionFile = path.join(__dirname, './solution/tmpSolution'),
    fileName

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

fileName = process.argv[3]
if (typeof fileName != 'undefined') {
    var args = fs.readFileSync(fileName, 'utf-8').split('\n')
    var regex = []
    args.forEach(function (re) {
        if(re)
            regex.push(re)
    })
    var data = fs.readFileSync(solutionFile).toString()
    var newData = data.replace('%%%TEST%%%', regex)

    fs.writeFile(
        tmpFile,
        newData,
        function(err) {
            if(err) {
                return console.log(err);
            }
        })
}

exercise.addSetup(function (mode, callback) {
    process.nextTick(callback)
})

module.exports = exercise