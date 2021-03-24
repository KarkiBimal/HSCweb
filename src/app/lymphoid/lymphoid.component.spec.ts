import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LymphoidComponent } from './lymphoid.component';

describe('LymphoidComponent', () => {
  let component: LymphoidComponent;
  let fixture: ComponentFixture<LymphoidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LymphoidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LymphoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
