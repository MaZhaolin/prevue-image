var extendStyle = function extendStyle(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
};

var cached = function cached(fn) {
  var cache = undefined;
  return function () {
    return typeof cache === 'undefined' ? cache = fn() : cache;
  };
};

var hasScrollbar = function hasScrollbar() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
};
var getScrollbarWidth = cached(function () {
  var scrollDiv = document.createElement('div');
  scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
});

var script = {
  name: "ImagePreview",
  props: {
    img: {
      type: HTMLImageElement,
      required: true
    }
  },
  data: function data() {
    return {
      width: null,
      height: null,
      top: null,
      left: null,
      isActive: false
    };
  },
  created: function created() {
    var this$1 = this;
    var ref = this;
    var img = ref.img;
    this.initSize();
    var body = document.documentElement;
    var scrollbarWidth = getScrollbarWidth();
    extendStyle(document.body.style, {
      overflow: "hidden",
      paddingRight: hasScrollbar() ? scrollbarWidth + "px" : null
    });
    var scale = img.offsetHeight / img.offsetWidth;
    var naturalWidth = img.naturalWidth > body.offsetWidth - 100 ? body.offsetWidth - 100 : img.naturalWidth;
    var naturalHeight = naturalWidth * scale;
    this.$nextTick(function () {
      this$1.isActive = true;
      this$1.width = naturalWidth;
      this$1.height = naturalHeight;
      var top = (body.clientHeight - naturalHeight) / 2;
      this$1.top = top > 0 ? top : 0;
      this$1.left = (body.offsetWidth - naturalWidth) / 2;
    });
  },
  methods: {
    initSize: function initSize() {
      var ref = this;
      var img = ref.img;
      var ref$1 = img.getBoundingClientRect();
      var top = ref$1.top;
      var left = ref$1.left;
      this.isActive = false;
      this.width = img.clientWidth;
      this.height = img.clientHeight;
      this.top = top;
      this.left = left;
    },
    remove: function remove() {
      var this$1 = this;
      this.initSize();
      setTimeout(function () {
        this$1.$destroy();
        this$1.$el.parentElement.removeChild(this$1.$el);
        extendStyle(document.body.style, {
          overflow: null,
          paddingRight: null
        });
      }, 300);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}

var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';

      if (css.media) {
        style.element.setAttribute('media', css.media);
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;

      if (nodes[index]) {
        style.element.removeChild(nodes[index]);
      }

      if (nodes.length) {
        style.element.insertBefore(textNode, nodes[index]);
      } else {
        style.element.appendChild(textNode);
      }
    }
  }
}

var browser = createInjector;

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "preview-image",
      class: { "is-active": _vm.isActive },
      on: { click: _vm.remove }
    },
    [
      _c("img", {
        style: {
          width: _vm.width + "px",
          height: _vm.height + "px",
          top: _vm.top + "px",
          left: _vm.left + "px"
        },
        attrs: { src: _vm.img.src }
      })
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-7565862c_0", { source: ".preview-image {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  overflow: auto;\n  transition: background-color 0.4s cubic-bezier(0.4, 0, 0, 1) 0s;\n}\n.preview-image.is-active {\n  background-color: rgba(26, 26, 26, 0.65);\n}\n.preview-image img {\n  position: absolute;\n  transition: 0.4s cubic-bezier(0.4, 0, 0, 1) 0s;\n  cursor: zoom-out;\n}\n", map: {"version":3,"sources":["ImagePreview.vue"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;EACR,aAAa;EACb,cAAc;EACd,+DAA+D;AACjE;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,kBAAkB;EAClB,8CAA8C;EAC9C,gBAAgB;AAClB","file":"ImagePreview.vue","sourcesContent":[".preview-image {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  overflow: auto;\n  transition: background-color 0.4s cubic-bezier(0.4, 0, 0, 1) 0s;\n}\n.preview-image.is-active {\n  background-color: rgba(26, 26, 26, 0.65);\n}\n.preview-image img {\n  position: absolute;\n  transition: 0.4s cubic-bezier(0.4, 0, 0, 1) 0s;\n  cursor: zoom-out;\n}\n"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var ImagePreview = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  )

var index = {
  install: function install(Vue) {
    var directive = {
      inserted: function inserted(el, binding) {
        el.addEventListener('click', function (ref) {
          var target = ref.target;

          if (target.tagName === 'IMG') {
            var box = document.createElement('div');
            var props = {
              img: target
            };
            var ins = new Vue({
              el: box,
              render: function render(h) {
                return h(ImagePreview, {
                  props: props
                });
              }
            });
            document.body.appendChild(ins.$el);
          }
        });
      }
    };
    Vue.directive('prevue-image', directive);
  }
};

export default index;
