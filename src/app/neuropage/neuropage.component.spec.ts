import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuropageComponent } from './neuropage.component';

describe('NeuropageComponent', () => {
  let component: NeuropageComponent;
  let fixture: ComponentFixture<NeuropageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuropageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuropageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
