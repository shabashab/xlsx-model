# `xlsx-model`
`xlsx-model` is the set of libraries that allow you to convert xlsx spreadsheets to models

It is a monorepo that consists of these packages:

| Package name   | Version | NPM                                                      | Purpose                                 |
|----------------|---------|----------------------------------------------------------|-----------------------------------------|
| xlsx-parser    | 0.4.4   | https://www.npmjs.com/package/@xlsx-model/xlsx-parser    | Classes to parse *.xlsx files to models |
| models         | 1.0.1   | https://www.npmjs.com/package/@xlsx-model/models         | Definitions of the models               |
| indexed-colors | 1.0.0   | https://www.npmjs.com/package/@xlsx-model/indexed-colors | Colors used in *.xlsx files             |
| serializer     | 0.4.0   | https://www.npmjs.com/package/@xlsx-model/serializer     | Serializers for models                  |

## Build
`xlsx-model` uses `rush` to manage the monorepo so building all the projects is quite an easy thing.

```
rush build
```