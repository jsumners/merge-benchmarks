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
{{results}}
```

## License

[MIT License](http://jsumners.mit-license.org)
