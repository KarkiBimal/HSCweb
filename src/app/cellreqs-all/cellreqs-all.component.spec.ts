import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellreqsAllComponent } from './cellreqs-all.component';

describe('CellreqsAllComponent', () => {
  let component: CellreqsAllComponent;
  let fixture: ComponentFixture<CellreqsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellreqsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellreqsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
