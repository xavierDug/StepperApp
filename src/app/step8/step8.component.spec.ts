/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Step8Component } from './step8.component';

describe('Step8Component', () => {
  let component: Step8Component;
  let fixture: ComponentFixture<Step8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
