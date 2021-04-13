import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALKComponent } from './alk.component';

describe('ALKComponent', () => {
  let component: ALKComponent;
  let fixture: ComponentFixture<ALKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ALKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
