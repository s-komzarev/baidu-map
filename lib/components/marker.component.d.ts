import { OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { MapService } from '../providers/mapService';
export declare class MarkerComponent implements OnInit, OnChanges, OnDestroy {
    private service;
    private point;
    private options;
    private loaded;
    private clicked;
    private marker;
    constructor(service: MapService);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    private setOptions;
    private addListener;
}
