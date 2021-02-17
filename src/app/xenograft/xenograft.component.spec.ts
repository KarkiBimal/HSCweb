import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XenograftComponent } from './xenograft.component';

describe('XenograftComponent', () => {
  let component: XenograftComponent;
  let fixture: ComponentFixture<XenograftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XenograftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XenograftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
