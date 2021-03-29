import { OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { MapService } from '../providers/mapService';
export declare class CircleComponent implements OnInit, OnChanges, OnDestroy {
    private service;
    private center;
    private radius;
    private options;
    private loaded;
    private circle;
    constructor(service: MapService);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    private setOptions;
}
