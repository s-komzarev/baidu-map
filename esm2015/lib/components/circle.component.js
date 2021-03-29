import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { isNull, isUndefined } from '../helpers/object';
import { toPoint } from '../helpers/transformer';
import { nullCheck } from '../helpers/validate';
import { MapService } from '../providers/mapService';
let CircleComponent = class CircleComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    ngOnInit() {
        nullCheck(this.center, 'center is required for <circle>');
        nullCheck(this.radius, 'center is required for <circle>');
        this.service
            .addOverlay(() => {
            return (this.circle = new window.BMap.Circle(toPoint(this.center), this.radius, this.options));
        })
            .then(() => {
            this.loaded.emit(this.circle);
        });
    }
    ngOnChanges(changes) {
        if (changes.center && !changes.center.isFirstChange()) {
            this.circle.setCenter(toPoint(changes.center.currentValue));
        }
        if (changes.radius && !changes.radius.isFirstChange()) {
            this.circle.setRadius(changes.radius.currentValue);
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    }
    ngOnDestroy() {
        this.service.removeOverlay(this.circle);
    }
    setOptions(options) {
        if (isNull(options)) {
            return;
        }
        if (!isUndefined(options.enableEditing)) {
            if (options.enableEditing) {
                this.circle.enableEditing();
            }
            else {
                this.circle.disableEditing();
            }
        }
        if (!isUndefined(options.enableMassClear)) {
            if (options.enableEditing) {
                this.circle.enableMassClear();
            }
            else {
                this.circle.disableMassClear();
            }
        }
        if (!isUndefined(options.strokeColor)) {
            this.circle.setStrokeColor(options.strokeColor);
        }
        if (!isUndefined(options.fillColor)) {
            this.circle.setFillColor(options.fillColor);
        }
        if (!isUndefined(options.strokeOpacity)) {
            this.circle.setStrokeOpacity(options.strokeOpacity);
        }
        if (!isUndefined(options.fillOpacity)) {
            this.circle.setFillOpacity(options.fillOpacity);
        }
        if (!isUndefined(options.strokeStyle)) {
            this.circle.setStrokeStyle(options.strokeStyle);
        }
        if (!isUndefined(options.strokeWeight)) {
            this.circle.setStrokeWeight(options.strokeWeight);
        }
    }
};
CircleComponent.ctorParameters = () => [
    { type: MapService }
];
tslib_1.__decorate([
    Input()
], CircleComponent.prototype, "center", void 0);
tslib_1.__decorate([
    Input()
], CircleComponent.prototype, "radius", void 0);
tslib_1.__decorate([
    Input()
], CircleComponent.prototype, "options", void 0);
tslib_1.__decorate([
    Output()
], CircleComponent.prototype, "loaded", void 0);
CircleComponent = tslib_1.__decorate([
    Directive({
        selector: 'circle'
    })
], CircleComponent);
export { CircleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NpcmNsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQU9wRCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBUzFCLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFKckIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFJSCxDQUFDO0lBRXBDLFFBQVE7UUFDYixTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxpQ0FBaUMsQ0FBQyxDQUFBO1FBQ3pELFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGlDQUFpQyxDQUFDLENBQUE7UUFFekQsSUFBSSxDQUFDLE9BQU87YUFDVCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDMUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFDcEIsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsT0FBTyxDQUNiLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVCxJQUFJLENB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QztDQUNGLENBQUE7O1lBeEU4QixVQUFVOztBQVI5QjtJQUFSLEtBQUssRUFBRTsrQ0FBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7K0NBQXVCO0FBQ3RCO0lBQVIsS0FBSyxFQUFFO2dEQUErQjtBQUU3QjtJQUFULE1BQU0sRUFBRTsrQ0FBb0M7QUFMbEMsZUFBZTtJQUgzQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtLQUNuQixDQUFDO0dBQ1csZUFBZSxDQWlGM0I7U0FqRlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbmltcG9ydCB7IGlzTnVsbCwgaXNVbmRlZmluZWQgfSBmcm9tICcuLi9oZWxwZXJzL29iamVjdCdcclxuaW1wb3J0IHsgdG9Qb2ludCB9IGZyb20gJy4uL2hlbHBlcnMvdHJhbnNmb3JtZXInXHJcbmltcG9ydCB7IG51bGxDaGVjayB9IGZyb20gJy4uL2hlbHBlcnMvdmFsaWRhdGUnXHJcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvbWFwU2VydmljZSdcclxuaW1wb3J0IHsgQkNpcmNsZSwgQ2lyY2xlT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzL0NpcmNsZSdcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi90eXBlcy9Qb2ludCdcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnY2lyY2xlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2lyY2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgcHJpdmF0ZSBjZW50ZXI6IFBvaW50XHJcbiAgQElucHV0KCkgcHJpdmF0ZSByYWRpdXM6IG51bWJlclxyXG4gIEBJbnB1dCgpIHByaXZhdGUgb3B0aW9uczogQ2lyY2xlT3B0aW9uc1xyXG5cclxuICBAT3V0cHV0KCkgcHJpdmF0ZSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgcHJpdmF0ZSBjaXJjbGU6IEJDaXJjbGVcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBNYXBTZXJ2aWNlKSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICBudWxsQ2hlY2sodGhpcy5jZW50ZXIsICdjZW50ZXIgaXMgcmVxdWlyZWQgZm9yIDxjaXJjbGU+JylcclxuICAgIG51bGxDaGVjayh0aGlzLnJhZGl1cywgJ2NlbnRlciBpcyByZXF1aXJlZCBmb3IgPGNpcmNsZT4nKVxyXG5cclxuICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAuYWRkT3ZlcmxheSgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNpcmNsZSA9IG5ldyB3aW5kb3cuQk1hcC5DaXJjbGUoXHJcbiAgICAgICAgICB0b1BvaW50KHRoaXMuY2VudGVyKSxcclxuICAgICAgICAgIHRoaXMucmFkaXVzLFxyXG4gICAgICAgICAgdGhpcy5vcHRpb25zXHJcbiAgICAgICAgKSlcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGVkLmVtaXQodGhpcy5jaXJjbGUpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xyXG4gICAgaWYgKGNoYW5nZXMuY2VudGVyICYmICFjaGFuZ2VzLmNlbnRlci5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5jaXJjbGUuc2V0Q2VudGVyKHRvUG9pbnQoY2hhbmdlcy5jZW50ZXIuY3VycmVudFZhbHVlKSlcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLnJhZGl1cyAmJiAhY2hhbmdlcy5yYWRpdXMuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMuY2lyY2xlLnNldFJhZGl1cyhjaGFuZ2VzLnJhZGl1cy5jdXJyZW50VmFsdWUpXHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zICYmICFjaGFuZ2VzLm9wdGlvbnMuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLnJlbW92ZU92ZXJsYXkodGhpcy5jaXJjbGUpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE9wdGlvbnMob3B0aW9uczogQ2lyY2xlT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgaWYgKGlzTnVsbChvcHRpb25zKSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5lbmFibGVFZGl0aW5nKSkge1xyXG4gICAgICBpZiAob3B0aW9ucy5lbmFibGVFZGl0aW5nKSB7XHJcbiAgICAgICAgdGhpcy5jaXJjbGUuZW5hYmxlRWRpdGluZygpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jaXJjbGUuZGlzYWJsZUVkaXRpbmcoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuZW5hYmxlTWFzc0NsZWFyKSkge1xyXG4gICAgICBpZiAob3B0aW9ucy5lbmFibGVFZGl0aW5nKSB7XHJcbiAgICAgICAgdGhpcy5jaXJjbGUuZW5hYmxlTWFzc0NsZWFyKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNpcmNsZS5kaXNhYmxlTWFzc0NsZWFyKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLnN0cm9rZUNvbG9yKSkge1xyXG4gICAgICB0aGlzLmNpcmNsZS5zZXRTdHJva2VDb2xvcihvcHRpb25zLnN0cm9rZUNvbG9yKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLmZpbGxDb2xvcikpIHtcclxuICAgICAgdGhpcy5jaXJjbGUuc2V0RmlsbENvbG9yKG9wdGlvbnMuZmlsbENvbG9yKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLnN0cm9rZU9wYWNpdHkpKSB7XHJcbiAgICAgIHRoaXMuY2lyY2xlLnNldFN0cm9rZU9wYWNpdHkob3B0aW9ucy5zdHJva2VPcGFjaXR5KVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLmZpbGxPcGFjaXR5KSkge1xyXG4gICAgICB0aGlzLmNpcmNsZS5zZXRGaWxsT3BhY2l0eShvcHRpb25zLmZpbGxPcGFjaXR5KVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLnN0cm9rZVN0eWxlKSkge1xyXG4gICAgICB0aGlzLmNpcmNsZS5zZXRTdHJva2VTdHlsZShvcHRpb25zLnN0cm9rZVN0eWxlKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLnN0cm9rZVdlaWdodCkpIHtcclxuICAgICAgdGhpcy5jaXJjbGUuc2V0U3Ryb2tlV2VpZ2h0KG9wdGlvbnMuc3Ryb2tlV2VpZ2h0KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=