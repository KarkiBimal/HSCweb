import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALTESTComponent } from './alt-est.component';

describe('ALTESTComponent', () => {
  let component: ALTESTComponent;
  let fixture: ComponentFixture<ALTESTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALTESTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ALTESTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
