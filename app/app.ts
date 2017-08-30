import { Component, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { tpl } from "./app.tpl";
import { HelloModule } from "../index";

@Component({
    selector: 'my-app',
    template: tpl,
})
export class AppComponent {
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HelloModule
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
