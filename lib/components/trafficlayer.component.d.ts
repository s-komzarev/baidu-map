import { OnDestroy, OnInit } from '@angular/core';
import { MapService } from '../providers/mapService';
export declare class TrafficLayerComponent implements OnInit, OnDestroy {
    private service;
    private options;
    private loaded;
    private trafficlayer;
    constructor(service: MapService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
