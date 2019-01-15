import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpSaloonComponent } from './sign-up-saloon.component';

describe('SignUpSaloonComponent', () => {
  let component: SignUpSaloonComponent;
  let fixture: ComponentFixture<SignUpSaloonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpSaloonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpSaloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
