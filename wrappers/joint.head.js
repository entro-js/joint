(function(root, factory) {

    if (typeof define === 'function' && define.amd) {

        // For AMD.
        define(['backbone', 'lodash', 'jquery'], function(Backbone, _, $) {
            Backbone.$ = $;

            return factory(root, Backbone, _, $);
        });

    } else if (typeof exports !== 'undefined') {

        // For Node.js or CommonJS.
        var Backbone        = require('backbone');
        var lodash          = require('lodash');
        var jQuery          = Backbone.$ = require('jquery');

        module.exports = factory(root, Backbone, lodash, jQuery);
    } else {

        // As a browser global.
        var Backbone        = root.Backbone;
        var lodash          = root._;
        var jQuery          = Backbone.$ = root.jQuery || root.$;

        root.joint  = factory(root, Backbone, lodash, jQuery);
        root.g      = root.joint.g;
        root.V      = root.Vectorizer = root.joint.V;
    }

}(this, function(_root, _Backbone, _lodash, _jQuery) {

    var adapter = _root.joint && _root.joint.adapter;

    // Run adapter preload, allowing an adapter to override dependencies
    if (adapter) adapter.preload(arguments);

    var root         = _root;
    var Backbone     = _Backbone;
    var _            = _lodash;
    var $            = _jQuery;

