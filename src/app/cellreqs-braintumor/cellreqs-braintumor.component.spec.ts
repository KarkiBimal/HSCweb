import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellreqsBraintumorComponent } from './cellreqs-braintumor.component';

describe('CellreqsBraintumorComponent', () => {
  let component: CellreqsBraintumorComponent;
  let fixture: ComponentFixture<CellreqsBraintumorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellreqsBraintumorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellreqsBraintumorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
