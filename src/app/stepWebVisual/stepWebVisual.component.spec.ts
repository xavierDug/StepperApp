/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StepWebVisualComponent } from './stepWebVisual.component';

describe('StepWebVisualComponent', () => {
  let component: StepWebVisualComponent;
  let fixture: ComponentFixture<StepWebVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepWebVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepWebVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
