import { Component, OnInit } from '@angular/core';
import { html } from "./hello.component.html";
import { css } from "./hello.component.css";

@Component({
    selector: 'hello',
	template: html,
	styles: [css]
})
export class HelloComponent implements OnInit {

	public title:string;

	constructor() { }

	ngOnInit() {
		this.title = "Hello, NPM!";
	}

}
