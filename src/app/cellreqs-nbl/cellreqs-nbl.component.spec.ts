import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellreqsNblComponent } from './cellreqs-nbl.component';

describe('CellreqsNblComponent', () => {
  let component: CellreqsNblComponent;
  let fixture: ComponentFixture<CellreqsNblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellreqsNblComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellreqsNblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
