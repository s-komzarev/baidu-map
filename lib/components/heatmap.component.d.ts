import { OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { MapService } from '../providers/mapService';
import { ScriptLoader } from '../providers/scriptLoader';
export declare class HeatmapComponent implements OnInit, OnChanges, OnDestroy {
    private service;
    private scriptLoader;
    private dataset;
    private options;
    private loaded;
    private heatmap;
    constructor(service: MapService, scriptLoader: ScriptLoader);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
}
