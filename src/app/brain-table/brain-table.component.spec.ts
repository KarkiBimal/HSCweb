import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainTableComponent } from './brain-table.component';

describe('BrainTableComponent', () => {
  let component: BrainTableComponent;
  let fixture: ComponentFixture<BrainTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrainTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
