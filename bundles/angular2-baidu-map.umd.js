(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular2-baidu-map', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['angular2-baidu-map'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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


    (function (MapTypeEnum) {
        MapTypeEnum["BMAP_NORMAL_MAP"] = "BMAP_NORMAL_MAP";
        MapTypeEnum["BMAP_PERSPECTIVE_MAP"] = "BMAP_PERSPECTIVE_MAP";
        MapTypeEnum["BMAP_SATELLITE_MAP"] = "BMAP_SATELLITE_MAP";
        MapTypeEnum["BMAP_HYBRID_MAP"] = "BMAP_HYBRID_MAP";
    })(exports.MapTypeEnum || (exports.MapTypeEnum = {}));
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
            core.Injectable()
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
            { type: ScriptLoaderConfig, decorators: [{ type: core.Inject, args: [ScriptLoaderConfig,] }] },
            { type: ScriptLoader }
        ]; };
        MapService = __decorate([
            core.Injectable(),
            __param(0, core.Inject(ScriptLoaderConfig))
        ], MapService);
        return MapService;
    }());

    var ControlComponent = /** @class */ (function () {
        function ControlComponent(service) {
            this.service = service;
            this.loaded = new core.EventEmitter();
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
            core.Input()
        ], ControlComponent.prototype, "type", void 0);
        __decorate([
            core.Input()
        ], ControlComponent.prototype, "options", void 0);
        __decorate([
            core.Output()
        ], ControlComponent.prototype, "loaded", void 0);
        ControlComponent = __decorate([
            core.Directive({
                selector: 'control'
            })
        ], ControlComponent);
        return ControlComponent;
    }());

    var MapComponent = /** @class */ (function () {
        function MapComponent(service) {
            this.service = service;
            this.loaded = new core.EventEmitter();
            this.clicked = new core.EventEmitter();
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
            core.Input()
        ], MapComponent.prototype, "options", void 0);
        __decorate([
            core.Output()
        ], MapComponent.prototype, "loaded", void 0);
        __decorate([
            core.Output()
        ], MapComponent.prototype, "clicked", void 0);
        __decorate([
            core.ViewChild('mapinstance', { static: false })
        ], MapComponent.prototype, "mapInstance", void 0);
        MapComponent = __decorate([
            core.Component({
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
            this.loaded = new core.EventEmitter();
            this.clicked = new core.EventEmitter();
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
            core.Input()
        ], MarkerComponent.prototype, "point", void 0);
        __decorate([
            core.Input()
        ], MarkerComponent.prototype, "options", void 0);
        __decorate([
            core.Output()
        ], MarkerComponent.prototype, "loaded", void 0);
        __decorate([
            core.Output()
        ], MarkerComponent.prototype, "clicked", void 0);
        MarkerComponent = __decorate([
            core.Directive({
                selector: 'marker'
            })
        ], MarkerComponent);
        return MarkerComponent;
    }());

    var PolylineComponent = /** @class */ (function () {
        function PolylineComponent(service) {
            this.service = service;
            this.loaded = new core.EventEmitter();
            this.clicked = new core.EventEmitter();
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
            core.Input()
        ], PolylineComponent.prototype, "points", void 0);
        __decorate([
            core.Input()
        ], PolylineComponent.prototype, "options", void 0);
        __decorate([
            core.Output()
        ], PolylineComponent.prototype, "loaded", void 0);
        __decorate([
            core.Output()
        ], PolylineComponent.prototype, "clicked", void 0);
        PolylineComponent = __decorate([
            core.Directive({
                selector: 'polyline'
            })
        ], PolylineComponent);
        return PolylineComponent;
    }());

    var CircleComponent = /** @class */ (function () {
        function CircleComponent(service) {
            this.service = service;
            this.loaded = new core.EventEmitter();
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
            core.Input()
        ], CircleComponent.prototype, "center", void 0);
        __decorate([
            core.Input()
        ], CircleComponent.prototype, "radius", void 0);
        __decorate([
            core.Input()
        ], CircleComponent.prototype, "options", void 0);
        __decorate([
            core.Output()
        ], CircleComponent.prototype, "loaded", void 0);
        CircleComponent = __decorate([
            core.Directive({
                selector: 'circle'
            })
        ], CircleComponent);
        return CircleComponent;
    }());

    var PolygonComponent = /** @class */ (function () {
        function PolygonComponent(service) {
            this.service = service;
            this.loaded = new core.EventEmitter();
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
            core.Input()
        ], PolygonComponent.prototype, "points", void 0);
        __decorate([
            core.Input()
        ], PolygonComponent.prototype, "options", void 0);
        __decorate([
            core.Output()
        ], PolygonComponent.prototype, "loaded", void 0);
        PolygonComponent = __decorate([
            core.Directive({
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
            this.loaded = new core.EventEmitter();
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
            core.Input()
        ], HeatmapComponent.prototype, "dataset", void 0);
        __decorate([
            core.Input()
        ], HeatmapComponent.prototype, "options", void 0);
        __decorate([
            core.Output()
        ], HeatmapComponent.prototype, "loaded", void 0);
        HeatmapComponent = __decorate([
            core.Directive({
                selector: 'heatmap'
            })
        ], HeatmapComponent);
        return HeatmapComponent;
    }());

    var TileLayerComponent = /** @class */ (function () {
        function TileLayerComponent(service) {
            this.service = service;
            this.loaded = new core.EventEmitter();
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
            core.Input()
        ], TileLayerComponent.prototype, "getTilesUrl", void 0);
        __decorate([
            core.Input()
        ], TileLayerComponent.prototype, "options", void 0);
        __decorate([
            core.Output()
        ], TileLayerComponent.prototype, "loaded", void 0);
        TileLayerComponent = __decorate([
            core.Directive({
                selector: 'tilelayer'
            })
        ], TileLayerComponent);
        return TileLayerComponent;
    }());

    var TrafficLayerComponent = /** @class */ (function () {
        function TrafficLayerComponent(service) {
            this.service = service;
            this.loaded = new core.EventEmitter();
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
            core.Input()
        ], TrafficLayerComponent.prototype, "options", void 0);
        __decorate([
            core.Output()
        ], TrafficLayerComponent.prototype, "loaded", void 0);
        TrafficLayerComponent = __decorate([
            core.Directive({
                selector: 'trafficlayer'
            })
        ], TrafficLayerComponent);
        return TrafficLayerComponent;
    }());

    var CanvasLayerComponent = /** @class */ (function () {
        function CanvasLayerComponent(service) {
            this.service = service;
            this.loaded = new core.EventEmitter();
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
            core.Input()
        ], CanvasLayerComponent.prototype, "options", void 0);
        __decorate([
            core.Output()
        ], CanvasLayerComponent.prototype, "loaded", void 0);
        CanvasLayerComponent = __decorate([
            core.Directive({
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
            this.loaded = new core.EventEmitter();
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
            core.Input()
        ], MarkerClustererComponent.prototype, "options", void 0);
        __decorate([
            core.Output()
        ], MarkerClustererComponent.prototype, "loaded", void 0);
        MarkerClustererComponent = __decorate([
            core.Directive({
                selector: 'marker-clusterer'
            })
        ], MarkerClustererComponent);
        return MarkerClustererComponent;
    }());


    (function (ControlAnchor) {
        ControlAnchor[ControlAnchor["BMAP_ANCHOR_TOP_LEFT"] = 0] = "BMAP_ANCHOR_TOP_LEFT";
        ControlAnchor[ControlAnchor["BMAP_ANCHOR_TOP_RIGHT"] = 1] = "BMAP_ANCHOR_TOP_RIGHT";
        ControlAnchor[ControlAnchor["BMAP_ANCHOR_BOTTOM_LEFT"] = 2] = "BMAP_ANCHOR_BOTTOM_LEFT";
        ControlAnchor[ControlAnchor["BMAP_ANCHOR_BOTTOM_RIGHT"] = 3] = "BMAP_ANCHOR_BOTTOM_RIGHT";
    })(exports.ControlAnchor || (exports.ControlAnchor = {}));

    (function (NavigationControlType) {
        NavigationControlType[NavigationControlType["BMAP_NAVIGATION_CONTROL_LARGE"] = 0] = "BMAP_NAVIGATION_CONTROL_LARGE";
        NavigationControlType[NavigationControlType["BMAP_NAVIGATION_CONTROL_SMALL"] = 1] = "BMAP_NAVIGATION_CONTROL_SMALL";
        NavigationControlType[NavigationControlType["BMAP_NAVIGATION_CONTROL_PAN"] = 2] = "BMAP_NAVIGATION_CONTROL_PAN";
        NavigationControlType[NavigationControlType["BMAP_NAVIGATION_CONTROL_ZOOM"] = 3] = "BMAP_NAVIGATION_CONTROL_ZOOM";
    })(exports.NavigationControlType || (exports.NavigationControlType = {}));

    (function (MapTypeControlType) {
        MapTypeControlType[MapTypeControlType["BMAP_MAPTYPE_CONTROL_HORIZONTAL"] = 0] = "BMAP_MAPTYPE_CONTROL_HORIZONTAL";
        MapTypeControlType[MapTypeControlType["BMAP_MAPTYPE_CONTROL_DROPDOWN"] = 1] = "BMAP_MAPTYPE_CONTROL_DROPDOWN";
        MapTypeControlType[MapTypeControlType["BMAP_MAPTYPE_CONTROL_MAP"] = 2] = "BMAP_MAPTYPE_CONTROL_MAP";
    })(exports.MapTypeControlType || (exports.MapTypeControlType = {}));

    (function (LengthUnit) {
        LengthUnit["BMAP_UNIT_METRIC"] = "metric";
        LengthUnit["BMAP_UNIT_IMPERIAL"] = "us";
    })(exports.LengthUnit || (exports.LengthUnit = {}));


    (function (Animation) {
        Animation[Animation["BMAP_ANIMATION_DROP"] = 1] = "BMAP_ANIMATION_DROP";
        Animation[Animation["BMAP_ANIMATION_BOUNCE"] = 2] = "BMAP_ANIMATION_BOUNCE";
    })(exports.Animation || (exports.Animation = {}));

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
            core.NgModule({
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

    exports.BaiduMapModule = BaiduMapModule;
    exports.ɵa = MapComponent;
    exports.ɵb = MapService;
    exports.ɵc = ScriptLoaderConfig;
    exports.ɵd = ScriptLoader;
    exports.ɵe = MarkerComponent;
    exports.ɵf = ControlComponent;
    exports.ɵg = PolylineComponent;
    exports.ɵh = CircleComponent;
    exports.ɵi = PolygonComponent;
    exports.ɵj = HeatmapComponent;
    exports.ɵk = TileLayerComponent;
    exports.ɵl = TrafficLayerComponent;
    exports.ɵm = CanvasLayerComponent;
    exports.ɵn = MarkerClustererComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular2-baidu-map.umd.js.map
