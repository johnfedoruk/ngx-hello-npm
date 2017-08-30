
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HelloComponent } from '../../index';

describe('HelloComponent', function () {
    let de: DebugElement;
    let component: HelloComponent;
    let fixture: ComponentFixture<HelloComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ BrowserModule, FormsModule ],
            declarations: [ HelloComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HelloComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h3'));
    });

    it('Should create HelloComponent', () => {
        expect(component).toBeDefined();
    });

    it('HelloComponent should have expected text', () => {
        fixture.detectChanges();
        const div = de.nativeElement;
        expect(div.innerText).toContain(component.greeting);
    });
});