import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthercancerComponent } from './othercancer.component';

describe('OthercancerComponent', () => {
  let component: OthercancerComponent;
  let fixture: ComponentFixture<OthercancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthercancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthercancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
