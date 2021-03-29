import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { nullCheck } from '../helpers/validate';
import { MapService } from '../providers/mapService';
import { ScriptLoader } from '../providers/scriptLoader';
var LIB_URL = "https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js";
var HeatmapComponent = /** @class */ (function () {
    function HeatmapComponent(service, scriptLoader) {
        this.service = service;
        this.scriptLoader = scriptLoader;
        this.loaded = new EventEmitter();
    }
    HeatmapComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.dataset, 'dataset is required for <heatmap>');
        this.service.getNativeMap().then(function () {
            return _this.scriptLoader.load(LIB_URL, false, function () {
                _this.service
                    .addOverlay(function () {
                    return (_this.heatmap = new window.BMapLib.HeatmapOverlay(_this.options));
                })
                    .then(function () {
                    _this.loaded.emit(_this.heatmap);
                    if (_this.dataset) {
                        _this.heatmap.setDataSet(_this.dataset);
                    }
                });
            });
        });
    };
    HeatmapComponent.prototype.ngOnChanges = function (changes) {
        if (changes.dataset && !changes.dataset.isFirstChange()) {
            this.heatmap.setDataSet(changes.dataset.currentValue);
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.heatmap.setOptions(changes.options.currentValue);
        }
    };
    HeatmapComponent.prototype.ngOnDestroy = function () {
        this.service.removeOverlay(this.heatmap);
    };
    HeatmapComponent.ctorParameters = function () { return [
        { type: MapService },
        { type: ScriptLoader }
    ]; };
    tslib_1.__decorate([
        Input()
    ], HeatmapComponent.prototype, "dataset", void 0);
    tslib_1.__decorate([
        Input()
    ], HeatmapComponent.prototype, "options", void 0);
    tslib_1.__decorate([
        Output()
    ], HeatmapComponent.prototype, "loaded", void 0);
    HeatmapComponent = tslib_1.__decorate([
        Directive({
            selector: 'heatmap'
        })
    ], HeatmapComponent);
    return HeatmapComponent;
}());
export { HeatmapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhdG1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1iYWlkdS1tYXAvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWF0bWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBRXBELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQTtBQUV4RCxJQUFNLE9BQU8sR0FBRyxrRUFBa0UsQ0FBQTtBQUtsRjtJQVFFLDBCQUNVLE9BQW1CLEVBQ25CLFlBQTBCO1FBRDFCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFObEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFPMUMsQ0FBQztJQUVHLG1DQUFRLEdBQWY7UUFBQSxpQkFtQkM7UUFsQkMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsbUNBQW1DLENBQUMsQ0FBQTtRQUU1RCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztZQUMvQixPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7Z0JBQzVDLEtBQUksQ0FBQyxPQUFPO3FCQUNULFVBQVUsQ0FBQztvQkFDVixPQUFPLENBQUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUN0RCxLQUFJLENBQUMsT0FBTyxDQUNiLENBQUMsQ0FBQTtnQkFDSixDQUFDLENBQUM7cUJBQ0QsSUFBSSxDQUFDO29CQUNKLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDOUIsSUFBSSxLQUFJLENBQUMsT0FBTyxFQUFFO3dCQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7cUJBQ3RDO2dCQUNILENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTSxzQ0FBVyxHQUFsQixVQUFtQixPQUFpRDtRQUNsRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7U0FDdEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7U0FDdEQ7SUFDSCxDQUFDO0lBRU0sc0NBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDMUMsQ0FBQzs7Z0JBcENrQixVQUFVO2dCQUNMLFlBQVk7O0lBVDNCO1FBQVIsS0FBSyxFQUFFO3FEQUE2QjtJQUM1QjtRQUFSLEtBQUssRUFBRTtxREFBZ0M7SUFFOUI7UUFBVCxNQUFNLEVBQUU7b0RBQW9DO0lBSmxDLGdCQUFnQjtRQUg1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztTQUNwQixDQUFDO09BQ1csZ0JBQWdCLENBOEM1QjtJQUFELHVCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0E5Q1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuaW1wb3J0IHsgbnVsbENoZWNrIH0gZnJvbSAnLi4vaGVscGVycy92YWxpZGF0ZSdcclxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9tYXBTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBCSGVhdG1hcCwgSGVhdG1hcE9wdGlvbnMsIEhlYXRtYXBEYXRhIH0gZnJvbSAnLi4vdHlwZXMvSGVhdG1hcCdcclxuaW1wb3J0IHsgU2NyaXB0TG9hZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL3NjcmlwdExvYWRlcidcclxuXHJcbmNvbnN0IExJQl9VUkwgPSBgaHR0cHM6Ly9hcGkubWFwLmJhaWR1LmNvbS9saWJyYXJ5L0hlYXRtYXAvMi4wL3NyYy9IZWF0bWFwX21pbi5qc2BcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnaGVhdG1hcCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYXRtYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBwcml2YXRlIGRhdGFzZXQ6IEhlYXRtYXBEYXRhXHJcbiAgQElucHV0KCkgcHJpdmF0ZSBvcHRpb25zOiBIZWF0bWFwT3B0aW9uc1xyXG5cclxuICBAT3V0cHV0KCkgcHJpdmF0ZSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgcHJpdmF0ZSBoZWF0bWFwOiBCSGVhdG1hcFxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2VydmljZTogTWFwU2VydmljZSxcclxuICAgIHByaXZhdGUgc2NyaXB0TG9hZGVyOiBTY3JpcHRMb2FkZXJcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIG51bGxDaGVjayh0aGlzLmRhdGFzZXQsICdkYXRhc2V0IGlzIHJlcXVpcmVkIGZvciA8aGVhdG1hcD4nKVxyXG5cclxuICAgIHRoaXMuc2VydmljZS5nZXROYXRpdmVNYXAoKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2NyaXB0TG9hZGVyLmxvYWQoTElCX1VSTCwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgICAgIC5hZGRPdmVybGF5KCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmhlYXRtYXAgPSBuZXcgd2luZG93LkJNYXBMaWIuSGVhdG1hcE92ZXJsYXkoXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRpb25zXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KHRoaXMuaGVhdG1hcClcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YXNldCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGVhdG1hcC5zZXREYXRhU2V0KHRoaXMuZGF0YXNldClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xyXG4gICAgaWYgKGNoYW5nZXMuZGF0YXNldCAmJiAhY2hhbmdlcy5kYXRhc2V0LmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLmhlYXRtYXAuc2V0RGF0YVNldChjaGFuZ2VzLmRhdGFzZXQuY3VycmVudFZhbHVlKVxyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyAmJiAhY2hhbmdlcy5vcHRpb25zLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLmhlYXRtYXAuc2V0T3B0aW9ucyhjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLnJlbW92ZU92ZXJsYXkodGhpcy5oZWF0bWFwKVxyXG4gIH1cclxufVxyXG4iXX0=