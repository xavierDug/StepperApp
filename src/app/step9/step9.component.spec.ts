/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Step9Component } from './step9.component';

describe('Step9Component', () => {
  let component: Step9Component;
  let fixture: ComponentFixture<Step9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
