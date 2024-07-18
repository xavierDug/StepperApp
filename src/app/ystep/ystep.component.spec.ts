/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YstepComponent } from './ystep.component';

describe('YstepComponent', () => {
  let component: YstepComponent;
  let fixture: ComponentFixture<YstepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YstepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
