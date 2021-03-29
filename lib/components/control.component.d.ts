import { OnDestroy, OnInit } from '@angular/core';
import { MapService } from '../providers/mapService';
export declare class ControlComponent implements OnInit, OnDestroy {
    private service;
    private type;
    private options;
    private loaded;
    private control;
    constructor(service: MapService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private createControl;
}
