import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataarchiveComponent } from './dataarchive.component';

describe('DataarchiveComponent', () => {
  let component: DataarchiveComponent;
  let fixture: ComponentFixture<DataarchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataarchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
