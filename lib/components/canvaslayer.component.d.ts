import { OnDestroy, OnInit } from '@angular/core';
import { MapService } from '../providers/mapService';
export declare class CanvasLayerComponent implements OnInit, OnDestroy {
    private service;
    private options;
    private loaded;
    private canvaslayer;
    constructor(service: MapService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private getOptions;
}
