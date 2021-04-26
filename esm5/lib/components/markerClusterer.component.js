import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { nullCheck } from '../helpers/validate';
import { isUndefined } from '../helpers/object';
import { toMarkerClustererOptions, toTextIconStyle, createMarker } from '../helpers/transformer';
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
                return createMarker(m.point, m.options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VyQ2x1c3RlcmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21hcmtlckNsdXN0ZXJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUMvQyxPQUFPLEVBQ0wsd0JBQXdCLEVBR3hCLGVBQWUsRUFDZixZQUFZLEVBQ2IsTUFBTSx3QkFBd0IsQ0FBQTtBQUMvQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFLcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBR3hELElBQU0sUUFBUSxHQUFHO0lBQ2YsR0FBRyxFQUFFLGlCQUFpQjtJQUN0QixPQUFPLEVBQUU7UUFDUCxrRkFBa0Y7UUFDbEYsa0ZBQWtGO0tBQ25GO0NBQ0YsQ0FBQTtBQUtEO0lBT0Usa0NBQ1UsT0FBbUIsRUFDbkIsWUFBMEI7UUFEMUIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU5sQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQU96QyxDQUFDO0lBRUUsMkNBQVEsR0FBZjtRQUFBLGlCQWFDO1FBWkMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsNENBQTRDLENBQUMsQ0FBQTtRQUVyRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWlCO1lBQ2pELE9BQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRTtnQkFDN0MsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUN2RCxHQUFHLEVBQ0gsd0JBQXdCLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUN2QyxDQUFBO2dCQUVELEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtZQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVNLDhDQUFXLEdBQWxCLFVBQW1CLE9BQWlEO1FBQ2xFLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO1NBQ2hEO0lBQ0gsQ0FBQztJQUVPLCtDQUFZLEdBQXBCLFVBQXFCLE9BQStCO1FBQ2xELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFBO1lBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUM3QixPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FDakIsVUFBQSxDQUFDO2dCQUNDLE9BQUEsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUFoQyxDQUFnQyxDQUNuQyxDQUNGLENBQUE7U0FDRjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUNuRDtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUNqRDtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQzNELENBQUE7U0FDRjtJQUNILENBQUM7SUFFTSw4Q0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckMsQ0FBQzs7Z0JBbERrQixVQUFVO2dCQUNMLFlBQVk7O0lBUjNCO1FBQVIsS0FBSyxFQUFFOzZEQUF3QztJQUV0QztRQUFULE1BQU0sRUFBRTs0REFBb0M7SUFIbEMsd0JBQXdCO1FBSHBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7U0FDN0IsQ0FBQztPQUNXLHdCQUF3QixDQTJEcEM7SUFBRCwrQkFBQztDQUFBLEFBM0RELElBMkRDO1NBM0RZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbmltcG9ydCB7IG51bGxDaGVjayB9IGZyb20gJy4uL2hlbHBlcnMvdmFsaWRhdGUnXHJcbmltcG9ydCB7IGlzVW5kZWZpbmVkIH0gZnJvbSAnLi4vaGVscGVycy9vYmplY3QnXHJcbmltcG9ydCB7XHJcbiAgdG9NYXJrZXJDbHVzdGVyZXJPcHRpb25zLFxyXG4gIHRvUG9pbnQsXHJcbiAgdG9NYXJrZXJPcHRpb25zLFxyXG4gIHRvVGV4dEljb25TdHlsZSxcclxuICBjcmVhdGVNYXJrZXJcclxufSBmcm9tICcuLi9oZWxwZXJzL3RyYW5zZm9ybWVyJ1xyXG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL21hcFNlcnZpY2UnXHJcbmltcG9ydCB7XHJcbiAgTWFya2VyQ2x1c3RlcmVyT3B0aW9ucyxcclxuICBCTWFya2VyQ2x1c3RlcmVyXHJcbn0gZnJvbSAnLi4vdHlwZXMvTWFya2VyQ2x1c3RlcmVyJ1xyXG5pbXBvcnQgeyBTY3JpcHRMb2FkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvc2NyaXB0TG9hZGVyJ1xyXG5pbXBvcnQgeyBCTWFwSW5zdGFuY2UgfSBmcm9tICcuLi90eXBlcy9NYXAnXHJcblxyXG5jb25zdCBMSUJfVVJMUyA9IHtcclxuICBrZXk6ICdtYXJrZXJDbHVzdGVyZXInLFxyXG4gIHNjcmlwdHM6IFtcclxuICAgICdodHRwczovL2FwaS5tYXAuYmFpZHUuY29tL2xpYnJhcnkvTWFya2VyQ2x1c3RlcmVyLzEuMi9zcmMvTWFya2VyQ2x1c3RlcmVyX21pbi5qcycsXHJcbiAgICAnaHR0cHM6Ly9hcGkubWFwLmJhaWR1LmNvbS9saWJyYXJ5L1RleHRJY29uT3ZlcmxheS8xLjIvc3JjL1RleHRJY29uT3ZlcmxheV9taW4uanMnXHJcbiAgXVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ21hcmtlci1jbHVzdGVyZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXJrZXJDbHVzdGVyZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBwcml2YXRlIG9wdGlvbnM6IE1hcmtlckNsdXN0ZXJlck9wdGlvbnNcclxuXHJcbiAgQE91dHB1dCgpIHByaXZhdGUgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gIHByaXZhdGUgbWFya2VyQ2x1c3RlcmVyOiBCTWFya2VyQ2x1c3RlcmVyXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBNYXBTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzY3JpcHRMb2FkZXI6IFNjcmlwdExvYWRlclxyXG4gICkgeyB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIG51bGxDaGVjayh0aGlzLm9wdGlvbnMsICdvcHRpb25zIGlzIHJlcXVpcmVkIGZvciA8bWFya2VyLWNsdXN0ZXJlcj4nKVxyXG5cclxuICAgIHRoaXMuc2VydmljZS5nZXROYXRpdmVNYXAoKS50aGVuKChtYXA6IEJNYXBJbnN0YW5jZSkgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5zY3JpcHRMb2FkZXIubG9hZChMSUJfVVJMUywgZmFsc2UsICgpID0+IHtcclxuICAgICAgICB0aGlzLm1hcmtlckNsdXN0ZXJlciA9IG5ldyB3aW5kb3cuQk1hcExpYi5NYXJrZXJDbHVzdGVyZXIoXHJcbiAgICAgICAgICBtYXAsXHJcbiAgICAgICAgICB0b01hcmtlckNsdXN0ZXJlck9wdGlvbnModGhpcy5vcHRpb25zKVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkZWQuZW1pdCh0aGlzLm1hcmtlckNsdXN0ZXJlcilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xyXG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyAmJiAhY2hhbmdlcy5vcHRpb25zLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLnJlc2V0T3B0aW9ucyhjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldE9wdGlvbnMob3B0aW9uczogTWFya2VyQ2x1c3RlcmVyT3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMubWFya2Vycykge1xyXG4gICAgICB0aGlzLm1hcmtlckNsdXN0ZXJlci5jbGVhck1hcmtlcnMoKVxyXG4gICAgICB0aGlzLm1hcmtlckNsdXN0ZXJlci5hZGRNYXJrZXJzKFxyXG4gICAgICAgIG9wdGlvbnMubWFya2Vycy5tYXAoXHJcbiAgICAgICAgICBtID0+XHJcbiAgICAgICAgICAgIGNyZWF0ZU1hcmtlcihtLnBvaW50LCBtLm9wdGlvbnMpXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuZ2lyZFNpemUpKSB7XHJcbiAgICAgIHRoaXMubWFya2VyQ2x1c3RlcmVyLnNldEdyaWRTaXplKG9wdGlvbnMuZ2lyZFNpemUpXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMubWF4Wm9vbSkpIHtcclxuICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIuc2V0TWF4Wm9vbShvcHRpb25zLm1heFpvb20pXHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5zdHlsZXMpIHtcclxuICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIuc2V0U3R5bGVzKFxyXG4gICAgICAgIG9wdGlvbnMuc3R5bGVzLmZpbHRlcihzID0+IHMpLm1hcChzID0+IHRvVGV4dEljb25TdHlsZShzKSlcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIuY2xlYXJNYXJrZXJzKClcclxuICB9XHJcbn1cclxuIl19