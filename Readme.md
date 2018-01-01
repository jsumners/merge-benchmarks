# Merge Benchmarks

This is a simple microbenchmark suite to test various object merging modules.
It is up to the viewer to make judgements on the results. Links to each tested
module is provided so that the viewer can easily research each module. Not all
modules merge objects in the same manner (i.e. they produce different results).

[Pull requests](https://github.com/jsumners/merge-benchmarks) with new tests
are welcomed.

## Modules Tested

+ [conflate](https://www.npmjs.com/package/conflate)
+ [deepmerge](https://www.npmjs.com/package/deepmerge)
+ [extend](https://www.npmjs.com/package/extend)
+ [lodash.merge](https://www.npmjs.com/package/lodash.merge)
+ [merge](https://www.npmjs.com/package/merge)
+ [merge-deep](https://www.npmjs.com/package/merge-deep)
+ [merge-options](https://www.npmjs.com/package/merge-options)

## Methodology

Each module is benchmarked against two data sets. Each data set is taken
from the [json.org example data](http://www.json.org/example.html). The
examples used are:

1. The [menu example](/fixtures/menu.json)
1. The [webapp example](/fixtures/webapp.json)

Each module is used to merge each respective data set into an empty object
(`{}`). This is done 100,000 times per data set while measuring the time it
takes to perform the set of all iterations.

## Results

```
System: Darwin/darwin x64 17.3.0 ~ Intel(R) Core(TM) i7-3720QM CPU @ 2.60GHz (cores/threads: 8)
┌──────────────────────────┬─────────────────────────┬─────────────────────────┐
│ method                   │ menu                    │ webapp                  │
├──────────────────────────┼─────────────────────────┼─────────────────────────┤
│ Object.assign            │ 0 s,  ms (23436767 ns)  │ 0 s,  ms (19430246 ns)  │
├──────────────────────────┼─────────────────────────┼─────────────────────────┤
│ conflate                 │ 0 s,  ms (21294924 ns)  │ 0 s,  ms (24835918 ns)  │
├──────────────────────────┼─────────────────────────┼─────────────────────────┤
│ deepmerge                │ 0 s,  ms (293535722 ns) │ 1 s,  ms (161977559 ns) │
├──────────────────────────┼─────────────────────────┼─────────────────────────┤
│ extend                   │ 0 s,  ms (8372953 ns)   │ 0 s,  ms (12781979 ns)  │
├──────────────────────────┼─────────────────────────┼─────────────────────────┤
│ extend (deep copy)       │ 0 s,  ms (292156963 ns) │ 1 s,  ms (468442831 ns) │
├──────────────────────────┼─────────────────────────┼─────────────────────────┤
│ lodash.merge             │ 0 s,  ms (482128133 ns) │ 1 s,  ms (626040603 ns) │
├──────────────────────────┼─────────────────────────┼─────────────────────────┤
│ merge                    │ 0 s,  ms (39226049 ns)  │ 0 s,  ms (37952338 ns)  │
├──────────────────────────┼─────────────────────────┼─────────────────────────┤
│ merge (cloned recursive) │ 0 s,  ms (237916068 ns) │ 1 s,  ms (454915366 ns) │
├──────────────────────────┼─────────────────────────┼─────────────────────────┤
│ merge-deep               │ 0 s,  ms (530983505 ns) │ 2 s,  ms (542837402 ns) │
├──────────────────────────┼─────────────────────────┼─────────────────────────┤
│ merge-options            │ 0 s,  ms (711708127 ns) │ 1 s,  ms (989316138 ns) │
└──────────────────────────┴─────────────────────────┴─────────────────────────┘
```

## License

[MIT License](http://jsumners.mit-license.org)
