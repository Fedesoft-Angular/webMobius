import { async, TestBed } from '@angular/core/testing';
import { ProveedoresPrivadoComponent } from './proveedores-privado.component';
describe('ProveedoresPrivadoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProveedoresPrivadoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProveedoresPrivadoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=proveedores-privado.component.spec.js.map