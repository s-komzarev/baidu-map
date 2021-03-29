import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MapService } from '../providers/mapService';
import { nullCheck } from '../helpers/validate';
var MapComponent = /** @class */ (function () {
    function MapComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
        this.clicked = new EventEmitter();
    }
    MapComponent.prototype.ngOnInit = function () {
        // do nothing
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        nullCheck(this.options, 'options is required for <baidu-map>');
        nullCheck(this.options.centerAndZoom, 'options.centerAndZoom is required for <baidu-map>');
        this.service
            .createMap(this.mapInstance.nativeElement, this.options)
            .then(function (map) {
            _this.loaded.emit(map);
            return map;
        })
            .then(function (map) {
            _this.addListener(map);
        });
    };
    MapComponent.prototype.ngOnChanges = function (changes) {
        var opts = changes.options.currentValue;
        if (!opts) {
            return console.warn('MapOptions change was ignored since you are passing empty value');
        }
        this.service.setOptions(opts);
    };
    MapComponent.prototype.ngOnDestroy = function () {
        console.log('on map destroy');
    };
    MapComponent.prototype.addListener = function (map) {
        var _this = this;
        map.addEventListener('click', function (e) {
            _this.clicked.emit(e);
        });
    };
    MapComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
    tslib_1.__decorate([
        Input()
    ], MapComponent.prototype, "options", void 0);
    tslib_1.__decorate([
        Output()
    ], MapComponent.prototype, "loaded", void 0);
    tslib_1.__decorate([
        Output()
    ], MapComponent.prototype, "clicked", void 0);
    tslib_1.__decorate([
        ViewChild('mapinstance', { static: false })
    ], MapComponent.prototype, "mapInstance", void 0);
    MapComponent = tslib_1.__decorate([
        Component({
            providers: [MapService],
            selector: 'baidu-map',
            template: "\n    <div #mapinstance class=\"baidu-map-instance\"></div>\n    <div class=\"baidu-map-offline\">\n      <label>{{ 'NO_NETWORK' }}</label>\n    </div>\n    <div class=\"tranclude-content\">\n      <ng-content></ng-content>\n    </div>\n  ",
            styles: ["\n      .baidu-map-instance {\n        width: 100%;\n        height: 100%;\n        display: none;\n      }\n      .baidu-map-offline {\n        width: 100%;\n        height: 100%;\n        background-color: #e6e6e6;\n        position: relative;\n        display: none;\n      }\n      .baidu-map-offline label {\n        fontsize: 30px;\n        margin: 0;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-right: -50%;\n        transform: translate(-50%, -50%);\n      }\n      .tranclude-content {\n        display: none;\n      }\n    "]
        })
    ], MapComponent);
    return MapComponent;
}());
export { MapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFLTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQUdwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUEyQy9DO0lBU0Usc0JBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFMckIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFDM0IsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFJSixDQUFDO0lBRTNDLCtCQUFRLEdBQVI7UUFDRSxhQUFhO0lBQ2YsQ0FBQztJQUVNLHNDQUFlLEdBQXRCO1FBQUEsaUJBZ0JDO1FBZkMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUscUNBQXFDLENBQUMsQ0FBQTtRQUM5RCxTQUFTLENBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQzFCLG1EQUFtRCxDQUNwRCxDQUFBO1FBRUQsSUFBSSxDQUFDLE9BQU87YUFDVCxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN2RCxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ1AsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDckIsT0FBTyxHQUFHLENBQUE7UUFDWixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ1AsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxrQ0FBVyxHQUFsQixVQUFtQixPQUFpRDtRQUNsRSxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQTBCLENBQUE7UUFDdkQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sT0FBTyxDQUFDLElBQUksQ0FDakIsaUVBQWlFLENBQ2xFLENBQUE7U0FDRjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSxrQ0FBVyxHQUFsQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU8sa0NBQVcsR0FBbkIsVUFBb0IsR0FBaUI7UUFBckMsaUJBSUM7UUFIQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBTTtZQUNuQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7O2dCQTFDNEIsVUFBVTs7SUFQOUI7UUFBUixLQUFLLEVBQUU7aURBQTRCO0lBRTFCO1FBQVQsTUFBTSxFQUFFO2dEQUFvQztJQUNuQztRQUFULE1BQU0sRUFBRTtpREFBcUM7SUFFRDtRQUE1QyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO3FEQUFnQztJQVBqRSxZQUFZO1FBekN4QixTQUFTLENBQUM7WUFDVCxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDdkIsUUFBUSxFQUFFLFdBQVc7WUE2QnJCLFFBQVEsRUFBRSxpUEFRVDtxQkFuQ0MsK2pCQXlCQztTQVdKLENBQUM7T0FDVyxZQUFZLENBb0R4QjtJQUFELG1CQUFDO0NBQUEsQUFwREQsSUFvREM7U0FwRFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9tYXBTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBCTWFwSW5zdGFuY2UsIE1hcE9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9NYXAnXHJcblxyXG5pbXBvcnQgeyBudWxsQ2hlY2sgfSBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgcHJvdmlkZXJzOiBbTWFwU2VydmljZV0sXHJcbiAgc2VsZWN0b3I6ICdiYWlkdS1tYXAnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYmFpZHUtbWFwLWluc3RhbmNlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuYmFpZHUtbWFwLW9mZmxpbmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5iYWlkdS1tYXAtb2ZmbGluZSBsYWJlbCB7XHJcbiAgICAgICAgZm9udHNpemU6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB9XHJcbiAgICAgIC50cmFuY2x1ZGUtY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgI21hcGluc3RhbmNlIGNsYXNzPVwiYmFpZHUtbWFwLWluc3RhbmNlXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmFpZHUtbWFwLW9mZmxpbmVcIj5cclxuICAgICAgPGxhYmVsPnt7ICdOT19ORVRXT1JLJyB9fTwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0cmFuY2x1ZGUtY29udGVudFwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHByaXZhdGUgb3B0aW9uczogTWFwT3B0aW9uc1xyXG5cclxuICBAT3V0cHV0KCkgcHJpdmF0ZSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuICBAT3V0cHV0KCkgcHJpdmF0ZSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ21hcGluc3RhbmNlJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgbWFwSW5zdGFuY2U6IEVsZW1lbnRSZWZcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBNYXBTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIGRvIG5vdGhpbmdcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBudWxsQ2hlY2sodGhpcy5vcHRpb25zLCAnb3B0aW9ucyBpcyByZXF1aXJlZCBmb3IgPGJhaWR1LW1hcD4nKVxyXG4gICAgbnVsbENoZWNrKFxyXG4gICAgICB0aGlzLm9wdGlvbnMuY2VudGVyQW5kWm9vbSxcclxuICAgICAgJ29wdGlvbnMuY2VudGVyQW5kWm9vbSBpcyByZXF1aXJlZCBmb3IgPGJhaWR1LW1hcD4nXHJcbiAgICApXHJcblxyXG4gICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgIC5jcmVhdGVNYXAodGhpcy5tYXBJbnN0YW5jZS5uYXRpdmVFbGVtZW50LCB0aGlzLm9wdGlvbnMpXHJcbiAgICAgIC50aGVuKG1hcCA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkZWQuZW1pdChtYXApXHJcbiAgICAgICAgcmV0dXJuIG1hcFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihtYXAgPT4ge1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXIobWFwKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcclxuICAgIGNvbnN0IG9wdHMgPSBjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlIGFzIE1hcE9wdGlvbnNcclxuICAgIGlmICghb3B0cykge1xyXG4gICAgICByZXR1cm4gY29uc29sZS53YXJuKFxyXG4gICAgICAgICdNYXBPcHRpb25zIGNoYW5nZSB3YXMgaWdub3JlZCBzaW5jZSB5b3UgYXJlIHBhc3NpbmcgZW1wdHkgdmFsdWUnXHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIHRoaXMuc2VydmljZS5zZXRPcHRpb25zKG9wdHMpXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBjb25zb2xlLmxvZygnb24gbWFwIGRlc3Ryb3knKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRMaXN0ZW5lcihtYXA6IEJNYXBJbnN0YW5jZSkge1xyXG4gICAgbWFwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmNsaWNrZWQuZW1pdChlKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19