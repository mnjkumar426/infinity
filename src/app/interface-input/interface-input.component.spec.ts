import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceInputComponent } from './interface-input.component';

describe('InterfaceInputComponent', () => {
  let component: InterfaceInputComponent;
  let fixture: ComponentFixture<InterfaceInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
