# presentation

# mdx-deck basic template

This was generated with [mdx-deck][]'s `npm init deck` command.

## Development

To run the presentation deck in development mode:

```sh
npm start

npm start .\test-presentation\deck.mdx
```

Edit the [`deck.mdx`](deck.mdx) file to get started.

## Exporting

To build the presentation deck as static HTML:

```sh
npm run build
```

przykad budowania testowej prezenstaji
```sh
npm run build -- -d=test-presentation\dist .\test-presentation\deck.mdx
npm run build -- -d=uniformity-css\dist .\uniformity-css\deck.mdx
```

To export a PDF:

```sh
npm run pdf
```

To export an image of the title slide:

```sh
npm run image
```

For more documentation see the [mdx-deck][] repo.

[mdx-deck]: https://github.com/jxnblk/mdx-deck
