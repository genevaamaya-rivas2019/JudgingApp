import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Judgepanel2Component } from './judgepanel2.component';

describe('Judgepanel2Component', () => {
  let component: Judgepanel2Component;
  let fixture: ComponentFixture<Judgepanel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Judgepanel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Judgepanel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
