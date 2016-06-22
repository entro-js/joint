(function(root, factory) {

    function getDependencies(Backbone, lodash, jQuery) {
        return {
            root:       root || {},
            Backbone:   Backbone,
            lodash:     lodash,
            jQuery:     jQuery
        }
    }

    if (typeof define === 'function' && define.amd) {

        // For AMD.
        define(['backbone', 'lodash', 'jquery'], function(Backbone, lodash, jQuery) {
            return factory(getDependencies((Backbone.$ = jQuery) && Backbone, lodash, jQuery));
        });

    } else if (typeof exports !== 'undefined') {

        // For Node.js or CommonJS.
        var Backbone = require('backbone');
        var lodash   = require('lodash');
        var jQuery   = Backbone.$ = require('jquery');

        module.exports = factory(getDependencies(Backbone, lodash, jQuery));
    } else {

        // As a browser global.
        var Backbone = root.Backbone;
        var lodash   = root._;
        var jQuery   = Backbone.$ = root.jQuery || root.$;

        root.joint   = factory(getDependencies(Backbone, lodash, jQuery));
        root.g       = root.joint.g;
        root.V       = root.Vectorizer = root.joint.V;
    }

}(this, function(dependencies) {

    var adapter = dependencies.root.joint && dependencies.root.joint.adapter;

    // Run adapter preload
    if (adapter) adapter.preload(dependencies);

    var root        = dependencies.root;
    var Backbone    = dependencies.Backbone;
    var _           = dependencies.lodash;
    var $           = dependencies.jQuery;

