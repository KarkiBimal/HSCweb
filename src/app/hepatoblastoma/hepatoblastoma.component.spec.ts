import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HepatoblastomaComponent } from './hepatoblastoma.component';

describe('HepatoblastomaComponent', () => {
  let component: HepatoblastomaComponent;
  let fixture: ComponentFixture<HepatoblastomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HepatoblastomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HepatoblastomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
