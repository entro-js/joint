(function (root, factory) {
  var module = 'joint-adapter';

  // AMD
  if(typeof define === "function" && define.amd) {
    define(module, [], function(){
      return (root[module] = factory(root));
    });

  }

  // CommonJS + NodeJS
  else if(typeof module === "object" && module.exports) {
    module.exports = (root[module] = factory(root));
  }

  // Plain JS
  else root[module] = factory(root);

}(this, function (root) {

  function preload(dependencies, callback) {
    dependencies = dependencies || [];

    var preloadList = this.plugins.preload;

    if (preloadList.length) preloadList.forEach(function (plugin) {
      plugin(dependencies);
    });

    if (callback) callback(dependencies);
  }

  function load(joint, callback) {

    var loadList = this.plugins.load;

    if (loadList.length) loadList.forEach(function (plugin) {
      plugin(joint);
    });

    if (callback) callback(joint);
  }

  function JointAdapter() {
    var _this = this;

    function addPlugin(plugin, list) {
      if (list.indexOf(plugin) === -1) list.push(plugin);
    }

    function addPreloadPlugin(plugin) {
      addPlugin(plugin, _this.plugins.preload);
    }

    function addLoadPlugin(plugin) {
      addPlugin(plugin, _this.plugins.load);
    }

    _this.plugins = {
      preload:  [],
      load:     []
    };

    _this.actions = {
      addPreloadPlugin: addPreloadPlugin,
      addPlugin:        addLoadPlugin
    };
  }

  JointAdapter.prototype.preload  = preload;
  JointAdapter.prototype.load     = load;

  var adapter = new JointAdapter();

  if (!root.joint) root.joint = {};

  return root.joint.adapter = adapter;

}));
