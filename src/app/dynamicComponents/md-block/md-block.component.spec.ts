import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdBlockComponent } from './md-block.component';

describe('MdBlockComponent', () => {
  let component: MdBlockComponent;
  let fixture: ComponentFixture<MdBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
