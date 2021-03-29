import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { MapService } from '../providers/mapService';
let TrafficLayerComponent = class TrafficLayerComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    ngOnInit() {
        this.service
            .addTileLayer(() => {
            this.trafficlayer = new window.BMap.TrafficLayer(this.options);
            return this.trafficlayer;
        })
            .then(() => {
            this.loaded.emit(this.trafficlayer);
        });
    }
    ngOnDestroy() {
        this.service.removeTileLayer(this.trafficlayer);
    }
};
TrafficLayerComponent.ctorParameters = () => [
    { type: MapService }
];
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
export { TrafficLayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpY2xheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RyYWZmaWNsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBTXBELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBU2hDLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFKL0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFJTyxDQUFDO0lBRXBDLFFBQVE7UUFDYixJQUFJLENBQUMsT0FBTzthQUNULFlBQVksQ0FBQyxHQUFHLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUM5RCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7UUFDMUIsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNyQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0NBQ0YsQ0FBQTs7WUFoQjhCLFVBQVU7O0FBUHZDO0lBREMsS0FBSyxFQUFFO3NEQUM0QjtBQUdwQztJQURDLE1BQU0sRUFBRTtxREFDMEI7QUFMeEIscUJBQXFCO0lBSGpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO0tBQ3pCLENBQUM7R0FDVyxxQkFBcUIsQ0F5QmpDO1NBekJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL21hcFNlcnZpY2UnXHJcbmltcG9ydCB7IEJUcmFmZmljTGF5ZXIsIFRyYWZmaWNMYXllck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9UcmFmZmljTGF5ZXInXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ3RyYWZmaWNsYXllcidcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYWZmaWNMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKVxyXG4gIHByaXZhdGUgb3B0aW9uczogVHJhZmZpY0xheWVyT3B0aW9uc1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwcml2YXRlIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICBwcml2YXRlIHRyYWZmaWNsYXllcjogQlRyYWZmaWNMYXllclxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IE1hcFNlcnZpY2UpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAuYWRkVGlsZUxheWVyKCgpID0+IHtcclxuICAgICAgICB0aGlzLnRyYWZmaWNsYXllciA9IG5ldyB3aW5kb3cuQk1hcC5UcmFmZmljTGF5ZXIodGhpcy5vcHRpb25zKVxyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYWZmaWNsYXllclxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkZWQuZW1pdCh0aGlzLnRyYWZmaWNsYXllcilcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc2VydmljZS5yZW1vdmVUaWxlTGF5ZXIodGhpcy50cmFmZmljbGF5ZXIpXHJcbiAgfVxyXG59XHJcbiJdfQ==