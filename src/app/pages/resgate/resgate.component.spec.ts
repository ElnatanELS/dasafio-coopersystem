/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResgateComponent } from './resgate.component';

describe('ResgateComponent', () => {
  let component: ResgateComponent;
  let fixture: ComponentFixture<ResgateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
