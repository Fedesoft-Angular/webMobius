import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresPrivadoComponent } from './proveedores-privado.component';

describe('ProveedoresPrivadoComponent', () => {
  let component: ProveedoresPrivadoComponent;
  let fixture: ComponentFixture<ProveedoresPrivadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedoresPrivadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedoresPrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
