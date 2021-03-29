import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { MapService } from '../providers/mapService';
var TrafficLayerComponent = /** @class */ (function () {
    function TrafficLayerComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    TrafficLayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .addTileLayer(function () {
            _this.trafficlayer = new window.BMap.TrafficLayer(_this.options);
            return _this.trafficlayer;
        })
            .then(function () {
            _this.loaded.emit(_this.trafficlayer);
        });
    };
    TrafficLayerComponent.prototype.ngOnDestroy = function () {
        this.service.removeTileLayer(this.trafficlayer);
    };
    TrafficLayerComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
    tslib_1.__decorate([
        Input()
    ], TrafficLayerComponent.prototype, "options", void 0);
    tslib_1.__decorate([
        Output()
    ], TrafficLayerComponent.prototype, "loaded", void 0);
    TrafficLayerComponent = tslib_1.__decorate([
        Directive({
            selector: 'trafficlayer'
        })
    ], TrafficLayerComponent);
    return TrafficLayerComponent;
}());
export { TrafficLayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpY2xheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyYWZmaWNsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBTXBEO0lBU0UsK0JBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFKL0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFJTyxDQUFDO0lBRXBDLHdDQUFRLEdBQWY7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxPQUFPO2FBQ1QsWUFBWSxDQUFDO1lBQ1osS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUM5RCxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUE7UUFDMUIsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLDJDQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2pELENBQUM7O2dCQWY0QixVQUFVOztJQVB2QztRQURDLEtBQUssRUFBRTswREFDNEI7SUFHcEM7UUFEQyxNQUFNLEVBQUU7eURBQzBCO0lBTHhCLHFCQUFxQjtRQUhqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztTQUN6QixDQUFDO09BQ1cscUJBQXFCLENBeUJqQztJQUFELDRCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F6QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvbWFwU2VydmljZSdcclxuaW1wb3J0IHsgQlRyYWZmaWNMYXllciwgVHJhZmZpY0xheWVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzL1RyYWZmaWNMYXllcidcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAndHJhZmZpY2xheWVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhZmZpY0xheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJpdmF0ZSBvcHRpb25zOiBUcmFmZmljTGF5ZXJPcHRpb25zXHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHByaXZhdGUgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gIHByaXZhdGUgdHJhZmZpY2xheWVyOiBCVHJhZmZpY0xheWVyXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTWFwU2VydmljZSkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgIC5hZGRUaWxlTGF5ZXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudHJhZmZpY2xheWVyID0gbmV3IHdpbmRvdy5CTWFwLlRyYWZmaWNMYXllcih0aGlzLm9wdGlvbnMpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhZmZpY2xheWVyXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KHRoaXMudHJhZmZpY2xheWVyKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLnJlbW92ZVRpbGVMYXllcih0aGlzLnRyYWZmaWNsYXllcilcclxuICB9XHJcbn1cclxuIl19