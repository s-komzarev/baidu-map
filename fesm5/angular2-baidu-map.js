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
function omit(obj) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var rawKeys = Object.keys(obj);
    var finalKeys = rawKeys.filter(function (k) { return keys.indexOf(k) < 0; });
    return finalKeys.reduce(function (p, v) {
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
    return opts.map(function (p) {
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
    var iconOptions = {
        anchor: toSize(options.anchor),
        imageOffset: toSize(options.imageOffset),
        infoWindowAnchor: toSize(options.infoWindowAnchor),
        printImageUrl: options.printImageUrl
    };
    var icon = new window.BMap.Icon(url, toSize(size), iconOptions);
    if (options.imageSize) {
        icon.setImageSize(toSize(options.imageSize));
    }
    return icon;
}
function toMarkerOptions(options) {
    var opts = {};
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
    var opts = {};
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
    var opts = {};
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
    var opts = {};
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
    var opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.type)) {
        opts.type = options.type;
    }
    if (!isNull(options.mapTypes)) {
        opts.mapTypes = options.mapTypes.map(function (mapType) {
            return isMapTypeEnum(mapType) ? window[mapType] : mapType;
        });
    }
    return opts;
}
function toGeolocationOptions(options) {
    var opts = {};
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
    var realStyle = {
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
    var opts = {};
    if (!options) {
        return opts;
    }
    if (options.markers) {
        opts.markers = options.markers.map(function (m) { return createMarker(m.point, m.options); });
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
        opts.styles = options.styles.filter(function (s) { return s; }).map(function (s) { return toTextIconStyle(s); });
    }
    return opts;
}
function createMarker(point, options) {
    var res = new window.BMap.Marker(toPoint(point), toMarkerOptions(options));
    if (!isNull(options.label)) {
        var label = new window.BMap.Label(options.label.content);
        if (options.label.styles) {
            label.setStyle(options.label.styles);
        }
        res.setLabel(label);
    }
    return res;
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
var ScriptLoaderConfig = /** @class */ (function () {
    function ScriptLoaderConfig() {
        this.ak = '';
    }
    return ScriptLoaderConfig;
}());
var ScriptLoader = /** @class */ (function () {
    function ScriptLoader() {
        window._scriptLoadState = {};
        window._loadingCallbacks = {};
    }
    ScriptLoader.prototype.load = function (url, isMain, cb) {
        if (isMain === void 0) { isMain = false; }
        // tslint:disable: no-string-literal
        var scriptKey = isString(url) ? url : url['key'];
        var scriptUrls = isString(url) ? [url] : url['scripts'];
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
            window.baidumapinit = function () {
                window._scriptLoadState[scriptKey] = LOADING_STATE.LOADED;
                switchDisplay('baidu-map .baidu-map-instance', 'block');
                switchDisplay('baidu-map .baidu-map-offline', 'none');
                window._loadingCallbacks[scriptKey].forEach(function (c) {
                    c();
                });
            };
        }
        appendScriptsTag(scriptKey, scriptUrls, isMain);
    };
    ScriptLoader = __decorate([
        Injectable()
    ], ScriptLoader);
    return ScriptLoader;
}());
function appendScriptsTag(scriptKey, urls, isMain) {
    var leftObj = {
        count: urls.length
    };
    urls.forEach(function (url) {
        appendScriptTag(scriptKey, url, isMain, leftObj);
    });
}
function appendScriptTag(scriptKey, url, isMain, leftObj) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onerror = function () {
        if (isMain) {
            switchDisplay('baidu-map .baidu-map-offline', 'block');
            switchDisplay('baidu-map .baidu-map-instance', 'none');
        }
        document.body.removeChild(script);
        setTimeout(function () {
            appendScriptTag(scriptKey, url, isMain, leftObj);
        }, 30000);
    };
    if (!isMain) {
        script.onload = function () {
            leftObj.count--;
            if (leftObj.count) {
                return;
            }
            window._scriptLoadState[scriptKey] = LOADING_STATE.LOADED;
            window._loadingCallbacks[scriptKey].forEach(function (c) {
                c();
            });
        };
    }
    document.body.appendChild(script);
}
function switchDisplay(selector, state) {
    Array.prototype.slice
        .call(document.querySelectorAll(selector))
        .forEach(function (node) {
        node.style.display = state;
    });
}

var MapService = /** @class */ (function () {
    function MapService(config, loader) {
        var _this = this;
        this.loader = loader;
        nullCheck(config.ak, 'ak must be provided');
        this.config = config;
        this.map = new Promise(function (resolve) {
            _this.mapResolver = resolve;
        });
    }
    MapService.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        var URL = "https://api.map.baidu.com/api?v=2.0&ak=" + this.config.ak + "&callback=baidumapinit";
        return new Promise(function (resolve) {
            _this.loader.load(URL, true, function () {
                var map = new window.BMap.Map(el, omit(mapOptions, 'mapType'));
                _this.setOptions(mapOptions);
                _this.mapResolver(map);
                resolve(map);
            });
        });
    };
    MapService.prototype.setOptions = function (opts) {
        var disableDragging = opts.disableDragging, enableScrollWheelZoom = opts.enableScrollWheelZoom, disableDoubleClickZoom = opts.disableDoubleClickZoom, enableKeyboard = opts.enableKeyboard, enableInertialDragging = opts.enableInertialDragging, enableAutoResize = opts.enableAutoResize, enableContinuousZoom = opts.enableContinuousZoom, disablePinchToZoom = opts.disablePinchToZoom;
        if (isBoolean(disableDragging)) {
            this.map.then(function (map) {
                return map[(disableDragging ? 'disable' : 'enable') + 'Dragging']();
            });
        }
        if (isBoolean(enableScrollWheelZoom)) {
            this.map.then(function (map) {
                return map[(enableScrollWheelZoom ? 'enable' : 'disable') + 'ScrollWheelZoom']();
            });
        }
        if (isBoolean(enableAutoResize)) {
            this.map.then(function (map) {
                return map[(enableAutoResize ? 'enable' : 'disable') + 'AutoResize']();
            });
        }
        if (isBoolean(disableDoubleClickZoom)) {
            this.map.then(function (map) {
                return map[(disableDoubleClickZoom ? 'disable' : 'enable') + 'DoubleClickZoom']();
            });
        }
        if (isBoolean(enableKeyboard)) {
            this.map.then(function (map) {
                return map[(enableKeyboard ? 'enable' : 'disable') + 'Keyboard']();
            });
        }
        if (isBoolean(enableInertialDragging)) {
            this.map.then(function (map) {
                return map[(enableInertialDragging ? 'enable' : 'disable') + 'InertialDragging']();
            });
        }
        if (isBoolean(enableContinuousZoom)) {
            this.map.then(function (map) {
                return map[(enableContinuousZoom ? 'enable' : 'disable') + 'ContinuousZoom']();
            });
        }
        if (isBoolean(disablePinchToZoom)) {
            this.map.then(function (map) {
                return map[(disablePinchToZoom ? 'disable' : 'enable') + 'PinchToZoom']();
            });
        }
        if (!isNull(opts.cursor)) {
            this.map.then(function (map) { return map.setDefaultCursor(opts.cursor); });
        }
        if (!isNull(opts.draggingCursor)) {
            this.map.then(function (map) { return map.setDraggingCursor(opts.draggingCursor); });
        }
        if (!isNull(opts.currentCity)) {
            this.map.then(function (map) { return map.setCurrentCity(opts.currentCity); });
        }
        if (!isNull(opts.centerAndZoom)) {
            this.map.then(function (map) {
                map.centerAndZoom(toPoint(opts.centerAndZoom), opts.centerAndZoom.zoom);
            });
        }
        if (!isNull(opts.mapType)) {
            this.map.then(function (map) {
                var realType = isMapTypeEnum(opts.mapType)
                    ? window[opts.mapType]
                    : opts.mapType;
                map.setMapType(realType);
            });
        }
    };
    MapService.prototype.addOverlay = function (cb) {
        return this.map.then(function (map) {
            var overlay = cb(map);
            map.addOverlay(overlay);
            return { map: map, overlay: overlay };
        });
    };
    MapService.prototype.removeOverlay = function (overlay) {
        return this.map.then(function (map) {
            map.removeOverlay(overlay);
        });
    };
    MapService.prototype.addTileLayer = function (cb) {
        return this.map.then(function (map) {
            var tilelayer = cb(map);
            map.addTileLayer(tilelayer);
            return { map: map, tilelayer: tilelayer };
        });
    };
    MapService.prototype.removeTileLayer = function (tilelayer) {
        return this.map.then(function (map) {
            map.removeOverlay(tilelayer);
        });
    };
    MapService.prototype.addControl = function (cb) {
        return this.map.then(function (map) {
            var control = cb(map);
            map.addControl(control);
            return { map: map, control: control };
        });
    };
    MapService.prototype.removeControl = function (control) {
        return this.map.then(function (map) {
            map.removeControl(control);
        });
    };
    MapService.prototype.getNativeMap = function () {
        return this.map;
    };
    MapService.ctorParameters = function () { return [
        { type: ScriptLoaderConfig, decorators: [{ type: Inject, args: [ScriptLoaderConfig,] }] },
        { type: ScriptLoader }
    ]; };
    MapService = __decorate([
        Injectable(),
        __param(0, Inject(ScriptLoaderConfig))
    ], MapService);
    return MapService;
}());

var ControlComponent = /** @class */ (function () {
    function ControlComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    ControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.type, 'type is required for <control>');
        this.service
            .addControl(function () {
            _this.control = _this.createControl(_this.type, _this.options);
            return _this.control;
        })
            .then(function (_a) {
            var control = _a.control;
            _this.loaded.emit(control);
        });
    };
    ControlComponent.prototype.ngOnDestroy = function () {
        this.service.removeControl(this.control);
    };
    ControlComponent.prototype.createControl = function (type, options) {
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
        throw new Error("Unsupported type:" + type + " of control");
    };
    ControlComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
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
    return ControlComponent;
}());

var MapComponent = /** @class */ (function () {
    function MapComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
        this.clicked = new EventEmitter();
    }
    MapComponent.prototype.ngOnInit = function () {
        // do nothing
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        nullCheck(this.options, 'options is required for <baidu-map>');
        nullCheck(this.options.centerAndZoom, 'options.centerAndZoom is required for <baidu-map>');
        this.service
            .createMap(this.mapInstance.nativeElement, this.options)
            .then(function (map) {
            _this.loaded.emit(map);
            return map;
        })
            .then(function (map) {
            _this.addListener(map);
        });
    };
    MapComponent.prototype.ngOnChanges = function (changes) {
        var opts = changes.options.currentValue;
        if (!opts) {
            return console.warn('MapOptions change was ignored since you are passing empty value');
        }
        this.service.setOptions(opts);
    };
    MapComponent.prototype.ngOnDestroy = function () {
        console.log('on map destroy');
    };
    MapComponent.prototype.addListener = function (map) {
        var _this = this;
        map.addEventListener('click', function (e) {
            _this.clicked.emit(e);
        });
    };
    MapComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
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
            template: "\n    <div #mapinstance class=\"baidu-map-instance\"></div>\n    <div class=\"baidu-map-offline\">\n      <label>{{ 'NO_NETWORK' }}</label>\n    </div>\n    <div class=\"tranclude-content\">\n      <ng-content></ng-content>\n    </div>\n  ",
            styles: ["\n      .baidu-map-instance {\n        width: 100%;\n        height: 100%;\n        display: none;\n      }\n      .baidu-map-offline {\n        width: 100%;\n        height: 100%;\n        background-color: #e6e6e6;\n        position: relative;\n        display: none;\n      }\n      .baidu-map-offline label {\n        fontsize: 30px;\n        margin: 0;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-right: -50%;\n        transform: translate(-50%, -50%);\n      }\n      .tranclude-content {\n        display: none;\n      }\n    "]
        })
    ], MapComponent);
    return MapComponent;
}());

var MarkerComponent = /** @class */ (function () {
    function MarkerComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
        this.clicked = new EventEmitter();
    }
    MarkerComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.point, 'point is required for <marker>');
        this.marker = createMarker(this.point, this.options);
        this.service
            .addOverlay(function () {
            return _this.marker;
        })
            .then(function (_a) {
            var map = _a.map;
            _this.loaded.emit(_this.marker);
            _this.addListener(_this.marker, map);
        })
            .then(function () {
            // workaround: it's weird that postion is set while constructing phase will make click event not working
            _this.marker.setPosition(new window.BMap.Point(_this.point.lng, _this.point.lat));
        });
    };
    MarkerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.point && !changes.point.isFirstChange()) {
            this.marker.setPosition(toPoint(changes.point.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    };
    MarkerComponent.prototype.ngOnDestroy = function () {
        this.service.removeOverlay(this.marker);
    };
    MarkerComponent.prototype.setOptions = function (options) {
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
    };
    MarkerComponent.prototype.addListener = function (marker, map) {
        var _this = this;
        marker.addEventListener('click', function (e) {
            _this.clicked.emit({
                e: e,
                map: map,
                marker: marker
            });
        });
    };
    MarkerComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
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
    return MarkerComponent;
}());

var PolylineComponent = /** @class */ (function () {
    function PolylineComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
        this.clicked = new EventEmitter();
    }
    PolylineComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.points, 'points is required for <polyline>');
        this.service
            .addOverlay(function () {
            return (_this.polyline = new window.BMap.Polyline(toPoints(_this.points), _this.options));
        })
            .then(function (_a) {
            var map = _a.map;
            _this.loaded.emit(_this.polyline);
            _this.addListener(_this.polyline, map);
        });
    };
    PolylineComponent.prototype.ngOnChanges = function (changes) {
        if (changes.points && !changes.points.isFirstChange()) {
            this.polyline.setPath(toPoints(changes.points.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    };
    PolylineComponent.prototype.ngOnDestroy = function () {
        this.service.removeOverlay(this.polyline);
    };
    PolylineComponent.prototype.setOptions = function (options) {
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
    };
    PolylineComponent.prototype.addListener = function (polyline, map) {
        var _this = this;
        polyline.addEventListener('click', function (e) {
            console.log('sfdsfdsfds');
            _this.clicked.emit({
                e: e,
                map: map,
                polyline: polyline
            });
        });
    };
    PolylineComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
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
    return PolylineComponent;
}());

var CircleComponent = /** @class */ (function () {
    function CircleComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    CircleComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.center, 'center is required for <circle>');
        nullCheck(this.radius, 'center is required for <circle>');
        this.service
            .addOverlay(function () {
            return (_this.circle = new window.BMap.Circle(toPoint(_this.center), _this.radius, _this.options));
        })
            .then(function () {
            _this.loaded.emit(_this.circle);
        });
    };
    CircleComponent.prototype.ngOnChanges = function (changes) {
        if (changes.center && !changes.center.isFirstChange()) {
            this.circle.setCenter(toPoint(changes.center.currentValue));
        }
        if (changes.radius && !changes.radius.isFirstChange()) {
            this.circle.setRadius(changes.radius.currentValue);
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    };
    CircleComponent.prototype.ngOnDestroy = function () {
        this.service.removeOverlay(this.circle);
    };
    CircleComponent.prototype.setOptions = function (options) {
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
    };
    CircleComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
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
    return CircleComponent;
}());

var PolygonComponent = /** @class */ (function () {
    function PolygonComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    PolygonComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.points, 'points is required for <polygon>');
        this.service
            .addOverlay(function () {
            return (_this.polygon = new window.BMap.Polygon(toPoints(_this.points), _this.options));
        })
            .then(function () {
            _this.loaded.emit(_this.polygon);
        });
    };
    PolygonComponent.prototype.ngOnChanges = function (changes) {
        if (changes.points && !changes.points.isFirstChange()) {
            this.polygon.setPath(toPoints(changes.points.currentValue));
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.setOptions(changes.options.currentValue);
        }
    };
    PolygonComponent.prototype.ngOnDestroy = function () {
        this.service.removeOverlay(this.polygon);
    };
    PolygonComponent.prototype.setOptions = function (options) {
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
    };
    PolygonComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
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
    return PolygonComponent;
}());

var LIB_URL = "https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js";
var HeatmapComponent = /** @class */ (function () {
    function HeatmapComponent(service, scriptLoader) {
        this.service = service;
        this.scriptLoader = scriptLoader;
        this.loaded = new EventEmitter();
    }
    HeatmapComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.dataset, 'dataset is required for <heatmap>');
        this.service.getNativeMap().then(function () {
            return _this.scriptLoader.load(LIB_URL, false, function () {
                _this.service
                    .addOverlay(function () {
                    return (_this.heatmap = new window.BMapLib.HeatmapOverlay(_this.options));
                })
                    .then(function () {
                    _this.loaded.emit(_this.heatmap);
                    if (_this.dataset) {
                        _this.heatmap.setDataSet(_this.dataset);
                    }
                });
            });
        });
    };
    HeatmapComponent.prototype.ngOnChanges = function (changes) {
        if (changes.dataset && !changes.dataset.isFirstChange()) {
            this.heatmap.setDataSet(changes.dataset.currentValue);
        }
        if (changes.options && !changes.options.isFirstChange()) {
            this.heatmap.setOptions(changes.options.currentValue);
        }
    };
    HeatmapComponent.prototype.ngOnDestroy = function () {
        this.service.removeOverlay(this.heatmap);
    };
    HeatmapComponent.ctorParameters = function () { return [
        { type: MapService },
        { type: ScriptLoader }
    ]; };
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
    return HeatmapComponent;
}());

var TileLayerComponent = /** @class */ (function () {
    function TileLayerComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    TileLayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var func = this.getTilesUrl;
        this.service
            .addTileLayer(function () {
            _this.tilelayer = new window.BMap.TileLayer(_this.options);
            if (_this.getTilesUrl) {
                _this.tilelayer.getTilesUrl = function (tileCoord, zoom) {
                    return func(tileCoord, zoom);
                };
            }
            return _this.tilelayer;
        })
            .then(function () {
            _this.loaded.emit(_this.tilelayer);
        });
    };
    TileLayerComponent.prototype.ngOnDestroy = function () {
        this.service.removeTileLayer(this.tilelayer);
    };
    TileLayerComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
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
    return TileLayerComponent;
}());

var TrafficLayerComponent = /** @class */ (function () {
    function TrafficLayerComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    TrafficLayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .addTileLayer(function () {
            _this.trafficlayer = new window.BMap.TrafficLayer(_this.options);
            return _this.trafficlayer;
        })
            .then(function () {
            _this.loaded.emit(_this.trafficlayer);
        });
    };
    TrafficLayerComponent.prototype.ngOnDestroy = function () {
        this.service.removeTileLayer(this.trafficlayer);
    };
    TrafficLayerComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
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
    return TrafficLayerComponent;
}());

var CanvasLayerComponent = /** @class */ (function () {
    function CanvasLayerComponent(service) {
        this.service = service;
        this.loaded = new EventEmitter();
    }
    CanvasLayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .addOverlay(function (map) {
            _this.canvaslayer = new window.BMap.CanvasLayer(_this.getOptions(_this.options, map));
            return _this.canvaslayer;
        })
            .then(function () {
            _this.loaded.emit(_this.canvaslayer);
        });
    };
    CanvasLayerComponent.prototype.ngOnDestroy = function () {
        this.service.removeOverlay(this.canvaslayer);
    };
    CanvasLayerComponent.prototype.getOptions = function (options, map) {
        if (!options) {
            return;
        }
        var opts = {};
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
    };
    CanvasLayerComponent.ctorParameters = function () { return [
        { type: MapService }
    ]; };
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
    return CanvasLayerComponent;
}());

var LIB_URLS = {
    key: 'markerClusterer',
    scripts: [
        'https://api.map.baidu.com/library/MarkerClusterer/1.2/src/MarkerClusterer_min.js',
        'https://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js'
    ]
};
var MarkerClustererComponent = /** @class */ (function () {
    function MarkerClustererComponent(service, scriptLoader) {
        this.service = service;
        this.scriptLoader = scriptLoader;
        this.loaded = new EventEmitter();
    }
    MarkerClustererComponent.prototype.ngOnInit = function () {
        var _this = this;
        nullCheck(this.options, 'options is required for <marker-clusterer>');
        this.service.getNativeMap().then(function (map) {
            return _this.scriptLoader.load(LIB_URLS, false, function () {
                _this.markerClusterer = new window.BMapLib.MarkerClusterer(map, toMarkerClustererOptions(_this.options));
                _this.loaded.emit(_this.markerClusterer);
            });
        });
    };
    MarkerClustererComponent.prototype.ngOnChanges = function (changes) {
        if (changes.options && !changes.options.isFirstChange()) {
            this.resetOptions(changes.options.currentValue);
        }
    };
    MarkerClustererComponent.prototype.resetOptions = function (options) {
        if (options.markers) {
            this.markerClusterer.clearMarkers();
            this.markerClusterer.addMarkers(options.markers.map(function (m) {
                return createMarker(m.point, m.options);
            }));
        }
        if (!isUndefined(options.girdSize)) {
            this.markerClusterer.setGridSize(options.girdSize);
        }
        if (!isUndefined(options.maxZoom)) {
            this.markerClusterer.setMaxZoom(options.maxZoom);
        }
        if (options.styles) {
            this.markerClusterer.setStyles(options.styles.filter(function (s) { return s; }).map(function (s) { return toTextIconStyle(s); }));
        }
    };
    MarkerClustererComponent.prototype.ngOnDestroy = function () {
        this.markerClusterer.clearMarkers();
    };
    MarkerClustererComponent.ctorParameters = function () { return [
        { type: MapService },
        { type: ScriptLoader }
    ]; };
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
    return MarkerClustererComponent;
}());

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

var BaiduMapModule = /** @class */ (function () {
    function BaiduMapModule() {
    }
    BaiduMapModule_1 = BaiduMapModule;
    BaiduMapModule.forRoot = function (config) {
        return {
            ngModule: BaiduMapModule_1,
            providers: [
                { provide: ScriptLoaderConfig, useValue: config },
                ScriptLoader
            ]
        };
    };
    var BaiduMapModule_1;
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
    return BaiduMapModule;
}());

/*
 * Public API Surface of lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Animation, BaiduMapModule, ControlAnchor, LengthUnit, MapTypeControlType, MapTypeEnum, NavigationControlType, MapComponent as ɵa, MapService as ɵb, ScriptLoaderConfig as ɵc, ScriptLoader as ɵd, MarkerComponent as ɵe, ControlComponent as ɵf, PolylineComponent as ɵg, CircleComponent as ɵh, PolygonComponent as ɵi, HeatmapComponent as ɵj, TileLayerComponent as ɵk, TrafficLayerComponent as ɵl, CanvasLayerComponent as ɵm, MarkerClustererComponent as ɵn };
//# sourceMappingURL=angular2-baidu-map.js.map
