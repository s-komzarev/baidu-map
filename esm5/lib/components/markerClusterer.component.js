import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { nullCheck } from '../helpers/validate';
import { isUndefined } from '../helpers/object';
import { toMarkerClustererOptions, toPoint, toMarkerOptions, toTextIconStyle } from '../helpers/transformer';
import { MapService } from '../providers/mapService';
import { ScriptLoader } from '../providers/scriptLoader';
var LIB_URLS = {
    key: 'markerClusterer',
    scripts: [
        'https://api.map.baidu.com/library/MarkerClusterer/1.2/src/MarkerClusterer_min.js',
        'https://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js'
    ]
};
var MarkerClustererComponent = /** @class */ (function () {
    function MarkerClustererComponent(service, scriptLoader) {
        this.service = service;
        this.scriptLoader = scriptLoader;
        this.loaded = new EventEmitter();
    }
    MarkerClustererComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.options, 'options is required for <marker-clusterer>');
        this.service.getNativeMap().then(function (map) {
            return _this.scriptLoader.load(LIB_URLS, false, function () {
                _this.markerClusterer = new window.BMapLib.MarkerClusterer(map, toMarkerClustererOptions(_this.options));
                _this.loaded.emit(_this.markerClusterer);
            });
        });
    };
    MarkerClustererComponent.prototype.ngOnChanges = function (changes) {
        if (changes.options && !changes.options.isFirstChange()) {
            this.resetOptions(changes.options.currentValue);
        }
    };
    MarkerClustererComponent.prototype.resetOptions = function (options) {
        if (options.markers) {
            this.markerClusterer.clearMarkers();
            this.markerClusterer.addMarkers(options.markers.map(function (m) {
                return new window.BMap.Marker(toPoint(m.point), toMarkerOptions(m.options));
            }));
        }
        if (!isUndefined(options.girdSize)) {
            this.markerClusterer.setGridSize(options.girdSize);
        }
        if (!isUndefined(options.maxZoom)) {
            this.markerClusterer.setMaxZoom(options.maxZoom);
        }
        if (options.styles) {
            this.markerClusterer.setStyles(options.styles.filter(function (s) { return s; }).map(function (s) { return toTextIconStyle(s); }));
        }
    };
    MarkerClustererComponent.prototype.ngOnDestroy = function () {
        this.markerClusterer.clearMarkers();
    };
    MarkerClustererComponent.ctorParameters = function () { return [
        { type: MapService },
        { type: ScriptLoader }
    ]; };
    tslib_1.__decorate([
        Input()
    ], MarkerClustererComponent.prototype, "options", void 0);
    tslib_1.__decorate([
        Output()
    ], MarkerClustererComponent.prototype, "loaded", void 0);
    MarkerClustererComponent = tslib_1.__decorate([
        Directive({
            selector: 'marker-clusterer'
        })
    ], MarkerClustererComponent);
    return MarkerClustererComponent;
}());
export { MarkerClustererComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyQ2x1c3RlcmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21hcmtlckNsdXN0ZXJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUMvQyxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLE9BQU8sRUFDUCxlQUFlLEVBQ2YsZUFBZSxFQUNoQixNQUFNLHdCQUF3QixDQUFBO0FBQy9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQUtwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFHeEQsSUFBTSxRQUFRLEdBQUc7SUFDZixHQUFHLEVBQUUsaUJBQWlCO0lBQ3RCLE9BQU8sRUFBRTtRQUNQLGtGQUFrRjtRQUNsRixrRkFBa0Y7S0FDbkY7Q0FDRixDQUFBO0FBS0Q7SUFPRSxrQ0FDVSxPQUFtQixFQUNuQixZQUEwQjtRQUQxQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBTmxCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO0lBTzFDLENBQUM7SUFFRywyQ0FBUSxHQUFmO1FBQUEsaUJBYUM7UUFaQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSw0Q0FBNEMsQ0FBQyxDQUFBO1FBRXJFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBaUI7WUFDakQsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFO2dCQUM3QyxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQ3ZELEdBQUcsRUFDSCx3QkFBd0IsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQ3ZDLENBQUE7Z0JBRUQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1lBQ3hDLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRU0sOENBQVcsR0FBbEIsVUFBbUIsT0FBaUQ7UUFDbEUsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7U0FDaEQ7SUFDSCxDQUFDO0lBRU8sK0NBQVksR0FBcEIsVUFBcUIsT0FBK0I7UUFDbEQsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUE7WUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQzdCLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUNqQixVQUFBLENBQUM7Z0JBQ0MsT0FBQSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUFwRSxDQUFvRSxDQUN2RSxDQUNGLENBQUE7U0FDRjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUNuRDtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUNqRDtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQzNELENBQUE7U0FDRjtJQUNILENBQUM7SUFFTSw4Q0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckMsQ0FBQzs7Z0JBbERrQixVQUFVO2dCQUNMLFlBQVk7O0lBUjNCO1FBQVIsS0FBSyxFQUFFOzZEQUF3QztJQUV0QztRQUFULE1BQU0sRUFBRTs0REFBb0M7SUFIbEMsd0JBQXdCO1FBSHBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7U0FDN0IsQ0FBQztPQUNXLHdCQUF3QixDQTJEcEM7SUFBRCwrQkFBQztDQUFBLEFBM0RELElBMkRDO1NBM0RZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbmltcG9ydCB7IG51bGxDaGVjayB9IGZyb20gJy4uL2hlbHBlcnMvdmFsaWRhdGUnXHJcbmltcG9ydCB7IGlzVW5kZWZpbmVkIH0gZnJvbSAnLi4vaGVscGVycy9vYmplY3QnXHJcbmltcG9ydCB7XHJcbiAgdG9NYXJrZXJDbHVzdGVyZXJPcHRpb25zLFxyXG4gIHRvUG9pbnQsXHJcbiAgdG9NYXJrZXJPcHRpb25zLFxyXG4gIHRvVGV4dEljb25TdHlsZVxyXG59IGZyb20gJy4uL2hlbHBlcnMvdHJhbnNmb3JtZXInXHJcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvbWFwU2VydmljZSdcclxuaW1wb3J0IHtcclxuICBNYXJrZXJDbHVzdGVyZXJPcHRpb25zLFxyXG4gIEJNYXJrZXJDbHVzdGVyZXJcclxufSBmcm9tICcuLi90eXBlcy9NYXJrZXJDbHVzdGVyZXInXHJcbmltcG9ydCB7IFNjcmlwdExvYWRlciB9IGZyb20gJy4uL3Byb3ZpZGVycy9zY3JpcHRMb2FkZXInXHJcbmltcG9ydCB7IEJNYXBJbnN0YW5jZSB9IGZyb20gJy4uL3R5cGVzL01hcCdcclxuXHJcbmNvbnN0IExJQl9VUkxTID0ge1xyXG4gIGtleTogJ21hcmtlckNsdXN0ZXJlcicsXHJcbiAgc2NyaXB0czogW1xyXG4gICAgJ2h0dHBzOi8vYXBpLm1hcC5iYWlkdS5jb20vbGlicmFyeS9NYXJrZXJDbHVzdGVyZXIvMS4yL3NyYy9NYXJrZXJDbHVzdGVyZXJfbWluLmpzJyxcclxuICAgICdodHRwczovL2FwaS5tYXAuYmFpZHUuY29tL2xpYnJhcnkvVGV4dEljb25PdmVybGF5LzEuMi9zcmMvVGV4dEljb25PdmVybGF5X21pbi5qcydcclxuICBdXHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbWFya2VyLWNsdXN0ZXJlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcmtlckNsdXN0ZXJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHByaXZhdGUgb3B0aW9uczogTWFya2VyQ2x1c3RlcmVyT3B0aW9uc1xyXG5cclxuICBAT3V0cHV0KCkgcHJpdmF0ZSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgcHJpdmF0ZSBtYXJrZXJDbHVzdGVyZXI6IEJNYXJrZXJDbHVzdGVyZXJcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNlcnZpY2U6IE1hcFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNjcmlwdExvYWRlcjogU2NyaXB0TG9hZGVyXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICBudWxsQ2hlY2sodGhpcy5vcHRpb25zLCAnb3B0aW9ucyBpcyByZXF1aXJlZCBmb3IgPG1hcmtlci1jbHVzdGVyZXI+JylcclxuXHJcbiAgICB0aGlzLnNlcnZpY2UuZ2V0TmF0aXZlTWFwKCkudGhlbigobWFwOiBCTWFwSW5zdGFuY2UpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2NyaXB0TG9hZGVyLmxvYWQoTElCX1VSTFMsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIgPSBuZXcgd2luZG93LkJNYXBMaWIuTWFya2VyQ2x1c3RlcmVyKFxyXG4gICAgICAgICAgbWFwLFxyXG4gICAgICAgICAgdG9NYXJrZXJDbHVzdGVyZXJPcHRpb25zKHRoaXMub3B0aW9ucylcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVkLmVtaXQodGhpcy5tYXJrZXJDbHVzdGVyZXIpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcclxuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgJiYgIWNoYW5nZXMub3B0aW9ucy5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5yZXNldE9wdGlvbnMoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRPcHRpb25zKG9wdGlvbnM6IE1hcmtlckNsdXN0ZXJlck9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zLm1hcmtlcnMpIHtcclxuICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIuY2xlYXJNYXJrZXJzKClcclxuICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIuYWRkTWFya2VycyhcclxuICAgICAgICBvcHRpb25zLm1hcmtlcnMubWFwKFxyXG4gICAgICAgICAgbSA9PlxyXG4gICAgICAgICAgICBuZXcgd2luZG93LkJNYXAuTWFya2VyKHRvUG9pbnQobS5wb2ludCksIHRvTWFya2VyT3B0aW9ucyhtLm9wdGlvbnMpKVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLmdpcmRTaXplKSkge1xyXG4gICAgICB0aGlzLm1hcmtlckNsdXN0ZXJlci5zZXRHcmlkU2l6ZShvcHRpb25zLmdpcmRTaXplKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLm1heFpvb20pKSB7XHJcbiAgICAgIHRoaXMubWFya2VyQ2x1c3RlcmVyLnNldE1heFpvb20ob3B0aW9ucy5tYXhab29tKVxyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMuc3R5bGVzKSB7XHJcbiAgICAgIHRoaXMubWFya2VyQ2x1c3RlcmVyLnNldFN0eWxlcyhcclxuICAgICAgICBvcHRpb25zLnN0eWxlcy5maWx0ZXIocyA9PiBzKS5tYXAocyA9PiB0b1RleHRJY29uU3R5bGUocykpXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMubWFya2VyQ2x1c3RlcmVyLmNsZWFyTWFya2VycygpXHJcbiAgfVxyXG59XHJcbiJdfQ==