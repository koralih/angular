import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chlid2Component } from './chlid2.component';

describe('Chlid2Component', () => {
  let component: Chlid2Component;
  let fixture: ComponentFixture<Chlid2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chlid2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chlid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
