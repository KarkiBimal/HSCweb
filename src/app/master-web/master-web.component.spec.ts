import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterWebComponent } from './master-web.component';

describe('MasterWebComponent', () => {
  let component: MasterWebComponent;
  let fixture: ComponentFixture<MasterWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
