import { BControl } from '../types/Control';
import { ScriptLoaderConfig } from './scriptLoader';
import { BMapInstance, MapOptions } from '../types/Map';
import { Overlay } from '../types/Overlay';
import { BTileLayer } from '../types/TileLayer';
import { ScriptLoader } from './scriptLoader';
export declare class MapService {
    private loader;
    private config;
    private map;
    private mapResolver;
    constructor(config: ScriptLoaderConfig, loader: ScriptLoader);
    createMap(el: HTMLElement, mapOptions: MapOptions): Promise<BMapInstance>;
    setOptions(opts: MapOptions): void;
    addOverlay(cb: (map: BMapInstance) => Overlay): Promise<{
        map: BMapInstance;
        overlay: Overlay;
    }>;
    removeOverlay(overlay: Overlay): Promise<void>;
    addTileLayer(cb: (map: BMapInstance) => BTileLayer): Promise<{
        map: BMapInstance;
        tilelayer: BTileLayer;
    }>;
    removeTileLayer(tilelayer: BTileLayer): Promise<void>;
    addControl(cb: (map: BMapInstance) => BControl): Promise<{
        map: BMapInstance;
        control: BControl;
    }>;
    removeControl(control: BControl): Promise<void>;
    getNativeMap(): Promise<BMapInstance>;
}
