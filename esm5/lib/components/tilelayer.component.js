import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { MapService } from '../providers/mapService';
var TileLayerComponent = /** @class */ (function () {
    function TileLayerComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    TileLayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var func = this.getTilesUrl;
        this.service
            .addTileLayer(function () {
            _this.tilelayer = new window.BMap.TileLayer(_this.options);
            if (_this.getTilesUrl) {
                _this.tilelayer.getTilesUrl = function (tileCoord, zoom) {
                    return func(tileCoord, zoom);
                };
            }
            return _this.tilelayer;
        })
            .then(function () {
            _this.loaded.emit(_this.tilelayer);
        });
    };
    TileLayerComponent.prototype.ngOnDestroy = function () {
        this.service.removeTileLayer(this.tilelayer);
    };
    TileLayerComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
    tslib_1.__decorate([
        Input()
    ], TileLayerComponent.prototype, "getTilesUrl", void 0);
    tslib_1.__decorate([
        Input()
    ], TileLayerComponent.prototype, "options", void 0);
    tslib_1.__decorate([
        Output()
    ], TileLayerComponent.prototype, "loaded", void 0);
    TileLayerComponent = tslib_1.__decorate([
        Directive({
            selector: 'tilelayer'
        })
    ], TileLayerComponent);
    return TileLayerComponent;
}());
export { TileLayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbGVsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBV3BEO0lBWUUsNEJBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFKL0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFJTyxDQUFDO0lBRXBDLHFDQUFRLEdBQWY7UUFBQSxpQkFpQkM7UUFoQkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQTtRQUU3QixJQUFJLENBQUMsT0FBTzthQUNULFlBQVksQ0FBQztZQUNaLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7WUFFeEQsSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFDLFNBQWlCLEVBQUUsSUFBWTtvQkFDM0QsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUM5QixDQUFDLENBQUE7YUFDRjtZQUNELE9BQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQTtRQUN2QixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDbEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sd0NBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDOUMsQ0FBQzs7Z0JBdkI0QixVQUFVOztJQVZ2QztRQURDLEtBQUssRUFBRTsyREFDNEI7SUFHcEM7UUFEQyxLQUFLLEVBQUU7dURBQ3lCO0lBR2pDO1FBREMsTUFBTSxFQUFFO3NEQUMwQjtJQVJ4QixrQkFBa0I7UUFIOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7U0FDdEIsQ0FBQztPQUNXLGtCQUFrQixDQW9DOUI7SUFBRCx5QkFBQztDQUFBLEFBcENELElBb0NDO1NBcENZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL21hcFNlcnZpY2UnXHJcbmltcG9ydCB7XHJcbiAgQlRpbGVMYXllcixcclxuICBUaWxlTGF5ZXJPcHRpb25zLFxyXG4gIEdldFRpbGVzVXJsRnVuY1xyXG59IGZyb20gJy4uL3R5cGVzL1RpbGVMYXllcidcclxuaW1wb3J0IHsgQlBpeGVsIH0gZnJvbSAnLi4vdHlwZXMvUGl4ZWwnXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ3RpbGVsYXllcidcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbGVMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKVxyXG4gIHByaXZhdGUgZ2V0VGlsZXNVcmw6IEdldFRpbGVzVXJsRnVuY1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHByaXZhdGUgb3B0aW9uczogVGlsZUxheWVyT3B0aW9uc1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwcml2YXRlIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICBwcml2YXRlIHRpbGVsYXllcjogQlRpbGVMYXllclxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IE1hcFNlcnZpY2UpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnN0IGZ1bmMgPSB0aGlzLmdldFRpbGVzVXJsXHJcblxyXG4gICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgIC5hZGRUaWxlTGF5ZXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGlsZWxheWVyID0gbmV3IHdpbmRvdy5CTWFwLlRpbGVMYXllcih0aGlzLm9wdGlvbnMpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldFRpbGVzVXJsKSB7XHJcbiAgICAgICAgICB0aGlzLnRpbGVsYXllci5nZXRUaWxlc1VybCA9ICh0aWxlQ29vcmQ6IEJQaXhlbCwgem9vbTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jKHRpbGVDb29yZCwgem9vbSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZWxheWVyXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KHRoaXMudGlsZWxheWVyKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLnJlbW92ZVRpbGVMYXllcih0aGlzLnRpbGVsYXllcilcclxuICB9XHJcbn1cclxuIl19