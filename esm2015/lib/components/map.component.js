import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MapService } from '../providers/mapService';
import { nullCheck } from '../helpers/validate';
let MapComponent = class MapComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
        this.clicked = new EventEmitter();
    }
    ngOnInit() {
        // do nothing
    }
    ngAfterViewInit() {
        nullCheck(this.options, 'options is required for <baidu-map>');
        nullCheck(this.options.centerAndZoom, 'options.centerAndZoom is required for <baidu-map>');
        this.service
            .createMap(this.mapInstance.nativeElement, this.options)
            .then(map => {
            this.loaded.emit(map);
            return map;
        })
            .then(map => {
            this.addListener(map);
        });
    }
    ngOnChanges(changes) {
        const opts = changes.options.currentValue;
        if (!opts) {
            return console.warn('MapOptions change was ignored since you are passing empty value');
        }
        this.service.setOptions(opts);
    }
    ngOnDestroy() {
        console.log('on map destroy');
    }
    addListener(map) {
        map.addEventListener('click', (e) => {
            this.clicked.emit(e);
        });
    }
};
MapComponent.ctorParameters = () => [
    { type: MapService }
];
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
        template: `
    <div #mapinstance class="baidu-map-instance"></div>
    <div class="baidu-map-offline">
      <label>{{ 'NO_NETWORK' }}</label>
    </div>
    <div class="tranclude-content">
      <ng-content></ng-content>
    </div>
  `,
        styles: [`
      .baidu-map-instance {
        width: 100%;
        height: 100%;
        display: none;
      }
      .baidu-map-offline {
        width: 100%;
        height: 100%;
        background-color: #e6e6e6;
        position: relative;
        display: none;
      }
      .baidu-map-offline label {
        fontsize: 30px;
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
      .tranclude-content {
        display: none;
      }
    `]
    })
], MapComponent);
export { MapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFLTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQUdwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUE7QUEyQy9DLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFTdkIsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUxyQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUMzQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUlKLENBQUM7SUFFM0MsUUFBUTtRQUNOLGFBQWE7SUFDZixDQUFDO0lBRU0sZUFBZTtRQUNwQixTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxxQ0FBcUMsQ0FBQyxDQUFBO1FBQzlELFNBQVMsQ0FDUCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFDMUIsbURBQW1ELENBQ3BELENBQUE7UUFFRCxJQUFJLENBQUMsT0FBTzthQUNULFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3JCLE9BQU8sR0FBRyxDQUFBO1FBQ1osQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxXQUFXLENBQUMsT0FBaUQ7UUFDbEUsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUEwQixDQUFBO1FBQ3ZELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQ2pCLGlFQUFpRSxDQUNsRSxDQUFBO1NBQ0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sV0FBVztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVPLFdBQVcsQ0FBQyxHQUFpQjtRQUNuQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUEzQzhCLFVBQVU7O0FBUDlCO0lBQVIsS0FBSyxFQUFFOzZDQUE0QjtBQUUxQjtJQUFULE1BQU0sRUFBRTs0Q0FBb0M7QUFDbkM7SUFBVCxNQUFNLEVBQUU7NkNBQXFDO0FBRUQ7SUFBNUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztpREFBZ0M7QUFQakUsWUFBWTtJQXpDeEIsU0FBUyxDQUFDO1FBQ1QsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO1FBQ3ZCLFFBQVEsRUFBRSxXQUFXO1FBNkJyQixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7aUJBbkNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBeUJDO0tBV0osQ0FBQztHQUNXLFlBQVksQ0FvRHhCO1NBcERZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2UsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvbWFwU2VydmljZSdcclxuaW1wb3J0IHsgQk1hcEluc3RhbmNlLCBNYXBPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMvTWFwJ1xyXG5cclxuaW1wb3J0IHsgbnVsbENoZWNrIH0gZnJvbSAnLi4vaGVscGVycy92YWxpZGF0ZSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHByb3ZpZGVyczogW01hcFNlcnZpY2VdLFxyXG4gIHNlbGVjdG9yOiAnYmFpZHUtbWFwJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmJhaWR1LW1hcC1pbnN0YW5jZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLmJhaWR1LW1hcC1vZmZsaW5lIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuYmFpZHUtbWFwLW9mZmxpbmUgbGFiZWwge1xyXG4gICAgICAgIGZvbnRzaXplOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgfVxyXG4gICAgICAudHJhbmNsdWRlLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2ICNtYXBpbnN0YW5jZSBjbGFzcz1cImJhaWR1LW1hcC1pbnN0YW5jZVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImJhaWR1LW1hcC1vZmZsaW5lXCI+XHJcbiAgICAgIDxsYWJlbD57eyAnTk9fTkVUV09SSycgfX08L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidHJhbmNsdWRlLWNvbnRlbnRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBwcml2YXRlIG9wdGlvbnM6IE1hcE9wdGlvbnNcclxuXHJcbiAgQE91dHB1dCgpIHByaXZhdGUgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpXHJcbiAgQE91dHB1dCgpIHByaXZhdGUgY2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG5cclxuICBAVmlld0NoaWxkKCdtYXBpbnN0YW5jZScsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIG1hcEluc3RhbmNlOiBFbGVtZW50UmVmXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogTWFwU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBkbyBub3RoaW5nXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgbnVsbENoZWNrKHRoaXMub3B0aW9ucywgJ29wdGlvbnMgaXMgcmVxdWlyZWQgZm9yIDxiYWlkdS1tYXA+JylcclxuICAgIG51bGxDaGVjayhcclxuICAgICAgdGhpcy5vcHRpb25zLmNlbnRlckFuZFpvb20sXHJcbiAgICAgICdvcHRpb25zLmNlbnRlckFuZFpvb20gaXMgcmVxdWlyZWQgZm9yIDxiYWlkdS1tYXA+J1xyXG4gICAgKVxyXG5cclxuICAgIHRoaXMuc2VydmljZVxyXG4gICAgICAuY3JlYXRlTWFwKHRoaXMubWFwSW5zdGFuY2UubmF0aXZlRWxlbWVudCwgdGhpcy5vcHRpb25zKVxyXG4gICAgICAudGhlbihtYXAgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGVkLmVtaXQobWFwKVxyXG4gICAgICAgIHJldHVybiBtYXBcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4obWFwID0+IHtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKG1hcClcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XHJcbiAgICBjb25zdCBvcHRzID0gY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSBhcyBNYXBPcHRpb25zXHJcbiAgICBpZiAoIW9wdHMpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihcclxuICAgICAgICAnTWFwT3B0aW9ucyBjaGFuZ2Ugd2FzIGlnbm9yZWQgc2luY2UgeW91IGFyZSBwYXNzaW5nIGVtcHR5IHZhbHVlJ1xyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICB0aGlzLnNlcnZpY2Uuc2V0T3B0aW9ucyhvcHRzKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xyXG4gICAgY29uc29sZS5sb2coJ29uIG1hcCBkZXN0cm95JylcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkTGlzdGVuZXIobWFwOiBCTWFwSW5zdGFuY2UpIHtcclxuICAgIG1hcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5jbGlja2VkLmVtaXQoZSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==