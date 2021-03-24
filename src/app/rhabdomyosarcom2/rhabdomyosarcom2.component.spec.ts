import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rhabdomyosarcom2Component } from './rhabdomyosarcom2.component';

describe('Rhabdomyosarcom2Component', () => {
  let component: Rhabdomyosarcom2Component;
  let fixture: ComponentFixture<Rhabdomyosarcom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rhabdomyosarcom2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rhabdomyosarcom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
