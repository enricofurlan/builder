import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPaletteComponent } from './component-palette.component';

describe('ComponentPaletteComponent', () => {
  let component: ComponentPaletteComponent;
  let fixture: ComponentFixture<ComponentPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentPaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
