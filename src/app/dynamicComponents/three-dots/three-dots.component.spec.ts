import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDotsComponent } from './three-dots.component';

describe('ThreeDotsComponent', () => {
  let component: ThreeDotsComponent;
  let fixture: ComponentFixture<ThreeDotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
