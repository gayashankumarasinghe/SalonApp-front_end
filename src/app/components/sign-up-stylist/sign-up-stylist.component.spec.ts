import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpStylistComponent } from './sign-up-stylist.component';

describe('SignUpStylistComponent', () => {
  let component: SignUpStylistComponent;
  let fixture: ComponentFixture<SignUpStylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpStylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpStylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
