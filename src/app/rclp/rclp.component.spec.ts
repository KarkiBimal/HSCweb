import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RCLPComponent } from './rclp.component';

describe('RCLPComponent', () => {
  let component: RCLPComponent;
  let fixture: ComponentFixture<RCLPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RCLPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RCLPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
