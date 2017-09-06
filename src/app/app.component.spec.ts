import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HelloModule } from "app/hello/hello.module";

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			imports: [
				HelloModule
			]
		}).compileComponents();
	}));

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	it(`should render 'Hello, NPM!' in a hello tag`, async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('HELLO').textContent).toContain('Hello, NPM!');
	}));
	
});
