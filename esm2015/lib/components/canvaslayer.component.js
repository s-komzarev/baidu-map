import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { MapService } from '../providers/mapService';
import { isNumber } from '../helpers/object';
let CanvasLayerComponent = class CanvasLayerComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    ngOnInit() {
        this.service
            .addOverlay((map) => {
            this.canvaslayer = new window.BMap.CanvasLayer(this.getOptions(this.options, map));
            return this.canvaslayer;
        })
            .then(() => {
            this.loaded.emit(this.canvaslayer);
        });
    }
    ngOnDestroy() {
        this.service.removeOverlay(this.canvaslayer);
    }
    getOptions(options, map) {
        if (!options) {
            return;
        }
        const opts = {};
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
    }
};
CanvasLayerComponent.ctorParameters = () => [
    { type: MapService }
];
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
export { CanvasLayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItYmFpZHUtbWFwLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2FudmFzbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQU1wRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFNNUMsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFTL0IsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUovQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUlPLENBQUM7SUFFcEMsUUFBUTtRQUNiLElBQUksQ0FBQyxPQUFPO2FBQ1QsVUFBVSxDQUFDLENBQUMsR0FBaUIsRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUNuQyxDQUFBO1lBQ0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO1FBQ3pCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDcEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVPLFVBQVUsQ0FDaEIsT0FBMkIsRUFDM0IsR0FBaUI7UUFFakIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU07U0FDUDtRQUNELE1BQU0sSUFBSSxHQUF3QixFQUFFLENBQUE7UUFFcEMsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQTtTQUM3QjtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUE7U0FDakM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRztnQkFDWixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUN6QyxDQUFDLENBQUE7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztDQUNGLENBQUE7O1lBMUM4QixVQUFVOztBQVB2QztJQURDLEtBQUssRUFBRTtxREFDMkI7QUFHbkM7SUFEQyxNQUFNLEVBQUU7b0RBQzBCO0FBTHhCLG9CQUFvQjtJQUhoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtLQUN4QixDQUFDO0dBQ1csb0JBQW9CLENBbURoQztTQW5EWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9tYXBTZXJ2aWNlJ1xyXG5pbXBvcnQge1xyXG4gIEJDYW52YXNMYXllcixcclxuICBDYW52YXNMYXllck9wdGlvbnMsXHJcbiAgQkNhbnZhc0xheWVyT3B0aW9uc1xyXG59IGZyb20gJy4uL3R5cGVzL0NhbnZhc0xheWVyJ1xyXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uL2hlbHBlcnMvb2JqZWN0J1xyXG5pbXBvcnQgeyBCTWFwSW5zdGFuY2UgfSBmcm9tICcuLi90eXBlcy9NYXAnXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2NhbnZhc2xheWVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FudmFzTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICBwcml2YXRlIG9wdGlvbnM6IENhbnZhc0xheWVyT3B0aW9uc1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwcml2YXRlIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICBwcml2YXRlIGNhbnZhc2xheWVyOiBCQ2FudmFzTGF5ZXJcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBNYXBTZXJ2aWNlKSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgLmFkZE92ZXJsYXkoKG1hcDogQk1hcEluc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNsYXllciA9IG5ldyB3aW5kb3cuQk1hcC5DYW52YXNMYXllcihcclxuICAgICAgICAgIHRoaXMuZ2V0T3B0aW9ucyh0aGlzLm9wdGlvbnMsIG1hcClcclxuICAgICAgICApXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzbGF5ZXJcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGVkLmVtaXQodGhpcy5jYW52YXNsYXllcilcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc2VydmljZS5yZW1vdmVPdmVybGF5KHRoaXMuY2FudmFzbGF5ZXIpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE9wdGlvbnMoXHJcbiAgICBvcHRpb25zOiBDYW52YXNMYXllck9wdGlvbnMsXHJcbiAgICBtYXA6IEJNYXBJbnN0YW5jZVxyXG4gICk6IEJDYW52YXNMYXllck9wdGlvbnMgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3Qgb3B0czogQkNhbnZhc0xheWVyT3B0aW9ucyA9IHt9XHJcblxyXG4gICAgaWYgKGlzTnVtYmVyKG9wdGlvbnMuekluZGV4KSkge1xyXG4gICAgICBvcHRzLnpJbmRleCA9IG9wdGlvbnMuekluZGV4XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5wYW5lTmFtZSkge1xyXG4gICAgICBvcHRzLnBhbmVOYW1lID0gb3B0aW9ucy5wYW5lTmFtZVxyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMudXBkYXRlKSB7XHJcbiAgICAgIG9wdHMudXBkYXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMudXBkYXRlKG1hcCwgdGhpcy5jYW52YXMpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3B0c1xyXG4gIH1cclxufVxyXG4iXX0=