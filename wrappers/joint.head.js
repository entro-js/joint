(function(root, factory) {

    function init(dependencies, callback) {
        return dependencies._JointAdapter ? dependencies._JointAdapter.preload(dependencies, callback) : callback(dependencies);
    }

    function mapDependencies(root, Backbone, lodash, jQuery, JointAdapter) {
        return {
            _root:           root,
            _Backbone:       Backbone,
            _lodash:         lodash,
            _jQuery:         jQuery,
            _JointAdapter:   JointAdapter
        }
    }

    if (typeof define === 'function' && define.amd) {

        // For AMD.

        define(['backbone', 'lodash', 'jquery', 'jointadapter'], function(Backbone, _, $, JointAdapter) {

            Backbone.$ = $;

            init(mapDependencies(root, Backbone, _, $, JointAdapter), function (dependencies) {
                return factory(dependencies);
            });
        });

    } else if (typeof exports !== 'undefined') {

        // For Node.js or CommonJS.

        var Backbone        = require('backbone');
        var lodash          = require('lodash');
        var jQuery          = Backbone.$ = require('jquery');
        var JointAdapter    = require('jointadapter');

        init(mapDependencies(root, Backbone, lodash, jQuery, JointAdapter), function (dependencies) {
            module.exports = factory(dependencies);
        });

    } else {

        // As a browser global.

        var Backbone        = root.Backbone;
        var lodash          = root._;
        var jQuery          = Backbone.$ = root.jQuery || root.$;
        var JointAdapter    = root.JointAdapter;

        init(mapDependencies(root, Backbone, lodash, jQuery, JointAdapter), function (dependencies) {
            root.joint  = factory(dependencies);
            root.g      = root.joint.g;
            root.V      = root.Vectorizer = root.joint.V;
        });
    }

}(this, function(dependencies) {
    dependencies = dependencies || {};

    var root         = dependencies._root;
    var Backbone     = dependencies._Backbone;
    var _            = dependencies._lodash;
    var $            = dependencies._jQuery;
    var JointAdapter = dependencies._JointAdapter;
