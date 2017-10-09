import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderScrollComponent } from './header-scroll.component';

describe('HeaderScrollComponent', () => {
  let component: HeaderScrollComponent;
  let fixture: ComponentFixture<HeaderScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
