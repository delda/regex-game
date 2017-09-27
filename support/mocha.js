#!/usr/bin/env node

var dirname = require.resolve('../node_modules/.bin/workshopper-adventure-test')
var Mocha = require('mocha')
var path = require('path')
var mocha = new Mocha({
  timeout: 15000
})
if (process.argv[2]) {
  process.chdir(process.argv[2])
}
mocha.reporter('spec')
mocha.files.push(path.join(dirname, '../..', 'spec') + '/exercises.js')
mocha.files.push(path.join(dirname, '../..', 'spec') + '/info.js')
mocha.fullTrace()
mocha.run(process.exit.bind(process))
