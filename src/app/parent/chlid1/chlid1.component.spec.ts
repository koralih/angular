import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chlid1Component } from './chlid1.component';

describe('Chlid1Component', () => {
  let component: Chlid1Component;
  let fixture: ComponentFixture<Chlid1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chlid1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chlid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
