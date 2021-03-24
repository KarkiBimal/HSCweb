import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwingsComponent } from './ewings.component';

describe('EwingsComponent', () => {
  let component: EwingsComponent;
  let fixture: ComponentFixture<EwingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EwingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EwingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
