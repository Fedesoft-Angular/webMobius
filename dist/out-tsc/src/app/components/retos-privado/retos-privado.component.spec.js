import { async, TestBed } from '@angular/core/testing';
import { RetosPrivadoComponent } from './retos-privado.component';
describe('RetosPrivadoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RetosPrivadoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RetosPrivadoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=retos-privado.component.spec.js.map