process.argv.forEach(function (str) {
    var result = str.match(/Hello World!/)
    if (result) {
        console.log(result[0])
    }
})
