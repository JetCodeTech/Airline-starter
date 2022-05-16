import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmoduleComponent } from './bookmodule.component';

describe('BookmoduleComponent', () => {
  let component: BookmoduleComponent;
  let fixture: ComponentFixture<BookmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
