import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainncciComponent } from './brainncci.component';

describe('BrainncciComponent', () => {
  let component: BrainncciComponent;
  let fixture: ComponentFixture<BrainncciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrainncciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainncciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
