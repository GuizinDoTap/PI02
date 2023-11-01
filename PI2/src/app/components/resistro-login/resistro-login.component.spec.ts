import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistroLoginComponent } from './resistro-login.component';

describe('ResistroLoginComponent', () => {
  let component: ResistroLoginComponent;
  let fixture: ComponentFixture<ResistroLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistroLoginComponent]
    });
    fixture = TestBed.createComponent(ResistroLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
