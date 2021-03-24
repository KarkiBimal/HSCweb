import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwingsnciiComponent } from './ewingsncii.component';

describe('EwingsnciiComponent', () => {
  let component: EwingsnciiComponent;
  let fixture: ComponentFixture<EwingsnciiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EwingsnciiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EwingsnciiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
