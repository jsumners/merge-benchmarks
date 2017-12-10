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
ok ~26 ms (0 s + 26259159 ns)

# menu: extend 100k
ok ~8.28 ms (0 s + 8275061 ns)

# menu: extend deep copy 100k
ok ~4.53 ms (0 s + 4526154 ns)

# menu: lodash.merge 100k
ok ~351 ms (0 s + 350939333 ns)

# menu: merge 100k
ok ~31 ms (0 s + 31463868 ns)

# menu: merge cloned recursive 100k
ok ~38 ms (0 s + 38418317 ns)

# menu: merge-deep 100k
ok ~425 ms (0 s + 424642177 ns)

# menu: merge-options 100k
ok ~470 ms (0 s + 469694318 ns)

# webapp: Object.assign 100k
ok ~18 ms (0 s + 18212737 ns)

# webapp: extend 100k
ok ~8.57 ms (0 s + 8572379 ns)

# webapp: extend deep copy 100k
ok ~7.31 ms (0 s + 7310780 ns)

# webapp: lodash.merge 100k
ok ~1.31 s (1 s + 306157971 ns)

# webapp: merge 100k
ok ~31 ms (0 s + 31328096 ns)

# webapp: merge-deep 100k
ok ~2.07 s (2 s + 69078939 ns)

# webapp: merge cloned recursive 100k
ok ~38 ms (0 s + 38139796 ns)

# webapp: merge-options 100k
ok ~1.55 s (1 s + 549083741 ns)

all benchmarks completed
ok ~6.38 s (6 s + 382102826 ns)
```

## License

[MIT License](http://jsumners.mit-license.org)
