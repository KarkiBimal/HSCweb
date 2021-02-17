import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellreqsNcipptpComponent } from './cellreqs-ncipptp.component';

describe('CellreqsNcipptpComponent', () => {
  let component: CellreqsNcipptpComponent;
  let fixture: ComponentFixture<CellreqsNcipptpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellreqsNcipptpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellreqsNcipptpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
