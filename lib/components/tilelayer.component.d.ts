import { OnDestroy, OnInit } from '@angular/core';
import { MapService } from '../providers/mapService';
export declare class TileLayerComponent implements OnInit, OnDestroy {
    private service;
    private getTilesUrl;
    private options;
    private loaded;
    private tilelayer;
    constructor(service: MapService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
