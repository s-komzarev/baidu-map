import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { MapService } from '../providers/mapService';
let TileLayerComponent = class TileLayerComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    ngOnInit() {
        const func = this.getTilesUrl;
        this.service
            .addTileLayer(() => {
            this.tilelayer = new window.BMap.TileLayer(this.options);
            if (this.getTilesUrl) {
                this.tilelayer.getTilesUrl = (tileCoord, zoom) => {
                    return func(tileCoord, zoom);
                };
            }
            return this.tilelayer;
        })
            .then(() => {
            this.loaded.emit(this.tilelayer);
        });
    }
    ngOnDestroy() {
        this.service.removeTileLayer(this.tilelayer);
    }
};
TileLayerComponent.ctorParameters = () => [
    { type: MapService }
];
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
export { TileLayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RpbGVsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBV3BELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBWTdCLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFKL0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFJTyxDQUFDO0lBRXBDLFFBQVE7UUFDYixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFBO1FBRTdCLElBQUksQ0FBQyxPQUFPO2FBQ1QsWUFBWSxDQUFDLEdBQUcsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRXhELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxTQUFpQixFQUFFLElBQVksRUFBRSxFQUFFO29CQUMvRCxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQzlCLENBQUMsQ0FBQTthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3ZCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDbEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDOUMsQ0FBQztDQUNGLENBQUE7O1lBeEI4QixVQUFVOztBQVZ2QztJQURDLEtBQUssRUFBRTt1REFDNEI7QUFHcEM7SUFEQyxLQUFLLEVBQUU7bURBQ3lCO0FBR2pDO0lBREMsTUFBTSxFQUFFO2tEQUMwQjtBQVJ4QixrQkFBa0I7SUFIOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7S0FDdEIsQ0FBQztHQUNXLGtCQUFrQixDQW9DOUI7U0FwQ1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvbWFwU2VydmljZSdcclxuaW1wb3J0IHtcclxuICBCVGlsZUxheWVyLFxyXG4gIFRpbGVMYXllck9wdGlvbnMsXHJcbiAgR2V0VGlsZXNVcmxGdW5jXHJcbn0gZnJvbSAnLi4vdHlwZXMvVGlsZUxheWVyJ1xyXG5pbXBvcnQgeyBCUGl4ZWwgfSBmcm9tICcuLi90eXBlcy9QaXhlbCdcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAndGlsZWxheWVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGlsZUxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJpdmF0ZSBnZXRUaWxlc1VybDogR2V0VGlsZXNVcmxGdW5jXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHJpdmF0ZSBvcHRpb25zOiBUaWxlTGF5ZXJPcHRpb25zXHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHByaXZhdGUgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gIHByaXZhdGUgdGlsZWxheWVyOiBCVGlsZUxheWVyXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTWFwU2VydmljZSkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgZnVuYyA9IHRoaXMuZ2V0VGlsZXNVcmxcclxuXHJcbiAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgLmFkZFRpbGVMYXllcigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50aWxlbGF5ZXIgPSBuZXcgd2luZG93LkJNYXAuVGlsZUxheWVyKHRoaXMub3B0aW9ucylcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0VGlsZXNVcmwpIHtcclxuICAgICAgICAgIHRoaXMudGlsZWxheWVyLmdldFRpbGVzVXJsID0gKHRpbGVDb29yZDogQlBpeGVsLCB6b29tOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmModGlsZUNvb3JkLCB6b29tKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlbGF5ZXJcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGVkLmVtaXQodGhpcy50aWxlbGF5ZXIpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UucmVtb3ZlVGlsZUxheWVyKHRoaXMudGlsZWxheWVyKVxyXG4gIH1cclxufVxyXG4iXX0=