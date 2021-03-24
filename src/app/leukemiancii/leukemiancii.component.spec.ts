import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeukemianciiComponent } from './leukemiancii.component';

describe('LeukemianciiComponent', () => {
  let component: LeukemianciiComponent;
  let fixture: ComponentFixture<LeukemianciiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeukemianciiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeukemianciiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
