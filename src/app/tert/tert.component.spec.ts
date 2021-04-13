import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TERTComponent } from './tert.component';

describe('TERTComponent', () => {
  let component: TERTComponent;
  let fixture: ComponentFixture<TERTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TERTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TERTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
