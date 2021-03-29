import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { isNull, isUndefined } from '../helpers/object';
import { toPoints } from '../helpers/transformer';
import { nullCheck } from '../helpers/validate';
import { MapService } from '../providers/mapService';
var PolygonComponent = /** @class */ (function () {
    function PolygonComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    PolygonComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.points, 'points is required for <polygon>');
        this.service
            .addOverlay(function () {
            return (_this.polygon = new window.BMap.Polygon(toPoints(_this.points), _this.options));
        })
            .then(function () {
            _this.loaded.emit(_this.polygon);
        });
    };
    PolygonComponent.prototype.ngOnChanges = function (changes) {
        if (changes.points && !changes.points.isFirstChange()) {
            this.polygon.setPath(toPoints(changes.points.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    };
    PolygonComponent.prototype.ngOnDestroy = function () {
        this.service.removeOverlay(this.polygon);
    };
    PolygonComponent.prototype.setOptions = function (options) {
        if (isNull(options)) {
            return;
        }
        if (!isUndefined(options.enableEditing)) {
            if (options.enableEditing) {
                this.polygon.enableEditing();
            }
            else {
                this.polygon.disableEditing();
            }
        }
        if (!isUndefined(options.enableMassClear)) {
            if (options.enableEditing) {
                this.polygon.enableMassClear();
            }
            else {
                this.polygon.disableMassClear();
            }
        }
        if (!isUndefined(options.strokeColor)) {
            this.polygon.setStrokeColor(options.strokeColor);
        }
        if (!isUndefined(options.fillColor)) {
            this.polygon.setFillColor(options.fillColor);
        }
        if (!isUndefined(options.strokeOpacity)) {
            this.polygon.setStrokeOpacity(options.strokeOpacity);
        }
        if (!isUndefined(options.fillOpacity)) {
            this.polygon.setFillOpacity(options.fillOpacity);
        }
        if (!isUndefined(options.strokeStyle)) {
            this.polygon.setStrokeStyle(options.strokeStyle);
        }
        if (!isUndefined(options.strokeWeight)) {
            this.polygon.setStrokeWeight(options.strokeWeight);
        }
    };
    PolygonComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
    tslib_1.__decorate([
        Input()
    ], PolygonComponent.prototype, "points", void 0);
    tslib_1.__decorate([
        Input()
    ], PolygonComponent.prototype, "options", void 0);
    tslib_1.__decorate([
        Output()
    ], PolygonComponent.prototype, "loaded", void 0);
    PolygonComponent = tslib_1.__decorate([
        Directive({
            selector: 'polygon'
        })
    ], PolygonComponent);
    return PolygonComponent;
}());
export { PolygonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1iYWlkdS1tYXAvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wb2x5Z29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBT3BEO0lBUUUsMEJBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFKckIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFJSCxDQUFDO0lBRXBDLG1DQUFRLEdBQWY7UUFBQSxpQkFhQztRQVpDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGtDQUFrQyxDQUFDLENBQUE7UUFFMUQsSUFBSSxDQUFDLE9BQU87YUFDVCxVQUFVLENBQUM7WUFDVixPQUFPLENBQUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUM1QyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUNyQixLQUFJLENBQUMsT0FBTyxDQUNiLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxzQ0FBVyxHQUFsQixVQUFt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dXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbmltcG9ydCB7IGlzTnVsbCwgaXNVbmRlZmluZWQgfSBmcm9tICcuLi9oZWxwZXJzL29iamVjdCdcclxuaW1wb3J0IHsgdG9Qb2ludHMgfSBmcm9tICcuLi9oZWxwZXJzL3RyYW5zZm9ybWVyJ1xyXG5pbXBvcnQgeyBudWxsQ2hlY2sgfSBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRlJ1xyXG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL21hcFNlcnZpY2UnXHJcbmltcG9ydCB7IEJQb2x5Z29uLCBQb2x5Z29uT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzL1BvbHlnb24nXHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vdHlwZXMvUG9pbnQnXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ3BvbHlnb24nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb2x5Z29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgcHJpdmF0ZSBwb2ludHM6IEFycmF5PFBvaW50PlxyXG4gIEBJbnB1dCgpIHByaXZhdGUgb3B0aW9uczogUG9seWdvbk9wdGlvbnNcclxuXHJcbiAgQE91dHB1dCgpIHByaXZhdGUgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gIHByaXZhdGUgcG9seWdvbjogQlBvbHlnb25cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBNYXBTZXJ2aWNlKSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICBudWxsQ2hlY2sodGhpcy5wb2ludHMsICdwb2ludHMgaXMgcmVxdWlyZWQgZm9yIDxwb2x5Z29uPicpXHJcblxyXG4gICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgIC5hZGRPdmVybGF5KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gKHRoaXMucG9seWdvbiA9IG5ldyB3aW5kb3cuQk1hcC5Qb2x5Z29uKFxyXG4gICAgICAgICAgdG9Qb2ludHModGhpcy5wb2ludHMpLFxyXG4gICAgICAgICAgdGhpcy5vcHRpb25zXHJcbiAgICAgICAgKSlcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGVkLmVtaXQodGhpcy5wb2x5Z29uKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcclxuICAgIGlmIChjaGFuZ2VzLnBvaW50cyAmJiAhY2hhbmdlcy5wb2ludHMuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMucG9seWdvbi5zZXRQYXRoKHRvUG9pbnRzKGNoYW5nZXMucG9pbnRzLmN1cnJlbnRWYWx1ZSkpXHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zICYmICFjaGFuZ2VzLm9wdGlvbnMuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLnJlbW92ZU92ZXJsYXkodGhpcy5wb2x5Z29uKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRPcHRpb25zKG9wdGlvbnM6IFBvbHlnb25PcHRpb25zKTogdm9pZCB7XHJcbiAgICBpZiAoaXNOdWxsKG9wdGlvbnMpKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLmVuYWJsZUVkaXRpbmcpKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLmVuYWJsZUVkaXRpbmcpIHtcclxuICAgICAgICB0aGlzLnBvbHlnb24uZW5hYmxlRWRpdGluZygpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wb2x5Z29uLmRpc2FibGVFZGl0aW5nKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLmVuYWJsZU1hc3NDbGVhcikpIHtcclxuICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlRWRpdGluZykge1xyXG4gICAgICAgIHRoaXMucG9seWdvbi5lbmFibGVNYXNzQ2xlYXIoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucG9seWdvbi5kaXNhYmxlTWFzc0NsZWFyKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLnN0cm9rZUNvbG9yKSkge1xyXG4gICAgICB0aGlzLnBvbHlnb24uc2V0U3Ryb2tlQ29sb3Iob3B0aW9ucy5zdHJva2VDb2xvcilcclxuICAgIH1cclxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5maWxsQ29sb3IpKSB7XHJcbiAgICAgIHRoaXMucG9seWdvbi5zZXRGaWxsQ29sb3Iob3B0aW9ucy5maWxsQ29sb3IpXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSkpIHtcclxuICAgICAgdGhpcy5wb2x5Z29uLnNldFN0cm9rZU9wYWNpdHkob3B0aW9ucy5zdHJva2VPcGFjaXR5KVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLmZpbGxPcGFjaXR5KSkge1xyXG4gICAgICB0aGlzLnBvbHlnb24uc2V0RmlsbE9wYWNpdHkob3B0aW9ucy5maWxsT3BhY2l0eSlcclxuICAgIH1cclxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5zdHJva2VTdHlsZSkpIHtcclxuICAgICAgdGhpcy5wb2x5Z29uLnNldFN0cm9rZVN0eWxlKG9wdGlvbnMuc3Ryb2tlU3R5bGUpXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuc3Ryb2tlV2VpZ2h0KSkge1xyXG4gICAgICB0aGlzLnBvbHlnb24uc2V0U3Ryb2tlV2VpZ2h0KG9wdGlvbnMuc3Ryb2tlV2VpZ2h0KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=