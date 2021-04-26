import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { isNull } from '../helpers/object';
import { createMarker, toIcon, toPoint, toSize } from '../helpers/transformer';
import { nullCheck } from '../helpers/validate';
import { MapService } from '../providers/mapService';
let MarkerComponent = class MarkerComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
        this.clicked = new EventEmitter();
    }
    ngOnInit() {
        nullCheck(this.point, 'point is required for <marker>');
        this.marker = createMarker(this.point, this.options);
        this.service
            .addOverlay(() => {
            return this.marker;
        })
            .then(({ map }) => {
            this.loaded.emit(this.marker);
            this.addListener(this.marker, map);
        })
            .then(() => {
            // workaround: it's weird that postion is set while constructing phase will make click event not working
            this.marker.setPosition(new window.BMap.Point(this.point.lng, this.point.lat));
        });
    }
    ngOnChanges(changes) {
        if (changes.point && !changes.point.isFirstChange()) {
            this.marker.setPosition(toPoint(changes.point.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    }
    ngOnDestroy() {
        this.service.removeOverlay(this.marker);
    }
    setOptions(options) {
        if (isNull(options)) {
            return;
        }
        if (!isNull(options.offset)) {
            this.marker.setOffset(toSize(options.offset));
        }
        if (!isNull(options.icon)) {
            this.marker.setIcon(toIcon(options.icon.imageUrl, options.icon.size, options.icon));
        }
        if (!isNull(options.enableMassClear)) {
            this.marker[(options.enableMassClear ? 'enable' : 'disable') + 'MassClear']();
        }
        if (!isNull(options.enableDragging)) {
            this.marker[(options.enableDragging ? 'enable' : 'disable') + 'Dragging']();
        }
        if (!isNull(options.rotation)) {
            this.marker.setRotation(options.rotation);
        }
        if (!isNull(options.shadow)) {
            this.marker.setShadow(toIcon(options.shadow.imageUrl, options.shadow.size, options.shadow));
        }
        if (!isNull(options.title)) {
            this.marker.setTitle(options.title);
        }
    }
    addListener(marker, map) {
        marker.addEventListener('click', (e) => {
            this.clicked.emit({
                e,
                map,
                marker
            });
        });
    }
};
MarkerComponent.ctorParameters = () => [
    { type: MapService }
];
tslib_1.__decorate([
    Input()
], MarkerComponent.prototype, "point", void 0);
tslib_1.__decorate([
    Input()
], MarkerComponent.prototype, "options", void 0);
tslib_1.__decorate([
    Output()
], MarkerComponent.prototype, "loaded", void 0);
tslib_1.__decorate([
    Output()
], MarkerComponent.prototype, "clicked", void 0);
MarkerComponent = tslib_1.__decorate([
    Directive({
        selector: 'marker'
    })
], MarkerComponent);
export { MarkerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21hcmtlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQzFDLE9BQU8sRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUVOLE9BQU8sRUFDUCxNQUFNLEVBQ1AsTUFBTSx3QkFBd0IsQ0FBQTtBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBUXBELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFTMUIsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUxyQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUMzQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUlILENBQUM7SUFFckMsUUFBUTtRQUNiLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLGdDQUFnQyxDQUFDLENBQUE7UUFFdkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLE9BQU87YUFDVCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FB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QUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDcEM7SUFDSCxDQUFDO0lBRU8sV0FBVyxDQUFDLE1BQWUsRUFBRSxHQUFpQjtRQUNwRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsR0FBRztnQkFDSCxNQUFNO2FBQ1AsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUFoRjhCLFVBQVU7O0FBUjlCO0lBQVIsS0FBSyxFQUFFOzhDQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTtnREFBK0I7QUFFN0I7SUFBVCxNQUFNLEVBQUU7K0NBQW9DO0FBQ25DO0lBQVQsTUFBTSxFQUFFO2dEQUFxQztBQUxuQyxlQUFlO0lBSDNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO0tBQ25CLENBQUM7R0FDVyxlQUFlLENBeUYzQjtTQXpGWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSAnLi4vaGVscGVycy9vYmplY3QnXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTWFya2VyLFxyXG4gIHRvSWNvbixcclxuICB0b01hcmtlck9wdGlvbnMsXHJcbiAgdG9Qb2ludCxcclxuICB0b1NpemVcclxufSBmcm9tICcuLi9oZWxwZXJzL3RyYW5zZm9ybWVyJ1xyXG5pbXBvcnQgeyBudWxsQ2hlY2sgfSBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRlJ1xyXG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL21hcFNlcnZpY2UnXHJcbmltcG9ydCB7IEJNYXBJbnN0YW5jZSB9IGZyb20gJy4uL3R5cGVzL01hcCdcclxuaW1wb3J0IHsgQk1hcmtlciwgTWFya2VyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzL01hcmtlcidcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi90eXBlcy9Qb2ludCdcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbWFya2VyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFya2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgcHJpdmF0ZSBwb2ludDogUG9pbnRcclxuICBASW5wdXQoKSBwcml2YXRlIG9wdGlvbnM6IE1hcmtlck9wdGlvbnNcclxuXHJcbiAgQE91dHB1dCgpIHByaXZhdGUgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcbiAgQE91dHB1dCgpIHByaXZhdGUgY2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICBwcml2YXRlIG1hcmtlcjogQk1hcmtlclxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IE1hcFNlcnZpY2UpIHsgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICBudWxsQ2hlY2sodGhpcy5wb2ludCwgJ3BvaW50IGlzIHJlcXVpcmVkIGZvciA8bWFya2VyPicpXHJcblxyXG4gICAgdGhpcy5tYXJrZXIgPSBjcmVhdGVNYXJrZXIodGhpcy5wb2ludCwgdGhpcy5vcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgLmFkZE92ZXJsYXkoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtlcjtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHsgbWFwIH0pID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KHRoaXMubWFya2VyKVxyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXIodGhpcy5tYXJrZXIsIG1hcClcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIHdvcmthcm91bmQ6IGl0J3Mgd2VpcmQgdGhhdCBwb3N0aW9uIGlzIHNldCB3aGlsZSBjb25zdHJ1Y3RpbmcgcGhhc2Ugd2lsbCBtYWtlIGNsaWNrIGV2ZW50IG5vdCB3b3JraW5nXHJcbiAgICAgICAgdGhpcy5tYXJrZXIuc2V0UG9zaXRpb24oXHJcbiAgICAgICAgICBuZXcgd2luZG93LkJNYXAuUG9pbnQodGhpcy5wb2ludC5sbmcsIHRoaXMucG9pbnQubGF0KVxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XHJcbiAgICBpZiAoY2hhbmdlcy5wb2ludCAmJiAhY2hhbmdlcy5wb2ludC5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5tYXJrZXIuc2V0UG9zaXRpb24odG9Qb2ludChjaGFuZ2VzLnBvaW50LmN1cnJlbnRWYWx1ZSkpXHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zICYmICFjaGFuZ2VzLm9wdGlvbnMuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLnJlbW92ZU92ZXJsYXkodGhpcy5tYXJrZXIpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE9wdGlvbnMob3B0aW9uczogTWFya2VyT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgaWYgKGlzTnVsbChvcHRpb25zKSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmICghaXNOdWxsKG9wdGlvbnMub2Zmc2V0KSkge1xyXG4gICAgICB0aGlzLm1hcmtlci5zZXRPZmZzZXQodG9TaXplKG9wdGlvbnMub2Zmc2V0KSlcclxuICAgIH1cclxuICAgIGlmICghaXNOdWxsKG9wdGlvbnMuaWNvbikpIHtcclxuICAgICAgdGhpcy5tYXJrZXIuc2V0SWNvbihcclxuICAgICAgICB0b0ljb24ob3B0aW9ucy5pY29uLmltYWdlVXJsLCBvcHRpb25zLmljb24uc2l6ZSwgb3B0aW9ucy5pY29uKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzTnVsbChvcHRpb25zLmVuYWJsZU1hc3NDbGVhcikpIHtcclxuICAgICAgdGhpcy5tYXJrZXJbXHJcbiAgICAgICAgKG9wdGlvbnMuZW5hYmxlTWFzc0NsZWFyID8gJ2VuYWJsZScgOiAnZGlzYWJsZScpICsgJ01hc3NDbGVhcidcclxuICAgICAgXSgpXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzTnVsbChvcHRpb25zLmVuYWJsZURyYWdnaW5nKSkge1xyXG4gICAgICB0aGlzLm1hcmtlcltcclxuICAgICAgICAob3B0aW9ucy5lbmFibGVEcmFnZ2luZyA/ICdlbmFibGUnIDogJ2Rpc2FibGUnKSArICdEcmFnZ2luZydcclxuICAgICAgXSgpXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzTnVsbChvcHRpb25zLnJvdGF0aW9uKSkge1xyXG4gICAgICB0aGlzLm1hcmtlci5zZXRSb3RhdGlvbihvcHRpb25zLnJvdGF0aW9uKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc051bGwob3B0aW9ucy5zaGFkb3cpKSB7XHJcbiAgICAgIHRoaXMubWFya2VyLnNldFNoYWRvdyhcclxuICAgICAgICB0b0ljb24ob3B0aW9ucy5zaGFkb3cuaW1hZ2VVcmwsIG9wdGlvbnMuc2hhZG93LnNpemUsIG9wdGlvbnMuc2hhZG93KVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzTnVsbChvcHRpb25zLnRpdGxlKSkge1xyXG4gICAgICB0aGlzLm1hcmtlci5zZXRUaXRsZShvcHRpb25zLnRpdGxlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRMaXN0ZW5lcihtYXJrZXI6IEJNYXJrZXIsIG1hcDogQk1hcEluc3RhbmNlKSB7XHJcbiAgICBtYXJrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuY2xpY2tlZC5lbWl0KHtcclxuICAgICAgICBlLFxyXG4gICAgICAgIG1hcCxcclxuICAgICAgICBtYXJrZXJcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==