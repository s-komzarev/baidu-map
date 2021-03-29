import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { isBoolean, isNull, omit } from '../helpers/object';
import { nullCheck } from '../helpers/validate';
import { ScriptLoaderConfig } from './scriptLoader';
import { isMapTypeEnum } from '../types/Map';
import { toPoint } from '../helpers/transformer';
import { ScriptLoader } from './scriptLoader';
var MapService = /** @class */ (function () {
    function MapService(config, loader) {
        var _this = this;
        this.loader = loader;
        nullCheck(config.ak, 'ak must be provided');
        this.config = config;
        this.map = new Promise(function (resolve) {
            _this.mapResolver = resolve;
        });
    }
    MapService.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        var URL = "https://api.map.baidu.com/api?v=2.0&ak=" + this.config.ak + "&callback=baidumapinit";
        return new Promise(function (resolve) {
            _this.loader.load(URL, true, function () {
                var map = new window.BMap.Map(el, omit(mapOptions, 'mapType'));
                _this.setOptions(mapOptions);
                _this.mapResolver(map);
                resolve(map);
            });
        });
    };
    MapService.prototype.setOptions = function (opts) {
        var disableDragging = opts.disableDragging, enableScrollWheelZoom = opts.enableScrollWheelZoom, disableDoubleClickZoom = opts.disableDoubleClickZoom, enableKeyboard = opts.enableKeyboard, enableInertialDragging = opts.enableInertialDragging, enableAutoResize = opts.enableAutoResize, enableContinuousZoom = opts.enableContinuousZoom, disablePinchToZoom = opts.disablePinchToZoom;
        if (isBoolean(disableDragging)) {
            this.map.then(function (map) {
                return map[(disableDragging ? 'disable' : 'enable') + 'Dragging']();
            });
        }
        if (isBoolean(enableScrollWheelZoom)) {
            this.map.then(function (map) {
                return map[(enableScrollWheelZoom ? 'enable' : 'disable') + 'ScrollWheelZoom']();
            });
        }
        if (isBoolean(enableAutoResize)) {
            this.map.then(function (map) {
                return map[(enableAutoResize ? 'enable' : 'disable') + 'AutoResize']();
            });
        }
        if (isBoolean(disableDoubleClickZoom)) {
            this.map.then(function (map) {
                return map[(disableDoubleClickZoom ? 'disable' : 'enable') + 'DoubleClickZoom']();
            });
        }
        if (isBoolean(enableKeyboard)) {
            this.map.then(function (map) {
                return map[(enableKeyboard ? 'enable' : 'disable') + 'Keyboard']();
            });
        }
        if (isBoolean(enableInertialDragging)) {
            this.map.then(function (map) {
                return map[(enableInertialDragging ? 'enable' : 'disable') + 'InertialDragging']();
            });
        }
        if (isBoolean(enableContinuousZoom)) {
            this.map.then(function (map) {
                return map[(enableContinuousZoom ? 'enable' : 'disable') + 'ContinuousZoom']();
            });
        }
        if (isBoolean(disablePinchToZoom)) {
            this.map.then(function (map) {
                return map[(disablePinchToZoom ? 'disable' : 'enable') + 'PinchToZoom']();
            });
        }
        if (!isNull(opts.cursor)) {
            this.map.then(function (map) { return map.setDefaultCursor(opts.cursor); });
        }
        if (!isNull(opts.draggingCursor)) {
            this.map.then(function (map) { return map.setDraggingCursor(opts.draggingCursor); });
        }
        if (!isNull(opts.currentCity)) {
            this.map.then(function (map) { return map.setCurrentCity(opts.currentCity); });
        }
        if (!isNull(opts.centerAndZoom)) {
            this.map.then(function (map) {
                map.centerAndZoom(toPoint(opts.centerAndZoom), opts.centerAndZoom.zoom);
            });
        }
        if (!isNull(opts.mapType)) {
            this.map.then(function (map) {
                var realType = isMapTypeEnum(opts.mapType)
                    ? window[opts.mapType]
                    : opts.mapType;
                map.setMapType(realType);
            });
        }
    };
    MapService.prototype.addOverlay = function (cb) {
        return this.map.then(function (map) {
            var overlay = cb(map);
            map.addOverlay(overlay);
            return { map: map, overlay: overlay };
        });
    };
    MapService.prototype.removeOverlay = function (overlay) {
        return this.map.then(function (map) {
            map.removeOverlay(overlay);
        });
    };
    MapService.prototype.addTileLayer = function (cb) {
        return this.map.then(function (map) {
            var tilelayer = cb(map);
            map.addTileLayer(tilelayer);
            return { map: map, tilelayer: tilelayer };
        });
    };
    MapService.prototype.removeTileLayer = function (tilelayer) {
        return this.map.then(function (map) {
            map.removeOverlay(tilelayer);
        });
    };
    MapService.prototype.addControl = function (cb) {
        return this.map.then(function (map) {
            var control = cb(map);
            map.addControl(control);
            return { map: map, control: control };
        });
    };
    MapService.prototype.removeControl = function (control) {
        return this.map.then(function (map) {
            map.removeControl(control);
        });
    };
    MapService.prototype.getNativeMap = function () {
        return this.map;
    };
    MapService.ctorParameters = function () { return [
        { type: ScriptLoaderConfig, decorators: [{ type: Inject, args: [ScriptLoaderConfig,] }] },
        { type: ScriptLoader }
    ]; };
    MapService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Inject(ScriptLoaderConfig))
    ], MapService);
    return MapService;
}());
export { MapService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvbWFwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDM0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBQ25ELE9BQU8sRUFBNEIsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFBO0FBSXRFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUVoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFHN0M7SUFNRSxvQkFDOEIsTUFBMEIsRUFDOUMsTUFBb0I7UUFGOUIsaUJBV0M7UUFUUyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBRTVCLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLHFCQUFxQixDQUFDLENBQUE7UUFFM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFFcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBZSxVQUFDLE9BQW1CO1lBQ3ZELEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVNLDhCQUFTLEdBQWhCLFVBQ0UsRUFBZSxFQUNmLFVBQXNCO1FBRnhCLGlCQWNDO1FBVkMsSUFBTSxHQUFHLEdBQUcsNENBQTBDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSwyQkFBd0IsQ0FBQTtRQUU1RixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FB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QUFZOztJQVJuQixVQUFVO1FBRHRCLFVBQVUsRUFBRTtRQVFSLG1CQUFBLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO09BUGxCLFVBQVUsQ0F3S3RCO0lBQUQsaUJBQUM7Q0FBQSxBQXhLRCxJQXdLQztTQXhLWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHsgaXNCb29sZWFuLCBpc051bGwsIG9taXQgfSBmcm9tICcuLi9oZWxwZXJzL29iamVjdCdcclxuaW1wb3J0IHsgbnVsbENoZWNrIH0gZnJvbSAnLi4vaGVscGVycy92YWxpZGF0ZSdcclxuaW1wb3J0IHsgQkNvbnRyb2wgfSBmcm9tICcuLi90eXBlcy9Db250cm9sJ1xyXG5pbXBvcnQgeyBTY3JpcHRMb2FkZXJDb25maWcgfSBmcm9tICcuL3NjcmlwdExvYWRlcidcclxuaW1wb3J0IHsgQk1hcEluc3RhbmNlLCBNYXBPcHRpb25zLCBpc01hcFR5cGVFbnVtIH0gZnJvbSAnLi4vdHlwZXMvTWFwJ1xyXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vdHlwZXMvT3ZlcmxheSdcclxuaW1wb3J0IHsgQlRpbGVMYXllciB9IGZyb20gJy4uL3R5cGVzL1RpbGVMYXllcidcclxuXHJcbmltcG9ydCB7IHRvUG9pbnQgfSBmcm9tICcuLi9oZWxwZXJzL3RyYW5zZm9ybWVyJ1xyXG5cclxuaW1wb3J0IHsgU2NyaXB0TG9hZGVyIH0gZnJvbSAnLi9zY3JpcHRMb2FkZXInXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNYXBTZXJ2aWNlIHtcclxuICBwcml2YXRlIGNvbmZpZzogU2NyaXB0TG9hZGVyQ29uZmlnXHJcblxyXG4gIHByaXZhdGUgbWFwOiBQcm9taXNlPEJNYXBJbnN0YW5jZT5cclxuICBwcml2YXRlIG1hcFJlc29sdmVyOiAodmFsdWU6IEJNYXBJbnN0YW5jZSkgPT4gdm9pZFxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoU2NyaXB0TG9hZGVyQ29uZmlnKSBjb25maWc6IFNjcmlwdExvYWRlckNvbmZpZyxcclxuICAgIHByaXZhdGUgbG9hZGVyOiBTY3JpcHRMb2FkZXJcclxuICApIHtcclxuICAgIG51bGxDaGVjayhjb25maWcuYWssICdhayBtdXN0IGJlIHByb3ZpZGVkJylcclxuXHJcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZ1xyXG5cclxuICAgIHRoaXMubWFwID0gbmV3IFByb21pc2U8Qk1hcEluc3RhbmNlPigocmVzb2x2ZTogKCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICB0aGlzLm1hcFJlc29sdmVyID0gcmVzb2x2ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVNYXAoXHJcbiAgICBlbDogSFRNTEVsZW1lbnQsXHJcbiAgICBtYXBPcHRpb25zOiBNYXBPcHRpb25zXHJcbiAgKTogUHJvbWlzZTxCTWFwSW5zdGFuY2U+IHtcclxuICAgIGNvbnN0IFVSTCA9IGBodHRwczovL2FwaS5tYXAuYmFpZHUuY29tL2FwaT92PTIuMCZhaz0ke3RoaXMuY29uZmlnLmFrfSZjYWxsYmFjaz1iYWlkdW1hcGluaXRgXHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRlci5sb2FkKFVSTCwgdHJ1ZSwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyB3aW5kb3cuQk1hcC5NYXAoZWwsIG9taXQobWFwT3B0aW9ucywgJ21hcFR5cGUnKSlcclxuICAgICAgICB0aGlzLnNldE9wdGlvbnMobWFwT3B0aW9ucylcclxuICAgICAgICB0aGlzLm1hcFJlc29sdmVyKG1hcClcclxuICAgICAgICByZXNvbHZlKG1hcClcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRzOiBNYXBPcHRpb25zKTogdm9pZCB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGRpc2FibGVEcmFnZ2luZyxcclxuICAgICAgZW5hYmxlU2Nyb2xsV2hlZWxab29tLFxyXG4gICAgICBkaXNhYmxlRG91YmxlQ2xpY2tab29tLFxyXG4gICAgICBlbmFibGVLZXlib2FyZCxcclxuICAgICAgZW5hYmxlSW5lcnRpYWxEcmFnZ2luZyxcclxuICAgICAgZW5hYmxlQXV0b1Jlc2l6ZSxcclxuICAgICAgZW5hYmxlQ29udGludW91c1pvb20sXHJcbiAgICAgIGRpc2FibGVQaW5jaFRvWm9vbVxyXG4gICAgfSA9IG9wdHNcclxuXHJcbiAgICBpZiAoaXNCb29sZWFuKGRpc2FibGVEcmFnZ2luZykpIHtcclxuICAgICAgdGhpcy5tYXAudGhlbihtYXAgPT5cclxuICAgICAgICBtYXBbKGRpc2FibGVEcmFnZ2luZyA/ICdkaXNhYmxlJyA6ICdlbmFibGUnKSArICdEcmFnZ2luZyddKClcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKGlzQm9vbGVhbihlbmFibGVTY3JvbGxXaGVlbFpvb20pKSB7XHJcbiAgICAgIHRoaXMubWFwLnRoZW4obWFwID0+XHJcbiAgICAgICAgbWFwW1xyXG4gICAgICAgICAgKGVuYWJsZVNjcm9sbFdoZWVsWm9vbSA/ICdlbmFibGUnIDogJ2Rpc2FibGUnKSArICdTY3JvbGxXaGVlbFpvb20nXHJcbiAgICAgICAgXSgpXHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIGlmIChpc0Jvb2xlYW4oZW5hYmxlQXV0b1Jlc2l6ZSkpIHtcclxuICAgICAgdGhpcy5tYXAudGhlbihtYXAgPT5cclxuICAgICAgICBtYXBbKGVuYWJsZUF1dG9SZXNpemUgPyAnZW5hYmxlJyA6ICdkaXNhYmxlJykgKyAnQXV0b1Jlc2l6ZSddKClcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKGlzQm9vbGVhbihkaXNhYmxlRG91YmxlQ2xpY2tab29tKSkge1xyXG4gICAgICB0aGlzLm1hcC50aGVuKG1hcCA9PlxyXG4gICAgICAgIG1hcFtcclxuICAgICAgICAgIChkaXNhYmxlRG91YmxlQ2xpY2tab29tID8gJ2Rpc2FibGUnIDogJ2VuYWJsZScpICsgJ0RvdWJsZUNsaWNrWm9vbSdcclxuICAgICAgICBdKClcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKGlzQm9vbGVhbihlbmFibGVLZXlib2FyZCkpIHtcclxuICAgICAgdGhpcy5tYXAudGhlbihtYXAgPT5cclxuICAgICAgICBtYXBbKGVuYWJsZUtleWJvYXJkID8gJ2VuYWJsZScgOiAnZGlzYWJsZScpICsgJ0tleWJvYXJkJ10oKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBpZiAoaXNCb29sZWFuKGVuYWJsZUluZXJ0aWFsRHJhZ2dpbmcpKSB7XHJcbiAgICAgIHRoaXMubWFwLnRoZW4obWFwID0+XHJcbiAgICAgICAgbWFwW1xyXG4gICAgICAgICAgKGVuYWJsZUluZXJ0aWFsRHJhZ2dpbmcgPyAnZW5hYmxlJyA6ICdkaXNhYmxlJykgKyAnSW5lcnRpYWxEcmFnZ2luZydcclxuICAgICAgICBdKClcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKGlzQm9vbGVhbihlbmFibGVDb250aW51b3VzWm9vbSkpIHtcclxuICAgICAgdGhpcy5tYXAudGhlbihtYXAgPT5cclxuICAgICAgICBtYXBbKGVuYWJsZUNvbnRpbnVvdXNab29tID8gJ2VuYWJsZScgOiAnZGlzYWJsZScpICsgJ0NvbnRpbnVvdXNab29tJ10oKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBpZiAoaXNCb29sZWFuKGRpc2FibGVQaW5jaFRvWm9vbSkpIHtcclxuICAgICAgdGhpcy5tYXAudGhlbihtYXAgPT5cclxuICAgICAgICBtYXBbKGRpc2FibGVQaW5jaFRvWm9vbSA/ICdkaXNhYmxlJyA6ICdlbmFibGUnKSArICdQaW5jaFRvWm9vbSddKClcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc051bGwob3B0cy5jdXJzb3IpKSB7XHJcbiAgICAgIHRoaXMubWFwLnRoZW4obWFwID0+IG1hcC5zZXREZWZhdWx0Q3Vyc29yKG9wdHMuY3Vyc29yKSlcclxuICAgIH1cclxuICAgIGlmICghaXNOdWxsKG9wdHMuZHJhZ2dpbmdDdXJzb3IpKSB7XHJcbiAgICAgIHRoaXMubWFwLnRoZW4obWFwID0+IG1hcC5zZXREcmFnZ2luZ0N1cnNvcihvcHRzLmRyYWdnaW5nQ3Vyc29yKSlcclxuICAgIH1cclxuICAgIGlmICghaXNOdWxsKG9wdHMuY3VycmVudENpdHkpKSB7XHJcbiAgICAgIHRoaXMubWFwLnRoZW4obWFwID0+IG1hcC5zZXRDdXJyZW50Q2l0eShvcHRzLmN1cnJlbnRDaXR5KSlcclxuICAgIH1cclxuICAgIGlmICghaXNOdWxsKG9wdHMuY2VudGVyQW5kWm9vbSkpIHtcclxuICAgICAgdGhpcy5tYXAudGhlbihtYXAgPT4ge1xyXG4gICAgICAgIG1hcC5jZW50ZXJBbmRab29tKHRvUG9pbnQob3B0cy5jZW50ZXJBbmRab29tKSwgb3B0cy5jZW50ZXJBbmRab29tLnpvb20pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZiAoIWlzTnVsbChvcHRzLm1hcFR5cGUpKSB7XHJcbiAgICAgIHRoaXMubWFwLnRoZW4obWFwID0+IHtcclxuICAgICAgICBjb25zdCByZWFsVHlwZSA9IGlzTWFwVHlwZUVudW0ob3B0cy5tYXBUeXBlKVxyXG4gICAgICAgICAgPyB3aW5kb3dbb3B0cy5tYXBUeXBlXVxyXG4gICAgICAgICAgOiBvcHRzLm1hcFR5cGVcclxuICAgICAgICBtYXAuc2V0TWFwVHlwZShyZWFsVHlwZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRPdmVybGF5KFxyXG4gICAgY2I6IChtYXA6IEJNYXBJbnN0YW5jZSkgPT4gT3ZlcmxheVxyXG4gICk6IFByb21pc2U8eyBtYXA6IEJNYXBJbnN0YW5jZTsgb3ZlcmxheTogT3ZlcmxheSB9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXAudGhlbigobWFwOiBCTWFwSW5zdGFuY2UpID0+IHtcclxuICAgICAgY29uc3Qgb3ZlcmxheSA9IGNiKG1hcClcclxuICAgICAgbWFwLmFkZE92ZXJsYXkob3ZlcmxheSlcclxuICAgICAgcmV0dXJuIHsgbWFwLCBvdmVybGF5IH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlT3ZlcmxheShvdmVybGF5OiBPdmVybGF5KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXAudGhlbigobWFwOiBCTWFwSW5zdGFuY2UpID0+IHtcclxuICAgICAgbWFwLnJlbW92ZU92ZXJsYXkob3ZlcmxheSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkVGlsZUxheWVyKFxyXG4gICAgY2I6IChtYXA6IEJNYXBJbnN0YW5jZSkgPT4gQlRpbGVMYXllclxyXG4gICk6IFByb21pc2U8eyBtYXA6IEJNYXBJbnN0YW5jZTsgdGlsZWxheWVyOiBCVGlsZUxheWVyIH0+IHtcclxuICAgIHJldHVybiB0aGlzLm1hcC50aGVuKChtYXA6IEJNYXBJbnN0YW5jZSkgPT4ge1xyXG4gICAgICBjb25zdCB0aWxlbGF5ZXIgPSBjYihtYXApXHJcbiAgICAgIG1hcC5hZGRUaWxlTGF5ZXIodGlsZWxheWVyKVxyXG4gICAgICByZXR1cm4geyBtYXAsIHRpbGVsYXllciB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVRpbGVMYXllcih0aWxlbGF5ZXI6IEJUaWxlTGF5ZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLm1hcC50aGVuKChtYXA6IEJNYXBJbnN0YW5jZSkgPT4ge1xyXG4gICAgICBtYXAucmVtb3ZlT3ZlcmxheSh0aWxlbGF5ZXIpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZENvbnRyb2woXHJcbiAgICBjYjogKG1hcDogQk1hcEluc3RhbmNlKSA9PiBCQ29udHJvbFxyXG4gICk6IFByb21pc2U8eyBtYXA6IEJNYXBJbnN0YW5jZTsgY29udHJvbDogQkNvbnRyb2wgfT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwLnRoZW4oKG1hcDogQk1hcEluc3RhbmNlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBjYihtYXApXHJcbiAgICAgIG1hcC5hZGRDb250cm9sKGNvbnRyb2wpXHJcbiAgICAgIHJldHVybiB7IG1hcCwgY29udHJvbCB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUNvbnRyb2woY29udHJvbDogQkNvbnRyb2wpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLm1hcC50aGVuKChtYXA6IEJNYXBJbnN0YW5jZSkgPT4ge1xyXG4gICAgICBtYXAucmVtb3ZlQ29udHJvbChjb250cm9sKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXROYXRpdmVNYXAoKTogUHJvbWlzZTxCTWFwSW5zdGFuY2U+IHtcclxuICAgIHJldHVybiB0aGlzLm1hcFxyXG4gIH1cclxufVxyXG4iXX0=