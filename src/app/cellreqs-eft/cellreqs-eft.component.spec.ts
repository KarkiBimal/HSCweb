import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellreqsEftComponent } from './cellreqs-eft.component';

describe('CellreqsEftComponent', () => {
  let component: CellreqsEftComponent;
  let fixture: ComponentFixture<CellreqsEftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellreqsEftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellreqsEftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
