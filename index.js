'use strict'

const bench = require('nanobench')
const fixtures = require('./fixtures')

const extend = require('extend')
const lodashMerge = require('lodash.merge')
const merge = require('merge')
const mergeDeep = require('merge-deep')
const mergeOptions = require('merge-options')

function run100k (b, data, method) {
  b.start()
  for (let i = 0; i < 100000; i += 1) {
    method({}, data)
  }
  b.end()
}

/// !!! menu data set !!!

bench('menu: Object.assign 100k', function (b) {
  run100k(b, fixtures.menu, Object.assign)
})

bench('menu: extend 100k', function (b) {
  run100k(b, fixtures.menu, extend)
})

bench('menu: extend deep copy 100k', function (b) {
  run100k(b, fixtures.menu, extend.bind(true))
})

bench('menu: lodash.merge 100k', function (b) {
  run100k(b, fixtures.menu, lodashMerge)
})

bench('menu: merge 100k', function (b) {
  run100k(b, fixtures.menu, merge)
})

bench('menu: merge cloned recursive 100k', function (b) {
  run100k(b, fixtures.menu, merge.recursive.bind(true))
})

bench('menu: merge-deep 100k', function (b) {
  run100k(b, fixtures.menu, mergeDeep)
})

bench('menu: merge-options 100k', function (b) {
  run100k(b, fixtures.menu, mergeOptions)
})

/// !!! webapp data set !!!

bench('webapp: Object.assign 100k', function (b) {
  run100k(b, fixtures.webapp, Object.assign)
})

bench('webapp: extend 100k', function (b) {
  run100k(b, fixtures.webapp, extend)
})

bench('webapp: extend deep copy 100k', function (b) {
  run100k(b, fixtures.webapp, extend.bind(true))
})

bench('webapp: lodash.merge 100k', function (b) {
  run100k(b, fixtures.webapp, lodashMerge)
})

bench('webapp: merge 100k', function (b) {
  run100k(b, fixtures.webapp, merge)
})

bench('webapp: merge-deep 100k', function (b) {
  run100k(b, fixtures.webapp, mergeDeep)
})

bench('webapp: merge cloned recursive 100k', function (b) {
  run100k(b, fixtures.webapp, merge.recursive.bind(true))
})

bench('webapp: merge-options 100k', function (b) {
  run100k(b, fixtures.webapp, mergeOptions)
})
