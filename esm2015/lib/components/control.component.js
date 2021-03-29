import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { toGeolocationOptions, toMapTypeControlOptions, toNavigationControlOptions, toOverviewMapControlOptions, toScaleControlOptions } from '../helpers/transformer';
import { nullCheck } from '../helpers/validate';
import { MapService } from '../providers/mapService';
let ControlComponent = class ControlComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    ngOnInit() {
        nullCheck(this.type, 'type is required for <control>');
        this.service
            .addControl(() => {
            this.control = this.createControl(this.type, this.options);
            return this.control;
        })
            .then(({ control }) => {
            this.loaded.emit(control);
        });
    }
    ngOnDestroy() {
        this.service.removeControl(this.control);
    }
    createControl(type, options) {
        if (type === 'navigation') {
            return new window.BMap.NavigationControl(toNavigationControlOptions(options));
        }
        if (type === 'overviewmap') {
            return new window.BMap.OverviewMapControl(toOverviewMapControlOptions(options));
        }
        if (type === 'scale') {
            return new window.BMap.ScaleControl(toScaleControlOptions(options));
        }
        if (type === 'maptype') {
            return new window.BMap.MapTypeControl(toMapTypeControlOptions(options));
        }
        if (type === 'geolocation') {
            return new window.BMap.GeolocationControl(toGeolocationOptions(options));
        }
        if (type === 'panorama') {
            return new window.BMap.PanoramaControl();
        }
        throw new Error(`Unsupported type:${type} of control`);
    }
};
ControlComponent.ctorParameters = () => [
    { type: MapService }
];
tslib_1.__decorate([
    Input()
], ControlComponent.prototype, "type", void 0);
tslib_1.__decorate([
    Input()
], ControlComponent.prototype, "options", void 0);
tslib_1.__decorate([
    Output()
], ControlComponent.prototype, "loaded", void 0);
ControlComponent = tslib_1.__decorate([
    Directive({
        selector: 'control'
    })
], ControlComponent);
export { ControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1iYWlkdS1tYXAvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHUCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHVCQUF1QixFQUN2QiwwQkFBMEIsRUFDMUIsMkJBQTJCLEVBQzNCLHFCQUFxQixFQUN0QixNQUFNLHdCQUF3QixDQUFBO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFNcEQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFRM0IsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUpyQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUlILENBQUM7SUFFcEMsUUFBUTtRQUNiLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGdDQUFnQyxDQUFDLENBQUE7UUFFdEQsSUFBSSxDQUFDLE9BQU87YUFDVCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzFELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUNyQixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUVPLGFBQWEsQ0FDbkIsSUFBaUIsRUFDakIsT0FBK0I7UUFFL0IsSUFBSSxJQUFJLEtBQUssWUFBWSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUN0QywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsQ0FDcEMsQ0FBQTtTQUNGO1FBQ0QsSUFBSSxJQUFJLEtBQUssYUFBYSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUN2QywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsQ0FDckMsQ0FBQTtTQUNGO1FBQ0QsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1NBQ3BFO1FBQ0QsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1NBQ3hFO1FBQ0QsSUFBSSxJQUFJLEtBQUssYUFBYSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7U0FDekU7UUFDRCxJQUFJLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDdkIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7U0FDekM7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixJQUFJLGFBQWEsQ0FBQyxDQUFBO0lBQ3hELENBQUM7Q0FDRixDQUFBOztZQS9DOEIsVUFBVTs7QUFQOUI7SUFBUixLQUFLLEVBQUU7OENBQTBCO0FBQ3pCO0lBQVIsS0FBSyxFQUFFO2lEQUF3QztBQUV0QztJQUFULE1BQU0sRUFBRTtnREFBb0M7QUFKbEMsZ0JBQWdCO0lBSDVCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO0tBQ3BCLENBQUM7R0FDVyxnQkFBZ0IsQ0F1RDVCO1NBdkRZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5pbXBvcnQge1xyXG4gIHRvR2VvbG9jYXRpb25PcHRpb25zLFxyXG4gIHRvTWFwVHlwZUNvbnRyb2xPcHRpb25zLFxyXG4gIHRvTmF2aWdhdGlvbkNvbnRyb2xPcHRpb25zLFxyXG4gIHRvT3ZlcnZpZXdNYXBDb250cm9sT3B0aW9ucyxcclxuICB0b1NjYWxlQ29udHJvbE9wdGlvbnNcclxufSBmcm9tICcuLi9oZWxwZXJzL3RyYW5zZm9ybWVyJ1xyXG5pbXBvcnQgeyBudWxsQ2hlY2sgfSBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRlJ1xyXG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL21hcFNlcnZpY2UnXHJcbmltcG9ydCB7IEJDb250cm9sLCBDb250cm9sVHlwZSB9IGZyb20gJy4uL3R5cGVzL0NvbnRyb2wnXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2NvbnRyb2wnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHByaXZhdGUgdHlwZTogQ29udHJvbFR5cGVcclxuICBASW5wdXQoKSBwcml2YXRlIG9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH1cclxuXHJcbiAgQE91dHB1dCgpIHByaXZhdGUgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcblxyXG4gIHByaXZhdGUgY29udHJvbDogQkNvbnRyb2xcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBNYXBTZXJ2aWNlKSB7fVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICBudWxsQ2hlY2sodGhpcy50eXBlLCAndHlwZSBpcyByZXF1aXJlZCBmb3IgPGNvbnRyb2w+JylcclxuXHJcbiAgICB0aGlzLnNlcnZpY2VcclxuICAgICAgLmFkZENvbnRyb2woKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuY3JlYXRlQ29udHJvbCh0aGlzLnR5cGUsIHRoaXMub3B0aW9ucylcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCh7IGNvbnRyb2wgfSkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGVkLmVtaXQoY29udHJvbClcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc2VydmljZS5yZW1vdmVDb250cm9sKHRoaXMuY29udHJvbClcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ29udHJvbChcclxuICAgIHR5cGU6IENvbnRyb2xUeXBlLFxyXG4gICAgb3B0aW9uczogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxyXG4gICk6IEJDb250cm9sIHtcclxuICAgIGlmICh0eXBlID09PSAnbmF2aWdhdGlvbicpIHtcclxuICAgICAgcmV0dXJuIG5ldyB3aW5kb3cuQk1hcC5OYXZpZ2F0aW9uQ29udHJvbChcclxuICAgICAgICB0b05hdmlnYXRpb25Db250cm9sT3B0aW9ucyhvcHRpb25zKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ292ZXJ2aWV3bWFwJykge1xyXG4gICAgICByZXR1cm4gbmV3IHdpbmRvdy5CTWFwLk92ZXJ2aWV3TWFwQ29udHJvbChcclxuICAgICAgICB0b092ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnMob3B0aW9ucylcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICdzY2FsZScpIHtcclxuICAgICAgcmV0dXJuIG5ldyB3aW5kb3cuQk1hcC5TY2FsZUNvbnRyb2wodG9TY2FsZUNvbnRyb2xPcHRpb25zKG9wdGlvbnMpKVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICdtYXB0eXBlJykge1xyXG4gICAgICByZXR1cm4gbmV3IHdpbmRvdy5CTWFwLk1hcFR5cGVDb250cm9sKHRvTWFwVHlwZUNvbnRyb2xPcHRpb25zKG9wdGlvbnMpKVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICdnZW9sb2NhdGlvbicpIHtcclxuICAgICAgcmV0dXJuIG5ldyB3aW5kb3cuQk1hcC5HZW9sb2NhdGlvbkNvbnRyb2wodG9HZW9sb2NhdGlvbk9wdGlvbnMob3B0aW9ucykpXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ3Bhbm9yYW1hJykge1xyXG4gICAgICByZXR1cm4gbmV3IHdpbmRvdy5CTWFwLlBhbm9yYW1hQ29udHJvbCgpXHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHR5cGU6JHt0eXBlfSBvZiBjb250cm9sYClcclxuICB9XHJcbn1cclxuIl19