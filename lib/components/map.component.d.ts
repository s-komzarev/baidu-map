import { OnChanges, OnInit, OnDestroy, AfterViewInit, SimpleChange } from '@angular/core';
import { MapService } from '../providers/mapService';
export declare class MapComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    private service;
    private options;
    private loaded;
    private clicked;
    private mapInstance;
    constructor(service: MapService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    private addListener;
}
