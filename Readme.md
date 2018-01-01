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
┌──────────────────────────┬───────────────────────────────┬───────────────────────────────┐
│ method                   │ menu                          │ webapp                        │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ Object.assign            │ 0 s, 23.66 ms (23663494 ns)   │ 0 s, 19.99 ms (19996345 ns)   │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ conflate                 │ 0 s, 21.77 ms (21777642 ns)   │ 0 s, 27.48 ms (27482767 ns)   │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ deepmerge                │ 0 s, 289.88 ms (289883633 ns) │ 1 s, 157.92 ms (157924356 ns) │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ extend                   │ 0 s, 6.70 ms (6702616 ns)     │ 0 s, 10.5 ms (10568570 ns)    │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ extend (deep copy)       │ 0 s, 263.74 ms (263749977 ns) │ 1 s, 466.64 ms (466640012 ns) │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ lodash.merge             │ 0 s, 485.87 ms (485876953 ns) │ 1 s, 678.03 ms (678032608 ns) │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ merge                    │ 0 s, 38.81 ms (38813905 ns)   │ 0 s, 42. ms (42134100 ns)     │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ merge (cloned recursive) │ 0 s, 236.34 ms (236347286 ns) │ 1 s, 479.05 ms (479050156 ns) │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ merge-deep               │ 0 s, 512.48 ms (512488048 ns) │ 2 s, 575.95 ms (575959667 ns) │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ merge-options            │ 0 s, 783.57 ms (783576617 ns) │ 2 s, 255.1 ms (255182370 ns)  │
└──────────────────────────┴───────────────────────────────┴───────────────────────────────┘
```

## License

[MIT License](http://jsumners.mit-license.org)
