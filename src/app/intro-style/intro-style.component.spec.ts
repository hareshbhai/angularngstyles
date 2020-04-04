import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroStyleComponent } from './intro-style.component';

describe('IntroStyleComponent', () => {
  let component: IntroStyleComponent;
  let fixture: ComponentFixture<IntroStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
