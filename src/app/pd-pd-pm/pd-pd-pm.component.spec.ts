import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdPdPmComponent } from './pd-pd-pm.component';

describe('PdPdPmComponent', () => {
  let component: PdPdPmComponent;
  let fixture: ComponentFixture<PdPdPmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdPdPmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdPdPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
