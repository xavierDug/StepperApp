/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StepFinaleComponent } from './stepFinale.component';

describe('StepFinaleComponent', () => {
  let component: StepFinaleComponent;
  let fixture: ComponentFixture<StepFinaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepFinaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFinaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
