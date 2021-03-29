export function isNull(obj) {
    return obj === null || obj === undefined;
}
export function isUndefined(obj) {
    return obj === undefined;
}
export function isBoolean(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
}
export function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
}
export function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
export function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
}
export function omit(obj) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItYmFpZHUtbWFwLyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvb2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxNQUFNLENBQUMsR0FBUTtJQUM3QixPQUFPLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsQ0FBQTtBQUMxQyxDQUFDO0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxHQUFRO0lBQ2xDLE9BQU8sR0FBRyxLQUFLLFNBQVMsQ0FBQTtBQUMxQixDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxHQUFRO0lBQ2hDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGtCQUFrQixDQUFBO0FBQ25FLENBQUM7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLEdBQVE7SUFDakMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssbUJBQW1CLENBQUE7QUFDcEUsQ0FBQztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsR0FBUTtJQUMvQixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxpQkFBaUIsQ0FBQTtBQUNsRSxDQUFDO0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxHQUFRO0lBQy9CLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLGlCQUFpQixDQUFBO0FBQ2xFLENBQUM7QUFFRCxNQUFNLFVBQVUsSUFBSSxDQUFJLEdBQU07SUFBRSxjQUFzQjtTQUF0QixVQUFzQixFQUF0QixxQkFBc0IsRUFBdEIsSUFBc0I7UUFBdEIsNkJBQXNCOztJQUNwRCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2hDLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFBO0lBQzFELE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FDckIsVUFBQyxDQUFDLEVBQUUsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDYixPQUFPLENBQUMsQ0FBQTtJQUNWLENBQUMsRUFDRCxFQUFPLENBQ1IsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNOdWxsKG9iajogYW55KSB7XHJcbiAgcmV0dXJuIG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqOiBhbnkpIHtcclxuICByZXR1cm4gb2JqID09PSB1bmRlZmluZWRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbihvYmo6IGFueSk6IG9iaiBpcyBib29sZWFuIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihvYmo6IGFueSk6IG9iaiBpcyBib29sZWFuIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKG9iajogYW55KTogb2JqIGlzIGJvb2xlYW4ge1xyXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG9iajogYW55KTogb2JqIGlzIGJvb2xlYW4ge1xyXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9taXQ8VD4ob2JqOiBULCAuLi5rZXlzOiBBcnJheTxzdHJpbmc+KTogVCB7XHJcbiAgY29uc3QgcmF3S2V5cyA9IE9iamVjdC5rZXlzKG9iailcclxuICBjb25zdCBmaW5hbEtleXMgPSByYXdLZXlzLmZpbHRlcihrID0+IGtleXMuaW5kZXhPZihrKSA8IDApXHJcbiAgcmV0dXJuIGZpbmFsS2V5cy5yZWR1Y2UoXHJcbiAgICAocCwgdikgPT4ge1xyXG4gICAgICBwW3ZdID0gb2JqW3ZdXHJcbiAgICAgIHJldHVybiBwXHJcbiAgICB9LFxyXG4gICAge30gYXMgVFxyXG4gIClcclxufVxyXG4iXX0=