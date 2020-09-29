import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaTuMarcaComponent } from './crea-tu-marca.component';

describe('CreaTuMarcaComponent', () => {
  let component: CreaTuMarcaComponent;
  let fixture: ComponentFixture<CreaTuMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaTuMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaTuMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
