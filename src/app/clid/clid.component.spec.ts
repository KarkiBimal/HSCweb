import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClidComponent } from './clid.component';

describe('ClidComponent', () => {
  let component: ClidComponent;
  let fixture: ComponentFixture<ClidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
