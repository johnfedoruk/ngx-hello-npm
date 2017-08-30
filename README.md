# ngx-hello-npm

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

## Run the example application locally
- `git clone https://github.com/johnfedoruk/ngx-hello-npm`
- `cd ngx-hello-npm`
- `npm install`
- `npm start` # Browser should open automatically on http://localhost:3000

## Run the tests locally
- Same as above, except for the last step do:
- `npm run test-once`  # Defaults to a Firefox browser

### License

[MIT](https://tldrlegal.com/license/mit-license)
