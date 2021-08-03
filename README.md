## cez-spvr

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
vsts-npm-auth -config .npmrc
npm i
npm i -g gulp
npm run fixbuild
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options
gulp serve --max_old_space_size=8192 --ship --nobrowser

Gulp clean; Gulp bundle --max_old_space_size=8192 --ship; Gulp package-solution --ship

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
