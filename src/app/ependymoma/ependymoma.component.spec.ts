import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpendymomaComponent } from './ependymoma.component';

describe('EpendymomaComponent', () => {
  let component: EpendymomaComponent;
  let fixture: ComponentFixture<EpendymomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpendymomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpendymomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
