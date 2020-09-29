import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogotiposComponent } from './logotipos.component';

describe('LogotiposComponent', () => {
  let component: LogotiposComponent;
  let fixture: ComponentFixture<LogotiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogotiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogotiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
