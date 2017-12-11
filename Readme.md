# Merge Benchmarks

This is a simple microbenchmark suite to test various object merging modules.
It is up to the viewer to make judgements on the results. Links to each tested
module is provided so that the viewer can easily research each module.

[Pull requests](https://github.com/jsumners/merge-benchmarks) with new tests
are welcomed.

## Modules Tested

+ [deepmerge](https://www.npmjs.com/package/deepmerge)
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
ok ~21 ms (0 s + 21286845 ns)

# menu: deepmerge 100k
ok ~256 ms (0 s + 255848618 ns)

# menu: extend 100k
ok ~6.22 ms (0 s + 6216435 ns)

# menu: extend deep copy 100k
ok ~233 ms (0 s + 232777348 ns)

# menu: lodash.merge 100k
ok ~325 ms (0 s + 325111258 ns)

# menu: merge 100k
ok ~30 ms (0 s + 30285198 ns)

# menu: merge cloned recursive 100k
ok ~207 ms (0 s + 207394784 ns)

# menu: merge-deep 100k
ok ~411 ms (0 s + 411444235 ns)

# menu: merge-options 100k
ok ~483 ms (0 s + 483419625 ns)

# webapp: Object.assign 100k
ok ~19 ms (0 s + 18610117 ns)

# webapp: deepmerge 100k
ok ~984 ms (0 s + 984492230 ns)

# webapp: extend 100k
ok ~7.78 ms (0 s + 7783519 ns)

# webapp: extend deep copy 100k
ok ~1.22 s (1 s + 220733833 ns)

# webapp: lodash.merge 100k
ok ~1.32 s (1 s + 317323600 ns)

# webapp: merge 100k
ok ~33 ms (0 s + 33146648 ns)

# webapp: merge-deep 100k
ok ~2.45 s (2 s + 452388512 ns)

# webapp: merge cloned recursive 100k
ok ~1.38 s (1 s + 383987751 ns)

# webapp: merge-options 100k
ok ~1.67 s (1 s + 673943704 ns)

all benchmarks completed
ok ~11 s (11 s + 66194260 ns)
```

## License

[MIT License](http://jsumners.mit-license.org)
