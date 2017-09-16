const fs = require('fs')

var replaceSolutionFile = function (exercise, fileName, solutionFile, tmpFile) {

    if (typeof fileName != 'undefined') {
        var args = fs.readFileSync(fileName, 'utf-8').split('\n')
        var regex = []
        args.forEach(function (re) {
            if(re) regex.push(re)
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

    return exercise
}

module.exports = replaceSolutionFile