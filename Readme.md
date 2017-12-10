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
ok ~23 ms (0 s + 22901818 ns)

# menu: extend 100k
ok ~8.94 ms (0 s + 8936239 ns)

# menu: extend deep copy 100k
ok ~224 ms (0 s + 223918102 ns)

# menu: lodash.merge 100k
ok ~322 ms (0 s + 322438804 ns)

# menu: merge 100k
ok ~41 ms (0 s + 41351474 ns)

# menu: merge cloned recursive 100k
ok ~213 ms (0 s + 212815906 ns)

# menu: merge-deep 100k
ok ~412 ms (0 s + 411855904 ns)

# menu: merge-options 100k
ok ~462 ms (0 s + 461811446 ns)

# webapp: Object.assign 100k
ok ~18 ms (0 s + 17871980 ns)

# webapp: extend 100k
ok ~10 ms (0 s + 10068045 ns)

# webapp: extend deep copy 100k
ok ~1.22 s (1 s + 219002554 ns)

# webapp: lodash.merge 100k
ok ~1.3 s (1 s + 296523886 ns)

# webapp: merge 100k
ok ~33 ms (0 s + 32973458 ns)

# webapp: merge-deep 100k
ok ~2.1 s (2 s + 97228989 ns)

# webapp: merge cloned recursive 100k
ok ~1.3 s (1 s + 298639332 ns)

# webapp: merge-options 100k
ok ~1.53 s (1 s + 527054984 ns)

all benchmarks completed
ok ~9.21 s (9 s + 205392921 ns)
```

## License

[MIT License](http://jsumners.mit-license.org)
