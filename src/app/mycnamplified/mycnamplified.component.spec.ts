import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MYCNamplifiedComponent } from './mycnamplified.component';

describe('MYCNamplifiedComponent', () => {
  let component: MYCNamplifiedComponent;
  let fixture: ComponentFixture<MYCNamplifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MYCNamplifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MYCNamplifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
