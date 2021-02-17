import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellreqsLeukComponent } from './cellreqs-leuk.component';

describe('CellreqsLeukComponent', () => {
  let component: CellreqsLeukComponent;
  let fixture: ComponentFixture<CellreqsLeukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellreqsLeukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellreqsLeukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
