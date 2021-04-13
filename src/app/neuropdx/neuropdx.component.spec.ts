import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuropdxComponent } from './neuropdx.component';

describe('NeuropdxComponent', () => {
  let component: NeuropdxComponent;
  let fixture: ComponentFixture<NeuropdxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuropdxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuropdxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
