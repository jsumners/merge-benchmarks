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
│ Object.assign            │ 0 s, 24.64 ms (24646087 ns)   │ 0 s, 18.53 ms (18536173 ns)   │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ conflate                 │ 0 s, 21.10 ms (21105143 ns)   │ 0 s, 24.4 ms (24465780 ns)    │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ deepmerge                │ 0 s, 288.23 ms (288238882 ns) │ 1 s, 175.77 ms (175778962 ns) │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ extend                   │ 0 s, 6.91 ms (6914505 ns)     │ 0 s, 13.32 ms (13327417 ns)   │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ extend (deep copy)       │ 0 s, 289.21 ms (289218295 ns) │ 1 s, 488.82 ms (488822487 ns) │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ lodash.merge             │ 0 s, 489.42 ms (489422631 ns) │ 1 s, 609.33 ms (609338347 ns) │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ merge                    │ 0 s, 36.06 ms (36064161 ns)   │ 0 s, 38.09 ms (38092761 ns)   │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ merge (cloned recursive) │ 0 s, 237.49 ms (237493493 ns) │ 1 s, 465.54 ms (465540849 ns) │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ merge-deep               │ 0 s, 513.93 ms (513938722 ns) │ 2 s, 552.82 ms (552826239 ns) │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ merge-options            │ 0 s, 721.07 ms (721070882 ns) │ 1 s, 986.48 ms (986488819 ns) │
└──────────────────────────┴───────────────────────────────┴───────────────────────────────┘
```

## License

[MIT License](http://jsumners.mit-license.org)
