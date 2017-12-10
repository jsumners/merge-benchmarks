'use strict'

const fork = require('child_process').fork
const fs = require('fs')
const path = require('path')
const tmpl = fs.readFileSync(path.join(__dirname, '_readme.md')).toString()

let results = ''
const bench = fork(path.join(__dirname, 'index.js'), [], {silent: true})

bench.stdout.on('data', (d) => {
  results += d
})

bench.on('close', (code) => {
  if (code !== 0) process.exit(code)
  fs.writeFileSync(
    path.join(__dirname, 'Readme.md'),
    tmpl.replace('{{results}}', results.trim())
  )
})
