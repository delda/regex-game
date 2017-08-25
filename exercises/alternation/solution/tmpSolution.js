var worlds = ['acceso', 'appeso', 'arreso', 'riacceso', 'sovrappeso', 'acreso', 'appreso'],
    result, re,
    argoments = process.argv.slice(2)

argoments.forEach(function (regex) {
    regex = regex.split('/').join('')
    re = new RegExp(regex)
    worlds.forEach(function (world) {
        result = world.match(re)
        if (result) {
            console.log(result[0])
        } else {
            console.log()
        }
    })
})
