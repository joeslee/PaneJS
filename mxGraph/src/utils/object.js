import { isFunction, isUndefined, isArray, isObject } from './lang'
import { indexOf, each } from './array'

var hasOwn = Object.prototype.hasOwnProperty;

var hasKey = exports.hasKey = function hasKey(obj, key) {
    return obj !== null && hasOwn.call(obj, key);
};

var keys = exports.keys = Object.keys || function (obj) {
        // ie < 9 不考虑

        var keys = [];

        if (isObject(obj)) {
            for (var key in obj) {
                if (hasKey(obj, key)) {
                    keys.push(key);
                }
            }
        }

        return keys;
    };

function forIn(list, iterator, context, deep) {
    for (var key in list) {
        if (deep || hasKey(list, key)) {
            iterator.call(context, list[key], key, list);
        }
    }
}

function clone(obj, transients, shallow) {
    shallow = !!shallow;

    var cloned = null;

    if (obj && isFunction(obj.constructor)) {
        cloned = new obj.constructor();

        for (var key in obj) {
            if (key !== mxObjectIdentity.fieldName && (!transients || indexOf(transients, key) < 0)) {
                if (!shallow && typeof obj[key] === 'object') {
                    cloned[key] = clone(obj[key]);
                } else {
                    cloned[key] = obj[key];
                }
            }
        }
    }

    return cloned;
}

function extend(dist) {

    if (!dist) {
        dist = {};
    }

    for (var i = 1, length = arguments.length; i < length; i++) {
        var source = arguments[i];
        source && forIn(source, function (value, key) {
            dist[key] = value;
        });
    }

    return dist;
}

function getValue(obj, key, defaultValue) {
    var value = obj[key];

    if (isUndefined(value)) {
        value = defaultValue;
    }

    return value;
}

function getNumber(obj, key, defaultValue) {
    var value = obj ? obj[key] : null;

    if (isUndefined(value)) {
        value = defaultValue || 0;
    }

    return Number(value);
}

export {
    hasKey,
    keys,
    forIn,
    clone,
    extend,
    getValue,
    getNumber
};