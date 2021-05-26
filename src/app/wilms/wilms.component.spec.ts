import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilmsComponent } from './wilms.component';

describe('WilmsComponent', () => {
  let component: WilmsComponent;
  let fixture: ComponentFixture<WilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
