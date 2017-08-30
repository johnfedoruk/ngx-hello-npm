
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from '../app';
import { HelloModule } from "../../index";

describe('App', function () {
    let de: DebugElement;
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ BrowserModule, FormsModule, HelloModule ],
            declarations: [ AppComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('hello'));
    });

    it('Should create App', () => {
        expect(component).toBeDefined();
    });

    it('App should have expected text', () => {
        fixture.detectChanges();
        const hello = de.nativeElement;
        expect(hello.innerText).toContain("Hello");
    });
});