import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPrivadoComponent } from './inicio-privado.component';

describe('InicioPrivadoComponent', () => {
  let component: InicioPrivadoComponent;
  let fixture: ComponentFixture<InicioPrivadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioPrivadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
