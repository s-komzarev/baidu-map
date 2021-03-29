import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { isNull } from '../helpers/object';
import { toIcon, toMarkerOptions, toPoint, toSize } from '../helpers/transformer';
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
        this.service
            .addOverlay(function () {
            return (_this.marker = new window.BMap.Marker(toPoint(_this.point), toMarkerOptions(_this.options)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21hcmtlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQzFDLE9BQU8sRUFDTCxNQUFNLEVBQ04sZUFBZSxFQUNmLE9BQU8sRUFDUCxNQUFNLEVBQ1AsTUFBTSx3QkFBd0IsQ0FBQTtBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBUXBEO0lBU0UseUJBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFMckIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFDM0IsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFJSixDQUFDO0lBRXBDLGtDQUFRLEdBQWY7UUFBQSxpQkFvQkM7UUFuQkMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQTtRQUV2RCxJQUFJLENBQUMsT0FBTzthQUNULFVBQVUsQ0FBQztZQUNWLE9BQU8sQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQzFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQ25CLGVBQWUsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQzlCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFDLEVBQU87Z0JBQUwsWUFBRztZQUNWLEtBQUksQ0FBQyxNQUFN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U0FDRjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNwQztJQUNILENBQUM7SUFFTyxxQ0FBVyxHQUFuQixVQUFvQixNQUFlLEVBQUUsR0FBaUI7UUFBdEQsaUJBUUM7UUFQQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBTTtZQUN0QyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxHQUFBO2dCQUNELEdBQUcsS0FBQTtnQkFDSCxNQUFNLFFBQUE7YUFDUCxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7O2dCQWhGNEIsVUFBVTs7SUFSOUI7UUFBUixLQUFLLEVBQUU7a0RBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFO29EQUErQjtJQUU3QjtRQUFULE1BQU0sRUFBRTttREFBb0M7SUFDbkM7UUFBVCxNQUFNLEVBQUU7b0RBQXFDO0lBTG5DLGVBQWU7UUFIM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQztPQUNXLGVBQWUsQ0EwRjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTFGRCxJQTBGQztTQTFGWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSAnLi4vaGVscGVycy9vYmplY3QnXHJcbmltcG9ydCB7XHJcbiAgdG9JY29uLFxyXG4gIHRvTWFya2VyT3B0aW9ucyxcclxuICB0b1BvaW50LFxyXG4gIHRvU2l6ZVxyXG59IGZyb20gJy4uL2hlbHBlcnMvdHJhbnNmb3JtZXInXHJcbmltcG9ydCB7IG51bGxDaGVjayB9IGZyb20gJy4uL2hlbHBlcnMvdmFsaWRhdGUnXHJcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvbWFwU2VydmljZSdcclxuaW1wb3J0IHsgQk1hcEluc3RhbmNlIH0gZnJvbSAnLi4vdHlwZXMvTWFwJ1xyXG5pbXBvcnQgeyBCTWFya2VyLCBNYXJrZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMvTWFya2VyJ1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL3R5cGVzL1BvaW50J1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdtYXJrZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXJrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBwcml2YXRlIHBvaW50OiBQb2ludFxyXG4gIEBJbnB1dCgpIHByaXZhdGUgb3B0aW9uczogTWFya2VyT3B0aW9uc1xyXG5cclxuICBAT3V0cHV0KCkgcHJpdmF0ZSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuICBAT3V0cHV0KCkgcHJpdmF0ZSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gIHByaXZhdGUgbWFya2VyOiBCTWFya2VyXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTWFwU2VydmljZSkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgbnVsbENoZWNrKHRoaXMucG9pbnQsICdwb2ludCBpcyByZXF1aXJlZCBmb3IgPG1hcmtlcj4nKVxyXG5cclxuICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAuYWRkT3ZlcmxheSgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLm1hcmtlciA9IG5ldyB3aW5kb3cuQk1hcC5NYXJrZXIoXHJcbiAgICAgICAgICB0b1BvaW50KHRoaXMucG9pbnQpLFxyXG4gICAgICAgICAgdG9NYXJrZXJPcHRpb25zKHRoaXMub3B0aW9ucylcclxuICAgICAgICApKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoeyBtYXAgfSkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGVkLmVtaXQodGhpcy5tYXJrZXIpXHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcih0aGlzLm1hcmtlciwgbWFwKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gd29ya2Fyb3VuZDogaXQncyB3ZWlyZCB0aGF0IHBvc3Rpb24gaXMgc2V0IHdoaWxlIGNvbnN0cnVjdGluZyBwaGFzZSB3aWxsIG1ha2UgY2xpY2sgZXZlbnQgbm90IHdvcmtpbmdcclxuICAgICAgICB0aGlzLm1hcmtlci5zZXRQb3NpdGlvbihcclxuICAgICAgICAgIG5ldyB3aW5kb3cuQk1hcC5Qb2ludCh0aGlzLnBvaW50LmxuZywgdGhpcy5wb2ludC5sYXQpXHJcbiAgICAgICAgKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcclxuICAgIGlmIChjaGFuZ2VzLnBvaW50ICYmICFjaGFuZ2VzLnBvaW50LmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLm1hcmtlci5zZXRQb3NpdGlvbih0b1BvaW50KGNoYW5nZXMucG9pbnQuY3VycmVudFZhbHVlKSlcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgJiYgIWNoYW5nZXMub3B0aW9ucy5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5zZXRPcHRpb25zKGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UucmVtb3ZlT3ZlcmxheSh0aGlzLm1hcmtlcilcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0T3B0aW9ucyhvcHRpb25zOiBNYXJrZXJPcHRpb25zKTogdm9pZCB7XHJcbiAgICBpZiAoaXNOdWxsKG9wdGlvbnMpKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKCFpc051bGwob3B0aW9ucy5vZmZzZXQpKSB7XHJcbiAgICAgIHRoaXMubWFya2VyLnNldE9mZnNldCh0b1NpemUob3B0aW9ucy5vZmZzZXQpKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc051bGwob3B0aW9ucy5pY29uKSkge1xyXG4gICAgICB0aGlzLm1hcmtlci5zZXRJY29uKFxyXG4gICAgICAgIHRvSWNvbihvcHRpb25zLmljb24uaW1hZ2VVcmwsIG9wdGlvbnMuaWNvbi5zaXplLCBvcHRpb25zLmljb24pXHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIGlmICghaXNOdWxsKG9wdGlvbnMuZW5hYmxlTWFzc0NsZWFyKSkge1xyXG4gICAgICB0aGlzLm1hcmtlcltcclxuICAgICAgICAob3B0aW9ucy5lbmFibGVNYXNzQ2xlYXIgPyAnZW5hYmxlJyA6ICdkaXNhYmxlJykgKyAnTWFzc0NsZWFyJ1xyXG4gICAgICBdKClcclxuICAgIH1cclxuICAgIGlmICghaXNOdWxsKG9wdGlvbnMuZW5hYmxlRHJhZ2dpbmcpKSB7XHJcbiAgICAgIHRoaXMubWFya2VyW1xyXG4gICAgICAgIChvcHRpb25zLmVuYWJsZURyYWdnaW5nID8gJ2VuYWJsZScgOiAnZGlzYWJsZScpICsgJ0RyYWdnaW5nJ1xyXG4gICAgICBdKClcclxuICAgIH1cclxuICAgIGlmICghaXNOdWxsKG9wdGlvbnMucm90YXRpb24pKSB7XHJcbiAgICAgIHRoaXMubWFya2VyLnNldFJvdGF0aW9uKG9wdGlvbnMucm90YXRpb24pXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzTnVsbChvcHRpb25zLnNoYWRvdykpIHtcclxuICAgICAgdGhpcy5tYXJrZXIuc2V0U2hhZG93KFxyXG4gICAgICAgIHRvSWNvbihvcHRpb25zLnNoYWRvdy5pbWFnZVVybCwgb3B0aW9ucy5zaGFkb3cuc2l6ZSwgb3B0aW9ucy5zaGFkb3cpXHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIGlmICghaXNOdWxsKG9wdGlvbnMudGl0bGUpKSB7XHJcbiAgICAgIHRoaXMubWFya2VyLnNldFRpdGxlKG9wdGlvbnMudGl0bGUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZExpc3RlbmVyKG1hcmtlcjogQk1hcmtlciwgbWFwOiBCTWFwSW5zdGFuY2UpIHtcclxuICAgIG1hcmtlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5jbGlja2VkLmVtaXQoe1xyXG4gICAgICAgIGUsXHJcbiAgICAgICAgbWFwLFxyXG4gICAgICAgIG1hcmtlclxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19