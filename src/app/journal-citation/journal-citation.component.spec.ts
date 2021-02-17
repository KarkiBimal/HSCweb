import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalCitationComponent } from './journal-citation.component';

describe('JournalCitationComponent', () => {
  let component: JournalCitationComponent;
  let fixture: ComponentFixture<JournalCitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalCitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalCitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
