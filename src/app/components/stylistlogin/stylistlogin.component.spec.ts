import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistloginComponent } from './stylistlogin.component';

describe('StylistloginComponent', () => {
  let component: StylistloginComponent;
  let fixture: ComponentFixture<StylistloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylistloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylistloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
