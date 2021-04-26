import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { isNull } from '../helpers/object';
import { createMarker, toIcon, toPoint, toSize } from '../helpers/transformer';
import { nullCheck } from '../helpers/validate';
import { MapService } from '../providers/mapService';
var MarkerComponent = /** @class */ (function () {
    function MarkerComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
        this.clicked = new EventEmitter();
    }
    MarkerComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.point, 'point is required for <marker>');
        this.marker = createMarker(this.point, this.options);
        this.service
            .addOverlay(function () {
            return _this.marker;
        })
            .then(function (_a) {
            var map = _a.map;
            _this.loaded.emit(_this.marker);
            _this.addListener(_this.marker, map);
        })
            .then(function () {
            // workaround: it's weird that postion is set while constructing phase will make click event not working
            _this.marker.setPosition(new window.BMap.Point(_this.point.lng, _this.point.lat));
        });
    };
    MarkerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.point && !changes.point.isFirstChange()) {
            this.marker.setPosition(toPoint(changes.point.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    };
    MarkerComponent.prototype.ngOnDestroy = function () {
        this.service.removeOverlay(this.marker);
    };
    MarkerComponent.prototype.setOptions = function (options) {
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
    };
    MarkerComponent.prototype.addListener = function (marker, map) {
        var _this = this;
        marker.addEventListener('click', function (e) {
            _this.clicked.emit({
                e: e,
                map: map,
                marker: marker
            });
        });
    };
    MarkerComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
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
    return MarkerComponent;
}());
export { MarkerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21hcmtlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQzFDLE9BQU8sRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUVOLE9BQU8sRUFDUCxNQUFNLEVBQ1AsTUFBTSx3QkFBd0IsQ0FBQTtBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBUXBEO0lBU0UseUJBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFMckIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFDM0IsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFJSCxDQUFDO0lBRXJDLGtDQUFRLEdBQWY7UUFBQSxpQkFtQkM7UUFsQkMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQTtRQUV2RCxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsT0FBTzthQUNULFVBQVUsQ0FBQztZQUNWLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxFQUFPO2dCQUFMLFlBQUc7WUFDVixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7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QUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDcEM7SUFDSCxDQUFDO0lBRU8scUNBQVcsR0FBbkIsVUFBb0IsTUFBZSxFQUFFLEdBQWlCO1FBQXRELGlCQVFDO1FBUEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQU07WUFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUMsR0FBQTtnQkFDRCxHQUFHLEtBQUE7Z0JBQ0gsTUFBTSxRQUFBO2FBQ1AsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDOztnQkEvRTRCLFVBQVU7O0lBUjlCO1FBQVIsS0FBSyxFQUFFO2tEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTtvREFBK0I7SUFFN0I7UUFBVCxNQUFNLEVBQUU7bURBQW9DO0lBQ25DO1FBQVQsTUFBTSxFQUFFO29EQUFxQztJQUxuQyxlQUFlO1FBSDNCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUM7T0FDVyxlQUFlLENBeUYzQjtJQUFELHNCQUFDO0NBQUEsQUF6RkQsSUF5RkM7U0F6RlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbmltcG9ydCB7IGlzTnVsbCB9IGZyb20gJy4uL2hlbHBlcnMvb2JqZWN0J1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZU1hcmtlcixcclxuICB0b0ljb24sXHJcbiAgdG9NYXJrZXJPcHRpb25zLFxyXG4gIHRvUG9pbnQsXHJcbiAgdG9TaXplXHJcbn0gZnJvbSAnLi4vaGVscGVycy90cmFuc2Zvcm1lcidcclxuaW1wb3J0IHsgbnVsbENoZWNrIH0gZnJvbSAnLi4vaGVscGVycy92YWxpZGF0ZSdcclxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9tYXBTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBCTWFwSW5zdGFuY2UgfSBmcm9tICcuLi90eXBlcy9NYXAnXHJcbmltcG9ydCB7IEJNYXJrZXIsIE1hcmtlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9NYXJrZXInXHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vdHlwZXMvUG9pbnQnXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ21hcmtlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcmtlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHByaXZhdGUgcG9pbnQ6IFBvaW50XHJcbiAgQElucHV0KCkgcHJpdmF0ZSBvcHRpb25zOiBNYXJrZXJPcHRpb25zXHJcblxyXG4gIEBPdXRwdXQoKSBwcml2YXRlIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG4gIEBPdXRwdXQoKSBwcml2YXRlIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgcHJpdmF0ZSBtYXJrZXI6IEJNYXJrZXJcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBNYXBTZXJ2aWNlKSB7IH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgbnVsbENoZWNrKHRoaXMucG9pbnQsICdwb2ludCBpcyByZXF1aXJlZCBmb3IgPG1hcmtlcj4nKVxyXG5cclxuICAgIHRoaXMubWFya2VyID0gY3JlYXRlTWFya2VyKHRoaXMucG9pbnQsIHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgIC5hZGRPdmVybGF5KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXJrZXI7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh7IG1hcCB9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkZWQuZW1pdCh0aGlzLm1hcmtlcilcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKHRoaXMubWFya2VyLCBtYXApXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyB3b3JrYXJvdW5kOiBpdCdzIHdlaXJkIHRoYXQgcG9zdGlvbiBpcyBzZXQgd2hpbGUgY29uc3RydWN0aW5nIHBoYXNlIHdpbGwgbWFrZSBjbGljayBldmVudCBub3Qgd29ya2luZ1xyXG4gICAgICAgIHRoaXMubWFya2VyLnNldFBvc2l0aW9uKFxyXG4gICAgICAgICAgbmV3IHdpbmRvdy5CTWFwLlBvaW50KHRoaXMucG9pbnQubG5nLCB0aGlzLnBvaW50LmxhdClcclxuICAgICAgICApXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xyXG4gICAgaWYgKGNoYW5nZXMucG9pbnQgJiYgIWNoYW5nZXMucG9pbnQuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMubWFya2VyLnNldFBvc2l0aW9uKHRvUG9pbnQoY2hhbmdlcy5wb2ludC5jdXJyZW50VmFsdWUpKVxyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyAmJiAhY2hhbmdlcy5vcHRpb25zLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLnNldE9wdGlvbnMoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc2VydmljZS5yZW1vdmVPdmVybGF5KHRoaXMubWFya2VyKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRPcHRpb25zKG9wdGlvbnM6IE1hcmtlck9wdGlvbnMpOiB2b2lkIHtcclxuICAgIGlmIChpc051bGwob3B0aW9ucykpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzTnVsbChvcHRpb25zLm9mZnNldCkpIHtcclxuICAgICAgdGhpcy5tYXJrZXIuc2V0T2Zmc2V0KHRvU2l6ZShvcHRpb25zLm9mZnNldCkpXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzTnVsbChvcHRpb25zLmljb24pKSB7XHJcbiAgICAgIHRoaXMubWFya2VyLnNldEljb24oXHJcbiAgICAgICAgdG9JY29uKG9wdGlvbnMuaWNvbi5pbWFnZVVybCwgb3B0aW9ucy5pY29uLnNpemUsIG9wdGlvbnMuaWNvbilcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc051bGwob3B0aW9ucy5lbmFibGVNYXNzQ2xlYXIpKSB7XHJcbiAgICAgIHRoaXMubWFya2VyW1xyXG4gICAgICAgIChvcHRpb25zLmVuYWJsZU1hc3NDbGVhciA/ICdlbmFibGUnIDogJ2Rpc2FibGUnKSArICdNYXNzQ2xlYXInXHJcbiAgICAgIF0oKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc051bGwob3B0aW9ucy5lbmFibGVEcmFnZ2luZykpIHtcclxuICAgICAgdGhpcy5tYXJrZXJbXHJcbiAgICAgICAgKG9wdGlvbnMuZW5hYmxlRHJhZ2dpbmcgPyAnZW5hYmxlJyA6ICdkaXNhYmxlJykgKyAnRHJhZ2dpbmcnXHJcbiAgICAgIF0oKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc051bGwob3B0aW9ucy5yb3RhdGlvbikpIHtcclxuICAgICAgdGhpcy5tYXJrZXIuc2V0Um90YXRpb24ob3B0aW9ucy5yb3RhdGlvbilcclxuICAgIH1cclxuICAgIGlmICghaXNOdWxsKG9wdGlvbnMuc2hhZG93KSkge1xyXG4gICAgICB0aGlzLm1hcmtlci5zZXRTaGFkb3coXHJcbiAgICAgICAgdG9JY29uKG9wdGlvbnMuc2hhZG93LmltYWdlVXJsLCBvcHRpb25zLnNoYWRvdy5zaXplLCBvcHRpb25zLnNoYWRvdylcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc051bGwob3B0aW9ucy50aXRsZSkpIHtcclxuICAgICAgdGhpcy5tYXJrZXIuc2V0VGl0bGUob3B0aW9ucy50aXRsZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkTGlzdGVuZXIobWFya2VyOiBCTWFya2VyLCBtYXA6IEJNYXBJbnN0YW5jZSkge1xyXG4gICAgbWFya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmNsaWNrZWQuZW1pdCh7XHJcbiAgICAgICAgZSxcclxuICAgICAgICBtYXAsXHJcbiAgICAgICAgbWFya2VyXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=