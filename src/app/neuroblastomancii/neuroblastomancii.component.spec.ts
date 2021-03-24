import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuroblastomanciiComponent } from './neuroblastomancii.component';

describe('NeuroblastomanciiComponent', () => {
  let component: NeuroblastomanciiComponent;
  let fixture: ComponentFixture<NeuroblastomanciiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuroblastomanciiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuroblastomanciiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
