'use strict'

const os = require('os')
const Table = require('cli-table')
const fixtures = require('./fixtures')

const conflate = require('conflate')
const deepmerge = require('deepmerge')
const extend = require('extend')
const lodashMerge = require('lodash.merge')
const merge = require('merge')
const mergeDeep = require('merge-deep')
const mergeOptions = require('merge-options')

function bench (data, method) {
  const time = process.hrtime()
  for (let i = 0; i < 100000; i += 1) {
    method({}, data)
  }
  return process.hrtime(time)
}

const suite = {
  'Object.assign': {
    method: Object.assign,
    timing: {}
  },
  'conflate': {
    method: conflate,
    timing: {}
  },
  'deepmerge': {
    method: deepmerge,
    timing: {}
  },
  'extend': {
    method: extend,
    timing: {}
  },
  'extend (deep copy)': {
    method: extend.bind(null, true),
    timing: {}
  },
  'lodash.merge': {
    method: lodashMerge,
    timing: {}
  },
  'merge': {
    method: merge,
    timing: {}
  },
  'merge (cloned recursive)': {
    method: merge.recursive.bind(null, true),
    timing: {}
  },
  'merge-deep': {
    method: mergeDeep,
    timing: {}
  },
  'merge-options': {
    method: mergeOptions,
    timing: {}
  }
}

console.log('System: %s/%s %s %s ~ %s (cores/threads: %s)',
  os.type(), os.platform(), os.arch(), os.release(),
  os.cpus()[0].model, os.cpus().length
)

const resultsTable = new Table({
  head: ['method', 'menu', 'webapp']
})
for (const key of Object.keys(suite)) {
  const menu = bench(fixtures.menu, suite[key].method)
  const webapp = bench(fixtures.webapp, suite[key].method)
  suite[key].timing.menu = menu
  suite[key].timing.webapp = webapp
}

// TODO: add reporting for merging test object to a desired object
// const foo = {
//   foo: 'foo',
//   bar: {
//     baz: [1, 2]
//   },
//   baz: [{foo: 'foo'}]
// }

// const bar = {
//   bar: { baz: [3] },
//   baz: [{foo: 'foobar'}, {bar: 'bar'}, 'baz']
// }

// const desired = {
//   foo: 'foo',
//   bar: {
//     baz: [1, 2, 3]
//   },
//   baz: [{foo: 'foobar'}, {bar: 'bar'}, 'baz']
// }

// for (const key of Object.keys(suite)) {
//   const merged = suite[key].method({}, foo, bar)
//   try {
//     equal(merged, desired)
//     suite[key].meregesDeeply = 'yes'
//   } catch (e) {
//     suite[key].meregesDeeply = 'no'
//   }
// }

for (const key of Object.keys(suite)) {
  const menuSeconds = suite[key].timing.menu[0]
  const menuMS = String(suite[key].timing.menu[1] / 1e6).substr(0, -4)
  const menuNS = suite[key].timing.menu[1]

  const webappSeconds = suite[key].timing.webapp[0]
  const webappMS = String(suite[key].timing.webapp[1] / 1e6).substr(0, -4)
  const webappNS = suite[key].timing.webapp[1]

  resultsTable.push([
    key,
    `${menuSeconds} s, ${menuMS} ms (${menuNS} ns)`,
    `${webappSeconds} s, ${webappMS} ms (${webappNS} ns)`
  ])
}

console.log(resultsTable.toString())
