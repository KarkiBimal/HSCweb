import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetinoblastomaComponent } from './retinoblastoma.component';

describe('RetinoblastomaComponent', () => {
  let component: RetinoblastomaComponent;
  let fixture: ComponentFixture<RetinoblastomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetinoblastomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetinoblastomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
