import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermcellComponent } from './germcell.component';

describe('GermcellComponent', () => {
  let component: GermcellComponent;
  let fixture: ComponentFixture<GermcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GermcellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GermcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
