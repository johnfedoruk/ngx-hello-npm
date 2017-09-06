import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
	let component: HelloComponent;
	let fixture: ComponentFixture<HelloComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HelloComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HelloComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it(`should have as title 'Hello, NPM!'`, () => {
		const fixture = TestBed.createComponent(HelloComponent);
		const app = fixture.debugElement.componentInstance;
		component.ngOnInit();
		fixture.detectChanges();
		expect(app.title).toEqual('Hello, NPM!');
	});

});
