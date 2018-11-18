import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedencionesComponent } from './redenciones.component';

describe('RedencionesComponent', () => {
  let component: RedencionesComponent;
  let fixture: ComponentFixture<RedencionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedencionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedencionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
