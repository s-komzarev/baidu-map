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
        this.marker = new window.BMap.Marker(toPoint(this.point), toMarkerOptions(this.options));
        if (this.options.label) {
            this.marker.setLabel(new window.BMap.Label(this.options.label));
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21hcmtlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBQzFDLE9BQU8sRUFDTCxNQUFNLEVBQ04sZUFBZSxFQUNmLE9BQU8sRUFDUCxNQUFNLEVBQ1AsTUFBTSx3QkFBd0IsQ0FBQTtBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBUXBEO0lBU0UseUJBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFMckIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFDM0IsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFJSCxDQUFDO0lBRXJDLGtDQUFRLEdBQWY7UUFBQSxpQkF3QkM7UUF2QkMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQTtRQUV2RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQ25CLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQzlCLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFD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TUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FDckUsQ0FBQTtTQUNGO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3BDO0lBQ0gsQ0FBQztJQUVPLHFDQUFXLEdBQW5CLFVBQW9CLE1BQWUsRUFBRSxHQUFpQjtRQUF0RCxpQkFRQztRQVBDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFNO1lBQ3RDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDLEdBQUE7Z0JBQ0QsR0FBRyxLQUFBO2dCQUNILE1BQU0sUUFBQTthQUNQLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7Z0JBcEY0QixVQUFVOztJQVI5QjtRQUFSLEtBQUssRUFBRTtrREFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7b0RBQStCO0lBRTdCO1FBQVQsTUFBTSxFQUFFO21EQUFvQztJQUNuQztRQUFULE1BQU0sRUFBRTtvREFBcUM7SUFMbkMsZUFBZTtRQUgzQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDO09BQ1csZUFBZSxDQThGM0I7SUFBRCxzQkFBQztDQUFBLEFBOUZELElBOEZDO1NBOUZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5pbXBvcnQgeyBpc051bGwgfSBmcm9tICcuLi9oZWxwZXJzL29iamVjdCdcclxuaW1wb3J0IHtcclxuICB0b0ljb24sXHJcbiAgdG9NYXJrZXJPcHRpb25zLFxyXG4gIHRvUG9pbnQsXHJcbiAgdG9TaXplXHJcbn0gZnJvbSAnLi4vaGVscGVycy90cmFuc2Zvcm1lcidcclxuaW1wb3J0IHsgbnVsbENoZWNrIH0gZnJvbSAnLi4vaGVscGVycy92YWxpZGF0ZSdcclxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9tYXBTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBCTWFwSW5zdGFuY2UgfSBmcm9tICcuLi90eXBlcy9NYXAnXHJcbmltcG9ydCB7IEJNYXJrZXIsIE1hcmtlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9NYXJrZXInXHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vdHlwZXMvUG9pbnQnXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ21hcmtlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcmtlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHByaXZhdGUgcG9pbnQ6IFBvaW50XHJcbiAgQElucHV0KCkgcHJpdmF0ZSBvcHRpb25zOiBNYXJrZXJPcHRpb25zXHJcblxyXG4gIEBPdXRwdXQoKSBwcml2YXRlIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG4gIEBPdXRwdXQoKSBwcml2YXRlIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgcHJpdmF0ZSBtYXJrZXI6IEJNYXJrZXJcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBNYXBTZXJ2aWNlKSB7IH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgbnVsbENoZWNrKHRoaXMucG9pbnQsICdwb2ludCBpcyByZXF1aXJlZCBmb3IgPG1hcmtlcj4nKVxyXG5cclxuICAgIHRoaXMubWFya2VyID0gbmV3IHdpbmRvdy5CTWFwLk1hcmtlcihcclxuICAgICAgdG9Qb2ludCh0aGlzLnBvaW50KSxcclxuICAgICAgdG9NYXJrZXJPcHRpb25zKHRoaXMub3B0aW9ucylcclxuICAgICk7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmxhYmVsKSB7XHJcbiAgICAgIHRoaXMubWFya2VyLnNldExhYmVsKG5ldyB3aW5kb3cuQk1hcC5MYWJlbCh0aGlzLm9wdGlvbnMubGFiZWwpKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAuYWRkT3ZlcmxheSgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFya2VyO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoeyBtYXAgfSkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGVkLmVtaXQodGhpcy5tYXJrZXIpXHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcih0aGlzLm1hcmtlciwgbWFwKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gd29ya2Fyb3VuZDogaXQncyB3ZWlyZCB0aGF0IHBvc3Rpb24gaXMgc2V0IHdoaWxlIGNvbnN0cnVjdGluZyBwaGFzZSB3aWxsIG1ha2UgY2xpY2sgZXZlbnQgbm90IHdvcmtpbmdcclxuICAgICAgICB0aGlzLm1hcmtlci5zZXRQb3NpdGlvbihcclxuICAgICAgICAgIG5ldyB3aW5kb3cuQk1hcC5Qb2ludCh0aGlzLnBvaW50LmxuZywgdGhpcy5wb2ludC5sYXQpXHJcbiAgICAgICAgKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcclxuICAgIGlmIChjaGFuZ2VzLnBvaW50ICYmICFjaGFuZ2VzLnBvaW50LmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLm1hcmtlci5zZXRQb3NpdGlvbih0b1BvaW50KGNoYW5nZXMucG9pbnQuY3VycmVudFZhbHVlKSlcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgJiYgIWNoYW5nZXMub3B0aW9ucy5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5zZXRPcHRpb25zKGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UucmVtb3ZlT3ZlcmxheSh0aGlzLm1hcmtlcilcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0T3B0aW9ucyhvcHRpb25zOiBNYXJrZXJPcHRpb25zKTogdm9pZCB7XHJcbiAgICBpZiAoaXNOdWxsKG9wdGlvbnMpKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKCFpc051bGwob3B0aW9ucy5vZmZzZXQpKSB7XHJcbiAgICAgIHRoaXMubWFya2VyLnNldE9mZnNldCh0b1NpemUob3B0aW9ucy5vZmZzZXQpKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc051bGwob3B0aW9ucy5pY29uKSkge1xyXG4gICAgICB0aGlzLm1hcmtlci5zZXRJY29uKFxyXG4gICAgICAgIHRvSWNvbihvcHRpb25zLmljb24uaW1hZ2VVcmwsIG9wdGlvbnMuaWNvbi5zaXplLCBvcHRpb25zLmljb24pXHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIGlmICghaXNOdWxsKG9wdGlvbnMuZW5hYmxlTWFzc0NsZWFyKSkge1xyXG4gICAgICB0aGlzLm1hcmtlcltcclxuICAgICAgICAob3B0aW9ucy5lbmFibGVNYXNzQ2xlYXIgPyAnZW5hYmxlJyA6ICdkaXNhYmxlJykgKyAnTWFzc0NsZWFyJ1xyXG4gICAgICBdKClcclxuICAgIH1cclxuICAgIGlmICghaXNOdWxsKG9wdGlvbnMuZW5hYmxlRHJhZ2dpbmcpKSB7XHJcbiAgICAgIHRoaXMubWFya2VyW1xyXG4gICAgICAgIChvcHRpb25zLmVuYWJsZURyYWdnaW5nID8gJ2VuYWJsZScgOiAnZGlzYWJsZScpICsgJ0RyYWdnaW5nJ1xyXG4gICAgICBdKClcclxuICAgIH1cclxuICAgIGlmICghaXNOdWxsKG9wdGlvbnMucm90YXRpb24pKSB7XHJcbiAgICAgIHRoaXMubWFya2VyLnNldFJvdGF0aW9uKG9wdGlvbnMucm90YXRpb24pXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzTnVsbChvcHRpb25zLnNoYWRvdykpIHtcclxuICAgICAgdGhpcy5tYXJrZXIuc2V0U2hhZG93KFxyXG4gICAgICAgIHRvSWNvbihvcHRpb25zLnNoYWRvdy5pbWFnZVVybCwgb3B0aW9ucy5zaGFkb3cuc2l6ZSwgb3B0aW9ucy5zaGFkb3cpXHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIGlmICghaXNOdWxsKG9wdGlvbnMudGl0bGUpKSB7XHJcbiAgICAgIHRoaXMubWFya2VyLnNldFRpdGxlKG9wdGlvbnMudGl0bGUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZExpc3RlbmVyKG1hcmtlcjogQk1hcmtlciwgbWFwOiBCTWFwSW5zdGFuY2UpIHtcclxuICAgIG1hcmtlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5jbGlja2VkLmVtaXQoe1xyXG4gICAgICAgIGUsXHJcbiAgICAgICAgbWFwLFxyXG4gICAgICAgIG1hcmtlclxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19