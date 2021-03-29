import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { isNull, isUndefined } from '../helpers/object';
import { toPoints } from '../helpers/transformer';
import { nullCheck } from '../helpers/validate';
import { MapService } from '../providers/mapService';
let PolylineComponent = class PolylineComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
        this.clicked = new EventEmitter();
    }
    ngOnInit() {
        nullCheck(this.points, 'points is required for <polyline>');
        this.service
            .addOverlay(() => {
            return (this.polyline = new window.BMap.Polyline(toPoints(this.points), this.options));
        })
            .then(({ map }) => {
            this.loaded.emit(this.polyline);
            this.addListener(this.polyline, map);
        });
    }
    ngOnChanges(changes) {
        if (changes.points && !changes.points.isFirstChange()) {
            this.polyline.setPath(toPoints(changes.points.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    }
    ngOnDestroy() {
        this.service.removeOverlay(this.polyline);
    }
    setOptions(options) {
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
    }
    addListener(polyline, map) {
        polyline.addEventListener('click', (e) => {
            console.log('sfdsfdsfds');
            this.clicked.emit({
                e,
                map,
                polyline
            });
        });
    }
};
PolylineComponent.ctorParameters = () => [
    { type: MapService }
];
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
export { PolylineComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItYmFpZHUtbWFwLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcG9seWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFRcEQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFTNUIsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUxyQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUMzQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUlKLENBQUM7SUFFcEMsUUFBUTtRQUNiLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG1DQUFtQyxDQUFDLENBQUE7UUFFM0QsSUFBSSxDQUFDLE9BQU87YUFDVCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FDOUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FDYixDQUFDLENBQUE7UUFDSixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0s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QUFFL0I7SUFBVCxNQUFNLEVBQUU7aURBQW9DO0FBQ25DO0lBQVQsTUFBTSxFQUFFO2tEQUFxQztBQUxuQyxpQkFBaUI7SUFIN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7S0FDckIsQ0FBQztHQUNXLGlCQUFpQixDQWtGN0I7U0FsRlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuaW1wb3J0IHsgaXNOdWxsLCBpc1VuZGVmaW5lZCB9IGZyb20gJy4uL2hlbHBlcnMvb2JqZWN0J1xyXG5pbXBvcnQgeyB0b1BvaW50cyB9IGZyb20gJy4uL2hlbHBlcnMvdHJhbnNmb3JtZXInXHJcbmltcG9ydCB7IG51bGxDaGVjayB9IGZyb20gJy4uL2hlbHBlcnMvdmFsaWRhdGUnXHJcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvbWFwU2VydmljZSdcclxuaW1wb3J0IHsgQk1hcEluc3RhbmNlIH0gZnJvbSAnLi4vdHlwZXMvTWFwJ1xyXG5pbXBvcnQgeyBCUG9seWxpbmUsIFBvbHlsaW5lT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzL1BvbHlsaW5lJ1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL3R5cGVzL1BvaW50J1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdwb2x5bGluZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvbHlsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgcHJpdmF0ZSBwb2ludHM6IEFycmF5PFBvaW50PlxyXG4gIEBJbnB1dCgpIHByaXZhdGUgb3B0aW9uczogUG9seWxpbmVPcHRpb25zXHJcblxyXG4gIEBPdXRwdXQoKSBwcml2YXRlIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG4gIEBPdXRwdXQoKSBwcml2YXRlIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgcHJpdmF0ZSBwb2x5bGluZTogQlBvbHlsaW5lXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTWFwU2VydmljZSkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgbnVsbENoZWNrKHRoaXMucG9pbnRzLCAncG9pbnRzIGlzIHJlcXVpcmVkIGZvciA8cG9seWxpbmU+JylcclxuXHJcbiAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgLmFkZE92ZXJsYXkoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wb2x5bGluZSA9IG5ldyB3aW5kb3cuQk1hcC5Qb2x5bGluZShcclxuICAgICAgICAgIHRvUG9pbnRzKHRoaXMucG9pbnRzKSxcclxuICAgICAgICAgIHRoaXMub3B0aW9uc1xyXG4gICAgICAgICkpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh7IG1hcCB9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkZWQuZW1pdCh0aGlzLnBvbHlsaW5lKVxyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXIodGhpcy5wb2x5bGluZSwgbWFwKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcclxuICAgIGlmIChjaGFuZ2VzLnBvaW50cyAmJiAhY2hhbmdlcy5wb2ludHMuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMucG9seWxpbmUuc2V0UGF0aCh0b1BvaW50cyhjaGFuZ2VzLnBvaW50cy5jdXJyZW50VmFsdWUpKVxyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyAmJiAhY2hhbmdlcy5vcHRpb25zLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLnNldE9wdGlvbnMoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc2VydmljZS5yZW1vdmVPdmVybGF5KHRoaXMucG9seWxpbmUpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE9wdGlvbnMob3B0aW9uczogUG9seWxpbmVPcHRpb25zKTogdm9pZCB7XHJcbiAgICBpZiAoaXNOdWxsKG9wdGlvbnMpKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLmVuYWJsZUVkaXRpbmcpKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLmVuYWJsZUVkaXRpbmcpIHtcclxuICAgICAgICB0aGlzLnBvbHlsaW5lLmVuYWJsZUVkaXRpbmcoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucG9seWxpbmUuZGlzYWJsZUVkaXRpbmcoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuZW5hYmxlTWFzc0NsZWFyKSkge1xyXG4gICAgICBpZiAob3B0aW9ucy5lbmFibGVFZGl0aW5nKSB7XHJcbiAgICAgICAgdGhpcy5wb2x5bGluZS5lbmFibGVNYXNzQ2xlYXIoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucG9seWxpbmUuZGlzYWJsZU1hc3NDbGVhcigpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5zdHJva2VDb2xvcikpIHtcclxuICAgICAgdGhpcy5wb2x5bGluZS5zZXRTdHJva2VDb2xvcihvcHRpb25zLnN0cm9rZUNvbG9yKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLnN0cm9rZU9wYWNpdHkpKSB7XHJcbiAgICAgIHRoaXMucG9seWxpbmUuc2V0U3Ryb2tlT3BhY2l0eShvcHRpb25zLnN0cm9rZU9wYWNpdHkpXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuc3Ryb2tlU3R5bGUpKSB7XHJcbiAgICAgIHRoaXMucG9seWxpbmUuc2V0U3Ryb2tlU3R5bGUob3B0aW9ucy5zdHJva2VTdHlsZSlcclxuICAgIH1cclxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5zdHJva2VXZWlnaHQpKSB7XHJcbiAgICAgIHRoaXMucG9seWxpbmUuc2V0U3Ryb2tlV2VpZ2h0KG9wdGlvbnMuc3Ryb2tlV2VpZ2h0KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRMaXN0ZW5lcihwb2x5bGluZTogQlBvbHlsaW5lLCBtYXA6IEJNYXBJbnN0YW5jZSkge1xyXG4gICAgcG9seWxpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzZmRzZmRzZmRzJylcclxuICAgICAgdGhpcy5jbGlja2VkLmVtaXQoe1xyXG4gICAgICAgIGUsXHJcbiAgICAgICAgbWFwLFxyXG4gICAgICAgIHBvbHlsaW5lXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=