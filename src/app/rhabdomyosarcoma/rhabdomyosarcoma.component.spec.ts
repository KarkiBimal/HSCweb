import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhabdomyosarcomaComponent } from './rhabdomyosarcoma.component';

describe('RhabdomyosarcomaComponent', () => {
  let component: RhabdomyosarcomaComponent;
  let fixture: ComponentFixture<RhabdomyosarcomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhabdomyosarcomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhabdomyosarcomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
