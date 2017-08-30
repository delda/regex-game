const regex_game = require('workshopper-adventure')({
    appDir: __dirname,
    languages: ['en', 'it'],
    header: require('workshopper-adventure/default/header'),
    footer: require('workshopper-adventure/default/footer'),
    fail: require('workshopper-adventure/default/fail'),
    pass: require('workshopper-adventure/default/pass')
})

regex_game.addAll([
    'INTRODUCTION',
    'ANCHORS AND MODIFIERS',
    'ALTERNATION',
    'WORD BOUNDARIES',
    'GROUPING'
])

module.exports = regex_game