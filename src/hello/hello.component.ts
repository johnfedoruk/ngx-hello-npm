import { Component, NgModule } from '@angular/core'
import { tpl } from "./hello.tpl";

@Component({
    selector: 'hello',
    template: tpl,
})
export class HelloComponent {
    public readonly greeting:string = "Hello, NPM";
}
