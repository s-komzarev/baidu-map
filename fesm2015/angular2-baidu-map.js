import { __decorate, __param } from 'tslib';
import { Injectable, Inject, EventEmitter, Input, Output, Directive, ViewChild, Component, NgModule } from '@angular/core';

function isNull(obj) {
    return obj === null || obj === undefined;
}
function isUndefined(obj) {
    return obj === undefined;
}
function isBoolean(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
}
function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
}
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
}
function omit(obj, ...keys) {
    const rawKeys = Object.keys(obj);
    const finalKeys = rawKeys.filter(k => keys.indexOf(k) < 0);
    return finalKeys.reduce((p, v) => {
        p[v] = obj[v];
        return p;
    }, {});
}

var MapTypeEnum;
(function (MapTypeEnum) {
    MapTypeEnum["BMAP_NORMAL_MAP"] = "BMAP_NORMAL_MAP";
    MapTypeEnum["BMAP_PERSPECTIVE_MAP"] = "BMAP_PERSPECTIVE_MAP";
    MapTypeEnum["BMAP_SATELLITE_MAP"] = "BMAP_SATELLITE_MAP";
    MapTypeEnum["BMAP_HYBRID_MAP"] = "BMAP_HYBRID_MAP";
})(MapTypeEnum || (MapTypeEnum = {}));
function isMapTypeEnum(maptype) {
    return !isFunction(maptype.getTileLayer);
}

function toPoint(opts) {
    if (!opts) {
        return new window.BMap.Point();
    }
    return new window.BMap.Point(opts.lng, opts.lat);
}
function toPoints(opts) {
    if (!opts) {
        return [];
    }
    return opts.map(p => {
        return new window.BMap.Point(p.lng, p.lat);
    });
}
function toSize(opts) {
    if (!opts) {
        return new window.BMap.Size();
    }
    return new window.BMap.Size(opts.width, opts.height);
}
function toIcon(url, size, options) {
    if (!size && !options) {
        return new window.BMap.Icon(url);
    }
    if (!size) {
        return new window.BMap.Icon(url, toSize(size));
    }
    const iconOptions = {
        anchor: toSize(options.anchor),
        imageOffset: toSize(options.imageOffset),
        infoWindowAnchor: toSize(options.infoWindowAnchor),
        printImageUrl: options.printImageUrl
    };
    const icon = new window.BMap.Icon(url, toSize(size), iconOptions);
    if (options.imageSize) {
        icon.setImageSize(toSize(options.imageSize));
    }
    return icon;
}
function toMarkerOptions(options) {
    const opts = {};
    if (!options) {
        return opts;
    }
    if (options.offset) {
        opts.offset = toSize(options.offset);
    }
    if (options.icon) {
        opts.icon = toIcon(options.icon.imageUrl, options.icon.size, options.icon);
    }
    if (!isNull(options.enableMassClear)) {
        opts.enableMassClear = options.enableMassClear;
    }
    if (!isNull(options.enableDragging)) {
        opts.enableDragging = options.enableDragging;
    }
    if (!isNull(options.enableClicking)) {
        opts.enableClicking = options.enableClicking;
    }
    if (!isNull(options.raiseOnDrag)) {
        opts.raiseOnDrag = options.raiseOnDrag;
    }
    if (!isNull(options.draggingCursor)) {
        opts.draggingCursor = options.draggingCursor;
    }
    if (!isNull(options.rotation)) {
        opts.rotation = options.rotation;
    }
    if (!isNull(options.title)) {
        opts.title = options.title;
    }
    if (!isNull(options.shadow)) {
        opts.shadow = toIcon(options.shadow.imageUrl, options.shadow.size, options.shadow);
    }
    return opts;
}
function toNavigationControlOptions(options) {
    const opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.enableGeolocation)) {
        opts.enableGeolocation = options.enableGeolocation;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    if (!isNull(options.showZoomInfo)) {
        opts.showZoomInfo = options.showZoomInfo;
    }
    if (!isNull(options.type)) {
        opts.type = options.type;
    }
    return opts;
}
function toOverviewMapControlOptions(options) {
    const opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.isOpen)) {
        opts.isOpen = options.isOpen;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    if (!isNull(options.size)) {
        opts.size = toSize(options.size);
    }
    return opts;
}
function toScaleControlOptions(options) {
    const opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    return opts;
}
function toMapTypeControlOptions(options) {
    const opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.type)) {
        opts.type = options.type;
    }
    if (!isNull(options.mapTypes)) {
        opts.mapTypes = options.mapTypes.map(mapType => {
            return isMapTypeEnum(mapType) ? window[mapType] : mapType;
        });
    }
    return opts;
}
function toGeolocationOptions(options) {
    const opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    if (!isNull(options.enableAutoLocation)) {
        opts.enableAutoLocation = options.enableAutoLocation;
    }
    if (!isNull(options.locationIcon)) {
        opts.locationIcon = toIcon(options.locationIcon.imageUrl, options.locationIcon.size, options.locationIcon);
    }
    if (!isNull(options.showAddressBar)) {
        opts.showAddressBar = options.showAddressBar;
    }
    return opts;
}
function toTextIconStyle(style) {
    const realStyle = {
        url: style.url,
        size: toSize(style.size)
    };
    if (style.anchor) {
        realStyle.anchor = toSize(style.anchor);
    }
    if (style.offset) {
        realStyle.offset = toSize(style.offset);
    }
    if (!isNull(style.textSize)) {
        realStyle.textSize = style.textSize;
    }
    if (!isNull(style.textColor)) {
        realStyle.textColor = style.textColor;
    }
    return realStyle;
}
function toMarkerClustererOptions(options) {
    const opts = {};
    if (!options) {
        return opts;
    }
    if (options.markers) {
        opts.markers = options.markers.map(m => new window.BMap.Marker(toPoint(m.point), toMarkerOptions(m.options)));
    }
    if (!isNull(options.girdSize)) {
        opts.girdSize = options.girdSize;
    }
    if (!isNull(options.maxZoom)) {
        opts.maxZoom = options.maxZoom;
    }
    if (!isNull(options.minClusterSize)) {
        opts.minClusterSize = options.minClusterSize;
    }
    if (!isNull(options.isAverangeCenter)) {
        opts.isAverangeCenter = options.isAverangeCenter;
    }
    if (options.styles) {
        opts.styles = options.styles.filter(s => s).map(s => toTextIconStyle(s));
    }
    return opts;
}

function nullCheck(obj, msg) {
    if (isNull(obj)) {
        throw new Error(msg);
    }
}

var LOADING_STATE;
(function (LOADING_STATE) {
    LOADING_STATE[LOADING_STATE["NON"] = 0] = "NON";
    LOADING_STATE[LOADING_STATE["LOADED"] = 1] = "LOADED";
    LOADING_STATE[LOADING_STATE["LOADING"] = 2] = "LOADING";
})(LOADING_STATE || (LOADING_STATE = {}));
class ScriptLoaderConfig {
    constructor() {
        this.ak = '';
    }
}
let ScriptLoader = class ScriptLoader {
    constructor() {
        window._scriptLoadState = {};
        window._loadingCallbacks = {};
    }
    load(url, isMain = false, cb) {
        // tslint:disable: no-string-literal
        const scriptKey = isString(url) ? url : url['key'];
        const scriptUrls = isString(url) ? [url] : url['scripts'];
        // tslint:enable: no-string-literal
        if (window._scriptLoadState[scriptKey] === LOADING_STATE.LOADED) {
            if (isMain) {
                switchDisplay('baidu-map .baidu-map-instance', 'block');
                switchDisplay('baidu-map .baidu-map-offline', 'none');
            }
            return cb();
        }
        if (!window._loadingCallbacks[scriptKey]) {
            window._loadingCallbacks[scriptKey] = [];
        }
        if (window._scriptLoadState[scriptKey] === LOADING_STATE.LOADING) {
            window._loadingCallbacks[scriptKey].push(cb);
            return;
        }
        window._scriptLoadState[scriptKey] = LOADING_STATE.LOADING;
        window._loadingCallbacks[scriptKey].push(cb);
        if (isMain) {
            window.baidumapinit = () => {
                window._scriptLoadState[scriptKey] = LOADING_STATE.LOADED;
                switchDisplay('baidu-map .baidu-map-instance', 'block');
                switchDisplay('baidu-map .baidu-map-offline', 'none');
                window._loadingCallbacks[scriptKey].forEach((c) => {
                    c();
                });
            };
        }
        appendScriptsTag(scriptKey, scriptUrls, isMain);
    }
};
ScriptLoader = __decorate([
    Injectable()
], ScriptLoader);
function appendScriptsTag(scriptKey, urls, isMain) {
    const leftObj = {
        count: urls.length
    };
    urls.forEach(url => {
        appendScriptTag(scriptKey, url, isMain, leftObj);
    });
}
function appendScriptTag(scriptKey, url, isMain, leftObj) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onerror = () => {
        if (isMain) {
            switchDisplay('baidu-map .baidu-map-offline', 'block');
            switchDisplay('baidu-map .baidu-map-instance', 'none');
        }
        document.body.removeChild(script);
        setTimeout(() => {
            appendScriptTag(scriptKey, url, isMain, leftObj);
        }, 30000);
    };
    if (!isMain) {
        script.onload = () => {
            leftObj.count--;
            if (leftObj.count) {
                return;
            }
            window._scriptLoadState[scriptKey] = LOADING_STATE.LOADED;
            window._loadingCallbacks[scriptKey].forEach((c) => {
                c();
            });
        };
    }
    document.body.appendChild(script);
}
function switchDisplay(selector, state) {
    Array.prototype.slice
        .call(document.querySelectorAll(selector))
        .forEach((node) => {
        node.style.display = state;
    });
}

let MapService = class MapService {
    constructor(config, loader) {
        this.loader = loader;
        nullCheck(config.ak, 'ak must be provided');
        this.config = config;
        this.map = new Promise((resolve) => {
            this.mapResolver = resolve;
        });
    }
    createMap(el, mapOptions) {
        const URL = `https://api.map.baidu.com/api?v=2.0&ak=${this.config.ak}&callback=baidumapinit`;
        return new Promise(resolve => {
            this.loader.load(URL, true, () => {
                const map = new window.BMap.Map(el, omit(mapOptions, 'mapType'));
                this.setOptions(mapOptions);
                this.mapResolver(map);
                resolve(map);
            });
        });
    }
    setOptions(opts) {
        const { disableDragging, enableScrollWheelZoom, disableDoubleClickZoom, enableKeyboard, enableInertialDragging, enableAutoResize, enableContinuousZoom, disablePinchToZoom } = opts;
        if (isBoolean(disableDragging)) {
            this.map.then(map => map[(disableDragging ? 'disable' : 'enable') + 'Dragging']());
        }
        if (isBoolean(enableScrollWheelZoom)) {
            this.map.then(map => map[(enableScrollWheelZoom ? 'enable' : 'disable') + 'ScrollWheelZoom']());
        }
        if (isBoolean(enableAutoResize)) {
            this.map.then(map => map[(enableAutoResize ? 'enable' : 'disable') + 'AutoResize']());
        }
        if (isBoolean(disableDoubleClickZoom)) {
            this.map.then(map => map[(disableDoubleClickZoom ? 'disable' : 'enable') + 'DoubleClickZoom']());
        }
        if (isBoolean(enableKeyboard)) {
            this.map.then(map => map[(enableKeyboard ? 'enable' : 'disable') + 'Keyboard']());
        }
        if (isBoolean(enableInertialDragging)) {
            this.map.then(map => map[(enableInertialDragging ? 'enable' : 'disable') + 'InertialDragging']());
        }
        if (isBoolean(enableContinuousZoom)) {
            this.map.then(map => map[(enableContinuousZoom ? 'enable' : 'disable') + 'ContinuousZoom']());
        }
        if (isBoolean(disablePinchToZoom)) {
            this.map.then(map => map[(disablePinchToZoom ? 'disable' : 'enable') + 'PinchToZoom']());
        }
        if (!isNull(opts.cursor)) {
            this.map.then(map => map.setDefaultCursor(opts.cursor));
        }
        if (!isNull(opts.draggingCursor)) {
            this.map.then(map => map.setDraggingCursor(opts.draggingCursor));
        }
        if (!isNull(opts.currentCity)) {
            this.map.then(map => map.setCurrentCity(opts.currentCity));
        }
        if (!isNull(opts.centerAndZoom)) {
            this.map.then(map => {
                map.centerAndZoom(toPoint(opts.centerAndZoom), opts.centerAndZoom.zoom);
            });
        }
        if (!isNull(opts.mapType)) {
            this.map.then(map => {
                const realType = isMapTypeEnum(opts.mapType)
                    ? window[opts.mapType]
                    : opts.mapType;
                map.setMapType(realType);
            });
        }
    }
    addOverlay(cb) {
        return this.map.then((map) => {
            const overlay = cb(map);
            map.addOverlay(overlay);
            return { map, overlay };
        });
    }
    removeOverlay(overlay) {
        return this.map.then((map) => {
            map.removeOverlay(overlay);
        });
    }
    addTileLayer(cb) {
        return this.map.then((map) => {
            const tilelayer = cb(map);
            map.addTileLayer(tilelayer);
            return { map, tilelayer };
        });
    }
    removeTileLayer(tilelayer) {
        return this.map.then((map) => {
            map.removeOverlay(tilelayer);
        });
    }
    addControl(cb) {
        return this.map.then((map) => {
            const control = cb(map);
            map.addControl(control);
            return { map, control };
        });
    }
    removeControl(control) {
        return this.map.then((map) => {
            map.removeControl(control);
        });
    }
    getNativeMap() {
        return this.map;
    }
};
MapService.ctorParameters = () => [
    { type: ScriptLoaderConfig, decorators: [{ type: Inject, args: [ScriptLoaderConfig,] }] },
    { type: ScriptLoader }
];
MapService = __decorate([
    Injectable(),
    __param(0, Inject(ScriptLoaderConfig))
], MapService);

let ControlComponent = class ControlComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    ngOnInit() {
        nullCheck(this.type, 'type is required for <control>');
        this.service
            .addControl(() => {
            this.control = this.createControl(this.type, this.options);
            return this.control;
        })
            .then(({ control }) => {
            this.loaded.emit(control);
        });
    }
    ngOnDestroy() {
        this.service.removeControl(this.control);
    }
    createControl(type, options) {
        if (type === 'navigation') {
            return new window.BMap.NavigationControl(toNavigationControlOptions(options));
        }
        if (type === 'overviewmap') {
            return new window.BMap.OverviewMapControl(toOverviewMapControlOptions(options));
        }
        if (type === 'scale') {
            return new window.BMap.ScaleControl(toScaleControlOptions(options));
        }
        if (type === 'maptype') {
            return new window.BMap.MapTypeControl(toMapTypeControlOptions(options));
        }
        if (type === 'geolocation') {
            return new window.BMap.GeolocationControl(toGeolocationOptions(options));
        }
        if (type === 'panorama') {
            return new window.BMap.PanoramaControl();
        }
        throw new Error(`Unsupported type:${type} of control`);
    }
};
ControlComponent.ctorParameters = () => [
    { type: MapService }
];
__decorate([
    Input()
], ControlComponent.prototype, "type", void 0);
__decorate([
    Input()
], ControlComponent.prototype, "options", void 0);
__decorate([
    Output()
], ControlComponent.prototype, "loaded", void 0);
ControlComponent = __decorate([
    Directive({
        selector: 'control'
    })
], ControlComponent);

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
__decorate([
    Input()
], MapComponent.prototype, "options", void 0);
__decorate([
    Output()
], MapComponent.prototype, "loaded", void 0);
__decorate([
    Output()
], MapComponent.prototype, "clicked", void 0);
__decorate([
    ViewChild('mapinstance', { static: false })
], MapComponent.prototype, "mapInstance", void 0);
MapComponent = __decorate([
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

let MarkerComponent = class MarkerComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
        this.clicked = new EventEmitter();
    }
    ngOnInit() {
        nullCheck(this.point, 'point is required for <marker>');
        this.service
            .addOverlay(() => {
            return (this.marker = new window.BMap.Marker(toPoint(this.point), toMarkerOptions(this.options)));
        })
            .then(({ map }) => {
            this.loaded.emit(this.marker);
            this.addListener(this.marker, map);
        })
            .then(() => {
            // workaround: it's weird that postion is set while constructing phase will make click event not working
            this.marker.setPosition(new window.BMap.Point(this.point.lng, this.point.lat));
        });
    }
    ngOnChanges(changes) {
        if (changes.point && !changes.point.isFirstChange()) {
            this.marker.setPosition(toPoint(changes.point.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    }
    ngOnDestroy() {
        this.service.removeOverlay(this.marker);
    }
    setOptions(options) {
        if (isNull(options)) {
            return;
        }
        if (!isNull(options.offset)) {
            this.marker.setOffset(toSize(options.offset));
        }
        if (!isNull(options.icon)) {
            this.marker.setIcon(toIcon(options.icon.imageUrl, options.icon.size, options.icon));
        }
        if (!isNull(options.enableMassClear)) {
            this.marker[(options.enableMassClear ? 'enable' : 'disable') + 'MassClear']();
        }
        if (!isNull(options.enableDragging)) {
            this.marker[(options.enableDragging ? 'enable' : 'disable') + 'Dragging']();
        }
        if (!isNull(options.rotation)) {
            this.marker.setRotation(options.rotation);
        }
        if (!isNull(options.shadow)) {
            this.marker.setShadow(toIcon(options.shadow.imageUrl, options.shadow.size, options.shadow));
        }
        if (!isNull(options.title)) {
            this.marker.setTitle(options.title);
        }
    }
    addListener(marker, map) {
        marker.addEventListener('click', (e) => {
            this.clicked.emit({
                e,
                map,
                marker
            });
        });
    }
};
MarkerComponent.ctorParameters = () => [
    { type: MapService }
];
__decorate([
    Input()
], MarkerComponent.prototype, "point", void 0);
__decorate([
    Input()
], MarkerComponent.prototype, "options", void 0);
__decorate([
    Output()
], MarkerComponent.prototype, "loaded", void 0);
__decorate([
    Output()
], MarkerComponent.prototype, "clicked", void 0);
MarkerComponent = __decorate([
    Directive({
        selector: 'marker'
    })
], MarkerComponent);

let PolylineComponent = class PolylineComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
        this.clicked = new EventEmitter();
    }
    ngOnInit() {
        nullCheck(this.points, 'points is required for <polyline>');
        this.service
            .addOverlay(() => {
            return (this.polyline = new window.BMap.Polyline(toPoints(this.points), this.options));
        })
            .then(({ map }) => {
            this.loaded.emit(this.polyline);
            this.addListener(this.polyline, map);
        });
    }
    ngOnChanges(changes) {
        if (changes.points && !changes.points.isFirstChange()) {
            this.polyline.setPath(toPoints(changes.points.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    }
    ngOnDestroy() {
        this.service.removeOverlay(this.polyline);
    }
    setOptions(options) {
        if (isNull(options)) {
            return;
        }
        if (!isUndefined(options.enableEditing)) {
            if (options.enableEditing) {
                this.polyline.enableEditing();
            }
            else {
                this.polyline.disableEditing();
            }
        }
        if (!isUndefined(options.enableMassClear)) {
            if (options.enableEditing) {
                this.polyline.enableMassClear();
            }
            else {
                this.polyline.disableMassClear();
            }
        }
        if (!isUndefined(options.strokeColor)) {
            this.polyline.setStrokeColor(options.strokeColor);
        }
        if (!isUndefined(options.strokeOpacity)) {
            this.polyline.setStrokeOpacity(options.strokeOpacity);
        }
        if (!isUndefined(options.strokeStyle)) {
            this.polyline.setStrokeStyle(options.strokeStyle);
        }
        if (!isUndefined(options.strokeWeight)) {
            this.polyline.setStrokeWeight(options.strokeWeight);
        }
    }
    addListener(polyline, map) {
        polyline.addEventListener('click', (e) => {
            console.log('sfdsfdsfds');
            this.clicked.emit({
                e,
                map,
                polyline
            });
        });
    }
};
PolylineComponent.ctorParameters = () => [
    { type: MapService }
];
__decorate([
    Input()
], PolylineComponent.prototype, "points", void 0);
__decorate([
    Input()
], PolylineComponent.prototype, "options", void 0);
__decorate([
    Output()
], PolylineComponent.prototype, "loaded", void 0);
__decorate([
    Output()
], PolylineComponent.prototype, "clicked", void 0);
PolylineComponent = __decorate([
    Directive({
        selector: 'polyline'
    })
], PolylineComponent);

let CircleComponent = class CircleComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    ngOnInit() {
        nullCheck(this.center, 'center is required for <circle>');
        nullCheck(this.radius, 'center is required for <circle>');
        this.service
            .addOverlay(() => {
            return (this.circle = new window.BMap.Circle(toPoint(this.center), this.radius, this.options));
        })
            .then(() => {
            this.loaded.emit(this.circle);
        });
    }
    ngOnChanges(changes) {
        if (changes.center && !changes.center.isFirstChange()) {
            this.circle.setCenter(toPoint(changes.center.currentValue));
        }
        if (changes.radius && !changes.radius.isFirstChange()) {
            this.circle.setRadius(changes.radius.currentValue);
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    }
    ngOnDestroy() {
        this.service.removeOverlay(this.circle);
    }
    setOptions(options) {
        if (isNull(options)) {
            return;
        }
        if (!isUndefined(options.enableEditing)) {
            if (options.enableEditing) {
                this.circle.enableEditing();
            }
            else {
                this.circle.disableEditing();
            }
        }
        if (!isUndefined(options.enableMassClear)) {
            if (options.enableEditing) {
                this.circle.enableMassClear();
            }
            else {
                this.circle.disableMassClear();
            }
        }
        if (!isUndefined(options.strokeColor)) {
            this.circle.setStrokeColor(options.strokeColor);
        }
        if (!isUndefined(options.fillColor)) {
            this.circle.setFillColor(options.fillColor);
        }
        if (!isUndefined(options.strokeOpacity)) {
            this.circle.setStrokeOpacity(options.strokeOpacity);
        }
        if (!isUndefined(options.fillOpacity)) {
            this.circle.setFillOpacity(options.fillOpacity);
        }
        if (!isUndefined(options.strokeStyle)) {
            this.circle.setStrokeStyle(options.strokeStyle);
        }
        if (!isUndefined(options.strokeWeight)) {
            this.circle.setStrokeWeight(options.strokeWeight);
        }
    }
};
CircleComponent.ctorParameters = () => [
    { type: MapService }
];
__decorate([
    Input()
], CircleComponent.prototype, "center", void 0);
__decorate([
    Input()
], CircleComponent.prototype, "radius", void 0);
__decorate([
    Input()
], CircleComponent.prototype, "options", void 0);
__decorate([
    Output()
], CircleComponent.prototype, "loaded", void 0);
CircleComponent = __decorate([
    Directive({
        selector: 'circle'
    })
], CircleComponent);

let PolygonComponent = class PolygonComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    ngOnInit() {
        nullCheck(this.points, 'points is required for <polygon>');
        this.service
            .addOverlay(() => {
            return (this.polygon = new window.BMap.Polygon(toPoints(this.points), this.options));
        })
            .then(() => {
            this.loaded.emit(this.polygon);
        });
    }
    ngOnChanges(changes) {
        if (changes.points && !changes.points.isFirstChange()) {
            this.polygon.setPath(toPoints(changes.points.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    }
    ngOnDestroy() {
        this.service.removeOverlay(this.polygon);
    }
    setOptions(options) {
        if (isNull(options)) {
            return;
        }
        if (!isUndefined(options.enableEditing)) {
            if (options.enableEditing) {
                this.polygon.enableEditing();
            }
            else {
                this.polygon.disableEditing();
            }
        }
        if (!isUndefined(options.enableMassClear)) {
            if (options.enableEditing) {
                this.polygon.enableMassClear();
            }
            else {
                this.polygon.disableMassClear();
            }
        }
        if (!isUndefined(options.strokeColor)) {
            this.polygon.setStrokeColor(options.strokeColor);
        }
        if (!isUndefined(options.fillColor)) {
            this.polygon.setFillColor(options.fillColor);
        }
        if (!isUndefined(options.strokeOpacity)) {
            this.polygon.setStrokeOpacity(options.strokeOpacity);
        }
        if (!isUndefined(options.fillOpacity)) {
            this.polygon.setFillOpacity(options.fillOpacity);
        }
        if (!isUndefined(options.strokeStyle)) {
            this.polygon.setStrokeStyle(options.strokeStyle);
        }
        if (!isUndefined(options.strokeWeight)) {
            this.polygon.setStrokeWeight(options.strokeWeight);
        }
    }
};
PolygonComponent.ctorParameters = () => [
    { type: MapService }
];
__decorate([
    Input()
], PolygonComponent.prototype, "points", void 0);
__decorate([
    Input()
], PolygonComponent.prototype, "options", void 0);
__decorate([
    Output()
], PolygonComponent.prototype, "loaded", void 0);
PolygonComponent = __decorate([
    Directive({
        selector: 'polygon'
    })
], PolygonComponent);

const LIB_URL = `https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js`;
let HeatmapComponent = class HeatmapComponent {
    constructor(service, scriptLoader) {
        this.service = service;
        this.scriptLoader = scriptLoader;
        this.loaded = new EventEmitter();
    }
    ngOnInit() {
        nullCheck(this.dataset, 'dataset is required for <heatmap>');
        this.service.getNativeMap().then(() => {
            return this.scriptLoader.load(LIB_URL, false, () => {
                this.service
                    .addOverlay(() => {
                    return (this.heatmap = new window.BMapLib.HeatmapOverlay(this.options));
                })
                    .then(() => {
                    this.loaded.emit(this.heatmap);
                    if (this.dataset) {
                        this.heatmap.setDataSet(this.dataset);
                    }
                });
            });
        });
    }
    ngOnChanges(changes) {
        if (changes.dataset && !changes.dataset.isFirstChange()) {
            this.heatmap.setDataSet(changes.dataset.currentValue);
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.heatmap.setOptions(changes.options.currentValue);
        }
    }
    ngOnDestroy() {
        this.service.removeOverlay(this.heatmap);
    }
};
HeatmapComponent.ctorParameters = () => [
    { type: MapService },
    { type: ScriptLoader }
];
__decorate([
    Input()
], HeatmapComponent.prototype, "dataset", void 0);
__decorate([
    Input()
], HeatmapComponent.prototype, "options", void 0);
__decorate([
    Output()
], HeatmapComponent.prototype, "loaded", void 0);
HeatmapComponent = __decorate([
    Directive({
        selector: 'heatmap'
    })
], HeatmapComponent);

let TileLayerComponent = class TileLayerComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    ngOnInit() {
        const func = this.getTilesUrl;
        this.service
            .addTileLayer(() => {
            this.tilelayer = new window.BMap.TileLayer(this.options);
            if (this.getTilesUrl) {
                this.tilelayer.getTilesUrl = (tileCoord, zoom) => {
                    return func(tileCoord, zoom);
                };
            }
            return this.tilelayer;
        })
            .then(() => {
            this.loaded.emit(this.tilelayer);
        });
    }
    ngOnDestroy() {
        this.service.removeTileLayer(this.tilelayer);
    }
};
TileLayerComponent.ctorParameters = () => [
    { type: MapService }
];
__decorate([
    Input()
], TileLayerComponent.prototype, "getTilesUrl", void 0);
__decorate([
    Input()
], TileLayerComponent.prototype, "options", void 0);
__decorate([
    Output()
], TileLayerComponent.prototype, "loaded", void 0);
TileLayerComponent = __decorate([
    Directive({
        selector: 'tilelayer'
    })
], TileLayerComponent);

let TrafficLayerComponent = class TrafficLayerComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    ngOnInit() {
        this.service
            .addTileLayer(() => {
            this.trafficlayer = new window.BMap.TrafficLayer(this.options);
            return this.trafficlayer;
        })
            .then(() => {
            this.loaded.emit(this.trafficlayer);
        });
    }
    ngOnDestroy() {
        this.service.removeTileLayer(this.trafficlayer);
    }
};
TrafficLayerComponent.ctorParameters = () => [
    { type: MapService }
];
__decorate([
    Input()
], TrafficLayerComponent.prototype, "options", void 0);
__decorate([
    Output()
], TrafficLayerComponent.prototype, "loaded", void 0);
TrafficLayerComponent = __decorate([
    Directive({
        selector: 'trafficlayer'
    })
], TrafficLayerComponent);

let CanvasLayerComponent = class CanvasLayerComponent {
    constructor(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    ngOnInit() {
        this.service
            .addOverlay((map) => {
            this.canvaslayer = new window.BMap.CanvasLayer(this.getOptions(this.options, map));
            return this.canvaslayer;
        })
            .then(() => {
            this.loaded.emit(this.canvaslayer);
        });
    }
    ngOnDestroy() {
        this.service.removeOverlay(this.canvaslayer);
    }
    getOptions(options, map) {
        if (!options) {
            return;
        }
        const opts = {};
        if (isNumber(options.zIndex)) {
            opts.zIndex = options.zIndex;
        }
        if (options.paneName) {
            opts.paneName = options.paneName;
        }
        if (options.update) {
            opts.update = function () {
                return options.update(map, this.canvas);
            };
        }
        return opts;
    }
};
CanvasLayerComponent.ctorParameters = () => [
    { type: MapService }
];
__decorate([
    Input()
], CanvasLayerComponent.prototype, "options", void 0);
__decorate([
    Output()
], CanvasLayerComponent.prototype, "loaded", void 0);
CanvasLayerComponent = __decorate([
    Directive({
        selector: 'canvaslayer'
    })
], CanvasLayerComponent);

const LIB_URLS = {
    key: 'markerClusterer',
    scripts: [
        'https://api.map.baidu.com/library/MarkerClusterer/1.2/src/MarkerClusterer_min.js',
        'https://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js'
    ]
};
let MarkerClustererComponent = class MarkerClustererComponent {
    constructor(service, scriptLoader) {
        this.service = service;
        this.scriptLoader = scriptLoader;
        this.loaded = new EventEmitter();
    }
    ngOnInit() {
        nullCheck(this.options, 'options is required for <marker-clusterer>');
        this.service.getNativeMap().then((map) => {
            return this.scriptLoader.load(LIB_URLS, false, () => {
                this.markerClusterer = new window.BMapLib.MarkerClusterer(map, toMarkerClustererOptions(this.options));
                this.loaded.emit(this.markerClusterer);
            });
        });
    }
    ngOnChanges(changes) {
        if (changes.options && !changes.options.isFirstChange()) {
            this.resetOptions(changes.options.currentValue);
        }
    }
    resetOptions(options) {
        if (options.markers) {
            this.markerClusterer.clearMarkers();
            this.markerClusterer.addMarkers(options.markers.map(m => new window.BMap.Marker(toPoint(m.point), toMarkerOptions(m.options))));
        }
        if (!isUndefined(options.girdSize)) {
            this.markerClusterer.setGridSize(options.girdSize);
        }
        if (!isUndefined(options.maxZoom)) {
            this.markerClusterer.setMaxZoom(options.maxZoom);
        }
        if (options.styles) {
            this.markerClusterer.setStyles(options.styles.filter(s => s).map(s => toTextIconStyle(s)));
        }
    }
    ngOnDestroy() {
        this.markerClusterer.clearMarkers();
    }
};
MarkerClustererComponent.ctorParameters = () => [
    { type: MapService },
    { type: ScriptLoader }
];
__decorate([
    Input()
], MarkerClustererComponent.prototype, "options", void 0);
__decorate([
    Output()
], MarkerClustererComponent.prototype, "loaded", void 0);
MarkerClustererComponent = __decorate([
    Directive({
        selector: 'marker-clusterer'
    })
], MarkerClustererComponent);

var ControlAnchor;
(function (ControlAnchor) {
    ControlAnchor[ControlAnchor["BMAP_ANCHOR_TOP_LEFT"] = 0] = "BMAP_ANCHOR_TOP_LEFT";
    ControlAnchor[ControlAnchor["BMAP_ANCHOR_TOP_RIGHT"] = 1] = "BMAP_ANCHOR_TOP_RIGHT";
    ControlAnchor[ControlAnchor["BMAP_ANCHOR_BOTTOM_LEFT"] = 2] = "BMAP_ANCHOR_BOTTOM_LEFT";
    ControlAnchor[ControlAnchor["BMAP_ANCHOR_BOTTOM_RIGHT"] = 3] = "BMAP_ANCHOR_BOTTOM_RIGHT";
})(ControlAnchor || (ControlAnchor = {}));
var NavigationControlType;
(function (NavigationControlType) {
    NavigationControlType[NavigationControlType["BMAP_NAVIGATION_CONTROL_LARGE"] = 0] = "BMAP_NAVIGATION_CONTROL_LARGE";
    NavigationControlType[NavigationControlType["BMAP_NAVIGATION_CONTROL_SMALL"] = 1] = "BMAP_NAVIGATION_CONTROL_SMALL";
    NavigationControlType[NavigationControlType["BMAP_NAVIGATION_CONTROL_PAN"] = 2] = "BMAP_NAVIGATION_CONTROL_PAN";
    NavigationControlType[NavigationControlType["BMAP_NAVIGATION_CONTROL_ZOOM"] = 3] = "BMAP_NAVIGATION_CONTROL_ZOOM";
})(NavigationControlType || (NavigationControlType = {}));
var MapTypeControlType;
(function (MapTypeControlType) {
    MapTypeControlType[MapTypeControlType["BMAP_MAPTYPE_CONTROL_HORIZONTAL"] = 0] = "BMAP_MAPTYPE_CONTROL_HORIZONTAL";
    MapTypeControlType[MapTypeControlType["BMAP_MAPTYPE_CONTROL_DROPDOWN"] = 1] = "BMAP_MAPTYPE_CONTROL_DROPDOWN";
    MapTypeControlType[MapTypeControlType["BMAP_MAPTYPE_CONTROL_MAP"] = 2] = "BMAP_MAPTYPE_CONTROL_MAP";
})(MapTypeControlType || (MapTypeControlType = {}));
var LengthUnit;
(function (LengthUnit) {
    LengthUnit["BMAP_UNIT_METRIC"] = "metric";
    LengthUnit["BMAP_UNIT_IMPERIAL"] = "us";
})(LengthUnit || (LengthUnit = {}));

var Animation;
(function (Animation) {
    Animation[Animation["BMAP_ANIMATION_DROP"] = 1] = "BMAP_ANIMATION_DROP";
    Animation[Animation["BMAP_ANIMATION_BOUNCE"] = 2] = "BMAP_ANIMATION_BOUNCE";
})(Animation || (Animation = {}));

var BaiduMapModule_1;
let BaiduMapModule = BaiduMapModule_1 = class BaiduMapModule {
    static forRoot(config) {
        return {
            ngModule: BaiduMapModule_1,
            providers: [
                { provide: ScriptLoaderConfig, useValue: config },
                ScriptLoader
            ]
        };
    }
};
BaiduMapModule = BaiduMapModule_1 = __decorate([
    NgModule({
        declarations: [
            MapComponent,
            MarkerComponent,
            ControlComponent,
            PolylineComponent,
            CircleComponent,
            PolygonComponent,
            HeatmapComponent,
            TileLayerComponent,
            TrafficLayerComponent,
            CanvasLayerComponent,
            MarkerClustererComponent
        ],
        exports: [
            MapComponent,
            MarkerComponent,
            ControlComponent,
            PolylineComponent,
            CircleComponent,
            PolygonComponent,
            HeatmapComponent,
            TileLayerComponent,
            TrafficLayerComponent,
            CanvasLayerComponent,
            MarkerClustererComponent
        ]
    })
], BaiduMapModule);

/*
 * Public API Surface of lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Animation, BaiduMapModule, ControlAnchor, LengthUnit, MapTypeControlType, MapTypeEnum, NavigationControlType, MapComponent as ɵa, MapService as ɵb, ScriptLoaderConfig as ɵc, ScriptLoader as ɵd, MarkerComponent as ɵe, ControlComponent as ɵf, PolylineComponent as ɵg, CircleComponent as ɵh, PolygonComponent as ɵi, HeatmapComponent as ɵj, TileLayerComponent as ɵk, TrafficLayerComponent as ɵl, CanvasLayerComponent as ɵm, MarkerClustererComponent as ɵn };
//# sourceMappingURL=angular2-baidu-map.js.map
