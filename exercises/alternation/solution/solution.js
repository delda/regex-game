/*
  Examples:
    /^(acceso|appeso|arreso)$/
    /^a(cc|pp|rr)eso$/
    /^a(c{2}|p{2}|r{2})eso$/
    /^a(cceso|ppeso|rreso)$/
    /^(acc|app|arr)eso$/
*/

var worlds = ['acceso', 'appeso', 'arreso', 'riacceso', 'sovrappeso', 'acreso', 'appreso']
var regexes = [/^(acceso|appeso|arreso)$/, /^a(cc|pp|rr)eso$/, /^a(c{2}|p{2}|r{2})eso$/]

regexes.forEach(function (regex) {
  worlds.forEach(function (world) {
    var result = world.match(regex)
    if (result) {
      console.log(result[0])
    } else {
      console.log()
    }
  })
})
