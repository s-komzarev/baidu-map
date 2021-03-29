import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { isNull, isUndefined } from '../helpers/object';
import { toPoints } from '../helpers/transformer';
import { nullCheck } from '../helpers/validate';
import { MapService } from '../providers/mapService';
var PolylineComponent = /** @class */ (function () {
    function PolylineComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
        this.clicked = new EventEmitter();
    }
    PolylineComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.points, 'points is required for <polyline>');
        this.service
            .addOverlay(function () {
            return (_this.polyline = new window.BMap.Polyline(toPoints(_this.points), _this.options));
        })
            .then(function (_a) {
            var map = _a.map;
            _this.loaded.emit(_this.polyline);
            _this.addListener(_this.polyline, map);
        });
    };
    PolylineComponent.prototype.ngOnChanges = function (changes) {
        if (changes.points && !changes.points.isFirstChange()) {
            this.polyline.setPath(toPoints(changes.points.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    };
    PolylineComponent.prototype.ngOnDestroy = function () {
        this.service.removeOverlay(this.polyline);
    };
    PolylineComponent.prototype.setOptions = function (options) {
        if (isNull(options)) {
            return;
        }
        if (!isUndefined(options.enableEditing)) {
            if (options.enableEditing) {
                this.polyline.enableEditing();
            }
            else {
                this.polyline.disableEditing();
            }
        }
        if (!isUndefined(options.enableMassClear)) {
            if (options.enableEditing) {
                this.polyline.enableMassClear();
            }
            else {
                this.polyline.disableMassClear();
            }
        }
        if (!isUndefined(options.strokeColor)) {
            this.polyline.setStrokeColor(options.strokeColor);
        }
        if (!isUndefined(options.strokeOpacity)) {
            this.polyline.setStrokeOpacity(options.strokeOpacity);
        }
        if (!isUndefined(options.strokeStyle)) {
            this.polyline.setStrokeStyle(options.strokeStyle);
        }
        if (!isUndefined(options.strokeWeight)) {
            this.polyline.setStrokeWeight(options.strokeWeight);
        }
    };
    PolylineComponent.prototype.addListener = function (polyline, map) {
        var _this = this;
        polyline.addEventListener('click', function (e) {
            console.log('sfdsfdsfds');
            _this.clicked.emit({
                e: e,
                map: map,
                polyline: polyline
            });
        });
    };
    PolylineComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
    tslib_1.__decorate([
        Input()
    ], PolylineComponent.prototype, "points", void 0);
    tslib_1.__decorate([
        Input()
    ], PolylineComponent.prototype, "options", void 0);
    tslib_1.__decorate([
        Output()
    ], PolylineComponent.prototype, "loaded", void 0);
    tslib_1.__decorate([
        Output()
    ], PolylineComponent.prototype, "clicked", void 0);
    PolylineComponent = tslib_1.__decorate([
        Directive({
            selector: 'polyline'
        })
    ], PolylineComponent);
    return PolylineComponent;
}());
export { PolylineComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItYmFpZHUtbWFwLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcG9seWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFRcEQ7SUFTRSwyQkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUxyQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUMzQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUlKLENBQUM7SUFFcEMsb0NBQVEsR0FBZjtRQUFBLGlCQWNDO1FBYkMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsbUNBQW1DLENBQUMsQ0FBQTtRQUUzRCxJQUFJLENBQUMsT0FBTzthQUNULFVBQVUsQ0FBQztZQUNWLE9BQU8sQ0FBQyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQzlDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQ3JCLEtBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsRUFBTztnQkFBTCxZQUFHO1lBQ1YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FB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QWlDO0lBRS9CO1FBQVQsTUFBTSxFQUFFO3FEQUFvQztJQUNuQztRQUFULE1BQU0sRUFBRTtzREFBcUM7SUFMbkMsaUJBQWlCO1FBSDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7T0FDVyxpQkFBaUIsQ0FrRjdCO0lBQUQsd0JBQUM7Q0FBQSxBQWxGRCxJQWtGQztTQWxGWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5pbXBvcnQgeyBpc051bGwsIGlzVW5kZWZpbmVkIH0gZnJvbSAnLi4vaGVscGVycy9vYmplY3QnXHJcbmltcG9ydCB7IHRvUG9pbnRzIH0gZnJvbSAnLi4vaGVscGVycy90cmFuc2Zvcm1lcidcclxuaW1wb3J0IHsgbnVsbENoZWNrIH0gZnJvbSAnLi4vaGVscGVycy92YWxpZGF0ZSdcclxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9tYXBTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBCTWFwSW5zdGFuY2UgfSBmcm9tICcuLi90eXBlcy9NYXAnXHJcbmltcG9ydCB7IEJQb2x5bGluZSwgUG9seWxpbmVPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMvUG9seWxpbmUnXHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vdHlwZXMvUG9pbnQnXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ3BvbHlsaW5lJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9seWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBwcml2YXRlIHBvaW50czogQXJyYXk8UG9pbnQ+XHJcbiAgQElucHV0KCkgcHJpdmF0ZSBvcHRpb25zOiBQb2x5bGluZU9wdGlvbnNcclxuXHJcbiAgQE91dHB1dCgpIHByaXZhdGUgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcbiAgQE91dHB1dCgpIHByaXZhdGUgY2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICBwcml2YXRlIHBvbHlsaW5lOiBCUG9seWxpbmVcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBNYXBTZXJ2aWNlKSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICBudWxsQ2hlY2sodGhpcy5wb2ludHMsICdwb2ludHMgaXMgcmVxdWlyZWQgZm9yIDxwb2x5bGluZT4nKVxyXG5cclxuICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAuYWRkT3ZlcmxheSgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnBvbHlsaW5lID0gbmV3IHdpbmRvdy5CTWFwLlBvbHlsaW5lKFxyXG4gICAgICAgICAgdG9Qb2ludHModGhpcy5wb2ludHMpLFxyXG4gICAgICAgICAgdGhpcy5vcHRpb25zXHJcbiAgICAgICAgKSlcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHsgbWFwIH0pID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KHRoaXMucG9seWxpbmUpXHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcih0aGlzLnBvbHlsaW5lLCBtYXApXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xyXG4gICAgaWYgKGNoYW5nZXMucG9pbnRzICYmICFjaGFuZ2VzLnBvaW50cy5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5wb2x5bGluZS5zZXRQYXRoKHRvUG9pbnRzKGNoYW5nZXMucG9pbnRzLmN1cnJlbnRWYWx1ZSkpXHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zICYmICFjaGFuZ2VzLm9wdGlvbnMuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLnJlbW92ZU92ZXJsYXkodGhpcy5wb2x5bGluZSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0T3B0aW9ucyhvcHRpb25zOiBQb2x5bGluZU9wdGlvbnMpOiB2b2lkIHtcclxuICAgIGlmIChpc051bGwob3B0aW9ucykpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuZW5hYmxlRWRpdGluZykpIHtcclxuICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlRWRpdGluZykge1xyXG4gICAgICAgIHRoaXMucG9seWxpbmUuZW5hYmxlRWRpdGluZygpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wb2x5bGluZS5kaXNhYmxlRWRpdGluZygpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5lbmFibGVNYXNzQ2xlYXIpKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLmVuYWJsZUVkaXRpbmcpIHtcclxuICAgICAgICB0aGlzLnBvbHlsaW5lLmVuYWJsZU1hc3NDbGVhcigpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wb2x5bGluZS5kaXNhYmxlTWFzc0NsZWFyKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLnN0cm9rZUNvbG9yKSkge1xyXG4gICAgICB0aGlzLnBvbHlsaW5lLnNldFN0cm9rZUNvbG9yKG9wdGlvbnMuc3Ryb2tlQ29sb3IpXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSkpIHtcclxuICAgICAgdGhpcy5wb2x5bGluZS5zZXRTdHJva2VPcGFjaXR5KG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSlcclxuICAgIH1cclxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5zdHJva2VTdHlsZSkpIHtcclxuICAgICAgdGhpcy5wb2x5bGluZS5zZXRTdHJva2VTdHlsZShvcHRpb25zLnN0cm9rZVN0eWxlKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLnN0cm9rZVdlaWdodCkpIHtcclxuICAgICAgdGhpcy5wb2x5bGluZS5zZXRTdHJva2VXZWlnaHQob3B0aW9ucy5zdHJva2VXZWlnaHQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZExpc3RlbmVyKHBvbHlsaW5lOiBCUG9seWxpbmUsIG1hcDogQk1hcEluc3RhbmNlKSB7XHJcbiAgICBwb2x5bGluZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ3NmZHNmZHNmZHMnKVxyXG4gICAgICB0aGlzLmNsaWNrZWQuZW1pdCh7XHJcbiAgICAgICAgZSxcclxuICAgICAgICBtYXAsXHJcbiAgICAgICAgcG9seWxpbmVcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==