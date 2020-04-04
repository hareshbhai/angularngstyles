import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroStyleSubComponent } from './intro-style-sub.component';

describe('IntroStyleSubComponent', () => {
  let component: IntroStyleSubComponent;
  let fixture: ComponentFixture<IntroStyleSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroStyleSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroStyleSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
