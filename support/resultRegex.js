var resultRegex = function (regex, subject) {
    var result = subject.match(regex),
        finalArray = []

    if (!result)
        return []

    result.forEach(function (substring) {
        if (typeof substring == 'undefined')
            substring = '___'
        finalArray.push(substring)
    })

    return finalArray
}

module.exports = resultRegex