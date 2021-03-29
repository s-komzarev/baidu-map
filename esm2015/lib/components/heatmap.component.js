import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { nullCheck } from '../helpers/validate';
import { MapService } from '../providers/mapService';
import { ScriptLoader } from '../providers/scriptLoader';
const LIB_URL = `https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js`;
let HeatmapComponent = class HeatmapComponent {
    constructor(service, scriptLoader) {
        this.service = service;
        this.scriptLoader = scriptLoader;
        this.loaded = new EventEmitter();
    }
    ngOnInit() {
        nullCheck(this.dataset, 'dataset is required for <heatmap>');
        this.service.getNativeMap().then(() => {
            return this.scriptLoader.load(LIB_URL, false, () => {
                this.service
                    .addOverlay(() => {
                    return (this.heatmap = new window.BMapLib.HeatmapOverlay(this.options));
                })
                    .then(() => {
                    this.loaded.emit(this.heatmap);
                    if (this.dataset) {
                        this.heatmap.setDataSet(this.dataset);
                    }
                });
            });
        });
    }
    ngOnChanges(changes) {
        if (changes.dataset && !changes.dataset.isFirstChange()) {
            this.heatmap.setDataSet(changes.dataset.currentValue);
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.heatmap.setOptions(changes.options.currentValue);
        }
    }
    ngOnDestroy() {
        this.service.removeOverlay(this.heatmap);
    }
};
HeatmapComponent.ctorParameters = () => [
    { type: MapService },
    { type: ScriptLoader }
];
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
export { HeatmapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhdG1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1iYWlkdS1tYXAvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWF0bWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBRXBELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQTtBQUV4RCxNQUFNLE9BQU8sR0FBRyxrRUFBa0UsQ0FBQTtBQUtsRixJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQVEzQixZQUNVLE9BQW1CLEVBQ25CLFlBQTBCO1FBRDFCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFObEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFPMUMsQ0FBQztJQUVHLFFBQVE7UUFDYixTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxtQ0FBbUMsQ0FBQyxDQUFBO1FBRTVELElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO2dCQUNqRCxJQUFJLENBQUMsT0FBTztxQkFDVCxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQ3RELElBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQyxDQUFBO2dCQUNKLENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUNULElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO3dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7cUJBQ3RDO2dCQUNILENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTSxXQUFXLENBQUMsT0FBaUQ7UUFDbEUsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO1NBQ3REO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO1NBQ3REO0lBQ0gsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzFDLENBQUM7Q0FDRixDQUFBOztZQXJDb0IsVUFBVTtZQUNMLFlBQVk7O0FBVDNCO0lBQVIsS0FBSyxFQUFFO2lEQUE2QjtBQUM1QjtJQUFSLEtBQUssRUFBRTtpREFBZ0M7QUFFOUI7SUFBVCxNQUFNLEVBQUU7Z0RBQW9DO0FBSmxDLGdCQUFnQjtJQUg1QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztLQUNwQixDQUFDO0dBQ1csZ0JBQWdCLENBOEM1QjtTQTlDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5pbXBvcnQgeyBudWxsQ2hlY2sgfSBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRlJ1xyXG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL21hcFNlcnZpY2UnXHJcbmltcG9ydCB7IEJIZWF0bWFwLCBIZWF0bWFwT3B0aW9ucywgSGVhdG1hcERhdGEgfSBmcm9tICcuLi90eXBlcy9IZWF0bWFwJ1xyXG5pbXBvcnQgeyBTY3JpcHRMb2FkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvc2NyaXB0TG9hZGVyJ1xyXG5cclxuY29uc3QgTElCX1VSTCA9IGBodHRwczovL2FwaS5tYXAuYmFpZHUuY29tL2xpYnJhcnkvSGVhdG1hcC8yLjAvc3JjL0hlYXRtYXBfbWluLmpzYFxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdoZWF0bWFwJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhdG1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHByaXZhdGUgZGF0YXNldDogSGVhdG1hcERhdGFcclxuICBASW5wdXQoKSBwcml2YXRlIG9wdGlvbnM6IEhlYXRtYXBPcHRpb25zXHJcblxyXG4gIEBPdXRwdXQoKSBwcml2YXRlIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICBwcml2YXRlIGhlYXRtYXA6IEJIZWF0bWFwXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBNYXBTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzY3JpcHRMb2FkZXI6IFNjcmlwdExvYWRlclxyXG4gICkge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgbnVsbENoZWNrKHRoaXMuZGF0YXNldCwgJ2RhdGFzZXQgaXMgcmVxdWlyZWQgZm9yIDxoZWF0bWFwPicpXHJcblxyXG4gICAgdGhpcy5zZXJ2aWNlLmdldE5hdGl2ZU1hcCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5zY3JpcHRMb2FkZXIubG9hZChMSUJfVVJMLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAgICAgLmFkZE92ZXJsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuaGVhdG1hcCA9IG5ldyB3aW5kb3cuQk1hcExpYi5IZWF0bWFwT3ZlcmxheShcclxuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNcclxuICAgICAgICAgICAgKSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkLmVtaXQodGhpcy5oZWF0bWFwKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhc2V0KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oZWF0bWFwLnNldERhdGFTZXQodGhpcy5kYXRhc2V0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhc2V0ICYmICFjaGFuZ2VzLmRhdGFzZXQuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMuaGVhdG1hcC5zZXREYXRhU2V0KGNoYW5nZXMuZGF0YXNldC5jdXJyZW50VmFsdWUpXHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zICYmICFjaGFuZ2VzLm9wdGlvbnMuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMuaGVhdG1hcC5zZXRPcHRpb25zKGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UucmVtb3ZlT3ZlcmxheSh0aGlzLmhlYXRtYXApXHJcbiAgfVxyXG59XHJcbiJdfQ==