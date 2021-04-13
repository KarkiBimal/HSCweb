import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MYCNComponent } from './mycn.component';

describe('MYCNComponent', () => {
  let component: MYCNComponent;
  let fixture: ComponentFixture<MYCNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MYCNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MYCNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
