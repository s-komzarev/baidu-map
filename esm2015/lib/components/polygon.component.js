import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { isNull, isUndefined } from '../helpers/object';
import { toPoints } from '../helpers/transformer';
import { nullCheck } from '../helpers/validate';
import { MapService } from '../providers/mapService';
let PolygonComponent = class PolygonComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    ngOnInit() {
        nullCheck(this.points, 'points is required for <polygon>');
        this.service
            .addOverlay(() => {
            return (this.polygon = new window.BMap.Polygon(toPoints(this.points), this.options));
        })
            .then(() => {
            this.loaded.emit(this.polygon);
        });
    }
    ngOnChanges(changes) {
        if (changes.points && !changes.points.isFirstChange()) {
            this.polygon.setPath(toPoints(changes.points.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    }
    ngOnDestroy() {
        this.service.removeOverlay(this.polygon);
    }
    setOptions(options) {
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
    }
};
PolygonComponent.ctorParameters = () => [
    { type: MapService }
];
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
export { PolygonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1iYWlkdS1tYXAvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wb2x5Z29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBT3BELElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBUTNCLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFKckIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFJSCxDQUFDO0lBRXBDLFFBQVE7UUFDYixTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxrQ0FBa0MsQ0FBQyxDQUFBO1FBRTFELElBQUksQ0FBQyxPQUFPO2FBQ1QsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQzVDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQ3JCLElBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FB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dGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5pbXBvcnQgeyBpc051bGwsIGlzVW5kZWZpbmVkIH0gZnJvbSAnLi4vaGVscGVycy9vYmplY3QnXHJcbmltcG9ydCB7IHRvUG9pbnRzIH0gZnJvbSAnLi4vaGVscGVycy90cmFuc2Zvcm1lcidcclxuaW1wb3J0IHsgbnVsbENoZWNrIH0gZnJvbSAnLi4vaGVscGVycy92YWxpZGF0ZSdcclxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9tYXBTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBCUG9seWdvbiwgUG9seWdvbk9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9Qb2x5Z29uJ1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL3R5cGVzL1BvaW50J1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdwb2x5Z29uJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9seWdvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHByaXZhdGUgcG9pbnRzOiBBcnJheTxQb2ludD5cclxuICBASW5wdXQoKSBwcml2YXRlIG9wdGlvbnM6IFBvbHlnb25PcHRpb25zXHJcblxyXG4gIEBPdXRwdXQoKSBwcml2YXRlIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICBwcml2YXRlIHBvbHlnb246IEJQb2x5Z29uXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTWFwU2VydmljZSkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgbnVsbENoZWNrKHRoaXMucG9pbnRzLCAncG9pbnRzIGlzIHJlcXVpcmVkIGZvciA8cG9seWdvbj4nKVxyXG5cclxuICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAuYWRkT3ZlcmxheSgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnBvbHlnb24gPSBuZXcgd2luZG93LkJNYXAuUG9seWdvbihcclxuICAgICAgICAgIHRvUG9pbnRzKHRoaXMucG9pbnRzKSxcclxuICAgICAgICAgIHRoaXMub3B0aW9uc1xyXG4gICAgICAgICkpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KHRoaXMucG9seWdvbilcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XHJcbiAgICBpZiAoY2hhbmdlcy5wb2ludHMgJiYgIWNoYW5nZXMucG9pbnRzLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLnBvbHlnb24uc2V0UGF0aCh0b1BvaW50cyhjaGFuZ2VzLnBvaW50cy5jdXJyZW50VmFsdWUpKVxyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyAmJiAhY2hhbmdlcy5vcHRpb25zLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLnNldE9wdGlvbnMoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc2VydmljZS5yZW1vdmVPdmVybGF5KHRoaXMucG9seWdvbilcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0T3B0aW9ucyhvcHRpb25zOiBQb2x5Z29uT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgaWYgKGlzTnVsbChvcHRpb25zKSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5lbmFibGVFZGl0aW5nKSkge1xyXG4gICAgICBpZiAob3B0aW9ucy5lbmFibGVFZGl0aW5nKSB7XHJcbiAgICAgICAgdGhpcy5wb2x5Z29uLmVuYWJsZUVkaXRpbmcoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucG9seWdvbi5kaXNhYmxlRWRpdGluZygpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5lbmFibGVNYXNzQ2xlYXIpKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLmVuYWJsZUVkaXRpbmcpIHtcclxuICAgICAgICB0aGlzLnBvbHlnb24uZW5hYmxlTWFzc0NsZWFyKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBvbHlnb24uZGlzYWJsZU1hc3NDbGVhcigpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5zdHJva2VDb2xvcikpIHtcclxuICAgICAgdGhpcy5wb2x5Z29uLnNldFN0cm9rZUNvbG9yKG9wdGlvbnMuc3Ryb2tlQ29sb3IpXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuZmlsbENvbG9yKSkge1xyXG4gICAgICB0aGlzLnBvbHlnb24uc2V0RmlsbENvbG9yKG9wdGlvbnMuZmlsbENvbG9yKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLnN0cm9rZU9wYWNpdHkpKSB7XHJcbiAgICAgIHRoaXMucG9seWdvbi5zZXRTdHJva2VPcGFjaXR5KG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSlcclxuICAgIH1cclxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5maWxsT3BhY2l0eSkpIHtcclxuICAgICAgdGhpcy5wb2x5Z29uLnNldEZpbGxPcGFjaXR5KG9wdGlvbnMuZmlsbE9wYWNpdHkpXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuc3Ryb2tlU3R5bGUpKSB7XHJcbiAgICAgIHRoaXMucG9seWdvbi5zZXRTdHJva2VTdHlsZShvcHRpb25zLnN0cm9rZVN0eWxlKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLnN0cm9rZVdlaWdodCkpIHtcclxuICAgICAgdGhpcy5wb2x5Z29uLnNldFN0cm9rZVdlaWdodChvcHRpb25zLnN0cm9rZVdlaWdodClcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19