!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 54));
})([
  function (e, t) {
    var n = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  function (e, t, n) {
    var o = n(12)("wks"),
      r = n(13),
      i = n(0).Symbol,
      a = "function" == typeof i;
    (e.exports = function (e) {
      return o[e] || (o[e] = (a && i[e]) || (a ? i : r)("Symbol." + e));
    }).store = o;
  },
  function (e, t) {
    var n = (e.exports = { version: "2.6.5" });
    "number" == typeof __e && (__e = n);
  },
  function (e, t, n) {
    var o = n(4);
    e.exports = function (e) {
      if (!o(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function (e, t, n) {
    var o = n(6);
    e.exports = function (e, t, n) {
      if ((o(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, o) {
            return e.call(t, n, o);
          };
        case 3:
          return function (n, o, r) {
            return e.call(t, n, o, r);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  function (e, t, n) {
    e.exports = !n(16)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  },
  function (e, t, n) {
    var o = n(3),
      r = n(27),
      i = n(28),
      a = Object.defineProperty;
    t.f = n(7)
      ? Object.defineProperty
      : function (e, t, n) {
          if ((o(e), (t = i(t, !0)), o(n), r))
            try {
              return a(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t) {
    e.exports = !1;
  },
  function (e, t, n) {
    var o = n(8),
      r = n(1)("toStringTag"),
      i =
        "Arguments" ==
        o(
          (function () {
            return arguments;
          })()
        );
    e.exports = function (e) {
      var t, n, a;
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" ==
          typeof (n = (function (e, t) {
            try {
              return e[t];
            } catch (e) {}
          })((t = Object(e)), r))
        ? n
        : i
        ? o(t)
        : "Object" == (a = o(t)) && "function" == typeof t.callee
        ? "Arguments"
        : a;
    };
  },
  function (e, t, n) {
    var o = n(2),
      r = n(0),
      i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
      return i[e] || (i[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: o.version,
      mode: n(10) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (e, t) {
    var n = 0,
      o = Math.random();
    e.exports = function (e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++n + o).toString(36)
      );
    };
  },
  function (e, t, n) {
    var o = n(0),
      r = n(2),
      i = n(15),
      a = n(18),
      s = n(5),
      c = function (e, t, n) {
        var u,
          l,
          d,
          f,
          p = e & c.F,
          g = e & c.G,
          m = e & c.S,
          h = e & c.P,
          w = e & c.B,
          v = g ? o : m ? o[t] || (o[t] = {}) : (o[t] || {}).prototype,
          C = g ? r : r[t] || (r[t] = {}),
          y = C.prototype || (C.prototype = {});
        for (u in (g && (n = t), n))
          (d = ((l = !p && v && void 0 !== v[u]) ? v : n)[u]),
            (f =
              w && l
                ? s(d, o)
                : h && "function" == typeof d
                ? s(Function.call, d)
                : d),
            v && a(v, u, d, e & c.U),
            C[u] != d && i(C, u, f),
            h && y[u] != d && (y[u] = d);
      };
    (o.core = r),
      (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (e.exports = c);
  },
  function (e, t, n) {
    var o = n(9),
      r = n(29);
    e.exports = n(7)
      ? function (e, t, n) {
          return o.f(e, t, r(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t, n) {
    var o = n(4),
      r = n(0).document,
      i = o(r) && o(r.createElement);
    e.exports = function (e) {
      return i ? r.createElement(e) : {};
    };
  },
  function (e, t, n) {
    var o = n(0),
      r = n(15),
      i = n(19),
      a = n(13)("src"),
      s = n(30),
      c = ("" + s).split("toString");
    (n(2).inspectSource = function (e) {
      return s.call(e);
    }),
      (e.exports = function (e, t, n, s) {
        var u = "function" == typeof n;
        u && (i(n, "name") || r(n, "name", t)),
          e[t] !== n &&
            (u && (i(n, a) || r(n, a, e[t] ? "" + e[t] : c.join(String(t)))),
            e === o
              ? (e[t] = n)
              : s
              ? e[t]
                ? (e[t] = n)
                : r(e, t, n)
              : (delete e[t], r(e, t, n)));
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && this[a]) || s.call(this);
      });
  },
  function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t, n) {
    var o = n(3),
      r = n(6),
      i = n(1)("species");
    e.exports = function (e, t) {
      var n,
        a = o(e).constructor;
      return void 0 === a || null == (n = o(a)[i]) ? t : r(n);
    };
  },
  function (e, t, n) {
    var o,
      r,
      i,
      a = n(5),
      s = n(38),
      c = n(39),
      u = n(17),
      l = n(0),
      d = l.process,
      f = l.setImmediate,
      p = l.clearImmediate,
      g = l.MessageChannel,
      m = l.Dispatch,
      h = 0,
      w = {},
      v = function () {
        var e = +this;
        if (w.hasOwnProperty(e)) {
          var t = w[e];
          delete w[e], t();
        }
      },
      C = function (e) {
        v.call(e.data);
      };
    (f && p) ||
      ((f = function (e) {
        for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
        return (
          (w[++h] = function () {
            s("function" == typeof e ? e : Function(e), t);
          }),
          o(h),
          h
        );
      }),
      (p = function (e) {
        delete w[e];
      }),
      "process" == n(8)(d)
        ? (o = function (e) {
            d.nextTick(a(v, e, 1));
          })
        : m && m.now
        ? (o = function (e) {
            m.now(a(v, e, 1));
          })
        : g
        ? ((i = (r = new g()).port2),
          (r.port1.onmessage = C),
          (o = a(i.postMessage, i, 1)))
        : l.addEventListener &&
          "function" == typeof postMessage &&
          !l.importScripts
        ? ((o = function (e) {
            l.postMessage(e + "", "*");
          }),
          l.addEventListener("message", C, !1))
        : (o =
            "onreadystatechange" in u("script")
              ? function (e) {
                  c.appendChild(u("script")).onreadystatechange = function () {
                    c.removeChild(this), v.call(e);
                  };
                }
              : function (e) {
                  setTimeout(a(v, e, 1), 0);
                })),
      (e.exports = { set: f, clear: p });
  },
  function (e, t, n) {
    "use strict";
    var o = n(6);
    function r(e) {
      var t, n;
      (this.promise = new e(function (e, o) {
        if (void 0 !== t || void 0 !== n)
          throw TypeError("Bad Promise constructor");
        (t = e), (n = o);
      })),
        (this.resolve = o(t)),
        (this.reject = o(n));
    }
    e.exports.f = function (e) {
      return new r(e);
    };
  },
  function (e, t, n) {
    var o = n(3),
      r = n(4),
      i = n(23);
    e.exports = function (e, t) {
      if ((o(e), r(t) && t.constructor === e)) return t;
      var n = i.f(e);
      return (0, n.resolve)(t), n.promise;
    };
  },
  function (e, t, n) {
    "use strict";
    n(26), n(47), (e.exports = n(2).Promise.finally);
  },
  function (e, t, n) {
    "use strict";
    var o,
      r,
      i,
      a,
      s = n(10),
      c = n(0),
      u = n(5),
      l = n(11),
      d = n(14),
      f = n(4),
      p = n(6),
      g = n(31),
      m = n(32),
      h = n(21),
      w = n(22).set,
      v = n(40)(),
      C = n(23),
      y = n(41),
      b = n(42),
      S = n(24),
      T = c.TypeError,
      I = c.process,
      P = I && I.versions,
      E = (P && P.v8) || "",
      F = c.Promise,
      k = "process" == l(I),
      A = function () {},
      R = (r = C.f),
      O = !!(function () {
        try {
          var e = F.resolve(1),
            t = ((e.constructor = {})[n(1)("species")] = function (e) {
              e(A, A);
            });
          return (
            (k || "function" == typeof PromiseRejectionEvent) &&
            e.then(A) instanceof t &&
            0 !== E.indexOf("6.6") &&
            -1 === b.indexOf("Chrome/66")
          );
        } catch (e) {}
      })(),
      M = function (e) {
        var t;
        return !(!f(e) || "function" != typeof (t = e.then)) && t;
      },
      x = function (e, t) {
        if (!e._n) {
          e._n = !0;
          var n = e._c;
          v(function () {
            for (
              var o = e._v,
                r = 1 == e._s,
                i = 0,
                a = function (t) {
                  var n,
                    i,
                    a,
                    s = r ? t.ok : t.fail,
                    c = t.resolve,
                    u = t.reject,
                    l = t.domain;
                  try {
                    s
                      ? (r || (2 == e._h && N(e), (e._h = 1)),
                        !0 === s
                          ? (n = o)
                          : (l && l.enter(),
                            (n = s(o)),
                            l && (l.exit(), (a = !0))),
                        n === t.promise
                          ? u(T("Promise-chain cycle"))
                          : (i = M(n))
                          ? i.call(n, c, u)
                          : c(n))
                      : u(o);
                  } catch (e) {
                    l && !a && l.exit(), u(e);
                  }
                };
              n.length > i;

            )
              a(n[i++]);
            (e._c = []), (e._n = !1), t && !e._h && D(e);
          });
        }
      },
      D = function (e) {
        w.call(c, function () {
          var t,
            n,
            o,
            r = e._v,
            i = L(e);
          if (
            (i &&
              ((t = y(function () {
                k
                  ? I.emit("unhandledRejection", r, e)
                  : (n = c.onunhandledrejection)
                  ? n({ promise: e, reason: r })
                  : (o = c.console) &&
                    o.error &&
                    o.error("Unhandled promise rejection", r);
              })),
              (e._h = k || L(e) ? 2 : 1)),
            (e._a = void 0),
            i && t.e)
          )
            throw t.v;
        });
      },
      L = function (e) {
        return 1 !== e._h && 0 === (e._a || e._c).length;
      },
      N = function (e) {
        w.call(c, function () {
          var t;
          k
            ? I.emit("rejectionHandled", e)
            : (t = c.onrejectionhandled) && t({ promise: e, reason: e._v });
        });
      },
      _ = function (e) {
        var t = this;
        t._d ||
          ((t._d = !0),
          ((t = t._w || t)._v = e),
          (t._s = 2),
          t._a || (t._a = t._c.slice()),
          x(t, !0));
      },
      U = function (e) {
        var t,
          n = this;
        if (!n._d) {
          (n._d = !0), (n = n._w || n);
          try {
            if (n === e) throw T("Promise can't be resolved itself");
            (t = M(e))
              ? v(function () {
                  var o = { _w: n, _d: !1 };
                  try {
                    t.call(e, u(U, o, 1), u(_, o, 1));
                  } catch (e) {
                    _.call(o, e);
                  }
                })
              : ((n._v = e), (n._s = 1), x(n, !1));
          } catch (e) {
            _.call({ _w: n, _d: !1 }, e);
          }
        }
      };
    O ||
      ((F = function (e) {
        g(this, F, "Promise", "_h"), p(e), o.call(this);
        try {
          e(u(U, this, 1), u(_, this, 1));
        } catch (e) {
          _.call(this, e);
        }
      }),
      ((o = function (e) {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }).prototype = n(43)(F.prototype, {
        then: function (e, t) {
          var n = R(h(this, F));
          return (
            (n.ok = "function" != typeof e || e),
            (n.fail = "function" == typeof t && t),
            (n.domain = k ? I.domain : void 0),
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && x(this, !1),
            n.promise
          );
        },
        catch: function (e) {
          return this.then(void 0, e);
        },
      })),
      (i = function () {
        var e = new o();
        (this.promise = e),
          (this.resolve = u(U, e, 1)),
          (this.reject = u(_, e, 1));
      }),
      (C.f = R =
        function (e) {
          return e === F || e === a ? new i(e) : r(e);
        })),
      d(d.G + d.W + d.F * !O, { Promise: F }),
      n(44)(F, "Promise"),
      n(45)("Promise"),
      (a = n(2).Promise),
      d(d.S + d.F * !O, "Promise", {
        reject: function (e) {
          var t = R(this);
          return (0, t.reject)(e), t.promise;
        },
      }),
      d(d.S + d.F * (s || !O), "Promise", {
        resolve: function (e) {
          return S(s && this === a ? F : this, e);
        },
      }),
      d(
        d.S +
          d.F *
            !(
              O &&
              n(46)(function (e) {
                F.all(e).catch(A);
              })
            ),
        "Promise",
        {
          all: function (e) {
            var t = this,
              n = R(t),
              o = n.resolve,
              r = n.reject,
              i = y(function () {
                var n = [],
                  i = 0,
                  a = 1;
                m(e, !1, function (e) {
                  var s = i++,
                    c = !1;
                  n.push(void 0),
                    a++,
                    t.resolve(e).then(function (e) {
                      c || ((c = !0), (n[s] = e), --a || o(n));
                    }, r);
                }),
                  --a || o(n);
              });
            return i.e && r(i.v), n.promise;
          },
          race: function (e) {
            var t = this,
              n = R(t),
              o = n.reject,
              r = y(function () {
                m(e, !1, function (e) {
                  t.resolve(e).then(n.resolve, o);
                });
              });
            return r.e && o(r.v), n.promise;
          },
        }
      );
  },
  function (e, t, n) {
    e.exports =
      !n(7) &&
      !n(16)(function () {
        return (
          7 !=
          Object.defineProperty(n(17)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, n) {
    var o = n(4);
    e.exports = function (e, t) {
      if (!o(e)) return e;
      var n, r;
      if (t && "function" == typeof (n = e.toString) && !o((r = n.call(e))))
        return r;
      if ("function" == typeof (n = e.valueOf) && !o((r = n.call(e)))) return r;
      if (!t && "function" == typeof (n = e.toString) && !o((r = n.call(e))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t, n) {
    e.exports = n(12)("native-function-to-string", Function.toString);
  },
  function (e, t) {
    e.exports = function (e, t, n, o) {
      if (!(e instanceof t) || (void 0 !== o && o in e))
        throw TypeError(n + ": incorrect invocation!");
      return e;
    };
  },
  function (e, t, n) {
    var o = n(5),
      r = n(33),
      i = n(34),
      a = n(3),
      s = n(35),
      c = n(37),
      u = {},
      l = {};
    ((t = e.exports =
      function (e, t, n, d, f) {
        var p,
          g,
          m,
          h,
          w = f
            ? function () {
                return e;
              }
            : c(e),
          v = o(n, d, t ? 2 : 1),
          C = 0;
        if ("function" != typeof w) throw TypeError(e + " is not iterable!");
        if (i(w)) {
          for (p = s(e.length); p > C; C++)
            if ((h = t ? v(a((g = e[C]))[0], g[1]) : v(e[C])) === u || h === l)
              return h;
        } else
          for (m = w.call(e); !(g = m.next()).done; )
            if ((h = r(m, v, g.value, t)) === u || h === l) return h;
      }).BREAK = u),
      (t.RETURN = l);
  },
  function (e, t, n) {
    var o = n(3);
    e.exports = function (e, t, n, r) {
      try {
        return r ? t(o(n)[0], n[1]) : t(n);
      } catch (t) {
        var i = e.return;
        throw (void 0 !== i && o(i.call(e)), t);
      }
    };
  },
  function (e, t, n) {
    var o = n(20),
      r = n(1)("iterator"),
      i = Array.prototype;
    e.exports = function (e) {
      return void 0 !== e && (o.Array === e || i[r] === e);
    };
  },
  function (e, t, n) {
    var o = n(36),
      r = Math.min;
    e.exports = function (e) {
      return e > 0 ? r(o(e), 9007199254740991) : 0;
    };
  },
  function (e, t) {
    var n = Math.ceil,
      o = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? o : n)(e);
    };
  },
  function (e, t, n) {
    var o = n(11),
      r = n(1)("iterator"),
      i = n(20);
    e.exports = n(2).getIteratorMethod = function (e) {
      if (null != e) return e[r] || e["@@iterator"] || i[o(e)];
    };
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      var o = void 0 === n;
      switch (t.length) {
        case 0:
          return o ? e() : e.call(n);
        case 1:
          return o ? e(t[0]) : e.call(n, t[0]);
        case 2:
          return o ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
          return o ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
          return o
            ? e(t[0], t[1], t[2], t[3])
            : e.call(n, t[0], t[1], t[2], t[3]);
      }
      return e.apply(n, t);
    };
  },
  function (e, t, n) {
    var o = n(0).document;
    e.exports = o && o.documentElement;
  },
  function (e, t, n) {
    var o = n(0),
      r = n(22).set,
      i = o.MutationObserver || o.WebKitMutationObserver,
      a = o.process,
      s = o.Promise,
      c = "process" == n(8)(a);
    e.exports = function () {
      var e,
        t,
        n,
        u = function () {
          var o, r;
          for (c && (o = a.domain) && o.exit(); e; ) {
            (r = e.fn), (e = e.next);
            try {
              r();
            } catch (o) {
              throw (e ? n() : (t = void 0), o);
            }
          }
          (t = void 0), o && o.enter();
        };
      if (c)
        n = function () {
          a.nextTick(u);
        };
      else if (!i || (o.navigator && o.navigator.standalone))
        if (s && s.resolve) {
          var l = s.resolve(void 0);
          n = function () {
            l.then(u);
          };
        } else
          n = function () {
            r.call(o, u);
          };
      else {
        var d = !0,
          f = document.createTextNode("");
        new i(u).observe(f, { characterData: !0 }),
          (n = function () {
            f.data = d = !d;
          });
      }
      return function (o) {
        var r = { fn: o, next: void 0 };
        t && (t.next = r), e || ((e = r), n()), (t = r);
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return { e: !1, v: e() };
      } catch (e) {
        return { e: !0, v: e };
      }
    };
  },
  function (e, t, n) {
    var o = n(0).navigator;
    e.exports = (o && o.userAgent) || "";
  },
  function (e, t, n) {
    var o = n(18);
    e.exports = function (e, t, n) {
      for (var r in t) o(e, r, t[r], n);
      return e;
    };
  },
  function (e, t, n) {
    var o = n(9).f,
      r = n(19),
      i = n(1)("toStringTag");
    e.exports = function (e, t, n) {
      e &&
        !r((e = n ? e : e.prototype), i) &&
        o(e, i, { configurable: !0, value: t });
    };
  },
  function (e, t, n) {
    "use strict";
    var o = n(0),
      r = n(9),
      i = n(7),
      a = n(1)("species");
    e.exports = function (e) {
      var t = o[e];
      i &&
        t &&
        !t[a] &&
        r.f(t, a, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (e, t, n) {
    var o = n(1)("iterator"),
      r = !1;
    try {
      var i = [7][o]();
      (i.return = function () {
        r = !0;
      }),
        Array.from(i, function () {
          throw 2;
        });
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !r) return !1;
      var n = !1;
      try {
        var i = [7],
          a = i[o]();
        (a.next = function () {
          return { done: (n = !0) };
        }),
          (i[o] = function () {
            return a;
          }),
          e(i);
      } catch (e) {}
      return n;
    };
  },
  function (e, t, n) {
    "use strict";
    var o = n(14),
      r = n(2),
      i = n(0),
      a = n(21),
      s = n(24);
    o(o.P + o.R, "Promise", {
      finally: function (e) {
        var t = a(this, r.Promise || i.Promise),
          n = "function" == typeof e;
        return this.then(
          n
            ? function (n) {
                return s(t, e()).then(function () {
                  return n;
                });
              }
            : e,
          n
            ? function (n) {
                return s(t, e()).then(function () {
                  throw n;
                });
              }
            : e
        );
      },
    });
  },
  function (e, t, n) {
    (function (t) {
      var n;
      self,
        (n = () =>
          (() => {
            var e = {
                881: (e) => {
                  var t = 1e3,
                    n = 6e4,
                    o = 60 * n,
                    r = 24 * o;
                  function i(e) {
                    if (!((e = String(e)).length > 100)) {
                      var i =
                        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                          e
                        );
                      if (i) {
                        var a = parseFloat(i[1]);
                        switch ((i[2] || "ms").toLowerCase()) {
                          case "years":
                          case "year":
                          case "yrs":
                          case "yr":
                          case "y":
                            return 315576e5 * a;
                          case "weeks":
                          case "week":
                          case "w":
                            return 6048e5 * a;
                          case "days":
                          case "day":
                          case "d":
                            return a * r;
                          case "hours":
                          case "hour":
                          case "hrs":
                          case "hr":
                          case "h":
                            return a * o;
                          case "minutes":
                          case "minute":
                          case "mins":
                          case "min":
                          case "m":
                            return a * n;
                          case "seconds":
                          case "second":
                          case "secs":
                          case "sec":
                          case "s":
                            return a * t;
                          case "milliseconds":
                          case "millisecond":
                          case "msecs":
                          case "msec":
                          case "ms":
                            return a;
                          default:
                            return;
                        }
                      }
                    }
                  }
                  function a(e) {
                    var i = Math.abs(e);
                    return i >= r
                      ? Math.round(e / r) + "d"
                      : i >= o
                      ? Math.round(e / o) + "h"
                      : i >= n
                      ? Math.round(e / n) + "m"
                      : i >= t
                      ? Math.round(e / t) + "s"
                      : e + "ms";
                  }
                  function s(e) {
                    var i = Math.abs(e);
                    return i >= r
                      ? c(e, i, r, "day")
                      : i >= o
                      ? c(e, i, o, "hour")
                      : i >= n
                      ? c(e, i, n, "minute")
                      : i >= t
                      ? c(e, i, t, "second")
                      : e + " ms";
                  }
                  function c(e, t, n, o) {
                    var r = t >= 1.5 * n;
                    return Math.round(e / n) + " " + o + (r ? "s" : "");
                  }
                  e.exports = function (e, t) {
                    t = t || {};
                    var n = typeof e;
                    if ("string" === n && e.length > 0) return i(e);
                    if ("number" === n && isFinite(e))
                      return t.long ? s(e) : a(e);
                    throw new Error(
                      "val is not a non-empty string or a valid number. val=" +
                        JSON.stringify(e)
                    );
                  };
                },
                130: (e, n, o) => {
                  (n.formatArgs = function (t) {
                    if (
                      ((t[0] =
                        (this.useColors ? "%c" : "") +
                        this.namespace +
                        (this.useColors ? " %c" : " ") +
                        t[0] +
                        (this.useColors ? "%c " : " ") +
                        "+" +
                        e.exports.humanize(this.diff)),
                      !this.useColors)
                    )
                      return;
                    const n = "color: " + this.color;
                    t.splice(1, 0, n, "color: inherit");
                    let o = 0,
                      r = 0;
                    t[0].replace(/%[a-zA-Z%]/g, (e) => {
                      "%%" !== e && (o++, "%c" === e && (r = o));
                    }),
                      t.splice(r, 0, n);
                  }),
                    (n.save = function (e) {
                      try {
                        e
                          ? n.storage.setItem("debug", e)
                          : n.storage.removeItem("debug");
                      } catch (e) {}
                    }),
                    (n.load = function () {
                      let e;
                      try {
                        e = n.storage.getItem("debug");
                      } catch (e) {}
                      return (
                        !e && void 0 !== t && "env" in t && (e = t.env.DEBUG), e
                      );
                    }),
                    (n.useColors = function () {
                      return (
                        !(
                          "undefined" == typeof window ||
                          !window.process ||
                          ("renderer" !== window.process.type &&
                            !window.process.__nwjs)
                        ) ||
                        (("undefined" == typeof navigator ||
                          !navigator.userAgent ||
                          !navigator.userAgent
                            .toLowerCase()
                            .match(/(edge|trident)\/(\d+)/)) &&
                          (("undefined" != typeof document &&
                            document.documentElement &&
                            document.documentElement.style &&
                            document.documentElement.style.WebkitAppearance) ||
                            ("undefined" != typeof window &&
                              window.console &&
                              (window.console.firebug ||
                                (window.console.exception &&
                                  window.console.table))) ||
                            ("undefined" != typeof navigator &&
                              navigator.userAgent &&
                              navigator.userAgent
                                .toLowerCase()
                                .match(/firefox\/(\d+)/) &&
                              parseInt(RegExp.$1, 10) >= 31) ||
                            ("undefined" != typeof navigator &&
                              navigator.userAgent &&
                              navigator.userAgent
                                .toLowerCase()
                                .match(/applewebkit\/(\d+)/))))
                      );
                    }),
                    (n.storage = (function () {
                      try {
                        return localStorage;
                      } catch (e) {}
                    })()),
                    (n.destroy = (() => {
                      let e = !1;
                      return () => {
                        e ||
                          ((e = !0),
                          console.warn(
                            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                          ));
                      };
                    })()),
                    (n.colors = [
                      "#0000CC",
                      "#0000FF",
                      "#0033CC",
                      "#0033FF",
                      "#0066CC",
                      "#0066FF",
                      "#0099CC",
                      "#0099FF",
                      "#00CC00",
                      "#00CC33",
                      "#00CC66",
                      "#00CC99",
                      "#00CCCC",
                      "#00CCFF",
                      "#3300CC",
                      "#3300FF",
                      "#3333CC",
                      "#3333FF",
                      "#3366CC",
                      "#3366FF",
                      "#3399CC",
                      "#3399FF",
                      "#33CC00",
                      "#33CC33",
                      "#33CC66",
                      "#33CC99",
                      "#33CCCC",
                      "#33CCFF",
                      "#6600CC",
                      "#6600FF",
                      "#6633CC",
                      "#6633FF",
                      "#66CC00",
                      "#66CC33",
                      "#9900CC",
                      "#9900FF",
                      "#9933CC",
                      "#9933FF",
                      "#99CC00",
                      "#99CC33",
                      "#CC0000",
                      "#CC0033",
                      "#CC0066",
                      "#CC0099",
                      "#CC00CC",
                      "#CC00FF",
                      "#CC3300",
                      "#CC3333",
                      "#CC3366",
                      "#CC3399",
                      "#CC33CC",
                      "#CC33FF",
                      "#CC6600",
                      "#CC6633",
                      "#CC9900",
                      "#CC9933",
                      "#CCCC00",
                      "#CCCC33",
                      "#FF0000",
                      "#FF0033",
                      "#FF0066",
                      "#FF0099",
                      "#FF00CC",
                      "#FF00FF",
                      "#FF3300",
                      "#FF3333",
                      "#FF3366",
                      "#FF3399",
                      "#FF33CC",
                      "#FF33FF",
                      "#FF6600",
                      "#FF6633",
                      "#FF9900",
                      "#FF9933",
                      "#FFCC00",
                      "#FFCC33",
                    ]),
                    (n.log = console.debug || console.log || (() => {})),
                    (e.exports = o(123)(n));
                  const { formatters: r } = e.exports;
                  r.j = function (e) {
                    try {
                      return JSON.stringify(e);
                    } catch (e) {
                      return "[UnexpectedJSONParseError]: " + e.message;
                    }
                  };
                },
                123: (e, t, n) => {
                  e.exports = function (e) {
                    function t(e) {
                      let n,
                        r,
                        i,
                        a = null;
                      function s(...e) {
                        if (!s.enabled) return;
                        const o = s,
                          r = Number(new Date()),
                          i = r - (n || r);
                        (o.diff = i),
                          (o.prev = n),
                          (o.curr = r),
                          (n = r),
                          (e[0] = t.coerce(e[0])),
                          "string" != typeof e[0] && e.unshift("%O");
                        let a = 0;
                        (e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, r) => {
                          if ("%%" === n) return "%";
                          a++;
                          const i = t.formatters[r];
                          if ("function" == typeof i) {
                            const t = e[a];
                            (n = i.call(o, t)), e.splice(a, 1), a--;
                          }
                          return n;
                        })),
                          t.formatArgs.call(o, e),
                          (o.log || t.log).apply(o, e);
                      }
                      return (
                        (s.namespace = e),
                        (s.useColors = t.useColors()),
                        (s.color = t.selectColor(e)),
                        (s.extend = o),
                        (s.destroy = t.destroy),
                        Object.defineProperty(s, "enabled", {
                          enumerable: !0,
                          configurable: !1,
                          get: () =>
                            null !== a
                              ? a
                              : (r !== t.namespaces &&
                                  ((r = t.namespaces), (i = t.enabled(e))),
                                i),
                          set: (e) => {
                            a = e;
                          },
                        }),
                        "function" == typeof t.init && t.init(s),
                        s
                      );
                    }
                    function o(e, n) {
                      const o = t(
                        this.namespace + (void 0 === n ? ":" : n) + e
                      );
                      return (o.log = this.log), o;
                    }
                    function r(e) {
                      return e
                        .toString()
                        .substring(2, e.toString().length - 2)
                        .replace(/\.\*\?$/, "*");
                    }
                    return (
                      (t.debug = t),
                      (t.default = t),
                      (t.coerce = function (e) {
                        return e instanceof Error ? e.stack || e.message : e;
                      }),
                      (t.disable = function () {
                        const e = [
                          ...t.names.map(r),
                          ...t.skips.map(r).map((e) => "-" + e),
                        ].join(",");
                        return t.enable(""), e;
                      }),
                      (t.enable = function (e) {
                        let n;
                        t.save(e),
                          (t.namespaces = e),
                          (t.names = []),
                          (t.skips = []);
                        const o = ("string" == typeof e ? e : "").split(
                            /[\s,]+/
                          ),
                          r = o.length;
                        for (n = 0; n < r; n++)
                          o[n] &&
                            ("-" === (e = o[n].replace(/\*/g, ".*?"))[0]
                              ? t.skips.push(new RegExp("^" + e.slice(1) + "$"))
                              : t.names.push(new RegExp("^" + e + "$")));
                      }),
                      (t.enabled = function (e) {
                        if ("*" === e[e.length - 1]) return !0;
                        let n, o;
                        for (n = 0, o = t.skips.length; n < o; n++)
                          if (t.skips[n].test(e)) return !1;
                        for (n = 0, o = t.names.length; n < o; n++)
                          if (t.names[n].test(e)) return !0;
                        return !1;
                      }),
                      (t.humanize = n(881)),
                      (t.destroy = function () {
                        console.warn(
                          "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                        );
                      }),
                      Object.keys(e).forEach((n) => {
                        t[n] = e[n];
                      }),
                      (t.names = []),
                      (t.skips = []),
                      (t.formatters = {}),
                      (t.selectColor = function (e) {
                        let n = 0;
                        for (let t = 0; t < e.length; t++)
                          (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
                        return t.colors[Math.abs(n) % t.colors.length];
                      }),
                      t.enable(t.load()),
                      t
                    );
                  };
                },
                22: (e, t, n) => {
                  var o = n(481),
                    r = n(426),
                    i = r;
                  (i.v1 = o), (i.v4 = r), (e.exports = i);
                },
                725: (e) => {
                  for (var t = [], n = 0; n < 256; ++n)
                    t[n] = (n + 256).toString(16).substr(1);
                  e.exports = function (e, n) {
                    var o = n || 0,
                      r = t;
                    return [
                      r[e[o++]],
                      r[e[o++]],
                      r[e[o++]],
                      r[e[o++]],
                      "-",
                      r[e[o++]],
                      r[e[o++]],
                      "-",
                      r[e[o++]],
                      r[e[o++]],
                      "-",
                      r[e[o++]],
                      r[e[o++]],
                      "-",
                      r[e[o++]],
                      r[e[o++]],
                      r[e[o++]],
                      r[e[o++]],
                      r[e[o++]],
                      r[e[o++]],
                    ].join("");
                  };
                },
                157: (e) => {
                  var t =
                    ("undefined" != typeof crypto &&
                      crypto.getRandomValues &&
                      crypto.getRandomValues.bind(crypto)) ||
                    ("undefined" != typeof msCrypto &&
                      "function" == typeof window.msCrypto.getRandomValues &&
                      msCrypto.getRandomValues.bind(msCrypto));
                  if (t) {
                    var n = new Uint8Array(16);
                    e.exports = function () {
                      return t(n), n;
                    };
                  } else {
                    var o = new Array(16);
                    e.exports = function () {
                      for (var e, t = 0; t < 16; t++)
                        0 == (3 & t) && (e = 4294967296 * Math.random()),
                          (o[t] = (e >>> ((3 & t) << 3)) & 255);
                      return o;
                    };
                  }
                },
                481: (e, t, n) => {
                  var o,
                    r,
                    i = n(157),
                    a = n(725),
                    s = 0,
                    c = 0;
                  e.exports = function (e, t, n) {
                    var u = (t && n) || 0,
                      l = t || [],
                      d = (e = e || {}).node || o,
                      f = void 0 !== e.clockseq ? e.clockseq : r;
                    if (null == d || null == f) {
                      var p = i();
                      null == d &&
                        (d = o = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]),
                        null == f && (f = r = 16383 & ((p[6] << 8) | p[7]));
                    }
                    var g = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
                      m = void 0 !== e.nsecs ? e.nsecs : c + 1,
                      h = g - s + (m - c) / 1e4;
                    if (
                      (h < 0 && void 0 === e.clockseq && (f = (f + 1) & 16383),
                      (h < 0 || g > s) && void 0 === e.nsecs && (m = 0),
                      m >= 1e4)
                    )
                      throw new Error(
                        "uuid.v1(): Can't create more than 10M uuids/sec"
                      );
                    (s = g), (c = m), (r = f);
                    var w =
                      (1e4 * (268435455 & (g += 122192928e5)) + m) % 4294967296;
                    (l[u++] = (w >>> 24) & 255),
                      (l[u++] = (w >>> 16) & 255),
                      (l[u++] = (w >>> 8) & 255),
                      (l[u++] = 255 & w);
                    var v = ((g / 4294967296) * 1e4) & 268435455;
                    (l[u++] = (v >>> 8) & 255),
                      (l[u++] = 255 & v),
                      (l[u++] = ((v >>> 24) & 15) | 16),
                      (l[u++] = (v >>> 16) & 255),
                      (l[u++] = (f >>> 8) | 128),
                      (l[u++] = 255 & f);
                    for (var C = 0; C < 6; ++C) l[u + C] = d[C];
                    return t || a(l);
                  };
                },
                426: (e, t, n) => {
                  var o = n(157),
                    r = n(725);
                  e.exports = function (e, t, n) {
                    var i = (t && n) || 0;
                    "string" == typeof e &&
                      ((t = "binary" === e ? new Array(16) : null), (e = null));
                    var a = (e = e || {}).random || (e.rng || o)();
                    if (
                      ((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)
                    )
                      for (var s = 0; s < 16; ++s) t[i + s] = a[s];
                    return t || r(a);
                  };
                },
              },
              n = {};
            function o(t) {
              var r = n[t];
              if (void 0 !== r) return r.exports;
              var i = (n[t] = { exports: {} });
              return e[t](i, i.exports, o), i.exports;
            }
            (o.d = (e, t) => {
              for (var n in t)
                o.o(t, n) &&
                  !o.o(e, n) &&
                  Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
              (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
              (o.r = (e) => {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              });
            var r = {};
            return (
              (() => {
                "use strict";
                o.r(r),
                  o.d(r, {
                    ActionObjectType: () => m,
                    ChannelType: () => E,
                    ChildAppWindow: () => Ft,
                    ContainerState: () => Et,
                    DialogDimension: () => I,
                    ErrorCode: () => w,
                    FileOpenPreference: () => g,
                    FrameContexts: () => b,
                    HostClientType: () => C,
                    HostName: () => y,
                    LiveShareHost: () => sn,
                    NotificationTypes: () => Ne,
                    ParentAppWindow: () => kt,
                    SecondaryM365ContentIdName: () => h,
                    TaskModuleDimension: () => F,
                    TeamType: () => S,
                    UserMeetingRole: () => Pt,
                    UserSettingTypes: () => Ue,
                    UserTeamRole: () => T,
                    ViewerActionTypes: () => _e,
                    app: () => X,
                    appEntity: () => on,
                    appInitialization: () => St,
                    appInstallDialog: () => We,
                    authentication: () => K,
                    barCode: () => et,
                    calendar: () => ft,
                    call: () => bt,
                    chat: () => tt,
                    conversations: () => He,
                    dialog: () => J,
                    enablePrintCapability: () => Rt,
                    executeDeepLink: () => qt,
                    files: () => Yt,
                    geoLocation: () => nt,
                    getAdaptiveCardSchemaVersion: () => ct,
                    getContext: () => Mt,
                    getMruTabInstances: () => jt,
                    getTabInstances: () => Bt,
                    initialize: () => At,
                    initializeWithFrameContext: () => Kt,
                    location: () => ut,
                    logs: () => Le,
                    mail: () => pt,
                    media: () => Ye,
                    meeting: () => lt,
                    meetingRoom: () => en,
                    menus: () => $,
                    monetization: () => dt,
                    navigateBack: () => Xt,
                    navigateCrossDomain: () => Qt,
                    navigateToTab: () => $t,
                    notifications: () => tn,
                    openFilePreview: () => Qe,
                    pages: () => Y,
                    people: () => gt,
                    print: () => Ot,
                    profile: () => mt,
                    registerAppButtonClickHandler: () => Lt,
                    registerAppButtonHoverEnterHandler: () => Nt,
                    registerAppButtonHoverLeaveHandler: () => _t,
                    registerBackButtonHandler: () => Ut,
                    registerBeforeUnloadHandler: () => Wt,
                    registerChangeSettingsHandler: () => zt,
                    registerCustomHandler: () => Je,
                    registerFocusEnterHandler: () => Vt,
                    registerFullScreenHandler: () => Dt,
                    registerOnLoadHandler: () => Ht,
                    registerOnThemeChangeHandler: () => xt,
                    registerUserSettingsChangeHandler: () => $e,
                    remoteCamera: () => nn,
                    returnFocus: () => Jt,
                    search: () => wt,
                    sendCustomEvent: () => Ke,
                    sendCustomMessage: () => Ze,
                    setFrameContext: () => Zt,
                    settings: () => Tt,
                    shareDeepLink: () => Gt,
                    sharing: () => vt,
                    stageView: () => Ct,
                    tasks: () => It,
                    teams: () => rn,
                    teamsCore: () => Q,
                    uploadCustomApp: () => qe,
                    version: () => ee,
                    video: () => ht,
                    videoEx: () => an,
                    webStorage: () => yt,
                  });
                var e = "2.0.1",
                  t = "2.0.3",
                  n = "1.9.0",
                  i = "1.8.0",
                  a = [
                    "teams.microsoft.com",
                    "teams.microsoft.us",
                    "gov.teams.microsoft.us",
                    "dod.teams.microsoft.us",
                    "int.teams.microsoft.com",
                    "teams.live.com",
                    "devspaces.skype.com",
                    "ssauth.skype.com",
                    "local.teams.live.com",
                    "local.teams.live.com:8080",
                    "local.teams.office.com",
                    "local.teams.office.com:8080",
                    "msft.spoppe.com",
                    "*.sharepoint.com",
                    "*.sharepoint-df.com",
                    "*.sharepointonline.com",
                    "outlook.office.com",
                    "outlook-sdf.office.com",
                    "outlook.office365.com",
                    "outlook-sdf.office365.com",
                    "outlook.live.com",
                    "outlook-sdf.live.com",
                    "*.teams.microsoft.com",
                    "*.www.office.com",
                    "www.office.com",
                    "word.office.com",
                    "excel.office.com",
                    "powerpoint.office.com",
                    "www.officeppe.com",
                    "*.www.microsoft365.com",
                    "www.microsoft365.com",
                  ],
                  s = /^https:\/\//,
                  c = "https",
                  u = "teams.microsoft.com",
                  l = "The library has not yet been initialized",
                  d = (function () {
                    function e() {}
                    return (
                      (e.initializeCalled = !1),
                      (e.initializeCompleted = !1),
                      (e.additionalValidOrigins = []),
                      (e.isFramelessWindow = !1),
                      (e.printCapabilityEnabled = !1),
                      e
                    );
                  })(),
                  f = (0, o(130).debug)("teamsJs");
                function p(e) {
                  return f.extend(e);
                }
                var g,
                  m,
                  h,
                  w,
                  v,
                  C,
                  y,
                  b,
                  S,
                  T,
                  I,
                  P = o(22);
                !(function (e) {
                  (e.Inline = "inline"),
                    (e.Desktop = "desktop"),
                    (e.Web = "web");
                })(g || (g = {})),
                  (function (e) {
                    e.M365Content = "m365content";
                  })(m || (m = {})),
                  (function (e) {
                    (e.DriveId = "driveId"),
                      (e.GroupId = "groupId"),
                      (e.SiteId = "siteId"),
                      (e.UserId = "userId");
                  })(h || (h = {})),
                  (function (e) {
                    (e[(e.NOT_SUPPORTED_ON_PLATFORM = 100)] =
                      "NOT_SUPPORTED_ON_PLATFORM"),
                      (e[(e.INTERNAL_ERROR = 500)] = "INTERNAL_ERROR"),
                      (e[(e.NOT_SUPPORTED_IN_CURRENT_CONTEXT = 501)] =
                        "NOT_SUPPORTED_IN_CURRENT_CONTEXT"),
                      (e[(e.PERMISSION_DENIED = 1e3)] = "PERMISSION_DENIED"),
                      (e[(e.NETWORK_ERROR = 2e3)] = "NETWORK_ERROR"),
                      (e[(e.NO_HW_SUPPORT = 3e3)] = "NO_HW_SUPPORT"),
                      (e[(e.INVALID_ARGUMENTS = 4e3)] = "INVALID_ARGUMENTS"),
                      (e[(e.UNAUTHORIZED_USER_OPERATION = 5e3)] =
                        "UNAUTHORIZED_USER_OPERATION"),
                      (e[(e.INSUFFICIENT_RESOURCES = 6e3)] =
                        "INSUFFICIENT_RESOURCES"),
                      (e[(e.THROTTLE = 7e3)] = "THROTTLE"),
                      (e[(e.USER_ABORT = 8e3)] = "USER_ABORT"),
                      (e[(e.OPERATION_TIMED_OUT = 8001)] =
                        "OPERATION_TIMED_OUT"),
                      (e[(e.OLD_PLATFORM = 9e3)] = "OLD_PLATFORM"),
                      (e[(e.FILE_NOT_FOUND = 404)] = "FILE_NOT_FOUND"),
                      (e[(e.SIZE_EXCEEDED = 1e4)] = "SIZE_EXCEEDED");
                  })(w || (w = {})),
                  (function (e) {
                    (e.GeoLocation = "geolocation"), (e.Media = "media");
                  })(v || (v = {})),
                  (function (e) {
                    (e.desktop = "desktop"),
                      (e.web = "web"),
                      (e.android = "android"),
                      (e.ios = "ios"),
                      (e.ipados = "ipados"),
                      (e.rigel = "rigel"),
                      (e.surfaceHub = "surfaceHub"),
                      (e.teamsRoomsWindows = "teamsRoomsWindows"),
                      (e.teamsRoomsAndroid = "teamsRoomsAndroid"),
                      (e.teamsPhones = "teamsPhones"),
                      (e.teamsDisplays = "teamsDisplays");
                  })(C || (C = {})),
                  (function (e) {
                    (e.office = "Office"),
                      (e.outlook = "Outlook"),
                      (e.outlookWin32 = "OutlookWin32"),
                      (e.orange = "Orange"),
                      (e.teams = "Teams"),
                      (e.teamsModern = "TeamsModern");
                  })(y || (y = {})),
                  (function (e) {
                    (e.settings = "settings"),
                      (e.content = "content"),
                      (e.authentication = "authentication"),
                      (e.remove = "remove"),
                      (e.task = "task"),
                      (e.sidePanel = "sidePanel"),
                      (e.stage = "stage"),
                      (e.meetingStage = "meetingStage");
                  })(b || (b = {})),
                  (function (e) {
                    (e[(e.Standard = 0)] = "Standard"),
                      (e[(e.Edu = 1)] = "Edu"),
                      (e[(e.Class = 2)] = "Class"),
                      (e[(e.Plc = 3)] = "Plc"),
                      (e[(e.Staff = 4)] = "Staff");
                  })(S || (S = {})),
                  (function (e) {
                    (e[(e.Admin = 0)] = "Admin"),
                      (e[(e.User = 1)] = "User"),
                      (e[(e.Guest = 2)] = "Guest");
                  })(T || (T = {})),
                  (function (e) {
                    (e.Large = "large"),
                      (e.Medium = "medium"),
                      (e.Small = "small");
                  })(I || (I = {}));
                var E,
                  F = I;
                !(function (e) {
                  (e.Regular = "Regular"),
                    (e.Private = "Private"),
                    (e.Shared = "Shared");
                })(E || (E = {}));
                var k = { errorCode: w.NOT_SUPPORTED_ON_PLATFORM },
                  A = 1,
                  R = 5;
                function O(e, t) {
                  if ("*." === e.substring(0, 2)) {
                    var n = e.substring(1);
                    if (
                      t.length > n.length &&
                      t.split(".").length === n.split(".").length &&
                      t.substring(t.length - n.length) === n
                    )
                      return !0;
                  } else if (e === t) return !0;
                  return !1;
                }
                function M(e) {
                  return function (t, n) {
                    if (!t) throw new Error(e || n);
                  };
                }
                function x(e, t) {
                  if ("string" != typeof e || "string" != typeof t) return NaN;
                  var n = e.split("."),
                    o = t.split(".");
                  function r(e) {
                    return /^\d+$/.test(e);
                  }
                  if (!n.every(r) || !o.every(r)) return NaN;
                  for (; n.length < o.length; ) n.push("0");
                  for (; o.length < n.length; ) o.push("0");
                  for (var i = 0; i < n.length; ++i)
                    if (Number(n[i]) != Number(o[i]))
                      return Number(n[i]) > Number(o[i]) ? 1 : -1;
                  return 0;
                }
                function D(e, t) {
                  for (var n = [], o = 2; o < arguments.length; o++)
                    n[o - 2] = arguments[o];
                  var r = e.apply(void 0, n);
                  return (
                    r
                      .then(function () {
                        t && t(null);
                      })
                      .catch(function (e) {
                        t && t(e);
                      }),
                    r
                  );
                }
                function L(e) {
                  return !(
                    x(
                      "".concat(e.majorVersion, ".").concat(e.minorVersion),
                      "".concat(A, ".").concat(R)
                    ) >= 0
                  );
                }
                var N = function () {
                    return (N =
                      Object.assign ||
                      function (e) {
                        for (var t, n = 1, o = arguments.length; n < o; n++)
                          for (var r in (t = arguments[n]))
                            Object.prototype.hasOwnProperty.call(t, r) &&
                              (e[r] = t[r]);
                        return e;
                      }).apply(this, arguments);
                  },
                  _ = p("runtime");
                function U(e) {
                  return 2 === e.apiVersion;
                }
                function H(e) {
                  if (U(e)) return !0;
                  throw -1 === e.apiVersion
                    ? new Error("The runtime has not yet been initialized")
                    : new Error("The runtime version is not supported");
                }
                var W = { apiVersion: -1, supports: {} },
                  V = {
                    appInstallDialog: {},
                    appEntity: {},
                    call: {},
                    chat: {},
                    conversations: {},
                    dialog: { url: { bot: {} }, update: {} },
                    logs: {},
                    meetingRoom: {},
                    menus: {},
                    monetization: {},
                    notifications: {},
                    pages: {
                      appButton: {},
                      tabs: {},
                      config: {},
                      backStack: {},
                      fullTrust: {},
                    },
                    remoteCamera: {},
                    sharing: {},
                    stageView: {},
                    teams: { fullTrust: {} },
                    teamsCore: {},
                    video: {},
                  },
                  z = [
                    C.desktop,
                    C.web,
                    C.android,
                    C.ios,
                    C.rigel,
                    C.surfaceHub,
                    C.teamsRoomsWindows,
                    C.teamsRoomsAndroid,
                    C.teamsPhones,
                    C.teamsDisplays,
                  ],
                  B = [
                    {
                      versionToUpgradeFrom: 1,
                      upgradeToNextVersion: function (e) {
                        var t;
                        return {
                          apiVersion: 2,
                          hostVersionsInfo: void 0,
                          isLegacyTeams: e.isLegacyTeams,
                          supports: N(N({}, e.supports), {
                            dialog: e.supports.dialog
                              ? {
                                  card: void 0,
                                  url: e.supports.dialog,
                                  update:
                                    null === (t = e.supports.dialog) ||
                                    void 0 === t
                                      ? void 0
                                      : t.update,
                                }
                              : void 0,
                          }),
                        };
                      },
                    },
                  ],
                  j = {
                    "1.9.0": [
                      { capability: { location: {} }, hostClientTypes: z },
                    ],
                    "2.0.0": [
                      { capability: { people: {} }, hostClientTypes: z },
                    ],
                    "2.0.1": [
                      {
                        capability: {
                          teams: { fullTrust: { joinedTeams: {} } },
                        },
                        hostClientTypes: [
                          C.android,
                          C.desktop,
                          C.ios,
                          C.teamsRoomsAndroid,
                          C.teamsPhones,
                          C.teamsDisplays,
                          C.web,
                        ],
                      },
                      {
                        capability: { webStorage: {} },
                        hostClientTypes: [C.desktop],
                      },
                    ],
                    "2.0.5": [
                      {
                        capability: { webStorage: {} },
                        hostClientTypes: [C.android, C.desktop, C.ios],
                      },
                    ],
                  },
                  G = _.extend("generateBackCompatRuntimeConfig"),
                  q = _.extend("applyRuntimeConfig");
                function Z(e) {
                  "string" == typeof e.apiVersion &&
                    (q(
                      "Trying to apply runtime with string apiVersion, processing as v1: %o",
                      e
                    ),
                    (e = N(N({}, e), { apiVersion: 1 }))),
                    q("Fast-forwarding runtime %o", e);
                  var t = (function (e) {
                    var t = e;
                    if (
                      (t.apiVersion < 2 &&
                        B.forEach(function (e) {
                          t.apiVersion === e.versionToUpgradeFrom &&
                            (t = e.upgradeToNextVersion(t));
                        }),
                      U(t))
                    )
                      return t;
                    throw new Error(
                      "Received a runtime that could not be upgraded to the latest version"
                    );
                  })(e);
                  q("Applying runtime %o", t),
                    (W = (function e(t) {
                      return (
                        Object.keys(t).forEach(function (n) {
                          "object" == typeof t[n] && e(t[n]);
                        }),
                        Object.freeze(t)
                      );
                    })(t));
                }
                var K,
                  J,
                  $,
                  Q,
                  X,
                  Y,
                  ee = "2.9.1",
                  te = p("internal"),
                  ne = te.extend("ensureInitializeCalled"),
                  oe = te.extend("ensureInitialized");
                function re() {
                  if (!d.initializeCalled) throw (ne(l), new Error(l));
                }
                function ie(e) {
                  for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                  if (!d.initializeCompleted)
                    throw (
                      (oe(
                        "%s. initializeCalled: %s",
                        l,
                        d.initializeCalled.toString()
                      ),
                      new Error(l))
                    );
                  if (t && t.length > 0) {
                    for (var o = !1, r = 0; r < t.length; r++)
                      if (t[r] === d.frameContext) {
                        o = !0;
                        break;
                      }
                    if (!o)
                      throw new Error(
                        "This call is only allowed in following contexts: ".concat(
                          JSON.stringify(t),
                          ". "
                        ) + 'Current context: "'.concat(d.frameContext, '".')
                      );
                  }
                  return H(e);
                }
                function ae(t) {
                  void 0 === t && (t = e);
                  var n = x(d.clientSupportedSDKVersion, t);
                  return !isNaN(n) && n >= 0;
                }
                function se(t) {
                  if (
                    (void 0 === t && (t = e),
                    d.hostClientType != C.android && d.hostClientType != C.ios)
                  )
                    throw { errorCode: w.NOT_SUPPORTED_ON_PLATFORM };
                  if (!ae(t)) throw { errorCode: w.OLD_PLATFORM };
                }
                !(function (e) {
                  var t, n, o;
                  function r(e) {
                    return new Promise(function (n, o) {
                      if (
                        d.hostClientType === C.desktop ||
                        d.hostClientType === C.android ||
                        d.hostClientType === C.ios ||
                        d.hostClientType === C.rigel ||
                        d.hostClientType === C.teamsRoomsWindows ||
                        d.hostClientType === C.teamsRoomsAndroid ||
                        d.hostClientType === C.teamsPhones ||
                        d.hostClientType === C.teamsDisplays
                      ) {
                        var r = document.createElement("a");
                        (r.href = e.url),
                          n(
                            Fe("authentication.authenticate", [
                              r.href,
                              e.width,
                              e.height,
                              e.isExternal,
                            ]).then(function (e) {
                              var t = e[0],
                                n = e[1];
                              if (t) return n;
                              throw new Error(n);
                            })
                          );
                      } else
                        (t = { success: n, fail: o }),
                          (function (e) {
                            i();
                            var t = e.width || 600,
                              n = e.height || 400;
                            (t = Math.min(
                              t,
                              be.currentWindow.outerWidth - 400
                            )),
                              (n = Math.min(
                                n,
                                be.currentWindow.outerHeight - 200
                              ));
                            var o = document.createElement("a");
                            o.href = e.url.replace(
                              "{oauthRedirectMethod}",
                              "web"
                            );
                            var r =
                                void 0 !== be.currentWindow.screenLeft
                                  ? be.currentWindow.screenLeft
                                  : be.currentWindow.screenX,
                              a =
                                void 0 !== be.currentWindow.screenTop
                                  ? be.currentWindow.screenTop
                                  : be.currentWindow.screenY;
                            (r += be.currentWindow.outerWidth / 2 - t / 2),
                              (a += be.currentWindow.outerHeight / 2 - n / 2),
                              (be.childWindow = be.currentWindow.open(
                                o.href,
                                "_blank",
                                "toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top=" +
                                  a +
                                  ", left=" +
                                  r +
                                  ", width=" +
                                  t +
                                  ", height=" +
                                  n
                              )),
                              be.childWindow ? s() : u("FailedToOpenWindow");
                          })(e);
                    });
                  }
                  function i() {
                    a();
                    try {
                      be.childWindow && be.childWindow.close();
                    } finally {
                      (be.childWindow = null), (be.childOrigin = null);
                    }
                  }
                  function a() {
                    n && (clearInterval(n), (n = 0)),
                      ge("initialize"),
                      ge("navigateCrossDomain");
                  }
                  function s() {
                    a(),
                      (n = be.currentWindow.setInterval(function () {
                        if (!be.childWindow || be.childWindow.closed)
                          u("CancelledByUser");
                        else {
                          var e = be.childOrigin;
                          try {
                            (be.childOrigin = "*"), Ge("ping");
                          } finally {
                            be.childOrigin = e;
                          }
                        }
                      }, 100)),
                      pe("initialize", function () {
                        return [b.authentication, d.hostClientType];
                      }),
                      pe("navigateCrossDomain", function () {
                        return !1;
                      });
                  }
                  function c(e) {
                    try {
                      t && t.success(e);
                    } finally {
                      (t = null), i();
                    }
                  }
                  function u(e) {
                    try {
                      t && t.fail(new Error(e));
                    } finally {
                      (t = null), i();
                    }
                  }
                  function l(e, t, n) {
                    if (e) {
                      var o = document.createElement("a");
                      (o.href = decodeURIComponent(e)),
                        o.host &&
                          o.host !== window.location.host &&
                          "outlook.office.com" === o.host &&
                          o.search.indexOf("client_type=Win32_Outlook") > -1 &&
                          (t &&
                            "result" === t &&
                            (n && (o.href = f(o.href, "result", n)),
                            be.currentWindow.location.assign(
                              f(o.href, "authSuccess", "")
                            )),
                          t &&
                            "reason" === t &&
                            (n && (o.href = f(o.href, "reason", n)),
                            be.currentWindow.location.assign(
                              f(o.href, "authFailure", "")
                            )));
                    }
                  }
                  function f(e, t, n) {
                    var o = e.indexOf("#"),
                      r = -1 === o ? "#" : e.substr(o);
                    return (
                      (r = r + "&" + t + ("" !== n ? "=" + n : "")),
                      (e = -1 === o ? e : e.substr(0, o)) + r
                    );
                  }
                  (e.initialize = function () {
                    pe("authentication.authenticate.success", c, !1),
                      pe("authentication.authenticate.failure", u, !1);
                  }),
                    (e.registerAuthenticationHandlers = function (e) {
                      o = e;
                    }),
                    (e.authenticate = function (e) {
                      var t = void 0 !== e,
                        n = t ? e : o;
                      if (!n)
                        throw new Error(
                          "No parameters are provided for authentication"
                        );
                      return (
                        ie(
                          W,
                          b.content,
                          b.sidePanel,
                          b.settings,
                          b.remove,
                          b.task,
                          b.stage,
                          b.meetingStage
                        ),
                        r(n)
                          .then(function (e) {
                            try {
                              return n && n.successCallback
                                ? (n.successCallback(e), "")
                                : e;
                            } finally {
                              t || (o = null);
                            }
                          })
                          .catch(function (e) {
                            try {
                              if (n && n.failureCallback)
                                return n.failureCallback(e.message), "";
                              throw e;
                            } finally {
                              t || (o = null);
                            }
                          })
                      );
                    }),
                    (e.getAuthToken = function (e) {
                      return (
                        re(),
                        (function (e) {
                          return new Promise(function (t) {
                            t(
                              Fe("authentication.getAuthToken", [
                                null == e ? void 0 : e.resources,
                                null == e ? void 0 : e.claims,
                                null == e ? void 0 : e.silent,
                              ])
                            );
                          }).then(function (e) {
                            var t = e[0],
                              n = e[1];
                            if (t) return n;
                            throw new Error(n);
                          });
                        })(e)
                          .then(function (t) {
                            return e && e.successCallback
                              ? (e.successCallback(t), "")
                              : t;
                          })
                          .catch(function (t) {
                            if (e && e.failureCallback)
                              return e.failureCallback(t.message), "";
                            throw t;
                          })
                      );
                    }),
                    (e.getUser = function (e) {
                      return (
                        re(),
                        new Promise(function (e) {
                          e(Fe("authentication.getUser"));
                        })
                          .then(function (e) {
                            var t = e[0],
                              n = e[1];
                            if (t) return n;
                            throw new Error(n);
                          })
                          .then(function (t) {
                            return e && e.successCallback
                              ? (e.successCallback(t), null)
                              : t;
                          })
                          .catch(function (t) {
                            if (e && e.failureCallback)
                              return e.failureCallback(t.message), null;
                            throw t;
                          })
                      );
                    }),
                    (e.notifySuccess = function (e, t) {
                      l(t, "result", e),
                        ie(W, b.authentication),
                        ke("authentication.authenticate.success", [e]),
                        Be(be.parentWindow, function () {
                          return setTimeout(function () {
                            return be.currentWindow.close();
                          }, 200);
                        });
                    }),
                    (e.notifyFailure = function (e, t) {
                      l(t, "reason", e),
                        ie(W, b.authentication),
                        ke("authentication.authenticate.failure", [e]),
                        Be(be.parentWindow, function () {
                          return setTimeout(function () {
                            return be.currentWindow.close();
                          }, 200);
                        });
                    }),
                    (function (e) {
                      (e.Public = "public"),
                        (e.EUDB = "eudb"),
                        (e.Other = "other");
                    })(e.DataResidency || (e.DataResidency = {}));
                })(K || (K = {})),
                  (function (e) {
                    var t = [];
                    function n(e) {
                      d.frameContext &&
                        (d.frameContext === b.task
                          ? t.push(e)
                          : ge("messageForChild"));
                    }
                    (e.initialize = function () {
                      pe("messageForChild", n, !1);
                    }),
                      (function (e) {
                        function n() {
                          return (
                            ie(W) &&
                            void 0 !==
                              (W.supports.dialog && W.supports.dialog.url)
                          );
                        }
                        function o(e) {
                          return {
                            url: e.url,
                            height: e.size ? e.size.height : I.Small,
                            width: e.size ? e.size.width : I.Small,
                            title: e.title,
                            fallbackUrl: e.fallbackUrl,
                          };
                        }
                        function r(e) {
                          var t = o(e);
                          return (t.completionBotId = e.completionBotId), t;
                        }
                        (e.open = function (e, t, r) {
                          if (
                            (ie(W, b.content, b.sidePanel, b.meetingStage),
                            !n())
                          )
                            throw k;
                          r && pe("messageForParent", r),
                            ke("tasks.startTask", [o(e)], function (e, n) {
                              null == t || t({ err: e, result: n }),
                                ge("messageForParent");
                            });
                        }),
                          (e.submit = function (e, t) {
                            if ((ie(W, b.content, b.task), !n())) throw k;
                            ke("tasks.completeTask", [
                              e,
                              t ? (Array.isArray(t) ? t : [t]) : [],
                            ]);
                          }),
                          (e.sendMessageToParentFromDialog = function (e) {
                            if ((ie(W, b.task), !n())) throw k;
                            ke("messageForParent", [e]);
                          }),
                          (e.sendMessageToDialog = function (e) {
                            if (
                              (ie(W, b.content, b.sidePanel, b.meetingStage),
                              !n())
                            )
                              throw k;
                            ke("messageForChild", [e]);
                          }),
                          (e.registerOnMessageFromParent = function (e) {
                            if ((ie(W, b.task), !n())) throw k;
                            for (
                              ge("messageForChild"),
                                pe("messageForChild", e),
                                t.reverse();
                              t.length > 0;

                            )
                              e(t.pop());
                          }),
                          (e.isSupported = n),
                          (function (e) {
                            function t() {
                              return (
                                ie(W) &&
                                void 0 !==
                                  (W.supports.dialog &&
                                    W.supports.dialog.url &&
                                    W.supports.dialog.url.bot)
                              );
                            }
                            (e.open = function (e, n, o) {
                              if (
                                (ie(W, b.content, b.sidePanel, b.meetingStage),
                                !t())
                              )
                                throw k;
                              o && pe("messageForParent", o),
                                ke("tasks.startTask", [r(e)], function (e, t) {
                                  null == n || n({ err: e, result: t }),
                                    ge("messageForParent");
                                });
                            }),
                              (e.isSupported = t);
                          })(e.bot || (e.bot = {})),
                          (e.getDialogInfoFromUrlDialogInfo = o),
                          (e.getDialogInfoFromBotUrlDialogInfo = r);
                      })(e.url || (e.url = {})),
                      (e.isSupported = function () {
                        return !(!ie(W) || !W.supports.dialog);
                      }),
                      (function (e) {
                        function t() {
                          return !(
                            !ie(W) ||
                            !W.supports.dialog ||
                            !W.supports.dialog.update
                          );
                        }
                        (e.resize = function (e) {
                          if (
                            (ie(
                              W,
                              b.content,
                              b.sidePanel,
                              b.task,
                              b.meetingStage
                            ),
                            !t())
                          )
                            throw k;
                          ke("tasks.updateTask", [e]);
                        }),
                          (e.isSupported = t);
                      })(e.update || (e.update = {})),
                      (function (e) {
                        function t() {
                          var e =
                            W.hostVersionsInfo &&
                            W.hostVersionsInfo.adaptiveCardSchemaVersion &&
                            !L(W.hostVersionsInfo.adaptiveCardSchemaVersion);
                          return (
                            ie(W) &&
                            void 0 !==
                              (e && W.supports.dialog && W.supports.dialog.card)
                          );
                        }
                        function n(e) {
                          return {
                            card: e.card,
                            height: e.size ? e.size.height : I.Small,
                            width: e.size ? e.size.width : I.Small,
                            title: e.title,
                          };
                        }
                        function o(e) {
                          var t = n(e);
                          return (t.completionBotId = e.completionBotId), t;
                        }
                        (e.open = function (e, o) {
                          if (
                            (ie(W, b.content, b.sidePanel, b.meetingStage),
                            !t())
                          )
                            throw k;
                          ke("tasks.startTask", [n(e)], function (e, t) {
                            null == o || o({ err: e, result: t });
                          });
                        }),
                          (e.isSupported = t),
                          (function (e) {
                            function t() {
                              var e =
                                W.hostVersionsInfo &&
                                W.hostVersionsInfo.adaptiveCardSchemaVersion &&
                                !L(
                                  W.hostVersionsInfo.adaptiveCardSchemaVersion
                                );
                              return (
                                ie(W) &&
                                void 0 !==
                                  (e &&
                                    W.supports.dialog &&
                                    W.supports.dialog.card &&
                                    W.supports.dialog.card.bot)
                              );
                            }
                            (e.open = function (e, n) {
                              if (
                                (ie(W, b.content, b.sidePanel, b.meetingStage),
                                !t())
                              )
                                throw k;
                              ke("tasks.startTask", [o(e)], function (e, t) {
                                null == n || n({ err: e, result: t });
                              });
                            }),
                              (e.isSupported = t);
                          })(e.bot || (e.bot = {})),
                          (e.getDialogInfoFromAdaptiveCardDialogInfo = n),
                          (e.getDialogInfoFromBotAdaptiveCardDialogInfo = o),
                          (e.getAdaptiveCardDialogInfoFromTaskInfo = function (
                            e
                          ) {
                            return {
                              card: e.card,
                              size: {
                                height: e.height ? e.height : I.Small,
                                width: e.width ? e.width : I.Small,
                              },
                              title: e.title,
                            };
                          }),
                          (e.getBotAdaptiveCardDialogInfoFromTaskInfo =
                            function (e) {
                              return {
                                card: e.card,
                                size: {
                                  height: e.height ? e.height : I.Small,
                                  width: e.width ? e.width : I.Small,
                                },
                                title: e.title,
                                completionBotId: e.completionBotId,
                              };
                            });
                      })(e.adaptiveCard || (e.adaptiveCard = {}));
                  })(J || (J = {})),
                  (function (e) {
                    !(function (e) {
                      (e[(e.ifRoom = 0)] = "ifRoom"),
                        (e[(e.overflowOnly = 1)] = "overflowOnly");
                    })(e.DisplayMode || (e.DisplayMode = {}));
                    var t,
                      n,
                      o,
                      r = function () {
                        (this.enabled = !0), (this.selected = !1);
                      };
                    function i(e) {
                      (o && o(e)) || (ie(W), ke("viewConfigItemPress", [e]));
                    }
                    function a(e) {
                      (t && t(e)) ||
                        (ie(W), ke("handleNavBarMenuItemPress", [e]));
                    }
                    function s(e) {
                      (n && n(e)) ||
                        (ie(W), ke("handleActionMenuItemPress", [e]));
                    }
                    function c() {
                      return !(!ie(W) || !W.supports.menus);
                    }
                    (e.MenuItem = r),
                      (function (e) {
                        (e.dropDown = "dropDown"), (e.popOver = "popOver");
                      })(e.MenuListType || (e.MenuListType = {})),
                      (e.initialize = function () {
                        pe("navBarMenuItemPress", a, !1),
                          pe("actionMenuItemPress", s, !1),
                          pe("setModuleView", i, !1);
                      }),
                      (e.setUpViews = function (e, t) {
                        if ((ie(W), !c())) throw k;
                        (o = t), ke("setUpViews", [e]);
                      }),
                      (e.setNavBarMenu = function (e, n) {
                        if ((ie(W), !c())) throw k;
                        (t = n), ke("setNavBarMenu", [e]);
                      }),
                      (e.showActionMenu = function (e, t) {
                        if ((ie(W), !c())) throw k;
                        (n = t), ke("showActionMenu", [e]);
                      }),
                      (e.isSupported = c);
                  })($ || ($ = {})),
                  (function (e) {
                    function t() {
                      if ("undefined" == typeof window)
                        throw new Error(
                          "window object undefined at print call"
                        );
                      window.print();
                    }
                    function n(e, t) {
                      e && ie(W),
                        e && t && t(),
                        (function (e) {
                          (le.loadHandler = e),
                            e && ke("registerHandler", ["load"]);
                        })(e);
                    }
                    function o(e, t) {
                      e && ie(W),
                        e && t && t(),
                        (function (e) {
                          (le.beforeUnloadHandler = e),
                            e && ke("registerHandler", ["beforeUnload"]);
                        })(e);
                    }
                    function r() {
                      return !(!ie(W) || !W.supports.teamsCore);
                    }
                    (e.enablePrintCapability = function () {
                      if (!d.printCapabilityEnabled) {
                        if ((ie(W), !r())) throw k;
                        (d.printCapabilityEnabled = !0),
                          document.addEventListener("keydown", function (e) {
                            (e.ctrlKey || e.metaKey) &&
                              80 === e.keyCode &&
                              (t(),
                              (e.cancelBubble = !0),
                              e.preventDefault(),
                              e.stopImmediatePropagation());
                          });
                      }
                    }),
                      (e.print = t),
                      (e.registerOnLoadHandler = function (e) {
                        n(e, function () {
                          if (e && !r()) throw k;
                        });
                      }),
                      (e.registerOnLoadHandlerHelper = n),
                      (e.registerBeforeUnloadHandler = function (e) {
                        o(e, function () {
                          if (e && !r()) throw k;
                        });
                      }),
                      (e.registerBeforeUnloadHandlerHelper = o),
                      (e.isSupported = r);
                  })(Q || (Q = {})),
                  (function (t) {
                    var n = p("app");
                    (t.Messages = {
                      AppLoaded: "appInitialization.appLoaded",
                      Success: "appInitialization.success",
                      Failure: "appInitialization.failure",
                      ExpectedFailure: "appInitialization.expectedFailure",
                    }),
                      (function (e) {
                        (e.AuthFailed = "AuthFailed"),
                          (e.Timeout = "Timeout"),
                          (e.Other = "Other");
                      })(t.FailedReason || (t.FailedReason = {})),
                      (function (e) {
                        (e.PermissionError = "PermissionError"),
                          (e.NotFound = "NotFound"),
                          (e.Throttling = "Throttling"),
                          (e.Offline = "Offline"),
                          (e.Other = "Other");
                      })(
                        t.ExpectedFailureReason ||
                          (t.ExpectedFailureReason = {})
                      ),
                      (t.isInitialized = function () {
                        return d.initializeCompleted;
                      }),
                      (t.getFrameContext = function () {
                        return d.frameContext;
                      }),
                      (t.initialize = function (e) {
                        return "undefined" == typeof window
                          ? (n.extend("initialize")(
                              "window object undefined at initialization"
                            ),
                            Promise.resolve())
                          : (function (e, t, n) {
                              return new Promise(function (o, r) {
                                var i = setTimeout(r, t, n);
                                e()
                                  .then(function (e) {
                                    clearTimeout(i), o(e);
                                  })
                                  .catch(function (e) {
                                    clearTimeout(i), r(e);
                                  });
                              });
                            })(
                              function () {
                                return r(e);
                              },
                              5e3,
                              new Error("SDK initialization timed out.")
                            );
                      });
                    var o = n.extend("initializeHelper");
                    function r(t) {
                      return new Promise(function (n) {
                        d.initializeCalled ||
                          ((d.initializeCalled = !0),
                          (le.handlers.themeChange = he),
                          (le.handlers.load = we),
                          (le.handlers.beforeUnload = ve),
                          Y.backStack._initialize(),
                          (d.initializePromise = (function (e) {
                            if (
                              ((Se.messageListener = function (e) {
                                return (function (e) {
                                  if (
                                    e &&
                                    e.data &&
                                    "object" == typeof e.data
                                  ) {
                                    var t =
                                        e.source ||
                                        (e.originalEvent &&
                                          e.originalEvent.source),
                                      n =
                                        e.origin ||
                                        (e.originalEvent &&
                                          e.originalEvent.origin);
                                    (function (e, t) {
                                      return (
                                        (!be.currentWindow ||
                                          e !== be.currentWindow) &&
                                        (!!(
                                          be.currentWindow &&
                                          be.currentWindow.location &&
                                          t &&
                                          t === be.currentWindow.location.origin
                                        ) ||
                                          (function (e) {
                                            if ("https:" !== e.protocol)
                                              return !1;
                                            var t = e.host;
                                            if (
                                              a.some(function (e) {
                                                return O(e, t);
                                              })
                                            )
                                              return !0;
                                            for (
                                              var n = 0,
                                                o = d.additionalValidOrigins;
                                              n < o.length;
                                              n++
                                            ) {
                                              var r = o[n];
                                              if (
                                                O(
                                                  "https://" ===
                                                    r.substring(0, 8)
                                                    ? r.substring(8)
                                                    : r,
                                                  t
                                                )
                                              )
                                                return !0;
                                            }
                                            return !1;
                                          })(new URL(t)))
                                      );
                                    })(t, n) &&
                                      ((function (e, t) {
                                        d.isFramelessWindow ||
                                        (be.parentWindow &&
                                          !be.parentWindow.closed &&
                                          e !== be.parentWindow)
                                          ? (be.childWindow &&
                                              !be.childWindow.closed &&
                                              e !== be.childWindow) ||
                                            ((be.childWindow = e),
                                            (be.childOrigin = t))
                                          : ((be.parentWindow = e),
                                            (be.parentOrigin = t)),
                                          be.parentWindow &&
                                            be.parentWindow.closed &&
                                            ((be.parentWindow = null),
                                            (be.parentOrigin = null)),
                                          be.childWindow &&
                                            be.childWindow.closed &&
                                            ((be.childWindow = null),
                                            (be.childOrigin = null)),
                                          ze(be.parentWindow),
                                          ze(be.childWindow);
                                      })(t, n),
                                      t === be.parentWindow
                                        ? Me(e)
                                        : t === be.childWindow &&
                                          (function (e) {
                                            if (
                                              "id" in e.data &&
                                              "func" in e.data
                                            ) {
                                              var t = e.data,
                                                n = fe(t.func, t.args),
                                                o = n[0],
                                                r = n[1];
                                              o && void 0 !== r
                                                ? je(
                                                    t.id,
                                                    Array.isArray(r) ? r : [r]
                                                  )
                                                : ke(
                                                    t.func,
                                                    t.args,
                                                    function () {
                                                      for (
                                                        var e = [], n = 0;
                                                        n < arguments.length;
                                                        n++
                                                      )
                                                        e[n] = arguments[n];
                                                      if (be.childWindow) {
                                                        var o = e.pop();
                                                        je(t.id, e, o);
                                                      }
                                                    }
                                                  );
                                            }
                                          })(e));
                                  }
                                })(e);
                              }),
                              (be.currentWindow = be.currentWindow || window),
                              (be.parentWindow =
                                be.currentWindow.parent !==
                                be.currentWindow.self
                                  ? be.currentWindow.parent
                                  : be.currentWindow.opener),
                              (be.parentWindow || e) &&
                                be.currentWindow.addEventListener(
                                  "message",
                                  Se.messageListener,
                                  !1
                                ),
                              !be.parentWindow)
                            ) {
                              var t = be.currentWindow;
                              if (!t.nativeInterface)
                                return Promise.reject(
                                  new Error(
                                    "Initialization Failed. No Parent window found."
                                  )
                                );
                              (d.isFramelessWindow = !0),
                                (t.onNativeMessage = Me);
                            }
                            try {
                              return (
                                (be.parentOrigin = "*"),
                                Fe("initialize", [ee, 2]).then(function (e) {
                                  return {
                                    context: e[0],
                                    clientType: e[1],
                                    runtimeConfig: e[2],
                                    clientSupportedSDKVersion: e[3],
                                  };
                                })
                              );
                            } finally {
                              be.parentOrigin = null;
                            }
                          })(t).then(function (t) {
                            var n = t.context,
                              r = t.clientType,
                              i = t.runtimeConfig,
                              a = t.clientSupportedSDKVersion,
                              s = void 0 === a ? e : a;
                            (d.frameContext = n),
                              (d.hostClientType = r),
                              (d.clientSupportedSDKVersion = s);
                            try {
                              o("Parsing %s", i);
                              var c = JSON.parse(i);
                              if (
                                (o(
                                  "Checking if %o is a valid runtime object",
                                  null != c ? c : "null"
                                ),
                                !c || !c.apiVersion)
                              )
                                throw new Error(
                                  "Received runtime config is invalid"
                                );
                              i && Z(c);
                            } catch (t) {
                              if (!(t instanceof SyntaxError)) throw t;
                              try {
                                if (
                                  (o(
                                    "Attempting to parse %s as an SDK version",
                                    i
                                  ),
                                  isNaN(x(i, e)) ||
                                    (d.clientSupportedSDKVersion = i),
                                  (c = JSON.parse(s)),
                                  o(
                                    "givenRuntimeConfig parsed to %o",
                                    null != c ? c : "null"
                                  ),
                                  !c)
                                )
                                  throw new Error(
                                    "givenRuntimeConfig string was successfully parsed. However, it parsed to value of null"
                                  );
                                Z(c);
                              } catch (e) {
                                if (!(e instanceof SyntaxError)) throw e;
                                Z(
                                  (function (e) {
                                    G(
                                      "generating back compat runtime config for %s",
                                      e
                                    );
                                    var t = N({}, V);
                                    G(
                                      "Supported capabilities in config before updating based on highestSupportedVersion: %o",
                                      t
                                    ),
                                      Object.keys(j).forEach(function (n) {
                                        x(e, n) >= 0 &&
                                          j[n].forEach(function (e) {
                                            e.hostClientTypes.includes(
                                              d.hostClientType
                                            ) &&
                                              (t = N(N({}, t), e.capability));
                                          });
                                      });
                                    var n = {
                                      apiVersion: 2,
                                      isLegacyTeams: !0,
                                      supports: t,
                                    };
                                    return (
                                      G(
                                        "Runtime config after updating based on highestSupportedVersion: %o",
                                        n
                                      ),
                                      n
                                    );
                                  })(d.clientSupportedSDKVersion)
                                );
                              }
                            }
                            d.initializeCompleted = !0;
                          })),
                          K.initialize(),
                          $.initialize(),
                          Y.config.initialize(),
                          J.initialize()),
                          Array.isArray(t) &&
                            (function (e) {
                              var t = d.additionalValidOrigins.concat(
                                  e.filter(function (e) {
                                    return "string" == typeof e && s.test(e);
                                  })
                                ),
                                n = {};
                              (t = t.filter(function (e) {
                                return !n[e] && ((n[e] = !0), !0);
                              })),
                                (d.additionalValidOrigins = t);
                            })(t),
                          n(d.initializePromise);
                      });
                    }
                    function i(e) {
                      e && re(),
                        (function (e) {
                          (le.themeChangeHandler = e),
                            e && ke("registerHandler", ["themeChange"]);
                        })(e);
                    }
                    (t._initialize = function (e) {
                      be.currentWindow = e;
                    }),
                      (t._uninitialize = function () {
                        d.initializeCalled &&
                          (d.frameContext &&
                            (i(null),
                            Y.backStack.registerBackButtonHandler(null),
                            Y.registerFullScreenHandler(null),
                            Q.registerBeforeUnloadHandler(null),
                            Q.registerOnLoadHandler(null),
                            Le.registerGetLogHandler(null)),
                          d.frameContext === b.settings &&
                            Y.config.registerOnSaveHandler(null),
                          d.frameContext === b.remove &&
                            Y.config.registerOnRemoveHandler(null),
                          (d.initializeCalled = !1),
                          (d.initializeCompleted = !1),
                          (d.initializePromise = null),
                          (d.additionalValidOrigins = []),
                          (d.frameContext = null),
                          (d.hostClientType = null),
                          (d.isFramelessWindow = !1),
                          be.currentWindow &&
                            be.currentWindow.removeEventListener(
                              "message",
                              Se.messageListener,
                              !1
                            ),
                          (be.currentWindow = null),
                          (be.parentWindow = null),
                          (be.parentOrigin = null),
                          (be.childWindow = null),
                          (be.childOrigin = null),
                          (Se.parentMessageQueue = []),
                          (Se.childMessageQueue = []),
                          (Se.nextMessageId = 0),
                          (Se.callbacks = {}),
                          (Se.promiseCallbacks = {}));
                      }),
                      (t.getContext = function () {
                        return new Promise(function (e) {
                          re(), e(Te("getContext"));
                        }).then(function (e) {
                          return (function (e) {
                            return {
                              actionInfo: e.actionInfo,
                              app: {
                                locale: e.locale,
                                sessionId: e.appSessionId ? e.appSessionId : "",
                                theme: e.theme ? e.theme : "default",
                                iconPositionVertical: e.appIconPosition,
                                osLocaleInfo: e.osLocaleInfo,
                                parentMessageId: e.parentMessageId,
                                userClickTime: e.userClickTime,
                                userFileOpenPreference:
                                  e.userFileOpenPreference,
                                host: {
                                  name: e.hostName ? e.hostName : y.teams,
                                  clientType: e.hostClientType
                                    ? e.hostClientType
                                    : C.web,
                                  sessionId: e.sessionId ? e.sessionId : "",
                                  ringId: e.ringId,
                                },
                                appLaunchId: e.appLaunchId,
                              },
                              page: {
                                id: e.entityId,
                                frameContext: e.frameContext
                                  ? e.frameContext
                                  : d.frameContext,
                                subPageId: e.subEntityId,
                                isFullScreen: e.isFullScreen,
                                isMultiWindow: e.isMultiWindow,
                                sourceOrigin: e.sourceOrigin,
                              },
                              user: {
                                id: e.userObjectId,
                                displayName: e.userDisplayName,
                                isCallingAllowed: e.isCallingAllowed,
                                isPSTNCallingAllowed: e.isPSTNCallingAllowed,
                                licenseType: e.userLicenseType,
                                loginHint: e.loginHint,
                                userPrincipalName: e.userPrincipalName,
                                tenant: e.tid
                                  ? { id: e.tid, teamsSku: e.tenantSKU }
                                  : void 0,
                              },
                              channel: e.channelId
                                ? {
                                    id: e.channelId,
                                    displayName: e.channelName,
                                    relativeUrl: e.channelRelativeUrl,
                                    membershipType: e.channelType,
                                    defaultOneNoteSectionId:
                                      e.defaultOneNoteSectionId,
                                    ownerGroupId: e.hostTeamGroupId,
                                    ownerTenantId: e.hostTeamTenantId,
                                  }
                                : void 0,
                              chat: e.chatId ? { id: e.chatId } : void 0,
                              meeting: e.meetingId
                                ? { id: e.meetingId }
                                : void 0,
                              sharepoint: e.sharepoint,
                              team: e.teamId
                                ? {
                                    internalId: e.teamId,
                                    displayName: e.teamName,
                                    type: e.teamType,
                                    groupId: e.groupId,
                                    templateId: e.teamTemplateId,
                                    isArchived: e.isTeamArchived,
                                    userRole: e.userTeamRole,
                                  }
                                : void 0,
                              sharePointSite:
                                e.teamSiteUrl ||
                                e.teamSiteDomain ||
                                e.teamSitePath ||
                                e.mySitePath ||
                                e.mySiteDomain
                                  ? {
                                      teamSiteUrl: e.teamSiteUrl,
                                      teamSiteDomain: e.teamSiteDomain,
                                      teamSitePath: e.teamSitePath,
                                      teamSiteId: e.teamSiteId,
                                      mySitePath: e.mySitePath,
                                      mySiteDomain: e.mySiteDomain,
                                    }
                                  : void 0,
                            };
                          })(e);
                        });
                      }),
                      (t.notifyAppLoaded = function () {
                        re(), ke(t.Messages.AppLoaded, [ee]);
                      }),
                      (t.notifySuccess = function () {
                        re(), ke(t.Messages.Success, [ee]);
                      }),
                      (t.notifyFailure = function (e) {
                        re(), ke(t.Messages.Failure, [e.reason, e.message]);
                      }),
                      (t.notifyExpectedFailure = function (e) {
                        re(),
                          ke(t.Messages.ExpectedFailure, [e.reason, e.message]);
                      }),
                      (t.registerOnThemeChangeHandler = i),
                      (t.openLink = function (e) {
                        return new Promise(function (t) {
                          ie(
                            W,
                            b.content,
                            b.sidePanel,
                            b.settings,
                            b.task,
                            b.stage,
                            b.meetingStage
                          ),
                            t(Ie("executeDeepLink", e));
                        });
                      });
                  })(X || (X = {})),
                  (function (e) {
                    function t(e) {
                      if ((ie(W, b.content), !n())) throw k;
                      ke("setFrameContext", [e]);
                    }
                    function n() {
                      return !(!ie(W) || !W.supports.pages);
                    }
                    (e.returnFocus = function (e) {
                      if ((ie(W), !n())) throw k;
                      ke("returnFocus", [e]);
                    }),
                      (e.registerFocusEnterHandler = function (e) {
                        me("focusEnter", e, [], function () {
                          if (!n()) throw k;
                        });
                      }),
                      (e.setCurrentFrame = t),
                      (e.initializeWithFrameContext = function (e, n, o) {
                        X.initialize(o).then(function () {
                          return n && n();
                        }),
                          t(e);
                      }),
                      (e.getConfig = function () {
                        return new Promise(function (e) {
                          if (
                            (ie(
                              W,
                              b.content,
                              b.settings,
                              b.remove,
                              b.sidePanel
                            ),
                            !n())
                          )
                            throw k;
                          e(Te("settings.getSettings"));
                        });
                      }),
                      (e.navigateCrossDomain = function (e) {
                        return new Promise(function (t) {
                          if (
                            (ie(
                              W,
                              b.content,
                              b.sidePanel,
                              b.settings,
                              b.remove,
                              b.task,
                              b.stage,
                              b.meetingStage
                            ),
                            !n())
                          )
                            throw k;
                          t(
                            Pe(
                              "navigateCrossDomain",
                              "Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.",
                              e
                            )
                          );
                        });
                      }),
                      (e.navigateToApp = function (e) {
                        return new Promise(function (t) {
                          if (
                            (ie(
                              W,
                              b.content,
                              b.sidePanel,
                              b.settings,
                              b.task,
                              b.stage,
                              b.meetingStage
                            ),
                            !n())
                          )
                            throw k;
                          W.isLegacyTeams
                            ? t(
                                Ie(
                                  "executeDeepLink",
                                  (function (e) {
                                    var t = new URL(
                                      "https://teams.microsoft.com/l/entity/" +
                                        encodeURIComponent(e.appId) +
                                        "/" +
                                        encodeURIComponent(e.pageId)
                                    );
                                    return (
                                      e.webUrl &&
                                        t.searchParams.append(
                                          "webUrl",
                                          e.webUrl
                                        ),
                                      (e.channelId || e.subPageId) &&
                                        t.searchParams.append(
                                          "context",
                                          JSON.stringify({
                                            channelId: e.channelId,
                                            subEntityId: e.subPageId,
                                          })
                                        ),
                                      t.toString()
                                    );
                                  })(e)
                                )
                              )
                            : t(Ie("pages.navigateToApp", e));
                        });
                      }),
                      (e.shareDeepLink = function (e) {
                        if (
                          (ie(W, b.content, b.sidePanel, b.meetingStage), !n())
                        )
                          throw k;
                        ke("shareDeepLink", [
                          e.subPageId,
                          e.subPageLabel,
                          e.subPageWebUrl,
                        ]);
                      }),
                      (e.registerFullScreenHandler = function (e) {
                        me("fullScreenChange", e, [], function () {
                          if (e && !n()) throw k;
                        });
                      }),
                      (e.isSupported = n),
                      (function (e) {
                        function t() {
                          return !(
                            !ie(W) ||
                            !W.supports.pages ||
                            !W.supports.pages.tabs
                          );
                        }
                        (e.navigateToTab = function (e) {
                          return new Promise(function (n) {
                            if ((ie(W), !t())) throw k;
                            n(
                              Pe(
                                "navigateToTab",
                                "Invalid internalTabInstanceId and/or channelId were/was provided",
                                e
                              )
                            );
                          });
                        }),
                          (e.getTabInstances = function (e) {
                            return new Promise(function (n) {
                              if ((ie(W), !t())) throw k;
                              n(Te("getTabInstances", e));
                            });
                          }),
                          (e.getMruTabInstances = function (e) {
                            return new Promise(function (n) {
                              if ((ie(W), !t())) throw k;
                              n(Te("getMruTabInstances", e));
                            });
                          }),
                          (e.isSupported = t);
                      })(e.tabs || (e.tabs = {})),
                      (function (e) {
                        var t, n;
                        function o(e, n) {
                          e && ie(W, b.settings),
                            n && n(),
                            (t = e),
                            e && ke("registerHandler", ["save"]);
                        }
                        function r(e, t) {
                          e && ie(W, b.remove, b.settings),
                            t && t(),
                            (n = e),
                            e && ke("registerHandler", ["remove"]);
                        }
                        function i(e) {
                          var n = new a(e);
                          t
                            ? t(n)
                            : be.childWindow
                            ? Ge("settings.save", [e])
                            : n.notifySuccess();
                        }
                        (e.initialize = function () {
                          pe("settings.save", i, !1),
                            pe("settings.remove", s, !1);
                        }),
                          (e.setValidityState = function (e) {
                            if ((ie(W, b.settings, b.remove), !u())) throw k;
                            ke("settings.setValidityState", [e]);
                          }),
                          (e.setConfig = function (e) {
                            return new Promise(function (t) {
                              if (
                                (ie(W, b.content, b.settings, b.sidePanel),
                                !u())
                              )
                                throw k;
                              t(Ie("settings.setSettings", e));
                            });
                          }),
                          (e.registerOnSaveHandler = function (e) {
                            o(e, function () {
                              if (e && !u()) throw k;
                            });
                          }),
                          (e.registerOnSaveHandlerHelper = o),
                          (e.registerOnRemoveHandler = function (e) {
                            r(e, function () {
                              if (e && !u()) throw k;
                            });
                          }),
                          (e.registerOnRemoveHandlerHelper = r),
                          (e.registerChangeConfigHandler = function (e) {
                            me("changeSettings", e, [b.content], function () {
                              if (!u()) throw k;
                            });
                          });
                        var a = (function () {
                          function e(e) {
                            (this.notified = !1), (this.result = e || {});
                          }
                          return (
                            (e.prototype.notifySuccess = function () {
                              this.ensureNotNotified(),
                                ke("settings.save.success"),
                                (this.notified = !0);
                            }),
                            (e.prototype.notifyFailure = function (e) {
                              this.ensureNotNotified(),
                                ke("settings.save.failure", [e]),
                                (this.notified = !0);
                            }),
                            (e.prototype.ensureNotNotified = function () {
                              if (this.notified)
                                throw new Error(
                                  "The SaveEvent may only notify success or failure once."
                                );
                            }),
                            e
                          );
                        })();
                        function s() {
                          var e = new c();
                          n
                            ? n(e)
                            : be.childWindow
                            ? Ge("settings.remove", [])
                            : e.notifySuccess();
                        }
                        var c = (function () {
                          function e() {
                            this.notified = !1;
                          }
                          return (
                            (e.prototype.notifySuccess = function () {
                              this.ensureNotNotified(),
                                ke("settings.remove.success"),
                                (this.notified = !0);
                            }),
                            (e.prototype.notifyFailure = function (e) {
                              this.ensureNotNotified(),
                                ke("settings.remove.failure", [e]),
                                (this.notified = !0);
                            }),
                            (e.prototype.ensureNotNotified = function () {
                              if (this.notified)
                                throw new Error(
                                  "The removeEvent may only notify success or failure once."
                                );
                            }),
                            e
                          );
                        })();
                        function u() {
                          return !(
                            !ie(W) ||
                            !W.supports.pages ||
                            !W.supports.pages.config
                          );
                        }
                        e.isSupported = u;
                      })(e.config || (e.config = {})),
                      (function (e) {
                        var t;
                        function n() {
                          return new Promise(function (e) {
                            if ((ie(W), !i())) throw k;
                            e(
                              Pe(
                                "navigateBack",
                                "Back navigation is not supported in the current client or context."
                              )
                            );
                          });
                        }
                        function o(e, n) {
                          e && ie(W),
                            n && n(),
                            (t = e),
                            e && ke("registerHandler", ["backButton"]);
                        }
                        function r() {
                          (t && t()) ||
                            (be.childWindow ? Ge("backButtonPress", []) : n());
                        }
                        function i() {
                          return !(
                            !ie(W) ||
                            !W.supports.pages ||
                            !W.supports.pages.backStack
                          );
                        }
                        (e._initialize = function () {
                          pe("backButtonPress", r, !1);
                        }),
                          (e.navigateBack = n),
                          (e.registerBackButtonHandler = function (e) {
                            o(e, function () {
                              if (e && !i()) throw k;
                            });
                          }),
                          (e.registerBackButtonHandlerHelper = o),
                          (e.isSupported = i);
                      })(e.backStack || (e.backStack = {})),
                      (function (e) {
                        function t() {
                          return !(
                            !ie(W) ||
                            !W.supports.pages ||
                            !W.supports.pages.fullTrust
                          );
                        }
                        (e.enterFullscreen = function () {
                          if ((ie(W, b.content), !t())) throw k;
                          ke("enterFullscreen", []);
                        }),
                          (e.exitFullscreen = function () {
                            if ((ie(W, b.content), !t())) throw k;
                            ke("exitFullscreen", []);
                          }),
                          (e.isSupported = t);
                      })(e.fullTrust || (e.fullTrust = {})),
                      (function (e) {
                        function t() {
                          return !(
                            !ie(W) ||
                            !W.supports.pages ||
                            !W.supports.pages.appButton
                          );
                        }
                        (e.onClick = function (e) {
                          me("appButtonClick", e, [b.content], function () {
                            if (!t()) throw k;
                          });
                        }),
                          (e.onHoverEnter = function (e) {
                            me(
                              "appButtonHoverEnter",
                              e,
                              [b.content],
                              function () {
                                if (!t()) throw k;
                              }
                            );
                          }),
                          (e.onHoverLeave = function (e) {
                            me(
                              "appButtonHoverLeave",
                              e,
                              [b.content],
                              function () {
                                if (!t()) throw k;
                              }
                            );
                          }),
                          (e.isSupported = t);
                      })(e.appButton || (e.appButton = {})),
                      (function (e) {
                        function t() {
                          return !(
                            !ie(W) ||
                            !W.supports.pages ||
                            !W.supports.pages.currentApp
                          );
                        }
                        (e.navigateTo = function (e) {
                          return new Promise(function (n) {
                            if (
                              (ie(
                                W,
                                b.content,
                                b.sidePanel,
                                b.settings,
                                b.task,
                                b.stage,
                                b.meetingStage
                              ),
                              !t())
                            )
                              throw k;
                            n(Ee("pages.currentApp.navigateTo", e));
                          });
                        }),
                          (e.navigateToDefaultPage = function () {
                            return new Promise(function (e) {
                              if (
                                (ie(
                                  W,
                                  b.content,
                                  b.sidePanel,
                                  b.settings,
                                  b.task,
                                  b.stage,
                                  b.meetingStage
                                ),
                                !t())
                              )
                                throw k;
                              e(Ee("pages.currentApp.navigateToDefaultPage"));
                            });
                          }),
                          (e.isSupported = t);
                      })(e.currentApp || (e.currentApp = {}));
                  })(Y || (Y = {}));
                var ce = function (e, t, n) {
                    if (n || 2 === arguments.length)
                      for (var o, r = 0, i = t.length; r < i; r++)
                        (!o && r in t) ||
                          (o || (o = Array.prototype.slice.call(t, 0, r)),
                          (o[r] = t[r]));
                    return e.concat(o || Array.prototype.slice.call(t));
                  },
                  ue = p("handlers"),
                  le = (function () {
                    function e() {}
                    return (e.handlers = {}), e;
                  })(),
                  de = ue.extend("callHandler");
                function fe(e, t) {
                  var n = le.handlers[e];
                  return n
                    ? (de(
                        "Invoking the registered handler for message %s with arguments %o",
                        e,
                        t
                      ),
                      [!0, n.apply(this, t)])
                    : be.childWindow
                    ? (Ge(e, [t]), [!1, void 0])
                    : (de("Handler for action message %s not found.", e),
                      [!1, void 0]);
                }
                function pe(e, t, n, o) {
                  void 0 === n && (n = !0),
                    void 0 === o && (o = []),
                    t
                      ? ((le.handlers[e] = t),
                        n && ke("registerHandler", ce([e], o, !0)))
                      : delete le.handlers[e];
                }
                function ge(e) {
                  delete le.handlers[e];
                }
                function me(e, t, n, o) {
                  t && ie.apply(void 0, ce([W], n, !1)), o && o(), pe(e, t);
                }
                function he(e) {
                  le.themeChangeHandler && le.themeChangeHandler(e),
                    be.childWindow && Ge("themeChange", [e]);
                }
                function we(e) {
                  le.loadHandler && le.loadHandler(e),
                    be.childWindow && Ge("load", [e]);
                }
                function ve() {
                  var e = function () {
                    ke("readyToUnload", []);
                  };
                  (le.beforeUnloadHandler && le.beforeUnloadHandler(e)) ||
                    (be.childWindow ? Ge("beforeUnload") : e());
                }
                var Ce = function (e, t, n) {
                    if (n || 2 === arguments.length)
                      for (var o, r = 0, i = t.length; r < i; r++)
                        (!o && r in t) ||
                          (o || (o = Array.prototype.slice.call(t, 0, r)),
                          (o[r] = t[r]));
                    return e.concat(o || Array.prototype.slice.call(t));
                  },
                  ye = p("communication"),
                  be = function () {},
                  Se = (function () {
                    function e() {}
                    return (
                      (e.parentMessageQueue = []),
                      (e.childMessageQueue = []),
                      (e.nextMessageId = 0),
                      (e.callbacks = {}),
                      (e.promiseCallbacks = {}),
                      e
                    );
                  })();
                function Te(e) {
                  for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                  return Fe(e, t).then(function (e) {
                    return e[0];
                  });
                }
                function Ie(e) {
                  for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                  return Fe(e, t).then(function (e) {
                    var t = e[0],
                      n = e[1];
                    if (!t) throw new Error(n);
                  });
                }
                function Pe(e, t) {
                  for (var n = [], o = 2; o < arguments.length; o++)
                    n[o - 2] = arguments[o];
                  return Fe(e, n).then(function (e) {
                    var n = e[0],
                      o = e[1];
                    if (!n) throw new Error(o || t);
                  });
                }
                function Ee(e) {
                  for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                  return Fe(e, t).then(function (e) {
                    var t = e[0],
                      n = e[1];
                    if (t) throw t;
                    return n;
                  });
                }
                function Fe(e, t) {
                  return (
                    void 0 === t && (t = void 0),
                    new Promise(function (n) {
                      n(
                        (function (e) {
                          return new Promise(function (t) {
                            Se.promiseCallbacks[e] = t;
                          });
                        })(Re(e, t).id)
                      );
                    })
                  );
                }
                function ke(e, t, n) {
                  var o;
                  t instanceof Function
                    ? (n = t)
                    : t instanceof Array && (o = t);
                  var r = Re(e, o);
                  n && (Se.callbacks[r.id] = n);
                }
                var Ae = ye.extend("sendMessageToParentHelper");
                function Re(e, t) {
                  var n = Ae,
                    o = be.parentWindow,
                    r = (function (e, t) {
                      return {
                        id: Se.nextMessageId++,
                        func: e,
                        timestamp: Date.now(),
                        args: t || [],
                      };
                    })(e, t);
                  if (
                    (n("Message %i information: %o", r.id, {
                      actionName: e,
                      args: t,
                    }),
                    d.isFramelessWindow)
                  )
                    be.currentWindow &&
                      be.currentWindow.nativeInterface &&
                      (n(
                        "Sending message %i to parent via framelessPostMessage interface",
                        r.id
                      ),
                      be.currentWindow.nativeInterface.framelessPostMessage(
                        JSON.stringify(r)
                      ));
                  else {
                    var i = De(o);
                    o && i
                      ? (n(
                          "Sending message %i to parent via postMessage",
                          r.id
                        ),
                        o.postMessage(r, i))
                      : (n("Adding message %i to parent message queue", r.id),
                        xe(o).push(r));
                  }
                  return r;
                }
                var Oe = ye.extend("handleParentMessage");
                function Me(e) {
                  var t = Oe;
                  if ("id" in e.data && "number" == typeof e.data.id) {
                    var n = e.data,
                      o = Se.callbacks[n.id];
                    t("Received a response from parent for message %i", n.id),
                      o &&
                        (t(
                          "Invoking the registered callback for message %i with arguments %o",
                          n.id,
                          n.args
                        ),
                        o.apply(
                          null,
                          Ce(Ce([], n.args, !0), [n.isPartialResponse], !1)
                        ),
                        (function (e) {
                          return !0 === e.data.isPartialResponse;
                        })(e) ||
                          (t(
                            "Removing registered callback for message %i",
                            n.id
                          ),
                          delete Se.callbacks[n.id]));
                    var r = Se.promiseCallbacks[n.id];
                    r &&
                      (t(
                        "Invoking the registered promise callback for message %i with arguments %o",
                        n.id,
                        n.args
                      ),
                      r(n.args),
                      t(
                        "Removing registered promise callback for message %i",
                        n.id
                      ),
                      delete Se.promiseCallbacks[n.id]);
                  } else
                    "func" in e.data && "string" == typeof e.data.func
                      ? (t(
                          "Received an action message %s from parent",
                          (n = e.data).func
                        ),
                        fe(n.func, n.args))
                      : t("Received an unknown message: %O", e);
                }
                function xe(e) {
                  return e === be.parentWindow
                    ? Se.parentMessageQueue
                    : e === be.childWindow
                    ? Se.childMessageQueue
                    : [];
                }
                function De(e) {
                  return e === be.parentWindow
                    ? be.parentOrigin
                    : e === be.childWindow
                    ? be.childOrigin
                    : null;
                }
                var Le,
                  Ne,
                  _e,
                  Ue,
                  He,
                  We,
                  Ve = ye.extend("flushMessageQueue");
                function ze(e) {
                  for (
                    var t = De(e),
                      n = xe(e),
                      o = e == be.parentWindow ? "parent" : "child";
                    e && t && n.length > 0;

                  ) {
                    var r = n.shift();
                    Ve(
                      "Flushing message %i from " +
                        o +
                        " message queue via postMessage.",
                      r.id
                    ),
                      e.postMessage(r, t);
                  }
                }
                function Be(e, t) {
                  var n = be.currentWindow.setInterval(function () {
                    0 === xe(e).length && (clearInterval(n), t());
                  }, 100);
                }
                function je(e, t, n) {
                  var o = be.childWindow,
                    r = (function (e, t, n) {
                      return { id: e, args: t || [], isPartialResponse: n };
                    })(e, t, n),
                    i = De(o);
                  o && i && o.postMessage(r, i);
                }
                function Ge(e, t) {
                  var n = be.childWindow,
                    o = (function (e, t) {
                      return { func: e, args: t || [] };
                    })(e, t),
                    r = De(n);
                  n && r ? n.postMessage(o, r) : xe(n).push(o);
                }
                function qe(e, t) {
                  ie(W), ke("uploadCustomApp", [e], t || M());
                }
                function Ze(e, t, n) {
                  ie(W), ke(e, t, n);
                }
                function Ke(e, t) {
                  if ((ie(W), !be.childWindow))
                    throw new Error(
                      "The child window has not yet been initialized or is not present"
                    );
                  Ge(e, t);
                }
                function Je(e, t) {
                  var n = this;
                  ie(W),
                    pe(e, function () {
                      for (var e = [], o = 0; o < arguments.length; o++)
                        e[o] = arguments[o];
                      return t.apply(n, e);
                    });
                }
                function $e(e, t) {
                  ie(W), pe("userSettingsChange", t, !0, [e]);
                }
                function Qe(e) {
                  ie(W, b.content, b.task),
                    ke("openFilePreview", [
                      e.entityId,
                      e.title,
                      e.description,
                      e.type,
                      e.objectUrl,
                      e.downloadUrl,
                      e.webPreviewUrl,
                      e.webEditUrl,
                      e.baseUrl,
                      e.editFile,
                      e.subEntityId,
                      e.viewerAction,
                      e.fileOpenPreference,
                      e.conversationId,
                    ]);
                }
                function Xe(e, t, n) {
                  if (0 === e.length)
                    throw new Error(
                      "Must have at least one user when creating a chat deep link"
                    );
                  var o =
                      "".concat("users", "=") +
                      e
                        .map(function (e) {
                          return encodeURIComponent(e);
                        })
                        .join(","),
                    r =
                      void 0 === t
                        ? ""
                        : "&"
                            .concat("topicName", "=")
                            .concat(encodeURIComponent(t)),
                    i =
                      void 0 === n
                        ? ""
                        : "&"
                            .concat("message", "=")
                            .concat(encodeURIComponent(n));
                  return ""
                    .concat(c, "://")
                    .concat(u)
                    .concat("/l/chat/0/0", "?")
                    .concat(o)
                    .concat(r)
                    .concat(i);
                }
                !(function (e) {
                  function t() {
                    return !(!ie(W) || !W.supports.logs);
                  }
                  (e.registerGetLogHandler = function (e) {
                    if ((e && ie(W), e && !t())) throw k;
                    e
                      ? pe("log.request", function () {
                          ke("log.receive", [e()]);
                        })
                      : ge("log.request");
                  }),
                    (e.isSupported = t);
                })(Le || (Le = {})),
                  (function (e) {
                    (e.fileDownloadStart = "fileDownloadStart"),
                      (e.fileDownloadComplete = "fileDownloadComplete");
                  })(Ne || (Ne = {})),
                  (function (e) {
                    (e.view = "view"),
                      (e.edit = "edit"),
                      (e.editNew = "editNew");
                  })(_e || (_e = {})),
                  (function (e) {
                    (e.fileOpenPreference = "fileOpenPreference"),
                      (e.theme = "theme");
                  })(Ue || (Ue = {})),
                  (function (e) {
                    function t() {
                      return !(!ie(W) || !W.supports.conversations);
                    }
                    (e.openConversation = function (e) {
                      return new Promise(function (n) {
                        if ((ie(W, b.content), !t())) throw k;
                        var o = Ie("conversations.openConversation", {
                          title: e.title,
                          subEntityId: e.subEntityId,
                          conversationId: e.conversationId,
                          channelId: e.channelId,
                          entityId: e.entityId,
                        });
                        e.onStartConversation &&
                          pe("startConversation", function (t, n, o, r) {
                            return e.onStartConversation({
                              subEntityId: t,
                              conversationId: n,
                              channelId: o,
                              entityId: r,
                            });
                          }),
                          e.onCloseConversation &&
                            pe("closeConversation", function (t, n, o, r) {
                              return e.onCloseConversation({
                                subEntityId: t,
                                conversationId: n,
                                channelId: o,
                                entityId: r,
                              });
                            }),
                          n(o);
                      });
                    }),
                      (e.closeConversation = function () {
                        if ((ie(W, b.content), !t())) throw k;
                        ke("conversations.closeConversation"),
                          ge("startConversation"),
                          ge("closeConversation");
                      }),
                      (e.getChatMembers = function () {
                        return new Promise(function (e) {
                          if ((ie(W), !t())) throw k;
                          e(Te("getChatMembers"));
                        });
                      }),
                      (e.isSupported = t);
                  })(He || (He = {})),
                  (function (e) {
                    function t() {
                      return !(!ie(W) || !W.supports.appInstallDialog);
                    }
                    (e.openAppInstallDialog = function (e) {
                      return new Promise(function (n) {
                        if (
                          (ie(
                            W,
                            b.content,
                            b.sidePanel,
                            b.settings,
                            b.task,
                            b.stage,
                            b.meetingStage
                          ),
                          !t())
                        )
                          throw new Error("Not supported");
                        W.isLegacyTeams
                          ? n(
                              Ie(
                                "executeDeepLink",
                                (function (e) {
                                  if (!e)
                                    throw new Error(
                                      "App ID must be set when creating an app install dialog deep link"
                                    );
                                  return ""
                                    .concat(c, "://")
                                    .concat(u)
                                    .concat("/l/app/")
                                    .concat(encodeURIComponent(e));
                                })(e.appId)
                              )
                            )
                          : (ke("appInstallDialog.openAppInstallDialog", [e]),
                            n());
                      });
                    }),
                      (e.isSupported = t);
                  })(We || (We = {}));
                var Ye,
                  et,
                  tt,
                  nt,
                  ot = (function () {
                    var e = function (t, n) {
                      return (e =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (e, t) {
                            e.__proto__ = t;
                          }) ||
                        function (e, t) {
                          for (var n in t)
                            Object.prototype.hasOwnProperty.call(t, n) &&
                              (e[n] = t[n]);
                        })(t, n);
                    };
                    return function (t, n) {
                      if ("function" != typeof n && null !== n)
                        throw new TypeError(
                          "Class extends value " +
                            String(n) +
                            " is not a constructor or null"
                        );
                      function o() {
                        this.constructor = t;
                      }
                      e(t, n),
                        (t.prototype =
                          null === n
                            ? Object.create(n)
                            : ((o.prototype = n.prototype), new o()));
                    };
                  })();
                function rt(e, t) {
                  if (null == e || null == t || e.length <= 0) return null;
                  var n,
                    o = 1;
                  return (
                    e.sort(function (e, t) {
                      return e.sequence > t.sequence ? 1 : -1;
                    }),
                    e.forEach(function (e) {
                      e.sequence == o &&
                        ((n = n
                          ? new Blob([n, e.file], { type: t })
                          : new Blob([e.file], { type: t })),
                        o++);
                    }),
                    n
                  );
                }
                function it(e, t) {
                  if (null == e || null == t) return null;
                  for (
                    var n = atob(e.chunk), o = new Array(n.length), r = 0;
                    r < n.length;
                    r++
                  )
                    o[r] = n.charCodeAt(r);
                  var i = new Uint8Array(o),
                    a = new Blob([i], { type: t });
                  return { sequence: e.chunkSequence, file: a };
                }
                function at(e) {
                  !(function (e) {
                    return !(
                      !e ||
                      (e.mediaType != Ye.MediaType.VideoAndImage &&
                        !e.videoAndImageProps)
                    );
                  })(e)
                    ? (function (e) {
                        return !(
                          !e ||
                          e.mediaType != Ye.MediaType.Video ||
                          !e.videoProps ||
                          e.videoProps.isFullScreenMode
                        );
                      })(e)
                      ? se(t)
                      : (function (e) {
                          var t;
                          return !(
                            (null == e ? void 0 : e.mediaType) !=
                              Ye.MediaType.Image ||
                            !(null ===
                              (t = null == e ? void 0 : e.imageProps) ||
                            void 0 === t
                              ? void 0
                              : t.imageOutputFormats)
                          );
                        })(e) && se("2.0.4")
                    : se("2.0.2");
                }
                function st(e) {
                  return (
                    !e ||
                    !(
                      null === e.timeOutIntervalInSec ||
                      e.timeOutIntervalInSec <= 0 ||
                      e.timeOutIntervalInSec > 60
                    )
                  );
                }
                function ct() {
                  return W.hostVersionsInfo
                    ? W.hostVersionsInfo.adaptiveCardSchemaVersion
                    : void 0;
                }
                !(function (e) {
                  !(function (e) {
                    (e.Base64 = "base64"), (e.ID = "id");
                  })(e.FileFormat || (e.FileFormat = {}));
                  var n = function () {};
                  (e.File = n),
                    (e.captureImage = function (e) {
                      if (!e)
                        throw new Error(
                          "[captureImage] Callback cannot be null"
                        );
                      ie(W, b.content, b.task),
                        d.isFramelessWindow
                          ? ae("1.7.0")
                            ? ke("captureImage", e)
                            : e({ errorCode: w.OLD_PLATFORM }, void 0)
                          : e(
                              { errorCode: w.NOT_SUPPORTED_ON_PLATFORM },
                              void 0
                            );
                    });
                  var o = (function (e) {
                    function t(t) {
                      void 0 === t && (t = null);
                      var n = e.call(this) || this;
                      return (
                        t &&
                          ((n.content = t.content),
                          (n.format = t.format),
                          (n.mimeType = t.mimeType),
                          (n.name = t.name),
                          (n.preview = t.preview),
                          (n.size = t.size)),
                        n
                      );
                    }
                    return (
                      ot(t, e),
                      (t.prototype.getMedia = function (e) {
                        if (!e)
                          throw new Error(
                            "[get Media] Callback cannot be null"
                          );
                        ie(W, b.content, b.task),
                          ae(i)
                            ? (function (e, t, n) {
                                return (
                                  null != e &&
                                  null != t &&
                                  t == Ye.FileFormat.ID &&
                                  null != n
                                );
                              })(this.mimeType, this.format, this.content)
                              ? ae("2.0.0")
                                ? this.getMediaViaCallback(e)
                                : this.getMediaViaHandler(e)
                              : e({ errorCode: w.INVALID_ARGUMENTS }, null)
                            : e({ errorCode: w.OLD_PLATFORM }, null);
                      }),
                      (t.prototype.getMediaViaCallback = function (e) {
                        var t = {
                          mediaMimeType: this.mimeType,
                          assembleAttachment: [],
                        };
                        ke("getMedia", [this.content], function (n) {
                          if (e)
                            if (n && n.error) e(n.error, null);
                            else if (n && n.mediaChunk)
                              if (n.mediaChunk.chunkSequence <= 0) {
                                var o = rt(
                                  t.assembleAttachment,
                                  t.mediaMimeType
                                );
                                e(n.error, o);
                              } else {
                                var r = it(n.mediaChunk, t.mediaMimeType);
                                t.assembleAttachment.push(r);
                              }
                            else
                              e(
                                {
                                  errorCode: w.INTERNAL_ERROR,
                                  message: "data received is null",
                                },
                                null
                              );
                        });
                      }),
                      (t.prototype.getMediaViaHandler = function (e) {
                        var t = P.v4(),
                          n = {
                            mediaMimeType: this.mimeType,
                            assembleAttachment: [],
                          },
                          o = [t, this.content];
                        this.content && e && ke("getMedia", o),
                          pe("getMedia" + t, function (o) {
                            if (e) {
                              var r = JSON.parse(o);
                              if (r.error) e(r.error, null), ge("getMedia" + t);
                              else if (r.mediaChunk)
                                if (r.mediaChunk.chunkSequence <= 0) {
                                  var i = rt(
                                    n.assembleAttachment,
                                    n.mediaMimeType
                                  );
                                  e(r.error, i), ge("getMedia" + t);
                                } else {
                                  var a = it(r.mediaChunk, n.mediaMimeType);
                                  n.assembleAttachment.push(a);
                                }
                              else
                                e(
                                  {
                                    errorCode: w.INTERNAL_ERROR,
                                    message: "data received is null",
                                  },
                                  null
                                ),
                                  ge("getMedia" + t);
                            }
                          });
                      }),
                      t
                    );
                  })(n);
                  e.Media = o;
                  var r,
                    a,
                    s = (function (e) {
                      function t() {
                        return (null !== e && e.apply(this, arguments)) || this;
                      }
                      return (
                        ot(t, e),
                        (t.prototype.getMediaType = function () {
                          return a.Video;
                        }),
                        (t.prototype.notifyEventToApp = function (e) {
                          if (this.controllerCallback)
                            switch (e) {
                              case r.StartRecording:
                                if (
                                  this.controllerCallback.onRecordingStarted
                                ) {
                                  this.controllerCallback.onRecordingStarted();
                                  break;
                                }
                            }
                        }),
                        t
                      );
                    })(
                      (function () {
                        function e(e) {
                          this.controllerCallback = e;
                        }
                        return (
                          (e.prototype.notifyEventToHost = function (e, n) {
                            ie(W, b.content, b.task);
                            try {
                              se(t);
                            } catch (e) {
                              return void (n && n(e));
                            }
                            ke(
                              "media.controller",
                              [
                                {
                                  mediaType: this.getMediaType(),
                                  mediaControllerEvent: e,
                                },
                              ],
                              function (e) {
                                n && n(e);
                              }
                            );
                          }),
                          (e.prototype.stop = function (e) {
                            this.notifyEventToHost(r.StopRecording, e);
                          }),
                          e
                        );
                      })()
                    );
                  (e.VideoController = s),
                    (function (e) {
                      (e[(e.StartRecording = 1)] = "StartRecording"),
                        (e[(e.StopRecording = 2)] = "StopRecording");
                    })(
                      (r =
                        e.MediaControllerEvent || (e.MediaControllerEvent = {}))
                    ),
                    (function (e) {
                      (e[(e.Photo = 1)] = "Photo"),
                        (e[(e.Document = 2)] = "Document"),
                        (e[(e.Whiteboard = 3)] = "Whiteboard"),
                        (e[(e.BusinessCard = 4)] = "BusinessCard");
                    })(e.CameraStartMode || (e.CameraStartMode = {})),
                    (function (e) {
                      (e[(e.Camera = 1)] = "Camera"),
                        (e[(e.Gallery = 2)] = "Gallery");
                    })(e.Source || (e.Source = {})),
                    (function (e) {
                      (e[(e.Image = 1)] = "Image"),
                        (e[(e.Video = 2)] = "Video"),
                        (e[(e.VideoAndImage = 3)] = "VideoAndImage"),
                        (e[(e.Audio = 4)] = "Audio");
                    })((a = e.MediaType || (e.MediaType = {}))),
                    (function (e) {
                      (e[(e.ID = 1)] = "ID"), (e[(e.URL = 2)] = "URL");
                    })(e.ImageUriType || (e.ImageUriType = {})),
                    (function (e) {
                      (e[(e.IMAGE = 1)] = "IMAGE"), (e[(e.PDF = 2)] = "PDF");
                    })(e.ImageOutputFormats || (e.ImageOutputFormats = {})),
                    (e.selectMedia = function (e, t) {
                      if (!t)
                        throw new Error(
                          "[select Media] Callback cannot be null"
                        );
                      if ((ie(W, b.content, b.task), ae(i))) {
                        try {
                          at(e);
                        } catch (e) {
                          return void t(e, null);
                        }
                        if (
                          (function (e) {
                            return !(null == e || e.maxMediaCount > 10);
                          })(e)
                        )
                          ke("selectMedia", [e], function (n, r, i) {
                            if (i)
                              (function (e) {
                                return !(
                                  e.mediaType != Ye.MediaType.Video ||
                                  !e.videoProps ||
                                  !e.videoProps.videoController
                                );
                              })(e) &&
                                e.videoProps.videoController.notifyEventToApp(
                                  i
                                );
                            else if (r) {
                              for (
                                var a = [], s = 0, c = r;
                                s < c.length;
                                s++
                              ) {
                                var u = c[s];
                                a.push(new o(u));
                              }
                              t(n, a);
                            } else t(n, null);
                          });
                        else {
                          var n = { errorCode: w.INVALID_ARGUMENTS };
                          t(n, null);
                        }
                      } else {
                        var r = { errorCode: w.OLD_PLATFORM };
                        t(r, null);
                      }
                    }),
                    (e.viewImages = function (e, t) {
                      if (!t)
                        throw new Error(
                          "[view images] Callback cannot be null"
                        );
                      ie(W, b.content, b.task),
                        ae(i)
                          ? (function (e) {
                              return !(
                                null == e ||
                                e.length <= 0 ||
                                e.length > 10
                              );
                            })(e)
                            ? ke("viewImages", [e], t)
                            : t({ errorCode: w.INVALID_ARGUMENTS })
                          : t({ errorCode: w.OLD_PLATFORM });
                    }),
                    (e.scanBarCode = function (e, t) {
                      if (!e)
                        throw new Error(
                          "[media.scanBarCode] Callback cannot be null"
                        );
                      ie(W, b.content, b.task),
                        d.hostClientType !== C.desktop &&
                        d.hostClientType !== C.web &&
                        d.hostClientType !== C.rigel &&
                        d.hostClientType !== C.teamsRoomsWindows &&
                        d.hostClientType !== C.teamsRoomsAndroid &&
                        d.hostClientType !== C.teamsPhones &&
                        d.hostClientType !== C.teamsDisplays
                          ? ae("1.9.0")
                            ? st(t)
                              ? ke("media.scanBarCode", [t], e)
                              : e({ errorCode: w.INVALID_ARGUMENTS }, null)
                            : e({ errorCode: w.OLD_PLATFORM }, null)
                          : e({ errorCode: w.NOT_SUPPORTED_ON_PLATFORM }, null);
                    });
                })(Ye || (Ye = {})),
                  (function (e) {
                    function t() {
                      return !!(
                        ie(W) &&
                        W.supports.barCode &&
                        W.supports.permissions
                      );
                    }
                    (e.scanBarCode = function (e) {
                      return new Promise(function (n) {
                        if ((ie(W, b.content, b.task), !t())) throw k;
                        if (!st(e)) throw { errorCode: w.INVALID_ARGUMENTS };
                        n(Ee("media.scanBarCode", e));
                      });
                    }),
                      (e.hasPermission = function () {
                        if ((ie(W, b.content, b.task), !t())) throw k;
                        var e = v.Media;
                        return new Promise(function (t) {
                          t(Ee("permissions.has", e));
                        });
                      }),
                      (e.requestPermission = function () {
                        if ((ie(W, b.content, b.task), !t())) throw k;
                        var e = v.Media;
                        return new Promise(function (t) {
                          t(Ee("permissions.request", e));
                        });
                      }),
                      (e.isSupported = t);
                  })(et || (et = {})),
                  (function (e) {
                    function t(e) {
                      return new Promise(function (t) {
                        if ((ie(W, b.content, b.task), !n())) throw k;
                        W.isLegacyTeams
                          ? t(
                              Ie(
                                "executeDeepLink",
                                Xe([e.user], void 0, e.message)
                              )
                            )
                          : t(
                              Ie("chat.openChat", {
                                members: e.user,
                                message: e.message,
                              })
                            );
                      });
                    }
                    function n() {
                      return !(!ie(W) || !W.supports.chat);
                    }
                    (e.openChat = t),
                      (e.openGroupChat = function (e) {
                        return new Promise(function (o) {
                          if (e.users.length < 1)
                            throw Error(
                              "OpenGroupChat Failed: No users specified"
                            );
                          if (1 === e.users.length)
                            t({ user: e.users[0], message: e.message });
                          else {
                            if ((ie(W, b.content, b.task), !n())) throw k;
                            W.isLegacyTeams
                              ? o(
                                  Ie(
                                    "executeDeepLink",
                                    Xe(e.users, e.topic, e.message)
                                  )
                                )
                              : o(
                                  Ie("chat.openChat", {
                                    members: e.users,
                                    message: e.message,
                                    topic: e.topic,
                                  })
                                );
                          }
                        });
                      }),
                      (e.isSupported = n);
                  })(tt || (tt = {})),
                  (function (e) {
                    function t() {
                      return !!(
                        ie(W) &&
                        W.supports.geoLocation &&
                        W.supports.permissions
                      );
                    }
                    (e.getCurrentLocation = function () {
                      if ((ie(W, b.content, b.task), !t())) throw k;
                      return Ee("location.getLocation", {
                        allowChooseLocation: !1,
                        showMap: !1,
                      });
                    }),
                      (e.hasPermission = function () {
                        if ((ie(W, b.content, b.task), !t())) throw k;
                        var e = v.GeoLocation;
                        return new Promise(function (t) {
                          t(Ee("permissions.has", e));
                        });
                      }),
                      (e.requestPermission = function () {
                        if ((ie(W, b.content, b.task), !t())) throw k;
                        var e = v.GeoLocation;
                        return new Promise(function (t) {
                          t(Ee("permissions.request", e));
                        });
                      }),
                      (e.isSupported = t),
                      (function (e) {
                        function t() {
                          return !!(
                            ie(W) &&
                            W.supports.geoLocation &&
                            W.supports.geoLocation.map &&
                            W.supports.permissions
                          );
                        }
                        (e.chooseLocation = function () {
                          if ((ie(W, b.content, b.task), !t())) throw k;
                          return Ee("location.getLocation", {
                            allowChooseLocation: !0,
                            showMap: !0,
                          });
                        }),
                          (e.showLocation = function (e) {
                            if ((ie(W, b.content, b.task), !t())) throw k;
                            if (!e) throw { errorCode: w.INVALID_ARGUMENTS };
                            return Ee("location.showLocation", e);
                          }),
                          (e.isSupported = t);
                      })(e.map || (e.map = {}));
                  })(nt || (nt = {}));
                var ut,
                  lt,
                  dt,
                  ft,
                  pt,
                  gt,
                  mt,
                  ht,
                  wt,
                  vt,
                  Ct,
                  yt,
                  bt,
                  St,
                  Tt,
                  It,
                  Pt,
                  Et,
                  Ft = (function () {
                    function e() {}
                    return (
                      (e.prototype.postMessage = function (e, t) {
                        ie(W), ke("messageForChild", [e], t || M());
                      }),
                      (e.prototype.addEventListener = function (e, t) {
                        ie(W), "message" === e && pe("messageForParent", t);
                      }),
                      e
                    );
                  })(),
                  kt = (function () {
                    function e() {}
                    return (
                      Object.defineProperty(e, "Instance", {
                        get: function () {
                          return (
                            this._instance || (this._instance = new this())
                          );
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (e.prototype.postMessage = function (e, t) {
                        ie(W, b.task), ke("messageForParent", [e], t || M());
                      }),
                      (e.prototype.addEventListener = function (e, t) {
                        ie(W, b.task),
                          "message" === e && pe("messageForChild", t);
                      }),
                      e
                    );
                  })();
                function At(e, t) {
                  X.initialize(t).then(function () {
                    e && e();
                  });
                }
                function Rt() {
                  Q.enablePrintCapability();
                }
                function Ot() {
                  Q.print();
                }
                function Mt(e) {
                  re(),
                    ke("getContext", function (t) {
                      t.frameContext || (t.frameContext = d.frameContext), e(t);
                    });
                }
                function xt(e) {
                  X.registerOnThemeChangeHandler(e);
                }
                function Dt(e) {
                  me("fullScreenChange", e, []);
                }
                function Lt(e) {
                  me("appButtonClick", e, [b.content]);
                }
                function Nt(e) {
                  me("appButtonHoverEnter", e, [b.content]);
                }
                function _t(e) {
                  me("appButtonHoverLeave", e, [b.content]);
                }
                function Ut(e) {
                  Y.backStack.registerBackButtonHandlerHelper(e);
                }
                function Ht(e) {
                  Q.registerOnLoadHandlerHelper(e);
                }
                function Wt(e) {
                  Q.registerBeforeUnloadHandlerHelper(e);
                }
                function Vt(e) {
                  me("focusEnter", e, []);
                }
                function zt(e) {
                  me("changeSettings", e, [b.content]);
                }
                function Bt(e, t) {
                  ie(W),
                    Y.tabs.getTabInstances(t).then(function (t) {
                      e(t);
                    });
                }
                function jt(e, t) {
                  ie(W),
                    Y.tabs.getMruTabInstances(t).then(function (t) {
                      e(t);
                    });
                }
                function Gt(e) {
                  Y.shareDeepLink({
                    subPageId: e.subEntityId,
                    subPageLabel: e.subEntityLabel,
                    subPageWebUrl: e.subEntityWebUrl,
                  });
                }
                function qt(e, t) {
                  ie(
                    W,
                    b.content,
                    b.sidePanel,
                    b.settings,
                    b.task,
                    b.stage,
                    b.meetingStage
                  ),
                    (t = t || M()),
                    X.openLink(e)
                      .then(function () {
                        t(!0);
                      })
                      .catch(function (e) {
                        t(!1, e.message);
                      });
                }
                function Zt(e) {
                  Y.setCurrentFrame(e);
                }
                function Kt(e, t, n) {
                  Y.initializeWithFrameContext(e, t, n);
                }
                function Jt(e) {
                  Y.returnFocus(e);
                }
                function $t(e, t) {
                  ie(W),
                    (t = t || M()),
                    Y.tabs
                      .navigateToTab(e)
                      .then(function () {
                        t(!0);
                      })
                      .catch(function (e) {
                        t(!1, e.message);
                      });
                }
                function Qt(e, t) {
                  ie(
                    W,
                    b.content,
                    b.sidePanel,
                    b.settings,
                    b.remove,
                    b.task,
                    b.stage,
                    b.meetingStage
                  ),
                    (t = t || M()),
                    Y.navigateCrossDomain(e)
                      .then(function () {
                        t(!0);
                      })
                      .catch(function (e) {
                        t(!1, e.message);
                      });
                }
                function Xt(e) {
                  ie(W),
                    (e = e || M()),
                    Y.backStack
                      .navigateBack()
                      .then(function () {
                        e(!0);
                      })
                      .catch(function (t) {
                        e(!1, t.message);
                      });
                }
                !(function (e) {
                  function t() {
                    return !(!ie(W) || !W.supports.location);
                  }
                  (e.getLocation = function (e, o) {
                    if (!o)
                      throw new Error(
                        "[location.getLocation] Callback cannot be null"
                      );
                    if ((ie(W, b.content, b.task), !ae(n)))
                      throw { errorCode: w.OLD_PLATFORM };
                    if (!e) throw { errorCode: w.INVALID_ARGUMENTS };
                    if (!t()) throw k;
                    ke("location.getLocation", [e], o);
                  }),
                    (e.showLocation = function (e, o) {
                      if (!o)
                        throw new Error(
                          "[location.showLocation] Callback cannot be null"
                        );
                      if ((ie(W, b.content, b.task), !ae(n)))
                        throw { errorCode: w.OLD_PLATFORM };
                      if (!e) throw { errorCode: w.INVALID_ARGUMENTS };
                      if (!t()) throw k;
                      ke("location.showLocation", [e], o);
                    }),
                    (e.isSupported = t);
                })(ut || (ut = {})),
                  (function (e) {
                    var t;
                    function n(e, n) {
                      var o = this;
                      ke(
                        "meeting.requestAppAudioHandling",
                        [e.isAppHandlingAudio],
                        function (i, a) {
                          if (i && null != a)
                            throw new Error(
                              "[requestAppAudioHandling] Callback response - both parameters cannot be set"
                            );
                          if (i)
                            throw new Error(
                              "[requestAppAudioHandling] Callback response - SDK error "
                                .concat(i.errorCode, " ")
                                .concat(i.message)
                            );
                          if ("boolean" != typeof a)
                            throw new Error(
                              "[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean"
                            );
                          pe("meeting.micStateChanged", function (n) {
                            return (function (e, t, n, o) {
                              function r(e) {
                                return e instanceof n
                                  ? e
                                  : new n(function (t) {
                                      t(e);
                                    });
                              }
                              return new (n || (n = Promise))(function (n, i) {
                                function a(e) {
                                  try {
                                    c(o.next(e));
                                  } catch (e) {
                                    i(e);
                                  }
                                }
                                function s(e) {
                                  try {
                                    c(o.throw(e));
                                  } catch (e) {
                                    i(e);
                                  }
                                }
                                function c(e) {
                                  e.done ? n(e.value) : r(e.value).then(a, s);
                                }
                                c((o = o.apply(e, t || [])).next());
                              });
                            })(o, void 0, void 0, function () {
                              var o, i;
                              return (function (e, t) {
                                var n,
                                  o,
                                  r,
                                  i,
                                  a = {
                                    label: 0,
                                    sent: function () {
                                      if (1 & r[0]) throw r[1];
                                      return r[1];
                                    },
                                    trys: [],
                                    ops: [],
                                  };
                                return (
                                  (i = {
                                    next: s(0),
                                    throw: s(1),
                                    return: s(2),
                                  }),
                                  "function" == typeof Symbol &&
                                    (i[Symbol.iterator] = function () {
                                      return this;
                                    }),
                                  i
                                );
                                function s(e) {
                                  return function (t) {
                                    return c([e, t]);
                                  };
                                }
                                function c(i) {
                                  if (n)
                                    throw new TypeError(
                                      "Generator is already executing."
                                    );
                                  for (; a; )
                                    try {
                                      if (
                                        ((n = 1),
                                        o &&
                                          (r =
                                            2 & i[0]
                                              ? o.return
                                              : i[0]
                                              ? o.throw ||
                                                ((r = o.return) && r.call(o), 0)
                                              : o.next) &&
                                          !(r = r.call(o, i[1])).done)
                                      )
                                        return r;
                                      switch (
                                        ((o = 0),
                                        r && (i = [2 & i[0], r.value]),
                                        i[0])
                                      ) {
                                        case 0:
                                        case 1:
                                          r = i;
                                          break;
                                        case 4:
                                          return (
                                            a.label++, { value: i[1], done: !1 }
                                          );
                                        case 5:
                                          a.label++, (o = i[1]), (i = [0]);
                                          continue;
                                        case 7:
                                          (i = a.ops.pop()), a.trys.pop();
                                          continue;
                                        default:
                                          if (
                                            !(
                                              (r =
                                                (r = a.trys).length > 0 &&
                                                r[r.length - 1]) ||
                                              (6 !== i[0] && 2 !== i[0])
                                            )
                                          ) {
                                            a = 0;
                                            continue;
                                          }
                                          if (
                                            3 === i[0] &&
                                            (!r || (i[1] > r[0] && i[1] < r[3]))
                                          ) {
                                            a.label = i[1];
                                            break;
                                          }
                                          if (6 === i[0] && a.label < r[1]) {
                                            (a.label = r[1]), (r = i);
                                            break;
                                          }
                                          if (r && a.label < r[2]) {
                                            (a.label = r[2]), a.ops.push(i);
                                            break;
                                          }
                                          r[2] && a.ops.pop(), a.trys.pop();
                                          continue;
                                      }
                                      i = t.call(e, a);
                                    } catch (e) {
                                      (i = [6, e]), (o = 0);
                                    } finally {
                                      n = r = 0;
                                    }
                                  if (5 & i[0]) throw i[1];
                                  return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0,
                                  };
                                }
                              })(this, function (a) {
                                switch (a.label) {
                                  case 0:
                                    return (
                                      a.trys.push([0, 2, , 3]),
                                      [4, e.micMuteStateChangedCallback(n)]
                                    );
                                  case 1:
                                    return (
                                      (o = a.sent()),
                                      (i = o.isMicMuted === n.isMicMuted),
                                      r(
                                        o,
                                        i
                                          ? t.HostInitiated
                                          : t.AppDeclinedToChange
                                      ),
                                      [3, 3]
                                    );
                                  case 2:
                                    return (
                                      a.sent(),
                                      r(n, t.AppFailedToChange),
                                      [3, 3]
                                    );
                                  case 3:
                                    return [2];
                                }
                              });
                            });
                          }),
                            n(a);
                        }
                      );
                    }
                    function o(e, t) {
                      ke(
                        "meeting.requestAppAudioHandling",
                        [e.isAppHandlingAudio],
                        function (e, n) {
                          if (e && null != n)
                            throw new Error(
                              "[requestAppAudioHandling] Callback response - both parameters cannot be set"
                            );
                          if (e)
                            throw new Error(
                              "[requestAppAudioHandling] Callback response - SDK error "
                                .concat(e.errorCode, " ")
                                .concat(e.message)
                            );
                          if ("boolean" != typeof n)
                            throw new Error(
                              "[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean"
                            );
                          (function (e) {
                            return null != le.handlers[e];
                          })("meeting.micStateChanged") &&
                            ge("meeting.micStateChanged"),
                            t(n);
                        }
                      );
                    }
                    function r(e, t) {
                      ie(W, b.sidePanel, b.meetingStage),
                        ke("meeting.updateMicState", [e, t]);
                    }
                    !(function (e) {
                      (e[(e.HostInitiated = 0)] = "HostInitiated"),
                        (e[(e.AppInitiated = 1)] = "AppInitiated"),
                        (e[(e.AppDeclinedToChange = 2)] =
                          "AppDeclinedToChange"),
                        (e[(e.AppFailedToChange = 3)] = "AppFailedToChange");
                    })(t || (t = {})),
                      (function (e) {
                        (e.like = "like"),
                          (e.heart = "heart"),
                          (e.laugh = "laugh"),
                          (e.surprised = "surprised"),
                          (e.applause = "applause");
                      })(e.MeetingReactionType || (e.MeetingReactionType = {})),
                      (function (e) {
                        (e.Unknown = "Unknown"),
                          (e.Adhoc = "Adhoc"),
                          (e.Scheduled = "Scheduled"),
                          (e.Recurring = "Recurring"),
                          (e.Broadcast = "Broadcast"),
                          (e.MeetNow = "MeetNow");
                      })(e.MeetingType || (e.MeetingType = {})),
                      (function (e) {
                        (e.OneOnOneCall = "oneOnOneCall"),
                          (e.GroupCall = "groupCall");
                      })(e.CallType || (e.CallType = {})),
                      (e.getIncomingClientAudioState = function (e) {
                        if (!e)
                          throw new Error(
                            "[get incoming client audio state] Callback cannot be null"
                          );
                        ie(W, b.sidePanel, b.meetingStage),
                          ke("getIncomingClientAudioState", e);
                      }),
                      (e.toggleIncomingClientAudio = function (e) {
                        if (!e)
                          throw new Error(
                            "[toggle incoming client audio] Callback cannot be null"
                          );
                        ie(W, b.sidePanel, b.meetingStage),
                          ke("toggleIncomingClientAudio", e);
                      }),
                      (e.getMeetingDetails = function (e) {
                        if (!e)
                          throw new Error(
                            "[get meeting details] Callback cannot be null"
                          );
                        ie(
                          W,
                          b.sidePanel,
                          b.meetingStage,
                          b.settings,
                          b.content
                        ),
                          ke("meeting.getMeetingDetails", e);
                      }),
                      (e.getAuthenticationTokenForAnonymousUser = function (e) {
                        if (!e)
                          throw new Error(
                            "[get Authentication Token For AnonymousUser] Callback cannot be null"
                          );
                        ie(W, b.sidePanel, b.meetingStage),
                          ke(
                            "meeting.getAuthenticationTokenForAnonymousUser",
                            e
                          );
                      }),
                      (e.getLiveStreamState = function (e) {
                        if (!e)
                          throw new Error(
                            "[get live stream state] Callback cannot be null"
                          );
                        ie(W, b.sidePanel), ke("meeting.getLiveStreamState", e);
                      }),
                      (e.requestStartLiveStreaming = function (e, t, n) {
                        if (!e)
                          throw new Error(
                            "[request start live streaming] Callback cannot be null"
                          );
                        ie(W, b.sidePanel),
                          ke("meeting.requestStartLiveStreaming", [t, n], e);
                      }),
                      (e.requestStopLiveStreaming = function (e) {
                        if (!e)
                          throw new Error(
                            "[request stop live streaming] Callback cannot be null"
                          );
                        ie(W, b.sidePanel),
                          ke("meeting.requestStopLiveStreaming", e);
                      }),
                      (e.registerLiveStreamChangedHandler = function (e) {
                        if (!e)
                          throw new Error(
                            "[register live stream changed handler] Handler cannot be null"
                          );
                        ie(W, b.sidePanel), pe("meeting.liveStreamChanged", e);
                      }),
                      (e.shareAppContentToStage = function (e, t) {
                        if (!e)
                          throw new Error(
                            "[share app content to stage] Callback cannot be null"
                          );
                        ie(W, b.sidePanel, b.meetingStage),
                          ke("meeting.shareAppContentToStage", [t], e);
                      }),
                      (e.getAppContentStageSharingCapabilities = function (e) {
                        if (!e)
                          throw new Error(
                            "[get app content stage sharing capabilities] Callback cannot be null"
                          );
                        ie(W, b.sidePanel, b.meetingStage),
                          ke(
                            "meeting.getAppContentStageSharingCapabilities",
                            e
                          );
                      }),
                      (e.stopSharingAppContentToStage = function (e) {
                        if (!e)
                          throw new Error(
                            "[stop sharing app content to stage] Callback cannot be null"
                          );
                        ie(W, b.sidePanel, b.meetingStage),
                          ke("meeting.stopSharingAppContentToStage", e);
                      }),
                      (e.getAppContentStageSharingState = function (e) {
                        if (!e)
                          throw new Error(
                            "[get app content stage sharing state] Callback cannot be null"
                          );
                        ie(W, b.sidePanel, b.meetingStage),
                          ke("meeting.getAppContentStageSharingState", e);
                      }),
                      (e.registerSpeakingStateChangeHandler = function (e) {
                        if (!e)
                          throw new Error(
                            "[registerSpeakingStateChangeHandler] Handler cannot be null"
                          );
                        ie(W, b.sidePanel, b.meetingStage),
                          pe("meeting.speakingStateChanged", e);
                      }),
                      (e.registerRaiseHandStateChangedHandler = function (e) {
                        if (!e)
                          throw new Error(
                            "[registerRaiseHandStateChangedHandler] Handler cannot be null"
                          );
                        ie(W, b.sidePanel, b.meetingStage),
                          pe("meeting.raiseHandStateChanged", e);
                      }),
                      (e.registerMeetingReactionReceivedHandler = function (e) {
                        if (!e)
                          throw new Error(
                            "[registerMeetingReactionReceivedHandler] Handler cannot be null"
                          );
                        ie(W, b.sidePanel, b.meetingStage),
                          pe("meeting.meetingReactionReceived", e);
                      }),
                      (function (e) {
                        e.setOptions = function (e) {
                          ie(W, b.sidePanel),
                            e.contentUrl && new URL(e.contentUrl),
                            ke("meeting.appShareButton.setOptions", [e]);
                        };
                      })(e.appShareButton || (e.appShareButton = {})),
                      (e.requestAppAudioHandling = function (e, t) {
                        if (!t)
                          throw new Error(
                            "[requestAppAudioHandling] Callback response cannot be null"
                          );
                        if (!e.micMuteStateChangedCallback)
                          throw new Error(
                            "[requestAppAudioHandling] Callback Mic mute state handler cannot be null"
                          );
                        ie(W, b.sidePanel, b.meetingStage),
                          e.isAppHandlingAudio ? n(e, t) : o(e, t);
                      }),
                      (e.updateMicState = function (e) {
                        r(e, t.AppInitiated);
                      });
                  })(lt || (lt = {})),
                  (function (e) {
                    function t() {
                      return !(!ie(W) || !W.supports.monetization);
                    }
                    (e.openPurchaseExperience = function (e, n) {
                      var o, r;
                      return (
                        "function" == typeof e ? ((o = e), (r = n)) : (r = e),
                        ie(W, b.content),
                        (function (e, t) {
                          for (var n = [], o = 2; o < arguments.length; o++)
                            n[o - 2] = arguments[o];
                          var r = e.apply(void 0, n);
                          return (
                            r
                              .then(function (e) {
                                t && t(null, e);
                              })
                              .catch(function (e) {
                                t && t(e, null);
                              }),
                            r
                          );
                        })(function () {
                          return new Promise(function (e) {
                            if (!t()) throw k;
                            e(Ee("monetization.openPurchaseExperience", r));
                          });
                        }, o)
                      );
                    }),
                      (e.isSupported = t);
                  })(dt || (dt = {})),
                  (function (e) {
                    function t() {
                      return !(!ie(W) || !W.supports.calendar);
                    }
                    (e.openCalendarItem = function (e) {
                      return new Promise(function (n) {
                        if ((ie(W, b.content), !t()))
                          throw new Error("Not supported");
                        if (!e.itemId || !e.itemId.trim())
                          throw new Error(
                            "Must supply an itemId to openCalendarItem"
                          );
                        n(Ie("calendar.openCalendarItem", e));
                      });
                    }),
                      (e.composeMeeting = function (e) {
                        return new Promise(function (n) {
                          if ((ie(W, b.content), !t()))
                            throw new Error("Not supported");
                          W.isLegacyTeams
                            ? n(
                                Ie(
                                  "executeDeepLink",
                                  (function (e, t, n, o, r) {
                                    var i =
                                        void 0 === e
                                          ? ""
                                          : "".concat("attendees", "=") +
                                            e
                                              .map(function (e) {
                                                return encodeURIComponent(e);
                                              })
                                              .join(","),
                                      a =
                                        void 0 === t
                                          ? ""
                                          : "&"
                                              .concat("startTime", "=")
                                              .concat(encodeURIComponent(t)),
                                      s =
                                        void 0 === n
                                          ? ""
                                          : "&"
                                              .concat("endTime", "=")
                                              .concat(encodeURIComponent(n)),
                                      l =
                                        void 0 === o
                                          ? ""
                                          : "&"
                                              .concat("subject", "=")
                                              .concat(encodeURIComponent(o)),
                                      d =
                                        void 0 === r
                                          ? ""
                                          : "&"
                                              .concat("content", "=")
                                              .concat(encodeURIComponent(r));
                                    return ""
                                      .concat(c, "://")
                                      .concat(u)
                                      .concat("/l/meeting/new", "?")
                                      .concat(i)
                                      .concat(a)
                                      .concat(s)
                                      .concat(l)
                                      .concat(d);
                                  })(
                                    e.attendees,
                                    e.startTime,
                                    e.endTime,
                                    e.subject,
                                    e.content
                                  )
                                )
                              )
                            : n(Ie("calendar.composeMeeting", e));
                        });
                      }),
                      (e.isSupported = t);
                  })(ft || (ft = {})),
                  (function (e) {
                    function t() {
                      return !(!ie(W) || !W.supports.mail);
                    }
                    (e.openMailItem = function (e) {
                      return new Promise(function (n) {
                        if ((ie(W, b.content), !t()))
                          throw new Error("Not supported");
                        if (!e.itemId || !e.itemId.trim())
                          throw new Error(
                            "Must supply an itemId to openMailItem"
                          );
                        n(Ie("mail.openMailItem", e));
                      });
                    }),
                      (e.composeMail = function (e) {
                        return new Promise(function (n) {
                          if ((ie(W, b.content), !t()))
                            throw new Error("Not supported");
                          n(Ie("mail.composeMail", e));
                        });
                      }),
                      (e.isSupported = t),
                      (function (e) {
                        (e.New = "new"),
                          (e.Reply = "reply"),
                          (e.ReplyAll = "replyAll"),
                          (e.Forward = "forward");
                      })(e.ComposeMailType || (e.ComposeMailType = {}));
                  })(pt || (pt = {})),
                  (function (e) {
                    function t(e) {
                      return new Promise(function (t) {
                        if (!ae("2.0.0")) throw { errorCode: w.OLD_PLATFORM };
                        if (
                          !(function (e) {
                            if (e) {
                              if (e.title && "string" != typeof e.title)
                                return !1;
                              if (
                                e.setSelected &&
                                "object" != typeof e.setSelected
                              )
                                return !1;
                              if (
                                e.openOrgWideSearchInChatOrChannel &&
                                "boolean" !=
                                  typeof e.openOrgWideSearchInChatOrChannel
                              )
                                return !1;
                              if (
                                e.singleSelect &&
                                "boolean" != typeof e.singleSelect
                              )
                                return !1;
                            }
                            return !0;
                          })(e)
                        )
                          throw { errorCode: w.INVALID_ARGUMENTS };
                        if (!n()) throw k;
                        t(Ee("people.selectPeople", e));
                      });
                    }
                    function n() {
                      return !(!ie(W) || !W.supports.people);
                    }
                    (e.selectPeople = function (e, n) {
                      var o, r, i;
                      return (
                        ie(W, b.content, b.task, b.settings),
                        "function" == typeof e
                          ? ((r = (o = [e, n])[0]), (i = o[1]))
                          : (i = e),
                        (function (e, t) {
                          for (var n = [], o = 2; o < arguments.length; o++)
                            n[o - 2] = arguments[o];
                          var r = e.apply(void 0, n);
                          return (
                            r
                              .then(function (e) {
                                t && t(void 0, e);
                              })
                              .catch(function (e) {
                                t && t(e);
                              }),
                            r
                          );
                        })(t, r, i)
                      );
                    }),
                      (e.isSupported = n);
                  })(gt || (gt = {})),
                  (function (e) {
                    (e.showProfile = function (e) {
                      return (
                        ie(W, b.content),
                        new Promise(function (t) {
                          var n = (function (e) {
                              return e
                                ? e.modality && "string" != typeof e.modality
                                  ? [!1, "modality must be a string"]
                                  : e.targetElementBoundingRect &&
                                    "object" ==
                                      typeof e.targetElementBoundingRect
                                  ? e.triggerType &&
                                    "string" == typeof e.triggerType
                                    ? (function (e) {
                                        return e
                                          ? e.displayName &&
                                            "string" != typeof e.displayName
                                            ? [
                                                !1,
                                                "displayName must be a string",
                                              ]
                                            : e.identifiers &&
                                              "object" == typeof e.identifiers
                                            ? e.identifiers.AadObjectId ||
                                              e.identifiers.Smtp ||
                                              e.identifiers.Upn
                                              ? e.identifiers.AadObjectId &&
                                                "string" !=
                                                  typeof e.identifiers
                                                    .AadObjectId
                                                ? [
                                                    !1,
                                                    "AadObjectId identifier must be a string",
                                                  ]
                                                : e.identifiers.Smtp &&
                                                  "string" !=
                                                    typeof e.identifiers.Smtp
                                                ? [
                                                    !1,
                                                    "Smtp identifier must be a string",
                                                  ]
                                                : e.identifiers.Upn &&
                                                  "string" !=
                                                    typeof e.identifiers.Upn
                                                ? [
                                                    !1,
                                                    "Upn identifier must be a string",
                                                  ]
                                                : [!0, void 0]
                                              : [
                                                  !1,
                                                  "at least one valid identifier must be provided",
                                                ]
                                            : [
                                                !1,
                                                "persona identifiers object must be provided",
                                              ]
                                          : [
                                              !1,
                                              "persona object must be provided",
                                            ];
                                      })(e.persona)
                                    : [!1, "triggerType must be a valid string"]
                                  : [
                                      !1,
                                      "targetElementBoundingRect must be a DOMRect",
                                    ]
                                : [!1, "A request object is required"];
                            })(e),
                            o = n[0],
                            r = n[1];
                          if (!o)
                            throw {
                              errorCode: w.INVALID_ARGUMENTS,
                              message: r,
                            };
                          t(
                            Ee("profile.showProfile", {
                              modality: e.modality,
                              persona: e.persona,
                              triggerType: e.triggerType,
                              targetRectangle: {
                                x: e.targetElementBoundingRect.x,
                                y: e.targetElementBoundingRect.y,
                                width: e.targetElementBoundingRect.width,
                                height: e.targetElementBoundingRect.height,
                              },
                            })
                          );
                        })
                      );
                    }),
                      (e.isSupported = function () {
                        return !(!ie(W) || !W.supports.profile);
                      });
                  })(mt || (mt = {})),
                  (function (e) {
                    var t;
                    function n(e) {
                      ke("video.notifyError", [e]);
                    }
                    function o() {
                      return !(!ie(W) || !W.supports.video);
                    }
                    !(function (e) {
                      e[(e.NV12 = 0)] = "NV12";
                    })(e.VideoFrameFormat || (e.VideoFrameFormat = {})),
                      (function (e) {
                        (e[(e.EffectChanged = 0)] = "EffectChanged"),
                          (e[(e.EffectDisabled = 1)] = "EffectDisabled");
                      })(e.EffectChangeType || (e.EffectChangeType = {})),
                      (function (e) {
                        (e.InvalidEffectId = "InvalidEffectId"),
                          (e.InitializationFailure = "InitializationFailure");
                      })(
                        (t =
                          e.EffectFailureReason || (e.EffectFailureReason = {}))
                      ),
                      (e.registerForVideoFrame = function (e, t) {
                        if ((ie(W, b.sidePanel), !o())) throw k;
                        pe(
                          "video.newVideoFrame",
                          function (t) {
                            if (t) {
                              var o = t.timestamp;
                              e(
                                t,
                                function () {
                                  !(function (e) {
                                    ke("video.videoFrameProcessed", [e]);
                                  })(o);
                                },
                                n
                              );
                            }
                          },
                          !1
                        ),
                          ke("video.registerForVideoFrame", [t]);
                      }),
                      (e.notifySelectedVideoEffectChanged = function (e, t) {
                        if ((ie(W, b.sidePanel), !o())) throw k;
                        ke("video.videoEffectChanged", [e, t]);
                      }),
                      (e.registerForVideoEffect = function (e) {
                        if ((ie(W, b.sidePanel), !o())) throw k;
                        pe(
                          "video.effectParameterChange",
                          function (n) {
                            e(n)
                              .then(function () {
                                ke("video.videoEffectReadiness", [!0, n]);
                              })
                              .catch(function (e) {
                                var o = e in t ? e : t.InitializationFailure;
                                ke("video.videoEffectReadiness", [!1, n, o]);
                              });
                          },
                          !1
                        ),
                          ke("video.registerForVideoEffect");
                      }),
                      (e.isSupported = o);
                  })(ht || (ht = {})),
                  (function (e) {
                    var t = "search.queryChange",
                      n = "search.queryClose",
                      o = "search.queryExecute";
                    function r() {
                      return !(!ie(W) || !W.supports.search);
                    }
                    (e.registerHandlers = function (e, i, a) {
                      if ((ie(W, b.content), !r())) throw k;
                      pe(n, e), pe(o, i), a && pe(t, a);
                    }),
                      (e.unregisterHandlers = function () {
                        if ((ie(W, b.content), !r())) throw k;
                        ke("search.unregister"), ge(t), ge(n), ge(o);
                      }),
                      (e.isSupported = r);
                  })(wt || (wt = {})),
                  (function (e) {
                    function t(t) {
                      return new Promise(function (o) {
                        if (!n()) throw k;
                        o(Ee(e.SharingAPIMessages.shareWebContent, t));
                      });
                    }
                    function n() {
                      return !(!ie(W) || !W.supports.sharing);
                    }
                    (e.SharingAPIMessages = {
                      shareWebContent: "sharing.shareWebContent",
                    }),
                      (e.shareWebContent = function (e, n) {
                        try {
                          (function (e) {
                            if (!(e && e.content && e.content.length))
                              throw {
                                errorCode: w.INVALID_ARGUMENTS,
                                message: "Shared content is missing",
                              };
                          })(e),
                            (function (e) {
                              if (
                                e.content.some(function (e) {
                                  return !e.type;
                                })
                              )
                                throw {
                                  errorCode: w.INVALID_ARGUMENTS,
                                  message:
                                    "Shared content type cannot be undefined",
                                };
                              if (
                                e.content.some(function (t) {
                                  return t.type !== e.content[0].type;
                                })
                              )
                                throw {
                                  errorCode: w.INVALID_ARGUMENTS,
                                  message:
                                    "Shared content must be of the same type",
                                };
                            })(e),
                            (function (e) {
                              if ("URL" !== e.content[0].type)
                                throw {
                                  errorCode: w.INVALID_ARGUMENTS,
                                  message: "Content type is unsupported",
                                };
                              if (
                                e.content.some(function (e) {
                                  return !e.url;
                                })
                              )
                                throw {
                                  errorCode: w.INVALID_ARGUMENTS,
                                  message:
                                    "URLs are required for URL content types",
                                };
                            })(e);
                        } catch (e) {
                          return D(function () {
                            return Promise.reject(e);
                          }, n);
                        }
                        return (
                          ie(
                            W,
                            b.content,
                            b.sidePanel,
                            b.task,
                            b.stage,
                            b.meetingStage
                          ),
                          D(t, n, e)
                        );
                      }),
                      (e.isSupported = n);
                  })(vt || (vt = {})),
                  (function (e) {
                    function t() {
                      return !(!ie(W) || !W.supports.stageView);
                    }
                    (e.open = function (e) {
                      return new Promise(function (n) {
                        if ((ie(W, b.content), !t())) throw k;
                        if (!e)
                          throw new Error(
                            "[stageView.open] Stage view params cannot be null"
                          );
                        n(Ee("stageView.open", e));
                      });
                    }),
                      (e.isSupported = t);
                  })(Ct || (Ct = {})),
                  (function (e) {
                    function t() {
                      return !(!ie(W) || !W.supports.webStorage);
                    }
                    (e.isWebStorageClearedOnUserLogOut = function () {
                      return ie(W), t();
                    }),
                      (e.isSupported = t);
                  })(yt || (yt = {})),
                  (function (e) {
                    var t;
                    function n() {
                      return !(!ie(W) || !W.supports.call);
                    }
                    !(function (e) {
                      (e.Unknown = "unknown"),
                        (e.Audio = "audio"),
                        (e.Video = "video"),
                        (e.VideoBasedScreenSharing = "videoBasedScreenSharing"),
                        (e.Data = "data");
                    })((t = e.CallModalities || (e.CallModalities = {}))),
                      (e.startCall = function (e) {
                        return new Promise(function (o) {
                          var r;
                          if ((ie(W, b.content, b.task), !n())) throw k;
                          if (!W.isLegacyTeams)
                            return ke("call.startCall", [e], o);
                          o(
                            Ee(
                              "executeDeepLink",
                              (function (e, t, n) {
                                if (0 === e.length)
                                  throw new Error(
                                    "Must have at least one target when creating a call deep link"
                                  );
                                var o =
                                    "".concat("users", "=") +
                                    e
                                      .map(function (e) {
                                        return encodeURIComponent(e);
                                      })
                                      .join(","),
                                  r =
                                    void 0 === t
                                      ? ""
                                      : "&"
                                          .concat("withVideo", "=")
                                          .concat(encodeURIComponent(t)),
                                  i =
                                    void 0 === n
                                      ? ""
                                      : "&"
                                          .concat("source", "=")
                                          .concat(encodeURIComponent(n));
                                return ""
                                  .concat(c, "://")
                                  .concat(u)
                                  .concat("/l/call/0/0", "?")
                                  .concat(o)
                                  .concat(r)
                                  .concat(i);
                              })(
                                e.targets,
                                null === (r = e.requestedModalities) ||
                                  void 0 === r
                                  ? void 0
                                  : r.includes(t.Video),
                                e.source
                              )
                            )
                          );
                        });
                      }),
                      (e.isSupported = n);
                  })(bt || (bt = {})),
                  (function (e) {
                    (e.Messages = X.Messages),
                      (e.FailedReason = X.FailedReason),
                      (e.ExpectedFailureReason = X.ExpectedFailureReason),
                      (e.notifyAppLoaded = function () {
                        X.notifyAppLoaded();
                      }),
                      (e.notifySuccess = function () {
                        X.notifySuccess();
                      }),
                      (e.notifyFailure = function (e) {
                        X.notifyFailure(e);
                      }),
                      (e.notifyExpectedFailure = function (e) {
                        X.notifyExpectedFailure(e);
                      });
                  })(St || (St = {})),
                  (function (e) {
                    (e.setValidityState = function (e) {
                      Y.config.setValidityState(e);
                    }),
                      (e.getSettings = function (e) {
                        ie(W, b.content, b.settings, b.remove, b.sidePanel),
                          Y.getConfig().then(function (t) {
                            e(t);
                          });
                      }),
                      (e.setSettings = function (e, t) {
                        ie(W, b.content, b.settings, b.sidePanel),
                          (t = t || M()),
                          Y.config
                            .setConfig(e)
                            .then(function () {
                              t(!0);
                            })
                            .catch(function (e) {
                              t(!1, e.message);
                            });
                      }),
                      (e.registerOnSaveHandler = function (e) {
                        Y.config.registerOnSaveHandlerHelper(e);
                      }),
                      (e.registerOnRemoveHandler = function (e) {
                        Y.config.registerOnRemoveHandlerHelper(e);
                      });
                  })(Tt || (Tt = {})),
                  (function (e) {
                    function t(e) {
                      return (
                        (e.height = e.height ? e.height : F.Small),
                        (e.width = e.width ? e.width : F.Small),
                        e
                      );
                    }
                    (e.startTask = function (e, t) {
                      var n = t
                        ? function (e) {
                            return t(e.err, e.result);
                          }
                        : void 0;
                      return (
                        (void 0 === e.card && void 0 === e.url) || e.card
                          ? (ie(W, b.content, b.sidePanel, b.meetingStage),
                            ke("tasks.startTask", [e], t))
                          : void 0 !== e.completionBotId
                          ? J.url.bot.open(
                              (function (e) {
                                return {
                                  url: e.url,
                                  size: {
                                    height: e.height ? e.height : F.Small,
                                    width: e.width ? e.width : F.Small,
                                  },
                                  title: e.title,
                                  fallbackUrl: e.fallbackUrl,
                                  completionBotId: e.completionBotId,
                                };
                              })(e),
                              n
                            )
                          : J.url.open(
                              (function (e) {
                                return {
                                  url: e.url,
                                  size: {
                                    height: e.height ? e.height : F.Small,
                                    width: e.width ? e.width : F.Small,
                                  },
                                  title: e.title,
                                  fallbackUrl: e.fallbackUrl,
                                };
                              })(e),
                              n
                            ),
                        new Ft()
                      );
                    }),
                      (e.updateTask = function (e) {
                        (e = t(e)).width, e.height;
                        var n = (function (e, t) {
                          var n = {};
                          for (var o in e)
                            Object.prototype.hasOwnProperty.call(e, o) &&
                              t.indexOf(o) < 0 &&
                              (n[o] = e[o]);
                          if (
                            null != e &&
                            "function" == typeof Object.getOwnPropertySymbols
                          ) {
                            var r = 0;
                            for (
                              o = Object.getOwnPropertySymbols(e);
                              r < o.length;
                              r++
                            )
                              t.indexOf(o[r]) < 0 &&
                                Object.prototype.propertyIsEnumerable.call(
                                  e,
                                  o[r]
                                ) &&
                                (n[o[r]] = e[o[r]]);
                          }
                          return n;
                        })(e, ["width", "height"]);
                        if (Object.keys(n).length)
                          throw new Error(
                            "resize requires a TaskInfo argument containing only width and height"
                          );
                        J.update.resize(e);
                      }),
                      (e.submitTask = function (e, t) {
                        J.url.submit(e, t);
                      }),
                      (e.getDefaultSizeIfNotProvided = t);
                  })(It || (It = {})),
                  (function (e) {
                    (e.guest = "Guest"),
                      (e.attendee = "Attendee"),
                      (e.presenter = "Presenter"),
                      (e.organizer = "Organizer");
                  })(Pt || (Pt = {})),
                  (function (e) {
                    (e.added = "Added"),
                      (e.alreadyExists = "AlreadyExists"),
                      (e.conflict = "Conflict"),
                      (e.notFound = "NotFound");
                  })(Et || (Et = {}));
                var Yt,
                  en,
                  tn,
                  nn,
                  on,
                  rn,
                  an,
                  sn = (function () {
                    function e() {}
                    return (
                      (e.prototype.getFluidTenantInfo = function () {
                        return new Promise(function (e) {
                          ie(W, b.meetingStage, b.sidePanel),
                            e(Ee("interactive.getFluidTenantInfo"));
                        });
                      }),
                      (e.prototype.getFluidToken = function (e) {
                        return new Promise(function (t) {
                          ie(W, b.meetingStage, b.sidePanel),
                            t(Ee("interactive.getFluidToken", e));
                        });
                      }),
                      (e.prototype.getFluidContainerId = function () {
                        return new Promise(function (e) {
                          ie(W, b.meetingStage, b.sidePanel),
                            e(Ee("interactive.getFluidContainerId"));
                        });
                      }),
                      (e.prototype.setFluidContainerId = function (e) {
                        return new Promise(function (t) {
                          ie(W, b.meetingStage, b.sidePanel),
                            t(Ee("interactive.setFluidContainerId", e));
                        });
                      }),
                      (e.prototype.getNtpTime = function () {
                        return new Promise(function (e) {
                          ie(W, b.meetingStage, b.sidePanel),
                            e(Ee("interactive.getNtpTime"));
                        });
                      }),
                      (e.prototype.registerClientId = function (e) {
                        return new Promise(function (t) {
                          ie(W, b.meetingStage, b.sidePanel),
                            t(Ee("interactive.registerClientId", e));
                        });
                      }),
                      (e.prototype.getClientRoles = function (e) {
                        return new Promise(function (t) {
                          ie(W, b.meetingStage, b.sidePanel),
                            t(Ee("interactive.getClientRoles", e));
                        });
                      }),
                      (e.create = function () {
                        return ie(W, b.meetingStage, b.sidePanel), new e();
                      }),
                      e
                    );
                  })();
                !(function (e) {
                  function t(e, t) {
                    return { errorCode: e, message: t };
                  }
                  !(function (e) {
                    (e.Dropbox = "DROPBOX"),
                      (e.Box = "BOX"),
                      (e.Sharefile = "SHAREFILE"),
                      (e.GoogleDrive = "GOOGLEDRIVE"),
                      (e.Egnyte = "EGNYTE"),
                      (e.SharePoint = "SharePoint");
                  })(e.CloudStorageProvider || (e.CloudStorageProvider = {})),
                    (function (e) {
                      (e[(e.Sharepoint = 0)] = "Sharepoint"),
                        (e[(e.WopiIntegration = 1)] = "WopiIntegration"),
                        (e[(e.Google = 2)] = "Google"),
                        (e[(e.OneDrive = 3)] = "OneDrive"),
                        (e[(e.Recent = 4)] = "Recent"),
                        (e[(e.Aggregate = 5)] = "Aggregate"),
                        (e[(e.FileSystem = 6)] = "FileSystem"),
                        (e[(e.Search = 7)] = "Search"),
                        (e[(e.AllFiles = 8)] = "AllFiles"),
                        (e[(e.SharedWithMe = 9)] = "SharedWithMe");
                    })(
                      e.CloudStorageProviderType ||
                        (e.CloudStorageProviderType = {})
                    ),
                    (function (e) {
                      e.ClassMaterials = "classMaterials";
                    })(
                      e.SpecialDocumentLibraryType ||
                        (e.SpecialDocumentLibraryType = {})
                    ),
                    (function (e) {
                      e.Readonly = "readonly";
                    })(
                      e.DocumentLibraryAccessType ||
                        (e.DocumentLibraryAccessType = {})
                    ),
                    (function (e) {
                      (e.Downloaded = "Downloaded"),
                        (e.Downloading = "Downloading"),
                        (e.Failed = "Failed");
                    })(e.FileDownloadStatus || (e.FileDownloadStatus = {})),
                    (function (e) {
                      (e.Download = "DOWNLOAD"),
                        (e.Upload = "UPLOAD"),
                        (e.Delete = "DELETE");
                    })(
                      e.CloudStorageProviderFileAction ||
                        (e.CloudStorageProviderFileAction = {})
                    ),
                    (e.getCloudStorageFolders = function (e, t) {
                      if ((ie(W, b.content), !e || 0 === e.length))
                        throw new Error(
                          "[files.getCloudStorageFolders] channelId name cannot be null or empty"
                        );
                      if (!t)
                        throw new Error(
                          "[files.getCloudStorageFolders] Callback cannot be null"
                        );
                      ke("files.getCloudStorageFolders", [e], t);
                    }),
                    (e.addCloudStorageFolder = function (e, t) {
                      if ((ie(W, b.content), !e || 0 === e.length))
                        throw new Error(
                          "[files.addCloudStorageFolder] channelId name cannot be null or empty"
                        );
                      if (!t)
                        throw new Error(
                          "[files.addCloudStorageFolder] Callback cannot be null"
                        );
                      ke("files.addCloudStorageFolder", [e], t);
                    }),
                    (e.deleteCloudStorageFolder = function (e, t, n) {
                      if ((ie(W, b.content), !e))
                        throw new Error(
                          "[files.deleteCloudStorageFolder] channelId name cannot be null or empty"
                        );
                      if (!t)
                        throw new Error(
                          "[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty"
                        );
                      if (!n)
                        throw new Error(
                          "[files.deleteCloudStorageFolder] Callback cannot be null"
                        );
                      ke("files.deleteCloudStorageFolder", [e, t], n);
                    }),
                    (e.getCloudStorageFolderContents = function (e, t, n) {
                      if ((ie(W, b.content), !e || !t))
                        throw new Error(
                          "[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty"
                        );
                      if (!n)
                        throw new Error(
                          "[files.getCloudStorageFolderContents] Callback cannot be null"
                        );
                      if ("isSubdirectory" in e && !e.isSubdirectory)
                        throw new Error(
                          "[files.getCloudStorageFolderContents] provided folder is not a subDirectory"
                        );
                      ke("files.getCloudStorageFolderContents", [e, t], n);
                    }),
                    (e.openCloudStorageFile = function (e, t, n) {
                      if ((ie(W, b.content), !e || !t))
                        throw new Error(
                          "[files.openCloudStorageFile] file/providerCode cannot be null or empty"
                        );
                      if (e.isSubdirectory)
                        throw new Error(
                          "[files.openCloudStorageFile] provided file is a subDirectory"
                        );
                      ke("files.openCloudStorageFile", [e, t, n]);
                    }),
                    (e.getExternalProviders = function (e, t) {
                      if ((void 0 === e && (e = !1), ie(W, b.content), !t))
                        throw new Error(
                          "[files.getExternalProviders] Callback cannot be null"
                        );
                      ke("files.getExternalProviders", [e], t);
                    }),
                    (e.copyMoveFiles = function (e, t, n, o, r, i) {
                      if (
                        (void 0 === r && (r = !1),
                        ie(W, b.content),
                        !e || 0 === e.length)
                      )
                        throw new Error(
                          "[files.copyMoveFiles] selectedFiles cannot be null or empty"
                        );
                      if (!t)
                        throw new Error(
                          "[files.copyMoveFiles] providerCode cannot be null or empty"
                        );
                      if (!n)
                        throw new Error(
                          "[files.copyMoveFiles] destinationFolder cannot be null or empty"
                        );
                      if (!o)
                        throw new Error(
                          "[files.copyMoveFiles] destinationProviderCode cannot be null or empty"
                        );
                      if (!i)
                        throw new Error(
                          "[files.copyMoveFiles] callback cannot be null"
                        );
                      ke("files.copyMoveFiles", [e, t, n, o, r], i);
                    }),
                    (e.getFileDownloads = function (e) {
                      if ((ie(W, b.content), !e))
                        throw new Error(
                          "[files.getFileDownloads] Callback cannot be null"
                        );
                      ke("files.getFileDownloads", [], e);
                    }),
                    (e.openDownloadFolder = function (e, t) {
                      if ((void 0 === e && (e = void 0), ie(W, b.content), !t))
                        throw new Error(
                          "[files.openDownloadFolder] Callback cannot be null"
                        );
                      ke("files.openDownloadFolder", [e], t);
                    }),
                    (e.addCloudStorageProvider = function (e) {
                      if ((ie(W, b.content), !e))
                        throw t(
                          w.INVALID_ARGUMENTS,
                          "[files.addCloudStorageProvider] callback cannot be null"
                        );
                      ke("files.addCloudStorageProvider", [], e);
                    }),
                    (e.removeCloudStorageProvider = function (e, n) {
                      if ((ie(W, b.content), !n))
                        throw t(
                          w.INVALID_ARGUMENTS,
                          "[files.removeCloudStorageProvider] callback cannot be null"
                        );
                      if (!e || !e.content)
                        throw t(
                          w.INVALID_ARGUMENTS,
                          "[files.removeCloudStorageProvider] 3P cloud storage provider request content is missing"
                        );
                      ke("files.removeCloudStorageProvider", [e], n);
                    }),
                    (e.addCloudStorageProviderFile = function (e, n) {
                      if ((ie(W, b.content), !n))
                        throw t(
                          w.INVALID_ARGUMENTS,
                          "[files.addCloudStorageProviderFile] callback cannot be null"
                        );
                      if (!e || !e.content)
                        throw t(
                          w.INVALID_ARGUMENTS,
                          "[files.addCloudStorageProviderFile] 3P cloud storage provider request content is missing"
                        );
                      ke("files.addCloudStorageProviderFile", [e], n);
                    }),
                    (e.renameCloudStorageProviderFile = function (e, n) {
                      if ((ie(W, b.content), !n))
                        throw t(
                          w.INVALID_ARGUMENTS,
                          "[files.renameCloudStorageProviderFile] callback cannot be null"
                        );
                      if (!e || !e.content)
                        throw t(
                          w.INVALID_ARGUMENTS,
                          "[files.renameCloudStorageProviderFile] 3P cloud storage provider request content is missing"
                        );
                      ke("files.renameCloudStorageProviderFile", [e], n);
                    }),
                    (e.deleteCloudStorageProviderFile = function (e, n) {
                      if ((ie(W, b.content), !n))
                        throw t(
                          w.INVALID_ARGUMENTS,
                          "[files.deleteCloudStorageProviderFile] callback cannot be null"
                        );
                      if (
                        !(
                          e &&
                          e.content &&
                          e.content.itemList &&
                          e.content.itemList.length > 0
                        )
                      )
                        throw t(
                          w.INVALID_ARGUMENTS,
                          "[files.deleteCloudStorageProviderFile] 3P cloud storage provider request content details are missing"
                        );
                      ke("files.deleteCloudStorageProviderFile", [e], n);
                    }),
                    (e.downloadCloudStorageProviderFile = function (e, n) {
                      if ((ie(W, b.content), !n))
                        throw t(
                          w.INVALID_ARGUMENTS,
                          "[files.downloadCloudStorageProviderFile] callback cannot be null"
                        );
                      if (
                        !(
                          e &&
                          e.content &&
                          e.content.itemList &&
                          e.content.itemList.length > 0
                        )
                      )
                        throw t(
                          w.INVALID_ARGUMENTS,
                          "[files.downloadCloudStorageProviderFile] 3P cloud storage provider request content details are missing"
                        );
                      ke("files.downloadCloudStorageProviderFile", [e], n);
                    }),
                    (e.uploadCloudStorageProviderFile = function (e, n) {
                      if ((ie(W, b.content), !n))
                        throw t(
                          w.INVALID_ARGUMENTS,
                          "[files.uploadCloudStorageProviderFile] callback cannot be null"
                        );
                      if (
                        !(
                          e &&
                          e.content &&
                          e.content.itemList &&
                          e.content.itemList.length > 0
                        )
                      )
                        throw t(
                          w.INVALID_ARGUMENTS,
                          "[files.uploadCloudStorageProviderFile] 3P cloud storage provider request content details are missing"
                        );
                      if (!e.content.destinationFolder)
                        throw t(
                          w.INVALID_ARGUMENTS,
                          "[files.uploadCloudStorageProviderFile] Invalid destination folder details"
                        );
                      ke("files.uploadCloudStorageProviderFile", [e], n);
                    }),
                    (e.registerCloudStorageProviderListChangeHandler =
                      function (e) {
                        if ((ie(W), !e))
                          throw new Error(
                            "[registerCloudStorageProviderListChangeHandler] Handler cannot be null"
                          );
                        pe("files.cloudStorageProviderListChange", e);
                      }),
                    (e.registerCloudStorageProviderContentChangeHandler =
                      function (e) {
                        if ((ie(W), !e))
                          throw new Error(
                            "[registerCloudStorageProviderContentChangeHandler] Handler cannot be null"
                          );
                        pe("files.cloudStorageProviderContentChange", e);
                      });
                })(Yt || (Yt = {})),
                  (function (e) {
                    function t() {
                      return !(!ie(W) || !W.supports.meetingRoom);
                    }
                    (e.getPairedMeetingRoomInfo = function () {
                      return new Promise(function (e) {
                        if ((ie(W), !t())) throw k;
                        e(Ee("meetingRoom.getPairedMeetingRoomInfo"));
                      });
                    }),
                      (e.sendCommandToPairedMeetingRoom = function (e) {
                        return new Promise(function (n) {
                          if (!e || 0 == e.length)
                            throw new Error(
                              "[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty"
                            );
                          if ((ie(W), !t())) throw k;
                          n(
                            Ee("meetingRoom.sendCommandToPairedMeetingRoom", e)
                          );
                        });
                      }),
                      (e.registerMeetingRoomCapabilitiesUpdateHandler =
                        function (e) {
                          if (!e)
                            throw new Error(
                              "[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null"
                            );
                          if ((ie(W), !t())) throw k;
                          pe(
                            "meetingRoom.meetingRoomCapabilitiesUpdate",
                            function (t) {
                              ie(W), e(t);
                            }
                          );
                        }),
                      (e.registerMeetingRoomStatesUpdateHandler = function (e) {
                        if (!e)
                          throw new Error(
                            "[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null"
                          );
                        if ((ie(W), !t())) throw k;
                        pe("meetingRoom.meetingRoomStatesUpdate", function (t) {
                          ie(W), e(t);
                        });
                      }),
                      (e.isSupported = t);
                  })(en || (en = {})),
                  (function (e) {
                    function t() {
                      return !(!ie(W) || !W.supports.notifications);
                    }
                    (e.showNotification = function (e) {
                      if ((ie(W, b.content), !t())) throw k;
                      ke("notifications.showNotification", [e]);
                    }),
                      (e.isSupported = t);
                  })(tn || (tn = {})),
                  (function (e) {
                    function t() {
                      return !(!ie(W) || !W.supports.remoteCamera);
                    }
                    !(function (e) {
                      (e.Reset = "Reset"),
                        (e.ZoomIn = "ZoomIn"),
                        (e.ZoomOut = "ZoomOut"),
                        (e.PanLeft = "PanLeft"),
                        (e.PanRight = "PanRight"),
                        (e.TiltUp = "TiltUp"),
                        (e.TiltDown = "TiltDown");
                    })(e.ControlCommand || (e.ControlCommand = {})),
                      (function (e) {
                        (e[(e.CommandResetError = 0)] = "CommandResetError"),
                          (e[(e.CommandZoomInError = 1)] =
                            "CommandZoomInError"),
                          (e[(e.CommandZoomOutError = 2)] =
                            "CommandZoomOutError"),
                          (e[(e.CommandPanLeftError = 3)] =
                            "CommandPanLeftError"),
                          (e[(e.CommandPanRightError = 4)] =
                            "CommandPanRightError"),
                          (e[(e.CommandTiltUpError = 5)] =
                            "CommandTiltUpError"),
                          (e[(e.CommandTiltDownError = 6)] =
                            "CommandTiltDownError"),
                          (e[(e.SendDataError = 7)] = "SendDataError");
                      })(e.ErrorReason || (e.ErrorReason = {})),
                      (function (e) {
                        (e[(e.None = 0)] = "None"),
                          (e[(e.ControlDenied = 1)] = "ControlDenied"),
                          (e[(e.ControlNoResponse = 2)] = "ControlNoResponse"),
                          (e[(e.ControlBusy = 3)] = "ControlBusy"),
                          (e[(e.AckTimeout = 4)] = "AckTimeout"),
                          (e[(e.ControlTerminated = 5)] = "ControlTerminated"),
                          (e[(e.ControllerTerminated = 6)] =
                            "ControllerTerminated"),
                          (e[(e.DataChannelError = 7)] = "DataChannelError"),
                          (e[(e.ControllerCancelled = 8)] =
                            "ControllerCancelled"),
                          (e[(e.ControlDisabled = 9)] = "ControlDisabled"),
                          (e[(e.ControlTerminatedToAllowOtherController = 10)] =
                            "ControlTerminatedToAllowOtherController");
                      })(
                        e.SessionTerminatedReason ||
                          (e.SessionTerminatedReason = {})
                      ),
                      (e.getCapableParticipants = function (e) {
                        if (!e)
                          throw new Error(
                            "[remoteCamera.getCapableParticipants] Callback cannot be null"
                          );
                        if ((ie(W, b.sidePanel), !t())) throw k;
                        ke("remoteCamera.getCapableParticipants", e);
                      }),
                      (e.requestControl = function (e, n) {
                        if (!e)
                          throw new Error(
                            "[remoteCamera.requestControl] Participant cannot be null"
                          );
                        if (!n)
                          throw new Error(
                            "[remoteCamera.requestControl] Callback cannot be null"
                          );
                        if ((ie(W, b.sidePanel), !t())) throw k;
                        ke("remoteCamera.requestControl", [e], n);
                      }),
                      (e.sendControlCommand = function (e, n) {
                        if (!e)
                          throw new Error(
                            "[remoteCamera.sendControlCommand] ControlCommand cannot be null"
                          );
                        if (!n)
                          throw new Error(
                            "[remoteCamera.sendControlCommand] Callback cannot be null"
                          );
                        if ((ie(W, b.sidePanel), !t())) throw k;
                        ke("remoteCamera.sendControlCommand", [e], n);
                      }),
                      (e.terminateSession = function (e) {
                        if (!e)
                          throw new Error(
                            "[remoteCamera.terminateSession] Callback cannot be null"
                          );
                        if ((ie(W, b.sidePanel), !t())) throw k;
                        ke("remoteCamera.terminateSession", e);
                      }),
                      (e.registerOnCapableParticipantsChangeHandler = function (
                        e
                      ) {
                        if (!e)
                          throw new Error(
                            "[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null"
                          );
                        if ((ie(W, b.sidePanel), !t())) throw k;
                        pe("remoteCamera.capableParticipantsChange", e);
                      }),
                      (e.registerOnErrorHandler = function (e) {
                        if (!e)
                          throw new Error(
                            "[remoteCamera.registerOnErrorHandler] Handler cannot be null"
                          );
                        if ((ie(W, b.sidePanel), !t())) throw k;
                        pe("remoteCamera.handlerError", e);
                      }),
                      (e.registerOnDeviceStateChangeHandler = function (e) {
                        if (!e)
                          throw new Error(
                            "[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null"
                          );
                        if ((ie(W, b.sidePanel), !t())) throw k;
                        pe("remoteCamera.deviceStateChange", e);
                      }),
                      (e.registerOnSessionStatusChangeHandler = function (e) {
                        if (!e)
                          throw new Error(
                            "[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null"
                          );
                        if ((ie(W, b.sidePanel), !t())) throw k;
                        pe("remoteCamera.sessionStatusChange", e);
                      }),
                      (e.isSupported = t);
                  })(nn || (nn = {})),
                  (function (e) {
                    function t() {
                      return !(!ie(W) || !W.supports.appEntity);
                    }
                    (e.selectAppEntity = function (e, n, o, r) {
                      if ((ie(W, b.content), !t())) throw k;
                      if (!e || 0 == e.length)
                        throw new Error(
                          "[appEntity.selectAppEntity] threadId name cannot be null or empty"
                        );
                      if (!r)
                        throw new Error(
                          "[appEntity.selectAppEntity] Callback cannot be null"
                        );
                      ke("appEntity.selectAppEntity", [e, n, o], r);
                    }),
                      (e.isSupported = t);
                  })(on || (on = {})),
                  (function (e) {
                    function t() {
                      return !(!ie(W) || !W.supports.teams);
                    }
                    !(function (e) {
                      (e[(e.Regular = 0)] = "Regular"),
                        (e[(e.Private = 1)] = "Private"),
                        (e[(e.Shared = 2)] = "Shared");
                    })(e.ChannelType || (e.ChannelType = {})),
                      (e.getTeamChannels = function (e, n) {
                        if ((ie(W, b.content), !t())) throw k;
                        if (!e)
                          throw new Error(
                            "[teams.getTeamChannels] groupId cannot be null or empty"
                          );
                        if (!n)
                          throw new Error(
                            "[teams.getTeamChannels] Callback cannot be null"
                          );
                        ke("teams.getTeamChannels", [e], n);
                      }),
                      (e.refreshSiteUrl = function (e, n) {
                        if ((ie(W), !t())) throw k;
                        if (!e)
                          throw new Error(
                            "[teams.refreshSiteUrl] threadId cannot be null or empty"
                          );
                        if (!n)
                          throw new Error(
                            "[teams.refreshSiteUrl] Callback cannot be null"
                          );
                        ke("teams.refreshSiteUrl", [e], n);
                      }),
                      (e.isSupported = t),
                      (function (e) {
                        function t() {
                          return !(
                            !ie(W) ||
                            !W.supports.teams ||
                            !W.supports.teams.fullTrust
                          );
                        }
                        !(function (e) {
                          function t() {
                            return !!(
                              ie(W) &&
                              W.supports.teams &&
                              W.supports.teams.fullTrust &&
                              W.supports.teams.fullTrust.joinedTeams
                            );
                          }
                          (e.getUserJoinedTeams = function (e) {
                            return new Promise(function (n) {
                              if ((ie(W), !t())) throw k;
                              if (
                                (d.hostClientType === C.android ||
                                  d.hostClientType === C.teamsRoomsAndroid ||
                                  d.hostClientType === C.teamsPhones ||
                                  d.hostClientType === C.teamsDisplays) &&
                                !ae("2.0.1")
                              ) {
                                var o = { errorCode: w.OLD_PLATFORM };
                                throw new Error(JSON.stringify(o));
                              }
                              n(Te("getUserJoinedTeams", e));
                            });
                          }),
                            (e.isSupported = t);
                        })(e.joinedTeams || (e.joinedTeams = {})),
                          (e.getConfigSetting = function (e) {
                            return new Promise(function (n) {
                              if ((ie(W), !t())) throw k;
                              n(Te("getConfigSetting", e));
                            });
                          }),
                          (e.isSupported = t);
                      })(e.fullTrust || (e.fullTrust = {}));
                  })(rn || (rn = {})),
                  (function (e) {
                    var t;
                    function n() {
                      return ie(W), ht.isSupported();
                    }
                    function o(e, n) {
                      void 0 === n && (n = t.Warn),
                        ke("video.notifyError", [e, n]);
                    }
                    !(function (e) {
                      (e.Fatal = "fatal"), (e.Warn = "warn");
                    })((t = e.ErrorLevel || (e.ErrorLevel = {}))),
                      (e.registerForVideoFrame = function (e, t) {
                        if ((ie(W, b.sidePanel), !n())) throw k;
                        pe(
                          "video.newVideoFrame",
                          function (t) {
                            if (t) {
                              var n = t.timestamp;
                              e(
                                t,
                                function () {
                                  !(function (e) {
                                    ke("video.videoFrameProcessed", [e]);
                                  })(n);
                                },
                                o
                              );
                            }
                          },
                          !1
                        ),
                          ke("video.registerForVideoFrame", [t]);
                      }),
                      (e.notifySelectedVideoEffectChanged = function (e, t, o) {
                        if ((ie(W, b.sidePanel), !n())) throw k;
                        ke("video.videoEffectChanged", [e, t, o]);
                      }),
                      (e.registerForVideoEffect = function (e) {
                        if ((ie(W, b.sidePanel), !n())) throw k;
                        pe("video.effectParameterChange", e, !1),
                          ke("video.registerForVideoEffect");
                      }),
                      (e.updatePersonalizedEffects = function (e) {
                        if ((ie(W, b.sidePanel), !ht.isSupported())) throw k;
                        ke("video.personalizedEffectsChanged", [e]);
                      }),
                      (e.isSupported = n),
                      (e.notifyFatalError = function (e) {
                        if ((ie(W), !ht.isSupported())) throw k;
                        o(e, t.Fatal);
                      });
                  })(an || (an = {}));
              })(),
              r
            );
          })()),
        (e.exports = n());
    }).call(this, n(49));
  },
  function (e, t) {
    var n,
      o,
      r = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        n = i;
      }
      try {
        o = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        o = a;
      }
    })();
    var c,
      u = [],
      l = !1,
      d = -1;
    function f() {
      l &&
        c &&
        ((l = !1), c.length ? (u = c.concat(u)) : (d = -1), u.length && p());
    }
    function p() {
      if (!l) {
        var e = s(f);
        l = !0;
        for (var t = u.length; t; ) {
          for (c = u, u = []; ++d < t; ) c && c[d].run();
          (d = -1), (t = u.length);
        }
        (c = null),
          (l = !1),
          (function (e) {
            if (o === clearTimeout) return clearTimeout(e);
            if ((o === a || !o) && clearTimeout)
              return (o = clearTimeout), clearTimeout(e);
            try {
              o(e);
            } catch (t) {
              try {
                return o.call(null, e);
              } catch (t) {
                return o.call(this, e);
              }
            }
          })(e);
      }
    }
    function g(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (r.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new g(e, t)), 1 !== u.length || l || s(p);
    }),
      (g.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (r.title = "browser"),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ""),
      (r.versions = {}),
      (r.on = m),
      (r.addListener = m),
      (r.once = m),
      (r.off = m),
      (r.removeListener = m),
      (r.removeAllListeners = m),
      (r.emit = m),
      (r.prependListener = m),
      (r.prependOnceListener = m),
      (r.listeners = function (e) {
        return [];
      }),
      (r.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (r.cwd = function () {
        return "/";
      }),
      (r.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (r.umask = function () {
        return 0;
      });
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(55);
    n(25),
      (window.wpo365 = window.wpo365 || {}),
      (window.wpo365.pintraRedirect = new o.PintraRedirect());
  },
  function (e, t, n) {
    "use strict";
    var o =
        (this && this.__awaiter) ||
        function (e, t, n, o) {
          return new (n || (n = Promise))(function (r, i) {
            function a(e) {
              try {
                c(o.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                c(o.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, s);
            }
            c((o = o.apply(e, t || [])).next());
          });
        },
      r =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            o,
            r,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function s(i) {
            return function (s) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      o &&
                        (r =
                          2 & i[0]
                            ? o.return
                            : i[0]
                            ? o.throw || ((r = o.return) && r.call(o), 0)
                            : o.next) &&
                        !(r = r.call(o, i[1])).done)
                    )
                      return r;
                    switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                      case 0:
                      case 1:
                        r = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (o = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((r = a.trys),
                          (r = r.length > 0 && r[r.length - 1]) ||
                            (6 !== i[0] && 2 !== i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!r || (i[1] > r[0] && i[1] < r[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < r[1]) {
                          (a.label = r[1]), (r = i);
                          break;
                        }
                        if (r && a.label < r[2]) {
                          (a.label = r[2]), a.ops.push(i);
                          break;
                        }
                        r[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (e) {
                    (i = [6, e]), (o = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, s]);
            };
          }
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(48),
      a = (function () {
        function e() {
          var e = this;
          (this.inIframe = !1),
            (this.isTeams = !1),
            (this.redirectTo = ""),
            (this.teamsToken = null),
            (this.teamsContext = null),
            (this.tryTeamsAuth = function (t, n) {
              return o(e, void 0, void 0, function () {
                var e,
                  o,
                  a,
                  s = this;
                return r(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (!i.app.isInitialized())
                        return (
                          console.log(
                            "PintraRedirect.tryTeamsAuth -> Microsoft Teams SDK not initialized"
                          ),
                          [2]
                        );
                      i.app.getContext().then(function (e) {
                        return (s.teamsContext = e);
                      }),
                        (r.label = 1);
                    case 1:
                      return (
                        r.trys.push([1, 3, , 4]),
                        console.log(
                          "PintraRedirect.tryTeamsAuth -> Trying to get token"
                        ),
                        (e = this),
                        [4, i.authentication.getAuthToken({})]
                      );
                    case 2:
                      return (
                        (e.teamsToken = r.sent()),
                        console.log(
                          "PintraRedirect.tryTeamsAuth -> Token: " +
                            this.teamsToken.substr(0, 25) +
                            "..."
                        ),
                        (o = { state: n, id_token: this.teamsToken }),
                        this.formPost(
                          o,
                          window.wpo365.siteUrl
                            ? window.wpo365.siteUrl
                            : window.location.href
                        ),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (a = r.sent()),
                        console.debug(
                          "PintraRedirect.tryTeamsAuth -> sso failed [reason: " +
                            a +
                            "]"
                        ),
                        this.teamsPopup(t),
                        this.showErrorMessage(a),
                        i.app.notifyFailure({
                          reason: i.app.FailedReason.AuthFailed,
                          message: a,
                        }),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (this.teamsPopup = function (t) {
              var n = function () {
                i.authentication.authenticate({
                  url: t,
                  width: 600,
                  height: 535,
                });
              };
              n(),
                window.wpo365 && window.wpo365.isWpLogin
                  ? e.observePopupClosed()
                  : e.fallbackButtonAndListeners(n);
            }),
            (this.showErrorMessage = function (e) {
              document.getElementById("wpo365RedirectError").innerHTML =
                '<br/><div style="font-family: Sans-Serif; padding: 20px; text-align: center; font-size: 13px; color: #8c8c8c"><strong>Important information for administrators</strong></span><br/><br/>Your <strong>WPO365 | LOGIN</strong> plugin now supports a more integrated single sign-on experience for Microsoft Teams Tabs and Apps.<br/><br/>Please update your App Manifest. <a href="https://docs.wpo365.com/article/70-adding-a-wordpress-tab-to-microsoft-teams-and-use-single-sign-on">Continue reading</a><br/><br/>[Exception details: ' +
                e +
                "]</div>";
            }),
            (this.fallbackButtonAndListeners = function (t) {
              var n = document.getElementById("wpo365RedirectLoadingOther");
              n || (n = document.getElementById("wpo365OpenIdRedirect"));
              var o = document.createElement("button");
              o.setAttribute(
                "style",
                "border: 1px solid #8c8c8c; background: #ffffff;"
              ),
                (o.className = "pintraRedirectMsSignin"),
                (o.innerHTML =
                  '<div style="display: flex; height: 41px; box-sizing: border-box; pointer: cursor;"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj48dGl0bGU+TVMtU3ltYm9sTG9ja3VwPC90aXRsZT48cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iOSIgaGVpZ2h0PSI5IiBmaWxsPSIjZjI1MDIyIi8+PHJlY3QgeD0iMSIgeT0iMTEiIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIGZpbGw9IiMwMGE0ZWYiLz48cmVjdCB4PSIxMSIgeT0iMSIgd2lkdGg9IjkiIGhlaWdodD0iOSIgZmlsbD0iIzdmYmEwMCIvPjxyZWN0IHg9IjExIiB5PSIxMSIgd2lkdGg9IjkiIGhlaWdodD0iOSIgZmlsbD0iI2ZmYjkwMCIvPjwvc3ZnPg=="><span style="white-space: nowrap; margin-left: 15px; padding-right: 12px; font-weight: 600; font-size: 15px; line-height: 41px; color: #5e5e5e;">Sign in with Microsoft</span>'),
                (o.onclick = t),
                n.appendChild(o),
                e.observePopupClosed();
            }),
            (this.observePopupClosed = function () {
              window.wpo365ReloadInterval = setInterval(function () {
                localStorage.getItem("wpo365PopupClosed") &&
                  (localStorage.removeItem("wpo365PopupClosed"),
                  clearInterval(window.wpo365ReloadInterval),
                  e.redirectTo
                    ? e.isTeams
                      ? (window.location.href = e.getServerRelativePath(
                          e.redirectTo
                        ))
                      : (window.location.href =
                          -1 == e.redirectTo.indexOf("http")
                            ? window.location.protocol + ":/" + e.redirectTo
                            : e.redirectTo)
                    : window.wpo365 && window.wpo365.siteUrl
                    ? e.isTeams
                      ? (window.location.href = window.location.href =
                          e.getServerRelativePath(window.wpo365.siteUrl))
                      : (window.location.href = window.wpo365.siteUrl)
                    : window.location.reload());
              }, 100);
            }),
            (this.uuidv4 = function () {
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                function (e) {
                  var t = (16 * Math.random()) | 0;
                  return ("x" == e ? t : (3 & t) | 8).toString(16);
                }
              );
            }),
            (this.queryString = function (e) {
              var t = e.indexOf("?");
              if (-1 == t) return {};
              for (
                var n = e.substr(t + 1).split("&"), o = {}, r = 0;
                r < n.length;
                r++
              ) {
                var i = n[r].split("=");
                o[i[0]] = 2 == i.length ? i[1] : "";
              }
              return o;
            }),
            (this.getServerRelativePath = function (e) {
              if (!e) return "/";
              var t = e.split("/");
              -1 == e.indexOf("http") && t.length >= 1
                ? t.splice(0, 1)
                : e.indexOf("http") > -1 && t.length >= 3 && t.splice(0, 3);
              var n = "/" + t.join("/");
              return console.log("getServerRelativePath -> " + n), n;
            }),
            (this.PopupCenter = function (e, t, n, o) {
              void 0 === n && (n = 600), void 0 === o && (o = 535);
              var r = screen.availWidth,
                i = screen.availHeight;
              n > r && (n = r), o > i && (o = i);
              var a = (r - n) / 2,
                s = (i - o) / 2,
                c = window.open(
                  e,
                  t,
                  "width=" +
                    n +
                    ",height=" +
                    o +
                    ",top=" +
                    s +
                    ",left=" +
                    a +
                    "toolbar=no,menubar=no,scrollbars=no,location=no,status=no"
                );
              c && window.focus && c.focus();
            }),
            (this.formPost = function (e, t) {
              var n = document.createElement("form");
              for (var o in ((n.method = "POST"),
              (n.action = t),
              (n.style.display = "none"),
              e))
                if (e.hasOwnProperty(o)) {
                  var r = document.createElement("input");
                  (r.type = "hidden"),
                    (r.name = o),
                    (r.value = e[o]),
                    n.appendChild(r);
                }
              document.getElementById("wpo365OpenIdRedirect").appendChild(n),
                n.submit();
            }),
            (this.inIframe = window != top),
            (this.redirectTo = localStorage.getItem("wpo365RedirectTo")),
            (this.isTeams =
              !!localStorage.getItem("wpo365IsTeams") ||
              (window.name &&
                ["embedded-page-container", "extension-tab-frame"].indexOf(
                  window.name
                ) >= 0)),
            this.isTeams && i.app.initialize(),
            !this.inIframe &&
              this.redirectTo &&
              (localStorage.setItem("wpo365PopupClosed", "closed"),
              localStorage.removeItem("wpo365RedirectTo"),
              console.debug(
                "PintraRedirect.contructor -> Trying to close authentication popup"
              ),
              this.isTeams
                ? (localStorage.removeItem("wpo365IsTeams"),
                  i.app.isInitialized()
                    ? i.authentication.notifySuccess()
                    : i.app.initialize().then(function () {
                        return i.authentication.notifySuccess();
                      }))
                : window.close());
        }
        return (
          (e.prototype.toMsOnline = function (e, t, n, o, r, a) {
            var s = this;
            if (
              (void 0 === e && (e = ""),
              void 0 === t && (t = location.href),
              void 0 === n && (n = ""),
              void 0 === o && (o = ""),
              void 0 === r && (r = !1),
              void 0 === a && (a = ""),
              console.log(
                "PintraRedirect.toMsOnline -> document.readyState: " +
                  document.readyState
              ),
              -1 != ["interactive", "complete"].indexOf(document.readyState))
            ) {
              if (
                (e &&
                  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(e) &&
                  (console.log(
                    "WPO365 -> loginHint parameter ignored because it is not a valid email address"
                  ),
                  (e = "")),
                t &&
                  !/^((http|https):\/\/)([a-zA-Z0-9@:%._\-\+~#?&\/\$=]*)$/.test(
                    t
                  ) &&
                  (console.log(
                    "WPO365 -> pRedirectTo parameter ignored because it is not a valid (encoded) URL"
                  ),
                  (t = location.href)),
                n &&
                  !/^([a-zA-Z0-9])([a-zA-Z0-9\-\.])*(\.)([a-zA-Z0-9\-]){2,6}$/.test(
                    n
                  ) &&
                  (console.log(
                    "WPO365 -> domainHint parameter ignored because it is not a valid domain name"
                  ),
                  (n = "")),
                a)
              ) {
                var c = document.createElement("div");
                (c.innerHTML = a),
                  a != c.textContent &&
                    (console.log(
                      "WPO365 -> idpKey parameter ignored because its escaped value is not equal to its actual value"
                    ),
                    (a = ""));
              }
              var u = !!window.wpo365.siteUrl
                  ? window.wpo365.siteUrl
                  : window.location.href,
                l = this.queryString(window.location.href),
                d = 0 === Object.keys(this.queryString(u)).length ? "?" : "&";
              if (
                ((this.redirectTo =
                  "redirect_to" in l ? decodeURIComponent(l.redirect_to) : t),
                !this.inIframe || r)
              ) {
                var f = {
                  action: "openidredirect",
                  login_hint: e,
                  domain_hint: n,
                  redirect_to: this.redirectTo,
                  b2c_policy: o,
                  idp_id: a,
                };
                this.formPost(f, "" + u + d + "cb=" + this.uuidv4());
              } else {
                localStorage.removeItem("wpo365PopupClosed"),
                  localStorage.removeItem("wpo365RedirectTo"),
                  localStorage.removeItem("wpo365IsTeams"),
                  localStorage.setItem("wpo365RedirectTo", this.redirectTo);
                var p =
                  "" +
                  u +
                  d +
                  "action=openidredirect&redirect_to=" +
                  this.redirectTo +
                  "&domain_hint=" +
                  n +
                  "&b2c_policy=" +
                  o +
                  "&cb=" +
                  this.uuidv4();
                if (this.isTeams) {
                  localStorage.setItem("wpo365IsTeams", "teams");
                  var g = this;
                  setTimeout(function () {
                    if (!i.app.isInitialized())
                      return (
                        console.log(
                          "PintraRedirect.toMsOnline -> Failed to initialize Microsoft Teams SDK in a timely fashion"
                        ),
                        void s.showErrorMessage(
                          "Could not initialize the Microsoft Teams SDK [unknown error]."
                        )
                      );
                    s.tryTeamsAuth(p, s.redirectTo),
                      setTimeout(function () {
                        g.teamsContext ||
                          (console.log(
                            "PintraRedirect.toMsOnline -> Failed to acquire a Microsoft Teams context in a timely fashion"
                          ),
                          g.teamsPopup(p));
                      }, 500);
                  }, 500);
                } else
                  this.PopupCenter(p, "msOnline"),
                    this.fallbackButtonAndListeners(function () {
                      s.PopupCenter(p, "msOnline");
                    });
              }
            } else
              setTimeout(function () {
                return s.toMsOnline(e, t, n, o, r);
              }, 500);
          }),
          e
        );
      })();
    t.PintraRedirect = a;
  },
]);
