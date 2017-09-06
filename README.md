# ngx-hello-npm

[![Build Status](https://travis-ci.org/johnfedoruk/ngx-hello-npm.svg?branch=master)](https://travis-ci.org/johnfedoruk/ngx-hello-npm)
[![npm version](https://badge.fury.io/js/ngx-hello-npm.svg)](https://badge.fury.io/js/ngx-hello-npm)

Starter for creating Angular NPM packages.

## Install in your project

`npm install ngx-hello-npm --save`

## Using the Component
### Add Component to Module imports
```
import { HelloModule } from 'ngx-hello-npm';
...
@NgModule({
 ...
   declarations: [
        AppComponent,
        ...
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HelloModule,
      ...
 ...
})
export class AppModule {}
```
### Add Component to your Application
```
@Component({
    selector: 'my-app',
    template: `
    <h3>Hello NPM</h3>
    <div>
        <hello></hello>
    </div>
  `,
})
export class App {
   ...
}
```

## Developers

The `index.js` file exports the HelloModule from the `./src/app/hello` directory. TypeScript definition files are in the `index.d.ts` file. If changing the directory of the exported module, or adding exported modules, please update these two index files and make the necessary changes to `tsconfig-aot.json`'s "include" array. You may also want to update the npm clean script.

### Run the example application locally
- `git clone https://github.com/johnfedoruk/ngx-hello-npm`
- `cd ngx-hello-npm`
- `npm install`
- `ng serve` # Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Run the tests locally
- Same as above, except for the last step do:
- `npm run test-once` # Executes the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
- Same as above, except for the last step do:
- `ng e2e` # Executes the end-to-end tests via [Protractor](http://www.protractortest.org/).

### License

[MIT](https://tldrlegal.com/license/mit-license)
