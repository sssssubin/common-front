/**
* @vue/shared v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ht(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ge = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, _t = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], $e = () => {
}, mt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), B = Object.assign, gt = Object.prototype.hasOwnProperty, ye = (e, t) => gt.call(e, t), h = Array.isArray, K = (e) => ie(e) === "[object Map]", yt = (e) => ie(e) === "[object Set]", D = (e) => typeof e == "function", S = (e) => typeof e == "string", $ = (e) => typeof e == "symbol", m = (e) => e !== null && typeof e == "object", Pe = Object.prototype.toString, ie = (e) => Pe.call(e), Fe = (e) => ie(e).slice(8, -1), Et = (e) => ie(e) === "[object Object]", Ne = (e) => S(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, bt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, wt = bt((e) => e.charAt(0).toUpperCase() + e.slice(1)), je = (e, t) => !Object.is(e, t);
let Te;
const ce = () => Te || (Te = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Se(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = S(s) ? Rt(s) : Se(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (S(e) || m(e))
    return e;
}
const Nt = /;(?![^(]*\))/g, St = /:([^]+)/, Ot = /\/\*[^]*?\*\//g;
function Rt(e) {
  const t = {};
  return e.replace(Ot, "").split(Nt).forEach((n) => {
    if (n) {
      const s = n.split(St);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Oe(e) {
  let t = "";
  if (S(e))
    t = e;
  else if (h(e))
    for (let n = 0; n < e.length; n++) {
      const s = Oe(e[n]);
      s && (t += s + " ");
    }
  else if (m(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ke = (e) => !!(e && e.__v_isRef === !0), Q = (e) => S(e) ? e : e == null ? "" : h(e) || m(e) && (e.toString === Pe || !D(e.toString)) ? Ke(e) ? Q(e.value) : JSON.stringify(e, He, 2) : String(e), He = (e, t) => Ke(t) ? He(e, t.value) : K(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[ae(s, o) + " =>"] = r, n),
    {}
  )
} : yt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ae(n))
} : $(t) ? ae(t) : m(t) && !h(t) && !Et(t) ? String(t) : t, ae = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    $(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function U(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ke = 0, ue;
function ze() {
  ke++;
}
function Le() {
  if (--ke > 0)
    return;
  let e;
  for (; ue; ) {
    let t = ue;
    for (ue = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
const Vt = /* @__PURE__ */ new WeakMap(), fe = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Ie = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), De = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function T(e, t, n, s, r, o) {
  const i = Vt.get(e);
  if (!i)
    return;
  const c = (l) => {
    l && (process.env.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: r,
      oldTarget: o
    }) : l.trigger());
  };
  if (ze(), t === "clear")
    i.forEach(c);
  else {
    const l = h(e), u = l && Ne(n);
    if (l && n === "length") {
      const f = Number(s);
      i.forEach((a, d) => {
        (d === "length" || d === De || !$(d) && d >= f) && c(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && c(i.get(n)), u && c(i.get(De)), t) {
        case "add":
          l ? u && c(i.get("length")) : (c(i.get(fe)), K(e) && c(i.get(Ie)));
          break;
        case "delete":
          l || (c(i.get(fe)), K(e) && c(i.get(Ie)));
          break;
        case "set":
          K(e) && c(i.get(fe));
          break;
      }
  }
  Le();
}
function P(e) {
  const t = p(e);
  return t === e || N(e) ? t : t.map(_);
}
function le(e) {
  return e = p(e), e;
}
const xt = {
  __proto__: null,
  [Symbol.iterator]() {
    return de(this, Symbol.iterator, _);
  },
  concat(...e) {
    return P(this).concat(
      ...e.map((t) => h(t) ? P(t) : t)
    );
  },
  entries() {
    return de(this, "entries", (e) => (e[1] = _(e[1]), e));
  },
  every(e, t) {
    return R(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return R(this, "filter", e, t, (n) => n.map(_), arguments);
  },
  find(e, t) {
    return R(this, "find", e, t, _, arguments);
  },
  findIndex(e, t) {
    return R(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return R(this, "findLast", e, t, _, arguments);
  },
  findLastIndex(e, t) {
    return R(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return R(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return pe(this, "includes", e);
  },
  indexOf(...e) {
    return pe(this, "indexOf", e);
  },
  join(e) {
    return P(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return pe(this, "lastIndexOf", e);
  },
  map(e, t) {
    return R(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return z(this, "pop");
  },
  push(...e) {
    return z(this, "push", e);
  },
  reduce(e, ...t) {
    return ve(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ve(this, "reduceRight", e, t);
  },
  shift() {
    return z(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return R(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return z(this, "splice", e);
  },
  toReversed() {
    return P(this).toReversed();
  },
  toSorted(e) {
    return P(this).toSorted(e);
  },
  toSpliced(...e) {
    return P(this).toSpliced(...e);
  },
  unshift(...e) {
    return z(this, "unshift", e);
  },
  values() {
    return de(this, "values", _);
  }
};
function de(e, t, n) {
  const s = le(e), r = s[t]();
  return s !== e && !N(e) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.value && (o.value = n(o.value)), o;
  }), r;
}
const Ct = Array.prototype;
function R(e, t, n, s, r, o) {
  const i = le(e), c = i !== e && !N(e), l = i[t];
  if (l !== Ct[t]) {
    const a = l.apply(e, o);
    return c ? _(a) : a;
  }
  let u = n;
  i !== e && (c ? u = function(a, d) {
    return n.call(this, _(a), d, e);
  } : n.length > 2 && (u = function(a, d) {
    return n.call(this, a, d, e);
  }));
  const f = l.call(i, u, s);
  return c && r ? r(f) : f;
}
function ve(e, t, n, s) {
  const r = le(e);
  let o = n;
  return r !== e && (N(e) ? n.length > 3 && (o = function(i, c, l) {
    return n.call(this, i, c, l, e);
  }) : o = function(i, c, l) {
    return n.call(this, i, _(c), l, e);
  }), r[t](o, ...s);
}
function pe(e, t, n) {
  const s = p(e), r = s[t](...n);
  return (r === -1 || r === !1) && ee(n[0]) ? (n[0] = p(n[0]), s[t](...n)) : r;
}
function z(e, t, n = []) {
  ze();
  const s = p(e)[t].apply(e, n);
  return Le(), s;
}
const Tt = /* @__PURE__ */ ht("__proto__,__v_isRef,__isVue"), Ue = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($)
);
function It(e) {
  return $(e) || (e = String(e)), p(this).hasOwnProperty(e);
}
class We {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? Ht : Je : o ? Kt : Ye).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = h(t);
    if (!r) {
      let l;
      if (i && (l = xt[n]))
        return l;
      if (n === "hasOwnProperty")
        return It;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      I(t) ? t : s
    );
    return ($(n) ? Ue.has(n) : Tt(n)) || o ? c : I(c) ? i && Ne(n) ? c : c.value : m(c) ? r ? Ge(c) : qe(c) : c;
  }
}
class Dt extends We {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const l = x(o);
      if (!N(s) && !x(s) && (o = p(o), s = p(s)), !h(t) && I(o) && !I(s))
        return l ? !1 : (o.value = s, !0);
    }
    const i = h(t) && Ne(n) ? Number(n) < t.length : ye(t, n), c = Reflect.set(
      t,
      n,
      s,
      I(t) ? t : r
    );
    return t === p(r) && (i ? je(s, o) && T(t, "set", n, s, o) : T(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = ye(t, n), r = t[n], o = Reflect.deleteProperty(t, n);
    return o && s && T(t, "delete", n, void 0, r), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return !$(n) || Ue.has(n), s;
  }
  ownKeys(t) {
    return Reflect.ownKeys(t);
  }
}
class vt extends We {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && U(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && U(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const At = /* @__PURE__ */ new Dt(), Mt = /* @__PURE__ */ new vt(), Ee = (e) => e, Y = (e) => Reflect.getPrototypeOf(e);
function $t(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = p(r), i = K(o), c = e === "entries" || e === Symbol.iterator && i, l = r[e](...s), u = n ? Ee : t ? te : _;
    return {
      // iterator protocol
      next() {
        const { value: f, done: a } = l.next();
        return a ? { value: f, done: a } : {
          value: c ? [u(f[0]), u(f[1])] : u(f),
          done: a
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function J(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      U(
        `${wt(e)} operation ${n}failed: target is readonly.`,
        p(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Pt(e, t) {
  const n = {
    get(r) {
      const o = this.__v_raw, i = p(o), c = p(r), { has: l } = Y(i), u = t ? Ee : e ? te : _;
      if (l.call(i, r))
        return u(o.get(r));
      if (l.call(i, c))
        return u(o.get(c));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && (p(r), void 0), Reflect.get(r, "size", r);
    },
    has(r) {
      const o = this.__v_raw;
      p(o);
      const i = p(r);
      return r === i ? o.has(r) : o.has(r) || o.has(i);
    },
    forEach(r, o) {
      const i = this, c = i.__v_raw;
      p(c);
      const l = t ? Ee : e ? te : _;
      return c.forEach((u, f) => r.call(o, l(u), l(f), i));
    }
  };
  return B(
    n,
    e ? {
      add: J("add"),
      set: J("set"),
      delete: J("delete"),
      clear: J("clear")
    } : {
      add(r) {
        !t && !N(r) && !x(r) && (r = p(r));
        const o = p(this);
        return Y(o).has.call(o, r) || (o.add(r), T(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !N(o) && !x(o) && (o = p(o));
        const i = p(this), { has: c, get: l } = Y(i);
        let u = c.call(i, r);
        u ? process.env.NODE_ENV !== "production" && Ae(i, c, r) : (r = p(r), u = c.call(i, r));
        const f = l.call(i, r);
        return i.set(r, o), u ? je(o, f) && T(i, "set", r, o, f) : T(i, "add", r, o), this;
      },
      delete(r) {
        const o = p(this), { has: i, get: c } = Y(o);
        let l = i.call(o, r);
        l ? process.env.NODE_ENV !== "production" && Ae(o, i, r) : (r = p(r), l = i.call(o, r));
        const u = c ? c.call(o, r) : void 0, f = o.delete(r);
        return l && T(o, "delete", r, void 0, u), f;
      },
      clear() {
        const r = p(this), o = r.size !== 0, i = process.env.NODE_ENV !== "production" ? K(r) ? new Map(r) : new Set(r) : void 0, c = r.clear();
        return o && T(
          r,
          "clear",
          void 0,
          void 0,
          i
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = $t(r, e, t);
  }), n;
}
function Be(e, t) {
  const n = Pt(e, t);
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    ye(n, r) && r in s ? n : s,
    r,
    o
  );
}
const Ft = {
  get: /* @__PURE__ */ Be(!1, !1)
}, jt = {
  get: /* @__PURE__ */ Be(!0, !1)
};
function Ae(e, t, n) {
  const s = p(n);
  if (s !== n && t.call(e, s)) {
    const r = Fe(e);
    U(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ye = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap();
function kt(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function zt(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : kt(Fe(e));
}
function qe(e) {
  return x(e) ? e : Qe(
    e,
    !1,
    At,
    Ft,
    Ye
  );
}
function Ge(e) {
  return Qe(
    e,
    !0,
    Mt,
    jt,
    Je
  );
}
function Qe(e, t, n, s, r) {
  if (!m(e))
    return process.env.NODE_ENV !== "production" && U(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = zt(e);
  if (o === 0)
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const c = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, c), c;
}
function Re(e) {
  return x(e) ? Re(e.__v_raw) : !!(e && e.__v_isReactive);
}
function x(e) {
  return !!(e && e.__v_isReadonly);
}
function N(e) {
  return !!(e && e.__v_isShallow);
}
function ee(e) {
  return e ? !!e.__v_raw : !1;
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
const _ = (e) => m(e) ? qe(e) : e, te = (e) => m(e) ? Ge(e) : e;
function I(e) {
  return e ? e.__v_isRef === !0 : !1;
}
/**
* @vue/runtime-core v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const A = [];
function Lt(e) {
  A.push(e);
}
function Ut() {
  A.pop();
}
let he = !1;
function M(e, ...t) {
  if (he) return;
  he = !0;
  const n = A.length ? A[A.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = Wt();
  if (s)
    Ve(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var i, c;
          return (c = (i = o.toString) == null ? void 0 : i.call(o)) != null ? c : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: o }) => `at <${dt(n, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...Bt(r)), console.warn(...o);
  }
  he = !1;
}
function Wt() {
  let e = A[A.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Bt(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Yt(n));
  }), t;
}
function Yt({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${dt(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [r, ...Jt(e.props), o] : [r + o];
}
function Jt(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Xe(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Xe(e, t, n) {
  return S(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : I(t) ? (t = Xe(e, p(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : D(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
const Ze = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Ve(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    et(r, t, n);
  }
}
function et(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || ge;
  if (t) {
    let c = t.parent;
    const l = t.proxy, u = process.env.NODE_ENV !== "production" ? Ze[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const f = c.ec;
      if (f) {
        for (let a = 0; a < f.length; a++)
          if (f[a](e, l, u) === !1)
            return;
      }
      c = c.parent;
    }
    if (o) {
      Ve(o, null, 10, [
        e,
        l,
        u
      ]);
      return;
    }
  }
  qt(e, n, r, s, i);
}
function qt(e, t, n, s = !0, r = !1) {
  if (process.env.NODE_ENV !== "production") {
    const o = Ze[t];
    if (n && Lt(n), M(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Ut(), s)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const E = [];
let V = -1;
const H = [];
let C = null, F = 0;
const Gt = /* @__PURE__ */ Promise.resolve();
let be = null;
const Qt = 100;
function Xt(e) {
  let t = V + 1, n = E.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = E[s], o = W(r);
    o < e || o === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Zt(e) {
  if (!(e.flags & 1)) {
    const t = W(e), n = E[E.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= W(n) ? E.push(e) : E.splice(Xt(t), 0, e), e.flags |= 1, tt();
  }
}
function tt() {
  be || (be = Gt.then(nt));
}
function en(e) {
  h(e) ? H.push(...e) : C && e.id === -1 ? C.splice(F + 1, 0, e) : e.flags & 1 || (H.push(e), e.flags |= 1), tt();
}
function tn(e) {
  if (H.length) {
    const t = [...new Set(H)].sort(
      (n, s) => W(n) - W(s)
    );
    if (H.length = 0, C) {
      C.push(...t);
      return;
    }
    for (C = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), F = 0; F < C.length; F++) {
      const n = C[F];
      process.env.NODE_ENV !== "production" && rt(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    C = null, F = 0;
  }
}
const W = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function nt(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => rt(e, n) : $e;
  try {
    for (V = 0; V < E.length; V++) {
      const n = E[V];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Ve(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; V < E.length; V++) {
      const n = E[V];
      n && (n.flags &= -2);
    }
    V = -1, E.length = 0, tn(e), be = null, (E.length || H.length) && nt(e);
  }
}
function rt(e, t) {
  const n = e.get(t) || 0;
  if (n > Qt) {
    const s = t.i, r = s && ft(s.type);
    return et(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const _e = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (ce().__VUE_HMR_RUNTIME__ = {
  createRecord: me(nn),
  rerender: me(rn),
  reload: me(on)
});
const ne = /* @__PURE__ */ new Map();
function nn(e, t) {
  return ne.has(e) ? !1 : (ne.set(e, {
    initialDef: re(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function re(e) {
  return pt(e) ? e.__vccOpts : e;
}
function rn(e, t) {
  const n = ne.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, re(s.type).render = t), s.renderCache = [], s.update();
  }));
}
function on(e, t) {
  const n = ne.get(e);
  if (!n) return;
  t = re(t), Me(n.initialDef, t);
  const s = [...n.instances];
  for (let r = 0; r < s.length; r++) {
    const o = s[r], i = re(o.type);
    let c = _e.get(i);
    c || (i !== n.initialDef && Me(i, t), _e.set(i, c = /* @__PURE__ */ new Set())), c.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (c.add(o), o.ceReload(t.styles), c.delete(o)) : o.parent ? Zt(() => {
      o.parent.update(), c.delete(o);
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(i);
  }
  en(() => {
    _e.clear();
  });
}
function Me(e, t) {
  B(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function me(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let j, q = [];
function ot(e, t) {
  var n, s;
  j = e, j ? (j.enabled = !0, q.forEach(({ event: r, args: o }) => j.emit(r, ...o)), q = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    ot(o, t);
  }), setTimeout(() => {
    j || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, q = []);
  }, 3e3)) : q = [];
}
let oe = null, sn = null;
const cn = (e) => e.__isTeleport;
function st(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, st(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
ce().requestIdleCallback;
ce().cancelIdleCallback;
const ln = Symbol.for("v-ndc");
function G(e, t, n, s) {
  let r;
  const o = n, i = h(e);
  if (i || S(e)) {
    const c = i && Re(e);
    let l = !1, u = !1;
    c && (l = !N(e), u = x(e), e = le(e)), r = new Array(e.length);
    for (let f = 0, a = e.length; f < a; f++)
      r[f] = t(
        l ? u ? te(_(e[f])) : _(e[f]) : e[f],
        f,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && M(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let c = 0; c < e; c++)
      r[c] = t(c + 1, c, void 0, o);
  } else if (m(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (c, l) => t(c, l, void 0, o)
      );
    else {
      const c = Object.keys(e);
      r = new Array(c.length);
      for (let l = 0, u = c.length; l < u; l++) {
        const f = c[l];
        r[l] = t(e[f], f, l, o);
      }
    }
  else
    r = [];
  return r;
}
const an = {};
process.env.NODE_ENV !== "production" && (an.ownKeys = (e) => (M(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const un = {}, it = (e) => Object.getPrototypeOf(e) === un, fn = (e) => e.__isSuspense, v = Symbol.for("v-fgt"), dn = Symbol.for("v-txt"), we = Symbol.for("v-cmt"), X = [];
let w = null;
function y(e = !1) {
  X.push(w = e ? null : []);
}
function pn() {
  X.pop(), w = X[X.length - 1] || null;
}
function ct(e) {
  return e.dynamicChildren = w || _t, pn(), w && w.push(e), e;
}
function b(e, t, n, s, r, o) {
  return ct(
    L(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
    )
  );
}
function hn(e, t, n, s, r) {
  return ct(
    xe(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function _n(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const mn = (...e) => at(
  ...e
), lt = ({ key: e }) => e ?? null, Z = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? S(e) || I(e) || D(e) ? { i: oe, r: e, k: t, f: !!n } : e : null);
function L(e, t = null, n = null, s = 0, r = null, o = e === v ? 0 : 1, i = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && lt(t),
    ref: t && Z(t),
    scopeId: sn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: oe
  };
  return c ? (Ce(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= S(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && M("VNode created with invalid key (NaN). VNode type:", l.type), // avoid a block node from tracking itself
  !i && // has current parent block
  w && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && w.push(l), l;
}
const xe = process.env.NODE_ENV !== "production" ? mn : at;
function at(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === ln) && (process.env.NODE_ENV !== "production" && !e && M(`Invalid vnode type when creating vnode: ${e}.`), e = we), _n(e)) {
    const c = se(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ce(c, n), !o && w && (c.shapeFlag & 6 ? w[w.indexOf(e)] = c : w.push(c)), c.patchFlag = -2, c;
  }
  if (pt(e) && (e = e.__vccOpts), t) {
    t = gn(t);
    let { class: c, style: l } = t;
    c && !S(c) && (t.class = Oe(c)), m(l) && (ee(l) && !h(l) && (l = B({}, l)), t.style = Se(l));
  }
  const i = S(e) ? 1 : fn(e) ? 128 : cn(e) ? 64 : m(e) ? 4 : D(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && ee(e) && (e = p(e), M(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), L(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function gn(e) {
  return e ? ee(e) || it(e) ? B({}, e) : e : null;
}
function se(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: c, transition: l } = e, u = t ? bn(r || {}, t) : r, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && lt(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? h(o) ? o.concat(Z(t)) : [o, Z(t)] : Z(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && h(c) ? c.map(ut) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== v ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && se(e.ssContent),
    ssFallback: e.ssFallback && se(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && s && st(
    f,
    l.clone(f)
  ), f;
}
function ut(e) {
  const t = se(e);
  return h(e.children) && (t.children = e.children.map(ut)), t;
}
function yn(e = " ", t = 0) {
  return xe(dn, null, e, t);
}
function En(e = "", t = !1) {
  return t ? (y(), hn(we, null, e)) : xe(we, null, e);
}
function Ce(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (h(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ce(e, r()), r._c && (r._d = !0));
      return;
    } else
      n = 32, !t._ && !it(t) && (t._ctx = oe);
  else D(t) ? (t = { default: t, _ctx: oe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [yn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function bn(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Oe([t.class, s.class]));
      else if (r === "style")
        t.style = Se([t.style, s.style]);
      else if (mt(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(h(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
{
  const e = ce(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => n
  );
}
process.env.NODE_ENV;
const wn = /(?:^|[-_])(\w)/g, Nn = (e) => e.replace(wn, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ft(e, t = !0) {
  return D(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function dt(e, t, n = !1) {
  let s = ft(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? Nn(s) : n ? "App" : "Anonymous";
}
function pt(e) {
  return D(e) && "__vccOpts" in e;
}
function Sn() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!m(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (I(a)) {
        const d = a.value;
        return [
          "div",
          {},
          ["span", e, f(a)],
          "<",
          c(d),
          ">"
        ];
      } else {
        if (Re(a))
          return [
            "div",
            {},
            ["span", e, N(a) ? "ShallowReactive" : "Reactive"],
            "<",
            c(a),
            `>${x(a) ? " (readonly)" : ""}`
          ];
        if (x(a))
          return [
            "div",
            {},
            ["span", e, N(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            c(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...o(a.$)
        ];
    }
  };
  function o(a) {
    const d = [];
    a.type.props && a.props && d.push(i("props", p(a.props))), a.setupState !== ge && d.push(i("setup", a.setupState)), a.data !== ge && d.push(i("data", p(a.data)));
    const g = l(a, "computed");
    g && d.push(i("computed", g));
    const O = l(a, "inject");
    return O && d.push(i("injected", O)), d.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), d;
  }
  function i(a, d) {
    return d = B({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(d).map((g) => [
          "div",
          {},
          ["span", s, g + ": "],
          c(d[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, d = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", s, a] : m(a) ? ["object", { object: d ? p(a) : a }] : ["span", n, String(a)];
  }
  function l(a, d) {
    const g = a.type;
    if (D(g))
      return;
    const O = {};
    for (const k in a.ctx)
      u(g, k, d) && (O[k] = a.ctx[k]);
    return O;
  }
  function u(a, d, g) {
    const O = a[g];
    if (h(O) && O.includes(d) || m(O) && d in O || a.extends && u(a.extends, d, g) || a.mixins && a.mixins.some((k) => u(k, d, g)))
      return !0;
  }
  function f(a) {
    return N(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function On() {
  Sn();
}
process.env.NODE_ENV !== "production" && On();
const Rn = { class: "table-wrapper" }, Vn = ["data-type"], xn = ["colspan"], Cn = ["rowspan", "colspan"], Tn = ["onClick"], In = {
  __name: "SalesTable",
  props: {
    headers: {
      type: Array,
      required: !0
    },
    data: {
      type: Array,
      required: !0
    },
    tableType: {
      type: String,
      default: ""
    }
  },
  emits: ["cell-click"],
  setup(e, { emit: t }) {
    const n = t, s = (r, o, i) => {
      n("cell-click", { row: r, key: o, value: i });
    };
    return (r, o) => (y(), b("div", Rn, [
      L("table", {
        class: "sales-table",
        "data-type": e.tableType
      }, [
        L("thead", null, [
          (y(!0), b(v, null, G(e.headers, (i, c) => (y(), b("tr", {
            key: "header-" + c
          }, [
            i.label ? (y(), b("th", {
              key: 0,
              colspan: i.colspan
            }, Q(i.label), 9, xn)) : (y(!0), b(v, { key: 1 }, G(i.columns, (l, u) => (y(), b("th", {
              key: "col-" + u,
              rowspan: l.rowspan,
              colspan: l.colspan
            }, Q(l.label), 9, Cn))), 128))
          ]))), 128))
        ]),
        L("tbody", null, [
          (y(!0), b(v, null, G(e.data, (i, c) => (y(), b("tr", {
            key: "row-" + c
          }, [
            (y(!0), b(v, null, G(i, (l, u) => (y(), b(v, null, [
              u ? (y(), b("td", {
                key: u,
                onClick: (f) => s(i, u, l),
                class: "clickable-cell"
              }, Q(l), 9, Tn)) : En("", !0)
            ], 64))), 256))
          ]))), 128))
        ])
      ], 8, Vn)
    ]));
  }
};
export {
  In as SalesTable
};
