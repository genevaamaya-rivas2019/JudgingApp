import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgepanelComponent } from './judgepanel.component';

describe('JudgepanelComponent', () => {
  let component: JudgepanelComponent;
  let fixture: ComponentFixture<JudgepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudgepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
