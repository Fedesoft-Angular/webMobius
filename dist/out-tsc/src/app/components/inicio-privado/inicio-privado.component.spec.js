import { async, TestBed } from '@angular/core/testing';
import { InicioPrivadoComponent } from './inicio-privado.component';
describe('InicioPrivadoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [InicioPrivadoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(InicioPrivadoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=inicio-privado.component.spec.js.map