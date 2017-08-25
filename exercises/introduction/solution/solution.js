var argoments = process.argv.slice(2)
argoments.forEach(function (str) {
    var result = str.match(/Hello World!/)
    if (result) {
        console.log(result[0])
    }
})
