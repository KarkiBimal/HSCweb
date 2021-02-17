import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellreqsRhabComponent } from './cellreqs-rhab.component';

describe('CellreqsRhabComponent', () => {
  let component: CellreqsRhabComponent;
  let fixture: ComponentFixture<CellreqsRhabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellreqsRhabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellreqsRhabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
