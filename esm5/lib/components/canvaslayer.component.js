import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { MapService } from '../providers/mapService';
import { isNumber } from '../helpers/object';
var CanvasLayerComponent = /** @class */ (function () {
    function CanvasLayerComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    CanvasLayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .addOverlay(function (map) {
            _this.canvaslayer = new window.BMap.CanvasLayer(_this.getOptions(_this.options, map));
            return _this.canvaslayer;
        })
            .then(function () {
            _this.loaded.emit(_this.canvaslayer);
        });
    };
    CanvasLayerComponent.prototype.ngOnDestroy = function () {
        this.service.removeOverlay(this.canvaslayer);
    };
    CanvasLayerComponent.prototype.getOptions = function (options, map) {
        if (!options) {
            return;
        }
        var opts = {};
        if (isNumber(options.zIndex)) {
            opts.zIndex = options.zIndex;
        }
        if (options.paneName) {
            opts.paneName = options.paneName;
        }
        if (options.update) {
            opts.update = function () {
                return options.update(map, this.canvas);
            };
        }
        return opts;
    };
    CanvasLayerComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
    tslib_1.__decorate([
        Input()
    ], CanvasLayerComponent.prototype, "options", void 0);
    tslib_1.__decorate([
        Output()
    ], CanvasLayerComponent.prototype, "loaded", void 0);
    CanvasLayerComponent = tslib_1.__decorate([
        Directive({
            selector: 'canvaslayer'
        })
    ], CanvasLayerComponent);
    return CanvasLayerComponent;
}());
export { CanvasLayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItYmFpZHUtbWFwLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2FudmFzbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQU1wRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFNNUM7SUFTRSw4QkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUovQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUlPLENBQUM7SUFFcEMsdUNBQVEsR0FBZjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLE9BQU87YUFDVCxVQUFVLENBQUMsVUFBQyxHQUFpQjtZQUM1QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQzVDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FDbkMsQ0FBQTtZQUNELE9BQU8sS0FBSSxDQUFDLFdBQVcsQ0FBQTtRQUN6QixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDcEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sMENBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVPLHlDQUFVLEdBQWxCLFVBQ0UsT0FBMkIsRUFDM0IsR0FBaUI7UUFFakIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU07U0FDUDtRQUNELElBQU0sSUFBSSxHQUF3QixFQUFFLENBQUE7UUFFcEMsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQTtTQUM3QjtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUE7U0FDakM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRztnQkFDWixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUN6QyxDQUFDLENBQUE7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQzs7Z0JBekM0QixVQUFVOztJQVB2QztRQURDLEtBQUssRUFBRTt5REFDMkI7SUFHbkM7UUFEQyxNQUFNLEVBQUU7d0RBQzBCO0lBTHhCLG9CQUFvQjtRQUhoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtTQUN4QixDQUFDO09BQ1csb0JBQW9CLENBbURoQztJQUFELDJCQUFDO0NBQUEsQUFuREQsSUFtREM7U0FuRFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvbWFwU2VydmljZSdcclxuaW1wb3J0IHtcclxuICBCQ2FudmFzTGF5ZXIsXHJcbiAgQ2FudmFzTGF5ZXJPcHRpb25zLFxyXG4gIEJDYW52YXNMYXllck9wdGlvbnNcclxufSBmcm9tICcuLi90eXBlcy9DYW52YXNMYXllcidcclxuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi9oZWxwZXJzL29iamVjdCdcclxuaW1wb3J0IHsgQk1hcEluc3RhbmNlIH0gZnJvbSAnLi4vdHlwZXMvTWFwJ1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdjYW52YXNsYXllcidcclxufSlcclxuZXhwb3J0IGNsYXNzIENhbnZhc0xheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHJpdmF0ZSBvcHRpb25zOiBDYW52YXNMYXllck9wdGlvbnNcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHJpdmF0ZSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgcHJpdmF0ZSBjYW52YXNsYXllcjogQkNhbnZhc0xheWVyXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTWFwU2VydmljZSkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlXHJcbiAgICAgIC5hZGRPdmVybGF5KChtYXA6IEJNYXBJbnN0YW5jZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FudmFzbGF5ZXIgPSBuZXcgd2luZG93LkJNYXAuQ2FudmFzTGF5ZXIoXHJcbiAgICAgICAgICB0aGlzLmdldE9wdGlvbnModGhpcy5vcHRpb25zLCBtYXApXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhc2xheWVyXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KHRoaXMuY2FudmFzbGF5ZXIpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UucmVtb3ZlT3ZlcmxheSh0aGlzLmNhbnZhc2xheWVyKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPcHRpb25zKFxyXG4gICAgb3B0aW9uczogQ2FudmFzTGF5ZXJPcHRpb25zLFxyXG4gICAgbWFwOiBCTWFwSW5zdGFuY2VcclxuICApOiBCQ2FudmFzTGF5ZXJPcHRpb25zIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICghb3B0aW9ucykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IG9wdHM6IEJDYW52YXNMYXllck9wdGlvbnMgPSB7fVxyXG5cclxuICAgIGlmIChpc051bWJlcihvcHRpb25zLnpJbmRleCkpIHtcclxuICAgICAgb3B0cy56SW5kZXggPSBvcHRpb25zLnpJbmRleFxyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMucGFuZU5hbWUpIHtcclxuICAgICAgb3B0cy5wYW5lTmFtZSA9IG9wdGlvbnMucGFuZU5hbWVcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLnVwZGF0ZSkge1xyXG4gICAgICBvcHRzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zLnVwZGF0ZShtYXAsIHRoaXMuY2FudmFzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9wdHNcclxuICB9XHJcbn1cclxuIl19