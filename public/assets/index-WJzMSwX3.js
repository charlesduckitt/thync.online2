(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const m of document.querySelectorAll('link[rel="modulepreload"]')) f(m);
  new MutationObserver((m) => {
    for (const p of m)
      if (p.type === "childList")
        for (const T of p.addedNodes)
          T.tagName === "LINK" && T.rel === "modulepreload" && f(T);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(m) {
    const p = {};
    return (
      m.integrity && (p.integrity = m.integrity),
      m.referrerPolicy && (p.referrerPolicy = m.referrerPolicy),
      m.crossOrigin === "use-credentials"
        ? (p.credentials = "include")
        : m.crossOrigin === "anonymous"
        ? (p.credentials = "omit")
        : (p.credentials = "same-origin"),
      p
    );
  }
  function f(m) {
    if (m.ep) return;
    m.ep = !0;
    const p = o(m);
    fetch(m.href, p);
  }
})();
function rh(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default")
    ? c.default
    : c;
}
var Of = { exports: {} },
  Rn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kd;
function P0() {
  if (kd) return Rn;
  kd = 1;
  var c = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function o(f, m, p) {
    var T = null;
    if (
      (p !== void 0 && (T = "" + p),
      m.key !== void 0 && (T = "" + m.key),
      "key" in m)
    ) {
      p = {};
      for (var D in m) D !== "key" && (p[D] = m[D]);
    } else p = m;
    return (
      (m = p.ref),
      { $$typeof: c, type: f, key: T, ref: m !== void 0 ? m : null, props: p }
    );
  }
  return (Rn.Fragment = r), (Rn.jsx = o), (Rn.jsxs = o), Rn;
}
var Wd;
function ey() {
  return Wd || ((Wd = 1), (Of.exports = P0())), Of.exports;
}
var d = ey(),
  _f = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fd;
function ty() {
  if (Fd) return F;
  Fd = 1;
  var c = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    m = Symbol.for("react.profiler"),
    p = Symbol.for("react.consumer"),
    T = Symbol.for("react.context"),
    D = Symbol.for("react.forward_ref"),
    x = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    w = Symbol.for("react.activity"),
    B = Symbol.iterator;
  function Z(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (B && v[B]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var K = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    k = Object.assign,
    Q = {};
  function X(v, C, H) {
    (this.props = v),
      (this.context = C),
      (this.refs = Q),
      (this.updater = H || K);
  }
  (X.prototype.isReactComponent = {}),
    (X.prototype.setState = function (v, C) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, v, C, "setState");
    }),
    (X.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    });
  function $() {}
  $.prototype = X.prototype;
  function L(v, C, H) {
    (this.props = v),
      (this.context = C),
      (this.refs = Q),
      (this.updater = H || K);
  }
  var de = (L.prototype = new $());
  (de.constructor = L), k(de, X.prototype), (de.isPureReactComponent = !0);
  var Ae = Array.isArray;
  function He() {}
  var ee = { H: null, A: null, T: null, S: null },
    Be = Object.prototype.hasOwnProperty;
  function Ne(v, C, H) {
    var Y = H.ref;
    return {
      $$typeof: c,
      type: v,
      key: C,
      ref: Y !== void 0 ? Y : null,
      props: H,
    };
  }
  function at(v, C) {
    return Ne(v.type, C, v.props);
  }
  function nt(v) {
    return typeof v == "object" && v !== null && v.$$typeof === c;
  }
  function We(v) {
    var C = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (H) {
        return C[H];
      })
    );
  }
  var Ml = /\/+/g;
  function Ut(v, C) {
    return typeof v == "object" && v !== null && v.key != null
      ? We("" + v.key)
      : C.toString(36);
  }
  function At(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (
          (typeof v.status == "string"
            ? v.then(He, He)
            : ((v.status = "pending"),
              v.then(
                function (C) {
                  v.status === "pending" &&
                    ((v.status = "fulfilled"), (v.value = C));
                },
                function (C) {
                  v.status === "pending" &&
                    ((v.status = "rejected"), (v.reason = C));
                }
              )),
          v.status)
        ) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function O(v, C, H, Y, I) {
    var le = typeof v;
    (le === "undefined" || le === "boolean") && (v = null);
    var oe = !1;
    if (v === null) oe = !0;
    else
      switch (le) {
        case "bigint":
        case "string":
        case "number":
          oe = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case c:
            case r:
              oe = !0;
              break;
            case j:
              return (oe = v._init), O(oe(v._payload), C, H, Y, I);
          }
      }
    if (oe)
      return (
        (I = I(v)),
        (oe = Y === "" ? "." + Ut(v, 0) : Y),
        Ae(I)
          ? ((H = ""),
            oe != null && (H = oe.replace(Ml, "$&/") + "/"),
            O(I, C, H, "", function (qa) {
              return qa;
            }))
          : I != null &&
            (nt(I) &&
              (I = at(
                I,
                H +
                  (I.key == null || (v && v.key === I.key)
                    ? ""
                    : ("" + I.key).replace(Ml, "$&/") + "/") +
                  oe
              )),
            C.push(I)),
        1
      );
    oe = 0;
    var Je = Y === "" ? "." : Y + ":";
    if (Ae(v))
      for (var Oe = 0; Oe < v.length; Oe++)
        (Y = v[Oe]), (le = Je + Ut(Y, Oe)), (oe += O(Y, C, H, le, I));
    else if (((Oe = Z(v)), typeof Oe == "function"))
      for (v = Oe.call(v), Oe = 0; !(Y = v.next()).done; )
        (Y = Y.value), (le = Je + Ut(Y, Oe++)), (oe += O(Y, C, H, le, I));
    else if (le === "object") {
      if (typeof v.then == "function") return O(At(v), C, H, Y, I);
      throw (
        ((C = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (C === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : C) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return oe;
  }
  function U(v, C, H) {
    if (v == null) return v;
    var Y = [],
      I = 0;
    return (
      O(v, Y, "", "", function (le) {
        return C.call(H, le, I++);
      }),
      Y
    );
  }
  function W(v) {
    if (v._status === -1) {
      var C = v._result;
      (C = C()),
        C.then(
          function (H) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = H));
          },
          function (H) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = H));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = C));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var ye =
      typeof reportError == "function"
        ? reportError
        : function (v) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var C = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof v == "object" &&
                  v !== null &&
                  typeof v.message == "string"
                    ? String(v.message)
                    : String(v),
                error: v,
              });
              if (!window.dispatchEvent(C)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", v);
              return;
            }
            console.error(v);
          },
    be = {
      map: U,
      forEach: function (v, C, H) {
        U(
          v,
          function () {
            C.apply(this, arguments);
          },
          H
        );
      },
      count: function (v) {
        var C = 0;
        return (
          U(v, function () {
            C++;
          }),
          C
        );
      },
      toArray: function (v) {
        return (
          U(v, function (C) {
            return C;
          }) || []
        );
      },
      only: function (v) {
        if (!nt(v))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return v;
      },
    };
  return (
    (F.Activity = w),
    (F.Children = be),
    (F.Component = X),
    (F.Fragment = o),
    (F.Profiler = m),
    (F.PureComponent = L),
    (F.StrictMode = f),
    (F.Suspense = x),
    (F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ee),
    (F.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (v) {
        return ee.H.useMemoCache(v);
      },
    }),
    (F.cache = function (v) {
      return function () {
        return v.apply(null, arguments);
      };
    }),
    (F.cacheSignal = function () {
      return null;
    }),
    (F.cloneElement = function (v, C, H) {
      if (v == null)
        throw Error(
          "The argument must be a React element, but you passed " + v + "."
        );
      var Y = k({}, v.props),
        I = v.key;
      if (C != null)
        for (le in (C.key !== void 0 && (I = "" + C.key), C))
          !Be.call(C, le) ||
            le === "key" ||
            le === "__self" ||
            le === "__source" ||
            (le === "ref" && C.ref === void 0) ||
            (Y[le] = C[le]);
      var le = arguments.length - 2;
      if (le === 1) Y.children = H;
      else if (1 < le) {
        for (var oe = Array(le), Je = 0; Je < le; Je++)
          oe[Je] = arguments[Je + 2];
        Y.children = oe;
      }
      return Ne(v.type, I, Y);
    }),
    (F.createContext = function (v) {
      return (
        (v = {
          $$typeof: T,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (v.Provider = v),
        (v.Consumer = { $$typeof: p, _context: v }),
        v
      );
    }),
    (F.createElement = function (v, C, H) {
      var Y,
        I = {},
        le = null;
      if (C != null)
        for (Y in (C.key !== void 0 && (le = "" + C.key), C))
          Be.call(C, Y) &&
            Y !== "key" &&
            Y !== "__self" &&
            Y !== "__source" &&
            (I[Y] = C[Y]);
      var oe = arguments.length - 2;
      if (oe === 1) I.children = H;
      else if (1 < oe) {
        for (var Je = Array(oe), Oe = 0; Oe < oe; Oe++)
          Je[Oe] = arguments[Oe + 2];
        I.children = Je;
      }
      if (v && v.defaultProps)
        for (Y in ((oe = v.defaultProps), oe))
          I[Y] === void 0 && (I[Y] = oe[Y]);
      return Ne(v, le, I);
    }),
    (F.createRef = function () {
      return { current: null };
    }),
    (F.forwardRef = function (v) {
      return { $$typeof: D, render: v };
    }),
    (F.isValidElement = nt),
    (F.lazy = function (v) {
      return { $$typeof: j, _payload: { _status: -1, _result: v }, _init: W };
    }),
    (F.memo = function (v, C) {
      return { $$typeof: g, type: v, compare: C === void 0 ? null : C };
    }),
    (F.startTransition = function (v) {
      var C = ee.T,
        H = {};
      ee.T = H;
      try {
        var Y = v(),
          I = ee.S;
        I !== null && I(H, Y),
          typeof Y == "object" &&
            Y !== null &&
            typeof Y.then == "function" &&
            Y.then(He, ye);
      } catch (le) {
        ye(le);
      } finally {
        C !== null && H.types !== null && (C.types = H.types), (ee.T = C);
      }
    }),
    (F.unstable_useCacheRefresh = function () {
      return ee.H.useCacheRefresh();
    }),
    (F.use = function (v) {
      return ee.H.use(v);
    }),
    (F.useActionState = function (v, C, H) {
      return ee.H.useActionState(v, C, H);
    }),
    (F.useCallback = function (v, C) {
      return ee.H.useCallback(v, C);
    }),
    (F.useContext = function (v) {
      return ee.H.useContext(v);
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (v, C) {
      return ee.H.useDeferredValue(v, C);
    }),
    (F.useEffect = function (v, C) {
      return ee.H.useEffect(v, C);
    }),
    (F.useEffectEvent = function (v) {
      return ee.H.useEffectEvent(v);
    }),
    (F.useId = function () {
      return ee.H.useId();
    }),
    (F.useImperativeHandle = function (v, C, H) {
      return ee.H.useImperativeHandle(v, C, H);
    }),
    (F.useInsertionEffect = function (v, C) {
      return ee.H.useInsertionEffect(v, C);
    }),
    (F.useLayoutEffect = function (v, C) {
      return ee.H.useLayoutEffect(v, C);
    }),
    (F.useMemo = function (v, C) {
      return ee.H.useMemo(v, C);
    }),
    (F.useOptimistic = function (v, C) {
      return ee.H.useOptimistic(v, C);
    }),
    (F.useReducer = function (v, C, H) {
      return ee.H.useReducer(v, C, H);
    }),
    (F.useRef = function (v) {
      return ee.H.useRef(v);
    }),
    (F.useState = function (v) {
      return ee.H.useState(v);
    }),
    (F.useSyncExternalStore = function (v, C, H) {
      return ee.H.useSyncExternalStore(v, C, H);
    }),
    (F.useTransition = function () {
      return ee.H.useTransition();
    }),
    (F.version = "19.2.0"),
    F
  );
}
var $d;
function Yf() {
  return $d || (($d = 1), (_f.exports = ty())), _f.exports;
}
var M = Yf();
const ly = rh(M);
var Df = { exports: {} },
  Cn = {},
  Rf = { exports: {} },
  Cf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Id;
function ay() {
  return (
    Id ||
      ((Id = 1),
      (function (c) {
        function r(O, U) {
          var W = O.length;
          O.push(U);
          e: for (; 0 < W; ) {
            var ye = (W - 1) >>> 1,
              be = O[ye];
            if (0 < m(be, U)) (O[ye] = U), (O[W] = be), (W = ye);
            else break e;
          }
        }
        function o(O) {
          return O.length === 0 ? null : O[0];
        }
        function f(O) {
          if (O.length === 0) return null;
          var U = O[0],
            W = O.pop();
          if (W !== U) {
            O[0] = W;
            e: for (var ye = 0, be = O.length, v = be >>> 1; ye < v; ) {
              var C = 2 * (ye + 1) - 1,
                H = O[C],
                Y = C + 1,
                I = O[Y];
              if (0 > m(H, W))
                Y < be && 0 > m(I, H)
                  ? ((O[ye] = I), (O[Y] = W), (ye = Y))
                  : ((O[ye] = H), (O[C] = W), (ye = C));
              else if (Y < be && 0 > m(I, W)) (O[ye] = I), (O[Y] = W), (ye = Y);
              else break e;
            }
          }
          return U;
        }
        function m(O, U) {
          var W = O.sortIndex - U.sortIndex;
          return W !== 0 ? W : O.id - U.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var p = performance;
          c.unstable_now = function () {
            return p.now();
          };
        } else {
          var T = Date,
            D = T.now();
          c.unstable_now = function () {
            return T.now() - D;
          };
        }
        var x = [],
          g = [],
          j = 1,
          w = null,
          B = 3,
          Z = !1,
          K = !1,
          k = !1,
          Q = !1,
          X = typeof setTimeout == "function" ? setTimeout : null,
          $ = typeof clearTimeout == "function" ? clearTimeout : null,
          L = typeof setImmediate < "u" ? setImmediate : null;
        function de(O) {
          for (var U = o(g); U !== null; ) {
            if (U.callback === null) f(g);
            else if (U.startTime <= O)
              f(g), (U.sortIndex = U.expirationTime), r(x, U);
            else break;
            U = o(g);
          }
        }
        function Ae(O) {
          if (((k = !1), de(O), !K))
            if (o(x) !== null) (K = !0), He || ((He = !0), We());
            else {
              var U = o(g);
              U !== null && At(Ae, U.startTime - O);
            }
        }
        var He = !1,
          ee = -1,
          Be = 5,
          Ne = -1;
        function at() {
          return Q ? !0 : !(c.unstable_now() - Ne < Be);
        }
        function nt() {
          if (((Q = !1), He)) {
            var O = c.unstable_now();
            Ne = O;
            var U = !0;
            try {
              e: {
                (K = !1), k && ((k = !1), $(ee), (ee = -1)), (Z = !0);
                var W = B;
                try {
                  t: {
                    for (
                      de(O), w = o(x);
                      w !== null && !(w.expirationTime > O && at());

                    ) {
                      var ye = w.callback;
                      if (typeof ye == "function") {
                        (w.callback = null), (B = w.priorityLevel);
                        var be = ye(w.expirationTime <= O);
                        if (((O = c.unstable_now()), typeof be == "function")) {
                          (w.callback = be), de(O), (U = !0);
                          break t;
                        }
                        w === o(x) && f(x), de(O);
                      } else f(x);
                      w = o(x);
                    }
                    if (w !== null) U = !0;
                    else {
                      var v = o(g);
                      v !== null && At(Ae, v.startTime - O), (U = !1);
                    }
                  }
                  break e;
                } finally {
                  (w = null), (B = W), (Z = !1);
                }
                U = void 0;
              }
            } finally {
              U ? We() : (He = !1);
            }
          }
        }
        var We;
        if (typeof L == "function")
          We = function () {
            L(nt);
          };
        else if (typeof MessageChannel < "u") {
          var Ml = new MessageChannel(),
            Ut = Ml.port2;
          (Ml.port1.onmessage = nt),
            (We = function () {
              Ut.postMessage(null);
            });
        } else
          We = function () {
            X(nt, 0);
          };
        function At(O, U) {
          ee = X(function () {
            O(c.unstable_now());
          }, U);
        }
        (c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (c.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Be = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return B;
          }),
          (c.unstable_next = function (O) {
            switch (B) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = B;
            }
            var W = B;
            B = U;
            try {
              return O();
            } finally {
              B = W;
            }
          }),
          (c.unstable_requestPaint = function () {
            Q = !0;
          }),
          (c.unstable_runWithPriority = function (O, U) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var W = B;
            B = O;
            try {
              return U();
            } finally {
              B = W;
            }
          }),
          (c.unstable_scheduleCallback = function (O, U, W) {
            var ye = c.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? ye + W : ye))
                : (W = ye),
              O)
            ) {
              case 1:
                var be = -1;
                break;
              case 2:
                be = 250;
                break;
              case 5:
                be = 1073741823;
                break;
              case 4:
                be = 1e4;
                break;
              default:
                be = 5e3;
            }
            return (
              (be = W + be),
              (O = {
                id: j++,
                callback: U,
                priorityLevel: O,
                startTime: W,
                expirationTime: be,
                sortIndex: -1,
              }),
              W > ye
                ? ((O.sortIndex = W),
                  r(g, O),
                  o(x) === null &&
                    O === o(g) &&
                    (k ? ($(ee), (ee = -1)) : (k = !0), At(Ae, W - ye)))
                : ((O.sortIndex = be),
                  r(x, O),
                  K || Z || ((K = !0), He || ((He = !0), We()))),
              O
            );
          }),
          (c.unstable_shouldYield = at),
          (c.unstable_wrapCallback = function (O) {
            var U = B;
            return function () {
              var W = B;
              B = U;
              try {
                return O.apply(this, arguments);
              } finally {
                B = W;
              }
            };
          });
      })(Cf)),
    Cf
  );
}
var Pd;
function ny() {
  return Pd || ((Pd = 1), (Rf.exports = ay())), Rf.exports;
}
var wf = { exports: {} },
  Ke = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eh;
function uy() {
  if (eh) return Ke;
  eh = 1;
  var c = Yf();
  function r(x) {
    var g = "https://react.dev/errors/" + x;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        g += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return (
      "Minified React error #" +
      x +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var f = {
      d: {
        f: o,
        r: function () {
          throw Error(r(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    m = Symbol.for("react.portal");
  function p(x, g, j) {
    var w =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: m,
      key: w == null ? null : "" + w,
      children: x,
      containerInfo: g,
      implementation: j,
    };
  }
  var T = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function D(x, g) {
    if (x === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (Ke.createPortal = function (x, g) {
      var j =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(r(299));
      return p(x, g, null, j);
    }),
    (Ke.flushSync = function (x) {
      var g = T.T,
        j = f.p;
      try {
        if (((T.T = null), (f.p = 2), x)) return x();
      } finally {
        (T.T = g), (f.p = j), f.d.f();
      }
    }),
    (Ke.preconnect = function (x, g) {
      typeof x == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        f.d.C(x, g));
    }),
    (Ke.prefetchDNS = function (x) {
      typeof x == "string" && f.d.D(x);
    }),
    (Ke.preinit = function (x, g) {
      if (typeof x == "string" && g && typeof g.as == "string") {
        var j = g.as,
          w = D(j, g.crossOrigin),
          B = typeof g.integrity == "string" ? g.integrity : void 0,
          Z = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        j === "style"
          ? f.d.S(x, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: w,
              integrity: B,
              fetchPriority: Z,
            })
          : j === "script" &&
            f.d.X(x, {
              crossOrigin: w,
              integrity: B,
              fetchPriority: Z,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Ke.preinitModule = function (x, g) {
      if (typeof x == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var j = D(g.as, g.crossOrigin);
            f.d.M(x, {
              crossOrigin: j,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && f.d.M(x);
    }),
    (Ke.preload = function (x, g) {
      if (
        typeof x == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var j = g.as,
          w = D(j, g.crossOrigin);
        f.d.L(x, j, {
          crossOrigin: w,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Ke.preloadModule = function (x, g) {
      if (typeof x == "string")
        if (g) {
          var j = D(g.as, g.crossOrigin);
          f.d.m(x, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: j,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else f.d.m(x);
    }),
    (Ke.requestFormReset = function (x) {
      f.d.r(x);
    }),
    (Ke.unstable_batchedUpdates = function (x, g) {
      return x(g);
    }),
    (Ke.useFormState = function (x, g, j) {
      return T.H.useFormState(x, g, j);
    }),
    (Ke.useFormStatus = function () {
      return T.H.useHostTransitionStatus();
    }),
    (Ke.version = "19.2.0"),
    Ke
  );
}
var th;
function iy() {
  if (th) return wf.exports;
  th = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return c(), (wf.exports = uy()), wf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lh;
function cy() {
  if (lh) return Cn;
  lh = 1;
  var c = ny(),
    r = Yf(),
    o = iy();
  function f(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function m(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function p(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function T(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function D(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function x(e) {
    if (p(e) !== e) throw Error(f(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = p(e)), t === null)) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return x(n), e;
          if (u === a) return x(n), t;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) (l = n), (a = u);
      else {
        for (var i = !1, s = n.child; s; ) {
          if (s === l) {
            (i = !0), (l = n), (a = u);
            break;
          }
          if (s === a) {
            (i = !0), (a = n), (l = u);
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = u.child; s; ) {
            if (s === l) {
              (i = !0), (l = u), (a = n);
              break;
            }
            if (s === a) {
              (i = !0), (a = u), (l = n);
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? e : t;
  }
  function j(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = j(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var w = Object.assign,
    B = Symbol.for("react.element"),
    Z = Symbol.for("react.transitional.element"),
    K = Symbol.for("react.portal"),
    k = Symbol.for("react.fragment"),
    Q = Symbol.for("react.strict_mode"),
    X = Symbol.for("react.profiler"),
    $ = Symbol.for("react.consumer"),
    L = Symbol.for("react.context"),
    de = Symbol.for("react.forward_ref"),
    Ae = Symbol.for("react.suspense"),
    He = Symbol.for("react.suspense_list"),
    ee = Symbol.for("react.memo"),
    Be = Symbol.for("react.lazy"),
    Ne = Symbol.for("react.activity"),
    at = Symbol.for("react.memo_cache_sentinel"),
    nt = Symbol.iterator;
  function We(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (nt && e[nt]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Ml = Symbol.for("react.client.reference");
  function Ut(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ml ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case k:
        return "Fragment";
      case X:
        return "Profiler";
      case Q:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case He:
        return "SuspenseList";
      case Ne:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case K:
          return "Portal";
        case L:
          return e.displayName || "Context";
        case $:
          return (e._context.displayName || "Context") + ".Consumer";
        case de:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ee:
          return (
            (t = e.displayName || null), t !== null ? t : Ut(e.type) || "Memo"
          );
        case Be:
          (t = e._payload), (e = e._init);
          try {
            return Ut(e(t));
          } catch {}
      }
    return null;
  }
  var At = Array.isArray,
    O = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = { pending: !1, data: null, method: null, action: null },
    ye = [],
    be = -1;
  function v(e) {
    return { current: e };
  }
  function C(e) {
    0 > be || ((e.current = ye[be]), (ye[be] = null), be--);
  }
  function H(e, t) {
    be++, (ye[be] = e.current), (e.current = t);
  }
  var Y = v(null),
    I = v(null),
    le = v(null),
    oe = v(null);
  function Je(e, t) {
    switch ((H(le, t), H(I, e), H(Y, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? vd(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = vd(t)), (e = pd(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    C(Y), H(Y, e);
  }
  function Oe() {
    C(Y), C(I), C(le);
  }
  function qa(e) {
    e.memoizedState !== null && H(oe, e);
    var t = Y.current,
      l = pd(t, e.type);
    t !== l && (H(I, e), H(Y, l));
  }
  function Yn(e) {
    I.current === e && (C(Y), C(I)),
      oe.current === e && (C(oe), (Mn._currentValue = W));
  }
  var ri, Kf;
  function Ol(e) {
    if (ri === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (ri = (t && t[1]) || ""),
          (Kf =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      ri +
      e +
      Kf
    );
  }
  var oi = !1;
  function di(e, t) {
    if (!e || oi) return "";
    oi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var R = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(R.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(R, []);
                } catch (A) {
                  var z = A;
                }
                Reflect.construct(e, [], R);
              } else {
                try {
                  R.call();
                } catch (A) {
                  z = A;
                }
                e.call(R.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                z = A;
              }
              (R = e()) &&
                typeof R.catch == "function" &&
                R.catch(function () {});
            }
          } catch (A) {
            if (A && z && typeof A.stack == "string") return [A.stack, z.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        s = u[1];
      if (i && s) {
        var h = i.split(`
`),
          E = s.split(`
`);
        for (
          n = a = 0;
          a < h.length && !h[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < E.length && !E[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === h.length || n === E.length)
          for (
            a = h.length - 1, n = E.length - 1;
            1 <= a && 0 <= n && h[a] !== E[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (h[a] !== E[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || h[a] !== E[n])) {
                  var N =
                    `
` + h[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", e.displayName)),
                    N
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (oi = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : "") ? Ol(l) : "";
  }
  function _h(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ol(e.type);
      case 16:
        return Ol("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Ol("Suspense Fallback")
          : Ol("Suspense");
      case 19:
        return Ol("SuspenseList");
      case 0:
      case 15:
        return di(e.type, !1);
      case 11:
        return di(e.type.render, !1);
      case 1:
        return di(e.type, !0);
      case 31:
        return Ol("Activity");
      default:
        return "";
    }
  }
  function Jf(e) {
    try {
      var t = "",
        l = null;
      do (t += _h(e, l)), (l = e), (e = e.return);
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var hi = Object.prototype.hasOwnProperty,
    mi = c.unstable_scheduleCallback,
    yi = c.unstable_cancelCallback,
    Dh = c.unstable_shouldYield,
    Rh = c.unstable_requestPaint,
    ut = c.unstable_now,
    Ch = c.unstable_getCurrentPriorityLevel,
    kf = c.unstable_ImmediatePriority,
    Wf = c.unstable_UserBlockingPriority,
    Gn = c.unstable_NormalPriority,
    wh = c.unstable_LowPriority,
    Ff = c.unstable_IdlePriority,
    Uh = c.log,
    Hh = c.unstable_setDisableYieldValue,
    La = null,
    it = null;
  function al(e) {
    if (
      (typeof Uh == "function" && Hh(e),
      it && typeof it.setStrictMode == "function")
    )
      try {
        it.setStrictMode(La, e);
      } catch {}
  }
  var ct = Math.clz32 ? Math.clz32 : Lh,
    Bh = Math.log,
    qh = Math.LN2;
  function Lh(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Bh(e) / qh) | 0)) | 0;
  }
  var Qn = 256,
    Xn = 262144,
    Zn = 4194304;
  function _l(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Vn(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      i = e.pingedLanes;
    e = e.warmLanes;
    var s = a & 134217727;
    return (
      s !== 0
        ? ((a = s & ~u),
          a !== 0
            ? (n = _l(a))
            : ((i &= s),
              i !== 0
                ? (n = _l(i))
                : l || ((l = s & ~e), l !== 0 && (n = _l(l)))))
        : ((s = a & ~u),
          s !== 0
            ? (n = _l(s))
            : i !== 0
            ? (n = _l(i))
            : l || ((l = a & ~e), l !== 0 && (n = _l(l)))),
      n === 0
        ? 0
        : t !== 0 &&
          t !== n &&
          (t & u) === 0 &&
          ((u = n & -n),
          (l = t & -t),
          u >= l || (u === 32 && (l & 4194048) !== 0))
        ? t
        : n
    );
  }
  function Ya(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Yh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function $f() {
    var e = Zn;
    return (Zn <<= 1), (Zn & 62914560) === 0 && (Zn = 4194304), e;
  }
  function gi(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Ga(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Gh(e, t, l, a, n, u) {
    var i = e.pendingLanes;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0);
    var s = e.entanglements,
      h = e.expirationTimes,
      E = e.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var N = 31 - ct(l),
        R = 1 << N;
      (s[N] = 0), (h[N] = -1);
      var z = E[N];
      if (z !== null)
        for (E[N] = null, N = 0; N < z.length; N++) {
          var A = z[N];
          A !== null && (A.lane &= -536870913);
        }
      l &= ~R;
    }
    a !== 0 && If(e, a, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~t));
  }
  function If(e, t, l) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var a = 31 - ct(t);
    (e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930));
  }
  function Pf(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - ct(l),
        n = 1 << a;
      (n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n);
    }
  }
  function es(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : vi(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function vi(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function pi(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ts() {
    var e = U.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Gd(e.type));
  }
  function ls(e, t) {
    var l = U.p;
    try {
      return (U.p = e), t();
    } finally {
      U.p = l;
    }
  }
  var nl = Math.random().toString(36).slice(2),
    Ge = "__reactFiber$" + nl,
    Fe = "__reactProps$" + nl,
    Fl = "__reactContainer$" + nl,
    bi = "__reactEvents$" + nl,
    Qh = "__reactListeners$" + nl,
    Xh = "__reactHandles$" + nl,
    as = "__reactResources$" + nl,
    Qa = "__reactMarker$" + nl;
  function xi(e) {
    delete e[Ge], delete e[Fe], delete e[bi], delete e[Qh], delete e[Xh];
  }
  function $l(e) {
    var t = e[Ge];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[Fl] || l[Ge])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = Ad(e); e !== null; ) {
            if ((l = e[Ge])) return l;
            e = Ad(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function Il(e) {
    if ((e = e[Ge] || e[Fl])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Xa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function Pl(e) {
    var t = e[as];
    return (
      t ||
        (t = e[as] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Le(e) {
    e[Qa] = !0;
  }
  var ns = new Set(),
    us = {};
  function Dl(e, t) {
    ea(e, t), ea(e + "Capture", t);
  }
  function ea(e, t) {
    for (us[e] = t, e = 0; e < t.length; e++) ns.add(t[e]);
  }
  var Zh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    is = {},
    cs = {};
  function Vh(e) {
    return hi.call(cs, e)
      ? !0
      : hi.call(is, e)
      ? !1
      : Zh.test(e)
      ? (cs[e] = !0)
      : ((is[e] = !0), !1);
  }
  function Kn(e, t, l) {
    if (Vh(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function Jn(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Ht(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  function yt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function fs(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Kh(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            (l = "" + i), u.call(this, i);
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (i) {
            l = "" + i;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Si(e) {
    if (!e._valueTracker) {
      var t = fs(e) ? "checked" : "value";
      e._valueTracker = Kh(e, t, "" + e[t]);
    }
  }
  function ss(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = fs(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function kn(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Jh = /[\n"\\]/g;
  function gt(e) {
    return e.replace(Jh, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ei(e, t, l, a, n, u, i, s) {
    (e.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (e.type = i)
        : e.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + yt(t))
          : e.value !== "" + yt(t) && (e.value = "" + yt(t))
        : (i !== "submit" && i !== "reset") || e.removeAttribute("value"),
      t != null
        ? Ti(e, i, yt(t))
        : l != null
        ? Ti(e, i, yt(l))
        : a != null && e.removeAttribute("value"),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (e.name = "" + yt(s))
        : e.removeAttribute("name");
  }
  function rs(e, t, l, a, n, u, i, s) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        Si(e);
        return;
      }
      (l = l != null ? "" + yt(l) : ""),
        (t = t != null ? "" + yt(t) : l),
        s || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = s ? e.checked : !!a),
      (e.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.name = i),
      Si(e);
  }
  function Ti(e, t, l) {
    (t === "number" && kn(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function ta(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        (n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + yt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          (e[n].selected = !0), a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function os(e, t, l) {
    if (
      t != null &&
      ((t = "" + yt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + yt(l) : "";
  }
  function ds(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (At(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (t = l);
    }
    (l = yt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a),
      Si(e);
  }
  function la(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var kh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function hs(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : a
      ? e.setProperty(t, l)
      : typeof l != "number" || l === 0 || kh.has(t)
      ? t === "float"
        ? (e.cssFloat = l)
        : (e[t] = ("" + l).trim())
      : (e[t] = l + "px");
  }
  function ms(e, t, l) {
    if (t != null && typeof t != "object") throw Error(f(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
            ? (e.cssFloat = "")
            : (e[a] = ""));
      for (var n in t)
        (a = t[n]), t.hasOwnProperty(n) && l[n] !== a && hs(e, n, a);
    } else for (var u in t) t.hasOwnProperty(u) && hs(e, u, t[u]);
  }
  function zi(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Wh = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Fh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Wn(e) {
    return Fh.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Bt() {}
  var Ai = null;
  function Ni(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var aa = null,
    na = null;
  function ys(e) {
    var t = Il(e);
    if (t && (e = t.stateNode)) {
      var l = e[Fe] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Ei(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + gt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[Fe] || null;
                if (!n) throw Error(f(90));
                Ei(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              (a = l[t]), a.form === e.form && ss(a);
          }
          break e;
        case "textarea":
          os(e, l.value, l.defaultValue);
          break e;
        case "select":
          (t = l.value), t != null && ta(e, !!l.multiple, t, !1);
      }
    }
  }
  var ji = !1;
  function gs(e, t, l) {
    if (ji) return e(t, l);
    ji = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((ji = !1),
        (aa !== null || na !== null) &&
          (Hu(), aa && ((t = aa), (e = na), (na = aa = null), ys(t), e)))
      )
        for (t = 0; t < e.length; t++) ys(e[t]);
    }
  }
  function Za(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[Fe] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(f(231, t, typeof l));
    return l;
  }
  var qt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Mi = !1;
  if (qt)
    try {
      var Va = {};
      Object.defineProperty(Va, "passive", {
        get: function () {
          Mi = !0;
        },
      }),
        window.addEventListener("test", Va, Va),
        window.removeEventListener("test", Va, Va);
    } catch {
      Mi = !1;
    }
  var ul = null,
    Oi = null,
    Fn = null;
  function vs() {
    if (Fn) return Fn;
    var e,
      t = Oi,
      l = t.length,
      a,
      n = "value" in ul ? ul.value : ul.textContent,
      u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var i = l - e;
    for (a = 1; a <= i && t[l - a] === n[u - a]; a++);
    return (Fn = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function $n(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function In() {
    return !0;
  }
  function ps() {
    return !1;
  }
  function $e(e) {
    function t(l, a, n, u, i) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null);
      for (var s in e)
        e.hasOwnProperty(s) && ((l = e[s]), (this[s] = l ? l(u) : u[s]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? In
          : ps),
        (this.isPropagationStopped = ps),
        this
      );
    }
    return (
      w(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = In));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = In));
        },
        persist: function () {},
        isPersistent: In,
      }),
      t
    );
  }
  var Rl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Pn = $e(Rl),
    Ka = w({}, Rl, { view: 0, detail: 0 }),
    $h = $e(Ka),
    _i,
    Di,
    Ja,
    eu = w({}, Ka, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ci,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Ja &&
              (Ja && e.type === "mousemove"
                ? ((_i = e.screenX - Ja.screenX), (Di = e.screenY - Ja.screenY))
                : (Di = _i = 0),
              (Ja = e)),
            _i);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Di;
      },
    }),
    bs = $e(eu),
    Ih = w({}, eu, { dataTransfer: 0 }),
    Ph = $e(Ih),
    em = w({}, Ka, { relatedTarget: 0 }),
    Ri = $e(em),
    tm = w({}, Rl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lm = $e(tm),
    am = w({}, Rl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    nm = $e(am),
    um = w({}, Rl, { data: 0 }),
    xs = $e(um),
    im = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    cm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    fm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function sm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = fm[e])
      ? !!t[e]
      : !1;
  }
  function Ci() {
    return sm;
  }
  var rm = w({}, Ka, {
      key: function (e) {
        if (e.key) {
          var t = im[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = $n(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? cm[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ci,
      charCode: function (e) {
        return e.type === "keypress" ? $n(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? $n(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    om = $e(rm),
    dm = w({}, eu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ss = $e(dm),
    hm = w({}, Ka, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ci,
    }),
    mm = $e(hm),
    ym = w({}, Rl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    gm = $e(ym),
    vm = w({}, eu, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    pm = $e(vm),
    bm = w({}, Rl, { newState: 0, oldState: 0 }),
    xm = $e(bm),
    Sm = [9, 13, 27, 32],
    wi = qt && "CompositionEvent" in window,
    ka = null;
  qt && "documentMode" in document && (ka = document.documentMode);
  var Em = qt && "TextEvent" in window && !ka,
    Es = qt && (!wi || (ka && 8 < ka && 11 >= ka)),
    Ts = " ",
    zs = !1;
  function As(e, t) {
    switch (e) {
      case "keyup":
        return Sm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ns(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var ua = !1;
  function Tm(e, t) {
    switch (e) {
      case "compositionend":
        return Ns(t);
      case "keypress":
        return t.which !== 32 ? null : ((zs = !0), Ts);
      case "textInput":
        return (e = t.data), e === Ts && zs ? null : e;
      default:
        return null;
    }
  }
  function zm(e, t) {
    if (ua)
      return e === "compositionend" || (!wi && As(e, t))
        ? ((e = vs()), (Fn = Oi = ul = null), (ua = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Es && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Am = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function js(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Am[e.type] : t === "textarea";
  }
  function Ms(e, t, l, a) {
    aa ? (na ? na.push(a) : (na = [a])) : (aa = a),
      (t = Xu(t, "onChange")),
      0 < t.length &&
        ((l = new Pn("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t }));
  }
  var Wa = null,
    Fa = null;
  function Nm(e) {
    od(e, 0);
  }
  function tu(e) {
    var t = Xa(e);
    if (ss(t)) return e;
  }
  function Os(e, t) {
    if (e === "change") return t;
  }
  var _s = !1;
  if (qt) {
    var Ui;
    if (qt) {
      var Hi = "oninput" in document;
      if (!Hi) {
        var Ds = document.createElement("div");
        Ds.setAttribute("oninput", "return;"),
          (Hi = typeof Ds.oninput == "function");
      }
      Ui = Hi;
    } else Ui = !1;
    _s = Ui && (!document.documentMode || 9 < document.documentMode);
  }
  function Rs() {
    Wa && (Wa.detachEvent("onpropertychange", Cs), (Fa = Wa = null));
  }
  function Cs(e) {
    if (e.propertyName === "value" && tu(Fa)) {
      var t = [];
      Ms(t, Fa, e, Ni(e)), gs(Nm, t);
    }
  }
  function jm(e, t, l) {
    e === "focusin"
      ? (Rs(), (Wa = t), (Fa = l), Wa.attachEvent("onpropertychange", Cs))
      : e === "focusout" && Rs();
  }
  function Mm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return tu(Fa);
  }
  function Om(e, t) {
    if (e === "click") return tu(t);
  }
  function _m(e, t) {
    if (e === "input" || e === "change") return tu(t);
  }
  function Dm(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ft = typeof Object.is == "function" ? Object.is : Dm;
  function $a(e, t) {
    if (ft(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!hi.call(t, n) || !ft(e[n], t[n])) return !1;
    }
    return !0;
  }
  function ws(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Us(e, t) {
    var l = ws(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ws(l);
    }
  }
  function Hs(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Hs(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Bs(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = kn(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = kn(e.document);
    }
    return t;
  }
  function Bi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Rm = qt && "documentMode" in document && 11 >= document.documentMode,
    ia = null,
    qi = null,
    Ia = null,
    Li = !1;
  function qs(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Li ||
      ia == null ||
      ia !== kn(a) ||
      ((a = ia),
      "selectionStart" in a && Bi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ia && $a(Ia, a)) ||
        ((Ia = a),
        (a = Xu(qi, "onSelect")),
        0 < a.length &&
          ((t = new Pn("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = ia))));
  }
  function Cl(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var ca = {
      animationend: Cl("Animation", "AnimationEnd"),
      animationiteration: Cl("Animation", "AnimationIteration"),
      animationstart: Cl("Animation", "AnimationStart"),
      transitionrun: Cl("Transition", "TransitionRun"),
      transitionstart: Cl("Transition", "TransitionStart"),
      transitioncancel: Cl("Transition", "TransitionCancel"),
      transitionend: Cl("Transition", "TransitionEnd"),
    },
    Yi = {},
    Ls = {};
  qt &&
    ((Ls = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ca.animationend.animation,
      delete ca.animationiteration.animation,
      delete ca.animationstart.animation),
    "TransitionEvent" in window || delete ca.transitionend.transition);
  function wl(e) {
    if (Yi[e]) return Yi[e];
    if (!ca[e]) return e;
    var t = ca[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in Ls) return (Yi[e] = t[l]);
    return e;
  }
  var Ys = wl("animationend"),
    Gs = wl("animationiteration"),
    Qs = wl("animationstart"),
    Cm = wl("transitionrun"),
    wm = wl("transitionstart"),
    Um = wl("transitioncancel"),
    Xs = wl("transitionend"),
    Zs = new Map(),
    Gi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Gi.push("scrollEnd");
  function Nt(e, t) {
    Zs.set(e, t), Dl(t, [e]);
  }
  var lu =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    vt = [],
    fa = 0,
    Qi = 0;
  function au() {
    for (var e = fa, t = (Qi = fa = 0); t < e; ) {
      var l = vt[t];
      vt[t++] = null;
      var a = vt[t];
      vt[t++] = null;
      var n = vt[t];
      vt[t++] = null;
      var u = vt[t];
      if (((vt[t++] = null), a !== null && n !== null)) {
        var i = a.pending;
        i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n);
      }
      u !== 0 && Vs(l, n, u);
    }
  }
  function nu(e, t, l, a) {
    (vt[fa++] = e),
      (vt[fa++] = t),
      (vt[fa++] = l),
      (vt[fa++] = a),
      (Qi |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a);
  }
  function Xi(e, t, l, a) {
    return nu(e, t, l, a), uu(e);
  }
  function Ul(e, t) {
    return nu(e, null, null, t), uu(e);
  }
  function Vs(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      (u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = u),
        (u = u.return);
    return e.tag === 3
      ? ((u = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - ct(l)),
          (e = u.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        u)
      : null;
  }
  function uu(e) {
    if (50 < Sn) throw ((Sn = 0), (Ic = null), Error(f(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var sa = {};
  function Hm(e, t, l, a) {
    (this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function st(e, t, l, a) {
    return new Hm(e, t, l, a);
  }
  function Zi(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Lt(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = st(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function Ks(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function iu(e, t, l, a, n, u) {
    var i = 0;
    if (((a = e), typeof e == "function")) Zi(e) && (i = 1);
    else if (typeof e == "string")
      i = G0(e, l, Y.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case Ne:
          return (e = st(31, l, t, n)), (e.elementType = Ne), (e.lanes = u), e;
        case k:
          return Hl(l.children, n, u, t);
        case Q:
          (i = 8), (n |= 24);
          break;
        case X:
          return (
            (e = st(12, l, t, n | 2)), (e.elementType = X), (e.lanes = u), e
          );
        case Ae:
          return (e = st(13, l, t, n)), (e.elementType = Ae), (e.lanes = u), e;
        case He:
          return (e = st(19, l, t, n)), (e.elementType = He), (e.lanes = u), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case L:
                i = 10;
                break e;
              case $:
                i = 9;
                break e;
              case de:
                i = 11;
                break e;
              case ee:
                i = 14;
                break e;
              case Be:
                (i = 16), (a = null);
                break e;
            }
          (i = 29),
            (l = Error(f(130, e === null ? "null" : typeof e, ""))),
            (a = null);
      }
    return (
      (t = st(i, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = u), t
    );
  }
  function Hl(e, t, l, a) {
    return (e = st(7, e, a, t)), (e.lanes = l), e;
  }
  function Vi(e, t, l) {
    return (e = st(6, e, null, t)), (e.lanes = l), e;
  }
  function Js(e) {
    var t = st(18, null, null, 0);
    return (t.stateNode = e), t;
  }
  function Ki(e, t, l) {
    return (
      (t = st(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var ks = new WeakMap();
  function pt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = ks.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: Jf(t) }), ks.set(e, t), t);
    }
    return { value: e, source: t, stack: Jf(t) };
  }
  var ra = [],
    oa = 0,
    cu = null,
    Pa = 0,
    bt = [],
    xt = 0,
    il = null,
    _t = 1,
    Dt = "";
  function Yt(e, t) {
    (ra[oa++] = Pa), (ra[oa++] = cu), (cu = e), (Pa = t);
  }
  function Ws(e, t, l) {
    (bt[xt++] = _t), (bt[xt++] = Dt), (bt[xt++] = il), (il = e);
    var a = _t;
    e = Dt;
    var n = 32 - ct(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var u = 32 - ct(t) + n;
    if (30 < u) {
      var i = n - (n % 5);
      (u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (_t = (1 << (32 - ct(t) + n)) | (l << n) | a),
        (Dt = u + e);
    } else (_t = (1 << u) | (l << n) | a), (Dt = e);
  }
  function Ji(e) {
    e.return !== null && (Yt(e, 1), Ws(e, 1, 0));
  }
  function ki(e) {
    for (; e === cu; )
      (cu = ra[--oa]), (ra[oa] = null), (Pa = ra[--oa]), (ra[oa] = null);
    for (; e === il; )
      (il = bt[--xt]),
        (bt[xt] = null),
        (Dt = bt[--xt]),
        (bt[xt] = null),
        (_t = bt[--xt]),
        (bt[xt] = null);
  }
  function Fs(e, t) {
    (bt[xt++] = _t),
      (bt[xt++] = Dt),
      (bt[xt++] = il),
      (_t = t.id),
      (Dt = t.overflow),
      (il = e);
  }
  var Qe = null,
    Se = null,
    ce = !1,
    cl = null,
    St = !1,
    Wi = Error(f(519));
  function fl(e) {
    var t = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (en(pt(t, e)), Wi);
  }
  function $s(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[Ge] = e), (t[Fe] = a), l)) {
      case "dialog":
        ne("cancel", t), ne("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ne("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Tn.length; l++) ne(Tn[l], t);
        break;
      case "source":
        ne("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ne("error", t), ne("load", t);
        break;
      case "details":
        ne("toggle", t);
        break;
      case "input":
        ne("invalid", t),
          rs(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          );
        break;
      case "select":
        ne("invalid", t);
        break;
      case "textarea":
        ne("invalid", t), ds(t, a.value, a.defaultValue, a.children);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      yd(t.textContent, l)
        ? (a.popover != null && (ne("beforetoggle", t), ne("toggle", t)),
          a.onScroll != null && ne("scroll", t),
          a.onScrollEnd != null && ne("scrollend", t),
          a.onClick != null && (t.onclick = Bt),
          (t = !0))
        : (t = !1),
      t || fl(e, !0);
  }
  function Is(e) {
    for (Qe = e.return; Qe; )
      switch (Qe.tag) {
        case 5:
        case 31:
        case 13:
          St = !1;
          return;
        case 27:
        case 3:
          St = !0;
          return;
        default:
          Qe = Qe.return;
      }
  }
  function da(e) {
    if (e !== Qe) return !1;
    if (!ce) return Is(e), (ce = !0), !1;
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || mf(e.type, e.memoizedProps))),
        (l = !l)),
      l && Se && fl(e),
      Is(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(f(317));
      Se = zd(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(f(317));
      Se = zd(e);
    } else
      t === 27
        ? ((t = Se), El(e.type) ? ((e = bf), (bf = null), (Se = e)) : (Se = t))
        : (Se = Qe ? Tt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Bl() {
    (Se = Qe = null), (ce = !1);
  }
  function Fi() {
    var e = cl;
    return (
      e !== null &&
        (tt === null ? (tt = e) : tt.push.apply(tt, e), (cl = null)),
      e
    );
  }
  function en(e) {
    cl === null ? (cl = [e]) : cl.push(e);
  }
  var $i = v(null),
    ql = null,
    Gt = null;
  function sl(e, t, l) {
    H($i, t._currentValue), (t._currentValue = l);
  }
  function Qt(e) {
    (e._currentValue = $i.current), C($i);
  }
  function Ii(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Pi(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var h = 0; h < t.length; h++)
            if (s.context === t[h]) {
              (u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                Ii(u.return, l, e),
                a || (i = null);
              break e;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(f(341));
        (i.lanes |= l),
          (u = i.alternate),
          u !== null && (u.lanes |= l),
          Ii(i, l, e),
          (i = null);
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            (n.return = i.return), (i = n);
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function ha(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(f(387));
        if (((i = i.memoizedProps), i !== null)) {
          var s = n.type;
          ft(n.pendingProps.value, i.value) ||
            (e !== null ? e.push(s) : (e = [s]));
        }
      } else if (n === oe.current) {
        if (((i = n.alternate), i === null)) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Mn) : (e = [Mn]));
      }
      n = n.return;
    }
    e !== null && Pi(t, e, l, a), (t.flags |= 262144);
  }
  function fu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ft(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ll(e) {
    (ql = e),
      (Gt = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Xe(e) {
    return Ps(ql, e);
  }
  function su(e, t) {
    return ql === null && Ll(e), Ps(e, t);
  }
  function Ps(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Gt === null)) {
      if (e === null) throw Error(f(308));
      (Gt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Gt = Gt.next = t;
    return l;
  }
  var Bm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                });
            };
          },
    qm = c.unstable_scheduleCallback,
    Lm = c.unstable_NormalPriority,
    Re = {
      $$typeof: L,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ec() {
    return { controller: new Bm(), data: new Map(), refCount: 0 };
  }
  function tn(e) {
    e.refCount--,
      e.refCount === 0 &&
        qm(Lm, function () {
          e.controller.abort();
        });
  }
  var ln = null,
    tc = 0,
    ma = 0,
    ya = null;
  function Ym(e, t) {
    if (ln === null) {
      var l = (ln = []);
      (tc = 0),
        (ma = nf()),
        (ya = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return tc++, t.then(er, er), t;
  }
  function er() {
    if (--tc === 0 && ln !== null) {
      ya !== null && (ya.status = "fulfilled");
      var e = ln;
      (ln = null), (ma = 0), (ya = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Gm(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var tr = O.S;
  O.S = function (e, t) {
    (Lo = ut()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Ym(e, t),
      tr !== null && tr(e, t);
  };
  var Yl = v(null);
  function lc() {
    var e = Yl.current;
    return e !== null ? e : xe.pooledCache;
  }
  function ru(e, t) {
    t === null ? H(Yl, Yl.current) : H(Yl, t.pool);
  }
  function lr() {
    var e = lc();
    return e === null ? null : { parent: Re._currentValue, pool: e };
  }
  var ga = Error(f(460)),
    ac = Error(f(474)),
    ou = Error(f(542)),
    du = { then: function () {} };
  function ar(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function nr(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(Bt, Bt), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), ir(e), e);
      default:
        if (typeof t.status == "string") t.then(Bt, Bt);
        else {
          if (((e = xe), e !== null && 100 < e.shellSuspendCounter))
            throw Error(f(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), ir(e), e);
        }
        throw ((Ql = t), ga);
    }
  }
  function Gl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((Ql = l), ga)
        : l;
    }
  }
  var Ql = null;
  function ur() {
    if (Ql === null) throw Error(f(459));
    var e = Ql;
    return (Ql = null), e;
  }
  function ir(e) {
    if (e === ga || e === ou) throw Error(f(483));
  }
  var va = null,
    an = 0;
  function hu(e) {
    var t = an;
    return (an += 1), va === null && (va = []), nr(va, e, t);
  }
  function nn(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function mu(e, t) {
    throw t.$$typeof === B
      ? Error(f(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          f(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function cr(e) {
    function t(b, y) {
      if (e) {
        var S = b.deletions;
        S === null ? ((b.deletions = [y]), (b.flags |= 16)) : S.push(y);
      }
    }
    function l(b, y) {
      if (!e) return null;
      for (; y !== null; ) t(b, y), (y = y.sibling);
      return null;
    }
    function a(b) {
      for (var y = new Map(); b !== null; )
        b.key !== null ? y.set(b.key, b) : y.set(b.index, b), (b = b.sibling);
      return y;
    }
    function n(b, y) {
      return (b = Lt(b, y)), (b.index = 0), (b.sibling = null), b;
    }
    function u(b, y, S) {
      return (
        (b.index = S),
        e
          ? ((S = b.alternate),
            S !== null
              ? ((S = S.index), S < y ? ((b.flags |= 67108866), y) : S)
              : ((b.flags |= 67108866), y))
          : ((b.flags |= 1048576), y)
      );
    }
    function i(b) {
      return e && b.alternate === null && (b.flags |= 67108866), b;
    }
    function s(b, y, S, _) {
      return y === null || y.tag !== 6
        ? ((y = Vi(S, b.mode, _)), (y.return = b), y)
        : ((y = n(y, S)), (y.return = b), y);
    }
    function h(b, y, S, _) {
      var V = S.type;
      return V === k
        ? N(b, y, S.props.children, _, S.key)
        : y !== null &&
          (y.elementType === V ||
            (typeof V == "object" &&
              V !== null &&
              V.$$typeof === Be &&
              Gl(V) === y.type))
        ? ((y = n(y, S.props)), nn(y, S), (y.return = b), y)
        : ((y = iu(S.type, S.key, S.props, null, b.mode, _)),
          nn(y, S),
          (y.return = b),
          y);
    }
    function E(b, y, S, _) {
      return y === null ||
        y.tag !== 4 ||
        y.stateNode.containerInfo !== S.containerInfo ||
        y.stateNode.implementation !== S.implementation
        ? ((y = Ki(S, b.mode, _)), (y.return = b), y)
        : ((y = n(y, S.children || [])), (y.return = b), y);
    }
    function N(b, y, S, _, V) {
      return y === null || y.tag !== 7
        ? ((y = Hl(S, b.mode, _, V)), (y.return = b), y)
        : ((y = n(y, S)), (y.return = b), y);
    }
    function R(b, y, S) {
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return (y = Vi("" + y, b.mode, S)), (y.return = b), y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Z:
            return (
              (S = iu(y.type, y.key, y.props, null, b.mode, S)),
              nn(S, y),
              (S.return = b),
              S
            );
          case K:
            return (y = Ki(y, b.mode, S)), (y.return = b), y;
          case Be:
            return (y = Gl(y)), R(b, y, S);
        }
        if (At(y) || We(y))
          return (y = Hl(y, b.mode, S, null)), (y.return = b), y;
        if (typeof y.then == "function") return R(b, hu(y), S);
        if (y.$$typeof === L) return R(b, su(b, y), S);
        mu(b, y);
      }
      return null;
    }
    function z(b, y, S, _) {
      var V = y !== null ? y.key : null;
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return V !== null ? null : s(b, y, "" + S, _);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Z:
            return S.key === V ? h(b, y, S, _) : null;
          case K:
            return S.key === V ? E(b, y, S, _) : null;
          case Be:
            return (S = Gl(S)), z(b, y, S, _);
        }
        if (At(S) || We(S)) return V !== null ? null : N(b, y, S, _, null);
        if (typeof S.then == "function") return z(b, y, hu(S), _);
        if (S.$$typeof === L) return z(b, y, su(b, S), _);
        mu(b, S);
      }
      return null;
    }
    function A(b, y, S, _, V) {
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return (b = b.get(S) || null), s(y, b, "" + _, V);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Z:
            return (
              (b = b.get(_.key === null ? S : _.key) || null), h(y, b, _, V)
            );
          case K:
            return (
              (b = b.get(_.key === null ? S : _.key) || null), E(y, b, _, V)
            );
          case Be:
            return (_ = Gl(_)), A(b, y, S, _, V);
        }
        if (At(_) || We(_)) return (b = b.get(S) || null), N(y, b, _, V, null);
        if (typeof _.then == "function") return A(b, y, S, hu(_), V);
        if (_.$$typeof === L) return A(b, y, S, su(y, _), V);
        mu(y, _);
      }
      return null;
    }
    function q(b, y, S, _) {
      for (
        var V = null, fe = null, G = y, te = (y = 0), ie = null;
        G !== null && te < S.length;
        te++
      ) {
        G.index > te ? ((ie = G), (G = null)) : (ie = G.sibling);
        var se = z(b, G, S[te], _);
        if (se === null) {
          G === null && (G = ie);
          break;
        }
        e && G && se.alternate === null && t(b, G),
          (y = u(se, y, te)),
          fe === null ? (V = se) : (fe.sibling = se),
          (fe = se),
          (G = ie);
      }
      if (te === S.length) return l(b, G), ce && Yt(b, te), V;
      if (G === null) {
        for (; te < S.length; te++)
          (G = R(b, S[te], _)),
            G !== null &&
              ((y = u(G, y, te)),
              fe === null ? (V = G) : (fe.sibling = G),
              (fe = G));
        return ce && Yt(b, te), V;
      }
      for (G = a(G); te < S.length; te++)
        (ie = A(G, b, te, S[te], _)),
          ie !== null &&
            (e &&
              ie.alternate !== null &&
              G.delete(ie.key === null ? te : ie.key),
            (y = u(ie, y, te)),
            fe === null ? (V = ie) : (fe.sibling = ie),
            (fe = ie));
      return (
        e &&
          G.forEach(function (jl) {
            return t(b, jl);
          }),
        ce && Yt(b, te),
        V
      );
    }
    function J(b, y, S, _) {
      if (S == null) throw Error(f(151));
      for (
        var V = null, fe = null, G = y, te = (y = 0), ie = null, se = S.next();
        G !== null && !se.done;
        te++, se = S.next()
      ) {
        G.index > te ? ((ie = G), (G = null)) : (ie = G.sibling);
        var jl = z(b, G, se.value, _);
        if (jl === null) {
          G === null && (G = ie);
          break;
        }
        e && G && jl.alternate === null && t(b, G),
          (y = u(jl, y, te)),
          fe === null ? (V = jl) : (fe.sibling = jl),
          (fe = jl),
          (G = ie);
      }
      if (se.done) return l(b, G), ce && Yt(b, te), V;
      if (G === null) {
        for (; !se.done; te++, se = S.next())
          (se = R(b, se.value, _)),
            se !== null &&
              ((y = u(se, y, te)),
              fe === null ? (V = se) : (fe.sibling = se),
              (fe = se));
        return ce && Yt(b, te), V;
      }
      for (G = a(G); !se.done; te++, se = S.next())
        (se = A(G, b, te, se.value, _)),
          se !== null &&
            (e &&
              se.alternate !== null &&
              G.delete(se.key === null ? te : se.key),
            (y = u(se, y, te)),
            fe === null ? (V = se) : (fe.sibling = se),
            (fe = se));
      return (
        e &&
          G.forEach(function (I0) {
            return t(b, I0);
          }),
        ce && Yt(b, te),
        V
      );
    }
    function pe(b, y, S, _) {
      if (
        (typeof S == "object" &&
          S !== null &&
          S.type === k &&
          S.key === null &&
          (S = S.props.children),
        typeof S == "object" && S !== null)
      ) {
        switch (S.$$typeof) {
          case Z:
            e: {
              for (var V = S.key; y !== null; ) {
                if (y.key === V) {
                  if (((V = S.type), V === k)) {
                    if (y.tag === 7) {
                      l(b, y.sibling),
                        (_ = n(y, S.props.children)),
                        (_.return = b),
                        (b = _);
                      break e;
                    }
                  } else if (
                    y.elementType === V ||
                    (typeof V == "object" &&
                      V !== null &&
                      V.$$typeof === Be &&
                      Gl(V) === y.type)
                  ) {
                    l(b, y.sibling),
                      (_ = n(y, S.props)),
                      nn(_, S),
                      (_.return = b),
                      (b = _);
                    break e;
                  }
                  l(b, y);
                  break;
                } else t(b, y);
                y = y.sibling;
              }
              S.type === k
                ? ((_ = Hl(S.props.children, b.mode, _, S.key)),
                  (_.return = b),
                  (b = _))
                : ((_ = iu(S.type, S.key, S.props, null, b.mode, _)),
                  nn(_, S),
                  (_.return = b),
                  (b = _));
            }
            return i(b);
          case K:
            e: {
              for (V = S.key; y !== null; ) {
                if (y.key === V)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === S.containerInfo &&
                    y.stateNode.implementation === S.implementation
                  ) {
                    l(b, y.sibling),
                      (_ = n(y, S.children || [])),
                      (_.return = b),
                      (b = _);
                    break e;
                  } else {
                    l(b, y);
                    break;
                  }
                else t(b, y);
                y = y.sibling;
              }
              (_ = Ki(S, b.mode, _)), (_.return = b), (b = _);
            }
            return i(b);
          case Be:
            return (S = Gl(S)), pe(b, y, S, _);
        }
        if (At(S)) return q(b, y, S, _);
        if (We(S)) {
          if (((V = We(S)), typeof V != "function")) throw Error(f(150));
          return (S = V.call(S)), J(b, y, S, _);
        }
        if (typeof S.then == "function") return pe(b, y, hu(S), _);
        if (S.$$typeof === L) return pe(b, y, su(b, S), _);
        mu(b, S);
      }
      return (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
        ? ((S = "" + S),
          y !== null && y.tag === 6
            ? (l(b, y.sibling), (_ = n(y, S)), (_.return = b), (b = _))
            : (l(b, y), (_ = Vi(S, b.mode, _)), (_.return = b), (b = _)),
          i(b))
        : l(b, y);
    }
    return function (b, y, S, _) {
      try {
        an = 0;
        var V = pe(b, y, S, _);
        return (va = null), V;
      } catch (G) {
        if (G === ga || G === ou) throw G;
        var fe = st(29, G, null, b.mode);
        return (fe.lanes = _), (fe.return = b), fe;
      } finally {
      }
    };
  }
  var Xl = cr(!0),
    fr = cr(!1),
    rl = !1;
  function nc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function uc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function ol(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function dl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (re & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = uu(e)),
        Vs(e, null, l),
        t
      );
    }
    return nu(e, a, t, l), uu(e);
  }
  function un(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), Pf(e, l);
    }
  }
  function ic(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          u === null ? (n = u = i) : (u = u.next = i), (l = l.next);
        } while (l !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t);
  }
  var cc = !1;
  function cn() {
    if (cc) {
      var e = ya;
      if (e !== null) throw e;
    }
  }
  function fn(e, t, l, a) {
    cc = !1;
    var n = e.updateQueue;
    rl = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var h = s,
        E = h.next;
      (h.next = null), i === null ? (u = E) : (i.next = E), (i = h);
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (s = N.lastBaseUpdate),
        s !== i &&
          (s === null ? (N.firstBaseUpdate = E) : (s.next = E),
          (N.lastBaseUpdate = h)));
    }
    if (u !== null) {
      var R = n.baseState;
      (i = 0), (N = E = h = null), (s = u);
      do {
        var z = s.lane & -536870913,
          A = z !== s.lane;
        if (A ? (ue & z) === z : (a & z) === z) {
          z !== 0 && z === ma && (cc = !0),
            N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var q = e,
              J = s;
            z = t;
            var pe = l;
            switch (J.tag) {
              case 1:
                if (((q = J.payload), typeof q == "function")) {
                  R = q.call(pe, R, z);
                  break e;
                }
                R = q;
                break e;
              case 3:
                q.flags = (q.flags & -65537) | 128;
              case 0:
                if (
                  ((q = J.payload),
                  (z = typeof q == "function" ? q.call(pe, R, z) : q),
                  z == null)
                )
                  break e;
                R = w({}, R, z);
                break e;
              case 2:
                rl = !0;
            }
          }
          (z = s.callback),
            z !== null &&
              ((e.flags |= 64),
              A && (e.flags |= 8192),
              (A = n.callbacks),
              A === null ? (n.callbacks = [z]) : A.push(z));
        } else
          (A = {
            lane: z,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            N === null ? ((E = N = A), (h = R)) : (N = N.next = A),
            (i |= z);
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          (A = s),
            (s = A.next),
            (A.next = null),
            (n.lastBaseUpdate = A),
            (n.shared.pending = null);
        }
      } while (!0);
      N === null && (h = R),
        (n.baseState = h),
        (n.firstBaseUpdate = E),
        (n.lastBaseUpdate = N),
        u === null && (n.shared.lanes = 0),
        (vl |= i),
        (e.lanes = i),
        (e.memoizedState = R);
    }
  }
  function sr(e, t) {
    if (typeof e != "function") throw Error(f(191, e));
    e.call(t);
  }
  function rr(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) sr(l[e], t);
  }
  var pa = v(null),
    yu = v(0);
  function or(e, t) {
    (e = $t), H(yu, e), H(pa, t), ($t = e | t.baseLanes);
  }
  function fc() {
    H(yu, $t), H(pa, pa.current);
  }
  function sc() {
    ($t = yu.current), C(pa), C(yu);
  }
  var rt = v(null),
    Et = null;
  function hl(e) {
    var t = e.alternate;
    H(_e, _e.current & 1),
      H(rt, e),
      Et === null &&
        (t === null || pa.current !== null || t.memoizedState !== null) &&
        (Et = e);
  }
  function rc(e) {
    H(_e, _e.current), H(rt, e), Et === null && (Et = e);
  }
  function dr(e) {
    e.tag === 22
      ? (H(_e, _e.current), H(rt, e), Et === null && (Et = e))
      : ml();
  }
  function ml() {
    H(_e, _e.current), H(rt, rt.current);
  }
  function ot(e) {
    C(rt), Et === e && (Et = null), C(_e);
  }
  var _e = v(0);
  function gu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || vf(l) || pf(l)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Xt = 0,
    P = null,
    ge = null,
    Ce = null,
    vu = !1,
    ba = !1,
    Zl = !1,
    pu = 0,
    sn = 0,
    xa = null,
    Qm = 0;
  function je() {
    throw Error(f(321));
  }
  function oc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!ft(e[l], t[l])) return !1;
    return !0;
  }
  function dc(e, t, l, a, n, u) {
    return (
      (Xt = u),
      (P = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (O.H = e === null || e.memoizedState === null ? Wr : jc),
      (Zl = !1),
      (u = l(a, n)),
      (Zl = !1),
      ba && (u = mr(t, l, a, n)),
      hr(e),
      u
    );
  }
  function hr(e) {
    O.H = dn;
    var t = ge !== null && ge.next !== null;
    if (((Xt = 0), (Ce = ge = P = null), (vu = !1), (sn = 0), (xa = null), t))
      throw Error(f(300));
    e === null ||
      we ||
      ((e = e.dependencies), e !== null && fu(e) && (we = !0));
  }
  function mr(e, t, l, a) {
    P = e;
    var n = 0;
    do {
      if ((ba && (xa = null), (sn = 0), (ba = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (Ce = ge = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (O.H = Fr), (u = t(l, a));
    } while (ba);
    return u;
  }
  function Xm() {
    var e = O.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? rn(t) : t),
      (e = e.useState()[0]),
      (ge !== null ? ge.memoizedState : null) !== e && (P.flags |= 1024),
      t
    );
  }
  function hc() {
    var e = pu !== 0;
    return (pu = 0), e;
  }
  function mc(e, t, l) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
  }
  function yc(e) {
    if (vu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      vu = !1;
    }
    (Xt = 0), (Ce = ge = P = null), (ba = !1), (sn = pu = 0), (xa = null);
  }
  function ke() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ce === null ? (P.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce;
  }
  function De() {
    if (ge === null) {
      var e = P.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ge.next;
    var t = Ce === null ? P.memoizedState : Ce.next;
    if (t !== null) (Ce = t), (ge = e);
    else {
      if (e === null)
        throw P.alternate === null ? Error(f(467)) : Error(f(310));
      (ge = e),
        (e = {
          memoizedState: ge.memoizedState,
          baseState: ge.baseState,
          baseQueue: ge.baseQueue,
          queue: ge.queue,
          next: null,
        }),
        Ce === null ? (P.memoizedState = Ce = e) : (Ce = Ce.next = e);
    }
    return Ce;
  }
  function bu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function rn(e) {
    var t = sn;
    return (
      (sn += 1),
      xa === null && (xa = []),
      (e = nr(xa, e, t)),
      (t = P),
      (Ce === null ? t.memoizedState : Ce.next) === null &&
        ((t = t.alternate),
        (O.H = t === null || t.memoizedState === null ? Wr : jc)),
      e
    );
  }
  function xu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return rn(e);
      if (e.$$typeof === L) return Xe(e);
    }
    throw Error(f(438, String(e)));
  }
  function gc(e) {
    var t = null,
      l = P.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = P.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = bu()), (P.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = at;
    return t.index++, l;
  }
  function Zt(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Su(e) {
    var t = De();
    return vc(t, ge, e);
  }
  function vc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        (n.next = u.next), (u.next = i);
      }
      (t.baseQueue = n = u), (a.pending = null);
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u;
    else {
      t = n.next;
      var s = (i = null),
        h = null,
        E = t,
        N = !1;
      do {
        var R = E.lane & -536870913;
        if (R !== E.lane ? (ue & R) === R : (Xt & R) === R) {
          var z = E.revertLane;
          if (z === 0)
            h !== null &&
              (h = h.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              R === ma && (N = !0);
          else if ((Xt & z) === z) {
            (E = E.next), z === ma && (N = !0);
            continue;
          } else
            (R = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              h === null ? ((s = h = R), (i = u)) : (h = h.next = R),
              (P.lanes |= z),
              (vl |= z);
          (R = E.action),
            Zl && l(u, R),
            (u = E.hasEagerState ? E.eagerState : l(u, R));
        } else
          (z = {
            lane: R,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            h === null ? ((s = h = z), (i = u)) : (h = h.next = z),
            (P.lanes |= R),
            (vl |= R);
        E = E.next;
      } while (E !== null && E !== t);
      if (
        (h === null ? (i = u) : (h.next = s),
        !ft(u, e.memoizedState) && ((we = !0), N && ((l = ya), l !== null)))
      )
        throw l;
      (e.memoizedState = u),
        (e.baseState = i),
        (e.baseQueue = h),
        (a.lastRenderedState = u);
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function pc(e) {
    var t = De(),
      l = t.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = (n = n.next);
      do (u = e(u, i.action)), (i = i.next);
      while (i !== n);
      ft(u, t.memoizedState) || (we = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u);
    }
    return [u, a];
  }
  function yr(e, t, l) {
    var a = P,
      n = De(),
      u = ce;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = t();
    var i = !ft((ge || n).memoizedState, l);
    if (
      (i && ((n.memoizedState = l), (we = !0)),
      (n = n.queue),
      Sc(pr.bind(null, a, n, e), [e]),
      n.getSnapshot !== t || i || (Ce !== null && Ce.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Sa(9, { destroy: void 0 }, vr.bind(null, a, n, l, t), null),
        xe === null)
      )
        throw Error(f(349));
      u || (Xt & 127) !== 0 || gr(a, t, l);
    }
    return l;
  }
  function gr(e, t, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = P.updateQueue),
      t === null
        ? ((t = bu()), (P.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function vr(e, t, l, a) {
    (t.value = l), (t.getSnapshot = a), br(t) && xr(e);
  }
  function pr(e, t, l) {
    return l(function () {
      br(t) && xr(e);
    });
  }
  function br(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !ft(e, l);
    } catch {
      return !0;
    }
  }
  function xr(e) {
    var t = Ul(e, 2);
    t !== null && lt(t, e, 2);
  }
  function bc(e) {
    var t = ke();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Zl)) {
        al(!0);
        try {
          l();
        } finally {
          al(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Sr(e, t, l, a) {
    return (e.baseState = l), vc(e, ge, typeof a == "function" ? a : Zt);
  }
  function Zm(e, t, l, a, n) {
    if (zu(e)) throw Error(f(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      O.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), Er(t, u))
          : ((u.next = l.next), (t.pending = l.next = u));
    }
  }
  function Er(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var u = O.T,
        i = {};
      O.T = i;
      try {
        var s = l(n, a),
          h = O.S;
        h !== null && h(i, s), Tr(e, t, s);
      } catch (E) {
        xc(e, t, E);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), (O.T = u);
      }
    } else
      try {
        (u = l(n, a)), Tr(e, t, u);
      } catch (E) {
        xc(e, t, E);
      }
  }
  function Tr(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            zr(e, t, a);
          },
          function (a) {
            return xc(e, t, a);
          }
        )
      : zr(e, t, l);
  }
  function zr(e, t, l) {
    (t.status = "fulfilled"),
      (t.value = l),
      Ar(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), Er(e, l)));
  }
  function xc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = l), Ar(t), (t = t.next);
      while (t !== a);
    }
    e.action = null;
  }
  function Ar(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Nr(e, t) {
    return t;
  }
  function jr(e, t) {
    if (ce) {
      var l = xe.formState;
      if (l !== null) {
        e: {
          var a = P;
          if (ce) {
            if (Se) {
              t: {
                for (var n = Se, u = St; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = Tt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                (u = n.data), (n = u === "F!" || u === "F" ? n : null);
              }
              if (n) {
                (Se = Tt(n.nextSibling)), (a = n.data === "F!");
                break e;
              }
            }
            fl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = ke()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nr,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = Kr.bind(null, P, a)),
      (a.dispatch = l),
      (a = bc(!1)),
      (u = Nc.bind(null, P, !1, a.queue)),
      (a = ke()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = Zm.bind(null, P, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function Mr(e) {
    var t = De();
    return Or(t, ge, e);
  }
  function Or(e, t, l) {
    if (
      ((t = vc(e, t, Nr)[0]),
      (e = Su(Zt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = rn(t);
      } catch (i) {
        throw i === ga ? ou : i;
      }
    else a = t;
    t = De();
    var n = t.queue,
      u = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((P.flags |= 2048),
        Sa(9, { destroy: void 0 }, Vm.bind(null, n, l), null)),
      [a, u, e]
    );
  }
  function Vm(e, t) {
    e.action = t;
  }
  function _r(e) {
    var t = De(),
      l = ge;
    if (l !== null) return Or(t, l, e);
    De(), (t = t.memoizedState), (l = De());
    var a = l.queue.dispatch;
    return (l.memoizedState = e), [t, a, !1];
  }
  function Sa(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = P.updateQueue),
      t === null && ((t = bu()), (P.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Dr() {
    return De().memoizedState;
  }
  function Eu(e, t, l, a) {
    var n = ke();
    (P.flags |= e),
      (n.memoizedState = Sa(
        1 | t,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a
      ));
  }
  function Tu(e, t, l, a) {
    var n = De();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    ge !== null && a !== null && oc(a, ge.memoizedState.deps)
      ? (n.memoizedState = Sa(t, u, l, a))
      : ((P.flags |= e), (n.memoizedState = Sa(1 | t, u, l, a)));
  }
  function Rr(e, t) {
    Eu(8390656, 8, e, t);
  }
  function Sc(e, t) {
    Tu(2048, 8, e, t);
  }
  function Km(e) {
    P.flags |= 4;
    var t = P.updateQueue;
    if (t === null) (t = bu()), (P.updateQueue = t), (t.events = [e]);
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function Cr(e) {
    var t = De().memoizedState;
    return (
      Km({ ref: t, nextImpl: e }),
      function () {
        if ((re & 2) !== 0) throw Error(f(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function wr(e, t) {
    return Tu(4, 2, e, t);
  }
  function Ur(e, t) {
    return Tu(4, 4, e, t);
  }
  function Hr(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Br(e, t, l) {
    (l = l != null ? l.concat([e]) : null), Tu(4, 4, Hr.bind(null, t, e), l);
  }
  function Ec() {}
  function qr(e, t) {
    var l = De();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && oc(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function Lr(e, t) {
    var l = De();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && oc(t, a[1])) return a[0];
    if (((a = e()), Zl)) {
      al(!0);
      try {
        e();
      } finally {
        al(!1);
      }
    }
    return (l.memoizedState = [a, t]), a;
  }
  function Tc(e, t, l) {
    return l === void 0 || ((Xt & 1073741824) !== 0 && (ue & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = Go()), (P.lanes |= e), (vl |= e), l);
  }
  function Yr(e, t, l, a) {
    return ft(l, t)
      ? l
      : pa.current !== null
      ? ((e = Tc(e, l, a)), ft(e, t) || (we = !0), e)
      : (Xt & 42) === 0 || ((Xt & 1073741824) !== 0 && (ue & 261930) === 0)
      ? ((we = !0), (e.memoizedState = l))
      : ((e = Go()), (P.lanes |= e), (vl |= e), t);
  }
  function Gr(e, t, l, a, n) {
    var u = U.p;
    U.p = u !== 0 && 8 > u ? u : 8;
    var i = O.T,
      s = {};
    (O.T = s), Nc(e, !1, t, l);
    try {
      var h = n(),
        E = O.S;
      if (
        (E !== null && E(s, h),
        h !== null && typeof h == "object" && typeof h.then == "function")
      ) {
        var N = Gm(h, a);
        on(e, t, N, mt(e));
      } else on(e, t, a, mt(e));
    } catch (R) {
      on(e, t, { then: function () {}, status: "rejected", reason: R }, mt());
    } finally {
      (U.p = u),
        i !== null && s.types !== null && (i.types = s.types),
        (O.T = i);
    }
  }
  function Jm() {}
  function zc(e, t, l, a) {
    if (e.tag !== 5) throw Error(f(476));
    var n = Qr(e).queue;
    Gr(
      e,
      n,
      t,
      W,
      l === null
        ? Jm
        : function () {
            return Xr(e), l(a);
          }
    );
  }
  function Qr(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: W,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Zt,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Xr(e) {
    var t = Qr(e);
    t.next === null && (t = e.alternate.memoizedState),
      on(e, t.next.queue, {}, mt());
  }
  function Ac() {
    return Xe(Mn);
  }
  function Zr() {
    return De().memoizedState;
  }
  function Vr() {
    return De().memoizedState;
  }
  function km(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = mt();
          e = ol(l);
          var a = dl(t, e, l);
          a !== null && (lt(a, t, l), un(a, t, l)),
            (t = { cache: ec() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Wm(e, t, l) {
    var a = mt();
    (l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      zu(e)
        ? Jr(t, l)
        : ((l = Xi(e, t, l, a)), l !== null && (lt(l, e, a), kr(l, t, a)));
  }
  function Kr(e, t, l) {
    var a = mt();
    on(e, t, l, a);
  }
  function on(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (zu(e)) Jr(t, n);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var i = t.lastRenderedState,
            s = u(i, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), ft(s, i)))
            return nu(e, t, n, 0), xe === null && au(), !1;
        } catch {
        } finally {
        }
      if (((l = Xi(e, t, n, a)), l !== null))
        return lt(l, e, a), kr(l, t, a), !0;
    }
    return !1;
  }
  function Nc(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: nf(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zu(e))
    ) {
      if (t) throw Error(f(479));
    } else (t = Xi(e, l, a, 2)), t !== null && lt(t, e, 2);
  }
  function zu(e) {
    var t = e.alternate;
    return e === P || (t !== null && t === P);
  }
  function Jr(e, t) {
    ba = vu = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t);
  }
  function kr(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), Pf(e, l);
    }
  }
  var dn = {
    readContext: Xe,
    use: xu,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useLayoutEffect: je,
    useInsertionEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useSyncExternalStore: je,
    useId: je,
    useHostTransitionStatus: je,
    useFormState: je,
    useActionState: je,
    useOptimistic: je,
    useMemoCache: je,
    useCacheRefresh: je,
  };
  dn.useEffectEvent = je;
  var Wr = {
      readContext: Xe,
      use: xu,
      useCallback: function (e, t) {
        return (ke().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Xe,
      useEffect: Rr,
      useImperativeHandle: function (e, t, l) {
        (l = l != null ? l.concat([e]) : null),
          Eu(4194308, 4, Hr.bind(null, t, e), l);
      },
      useLayoutEffect: function (e, t) {
        return Eu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Eu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = ke();
        t = t === void 0 ? null : t;
        var a = e();
        if (Zl) {
          al(!0);
          try {
            e();
          } finally {
            al(!1);
          }
        }
        return (l.memoizedState = [a, t]), a;
      },
      useReducer: function (e, t, l) {
        var a = ke();
        if (l !== void 0) {
          var n = l(t);
          if (Zl) {
            al(!0);
            try {
              l(t);
            } finally {
              al(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = Wm.bind(null, P, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ke();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = bc(e);
        var t = e.queue,
          l = Kr.bind(null, P, t);
        return (t.dispatch = l), [e.memoizedState, l];
      },
      useDebugValue: Ec,
      useDeferredValue: function (e, t) {
        var l = ke();
        return Tc(l, e, t);
      },
      useTransition: function () {
        var e = bc(!1);
        return (
          (e = Gr.bind(null, P, e.queue, !0, !1)),
          (ke().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = P,
          n = ke();
        if (ce) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (((l = t()), xe === null)) throw Error(f(349));
          (ue & 127) !== 0 || gr(a, t, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: t };
        return (
          (n.queue = u),
          Rr(pr.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          Sa(9, { destroy: void 0 }, vr.bind(null, a, u, l, t), null),
          l
        );
      },
      useId: function () {
        var e = ke(),
          t = xe.identifierPrefix;
        if (ce) {
          var l = Dt,
            a = _t;
          (l = (a & ~(1 << (32 - ct(a) - 1))).toString(32) + l),
            (t = "_" + t + "R_" + l),
            (l = pu++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "_");
        } else (l = Qm++), (t = "_" + t + "r_" + l.toString(32) + "_");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Ac,
      useFormState: jr,
      useActionState: jr,
      useOptimistic: function (e) {
        var t = ke();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l), (t = Nc.bind(null, P, !0, l)), (l.dispatch = t), [e, t]
        );
      },
      useMemoCache: gc,
      useCacheRefresh: function () {
        return (ke().memoizedState = km.bind(null, P));
      },
      useEffectEvent: function (e) {
        var t = ke(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if ((re & 2) !== 0) throw Error(f(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    jc = {
      readContext: Xe,
      use: xu,
      useCallback: qr,
      useContext: Xe,
      useEffect: Sc,
      useImperativeHandle: Br,
      useInsertionEffect: wr,
      useLayoutEffect: Ur,
      useMemo: Lr,
      useReducer: Su,
      useRef: Dr,
      useState: function () {
        return Su(Zt);
      },
      useDebugValue: Ec,
      useDeferredValue: function (e, t) {
        var l = De();
        return Yr(l, ge.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Su(Zt)[0],
          t = De().memoizedState;
        return [typeof e == "boolean" ? e : rn(e), t];
      },
      useSyncExternalStore: yr,
      useId: Zr,
      useHostTransitionStatus: Ac,
      useFormState: Mr,
      useActionState: Mr,
      useOptimistic: function (e, t) {
        var l = De();
        return Sr(l, ge, e, t);
      },
      useMemoCache: gc,
      useCacheRefresh: Vr,
    };
  jc.useEffectEvent = Cr;
  var Fr = {
    readContext: Xe,
    use: xu,
    useCallback: qr,
    useContext: Xe,
    useEffect: Sc,
    useImperativeHandle: Br,
    useInsertionEffect: wr,
    useLayoutEffect: Ur,
    useMemo: Lr,
    useReducer: pc,
    useRef: Dr,
    useState: function () {
      return pc(Zt);
    },
    useDebugValue: Ec,
    useDeferredValue: function (e, t) {
      var l = De();
      return ge === null ? Tc(l, e, t) : Yr(l, ge.memoizedState, e, t);
    },
    useTransition: function () {
      var e = pc(Zt)[0],
        t = De().memoizedState;
      return [typeof e == "boolean" ? e : rn(e), t];
    },
    useSyncExternalStore: yr,
    useId: Zr,
    useHostTransitionStatus: Ac,
    useFormState: _r,
    useActionState: _r,
    useOptimistic: function (e, t) {
      var l = De();
      return ge !== null
        ? Sr(l, ge, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: gc,
    useCacheRefresh: Vr,
  };
  Fr.useEffectEvent = Cr;
  function Mc(e, t, l, a) {
    (t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : w({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Oc = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = mt(),
        n = ol(a);
      (n.payload = t),
        l != null && (n.callback = l),
        (t = dl(e, n, a)),
        t !== null && (lt(t, e, a), un(t, e, a));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = mt(),
        n = ol(a);
      (n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = dl(e, n, a)),
        t !== null && (lt(t, e, a), un(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = mt(),
        a = ol(l);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = dl(e, a, l)),
        t !== null && (lt(t, e, l), un(t, e, l));
    },
  };
  function $r(e, t, l, a, n, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, u, i)
        : t.prototype && t.prototype.isPureReactComponent
        ? !$a(l, a) || !$a(n, u)
        : !0
    );
  }
  function Ir(e, t, l, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Oc.enqueueReplaceState(t, t.state, null);
  }
  function Vl(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = w({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function Pr(e) {
    lu(e);
  }
  function eo(e) {
    console.error(e);
  }
  function to(e) {
    lu(e);
  }
  function Au(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function lo(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function _c(e, t, l) {
    return (
      (l = ol(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Au(e, t);
      }),
      l
    );
  }
  function ao(e) {
    return (e = ol(e)), (e.tag = 3), e;
  }
  function no(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      (e.payload = function () {
        return n(u);
      }),
        (e.callback = function () {
          lo(t, l, a);
        });
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (e.callback = function () {
        lo(t, l, a),
          typeof n != "function" &&
            (pl === null ? (pl = new Set([this])) : pl.add(this));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function Fm(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && ha(t, l, n, !0),
        (l = rt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Et === null ? Bu() : l.alternate === null && Me === 0 && (Me = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === du
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  tf(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === du
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  tf(e, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return tf(e, a, n), Bu(), !1;
    }
    if (ce)
      return (
        (t = rt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Wi && ((e = Error(f(422), { cause: a })), en(pt(e, l))))
          : (a !== Wi && ((t = Error(f(423), { cause: a })), en(pt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = pt(a, l)),
            (n = _c(e.stateNode, a, n)),
            ic(e, n),
            Me !== 4 && (Me = 2)),
        !1
      );
    var u = Error(f(520), { cause: a });
    if (
      ((u = pt(u, l)),
      xn === null ? (xn = [u]) : xn.push(u),
      Me !== 4 && (Me = 2),
      t === null)
    )
      return !0;
    (a = pt(a, l)), (l = t);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = _c(l.stateNode, a, e)),
            ic(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (pl === null || !pl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = ao(n)),
              no(n, e, l, a),
              ic(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Dc = Error(f(461)),
    we = !1;
  function Ze(e, t, l, a) {
    t.child = e === null ? fr(t, null, l, a) : Xl(t, e.child, l, a);
  }
  function uo(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var s in a) s !== "ref" && (i[s] = a[s]);
    } else i = a;
    return (
      Ll(t),
      (a = dc(e, t, l, i, u, n)),
      (s = hc()),
      e !== null && !we
        ? (mc(e, t, n), Vt(e, t, n))
        : (ce && s && Ji(t), (t.flags |= 1), Ze(e, t, a, n), t.child)
    );
  }
  function io(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" &&
        !Zi(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = u), co(e, t, u, a, n))
        : ((e = iu(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !Lc(e, n))) {
      var i = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : $a), l(i, a) && e.ref === t.ref)
      )
        return Vt(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Lt(u, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function co(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if ($a(u, a) && e.ref === t.ref)
        if (((we = !1), (t.pendingProps = a = u), Lc(e, n)))
          (e.flags & 131072) !== 0 && (we = !0);
        else return (t.lanes = e.lanes), Vt(e, t, n);
    }
    return Rc(e, t, l, a, n);
  }
  function fo(e, t, l, a) {
    var n = a.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (a = t.child = e.child, n = 0; a !== null; )
            (n = n | a.lanes | a.childLanes), (a = a.sibling);
          a = n & ~u;
        } else (a = 0), (t.child = null);
        return so(e, t, u, l, a);
      }
      if ((l & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ru(t, u !== null ? u.cachePool : null),
          u !== null ? or(t, u) : fc(),
          dr(t);
      else
        return (
          (a = t.lanes = 536870912),
          so(e, t, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null
        ? (ru(t, u.cachePool), or(t, u), ml(), (t.memoizedState = null))
        : (e !== null && ru(t, null), fc(), ml());
    return Ze(e, t, n, l), t.child;
  }
  function hn(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function so(e, t, l, a, n) {
    var u = lc();
    return (
      (u = u === null ? null : { parent: Re._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && ru(t, null),
      fc(),
      dr(t),
      e !== null && ha(e, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function Nu(e, t) {
    return (
      (t = Mu({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function ro(e, t, l) {
    return (
      Xl(t, e.child, null, l),
      (e = Nu(t, t.pendingProps)),
      (e.flags |= 2),
      ot(t),
      (t.memoizedState = null),
      e
    );
  }
  function $m(e, t, l) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (ce) {
        if (a.mode === "hidden")
          return (e = Nu(t, a)), (t.lanes = 536870912), hn(null, e);
        if (
          (rc(t),
          (e = Se)
            ? ((e = Td(e, St)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: il !== null ? { id: _t, overflow: Dt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Js(e)),
                (l.return = t),
                (t.child = l),
                (Qe = t),
                (Se = null)))
            : (e = null),
          e === null)
        )
          throw fl(t);
        return (t.lanes = 536870912), null;
      }
      return Nu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((rc(t), n))
        if (t.flags & 256) (t.flags &= -257), (t = ro(e, t, l));
        else if (t.memoizedState !== null)
          (t.child = e.child), (t.flags |= 128), (t = null);
        else throw Error(f(558));
      else if (
        (we || ha(e, t, l, !1), (n = (l & e.childLanes) !== 0), we || n)
      ) {
        if (
          ((a = xe),
          a !== null && ((i = es(a, l)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), Ul(e, i), lt(a, e, i), Dc);
        Bu(), (t = ro(e, t, l));
      } else
        (e = u.treeContext),
          (Se = Tt(i.nextSibling)),
          (Qe = t),
          (ce = !0),
          (cl = null),
          (St = !1),
          e !== null && Fs(t, e),
          (t = Nu(t, a)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (e = Lt(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function ju(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(f(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Rc(e, t, l, a, n) {
    return (
      Ll(t),
      (l = dc(e, t, l, a, void 0, n)),
      (a = hc()),
      e !== null && !we
        ? (mc(e, t, n), Vt(e, t, n))
        : (ce && a && Ji(t), (t.flags |= 1), Ze(e, t, l, n), t.child)
    );
  }
  function oo(e, t, l, a, n, u) {
    return (
      Ll(t),
      (t.updateQueue = null),
      (l = mr(t, a, l, n)),
      hr(e),
      (a = hc()),
      e !== null && !we
        ? (mc(e, t, u), Vt(e, t, u))
        : (ce && a && Ji(t), (t.flags |= 1), Ze(e, t, l, u), t.child)
    );
  }
  function ho(e, t, l, a, n) {
    if ((Ll(t), t.stateNode === null)) {
      var u = sa,
        i = l.contextType;
      typeof i == "object" && i !== null && (u = Xe(i)),
        (u = new l(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Oc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        nc(t),
        (i = l.contextType),
        (u.context = typeof i == "object" && i !== null ? Xe(i) : sa),
        (u.state = t.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == "function" && (Mc(t, l, i, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && Oc.enqueueReplaceState(u, u.state, null),
          fn(t, a, u, n),
          cn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (e === null) {
      u = t.stateNode;
      var s = t.memoizedProps,
        h = Vl(l, s);
      u.props = h;
      var E = u.context,
        N = l.contextType;
      (i = sa), typeof N == "object" && N !== null && (i = Xe(N));
      var R = l.getDerivedStateFromProps;
      (N =
        typeof R == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (s = t.pendingProps !== s),
        N ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((s || E !== i) && Ir(t, u, a, i)),
        (rl = !1);
      var z = t.memoizedState;
      (u.state = z),
        fn(t, a, u, n),
        cn(),
        (E = t.memoizedState),
        s || z !== E || rl
          ? (typeof R == "function" && (Mc(t, l, R, a), (E = t.memoizedState)),
            (h = rl || $r(t, l, h, a, z, E, i))
              ? (N ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = E)),
            (u.props = a),
            (u.state = E),
            (u.context = i),
            (a = h))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (u = t.stateNode),
        uc(e, t),
        (i = t.memoizedProps),
        (N = Vl(l, i)),
        (u.props = N),
        (R = t.pendingProps),
        (z = u.context),
        (E = l.contextType),
        (h = sa),
        typeof E == "object" && E !== null && (h = Xe(E)),
        (s = l.getDerivedStateFromProps),
        (E =
          typeof s == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== R || z !== h) && Ir(t, u, a, h)),
        (rl = !1),
        (z = t.memoizedState),
        (u.state = z),
        fn(t, a, u, n),
        cn();
      var A = t.memoizedState;
      i !== R ||
      z !== A ||
      rl ||
      (e !== null && e.dependencies !== null && fu(e.dependencies))
        ? (typeof s == "function" && (Mc(t, l, s, a), (A = t.memoizedState)),
          (N =
            rl ||
            $r(t, l, N, a, z, A, h) ||
            (e !== null && e.dependencies !== null && fu(e.dependencies)))
            ? (E ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, A, h),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, A, h)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === e.memoizedProps && z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = A)),
          (u.props = a),
          (u.state = A),
          (u.context = h),
          (a = N))
        : (typeof u.componentDidUpdate != "function" ||
            (i === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === e.memoizedProps && z === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      ju(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = Xl(t, e.child, null, n)),
              (t.child = Xl(t, null, l, n)))
            : Ze(e, t, l, n),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Vt(e, t, n)),
      e
    );
  }
  function mo(e, t, l, a) {
    return Bl(), (t.flags |= 256), Ze(e, t, l, a), t.child;
  }
  var Cc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function wc(e) {
    return { baseLanes: e, cachePool: lr() };
  }
  function Uc(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= ht), e;
  }
  function yo(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          e !== null && e.memoizedState === null ? !1 : (_e.current & 2) !== 0),
      i && ((n = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ce) {
        if (
          (n ? hl(t) : ml(),
          (e = Se)
            ? ((e = Td(e, St)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: il !== null ? { id: _t, overflow: Dt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Js(e)),
                (l.return = t),
                (t.child = l),
                (Qe = t),
                (Se = null)))
            : (e = null),
          e === null)
        )
          throw fl(t);
        return pf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var s = a.children;
      return (
        (a = a.fallback),
        n
          ? (ml(),
            (n = t.mode),
            (s = Mu({ mode: "hidden", children: s }, n)),
            (a = Hl(a, n, l, null)),
            (s.return = t),
            (a.return = t),
            (s.sibling = a),
            (t.child = s),
            (a = t.child),
            (a.memoizedState = wc(l)),
            (a.childLanes = Uc(e, i, l)),
            (t.memoizedState = Cc),
            hn(null, a))
          : (hl(t), Hc(t, s))
      );
    }
    var h = e.memoizedState;
    if (h !== null && ((s = h.dehydrated), s !== null)) {
      if (u)
        t.flags & 256
          ? (hl(t), (t.flags &= -257), (t = Bc(e, t, l)))
          : t.memoizedState !== null
          ? (ml(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (ml(),
            (s = a.fallback),
            (n = t.mode),
            (a = Mu({ mode: "visible", children: a.children }, n)),
            (s = Hl(s, n, l, null)),
            (s.flags |= 2),
            (a.return = t),
            (s.return = t),
            (a.sibling = s),
            (t.child = a),
            Xl(t, e.child, null, l),
            (a = t.child),
            (a.memoizedState = wc(l)),
            (a.childLanes = Uc(e, i, l)),
            (t.memoizedState = Cc),
            (t = hn(null, a)));
      else if ((hl(t), pf(s))) {
        if (((i = s.nextSibling && s.nextSibling.dataset), i)) var E = i.dgst;
        (i = E),
          (a = Error(f(419))),
          (a.stack = ""),
          (a.digest = i),
          en({ value: a, source: null, stack: null }),
          (t = Bc(e, t, l));
      } else if (
        (we || ha(e, t, l, !1), (i = (l & e.childLanes) !== 0), we || i)
      ) {
        if (
          ((i = xe),
          i !== null && ((a = es(i, l)), a !== 0 && a !== h.retryLane))
        )
          throw ((h.retryLane = a), Ul(e, a), lt(i, e, a), Dc);
        vf(s) || Bu(), (t = Bc(e, t, l));
      } else
        vf(s)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = h.treeContext),
            (Se = Tt(s.nextSibling)),
            (Qe = t),
            (ce = !0),
            (cl = null),
            (St = !1),
            e !== null && Fs(t, e),
            (t = Hc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (ml(),
        (s = a.fallback),
        (n = t.mode),
        (h = e.child),
        (E = h.sibling),
        (a = Lt(h, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = h.subtreeFlags & 65011712),
        E !== null ? (s = Lt(E, s)) : ((s = Hl(s, n, l, null)), (s.flags |= 2)),
        (s.return = t),
        (a.return = t),
        (a.sibling = s),
        (t.child = a),
        hn(null, a),
        (a = t.child),
        (s = e.child.memoizedState),
        s === null
          ? (s = wc(l))
          : ((n = s.cachePool),
            n !== null
              ? ((h = Re._currentValue),
                (n = n.parent !== h ? { parent: h, pool: h } : n))
              : (n = lr()),
            (s = { baseLanes: s.baseLanes | l, cachePool: n })),
        (a.memoizedState = s),
        (a.childLanes = Uc(e, i, l)),
        (t.memoizedState = Cc),
        hn(e.child, a))
      : (hl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Lt(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function Hc(e, t) {
    return (
      (t = Mu({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Mu(e, t) {
    return (e = st(22, e, null, t)), (e.lanes = 0), e;
  }
  function Bc(e, t, l) {
    return (
      Xl(t, e.child, null, l),
      (e = Hc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function go(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Ii(e.return, t, l);
  }
  function qc(e, t, l, a, n, u) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: u,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n),
        (i.treeForkCount = u));
  }
  function vo(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = _e.current,
      s = (i & 2) !== 0;
    if (
      (s ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      H(_e, i),
      Ze(e, t, a, l),
      (a = ce ? Pa : 0),
      !s && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && go(e, l, t);
        else if (e.tag === 19) go(e, l, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    switch (n) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          (e = l.alternate),
            e !== null && gu(e) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          qc(t, !1, n, l, u, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && gu(e) === null)) {
            t.child = n;
            break;
          }
          (e = n.sibling), (n.sibling = l), (l = n), (n = e);
        }
        qc(t, !0, l, null, u, a);
        break;
      case "together":
        qc(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Vt(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (vl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ha(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(f(153));
    if (t.child !== null) {
      for (
        e = t.child, l = Lt(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (l = l.sibling = Lt(e, e.pendingProps)),
          (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function Lc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && fu(e)));
  }
  function Im(e, t, l) {
    switch (t.tag) {
      case 3:
        Je(t, t.stateNode.containerInfo),
          sl(t, Re, e.memoizedState.cache),
          Bl();
        break;
      case 27:
      case 5:
        qa(t);
        break;
      case 4:
        Je(t, t.stateNode.containerInfo);
        break;
      case 10:
        sl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), rc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (hl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
            ? yo(e, t, l)
            : (hl(t), (e = Vt(e, t, l)), e !== null ? e.sibling : null);
        hl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (ha(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return vo(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          H(_e, _e.current),
          a)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), fo(e, t, l, t.pendingProps);
      case 24:
        sl(t, Re, e.memoizedState.cache);
    }
    return Vt(e, t, l);
  }
  function po(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) we = !0;
      else {
        if (!Lc(e, l) && (t.flags & 128) === 0) return (we = !1), Im(e, t, l);
        we = (e.flags & 131072) !== 0;
      }
    else (we = !1), ce && (t.flags & 1048576) !== 0 && Ws(t, Pa, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Gl(t.elementType)), (t.type = e), typeof e == "function"))
            Zi(e)
              ? ((a = Vl(e, a)), (t.tag = 1), (t = ho(null, t, e, a, l)))
              : ((t.tag = 0), (t = Rc(null, t, e, a, l)));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === de) {
                (t.tag = 11), (t = uo(null, t, e, a, l));
                break e;
              } else if (n === ee) {
                (t.tag = 14), (t = io(null, t, e, a, l));
                break e;
              }
            }
            throw ((t = Ut(e) || e), Error(f(306, t, "")));
          }
        }
        return t;
      case 0:
        return Rc(e, t, t.type, t.pendingProps, l);
      case 1:
        return (a = t.type), (n = Vl(a, t.pendingProps)), ho(e, t, a, n, l);
      case 3:
        e: {
          if ((Je(t, t.stateNode.containerInfo), e === null))
            throw Error(f(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          (n = u.element), uc(e, t), fn(t, a, null, l);
          var i = t.memoizedState;
          if (
            ((a = i.cache),
            sl(t, Re, a),
            a !== u.cache && Pi(t, [Re], l, !0),
            cn(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = mo(e, t, a, l);
              break e;
            } else if (a !== n) {
              (n = pt(Error(f(424)), t)), en(n), (t = mo(e, t, a, l));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Se = Tt(e.firstChild),
                  Qe = t,
                  ce = !0,
                  cl = null,
                  St = !0,
                  l = fr(t, null, a, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((Bl(), a === n)) {
              t = Vt(e, t, l);
              break e;
            }
            Ze(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          ju(e, t),
          e === null
            ? (l = Od(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : ce ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = Zu(le.current).createElement(l)),
                (a[Ge] = t),
                (a[Fe] = e),
                Ve(a, l, e),
                Le(a),
                (t.stateNode = a))
            : (t.memoizedState = Od(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          qa(t),
          e === null &&
            ce &&
            ((a = t.stateNode = Nd(t.type, t.pendingProps, le.current)),
            (Qe = t),
            (St = !0),
            (n = Se),
            El(t.type) ? ((bf = n), (Se = Tt(a.firstChild))) : (Se = n)),
          Ze(e, t, t.pendingProps.children, l),
          ju(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            ce &&
            ((n = a = Se) &&
              ((a = M0(a, t.type, t.pendingProps, St)),
              a !== null
                ? ((t.stateNode = a),
                  (Qe = t),
                  (Se = Tt(a.firstChild)),
                  (St = !1),
                  (n = !0))
                : (n = !1)),
            n || fl(t)),
          qa(t),
          (n = t.type),
          (u = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (a = u.children),
          mf(n, u) ? (a = null) : i !== null && mf(n, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = dc(e, t, Xm, null, null, l)), (Mn._currentValue = n)),
          ju(e, t),
          Ze(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            ce &&
            ((e = l = Se) &&
              ((l = O0(l, t.pendingProps, St)),
              l !== null
                ? ((t.stateNode = l), (Qe = t), (Se = null), (e = !0))
                : (e = !1)),
            e || fl(t)),
          null
        );
      case 13:
        return yo(e, t, l);
      case 4:
        return (
          Je(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Xl(t, null, a, l)) : Ze(e, t, a, l),
          t.child
        );
      case 11:
        return uo(e, t, t.type, t.pendingProps, l);
      case 7:
        return Ze(e, t, t.pendingProps, l), t.child;
      case 8:
        return Ze(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return Ze(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          sl(t, t.type, a.value),
          Ze(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Ll(t),
          (n = Xe(n)),
          (a = a(n)),
          (t.flags |= 1),
          Ze(e, t, a, l),
          t.child
        );
      case 14:
        return io(e, t, t.type, t.pendingProps, l);
      case 15:
        return co(e, t, t.type, t.pendingProps, l);
      case 19:
        return vo(e, t, l);
      case 31:
        return $m(e, t, l);
      case 22:
        return fo(e, t, l, t.pendingProps);
      case 24:
        return (
          Ll(t),
          (a = Xe(Re)),
          e === null
            ? ((n = lc()),
              n === null &&
                ((n = xe),
                (u = ec()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              nc(t),
              sl(t, Re, n))
            : ((e.lanes & l) !== 0 && (uc(e, t), fn(t, null, null, l), cn()),
              (n = e.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  sl(t, Re, a))
                : ((a = u.cache),
                  sl(t, Re, a),
                  a !== n.cache && Pi(t, [Re], l, !0))),
          Ze(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(f(156, t.tag));
  }
  function Kt(e) {
    e.flags |= 4;
  }
  function Yc(e, t, l, a, n) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (n & 335544128) === n))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Vo()) e.flags |= 8192;
        else throw ((Ql = du), ac);
    } else e.flags &= -16777217;
  }
  function bo(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !wd(t)))
      if (Vo()) e.flags |= 8192;
      else throw ((Ql = du), ac);
  }
  function Ou(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? $f() : 536870912), (e.lanes |= t), (Aa |= t));
  }
  function mn(e, t) {
    if (!ce)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), (t = t.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ee(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling);
    else
      for (n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = l), t;
  }
  function Pm(e, t, l) {
    var a = t.pendingProps;
    switch ((ki(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ee(t), null;
      case 1:
        return Ee(t), null;
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Qt(Re),
          Oe(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (da(t)
              ? Kt(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Fi())),
          Ee(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (Kt(t),
              u !== null ? (Ee(t), bo(t, u)) : (Ee(t), Yc(t, n, null, a, l)))
            : u
            ? u !== e.memoizedState
              ? (Kt(t), Ee(t), bo(t, u))
              : (Ee(t), (t.flags &= -16777217))
            : ((e = e.memoizedProps),
              e !== a && Kt(t),
              Ee(t),
              Yc(t, n, e, a, l)),
          null
        );
      case 27:
        if (
          (Yn(t),
          (l = le.current),
          (n = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(f(166));
            return Ee(t), null;
          }
          (e = Y.current),
            da(t) ? $s(t) : ((e = Nd(n, a, l)), (t.stateNode = e), Kt(t));
        }
        return Ee(t), null;
      case 5:
        if ((Yn(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(f(166));
            return Ee(t), null;
          }
          if (((u = Y.current), da(t))) $s(t);
          else {
            var i = Zu(le.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (u = i.createElement("div")),
                      (u.innerHTML = "<script></script>"),
                      (u = u.removeChild(u.firstChild));
                    break;
                  case "select":
                    (u =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size);
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            (u[Ge] = t), (u[Fe] = a);
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
            t.stateNode = u;
            e: switch ((Ve(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && Kt(t);
          }
        }
        return (
          Ee(t),
          Yc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Kt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(f(166));
          if (((e = le.current), da(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = Qe),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (e[Ge] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                yd(e.nodeValue, l)
              )),
              e || fl(t, !0);
          } else (e = Zu(e).createTextNode(a)), (e[Ge] = t), (t.stateNode = e);
        }
        return Ee(t), null;
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = da(t)), l !== null)) {
            if (e === null) {
              if (!a) throw Error(f(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(f(557));
              e[Ge] = t;
            } else
              Bl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ee(t), (e = !1);
          } else
            (l = Fi()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0);
          if (!e) return t.flags & 256 ? (ot(t), t) : (ot(t), null);
          if ((t.flags & 128) !== 0) throw Error(f(558));
        }
        return Ee(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = da(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(f(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(f(317));
              n[Ge] = t;
            } else
              Bl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ee(t), (n = !1);
          } else
            (n = Fi()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return t.flags & 256 ? (ot(t), t) : (ot(t), null);
        }
        return (
          ot(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = a !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((a = t.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              Ou(t, t.updateQueue),
              Ee(t),
              null)
        );
      case 4:
        return Oe(), e === null && sf(t.stateNode.containerInfo), Ee(t), null;
      case 10:
        return Qt(t.type), Ee(t), null;
      case 19:
        if ((C(_e), (a = t.memoizedState), a === null)) return Ee(t), null;
        if (((n = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) mn(a, !1);
          else {
            if (Me !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = gu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      mn(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Ou(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    Ks(l, e), (l = l.sibling);
                  return (
                    H(_e, (_e.current & 1) | 2),
                    ce && Yt(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              ut() > wu &&
              ((t.flags |= 128), (n = !0), mn(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = gu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Ou(t, e),
                mn(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !u.alternate &&
                  !ce)
              )
                return Ee(t), null;
            } else
              2 * ut() - a.renderingStartTime > wu &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), mn(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = a.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (a.last = u));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = ut()),
            (e.sibling = null),
            (l = _e.current),
            H(_e, n ? (l & 1) | 2 : l & 1),
            ce && Yt(t, a.treeForkCount),
            e)
          : (Ee(t), null);
      case 22:
      case 23:
        return (
          ot(t),
          sc(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ee(t),
          (l = t.updateQueue),
          l !== null && Ou(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && C(Yl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Qt(Re),
          Ee(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function e0(e, t) {
    switch ((ki(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Qt(Re),
          Oe(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Yn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((ot(t), t.alternate === null)) throw Error(f(340));
          Bl();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (ot(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(f(340));
          Bl();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return C(_e), null;
      case 4:
        return Oe(), null;
      case 10:
        return Qt(t.type), null;
      case 22:
      case 23:
        return (
          ot(t),
          sc(),
          e !== null && C(Yl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return Qt(Re), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function xo(e, t) {
    switch ((ki(t), t.tag)) {
      case 3:
        Qt(Re), Oe();
        break;
      case 26:
      case 27:
      case 5:
        Yn(t);
        break;
      case 4:
        Oe();
        break;
      case 31:
        t.memoizedState !== null && ot(t);
        break;
      case 13:
        ot(t);
        break;
      case 19:
        C(_e);
        break;
      case 10:
        Qt(t.type);
        break;
      case 22:
      case 23:
        ot(t), sc(), e !== null && C(Yl);
        break;
      case 24:
        Qt(Re);
    }
  }
  function yn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create,
              i = l.inst;
            (a = u()), (i.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      me(t, t.return, s);
    }
  }
  function yl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var i = a.inst,
              s = i.destroy;
            if (s !== void 0) {
              (i.destroy = void 0), (n = t);
              var h = l,
                E = s;
              try {
                E();
              } catch (N) {
                me(n, h, N);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (N) {
      me(t, t.return, N);
    }
  }
  function So(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        rr(t, l);
      } catch (a) {
        me(e, e.return, a);
      }
    }
  }
  function Eo(e, t, l) {
    (l.props = Vl(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      me(e, t, a);
    }
  }
  function gn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      me(e, t, n);
    }
  }
  function Rt(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          me(e, t, n);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          me(e, t, n);
        }
      else l.current = null;
  }
  function To(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      me(e, e.return, n);
    }
  }
  function Gc(e, t, l) {
    try {
      var a = e.stateNode;
      E0(a, e.type, l, t), (a[Fe] = t);
    } catch (n) {
      me(e, e.return, n);
    }
  }
  function zo(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && El(e.type)) ||
      e.tag === 4
    );
  }
  function Qc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || zo(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && El(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Xc(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = Bt));
    else if (
      a !== 4 &&
      (a === 27 && El(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Xc(e, t, l), e = e.sibling; e !== null; )
        Xc(e, t, l), (e = e.sibling);
  }
  function _u(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (
      a !== 4 &&
      (a === 27 && El(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (_u(e, t, l), e = e.sibling; e !== null; )
        _u(e, t, l), (e = e.sibling);
  }
  function Ao(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      Ve(t, a, l), (t[Ge] = e), (t[Fe] = l);
    } catch (u) {
      me(e, e.return, u);
    }
  }
  var Jt = !1,
    Ue = !1,
    Zc = !1,
    No = typeof WeakSet == "function" ? WeakSet : Set,
    Ye = null;
  function t0(e, t) {
    if (((e = e.containerInfo), (df = $u), (e = Bs(e)), Bi(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break e;
            }
            var i = 0,
              s = -1,
              h = -1,
              E = 0,
              N = 0,
              R = e,
              z = null;
            t: for (;;) {
              for (
                var A;
                R !== l || (n !== 0 && R.nodeType !== 3) || (s = i + n),
                  R !== u || (a !== 0 && R.nodeType !== 3) || (h = i + a),
                  R.nodeType === 3 && (i += R.nodeValue.length),
                  (A = R.firstChild) !== null;

              )
                (z = R), (R = A);
              for (;;) {
                if (R === e) break t;
                if (
                  (z === l && ++E === n && (s = i),
                  z === u && ++N === a && (h = i),
                  (A = R.nextSibling) !== null)
                )
                  break;
                (R = z), (z = R.parentNode);
              }
              R = A;
            }
            l = s === -1 || h === -1 ? null : { start: s, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      hf = { focusedElem: e, selectionRange: l }, $u = !1, Ye = t;
      Ye !== null;

    )
      if (
        ((t = Ye), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (Ye = e);
      else
        for (; Ye !== null; ) {
          switch (((t = Ye), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (l = 0; l < e.length; l++)
                  (n = e[l]), (n.ref.impl = n.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                (e = void 0),
                  (l = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode);
                try {
                  var q = Vl(l.type, n);
                  (e = a.getSnapshotBeforeUpdate(q, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e);
                } catch (J) {
                  me(l, l.return, J);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  gf(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      gf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(f(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Ye = e);
            break;
          }
          Ye = t.return;
        }
  }
  function jo(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Wt(e, l), a & 4 && yn(5, l);
        break;
      case 1:
        if ((Wt(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (i) {
              me(l, l.return, i);
            }
          else {
            var n = Vl(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              me(l, l.return, i);
            }
          }
        a & 64 && So(l), a & 512 && gn(l, l.return);
        break;
      case 3:
        if ((Wt(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            rr(e, t);
          } catch (i) {
            me(l, l.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Ao(l);
      case 26:
      case 5:
        Wt(e, l), t === null && a & 4 && To(l), a & 512 && gn(l, l.return);
        break;
      case 12:
        Wt(e, l);
        break;
      case 31:
        Wt(e, l), a & 4 && _o(e, l);
        break;
      case 13:
        Wt(e, l),
          a & 4 && Do(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = r0.bind(null, l)), _0(e, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Jt), !a)) {
          (t = (t !== null && t.memoizedState !== null) || Ue), (n = Jt);
          var u = Ue;
          (Jt = a),
            (Ue = t) && !u ? Ft(e, l, (l.subtreeFlags & 8772) !== 0) : Wt(e, l),
            (Jt = n),
            (Ue = u);
        }
        break;
      case 30:
        break;
      default:
        Wt(e, l);
    }
  }
  function Mo(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Mo(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && xi(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Te = null,
    Ie = !1;
  function kt(e, t, l) {
    for (l = l.child; l !== null; ) Oo(e, t, l), (l = l.sibling);
  }
  function Oo(e, t, l) {
    if (it && typeof it.onCommitFiberUnmount == "function")
      try {
        it.onCommitFiberUnmount(La, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Ue || Rt(l, t),
          kt(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Ue || Rt(l, t);
        var a = Te,
          n = Ie;
        El(l.type) && ((Te = l.stateNode), (Ie = !1)),
          kt(e, t, l),
          An(l.stateNode),
          (Te = a),
          (Ie = n);
        break;
      case 5:
        Ue || Rt(l, t);
      case 6:
        if (
          ((a = Te),
          (n = Ie),
          (Te = null),
          kt(e, t, l),
          (Te = a),
          (Ie = n),
          Te !== null)
        )
          if (Ie)
            try {
              (Te.nodeType === 9
                ? Te.body
                : Te.nodeName === "HTML"
                ? Te.ownerDocument.body
                : Te
              ).removeChild(l.stateNode);
            } catch (u) {
              me(l, t, u);
            }
          else
            try {
              Te.removeChild(l.stateNode);
            } catch (u) {
              me(l, t, u);
            }
        break;
      case 18:
        Te !== null &&
          (Ie
            ? ((e = Te),
              Sd(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                l.stateNode
              ),
              Ca(e))
            : Sd(Te, l.stateNode));
        break;
      case 4:
        (a = Te),
          (n = Ie),
          (Te = l.stateNode.containerInfo),
          (Ie = !0),
          kt(e, t, l),
          (Te = a),
          (Ie = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yl(2, l, t), Ue || yl(4, l, t), kt(e, t, l);
        break;
      case 1:
        Ue ||
          (Rt(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && Eo(l, t, a)),
          kt(e, t, l);
        break;
      case 21:
        kt(e, t, l);
        break;
      case 22:
        (Ue = (a = Ue) || l.memoizedState !== null), kt(e, t, l), (Ue = a);
        break;
      default:
        kt(e, t, l);
    }
  }
  function _o(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Ca(e);
      } catch (l) {
        me(t, t.return, l);
      }
    }
  }
  function Do(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ca(e);
      } catch (l) {
        me(t, t.return, l);
      }
  }
  function l0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new No()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new No()),
          t
        );
      default:
        throw Error(f(435, e.tag));
    }
  }
  function Du(e, t) {
    var l = l0(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = o0.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function Pe(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (El(s.type)) {
                (Te = s.stateNode), (Ie = !1);
                break e;
              }
              break;
            case 5:
              (Te = s.stateNode), (Ie = !1);
              break e;
            case 3:
            case 4:
              (Te = s.stateNode.containerInfo), (Ie = !0);
              break e;
          }
          s = s.return;
        }
        if (Te === null) throw Error(f(160));
        Oo(u, i, n),
          (Te = null),
          (Ie = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) Ro(t, e), (t = t.sibling);
  }
  var jt = null;
  function Ro(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pe(t, e),
          et(e),
          a & 4 && (yl(3, e, e.return), yn(3, e), yl(5, e, e.return));
        break;
      case 1:
        Pe(t, e),
          et(e),
          a & 512 && (Ue || l === null || Rt(l, l.return)),
          a & 64 &&
            Jt &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = jt;
        if (
          (Pe(t, e),
          et(e),
          a & 512 && (Ue || l === null || Rt(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  (a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n);
                  t: switch (a) {
                    case "title":
                      (u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Qa] ||
                          u[Ge] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title")
                          )),
                        Ve(u, a, l),
                        (u[Ge] = e),
                        Le(u),
                        (a = u);
                      break e;
                    case "link":
                      var i = Rd("link", "href", n).get(a + (l.href || ""));
                      if (i) {
                        for (var s = 0; s < i.length; s++)
                          if (
                            ((u = i[s]),
                            u.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              u.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            i.splice(s, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        Ve(u, a, l),
                        n.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (i = Rd("meta", "content", n).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (s = 0; s < i.length; s++)
                          if (
                            ((u = i[s]),
                            u.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              u.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            i.splice(s, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        Ve(u, a, l),
                        n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  (u[Ge] = e), Le(u), (a = u);
                }
                e.stateNode = a;
              } else Cd(n, e.type, e.stateNode);
            else e.stateNode = Dd(n, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? Cd(n, e.type, e.stateNode)
                  : Dd(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                Gc(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        Pe(t, e),
          et(e),
          a & 512 && (Ue || l === null || Rt(l, l.return)),
          l !== null && a & 4 && Gc(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (Pe(t, e),
          et(e),
          a & 512 && (Ue || l === null || Rt(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            la(n, "");
          } catch (q) {
            me(e, e.return, q);
          }
        }
        a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), Gc(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Zc = !0);
        break;
      case 6:
        if ((Pe(t, e), et(e), a & 4)) {
          if (e.stateNode === null) throw Error(f(162));
          (a = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = a;
          } catch (q) {
            me(e, e.return, q);
          }
        }
        break;
      case 3:
        if (
          ((Ju = null),
          (n = jt),
          (jt = Vu(t.containerInfo)),
          Pe(t, e),
          (jt = n),
          et(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ca(t.containerInfo);
          } catch (q) {
            me(e, e.return, q);
          }
        Zc && ((Zc = !1), Co(e));
        break;
      case 4:
        (a = jt),
          (jt = Vu(e.stateNode.containerInfo)),
          Pe(t, e),
          et(e),
          (jt = a);
        break;
      case 12:
        Pe(t, e), et(e);
        break;
      case 31:
        Pe(t, e),
          et(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Du(e, a)));
        break;
      case 13:
        Pe(t, e),
          et(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Cu = ut()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Du(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null,
          E = Jt,
          N = Ue;
        if (
          ((Jt = E || n),
          (Ue = N || h),
          Pe(t, e),
          (Ue = N),
          (Jt = E),
          et(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || h || Jt || Ue || Kl(e)),
              l = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                h = l = t;
                try {
                  if (((u = h.stateNode), n))
                    (i = u.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    s = h.stateNode;
                    var R = h.memoizedProps.style,
                      z =
                        R != null && R.hasOwnProperty("display")
                          ? R.display
                          : null;
                    s.style.display =
                      z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (q) {
                  me(h, h.return, q);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                h = t;
                try {
                  h.stateNode.nodeValue = n ? "" : h.memoizedProps;
                } catch (q) {
                  me(h, h.return, q);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                h = t;
                try {
                  var A = h.stateNode;
                  n ? Ed(A, !0) : Ed(h.stateNode, !1);
                } catch (q) {
                  me(h, h.return, q);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), (t = t.return);
            }
            l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Du(e, l))));
        break;
      case 19:
        Pe(t, e),
          et(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Du(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pe(t, e), et(e);
    }
  }
  function et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (zo(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Qc(e);
            _u(e, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (la(i, ""), (l.flags &= -33));
            var s = Qc(e);
            _u(e, s, i);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo,
              E = Qc(e);
            Xc(e, E, h);
            break;
          default:
            throw Error(f(161));
        }
      } catch (N) {
        me(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Co(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Co(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Wt(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) jo(e, t.alternate, t), (t = t.sibling);
  }
  function Kl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          yl(4, t, t.return), Kl(t);
          break;
        case 1:
          Rt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Eo(t, t.return, l),
            Kl(t);
          break;
        case 27:
          An(t.stateNode);
        case 26:
        case 5:
          Rt(t, t.return), Kl(t);
          break;
        case 22:
          t.memoizedState === null && Kl(t);
          break;
        case 30:
          Kl(t);
          break;
        default:
          Kl(t);
      }
      e = e.sibling;
    }
  }
  function Ft(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        u = t,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ft(n, u, l), yn(4, u);
          break;
        case 1:
          if (
            (Ft(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (E) {
              me(a, a.return, E);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++)
                  sr(h[n], s);
            } catch (E) {
              me(a, a.return, E);
            }
          }
          l && i & 64 && So(u), gn(u, u.return);
          break;
        case 27:
          Ao(u);
        case 26:
        case 5:
          Ft(n, u, l), l && a === null && i & 4 && To(u), gn(u, u.return);
          break;
        case 12:
          Ft(n, u, l);
          break;
        case 31:
          Ft(n, u, l), l && i & 4 && _o(n, u);
          break;
        case 13:
          Ft(n, u, l), l && i & 4 && Do(n, u);
          break;
        case 22:
          u.memoizedState === null && Ft(n, u, l), gn(u, u.return);
          break;
        case 30:
          break;
        default:
          Ft(n, u, l);
      }
      t = t.sibling;
    }
  }
  function Vc(e, t) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && tn(l));
  }
  function Kc(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && tn(e));
  }
  function Mt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) wo(e, t, l, a), (t = t.sibling);
  }
  function wo(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Mt(e, t, l, a), n & 2048 && yn(9, t);
        break;
      case 1:
        Mt(e, t, l, a);
        break;
      case 3:
        Mt(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && tn(e)));
        break;
      case 12:
        if (n & 2048) {
          Mt(e, t, l, a), (e = t.stateNode);
          try {
            var u = t.memoizedProps,
              i = u.id,
              s = u.onPostCommit;
            typeof s == "function" &&
              s(
                i,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (h) {
            me(t, t.return, h);
          }
        } else Mt(e, t, l, a);
        break;
      case 31:
        Mt(e, t, l, a);
        break;
      case 13:
        Mt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        (u = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? Mt(e, t, l, a)
              : vn(e, t)
            : u._visibility & 2
            ? Mt(e, t, l, a)
            : ((u._visibility |= 2),
              Ea(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Vc(i, t);
        break;
      case 24:
        Mt(e, t, l, a), n & 2048 && Kc(t.alternate, t);
        break;
      default:
        Mt(e, t, l, a);
    }
  }
  function Ea(e, t, l, a, n) {
    for (
      n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var u = e,
        i = t,
        s = l,
        h = a,
        E = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ea(u, i, s, h, n), yn(8, i);
          break;
        case 23:
          break;
        case 22:
          var N = i.stateNode;
          i.memoizedState !== null
            ? N._visibility & 2
              ? Ea(u, i, s, h, n)
              : vn(u, i)
            : ((N._visibility |= 2), Ea(u, i, s, h, n)),
            n && E & 2048 && Vc(i.alternate, i);
          break;
        case 24:
          Ea(u, i, s, h, n), n && E & 2048 && Kc(i.alternate, i);
          break;
        default:
          Ea(u, i, s, h, n);
      }
      t = t.sibling;
    }
  }
  function vn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            vn(l, a), n & 2048 && Vc(a.alternate, a);
            break;
          case 24:
            vn(l, a), n & 2048 && Kc(a.alternate, a);
            break;
          default:
            vn(l, a);
        }
        t = t.sibling;
      }
  }
  var pn = 8192;
  function Ta(e, t, l) {
    if (e.subtreeFlags & pn)
      for (e = e.child; e !== null; ) Uo(e, t, l), (e = e.sibling);
  }
  function Uo(e, t, l) {
    switch (e.tag) {
      case 26:
        Ta(e, t, l),
          e.flags & pn &&
            e.memoizedState !== null &&
            Q0(l, jt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Ta(e, t, l);
        break;
      case 3:
      case 4:
        var a = jt;
        (jt = Vu(e.stateNode.containerInfo)), Ta(e, t, l), (jt = a);
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = pn), (pn = 16777216), Ta(e, t, l), (pn = a))
            : Ta(e, t, l));
        break;
      default:
        Ta(e, t, l);
    }
  }
  function Ho(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function bn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (Ye = a), qo(a, e);
        }
      Ho(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Bo(e), (e = e.sibling);
  }
  function Bo(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        bn(e), e.flags & 2048 && yl(9, e, e.return);
        break;
      case 3:
        bn(e);
        break;
      case 12:
        bn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Ru(e))
          : bn(e);
        break;
      default:
        bn(e);
    }
  }
  function Ru(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (Ye = a), qo(a, e);
        }
      Ho(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          yl(8, t, t.return), Ru(t);
          break;
        case 22:
          (l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Ru(t));
          break;
        default:
          Ru(t);
      }
      e = e.sibling;
    }
  }
  function qo(e, t) {
    for (; Ye !== null; ) {
      var l = Ye;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          yl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          tn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (Ye = a);
      else
        e: for (l = e; Ye !== null; ) {
          a = Ye;
          var n = a.sibling,
            u = a.return;
          if ((Mo(a), a === l)) {
            Ye = null;
            break e;
          }
          if (n !== null) {
            (n.return = u), (Ye = n);
            break e;
          }
          Ye = u;
        }
    }
  }
  var a0 = {
      getCacheForType: function (e) {
        var t = Xe(Re),
          l = t.data.get(e);
        return l === void 0 && ((l = e()), t.data.set(e, l)), l;
      },
      cacheSignal: function () {
        return Xe(Re).controller.signal;
      },
    },
    n0 = typeof WeakMap == "function" ? WeakMap : Map,
    re = 0,
    xe = null,
    ae = null,
    ue = 0,
    he = 0,
    dt = null,
    gl = !1,
    za = !1,
    Jc = !1,
    $t = 0,
    Me = 0,
    vl = 0,
    Jl = 0,
    kc = 0,
    ht = 0,
    Aa = 0,
    xn = null,
    tt = null,
    Wc = !1,
    Cu = 0,
    Lo = 0,
    wu = 1 / 0,
    Uu = null,
    pl = null,
    qe = 0,
    bl = null,
    Na = null,
    It = 0,
    Fc = 0,
    $c = null,
    Yo = null,
    Sn = 0,
    Ic = null;
  function mt() {
    return (re & 2) !== 0 && ue !== 0 ? ue & -ue : O.T !== null ? nf() : ts();
  }
  function Go() {
    if (ht === 0)
      if ((ue & 536870912) === 0 || ce) {
        var e = Xn;
        (Xn <<= 1), (Xn & 3932160) === 0 && (Xn = 262144), (ht = e);
      } else ht = 536870912;
    return (e = rt.current), e !== null && (e.flags |= 32), ht;
  }
  function lt(e, t, l) {
    ((e === xe && (he === 2 || he === 9)) || e.cancelPendingCommit !== null) &&
      (ja(e, 0), xl(e, ue, ht, !1)),
      Ga(e, l),
      ((re & 2) === 0 || e !== xe) &&
        (e === xe &&
          ((re & 2) === 0 && (Jl |= l), Me === 4 && xl(e, ue, ht, !1)),
        Ct(e));
  }
  function Qo(e, t, l) {
    if ((re & 6) !== 0) throw Error(f(327));
    var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Ya(e, t),
      n = a ? c0(e, t) : ef(e, t, !0),
      u = a;
    do {
      if (n === 0) {
        za && !a && xl(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !u0(l))) {
          (n = ef(e, t, !1)), (u = !1);
          continue;
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            (i = e.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            t = i;
            e: {
              var s = e;
              n = xn;
              var h = s.current.memoizedState.isDehydrated;
              if ((h && (ja(s, i).flags |= 256), (i = ef(s, i, !1)), i !== 2)) {
                if (Jc && !h) {
                  (s.errorRecoveryDisabledLanes |= u), (Jl |= u), (n = 4);
                  break e;
                }
                (u = tt),
                  (tt = n),
                  u !== null && (tt === null ? (tt = u) : tt.push.apply(tt, u));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          ja(e, 0), xl(e, t, 0, !0);
          break;
        }
        e: {
          switch (((a = e), (u = n), u)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              xl(a, t, ht, !gl);
              break e;
            case 2:
              tt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((t & 62914560) === t && ((n = Cu + 300 - ut()), 10 < n)) {
            if ((xl(a, t, ht, !gl), Vn(a, 0, !0) !== 0)) break e;
            (It = t),
              (a.timeoutHandle = bd(
                Xo.bind(
                  null,
                  a,
                  l,
                  tt,
                  Uu,
                  Wc,
                  t,
                  ht,
                  Jl,
                  Aa,
                  gl,
                  u,
                  "Throttled",
                  -0,
                  0
                ),
                n
              ));
            break e;
          }
          Xo(a, l, tt, Uu, Wc, t, ht, Jl, Aa, gl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ct(e);
  }
  function Xo(e, t, l, a, n, u, i, s, h, E, N, R, z, A) {
    if (
      ((e.timeoutHandle = -1),
      (R = t.subtreeFlags),
      R & 8192 || (R & 16785408) === 16785408)
    ) {
      (R = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Bt,
      }),
        Uo(t, u, R);
      var q =
        (u & 62914560) === u ? Cu - ut() : (u & 4194048) === u ? Lo - ut() : 0;
      if (((q = X0(R, q)), q !== null)) {
        (It = u),
          (e.cancelPendingCommit = q(
            $o.bind(null, e, t, u, l, a, n, i, s, h, N, R, null, z, A)
          )),
          xl(e, u, i, !E);
        return;
      }
    }
    $o(e, t, u, l, a, n, i, s, h);
  }
  function u0(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!ft(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        (l.return = t), (t = l);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function xl(e, t, l, a) {
    (t &= ~kc),
      (t &= ~Jl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes);
    for (var n = t; 0 < n; ) {
      var u = 31 - ct(n),
        i = 1 << u;
      (a[u] = -1), (n &= ~i);
    }
    l !== 0 && If(e, l, t);
  }
  function Hu() {
    return (re & 6) === 0 ? (En(0), !1) : !0;
  }
  function Pc() {
    if (ae !== null) {
      if (he === 0) var e = ae.return;
      else (e = ae), (Gt = ql = null), yc(e), (va = null), (an = 0), (e = ae);
      for (; e !== null; ) xo(e.alternate, e), (e = e.return);
      ae = null;
    }
  }
  function ja(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), A0(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (It = 0),
      Pc(),
      (xe = e),
      (ae = l = Lt(e.current, null)),
      (ue = t),
      (he = 0),
      (dt = null),
      (gl = !1),
      (za = Ya(e, t)),
      (Jc = !1),
      (Aa = ht = kc = Jl = vl = Me = 0),
      (tt = xn = null),
      (Wc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ct(a),
          u = 1 << n;
        (t |= e[n]), (a &= ~u);
      }
    return ($t = t), au(), l;
  }
  function Zo(e, t) {
    (P = null),
      (O.H = dn),
      t === ga || t === ou
        ? ((t = ur()), (he = 3))
        : t === ac
        ? ((t = ur()), (he = 4))
        : (he =
            t === Dc
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (dt = t),
      ae === null && ((Me = 1), Au(e, pt(t, e.current)));
  }
  function Vo() {
    var e = rt.current;
    return e === null
      ? !0
      : (ue & 4194048) === ue
      ? Et === null
      : (ue & 62914560) === ue || (ue & 536870912) !== 0
      ? e === Et
      : !1;
  }
  function Ko() {
    var e = O.H;
    return (O.H = dn), e === null ? dn : e;
  }
  function Jo() {
    var e = O.A;
    return (O.A = a0), e;
  }
  function Bu() {
    (Me = 4),
      gl || ((ue & 4194048) !== ue && rt.current !== null) || (za = !0),
      ((vl & 134217727) === 0 && (Jl & 134217727) === 0) ||
        xe === null ||
        xl(xe, ue, ht, !1);
  }
  function ef(e, t, l) {
    var a = re;
    re |= 2;
    var n = Ko(),
      u = Jo();
    (xe !== e || ue !== t) && ((Uu = null), ja(e, t)), (t = !1);
    var i = Me;
    e: do
      try {
        if (he !== 0 && ae !== null) {
          var s = ae,
            h = dt;
          switch (he) {
            case 8:
              Pc(), (i = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              rt.current === null && (t = !0);
              var E = he;
              if (((he = 0), (dt = null), Ma(e, s, h, E), l && za)) {
                i = 0;
                break e;
              }
              break;
            default:
              (E = he), (he = 0), (dt = null), Ma(e, s, h, E);
          }
        }
        i0(), (i = Me);
        break;
      } catch (N) {
        Zo(e, N);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Gt = ql = null),
      (re = a),
      (O.H = n),
      (O.A = u),
      ae === null && ((xe = null), (ue = 0), au()),
      i
    );
  }
  function i0() {
    for (; ae !== null; ) ko(ae);
  }
  function c0(e, t) {
    var l = re;
    re |= 2;
    var a = Ko(),
      n = Jo();
    xe !== e || ue !== t
      ? ((Uu = null), (wu = ut() + 500), ja(e, t))
      : (za = Ya(e, t));
    e: do
      try {
        if (he !== 0 && ae !== null) {
          t = ae;
          var u = dt;
          t: switch (he) {
            case 1:
              (he = 0), (dt = null), Ma(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (ar(u)) {
                (he = 0), (dt = null), Wo(t);
                break;
              }
              (t = function () {
                (he !== 2 && he !== 9) || xe !== e || (he = 7), Ct(e);
              }),
                u.then(t, t);
              break e;
            case 3:
              he = 7;
              break e;
            case 4:
              he = 5;
              break e;
            case 7:
              ar(u)
                ? ((he = 0), (dt = null), Wo(t))
                : ((he = 0), (dt = null), Ma(e, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (ae.tag) {
                case 26:
                  i = ae.memoizedState;
                case 5:
                case 27:
                  var s = ae;
                  if (i ? wd(i) : s.stateNode.complete) {
                    (he = 0), (dt = null);
                    var h = s.sibling;
                    if (h !== null) ae = h;
                    else {
                      var E = s.return;
                      E !== null ? ((ae = E), qu(E)) : (ae = null);
                    }
                    break t;
                  }
              }
              (he = 0), (dt = null), Ma(e, t, u, 5);
              break;
            case 6:
              (he = 0), (dt = null), Ma(e, t, u, 6);
              break;
            case 8:
              Pc(), (Me = 6);
              break e;
            default:
              throw Error(f(462));
          }
        }
        f0();
        break;
      } catch (N) {
        Zo(e, N);
      }
    while (!0);
    return (
      (Gt = ql = null),
      (O.H = a),
      (O.A = n),
      (re = l),
      ae !== null ? 0 : ((xe = null), (ue = 0), au(), Me)
    );
  }
  function f0() {
    for (; ae !== null && !Dh(); ) ko(ae);
  }
  function ko(e) {
    var t = po(e.alternate, e, $t);
    (e.memoizedProps = e.pendingProps), t === null ? qu(e) : (ae = t);
  }
  function Wo(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = oo(l, t, t.pendingProps, t.type, void 0, ue);
        break;
      case 11:
        t = oo(l, t, t.pendingProps, t.type.render, t.ref, ue);
        break;
      case 5:
        yc(t);
      default:
        xo(l, t), (t = ae = Ks(t, $t)), (t = po(l, t, $t));
    }
    (e.memoizedProps = e.pendingProps), t === null ? qu(e) : (ae = t);
  }
  function Ma(e, t, l, a) {
    (Gt = ql = null), yc(t), (va = null), (an = 0);
    var n = t.return;
    try {
      if (Fm(e, n, t, l, ue)) {
        (Me = 1), Au(e, pt(l, e.current)), (ae = null);
        return;
      }
    } catch (u) {
      if (n !== null) throw ((ae = n), u);
      (Me = 1), Au(e, pt(l, e.current)), (ae = null);
      return;
    }
    t.flags & 32768
      ? (ce || a === 1
          ? (e = !0)
          : za || (ue & 536870912) !== 0
          ? (e = !1)
          : ((gl = e = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = rt.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Fo(t, e))
      : qu(t);
  }
  function qu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Fo(t, gl);
        return;
      }
      e = t.return;
      var l = Pm(t.alternate, t, $t);
      if (l !== null) {
        ae = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ae = t;
        return;
      }
      ae = t = e;
    } while (t !== null);
    Me === 0 && (Me = 5);
  }
  function Fo(e, t) {
    do {
      var l = e0(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), (ae = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ae = e;
        return;
      }
      ae = e = l;
    } while (e !== null);
    (Me = 6), (ae = null);
  }
  function $o(e, t, l, a, n, u, i, s, h) {
    e.cancelPendingCommit = null;
    do Lu();
    while (qe !== 0);
    if ((re & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Qi),
        Gh(e, l, u, i, s, h),
        e === xe && ((ae = xe = null), (ue = 0)),
        (Na = t),
        (bl = e),
        (It = l),
        (Fc = u),
        ($c = n),
        (Yo = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            d0(Gn, function () {
              return ld(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = O.T), (O.T = null), (n = U.p), (U.p = 2), (i = re), (re |= 4);
        try {
          t0(e, t, l);
        } finally {
          (re = i), (U.p = n), (O.T = a);
        }
      }
      (qe = 1), Io(), Po(), ed();
    }
  }
  function Io() {
    if (qe === 1) {
      qe = 0;
      var e = bl,
        t = Na,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        (l = O.T), (O.T = null);
        var a = U.p;
        U.p = 2;
        var n = re;
        re |= 4;
        try {
          Ro(t, e);
          var u = hf,
            i = Bs(e.containerInfo),
            s = u.focusedElem,
            h = u.selectionRange;
          if (
            i !== s &&
            s &&
            s.ownerDocument &&
            Hs(s.ownerDocument.documentElement, s)
          ) {
            if (h !== null && Bi(s)) {
              var E = h.start,
                N = h.end;
              if ((N === void 0 && (N = E), "selectionStart" in s))
                (s.selectionStart = E),
                  (s.selectionEnd = Math.min(N, s.value.length));
              else {
                var R = s.ownerDocument || document,
                  z = (R && R.defaultView) || window;
                if (z.getSelection) {
                  var A = z.getSelection(),
                    q = s.textContent.length,
                    J = Math.min(h.start, q),
                    pe = h.end === void 0 ? J : Math.min(h.end, q);
                  !A.extend && J > pe && ((i = pe), (pe = J), (J = i));
                  var b = Us(s, J),
                    y = Us(s, pe);
                  if (
                    b &&
                    y &&
                    (A.rangeCount !== 1 ||
                      A.anchorNode !== b.node ||
                      A.anchorOffset !== b.offset ||
                      A.focusNode !== y.node ||
                      A.focusOffset !== y.offset)
                  ) {
                    var S = R.createRange();
                    S.setStart(b.node, b.offset),
                      A.removeAllRanges(),
                      J > pe
                        ? (A.addRange(S), A.extend(y.node, y.offset))
                        : (S.setEnd(y.node, y.offset), A.addRange(S));
                  }
                }
              }
            }
            for (R = [], A = s; (A = A.parentNode); )
              A.nodeType === 1 &&
                R.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < R.length;
              s++
            ) {
              var _ = R[s];
              (_.element.scrollLeft = _.left), (_.element.scrollTop = _.top);
            }
          }
          ($u = !!df), (hf = df = null);
        } finally {
          (re = n), (U.p = a), (O.T = l);
        }
      }
      (e.current = t), (qe = 2);
    }
  }
  function Po() {
    if (qe === 2) {
      qe = 0;
      var e = bl,
        t = Na,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        (l = O.T), (O.T = null);
        var a = U.p;
        U.p = 2;
        var n = re;
        re |= 4;
        try {
          jo(e, t.alternate, t);
        } finally {
          (re = n), (U.p = a), (O.T = l);
        }
      }
      qe = 3;
    }
  }
  function ed() {
    if (qe === 4 || qe === 3) {
      (qe = 0), Rh();
      var e = bl,
        t = Na,
        l = It,
        a = Yo;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (qe = 5)
        : ((qe = 0), (Na = bl = null), td(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (pl = null),
        pi(l),
        (t = t.stateNode),
        it && typeof it.onCommitFiberRoot == "function")
      )
        try {
          it.onCommitFiberRoot(La, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = O.T), (n = U.p), (U.p = 2), (O.T = null);
        try {
          for (var u = e.onRecoverableError, i = 0; i < a.length; i++) {
            var s = a[i];
            u(s.value, { componentStack: s.stack });
          }
        } finally {
          (O.T = t), (U.p = n);
        }
      }
      (It & 3) !== 0 && Lu(),
        Ct(e),
        (n = e.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0
          ? e === Ic
            ? Sn++
            : ((Sn = 0), (Ic = e))
          : (Sn = 0),
        En(0);
    }
  }
  function td(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), tn(t)));
  }
  function Lu() {
    return Io(), Po(), ed(), ld();
  }
  function ld() {
    if (qe !== 5) return !1;
    var e = bl,
      t = Fc;
    Fc = 0;
    var l = pi(It),
      a = O.T,
      n = U.p;
    try {
      (U.p = 32 > l ? 32 : l), (O.T = null), (l = $c), ($c = null);
      var u = bl,
        i = It;
      if (((qe = 0), (Na = bl = null), (It = 0), (re & 6) !== 0))
        throw Error(f(331));
      var s = re;
      if (
        ((re |= 4),
        Bo(u.current),
        wo(u, u.current, i, l),
        (re = s),
        En(0, !1),
        it && typeof it.onPostCommitFiberRoot == "function")
      )
        try {
          it.onPostCommitFiberRoot(La, u);
        } catch {}
      return !0;
    } finally {
      (U.p = n), (O.T = a), td(e, t);
    }
  }
  function ad(e, t, l) {
    (t = pt(l, t)),
      (t = _c(e.stateNode, t, 2)),
      (e = dl(e, t, 2)),
      e !== null && (Ga(e, 2), Ct(e));
  }
  function me(e, t, l) {
    if (e.tag === 3) ad(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ad(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (pl === null || !pl.has(a)))
          ) {
            (e = pt(l, e)),
              (l = ao(2)),
              (a = dl(t, l, 2)),
              a !== null && (no(l, a, t, e), Ga(a, 2), Ct(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function tf(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new n0();
      var n = new Set();
      a.set(t, n);
    } else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n));
    n.has(l) ||
      ((Jc = !0), n.add(l), (e = s0.bind(null, e, t, l)), t.then(e, e));
  }
  function s0(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      xe === e &&
        (ue & l) === l &&
        (Me === 4 || (Me === 3 && (ue & 62914560) === ue && 300 > ut() - Cu)
          ? (re & 2) === 0 && ja(e, 0)
          : (kc |= l),
        Aa === ue && (Aa = 0)),
      Ct(e);
  }
  function nd(e, t) {
    t === 0 && (t = $f()), (e = Ul(e, t)), e !== null && (Ga(e, t), Ct(e));
  }
  function r0(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), nd(e, l);
  }
  function o0(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(t), nd(e, l);
  }
  function d0(e, t) {
    return mi(e, t);
  }
  var Yu = null,
    Oa = null,
    lf = !1,
    Gu = !1,
    af = !1,
    Sl = 0;
  function Ct(e) {
    e !== Oa &&
      e.next === null &&
      (Oa === null ? (Yu = Oa = e) : (Oa = Oa.next = e)),
      (Gu = !0),
      lf || ((lf = !0), m0());
  }
  function En(e, t) {
    if (!af && Gu) {
      af = !0;
      do
        for (var l = !1, a = Yu; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                s = a.pingedLanes;
              (u = (1 << (31 - ct(42 | e) + 1)) - 1),
                (u &= n & ~(i & ~s)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((l = !0), fd(a, u));
          } else
            (u = ue),
              (u = Vn(
                a,
                a === xe ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Ya(a, u) || ((l = !0), fd(a, u));
          a = a.next;
        }
      while (l);
      af = !1;
    }
  }
  function h0() {
    ud();
  }
  function ud() {
    Gu = lf = !1;
    var e = 0;
    Sl !== 0 && z0() && (e = Sl);
    for (var t = ut(), l = null, a = Yu; a !== null; ) {
      var n = a.next,
        u = id(a, t);
      u === 0
        ? ((a.next = null),
          l === null ? (Yu = n) : (l.next = n),
          n === null && (Oa = l))
        : ((l = a), (e !== 0 || (u & 3) !== 0) && (Gu = !0)),
        (a = n);
    }
    (qe !== 0 && qe !== 5) || En(e), Sl !== 0 && (Sl = 0);
  }
  function id(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;

    ) {
      var i = 31 - ct(u),
        s = 1 << i,
        h = n[i];
      h === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[i] = Yh(s, t))
        : h <= t && (e.expiredLanes |= s),
        (u &= ~s);
    }
    if (
      ((t = xe),
      (l = ue),
      (l = Vn(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (he === 2 || he === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && yi(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ya(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && yi(a), pi(l))) {
        case 2:
        case 8:
          l = Wf;
          break;
        case 32:
          l = Gn;
          break;
        case 268435456:
          l = Ff;
          break;
        default:
          l = Gn;
      }
      return (
        (a = cd.bind(null, e)),
        (l = mi(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && yi(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function cd(e, t) {
    if (qe !== 0 && qe !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var l = e.callbackNode;
    if (Lu() && e.callbackNode !== l) return null;
    var a = ue;
    return (
      (a = Vn(
        e,
        e === xe ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Qo(e, a, t),
          id(e, ut()),
          e.callbackNode != null && e.callbackNode === l
            ? cd.bind(null, e)
            : null)
    );
  }
  function fd(e, t) {
    if (Lu()) return null;
    Qo(e, t, !0);
  }
  function m0() {
    N0(function () {
      (re & 6) !== 0 ? mi(kf, h0) : ud();
    });
  }
  function nf() {
    if (Sl === 0) {
      var e = ma;
      e === 0 && ((e = Qn), (Qn <<= 1), (Qn & 261888) === 0 && (Qn = 256)),
        (Sl = e);
    }
    return Sl;
  }
  function sd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Wn("" + e);
  }
  function rd(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function y0(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = sd((n[Fe] || null).action),
        i = a.submitter;
      i &&
        ((t = (t = i[Fe] || null)
          ? sd(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((u = t), (i = null)));
      var s = new Pn("action", "action", null, a, n);
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Sl !== 0) {
                  var h = i ? rd(n, i) : new FormData(n);
                  zc(
                    l,
                    { pending: !0, data: h, method: n.method, action: u },
                    null,
                    h
                  );
                }
              } else
                typeof u == "function" &&
                  (s.preventDefault(),
                  (h = i ? rd(n, i) : new FormData(n)),
                  zc(
                    l,
                    { pending: !0, data: h, method: n.method, action: u },
                    u,
                    h
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var uf = 0; uf < Gi.length; uf++) {
    var cf = Gi[uf],
      g0 = cf.toLowerCase(),
      v0 = cf[0].toUpperCase() + cf.slice(1);
    Nt(g0, "on" + v0);
  }
  Nt(Ys, "onAnimationEnd"),
    Nt(Gs, "onAnimationIteration"),
    Nt(Qs, "onAnimationStart"),
    Nt("dblclick", "onDoubleClick"),
    Nt("focusin", "onFocus"),
    Nt("focusout", "onBlur"),
    Nt(Cm, "onTransitionRun"),
    Nt(wm, "onTransitionStart"),
    Nt(Um, "onTransitionCancel"),
    Nt(Xs, "onTransitionEnd"),
    ea("onMouseEnter", ["mouseout", "mouseover"]),
    ea("onMouseLeave", ["mouseout", "mouseover"]),
    ea("onPointerEnter", ["pointerout", "pointerover"]),
    ea("onPointerLeave", ["pointerout", "pointerover"]),
    Dl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Dl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Dl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Dl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Dl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Dl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Tn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    p0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Tn)
    );
  function od(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var s = a[i],
              h = s.instance,
              E = s.currentTarget;
            if (((s = s.listener), h !== u && n.isPropagationStopped()))
              break e;
            (u = s), (n.currentTarget = E);
            try {
              u(n);
            } catch (N) {
              lu(N);
            }
            (n.currentTarget = null), (u = h);
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((s = a[i]),
              (h = s.instance),
              (E = s.currentTarget),
              (s = s.listener),
              h !== u && n.isPropagationStopped())
            )
              break e;
            (u = s), (n.currentTarget = E);
            try {
              u(n);
            } catch (N) {
              lu(N);
            }
            (n.currentTarget = null), (u = h);
          }
      }
    }
  }
  function ne(e, t) {
    var l = t[bi];
    l === void 0 && (l = t[bi] = new Set());
    var a = e + "__bubble";
    l.has(a) || (dd(t, e, 2, !1), l.add(a));
  }
  function ff(e, t, l) {
    var a = 0;
    t && (a |= 4), dd(l, e, a, t);
  }
  var Qu = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(e) {
    if (!e[Qu]) {
      (e[Qu] = !0),
        ns.forEach(function (l) {
          l !== "selectionchange" && (p0.has(l) || ff(l, !1, e), ff(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Qu] || ((t[Qu] = !0), ff("selectionchange", !1, t));
    }
  }
  function dd(e, t, l, a) {
    switch (Gd(t)) {
      case 2:
        var n = K0;
        break;
      case 8:
        n = J0;
        break;
      default:
        n = zf;
    }
    (l = n.bind(null, t, l, e)),
      (n = void 0),
      !Mi ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
        ? e.addEventListener(t, l, { passive: n })
        : e.addEventListener(t, l, !1);
  }
  function rf(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var h = i.tag;
              if ((h === 3 || h === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (((i = $l(s)), i === null)) return;
            if (((h = i.tag), h === 5 || h === 6 || h === 26 || h === 27)) {
              a = u = i;
              continue e;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    gs(function () {
      var E = u,
        N = Ni(l),
        R = [];
      e: {
        var z = Zs.get(e);
        if (z !== void 0) {
          var A = Pn,
            q = e;
          switch (e) {
            case "keypress":
              if ($n(l) === 0) break e;
            case "keydown":
            case "keyup":
              A = om;
              break;
            case "focusin":
              (q = "focus"), (A = Ri);
              break;
            case "focusout":
              (q = "blur"), (A = Ri);
              break;
            case "beforeblur":
            case "afterblur":
              A = Ri;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = bs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = Ph;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = mm;
              break;
            case Ys:
            case Gs:
            case Qs:
              A = lm;
              break;
            case Xs:
              A = gm;
              break;
            case "scroll":
            case "scrollend":
              A = $h;
              break;
            case "wheel":
              A = pm;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = nm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = Ss;
              break;
            case "toggle":
            case "beforetoggle":
              A = xm;
          }
          var J = (t & 4) !== 0,
            pe = !J && (e === "scroll" || e === "scrollend"),
            b = J ? (z !== null ? z + "Capture" : null) : z;
          J = [];
          for (var y = E, S; y !== null; ) {
            var _ = y;
            if (
              ((S = _.stateNode),
              (_ = _.tag),
              (_ !== 5 && _ !== 26 && _ !== 27) ||
                S === null ||
                b === null ||
                ((_ = Za(y, b)), _ != null && J.push(zn(y, _, S))),
              pe)
            )
              break;
            y = y.return;
          }
          0 < J.length &&
            ((z = new A(z, q, null, l, N)), R.push({ event: z, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((z = e === "mouseover" || e === "pointerover"),
            (A = e === "mouseout" || e === "pointerout"),
            z &&
              l !== Ai &&
              (q = l.relatedTarget || l.fromElement) &&
              ($l(q) || q[Fl]))
          )
            break e;
          if (
            (A || z) &&
            ((z =
              N.window === N
                ? N
                : (z = N.ownerDocument)
                ? z.defaultView || z.parentWindow
                : window),
            A
              ? ((q = l.relatedTarget || l.toElement),
                (A = E),
                (q = q ? $l(q) : null),
                q !== null &&
                  ((pe = p(q)),
                  (J = q.tag),
                  q !== pe || (J !== 5 && J !== 27 && J !== 6)) &&
                  (q = null))
              : ((A = null), (q = E)),
            A !== q)
          ) {
            if (
              ((J = bs),
              (_ = "onMouseLeave"),
              (b = "onMouseEnter"),
              (y = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((J = Ss),
                (_ = "onPointerLeave"),
                (b = "onPointerEnter"),
                (y = "pointer")),
              (pe = A == null ? z : Xa(A)),
              (S = q == null ? z : Xa(q)),
              (z = new J(_, y + "leave", A, l, N)),
              (z.target = pe),
              (z.relatedTarget = S),
              (_ = null),
              $l(N) === E &&
                ((J = new J(b, y + "enter", q, l, N)),
                (J.target = S),
                (J.relatedTarget = pe),
                (_ = J)),
              (pe = _),
              A && q)
            )
              t: {
                for (J = b0, b = A, y = q, S = 0, _ = b; _; _ = J(_)) S++;
                _ = 0;
                for (var V = y; V; V = J(V)) _++;
                for (; 0 < S - _; ) (b = J(b)), S--;
                for (; 0 < _ - S; ) (y = J(y)), _--;
                for (; S--; ) {
                  if (b === y || (y !== null && b === y.alternate)) {
                    J = b;
                    break t;
                  }
                  (b = J(b)), (y = J(y));
                }
                J = null;
              }
            else J = null;
            A !== null && hd(R, z, A, J, !1),
              q !== null && pe !== null && hd(R, pe, q, J, !0);
          }
        }
        e: {
          if (
            ((z = E ? Xa(E) : window),
            (A = z.nodeName && z.nodeName.toLowerCase()),
            A === "select" || (A === "input" && z.type === "file"))
          )
            var fe = Os;
          else if (js(z))
            if (_s) fe = _m;
            else {
              fe = Mm;
              var G = jm;
            }
          else
            (A = z.nodeName),
              !A ||
              A.toLowerCase() !== "input" ||
              (z.type !== "checkbox" && z.type !== "radio")
                ? E && zi(E.elementType) && (fe = Os)
                : (fe = Om);
          if (fe && (fe = fe(e, E))) {
            Ms(R, fe, l, N);
            break e;
          }
          G && G(e, z, E),
            e === "focusout" &&
              E &&
              z.type === "number" &&
              E.memoizedProps.value != null &&
              Ti(z, "number", z.value);
        }
        switch (((G = E ? Xa(E) : window), e)) {
          case "focusin":
            (js(G) || G.contentEditable === "true") &&
              ((ia = G), (qi = E), (Ia = null));
            break;
          case "focusout":
            Ia = qi = ia = null;
            break;
          case "mousedown":
            Li = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Li = !1), qs(R, l, N);
            break;
          case "selectionchange":
            if (Rm) break;
          case "keydown":
          case "keyup":
            qs(R, l, N);
        }
        var te;
        if (wi)
          e: {
            switch (e) {
              case "compositionstart":
                var ie = "onCompositionStart";
                break e;
              case "compositionend":
                ie = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ie = "onCompositionUpdate";
                break e;
            }
            ie = void 0;
          }
        else
          ua
            ? As(e, l) && (ie = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (ie = "onCompositionStart");
        ie &&
          (Es &&
            l.locale !== "ko" &&
            (ua || ie !== "onCompositionStart"
              ? ie === "onCompositionEnd" && ua && (te = vs())
              : ((ul = N),
                (Oi = "value" in ul ? ul.value : ul.textContent),
                (ua = !0))),
          (G = Xu(E, ie)),
          0 < G.length &&
            ((ie = new xs(ie, e, null, l, N)),
            R.push({ event: ie, listeners: G }),
            te
              ? (ie.data = te)
              : ((te = Ns(l)), te !== null && (ie.data = te)))),
          (te = Em ? Tm(e, l) : zm(e, l)) &&
            ((ie = Xu(E, "onBeforeInput")),
            0 < ie.length &&
              ((G = new xs("onBeforeInput", "beforeinput", null, l, N)),
              R.push({ event: G, listeners: ie }),
              (G.data = te))),
          y0(R, e, E, l, N);
      }
      od(R, t);
    });
  }
  function zn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Xu(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Za(e, l)),
          n != null && a.unshift(zn(e, n, u)),
          (n = Za(e, t)),
          n != null && a.push(zn(e, n, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function b0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function hd(e, t, l, a, n) {
    for (var u = t._reactName, i = []; l !== null && l !== a; ) {
      var s = l,
        h = s.alternate,
        E = s.stateNode;
      if (((s = s.tag), h !== null && h === a)) break;
      (s !== 5 && s !== 26 && s !== 27) ||
        E === null ||
        ((h = E),
        n
          ? ((E = Za(l, u)), E != null && i.unshift(zn(l, E, h)))
          : n || ((E = Za(l, u)), E != null && i.push(zn(l, E, h)))),
        (l = l.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var x0 = /\r\n?/g,
    S0 = /\u0000|\uFFFD/g;
  function md(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        x0,
        `
`
      )
      .replace(S0, "");
  }
  function yd(e, t) {
    return (t = md(t)), md(e) === t;
  }
  function ve(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || la(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            la(e, "" + a);
        break;
      case "className":
        Jn(e, "class", a);
        break;
      case "tabIndex":
        Jn(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jn(e, l, a);
        break;
      case "style":
        ms(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          Jn(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        (a = Wn("" + a)), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (t !== "input" && ve(e, t, "name", n.name, n, null),
                ve(e, t, "formEncType", n.formEncType, n, null),
                ve(e, t, "formMethod", n.formMethod, n, null),
                ve(e, t, "formTarget", n.formTarget, n, null))
              : (ve(e, t, "encType", n.encType, n, null),
                ve(e, t, "method", n.method, n, null),
                ve(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        (a = Wn("" + a)), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = Bt);
        break;
      case "onScroll":
        a != null && ne("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ne("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (l = Wn("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "" + a)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        ne("beforetoggle", e), ne("toggle", e), Kn(e, "popover", a);
        break;
      case "xlinkActuate":
        Ht(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ht(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ht(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ht(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ht(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ht(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Kn(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Wh.get(l) || l), Kn(e, l, a));
    }
  }
  function of(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        ms(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? la(e, a)
          : (typeof a == "number" || typeof a == "bigint") && la(e, "" + a);
        break;
      case "onScroll":
        a != null && ne("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ne("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Bt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!us.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (u = e[Fe] || null),
              (u = u != null ? u[l] : null),
              typeof u == "function" && e.removeEventListener(t, u, n),
              typeof a == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n);
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
              ? e.setAttribute(l, "")
              : Kn(e, l, a);
          }
    }
  }
  function Ve(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ne("error", e), ne("load", e);
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, t));
                default:
                  ve(e, t, u, i, l, null);
              }
          }
        n && ve(e, t, "srcSet", l.srcSet, l, null),
          a && ve(e, t, "src", l.src, l, null);
        return;
      case "input":
        ne("invalid", e);
        var s = (u = i = n = null),
          h = null,
          E = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var N = l[a];
            if (N != null)
              switch (a) {
                case "name":
                  n = N;
                  break;
                case "type":
                  i = N;
                  break;
                case "checked":
                  h = N;
                  break;
                case "defaultChecked":
                  E = N;
                  break;
                case "value":
                  u = N;
                  break;
                case "defaultValue":
                  s = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null) throw Error(f(137, t));
                  break;
                default:
                  ve(e, t, a, N, l, null);
              }
          }
        rs(e, u, s, h, E, i, n, !1);
        return;
      case "select":
        ne("invalid", e), (a = i = u = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                i = s;
                break;
              case "multiple":
                a = s;
              default:
                ve(e, t, n, s, l, null);
            }
        (t = u),
          (l = i),
          (e.multiple = !!a),
          t != null ? ta(e, !!a, t, !1) : l != null && ta(e, !!a, l, !0);
        return;
      case "textarea":
        ne("invalid", e), (u = n = a = null);
        for (i in l)
          if (l.hasOwnProperty(i) && ((s = l[i]), s != null))
            switch (i) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(f(91));
                break;
              default:
                ve(e, t, i, s, l, null);
            }
        ds(e, a, n, u);
        return;
      case "option":
        for (h in l)
          if (l.hasOwnProperty(h) && ((a = l[h]), a != null))
            switch (h) {
              case "selected":
                e.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                ve(e, t, h, a, l, null);
            }
        return;
      case "dialog":
        ne("beforetoggle", e), ne("toggle", e), ne("cancel", e), ne("close", e);
        break;
      case "iframe":
      case "object":
        ne("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Tn.length; a++) ne(Tn[a], e);
        break;
      case "image":
        ne("error", e), ne("load", e);
        break;
      case "details":
        ne("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ne("error", e), ne("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (E in l)
          if (l.hasOwnProperty(E) && ((a = l[E]), a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                ve(e, t, E, a, l, null);
            }
        return;
      default:
        if (zi(t)) {
          for (N in l)
            l.hasOwnProperty(N) &&
              ((a = l[N]), a !== void 0 && of(e, t, N, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && ve(e, t, s, a, l, null));
  }
  function E0(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          s = null,
          h = null,
          E = null,
          N = null;
        for (A in l) {
          var R = l[A];
          if (l.hasOwnProperty(A) && R != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = R;
              default:
                a.hasOwnProperty(A) || ve(e, t, A, null, a, R);
            }
        }
        for (var z in a) {
          var A = a[z];
          if (((R = l[z]), a.hasOwnProperty(z) && (A != null || R != null)))
            switch (z) {
              case "type":
                u = A;
                break;
              case "name":
                n = A;
                break;
              case "checked":
                E = A;
                break;
              case "defaultChecked":
                N = A;
                break;
              case "value":
                i = A;
                break;
              case "defaultValue":
                s = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(f(137, t));
                break;
              default:
                A !== R && ve(e, t, z, A, a, R);
            }
        }
        Ei(e, i, s, h, E, N, u, n);
        return;
      case "select":
        A = i = s = z = null;
        for (u in l)
          if (((h = l[u]), l.hasOwnProperty(u) && h != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                A = h;
              default:
                a.hasOwnProperty(u) || ve(e, t, u, null, a, h);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (h = l[n]),
            a.hasOwnProperty(n) && (u != null || h != null))
          )
            switch (n) {
              case "value":
                z = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== h && ve(e, t, n, u, a, h);
            }
        (t = s),
          (l = i),
          (a = A),
          z != null
            ? ta(e, !!l, z, !1)
            : !!a != !!l &&
              (t != null ? ta(e, !!l, t, !0) : ta(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        A = z = null;
        for (s in l)
          if (
            ((n = l[s]),
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                ve(e, t, s, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = l[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                z = n;
                break;
              case "defaultValue":
                A = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && ve(e, t, i, n, a, u);
            }
        os(e, z, A);
        return;
      case "option":
        for (var q in l)
          if (
            ((z = l[q]),
            l.hasOwnProperty(q) && z != null && !a.hasOwnProperty(q))
          )
            switch (q) {
              case "selected":
                e.selected = !1;
                break;
              default:
                ve(e, t, q, null, a, z);
            }
        for (h in a)
          if (
            ((z = a[h]),
            (A = l[h]),
            a.hasOwnProperty(h) && z !== A && (z != null || A != null))
          )
            switch (h) {
              case "selected":
                e.selected =
                  z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                ve(e, t, h, z, a, A);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var J in l)
          (z = l[J]),
            l.hasOwnProperty(J) &&
              z != null &&
              !a.hasOwnProperty(J) &&
              ve(e, t, J, null, a, z);
        for (E in a)
          if (
            ((z = a[E]),
            (A = l[E]),
            a.hasOwnProperty(E) && z !== A && (z != null || A != null))
          )
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(f(137, t));
                break;
              default:
                ve(e, t, E, z, a, A);
            }
        return;
      default:
        if (zi(t)) {
          for (var pe in l)
            (z = l[pe]),
              l.hasOwnProperty(pe) &&
                z !== void 0 &&
                !a.hasOwnProperty(pe) &&
                of(e, t, pe, void 0, a, z);
          for (N in a)
            (z = a[N]),
              (A = l[N]),
              !a.hasOwnProperty(N) ||
                z === A ||
                (z === void 0 && A === void 0) ||
                of(e, t, N, z, a, A);
          return;
        }
    }
    for (var b in l)
      (z = l[b]),
        l.hasOwnProperty(b) &&
          z != null &&
          !a.hasOwnProperty(b) &&
          ve(e, t, b, null, a, z);
    for (R in a)
      (z = a[R]),
        (A = l[R]),
        !a.hasOwnProperty(R) ||
          z === A ||
          (z == null && A == null) ||
          ve(e, t, R, z, a, A);
  }
  function gd(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function T0() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          i = n.initiatorType,
          s = n.duration;
        if (u && s && gd(i)) {
          for (i = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var h = l[a],
              E = h.startTime;
            if (E > s) break;
            var N = h.transferSize,
              R = h.initiatorType;
            N &&
              gd(R) &&
              ((h = h.responseEnd), (i += N * (h < s ? 1 : (s - E) / (h - E))));
          }
          if ((--a, (t += (8 * (u + i)) / (n.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var df = null,
    hf = null;
  function Zu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function vd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function pd(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function mf(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yf = null;
  function z0() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === yf
        ? !1
        : ((yf = e), !0)
      : ((yf = null), !1);
  }
  var bd = typeof setTimeout == "function" ? setTimeout : void 0,
    A0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    xd = typeof Promise == "function" ? Promise : void 0,
    N0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof xd < "u"
        ? function (e) {
            return xd.resolve(null).then(e).catch(j0);
          }
        : bd;
  function j0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function El(e) {
    return e === "head";
  }
  function Sd(e, t) {
    var l = t,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((e.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            e.removeChild(n), Ca(t);
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") An(e.ownerDocument.documentElement);
        else if (l === "head") {
          (l = e.ownerDocument.head), An(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling,
              s = u.nodeName;
            u[Qa] ||
              s === "SCRIPT" ||
              s === "STYLE" ||
              (s === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(u),
              (u = i);
          }
        } else l === "body" && An(e.ownerDocument.body);
      l = n;
    } while (l);
    Ca(t);
  }
  function Ed(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (t
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (e === 0) break;
          e--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || e++;
      l = a;
    } while (l);
  }
  function gf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          gf(l), xi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function M0(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[Qa])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                e.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = Tt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function O0(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = Tt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Td(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Tt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function vf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function pf(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function _0(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var a = function () {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a);
    }
  }
  function Tt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var bf = null;
  function zd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return Tt(e.nextSibling);
          t--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Ad(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else (l !== "/$" && l !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Nd(e, t, l) {
    switch (((t = Zu(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(f(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(f(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(f(454));
        return e;
      default:
        throw Error(f(451));
    }
  }
  function An(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    xi(e);
  }
  var zt = new Map(),
    jd = new Set();
  function Vu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var Pt = U.d;
  U.d = { f: D0, r: R0, D: C0, C: w0, L: U0, m: H0, X: q0, S: B0, M: L0 };
  function D0() {
    var e = Pt.f(),
      t = Hu();
    return e || t;
  }
  function R0(e) {
    var t = Il(e);
    t !== null && t.tag === 5 && t.type === "form" ? Xr(t) : Pt.r(e);
  }
  var _a = typeof document > "u" ? null : document;
  function Md(e, t, l) {
    var a = _a;
    if (a && typeof t == "string" && t) {
      var n = gt(t);
      (n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        jd.has(n) ||
          (jd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            Ve(t, "link", e),
            Le(t),
            a.head.appendChild(t)));
    }
  }
  function C0(e) {
    Pt.D(e), Md("dns-prefetch", e, null);
  }
  function w0(e, t) {
    Pt.C(e, t), Md("preconnect", e, t);
  }
  function U0(e, t, l) {
    Pt.L(e, t, l);
    var a = _a;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + gt(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + gt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + gt(l.imageSizes) + '"]'))
        : (n += '[href="' + gt(e) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = Da(e);
          break;
        case "script":
          u = Ra(e);
      }
      zt.has(u) ||
        ((e = w(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l
        )),
        zt.set(u, e),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(Nn(u))) ||
          (t === "script" && a.querySelector(jn(u))) ||
          ((t = a.createElement("link")),
          Ve(t, "link", e),
          Le(t),
          a.head.appendChild(t)));
    }
  }
  function H0(e, t) {
    Pt.m(e, t);
    var l = _a;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + gt(a) + '"][href="' + gt(e) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ra(e);
      }
      if (
        !zt.has(u) &&
        ((e = w({ rel: "modulepreload", href: e }, t)),
        zt.set(u, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(jn(u))) return;
        }
        (a = l.createElement("link")),
          Ve(a, "link", e),
          Le(a),
          l.head.appendChild(a);
      }
    }
  }
  function B0(e, t, l) {
    Pt.S(e, t, l);
    var a = _a;
    if (a && e) {
      var n = Pl(a).hoistableStyles,
        u = Da(e);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var s = { loading: 0, preload: null };
        if ((i = a.querySelector(Nn(u)))) s.loading = 5;
        else {
          (e = w({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = zt.get(u)) && xf(e, l);
          var h = (i = a.createElement("link"));
          Le(h),
            Ve(h, "link", e),
            (h._p = new Promise(function (E, N) {
              (h.onload = E), (h.onerror = N);
            })),
            h.addEventListener("load", function () {
              s.loading |= 1;
            }),
            h.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Ku(i, t, a);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: s }),
          n.set(u, i);
      }
    }
  }
  function q0(e, t) {
    Pt.X(e, t);
    var l = _a;
    if (l && e) {
      var a = Pl(l).hoistableScripts,
        n = Ra(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(jn(n))),
        u ||
          ((e = w({ src: e, async: !0 }, t)),
          (t = zt.get(n)) && Sf(e, t),
          (u = l.createElement("script")),
          Le(u),
          Ve(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function L0(e, t) {
    Pt.M(e, t);
    var l = _a;
    if (l && e) {
      var a = Pl(l).hoistableScripts,
        n = Ra(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(jn(n))),
        u ||
          ((e = w({ src: e, async: !0, type: "module" }, t)),
          (t = zt.get(n)) && Sf(e, t),
          (u = l.createElement("script")),
          Le(u),
          Ve(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Od(e, t, l, a) {
    var n = (n = le.current) ? Vu(n) : null;
    if (!n) throw Error(f(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = Da(l.href)),
            (l = Pl(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = Da(l.href);
          var u = Pl(n).hoistableStyles,
            i = u.get(e);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, i),
              (u = n.querySelector(Nn(e))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              zt.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                zt.set(e, l),
                u || Y0(n, e, l, i.state))),
            t && a === null)
          )
            throw Error(f(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ra(l)),
              (l = Pl(n).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, e));
    }
  }
  function Da(e) {
    return 'href="' + gt(e) + '"';
  }
  function Nn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function _d(e) {
    return w({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Y0(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Ve(t, "link", l),
        Le(t),
        e.head.appendChild(t));
  }
  function Ra(e) {
    return '[src="' + gt(e) + '"]';
  }
  function jn(e) {
    return "script[async]" + e;
  }
  function Dd(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + gt(l.href) + '"]');
          if (a) return (t.instance = a), Le(a), a;
          var n = w({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            Le(a),
            Ve(a, "style", n),
            Ku(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = Da(l.href);
          var u = e.querySelector(Nn(n));
          if (u) return (t.state.loading |= 4), (t.instance = u), Le(u), u;
          (a = _d(l)),
            (n = zt.get(n)) && xf(a, n),
            (u = (e.ownerDocument || e).createElement("link")),
            Le(u);
          var i = u;
          return (
            (i._p = new Promise(function (s, h) {
              (i.onload = s), (i.onerror = h);
            })),
            Ve(u, "link", a),
            (t.state.loading |= 4),
            Ku(u, l.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = Ra(l.src)),
            (n = e.querySelector(jn(u)))
              ? ((t.instance = n), Le(n), n)
              : ((a = l),
                (n = zt.get(u)) && ((a = w({}, l)), Sf(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                Le(n),
                Ve(n, "link", a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Ku(a, l.precedence, e));
    return t.instance;
  }
  function Ku(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var s = a[i];
      if (s.dataset.precedence === t) u = s;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function xf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Sf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Ju = null;
  function Rd(e, t, l) {
    if (Ju === null) {
      var a = new Map(),
        n = (Ju = new Map());
      n.set(l, a);
    } else (n = Ju), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[Qa] ||
          u[Ge] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(t) || "";
        i = e + i;
        var s = a.get(i);
        s ? s.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function Cd(e, t, l) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function G0(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function wd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Q0(e, t, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Da(a.href),
          u = t.querySelector(Nn(n));
        if (u) {
          (t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = ku.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = u),
            Le(u);
          return;
        }
        (u = t.ownerDocument || t),
          (a = _d(a)),
          (n = zt.get(n)) && xf(a, n),
          (u = u.createElement("link")),
          Le(u);
        var i = u;
        (i._p = new Promise(function (s, h) {
          (i.onload = s), (i.onerror = h);
        })),
          Ve(u, "link", a),
          (l.instance = u);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = ku.bind(e)),
          t.addEventListener("load", l),
          t.addEventListener("error", l));
    }
  }
  var Ef = 0;
  function X0(e, t) {
    return (
      e.stylesheets && e.count === 0 && Fu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Fu(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                (e.unsuspend = null), u();
              }
            }, 6e4 + t);
            0 < e.imgBytes && Ef === 0 && (Ef = 62500 * T0());
            var n = setTimeout(function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 &&
                  (e.stylesheets && Fu(e, e.stylesheets), e.unsuspend))
              ) {
                var u = e.unsuspend;
                (e.unsuspend = null), u();
              }
            }, (e.imgBytes > Ef ? 50 : 800) + t);
            return (
              (e.unsuspend = l),
              function () {
                (e.unsuspend = null), clearTimeout(a), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function ku() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Fu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Wu = null;
  function Fu(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Wu = new Map()),
        t.forEach(Z0, e),
        (Wu = null),
        ku.call(e));
  }
  function Z0(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Wu.get(e);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), Wu.set(e, l);
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (l.set(i.dataset.precedence, i), (a = i));
        }
        a && l.set(null, a);
      }
      (n = t.instance),
        (i = n.getAttribute("data-precedence")),
        (u = l.get(i) || a),
        u === a && l.set(null, n),
        l.set(i, n),
        this.count++,
        (a = ku.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Mn = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0,
  };
  function V0(e, t, l, a, n, u, i, s, h) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = gi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = gi(0)),
      (this.hiddenUpdates = gi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = h),
      (this.incompleteTransitions = new Map());
  }
  function Ud(e, t, l, a, n, u, i, s, h, E, N, R) {
    return (
      (e = new V0(e, t, l, i, h, E, N, R, s)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = st(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = ec()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      nc(u),
      e
    );
  }
  function Hd(e) {
    return e ? ((e = sa), e) : sa;
  }
  function Bd(e, t, l, a, n, u) {
    (n = Hd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = ol(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = dl(e, a, t)),
      l !== null && (lt(l, e, t), un(l, e, t));
  }
  function qd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Tf(e, t) {
    qd(e, t), (e = e.alternate) && qd(e, t);
  }
  function Ld(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ul(e, 67108864);
      t !== null && lt(t, e, 67108864), Tf(e, 67108864);
    }
  }
  function Yd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = mt();
      t = vi(t);
      var l = Ul(e, t);
      l !== null && lt(l, e, t), Tf(e, t);
    }
  }
  var $u = !0;
  function K0(e, t, l, a) {
    var n = O.T;
    O.T = null;
    var u = U.p;
    try {
      (U.p = 2), zf(e, t, l, a);
    } finally {
      (U.p = u), (O.T = n);
    }
  }
  function J0(e, t, l, a) {
    var n = O.T;
    O.T = null;
    var u = U.p;
    try {
      (U.p = 8), zf(e, t, l, a);
    } finally {
      (U.p = u), (O.T = n);
    }
  }
  function zf(e, t, l, a) {
    if ($u) {
      var n = Af(a);
      if (n === null) rf(e, t, a, Iu, l), Qd(e, a);
      else if (W0(n, e, t, l, a)) a.stopPropagation();
      else if ((Qd(e, a), t & 4 && -1 < k0.indexOf(e))) {
        for (; n !== null; ) {
          var u = Il(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = _l(u.pendingLanes);
                  if (i !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                      var h = 1 << (31 - ct(i));
                      (s.entanglements[1] |= h), (i &= ~h);
                    }
                    Ct(u), (re & 6) === 0 && ((wu = ut() + 500), En(0));
                  }
                }
                break;
              case 31:
              case 13:
                (s = Ul(u, 2)), s !== null && lt(s, u, 2), Hu(), Tf(u, 2);
            }
          if (((u = Af(a)), u === null && rf(e, t, a, Iu, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else rf(e, t, a, null, l);
    }
  }
  function Af(e) {
    return (e = Ni(e)), Nf(e);
  }
  var Iu = null;
  function Nf(e) {
    if (((Iu = null), (e = $l(e)), e !== null)) {
      var t = p(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = T(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = D(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Iu = e), null;
  }
  function Gd(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ch()) {
          case kf:
            return 2;
          case Wf:
            return 8;
          case Gn:
          case wh:
            return 32;
          case Ff:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var jf = !1,
    Tl = null,
    zl = null,
    Al = null,
    On = new Map(),
    _n = new Map(),
    Nl = [],
    k0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Qd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tl = null;
        break;
      case "dragenter":
      case "dragleave":
        zl = null;
        break;
      case "mouseover":
      case "mouseout":
        Al = null;
        break;
      case "pointerover":
      case "pointerout":
        On.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _n.delete(t.pointerId);
    }
  }
  function Dn(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = Il(t)), t !== null && Ld(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function W0(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return (Tl = Dn(Tl, e, t, l, a, n)), !0;
      case "dragenter":
        return (zl = Dn(zl, e, t, l, a, n)), !0;
      case "mouseover":
        return (Al = Dn(Al, e, t, l, a, n)), !0;
      case "pointerover":
        var u = n.pointerId;
        return On.set(u, Dn(On.get(u) || null, e, t, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (u = n.pointerId), _n.set(u, Dn(_n.get(u) || null, e, t, l, a, n)), !0
        );
    }
    return !1;
  }
  function Xd(e) {
    var t = $l(e.target);
    if (t !== null) {
      var l = p(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = T(l)), t !== null)) {
            (e.blockedOn = t),
              ls(e.priority, function () {
                Yd(l);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = D(l)), t !== null)) {
            (e.blockedOn = t),
              ls(e.priority, function () {
                Yd(l);
              });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Pu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Af(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        (Ai = a), l.target.dispatchEvent(a), (Ai = null);
      } else return (t = Il(l)), t !== null && Ld(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function Zd(e, t, l) {
    Pu(e) && l.delete(t);
  }
  function F0() {
    (jf = !1),
      Tl !== null && Pu(Tl) && (Tl = null),
      zl !== null && Pu(zl) && (zl = null),
      Al !== null && Pu(Al) && (Al = null),
      On.forEach(Zd),
      _n.forEach(Zd);
  }
  function ei(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      jf ||
        ((jf = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, F0)));
  }
  var ti = null;
  function Vd(e) {
    ti !== e &&
      ((ti = e),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        ti === e && (ti = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != "function") {
            if (Nf(a || l) === null) continue;
            break;
          }
          var u = Il(l);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            zc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Ca(e) {
    function t(h) {
      return ei(h, e);
    }
    Tl !== null && ei(Tl, e),
      zl !== null && ei(zl, e),
      Al !== null && ei(Al, e),
      On.forEach(t),
      _n.forEach(t);
    for (var l = 0; l < Nl.length; l++) {
      var a = Nl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Nl.length && ((l = Nl[0]), l.blockedOn === null); )
      Xd(l), l.blockedOn === null && Nl.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          i = n[Fe] || null;
        if (typeof u == "function") i || Vd(l);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[Fe] || null))) s = i.formAction;
            else if (Nf(n) !== null) continue;
          } else s = i.action;
          typeof s == "function" ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            Vd(l);
        }
      }
  }
  function Kd() {
    function e(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      n !== null && (n(), (n = null)), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(l, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            n !== null && (n(), (n = null));
        }
      );
    }
  }
  function Mf(e) {
    this._internalRoot = e;
  }
  (li.prototype.render = Mf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(f(409));
      var l = t.current,
        a = mt();
      Bd(l, a, e, t, null, null);
    }),
    (li.prototype.unmount = Mf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Bd(e.current, 2, null, e, null, null), Hu(), (t[Fl] = null);
        }
      });
  function li(e) {
    this._internalRoot = e;
  }
  li.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ts();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Nl.length && t !== 0 && t < Nl[l].priority; l++);
      Nl.splice(l, 0, e), l === 0 && Xd(e);
    }
  };
  var Jd = r.version;
  if (Jd !== "19.2.0") throw Error(f(527, Jd, "19.2.0"));
  U.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(f(188))
        : ((e = Object.keys(e).join(",")), Error(f(268, e)));
    return (
      (e = g(t)),
      (e = e !== null ? j(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var $0 = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ai.isDisabled && ai.supportsFiber)
      try {
        (La = ai.inject($0)), (it = ai);
      } catch {}
  }
  return (
    (Cn.createRoot = function (e, t) {
      if (!m(e)) throw Error(f(299));
      var l = !1,
        a = "",
        n = Pr,
        u = eo,
        i = to;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Ud(e, 1, !1, null, null, l, a, null, n, u, i, Kd)),
        (e[Fl] = t.current),
        sf(e),
        new Mf(t)
      );
    }),
    (Cn.hydrateRoot = function (e, t, l) {
      if (!m(e)) throw Error(f(299));
      var a = !1,
        n = "",
        u = Pr,
        i = eo,
        s = to,
        h = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.formState !== void 0 && (h = l.formState)),
        (t = Ud(e, 1, !0, t, l ?? null, a, n, h, u, i, s, Kd)),
        (t.context = Hd(null)),
        (l = t.current),
        (a = mt()),
        (a = vi(a)),
        (n = ol(a)),
        (n.callback = null),
        dl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        Ga(t, l),
        Ct(t),
        (e[Fl] = t.current),
        sf(e),
        new li(t)
      );
    }),
    (Cn.version = "19.2.0"),
    Cn
  );
}
var ah;
function fy() {
  if (ah) return Df.exports;
  ah = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return c(), (Df.exports = cy()), Df.exports;
}
var sy = fy();
const ry = rh(sy);
/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var nh = "popstate";
function oy(c = {}) {
  function r(m, p) {
    let {
      pathname: T = "/",
      search: D = "",
      hash: x = "",
    } = kl(m.location.hash.substring(1));
    return (
      !T.startsWith("/") && !T.startsWith(".") && (T = "/" + T),
      Bf(
        "",
        { pathname: T, search: D, hash: x },
        (p.state && p.state.usr) || null,
        (p.state && p.state.key) || "default"
      )
    );
  }
  function o(m, p) {
    let T = m.document.querySelector("base"),
      D = "";
    if (T && T.getAttribute("href")) {
      let x = m.location.href,
        g = x.indexOf("#");
      D = g === -1 ? x : x.slice(0, g);
    }
    return D + "#" + (typeof p == "string" ? p : Hn(p));
  }
  function f(m, p) {
    Ot(
      m.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        p
      )})`
    );
  }
  return hy(r, o, f, c);
}
function ze(c, r) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(r);
}
function Ot(c, r) {
  if (!c) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function dy() {
  return Math.random().toString(36).substring(2, 10);
}
function uh(c, r) {
  return { usr: c.state, key: c.key, idx: r };
}
function Bf(c, r, o = null, f) {
  return {
    pathname: typeof c == "string" ? c : c.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? kl(r) : r),
    state: o,
    key: (r && r.key) || f || dy(),
  };
}
function Hn({ pathname: c = "/", search: r = "", hash: o = "" }) {
  return (
    r && r !== "?" && (c += r.charAt(0) === "?" ? r : "?" + r),
    o && o !== "#" && (c += o.charAt(0) === "#" ? o : "#" + o),
    c
  );
}
function kl(c) {
  let r = {};
  if (c) {
    let o = c.indexOf("#");
    o >= 0 && ((r.hash = c.substring(o)), (c = c.substring(0, o)));
    let f = c.indexOf("?");
    f >= 0 && ((r.search = c.substring(f)), (c = c.substring(0, f))),
      c && (r.pathname = c);
  }
  return r;
}
function hy(c, r, o, f = {}) {
  let { window: m = document.defaultView, v5Compat: p = !1 } = f,
    T = m.history,
    D = "POP",
    x = null,
    g = j();
  g == null && ((g = 0), T.replaceState({ ...T.state, idx: g }, ""));
  function j() {
    return (T.state || { idx: null }).idx;
  }
  function w() {
    D = "POP";
    let Q = j(),
      X = Q == null ? null : Q - g;
    (g = Q), x && x({ action: D, location: k.location, delta: X });
  }
  function B(Q, X) {
    D = "PUSH";
    let $ = Bf(k.location, Q, X);
    o && o($, Q), (g = j() + 1);
    let L = uh($, g),
      de = k.createHref($);
    try {
      T.pushState(L, "", de);
    } catch (Ae) {
      if (Ae instanceof DOMException && Ae.name === "DataCloneError") throw Ae;
      m.location.assign(de);
    }
    p && x && x({ action: D, location: k.location, delta: 1 });
  }
  function Z(Q, X) {
    D = "REPLACE";
    let $ = Bf(k.location, Q, X);
    o && o($, Q), (g = j());
    let L = uh($, g),
      de = k.createHref($);
    T.replaceState(L, "", de),
      p && x && x({ action: D, location: k.location, delta: 0 });
  }
  function K(Q) {
    return my(Q);
  }
  let k = {
    get action() {
      return D;
    },
    get location() {
      return c(m, T);
    },
    listen(Q) {
      if (x) throw new Error("A history only accepts one active listener");
      return (
        m.addEventListener(nh, w),
        (x = Q),
        () => {
          m.removeEventListener(nh, w), (x = null);
        }
      );
    },
    createHref(Q) {
      return r(m, Q);
    },
    createURL: K,
    encodeLocation(Q) {
      let X = K(Q);
      return { pathname: X.pathname, search: X.search, hash: X.hash };
    },
    push: B,
    replace: Z,
    go(Q) {
      return T.go(Q);
    },
  };
  return k;
}
function my(c, r = !1) {
  let o = "http://localhost";
  typeof window < "u" &&
    (o =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    ze(o, "No window.location.(origin|href) available to create URL");
  let f = typeof c == "string" ? c : Hn(c);
  return (
    (f = f.replace(/ $/, "%20")),
    !r && f.startsWith("//") && (f = o + f),
    new URL(f, o)
  );
}
function oh(c, r, o = "/") {
  return yy(c, r, o, !1);
}
function yy(c, r, o, f) {
  let m = typeof r == "string" ? kl(r) : r,
    p = tl(m.pathname || "/", o);
  if (p == null) return null;
  let T = dh(c);
  gy(T);
  let D = null;
  for (let x = 0; D == null && x < T.length; ++x) {
    let g = jy(p);
    D = Ay(T[x], g, f);
  }
  return D;
}
function dh(c, r = [], o = [], f = "", m = !1) {
  let p = (T, D, x = m, g) => {
    let j = {
      relativePath: g === void 0 ? T.path || "" : g,
      caseSensitive: T.caseSensitive === !0,
      childrenIndex: D,
      route: T,
    };
    if (j.relativePath.startsWith("/")) {
      if (!j.relativePath.startsWith(f) && x) return;
      ze(
        j.relativePath.startsWith(f),
        `Absolute route path "${j.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (j.relativePath = j.relativePath.slice(f.length));
    }
    let w = el([f, j.relativePath]),
      B = o.concat(j);
    T.children &&
      T.children.length > 0 &&
      (ze(
        T.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${w}".`
      ),
      dh(T.children, r, B, w, x)),
      !(T.path == null && !T.index) &&
        r.push({ path: w, score: Ty(w, T.index), routesMeta: B });
  };
  return (
    c.forEach((T, D) => {
      var x;
      if (T.path === "" || !((x = T.path) != null && x.includes("?"))) p(T, D);
      else for (let g of hh(T.path)) p(T, D, !0, g);
    }),
    r
  );
}
function hh(c) {
  let r = c.split("/");
  if (r.length === 0) return [];
  let [o, ...f] = r,
    m = o.endsWith("?"),
    p = o.replace(/\?$/, "");
  if (f.length === 0) return m ? [p, ""] : [p];
  let T = hh(f.join("/")),
    D = [];
  return (
    D.push(...T.map((x) => (x === "" ? p : [p, x].join("/")))),
    m && D.push(...T),
    D.map((x) => (c.startsWith("/") && x === "" ? "/" : x))
  );
}
function gy(c) {
  c.sort((r, o) =>
    r.score !== o.score
      ? o.score - r.score
      : zy(
          r.routesMeta.map((f) => f.childrenIndex),
          o.routesMeta.map((f) => f.childrenIndex)
        )
  );
}
var vy = /^:[\w-]+$/,
  py = 3,
  by = 2,
  xy = 1,
  Sy = 10,
  Ey = -2,
  ih = (c) => c === "*";
function Ty(c, r) {
  let o = c.split("/"),
    f = o.length;
  return (
    o.some(ih) && (f += Ey),
    r && (f += by),
    o
      .filter((m) => !ih(m))
      .reduce((m, p) => m + (vy.test(p) ? py : p === "" ? xy : Sy), f)
  );
}
function zy(c, r) {
  return c.length === r.length && c.slice(0, -1).every((f, m) => f === r[m])
    ? c[c.length - 1] - r[r.length - 1]
    : 0;
}
function Ay(c, r, o = !1) {
  let { routesMeta: f } = c,
    m = {},
    p = "/",
    T = [];
  for (let D = 0; D < f.length; ++D) {
    let x = f[D],
      g = D === f.length - 1,
      j = p === "/" ? r : r.slice(p.length) || "/",
      w = ci(
        { path: x.relativePath, caseSensitive: x.caseSensitive, end: g },
        j
      ),
      B = x.route;
    if (
      (!w &&
        g &&
        o &&
        !f[f.length - 1].route.index &&
        (w = ci(
          { path: x.relativePath, caseSensitive: x.caseSensitive, end: !1 },
          j
        )),
      !w)
    )
      return null;
    Object.assign(m, w.params),
      T.push({
        params: m,
        pathname: el([p, w.pathname]),
        pathnameBase: Dy(el([p, w.pathnameBase])),
        route: B,
      }),
      w.pathnameBase !== "/" && (p = el([p, w.pathnameBase]));
  }
  return T;
}
function ci(c, r) {
  typeof c == "string" && (c = { path: c, caseSensitive: !1, end: !0 });
  let [o, f] = Ny(c.path, c.caseSensitive, c.end),
    m = r.match(o);
  if (!m) return null;
  let p = m[0],
    T = p.replace(/(.)\/+$/, "$1"),
    D = m.slice(1);
  return {
    params: f.reduce((g, { paramName: j, isOptional: w }, B) => {
      if (j === "*") {
        let K = D[B] || "";
        T = p.slice(0, p.length - K.length).replace(/(.)\/+$/, "$1");
      }
      const Z = D[B];
      return (
        w && !Z ? (g[j] = void 0) : (g[j] = (Z || "").replace(/%2F/g, "/")), g
      );
    }, {}),
    pathname: p,
    pathnameBase: T,
    pattern: c,
  };
}
function Ny(c, r = !1, o = !0) {
  Ot(
    c === "*" || !c.endsWith("*") || c.endsWith("/*"),
    `Route path "${c}" will be treated as if it were "${c.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let f = [],
    m =
      "^" +
      c
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (T, D, x) => (
            f.push({ paramName: D, isOptional: x != null }),
            x ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    c.endsWith("*")
      ? (f.push({ paramName: "*" }),
        (m += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
      ? (m += "\\/*$")
      : c !== "" && c !== "/" && (m += "(?:(?=\\/|$))"),
    [new RegExp(m, r ? void 0 : "i"), f]
  );
}
function jy(c) {
  try {
    return c
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      Ot(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
      ),
      c
    );
  }
}
function tl(c, r) {
  if (r === "/") return c;
  if (!c.toLowerCase().startsWith(r.toLowerCase())) return null;
  let o = r.endsWith("/") ? r.length - 1 : r.length,
    f = c.charAt(o);
  return f && f !== "/" ? null : c.slice(o) || "/";
}
function My(c, r = "/") {
  let {
    pathname: o,
    search: f = "",
    hash: m = "",
  } = typeof c == "string" ? kl(c) : c;
  return {
    pathname: o ? (o.startsWith("/") ? o : Oy(o, r)) : r,
    search: Ry(f),
    hash: Cy(m),
  };
}
function Oy(c, r) {
  let o = r.replace(/\/+$/, "").split("/");
  return (
    c.split("/").forEach((m) => {
      m === ".." ? o.length > 1 && o.pop() : m !== "." && o.push(m);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function Uf(c, r, o, f) {
  return `Cannot include a '${c}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    f
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function _y(c) {
  return c.filter(
    (r, o) => o === 0 || (r.route.path && r.route.path.length > 0)
  );
}
function mh(c) {
  let r = _y(c);
  return r.map((o, f) => (f === r.length - 1 ? o.pathname : o.pathnameBase));
}
function yh(c, r, o, f = !1) {
  let m;
  typeof c == "string"
    ? (m = kl(c))
    : ((m = { ...c }),
      ze(
        !m.pathname || !m.pathname.includes("?"),
        Uf("?", "pathname", "search", m)
      ),
      ze(
        !m.pathname || !m.pathname.includes("#"),
        Uf("#", "pathname", "hash", m)
      ),
      ze(!m.search || !m.search.includes("#"), Uf("#", "search", "hash", m)));
  let p = c === "" || m.pathname === "",
    T = p ? "/" : m.pathname,
    D;
  if (T == null) D = o;
  else {
    let w = r.length - 1;
    if (!f && T.startsWith("..")) {
      let B = T.split("/");
      for (; B[0] === ".."; ) B.shift(), (w -= 1);
      m.pathname = B.join("/");
    }
    D = w >= 0 ? r[w] : "/";
  }
  let x = My(m, D),
    g = T && T !== "/" && T.endsWith("/"),
    j = (p || T === ".") && o.endsWith("/");
  return !x.pathname.endsWith("/") && (g || j) && (x.pathname += "/"), x;
}
var el = (c) => c.join("/").replace(/\/\/+/g, "/"),
  Dy = (c) => c.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ry = (c) => (!c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c),
  Cy = (c) => (!c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c);
function wy(c) {
  return (
    c != null &&
    typeof c.status == "number" &&
    typeof c.statusText == "string" &&
    typeof c.internal == "boolean" &&
    "data" in c
  );
}
var gh = ["POST", "PUT", "PATCH", "DELETE"];
new Set(gh);
var Uy = ["GET", ...gh];
new Set(Uy);
var Ba = M.createContext(null);
Ba.displayName = "DataRouter";
var fi = M.createContext(null);
fi.displayName = "DataRouterState";
M.createContext(!1);
var vh = M.createContext({ isTransitioning: !1 });
vh.displayName = "ViewTransition";
var Hy = M.createContext(new Map());
Hy.displayName = "Fetchers";
var By = M.createContext(null);
By.displayName = "Await";
var wt = M.createContext(null);
wt.displayName = "Navigation";
var Bn = M.createContext(null);
Bn.displayName = "Location";
var ll = M.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ll.displayName = "Route";
var Gf = M.createContext(null);
Gf.displayName = "RouteError";
function qy(c, { relative: r } = {}) {
  ze(
    qn(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: f } = M.useContext(wt),
    { hash: m, pathname: p, search: T } = Ln(c, { relative: r }),
    D = p;
  return (
    o !== "/" && (D = p === "/" ? o : el([o, p])),
    f.createHref({ pathname: D, search: T, hash: m })
  );
}
function qn() {
  return M.useContext(Bn) != null;
}
function Wl() {
  return (
    ze(
      qn(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    M.useContext(Bn).location
  );
}
var ph =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function bh(c) {
  M.useContext(wt).static || M.useLayoutEffect(c);
}
function Ly() {
  let { isDataRoute: c } = M.useContext(ll);
  return c ? Iy() : Yy();
}
function Yy() {
  ze(
    qn(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let c = M.useContext(Ba),
    { basename: r, navigator: o } = M.useContext(wt),
    { matches: f } = M.useContext(ll),
    { pathname: m } = Wl(),
    p = JSON.stringify(mh(f)),
    T = M.useRef(!1);
  return (
    bh(() => {
      T.current = !0;
    }),
    M.useCallback(
      (x, g = {}) => {
        if ((Ot(T.current, ph), !T.current)) return;
        if (typeof x == "number") {
          o.go(x);
          return;
        }
        let j = yh(x, JSON.parse(p), m, g.relative === "path");
        c == null &&
          r !== "/" &&
          (j.pathname = j.pathname === "/" ? r : el([r, j.pathname])),
          (g.replace ? o.replace : o.push)(j, g.state, g);
      },
      [r, o, p, m, c]
    )
  );
}
M.createContext(null);
function Ln(c, { relative: r } = {}) {
  let { matches: o } = M.useContext(ll),
    { pathname: f } = Wl(),
    m = JSON.stringify(mh(o));
  return M.useMemo(() => yh(c, JSON.parse(m), f, r === "path"), [c, m, f, r]);
}
function Gy(c, r) {
  return xh(c, r);
}
function xh(c, r, o, f, m) {
  var $;
  ze(
    qn(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: p } = M.useContext(wt),
    { matches: T } = M.useContext(ll),
    D = T[T.length - 1],
    x = D ? D.params : {},
    g = D ? D.pathname : "/",
    j = D ? D.pathnameBase : "/",
    w = D && D.route;
  {
    let L = (w && w.path) || "";
    Sh(
      g,
      !w || L.endsWith("*") || L.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${
        L === "/" ? "*" : `${L}/*`
      }">.`
    );
  }
  let B = Wl(),
    Z;
  if (r) {
    let L = typeof r == "string" ? kl(r) : r;
    ze(
      j === "/" || (($ = L.pathname) == null ? void 0 : $.startsWith(j)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${j}" but pathname "${L.pathname}" was given in the \`location\` prop.`
    ),
      (Z = L);
  } else Z = B;
  let K = Z.pathname || "/",
    k = K;
  if (j !== "/") {
    let L = j.replace(/^\//, "").split("/");
    k = "/" + K.replace(/^\//, "").split("/").slice(L.length).join("/");
  }
  let Q = oh(c, { pathname: k });
  Ot(
    w || Q != null,
    `No routes matched location "${Z.pathname}${Z.search}${Z.hash}" `
  ),
    Ot(
      Q == null ||
        Q[Q.length - 1].route.element !== void 0 ||
        Q[Q.length - 1].route.Component !== void 0 ||
        Q[Q.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${Z.pathname}${Z.search}${Z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let X = Ky(
    Q &&
      Q.map((L) =>
        Object.assign({}, L, {
          params: Object.assign({}, x, L.params),
          pathname: el([
            j,
            p.encodeLocation
              ? p.encodeLocation(
                  L.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
                ).pathname
              : L.pathname,
          ]),
          pathnameBase:
            L.pathnameBase === "/"
              ? j
              : el([
                  j,
                  p.encodeLocation
                    ? p.encodeLocation(
                        L.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23")
                      ).pathname
                    : L.pathnameBase,
                ]),
        })
      ),
    T,
    o,
    f,
    m
  );
  return r && X
    ? M.createElement(
        Bn.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...Z,
            },
            navigationType: "POP",
          },
        },
        X
      )
    : X;
}
function Qy() {
  let c = $y(),
    r = wy(c)
      ? `${c.status} ${c.statusText}`
      : c instanceof Error
      ? c.message
      : JSON.stringify(c),
    o = c instanceof Error ? c.stack : null,
    f = "rgba(200,200,200, 0.5)",
    m = { padding: "0.5rem", backgroundColor: f },
    p = { padding: "2px 4px", backgroundColor: f },
    T = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", c),
    (T = M.createElement(
      M.Fragment,
      null,
      M.createElement("p", null, "💿 Hey developer 👋"),
      M.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        M.createElement("code", { style: p }, "ErrorBoundary"),
        " or",
        " ",
        M.createElement("code", { style: p }, "errorElement"),
        " prop on your route."
      )
    )),
    M.createElement(
      M.Fragment,
      null,
      M.createElement("h2", null, "Unexpected Application Error!"),
      M.createElement("h3", { style: { fontStyle: "italic" } }, r),
      o ? M.createElement("pre", { style: m }, o) : null,
      T
    )
  );
}
var Xy = M.createElement(Qy, null),
  Zy = class extends M.Component {
    constructor(c) {
      super(c),
        (this.state = {
          location: c.location,
          revalidation: c.revalidation,
          error: c.error,
        });
    }
    static getDerivedStateFromError(c) {
      return { error: c };
    }
    static getDerivedStateFromProps(c, r) {
      return r.location !== c.location ||
        (r.revalidation !== "idle" && c.revalidation === "idle")
        ? { error: c.error, location: c.location, revalidation: c.revalidation }
        : {
            error: c.error !== void 0 ? c.error : r.error,
            location: r.location,
            revalidation: c.revalidation || r.revalidation,
          };
    }
    componentDidCatch(c, r) {
      this.props.unstable_onError
        ? this.props.unstable_onError(c, r)
        : console.error(
            "React Router caught the following error during render",
            c
          );
    }
    render() {
      return this.state.error !== void 0
        ? M.createElement(
            ll.Provider,
            { value: this.props.routeContext },
            M.createElement(Gf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Vy({ routeContext: c, match: r, children: o }) {
  let f = M.useContext(Ba);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = r.route.id),
    M.createElement(ll.Provider, { value: c }, o)
  );
}
function Ky(c, r = [], o = null, f = null, m = null) {
  if (c == null) {
    if (!o) return null;
    if (o.errors) c = o.matches;
    else if (r.length === 0 && !o.initialized && o.matches.length > 0)
      c = o.matches;
    else return null;
  }
  let p = c,
    T = o == null ? void 0 : o.errors;
  if (T != null) {
    let g = p.findIndex(
      (j) => j.route.id && (T == null ? void 0 : T[j.route.id]) !== void 0
    );
    ze(
      g >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        T
      ).join(",")}`
    ),
      (p = p.slice(0, Math.min(p.length, g + 1)));
  }
  let D = !1,
    x = -1;
  if (o)
    for (let g = 0; g < p.length; g++) {
      let j = p[g];
      if (
        ((j.route.HydrateFallback || j.route.hydrateFallbackElement) && (x = g),
        j.route.id)
      ) {
        let { loaderData: w, errors: B } = o,
          Z =
            j.route.loader &&
            !w.hasOwnProperty(j.route.id) &&
            (!B || B[j.route.id] === void 0);
        if (j.route.lazy || Z) {
          (D = !0), x >= 0 ? (p = p.slice(0, x + 1)) : (p = [p[0]]);
          break;
        }
      }
    }
  return p.reduceRight((g, j, w) => {
    let B,
      Z = !1,
      K = null,
      k = null;
    o &&
      ((B = T && j.route.id ? T[j.route.id] : void 0),
      (K = j.route.errorElement || Xy),
      D &&
        (x < 0 && w === 0
          ? (Sh(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (Z = !0),
            (k = null))
          : x === w &&
            ((Z = !0), (k = j.route.hydrateFallbackElement || null))));
    let Q = r.concat(p.slice(0, w + 1)),
      X = () => {
        let $;
        return (
          B
            ? ($ = K)
            : Z
            ? ($ = k)
            : j.route.Component
            ? ($ = M.createElement(j.route.Component, null))
            : j.route.element
            ? ($ = j.route.element)
            : ($ = g),
          M.createElement(Vy, {
            match: j,
            routeContext: { outlet: g, matches: Q, isDataRoute: o != null },
            children: $,
          })
        );
      };
    return o && (j.route.ErrorBoundary || j.route.errorElement || w === 0)
      ? M.createElement(Zy, {
          location: o.location,
          revalidation: o.revalidation,
          component: K,
          error: B,
          children: X(),
          routeContext: { outlet: null, matches: Q, isDataRoute: !0 },
          unstable_onError: f,
        })
      : X();
  }, null);
}
function Qf(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Jy(c) {
  let r = M.useContext(Ba);
  return ze(r, Qf(c)), r;
}
function ky(c) {
  let r = M.useContext(fi);
  return ze(r, Qf(c)), r;
}
function Wy(c) {
  let r = M.useContext(ll);
  return ze(r, Qf(c)), r;
}
function Xf(c) {
  let r = Wy(c),
    o = r.matches[r.matches.length - 1];
  return (
    ze(
      o.route.id,
      `${c} can only be used on routes that contain a unique "id"`
    ),
    o.route.id
  );
}
function Fy() {
  return Xf("useRouteId");
}
function $y() {
  var f;
  let c = M.useContext(Gf),
    r = ky("useRouteError"),
    o = Xf("useRouteError");
  return c !== void 0 ? c : (f = r.errors) == null ? void 0 : f[o];
}
function Iy() {
  let { router: c } = Jy("useNavigate"),
    r = Xf("useNavigate"),
    o = M.useRef(!1);
  return (
    bh(() => {
      o.current = !0;
    }),
    M.useCallback(
      async (m, p = {}) => {
        Ot(o.current, ph),
          o.current &&
            (typeof m == "number"
              ? c.navigate(m)
              : await c.navigate(m, { fromRouteId: r, ...p }));
      },
      [c, r]
    )
  );
}
var ch = {};
function Sh(c, r, o) {
  !r && !ch[c] && ((ch[c] = !0), Ot(!1, o));
}
M.memo(Py);
function Py({ routes: c, future: r, state: o, unstable_onError: f }) {
  return xh(c, void 0, o, f, r);
}
function wa(c) {
  ze(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function eg({
  basename: c = "/",
  children: r = null,
  location: o,
  navigationType: f = "POP",
  navigator: m,
  static: p = !1,
}) {
  ze(
    !qn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let T = c.replace(/^\/*/, "/"),
    D = M.useMemo(
      () => ({ basename: T, navigator: m, static: p, future: {} }),
      [T, m, p]
    );
  typeof o == "string" && (o = kl(o));
  let {
      pathname: x = "/",
      search: g = "",
      hash: j = "",
      state: w = null,
      key: B = "default",
    } = o,
    Z = M.useMemo(() => {
      let K = tl(x, T);
      return K == null
        ? null
        : {
            location: { pathname: K, search: g, hash: j, state: w, key: B },
            navigationType: f,
          };
    }, [T, x, g, j, w, B, f]);
  return (
    Ot(
      Z != null,
      `<Router basename="${T}"> is not able to match the URL "${x}${g}${j}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    Z == null
      ? null
      : M.createElement(
          wt.Provider,
          { value: D },
          M.createElement(Bn.Provider, { children: r, value: Z })
        )
  );
}
function tg({ children: c, location: r }) {
  return Gy(qf(c), r);
}
function qf(c, r = []) {
  let o = [];
  return (
    M.Children.forEach(c, (f, m) => {
      if (!M.isValidElement(f)) return;
      let p = [...r, m];
      if (f.type === M.Fragment) {
        o.push.apply(o, qf(f.props.children, p));
        return;
      }
      ze(
        f.type === wa,
        `[${
          typeof f.type == "string" ? f.type : f.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        ze(
          !f.props.index || !f.props.children,
          "An index route cannot have child routes."
        );
      let T = {
        id: f.props.id || p.join("-"),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        middleware: f.props.middleware,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      f.props.children && (T.children = qf(f.props.children, p)), o.push(T);
    }),
    o
  );
}
var ui = "get",
  ii = "application/x-www-form-urlencoded";
function si(c) {
  return c != null && typeof c.tagName == "string";
}
function lg(c) {
  return si(c) && c.tagName.toLowerCase() === "button";
}
function ag(c) {
  return si(c) && c.tagName.toLowerCase() === "form";
}
function ng(c) {
  return si(c) && c.tagName.toLowerCase() === "input";
}
function ug(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function ig(c, r) {
  return c.button === 0 && (!r || r === "_self") && !ug(c);
}
var ni = null;
function cg() {
  if (ni === null)
    try {
      new FormData(document.createElement("form"), 0), (ni = !1);
    } catch {
      ni = !0;
    }
  return ni;
}
var fg = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Hf(c) {
  return c != null && !fg.has(c)
    ? (Ot(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ii}"`
      ),
      null)
    : c;
}
function sg(c, r) {
  let o, f, m, p, T;
  if (ag(c)) {
    let D = c.getAttribute("action");
    (f = D ? tl(D, r) : null),
      (o = c.getAttribute("method") || ui),
      (m = Hf(c.getAttribute("enctype")) || ii),
      (p = new FormData(c));
  } else if (lg(c) || (ng(c) && (c.type === "submit" || c.type === "image"))) {
    let D = c.form;
    if (D == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let x = c.getAttribute("formaction") || D.getAttribute("action");
    if (
      ((f = x ? tl(x, r) : null),
      (o = c.getAttribute("formmethod") || D.getAttribute("method") || ui),
      (m =
        Hf(c.getAttribute("formenctype")) ||
        Hf(D.getAttribute("enctype")) ||
        ii),
      (p = new FormData(D, c)),
      !cg())
    ) {
      let { name: g, type: j, value: w } = c;
      if (j === "image") {
        let B = g ? `${g}.` : "";
        p.append(`${B}x`, "0"), p.append(`${B}y`, "0");
      } else g && p.append(g, w);
    }
  } else {
    if (si(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (o = ui), (f = null), (m = ii), (T = c);
  }
  return (
    p && m === "text/plain" && ((T = p), (p = void 0)),
    { action: f, method: o.toLowerCase(), encType: m, formData: p, body: T }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Zf(c, r) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(r);
}
function rg(c, r, o) {
  let f =
    typeof c == "string"
      ? new URL(
          c,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : c;
  return (
    f.pathname === "/"
      ? (f.pathname = `_root.${o}`)
      : r && tl(f.pathname, r) === "/"
      ? (f.pathname = `${r.replace(/\/$/, "")}/_root.${o}`)
      : (f.pathname = `${f.pathname.replace(/\/$/, "")}.${o}`),
    f
  );
}
async function og(c, r) {
  if (c.id in r) return r[c.id];
  try {
    let o = await import(c.module);
    return (r[c.id] = o), o;
  } catch (o) {
    return (
      console.error(
        `Error loading route module \`${c.module}\`, reloading page...`
      ),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function dg(c) {
  return c == null
    ? !1
    : c.href == null
    ? c.rel === "preload" &&
      typeof c.imageSrcSet == "string" &&
      typeof c.imageSizes == "string"
    : typeof c.rel == "string" && typeof c.href == "string";
}
async function hg(c, r, o) {
  let f = await Promise.all(
    c.map(async (m) => {
      let p = r.routes[m.route.id];
      if (p) {
        let T = await og(p, o);
        return T.links ? T.links() : [];
      }
      return [];
    })
  );
  return vg(
    f
      .flat(1)
      .filter(dg)
      .filter((m) => m.rel === "stylesheet" || m.rel === "preload")
      .map((m) =>
        m.rel === "stylesheet"
          ? { ...m, rel: "prefetch", as: "style" }
          : { ...m, rel: "prefetch" }
      )
  );
}
function fh(c, r, o, f, m, p) {
  let T = (x, g) => (o[g] ? x.route.id !== o[g].route.id : !0),
    D = (x, g) => {
      var j;
      return (
        o[g].pathname !== x.pathname ||
        (((j = o[g].route.path) == null ? void 0 : j.endsWith("*")) &&
          o[g].params["*"] !== x.params["*"])
      );
    };
  return p === "assets"
    ? r.filter((x, g) => T(x, g) || D(x, g))
    : p === "data"
    ? r.filter((x, g) => {
        var w;
        let j = f.routes[x.route.id];
        if (!j || !j.hasLoader) return !1;
        if (T(x, g) || D(x, g)) return !0;
        if (x.route.shouldRevalidate) {
          let B = x.route.shouldRevalidate({
            currentUrl: new URL(m.pathname + m.search + m.hash, window.origin),
            currentParams: ((w = o[0]) == null ? void 0 : w.params) || {},
            nextUrl: new URL(c, window.origin),
            nextParams: x.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof B == "boolean") return B;
        }
        return !0;
      })
    : [];
}
function mg(c, r, { includeHydrateFallback: o } = {}) {
  return yg(
    c
      .map((f) => {
        let m = r.routes[f.route.id];
        if (!m) return [];
        let p = [m.module];
        return (
          m.clientActionModule && (p = p.concat(m.clientActionModule)),
          m.clientLoaderModule && (p = p.concat(m.clientLoaderModule)),
          o &&
            m.hydrateFallbackModule &&
            (p = p.concat(m.hydrateFallbackModule)),
          m.imports && (p = p.concat(m.imports)),
          p
        );
      })
      .flat(1)
  );
}
function yg(c) {
  return [...new Set(c)];
}
function gg(c) {
  let r = {},
    o = Object.keys(c).sort();
  for (let f of o) r[f] = c[f];
  return r;
}
function vg(c, r) {
  let o = new Set();
  return (
    new Set(r),
    c.reduce((f, m) => {
      let p = JSON.stringify(gg(m));
      return o.has(p) || (o.add(p), f.push({ key: p, link: m })), f;
    }, [])
  );
}
function Eh() {
  let c = M.useContext(Ba);
  return (
    Zf(
      c,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    c
  );
}
function pg() {
  let c = M.useContext(fi);
  return (
    Zf(
      c,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    c
  );
}
var Vf = M.createContext(void 0);
Vf.displayName = "FrameworkContext";
function Th() {
  let c = M.useContext(Vf);
  return (
    Zf(c, "You must render this element inside a <HydratedRouter> element"), c
  );
}
function bg(c, r) {
  let o = M.useContext(Vf),
    [f, m] = M.useState(!1),
    [p, T] = M.useState(!1),
    {
      onFocus: D,
      onBlur: x,
      onMouseEnter: g,
      onMouseLeave: j,
      onTouchStart: w,
    } = r,
    B = M.useRef(null);
  M.useEffect(() => {
    if ((c === "render" && T(!0), c === "viewport")) {
      let k = (X) => {
          X.forEach(($) => {
            T($.isIntersecting);
          });
        },
        Q = new IntersectionObserver(k, { threshold: 0.5 });
      return (
        B.current && Q.observe(B.current),
        () => {
          Q.disconnect();
        }
      );
    }
  }, [c]),
    M.useEffect(() => {
      if (f) {
        let k = setTimeout(() => {
          T(!0);
        }, 100);
        return () => {
          clearTimeout(k);
        };
      }
    }, [f]);
  let Z = () => {
      m(!0);
    },
    K = () => {
      m(!1), T(!1);
    };
  return o
    ? c !== "intent"
      ? [p, B, {}]
      : [
          p,
          B,
          {
            onFocus: wn(D, Z),
            onBlur: wn(x, K),
            onMouseEnter: wn(g, Z),
            onMouseLeave: wn(j, K),
            onTouchStart: wn(w, Z),
          },
        ]
    : [!1, B, {}];
}
function wn(c, r) {
  return (o) => {
    c && c(o), o.defaultPrevented || r(o);
  };
}
function xg({ page: c, ...r }) {
  let { router: o } = Eh(),
    f = M.useMemo(() => oh(o.routes, c, o.basename), [o.routes, c, o.basename]);
  return f ? M.createElement(Eg, { page: c, matches: f, ...r }) : null;
}
function Sg(c) {
  let { manifest: r, routeModules: o } = Th(),
    [f, m] = M.useState([]);
  return (
    M.useEffect(() => {
      let p = !1;
      return (
        hg(c, r, o).then((T) => {
          p || m(T);
        }),
        () => {
          p = !0;
        }
      );
    }, [c, r, o]),
    f
  );
}
function Eg({ page: c, matches: r, ...o }) {
  let f = Wl(),
    { manifest: m, routeModules: p } = Th(),
    { basename: T } = Eh(),
    { loaderData: D, matches: x } = pg(),
    g = M.useMemo(() => fh(c, r, x, m, f, "data"), [c, r, x, m, f]),
    j = M.useMemo(() => fh(c, r, x, m, f, "assets"), [c, r, x, m, f]),
    w = M.useMemo(() => {
      if (c === f.pathname + f.search + f.hash) return [];
      let K = new Set(),
        k = !1;
      if (
        (r.forEach((X) => {
          var L;
          let $ = m.routes[X.route.id];
          !$ ||
            !$.hasLoader ||
            ((!g.some((de) => de.route.id === X.route.id) &&
              X.route.id in D &&
              (L = p[X.route.id]) != null &&
              L.shouldRevalidate) ||
            $.hasClientLoader
              ? (k = !0)
              : K.add(X.route.id));
        }),
        K.size === 0)
      )
        return [];
      let Q = rg(c, T, "data");
      return (
        k &&
          K.size > 0 &&
          Q.searchParams.set(
            "_routes",
            r
              .filter((X) => K.has(X.route.id))
              .map((X) => X.route.id)
              .join(",")
          ),
        [Q.pathname + Q.search]
      );
    }, [T, D, f, m, g, r, c, p]),
    B = M.useMemo(() => mg(j, m), [j, m]),
    Z = Sg(j);
  return M.createElement(
    M.Fragment,
    null,
    w.map((K) =>
      M.createElement("link", {
        key: K,
        rel: "prefetch",
        as: "fetch",
        href: K,
        ...o,
      })
    ),
    B.map((K) =>
      M.createElement("link", { key: K, rel: "modulepreload", href: K, ...o })
    ),
    Z.map(({ key: K, link: k }) =>
      M.createElement("link", { key: K, nonce: o.nonce, ...k })
    )
  );
}
function Tg(...c) {
  return (r) => {
    c.forEach((o) => {
      typeof o == "function" ? o(r) : o != null && (o.current = r);
    });
  };
}
var zh =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  zh && (window.__reactRouterVersion = "7.9.3");
} catch {}
function zg({ basename: c, children: r, window: o }) {
  let f = M.useRef();
  f.current == null && (f.current = oy({ window: o, v5Compat: !0 }));
  let m = f.current,
    [p, T] = M.useState({ action: m.action, location: m.location }),
    D = M.useCallback(
      (x) => {
        M.startTransition(() => T(x));
      },
      [T]
    );
  return (
    M.useLayoutEffect(() => m.listen(D), [m, D]),
    M.createElement(eg, {
      basename: c,
      children: r,
      location: p.location,
      navigationType: p.action,
      navigator: m,
    })
  );
}
var Ah = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ha = M.forwardRef(function (
    {
      onClick: r,
      discover: o = "render",
      prefetch: f = "none",
      relative: m,
      reloadDocument: p,
      replace: T,
      state: D,
      target: x,
      to: g,
      preventScrollReset: j,
      viewTransition: w,
      ...B
    },
    Z
  ) {
    let { basename: K } = M.useContext(wt),
      k = typeof g == "string" && Ah.test(g),
      Q,
      X = !1;
    if (typeof g == "string" && k && ((Q = g), zh))
      try {
        let Ne = new URL(window.location.href),
          at = g.startsWith("//") ? new URL(Ne.protocol + g) : new URL(g),
          nt = tl(at.pathname, K);
        at.origin === Ne.origin && nt != null
          ? (g = nt + at.search + at.hash)
          : (X = !0);
      } catch {
        Ot(
          !1,
          `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let $ = qy(g, { relative: m }),
      [L, de, Ae] = bg(f, B),
      He = jg(g, {
        replace: T,
        state: D,
        target: x,
        preventScrollReset: j,
        relative: m,
        viewTransition: w,
      });
    function ee(Ne) {
      r && r(Ne), Ne.defaultPrevented || He(Ne);
    }
    let Be = M.createElement("a", {
      ...B,
      ...Ae,
      href: Q || $,
      onClick: X || p ? r : ee,
      ref: Tg(Z, de),
      target: x,
      "data-discover": !k && o === "render" ? "true" : void 0,
    });
    return L && !k
      ? M.createElement(M.Fragment, null, Be, M.createElement(xg, { page: $ }))
      : Be;
  });
Ha.displayName = "Link";
var Ua = M.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: o = !1,
    className: f = "",
    end: m = !1,
    style: p,
    to: T,
    viewTransition: D,
    children: x,
    ...g
  },
  j
) {
  let w = Ln(T, { relative: g.relative }),
    B = Wl(),
    Z = M.useContext(fi),
    { navigator: K, basename: k } = M.useContext(wt),
    Q = Z != null && Rg(w) && D === !0,
    X = K.encodeLocation ? K.encodeLocation(w).pathname : w.pathname,
    $ = B.pathname,
    L =
      Z && Z.navigation && Z.navigation.location
        ? Z.navigation.location.pathname
        : null;
  o ||
    (($ = $.toLowerCase()),
    (L = L ? L.toLowerCase() : null),
    (X = X.toLowerCase())),
    L && k && (L = tl(L, k) || L);
  const de = X !== "/" && X.endsWith("/") ? X.length - 1 : X.length;
  let Ae = $ === X || (!m && $.startsWith(X) && $.charAt(de) === "/"),
    He =
      L != null &&
      (L === X || (!m && L.startsWith(X) && L.charAt(X.length) === "/")),
    ee = { isActive: Ae, isPending: He, isTransitioning: Q },
    Be = Ae ? r : void 0,
    Ne;
  typeof f == "function"
    ? (Ne = f(ee))
    : (Ne = [
        f,
        Ae ? "active" : null,
        He ? "pending" : null,
        Q ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let at = typeof p == "function" ? p(ee) : p;
  return M.createElement(
    Ha,
    {
      ...g,
      "aria-current": Be,
      className: Ne,
      ref: j,
      style: at,
      to: T,
      viewTransition: D,
    },
    typeof x == "function" ? x(ee) : x
  );
});
Ua.displayName = "NavLink";
var Ag = M.forwardRef(
  (
    {
      discover: c = "render",
      fetcherKey: r,
      navigate: o,
      reloadDocument: f,
      replace: m,
      state: p,
      method: T = ui,
      action: D,
      onSubmit: x,
      relative: g,
      preventScrollReset: j,
      viewTransition: w,
      ...B
    },
    Z
  ) => {
    let K = _g(),
      k = Dg(D, { relative: g }),
      Q = T.toLowerCase() === "get" ? "get" : "post",
      X = typeof D == "string" && Ah.test(D),
      $ = (L) => {
        if ((x && x(L), L.defaultPrevented)) return;
        L.preventDefault();
        let de = L.nativeEvent.submitter,
          Ae = (de == null ? void 0 : de.getAttribute("formmethod")) || T;
        K(de || L.currentTarget, {
          fetcherKey: r,
          method: Ae,
          navigate: o,
          replace: m,
          state: p,
          relative: g,
          preventScrollReset: j,
          viewTransition: w,
        });
      };
    return M.createElement("form", {
      ref: Z,
      method: Q,
      action: k,
      onSubmit: f ? x : $,
      ...B,
      "data-discover": !X && c === "render" ? "true" : void 0,
    });
  }
);
Ag.displayName = "Form";
function Ng(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Nh(c) {
  let r = M.useContext(Ba);
  return ze(r, Ng(c)), r;
}
function jg(
  c,
  {
    target: r,
    replace: o,
    state: f,
    preventScrollReset: m,
    relative: p,
    viewTransition: T,
  } = {}
) {
  let D = Ly(),
    x = Wl(),
    g = Ln(c, { relative: p });
  return M.useCallback(
    (j) => {
      if (ig(j, r)) {
        j.preventDefault();
        let w = o !== void 0 ? o : Hn(x) === Hn(g);
        D(c, {
          replace: w,
          state: f,
          preventScrollReset: m,
          relative: p,
          viewTransition: T,
        });
      }
    },
    [x, D, g, o, f, r, c, m, p, T]
  );
}
var Mg = 0,
  Og = () => `__${String(++Mg)}__`;
function _g() {
  let { router: c } = Nh("useSubmit"),
    { basename: r } = M.useContext(wt),
    o = Fy();
  return M.useCallback(
    async (f, m = {}) => {
      let { action: p, method: T, encType: D, formData: x, body: g } = sg(f, r);
      if (m.navigate === !1) {
        let j = m.fetcherKey || Og();
        await c.fetch(j, o, m.action || p, {
          preventScrollReset: m.preventScrollReset,
          formData: x,
          body: g,
          formMethod: m.method || T,
          formEncType: m.encType || D,
          flushSync: m.flushSync,
        });
      } else
        await c.navigate(m.action || p, {
          preventScrollReset: m.preventScrollReset,
          formData: x,
          body: g,
          formMethod: m.method || T,
          formEncType: m.encType || D,
          replace: m.replace,
          state: m.state,
          fromRouteId: o,
          flushSync: m.flushSync,
          viewTransition: m.viewTransition,
        });
    },
    [c, r, o]
  );
}
function Dg(c, { relative: r } = {}) {
  let { basename: o } = M.useContext(wt),
    f = M.useContext(ll);
  ze(f, "useFormAction must be used inside a RouteContext");
  let [m] = f.matches.slice(-1),
    p = { ...Ln(c || ".", { relative: r }) },
    T = Wl();
  if (c == null) {
    p.search = T.search;
    let D = new URLSearchParams(p.search),
      x = D.getAll("index");
    if (x.some((j) => j === "")) {
      D.delete("index"),
        x.filter((w) => w).forEach((w) => D.append("index", w));
      let j = D.toString();
      p.search = j ? `?${j}` : "";
    }
  }
  return (
    (!c || c === ".") &&
      m.route.index &&
      (p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index"),
    o !== "/" && (p.pathname = p.pathname === "/" ? o : el([o, p.pathname])),
    Hn(p)
  );
}
function Rg(c, { relative: r } = {}) {
  let o = M.useContext(vh);
  ze(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: f } = Nh("useViewTransitionState"),
    m = Ln(c, { relative: r });
  if (!o.isTransitioning) return !1;
  let p = tl(o.currentLocation.pathname, f) || o.currentLocation.pathname,
    T = tl(o.nextLocation.pathname, f) || o.nextLocation.pathname;
  return ci(m.pathname, T) != null || ci(m.pathname, p) != null;
}
const jh = "/assets/logo-BGJxwOX_.png",
  Mh = ({ className: c, alt: r = "Logo", width: o, height: f }) =>
    d.jsx("img", {
      src: jh,
      alt: r,
      className: c || "h-8 w-8 object-contain",
      width: o,
      height: f,
      loading: "lazy",
      decoding: "async",
    }),
  Lf = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ],
  Cg = () => {
    const [c, r] = M.useState(!1);
    return d.jsxs("header", {
      className:
        "sticky top-0 z-50 bg-[#04091A]/80 backdrop-blur-sm border-b border-blue-900/50",
      children: [
        d.jsxs("div", {
          className:
            "container mx-auto px-6 py-4 flex justify-between items-center",
          children: [
            d.jsx(Ua, {
              to: "/",
              className: "flex items-center",
              "aria-label": "Thync",
              children: d.jsx(Mh, {
                className: "h-75 w-75 object-contain",
                width: 75,
                height: 75,
                alt: "Thync",
              }),
            }),
            d.jsx("nav", {
              className: "hidden md:flex items-center space-x-8",
              children: Lf.map((o) =>
                d.jsx(
                  Ua,
                  {
                    to: o.path,
                    className: ({ isActive: f }) =>
                      `text-gray-300 hover:text-white transition-colors duration-300 ${
                        f ? "text-blue-400 font-semibold" : ""
                      }`,
                    children: o.name,
                  },
                  o.name
                )
              ),
            }),
            d.jsx(Ua, {
              to: "/contact",
              className:
                "hidden md:inline-block px-5 py-2 text-sm font-medium text-white bg-[#F88F26] rounded-full hover:bg-[#D97706] transition-colors duration-300 shadow-lg shadow-[#F88F26]/30",
              children: "Let's Talk",
            }),
            d.jsxs("button", {
              type: "button",
              className:
                "md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500",
              "aria-controls": "mobile-menu",
              "aria-expanded": c,
              onClick: () => r(!c),
              children: [
                d.jsx("span", {
                  className: "sr-only",
                  children: "Open main menu",
                }),
                c
                  ? d.jsx("svg", {
                      className: "h-6 w-6",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: d.jsx("path", {
                        strokeLinecap: "round",
                        d: "M6 6l12 12M6 18L18 6",
                      }),
                    })
                  : d.jsx("svg", {
                      className: "h-6 w-6",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: d.jsx("path", {
                        strokeLinecap: "round",
                        d: "M4 6h16M4 12h16M4 18h16",
                      }),
                    }),
              ],
            }),
          ],
        }),
        d.jsx("div", {
          id: "mobile-menu",
          className: `${
            c ? "block" : "hidden"
          } md:hidden border-t border-blue-900/50 bg-[#04091A]/95 backdrop-blur-sm`,
          children: d.jsxs("div", {
            className: "container mx-auto px-6 py-4 space-y-4",
            children: [
              Lf.map((o) =>
                d.jsx(
                  Ua,
                  {
                    to: o.path,
                    onClick: () => r(!1),
                    className: ({ isActive: f }) =>
                      `block text-gray-300 hover:text-white transition-colors duration-300 ${
                        f ? "text-blue-400 font-semibold" : ""
                      }`,
                    children: o.name,
                  },
                  o.name
                )
              ),
              d.jsx(Ua, {
                to: "/contact",
                onClick: () => r(!1),
                className:
                  "block px-5 py-2 text-sm font-medium text-white bg-[#F88F26] rounded-full hover:bg-[#D97706] transition-colors duration-300 shadow-lg shadow-[#F88F26]/30 text-center",
                children: "Let's Talk",
              }),
            ],
          }),
        }),
      ],
    });
  },
  wg = () =>
    d.jsx("footer", {
      className: "bg-[#02050E] border-t border-blue-900/50",
      children: d.jsxs("div", {
        className: "container mx-auto px-6 py-12",
        children: [
          d.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
            children: [
              d.jsxs("div", {
                children: [
                  d.jsxs(Ha, {
                    to: "/",
                    className: "flex items-center space-x-2 mb-4",
                    children: [
                      d.jsx(Mh, {}),
                      d.jsx("span", {
                        className: "text-xl font-bold text-white",
                        children: "Thync",
                      }),
                    ],
                  }),
                  d.jsx("p", {
                    className: "text-gray-400 max-w-xs",
                    children:
                      "Strategic Digital Engineering for Those who Refuse Mediocrity.",
                  }),
                ],
              }),
              d.jsxs("div", {
                children: [
                  d.jsx("h3", {
                    className: "text-lg font-semibold text-white mb-4",
                    children: "Quick Links",
                  }),
                  d.jsx("ul", {
                    className: "space-y-2",
                    children: Lf.map((c) =>
                      d.jsx(
                        "li",
                        {
                          children: d.jsx(Ha, {
                            to: c.path,
                            className:
                              "text-gray-400 hover:text-blue-400 transition-colors",
                            children: c.name,
                          }),
                        },
                        c.name
                      )
                    ),
                  }),
                ],
              }),
              d.jsxs("div", {
                children: [
                  d.jsx("h3", {
                    className: "text-lg font-semibold text-white mb-4",
                    children: "Connect",
                  }),
                  d.jsxs("ul", {
                    className: "space-y-2",
                    children: [
                      d.jsx("li", {
                        children: d.jsx("a", {
                          href: "https://www.linkedin.com/in/thync/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "text-gray-400 hover:text-blue-400 transition-colors",
                          children: "LinkedIn",
                        }),
                      }),
                      d.jsx("li", {
                        children: d.jsx("a", {
                          href: "https://www.facebook.com/profile.php?id=61566979046806",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "text-gray-400 hover:text-blue-400 transition-colors",
                          children: "Facebook",
                        }),
                      }),
                      d.jsx("li", {
                        children: d.jsx("a", {
                          href: "mailto:Charles@Thync.Online",
                          className:
                            "text-gray-400 hover:text-blue-400 transition-colors",
                          children: "Charles@Thync.Online",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          d.jsx("div", {
            className:
              "mt-12 border-t border-blue-900/50 pt-8 text-center text-gray-500",
            children: d.jsxs("p", {
              children: [
                "© ",
                new Date().getFullYear(),
                " Thync. All rights reserved.",
              ],
            }),
          }),
        ],
      }),
    }),
  Un = ({ radius: c, duration: r, size: o, color: f, delay: m }) => {
    const p = { "--radius": c, "--duration": r, animationDelay: m };
    return d.jsx("div", {
      className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-revolve ${o} ${f}`,
      style: p,
    });
  },
  Ug = () =>
    d.jsxs("div", {
      className: "absolute inset-0 z-0 overflow-hidden",
      children: [
        d.jsxs("div", {
          className:
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]",
          children: [
            d.jsx("div", {
              className:
                "absolute inset-0 border border-blue-900/50 rounded-full",
            }),
            d.jsx("div", {
              className:
                "absolute inset-[100px] border border-blue-900/40 rounded-full",
            }),
            d.jsx("div", {
              className:
                "absolute inset-[200px] border border-blue-900/30 rounded-full",
            }),
            d.jsx(Un, {
              radius: "300px",
              duration: "15s",
              size: "w-3 h-3",
              color: "bg-blue-500",
              delay: "0s",
            }),
            d.jsx(Un, {
              radius: "300px",
              duration: "15s",
              size: "w-2 h-2",
              color: "bg-cyan-400",
              delay: "5s",
            }),
            d.jsx(Un, {
              radius: "200px",
              duration: "12s",
              size: "w-3 h-3",
              color: "bg-blue-600",
              delay: "-3s",
            }),
            d.jsx(Un, {
              radius: "200px",
              duration: "12s",
              size: "w-2 h-2",
              color: "bg-cyan-500",
              delay: "2s",
            }),
            d.jsx(Un, {
              radius: "100px",
              duration: "10s",
              size: "w-2 h-2",
              color: "bg-blue-400",
              delay: "-7s",
            }),
          ],
        }),
        d.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-radial from-transparent via-[#04091A]/50 to-[#04091A]",
        }),
      ],
    }),
  Hg = "/assets/home-hero-B3IpiO1T.webp",
  Bg = "/assets/home1-CcGz8rU0.webp",
  qg = "/assets/home2-DiFH7vN6.webp",
  Lg = "/assets/home3-VkS5zwcd.webp",
  Yg = "/assets/home4-Co7MnaS8.webp",
  Gg = () => {
    const c = [
      {
        name: "Bespoke Digital Ecosystems",
        description: "Custom ERPs to intelligent workflow automations.",
        image: Bg,
      },
      {
        name: "Web & App Platforms",
        description:
          "Secure, high-performance applications for impeccable usability.",
        image: qg,
      },
      {
        name: "Performance & Infrastructure",
        description:
          "Speed, security, and SEO sharpened for user expectations.",
        image: Lg,
      },
      {
        name: "Strategic Advisory",
        description:
          "Clarity in direction and insight in choice to chart your digital curve.",
        image: Yg,
      },
    ];
    return d.jsxs("div", {
      className: "overflow-hidden",
      children: [
        d.jsxs("section", {
          className:
            "relative min-h-screen flex items-center justify-center text-center px-6 py-24",
          children: [
            d.jsx("img", {
              src: Hg,
              alt: "Abstract digital art",
              className:
                "absolute inset-0 w-full h-full object-cover object-left md:object-center z-0",
            }),
            d.jsx("div", { className: "absolute inset-0 bg-black/50 z-0" }),
            d.jsx(Ug, {}),
            d.jsxs("div", {
              className:
                "relative z-10 max-w-4xl mx-auto flex flex-col items-center",
              children: [
                " ",
                d.jsx("img", {
                  src: jh,
                  alt: "Thync logo",
                  className: "mb-8 w-32 md:w-48 lg:w-64 z-20",
                }),
                d.jsx("div", {
                  className:
                    "inline-block bg-blue-900/50 text-blue-300 rounded-full px-4 py-1 text-sm mb-6 border border-blue-700",
                  children:
                    "Latest Integration: AI Agents for Workflow Automation",
                }),
                d.jsxs("h1", {
                  className:
                    "text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight",
                  children: [
                    "Strategic Digital Engineering for Those who",
                    " ",
                    d.jsx("span", {
                      className: "text-[#F88F26]",
                      children: "Refuse Mediocrity",
                    }),
                  ],
                }),
                d.jsx("p", {
                  className:
                    "mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300",
                  children:
                    "Your digital presence isn't just another URL. It's a system of influence, capacity, and trust. At Thync, we don't chase trends. We build frameworks that endure.",
                }),
                d.jsx("div", {
                  className: "mt-10",
                  children: d.jsx(Ha, {
                    to: "/contact",
                    className:
                      "px-8 py-4 text-lg font-semibold text-white bg-[#F88F26] rounded-full hover:bg-[#D97706] transition-colors duration-300 shadow-lg shadow-[#F88F26]/30",
                    children: "Start Your Project",
                  }),
                }),
              ],
            }),
          ],
        }),
        d.jsx("section", {
          className: "py-20 sm:py-32 bg-[#02050E]",
          children: d.jsxs("div", {
            className: "container mx-auto px-6",
            children: [
              d.jsxs("div", {
                className: "max-w-2xl mx-auto lg:mx-0 text-center lg:text-left",
                children: [
                  d.jsx("h2", {
                    className:
                      "text-3xl font-bold tracking-tight text-white sm:text-4xl",
                    children: "What We Deliver",
                  }),
                  d.jsx("p", {
                    className:
                      "mt-6 text-xl md:text-2xl leading-9 text-gray-300",
                    children:
                      "From complex platforms to workflow automations, we engineer solutions that are precise, resilient, and built with purpose. We move your operations forward—streamlining, scaling, and differentiating.",
                  }),
                ],
              }),
              d.jsx("div", {
                className:
                  "mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4",
                children: c.map((r, o) =>
                  d.jsxs(
                    "article",
                    {
                      className:
                        "relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-6 pb-6 pt-56 sm:pt-40 lg:pt-56 border border-blue-900/50 hover:border-blue-700 transition-all duration-300",
                      children: [
                        d.jsx("img", {
                          src: r.image,
                          alt: r.name,
                          className:
                            "absolute inset-0 -z-10 h-full w-full object-cover",
                        }),
                        d.jsx("div", {
                          className:
                            "absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/60",
                        }),
                        d.jsx("div", {
                          className:
                            "absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10",
                        }),
                        d.jsxs("div", {
                          className: "absolute inset-x-6 top-1/2 z-10",
                          children: [
                            d.jsx("h3", {
                              className:
                                "text-xl md:text-2xl font-semibold leading-7 text-white",
                              children: r.name,
                            }),
                            d.jsx("p", {
                              className:
                                "text-gray-300 mt-2 text-base md:text-lg leading-7",
                              children: r.description,
                            }),
                          ],
                        }),
                      ],
                    },
                    r.name
                  )
                ),
              }),
            ],
          }),
        }),
        d.jsx("section", {
          className: "py-24 px-6 text-center",
          children: d.jsxs("div", {
            className: "container mx-auto",
            children: [
              d.jsx("h2", {
                className:
                  "text-3xl font-bold tracking-tight text-white sm:text-4xl",
                children: "Let's build something that lasts.",
              }),
              d.jsx("p", {
                className:
                  "mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-300",
                children:
                  "If you value rigour, craftsmanship, and long-term thinking, we're ready to partner with you.",
              }),
              d.jsx("div", {
                className: "mt-10",
                children: d.jsx(Ha, {
                  to: "/contact",
                  className:
                    "px-8 py-4 text-lg font-semibold text-white bg-[#F88F26] rounded-full hover:bg-[#D97706] transition-colors duration-300 shadow-lg shadow-[#F88F26]/30",
                  children: "Get in Touch",
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Qg = ({ size: c, position: r, delay: o, duration: f }) => {
    const m = { animationDelay: o, animationDuration: f };
    return d.jsx("div", {
      className: `absolute ${c} ${r} animate-float`,
      style: m,
      children: d.jsxs("div", {
        className: "relative w-full h-full transform-style-3d",
        children: [
          d.jsx("div", {
            className:
              "absolute w-full h-full bg-blue-900/30 border border-blue-600/50 transform rotate-y-0 translate-z-[var(--size-half)]",
          }),
          d.jsx("div", {
            className:
              "absolute w-full h-full bg-blue-900/30 border border-blue-600/50 transform rotate-y-90 translate-z-[var(--size-half)]",
          }),
          d.jsx("div", {
            className:
              "absolute w-full h-full bg-blue-900/30 border border-blue-600/50 transform rotate-y-180 translate-z-[var(--size-half)]",
          }),
          d.jsx("div", {
            className:
              "absolute w-full h-full bg-blue-900/30 border border-blue-600/50 transform rotate-y-[-90deg] translate-z-[var(--size-half)]",
          }),
          d.jsx("div", {
            className:
              "absolute w-full h-full bg-blue-900/30 border border-blue-600/50 transform rotate-x-90 translate-z-[var(--size-half)]",
          }),
          d.jsx("div", {
            className:
              "absolute w-full h-full bg-blue-900/30 border border-blue-600/50 transform rotate-x-[-90deg] translate-z-[var(--size-half)]",
          }),
        ],
      }),
    });
  },
  Xg = () => {
    const c = [
      {
        size: "w-24 h-24 [--size-half:3rem]",
        position: "top-[10%] left-[15%]",
        delay: "0s",
        duration: "8s",
      },
      {
        size: "w-16 h-16 [--size-half:2rem]",
        position: "top-[20%] right-[20%]",
        delay: "1s",
        duration: "6s",
      },
      {
        size: "w-32 h-32 [--size-half:4rem]",
        position: "top-[40%] left-[30%]",
        delay: "2.5s",
        duration: "10s",
      },
      {
        size: "w-20 h-20 [--size-half:2.5rem]",
        position: "bottom-[20%] left-[10%]",
        delay: "0.5s",
        duration: "7s",
      },
      {
        size: "w-28 h-28 [--size-half:3.5rem]",
        position: "bottom-[15%] right-[15%]",
        delay: "1.5s",
        duration: "9s",
      },
      {
        size: "w-12 h-12 [--size-half:1.5rem]",
        position: "top-[5%] right-[40%]",
        delay: "3s",
        duration: "5s",
      },
    ];
    return d.jsxs("div", {
      className: "absolute inset-0 z-0 overflow-hidden perspective-1000",
      children: [
        c.map((r, o) => d.jsx(Qg, { ...r }, o)),
        d.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-radial from-transparent via-[#04091A]/50 to-[#04091A]",
        }),
      ],
    });
  },
  Zg = () => {
    const c = [
      {
        name: "1. Discovery & Strategic Alignment",
        description:
          "We immerse ourselves in your business—operations, goals, constraints—to define what success looks like with clear metrics and milestones.",
      },
      {
        name: "2. Design & Technical Architecture",
        description:
          "Once the problem is clear, we plan the solution, including system layouts, data flows, technology stacks, and UI/UX wireframes.",
      },
      {
        name: "3. Build & Integration",
        description:
          "Code, integrations, and APIs are developed with testable steps, rigorous version control, and security checks from day one.",
      },
      {
        name: "4. Refinement, Testing & Optimization",
        description:
          "We audit, analyse, and engineer, testing for real-world scenarios to fine-tune performance, harden security, and optimize usability.",
      },
      {
        name: "5. Launch & Post-Launch Support",
        description:
          "We manage deployment carefully and offer support, maintenance, and performance monitoring to ensure your solution remains effective.",
      },
    ];
    return d.jsxs("div", {
      className: "overflow-hidden",
      children: [
        d.jsxs("section", {
          className:
            "relative h-[60vh] flex items-center justify-center text-center px-6 py-24",
          children: [
            d.jsx(Xg, {}),
            d.jsxs("div", {
              className: "relative z-10 max-w-3xl mx-auto",
              children: [
                d.jsx("h1", {
                  className:
                    "text-4xl md:text-6xl font-bold text-white tracking-tight",
                  children: "The Thync Philosophy",
                }),
                d.jsx("p", {
                  className: "mt-6 text-lg md:text-xl text-gray-300",
                  children:
                    "Looking beneath the surface until the root of a problem is clear, then designing a solution that stays sound as the organisation changes.",
                }),
              ],
            }),
          ],
        }),
        d.jsx("section", {
          className: "py-20 sm:py-24 bg-[#02050E]",
          children: d.jsxs("div", {
            className:
              "container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center",
            children: [
              d.jsx("div", {
                className: "lg:col-span-1 flex justify-center",
                children: d.jsx("img", {
                  src: "assets/charlesduckitt.webp",
                  alt: "Charles (Thync Founder)",
                  className:
                    "rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover border-4 border-blue-800 shadow-2xl shadow-blue-600/20",
                }),
              }),
              d.jsxs("div", {
                className: "lg:col-span-2 text-gray-300 text-lg space-y-6",
                children: [
                  d.jsx("p", {
                    children:
                      "I've spent decades working with technology and organisations, learning to see patterns in how digital systems succeed—or fail. Too often, good intentions collapse under their own weight because the necessary follow-through is missing.",
                  }),
                  d.jsx("p", {
                    children:
                      "My work is the opposite of that cycle. With broad technical knowledge across full-stack development, server management, and security architecture, I build the structures, schedules, and documentation so that what we create together doesn't just survive, but grows stronger with use.",
                  }),
                  d.jsx("p", {
                    children:
                      "The problem is rarely a lack of technical skill. It's a matter of philosophy. This is why most of my projects are intimate and hands-on. When a challenge requires extra expertise, I bring in trusted collaborators whose standards match mine. The outcome is always the same: Clear, usable, and built to endure.",
                  }),
                ],
              }),
            ],
          }),
        }),
        d.jsx("section", {
          className: "py-20 sm:py-24",
          children: d.jsxs("div", {
            className: "container mx-auto px-6",
            children: [
              d.jsxs("div", {
                className: "max-w-3xl mx-auto text-center",
                children: [
                  d.jsx("h2", {
                    className:
                      "text-3xl font-bold tracking-tight text-white sm:text-4xl",
                    children: "Our Deliberate Process",
                  }),
                  d.jsx("p", {
                    className: "mt-4 text-lg text-gray-400",
                    children:
                      "Our workflow is transparent and designed so you always know where things stand, how decisions were made, and what comes next.",
                  }),
                ],
              }),
              d.jsx("div", {
                className: "mt-16",
                children: d.jsx("img", {
                  src: "/assets/about1.webp",
                  alt: "Our process workflow",
                  className:
                    "rounded-2xl mx-auto shadow-2xl shadow-blue-600/20 border-2 border-blue-900/50",
                }),
              }),
              d.jsx("div", {
                className: "mt-20 max-w-3xl mx-auto space-y-12",
                children: c.map((r, o) =>
                  d.jsxs(
                    "div",
                    {
                      className: "relative pl-12",
                      children: [
                        d.jsx("div", {
                          className:
                            "absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#F88F26] text-white font-bold",
                          children: o + 1,
                        }),
                        d.jsxs("div", {
                          children: [
                            d.jsx("h3", {
                              className: "text-xl font-semibold text-white",
                              children: r.name,
                            }),
                            d.jsx("p", {
                              className: "mt-2 text-gray-400",
                              children: r.description,
                            }),
                          ],
                        }),
                      ],
                    },
                    r.name
                  )
                ),
              }),
            ],
          }),
        }),
      ],
    });
  };
function Vg({ title: c, titleId: r, ...o }, f) {
  return M.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: f,
        "aria-labelledby": r,
      },
      o
    ),
    c ? M.createElement("title", { id: r }, c) : null,
    M.createElement("path", {
      fillRule: "evenodd",
      d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
      clipRule: "evenodd",
    })
  );
}
const sh = M.forwardRef(Vg),
  Kg = "/assets/serv1-hMKjgOkL.webp",
  Jg = "/assets/serv2-loPvndcA.webp",
  kg = "/assets/serv3-C0NZunQo.webp",
  Wg = "/assets/serv4-sGWWF2Pt.webp",
  Fg = [
    {
      category: "Platform & CMS Development",
      items: [
        {
          name: "Custom Platforms",
          description:
            "Bespoke WordPress sites, custom plugins, and unique modules.",
        },
        {
          name: "API & Integration",
          description:
            "Complex APIs connecting online platforms with payment gateways.",
        },
        {
          name: "E-Commerce & Marketplaces",
          description:
            "Robust e-commerce with custom payment and multi-vendor capabilities.",
        },
        {
          name: "Core Technologies",
          description:
            "Mastery of PHP, JavaScript, HTML, CSS, SQL, and JSON scripting.",
        },
      ],
    },
    {
      category: "Modern Web & Application Development",
      items: [
        {
          name: "Frontend Frameworks",
          description:
            "Dynamic, lightning-fast interfaces with React, Next.js, Angular, and Vite.",
        },
        {
          name: "Backend & Full-Stack",
          description:
            "Robust, scalable server-side logic and custom APIs with Node.js and Express.",
        },
        {
          name: "Headless & API-Driven Architecture",
          description:
            "Flexible and future-proof systems using RESTful APIs and GraphQL.",
        },
        {
          name: "Database Solutions",
          description:
            "Optimized data storage with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB).",
        },
      ],
    },
    {
      category: "Performance, Infrastructure & Security",
      items: [
        {
          name: "Speed & Core Web Vitals",
          description:
            "A+ scores via advanced caching, CDNs, and image optimization.",
        },
        {
          name: "Server Architecture & Hosting",
          description:
            "99.9% uptime with strategic migrations to Nginx or OpenLiteSpeed.",
        },
        {
          name: "Security & Compliance",
          description:
            "Robust protocols, SSL, firewalls, and regular security audits.",
        },
      ],
    },
    {
      category: "AI Agent & Automation Development",
      items: [
        {
          name: "Intelligent Customer Support",
          description:
            "Sophisticated chatbots trained on your knowledge bases.",
        },
        {
          name: "Automated Workflow Agents",
          description:
            "Custom agents for repetitive tasks like reading emails and updating CRMs.",
        },
        {
          name: "Internal Knowledge Systems",
          description:
            "Secure, internal AI agents that act as an institutional memory.",
        },
      ],
    },
  ],
  $g = [
    {
      name: "Consulting & Strategy",
      id: "tier-consulting",
      href: "#",
      price: "Project-Based",
      description: "For strategic guidance and architectural planning.",
      features: [
        "Discovery & Strategic Alignment",
        "Technical Architecture Design",
        "Performance & Security Audits",
        "Technology Stack Advisory",
      ],
      mostPopular: !1,
    },
    {
      name: "Platform Development",
      id: "tier-development",
      href: "#",
      price: "Retainer",
      description: "For ongoing development and platform builds.",
      features: [
        "Full-Stack Development",
        "CMS & E-Commerce Solutions",
        "API Integration",
        "Regular Progress Reports",
        "Dedicated Project Management",
      ],
      mostPopular: !0,
    },
    {
      name: "AI & Automation",
      id: "tier-ai",
      href: "#",
      price: "Custom",
      description: "For bespoke AI agents and automation workflows.",
      features: [
        "Custom AI Agent Development",
        "Workflow Integration (Zapier, etc.)",
        "Automated Ticketing Systems",
        "Internal Knowledge Systems",
        "Post-Launch Support & Training",
      ],
      mostPopular: !1,
    },
  ],
  Ig = () => {
    const c = [Kg, Jg, kg, Wg];
    return d.jsxs("div", {
      className: "overflow-hidden",
      children: [
        d.jsx("section", {
          className: "py-24 sm:py-32 text-center bg-[#02050E]",
          children: d.jsxs("div", {
            className: "container mx-auto px-6",
            children: [
              d.jsx("h1", {
                className:
                  "text-4xl md:text-6xl font-bold text-white tracking-tight",
                children: "Engineering with Intention",
              }),
              d.jsx("p", {
                className:
                  "mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300",
                children: `We don't just "offer services." We deliver systems with cause. Every project is an opportunity to eliminate friction, improve capacity, and sharpen decisions.`,
              }),
            ],
          }),
        }),
        d.jsx("section", {
          className: "py-20 sm:py-24",
          children: d.jsx("div", {
            className: "container mx-auto px-6 space-y-24",
            children: Fg.map((r, o) =>
              d.jsxs(
                "div",
                {
                  className:
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                  children: [
                    d.jsx("div", {
                      className: o % 2 === 0 ? "lg:order-1" : "lg:order-2",
                      children: d.jsx("img", {
                        src: c[o],
                        alt: r.category,
                        className:
                          "rounded-2xl object-cover w-full aspect-square shadow-2xl shadow-blue-600/20 border-2 border-blue-900/50",
                      }),
                    }),
                    d.jsxs("div", {
                      className: o % 2 === 0 ? "lg:order-2" : "lg:order-1",
                      children: [
                        d.jsx("h2", {
                          className:
                            "text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8",
                          children: r.category,
                        }),
                        d.jsx("dl", {
                          className: "space-y-8",
                          children: r.items.map((f) =>
                            d.jsxs(
                              "div",
                              {
                                className: "relative pl-9",
                                children: [
                                  d.jsxs("dt", {
                                    className: "font-semibold text-white",
                                    children: [
                                      d.jsx(sh, {
                                        className:
                                          "absolute left-0 top-1 h-6 w-6 text-[#F88F26]",
                                        "aria-hidden": "true",
                                      }),
                                      f.name,
                                    ],
                                  }),
                                  d.jsx("dd", {
                                    className: "mt-2 text-gray-400",
                                    children: f.description,
                                  }),
                                ],
                              },
                              f.name
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                },
                r.category
              )
            ),
          }),
        }),
        d.jsx("section", {
          className: "py-20 sm:py-24 bg-[#02050E]",
          children: d.jsxs("div", {
            className: "container mx-auto px-6",
            children: [
              d.jsxs("div", {
                className: "mx-auto max-w-4xl text-center",
                children: [
                  d.jsx("h2", {
                    className:
                      "text-base font-semibold leading-7 text-blue-400",
                    children: "Engagements",
                  }),
                  d.jsx("p", {
                    className:
                      "mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl",
                    children: "Flexible Models for Lasting Partnerships",
                  }),
                ],
              }),
              d.jsx("div", {
                className:
                  "isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3",
                children: $g.map((r) =>
                  d.jsxs(
                    "div",
                    {
                      className: `rounded-3xl p-8 ring-1 xl:p-10 ${
                        r.mostPopular
                          ? "ring-2 ring-[#F88F26] bg-gray-900/50"
                          : "ring-1 ring-white/10"
                      }`,
                      children: [
                        d.jsxs("div", {
                          className:
                            "flex items-center justify-between gap-x-4",
                          children: [
                            d.jsx("h3", {
                              id: r.id,
                              className:
                                "text-lg font-semibold leading-8 text-white",
                              children: r.name,
                            }),
                            r.mostPopular
                              ? d.jsx("p", {
                                  className:
                                    "rounded-full bg-[#F88F26]/50 px-2.5 py-1 text-xs font-semibold leading-5 text-white",
                                  children: "Most popular",
                                })
                              : null,
                          ],
                        }),
                        d.jsx("p", {
                          className: "mt-4 text-sm leading-6 text-gray-300",
                          children: r.description,
                        }),
                        d.jsx("p", {
                          className: "mt-6 flex items-baseline gap-x-1",
                          children: d.jsx("span", {
                            className:
                              "text-4xl font-bold tracking-tight text-white",
                            children: r.price,
                          }),
                        }),
                        d.jsx("a", {
                          href: "/#/contact",
                          "aria-describedby": r.id,
                          className: `mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                            r.mostPopular
                              ? "bg-[#F88F26] text-white shadow-sm hover:bg-[#D97706] focus-visible:outline-[#F88F26]"
                              : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
                          }`,
                          children: "Enquire",
                        }),
                        d.jsx("ul", {
                          role: "list",
                          className:
                            "mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10",
                          children: r.features.map((o) =>
                            d.jsxs(
                              "li",
                              {
                                className: "flex gap-x-3",
                                children: [
                                  d.jsx(sh, {
                                    className:
                                      "h-6 w-5 flex-none text-[#F88F26]",
                                    "aria-hidden": "true",
                                  }),
                                  o,
                                ],
                              },
                              o
                            )
                          ),
                        }),
                      ],
                    },
                    r.id
                  )
                ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Pg = [
    {
      slug: "durable-digital-frameworks",
      title:
        "Myth-Busting : Forget the Web3 Hype. Here's the Quiet Opportunity for South African Tech.",
      category: "Strategic Engineering",
      excerpt:
        "Mediocrity is a choice. Principles behind building digital systems that last, adapting and growing stronger over time.",
      imageUrl: "https://picsum.photos/seed/blog1/800/600",
      author: "Editorial",
      date: "2025-10-01",
      content: `We’ve all heard the noise — Web3 this, decentralisation that. It’s been sold as the new internet that’ll save humanity and make everyone rich by Tuesday. The truth is less dramatic but far more interesting. Web3 isn’t a fantasy or a fad; it’s a gradual shift in how digital businesses work, and small South African teams are perfectly placed to lead the way.

What Web3 Actually Is (Without the Hype)
Article content
 Pick the right tools
Forget the jargon. Web3 is the next upgrade of the web — a move from centralised control (big platforms holding your data, your users, and your money) to shared ownership and transparent systems.

It’s not about turning everyone into crypto traders. It’s about smarter ways to build trust, handle payments, and prove ownership in your products and services.

If you’re already running a SaaS product or creative tech business, Web3 isn’t a whole new world — it’s a new toolbox. Pick the tools that make your product stronger. Leave the rest.

The Opportunity in South Africa, Right Now
The global developer base for Web3 is growing again. Cheaper, faster blockchain layers are finally stable. Most importantly, in South Africa, regulators (FSCA and SARB) have moved from “maybe” to “here’s how.”

The legal path for crypto and token-based business is clearer than ever. The stage is set — not for hype, but for quiet opportunity. The hard part is over. The next wave belongs to builders, not speculators.

Why Web3 Had a Slow, Messy Start
Article content
The smoke is clearing
Let's be honest about why it's been slow to take off:

People hate clunky user experiences. Nobody wants to memorize seed phrases.
Businesses fear the legal grey areas and the scams that gave crypto a bad name.
Regulation took its sweet time to catch up.
Too many projects were built for quick money, not long-term value.

That’s not failure — that’s technology growing up. Every tech wave starts messy. The smoke is clearing now, and what’s left is usable, credible, and open for real businesses that want to build something lasting.

The Future is Hybrid: How Web3 Will Evolve
So, will Web3 still happen? Absolutely — just not overnight. The next five to seven years will be about hybrid systems: part Web2, part Web3. Expect to see:

Tokenized memberships and loyalty systems
Smarter, automated payments
Verified digital ownership and reputation
Contracts that run themselves

You won’t notice a “Web3 launch day.” It’ll sneak in, quietly reshaping how digital products deliver trust, value, and belonging. That’s good news — no revolutions to survive, just evolution to embrace.

Where AI Fits In: The Perfect Partnership
Article content
Partnership
AI and Web3 are two sides of the same coin. AI makes decisions; Web3 makes them transparent and trustworthy.

AI can help your users onboard, handle support, detect fraud, and even generate secure smart contracts. Web3 can, in turn, make AI content verifiable and reward contributors fairly. For small teams, this pairing means you can build faster, safer, and with more clarity than ever before.

How Your Digital Team Can Actually Start
Article content
Experiment, Build, Lead
Here is a practical, three-stage approach:

Stage 1: Test the Waters (Low-Risk Steps)

Accept crypto payments through a licensed local exchange.
Create a token-gated landing page for early access, memberships, or perks.
Use wallet-free, social login onboarding (no scary “seed phrase” moments).

Think of it as testing the engine before building the car. These are small experiments to help you learn fast.

Stage 2: Build with Purpose (Intermediate Plays)

Tokenize something you already sell — a software license, a voucher, a subscription.
Offer an “NFT membership” for premium access or community support.
Build on low-cost chains to experiment without burning cash.

At this stage, you’re giving users digital proof of belonging and value, not just another login.

Stage 3: Lead the Market (Deeper Bets)

Integrate regulated crypto payments and smart contracts directly into your product.
Build in compliance and security from the start.
Package your Web3 process into a service others can buy.

By this point, you’re not “dabbling.” You’re leading. You’re building the infrastructure that others will rent from you later.

Smart Risk Management: Be Practical, Not Heroic

Partner with licensed exchanges and legal advisors.
Audit every smart contract before it goes live.
Keep your accountant in the loop — tokens are taxable assets.
Be patient with your users; most are still learning.

Don’t aim to be the hero of decentralization. Aim to be the one who makes it work — reliably, securely, and profitably.

The Human Element: Why This Actually Matters
Tech aside, this is about freedom and opportunity. Web3 isn’t about escaping the system; it’s about redesigning it. It gives small teams and creators the same economic levers the big guys have always had — transparency, ownership, and recurring value.

If you’ve been watching the hype, wondering if you missed the boat — you didn’t. The boat is still at the dock, and it needs people who build with purpose, not noise. The next web isn’t owned by anyone, which means it’s still yours to shape.

Resources 
McKinsey — What is Web3 and Why It Matters
Chainalysis — Global Crypto Adoption Index
Electric Capital — Developer Report on Web3 Activity
FSCA & SARB — South African Crypto Licensing and Compliance Guidance
OpenZeppelin — Smart Contract Security Framework`,
    },
    {
      slug: "beyond-core-web-vitals",
      title: "Beyond Speed: What A+ Core Web Vitals Really Mean for Business",
      category: "Performance & Optimization",
      excerpt:
        "An A+ score isn't just a vanity metric. It's about user trust, conversion, and discoverability.",
      imageUrl: "https://picsum.photos/seed/blog2/800/600",
      author: "Editorial",
      date: "2025-10-02",
      content: `# Beyond Speed

A+ Core Web Vitals translate directly to business outcomes...`,
    },
    {
      slug: "integrating-ai-agents",
      title:
        "From Chatbot to Colleague: Integrating AI Agents That Actually Work",
      category: "AI in Business",
      excerpt:
        "Moving beyond clunky chatbots to build purpose-driven AI agents that solve concrete business problems.",
      imageUrl: "https://picsum.photos/seed/blog3/800/600",
      author: "Editorial",
      date: "2025-10-03",
      content: `# Integrating AI Agents

Designing AI agents with clear roles and KPIs is essential...`,
    },
  ],
  ev = () => {
    const c = [
      "Strategic Engineering",
      "Performance & Optimization",
      "AI in Business",
      "Workflow Automation",
      "Digital Integrity",
    ];
    return d.jsxs("div", {
      children: [
        d.jsx("section", {
          className: "py-24 sm:py-32 text-center bg-[#02050E]",
          children: d.jsxs("div", {
            className: "container mx-auto px-6",
            children: [
              d.jsx("h1", {
                className:
                  "text-4xl md:text-6xl font-bold text-white tracking-tight",
                children: "Insights & Perspectives",
              }),
              d.jsx("p", {
                className:
                  "mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300",
                children:
                  "A space for articles, case studies, and reflections on building enduring digital systems. Here, we explore the intersection of technology, strategy, and craftsmanship.",
              }),
            ],
          }),
        }),
        d.jsx("section", {
          className: "py-20 sm:py-24",
          children: d.jsx("div", {
            className: "container mx-auto px-6",
            children: d.jsxs("div", {
              className: "flex flex-col lg:flex-row gap-12",
              children: [
                d.jsxs("div", {
                  className: "lg:w-3/4",
                  children: [
                    d.jsx("h2", {
                      className: "text-2xl font-bold text-white mb-8",
                      children: "Latest Articles",
                    }),
                    d.jsxs("div", {
                      className: "space-y-12",
                      children: [
                        Pg.map((r) =>
                          d.jsxs(
                            "article",
                            {
                              className:
                                "group relative flex flex-col items-start md:flex-row gap-8",
                              children: [
                                d.jsx("div", {
                                  className: "md:w-1/3",
                                  children: d.jsx("img", {
                                    src: r.imageUrl,
                                    alt: "",
                                    className:
                                      "aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2] border-2 border-transparent group-hover:border-[#F88F26] transition",
                                  }),
                                }),
                                d.jsxs("div", {
                                  className: "md:w-2/3",
                                  children: [
                                    d.jsx("div", {
                                      className:
                                        "flex items-center gap-x-4 text-xs",
                                      children: d.jsx("span", {
                                        className:
                                          "relative z-10 rounded-full bg-[#F88F26]/20 px-3 py-1.5 font-medium text-[#FBBF24]",
                                        children: r.category,
                                      }),
                                    }),
                                    d.jsxs("div", {
                                      className: "relative",
                                      children: [
                                        d.jsx("h3", {
                                          className:
                                            "mt-3 text-lg font-semibold leading-6 text-white group-hover:text-[#F88F26]",
                                          children: d.jsxs("a", {
                                            href: `/blog/${r.slug}`,
                                            children: [
                                              d.jsx("span", {
                                                className: "absolute inset-0",
                                              }),
                                              r.title,
                                            ],
                                          }),
                                        }),
                                        d.jsx("p", {
                                          className:
                                            "mt-5 line-clamp-3 text-sm leading-6 text-gray-400",
                                          children: r.excerpt,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            r.title
                          )
                        ),
                        d.jsx("div", {
                          className: "text-center py-12",
                          children: d.jsx("p", {
                            className: "text-gray-400",
                            children: "More articles coming soon...",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsx("aside", {
                  className: "lg:w-1/4",
                  children: d.jsxs("div", {
                    className:
                      "sticky top-28 p-6 bg-gray-900/30 rounded-2xl border border-blue-900/50",
                    children: [
                      d.jsx("h3", {
                        className: "text-xl font-semibold text-white mb-4",
                        children: "Categories",
                      }),
                      d.jsx("ul", {
                        className: "space-y-2",
                        children: c.map((r) =>
                          d.jsx(
                            "li",
                            {
                              children: d.jsx("a", {
                                href: "#",
                                className:
                                  "text-gray-400 hover:text-[#F88F26] transition-colors",
                                children: r,
                              }),
                            },
                            r
                          )
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  tv = () => {
    const [c, r] = M.useState(""),
      o = async (f) => {
        f.preventDefault();
        const m = f.target,
          p = new FormData(m);
        try {
          const T = await fetch("https://formspree.io/f/xyzngpoa", {
            method: "POST",
            body: p,
            headers: { Accept: "application/json" },
          });
          if (T.ok) r("Thanks for your submission!"), m.reset();
          else {
            const D = await T.json();
            Object.prototype.hasOwnProperty.call(D, "errors")
              ? r(D.errors.map((x) => x.message).join(", "))
              : r("Oops! There was a problem submitting your form");
          }
        } catch {
          r("Oops! There was a problem submitting your form");
        }
      };
    return d.jsxs("form", {
      onSubmit: o,
      className: "space-y-6",
      children: [
        d.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [
            d.jsx("input", {
              type: "text",
              name: "name",
              placeholder: "Name",
              required: !0,
              className:
                "w-full bg-gray-900/50 border border-blue-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-[#F88F26] focus:border-[#F88F26] transition",
            }),
            d.jsx("input", {
              type: "tel",
              name: "number",
              placeholder: "Number",
              className:
                "w-full bg-gray-900/50 border border-blue-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-[#F88F26] focus:border-[#F88F26] transition",
            }),
          ],
        }),
        d.jsx("input", {
          type: "email",
          name: "email",
          placeholder: "Email",
          required: !0,
          className:
            "w-full bg-gray-900/50 border border-blue-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-[#F88F26] focus:border-[#F88F26] transition",
        }),
        d.jsx("textarea", {
          name: "enquiry",
          placeholder: "Enquiry",
          required: !0,
          rows: 5,
          className:
            "w-full bg-gray-900/50 border border-blue-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-[#F88F26] focus:border-[#F88F26] transition",
        }),
        d.jsxs("div", {
          className: "flex items-center space-x-3",
          children: [
            d.jsx("input", {
              type: "checkbox",
              id: "subscribe",
              name: "subscribe",
              value: "yes",
              className:
                "h-5 w-5 rounded border-blue-800 text-[#F88F26] focus:ring-[#F88F26] bg-gray-900/50",
            }),
            d.jsx("label", {
              htmlFor: "subscribe",
              className: "text-gray-400",
              children: "Subscribe to blog updates",
            }),
          ],
        }),
        d.jsx("button", {
          type: "submit",
          className:
            "w-full px-8 py-4 text-lg font-semibold text-white bg-[#F88F26] rounded-full hover:bg-[#D97706] transition-colors duration-300 shadow-lg shadow-[#F88F26]/30",
          children: "Send Message",
        }),
        c &&
          d.jsx("p", {
            className: "text-center text-blue-300 mt-4",
            children: c,
          }),
      ],
    });
  };
function lv({ title: c, titleId: r, ...o }, f) {
  return M.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: f,
        "aria-labelledby": r,
      },
      o
    ),
    c ? M.createElement("title", { id: r }, c) : null,
    M.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
    })
  );
}
const av = M.forwardRef(lv);
function nv({ title: c, titleId: r, ...o }, f) {
  return M.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: f,
        "aria-labelledby": r,
      },
      o
    ),
    c ? M.createElement("title", { id: r }, c) : null,
    M.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z",
    })
  );
}
const uv = M.forwardRef(nv),
  iv = () =>
    d.jsx("div", {
      className: "bg-[#02050E]",
      children: d.jsx("div", {
        className: "relative isolate",
        children: d.jsxs("div", {
          className: "mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2",
          children: [
            d.jsx("div", {
              className:
                "relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48",
              children: d.jsxs("div", {
                className: "mx-auto max-w-xl lg:mx-0 lg:max-w-lg",
                children: [
                  d.jsxs("div", {
                    className:
                      "absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2",
                    children: [
                      d.jsxs("svg", {
                        className:
                          "absolute inset-0 h-full w-full stroke-blue-800/40 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]",
                        "aria-hidden": "true",
                        children: [
                          d.jsx("defs", {
                            children: d.jsx("pattern", {
                              id: "54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2",
                              width: 200,
                              height: 200,
                              x: "100%",
                              y: -1,
                              patternUnits: "userSpaceOnUse",
                              children: d.jsx("path", {
                                d: "M130 200V.5M.5 .5H200",
                                fill: "none",
                              }),
                            }),
                          }),
                          d.jsx("svg", {
                            x: "100%",
                            y: -1,
                            className: "overflow-visible fill-gray-800/20",
                            children: d.jsx("path", {
                              d: "M-470.5 0h201v201h-201Z",
                              strokeWidth: 0,
                            }),
                          }),
                          d.jsx("rect", {
                            width: "100%",
                            height: "100%",
                            strokeWidth: 0,
                            fill: "url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)",
                          }),
                        ],
                      }),
                      d.jsx("div", {
                        className:
                          "absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]",
                        "aria-hidden": "true",
                        children: d.jsx("div", {
                          className:
                            "aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#007BFF] to-[#F88F26] opacity-20",
                          style: {
                            clipPath:
                              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                          },
                        }),
                      }),
                    ],
                  }),
                  d.jsx("h1", {
                    className:
                      "text-4xl font-bold tracking-tight text-white sm:text-5xl",
                    children: "Let's Build Something That Lasts",
                  }),
                  d.jsx("p", {
                    className: "mt-6 text-lg leading-8 text-gray-300",
                    children:
                      "Integrity means resisting shortcuts. Partnership means honest guidance and clear trade-offs. If that resonates with you, I welcome the conversation.",
                  }),
                  d.jsxs("dl", {
                    className:
                      "mt-10 space-y-4 text-base leading-7 text-gray-300",
                    children: [
                      d.jsxs("div", {
                        className: "flex gap-x-4",
                        children: [
                          d.jsxs("dt", {
                            className: "flex-none",
                            children: [
                              d.jsx("span", {
                                className: "sr-only",
                                children: "Telephone",
                              }),
                              d.jsx(uv, {
                                className: "h-7 w-6 text-gray-400",
                                "aria-hidden": "true",
                              }),
                            ],
                          }),
                          d.jsx("dd", {
                            children: d.jsx("a", {
                              className: "hover:text-white",
                              href: "tel:+27788584551",
                              children: "(+27) 078 858 4551",
                            }),
                          }),
                        ],
                      }),
                      d.jsxs("div", {
                        className: "flex gap-x-4",
                        children: [
                          d.jsxs("dt", {
                            className: "flex-none",
                            children: [
                              d.jsx("span", {
                                className: "sr-only",
                                children: "Email",
                              }),
                              d.jsx(av, {
                                className: "h-7 w-6 text-gray-400",
                                "aria-hidden": "true",
                              }),
                            ],
                          }),
                          d.jsx("dd", {
                            children: d.jsx("a", {
                              className: "hover:text-white",
                              href: "mailto:Charles@Thync.Online",
                              children: "Charles@Thync.Online",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            d.jsx("div", {
              className: "px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48",
              children: d.jsx("div", {
                className: "mx-auto max-w-xl lg:mr-0 lg:max-w-lg",
                children: d.jsx(tv, {}),
              }),
            }),
          ],
        }),
      }),
    }),
  cv = () =>
    d.jsx(zg, {
      children: d.jsxs("div", {
        className: "flex flex-col min-h-screen bg-[#04091A] font-sans",
        children: [
          d.jsx(Cg, {}),
          d.jsx("main", {
            className: "flex-grow",
            children: d.jsxs(tg, {
              children: [
                d.jsx(wa, { path: "/", element: d.jsx(Gg, {}) }),
                d.jsx(wa, { path: "/about", element: d.jsx(Zg, {}) }),
                d.jsx(wa, { path: "/services", element: d.jsx(Ig, {}) }),
                d.jsx(wa, { path: "/blog", element: d.jsx(ev, {}) }),
                d.jsx(wa, { path: "/contact", element: d.jsx(iv, {}) }),
              ],
            }),
          }),
          d.jsx(wg, {}),
        ],
      }),
    }),
  Oh = document.getElementById("root");
if (!Oh) throw new Error("Could not find root element to mount to");
const fv = ry.createRoot(Oh);
fv.render(d.jsx(ly.StrictMode, { children: d.jsx(cv, {}) }));
