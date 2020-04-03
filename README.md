# Armadacar

## Project setup

To run the project you need to first install its dependencies :

```
npm install
```

### Compiles and hot-reloads for development

You can test de project on your local machine using npm :
```
npm run serve
```

### Compiles and minifies for production

Use npm to build the app for production :
```
npm run build
```

### Lints and fixes files

Use eslint to check the linting on the source files directory of the project :
```
npm run lint src/
```

### Deploying to production

Once your developpements have been merged into the branch master you can tag the banch with the name vX.Y where X and Y are the digit numbers of the version.
This will create a CI/CD pipeline which will run different tests on the generated code, generate the production image with the name of the tag : vX.Y and a "release" image. Then the CI/CD will deploy automatically to production using the "release" image.
