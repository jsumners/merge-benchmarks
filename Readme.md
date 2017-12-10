# Merge Benchmarks

This is a simple microbenchmark suite to test various object merging modules.
It is up to the viewer to make judgements on the results. Links to each tested
module is provided so that the viewer can easily research each module.

[Pull requests](https://github.com/jsumners/merge-benchmarks) with new tests
are welcomed.

## Modules Tested

+ [extend](https://www.npmjs.com/package/extend)
+ [lodash.merge](https://www.npmjs.com/package/lodash.merge)
+ [merge](https://www.npmjs.com/package/merge)
+ [merge-deep](https://www.npmjs.com/package/merge-deep)
+ [merge-options](https://www.npmjs.com/package/merge-options)

## Results

```
NANOBENCH version 2
> /Users/jsumners/n/bin/node index.js

# menu: Object.assign 100k
ok ~25 ms (0 s + 25473770 ns)

# menu: extend 100k
ok ~9.36 ms (0 s + 9356053 ns)

# menu: extend deep copy 100k
ok ~251 ms (0 s + 250508084 ns)

# menu: lodash.merge 100k
ok ~377 ms (0 s + 377038211 ns)

# menu: merge 100k
ok ~34 ms (0 s + 34008210 ns)

# menu: merge cloned recursive 100k
ok ~228 ms (0 s + 227889294 ns)

# menu: merge-deep 100k
ok ~425 ms (0 s + 424877699 ns)

# menu: merge-options 100k
ok ~486 ms (0 s + 485616655 ns)

# webapp: Object.assign 100k
ok ~19 ms (0 s + 18705765 ns)

# webapp: extend 100k
ok ~7.65 ms (0 s + 7647890 ns)

# webapp: extend deep copy 100k
ok ~1.2 s (1 s + 204183868 ns)

# webapp: lodash.merge 100k
ok ~1.3 s (1 s + 299158750 ns)

# webapp: merge 100k
ok ~33 ms (0 s + 33207226 ns)

# webapp: merge-deep 100k
ok ~2.12 s (2 s + 119579635 ns)

# webapp: merge cloned recursive 100k
ok ~1.51 s (1 s + 513342357 ns)

# webapp: merge-options 100k
ok ~1.66 s (1 s + 662694535 ns)

all benchmarks completed
ok ~9.69 s (9 s + 693288002 ns)
```

## License

[MIT License](http://jsumners.mit-license.org)
