import {
  require_react
} from "./chunk-2DJWE3DI.mjs";
import {
  convert
} from "./chunk-TLOTS4Y4.mjs";
import {
  __commonJS,
  __toESM,
  init_esm
} from "./chunk-LL4QQ7FC.mjs";

// ../../node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react-jsx-runtime.production.js
var require_react_jsx_runtime_production = __commonJS({
  "../../node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react-jsx-runtime.production.js"(exports) {
    "use strict";
    init_esm();
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    function jsxProd(type, config, maybeKey) {
      var key = null;
      void 0 !== maybeKey && (key = "" + maybeKey);
      void 0 !== config.key && (key = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      config = maybeKey.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== config ? config : null,
        props: maybeKey
      };
    }
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = jsxProd;
    exports.jsxs = jsxProd;
  }
});

// ../../node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "../../node_modules/.pnpm/react@19.0.0/node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    init_esm();
    "production" !== process.env.NODE_ENV && function() {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x2) {
              }
          }
        return null;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function disabledLog() {
      }
      function disableLogs() {
        if (0 === disabledDepth) {
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd;
          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          };
          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
        }
        disabledDepth++;
      }
      function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
          var props = { configurable: true, enumerable: true, writable: true };
          Object.defineProperties(console, {
            log: assign({}, props, { value: prevLog }),
            info: assign({}, props, { value: prevInfo }),
            warn: assign({}, props, { value: prevWarn }),
            error: assign({}, props, { value: prevError }),
            group: assign({}, props, { value: prevGroup }),
            groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
            groupEnd: assign({}, props, { value: prevGroupEnd })
          });
        }
        0 > disabledDepth && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix)
          try {
            throw Error();
          } catch (x2) {
            var match = x2.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x2.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x2.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return "\n" + prefix + name + suffix;
      }
      function describeNativeComponentFrame(fn3, construct) {
        if (!fn3 || reentry) return "";
        var frame = componentFrameCache.get(fn3);
        if (void 0 !== frame) return frame;
        reentry = true;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
          var RunInRootFrame = {
            DetermineComponentFrameRoot: function() {
              try {
                if (construct) {
                  var Fake = function() {
                    throw Error();
                  };
                  Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  });
                  if ("object" === typeof Reflect && Reflect.construct) {
                    try {
                      Reflect.construct(Fake, []);
                    } catch (x2) {
                      var control = x2;
                    }
                    Reflect.construct(fn3, [], Fake);
                  } else {
                    try {
                      Fake.call();
                    } catch (x$0) {
                      control = x$0;
                    }
                    fn3.call(Fake.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (x$1) {
                    control = x$1;
                  }
                  (Fake = fn3()) && "function" === typeof Fake.catch && Fake.catch(function() {
                  });
                }
              } catch (sample) {
                if (sample && control && "string" === typeof sample.stack)
                  return [sample.stack, control.stack];
              }
              return [null, null];
            }
          };
          RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var namePropDescriptor = Object.getOwnPropertyDescriptor(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name"
          );
          namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
            RunInRootFrame.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
          if (sampleStack && controlStack) {
            var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
            for (_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes(
              "DetermineComponentFrameRoot"
            ); )
              namePropDescriptor++;
            for (; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes(
              "DetermineComponentFrameRoot"
            ); )
              _RunInRootFrame$Deter++;
            if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length)
              for (namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]; )
                _RunInRootFrame$Deter--;
            for (; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)
              if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                  do
                    if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                      var _frame = "\n" + sampleLines[namePropDescriptor].replace(
                        " at new ",
                        " at "
                      );
                      fn3.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn3.displayName));
                      "function" === typeof fn3 && componentFrameCache.set(fn3, _frame);
                      return _frame;
                    }
                  while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                }
                break;
              }
          }
        } finally {
          reentry = false, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn3 ? fn3.displayName || fn3.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn3 && componentFrameCache.set(fn3, sampleLines);
        return sampleLines;
      }
      function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type) return "";
        if ("function" === typeof type) {
          var prototype = type.prototype;
          return describeNativeComponentFrame(
            type,
            !(!prototype || !prototype.isReactComponent)
          );
        }
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type)
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return type = describeNativeComponentFrame(type.render, false), type;
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
              prototype = type._payload;
              type = type._init;
              try {
                return describeUnknownElementTypeFrameInDEV(type(prototype));
              } catch (x2) {
              }
          }
        return "";
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, self, source, owner, props) {
        self = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
        if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId)) {
          var children = config.children;
          if (void 0 !== children)
            if (isStaticChildren)
              if (isArrayImpl(children)) {
                for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                  validateChildKeys(children[isStaticChildren], type);
                Object.freeze && Object.freeze(children);
              } else
                console.error(
                  "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                );
            else validateChildKeys(children, type);
        } else {
          children = "";
          if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length)
            children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
          console.error(
            "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            isStaticChildren,
            children
          );
        }
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function(k3) {
            return "key" !== k3;
          });
          isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ), didWarnAboutKeySpread[children + isStaticChildren] = true);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(type, children, self, source, getOwner(), maybeKey);
      }
      function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
          if (isArrayImpl(node))
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              isValidElement(child) && validateExplicitKey(child, parentType);
            }
          else if (isValidElement(node))
            node._store && (node._store.validated = 1);
          else if (null === node || "object" !== typeof node ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = "function" === typeof i ? i : null), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node))
            for (; !(node = i.next()).done; )
              isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
      }
      function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
          ownerHasKeyUseWarning[parentType] = true;
          var childOwner = "";
          element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
          var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
          ReactSharedInternals.getCurrentStack = function() {
            var stack = describeUnknownElementTypeFrameInDEV(element.type);
            prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
            return stack;
          };
          console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            parentType,
            childOwner
          );
          ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
      }
      function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
      }
      var React = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      Symbol.for("react.provider");
      var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl = Array.isArray, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
      disabledLog.__reactDisabledLog = true;
      var prefix, suffix, reentry = false;
      var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
      var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.jsx = function(type, config, maybeKey, source, self) {
        return jsxDEVImpl(type, config, maybeKey, false, source, self);
      };
      exports.jsxs = function(type, config, maybeKey, source, self) {
        return jsxDEVImpl(type, config, maybeKey, true, source, self);
      };
    }();
  }
});

// ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    init_esm();
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_jsx_runtime_production();
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// ../../node_modules/.pnpm/@react-email+render@1.0.6_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@react-email/render/dist/node/index.mjs
init_esm();
var import_react = __toESM(require_react(), 1);

// ../../node_modules/.pnpm/prettier@3.5.3/node_modules/prettier/plugins/html.mjs
init_esm();
var sn = Object.defineProperty;
var an = (t7) => {
  throw TypeError(t7);
};
var li = (t7, e, r) => e in t7 ? sn(t7, e, { enumerable: true, configurable: true, writable: true, value: r }) : t7[e] = r;
var on = (t7, e) => {
  for (var r in e) sn(t7, r, { get: e[r], enumerable: true });
};
var lr = (t7, e, r) => li(t7, typeof e != "symbol" ? e + "" : e, r);
var un = (t7, e, r) => e.has(t7) || an("Cannot " + r);
var R = (t7, e, r) => (un(t7, e, "read from private field"), r ? r.call(t7) : e.get(t7));
var Et = (t7, e, r) => e.has(t7) ? an("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t7) : e.set(t7, r);
var ln = (t7, e, r, n) => (un(t7, e, "write to private field"), n ? n.call(t7, r) : e.set(t7, r), r);
var en = {};
on(en, { languages: () => xs, options: () => Bs, parsers: () => Zr, printers: () => Uo });
var ci = (t7, e, r, n) => {
  if (!(t7 && e == null)) return e.replaceAll ? e.replaceAll(r, n) : r.global ? e.replace(r, n) : e.split(r).join(n);
};
var w = ci;
var ye = "string";
var Ge = "array";
var Ye = "cursor";
var we = "indent";
var be = "align";
var je = "trim";
var Te = "group";
var xe = "fill";
var ce = "if-break";
var ke = "indent-if-break";
var Ke = "line-suffix";
var Qe = "line-suffix-boundary";
var j = "line";
var Xe = "label";
var Be = "break-parent";
var At = /* @__PURE__ */ new Set([Ye, we, be, je, Te, xe, ce, ke, Ke, Qe, j, Xe, Be]);
var pi = (t7, e, r) => {
  if (!(t7 && e == null)) return Array.isArray(e) || typeof e == "string" ? e[r < 0 ? e.length + r : r] : e.at(r);
};
var K = pi;
function hi(t7) {
  if (typeof t7 == "string") return ye;
  if (Array.isArray(t7)) return Ge;
  if (!t7) return;
  let { type: e } = t7;
  if (At.has(e)) return e;
}
var Le = hi;
var fi = (t7) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(t7);
function mi(t7) {
  let e = t7 === null ? "null" : typeof t7;
  if (e !== "string" && e !== "object") return `Unexpected doc '${e}', 
Expected it to be 'string' or 'object'.`;
  if (Le(t7)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(t7);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = fi([...At].map((s) => `'${s}'`));
  return `Unexpected doc.type '${t7.type}'.
Expected it to be ${n}.`;
}
var cr = class extends Error {
  name = "InvalidDocError";
  constructor(e) {
    super(mi(e)), this.doc = e;
  }
};
var pr = cr;
function hr(t7, e) {
  if (typeof t7 == "string") return e(t7);
  let r = /* @__PURE__ */ new Map();
  return n(t7);
  function n(i) {
    if (r.has(i)) return r.get(i);
    let a = s(i);
    return r.set(i, a), a;
  }
  function s(i) {
    switch (Le(i)) {
      case Ge:
        return e(i.map(n));
      case xe:
        return e({ ...i, parts: i.parts.map(n) });
      case ce:
        return e({ ...i, breakContents: n(i.breakContents), flatContents: n(i.flatContents) });
      case Te: {
        let { expandedStates: a, contents: o } = i;
        return a ? (a = a.map(n), o = a[0]) : o = n(o), e({ ...i, contents: o, expandedStates: a });
      }
      case be:
      case we:
      case ke:
      case Xe:
      case Ke:
        return e({ ...i, contents: n(i.contents) });
      case ye:
      case Ye:
      case je:
      case Qe:
      case j:
      case Be:
        return e(i);
      default:
        throw new pr(i);
    }
  }
}
function B(t7, e = cn) {
  return hr(t7, (r) => typeof r == "string" ? H(e, r.split(`
`)) : r);
}
var fr = () => {
};
var ne = fr;
var mr = fr;
var pn = fr;
function k(t7) {
  return ne(t7), { type: we, contents: t7 };
}
function hn(t7, e) {
  return ne(e), { type: be, contents: e, n: t7 };
}
function E(t7, e = {}) {
  return ne(t7), mr(e.expandedStates, true), { type: Te, id: e.id, contents: t7, break: !!e.shouldBreak, expandedStates: e.expandedStates };
}
function fn(t7) {
  return hn(Number.NEGATIVE_INFINITY, t7);
}
function mn(t7) {
  return hn({ type: "root" }, t7);
}
function Dt(t7) {
  return pn(t7), { type: xe, parts: t7 };
}
function pe(t7, e = "", r = {}) {
  return ne(t7), e !== "" && ne(e), { type: ce, breakContents: t7, flatContents: e, groupId: r.groupId };
}
function dn(t7, e) {
  return ne(t7), { type: ke, contents: t7, groupId: e.groupId, negate: e.negate };
}
var se = { type: Be };
var gi = { type: j, hard: true };
var Ci = { type: j, hard: true, literal: true };
var _ = { type: j };
var v = { type: j, soft: true };
var S = [gi, se];
var cn = [Ci, se];
function H(t7, e) {
  ne(t7), mr(e);
  let r = [];
  for (let n = 0; n < e.length; n++) n !== 0 && r.push(t7), r.push(e[n]);
  return r;
}
var vt = "'";
var gn = '"';
function Si(t7, e) {
  let r = e === true || e === vt ? vt : gn, n = r === vt ? gn : vt, s = 0, i = 0;
  for (let a of t7) a === r ? s++ : a === n && i++;
  return s > i ? n : r;
}
var Cn = Si;
function dr(t7) {
  if (typeof t7 != "string") throw new TypeError("Expected a string");
  return t7.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var V;
var gr = class {
  constructor(e) {
    Et(this, V);
    ln(this, V, new Set(e));
  }
  getLeadingWhitespaceCount(e) {
    let r = R(this, V), n = 0;
    for (let s = 0; s < e.length && r.has(e.charAt(s)); s++) n++;
    return n;
  }
  getTrailingWhitespaceCount(e) {
    let r = R(this, V), n = 0;
    for (let s = e.length - 1; s >= 0 && r.has(e.charAt(s)); s--) n++;
    return n;
  }
  getLeadingWhitespace(e) {
    let r = this.getLeadingWhitespaceCount(e);
    return e.slice(0, r);
  }
  getTrailingWhitespace(e) {
    let r = this.getTrailingWhitespaceCount(e);
    return e.slice(e.length - r);
  }
  hasLeadingWhitespace(e) {
    return R(this, V).has(e.charAt(0));
  }
  hasTrailingWhitespace(e) {
    return R(this, V).has(K(false, e, -1));
  }
  trimStart(e) {
    let r = this.getLeadingWhitespaceCount(e);
    return e.slice(r);
  }
  trimEnd(e) {
    let r = this.getTrailingWhitespaceCount(e);
    return e.slice(0, e.length - r);
  }
  trim(e) {
    return this.trimEnd(this.trimStart(e));
  }
  split(e, r = false) {
    let n = `[${dr([...R(this, V)].join(""))}]+`, s = new RegExp(r ? `(${n})` : n, "u");
    return e.split(s);
  }
  hasWhitespaceCharacter(e) {
    let r = R(this, V);
    return Array.prototype.some.call(e, (n) => r.has(n));
  }
  hasNonWhitespaceCharacter(e) {
    let r = R(this, V);
    return Array.prototype.some.call(e, (n) => !r.has(n));
  }
  isWhitespaceOnly(e) {
    let r = R(this, V);
    return Array.prototype.every.call(e, (n) => r.has(n));
  }
};
V = /* @__PURE__ */ new WeakMap();
var Sn = gr;
var _i = ["	", `
`, "\f", "\r", " "];
var Ei = new Sn(_i);
var O = Ei;
var Cr = class extends Error {
  name = "UnexpectedNodeError";
  constructor(e, r, n = "type") {
    super(`Unexpected ${r} node ${n}: ${JSON.stringify(e[n])}.`), this.node = e;
  }
};
var _n = Cr;
function Ai(t7) {
  return (t7 == null ? void 0 : t7.type) === "front-matter";
}
var Fe = Ai;
var Di = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan", "keySpan", "tagDefinition", "tokens", "valueTokens", "switchValueSourceSpan", "expSourceSpan", "valueSourceSpan"]);
var vi = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function En(t7, e) {
  var r;
  if (t7.type === "text" || t7.type === "comment" || Fe(t7) || t7.type === "yaml" || t7.type === "toml") return null;
  if (t7.type === "attribute" && delete e.value, t7.type === "docType" && delete e.value, t7.type === "angularControlFlowBlock" && ((r = t7.parameters) != null && r.children)) for (let n of e.parameters.children) vi.has(t7.name) ? delete n.expression : n.expression = n.expression.trim();
  t7.type === "angularIcuExpression" && (e.switchValue = t7.switchValue.trim()), t7.type === "angularLetDeclarationInitializer" && delete e.value;
}
En.ignoredProperties = Di;
var An = En;
async function yi(t7, e) {
  if (t7.language === "yaml") {
    let r = t7.value.trim(), n = r ? await e(r, { parser: "yaml" }) : "";
    return mn([t7.startDelimiter, t7.explicitLanguage, S, n, n ? S : "", t7.endDelimiter]);
  }
}
var Dn = yi;
function he(t7, e = true) {
  return [k([v, t7]), e ? v : ""];
}
function Q(t7, e) {
  let r = t7.type === "NGRoot" ? t7.node.type === "NGMicrosyntax" && t7.node.body.length === 1 && t7.node.body[0].type === "NGMicrosyntaxExpression" ? t7.node.body[0].expression : t7.node : t7.type === "JsExpressionRoot" ? t7.node : t7;
  return r && (r.type === "ObjectExpression" || r.type === "ArrayExpression" || (e.parser === "__vue_expression" || e.parser === "__vue_ts_expression") && (r.type === "TemplateLiteral" || r.type === "StringLiteral"));
}
async function T(t7, e, r, n) {
  r = { __isInHtmlAttribute: true, __embeddedInHtml: true, ...r };
  let s = true;
  n && (r.__onHtmlBindingRoot = (a, o) => {
    s = n(a, o);
  });
  let i = await e(t7, r, e);
  return s ? E(i) : he(i);
}
function wi(t7, e, r, n) {
  let { node: s } = r, i = n.originalText.slice(s.sourceSpan.start.offset, s.sourceSpan.end.offset);
  return /^\s*$/u.test(i) ? "" : T(i, t7, { parser: "__ng_directive", __isInHtmlAttribute: false }, Q);
}
var vn = wi;
var bi = (t7) => String(t7).split(/[/\\]/u).pop();
function yn(t7, e) {
  if (!e) return;
  let r = bi(e).toLowerCase();
  return t7.find(({ filenames: n }) => n == null ? void 0 : n.some((s) => s.toLowerCase() === r)) ?? t7.find(({ extensions: n }) => n == null ? void 0 : n.some((s) => r.endsWith(s)));
}
function Ti(t7, e) {
  if (e) return t7.find(({ name: r }) => r.toLowerCase() === e) ?? t7.find(({ aliases: r }) => r == null ? void 0 : r.includes(e)) ?? t7.find(({ extensions: r }) => r == null ? void 0 : r.includes(`.${e}`));
}
function xi(t7, e) {
  let r = t7.plugins.flatMap((s) => s.languages ?? []), n = Ti(r, e.language) ?? yn(r, e.physicalFile) ?? yn(r, e.file) ?? (e.physicalFile, void 0);
  return n == null ? void 0 : n.parsers[0];
}
var Ne = xi;
var wn = "inline";
var bn = { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", style: "none", template: "inline", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", dialog: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", search: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", menu: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", input: "inline-block", button: "inline-block", fieldset: "block", details: "block", summary: "block", marquee: "inline-block", source: "block", track: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" };
var Tn = "normal";
var xn = { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" };
function ki(t7) {
  return t7.type === "element" && !t7.hasExplicitNamespace && !["html", "svg"].includes(t7.namespace);
}
var fe = ki;
var Bi = (t7) => w(false, t7, /^[\t\f\r ]*\n/gu, "");
var Sr = (t7) => Bi(O.trimEnd(t7));
var kn = (t7) => {
  let e = t7, r = O.getLeadingWhitespace(e);
  r && (e = e.slice(r.length));
  let n = O.getTrailingWhitespace(e);
  return n && (e = e.slice(0, -n.length)), { leadingWhitespace: r, trailingWhitespace: n, text: e };
};
function yt(t7, e) {
  return !!(t7.type === "ieConditionalComment" && t7.lastChild && !t7.lastChild.isSelfClosing && !t7.lastChild.endSourceSpan || t7.type === "ieConditionalComment" && !t7.complete || me(t7) && t7.children.some((r) => r.type !== "text" && r.type !== "interpolation") || Tt(t7, e) && !W(t7) && t7.type !== "interpolation");
}
function de(t7) {
  return t7.type === "attribute" || !t7.parent || !t7.prev ? false : Li(t7.prev);
}
function Li(t7) {
  return t7.type === "comment" && t7.value.trim() === "prettier-ignore";
}
function $(t7) {
  return t7.type === "text" || t7.type === "comment";
}
function W(t7) {
  return t7.type === "element" && (t7.fullName === "script" || t7.fullName === "style" || t7.fullName === "svg:style" || t7.fullName === "svg:script" || fe(t7) && (t7.name === "script" || t7.name === "style"));
}
function Bn(t7) {
  return t7.children && !W(t7);
}
function Ln(t7) {
  return W(t7) || t7.type === "interpolation" || _r(t7);
}
function _r(t7) {
  return Vn(t7).startsWith("pre");
}
function Fn(t7, e) {
  var s, i;
  let r = n();
  if (r && !t7.prev && ((i = (s = t7.parent) == null ? void 0 : s.tagDefinition) != null && i.ignoreFirstLf)) return t7.type === "interpolation";
  return r;
  function n() {
    return Fe(t7) || t7.type === "angularControlFlowBlock" ? false : (t7.type === "text" || t7.type === "interpolation") && t7.prev && (t7.prev.type === "text" || t7.prev.type === "interpolation") ? true : !t7.parent || t7.parent.cssDisplay === "none" ? false : me(t7.parent) ? true : !(!t7.prev && (t7.parent.type === "root" || me(t7) && t7.parent || W(t7.parent) || et(t7.parent, e) || !$i(t7.parent.cssDisplay)) || t7.prev && !qi(t7.prev.cssDisplay));
  }
}
function Nn(t7, e) {
  return Fe(t7) || t7.type === "angularControlFlowBlock" ? false : (t7.type === "text" || t7.type === "interpolation") && t7.next && (t7.next.type === "text" || t7.next.type === "interpolation") ? true : !t7.parent || t7.parent.cssDisplay === "none" ? false : me(t7.parent) ? true : !(!t7.next && (t7.parent.type === "root" || me(t7) && t7.parent || W(t7.parent) || et(t7.parent, e) || !Oi(t7.parent.cssDisplay)) || t7.next && !Mi(t7.next.cssDisplay));
}
function Pn(t7) {
  return Hi(t7.cssDisplay) && !W(t7);
}
function Je(t7) {
  return Fe(t7) || t7.next && t7.sourceSpan.end && t7.sourceSpan.end.line + 1 < t7.next.sourceSpan.start.line;
}
function In(t7) {
  return Er(t7) || t7.type === "element" && t7.children.length > 0 && (["body", "script", "style"].includes(t7.name) || t7.children.some((e) => Ni(e))) || t7.firstChild && t7.firstChild === t7.lastChild && t7.firstChild.type !== "text" && $n(t7.firstChild) && (!t7.lastChild.isTrailingSpaceSensitive || On(t7.lastChild));
}
function Er(t7) {
  return t7.type === "element" && t7.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(t7.name) || t7.cssDisplay.startsWith("table") && t7.cssDisplay !== "table-cell");
}
function wt(t7) {
  return Mn(t7) || t7.prev && Fi(t7.prev) || Rn(t7);
}
function Fi(t7) {
  return Mn(t7) || t7.type === "element" && t7.fullName === "br" || Rn(t7);
}
function Rn(t7) {
  return $n(t7) && On(t7);
}
function $n(t7) {
  return t7.hasLeadingSpaces && (t7.prev ? t7.prev.sourceSpan.end.line < t7.sourceSpan.start.line : t7.parent.type === "root" || t7.parent.startSourceSpan.end.line < t7.sourceSpan.start.line);
}
function On(t7) {
  return t7.hasTrailingSpaces && (t7.next ? t7.next.sourceSpan.start.line > t7.sourceSpan.end.line : t7.parent.type === "root" || t7.parent.endSourceSpan && t7.parent.endSourceSpan.start.line > t7.sourceSpan.end.line);
}
function Mn(t7) {
  switch (t7.type) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return true;
    case "element":
      return ["script", "select"].includes(t7.name);
  }
  return false;
}
function bt(t7) {
  return t7.lastChild ? bt(t7.lastChild) : t7;
}
function Ni(t7) {
  var e;
  return (e = t7.children) == null ? void 0 : e.some((r) => r.type !== "text");
}
function qn(t7) {
  if (t7) switch (t7) {
    case "module":
    case "text/javascript":
    case "text/babel":
    case "application/javascript":
      return "babel";
    case "application/x-typescript":
      return "typescript";
    case "text/markdown":
      return "markdown";
    case "text/html":
      return "html";
    case "text/x-handlebars-template":
      return "glimmer";
    default:
      if (t7.endsWith("json") || t7.endsWith("importmap") || t7 === "speculationrules") return "json";
  }
}
function Pi(t7, e) {
  let { name: r, attrMap: n } = t7;
  if (r !== "script" || Object.prototype.hasOwnProperty.call(n, "src")) return;
  let { type: s, lang: i } = t7.attrMap;
  return !i && !s ? "babel" : Ne(e, { language: i }) ?? qn(s);
}
function Ii(t7, e) {
  if (!Tt(t7, e)) return;
  let { attrMap: r } = t7;
  if (Object.prototype.hasOwnProperty.call(r, "src")) return;
  let { type: n, lang: s } = r;
  return Ne(e, { language: s }) ?? qn(n);
}
function Ri(t7, e) {
  if (t7.name !== "style") return;
  let { lang: r } = t7.attrMap;
  return r ? Ne(e, { language: r }) : "css";
}
function Ar(t7, e) {
  return Pi(t7, e) ?? Ri(t7, e) ?? Ii(t7, e);
}
function Ze(t7) {
  return t7 === "block" || t7 === "list-item" || t7.startsWith("table");
}
function $i(t7) {
  return !Ze(t7) && t7 !== "inline-block";
}
function Oi(t7) {
  return !Ze(t7) && t7 !== "inline-block";
}
function Mi(t7) {
  return !Ze(t7);
}
function qi(t7) {
  return !Ze(t7);
}
function Hi(t7) {
  return !Ze(t7) && t7 !== "inline-block";
}
function me(t7) {
  return Vn(t7).startsWith("pre");
}
function Vi(t7, e) {
  let r = t7;
  for (; r; ) {
    if (e(r)) return true;
    r = r.parent;
  }
  return false;
}
function Hn(t7, e) {
  var n;
  if (ge(t7, e)) return "block";
  if (((n = t7.prev) == null ? void 0 : n.type) === "comment") {
    let s = t7.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);
    if (s) return s[1];
  }
  let r = false;
  if (t7.type === "element" && t7.namespace === "svg") if (Vi(t7, (s) => s.fullName === "svg:foreignObject")) r = true;
  else return t7.name === "svg" ? "inline-block" : "block";
  switch (e.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";
    case "ignore":
      return "block";
    default:
      return t7.type === "element" && (!t7.namespace || r || fe(t7)) && bn[t7.name] || wn;
  }
}
function Vn(t7) {
  return t7.type === "element" && (!t7.namespace || fe(t7)) && xn[t7.name] || Tn;
}
function Ui(t7) {
  let e = Number.POSITIVE_INFINITY;
  for (let r of t7.split(`
`)) {
    if (r.length === 0) continue;
    let n = O.getLeadingWhitespaceCount(r);
    if (n === 0) return 0;
    r.length !== n && n < e && (e = n);
  }
  return e === Number.POSITIVE_INFINITY ? 0 : e;
}
function Dr(t7, e = Ui(t7)) {
  return e === 0 ? t7 : t7.split(`
`).map((r) => r.slice(e)).join(`
`);
}
function vr(t7) {
  return w(false, w(false, t7, "&apos;", "'"), "&quot;", '"');
}
function N(t7) {
  return vr(t7.value);
}
var Wi = /* @__PURE__ */ new Set(["template", "style", "script"]);
function et(t7, e) {
  return ge(t7, e) && !Wi.has(t7.fullName);
}
function ge(t7, e) {
  return e.parser === "vue" && t7.type === "element" && t7.parent.type === "root" && t7.fullName.toLowerCase() !== "html";
}
function Tt(t7, e) {
  return ge(t7, e) && (et(t7, e) || t7.attrMap.lang && t7.attrMap.lang !== "html");
}
function Un(t7) {
  let e = t7.fullName;
  return e.charAt(0) === "#" || e === "slot-scope" || e === "v-slot" || e.startsWith("v-slot:");
}
function Wn(t7, e) {
  let r = t7.parent;
  if (!ge(r, e)) return false;
  let n = r.fullName, s = t7.fullName;
  return n === "script" && s === "setup" || n === "style" && s === "vars";
}
function xt(t7, e = t7.value) {
  return t7.parent.isWhitespaceSensitive ? t7.parent.isIndentationSensitive ? B(e) : B(Dr(Sr(e)), S) : H(_, O.split(e));
}
function kt(t7, e) {
  return ge(t7, e) && t7.name === "script";
}
var yr = /\{\{(.+?)\}\}/su;
async function zn(t7, e) {
  let r = [];
  for (let [n, s] of t7.split(yr).entries()) if (n % 2 === 0) r.push(B(s));
  else try {
    r.push(E(["{{", k([_, await T(s, e, { parser: "__ng_interpolation", __isInHtmlInterpolation: true })]), _, "}}"]));
  } catch {
    r.push("{{", B(s), "}}");
  }
  return r;
}
function wr({ parser: t7 }) {
  return (e, r, n) => T(N(n.node), e, { parser: t7 }, Q);
}
var zi = wr({ parser: "__ng_action" });
var Gi = wr({ parser: "__ng_binding" });
var Yi = wr({ parser: "__ng_directive" });
function ji(t7, e) {
  if (e.parser !== "angular") return;
  let { node: r } = t7, n = r.fullName;
  if (n.startsWith("(") && n.endsWith(")") || n.startsWith("on-")) return zi;
  if (n.startsWith("[") && n.endsWith("]") || /^bind(?:on)?-/u.test(n) || /^ng-(?:if|show|hide|class|style)$/u.test(n)) return Gi;
  if (n.startsWith("*")) return Yi;
  let s = N(r);
  if (/^i18n(?:-.+)?$/u.test(n)) return () => he(Dt(xt(r, s.trim())), !s.includes("@@"));
  if (yr.test(s)) return (i) => zn(s, i);
}
var Gn = ji;
function Ki(t7, e) {
  let { node: r } = t7, n = N(r);
  if (r.fullName === "class" && !e.parentParser && !n.includes("{{")) return () => n.trim().split(/\s+/u).join(" ");
}
var Yn = Ki;
function jn(t7) {
  return t7 === "	" || t7 === `
` || t7 === "\f" || t7 === "\r" || t7 === " ";
}
var Qi = /^[ \t\n\r\u000c]+/;
var Xi = /^[, \t\n\r\u000c]+/;
var Ji = /^[^ \t\n\r\u000c]+/;
var Zi = /[,]+$/;
var Kn = /^\d+$/;
var ea = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
function ta(t7) {
  let e = t7.length, r, n, s, i, a, o = 0, u;
  function p(C) {
    let A2, D = C.exec(t7.substring(o));
    if (D) return [A2] = D, o += A2.length, A2;
  }
  let l = [];
  for (; ; ) {
    if (p(Xi), o >= e) {
      if (l.length === 0) throw new Error("Must contain one or more image candidate strings.");
      return l;
    }
    u = o, r = p(Ji), n = [], r.slice(-1) === "," ? (r = r.replace(Zi, ""), d()) : f();
  }
  function f() {
    for (p(Qi), s = "", i = "in descriptor"; ; ) {
      if (a = t7.charAt(o), i === "in descriptor") if (jn(a)) s && (n.push(s), s = "", i = "after descriptor");
      else if (a === ",") {
        o += 1, s && n.push(s), d();
        return;
      } else if (a === "(") s += a, i = "in parens";
      else if (a === "") {
        s && n.push(s), d();
        return;
      } else s += a;
      else if (i === "in parens") if (a === ")") s += a, i = "in descriptor";
      else if (a === "") {
        n.push(s), d();
        return;
      } else s += a;
      else if (i === "after descriptor" && !jn(a)) if (a === "") {
        d();
        return;
      } else i = "in descriptor", o -= 1;
      o += 1;
    }
  }
  function d() {
    let C = false, A2, D, I2, F, c = {}, g, y2, q2, x2, U2;
    for (F = 0; F < n.length; F++) g = n[F], y2 = g[g.length - 1], q2 = g.substring(0, g.length - 1), x2 = parseInt(q2, 10), U2 = parseFloat(q2), Kn.test(q2) && y2 === "w" ? ((A2 || D) && (C = true), x2 === 0 ? C = true : A2 = x2) : ea.test(q2) && y2 === "x" ? ((A2 || D || I2) && (C = true), U2 < 0 ? C = true : D = U2) : Kn.test(q2) && y2 === "h" ? ((I2 || D) && (C = true), x2 === 0 ? C = true : I2 = x2) : C = true;
    if (!C) c.source = { value: r, startOffset: u }, A2 && (c.width = { value: A2 }), D && (c.density = { value: D }), I2 && (c.height = { value: I2 }), l.push(c);
    else throw new Error(`Invalid srcset descriptor found in "${t7}" at "${g}".`);
  }
}
var Qn = ta;
function ra(t7) {
  if (t7.node.fullName === "srcset" && (t7.parent.fullName === "img" || t7.parent.fullName === "source")) return () => sa(N(t7.node));
}
var Xn = { width: "w", height: "h", density: "x" };
var na = Object.keys(Xn);
function sa(t7) {
  let e = Qn(t7), r = na.filter((l) => e.some((f) => Object.prototype.hasOwnProperty.call(f, l)));
  if (r.length > 1) throw new Error("Mixed descriptor in srcset is not supported");
  let [n] = r, s = Xn[n], i = e.map((l) => l.source.value), a = Math.max(...i.map((l) => l.length)), o = e.map((l) => l[n] ? String(l[n].value) : ""), u = o.map((l) => {
    let f = l.indexOf(".");
    return f === -1 ? l.length : f;
  }), p = Math.max(...u);
  return he(H([",", _], i.map((l, f) => {
    let d = [l], C = o[f];
    if (C) {
      let A2 = a - l.length + 1, D = p - u[f], I2 = " ".repeat(A2 + D);
      d.push(pe(I2, " "), C + s);
    }
    return d;
  })));
}
var Jn = ra;
function Zn(t7, e) {
  let { node: r } = t7, n = N(t7.node).trim();
  if (r.fullName === "style" && !e.parentParser && !n.includes("{{")) return async (s) => he(await s(n, { parser: "css", __isHTMLStyleAttribute: true }));
}
var br = /* @__PURE__ */ new WeakMap();
function ia(t7, e) {
  let { root: r } = t7;
  return br.has(r) || br.set(r, r.children.some((n) => kt(n, e) && ["ts", "typescript"].includes(n.attrMap.lang))), br.get(r);
}
var Pe = ia;
function es(t7, e, r) {
  let { node: n } = r, s = N(n);
  return T(`type T<${s}> = any`, t7, { parser: "babel-ts", __isEmbeddedTypescriptGenericParameters: true }, Q);
}
function ts(t7, e, { parseWithTs: r }) {
  return T(`function _(${t7}) {}`, e, { parser: r ? "babel-ts" : "babel", __isVueBindings: true });
}
async function rs(t7, e, r, n) {
  let s = N(r.node), { left: i, operator: a, right: o } = aa(s), u = Pe(r, n);
  return [E(await T(`function _(${i}) {}`, t7, { parser: u ? "babel-ts" : "babel", __isVueForBindingLeft: true })), " ", a, " ", await T(o, t7, { parser: u ? "__ts_expression" : "__js_expression" })];
}
function aa(t7) {
  let e = /(.*?)\s+(in|of)\s+(.*)/su, r = /,([^,\]}]*)(?:,([^,\]}]*))?$/u, n = /^\(|\)$/gu, s = t7.match(e);
  if (!s) return;
  let i = {};
  if (i.for = s[3].trim(), !i.for) return;
  let a = w(false, s[1].trim(), n, ""), o = a.match(r);
  o ? (i.alias = a.replace(r, ""), i.iterator1 = o[1].trim(), o[2] && (i.iterator2 = o[2].trim())) : i.alias = a;
  let u = [i.alias, i.iterator1, i.iterator2];
  if (!u.some((p, l) => !p && (l === 0 || u.slice(l + 1).some(Boolean)))) return { left: u.filter(Boolean).join(","), operator: s[2], right: i.for };
}
function oa(t7, e) {
  if (e.parser !== "vue") return;
  let { node: r } = t7, n = r.fullName;
  if (n === "v-for") return rs;
  if (n === "generic" && kt(r.parent, e)) return es;
  let s = N(r), i = Pe(t7, e);
  if (Un(r) || Wn(r, e)) return (a) => ts(s, a, { parseWithTs: i });
  if (n.startsWith("@") || n.startsWith("v-on:")) return (a) => ua(s, a, { parseWithTs: i });
  if (n.startsWith(":") || n.startsWith(".") || n.startsWith("v-bind:")) return (a) => la(s, a, { parseWithTs: i });
  if (n.startsWith("v-")) return (a) => ns(s, a, { parseWithTs: i });
}
async function ua(t7, e, { parseWithTs: r }) {
  var n;
  try {
    return await ns(t7, e, { parseWithTs: r });
  } catch (s) {
    if (((n = s.cause) == null ? void 0 : n.code) !== "BABEL_PARSER_SYNTAX_ERROR") throw s;
  }
  return T(t7, e, { parser: r ? "__vue_ts_event_binding" : "__vue_event_binding" }, Q);
}
function la(t7, e, { parseWithTs: r }) {
  return T(t7, e, { parser: r ? "__vue_ts_expression" : "__vue_expression" }, Q);
}
function ns(t7, e, { parseWithTs: r }) {
  return T(t7, e, { parser: r ? "__ts_expression" : "__js_expression" }, Q);
}
var ss = oa;
function ca(t7, e) {
  let { node: r } = t7;
  if (r.value) {
    if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(e.originalText.slice(r.valueSpan.start.offset, r.valueSpan.end.offset)) || e.parser === "lwc" && r.value.startsWith("{") && r.value.endsWith("}")) return [r.rawName, "=", r.value];
    for (let n of [Jn, Zn, Yn, ss, Gn]) {
      let s = n(t7, e);
      if (s) return pa(s);
    }
  }
}
function pa(t7) {
  return async (e, r, n, s) => {
    let i = await t7(e, r, n, s);
    if (i) return i = hr(i, (a) => typeof a == "string" ? w(false, a, '"', "&quot;") : a), [n.node.rawName, '="', E(i), '"'];
  };
}
var is = ca;
var as = new Proxy(() => {
}, { get: () => as });
var Tr = as;
function ha(t7) {
  return Array.isArray(t7) && t7.length > 0;
}
var Ie = ha;
function J(t7) {
  return t7.sourceSpan.start.offset;
}
function Z(t7) {
  return t7.sourceSpan.end.offset;
}
function tt(t7, e) {
  return [t7.isSelfClosing ? "" : fa(t7, e), Ce(t7, e)];
}
function fa(t7, e) {
  return t7.lastChild && Ee(t7.lastChild) ? "" : [ma(t7, e), Bt(t7, e)];
}
function Ce(t7, e) {
  return (t7.next ? X(t7.next) : _e(t7.parent)) ? "" : [Se(t7, e), z(t7, e)];
}
function ma(t7, e) {
  return _e(t7) ? Se(t7.lastChild, e) : "";
}
function z(t7, e) {
  return Ee(t7) ? Bt(t7.parent, e) : rt(t7) ? Lt(t7.next, e) : "";
}
function Bt(t7, e) {
  if (Tr.ok(!t7.isSelfClosing), us(t7, e)) return "";
  switch (t7.type) {
    case "ieConditionalComment":
      return "<!";
    case "element":
      if (t7.hasHtmComponentClosingTag) return "<//";
    default:
      return `</${t7.rawName}`;
  }
}
function Se(t7, e) {
  if (us(t7, e)) return "";
  switch (t7.type) {
    case "ieConditionalComment":
    case "ieConditionalEndComment":
      return "[endif]-->";
    case "ieConditionalStartComment":
      return "]><!-->";
    case "interpolation":
      return "}}";
    case "angularIcuExpression":
      return "}";
    case "element":
      if (t7.isSelfClosing) return "/>";
    default:
      return ">";
  }
}
function us(t7, e) {
  return !t7.isSelfClosing && !t7.endSourceSpan && (de(t7) || yt(t7.parent, e));
}
function X(t7) {
  return t7.prev && t7.prev.type !== "docType" && t7.type !== "angularControlFlowBlock" && !$(t7.prev) && t7.isLeadingSpaceSensitive && !t7.hasLeadingSpaces;
}
function _e(t7) {
  var e;
  return ((e = t7.lastChild) == null ? void 0 : e.isTrailingSpaceSensitive) && !t7.lastChild.hasTrailingSpaces && !$(bt(t7.lastChild)) && !me(t7);
}
function Ee(t7) {
  return !t7.next && !t7.hasTrailingSpaces && t7.isTrailingSpaceSensitive && $(bt(t7));
}
function rt(t7) {
  return t7.next && !$(t7.next) && $(t7) && t7.isTrailingSpaceSensitive && !t7.hasTrailingSpaces;
}
function da(t7) {
  let e = t7.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);
  return e ? e[1] ? e[1].split(/\s+/u) : true : false;
}
function nt(t7) {
  return !t7.prev && t7.isLeadingSpaceSensitive && !t7.hasLeadingSpaces;
}
function ga(t7, e, r) {
  var f;
  let { node: n } = t7;
  if (!Ie(n.attrs)) return n.isSelfClosing ? " " : "";
  let s = ((f = n.prev) == null ? void 0 : f.type) === "comment" && da(n.prev.value), i = typeof s == "boolean" ? () => s : Array.isArray(s) ? (d) => s.includes(d.rawName) : () => false, a = t7.map(({ node: d }) => i(d) ? B(e.originalText.slice(J(d), Z(d))) : r(), "attrs"), o = n.type === "element" && n.fullName === "script" && n.attrs.length === 1 && n.attrs[0].fullName === "src" && n.children.length === 0, p = e.singleAttributePerLine && n.attrs.length > 1 && !ge(n, e) ? S : _, l = [k([o ? " " : _, H(p, a)])];
  return n.firstChild && nt(n.firstChild) || n.isSelfClosing && _e(n.parent) || o ? l.push(n.isSelfClosing ? " " : "") : l.push(e.bracketSameLine ? n.isSelfClosing ? " " : "" : n.isSelfClosing ? _ : v), l;
}
function Ca(t7) {
  return t7.firstChild && nt(t7.firstChild) ? "" : Ft(t7);
}
function st(t7, e, r) {
  let { node: n } = t7;
  return [Ae(n, e), ga(t7, e, r), n.isSelfClosing ? "" : Ca(n)];
}
function Ae(t7, e) {
  return t7.prev && rt(t7.prev) ? "" : [G(t7, e), Lt(t7, e)];
}
function G(t7, e) {
  return nt(t7) ? Ft(t7.parent) : X(t7) ? Se(t7.prev, e) : "";
}
var os = "<!doctype";
function Lt(t7, e) {
  switch (t7.type) {
    case "ieConditionalComment":
    case "ieConditionalStartComment":
      return `<!--[if ${t7.condition}`;
    case "ieConditionalEndComment":
      return "<!--<!";
    case "interpolation":
      return "{{";
    case "docType": {
      if (t7.value === "html") {
        let n = e.filepath ?? "";
        if (/\.html?$/u.test(n)) return os;
      }
      return e.originalText.slice(J(t7), Z(t7)).slice(0, os.length);
    }
    case "angularIcuExpression":
      return "{";
    case "element":
      if (t7.condition) return `<!--[if ${t7.condition}]><!--><${t7.rawName}`;
    default:
      return `<${t7.rawName}`;
  }
}
function Ft(t7) {
  switch (Tr.ok(!t7.isSelfClosing), t7.type) {
    case "ieConditionalComment":
      return "]>";
    case "element":
      if (t7.condition) return "><!--<![endif]-->";
    default:
      return ">";
  }
}
function Sa(t7, e) {
  if (!t7.endSourceSpan) return "";
  let r = t7.startSourceSpan.end.offset;
  t7.firstChild && nt(t7.firstChild) && (r -= Ft(t7).length);
  let n = t7.endSourceSpan.start.offset;
  return t7.lastChild && Ee(t7.lastChild) ? n += Bt(t7, e).length : _e(t7) && (n -= Se(t7.lastChild, e).length), e.originalText.slice(r, n);
}
var Nt = Sa;
var _a = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function Ea(t7, e) {
  let { node: r } = t7;
  switch (r.type) {
    case "element":
      if (W(r) || r.type === "interpolation") return;
      if (!r.isSelfClosing && Tt(r, e)) {
        let n = Ar(r, e);
        return n ? async (s, i) => {
          let a = Nt(r, e), o = /^\s*$/u.test(a), u = "";
          return o || (u = await s(Sr(a), { parser: n, __embeddedInHtml: true }), o = u === ""), [G(r, e), E(st(t7, e, i)), o ? "" : S, u, o ? "" : S, tt(r, e), z(r, e)];
        } : void 0;
      }
      break;
    case "text":
      if (W(r.parent)) {
        let n = Ar(r.parent, e);
        if (n) return async (s) => {
          let i = n === "markdown" ? Dr(r.value.replace(/^[^\S\n]*\n/u, "")) : r.value, a = { parser: n, __embeddedInHtml: true };
          if (e.parser === "html" && n === "babel") {
            let o = "script", { attrMap: u } = r.parent;
            u && (u.type === "module" || u.type === "text/babel" && u["data-type"] === "module") && (o = "module"), a.__babelSourceType = o;
          }
          return [se, G(r, e), await s(i, a), z(r, e)];
        };
      } else if (r.parent.type === "interpolation") return async (n) => {
        let s = { __isInHtmlInterpolation: true, __embeddedInHtml: true };
        return e.parser === "angular" ? s.parser = "__ng_interpolation" : e.parser === "vue" ? s.parser = Pe(t7, e) ? "__vue_ts_expression" : "__vue_expression" : s.parser = "__js_expression", [k([_, await n(r.value, s)]), r.parent.next && X(r.parent.next) ? " " : _];
      };
      break;
    case "attribute":
      return is(t7, e);
    case "front-matter":
      return (n) => Dn(r, n);
    case "angularControlFlowBlockParameters":
      return _a.has(t7.parent.name) ? vn : void 0;
    case "angularLetDeclarationInitializer":
      return (n) => T(r.value, n, { parser: "__ng_binding", __isInHtmlAttribute: false });
  }
}
var ls = Ea;
var it = null;
function at(t7) {
  if (it !== null && typeof it.property) {
    let e = it;
    return it = at.prototype = null, e;
  }
  return it = at.prototype = t7 ?? /* @__PURE__ */ Object.create(null), new at();
}
var Aa = 10;
for (let t7 = 0; t7 <= Aa; t7++) at();
function xr(t7) {
  return at(t7);
}
function Da(t7, e = "type") {
  xr(t7);
  function r(n) {
    let s = n[e], i = t7[s];
    if (!Array.isArray(i)) throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), { node: n });
    return i;
  }
  return r;
}
var cs = Da;
var va = { "front-matter": [], root: ["children"], element: ["attrs", "children"], ieConditionalComment: ["children"], ieConditionalStartComment: [], ieConditionalEndComment: [], interpolation: ["children"], text: ["children"], docType: [], comment: [], attribute: [], cdata: [], angularControlFlowBlock: ["children", "parameters"], angularControlFlowBlockParameters: ["children"], angularControlFlowBlockParameter: [], angularLetDeclaration: ["init"], angularLetDeclarationInitializer: [], angularIcuExpression: ["cases"], angularIcuCase: ["expression"] };
var ps = va;
var ya = cs(ps);
var hs = ya;
function fs(t7) {
  return /^\s*<!--\s*@(?:format|prettier)\s*-->/u.test(t7);
}
function ms(t7) {
  return `<!-- @format -->

` + t7;
}
var ds = /* @__PURE__ */ new Map([["if", /* @__PURE__ */ new Set(["else if", "else"])], ["else if", /* @__PURE__ */ new Set(["else if", "else"])], ["for", /* @__PURE__ */ new Set(["empty"])], ["defer", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["placeholder", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["error", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["loading", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])]]);
function gs(t7) {
  let e = Z(t7);
  return t7.type === "element" && !t7.endSourceSpan && Ie(t7.children) ? Math.max(e, gs(K(false, t7.children, -1))) : e;
}
function ot(t7, e, r) {
  let n = t7.node;
  if (de(n)) {
    let s = gs(n);
    return [G(n, e), B(O.trimEnd(e.originalText.slice(J(n) + (n.prev && rt(n.prev) ? Lt(n).length : 0), s - (n.next && X(n.next) ? Se(n, e).length : 0)))), z(n, e)];
  }
  return r();
}
function Pt(t7, e) {
  return $(t7) && $(e) ? t7.isTrailingSpaceSensitive ? t7.hasTrailingSpaces ? wt(e) ? S : _ : "" : wt(e) ? S : v : rt(t7) && (de(e) || e.firstChild || e.isSelfClosing || e.type === "element" && e.attrs.length > 0) || t7.type === "element" && t7.isSelfClosing && X(e) ? "" : !e.isLeadingSpaceSensitive || wt(e) || X(e) && t7.lastChild && Ee(t7.lastChild) && t7.lastChild.lastChild && Ee(t7.lastChild.lastChild) ? S : e.hasLeadingSpaces ? _ : v;
}
function Re(t7, e, r) {
  let { node: n } = t7;
  if (Er(n)) return [se, ...t7.map((i) => {
    let a = i.node, o = a.prev ? Pt(a.prev, a) : "";
    return [o ? [o, Je(a.prev) ? S : ""] : "", ot(i, e, r)];
  }, "children")];
  let s = n.children.map(() => Symbol(""));
  return t7.map((i, a) => {
    let o = i.node;
    if ($(o)) {
      if (o.prev && $(o.prev)) {
        let A2 = Pt(o.prev, o);
        if (A2) return Je(o.prev) ? [S, S, ot(i, e, r)] : [A2, ot(i, e, r)];
      }
      return ot(i, e, r);
    }
    let u = [], p = [], l = [], f = [], d = o.prev ? Pt(o.prev, o) : "", C = o.next ? Pt(o, o.next) : "";
    return d && (Je(o.prev) ? u.push(S, S) : d === S ? u.push(S) : $(o.prev) ? p.push(d) : p.push(pe("", v, { groupId: s[a - 1] }))), C && (Je(o) ? $(o.next) && f.push(S, S) : C === S ? $(o.next) && f.push(S) : l.push(C)), [...u, E([...p, E([ot(i, e, r), ...l], { id: s[a] })]), ...f];
  }, "children");
}
function Cs(t7, e, r) {
  let { node: n } = t7, s = [];
  wa(t7) && s.push("} "), s.push("@", n.name), n.parameters && s.push(" (", E(r("parameters")), ")"), s.push(" {");
  let i = Ss(n);
  return n.children.length > 0 ? (n.firstChild.hasLeadingSpaces = true, n.lastChild.hasTrailingSpaces = true, s.push(k([S, Re(t7, e, r)])), i && s.push(S, "}")) : i && s.push("}"), E(s, { shouldBreak: true });
}
function Ss(t7) {
  var e, r;
  return !(((e = t7.next) == null ? void 0 : e.type) === "angularControlFlowBlock" && ((r = ds.get(t7.name)) != null && r.has(t7.next.name)));
}
function wa(t7) {
  let { previous: e } = t7;
  return (e == null ? void 0 : e.type) === "angularControlFlowBlock" && !de(e) && !Ss(e);
}
function _s(t7, e, r) {
  return [k([v, H([";", _], t7.map(r, "children"))]), v];
}
function Es(t7, e, r) {
  let { node: n } = t7;
  return [Ae(n, e), E([n.switchValue.trim(), ", ", n.clause, n.cases.length > 0 ? [",", k([_, H(_, t7.map(r, "cases"))])] : "", v]), Ce(n, e)];
}
function As(t7, e, r) {
  let { node: n } = t7;
  return [n.value, " {", E([k([v, t7.map(({ node: s, isLast: i }) => {
    let a = [r()];
    return s.type === "text" && (s.hasLeadingSpaces && a.unshift(_), s.hasTrailingSpaces && !i && a.push(_)), a;
  }, "expression")]), v]), "}"];
}
function Ds(t7, e, r) {
  let { node: n } = t7;
  if (yt(n, e)) return [G(n, e), E(st(t7, e, r)), B(Nt(n, e)), ...tt(n, e), z(n, e)];
  let s = n.children.length === 1 && (n.firstChild.type === "interpolation" || n.firstChild.type === "angularIcuExpression") && n.firstChild.isLeadingSpaceSensitive && !n.firstChild.hasLeadingSpaces && n.lastChild.isTrailingSpaceSensitive && !n.lastChild.hasTrailingSpaces, i = Symbol("element-attr-group-id"), a = (l) => E([E(st(t7, e, r), { id: i }), l, tt(n, e)]), o = (l) => s ? dn(l, { groupId: i }) : (W(n) || et(n, e)) && n.parent.type === "root" && e.parser === "vue" && !e.vueIndentScriptAndStyle ? l : k(l), u = () => s ? pe(v, "", { groupId: i }) : n.firstChild.hasLeadingSpaces && n.firstChild.isLeadingSpaceSensitive ? _ : n.firstChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive ? fn(v) : v, p = () => (n.next ? X(n.next) : _e(n.parent)) ? n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? " " : "" : s ? pe(v, "", { groupId: i }) : n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? _ : (n.lastChild.type === "comment" || n.lastChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${e.tabWidth * (t7.ancestors.length - 1)}}$`, "u").test(n.lastChild.value) ? "" : v;
  return n.children.length === 0 ? a(n.hasDanglingSpaces && n.isDanglingSpaceSensitive ? _ : "") : a([In(n) ? se : "", o([u(), Re(t7, e, r)]), p()]);
}
function ut(t7) {
  return t7 >= 9 && t7 <= 32 || t7 == 160;
}
function It(t7) {
  return 48 <= t7 && t7 <= 57;
}
function lt(t7) {
  return t7 >= 97 && t7 <= 122 || t7 >= 65 && t7 <= 90;
}
function vs(t7) {
  return t7 >= 97 && t7 <= 102 || t7 >= 65 && t7 <= 70 || It(t7);
}
function Rt(t7) {
  return t7 === 10 || t7 === 13;
}
function kr(t7) {
  return 48 <= t7 && t7 <= 55;
}
function $t(t7) {
  return t7 === 39 || t7 === 34 || t7 === 96;
}
var ba = /-+([a-z0-9])/g;
function ws(t7) {
  return t7.replace(ba, (...e) => e[1].toUpperCase());
}
var ie = class t {
  constructor(e, r, n, s) {
    this.file = e, this.offset = r, this.line = n, this.col = s;
  }
  toString() {
    return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
  }
  moveBy(e) {
    let r = this.file.content, n = r.length, s = this.offset, i = this.line, a = this.col;
    for (; s > 0 && e < 0; ) if (s--, e++, r.charCodeAt(s) == 10) {
      i--;
      let u = r.substring(0, s - 1).lastIndexOf(String.fromCharCode(10));
      a = u > 0 ? s - u : s;
    } else a--;
    for (; s < n && e > 0; ) {
      let o = r.charCodeAt(s);
      s++, e--, o == 10 ? (i++, a = 0) : a++;
    }
    return new t(this.file, s, i, a);
  }
  getContext(e, r) {
    let n = this.file.content, s = this.offset;
    if (s != null) {
      s > n.length - 1 && (s = n.length - 1);
      let i = s, a = 0, o = 0;
      for (; a < e && s > 0 && (s--, a++, !(n[s] == `
` && ++o == r)); ) ;
      for (a = 0, o = 0; a < e && i < n.length - 1 && (i++, a++, !(n[i] == `
` && ++o == r)); ) ;
      return { before: n.substring(s, this.offset), after: n.substring(this.offset, i + 1) };
    }
    return null;
  }
};
var De = class {
  constructor(e, r) {
    this.content = e, this.url = r;
  }
};
var h = class {
  constructor(e, r, n = e, s = null) {
    this.start = e, this.end = r, this.fullStart = n, this.details = s;
  }
  toString() {
    return this.start.file.content.substring(this.start.offset, this.end.offset);
  }
};
var Ot;
(function(t7) {
  t7[t7.WARNING = 0] = "WARNING", t7[t7.ERROR = 1] = "ERROR";
})(Ot || (Ot = {}));
var Oe = class {
  constructor(e, r, n = Ot.ERROR) {
    this.span = e, this.msg = r, this.level = n;
  }
  contextualMessage() {
    let e = this.span.start.getContext(100, 3);
    return e ? `${this.msg} ("${e.before}[${Ot[this.level]} ->]${e.after}")` : this.msg;
  }
  toString() {
    let e = this.span.details ? `, ${this.span.details}` : "";
    return `${this.contextualMessage()}: ${this.span.start}${e}`;
  }
};
var Ta = [ka, Ba, Fa, Pa, Ia, Oa, Ra, $a, Ma, Na];
function xa(t7, e) {
  for (let r of Ta) r(t7, e);
  return t7;
}
function ka(t7) {
  t7.walk((e) => {
    if (e.type === "element" && e.tagDefinition.ignoreFirstLf && e.children.length > 0 && e.children[0].type === "text" && e.children[0].value[0] === `
`) {
      let r = e.children[0];
      r.value.length === 1 ? e.removeChild(r) : r.value = r.value.slice(1);
    }
  });
}
function Ba(t7) {
  let e = (r) => {
    var n, s;
    return r.type === "element" && ((n = r.prev) == null ? void 0 : n.type) === "ieConditionalStartComment" && r.prev.sourceSpan.end.offset === r.startSourceSpan.start.offset && ((s = r.firstChild) == null ? void 0 : s.type) === "ieConditionalEndComment" && r.firstChild.sourceSpan.start.offset === r.startSourceSpan.end.offset;
  };
  t7.walk((r) => {
    if (r.children) for (let n = 0; n < r.children.length; n++) {
      let s = r.children[n];
      if (!e(s)) continue;
      let i = s.prev, a = s.firstChild;
      r.removeChild(i), n--;
      let o = new h(i.sourceSpan.start, a.sourceSpan.end), u = new h(o.start, s.sourceSpan.end);
      s.condition = i.condition, s.sourceSpan = u, s.startSourceSpan = o, s.removeChild(a);
    }
  });
}
function La(t7, e, r) {
  t7.walk((n) => {
    if (n.children) for (let s = 0; s < n.children.length; s++) {
      let i = n.children[s];
      if (i.type !== "text" && !e(i)) continue;
      i.type !== "text" && (i.type = "text", i.value = r(i));
      let a = i.prev;
      !a || a.type !== "text" || (a.value += i.value, a.sourceSpan = new h(a.sourceSpan.start, i.sourceSpan.end), n.removeChild(i), s--);
    }
  });
}
function Fa(t7) {
  return La(t7, (e) => e.type === "cdata", (e) => `<![CDATA[${e.value}]]>`);
}
function Na(t7) {
  let e = (r) => {
    var n, s;
    return r.type === "element" && r.attrs.length === 0 && r.children.length === 1 && r.firstChild.type === "text" && !O.hasWhitespaceCharacter(r.children[0].value) && !r.firstChild.hasLeadingSpaces && !r.firstChild.hasTrailingSpaces && r.isLeadingSpaceSensitive && !r.hasLeadingSpaces && r.isTrailingSpaceSensitive && !r.hasTrailingSpaces && ((n = r.prev) == null ? void 0 : n.type) === "text" && ((s = r.next) == null ? void 0 : s.type) === "text";
  };
  t7.walk((r) => {
    if (r.children) for (let n = 0; n < r.children.length; n++) {
      let s = r.children[n];
      if (!e(s)) continue;
      let i = s.prev, a = s.next;
      i.value += `<${s.rawName}>` + s.firstChild.value + `</${s.rawName}>` + a.value, i.sourceSpan = new h(i.sourceSpan.start, a.sourceSpan.end), i.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive, i.hasTrailingSpaces = a.hasTrailingSpaces, r.removeChild(s), n--, r.removeChild(a);
    }
  });
}
function Pa(t7, e) {
  if (e.parser === "html") return;
  let r = /\{\{(.+?)\}\}/su;
  t7.walk((n) => {
    if (Bn(n)) for (let s of n.children) {
      if (s.type !== "text") continue;
      let i = s.sourceSpan.start, a = null, o = s.value.split(r);
      for (let u = 0; u < o.length; u++, i = a) {
        let p = o[u];
        if (u % 2 === 0) {
          a = i.moveBy(p.length), p.length > 0 && n.insertChildBefore(s, { type: "text", value: p, sourceSpan: new h(i, a) });
          continue;
        }
        a = i.moveBy(p.length + 4), n.insertChildBefore(s, { type: "interpolation", sourceSpan: new h(i, a), children: p.length === 0 ? [] : [{ type: "text", value: p, sourceSpan: new h(i.moveBy(2), a.moveBy(-2)) }] });
      }
      n.removeChild(s);
    }
  });
}
function Ia(t7) {
  t7.walk((e) => {
    let r = e.$children;
    if (!r) return;
    if (r.length === 0 || r.length === 1 && r[0].type === "text" && O.trim(r[0].value).length === 0) {
      e.hasDanglingSpaces = r.length > 0, e.$children = [];
      return;
    }
    let n = Ln(e), s = _r(e);
    if (!n) for (let i = 0; i < r.length; i++) {
      let a = r[i];
      if (a.type !== "text") continue;
      let { leadingWhitespace: o, text: u, trailingWhitespace: p } = kn(a.value), l = a.prev, f = a.next;
      u ? (a.value = u, a.sourceSpan = new h(a.sourceSpan.start.moveBy(o.length), a.sourceSpan.end.moveBy(-p.length)), o && (l && (l.hasTrailingSpaces = true), a.hasLeadingSpaces = true), p && (a.hasTrailingSpaces = true, f && (f.hasLeadingSpaces = true))) : (e.removeChild(a), i--, (o || p) && (l && (l.hasTrailingSpaces = true), f && (f.hasLeadingSpaces = true)));
    }
    e.isWhitespaceSensitive = n, e.isIndentationSensitive = s;
  });
}
function Ra(t7) {
  t7.walk((e) => {
    e.isSelfClosing = !e.children || e.type === "element" && (e.tagDefinition.isVoid || e.endSourceSpan && e.startSourceSpan.start === e.endSourceSpan.start && e.startSourceSpan.end === e.endSourceSpan.end);
  });
}
function $a(t7, e) {
  t7.walk((r) => {
    r.type === "element" && (r.hasHtmComponentClosingTag = r.endSourceSpan && /^<\s*\/\s*\/\s*>$/u.test(e.originalText.slice(r.endSourceSpan.start.offset, r.endSourceSpan.end.offset)));
  });
}
function Oa(t7, e) {
  t7.walk((r) => {
    r.cssDisplay = Hn(r, e);
  });
}
function Ma(t7, e) {
  t7.walk((r) => {
    let { children: n } = r;
    if (n) {
      if (n.length === 0) {
        r.isDanglingSpaceSensitive = Pn(r);
        return;
      }
      for (let s of n) s.isLeadingSpaceSensitive = Fn(s, e), s.isTrailingSpaceSensitive = Nn(s, e);
      for (let s = 0; s < n.length; s++) {
        let i = n[s];
        i.isLeadingSpaceSensitive = (s === 0 || i.prev.isTrailingSpaceSensitive) && i.isLeadingSpaceSensitive, i.isTrailingSpaceSensitive = (s === n.length - 1 || i.next.isLeadingSpaceSensitive) && i.isTrailingSpaceSensitive;
      }
    }
  });
}
var bs = xa;
function qa(t7, e, r) {
  let { node: n } = t7;
  switch (n.type) {
    case "front-matter":
      return B(n.raw);
    case "root":
      return e.__onHtmlRoot && e.__onHtmlRoot(n), [E(Re(t7, e, r)), S];
    case "element":
    case "ieConditionalComment":
      return Ds(t7, e, r);
    case "angularControlFlowBlock":
      return Cs(t7, e, r);
    case "angularControlFlowBlockParameters":
      return _s(t7, e, r);
    case "angularControlFlowBlockParameter":
      return O.trim(n.expression);
    case "angularLetDeclaration":
      return E(["@let ", E([n.id, " =", E(k([_, r("init")]))]), ";"]);
    case "angularLetDeclarationInitializer":
      return n.value;
    case "angularIcuExpression":
      return Es(t7, e, r);
    case "angularIcuCase":
      return As(t7, e, r);
    case "ieConditionalStartComment":
    case "ieConditionalEndComment":
      return [Ae(n), Ce(n)];
    case "interpolation":
      return [Ae(n, e), ...t7.map(r, "children"), Ce(n, e)];
    case "text": {
      if (n.parent.type === "interpolation") {
        let o = /\n[^\S\n]*$/u, u = o.test(n.value), p = u ? n.value.replace(o, "") : n.value;
        return [B(p), u ? S : ""];
      }
      let s = G(n, e), i = xt(n), a = z(n, e);
      return i[0] = [s, i[0]], i.push([i.pop(), a]), Dt(i);
    }
    case "docType":
      return [E([Ae(n, e), " ", w(false, n.value.replace(/^html\b/iu, "html"), /\s+/gu, " ")]), Ce(n, e)];
    case "comment":
      return [G(n, e), B(e.originalText.slice(J(n), Z(n))), z(n, e)];
    case "attribute": {
      if (n.value === null) return n.rawName;
      let s = vr(n.value), i = Cn(s, '"');
      return [n.rawName, "=", i, B(i === '"' ? w(false, s, '"', "&quot;") : w(false, s, "'", "&apos;")), i];
    }
    case "cdata":
    default:
      throw new _n(n, "HTML");
  }
}
var Ha = { preprocess: bs, print: qa, insertPragma: ms, massageAstNode: An, embed: ls, getVisitorKeys: hs };
var Ts = Ha;
var xs = [{ linguistLanguageId: 146, name: "Angular", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".component.html"], parsers: ["angular"], vscodeLanguageIds: ["html"], filenames: [] }, { linguistLanguageId: 146, name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml", ".mjml"], parsers: ["html"], vscodeLanguageIds: ["html"] }, { linguistLanguageId: 146, name: "Lightning Web Components", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [], parsers: ["lwc"], vscodeLanguageIds: ["html"], filenames: [] }, { linguistLanguageId: 391, name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", parsers: ["vue"], vscodeLanguageIds: ["vue"] }];
var Br = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, objectWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap object literals.", choices: [{ value: "preserve", description: "Keep as multi-line, if there is a newline between the opening brace and first property." }, { value: "collapse", description: "Fit to a single line when possible." }] }, singleQuote: { category: "Common", type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap prose.", choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { category: "Common", type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
var ks = "HTML";
var Va = { bracketSameLine: Br.bracketSameLine, htmlWhitespaceSensitivity: { category: ks, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: Br.singleAttributePerLine, vueIndentScriptAndStyle: { category: ks, type: "boolean", default: false, description: "Indent script and style tags in Vue files." } };
var Bs = Va;
var Zr = {};
on(Zr, { angular: () => qo, html: () => Mo, lwc: () => Vo, vue: () => Ho });
var xp = new RegExp(`(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`, "g");
var Ls;
(function(t7) {
  t7[t7.Emulated = 0] = "Emulated", t7[t7.None = 2] = "None", t7[t7.ShadowDom = 3] = "ShadowDom";
})(Ls || (Ls = {}));
var Fs;
(function(t7) {
  t7[t7.OnPush = 0] = "OnPush", t7[t7.Default = 1] = "Default";
})(Fs || (Fs = {}));
var Ns;
(function(t7) {
  t7[t7.None = 0] = "None", t7[t7.SignalBased = 1] = "SignalBased", t7[t7.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform";
})(Ns || (Ns = {}));
var Lr = { name: "custom-elements" };
var Fr = { name: "no-errors-schema" };
var ee;
(function(t7) {
  t7[t7.NONE = 0] = "NONE", t7[t7.HTML = 1] = "HTML", t7[t7.STYLE = 2] = "STYLE", t7[t7.SCRIPT = 3] = "SCRIPT", t7[t7.URL = 4] = "URL", t7[t7.RESOURCE_URL = 5] = "RESOURCE_URL";
})(ee || (ee = {}));
var Ps;
(function(t7) {
  t7[t7.Error = 0] = "Error", t7[t7.Warning = 1] = "Warning", t7[t7.Ignore = 2] = "Ignore";
})(Ps || (Ps = {}));
var P;
(function(t7) {
  t7[t7.RAW_TEXT = 0] = "RAW_TEXT", t7[t7.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", t7[t7.PARSABLE_DATA = 2] = "PARSABLE_DATA";
})(P || (P = {}));
function ct(t7, e = true) {
  if (t7[0] != ":") return [null, t7];
  let r = t7.indexOf(":", 1);
  if (r === -1) {
    if (e) throw new Error(`Unsupported format "${t7}" expecting ":namespace:name"`);
    return [null, t7];
  }
  return [t7.slice(1, r), t7.slice(r + 1)];
}
function Nr(t7) {
  return ct(t7)[1] === "ng-container";
}
function Pr(t7) {
  return ct(t7)[1] === "ng-content";
}
function Me(t7) {
  return t7 === null ? null : ct(t7)[0];
}
function qe(t7, e) {
  return t7 ? `:${t7}:${e}` : e;
}
var qt;
function Ir() {
  return qt || (qt = {}, Mt(ee.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), Mt(ee.STYLE, ["*|style"]), Mt(ee.URL, ["*|formAction", "area|href", "area|ping", "audio|src", "a|href", "a|ping", "blockquote|cite", "body|background", "del|cite", "form|action", "img|src", "input|src", "ins|cite", "q|cite", "source|src", "track|src", "video|poster", "video|src"]), Mt(ee.RESOURCE_URL, ["applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"])), qt;
}
function Mt(t7, e) {
  for (let r of e) qt[r.toLowerCase()] = t7;
}
var Ht = class {
};
var Ua = "boolean";
var Wa = "number";
var za = "string";
var Ga = "object";
var Ya = ["[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored", "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume", ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":svg:graphics^:svg:|", ":svg:animation^:svg:|*begin,*end,*repeat", ":svg:geometry^:svg:|", ":svg:componentTransferFunction^:svg:|", ":svg:gradient^:svg:|", ":svg:textContent^:svg:graphics|", ":svg:textPositioning^:svg:textContent|", "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username", "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username", "audio^media|", "br^[HTMLElement]|clear", "base^[HTMLElement]|href,target", "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink", "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value", "canvas^[HTMLElement]|#height,#width", "content^[HTMLElement]|select", "dl^[HTMLElement]|!compact", "data^[HTMLElement]|value", "datalist^[HTMLElement]|", "details^[HTMLElement]|!open", "dialog^[HTMLElement]|!open,returnValue", "dir^[HTMLElement]|!compact", "div^[HTMLElement]|align", "embed^[HTMLElement]|align,height,name,src,type,width", "fieldset^[HTMLElement]|!disabled,name", "font^[HTMLElement]|color,face,size", "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target", "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src", "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows", "hr^[HTMLElement]|align,color,!noShade,size,width", "head^[HTMLElement]|", "h1,h2,h3,h4,h5,h6^[HTMLElement]|align", "html^[HTMLElement]|version", "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width", "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width", "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width", "li^[HTMLElement]|type,#value", "label^[HTMLElement]|htmlFor", "legend^[HTMLElement]|align", "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type", "map^[HTMLElement]|name", "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width", "menu^[HTMLElement]|!compact", "meta^[HTMLElement]|content,httpEquiv,media,name,scheme", "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value", "ins,del^[HTMLElement]|cite,dateTime", "ol^[HTMLElement]|!compact,!reversed,#start,type", "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width", "optgroup^[HTMLElement]|!disabled,label", "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value", "output^[HTMLElement]|defaultValue,%htmlFor,name,value", "p^[HTMLElement]|align", "param^[HTMLElement]|name,type,value,valueType", "picture^[HTMLElement]|", "pre^[HTMLElement]|#width", "progress^[HTMLElement]|#max,#value", "q,blockquote,cite^[HTMLElement]|", "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type", "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value", "slot^[HTMLElement]|name", "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width", "span^[HTMLElement]|", "style^[HTMLElement]|!disabled,media,type", "caption^[HTMLElement]|align", "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width", "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width", "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width", "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign", "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign", "template^[HTMLElement]|", "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap", "time^[HTMLElement]|dateTime", "title^[HTMLElement]|text", "track^[HTMLElement]|!default,kind,label,src,srclang", "ul^[HTMLElement]|!compact,type", "unknown^[HTMLElement]|", "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width", ":svg:a^:svg:graphics|", ":svg:animate^:svg:animation|", ":svg:animateMotion^:svg:animation|", ":svg:animateTransform^:svg:animation|", ":svg:circle^:svg:geometry|", ":svg:clipPath^:svg:graphics|", ":svg:defs^:svg:graphics|", ":svg:desc^:svg:|", ":svg:discard^:svg:|", ":svg:ellipse^:svg:geometry|", ":svg:feBlend^:svg:|", ":svg:feColorMatrix^:svg:|", ":svg:feComponentTransfer^:svg:|", ":svg:feComposite^:svg:|", ":svg:feConvolveMatrix^:svg:|", ":svg:feDiffuseLighting^:svg:|", ":svg:feDisplacementMap^:svg:|", ":svg:feDistantLight^:svg:|", ":svg:feDropShadow^:svg:|", ":svg:feFlood^:svg:|", ":svg:feFuncA^:svg:componentTransferFunction|", ":svg:feFuncB^:svg:componentTransferFunction|", ":svg:feFuncG^:svg:componentTransferFunction|", ":svg:feFuncR^:svg:componentTransferFunction|", ":svg:feGaussianBlur^:svg:|", ":svg:feImage^:svg:|", ":svg:feMerge^:svg:|", ":svg:feMergeNode^:svg:|", ":svg:feMorphology^:svg:|", ":svg:feOffset^:svg:|", ":svg:fePointLight^:svg:|", ":svg:feSpecularLighting^:svg:|", ":svg:feSpotLight^:svg:|", ":svg:feTile^:svg:|", ":svg:feTurbulence^:svg:|", ":svg:filter^:svg:|", ":svg:foreignObject^:svg:graphics|", ":svg:g^:svg:graphics|", ":svg:image^:svg:graphics|decoding", ":svg:line^:svg:geometry|", ":svg:linearGradient^:svg:gradient|", ":svg:mpath^:svg:|", ":svg:marker^:svg:|", ":svg:mask^:svg:|", ":svg:metadata^:svg:|", ":svg:path^:svg:geometry|", ":svg:pattern^:svg:|", ":svg:polygon^:svg:geometry|", ":svg:polyline^:svg:geometry|", ":svg:radialGradient^:svg:gradient|", ":svg:rect^:svg:geometry|", ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan", ":svg:script^:svg:|type", ":svg:set^:svg:animation|", ":svg:stop^:svg:|", ":svg:style^:svg:|!disabled,media,title,type", ":svg:switch^:svg:graphics|", ":svg:symbol^:svg:|", ":svg:tspan^:svg:textPositioning|", ":svg:text^:svg:textPositioning|", ":svg:textPath^:svg:textContent|", ":svg:title^:svg:|", ":svg:use^:svg:graphics|", ":svg:view^:svg:|#zoomAndPan", "data^[HTMLElement]|value", "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name", "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default", "summary^[HTMLElement]|", "time^[HTMLElement]|dateTime", ":svg:cursor^:svg:|", ":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":math:math^:math:|", ":math:maction^:math:|", ":math:menclose^:math:|", ":math:merror^:math:|", ":math:mfenced^:math:|", ":math:mfrac^:math:|", ":math:mi^:math:|", ":math:mmultiscripts^:math:|", ":math:mn^:math:|", ":math:mo^:math:|", ":math:mover^:math:|", ":math:mpadded^:math:|", ":math:mphantom^:math:|", ":math:mroot^:math:|", ":math:mrow^:math:|", ":math:ms^:math:|", ":math:mspace^:math:|", ":math:msqrt^:math:|", ":math:mstyle^:math:|", ":math:msub^:math:|", ":math:msubsup^:math:|", ":math:msup^:math:|", ":math:mtable^:math:|", ":math:mtd^:math:|", ":math:mtext^:math:|", ":math:mtr^:math:|", ":math:munder^:math:|", ":math:munderover^:math:|", ":math:semantics^:math:|"];
var Is = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" }));
var ja = Array.from(Is).reduce((t7, [e, r]) => (t7.set(e, r), t7), /* @__PURE__ */ new Map());
var Vt = class extends Ht {
  constructor() {
    super(), this._schema = /* @__PURE__ */ new Map(), this._eventSchema = /* @__PURE__ */ new Map(), Ya.forEach((e) => {
      let r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), [s, i] = e.split("|"), a = i.split(","), [o, u] = s.split("^");
      o.split(",").forEach((l) => {
        this._schema.set(l.toLowerCase(), r), this._eventSchema.set(l.toLowerCase(), n);
      });
      let p = u && this._schema.get(u.toLowerCase());
      if (p) {
        for (let [l, f] of p) r.set(l, f);
        for (let l of this._eventSchema.get(u.toLowerCase())) n.add(l);
      }
      a.forEach((l) => {
        if (l.length > 0) switch (l[0]) {
          case "*":
            n.add(l.substring(1));
            break;
          case "!":
            r.set(l.substring(1), Ua);
            break;
          case "#":
            r.set(l.substring(1), Wa);
            break;
          case "%":
            r.set(l.substring(1), Ga);
            break;
          default:
            r.set(l, za);
        }
      });
    });
  }
  hasProperty(e, r, n) {
    if (n.some((i) => i.name === Fr.name)) return true;
    if (e.indexOf("-") > -1) {
      if (Nr(e) || Pr(e)) return false;
      if (n.some((i) => i.name === Lr.name)) return true;
    }
    return (this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).has(r);
  }
  hasElement(e, r) {
    return r.some((n) => n.name === Fr.name) || e.indexOf("-") > -1 && (Nr(e) || Pr(e) || r.some((n) => n.name === Lr.name)) ? true : this._schema.has(e.toLowerCase());
  }
  securityContext(e, r, n) {
    n && (r = this.getMappedPropName(r)), e = e.toLowerCase(), r = r.toLowerCase();
    let s = Ir()[e + "|" + r];
    return s || (s = Ir()["*|" + r], s || ee.NONE);
  }
  getMappedPropName(e) {
    return Is.get(e) ?? e;
  }
  getDefaultComponentElementName() {
    return "ng-component";
  }
  validateProperty(e) {
    return e.toLowerCase().startsWith("on") ? { error: true, msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.` } : { error: false };
  }
  validateAttribute(e) {
    return e.toLowerCase().startsWith("on") ? { error: true, msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...` } : { error: false };
  }
  allKnownElementNames() {
    return Array.from(this._schema.keys());
  }
  allKnownAttributesOfElement(e) {
    let r = this._schema.get(e.toLowerCase()) || this._schema.get("unknown");
    return Array.from(r.keys()).map((n) => ja.get(n) ?? n);
  }
  allKnownEventsOfElement(e) {
    return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
  }
  normalizeAnimationStyleProperty(e) {
    return ws(e);
  }
  normalizeAnimationStyleValue(e, r, n) {
    let s = "", i = n.toString().trim(), a = null;
    if (Ka(e) && n !== 0 && n !== "0") if (typeof n == "number") s = "px";
    else {
      let o = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
      o && o[1].length == 0 && (a = `Please provide a CSS unit value for ${r}:${n}`);
    }
    return { error: a, value: i + s };
  }
};
function Ka(t7) {
  switch (t7) {
    case "width":
    case "height":
    case "minWidth":
    case "minHeight":
    case "maxWidth":
    case "maxHeight":
    case "left":
    case "top":
    case "bottom":
    case "right":
    case "fontSize":
    case "outlineWidth":
    case "outlineOffset":
    case "paddingTop":
    case "paddingLeft":
    case "paddingBottom":
    case "paddingRight":
    case "marginTop":
    case "marginLeft":
    case "marginBottom":
    case "marginRight":
    case "borderRadius":
    case "borderWidth":
    case "borderTopWidth":
    case "borderLeftWidth":
    case "borderRightWidth":
    case "borderBottomWidth":
    case "textIndent":
      return true;
    default:
      return false;
  }
}
var m = class {
  constructor({ closedByChildren: e, implicitNamespacePrefix: r, contentType: n = P.PARSABLE_DATA, closedByParent: s = false, isVoid: i = false, ignoreFirstLf: a = false, preventNamespaceInheritance: o = false, canSelfClose: u = false } = {}) {
    this.closedByChildren = {}, this.closedByParent = false, e && e.length > 0 && e.forEach((p) => this.closedByChildren[p] = true), this.isVoid = i, this.closedByParent = s || i, this.implicitNamespacePrefix = r || null, this.contentType = n, this.ignoreFirstLf = a, this.preventNamespaceInheritance = o, this.canSelfClose = u ?? i;
  }
  isClosedByChild(e) {
    return this.isVoid || e.toLowerCase() in this.closedByChildren;
  }
  getContentType(e) {
    return typeof this.contentType == "object" ? (e === void 0 ? void 0 : this.contentType[e]) ?? this.contentType.default : this.contentType;
  }
};
var Rs;
var pt;
function He(t7) {
  return pt || (Rs = new m({ canSelfClose: true }), pt = Object.assign(/* @__PURE__ */ Object.create(null), { base: new m({ isVoid: true }), meta: new m({ isVoid: true }), area: new m({ isVoid: true }), embed: new m({ isVoid: true }), link: new m({ isVoid: true }), img: new m({ isVoid: true }), input: new m({ isVoid: true }), param: new m({ isVoid: true }), hr: new m({ isVoid: true }), br: new m({ isVoid: true }), source: new m({ isVoid: true }), track: new m({ isVoid: true }), wbr: new m({ isVoid: true }), p: new m({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new m({ closedByChildren: ["tbody", "tfoot"] }), tbody: new m({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new m({ closedByChildren: ["tbody"], closedByParent: true }), tr: new m({ closedByChildren: ["tr"], closedByParent: true }), td: new m({ closedByChildren: ["td", "th"], closedByParent: true }), th: new m({ closedByChildren: ["td", "th"], closedByParent: true }), col: new m({ isVoid: true }), svg: new m({ implicitNamespacePrefix: "svg" }), foreignObject: new m({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: true }), math: new m({ implicitNamespacePrefix: "math" }), li: new m({ closedByChildren: ["li"], closedByParent: true }), dt: new m({ closedByChildren: ["dt", "dd"] }), dd: new m({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new m({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new m({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new m({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new m({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new m({ closedByChildren: ["optgroup"], closedByParent: true }), option: new m({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new m({ ignoreFirstLf: true }), listing: new m({ ignoreFirstLf: true }), style: new m({ contentType: P.RAW_TEXT }), script: new m({ contentType: P.RAW_TEXT }), title: new m({ contentType: { default: P.ESCAPABLE_RAW_TEXT, svg: P.PARSABLE_DATA } }), textarea: new m({ contentType: P.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }) }), new Vt().allKnownElementNames().forEach((e) => {
    !pt[e] && Me(e) === null && (pt[e] = new m({ canSelfClose: false }));
  })), pt[t7] ?? Rs;
}
var ae = class {
  constructor(e, r) {
    this.sourceSpan = e, this.i18n = r;
  }
};
var Ut = class extends ae {
  constructor(e, r, n, s) {
    super(r, s), this.value = e, this.tokens = n, this.type = "text";
  }
  visit(e, r) {
    return e.visitText(this, r);
  }
};
var Wt = class extends ae {
  constructor(e, r, n, s) {
    super(r, s), this.value = e, this.tokens = n, this.type = "cdata";
  }
  visit(e, r) {
    return e.visitCdata(this, r);
  }
};
var zt = class extends ae {
  constructor(e, r, n, s, i, a) {
    super(s, a), this.switchValue = e, this.type = r, this.cases = n, this.switchValueSourceSpan = i;
  }
  visit(e, r) {
    return e.visitExpansion(this, r);
  }
};
var Gt = class {
  constructor(e, r, n, s, i) {
    this.value = e, this.expression = r, this.sourceSpan = n, this.valueSourceSpan = s, this.expSourceSpan = i, this.type = "expansionCase";
  }
  visit(e, r) {
    return e.visitExpansionCase(this, r);
  }
};
var Yt = class extends ae {
  constructor(e, r, n, s, i, a, o) {
    super(n, o), this.name = e, this.value = r, this.keySpan = s, this.valueSpan = i, this.valueTokens = a, this.type = "attribute";
  }
  visit(e, r) {
    return e.visitAttribute(this, r);
  }
  get nameSpan() {
    return this.keySpan;
  }
};
var Y = class extends ae {
  constructor(e, r, n, s, i, a = null, o = null, u) {
    super(s, u), this.name = e, this.attrs = r, this.children = n, this.startSourceSpan = i, this.endSourceSpan = a, this.nameSpan = o, this.type = "element";
  }
  visit(e, r) {
    return e.visitElement(this, r);
  }
};
var jt = class {
  constructor(e, r) {
    this.value = e, this.sourceSpan = r, this.type = "comment";
  }
  visit(e, r) {
    return e.visitComment(this, r);
  }
};
var Kt = class {
  constructor(e, r) {
    this.value = e, this.sourceSpan = r, this.type = "docType";
  }
  visit(e, r) {
    return e.visitDocType(this, r);
  }
};
var te = class extends ae {
  constructor(e, r, n, s, i, a, o = null, u) {
    super(s, u), this.name = e, this.parameters = r, this.children = n, this.nameSpan = i, this.startSourceSpan = a, this.endSourceSpan = o, this.type = "block";
  }
  visit(e, r) {
    return e.visitBlock(this, r);
  }
};
var ht = class {
  constructor(e, r) {
    this.expression = e, this.sourceSpan = r, this.type = "blockParameter", this.startSourceSpan = null, this.endSourceSpan = null;
  }
  visit(e, r) {
    return e.visitBlockParameter(this, r);
  }
};
var ft = class {
  constructor(e, r, n, s, i) {
    this.name = e, this.value = r, this.sourceSpan = n, this.nameSpan = s, this.valueSpan = i, this.type = "letDeclaration", this.startSourceSpan = null, this.endSourceSpan = null;
  }
  visit(e, r) {
    return e.visitLetDeclaration(this, r);
  }
};
function Qt(t7, e, r = null) {
  let n = [], s = t7.visit ? (i) => t7.visit(i, r) || i.visit(t7, r) : (i) => i.visit(t7, r);
  return e.forEach((i) => {
    let a = s(i);
    a && n.push(a);
  }), n;
}
var mt = class {
  constructor() {
  }
  visitElement(e, r) {
    this.visitChildren(r, (n) => {
      n(e.attrs), n(e.children);
    });
  }
  visitAttribute(e, r) {
  }
  visitText(e, r) {
  }
  visitCdata(e, r) {
  }
  visitComment(e, r) {
  }
  visitDocType(e, r) {
  }
  visitExpansion(e, r) {
    return this.visitChildren(r, (n) => {
      n(e.cases);
    });
  }
  visitExpansionCase(e, r) {
  }
  visitBlock(e, r) {
    this.visitChildren(r, (n) => {
      n(e.parameters), n(e.children);
    });
  }
  visitBlockParameter(e, r) {
  }
  visitLetDeclaration(e, r) {
  }
  visitChildren(e, r) {
    let n = [], s = this;
    function i(a) {
      a && n.push(Qt(s, a, e));
    }
    return r(i), Array.prototype.concat.apply([], n);
  }
};
var Ve = { AElig: "Æ", AMP: "&", amp: "&", Aacute: "Á", Abreve: "Ă", Acirc: "Â", Acy: "А", Afr: "𝔄", Agrave: "À", Alpha: "Α", Amacr: "Ā", And: "⩓", Aogon: "Ą", Aopf: "𝔸", ApplyFunction: "⁡", af: "⁡", Aring: "Å", angst: "Å", Ascr: "𝒜", Assign: "≔", colone: "≔", coloneq: "≔", Atilde: "Ã", Auml: "Ä", Backslash: "∖", setminus: "∖", setmn: "∖", smallsetminus: "∖", ssetmn: "∖", Barv: "⫧", Barwed: "⌆", doublebarwedge: "⌆", Bcy: "Б", Because: "∵", becaus: "∵", because: "∵", Bernoullis: "ℬ", Bscr: "ℬ", bernou: "ℬ", Beta: "Β", Bfr: "𝔅", Bopf: "𝔹", Breve: "˘", breve: "˘", Bumpeq: "≎", HumpDownHump: "≎", bump: "≎", CHcy: "Ч", COPY: "©", copy: "©", Cacute: "Ć", Cap: "⋒", CapitalDifferentialD: "ⅅ", DD: "ⅅ", Cayleys: "ℭ", Cfr: "ℭ", Ccaron: "Č", Ccedil: "Ç", Ccirc: "Ĉ", Cconint: "∰", Cdot: "Ċ", Cedilla: "¸", cedil: "¸", CenterDot: "·", centerdot: "·", middot: "·", Chi: "Χ", CircleDot: "⊙", odot: "⊙", CircleMinus: "⊖", ominus: "⊖", CirclePlus: "⊕", oplus: "⊕", CircleTimes: "⊗", otimes: "⊗", ClockwiseContourIntegral: "∲", cwconint: "∲", CloseCurlyDoubleQuote: "”", rdquo: "”", rdquor: "”", CloseCurlyQuote: "’", rsquo: "’", rsquor: "’", Colon: "∷", Proportion: "∷", Colone: "⩴", Congruent: "≡", equiv: "≡", Conint: "∯", DoubleContourIntegral: "∯", ContourIntegral: "∮", conint: "∮", oint: "∮", Copf: "ℂ", complexes: "ℂ", Coproduct: "∐", coprod: "∐", CounterClockwiseContourIntegral: "∳", awconint: "∳", Cross: "⨯", Cscr: "𝒞", Cup: "⋓", CupCap: "≍", asympeq: "≍", DDotrahd: "⤑", DJcy: "Ђ", DScy: "Ѕ", DZcy: "Џ", Dagger: "‡", ddagger: "‡", Darr: "↡", Dashv: "⫤", DoubleLeftTee: "⫤", Dcaron: "Ď", Dcy: "Д", Del: "∇", nabla: "∇", Delta: "Δ", Dfr: "𝔇", DiacriticalAcute: "´", acute: "´", DiacriticalDot: "˙", dot: "˙", DiacriticalDoubleAcute: "˝", dblac: "˝", DiacriticalGrave: "`", grave: "`", DiacriticalTilde: "˜", tilde: "˜", Diamond: "⋄", diam: "⋄", diamond: "⋄", DifferentialD: "ⅆ", dd: "ⅆ", Dopf: "𝔻", Dot: "¨", DoubleDot: "¨", die: "¨", uml: "¨", DotDot: "⃜", DotEqual: "≐", doteq: "≐", esdot: "≐", DoubleDownArrow: "⇓", Downarrow: "⇓", dArr: "⇓", DoubleLeftArrow: "⇐", Leftarrow: "⇐", lArr: "⇐", DoubleLeftRightArrow: "⇔", Leftrightarrow: "⇔", hArr: "⇔", iff: "⇔", DoubleLongLeftArrow: "⟸", Longleftarrow: "⟸", xlArr: "⟸", DoubleLongLeftRightArrow: "⟺", Longleftrightarrow: "⟺", xhArr: "⟺", DoubleLongRightArrow: "⟹", Longrightarrow: "⟹", xrArr: "⟹", DoubleRightArrow: "⇒", Implies: "⇒", Rightarrow: "⇒", rArr: "⇒", DoubleRightTee: "⊨", vDash: "⊨", DoubleUpArrow: "⇑", Uparrow: "⇑", uArr: "⇑", DoubleUpDownArrow: "⇕", Updownarrow: "⇕", vArr: "⇕", DoubleVerticalBar: "∥", par: "∥", parallel: "∥", shortparallel: "∥", spar: "∥", DownArrow: "↓", ShortDownArrow: "↓", darr: "↓", downarrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", duarr: "⇵", DownBreve: "̑", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", leftharpoondown: "↽", lhard: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", rhard: "⇁", rightharpoondown: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", top: "⊤", DownTeeArrow: "↧", mapstodown: "↧", Dscr: "𝒟", Dstrok: "Đ", ENG: "Ŋ", ETH: "Ð", Eacute: "É", Ecaron: "Ě", Ecirc: "Ê", Ecy: "Э", Edot: "Ė", Efr: "𝔈", Egrave: "È", Element: "∈", in: "∈", isin: "∈", isinv: "∈", Emacr: "Ē", EmptySmallSquare: "◻", EmptyVerySmallSquare: "▫", Eogon: "Ę", Eopf: "𝔼", Epsilon: "Ε", Equal: "⩵", EqualTilde: "≂", eqsim: "≂", esim: "≂", Equilibrium: "⇌", rightleftharpoons: "⇌", rlhar: "⇌", Escr: "ℰ", expectation: "ℰ", Esim: "⩳", Eta: "Η", Euml: "Ë", Exists: "∃", exist: "∃", ExponentialE: "ⅇ", ee: "ⅇ", exponentiale: "ⅇ", Fcy: "Ф", Ffr: "𝔉", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", blacksquare: "▪", squarf: "▪", squf: "▪", Fopf: "𝔽", ForAll: "∀", forall: "∀", Fouriertrf: "ℱ", Fscr: "ℱ", GJcy: "Ѓ", GT: ">", gt: ">", Gamma: "Γ", Gammad: "Ϝ", Gbreve: "Ğ", Gcedil: "Ģ", Gcirc: "Ĝ", Gcy: "Г", Gdot: "Ġ", Gfr: "𝔊", Gg: "⋙", ggg: "⋙", Gopf: "𝔾", GreaterEqual: "≥", ge: "≥", geq: "≥", GreaterEqualLess: "⋛", gel: "⋛", gtreqless: "⋛", GreaterFullEqual: "≧", gE: "≧", geqq: "≧", GreaterGreater: "⪢", GreaterLess: "≷", gl: "≷", gtrless: "≷", GreaterSlantEqual: "⩾", geqslant: "⩾", ges: "⩾", GreaterTilde: "≳", gsim: "≳", gtrsim: "≳", Gscr: "𝒢", Gt: "≫", NestedGreaterGreater: "≫", gg: "≫", HARDcy: "Ъ", Hacek: "ˇ", caron: "ˇ", Hat: "^", Hcirc: "Ĥ", Hfr: "ℌ", Poincareplane: "ℌ", HilbertSpace: "ℋ", Hscr: "ℋ", hamilt: "ℋ", Hopf: "ℍ", quaternions: "ℍ", HorizontalLine: "─", boxh: "─", Hstrok: "Ħ", HumpEqual: "≏", bumpe: "≏", bumpeq: "≏", IEcy: "Е", IJlig: "Ĳ", IOcy: "Ё", Iacute: "Í", Icirc: "Î", Icy: "И", Idot: "İ", Ifr: "ℑ", Im: "ℑ", image: "ℑ", imagpart: "ℑ", Igrave: "Ì", Imacr: "Ī", ImaginaryI: "ⅈ", ii: "ⅈ", Int: "∬", Integral: "∫", int: "∫", Intersection: "⋂", bigcap: "⋂", xcap: "⋂", InvisibleComma: "⁣", ic: "⁣", InvisibleTimes: "⁢", it: "⁢", Iogon: "Į", Iopf: "𝕀", Iota: "Ι", Iscr: "ℐ", imagline: "ℐ", Itilde: "Ĩ", Iukcy: "І", Iuml: "Ï", Jcirc: "Ĵ", Jcy: "Й", Jfr: "𝔍", Jopf: "𝕁", Jscr: "𝒥", Jsercy: "Ј", Jukcy: "Є", KHcy: "Х", KJcy: "Ќ", Kappa: "Κ", Kcedil: "Ķ", Kcy: "К", Kfr: "𝔎", Kopf: "𝕂", Kscr: "𝒦", LJcy: "Љ", LT: "<", lt: "<", Lacute: "Ĺ", Lambda: "Λ", Lang: "⟪", Laplacetrf: "ℒ", Lscr: "ℒ", lagran: "ℒ", Larr: "↞", twoheadleftarrow: "↞", Lcaron: "Ľ", Lcedil: "Ļ", Lcy: "Л", LeftAngleBracket: "⟨", lang: "⟨", langle: "⟨", LeftArrow: "←", ShortLeftArrow: "←", larr: "←", leftarrow: "←", slarr: "←", LeftArrowBar: "⇤", larrb: "⇤", LeftArrowRightArrow: "⇆", leftrightarrows: "⇆", lrarr: "⇆", LeftCeiling: "⌈", lceil: "⌈", LeftDoubleBracket: "⟦", lobrk: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", dharl: "⇃", downharpoonleft: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", lfloor: "⌊", LeftRightArrow: "↔", harr: "↔", leftrightarrow: "↔", LeftRightVector: "⥎", LeftTee: "⊣", dashv: "⊣", LeftTeeArrow: "↤", mapstoleft: "↤", LeftTeeVector: "⥚", LeftTriangle: "⊲", vartriangleleft: "⊲", vltri: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", ltrie: "⊴", trianglelefteq: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", uharl: "↿", upharpoonleft: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", leftharpoonup: "↼", lharu: "↼", LeftVectorBar: "⥒", LessEqualGreater: "⋚", leg: "⋚", lesseqgtr: "⋚", LessFullEqual: "≦", lE: "≦", leqq: "≦", LessGreater: "≶", lessgtr: "≶", lg: "≶", LessLess: "⪡", LessSlantEqual: "⩽", leqslant: "⩽", les: "⩽", LessTilde: "≲", lesssim: "≲", lsim: "≲", Lfr: "𝔏", Ll: "⋘", Lleftarrow: "⇚", lAarr: "⇚", Lmidot: "Ŀ", LongLeftArrow: "⟵", longleftarrow: "⟵", xlarr: "⟵", LongLeftRightArrow: "⟷", longleftrightarrow: "⟷", xharr: "⟷", LongRightArrow: "⟶", longrightarrow: "⟶", xrarr: "⟶", Lopf: "𝕃", LowerLeftArrow: "↙", swarr: "↙", swarrow: "↙", LowerRightArrow: "↘", searr: "↘", searrow: "↘", Lsh: "↰", lsh: "↰", Lstrok: "Ł", Lt: "≪", NestedLessLess: "≪", ll: "≪", Map: "⤅", Mcy: "М", MediumSpace: " ", Mellintrf: "ℳ", Mscr: "ℳ", phmmat: "ℳ", Mfr: "𝔐", MinusPlus: "∓", mnplus: "∓", mp: "∓", Mopf: "𝕄", Mu: "Μ", NJcy: "Њ", Nacute: "Ń", Ncaron: "Ň", Ncedil: "Ņ", Ncy: "Н", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", ZeroWidthSpace: "​", NewLine: `
`, Nfr: "𝔑", NoBreak: "⁠", NonBreakingSpace: " ", nbsp: " ", Nopf: "ℕ", naturals: "ℕ", Not: "⫬", NotCongruent: "≢", nequiv: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", npar: "∦", nparallel: "∦", nshortparallel: "∦", nspar: "∦", NotElement: "∉", notin: "∉", notinva: "∉", NotEqual: "≠", ne: "≠", NotEqualTilde: "≂̸", nesim: "≂̸", NotExists: "∄", nexist: "∄", nexists: "∄", NotGreater: "≯", ngt: "≯", ngtr: "≯", NotGreaterEqual: "≱", nge: "≱", ngeq: "≱", NotGreaterFullEqual: "≧̸", ngE: "≧̸", ngeqq: "≧̸", NotGreaterGreater: "≫̸", nGtv: "≫̸", NotGreaterLess: "≹", ntgl: "≹", NotGreaterSlantEqual: "⩾̸", ngeqslant: "⩾̸", nges: "⩾̸", NotGreaterTilde: "≵", ngsim: "≵", NotHumpDownHump: "≎̸", nbump: "≎̸", NotHumpEqual: "≏̸", nbumpe: "≏̸", NotLeftTriangle: "⋪", nltri: "⋪", ntriangleleft: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", nltrie: "⋬", ntrianglelefteq: "⋬", NotLess: "≮", nless: "≮", nlt: "≮", NotLessEqual: "≰", nle: "≰", nleq: "≰", NotLessGreater: "≸", ntlg: "≸", NotLessLess: "≪̸", nLtv: "≪̸", NotLessSlantEqual: "⩽̸", nleqslant: "⩽̸", nles: "⩽̸", NotLessTilde: "≴", nlsim: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", NotPrecedes: "⊀", npr: "⊀", nprec: "⊀", NotPrecedesEqual: "⪯̸", npre: "⪯̸", npreceq: "⪯̸", NotPrecedesSlantEqual: "⋠", nprcue: "⋠", NotReverseElement: "∌", notni: "∌", notniva: "∌", NotRightTriangle: "⋫", nrtri: "⋫", ntriangleright: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", nrtrie: "⋭", ntrianglerighteq: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", nsqsube: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", nsqsupe: "⋣", NotSubset: "⊂⃒", nsubset: "⊂⃒", vnsub: "⊂⃒", NotSubsetEqual: "⊈", nsube: "⊈", nsubseteq: "⊈", NotSucceeds: "⊁", nsc: "⊁", nsucc: "⊁", NotSucceedsEqual: "⪰̸", nsce: "⪰̸", nsucceq: "⪰̸", NotSucceedsSlantEqual: "⋡", nsccue: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", nsupset: "⊃⃒", vnsup: "⊃⃒", NotSupersetEqual: "⊉", nsupe: "⊉", nsupseteq: "⊉", NotTilde: "≁", nsim: "≁", NotTildeEqual: "≄", nsime: "≄", nsimeq: "≄", NotTildeFullEqual: "≇", ncong: "≇", NotTildeTilde: "≉", nap: "≉", napprox: "≉", NotVerticalBar: "∤", nmid: "∤", nshortmid: "∤", nsmid: "∤", Nscr: "𝒩", Ntilde: "Ñ", Nu: "Ν", OElig: "Œ", Oacute: "Ó", Ocirc: "Ô", Ocy: "О", Odblac: "Ő", Ofr: "𝔒", Ograve: "Ò", Omacr: "Ō", Omega: "Ω", ohm: "Ω", Omicron: "Ο", Oopf: "𝕆", OpenCurlyDoubleQuote: "“", ldquo: "“", OpenCurlyQuote: "‘", lsquo: "‘", Or: "⩔", Oscr: "𝒪", Oslash: "Ø", Otilde: "Õ", Otimes: "⨷", Ouml: "Ö", OverBar: "‾", oline: "‾", OverBrace: "⏞", OverBracket: "⎴", tbrk: "⎴", OverParenthesis: "⏜", PartialD: "∂", part: "∂", Pcy: "П", Pfr: "𝔓", Phi: "Φ", Pi: "Π", PlusMinus: "±", plusmn: "±", pm: "±", Popf: "ℙ", primes: "ℙ", Pr: "⪻", Precedes: "≺", pr: "≺", prec: "≺", PrecedesEqual: "⪯", pre: "⪯", preceq: "⪯", PrecedesSlantEqual: "≼", prcue: "≼", preccurlyeq: "≼", PrecedesTilde: "≾", precsim: "≾", prsim: "≾", Prime: "″", Product: "∏", prod: "∏", Proportional: "∝", prop: "∝", propto: "∝", varpropto: "∝", vprop: "∝", Pscr: "𝒫", Psi: "Ψ", QUOT: '"', quot: '"', Qfr: "𝔔", Qopf: "ℚ", rationals: "ℚ", Qscr: "𝒬", RBarr: "⤐", drbkarow: "⤐", REG: "®", circledR: "®", reg: "®", Racute: "Ŕ", Rang: "⟫", Rarr: "↠", twoheadrightarrow: "↠", Rarrtl: "⤖", Rcaron: "Ř", Rcedil: "Ŗ", Rcy: "Р", Re: "ℜ", Rfr: "ℜ", real: "ℜ", realpart: "ℜ", ReverseElement: "∋", SuchThat: "∋", ni: "∋", niv: "∋", ReverseEquilibrium: "⇋", leftrightharpoons: "⇋", lrhar: "⇋", ReverseUpEquilibrium: "⥯", duhar: "⥯", Rho: "Ρ", RightAngleBracket: "⟩", rang: "⟩", rangle: "⟩", RightArrow: "→", ShortRightArrow: "→", rarr: "→", rightarrow: "→", srarr: "→", RightArrowBar: "⇥", rarrb: "⇥", RightArrowLeftArrow: "⇄", rightleftarrows: "⇄", rlarr: "⇄", RightCeiling: "⌉", rceil: "⌉", RightDoubleBracket: "⟧", robrk: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", dharr: "⇂", downharpoonright: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rfloor: "⌋", RightTee: "⊢", vdash: "⊢", RightTeeArrow: "↦", map: "↦", mapsto: "↦", RightTeeVector: "⥛", RightTriangle: "⊳", vartriangleright: "⊳", vrtri: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", rtrie: "⊵", trianglerighteq: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", uharr: "↾", upharpoonright: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", rharu: "⇀", rightharpoonup: "⇀", RightVectorBar: "⥓", Ropf: "ℝ", reals: "ℝ", RoundImplies: "⥰", Rrightarrow: "⇛", rAarr: "⇛", Rscr: "ℛ", realine: "ℛ", Rsh: "↱", rsh: "↱", RuleDelayed: "⧴", SHCHcy: "Щ", SHcy: "Ш", SOFTcy: "Ь", Sacute: "Ś", Sc: "⪼", Scaron: "Š", Scedil: "Ş", Scirc: "Ŝ", Scy: "С", Sfr: "𝔖", ShortUpArrow: "↑", UpArrow: "↑", uarr: "↑", uparrow: "↑", Sigma: "Σ", SmallCircle: "∘", compfn: "∘", Sopf: "𝕊", Sqrt: "√", radic: "√", Square: "□", squ: "□", square: "□", SquareIntersection: "⊓", sqcap: "⊓", SquareSubset: "⊏", sqsub: "⊏", sqsubset: "⊏", SquareSubsetEqual: "⊑", sqsube: "⊑", sqsubseteq: "⊑", SquareSuperset: "⊐", sqsup: "⊐", sqsupset: "⊐", SquareSupersetEqual: "⊒", sqsupe: "⊒", sqsupseteq: "⊒", SquareUnion: "⊔", sqcup: "⊔", Sscr: "𝒮", Star: "⋆", sstarf: "⋆", Sub: "⋐", Subset: "⋐", SubsetEqual: "⊆", sube: "⊆", subseteq: "⊆", Succeeds: "≻", sc: "≻", succ: "≻", SucceedsEqual: "⪰", sce: "⪰", succeq: "⪰", SucceedsSlantEqual: "≽", sccue: "≽", succcurlyeq: "≽", SucceedsTilde: "≿", scsim: "≿", succsim: "≿", Sum: "∑", sum: "∑", Sup: "⋑", Supset: "⋑", Superset: "⊃", sup: "⊃", supset: "⊃", SupersetEqual: "⊇", supe: "⊇", supseteq: "⊇", THORN: "Þ", TRADE: "™", trade: "™", TSHcy: "Ћ", TScy: "Ц", Tab: "	", Tau: "Τ", Tcaron: "Ť", Tcedil: "Ţ", Tcy: "Т", Tfr: "𝔗", Therefore: "∴", there4: "∴", therefore: "∴", Theta: "Θ", ThickSpace: "  ", ThinSpace: " ", thinsp: " ", Tilde: "∼", sim: "∼", thicksim: "∼", thksim: "∼", TildeEqual: "≃", sime: "≃", simeq: "≃", TildeFullEqual: "≅", cong: "≅", TildeTilde: "≈", ap: "≈", approx: "≈", asymp: "≈", thickapprox: "≈", thkap: "≈", Topf: "𝕋", TripleDot: "⃛", tdot: "⃛", Tscr: "𝒯", Tstrok: "Ŧ", Uacute: "Ú", Uarr: "↟", Uarrocir: "⥉", Ubrcy: "Ў", Ubreve: "Ŭ", Ucirc: "Û", Ucy: "У", Udblac: "Ű", Ufr: "𝔘", Ugrave: "Ù", Umacr: "Ū", UnderBar: "_", lowbar: "_", UnderBrace: "⏟", UnderBracket: "⎵", bbrk: "⎵", UnderParenthesis: "⏝", Union: "⋃", bigcup: "⋃", xcup: "⋃", UnionPlus: "⊎", uplus: "⊎", Uogon: "Ų", Uopf: "𝕌", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", udarr: "⇅", UpDownArrow: "↕", updownarrow: "↕", varr: "↕", UpEquilibrium: "⥮", udhar: "⥮", UpTee: "⊥", bot: "⊥", bottom: "⊥", perp: "⊥", UpTeeArrow: "↥", mapstoup: "↥", UpperLeftArrow: "↖", nwarr: "↖", nwarrow: "↖", UpperRightArrow: "↗", nearr: "↗", nearrow: "↗", Upsi: "ϒ", upsih: "ϒ", Upsilon: "Υ", Uring: "Ů", Uscr: "𝒰", Utilde: "Ũ", Uuml: "Ü", VDash: "⊫", Vbar: "⫫", Vcy: "В", Vdash: "⊩", Vdashl: "⫦", Vee: "⋁", bigvee: "⋁", xvee: "⋁", Verbar: "‖", Vert: "‖", VerticalBar: "∣", mid: "∣", shortmid: "∣", smid: "∣", VerticalLine: "|", verbar: "|", vert: "|", VerticalSeparator: "❘", VerticalTilde: "≀", wr: "≀", wreath: "≀", VeryThinSpace: " ", hairsp: " ", Vfr: "𝔙", Vopf: "𝕍", Vscr: "𝒱", Vvdash: "⊪", Wcirc: "Ŵ", Wedge: "⋀", bigwedge: "⋀", xwedge: "⋀", Wfr: "𝔚", Wopf: "𝕎", Wscr: "𝒲", Xfr: "𝔛", Xi: "Ξ", Xopf: "𝕏", Xscr: "𝒳", YAcy: "Я", YIcy: "Ї", YUcy: "Ю", Yacute: "Ý", Ycirc: "Ŷ", Ycy: "Ы", Yfr: "𝔜", Yopf: "𝕐", Yscr: "𝒴", Yuml: "Ÿ", ZHcy: "Ж", Zacute: "Ź", Zcaron: "Ž", Zcy: "З", Zdot: "Ż", Zeta: "Ζ", Zfr: "ℨ", zeetrf: "ℨ", Zopf: "ℤ", integers: "ℤ", Zscr: "𝒵", aacute: "á", abreve: "ă", ac: "∾", mstpos: "∾", acE: "∾̳", acd: "∿", acirc: "â", acy: "а", aelig: "æ", afr: "𝔞", agrave: "à", alefsym: "ℵ", aleph: "ℵ", alpha: "α", amacr: "ā", amalg: "⨿", and: "∧", wedge: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", angle: "∠", ange: "⦤", angmsd: "∡", measuredangle: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angzarr: "⍼", aogon: "ą", aopf: "𝕒", apE: "⩰", apacir: "⩯", ape: "≊", approxeq: "≊", apid: "≋", apos: "'", aring: "å", ascr: "𝒶", ast: "*", midast: "*", atilde: "ã", auml: "ä", awint: "⨑", bNot: "⫭", backcong: "≌", bcong: "≌", backepsilon: "϶", bepsi: "϶", backprime: "‵", bprime: "‵", backsim: "∽", bsim: "∽", backsimeq: "⋍", bsime: "⋍", barvee: "⊽", barwed: "⌅", barwedge: "⌅", bbrktbrk: "⎶", bcy: "б", bdquo: "„", ldquor: "„", bemptyv: "⦰", beta: "β", beth: "ℶ", between: "≬", twixt: "≬", bfr: "𝔟", bigcirc: "◯", xcirc: "◯", bigodot: "⨀", xodot: "⨀", bigoplus: "⨁", xoplus: "⨁", bigotimes: "⨂", xotime: "⨂", bigsqcup: "⨆", xsqcup: "⨆", bigstar: "★", starf: "★", bigtriangledown: "▽", xdtri: "▽", bigtriangleup: "△", xutri: "△", biguplus: "⨄", xuplus: "⨄", bkarow: "⤍", rbarr: "⤍", blacklozenge: "⧫", lozf: "⧫", blacktriangle: "▴", utrif: "▴", blacktriangledown: "▾", dtrif: "▾", blacktriangleleft: "◂", ltrif: "◂", blacktriangleright: "▸", rtrif: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bopf: "𝕓", bowtie: "⋈", boxDL: "╗", boxDR: "╔", boxDl: "╖", boxDr: "╓", boxH: "═", boxHD: "╦", boxHU: "╩", boxHd: "╤", boxHu: "╧", boxUL: "╝", boxUR: "╚", boxUl: "╜", boxUr: "╙", boxV: "║", boxVH: "╬", boxVL: "╣", boxVR: "╠", boxVh: "╫", boxVl: "╢", boxVr: "╟", boxbox: "⧉", boxdL: "╕", boxdR: "╒", boxdl: "┐", boxdr: "┌", boxhD: "╥", boxhU: "╨", boxhd: "┬", boxhu: "┴", boxminus: "⊟", minusb: "⊟", boxplus: "⊞", plusb: "⊞", boxtimes: "⊠", timesb: "⊠", boxuL: "╛", boxuR: "╘", boxul: "┘", boxur: "└", boxv: "│", boxvH: "╪", boxvL: "╡", boxvR: "╞", boxvh: "┼", boxvl: "┤", boxvr: "├", brvbar: "¦", bscr: "𝒷", bsemi: "⁏", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bumpE: "⪮", cacute: "ć", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", caps: "∩︀", caret: "⁁", ccaps: "⩍", ccaron: "č", ccedil: "ç", ccirc: "ĉ", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", cemptyv: "⦲", cent: "¢", cfr: "𝔠", chcy: "ч", check: "✓", checkmark: "✓", chi: "χ", cir: "○", cirE: "⧃", circ: "ˆ", circeq: "≗", cire: "≗", circlearrowleft: "↺", olarr: "↺", circlearrowright: "↻", orarr: "↻", circledS: "Ⓢ", oS: "Ⓢ", circledast: "⊛", oast: "⊛", circledcirc: "⊚", ocir: "⊚", circleddash: "⊝", odash: "⊝", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", clubs: "♣", clubsuit: "♣", colon: ":", comma: ",", commat: "@", comp: "∁", complement: "∁", congdot: "⩭", copf: "𝕔", copysr: "℗", crarr: "↵", cross: "✗", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", curlyeqprec: "⋞", cuesc: "⋟", curlyeqsucc: "⋟", cularr: "↶", curvearrowleft: "↶", cularrp: "⤽", cup: "∪", cupbrcap: "⩈", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curvearrowright: "↷", curarrm: "⤼", curlyvee: "⋎", cuvee: "⋎", curlywedge: "⋏", cuwed: "⋏", curren: "¤", cwint: "∱", cylcty: "⌭", dHar: "⥥", dagger: "†", daleth: "ℸ", dash: "‐", hyphen: "‐", dbkarow: "⤏", rBarr: "⤏", dcaron: "ď", dcy: "д", ddarr: "⇊", downdownarrows: "⇊", ddotseq: "⩷", eDDot: "⩷", deg: "°", delta: "δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", diamondsuit: "♦", diams: "♦", digamma: "ϝ", gammad: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", dlcorn: "⌞", llcorner: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", doteqdot: "≑", eDot: "≑", dotminus: "∸", minusd: "∸", dotplus: "∔", plusdo: "∔", dotsquare: "⊡", sdotb: "⊡", drcorn: "⌟", lrcorner: "⌟", drcrop: "⌌", dscr: "𝒹", dscy: "ѕ", dsol: "⧶", dstrok: "đ", dtdot: "⋱", dtri: "▿", triangledown: "▿", dwangle: "⦦", dzcy: "џ", dzigrarr: "⟿", eacute: "é", easter: "⩮", ecaron: "ě", ecir: "≖", eqcirc: "≖", ecirc: "ê", ecolon: "≕", eqcolon: "≕", ecy: "э", edot: "ė", efDot: "≒", fallingdotseq: "≒", efr: "𝔢", eg: "⪚", egrave: "è", egs: "⪖", eqslantgtr: "⪖", egsdot: "⪘", el: "⪙", elinters: "⏧", ell: "ℓ", els: "⪕", eqslantless: "⪕", elsdot: "⪗", emacr: "ē", empty: "∅", emptyset: "∅", emptyv: "∅", varnothing: "∅", emsp13: " ", emsp14: " ", emsp: " ", eng: "ŋ", ensp: " ", eogon: "ę", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", epsiv: "ϵ", straightepsilon: "ϵ", varepsilon: "ϵ", equals: "=", equest: "≟", questeq: "≟", equivDD: "⩸", eqvparsl: "⧥", erDot: "≓", risingdotseq: "≓", erarr: "⥱", escr: "ℯ", eta: "η", eth: "ð", euml: "ë", euro: "€", excl: "!", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", filig: "ﬁ", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", fork: "⋔", pitchfork: "⋔", forkv: "⫙", fpartint: "⨍", frac12: "½", half: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", sfrown: "⌢", fscr: "𝒻", gEl: "⪌", gtreqqless: "⪌", gacute: "ǵ", gamma: "γ", gap: "⪆", gtrapprox: "⪆", gbreve: "ğ", gcirc: "ĝ", gcy: "г", gdot: "ġ", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", gimel: "ℷ", gjcy: "ѓ", glE: "⪒", gla: "⪥", glj: "⪤", gnE: "≩", gneqq: "≩", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gneq: "⪈", gnsim: "⋧", gopf: "𝕘", gscr: "ℊ", gsime: "⪎", gsiml: "⪐", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtrdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrarr: "⥸", gvertneqq: "≩︀", gvnE: "≩︀", hardcy: "ъ", harrcir: "⥈", harrw: "↭", leftrightsquigarrow: "↭", hbar: "ℏ", hslash: "ℏ", planck: "ℏ", plankv: "ℏ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", mldr: "…", hercon: "⊹", hfr: "𝔥", hksearow: "⤥", searhk: "⤥", hkswarow: "⤦", swarhk: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", larrhk: "↩", hookrightarrow: "↪", rarrhk: "↪", hopf: "𝕙", horbar: "―", hscr: "𝒽", hstrok: "ħ", hybull: "⁃", iacute: "í", icirc: "î", icy: "и", iecy: "е", iexcl: "¡", ifr: "𝔦", igrave: "ì", iiiint: "⨌", qint: "⨌", iiint: "∭", tint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", imacr: "ī", imath: "ı", inodot: "ı", imof: "⊷", imped: "Ƶ", incare: "℅", infin: "∞", infintie: "⧝", intcal: "⊺", intercal: "⊺", intlarhk: "⨗", intprod: "⨼", iprod: "⨼", iocy: "ё", iogon: "į", iopf: "𝕚", iota: "ι", iquest: "¿", iscr: "𝒾", isinE: "⋹", isindot: "⋵", isins: "⋴", isinsv: "⋳", itilde: "ĩ", iukcy: "і", iuml: "ï", jcirc: "ĵ", jcy: "й", jfr: "𝔧", jmath: "ȷ", jopf: "𝕛", jscr: "𝒿", jsercy: "ј", jukcy: "є", kappa: "κ", kappav: "ϰ", varkappa: "ϰ", kcedil: "ķ", kcy: "к", kfr: "𝔨", kgreen: "ĸ", khcy: "х", kjcy: "ќ", kopf: "𝕜", kscr: "𝓀", lAtail: "⤛", lBarr: "⤎", lEg: "⪋", lesseqqgtr: "⪋", lHar: "⥢", lacute: "ĺ", laemptyv: "⦴", lambda: "λ", langd: "⦑", lap: "⪅", lessapprox: "⪅", laquo: "«", larrbfs: "⤟", larrfs: "⤝", larrlp: "↫", looparrowleft: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", leftarrowtail: "↢", lat: "⪫", latail: "⤙", late: "⪭", lates: "⪭︀", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lcub: "{", lbrack: "[", lsqb: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", lcedil: "ļ", lcy: "л", ldca: "⤶", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", leq: "≤", leftleftarrows: "⇇", llarr: "⇇", leftthreetimes: "⋋", lthree: "⋋", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessdot: "⋖", ltdot: "⋖", lfisht: "⥼", lfr: "𝔩", lgE: "⪑", lharul: "⥪", lhblk: "▄", ljcy: "љ", llhard: "⥫", lltri: "◺", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnE: "≨", lneqq: "≨", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lneq: "⪇", lnsim: "⋦", loang: "⟬", loarr: "⇽", longmapsto: "⟼", xmap: "⟼", looparrowright: "↬", rarrlp: "↬", lopar: "⦅", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", loz: "◊", lozenge: "◊", lpar: "(", lparlt: "⦓", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", lsime: "⪍", lsimg: "⪏", lsquor: "‚", sbquo: "‚", lstrok: "ł", ltcc: "⪦", ltcir: "⩹", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltrPar: "⦖", ltri: "◃", triangleleft: "◃", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", mDDot: "∺", macr: "¯", strns: "¯", male: "♂", malt: "✠", maltese: "✠", marker: "▮", mcomma: "⨩", mcy: "м", mdash: "—", mfr: "𝔪", mho: "℧", micro: "µ", midcir: "⫰", minus: "−", minusdu: "⨪", mlcp: "⫛", models: "⊧", mopf: "𝕞", mscr: "𝓂", mu: "μ", multimap: "⊸", mumap: "⊸", nGg: "⋙̸", nGt: "≫⃒", nLeftarrow: "⇍", nlArr: "⇍", nLeftrightarrow: "⇎", nhArr: "⇎", nLl: "⋘̸", nLt: "≪⃒", nRightarrow: "⇏", nrArr: "⇏", nVDash: "⊯", nVdash: "⊮", nacute: "ń", nang: "∠⃒", napE: "⩰̸", napid: "≋̸", napos: "ŉ", natur: "♮", natural: "♮", ncap: "⩃", ncaron: "ň", ncedil: "ņ", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", ndash: "–", neArr: "⇗", nearhk: "⤤", nedot: "≐̸", nesear: "⤨", toea: "⤨", nfr: "𝔫", nharr: "↮", nleftrightarrow: "↮", nhpar: "⫲", nis: "⋼", nisd: "⋺", njcy: "њ", nlE: "≦̸", nleqq: "≦̸", nlarr: "↚", nleftarrow: "↚", nldr: "‥", nopf: "𝕟", not: "¬", notinE: "⋹̸", notindot: "⋵̸", notinvb: "⋷", notinvc: "⋶", notnivb: "⋾", notnivc: "⋽", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", nrarr: "↛", nrightarrow: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nscr: "𝓃", nsub: "⊄", nsubE: "⫅̸", nsubseteqq: "⫅̸", nsup: "⊅", nsupE: "⫆̸", nsupseteqq: "⫆̸", ntilde: "ñ", nu: "ν", num: "#", numero: "№", numsp: " ", nvDash: "⊭", nvHarr: "⤄", nvap: "≍⃒", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwArr: "⇖", nwarhk: "⤣", nwnear: "⤧", oacute: "ó", ocirc: "ô", ocy: "о", odblac: "ő", odiv: "⨸", odsold: "⦼", oelig: "œ", ofcir: "⦿", ofr: "𝔬", ogon: "˛", ograve: "ò", ogt: "⧁", ohbar: "⦵", olcir: "⦾", olcross: "⦻", olt: "⧀", omacr: "ō", omega: "ω", omicron: "ο", omid: "⦶", oopf: "𝕠", opar: "⦷", operp: "⦹", or: "∨", vee: "∨", ord: "⩝", order: "ℴ", orderof: "ℴ", oscr: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oslash: "ø", osol: "⊘", otilde: "õ", otimesas: "⨶", ouml: "ö", ovbar: "⌽", para: "¶", parsim: "⫳", parsl: "⫽", pcy: "п", percnt: "%", period: ".", permil: "‰", pertenk: "‱", pfr: "𝔭", phi: "φ", phiv: "ϕ", straightphi: "ϕ", varphi: "ϕ", phone: "☎", pi: "π", piv: "ϖ", varpi: "ϖ", planckh: "ℎ", plus: "+", plusacir: "⨣", pluscir: "⨢", plusdu: "⨥", pluse: "⩲", plussim: "⨦", plustwo: "⨧", pointint: "⨕", popf: "𝕡", pound: "£", prE: "⪳", prap: "⪷", precapprox: "⪷", precnapprox: "⪹", prnap: "⪹", precneqq: "⪵", prnE: "⪵", precnsim: "⋨", prnsim: "⋨", prime: "′", profalar: "⌮", profline: "⌒", profsurf: "⌓", prurel: "⊰", pscr: "𝓅", psi: "ψ", puncsp: " ", qfr: "𝔮", qopf: "𝕢", qprime: "⁗", qscr: "𝓆", quatint: "⨖", quest: "?", rAtail: "⤜", rHar: "⥤", race: "∽̱", racute: "ŕ", raemptyv: "⦳", rangd: "⦒", range: "⦥", raquo: "»", rarrap: "⥵", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", rightarrowtail: "↣", rarrw: "↝", rightsquigarrow: "↝", ratail: "⤚", ratio: "∶", rbbrk: "❳", rbrace: "}", rcub: "}", rbrack: "]", rsqb: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", rcedil: "ŗ", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdsh: "↳", rect: "▭", rfisht: "⥽", rfr: "𝔯", rharul: "⥬", rho: "ρ", rhov: "ϱ", varrho: "ϱ", rightrightarrows: "⇉", rrarr: "⇉", rightthreetimes: "⋌", rthree: "⋌", ring: "˚", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", ropar: "⦆", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", rpar: ")", rpargt: "⦔", rppolint: "⨒", rsaquo: "›", rscr: "𝓇", rtimes: "⋊", rtri: "▹", triangleright: "▹", rtriltri: "⧎", ruluhar: "⥨", rx: "℞", sacute: "ś", scE: "⪴", scap: "⪸", succapprox: "⪸", scaron: "š", scedil: "ş", scirc: "ŝ", scnE: "⪶", succneqq: "⪶", scnap: "⪺", succnapprox: "⪺", scnsim: "⋩", succnsim: "⋩", scpolint: "⨓", scy: "с", sdot: "⋅", sdote: "⩦", seArr: "⇘", sect: "§", semi: ";", seswar: "⤩", tosa: "⤩", sext: "✶", sfr: "𝔰", sharp: "♯", shchcy: "щ", shcy: "ш", shy: "­", sigma: "σ", sigmaf: "ς", sigmav: "ς", varsigma: "ς", simdot: "⩪", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", smashp: "⨳", smeparsl: "⧤", smile: "⌣", ssmile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", spades: "♠", spadesuit: "♠", sqcaps: "⊓︀", sqcups: "⊔︀", sscr: "𝓈", star: "☆", sub: "⊂", subset: "⊂", subE: "⫅", subseteqq: "⫅", subdot: "⪽", subedot: "⫃", submult: "⫁", subnE: "⫋", subsetneqq: "⫋", subne: "⊊", subsetneq: "⊊", subplus: "⪿", subrarr: "⥹", subsim: "⫇", subsub: "⫕", subsup: "⫓", sung: "♪", sup1: "¹", sup2: "²", sup3: "³", supE: "⫆", supseteqq: "⫆", supdot: "⪾", supdsub: "⫘", supedot: "⫄", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supsetneqq: "⫌", supne: "⊋", supsetneq: "⊋", supplus: "⫀", supsim: "⫈", supsub: "⫔", supsup: "⫖", swArr: "⇙", swnwar: "⤪", szlig: "ß", target: "⌖", tau: "τ", tcaron: "ť", tcedil: "ţ", tcy: "т", telrec: "⌕", tfr: "𝔱", theta: "θ", thetasym: "ϑ", thetav: "ϑ", vartheta: "ϑ", thorn: "þ", times: "×", timesbar: "⨱", timesd: "⨰", topbot: "⌶", topcir: "⫱", topf: "𝕥", topfork: "⫚", tprime: "‴", triangle: "▵", utri: "▵", triangleq: "≜", trie: "≜", tridot: "◬", triminus: "⨺", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", tscy: "ц", tshcy: "ћ", tstrok: "ŧ", uHar: "⥣", uacute: "ú", ubrcy: "ў", ubreve: "ŭ", ucirc: "û", ucy: "у", udblac: "ű", ufisht: "⥾", ufr: "𝔲", ugrave: "ù", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", uogon: "ų", uopf: "𝕦", upsi: "υ", upsilon: "υ", upuparrows: "⇈", uuarr: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", urtri: "◹", uscr: "𝓊", utdot: "⋰", utilde: "ũ", uuml: "ü", uwangle: "⦧", vBar: "⫨", vBarv: "⫩", vangrt: "⦜", varsubsetneq: "⊊︀", vsubne: "⊊︀", varsubsetneqq: "⫋︀", vsubnE: "⫋︀", varsupsetneq: "⊋︀", vsupne: "⊋︀", varsupsetneqq: "⫌︀", vsupnE: "⫌︀", vcy: "в", veebar: "⊻", veeeq: "≚", vellip: "⋮", vfr: "𝔳", vopf: "𝕧", vscr: "𝓋", vzigzag: "⦚", wcirc: "ŵ", wedbar: "⩟", wedgeq: "≙", weierp: "℘", wp: "℘", wfr: "𝔴", wopf: "𝕨", wscr: "𝓌", xfr: "𝔵", xi: "ξ", xnis: "⋻", xopf: "𝕩", xscr: "𝓍", yacute: "ý", yacy: "я", ycirc: "ŷ", ycy: "ы", yen: "¥", yfr: "𝔶", yicy: "ї", yopf: "𝕪", yscr: "𝓎", yucy: "ю", yuml: "ÿ", zacute: "ź", zcaron: "ž", zcy: "з", zdot: "ż", zeta: "ζ", zfr: "𝔷", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", zscr: "𝓏", zwj: "‍", zwnj: "‌" };
var Xa = "";
Ve.ngsp = Xa;
var Ja = [/@/, /^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
function $s(t7, e) {
  if (e != null && !(Array.isArray(e) && e.length == 2)) throw new Error(`Expected '${t7}' to be an array, [start, end].`);
  if (e != null) {
    let r = e[0], n = e[1];
    Ja.forEach((s) => {
      if (s.test(r) || s.test(n)) throw new Error(`['${r}', '${n}'] contains unusable interpolation symbol.`);
    });
  }
}
var Rr = class t2 {
  static fromArray(e) {
    return e ? ($s("interpolation", e), new t2(e[0], e[1])) : $r;
  }
  constructor(e, r) {
    this.start = e, this.end = r;
  }
};
var $r = new Rr("{{", "}}");
var gt = class extends Oe {
  constructor(e, r, n) {
    super(n, e), this.tokenType = r;
  }
};
var Vr = class {
  constructor(e, r, n) {
    this.tokens = e, this.errors = r, this.nonNormalizedIcuExpressions = n;
  }
};
function Qs(t7, e, r, n = {}) {
  let s = new Ur(new De(t7, e), r, n);
  return s.tokenize(), new Vr(wo(s.tokens), s.errors, s.nonNormalizedIcuExpressions);
}
var So = /\r\n?/g;
function Ue(t7) {
  return `Unexpected character "${t7 === 0 ? "EOF" : String.fromCharCode(t7)}"`;
}
function Vs(t7) {
  return `Unknown entity "${t7}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function _o(t7, e) {
  return `Unable to parse entity "${e}" - ${t7} character reference entities must end with ";"`;
}
var tr;
(function(t7) {
  t7.HEX = "hexadecimal", t7.DEC = "decimal";
})(tr || (tr = {}));
var Ct = class {
  constructor(e) {
    this.error = e;
  }
};
var Ur = class {
  constructor(e, r, n) {
    this._getTagContentType = r, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = false, this._fullNameStack = [], this.tokens = [], this.errors = [], this.nonNormalizedIcuExpressions = [], this._tokenizeIcu = n.tokenizeExpansionForms || false, this._interpolationConfig = n.interpolationConfig || $r, this._leadingTriviaCodePoints = n.leadingTriviaChars && n.leadingTriviaChars.map((i) => i.codePointAt(0) || 0), this._canSelfClose = n.canSelfClose || false, this._allowHtmComponentClosingTags = n.allowHtmComponentClosingTags || false;
    let s = n.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 };
    this._cursor = n.escapedString ? new Wr(e, s) : new rr(e, s), this._preserveLineEndings = n.preserveLineEndings || false, this._i18nNormalizeLineEndingsInICUs = n.i18nNormalizeLineEndingsInICUs || false, this._tokenizeBlocks = n.tokenizeBlocks ?? true, this._tokenizeLet = n.tokenizeLet ?? true;
    try {
      this._cursor.init();
    } catch (i) {
      this.handleError(i);
    }
  }
  _processCarriageReturns(e) {
    return this._preserveLineEndings ? e : e.replace(So, `
`);
  }
  tokenize() {
    for (; this._cursor.peek() !== 0; ) {
      let e = this._cursor.clone();
      try {
        if (this._attemptCharCode(60)) if (this._attemptCharCode(33)) this._attemptStr("[CDATA[") ? this._consumeCdata(e) : this._attemptStr("--") ? this._consumeComment(e) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(e) : this._consumeBogusComment(e);
        else if (this._attemptCharCode(47)) this._consumeTagClose(e);
        else {
          let r = this._cursor.clone();
          this._attemptCharCode(63) ? (this._cursor = r, this._consumeBogusComment(e)) : this._consumeTagOpen(e);
        }
        else this._tokenizeLet && this._cursor.peek() === 64 && !this._inInterpolation && this._attemptStr("@let") ? this._consumeLetDeclaration(e) : this._tokenizeBlocks && this._attemptCharCode(64) ? this._consumeBlockStart(e) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(125) ? this._consumeBlockEnd(e) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(5, 8, () => this._isTextEnd(), () => this._isTagStart());
      } catch (r) {
        this.handleError(r);
      }
    }
    this._beginToken(34), this._endToken([]);
  }
  _getBlockName() {
    let e = false, r = this._cursor.clone();
    return this._attemptCharCodeUntilFn((n) => ut(n) ? !e : zs(n) ? (e = true, false) : true), this._cursor.getChars(r).trim();
  }
  _consumeBlockStart(e) {
    this._beginToken(25, e);
    let r = this._endToken([this._getBlockName()]);
    if (this._cursor.peek() === 40) if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(b), this._attemptCharCode(41)) this._attemptCharCodeUntilFn(b);
    else {
      r.type = 29;
      return;
    }
    this._attemptCharCode(123) ? (this._beginToken(26), this._endToken([])) : r.type = 29;
  }
  _consumeBlockEnd(e) {
    this._beginToken(27, e), this._endToken([]);
  }
  _consumeBlockParameters() {
    for (this._attemptCharCodeUntilFn(Gs); this._cursor.peek() !== 41 && this._cursor.peek() !== 0; ) {
      this._beginToken(28);
      let e = this._cursor.clone(), r = null, n = 0;
      for (; this._cursor.peek() !== 59 && this._cursor.peek() !== 0 || r !== null; ) {
        let s = this._cursor.peek();
        if (s === 92) this._cursor.advance();
        else if (s === r) r = null;
        else if (r === null && $t(s)) r = s;
        else if (s === 40 && r === null) n++;
        else if (s === 41 && r === null) {
          if (n === 0) break;
          n > 0 && n--;
        }
        this._cursor.advance();
      }
      this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(Gs);
    }
  }
  _consumeLetDeclaration(e) {
    if (this._beginToken(30, e), ut(this._cursor.peek())) this._attemptCharCodeUntilFn(b);
    else {
      let s = this._endToken([this._cursor.getChars(e)]);
      s.type = 33;
      return;
    }
    let r = this._endToken([this._getLetDeclarationName()]);
    if (this._attemptCharCodeUntilFn(b), !this._attemptCharCode(61)) {
      r.type = 33;
      return;
    }
    this._attemptCharCodeUntilFn((s) => b(s) && !Rt(s)), this._consumeLetDeclarationValue(), this._cursor.peek() === 59 ? (this._beginToken(32), this._endToken([]), this._cursor.advance()) : (r.type = 33, r.sourceSpan = this._cursor.getSpan(e));
  }
  _getLetDeclarationName() {
    let e = this._cursor.clone(), r = false;
    return this._attemptCharCodeUntilFn((n) => lt(n) || n === 36 || n === 95 || r && It(n) ? (r = true, false) : true), this._cursor.getChars(e).trim();
  }
  _consumeLetDeclarationValue() {
    let e = this._cursor.clone();
    for (this._beginToken(31, e); this._cursor.peek() !== 0; ) {
      let r = this._cursor.peek();
      if (r === 59) break;
      $t(r) && (this._cursor.advance(), this._attemptCharCodeUntilFn((n) => n === 92 ? (this._cursor.advance(), false) : n === r)), this._cursor.advance();
    }
    this._endToken([this._cursor.getChars(e)]);
  }
  _tokenizeExpansionForm() {
    if (this.isExpansionFormStart()) return this._consumeExpansionFormStart(), true;
    if (vo(this._cursor.peek()) && this._isInExpansionForm()) return this._consumeExpansionCaseStart(), true;
    if (this._cursor.peek() === 125) {
      if (this._isInExpansionCase()) return this._consumeExpansionCaseEnd(), true;
      if (this._isInExpansionForm()) return this._consumeExpansionFormEnd(), true;
    }
    return false;
  }
  _beginToken(e, r = this._cursor.clone()) {
    this._currentTokenStart = r, this._currentTokenType = e;
  }
  _endToken(e, r) {
    if (this._currentTokenStart === null) throw new gt("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(r));
    if (this._currentTokenType === null) throw new gt("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
    let n = { type: this._currentTokenType, parts: e, sourceSpan: (r ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) };
    return this.tokens.push(n), this._currentTokenStart = null, this._currentTokenType = null, n;
  }
  _createError(e, r) {
    this._isInExpansionForm() && (e += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
    let n = new gt(e, this._currentTokenType, r);
    return this._currentTokenStart = null, this._currentTokenType = null, new Ct(n);
  }
  handleError(e) {
    if (e instanceof St && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof Ct) this.errors.push(e.error);
    else throw e;
  }
  _attemptCharCode(e) {
    return this._cursor.peek() === e ? (this._cursor.advance(), true) : false;
  }
  _attemptCharCodeCaseInsensitive(e) {
    return yo(this._cursor.peek(), e) ? (this._cursor.advance(), true) : false;
  }
  _requireCharCode(e) {
    let r = this._cursor.clone();
    if (!this._attemptCharCode(e)) throw this._createError(Ue(this._cursor.peek()), this._cursor.getSpan(r));
  }
  _attemptStr(e) {
    let r = e.length;
    if (this._cursor.charsLeft() < r) return false;
    let n = this._cursor.clone();
    for (let s = 0; s < r; s++) if (!this._attemptCharCode(e.charCodeAt(s))) return this._cursor = n, false;
    return true;
  }
  _attemptStrCaseInsensitive(e) {
    for (let r = 0; r < e.length; r++) if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(r))) return false;
    return true;
  }
  _requireStr(e) {
    let r = this._cursor.clone();
    if (!this._attemptStr(e)) throw this._createError(Ue(this._cursor.peek()), this._cursor.getSpan(r));
  }
  _requireStrCaseInsensitive(e) {
    let r = this._cursor.clone();
    if (!this._attemptStrCaseInsensitive(e)) throw this._createError(Ue(this._cursor.peek()), this._cursor.getSpan(r));
  }
  _attemptCharCodeUntilFn(e) {
    for (; !e(this._cursor.peek()); ) this._cursor.advance();
  }
  _requireCharCodeUntilFn(e, r) {
    let n = this._cursor.clone();
    if (this._attemptCharCodeUntilFn(e), this._cursor.diff(n) < r) throw this._createError(Ue(this._cursor.peek()), this._cursor.getSpan(n));
  }
  _attemptUntilChar(e) {
    for (; this._cursor.peek() !== e; ) this._cursor.advance();
  }
  _readChar() {
    let e = String.fromCodePoint(this._cursor.peek());
    return this._cursor.advance(), e;
  }
  _consumeEntity(e) {
    this._beginToken(9);
    let r = this._cursor.clone();
    if (this._cursor.advance(), this._attemptCharCode(35)) {
      let n = this._attemptCharCode(120) || this._attemptCharCode(88), s = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(Ao), this._cursor.peek() != 59) {
        this._cursor.advance();
        let a = n ? tr.HEX : tr.DEC;
        throw this._createError(_o(a, this._cursor.getChars(r)), this._cursor.getSpan());
      }
      let i = this._cursor.getChars(s);
      this._cursor.advance();
      try {
        let a = parseInt(i, n ? 16 : 10);
        this._endToken([String.fromCharCode(a), this._cursor.getChars(r)]);
      } catch {
        throw this._createError(Vs(this._cursor.getChars(r)), this._cursor.getSpan());
      }
    } else {
      let n = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(Do), this._cursor.peek() != 59) this._beginToken(e, r), this._cursor = n, this._endToken(["&"]);
      else {
        let s = this._cursor.getChars(n);
        this._cursor.advance();
        let i = Ve[s];
        if (!i) throw this._createError(Vs(s), this._cursor.getSpan(r));
        this._endToken([i, `&${s};`]);
      }
    }
  }
  _consumeRawText(e, r) {
    this._beginToken(e ? 6 : 7);
    let n = [];
    for (; ; ) {
      let s = this._cursor.clone(), i = r();
      if (this._cursor = s, i) break;
      e && this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(n.join(""))]), n.length = 0, this._consumeEntity(6), this._beginToken(6)) : n.push(this._readChar());
    }
    this._endToken([this._processCarriageReturns(n.join(""))]);
  }
  _consumeComment(e) {
    this._beginToken(10, e), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(11), this._requireStr("-->"), this._endToken([]);
  }
  _consumeBogusComment(e) {
    this._beginToken(10, e), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(11), this._cursor.advance(), this._endToken([]);
  }
  _consumeCdata(e) {
    this._beginToken(12, e), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(13), this._requireStr("]]>"), this._endToken([]);
  }
  _consumeDocType(e) {
    this._beginToken(18, e), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(19), this._cursor.advance(), this._endToken([]);
  }
  _consumePrefixAndName() {
    let e = this._cursor.clone(), r = "";
    for (; this._cursor.peek() !== 58 && !Eo(this._cursor.peek()); ) this._cursor.advance();
    let n;
    this._cursor.peek() === 58 ? (r = this._cursor.getChars(e), this._cursor.advance(), n = this._cursor.clone()) : n = e, this._requireCharCodeUntilFn(Us, r === "" ? 0 : 1);
    let s = this._cursor.getChars(n);
    return [r, s];
  }
  _consumeTagOpen(e) {
    let r, n, s, i = [];
    try {
      if (!lt(this._cursor.peek())) throw this._createError(Ue(this._cursor.peek()), this._cursor.getSpan(e));
      for (s = this._consumeTagOpenStart(e), n = s.parts[0], r = s.parts[1], this._attemptCharCodeUntilFn(b); this._cursor.peek() !== 47 && this._cursor.peek() !== 62 && this._cursor.peek() !== 60 && this._cursor.peek() !== 0; ) {
        let [o, u] = this._consumeAttributeName();
        if (this._attemptCharCodeUntilFn(b), this._attemptCharCode(61)) {
          this._attemptCharCodeUntilFn(b);
          let p = this._consumeAttributeValue();
          i.push({ prefix: o, name: u, value: p });
        } else i.push({ prefix: o, name: u });
        this._attemptCharCodeUntilFn(b);
      }
      this._consumeTagOpenEnd();
    } catch (o) {
      if (o instanceof Ct) {
        s ? s.type = 4 : (this._beginToken(5, e), this._endToken(["<"]));
        return;
      }
      throw o;
    }
    if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === 2) return;
    let a = this._getTagContentType(r, n, this._fullNameStack.length > 0, i);
    this._handleFullNameStackForTagOpen(n, r), a === P.RAW_TEXT ? this._consumeRawTextWithTagClose(n, r, false) : a === P.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(n, r, true);
  }
  _consumeRawTextWithTagClose(e, r, n) {
    this._consumeRawText(n, () => !this._attemptCharCode(60) || !this._attemptCharCode(47) || (this._attemptCharCodeUntilFn(b), !this._attemptStrCaseInsensitive(e ? `${e}:${r}` : r)) ? false : (this._attemptCharCodeUntilFn(b), this._attemptCharCode(62))), this._beginToken(3), this._requireCharCodeUntilFn((s) => s === 62, 3), this._cursor.advance(), this._endToken([e, r]), this._handleFullNameStackForTagClose(e, r);
  }
  _consumeTagOpenStart(e) {
    this._beginToken(0, e);
    let r = this._consumePrefixAndName();
    return this._endToken(r);
  }
  _consumeAttributeName() {
    let e = this._cursor.peek();
    if (e === 39 || e === 34) throw this._createError(Ue(e), this._cursor.getSpan());
    this._beginToken(14);
    let r = this._consumePrefixAndName();
    return this._endToken(r), r;
  }
  _consumeAttributeValue() {
    let e;
    if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
      let r = this._cursor.peek();
      this._consumeQuote(r);
      let n = () => this._cursor.peek() === r;
      e = this._consumeWithInterpolation(16, 17, n, n), this._consumeQuote(r);
    } else {
      let r = () => Us(this._cursor.peek());
      e = this._consumeWithInterpolation(16, 17, r, r);
    }
    return e;
  }
  _consumeQuote(e) {
    this._beginToken(15), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]);
  }
  _consumeTagOpenEnd() {
    let e = this._attemptCharCode(47) ? 2 : 1;
    this._beginToken(e), this._requireCharCode(62), this._endToken([]);
  }
  _consumeTagClose(e) {
    if (this._beginToken(3, e), this._attemptCharCodeUntilFn(b), this._allowHtmComponentClosingTags && this._attemptCharCode(47)) this._attemptCharCodeUntilFn(b), this._requireCharCode(62), this._endToken([]);
    else {
      let [r, n] = this._consumePrefixAndName();
      this._attemptCharCodeUntilFn(b), this._requireCharCode(62), this._endToken([r, n]), this._handleFullNameStackForTagClose(r, n);
    }
  }
  _consumeExpansionFormStart() {
    this._beginToken(20), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(20), this._beginToken(7);
    let e = this._readUntil(44), r = this._processCarriageReturns(e);
    if (this._i18nNormalizeLineEndingsInICUs) this._endToken([r]);
    else {
      let s = this._endToken([e]);
      r !== e && this.nonNormalizedIcuExpressions.push(s);
    }
    this._requireCharCode(44), this._attemptCharCodeUntilFn(b), this._beginToken(7);
    let n = this._readUntil(44);
    this._endToken([n]), this._requireCharCode(44), this._attemptCharCodeUntilFn(b);
  }
  _consumeExpansionCaseStart() {
    this._beginToken(21);
    let e = this._readUntil(123).trim();
    this._endToken([e]), this._attemptCharCodeUntilFn(b), this._beginToken(22), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(b), this._expansionCaseStack.push(22);
  }
  _consumeExpansionCaseEnd() {
    this._beginToken(23), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(b), this._expansionCaseStack.pop();
  }
  _consumeExpansionFormEnd() {
    this._beginToken(24), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
  }
  _consumeWithInterpolation(e, r, n, s) {
    this._beginToken(e);
    let i = [];
    for (; !n(); ) {
      let o = this._cursor.clone();
      this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (this._endToken([this._processCarriageReturns(i.join(""))], o), i.length = 0, this._consumeInterpolation(r, o, s), this._beginToken(e)) : this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(i.join(""))]), i.length = 0, this._consumeEntity(e), this._beginToken(e)) : i.push(this._readChar());
    }
    this._inInterpolation = false;
    let a = this._processCarriageReturns(i.join(""));
    return this._endToken([a]), a;
  }
  _consumeInterpolation(e, r, n) {
    let s = [];
    this._beginToken(e, r), s.push(this._interpolationConfig.start);
    let i = this._cursor.clone(), a = null, o = false;
    for (; this._cursor.peek() !== 0 && (n === null || !n()); ) {
      let u = this._cursor.clone();
      if (this._isTagStart()) {
        this._cursor = u, s.push(this._getProcessedChars(i, u)), this._endToken(s);
        return;
      }
      if (a === null) if (this._attemptStr(this._interpolationConfig.end)) {
        s.push(this._getProcessedChars(i, u)), s.push(this._interpolationConfig.end), this._endToken(s);
        return;
      } else this._attemptStr("//") && (o = true);
      let p = this._cursor.peek();
      this._cursor.advance(), p === 92 ? this._cursor.advance() : p === a ? a = null : !o && a === null && $t(p) && (a = p);
    }
    s.push(this._getProcessedChars(i, this._cursor)), this._endToken(s);
  }
  _getProcessedChars(e, r) {
    return this._processCarriageReturns(r.getChars(e));
  }
  _isTextEnd() {
    return !!(this._isTagStart() || this._cursor.peek() === 0 || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === 125 && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._cursor.peek() === 64 || this._cursor.peek() === 125));
  }
  _isTagStart() {
    if (this._cursor.peek() === 60) {
      let e = this._cursor.clone();
      e.advance();
      let r = e.peek();
      if (97 <= r && r <= 122 || 65 <= r && r <= 90 || r === 47 || r === 33) return true;
    }
    return false;
  }
  _isBlockStart() {
    if (this._tokenizeBlocks && this._cursor.peek() === 64) {
      let e = this._cursor.clone();
      if (e.advance(), zs(e.peek())) return true;
    }
    return false;
  }
  _readUntil(e) {
    let r = this._cursor.clone();
    return this._attemptUntilChar(e), this._cursor.getChars(r);
  }
  _isInExpansion() {
    return this._isInExpansionCase() || this._isInExpansionForm();
  }
  _isInExpansionCase() {
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 22;
  }
  _isInExpansionForm() {
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 20;
  }
  isExpansionFormStart() {
    if (this._cursor.peek() !== 123) return false;
    if (this._interpolationConfig) {
      let e = this._cursor.clone(), r = this._attemptStr(this._interpolationConfig.start);
      return this._cursor = e, !r;
    }
    return true;
  }
  _handleFullNameStackForTagOpen(e, r) {
    let n = qe(e, r);
    (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === n) && this._fullNameStack.push(n);
  }
  _handleFullNameStackForTagClose(e, r) {
    let n = qe(e, r);
    this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === n && this._fullNameStack.pop();
  }
};
function b(t7) {
  return !ut(t7) || t7 === 0;
}
function Us(t7) {
  return ut(t7) || t7 === 62 || t7 === 60 || t7 === 47 || t7 === 39 || t7 === 34 || t7 === 61 || t7 === 0;
}
function Eo(t7) {
  return (t7 < 97 || 122 < t7) && (t7 < 65 || 90 < t7) && (t7 < 48 || t7 > 57);
}
function Ao(t7) {
  return t7 === 59 || t7 === 0 || !vs(t7);
}
function Do(t7) {
  return t7 === 59 || t7 === 0 || !lt(t7);
}
function vo(t7) {
  return t7 !== 125;
}
function yo(t7, e) {
  return Ws(t7) === Ws(e);
}
function Ws(t7) {
  return t7 >= 97 && t7 <= 122 ? t7 - 97 + 65 : t7;
}
function zs(t7) {
  return lt(t7) || It(t7) || t7 === 95;
}
function Gs(t7) {
  return t7 !== 59 && b(t7);
}
function wo(t7) {
  let e = [], r;
  for (let n = 0; n < t7.length; n++) {
    let s = t7[n];
    r && r.type === 5 && s.type === 5 || r && r.type === 16 && s.type === 16 ? (r.parts[0] += s.parts[0], r.sourceSpan.end = s.sourceSpan.end) : (r = s, e.push(r));
  }
  return e;
}
var rr = class t3 {
  constructor(e, r) {
    if (e instanceof t3) {
      this.file = e.file, this.input = e.input, this.end = e.end;
      let n = e.state;
      this.state = { peek: n.peek, offset: n.offset, line: n.line, column: n.column };
    } else {
      if (!r) throw new Error("Programming error: the range argument must be provided with a file argument.");
      this.file = e, this.input = e.content, this.end = r.endPos, this.state = { peek: -1, offset: r.startPos, line: r.startLine, column: r.startCol };
    }
  }
  clone() {
    return new t3(this);
  }
  peek() {
    return this.state.peek;
  }
  charsLeft() {
    return this.end - this.state.offset;
  }
  diff(e) {
    return this.state.offset - e.state.offset;
  }
  advance() {
    this.advanceState(this.state);
  }
  init() {
    this.updatePeek(this.state);
  }
  getSpan(e, r) {
    e = e || this;
    let n = e;
    if (r) for (; this.diff(e) > 0 && r.indexOf(e.peek()) !== -1; ) n === e && (e = e.clone()), e.advance();
    let s = this.locationFromCursor(e), i = this.locationFromCursor(this), a = n !== e ? this.locationFromCursor(n) : s;
    return new h(s, i, a);
  }
  getChars(e) {
    return this.input.substring(e.state.offset, this.state.offset);
  }
  charAt(e) {
    return this.input.charCodeAt(e);
  }
  advanceState(e) {
    if (e.offset >= this.end) throw this.state = e, new St('Unexpected character "EOF"', this);
    let r = this.charAt(e.offset);
    r === 10 ? (e.line++, e.column = 0) : Rt(r) || e.column++, e.offset++, this.updatePeek(e);
  }
  updatePeek(e) {
    e.peek = e.offset >= this.end ? 0 : this.charAt(e.offset);
  }
  locationFromCursor(e) {
    return new ie(e.file, e.state.offset, e.state.line, e.state.column);
  }
};
var Wr = class t4 extends rr {
  constructor(e, r) {
    e instanceof t4 ? (super(e), this.internalState = { ...e.internalState }) : (super(e, r), this.internalState = this.state);
  }
  advance() {
    this.state = this.internalState, super.advance(), this.processEscapeSequence();
  }
  init() {
    super.init(), this.processEscapeSequence();
  }
  clone() {
    return new t4(this);
  }
  getChars(e) {
    let r = e.clone(), n = "";
    for (; r.internalState.offset < this.internalState.offset; ) n += String.fromCodePoint(r.peek()), r.advance();
    return n;
  }
  processEscapeSequence() {
    let e = () => this.internalState.peek;
    if (e() === 92) if (this.internalState = { ...this.state }, this.advanceState(this.internalState), e() === 110) this.state.peek = 10;
    else if (e() === 114) this.state.peek = 13;
    else if (e() === 118) this.state.peek = 11;
    else if (e() === 116) this.state.peek = 9;
    else if (e() === 98) this.state.peek = 8;
    else if (e() === 102) this.state.peek = 12;
    else if (e() === 117) if (this.advanceState(this.internalState), e() === 123) {
      this.advanceState(this.internalState);
      let r = this.clone(), n = 0;
      for (; e() !== 125; ) this.advanceState(this.internalState), n++;
      this.state.peek = this.decodeHexDigits(r, n);
    } else {
      let r = this.clone();
      this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 4);
    }
    else if (e() === 120) {
      this.advanceState(this.internalState);
      let r = this.clone();
      this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 2);
    } else if (kr(e())) {
      let r = "", n = 0, s = this.clone();
      for (; kr(e()) && n < 3; ) s = this.clone(), r += String.fromCodePoint(e()), this.advanceState(this.internalState), n++;
      this.state.peek = parseInt(r, 8), this.internalState = s.internalState;
    } else Rt(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
  }
  decodeHexDigits(e, r) {
    let n = this.input.slice(e.internalState.offset, e.internalState.offset + r), s = parseInt(n, 16);
    if (isNaN(s)) throw e.state = e.internalState, new St("Invalid hexadecimal escape sequence", e);
    return s;
  }
};
var St = class {
  constructor(e, r) {
    this.msg = e, this.cursor = r;
  }
};
var L = class t5 extends Oe {
  static create(e, r, n) {
    return new t5(e, r, n);
  }
  constructor(e, r, n) {
    super(r, n), this.elementName = e;
  }
};
var Yr = class {
  constructor(e, r) {
    this.rootNodes = e, this.errors = r;
  }
};
var nr = class {
  constructor(e) {
    this.getTagDefinition = e;
  }
  parse(e, r, n, s = false, i) {
    let a = (D) => (I2, ...F) => D(I2.toLowerCase(), ...F), o = s ? this.getTagDefinition : a(this.getTagDefinition), u = (D) => o(D).getContentType(), p = s ? i : a(i), f = Qs(e, r, i ? (D, I2, F, c) => {
      let g = p(D, I2, F, c);
      return g !== void 0 ? g : u(D);
    } : u, n), d = n && n.canSelfClose || false, C = n && n.allowHtmComponentClosingTags || false, A2 = new jr(f.tokens, o, d, C, s);
    return A2.build(), new Yr(A2.rootNodes, f.errors.concat(A2.errors));
  }
};
var jr = class t6 {
  constructor(e, r, n, s, i) {
    this.tokens = e, this.getTagDefinition = r, this.canSelfClose = n, this.allowHtmComponentClosingTags = s, this.isTagNameCaseSensitive = i, this._index = -1, this._containerStack = [], this.rootNodes = [], this.errors = [], this._advance();
  }
  build() {
    for (; this._peek.type !== 34; ) this._peek.type === 0 || this._peek.type === 4 ? this._consumeStartTag(this._advance()) : this._peek.type === 3 ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === 12 ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === 10 ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === 5 || this._peek.type === 7 || this._peek.type === 6 ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === 20 ? this._consumeExpansion(this._advance()) : this._peek.type === 25 ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === 27 ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === 29 ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === 30 ? (this._closeVoidElement(), this._consumeLet(this._advance())) : this._peek.type === 18 ? this._consumeDocType(this._advance()) : this._peek.type === 33 ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._advance();
    for (let e of this._containerStack) e instanceof te && this.errors.push(L.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`));
  }
  _advance() {
    let e = this._peek;
    return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], e;
  }
  _advanceIf(e) {
    return this._peek.type === e ? this._advance() : null;
  }
  _consumeCdata(e) {
    let r = this._advance(), n = this._getText(r), s = this._advanceIf(13);
    this._addToParent(new Wt(n, new h(e.sourceSpan.start, (s || r).sourceSpan.end), [r]));
  }
  _consumeComment(e) {
    let r = this._advanceIf(7), n = this._advanceIf(11), s = r != null ? r.parts[0].trim() : null, i = n == null ? e.sourceSpan : new h(e.sourceSpan.start, n.sourceSpan.end, e.sourceSpan.fullStart);
    this._addToParent(new jt(s, i));
  }
  _consumeDocType(e) {
    let r = this._advanceIf(7), n = this._advanceIf(19), s = r != null ? r.parts[0].trim() : null, i = new h(e.sourceSpan.start, (n || r || e).sourceSpan.end);
    this._addToParent(new Kt(s, i));
  }
  _consumeExpansion(e) {
    let r = this._advance(), n = this._advance(), s = [];
    for (; this._peek.type === 21; ) {
      let a = this._parseExpansionCase();
      if (!a) return;
      s.push(a);
    }
    if (this._peek.type !== 24) {
      this.errors.push(L.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
      return;
    }
    let i = new h(e.sourceSpan.start, this._peek.sourceSpan.end, e.sourceSpan.fullStart);
    this._addToParent(new zt(r.parts[0], n.parts[0], s, i, r.sourceSpan)), this._advance();
  }
  _parseExpansionCase() {
    let e = this._advance();
    if (this._peek.type !== 22) return this.errors.push(L.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
    let r = this._advance(), n = this._collectExpansionExpTokens(r);
    if (!n) return null;
    let s = this._advance();
    n.push({ type: 34, parts: [], sourceSpan: s.sourceSpan });
    let i = new t6(n, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
    if (i.build(), i.errors.length > 0) return this.errors = this.errors.concat(i.errors), null;
    let a = new h(e.sourceSpan.start, s.sourceSpan.end, e.sourceSpan.fullStart), o = new h(r.sourceSpan.start, s.sourceSpan.end, r.sourceSpan.fullStart);
    return new Gt(e.parts[0], i.rootNodes, a, e.sourceSpan, o);
  }
  _collectExpansionExpTokens(e) {
    let r = [], n = [22];
    for (; ; ) {
      if ((this._peek.type === 20 || this._peek.type === 22) && n.push(this._peek.type), this._peek.type === 23) if (Xs(n, 22)) {
        if (n.pop(), n.length === 0) return r;
      } else return this.errors.push(L.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === 24) if (Xs(n, 20)) n.pop();
      else return this.errors.push(L.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === 34) return this.errors.push(L.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      r.push(this._advance());
    }
  }
  _getText(e) {
    let r = e.parts[0];
    if (r.length > 0 && r[0] == `
`) {
      let n = this._getClosestParentElement();
      n != null && n.children.length == 0 && this.getTagDefinition(n.name).ignoreFirstLf && (r = r.substring(1));
    }
    return r;
  }
  _consumeText(e) {
    let r = [e], n = e.sourceSpan, s = e.parts[0];
    if (s.length > 0 && s[0] === `
`) {
      let i = this._getContainer();
      i != null && i.children.length === 0 && this.getTagDefinition(i.name).ignoreFirstLf && (s = s.substring(1), r[0] = { type: e.type, sourceSpan: e.sourceSpan, parts: [s] });
    }
    for (; this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9; ) e = this._advance(), r.push(e), e.type === 8 ? s += e.parts.join("").replace(/&([^;]+);/g, Js) : e.type === 9 ? s += e.parts[0] : s += e.parts.join("");
    if (s.length > 0) {
      let i = e.sourceSpan;
      this._addToParent(new Ut(s, new h(n.start, i.end, n.fullStart, n.details), r));
    }
  }
  _closeVoidElement() {
    let e = this._getContainer();
    e instanceof Y && this.getTagDefinition(e.name).isVoid && this._containerStack.pop();
  }
  _consumeStartTag(e) {
    let [r, n] = e.parts, s = [];
    for (; this._peek.type === 14; ) s.push(this._consumeAttr(this._advance()));
    let i = this._getElementFullName(r, n, this._getClosestParentElement()), a = false;
    if (this._peek.type === 2) {
      this._advance(), a = true;
      let C = this.getTagDefinition(i);
      this.canSelfClose || C.canSelfClose || Me(i) !== null || C.isVoid || this.errors.push(L.create(i, e.sourceSpan, `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`));
    } else this._peek.type === 1 && (this._advance(), a = false);
    let o = this._peek.sourceSpan.fullStart, u = new h(e.sourceSpan.start, o, e.sourceSpan.fullStart), p = new h(e.sourceSpan.start, o, e.sourceSpan.fullStart), l = new h(e.sourceSpan.start.moveBy(1), e.sourceSpan.end), f = new Y(i, s, [], u, p, void 0, l), d = this._getContainer();
    this._pushContainer(f, d instanceof Y && this.getTagDefinition(d.name).isClosedByChild(f.name)), a ? this._popContainer(i, Y, u) : e.type === 4 && (this._popContainer(i, Y, null), this.errors.push(L.create(i, u, `Opening tag "${i}" not terminated.`)));
  }
  _pushContainer(e, r) {
    r && this._containerStack.pop(), this._addToParent(e), this._containerStack.push(e);
  }
  _consumeEndTag(e) {
    let r = this.allowHtmComponentClosingTags && e.parts.length === 0 ? null : this._getElementFullName(e.parts[0], e.parts[1], this._getClosestParentElement());
    if (r && this.getTagDefinition(r).isVoid) this.errors.push(L.create(r, e.sourceSpan, `Void elements do not have end tags "${e.parts[1]}"`));
    else if (!this._popContainer(r, Y, e.sourceSpan)) {
      let n = `Unexpected closing tag "${r}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
      this.errors.push(L.create(r, e.sourceSpan, n));
    }
  }
  _popContainer(e, r, n) {
    let s = false;
    for (let i = this._containerStack.length - 1; i >= 0; i--) {
      let a = this._containerStack[i];
      if (Me(a.name) ? a.name === e : (e == null || a.name.toLowerCase() === e.toLowerCase()) && a instanceof r) return a.endSourceSpan = n, a.sourceSpan.end = n !== null ? n.end : a.sourceSpan.end, this._containerStack.splice(i, this._containerStack.length - i), !s;
      (a instanceof te || a instanceof Y && !this.getTagDefinition(a.name).closedByParent) && (s = true);
    }
    return false;
  }
  _consumeAttr(e) {
    let r = qe(e.parts[0], e.parts[1]), n = e.sourceSpan.end, s;
    this._peek.type === 15 && (s = this._advance());
    let i = "", a = [], o, u;
    if (this._peek.type === 16) for (o = this._peek.sourceSpan, u = this._peek.sourceSpan.end; this._peek.type === 16 || this._peek.type === 17 || this._peek.type === 9; ) {
      let f = this._advance();
      a.push(f), f.type === 17 ? i += f.parts.join("").replace(/&([^;]+);/g, Js) : f.type === 9 ? i += f.parts[0] : i += f.parts.join(""), u = n = f.sourceSpan.end;
    }
    this._peek.type === 15 && (u = n = this._advance().sourceSpan.end);
    let l = o && u && new h((s == null ? void 0 : s.sourceSpan.start) ?? o.start, u, (s == null ? void 0 : s.sourceSpan.fullStart) ?? o.fullStart);
    return new Yt(r, i, new h(e.sourceSpan.start, n, e.sourceSpan.fullStart), e.sourceSpan, l, a.length > 0 ? a : void 0, void 0);
  }
  _consumeBlockOpen(e) {
    let r = [];
    for (; this._peek.type === 28; ) {
      let o = this._advance();
      r.push(new ht(o.parts[0], o.sourceSpan));
    }
    this._peek.type === 26 && this._advance();
    let n = this._peek.sourceSpan.fullStart, s = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart), i = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart), a = new te(e.parts[0], r, [], s, e.sourceSpan, i);
    this._pushContainer(a, false);
  }
  _consumeBlockClose(e) {
    this._popContainer(null, te, e.sourceSpan) || this.errors.push(L.create(null, e.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'));
  }
  _consumeIncompleteBlock(e) {
    let r = [];
    for (; this._peek.type === 28; ) {
      let o = this._advance();
      r.push(new ht(o.parts[0], o.sourceSpan));
    }
    let n = this._peek.sourceSpan.fullStart, s = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart), i = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart), a = new te(e.parts[0], r, [], s, e.sourceSpan, i);
    this._pushContainer(a, false), this._popContainer(null, te, null), this.errors.push(L.create(e.parts[0], s, `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
  }
  _consumeLet(e) {
    let r = e.parts[0], n, s;
    if (this._peek.type !== 31) {
      this.errors.push(L.create(e.parts[0], e.sourceSpan, `Invalid @let declaration "${r}". Declaration must have a value.`));
      return;
    } else n = this._advance();
    if (this._peek.type !== 32) {
      this.errors.push(L.create(e.parts[0], e.sourceSpan, `Unterminated @let declaration "${r}". Declaration must be terminated with a semicolon.`));
      return;
    } else s = this._advance();
    let i = s.sourceSpan.fullStart, a = new h(e.sourceSpan.start, i, e.sourceSpan.fullStart), o = e.sourceSpan.toString().lastIndexOf(r), u = e.sourceSpan.start.moveBy(o), p = new h(u, e.sourceSpan.end), l = new ft(r, n.parts[0], a, p, n.sourceSpan);
    this._addToParent(l);
  }
  _consumeIncompleteLet(e) {
    let r = e.parts[0] ?? "", n = r ? ` "${r}"` : "";
    if (r.length > 0) {
      let s = e.sourceSpan.toString().lastIndexOf(r), i = e.sourceSpan.start.moveBy(s), a = new h(i, e.sourceSpan.end), o = new h(e.sourceSpan.start, e.sourceSpan.start.moveBy(0)), u = new ft(r, "", e.sourceSpan, a, o);
      this._addToParent(u);
    }
    this.errors.push(L.create(e.parts[0], e.sourceSpan, `Incomplete @let declaration${n}. @let declarations must be written as \`@let <name> = <value>;\``));
  }
  _getContainer() {
    return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
  }
  _getClosestParentElement() {
    for (let e = this._containerStack.length - 1; e > -1; e--) if (this._containerStack[e] instanceof Y) return this._containerStack[e];
    return null;
  }
  _addToParent(e) {
    let r = this._getContainer();
    r === null ? this.rootNodes.push(e) : r.children.push(e);
  }
  _getElementFullName(e, r, n) {
    if (e === "" && (e = this.getTagDefinition(r).implicitNamespacePrefix || "", e === "" && n != null)) {
      let s = ct(n.name)[1];
      this.getTagDefinition(s).preventNamespaceInheritance || (e = Me(n.name));
    }
    return qe(e, r);
  }
};
function Xs(t7, e) {
  return t7.length > 0 && t7[t7.length - 1] === e;
}
function Js(t7, e) {
  return Ve[e] !== void 0 ? Ve[e] || t7 : /^#x[a-f0-9]+$/i.test(e) ? String.fromCodePoint(parseInt(e.slice(2), 16)) : /^#\d+$/.test(e) ? String.fromCodePoint(parseInt(e.slice(1), 10)) : t7;
}
var sr = class extends nr {
  constructor() {
    super(He);
  }
  parse(e, r, n, s = false, i) {
    return super.parse(e, r, n, s, i);
  }
};
var Kr = null;
var bo = () => (Kr || (Kr = new sr()), Kr);
function Qr(t7, e = {}) {
  let { canSelfClose: r = false, allowHtmComponentClosingTags: n = false, isTagNameCaseSensitive: s = false, getTagContentType: i, tokenizeAngularBlocks: a = false, tokenizeAngularLetDeclaration: o = false } = e;
  return bo().parse(t7, "angular-html-parser", { tokenizeExpansionForms: a, interpolationConfig: void 0, canSelfClose: r, allowHtmComponentClosingTags: n, tokenizeBlocks: a, tokenizeLet: o }, s, i);
}
function To(t7, e) {
  let r = new SyntaxError(t7 + " (" + e.loc.start.line + ":" + e.loc.start.column + ")");
  return Object.assign(r, e);
}
var Zs = To;
var _t = 3;
function xo(t7) {
  let e = t7.slice(0, _t);
  if (e !== "---" && e !== "+++") return;
  let r = t7.indexOf(`
`, _t);
  if (r === -1) return;
  let n = t7.slice(_t, r).trim(), s = t7.indexOf(`
${e}`, r), i = n;
  if (i || (i = e === "+++" ? "toml" : "yaml"), s === -1 && e === "---" && i === "yaml" && (s = t7.indexOf(`
...`, r)), s === -1) return;
  let a = s + 1 + _t, o = t7.charAt(a + 1);
  if (!/\s?/u.test(o)) return;
  let u = t7.slice(0, a);
  return { type: "front-matter", language: i, explicitLanguage: n, value: t7.slice(r + 1, s), startDelimiter: e, endDelimiter: u.slice(-_t), raw: u };
}
function ko(t7) {
  let e = xo(t7);
  if (!e) return { content: t7 };
  let { raw: r } = e;
  return { frontMatter: e, content: w(false, r, /[^\n]/gu, " ") + t7.slice(r.length) };
}
var ei = ko;
var ir = { attrs: true, children: true, cases: true, expression: true };
var ti = /* @__PURE__ */ new Set(["parent"]);
var le;
var Xr;
var Jr;
var ze = class ze2 {
  constructor(e = {}) {
    Et(this, le);
    lr(this, "type");
    lr(this, "parent");
    for (let r of /* @__PURE__ */ new Set([...ti, ...Object.keys(e)])) this.setProperty(r, e[r]);
  }
  setProperty(e, r) {
    if (this[e] !== r) {
      if (e in ir && (r = r.map((n) => this.createChild(n))), !ti.has(e)) {
        this[e] = r;
        return;
      }
      Object.defineProperty(this, e, { value: r, enumerable: false, configurable: true });
    }
  }
  map(e) {
    let r;
    for (let n in ir) {
      let s = this[n];
      if (s) {
        let i = Bo(s, (a) => a.map(e));
        r !== s && (r || (r = new ze2({ parent: this.parent })), r.setProperty(n, i));
      }
    }
    if (r) for (let n in this) n in ir || (r[n] = this[n]);
    return e(r || this);
  }
  walk(e) {
    for (let r in ir) {
      let n = this[r];
      if (n) for (let s = 0; s < n.length; s++) n[s].walk(e);
    }
    e(this);
  }
  createChild(e) {
    let r = e instanceof ze2 ? e.clone() : new ze2(e);
    return r.setProperty("parent", this), r;
  }
  insertChildBefore(e, r) {
    let n = this.$children;
    n.splice(n.indexOf(e), 0, this.createChild(r));
  }
  removeChild(e) {
    let r = this.$children;
    r.splice(r.indexOf(e), 1);
  }
  replaceChild(e, r) {
    let n = this.$children;
    n[n.indexOf(e)] = this.createChild(r);
  }
  clone() {
    return new ze2(this);
  }
  get $children() {
    return this[R(this, le, Xr)];
  }
  set $children(e) {
    this[R(this, le, Xr)] = e;
  }
  get firstChild() {
    var e;
    return (e = this.$children) == null ? void 0 : e[0];
  }
  get lastChild() {
    return K(true, this.$children, -1);
  }
  get prev() {
    let e = R(this, le, Jr);
    return e[e.indexOf(this) - 1];
  }
  get next() {
    let e = R(this, le, Jr);
    return e[e.indexOf(this) + 1];
  }
  get rawName() {
    return this.hasExplicitNamespace ? this.fullName : this.name;
  }
  get fullName() {
    return this.namespace ? this.namespace + ":" + this.name : this.name;
  }
  get attrMap() {
    return Object.fromEntries(this.attrs.map((e) => [e.fullName, e.value]));
  }
};
le = /* @__PURE__ */ new WeakSet(), Xr = function() {
  return this.type === "angularIcuCase" ? "expression" : this.type === "angularIcuExpression" ? "cases" : "children";
}, Jr = function() {
  var e;
  return ((e = this.parent) == null ? void 0 : e.$children) ?? [];
};
var ar = ze;
function Bo(t7, e) {
  let r = t7.map(e);
  return r.some((n, s) => n !== t7[s]) ? r : t7;
}
var Lo = [{ regex: /^(\[if([^\]]*)\]>)(.*?)<!\s*\[endif\]$/su, parse: Fo }, { regex: /^\[if([^\]]*)\]><!$/u, parse: No }, { regex: /^<!\s*\[endif\]$/u, parse: Po }];
function ri(t7, e) {
  if (t7.value) for (let { regex: r, parse: n } of Lo) {
    let s = t7.value.match(r);
    if (s) return n(t7, e, s);
  }
  return null;
}
function Fo(t7, e, r) {
  let [, n, s, i] = r, a = 4 + n.length, o = t7.sourceSpan.start.moveBy(a), u = o.moveBy(i.length), [p, l] = (() => {
    try {
      return [true, e(i, o).children];
    } catch {
      return [false, [{ type: "text", value: i, sourceSpan: new h(o, u) }]];
    }
  })();
  return { type: "ieConditionalComment", complete: p, children: l, condition: w(false, s.trim(), /\s+/gu, " "), sourceSpan: t7.sourceSpan, startSourceSpan: new h(t7.sourceSpan.start, o), endSourceSpan: new h(u, t7.sourceSpan.end) };
}
function No(t7, e, r) {
  let [, n] = r;
  return { type: "ieConditionalStartComment", condition: w(false, n.trim(), /\s+/gu, " "), sourceSpan: t7.sourceSpan };
}
function Po(t7) {
  return { type: "ieConditionalEndComment", sourceSpan: t7.sourceSpan };
}
var or = /* @__PURE__ */ new Map([["*", /* @__PURE__ */ new Set(["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inert", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "popover", "slot", "spellcheck", "style", "tabindex", "title", "translate", "writingsuggestions"])], ["a", /* @__PURE__ */ new Set(["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"])], ["applet", /* @__PURE__ */ new Set(["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"])], ["area", /* @__PURE__ */ new Set(["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"])], ["audio", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"])], ["base", /* @__PURE__ */ new Set(["href", "target"])], ["basefont", /* @__PURE__ */ new Set(["color", "face", "size"])], ["blockquote", /* @__PURE__ */ new Set(["cite"])], ["body", /* @__PURE__ */ new Set(["alink", "background", "bgcolor", "link", "text", "vlink"])], ["br", /* @__PURE__ */ new Set(["clear"])], ["button", /* @__PURE__ */ new Set(["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "popovertarget", "popovertargetaction", "type", "value"])], ["canvas", /* @__PURE__ */ new Set(["height", "width"])], ["caption", /* @__PURE__ */ new Set(["align"])], ["col", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["colgroup", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["data", /* @__PURE__ */ new Set(["value"])], ["del", /* @__PURE__ */ new Set(["cite", "datetime"])], ["details", /* @__PURE__ */ new Set(["name", "open"])], ["dialog", /* @__PURE__ */ new Set(["open"])], ["dir", /* @__PURE__ */ new Set(["compact"])], ["div", /* @__PURE__ */ new Set(["align"])], ["dl", /* @__PURE__ */ new Set(["compact"])], ["embed", /* @__PURE__ */ new Set(["height", "src", "type", "width"])], ["fieldset", /* @__PURE__ */ new Set(["disabled", "form", "name"])], ["font", /* @__PURE__ */ new Set(["color", "face", "size"])], ["form", /* @__PURE__ */ new Set(["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"])], ["frame", /* @__PURE__ */ new Set(["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"])], ["frameset", /* @__PURE__ */ new Set(["cols", "rows"])], ["h1", /* @__PURE__ */ new Set(["align"])], ["h2", /* @__PURE__ */ new Set(["align"])], ["h3", /* @__PURE__ */ new Set(["align"])], ["h4", /* @__PURE__ */ new Set(["align"])], ["h5", /* @__PURE__ */ new Set(["align"])], ["h6", /* @__PURE__ */ new Set(["align"])], ["head", /* @__PURE__ */ new Set(["profile"])], ["hr", /* @__PURE__ */ new Set(["align", "noshade", "size", "width"])], ["html", /* @__PURE__ */ new Set(["manifest", "version"])], ["iframe", /* @__PURE__ */ new Set(["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"])], ["img", /* @__PURE__ */ new Set(["align", "alt", "border", "crossorigin", "decoding", "fetchpriority", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"])], ["input", /* @__PURE__ */ new Set(["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "popovertarget", "popovertargetaction", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"])], ["ins", /* @__PURE__ */ new Set(["cite", "datetime"])], ["isindex", /* @__PURE__ */ new Set(["prompt"])], ["label", /* @__PURE__ */ new Set(["for", "form"])], ["legend", /* @__PURE__ */ new Set(["align"])], ["li", /* @__PURE__ */ new Set(["type", "value"])], ["link", /* @__PURE__ */ new Set(["as", "blocking", "charset", "color", "crossorigin", "disabled", "fetchpriority", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"])], ["map", /* @__PURE__ */ new Set(["name"])], ["menu", /* @__PURE__ */ new Set(["compact"])], ["meta", /* @__PURE__ */ new Set(["charset", "content", "http-equiv", "media", "name", "scheme"])], ["meter", /* @__PURE__ */ new Set(["high", "low", "max", "min", "optimum", "value"])], ["object", /* @__PURE__ */ new Set(["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"])], ["ol", /* @__PURE__ */ new Set(["compact", "reversed", "start", "type"])], ["optgroup", /* @__PURE__ */ new Set(["disabled", "label"])], ["option", /* @__PURE__ */ new Set(["disabled", "label", "selected", "value"])], ["output", /* @__PURE__ */ new Set(["for", "form", "name"])], ["p", /* @__PURE__ */ new Set(["align"])], ["param", /* @__PURE__ */ new Set(["name", "type", "value", "valuetype"])], ["pre", /* @__PURE__ */ new Set(["width"])], ["progress", /* @__PURE__ */ new Set(["max", "value"])], ["q", /* @__PURE__ */ new Set(["cite"])], ["script", /* @__PURE__ */ new Set(["async", "blocking", "charset", "crossorigin", "defer", "fetchpriority", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"])], ["select", /* @__PURE__ */ new Set(["autocomplete", "disabled", "form", "multiple", "name", "required", "size"])], ["slot", /* @__PURE__ */ new Set(["name"])], ["source", /* @__PURE__ */ new Set(["height", "media", "sizes", "src", "srcset", "type", "width"])], ["style", /* @__PURE__ */ new Set(["blocking", "media", "type"])], ["table", /* @__PURE__ */ new Set(["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"])], ["tbody", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["td", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["template", /* @__PURE__ */ new Set(["shadowrootclonable", "shadowrootdelegatesfocus", "shadowrootmode"])], ["textarea", /* @__PURE__ */ new Set(["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"])], ["tfoot", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["th", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["thead", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["time", /* @__PURE__ */ new Set(["datetime"])], ["tr", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "valign"])], ["track", /* @__PURE__ */ new Set(["default", "kind", "label", "src", "srclang"])], ["ul", /* @__PURE__ */ new Set(["compact", "type"])], ["video", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"])]]);
var ni = /* @__PURE__ */ new Set(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]);
function Io(t7) {
  if (t7.type === "block") {
    if (t7.name = w(false, t7.name.toLowerCase(), /\s+/gu, " ").trim(), t7.type = "angularControlFlowBlock", !Ie(t7.parameters)) {
      delete t7.parameters;
      return;
    }
    for (let e of t7.parameters) e.type = "angularControlFlowBlockParameter";
    t7.parameters = { type: "angularControlFlowBlockParameters", children: t7.parameters, sourceSpan: new h(t7.parameters[0].sourceSpan.start, K(false, t7.parameters, -1).sourceSpan.end) };
  }
}
function Ro(t7) {
  t7.type === "letDeclaration" && (t7.type = "angularLetDeclaration", t7.id = t7.name, t7.init = { type: "angularLetDeclarationInitializer", sourceSpan: new h(t7.valueSpan.start, t7.valueSpan.end), value: t7.value }, delete t7.name, delete t7.value);
}
function $o(t7) {
  (t7.type === "plural" || t7.type === "select") && (t7.clause = t7.type, t7.type = "angularIcuExpression"), t7.type === "expansionCase" && (t7.type = "angularIcuCase");
}
function ii(t7, e, r) {
  let { name: n, canSelfClose: s = true, normalizeTagName: i = false, normalizeAttributeName: a = false, allowHtmComponentClosingTags: o = false, isTagNameCaseSensitive: u = false, shouldParseAsRawText: p } = e, { rootNodes: l, errors: f } = Qr(t7, { canSelfClose: s, allowHtmComponentClosingTags: o, isTagNameCaseSensitive: u, getTagContentType: p ? (...c) => p(...c) ? P.RAW_TEXT : void 0 : void 0, tokenizeAngularBlocks: n === "angular" ? true : void 0, tokenizeAngularLetDeclaration: n === "angular" ? true : void 0 });
  if (n === "vue") {
    if (l.some((x2) => x2.type === "docType" && x2.value === "html" || x2.type === "element" && x2.name.toLowerCase() === "html")) return ii(t7, oi, r);
    let g, y2 = () => g ?? (g = Qr(t7, { canSelfClose: s, allowHtmComponentClosingTags: o, isTagNameCaseSensitive: u })), q2 = (x2) => y2().rootNodes.find(({ startSourceSpan: U2 }) => U2 && U2.start.offset === x2.startSourceSpan.start.offset) ?? x2;
    for (let [x2, U2] of l.entries()) {
      let { endSourceSpan: tn2, startSourceSpan: ui2 } = U2;
      if (tn2 === null) f = y2().errors, l[x2] = q2(U2);
      else if (Oo(U2, r)) {
        let rn2 = y2().errors.find((nn2) => nn2.span.start.offset > ui2.start.offset && nn2.span.start.offset < tn2.end.offset);
        rn2 && si(rn2), l[x2] = q2(U2);
      }
    }
  }
  f.length > 0 && si(f[0]);
  let d = (c) => {
    let g = c.name.startsWith(":") ? c.name.slice(1).split(":")[0] : null, y2 = c.nameSpan.toString(), q2 = g !== null && y2.startsWith(`${g}:`), x2 = q2 ? y2.slice(g.length + 1) : y2;
    c.name = x2, c.namespace = g, c.hasExplicitNamespace = q2;
  }, C = (c) => {
    switch (c.type) {
      case "element":
        d(c);
        for (let g of c.attrs) d(g), g.valueSpan ? (g.value = g.valueSpan.toString(), /["']/u.test(g.value[0]) && (g.value = g.value.slice(1, -1))) : g.value = null;
        break;
      case "comment":
        c.value = c.sourceSpan.toString().slice(4, -3);
        break;
      case "text":
        c.value = c.sourceSpan.toString();
        break;
    }
  }, A2 = (c, g) => {
    let y2 = c.toLowerCase();
    return g(y2) ? y2 : c;
  }, D = (c) => {
    if (c.type === "element" && (i && (!c.namespace || c.namespace === c.tagDefinition.implicitNamespacePrefix || fe(c)) && (c.name = A2(c.name, (g) => ni.has(g))), a)) for (let g of c.attrs) g.namespace || (g.name = A2(g.name, (y2) => or.has(c.name) && (or.get("*").has(y2) || or.get(c.name).has(y2))));
  }, I2 = (c) => {
    c.sourceSpan && c.endSourceSpan && (c.sourceSpan = new h(c.sourceSpan.start, c.endSourceSpan.end));
  }, F = (c) => {
    if (c.type === "element") {
      let g = He(u ? c.name : c.name.toLowerCase());
      !c.namespace || c.namespace === g.implicitNamespacePrefix || fe(c) ? c.tagDefinition = g : c.tagDefinition = He("");
    }
  };
  return Qt(new class extends mt {
    visitExpansionCase(c, g) {
      n === "angular" && this.visitChildren(g, (y2) => {
        y2(c.expression);
      });
    }
    visit(c) {
      C(c), F(c), D(c), I2(c);
    }
  }(), l), l;
}
function Oo(t7, e) {
  var n;
  if (t7.type !== "element" || t7.name !== "template") return false;
  let r = (n = t7.attrs.find((s) => s.name === "lang")) == null ? void 0 : n.value;
  return !r || Ne(e, { language: r }) === "html";
}
function si(t7) {
  let { msg: e, span: { start: r, end: n } } = t7;
  throw Zs(e, { loc: { start: { line: r.line + 1, column: r.col + 1 }, end: { line: n.line + 1, column: n.col + 1 } }, cause: t7 });
}
function ai(t7, e, r = {}, n = true) {
  let { frontMatter: s, content: i } = n ? ei(t7) : { frontMatter: null, content: t7 }, a = new De(t7, r.filepath), o = new ie(a, 0, 0, 0), u = o.moveBy(t7.length), p = { type: "root", sourceSpan: new h(o, u), children: ii(i, e, r) };
  if (s) {
    let d = new ie(a, 0, 0, 0), C = d.moveBy(s.raw.length);
    s.sourceSpan = new h(d, C), p.children.unshift(s);
  }
  let l = new ar(p), f = (d, C) => {
    let { offset: A2 } = C, D = w(false, t7.slice(0, A2), /[^\n\r]/gu, " "), F = ai(D + d, e, r, false);
    F.sourceSpan = new h(C, K(false, F.children, -1).sourceSpan.end);
    let c = F.children[0];
    return c.length === A2 ? F.children.shift() : (c.sourceSpan = new h(c.sourceSpan.start.moveBy(A2), c.sourceSpan.end), c.value = c.value.slice(A2)), F;
  };
  return l.walk((d) => {
    if (d.type === "comment") {
      let C = ri(d, f);
      C && d.parent.replaceChild(d, C);
    }
    Io(d), Ro(d), $o(d);
  }), l;
}
function ur(t7) {
  return { parse: (e, r) => ai(e, t7, r), hasPragma: fs, astFormat: "html", locStart: J, locEnd: Z };
}
var oi = { name: "html", normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true };
var Mo = ur(oi);
var qo = ur({ name: "angular" });
var Ho = ur({ name: "vue", isTagNameCaseSensitive: true, shouldParseAsRawText(t7, e, r, n) {
  return t7.toLowerCase() !== "html" && !r && (t7 !== "template" || n.some(({ name: s, value: i }) => s === "lang" && i !== "html" && i !== "" && i !== void 0));
} });
var Vo = ur({ name: "lwc", canSelfClose: false });
var Uo = { html: Ts };
var Gh = en;

// ../../node_modules/.pnpm/prettier@3.5.3/node_modules/prettier/standalone.mjs
init_esm();
var Au = Object.create;
var At2 = Object.defineProperty;
var vu = Object.getOwnPropertyDescriptor;
var Bu = Object.getOwnPropertyNames;
var wu = Object.getPrototypeOf;
var _u = Object.prototype.hasOwnProperty;
var dr2 = (e) => {
  throw TypeError(e);
};
var pr2 = (e, t7) => () => (t7 || e((t7 = { exports: {} }).exports, t7), t7.exports);
var vt2 = (e, t7) => {
  for (var r in t7) At2(e, r, { get: t7[r], enumerable: true });
};
var xu = (e, t7, r, n) => {
  if (t7 && typeof t7 == "object" || typeof t7 == "function") for (let u of Bu(t7)) !_u.call(e, u) && u !== r && At2(e, u, { get: () => t7[u], enumerable: !(n = vu(t7, u)) || n.enumerable });
  return e;
};
var Me2 = (e, t7, r) => (r = e != null ? Au(wu(e)) : {}, xu(t7 || !e || !e.__esModule ? At2(r, "default", { value: e, enumerable: true }) : r, e));
var bu = (e, t7, r) => t7.has(e) || dr2("Cannot " + r);
var Fr2 = (e, t7, r) => t7.has(e) ? dr2("Cannot add the same private member more than once") : t7 instanceof WeakSet ? t7.add(e) : t7.set(e, r);
var pe2 = (e, t7, r) => (bu(e, t7, "access private method"), r);
var ot2 = pr2((Da2, mn2) => {
  "use strict";
  var Fn2 = new Proxy(String, { get: () => Fn2 });
  mn2.exports = Fn2;
});
var $n2 = pr2((ur2) => {
  "use strict";
  Object.defineProperty(ur2, "__esModule", { value: true });
  function wi2() {
    return new Proxy({}, { get: () => (e) => e });
  }
  var Wn2 = /\r\n|[\n\r\u2028\u2029]/;
  function _i2(e, t7, r) {
    let n = Object.assign({ column: 0, line: -1 }, e.start), u = Object.assign({}, n, e.end), { linesAbove: i = 2, linesBelow: o = 3 } = r || {}, s = n.line, a = n.column, D = u.line, l = u.column, p = Math.max(s - (i + 1), 0), f = Math.min(t7.length, D + o);
    s === -1 && (p = 0), D === -1 && (f = t7.length);
    let d = D - s, c = {};
    if (d) for (let F = 0; F <= d; F++) {
      let m2 = F + s;
      if (!a) c[m2] = true;
      else if (F === 0) {
        let h2 = t7[m2 - 1].length;
        c[m2] = [a, h2 - a + 1];
      } else if (F === d) c[m2] = [0, l];
      else {
        let h2 = t7[m2 - F].length;
        c[m2] = [0, h2];
      }
    }
    else a === l ? a ? c[s] = [a, 0] : c[s] = true : c[s] = [a, l - a];
    return { start: p, end: f, markerLines: c };
  }
  function xi2(e, t7, r = {}) {
    let u = wi2(false), i = e.split(Wn2), { start: o, end: s, markerLines: a } = _i2(t7, i, r), D = t7.start && typeof t7.start.column == "number", l = String(s).length, f = e.split(Wn2, s).slice(o, s).map((d, c) => {
      let F = o + 1 + c, h2 = ` ${` ${F}`.slice(-l)} |`, C = a[F], v2 = !a[F + 1];
      if (C) {
        let E2 = "";
        if (Array.isArray(C)) {
          let g = d.slice(0, Math.max(C[0] - 1, 0)).replace(/[^\t]/g, " "), j2 = C[1] || 1;
          E2 = [`
 `, u.gutter(h2.replace(/\d/g, " ")), " ", g, u.marker("^").repeat(j2)].join(""), v2 && r.message && (E2 += " " + u.message(r.message));
        }
        return [u.marker(">"), u.gutter(h2), d.length > 0 ? ` ${d}` : "", E2].join("");
      } else return ` ${u.gutter(h2)}${d.length > 0 ? ` ${d}` : ""}`;
    }).join(`
`);
    return r.message && !D && (f = `${" ".repeat(l + 1)}${r.message}
${f}`), f;
  }
  ur2.codeFrameColumns = xi2;
});
var fr2 = {};
vt2(fr2, { __debug: () => lo, check: () => ao, doc: () => Dr2, format: () => yu, formatWithCursor: () => gu, getSupportInfo: () => Do2, util: () => cr2, version: () => cu });
var Nu = (e, t7, r, n) => {
  if (!(e && t7 == null)) return t7.replaceAll ? t7.replaceAll(r, n) : r.global ? t7.replace(r, n) : t7.split(r).join(n);
};
var ne2 = Nu;
function U() {
}
U.prototype = { diff: function(t7, r) {
  var n, u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = u.callback;
  typeof u == "function" && (i = u, u = {});
  var o = this;
  function s(E2) {
    return E2 = o.postProcess(E2, u), i ? (setTimeout(function() {
      i(E2);
    }, 0), true) : E2;
  }
  t7 = this.castInput(t7, u), r = this.castInput(r, u), t7 = this.removeEmpty(this.tokenize(t7, u)), r = this.removeEmpty(this.tokenize(r, u));
  var a = r.length, D = t7.length, l = 1, p = a + D;
  u.maxEditLength != null && (p = Math.min(p, u.maxEditLength));
  var f = (n = u.timeout) !== null && n !== void 0 ? n : 1 / 0, d = Date.now() + f, c = [{ oldPos: -1, lastComponent: void 0 }], F = this.extractCommon(c[0], r, t7, 0, u);
  if (c[0].oldPos + 1 >= D && F + 1 >= a) return s(mr2(o, c[0].lastComponent, r, t7, o.useLongestToken));
  var m2 = -1 / 0, h2 = 1 / 0;
  function C() {
    for (var E2 = Math.max(m2, -l); E2 <= Math.min(h2, l); E2 += 2) {
      var g = void 0, j2 = c[E2 - 1], b2 = c[E2 + 1];
      j2 && (c[E2 - 1] = void 0);
      var X2 = false;
      if (b2) {
        var ae2 = b2.oldPos - E2;
        X2 = b2 && 0 <= ae2 && ae2 < a;
      }
      var $e = j2 && j2.oldPos + 1 < D;
      if (!X2 && !$e) {
        c[E2] = void 0;
        continue;
      }
      if (!$e || X2 && j2.oldPos < b2.oldPos ? g = o.addToPath(b2, true, false, 0, u) : g = o.addToPath(j2, false, true, 1, u), F = o.extractCommon(g, r, t7, E2, u), g.oldPos + 1 >= D && F + 1 >= a) return s(mr2(o, g.lastComponent, r, t7, o.useLongestToken));
      c[E2] = g, g.oldPos + 1 >= D && (h2 = Math.min(h2, E2 - 1)), F + 1 >= a && (m2 = Math.max(m2, E2 + 1));
    }
    l++;
  }
  if (i) (function E2() {
    setTimeout(function() {
      if (l > p || Date.now() > d) return i();
      C() || E2();
    }, 0);
  })();
  else for (; l <= p && Date.now() <= d; ) {
    var v2 = C();
    if (v2) return v2;
  }
}, addToPath: function(t7, r, n, u, i) {
  var o = t7.lastComponent;
  return o && !i.oneChangePerToken && o.added === r && o.removed === n ? { oldPos: t7.oldPos + u, lastComponent: { count: o.count + 1, added: r, removed: n, previousComponent: o.previousComponent } } : { oldPos: t7.oldPos + u, lastComponent: { count: 1, added: r, removed: n, previousComponent: o } };
}, extractCommon: function(t7, r, n, u, i) {
  for (var o = r.length, s = n.length, a = t7.oldPos, D = a - u, l = 0; D + 1 < o && a + 1 < s && this.equals(n[a + 1], r[D + 1], i); ) D++, a++, l++, i.oneChangePerToken && (t7.lastComponent = { count: 1, previousComponent: t7.lastComponent, added: false, removed: false });
  return l && !i.oneChangePerToken && (t7.lastComponent = { count: l, previousComponent: t7.lastComponent, added: false, removed: false }), t7.oldPos = a, D;
}, equals: function(t7, r, n) {
  return n.comparator ? n.comparator(t7, r) : t7 === r || n.ignoreCase && t7.toLowerCase() === r.toLowerCase();
}, removeEmpty: function(t7) {
  for (var r = [], n = 0; n < t7.length; n++) t7[n] && r.push(t7[n]);
  return r;
}, castInput: function(t7) {
  return t7;
}, tokenize: function(t7) {
  return Array.from(t7);
}, join: function(t7) {
  return t7.join("");
}, postProcess: function(t7) {
  return t7;
} };
function mr2(e, t7, r, n, u) {
  for (var i = [], o; t7; ) i.push(t7), o = t7.previousComponent, delete t7.previousComponent, t7 = o;
  i.reverse();
  for (var s = 0, a = i.length, D = 0, l = 0; s < a; s++) {
    var p = i[s];
    if (p.removed) p.value = e.join(n.slice(l, l + p.count)), l += p.count;
    else {
      if (!p.added && u) {
        var f = r.slice(D, D + p.count);
        f = f.map(function(d, c) {
          var F = n[l + c];
          return F.length > d.length ? F : d;
        }), p.value = e.join(f);
      } else p.value = e.join(r.slice(D, D + p.count));
      D += p.count, p.added || (l += p.count);
    }
  }
  return i;
}
var mo = new U();
function hr2(e, t7) {
  var r;
  for (r = 0; r < e.length && r < t7.length; r++) if (e[r] != t7[r]) return e.slice(0, r);
  return e.slice(0, r);
}
function Er2(e, t7) {
  var r;
  if (!e || !t7 || e[e.length - 1] != t7[t7.length - 1]) return "";
  for (r = 0; r < e.length && r < t7.length; r++) if (e[e.length - (r + 1)] != t7[t7.length - (r + 1)]) return e.slice(-r);
  return e.slice(-r);
}
function Bt2(e, t7, r) {
  if (e.slice(0, t7.length) != t7) throw Error("string ".concat(JSON.stringify(e), " doesn't start with prefix ").concat(JSON.stringify(t7), "; this is a bug"));
  return r + e.slice(t7.length);
}
function wt2(e, t7, r) {
  if (!t7) return e + r;
  if (e.slice(-t7.length) != t7) throw Error("string ".concat(JSON.stringify(e), " doesn't end with suffix ").concat(JSON.stringify(t7), "; this is a bug"));
  return e.slice(0, -t7.length) + r;
}
function _e2(e, t7) {
  return Bt2(e, t7, "");
}
function Ve2(e, t7) {
  return wt2(e, t7, "");
}
function Cr2(e, t7) {
  return t7.slice(0, Ou(e, t7));
}
function Ou(e, t7) {
  var r = 0;
  e.length > t7.length && (r = e.length - t7.length);
  var n = t7.length;
  e.length < t7.length && (n = e.length);
  var u = Array(n), i = 0;
  u[0] = 0;
  for (var o = 1; o < n; o++) {
    for (t7[o] == t7[i] ? u[o] = u[i] : u[o] = i; i > 0 && t7[o] != t7[i]; ) i = u[i];
    t7[o] == t7[i] && i++;
  }
  i = 0;
  for (var s = r; s < e.length; s++) {
    for (; i > 0 && e[s] != t7[i]; ) i = u[i];
    e[s] == t7[i] && i++;
  }
  return i;
}
var Ue2 = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}";
var Su = new RegExp("[".concat(Ue2, "]+|\\s+|[^").concat(Ue2, "]"), "ug");
var Ge2 = new U();
Ge2.equals = function(e, t7, r) {
  return r.ignoreCase && (e = e.toLowerCase(), t7 = t7.toLowerCase()), e.trim() === t7.trim();
};
Ge2.tokenize = function(e) {
  var t7 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r;
  if (t7.intlSegmenter) {
    if (t7.intlSegmenter.resolvedOptions().granularity != "word") throw new Error('The segmenter passed must have a granularity of "word"');
    r = Array.from(t7.intlSegmenter.segment(e), function(i) {
      return i.segment;
    });
  } else r = e.match(Su) || [];
  var n = [], u = null;
  return r.forEach(function(i) {
    /\s/.test(i) ? u == null ? n.push(i) : n.push(n.pop() + i) : /\s/.test(u) ? n[n.length - 1] == u ? n.push(n.pop() + i) : n.push(u + i) : n.push(i), u = i;
  }), n;
};
Ge2.join = function(e) {
  return e.map(function(t7, r) {
    return r == 0 ? t7 : t7.replace(/^\s+/, "");
  }).join("");
};
Ge2.postProcess = function(e, t7) {
  if (!e || t7.oneChangePerToken) return e;
  var r = null, n = null, u = null;
  return e.forEach(function(i) {
    i.added ? n = i : i.removed ? u = i : ((n || u) && gr2(r, u, n, i), r = i, n = null, u = null);
  }), (n || u) && gr2(r, u, n, null), e;
};
function gr2(e, t7, r, n) {
  if (t7 && r) {
    var u = t7.value.match(/^\s*/)[0], i = t7.value.match(/\s*$/)[0], o = r.value.match(/^\s*/)[0], s = r.value.match(/\s*$/)[0];
    if (e) {
      var a = hr2(u, o);
      e.value = wt2(e.value, o, a), t7.value = _e2(t7.value, a), r.value = _e2(r.value, a);
    }
    if (n) {
      var D = Er2(i, s);
      n.value = Bt2(n.value, s, D), t7.value = Ve2(t7.value, D), r.value = Ve2(r.value, D);
    }
  } else if (r) e && (r.value = r.value.replace(/^\s*/, "")), n && (n.value = n.value.replace(/^\s*/, ""));
  else if (e && n) {
    var l = n.value.match(/^\s*/)[0], p = t7.value.match(/^\s*/)[0], f = t7.value.match(/\s*$/)[0], d = hr2(l, p);
    t7.value = _e2(t7.value, d);
    var c = Er2(_e2(l, d), f);
    t7.value = Ve2(t7.value, c), n.value = Bt2(n.value, l, c), e.value = wt2(e.value, l, l.slice(0, l.length - c.length));
  } else if (n) {
    var F = n.value.match(/^\s*/)[0], m2 = t7.value.match(/\s*$/)[0], h2 = Cr2(m2, F);
    t7.value = Ve2(t7.value, h2);
  } else if (e) {
    var C = e.value.match(/\s*$/)[0], v2 = t7.value.match(/^\s*/)[0], E2 = Cr2(C, v2);
    t7.value = _e2(t7.value, E2);
  }
}
var Tu = new U();
Tu.tokenize = function(e) {
  var t7 = new RegExp("(\\r?\\n)|[".concat(Ue2, "]+|[^\\S\\n\\r]+|[^").concat(Ue2, "]"), "ug");
  return e.match(t7) || [];
};
var bt2 = new U();
bt2.tokenize = function(e, t7) {
  t7.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
  var r = [], n = e.split(/(\n|\r\n)/);
  n[n.length - 1] || n.pop();
  for (var u = 0; u < n.length; u++) {
    var i = n[u];
    u % 2 && !t7.newlineIsToken ? r[r.length - 1] += i : r.push(i);
  }
  return r;
};
bt2.equals = function(e, t7, r) {
  return r.ignoreWhitespace ? ((!r.newlineIsToken || !e.includes(`
`)) && (e = e.trim()), (!r.newlineIsToken || !t7.includes(`
`)) && (t7 = t7.trim())) : r.ignoreNewlineAtEof && !r.newlineIsToken && (e.endsWith(`
`) && (e = e.slice(0, -1)), t7.endsWith(`
`) && (t7 = t7.slice(0, -1))), U.prototype.equals.call(this, e, t7, r);
};
var ku = new U();
ku.tokenize = function(e) {
  return e.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var Lu = new U();
Lu.tokenize = function(e) {
  return e.split(/([{}:;,]|\s+)/);
};
function _t2(e) {
  "@babel/helpers - typeof";
  return _t2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t7) {
    return typeof t7;
  } : function(t7) {
    return t7 && typeof Symbol == "function" && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
  }, _t2(e);
}
var xe2 = new U();
xe2.useLongestToken = true;
xe2.tokenize = bt2.tokenize;
xe2.castInput = function(e, t7) {
  var r = t7.undefinedReplacement, n = t7.stringifyReplacer, u = n === void 0 ? function(i, o) {
    return typeof o > "u" ? r : o;
  } : n;
  return typeof e == "string" ? e : JSON.stringify(xt2(e, null, null, u), u, "  ");
};
xe2.equals = function(e, t7, r) {
  return U.prototype.equals.call(xe2, e.replace(/,([\r\n])/g, "$1"), t7.replace(/,([\r\n])/g, "$1"), r);
};
function xt2(e, t7, r, n, u) {
  t7 = t7 || [], r = r || [], n && (e = n(u, e));
  var i;
  for (i = 0; i < t7.length; i += 1) if (t7[i] === e) return r[i];
  var o;
  if (Object.prototype.toString.call(e) === "[object Array]") {
    for (t7.push(e), o = new Array(e.length), r.push(o), i = 0; i < e.length; i += 1) o[i] = xt2(e[i], t7, r, n, u);
    return t7.pop(), r.pop(), o;
  }
  if (e && e.toJSON && (e = e.toJSON()), _t2(e) === "object" && e !== null) {
    t7.push(e), o = {}, r.push(o);
    var s = [], a;
    for (a in e) Object.prototype.hasOwnProperty.call(e, a) && s.push(a);
    for (s.sort(), i = 0; i < s.length; i += 1) a = s[i], o[a] = xt2(e[a], t7, r, n, a);
    t7.pop(), r.pop();
  } else o = e;
  return o;
}
var ze3 = new U();
ze3.tokenize = function(e) {
  return e.slice();
};
ze3.join = ze3.removeEmpty = function(e) {
  return e;
};
function yr2(e, t7, r) {
  return ze3.diff(e, t7, r);
}
function Ar2(e) {
  let t7 = e.indexOf("\r");
  return t7 !== -1 ? e.charAt(t7 + 1) === `
` ? "crlf" : "cr" : "lf";
}
function be2(e) {
  switch (e) {
    case "cr":
      return "\r";
    case "crlf":
      return `\r
`;
    default:
      return `
`;
  }
}
function Nt2(e, t7) {
  let r;
  switch (t7) {
    case `
`:
      r = /\n/gu;
      break;
    case "\r":
      r = /\r/gu;
      break;
    case `\r
`:
      r = /\r\n/gu;
      break;
    default:
      throw new Error(`Unexpected "eol" ${JSON.stringify(t7)}.`);
  }
  let n = e.match(r);
  return n ? n.length : 0;
}
function vr2(e) {
  return ne2(false, e, /\r\n?/gu, `
`);
}
var $2 = "string";
var H2 = "array";
var z2 = "cursor";
var T2 = "indent";
var k2 = "align";
var L2 = "trim";
var B2 = "group";
var N2 = "fill";
var w2 = "if-break";
var P2 = "indent-if-break";
var I = "line-suffix";
var R2 = "line-suffix-boundary";
var y = "line";
var O2 = "label";
var _2 = "break-parent";
var Ke2 = /* @__PURE__ */ new Set([z2, T2, k2, L2, B2, N2, w2, P2, I, R2, y, O2, _2]);
var Pu = (e, t7, r) => {
  if (!(e && t7 == null)) return Array.isArray(t7) || typeof t7 == "string" ? t7[r < 0 ? t7.length + r : r] : t7.at(r);
};
var A = Pu;
function Iu(e) {
  if (typeof e == "string") return $2;
  if (Array.isArray(e)) return H2;
  if (!e) return;
  let { type: t7 } = e;
  if (Ke2.has(t7)) return t7;
}
var M = Iu;
var Ru = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function Yu(e) {
  let t7 = e === null ? "null" : typeof e;
  if (t7 !== "string" && t7 !== "object") return `Unexpected doc '${t7}', 
Expected it to be 'string' or 'object'.`;
  if (M(e)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = Ru([...Ke2].map((u) => `'${u}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var Ot2 = class extends Error {
  name = "InvalidDocError";
  constructor(t7) {
    super(Yu(t7)), this.doc = t7;
  }
};
var Q2 = Ot2;
var Br2 = {};
function ju(e, t7, r, n) {
  let u = [e];
  for (; u.length > 0; ) {
    let i = u.pop();
    if (i === Br2) {
      r(u.pop());
      continue;
    }
    r && u.push(i, Br2);
    let o = M(i);
    if (!o) throw new Q2(i);
    if ((t7 == null ? void 0 : t7(i)) !== false) switch (o) {
      case H2:
      case N2: {
        let s = o === H2 ? i : i.parts;
        for (let a = s.length, D = a - 1; D >= 0; --D) u.push(s[D]);
        break;
      }
      case w2:
        u.push(i.flatContents, i.breakContents);
        break;
      case B2:
        if (n && i.expandedStates) for (let s = i.expandedStates.length, a = s - 1; a >= 0; --a) u.push(i.expandedStates[a]);
        else u.push(i.contents);
        break;
      case k2:
      case T2:
      case P2:
      case O2:
      case I:
        u.push(i.contents);
        break;
      case $2:
      case z2:
      case L2:
      case R2:
      case y:
      case _2:
        break;
      default:
        throw new Q2(i);
    }
  }
}
var Fe2 = ju;
function Oe2(e, t7) {
  if (typeof e == "string") return t7(e);
  let r = /* @__PURE__ */ new Map();
  return n(e);
  function n(i) {
    if (r.has(i)) return r.get(i);
    let o = u(i);
    return r.set(i, o), o;
  }
  function u(i) {
    switch (M(i)) {
      case H2:
        return t7(i.map(n));
      case N2:
        return t7({ ...i, parts: i.parts.map(n) });
      case w2:
        return t7({ ...i, breakContents: n(i.breakContents), flatContents: n(i.flatContents) });
      case B2: {
        let { expandedStates: o, contents: s } = i;
        return o ? (o = o.map(n), s = o[0]) : s = n(s), t7({ ...i, contents: s, expandedStates: o });
      }
      case k2:
      case T2:
      case P2:
      case O2:
      case I:
        return t7({ ...i, contents: n(i.contents) });
      case $2:
      case z2:
      case L2:
      case R2:
      case y:
      case _2:
        return t7(i);
      default:
        throw new Q2(i);
    }
  }
}
function Je2(e, t7, r) {
  let n = r, u = false;
  function i(o) {
    if (u) return false;
    let s = t7(o);
    s !== void 0 && (u = true, n = s);
  }
  return Fe2(e, i), n;
}
function Hu(e) {
  if (e.type === B2 && e.break || e.type === y && e.hard || e.type === _2) return true;
}
function xr2(e) {
  return Je2(e, Hu, false);
}
function wr2(e) {
  if (e.length > 0) {
    let t7 = A(false, e, -1);
    !t7.expandedStates && !t7.break && (t7.break = "propagated");
  }
  return null;
}
function br2(e) {
  let t7 = /* @__PURE__ */ new Set(), r = [];
  function n(i) {
    if (i.type === _2 && wr2(r), i.type === B2) {
      if (r.push(i), t7.has(i)) return false;
      t7.add(i);
    }
  }
  function u(i) {
    i.type === B2 && r.pop().break && wr2(r);
  }
  Fe2(e, n, u, true);
}
function Wu(e) {
  return e.type === y && !e.hard ? e.soft ? "" : " " : e.type === w2 ? e.flatContents : e;
}
function Nr2(e) {
  return Oe2(e, Wu);
}
function _r2(e) {
  for (e = [...e]; e.length >= 2 && A(false, e, -2).type === y && A(false, e, -1).type === _2; ) e.length -= 2;
  if (e.length > 0) {
    let t7 = Ne2(A(false, e, -1));
    e[e.length - 1] = t7;
  }
  return e;
}
function Ne2(e) {
  switch (M(e)) {
    case T2:
    case P2:
    case B2:
    case I:
    case O2: {
      let t7 = Ne2(e.contents);
      return { ...e, contents: t7 };
    }
    case w2:
      return { ...e, breakContents: Ne2(e.breakContents), flatContents: Ne2(e.flatContents) };
    case N2:
      return { ...e, parts: _r2(e.parts) };
    case H2:
      return _r2(e);
    case $2:
      return e.replace(/[\n\r]*$/u, "");
    case k2:
    case z2:
    case L2:
    case R2:
    case y:
    case _2:
      break;
    default:
      throw new Q2(e);
  }
  return e;
}
function qe2(e) {
  return Ne2(Mu(e));
}
function $u(e) {
  switch (M(e)) {
    case N2:
      if (e.parts.every((t7) => t7 === "")) return "";
      break;
    case B2:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
      if (e.contents.type === B2 && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
      break;
    case k2:
    case T2:
    case P2:
    case I:
      if (!e.contents) return "";
      break;
    case w2:
      if (!e.flatContents && !e.breakContents) return "";
      break;
    case H2: {
      let t7 = [];
      for (let r of e) {
        if (!r) continue;
        let [n, ...u] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof A(false, t7, -1) == "string" ? t7[t7.length - 1] += n : t7.push(n), t7.push(...u);
      }
      return t7.length === 0 ? "" : t7.length === 1 ? t7[0] : t7;
    }
    case $2:
    case z2:
    case L2:
    case R2:
    case y:
    case O2:
    case _2:
      break;
    default:
      throw new Q2(e);
  }
  return e;
}
function Mu(e) {
  return Oe2(e, (t7) => $u(t7));
}
function Or(e, t7 = Xe2) {
  return Oe2(e, (r) => typeof r == "string" ? Se2(t7, r.split(`
`)) : r);
}
function Vu(e) {
  if (e.type === y) return true;
}
function Sr2(e) {
  return Je2(e, Vu, false);
}
function me2(e, t7) {
  return e.type === O2 ? { ...e, contents: t7(e.contents) } : t7(e);
}
var St2 = () => {
};
var G2 = St2;
var Tt2 = St2;
var Tr2 = St2;
function le2(e) {
  return G2(e), { type: T2, contents: e };
}
function De2(e, t7) {
  return G2(t7), { type: k2, contents: t7, n: e };
}
function kt2(e, t7 = {}) {
  return G2(e), Tt2(t7.expandedStates, true), { type: B2, id: t7.id, contents: e, break: !!t7.shouldBreak, expandedStates: t7.expandedStates };
}
function kr2(e) {
  return De2(Number.NEGATIVE_INFINITY, e);
}
function Lr2(e) {
  return De2({ type: "root" }, e);
}
function Pr2(e) {
  return De2(-1, e);
}
function Ir2(e, t7) {
  return kt2(e[0], { ...t7, expandedStates: e });
}
function Rr2(e) {
  return Tr2(e), { type: N2, parts: e };
}
function Yr2(e, t7 = "", r = {}) {
  return G2(e), t7 !== "" && G2(t7), { type: w2, breakContents: e, flatContents: t7, groupId: r.groupId };
}
function jr2(e, t7) {
  return G2(e), { type: P2, contents: e, groupId: t7.groupId, negate: t7.negate };
}
function Te2(e) {
  return G2(e), { type: I, contents: e };
}
var Hr = { type: R2 };
var he2 = { type: _2 };
var Wr2 = { type: L2 };
var ke2 = { type: y, hard: true };
var Lt2 = { type: y, hard: true, literal: true };
var Qe2 = { type: y };
var $r2 = { type: y, soft: true };
var K2 = [ke2, he2];
var Xe2 = [Lt2, he2];
var Z2 = { type: z2 };
function Se2(e, t7) {
  G2(e), Tt2(t7);
  let r = [];
  for (let n = 0; n < t7.length; n++) n !== 0 && r.push(e), r.push(t7[n]);
  return r;
}
function Ze2(e, t7, r) {
  G2(e);
  let n = e;
  if (t7 > 0) {
    for (let u = 0; u < Math.floor(t7 / r); ++u) n = le2(n);
    n = De2(t7 % r, n), n = De2(Number.NEGATIVE_INFINITY, n);
  }
  return n;
}
function Mr(e, t7) {
  return G2(t7), e ? { type: O2, label: e, contents: t7 } : t7;
}
function ee2(e) {
  var t7;
  if (!e) return "";
  if (Array.isArray(e)) {
    let r = [];
    for (let n of e) if (Array.isArray(n)) r.push(...ee2(n));
    else {
      let u = ee2(n);
      u !== "" && r.push(u);
    }
    return r;
  }
  return e.type === w2 ? { ...e, breakContents: ee2(e.breakContents), flatContents: ee2(e.flatContents) } : e.type === B2 ? { ...e, contents: ee2(e.contents), expandedStates: (t7 = e.expandedStates) == null ? void 0 : t7.map(ee2) } : e.type === N2 ? { type: "fill", parts: e.parts.map(ee2) } : e.contents ? { ...e, contents: ee2(e.contents) } : e;
}
function Vr2(e) {
  let t7 = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ new Set();
  return n(ee2(e));
  function n(i, o, s) {
    var a, D;
    if (typeof i == "string") return JSON.stringify(i);
    if (Array.isArray(i)) {
      let l = i.map(n).filter(Boolean);
      return l.length === 1 ? l[0] : `[${l.join(", ")}]`;
    }
    if (i.type === y) {
      let l = ((a = s == null ? void 0 : s[o + 1]) == null ? void 0 : a.type) === _2;
      return i.literal ? l ? "literalline" : "literallineWithoutBreakParent" : i.hard ? l ? "hardline" : "hardlineWithoutBreakParent" : i.soft ? "softline" : "line";
    }
    if (i.type === _2) return ((D = s == null ? void 0 : s[o - 1]) == null ? void 0 : D.type) === y && s[o - 1].hard ? void 0 : "breakParent";
    if (i.type === L2) return "trim";
    if (i.type === T2) return "indent(" + n(i.contents) + ")";
    if (i.type === k2) return i.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + n(i.contents) + ")" : i.n < 0 ? "dedent(" + n(i.contents) + ")" : i.n.type === "root" ? "markAsRoot(" + n(i.contents) + ")" : "align(" + JSON.stringify(i.n) + ", " + n(i.contents) + ")";
    if (i.type === w2) return "ifBreak(" + n(i.breakContents) + (i.flatContents ? ", " + n(i.flatContents) : "") + (i.groupId ? (i.flatContents ? "" : ', ""') + `, { groupId: ${u(i.groupId)} }` : "") + ")";
    if (i.type === P2) {
      let l = [];
      i.negate && l.push("negate: true"), i.groupId && l.push(`groupId: ${u(i.groupId)}`);
      let p = l.length > 0 ? `, { ${l.join(", ")} }` : "";
      return `indentIfBreak(${n(i.contents)}${p})`;
    }
    if (i.type === B2) {
      let l = [];
      i.break && i.break !== "propagated" && l.push("shouldBreak: true"), i.id && l.push(`id: ${u(i.id)}`);
      let p = l.length > 0 ? `, { ${l.join(", ")} }` : "";
      return i.expandedStates ? `conditionalGroup([${i.expandedStates.map((f) => n(f)).join(",")}]${p})` : `group(${n(i.contents)}${p})`;
    }
    if (i.type === N2) return `fill([${i.parts.map((l) => n(l)).join(", ")}])`;
    if (i.type === I) return "lineSuffix(" + n(i.contents) + ")";
    if (i.type === R2) return "lineSuffixBoundary";
    if (i.type === O2) return `label(${JSON.stringify(i.label)}, ${n(i.contents)})`;
    throw new Error("Unknown doc type " + i.type);
  }
  function u(i) {
    if (typeof i != "symbol") return JSON.stringify(String(i));
    if (i in t7) return t7[i];
    let o = i.description || "symbol";
    for (let s = 0; ; s++) {
      let a = o + (s > 0 ? ` #${s}` : "");
      if (!r.has(a)) return r.add(a), t7[i] = `Symbol.for(${JSON.stringify(a)})`;
    }
  }
}
var Ur2 = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function zr(e) {
  return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function Gr(e) {
  return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || e === 9855 || e >= 9866 && e <= 9871 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101631 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129673 || e >= 129679 && e <= 129734 || e >= 129742 && e <= 129756 || e >= 129759 && e <= 129769 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var Kr2 = (e) => !(zr(e) || Gr(e));
var Uu = /[^\x20-\x7F]/u;
function zu(e) {
  if (!e) return 0;
  if (!Uu.test(e)) return e.length;
  e = e.replace(Ur2(), "  ");
  let t7 = 0;
  for (let r of e) {
    let n = r.codePointAt(0);
    n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (t7 += Kr2(n) ? 1 : 2);
  }
  return t7;
}
var Le2 = zu;
var Y2 = Symbol("MODE_BREAK");
var J2 = Symbol("MODE_FLAT");
var Ee2 = Symbol("cursor");
var Pt2 = Symbol("DOC_FILL_PRINTED_LENGTH");
function Jr2() {
  return { value: "", length: 0, queue: [] };
}
function Gu(e, t7) {
  return It2(e, { type: "indent" }, t7);
}
function Ku(e, t7, r) {
  return t7 === Number.NEGATIVE_INFINITY ? e.root || Jr2() : t7 < 0 ? It2(e, { type: "dedent" }, r) : t7 ? t7.type === "root" ? { ...e, root: e } : It2(e, { type: typeof t7 == "string" ? "stringAlign" : "numberAlign", n: t7 }, r) : e;
}
function It2(e, t7, r) {
  let n = t7.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t7], u = "", i = 0, o = 0, s = 0;
  for (let c of n) switch (c.type) {
    case "indent":
      l(), r.useTabs ? a(1) : D(r.tabWidth);
      break;
    case "stringAlign":
      l(), u += c.n, i += c.n.length;
      break;
    case "numberAlign":
      o += 1, s += c.n;
      break;
    default:
      throw new Error(`Unexpected type '${c.type}'`);
  }
  return f(), { ...e, value: u, length: i, queue: n };
  function a(c) {
    u += "	".repeat(c), i += r.tabWidth * c;
  }
  function D(c) {
    u += " ".repeat(c), i += c;
  }
  function l() {
    r.useTabs ? p() : f();
  }
  function p() {
    o > 0 && a(o), d();
  }
  function f() {
    s > 0 && D(s), d();
  }
  function d() {
    o = 0, s = 0;
  }
}
function Rt2(e) {
  let t7 = 0, r = 0, n = e.length;
  e: for (; n--; ) {
    let u = e[n];
    if (u === Ee2) {
      r++;
      continue;
    }
    for (let i = u.length - 1; i >= 0; i--) {
      let o = u[i];
      if (o === " " || o === "	") t7++;
      else {
        e[n] = u.slice(0, i + 1);
        break e;
      }
    }
  }
  if (t7 > 0 || r > 0) for (e.length = n + 1; r-- > 0; ) e.push(Ee2);
  return t7;
}
function et2(e, t7, r, n, u, i) {
  if (r === Number.POSITIVE_INFINITY) return true;
  let o = t7.length, s = [e], a = [];
  for (; r >= 0; ) {
    if (s.length === 0) {
      if (o === 0) return true;
      s.push(t7[--o]);
      continue;
    }
    let { mode: D, doc: l } = s.pop(), p = M(l);
    switch (p) {
      case $2:
        a.push(l), r -= Le2(l);
        break;
      case H2:
      case N2: {
        let f = p === H2 ? l : l.parts, d = l[Pt2] ?? 0;
        for (let c = f.length - 1; c >= d; c--) s.push({ mode: D, doc: f[c] });
        break;
      }
      case T2:
      case k2:
      case P2:
      case O2:
        s.push({ mode: D, doc: l.contents });
        break;
      case L2:
        r += Rt2(a);
        break;
      case B2: {
        if (i && l.break) return false;
        let f = l.break ? Y2 : D, d = l.expandedStates && f === Y2 ? A(false, l.expandedStates, -1) : l.contents;
        s.push({ mode: f, doc: d });
        break;
      }
      case w2: {
        let d = (l.groupId ? u[l.groupId] || J2 : D) === Y2 ? l.breakContents : l.flatContents;
        d && s.push({ mode: D, doc: d });
        break;
      }
      case y:
        if (D === Y2 || l.hard) return true;
        l.soft || (a.push(" "), r--);
        break;
      case I:
        n = true;
        break;
      case R2:
        if (n) return false;
        break;
    }
  }
  return false;
}
function Ce2(e, t7) {
  let r = {}, n = t7.printWidth, u = be2(t7.endOfLine), i = 0, o = [{ ind: Jr2(), mode: Y2, doc: e }], s = [], a = false, D = [], l = 0;
  for (br2(e); o.length > 0; ) {
    let { ind: f, mode: d, doc: c } = o.pop();
    switch (M(c)) {
      case $2: {
        let F = u !== `
` ? ne2(false, c, `
`, u) : c;
        s.push(F), o.length > 0 && (i += Le2(F));
        break;
      }
      case H2:
        for (let F = c.length - 1; F >= 0; F--) o.push({ ind: f, mode: d, doc: c[F] });
        break;
      case z2:
        if (l >= 2) throw new Error("There are too many 'cursor' in doc.");
        s.push(Ee2), l++;
        break;
      case T2:
        o.push({ ind: Gu(f, t7), mode: d, doc: c.contents });
        break;
      case k2:
        o.push({ ind: Ku(f, c.n, t7), mode: d, doc: c.contents });
        break;
      case L2:
        i -= Rt2(s);
        break;
      case B2:
        switch (d) {
          case J2:
            if (!a) {
              o.push({ ind: f, mode: c.break ? Y2 : J2, doc: c.contents });
              break;
            }
          case Y2: {
            a = false;
            let F = { ind: f, mode: J2, doc: c.contents }, m2 = n - i, h2 = D.length > 0;
            if (!c.break && et2(F, o, m2, h2, r)) o.push(F);
            else if (c.expandedStates) {
              let C = A(false, c.expandedStates, -1);
              if (c.break) {
                o.push({ ind: f, mode: Y2, doc: C });
                break;
              } else for (let v2 = 1; v2 < c.expandedStates.length + 1; v2++) if (v2 >= c.expandedStates.length) {
                o.push({ ind: f, mode: Y2, doc: C });
                break;
              } else {
                let E2 = c.expandedStates[v2], g = { ind: f, mode: J2, doc: E2 };
                if (et2(g, o, m2, h2, r)) {
                  o.push(g);
                  break;
                }
              }
            } else o.push({ ind: f, mode: Y2, doc: c.contents });
            break;
          }
        }
        c.id && (r[c.id] = A(false, o, -1).mode);
        break;
      case N2: {
        let F = n - i, m2 = c[Pt2] ?? 0, { parts: h2 } = c, C = h2.length - m2;
        if (C === 0) break;
        let v2 = h2[m2 + 0], E2 = h2[m2 + 1], g = { ind: f, mode: J2, doc: v2 }, j2 = { ind: f, mode: Y2, doc: v2 }, b2 = et2(g, [], F, D.length > 0, r, true);
        if (C === 1) {
          b2 ? o.push(g) : o.push(j2);
          break;
        }
        let X2 = { ind: f, mode: J2, doc: E2 }, ae2 = { ind: f, mode: Y2, doc: E2 };
        if (C === 2) {
          b2 ? o.push(X2, g) : o.push(ae2, j2);
          break;
        }
        let $e = h2[m2 + 2], yt2 = { ind: f, mode: d, doc: { ...c, [Pt2]: m2 + 2 } };
        et2({ ind: f, mode: J2, doc: [v2, E2, $e] }, [], F, D.length > 0, r, true) ? o.push(yt2, X2, g) : b2 ? o.push(yt2, ae2, g) : o.push(yt2, ae2, j2);
        break;
      }
      case w2:
      case P2: {
        let F = c.groupId ? r[c.groupId] : d;
        if (F === Y2) {
          let m2 = c.type === w2 ? c.breakContents : c.negate ? c.contents : le2(c.contents);
          m2 && o.push({ ind: f, mode: d, doc: m2 });
        }
        if (F === J2) {
          let m2 = c.type === w2 ? c.flatContents : c.negate ? le2(c.contents) : c.contents;
          m2 && o.push({ ind: f, mode: d, doc: m2 });
        }
        break;
      }
      case I:
        D.push({ ind: f, mode: d, doc: c.contents });
        break;
      case R2:
        D.length > 0 && o.push({ ind: f, mode: d, doc: ke2 });
        break;
      case y:
        switch (d) {
          case J2:
            if (c.hard) a = true;
            else {
              c.soft || (s.push(" "), i += 1);
              break;
            }
          case Y2:
            if (D.length > 0) {
              o.push({ ind: f, mode: d, doc: c }, ...D.reverse()), D.length = 0;
              break;
            }
            c.literal ? f.root ? (s.push(u, f.root.value), i = f.root.length) : (s.push(u), i = 0) : (i -= Rt2(s), s.push(u + f.value), i = f.length);
            break;
        }
        break;
      case O2:
        o.push({ ind: f, mode: d, doc: c.contents });
        break;
      case _2:
        break;
      default:
        throw new Q2(c);
    }
    o.length === 0 && D.length > 0 && (o.push(...D.reverse()), D.length = 0);
  }
  let p = s.indexOf(Ee2);
  if (p !== -1) {
    let f = s.indexOf(Ee2, p + 1);
    if (f === -1) return { formatted: s.filter((m2) => m2 !== Ee2).join("") };
    let d = s.slice(0, p).join(""), c = s.slice(p + 1, f).join(""), F = s.slice(f + 1).join("");
    return { formatted: d + c + F, cursorNodeStart: d.length, cursorNodeText: c };
  }
  return { formatted: s.join("") };
}
function Ju(e, t7, r = 0) {
  let n = 0;
  for (let u = r; u < e.length; ++u) e[u] === "	" ? n = n + t7 - n % t7 : n++;
  return n;
}
var ge2 = Ju;
var te2;
var jt2;
var tt2;
var Yt2 = class {
  constructor(t7) {
    Fr2(this, te2);
    this.stack = [t7];
  }
  get key() {
    let { stack: t7, siblings: r } = this;
    return A(false, t7, r === null ? -2 : -4) ?? null;
  }
  get index() {
    return this.siblings === null ? null : A(false, this.stack, -2);
  }
  get node() {
    return A(false, this.stack, -1);
  }
  get parent() {
    return this.getNode(1);
  }
  get grandparent() {
    return this.getNode(2);
  }
  get isInArray() {
    return this.siblings !== null;
  }
  get siblings() {
    let { stack: t7 } = this, r = A(false, t7, -3);
    return Array.isArray(r) ? r : null;
  }
  get next() {
    let { siblings: t7 } = this;
    return t7 === null ? null : t7[this.index + 1];
  }
  get previous() {
    let { siblings: t7 } = this;
    return t7 === null ? null : t7[this.index - 1];
  }
  get isFirst() {
    return this.index === 0;
  }
  get isLast() {
    let { siblings: t7, index: r } = this;
    return t7 !== null && r === t7.length - 1;
  }
  get isRoot() {
    return this.stack.length === 1;
  }
  get root() {
    return this.stack[0];
  }
  get ancestors() {
    return [...pe2(this, te2, tt2).call(this)];
  }
  getName() {
    let { stack: t7 } = this, { length: r } = t7;
    return r > 1 ? A(false, t7, -2) : null;
  }
  getValue() {
    return A(false, this.stack, -1);
  }
  getNode(t7 = 0) {
    let r = pe2(this, te2, jt2).call(this, t7);
    return r === -1 ? null : this.stack[r];
  }
  getParentNode(t7 = 0) {
    return this.getNode(t7 + 1);
  }
  call(t7, ...r) {
    let { stack: n } = this, { length: u } = n, i = A(false, n, -1);
    for (let o of r) i = i[o], n.push(o, i);
    try {
      return t7(this);
    } finally {
      n.length = u;
    }
  }
  callParent(t7, r = 0) {
    let n = pe2(this, te2, jt2).call(this, r + 1), u = this.stack.splice(n + 1);
    try {
      return t7(this);
    } finally {
      this.stack.push(...u);
    }
  }
  each(t7, ...r) {
    let { stack: n } = this, { length: u } = n, i = A(false, n, -1);
    for (let o of r) i = i[o], n.push(o, i);
    try {
      for (let o = 0; o < i.length; ++o) n.push(o, i[o]), t7(this, o, i), n.length -= 2;
    } finally {
      n.length = u;
    }
  }
  map(t7, ...r) {
    let n = [];
    return this.each((u, i, o) => {
      n[i] = t7(u, i, o);
    }, ...r), n;
  }
  match(...t7) {
    let r = this.stack.length - 1, n = null, u = this.stack[r--];
    for (let i of t7) {
      if (u === void 0) return false;
      let o = null;
      if (typeof n == "number" && (o = n, n = this.stack[r--], u = this.stack[r--]), i && !i(u, n, o)) return false;
      n = this.stack[r--], u = this.stack[r--];
    }
    return true;
  }
  findAncestor(t7) {
    for (let r of pe2(this, te2, tt2).call(this)) if (t7(r)) return r;
  }
  hasAncestor(t7) {
    for (let r of pe2(this, te2, tt2).call(this)) if (t7(r)) return true;
    return false;
  }
};
te2 = /* @__PURE__ */ new WeakSet(), jt2 = function(t7) {
  let { stack: r } = this;
  for (let n = r.length - 1; n >= 0; n -= 2) if (!Array.isArray(r[n]) && --t7 < 0) return n;
  return -1;
}, tt2 = function* () {
  let { stack: t7 } = this;
  for (let r = t7.length - 3; r >= 0; r -= 2) {
    let n = t7[r];
    Array.isArray(n) || (yield n);
  }
};
var qr = Yt2;
var Xr2 = new Proxy(() => {
}, { get: () => Xr2 });
var Pe2 = Xr2;
function qu(e) {
  return e !== null && typeof e == "object";
}
var Qr2 = qu;
function* ye2(e, t7) {
  let { getVisitorKeys: r, filter: n = () => true } = t7, u = (i) => Qr2(i) && n(i);
  for (let i of r(e)) {
    let o = e[i];
    if (Array.isArray(o)) for (let s of o) u(s) && (yield s);
    else u(o) && (yield o);
  }
}
function* Zr2(e, t7) {
  let r = [e];
  for (let n = 0; n < r.length; n++) {
    let u = r[n];
    for (let i of ye2(u, t7)) yield i, r.push(i);
  }
}
function en2(e, t7) {
  return ye2(e, t7).next().done;
}
function Ae2(e) {
  return (t7, r, n) => {
    let u = !!(n != null && n.backwards);
    if (r === false) return false;
    let { length: i } = t7, o = r;
    for (; o >= 0 && o < i; ) {
      let s = t7.charAt(o);
      if (e instanceof RegExp) {
        if (!e.test(s)) return o;
      } else if (!e.includes(s)) return o;
      u ? o-- : o++;
    }
    return o === -1 || o === i ? o : false;
  };
}
var tn = Ae2(/\s/u);
var S2 = Ae2(" 	");
var rt2 = Ae2(",; 	");
var nt2 = Ae2(/[^\n\r]/u);
function Xu(e, t7, r) {
  let n = !!(r != null && r.backwards);
  if (t7 === false) return false;
  let u = e.charAt(t7);
  if (n) {
    if (e.charAt(t7 - 1) === "\r" && u === `
`) return t7 - 2;
    if (u === `
` || u === "\r" || u === "\u2028" || u === "\u2029") return t7 - 1;
  } else {
    if (u === "\r" && e.charAt(t7 + 1) === `
`) return t7 + 2;
    if (u === `
` || u === "\r" || u === "\u2028" || u === "\u2029") return t7 + 1;
  }
  return t7;
}
var W2 = Xu;
function Qu(e, t7, r = {}) {
  let n = S2(e, r.backwards ? t7 - 1 : t7, r), u = W2(e, n, r);
  return n !== u;
}
var V2 = Qu;
function Zu(e) {
  return Array.isArray(e) && e.length > 0;
}
var Ht2 = Zu;
var rn = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]);
var ei2 = (e) => Object.keys(e).filter((t7) => !rn.has(t7));
function ti2(e) {
  return e ? (t7) => e(t7, rn) : ei2;
}
var q = ti2;
function ri2(e) {
  let t7 = e.type || e.kind || "(unknown type)", r = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
  return r.length > 20 && (r = r.slice(0, 19) + "…"), t7 + (r ? " " + r : "");
}
function Wt2(e, t7) {
  (e.comments ?? (e.comments = [])).push(t7), t7.printed = false, t7.nodeDescription = ri2(e);
}
function ue(e, t7) {
  t7.leading = true, t7.trailing = false, Wt2(e, t7);
}
function re(e, t7, r) {
  t7.leading = false, t7.trailing = false, r && (t7.marker = r), Wt2(e, t7);
}
function ie2(e, t7) {
  t7.leading = false, t7.trailing = true, Wt2(e, t7);
}
var $t2 = /* @__PURE__ */ new WeakMap();
function ut2(e, t7) {
  if ($t2.has(e)) return $t2.get(e);
  let { printer: { getCommentChildNodes: r, canAttachComment: n, getVisitorKeys: u }, locStart: i, locEnd: o } = t7;
  if (!n) return [];
  let s = ((r == null ? void 0 : r(e, t7)) ?? [...ye2(e, { getVisitorKeys: q(u) })]).flatMap((a) => n(a) ? [a] : ut2(a, t7));
  return s.sort((a, D) => i(a) - i(D) || o(a) - o(D)), $t2.set(e, s), s;
}
function un2(e, t7, r, n) {
  let { locStart: u, locEnd: i } = r, o = u(t7), s = i(t7), a = ut2(e, r), D, l, p = 0, f = a.length;
  for (; p < f; ) {
    let d = p + f >> 1, c = a[d], F = u(c), m2 = i(c);
    if (F <= o && s <= m2) return un2(c, t7, r, c);
    if (m2 <= o) {
      D = c, p = d + 1;
      continue;
    }
    if (s <= F) {
      l = c, f = d;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if ((n == null ? void 0 : n.type) === "TemplateLiteral") {
    let { quasis: d } = n, c = Vt2(d, t7, r);
    D && Vt2(d, D, r) !== c && (D = null), l && Vt2(d, l, r) !== c && (l = null);
  }
  return { enclosingNode: n, precedingNode: D, followingNode: l };
}
var Mt2 = () => false;
function on2(e, t7) {
  let { comments: r } = e;
  if (delete e.comments, !Ht2(r) || !t7.printer.canAttachComment) return;
  let n = [], { locStart: u, locEnd: i, printer: { experimentalFeatures: { avoidAstMutation: o = false } = {}, handleComments: s = {} }, originalText: a } = t7, { ownLine: D = Mt2, endOfLine: l = Mt2, remaining: p = Mt2 } = s, f = r.map((d, c) => ({ ...un2(e, d, t7), comment: d, text: a, options: t7, ast: e, isLastComment: r.length - 1 === c }));
  for (let [d, c] of f.entries()) {
    let { comment: F, precedingNode: m2, enclosingNode: h2, followingNode: C, text: v2, options: E2, ast: g, isLastComment: j2 } = c;
    if (E2.parser === "json" || E2.parser === "json5" || E2.parser === "jsonc" || E2.parser === "__js_expression" || E2.parser === "__ts_expression" || E2.parser === "__vue_expression" || E2.parser === "__vue_ts_expression") {
      if (u(F) - u(g) <= 0) {
        ue(g, F);
        continue;
      }
      if (i(F) - i(g) >= 0) {
        ie2(g, F);
        continue;
      }
    }
    let b2;
    if (o ? b2 = [c] : (F.enclosingNode = h2, F.precedingNode = m2, F.followingNode = C, b2 = [F, v2, E2, g, j2]), ni2(v2, E2, f, d)) F.placement = "ownLine", D(...b2) || (C ? ue(C, F) : m2 ? ie2(m2, F) : h2 ? re(h2, F) : re(g, F));
    else if (ui(v2, E2, f, d)) F.placement = "endOfLine", l(...b2) || (m2 ? ie2(m2, F) : C ? ue(C, F) : h2 ? re(h2, F) : re(g, F));
    else if (F.placement = "remaining", !p(...b2)) if (m2 && C) {
      let X2 = n.length;
      X2 > 0 && n[X2 - 1].followingNode !== C && nn(n, E2), n.push(c);
    } else m2 ? ie2(m2, F) : C ? ue(C, F) : h2 ? re(h2, F) : re(g, F);
  }
  if (nn(n, t7), !o) for (let d of r) delete d.precedingNode, delete d.enclosingNode, delete d.followingNode;
}
var sn2 = (e) => !/[\S\n\u2028\u2029]/u.test(e);
function ni2(e, t7, r, n) {
  let { comment: u, precedingNode: i } = r[n], { locStart: o, locEnd: s } = t7, a = o(u);
  if (i) for (let D = n - 1; D >= 0; D--) {
    let { comment: l, precedingNode: p } = r[D];
    if (p !== i || !sn2(e.slice(s(l), a))) break;
    a = o(l);
  }
  return V2(e, a, { backwards: true });
}
function ui(e, t7, r, n) {
  let { comment: u, followingNode: i } = r[n], { locStart: o, locEnd: s } = t7, a = s(u);
  if (i) for (let D = n + 1; D < r.length; D++) {
    let { comment: l, followingNode: p } = r[D];
    if (p !== i || !sn2(e.slice(a, o(l)))) break;
    a = s(l);
  }
  return V2(e, a);
}
function nn(e, t7) {
  var s, a;
  let r = e.length;
  if (r === 0) return;
  let { precedingNode: n, followingNode: u } = e[0], i = t7.locStart(u), o;
  for (o = r; o > 0; --o) {
    let { comment: D, precedingNode: l, followingNode: p } = e[o - 1];
    Pe2.strictEqual(l, n), Pe2.strictEqual(p, u);
    let f = t7.originalText.slice(t7.locEnd(D), i);
    if (((a = (s = t7.printer).isGap) == null ? void 0 : a.call(s, f, t7)) ?? /^[\s(]*$/u.test(f)) i = t7.locStart(D);
    else break;
  }
  for (let [D, { comment: l }] of e.entries()) D < o ? ie2(n, l) : ue(u, l);
  for (let D of [n, u]) D.comments && D.comments.length > 1 && D.comments.sort((l, p) => t7.locStart(l) - t7.locStart(p));
  e.length = 0;
}
function Vt2(e, t7, r) {
  let n = r.locStart(t7) - 1;
  for (let u = 1; u < e.length; ++u) if (n < r.locStart(e[u])) return u - 1;
  return 0;
}
function ii2(e, t7) {
  let r = t7 - 1;
  r = S2(e, r, { backwards: true }), r = W2(e, r, { backwards: true }), r = S2(e, r, { backwards: true });
  let n = W2(e, r, { backwards: true });
  return r !== n;
}
var Ie2 = ii2;
function an2(e, t7) {
  let r = e.node;
  return r.printed = true, t7.printer.printComment(e, t7);
}
function oi2(e, t7) {
  var l;
  let r = e.node, n = [an2(e, t7)], { printer: u, originalText: i, locStart: o, locEnd: s } = t7;
  if ((l = u.isBlockComment) == null ? void 0 : l.call(u, r)) {
    let p = V2(i, s(r)) ? V2(i, o(r), { backwards: true }) ? K2 : Qe2 : " ";
    n.push(p);
  } else n.push(K2);
  let D = W2(i, S2(i, s(r)));
  return D !== false && V2(i, D) && n.push(K2), n;
}
function si2(e, t7, r) {
  var D;
  let n = e.node, u = an2(e, t7), { printer: i, originalText: o, locStart: s } = t7, a = (D = i.isBlockComment) == null ? void 0 : D.call(i, n);
  if (r != null && r.hasLineSuffix && !(r != null && r.isBlock) || V2(o, s(n), { backwards: true })) {
    let l = Ie2(o, s(n));
    return { doc: Te2([K2, l ? K2 : "", u]), isBlock: a, hasLineSuffix: true };
  }
  return !a || r != null && r.hasLineSuffix ? { doc: [Te2([" ", u]), he2], isBlock: a, hasLineSuffix: true } : { doc: [" ", u], isBlock: a, hasLineSuffix: false };
}
function ai2(e, t7) {
  let r = e.node;
  if (!r) return {};
  let n = t7[Symbol.for("printedComments")];
  if ((r.comments || []).filter((a) => !n.has(a)).length === 0) return { leading: "", trailing: "" };
  let i = [], o = [], s;
  return e.each(() => {
    let a = e.node;
    if (n != null && n.has(a)) return;
    let { leading: D, trailing: l } = a;
    D ? i.push(oi2(e, t7)) : l && (s = si2(e, t7, s), o.push(s.doc));
  }, "comments"), { leading: i, trailing: o };
}
function Dn2(e, t7, r) {
  let { leading: n, trailing: u } = ai2(e, r);
  return !n && !u ? t7 : me2(t7, (i) => [n, i, u]);
}
function ln2(e) {
  let { [Symbol.for("comments")]: t7, [Symbol.for("printedComments")]: r } = e;
  for (let n of t7) {
    if (!n.printed && !r.has(n)) throw new Error('Comment "' + n.value.trim() + '" was not printed. Please report this error!');
    delete n.printed;
  }
}
function Di2(e) {
  return () => {
  };
}
var cn2 = Di2;
var Re2 = class extends Error {
  name = "ConfigError";
};
var Ye2 = class extends Error {
  name = "UndefinedParserError";
};
var fn2 = { cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e) => typeof e == "string" || typeof e == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }] }, plugins: { type: "path", array: true, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e) => typeof e == "string" || typeof e == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: false, description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`, cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
function it2({ plugins: e = [], showDeprecated: t7 = false } = {}) {
  let r = e.flatMap((u) => u.languages ?? []), n = [];
  for (let u of ci2(Object.assign({}, ...e.map(({ options: i }) => i), fn2))) !t7 && u.deprecated || (Array.isArray(u.choices) && (t7 || (u.choices = u.choices.filter((i) => !i.deprecated)), u.name === "parser" && (u.choices = [...u.choices, ...li2(u.choices, r, e)])), u.pluginDefaults = Object.fromEntries(e.filter((i) => {
    var o;
    return ((o = i.defaultOptions) == null ? void 0 : o[u.name]) !== void 0;
  }).map((i) => [i.name, i.defaultOptions[u.name]])), n.push(u));
  return { languages: r, options: n };
}
function* li2(e, t7, r) {
  let n = new Set(e.map((u) => u.value));
  for (let u of t7) if (u.parsers) {
    for (let i of u.parsers) if (!n.has(i)) {
      n.add(i);
      let o = r.find((a) => a.parsers && Object.prototype.hasOwnProperty.call(a.parsers, i)), s = u.name;
      o != null && o.name && (s += ` (plugin: ${o.name})`), yield { value: i, description: s };
    }
  }
}
function ci2(e) {
  let t7 = [];
  for (let [r, n] of Object.entries(e)) {
    let u = { name: r, ...n };
    Array.isArray(u.default) && (u.default = A(false, u.default, -1).value), t7.push(u);
  }
  return t7;
}
var fi2 = (e) => String(e).split(/[/\\]/u).pop();
function dn2(e, t7) {
  if (!t7) return;
  let r = fi2(t7).toLowerCase();
  return e.find(({ filenames: n }) => n == null ? void 0 : n.some((u) => u.toLowerCase() === r)) ?? e.find(({ extensions: n }) => n == null ? void 0 : n.some((u) => r.endsWith(u)));
}
function di(e, t7) {
  if (t7) return e.find(({ name: r }) => r.toLowerCase() === t7) ?? e.find(({ aliases: r }) => r == null ? void 0 : r.includes(t7)) ?? e.find(({ extensions: r }) => r == null ? void 0 : r.includes(`.${t7}`));
}
function pi2(e, t7) {
  let r = e.plugins.flatMap((u) => u.languages ?? []), n = di(r, t7.language) ?? dn2(r, t7.physicalFile) ?? dn2(r, t7.file) ?? (t7.physicalFile, void 0);
  return n == null ? void 0 : n.parsers[0];
}
var pn2 = pi2;
var oe = { key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e), value(e) {
  if (e === null || typeof e != "object") return JSON.stringify(e);
  if (Array.isArray(e)) return `[${e.map((r) => oe.value(r)).join(", ")}]`;
  let t7 = Object.keys(e);
  return t7.length === 0 ? "{}" : `{ ${t7.map((r) => `${oe.key(r)}: ${oe.value(e[r])}`).join(", ")} }`;
}, pair: ({ key: e, value: t7 }) => oe.value({ [e]: t7 }) };
var Ut2 = Me2(ot2(), 1);
var hn2 = (e, t7, { descriptor: r }) => {
  let n = [`${Ut2.default.yellow(typeof e == "string" ? r.key(e) : r.pair(e))} is deprecated`];
  return t7 && n.push(`we now treat it as ${Ut2.default.blue(typeof t7 == "string" ? r.key(t7) : r.pair(t7))}`), n.join("; ") + ".";
};
var ce2 = Me2(ot2(), 1);
var st2 = Symbol.for("vnopts.VALUE_NOT_EXIST");
var ve = Symbol.for("vnopts.VALUE_UNCHANGED");
var En2 = " ".repeat(2);
var gn2 = (e, t7, r) => {
  let { text: n, list: u } = r.normalizeExpectedResult(r.schemas[e].expected(r)), i = [];
  return n && i.push(Cn2(e, t7, n, r.descriptor)), u && i.push([Cn2(e, t7, u.title, r.descriptor)].concat(u.values.map((o) => yn2(o, r.loggerPrintWidth))).join(`
`)), An2(i, r.loggerPrintWidth);
};
function Cn2(e, t7, r, n) {
  return [`Invalid ${ce2.default.red(n.key(e))} value.`, `Expected ${ce2.default.blue(r)},`, `but received ${t7 === st2 ? ce2.default.gray("nothing") : ce2.default.red(n.value(t7))}.`].join(" ");
}
function yn2({ text: e, list: t7 }, r) {
  let n = [];
  return e && n.push(`- ${ce2.default.blue(e)}`), t7 && n.push([`- ${ce2.default.blue(t7.title)}:`].concat(t7.values.map((u) => yn2(u, r - En2.length).replace(/^|\n/g, `$&${En2}`))).join(`
`)), An2(n, r);
}
function An2(e, t7) {
  if (e.length === 1) return e[0];
  let [r, n] = e, [u, i] = e.map((o) => o.split(`
`, 1)[0].length);
  return u > t7 && u > i ? n : r;
}
var Kt2 = Me2(ot2(), 1);
var zt2 = [];
var vn2 = [];
function Gt2(e, t7) {
  if (e === t7) return 0;
  let r = e;
  e.length > t7.length && (e = t7, t7 = r);
  let n = e.length, u = t7.length;
  for (; n > 0 && e.charCodeAt(~-n) === t7.charCodeAt(~-u); ) n--, u--;
  let i = 0;
  for (; i < n && e.charCodeAt(i) === t7.charCodeAt(i); ) i++;
  if (n -= i, u -= i, n === 0) return u;
  let o, s, a, D, l = 0, p = 0;
  for (; l < n; ) vn2[l] = e.charCodeAt(i + l), zt2[l] = ++l;
  for (; p < u; ) for (o = t7.charCodeAt(i + p), a = p++, s = p, l = 0; l < n; l++) D = o === vn2[l] ? a : a + 1, a = zt2[l], s = zt2[l] = a > s ? D > s ? s + 1 : D : D > a ? a + 1 : D;
  return s;
}
var at2 = (e, t7, { descriptor: r, logger: n, schemas: u }) => {
  let i = [`Ignored unknown option ${Kt2.default.yellow(r.pair({ key: e, value: t7 }))}.`], o = Object.keys(u).sort().find((s) => Gt2(e, s) < 3);
  o && i.push(`Did you mean ${Kt2.default.blue(r.key(o))}?`), n.warn(i.join(" "));
};
var Fi2 = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
function mi2(e, t7) {
  let r = new e(t7), n = Object.create(r);
  for (let u of Fi2) u in t7 && (n[u] = hi2(t7[u], r, x.prototype[u].length));
  return n;
}
var x = class {
  static create(t7) {
    return mi2(this, t7);
  }
  constructor(t7) {
    this.name = t7.name;
  }
  default(t7) {
  }
  expected(t7) {
    return "nothing";
  }
  validate(t7, r) {
    return false;
  }
  deprecated(t7, r) {
    return false;
  }
  forward(t7, r) {
  }
  redirect(t7, r) {
  }
  overlap(t7, r, n) {
    return t7;
  }
  preprocess(t7, r) {
    return t7;
  }
  postprocess(t7, r) {
    return ve;
  }
};
function hi2(e, t7, r) {
  return typeof e == "function" ? (...n) => e(...n.slice(0, r - 1), t7, ...n.slice(r - 1)) : () => e;
}
var Dt2 = class extends x {
  constructor(t7) {
    super(t7), this._sourceName = t7.sourceName;
  }
  expected(t7) {
    return t7.schemas[this._sourceName].expected(t7);
  }
  validate(t7, r) {
    return r.schemas[this._sourceName].validate(t7, r);
  }
  redirect(t7, r) {
    return this._sourceName;
  }
};
var lt2 = class extends x {
  expected() {
    return "anything";
  }
  validate() {
    return true;
  }
};
var ct2 = class extends x {
  constructor({ valueSchema: t7, name: r = t7.name, ...n }) {
    super({ ...n, name: r }), this._valueSchema = t7;
  }
  expected(t7) {
    let { text: r, list: n } = t7.normalizeExpectedResult(this._valueSchema.expected(t7));
    return { text: r && `an array of ${r}`, list: n && { title: "an array of the following values", values: [{ list: n }] } };
  }
  validate(t7, r) {
    if (!Array.isArray(t7)) return false;
    let n = [];
    for (let u of t7) {
      let i = r.normalizeValidateResult(this._valueSchema.validate(u, r), u);
      i !== true && n.push(i.value);
    }
    return n.length === 0 ? true : { value: n };
  }
  deprecated(t7, r) {
    let n = [];
    for (let u of t7) {
      let i = r.normalizeDeprecatedResult(this._valueSchema.deprecated(u, r), u);
      i !== false && n.push(...i.map(({ value: o }) => ({ value: [o] })));
    }
    return n;
  }
  forward(t7, r) {
    let n = [];
    for (let u of t7) {
      let i = r.normalizeForwardResult(this._valueSchema.forward(u, r), u);
      n.push(...i.map(Bn2));
    }
    return n;
  }
  redirect(t7, r) {
    let n = [], u = [];
    for (let i of t7) {
      let o = r.normalizeRedirectResult(this._valueSchema.redirect(i, r), i);
      "remain" in o && n.push(o.remain), u.push(...o.redirect.map(Bn2));
    }
    return n.length === 0 ? { redirect: u } : { redirect: u, remain: n };
  }
  overlap(t7, r) {
    return t7.concat(r);
  }
};
function Bn2({ from: e, to: t7 }) {
  return { from: [e], to: t7 };
}
var ft2 = class extends x {
  expected() {
    return "true or false";
  }
  validate(t7) {
    return typeof t7 == "boolean";
  }
};
function _n2(e, t7) {
  let r = /* @__PURE__ */ Object.create(null);
  for (let n of e) {
    let u = n[t7];
    if (r[u]) throw new Error(`Duplicate ${t7} ${JSON.stringify(u)}`);
    r[u] = n;
  }
  return r;
}
function xn2(e, t7) {
  let r = /* @__PURE__ */ new Map();
  for (let n of e) {
    let u = n[t7];
    if (r.has(u)) throw new Error(`Duplicate ${t7} ${JSON.stringify(u)}`);
    r.set(u, n);
  }
  return r;
}
function bn2() {
  let e = /* @__PURE__ */ Object.create(null);
  return (t7) => {
    let r = JSON.stringify(t7);
    return e[r] ? true : (e[r] = true, false);
  };
}
function Nn2(e, t7) {
  let r = [], n = [];
  for (let u of e) t7(u) ? r.push(u) : n.push(u);
  return [r, n];
}
function On2(e) {
  return e === Math.floor(e);
}
function Sn2(e, t7) {
  if (e === t7) return 0;
  let r = typeof e, n = typeof t7, u = ["undefined", "object", "boolean", "number", "string"];
  return r !== n ? u.indexOf(r) - u.indexOf(n) : r !== "string" ? Number(e) - Number(t7) : e.localeCompare(t7);
}
function Tn2(e) {
  return (...t7) => {
    let r = e(...t7);
    return typeof r == "string" ? new Error(r) : r;
  };
}
function Jt(e) {
  return e === void 0 ? {} : e;
}
function qt2(e) {
  if (typeof e == "string") return { text: e };
  let { text: t7, list: r } = e;
  return Ei2((t7 || r) !== void 0, "Unexpected `expected` result, there should be at least one field."), r ? { text: t7, list: { title: r.title, values: r.values.map(qt2) } } : { text: t7 };
}
function Xt(e, t7) {
  return e === true ? true : e === false ? { value: t7 } : e;
}
function Qt2(e, t7, r = false) {
  return e === false ? false : e === true ? r ? true : [{ value: t7 }] : "value" in e ? [e] : e.length === 0 ? false : e;
}
function wn2(e, t7) {
  return typeof e == "string" || "key" in e ? { from: t7, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t7, to: e.to };
}
function dt(e, t7) {
  return e === void 0 ? [] : Array.isArray(e) ? e.map((r) => wn2(r, t7)) : [wn2(e, t7)];
}
function Zt(e, t7) {
  let r = dt(typeof e == "object" && "redirect" in e ? e.redirect : e, t7);
  return r.length === 0 ? { remain: t7, redirect: r } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: r } : { redirect: r };
}
function Ei2(e, t7) {
  if (!e) throw new Error(t7);
}
var pt2 = class extends x {
  constructor(t7) {
    super(t7), this._choices = xn2(t7.choices.map((r) => r && typeof r == "object" ? r : { value: r }), "value");
  }
  expected({ descriptor: t7 }) {
    let r = Array.from(this._choices.keys()).map((o) => this._choices.get(o)).filter(({ hidden: o }) => !o).map((o) => o.value).sort(Sn2).map(t7.value), n = r.slice(0, -2), u = r.slice(-2);
    return { text: n.concat(u.join(" or ")).join(", "), list: { title: "one of the following values", values: r } };
  }
  validate(t7) {
    return this._choices.has(t7);
  }
  deprecated(t7) {
    let r = this._choices.get(t7);
    return r && r.deprecated ? { value: t7 } : false;
  }
  forward(t7) {
    let r = this._choices.get(t7);
    return r ? r.forward : void 0;
  }
  redirect(t7) {
    let r = this._choices.get(t7);
    return r ? r.redirect : void 0;
  }
};
var Ft2 = class extends x {
  expected() {
    return "a number";
  }
  validate(t7, r) {
    return typeof t7 == "number";
  }
};
var mt2 = class extends Ft2 {
  expected() {
    return "an integer";
  }
  validate(t7, r) {
    return r.normalizeValidateResult(super.validate(t7, r), t7) === true && On2(t7);
  }
};
var je2 = class extends x {
  expected() {
    return "a string";
  }
  validate(t7) {
    return typeof t7 == "string";
  }
};
var kn2 = oe;
var Ln2 = at2;
var Pn2 = gn2;
var In2 = hn2;
var ht2 = class {
  constructor(t7, r) {
    let { logger: n = console, loggerPrintWidth: u = 80, descriptor: i = kn2, unknown: o = Ln2, invalid: s = Pn2, deprecated: a = In2, missing: D = () => false, required: l = () => false, preprocess: p = (d) => d, postprocess: f = () => ve } = r || {};
    this._utils = { descriptor: i, logger: n || { warn: () => {
    } }, loggerPrintWidth: u, schemas: _n2(t7, "name"), normalizeDefaultResult: Jt, normalizeExpectedResult: qt2, normalizeDeprecatedResult: Qt2, normalizeForwardResult: dt, normalizeRedirectResult: Zt, normalizeValidateResult: Xt }, this._unknownHandler = o, this._invalidHandler = Tn2(s), this._deprecatedHandler = a, this._identifyMissing = (d, c) => !(d in c) || D(d, c), this._identifyRequired = l, this._preprocess = p, this._postprocess = f, this.cleanHistory();
  }
  cleanHistory() {
    this._hasDeprecationWarned = bn2();
  }
  normalize(t7) {
    let r = {}, u = [this._preprocess(t7, this._utils)], i = () => {
      for (; u.length !== 0; ) {
        let o = u.shift(), s = this._applyNormalization(o, r);
        u.push(...s);
      }
    };
    i();
    for (let o of Object.keys(this._utils.schemas)) {
      let s = this._utils.schemas[o];
      if (!(o in r)) {
        let a = Jt(s.default(this._utils));
        "value" in a && u.push({ [o]: a.value });
      }
    }
    i();
    for (let o of Object.keys(this._utils.schemas)) {
      if (!(o in r)) continue;
      let s = this._utils.schemas[o], a = r[o], D = s.postprocess(a, this._utils);
      D !== ve && (this._applyValidation(D, o, s), r[o] = D);
    }
    return this._applyPostprocess(r), this._applyRequiredCheck(r), r;
  }
  _applyNormalization(t7, r) {
    let n = [], { knownKeys: u, unknownKeys: i } = this._partitionOptionKeys(t7);
    for (let o of u) {
      let s = this._utils.schemas[o], a = s.preprocess(t7[o], this._utils);
      this._applyValidation(a, o, s);
      let D = ({ from: d, to: c }) => {
        n.push(typeof c == "string" ? { [c]: d } : { [c.key]: c.value });
      }, l = ({ value: d, redirectTo: c }) => {
        let F = Qt2(s.deprecated(d, this._utils), a, true);
        if (F !== false) if (F === true) this._hasDeprecationWarned(o) || this._utils.logger.warn(this._deprecatedHandler(o, c, this._utils));
        else for (let { value: m2 } of F) {
          let h2 = { key: o, value: m2 };
          if (!this._hasDeprecationWarned(h2)) {
            let C = typeof c == "string" ? { key: c, value: m2 } : c;
            this._utils.logger.warn(this._deprecatedHandler(h2, C, this._utils));
          }
        }
      };
      dt(s.forward(a, this._utils), a).forEach(D);
      let f = Zt(s.redirect(a, this._utils), a);
      if (f.redirect.forEach(D), "remain" in f) {
        let d = f.remain;
        r[o] = o in r ? s.overlap(r[o], d, this._utils) : d, l({ value: d });
      }
      for (let { from: d, to: c } of f.redirect) l({ value: d, redirectTo: c });
    }
    for (let o of i) {
      let s = t7[o];
      this._applyUnknownHandler(o, s, r, (a, D) => {
        n.push({ [a]: D });
      });
    }
    return n;
  }
  _applyRequiredCheck(t7) {
    for (let r of Object.keys(this._utils.schemas)) if (this._identifyMissing(r, t7) && this._identifyRequired(r)) throw this._invalidHandler(r, st2, this._utils);
  }
  _partitionOptionKeys(t7) {
    let [r, n] = Nn2(Object.keys(t7).filter((u) => !this._identifyMissing(u, t7)), (u) => u in this._utils.schemas);
    return { knownKeys: r, unknownKeys: n };
  }
  _applyValidation(t7, r, n) {
    let u = Xt(n.validate(t7, this._utils), t7);
    if (u !== true) throw this._invalidHandler(r, u.value, this._utils);
  }
  _applyUnknownHandler(t7, r, n, u) {
    let i = this._unknownHandler(t7, r, this._utils);
    if (i) for (let o of Object.keys(i)) {
      if (this._identifyMissing(o, i)) continue;
      let s = i[o];
      o in this._utils.schemas ? u(o, s) : n[o] = s;
    }
  }
  _applyPostprocess(t7) {
    let r = this._postprocess(t7, this._utils);
    if (r !== ve) {
      if (r.delete) for (let n of r.delete) delete t7[n];
      if (r.override) {
        let { knownKeys: n, unknownKeys: u } = this._partitionOptionKeys(r.override);
        for (let i of n) {
          let o = r.override[i];
          this._applyValidation(o, i, this._utils.schemas[i]), t7[i] = o;
        }
        for (let i of u) {
          let o = r.override[i];
          this._applyUnknownHandler(i, o, t7, (s, a) => {
            let D = this._utils.schemas[s];
            this._applyValidation(a, s, D), t7[s] = a;
          });
        }
      }
    }
  }
};
var er;
function gi2(e, t7, { logger: r = false, isCLI: n = false, passThrough: u = false, FlagSchema: i, descriptor: o } = {}) {
  if (n) {
    if (!i) throw new Error("'FlagSchema' option is required.");
    if (!o) throw new Error("'descriptor' option is required.");
  } else o = oe;
  let s = u ? Array.isArray(u) ? (f, d) => u.includes(f) ? { [f]: d } : void 0 : (f, d) => ({ [f]: d }) : (f, d, c) => {
    let { _: F, ...m2 } = c.schemas;
    return at2(f, d, { ...c, schemas: m2 });
  }, a = yi2(t7, { isCLI: n, FlagSchema: i }), D = new ht2(a, { logger: r, unknown: s, descriptor: o }), l = r !== false;
  l && er && (D._hasDeprecationWarned = er);
  let p = D.normalize(e);
  return l && (er = D._hasDeprecationWarned), p;
}
function yi2(e, { isCLI: t7, FlagSchema: r }) {
  let n = [];
  t7 && n.push(lt2.create({ name: "_" }));
  for (let u of e) n.push(Ai2(u, { isCLI: t7, optionInfos: e, FlagSchema: r })), u.alias && t7 && n.push(Dt2.create({ name: u.alias, sourceName: u.name }));
  return n;
}
function Ai2(e, { isCLI: t7, optionInfos: r, FlagSchema: n }) {
  let { name: u } = e, i = { name: u }, o, s = {};
  switch (e.type) {
    case "int":
      o = mt2, t7 && (i.preprocess = Number);
      break;
    case "string":
      o = je2;
      break;
    case "choice":
      o = pt2, i.choices = e.choices.map((a) => a != null && a.redirect ? { ...a, redirect: { to: { key: e.name, value: a.redirect } } } : a);
      break;
    case "boolean":
      o = ft2;
      break;
    case "flag":
      o = n, i.flags = r.flatMap((a) => [a.alias, a.description && a.name, a.oppositeDescription && `no-${a.name}`].filter(Boolean));
      break;
    case "path":
      o = je2;
      break;
    default:
      throw new Error(`Unexpected type ${e.type}`);
  }
  if (e.exception ? i.validate = (a, D, l) => e.exception(a) || D.validate(a, l) : i.validate = (a, D, l) => a === void 0 || D.validate(a, l), e.redirect && (s.redirect = (a) => a ? { to: typeof e.redirect == "string" ? e.redirect : { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (s.deprecated = true), t7 && !e.array) {
    let a = i.preprocess || ((D) => D);
    i.preprocess = (D, l, p) => l.preprocess(a(Array.isArray(D) ? A(false, D, -1) : D), p);
  }
  return e.array ? ct2.create({ ...t7 ? { preprocess: (a) => Array.isArray(a) ? a : [a] } : {}, ...s, valueSchema: o.create(i) }) : o.create({ ...i, ...s });
}
var Rn2 = gi2;
var vi2 = (e, t7, r) => {
  if (!(e && t7 == null)) {
    if (t7.findLast) return t7.findLast(r);
    for (let n = t7.length - 1; n >= 0; n--) {
      let u = t7[n];
      if (r(u, n, t7)) return u;
    }
  }
};
var tr2 = vi2;
function rr2(e, t7) {
  if (!t7) throw new Error("parserName is required.");
  let r = tr2(false, e, (u) => u.parsers && Object.prototype.hasOwnProperty.call(u.parsers, t7));
  if (r) return r;
  let n = `Couldn't resolve parser "${t7}".`;
  throw n += " Plugins must be explicitly added to the standalone bundle.", new Re2(n);
}
function Yn2(e, t7) {
  if (!t7) throw new Error("astFormat is required.");
  let r = tr2(false, e, (u) => u.printers && Object.prototype.hasOwnProperty.call(u.printers, t7));
  if (r) return r;
  let n = `Couldn't find plugin for AST format "${t7}".`;
  throw n += " Plugins must be explicitly added to the standalone bundle.", new Re2(n);
}
function Et2({ plugins: e, parser: t7 }) {
  let r = rr2(e, t7);
  return nr2(r, t7);
}
function nr2(e, t7) {
  let r = e.parsers[t7];
  return typeof r == "function" ? r() : r;
}
function jn2(e, t7) {
  let r = e.printers[t7];
  return typeof r == "function" ? r() : r;
}
var Hn2 = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
async function Bi2(e, t7 = {}) {
  var p;
  let r = { ...e };
  if (!r.parser) if (r.filepath) {
    if (r.parser = pn2(r, { physicalFile: r.filepath }), !r.parser) throw new Ye2(`No parser could be inferred for file "${r.filepath}".`);
  } else throw new Ye2("No parser and no file path given, couldn't infer a parser.");
  let n = it2({ plugins: e.plugins, showDeprecated: true }).options, u = { ...Hn2, ...Object.fromEntries(n.filter((f) => f.default !== void 0).map((f) => [f.name, f.default])) }, i = rr2(r.plugins, r.parser), o = await nr2(i, r.parser);
  r.astFormat = o.astFormat, r.locEnd = o.locEnd, r.locStart = o.locStart;
  let s = (p = i.printers) != null && p[o.astFormat] ? i : Yn2(r.plugins, o.astFormat), a = await jn2(s, o.astFormat);
  r.printer = a;
  let D = s.defaultOptions ? Object.fromEntries(Object.entries(s.defaultOptions).filter(([, f]) => f !== void 0)) : {}, l = { ...u, ...D };
  for (let [f, d] of Object.entries(l)) (r[f] === null || r[f] === void 0) && (r[f] = d);
  return r.parser === "json" && (r.trailingComma = "none"), Rn2(r, n, { passThrough: Object.keys(Hn2), ...t7 });
}
var se2 = Bi2;
var Mn2 = Me2($n2(), 1);
async function bi2(e, t7) {
  let r = await Et2(t7), n = r.preprocess ? r.preprocess(e, t7) : e;
  t7.originalText = n;
  let u;
  try {
    u = await r.parse(n, t7, t7);
  } catch (i) {
    Ni2(i, e);
  }
  return { text: n, ast: u };
}
function Ni2(e, t7) {
  let { loc: r } = e;
  if (r) {
    let n = (0, Mn2.codeFrameColumns)(t7, r, { highlightCode: true });
    throw e.message += `
` + n, e.codeFrame = n, e;
  }
  throw e;
}
var fe2 = bi2;
async function Vn2(e, t7, r, n, u) {
  let { embeddedLanguageFormatting: i, printer: { embed: o, hasPrettierIgnore: s = () => false, getVisitorKeys: a } } = r;
  if (!o || i !== "auto") return;
  if (o.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/plugins#optional-embed");
  let D = q(o.getVisitorKeys ?? a), l = [];
  d();
  let p = e.stack;
  for (let { print: c, node: F, pathStack: m2 } of l) try {
    e.stack = m2;
    let h2 = await c(f, t7, e, r);
    h2 && u.set(F, h2);
  } catch (h2) {
    if (globalThis.PRETTIER_DEBUG) throw h2;
  }
  e.stack = p;
  function f(c, F) {
    return Oi2(c, F, r, n);
  }
  function d() {
    let { node: c } = e;
    if (c === null || typeof c != "object" || s(e)) return;
    for (let m2 of D(c)) Array.isArray(c[m2]) ? e.each(d, m2) : e.call(d, m2);
    let F = o(e, r);
    if (F) {
      if (typeof F == "function") {
        l.push({ print: F, node: c, pathStack: [...e.stack] });
        return;
      }
      u.set(c, F);
    }
  }
}
async function Oi2(e, t7, r, n) {
  let u = await se2({ ...r, ...t7, parentParser: r.parser, originalText: e }, { passThrough: true }), { ast: i } = await fe2(e, u), o = await n(i, u);
  return qe2(o);
}
function Si2(e, t7) {
  let { originalText: r, [Symbol.for("comments")]: n, locStart: u, locEnd: i, [Symbol.for("printedComments")]: o } = t7, { node: s } = e, a = u(s), D = i(s);
  for (let l of n) u(l) >= a && i(l) <= D && o.add(l);
  return r.slice(a, D);
}
var Un2 = Si2;
async function He2(e, t7) {
  ({ ast: e } = await ir2(e, t7));
  let r = /* @__PURE__ */ new Map(), n = new qr(e), u = cn2(t7), i = /* @__PURE__ */ new Map();
  await Vn2(n, s, t7, He2, i);
  let o = await zn2(n, t7, s, void 0, i);
  if (ln2(t7), t7.nodeAfterCursor && !t7.nodeBeforeCursor) return [Z2, o];
  if (t7.nodeBeforeCursor && !t7.nodeAfterCursor) return [o, Z2];
  return o;
  function s(D, l) {
    return D === void 0 || D === n ? a(l) : Array.isArray(D) ? n.call(() => a(l), ...D) : n.call(() => a(l), D);
  }
  function a(D) {
    u(n);
    let l = n.node;
    if (l == null) return "";
    let p = l && typeof l == "object" && D === void 0;
    if (p && r.has(l)) return r.get(l);
    let f = zn2(n, t7, s, D, i);
    return p && r.set(l, f), f;
  }
}
function zn2(e, t7, r, n, u) {
  var a;
  let { node: i } = e, { printer: o } = t7, s;
  switch ((a = o.hasPrettierIgnore) != null && a.call(o, e) ? s = Un2(e, t7) : u.has(i) ? s = u.get(i) : s = o.print(e, t7, r, n), i) {
    case t7.cursorNode:
      s = me2(s, (D) => [Z2, D, Z2]);
      break;
    case t7.nodeBeforeCursor:
      s = me2(s, (D) => [D, Z2]);
      break;
    case t7.nodeAfterCursor:
      s = me2(s, (D) => [Z2, D]);
      break;
  }
  return o.printComment && (!o.willPrintOwnComments || !o.willPrintOwnComments(e, t7)) && (s = Dn2(e, s, t7)), s;
}
async function ir2(e, t7) {
  let r = e.comments ?? [];
  t7[Symbol.for("comments")] = r, t7[Symbol.for("tokens")] = e.tokens ?? [], t7[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), on2(e, t7);
  let { printer: { preprocess: n } } = t7;
  return e = n ? await n(e, t7) : e, { ast: e, comments: r };
}
function Ti2(e, t7) {
  let { cursorOffset: r, locStart: n, locEnd: u } = t7, i = q(t7.printer.getVisitorKeys), o = (d) => n(d) <= r && u(d) >= r, s = e, a = [e];
  for (let d of Zr2(e, { getVisitorKeys: i, filter: o })) a.push(d), s = d;
  if (en2(s, { getVisitorKeys: i })) return { cursorNode: s };
  let D, l, p = -1, f = Number.POSITIVE_INFINITY;
  for (; a.length > 0 && (D === void 0 || l === void 0); ) {
    s = a.pop();
    let d = D !== void 0, c = l !== void 0;
    for (let F of ye2(s, { getVisitorKeys: i })) {
      if (!d) {
        let m2 = u(F);
        m2 <= r && m2 > p && (D = F, p = m2);
      }
      if (!c) {
        let m2 = n(F);
        m2 >= r && m2 < f && (l = F, f = m2);
      }
    }
  }
  return { nodeBeforeCursor: D, nodeAfterCursor: l };
}
var Gn2 = Ti2;
function ki2(e, t7) {
  let { printer: { massageAstNode: r, getVisitorKeys: n } } = t7;
  if (!r) return e;
  let u = q(n), i = r.ignoredProperties ?? /* @__PURE__ */ new Set();
  return o(e);
  function o(s, a) {
    if (!(s !== null && typeof s == "object")) return s;
    if (Array.isArray(s)) return s.map((f) => o(f, a)).filter(Boolean);
    let D = {}, l = new Set(u(s));
    for (let f in s) !Object.prototype.hasOwnProperty.call(s, f) || i.has(f) || (l.has(f) ? D[f] = o(s[f], s) : D[f] = s[f]);
    let p = r(s, D, a);
    if (p !== null) return p ?? D;
  }
}
var Kn2 = ki2;
var Li2 = (e, t7, r) => {
  if (!(e && t7 == null)) {
    if (t7.findLastIndex) return t7.findLastIndex(r);
    for (let n = t7.length - 1; n >= 0; n--) {
      let u = t7[n];
      if (r(u, n, t7)) return n;
    }
    return -1;
  }
};
var Jn2 = Li2;
var Pi2 = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify";
function Ii2(e, t7) {
  let r = [e.node, ...e.parentNodes], n = /* @__PURE__ */ new Set([t7.node, ...t7.parentNodes]);
  return r.find((u) => Qn2.has(u.type) && n.has(u));
}
function qn2(e) {
  let t7 = Jn2(false, e, (r) => r.type !== "Program" && r.type !== "File");
  return t7 === -1 ? e : e.slice(0, t7 + 1);
}
function Ri2(e, t7, { locStart: r, locEnd: n }) {
  let u = e.node, i = t7.node;
  if (u === i) return { startNode: u, endNode: i };
  let o = r(e.node);
  for (let a of qn2(t7.parentNodes)) if (r(a) >= o) i = a;
  else break;
  let s = n(t7.node);
  for (let a of qn2(e.parentNodes)) {
    if (n(a) <= s) u = a;
    else break;
    if (u === i) break;
  }
  return { startNode: u, endNode: i };
}
function or2(e, t7, r, n, u = [], i) {
  let { locStart: o, locEnd: s } = r, a = o(e), D = s(e);
  if (!(t7 > D || t7 < a || i === "rangeEnd" && t7 === a || i === "rangeStart" && t7 === D)) {
    for (let l of ut2(e, r)) {
      let p = or2(l, t7, r, n, [e, ...u], i);
      if (p) return p;
    }
    if (!n || n(e, u[0])) return { node: e, parentNodes: u };
  }
}
function Yi2(e, t7) {
  return t7 !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
}
var Qn2 = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]);
var ji2 = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
function Xn2(e, t7, r) {
  if (!t7) return false;
  switch (e.parser) {
    case "flow":
    case "babel":
    case "babel-flow":
    case "babel-ts":
    case "typescript":
    case "acorn":
    case "espree":
    case "meriyah":
    case "__babel_estree":
      return Yi2(t7.type, r == null ? void 0 : r.type);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return Qn2.has(t7.type);
    case "graphql":
      return ji2.has(t7.kind);
    case "vue":
      return t7.tag !== "root";
  }
  return false;
}
function Zn2(e, t7, r) {
  let { rangeStart: n, rangeEnd: u, locStart: i, locEnd: o } = t7;
  Pe2.ok(u > n);
  let s = e.slice(n, u).search(/\S/u), a = s === -1;
  if (!a) for (n += s; u > n && !/\S/u.test(e[u - 1]); --u) ;
  let D = or2(r, n, t7, (d, c) => Xn2(t7, d, c), [], "rangeStart"), l = a ? D : or2(r, u, t7, (d) => Xn2(t7, d), [], "rangeEnd");
  if (!D || !l) return { rangeStart: 0, rangeEnd: 0 };
  let p, f;
  if (Pi2(t7)) {
    let d = Ii2(D, l);
    p = d, f = d;
  } else ({ startNode: p, endNode: f } = Ri2(D, l, t7));
  return { rangeStart: Math.min(i(p), i(f)), rangeEnd: Math.max(o(p), o(f)) };
}
var nu = "\uFEFF";
var eu = Symbol("cursor");
async function uu(e, t7, r = 0) {
  if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: n, text: u } = await fe2(e, t7);
  t7.cursorOffset >= 0 && (t7 = { ...t7, ...Gn2(n, t7) });
  let i = await He2(n, t7, r);
  r > 0 && (i = Ze2([K2, i], r, t7.tabWidth));
  let o = Ce2(i, t7);
  if (r > 0) {
    let a = o.formatted.trim();
    o.cursorNodeStart !== void 0 && (o.cursorNodeStart -= o.formatted.indexOf(a), o.cursorNodeStart < 0 && (o.cursorNodeStart = 0, o.cursorNodeText = o.cursorNodeText.trimStart()), o.cursorNodeStart + o.cursorNodeText.length > a.length && (o.cursorNodeText = o.cursorNodeText.trimEnd())), o.formatted = a + be2(t7.endOfLine);
  }
  let s = t7[Symbol.for("comments")];
  if (t7.cursorOffset >= 0) {
    let a, D, l, p;
    if ((t7.cursorNode || t7.nodeBeforeCursor || t7.nodeAfterCursor) && o.cursorNodeText) if (l = o.cursorNodeStart, p = o.cursorNodeText, t7.cursorNode) a = t7.locStart(t7.cursorNode), D = u.slice(a, t7.locEnd(t7.cursorNode));
    else {
      if (!t7.nodeBeforeCursor && !t7.nodeAfterCursor) throw new Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");
      a = t7.nodeBeforeCursor ? t7.locEnd(t7.nodeBeforeCursor) : 0;
      let h2 = t7.nodeAfterCursor ? t7.locStart(t7.nodeAfterCursor) : u.length;
      D = u.slice(a, h2);
    }
    else a = 0, D = u, l = 0, p = o.formatted;
    let f = t7.cursorOffset - a;
    if (D === p) return { formatted: o.formatted, cursorOffset: l + f, comments: s };
    let d = D.split("");
    d.splice(f, 0, eu);
    let c = p.split(""), F = yr2(d, c), m2 = l;
    for (let h2 of F) if (h2.removed) {
      if (h2.value.includes(eu)) break;
    } else m2 += h2.count;
    return { formatted: o.formatted, cursorOffset: m2, comments: s };
  }
  return { formatted: o.formatted, cursorOffset: -1, comments: s };
}
async function Hi2(e, t7) {
  let { ast: r, text: n } = await fe2(e, t7), { rangeStart: u, rangeEnd: i } = Zn2(n, t7, r), o = n.slice(u, i), s = Math.min(u, n.lastIndexOf(`
`, u) + 1), a = n.slice(s, u).match(/^\s*/u)[0], D = ge2(a, t7.tabWidth), l = await uu(o, { ...t7, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t7.cursorOffset > u && t7.cursorOffset <= i ? t7.cursorOffset - u : -1, endOfLine: "lf" }, D), p = l.formatted.trimEnd(), { cursorOffset: f } = t7;
  f > i ? f += p.length - o.length : l.cursorOffset >= 0 && (f = l.cursorOffset + u);
  let d = n.slice(0, u) + p + n.slice(i);
  if (t7.endOfLine !== "lf") {
    let c = be2(t7.endOfLine);
    f >= 0 && c === `\r
` && (f += Nt2(d.slice(0, f), `
`)), d = ne2(false, d, `
`, c);
  }
  return { formatted: d, cursorOffset: f, comments: l.comments };
}
function sr2(e, t7, r) {
  return typeof t7 != "number" || Number.isNaN(t7) || t7 < 0 || t7 > e.length ? r : t7;
}
function tu(e, t7) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: u } = t7;
  return r = sr2(e, r, -1), n = sr2(e, n, 0), u = sr2(e, u, e.length), { ...t7, cursorOffset: r, rangeStart: n, rangeEnd: u };
}
function iu(e, t7) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: u, endOfLine: i } = tu(e, t7), o = e.charAt(0) === nu;
  if (o && (e = e.slice(1), r--, n--, u--), i === "auto" && (i = Ar2(e)), e.includes("\r")) {
    let s = (a) => Nt2(e.slice(0, Math.max(a, 0)), `\r
`);
    r -= s(r), n -= s(n), u -= s(u), e = vr2(e);
  }
  return { hasBOM: o, text: e, options: tu(e, { ...t7, cursorOffset: r, rangeStart: n, rangeEnd: u, endOfLine: i }) };
}
async function ru(e, t7) {
  let r = await Et2(t7);
  return !r.hasPragma || r.hasPragma(e);
}
async function ar2(e, t7) {
  let { hasBOM: r, text: n, options: u } = iu(e, await se2(t7));
  if (u.rangeStart >= u.rangeEnd && n !== "" || u.requirePragma && !await ru(n, u)) return { formatted: e, cursorOffset: t7.cursorOffset, comments: [] };
  let i;
  return u.rangeStart > 0 || u.rangeEnd < n.length ? i = await Hi2(n, u) : (!u.requirePragma && u.insertPragma && u.printer.insertPragma && !await ru(n, u) && (n = u.printer.insertPragma(n)), i = await uu(n, u)), r && (i.formatted = nu + i.formatted, i.cursorOffset >= 0 && i.cursorOffset++), i;
}
async function ou(e, t7, r) {
  let { text: n, options: u } = iu(e, await se2(t7)), i = await fe2(n, u);
  return r && (r.preprocessForPrint && (i.ast = await ir2(i.ast, u)), r.massage && (i.ast = Kn2(i.ast, u))), i;
}
async function su(e, t7) {
  t7 = await se2(t7);
  let r = await He2(e, t7);
  return Ce2(r, t7);
}
async function au(e, t7) {
  let r = Vr2(e), { formatted: n } = await ar2(r, { ...t7, parser: "__js_expression" });
  return n;
}
async function Du(e, t7) {
  t7 = await se2(t7);
  let { ast: r } = await fe2(e, t7);
  return He2(r, t7);
}
async function lu(e, t7) {
  return Ce2(e, await se2(t7));
}
var Dr2 = {};
vt2(Dr2, { builders: () => $i2, printer: () => Mi2, utils: () => Vi2 });
var $i2 = { join: Se2, line: Qe2, softline: $r2, hardline: K2, literalline: Xe2, group: kt2, conditionalGroup: Ir2, fill: Rr2, lineSuffix: Te2, lineSuffixBoundary: Hr, cursor: Z2, breakParent: he2, ifBreak: Yr2, trim: Wr2, indent: le2, indentIfBreak: jr2, align: De2, addAlignmentToDoc: Ze2, markAsRoot: Lr2, dedentToRoot: kr2, dedent: Pr2, hardlineWithoutBreakParent: ke2, literallineWithoutBreakParent: Lt2, label: Mr, concat: (e) => e };
var Mi2 = { printDocToString: Ce2 };
var Vi2 = { willBreak: xr2, traverseDoc: Fe2, findInDoc: Je2, mapDoc: Oe2, removeLines: Nr2, stripTrailingHardline: qe2, replaceEndOfLine: Or, canBreak: Sr2 };
var cu = "3.5.3";
var cr2 = {};
vt2(cr2, { addDanglingComment: () => re, addLeadingComment: () => ue, addTrailingComment: () => ie2, getAlignmentSize: () => ge2, getIndentSize: () => fu, getMaxContinuousCount: () => du, getNextNonSpaceNonCommentCharacter: () => pu, getNextNonSpaceNonCommentCharacterIndex: () => no, getPreferredQuote: () => mu, getStringWidth: () => Le2, hasNewline: () => V2, hasNewlineInRange: () => hu, hasSpaces: () => Eu, isNextLineEmpty: () => so, isNextLineEmptyAfterIndex: () => Ct2, isPreviousLineEmpty: () => io, makeString: () => Cu, skip: () => Ae2, skipEverythingButNewLine: () => nt2, skipInlineComment: () => Be2, skipNewline: () => W2, skipSpaces: () => S2, skipToLineEnd: () => rt2, skipTrailingComment: () => we2, skipWhitespace: () => tn });
function Ui2(e, t7) {
  if (t7 === false) return false;
  if (e.charAt(t7) === "/" && e.charAt(t7 + 1) === "*") {
    for (let r = t7 + 2; r < e.length; ++r) if (e.charAt(r) === "*" && e.charAt(r + 1) === "/") return r + 2;
  }
  return t7;
}
var Be2 = Ui2;
function zi2(e, t7) {
  return t7 === false ? false : e.charAt(t7) === "/" && e.charAt(t7 + 1) === "/" ? nt2(e, t7) : t7;
}
var we2 = zi2;
function Gi2(e, t7) {
  let r = null, n = t7;
  for (; n !== r; ) r = n, n = S2(e, n), n = Be2(e, n), n = we2(e, n), n = W2(e, n);
  return n;
}
var We = Gi2;
function Ki2(e, t7) {
  let r = null, n = t7;
  for (; n !== r; ) r = n, n = rt2(e, n), n = Be2(e, n), n = S2(e, n);
  return n = we2(e, n), n = W2(e, n), n !== false && V2(e, n);
}
var Ct2 = Ki2;
function Ji2(e, t7) {
  let r = e.lastIndexOf(`
`);
  return r === -1 ? 0 : ge2(e.slice(r + 1).match(/^[\t ]*/u)[0], t7);
}
var fu = Ji2;
function lr2(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function qi2(e, t7) {
  let r = e.match(new RegExp(`(${lr2(t7)})+`, "gu"));
  return r === null ? 0 : r.reduce((n, u) => Math.max(n, u.length / t7.length), 0);
}
var du = qi2;
function Xi2(e, t7) {
  let r = We(e, t7);
  return r === false ? "" : e.charAt(r);
}
var pu = Xi2;
var gt2 = "'";
var Fu = '"';
function Qi2(e, t7) {
  let r = t7 === true || t7 === gt2 ? gt2 : Fu, n = r === gt2 ? Fu : gt2, u = 0, i = 0;
  for (let o of e) o === r ? u++ : o === n && i++;
  return u > i ? n : r;
}
var mu = Qi2;
function Zi2(e, t7, r) {
  for (let n = t7; n < r; ++n) if (e.charAt(n) === `
`) return true;
  return false;
}
var hu = Zi2;
function eo(e, t7, r = {}) {
  return S2(e, r.backwards ? t7 - 1 : t7, r) !== t7;
}
var Eu = eo;
function to(e, t7, r) {
  let n = t7 === '"' ? "'" : '"', i = ne2(false, e, /\\(.)|(["'])/gsu, (o, s, a) => s === n ? s : a === t7 ? "\\" + a : a || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s) ? s : "\\" + s));
  return t7 + i + t7;
}
var Cu = to;
function ro(e, t7, r) {
  return We(e, r(t7));
}
function no(e, t7) {
  return arguments.length === 2 || typeof t7 == "number" ? We(e, t7) : ro(...arguments);
}
function uo(e, t7, r) {
  return Ie2(e, r(t7));
}
function io(e, t7) {
  return arguments.length === 2 || typeof t7 == "number" ? Ie2(e, t7) : uo(...arguments);
}
function oo(e, t7, r) {
  return Ct2(e, r(t7));
}
function so(e, t7) {
  return arguments.length === 2 || typeof t7 == "number" ? Ct2(e, t7) : oo(...arguments);
}
function de2(e, t7 = 1) {
  return async (...r) => {
    let n = r[t7] ?? {}, u = n.plugins ?? [];
    return r[t7] = { ...n, plugins: Array.isArray(u) ? u : Object.values(u) }, e(...r);
  };
}
var gu = de2(ar2);
async function yu(e, t7) {
  let { formatted: r } = await gu(e, { ...t7, cursorOffset: -1 });
  return r;
}
async function ao(e, t7) {
  return await yu(e, t7) === e;
}
var Do2 = de2(it2, 0);
var lo = { parse: de2(ou), formatAST: de2(su), formatDoc: de2(au), printToDoc: de2(Du), printDocToString: de2(lu) };

// ../../node_modules/.pnpm/@react-email+render@1.0.6_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@react-email/render/dist/node/index.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
import { Writable } from "node:stream";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var plainTextSelectors = [
  { selector: "img", format: "skip" },
  { selector: "#__react-email-preview", format: "skip" },
  {
    selector: "a",
    options: { linkBrackets: false }
  }
];
function recursivelyMapDoc(doc, callback) {
  if (Array.isArray(doc)) {
    return doc.map((innerDoc) => recursivelyMapDoc(innerDoc, callback));
  }
  if (typeof doc === "object") {
    if (doc.type === "group") {
      return __spreadProps(__spreadValues({}, doc), {
        contents: recursivelyMapDoc(doc.contents, callback),
        expandedStates: recursivelyMapDoc(
          doc.expandedStates,
          callback
        )
      });
    }
    if ("contents" in doc) {
      return __spreadProps(__spreadValues({}, doc), {
        contents: recursivelyMapDoc(doc.contents, callback)
      });
    }
    if ("parts" in doc) {
      return __spreadProps(__spreadValues({}, doc), {
        parts: recursivelyMapDoc(doc.parts, callback)
      });
    }
    if (doc.type === "if-break") {
      return __spreadProps(__spreadValues({}, doc), {
        breakContents: recursivelyMapDoc(doc.breakContents, callback),
        flatContents: recursivelyMapDoc(doc.flatContents, callback)
      });
    }
  }
  return callback(doc);
}
var modifiedHtml = __spreadValues({}, Gh);
if (modifiedHtml.printers) {
  const previousPrint = modifiedHtml.printers.html.print;
  modifiedHtml.printers.html.print = (path, options, print, args) => {
    const node = path.getNode();
    const rawPrintingResult = previousPrint(path, options, print, args);
    if (node.type === "ieConditionalComment") {
      const printingResult = recursivelyMapDoc(rawPrintingResult, (doc) => {
        if (typeof doc === "object" && doc.type === "line") {
          return doc.soft ? "" : " ";
        }
        return doc;
      });
      return printingResult;
    }
    return rawPrintingResult;
  };
}
var defaults = {
  endOfLine: "lf",
  tabWidth: 2,
  plugins: [modifiedHtml],
  bracketSameLine: true,
  parser: "html"
};
var pretty = (str, options = {}) => {
  return yu(str.replaceAll("\0", ""), __spreadValues(__spreadValues({}, defaults), options));
};
var decoder = new TextDecoder("utf-8");
var readStream = (stream) => __async(void 0, null, function* () {
  let result = "";
  if ("pipeTo" in stream) {
    const writableStream = new WritableStream({
      write(chunk) {
        result += decoder.decode(chunk);
      }
    });
    yield stream.pipeTo(writableStream);
  } else {
    const writable = new Writable({
      write(chunk, _encoding, callback) {
        result += decoder.decode(chunk);
        callback();
      }
    });
    stream.pipe(writable);
    yield new Promise((resolve, reject) => {
      writable.on("error", reject);
      writable.on("close", () => {
        resolve();
      });
    });
  }
  return result;
});
var render = (element, options) => __async(void 0, null, function* () {
  const suspendedElement = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, { children: element });
  const reactDOMServer = yield import("./server.node-GA7BTVPC.mjs");
  let html2;
  if (Object.hasOwn(reactDOMServer, "renderToReadableStream")) {
    html2 = yield readStream(
      yield reactDOMServer.renderToReadableStream(suspendedElement)
    );
  } else {
    yield new Promise((resolve, reject) => {
      const stream = reactDOMServer.renderToPipeableStream(suspendedElement, {
        onAllReady() {
          return __async(this, null, function* () {
            html2 = yield readStream(stream);
            resolve();
          });
        },
        onError(error) {
          reject(error);
        }
      });
    });
  }
  if (options == null ? void 0 : options.plainText) {
    return convert(html2, __spreadValues({
      selectors: plainTextSelectors
    }, options.htmlToTextOptions));
  }
  const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
  const document = `${doctype}${html2.replace(/<!DOCTYPE.*?>/, "")}`;
  if (options == null ? void 0 : options.pretty) {
    return pretty(document);
  }
  return document;
});
var renderAsync = (element, options) => {
  return render(element, options);
};
export {
  plainTextSelectors,
  render,
  renderAsync
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=node-6ZBV7FUL.mjs.map
