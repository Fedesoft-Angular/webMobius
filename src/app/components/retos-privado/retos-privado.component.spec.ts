import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetosPrivadoComponent } from './retos-privado.component';

describe('RetosPrivadoComponent', () => {
  let component: RetosPrivadoComponent;
  let fixture: ComponentFixture<RetosPrivadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetosPrivadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetosPrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
