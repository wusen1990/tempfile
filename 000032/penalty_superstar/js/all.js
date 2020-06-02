! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ae.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function(e) {
            return U.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = he[e] = {};
        return Z.each(e.match(de) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + Math.random()
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xe.test(n) ? Z.parseJSON(n) : n
                } catch (i) {}
                ye.set(e, t, n)
            } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return J.activeElement
        } catch (e) {}
    }

    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++) Z.event.add(t, i, l[i][n])
            }
            ye.hasData(e) && (a = ye.access(e), u = Z.extend({}, a), ye.set(t, u))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ne.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function x(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(), o
    }

    function b(e) {
        var t = J,
            n = $e[e];
        return n || (n = x(e, t), "none" !== n && n || (We = (We || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = x(e, t), We.detach()), $e[e] = n), n
    }

    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || _e(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), Ie.test(s) && Be.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function T(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function C(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ge.length; i--;)
            if (t = Ge[i] + n, t in e) return t;
        return r
    }

    function N(e, t, n) {
        var r = Xe.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += Z.css(e, n + Te[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + Te[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + Te[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Te[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + Te[o] + "Width", !0, i)));
        return s
    }

    function E(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = _e(e),
            s = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ie.test(i)) return i;
            r = s && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function S(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (o[s] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = Ce(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function j(e, t, n, r, i) {
        return new j.prototype.init(e, t, n, r, i)
    }

    function D() {
        return setTimeout(function() {
            Qe = void 0
        }), Qe = Z.now()
    }

    function A(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Te[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function L(e, t, n) {
        for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function q(e, t, n) {
        var r, i, o, s, a, u, l, c, f = this,
            p = {},
            d = e.style,
            h = e.nodeType && Ce(e),
            g = ve.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = Z.css(e, "display"), c = "none" === l ? ve.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Ke.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    h = !0
                }
                p[r] = g && g[r] || Z.style(e, r)
            } else l = void 0;
        if (Z.isEmptyObject(p)) "inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function() {
                Z(e).hide()
            }), f.done(function() {
                var t;
                ve.remove(e, "fxshow");
                for (t in p) Z.style(e, t, p[t])
            });
            for (r in p) s = L(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function H(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function O(e, t, n) {
        var r, i, o = 0,
            s = tt.length,
            a = Z.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = Qe || D(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: Z.extend({}, t),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Qe || D(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (H(c, l.opts.specialEasing); s > o; o++)
            if (r = tt[o].call(l, e, c, l.opts)) return r;
        return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function F(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(de) || [];
            if (Z.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function P(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, Z.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            s = e === wt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function M(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r), e
    }

    function R(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function W(e, t, n, r) {
        var i, o, s, a, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)
                for (i in l)
                    if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: s ? f : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function $(e, t, n, r) {
        var i;
        if (Z.isArray(t)) Z.each(t, function(t, i) {
            n || kt.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== Z.type(t)) r(e, t);
        else
            for (i in t) $(e + "[" + i + "]", t[i], n, r)
    }

    function B(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var I = [],
        _ = I.slice,
        z = I.concat,
        X = I.push,
        U = I.indexOf,
        V = {},
        Y = V.toString,
        G = V.hasOwnProperty,
        Q = {},
        J = e.document,
        K = "2.1.1",
        Z = function(e, t) {
            return new Z.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        re = function(e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return _.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return Z.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Z.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(_.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: I.sort,
        splice: I.splice
    }, Z.extend = Z.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], r = e[t], s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Z.isArray(e) && e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e);
            if (r) {
                if (a)
                    for (; s > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (a)
                for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                s = e.length,
                a = n(e),
                u = [];
            if (a)
                for (; s > o; o++) i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return z.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = _.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(_.call(arguments)))
            }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
        },
        now: Date.now,
        support: Q
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, d, h, g;
            if ((t ? t.ownerDocument || t : $) !== q && L(t), t = t || q, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (O && !r) {
                if (i = ye.exec(e))
                    if (s = i[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s), !o || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && R(t, o) && o.id === s) return n.push(o), n
                    } else {
                        if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)), n
                    }
                if (w.qsa && (!F || !F.test(e))) {
                    if (d = f = W, h = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = k(e), (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
                        h = xe.test(e) && c(t.parentNode) || t, g = l.join(",")
                    }
                    if (g) try {
                        return Z.apply(n, h.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[W] = !0, e
        }

        function i(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== V && e
        }

        function f() {}

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = I++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, s) {
                var a, u, l = [B, o];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (u = t[W] || (t[W] = {}), (a = u[r]) && a[0] === B && a[1] === o) return l[2] = a[2];
                            if (u[r] = l, l[2] = e(t, n, s)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s
        }

        function v(e, t, n, i, o, s) {
            return i && !i[W] && (i = v(i)), o && !o[W] && (o = v(o, s)), r(function(r, s, a, u) {
                var l, c, f, p = [],
                    d = [],
                    h = s.length,
                    v = r || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !r && t ? v : m(v, p, e, a, u),
                    x = n ? o || (r ? e : h || i) ? [] : s : y;
                if (n && n(y, x, a, u), i)
                    for (l = m(x, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? te.call(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else x = m(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : Z.apply(s, x)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function(e) {
                return e === t
            }, s, !0), l = d(function(e) {
                return te.call(t, e) > -1
            }, s, !0), c = [
                function(e, n, r) {
                    return !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
                }
            ]; i > a; a++)
                if (n = T.relative[e[a].type]) c = [d(h(c), n)];
                else {
                    if (n = T.filter[e[a].type].apply(null, e[a].matches), n[W]) {
                        for (r = ++a; i > r && !T.relative[e[r].type]; r++);
                        return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
            return h(c)
        }

        function x(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                s = function(r, s, a, u, l) {
                    var c, f, p, d = 0,
                        h = "0",
                        g = r && [],
                        v = [],
                        y = j,
                        x = r || o && T.find.TAG("*", l),
                        b = B += null == y ? 1 : Math.random() || .1,
                        w = x.length;
                    for (l && (j = s !== q && s); h !== w && null != (c = x[h]); h++) {
                        if (o && c) {
                            for (f = 0; p = e[f++];)
                                if (p(c, s, a)) {
                                    u.push(c);
                                    break
                                }
                            l && (B = b)
                        }
                        i && ((c = !p && c) && d--, r && g.push(c))
                    }
                    if (d += h, i && h !== d) {
                        for (f = 0; p = n[f++];) p(g, v, s, a);
                        if (r) {
                            if (d > 0)
                                for (; h--;) g[h] || v[h] || (v[h] = J.call(u));
                            v = m(v)
                        }
                        Z.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (B = b, j = y), g
                };
            return i ? r(s) : s
        }
        var b, w, T, C, N, k, E, S, j, D, A, L, q, H, O, F, P, M, R, W = "sizzle" + -new Date,
            $ = e.document,
            B = 0,
            I = 0,
            _ = n(),
            z = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (A = !0), 0
            },
            V = "undefined",
            Y = 1 << 31,
            G = {}.hasOwnProperty,
            Q = [],
            J = Q.pop,
            K = Q.push,
            Z = Q.push,
            ee = Q.slice,
            te = Q.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ie.replace("w", "w#"),
            se = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]",
            ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
            ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            le = new RegExp("^" + re + "*," + re + "*"),
            ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
            pe = new RegExp(ae),
            de = new RegExp("^" + oe + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xe = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
            Te = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Z.apply(Q = ee.call($.childNodes), $.childNodes), Q[$.childNodes.length].nodeType
        } catch (Ce) {
            Z = {
                apply: Q.length ? function(e, t) {
                    K.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, N = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : $,
                r = n.defaultView;
            return n !== q && 9 === n.nodeType && n.documentElement ? (q = n, H = n.documentElement, O = !N(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                L()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                L()
            })), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), w.getById = i(function(e) {
                return H.appendChild(e).id = W, !n.getElementsByName || !n.getElementsByName(W).length
            }), w.getById ? (T.find.ID = function(e, t) {
                if (typeof t.getElementById !== V && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== V && O ? t.getElementsByClassName(e) : void 0
            }, P = [], F = [], (w.qsa = ve.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && F.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || F.push(":checked")
            }), i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + re + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (w.matchesSelector = ve.test(M = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), P.push("!=", ae)
            }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(H.compareDocumentPosition), R = t || ve.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === $ && R($, e) ? -1 : t === n || t.ownerDocument === $ && R($, t) ? 1 : D ? te.call(D, e) - te.call(D, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var r, i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    u = [e],
                    l = [t];
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : D ? te.call(D, e) - te.call(D, t) : 0;
                if (o === a) return s(e, t);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (r = t; r = r.parentNode;) l.unshift(r);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
            }, n) : q
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== q && L(e), n = n.replace(fe, "='$1']"), !(!w.matchesSelector || !O || P && P.test(n) || F && F.test(n))) try {
                var r = M.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, q, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== q && L(e), R(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== q && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (A = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), A) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && _(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !u && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                for (c = m[W] || (m[W] = {}), l = c[e] || [], d = l[0] === B && l[1], p = l[0] === B && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)
                                    if (1 === f.nodeType && ++p && f === t) {
                                        c[e] = [B, d, p];
                                        break
                                    }
                            } else if (y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === B) p = l[1];
                            else
                                for (;
                                    (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [B, p]), f !== t)););
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = te.call(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = E(e.replace(ue, "$1"));
                    return i[W] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) T.pseudos[b] = a(b);
        for (b in {
            submit: !0,
            reset: !0
        }) T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function(e, n) {
            var r, i, o, s, a, u, l, c = z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = T.preFilter; a;) {
                (!r || (i = le.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ce.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), a = a.slice(r.length));
                for (s in T.filter)!(i = he[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }, E = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[W] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
                f = !r && k(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);)
                    if ((u = T.find[a]) && (r = u(s.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && p(o), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return (l || E(e, f))(r, t, !O, n, xe.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = W.split("").sort(U).join("") === W, w.detectDuplicates = !!A, L(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
    var oe = Z.expr.match.needsContext,
        se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ae = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (Z.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = Z.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), se.test(n[1]) && Z.isPlainObject(t))
                        for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
        };
    ce.prototype = Z.fn, ue = Z(J);
    var fe = /^(?:parents|prev(?:Until|All))/,
        pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && Z(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function(e) {
            var t = Z(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Z.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Z.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function(e, t) {
        Z.fn[e] = function(n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pe[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var de = /\S+/g,
        he = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? he[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, s, a, u = [],
            l = !e.once && [],
            c = function(o) {
                for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && s > a; a++)
                    if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function o(t) {
                            Z.each(t, function(t, n) {
                                var r = Z.type(n);
                                "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), r ? s = u.length : t && (i = n, c(t))
                    }
                    return this
                },
                remove: function() {
                    return u && Z.each(arguments, function(e, t) {
                        for (var n;
                            (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (s >= n && s--, a >= n && a--)
                    }), this
                },
                has: function(e) {
                    return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], s = 0, this
                },
                disable: function() {
                    return u = l = t = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, t || f.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return f
    }, Z.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(t, function(t, o) {
                                var s = Z.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Z.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, Z.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = _.call(arguments),
                s = o.length,
                a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : Z.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? _.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var ge;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function(t) {
        return ge || (ge = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t)
    }, Z.ready.promise();
    var me = Z.access = function(e, t, n, r, i, o, s) {
        var a = 0,
            u = e.length,
            l = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (a in n) Z.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(Z(e), n)
        })), t))
            for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function(e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e),
                s = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(de) || [])), n = r.length;
                for (; n--;) delete s[r[n]]
            }
        },
        hasData: function(e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a,
        ye = new a,
        xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        be = /([A-Z])/g;
    Z.extend({
        hasData: function(e) {
            return ye.hasData(e) || ve.hasData(e)
        },
        data: function(e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function(e, t) {
            ye.remove(e, t)
        },
        _data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function(e, t) {
            ve.remove(e, t)
        }
    }), Z.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ye.set(this, e)
            }) : me(this, function(t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = ye.get(o, e), void 0 !== n) return n;
                    if (n = ye.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ye.get(this, r);
                    ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ye.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = Z._queueHooks(e, t),
                s = function() {
                    Z.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = Z.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ve.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Te = ["Top", "Right", "Bottom", "Left"],
        Ce = function(e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        },
        Ne = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = J.createDocumentFragment(),
            t = e.appendChild(J.createElement("div")),
            n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ke = "undefined";
    Q.focusinBubbles = "onfocusin" in e;
    var Ee = /^key/,
        Se = /^(?:mouse|pointer|contextmenu)|click/,
        je = /^(?:focusinfocus|focusoutblur)$/,
        De = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ve.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                    return typeof Z !== ke && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(de) || [""], l = t.length; l--;) a = De.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, c = Z.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Z.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ve.hasData(e) && ve.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(de) || [""], l = t.length; l--;)
                    if (a = De.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                        for (f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u) Z.event.remove(e, d + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || J],
                d = G.call(t, "type") ? t.type : t,
                h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !je.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || d, je.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, a && (r[l] = a)), t.result
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, s = [],
                a = _.call(arguments),
                u = (ve.get(this, "events") || {})[e.type] || [],
                l = Z.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = Z.event.handlers.call(this, e, u), t = 0;
                    (i = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[Z.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Se.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Q.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = ve.access(r, t);
                i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = ve.access(r, t) - 1;
                i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
            }
        }
    }), Z.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return Z().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Le = /<([\w:]+)/,
        qe = /<|&#?\w+;/,
        He = /<(?:script|style|link)/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Fe = /^$|\/(?:java|ecma)script/i,
        Pe = /^true\/(.*)/,
        Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Re = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, Z.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = Z.contains(e.ownerDocument, e);
            if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (s = v(a), o = v(e), r = 0, i = o.length; i > r; r++) y(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || v(e), s = s || v(a), r = 0, i = o.length; i > r; r++) m(o[r], s[r]);
                else m(e, a);
            return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)
                if (i = e[p], i || 0 === i)
                    if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
                    else if (qe.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (Le.exec(i) || ["", ""])[1].toLowerCase(), a = Re[s] || Re._default, o.innerHTML = a[1] + i.replace(Ae, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];)
                if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n))
                    for (l = 0; i = o[l++];) Fe.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (Z.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
                    if (t.events)
                        for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    ve.cache[i] && delete ve.cache[i]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(e) {
            return me(this, function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return Z.clone(this, e, t)
            })
        },
        html: function(e) {
            return me(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !He.test(e) && !Re[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ae, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = z.apply([], e);
            var n, r, i, o, s, a, u = 0,
                l = this.length,
                c = this,
                f = l - 1,
                p = e[0],
                g = Z.isFunction(p);
            if (g || l > 1 && "string" == typeof p && !Q.checkClone && Oe.test(p)) return this.each(function(n) {
                var r = c.eq(n);
                g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Z.map(v(n, "script"), d), o = i.length; l > u; u++) s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
                if (o)
                    for (a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++) s = i[u], Fe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Me, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), Z(i[s])[t](n), X.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We, $e = {},
        Be = /^margin/,
        Ie = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
        _e = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }
        var n, r, i = J.documentElement,
            o = J.createElement("div"),
            s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(Q, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), t
            }
        }))
    }(), Z.swap = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = s[o];
        return i
    };
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = new RegExp("^(" + we + ")(.*)$", "i"),
        Ue = new RegExp("^([+-])=(" + we + ")", "i"),
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ye = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Z.camelCase(t),
                    u = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }), Z.each(["height", "width"], function(e, t) {
        Z.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function() {
                    return E(e, t, r)
                }) : E(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && _e(e);
                return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Z.cssHooks.marginRight = T(Q.reliableMarginRight, function(e, t) {
        return t ? Z.swap(e, {
            display: "inline-block"
        }, w, [e, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Z.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Be.test(e) || (Z.cssHooks[e + t].set = N)
    }), Z.fn.extend({
        css: function(e, t) {
            return me(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (Z.isArray(t)) {
                    for (r = _e(e), i = t.length; i > s; s++) o[t[s]] = Z.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return S(this, !0)
        },
        hide: function() {
            return S(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ce(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = j, j.prototype = {
        constructor: j,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = j.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = j.prototype.init, Z.fx.step = {};
    var Qe, Je, Ke = /^(?:toggle|show|hide)$/,
        Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [q],
        nt = {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = Ze.exec(t),
                        o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
                        s = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)),
                        a = 1,
                        u = 20;
                    if (s && s[3] !== o) {
                        o = o || s[3], i = i || [], s = +r || 1;
                        do a = a || ".5", s /= a, Z.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
                    }
                    return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
                }
            ]
        };
    Z.Animation = Z.extend(O, {
            tweener: function(e, t) {
                Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), Z.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? Z.extend({}, e) : {
                complete: n || !n && t || Z.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Z.isFunction(t) && t
            };
            return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
            }, r
        }, Z.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Ce).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = Z.isEmptyObject(e),
                    o = Z.speed(t, n, r),
                    s = function() {
                        var t = O(this, Z.extend({}, e), o);
                        (i || ve.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = Z.timers,
                        s = ve.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && et.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && Z.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ve.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = Z.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(e, t) {
            var n = Z.fn[t];
            Z.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
            }
        }), Z.each({
            slideDown: A("show"),
            slideUp: A("hide"),
            slideToggle: A("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Z.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Z.timers = [], Z.fx.tick = function() {
            var e, t = 0,
                n = Z.timers;
            for (Qe = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Z.fx.stop(), Qe = void 0
        }, Z.fx.timer = function(e) {
            Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(Je), Je = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function(e, t) {
            return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = J.createElement("input"),
                t = J.createElement("select"),
                n = t.appendChild(J.createElement("option"));
            e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
        }();
    var rt, it, ot = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return me(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === ke ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(de);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), it = {
        set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ot[t] || Z.find.attr;
        ot[t] = function(e, t, r) {
            var i, o;
            return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return me(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Q.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(de) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = Z.trim(r), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(de) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = Z(this), o = e.match(de) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ut = /\r/g;
    Z.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = Z.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)) : void 0
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, Q.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var lt = Z.now(),
        ct = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var ft, pt, dt = /#.*$/,
        ht = /([?&])_=[^&]*/,
        gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        vt = /^(?:GET|HEAD)$/,
        yt = /^\/\//,
        xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        bt = {},
        wt = {},
        Tt = "*/".concat("*");
    try {
        pt = location.href
    } catch (Ct) {
        pt = J.createElement("a"), pt.href = "", pt = pt.href
    }
    ft = xt.exec(pt.toLowerCase()) || [], Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pt,
            type: "GET",
            isLocal: mt.test(ft[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Tt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? M(M(e, Z.ajaxSettings), t) : M(Z.ajaxSettings, e)
        },
        ajaxPrefilter: F(bt),
        ajaxTransport: F(wt),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var u, c, v, y, b, T = t;
                2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = R(f, w, n)), y = W(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t),
                p = f.context || f,
                d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
                h = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                m = f.statusCode || {},
                v = {},
                y = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!s)
                                for (s = {}; t = gt.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || pt) + "").replace(dt, "").replace(yt, ft[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = xt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === ft[1] && u[2] === ft[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (ft[3] || ("http:" === ft[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(bt, f, t, w), 2 === x) return w;
            l = f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !vt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ct.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = ht.test(i) ? i.replace(ht, "$1_=" + lt++) : i + (ct.test(i) ? "&" : "?") + "_=" + lt++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Tt + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
            b = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            }) w[c](f[c]);
            if (r = P(wt, f, t, w)) {
                w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, r.send(v, n)
                } catch (T) {
                    if (!(2 > x)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function(e, t) {
        Z[t] = function(e, n, r, i) {
            return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Z._evalUrl = function(e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(Z.isFunction(e) ? function(t) {
                Z(this).wrapInner(e.call(this, t))
            } : function() {
                var t = Z(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function(e) {
        return !Z.expr.filters.hidden(e)
    };
    var Nt = /%20/g,
        kt = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) $(n, e[n], t, i);
        return r.join("&").replace(Nt, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && jt.test(this.nodeName) && !St.test(e) && (this.checked || !Ne.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Dt = 0,
        At = {},
        Lt = {
            0: 200,
            1223: 204
        },
        qt = Z.ajaxSettings.xhr();
    e.ActiveXObject && Z(e).on("unload", function() {
        for (var e in At) At[e]()
    }), Q.cors = !!qt && "withCredentials" in qt, Q.ajax = qt = !!qt, Z.ajaxTransport(function(e) {
        var t;
        return Q.cors || qt && !e.crossDomain ? {
            send: function(n, r) {
                var i, o = e.xhr(),
                    s = ++Dt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete At[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Lt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = At[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t) throw a
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ht = [],
        Ot = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ht.pop() || Z.expando + "_" + lt++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (Ot.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ot, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || Z.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Ht.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var r = se.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var Ft = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && Ft) return Ft.apply(this, arguments);
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Pt = e.document.documentElement;
    Z.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = Z.css(e, "position"),
                f = Z(e),
                p = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, Z.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            return o ? (t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = B(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Z.css(n, "marginTop", !0),
                    left: t.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Pt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || Pt
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function(i) {
            return me(this, function(t, i, o) {
                var s = B(t);
                return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(e, t) {
        Z.cssHooks[t] = T(Q.pixelPosition, function(e, n) {
            return n ? (n = w(e, t), Ie.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            Z.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return me(this, function(t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Mt = e.jQuery,
        Rt = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Rt), t && e.jQuery === Z && (e.jQuery = Mt), Z
    }, typeof t === ke && (e.jQuery = e.$ = Z), Z
});
var cr = {};
cr.plugins_ = {}, cr.behaviors = {}, "function" != typeof Object.getPrototypeOf && ("object" == typeof "test".__proto__ ? Object.getPrototypeOf = function(t) {
        return t.__proto__
    } : Object.getPrototypeOf = function(t) {
        return t.constructor.prototype
    }),
    function() {
        function t(t, e) {
            this.x = t, this.y = e, cr.seal(this)
        }

        function e(t, e, i, s) {
            this.set(t, e, i, s), cr.seal(this)
        }

        function i() {
            this.tlx = 0, this.tly = 0, this.trx = 0, this.try_ = 0, this.brx = 0, this.bry = 0, this.blx = 0, this.bly = 0, cr.seal(this)
        }

        function s(t, e, i, s) {
            e > t ? s > i ? (m = i > t ? t : i, _ = e > s ? e : s) : (m = s > t ? t : s, _ = e > i ? e : i) : s > i ? (m = i > e ? e : i, _ = t > s ? t : s) : (m = s > e ? e : s, _ = t > i ? t : i)
        }

        function n() {
            this.s = null, this.items = null, this.item_count = 0, T && (this.s = new Set), this.values_cache = [], this.cache_valid = !0, cr.seal(this)
        }

        function r(t) {
            O[A++] = t
        }

        function o() {
            this.c = 0, this.y = 0, this.t = 0, this.sum = 0, cr.seal(this)
        }

        function a(t) {
            this.pts_cache = [], this.bboxLeft = 0, this.bboxTop = 0, this.bboxRight = 0, this.bboxBottom = 0, this.convexpolys = null, this.set_pts(t), cr.seal(this)
        }

        function h(t, e) {
            this.cellwidth = t, this.cellheight = e, this.cells = {}
        }

        function c(t, e) {
            this.cellwidth = t, this.cellheight = e, this.cells = {}
        }

        function l(t, e, i) {
            var s;
            return h.prototype.totalCellCount++, k.length ? (s = k.pop(), s.grid = t, s.x = e, s.y = i, s) : new cr.GridCell(t, e, i)
        }

        function u(t) {
            h.prototype.totalCellCount--, t.objects.clear(), k.length < 1e3 && k.push(t)
        }

        function p(t, e, i) {
            this.grid = t, this.x = e, this.y = i, this.objects = new cr.ObjectSet
        }

        function d(t, e, i) {
            var s;
            return c.prototype.totalCellCount++, E.length ? (s = E.pop(), s.grid = t, s.x = e, s.y = i, s) : new cr.RenderCell(t, e, i)
        }

        function f(t) {
            c.prototype.totalCellCount--, t.reset(), E.length < 1e3 && E.push(t)
        }

        function g(t, e, i) {
            this.grid = t, this.x = e, this.y = i, this.objects = [], this.is_sorted = !0, this.pending_removal = new cr.ObjectSet, this.any_pending_removal = !1
        }

        function y(t, e) {
            return t.zindex - e.zindex
        }
        cr.logexport = function(t) {
            window.console && window.console.log && window.console.log(t)
        }, cr.logerror = function(t) {
            window.console && window.console.error && window.console.error(t)
        }, cr.seal = function(t) {
            return t
        }, cr.freeze = function(t) {
            return t
        }, cr.is_undefined = function(t) {
            return "undefined" == typeof t
        }, cr.is_number = function(t) {
            return "number" == typeof t
        }, cr.is_string = function(t) {
            return "string" == typeof t
        }, cr.isPOT = function(t) {
            return t > 0 && 0 === (t - 1 & t)
        }, cr.nextHighestPowerOfTwo = function(t) {
            --t;
            for (var e = 1; 32 > e; e <<= 1) t |= t >> e;
            return t + 1
        }, cr.abs = function(t) {
            return 0 > t ? -t : t
        }, cr.max = function(t, e) {
            return t > e ? t : e
        }, cr.min = function(t, e) {
            return e > t ? t : e
        }, cr.PI = Math.PI, cr.round = function(t) {
            return t + .5 | 0
        }, cr.floor = function(t) {
            return t >= 0 ? 0 | t : (0 | t) - 1
        }, cr.ceil = function(t) {
            var e = 0 | t;
            return e === t ? e : e + 1
        }, t.prototype.offset = function(t, e) {
            return this.x += t, this.y += e, this
        }, t.prototype.mul = function(t, e) {
            return this.x *= t, this.y *= e, this
        }, cr.vector2 = t, cr.segments_intersect = function(t, e, i, s, n, r, o, a) {
            var h, c, l, u, p, d, f, g;
            if (i > t ? (c = t, h = i) : (c = i, h = t), o > n ? (d = n, p = o) : (d = o, p = n), d > h || c > p) return !1;
            if (s > e ? (u = e, l = s) : (u = s, l = e), a > r ? (g = r, f = a) : (g = a, f = r), g > l || u > f) return !1;
            var y = n - t + o - i,
                m = r - e + a - s,
                _ = i - t,
                v = s - e,
                b = o - n,
                w = a - r,
                x = cr.abs(v * b - w * _),
                S = b * m - w * y;
            if (cr.abs(S) > x) return !1;
            var T = _ * m - v * y;
            return cr.abs(T) <= x
        }, e.prototype.set = function(t, e, i, s) {
            this.left = t, this.top = e, this.right = i, this.bottom = s
        }, e.prototype.copy = function(t) {
            this.left = t.left, this.top = t.top, this.right = t.right, this.bottom = t.bottom
        }, e.prototype.width = function() {
            return this.right - this.left
        }, e.prototype.height = function() {
            return this.bottom - this.top
        }, e.prototype.offset = function(t, e) {
            return this.left += t, this.top += e, this.right += t, this.bottom += e, this
        }, e.prototype.normalize = function() {
            var t = 0;
            this.left > this.right && (t = this.left, this.left = this.right, this.right = t), this.top > this.bottom && (t = this.top, this.top = this.bottom, this.bottom = t)
        }, e.prototype.intersects_rect = function(t) {
            return !(t.right < this.left || t.bottom < this.top || t.left > this.right || t.top > this.bottom)
        }, e.prototype.intersects_rect_off = function(t, e, i) {
            return !(t.right + e < this.left || t.bottom + i < this.top || t.left + e > this.right || t.top + i > this.bottom)
        }, e.prototype.contains_pt = function(t, e) {
            return t >= this.left && t <= this.right && e >= this.top && e <= this.bottom
        }, e.prototype.equals = function(t) {
            return this.left === t.left && this.top === t.top && this.right === t.right && this.bottom === t.bottom
        }, cr.rect = e, i.prototype.set_from_rect = function(t) {
            this.tlx = t.left, this.tly = t.top, this.trx = t.right, this.try_ = t.top, this.brx = t.right, this.bry = t.bottom, this.blx = t.left, this.bly = t.bottom
        }, i.prototype.set_from_rotated_rect = function(t, e) {
            if (0 === e) this.set_from_rect(t);
            else {
                var i = Math.sin(e),
                    s = Math.cos(e),
                    n = t.left * i,
                    r = t.top * i,
                    o = t.right * i,
                    a = t.bottom * i,
                    h = t.left * s,
                    c = t.top * s,
                    l = t.right * s,
                    u = t.bottom * s;
                this.tlx = h - r, this.tly = c + n, this.trx = l - r, this.try_ = c + o, this.brx = l - a, this.bry = u + o, this.blx = h - a, this.bly = u + n
            }
        }, i.prototype.offset = function(t, e) {
            return this.tlx += t, this.tly += e, this.trx += t, this.try_ += e, this.brx += t, this.bry += e, this.blx += t, this.bly += e, this
        };
        var m = 0,
            _ = 0;
        i.prototype.bounding_box = function(t) {
            s(this.tlx, this.trx, this.brx, this.blx), t.left = m, t.right = _, s(this.tly, this.try_, this.bry, this.bly), t.top = m, t.bottom = _
        }, i.prototype.contains_pt = function(t, e) {
            var i = this.tlx,
                s = this.tly,
                n = this.trx - i,
                r = this.try_ - s,
                o = this.brx - i,
                a = this.bry - s,
                h = t - i,
                c = e - s,
                l = n * n + r * r,
                u = n * o + r * a,
                p = n * h + r * c,
                d = o * o + a * a,
                f = o * h + a * c,
                g = 1 / (l * d - u * u),
                y = (d * p - u * f) * g,
                m = (l * f - u * p) * g;
            if (y >= 0 && m > 0 && 1 > y + m) return !0;
            n = this.blx - i, r = this.bly - s;
            var l = n * n + r * r,
                u = n * o + r * a,
                p = n * h + r * c;
            return g = 1 / (l * d - u * u), y = (d * p - u * f) * g, m = (l * f - u * p) * g, y >= 0 && m > 0 && 1 > y + m
        }, i.prototype.at = function(t, e) {
            if (e) switch (t) {
                case 0:
                    return this.tlx;
                case 1:
                    return this.trx;
                case 2:
                    return this.brx;
                case 3:
                    return this.blx;
                case 4:
                    return this.tlx;
                default:
                    return this.tlx
            } else switch (t) {
                case 0:
                    return this.tly;
                case 1:
                    return this.try_;
                case 2:
                    return this.bry;
                case 3:
                    return this.bly;
                case 4:
                    return this.tly;
                default:
                    return this.tly
            }
        }, i.prototype.midX = function() {
            return (this.tlx + this.trx + this.brx + this.blx) / 4
        }, i.prototype.midY = function() {
            return (this.tly + this.try_ + this.bry + this.bly) / 4
        }, i.prototype.intersects_segment = function(t, e, i, s) {
            if (this.contains_pt(t, e) || this.contains_pt(i, s)) return !0;
            var n, r, o, a, h;
            for (h = 0; 4 > h; h++)
                if (n = this.at(h, !0), r = this.at(h, !1), o = this.at(h + 1, !0), a = this.at(h + 1, !1), cr.segments_intersect(t, e, i, s, n, r, o, a)) return !0;
            return !1
        }, i.prototype.intersects_quad = function(t) {
            var e = t.midX(),
                i = t.midY();
            if (this.contains_pt(e, i)) return !0;
            if (e = this.midX(), i = this.midY(), t.contains_pt(e, i)) return !0;
            var s, n, r, o, a, h, c, l, u, p;
            for (u = 0; 4 > u; u++)
                for (p = 0; 4 > p; p++)
                    if (s = this.at(u, !0), n = this.at(u, !1), r = this.at(u + 1, !0), o = this.at(u + 1, !1), a = t.at(p, !0), h = t.at(p, !1), c = t.at(p + 1, !0), l = t.at(p + 1, !1), cr.segments_intersect(s, n, r, o, a, h, c, l)) return !0;
            return !1
        }, cr.quad = i, cr.RGB = function(t, e, i) {
            return Math.max(Math.min(t, 255), 0) | Math.max(Math.min(e, 255), 0) << 8 | Math.max(Math.min(i, 255), 0) << 16
        }, cr.GetRValue = function(t) {
            return 255 & t
        }, cr.GetGValue = function(t) {
            return (65280 & t) >> 8
        }, cr.GetBValue = function(t) {
            return (16711680 & t) >> 16
        }, cr.shallowCopy = function(t, e, i) {
            var s;
            for (s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
            return t
        }, cr.arrayRemove = function(t, e) {
            var i, s;
            if (e = cr.floor(e), !(0 > e || e >= t.length)) {
                for (i = e, s = t.length - 1; s > i; i++) t[i] = t[i + 1];
                cr.truncateArray(t, s)
            }
        }, cr.truncateArray = function(t, e) {
            t.length = e
        }, cr.clearArray = function(t) {
            cr.truncateArray(t, 0)
        }, cr.shallowAssignArray = function(t, e) {
            cr.clearArray(t);
            var i, s;
            for (i = 0, s = e.length; s > i; ++i) t[i] = e[i]
        }, cr.appendArray = function(t, e) {
            t.push.apply(t, e)
        }, cr.fastIndexOf = function(t, e) {
            var i, s;
            for (i = 0, s = t.length; s > i; ++i)
                if (t[i] === e) return i;
            return -1
        }, cr.arrayFindRemove = function(t, e) {
            var i = cr.fastIndexOf(t, e); - 1 !== i && cr.arrayRemove(t, i)
        }, cr.clamp = function(t, e, i) {
            return e > t ? e : t > i ? i : t
        }, cr.to_radians = function(t) {
            return t / (180 / cr.PI)
        }, cr.to_degrees = function(t) {
            return t * (180 / cr.PI)
        }, cr.clamp_angle_degrees = function(t) {
            return t %= 360, 0 > t && (t += 360), t
        }, cr.clamp_angle = function(t) {
            return t %= 2 * cr.PI, 0 > t && (t += 2 * cr.PI), t
        }, cr.to_clamped_degrees = function(t) {
            return cr.clamp_angle_degrees(cr.to_degrees(t))
        }, cr.to_clamped_radians = function(t) {
            return cr.clamp_angle(cr.to_radians(t))
        }, cr.angleTo = function(t, e, i, s) {
            var n = i - t,
                r = s - e;
            return Math.atan2(r, n)
        }, cr.angleDiff = function(t, e) {
            if (t === e) return 0;
            var i = Math.sin(t),
                s = Math.cos(t),
                n = Math.sin(e),
                r = Math.cos(e),
                o = i * n + s * r;
            return o >= 1 ? 0 : -1 >= o ? cr.PI : Math.acos(o)
        }, cr.angleRotate = function(t, e, i) {
            var s = Math.sin(t),
                n = Math.cos(t),
                r = Math.sin(e),
                o = Math.cos(e);
            return Math.acos(s * r + n * o) > i ? n * r - s * o > 0 ? cr.clamp_angle(t + i) : cr.clamp_angle(t - i) : cr.clamp_angle(e)
        }, cr.angleClockwise = function(t, e) {
            var i = Math.sin(t),
                s = Math.cos(t),
                n = Math.sin(e),
                r = Math.cos(e);
            return 0 >= s * n - i * r
        }, cr.rotatePtAround = function(t, e, i, s, n, r) {
            if (0 === i) return r ? t : e;
            var o = Math.sin(i),
                a = Math.cos(i);
            t -= s, e -= n;
            var h = t * o,
                c = e * o,
                l = t * a,
                u = e * a;
            return t = l - c, e = u + h, t += s, e += n, r ? t : e
        }, cr.distanceTo = function(t, e, i, s) {
            var n = i - t,
                r = s - e;
            return Math.sqrt(n * n + r * r)
        }, cr.xor = function(t, e) {
            return !t != !e
        }, cr.lerp = function(t, e, i) {
            return t + (e - t) * i
        }, cr.unlerp = function(t, e, i) {
            return t === e ? 0 : (i - t) / (e - t)
        }, cr.anglelerp = function(t, e, i) {
            var s = cr.angleDiff(t, e);
            return cr.angleClockwise(e, t) ? t + s * i : t - s * i
        }, cr.qarp = function(t, e, i, s) {
            return cr.lerp(cr.lerp(t, e, s), cr.lerp(e, i, s), s)
        }, cr.cubic = function(t, e, i, s, n) {
            return cr.lerp(cr.qarp(t, e, i, n), cr.qarp(e, i, s, n), n)
        }, cr.cosp = function(t, e, i) {
            return (t + e + (t - e) * Math.cos(i * Math.PI)) / 2
        }, cr.hasAnyOwnProperty = function(t) {
            var e;
            for (e in t)
                if (t.hasOwnProperty(e)) return !0;
            return !1
        }, cr.wipe = function(t) {
            var e;
            for (e in t) t.hasOwnProperty(e) && delete t[e]
        };
        var v = +new Date;
        cr.performance_now = function() {
            if ("undefined" != typeof window.performance) {
                var t = window.performance;
                if ("undefined" != typeof t.now) return t.now();
                if ("undefined" != typeof t.webkitNow) return t.webkitNow();
                if ("undefined" != typeof t.mozNow) return t.mozNow();
                if ("undefined" != typeof t.msNow) return t.msNow()
            }
            return Date.now() - v
        };
        var b = !1,
            w = !1,
            x = !1,
            S = !1;
        "undefined" != typeof window && (b = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), w = !b && /safari/i.test(navigator.userAgent), x = /(iphone|ipod|ipad)/i.test(navigator.userAgent), S = window.c2ejecta);
        var T = !w && !S && !x && "undefined" != typeof Set && "undefined" != typeof Set.prototype.forEach;
        n.prototype.contains = function(t) {
            return this.isEmpty() ? !1 : T ? this.s.has(t) : this.items && this.items.hasOwnProperty(t)
        }, n.prototype.add = function(t) {
            if (T) this.s.has(t) || (this.s.add(t), this.cache_valid = !1);
            else {
                var e = t.toString(),
                    i = this.items;
                i ? i.hasOwnProperty(e) || (i[e] = t, this.item_count++, this.cache_valid = !1) : (this.items = {}, this.items[e] = t, this.item_count = 1, this.cache_valid = !1)
            }
        }, n.prototype.remove = function(t) {
            if (!this.isEmpty())
                if (T) this.s.has(t) && (this.s["delete"](t), this.cache_valid = !1);
                else if (this.items) {
                var e = t.toString(),
                    i = this.items;
                i.hasOwnProperty(e) && (delete i[e], this.item_count--, this.cache_valid = !1)
            }
        }, n.prototype.clear = function() {
            this.isEmpty() || (T ? this.s.clear() : (this.items = null, this.item_count = 0), cr.clearArray(this.values_cache), this.cache_valid = !0)
        }, n.prototype.isEmpty = function() {
            return 0 === this.count()
        }, n.prototype.count = function() {
            return T ? this.s.size : this.item_count
        };
        var O = null,
            A = 0;
        n.prototype.update_cache = function() {
            if (!this.cache_valid) {
                if (T) cr.clearArray(this.values_cache), O = this.values_cache, A = 0, this.s.forEach(r), O = null, A = 0;
                else {
                    var t = this.values_cache;
                    cr.clearArray(t);
                    var e, i = 0,
                        s = this.items;
                    if (s)
                        for (e in s) s.hasOwnProperty(e) && (t[i++] = s[e])
                }
                this.cache_valid = !0
            }
        }, n.prototype.valuesRef = function() {
            return this.update_cache(), this.values_cache
        }, cr.ObjectSet = n;
        var C = new cr.ObjectSet;
        cr.removeArrayDuplicates = function(t) {
            var e, i;
            for (e = 0, i = t.length; i > e; ++e) C.add(t[e]);
            cr.shallowAssignArray(t, C.valuesRef()), C.clear()
        }, cr.arrayRemoveAllFromObjectSet = function(t, e) {
            T ? cr.arrayRemoveAll_set(t, e.s) : cr.arrayRemoveAll_arr(t, e.valuesRef())
        }, cr.arrayRemoveAll_set = function(t, e) {
            var i, s, n, r;
            for (i = 0, s = 0, n = t.length; n > i; ++i) r = t[i], e.has(r) || (t[s++] = r);
            cr.truncateArray(t, s)
        }, cr.arrayRemoveAll_arr = function(t, e) {
            var i, s, n, r;
            for (i = 0, s = 0, n = t.length; n > i; ++i) r = t[i], -1 === cr.fastIndexOf(e, r) && (t[s++] = r);
            cr.truncateArray(t, s)
        }, o.prototype.add = function(t) {
            this.y = t - this.c, this.t = this.sum + this.y, this.c = this.t - this.sum - this.y, this.sum = this.t
        }, o.prototype.reset = function() {
            this.c = 0, this.y = 0, this.t = 0, this.sum = 0
        }, cr.KahanAdder = o, cr.regexp_escape = function(t) {
            return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        }, a.prototype.set_pts = function(t) {
            this.pts_array = t, this.pts_count = t.length / 2, this.pts_cache.length = t.length, this.cache_width = -1, this.cache_height = -1, this.cache_angle = 0
        }, a.prototype.is_empty = function() {
            return !this.pts_array.length
        }, a.prototype.update_bbox = function() {
            for (var t, e, i, s = this.pts_cache, n = s[0], r = n, o = s[1], a = o, h = 1, c = this.pts_count; c > h; ++h) i = 2 * h, t = s[i], e = s[i + 1], n > t && (n = t), t > r && (r = t), o > e && (o = e), e > a && (a = e);
            this.bboxLeft = n, this.bboxRight = r, this.bboxTop = o, this.bboxBottom = a
        }, a.prototype.set_from_rect = function(t, e, i) {
            this.pts_cache.length = 8, this.pts_count = 4;
            var s = this.pts_cache;
            s[0] = t.left - e, s[1] = t.top - i, s[2] = t.right - e, s[3] = t.top - i, s[4] = t.right - e, s[5] = t.bottom - i, s[6] = t.left - e, s[7] = t.bottom - i, this.cache_width = t.right - t.left, this.cache_height = t.bottom - t.top, this.update_bbox()
        }, a.prototype.set_from_quad = function(t, e, i, s, n) {
            this.pts_cache.length = 8, this.pts_count = 4;
            var r = this.pts_cache;
            r[0] = t.tlx - e, r[1] = t.tly - i, r[2] = t.trx - e, r[3] = t.try_ - i, r[4] = t.brx - e, r[5] = t.bry - i, r[6] = t.blx - e, r[7] = t.bly - i, this.cache_width = s, this.cache_height = n, this.update_bbox()
        }, a.prototype.set_from_poly = function(t) {
            this.pts_count = t.pts_count, cr.shallowAssignArray(this.pts_cache, t.pts_cache), this.bboxLeft = t.bboxLeft, this.bboxTop - t.bboxTop, this.bboxRight = t.bboxRight, this.bboxBottom = t.bboxBottom
        }, a.prototype.cache_poly = function(t, e, i) {
            if (this.cache_width !== t || this.cache_height !== e || this.cache_angle !== i) {
                this.cache_width = t, this.cache_height = e, this.cache_angle = i;
                var s, n, r, o, a, h, c = 0,
                    l = 1,
                    u = this.pts_array,
                    p = this.pts_cache;
                for (0 !== i && (c = Math.sin(i), l = Math.cos(i)), s = 0, o = this.pts_count; o > s; s++) n = 2 * s, r = n + 1, a = u[n] * t, h = u[r] * e, p[n] = a * l - h * c, p[r] = h * l + a * c;
                this.update_bbox()
            }
        }, a.prototype.contains_pt = function(t, e) {
            var i = this.pts_cache;
            if (t === i[0] && e === i[1]) return !0;
            var s, n, r, o, a, h, c, l = this.pts_count,
                u = this.bboxLeft - 110,
                p = this.bboxTop - 101,
                d = this.bboxRight + 131,
                f = this.bboxBottom + 120,
                g = 0,
                y = 0;
            for (s = 0; l > s; s++) n = 2 * s, r = (s + 1) % l * 2, o = i[n], a = i[n + 1], h = i[r], c = i[r + 1], cr.segments_intersect(u, p, t, e, o, a, h, c) && g++, cr.segments_intersect(d, f, t, e, o, a, h, c) && y++;
            return g % 2 === 1 || y % 2 === 1
        }, a.prototype.intersects_poly = function(t, e, i) {
            var s = t.pts_cache,
                n = this.pts_cache;
            if (this.contains_pt(s[0] + e, s[1] + i)) return !0;
            if (t.contains_pt(n[0] - e, n[1] - i)) return !0;
            var r, o, a, h, c, l, u, p, d, f, g, y, m, _, v, b;
            for (r = 0, h = this.pts_count; h > r; r++)
                for (o = 2 * r, a = (r + 1) % h * 2, d = n[o], f = n[o + 1], g = n[a], y = n[a + 1], c = 0, p = t.pts_count; p > c; c++)
                    if (l = 2 * c, u = (c + 1) % p * 2, m = s[l] + e, _ = s[l + 1] + i, v = s[u] + e, b = s[u + 1] + i, cr.segments_intersect(d, f, g, y, m, _, v, b)) return !0;
            return !1
        }, a.prototype.intersects_segment = function(t, e, i, s, n, r) {
            var o = this.pts_cache;
            if (this.contains_pt(i - t, s - e)) return !0;
            var a, h, c, l, u, p, d, f;
            for (a = 0, h = this.pts_count; h > a; a++)
                if (c = 2 * a, l = (a + 1) % h * 2, u = o[c] + t, p = o[c + 1] + e, d = o[l] + t, f = o[l + 1] + e, cr.segments_intersect(i, s, n, r, u, p, d, f)) return !0;
            return !1
        }, a.prototype.mirror = function(t) {
            var e, i, s;
            for (e = 0, i = this.pts_count; i > e; ++e) s = 2 * e, this.pts_cache[s] = 2 * t - this.pts_cache[s]
        }, a.prototype.flip = function(t) {
            var e, i, s;
            for (e = 0, i = this.pts_count; i > e; ++e) s = 2 * e + 1, this.pts_cache[s] = 2 * t - this.pts_cache[s]
        }, a.prototype.diag = function() {
            var t, e, i, s, n;
            for (t = 0, e = this.pts_count; e > t; ++t) i = 2 * t, s = i + 1, n = this.pts_cache[i], this.pts_cache[i] = this.pts_cache[s], this.pts_cache[s] = n
        }, cr.CollisionPoly = a, h.prototype.totalCellCount = 0, h.prototype.getCell = function(t, e, i) {
            var s, n = this.cells[t];
            return n ? (s = n[e], s ? s : i ? (s = l(this, t, e), this.cells[t][e] = s, s) : null) : i ? (s = l(this, t, e), this.cells[t] = {}, this.cells[t][e] = s, s) : null
        }, h.prototype.XToCell = function(t) {
            return cr.floor(t / this.cellwidth)
        }, h.prototype.YToCell = function(t) {
            return cr.floor(t / this.cellheight)
        }, h.prototype.update = function(t, e, i) {
            var s, n, r, o, a;
            if (e)
                for (s = e.left, n = e.right; n >= s; ++s)
                    for (r = e.top, o = e.bottom; o >= r; ++r) i && i.contains_pt(s, r) || (a = this.getCell(s, r, !1), a && (a.remove(t), a.isEmpty() && (u(a), this.cells[s][r] = null)));
            if (i)
                for (s = i.left, n = i.right; n >= s; ++s)
                    for (r = i.top, o = i.bottom; o >= r; ++r) e && e.contains_pt(s, r) || this.getCell(s, r, !0).insert(t)
        }, h.prototype.queryRange = function(t, e) {
            var i, s, n, r, o, a;
            for (i = this.XToCell(t.left), n = this.YToCell(t.top), s = this.XToCell(t.right), o = this.YToCell(t.bottom); s >= i; ++i)
                for (r = n; o >= r; ++r) a = this.getCell(i, r, !1), a && a.dump(e)
        }, cr.SparseGrid = h, c.prototype.totalCellCount = 0, c.prototype.getCell = function(t, e, i) {
            var s, n = this.cells[t];
            return n ? (s = n[e], s ? s : i ? (s = d(this, t, e), this.cells[t][e] = s, s) : null) : i ? (s = d(this, t, e), this.cells[t] = {}, this.cells[t][e] = s, s) : null
        }, c.prototype.XToCell = function(t) {
            return cr.floor(t / this.cellwidth)
        }, c.prototype.YToCell = function(t) {
            return cr.floor(t / this.cellheight)
        }, c.prototype.update = function(t, e, i) {
            var s, n, r, o, a;
            if (e)
                for (s = e.left, n = e.right; n >= s; ++s)
                    for (r = e.top, o = e.bottom; o >= r; ++r) i && i.contains_pt(s, r) || (a = this.getCell(s, r, !1), a && (a.remove(t), a.isEmpty() && (f(a), this.cells[s][r] = null)));
            if (i)
                for (s = i.left, n = i.right; n >= s; ++s)
                    for (r = i.top, o = i.bottom; o >= r; ++r) e && e.contains_pt(s, r) || this.getCell(s, r, !0).insert(t)
        }, c.prototype.queryRange = function(t, e, i, s, n) {
            var r, o, a, h, c, l;
            for (r = this.XToCell(t), a = this.YToCell(e), o = this.XToCell(i), c = this.YToCell(s); o >= r; ++r)
                for (h = a; c >= h; ++h) l = this.getCell(r, h, !1), l && l.dump(n)
        }, c.prototype.markRangeChanged = function(t) {
            var e, i, s, n, r, o;
            for (e = t.left, s = t.top, i = t.right, r = t.bottom; i >= e; ++e)
                for (n = s; r >= n; ++n) o = this.getCell(e, n, !1), o && (o.is_sorted = !1)
        }, cr.RenderGrid = c;
        var k = [];
        p.prototype.isEmpty = function() {
            return this.objects.isEmpty()
        }, p.prototype.insert = function(t) {
            this.objects.add(t)
        }, p.prototype.remove = function(t) {
            this.objects.remove(t)
        }, p.prototype.dump = function(t) {
            cr.appendArray(t, this.objects.valuesRef())
        }, cr.GridCell = p;
        var E = [];
        g.prototype.isEmpty = function() {
            return this.objects.length ? this.objects.length > this.pending_removal.count() ? !1 : (this.flush_pending(), !0) : !0
        }, g.prototype.insert = function(t) {
            if (this.pending_removal.contains(t)) return this.pending_removal.remove(t), void(this.pending_removal.isEmpty() && (this.any_pending_removal = !1));
            if (this.objects.length) {
                var e = this.objects[this.objects.length - 1];
                e.get_zindex() > t.get_zindex() && (this.is_sorted = !1), this.objects.push(t)
            } else this.objects.push(t), this.is_sorted = !0
        }, g.prototype.remove = function(t) {
            this.pending_removal.add(t), this.any_pending_removal = !0, this.pending_removal.count() >= 30 && this.flush_pending()
        }, g.prototype.flush_pending = function() {
            if (this.any_pending_removal) {
                if (this.pending_removal.count() === this.objects.length) return void this.reset();
                cr.arrayRemoveAllFromObjectSet(this.objects, this.pending_removal), this.pending_removal.clear(), this.any_pending_removal = !1
            }
        }, g.prototype.ensure_sorted = function() {
            this.is_sorted || (this.objects.sort(y), this.is_sorted = !0)
        }, g.prototype.reset = function() {
            cr.clearArray(this.objects), this.is_sorted = !0, this.pending_removal.clear(), this.any_pending_removal = !1
        }, g.prototype.dump = function(t) {
            this.flush_pending(), this.ensure_sorted(), this.objects.length && t.push(this.objects)
        }, cr.RenderCell = g;
        var P = ["lighter", "xor", "copy", "destination-over", "source-in", "destination-in", "source-out", "destination-out", "source-atop", "destination-atop"];
        cr.effectToCompositeOp = function(t) {
            return 0 >= t || t >= 11 ? "source-over" : P[t - 1]
        }, cr.setGLBlend = function(t, e, i) {
            if (i) switch (t.srcBlend = i.ONE, t.destBlend = i.ONE_MINUS_SRC_ALPHA, e) {
                case 1:
                    t.srcBlend = i.ONE, t.destBlend = i.ONE;
                    break;
                case 2:
                    break;
                case 3:
                    t.srcBlend = i.ONE, t.destBlend = i.ZERO;
                    break;
                case 4:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.ONE;
                    break;
                case 5:
                    t.srcBlend = i.DST_ALPHA, t.destBlend = i.ZERO;
                    break;
                case 6:
                    t.srcBlend = i.ZERO, t.destBlend = i.SRC_ALPHA;
                    break;
                case 7:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.ZERO;
                    break;
                case 8:
                    t.srcBlend = i.ZERO, t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                    break;
                case 9:
                    t.srcBlend = i.DST_ALPHA, t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                    break;
                case 10:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.SRC_ALPHA
            }
        }, cr.round6dp = function(t) {
            return Math.round(1e6 * t) / 1e6
        }, cr.equals_nocase = function(t, e) {
            return "string" != typeof t || "string" != typeof e ? !1 : t.length !== e.length ? !1 : t === e ? !0 : t.toLowerCase() === e.toLowerCase()
        }, cr.isCanvasInputEvent = function(t) {
            var e = t.target;
            return e ? e === document || e === window ? !0 : document && document.body && e === document.body ? !0 : cr.equals_nocase(e.tagName, "canvas") ? !0 : !1 : !0
        }
    }();
var MatrixArray = "undefined" != typeof Float32Array ? Float32Array : Array,
    glMatrixArrayType = MatrixArray,
    vec3 = {},
    mat3 = {},
    mat4 = {},
    quat4 = {};
vec3.create = function(t) {
        var e = new MatrixArray(3);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2]), e
    }, vec3.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
    }, vec3.add = function(t, e, i) {
        return i && t !== i ? (i[0] = t[0] + e[0], i[1] = t[1] + e[1], i[2] = t[2] + e[2], i) : (t[0] += e[0], t[1] += e[1], t[2] += e[2], t)
    }, vec3.subtract = function(t, e, i) {
        return i && t !== i ? (i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2], i) : (t[0] -= e[0], t[1] -= e[1], t[2] -= e[2], t)
    }, vec3.negate = function(t, e) {
        return e || (e = t), e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
    }, vec3.scale = function(t, e, i) {
        return i && t !== i ? (i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e, i) : (t[0] *= e, t[1] *= e, t[2] *= e, t)
    }, vec3.normalize = function(t, e) {
        e || (e = t);
        var i = t[0],
            s = t[1],
            n = t[2],
            r = Math.sqrt(i * i + s * s + n * n);
        return r ? 1 === r ? (e[0] = i, e[1] = s, e[2] = n, e) : (r = 1 / r, e[0] = i * r, e[1] = s * r, e[2] = n * r, e) : (e[0] = 0, e[1] = 0, e[2] = 0, e)
    }, vec3.cross = function(t, e, i) {
        i || (i = t);
        var s = t[0],
            n = t[1],
            t = t[2],
            r = e[0],
            o = e[1],
            e = e[2];
        return i[0] = n * e - t * o, i[1] = t * r - s * e, i[2] = s * o - n * r, i
    }, vec3.length = function(t) {
        var e = t[0],
            i = t[1],
            t = t[2];
        return Math.sqrt(e * e + i * i + t * t)
    }, vec3.dot = function(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }, vec3.direction = function(t, e, i) {
        i || (i = t);
        var s = t[0] - e[0],
            n = t[1] - e[1],
            t = t[2] - e[2],
            e = Math.sqrt(s * s + n * n + t * t);
        return e ? (e = 1 / e, i[0] = s * e, i[1] = n * e, i[2] = t * e, i) : (i[0] = 0, i[1] = 0, i[2] = 0, i)
    }, vec3.lerp = function(t, e, i, s) {
        return s || (s = t), s[0] = t[0] + i * (e[0] - t[0]), s[1] = t[1] + i * (e[1] - t[1]), s[2] = t[2] + i * (e[2] - t[2]), s
    }, vec3.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + "]"
    }, mat3.create = function(t) {
        var e = new MatrixArray(9);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8]), e
    }, mat3.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
    }, mat3.identity = function(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }, mat3.transpose = function(t, e) {
        if (!e || t === e) {
            var i = t[1],
                s = t[2],
                n = t[5];
            return t[1] = t[3], t[2] = t[6], t[3] = i, t[5] = t[7], t[6] = s, t[7] = n, t
        }
        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], e
    }, mat3.toMat4 = function(t, e) {
        return e || (e = mat4.create()), e[15] = 1, e[14] = 0, e[13] = 0, e[12] = 0, e[11] = 0, e[10] = t[8], e[9] = t[7], e[8] = t[6], e[7] = 0, e[6] = t[5], e[5] = t[4], e[4] = t[3], e[3] = 0, e[2] = t[2], e[1] = t[1], e[0] = t[0], e
    }, mat3.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + "]"
    }, mat4.create = function(t) {
        var e = new MatrixArray(16);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e
    }, mat4.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }, mat4.identity = function(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, mat4.transpose = function(t, e) {
        if (!e || t === e) {
            var i = t[1],
                s = t[2],
                n = t[3],
                r = t[6],
                o = t[7],
                a = t[11];
            return t[1] = t[4], t[2] = t[8], t[3] = t[12], t[4] = i, t[6] = t[9], t[7] = t[13], t[8] = s, t[9] = r, t[11] = t[14], t[12] = n, t[13] = o, t[14] = a, t
        }
        return e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15], e
    }, mat4.determinant = function(t) {
        var e = t[0],
            i = t[1],
            s = t[2],
            n = t[3],
            r = t[4],
            o = t[5],
            a = t[6],
            h = t[7],
            c = t[8],
            l = t[9],
            u = t[10],
            p = t[11],
            d = t[12],
            f = t[13],
            g = t[14],
            t = t[15];
        return d * l * a * n - c * f * a * n - d * o * u * n + r * f * u * n + c * o * g * n - r * l * g * n - d * l * s * h + c * f * s * h + d * i * u * h - e * f * u * h - c * i * g * h + e * l * g * h + d * o * s * p - r * f * s * p - d * i * a * p + e * f * a * p + r * i * g * p - e * o * g * p - c * o * s * t + r * l * s * t + c * i * a * t - e * l * a * t - r * i * u * t + e * o * u * t
    }, mat4.inverse = function(t, e) {
        e || (e = t);
        var i = t[0],
            s = t[1],
            n = t[2],
            r = t[3],
            o = t[4],
            a = t[5],
            h = t[6],
            c = t[7],
            l = t[8],
            u = t[9],
            p = t[10],
            d = t[11],
            f = t[12],
            g = t[13],
            y = t[14],
            m = t[15],
            _ = i * a - s * o,
            v = i * h - n * o,
            b = i * c - r * o,
            w = s * h - n * a,
            x = s * c - r * a,
            S = n * c - r * h,
            T = l * g - u * f,
            O = l * y - p * f,
            A = l * m - d * f,
            C = u * y - p * g,
            k = u * m - d * g,
            E = p * m - d * y,
            P = 1 / (_ * E - v * k + b * C + w * A - x * O + S * T);
        return e[0] = (a * E - h * k + c * C) * P, e[1] = (-s * E + n * k - r * C) * P, e[2] = (g * S - y * x + m * w) * P, e[3] = (-u * S + p * x - d * w) * P, e[4] = (-o * E + h * A - c * O) * P, e[5] = (i * E - n * A + r * O) * P, e[6] = (-f * S + y * b - m * v) * P, e[7] = (l * S - p * b + d * v) * P, e[8] = (o * k - a * A + c * T) * P, e[9] = (-i * k + s * A - r * T) * P, e[10] = (f * x - g * b + m * _) * P, e[11] = (-l * x + u * b - d * _) * P, e[12] = (-o * C + a * O - h * T) * P, e[13] = (i * C - s * O + n * T) * P, e[14] = (-f * w + g * v - y * _) * P, e[15] = (l * w - u * v + p * _) * P, e
    }, mat4.toRotationMat = function(t, e) {
        return e || (e = mat4.create()), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, mat4.toMat3 = function(t, e) {
        return e || (e = mat3.create()), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e
    }, mat4.toInverseMat3 = function(t, e) {
        var i = t[0],
            s = t[1],
            n = t[2],
            r = t[4],
            o = t[5],
            a = t[6],
            h = t[8],
            c = t[9],
            l = t[10],
            u = l * o - a * c,
            p = -l * r + a * h,
            d = c * r - o * h,
            f = i * u + s * p + n * d;
        return f ? (f = 1 / f, e || (e = mat3.create()), e[0] = u * f, e[1] = (-l * s + n * c) * f, e[2] = (a * s - n * o) * f, e[3] = p * f, e[4] = (l * i - n * h) * f, e[5] = (-a * i + n * r) * f, e[6] = d * f, e[7] = (-c * i + s * h) * f, e[8] = (o * i - s * r) * f, e) : null
    }, mat4.multiply = function(t, e, i) {
        i || (i = t);
        var s = t[0],
            n = t[1],
            r = t[2],
            o = t[3],
            a = t[4],
            h = t[5],
            c = t[6],
            l = t[7],
            u = t[8],
            p = t[9],
            d = t[10],
            f = t[11],
            g = t[12],
            y = t[13],
            m = t[14],
            t = t[15],
            _ = e[0],
            v = e[1],
            b = e[2],
            w = e[3],
            x = e[4],
            S = e[5],
            T = e[6],
            O = e[7],
            A = e[8],
            C = e[9],
            k = e[10],
            E = e[11],
            P = e[12],
            I = e[13],
            M = e[14],
            e = e[15];
        return i[0] = _ * s + v * a + b * u + w * g, i[1] = _ * n + v * h + b * p + w * y, i[2] = _ * r + v * c + b * d + w * m, i[3] = _ * o + v * l + b * f + w * t, i[4] = x * s + S * a + T * u + O * g, i[5] = x * n + S * h + T * p + O * y, i[6] = x * r + S * c + T * d + O * m, i[7] = x * o + S * l + T * f + O * t, i[8] = A * s + C * a + k * u + E * g, i[9] = A * n + C * h + k * p + E * y, i[10] = A * r + C * c + k * d + E * m, i[11] = A * o + C * l + k * f + E * t, i[12] = P * s + I * a + M * u + e * g, i[13] = P * n + I * h + M * p + e * y, i[14] = P * r + I * c + M * d + e * m, i[15] = P * o + I * l + M * f + e * t, i
    }, mat4.multiplyVec3 = function(t, e, i) {
        i || (i = e);
        var s = e[0],
            n = e[1],
            e = e[2];
        return i[0] = t[0] * s + t[4] * n + t[8] * e + t[12], i[1] = t[1] * s + t[5] * n + t[9] * e + t[13], i[2] = t[2] * s + t[6] * n + t[10] * e + t[14], i
    }, mat4.multiplyVec4 = function(t, e, i) {
        i || (i = e);
        var s = e[0],
            n = e[1],
            r = e[2],
            e = e[3];
        return i[0] = t[0] * s + t[4] * n + t[8] * r + t[12] * e, i[1] = t[1] * s + t[5] * n + t[9] * r + t[13] * e, i[2] = t[2] * s + t[6] * n + t[10] * r + t[14] * e, i[3] = t[3] * s + t[7] * n + t[11] * r + t[15] * e, i
    }, mat4.translate = function(t, e, i) {
        var s, n, r, o, a, h, c, l, u, p, d, f, g = e[0],
            y = e[1],
            e = e[2];
        return i && t !== i ? (s = t[0], n = t[1], r = t[2], o = t[3], a = t[4], h = t[5], c = t[6], l = t[7], u = t[8], p = t[9], d = t[10], f = t[11], i[0] = s, i[1] = n, i[2] = r, i[3] = o, i[4] = a, i[5] = h, i[6] = c, i[7] = l, i[8] = u, i[9] = p, i[10] = d, i[11] = f, i[12] = s * g + a * y + u * e + t[12], i[13] = n * g + h * y + p * e + t[13], i[14] = r * g + c * y + d * e + t[14], i[15] = o * g + l * y + f * e + t[15], i) : (t[12] = t[0] * g + t[4] * y + t[8] * e + t[12], t[13] = t[1] * g + t[5] * y + t[9] * e + t[13], t[14] = t[2] * g + t[6] * y + t[10] * e + t[14], t[15] = t[3] * g + t[7] * y + t[11] * e + t[15], t)
    }, mat4.scale = function(t, e, i) {
        var s = e[0],
            n = e[1],
            e = e[2];
        return i && t !== i ? (i[0] = t[0] * s, i[1] = t[1] * s, i[2] = t[2] * s, i[3] = t[3] * s, i[4] = t[4] * n, i[5] = t[5] * n, i[6] = t[6] * n, i[7] = t[7] * n, i[8] = t[8] * e, i[9] = t[9] * e, i[10] = t[10] * e, i[11] = t[11] * e, i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15], i) : (t[0] *= s, t[1] *= s, t[2] *= s, t[3] *= s, t[4] *= n, t[5] *= n, t[6] *= n, t[7] *= n, t[8] *= e, t[9] *= e, t[10] *= e, t[11] *= e, t)
    }, mat4.rotate = function(t, e, i, s) {
        var n, r, o, a, h, c, l, u, p, d, f, g, y, m, _, v, b, w, x, S, T = i[0],
            O = i[1],
            i = i[2],
            A = Math.sqrt(T * T + O * O + i * i);
        return A ? (1 !== A && (A = 1 / A, T *= A, O *= A, i *= A), n = Math.sin(e), r = Math.cos(e), o = 1 - r, e = t[0], A = t[1], a = t[2], h = t[3], c = t[4], l = t[5], u = t[6], p = t[7], d = t[8], f = t[9], g = t[10], y = t[11], m = T * T * o + r, _ = O * T * o + i * n, v = i * T * o - O * n, b = T * O * o - i * n, w = O * O * o + r, x = i * O * o + T * n, S = T * i * o + O * n, T = O * i * o - T * n, O = i * i * o + r, s ? t !== s && (s[12] = t[12], s[13] = t[13], s[14] = t[14], s[15] = t[15]) : s = t, s[0] = e * m + c * _ + d * v, s[1] = A * m + l * _ + f * v, s[2] = a * m + u * _ + g * v, s[3] = h * m + p * _ + y * v, s[4] = e * b + c * w + d * x, s[5] = A * b + l * w + f * x, s[6] = a * b + u * w + g * x, s[7] = h * b + p * w + y * x, s[8] = e * S + c * T + d * O, s[9] = A * S + l * T + f * O, s[10] = a * S + u * T + g * O, s[11] = h * S + p * T + y * O, s) : null
    }, mat4.rotateX = function(t, e, i) {
        var s = Math.sin(e),
            e = Math.cos(e),
            n = t[4],
            r = t[5],
            o = t[6],
            a = t[7],
            h = t[8],
            c = t[9],
            l = t[10],
            u = t[11];
        return i ? t !== i && (i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[4] = n * e + h * s, i[5] = r * e + c * s, i[6] = o * e + l * s, i[7] = a * e + u * s, i[8] = n * -s + h * e, i[9] = r * -s + c * e, i[10] = o * -s + l * e, i[11] = a * -s + u * e, i
    }, mat4.rotateY = function(t, e, i) {
        var s = Math.sin(e),
            e = Math.cos(e),
            n = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            h = t[8],
            c = t[9],
            l = t[10],
            u = t[11];
        return i ? t !== i && (i[4] = t[4], i[5] = t[5], i[6] = t[6], i[7] = t[7], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[0] = n * e + h * -s, i[1] = r * e + c * -s, i[2] = o * e + l * -s, i[3] = a * e + u * -s, i[8] = n * s + h * e, i[9] = r * s + c * e, i[10] = o * s + l * e, i[11] = a * s + u * e, i
    }, mat4.rotateZ = function(t, e, i) {
        var s = Math.sin(e),
            e = Math.cos(e),
            n = t[0],
            r = t[1],
            o = t[2],
            a = t[3],
            h = t[4],
            c = t[5],
            l = t[6],
            u = t[7];
        return i ? t !== i && (i[8] = t[8], i[9] = t[9], i[10] = t[10], i[11] = t[11], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[0] = n * e + h * s, i[1] = r * e + c * s, i[2] = o * e + l * s, i[3] = a * e + u * s, i[4] = n * -s + h * e, i[5] = r * -s + c * e, i[6] = o * -s + l * e, i[7] = a * -s + u * e, i
    }, mat4.frustum = function(t, e, i, s, n, r, o) {
        o || (o = mat4.create());
        var a = e - t,
            h = s - i,
            c = r - n;
        return o[0] = 2 * n / a, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 * n / h, o[6] = 0, o[7] = 0, o[8] = (e + t) / a, o[9] = (s + i) / h, o[10] = -(r + n) / c, o[11] = -1, o[12] = 0, o[13] = 0, o[14] = -(r * n * 2) / c, o[15] = 0, o
    }, mat4.perspective = function(t, e, i, s, n) {
        return t = i * Math.tan(t * Math.PI / 360), e *= t, mat4.frustum(-e, e, -t, t, i, s, n)
    }, mat4.ortho = function(t, e, i, s, n, r, o) {
        o || (o = mat4.create());
        var a = e - t,
            h = s - i,
            c = r - n;
        return o[0] = 2 / a, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 / h, o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = -2 / c, o[11] = 0, o[12] = -(t + e) / a, o[13] = -(s + i) / h, o[14] = -(r + n) / c, o[15] = 1, o
    }, mat4.lookAt = function(t, e, i, s) {
        s || (s = mat4.create());
        var n, r, o, a, h, c, l, u, p = t[0],
            d = t[1],
            t = t[2];
        return r = i[0], o = i[1], n = i[2], i = e[1], c = e[2], p === e[0] && d === i && t === c ? mat4.identity(s) : (i = p - e[0], c = d - e[1], l = t - e[2], u = 1 / Math.sqrt(i * i + c * c + l * l), i *= u, c *= u, l *= u, e = o * l - n * c, n = n * i - r * l, r = r * c - o * i, (u = Math.sqrt(e * e + n * n + r * r)) ? (u = 1 / u, e *= u, n *= u, r *= u) : r = n = e = 0, o = c * r - l * n, a = l * e - i * r, h = i * n - c * e, (u = Math.sqrt(o * o + a * a + h * h)) ? (u = 1 / u, o *= u, a *= u, h *= u) : h = a = o = 0, s[0] = e, s[1] = o, s[2] = i, s[3] = 0, s[4] = n, s[5] = a, s[6] = c, s[7] = 0, s[8] = r, s[9] = h, s[10] = l, s[11] = 0, s[12] = -(e * p + n * d + r * t), s[13] = -(o * p + a * d + h * t), s[14] = -(i * p + c * d + l * t), s[15] = 1, s)
    }, mat4.fromRotationTranslation = function(t, e, i) {
        i || (i = mat4.create());
        var s = t[0],
            n = t[1],
            r = t[2],
            o = t[3],
            a = s + s,
            h = n + n,
            c = r + r,
            t = s * a,
            l = s * h;
        s *= c;
        var u = n * h;
        return n *= c, r *= c, a *= o, h *= o, o *= c, i[0] = 1 - (u + r), i[1] = l + o, i[2] = s - h, i[3] = 0, i[4] = l - o, i[5] = 1 - (t + r), i[6] = n + a, i[7] = 0, i[8] = s + h, i[9] = n - a, i[10] = 1 - (t + u), i[11] = 0, i[12] = e[0], i[13] = e[1], i[14] = e[2], i[15] = 1, i
    }, mat4.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + "]"
    }, quat4.create = function(t) {
        var e = new MatrixArray(4);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3]), e
    }, quat4.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }, quat4.calculateW = function(t, e) {
        var i = t[0],
            s = t[1],
            n = t[2];
        return e && t !== e ? (e[0] = i, e[1] = s, e[2] = n, e[3] = -Math.sqrt(Math.abs(1 - i * i - s * s - n * n)), e) : (t[3] = -Math.sqrt(Math.abs(1 - i * i - s * s - n * n)), t)
    }, quat4.inverse = function(t, e) {
        return e && t !== e ? (e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e) : (t[0] *= -1, t[1] *= -1, t[2] *= -1, t)
    }, quat4.length = function(t) {
        var e = t[0],
            i = t[1],
            s = t[2],
            t = t[3];
        return Math.sqrt(e * e + i * i + s * s + t * t)
    }, quat4.normalize = function(t, e) {
        e || (e = t);
        var i = t[0],
            s = t[1],
            n = t[2],
            r = t[3],
            o = Math.sqrt(i * i + s * s + n * n + r * r);
        return 0 === o ? (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e) : (o = 1 / o, e[0] = i * o, e[1] = s * o, e[2] = n * o, e[3] = r * o, e)
    }, quat4.multiply = function(t, e, i) {
        i || (i = t);
        var s = t[0],
            n = t[1],
            r = t[2],
            t = t[3],
            o = e[0],
            a = e[1],
            h = e[2],
            e = e[3];
        return i[0] = s * e + t * o + n * h - r * a, i[1] = n * e + t * a + r * o - s * h, i[2] = r * e + t * h + s * a - n * o, i[3] = t * e - s * o - n * a - r * h, i
    }, quat4.multiplyVec3 = function(t, e, i) {
        i || (i = e);
        var s = e[0],
            n = e[1],
            r = e[2],
            e = t[0],
            o = t[1],
            a = t[2],
            t = t[3],
            h = t * s + o * r - a * n,
            c = t * n + a * s - e * r,
            l = t * r + e * n - o * s,
            s = -e * s - o * n - a * r;
        return i[0] = h * t + s * -e + c * -a - l * -o, i[1] = c * t + s * -o + l * -e - h * -a, i[2] = l * t + s * -a + h * -o - c * -e, i
    }, quat4.toMat3 = function(t, e) {
        e || (e = mat3.create());
        var i = t[0],
            s = t[1],
            n = t[2],
            r = t[3],
            o = i + i,
            a = s + s,
            h = n + n,
            c = i * o,
            l = i * a;
        i *= h;
        var u = s * a;
        return s *= h, n *= h, o *= r, a *= r, r *= h, e[0] = 1 - (u + n), e[1] = l + r, e[2] = i - a, e[3] = l - r, e[4] = 1 - (c + n), e[5] = s + o, e[6] = i + a, e[7] = s - o, e[8] = 1 - (c + u), e
    }, quat4.toMat4 = function(t, e) {
        e || (e = mat4.create());
        var i = t[0],
            s = t[1],
            n = t[2],
            r = t[3],
            o = i + i,
            a = s + s,
            h = n + n,
            c = i * o,
            l = i * a;
        i *= h;
        var u = s * a;
        return s *= h,
            n *= h, o *= r, a *= r, r *= h, e[0] = 1 - (u + n), e[1] = l + r, e[2] = i - a, e[3] = 0, e[4] = l - r, e[5] = 1 - (c + n), e[6] = s + o, e[7] = 0, e[8] = i + a, e[9] = s - o, e[10] = 1 - (c + u), e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, quat4.slerp = function(t, e, i, s) {
        s || (s = t);
        var n, r, o = t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
        return Math.abs(o) >= 1 ? (s !== t && (s[0] = t[0], s[1] = t[1], s[2] = t[2], s[3] = t[3]), s) : (n = Math.acos(o), r = Math.sqrt(1 - o * o), Math.abs(r) < .001 ? (s[0] = .5 * t[0] + .5 * e[0], s[1] = .5 * t[1] + .5 * e[1], s[2] = .5 * t[2] + .5 * e[2], s[3] = .5 * t[3] + .5 * e[3], s) : (o = Math.sin((1 - i) * n) / r, i = Math.sin(i * n) / r, s[0] = t[0] * o + e[0] * i, s[1] = t[1] * o + e[1] * i, s[2] = t[2] * o + e[2] * i, s[3] = t[3] * o + e[3] * i, s))
    }, quat4.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + "]"
    },
    function() {
        function t(t, e, i) {
            this.isIE = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent), this.width = 0, this.height = 0, this.enableFrontToBack = !!i, this.isEarlyZPass = !1, this.isBatchInEarlyZPass = !1, this.currentZ = 0, this.zNear = 1, this.zFar = 1e3, this.zIncrement = (this.zFar - this.zNear) / 32768, this.zA = this.zFar / (this.zFar - this.zNear), this.zB = this.zFar * this.zNear / (this.zNear - this.zFar), this.kzA = 65536 * this.zA, this.kzB = 65536 * this.zB, this.cam = vec3.create([0, 0, 100]), this.look = vec3.create([0, 0, 0]), this.up = vec3.create([0, 1, 0]), this.worldScale = vec3.create([1, 1, 1]), this.enable_mipmaps = !0, this.matP = mat4.create(), this.matMV = mat4.create(), this.lastMV = mat4.create(), this.currentMV = mat4.create(), this.gl = t, this.initState()
        }

        function e(t, e, i) {
            this.gl = t, this.shaderProgram = e, this.name = i, this.locAPos = t.getAttribLocation(e, "aPos"), this.locATex = t.getAttribLocation(e, "aTex"), this.locMatP = t.getUniformLocation(e, "matP"), this.locMatMV = t.getUniformLocation(e, "matMV"), this.locOpacity = t.getUniformLocation(e, "opacity"), this.locColorFill = t.getUniformLocation(e, "colorFill"), this.locSamplerFront = t.getUniformLocation(e, "samplerFront"), this.locSamplerBack = t.getUniformLocation(e, "samplerBack"), this.locDestStart = t.getUniformLocation(e, "destStart"), this.locDestEnd = t.getUniformLocation(e, "destEnd"), this.locSeconds = t.getUniformLocation(e, "seconds"), this.locPixelWidth = t.getUniformLocation(e, "pixelWidth"), this.locPixelHeight = t.getUniformLocation(e, "pixelHeight"), this.locLayerScale = t.getUniformLocation(e, "layerScale"), this.locLayerAngle = t.getUniformLocation(e, "layerAngle"), this.locViewOrigin = t.getUniformLocation(e, "viewOrigin"), this.locScrollPos = t.getUniformLocation(e, "scrollPos"), this.hasAnyOptionalUniforms = !!(this.locPixelWidth || this.locPixelHeight || this.locSeconds || this.locSamplerBack || this.locDestStart || this.locDestEnd || this.locLayerScale || this.locLayerAngle || this.locViewOrigin || this.locScrollPos), this.lpPixelWidth = -999, this.lpPixelHeight = -999, this.lpOpacity = 1, this.lpDestStartX = 0, this.lpDestStartY = 0, this.lpDestEndX = 1, this.lpDestEndY = 1, this.lpLayerScale = 1, this.lpLayerAngle = 0, this.lpViewOriginX = 0, this.lpViewOriginY = 0, this.lpScrollPosX = 0, this.lpScrollPosY = 0, this.lpSeconds = 0, this.lastCustomParams = [], this.lpMatMV = mat4.create(), this.locOpacity && t.uniform1f(this.locOpacity, 1), this.locColorFill && t.uniform4f(this.locColorFill, 1, 1, 1, 1), this.locSamplerFront && t.uniform1i(this.locSamplerFront, 0), this.locSamplerBack && t.uniform1i(this.locSamplerBack, 1), this.locDestStart && t.uniform2f(this.locDestStart, 0, 0), this.locDestEnd && t.uniform2f(this.locDestEnd, 1, 1), this.locLayerScale && t.uniform1f(this.locLayerScale, 1), this.locLayerAngle && t.uniform1f(this.locLayerAngle, 0), this.locViewOrigin && t.uniform2f(this.locViewOrigin, 0, 0), this.locScrollPos && t.uniform2f(this.locScrollPos, 0, 0), this.locSeconds && t.uniform1f(this.locSeconds, 0), this.hasCurrentMatMV = !1
        }

        function i(t, e) {
            return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
        }

        function s(t, e) {
            this.type = t, this.glwrap = e, this.gl = e.gl, this.opacityParam = 0, this.startIndex = 0, this.indexCount = 0, this.texParam = null, this.mat4param = null, this.shaderParams = [], cr.seal(this)
        }
        var n = 8e3,
            r = n / 2 * 3,
            o = 8e3,
            a = 4,
            h = 0,
            c = 1,
            l = 2,
            u = 3,
            p = 4,
            d = 5,
            f = 6,
            g = 7,
            y = 8,
            m = 9,
            _ = 10,
            v = 12,
            b = 13,
            w = 14,
            x = mat4.create();
        t.prototype.initState = function() {
            var t, e, i = this.gl;
            for (this.lastOpacity = 1, this.lastTexture0 = null, this.lastTexture1 = null, this.currentOpacity = 1, i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT), i.enable(i.BLEND), i.blendFunc(i.ONE, i.ONE_MINUS_SRC_ALPHA), i.disable(i.CULL_FACE), i.disable(i.STENCIL_TEST), i.disable(i.DITHER), this.enableFrontToBack ? (i.enable(i.DEPTH_TEST), i.depthFunc(i.LEQUAL)) : i.disable(i.DEPTH_TEST), this.maxTextureSize = i.getParameter(i.MAX_TEXTURE_SIZE), this.lastSrcBlend = i.ONE, this.lastDestBlend = i.ONE_MINUS_SRC_ALPHA, this.vertexData = new Float32Array(n * (this.enableFrontToBack ? 3 : 2)), this.texcoordData = new Float32Array(2 * n), this.pointData = new Float32Array(4 * o), this.pointBuffer = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.pointBuffer), i.bufferData(i.ARRAY_BUFFER, this.pointData.byteLength, i.DYNAMIC_DRAW), this.vertexBuffers = new Array(a), this.texcoordBuffers = new Array(a), t = 0; a > t; t++) this.vertexBuffers[t] = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.vertexBuffers[t]), i.bufferData(i.ARRAY_BUFFER, this.vertexData.byteLength, i.DYNAMIC_DRAW), this.texcoordBuffers[t] = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.texcoordBuffers[t]), i.bufferData(i.ARRAY_BUFFER, this.texcoordData.byteLength, i.DYNAMIC_DRAW);
            this.curBuffer = 0, this.indexBuffer = i.createBuffer(), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            var s = new Uint16Array(r);
            t = 0, e = r;
            for (var h = 0; e > t;) s[t++] = h, s[t++] = h + 1, s[t++] = h + 2, s[t++] = h, s[t++] = h + 2, s[t++] = h + 3, h += 4;
            i.bufferData(i.ELEMENT_ARRAY_BUFFER, s, i.STATIC_DRAW), this.vertexPtr = 0, this.texPtr = 0, this.pointPtr = 0;
            var c, l;
            this.shaderPrograms = [], c = ["varying mediump vec2 vTex;", "uniform lowp float opacity;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "	gl_FragColor = texture2D(samplerFront, vTex);", "	gl_FragColor *= opacity;", "}"].join("\n"), l = this.enableFrontToBack ? ["attribute highp vec3 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "	gl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);", "	vTex = aTex;", "}"].join("\n") : ["attribute highp vec2 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "	gl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "	vTex = aTex;", "}"].join("\n");
            var u = this.createShaderProgram({
                src: c
            }, l, "<default>");
            this.shaderPrograms.push(u), c = ["uniform mediump sampler2D samplerFront;", "varying lowp float opacity;", "void main(void) {", "	gl_FragColor = texture2D(samplerFront, gl_PointCoord);", "	gl_FragColor *= opacity;", "}"].join("\n");
            var p = ["attribute vec4 aPos;", "varying float opacity;", "uniform mat4 matP;", "uniform mat4 matMV;", "void main(void) {", "	gl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "	gl_PointSize = aPos.z;", "	opacity = aPos.w;", "}"].join("\n");
            u = this.createShaderProgram({
                src: c
            }, p, "<point>"), this.shaderPrograms.push(u), c = ["varying mediump vec2 vTex;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "	if (texture2D(samplerFront, vTex).a < 1.0)", "		discard;", "}"].join("\n");
            var u = this.createShaderProgram({
                src: c
            }, l, "<earlyz>");
            this.shaderPrograms.push(u), c = ["uniform lowp vec4 colorFill;", "void main(void) {", "	gl_FragColor = colorFill;", "}"].join("\n");
            var u = this.createShaderProgram({
                src: c
            }, l, "<fill>");
            this.shaderPrograms.push(u);
            for (var d in cr.shaders) cr.shaders.hasOwnProperty(d) && this.shaderPrograms.push(this.createShaderProgram(cr.shaders[d], l, d));
            i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, null), this.batch = [], this.batchPtr = 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.lastProgram = -1, this.currentProgram = -1, this.currentShader = null, this.fbo = i.createFramebuffer(), this.renderToTex = null, this.depthBuffer = null, this.attachedDepthBuffer = !1, this.enableFrontToBack && (this.depthBuffer = i.createRenderbuffer()), this.tmpVec3 = vec3.create([0, 0, 0]);
            var f = i.getParameter(i.ALIASED_POINT_SIZE_RANGE);
            this.minPointSize = f[0], this.maxPointSize = f[1], this.maxPointSize > 2048 && (this.maxPointSize = 2048), this.switchProgram(0), cr.seal(this)
        }, e.prototype.updateMatMV = function(t) {
            i(this.lpMatMV, t) || (mat4.set(t, this.lpMatMV), this.gl.uniformMatrix4fv(this.locMatMV, !1, t))
        }, t.prototype.createShaderProgram = function(t, i, s) {
            var n = this.gl,
                r = n.createShader(n.FRAGMENT_SHADER);
            if (n.shaderSource(r, t.src), n.compileShader(r), !n.getShaderParameter(r, n.COMPILE_STATUS)) return n.deleteShader(r), null;
            var o = n.createShader(n.VERTEX_SHADER);
            if (n.shaderSource(o, i), n.compileShader(o), !n.getShaderParameter(o, n.COMPILE_STATUS)) return n.deleteShader(r), n.deleteShader(o), null;
            var a = n.createProgram();
            if (n.attachShader(a, r), n.attachShader(a, o), n.linkProgram(a), !n.getProgramParameter(a, n.LINK_STATUS)) return n.deleteShader(r), n.deleteShader(o), n.deleteProgram(a), null;
            n.useProgram(a), n.deleteShader(r), n.deleteShader(o);
            var h = new e(n, a, s);
            h.extendBoxHorizontal = t.extendBoxHorizontal || 0, h.extendBoxVertical = t.extendBoxVertical || 0, h.crossSampling = !!t.crossSampling, h.preservesOpaqueness = !!t.preservesOpaqueness, h.animated = !!t.animated, h.parameters = t.parameters || [];
            var c, l;
            for (c = 0, l = h.parameters.length; l > c; c++) h.parameters[c][1] = n.getUniformLocation(a, h.parameters[c][0]), h.lastCustomParams.push(0), n.uniform1f(h.parameters[c][1], 0);
            return cr.seal(h), h
        }, t.prototype.getShaderIndex = function(t) {
            var e, i;
            for (e = 0, i = this.shaderPrograms.length; i > e; e++)
                if (this.shaderPrograms[e].name === t) return e;
            return -1
        }, t.prototype.project = function(t, e, i) {
            var s = this.matMV,
                n = this.matP,
                r = [0, 0, 0, 0, 0, 0, 0, 0];
            r[0] = s[0] * t + s[4] * e + s[12], r[1] = s[1] * t + s[5] * e + s[13], r[2] = s[2] * t + s[6] * e + s[14], r[3] = s[3] * t + s[7] * e + s[15], r[4] = n[0] * r[0] + n[4] * r[1] + n[8] * r[2] + n[12] * r[3], r[5] = n[1] * r[0] + n[5] * r[1] + n[9] * r[2] + n[13] * r[3], r[6] = n[2] * r[0] + n[6] * r[1] + n[10] * r[2] + n[14] * r[3], r[7] = -r[2], 0 !== r[7] && (r[7] = 1 / r[7], r[4] *= r[7], r[5] *= r[7], r[6] *= r[7], i[0] = (.5 * r[4] + .5) * this.width, i[1] = (.5 * r[5] + .5) * this.height)
        }, t.prototype.setSize = function(t, e, i) {
            if (this.width !== t || this.height !== e || i) {
                this.endBatch();
                var s = this.gl;
                if (this.width = t, this.height = e, s.viewport(0, 0, t, e), mat4.lookAt(this.cam, this.look, this.up, this.matMV), this.enableFrontToBack) mat4.ortho(-t / 2, t / 2, e / 2, -e / 2, this.zNear, this.zFar, this.matP), this.worldScale[0] = 1, this.worldScale[1] = 1;
                else {
                    mat4.perspective(45, t / e, this.zNear, this.zFar, this.matP);
                    var n = [0, 0],
                        r = [0, 0];
                    this.project(0, 0, n), this.project(1, 1, r), this.worldScale[0] = 1 / (r[0] - n[0]), this.worldScale[1] = -1 / (r[1] - n[1])
                }
                var o, a, h;
                for (o = 0, a = this.shaderPrograms.length; a > o; o++) h = this.shaderPrograms[o], h.hasCurrentMatMV = !1, h.locMatP && (s.useProgram(h.shaderProgram), s.uniformMatrix4fv(h.locMatP, !1, this.matP));
                s.useProgram(this.shaderPrograms[this.lastProgram].shaderProgram), s.bindTexture(s.TEXTURE_2D, null), s.activeTexture(s.TEXTURE1), s.bindTexture(s.TEXTURE_2D, null), s.activeTexture(s.TEXTURE0), this.lastTexture0 = null, this.lastTexture1 = null, this.depthBuffer && (s.bindFramebuffer(s.FRAMEBUFFER, this.fbo), s.bindRenderbuffer(s.RENDERBUFFER, this.depthBuffer), s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_COMPONENT16, this.width, this.height), this.attachedDepthBuffer || (s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.RENDERBUFFER, this.depthBuffer), this.attachedDepthBuffer = !0), s.bindRenderbuffer(s.RENDERBUFFER, null), s.bindFramebuffer(s.FRAMEBUFFER, null), this.renderToTex = null)
            }
        }, t.prototype.resetModelView = function() {
            mat4.lookAt(this.cam, this.look, this.up, this.matMV), mat4.scale(this.matMV, this.worldScale)
        }, t.prototype.translate = function(t, e) {
            (0 !== t || 0 !== e) && (this.tmpVec3[0] = t, this.tmpVec3[1] = e, this.tmpVec3[2] = 0, mat4.translate(this.matMV, this.tmpVec3))
        }, t.prototype.scale = function(t, e) {
            (1 !== t || 1 !== e) && (this.tmpVec3[0] = t, this.tmpVec3[1] = e, this.tmpVec3[2] = 1, mat4.scale(this.matMV, this.tmpVec3))
        }, t.prototype.rotateZ = function(t) {
            0 !== t && mat4.rotateZ(this.matMV, t)
        }, t.prototype.updateModelView = function() {
            if (!i(this.lastMV, this.matMV)) {
                var t = this.pushBatch();
                t.type = d, t.mat4param ? mat4.set(this.matMV, t.mat4param) : t.mat4param = mat4.create(this.matMV), mat4.set(this.matMV, this.lastMV), this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.setEarlyZIndex = function(t) {
            this.enableFrontToBack && (t > 32760 && (t = 32760), this.currentZ = this.cam[2] - this.zNear - t * this.zIncrement)
        }, s.prototype.doSetEarlyZPass = function() {
            var t = this.gl,
                e = this.glwrap;
            0 !== this.startIndex ? (t.depthMask(!0), t.colorMask(!1, !1, !1, !1), t.disable(t.BLEND), t.bindFramebuffer(t.FRAMEBUFFER, e.fbo), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0), t.clear(t.DEPTH_BUFFER_BIT), t.bindFramebuffer(t.FRAMEBUFFER, null), e.isBatchInEarlyZPass = !0) : (t.depthMask(!1), t.colorMask(!0, !0, !0, !0), t.enable(t.BLEND), e.isBatchInEarlyZPass = !1)
        }, s.prototype.doSetTexture = function() {
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texParam)
        }, s.prototype.doSetTexture1 = function() {
            var t = this.gl;
            t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, this.texParam), t.activeTexture(t.TEXTURE0)
        }, s.prototype.doSetOpacity = function() {
            var t = this.opacityParam,
                e = this.glwrap;
            e.currentOpacity = t;
            var i = e.currentShader;
            i.locOpacity && i.lpOpacity !== t && (i.lpOpacity = t, this.gl.uniform1f(i.locOpacity, t))
        }, s.prototype.doQuad = function() {
            this.gl.drawElements(this.gl.TRIANGLES, this.indexCount, this.gl.UNSIGNED_SHORT, this.startIndex)
        }, s.prototype.doSetBlend = function() {
            this.gl.blendFunc(this.startIndex, this.indexCount)
        }, s.prototype.doUpdateModelView = function() {
            var t, e, i, s = this.glwrap.shaderPrograms,
                n = this.glwrap.currentProgram;
            for (t = 0, e = s.length; e > t; t++) i = s[t], t === n && i.locMatMV ? (i.updateMatMV(this.mat4param), i.hasCurrentMatMV = !0) : i.hasCurrentMatMV = !1;
            mat4.set(this.mat4param, this.glwrap.currentMV)
        }, s.prototype.doRenderToTexture = function() {
            var t = this.gl,
                e = this.glwrap;
            this.texParam ? (e.lastTexture1 === this.texParam && (t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, null), e.lastTexture1 = null, t.activeTexture(t.TEXTURE0)), t.bindFramebuffer(t.FRAMEBUFFER, e.fbo), e.isBatchInEarlyZPass || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texParam, 0)) : (e.enableFrontToBack || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0), t.bindFramebuffer(t.FRAMEBUFFER, null))
        }, s.prototype.doClear = function() {
            var t = this.gl,
                e = this.startIndex;
            0 === e ? (t.clearColor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]), t.clear(t.COLOR_BUFFER_BIT)) : 1 === e ? (t.enable(t.SCISSOR_TEST), t.scissor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.disable(t.SCISSOR_TEST)) : t.clear(t.DEPTH_BUFFER_BIT)
        }, s.prototype.doSetDepthTestEnabled = function() {
            var t = this.gl,
                e = this.startIndex;
            0 !== e ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST)
        }, s.prototype.doPoints = function() {
            var t = this.gl,
                e = this.glwrap;
            e.enableFrontToBack && t.disable(t.DEPTH_TEST);
            var i = e.shaderPrograms[1];
            t.useProgram(i.shaderProgram), !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV), i.hasCurrentMatMV = !0), t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.pointBuffer), t.vertexAttribPointer(i.locAPos, 4, t.FLOAT, !1, 0, 0), t.drawArrays(t.POINTS, this.startIndex / 4, this.indexCount), i = e.currentShader, t.useProgram(i.shaderProgram), i.locAPos >= 0 && (t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]), t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)), i.locATex >= 0 && (t.enableVertexAttribArray(i.locATex), t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]), t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0)), e.enableFrontToBack && t.enable(t.DEPTH_TEST)
        }, s.prototype.doSetProgram = function() {
            var t = this.gl,
                e = this.glwrap,
                i = e.shaderPrograms[this.startIndex];
            e.currentProgram = this.startIndex, e.currentShader = i, t.useProgram(i.shaderProgram), !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV), i.hasCurrentMatMV = !0), i.locOpacity && i.lpOpacity !== e.currentOpacity && (i.lpOpacity = e.currentOpacity, t.uniform1f(i.locOpacity, e.currentOpacity)), i.locAPos >= 0 && (t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]), t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)), i.locATex >= 0 && (t.enableVertexAttribArray(i.locATex), t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]), t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0))
        }, s.prototype.doSetColor = function() {
            var t = this.glwrap.currentShader,
                e = this.mat4param;
            this.gl.uniform4f(t.locColorFill, e[0], e[1], e[2], e[3])
        }, s.prototype.doSetProgramParameters = function() {
            var t, e, i = this.glwrap.currentShader,
                s = this.gl,
                n = this.mat4param;
            i.locSamplerBack && this.glwrap.lastTexture1 !== this.texParam && (s.activeTexture(s.TEXTURE1), s.bindTexture(s.TEXTURE_2D, this.texParam), this.glwrap.lastTexture1 = this.texParam, s.activeTexture(s.TEXTURE0));
            var r, o = n[0];
            if (i.locPixelWidth && o !== i.lpPixelWidth && (i.lpPixelWidth = o, s.uniform1f(i.locPixelWidth, o)), o = n[1], i.locPixelHeight && o !== i.lpPixelHeight && (i.lpPixelHeight = o, s.uniform1f(i.locPixelHeight, o)), o = n[2], r = n[3], !i.locDestStart || o === i.lpDestStartX && r === i.lpDestStartY || (i.lpDestStartX = o, i.lpDestStartY = r, s.uniform2f(i.locDestStart, o, r)), o = n[4], r = n[5], !i.locDestEnd || o === i.lpDestEndX && r === i.lpDestEndY || (i.lpDestEndX = o, i.lpDestEndY = r, s.uniform2f(i.locDestEnd, o, r)), o = n[6], i.locLayerScale && o !== i.lpLayerScale && (i.lpLayerScale = o, s.uniform1f(i.locLayerScale, o)), o = n[7], i.locLayerAngle && o !== i.lpLayerAngle && (i.lpLayerAngle = o, s.uniform1f(i.locLayerAngle, o)), o = n[8], r = n[9], !i.locViewOrigin || o === i.lpViewOriginX && r === i.lpViewOriginY || (i.lpViewOriginX = o, i.lpViewOriginY = r, s.uniform2f(i.locViewOrigin, o, r)), o = n[10], r = n[11], !i.locScrollPos || o === i.lpScrollPosX && r === i.lpScrollPosY || (i.lpScrollPosX = o, i.lpScrollPosY = r, s.uniform2f(i.locScrollPos, o, r)), o = n[12], i.locSeconds && o !== i.lpSeconds && (i.lpSeconds = o, s.uniform1f(i.locSeconds, o)), i.parameters.length)
                for (t = 0, e = i.parameters.length; e > t; t++) o = this.shaderParams[t], o !== i.lastCustomParams[t] && (i.lastCustomParams[t] = o, s.uniform1f(i.parameters[t][1], o))
        }, t.prototype.pushBatch = function() {
            return this.batchPtr === this.batch.length && this.batch.push(new s(h, this)), this.batch[this.batchPtr++]
        }, t.prototype.endBatch = function() {
            if (0 !== this.batchPtr && !this.gl.isContextLost()) {
                var t = this.gl;
                if (this.pointPtr > 0 && (t.bindBuffer(t.ARRAY_BUFFER, this.pointBuffer), t.bufferSubData(t.ARRAY_BUFFER, 0, this.pointData.subarray(0, this.pointPtr)), e && e.locAPos >= 0 && "<point>" === e.name && t.vertexAttribPointer(e.locAPos, 4, t.FLOAT, !1, 0, 0)), this.vertexPtr > 0) {
                    var e = this.currentShader;
                    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffers[this.curBuffer]), t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexData.subarray(0, this.vertexPtr)), e && e.locAPos >= 0 && "<point>" !== e.name && t.vertexAttribPointer(e.locAPos, this.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, this.texcoordBuffers[this.curBuffer]), t.bufferSubData(t.ARRAY_BUFFER, 0, this.texcoordData.subarray(0, this.texPtr)), e && e.locATex >= 0 && "<point>" !== e.name && t.vertexAttribPointer(e.locATex, 2, t.FLOAT, !1, 0, 0)
                }
                var i, s, n;
                for (i = 0, s = this.batchPtr; s > i; i++) switch (n = this.batch[i], n.type) {
                    case 1:
                        n.doQuad();
                        break;
                    case 2:
                        n.doSetTexture();
                        break;
                    case 3:
                        n.doSetOpacity();
                        break;
                    case 4:
                        n.doSetBlend();
                        break;
                    case 5:
                        n.doUpdateModelView();
                        break;
                    case 6:
                        n.doRenderToTexture();
                        break;
                    case 7:
                        n.doClear();
                        break;
                    case 8:
                        n.doPoints();
                        break;
                    case 9:
                        n.doSetProgram();
                        break;
                    case 10:
                        n.doSetProgramParameters();
                        break;
                    case 11:
                        n.doSetTexture1();
                        break;
                    case 12:
                        n.doSetColor();
                        break;
                    case 13:
                        n.doSetDepthTestEnabled();
                        break;
                    case 14:
                        n.doSetEarlyZPass()
                }
                this.batchPtr = 0, this.vertexPtr = 0, this.texPtr = 0, this.pointPtr = 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.isBatchInEarlyZPass = !1, this.curBuffer++, this.curBuffer >= a && (this.curBuffer = 0)
            }
        }, t.prototype.setOpacity = function(t) {
            if (t !== this.lastOpacity && !this.isEarlyZPass) {
                var e = this.pushBatch();
                e.type = u, e.opacityParam = t, this.lastOpacity = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.setTexture = function(t) {
            if (t !== this.lastTexture0) {
                var e = this.pushBatch();
                e.type = l, e.texParam = t, this.lastTexture0 = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.setBlend = function(t, e) {
            if ((t !== this.lastSrcBlend || e !== this.lastDestBlend) && !this.isEarlyZPass) {
                var i = this.pushBatch();
                i.type = p, i.startIndex = t, i.indexCount = e, this.lastSrcBlend = t, this.lastDestBlend = e, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.isPremultipliedAlphaBlend = function() {
            return this.lastSrcBlend === this.gl.ONE && this.lastDestBlend === this.gl.ONE_MINUS_SRC_ALPHA
        }, t.prototype.setAlphaBlend = function() {
            this.setBlend(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
        }, t.prototype.setNoPremultiplyAlphaBlend = function() {
            this.setBlend(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)
        };
        var S = 2 * n - 8;
        t.prototype.quad = function(t, e, i, s, n, r, o, a) {
            this.vertexPtr >= S && this.endBatch();
            var h = this.vertexPtr,
                l = this.texPtr,
                u = this.vertexData,
                p = this.texcoordData,
                d = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var f = this.pushBatch();
                f.type = c, f.startIndex = this.enableFrontToBack ? h : h / 2 * 3, f.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            this.enableFrontToBack ? (u[h++] = t, u[h++] = e, u[h++] = d, u[h++] = i, u[h++] = s, u[h++] = d, u[h++] = n, u[h++] = r, u[h++] = d, u[h++] = o, u[h++] = a, u[h++] = d) : (u[h++] = t, u[h++] = e, u[h++] = i, u[h++] = s, u[h++] = n, u[h++] = r, u[h++] = o, u[h++] = a), p[l++] = 0, p[l++] = 0, p[l++] = 1, p[l++] = 0, p[l++] = 1, p[l++] = 1, p[l++] = 0, p[l++] = 1, this.vertexPtr = h, this.texPtr = l
        }, t.prototype.quadTex = function(t, e, i, s, n, r, o, a, h) {
            this.vertexPtr >= S && this.endBatch();
            var l = this.vertexPtr,
                u = this.texPtr,
                p = this.vertexData,
                d = this.texcoordData,
                f = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var g = this.pushBatch();
                g.type = c, g.startIndex = this.enableFrontToBack ? l : l / 2 * 3, g.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            var y = h.left,
                m = h.top,
                _ = h.right,
                v = h.bottom;
            this.enableFrontToBack ? (p[l++] = t, p[l++] = e, p[l++] = f, p[l++] = i, p[l++] = s, p[l++] = f, p[l++] = n, p[l++] = r, p[l++] = f, p[l++] = o, p[l++] = a, p[l++] = f) : (p[l++] = t, p[l++] = e, p[l++] = i, p[l++] = s, p[l++] = n, p[l++] = r, p[l++] = o, p[l++] = a), d[u++] = y, d[u++] = m, d[u++] = _, d[u++] = m, d[u++] = _, d[u++] = v, d[u++] = y, d[u++] = v, this.vertexPtr = l, this.texPtr = u
        }, t.prototype.quadTexUV = function(t, e, i, s, n, r, o, a, h, l, u, p, d, f, g, y) {
            this.vertexPtr >= S && this.endBatch();
            var m = this.vertexPtr,
                _ = this.texPtr,
                v = this.vertexData,
                b = this.texcoordData,
                w = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var x = this.pushBatch();
                x.type = c, x.startIndex = this.enableFrontToBack ? m : m / 2 * 3, x.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            this.enableFrontToBack ? (v[m++] = t, v[m++] = e, v[m++] = w, v[m++] = i, v[m++] = s, v[m++] = w, v[m++] = n, v[m++] = r, v[m++] = w, v[m++] = o, v[m++] = a, v[m++] = w) : (v[m++] = t, v[m++] = e, v[m++] = i, v[m++] = s, v[m++] = n, v[m++] = r, v[m++] = o, v[m++] = a), b[_++] = h, b[_++] = l, b[_++] = u, b[_++] = p, b[_++] = d, b[_++] = f, b[_++] = g, b[_++] = y, this.vertexPtr = m, this.texPtr = _
        }, t.prototype.convexPoly = function(t) {
            var e, i, s, n, r, o, a, h, c = t.length / 2,
                l = c - 2,
                u = l - 1,
                p = t[0],
                d = t[1];
            for (e = 0; l > e; e += 2) i = 2 * e, s = t[i + 2], n = t[i + 3], r = t[i + 4], o = t[i + 5], e === u ? this.quad(p, d, s, n, r, o, r, o) : (a = t[i + 6], h = t[i + 7], this.quad(p, d, s, n, r, o, a, h))
        };
        var T = o - 4;
        t.prototype.point = function(t, e, i, s) {
            this.pointPtr >= T && this.endBatch();
            var n = this.pointPtr,
                r = this.pointData;
            if (this.hasPointBatchTop) this.batch[this.batchPtr - 1].indexCount++;
            else {
                var o = this.pushBatch();
                o.type = y, o.startIndex = n, o.indexCount = 1, this.hasPointBatchTop = !0, this.hasQuadBatchTop = !1
            }
            r[n++] = t, r[n++] = e, r[n++] = i, r[n++] = s, this.pointPtr = n
        }, t.prototype.switchProgram = function(t) {
            if (this.lastProgram !== t) {
                var e = this.shaderPrograms[t];
                if (!e) {
                    if (0 === this.lastProgram) return;
                    t = 0, e = this.shaderPrograms[0]
                }
                var i = this.pushBatch();
                i.type = m, i.startIndex = t, this.lastProgram = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.programUsesDest = function(t) {
            var e = this.shaderPrograms[t];
            return !(!e.locDestStart && !e.locDestEnd)
        }, t.prototype.programUsesCrossSampling = function(t) {
            var e = this.shaderPrograms[t];
            return !!(e.locDestStart || e.locDestEnd || e.crossSampling)
        }, t.prototype.programPreservesOpaqueness = function(t) {
            return this.shaderPrograms[t].preservesOpaqueness
        }, t.prototype.programExtendsBox = function(t) {
            var e = this.shaderPrograms[t];
            return 0 !== e.extendBoxHorizontal || 0 !== e.extendBoxVertical
        }, t.prototype.getProgramBoxExtendHorizontal = function(t) {
            return this.shaderPrograms[t].extendBoxHorizontal
        }, t.prototype.getProgramBoxExtendVertical = function(t) {
            return this.shaderPrograms[t].extendBoxVertical
        }, t.prototype.getProgramParameterType = function(t, e) {
            return this.shaderPrograms[t].parameters[e][2]
        }, t.prototype.programIsAnimated = function(t) {
            return this.shaderPrograms[t].animated
        }, t.prototype.setProgramParameters = function(t, e, i, s, n, r, o, a, h, c, l, u, p, d, f) {
            var g, y, m, v, b, w = this.shaderPrograms[this.lastProgram];
            if (w.hasAnyOptionalUniforms || f.length) {
                if (m = this.pushBatch(), m.type = _, m.mat4param ? mat4.set(this.matMV, m.mat4param) : m.mat4param = mat4.create(), v = m.mat4param, v[0] = e, v[1] = i, v[2] = s, v[3] = n, v[4] = r, v[5] = o, v[6] = a, v[7] = h, v[8] = c, v[9] = l, v[10] = u, v[11] = p, v[12] = d, w.locSamplerBack ? m.texParam = t : m.texParam = null, f.length)
                    for (b = m.shaderParams, b.length = f.length, g = 0, y = f.length; y > g; g++) b[g] = f[g];
                this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.clear = function(t, e, i, s) {
            var n = this.pushBatch();
            n.type = g, n.startIndex = 0, n.mat4param || (n.mat4param = mat4.create()), n.mat4param[0] = t, n.mat4param[1] = e, n.mat4param[2] = i, n.mat4param[3] = s, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, t.prototype.clearRect = function(t, e, i, s) {
            if (!(0 > i || 0 > s)) {
                var n = this.pushBatch();
                n.type = g, n.startIndex = 1, n.mat4param || (n.mat4param = mat4.create()), n.mat4param[0] = t, n.mat4param[1] = e, n.mat4param[2] = i, n.mat4param[3] = s, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.clearDepth = function() {
            var t = this.pushBatch();
            t.type = g, t.startIndex = 2, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, t.prototype.setEarlyZPass = function(t) {
            if (this.enableFrontToBack && (t = !!t, this.isEarlyZPass !== t)) {
                var e = this.pushBatch();
                e.type = w, e.startIndex = t ? 1 : 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.isEarlyZPass = t, this.renderToTex = null, this.isEarlyZPass ? this.switchProgram(2) : this.switchProgram(0)
            }
        }, t.prototype.setDepthTestEnabled = function(t) {
            if (this.enableFrontToBack) {
                var e = this.pushBatch();
                e.type = b, e.startIndex = t ? 1 : 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.fullscreenQuad = function() {
            mat4.set(this.lastMV, x), this.resetModelView(), this.updateModelView();
            var t = this.width / 2,
                e = this.height / 2;
            this.quad(-t, e, t, e, t, -e, -t, -e), mat4.set(x, this.matMV), this.updateModelView()
        }, t.prototype.setColorFillMode = function(t, e, i, s) {
            this.switchProgram(3);
            var n = this.pushBatch();
            n.type = v, n.mat4param || (n.mat4param = mat4.create()), n.mat4param[0] = t, n.mat4param[1] = e, n.mat4param[2] = i, n.mat4param[3] = s, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, t.prototype.setTextureFillMode = function() {
            this.switchProgram(0)
        }, t.prototype.restoreEarlyZMode = function() {
            this.switchProgram(2)
        }, t.prototype.present = function() {
            this.endBatch(), this.gl.flush()
        };
        var O = [],
            A = {};
        t.prototype.contextLost = function() {
            cr.clearArray(O), A = {}
        };
        var C = 1,
            k = 2,
            E = 3,
            P = 4;
        t.prototype.loadTexture = function(t, e, i, s, n, r) {
            e = !!e, i = !!i;
            var o = t.src + "," + e + "," + i + (e ? "," + n : ""),
                a = null;
            if ("undefined" != typeof t.src && A.hasOwnProperty(o)) return a = A[o], a.c2refcount++, a;
            this.endBatch();
            var h = this.gl,
                c = cr.isPOT(t.width) && cr.isPOT(t.height);
            a = h.createTexture(), h.bindTexture(h.TEXTURE_2D, a), h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            var l = h.RGBA,
                u = h.RGBA,
                p = h.UNSIGNED_BYTE;
            if (s && !this.isIE) switch (s) {
                case C:
                    l = h.RGB, u = h.RGB;
                    break;
                case k:
                    p = h.UNSIGNED_SHORT_4_4_4_4;
                    break;
                case E:
                    p = h.UNSIGNED_SHORT_5_5_5_1;
                    break;
                case P:
                    l = h.RGB, u = h.RGB, p = h.UNSIGNED_SHORT_5_6_5
            }
            if (!c && e) {
                var d = document.createElement("canvas");
                d.width = cr.nextHighestPowerOfTwo(t.width), d.height = cr.nextHighestPowerOfTwo(t.height);
                var f = d.getContext("2d");
                "undefined" != typeof f.imageSmoothingEnabled ? f.imageSmoothingEnabled = i : (f.webkitImageSmoothingEnabled = i, f.mozImageSmoothingEnabled = i, f.msImageSmoothingEnabled = i), f.drawImage(t, 0, 0, t.width, t.height, 0, 0, d.width, d.height), h.texImage2D(h.TEXTURE_2D, 0, l, u, p, d)
            } else h.texImage2D(h.TEXTURE_2D, 0, l, u, p, t);
            return e ? "repeat-x" === n ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.REPEAT), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE)) : "repeat-y" === n ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.REPEAT)) : (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.REPEAT), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.REPEAT)) : (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE)), i ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.LINEAR), c && this.enable_mipmaps && !r ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR_MIPMAP_LINEAR), h.generateMipmap(h.TEXTURE_2D)) : h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR)) : (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.NEAREST)), h.bindTexture(h.TEXTURE_2D, null), this.lastTexture0 = null, a.c2width = t.width, a.c2height = t.height, a.c2refcount = 1, a.c2texkey = o, O.push(a), A[o] = a, a
        }, t.prototype.createEmptyTexture = function(t, e, i, s, n) {
            this.endBatch();
            var r = this.gl;
            this.isIE && (s = !1);
            var o = r.createTexture();
            return r.bindTexture(r.TEXTURE_2D, o), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, t, e, 0, r.RGBA, s ? r.UNSIGNED_SHORT_4_4_4_4 : r.UNSIGNED_BYTE, null), n ? (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.REPEAT), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.REPEAT)) : (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE)), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, i ? r.LINEAR : r.NEAREST), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, i ? r.LINEAR : r.NEAREST), r.bindTexture(r.TEXTURE_2D, null), this.lastTexture0 = null, o.c2width = t, o.c2height = e, O.push(o), o
        }, t.prototype.videoToTexture = function(t, e, i) {
            this.endBatch();
            var s = this.gl;
            this.isIE && (i = !1), s.bindTexture(s.TEXTURE_2D, e), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            try {
                s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, s.RGBA, i ? s.UNSIGNED_SHORT_4_4_4_4 : s.UNSIGNED_BYTE, t)
            } catch (n) {
                console && console.error && console.error("Error updating WebGL texture: ", n)
            }
            s.bindTexture(s.TEXTURE_2D, null), this.lastTexture0 = null
        }, t.prototype.deleteTexture = function(t) {
            if (t) {
                if ("undefined" != typeof t.c2refcount && t.c2refcount > 1) return void t.c2refcount--;
                this.endBatch(), t === this.lastTexture0 && (this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.lastTexture0 = null), t === this.lastTexture1 && (this.gl.activeTexture(this.gl.TEXTURE1), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.activeTexture(this.gl.TEXTURE0), this.lastTexture1 = null), cr.arrayFindRemove(O, t), "undefined" != typeof t.c2texkey && delete A[t.c2texkey], this.gl.deleteTexture(t)
            }
        }, t.prototype.estimateVRAM = function() {
            var t, e, i, s = this.width * this.height * 4 * 2;
            for (t = 0, e = O.length; e > t; t++) i = O[t], s += i.c2width * i.c2height * 4;
            return s
        }, t.prototype.textureCount = function() {
            return O.length
        }, t.prototype.setRenderingToTexture = function(t) {
            if (t !== this.renderToTex) {
                var e = this.pushBatch();
                e.type = f, e.texParam = t, this.renderToTex = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, cr.GLWrap = t
    }(),
    function() {
        function t(t) {
            if (t && (t.getContext || t.dc) && !t.c2runtime) {
                t.c2runtime = this;
                var e = this;
                this.isCrosswalk = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" == typeof window.c2isCrosswalk || !window.c2isCrosswalk), this.isCordova = this.isCrosswalk || "undefined" != typeof window.device && ("undefined" != typeof window.device.cordova || "undefined" != typeof window.device.phonegap) || "undefined" != typeof window.c2iscordova && window.c2iscordova, this.isPhoneGap = this.isCordova, this.isDirectCanvas = !!t.dc, this.isAppMobi = "undefined" != typeof window.AppMobi || this.isDirectCanvas, this.isCocoonJs = !!window.c2cocoonjs, this.isEjecta = !!window.c2ejecta, this.isCocoonJs && (CocoonJS.App.onSuspended.addEventListener(function() {
                    e.setSuspended(!0)
                }), CocoonJS.App.onActivated.addEventListener(function() {
                    e.setSuspended(!1)
                })), this.isEjecta && (document.addEventListener("pagehide", function() {
                    e.setSuspended(!0)
                }), document.addEventListener("pageshow", function() {
                    e.setSuspended(!1)
                }), document.addEventListener("resize", function() {
                    e.setSize(window.innerWidth, window.innerHeight)
                })), this.isDomFree = this.isDirectCanvas || this.isCocoonJs || this.isEjecta, this.isMicrosoftEdge = /edge\//i.test(navigator.userAgent), this.isIE = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.isMicrosoftEdge, this.isTizen = /tizen/i.test(navigator.userAgent), this.isAndroid = /android/i.test(navigator.userAgent) && !this.isTizen && !this.isIE && !this.isMicrosoftEdge, this.isiPhone = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge, this.isiPad = /ipad/i.test(navigator.userAgent), this.isiOS = this.isiPhone || this.isiPad || this.isEjecta, this.isiPhoneiOS6 = this.isiPhone && /os\s6/i.test(navigator.userAgent), this.isChrome = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge, this.isAmazonWebApp = /amazonwebappplatform/i.test(navigator.userAgent), this.isFirefox = /firefox/i.test(navigator.userAgent), this.isSafari = /safari/i.test(navigator.userAgent) && !this.isChrome && !this.isIE && !this.isMicrosoftEdge, this.isWindows = /windows/i.test(navigator.userAgent), this.isNWjs = "undefined" != typeof window.c2nodewebkit || "undefined" != typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent), this.isNodeWebkit = this.isNWjs, this.isArcade = "undefined" != typeof window.is_scirra_arcade, this.isWindows8App = !("undefined" == typeof window.c2isWindows8 || !window.c2isWindows8), this.isWindows8Capable = !("undefined" == typeof window.c2isWindows8Capable || !window.c2isWindows8Capable), this.isWindowsPhone8 = !("undefined" == typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8), this.isWindowsPhone81 = !("undefined" == typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81), this.isWindows10 = !!window.cr_windows10, this.isWinJS = this.isWindows8App || this.isWindows8Capable || this.isWindowsPhone81 || this.isWindows10, this.isBlackberry10 = !("undefined" == typeof window.c2isBlackberry10 || !window.c2isBlackberry10), this.isAndroidStockBrowser = this.isAndroid && !this.isChrome && !this.isCrosswalk && !this.isFirefox && !this.isAmazonWebApp && !this.isDomFree, this.devicePixelRatio = 1, this.isMobile = this.isCordova || this.isCrosswalk || this.isAppMobi || this.isCocoonJs || this.isAndroid || this.isiOS || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isBlackberry10 || this.isTizen || this.isEjecta, this.isMobile || (this.isMobile = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent)), this.isWKWebView = !!(this.isiOS && this.isCordova && window.webkit), this.httpServer = null, this.httpServerUrl = "", this.isWKWebView && (this.httpServer = cordova && cordova.plugins && cordova.plugins.CorHttpd ? cordova.plugins.CorHttpd : null), "undefined" == typeof cr_is_preview || this.isNWjs || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.isNWjs = !0), this.isDebug = "undefined" != typeof cr_is_preview && window.location.search.indexOf("debug") > -1, this.canvas = t, this.canvasdiv = document.getElementById("c2canvasdiv"), this.gl = null, this.glwrap = null, this.glUnmaskedRenderer = "(unavailable)", this.enableFrontToBack = !1, this.earlyz_index = 0, this.ctx = null, this.fullscreenOldMarginCss = "", this.firstInFullscreen = !1, this.oldWidth = 0, this.oldHeight = 0, this.canvas.oncontextmenu = function(t) {
                    return t.preventDefault && t.preventDefault(), !1
                }, this.canvas.onselectstart = function(t) {
                    return t.preventDefault && t.preventDefault(), !1
                }, this.isDirectCanvas && (window.c2runtime = this), this.isNWjs && (window.ondragover = function(t) {
                    return t.preventDefault(), !1
                }, window.ondrop = function(t) {
                    return t.preventDefault(), !1
                }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache()), this.isAndroidStockBrowser && "undefined" != typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible"), this.width = t.width, this.height = t.height, this.draw_width = this.width, this.draw_height = this.height, this.cssWidth = this.width, this.cssHeight = this.height, this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight, this.forceCanvasAlpha = !1, this.redraw = !0, this.isSuspended = !1, Date.now || (Date.now = function() {
                    return +new Date
                }), this.plugins = [], this.types = {}, this.types_by_index = [], this.behaviors = [], this.layouts = {}, this.layouts_by_index = [], this.eventsheets = {}, this.eventsheets_by_index = [], this.wait_for_textures = [], this.triggers_to_postinit = [], this.all_global_vars = [], this.all_local_vars = [], this.solidBehavior = null, this.jumpthruBehavior = null, this.shadowcasterBehavior = null, this.deathRow = {}, this.hasPendingInstances = !1, this.isInClearDeathRow = !1, this.isInOnDestroy = 0, this.isRunningEvents = !1, this.isEndingLayout = !1, this.createRow = [], this.isLoadingState = !1, this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = "", this.lastSaveJson = "", this.signalledContinuousPreview = !1, this.suspendDrawing = !1, this.fireOnCreateAfterLoad = [], this.dt = 0, this.dt1 = 0, this.minimumFramerate = 30, this.logictime = 0, this.cpuutilisation = 0, this.timescale = 1, this.kahanTime = new cr.KahanAdder, this.wallTime = new cr.KahanAdder, this.last_tick_time = 0, this.fps = 0, this.last_fps_time = 0, this.tickcount = 0, this.execcount = 0, this.framecount = 0, this.objectcount = 0, this.changelayout = null, this.destroycallbacks = [], this.event_stack = [], this.event_stack_index = -1, this.localvar_stack = [
                    []
                ], this.localvar_stack_index = 0, this.trigger_depth = 0, this.pushEventStack(null), this.loop_stack = [], this.loop_stack_index = -1, this.next_uid = 0, this.next_puid = 0, this.layout_first_tick = !0, this.family_count = 0, this.suspend_events = [], this.raf_id = -1, this.timeout_id = -1, this.isloading = !0, this.loadingprogress = 0, this.isNodeFullscreen = !1, this.stackLocalCount = 0, this.audioInstance = null, this.had_a_click = !1, this.isInUserInputEvent = !1, this.objects_to_pretick = new cr.ObjectSet, this.objects_to_tick = new cr.ObjectSet, this.objects_to_tick2 = new cr.ObjectSet, this.registered_collisions = [], this.temp_poly = new cr.CollisionPoly([]), this.temp_poly2 = new cr.CollisionPoly([]), this.allGroups = [], this.groups_by_name = {}, this.cndsBySid = {}, this.actsBySid = {}, this.varsBySid = {}, this.blocksBySid = {}, this.running_layout = null, this.layer_canvas = null, this.layer_ctx = null, this.layer_tex = null, this.layout_tex = null, this.layout_canvas = null, this.layout_ctx = null, this.is_WebGL_context_lost = !1, this.uses_background_blending = !1, this.fx_tex = [null, null], this.fullscreen_scaling = 0, this.files_subfolder = "", this.objectsByUid = {}, this.loaderlogos = null, this.snapshotCanvas = null, this.snapshotData = "", this.objectRefTable = [], this.requestProjectData()
            }
        }

        function e(t, e) {
            A && A.width === t && A.height === e || (A = document.createElement("canvas"), A.width = t, A.height = e, C = A.getContext("2d"))
        }

        function i(t, e) {
            return 128 >= e ? t[3] : 256 >= e ? t[2] : 512 >= e ? t[1] : t[0]
        }

        function s() {
            return E.length ? E.pop() : new cr.ObjectSet
        }

        function n(t) {
            t.clear(), E.push(t)
        }

        function r() {
            try {
                return !!window.indexedDB
            } catch (t) {
                return !1
            }
        }

        function o(t) {
            var e = t.target.result;
            e.createObjectStore("saves", {
                keyPath: "slot"
            })
        }

        function a(t, e, i, s) {
            try {
                var n = indexedDB.open("_C2SaveStates");
                n.onupgradeneeded = o, n.onerror = s, n.onsuccess = function(n) {
                    var r = n.target.result;
                    r.onerror = s;
                    var o = r.transaction(["saves"], "readwrite"),
                        a = o.objectStore("saves"),
                        h = a.put({
                            slot: t,
                            data: e
                        });
                    h.onsuccess = i
                }
            } catch (r) {
                s(r)
            }
        }

        function h(t, e, i) {
            try {
                var s = indexedDB.open("_C2SaveStates");
                s.onupgradeneeded = o, s.onerror = i, s.onsuccess = function(s) {
                    var n = s.target.result;
                    n.onerror = i;
                    var r = n.transaction(["saves"]),
                        o = r.objectStore("saves"),
                        a = o.get(t);
                    a.onsuccess = function(t) {
                        e(a.result ? a.result.data : null)
                    }
                }
            } catch (n) {
                i(n)
            }
        }

        function c() {
            cr.logexport("Reloading for continuous preview"), window.c2cocoonjs ? CocoonJS.App.reload() : window.location.search.indexOf("continuous") > -1 ? window.location.reload(!0) : window.location = window.location + "?continuous"
        }

        function l(t) {
            var e, i = {};
            for (e in t)
                if (t.hasOwnProperty(e)) {
                    if (t[e] instanceof cr.ObjectSet) continue;
                    if (t[e] && "undefined" != typeof t[e].c2userdata) continue;
                    if ("spriteCreatedDestroyCallback" === e) continue;
                    i[e] = t[e]
                }
            return i
        }
        var u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
        t.prototype.requestProjectData = function() {
            var t = this;
            if (this.isWKWebView) return void(this.httpServer ? this.httpServer.startServer({
                port: 0,
                localhost_only: !0
            }, function(e) {
                t.httpServerUrl = e, t.fetchLocalFileViaCordovaAsText("data.js", function(e) {
                    t.loadProject(JSON.parse(e))
                }, function(t) {
                    alert("Error fetching data.js")
                })
            }, function(t) {
                alert("error starting local server: " + t)
            }) : this.fetchLocalFileViaCordovaAsText("data.js", function(e) {
                t.loadProject(JSON.parse(e))
            }, function(t) {
                alert("Error fetching data.js")
            }));
            var e;
            e = this.isWindowsPhone8 ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest;
            var i = "data.js";
            (this.isWindows8App || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isWindows10) && (i = "data.json"), e.open("GET", i, !0);
            var s = !1;
            if (!this.isDomFree && "response" in e && "responseType" in e) try {
                e.responseType = "json", s = "json" === e.responseType
            } catch (n) {
                s = !1
            }
            if (!s && "responseType" in e) try {
                e.responseType = "text"
            } catch (n) {}
            if ("overrideMimeType" in e) try {
                e.overrideMimeType("application/json; charset=utf-8")
            } catch (n) {}
            this.isWindowsPhone8 ? e.onreadystatechange = function() {
                4 === e.readyState && t.loadProject(JSON.parse(e.responseText))
            } : (e.onload = function() {
                if (s) t.loadProject(e.response);
                else if (t.isEjecta) {
                    var i = e.responseText;
                    i = i.substr(i.indexOf("{")), t.loadProject(JSON.parse(i))
                } else t.loadProject(JSON.parse(e.responseText))
            }, e.onerror = function(t) {
                cr.logerror("Error requesting " + i + ":"), cr.logerror(t)
            }), e.send()
        }, t.prototype.initRendererAndLoader = function() {
            var t, e, i, s, n, r, o, a, h, c, l = this;
            this.isRetina = (!this.isDomFree || this.isEjecta || this.isCordova) && this.useHighDpi && !this.isAndroidStockBrowser, 0 === this.fullscreen_mode && this.isiOS && (this.isRetina = !1), this.devicePixelRatio = this.isRetina ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1, this.ClearDeathRow();
            var u, p = !!(this.forceCanvasAlpha || this.alphaBackground && !(this.isNWjs || this.isWinJS || this.isWindowsPhone8 || this.isCrosswalk || this.isCordova || this.isAmazonWebApp));
            this.fullscreen_mode > 0 && this.setSize(window.innerWidth, window.innerHeight, !0);
            try {
                this.enableWebGL && (this.isCocoonJs || this.isEjecta || !this.isDomFree) && (u = {
                    alpha: p,
                    depth: !1,
                    antialias: !1,
                    failIfMajorPerformanceCaveat: !0
                }, this.gl = this.canvas.getContext("webgl", u) || this.canvas.getContext("experimental-webgl", u))
            } catch (d) {}
            if (this.gl) {
                var f = this.gl.getExtension("WEBGL_debug_renderer_info");
                if (f) {
                    var g = this.gl.getParameter(f.UNMASKED_VENDOR_WEBGL),
                        y = this.gl.getParameter(f.UNMASKED_RENDERER_WEBGL);
                    this.glUnmaskedRenderer = y + " [" + g + "]"
                }
                for (this.enableFrontToBack && (this.glUnmaskedRenderer += " [front-to-back enabled]"), this.isDomFree || (this.overlay_canvas = document.createElement("canvas"), jQuery(this.overlay_canvas).appendTo(this.canvas.parentNode), this.overlay_canvas.oncontextmenu = function(t) {
                    return !1
                }, this.overlay_canvas.onselectstart = function(t) {
                    return !1
                }, this.overlay_canvas.width = Math.round(this.cssWidth * this.devicePixelRatio), this.overlay_canvas.height = Math.round(this.cssHeight * this.devicePixelRatio), jQuery(this.overlay_canvas).css({
                    width: this.cssWidth + "px",
                    height: this.cssHeight + "px"
                }), this.positionOverlayCanvas(), this.overlay_ctx = this.overlay_canvas.getContext("2d")), this.glwrap = new cr.GLWrap(this.gl, this.isMobile, this.enableFrontToBack), this.glwrap.setSize(this.canvas.width, this.canvas.height), this.glwrap.enable_mipmaps = 0 !== this.downscalingQuality, this.ctx = null, this.canvas.addEventListener("webglcontextlost", function(t) {
                    t.preventDefault(), l.onContextLost(), cr.logexport("[Construct 2] WebGL context lost"), window.cr_setSuspended(!0)
                }, !1), this.canvas.addEventListener("webglcontextrestored", function(t) {
                    l.glwrap.initState(), l.glwrap.setSize(l.glwrap.width, l.glwrap.height, !0), l.layer_tex = null, l.layout_tex = null, l.fx_tex[0] = null, l.fx_tex[1] = null, l.onContextRestored(), l.redraw = !0, cr.logexport("[Construct 2] WebGL context restored"), window.cr_setSuspended(!1)
                }, !1), t = 0, e = this.types_by_index.length; e > t; t++)
                    for (o = this.types_by_index[t], i = 0, s = o.effect_types.length; s > i; i++) a = o.effect_types[i], a.shaderindex = this.glwrap.getShaderIndex(a.id), a.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(a.shaderindex), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(a.shaderindex);
                for (t = 0, e = this.layouts_by_index.length; e > t; t++) {
                    for (h = this.layouts_by_index[t], i = 0, s = h.effect_types.length; s > i; i++) a = h.effect_types[i], a.shaderindex = this.glwrap.getShaderIndex(a.id), a.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(a.shaderindex);
                    for (h.updateActiveEffects(), i = 0, s = h.layers.length; s > i; i++) {
                        for (c = h.layers[i], n = 0, r = c.effect_types.length; r > n; n++) a = c.effect_types[n], a.shaderindex = this.glwrap.getShaderIndex(a.id), a.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(a.shaderindex), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(a.shaderindex);
                        c.updateActiveEffects()
                    }
                }
            } else {
                if (this.fullscreen_mode > 0 && this.isDirectCanvas) {
                    this.canvas = null, document.oncontextmenu = function(t) {
                        return !1
                    }, document.onselectstart = function(t) {
                        return !1
                    }, this.ctx = AppMobi.canvas.getContext("2d");
                    try {
                        this.ctx.samplingMode = this.linearSampling ? "smooth" : "sharp", this.ctx.globalScale = 1, this.ctx.HTML5CompatibilityMode = !0, this.ctx.imageSmoothingEnabled = this.linearSampling
                    } catch (d) {}
                    0 !== this.width && 0 !== this.height && (this.ctx.width = this.width, this.ctx.height = this.height)
                }
                this.ctx || (this.isCocoonJs ? (u = {
                    antialias: !!this.linearSampling,
                    alpha: p
                }, this.ctx = this.canvas.getContext("2d", u)) : (u = {
                    alpha: p
                }, this.ctx = this.canvas.getContext("2d", u)), this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling)), this.overlay_canvas = null, this.overlay_ctx = null
            } if (this.tickFunc = function(t) {
                l.tick(!1, t)
            }, window == window.top || this.isDomFree || this.isWinJS || this.isWindowsPhone8 || (document.addEventListener("mousedown", function() {
                window.focus()
            }, !0), document.addEventListener("touchstart", function() {
                window.focus()
            }, !0)), "undefined" != typeof cr_is_preview && (this.isCocoonJs && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), window.location.search.indexOf("continuous") > -1 && (cr.logexport("Reloading for continuous preview"), this.loadFromSlot = "__c2_continuouspreview", this.suspendDrawing = !0), this.pauseOnBlur && !this.isMobile && (jQuery(window).focus(function() {
                l.setSuspended(!1)
            }), jQuery(window).blur(function() {
                var t = window.parent;
                t && t.document.hasFocus() || l.setSuspended(!0)
            }))), window.addEventListener("blur", function() {
                l.onWindowBlur()
            }), !this.isDomFree) {
                var m = function(t) {
                    if (cr.isCanvasInputEvent(t) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                        document.activeElement.blur()
                    } catch (t) {}
                };
                window.navigator.pointerEnabled ? document.addEventListener("pointerdown", m) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", m) : document.addEventListener("touchstart", m), document.addEventListener("mousedown", m)
            }
            0 === this.fullscreen_mode && this.isRetina && this.devicePixelRatio > 1 && this.setSize(this.original_width, this.original_height, !0), this.tryLockOrientation(), this.getready(), this.go(), this.extra = {}, cr.seal(this)
        };
        t.prototype.setSize = function(t, e, i) {
            var s = 0,
                n = 0,
                r = 0,
                o = 0,
                a = 0;
            if (this.lastWindowWidth !== t || this.lastWindowHeight !== e || i) {
                this.lastWindowWidth = t, this.lastWindowHeight = e;
                var h, c, l = this.fullscreen_mode,
                    u = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen) && !this.isCordova;
                if (u || 0 !== this.fullscreen_mode || i) {
                    u && this.fullscreen_scaling > 0 && (l = this.fullscreen_scaling);
                    var p = this.devicePixelRatio;
                    l >= 4 ? (h = this.original_width / this.original_height, c = t / e, c > h ? (r = e * h, 5 === l ? (a = r * p / this.original_width, a > 1 ? a = Math.floor(a) : 1 > a && (a = 1 / Math.ceil(1 / a)), r = this.original_width * a / p, o = this.original_height * a / p, s = (t - r) / 2, n = (e - o) / 2, t = r, e = o) : (s = (t - r) / 2, t = r)) : (o = t / h, 5 === l ? (a = o * p / this.original_height, a > 1 ? a = Math.floor(a) : 1 > a && (a = 1 / Math.ceil(1 / a)), r = this.original_width * a / p, o = this.original_height * a / p, s = (t - r) / 2, n = (e - o) / 2, t = r, e = o) : (n = (e - o) / 2, e = o)), u && !this.isNWjs && (s = 0, n = 0)) : this.isNWjs && this.isNodeFullscreen && 0 === this.fullscreen_mode_set && (s = Math.floor((t - this.original_width) / 2), n = Math.floor((e - this.original_height) / 2), t = this.original_width, e = this.original_height), 2 > l && (this.aspect_scale = p), this.cssWidth = Math.round(t), this.cssHeight = Math.round(e), this.width = Math.round(t * p), this.height = Math.round(e * p), this.redraw = !0, this.wantFullscreenScalingQuality ? (this.draw_width = this.width, this.draw_height = this.height, this.fullscreenScalingQuality = !0) : this.width < this.original_width && this.height < this.original_height || 1 === l ? (this.draw_width = this.width, this.draw_height = this.height, this.fullscreenScalingQuality = !0) : (this.draw_width = this.original_width, this.draw_height = this.original_height, this.fullscreenScalingQuality = !1, 2 === l ? (h = this.original_width / this.original_height, c = this.lastWindowWidth / this.lastWindowHeight, h > c ? this.draw_width = this.draw_height * c : c > h && (this.draw_height = this.draw_width / c)) : 3 === l && (h = this.original_width / this.original_height, c = this.lastWindowWidth / this.lastWindowHeight, c > h ? this.draw_width = this.draw_height * c : h > c && (this.draw_height = this.draw_width / c))), this.canvasdiv && !this.isDomFree && (jQuery(this.canvasdiv).css({
                        width: Math.round(t) + "px",
                        height: Math.round(e) + "px",
                        "margin-left": Math.floor(s) + "px",
                        "margin-top": Math.floor(n) + "px"
                    }), "undefined" != typeof cr_is_preview && jQuery("#borderwrap").css({
                        width: Math.round(t) + "px",
                        height: Math.round(e) + "px"
                    })), this.canvas && (this.canvas.width = Math.round(t * p), this.canvas.height = Math.round(e * p), this.isEjecta ? (this.canvas.style.left = Math.floor(s) + "px", this.canvas.style.top = Math.floor(n) + "px", this.canvas.style.width = Math.round(t) + "px", this.canvas.style.height = Math.round(e) + "px") : this.isRetina && !this.isDomFree && (this.canvas.style.width = Math.round(t) + "px", this.canvas.style.height = Math.round(e) + "px")), this.overlay_canvas && (this.overlay_canvas.width = Math.round(t * p), this.overlay_canvas.height = Math.round(e * p), this.overlay_canvas.style.width = this.cssWidth + "px", this.overlay_canvas.style.height = this.cssHeight + "px"), this.glwrap && this.glwrap.setSize(Math.round(t * p), Math.round(e * p)), this.isDirectCanvas && this.ctx && (this.ctx.width = Math.round(t), this.ctx.height = Math.round(e)), this.ctx && this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling), this.tryLockOrientation(), this.isiPhone && !this.isCordova && window.scrollTo(0, 0)
                }
            }
        }, t.prototype.tryLockOrientation = function() {
            if (this.autoLockOrientation && 0 !== this.orientations) {
                var t = "portrait";
                2 === this.orientations && (t = "landscape");
                try {
                    screen.orientation && screen.orientation.lock ? screen.orientation.lock(t)["catch"](function() {}) : screen.lockOrientation ? screen.lockOrientation(t) : screen.webkitLockOrientation ? screen.webkitLockOrientation(t) : screen.mozLockOrientation ? screen.mozLockOrientation(t) : screen.msLockOrientation && screen.msLockOrientation(t)
                } catch (e) {
                    console && console.warn && console.warn("Failed to lock orientation: ", e)
                }
            }
        }, t.prototype.onContextLost = function() {
            this.glwrap.contextLost(), this.is_WebGL_context_lost = !0;
            var t, e, i;
            for (t = 0, e = this.types_by_index.length; e > t; t++) i = this.types_by_index[t], i.onLostWebGLContext && i.onLostWebGLContext()
        }, t.prototype.onContextRestored = function() {
            this.is_WebGL_context_lost = !1;
            var t, e, i;
            for (t = 0, e = this.types_by_index.length; e > t; t++) i = this.types_by_index[t], i.onRestoreWebGLContext && i.onRestoreWebGLContext()
        }, t.prototype.positionOverlayCanvas = function() {
            if (!this.isDomFree) {
                var t = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova,
                    e = t ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
                e.position = "absolute", jQuery(this.overlay_canvas).css(e)
            }
        };
        var p = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
        t.prototype.setSuspended = function(t) {
            var e, i;
            if (t && !this.isSuspended)
                for (cr.logexport("[Construct 2] Suspending"), this.isSuspended = !0, -1 !== this.raf_id && p && p(this.raf_id), -1 !== this.timeout_id && clearTimeout(this.timeout_id), e = 0, i = this.suspend_events.length; i > e; e++) this.suspend_events[e](!0);
            else if (!t && this.isSuspended) {
                for (cr.logexport("[Construct 2] Resuming"), this.isSuspended = !1, this.last_tick_time = cr.performance_now(), this.last_fps_time = cr.performance_now(), this.framecount = 0, this.logictime = 0, e = 0, i = this.suspend_events.length; i > e; e++) this.suspend_events[e](!1);
                this.tick(!1)
            }
        }, t.prototype.addSuspendCallback = function(t) {
            this.suspend_events.push(t)
        }, t.prototype.GetObjectReference = function(t) {
            return this.objectRefTable[t]
        }, t.prototype.loadProject = function(t) {
            t && t.project || cr.logerror("Project model unavailable");
            var e = t.project;
            if (this.name = e[0], this.first_layout = e[1], this.fullscreen_mode = e[12], this.fullscreen_mode_set = e[12], this.original_width = e[10], this.original_height = e[11], this.parallax_x_origin = this.original_width / 2, this.parallax_y_origin = this.original_height / 2, this.isDomFree && !this.isEjecta && (e[12] >= 4 || 0 === e[12]) && (cr.logexport("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.fullscreen_mode = 3, this.fullscreen_mode_set = 3), this.uses_loader_layout = e[18], this.loaderstyle = e[19], 0 === this.loaderstyle) {
                var i = new Image;
                i.crossOrigin = "anonymous", this.setImageSrc(i, "loading-logo.png"), this.loaderlogos = {
                    logo: i
                }
            } else if (4 === this.loaderstyle) {
                var s = new Image;
                s.src = "";
                var n = new Image;
                n.src = "";
                var r = new Image;
                r.src = "";
                var o = new Image;
                o.src = "";
                var a = new Image;
                a.src = "";
                var h = new Image;
                h.src = "";
                var c = new Image;
                c.src = "";
                var l = new Image;
                l.src = "";
                var u = new Image;
                u.src = "";
                var p = new Image;
                p.src = "";
                var d = new Image;
                d.src = "";
                var f = new Image;
                f.src = "", this.loaderlogos = {
                    logo: [s, n, r, o],
                    powered: [a, h, c, l],
                    website: [u, p, d, f]
                }
            }
            this.next_uid = e[21], this.objectRefTable = cr.getObjectRefTable(), this.system = new cr.system_object(this);
            var g, y, m, _, v, b, w, x, S, T, O, A, C;
            for (g = 0, y = e[2].length; y > g; g++) w = e[2][g], O = this.GetObjectReference(w[0]), cr.add_common_aces(w, O.prototype), A = new O(this), A.singleglobal = w[1], A.is_world = w[2], A.must_predraw = w[9], A.onCreate && A.onCreate(), cr.seal(A), this.plugins.push(A);
            for (this.objectRefTable = cr.getObjectRefTable(), g = 0, y = e[3].length; y > g; g++) {
                for (w = e[3][g], C = this.GetObjectReference(w[1]), A = null, m = 0, _ = this.plugins.length; _ > m; m++)
                    if (this.plugins[m] instanceof C) {
                        A = this.plugins[m];
                        break
                    }
                var k = new A.Type(A);
                for (k.name = w[0], k.is_family = w[2], k.instvar_sids = w[3].slice(0), k.vars_count = w[3].length, k.behs_count = w[4], k.fx_count = w[5], k.sid = w[11], k.is_family ? (k.members = [], k.family_index = this.family_count++, k.families = null) : (k.members = null, k.family_index = -1, k.families = []), k.family_var_map = null, k.family_beh_map = null, k.family_fx_map = null, k.is_contained = !1, k.container = null, w[6] ? (k.texture_file = w[6][0], k.texture_filesize = w[6][1], k.texture_pixelformat = w[6][2]) : (k.texture_file = null, k.texture_filesize = 0, k.texture_pixelformat = 0), w[7] ? k.animations = w[7] : k.animations = null, k.index = g, k.instances = [], k.deadCache = [], k.solstack = [new cr.selection(k)], k.cur_sol = 0, k.default_instance = null, k.default_layerindex = 0, k.stale_iids = !0, k.updateIIDs = cr.type_updateIIDs, k.getFirstPicked = cr.type_getFirstPicked, k.getPairedInstance = cr.type_getPairedInstance, k.getCurrentSol = cr.type_getCurrentSol, k.pushCleanSol = cr.type_pushCleanSol, k.pushCopySol = cr.type_pushCopySol, k.popSol = cr.type_popSol, k.getBehaviorByName = cr.type_getBehaviorByName, k.getBehaviorIndexByName = cr.type_getBehaviorIndexByName, k.getEffectIndexByName = cr.type_getEffectIndexByName, k.applySolToContainer = cr.type_applySolToContainer, k.getInstanceByIID = cr.type_getInstanceByIID, k.collision_grid = new cr.SparseGrid(this.original_width, this.original_height), k.any_cell_changed = !0, k.any_instance_parallaxed = !1, k.extra = {}, k.toString = cr.type_toString, k.behaviors = [], m = 0, _ = w[8].length; _ > m; m++) {
                    x = w[8][m];
                    var E = this.GetObjectReference(x[1]),
                        P = null;
                    for (v = 0, b = this.behaviors.length; b > v; v++)
                        if (this.behaviors[v] instanceof E) {
                            P = this.behaviors[v];
                            break
                        }
                    P || (P = new E(this), P.my_types = [], P.my_instances = new cr.ObjectSet, P.onCreate && P.onCreate(), cr.seal(P), this.behaviors.push(P), cr.behaviors.solid && P instanceof cr.behaviors.solid && (this.solidBehavior = P), cr.behaviors.jumpthru && P instanceof cr.behaviors.jumpthru && (this.jumpthruBehavior = P), cr.behaviors.shadowcaster && P instanceof cr.behaviors.shadowcaster && (this.shadowcasterBehavior = P)), -1 === P.my_types.indexOf(k) && P.my_types.push(k);
                    var I = new P.Type(P, k);
                    I.name = x[0], I.sid = x[2], I.onCreate(), cr.seal(I), k.behaviors.push(I)
                }
                for (k.global = w[9], k.isOnLoaderLayout = w[10], k.effect_types = [], m = 0, _ = w[12].length; _ > m; m++) k.effect_types.push({
                    id: w[12][m][0],
                    name: w[12][m][1],
                    shaderindex: -1,
                    preservesOpaqueness: !1,
                    active: !0,
                    index: m
                });
                if (k.tile_poly_data = w[13], (!this.uses_loader_layout || k.is_family || k.isOnLoaderLayout || !A.is_world) && (k.onCreate(), cr.seal(k)), k.name && (this.types[k.name] = k), this.types_by_index.push(k), A.singleglobal) {
                    var M = new A.Instance(k);
                    M.uid = this.next_uid++, M.puid = this.next_puid++, M.iid = 0, M.get_iid = cr.inst_get_iid, M.toString = cr.inst_toString, M.properties = w[14], M.onCreate(), cr.seal(M), k.instances.push(M), this.objectsByUid[M.uid.toString()] = M
                }
            }
            for (g = 0, y = e[4].length; y > g; g++) {
                var R, L = e[4][g],
                    F = this.types_by_index[L[0]];
                for (m = 1, _ = L.length; _ > m; m++) R = this.types_by_index[L[m]], R.families.push(F), F.members.push(R)
            }
            for (g = 0, y = e[28].length; y > g; g++) {
                var B = e[28][g],
                    N = [];
                for (m = 0, _ = B.length; _ > m; m++) N.push(this.types_by_index[B[m]]);
                for (m = 0, _ = N.length; _ > m; m++) N[m].is_contained = !0, N[m].container = N
            }
            if (this.family_count > 0)
                for (g = 0, y = this.types_by_index.length; y > g; g++)
                    if (S = this.types_by_index[g], !S.is_family && S.families.length) {
                        S.family_var_map = new Array(this.family_count), S.family_beh_map = new Array(this.family_count), S.family_fx_map = new Array(this.family_count);
                        var j = [],
                            D = 0,
                            W = 0,
                            z = 0;
                        for (m = 0, _ = S.families.length; _ > m; m++)
                            for (T = S.families[m], S.family_var_map[T.family_index] = D, D += T.vars_count, S.family_beh_map[T.family_index] = W, W += T.behs_count, S.family_fx_map[T.family_index] = z, z += T.fx_count, v = 0, b = T.effect_types.length; b > v; v++) j.push(cr.shallowCopy({}, T.effect_types[v]));
                        for (S.effect_types = j.concat(S.effect_types), m = 0, _ = S.effect_types.length; _ > m; m++) S.effect_types[m].index = m
                    }
            for (g = 0, y = e[5].length; y > g; g++) {
                w = e[5][g];
                var G = new cr.layout(this, w);
                cr.seal(G), this.layouts[G.name] = G, this.layouts_by_index.push(G)
            }
            for (g = 0, y = e[6].length; y > g; g++) {
                w = e[6][g];
                var U = new cr.eventsheet(this, w);
                cr.seal(U), this.eventsheets[U.name] = U, this.eventsheets_by_index.push(U)
            }
            for (g = 0, y = this.eventsheets_by_index.length; y > g; g++) this.eventsheets_by_index[g].postInit();
            for (g = 0, y = this.eventsheets_by_index.length; y > g; g++) this.eventsheets_by_index[g].updateDeepIncludes();
            for (g = 0, y = this.triggers_to_postinit.length; y > g; g++) this.triggers_to_postinit[g].postInit();
            cr.clearArray(this.triggers_to_postinit), this.audio_to_preload = e[7], this.files_subfolder = e[8], this.pixel_rounding = e[9], this.aspect_scale = 1, this.enableWebGL = e[13], this.linearSampling = e[14], this.alphaBackground = e[15], this.versionstr = e[16], this.useHighDpi = e[17], this.orientations = e[20], this.autoLockOrientation = this.orientations > 0, this.pauseOnBlur = e[22], this.wantFullscreenScalingQuality = e[23], this.fullscreenScalingQuality = this.wantFullscreenScalingQuality, this.downscalingQuality = e[24], this.preloadSounds = e[25], this.projectName = e[26], this.enableFrontToBack = e[27] && !this.isIE, this.start_time = Date.now(), cr.clearArray(this.objectRefTable), this.initRendererAndLoader()
        };
        var d = !1;
        t.prototype.waitForImageLoad = function(t, e) {
            t.cocoonLazyLoad = !0, t.onerror = function(e) {
                t.c2error = !0, d = !0, console && console.error && console.error("Error loading image '" + t.src + "': ", e)
            }, this.isEjecta ? t.src = e : t.src || ("undefined" != typeof XAPKReader ? XAPKReader.get(e, function(e) {
                t.src = e
            }, function(i) {
                t.c2error = !0, d = !0, console && console.error && console.error("Error extracting image '" + e + "' from expansion file: ", i)
            }) : (t.crossOrigin = "anonymous", this.setImageSrc(t, e))), this.wait_for_textures.push(t)
        }, t.prototype.findWaitingTexture = function(t) {
            var e, i;
            for (e = 0, i = this.wait_for_textures.length; i > e; e++)
                if (this.wait_for_textures[e].cr_src === t) return this.wait_for_textures[e];
            return null
        };
        var f = 0,
            g = !1;
        t.prototype.getready = function() {
            this.audioInstance && (f = this.audioInstance.setPreloadList(this.audio_to_preload))
        }, t.prototype.areAllTexturesAndSoundsLoaded = function() {
            var t, e, i, s = f,
                n = 0,
                r = 0,
                o = !0;
            for (t = 0, e = this.wait_for_textures.length; e > t; t++) {
                i = this.wait_for_textures[t];
                var a = i.cr_filesize;
                (!a || 0 >= a) && (a = 5e4), s += a, i.src && (i.complete || i.loaded) && !i.c2error ? n += a : o = !1
            }
            return o && this.preloadSounds && this.audioInstance && (g || (this.audioInstance.startPreloads(), g = !0), r = this.audioInstance.getPreloadedSize(), n += r, f > r && (o = !1)), 0 == s ? this.progress = 1 : this.progress = n / s, o
        };
        var y = !1;
        t.prototype.go = function() {
            if (this.ctx || this.glwrap) {
                var t = this.ctx || this.overlay_ctx;
                this.overlay_canvas && this.positionOverlayCanvas();
                var e = window.innerWidth,
                    i = window.innerHeight;
                (this.lastWindowWidth !== e || this.lastWindowHeight !== i) && this.setSize(e, i), this.progress = 0, this.last_progress = -1;
                var s = this;
                if (this.areAllTexturesAndSoundsLoaded() && (4 !== this.loaderstyle || y)) this.go_loading_finished();
                else {
                    var n = Date.now() - this.start_time;
                    if (t) {
                        var r = this.width,
                            o = this.height,
                            a = this.devicePixelRatio;
                        if (this.loaderstyle < 3 && (this.isCocoonJs || n >= 500 && this.last_progress != this.progress)) {
                            t.clearRect(0, 0, r, o);
                            var h, c = r / 2,
                                l = o / 2,
                                p = 0 === this.loaderstyle && this.loaderlogos.logo.complete,
                                f = 40 * a,
                                g = 0,
                                m = 80 * a;
                            if (p) {
                                var _ = this.loaderlogos.logo;
                                m = _.width * a, h = _.height * a, f = m / 2, g = h / 2, t.drawImage(_, cr.floor(c - f), cr.floor(l - g), m, h)
                            }
                            if (this.loaderstyle <= 1) l += g + (p ? 12 * a : 0), c -= f, c = cr.floor(c) + .5, l = cr.floor(l) + .5, t.fillStyle = d ? "red" : "DodgerBlue", t.fillRect(c, l, Math.floor(m * this.progress), 6 * a), t.strokeStyle = "black", t.strokeRect(c, l, m, 6 * a), t.strokeStyle = "white", t.strokeRect(c - 1 * a, l - 1 * a, m + 2 * a, 8 * a);
                            else if (2 === this.loaderstyle) {
                                t.font = this.isEjecta ? "12pt ArialMT" : "12pt Arial", t.fillStyle = d ? "#f00" : "#999", t.textBaseLine = "middle";
                                var v = Math.round(100 * this.progress) + "%",
                                    b = t.measureText ? t.measureText(v) : null,
                                    w = b ? b.width : 0;
                                t.fillText(v, c - w / 2, l)
                            }
                            this.last_progress = this.progress
                        } else if (4 === this.loaderstyle) return this.draw_c2_splash_loader(t), void(u ? u(function() {
                            s.go()
                        }) : setTimeout(function() {
                            s.go()
                        }, 16))
                    }
                    setTimeout(function() {
                        s.go()
                    }, this.isCocoonJs ? 10 : 100)
                }
            }
        };
        var m = -1,
            _ = 300,
            v = 300,
            b = "undefined" == typeof cr_is_preview ? 200 : 0,
            w = !0,
            x = !1,
            S = 0,
            T = 0,
            O = "undefined" == typeof cr_is_preview ? 3e3 : 0,
            A = null,
            C = null,
            k = 0;
        t.prototype.draw_c2_splash_loader = function(t) {
            if (!y) {
                for (var s = Math.ceil(this.width), n = Math.ceil(this.height), r = (this.devicePixelRatio, this.loaderlogos.logo), o = this.loaderlogos.powered, a = this.loaderlogos.website, h = 0; 4 > h; ++h)
                    if (!r[h].complete || !o[h].complete || !a[h].complete) return;
                0 === k && (m = Date.now());
                var c, l, u = Date.now(),
                    p = !1,
                    f = t;
                w || x ? (t.clearRect(0, 0, s, n), e(s, n), f = C, p = !0, w && 1 === k && (m = Date.now())) : t.globalAlpha = 1, f.fillStyle = "#333333", f.fillRect(0, 0, s, n), this.cssHeight > 256 ? (c = cr.clamp(.22 * n, 105, .6 * s), l = .25 * c, f.drawImage(i(o, c), .5 * s - c / 2, .2 * n - l / 2, c, l), c = Math.min(.395 * n, .95 * s), l = c, f.drawImage(i(r, c), .5 * s - c / 2, .485 * n - l / 2, c, l), c = cr.clamp(.22 * n, 105, .6 * s), l = .25 * c, f.drawImage(i(a, c), .5 * s - c / 2, .868 * n - l / 2, c, l), f.fillStyle = "#3C3C3C", c = s, l = Math.max(.005 * n, 2), f.fillRect(0, .8 * n - l / 2, c, l), f.fillStyle = d ? "red" : "#E0FF65", c = s * this.progress, f.fillRect(.5 * s - c / 2, .8 * n - l / 2, c, l)) : (c = .55 * n, l = c, f.drawImage(i(r, c), .5 * s - c / 2, .45 * n - l / 2, c, l), f.fillStyle = "#3C3C3C", c = s, l = Math.max(.005 * n, 2), f.fillRect(0, .85 * n - l / 2, c, l), f.fillStyle = d ? "red" : "#E0FF65", c = s * this.progress, f.fillRect(.5 * s - c / 2, .85 * n - l / 2, c, l)), p && (w ? 0 === k ? t.globalAlpha = 0 : t.globalAlpha = Math.min((u - m) / _, 1) : x && (t.globalAlpha = Math.max(1 - (u - T) / v, 0)), t.drawImage(A, 0, 0, s, n)), w && u - m >= _ && k >= 2 && (w = !1, S = u), !w && u - S >= O && !x && this.progress >= 1 && (x = !0, T = u), (x && u - T >= v + b || "undefined" != typeof cr_is_preview && this.progress >= 1 && Date.now() - m < 500) && (y = !0, w = !1, x = !1, A = null, C = null, this.loaderlogos = null), ++k
            }
        }, t.prototype.go_loading_finished = function() {
            this.overlay_canvas && (this.canvas.parentNode.removeChild(this.overlay_canvas), this.overlay_ctx = null, this.overlay_canvas = null), this.start_time = Date.now(), this.last_fps_time = cr.performance_now();
            var t, e, i;
            if (this.uses_loader_layout)
                for (t = 0, e = this.types_by_index.length; e > t; t++) i = this.types_by_index[t],
                    i.is_family || i.isOnLoaderLayout || !i.plugin.is_world || (i.onCreate(), cr.seal(i));
            else this.isloading = !1;
            for (t = 0, e = this.layouts_by_index.length; e > t; t++) this.layouts_by_index[t].createGlobalNonWorlds();
            if (this.fullscreen_mode >= 2) {
                var s = this.original_width / this.original_height,
                    n = this.width / this.height;
                2 !== this.fullscreen_mode && n > s || 2 === this.fullscreen_mode && s > n ? this.aspect_scale = this.height / this.original_height : this.aspect_scale = this.width / this.original_width
            }
            for (this.first_layout ? this.layouts[this.first_layout].startRunning() : this.layouts_by_index[0].startRunning(), this.uses_loader_layout || (this.loadingprogress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null), window.C2_RegisterSW && window.C2_RegisterSW()), navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide(), t = 0, e = this.types_by_index.length; e > t; t++) i = this.types_by_index[t], i.onAppBegin && i.onAppBegin();
            document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.tick(!1), this.isDirectCanvas && AppMobi.webview.execute("onGameReady();")
        }, t.prototype.tick = function(t, e, i) {
            if (this.running_layout) {
                var s = cr.performance_now(),
                    n = s;
                if (i || !this.isSuspended || t) {
                    t || (u ? this.raf_id = u(this.tickFunc) : this.timeout_id = setTimeout(this.tickFunc, this.isMobile ? 1 : 16));
                    var r = e || s,
                        o = this.fullscreen_mode,
                        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.isCordova;
                    if ((a || this.isNodeFullscreen) && this.fullscreen_scaling > 0 && (o = this.fullscreen_scaling), o > 0) {
                        var h = window.innerWidth,
                            c = window.innerHeight;
                        (this.lastWindowWidth !== h || this.lastWindowHeight !== c) && this.setSize(h, c)
                    }
                    if (this.isDomFree || (a ? (this.firstInFullscreen || (this.fullscreenOldMarginCss = jQuery(this.canvas).css("margin") || "0", this.firstInFullscreen = !0), this.isChrome || this.isNWjs || jQuery(this.canvas).css({
                        "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
                        "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
                    })) : this.firstInFullscreen ? (this.isChrome || this.isNWjs || jQuery(this.canvas).css("margin", this.fullscreenOldMarginCss), this.fullscreenOldMarginCss = "", this.firstInFullscreen = !1, 0 === this.fullscreen_mode && this.setSize(Math.round(this.oldWidth / this.devicePixelRatio), Math.round(this.oldHeight / this.devicePixelRatio), !0)) : (this.oldWidth = this.width, this.oldHeight = this.height)), this.isloading) {
                        var l = this.areAllTexturesAndSoundsLoaded();
                        this.loadingprogress = this.progress, l && (this.isloading = !1, this.progress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null), window.C2_RegisterSW && window.C2_RegisterSW())
                    }
                    this.logic(r), !this.redraw && !this.isCocoonJs || this.is_WebGL_context_lost || this.suspendDrawing || t || (this.redraw = !1, this.glwrap ? this.drawGL() : this.draw(), this.snapshotCanvas && (this.canvas && this.canvas.toDataURL && (this.snapshotData = this.canvas.toDataURL(this.snapshotCanvas[0], this.snapshotCanvas[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.snapshotData), this.trigger(cr.system_object.prototype.cnds.OnCanvasSnapshot, null)), this.snapshotCanvas = null)), this.hit_breakpoint || (this.tickcount++, this.execcount++, this.framecount++), this.logictime += cr.performance_now() - n
                }
            }
        }, t.prototype.logic = function(t) {
            var e, i, s, n, r, o, a, h, c;
            t - this.last_fps_time >= 1e3 && (this.last_fps_time += 1e3, t - this.last_fps_time >= 1e3 && (this.last_fps_time = t), this.fps = this.framecount, this.framecount = 0, this.cpuutilisation = this.logictime, this.logictime = 0);
            var l = 0;
            if (0 !== this.last_tick_time) {
                var u = t - this.last_tick_time;
                0 > u && (u = 0), l = u / 1e3, this.dt1 = l, this.dt1 > .5 ? this.dt1 = 0 : this.dt1 > 1 / this.minimumFramerate && (this.dt1 = 1 / this.minimumFramerate)
            }
            this.last_tick_time = t, this.dt = this.dt1 * this.timescale, this.kahanTime.add(this.dt), this.wallTime.add(l);
            var p = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova;
            if (this.fullscreen_mode >= 2 || p && this.fullscreen_scaling > 0) {
                var d = this.original_width / this.original_height,
                    f = this.width / this.height,
                    g = this.fullscreen_mode;
                p && this.fullscreen_scaling > 0 && (g = this.fullscreen_scaling), 2 !== g && f > d || 2 === g && d > f ? this.aspect_scale = this.height / this.original_height : this.aspect_scale = this.width / this.original_width, this.running_layout && (this.running_layout.scrollToX(this.running_layout.scrollX), this.running_layout.scrollToY(this.running_layout.scrollY))
            } else this.aspect_scale = this.isRetina ? this.devicePixelRatio : 1;
            this.ClearDeathRow(), this.isInOnDestroy++, this.system.runWaits(), this.isInOnDestroy--, this.ClearDeathRow(), this.isInOnDestroy++;
            var y = this.objects_to_pretick.valuesRef();
            for (e = 0, i = y.length; i > e; e++) y[e].pretick();
            for (e = 0, i = this.types_by_index.length; i > e; e++)
                if (a = this.types_by_index[e], !a.is_family && (a.behaviors.length || a.families.length))
                    for (s = 0, n = a.instances.length; n > s; s++)
                        for (h = a.instances[s], r = 0, o = h.behavior_insts.length; o > r; r++) h.behavior_insts[r].tick();
            for (e = 0, i = this.types_by_index.length; i > e; e++)
                if (a = this.types_by_index[e], !a.is_family && (a.behaviors.length || a.families.length))
                    for (s = 0, n = a.instances.length; n > s; s++)
                        for (h = a.instances[s], r = 0, o = h.behavior_insts.length; o > r; r++) c = h.behavior_insts[r], c.posttick && c.posttick();
            for (y = this.objects_to_tick.valuesRef(), e = 0, i = y.length; i > e; e++) y[e].tick();
            for (this.isInOnDestroy--, this.handleSaveLoad(), e = 0; this.changelayout && e++ < 10;) this.doChangeLayout(this.changelayout);
            for (e = 0, i = this.eventsheets_by_index.length; i > e; e++) this.eventsheets_by_index[e].hasRun = !1;
            for (this.running_layout.event_sheet && this.running_layout.event_sheet.run(), cr.clearArray(this.registered_collisions), this.layout_first_tick = !1, this.isInOnDestroy++, e = 0, i = this.types_by_index.length; i > e; e++)
                if (a = this.types_by_index[e], !a.is_family && (a.behaviors.length || a.families.length))
                    for (s = 0, n = a.instances.length; n > s; s++) {
                        var h = a.instances[s];
                        for (r = 0, o = h.behavior_insts.length; o > r; r++) c = h.behavior_insts[r], c.tick2 && c.tick2()
                    }
                for (y = this.objects_to_tick2.valuesRef(), e = 0, i = y.length; i > e; e++) y[e].tick2();
            this.isInOnDestroy--
        }, t.prototype.onWindowBlur = function() {
            var t, e, i, s, n, r, o, a, h;
            for (t = 0, e = this.types_by_index.length; e > t; t++)
                if (o = this.types_by_index[t], !o.is_family)
                    for (i = 0, s = o.instances.length; s > i; i++)
                        if (a = o.instances[i], a.onWindowBlur && a.onWindowBlur(), a.behavior_insts)
                            for (n = 0, r = a.behavior_insts.length; r > n; n++) h = a.behavior_insts[n], h.onWindowBlur && h.onWindowBlur()
        }, t.prototype.doChangeLayout = function(t) {
            var e = this.running_layout;
            this.running_layout.stopRunning();
            var i, s, n;
            if (this.glwrap)
                for (i = 0, s = this.types_by_index.length; s > i; i++) n = this.types_by_index[i], n.is_family || !n.unloadTextures || n.global && 0 !== n.instances.length || -1 !== t.initial_types.indexOf(n) || n.unloadTextures();
            e == t && cr.clearArray(this.system.waits), cr.clearArray(this.registered_collisions), this.runLayoutChangeMethods(!0), t.startRunning(), this.runLayoutChangeMethods(!1), this.redraw = !0, this.layout_first_tick = !0, this.ClearDeathRow()
        }, t.prototype.runLayoutChangeMethods = function(t) {
            var e, i, s, n, r, o, a, h, c, l;
            for (e = 0, i = this.behaviors.length; i > e; e++) s = this.behaviors[e], t ? s.onBeforeLayoutChange && s.onBeforeLayoutChange() : s.onLayoutChange && s.onLayoutChange();
            for (e = 0, i = this.types_by_index.length; i > e; e++)
                if (n = this.types_by_index[e], n.global || n.plugin.singleglobal)
                    for (r = 0, o = n.instances.length; o > r; r++)
                        if (a = n.instances[r], t ? a.onBeforeLayoutChange && a.onBeforeLayoutChange() : a.onLayoutChange && a.onLayoutChange(), a.behavior_insts)
                            for (h = 0, c = a.behavior_insts.length; c > h; h++) l = a.behavior_insts[h], t ? l.onBeforeLayoutChange && l.onBeforeLayoutChange() : l.onLayoutChange && l.onLayoutChange()
        }, t.prototype.pretickMe = function(t) {
            this.objects_to_pretick.add(t)
        }, t.prototype.unpretickMe = function(t) {
            this.objects_to_pretick.remove(t)
        }, t.prototype.tickMe = function(t) {
            this.objects_to_tick.add(t)
        }, t.prototype.untickMe = function(t) {
            this.objects_to_tick.remove(t)
        }, t.prototype.tick2Me = function(t) {
            this.objects_to_tick2.add(t)
        }, t.prototype.untick2Me = function(t) {
            this.objects_to_tick2.remove(t)
        }, t.prototype.getDt = function(t) {
            return t && -1 !== t.my_timescale ? this.dt1 * t.my_timescale : this.dt
        }, t.prototype.draw = function() {
            this.running_layout.draw(this.ctx), this.isDirectCanvas && this.ctx.present()
        }, t.prototype.drawGL = function() {
            this.enableFrontToBack && (this.earlyz_index = 1, this.running_layout.drawGL_earlyZPass(this.glwrap)), this.running_layout.drawGL(this.glwrap), this.glwrap.present()
        }, t.prototype.addDestroyCallback = function(t) {
            t && this.destroycallbacks.push(t)
        }, t.prototype.removeDestroyCallback = function(t) {
            cr.arrayFindRemove(this.destroycallbacks, t)
        }, t.prototype.getObjectByUID = function(t) {
            var e = t.toString();
            return this.objectsByUid.hasOwnProperty(e) ? this.objectsByUid[e] : null
        };
        var E = [];
        t.prototype.DestroyInstance = function(t) {
            var e, i, n = t.type,
                r = n.name,
                o = this.deathRow.hasOwnProperty(r),
                a = null;
            if (o) {
                if (a = this.deathRow[r], a.contains(t)) return
            } else a = s(), this.deathRow[r] = a; if (a.add(t), this.hasPendingInstances = !0, t.is_contained)
                for (e = 0, i = t.siblings.length; i > e; e++) this.DestroyInstance(t.siblings[e]);
            this.isInClearDeathRow && a.values_cache.push(t), this.isEndingLayout || (this.isInOnDestroy++, this.trigger(Object.getPrototypeOf(t.type.plugin).cnds.OnDestroyed, t), this.isInOnDestroy--)
        }, t.prototype.ClearDeathRow = function() {
            if (this.hasPendingInstances) {
                var t, e, i, s, n, r;
                for (this.isInClearDeathRow = !0, i = 0, n = this.createRow.length; n > i; ++i)
                    for (t = this.createRow[i], e = t.type, e.instances.push(t), s = 0, r = e.families.length; r > s; ++s) e.families[s].instances.push(t), e.families[s].stale_iids = !0;
                cr.clearArray(this.createRow), this.IterateDeathRow(), cr.wipe(this.deathRow), this.isInClearDeathRow = !1, this.hasPendingInstances = !1
            }
        }, t.prototype.IterateDeathRow = function() {
            for (var t in this.deathRow) this.deathRow.hasOwnProperty(t) && this.ClearDeathRowForType(this.deathRow[t])
        }, t.prototype.ClearDeathRowForType = function(t) {
            var e, i, s, r, o, a, h, c, l = t.valuesRef(),
                u = l[0].type;
            for (cr.arrayRemoveAllFromObjectSet(u.instances, t), u.stale_iids = !0, 0 === u.instances.length && (u.any_instance_parallaxed = !1), e = 0, i = u.families.length; i > e; ++e) a = u.families[e], cr.arrayRemoveAllFromObjectSet(a.instances, t), a.stale_iids = !0;
            for (e = 0, i = this.system.waits.length; i > e; ++e)
                if (o = this.system.waits[e], o.sols.hasOwnProperty(u.index) && cr.arrayRemoveAllFromObjectSet(o.sols[u.index].insts, t), !u.is_family)
                    for (s = 0, r = u.families.length; r > s; ++s) a = u.families[s], o.sols.hasOwnProperty(a.index) && cr.arrayRemoveAllFromObjectSet(o.sols[a.index].insts, t);
            var p = l[0].layer;
            if (p) {
                if (p.useRenderCells)
                    for (h = p.instances, e = 0, i = h.length; i > e; ++e) c = h[e], t.contains(c) && (c.update_bbox(), p.render_grid.update(c, c.rendercells, null), c.rendercells.set(0, 0, -1, -1));
                cr.arrayRemoveAllFromObjectSet(p.instances, t), p.setZIndicesStaleFrom(0)
            }
            for (e = 0; e < l.length; ++e) this.ClearDeathRowForSingleInstance(l[e], u);
            n(t), this.redraw = !0
        }, t.prototype.ClearDeathRowForSingleInstance = function(t, e) {
            var i, s, n;
            for (i = 0, s = this.destroycallbacks.length; s > i; ++i) this.destroycallbacks[i](t);
            t.collcells && e.collision_grid.update(t, t.collcells, null);
            var r = t.layer;
            if (r && r.removeFromInstanceList(t, !0), t.behavior_insts)
                for (i = 0, s = t.behavior_insts.length; s > i; ++i) n = t.behavior_insts[i], n.onDestroy && n.onDestroy(), n.behavior.my_instances.remove(t);
            this.objects_to_pretick.remove(t), this.objects_to_tick.remove(t), this.objects_to_tick2.remove(t), t.onDestroy && t.onDestroy(), this.objectsByUid.hasOwnProperty(t.uid.toString()) && delete this.objectsByUid[t.uid.toString()], this.objectcount--, e.deadCache.length < 100 && e.deadCache.push(t)
        }, t.prototype.createInstance = function(t, e, i, s) {
            if (t.is_family) {
                var n = cr.floor(Math.random() * t.members.length);
                return this.createInstance(t.members[n], e, i, s)
            }
            return t.default_instance ? this.createInstanceFromInit(t.default_instance, e, !1, i, s, !1) : null
        };
        var P = [];
        t.prototype.createInstanceFromInit = function(t, e, i, s, n, r) {
            var o, a, h, c, l;
            if (!t) return null;
            var u = this.types_by_index[t[1]],
                p = u.plugin.is_world;
            if (this.isloading && p && !u.isOnLoaderLayout) return null;
            if (p && !this.glwrap && 11 === t[0][11]) return null;
            var d = e;
            p || (e = null);
            var f;
            for (u.deadCache.length ? (f = u.deadCache.pop(), f.recycled = !0, u.plugin.Instance.call(f, u)) : (f = new u.plugin.Instance(u), f.recycled = !1), !i || r || this.objectsByUid.hasOwnProperty(t[2].toString()) ? f.uid = this.next_uid++ : f.uid = t[2], this.objectsByUid[f.uid.toString()] = f, f.puid = this.next_puid++, f.iid = u.instances.length, o = 0, a = this.createRow.length; a > o; ++o) this.createRow[o].type === u && f.iid++;
            f.get_iid = cr.inst_get_iid, f.toString = cr.inst_toString;
            var g = t[3];
            if (f.recycled) cr.wipe(f.extra);
            else {
                if (f.extra = {}, "undefined" != typeof cr_is_preview)
                    for (f.instance_var_names = [], f.instance_var_names.length = g.length, o = 0, a = g.length; a > o; o++) f.instance_var_names[o] = g[o][1];
                f.instance_vars = [], f.instance_vars.length = g.length
            }
            for (o = 0, a = g.length; a > o; o++) f.instance_vars[o] = g[o][0];
            if (p) {
                var y = t[0];
                if (f.x = cr.is_undefined(s) ? y[0] : s, f.y = cr.is_undefined(n) ? y[1] : n, f.z = y[2], f.width = y[3], f.height = y[4], f.depth = y[5], f.angle = y[6], f.opacity = y[7], f.hotspotX = y[8], f.hotspotY = y[9], f.blend_mode = y[10], l = y[11], !this.glwrap && u.effect_types.length && (f.blend_mode = l), f.compositeOp = cr.effectToCompositeOp(f.blend_mode), this.gl && cr.setGLBlend(f, f.blend_mode, this.gl), f.recycled) {
                    for (o = 0, a = y[12].length; a > o; o++)
                        for (h = 0, c = y[12][o].length; c > h; h++) f.effect_params[o][h] = y[12][o][h];
                    f.bbox.set(0, 0, 0, 0), f.collcells.set(0, 0, -1, -1), f.rendercells.set(0, 0, -1, -1), f.bquad.set_from_rect(f.bbox), cr.clearArray(f.bbox_changed_callbacks)
                } else {
                    for (f.effect_params = y[12].slice(0), o = 0, a = f.effect_params.length; a > o; o++) f.effect_params[o] = y[12][o].slice(0);
                    f.active_effect_types = [], f.active_effect_flags = [], f.active_effect_flags.length = u.effect_types.length, f.bbox = new cr.rect(0, 0, 0, 0), f.collcells = new cr.rect(0, 0, -1, -1), f.rendercells = new cr.rect(0, 0, -1, -1), f.bquad = new cr.quad, f.bbox_changed_callbacks = [], f.set_bbox_changed = cr.set_bbox_changed, f.add_bbox_changed_callback = cr.add_bbox_changed_callback, f.contains_pt = cr.inst_contains_pt, f.update_bbox = cr.update_bbox, f.update_render_cell = cr.update_render_cell, f.update_collision_cell = cr.update_collision_cell, f.get_zindex = cr.inst_get_zindex
                }
                for (f.tilemap_exists = !1, f.tilemap_width = 0, f.tilemap_height = 0, f.tilemap_data = null, 14 === y.length && (f.tilemap_exists = !0, f.tilemap_width = y[13][0], f.tilemap_height = y[13][1], f.tilemap_data = y[13][2]), o = 0, a = u.effect_types.length; a > o; o++) f.active_effect_flags[o] = !0;
                f.shaders_preserve_opaqueness = !0, f.updateActiveEffects = cr.inst_updateActiveEffects, f.updateActiveEffects(), f.uses_shaders = !!f.active_effect_types.length, f.bbox_changed = !0, f.cell_changed = !0, u.any_cell_changed = !0, f.visible = !0, f.my_timescale = -1, f.layer = e, f.zindex = e.instances.length, f.earlyz_index = 0, "undefined" == typeof f.collision_poly && (f.collision_poly = null), f.collisionsEnabled = !0, this.redraw = !0
            }
            var m, _;
            for (cr.clearArray(P), o = 0, a = u.families.length; a > o; o++) P.push.apply(P, u.families[o].behaviors);
            if (P.push.apply(P, u.behaviors), f.recycled)
                for (o = 0, a = P.length; a > o; o++) {
                    var v = P[o];
                    for (_ = f.behavior_insts[o], _.recycled = !0, v.behavior.Instance.call(_, v, f), m = t[4][o], h = 0, c = m.length; c > h; h++) _.properties[h] = m[h];
                    _.onCreate(), v.behavior.my_instances.add(f)
                } else
                    for (f.behavior_insts = [], o = 0, a = P.length; a > o; o++) {
                        var v = P[o],
                            _ = new v.behavior.Instance(v, f);
                        _.recycled = !1, _.properties = t[4][o].slice(0), _.onCreate(), cr.seal(_), f.behavior_insts.push(_), v.behavior.my_instances.add(f)
                    }
            if (m = t[5], f.recycled)
                for (o = 0, a = m.length; a > o; o++) f.properties[o] = m[o];
            else f.properties = m.slice(0); if (this.createRow.push(f), this.hasPendingInstances = !0, e && (e.appendToInstanceList(f, !0), (1 !== e.parallaxX || 1 !== e.parallaxY) && (u.any_instance_parallaxed = !0)), this.objectcount++, u.is_contained) {
                if (f.is_contained = !0, f.recycled ? cr.clearArray(f.siblings) : f.siblings = [], !i && !r) {
                    for (o = 0, a = u.container.length; a > o; o++)
                        if (u.container[o] !== u) {
                            if (!u.container[o].default_instance) return null;
                            f.siblings.push(this.createInstanceFromInit(u.container[o].default_instance, d, !1, p ? f.x : s, p ? f.y : n, !0))
                        }
                    for (o = 0, a = f.siblings.length; a > o; o++)
                        for (f.siblings[o].siblings.push(f), h = 0; a > h; h++) o !== h && f.siblings[o].siblings.push(f.siblings[h])
                }
            } else f.is_contained = !1, f.siblings = null;
            for (f.onCreate(), f.recycled || cr.seal(f), o = 0, a = f.behavior_insts.length; a > o; o++) f.behavior_insts[o].postCreate && f.behavior_insts[o].postCreate();
            return f
        }, t.prototype.getLayerByName = function(t) {
            var e, i;
            for (e = 0, i = this.running_layout.layers.length; i > e; e++) {
                var s = this.running_layout.layers[e];
                if (cr.equals_nocase(s.name, t)) return s
            }
            return null
        }, t.prototype.getLayerByNumber = function(t) {
            return t = cr.floor(t), 0 > t && (t = 0), t >= this.running_layout.layers.length && (t = this.running_layout.layers.length - 1), this.running_layout.layers[t]
        }, t.prototype.getLayer = function(t) {
            return cr.is_number(t) ? this.getLayerByNumber(t) : this.getLayerByName(t.toString())
        }, t.prototype.clearSol = function(t) {
            var e, i;
            for (e = 0, i = t.length; i > e; e++) t[e].getCurrentSol().select_all = !0
        }, t.prototype.pushCleanSol = function(t) {
            var e, i;
            for (e = 0, i = t.length; i > e; e++) t[e].pushCleanSol()
        }, t.prototype.pushCopySol = function(t) {
            var e, i;
            for (e = 0, i = t.length; i > e; e++) t[e].pushCopySol()
        }, t.prototype.popSol = function(t) {
            var e, i;
            for (e = 0, i = t.length; i > e; e++) t[e].popSol()
        }, t.prototype.updateAllCells = function(t) {
            if (t.any_cell_changed) {
                var e, i, s = t.instances;
                for (e = 0, i = s.length; i > e; ++e) s[e].update_collision_cell();
                var n = this.createRow;
                for (e = 0, i = n.length; i > e; ++e) n[e].type === t && n[e].update_collision_cell();
                t.any_cell_changed = !1
            }
        }, t.prototype.getCollisionCandidates = function(t, e, i, s) {
            var n, r, o, a = t ? 1 !== t.parallaxX || 1 !== t.parallaxY : !1;
            if (e.is_family)
                for (n = 0, r = e.members.length; r > n; ++n) o = e.members[n], a || o.any_instance_parallaxed ? cr.appendArray(s, o.instances) : (this.updateAllCells(o), o.collision_grid.queryRange(i, s));
            else a || e.any_instance_parallaxed ? cr.appendArray(s, e.instances) : (this.updateAllCells(e), e.collision_grid.queryRange(i, s))
        }, t.prototype.getTypesCollisionCandidates = function(t, e, i, s) {
            var n, r;
            for (n = 0, r = e.length; r > n; ++n) this.getCollisionCandidates(t, e[n], i, s)
        }, t.prototype.getSolidCollisionCandidates = function(t, e, i) {
            var s = this.getSolidBehavior();
            return s ? void this.getTypesCollisionCandidates(t, s.my_types, e, i) : null
        }, t.prototype.getJumpthruCollisionCandidates = function(t, e, i) {
            var s = this.getJumpthruBehavior();
            return s ? void this.getTypesCollisionCandidates(t, s.my_types, e, i) : null
        }, t.prototype.testAndSelectCanvasPointOverlap = function(t, e, i, s) {
            var n, r, o, a, h, c, l, u = t.getCurrentSol(),
                p = this.getCurrentEventStack().current_event.orblock;
            if (u.select_all)
                for (s || (u.select_all = !1, cr.clearArray(u.instances)), n = 0, a = t.instances.length; a > n; n++)
                    if (o = t.instances[n], o.update_bbox(), h = o.layer.canvasToLayer(e, i, !0), c = o.layer.canvasToLayer(e, i, !1), o.contains_pt(h, c)) {
                        if (s) return !1;
                        u.instances.push(o)
                    } else p && u.else_instances.push(o);
            else {
                for (r = 0, l = p ? u.else_instances : u.instances, n = 0, a = l.length; a > n; n++)
                    if (o = l[n], o.update_bbox(), h = o.layer.canvasToLayer(e, i, !0), c = o.layer.canvasToLayer(e, i, !1), o.contains_pt(h, c)) {
                        if (s) return !1;
                        p ? u.instances.push(o) : (u.instances[r] = u.instances[n], r++)
                    }
                s || (l.length = r)
            }
            return t.applySolToContainer(), s ? !0 : u.hasObjects()
        }, t.prototype.testOverlap = function(t, e) {
            if (!(t && e && t !== e && t.collisionsEnabled && e.collisionsEnabled)) return !1;
            t.update_bbox(), e.update_bbox();
            var i, s, n, r, o, a, h, c, l, u, p = t.layer,
                d = e.layer,
                f = p !== d && (p.parallaxX !== d.parallaxX || d.parallaxY !== d.parallaxY || p.scale !== d.scale || p.angle !== d.angle || p.zoomRate !== d.zoomRate);
            if (f) {
                for (h = t.collision_poly && !t.collision_poly.is_empty(), c = e.collision_poly && !e.collision_poly.is_empty(), h ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), this.temp_poly.set_from_poly(t.collision_poly)) : this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), l = this.temp_poly, c ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), this.temp_poly2.set_from_poly(e.collision_poly)) : this.temp_poly2.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), u = this.temp_poly2, i = 0, s = l.pts_count; s > i; i++) n = 2 * i, r = n + 1, o = l.pts_cache[n], a = l.pts_cache[r], l.pts_cache[n] = p.layerToCanvas(o + t.x, a + t.y, !0), l.pts_cache[r] = p.layerToCanvas(o + t.x, a + t.y, !1);
                for (l.update_bbox(), i = 0, s = u.pts_count; s > i; i++) n = 2 * i, r = n + 1, o = u.pts_cache[n], a = u.pts_cache[r], u.pts_cache[n] = d.layerToCanvas(o + e.x, a + e.y, !0), u.pts_cache[r] = d.layerToCanvas(o + e.x, a + e.y, !1);
                return u.update_bbox(), l.intersects_poly(u, 0, 0)
            }
            return t.bbox.intersects_rect(e.bbox) && t.bquad.intersects_quad(e.bquad) ? t.tilemap_exists && e.tilemap_exists ? !1 : t.tilemap_exists ? this.testTilemapOverlap(t, e) : e.tilemap_exists ? this.testTilemapOverlap(e, t) : (h = t.collision_poly && !t.collision_poly.is_empty(), c = e.collision_poly && !e.collision_poly.is_empty(), h || c ? (h ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), l = t.collision_poly) : (this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), l = this.temp_poly), c ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), u = e.collision_poly) : (this.temp_poly.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), u = this.temp_poly), l.intersects_poly(u, e.x - t.x, e.y - t.y)) : !0) : !1
        };
        var I = new cr.quad,
            M = new cr.rect(0, 0, 0, 0),
            R = [];
        t.prototype.testTilemapOverlap = function(t, e) {
            var i, s, n, r, o = e.bbox,
                a = t.x,
                h = t.y;
            t.getCollisionRectCandidates(o, R);
            var c = R,
                l = e.collision_poly && !e.collision_poly.is_empty();
            for (i = 0, s = c.length; s > i; ++i)
                if (n = c[i], r = n.rc, o.intersects_rect_off(r, a, h) && (I.set_from_rect(r), I.offset(a, h), I.intersects_quad(e.bquad)))
                    if (l) {
                        if (e.collision_poly.cache_poly(e.width, e.height, e.angle), n.poly) {
                            if (n.poly.intersects_poly(e.collision_poly, e.x - (a + r.left), e.y - (h + r.top))) return cr.clearArray(R), !0
                        } else if (this.temp_poly.set_from_quad(I, 0, 0, r.right - r.left, r.bottom - r.top), this.temp_poly.intersects_poly(e.collision_poly, e.x, e.y)) return cr.clearArray(R), !0
                    } else {
                        if (!n.poly) return cr.clearArray(R), !0;
                        if (this.temp_poly.set_from_quad(e.bquad, 0, 0, e.width, e.height), n.poly.intersects_poly(this.temp_poly, -(a + r.left), -(h + r.top))) return cr.clearArray(R), !0
                    }
            return cr.clearArray(R), !1
        }, t.prototype.testRectOverlap = function(t, e) {
            if (!e || !e.collisionsEnabled) return !1;
            e.update_bbox();
            var i;
            e.layer;
            if (!e.bbox.intersects_rect(t)) return !1;
            if (e.tilemap_exists) {
                e.getCollisionRectCandidates(t, R);
                var s, n, r, o, a = R,
                    h = e.x,
                    c = e.y;
                for (s = 0, n = a.length; n > s; ++s)
                    if (r = a[s], o = r.rc, t.intersects_rect_off(o, h, c)) {
                        if (!r.poly) return cr.clearArray(R), !0;
                        if (this.temp_poly.set_from_rect(t, 0, 0), r.poly.intersects_poly(this.temp_poly, -(h + o.left), -(c + o.top))) return cr.clearArray(R), !0
                    }
                return cr.clearArray(R), !1
            }
            return I.set_from_rect(t), e.bquad.intersects_quad(I) ? (i = e.collision_poly && !e.collision_poly.is_empty()) ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), I.offset(-t.left, -t.top), this.temp_poly.set_from_quad(I, 0, 0, 1, 1), e.collision_poly.intersects_poly(this.temp_poly, t.left - e.x, t.top - e.y)) : !0 : !1
        }, t.prototype.testSegmentOverlap = function(t, e, i, s, n) {
            if (!n || !n.collisionsEnabled) return !1;
            n.update_bbox();
            var r;
            n.layer;
            if (M.set(cr.min(t, i), cr.min(e, s), cr.max(t, i), cr.max(e, s)), !n.bbox.intersects_rect(M)) return !1;
            if (n.tilemap_exists) {
                n.getCollisionRectCandidates(M, R);
                var o, a, h, c, l = R,
                    u = n.x,
                    p = n.y;
                for (o = 0, a = l.length; a > o; ++o)
                    if (h = l[o], c = h.rc, M.intersects_rect_off(c, u, p) && (I.set_from_rect(c), I.offset(u, p), I.intersects_segment(t, e, i, s))) {
                        if (!h.poly) return cr.clearArray(R), !0;
                        if (h.poly.intersects_segment(u + c.left, p + c.top, t, e, i, s)) return cr.clearArray(R), !0
                    }
                return cr.clearArray(R), !1
            }
            return n.bquad.intersects_segment(t, e, i, s) ? (r = n.collision_poly && !n.collision_poly.is_empty()) ? (n.collision_poly.cache_poly(n.width, n.height, n.angle), n.collision_poly.intersects_segment(n.x, n.y, t, e, i, s)) : !0 : !1
        }, t.prototype.typeHasBehavior = function(t, e) {
            if (!e) return !1;
            var i, s, n, r, o;
            for (i = 0, s = t.behaviors.length; s > i; i++)
                if (t.behaviors[i].behavior instanceof e) return !0;
            if (!t.is_family)
                for (i = 0, s = t.families.length; s > i; i++)
                    for (o = t.families[i], n = 0, r = o.behaviors.length; r > n; n++)
                        if (o.behaviors[n].behavior instanceof e) return !0;
            return !1
        }, t.prototype.typeHasNoSaveBehavior = function(t) {
            return this.typeHasBehavior(t, cr.behaviors.NoSave)
        }, t.prototype.typeHasPersistBehavior = function(t) {
            return this.typeHasBehavior(t, cr.behaviors.Persist)
        }, t.prototype.getSolidBehavior = function() {
            return this.solidBehavior
        }, t.prototype.getJumpthruBehavior = function() {
            return this.jumpthruBehavior
        };
        var L = [];
        t.prototype.testOverlapSolid = function(t) {
            var e, i, s;
            for (t.update_bbox(), this.getSolidCollisionCandidates(t.layer, t.bbox, L), e = 0, i = L.length; i > e; ++e)
                if (s = L[e], s.extra.solidEnabled && this.testOverlap(t, s)) return cr.clearArray(L), s;
            return cr.clearArray(L), null
        }, t.prototype.testRectOverlapSolid = function(t) {
            var e, i, s;
            for (this.getSolidCollisionCandidates(null, t, L), e = 0, i = L.length; i > e; ++e)
                if (s = L[e], s.extra.solidEnabled && this.testRectOverlap(t, s)) return cr.clearArray(L), s;
            return cr.clearArray(L), null
        };
        var F = [];
        t.prototype.testOverlapJumpThru = function(t, e) {
            var i = null;
            e && (i = F, cr.clearArray(i)), t.update_bbox(), this.getJumpthruCollisionCandidates(t.layer, t.bbox, L);
            var s, n, r;
            for (s = 0, n = L.length; n > s; ++s)
                if (r = L[s], r.extra.jumpthruEnabled && this.testOverlap(t, r)) {
                    if (!e) return cr.clearArray(L), r;
                    i.push(r)
                }
            return cr.clearArray(L), i
        }, t.prototype.pushOutSolid = function(t, e, i, s, n, r) {
            var o, a = s || 50,
                h = t.x,
                c = t.y,
                l = null,
                u = null;
            for (o = 0; a > o; o++)
                if (t.x = h + e * o, t.y = c + i * o, t.set_bbox_changed(), !this.testOverlap(t, l) && (l = this.testOverlapSolid(t), l && (u = l), !l && (n && (l = r ? this.testOverlap(t, r) ? r : null : this.testOverlapJumpThru(t), l && (u = l)), !l))) return u && this.pushInFractional(t, e, i, u, 16), !0;
            return t.x = h, t.y = c, t.set_bbox_changed(), !1
        }, t.prototype.pushOut = function(t, e, i, s, n) {
            var r, o = s || 50,
                a = t.x,
                h = t.y;
            for (r = 0; o > r; r++)
                if (t.x = a + e * r, t.y = h + i * r, t.set_bbox_changed(), !this.testOverlap(t, n)) return !0;
            return t.x = a, t.y = h, t.set_bbox_changed(), !1
        }, t.prototype.pushInFractional = function(t, e, i, s, n) {
            for (var r, o = 2, a = !1, h = !1, c = t.x, l = t.y; n >= o;) r = 1 / o, o *= 2, t.x += e * r * (a ? 1 : -1), t.y += i * r * (a ? 1 : -1), t.set_bbox_changed(), this.testOverlap(t, s) ? (a = !0, h = !0) : (a = !1, h = !1, c = t.x, l = t.y);
            h && (t.x = c, t.y = l, t.set_bbox_changed())
        }, t.prototype.pushOutSolidNearest = function(t, e) {
            var i = cr.is_undefined(e) ? 100 : e,
                s = 0,
                n = t.x,
                r = t.y,
                o = 0,
                a = 0,
                h = 0,
                c = this.testOverlapSolid(t);
            if (!c) return !0;
            for (; i >= s;) {
                switch (o) {
                    case 0:
                        a = 0, h = -1, s++;
                        break;
                    case 1:
                        a = 1, h = -1;
                        break;
                    case 2:
                        a = 1, h = 0;
                        break;
                    case 3:
                        a = 1, h = 1;
                        break;
                    case 4:
                        a = 0, h = 1;
                        break;
                    case 5:
                        a = -1, h = 1;
                        break;
                    case 6:
                        a = -1, h = 0;
                        break;
                    case 7:
                        a = -1, h = -1
                }
                if (o = (o + 1) % 8, t.x = cr.floor(n + a * s), t.y = cr.floor(r + h * s), t.set_bbox_changed(), !this.testOverlap(t, c) && (c = this.testOverlapSolid(t), !c)) return !0
            }
            return t.x = n, t.y = r, t.set_bbox_changed(), !1
        }, t.prototype.registerCollision = function(t, e) {
            t.collisionsEnabled && e.collisionsEnabled && this.registered_collisions.push([t, e])
        }, t.prototype.checkRegisteredCollision = function(t, e) {
            var i, s, n;
            for (i = 0, s = this.registered_collisions.length; s > i; i++)
                if (n = this.registered_collisions[i], n[0] == t && n[1] == e || n[0] == e && n[1] == t) return !0;
            return !1
        }, t.prototype.calculateSolidBounceAngle = function(t, e, i, s) {
            var n = t.x,
                r = t.y,
                o = cr.max(10, cr.distanceTo(e, i, n, r)),
                a = cr.angleTo(e, i, n, r),
                h = s || this.testOverlapSolid(t);
            if (!h) return cr.clamp_angle(a + cr.PI);
            var c, l, u, p, d = h,
                f = cr.to_radians(5);
            for (c = 1; 36 > c; c++)
                if (l = a - c * f, t.x = e + Math.cos(l) * o, t.y = i + Math.sin(l) * o, t.set_bbox_changed(), !this.testOverlap(t, d) && (d = s ? null : this.testOverlapSolid(t), !d)) {
                    u = l;
                    break
                }
            36 === c && (u = cr.clamp_angle(a + cr.PI));
            var d = h;
            for (c = 1; 36 > c; c++)
                if (l = a + c * f, t.x = e + Math.cos(l) * o, t.y = i + Math.sin(l) * o, t.set_bbox_changed(), !this.testOverlap(t, d) && (d = s ? null : this.testOverlapSolid(t), !d)) {
                    p = l;
                    break
                }
            if (36 === c && (p = cr.clamp_angle(a + cr.PI)), t.x = n, t.y = r, t.set_bbox_changed(), p === u) return p;
            var g, y = cr.angleDiff(p, u) / 2;
            g = cr.angleClockwise(p, u) ? cr.clamp_angle(u + y + cr.PI) : cr.clamp_angle(p + y);
            var m = Math.cos(a),
                _ = Math.sin(a),
                v = Math.cos(g),
                b = Math.sin(g),
                w = m * v + _ * b,
                x = m - 2 * w * v,
                S = _ - 2 * w * b;
            return cr.angleTo(0, 0, x, S)
        };
        var B = -1;
        t.prototype.trigger = function(t, e, i) {
            if (!this.running_layout) return !1;
            var s = this.running_layout.event_sheet;
            if (!s) return !1;
            var n, r, o, a = !1;
            B++;
            var h = s.deep_includes;
            for (r = 0, o = h.length; o > r; ++r) n = this.triggerOnSheet(t, e, h[r], i), a = a || n;
            return n = this.triggerOnSheet(t, e, s, i), a = a || n, B--, a
        }, t.prototype.triggerOnSheet = function(t, e, i, s) {
            var n, r, o, a, h = !1;
            if (e)
                for (o = this.triggerOnSheetForTypeName(t, e, e.type.name, i, s), h = h || o, a = e.type.families, n = 0, r = a.length; r > n; ++n) o = this.triggerOnSheetForTypeName(t, e, a[n].name, i, s), h = h || o;
            else o = this.triggerOnSheetForTypeName(t, e, "system", i, s), h = h || o;
            return h
        }, t.prototype.triggerOnSheetForTypeName = function(t, e, i, s, n) {
            var r, o, a, h, c = !1,
                l = !1,
                u = "undefined" != typeof n,
                p = u ? s.fasttriggers : s.triggers,
                d = p[i];
            if (!d) return c;
            var f = null;
            for (r = 0, o = d.length; o > r; ++r)
                if (d[r].method == t) {
                    f = d[r].evs;
                    break
                }
            if (!f) return c;
            var g;
            if (g = u ? f[n] : f, !g) return null;
            for (r = 0, o = g.length; o > r; r++) a = g[r][0], h = g[r][1], l = this.executeSingleTrigger(e, i, a, h), c = c || l;
            return c
        }, t.prototype.executeSingleTrigger = function(t, e, i, s) {
            var n, r, o = !1;
            this.trigger_depth++;
            var a = this.getCurrentEventStack().current_event;
            a && this.pushCleanSol(a.solModifiersIncludingParents);
            var h = this.trigger_depth > 1;
            this.pushCleanSol(i.solModifiersIncludingParents), h && this.pushLocalVarStack();
            var c = this.pushEventStack(i);
            if (c.current_event = i, t) {
                var l = this.types[e].getCurrentSol();
                l.select_all = !1, cr.clearArray(l.instances), l.instances[0] = t, this.types[e].applySolToContainer()
            }
            var u = !0;
            if (i.parent) {
                for (var p = c.temp_parents_arr, d = i.parent; d;) p.push(d), d = d.parent;
                for (p.reverse(), n = 0, r = p.length; r > n; n++)
                    if (!p[n].run_pretrigger()) {
                        u = !1;
                        break
                    }
            }
            return u && (this.execcount++, i.orblock ? i.run_orblocktrigger(s) : i.run(), o = o || c.last_event_true), this.popEventStack(), h && this.popLocalVarStack(), this.popSol(i.solModifiersIncludingParents), a && this.popSol(a.solModifiersIncludingParents), this.hasPendingInstances && 0 === this.isInOnDestroy && 0 === B && !this.isRunningEvents && this.ClearDeathRow(), this.trigger_depth--, o
        }, t.prototype.getCurrentCondition = function() {
            var t = this.getCurrentEventStack();
            return t.current_event.conditions[t.cndindex]
        }, t.prototype.getCurrentConditionObjectType = function() {
            var t = this.getCurrentCondition();
            return t.type
        }, t.prototype.isCurrentConditionFirst = function() {
            var t = this.getCurrentEventStack();
            return 0 === t.cndindex
        }, t.prototype.getCurrentAction = function() {
            var t = this.getCurrentEventStack();
            return t.current_event.actions[t.actindex]
        }, t.prototype.pushLocalVarStack = function() {
            this.localvar_stack_index++, this.localvar_stack_index >= this.localvar_stack.length && this.localvar_stack.push([])
        }, t.prototype.popLocalVarStack = function() {
            this.localvar_stack_index--
        }, t.prototype.getCurrentLocalVarStack = function() {
            return this.localvar_stack[this.localvar_stack_index]
        }, t.prototype.pushEventStack = function(t) {
            this.event_stack_index++, this.event_stack_index >= this.event_stack.length && this.event_stack.push(new cr.eventStackFrame);
            var e = this.getCurrentEventStack();
            return e.reset(t), e
        }, t.prototype.popEventStack = function() {
            this.event_stack_index--
        }, t.prototype.getCurrentEventStack = function() {
            return this.event_stack[this.event_stack_index]
        }, t.prototype.pushLoopStack = function(t) {
            this.loop_stack_index++, this.loop_stack_index >= this.loop_stack.length && this.loop_stack.push(cr.seal({
                name: t,
                index: 0,
                stopped: !1
            }));
            var e = this.getCurrentLoop();
            return e.name = t, e.index = 0, e.stopped = !1, e
        }, t.prototype.popLoopStack = function() {
            this.loop_stack_index--
        }, t.prototype.getCurrentLoop = function() {
            return this.loop_stack[this.loop_stack_index]
        }, t.prototype.getEventVariableByName = function(t, e) {
            for (var i, s, n, r, o, a; e;) {
                for (i = 0, s = e.subevents.length; s > i; i++)
                    if (a = e.subevents[i], a instanceof cr.eventvariable && cr.equals_nocase(t, a.name)) return a;
                e = e.parent
            }
            for (i = 0, s = this.eventsheets_by_index.length; s > i; i++)
                for (o = this.eventsheets_by_index[i], n = 0, r = o.events.length; r > n; n++)
                    if (a = o.events[n], a instanceof cr.eventvariable && cr.equals_nocase(t, a.name)) return a;
            return null
        }, t.prototype.getLayoutBySid = function(t) {
            var e, i;
            for (e = 0, i = this.layouts_by_index.length; i > e; e++)
                if (this.layouts_by_index[e].sid === t) return this.layouts_by_index[e];
            return null
        }, t.prototype.getObjectTypeBySid = function(t) {
            var e, i;
            for (e = 0, i = this.types_by_index.length; i > e; e++)
                if (this.types_by_index[e].sid === t) return this.types_by_index[e];
            return null
        }, t.prototype.getGroupBySid = function(t) {
            var e, i;
            for (e = 0, i = this.allGroups.length; i > e; e++)
                if (this.allGroups[e].sid === t) return this.allGroups[e];
            return null
        }, t.prototype.doCanvasSnapshot = function(t, e) {
            this.snapshotCanvas = [t, e], this.redraw = !0
        }, t.prototype.signalContinuousPreview = function() {
            this.signalledContinuousPreview = !0
        }, t.prototype.handleSaveLoad = function() {
            var t = this,
                e = this.saveToSlot,
                i = this.lastSaveJson,
                s = this.loadFromSlot,
                n = !1;
            if (this.signalledContinuousPreview && (n = !0, e = "__c2_continuouspreview", this.signalledContinuousPreview = !1), e.length) {
                if (this.ClearDeathRow(),
                    i = this.saveToJSONString(), r() && !this.isCocoonJs) a(e, i, function() {
                    cr.logexport("Saved state to IndexedDB storage (" + i.length + " bytes)"), t.lastSaveJson = i, t.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", n && c()
                }, function(s) {
                    try {
                        localStorage.setItem("__c2save_" + e, i), cr.logexport("Saved state to WebStorage (" + i.length + " bytes)"), t.lastSaveJson = i, t.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", n && c()
                    } catch (r) {
                        cr.logexport("Failed to save game state: " + s + "; " + r), t.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
                    }
                });
                else try {
                    localStorage.setItem("__c2save_" + e, i), cr.logexport("Saved state to WebStorage (" + i.length + " bytes)"), t.lastSaveJson = i, this.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), t.lastSaveJson = "", n && c()
                } catch (o) {
                    cr.logexport("Error saving to WebStorage: " + o), t.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
                }
                this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = ""
            }
            if (s.length) {
                if (r() && !this.isCocoonJs) h(s, function(e) {
                    e ? (t.loadFromJson = e, cr.logexport("Loaded state from IndexedDB storage (" + t.loadFromJson.length + " bytes)")) : (t.loadFromJson = localStorage.getItem("__c2save_" + s) || "", cr.logexport("Loaded state from WebStorage (" + t.loadFromJson.length + " bytes)")), t.suspendDrawing = !1, t.loadFromJson.length || t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null)
                }, function(e) {
                    t.loadFromJson = localStorage.getItem("__c2save_" + s) || "", cr.logexport("Loaded state from WebStorage (" + t.loadFromJson.length + " bytes)"), t.suspendDrawing = !1, t.loadFromJson.length || t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null)
                });
                else {
                    try {
                        this.loadFromJson = localStorage.getItem("__c2save_" + s) || "", cr.logexport("Loaded state from WebStorage (" + this.loadFromJson.length + " bytes)")
                    } catch (o) {
                        this.loadFromJson = ""
                    }
                    this.suspendDrawing = !1, t.loadFromJson.length || t.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null)
                }
                this.loadFromSlot = "", this.saveToSlot = ""
            }
            this.loadFromJson.length && (this.ClearDeathRow(), this.loadFromJSONString(this.loadFromJson), this.lastSaveJson = this.loadFromJson, this.trigger(cr.system_object.prototype.cnds.OnLoadComplete, null), this.lastSaveJson = "", this.loadFromJson = "")
        }, t.prototype.saveToJSONString = function() {
            var t, e, i, s, n, r, o, a, h, c, u, p, d = {
                c2save: !0,
                version: 1,
                rt: {
                    time: this.kahanTime.sum,
                    walltime: this.wallTime.sum,
                    timescale: this.timescale,
                    tickcount: this.tickcount,
                    execcount: this.execcount,
                    next_uid: this.next_uid,
                    running_layout: this.running_layout.sid,
                    start_time_offset: Date.now() - this.start_time
                },
                types: {},
                layouts: {},
                events: {
                    groups: {},
                    cnds: {},
                    acts: {},
                    vars: {}
                }
            };
            for (t = 0, e = this.types_by_index.length; e > t; t++)
                if (n = this.types_by_index[t], !n.is_family && !this.typeHasNoSaveBehavior(n)) {
                    for (o = {
                        instances: []
                    }, cr.hasAnyOwnProperty(n.extra) && (o.ex = l(n.extra)), i = 0, s = n.instances.length; s > i; i++) o.instances.push(this.saveInstanceToJSON(n.instances[i]));
                    d.types[n.sid.toString()] = o
                }
            for (t = 0, e = this.layouts_by_index.length; e > t; t++) r = this.layouts_by_index[t], d.layouts[r.sid.toString()] = r.saveToJSON();
            var f = d.events.groups;
            for (t = 0, e = this.allGroups.length; e > t; t++) a = this.allGroups[t], f[a.sid.toString()] = this.groups_by_name[a.group_name].group_active;
            var g = d.events.cnds;
            for (p in this.cndsBySid) this.cndsBySid.hasOwnProperty(p) && (h = this.cndsBySid[p], cr.hasAnyOwnProperty(h.extra) && (g[p] = {
                ex: l(h.extra)
            }));
            var y = d.events.acts;
            for (p in this.actsBySid) this.actsBySid.hasOwnProperty(p) && (c = this.actsBySid[p], cr.hasAnyOwnProperty(c.extra) && (y[p] = {
                ex: l(c.extra)
            }));
            var m = d.events.vars;
            for (p in this.varsBySid) this.varsBySid.hasOwnProperty(p) && (u = this.varsBySid[p], u.is_constant || u.parent && !u.is_static || (m[p] = u.data));
            return d.system = this.system.saveToJSON(), JSON.stringify(d)
        }, t.prototype.refreshUidMap = function() {
            var t, e, i, s, n, r;
            for (this.objectsByUid = {}, t = 0, e = this.types_by_index.length; e > t; t++)
                if (i = this.types_by_index[t], !i.is_family)
                    for (s = 0, n = i.instances.length; n > s; s++) r = i.instances[s], this.objectsByUid[r.uid.toString()] = r
        }, t.prototype.loadFromJSONString = function(t) {
            var e = JSON.parse(t);
            if (e.c2save && !(e.version > 1)) {
                this.isLoadingState = !0;
                var i = e.rt;
                this.kahanTime.reset(), this.kahanTime.sum = i.time, this.wallTime.reset(), this.wallTime.sum = i.walltime || 0, this.timescale = i.timescale, this.tickcount = i.tickcount, this.execcount = i.execcount, this.start_time = Date.now() - i.start_time_offset;
                var s = i.running_layout;
                if (s !== this.running_layout.sid) {
                    var n = this.getLayoutBySid(s);
                    if (!n) return;
                    this.doChangeLayout(n)
                }
                var r, o, a, h, c, l, u, p, d, f, g, y, m, _, v, b, w, x = e.types;
                for (u in x)
                    if (x.hasOwnProperty(u)) {
                        if (p = this.getObjectTypeBySid(parseInt(u, 10)), !p || p.is_family || this.typeHasNoSaveBehavior(p)) continue;
                        for (x[u].ex ? p.extra = x[u].ex : cr.wipe(p.extra), d = p.instances, f = x[u].instances, r = 0, o = cr.min(d.length, f.length); o > r; r++) this.loadInstanceFromJSON(d[r], f[r]);
                        for (r = f.length, o = d.length; o > r; r++) this.DestroyInstance(d[r]);
                        for (r = d.length, o = f.length; o > r; r++) _ = null, (!p.plugin.is_world || (_ = this.running_layout.getLayerBySid(f[r].w.l))) && (g = this.createInstanceFromInit(p.default_instance, _, !1, 0, 0, !0), this.loadInstanceFromJSON(g, f[r]));
                        p.stale_iids = !0
                    }
                this.ClearDeathRow(), this.refreshUidMap();
                var S = e.layouts;
                for (u in S)
                    if (S.hasOwnProperty(u)) {
                        if (m = this.getLayoutBySid(parseInt(u, 10)), !m) continue;
                        m.loadFromJSON(S[u])
                    }
                var T = e.events.groups;
                for (u in T) T.hasOwnProperty(u) && (v = this.getGroupBySid(parseInt(u, 10)), v && this.groups_by_name[v.group_name] && this.groups_by_name[v.group_name].setGroupActive(T[u]));
                var O = e.events.cnds;
                for (u in this.cndsBySid) this.cndsBySid.hasOwnProperty(u) && (O.hasOwnProperty(u) ? this.cndsBySid[u].extra = O[u].ex : this.cndsBySid[u].extra = {});
                var A = e.events.acts;
                for (u in this.actsBySid) this.actsBySid.hasOwnProperty(u) && (A.hasOwnProperty(u) ? this.actsBySid[u].extra = A[u].ex : this.actsBySid[u].extra = {});
                var C = e.events.vars;
                for (u in C) C.hasOwnProperty(u) && this.varsBySid.hasOwnProperty(u) && (this.varsBySid[u].data = C[u]);
                for (this.next_uid = i.next_uid, this.isLoadingState = !1, r = 0, o = this.fireOnCreateAfterLoad.length; o > r; ++r) g = this.fireOnCreateAfterLoad[r], this.trigger(Object.getPrototypeOf(g.type.plugin).cnds.OnCreated, g);
                for (cr.clearArray(this.fireOnCreateAfterLoad), this.system.loadFromJSON(e.system), r = 0, o = this.types_by_index.length; o > r; r++)
                    if (p = this.types_by_index[r], !p.is_family && !this.typeHasNoSaveBehavior(p))
                        for (a = 0, h = p.instances.length; h > a; a++) {
                            if (g = p.instances[a], p.is_contained)
                                for (b = g.get_iid(), cr.clearArray(g.siblings), c = 0, l = p.container.length; l > c; c++) w = p.container[c], p !== w && g.siblings.push(w.instances[b]);
                            if (g.afterLoad && g.afterLoad(), g.behavior_insts)
                                for (c = 0, l = g.behavior_insts.length; l > c; c++) y = g.behavior_insts[c], y.afterLoad && y.afterLoad()
                        }
                    this.redraw = !0
            }
        }, t.prototype.saveInstanceToJSON = function(t, e) {
            var i, s, n, r, o, a = t.type,
                h = a.plugin,
                c = {};
            if (e ? c.c2 = !0 : c.uid = t.uid, cr.hasAnyOwnProperty(t.extra) && (c.ex = l(t.extra)), t.instance_vars && t.instance_vars.length)
                for (c.ivs = {}, i = 0, s = t.instance_vars.length; s > i; i++) c.ivs[t.type.instvar_sids[i].toString()] = t.instance_vars[i];
            if (h.is_world) {
                if (n = {
                    x: t.x,
                    y: t.y,
                    w: t.width,
                    h: t.height,
                    l: t.layer.sid,
                    zi: t.get_zindex()
                }, 0 !== t.angle && (n.a = t.angle), 1 !== t.opacity && (n.o = t.opacity), .5 !== t.hotspotX && (n.hX = t.hotspotX), .5 !== t.hotspotY && (n.hY = t.hotspotY), 0 !== t.blend_mode && (n.bm = t.blend_mode), t.visible || (n.v = t.visible), t.collisionsEnabled || (n.ce = t.collisionsEnabled), -1 !== t.my_timescale && (n.mts = t.my_timescale), a.effect_types.length)
                    for (n.fx = [], i = 0, s = a.effect_types.length; s > i; i++) o = a.effect_types[i], n.fx.push({
                        name: o.name,
                        active: t.active_effect_flags[o.index],
                        params: t.effect_params[o.index]
                    });
                c.w = n
            }
            if (t.behavior_insts && t.behavior_insts.length)
                for (c.behs = {}, i = 0, s = t.behavior_insts.length; s > i; i++) r = t.behavior_insts[i], r.saveToJSON && (c.behs[r.type.sid.toString()] = r.saveToJSON());
            return t.saveToJSON && (c.data = t.saveToJSON()), c
        }, t.prototype.getInstanceVarIndexBySid = function(t, e) {
            var i, s;
            for (i = 0, s = t.instvar_sids.length; s > i; i++)
                if (t.instvar_sids[i] === e) return i;
            return -1
        }, t.prototype.getBehaviorIndexBySid = function(t, e) {
            var i, s;
            for (i = 0, s = t.behavior_insts.length; s > i; i++)
                if (t.behavior_insts[i].type.sid === e) return i;
            return -1
        }, t.prototype.loadInstanceFromJSON = function(t, e, i) {
            var s, n, r, o, a, h, c, l, u, p, d = t.type,
                f = d.plugin;
            if (i) {
                if (!e.c2) return
            } else t.uid = e.uid; if (e.ex ? t.extra = e.ex : cr.wipe(t.extra), a = e.ivs)
                for (s in a)
                    if (a.hasOwnProperty(s)) {
                        if (o = this.getInstanceVarIndexBySid(d, parseInt(s, 10)), 0 > o || o >= t.instance_vars.length) continue;
                        t.instance_vars[o] = a[s]
                    }
            if (f.is_world) {
                if (h = e.w, t.layer.sid !== h.l && (p = t.layer, t.layer = this.running_layout.getLayerBySid(h.l), t.layer ? (p.removeFromInstanceList(t, !0), t.layer.appendToInstanceList(t, !0), t.set_bbox_changed(), t.layer.setZIndicesStaleFrom(0)) : (t.layer = p, i || this.DestroyInstance(t))), t.x = h.x, t.y = h.y, t.width = h.w, t.height = h.h, t.zindex = h.zi, t.angle = h.hasOwnProperty("a") ? h.a : 0, t.opacity = h.hasOwnProperty("o") ? h.o : 1, t.hotspotX = h.hasOwnProperty("hX") ? h.hX : .5, t.hotspotY = h.hasOwnProperty("hY") ? h.hY : .5, t.visible = h.hasOwnProperty("v") ? h.v : !0, t.collisionsEnabled = h.hasOwnProperty("ce") ? h.ce : !0, t.my_timescale = h.hasOwnProperty("mts") ? h.mts : -1, t.blend_mode = h.hasOwnProperty("bm") ? h.bm : 0, t.compositeOp = cr.effectToCompositeOp(t.blend_mode), this.gl && cr.setGLBlend(t, t.blend_mode, this.gl), t.set_bbox_changed(), h.hasOwnProperty("fx"))
                    for (n = 0, r = h.fx.length; r > n; n++) c = d.getEffectIndexByName(h.fx[n].name), 0 > c || (t.active_effect_flags[c] = h.fx[n].active, t.effect_params[c] = h.fx[n].params);
                t.updateActiveEffects()
            }
            if (l = e.behs)
                for (s in l)
                    if (l.hasOwnProperty(s)) {
                        if (u = this.getBehaviorIndexBySid(t, parseInt(s, 10)), 0 > u) continue;
                        t.behavior_insts[u].loadFromJSON(l[s])
                    }
            e.data && t.loadFromJSON(e.data)
        }, t.prototype.fetchLocalFileViaCordova = function(t, e, i) {
            var s = cordova.file.applicationDirectory + "www/" + t;
            window.resolveLocalFileSystemURL(s, function(t) {
                t.file(e, i)
            }, i)
        }, t.prototype.fetchLocalFileViaCordovaAsText = function(t, e, i) {
            this.fetchLocalFileViaCordova(t, function(t) {
                var s = new FileReader;
                s.onload = function(t) {
                    e(t.target.result)
                }, s.onerror = i, s.readAsText(t)
            }, i)
        };
        var N = [],
            j = 0,
            D = 8;
        t.prototype.maybeStartNextArrayBufferRead = function() {
            if (N.length && !(j >= D)) {
                j++;
                var t = N.shift();
                this.doFetchLocalFileViaCordovaAsArrayBuffer(t.filename, t.successCallback, t.errorCallback)
            }
        }, t.prototype.fetchLocalFileViaCordovaAsArrayBuffer = function(t, e, i) {
            var s = this;
            N.push({
                filename: t,
                successCallback: function(t) {
                    j--, s.maybeStartNextArrayBufferRead(), e(t)
                },
                errorCallback: function(t) {
                    j--, s.maybeStartNextArrayBufferRead(), i(t)
                }
            }), this.maybeStartNextArrayBufferRead()
        }, t.prototype.doFetchLocalFileViaCordovaAsArrayBuffer = function(t, e, i) {
            this.fetchLocalFileViaCordova(t, function(t) {
                var i = new FileReader;
                i.onload = function(t) {
                    e(t.target.result)
                }, i.readAsArrayBuffer(t)
            }, i)
        }, t.prototype.fetchLocalFileViaCordovaAsURL = function(t, e, i) {
            this.fetchLocalFileViaCordovaAsArrayBuffer(t, function(t) {
                var i = new Blob([t]),
                    s = URL.createObjectURL(i);
                e(s)
            }, i)
        }, t.prototype.isAbsoluteUrl = function(t) {
            return /^(?:[a-z]+:)?\/\//.test(t) || "data:" === t.substr(0, 5) || "blob:" === t.substr(0, 5)
        }, t.prototype.setImageSrc = function(t, e) {
            this.isWKWebView && !this.isAbsoluteUrl(e) ? this.fetchLocalFileViaCordovaAsURL(e, function(e) {
                t.src = e
            }, function(t) {
                alert("Failed to load image: " + t)
            }) : t.src = e
        }, t.prototype.setCtxImageSmoothingEnabled = function(t, e) {
            "undefined" != typeof t.imageSmoothingEnabled ? t.imageSmoothingEnabled = e : (t.webkitImageSmoothingEnabled = e, t.mozImageSmoothingEnabled = e, t.msImageSmoothingEnabled = e)
        }, cr.runtime = t, cr.createRuntime = function(e) {
            return new t(document.getElementById(e))
        }, cr.createDCRuntime = function(e, i) {
            return new t({
                dc: !0,
                width: e,
                height: i
            })
        }, window.cr_createRuntime = cr.createRuntime, window.cr_createDCRuntime = cr.createDCRuntime, window.createCocoonJSRuntime = function() {
            window.c2cocoonjs = !0;
            var e = document.createElement("screencanvas") || document.createElement("canvas");
            e.screencanvas = !0, document.body.appendChild(e);
            var i = new t(e);
            return window.c2runtime = i, window.addEventListener("orientationchange", function() {
                window.c2runtime.setSize(window.innerWidth, window.innerHeight)
            }), window.c2runtime.setSize(window.innerWidth, window.innerHeight), i
        }, window.createEjectaRuntime = function() {
            var e = document.getElementById("canvas"),
                i = new t(e);
            return window.c2runtime = i, window.c2runtime.setSize(window.innerWidth, window.innerHeight), i
        }
    }(), window.cr_getC2Runtime = function() {
        var t = document.getElementById("c2canvas");
        return t ? t.c2runtime : window.c2runtime ? window.c2runtime : null
    }, window.cr_getSnapshot = function(t, e) {
        var i = window.cr_getC2Runtime();
        i && i.doCanvasSnapshot(t, e)
    }, window.cr_sizeCanvas = function(t, e) {
        if (0 !== t && 0 !== e) {
            var i = window.cr_getC2Runtime();
            i && i.setSize(t, e)
        }
    }, window.cr_setSuspended = function(t) {
        var e = window.cr_getC2Runtime();
        e && e.setSuspended(t)
    },
    function() {
        function t(t, e) {
            this.runtime = t, this.event_sheet = null, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2, this.scale = 1, this.angle = 0, this.first_visit = !0, this.name = e[0], this.originalWidth = e[1], this.originalHeight = e[2], this.width = e[1], this.height = e[2], this.unbounded_scrolling = e[3], this.sheetname = e[4], this.sid = e[5];
            var i, s, n = e[6];
            for (this.layers = [], this.initial_types = [], i = 0, s = n.length; s > i; i++) {
                var r = new cr.layer(this, n[i]);
                r.number = i, cr.seal(r), this.layers.push(r)
            }
            var o = e[7];
            for (this.initial_nonworld = [], i = 0, s = o.length; s > i; i++) {
                var a = o[i],
                    h = this.runtime.types_by_index[a[1]];
                h.default_instance || (h.default_instance = a), this.initial_nonworld.push(a), -1 === this.initial_types.indexOf(h) && this.initial_types.push(h)
            }
            for (this.effect_types = [], this.active_effect_types = [], this.shaders_preserve_opaqueness = !0, this.effect_params = [], i = 0, s = e[8].length; s > i; i++) this.effect_types.push({
                id: e[8][i][0],
                name: e[8][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }), this.effect_params.push(e[8][i][2].slice(0));
            this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1), this.persist_data = {}
        }

        function e(t, e) {
            return t.zindex - e.zindex
        }

        function i(t, e) {
            this.layout = t, this.runtime = t.runtime, this.instances = [], this.scale = 1, this.angle = 0, this.disableAngle = !1, this.tmprect = new cr.rect(0, 0, 0, 0), this.tmpquad = new cr.quad, this.viewLeft = 0, this.viewRight = 0, this.viewTop = 0, this.viewBottom = 0, this.zindices_stale = !1, this.zindices_stale_from = -1, this.clear_earlyz_index = 0, this.name = e[0], this.index = e[1], this.sid = e[2], this.visible = e[3], this.background_color = e[4], this.transparent = e[5], this.parallaxX = e[6], this.parallaxY = e[7], this.opacity = e[8], this.forceOwnTexture = e[9], this.useRenderCells = e[10], this.zoomRate = e[11], this.blend_mode = e[12], this.effect_fallback = e[13], this.compositeOp = "source-over", this.srcBlend = 0, this.destBlend = 0, this.render_grid = null, this.last_render_list = s(), this.render_list_stale = !0, this.last_render_cells = new cr.rect(0, 0, -1, -1), this.cur_render_cells = new cr.rect(0, 0, -1, -1), this.useRenderCells && (this.render_grid = new cr.RenderGrid(this.runtime.original_width, this.runtime.original_height)), this.render_offscreen = !1;
            var i, n, r = e[14];
            for (this.startup_initial_instances = [], this.initial_instances = [], this.created_globals = [], i = 0, n = r.length; n > i; i++) {
                var o = r[i],
                    a = this.runtime.types_by_index[o[1]];
                a.default_instance || (a.default_instance = o, a.default_layerindex = this.index), this.initial_instances.push(o), -1 === this.layout.initial_types.indexOf(a) && this.layout.initial_types.push(a)
            }
            for (cr.shallowAssignArray(this.startup_initial_instances, this.initial_instances), this.effect_types = [], this.active_effect_types = [], this.shaders_preserve_opaqueness = !0, this.effect_params = [], i = 0, n = e[15].length; n > i; i++) this.effect_types.push({
                id: e[15][i][0],
                name: e[15][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }), this.effect_params.push(e[15][i][2].slice(0));
            this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1)
        }

        function s() {
            return u.length ? u.pop() : []
        }

        function n(t) {
            cr.clearArray(t), u.push(t)
        }

        function r(t, e, i) {
            var s, n, r = 0,
                o = 0,
                a = 0,
                h = t.length,
                c = e.length;
            for (i.length = h + c; h > r && c > o; ++a) s = t[r], n = e[o], s.zindex < n.zindex ? (i[a] = s, ++r) : (i[a] = n, ++o);
            for (; h > r; ++r, ++a) i[a] = t[r];
            for (; c > o; ++o, ++a) i[a] = e[o]
        }

        function o(t, e) {
            var i, o, a, h, c;
            for (i = 0, o = t.length; o - 1 > i; i += 2) a = t[i], h = t[i + 1], c = s(), r(a, h, c), e || (n(a), n(h)), p.push(c);
            o % 2 === 1 && (e ? (a = s(), cr.shallowAssignArray(a, t[o - 1]), p.push(a)) : p.push(t[o - 1])), cr.shallowAssignArray(t, p), cr.clearArray(p)
        }

        function a(t) {
            for (var e = !0; t.length > 1;) o(t, e), e = !1;
            return t[0]
        }
        t.prototype.saveObjectToPersist = function(t) {
            var e = t.type.sid.toString();
            this.persist_data.hasOwnProperty(e) || (this.persist_data[e] = []);
            var i = this.persist_data[e];
            i.push(this.runtime.saveInstanceToJSON(t))
        }, t.prototype.hasOpaqueBottomLayer = function() {
            var t = this.layers[0];
            return !t.transparent && 1 === t.opacity && !t.forceOwnTexture && t.visible
        }, t.prototype.updateActiveEffects = function() {
            cr.clearArray(this.active_effect_types), this.shaders_preserve_opaqueness = !0;
            var t, e, i;
            for (t = 0, e = this.effect_types.length; e > t; t++) i = this.effect_types[t], i.active && (this.active_effect_types.push(i), i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
        }, t.prototype.getEffectByName = function(t) {
            var e, i, s;
            for (e = 0, i = this.effect_types.length; i > e; e++)
                if (s = this.effect_types[e], s.name === t) return s;
            return null
        };
        var h = [],
            c = !0;
        t.prototype.startRunning = function() {
            this.sheetname && (this.event_sheet = this.runtime.eventsheets[this.sheetname], this.event_sheet.updateDeepIncludes()), this.runtime.running_layout = this, this.width = this.originalWidth, this.height = this.originalHeight, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2;
            var t, i, s, n, r, o, a, l, u, p, d, f, g;
            for (t = 0, s = this.runtime.types_by_index.length; s > t; t++)
                if (r = this.runtime.types_by_index[t], !r.is_family)
                    for (o = r.instances, i = 0, n = o.length; n > i; i++)
                        if (a = o[i], a.layer) {
                            var y = a.layer.number;
                            y >= this.layers.length && (y = this.layers.length - 1), a.layer = this.layers[y], -1 === a.layer.instances.indexOf(a) && a.layer.instances.push(a), a.layer.zindices_stale = !0
                        }
            if (!c)
                for (t = 0, s = this.layers.length; s > t; ++t) this.layers[t].instances.sort(e);
            var g;
            for (cr.clearArray(h), this.boundScrolling(), t = 0, s = this.layers.length; s > t; t++) g = this.layers[t], g.createInitialInstances(), g.updateViewport(null);
            var m = !1;
            if (!this.first_visit) {
                for (d in this.persist_data)
                    if (this.persist_data.hasOwnProperty(d)) {
                        if (r = this.runtime.getObjectTypeBySid(parseInt(d, 10)), !r || r.is_family || !this.runtime.typeHasPersistBehavior(r)) continue;
                        for (f = this.persist_data[d], t = 0, s = f.length; s > t; t++) g = null, (!r.plugin.is_world || (g = this.getLayerBySid(f[t].w.l))) && (a = this.runtime.createInstanceFromInit(r.default_instance, g, !1, 0, 0, !0), this.runtime.loadInstanceFromJSON(a, f[t]), m = !0, h.push(a));
                        cr.clearArray(f)
                    }
                for (t = 0, s = this.layers.length; s > t; t++) this.layers[t].instances.sort(e), this.layers[t].zindices_stale = !0
            }
            for (m && (this.runtime.ClearDeathRow(), this.runtime.refreshUidMap()), t = 0; t < h.length; t++)
                if (a = h[t], a.type.is_contained)
                    for (l = a.get_iid(), i = 0, n = a.type.container.length; n > i; i++) u = a.type.container[i], a.type !== u && (u.instances.length > l ? a.siblings.push(u.instances[l]) : u.default_instance && (p = this.runtime.createInstanceFromInit(u.default_instance, a.layer, !0, a.x, a.y, !0), this.runtime.ClearDeathRow(), u.updateIIDs(), a.siblings.push(p), h.push(p)));
            for (t = 0, s = this.initial_nonworld.length; s > t; t++) a = this.runtime.createInstanceFromInit(this.initial_nonworld[t], null, !0);
            if (this.runtime.changelayout = null, this.runtime.ClearDeathRow(), this.runtime.ctx && !this.runtime.isDomFree)
                for (t = 0, s = this.runtime.types_by_index.length; s > t; t++) u = this.runtime.types_by_index[t], !u.is_family && u.instances.length && u.preloadCanvas2D && u.preloadCanvas2D(this.runtime.ctx);
            if (this.runtime.isLoadingState) cr.shallowAssignArray(this.runtime.fireOnCreateAfterLoad, h);
            else
                for (t = 0, s = h.length; s > t; t++) a = h[t], this.runtime.trigger(Object.getPrototypeOf(a.type.plugin).cnds.OnCreated, a);
            cr.clearArray(h), this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutStart, null), this.first_visit = !1
        }, t.prototype.createGlobalNonWorlds = function() {
            var t, e, i, s, n, r;
            for (t = 0, e = 0, i = this.initial_nonworld.length; i > t; t++) s = this.initial_nonworld[t], r = this.runtime.types_by_index[s[1]], r.global ? r.is_contained || (n = this.runtime.createInstanceFromInit(s, null, !0)) : (this.initial_nonworld[e] = s, e++);
            cr.truncateArray(this.initial_nonworld, e)
        }, t.prototype.stopRunning = function() {
            this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutEnd, null), this.runtime.isEndingLayout = !0, cr.clearArray(this.runtime.system.waits);
            var t, e, i, s, n, r, o;
            if (!this.first_visit)
                for (t = 0, e = this.layers.length; e > t; t++)
                    for (this.layers[t].updateZIndices(), n = this.layers[t].instances, i = 0, s = n.length; s > i; i++) r = n[i], r.type.global || this.runtime.typeHasPersistBehavior(r.type) && this.saveObjectToPersist(r);
            for (t = 0, e = this.layers.length; e > t; t++) {
                for (n = this.layers[t].instances, i = 0, s = n.length; s > i; i++) r = n[i], r.type.global || this.runtime.DestroyInstance(r);
                this.runtime.ClearDeathRow(), cr.clearArray(n), this.layers[t].zindices_stale = !0
            }
            for (t = 0, e = this.runtime.types_by_index.length; e > t; t++)
                if (o = this.runtime.types_by_index[t], !(o.global || o.plugin.is_world || o.plugin.singleglobal || o.is_family)) {
                    for (i = 0, s = o.instances.length; s > i; i++) this.runtime.DestroyInstance(o.instances[i]);
                    this.runtime.ClearDeathRow()
                }
            c = !1, this.runtime.isEndingLayout = !1
        };
        var l = new cr.rect(0, 0, 0, 0);
        t.prototype.recreateInitialObjects = function(t, e, i, s, n) {
            l.set(e, i, s, n);
            var r, o;
            for (r = 0, o = this.layers.length; o > r; r++) this.layers[r].recreateInitialObjects(t, l)
        }, t.prototype.draw = function(t) {
            var e, i = t,
                s = !1,
                n = !this.runtime.fullscreenScalingQuality;
            n && (this.runtime.layout_canvas || (this.runtime.layout_canvas = document.createElement("canvas"), e = this.runtime.layout_canvas, e.width = this.runtime.draw_width, e.height = this.runtime.draw_height, this.runtime.layout_ctx = e.getContext("2d"), s = !0), e = this.runtime.layout_canvas, i = this.runtime.layout_ctx, e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width, s = !0), e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height, s = !0), s && this.runtime.setCtxImageSmoothingEnabled(i, this.runtime.linearSampling)), i.globalAlpha = 1, i.globalCompositeOperation = "source-over", this.runtime.alphaBackground && !this.hasOpaqueBottomLayer() && i.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height);
            var r, o, a;
            for (r = 0, o = this.layers.length; o > r; r++) a = this.layers[r], a.visible && a.opacity > 0 && 11 !== a.blend_mode && (a.instances.length || !a.transparent) ? a.draw(i) : a.updateViewport(null);
            n && t.drawImage(e, 0, 0, this.runtime.width, this.runtime.height)
        }, t.prototype.drawGL_earlyZPass = function(t) {
            t.setEarlyZPass(!0), this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), (this.runtime.layout_tex.c2width !== this.runtime.draw_width || this.runtime.layout_tex.c2height !== this.runtime.draw_height) && (t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layout_tex), this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height);
            var e, i;
            for (e = this.layers.length - 1; e >= 0; --e) i = this.layers[e], i.visible && 1 === i.opacity && i.shaders_preserve_opaqueness && 0 === i.blend_mode && (i.instances.length || !i.transparent) ? i.drawGL_earlyZPass(t) : i.updateViewport(null);
            t.setEarlyZPass(!1)
        }, t.prototype.drawGL = function(t) {
            var e = this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack;
            e ? (this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), (this.runtime.layout_tex.c2width !== this.runtime.draw_width || this.runtime.layout_tex.c2height !== this.runtime.draw_height) && (t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layout_tex), this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height)) : this.runtime.layout_tex && (t.setRenderingToTexture(null), t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = null), this.runtime.alphaBackground && !this.hasOpaqueBottomLayer() && t.clear(0, 0, 0, 0);
            var i, s, n;
            for (i = 0, s = this.layers.length; s > i; i++) n = this.layers[i], n.visible && n.opacity > 0 && (n.instances.length || !n.transparent) ? n.drawGL(t) : n.updateViewport(null);
            if (e)
                if (0 === this.active_effect_types.length || 1 === this.active_effect_types.length && this.runtime.fullscreenScalingQuality) {
                    if (1 === this.active_effect_types.length) {
                        var r = this.active_effect_types[0].index;
                        t.switchProgram(this.active_effect_types[0].shaderindex), t.setProgramParameters(null, 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, this.scale, this.angle, 0, 0, this.runtime.draw_width / 2, this.runtime.draw_height / 2, this.runtime.kahanTime.sum, this.effect_params[r]), t.programIsAnimated(this.active_effect_types[0].shaderindex) && (this.runtime.redraw = !0)
                    } else t.switchProgram(0);
                    this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.width, this.runtime.height), t.setRenderingToTexture(null), t.setDepthTestEnabled(!1), t.setOpacity(1), t.setTexture(this.runtime.layout_tex), t.setAlphaBlend(), t.resetModelView(), t.updateModelView();
                    var o = this.runtime.width / 2,
                        a = this.runtime.height / 2;
                    t.quad(-o, a, o, a, o, -a, -o, -a), t.setTexture(null), t.setDepthTestEnabled(!0)
                } else this.renderEffectChain(t, null, null, null)
        }, t.prototype.getRenderTarget = function() {
            return this.active_effect_types.length > 0 || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack ? this.runtime.layout_tex : null
        }, t.prototype.getMinLayerScale = function() {
            var t, e, i, s = this.layers[0].getScale();
            for (t = 1, e = this.layers.length; e > t; t++) i = this.layers[t], (0 !== i.parallaxX || 0 !== i.parallaxY) && i.getScale() < s && (s = i.getScale());
            return s
        }, t.prototype.scrollToX = function(t) {
            if (!this.unbounded_scrolling) {
                var e = this.runtime.draw_width * (1 / this.getMinLayerScale()) / 2;
                t > this.width - e && (t = this.width - e), e > t && (t = e)
            }
            this.scrollX !== t && (this.scrollX = t, this.runtime.redraw = !0)
        }, t.prototype.scrollToY = function(t) {
            if (!this.unbounded_scrolling) {
                var e = this.runtime.draw_height * (1 / this.getMinLayerScale()) / 2;
                t > this.height - e && (t = this.height - e), e > t && (t = e)
            }
            this.scrollY !== t && (this.scrollY = t, this.runtime.redraw = !0)
        }, t.prototype.boundScrolling = function() {
            this.scrollToX(this.scrollX), this.scrollToY(this.scrollY)
        }, t.prototype.renderEffectChain = function(t, e, i, s) {
            var n = i ? i.active_effect_types : e ? e.active_effect_types : this.active_effect_types,
                r = 1,
                o = 0,
                a = 0,
                h = 0,
                c = this.runtime.draw_width,
                l = this.runtime.draw_height;
            i ? (r = i.layer.getScale(), o = i.layer.getAngle(), a = i.layer.viewLeft, h = i.layer.viewTop, c = i.layer.viewRight, l = i.layer.viewBottom) : e && (r = e.getScale(), o = e.getAngle(), a = e.viewLeft, h = e.viewTop, c = e.viewRight, l = e.viewBottom);
            var u, p, d, f, g, y, m = this.runtime.fx_tex,
                _ = 0,
                v = 1,
                b = this.runtime.draw_width,
                w = this.runtime.draw_height,
                x = b / 2,
                S = w / 2,
                T = e ? e.rcTex : this.rcTex,
                O = e ? e.rcTex2 : this.rcTex2,
                A = 0,
                C = 0,
                k = 0,
                E = 0,
                P = b,
                I = b,
                M = w,
                R = w,
                L = 0,
                F = 0,
                B = i ? i.layer.getAngle() : 0;
            if (i) {
                for (u = 0, p = n.length; p > u; u++) L += t.getProgramBoxExtendHorizontal(n[u].shaderindex), F += t.getProgramBoxExtendVertical(n[u].shaderindex);
                var N = i.bbox;
                if (A = e.layerToCanvas(N.left, N.top, !0, !0), k = e.layerToCanvas(N.left, N.top, !1, !0), P = e.layerToCanvas(N.right, N.bottom, !0, !0), M = e.layerToCanvas(N.right, N.bottom, !1, !0), 0 !== B) {
                    var j = e.layerToCanvas(N.right, N.top, !0, !0),
                        D = e.layerToCanvas(N.right, N.top, !1, !0),
                        W = e.layerToCanvas(N.left, N.bottom, !0, !0),
                        z = e.layerToCanvas(N.left, N.bottom, !1, !0);
                    f = Math.min(A, P, j, W), P = Math.max(A, P, j, W), A = f, f = Math.min(k, M, D, z), M = Math.max(k, M, D, z), k = f
                }
                A -= L, k -= F, P += L, M += F, O.left = A / b, O.top = 1 - k / w, O.right = P / b, O.bottom = 1 - M / w, C = A = cr.floor(A), E = k = cr.floor(k), I = P = cr.ceil(P), R = M = cr.ceil(M), C -= L, E -= F, I += L, R += F, 0 > A && (A = 0), 0 > k && (k = 0), P > b && (P = b), M > w && (M = w), 0 > C && (C = 0), 0 > E && (E = 0), I > b && (I = b), R > w && (R = w), T.left = A / b, T.top = 1 - k / w, T.right = P / b, T.bottom = 1 - M / w
            } else T.left = O.left = 0, T.top = O.top = 0, T.right = O.right = 1, T.bottom = O.bottom = 1;
            var G = i && (t.programUsesDest(n[0].shaderindex) || 0 !== L || 0 !== F || 1 !== i.opacity || i.type.plugin.must_predraw) || e && !i && 1 !== e.opacity;
            t.setAlphaBlend(), G && (m[_] || (m[_] = t.createEmptyTexture(b, w, this.runtime.linearSampling)), (m[_].c2width !== b || m[_].c2height !== w) && (t.deleteTexture(m[_]), m[_] = t.createEmptyTexture(b, w, this.runtime.linearSampling)), t.switchProgram(0), t.setRenderingToTexture(m[_]), y = R - E, g = w - E - y, t.clearRect(C, g, I - C, y), i ? i.drawGL(t) : (t.setTexture(this.runtime.layer_tex), t.setOpacity(e.opacity), t.resetModelView(), t.translate(-x, -S), t.updateModelView(), t.quadTex(A, M, P, M, P, k, A, k, T)), O.left = O.top = 0, O.right = O.bottom = 1, i && (f = T.top, T.top = T.bottom, T.bottom = f), _ = 1, v = 0), t.setOpacity(1);
            var d = n.length - 1,
                U = t.programUsesCrossSampling(n[d].shaderindex) || !e && !i && !this.runtime.fullscreenScalingQuality,
                V = 0;
            for (u = 0, p = n.length; p > u; u++) {
                if (m[_] || (m[_] = t.createEmptyTexture(b, w, this.runtime.linearSampling)), (m[_].c2width !== b || m[_].c2height !== w) && (t.deleteTexture(m[_]), m[_] = t.createEmptyTexture(b, w, this.runtime.linearSampling)), t.switchProgram(n[u].shaderindex), V = n[u].index, t.programIsAnimated(n[u].shaderindex) && (this.runtime.redraw = !0), 0 != u || G) t.setProgramParameters(s, 1 / b, 1 / w, O.left, O.top, O.right, O.bottom, r, o, a, h, (a + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, i ? i.effect_params[V] : e ? e.effect_params[V] : this.effect_params[V]), t.setTexture(null), u !== d || U ? (t.setRenderingToTexture(m[_]), y = R - E, g = w - E - y, t.clearRect(C, g, I - C, y)) : (i ? t.setBlend(i.srcBlend, i.destBlend) : e && t.setBlend(e.srcBlend, e.destBlend), t.setRenderingToTexture(s)), t.setTexture(m[v]), t.resetModelView(), t.translate(-x, -S), t.updateModelView(), t.quadTex(A, M, P, M, P, k, A, k, T), u !== d || U || t.setTexture(null);
                else {
                    if (t.setRenderingToTexture(m[_]), y = R - E, g = w - E - y, t.clearRect(C, g, I - C, y), i) {
                        var X, q;
                        if (i.curFrame && i.curFrame.texture_img) {
                            var J = i.curFrame.texture_img;
                            X = 1 / J.width, q = 1 / J.height
                        } else X = 1 / i.width, q = 1 / i.height;
                        t.setProgramParameters(s, X, q, O.left, O.top, O.right, O.bottom, r, o, a, h, (a + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, i.effect_params[V]), i.drawGL(t)
                    } else t.setProgramParameters(s, 1 / b, 1 / w, 0, 0, 1, 1, r, o, a, h, (a + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, e ? e.effect_params[V] : this.effect_params[V]), t.setTexture(e ? this.runtime.layer_tex : this.runtime.layout_tex), t.resetModelView(), t.translate(-x, -S), t.updateModelView(), t.quadTex(A, M, P, M, P, k, A, k, T);
                    O.left = O.top = 0, O.right = O.bottom = 1, i && !U && (f = M, M = k, k = f)
                }
                _ = 0 === _ ? 1 : 0, v = 0 === _ ? 1 : 0
            }
            U && (t.switchProgram(0), i ? t.setBlend(i.srcBlend, i.destBlend) : e ? t.setBlend(e.srcBlend, e.destBlend) : this.runtime.fullscreenScalingQuality || (t.setSize(this.runtime.width, this.runtime.height), x = this.runtime.width / 2, S = this.runtime.height / 2, A = 0, k = 0, P = this.runtime.width, M = this.runtime.height), t.setRenderingToTexture(s), t.setTexture(m[v]), t.resetModelView(), t.translate(-x, -S), t.updateModelView(), i && 1 === n.length && !G ? t.quadTex(A, k, P, k, P, M, A, M, T) : t.quadTex(A, M, P, M, P, k, A, k, T), t.setTexture(null))
        }, t.prototype.getLayerBySid = function(t) {
            var e, i;
            for (e = 0, i = this.layers.length; i > e; e++)
                if (this.layers[e].sid === t) return this.layers[e];
            return null
        }, t.prototype.saveToJSON = function() {
            var t, e, i, s, n = {
                sx: this.scrollX,
                sy: this.scrollY,
                s: this.scale,
                a: this.angle,
                w: this.width,
                h: this.height,
                fv: this.first_visit,
                persist: this.persist_data,
                fx: [],
                layers: {}
            };
            for (t = 0, e = this.effect_types.length; e > t; t++) s = this.effect_types[t], n.fx.push({
                name: s.name,
                active: s.active,
                params: this.effect_params[s.index]
            });
            for (t = 0, e = this.layers.length; e > t; t++) i = this.layers[t], n.layers[i.sid.toString()] = i.saveToJSON();
            return n
        }, t.prototype.loadFromJSON = function(t) {
            var e, i, s, n, r;
            this.scrollX = t.sx, this.scrollY = t.sy, this.scale = t.s, this.angle = t.a, this.width = t.w, this.height = t.h, this.persist_data = t.persist, "undefined" != typeof t.fv && (this.first_visit = t.fv);
            var o = t.fx;
            for (e = 0, i = o.length; i > e; e++) s = this.getEffectByName(o[e].name), s && (s.active = o[e].active, this.effect_params[s.index] = o[e].params);
            this.updateActiveEffects();
            var a = t.layers;
            for (n in a)
                if (a.hasOwnProperty(n)) {
                    if (r = this.getLayerBySid(parseInt(n, 10)), !r) continue;
                    r.loadFromJSON(a[n])
                }
        }, cr.layout = t, i.prototype.updateActiveEffects = function() {
            cr.clearArray(this.active_effect_types), this.shaders_preserve_opaqueness = !0;
            var t, e, i;
            for (t = 0, e = this.effect_types.length; e > t; t++) i = this.effect_types[t], i.active && (this.active_effect_types.push(i), i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
        }, i.prototype.getEffectByName = function(t) {
            var e, i, s;
            for (e = 0, i = this.effect_types.length; i > e; e++)
                if (s = this.effect_types[e], s.name === t) return s;
            return null
        }, i.prototype.createInitialInstances = function() {
            var t, e, i, s, n, r, o, a;
            for (t = 0, e = 0, i = this.initial_instances.length; i > t; t++) {
                if (n = this.initial_instances[t], r = this.runtime.types_by_index[n[1]], a = this.runtime.typeHasPersistBehavior(r), o = !0, !a || this.layout.first_visit) {
                    if (s = this.runtime.createInstanceFromInit(n, this, !0), !s) continue;
                    h.push(s), s.type.global && (o = !1, this.created_globals.push(s.uid))
                }
                o && (this.initial_instances[e] = this.initial_instances[t], e++)
            }
            this.initial_instances.length = e, this.runtime.ClearDeathRow(), !this.runtime.glwrap && this.effect_types.length && (this.blend_mode = this.effect_fallback), this.compositeOp = cr.effectToCompositeOp(this.blend_mode), this.runtime.gl && cr.setGLBlend(this, this.blend_mode, this.runtime.gl), this.render_list_stale = !0
        }, i.prototype.recreateInitialObjects = function(t, e) {
            var i, s, n, r, o, a, h, c, l, u, p, d = this.runtime.types_by_index,
                f = t.is_family,
                g = t.members;
            for (i = 0, s = this.initial_instances.length; s > i; ++i)
                if (n = this.initial_instances[i], o = n[0], a = o[0], h = o[1], e.contains_pt(a, h)) {
                    if (r = d[n[1]], r !== t) {
                        if (!f) continue;
                        if (g.indexOf(r) < 0) continue
                    }
                    if (c = this.runtime.createInstanceFromInit(n, this, !1), this.runtime.isInOnDestroy++, this.runtime.trigger(Object.getPrototypeOf(r.plugin).cnds.OnCreated, c), c.is_contained)
                        for (l = 0, u = c.siblings.length; u > l; l++) p = c.siblings[i], this.runtime.trigger(Object.getPrototypeOf(p.type.plugin).cnds.OnCreated, p);
                    this.runtime.isInOnDestroy--
                }
        }, i.prototype.removeFromInstanceList = function(t, e) {
            var i = cr.fastIndexOf(this.instances, t);
            0 > i || (e && this.useRenderCells && t.rendercells && t.rendercells.right >= t.rendercells.left && (t.update_bbox(), this.render_grid.update(t, t.rendercells, null), t.rendercells.set(0, 0, -1, -1)), i === this.instances.length - 1 ? this.instances.pop() : (cr.arrayRemove(this.instances, i), this.setZIndicesStaleFrom(i)), this.render_list_stale = !0)
        }, i.prototype.appendToInstanceList = function(t, e) {
            t.zindex = this.instances.length, this.instances.push(t), e && this.useRenderCells && t.rendercells && t.set_bbox_changed(), this.render_list_stale = !0
        }, i.prototype.prependToInstanceList = function(t, e) {
            this.instances.unshift(t), this.setZIndicesStaleFrom(0), e && this.useRenderCells && t.rendercells && t.set_bbox_changed()
        }, i.prototype.moveInstanceAdjacent = function(t, e, i) {
            var s = t.get_zindex(),
                n = e.get_zindex();
            cr.arrayRemove(this.instances, s), n > s && n--, i && n++, n === this.instances.length ? this.instances.push(t) : this.instances.splice(n, 0, t), this.setZIndicesStaleFrom(n > s ? s : n)
        }, i.prototype.setZIndicesStaleFrom = function(t) {
            -1 === this.zindices_stale_from ? this.zindices_stale_from = t : t < this.zindices_stale_from && (this.zindices_stale_from = t), this.zindices_stale = !0, this.render_list_stale = !0
        }, i.prototype.updateZIndices = function() {
            if (this.zindices_stale) {
                -1 === this.zindices_stale_from && (this.zindices_stale_from = 0);
                var t, e, i;
                if (this.useRenderCells)
                    for (t = this.zindices_stale_from, e = this.instances.length; e > t; ++t) i = this.instances[t], i.zindex = t, this.render_grid.markRangeChanged(i.rendercells);
                else
                    for (t = this.zindices_stale_from, e = this.instances.length; e > t; ++t) this.instances[t].zindex = t;
                this.zindices_stale = !1, this.zindices_stale_from = -1
            }
        }, i.prototype.getScale = function(t) {
            return this.getNormalScale() * (this.runtime.fullscreenScalingQuality || t ? this.runtime.aspect_scale : 1)
        }, i.prototype.getNormalScale = function() {
            return (this.scale * this.layout.scale - 1) * this.zoomRate + 1
        }, i.prototype.getAngle = function() {
            return this.disableAngle ? 0 : cr.clamp_angle(this.layout.angle + this.angle)
        };
        var u = [],
            p = [],
            d = [];
        i.prototype.getRenderCellInstancesToDraw = function() {
            if (this.updateZIndices(), this.render_grid.queryRange(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom, d), !d.length) return s();
            if (1 === d.length) {
                var t = s();
                return cr.shallowAssignArray(t, d[0]), cr.clearArray(d), t
            }
            var e = a(d);
            return cr.clearArray(d), e
        }, i.prototype.draw = function(t) {
            this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || 0 !== this.blend_mode;
            var e = this.runtime.canvas,
                i = t,
                s = !1;
            this.render_offscreen && (this.runtime.layer_canvas || (this.runtime.layer_canvas = document.createElement("canvas"), e = this.runtime.layer_canvas, e.width = this.runtime.draw_width, e.height = this.runtime.draw_height, this.runtime.layer_ctx = e.getContext("2d"), s = !0), e = this.runtime.layer_canvas, i = this.runtime.layer_ctx, e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width, s = !0), e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height, s = !0), s && this.runtime.setCtxImageSmoothingEnabled(i, this.runtime.linearSampling), this.transparent && i.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), i.globalAlpha = 1, i.globalCompositeOperation = "source-over", this.transparent || (i.fillStyle = "rgb(" + this.background_color[0] + "," + this.background_color[1] + "," + this.background_color[2] + ")", i.fillRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), i.save(), this.disableAngle = !0;
            var r = this.canvasToLayer(0, 0, !0, !0),
                o = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (r = Math.round(r), o = Math.round(o)), this.rotateViewport(r, o, i);
            var a = this.getScale();
            i.scale(a, a), i.translate(-r, -o);
            var h;
            this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (n(this.last_render_list), h = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : h = this.last_render_list) : h = this.instances;
            var c, l, u, p = null;
            for (c = 0, l = h.length; l > c; ++c) u = h[c], u !== p && (this.drawInstance(u, i), p = u);
            this.useRenderCells && (this.last_render_list = h), i.restore(), this.render_offscreen && (t.globalCompositeOperation = this.compositeOp, t.globalAlpha = this.opacity, t.drawImage(e, 0, 0))
        }, i.prototype.drawInstance = function(t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.globalCompositeOperation = t.compositeOp, t.draw(e))
            }
        }, i.prototype.updateViewport = function(t) {
            this.disableAngle = !0;
            var e = this.canvasToLayer(0, 0, !0, !0),
                i = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i)), this.rotateViewport(e, i, t)
        }, i.prototype.rotateViewport = function(t, e, i) {
            var s = this.getScale();
            this.viewLeft = t, this.viewTop = e, this.viewRight = t + this.runtime.draw_width * (1 / s), this.viewBottom = e + this.runtime.draw_height * (1 / s);
            var n;
            this.viewLeft > this.viewRight && (n = this.viewLeft, this.viewLeft = this.viewRight, this.viewRight = n), this.viewTop > this.viewBottom && (n = this.viewTop, this.viewTop = this.viewBottom, this.viewBottom = n);
            var r = this.getAngle();
            0 !== r && (i && (i.translate(this.runtime.draw_width / 2, this.runtime.draw_height / 2), i.rotate(-r), i.translate(this.runtime.draw_width / -2, this.runtime.draw_height / -2)), this.tmprect.set(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom), this.tmprect.offset((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), this.tmpquad.set_from_rotated_rect(this.tmprect, r), this.tmpquad.bounding_box(this.tmprect), this.tmprect.offset((this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2), this.viewLeft = this.tmprect.left, this.viewTop = this.tmprect.top, this.viewRight = this.tmprect.right, this.viewBottom = this.tmprect.bottom)
        }, i.prototype.drawGL_earlyZPass = function(t) {
            this.runtime.draw_width, this.runtime.draw_height;
            this.render_offscreen = this.forceOwnTexture, this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), (this.runtime.layer_tex.c2width !== this.runtime.draw_width || this.runtime.layer_tex.c2height !== this.runtime.draw_height) && (t.deleteTexture(this.runtime.layer_tex), this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layer_tex)), this.disableAngle = !0;
            var e = this.canvasToLayer(0, 0, !0, !0),
                i = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i)), this.rotateViewport(e, i, null);
            var s = this.getScale();
            t.resetModelView(), t.scale(s, s), t.rotateZ(-this.getAngle()), t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), t.updateModelView();
            var r;
            this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (n(this.last_render_list), r = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : r = this.last_render_list) : r = this.instances;
            var o, a, h = null;
            for (o = r.length - 1; o >= 0; --o) a = r[o], a !== h && (this.drawInstanceGL_earlyZPass(r[o], t), h = a);
            this.useRenderCells && (this.last_render_list = r), this.transparent || (this.clear_earlyz_index = this.runtime.earlyz_index++, t.setEarlyZIndex(this.clear_earlyz_index), t.setColorFillMode(1, 1, 1, 1), t.fullscreenQuad(), t.restoreEarlyZMode())
        }, i.prototype.drawGL = function(t) {
            var e = (this.runtime.draw_width, this.runtime.draw_height, 0),
                i = 0;
            this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || this.active_effect_types.length > 0 || 0 !== this.blend_mode, this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), (this.runtime.layer_tex.c2width !== this.runtime.draw_width || this.runtime.layer_tex.c2height !== this.runtime.draw_height) && (t.deleteTexture(this.runtime.layer_tex), this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layer_tex), this.transparent && t.clear(0, 0, 0, 0)), this.transparent || (this.runtime.enableFrontToBack ? (t.setEarlyZIndex(this.clear_earlyz_index), t.setColorFillMode(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1), t.fullscreenQuad(), t.setTextureFillMode()) : t.clear(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1)), this.disableAngle = !0;
            var s = this.canvasToLayer(0, 0, !0, !0),
                r = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (s = Math.round(s), r = Math.round(r)), this.rotateViewport(s, r, null);
            var o = this.getScale();
            t.resetModelView(), t.scale(o, o), t.rotateZ(-this.getAngle()), t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), t.updateModelView();
            var a;
            this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (n(this.last_render_list), a = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : a = this.last_render_list) : a = this.instances;
            var h, c, l, u = null;
            for (h = 0, c = a.length; c > h; ++h) l = a[h], l !== u && (this.drawInstanceGL(a[h], t), u = l);
            if (this.useRenderCells && (this.last_render_list = a), this.render_offscreen)
                if (e = this.active_effect_types.length ? this.active_effect_types[0].shaderindex : 0, i = this.active_effect_types.length ? this.active_effect_types[0].index : 0, 0 === this.active_effect_types.length || 1 === this.active_effect_types.length && !t.programUsesCrossSampling(e) && 1 === this.opacity) {
                    1 === this.active_effect_types.length ? (t.switchProgram(e), t.setProgramParameters(this.layout.getRenderTarget(), 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, o, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, this.effect_params[i]), t.programIsAnimated(e) && (this.runtime.redraw = !0)) : t.switchProgram(0), t.setRenderingToTexture(this.layout.getRenderTarget()), t.setOpacity(this.opacity), t.setTexture(this.runtime.layer_tex), t.setBlend(this.srcBlend, this.destBlend), t.resetModelView(), t.updateModelView();
                    var p = this.runtime.draw_width / 2,
                        d = this.runtime.draw_height / 2;
                    t.quad(-p, d, p, d, p, -d, -p, -d), t.setTexture(null)
                } else this.layout.renderEffectChain(t, this, null, this.layout.getRenderTarget())
        }, i.prototype.drawInstanceGL = function(t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.setEarlyZIndex(t.earlyz_index), t.uses_shaders ? this.drawInstanceWithShadersGL(t, e) : (e.switchProgram(0), e.setBlend(t.srcBlend, t.destBlend), t.drawGL(e)))
            }
        }, i.prototype.drawInstanceGL_earlyZPass = function(t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (t.earlyz_index = this.runtime.earlyz_index++, 0 === t.blend_mode && 1 === t.opacity && t.shaders_preserve_opaqueness && t.drawGL_earlyZPass && (e.setEarlyZIndex(t.earlyz_index), t.drawGL_earlyZPass(e)))
            }
        }, i.prototype.drawInstanceWithShadersGL = function(t, e) {
            var i = t.active_effect_types[0].shaderindex,
                s = t.active_effect_types[0].index,
                n = this.getScale();
            if (1 !== t.active_effect_types.length || e.programUsesCrossSampling(i) || e.programExtendsBox(i) || (t.angle || t.layer.getAngle()) && e.programUsesDest(i) || 1 !== t.opacity || t.type.plugin.must_predraw) this.layout.renderEffectChain(e, this, t, this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget()), e.resetModelView(), e.scale(n, n), e.rotateZ(-this.getAngle()), e.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), e.updateModelView();
            else {
                e.switchProgram(i), e.setBlend(t.srcBlend, t.destBlend), e.programIsAnimated(i) && (this.runtime.redraw = !0);
                var r = 0,
                    o = 0,
                    a = 0,
                    h = 0;
                if (e.programUsesDest(i)) {
                    var c = t.bbox,
                        l = this.layerToCanvas(c.left, c.top, !0, !0),
                        u = this.layerToCanvas(c.left, c.top, !1, !0),
                        p = this.layerToCanvas(c.right, c.bottom, !0, !0),
                        d = this.layerToCanvas(c.right, c.bottom, !1, !0);
                    r = l / windowWidth, o = 1 - u / windowHeight, a = p / windowWidth, h = 1 - d / windowHeight
                }
                var f, g;
                if (t.curFrame && t.curFrame.texture_img) {
                    var y = t.curFrame.texture_img;
                    f = 1 / y.width, g = 1 / y.height
                } else f = 1 / t.width, g = 1 / t.height;
                e.setProgramParameters(this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget(), f, g, r, o, a, h, n, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, t.effect_params[s]), t.drawGL(e)
            }
        }, i.prototype.canvasToLayer = function(t, e, i, s) {
            var n = this.runtime.devicePixelRatio;
            this.runtime.isRetina && (t *= n, e *= n);
            var r = this.runtime.parallax_x_origin,
                o = this.runtime.parallax_y_origin,
                a = (this.layout.scrollX - r) * this.parallaxX + r,
                h = (this.layout.scrollY - o) * this.parallaxY + o,
                c = a,
                l = h,
                u = 1 / this.getScale(!s);
            s ? (c -= this.runtime.draw_width * u / 2, l -= this.runtime.draw_height * u / 2) : (c -= this.runtime.width * u / 2, l -= this.runtime.height * u / 2), c += t * u, l += e * u;
            var p = this.getAngle();
            if (0 !== p) {
                c -= a, l -= h;
                var d = Math.cos(p),
                    f = Math.sin(p),
                    g = c * d - l * f;
                l = l * d + c * f, c = g, c += a, l += h
            }
            return i ? c : l
        }, i.prototype.layerToCanvas = function(t, e, i, s) {
            var n = this.runtime.parallax_x_origin,
                r = this.runtime.parallax_y_origin,
                o = (this.layout.scrollX - n) * this.parallaxX + n,
                a = (this.layout.scrollY - r) * this.parallaxY + r,
                h = o,
                c = a,
                l = this.getAngle();
            if (0 !== l) {
                t -= o, e -= a;
                var u = Math.cos(-l),
                    p = Math.sin(-l),
                    d = t * u - e * p;
                e = e * u + t * p, t = d, t += o, e += a
            }
            var f = 1 / this.getScale(!s);
            s ? (h -= this.runtime.draw_width * f / 2, c -= this.runtime.draw_height * f / 2) : (h -= this.runtime.width * f / 2, c -= this.runtime.height * f / 2), h = (t - h) / f, c = (e - c) / f;
            var g = this.runtime.devicePixelRatio;
            return this.runtime.isRetina && !s && (h /= g, c /= g), i ? h : c
        }, i.prototype.rotatePt = function(t, e, i) {
            if (0 === this.getAngle()) return i ? t : e;
            var s = this.layerToCanvas(t, e, !0),
                n = this.layerToCanvas(t, e, !1);
            this.disableAngle = !0;
            var r = this.canvasToLayer(s, n, !0),
                o = this.canvasToLayer(s, n, !0);
            return this.disableAngle = !1, i ? r : o
        }, i.prototype.saveToJSON = function() {
            var t, e, i, s = {
                s: this.scale,
                a: this.angle,
                vl: this.viewLeft,
                vt: this.viewTop,
                vr: this.viewRight,
                vb: this.viewBottom,
                v: this.visible,
                bc: this.background_color,
                t: this.transparent,
                px: this.parallaxX,
                py: this.parallaxY,
                o: this.opacity,
                zr: this.zoomRate,
                fx: [],
                cg: this.created_globals,
                instances: []
            };
            for (t = 0, e = this.effect_types.length; e > t; t++) i = this.effect_types[t], s.fx.push({
                name: i.name,
                active: i.active,
                params: this.effect_params[i.index]
            });
            return s
        }, i.prototype.loadFromJSON = function(t) {
            var i, s, n, r;
            this.scale = t.s, this.angle = t.a, this.viewLeft = t.vl, this.viewTop = t.vt, this.viewRight = t.vr, this.viewBottom = t.vb, this.visible = t.v, this.background_color = t.bc, this.transparent = t.t, this.parallaxX = t.px, this.parallaxY = t.py, this.opacity = t.o, this.zoomRate = t.zr, this.created_globals = t.cg || [], cr.shallowAssignArray(this.initial_instances, this.startup_initial_instances);
            var o = new cr.ObjectSet;
            for (i = 0, n = this.created_globals.length; n > i; ++i) o.add(this.created_globals[i]);
            for (i = 0, s = 0, n = this.initial_instances.length; n > i; ++i) o.contains(this.initial_instances[i][2]) || (this.initial_instances[s] = this.initial_instances[i], ++s);
            cr.truncateArray(this.initial_instances, s);
            var a = t.fx;
            for (i = 0, n = a.length; n > i; i++) r = this.getEffectByName(a[i].name), r && (r.active = a[i].active, this.effect_params[r.index] = a[i].params);
            this.updateActiveEffects(), this.instances.sort(e), this.zindices_stale = !0
        }, cr.layer = i
    }(),
    function() {
        function t(t, e) {
            var i, s = t.length;
            switch (s) {
                case 0:
                    return !0;
                case 1:
                    return t[0] === e[0];
                case 2:
                    return t[0] === e[0] && t[1] === e[1];
                default:
                    for (i = 0; s > i; i++)
                        if (t[i] !== e[i]) return !1;
                    return !0
            }
        }

        function e(t, e) {
            return t.index - e.index
        }

        function i(i) {
            var s, n, r, o, a;
            for (2 === i.length ? i[0].index > i[1].index && (o = i[0], i[0] = i[1], i[1] = o) : i.length > 2 && i.sort(e), i.length >= y.length && (y.length = i.length + 1), y[i.length] || (y[i.length] = []), a = y[i.length], s = 0, n = a.length; n > s; s++)
                if (r = a[s], t(i, r)) return r;
            return a.push(i), i
        }

        function s(t, e) {
            this.runtime = t, this.triggers = {}, this.fasttriggers = {}, this.hasRun = !1, this.includes = new cr.ObjectSet, this.deep_includes = [], this.already_included_sheets = [], this.name = e[0];
            var i = e[1];
            this.events = [];
            var s, n;
            for (s = 0, n = i.length; n > s; s++) this.init_event(i[s], null, this.events)
        }

        function n(t) {
            return cr.plugins_.Sprite && t === cr.plugins_.Sprite.prototype.cnds.OnFrameChanged ? !0 : !1
        }

        function r(t) {
            this.type = t, this.instances = [], this.else_instances = [], this.select_all = !0
        }

        function o(t, e, i) {
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.solModifiersIncludingParents = [], this.solWriterAfterCnds = !1, this.group = !1, this.initially_activated = !1, this.toplevelevent = !1, this.toplevelgroup = !1, this.has_else_block = !1, this.conditions = [], this.actions = [], this.subevents = [], this.group_name = "", this.group = !1, this.initially_activated = !1, this.group_active = !1, this.contained_includes = null, i[1] && (this.group_name = i[1][1].toLowerCase(), this.group = !0, this.initially_activated = !!i[1][0], this.contained_includes = [], this.group_active = this.initially_activated, this.runtime.allGroups.push(this), this.runtime.groups_by_name[this.group_name] = this), this.orblock = i[2], this.sid = i[4], this.group || (this.runtime.blocksBySid[this.sid.toString()] = this);
            var s, n, r = i[5];
            for (s = 0, n = r.length; n > s; s++) {
                var o = new cr.condition(this, r[s]);
                o.index = s, cr.seal(o), this.conditions.push(o), this.addSolModifier(o.type)
            }
            var a = i[6];
            for (s = 0, n = a.length; n > s; s++) {
                var h = new cr.action(this, a[s]);
                h.index = s, cr.seal(h), this.actions.push(h)
            }
            if (8 === i.length) {
                var c = i[7];
                for (s = 0, n = c.length; n > s; s++) this.sheet.init_event(c[s], this, this.subevents)
            }
            this.is_else_block = !1, this.conditions.length && (this.is_else_block = null == this.conditions[0].type && this.conditions[0].func == cr.system_object.prototype.cnds.Else)
        }

        function a(t, e) {
            var i, s, n;
            if (t && (-1 === e.indexOf(t) && e.push(t), t.is_contained))
                for (i = 0, s = t.container.length; s > i; i++) n = t.container[i], t !== n && -1 === e.indexOf(n) && e.push(n)
        }

        function h(t, e) {
            if (this.block = t, this.sheet = t.sheet, this.runtime = t.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = this.runtime.GetObjectReference(e[1]), this.trigger = e[3] > 0, this.fasttrigger = 2 === e[3], this.looping = e[4], this.inverted = e[5], this.isstatic = e[6], this.sid = e[7], this.runtime.cndsBySid[this.sid.toString()] = this, -1 === e[0] ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]], this.isstatic ? this.run = this.run_static : this.run = this.run_object, e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]), this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null, this.beh_index = -1), this.block.parent && this.block.parent.setSolWriterAfterCnds()), this.fasttrigger && (this.run = this.run_true), 10 === e.length) {
                var i, s, n = e[9];
                for (i = 0, s = n.length; s > i; i++) {
                    var r = new cr.parameter(this, n[i]);
                    cr.seal(r), this.parameters.push(r)
                }
                this.results.length = n.length
            }
        }

        function c(t, e) {
            if (this.block = t, this.sheet = t.sheet, this.runtime = t.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = this.runtime.GetObjectReference(e[1]), -1 === e[0] ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]], this.run = this.run_object, e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]), this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null, this.beh_index = -1)), this.sid = e[3], this.runtime.actsBySid[this.sid.toString()] = this, 6 === e.length) {
                var i, s, n = e[5];
                for (i = 0, s = n.length; s > i; i++) {
                    var r = new cr.parameter(this, n[i]);
                    cr.seal(r), this.parameters.push(r)
                }
                this.results.length = n.length
            }
        }

        function l() {
            return _++, m.length === _ && m.push(new cr.expvalue), m[_]
        }

        function u() {
            _--
        }

        function p(t, e) {
            this.owner = t, this.block = t.block, this.sheet = t.sheet, this.runtime = t.runtime, this.type = e[0], this.expression = null, this.solindex = 0, this.get = null, this.combosel = 0, this.layout = null, this.key = 0, this.object = null, this.index = 0, this.varname = null, this.eventvar = null, this.fileinfo = null, this.subparams = null, this.variadicret = null, this.subparams = null, this.variadicret = null, this.variesPerInstance = !1;
            var i, s, n;
            switch (e[0]) {
                case 0:
                case 7:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_exp;
                    break;
                case 1:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_exp_str;
                    break;
                case 5:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_layer;
                    break;
                case 3:
                case 8:
                    this.combosel = e[1], this.get = this.get_combosel;
                    break;
                case 6:
                    this.layout = this.runtime.layouts[e[1]], this.get = this.get_layout;
                    break;
                case 9:
                    this.key = e[1], this.get = this.get_key;
                    break;
                case 4:
                    this.object = this.runtime.types_by_index[e[1]], this.get = this.get_object, this.block.addSolModifier(this.object), this.owner instanceof cr.action ? this.block.setSolWriterAfterCnds() : this.block.parent && this.block.parent.setSolWriterAfterCnds();
                    break;
                case 10:
                    this.index = e[1], t.type && t.type.is_family ? (this.get = this.get_familyvar, this.variesPerInstance = !0) : this.get = this.get_instvar;
                    break;
                case 11:
                    this.varname = e[1], this.eventvar = null, this.get = this.get_eventvar;
                    break;
                case 2:
                case 12:
                    this.fileinfo = e[1], this.get = this.get_audiofile;
                    break;
                case 13:
                    for (this.get = this.get_variadic, this.subparams = [], this.variadicret = [], i = 1, s = e.length; s > i; i++) n = new cr.parameter(this.owner, e[i]), cr.seal(n), this.subparams.push(n), this.variadicret.push(0)
            }
        }

        function d(t, e, i) {
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.name = i[1], this.vartype = i[2], this.initial = i[3], this.is_static = !!i[4], this.is_constant = !!i[5], this.sid = i[6], this.runtime.varsBySid[this.sid.toString()] = this, this.data = this.initial, this.parent ? (this.is_static || this.is_constant ? this.localIndex = -1 : this.localIndex = this.runtime.stackLocalCount++, this.runtime.all_local_vars.push(this)) : (this.localIndex = -1, this.runtime.all_global_vars.push(this))
        }

        function f(t, e, i) {
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.include_sheet = null, this.include_sheet_name = i[1], this.active = !0
        }

        function g() {
            this.temp_parents_arr = [], this.reset(null), cr.seal(this)
        }
        var y = [];
        s.prototype.toString = function() {
            return this.name
        }, s.prototype.init_event = function(t, e, i) {
            switch (t[0]) {
                case 0:
                    var s = new cr.eventblock(this, e, t);
                    if (cr.seal(s), s.orblock) {
                        i.push(s);
                        var n, r;
                        for (n = 0, r = s.conditions.length; r > n; n++) s.conditions[n].trigger && this.init_trigger(s, n)
                    } else s.is_trigger() ? this.init_trigger(s, 0) : i.push(s);
                    break;
                case 1:
                    var o = new cr.eventvariable(this, e, t);
                    cr.seal(o), i.push(o);
                    break;
                case 2:
                    var a = new cr.eventinclude(this, e, t);
                    cr.seal(a), i.push(a)
            }
        }, s.prototype.postInit = function() {
            var t, e;
            for (t = 0, e = this.events.length; e > t; t++) this.events[t].postInit(e - 1 > t && this.events[t + 1].is_else_block)
        }, s.prototype.updateDeepIncludes = function() {
            cr.clearArray(this.deep_includes), cr.clearArray(this.already_included_sheets), this.addDeepIncludes(this), cr.clearArray(this.already_included_sheets)
        }, s.prototype.addDeepIncludes = function(t) {
            var e, i, s, n, r = t.deep_includes,
                o = t.already_included_sheets,
                a = this.includes.valuesRef();
            for (e = 0, i = a.length; i > e; ++e) s = a[e], n = s.include_sheet, !s.isActive() || t === n || o.indexOf(n) > -1 || (o.push(n), n.addDeepIncludes(t), r.push(n))
        }, s.prototype.run = function(t) {
            this.runtime.resuming_breakpoint || (this.hasRun = !0, t || (this.runtime.isRunningEvents = !0));
            var e, i;
            for (e = 0, i = this.events.length; i > e; e++) {
                var s = this.events[e];
                s.run(), this.runtime.clearSol(s.solModifiers), this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
            }
            t || (this.runtime.isRunningEvents = !1)
        }, s.prototype.init_trigger = function(t, e) {
            t.orblock || this.runtime.triggers_to_postinit.push(t);
            var i, s, r, o = t.conditions[e];
            r = o.type ? o.type.name : "system";
            var a = o.fasttrigger,
                h = a ? this.fasttriggers : this.triggers;
            h[r] || (h[r] = []);
            var c = h[r],
                l = o.func;
            if (a) {
                if (!o.parameters.length) return;
                var u = o.parameters[0];
                if (1 !== u.type || 2 !== u.expression.type) return;
                var p, i, s, d = u.expression.value.toLowerCase();
                for (i = 0, s = c.length; s > i; i++)
                    if (c[i].method == l) return p = c[i].evs, void(p[d] ? p[d].push([t, e]) : p[d] = [
                        [t, e]
                    ]);
                p = {}, p[d] = [
                    [t, e]
                ], c.push({
                    method: l,
                    evs: p
                })
            } else {
                for (i = 0, s = c.length; s > i; i++)
                    if (c[i].method == l) return void c[i].evs.push([t, e]);
                n(l) ? c.unshift({
                    method: l,
                    evs: [
                        [t, e]
                    ]
                }) : c.push({
                    method: l,
                    evs: [
                        [t, e]
                    ]
                })
            }
        }, cr.eventsheet = s, r.prototype.hasObjects = function() {
            return this.select_all ? this.type.instances.length : this.instances.length
        }, r.prototype.getObjects = function() {
            return this.select_all ? this.type.instances : this.instances
        }, r.prototype.pick_one = function(t) {
            if (t)
                if (t.runtime.getCurrentEventStack().current_event.orblock) {
                    this.select_all && (cr.clearArray(this.instances), cr.shallowAssignArray(this.else_instances, t.type.instances), this.select_all = !1);
                    var e = this.else_instances.indexOf(t); - 1 !== e && (this.instances.push(this.else_instances[e]), this.else_instances.splice(e, 1))
                } else this.select_all = !1, cr.clearArray(this.instances), this.instances[0] = t
        }, cr.selection = r, window._c2hh_ = "45F21B0D387BFFBD5CB10598EDB7F2441F3DC4A4", o.prototype.postInit = function(t) {
            var e, s, n = this.parent;
            if (this.group)
                for (this.toplevelgroup = !0; n;) {
                    if (!n.group) {
                        this.toplevelgroup = !1;
                        break
                    }
                    n = n.parent
                }
            for (this.toplevelevent = !this.is_trigger() && (!this.parent || this.parent.group && this.parent.toplevelgroup), this.has_else_block = !!t, this.solModifiersIncludingParents = this.solModifiers.slice(0), n = this.parent; n;) {
                for (e = 0, s = n.solModifiers.length; s > e; e++) this.addParentSolModifier(n.solModifiers[e]);
                n = n.parent
            }
            this.solModifiers = i(this.solModifiers), this.solModifiersIncludingParents = i(this.solModifiersIncludingParents);
            var e, s;
            for (e = 0, s = this.conditions.length; s > e; e++) this.conditions[e].postInit();
            for (e = 0, s = this.actions.length; s > e; e++) this.actions[e].postInit();
            for (e = 0, s = this.subevents.length; s > e; e++) this.subevents[e].postInit(s - 1 > e && this.subevents[e + 1].is_else_block)
        }, o.prototype.setGroupActive = function(t) {
            if (this.group_active !== !!t) {
                this.group_active = !!t;
                var e, i;
                for (e = 0, i = this.contained_includes.length; i > e; ++e) this.contained_includes[e].updateActive();
                i > 0 && this.runtime.running_layout.event_sheet && this.runtime.running_layout.event_sheet.updateDeepIncludes()
            }
        }, o.prototype.addSolModifier = function(t) {
            a(t, this.solModifiers)
        }, o.prototype.addParentSolModifier = function(t) {
            a(t, this.solModifiersIncludingParents)
        }, o.prototype.setSolWriterAfterCnds = function() {
            this.solWriterAfterCnds = !0, this.parent && this.parent.setSolWriterAfterCnds()
        }, o.prototype.is_trigger = function() {
            return this.conditions.length ? this.conditions[0].trigger : !1
        }, o.prototype.run = function() {
            var t, e, i, s = !1,
                n = this.runtime,
                r = this.runtime.getCurrentEventStack();
            r.current_event = this;
            var o = this.conditions;
            if (this.is_else_block || (r.else_branch_ran = !1), this.orblock) {
                for (0 === o.length && (s = !0), r.cndindex = 0, t = o.length; r.cndindex < t; r.cndindex++) e = o[r.cndindex], e.trigger || (i = e.run(), i && (s = !0));
                r.last_event_true = s, s && this.run_actions_and_subevents()
            } else {
                for (r.cndindex = 0, t = o.length; r.cndindex < t; r.cndindex++)
                    if (i = o[r.cndindex].run(), !i) return r.last_event_true = !1, void(this.toplevelevent && n.hasPendingInstances && n.ClearDeathRow());
                r.last_event_true = !0, this.run_actions_and_subevents()
            }
            this.end_run(r)
        }, o.prototype.end_run = function(t) {
            t.last_event_true && this.has_else_block && (t.else_branch_ran = !0), this.toplevelevent && this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
        }, o.prototype.run_orblocktrigger = function(t) {
            var e = this.runtime.getCurrentEventStack();
            e.current_event = this, this.conditions[t].run() && (this.run_actions_and_subevents(), this.runtime.getCurrentEventStack().last_event_true = !0)
        }, o.prototype.run_actions_and_subevents = function() {
            var t, e = this.runtime.getCurrentEventStack();
            for (e.actindex = 0, t = this.actions.length; e.actindex < t; e.actindex++)
                if (this.actions[e.actindex].run()) return;
            this.run_subevents()
        }, o.prototype.resume_actions_and_subevents = function() {
            var t, e = this.runtime.getCurrentEventStack();
            for (t = this.actions.length; e.actindex < t; e.actindex++)
                if (this.actions[e.actindex].run()) return;
            this.run_subevents()
        }, o.prototype.run_subevents = function() {
            if (this.subevents.length) {
                var t, e, i, s, n = this.subevents.length - 1;
                if (this.runtime.pushEventStack(this), this.solWriterAfterCnds)
                    for (t = 0, e = this.subevents.length; e > t; t++) i = this.subevents[t], s = !this.toplevelgroup || !this.group && n > t, s && this.runtime.pushCopySol(i.solModifiers), i.run(), s ? this.runtime.popSol(i.solModifiers) : this.runtime.clearSol(i.solModifiers);
                else
                    for (t = 0, e = this.subevents.length; e > t; t++) this.subevents[t].run();
                this.runtime.popEventStack()
            }
        }, o.prototype.run_pretrigger = function() {
            var t = this.runtime.getCurrentEventStack();
            t.current_event = this;
            var e, i = !1;
            for (t.cndindex = 0, e = this.conditions.length; t.cndindex < e; t.cndindex++)
                if (this.conditions[t.cndindex].run()) i = !0;
                else if (!this.orblock) return !1;
            return this.orblock ? i : !0
        }, o.prototype.retrigger = function() {
            this.runtime.execcount++;
            var t, e = this.runtime.getCurrentEventStack().cndindex,
                i = this.runtime.pushEventStack(this);
            if (!this.orblock)
                for (i.cndindex = e + 1, t = this.conditions.length; i.cndindex < t; i.cndindex++)
                    if (!this.conditions[i.cndindex].run()) return this.runtime.popEventStack(), !1;
            return this.run_actions_and_subevents(), this.runtime.popEventStack(), !0
        }, o.prototype.isFirstConditionOfType = function(t) {
            var e = t.index;
            if (0 === e) return !0;
            for (--e; e >= 0; --e)
                if (this.conditions[e].type === t.type) return !1;
            return !0
        }, cr.eventblock = o, h.prototype.postInit = function() {
            var t, e, i;
            for (t = 0, e = this.parameters.length; e > t; t++) i = this.parameters[t], i.postInit(), i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
        }, h.prototype.run_true = function() {
            return !0
        }, h.prototype.run_system = function() {
            var t, e;
            for (t = 0, e = this.parameters.length; e > t; t++) this.results[t] = this.parameters[t].get();
            return cr.xor(this.func.apply(this.runtime.system, this.results), this.inverted)
        }, h.prototype.run_static = function() {
            var t, e;
            for (t = 0, e = this.parameters.length; e > t; t++) this.results[t] = this.parameters[t].get();
            var i = this.func.apply(this.behaviortype ? this.behaviortype : this.type, this.results);
            return this.type.applySolToContainer(), i
        }, h.prototype.run_object = function() {
            var t, e, i, s, n, r, o, a, h, c, l, u, p, d = this.type,
                f = d.getCurrentSol(),
                g = this.block.orblock && !this.trigger,
                y = 0,
                m = d.is_contained,
                _ = d.is_family,
                v = d.family_index,
                b = this.beh_index,
                w = b > -1,
                x = this.anyParamVariesPerInstance,
                S = this.parameters,
                T = this.results,
                O = this.inverted,
                A = this.func;
            if (x)
                for (e = 0, n = S.length; n > e; ++e) r = S[e], r.variesPerInstance || (T[e] = r.get(0));
            else
                for (e = 0, n = S.length; n > e; ++e) T[e] = S[e].get(0); if (f.select_all) {
                for (cr.clearArray(f.instances), cr.clearArray(f.else_instances), u = d.instances, t = 0, s = u.length; s > t; ++t) {
                    if (h = u[t], x)
                        for (e = 0, n = S.length; n > e; ++e) r = S[e], r.variesPerInstance && (T[e] = r.get(t));
                    w ? (y = 0, _ && (y = h.type.family_beh_map[v]), o = A.apply(h.behavior_insts[b + y], T)) : o = A.apply(h, T), a = cr.xor(o, O), a ? f.instances.push(h) : g && f.else_instances.push(h)
                }
                return d.finish && d.finish(!0), f.select_all = !1, d.applySolToContainer(), f.hasObjects()
            }
            i = 0;
            var C = g && !this.block.isFirstConditionOfType(this);
            u = C ? f.else_instances : f.instances;
            var k = !1;
            for (t = 0, s = u.length; s > t; ++t) {
                if (h = u[t], x)
                    for (e = 0, n = S.length; n > e; ++e) r = S[e], r.variesPerInstance && (T[e] = r.get(t));
                if (w ? (y = 0, _ && (y = h.type.family_beh_map[v]), o = A.apply(h.behavior_insts[b + y], T)) : o = A.apply(h, T), cr.xor(o, O))
                    if (k = !0, C) {
                        if (f.instances.push(h), m)
                            for (e = 0, n = h.siblings.length; n > e; e++) c = h.siblings[e], c.type.getCurrentSol().instances.push(c)
                    } else {
                        if (u[i] = h, m)
                            for (e = 0, n = h.siblings.length; n > e; e++) c = h.siblings[e], c.type.getCurrentSol().instances[i] = c;
                        i++
                    } else if (C) {
                    if (u[i] = h, m)
                        for (e = 0, n = h.siblings.length; n > e; e++) c = h.siblings[e], c.type.getCurrentSol().else_instances[i] = c;
                    i++
                } else if (g && (f.else_instances.push(h), m))
                    for (e = 0, n = h.siblings.length; n > e; e++) c = h.siblings[e], c.type.getCurrentSol().else_instances.push(c)
            }
            if (cr.truncateArray(u, i), m)
                for (p = d.container, t = 0, s = p.length; s > t; t++) l = p[t].getCurrentSol(), C ? cr.truncateArray(l.else_instances, i) : cr.truncateArray(l.instances, i);
            var E = k;
            if (C && !k)
                for (t = 0, s = f.instances.length; s > t; t++) {
                    if (h = f.instances[t], x)
                        for (e = 0, n = S.length; n > e; e++) r = S[e], r.variesPerInstance && (T[e] = r.get(t));
                    if (o = w ? A.apply(h.behavior_insts[b], T) : A.apply(h, T), cr.xor(o, O)) {
                        k = !0;
                        break
                    }
                }
            return d.finish && d.finish(E || g), g ? k : f.hasObjects()
        }, cr.condition = h, c.prototype.postInit = function() {
            var t, e, i;
            for (t = 0, e = this.parameters.length; e > t; t++) i = this.parameters[t], i.postInit(), i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
        }, c.prototype.run_system = function() {
            var t, e, i = this.runtime,
                s = this.parameters,
                n = this.results;
            for (t = 0, e = s.length; e > t; ++t) n[t] = s[t].get();
            return this.func.apply(i.system, n)
        }, c.prototype.run_object = function() {
            var t, e, i, s, n, r, o, a = this.type,
                h = this.beh_index,
                c = a.family_index,
                l = this.anyParamVariesPerInstance,
                u = this.parameters,
                p = this.results,
                d = this.func,
                f = a.getCurrentSol().getObjects(),
                g = a.is_family,
                y = h > -1;
            if (l)
                for (e = 0, s = u.length; s > e; ++e) n = u[e], n.variesPerInstance || (p[e] = n.get(0));
            else
                for (e = 0, s = u.length; s > e; ++e) p[e] = u[e].get(0);
            for (t = 0, i = f.length; i > t; ++t) {
                if (r = f[t], l)
                    for (e = 0, s = u.length; s > e; ++e) n = u[e], n.variesPerInstance && (p[e] = n.get(t));
                y ? (o = 0, g && (o = r.type.family_beh_map[c]), d.apply(r.behavior_insts[h + o], p)) : d.apply(r, p)
            }
            return !1
        }, cr.action = c;
        var m = [],
            _ = -1;
        p.prototype.postInit = function() {
            var t, e;
            if (11 === this.type) this.eventvar = this.runtime.getEventVariableByName(this.varname, this.block.parent);
            else if (13 === this.type)
                for (t = 0, e = this.subparams.length; e > t; t++) this.subparams[t].postInit();
            this.expression && this.expression.postInit()
        }, p.prototype.maybeVaryForType = function(t) {
            return !this.variesPerInstance && t ? t.plugin.singleglobal ? void 0 : void(this.variesPerInstance = !0) : void 0
        }, p.prototype.setVaries = function() {
            this.variesPerInstance = !0
        }, p.prototype.get_exp = function(t) {
            this.solindex = t || 0;
            var e = l();
            return this.expression.get(e), u(), e.data
        }, p.prototype.get_exp_str = function(t) {
            this.solindex = t || 0;
            var e = l();
            return this.expression.get(e), u(), cr.is_string(e.data) ? e.data : ""
        }, p.prototype.get_object = function() {
            return this.object
        }, p.prototype.get_combosel = function() {
            return this.combosel
        }, p.prototype.get_layer = function(t) {
            this.solindex = t || 0;
            var e = l();
            return this.expression.get(e), u(), e.is_number() ? this.runtime.getLayerByNumber(e.data) : this.runtime.getLayerByName(e.data)
        }, p.prototype.get_layout = function() {
            return this.layout
        }, p.prototype.get_key = function() {
            return this.key
        }, p.prototype.get_instvar = function() {
            return this.index
        }, p.prototype.get_familyvar = function(t) {
            var e = t || 0,
                i = this.owner.type,
                s = null,
                n = i.getCurrentSol(),
                r = n.getObjects();
            if (r.length) s = r[e % r.length].type;
            else if (n.else_instances.length) s = n.else_instances[e % n.else_instances.length].type;
            else {
                if (!i.instances.length) return 0;
                s = i.instances[e % i.instances.length].type
            }
            return this.index + s.family_var_map[i.family_index]
        }, p.prototype.get_eventvar = function() {
            return this.eventvar
        }, p.prototype.get_audiofile = function() {
            return this.fileinfo
        }, p.prototype.get_variadic = function() {
            var t, e;
            for (t = 0, e = this.subparams.length; e > t; t++) this.variadicret[t] = this.subparams[t].get();
            return this.variadicret
        }, cr.parameter = p, d.prototype.postInit = function() {
            this.solModifiers = i(this.solModifiers)
        }, d.prototype.setValue = function(t) {
            var e = this.runtime.getCurrentLocalVarStack();
            this.parent && !this.is_static && e ? (this.localIndex >= e.length && (e.length = this.localIndex + 1), e[this.localIndex] = t) : this.data = t
        }, d.prototype.getValue = function() {
            var t = this.runtime.getCurrentLocalVarStack();
            return !this.parent || this.is_static || !t || this.is_constant ? this.data : this.localIndex >= t.length ? this.initial : "undefined" == typeof t[this.localIndex] ? this.initial : t[this.localIndex]
        }, d.prototype.run = function() {
            !this.parent || this.is_static || this.is_constant || this.setValue(this.initial)
        }, cr.eventvariable = d, f.prototype.toString = function() {
            return "include:" + this.include_sheet.toString()
        }, f.prototype.postInit = function() {
            this.include_sheet = this.runtime.eventsheets[this.include_sheet_name], this.sheet.includes.add(this), this.solModifiers = i(this.solModifiers);
            for (var t = this.parent; t;) t.group && t.contained_includes.push(this), t = t.parent;
            this.updateActive()
        }, f.prototype.run = function() {
            this.parent && this.runtime.pushCleanSol(this.runtime.types_by_index), this.include_sheet.hasRun || this.include_sheet.run(!0), this.parent && this.runtime.popSol(this.runtime.types_by_index)
        }, f.prototype.updateActive = function() {
            for (var t = this.parent; t;) {
                if (t.group && !t.group_active) return void(this.active = !1);
                t = t.parent
            }
            this.active = !0
        }, f.prototype.isActive = function() {
            return this.active
        }, cr.eventinclude = f, g.prototype.reset = function(t) {
            this.current_event = t, this.cndindex = 0, this.actindex = 0, cr.clearArray(this.temp_parents_arr), this.last_event_true = !1, this.else_branch_ran = !1, this.any_true_state = !1
        }, g.prototype.isModifierAfterCnds = function() {
            return this.current_event.solWriterAfterCnds ? !0 : this.cndindex < this.current_event.conditions.length - 1 ? !!this.current_event.solModifiers.length : !1
        }, cr.eventStackFrame = g
    }(),
    function() {
        function t(t, e) {
            this.owner = t, this.runtime = t.runtime, this.type = e[0], this.get = [this.eval_int, this.eval_float, this.eval_string, this.eval_unaryminus, this.eval_add, this.eval_subtract, this.eval_multiply, this.eval_divide, this.eval_mod, this.eval_power, this.eval_and, this.eval_or, this.eval_equal, this.eval_notequal, this.eval_less, this.eval_lessequal, this.eval_greater, this.eval_greaterequal, this.eval_conditional, this.eval_system_exp, this.eval_object_exp, this.eval_instvar_exp, this.eval_behavior_exp, this.eval_eventvar_exp][this.type];
            var i = null;
            switch (this.value = null, this.first = null, this.second = null, this.third = null, this.func = null, this.results = null, this.parameters = null, this.object_type = null, this.beh_index = -1, this.instance_expr = null, this.varindex = -1, this.behavior_type = null, this.varname = null, this.eventvar = null, this.return_string = !1, this.type) {
                case 0:
                case 1:
                case 2:
                    this.value = e[1];
                    break;
                case 3:
                    this.first = new cr.expNode(t, e[1]);
                    break;
                case 18:
                    this.first = new cr.expNode(t, e[1]), this.second = new cr.expNode(t, e[2]), this.third = new cr.expNode(t, e[3]);
                    break;
                case 19:
                    this.func = this.runtime.GetObjectReference(e[1]), (this.func === cr.system_object.prototype.exps.random || this.func === cr.system_object.prototype.exps.choose) && this.owner.setVaries(), this.results = [], this.parameters = [], 3 === e.length ? (i = e[2], this.results.length = i.length + 1) : this.results.length = 1;
                    break;
                case 20:
                    this.object_type = this.runtime.types_by_index[e[1]], this.beh_index = -1, this.func = this.runtime.GetObjectReference(e[2]), this.return_string = e[3], cr.plugins_.Function && this.func === cr.plugins_.Function.prototype.exps.Call && this.owner.setVaries(), e[4] ? this.instance_expr = new cr.expNode(t, e[4]) : this.instance_expr = null, this.results = [], this.parameters = [], 6 === e.length ? (i = e[5], this.results.length = i.length + 1) : this.results.length = 1;
                    break;
                case 21:
                    this.object_type = this.runtime.types_by_index[e[1]], this.return_string = e[2], e[3] ? this.instance_expr = new cr.expNode(t, e[3]) : this.instance_expr = null, this.varindex = e[4];
                    break;
                case 22:
                    this.object_type = this.runtime.types_by_index[e[1]], this.behavior_type = this.object_type.getBehaviorByName(e[2]), this.beh_index = this.object_type.getBehaviorIndexByName(e[2]), this.func = this.runtime.GetObjectReference(e[3]), this.return_string = e[4], e[5] ? this.instance_expr = new cr.expNode(t, e[5]) : this.instance_expr = null, this.results = [], this.parameters = [], 7 === e.length ? (i = e[6], this.results.length = i.length + 1) : this.results.length = 1;
                    break;
                case 23:
                    this.varname = e[1], this.eventvar = null
            }
            if (this.owner.maybeVaryForType(this.object_type), this.type >= 4 && this.type <= 17 && (this.first = new cr.expNode(t, e[1]), this.second = new cr.expNode(t, e[2])), i) {
                var s, n;
                for (s = 0, n = i.length; n > s; s++) this.parameters.push(new cr.expNode(t, i[s]))
            }
            cr.seal(this)
        }

        function e() {
            return ++o, r.length === o && r.push(new cr.expvalue), r[o]
        }

        function i() {
            --o
        }

        function s(t, e, i) {
            var s, n;
            for (s = 0, n = t.length; n > s; ++s) t[s].get(i), e[s + 1] = i.data
        }

        function n(t, e) {
            this.type = t || cr.exptype.Integer, this.data = e || 0, this.object_class = null, this.type == cr.exptype.Integer && (this.data = Math.floor(this.data)), cr.seal(this)
        }
        t.prototype.postInit = function() {
            if (23 === this.type && (this.eventvar = this.owner.runtime.getEventVariableByName(this.varname, this.owner.block.parent)), this.first && this.first.postInit(), this.second && this.second.postInit(), this.third && this.third.postInit(), this.instance_expr && this.instance_expr.postInit(), this.parameters) {
                var t, e;
                for (t = 0, e = this.parameters.length; e > t; t++) this.parameters[t].postInit()
            }
        };
        var r = [],
            o = -1;
        t.prototype.eval_system_exp = function(t) {
            var n = this.parameters,
                r = this.results;
            r[0] = t;
            var o = e();
            s(n, r, o), i(), this.func.apply(this.runtime.system, r)
        }, t.prototype.eval_object_exp = function(t) {
            var n = this.object_type,
                r = this.results,
                o = this.parameters,
                a = this.instance_expr,
                h = this.func,
                c = this.owner.solindex,
                l = n.getCurrentSol(),
                u = l.getObjects();
            if (!u.length) {
                if (!l.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                u = l.else_instances
            }
            r[0] = t, t.object_class = n;
            var p = e();
            s(o, r, p), a && (a.get(p), p.is_number() && (c = p.data, u = n.instances)), i();
            var d = u.length;
            (c >= d || -d >= c) && (c %= d), 0 > c && (c += d);
            h.apply(u[c], r)
        }, t.prototype.eval_behavior_exp = function(t) {
            var n = this.object_type,
                r = this.results,
                o = this.parameters,
                a = this.instance_expr,
                h = this.beh_index,
                c = this.func,
                l = this.owner.solindex,
                u = n.getCurrentSol(),
                p = u.getObjects();
            if (!p.length) {
                if (!u.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                p = u.else_instances
            }
            r[0] = t, t.object_class = n;
            var d = e();
            s(o, r, d), a && (a.get(d), d.is_number() && (l = d.data, p = n.instances)), i();
            var f = p.length;
            (l >= f || -f >= l) && (l %= f), 0 > l && (l += f);
            var g = p[l],
                y = 0;
            n.is_family && (y = g.type.family_beh_map[n.family_index]);
            c.apply(g.behavior_insts[h + y], r)
        }, t.prototype.eval_instvar_exp = function(t) {
            var s, n = this.instance_expr,
                r = this.object_type,
                o = this.varindex,
                a = this.owner.solindex,
                h = r.getCurrentSol(),
                c = h.getObjects();
            if (!c.length) {
                if (!h.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                c = h.else_instances
            }
            if (n) {
                var l = e();
                if (n.get(l), l.is_number()) {
                    a = l.data;
                    var u = r.instances;
                    0 !== u.length && (a %= u.length, 0 > a && (a += u.length)), s = r.getInstanceByIID(a);
                    var p = s.instance_vars[o];
                    return cr.is_string(p) ? t.set_string(p) : t.set_float(p), void i()
                }
                i()
            }
            var d = c.length;
            (a >= d || -d >= a) && (a %= d), 0 > a && (a += d), s = c[a];
            var f = 0;
            r.is_family && (f = s.type.family_var_map[r.family_index]);
            var p = s.instance_vars[o + f];
            cr.is_string(p) ? t.set_string(p) : t.set_float(p)
        }, t.prototype.eval_int = function(t) {
            t.type = cr.exptype.Integer, t.data = this.value
        }, t.prototype.eval_float = function(t) {
            t.type = cr.exptype.Float, t.data = this.value
        }, t.prototype.eval_string = function(t) {
            t.type = cr.exptype.String, t.data = this.value
        }, t.prototype.eval_unaryminus = function(t) {
            this.first.get(t), t.is_number() && (t.data = -t.data)
        }, t.prototype.eval_add = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.is_number() && s.is_number() && (t.data += s.data, s.is_float() && t.make_float()), i()
        }, t.prototype.eval_subtract = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.is_number() && s.is_number() && (t.data -= s.data, s.is_float() && t.make_float()), i()
        }, t.prototype.eval_multiply = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.is_number() && s.is_number() && (t.data *= s.data, s.is_float() && t.make_float()), i()
        }, t.prototype.eval_divide = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.is_number() && s.is_number() && (t.data /= s.data, t.make_float()), i()
        }, t.prototype.eval_mod = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.is_number() && s.is_number() && (t.data %= s.data, s.is_float() && t.make_float()), i()
        }, t.prototype.eval_power = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.is_number() && s.is_number() && (t.data = Math.pow(t.data, s.data), s.is_float() && t.make_float()), i()
        }, t.prototype.eval_and = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), s.is_string() || t.is_string() ? this.eval_and_stringconcat(t, s) : this.eval_and_logical(t, s), i()
        }, t.prototype.eval_and_stringconcat = function(t, e) {
            t.is_string() && e.is_string() ? this.eval_and_stringconcat_str_str(t, e) : this.eval_and_stringconcat_num(t, e)
        }, t.prototype.eval_and_stringconcat_str_str = function(t, e) {
            t.data += e.data
        }, t.prototype.eval_and_stringconcat_num = function(t, e) {
            t.is_string() ? t.data += (Math.round(1e10 * e.data) / 1e10).toString() : t.set_string(t.data.toString() + e.data)
        }, t.prototype.eval_and_logical = function(t, e) {
            t.set_int(t.data && e.data ? 1 : 0)
        }, t.prototype.eval_or = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.is_number() && s.is_number() && (t.data || s.data ? t.set_int(1) : t.set_int(0)), i()
        }, t.prototype.eval_conditional = function(t) {
            this.first.get(t), t.data ? this.second.get(t) : this.third.get(t)
        }, t.prototype.eval_equal = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.set_int(t.data === s.data ? 1 : 0), i()
        }, t.prototype.eval_notequal = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.set_int(t.data !== s.data ? 1 : 0), i()
        }, t.prototype.eval_less = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.set_int(t.data < s.data ? 1 : 0), i()
        }, t.prototype.eval_lessequal = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.set_int(t.data <= s.data ? 1 : 0), i()
        }, t.prototype.eval_greater = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.set_int(t.data > s.data ? 1 : 0), i()
        }, t.prototype.eval_greaterequal = function(t) {
            this.first.get(t);
            var s = e();
            this.second.get(s), t.set_int(t.data >= s.data ? 1 : 0), i()
        }, t.prototype.eval_eventvar_exp = function(t) {
            var e = this.eventvar.getValue();
            cr.is_number(e) ? t.set_float(e) : t.set_string(e)
        }, cr.expNode = t, n.prototype.is_int = function() {
            return this.type === cr.exptype.Integer
        }, n.prototype.is_float = function() {
            return this.type === cr.exptype.Float
        }, n.prototype.is_number = function() {
            return this.type === cr.exptype.Integer || this.type === cr.exptype.Float
        }, n.prototype.is_string = function() {
            return this.type === cr.exptype.String
        }, n.prototype.make_int = function() {
            this.is_int() || (this.is_float() ? this.data = Math.floor(this.data) : this.is_string() && (this.data = parseInt(this.data, 10)), this.type = cr.exptype.Integer)
        }, n.prototype.make_float = function() {
            this.is_float() || (this.is_string() && (this.data = parseFloat(this.data)), this.type = cr.exptype.Float)
        }, n.prototype.make_string = function() {
            this.is_string() || (this.data = this.data.toString(), this.type = cr.exptype.String)
        }, n.prototype.set_int = function(t) {
            this.type = cr.exptype.Integer, this.data = Math.floor(t)
        }, n.prototype.set_float = function(t) {
            this.type = cr.exptype.Float, this.data = t
        }, n.prototype.set_string = function(t) {
            this.type = cr.exptype.String, this.data = t
        }, n.prototype.set_any = function(t) {
            cr.is_number(t) ? (this.type = cr.exptype.Float, this.data = t) : cr.is_string(t) ? (this.type = cr.exptype.String, this.data = t.toString()) : (this.type = cr.exptype.Integer, this.data = 0)
        }, cr.expvalue = n, cr.exptype = {
            Integer: 0,
            Float: 1,
            String: 2
        }
    }(), cr.system_object = function(t) {
        this.runtime = t, this.waits = []
    }, cr.system_object.prototype.saveToJSON = function() {
        var t, e, i, s, n, r, o, a, h = {};
        h.waits = [];
        var c, l = h.waits;
        for (t = 0, e = this.waits.length; e > t; t++) {
            for (r = this.waits[t], c = {
                t: r.time,
                st: r.signaltag,
                s: r.signalled,
                ev: r.ev.sid,
                sm: [],
                sols: {}
            }, r.ev.actions[r.actindex] && (c.act = r.ev.actions[r.actindex].sid), i = 0, s = r.solModifiers.length; s > i; i++) c.sm.push(r.solModifiers[i].sid);
            for (n in r.sols)
                if (r.sols.hasOwnProperty(n)) {
                    for (o = this.runtime.types_by_index[parseInt(n, 10)], a = {
                        sa: r.sols[n].sa,
                        insts: []
                    }, i = 0, s = r.sols[n].insts.length; s > i; i++) a.insts.push(r.sols[n].insts[i].uid);
                    c.sols[o.sid.toString()] = a
                }
            l.push(c)
        }
        return h
    }, cr.system_object.prototype.loadFromJSON = function(t) {
        var e, i, s, n, r, o, a, h, c, l, u, p, d, f = t.waits;
        for (cr.clearArray(this.waits), e = 0, i = f.length; i > e; e++)
            if (o = f[e], h = this.runtime.blocksBySid[o.ev.toString()]) {
                for (c = -1, s = 0, n = h.actions.length; n > s; s++)
                    if (h.actions[s].sid === o.act) {
                        c = s;
                        break
                    }
                if (-1 !== c) {
                    for (a = {}, a.sols = {}, a.solModifiers = [], a.deleteme = !1, a.time = o.t, a.signaltag = o.st || "", a.signalled = !!o.s, a.ev = h, a.actindex = c, s = 0, n = o.sm.length; n > s; s++) l = this.runtime.getObjectTypeBySid(o.sm[s]), l && a.solModifiers.push(l);
                    for (r in o.sols)
                        if (o.sols.hasOwnProperty(r)) {
                            if (l = this.runtime.getObjectTypeBySid(parseInt(r, 10)), !l) continue;
                            for (u = o.sols[r], p = {
                                sa: u.sa,
                                insts: []
                            }, s = 0, n = u.insts.length; n > s; s++) d = this.runtime.getObjectByUID(u.insts[s]), d && p.insts.push(d);
                            a.sols[l.index.toString()] = p
                        }
                    this.waits.push(a)
                }
            }
    },
    function() {
        function t() {}

        function e(t, e) {
            var i = t.extra.c2_feo_val,
                s = e.extra.c2_feo_val;
            return cr.is_number(i) && cr.is_number(s) ? i - s : (i = "" + i, s = "" + s, s > i ? -1 : i > s ? 1 : 0)
        }

        function i(t, e) {
            return g && t === y && e === m || (g = new RegExp(t, e), y = t, m = e), g.lastIndex = 0, g
        }

        function s() {}

        function n() {
            var t;
            return v.length ? t = v.pop() : (t = {}, t.sols = {}, t.solModifiers = []), t.deleteme = !1, t
        }

        function r(t) {
            cr.wipe(t.sols), cr.clearArray(t.solModifiers), v.push(t)
        }

        function o() {
            var t;
            return b.length ? t = b.pop() : (t = {}, t.insts = []), t.sa = !1, t
        }

        function a(t) {
            cr.clearArray(t.insts), b.push(t)
        }

        function h(t, e) {
            var i = t[0],
                s = e[0],
                n = i - s;
            if (0 !== n) return n;
            var r = t[1],
                o = e[1];
            return r - o
        }

        function c(t, e) {
            return t[1] - e[1]
        }

        function l() {}

        function u(t, e, s) {
            if (t !== x || e !== S || s !== T) {
                var n = i(e, s);
                w = t.match(n), x = t, S = e, T = s
            }
        }
        var p = cr.system_object.prototype;
        t.prototype.EveryTick = function() {
            return !0
        }, t.prototype.OnLayoutStart = function() {
            return !0
        }, t.prototype.OnLayoutEnd = function() {
            return !0
        }, t.prototype.Compare = function(t, e, i) {
            return cr.do_cmp(t, e, i)
        }, t.prototype.CompareTime = function(t, e) {
            var i = this.runtime.kahanTime.sum;
            if (0 === t) {
                var s = this.runtime.getCurrentCondition();
                return !s.extra.CompareTime_executed && i >= e ? (s.extra.CompareTime_executed = !0, !0) : !1
            }
            return cr.do_cmp(i, t, e)
        }, t.prototype.LayerVisible = function(t) {
            return t ? t.visible : !1
        }, t.prototype.LayerEmpty = function(t) {
            return t ? !t.instances.length : !1
        }, t.prototype.LayerCmpOpacity = function(t, e, i) {
            return t ? cr.do_cmp(100 * t.opacity, e, i) : !1
        }, t.prototype.Repeat = function(t) {
            var e, i = this.runtime.getCurrentEventStack(),
                s = i.current_event,
                n = i.isModifierAfterCnds(),
                r = this.runtime.pushLoopStack();
            if (n)
                for (e = 0; t > e && !r.stopped; e++) this.runtime.pushCopySol(s.solModifiers), r.index = e, s.retrigger(), this.runtime.popSol(s.solModifiers);
            else
                for (e = 0; t > e && !r.stopped; e++) r.index = e, s.retrigger();
            return this.runtime.popLoopStack(), !1
        }, t.prototype.While = function(t) {
            var e, i = this.runtime.getCurrentEventStack(),
                s = i.current_event,
                n = i.isModifierAfterCnds(),
                r = this.runtime.pushLoopStack();
            if (n)
                for (e = 0; !r.stopped; e++) this.runtime.pushCopySol(s.solModifiers), r.index = e, s.retrigger() || (r.stopped = !0), this.runtime.popSol(s.solModifiers);
            else
                for (e = 0; !r.stopped; e++) r.index = e, s.retrigger() || (r.stopped = !0);
            return this.runtime.popLoopStack(), !1
        }, t.prototype.For = function(t, e, i) {
            var s, n = this.runtime.getCurrentEventStack(),
                r = n.current_event,
                o = n.isModifierAfterCnds(),
                a = this.runtime.pushLoopStack(t);
            if (e > i)
                if (o)
                    for (s = e; s >= i && !a.stopped; --s) this.runtime.pushCopySol(r.solModifiers), a.index = s, r.retrigger(), this.runtime.popSol(r.solModifiers);
                else
                    for (s = e; s >= i && !a.stopped; --s) a.index = s, r.retrigger();
            else if (o)
                for (s = e; i >= s && !a.stopped; ++s) this.runtime.pushCopySol(r.solModifiers), a.index = s, r.retrigger(), this.runtime.popSol(r.solModifiers);
            else
                for (s = e; i >= s && !a.stopped; ++s) a.index = s, r.retrigger();
            return this.runtime.popLoopStack(), !1
        };
        var d = [],
            f = -1;
        t.prototype.ForEach = function(t) {
            var e = t.getCurrentSol();
            f++, d.length === f && d.push([]);
            var i = d[f];
            cr.shallowAssignArray(i, e.getObjects());
            var s, n, r, o, a, h, c, l = this.runtime.getCurrentEventStack(),
                u = l.current_event,
                p = l.isModifierAfterCnds(),
                g = this.runtime.pushLoopStack(),
                y = t.is_contained;
            if (p)
                for (s = 0, n = i.length; n > s && !g.stopped; s++) {
                    if (this.runtime.pushCopySol(u.solModifiers), a = i[s], e = t.getCurrentSol(), e.select_all = !1, cr.clearArray(e.instances), e.instances[0] = a, y)
                        for (r = 0, o = a.siblings.length; o > r; r++) h = a.siblings[r], c = h.type.getCurrentSol(), c.select_all = !1, cr.clearArray(c.instances), c.instances[0] = h;
                    g.index = s, u.retrigger(), this.runtime.popSol(u.solModifiers)
                } else
                    for (e.select_all = !1, cr.clearArray(e.instances), s = 0, n = i.length; n > s && !g.stopped; s++) {
                        if (a = i[s], e.instances[0] = a, y)
                            for (r = 0, o = a.siblings.length; o > r; r++) h = a.siblings[r], c = h.type.getCurrentSol(), c.select_all = !1, cr.clearArray(c.instances), c.instances[0] = h;
                        g.index = s, u.retrigger()
                    }
            return cr.clearArray(i), this.runtime.popLoopStack(), f--, !1
        }, t.prototype.ForEachOrdered = function(t, i, s) {
            var n = t.getCurrentSol();
            f++, d.length === f && d.push([]);
            var r = d[f];
            cr.shallowAssignArray(r, n.getObjects());
            var o, a, h, c, l, u, p, g = this.runtime.getCurrentEventStack(),
                y = g.current_event,
                m = this.runtime.getCurrentCondition(),
                _ = g.isModifierAfterCnds(),
                v = this.runtime.pushLoopStack();
            for (o = 0, a = r.length; a > o; o++) r[o].extra.c2_feo_val = m.parameters[1].get(o);
            r.sort(e), 1 === s && r.reverse();
            var b = t.is_contained;
            if (_)
                for (o = 0, a = r.length; a > o && !v.stopped; o++) {
                    if (this.runtime.pushCopySol(y.solModifiers), l = r[o], n = t.getCurrentSol(), n.select_all = !1, cr.clearArray(n.instances), n.instances[0] = l, b)
                        for (h = 0, c = l.siblings.length; c > h; h++) u = l.siblings[h], p = u.type.getCurrentSol(), p.select_all = !1, cr.clearArray(p.instances), p.instances[0] = u;
                    v.index = o, y.retrigger(), this.runtime.popSol(y.solModifiers)
                } else
                    for (n.select_all = !1, cr.clearArray(n.instances), o = 0, a = r.length; a > o && !v.stopped; o++) {
                        if (l = r[o], n.instances[0] = l, b)
                            for (h = 0, c = l.siblings.length; c > h; h++) u = l.siblings[h], p = u.type.getCurrentSol(), p.select_all = !1, cr.clearArray(p.instances), p.instances[0] = u;
                        v.index = o, y.retrigger()
                    }
            return cr.clearArray(r), this.runtime.popLoopStack(), f--, !1
        }, t.prototype.PickByComparison = function(t, e, i, s) {
            var n, r, o, a;
            if (t) {
                f++, d.length === f && d.push([]);
                var h = d[f],
                    c = t.getCurrentSol();
                cr.shallowAssignArray(h, c.getObjects()), c.select_all && cr.clearArray(c.else_instances);
                var l = this.runtime.getCurrentCondition();
                for (n = 0, o = 0, r = h.length; r > n; n++) a = h[n], h[o] = a, e = l.parameters[1].get(n), s = l.parameters[3].get(n), cr.do_cmp(e, i, s) ? o++ : c.else_instances.push(a);
                return cr.truncateArray(h, o), c.select_all = !1, cr.shallowAssignArray(c.instances, h), cr.clearArray(h), f--, t.applySolToContainer(), !!c.instances.length
            }
        }, t.prototype.PickByEvaluate = function(t, e) {
            var i, s, n, r;
            if (t) {
                f++, d.length === f && d.push([]);
                var o = d[f],
                    a = t.getCurrentSol();
                cr.shallowAssignArray(o, a.getObjects()), a.select_all && cr.clearArray(a.else_instances);
                var h = this.runtime.getCurrentCondition();
                for (i = 0, n = 0, s = o.length; s > i; i++) r = o[i], o[n] = r, e = h.parameters[1].get(i), e ? n++ : a.else_instances.push(r);
                return cr.truncateArray(o, n), a.select_all = !1, cr.shallowAssignArray(a.instances, o), cr.clearArray(o), f--, t.applySolToContainer(), !!a.instances.length
            }
        }, t.prototype.TriggerOnce = function() {
            var t = this.runtime.getCurrentCondition().extra;
            "undefined" == typeof t.TriggerOnce_lastTick && (t.TriggerOnce_lastTick = -1);
            var e = t.TriggerOnce_lastTick,
                i = this.runtime.tickcount;
            return t.TriggerOnce_lastTick = i, this.runtime.layout_first_tick || e !== i - 1
        }, t.prototype.Every = function(t) {
            var e = this.runtime.getCurrentCondition(),
                i = e.extra.Every_lastTime || 0,
                s = this.runtime.kahanTime.sum;
            "undefined" == typeof e.extra.Every_seconds && (e.extra.Every_seconds = t);
            var n = e.extra.Every_seconds;
            return s >= i + n ? (e.extra.Every_lastTime = i + n, s >= e.extra.Every_lastTime + .04 && (e.extra.Every_lastTime = s), e.extra.Every_seconds = t, !0) : (i - .1 > s && (e.extra.Every_lastTime = s), !1)
        }, t.prototype.PickNth = function(t, e) {
            if (!t) return !1;
            var i = t.getCurrentSol(),
                s = i.getObjects();
            if (e = cr.floor(e), 0 > e || e >= s.length) return !1;
            var n = s[e];
            return i.pick_one(n), t.applySolToContainer(), !0
        }, t.prototype.PickRandom = function(t) {
            if (!t) return !1;
            var e = t.getCurrentSol(),
                i = e.getObjects(),
                s = cr.floor(Math.random() * i.length);
            if (s >= i.length) return !1;
            var n = i[s];
            return e.pick_one(n), t.applySolToContainer(), !0
        }, t.prototype.CompareVar = function(t, e, i) {
            return cr.do_cmp(t.getValue(), e, i)
        }, t.prototype.IsGroupActive = function(t) {
            var e = this.runtime.groups_by_name[t.toLowerCase()];
            return e && e.group_active
        }, t.prototype.IsPreview = function() {
            return "undefined" != typeof cr_is_preview
        }, t.prototype.PickAll = function(t) {
            if (!t) return !1;
            if (!t.instances.length) return !1;
            var e = t.getCurrentSol();
            return e.select_all = !0, t.applySolToContainer(), !0
        }, t.prototype.IsMobile = function() {
            return this.runtime.isMobile
        }, t.prototype.CompareBetween = function(t, e, i) {
            return t >= e && i >= t
        }, t.prototype.Else = function() {
            var t = this.runtime.getCurrentEventStack();
            return t.else_branch_ran ? !1 : !t.last_event_true
        }, t.prototype.OnLoadFinished = function() {
            return !0
        }, t.prototype.OnCanvasSnapshot = function() {
            return !0
        }, t.prototype.EffectsSupported = function() {
            return !!this.runtime.glwrap
        }, t.prototype.OnSaveComplete = function() {
            return !0
        }, t.prototype.OnSaveFailed = function() {
            return !0
        }, t.prototype.OnLoadComplete = function() {
            return !0
        }, t.prototype.OnLoadFailed = function() {
            return !0
        }, t.prototype.ObjectUIDExists = function(t) {
            return !!this.runtime.getObjectByUID(t)
        }, t.prototype.IsOnPlatform = function(t) {
            var e = this.runtime;
            switch (t) {
                case 0:
                    return !(e.isDomFree || e.isNodeWebkit || e.isCordova || e.isWinJS || e.isWindowsPhone8 || e.isBlackberry10 || e.isAmazonWebApp);
                case 1:
                    return e.isiOS;
                case 2:
                    return e.isAndroid;
                case 3:
                    return e.isWindows8App;
                case 4:
                    return e.isWindowsPhone8;
                case 5:
                    return e.isBlackberry10;
                case 6:
                    return e.isTizen;
                case 7:
                    return e.isCocoonJs;
                case 8:
                    return e.isCordova;
                case 9:
                    return e.isArcade;
                case 10:
                    return e.isNodeWebkit;
                case 11:
                    return e.isCrosswalk;
                case 12:
                    return e.isAmazonWebApp;
                case 13:
                    return e.isWindows10;
                default:
                    return !1
            }
        };
        var g = null,
            y = "",
            m = "";
        t.prototype.RegexTest = function(t, e, s) {
            var n = i(e, s);
            return n.test(t)
        };
        var _ = [];
        t.prototype.PickOverlappingPoint = function(t, e, i) {
            if (!t) return !1;
            var s, n, r, o, a = t.getCurrentSol(),
                h = a.getObjects(),
                c = this.runtime.getCurrentEventStack().current_event,
                l = c.orblock,
                u = this.runtime.getCurrentCondition();
            for (a.select_all ? (cr.shallowAssignArray(_, h), cr.clearArray(a.else_instances), a.select_all = !1, cr.clearArray(a.instances)) : l ? (cr.shallowAssignArray(_, a.else_instances), cr.clearArray(a.else_instances)) : (cr.shallowAssignArray(_, h), cr.clearArray(a.instances)), s = 0, n = _.length; n > s; ++s) r = _[s], r.update_bbox(), o = cr.xor(r.contains_pt(e, i), u.inverted), o ? a.instances.push(r) : a.else_instances.push(r);
            return t.applySolToContainer(), cr.xor(!!a.instances.length, u.inverted)
        }, t.prototype.IsNaN = function(t) {
            return !!isNaN(t)
        }, t.prototype.AngleWithin = function(t, e, i) {
            return cr.angleDiff(cr.to_radians(t), cr.to_radians(i)) <= cr.to_radians(e)
        }, t.prototype.IsClockwiseFrom = function(t, e) {
            return cr.angleClockwise(cr.to_radians(t), cr.to_radians(e))
        }, t.prototype.IsBetweenAngles = function(t, e, i) {
            var s = cr.to_clamped_radians(t),
                n = cr.to_clamped_radians(e),
                r = cr.to_clamped_radians(i),
                o = !cr.angleClockwise(r, n);
            return o ? !(!cr.angleClockwise(s, n) && cr.angleClockwise(s, r)) : cr.angleClockwise(s, n) && !cr.angleClockwise(s, r)
        }, t.prototype.IsValueType = function(t, e) {
            return "number" == typeof t ? 0 === e : 1 === e
        }, p.cnds = new t, s.prototype.GoToLayout = function(t) {
            this.runtime.isloading || this.runtime.changelayout || (this.runtime.changelayout = t)
        }, s.prototype.NextPrevLayout = function(t) {
            if (!this.runtime.isloading && !this.runtime.changelayout) {
                var e = this.runtime.layouts_by_index.indexOf(this.runtime.running_layout);
                if ((!t || 0 !== e) && (t || e !== this.runtime.layouts_by_index.length - 1)) {
                    var i = this.runtime.layouts_by_index[e + (t ? -1 : 1)];
                    this.runtime.changelayout = i
                }
            }
        }, s.prototype.CreateObject = function(t, e, i, s) {
            if (e && t) {
                var n = this.runtime.createInstance(t, e, i, s);
                if (n) {
                    this.runtime.isInOnDestroy++;
                    var r, o, a;
                    if (this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, n), n.is_contained)
                        for (r = 0, o = n.siblings.length; o > r; r++) a = n.siblings[r], this.runtime.trigger(Object.getPrototypeOf(a.type.plugin).cnds.OnCreated, a);
                    this.runtime.isInOnDestroy--;
                    var h = t.getCurrentSol();
                    if (h.select_all = !1, cr.clearArray(h.instances), h.instances[0] = n, n.is_contained)
                        for (r = 0, o = n.siblings.length; o > r; r++) a = n.siblings[r], h = a.type.getCurrentSol(), h.select_all = !1, cr.clearArray(h.instances), h.instances[0] = a
                }
            }
        }, s.prototype.SetLayerVisible = function(t, e) {
            t && t.visible !== e && (t.visible = e, this.runtime.redraw = !0)
        }, s.prototype.SetLayerOpacity = function(t, e) {
            t && (e = cr.clamp(e / 100, 0, 1), t.opacity !== e && (t.opacity = e, this.runtime.redraw = !0))
        }, s.prototype.SetLayerScaleRate = function(t, e) {
            t && t.zoomRate !== e && (t.zoomRate = e, this.runtime.redraw = !0)
        }, s.prototype.SetLayerForceOwnTexture = function(t, e) {
            t && (e = !!e, t.forceOwnTexture !== e && (t.forceOwnTexture = e, this.runtime.redraw = !0))
        }, s.prototype.SetLayoutScale = function(t) {
            this.runtime.running_layout && this.runtime.running_layout.scale !== t && (this.runtime.running_layout.scale = t, this.runtime.running_layout.boundScrolling(), this.runtime.redraw = !0)
        }, s.prototype.ScrollX = function(t) {
            this.runtime.running_layout.scrollToX(t)
        }, s.prototype.ScrollY = function(t) {
            this.runtime.running_layout.scrollToY(t)
        }, s.prototype.Scroll = function(t, e) {
            this.runtime.running_layout.scrollToX(t), this.runtime.running_layout.scrollToY(e)
        }, s.prototype.ScrollToObject = function(t) {
            var e = t.getFirstPicked();
            e && (this.runtime.running_layout.scrollToX(e.x), this.runtime.running_layout.scrollToY(e.y))
        }, s.prototype.SetVar = function(t, e) {
            0 === t.vartype ? cr.is_number(e) ? t.setValue(e) : t.setValue(parseFloat(e)) : 1 === t.vartype && t.setValue(e.toString())
        }, s.prototype.AddVar = function(t, e) {
            0 === t.vartype ? cr.is_number(e) ? t.setValue(t.getValue() + e) : t.setValue(t.getValue() + parseFloat(e)) : 1 === t.vartype && t.setValue(t.getValue() + e.toString())
        }, s.prototype.SubVar = function(t, e) {
            0 === t.vartype && (cr.is_number(e) ? t.setValue(t.getValue() - e) : t.setValue(t.getValue() - parseFloat(e)))
        }, s.prototype.SetGroupActive = function(t, e) {
            var i = this.runtime.groups_by_name[t.toLowerCase()];
            if (i) switch (e) {
                case 0:
                    i.setGroupActive(!1);
                    break;
                case 1:
                    i.setGroupActive(!0);
                    break;
                case 2:
                    i.setGroupActive(!i.group_active)
            }
        }, s.prototype.SetTimescale = function(t) {
            var e = t;
            0 > e && (e = 0), this.runtime.timescale = e
        }, s.prototype.SetObjectTimescale = function(t, e) {
            var i = e;
            if (0 > i && (i = 0), t) {
                var s, n, r = t.getCurrentSol(),
                    o = r.getObjects();
                for (s = 0, n = o.length; n > s; s++) o[s].my_timescale = i
            }
        }, s.prototype.RestoreObjectTimescale = function(t) {
            if (!t) return !1;
            var e, i, s = t.getCurrentSol(),
                n = s.getObjects();
            for (e = 0, i = n.length; i > e; e++) n[e].my_timescale = -1
        };
        var v = [],
            b = [];
        s.prototype.Wait = function(t) {
            if (!(0 > t)) {
                var e, i, s, r, a, h = this.runtime.getCurrentEventStack(),
                    c = n();
                for (c.time = this.runtime.kahanTime.sum + t, c.signaltag = "", c.signalled = !1, c.ev = h.current_event, c.actindex = h.actindex + 1, e = 0, i = this.runtime.types_by_index.length; i > e; e++) r = this.runtime.types_by_index[e], s = r.getCurrentSol(), s.select_all && -1 === h.current_event.solModifiers.indexOf(r) || (c.solModifiers.push(r), a = o(), a.sa = s.select_all, cr.shallowAssignArray(a.insts, s.instances), c.sols[e.toString()] = a);
                return this.waits.push(c), !0
            }
        }, s.prototype.WaitForSignal = function(t) {
            var e, i, s, r, a, h = this.runtime.getCurrentEventStack(),
                c = n();
            for (c.time = -1, c.signaltag = t.toLowerCase(), c.signalled = !1, c.ev = h.current_event, c.actindex = h.actindex + 1, e = 0, i = this.runtime.types_by_index.length; i > e; e++) r = this.runtime.types_by_index[e], s = r.getCurrentSol(), s.select_all && -1 === h.current_event.solModifiers.indexOf(r) || (c.solModifiers.push(r),
                a = o(), a.sa = s.select_all, cr.shallowAssignArray(a.insts, s.instances), c.sols[e.toString()] = a);
            return this.waits.push(c), !0
        }, s.prototype.Signal = function(t) {
            var e, i, s, n = t.toLowerCase();
            for (e = 0, i = this.waits.length; i > e; ++e) s = this.waits[e], -1 === s.time && s.signaltag === n && (s.signalled = !0)
        }, s.prototype.SetLayerScale = function(t, e) {
            t && t.scale !== e && (t.scale = e, this.runtime.redraw = !0)
        }, s.prototype.ResetGlobals = function() {
            var t, e, i;
            for (t = 0, e = this.runtime.all_global_vars.length; e > t; t++) i = this.runtime.all_global_vars[t], i.data = i.initial
        }, s.prototype.SetLayoutAngle = function(t) {
            t = cr.to_radians(t), t = cr.clamp_angle(t), this.runtime.running_layout && this.runtime.running_layout.angle !== t && (this.runtime.running_layout.angle = t, this.runtime.redraw = !0)
        }, s.prototype.SetLayerAngle = function(t, e) {
            t && (e = cr.to_radians(e), e = cr.clamp_angle(e), t.angle !== e && (t.angle = e, this.runtime.redraw = !0))
        }, s.prototype.SetLayerParallax = function(t, e, i) {
            if (t && (t.parallaxX !== e / 100 || t.parallaxY !== i / 100)) {
                if (t.parallaxX = e / 100, t.parallaxY = i / 100, 1 !== t.parallaxX || 1 !== t.parallaxY) {
                    var s, n, r = t.instances;
                    for (s = 0, n = r.length; n > s; ++s) r[s].type.any_instance_parallaxed = !0
                }
                this.runtime.redraw = !0
            }
        }, s.prototype.SetLayerBackground = function(t, e) {
            if (t) {
                var i = cr.GetRValue(e),
                    s = cr.GetGValue(e),
                    n = cr.GetBValue(e);
                (t.background_color[0] !== i || t.background_color[1] !== s || t.background_color[2] !== n) && (t.background_color[0] = i, t.background_color[1] = s, t.background_color[2] = n, this.runtime.redraw = !0)
            }
        }, s.prototype.SetLayerTransparent = function(t, e) {
            t && !!e != !!t.transparent && (t.transparent = !!e, this.runtime.redraw = !0)
        }, s.prototype.SetLayerBlendMode = function(t, e) {
            t && t.blend_mode !== e && (t.blend_mode = e, t.compositeOp = cr.effectToCompositeOp(t.blend_mode), this.runtime.gl && cr.setGLBlend(t, t.blend_mode, this.runtime.gl), this.runtime.redraw = !0)
        }, s.prototype.StopLoop = function() {
            this.runtime.loop_stack_index < 0 || (this.runtime.getCurrentLoop().stopped = !0)
        }, s.prototype.GoToLayoutByName = function(t) {
            if (!this.runtime.isloading && !this.runtime.changelayout) {
                var e;
                for (e in this.runtime.layouts)
                    if (this.runtime.layouts.hasOwnProperty(e) && cr.equals_nocase(e, t)) return void(this.runtime.changelayout = this.runtime.layouts[e])
            }
        }, s.prototype.RestartLayout = function(t) {
            if (!this.runtime.isloading && !this.runtime.changelayout && this.runtime.running_layout) {
                this.runtime.changelayout = this.runtime.running_layout;
                var e, i, s;
                for (e = 0, i = this.runtime.allGroups.length; i > e; e++) s = this.runtime.allGroups[e], s.setGroupActive(s.initially_activated)
            }
        }, s.prototype.SnapshotCanvas = function(t, e) {
            this.runtime.doCanvasSnapshot(0 === t ? "image/png" : "image/jpeg", e / 100)
        }, s.prototype.SetCanvasSize = function(t, e) {
            if (!(0 >= t || 0 >= e)) {
                var i = this.runtime.fullscreen_mode,
                    s = document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.runtime.isNodeFullscreen;
                s && this.runtime.fullscreen_scaling > 0 && (i = this.runtime.fullscreen_scaling), 0 === i ? this.runtime.setSize(t, e, !0) : (this.runtime.original_width = t, this.runtime.original_height = e, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
            }
        }, s.prototype.SetLayoutEffectEnabled = function(t, e) {
            if (this.runtime.running_layout && this.runtime.glwrap) {
                var i = this.runtime.running_layout.getEffectByName(e);
                if (i) {
                    var s = 1 === t;
                    i.active != s && (i.active = s, this.runtime.running_layout.updateActiveEffects(), this.runtime.redraw = !0)
                }
            }
        }, s.prototype.SetLayerEffectEnabled = function(t, e, i) {
            if (t && this.runtime.glwrap) {
                var s = t.getEffectByName(i);
                if (s) {
                    var n = 1 === e;
                    s.active != n && (s.active = n, t.updateActiveEffects(), this.runtime.redraw = !0)
                }
            }
        }, s.prototype.SetLayoutEffectParam = function(t, e, i) {
            if (this.runtime.running_layout && this.runtime.glwrap) {
                var s = this.runtime.running_layout.getEffectByName(t);
                if (s) {
                    var n = this.runtime.running_layout.effect_params[s.index];
                    e = Math.floor(e), 0 > e || e >= n.length || (1 === this.runtime.glwrap.getProgramParameterType(s.shaderindex, e) && (i /= 100), n[e] !== i && (n[e] = i, s.active && (this.runtime.redraw = !0)))
                }
            }
        }, s.prototype.SetLayerEffectParam = function(t, e, i, s) {
            if (t && this.runtime.glwrap) {
                var n = t.getEffectByName(e);
                if (n) {
                    var r = t.effect_params[n.index];
                    i = Math.floor(i), 0 > i || i >= r.length || (1 === this.runtime.glwrap.getProgramParameterType(n.shaderindex, i) && (s /= 100), r[i] !== s && (r[i] = s, n.active && (this.runtime.redraw = !0)))
                }
            }
        }, s.prototype.SaveState = function(t) {
            this.runtime.saveToSlot = t
        }, s.prototype.LoadState = function(t) {
            this.runtime.loadFromSlot = t
        }, s.prototype.LoadStateJSON = function(t) {
            this.runtime.loadFromJson = t
        }, s.prototype.SetHalfFramerateMode = function(t) {
            this.runtime.halfFramerateMode = 0 !== t
        }, s.prototype.SetFullscreenQuality = function(t) {
            var e = document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen;
            (e || 0 !== this.runtime.fullscreen_mode) && (this.runtime.wantFullscreenScalingQuality = 0 !== t, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
        }, s.prototype.ResetPersisted = function() {
            var t, e;
            for (t = 0, e = this.runtime.layouts_by_index.length; e > t; ++t) this.runtime.layouts_by_index[t].persist_data = {}, this.runtime.layouts_by_index[t].first_visit = !0
        }, s.prototype.RecreateInitialObjects = function(t, e, i, s, n) {
            t && this.runtime.running_layout.recreateInitialObjects(t, e, i, s, n)
        }, s.prototype.SetPixelRounding = function(t) {
            this.runtime.pixel_rounding = 0 !== t, this.runtime.redraw = !0
        }, s.prototype.SetMinimumFramerate = function(t) {
            1 > t && (t = 1), t > 120 && (t = 120), this.runtime.minimumFramerate = t
        }, s.prototype.SortZOrderByInstVar = function(t, e) {
            if (t) {
                var i, s, n, r, o, a, l = t.getCurrentSol(),
                    u = l.getObjects(),
                    p = [],
                    d = [],
                    f = this.runtime.running_layout,
                    g = t.is_family,
                    y = t.family_index;
                for (i = 0, s = u.length; s > i; ++i) n = u[i], n.layer && (r = g ? n.instance_vars[e + n.type.family_var_map[y]] : n.instance_vars[e], p.push([n.layer.index, n.get_zindex()]), d.push([n, r]));
                if (p.length)
                    for (p.sort(h), d.sort(c), i = 0, s = p.length; s > i; ++i) n = d[i][0], o = f.layers[p[i][0]], a = p[i][1], o.instances[a] !== n && (o.instances[a] = n, n.layer = o, o.setZIndicesStaleFrom(a))
            }
        }, p.acts = new s, l.prototype["int"] = function(t, e) {
            cr.is_string(e) ? (t.set_int(parseInt(e, 10)), isNaN(t.data) && (t.data = 0)) : t.set_int(e)
        }, l.prototype["float"] = function(t, e) {
            cr.is_string(e) ? (t.set_float(parseFloat(e)), isNaN(t.data) && (t.data = 0)) : t.set_float(e)
        }, l.prototype.str = function(t, e) {
            cr.is_string(e) ? t.set_string(e) : t.set_string(e.toString())
        }, l.prototype.len = function(t, e) {
            t.set_int(e.length || 0)
        }, l.prototype.random = function(t, e, i) {
            void 0 === i ? t.set_float(Math.random() * e) : t.set_float(Math.random() * (i - e) + e)
        }, l.prototype.sqrt = function(t, e) {
            t.set_float(Math.sqrt(e))
        }, l.prototype.abs = function(t, e) {
            t.set_float(Math.abs(e))
        }, l.prototype.round = function(t, e) {
            t.set_int(Math.round(e))
        }, l.prototype.floor = function(t, e) {
            t.set_int(Math.floor(e))
        }, l.prototype.ceil = function(t, e) {
            t.set_int(Math.ceil(e))
        }, l.prototype.sin = function(t, e) {
            t.set_float(Math.sin(cr.to_radians(e)))
        }, l.prototype.cos = function(t, e) {
            t.set_float(Math.cos(cr.to_radians(e)))
        }, l.prototype.tan = function(t, e) {
            t.set_float(Math.tan(cr.to_radians(e)))
        }, l.prototype.asin = function(t, e) {
            t.set_float(cr.to_degrees(Math.asin(e)))
        }, l.prototype.acos = function(t, e) {
            t.set_float(cr.to_degrees(Math.acos(e)))
        }, l.prototype.atan = function(t, e) {
            t.set_float(cr.to_degrees(Math.atan(e)))
        }, l.prototype.exp = function(t, e) {
            t.set_float(Math.exp(e))
        }, l.prototype.ln = function(t, e) {
            t.set_float(Math.log(e))
        }, l.prototype.log10 = function(t, e) {
            t.set_float(Math.log(e) / Math.LN10)
        }, l.prototype.max = function(t) {
            var e = arguments[1];
            "number" != typeof e && (e = 0);
            var i, s, n;
            for (i = 2, s = arguments.length; s > i; i++) n = arguments[i], "number" == typeof n && n > e && (e = n);
            t.set_float(e)
        }, l.prototype.min = function(t) {
            var e = arguments[1];
            "number" != typeof e && (e = 0);
            var i, s, n;
            for (i = 2, s = arguments.length; s > i; i++) n = arguments[i], "number" == typeof n && e > n && (e = n);
            t.set_float(e)
        }, l.prototype.dt = function(t) {
            t.set_float(this.runtime.dt)
        }, l.prototype.timescale = function(t) {
            t.set_float(this.runtime.timescale)
        }, l.prototype.wallclocktime = function(t) {
            t.set_float((Date.now() - this.runtime.start_time) / 1e3)
        }, l.prototype.time = function(t) {
            t.set_float(this.runtime.kahanTime.sum)
        }, l.prototype.tickcount = function(t) {
            t.set_int(this.runtime.tickcount)
        }, l.prototype.objectcount = function(t) {
            t.set_int(this.runtime.objectcount)
        }, l.prototype.fps = function(t) {
            t.set_int(this.runtime.fps)
        }, l.prototype.loopindex = function(t, e) {
            var i, s;
            if (!this.runtime.loop_stack.length) return void t.set_int(0);
            if (e) {
                for (s = this.runtime.loop_stack_index; s >= 0; --s)
                    if (i = this.runtime.loop_stack[s], i.name === e) return void t.set_int(i.index);
                t.set_int(0)
            } else i = this.runtime.getCurrentLoop(), t.set_int(i ? i.index : -1)
        }, l.prototype.distance = function(t, e, i, s, n) {
            t.set_float(cr.distanceTo(e, i, s, n))
        }, l.prototype.angle = function(t, e, i, s, n) {
            t.set_float(cr.to_degrees(cr.angleTo(e, i, s, n)))
        }, l.prototype.scrollx = function(t) {
            t.set_float(this.runtime.running_layout.scrollX)
        }, l.prototype.scrolly = function(t) {
            t.set_float(this.runtime.running_layout.scrollY)
        }, l.prototype.newline = function(t) {
            t.set_string("\n")
        }, l.prototype.lerp = function(t, e, i, s) {
            t.set_float(cr.lerp(e, i, s))
        }, l.prototype.qarp = function(t, e, i, s, n) {
            t.set_float(cr.qarp(e, i, s, n))
        }, l.prototype.cubic = function(t, e, i, s, n, r) {
            t.set_float(cr.cubic(e, i, s, n, r))
        }, l.prototype.cosp = function(t, e, i, s) {
            t.set_float(cr.cosp(e, i, s))
        }, l.prototype.windowwidth = function(t) {
            t.set_int(this.runtime.width)
        }, l.prototype.windowheight = function(t) {
            t.set_int(this.runtime.height)
        }, l.prototype.uppercase = function(t, e) {
            t.set_string(cr.is_string(e) ? e.toUpperCase() : "")
        }, l.prototype.lowercase = function(t, e) {
            t.set_string(cr.is_string(e) ? e.toLowerCase() : "")
        }, l.prototype.clamp = function(t, e, i, s) {
            i > e ? t.set_float(i) : e > s ? t.set_float(s) : t.set_float(e)
        }, l.prototype.layerscale = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(i.scale) : t.set_float(0)
        }, l.prototype.layeropacity = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.opacity) : t.set_float(0)
        }, l.prototype.layerscalerate = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(i.zoomRate) : t.set_float(0)
        }, l.prototype.layerparallaxx = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.parallaxX) : t.set_float(0)
        }, l.prototype.layerparallaxy = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.parallaxY) : t.set_float(0)
        }, l.prototype.layerindex = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_int(i.index) : t.set_int(-1)
        }, l.prototype.layoutscale = function(t) {
            this.runtime.running_layout ? t.set_float(this.runtime.running_layout.scale) : t.set_float(0)
        }, l.prototype.layoutangle = function(t) {
            t.set_float(cr.to_degrees(this.runtime.running_layout.angle))
        }, l.prototype.layerangle = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(cr.to_degrees(i.angle)) : t.set_float(0)
        }, l.prototype.layoutwidth = function(t) {
            t.set_int(this.runtime.running_layout.width)
        }, l.prototype.layoutheight = function(t) {
            t.set_int(this.runtime.running_layout.height)
        }, l.prototype.find = function(t, e, i) {
            cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i), "i"))) : t.set_int(-1)
        }, l.prototype.findcase = function(t, e, i) {
            cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i), ""))) : t.set_int(-1)
        }, l.prototype.left = function(t, e, i) {
            t.set_string(cr.is_string(e) ? e.substr(0, i) : "")
        }, l.prototype.right = function(t, e, i) {
            t.set_string(cr.is_string(e) ? e.substr(e.length - i) : "")
        }, l.prototype.mid = function(t, e, i, s) {
            t.set_string(cr.is_string(e) ? e.substr(i, s) : "")
        }, l.prototype.tokenat = function(t, e, i, s) {
            if (cr.is_string(e) && cr.is_string(s)) {
                var n = e.split(s),
                    r = cr.floor(i);
                0 > r || r >= n.length ? t.set_string("") : t.set_string(n[r])
            } else t.set_string("")
        }, l.prototype.tokencount = function(t, e, i) {
            cr.is_string(e) && e.length ? t.set_int(e.split(i).length) : t.set_int(0)
        }, l.prototype.replace = function(t, e, i, s) {
            cr.is_string(e) && cr.is_string(i) && cr.is_string(s) ? t.set_string(e.replace(new RegExp(cr.regexp_escape(i), "gi"), s)) : t.set_string(cr.is_string(e) ? e : "")
        }, l.prototype.trim = function(t, e) {
            t.set_string(cr.is_string(e) ? e.trim() : "")
        }, l.prototype.pi = function(t) {
            t.set_float(cr.PI)
        }, l.prototype.layoutname = function(t) {
            this.runtime.running_layout ? t.set_string(this.runtime.running_layout.name) : t.set_string("")
        }, l.prototype.renderer = function(t) {
            t.set_string(this.runtime.gl ? "webgl" : "canvas2d")
        }, l.prototype.rendererdetail = function(t) {
            t.set_string(this.runtime.glUnmaskedRenderer)
        }, l.prototype.anglediff = function(t, e, i) {
            t.set_float(cr.to_degrees(cr.angleDiff(cr.to_radians(e), cr.to_radians(i))))
        }, l.prototype.choose = function(t) {
            var e = cr.floor(Math.random() * (arguments.length - 1));
            t.set_any(arguments[e + 1])
        }, l.prototype.rgb = function(t, e, i, s) {
            t.set_int(cr.RGB(e, i, s))
        }, l.prototype.projectversion = function(t) {
            t.set_string(this.runtime.versionstr)
        }, l.prototype.projectname = function(t) {
            t.set_string(this.runtime.projectName)
        }, l.prototype.anglelerp = function(t, e, i, s) {
            e = cr.to_radians(e), i = cr.to_radians(i);
            var n = cr.angleDiff(e, i);
            cr.angleClockwise(i, e) ? t.set_float(cr.to_clamped_degrees(e + n * s)) : t.set_float(cr.to_clamped_degrees(e - n * s))
        }, l.prototype.anglerotate = function(t, e, i, s) {
            e = cr.to_radians(e), i = cr.to_radians(i), s = cr.to_radians(s), t.set_float(cr.to_clamped_degrees(cr.angleRotate(e, i, s)))
        }, l.prototype.zeropad = function(t, e, i) {
            var s = 0 > e ? "-" : "";
            0 > e && (e = -e);
            for (var n = i - e.toString().length, r = 0; n > r; r++) s += "0";
            t.set_string(s + e.toString())
        }, l.prototype.cpuutilisation = function(t) {
            t.set_float(this.runtime.cpuutilisation / 1e3)
        }, l.prototype.viewportleft = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewLeft : 0)
        }, l.prototype.viewporttop = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewTop : 0)
        }, l.prototype.viewportright = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewRight : 0)
        }, l.prototype.viewportbottom = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewBottom : 0)
        }, l.prototype.loadingprogress = function(t) {
            t.set_float(this.runtime.loadingprogress)
        }, l.prototype.unlerp = function(t, e, i, s) {
            t.set_float(cr.unlerp(e, i, s))
        }, l.prototype.canvassnapshot = function(t) {
            t.set_string(this.runtime.snapshotData)
        }, l.prototype.urlencode = function(t, e) {
            t.set_string(encodeURIComponent(e))
        }, l.prototype.urldecode = function(t, e) {
            t.set_string(decodeURIComponent(e))
        }, l.prototype.canvastolayerx = function(t, e, i, s) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.canvasToLayer(i, s, !0) : 0)
        }, l.prototype.canvastolayery = function(t, e, i, s) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.canvasToLayer(i, s, !1) : 0)
        }, l.prototype.layertocanvasx = function(t, e, i, s) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.layerToCanvas(i, s, !0) : 0)
        }, l.prototype.layertocanvasy = function(t, e, i, s) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.layerToCanvas(i, s, !1) : 0)
        }, l.prototype.savestatejson = function(t) {
            t.set_string(this.runtime.lastSaveJson)
        }, l.prototype.imagememoryusage = function(t) {
            this.runtime.glwrap ? t.set_float(Math.round(100 * this.runtime.glwrap.estimateVRAM() / 1048576) / 100) : t.set_float(0)
        }, l.prototype.regexsearch = function(t, e, s, n) {
            var r = i(s, n);
            t.set_int(e ? e.search(r) : -1)
        }, l.prototype.regexreplace = function(t, e, s, n, r) {
            var o = i(s, n);
            t.set_string(e ? e.replace(o, r) : "")
        };
        var w = [],
            x = "",
            S = "",
            T = "";
        l.prototype.regexmatchcount = function(t, e, s, n) {
            i(s, n);
            u(e, s, n), t.set_int(w ? w.length : 0)
        }, l.prototype.regexmatchat = function(t, e, s, n, r) {
            r = Math.floor(r);
            i(s, n);
            u(e, s, n), !w || 0 > r || r >= w.length ? t.set_string("") : t.set_string(w[r])
        }, l.prototype.infinity = function(t) {
            t.set_float(1 / 0)
        }, l.prototype.setbit = function(t, e, i, s) {
            e = 0 | e, i = 0 | i, s = 0 !== s ? 1 : 0, t.set_int(e & ~(1 << i) | s << i)
        }, l.prototype.togglebit = function(t, e, i) {
            e = 0 | e, i = 0 | i, t.set_int(e ^ 1 << i)
        }, l.prototype.getbit = function(t, e, i) {
            e = 0 | e, i = 0 | i, t.set_int(e & 1 << i ? 1 : 0)
        }, l.prototype.originalwindowwidth = function(t) {
            t.set_int(this.runtime.original_width)
        }, l.prototype.originalwindowheight = function(t) {
            t.set_int(this.runtime.original_height)
        }, p.exps = new l, p.runWaits = function() {
            var t, e, i, s, n, o, h, c = this.runtime.getCurrentEventStack();
            for (t = 0, i = this.waits.length; i > t; t++) {
                if (s = this.waits[t], -1 === s.time) {
                    if (!s.signalled) continue
                } else if (s.time > this.runtime.kahanTime.sum) continue;
                c.current_event = s.ev, c.actindex = s.actindex, c.cndindex = 0;
                for (n in s.sols) s.sols.hasOwnProperty(n) && (o = this.runtime.types_by_index[parseInt(n, 10)].getCurrentSol(), h = s.sols[n], o.select_all = h.sa, cr.shallowAssignArray(o.instances, h.insts), a(h));
                s.ev.resume_actions_and_subevents(), this.runtime.clearSol(s.solModifiers), s.deleteme = !0
            }
            for (t = 0, e = 0, i = this.waits.length; i > t; t++) s = this.waits[t], this.waits[e] = s, s.deleteme ? r(s) : e++;
            cr.truncateArray(this.waits, e)
        }
    }(),
    function() {
        cr.add_common_aces = function(t, e) {
            var i = t[1],
                s = t[3],
                n = t[4],
                r = t[5],
                o = t[6],
                a = t[7],
                h = t[8];
            e.cnds || (e.cnds = {}), e.acts || (e.acts = {}), e.exps || (e.exps = {});
            var c = e.cnds,
                l = e.acts,
                u = e.exps;
            s && (c.CompareX = function(t, e) {
                return cr.do_cmp(this.x, t, e)
            }, c.CompareY = function(t, e) {
                return cr.do_cmp(this.y, t, e)
            }, c.IsOnScreen = function() {
                var t = this.layer;
                this.update_bbox();
                var e = this.bbox;
                return !(e.right < t.viewLeft || e.bottom < t.viewTop || e.left > t.viewRight || e.top > t.viewBottom)
            }, c.IsOutsideLayout = function() {
                this.update_bbox();
                var t = this.bbox,
                    e = this.runtime.running_layout;
                return t.right < 0 || t.bottom < 0 || t.left > e.width || t.top > e.height
            }, c.PickDistance = function(t, e, i) {
                var s = this.getCurrentSol(),
                    n = s.getObjects();
                if (!n.length) return !1;
                var r, o, a, h = n[0],
                    c = h,
                    l = cr.distanceTo(h.x, h.y, e, i);
                for (r = 1, o = n.length; o > r; r++) h = n[r], a = cr.distanceTo(h.x, h.y, e, i), (0 === t && l > a || 1 === t && a > l) && (l = a, c = h);
                return s.pick_one(c), !0
            }, l.SetX = function(t) {
                this.x !== t && (this.x = t, this.set_bbox_changed())
            }, l.SetY = function(t) {
                this.y !== t && (this.y = t, this.set_bbox_changed())
            }, l.SetPos = function(t, e) {
                (this.x !== t || this.y !== e) && (this.x = t, this.y = e, this.set_bbox_changed())
            }, l.SetPosToObject = function(t, e) {
                var i = t.getPairedInstance(this);
                if (i) {
                    var s, n;
                    i.getImagePoint ? (s = i.getImagePoint(e, !0), n = i.getImagePoint(e, !1)) : (s = i.x, n = i.y), (this.x !== s || this.y !== n) && (this.x = s, this.y = n, this.set_bbox_changed())
                }
            }, l.MoveForward = function(t) {
                0 !== t && (this.x += Math.cos(this.angle) * t, this.y += Math.sin(this.angle) * t, this.set_bbox_changed())
            }, l.MoveAtAngle = function(t, e) {
                0 !== e && (this.x += Math.cos(cr.to_radians(t)) * e, this.y += Math.sin(cr.to_radians(t)) * e, this.set_bbox_changed())
            }, u.X = function(t) {
                t.set_float(this.x)
            }, u.Y = function(t) {
                t.set_float(this.y)
            }, u.dt = function(t) {
                t.set_float(this.runtime.getDt(this))
            }), n && (c.CompareWidth = function(t, e) {
                return cr.do_cmp(this.width, t, e)
            }, c.CompareHeight = function(t, e) {
                return cr.do_cmp(this.height, t, e)
            }, l.SetWidth = function(t) {
                this.width !== t && (this.width = t, this.set_bbox_changed())
            }, l.SetHeight = function(t) {
                this.height !== t && (this.height = t, this.set_bbox_changed())
            }, l.SetSize = function(t, e) {
                (this.width !== t || this.height !== e) && (this.width = t, this.height = e, this.set_bbox_changed())
            }, u.Width = function(t) {
                t.set_float(this.width)
            }, u.Height = function(t) {
                t.set_float(this.height)
            }, u.BBoxLeft = function(t) {
                this.update_bbox(), t.set_float(this.bbox.left)
            }, u.BBoxTop = function(t) {
                this.update_bbox(), t.set_float(this.bbox.top)
            }, u.BBoxRight = function(t) {
                this.update_bbox(), t.set_float(this.bbox.right)
            }, u.BBoxBottom = function(t) {
                this.update_bbox(), t.set_float(this.bbox.bottom)
            }), r && (c.AngleWithin = function(t, e) {
                return cr.angleDiff(this.angle, cr.to_radians(e)) <= cr.to_radians(t)
            }, c.IsClockwiseFrom = function(t) {
                return cr.angleClockwise(this.angle, cr.to_radians(t))
            }, c.IsBetweenAngles = function(t, e) {
                var i = cr.to_clamped_radians(t),
                    s = cr.to_clamped_radians(e),
                    n = cr.clamp_angle(this.angle),
                    r = !cr.angleClockwise(s, i);
                return r ? !(!cr.angleClockwise(n, i) && cr.angleClockwise(n, s)) : cr.angleClockwise(n, i) && !cr.angleClockwise(n, s)
            }, l.SetAngle = function(t) {
                var e = cr.to_radians(cr.clamp_angle_degrees(t));
                isNaN(e) || this.angle !== e && (this.angle = e, this.set_bbox_changed())
            }, l.RotateClockwise = function(t) {
                0 === t || isNaN(t) || (this.angle += cr.to_radians(t), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
            }, l.RotateCounterclockwise = function(t) {
                0 === t || isNaN(t) || (this.angle -= cr.to_radians(t), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
            }, l.RotateTowardAngle = function(t, e) {
                var i = cr.angleRotate(this.angle, cr.to_radians(e), cr.to_radians(t));
                isNaN(i) || this.angle !== i && (this.angle = i, this.set_bbox_changed())
            }, l.RotateTowardPosition = function(t, e, i) {
                var s = e - this.x,
                    n = i - this.y,
                    r = Math.atan2(n, s),
                    o = cr.angleRotate(this.angle, r, cr.to_radians(t));
                isNaN(o) || this.angle !== o && (this.angle = o, this.set_bbox_changed())
            }, l.SetTowardPosition = function(t, e) {
                var i = t - this.x,
                    s = e - this.y,
                    n = Math.atan2(s, i);
                isNaN(n) || this.angle !== n && (this.angle = n, this.set_bbox_changed())
            }, u.Angle = function(t) {
                t.set_float(cr.to_clamped_degrees(this.angle))
            }), i || (c.CompareInstanceVar = function(t, e, i) {
                return cr.do_cmp(this.instance_vars[t], e, i)
            }, c.IsBoolInstanceVarSet = function(t) {
                return this.instance_vars[t]
            }, c.PickInstVarHiLow = function(t, e) {
                var i = this.getCurrentSol(),
                    s = i.getObjects();
                if (!s.length) return !1;
                var n, r, o, a = s[0],
                    h = a,
                    c = a.instance_vars[e];
                for (n = 1, r = s.length; r > n; n++) a = s[n], o = a.instance_vars[e], (0 === t && c > o || 1 === t && o > c) && (c = o, h = a);
                return i.pick_one(h), !0
            }, c.PickByUID = function(t) {
                var e, i, s, n, r, o, a, h = this.runtime.getCurrentCondition();
                if (h.inverted) {
                    if (a = this.getCurrentSol(), a.select_all) {
                        for (a.select_all = !1, cr.clearArray(a.instances), cr.clearArray(a.else_instances), o = this.instances, e = 0, i = o.length; i > e; e++) n = o[e], n.uid === t ? a.else_instances.push(n) : a.instances.push(n);
                        return this.applySolToContainer(), !!a.instances.length
                    }
                    for (e = 0, s = 0, i = a.instances.length; i > e; e++) n = a.instances[e], a.instances[s] = n, n.uid === t ? a.else_instances.push(n) : s++;
                    return cr.truncateArray(a.instances, s), this.applySolToContainer(), !!a.instances.length
                }
                if (n = this.runtime.getObjectByUID(t), !n) return !1;
                if (a = this.getCurrentSol(), !a.select_all && -1 === a.instances.indexOf(n)) return !1;
                if (this.is_family) {
                    for (r = n.type.families, e = 0, i = r.length; i > e; e++)
                        if (r[e] === this) return a.pick_one(n), this.applySolToContainer(), !0
                } else if (n.type === this) return a.pick_one(n), this.applySolToContainer(), !0;
                return !1
            }, c.OnCreated = function() {
                return !0
            }, c.OnDestroyed = function() {
                return !0
            }, l.SetInstanceVar = function(t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) ? cr.is_number(e) ? i[t] = e : i[t] = parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] = e : i[t] = e.toString())
            }, l.AddInstanceVar = function(t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) ? cr.is_number(e) ? i[t] += e : i[t] += parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] += e : i[t] += e.toString())
            }, l.SubInstanceVar = function(t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) && (cr.is_number(e) ? i[t] -= e : i[t] -= parseFloat(e))
            }, l.SetBoolInstanceVar = function(t, e) {
                this.instance_vars[t] = e ? 1 : 0
            }, l.ToggleBoolInstanceVar = function(t) {
                this.instance_vars[t] = 1 - this.instance_vars[t]
            }, l.Destroy = function() {
                this.runtime.DestroyInstance(this)
            }, l.LoadFromJsonString || (l.LoadFromJsonString = function(t) {
                var e, i, s, n;
                try {
                    e = JSON.parse(t)
                } catch (r) {
                    return
                }
                if (this.runtime.loadInstanceFromJSON(this, e, !0), this.afterLoad && this.afterLoad(), this.behavior_insts)
                    for (i = 0, s = this.behavior_insts.length; s > i; ++i) n = this.behavior_insts[i], n.afterLoad && n.afterLoad()
            }), u.Count = function(t) {
                var e, i, s, n = t.object_class.instances.length;
                for (e = 0, i = this.runtime.createRow.length; i > e; e++) s = this.runtime.createRow[e], t.object_class.is_family ? s.type.families.indexOf(t.object_class) >= 0 && n++ : s.type === t.object_class && n++;
                t.set_int(n)
            }, u.PickedCount = function(t) {
                t.set_int(t.object_class.getCurrentSol().getObjects().length)
            }, u.UID = function(t) {
                t.set_int(this.uid)
            }, u.IID = function(t) {
                t.set_int(this.get_iid())
            }, u.AsJSON || (u.AsJSON = function(t) {
                t.set_string(JSON.stringify(this.runtime.saveInstanceToJSON(this, !0)))
            })), o && (c.IsVisible = function() {
                return this.visible
            }, l.SetVisible = function(t) {
                !t != !this.visible && (this.visible = !!t, this.runtime.redraw = !0)
            }, c.CompareOpacity = function(t, e) {
                return cr.do_cmp(cr.round6dp(100 * this.opacity), t, e)
            }, l.SetOpacity = function(t) {
                var e = t / 100;
                0 > e ? e = 0 : e > 1 && (e = 1), e !== this.opacity && (this.opacity = e, this.runtime.redraw = !0)
            }, u.Opacity = function(t) {
                t.set_float(cr.round6dp(100 * this.opacity))
            }), a && (c.IsOnLayer = function(t) {
                return t ? this.layer === t : !1
            }, c.PickTopBottom = function(t) {
                var e = this.getCurrentSol(),
                    i = e.getObjects();
                if (!i.length) return !1;
                var s, n, r = i[0],
                    o = r;
                for (s = 1, n = i.length; n > s; s++) r = i[s], 0 === t ? (r.layer.index > o.layer.index || r.layer.index === o.layer.index && r.get_zindex() > o.get_zindex()) && (o = r) : (r.layer.index < o.layer.index || r.layer.index === o.layer.index && r.get_zindex() < o.get_zindex()) && (o = r);
                return e.pick_one(o), !0
            }, l.MoveToTop = function() {
                var t = this.layer,
                    e = t.instances;
                e.length && e[e.length - 1] === this || (t.removeFromInstanceList(this, !1), t.appendToInstanceList(this, !1), this.runtime.redraw = !0)
            }, l.MoveToBottom = function() {
                var t = this.layer,
                    e = t.instances;
                e.length && e[0] === this || (t.removeFromInstanceList(this, !1), t.prependToInstanceList(this, !1), this.runtime.redraw = !0)
            }, l.MoveToLayer = function(t) {
                t && t != this.layer && (this.layer.removeFromInstanceList(this, !0), this.layer = t, t.appendToInstanceList(this, !0), this.runtime.redraw = !0)
            }, l.ZMoveToObject = function(t, e) {
                var i = 0 === t;
                if (e) {
                    var s = e.getFirstPicked(this);
                    s && s.uid !== this.uid && (this.layer.index !== s.layer.index && (this.layer.removeFromInstanceList(this, !0), this.layer = s.layer, s.layer.appendToInstanceList(this, !0)), this.layer.moveInstanceAdjacent(this, s, i), this.runtime.redraw = !0)
                }
            }, u.LayerNumber = function(t) {
                t.set_int(this.layer.number)
            }, u.LayerName = function(t) {
                t.set_string(this.layer.name)
            }, u.ZIndex = function(t) {
                t.set_int(this.get_zindex())
            }), h && (l.SetEffectEnabled = function(t, e) {
                if (this.runtime.glwrap) {
                    var i = this.type.getEffectIndexByName(e);
                    if (!(0 > i)) {
                        var s = 1 === t;
                        this.active_effect_flags[i] !== s && (this.active_effect_flags[i] = s, this.updateActiveEffects(), this.runtime.redraw = !0)
                    }
                }
            }, l.SetEffectParam = function(t, e, i) {
                if (this.runtime.glwrap) {
                    var s = this.type.getEffectIndexByName(t);
                    if (!(0 > s)) {
                        var n = this.type.effect_types[s],
                            r = this.effect_params[s];
                        e = Math.floor(e), 0 > e || e >= r.length || (1 === this.runtime.glwrap.getProgramParameterType(n.shaderindex, e) && (i /= 100), r[e] !== i && (r[e] = i, n.active && (this.runtime.redraw = !0)))
                    }
                }
            })
        }, cr.set_bbox_changed = function() {
            this.bbox_changed = !0, this.cell_changed = !0, this.type.any_cell_changed = !0, this.runtime.redraw = !0;
            var t, e, i = this.bbox_changed_callbacks;
            for (t = 0, e = i.length; e > t; ++t) i[t](this);
            this.layer.useRenderCells && this.update_bbox()
        }, cr.add_bbox_changed_callback = function(t) {
            t && this.bbox_changed_callbacks.push(t)
        }, cr.update_bbox = function() {
            if (this.bbox_changed) {
                var t = this.bbox,
                    e = this.bquad;
                t.set(this.x, this.y, this.x + this.width, this.y + this.height), t.offset(-this.hotspotX * this.width, -this.hotspotY * this.height), this.angle ? (t.offset(-this.x, -this.y), e.set_from_rotated_rect(t, this.angle), e.offset(this.x, this.y), e.bounding_box(t)) : e.set_from_rect(t), t.normalize(), this.bbox_changed = !1, this.update_render_cell()
            }
        };
        var t = new cr.rect(0, 0, 0, 0);
        cr.update_render_cell = function() {
            if (this.layer.useRenderCells) {
                var e = this.layer.render_grid,
                    i = this.bbox;
                t.set(e.XToCell(i.left), e.YToCell(i.top), e.XToCell(i.right), e.YToCell(i.bottom)), this.rendercells.equals(t) || (this.rendercells.right < this.rendercells.left ? e.update(this, null, t) : e.update(this, this.rendercells, t), this.rendercells.copy(t), this.layer.render_list_stale = !0)
            }
        }, cr.update_collision_cell = function() {
            if (this.cell_changed && this.collisionsEnabled) {
                this.update_bbox();
                var e = this.type.collision_grid,
                    i = this.bbox;
                t.set(e.XToCell(i.left), e.YToCell(i.top), e.XToCell(i.right), e.YToCell(i.bottom)), this.collcells.equals(t) || (this.collcells.right < this.collcells.left ? e.update(this, null, t) : e.update(this, this.collcells, t), this.collcells.copy(t), this.cell_changed = !1)
            }
        }, cr.inst_contains_pt = function(t, e) {
            return this.bbox.contains_pt(t, e) && this.bquad.contains_pt(t, e) ? this.collision_poly && !this.collision_poly.is_empty() ? (this.collision_poly.cache_poly(this.width, this.height, this.angle), this.collision_poly.contains_pt(t - this.x, e - this.y)) : !0 : !1
        }, cr.inst_get_iid = function() {
            return this.type.updateIIDs(), this.iid
        }, cr.inst_get_zindex = function() {
            return this.layer.updateZIndices(), this.zindex
        }, cr.inst_updateActiveEffects = function() {
            cr.clearArray(this.active_effect_types);
            var t, e, i, s = !0;
            for (t = 0, e = this.active_effect_flags.length; e > t; t++) this.active_effect_flags[t] && (i = this.type.effect_types[t], this.active_effect_types.push(i), i.preservesOpaqueness || (s = !1));
            this.uses_shaders = !!this.active_effect_types.length, this.shaders_preserve_opaqueness = s
        }, cr.inst_toString = function() {
            return "Inst" + this.puid
        }, cr.type_getFirstPicked = function(t) {
            if (t && t.is_contained && t.type != this) {
                var e, i, s;
                for (e = 0, i = t.siblings.length; i > e; e++)
                    if (s = t.siblings[e], s.type == this) return s
            }
            var n = this.getCurrentSol().getObjects();
            return n.length ? n[0] : null
        }, cr.type_getPairedInstance = function(t) {
            var e = this.getCurrentSol().getObjects();
            return e.length ? e[t.get_iid() % e.length] : null
        }, cr.type_updateIIDs = function() {
            if (this.stale_iids && !this.is_family) {
                var t, e;
                for (t = 0, e = this.instances.length; e > t; t++) this.instances[t].iid = t;
                var i = t,
                    s = this.runtime.createRow;
                for (t = 0, e = s.length; e > t; ++t) s[t].type === this && (s[t].iid = i++);
                this.stale_iids = !1
            }
        }, cr.type_getInstanceByIID = function(t) {
            if (t < this.instances.length) return this.instances[t];
            t -= this.instances.length;
            var e, i, s = this.runtime.createRow;
            for (e = 0, i = s.length; i > e; ++e)
                if (s[e].type === this) {
                    if (0 === t) return s[e];
                    --t
                }
            return null
        }, cr.type_getCurrentSol = function() {
            return this.solstack[this.cur_sol]
        }, cr.type_pushCleanSol = function() {
            this.cur_sol++, this.cur_sol === this.solstack.length ? this.solstack.push(new cr.selection(this)) : (this.solstack[this.cur_sol].select_all = !0, cr.clearArray(this.solstack[this.cur_sol].else_instances))
        }, cr.type_pushCopySol = function() {
            this.cur_sol++, this.cur_sol === this.solstack.length && this.solstack.push(new cr.selection(this));
            var t = this.solstack[this.cur_sol],
                e = this.solstack[this.cur_sol - 1];
            e.select_all ? (t.select_all = !0, cr.clearArray(t.else_instances)) : (t.select_all = !1, cr.shallowAssignArray(t.instances, e.instances), cr.shallowAssignArray(t.else_instances, e.else_instances))
        }, cr.type_popSol = function() {
            this.cur_sol--
        }, cr.type_getBehaviorByName = function(t) {
            var e, i, s, n, r, o = 0;
            if (!this.is_family)
                for (e = 0, i = this.families.length; i > e; e++)
                    for (r = this.families[e], s = 0, n = r.behaviors.length; n > s; s++) {
                        if (t === r.behaviors[s].name) return this.extra.lastBehIndex = o, r.behaviors[s];
                        o++
                    }
            for (e = 0, i = this.behaviors.length; i > e; e++) {
                if (t === this.behaviors[e].name) return this.extra.lastBehIndex = o, this.behaviors[e];
                o++
            }
            return null
        }, cr.type_getBehaviorIndexByName = function(t) {
            var e = this.getBehaviorByName(t);
            return e ? this.extra.lastBehIndex : -1
        }, cr.type_getEffectIndexByName = function(t) {
            var e, i;
            for (e = 0, i = this.effect_types.length; i > e; e++)
                if (this.effect_types[e].name === t) return e;
            return -1
        }, cr.type_applySolToContainer = function() {
            if (this.is_contained && !this.is_family) {
                var t, e, i, s, n, r, o;
                this.updateIIDs(), r = this.getCurrentSol();
                var a = r.select_all,
                    h = this.runtime.getCurrentEventStack(),
                    c = h && h.current_event && h.current_event.orblock;
                for (t = 0, e = this.container.length; e > t; t++)
                    if (n = this.container[t], n !== this && (n.updateIIDs(), o = n.getCurrentSol(), o.select_all = a, !a)) {
                        for (cr.clearArray(o.instances), i = 0, s = r.instances.length; s > i; ++i) o.instances[i] = n.getInstanceByIID(r.instances[i].iid);
                        if (c)
                            for (cr.clearArray(o.else_instances), i = 0, s = r.else_instances.length; s > i; ++i) o.else_instances[i] = n.getInstanceByIID(r.else_instances[i].iid)
                    }
            }
        }, cr.type_toString = function() {
            return "Type" + this.sid
        }, cr.do_cmp = function(t, e, i) {
            if ("undefined" == typeof t || "undefined" == typeof i) return !1;
            switch (e) {
                case 0:
                    return t === i;
                case 1:
                    return t !== i;
                case 2:
                    return i > t;
                case 3:
                    return i >= t;
                case 4:
                    return t > i;
                case 5:
                    return t >= i;
                default:
                    return !1
            }
        }
    }(), cr.shaders = {}, cr.shaders.overlay = {
        src: ["precision mediump float;", "varying mediump vec2 vTex;", "uniform lowp sampler2D samplerFront;", "uniform lowp sampler2D samplerBack;", "uniform mediump vec2 destStart;", "uniform mediump vec2 destEnd;", "void main(void)", "{", "lowp vec4 front = texture2D(samplerFront, vTex);", "lowp vec4 back = texture2D(samplerBack, mix(destStart, destEnd, vTex));", "front.r = back.r < 0.5 ? 2.0 * back.r * front.r : 2.0 * (front.r + back.r * front.a - back.r * front.r) - front.a;", "front.g = back.g < 0.5 ? 2.0 * back.g * front.g : 2.0 * (front.g + back.g * front.a - back.g * front.g) - front.a;", "front.b = back.b < 0.5 ? 2.0 * back.b * front.b : 2.0 * (front.b + back.b * front.a - back.b * front.b) - front.a;", "front *= back.a;", "gl_FragColor = front;", "}"].join("\n"),
        extendBoxHorizontal: 0,
        extendBoxVertical: 0,
        crossSampling: !0,
        preservesOpaqueness: !1,
        animated: !1,
        parameters: []
    }, cr.plugins_.Arr = function(t) {
        this.runtime = t
    },
    function() {
        function t() {
            return c.length ? c.pop() : []
        }

        function e(t) {
            var i, s;
            for (i = 0, s = t.length; s > i; i++) Array.isArray(t[i]) && e(t[i]);
            cr.clearArray(t),
                c.push(t)
        }

        function i() {}

        function s() {}

        function n(t, e) {
            if (cr.is_number(t) && cr.is_number(e)) return t - e;
            var i = "" + t,
                s = "" + e;
            return s > i ? -1 : i > s ? 1 : 0
        }

        function r() {}
        var o = cr.plugins_.Arr.prototype;
        o.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var a = o.Type.prototype;
        a.onCreate = function() {}, o.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var h = o.Instance.prototype,
            c = [];
        Array.isArray || (Array.isArray = function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }), h.onCreate = function() {
            this.cx = this.properties[0], this.cy = this.properties[1], this.cz = this.properties[2], this.recycled || (this.arr = t());
            var e = this.arr;
            e.length = this.cx;
            var i, s, n;
            for (i = 0; i < this.cx; i++)
                for (e[i] || (e[i] = t()), e[i].length = this.cy, s = 0; s < this.cy; s++)
                    for (e[i][s] || (e[i][s] = t()), e[i][s].length = this.cz, n = 0; n < this.cz; n++) e[i][s][n] = 0;
            this.forX = [], this.forY = [], this.forZ = [], this.forDepth = -1
        }, h.onDestroy = function() {
            var t;
            for (t = 0; t < this.cx; t++) e(this.arr[t]);
            cr.clearArray(this.arr)
        }, h.at = function(t, e, i) {
            return t = Math.floor(t), e = Math.floor(e), i = Math.floor(i), isNaN(t) || 0 > t || t > this.cx - 1 ? 0 : isNaN(e) || 0 > e || e > this.cy - 1 ? 0 : isNaN(i) || 0 > i || i > this.cz - 1 ? 0 : this.arr[t][e][i]
        }, h.set = function(t, e, i, s) {
            t = Math.floor(t), e = Math.floor(e), i = Math.floor(i), isNaN(t) || 0 > t || t > this.cx - 1 || isNaN(e) || 0 > e || e > this.cy - 1 || isNaN(i) || 0 > i || i > this.cz - 1 || (this.arr[t][e][i] = s)
        }, h.getAsJSON = function() {
            return JSON.stringify({
                c2array: !0,
                size: [this.cx, this.cy, this.cz],
                data: this.arr
            })
        }, h.saveToJSON = function() {
            return {
                size: [this.cx, this.cy, this.cz],
                data: this.arr
            }
        }, h.loadFromJSON = function(t) {
            var e = t.size;
            this.cx = e[0], this.cy = e[1], this.cz = e[2], this.arr = t.data
        }, h.setSize = function(e, i, s) {
            if (0 > e && (e = 0), 0 > i && (i = 0), 0 > s && (s = 0), this.cx !== e || this.cy !== i || this.cz !== s) {
                this.cx = e, this.cy = i, this.cz = s;
                var n, r, o, a = this.arr;
                for (a.length = e, n = 0; n < this.cx; n++)
                    for (cr.is_undefined(a[n]) && (a[n] = t()), a[n].length = i, r = 0; r < this.cy; r++)
                        for (cr.is_undefined(a[n][r]) && (a[n][r] = t()), a[n][r].length = s, o = 0; o < this.cz; o++) cr.is_undefined(a[n][r][o]) && (a[n][r][o] = 0)
            }
        }, h.getForX = function() {
            return this.forDepth >= 0 && this.forDepth < this.forX.length ? this.forX[this.forDepth] : 0
        }, h.getForY = function() {
            return this.forDepth >= 0 && this.forDepth < this.forY.length ? this.forY[this.forDepth] : 0
        }, h.getForZ = function() {
            return this.forDepth >= 0 && this.forDepth < this.forZ.length ? this.forZ[this.forDepth] : 0
        }, i.prototype.CompareX = function(t, e, i) {
            return cr.do_cmp(this.at(t, 0, 0), e, i)
        }, i.prototype.CompareXY = function(t, e, i, s) {
            return cr.do_cmp(this.at(t, e, 0), i, s)
        }, i.prototype.CompareXYZ = function(t, e, i, s, n) {
            return cr.do_cmp(this.at(t, e, i), s, n)
        }, h.doForEachTrigger = function(t) {
            this.runtime.pushCopySol(t.solModifiers), t.retrigger(), this.runtime.popSol(t.solModifiers)
        }, i.prototype.ArrForEach = function(t) {
            var e = this.runtime.getCurrentEventStack().current_event;
            this.forDepth++;
            var i = this.forDepth;
            switch (i === this.forX.length ? (this.forX.push(0), this.forY.push(0), this.forZ.push(0)) : (this.forX[i] = 0, this.forY[i] = 0, this.forZ[i] = 0), t) {
                case 0:
                    for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++)
                        for (this.forY[i] = 0; this.forY[i] < this.cy; this.forY[i]++)
                            for (this.forZ[i] = 0; this.forZ[i] < this.cz; this.forZ[i]++) this.doForEachTrigger(e);
                    break;
                case 1:
                    for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++)
                        for (this.forY[i] = 0; this.forY[i] < this.cy; this.forY[i]++) this.doForEachTrigger(e);
                    break;
                case 2:
                    for (this.forX[i] = 0; this.forX[i] < this.cx; this.forX[i]++) this.doForEachTrigger(e)
            }
            return this.forDepth--, !1
        }, i.prototype.CompareCurrent = function(t, e) {
            return cr.do_cmp(this.at(this.getForX(), this.getForY(), this.getForZ()), t, e)
        }, i.prototype.Contains = function(t) {
            var e, i, s;
            for (e = 0; e < this.cx; e++)
                for (i = 0; i < this.cy; i++)
                    for (s = 0; s < this.cz; s++)
                        if (this.arr[e][i][s] === t) return !0;
            return !1
        }, i.prototype.IsEmpty = function() {
            return 0 === this.cx || 0 === this.cy || 0 === this.cz
        }, i.prototype.CompareSize = function(t, e, i) {
            var s = 0;
            switch (t) {
                case 0:
                    s = this.cx;
                    break;
                case 1:
                    s = this.cy;
                    break;
                case 2:
                    s = this.cz
            }
            return cr.do_cmp(s, e, i)
        }, o.cnds = new i, s.prototype.Clear = function() {
            var t, e, i;
            for (t = 0; t < this.cx; t++)
                for (e = 0; e < this.cy; e++)
                    for (i = 0; i < this.cz; i++) this.arr[t][e][i] = 0
        }, s.prototype.SetSize = function(t, e, i) {
            this.setSize(t, e, i)
        }, s.prototype.SetX = function(t, e) {
            this.set(t, 0, 0, e)
        }, s.prototype.SetXY = function(t, e, i) {
            this.set(t, e, 0, i)
        }, s.prototype.SetXYZ = function(t, e, i, s) {
            this.set(t, e, i, s)
        }, s.prototype.Push = function(e, i, s) {
            var n = 0,
                r = 0,
                o = 0,
                a = this.arr;
            switch (s) {
                case 0:
                    for (0 === e ? (n = a.length, a.push(t())) : (n = 0, a.unshift(t())), a[n].length = this.cy; r < this.cy; r++)
                        for (a[n][r] = t(), a[n][r].length = this.cz, o = 0; o < this.cz; o++) a[n][r][o] = i;
                    this.cx++;
                    break;
                case 1:
                    for (; n < this.cx; n++)
                        for (0 === e ? (r = a[n].length, a[n].push(t())) : (r = 0, a[n].unshift(t())), a[n][r].length = this.cz, o = 0; o < this.cz; o++) a[n][r][o] = i;
                    this.cy++;
                    break;
                case 2:
                    for (; n < this.cx; n++)
                        for (r = 0; r < this.cy; r++) 0 === e ? a[n][r].push(i) : a[n][r].unshift(i);
                    this.cz++
            }
        }, s.prototype.Pop = function(t, i) {
            var s = 0,
                n = 0,
                r = this.arr;
            switch (i) {
                case 0:
                    if (0 === this.cx) break;
                    e(0 === t ? r.pop() : r.shift()), this.cx--;
                    break;
                case 1:
                    if (0 === this.cy) break;
                    for (; s < this.cx; s++) e(0 === t ? r[s].pop() : r[s].shift());
                    this.cy--;
                    break;
                case 2:
                    if (0 === this.cz) break;
                    for (; s < this.cx; s++)
                        for (n = 0; n < this.cy; n++) 0 === t ? r[s][n].pop() : r[s][n].shift();
                    this.cz--
            }
        }, s.prototype.Reverse = function(t) {
            var e = 0,
                i = 0,
                s = this.arr;
            if (0 !== this.cx && 0 !== this.cy && 0 !== this.cz) switch (t) {
                case 0:
                    s.reverse();
                    break;
                case 1:
                    for (; e < this.cx; e++) s[e].reverse();
                    break;
                case 2:
                    for (; e < this.cx; e++)
                        for (i = 0; i < this.cy; i++) s[e][i].reverse();
                    this.cz--
            }
        }, s.prototype.Sort = function(t) {
            var e = 0,
                i = 0,
                s = this.arr;
            if (0 !== this.cx && 0 !== this.cy && 0 !== this.cz) switch (t) {
                case 0:
                    s.sort(function(t, e) {
                        return n(t[0][0], e[0][0])
                    });
                    break;
                case 1:
                    for (; e < this.cx; e++) s[e].sort(function(t, e) {
                        return n(t[0], e[0])
                    });
                    break;
                case 2:
                    for (; e < this.cx; e++)
                        for (i = 0; i < this.cy; i++) s[e][i].sort(n)
            }
        }, s.prototype.Delete = function(t, i) {
            var s = 0,
                n = 0;
            t = Math.floor(t);
            var r = this.arr;
            if (!(0 > t)) switch (i) {
                case 0:
                    if (t >= this.cx) break;
                    e(r[t]), r.splice(t, 1), this.cx--;
                    break;
                case 1:
                    if (t >= this.cy) break;
                    for (; s < this.cx; s++) e(r[s][t]), r[s].splice(t, 1);
                    this.cy--;
                    break;
                case 2:
                    if (t >= this.cz) break;
                    for (; s < this.cx; s++)
                        for (n = 0; n < this.cy; n++) r[s][n].splice(t, 1);
                    this.cz--
            }
        }, s.prototype.Insert = function(e, i, s) {
            var n = 0,
                r = 0,
                o = 0;
            i = Math.floor(i);
            var a = this.arr;
            if (!(0 > i)) switch (s) {
                case 0:
                    if (i > this.cx) return;
                    for (n = i, a.splice(n, 0, t()), a[n].length = this.cy; r < this.cy; r++)
                        for (a[n][r] = t(), a[n][r].length = this.cz, o = 0; o < this.cz; o++) a[n][r][o] = e;
                    this.cx++;
                    break;
                case 1:
                    if (i > this.cy) return;
                    for (; n < this.cx; n++)
                        for (r = i, a[n].splice(r, 0, t()), a[n][r].length = this.cz, o = 0; o < this.cz; o++) a[n][r][o] = e;
                    this.cy++;
                    break;
                case 2:
                    if (i > this.cz) return;
                    for (; n < this.cx; n++)
                        for (r = 0; r < this.cy; r++) a[n][r].splice(i, 0, e);
                    this.cz++
            }
        }, s.prototype.JSONLoad = function(t) {
            var e;
            try {
                e = JSON.parse(t)
            } catch (i) {
                return
            }
            if (e.c2array) {
                var s = e.size;
                this.cx = s[0], this.cy = s[1], this.cz = s[2], this.arr = e.data
            }
        }, s.prototype.JSONDownload = function(t) {
            var e = document.createElement("a");
            if ("undefined" == typeof e.download) {
                var i = "data:text/html," + encodeURIComponent("<p><a download='" + t + "' href=\"data:application/json," + encodeURIComponent(this.getAsJSON()) + '">Download link</a></p>');
                window.open(i)
            } else {
                var s = document.getElementsByTagName("body")[0];
                e.textContent = t, e.href = "data:application/json," + encodeURIComponent(this.getAsJSON()), e.download = t, s.appendChild(e);
                var n = document.createEvent("MouseEvent");
                n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(n), s.removeChild(e)
            }
        }, o.acts = new s, r.prototype.At = function(t, e, i, s) {
            var n = i || 0,
                r = s || 0;
            t.set_any(this.at(e, n, r))
        }, r.prototype.Width = function(t) {
            t.set_int(this.cx)
        }, r.prototype.Height = function(t) {
            t.set_int(this.cy)
        }, r.prototype.Depth = function(t) {
            t.set_int(this.cz)
        }, r.prototype.CurX = function(t) {
            t.set_int(this.getForX())
        }, r.prototype.CurY = function(t) {
            t.set_int(this.getForY())
        }, r.prototype.CurZ = function(t) {
            t.set_int(this.getForZ())
        }, r.prototype.CurValue = function(t) {
            t.set_any(this.at(this.getForX(), this.getForY(), this.getForZ()))
        }, r.prototype.Front = function(t) {
            t.set_any(this.at(0, 0, 0))
        }, r.prototype.Back = function(t) {
            t.set_any(this.at(this.cx - 1, 0, 0))
        }, r.prototype.IndexOf = function(t, e) {
            for (var i = 0; i < this.cx; i++)
                if (this.arr[i][0][0] === e) return void t.set_int(i);
            t.set_int(-1)
        }, r.prototype.LastIndexOf = function(t, e) {
            for (var i = this.cx - 1; i >= 0; i--)
                if (this.arr[i][0][0] === e) return void t.set_int(i);
            t.set_int(-1)
        }, r.prototype.AsJSON = function(t) {
            t.set_string(this.getAsJSON())
        }, o.exps = new r
    }(), cr.plugins_.Audio = function(t) {
        this.runtime = t
    },
    function() {
        function t(t) {
            var e = i(t);
            return isFinite(e) || (e = 0), 0 > e && (e = 0), e > 1 && (e = 1), e
        }

        function e(t) {
            return 0 > t && (t = 0), t > 1 && (t = 1), s(t)
        }

        function i(t) {
            return Math.pow(10, t / 20)
        }

        function s(t) {
            return Math.log(t) / Math.log(10) * 20
        }

        function n(t) {
            return t = t.toLowerCase(), pt.hasOwnProperty(t) && pt[t].length ? pt[t][0].getInputNode() : X.destination
        }

        function r() {
            return X.createGain ? X.createGain() : X.createGainNode()
        }

        function o(t) {
            return X.createDelay ? X.createDelay(t) : X.createDelayNode(t)
        }

        function a(t, e) {
            t.start ? t.start(e || 0) : t.noteOn(e || 0)
        }

        function h(t, e, i, s) {
            t.start ? t.start(s || 0, e) : t.noteGrainOn(s || 0, e, i - e)
        }

        function c(t) {
            try {
                t.stop ? t.stop(0) : t.noteOff(0)
            } catch (e) {}
        }

        function l(t, e, i, s) {
            if (t) {
                if (t.cancelScheduledValues(0), 0 === s) return void(t.value = e);
                var n = X.currentTime;
                switch (s += n, i) {
                    case 0:
                        t.setValueAtTime(e, s);
                        break;
                    case 1:
                        t.setValueAtTime(t.value, n), t.linearRampToValueAtTime(e, s);
                        break;
                    case 2:
                        t.setValueAtTime(t.value, n), t.exponentialRampToValueAtTime(e, s)
                }
            }
        }

        function u(t, e, i, s, n, o) {
            this.type = "filter", this.params = [t, e, i, s, n, o], this.inputNode = r(), this.wetNode = r(), this.wetNode.gain.value = o, this.dryNode = r(), this.dryNode.gain.value = 1 - o, this.filterNode = X.createBiquadFilter(), "number" == typeof this.filterNode.type ? this.filterNode.type = t : this.filterNode.type = dt[t], this.filterNode.frequency.value = e, this.filterNode.detune && (this.filterNode.detune.value = i), this.filterNode.Q.value = s, this.filterNode.gain.value = n, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode)
        }

        function p(t, e, i) {
            this.type = "delay", this.params = [t, e, i], this.inputNode = r(), this.wetNode = r(), this.wetNode.gain.value = i, this.dryNode = r(), this.dryNode.gain.value = 1 - i, this.mainNode = r(), this.delayNode = o(t), this.delayNode.delayTime.value = t, this.delayGainNode = r(), this.delayGainNode.gain.value = e, this.inputNode.connect(this.mainNode), this.inputNode.connect(this.dryNode), this.mainNode.connect(this.wetNode), this.mainNode.connect(this.delayNode), this.delayNode.connect(this.delayGainNode), this.delayGainNode.connect(this.mainNode)
        }

        function d(t, e, i, s) {
            this.type = "convolve", this.params = [e, i, s], this.inputNode = r(), this.wetNode = r(), this.wetNode.gain.value = i, this.dryNode = r(), this.dryNode.gain.value = 1 - i, this.convolveNode = X.createConvolver(), t && (this.convolveNode.normalize = e, this.convolveNode.buffer = t), this.inputNode.connect(this.convolveNode), this.inputNode.connect(this.dryNode), this.convolveNode.connect(this.wetNode)
        }

        function f(t, e, i, s, n) {
            this.type = "flanger", this.params = [t, e, i, s, n], this.inputNode = r(), this.dryNode = r(), this.dryNode.gain.value = 1 - n / 2, this.wetNode = r(), this.wetNode.gain.value = n / 2, this.feedbackNode = r(), this.feedbackNode.gain.value = s, this.delayNode = o(t + e), this.delayNode.delayTime.value = t, this.oscNode = X.createOscillator(), this.oscNode.frequency.value = i, this.oscGainNode = r(), this.oscGainNode.gain.value = e, this.inputNode.connect(this.delayNode), this.inputNode.connect(this.dryNode), this.delayNode.connect(this.wetNode), this.delayNode.connect(this.feedbackNode), this.feedbackNode.connect(this.delayNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.delayNode.delayTime), a(this.oscNode)
        }

        function g(t, e, i, s, n, o) {
            this.type = "phaser", this.params = [t, e, i, s, n, o], this.inputNode = r(), this.dryNode = r(), this.dryNode.gain.value = 1 - o / 2, this.wetNode = r(), this.wetNode.gain.value = o / 2, this.filterNode = X.createBiquadFilter(), "number" == typeof this.filterNode.type ? this.filterNode.type = 7 : this.filterNode.type = "allpass", this.filterNode.frequency.value = t, this.filterNode.detune && (this.filterNode.detune.value = e), this.filterNode.Q.value = i, this.oscNode = X.createOscillator(), this.oscNode.frequency.value = n, this.oscGainNode = r(), this.oscGainNode.gain.value = s, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.filterNode.frequency), a(this.oscNode)
        }

        function y(t) {
            this.type = "gain", this.params = [t], this.node = r(), this.node.gain.value = t
        }

        function m(t, e) {
            this.type = "tremolo", this.params = [t, e], this.node = r(), this.node.gain.value = 1 - e / 2, this.oscNode = X.createOscillator(), this.oscNode.frequency.value = t, this.oscGainNode = r(), this.oscGainNode.gain.value = e / 2, this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.node.gain), a(this.oscNode)
        }

        function _(t, e) {
            this.type = "ringmod", this.params = [t, e], this.inputNode = r(), this.wetNode = r(), this.wetNode.gain.value = e, this.dryNode = r(), this.dryNode.gain.value = 1 - e, this.ringNode = r(), this.ringNode.gain.value = 0, this.oscNode = X.createOscillator(), this.oscNode.frequency.value = t, this.oscNode.connect(this.ringNode.gain), a(this.oscNode), this.inputNode.connect(this.ringNode), this.inputNode.connect(this.dryNode), this.ringNode.connect(this.wetNode)
        }

        function v(t, e, s, n, o) {
            this.type = "distortion", this.params = [t, e, s, n, o], this.inputNode = r(), this.preGain = r(), this.postGain = r(), this.setDrive(s, i(n)), this.wetNode = r(), this.wetNode.gain.value = o, this.dryNode = r(), this.dryNode.gain.value = 1 - o, this.waveShaper = X.createWaveShaper(), this.curve = new Float32Array(65536), this.generateColortouchCurve(t, e), this.waveShaper.curve = this.curve, this.inputNode.connect(this.preGain), this.inputNode.connect(this.dryNode), this.preGain.connect(this.waveShaper), this.waveShaper.connect(this.postGain), this.postGain.connect(this.wetNode)
        }

        function b(t, e) {
            return 1 - Math.exp(-e * t)
        }

        function w(t, e, i, s, n) {
            this.type = "compressor", this.params = [t, e, i, s, n], this.node = X.createDynamicsCompressor();
            try {
                this.node.threshold.value = t, this.node.knee.value = e, this.node.ratio.value = i, this.node.attack.value = s, this.node.release.value = n
            } catch (r) {}
        }

        function x(t, e) {
            this.type = "analyser", this.params = [t, e], this.node = X.createAnalyser(), this.node.fftSize = t, this.node.smoothingTimeConstant = e, this.freqBins = new Float32Array(this.node.frequencyBinCount), this.signal = new Uint8Array(t), this.peak = 0, this.rms = 0
        }

        function S() {
            this.obj = null, this.loadUid = 0
        }

        function T(t, e) {
            this.src = t, this.myapi = V, this.is_music = e, this.added_end_listener = !1;
            var i = this;
            this.outNode = null, this.mediaSourceNode = null, this.panWhenReady = [], this.seekWhenReady = 0, this.pauseWhenReady = !1, this.supportWebAudioAPI = !1, this.failedToLoad = !1, this.wasEverReady = !1, V === z && e && !ut && (this.myapi = W, this.outNode = r()), this.bufferObject = null, this.audioData = null;
            var s;
            switch (this.myapi) {
                case W:
                    this.bufferObject = new Audio, this.bufferObject.crossOrigin = "anonymous", this.bufferObject.addEventListener("canplaythrough", function() {
                        i.wasEverReady = !0
                    }), V === z && X.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.supportWebAudioAPI = !0, this.bufferObject.addEventListener("canplay", function() {
                        i.mediaSourceNode || (i.mediaSourceNode = X.createMediaElementSource(i.bufferObject), i.mediaSourceNode.connect(i.outNode))
                    })), this.bufferObject.autoplay = !1, this.bufferObject.preload = "auto", this.bufferObject.src = t;
                    break;
                case z:
                    B.isWKWebView ? B.fetchLocalFileViaCordovaAsArrayBuffer(t, function(t) {
                        i.audioData = t, i.decodeAudioBuffer()
                    }, function(t) {
                        i.failedToLoad = !0
                    }) : (s = new XMLHttpRequest, s.open("GET", t, !0), s.responseType = "arraybuffer", s.onload = function() {
                        i.audioData = s.response, i.decodeAudioBuffer()
                    }, s.onerror = function() {
                        i.failedToLoad = !0
                    }, s.send());
                    break;
                case G:
                    this.bufferObject = !0;
                    break;
                case U:
                    this.bufferObject = !0
            }
        }

        function O(t, e) {
            var i = this;
            this.tag = e, this.fresh = !0, this.stopped = !0, this.src = t.src, this.buffer = t, this.myapi = V, this.is_music = t.is_music, this.playbackRate = 1, this.hasPlaybackEnded = !0, this.resume_me = !1, this.is_paused = !1, this.resume_position = 0, this.looping = !1, this.is_muted = !1, this.is_silent = !1, this.volume = 1, this.onended_handler = function(t) {
                if (!i.is_paused && !i.resume_me) {
                    var e = this;
                    e || (e = t.target), e === i.active_buffer && (i.hasPlaybackEnded = !0, i.stopped = !0, j = i.tag, B.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, N))
                }
            }, this.active_buffer = null, this.isTimescaled = 1 === K && !this.is_music || 2 === K, this.mutevol = 1, this.startTime = this.isTimescaled ? B.kahanTime.sum : B.wallTime.sum, this.gainNode = null, this.pannerNode = null, this.pannerEnabled = !1, this.objectTracker = null, this.panX = 0, this.panY = 0, this.panAngle = 0, this.panConeInner = 0, this.panConeOuter = 0, this.panConeOuterGain = 0, this.instanceObject = null;
            var s = !1;
            switch (this.myapi !== z || this.buffer.myapi !== W || this.buffer.supportWebAudioAPI || (this.myapi = W), this.myapi) {
                case W:
                    this.is_music ? (this.instanceObject = t.bufferObject, s = !t.added_end_listener, t.added_end_listener = !0) : (this.instanceObject = new Audio, this.instanceObject.crossOrigin = "anonymous", this.instanceObject.autoplay = !1, this.instanceObject.src = t.bufferObject.src, s = !0), s && this.instanceObject.addEventListener("ended", function() {
                        j = i.tag, i.stopped = !0, B.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, N)
                    });
                    break;
                case z:
                    this.gainNode = r(), this.gainNode.connect(n(e)), this.buffer.myapi === z ? t.bufferObject && (this.instanceObject = X.createBufferSource(), this.instanceObject.buffer = t.bufferObject, this.instanceObject.connect(this.gainNode)) : (this.instanceObject = this.buffer.bufferObject, this.buffer.outNode.connect(this.gainNode), this.buffer.added_end_listener || (this.buffer.added_end_listener = !0, this.buffer.bufferObject.addEventListener("ended", function() {
                        j = i.tag, i.stopped = !0, B.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, N)
                    })));
                    break;
                case G:
                    this.instanceObject = new window.Media(D + this.src, null, null, function(t) {
                        t === window.Media.MEDIA_STOPPED && (i.hasPlaybackEnded = !0, i.stopped = !0, j = i.tag, B.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, N))
                    });
                    break;
                case U:
                    this.instanceObject = !0
            }
        }

        function A(t, e) {
            var i = t.isPlaying() ? 1 : 0,
                s = e.isPlaying() ? 1 : 0;
            return i === s ? 0 : s > i ? 1 : -1
        }

        function C(t, e) {
            if (cr.clearArray(_t), !t.length) return !Y || Y.hasEnded() ? void 0 : (cr.clearArray(_t), void(_t[0] = Y));
            var i, s, n;
            for (i = 0, s = J.length; s > i; i++) n = J[i], cr.equals_nocase(t, n.tag) && _t.push(n);
            e && _t.sort(A)
        }

        function k(t) {
            var e, i, s, n, r = X.destination;
            if (pt.hasOwnProperty(t) && (s = pt[t], s.length))
                for (r = s[0].getInputNode(), e = 0, i = s.length; i > e; e++) n = s[e], e + 1 === i ? n.connectTo(X.destination) : n.connectTo(s[e + 1].getInputNode());
            for (C(t), e = 0, i = _t.length; i > e; e++) _t[e].reconnect(r);
            at && ht === t && (at.disconnect(), at.connect(r))
        }

        function E(t, e) {
            pt.hasOwnProperty(t) ? pt[t].push(e) : pt[t] = [e], k(t)
        }

        function P() {}

        function I() {}

        function M() {}

        function R(t, e) {
            var i = null;
            return pt.hasOwnProperty(t) && (i = pt[t]), i && e >= 0 && e < i.length && i[e].freqBins ? i[e] : null
        }
        var L = cr.plugins_.Audio.prototype;
        L.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var F = L.Type.prototype;
        F.onCreate = function() {};
        var B = null,
            N = null,
            j = "",
            D = "",
            W = 0,
            z = 1,
            G = 2,
            U = 3,
            V = W,
            X = null,
            q = [],
            J = [],
            Y = null,
            H = !1,
            K = 0,
            Q = !1,
            Z = 1,
            $ = 0,
            tt = 0,
            et = !1,
            it = 1,
            st = 1,
            nt = 10,
            rt = 1e4,
            ot = 1,
            at = null,
            ht = "",
            ct = !1,
            lt = [],
            ut = !1,
            pt = {},
            dt = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"];
        u.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, u.prototype.remove = function() {
            this.inputNode.disconnect(), this.filterNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, u.prototype.getInputNode = function() {
            return this.inputNode
        }, u.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    e /= 100, 0 > e && (e = 0), e > 1 && (e = 1), this.params[5] = e, l(this.wetNode.gain, e, i, s), l(this.dryNode.gain, 1 - e, i, s);
                    break;
                case 1:
                    this.params[1] = e, l(this.filterNode.frequency, e, i, s);
                    break;
                case 2:
                    this.params[2] = e, l(this.filterNode.detune, e, i, s);
                    break;
                case 3:
                    this.params[3] = e, l(this.filterNode.Q, e, i, s);
                    break;
                case 4:
                    this.params[4] = e, l(this.filterNode.gain, e, i, s)
            }
        }, p.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, p.prototype.remove = function() {
            this.inputNode.disconnect(), this.mainNode.disconnect(), this.delayNode.disconnect(), this.delayGainNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, p.prototype.getInputNode = function() {
            return this.inputNode
        }, p.prototype.setParam = function(e, i, s, n) {
            switch (e) {
                case 0:
                    i /= 100, 0 > i && (i = 0), i > 1 && (i = 1), this.params[2] = i, l(this.wetNode.gain, i, s, n), l(this.dryNode.gain, 1 - i, s, n);
                    break;
                case 4:
                    this.params[1] = t(i), l(this.delayGainNode.gain, t(i), s, n);
                    break;
                case 5:
                    this.params[0] = i, l(this.delayNode.delayTime, i, s, n)
            }
        }, d.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, d.prototype.remove = function() {
            this.inputNode.disconnect(), this.convolveNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, d.prototype.getInputNode = function() {
            return this.inputNode
        }, d.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    e /= 100, 0 > e && (e = 0), e > 1 && (e = 1), this.params[1] = e, l(this.wetNode.gain, e, i, s), l(this.dryNode.gain, 1 - e, i, s)
            }
        }, f.prototype.connectTo = function(t) {
            this.dryNode.disconnect(), this.dryNode.connect(t), this.wetNode.disconnect(), this.wetNode.connect(t)
        }, f.prototype.remove = function() {
            this.inputNode.disconnect(), this.delayNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect(), this.feedbackNode.disconnect()
        }, f.prototype.getInputNode = function() {
            return this.inputNode
        }, f.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    e /= 100, 0 > e && (e = 0), e > 1 && (e = 1), this.params[4] = e, l(this.wetNode.gain, e / 2, i, s), l(this.dryNode.gain, 1 - e / 2, i, s);
                    break;
                case 6:
                    this.params[1] = e / 1e3, l(this.oscGainNode.gain, e / 1e3, i, s);
                    break;
                case 7:
                    this.params[2] = e, l(this.oscNode.frequency, e, i, s);
                    break;
                case 8:
                    this.params[3] = e / 100, l(this.feedbackNode.gain, e / 100, i, s)
            }
        }, g.prototype.connectTo = function(t) {
            this.dryNode.disconnect(), this.dryNode.connect(t), this.wetNode.disconnect(), this.wetNode.connect(t)
        }, g.prototype.remove = function() {
            this.inputNode.disconnect(), this.filterNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect()
        }, g.prototype.getInputNode = function() {
            return this.inputNode
        }, g.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    e /= 100, 0 > e && (e = 0), e > 1 && (e = 1), this.params[5] = e, l(this.wetNode.gain, e / 2, i, s), l(this.dryNode.gain, 1 - e / 2, i, s);
                    break;
                case 1:
                    this.params[0] = e, l(this.filterNode.frequency, e, i, s);
                    break;
                case 2:
                    this.params[1] = e, l(this.filterNode.detune, e, i, s);
                    break;
                case 3:
                    this.params[2] = e, l(this.filterNode.Q, e, i, s);
                    break;
                case 6:
                    this.params[3] = e, l(this.oscGainNode.gain, e, i, s);
                    break;
                case 7:
                    this.params[4] = e, l(this.oscNode.frequency, e, i, s)
            }
        }, y.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, y.prototype.remove = function() {
            this.node.disconnect()
        }, y.prototype.getInputNode = function() {
            return this.node
        }, y.prototype.setParam = function(e, i, s, n) {
            switch (e) {
                case 4:
                    this.params[0] = t(i), l(this.node.gain, t(i), s, n)
            }
        }, m.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, m.prototype.remove = function() {
            this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.node.disconnect()
        }, m.prototype.getInputNode = function() {
            return this.node
        }, m.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    e /= 100, 0 > e && (e = 0), e > 1 && (e = 1), this.params[1] = e, l(this.node.gain.value, 1 - e / 2, i, s), l(this.oscGainNode.gain.value, e / 2, i, s);
                    break;
                case 7:
                    this.params[0] = e, l(this.oscNode.frequency, e, i, s)
            }
        }, _.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, _.prototype.remove = function() {
            this.oscNode.disconnect(), this.ringNode.disconnect(), this.inputNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, _.prototype.getInputNode = function() {
            return this.inputNode
        }, _.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    e /= 100, 0 > e && (e = 0), e > 1 && (e = 1), this.params[1] = e, l(this.wetNode.gain, e, i, s), l(this.dryNode.gain, 1 - e, i, s);
                    break;
                case 7:
                    this.params[0] = e, l(this.oscNode.frequency, e, i, s)
            }
        }, v.prototype.setDrive = function(t, e) {.01 > t && (t = .01), this.preGain.gain.value = t, this.postGain.gain.value = Math.pow(1 / t, .6) * e
        }, v.prototype.shape = function(t, e, i) {
            var s = 1.05 * i * e,
                n = s - e,
                r = 0 > t ? -1 : 1,
                o = 0 > t ? -t : t,
                a = e > o ? o : e + n * b(o - e, 1 / n);
            return a *= r
        }, v.prototype.generateColortouchCurve = function(t, e) {
            for (var s = i(t), n = i(e), r = 65536, o = r / 2, a = 0, h = 0; o > h; ++h) a = h / o, a = this.shape(a, s, n), this.curve[o + h] = a, this.curve[o - h - 1] = -a
        }, v.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, v.prototype.remove = function() {
            this.inputNode.disconnect(), this.preGain.disconnect(), this.waveShaper.disconnect(), this.postGain.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, v.prototype.getInputNode = function() {
            return this.inputNode
        }, v.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    e /= 100, 0 > e && (e = 0), e > 1 && (e = 1), this.params[4] = e, l(this.wetNode.gain, e, i, s), l(this.dryNode.gain, 1 - e, i, s)
            }
        }, w.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, w.prototype.remove = function() {
            this.node.disconnect()
        }, w.prototype.getInputNode = function() {
            return this.node
        }, w.prototype.setParam = function(t, e, i, s) {}, x.prototype.tick = function() {
            this.node.getFloatFrequencyData(this.freqBins), this.node.getByteTimeDomainData(this.signal);
            var t = this.node.fftSize,
                i = 0;
            this.peak = 0;
            for (var s = 0, n = 0; t > i; i++) n = (this.signal[i] - 128) / 128, 0 > n && (n = -n), this.peak < n && (this.peak = n), s += n * n;
            this.peak = e(this.peak), this.rms = e(Math.sqrt(s / t))
        }, x.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, x.prototype.remove = function() {
            this.node.disconnect()
        }, x.prototype.getInputNode = function() {
            return this.node
        }, x.prototype.setParam = function(t, e, i, s) {}, S.prototype.setObject = function(t) {
            this.obj = t
        }, S.prototype.hasObject = function() {
            return !!this.obj
        }, S.prototype.tick = function(t) {};
        var ft = !1;
        T.prototype.release = function() {
            var t, e, i, s;
            for (t = 0, i = 0, e = J.length; e > t; ++t) s = J[t], J[i] = s, s.buffer === this ? s.stop() : ++i;
            J.length = i, this.bufferObject = null, this.audioData = null
        }, T.prototype.decodeAudioBuffer = function() {
            if (!this.bufferObject && this.audioData) {
                var t = this;
                if (X.decodeAudioData) X.decodeAudioData(this.audioData, function(e) {
                    t.bufferObject = e, t.audioData = null;
                    var i, s, n, r;
                    if (cr.is_undefined(t.playTagWhenReady) || Q) {
                        if (!cr.is_undefined(t.convolveWhenReady)) {
                            var o = t.convolveWhenReady.convolveNode;
                            o.normalize = t.normalizeWhenReady, o.buffer = e
                        }
                    } else if (t.panWhenReady.length) {
                        for (s = 0, n = t.panWhenReady.length; n > s; s++)
                            if (i = t.panWhenReady[s], r = new O(t, i.thistag), r.setPannerEnabled(!0), "undefined" == typeof i.objUid || (i.obj = B.getObjectByUID(i.objUid), i.obj)) {
                                if (i.obj) {
                                    var a = cr.rotatePtAround(i.obj.x, i.obj.y, -i.obj.layer.getAngle(), $, tt, !0),
                                        h = cr.rotatePtAround(i.obj.x, i.obj.y, -i.obj.layer.getAngle(), $, tt, !1);
                                    r.setPan(a, h, cr.to_degrees(i.obj.angle - i.obj.layer.getAngle()), i.ia, i.oa, i.og), r.setObject(i.obj)
                                } else r.setPan(i.x, i.y, i.a, i.ia, i.oa, i.og);
                                r.play(t.loopWhenReady, t.volumeWhenReady, t.seekWhenReady), t.pauseWhenReady && r.pause(), J.push(r)
                            }
                        cr.clearArray(t.panWhenReady)
                    } else r = new O(t, t.playTagWhenReady || ""), r.play(t.loopWhenReady, t.volumeWhenReady, t.seekWhenReady), t.pauseWhenReady && r.pause(), J.push(r)
                }, function(e) {
                    t.failedToLoad = !0
                });
                else if (this.bufferObject = X.createBuffer(this.audioData, !1), this.audioData = null, cr.is_undefined(this.playTagWhenReady) || Q) {
                    if (!cr.is_undefined(this.convolveWhenReady)) {
                        var e = this.convolveWhenReady.convolveNode;
                        e.normalize = this.normalizeWhenReady, e.buffer = this.bufferObject
                    }
                } else {
                    var i = new O(this, this.playTagWhenReady);
                    i.play(this.loopWhenReady, this.volumeWhenReady, this.seekWhenReady), this.pauseWhenReady && i.pause(), J.push(i)
                }
            }
        }, T.prototype.isLoaded = function() {
            switch (this.myapi) {
                case W:
                    var t = this.bufferObject.readyState >= 4;
                    return t && (this.wasEverReady = !0), t || this.wasEverReady;
                case z:
                    return !!this.audioData || !!this.bufferObject;
                case G:
                    return !0;
                case U:
                    return !0
            }
            return !1
        }, T.prototype.isLoadedAndDecoded = function() {
            switch (this.myapi) {
                case W:
                    return this.isLoaded();
                case z:
                    return !!this.bufferObject;
                case G:
                    return !0;
                case U:
                    return !0
            }
            return !1
        }, T.prototype.hasFailedToLoad = function() {
            switch (this.myapi) {
                case W:
                    return !!this.bufferObject.error;
                case z:
                    return this.failedToLoad
            }
            return !1
        }, O.prototype.hasEnded = function() {
            switch (this.myapi) {
                case W:
                    return this.instanceObject.ended;
                case z:
                    return this.buffer.myapi === z ? this.fresh || this.stopped || !this.instanceObject.loop ? this.is_paused ? !1 : this.hasPlaybackEnded : !1 : this.instanceObject.ended;
                case G:
                    return this.hasPlaybackEnded;
                case U:
            }
            return !0
        }, O.prototype.canBeRecycled = function() {
            return this.fresh || this.stopped ? !0 : this.hasEnded()
        }, O.prototype.setPannerEnabled = function(t) {
            if (V === z)
                if (!this.pannerEnabled && t) {
                    if (!this.gainNode) return;
                    this.pannerNode || (this.pannerNode = X.createPanner(), "number" == typeof this.pannerNode.panningModel ? this.pannerNode.panningModel = it : this.pannerNode.panningModel = ["equalpower", "HRTF", "soundfield"][it], "number" == typeof this.pannerNode.distanceModel ? this.pannerNode.distanceModel = st : this.pannerNode.distanceModel = ["linear", "inverse", "exponential"][st], this.pannerNode.refDistance = nt, this.pannerNode.maxDistance = rt, this.pannerNode.rolloffFactor = ot), this.gainNode.disconnect(), this.gainNode.connect(this.pannerNode), this.pannerNode.connect(n(this.tag)), this.pannerEnabled = !0
                } else if (this.pannerEnabled && !t) {
                if (!this.gainNode) return;
                this.pannerNode.disconnect(), this.gainNode.disconnect(), this.gainNode.connect(n(this.tag)), this.pannerEnabled = !1
            }
        }, O.prototype.setPan = function(t, e, i, s, n, r) {
            this.pannerEnabled && V === z && (this.pannerNode.setPosition(t, e, 0), this.pannerNode.setOrientation(Math.cos(cr.to_radians(i)), Math.sin(cr.to_radians(i)), 0), this.pannerNode.coneInnerAngle = s, this.pannerNode.coneOuterAngle = n, this.pannerNode.coneOuterGain = r, this.panX = t, this.panY = e, this.panAngle = i, this.panConeInner = s, this.panConeOuter = n, this.panConeOuterGain = r)
        }, O.prototype.setObject = function(t) {
            this.pannerEnabled && V === z && (this.objectTracker || (this.objectTracker = new S), this.objectTracker.setObject(t))
        }, O.prototype.tick = function(t) {
            if (this.pannerEnabled && V === z && this.objectTracker && this.objectTracker.hasObject() && this.isPlaying()) {
                this.objectTracker.tick(t);
                var e = this.objectTracker.obj,
                    i = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), $, tt, !0),
                    s = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), $, tt, !1);
                this.pannerNode.setPosition(i, s, 0);
                var n = 0;
                "undefined" != typeof this.objectTracker.obj.angle && (n = e.angle - e.layer.getAngle(), this.pannerNode.setOrientation(Math.cos(n), Math.sin(n), 0))
            }
        }, O.prototype.play = function(t, e, i, s) {
            var n = this.instanceObject;
            this.looping = t, this.volume = e;
            var r = i || 0;
            switch (s = s || 0, this.myapi) {
                case W:
                    if (1 !== n.playbackRate && (n.playbackRate = 1), n.volume !== e * Z && (n.volume = e * Z), n.loop !== t && (n.loop = t), n.muted && (n.muted = !1), n.currentTime !== r) try {
                        n.currentTime = r
                    } catch (o) {}
                    if (this.is_music && ct && !B.isInUserInputEvent) lt.push(this);
                    else try {
                        this.instanceObject.play()
                    } catch (c) {
                        console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", c)
                    }
                    break;
                case z:
                    if (this.muted = !1, this.mutevol = 1, this.buffer.myapi === z) this.gainNode.gain.value = e * Z, this.fresh || (this.instanceObject = X.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode)), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = t, this.hasPlaybackEnded = !1, 0 === r ? a(this.instanceObject, s) : h(this.instanceObject, r, this.getDuration(), s);
                    else {
                        if (1 !== n.playbackRate && (n.playbackRate = 1), n.loop !== t && (n.loop = t), n.volume = e * Z, n.currentTime !== r) try {
                            n.currentTime = r
                        } catch (o) {}
                        this.is_music && ct && !B.isInUserInputEvent ? lt.push(this) : n.play()
                    }
                    break;
                case G:
                    (!this.fresh && this.stopped || 0 !== r) && n.seekTo(r), n.play(), this.hasPlaybackEnded = !1;
                    break;
                case U:
                    B.isDirectCanvas ? AppMobi.context.playSound(this.src, t) : AppMobi.player.playSound(this.src, t)
            }
            this.playbackRate = 1, this.startTime = (this.isTimescaled ? B.kahanTime.sum : B.wallTime.sum) - r, this.fresh = !1, this.stopped = !1, this.is_paused = !1
        }, O.prototype.stop = function() {
            switch (this.myapi) {
                case W:
                    this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case z:
                    this.buffer.myapi === z ? c(this.instanceObject) : this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case G:
                    this.instanceObject.stop();
                    break;
                case U:
                    B.isDirectCanvas && AppMobi.context.stopSound(this.src)
            }
            this.stopped = !0, this.is_paused = !1
        }, O.prototype.pause = function() {
            if (!(this.fresh || this.stopped || this.hasEnded() || this.is_paused)) {
                switch (this.myapi) {
                    case W:
                        this.instanceObject.paused || this.instanceObject.pause();
                        break;
                    case z:
                        this.buffer.myapi === z ? (this.resume_position = this.getPlaybackTime(!0), this.looping && (this.resume_position = this.resume_position % this.getDuration()), this.is_paused = !0, c(this.instanceObject)) : this.instanceObject.paused || this.instanceObject.pause();
                        break;
                    case G:
                        this.instanceObject.pause();
                        break;
                    case U:
                        B.isDirectCanvas && AppMobi.context.stopSound(this.src)
                }
                this.is_paused = !0
            }
        }, O.prototype.resume = function() {
            if (!(this.fresh || this.stopped || this.hasEnded()) && this.is_paused) {
                switch (this.myapi) {
                    case W:
                        this.instanceObject.play();
                        break;
                    case z:
                        this.buffer.myapi === z ? (this.instanceObject = X.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = this.looping, this.gainNode.gain.value = Z * this.volume * this.mutevol, this.updatePlaybackRate(), this.startTime = (this.isTimescaled ? B.kahanTime.sum : B.wallTime.sum) - this.resume_position / (this.playbackRate || .001), h(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play();
                        break;
                    case G:
                        this.instanceObject.play();
                        break;
                    case U:
                        B.isDirectCanvas && AppMobi.context.resumeSound(this.src)
                }
                this.is_paused = !1
            }
        }, O.prototype.seek = function(t) {
            if (!(this.fresh || this.stopped || this.hasEnded())) switch (this.myapi) {
                case W:
                    try {
                        this.instanceObject.currentTime = t
                    } catch (e) {}
                    break;
                case z:
                    if (this.buffer.myapi === z) this.is_paused ? this.resume_position = t : (this.pause(), this.resume_position = t, this.resume());
                    else try {
                        this.instanceObject.currentTime = t
                    } catch (e) {}
                    break;
                case G:
                    break;
                case U:
                    B.isDirectCanvas && AppMobi.context.seekSound(this.src, t)
            }
        }, O.prototype.reconnect = function(t) {
            this.myapi === z && (this.pannerEnabled ? (this.pannerNode.disconnect(), this.pannerNode.connect(t)) : (this.gainNode.disconnect(), this.gainNode.connect(t)))
        }, O.prototype.getDuration = function(t) {
            var e = 0;
            switch (this.myapi) {
                case W:
                    "undefined" != typeof this.instanceObject.duration && (e = this.instanceObject.duration);
                    break;
                case z:
                    e = this.buffer.bufferObject.duration;
                    break;
                case G:
                    e = this.instanceObject.getDuration();
                    break;
                case U:
                    B.isDirectCanvas && (e = AppMobi.context.getDurationSound(this.src))
            }
            return t && (e /= this.playbackRate || .001), e
        }, O.prototype.getPlaybackTime = function(t) {
            var e = this.getDuration(),
                i = 0;
            switch (this.myapi) {
                case W:
                    "undefined" != typeof this.instanceObject.currentTime && (i = this.instanceObject.currentTime);
                    break;
                case z:
                    if (this.buffer.myapi === z) {
                        if (this.is_paused) return this.resume_position;
                        i = (this.isTimescaled ? B.kahanTime.sum : B.wallTime.sum) - this.startTime
                    } else "undefined" != typeof this.instanceObject.currentTime && (i = this.instanceObject.currentTime);
                    break;
                case G:
                    break;
                case U:
                    B.isDirectCanvas && (i = AppMobi.context.getPlaybackTimeSound(this.src))
            }
            return t && (i *= this.playbackRate), !this.looping && i > e && (i = e), i
        }, O.prototype.isPlaying = function() {
            return !(this.is_paused || this.fresh || this.stopped || this.hasEnded())
        }, O.prototype.shouldSave = function() {
            return !this.fresh && !this.stopped && !this.hasEnded()
        }, O.prototype.setVolume = function(t) {
            this.volume = t, this.updateVolume()
        }, O.prototype.updateVolume = function() {
            var t = this.volume * Z;
            switch (isFinite(t) || (t = 0), this.myapi) {
                case W:
                    "undefined" != typeof this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t);
                    break;
                case z:
                    this.buffer.myapi === z ? this.gainNode.gain.value = t * this.mutevol : "undefined" != typeof this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t);
                    break;
                case G:
                    break;
                case U:
            }
        }, O.prototype.getVolume = function() {
            return this.volume
        }, O.prototype.doSetMuted = function(t) {
            switch (this.myapi) {
                case W:
                    this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t);
                    break;
                case z:
                    this.buffer.myapi === z ? (this.mutevol = t ? 0 : 1, this.gainNode.gain.value = Z * this.volume * this.mutevol) : this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t);
                    break;
                case G:
                    break;
                case U:
            }
        }, O.prototype.setMuted = function(t) {
            this.is_muted = !!t, this.doSetMuted(this.is_muted || this.is_silent)
        }, O.prototype.setSilent = function(t) {
            this.is_silent = !!t, this.doSetMuted(this.is_muted || this.is_silent)
        }, O.prototype.setLooping = function(t) {
            switch (this.looping = t, this.myapi) {
                case W:
                    this.instanceObject.loop !== !!t && (this.instanceObject.loop = !!t);
                    break;
                case z:
                    this.instanceObject.loop !== !!t && (this.instanceObject.loop = !!t);
                    break;
                case G:
                    break;
                case U:
                    B.isDirectCanvas && AppMobi.context.setLoopingSound(this.src, t)
            }
        }, O.prototype.setPlaybackRate = function(t) {
            this.playbackRate = t, this.updatePlaybackRate()
        }, O.prototype.updatePlaybackRate = function() {
            var t = this.playbackRate;
            switch (this.isTimescaled && (t *= B.timescale), this.myapi) {
                case W:
                    this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t);
                    break;
                case z:
                    this.buffer.myapi === z ? this.instanceObject.playbackRate.value !== t && (this.instanceObject.playbackRate.value = t) : this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t);
                    break;
                case G:
                    break;
                case U:
            }
        }, O.prototype.setSuspended = function(t) {
            switch (this.myapi) {
                case W:
                    t ? this.isPlaying() ? (this.resume_me = !0, this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.instanceObject.play(), this.resume_me = !1);
                    break;
                case z:
                    t ? this.isPlaying() ? (this.resume_me = !0, this.buffer.myapi === z ? (this.resume_position = this.getPlaybackTime(!0), this.looping && (this.resume_position = this.resume_position % this.getDuration()), c(this.instanceObject)) : this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.buffer.myapi === z ? (this.instanceObject = X.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = this.looping, this.gainNode.gain.value = Z * this.volume * this.mutevol, this.updatePlaybackRate(), this.startTime = (this.isTimescaled ? B.kahanTime.sum : B.wallTime.sum) - this.resume_position / (this.playbackRate || .001), h(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play(), this.resume_me = !1);
                    break;
                case G:
                    t ? this.isPlaying() ? (this.instanceObject.pause(), this.resume_me = !0) : this.resume_me = !1 : this.resume_me && (this.resume_me = !1, this.instanceObject.play());
                    break;
                case U:
            }
        }, L.Instance = function(t) {
            this.type = t, this.runtime = t.runtime, B = this.runtime, N = this, this.listenerTracker = null, this.listenerZ = -600, this.runtime.isWKWebView && (ut = !0), !(this.runtime.isiOS || this.runtime.isAndroid && (this.runtime.isChrome || this.runtime.isAndroidStockBrowser)) || this.runtime.isCrosswalk || this.runtime.isDomFree || this.runtime.isAmazonWebApp || ut || (ct = !0), X = null, "undefined" != typeof AudioContext ? (V = z, X = new AudioContext) : "undefined" != typeof webkitAudioContext && (V = z, X = new webkitAudioContext), this.runtime.isiOS && X && (X.close && X.close(), "undefined" != typeof AudioContext ? X = new AudioContext : "undefined" != typeof webkitAudioContext && (X = new webkitAudioContext));
            var e = (this.runtime.isAndroid, function() {
                if (!et && X.createBuffer) {
                    var t = X.createBuffer(1, 220, 22050),
                        e = X.createBufferSource();
                    e.buffer = t, e.connect(X.destination), a(e)
                }
            });
            if (ct) {
                var i = function() {
                    var t, e, i;
                    if (ct) {
                        if (!Q)
                            for (t = 0, e = lt.length; e > t; ++t) i = lt[t], i.stopped || i.is_paused || i.instanceObject.play();
                        cr.clearArray(lt)
                    }
                };
                document.addEventListener("touchend", function() {
                    !ft && X && (e(), ft = !0), i()
                }, !0)
            } else ut && document.addEventListener("touchend", function() {
                !ft && X && (e(), ft = !0)
            }, !0); if (V !== z && (this.runtime.isCordova && "undefined" != typeof window.Media ? V = G : this.runtime.isAppMobi && (V = U)), V === G) {
                D = location.href;
                var s = D.lastIndexOf("/");
                s > -1 && (D = D.substr(0, s + 1)), D = D.replace("file://", "")
            }
            if (this.runtime.isSafari && this.runtime.isWindows && "undefined" == typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.runtime.DestroyInstance(this);
            else {
                if (this.runtime.isDirectCanvas) H = this.runtime.isAndroid;
                else try {
                    H = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
                } catch (n) {
                    H = !1
                }
                switch (V) {
                    case W:
                        break;
                    case z:
                        break;
                    case G:
                        break;
                    case U:
                }
                this.runtime.tickMe(this)
            }
        };
        var gt = L.Instance.prototype;
        gt.onCreate = function() {
            this.runtime.audioInstance = this, K = this.properties[0], this.saveload = this.properties[1], this.playinbackground = 0 !== this.properties[2], this.nextPlayTime = 0, it = this.properties[3], st = this.properties[4], this.listenerZ = -this.properties[5], nt = this.properties[6], rt = this.properties[7], ot = this.properties[8], this.listenerTracker = new S;
            var t = this.runtime.draw_width || this.runtime.width,
                e = this.runtime.draw_height || this.runtime.height;
            V === z && (X.listener.setPosition(t / 2, e / 2, this.listenerZ), X.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(t, e) {
                at && at.disconnect(), ht = e.toLowerCase(), at = X.createMediaStreamSource(t), at.connect(n(ht))
            }), this.runtime.addSuspendCallback(function(t) {
                N.onSuspend(t)
            });
            var i = this;
            this.runtime.addDestroyCallback(function(t) {
                i.onInstanceDestroyed(t)
            })
        }, gt.onInstanceDestroyed = function(t) {
            var e, i, s;
            for (e = 0, i = J.length; i > e; e++) s = J[e], s.objectTracker && s.objectTracker.obj === t && (s.objectTracker.obj = null, s.pannerEnabled && s.isPlaying() && s.looping && s.stop());
            this.listenerTracker.obj === t && (this.listenerTracker.obj = null)
        }, gt.saveToJSON = function() {
            var t, e, i, s, n, r, o, a = {
                    silent: Q,
                    masterVolume: Z,
                    listenerZ: this.listenerZ,
                    listenerUid: this.listenerTracker.hasObject() ? this.listenerTracker.obj.uid : -1,
                    playing: [],
                    effects: {}
                },
                h = a.playing;
            for (t = 0, e = J.length; e > t; t++) i = J[t], i.shouldSave() && 3 !== this.saveload && (i.is_music && 1 === this.saveload || (i.is_music || 2 !== this.saveload) && (o = i.getPlaybackTime(), i.looping && (o %= i.getDuration()), s = {
                tag: i.tag,
                buffersrc: i.buffer.src,
                is_music: i.is_music,
                playbackTime: o,
                volume: i.volume,
                looping: i.looping,
                muted: i.is_muted,
                playbackRate: i.playbackRate,
                paused: i.is_paused,
                resume_position: i.resume_position
            }, i.pannerEnabled && (s.pan = {}, r = s.pan, i.objectTracker && i.objectTracker.hasObject() ? r.objUid = i.objectTracker.obj.uid : (r.x = i.panX, r.y = i.panY, r.a = i.panAngle), r.ia = i.panConeInner, r.oa = i.panConeOuter, r.og = i.panConeOuterGain), h.push(s)));
            var c, l = a.effects;
            for (n in pt)
                if (pt.hasOwnProperty(n)) {
                    for (c = [], t = 0, e = pt[n].length; e > t; t++) c.push({
                        type: pt[n][t].type,
                        params: pt[n][t].params
                    });
                    l[n] = c
                }
            return a
        };
        var yt = [];
        gt.loadFromJSON = function(t) {
            var e = t.silent;
            Z = t.masterVolume, this.listenerZ = t.listenerZ, this.listenerTracker.setObject(null);
            var i = t.listenerUid; - 1 !== i && (this.listenerTracker.loadUid = i, yt.push(this.listenerTracker));
            var s, n, r, o, a, h, c, l, b, T, O, A, C, k, P = t.playing;
            if (3 !== this.saveload)
                for (s = 0, n = J.length; n > s; s++) O = J[s], O.is_music && 1 === this.saveload || (O.is_music || 2 !== this.saveload) && O.stop();
            var I, M, R, L;
            for (A in pt)
                if (pt.hasOwnProperty(A))
                    for (s = 0, n = pt[A].length; n > s; s++) pt[A][s].remove();
            cr.wipe(pt);
            for (A in t.effects)
                if (t.effects.hasOwnProperty(A))
                    for (I = t.effects[A], s = 0, n = I.length; n > s; s++) switch (M = I[s].type, R = I[s].params, M) {
                        case "filter":
                            E(A, new u(R[0], R[1], R[2], R[3], R[4], R[5]));
                            break;
                        case "delay":
                            E(A, new p(R[0], R[1], R[2]));
                            break;
                        case "convolve":
                            o = R[2], T = this.getAudioBuffer(o, !1), T.bufferObject ? L = new d(T.bufferObject, R[0], R[1], o) : (L = new d(null, R[0], R[1], o), T.normalizeWhenReady = R[0], T.convolveWhenReady = L), E(A, L);
                            break;
                        case "flanger":
                            E(A, new f(R[0], R[1], R[2], R[3], R[4]));
                            break;
                        case "phaser":
                            E(A, new g(R[0], R[1], R[2], R[3], R[4], R[5]));
                            break;
                        case "gain":
                            E(A, new y(R[0]));
                            break;
                        case "tremolo":
                            E(A, new m(R[0], R[1]));
                            break;
                        case "ringmod":
                            E(A, new _(R[0], R[1]));
                            break;
                        case "distortion":
                            E(A, new v(R[0], R[1], R[2], R[3], R[4]));
                            break;
                        case "compressor":
                            E(A, new w(R[0], R[1], R[2], R[3], R[4]));
                            break;
                        case "analyser":
                            E(A, new x(R[0], R[1]))
                    }
                for (s = 0, n = P.length; n > s; s++) 3 !== this.saveload && (r = P[s], o = r.buffersrc, a = r.is_music, h = r.tag, c = r.playbackTime, l = r.looping, b = r.volume, C = r.pan, k = C && C.hasOwnProperty("objUid") ? C.objUid : -1, a && 1 === this.saveload || (a || 2 !== this.saveload) && (O = this.getAudioInstance(o, h, a, l, b), O ? (O.resume_position = r.resume_position, O.setPannerEnabled(!!C), O.play(l, b, c), O.updatePlaybackRate(), O.updateVolume(), O.doSetMuted(O.is_muted || O.is_silent), r.paused && O.pause(), r.muted && O.setMuted(!0), O.doSetMuted(O.is_muted || O.is_silent), C && (-1 !== k ? (O.objectTracker = O.objectTracker || new S, O.objectTracker.loadUid = k, yt.push(O.objectTracker)) : O.setPan(C.x, C.y, C.a, C.ia, C.oa, C.og))) : (T = this.getAudioBuffer(o, a), T.seekWhenReady = c, T.pauseWhenReady = r.paused, C && (-1 !== k ? T.panWhenReady.push({
                    objUid: k,
                    ia: C.ia,
                    oa: C.oa,
                    og: C.og,
                    thistag: h
                }) : T.panWhenReady.push({
                    x: C.x,
                    y: C.y,
                    a: C.a,
                    ia: C.ia,
                    oa: C.oa,
                    og: C.og,
                    thistag: h
                })))));
            if (e && !Q) {
                for (s = 0, n = J.length; n > s; s++) J[s].setSilent(!0);
                Q = !0
            } else if (!e && Q) {
                for (s = 0, n = J.length; n > s; s++) J[s].setSilent(!1);
                Q = !1
            }
        }, gt.afterLoad = function() {
            var t, e, i, s;
            for (t = 0, e = yt.length; e > t; t++) i = yt[t], s = this.runtime.getObjectByUID(i.loadUid), i.setObject(s), i.loadUid = -1, s && ($ = s.x, tt = s.y);
            cr.clearArray(yt)
        }, gt.onSuspend = function(t) {
            if (!this.playinbackground) {
                !t && X && X.resume && (X.resume(), et = !1);
                var e, i;
                for (e = 0, i = J.length; i > e; e++) J[e].setSuspended(t);
                t && X && X.suspend && (X.suspend(), et = !0)
            }
        }, gt.tick = function() {
            var t, e, i, s = this.runtime.dt;
            for (t = 0, e = J.length; e > t; t++) i = J[t], i.tick(s), 0 !== K && i.updatePlaybackRate();
            var n, r, o;
            for (n in pt)
                if (pt.hasOwnProperty(n))
                    for (r = pt[n], t = 0, e = r.length; e > t; t++) o = r[t], o.tick && o.tick();
            V === z && this.listenerTracker.hasObject() && (this.listenerTracker.tick(s), $ = this.listenerTracker.obj.x, tt = this.listenerTracker.obj.y, X.listener.setPosition(this.listenerTracker.obj.x, this.listenerTracker.obj.y, this.listenerZ))
        };
        var mt = [];
        gt.setPreloadList = function(t) {
            var e, i, s, n, r, o, a = 0;
            for (e = 0, i = t.length; i > e; ++e) s = t[e], n = s[0], r = 2 * s[1], o = n.length > 4 && ".ogg" === n.substr(n.length - 4), (o && H || !o && !H) && (mt.push({
                filename: n,
                size: r,
                obj: null
            }), a += r);
            return a
        }, gt.startPreloads = function() {
            var t, e, i, s;
            for (t = 0, e = mt.length; e > t; ++t) i = mt[t], s = this.runtime.files_subfolder + i.filename, i.obj = this.getAudioBuffer(s, !1)
        }, gt.getPreloadedSize = function() {
            var t, e, i, s = 0;
            for (t = 0, e = mt.length; e > t; ++t) i = mt[t], i.obj.isLoadedAndDecoded() || i.obj.hasFailedToLoad() || this.runtime.isDomFree || this.runtime.isAndroidStockBrowser ? s += i.size : i.obj.isLoaded() && (s += Math.floor(i.size / 2));
            return s
        }, gt.releaseAllMusicBuffers = function() {
            var t, e, i, s;
            for (t = 0, i = 0, e = q.length; e > t; ++t) s = q[t], q[i] = s, s.is_music ? s.release() : ++i;
            q.length = i
        }, gt.getAudioBuffer = function(t, e) {
            var i, s, n, r = null;
            for (i = 0, s = q.length; s > i; i++)
                if (n = q[i], n.src === t) {
                    r = n;
                    break
                }
            return r || (ut && e && this.releaseAllMusicBuffers(), r = new T(t, e), q.push(r)), r
        }, gt.getAudioInstance = function(t, e, i, s, n) {
            var r, o, a;
            for (r = 0, o = J.length; o > r; r++)
                if (a = J[r], a.src === t && (a.canBeRecycled() || i)) return a.tag = e, a;
            var h = this.getAudioBuffer(t, i);
            return h.bufferObject ? (a = new O(h, e), J.push(a), a) : ("<preload>" !== e && (h.playTagWhenReady = e, h.loopWhenReady = s, h.volumeWhenReady = n), null)
        };
        var _t = [];
        P.prototype.OnEnded = function(t) {
            return cr.equals_nocase(j, t)
        }, P.prototype.PreloadsComplete = function() {
            var t, e;
            for (t = 0, e = q.length; e > t; t++)
                if (!q[t].isLoadedAndDecoded() && !q[t].hasFailedToLoad()) return !1;
            return !0
        }, P.prototype.AdvancedAudioSupported = function() {
            return V === z
        }, P.prototype.IsSilent = function() {
            return Q
        }, P.prototype.IsAnyPlaying = function() {
            var t, e;
            for (t = 0, e = J.length; e > t; t++)
                if (J[t].isPlaying()) return !0;
            return !1
        }, P.prototype.IsTagPlaying = function(t) {
            C(t);
            var e, i;
            for (e = 0, i = _t.length; i > e; e++)
                if (_t[e].isPlaying()) return !0;
            return !1
        }, L.cnds = new P, I.prototype.Play = function(e, i, s, n) {
            if (!Q) {
                var r = t(s),
                    o = e[1],
                    a = this.runtime.files_subfolder + e[0] + (H ? ".ogg" : ".m4a");
                Y = this.getAudioInstance(a, n, o, 0 !== i, r), Y && (Y.setPannerEnabled(!1), Y.play(0 !== i, r, 0, this.nextPlayTime), this.nextPlayTime = 0)
            }
        }, I.prototype.PlayAtPosition = function(e, i, s, n, r, o, a, h, c, l) {
            if (!Q) {
                var u = t(s),
                    p = e[1],
                    d = this.runtime.files_subfolder + e[0] + (H ? ".ogg" : ".m4a");
                if (Y = this.getAudioInstance(d, l, p, 0 !== i, u), !Y) {
                    var f = this.getAudioBuffer(d, p);
                    return void f.panWhenReady.push({
                        x: n,
                        y: r,
                        a: o,
                        ia: a,
                        oa: h,
                        og: t(c),
                        thistag: l
                    })
                }
                Y.setPannerEnabled(!0), Y.setPan(n, r, o, a, h, t(c)), Y.play(0 !== i, u, 0, this.nextPlayTime), this.nextPlayTime = 0
            }
        }, I.prototype.PlayAtObject = function(e, i, s, n, r, o, a, h) {
            if (!Q && n) {
                var c = n.getFirstPicked();
                if (c) {
                    var l = t(s),
                        u = e[1],
                        p = this.runtime.files_subfolder + e[0] + (H ? ".ogg" : ".m4a");
                    if (Y = this.getAudioInstance(p, h, u, 0 !== i, l), !Y) {
                        var d = this.getAudioBuffer(p, u);
                        return void d.panWhenReady.push({
                            obj: c,
                            ia: r,
                            oa: o,
                            og: t(a),
                            thistag: h
                        })
                    }
                    Y.setPannerEnabled(!0);
                    var f = cr.rotatePtAround(c.x, c.y, -c.layer.getAngle(), $, tt, !0),
                        g = cr.rotatePtAround(c.x, c.y, -c.layer.getAngle(), $, tt, !1);
                    Y.setPan(f, g, cr.to_degrees(c.angle - c.layer.getAngle()), r, o, t(a)), Y.setObject(c), Y.play(0 !== i, l, 0, this.nextPlayTime), this.nextPlayTime = 0
                }
            }
        }, I.prototype.PlayByName = function(e, i, s, n, r) {
            if (!Q) {
                var o = t(n),
                    a = 1 === e,
                    h = this.runtime.files_subfolder + i.toLowerCase() + (H ? ".ogg" : ".m4a");
                Y = this.getAudioInstance(h, r, a, 0 !== s, o), Y && (Y.setPannerEnabled(!1), Y.play(0 !== s, o, 0, this.nextPlayTime), this.nextPlayTime = 0)
            }
        }, I.prototype.PlayAtPositionByName = function(e, i, s, n, r, o, a, h, c, l, u) {
            if (!Q) {
                var p = t(n),
                    d = 1 === e,
                    f = this.runtime.files_subfolder + i.toLowerCase() + (H ? ".ogg" : ".m4a");
                if (Y = this.getAudioInstance(f, u, d, 0 !== s, p), !Y) {
                    var g = this.getAudioBuffer(f, d);
                    return void g.panWhenReady.push({
                        x: r,
                        y: o,
                        a: a,
                        ia: h,
                        oa: c,
                        og: t(l),
                        thistag: u
                    })
                }
                Y.setPannerEnabled(!0), Y.setPan(r, o, a, h, c, t(l)), Y.play(0 !== s, p, 0, this.nextPlayTime), this.nextPlayTime = 0
            }
        }, I.prototype.PlayAtObjectByName = function(e, i, s, n, r, o, a, h, c) {
            if (!Q && r) {
                var l = r.getFirstPicked();
                if (l) {
                    var u = t(n),
                        p = 1 === e,
                        d = this.runtime.files_subfolder + i.toLowerCase() + (H ? ".ogg" : ".m4a");
                    if (Y = this.getAudioInstance(d, c, p, 0 !== s, u), !Y) {
                        var f = this.getAudioBuffer(d, p);
                        return void f.panWhenReady.push({
                            obj: l,
                            ia: o,
                            oa: a,
                            og: t(h),
                            thistag: c
                        })
                    }
                    Y.setPannerEnabled(!0);
                    var g = cr.rotatePtAround(l.x, l.y, -l.layer.getAngle(), $, tt, !0),
                        y = cr.rotatePtAround(l.x, l.y, -l.layer.getAngle(), $, tt, !1);
                    Y.setPan(g, y, cr.to_degrees(l.angle - l.layer.getAngle()), o, a, t(h)), Y.setObject(l), Y.play(0 !== s, u, 0, this.nextPlayTime), this.nextPlayTime = 0
                }
            }
        }, I.prototype.SetLooping = function(t, e) {
            C(t);
            var i, s;
            for (i = 0, s = _t.length; s > i; i++) _t[i].setLooping(0 === e)
        }, I.prototype.SetMuted = function(t, e) {
            C(t);
            var i, s;
            for (i = 0, s = _t.length; s > i; i++) _t[i].setMuted(0 === e)
        }, I.prototype.SetVolume = function(e, i) {
            C(e);
            var s, n, r = t(i);
            for (s = 0, n = _t.length; n > s; s++) _t[s].setVolume(r)
        }, I.prototype.Preload = function(t) {
            if (!Q) {
                var e = t[1],
                    i = this.runtime.files_subfolder + t[0] + (H ? ".ogg" : ".m4a");
                return V === U ? void(this.runtime.isDirectCanvas ? AppMobi.context.loadSound(i) : AppMobi.player.loadSound(i)) : void(V !== G && this.getAudioInstance(i, "<preload>", e, !1))
            }
        }, I.prototype.PreloadByName = function(t, e) {
            if (!Q) {
                var i = 1 === t,
                    s = this.runtime.files_subfolder + e.toLowerCase() + (H ? ".ogg" : ".m4a");
                return V === U ? void(this.runtime.isDirectCanvas ? AppMobi.context.loadSound(s) : AppMobi.player.loadSound(s)) : void(V !== G && this.getAudioInstance(s, "<preload>", i, !1))
            }
        }, I.prototype.SetPlaybackRate = function(t, e) {
            C(t), 0 > e && (e = 0);
            var i, s;
            for (i = 0, s = _t.length; s > i; i++) _t[i].setPlaybackRate(e)
        }, I.prototype.Stop = function(t) {
            C(t);
            var e, i;
            for (e = 0, i = _t.length; i > e; e++) _t[e].stop()
        }, I.prototype.StopAll = function() {
            var t, e;
            for (t = 0, e = J.length; e > t; t++) J[t].stop()
        }, I.prototype.SetPaused = function(t, e) {
            C(t);
            var i, s;
            for (i = 0, s = _t.length; s > i; i++) 0 === e ? _t[i].pause() : _t[i].resume()
        }, I.prototype.Seek = function(t, e) {
            C(t);
            var i, s;
            for (i = 0, s = _t.length; s > i; i++) _t[i].seek(e)
        }, I.prototype.SetSilent = function(t) {
            var e, i;
            if (2 === t && (t = Q ? 1 : 0), 0 !== t || Q) {
                if (1 === t && Q) {
                    for (e = 0, i = J.length; i > e; e++) J[e].setSilent(!1);
                    Q = !1
                }
            } else {
                for (e = 0, i = J.length; i > e; e++) J[e].setSilent(!0);
                Q = !0
            }
        }, I.prototype.SetMasterVolume = function(e) {
            Z = t(e);
            var i, s;
            for (i = 0, s = J.length; s > i; i++) J[i].updateVolume()
        }, I.prototype.AddFilterEffect = function(t, e, i, s, n, r, o) {
            V !== z || 0 > e || e >= dt.length || !X.createBiquadFilter || (t = t.toLowerCase(), o /= 100, 0 > o && (o = 0), o > 1 && (o = 1), E(t, new u(e, i, s, n, r, o)))
        }, I.prototype.AddDelayEffect = function(e, i, s, n) {
            V === z && (e = e.toLowerCase(), n /= 100, 0 > n && (n = 0), n > 1 && (n = 1), E(e, new p(i, t(s), n)))
        }, I.prototype.AddFlangerEffect = function(t, e, i, s, n, r) {
            V === z && X.createOscillator && (t = t.toLowerCase(), r /= 100, 0 > r && (r = 0), r > 1 && (r = 1), E(t, new f(e / 1e3, i / 1e3, s, n / 100, r)))
        }, I.prototype.AddPhaserEffect = function(t, e, i, s, n, r, o) {
            V === z && X.createOscillator && (t = t.toLowerCase(), o /= 100, 0 > o && (o = 0), o > 1 && (o = 1), E(t, new g(e, i, s, n, r, o)))
        }, I.prototype.AddConvolutionEffect = function(t, e, i, s) {
            if (V === z && X.createConvolver) {
                var n = 0 === i,
                    r = this.runtime.files_subfolder + e[0] + (H ? ".ogg" : ".m4a"),
                    o = this.getAudioBuffer(r, !1);
                t = t.toLowerCase(), s /= 100, 0 > s && (s = 0), s > 1 && (s = 1);
                var a;
                o.bufferObject ? a = new d(o.bufferObject, n, s, r) : (a = new d(null, n, s, r), o.normalizeWhenReady = n, o.convolveWhenReady = a), E(t, a)
            }
        }, I.prototype.AddGainEffect = function(e, i) {
            V === z && (e = e.toLowerCase(), E(e, new y(t(i))))
        }, I.prototype.AddMuteEffect = function(t) {
            V === z && (t = t.toLowerCase(), E(t, new y(0)))
        }, I.prototype.AddTremoloEffect = function(t, e, i) {
            V === z && X.createOscillator && (t = t.toLowerCase(), i /= 100, 0 > i && (i = 0), i > 1 && (i = 1), E(t, new m(e, i)))
        }, I.prototype.AddRingModEffect = function(t, e, i) {
            V === z && X.createOscillator && (t = t.toLowerCase(), i /= 100, 0 > i && (i = 0), i > 1 && (i = 1), E(t, new _(e, i)))
        }, I.prototype.AddDistortionEffect = function(t, e, i, s, n, r) {
            V === z && X.createWaveShaper && (t = t.toLowerCase(), r /= 100, 0 > r && (r = 0), r > 1 && (r = 1), E(t, new v(e, i, s, n, r)))
        }, I.prototype.AddCompressorEffect = function(t, e, i, s, n, r) {
            V === z && X.createDynamicsCompressor && (t = t.toLowerCase(), E(t, new w(e, i, s, n / 1e3, r / 1e3)))
        }, I.prototype.AddAnalyserEffect = function(t, e, i) {
            V === z && (t = t.toLowerCase(), E(t, new x(e, i)))
        }, I.prototype.RemoveEffects = function(t) {
            if (V === z) {
                t = t.toLowerCase();
                var e, i, s;
                if (pt.hasOwnProperty(t) && (s = pt[t], s.length)) {
                    for (e = 0, i = s.length; i > e; e++) s[e].remove();
                    cr.clearArray(s), k(t)
                }
            }
        }, I.prototype.SetEffectParameter = function(t, e, i, s, n, r) {
            if (V === z) {
                t = t.toLowerCase(), e = Math.floor(e);
                var o;
                pt.hasOwnProperty(t) && (o = pt[t], 0 > e || e >= o.length || o[e].setParam(i, s, n, r))
            }
        }, I.prototype.SetListenerObject = function(t) {
            if (t && V === z) {
                var e = t.getFirstPicked();
                e && (this.listenerTracker.setObject(e), $ = e.x, tt = e.y)
            }
        }, I.prototype.SetListenerZ = function(t) {
            this.listenerZ = t
        }, I.prototype.ScheduleNextPlay = function(t) {
            X && (this.nextPlayTime = t)
        }, L.acts = new I, M.prototype.Duration = function(t, e) {
            C(e, !0), _t.length ? t.set_float(_t[0].getDuration()) : t.set_float(0)
        }, M.prototype.PlaybackTime = function(t, e) {
            C(e, !0), _t.length ? t.set_float(_t[0].getPlaybackTime(!0)) : t.set_float(0)
        }, M.prototype.Volume = function(t, i) {
            if (C(i, !0), _t.length) {
                var s = _t[0].getVolume();
                t.set_float(e(s))
            } else t.set_float(0)
        }, M.prototype.MasterVolume = function(t) {
            t.set_float(e(Z))
        }, M.prototype.EffectCount = function(t, e) {
            e = e.toLowerCase();
            var i = null;
            pt.hasOwnProperty(e) && (i = pt[e]), t.set_int(i ? i.length : 0)
        }, M.prototype.AnalyserFreqBinCount = function(t, e, i) {
            e = e.toLowerCase(), i = Math.floor(i);
            var s = R(e, i);
            t.set_int(s ? s.node.frequencyBinCount : 0)
        }, M.prototype.AnalyserFreqBinAt = function(t, e, i, s) {
            e = e.toLowerCase(), i = Math.floor(i), s = Math.floor(s);
            var n = R(e, i);
            n ? 0 > s || s >= n.node.frequencyBinCount ? t.set_float(0) : t.set_float(n.freqBins[s]) : t.set_float(0)
        }, M.prototype.AnalyserPeakLevel = function(t, e, i) {
            e = e.toLowerCase(), i = Math.floor(i);
            var s = R(e, i);
            s ? t.set_float(s.peak) : t.set_float(0)
        }, M.prototype.AnalyserRMSLevel = function(t, e, i) {
            e = e.toLowerCase(), i = Math.floor(i);
            var s = R(e, i);
            s ? t.set_float(s.rms) : t.set_float(0)
        }, M.prototype.SampleRate = function(t) {
            t.set_int(X ? X.sampleRate : 0)
        }, M.prototype.CurrentTime = function(t) {
            t.set_float(X ? X.currentTime : cr.performance_now())
        }, L.exps = new M
    }(), cr.plugins_.Browser = function(t) {
        this.runtime = t
    },
    function() {
        function maybeLoadBatteryManager() {
            if (!loadedBatteryManager && navigator.getBattery) {
                var t = navigator.getBattery();
                loadedBatteryManager = !0, t && t.then(function(t) {
                    batteryManager = t
                })
            }
        }

        function Cnds() {}

        function Acts() {}

        function onFullscreenError(t) {
            console && console.warn && console.warn("Fullscreen request failed: ", t), crruntime.setSize(window.innerWidth, window.innerHeight)
        }

        function Exps() {}
        var pluginProto = cr.plugins_.Browser.prototype;
        pluginProto.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var typeProto = pluginProto.Type.prototype;
        typeProto.onCreate = function() {}, pluginProto.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var instanceProto = pluginProto.Instance.prototype;
        instanceProto.onCreate = function() {
            var t = this;
            window.addEventListener("resize", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnResize, t)
            }), "undefined" != typeof navigator.onLine && (window.addEventListener("online", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOnline, t)
            }), window.addEventListener("offline", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOffline, t)
            })), "undefined" != typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
                t.runtime.loadingprogress = 1, t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, t)
            }), window.applicationCache.addEventListener("progress", function(e) {
                t.runtime.loadingprogress = e.loaded / e.total || 0
            })), this.runtime.isDirectCanvas || (document.addEventListener("appMobi.device.update.available", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, t)
            }), document.addEventListener("backbutton", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t)
            }), document.addEventListener("menubutton", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, t)
            }), document.addEventListener("searchbutton", function() {
                t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnSearchButton, t)
            }), document.addEventListener("tizenhwkey", function(e) {
                var i;
                switch (e.keyName) {
                    case "back":
                        i = t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t), i || window.tizen && window.tizen.application.getCurrentApplication().exit();
                        break;
                    case "menu":
                        i = t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, t), i || e.preventDefault()
                }
            })), this.runtime.isWindows10 && "undefined" != typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", function(e) {
                var i = t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t);
                i && (e.handled = !0)
            }) : this.runtime.isWinJS && WinJS.Application && (WinJS.Application.onbackclick = function(e) {
                return !!t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, t)
            }), this.runtime.addSuspendCallback(function(e) {
                e ? t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageHidden, t) : t.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageVisible, t)
            }), this.is_arcade = "undefined" != typeof window.is_scirra_arcade
        };
        var batteryManager = null,
            loadedBatteryManager = !1;
        Cnds.prototype.CookiesEnabled = function() {
            return navigator ? navigator.cookieEnabled : !1
        }, Cnds.prototype.IsOnline = function() {
            return navigator ? navigator.onLine : !1
        }, Cnds.prototype.HasJava = function() {
            return navigator ? navigator.javaEnabled() : !1
        }, Cnds.prototype.OnOnline = function() {
            return !0
        }, Cnds.prototype.OnOffline = function() {
            return !0
        }, Cnds.prototype.IsDownloadingUpdate = function() {
            return "undefined" == typeof window.applicationCache ? !1 : window.applicationCache.status === window.applicationCache.DOWNLOADING
        }, Cnds.prototype.OnUpdateReady = function() {
            return !0
        }, Cnds.prototype.PageVisible = function() {
            return !this.runtime.isSuspended
        }, Cnds.prototype.OnPageVisible = function() {
            return !0
        }, Cnds.prototype.OnPageHidden = function() {
            return !0
        }, Cnds.prototype.OnResize = function() {
            return !0
        }, Cnds.prototype.IsFullscreen = function() {
            return !!(document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || this.runtime.isNodeFullscreen)
        }, Cnds.prototype.OnBackButton = function() {
            return !0
        }, Cnds.prototype.OnMenuButton = function() {
            return !0
        }, Cnds.prototype.OnSearchButton = function() {
            return !0
        }, Cnds.prototype.IsMetered = function() {
            var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            return t ? !!t.metered : !1
        }, Cnds.prototype.IsCharging = function() {
            var t = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            return t ? !!t.charging : (maybeLoadBatteryManager(), batteryManager ? !!batteryManager.charging : !0)
        }, Cnds.prototype.IsPortraitLandscape = function(t) {
            var e = window.innerWidth <= window.innerHeight ? 0 : 1;
            return e === t
        }, Cnds.prototype.SupportsFullscreen = function() {
            if (this.runtime.isNodeWebkit) return !0;
            var t = this.runtime.canvasdiv || this.runtime.canvas;
            return !!(t.requestFullscreen || t.mozRequestFullScreen || t.msRequestFullscreen || t.webkitRequestFullScreen)
        }, pluginProto.cnds = new Cnds, Acts.prototype.Alert = function(t) {
            this.runtime.isDomFree || alert(t.toString())
        }, Acts.prototype.Close = function() {
            this.runtime.isCocoonJs ? CocoonJS.App.forceToFinish() : window.tizen ? window.tizen.application.getCurrentApplication().exit() : navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : this.is_arcade || this.runtime.isDomFree || window.close()
        }, Acts.prototype.Focus = function() {
            if (this.runtime.isNodeWebkit) {
                var t = window.nwgui.Window.get();
                t.focus()
            } else this.is_arcade || this.runtime.isDomFree || window.focus()
        }, Acts.prototype.Blur = function() {
            if (this.runtime.isNodeWebkit) {
                var t = window.nwgui.Window.get();
                t.blur()
            } else this.is_arcade || this.runtime.isDomFree || window.blur()
        }, Acts.prototype.GoBack = function() {
            navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : this.is_arcade || this.runtime.isDomFree || !window.back || window.back()
        }, Acts.prototype.GoForward = function() {
            this.is_arcade || this.runtime.isDomFree || !window.forward || window.forward()
        }, Acts.prototype.GoHome = function() {
            this.is_arcade || this.runtime.isDomFree || !window.home || window.home()
        }, Acts.prototype.GoToURL = function(t, e) {
            this.runtime.isCocoonJs ? CocoonJS.App.openURL(t) : this.runtime.isEjecta ? ejecta.openURL(t) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(t)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(t, {
                openExternal: !0
            }) : this.runtime.isCordova ? window.open(t, "_system") : this.is_arcade || this.runtime.isDomFree || (2 !== e || this.is_arcade ? 1 !== e || this.is_arcade ? window.location = t : window.parent.location = t : window.top.location = t)
        }, Acts.prototype.GoToURLWindow = function(t, e) {
            this.runtime.isCocoonJs ? CocoonJS.App.openURL(t) : this.runtime.isEjecta ? ejecta.openURL(t) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(t)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(t, {
                openExternal: !0
            }) : this.runtime.isCordova ? window.open(t, "_system") : this.is_arcade || this.runtime.isDomFree || window.open(t, e)
        }, Acts.prototype.Reload = function() {
            this.is_arcade || this.runtime.isDomFree || window.location.reload()
        };
        var firstRequestFullscreen = !0,
            crruntime = null;
        Acts.prototype.RequestFullScreen = function(t) {
            if (this.runtime.isDomFree) return void cr.logexport("[Construct 2] Requesting fullscreen is not supported on this platform - the request has been ignored");
            if (t >= 2 && (t += 1), 6 === t && (t = 2), this.runtime.isNodeWebkit) this.runtime.isDebug ? debuggerFullscreen(!0) : !this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().enterFullscreen(), this.runtime.isNodeFullscreen = !0, this.runtime.fullscreen_scaling = t >= 2 ? t : 0);
            else {
                if (document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || document.fullScreen || document.fullScreenElement) return;
                this.runtime.fullscreen_scaling = t >= 2 ? t : 0;
                var e = this.runtime.canvasdiv || this.runtime.canvas;
                firstRequestFullscreen && (firstRequestFullscreen = !1, crruntime = this.runtime, e.addEventListener("mozfullscreenerror", onFullscreenError), e.addEventListener("webkitfullscreenerror", onFullscreenError), e.addEventListener("MSFullscreenError", onFullscreenError), e.addEventListener("fullscreenerror", onFullscreenError)), e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.webkitRequestFullScreen && ("undefined" != typeof Element && "undefined" != typeof Element.ALLOW_KEYBOARD_INPUT ? e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : e.webkitRequestFullScreen())
            }
        }, Acts.prototype.CancelFullScreen = function() {
            return this.runtime.isDomFree ? void cr.logexport("[Construct 2] Exiting fullscreen is not supported on this platform - the request has been ignored") : void(this.runtime.isNodeWebkit ? this.runtime.isDebug ? debuggerFullscreen(!1) : this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().leaveFullscreen(), this.runtime.isNodeFullscreen = !1) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen());
        }, Acts.prototype.Vibrate = function(t) {
            try {
                var e, i, s = t.split(",");
                for (e = 0, i = s.length; i > e; e++) s[e] = parseInt(s[e], 10);
                navigator.vibrate ? navigator.vibrate(s) : navigator.mozVibrate ? navigator.mozVibrate(s) : navigator.webkitVibrate ? navigator.webkitVibrate(s) : navigator.msVibrate && navigator.msVibrate(s)
            } catch (n) {}
        }, Acts.prototype.InvokeDownload = function(t, e) {
            var i = document.createElement("a");
            if ("undefined" == typeof i.download) window.open(t);
            else {
                var s = document.getElementsByTagName("body")[0];
                i.textContent = e, i.href = t, i.download = e, s.appendChild(i);
                var n = new MouseEvent("click");
                i.dispatchEvent(n), s.removeChild(i)
            }
        }, Acts.prototype.InvokeDownloadString = function(t, e, i) {
            var s = "data:" + e + "," + encodeURIComponent(t),
                n = document.createElement("a");
            if ("undefined" == typeof n.download) window.open(s);
            else {
                var r = document.getElementsByTagName("body")[0];
                n.textContent = i, n.href = s, n.download = i, r.appendChild(n);
                var o = new MouseEvent("click");
                n.dispatchEvent(o), r.removeChild(n)
            }
        }, Acts.prototype.ConsoleLog = function(t, e) {
            "undefined" != typeof console && (0 === t && console.log && console.log(e.toString()), 1 === t && console.warn && console.warn(e.toString()), 2 === t && console.error && console.error(e.toString()))
        }, Acts.prototype.ConsoleGroup = function(t) {
            console && console.group && console.group(t)
        }, Acts.prototype.ConsoleGroupEnd = function() {
            console && console.groupEnd && console.groupEnd()
        }, Acts.prototype.ExecJs = function(js_) {
            try {
                eval && eval(js_)
            } catch (e) {
                console && console.error && console.error("Error executing Javascript: ", e)
            }
        };
        var orientations = ["portrait", "landscape", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];
        Acts.prototype.LockOrientation = function(t) {
            if (t = Math.floor(t), !(0 > t || t >= orientations.length)) {
                this.runtime.autoLockOrientation = !1;
                var e = orientations[t];
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(e) : screen.lockOrientation ? screen.lockOrientation(e) : screen.webkitLockOrientation ? screen.webkitLockOrientation(e) : screen.mozLockOrientation ? screen.mozLockOrientation(e) : screen.msLockOrientation && screen.msLockOrientation(e)
            }
        }, Acts.prototype.UnlockOrientation = function() {
            this.runtime.autoLockOrientation = !1, screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
        }, pluginProto.acts = new Acts, Exps.prototype.URL = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.toString())
        }, Exps.prototype.Protocol = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.protocol)
        }, Exps.prototype.Domain = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.hostname)
        }, Exps.prototype.PathName = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.pathname)
        }, Exps.prototype.Hash = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.hash)
        }, Exps.prototype.Referrer = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : document.referrer)
        }, Exps.prototype.Title = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : document.title)
        }, Exps.prototype.Name = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.appName)
        }, Exps.prototype.Version = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.appVersion)
        }, Exps.prototype.Language = function(t) {
            navigator && navigator.language ? t.set_string(navigator.language) : t.set_string("")
        }, Exps.prototype.Platform = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.platform)
        }, Exps.prototype.Product = function(t) {
            navigator && navigator.product ? t.set_string(navigator.product) : t.set_string("")
        }, Exps.prototype.Vendor = function(t) {
            navigator && navigator.vendor ? t.set_string(navigator.vendor) : t.set_string("")
        }, Exps.prototype.UserAgent = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.userAgent)
        }, Exps.prototype.QueryString = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.search)
        }, Exps.prototype.QueryParam = function(t, e) {
            if (this.runtime.isDomFree) return void t.set_string("");
            var i = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
            i ? t.set_string(decodeURIComponent(i[1].replace(/\+/g, " "))) : t.set_string("")
        }, Exps.prototype.Bandwidth = function(t) {
            var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            e ? "undefined" != typeof e.bandwidth ? t.set_float(e.bandwidth) : "undefined" != typeof e.downlinkMax ? t.set_float(e.downlinkMax) : t.set_float(Number.POSITIVE_INFINITY) : t.set_float(Number.POSITIVE_INFINITY)
        }, Exps.prototype.ConnectionType = function(t) {
            var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            e ? t.set_string(e.type || "unknown") : t.set_string("unknown")
        }, Exps.prototype.BatteryLevel = function(t) {
            var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            e ? t.set_float(e.level) : (maybeLoadBatteryManager(), batteryManager ? t.set_float(batteryManager.level) : t.set_float(1))
        }, Exps.prototype.BatteryTimeLeft = function(t) {
            var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            e ? t.set_float(e.dischargingTime) : (maybeLoadBatteryManager(), batteryManager ? t.set_float(batteryManager.dischargingTime) : t.set_float(Number.POSITIVE_INFINITY))
        }, Exps.prototype.ExecJS = function(ret, js_) {
            if (!eval) return void ret.set_any(0);
            var result = 0;
            try {
                result = eval(js_)
            } catch (e) {
                console && console.error && console.error("Error executing Javascript: ", e)
            }
            "number" == typeof result ? ret.set_any(result) : "string" == typeof result ? ret.set_any(result) : "boolean" == typeof result ? ret.set_any(result ? 1 : 0) : ret.set_any(0)
        }, Exps.prototype.ScreenWidth = function(t) {
            t.set_int(screen.width)
        }, Exps.prototype.ScreenHeight = function(t) {
            t.set_int(screen.height)
        }, Exps.prototype.DevicePixelRatio = function(t) {
            t.set_float(this.runtime.devicePixelRatio)
        }, Exps.prototype.WindowInnerWidth = function(t) {
            t.set_int(window.innerWidth)
        }, Exps.prototype.WindowInnerHeight = function(t) {
            t.set_int(window.innerHeight)
        }, Exps.prototype.WindowOuterWidth = function(t) {
            t.set_int(window.outerWidth)
        }, Exps.prototype.WindowOuterHeight = function(t) {
            t.set_int(window.outerHeight)
        }, pluginProto.exps = new Exps
    }(), cr.plugins_.Famobi = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.plugins_.Famobi.prototype;
        s.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var n = s.Type.prototype;
        n.onCreate = function() {}, s.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var r = s.Instance.prototype;
        r.onCreate = function() {}, r.onDestroy = function() {}, r.saveToJSON = function() {
            return {}
        }, r.loadFromJSON = function(t) {}, r.draw = function(t) {}, r.drawGL = function(t) {}, t.prototype.MyCondition = function(t) {
            return t >= 0
        }, e.prototype.GameOver = function() {
            // try {
            //     window.famobi.gameOver()
            // } catch (t) {
            //     console.debug(t)
            // }
        }, e.prototype.LevelUp = function(t) {
            // try {
            //     window.famobi.levelUp(t)
            // } catch (e) {
            //     console.debug(e)
            // }
        }, e.prototype.SubmitHighscore = function(t, e) {
            // try {
            //     window.famobi.submitHighscore(t, e)
            // } catch (i) {
            //     console.debug(i)
            // }
        }, e.prototype.__ = function(t) {
            try {
                return window.famobi.__(t)
            } catch (e) {
                console.debug(e)
            }
        }, e.prototype.GetMoreGamesButtonImage = function() {
            try {
                return window.famobi.getMoreGamesButtonImage()
            } catch (t) {
                console.debug(t)
            }
        }, e.prototype.MoreGamesLink = function() {
            // try {
            //     window.famobi.moreGamesLink()
            // } catch (t) {
            //     console.debug(t)
            // }
        }, e.prototype.ShowAd = function() {
            // try {
            //     window.famobi.showAd()
            // } catch (t) {
            //     console.debug(t)
            // }
        }, e.prototype.ForceAd = function() {
            // try {
            //     window.famobi.forceAd()
            // } catch (t) {
            //     console.debug(t)
            // }
        }, s.acts = new e, i.prototype.GetMoreGamesButtonImage = function(t) {
            t.set_string(e.prototype.GetMoreGamesButtonImage())
        }, i.prototype.Translate = function(t, i) {
            t.set_string(e.prototype.__(i))
        }, s.exps = new i
    }(), cr.plugins_.Keyboard = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}

        function s(t) {
            switch (t = Math.floor(t)) {
                case 8:
                    return "backspace";
                case 9:
                    return "tab";
                case 13:
                    return "enter";
                case 16:
                    return "shift";
                case 17:
                    return "control";
                case 18:
                    return "alt";
                case 19:
                    return "pause";
                case 20:
                    return "capslock";
                case 27:
                    return "esc";
                case 33:
                    return "pageup";
                case 34:
                    return "pagedown";
                case 35:
                    return "end";
                case 36:
                    return "home";
                case 37:
                    return "←";
                case 38:
                    return "↑";
                case 39:
                    return "→";
                case 40:
                    return "↓";
                case 45:
                    return "insert";
                case 46:
                    return "del";
                case 91:
                    return "left window key";
                case 92:
                    return "right window key";
                case 93:
                    return "select";
                case 96:
                    return "numpad 0";
                case 97:
                    return "numpad 1";
                case 98:
                    return "numpad 2";
                case 99:
                    return "numpad 3";
                case 100:
                    return "numpad 4";
                case 101:
                    return "numpad 5";
                case 102:
                    return "numpad 6";
                case 103:
                    return "numpad 7";
                case 104:
                    return "numpad 8";
                case 105:
                    return "numpad 9";
                case 106:
                    return "numpad *";
                case 107:
                    return "numpad +";
                case 109:
                    return "numpad -";
                case 110:
                    return "numpad .";
                case 111:
                    return "numpad /";
                case 112:
                    return "F1";
                case 113:
                    return "F2";
                case 114:
                    return "F3";
                case 115:
                    return "F4";
                case 116:
                    return "F5";
                case 117:
                    return "F6";
                case 118:
                    return "F7";
                case 119:
                    return "F8";
                case 120:
                    return "F9";
                case 121:
                    return "F10";
                case 122:
                    return "F11";
                case 123:
                    return "F12";
                case 144:
                    return "numlock";
                case 145:
                    return "scroll lock";
                case 186:
                    return ";";
                case 187:
                    return "=";
                case 188:
                    return ",";
                case 189:
                    return "-";
                case 190:
                    return ".";
                case 191:
                    return "/";
                case 192:
                    return "'";
                case 219:
                    return "[";
                case 220:
                    return "\\";
                case 221:
                    return "]";
                case 222:
                    return "#";
                case 223:
                    return "`";
                default:
                    return String.fromCharCode(t)
            }
        }
        var n = cr.plugins_.Keyboard.prototype;
        n.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var r = n.Type.prototype;
        r.onCreate = function() {}, n.Instance = function(t) {
            this.type = t, this.runtime = t.runtime, this.keyMap = new Array(256), this.usedKeys = new Array(256), this.triggerKey = 0
        };
        var o = n.Instance.prototype;
        o.onCreate = function() {
            var t = this;
            this.runtime.isDomFree || (jQuery(document).keydown(function(e) {
                t.onKeyDown(e)
            }), jQuery(document).keyup(function(e) {
                t.onKeyUp(e)
            }))
        };
        var a = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];
        o.onKeyDown = function(t) {
            var e = !1;
            if (window != window.top && a.indexOf(t.which) > -1 && (t.preventDefault(), e = !0, t.stopPropagation()), this.keyMap[t.which]) return void(this.usedKeys[t.which] && !e && t.preventDefault());
            this.keyMap[t.which] = !0, this.triggerKey = t.which, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnAnyKey, this);
            var i = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKey, this),
                s = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyCode, this);
            this.runtime.isInUserInputEvent = !1, (i || s) && (this.usedKeys[t.which] = !0, e || t.preventDefault())
        }, o.onKeyUp = function(t) {
            this.keyMap[t.which] = !1, this.triggerKey = t.which, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnAnyKeyReleased, this);
            var e = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyReleased, this),
                i = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyCodeReleased, this);
            this.runtime.isInUserInputEvent = !1, (e || i || this.usedKeys[t.which]) && (this.usedKeys[t.which] = !0, t.preventDefault())
        }, o.onWindowBlur = function() {
            var t;
            for (t = 0; 256 > t; ++t)
                if (this.keyMap[t]) {
                    this.keyMap[t] = !1, this.triggerKey = t, this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnAnyKeyReleased, this);
                    var e = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyReleased, this),
                        i = this.runtime.trigger(cr.plugins_.Keyboard.prototype.cnds.OnKeyCodeReleased, this);
                    (e || i) && (this.usedKeys[t] = !0)
                }
        }, o.saveToJSON = function() {
            return {
                triggerKey: this.triggerKey
            }
        }, o.loadFromJSON = function(t) {
            this.triggerKey = t.triggerKey
        }, t.prototype.IsKeyDown = function(t) {
            return this.keyMap[t]
        }, t.prototype.OnKey = function(t) {
            return t === this.triggerKey
        }, t.prototype.OnAnyKey = function(t) {
            return !0
        }, t.prototype.OnAnyKeyReleased = function(t) {
            return !0
        }, t.prototype.OnKeyReleased = function(t) {
            return t === this.triggerKey
        }, t.prototype.IsKeyCodeDown = function(t) {
            return t = Math.floor(t), 0 > t || t >= this.keyMap.length ? !1 : this.keyMap[t]
        }, t.prototype.OnKeyCode = function(t) {
            return t === this.triggerKey
        }, t.prototype.OnKeyCodeReleased = function(t) {
            return t === this.triggerKey
        }, n.cnds = new t, n.acts = new e, i.prototype.LastKeyCode = function(t) {
            t.set_int(this.triggerKey)
        }, i.prototype.StringFromKeyCode = function(t, e) {
            t.set_string(s(e))
        }, n.exps = new i
    }();
var localForageInitFailed = !1;
try {
    ! function() {
        var t, e, i, s;
        ! function() {
            var n = {},
                r = {};
            t = function(t, e, i) {
                n[t] = {
                    deps: e,
                    callback: i
                }
            }, s = i = e = function(t) {
                function i(e) {
                    if ("." !== e.charAt(0)) return e;
                    for (var i = e.split("/"), s = t.split("/").slice(0, -1), n = 0, r = i.length; r > n; n++) {
                        var o = i[n];
                        if (".." === o) s.pop();
                        else {
                            if ("." === o) continue;
                            s.push(o)
                        }
                    }
                    return s.join("/")
                }
                if (s._eak_seen = n, r[t]) return r[t];
                if (r[t] = {}, !n[t]) throw new Error("Could not find module " + t);
                for (var o, a = n[t], h = a.deps, c = a.callback, l = [], u = 0, p = h.length; p > u; u++) "exports" === h[u] ? l.push(o = {}) : l.push(e(i(h[u])));
                var d = c.apply(this, l);
                return r[t] = o || d
            }
        }(), t("promise/all", ["./utils", "exports"], function(t, e) {
            "use strict";

            function i(t) {
                var e = this;
                if (!s(t)) throw new TypeError("You must pass an array to all.");
                return new e(function(e, i) {
                    function s(t) {
                        return function(e) {
                            r(t, e)
                        }
                    }

                    function r(t, i) {
                        a[t] = i, 0 === --h && e(a)
                    }
                    var o, a = [],
                        h = t.length;
                    0 === h && e([]);
                    for (var c = 0; c < t.length; c++) o = t[c], o && n(o.then) ? o.then(s(c), i) : r(c, o)
                })
            }
            var s = t.isArray,
                n = t.isFunction;
            e.all = i
        }), t("promise/asap", ["exports"], function(t) {
            "use strict";

            function e() {
                return function() {
                    process.nextTick(n)
                }
            }

            function i() {
                var t = 0,
                    e = new h(n),
                    i = document.createTextNode("");
                return e.observe(i, {
                        characterData: !0
                    }),
                    function() {
                        i.data = t = ++t % 2
                    }
            }

            function s() {
                return function() {
                    c.setTimeout(n, 1)
                }
            }

            function n() {
                for (var t = 0; t < l.length; t++) {
                    var e = l[t],
                        i = e[0],
                        s = e[1];
                    i(s)
                }
                l = []
            }

            function r(t, e) {
                var i = l.push([t, e]);
                1 === i && o()
            }
            var o, a = "undefined" != typeof window ? window : {},
                h = a.MutationObserver || a.WebKitMutationObserver,
                c = "undefined" != typeof global ? global : void 0 === this ? window : this,
                l = [];
            o = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? e() : h ? i() : s(), t.asap = r
        }), t("promise/config", ["exports"], function(t) {
            "use strict";

            function e(t, e) {
                return 2 !== arguments.length ? i[t] : void(i[t] = e)
            }
            var i = {
                instrument: !1
            };
            t.config = i, t.configure = e
        }), t("promise/polyfill", ["./promise", "./utils", "exports"], function(t, e, i) {
            "use strict";

            function s() {
                var t;
                t = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
                var e = "Promise" in t && "resolve" in t.Promise && "reject" in t.Promise && "all" in t.Promise && "race" in t.Promise && function() {
                    var e;
                    return new t.Promise(function(t) {
                        e = t
                    }), r(e)
                }();
                e || (t.Promise = n)
            }
            var n = t.Promise,
                r = e.isFunction;
            i.polyfill = s
        }), t("promise/promise", ["./config", "./utils", "./all", "./race", "./resolve", "./reject", "./asap", "exports"], function(t, e, i, s, n, r, o, a) {
            "use strict";

            function h(t) {
                if (!w(t)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (!(this instanceof h)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this._subscribers = [], c(t, this)
            }

            function c(t, e) {
                function i(t) {
                    f(e, t)
                }

                function s(t) {
                    y(e, t)
                }
                try {
                    t(i, s)
                } catch (n) {
                    s(n)
                }
            }

            function l(t, e, i, s) {
                var n, r, o, a, h = w(i);
                if (h) try {
                    n = i(s), o = !0
                } catch (c) {
                    a = !0, r = c
                } else n = s, o = !0;
                d(e, n) || (h && o ? f(e, n) : a ? y(e, r) : t === E ? f(e, n) : t === P && y(e, n))
            }

            function u(t, e, i, s) {
                var n = t._subscribers,
                    r = n.length;
                n[r] = e, n[r + E] = i, n[r + P] = s
            }

            function p(t, e) {
                for (var i, s, n = t._subscribers, r = t._detail, o = 0; o < n.length; o += 3) i = n[o], s = n[o + e], l(e, i, s, r);
                t._subscribers = null
            }

            function d(t, e) {
                var i, s = null;
                try {
                    if (t === e) throw new TypeError("A promises callback cannot return that same promise.");
                    if (b(e) && (s = e.then, w(s))) return s.call(e, function(s) {
                        return i ? !0 : (i = !0, void(e !== s ? f(t, s) : g(t, s)))
                    }, function(e) {
                        return i ? !0 : (i = !0, void y(t, e))
                    }), !0
                } catch (n) {
                    return i ? !0 : (y(t, n), !0)
                }
                return !1
            }

            function f(t, e) {
                t === e ? g(t, e) : d(t, e) || g(t, e)
            }

            function g(t, e) {
                t._state === C && (t._state = k, t._detail = e, v.async(m, t))
            }

            function y(t, e) {
                t._state === C && (t._state = k, t._detail = e, v.async(_, t))
            }

            function m(t) {
                p(t, t._state = E)
            }

            function _(t) {
                p(t, t._state = P)
            }
            var v = t.config,
                b = (t.configure, e.objectOrFunction),
                w = e.isFunction,
                x = (e.now, i.all),
                S = s.race,
                T = n.resolve,
                O = r.reject,
                A = o.asap;
            v.async = A;
            var C = void 0,
                k = 0,
                E = 1,
                P = 2;
            h.prototype = {
                constructor: h,
                _state: void 0,
                _detail: void 0,
                _subscribers: void 0,
                then: function(t, e) {
                    var i = this,
                        s = new this.constructor(function() {});
                    if (this._state) {
                        var n = arguments;
                        v.async(function() {
                            l(i._state, s, n[i._state - 1], i._detail)
                        })
                    } else u(this, s, t, e);
                    return s
                },
                "catch": function(t) {
                    return this.then(null, t)
                }
            }, h.all = x, h.race = S, h.resolve = T, h.reject = O, a.Promise = h
        }), t("promise/race", ["./utils", "exports"], function(t, e) {
            "use strict";

            function i(t) {
                var e = this;
                if (!s(t)) throw new TypeError("You must pass an array to race.");
                return new e(function(e, i) {
                    for (var s, n = 0; n < t.length; n++) s = t[n], s && "function" == typeof s.then ? s.then(e, i) : e(s)
                })
            }
            var s = t.isArray;
            e.race = i
        }), t("promise/reject", ["exports"], function(t) {
            "use strict";

            function e(t) {
                var e = this;
                return new e(function(e, i) {
                    i(t)
                })
            }
            t.reject = e
        }), t("promise/resolve", ["exports"], function(t) {
            "use strict";

            function e(t) {
                if (t && "object" == typeof t && t.constructor === this) return t;
                var e = this;
                return new e(function(e) {
                    e(t)
                })
            }
            t.resolve = e
        }), t("promise/utils", ["exports"], function(t) {
            "use strict";

            function e(t) {
                return i(t) || "object" == typeof t && null !== t
            }

            function i(t) {
                return "function" == typeof t
            }

            function s(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
            var n = Date.now || function() {
                return (new Date).getTime()
            };
            t.objectOrFunction = e, t.isFunction = i, t.isArray = s, t.now = n
        }), e("promise/polyfill").polyfill()
    }(),
    function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.localforage = e() : t.localforage = e()
    }(this, function() {
        return function(t) {
            function e(s) {
                if (i[s]) return i[s].exports;
                var n = i[s] = {
                    exports: {},
                    id: s,
                    loaded: !1
                };
                return t[s].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
            }
            var i = {};
            return e.m = t, e.c = i, e.p = "", e(0)
        }([
            function(t, e, i) {
                "use strict";

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                e.__esModule = !0;
                var n = function(t) {
                    function e(t, e) {
                        t[e] = function() {
                            var i = arguments;
                            return t.ready().then(function() {
                                return t[e].apply(t, i)
                            })
                        }
                    }

                    function n() {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            if (e)
                                for (var i in e) e.hasOwnProperty(i) && (p(e[i]) ? arguments[0][i] = e[i].slice() : arguments[0][i] = e[i])
                        }
                        return arguments[0]
                    }

                    function r(t) {
                        for (var e in a)
                            if (a.hasOwnProperty(e) && a[e] === t) return !0;
                        return !1
                    }
                    var o = {},
                        a = {
                            INDEXEDDB: "asyncStorage",
                            LOCALSTORAGE: "localStorageWrapper",
                            WEBSQL: "webSQLStorage"
                        },
                        h = [a.INDEXEDDB, a.WEBSQL, a.LOCALSTORAGE],
                        c = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"],
                        l = {
                            description: "",
                            driver: h.slice(),
                            name: "localforage",
                            size: 4980736,
                            storeName: "keyvaluepairs",
                            version: 1
                        },
                        u = function(t) {
                            var e = {};
                            return e[a.INDEXEDDB] = !! function() {
                                try {
                                    var e = e || t.indexedDB || t.webkitIndexedDB || t.mozIndexedDB || t.OIndexedDB || t.msIndexedDB;
                                    return "undefined" != typeof t.openDatabase && t.navigator && t.navigator.userAgent && /Safari/.test(t.navigator.userAgent) && !/Chrome/.test(t.navigator.userAgent) ? !1 : e && "function" == typeof e.open && "undefined" != typeof t.IDBKeyRange
                                } catch (i) {
                                    return !1
                                }
                            }(), e[a.WEBSQL] = !! function() {
                                try {
                                    return t.openDatabase
                                } catch (e) {
                                    return !1
                                }
                            }(), e[a.LOCALSTORAGE] = !! function() {
                                try {
                                    return t.localStorage && "setItem" in t.localStorage && t.localStorage.setItem
                                } catch (e) {
                                    return !1
                                }
                            }(), e
                        }(t),
                        p = Array.isArray || function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        d = function() {
                            function t(e) {
                                s(this, t), this.INDEXEDDB = a.INDEXEDDB, this.LOCALSTORAGE = a.LOCALSTORAGE, this.WEBSQL = a.WEBSQL, this._defaultConfig = n({}, l), this._config = n({}, this._defaultConfig, e), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver)
                            }
                            return t.prototype.config = function(t) {
                                if ("object" == typeof t) {
                                    if (this._ready) return new Error("Can't call config() after localforage has been used.");
                                    for (var e in t) "storeName" === e && (t[e] = t[e].replace(/\W/g, "_")), this._config[e] = t[e];
                                    return "driver" in t && t.driver && this.setDriver(this._config.driver), !0
                                }
                                return "string" == typeof t ? this._config[t] : this._config
                            }, t.prototype.defineDriver = function(t, e, i) {
                                var s = new Promise(function(e, i) {
                                    try {
                                        var s = t._driver,
                                            n = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),
                                            a = new Error("Custom driver name already in use: " + t._driver);
                                        if (!t._driver) return void i(n);
                                        if (r(t._driver)) return void i(a);
                                        for (var h = c.concat("_initStorage"), l = 0; l < h.length; l++) {
                                            var p = h[l];
                                            if (!p || !t[p] || "function" != typeof t[p]) return void i(n)
                                        }
                                        var d = Promise.resolve(!0);
                                        "_support" in t && (d = t._support && "function" == typeof t._support ? t._support() : Promise.resolve(!!t._support)), d.then(function(i) {
                                            u[s] = i, o[s] = t, e()
                                        }, i)
                                    } catch (f) {
                                        i(f)
                                    }
                                });
                                return s.then(e, i), s
                            }, t.prototype.driver = function() {
                                return this._driver || null
                            }, t.prototype.getDriver = function(t, e, s) {
                                var n = this,
                                    a = function() {
                                        if (r(t)) switch (t) {
                                            case n.INDEXEDDB:
                                                return new Promise(function(t, e) {
                                                    t(i(1))
                                                });
                                            case n.LOCALSTORAGE:
                                                return new Promise(function(t, e) {
                                                    t(i(2))
                                                });
                                            case n.WEBSQL:
                                                return new Promise(function(t, e) {
                                                    t(i(4))
                                                })
                                        } else if (o[t]) return Promise.resolve(o[t]);
                                        return Promise.reject(new Error("Driver not found."))
                                    }();
                                return a.then(e, s), a
                            }, t.prototype.getSerializer = function(t) {
                                var e = new Promise(function(t, e) {
                                    t(i(3))
                                });
                                return t && "function" == typeof t && e.then(function(e) {
                                    t(e)
                                }), e
                            }, t.prototype.ready = function(t) {
                                var e = this,
                                    i = e._driverSet.then(function() {
                                        return null === e._ready && (e._ready = e._initDriver()), e._ready
                                    });
                                return i.then(t, t), i
                            }, t.prototype.setDriver = function(t, e, i) {
                                function s() {
                                    r._config.driver = r.driver()
                                }

                                function n(t) {
                                    return function() {
                                        function e() {
                                            for (; i < t.length;) {
                                                var n = t[i];
                                                return i++, r._dbInfo = null, r._ready = null, r.getDriver(n).then(function(t) {
                                                    return r._extend(t), s(), r._ready = r._initStorage(r._config), r._ready
                                                })["catch"](e)
                                            }
                                            s();
                                            var o = new Error("No available storage method found.");
                                            return r._driverSet = Promise.reject(o), r._driverSet
                                        }
                                        var i = 0;
                                        return e()
                                    }
                                }
                                var r = this;
                                p(t) || (t = [t]);
                                var o = this._getSupportedDrivers(t),
                                    a = null !== this._driverSet ? this._driverSet["catch"](function() {
                                        return Promise.resolve()
                                    }) : Promise.resolve();
                                return this._driverSet = a.then(function() {
                                    var t = o[0];
                                    return r._dbInfo = null, r._ready = null, r.getDriver(t).then(function(t) {
                                        r._driver = t._driver, s(), r._wrapLibraryMethodsWithReady(), r._initDriver = n(o)
                                    })
                                })["catch"](function() {
                                    s();
                                    var t = new Error("No available storage method found.");
                                    return r._driverSet = Promise.reject(t), r._driverSet
                                }), this._driverSet.then(e, i), this._driverSet
                            }, t.prototype.supports = function(t) {
                                return !!u[t]
                            }, t.prototype._extend = function(t) {
                                n(this, t)
                            }, t.prototype._getSupportedDrivers = function(t) {
                                for (var e = [], i = 0, s = t.length; s > i; i++) {
                                    var n = t[i];
                                    this.supports(n) && e.push(n)
                                }
                                return e
                            }, t.prototype._wrapLibraryMethodsWithReady = function() {
                                for (var t = 0; t < c.length; t++) e(this, c[t])
                            }, t.prototype.createInstance = function(e) {
                                return new t(e)
                            }, t
                        }();
                    return new d
                }("undefined" != typeof window ? window : self);
                e["default"] = n, t.exports = e["default"]
            },
            function(t, e) {
                "use strict";
                e.__esModule = !0;
                var i = function(t) {
                    function e(e, i) {
                        e = e || [], i = i || {};
                        try {
                            return new Blob(e, i)
                        } catch (s) {
                            if ("TypeError" !== s.name) throw s;
                            for (var n = t.BlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder || t.WebKitBlobBuilder, r = new n, o = 0; o < e.length; o += 1) r.append(e[o]);
                            return r.getBlob(i.type)
                        }
                    }

                    function i(t) {
                        for (var e = t.length, i = new ArrayBuffer(e), s = new Uint8Array(i), n = 0; e > n; n++) s[n] = t.charCodeAt(n);
                        return i
                    }

                    function s(t) {
                        return new Promise(function(e, i) {
                            var s = new XMLHttpRequest;
                            s.open("GET", t), s.withCredentials = !0, s.responseType = "arraybuffer", s.onreadystatechange = function() {
                                return 4 === s.readyState ? 200 === s.status ? e({
                                    response: s.response,
                                    type: s.getResponseHeader("Content-Type")
                                }) : void i({
                                    status: s.status,
                                    response: s.response
                                }) : void 0
                            }, s.send()
                        })
                    }

                    function n(t) {
                        return new Promise(function(i, n) {
                            var r = e([""], {
                                    type: "image/png"
                                }),
                                o = t.transaction([E], "readwrite");
                            o.objectStore(E).put(r, "key"), o.oncomplete = function() {
                                var e = t.transaction([E], "readwrite"),
                                    r = e.objectStore(E).get("key");
                                r.onerror = n, r.onsuccess = function(t) {
                                    var e = t.target.result,
                                        n = URL.createObjectURL(e);
                                    s(n).then(function(t) {
                                        i(!(!t || "image/png" !== t.type))
                                    }, function() {
                                        i(!1)
                                    }).then(function() {
                                        URL.revokeObjectURL(n)
                                    })
                                }
                            }, o.onerror = o.onabort = n
                        })["catch"](function() {
                            return !1
                        })
                    }

                    function r(t) {
                        return "boolean" == typeof C ? Promise.resolve(C) : n(t).then(function(t) {
                            return C = t
                        })
                    }

                    function o(t) {
                        return new Promise(function(e, i) {
                            var s = new FileReader;
                            s.onerror = i, s.onloadend = function(i) {
                                var s = btoa(i.target.result || "");
                                e({
                                    __local_forage_encoded_blob: !0,
                                    data: s,
                                    type: t.type
                                })
                            }, s.readAsBinaryString(t)
                        })
                    }

                    function a(t) {
                        var s = i(atob(t.data));
                        return e([s], {
                            type: t.type
                        })
                    }

                    function h(t) {
                        return t && t.__local_forage_encoded_blob
                    }

                    function c(t) {
                        var e = this,
                            i = e._initReady().then(function() {
                                var t = k[e._dbInfo.name];
                                return t && t.dbReady ? t.dbReady : void 0
                            });
                        return i.then(t, t), i
                    }

                    function l(t) {
                        var e = k[t.name],
                            i = {};
                        i.promise = new Promise(function(t) {
                            i.resolve = t
                        }), e.deferredOperations.push(i), e.dbReady ? e.dbReady = e.dbReady.then(function() {
                            return i.promise
                        }) : e.dbReady = i.promise
                    }

                    function u(t) {
                        var e = k[t.name],
                            i = e.deferredOperations.pop();
                        i && i.resolve()
                    }

                    function p(t) {
                        function e() {
                            return Promise.resolve()
                        }
                        var i = this,
                            s = {
                                db: null
                            };
                        if (t)
                            for (var n in t) s[n] = t[n];
                        k || (k = {});
                        var r = k[s.name];
                        r || (r = {
                            forages: [],
                            db: null,
                            dbReady: null,
                            deferredOperations: []
                        }, k[s.name] = r), r.forages.push(i), i._initReady || (i._initReady = i.ready, i.ready = c);
                        for (var o = [], a = 0; a < r.forages.length; a++) {
                            var h = r.forages[a];
                            h !== i && o.push(h._initReady()["catch"](e))
                        }
                        var l = r.forages.slice(0);
                        return Promise.all(o).then(function() {
                            return s.db = r.db, d(s)
                        }).then(function(t) {
                            return s.db = t, y(s, i._defaultConfig.version) ? f(s) : t
                        }).then(function(t) {
                            s.db = r.db = t, i._dbInfo = s;
                            for (var e = 0; e < l.length; e++) {
                                var n = l[e];
                                n !== i && (n._dbInfo.db = s.db, n._dbInfo.version = s.version)
                            }
                        })
                    }

                    function d(t) {
                        return g(t, !1)
                    }

                    function f(t) {
                        return g(t, !0)
                    }

                    function g(e, i) {
                        return new Promise(function(s, n) {
                            if (e.db) {
                                if (!i) return s(e.db);
                                l(e), e.db.close()
                            }
                            var r = [e.name];
                            i && r.push(e.version);
                            var o = A.open.apply(A, r);
                            i && (o.onupgradeneeded = function(i) {
                                var s = o.result;
                                try {
                                    s.createObjectStore(e.storeName), i.oldVersion <= 1 && s.createObjectStore(E)
                                } catch (n) {
                                    if ("ConstraintError" !== n.name) throw n;
                                    t.console.warn('The database "' + e.name + '" has been upgraded from version ' + i.oldVersion + " to version " + i.newVersion + ', but the storage "' + e.storeName + '" already exists.')
                                }
                            }), o.onerror = function() {
                                n(o.error)
                            }, o.onsuccess = function() {
                                s(o.result), u(e)
                            }
                        })
                    }

                    function y(e, i) {
                        if (!e.db) return !0;
                        var s = !e.db.objectStoreNames.contains(e.storeName),
                            n = e.version < e.db.version,
                            r = e.version > e.db.version;
                        if (n && (e.version !== i && t.console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), r || s) {
                            if (s) {
                                var o = e.db.version + 1;
                                o > e.version && (e.version = o)
                            }
                            return !0
                        }
                        return !1
                    }

                    function m(e, i) {
                        var s = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var n = new Promise(function(t, i) {
                            s.ready().then(function() {
                                var n = s._dbInfo,
                                    r = n.db.transaction(n.storeName, "readonly").objectStore(n.storeName),
                                    o = r.get(e);
                                o.onsuccess = function() {
                                    var e = o.result;
                                    void 0 === e && (e = null), h(e) && (e = a(e)), t(e)
                                }, o.onerror = function() {
                                    i(o.error)
                                }
                            })["catch"](i)
                        });
                        return O(n, i), n
                    }

                    function _(t, e) {
                        var i = this,
                            s = new Promise(function(e, s) {
                                i.ready().then(function() {
                                    var n = i._dbInfo,
                                        r = n.db.transaction(n.storeName, "readonly").objectStore(n.storeName),
                                        o = r.openCursor(),
                                        c = 1;
                                    o.onsuccess = function() {
                                        var i = o.result;
                                        if (i) {
                                            var s = i.value;
                                            h(s) && (s = a(s));
                                            var n = t(s, i.key, c++);
                                            void 0 !== n ? e(n) : i["continue"]()
                                        } else e()
                                    }, o.onerror = function() {
                                        s(o.error)
                                    }
                                })["catch"](s)
                            });
                        return O(s, e), s
                    }

                    function v(e, i, s) {
                        var n = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var a = new Promise(function(t, s) {
                            var a;
                            n.ready().then(function() {
                                return a = n._dbInfo, i instanceof Blob ? r(a.db).then(function(t) {
                                    return t ? i : o(i)
                                }) : i
                            }).then(function(i) {
                                var n = a.db.transaction(a.storeName, "readwrite"),
                                    r = n.objectStore(a.storeName);
                                null === i && (i = void 0), n.oncomplete = function() {
                                    void 0 === i && (i = null), t(i)
                                }, n.onabort = n.onerror = function() {
                                    var t = o.error ? o.error : o.transaction.error;
                                    s(t)
                                };
                                var o = r.put(i, e)
                            })["catch"](s)
                        });
                        return O(a, s), a
                    }

                    function b(e, i) {
                        var s = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var n = new Promise(function(t, i) {
                            s.ready().then(function() {
                                var n = s._dbInfo,
                                    r = n.db.transaction(n.storeName, "readwrite"),
                                    o = r.objectStore(n.storeName),
                                    a = o["delete"](e);
                                r.oncomplete = function() {
                                    t()
                                }, r.onerror = function() {
                                    i(a.error)
                                }, r.onabort = function() {
                                    var t = a.error ? a.error : a.transaction.error;
                                    i(t)
                                }
                            })["catch"](i)
                        });
                        return O(n, i), n
                    }

                    function w(t) {
                        var e = this,
                            i = new Promise(function(t, i) {
                                e.ready().then(function() {
                                    var s = e._dbInfo,
                                        n = s.db.transaction(s.storeName, "readwrite"),
                                        r = n.objectStore(s.storeName),
                                        o = r.clear();
                                    n.oncomplete = function() {
                                        t()
                                    }, n.onabort = n.onerror = function() {
                                        var t = o.error ? o.error : o.transaction.error;
                                        i(t)
                                    }
                                })["catch"](i)
                            });
                        return O(i, t), i
                    }

                    function x(t) {
                        var e = this,
                            i = new Promise(function(t, i) {
                                e.ready().then(function() {
                                    var s = e._dbInfo,
                                        n = s.db.transaction(s.storeName, "readonly").objectStore(s.storeName),
                                        r = n.count();
                                    r.onsuccess = function() {
                                        t(r.result)
                                    }, r.onerror = function() {
                                        i(r.error)
                                    }
                                })["catch"](i)
                            });
                        return O(i, t), i
                    }

                    function S(t, e) {
                        var i = this,
                            s = new Promise(function(e, s) {
                                return 0 > t ? void e(null) : void i.ready().then(function() {
                                    var n = i._dbInfo,
                                        r = n.db.transaction(n.storeName, "readonly").objectStore(n.storeName),
                                        o = !1,
                                        a = r.openCursor();
                                    a.onsuccess = function() {
                                        var i = a.result;
                                        return i ? void(0 === t ? e(i.key) : o ? e(i.key) : (o = !0, i.advance(t))) : void e(null)
                                    }, a.onerror = function() {
                                        s(a.error)
                                    }
                                })["catch"](s)
                            });
                        return O(s, e), s
                    }

                    function T(t) {
                        var e = this,
                            i = new Promise(function(t, i) {
                                e.ready().then(function() {
                                    var s = e._dbInfo,
                                        n = s.db.transaction(s.storeName, "readonly").objectStore(s.storeName),
                                        r = n.openCursor(),
                                        o = [];
                                    r.onsuccess = function() {
                                        var e = r.result;
                                        return e ? (o.push(e.key), void e["continue"]()) : void t(o)
                                    }, r.onerror = function() {
                                        i(r.error)
                                    }
                                })["catch"](i)
                            });
                        return O(i, t), i
                    }

                    function O(t, e) {
                        e && t.then(function(t) {
                            e(null, t)
                        }, function(t) {
                            e(t)
                        })
                    }
                    var A = A || t.indexedDB || t.webkitIndexedDB || t.mozIndexedDB || t.OIndexedDB || t.msIndexedDB;
                    if (A) {
                        var C, k, E = "local-forage-detect-blob-support",
                            P = {
                                _driver: "asyncStorage",
                                _initStorage: p,
                                iterate: _,
                                getItem: m,
                                setItem: v,
                                removeItem: b,
                                clear: w,
                                length: x,
                                key: S,
                                keys: T
                            };
                        return P
                    }
                }("undefined" != typeof window ? window : self);
                e["default"] = i, t.exports = e["default"]
            },
            function(t, e, i) {
                "use strict";
                e.__esModule = !0;
                var s = function(t) {
                    function e(t) {
                        var e = this,
                            s = {};
                        if (t)
                            for (var n in t) s[n] = t[n];
                        return s.keyPrefix = s.name + "/", s.storeName !== e._defaultConfig.storeName && (s.keyPrefix += s.storeName + "/"), e._dbInfo = s, new Promise(function(t, e) {
                            t(i(3))
                        }).then(function(t) {
                            return s.serializer = t, Promise.resolve()
                        })
                    }

                    function s(t) {
                        var e = this,
                            i = e.ready().then(function() {
                                for (var t = e._dbInfo.keyPrefix, i = p.length - 1; i >= 0; i--) {
                                    var s = p.key(i);
                                    0 === s.indexOf(t) && p.removeItem(s)
                                }
                            });
                        return u(i, t), i
                    }

                    function n(e, i) {
                        var s = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var n = s.ready().then(function() {
                            var t = s._dbInfo,
                                i = p.getItem(t.keyPrefix + e);
                            return i && (i = t.serializer.deserialize(i)), i
                        });
                        return u(n, i), n
                    }

                    function r(t, e) {
                        var i = this,
                            s = i.ready().then(function() {
                                for (var e = i._dbInfo, s = e.keyPrefix, n = s.length, r = p.length, o = 1, a = 0; r > a; a++) {
                                    var h = p.key(a);
                                    if (0 === h.indexOf(s)) {
                                        var c = p.getItem(h);
                                        if (c && (c = e.serializer.deserialize(c)), c = t(c, h.substring(n), o++), void 0 !== c) return c
                                    }
                                }
                            });
                        return u(s, e), s
                    }

                    function o(t, e) {
                        var i = this,
                            s = i.ready().then(function() {
                                var e, s = i._dbInfo;
                                try {
                                    e = p.key(t)
                                } catch (n) {
                                    e = null
                                }
                                return e && (e = e.substring(s.keyPrefix.length)), e
                            });
                        return u(s, e), s
                    }

                    function a(t) {
                        var e = this,
                            i = e.ready().then(function() {
                                for (var t = e._dbInfo, i = p.length, s = [], n = 0; i > n; n++) 0 === p.key(n).indexOf(t.keyPrefix) && s.push(p.key(n).substring(t.keyPrefix.length));
                                return s
                            });
                        return u(i, t), i
                    }

                    function h(t) {
                        var e = this,
                            i = e.keys().then(function(t) {
                                return t.length
                            });
                        return u(i, t), i
                    }

                    function c(e, i) {
                        var s = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var n = s.ready().then(function() {
                            var t = s._dbInfo;
                            p.removeItem(t.keyPrefix + e)
                        });
                        return u(n, i), n
                    }

                    function l(e, i, s) {
                        var n = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var r = n.ready().then(function() {
                            void 0 === i && (i = null);
                            var t = i;
                            return new Promise(function(s, r) {
                                var o = n._dbInfo;
                                o.serializer.serialize(i, function(i, n) {
                                    if (n) r(n);
                                    else try {
                                        p.setItem(o.keyPrefix + e, i), s(t)
                                    } catch (a) {
                                        ("QuotaExceededError" === a.name || "NS_ERROR_DOM_QUOTA_REACHED" === a.name) && r(a), r(a)
                                    }
                                })
                            })
                        });
                        return u(r, s), r
                    }

                    function u(t, e) {
                        e && t.then(function(t) {
                            e(null, t)
                        }, function(t) {
                            e(t)
                        })
                    }
                    var p = null;
                    try {
                        if (!(t.localStorage && "setItem" in t.localStorage)) return;
                        p = t.localStorage
                    } catch (d) {
                        return
                    }
                    var f = {
                        _driver: "localStorageWrapper",
                        _initStorage: e,
                        iterate: r,
                        getItem: n,
                        setItem: l,
                        removeItem: c,
                        clear: s,
                        length: h,
                        key: o,
                        keys: a
                    };
                    return f
                }("undefined" != typeof window ? window : self);
                e["default"] = s, t.exports = e["default"]
            },
            function(t, e) {
                "use strict";
                e.__esModule = !0;
                var i = function(t) {
                    function e(e, i) {
                        e = e || [], i = i || {};
                        try {
                            return new Blob(e, i)
                        } catch (s) {
                            if ("TypeError" !== s.name) throw s;
                            for (var n = t.BlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder || t.WebKitBlobBuilder, r = new n, o = 0; o < e.length; o += 1) r.append(e[o]);
                            return r.getBlob(i.type)
                        }
                    }

                    function i(t, e) {
                        var i = "";
                        if (t && (i = t.toString()), t && ("[object ArrayBuffer]" === t.toString() || t.buffer && "[object ArrayBuffer]" === t.buffer.toString())) {
                            var s, n = c;
                            t instanceof ArrayBuffer ? (s = t, n += u) : (s = t.buffer, "[object Int8Array]" === i ? n += d : "[object Uint8Array]" === i ? n += f : "[object Uint8ClampedArray]" === i ? n += g : "[object Int16Array]" === i ? n += y : "[object Uint16Array]" === i ? n += _ : "[object Int32Array]" === i ? n += m : "[object Uint32Array]" === i ? n += v : "[object Float32Array]" === i ? n += b : "[object Float64Array]" === i ? n += w : e(new Error("Failed to get type for BinaryArray"))), e(n + r(s))
                        } else if ("[object Blob]" === i) {
                            var o = new FileReader;
                            o.onload = function() {
                                var i = a + t.type + "~" + r(this.result);
                                e(c + p + i)
                            }, o.readAsArrayBuffer(t)
                        } else try {
                            e(JSON.stringify(t))
                        } catch (h) {
                            console.error("Couldn't convert value into a JSON string: ", t), e(null, h)
                        }
                    }

                    function s(t) {
                        if (t.substring(0, l) !== c) return JSON.parse(t);
                        var i, s = t.substring(x),
                            r = t.substring(l, x);
                        if (r === p && h.test(s)) {
                            var o = s.match(h);
                            i = o[1], s = s.substring(o[0].length)
                        }
                        var a = n(s);
                        switch (r) {
                            case u:
                                return a;
                            case p:
                                return e([a], {
                                    type: i
                                });
                            case d:
                                return new Int8Array(a);
                            case f:
                                return new Uint8Array(a);
                            case g:
                                return new Uint8ClampedArray(a);
                            case y:
                                return new Int16Array(a);
                            case _:
                                return new Uint16Array(a);
                            case m:
                                return new Int32Array(a);
                            case v:
                                return new Uint32Array(a);
                            case b:
                                return new Float32Array(a);
                            case w:
                                return new Float64Array(a);
                            default:
                                throw new Error("Unkown type: " + r)
                        }
                    }

                    function n(t) {
                        var e, i, s, n, r, a = .75 * t.length,
                            h = t.length,
                            c = 0;
                        "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
                        var l = new ArrayBuffer(a),
                            u = new Uint8Array(l);
                        for (e = 0; h > e; e += 4) i = o.indexOf(t[e]), s = o.indexOf(t[e + 1]), n = o.indexOf(t[e + 2]), r = o.indexOf(t[e + 3]), u[c++] = i << 2 | s >> 4, u[c++] = (15 & s) << 4 | n >> 2, u[c++] = (3 & n) << 6 | 63 & r;
                        return l
                    }

                    function r(t) {
                        var e, i = new Uint8Array(t),
                            s = "";
                        for (e = 0; e < i.length; e += 3) s += o[i[e] >> 2], s += o[(3 & i[e]) << 4 | i[e + 1] >> 4], s += o[(15 & i[e + 1]) << 2 | i[e + 2] >> 6], s += o[63 & i[e + 2]];
                        return i.length % 3 === 2 ? s = s.substring(0, s.length - 1) + "=" : i.length % 3 === 1 && (s = s.substring(0, s.length - 2) + "=="), s
                    }
                    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        a = "~~local_forage_type~",
                        h = /^~~local_forage_type~([^~]+)~/,
                        c = "__lfsc__:",
                        l = c.length,
                        u = "arbf",
                        p = "blob",
                        d = "si08",
                        f = "ui08",
                        g = "uic8",
                        y = "si16",
                        m = "si32",
                        _ = "ur16",
                        v = "ui32",
                        b = "fl32",
                        w = "fl64",
                        x = l + u.length,
                        S = {
                            serialize: i,
                            deserialize: s,
                            stringToBuffer: n,
                            bufferToString: r
                        };
                    return S
                }("undefined" != typeof window ? window : self);
                e["default"] = i, t.exports = e["default"]
            },
            function(t, e, i) {
                "use strict";
                e.__esModule = !0;
                var s = function(t) {
                    function e(t) {
                        var e = this,
                            s = {
                                db: null
                            };
                        if (t)
                            for (var n in t) s[n] = "string" != typeof t[n] ? t[n].toString() : t[n];
                        var r = new Promise(function(t, i) {
                            try {
                                s.db = p(s.name, String(s.version), s.description, s.size)
                            } catch (n) {
                                return i(n)
                            }
                            s.db.transaction(function(n) {
                                n.executeSql("CREATE TABLE IF NOT EXISTS " + s.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
                                    e._dbInfo = s, t()
                                }, function(t, e) {
                                    i(e)
                                })
                            })
                        });
                        return new Promise(function(t, e) {
                            t(i(3))
                        }).then(function(t) {
                            return s.serializer = t, r
                        })
                    }

                    function s(e, i) {
                        var s = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var n = new Promise(function(t, i) {
                            s.ready().then(function() {
                                var n = s._dbInfo;
                                n.db.transaction(function(s) {
                                    s.executeSql("SELECT * FROM " + n.storeName + " WHERE key = ? LIMIT 1", [e], function(e, i) {
                                        var s = i.rows.length ? i.rows.item(0).value : null;
                                        s && (s = n.serializer.deserialize(s)), t(s)
                                    }, function(t, e) {
                                        i(e)
                                    })
                                })
                            })["catch"](i)
                        });
                        return u(n, i), n
                    }

                    function n(t, e) {
                        var i = this,
                            s = new Promise(function(e, s) {
                                i.ready().then(function() {
                                    var n = i._dbInfo;
                                    n.db.transaction(function(i) {
                                        i.executeSql("SELECT * FROM " + n.storeName, [], function(i, s) {
                                            for (var r = s.rows, o = r.length, a = 0; o > a; a++) {
                                                var h = r.item(a),
                                                    c = h.value;
                                                if (c && (c = n.serializer.deserialize(c)), c = t(c, h.key, a + 1), void 0 !== c) return void e(c)
                                            }
                                            e()
                                        }, function(t, e) {
                                            s(e)
                                        })
                                    })
                                })["catch"](s)
                            });
                        return u(s, e), s
                    }

                    function r(e, i, s) {
                        var n = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var r = new Promise(function(t, s) {
                            n.ready().then(function() {
                                void 0 === i && (i = null);
                                var r = i,
                                    o = n._dbInfo;
                                o.serializer.serialize(i, function(i, n) {
                                    n ? s(n) : o.db.transaction(function(n) {
                                        n.executeSql("INSERT OR REPLACE INTO " + o.storeName + " (key, value) VALUES (?, ?)", [e, i], function() {
                                            t(r)
                                        }, function(t, e) {
                                            s(e)
                                        })
                                    }, function(t) {
                                        t.code === t.QUOTA_ERR && s(t)
                                    })
                                })
                            })["catch"](s)
                        });
                        return u(r, s), r
                    }

                    function o(e, i) {
                        var s = this;
                        "string" != typeof e && (t.console.warn(e + " used as a key, but it is not a string."), e = String(e));
                        var n = new Promise(function(t, i) {
                            s.ready().then(function() {
                                var n = s._dbInfo;
                                n.db.transaction(function(s) {
                                    s.executeSql("DELETE FROM " + n.storeName + " WHERE key = ?", [e], function() {
                                        t()
                                    }, function(t, e) {
                                        i(e)
                                    })
                                })
                            })["catch"](i)
                        });
                        return u(n, i), n
                    }

                    function a(t) {
                        var e = this,
                            i = new Promise(function(t, i) {
                                e.ready().then(function() {
                                    var s = e._dbInfo;
                                    s.db.transaction(function(e) {
                                        e.executeSql("DELETE FROM " + s.storeName, [], function() {
                                            t()
                                        }, function(t, e) {
                                            i(e)
                                        })
                                    })
                                })["catch"](i)
                            });
                        return u(i, t), i
                    }

                    function h(t) {
                        var e = this,
                            i = new Promise(function(t, i) {
                                e.ready().then(function() {
                                    var s = e._dbInfo;
                                    s.db.transaction(function(e) {
                                        e.executeSql("SELECT COUNT(key) as c FROM " + s.storeName, [], function(e, i) {
                                            var s = i.rows.item(0).c;
                                            t(s)
                                        }, function(t, e) {
                                            i(e)
                                        })
                                    })
                                })["catch"](i)
                            });
                        return u(i, t), i
                    }

                    function c(t, e) {
                        var i = this,
                            s = new Promise(function(e, s) {
                                i.ready().then(function() {
                                    var n = i._dbInfo;
                                    n.db.transaction(function(i) {
                                        i.executeSql("SELECT key FROM " + n.storeName + " WHERE id = ? LIMIT 1", [t + 1], function(t, i) {
                                            var s = i.rows.length ? i.rows.item(0).key : null;
                                            e(s)
                                        }, function(t, e) {
                                            s(e)
                                        })
                                    })
                                })["catch"](s)
                            });
                        return u(s, e), s
                    }

                    function l(t) {
                        var e = this,
                            i = new Promise(function(t, i) {
                                e.ready().then(function() {
                                    var s = e._dbInfo;
                                    s.db.transaction(function(e) {
                                        e.executeSql("SELECT key FROM " + s.storeName, [], function(e, i) {
                                            for (var s = [], n = 0; n < i.rows.length; n++) s.push(i.rows.item(n).key);
                                            t(s)
                                        }, function(t, e) {
                                            i(e)
                                        })
                                    })
                                })["catch"](i)
                            });
                        return u(i, t), i
                    }

                    function u(t, e) {
                        e && t.then(function(t) {
                            e(null, t)
                        }, function(t) {
                            e(t)
                        })
                    }
                    var p = t.openDatabase;
                    if (p) {
                        var d = {
                            _driver: "webSQLStorage",
                            _initStorage: e,
                            iterate: n,
                            getItem: s,
                            setItem: r,
                            removeItem: o,
                            clear: a,
                            length: h,
                            key: c,
                            keys: l
                        };
                        return d
                    }
                }("undefined" != typeof window ? window : self);
                e["default"] = s, t.exports = e["default"]
            }
        ])
    })
} catch (e) {
    localForageInitFailed = !0
}
cr.plugins_.LocalStorage = function(t) {
        this.runtime = t
    },
    function() {
        function t(t) {
            return t ? "string" == typeof t ? t : "string" == typeof t.message ? t.message : "string" == typeof t.name ? t.name : "string" == typeof t.data ? t.data : "unknown error" : "unknown error"
        }

        function e(t, e) {
            l = e, t.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, t)
        }

        function i(t) {
            return u ? t.substr(0, u.length) === u : !0
        }

        function s(t) {
            return u ? i(t) ? t.substr(u.length) : void 0 : t
        }

        function n() {}

        function r() {}

        function o() {}
        var a = "",
            h = "",
            c = [],
            l = "",
            u = window.famobi_gameID + ":",
            p = "undefined" != typeof window.is_scirra_arcade;
        p && (u = "sa" + window.scirra_arcade_id + "_");
        var d = cr.plugins_.LocalStorage.prototype;
        d.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var f = d.Type.prototype;
        f.onCreate = function() {}, d.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var g = d.Instance.prototype;
        g.onCreate = function() {
            this.pendingSets = 0, this.pendingGets = 0
        }, g.onDestroy = function() {}, g.saveToJSON = function() {
            return {}
        }, g.loadFromJSON = function(t) {};
        var y = !0;
        n.prototype.OnItemSet = function(t) {
            return a === t
        }, n.prototype.OnAnyItemSet = function() {
            return !0
        }, n.prototype.OnItemGet = function(t) {
            return a === t
        }, n.prototype.OnAnyItemGet = function() {
            return !0
        }, n.prototype.OnItemRemoved = function(t) {
            return a === t
        }, n.prototype.OnAnyItemRemoved = function() {
            return !0
        }, n.prototype.OnCleared = function() {
            return !0
        }, n.prototype.OnAllKeyNamesLoaded = function() {
            return !0
        }, n.prototype.OnError = function() {
            return !0
        }, n.prototype.OnItemExists = function(t) {
            return a === t
        }, n.prototype.OnItemMissing = function(t) {
            return a === t
        }, n.prototype.CompareKey = function(t, e) {
            return cr.do_cmp(a, t, e)
        }, n.prototype.CompareValue = function(t, e) {
            return cr.do_cmp(h, t, e)
        }, n.prototype.IsProcessingSets = function() {
            return this.pendingSets > 0
        }, n.prototype.IsProcessingGets = function() {
            return this.pendingGets > 0
        }, n.prototype.OnAllSetsComplete = function() {
            return !0
        }, n.prototype.OnAllGetsComplete = function() {
            return !0
        }, d.cnds = new n, r.prototype.SetItem = function(i, s) {
            if (localForageInitFailed) return void e(this, "storage failed to initialise - may be disabled in browser settings");
            var n = u + i;
            this.pendingSets++;
            var r = this;
            localforage.setItem(n, s, function(e, s) {
                y = !0, r.pendingSets--, e ? (l = t(e), r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, r)) : (a = i, h = s, r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemSet, r), r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemSet, r), a = "", h = ""), 0 === r.pendingSets && r.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllSetsComplete, r)
            })
        }, r.prototype.GetItem = function(i) {
            if (localForageInitFailed) return void e(this, "storage failed to initialise - may be disabled in browser settings");
            var s = u + i;
            this.pendingGets++;
            var n = this;
            localforage.getItem(s, function(e, s) {
                n.pendingGets--, e ? (l = t(e), n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, n)) : (a = i, h = s, ("undefined" == typeof h || null === h) && (h = ""), n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemGet, n), n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemGet, n), a = "", h = ""), 0 === n.pendingGets && n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllGetsComplete, n)
            })
        }, r.prototype.CheckItemExists = function(i) {
            if (localForageInitFailed) return void e(this, "storage failed to initialise - may be disabled in browser settings");
            var s = u + i,
                n = this;
            localforage.getItem(s, function(e, s) {
                e ? (l = t(e), n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, n)) : (a = i, null === s ? (h = "", n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemMissing, n)) : (h = s, n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemExists, n)), a = "", h = "")
            })
        }, r.prototype.RemoveItem = function(i) {
            if (localForageInitFailed) return void e(this, "storage failed to initialise - may be disabled in browser settings");
            var s = u + i,
                n = this;
            localforage.removeItem(s, function(e) {
                y = !0, e ? (l = t(e), n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, n)) : (a = i, h = "", n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAnyItemRemoved, n), n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnItemRemoved, n), a = "")
            })
        }, r.prototype.ClearStorage = function() {
            if (localForageInitFailed) return void e(this, "storage failed to initialise - may be disabled in browser settings");
            if (!p) {
                var i = this;
                localforage.clear(function(e) {
                    y = !0, e ? (l = t(e), i.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, i)) : (a = "", h = "", cr.clearArray(c), i.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnCleared, i))
                })
            }
        }, r.prototype.GetAllKeyNames = function() {
            if (localForageInitFailed) return void e(this, "storage failed to initialise - may be disabled in browser settings");
            var n = this;
            localforage.keys(function(e, r) {
                var o, a, h;
                if (e) l = t(e), n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnError, n);
                else {
                    for (cr.clearArray(c), o = 0, a = r.length; a > o; ++o) h = r[o], i(h) && c.push(s(h));
                    n.runtime.trigger(cr.plugins_.LocalStorage.prototype.cnds.OnAllKeyNamesLoaded, n)
                }
            })
        }, d.acts = new r, o.prototype.ItemValue = function(t) {
            t.set_any(h)
        }, o.prototype.Key = function(t) {
            t.set_string(a)
        }, o.prototype.KeyCount = function(t) {
            t.set_int(c.length)
        }, o.prototype.KeyAt = function(t, e) {
            return e = Math.floor(e), 0 > e || e >= c.length ? void t.set_string("") : void t.set_string(c[e])
        }, o.prototype.ErrorMessage = function(t) {
            t.set_string(l)
        }, d.exps = new o
    }(), cr.plugins_.Particles = function(t) {
        this.runtime = t
    },
    function() {
        function t(t) {
            this.owner = t, this.active = !1, this.x = 0, this.y = 0, this.speed = 0, this.angle = 0, this.opacity = 1, this.grow = 0, this.size = 0, this.gs = 0, this.age = 0, cr.seal(this)
        }

        function e() {}

        function i() {}

        function s() {}
        var n = cr.plugins_.Particles.prototype;
        n.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var r = n.Type.prototype;
        r.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.cr_filesize = this.texture_filesize, this.webGL_texture = null, this.runtime.waitForImageLoad(this.texture_img, this.texture_file))
        }, r.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, r.onRestoreWebGLContext = function() {
            !this.is_family && this.instances.length && (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat)))
        }, r.loadTextures = function() {
            this.is_family || this.webGL_texture || !this.runtime.glwrap || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat))
        }, r.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, r.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, t.prototype.init = function() {
            var t = this.owner;
            this.x = t.x - t.xrandom / 2 + Math.random() * t.xrandom, this.y = t.y - t.yrandom / 2 + Math.random() * t.yrandom, this.speed = t.initspeed - t.speedrandom / 2 + Math.random() * t.speedrandom, this.angle = t.angle - t.spraycone / 2 + Math.random() * t.spraycone, this.opacity = t.initopacity, this.size = t.initsize - t.sizerandom / 2 + Math.random() * t.sizerandom, this.grow = t.growrate - t.growrandom / 2 + Math.random() * t.growrandom, this.gs = 0, this.age = 0
        }, t.prototype.tick = function(t) {
            var e = this.owner;
            return this.x += Math.cos(this.angle) * this.speed * t, this.y += Math.sin(this.angle) * this.speed * t, this.y += this.gs * t, this.speed += e.acc * t, this.size += this.grow * t, this.gs += e.g * t, this.age += t, this.size < 1 ? void(this.active = !1) : (0 !== e.lifeanglerandom && (this.angle += Math.random() * e.lifeanglerandom * t - e.lifeanglerandom * t / 2), 0 !== e.lifespeedrandom && (this.speed += Math.random() * e.lifespeedrandom * t - e.lifespeedrandom * t / 2), 0 !== e.lifeopacityrandom && (this.opacity += Math.random() * e.lifeopacityrandom * t - e.lifeopacityrandom * t / 2, this.opacity < 0 ? this.opacity = 0 : this.opacity > 1 && (this.opacity = 1)), e.destroymode <= 1 && this.age >= e.timeout && (this.active = !1), void(2 === e.destroymode && this.speed <= 0 && (this.active = !1)))
        }, t.prototype.draw = function(t) {
            var e = this.owner.opacity * this.opacity;
            if (0 !== e) {
                0 === this.owner.destroymode && (e *= 1 - this.age / this.owner.timeout), t.globalAlpha = e;
                var i = this.x - this.size / 2,
                    s = this.y - this.size / 2;
                this.owner.runtime.pixel_rounding && (i = i + .5 | 0, s = s + .5 | 0), t.drawImage(this.owner.type.texture_img, i, s, this.size, this.size)
            }
        }, t.prototype.drawGL = function(t) {
            var e = this.owner.opacity * this.opacity;
            0 === this.owner.destroymode && (e *= 1 - this.age / this.owner.timeout);
            var i = this.size,
                s = i * this.owner.particlescale,
                n = this.x - i / 2,
                r = this.y - i / 2;
            this.owner.runtime.pixel_rounding && (n = n + .5 | 0, r = r + .5 | 0), 1 > s || 0 === e || (s < t.minPointSize || s > t.maxPointSize ? (t.setOpacity(e), t.quad(n, r, n + i, r, n + i, r + i, n, r + i)) : t.point(this.x, this.y, s, e))
        }, t.prototype.left = function() {
            return this.x - this.size / 2
        }, t.prototype.right = function() {
            return this.x + this.size / 2
        }, t.prototype.top = function() {
            return this.y - this.size / 2
        }, t.prototype.bottom = function() {
            return this.y + this.size / 2
        }, n.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var o = n.Instance.prototype,
            a = [];
        o.onCreate = function() {
            var t = this.properties;
            if (this.rate = t[0], this.spraycone = cr.to_radians(t[1]), this.spraytype = t[2], this.spraying = !0, this.initspeed = t[3], this.initsize = t[4], this.initopacity = t[5] / 100, this.growrate = t[6], this.xrandom = t[7], this.yrandom = t[8], this.speedrandom = t[9], this.sizerandom = t[10], this.growrandom = t[11], this.acc = t[12], this.g = t[13], this.lifeanglerandom = t[14], this.lifespeedrandom = t[15], this.lifeopacityrandom = t[16], this.destroymode = t[17], this.timeout = t[18], this.particleCreateCounter = 0, this.particlescale = 1, this.particleBoxLeft = this.x, this.particleBoxTop = this.y, this.particleBoxRight = this.x, this.particleBoxBottom = this.y, this.add_bbox_changed_callback(function(t) {
                t.bbox.set(t.particleBoxLeft, t.particleBoxTop, t.particleBoxRight, t.particleBoxBottom), t.bquad.set_from_rect(t.bbox), t.bbox_changed = !1, t.update_collision_cell(), t.update_render_cell()
            }), this.recycled || (this.particles = []), this.runtime.tickMe(this), this.type.loadTextures(), 1 === this.spraytype)
                for (var e = 0; e < this.rate; e++) this.allocateParticle().opacity = 0;
            this.first_tick = !0
        }, o.saveToJSON = function() {
            var t, e, i, s = {
                    r: this.rate,
                    sc: this.spraycone,
                    st: this.spraytype,
                    s: this.spraying,
                    isp: this.initspeed,
                    isz: this.initsize,
                    io: this.initopacity,
                    gr: this.growrate,
                    xr: this.xrandom,
                    yr: this.yrandom,
                    spr: this.speedrandom,
                    szr: this.sizerandom,
                    grnd: this.growrandom,
                    acc: this.acc,
                    g: this.g,
                    lar: this.lifeanglerandom,
                    lsr: this.lifespeedrandom,
                    lor: this.lifeopacityrandom,
                    dm: this.destroymode,
                    to: this.timeout,
                    pcc: this.particleCreateCounter,
                    ft: this.first_tick,
                    p: []
                },
                n = s.p;
            for (t = 0, e = this.particles.length; e > t; t++) i = this.particles[t], n.push([i.x, i.y, i.speed, i.angle, i.opacity, i.grow, i.size, i.gs, i.age]);
            return s
        }, o.loadFromJSON = function(t) {
            this.rate = t.r, this.spraycone = t.sc, this.spraytype = t.st, this.spraying = t.s, this.initspeed = t.isp, this.initsize = t.isz, this.initopacity = t.io, this.growrate = t.gr, this.xrandom = t.xr, this.yrandom = t.yr, this.speedrandom = t.spr, this.sizerandom = t.szr, this.growrandom = t.grnd, this.acc = t.acc, this.g = t.g, this.lifeanglerandom = t.lar, this.lifespeedrandom = t.lsr, this.lifeopacityrandom = t.lor, this.destroymode = t.dm, this.timeout = t.to, this.particleCreateCounter = t.pcc, this.first_tick = t.ft, a.push.apply(a, this.particles), cr.clearArray(this.particles);
            var e, i, s, n, r = t.p;
            for (e = 0, i = r.length; i > e; e++) s = this.allocateParticle(), n = r[e], s.x = n[0], s.y = n[1], s.speed = n[2], s.angle = n[3], s.opacity = n[4], s.grow = n[5], s.size = n[6], s.gs = n[7], s.age = n[8]
        }, o.onDestroy = function() {
            a.push.apply(a, this.particles), cr.clearArray(this.particles)
        }, o.allocateParticle = function() {
            var e;
            return a.length ? (e = a.pop(), e.owner = this) : e = new t(this), this.particles.push(e), e.active = !0, e
        }, o.tick = function() {
            var t, e, i, s, n, r = this.runtime.getDt(this);
            if (0 === this.spraytype && this.spraying)
                for (this.particleCreateCounter += r * this.rate, s = cr.floor(this.particleCreateCounter), this.particleCreateCounter -= s, t = 0; s > t; t++) i = this.allocateParticle(), i.init();
            for (this.particleBoxLeft = this.x, this.particleBoxTop = this.y, this.particleBoxRight = this.x, this.particleBoxBottom = this.y, t = 0, n = 0, e = this.particles.length; e > t; t++) i = this.particles[t], this.particles[n] = i, this.runtime.redraw = !0, 1 === this.spraytype && this.first_tick && i.init(), i.tick(r), i.active ? (i.left() < this.particleBoxLeft && (this.particleBoxLeft = i.left()), i.right() > this.particleBoxRight && (this.particleBoxRight = i.right()), i.top() < this.particleBoxTop && (this.particleBoxTop = i.top()), i.bottom() > this.particleBoxBottom && (this.particleBoxBottom = i.bottom()), n++) : a.push(i);
            cr.truncateArray(this.particles, n), this.set_bbox_changed(), this.first_tick = !1, 1 === this.spraytype && 0 === this.particles.length && this.runtime.DestroyInstance(this)
        }, o.draw = function(t) {
            var e, i, s, n = this.layer;
            for (e = 0, i = this.particles.length; i > e; e++) s = this.particles[e], s.right() >= n.viewLeft && s.bottom() >= n.viewTop && s.left() <= n.viewRight && s.top() <= n.viewBottom && s.draw(t)
        }, o.drawGL = function(t) {
            this.particlescale = this.layer.getScale(), t.setTexture(this.type.webGL_texture);
            var e, i, s, n = this.layer;
            for (e = 0, i = this.particles.length; i > e; e++) s = this.particles[e], s.right() >= n.viewLeft && s.bottom() >= n.viewTop && s.left() <= n.viewRight && s.top() <= n.viewBottom && s.drawGL(t)
        }, e.prototype.IsSpraying = function() {
            return this.spraying
        }, n.cnds = new e, i.prototype.SetSpraying = function(t) {
            this.spraying = 0 !== t
        }, i.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, i.prototype.SetRate = function(t) {
            this.rate = t;
            var e, i;
            if (1 === this.spraytype && this.first_tick)
                if (t < this.particles.length)
                    for (e = this.particles.length - t, i = 0; e > i; i++) a.push(this.particles.pop());
                else if (t > this.particles.length)
                for (e = t - this.particles.length, i = 0; e > i; i++) this.allocateParticle().opacity = 0
        }, i.prototype.SetSprayCone = function(t) {
            this.spraycone = cr.to_radians(t)
        }, i.prototype.SetInitSpeed = function(t) {
            this.initspeed = t
        }, i.prototype.SetInitSize = function(t) {
            this.initsize = t
        }, i.prototype.SetInitOpacity = function(t) {
            this.initopacity = t / 100
        }, i.prototype.SetGrowRate = function(t) {
            this.growrate = t
        }, i.prototype.SetXRandomiser = function(t) {
            this.xrandom = t
        }, i.prototype.SetYRandomiser = function(t) {
            this.yrandom = t
        }, i.prototype.SetSpeedRandomiser = function(t) {
            this.speedrandom = t
        }, i.prototype.SetSizeRandomiser = function(t) {
            this.sizerandom = t
        }, i.prototype.SetGrowRateRandomiser = function(t) {
            this.growrandom = t
        }, i.prototype.SetParticleAcc = function(t) {
            this.acc = t
        }, i.prototype.SetGravity = function(t) {
            this.g = t
        }, i.prototype.SetAngleRandomiser = function(t) {
            this.lifeanglerandom = t
        }, i.prototype.SetLifeSpeedRandomiser = function(t) {
            this.lifespeedrandom = t
        }, i.prototype.SetOpacityRandomiser = function(t) {
            this.lifeopacityrandom = t
        }, i.prototype.SetTimeout = function(t) {
            this.timeout = t
        }, n.acts = new i, s.prototype.ParticleCount = function(t) {
            t.set_int(this.particles.length)
        }, s.prototype.Rate = function(t) {
            t.set_float(this.rate)
        }, s.prototype.SprayCone = function(t) {
            t.set_float(cr.to_degrees(this.spraycone))
        }, s.prototype.InitSpeed = function(t) {
            t.set_float(this.initspeed)
        }, s.prototype.InitSize = function(t) {
            t.set_float(this.initsize)
        }, s.prototype.InitOpacity = function(t) {
            t.set_float(100 * this.initopacity)
        }, s.prototype.InitGrowRate = function(t) {
            t.set_float(this.growrate)
        }, s.prototype.XRandom = function(t) {
            t.set_float(this.xrandom)
        }, s.prototype.YRandom = function(t) {
            t.set_float(this.yrandom)
        }, s.prototype.InitSpeedRandom = function(t) {
            t.set_float(this.speedrandom)
        }, s.prototype.InitSizeRandom = function(t) {
            t.set_float(this.sizerandom)
        }, s.prototype.InitGrowRandom = function(t) {
            t.set_float(this.growrandom)
        }, s.prototype.ParticleAcceleration = function(t) {
            t.set_float(this.acc)
        }, s.prototype.Gravity = function(t) {
            t.set_float(this.g)
        }, s.prototype.ParticleAngleRandom = function(t) {
            t.set_float(this.lifeanglerandom)
        }, s.prototype.ParticleSpeedRandom = function(t) {
            t.set_float(this.lifespeedrandom)
        }, s.prototype.ParticleOpacityRandom = function(t) {
            t.set_float(this.lifeopacityrandom)
        }, s.prototype.Timeout = function(t) {
            t.set_float(this.timeout)
        }, n.exps = new s
    }(), cr.plugins_.Sprite = function(t) {
        this.runtime = t
    },
    function() {
        function t() {
            if (0 === this.datauri.length) {
                var t = document.createElement("canvas");
                t.width = this.width, t.height = this.height;
                var e = t.getContext("2d");
                this.spritesheeted ? e.drawImage(this.texture_img, this.offx, this.offy, this.width, this.height, 0, 0, this.width, this.height) : e.drawImage(this.texture_img, 0, 0, this.width, this.height), this.datauri = t.toDataURL("image/png")
            }
            return this.datauri
        }

        function e() {}

        function i() {
            return y.length ? y.pop() : [0, 0, 0]
        }

        function s(t) {
            t[0] = 0, t[1] = 0, t[2] = 0, y.push(t)
        }

        function n(t, e) {
            return e > t ? "" + t + "," + e : "" + e + "," + t
        }

        function r(t, e, s, r) {
            var o = e.uid,
                a = s.uid,
                h = n(o, a);
            if (t.hasOwnProperty(h)) return void(t[h][2] = r);
            var c = i();
            c[0] = o, c[1] = a, c[2] = r, t[h] = c
        }

        function o(t, e, i) {
            var r = n(e.uid, i.uid);
            t.hasOwnProperty(r) && (s(t[r]), delete t[r])
        }

        function a(t, e) {
            var i, n, r = e.uid;
            for (i in t) t.hasOwnProperty(i) && (n = t[i], (n[0] === r || n[1] === r) && (s(t[i]), delete t[i]))
        }

        function h(t, e, i) {
            var s = n(e.uid, i.uid);
            return t.hasOwnProperty(s) ? (m = t[s][2], !0) : (m = -2, !1)
        }

        function c(t, e, i) {
            if (!t) return !1;
            var s, n, r, o, a, h, c = 0 !== e || 0 !== i,
                l = !1,
                u = this.runtime.getCurrentCondition(),
                p = u.type,
                d = u.inverted,
                f = t.getCurrentSol(),
                g = this.runtime.getCurrentEventStack().current_event.orblock;
            for (f.select_all ? (this.update_bbox(), S.copy(this.bbox), S.offset(e, i), this.runtime.getCollisionCandidates(this.layer, t, S, x), h = x) : h = g ? this.runtime.isCurrentConditionFirst() && !f.else_instances.length && f.instances.length ? f.instances : f.else_instances : f.instances, v = t, w = p !== t && !d, c && (s = this.x, n = this.y, this.x += e, this.y += i, this.set_bbox_changed()), r = 0, o = h.length; o > r; r++)
                if (a = h[r], this.runtime.testOverlap(this, a)) {
                    if (l = !0, d) break;
                    p !== t && b.add(a)
                }
            return c && (this.x = s, this.y = n, this.set_bbox_changed()), cr.clearArray(x), l
        }

        function l() {}

        function u() {}
        var p = cr.plugins_.Sprite.prototype;
        p.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var d = p.Type.prototype;
        d.onCreate = function() {
            if (!this.is_family) {
                var e, i, s, n, r, o, a, h, c, l;
                for (this.all_frames = [], this.has_loaded_textures = !1, e = 0, i = this.animations.length; i > e; e++) {
                    for (r = this.animations[e], a = {}, a.name = r[0], a.speed = r[1], a.loop = r[2], a.repeatcount = r[3], a.repeatto = r[4], a.pingpong = r[5], a.sid = r[6], a.frames = [], s = 0, n = r[7].length; n > s; s++) o = r[7][s], h = {}, h.texture_file = o[0], h.texture_filesize = o[1], h.offx = o[2], h.offy = o[3], h.width = o[4], h.height = o[5], h.duration = o[6], h.hotspotX = o[7], h.hotspotY = o[8], h.image_points = o[9], h.poly_pts = o[10], h.pixelformat = o[11], h.spritesheeted = 0 !== h.width, h.datauri = "", h.getDataUri = t, l = {}, l.left = 0, l.top = 0, l.right = 1, l.bottom = 1, h.sheetTex = l, h.webGL_texture = null, c = this.runtime.findWaitingTexture(o[0]), c ? h.texture_img = c : (h.texture_img = new Image, h.texture_img.cr_src = o[0], h.texture_img.cr_filesize = o[1], h.texture_img.c2webGL_texture = null, this.runtime.waitForImageLoad(h.texture_img, o[0])), cr.seal(h), a.frames.push(h), this.all_frames.push(h);
                    cr.seal(a), this.animations[e] = a
                }
            }
        }, d.updateAllCurrentTexture = function() {
            var t, e, i;
            for (t = 0, e = this.instances.length; e > t; t++) i = this.instances[t], i.curWebGLTexture = i.curFrame.webGL_texture
        }, d.onLostWebGLContext = function() {
            if (!this.is_family) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; e > t; ++t) i = this.all_frames[t], i.texture_img.c2webGL_texture = null, i.webGL_texture = null;
                this.has_loaded_textures = !1, this.updateAllCurrentTexture()
            }
        }, d.onRestoreWebGLContext = function() {
            if (!this.is_family && this.instances.length) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; e > t; ++t) i = this.all_frames[t], i.webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
                this.updateAllCurrentTexture()
            }
        }, d.loadTextures = function() {
            if (!this.is_family && !this.has_loaded_textures && this.runtime.glwrap) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; e > t; ++t) i = this.all_frames[t], i.webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
                this.has_loaded_textures = !0
            }
        }, d.unloadTextures = function() {
            if (!this.is_family && !this.instances.length && this.has_loaded_textures) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; e > t; ++t) i = this.all_frames[t], this.runtime.glwrap.deleteTexture(i.webGL_texture), i.webGL_texture = null;
                this.has_loaded_textures = !1
            }
        };
        var f = [];
        d.preloadCanvas2D = function(t) {
            var e, i, s;
            for (cr.clearArray(f), e = 0, i = this.all_frames.length; i > e; ++e) s = this.all_frames[e].texture_img, -1 === f.indexOf(s) && (t.drawImage(s, 0, 0), f.push(s))
        }, p.Instance = function(t) {
            this.type = t, this.runtime = t.runtime;
            var e = this.type.animations[0].frames[0].poly_pts;
            this.recycled ? this.collision_poly.set_pts(e) : this.collision_poly = new cr.CollisionPoly(e)
        };
        var g = p.Instance.prototype;
        g.onCreate = function() {
            this.visible = 0 === this.properties[0], this.isTicking = !1, this.inAnimTrigger = !1, this.collisionsEnabled = 0 !== this.properties[3], this.cur_animation = this.getAnimationByName(this.properties[1]) || this.type.animations[0], this.cur_frame = this.properties[2], this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1);
            var t = this.cur_animation.frames[this.cur_frame];
            this.collision_poly.set_pts(t.poly_pts), this.hotspotX = t.hotspotX, this.hotspotY = t.hotspotY, this.cur_anim_speed = this.cur_animation.speed, this.cur_anim_repeatto = this.cur_animation.repeatto, 1 === this.type.animations.length && 1 === this.type.animations[0].frames.length || 0 === this.cur_anim_speed || (this.runtime.tickMe(this), this.isTicking = !0), this.recycled ? this.animTimer.reset() : this.animTimer = new cr.KahanAdder, this.frameStart = this.getNowTime(), this.animPlaying = !0, this.animRepeats = 0, this.animForwards = !0, this.animTriggerName = "", this.changeAnimName = "", this.changeAnimFrom = 0, this.changeAnimFrame = -1, this.type.loadTextures();
            var e, i, s, n, r, o, a, h;
            for (e = 0, i = this.type.animations.length; i > e; e++)
                for (r = this.type.animations[e], s = 0, n = r.frames.length; n > s; s++) o = r.frames[s], 0 === o.width && (o.width = o.texture_img.width, o.height = o.texture_img.height), o.spritesheeted && (h = o.texture_img, a = o.sheetTex, a.left = o.offx / h.width, a.top = o.offy / h.height, a.right = (o.offx + o.width) / h.width, a.bottom = (o.offy + o.height) / h.height, 0 === o.offx && 0 === o.offy && o.width === h.width && o.height === h.height && (o.spritesheeted = !1));
            this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture
        }, g.saveToJSON = function() {
            var t = {
                a: this.cur_animation.sid,
                f: this.cur_frame,
                cas: this.cur_anim_speed,
                fs: this.frameStart,
                ar: this.animRepeats,
                at: this.animTimer.sum,
                rt: this.cur_anim_repeatto
            };
            return this.animPlaying || (t.ap = this.animPlaying), this.animForwards || (t.af = this.animForwards), t
        }, g.loadFromJSON = function(t) {
            var e = this.getAnimationBySid(t.a);
            e && (this.cur_animation = e), this.cur_frame = t.f, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), this.cur_anim_speed = t.cas, this.frameStart = t.fs, this.animRepeats = t.ar, this.animTimer.reset(), this.animTimer.sum = t.at, this.animPlaying = t.hasOwnProperty("ap") ? t.ap : !0, this.animForwards = t.hasOwnProperty("af") ? t.af : !0, t.hasOwnProperty("rt") ? this.cur_anim_repeatto = t.rt : this.cur_anim_repeatto = this.cur_animation.repeatto, this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture, this.collision_poly.set_pts(this.curFrame.poly_pts), this.hotspotX = this.curFrame.hotspotX, this.hotspotY = this.curFrame.hotspotY
        }, g.animationFinish = function(t) {
            this.cur_frame = t ? 0 : this.cur_animation.frames.length - 1, this.animPlaying = !1, this.animTriggerName = this.cur_animation.name, this.inAnimTrigger = !0, this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnyAnimFinished, this), this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnimFinished, this), this.inAnimTrigger = !1, this.animRepeats = 0
        }, g.getNowTime = function() {
            return this.animTimer.sum
        }, g.tick = function() {
            this.animTimer.add(this.runtime.getDt(this)), this.changeAnimName.length && this.doChangeAnim(), this.changeAnimFrame >= 0 && this.doChangeAnimFrame();
            var t, e = this.getNowTime(),
                i = this.cur_animation,
                s = i.frames[this.cur_frame],
                n = s.duration / this.cur_anim_speed;
            this.animPlaying && e >= this.frameStart + n && (this.animForwards ? this.cur_frame++ : this.cur_frame--, this.frameStart += n, this.cur_frame >= i.frames.length && (i.pingpong ? (this.animForwards = !1, this.cur_frame = i.frames.length - 2) : i.loop ? this.cur_frame = this.cur_anim_repeatto : (this.animRepeats++, this.animRepeats >= i.repeatcount ? this.animationFinish(!1) : this.cur_frame = this.cur_anim_repeatto)), this.cur_frame < 0 && (i.pingpong ? (this.cur_frame = 1, this.animForwards = !0, i.loop || (this.animRepeats++, this.animRepeats >= i.repeatcount && this.animationFinish(!0))) : i.loop ? this.cur_frame = this.cur_anim_repeatto : (this.animRepeats++, this.animRepeats >= i.repeatcount ? this.animationFinish(!0) : this.cur_frame = this.cur_anim_repeatto)), this.cur_frame < 0 ? this.cur_frame = 0 : this.cur_frame >= i.frames.length && (this.cur_frame = i.frames.length - 1), e > this.frameStart + i.frames[this.cur_frame].duration / this.cur_anim_speed && (this.frameStart = e), t = i.frames[this.cur_frame], this.OnFrameChanged(s, t), this.runtime.redraw = !0)
        }, g.getAnimationByName = function(t) {
            var e, i, s;
            for (e = 0, i = this.type.animations.length; i > e; e++)
                if (s = this.type.animations[e], cr.equals_nocase(s.name, t)) return s;
            return null
        }, g.getAnimationBySid = function(t) {
            var e, i, s;
            for (e = 0, i = this.type.animations.length; i > e; e++)
                if (s = this.type.animations[e], s.sid === t) return s;
            return null
        }, g.doChangeAnim = function() {
            var t = this.cur_animation.frames[this.cur_frame],
                e = this.getAnimationByName(this.changeAnimName);
            this.changeAnimName = "", e && (cr.equals_nocase(e.name, this.cur_animation.name) && this.animPlaying || (this.cur_animation = e,
                this.cur_anim_speed = e.speed, this.cur_anim_repeatto = e.repeatto, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), 1 === this.changeAnimFrom && (this.cur_frame = 0), this.animPlaying = !0, this.frameStart = this.getNowTime(), this.animForwards = !0, this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]), this.runtime.redraw = !0))
        }, g.doChangeAnimFrame = function() {
            var t = this.cur_animation.frames[this.cur_frame],
                e = this.cur_frame;
            this.cur_frame = cr.floor(this.changeAnimFrame), this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), e !== this.cur_frame && (this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]), this.frameStart = this.getNowTime(), this.runtime.redraw = !0), this.changeAnimFrame = -1
        }, g.OnFrameChanged = function(t, e) {
            var i = t.width,
                s = t.height,
                n = e.width,
                r = e.height;
            i != n && (this.width *= n / i), s != r && (this.height *= r / s), this.hotspotX = e.hotspotX, this.hotspotY = e.hotspotY, this.collision_poly.set_pts(e.poly_pts), this.set_bbox_changed(), this.curFrame = e, this.curWebGLTexture = e.webGL_texture;
            var o, a, h;
            for (o = 0, a = this.behavior_insts.length; a > o; o++) h = this.behavior_insts[o], h.onSpriteFrameChanged && h.onSpriteFrameChanged(t, e);
            this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnFrameChanged, this)
        }, g.draw = function(t) {
            t.globalAlpha = this.opacity;
            var e = this.curFrame,
                i = e.spritesheeted,
                s = e.texture_img,
                n = this.x,
                r = this.y,
                o = this.width,
                a = this.height;
            if (0 === this.angle && o >= 0 && a >= 0) n -= this.hotspotX * o, r -= this.hotspotY * a, this.runtime.pixel_rounding && (n = Math.round(n), r = Math.round(r)), i ? t.drawImage(s, e.offx, e.offy, e.width, e.height, n, r, o, a) : t.drawImage(s, n, r, o, a);
            else {
                this.runtime.pixel_rounding && (n = Math.round(n), r = Math.round(r)), t.save();
                var h = o > 0 ? 1 : -1,
                    c = a > 0 ? 1 : -1;
                t.translate(n, r), (1 !== h || 1 !== c) && t.scale(h, c), t.rotate(this.angle * h * c);
                var l = 0 - this.hotspotX * cr.abs(o),
                    u = 0 - this.hotspotY * cr.abs(a);
                i ? t.drawImage(s, e.offx, e.offy, e.width, e.height, l, u, cr.abs(o), cr.abs(a)) : t.drawImage(s, l, u, cr.abs(o), cr.abs(a)), t.restore()
            }
        }, g.drawGL_earlyZPass = function(t) {
            this.drawGL(t)
        }, g.drawGL = function(t) {
            t.setTexture(this.curWebGLTexture), t.setOpacity(this.opacity);
            var e = this.curFrame,
                i = this.bquad;
            if (this.runtime.pixel_rounding) {
                var s = Math.round(this.x) - this.x,
                    n = Math.round(this.y) - this.y;
                e.spritesheeted ? t.quadTex(i.tlx + s, i.tly + n, i.trx + s, i.try_ + n, i.brx + s, i.bry + n, i.blx + s, i.bly + n, e.sheetTex) : t.quad(i.tlx + s, i.tly + n, i.trx + s, i.try_ + n, i.brx + s, i.bry + n, i.blx + s, i.bly + n)
            } else e.spritesheeted ? t.quadTex(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly, e.sheetTex) : t.quad(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly)
        }, g.getImagePointIndexByName = function(t) {
            var e, i, s = this.curFrame;
            for (e = 0, i = s.image_points.length; i > e; e++)
                if (cr.equals_nocase(t, s.image_points[e][0])) return e;
            return -1
        }, g.getImagePoint = function(t, e) {
            var i, s = this.curFrame,
                n = s.image_points;
            if (i = cr.is_string(t) ? this.getImagePointIndexByName(t) : t - 1, i = cr.floor(i), 0 > i || i >= n.length) return e ? this.x : this.y;
            var r = (n[i][1] - s.hotspotX) * this.width,
                o = n[i][2];
            o = (o - s.hotspotY) * this.height;
            var a = Math.cos(this.angle),
                h = Math.sin(this.angle),
                c = r * a - o * h;
            return o = o * a + r * h, r = c, r += this.x, o += this.y, e ? r : o
        };
        var y = [],
            m = -2,
            _ = [];
        e.prototype.OnCollision = function(t) {
            if (!t) return !1;
            var e = this.runtime,
                i = e.getCurrentCondition(),
                s = i.type,
                n = null;
            i.extra.collmemory ? n = i.extra.collmemory : (n = {}, i.extra.collmemory = n), i.extra.spriteCreatedDestroyCallback || (i.extra.spriteCreatedDestroyCallback = !0, e.addDestroyCallback(function(t) {
                a(i.extra.collmemory, t)
            }));
            var c, l, u, p, d, f, g, y, v, b = s.getCurrentSol(),
                w = t.getCurrentSol(),
                x = b.getObjects(),
                S = this.runtime.tickcount,
                T = S - 1,
                O = e.getCurrentEventStack().current_event;
            O.orblock;
            for (l = 0; l < x.length; l++) {
                for (u = x[l], w.select_all ? (u.update_bbox(), this.runtime.getCollisionCandidates(u.layer, t, u.bbox, _), c = _) : c = w.getObjects(), p = 0; p < c.length; p++) d = c[p], e.testOverlap(u, d) || e.checkRegisteredCollision(u, d) ? (y = h(n, u, d), v = !y || T > m, r(n, u, d, S), v && (e.pushCopySol(O.solModifiers), f = s.getCurrentSol(), g = t.getCurrentSol(), f.select_all = !1, g.select_all = !1, s === t ? (f.instances.length = 2, f.instances[0] = u, f.instances[1] = d, s.applySolToContainer()) : (f.instances.length = 1, g.instances.length = 1, f.instances[0] = u, g.instances[0] = d, s.applySolToContainer(), t.applySolToContainer()), O.retrigger(), e.popSol(O.solModifiers))) : o(n, u, d);
                cr.clearArray(_)
            }
            return !1
        };
        var v = null,
            b = new cr.ObjectSet,
            w = !1,
            x = [],
            S = new cr.rect(0, 0, 0, 0);
        d.finish = function(t) {
            if (w) {
                if (t) {
                    var e, i, s, n = this.runtime.getCurrentEventStack().current_event.orblock,
                        r = v.getCurrentSol(),
                        o = b.valuesRef();
                    if (r.select_all) {
                        for (r.select_all = !1, cr.clearArray(r.instances), e = 0, i = o.length; i > e; ++e) r.instances[e] = o[e];
                        if (n)
                            for (cr.clearArray(r.else_instances), e = 0, i = v.instances.length; i > e; ++e) s = v.instances[e], b.contains(s) || r.else_instances.push(s)
                    } else if (n) {
                        var a = r.instances.length;
                        for (e = 0, i = o.length; i > e; ++e) r.instances[a + e] = o[e], cr.arrayFindRemove(r.else_instances, o[e])
                    } else cr.shallowAssignArray(r.instances, o);
                    v.applySolToContainer()
                }
                b.clear(), w = !1
            }
        }, e.prototype.IsOverlapping = function(t) {
            return c.call(this, t, 0, 0)
        }, e.prototype.IsOverlappingOffset = function(t, e, i) {
            return c.call(this, t, e, i)
        }, e.prototype.IsAnimPlaying = function(t) {
            return this.changeAnimName.length ? cr.equals_nocase(this.changeAnimName, t) : cr.equals_nocase(this.cur_animation.name, t)
        }, e.prototype.CompareFrame = function(t, e) {
            return cr.do_cmp(this.cur_frame, t, e)
        }, e.prototype.CompareAnimSpeed = function(t, e) {
            var i = this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed;
            return cr.do_cmp(i, t, e)
        }, e.prototype.OnAnimFinished = function(t) {
            return cr.equals_nocase(this.animTriggerName, t)
        }, e.prototype.OnAnyAnimFinished = function() {
            return !0
        }, e.prototype.OnFrameChanged = function() {
            return !0
        }, e.prototype.IsMirrored = function() {
            return this.width < 0
        }, e.prototype.IsFlipped = function() {
            return this.height < 0
        }, e.prototype.OnURLLoaded = function() {
            return !0
        }, e.prototype.IsCollisionEnabled = function() {
            return this.collisionsEnabled
        }, p.cnds = new e, l.prototype.Spawn = function(t, e, i) {
            if (t && e) {
                var s = this.runtime.createInstance(t, e, this.getImagePoint(i, !0), this.getImagePoint(i, !1));
                if (s) {
                    "undefined" != typeof s.angle && (s.angle = this.angle, s.set_bbox_changed()), this.runtime.isInOnDestroy++;
                    var n, r, o;
                    if (this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, s), s.is_contained)
                        for (n = 0, r = s.siblings.length; r > n; n++) o = s.siblings[n], this.runtime.trigger(Object.getPrototypeOf(o.type.plugin).cnds.OnCreated, o);
                    this.runtime.isInOnDestroy--;
                    var a = this.runtime.getCurrentAction(),
                        h = !1;
                    (cr.is_undefined(a.extra.Spawn_LastExec) || a.extra.Spawn_LastExec < this.runtime.execcount) && (h = !0, a.extra.Spawn_LastExec = this.runtime.execcount);
                    var c;
                    if (t != this.type && (c = t.getCurrentSol(), c.select_all = !1, h ? (cr.clearArray(c.instances), c.instances[0] = s) : c.instances.push(s), s.is_contained))
                        for (n = 0, r = s.siblings.length; r > n; n++) o = s.siblings[n], c = o.type.getCurrentSol(), c.select_all = !1, h ? (cr.clearArray(c.instances), c.instances[0] = o) : c.instances.push(o)
                }
            }
        }, l.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, l.prototype.StopAnim = function() {
            this.animPlaying = !1
        }, l.prototype.StartAnim = function(t) {
            this.animPlaying = !0, this.frameStart = this.getNowTime(), 1 === t && 0 !== this.cur_frame && (this.changeAnimFrame = 0, this.inAnimTrigger || this.doChangeAnimFrame()), this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
        }, l.prototype.SetAnim = function(t, e) {
            this.changeAnimName = t, this.changeAnimFrom = e, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnim()
        }, l.prototype.SetAnimFrame = function(t) {
            this.changeAnimFrame = t, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnimFrame()
        }, l.prototype.SetAnimSpeed = function(t) {
            this.cur_anim_speed = cr.abs(t), this.animForwards = t >= 0, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
        }, l.prototype.SetAnimRepeatToFrame = function(t) {
            t = Math.floor(t), 0 > t && (t = 0), t >= this.cur_animation.frames.length && (t = this.cur_animation.frames.length - 1), this.cur_anim_repeatto = t
        }, l.prototype.SetMirrored = function(t) {
            var e = cr.abs(this.width) * (0 === t ? -1 : 1);
            this.width !== e && (this.width = e, this.set_bbox_changed())
        }, l.prototype.SetFlipped = function(t) {
            var e = cr.abs(this.height) * (0 === t ? -1 : 1);
            this.height !== e && (this.height = e, this.set_bbox_changed())
        }, l.prototype.SetScale = function(t) {
            var e = this.curFrame,
                i = this.width < 0 ? -1 : 1,
                s = this.height < 0 ? -1 : 1,
                n = e.width * t * i,
                r = e.height * t * s;
            (this.width !== n || this.height !== r) && (this.width = n, this.height = r, this.set_bbox_changed())
        }, l.prototype.LoadURL = function(t, e) {
            var i = new Image,
                s = this,
                n = this.curFrame;
            i.onload = function() {
                return n.texture_img.src === i.src ? (s.runtime.glwrap && s.curFrame === n && (s.curWebGLTexture = n.webGL_texture), 0 === e && (s.width = i.width, s.height = i.height, s.set_bbox_changed()), s.runtime.redraw = !0, void s.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, s)) : (n.texture_img = i, n.offx = 0, n.offy = 0, n.width = i.width, n.height = i.height, n.spritesheeted = !1, n.datauri = "", n.pixelformat = 0, s.runtime.glwrap && (n.webGL_texture && s.runtime.glwrap.deleteTexture(n.webGL_texture), n.webGL_texture = s.runtime.glwrap.loadTexture(i, !1, s.runtime.linearSampling), s.curFrame === n && (s.curWebGLTexture = n.webGL_texture), s.type.updateAllCurrentTexture()), 0 === e && (s.width = i.width, s.height = i.height, s.set_bbox_changed()), s.runtime.redraw = !0, void s.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, s))
            }, "data:" !== t.substr(0, 5) && (i.crossOrigin = "anonymous"), this.runtime.setImageSrc(i, t)
        }, l.prototype.SetCollisions = function(t) {
            this.collisionsEnabled !== (0 !== t) && (this.collisionsEnabled = 0 !== t, this.collisionsEnabled ? this.set_bbox_changed() : (this.collcells.right >= this.collcells.left && this.type.collision_grid.update(this, this.collcells, null), this.collcells.set(0, 0, -1, -1)))
        }, p.acts = new l, u.prototype.AnimationFrame = function(t) {
            t.set_int(this.cur_frame)
        }, u.prototype.AnimationFrameCount = function(t) {
            t.set_int(this.cur_animation.frames.length)
        }, u.prototype.AnimationName = function(t) {
            t.set_string(this.cur_animation.name)
        }, u.prototype.AnimationSpeed = function(t) {
            t.set_float(this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed)
        }, u.prototype.ImagePointX = function(t, e) {
            t.set_float(this.getImagePoint(e, !0))
        }, u.prototype.ImagePointY = function(t, e) {
            t.set_float(this.getImagePoint(e, !1))
        }, u.prototype.ImagePointCount = function(t) {
            t.set_int(this.curFrame.image_points.length)
        }, u.prototype.ImageWidth = function(t) {
            t.set_float(this.curFrame.width)
        }, u.prototype.ImageHeight = function(t) {
            t.set_float(this.curFrame.height)
        }, p.exps = new u
    }(), cr.plugins_.Spritefont2 = function(t) {
        this.runtime = t
    },
    function() {
        function t(t) {
            return t.replace(/\s\s*$/, "")
        }

        function e(t, e) {
            return t.length ? t.pop() : new e
        }

        function i(t, e) {
            t.length < v && t.push(e)
        }

        function s(t, e, s) {
            if (s) {
                var n, r;
                for (n = 0, r = e.length; r > n; n++) i(t, e[n]);
                cr.clearArray(e)
            } else {
                var o;
                for (o in e) Object.prototype.hasOwnProperty.call(e, o) && (i(t, e[o]), delete e[o])
            }
        }

        function n(e, i, s) {
            var n, o = e.lines;
            s = t(s), i >= o.length && o.push(r()), n = o[i], n.text = s, n.width = e.measureWidth(s), e.textWidth = cr.max(e.textWidth, n.width)
        }

        function r() {
            return e(b, Object)
        }

        function o(t) {
            i(b, t)
        }

        function a(t) {
            s(b, t, !0)
        }

        function h(t, i, s, n, r, o) {
            void 0 === t[i] && (t[i] = e(w, Object)), t[i].x = s, t[i].y = n, t[i].w = r, t[i].h = o
        }

        function c(t) {
            s(w, t, !1)
        }

        function l(t, i, s, n, r, o) {
            void 0 === t[i] && (t[i] = e(x, cr.rect)), t[i].left = s, t[i].top = n, t[i].right = r, t[i].bottom = o
        }

        function u(t) {
            s(x, t, !1)
        }

        function p(t, e, i) {
            var s;
            s = t.tlx * e - t.tly * i, t.tly = t.tly * e + t.tlx * i, t.tlx = s, s = t.trx * e - t.try_ * i, t.try_ = t.try_ * e + t.trx * i, t.trx = s, s = t.blx * e - t.bly * i, t.bly = t.bly * e + t.blx * i, t.blx = s, s = t.brx * e - t.bry * i, t.bry = t.bry * e + t.brx * i, t.brx = s
        }

        function d() {}

        function f() {}

        function g() {}
        var y = cr.plugins_.Spritefont2.prototype;
        y.onCreate = function() {}, y.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var m = y.Type.prototype;
        m.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.runtime.waitForImageLoad(this.texture_img, this.texture_file), this.webGL_texture = null)
        }, m.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, m.onRestoreWebGLContext = function() {
            if (!this.is_family && this.instances.length) {
                this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !1, this.runtime.linearSampling, this.texture_pixelformat));
                var t, e;
                for (t = 0, e = this.instances.length; e > t; t++) this.instances[t].webGL_texture = this.webGL_texture
            }
        }, m.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, m.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, y.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var _ = y.Instance.prototype;
        _.onDestroy = function() {
            a(this.lines), c(this.clipList), u(this.clipUV), cr.wipe(this.characterWidthList)
        }, _.onCreate = function() {
            this.texture_img = this.type.texture_img, this.characterWidth = this.properties[0], this.characterHeight = this.properties[1], this.characterSet = this.properties[2], this.text = this.properties[3], this.characterScale = this.properties[4], this.visible = 0 === this.properties[5], this.halign = this.properties[6] / 2, this.valign = this.properties[7] / 2, this.wrapbyword = 0 === this.properties[9], this.characterSpacing = this.properties[10], this.lineHeight = this.properties[11], this.textWidth = 0, this.textHeight = 0, this.recycled ? (cr.clearArray(this.lines), cr.wipe(this.clipList), cr.wipe(this.clipUV), cr.wipe(this.characterWidthList)) : (this.lines = [], this.clipList = {}, this.clipUV = {}, this.characterWidthList = {}), this.text_changed = !0, this.lastwrapwidth = this.width, this.runtime.glwrap && (this.type.webGL_texture || (this.type.webGL_texture = this.runtime.glwrap.loadTexture(this.type.texture_img, !1, this.runtime.linearSampling, this.type.texture_pixelformat)), this.webGL_texture = this.type.webGL_texture), this.SplitSheet()
        }, _.saveToJSON = function() {
            var t = {
                t: this.text,
                csc: this.characterScale,
                csp: this.characterSpacing,
                lh: this.lineHeight,
                tw: this.textWidth,
                th: this.textHeight,
                lrt: this.last_render_tick,
                ha: this.halign,
                va: this.valign,
                cw: {}
            };
            for (var e in this.characterWidthList) t.cw[e] = this.characterWidthList[e];
            return t
        }, _.loadFromJSON = function(t) {
            this.text = t.t, this.characterScale = t.csc, this.characterSpacing = t.csp, this.lineHeight = t.lh, this.textWidth = t.tw, this.textHeight = t.th, this.last_render_tick = t.lrt, t.hasOwnProperty("ha") && (this.halign = t.ha), t.hasOwnProperty("va") && (this.valign = t.va);
            for (var e in t.cw) this.characterWidthList[e] = t.cw[e];
            this.text_changed = !0, this.lastwrapwidth = this.width
        };
        var v = 1e3,
            b = [],
            w = [],
            x = [];
        _.SplitSheet = function() {
            for (var t = this.texture_img, e = t.width, i = t.height, s = this.characterWidth, n = this.characterHeight, r = s / e, o = n / i, a = this.characterSet, c = Math.floor(e / s), u = Math.floor(i / n), p = 0; p < a.length && !(p >= c * u); p++) {
                var d = p % c,
                    f = Math.floor(p / c),
                    g = a.charAt(p);
                this.runtime.glwrap ? l(this.clipUV, g, d * r, f * o, (d + 1) * r, (f + 1) * o) : h(this.clipList, g, d * s, f * n, s, n)
            }
        };
        var S = [];
        y.TokeniseWords = function(t) {
            cr.clearArray(S);
            for (var e, i = "", s = 0; s < t.length;)
                if (e = t.charAt(s), "\n" === e) i.length && (S.push(i), i = ""), S.push("\n"), ++s;
                else if (" " === e || "	" === e || "-" === e) {
                do i += t.charAt(s), s++; while (s < t.length && (" " === t.charAt(s) || "	" === t.charAt(s)));
                S.push(i), i = ""
            } else s < t.length && (i += e, s++);
            i.length && S.push(i)
        }, y.WordWrap = function(t) {
            var e = t.text,
                i = t.lines;
            if (!e || !e.length) return void a(i);
            var s = t.width;
            if (2 >= s) return void a(i);
            var n = t.characterWidth,
                o = t.characterScale,
                h = t.characterSpacing;
            if (e.length * (n * o + h) - h <= s && -1 === e.indexOf("\n")) {
                var c = t.measureWidth(e);
                if (s >= c) return a(i), i.push(r()), i[0].text = e, i[0].width = c, t.textWidth = c, void(t.textHeight = t.characterHeight * o + t.lineHeight)
            }
            t.wrapbyword;
            this.WrapText(t), t.textHeight = i.length * (t.characterHeight * o + t.lineHeight)
        }, y.WrapText = function(e) {
            var i, s = e.wrapbyword,
                r = e.text,
                a = e.lines,
                h = e.width;
            s ? (this.TokeniseWords(r), i = S) : i = r;
            var c, l, u, p = "",
                d = 0,
                f = !1;
            for (u = 0; u < i.length; u++) "\n" !== i[u] ? (f = !1, c = p, p += i[u], l = e.measureWidth(t(p)), l > h && ("" === c ? (n(e, d, p), p = "", f = !0) : (n(e, d, c), p = i[u]), d++, s || " " !== p || (p = ""))) : (f === !0 ? f = !1 : (n(e, d, p), d++), p = "");
            for (t(p).length && (n(e, d, p), d++), u = d; u < a.length; u++) o(a[u]);
            a.length = d
        }, _.measureWidth = function(t) {
            for (var e = this.characterSpacing, i = t.length, s = 0, n = 0; i > n; n++) s += this.getCharacterWidth(t.charAt(n)) * this.characterScale + e;
            return s -= s > 0 ? e : 0
        }, _.getCharacterWidth = function(t) {
            var e = this.characterWidthList;
            return void 0 !== e[t] ? e[t] : this.characterWidth
        }, _.rebuildText = function() {
            (this.text_changed || this.width !== this.lastwrapwidth) && (this.textWidth = 0, this.textHeight = 0, this.type.plugin.WordWrap(this), this.text_changed = !1, this.lastwrapwidth = this.width)
        };
        var T = 1e-5;
        _.draw = function(t, e) {
            var i = this.texture_img;
            if ("" !== this.text && null != i) {
                if (this.rebuildText(), this.height < this.characterHeight * this.characterScale + this.lineHeight) return;
                t.globalAlpha = this.opacity;
                var s = this.x,
                    n = this.y;
                this.runtime.pixel_rounding && (s = Math.round(s), n = Math.round(n));
                var r = this.layer.viewLeft,
                    o = this.layer.viewTop,
                    a = this.layer.viewRight,
                    h = this.layer.viewBottom;
                t.save(), t.translate(s, n), t.rotate(this.angle);
                var c, l, u = this.angle,
                    p = this.halign,
                    d = this.valign,
                    f = this.characterScale,
                    g = this.characterHeight * f,
                    y = this.lineHeight,
                    m = this.characterSpacing,
                    _ = this.lines,
                    v = this.textHeight,
                    b = d * cr.max(0, this.height - v),
                    w = -(this.hotspotX * this.width),
                    x = -(this.hotspotY * this.height);
                x += b;
                for (var S, O, A, C = x, k = 0; k < _.length; k++) {
                    var E = _[k].text,
                        P = _[k].width;
                    if (l = p * cr.max(0, this.width - P), S = w + l, C += y, 0 === u && o > n + C + g) C += g;
                    else {
                        for (var I = 0; I < E.length; I++) {
                            var M = E.charAt(I);
                            c = this.getCharacterWidth(M);
                            var R = this.clipList[M];
                            if (0 === u && r > s + S + c * f + m) S += c * f + m;
                            else {
                                if (S + c * f > this.width + T) break;
                                if (void 0 !== R && (O = S, A = C, 0 === u && (O = Math.round(O), A = Math.round(A)), t.drawImage(this.texture_img, R.x, R.y, R.w, R.h, O, A, R.w * f, R.h * f)), S += c * f + m, 0 === u && s + S > a) break
                            }
                        }
                        if (C += g, 0 === u && (C + g + y > this.height || n + C > h)) break
                    }
                }
                t.restore()
            }
        };
        var O = new cr.quad;
        _.drawGL = function(t) {
            if (t.setTexture(this.webGL_texture), t.setOpacity(this.opacity), this.text && (this.rebuildText(), !(this.height < this.characterHeight * this.characterScale + this.lineHeight))) {
                this.update_bbox();
                var e = this.bquad,
                    i = 0,
                    s = 0;
                this.runtime.pixel_rounding && (i = Math.round(this.x) - this.x, s = Math.round(this.y) - this.y);
                var n, r, o, a = this.layer.viewLeft,
                    h = this.layer.viewTop,
                    c = this.layer.viewRight,
                    l = this.layer.viewBottom,
                    u = this.angle,
                    d = this.halign,
                    f = this.valign,
                    g = this.characterScale,
                    y = this.characterHeight * g,
                    m = this.lineHeight,
                    _ = this.characterSpacing,
                    v = this.lines,
                    b = this.textHeight;
                0 !== u && (r = Math.cos(u), o = Math.sin(u));
                for (var w, x, S, A, C = f * cr.max(0, this.height - b), k = e.tlx + i, E = e.tly + s, P = C, I = 0; I < v.length; I++) {
                    var M = v[I].text,
                        R = v[I].width;
                    if (w = d * cr.max(0, this.width - R), x = w, P += m, 0 === u && h > E + P + y) P += y;
                    else {
                        for (var L = 0; L < M.length; L++) {
                            var F = M.charAt(L);
                            n = this.getCharacterWidth(F);
                            var B = this.clipUV[F];
                            if (0 === u && a > k + x + n * g + _) x += n * g + _;
                            else {
                                if (x + n * g > this.width + T) break;
                                if (void 0 !== B) {
                                    var N = this.characterWidth * g,
                                        j = this.characterHeight * g;
                                    S = x, A = P, 0 === u && (S = Math.round(S), A = Math.round(A)), O.tlx = S, O.tly = A, O.trx = S + N, O.try_ = A, O.blx = S, O.bly = A + j, O.brx = S + N, O.bry = A + j, 0 !== u && p(O, r, o), O.offset(k, E), t.quadTex(O.tlx, O.tly, O.trx, O.try_, O.brx, O.bry, O.blx, O.bly, B)
                                }
                                if (x += n * g + _, 0 === u && k + x > c) break
                            }
                        }
                        if (P += y, 0 === u && (P + y + m > this.height || E + P > l)) break
                    }
                }
            }
        }, d.prototype.CompareText = function(t, e) {
            return e ? this.text == t : cr.equals_nocase(this.text, t)
        }, y.cnds = new d, f.prototype.SetText = function(t) {
            cr.is_number(t) && 1e9 > t && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            this.text !== e && (this.text = e, this.text_changed = !0, this.runtime.redraw = !0)
        }, f.prototype.AppendText = function(t) {
            cr.is_number(t) && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            e && (this.text += e, this.text_changed = !0, this.runtime.redraw = !0)
        }, f.prototype.SetScale = function(t) {
            t !== this.characterScale && (this.characterScale = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, f.prototype.SetCharacterSpacing = function(t) {
            t !== this.CharacterSpacing && (this.characterSpacing = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, f.prototype.SetLineHeight = function(t) {
            t !== this.lineHeight && (this.lineHeight = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, _.SetCharWidth = function(t, e) {
            var i = parseInt(e, 10);
            this.characterWidthList[t] !== i && (this.characterWidthList[t] = i, this.text_changed = !0, this.runtime.redraw = !0)
        }, f.prototype.SetCharacterWidth = function(t, e) {
            if ("" !== t)
                for (var i = 0; i < t.length; i++) this.SetCharWidth(t.charAt(i), e)
        }, f.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, f.prototype.SetHAlign = function(t) {
            this.halign = t / 2, this.text_changed = !0, this.runtime.redraw = !0
        }, f.prototype.SetVAlign = function(t) {
            this.valign = t / 2, this.text_changed = !0, this.runtime.redraw = !0
        }, y.acts = new f, g.prototype.CharacterWidth = function(t, e) {
            t.set_int(this.getCharacterWidth(e))
        }, g.prototype.CharacterHeight = function(t) {
            t.set_int(this.characterHeight)
        }, g.prototype.CharacterScale = function(t) {
            t.set_float(this.characterScale)
        }, g.prototype.CharacterSpacing = function(t) {
            t.set_int(this.characterSpacing)
        }, g.prototype.LineHeight = function(t) {
            t.set_int(this.lineHeight)
        }, g.prototype.Text = function(t) {
            t.set_string(this.text)
        }, g.prototype.TextWidth = function(t) {
            this.rebuildText(), t.set_float(this.textWidth)
        }, g.prototype.TextHeight = function(t) {
            this.rebuildText(), t.set_float(this.textHeight)
        }, y.exps = new g
    }(), cr.plugins_.TiledBg = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.plugins_.TiledBg.prototype;
        s.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var n = s.Type.prototype;
        n.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.cr_filesize = this.texture_filesize, this.runtime.waitForImageLoad(this.texture_img, this.texture_file), this.pattern = null, this.webGL_texture = null)
        }, n.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, n.onRestoreWebGLContext = function() {
            if (!this.is_family && this.instances.length) {
                this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat));
                var t, e;
                for (t = 0, e = this.instances.length; e > t; t++) this.instances[t].webGL_texture = this.webGL_texture
            }
        }, n.loadTextures = function() {
            this.is_family || this.webGL_texture || !this.runtime.glwrap || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat))
        }, n.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, n.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, s.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var r = s.Instance.prototype;
        r.onCreate = function() {
            this.visible = 0 === this.properties[0], this.rcTex = new cr.rect(0, 0, 0, 0), this.has_own_texture = !1, this.texture_img = this.type.texture_img, this.runtime.glwrap ? (this.type.loadTextures(), this.webGL_texture = this.type.webGL_texture) : (this.type.pattern || (this.type.pattern = this.runtime.ctx.createPattern(this.type.texture_img, "repeat")), this.pattern = this.type.pattern)
        }, r.afterLoad = function() {
            this.has_own_texture = !1, this.texture_img = this.type.texture_img
        }, r.onDestroy = function() {
            this.runtime.glwrap && this.has_own_texture && this.webGL_texture && (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, r.draw = function(t) {
            t.globalAlpha = this.opacity, t.save(), t.fillStyle = this.pattern;
            var e = this.x,
                i = this.y;
            this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i));
            var s = -(this.hotspotX * this.width),
                n = -(this.hotspotY * this.height),
                r = s % this.texture_img.width,
                o = n % this.texture_img.height;
            0 > r && (r += this.texture_img.width), 0 > o && (o += this.texture_img.height), t.translate(e, i), t.rotate(this.angle), t.translate(r, o), t.fillRect(s - r, n - o, this.width, this.height), t.restore()
        }, r.drawGL_earlyZPass = function(t) {
            this.drawGL(t)
        }, r.drawGL = function(t) {
            t.setTexture(this.webGL_texture), t.setOpacity(this.opacity);
            var e = this.rcTex;
            e.right = this.width / this.texture_img.width, e.bottom = this.height / this.texture_img.height;
            var i = this.bquad;
            if (this.runtime.pixel_rounding) {
                var s = Math.round(this.x) - this.x,
                    n = Math.round(this.y) - this.y;
                t.quadTex(i.tlx + s, i.tly + n, i.trx + s, i.try_ + n, i.brx + s, i.bry + n, i.blx + s, i.bly + n, e)
            } else t.quadTex(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly, e)
        }, t.prototype.OnURLLoaded = function() {
            return !0
        }, s.cnds = new t, e.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, e.prototype.LoadURL = function(t) {
            var e = new Image,
                i = this;
            e.onload = function() {
                i.texture_img = e, i.runtime.glwrap ? (i.has_own_texture && i.webGL_texture && i.runtime.glwrap.deleteTexture(i.webGL_texture), i.webGL_texture = i.runtime.glwrap.loadTexture(e, !0, i.runtime.linearSampling)) : i.pattern = i.runtime.ctx.createPattern(e, "repeat"), i.has_own_texture = !0, i.runtime.redraw = !0, i.runtime.trigger(cr.plugins_.TiledBg.prototype.cnds.OnURLLoaded, i)
            }, "data:" !== t.substr(0, 5) && (e.crossOrigin = "anonymous"), this.runtime.setImageSrc(e, t)
        }, s.acts = new e, i.prototype.ImageWidth = function(t) {
            t.set_float(this.texture_img.width)
        }, i.prototype.ImageHeight = function(t) {
            t.set_float(this.texture_img.height)
        }, s.exps = new i
    }(), cr.plugins_.Touch = function(t) {
        this.runtime = t
    },
    function() {
        function t(t) {
            l = t.x, u = t.y, p = t.z
        }

        function e(t, e, i, n) {
            var r;
            return r = f.length ? f.pop() : new s, r.init(t, e, i, n), r
        }

        function i(t) {
            f.length < 100 && f.push(t)
        }

        function s() {
            this.starttime = 0, this.time = 0, this.lasttime = 0, this.startx = 0, this.starty = 0, this.x = 0, this.y = 0, this.lastx = 0, this.lasty = 0, this.id = 0, this.startindex = 0, this.triggeredHold = !1, this.tooFarForHold = !1
        }

        function n() {}

        function r() {}
        var o = cr.plugins_.Touch.prototype;
        o.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var a = o.Type.prototype;
        a.onCreate = function() {}, o.Instance = function(t) {
            this.type = t, this.runtime = t.runtime, this.touches = [], this.mouseDown = !1
        };
        var h = o.Instance.prototype,
            c = {
                left: 0,
                top: 0
            };
        h.findTouch = function(t) {
            var e, i;
            for (e = 0, i = this.touches.length; i > e; e++)
                if (this.touches[e].id === t) return e;
            return -1
        };
        var l = 0,
            u = 0,
            p = 0,
            d = null,
            f = [],
            g = 15,
            y = 500,
            m = 333,
            _ = 25;
        s.prototype.init = function(t, e, i, s) {
            var n = cr.performance_now();
            this.time = n, this.lasttime = n, this.starttime = n, this.startx = t, this.starty = e, this.x = t, this.y = e, this.lastx = t, this.lasty = e, this.width = 0, this.height = 0, this.pressure = 0, this.id = i, this.startindex = s, this.triggeredHold = !1, this.tooFarForHold = !1
        }, s.prototype.update = function(t, e, i, s, n, r) {
            this.lasttime = this.time, this.time = t, this.lastx = this.x, this.lasty = this.y, this.x = e, this.y = i, this.width = s, this.height = n, this.pressure = r, !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) >= g && (this.tooFarForHold = !0)
        }, s.prototype.maybeTriggerHold = function(t, e) {
            if (!this.triggeredHold) {
                var i = cr.performance_now();
                i - this.starttime >= y && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < g && (this.triggeredHold = !0, t.trigger_index = this.startindex, t.trigger_id = this.id, t.getTouchIndex = e, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGestureObject, t), t.getTouchIndex = 0)
            }
        };
        var v = -1e3,
            b = -1e3,
            w = -1e4;
        s.prototype.maybeTriggerTap = function(t, e) {
            if (!this.triggeredHold) {
                var i = cr.performance_now();
                i - this.starttime <= m && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < g && (t.trigger_index = this.startindex, t.trigger_id = this.id, t.getTouchIndex = e, 2 * m >= i - w && cr.distanceTo(v, b, this.x, this.y) < _ ? (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGestureObject, t), v = -1e3, b = -1e3, w = -1e4) : (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGestureObject, t), v = this.x, b = this.y, w = i), t.getTouchIndex = 0)
            }
        }, h.onCreate = function() {
            d = this, this.isWindows8 = !("undefined" == typeof window.c2isWindows8 || !window.c2isWindows8), this.orient_alpha = 0, this.orient_beta = 0, this.orient_gamma = 0, this.acc_g_x = 0, this.acc_g_y = 0, this.acc_g_z = 0, this.acc_x = 0, this.acc_y = 0, this.acc_z = 0, this.curTouchX = 0, this.curTouchY = 0, this.trigger_index = 0, this.trigger_id = 0, this.getTouchIndex = 0, this.useMouseInput = 0 !== this.properties[0];
            var e = this.runtime.fullscreen_mode > 0 ? document : this.runtime.canvas,
                i = document;
            this.runtime.isDirectCanvas ? i = e = window.Canvas : this.runtime.isCocoonJs && (i = e = window);
            var s = this;
            if (window.navigator.pointerEnabled ? (e.addEventListener("pointerdown", function(t) {
                s.onPointerStart(t)
            }, !1), e.addEventListener("pointermove", function(t) {
                s.onPointerMove(t)
            }, !1), i.addEventListener("pointerup", function(t) {
                s.onPointerEnd(t, !1)
            }, !1), i.addEventListener("pointercancel", function(t) {
                s.onPointerEnd(t, !0)
            }, !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function(t) {
                t.preventDefault()
            }, !1), document.addEventListener("MSGestureHold", function(t) {
                t.preventDefault()
            }, !1), this.runtime.canvas.addEventListener("gesturehold", function(t) {
                t.preventDefault()
            }, !1), document.addEventListener("gesturehold", function(t) {
                t.preventDefault()
            }, !1))) : window.navigator.msPointerEnabled ? (e.addEventListener("MSPointerDown", function(t) {
                s.onPointerStart(t)
            }, !1), e.addEventListener("MSPointerMove", function(t) {
                s.onPointerMove(t)
            }, !1), i.addEventListener("MSPointerUp", function(t) {
                s.onPointerEnd(t, !1)
            }, !1), i.addEventListener("MSPointerCancel", function(t) {
                s.onPointerEnd(t, !0)
            }, !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function(t) {
                t.preventDefault()
            }, !1), document.addEventListener("MSGestureHold", function(t) {
                t.preventDefault()
            }, !1))) : (e.addEventListener("touchstart", function(t) {
                s.onTouchStart(t)
            }, !1), e.addEventListener("touchmove", function(t) {
                s.onTouchMove(t)
            }, !1), i.addEventListener("touchend", function(t) {
                s.onTouchEnd(t, !1)
            }, !1), i.addEventListener("touchcancel", function(t) {
                s.onTouchEnd(t, !0)
            }, !1)), this.isWindows8) {
                var n = function(t) {
                        var e = t.reading;
                        s.acc_x = e.accelerationX, s.acc_y = e.accelerationY, s.acc_z = e.accelerationZ
                    },
                    r = function(t) {
                        var e = t.reading;
                        s.orient_alpha = e.yawDegrees, s.orient_beta = e.pitchDegrees, s.orient_gamma = e.rollDegrees
                    },
                    o = Windows.Devices.Sensors.Accelerometer.getDefault();
                o && (o.reportInterval = Math.max(o.minimumReportInterval, 16), o.addEventListener("readingchanged", n));
                var a = Windows.Devices.Sensors.Inclinometer.getDefault();
                a && (a.reportInterval = Math.max(a.minimumReportInterval, 16), a.addEventListener("readingchanged", r)), document.addEventListener("visibilitychange", function(t) {
                    document.hidden || document.msHidden ? (o && o.removeEventListener("readingchanged", n), a && a.removeEventListener("readingchanged", r)) : (o && o.addEventListener("readingchanged", n), a && a.addEventListener("readingchanged", r))
                }, !1)
            } else window.addEventListener("deviceorientation", function(t) {
                s.orient_alpha = t.alpha || 0, s.orient_beta = t.beta || 0, s.orient_gamma = t.gamma || 0
            }, !1), window.addEventListener("devicemotion", function(t) {
                t.accelerationIncludingGravity && (s.acc_g_x = t.accelerationIncludingGravity.x || 0, s.acc_g_y = t.accelerationIncludingGravity.y || 0, s.acc_g_z = t.accelerationIncludingGravity.z || 0), t.acceleration && (s.acc_x = t.acceleration.x || 0, s.acc_y = t.acceleration.y || 0, s.acc_z = t.acceleration.z || 0)
            }, !1);
            this.useMouseInput && !this.runtime.isDomFree && (jQuery(document).mousemove(function(t) {
                s.onMouseMove(t)
            }), jQuery(document).mousedown(function(t) {
                s.onMouseDown(t)
            }), jQuery(document).mouseup(function(t) {
                s.onMouseUp(t)
            })), !this.runtime.isiOS && this.runtime.isCordova && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(t, null, {
                frequency: 40
            }), this.runtime.tick2Me(this)
        }, h.onPointerMove = function(t) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && t.preventDefault();
                var e = this.findTouch(t.pointerId),
                    i = cr.performance_now();
                if (e >= 0) {
                    var s = this.runtime.isDomFree ? c : jQuery(this.runtime.canvas).offset(),
                        n = this.touches[e];
                    if (i - n.time < 2) return;
                    n.update(i, t.pageX - s.left, t.pageY - s.top, t.width || 0, t.height || 0, t.pressure || 0)
                }
            }
        }, h.onPointerStart = function(t) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
                var i = this.runtime.isDomFree ? c : jQuery(this.runtime.canvas).offset(),
                    s = t.pageX - i.left,
                    n = t.pageY - i.top;
                cr.performance_now();
                this.trigger_index = this.touches.length, this.trigger_id = t.pointerId, this.touches.push(e(s, n, t.pointerId, this.trigger_index)), this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = s, this.curTouchY = n, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this), this.runtime.isInUserInputEvent = !1
            }
        }, h.onPointerEnd = function(t, e) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
                var s = this.findTouch(t.pointerId);
                this.trigger_index = s >= 0 ? this.touches[s].startindex : -1, this.trigger_id = s >= 0 ? this.touches[s].id : -1, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), s >= 0 && (e || this.touches[s].maybeTriggerTap(this, s), i(this.touches[s]), this.touches.splice(s, 1)), this.runtime.isInUserInputEvent = !1
            }
        }, h.onTouchMove = function(t) {
            t.preventDefault && t.preventDefault();
            var e, i, s, n, r = cr.performance_now();
            for (e = 0, i = t.changedTouches.length; i > e; e++) {
                s = t.changedTouches[e];
                var o = this.findTouch(s.identifier);
                if (o >= 0) {
                    var a = this.runtime.isDomFree ? c : jQuery(this.runtime.canvas).offset();
                    if (n = this.touches[o], r - n.time < 2) continue;
                    var h = 2 * (s.radiusX || s.webkitRadiusX || s.mozRadiusX || s.msRadiusX || 0),
                        l = 2 * (s.radiusY || s.webkitRadiusY || s.mozRadiusY || s.msRadiusY || 0),
                        u = s.force || s.webkitForce || s.mozForce || s.msForce || 0;
                    n.update(r, s.pageX - a.left, s.pageY - a.top, h, l, u)
                }
            }
        }, h.onTouchStart = function(t) {
            t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
            var i = this.runtime.isDomFree ? c : jQuery(this.runtime.canvas).offset();
            cr.performance_now();
            this.runtime.isInUserInputEvent = !0;
            var s, n, r, o;
            for (s = 0, n = t.changedTouches.length; n > s; s++)
                if (r = t.changedTouches[s], o = this.findTouch(r.identifier), -1 === o) {
                    var a = r.pageX - i.left,
                        h = r.pageY - i.top;
                    this.trigger_index = this.touches.length, this.trigger_id = r.identifier, this.touches.push(e(a, h, r.identifier, this.trigger_index)), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = a, this.curTouchY = h, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this)
                }
            this.runtime.isInUserInputEvent = !1
        }, h.onTouchEnd = function(t, e) {
            t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(), this.runtime.isInUserInputEvent = !0;
            var s, n, r, o;
            for (s = 0, n = t.changedTouches.length; n > s; s++) r = t.changedTouches[s], o = this.findTouch(r.identifier), o >= 0 && (this.trigger_index = this.touches[o].startindex, this.trigger_id = this.touches[o].id, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), e || this.touches[o].maybeTriggerTap(this, o), i(this.touches[o]), this.touches.splice(o, 1));
            this.runtime.isInUserInputEvent = !1
        }, h.getAlpha = function() {
            return this.runtime.isCordova && 0 === this.orient_alpha && 0 !== p ? 90 * p : this.orient_alpha
        }, h.getBeta = function() {
            return this.runtime.isCordova && 0 === this.orient_beta && 0 !== u ? 90 * u : this.orient_beta
        }, h.getGamma = function() {
            return this.runtime.isCordova && 0 === this.orient_gamma && 0 !== l ? 90 * l : this.orient_gamma
        };
        h.onMouseDown = function(t) {
            var e = {
                    pageX: t.pageX,
                    pageY: t.pageY,
                    identifier: 0
                },
                i = {
                    changedTouches: [e]
                };
            this.onTouchStart(i), this.mouseDown = !0
        }, h.onMouseMove = function(t) {
            if (this.mouseDown) {
                var e = {
                        pageX: t.pageX,
                        pageY: t.pageY,
                        identifier: 0
                    },
                    i = {
                        changedTouches: [e]
                    };
                this.onTouchMove(i)
            }
        }, h.onMouseUp = function(t) {
            t.preventDefault && this.runtime.had_a_click && !this.runtime.isMobile && t.preventDefault(), this.runtime.had_a_click = !0;
            var e = {
                    pageX: t.pageX,
                    pageY: t.pageY,
                    identifier: 0
                },
                i = {
                    changedTouches: [e]
                };
            this.onTouchEnd(i), this.mouseDown = !1
        }, h.tick2 = function() {
            var t, e, i, s = cr.performance_now();
            for (t = 0, e = this.touches.length; e > t; ++t) i = this.touches[t], i.time <= s - 50 && (i.lasttime = s), i.maybeTriggerHold(this, t)
        }, n.prototype.OnTouchStart = function() {
            return !0
        }, n.prototype.OnTouchEnd = function() {
            return !0
        }, n.prototype.IsInTouch = function() {
            return this.touches.length
        }, n.prototype.OnTouchObject = function(t) {
            return t ? this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1) : !1
        };
        var x = [];
        n.prototype.IsTouchingObject = function(t) {
            if (!t) return !1;
            var e, i, s, n, r, o, a = t.getCurrentSol(),
                h = a.getObjects();
            for (s = 0, n = h.length; n > s; s++) {
                var c = h[s];
                for (c.update_bbox(), r = 0, o = this.touches.length; o > r; r++) {
                    var l = this.touches[r];
                    if (e = c.layer.canvasToLayer(l.x, l.y, !0), i = c.layer.canvasToLayer(l.x, l.y, !1), c.contains_pt(e, i)) {
                        x.push(c);
                        break
                    }
                }
            }
            return x.length ? (a.select_all = !1, cr.shallowAssignArray(a.instances, x), t.applySolToContainer(), cr.clearArray(x), !0) : !1
        }, n.prototype.CompareTouchSpeed = function(t, e, i) {
            if (t = Math.floor(t), 0 > t || t >= this.touches.length) return !1;
            var s = this.touches[t],
                n = cr.distanceTo(s.x, s.y, s.lastx, s.lasty),
                r = (s.time - s.lasttime) / 1e3,
                o = 0;
            return r > 0 && (o = n / r), cr.do_cmp(o, e, i)
        }, n.prototype.OrientationSupported = function() {
            return "undefined" != typeof window.DeviceOrientationEvent
        }, n.prototype.MotionSupported = function() {
            return "undefined" != typeof window.DeviceMotionEvent
        }, n.prototype.CompareOrientation = function(t, e, i) {
            var s = 0;
            return s = 0 === t ? this.getAlpha() : 1 === t ? this.getBeta() : this.getGamma(), cr.do_cmp(s, e, i)
        }, n.prototype.CompareAcceleration = function(t, e, i) {
            var s = 0;
            return 0 === t ? s = this.acc_g_x : 1 === t ? s = this.acc_g_y : 2 === t ? s = this.acc_g_z : 3 === t ? s = this.acc_x : 4 === t ? s = this.acc_y : 5 === t && (s = this.acc_z), cr.do_cmp(s, e, i)
        }, n.prototype.OnNthTouchStart = function(t) {
            return t = Math.floor(t), t === this.trigger_index
        }, n.prototype.OnNthTouchEnd = function(t) {
            return t = Math.floor(t), t === this.trigger_index
        }, n.prototype.HasNthTouch = function(t) {
            return t = Math.floor(t), this.touches.length >= t + 1
        }, n.prototype.OnHoldGesture = function() {
            return !0
        }, n.prototype.OnTapGesture = function() {
            return !0
        }, n.prototype.OnDoubleTapGesture = function() {
            return !0
        }, n.prototype.OnHoldGestureObject = function(t) {
            return t ? this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1) : !1
        }, n.prototype.OnTapGestureObject = function(t) {
            return t ? this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1) : !1
        }, n.prototype.OnDoubleTapGestureObject = function(t) {
            return t ? this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1) : !1
        }, o.cnds = new n, r.prototype.TouchCount = function(t) {
            t.set_int(this.touches.length)
        }, r.prototype.X = function(t, e) {
            var i = this.getTouchIndex;
            if (0 > i || i >= this.touches.length) return void t.set_float(0);
            var s, n, r, o, a;
            cr.is_undefined(e) ? (s = this.runtime.getLayerByNumber(0), n = s.scale, r = s.zoomRate, o = s.parallaxX, a = s.angle, s.scale = 1, s.zoomRate = 1, s.parallaxX = 1, s.angle = 0, t.set_float(s.canvasToLayer(this.touches[i].x, this.touches[i].y, !0)), s.scale = n, s.zoomRate = r, s.parallaxX = o, s.angle = a) : (s = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e), s ? t.set_float(s.canvasToLayer(this.touches[i].x, this.touches[i].y, !0)) : t.set_float(0))
        }, r.prototype.XAt = function(t, e, i) {
            if (e = Math.floor(e), 0 > e || e >= this.touches.length) return void t.set_float(0);
            var s, n, r, o, a;
            cr.is_undefined(i) ? (s = this.runtime.getLayerByNumber(0), n = s.scale, r = s.zoomRate, o = s.parallaxX, a = s.angle, s.scale = 1, s.zoomRate = 1, s.parallaxX = 1, s.angle = 0, t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)), s.scale = n, s.zoomRate = r, s.parallaxX = o, s.angle = a) : (s = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i), s ? t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)) : t.set_float(0))
        }, r.prototype.XForID = function(t, e, i) {
            var s = this.findTouch(e);
            if (0 > s) return void t.set_float(0);
            var n, r, o, a, h, c = this.touches[s];
            cr.is_undefined(i) ? (n = this.runtime.getLayerByNumber(0), r = n.scale, o = n.zoomRate, a = n.parallaxX, h = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxX = 1, n.angle = 0, t.set_float(n.canvasToLayer(c.x, c.y, !0)), n.scale = r, n.zoomRate = o, n.parallaxX = a, n.angle = h) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i), n ? t.set_float(n.canvasToLayer(c.x, c.y, !0)) : t.set_float(0))
        }, r.prototype.Y = function(t, e) {
            var i = this.getTouchIndex;
            if (0 > i || i >= this.touches.length) return void t.set_float(0);
            var s, n, r, o, a;
            cr.is_undefined(e) ? (s = this.runtime.getLayerByNumber(0), n = s.scale, r = s.zoomRate, o = s.parallaxY, a = s.angle, s.scale = 1, s.zoomRate = 1, s.parallaxY = 1, s.angle = 0, t.set_float(s.canvasToLayer(this.touches[i].x, this.touches[i].y, !1)), s.scale = n, s.zoomRate = r, s.parallaxY = o, s.angle = a) : (s = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e), s ? t.set_float(s.canvasToLayer(this.touches[i].x, this.touches[i].y, !1)) : t.set_float(0))
        }, r.prototype.YAt = function(t, e, i) {
            if (e = Math.floor(e), 0 > e || e >= this.touches.length) return void t.set_float(0);
            var s, n, r, o, a;
            cr.is_undefined(i) ? (s = this.runtime.getLayerByNumber(0), n = s.scale, r = s.zoomRate, o = s.parallaxY, a = s.angle, s.scale = 1, s.zoomRate = 1, s.parallaxY = 1, s.angle = 0, t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)), s.scale = n, s.zoomRate = r, s.parallaxY = o, s.angle = a) : (s = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i), s ? t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)) : t.set_float(0))
        }, r.prototype.YForID = function(t, e, i) {
            var s = this.findTouch(e);
            if (0 > s) return void t.set_float(0);
            var n, r, o, a, h, c = this.touches[s];
            cr.is_undefined(i) ? (n = this.runtime.getLayerByNumber(0), r = n.scale, o = n.zoomRate, a = n.parallaxY, h = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxY = 1, n.angle = 0, t.set_float(n.canvasToLayer(c.x, c.y, !1)), n.scale = r, n.zoomRate = o, n.parallaxY = a, n.angle = h) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i), n ? t.set_float(n.canvasToLayer(c.x, c.y, !1)) : t.set_float(0))
        }, r.prototype.AbsoluteX = function(t) {
            this.touches.length ? t.set_float(this.touches[0].x) : t.set_float(0)
        }, r.prototype.AbsoluteXAt = function(t, e) {
            return e = Math.floor(e), 0 > e || e >= this.touches.length ? void t.set_float(0) : void t.set_float(this.touches[e].x)
        }, r.prototype.AbsoluteXForID = function(t, e) {
            var i = this.findTouch(e);
            if (0 > i) return void t.set_float(0);
            var s = this.touches[i];
            t.set_float(s.x)
        }, r.prototype.AbsoluteY = function(t) {
            this.touches.length ? t.set_float(this.touches[0].y) : t.set_float(0)
        }, r.prototype.AbsoluteYAt = function(t, e) {
            return e = Math.floor(e), 0 > e || e >= this.touches.length ? void t.set_float(0) : void t.set_float(this.touches[e].y)
        }, r.prototype.AbsoluteYForID = function(t, e) {
            var i = this.findTouch(e);
            if (0 > i) return void t.set_float(0);
            var s = this.touches[i];
            t.set_float(s.y)
        }, r.prototype.SpeedAt = function(t, e) {
            if (e = Math.floor(e), 0 > e || e >= this.touches.length) return void t.set_float(0);
            var i = this.touches[e],
                s = cr.distanceTo(i.x, i.y, i.lastx, i.lasty),
                n = (i.time - i.lasttime) / 1e3;
            0 === n ? t.set_float(0) : t.set_float(s / n)
        }, r.prototype.SpeedForID = function(t, e) {
            var i = this.findTouch(e);
            if (0 > i) return void t.set_float(0);
            var s = this.touches[i],
                n = cr.distanceTo(s.x, s.y, s.lastx, s.lasty),
                r = (s.time - s.lasttime) / 1e3;
            0 === r ? t.set_float(0) : t.set_float(n / r)
        }, r.prototype.AngleAt = function(t, e) {
            if (e = Math.floor(e), 0 > e || e >= this.touches.length) return void t.set_float(0);
            var i = this.touches[e];
            t.set_float(cr.to_degrees(cr.angleTo(i.lastx, i.lasty, i.x, i.y)))
        }, r.prototype.AngleForID = function(t, e) {
            var i = this.findTouch(e);
            if (0 > i) return void t.set_float(0);
            var s = this.touches[i];
            t.set_float(cr.to_degrees(cr.angleTo(s.lastx, s.lasty, s.x, s.y)))
        }, r.prototype.Alpha = function(t) {
            t.set_float(this.getAlpha())
        }, r.prototype.Beta = function(t) {
            t.set_float(this.getBeta())
        }, r.prototype.Gamma = function(t) {
            t.set_float(this.getGamma())
        }, r.prototype.AccelerationXWithG = function(t) {
            t.set_float(this.acc_g_x)
        }, r.prototype.AccelerationYWithG = function(t) {
            t.set_float(this.acc_g_y)
        }, r.prototype.AccelerationZWithG = function(t) {
            t.set_float(this.acc_g_z)
        }, r.prototype.AccelerationX = function(t) {
            t.set_float(this.acc_x)
        }, r.prototype.AccelerationY = function(t) {
            t.set_float(this.acc_y)
        }, r.prototype.AccelerationZ = function(t) {
            t.set_float(this.acc_z)
        }, r.prototype.TouchIndex = function(t) {
            t.set_int(this.trigger_index)
        }, r.prototype.TouchID = function(t) {
            t.set_float(this.trigger_id)
        }, r.prototype.WidthForID = function(t, e) {
            var i = this.findTouch(e);
            if (0 > i) return void t.set_float(0);
            var s = this.touches[i];
            t.set_float(s.width)
        }, r.prototype.HeightForID = function(t, e) {
            var i = this.findTouch(e);
            if (0 > i) return void t.set_float(0);
            var s = this.touches[i];
            t.set_float(s.height)
        }, r.prototype.PressureForID = function(t, e) {
            var i = this.findTouch(e);
            if (0 > i) return void t.set_float(0);
            var s = this.touches[i];
            t.set_float(s.pressure)
        }, o.exps = new r
    }(), cr.behaviors.Anchor = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.behaviors.Anchor.prototype;
        s.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var n = s.Type.prototype;
        n.onCreate = function() {}, s.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var r = s.Instance.prototype;
        r.onCreate = function() {
            this.anch_left = this.properties[0], this.anch_top = this.properties[1], this.anch_right = this.properties[2], this.anch_bottom = this.properties[3], this.inst.update_bbox(), this.xleft = this.inst.bbox.left, this.ytop = this.inst.bbox.top, this.xright = this.runtime.original_width - this.inst.bbox.left, this.ybottom = this.runtime.original_height - this.inst.bbox.top, this.rdiff = this.runtime.original_width - this.inst.bbox.right, this.bdiff = this.runtime.original_height - this.inst.bbox.bottom, this.enabled = 0 !== this.properties[4]
        }, r.saveToJSON = function() {
            return {
                xleft: this.xleft,
                ytop: this.ytop,
                xright: this.xright,
                ybottom: this.ybottom,
                rdiff: this.rdiff,
                bdiff: this.bdiff,
                enabled: this.enabled
            }
        }, r.loadFromJSON = function(t) {
            this.xleft = t.xleft, this.ytop = t.ytop, this.xright = t.xright, this.ybottom = t.ybottom, this.rdiff = t.rdiff, this.bdiff = t.bdiff, this.enabled = t.enabled
        }, r.tick = function() {
            if (this.enabled) {
                var t, e = this.inst.layer,
                    i = this.inst,
                    s = this.inst.bbox;
                0 === this.anch_left ? (i.update_bbox(), t = e.viewLeft + this.xleft - s.left, 0 !== t && (i.x += t, i.set_bbox_changed())) : 1 === this.anch_left && (i.update_bbox(), t = e.viewRight - this.xright - s.left, 0 !== t && (i.x += t, i.set_bbox_changed())), 0 === this.anch_top ? (i.update_bbox(), t = e.viewTop + this.ytop - s.top, 0 !== t && (i.y += t, i.set_bbox_changed())) : 1 === this.anch_top && (i.update_bbox(), t = e.viewBottom - this.ybottom - s.top, 0 !== t && (i.y += t, i.set_bbox_changed())), 1 === this.anch_right && (i.update_bbox(), t = e.viewRight - this.rdiff - s.right, 0 !== t && (i.width += t, i.width < 0 && (i.width = 0), i.set_bbox_changed())), 1 === this.anch_bottom && (i.update_bbox(), t = e.viewBottom - this.bdiff - s.bottom, 0 !== t && (i.height += t, i.height < 0 && (i.height = 0), i.set_bbox_changed()))
            }
        }, s.cnds = new t, e.prototype.SetEnabled = function(t) {
            this.enabled && 0 === t ? this.enabled = !1 : this.enabled || 0 === t || (this.inst.update_bbox(), this.xleft = this.inst.bbox.left, this.ytop = this.inst.bbox.top, this.xright = this.runtime.original_width - this.inst.bbox.left, this.ybottom = this.runtime.original_height - this.inst.bbox.top, this.rdiff = this.runtime.original_width - this.inst.bbox.right, this.bdiff = this.runtime.original_height - this.inst.bbox.bottom, this.enabled = !0)
        }, s.acts = new e, s.exps = new i
    }(), cr.behaviors.Bullet = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.behaviors.Bullet.prototype;
        s.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var n = s.Type.prototype;
        n.onCreate = function() {}, s.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var r = s.Instance.prototype;
        r.onCreate = function() {
            var t = this.properties[0];
            this.acc = this.properties[1], this.g = this.properties[2], this.bounceOffSolid = 0 !== this.properties[3], this.setAngle = 0 !== this.properties[4], this.dx = Math.cos(this.inst.angle) * t, this.dy = Math.sin(this.inst.angle) * t, this.lastx = this.inst.x, this.lasty = this.inst.y, this.lastKnownAngle = this.inst.angle, this.travelled = 0, this.enabled = 0 !== this.properties[5]
        }, r.saveToJSON = function() {
            return {
                acc: this.acc,
                g: this.g,
                dx: this.dx,
                dy: this.dy,
                lx: this.lastx,
                ly: this.lasty,
                lka: this.lastKnownAngle,
                t: this.travelled,
                e: this.enabled
            }
        }, r.loadFromJSON = function(t) {
            this.acc = t.acc, this.g = t.g, this.dx = t.dx, this.dy = t.dy, this.lastx = t.lx, this.lasty = t.ly, this.lastKnownAngle = t.lka, this.travelled = t.t, this.enabled = t.e
        }, r.tick = function() {
            if (this.enabled) {
                var t, e, i, s, n = this.runtime.getDt(this.inst);
                this.inst.angle !== this.lastKnownAngle && (this.setAngle && (t = cr.distanceTo(0, 0, this.dx, this.dy), this.dx = Math.cos(this.inst.angle) * t, this.dy = Math.sin(this.inst.angle) * t), this.lastKnownAngle = this.inst.angle), 0 !== this.acc && (t = cr.distanceTo(0, 0, this.dx, this.dy), e = 0 === this.dx && 0 === this.dy ? this.inst.angle : cr.angleTo(0, 0, this.dx, this.dy), t += this.acc * n, 0 > t && (t = 0), this.dx = Math.cos(e) * t, this.dy = Math.sin(e) * t), 0 !== this.g && (this.dy += this.g * n), this.lastx = this.inst.x, this.lasty = this.inst.y, (0 !== this.dx || 0 !== this.dy) && (this.inst.x += this.dx * n, this.inst.y += this.dy * n, this.travelled += cr.distanceTo(0, 0, this.dx * n, this.dy * n), this.setAngle && (this.inst.angle = cr.angleTo(0, 0, this.dx, this.dy), this.inst.set_bbox_changed(), this.lastKnownAngle = this.inst.angle), this.inst.set_bbox_changed(), this.bounceOffSolid && (i = this.runtime.testOverlapSolid(this.inst), i && (this.runtime.registerCollision(this.inst, i), t = cr.distanceTo(0, 0, this.dx, this.dy), s = this.runtime.calculateSolidBounceAngle(this.inst, this.lastx, this.lasty), this.dx = Math.cos(s) * t, this.dy = Math.sin(s) * t, this.inst.x += this.dx * n, this.inst.y += this.dy * n, this.inst.set_bbox_changed(), this.setAngle && (this.inst.angle = s, this.lastKnownAngle = s, this.inst.set_bbox_changed()), this.runtime.pushOutSolid(this.inst, this.dx / t, this.dy / t, Math.max(2.5 * t * n, 30)) || this.runtime.pushOutSolidNearest(this.inst, 100))))
            }
        }, t.prototype.CompareSpeed = function(t, e) {
            return cr.do_cmp(cr.distanceTo(0, 0, this.dx, this.dy), t, e)
        }, t.prototype.CompareTravelled = function(t, e) {
            return cr.do_cmp(this.travelled, t, e)
        }, s.cnds = new t, e.prototype.SetSpeed = function(t) {
            var e = cr.angleTo(0, 0, this.dx, this.dy);
            this.dx = Math.cos(e) * t, this.dy = Math.sin(e) * t
        }, e.prototype.SetAcceleration = function(t) {
            this.acc = t
        }, e.prototype.SetGravity = function(t) {
            this.g = t
        }, e.prototype.SetAngleOfMotion = function(t) {
            t = cr.to_radians(t);
            var e = cr.distanceTo(0, 0, this.dx, this.dy);
            this.dx = Math.cos(t) * e, this.dy = Math.sin(t) * e
        }, e.prototype.Bounce = function(t) {
            if (t) {
                var e = t.getFirstPicked(this.inst);
                if (e) {
                    var i = this.runtime.getDt(this.inst),
                        s = cr.distanceTo(0, 0, this.dx, this.dy),
                        n = this.runtime.calculateSolidBounceAngle(this.inst, this.lastx, this.lasty, e);
                    this.dx = Math.cos(n) * s, this.dy = Math.sin(n) * s, this.inst.x += this.dx * i, this.inst.y += this.dy * i, this.inst.set_bbox_changed(), this.setAngle && (this.inst.angle = n, this.lastKnownAngle = n, this.inst.set_bbox_changed()), this.bounceOffSolid ? this.runtime.pushOutSolid(this.inst, this.dx / s, this.dy / s, Math.max(2.5 * s * i, 30)) || this.runtime.pushOutSolidNearest(this.inst, 100) : 0 !== s && this.runtime.pushOut(this.inst, this.dx / s, this.dy / s, Math.max(2.5 * s * i, 30), e)
                }
            }
        }, e.prototype.SetDistanceTravelled = function(t) {
            this.travelled = t
        }, e.prototype.SetEnabled = function(t) {
            this.enabled = 1 === t
        }, s.acts = new e, i.prototype.Speed = function(t) {
            var e = cr.distanceTo(0, 0, this.dx, this.dy);
            e = cr.round6dp(e), t.set_float(e)
        }, i.prototype.Acceleration = function(t) {
            t.set_float(this.acc)
        }, i.prototype.AngleOfMotion = function(t) {
            t.set_float(cr.to_degrees(cr.angleTo(0, 0, this.dx, this.dy)))
        }, i.prototype.DistanceTravelled = function(t) {
            t.set_float(this.travelled)
        }, i.prototype.Gravity = function(t) {
            t.set_float(this.g)
        }, s.exps = new i
    }(), cr.behaviors.DragnDrop = function(t) {
        this.runtime = t;
        var e = this;
        this.runtime.isDomFree || (jQuery(document).mousemove(function(t) {
            e.onMouseMove(t)
        }), jQuery(document).mousedown(function(t) {
            e.onMouseDown(t)
        }), jQuery(document).mouseup(function(t) {
            e.onMouseUp(t)
        }));
        var i = this.runtime.fullscreen_mode > 0 ? document : this.runtime.canvas;
        this.runtime.isDirectCanvas ? i = window.Canvas : this.runtime.isCocoonJs && (i = window), window.navigator.pointerEnabled ? (i.addEventListener("pointerdown", function(t) {
            e.onPointerStart(t)
        }, !1), i.addEventListener("pointermove", function(t) {
            e.onPointerMove(t)
        }, !1), i.addEventListener("pointerup", function(t) {
            e.onPointerEnd(t)
        }, !1), i.addEventListener("pointercancel", function(t) {
            e.onPointerEnd(t)
        }, !1)) : window.navigator.msPointerEnabled ? (i.addEventListener("MSPointerDown", function(t) {
            e.onPointerStart(t)
        }, !1), i.addEventListener("MSPointerMove", function(t) {
            e.onPointerMove(t)
        }, !1), i.addEventListener("MSPointerUp", function(t) {
            e.onPointerEnd(t)
        }, !1), i.addEventListener("MSPointerCancel", function(t) {
            e.onPointerEnd(t)
        }, !1)) : (i.addEventListener("touchstart", function(t) {
            e.onTouchStart(t)
        }, !1), i.addEventListener("touchmove", function(t) {
            e.onTouchMove(t)
        }, !1), i.addEventListener("touchend", function(t) {
            e.onTouchEnd(t)
        }, !1), i.addEventListener("touchcancel", function(t) {
            e.onTouchEnd(t)
        }, !1))
    },
    function() {
        function t(t) {
            var e, i;
            for (e = 0, i = t.behavior_insts.length; i > e; e++)
                if (t.behavior_insts[e] instanceof n.Instance) return t.behavior_insts[e];
            return null
        }

        function e() {}

        function i() {}

        function s() {}
        var n = cr.behaviors.DragnDrop.prototype,
            r = {
                left: 0,
                top: 0
            };
        n.onMouseDown = function(t) {
            1 === t.which && this.onInputDown("leftmouse", t.pageX, t.pageY)
        }, n.onMouseMove = function(t) {
            1 === t.which && this.onInputMove("leftmouse", t.pageX, t.pageY)
        }, n.onMouseUp = function(t) {
            1 === t.which && this.onInputUp("leftmouse")
        }, n.onTouchStart = function(t) {
            t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
            var e, i, s, n;
            for (e = 0, i = t.changedTouches.length; i > e; e++) s = t.changedTouches[e], n = s.identifier, this.onInputDown(n ? n.toString() : "<none>", s.pageX, s.pageY)
        }, n.onTouchMove = function(t) {
            t.preventDefault && t.preventDefault();
            var e, i, s, n;
            for (e = 0, i = t.changedTouches.length; i > e; e++) s = t.changedTouches[e], n = s.identifier, this.onInputMove(n ? n.toString() : "<none>", s.pageX, s.pageY)
        }, n.onTouchEnd = function(t) {
            t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
            var e, i, s, n;
            for (e = 0, i = t.changedTouches.length; i > e; e++) s = t.changedTouches[e], n = s.identifier, this.onInputUp(n ? n.toString() : "<none>")
        }, n.onPointerStart = function(t) {
            t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType && (t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(), this.onInputDown(t.pointerId.toString(), t.pageX, t.pageY))
        }, n.onPointerMove = function(t) {
            t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType && (t.preventDefault && t.preventDefault(), this.onInputMove(t.pointerId.toString(), t.pageX, t.pageY))
        }, n.onPointerEnd = function(t) {
            t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType && (t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(), this.onInputUp(t.pointerId.toString()))
        }, n.onInputDown = function(e, i, s) {
            var n, o, a, h, c, l, u, p, d = this.runtime.isDomFree ? r : jQuery(this.runtime.canvas).offset(),
                f = i - d.left,
                g = s - d.top,
                y = this.my_instances.valuesRef(),
                m = null;
            for (c = 0, l = y.length; l > c; c++) p = y[c], u = t(p), u.enabled && !u.dragging && (n = p.layer.canvasToLayer(f, g, !0), o = p.layer.canvasToLayer(f, g, !1), p.update_bbox(), p.contains_pt(n, o) && (m ? p.layer.index > m.layer.index ? (m = p, a = n, h = o) : p.layer.index === m.layer.index && p.get_zindex() > m.get_zindex() && (m = p, a = n, h = o) : (m = p, a = n, h = o)));
            m && t(m).onDown(e, a, h)
        }, n.onInputMove = function(e, i, s) {
            var n, o, a, h, c, l, u = this.runtime.isDomFree ? r : jQuery(this.runtime.canvas).offset(),
                p = i - u.left,
                d = s - u.top,
                f = this.my_instances.valuesRef();
            for (a = 0, h = f.length; h > a; a++) l = f[a], c = t(l), !c.enabled || !c.dragging || c.dragging && c.dragsource !== e || (n = l.layer.canvasToLayer(p, d, !0), o = l.layer.canvasToLayer(p, d, !1), c.onMove(n, o))
        }, n.onInputUp = function(e) {
            var i, s, n, r, o = this.my_instances.valuesRef();
            for (i = 0, s = o.length; s > i; i++) r = o[i], n = t(r), n.dragging && n.dragsource === e && n.onUp()
        }, n.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var o = n.Type.prototype;
        o.onCreate = function() {}, n.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var a = n.Instance.prototype;
        a.onCreate = function() {
            this.dragging = !1, this.dx = 0, this.dy = 0, this.dragsource = "<none>", this.axes = this.properties[0], this.enabled = 0 !== this.properties[1]
        }, a.saveToJSON = function() {
            return {
                enabled: this.enabled
            }
        }, a.loadFromJSON = function(t) {
            this.enabled = t.enabled, this.dragging = !1
        }, a.onDown = function(t, e, i) {
            this.dx = e - this.inst.x, this.dy = i - this.inst.y, this.dragging = !0, this.dragsource = t, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.behaviors.DragnDrop.prototype.cnds.OnDragStart, this.inst), this.runtime.isInUserInputEvent = !1
        }, a.onMove = function(t, e) {
            var i = t - this.dx,
                s = e - this.dy;
            0 === this.axes ? (this.inst.x !== i || this.inst.y !== s) && (this.inst.x = i, this.inst.y = s, this.inst.set_bbox_changed()) : 1 === this.axes ? this.inst.x !== i && (this.inst.x = i, this.inst.set_bbox_changed()) : 2 === this.axes && this.inst.y !== s && (this.inst.y = s, this.inst.set_bbox_changed())
        }, a.onUp = function() {
            this.dragging = !1, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.behaviors.DragnDrop.prototype.cnds.OnDrop, this.inst), this.runtime.isInUserInputEvent = !1
        }, a.tick = function() {}, e.prototype.IsDragging = function() {
            return this.dragging
        }, e.prototype.OnDragStart = function() {
            return !0
        }, e.prototype.OnDrop = function() {
            return !0
        }, e.prototype.IsEnabled = function() {
            return !!this.enabled
        }, n.cnds = new e, i.prototype.SetEnabled = function(t) {
            this.enabled = 0 !== t, this.enabled || (this.dragging = !1)
        }, i.prototype.Drop = function() {
            this.dragging && this.onUp()
        }, n.acts = new i, n.exps = new s
    }(), cr.behaviors.Fade = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.behaviors.Fade.prototype;
        s.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var n = s.Type.prototype;
        n.onCreate = function() {}, s.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var r = s.Instance.prototype;
        r.onCreate = function() {
            this.activeAtStart = 1 === this.properties[0], this.setMaxOpacity = !1, this.fadeInTime = this.properties[1], this.waitTime = this.properties[2], this.fadeOutTime = this.properties[3], this.destroy = this.properties[4], this.stage = this.activeAtStart ? 0 : 3, this.recycled ? this.stageTime.reset() : this.stageTime = new cr.KahanAdder, this.maxOpacity = this.inst.opacity ? this.inst.opacity : 1, this.activeAtStart && (0 === this.fadeInTime ? (this.stage = 1, 0 === this.waitTime && (this.stage = 2)) : (this.inst.opacity = 0, this.runtime.redraw = !0))
        }, r.saveToJSON = function() {
            return {
                fit: this.fadeInTime,
                wt: this.waitTime,
                fot: this.fadeOutTime,
                s: this.stage,
                st: this.stageTime.sum,
                mo: this.maxOpacity
            }
        }, r.loadFromJSON = function(t) {
            this.fadeInTime = t.fit, this.waitTime = t.wt, this.fadeOutTime = t.fot, this.stage = t.s, this.stageTime.reset(), this.stageTime.sum = t.st, this.maxOpacity = t.mo
        }, r.tick = function() {
            this.stageTime.add(this.runtime.getDt(this.inst)), 0 === this.stage && (this.inst.opacity = this.stageTime.sum / this.fadeInTime * this.maxOpacity, this.runtime.redraw = !0, this.inst.opacity >= this.maxOpacity && (this.inst.opacity = this.maxOpacity, this.stage = 1, this.stageTime.reset(), this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnFadeInEnd, this.inst))), 1 === this.stage && this.stageTime.sum >= this.waitTime && (this.stage = 2, this.stageTime.reset(), this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnWaitEnd, this.inst)), 2 === this.stage && 0 !== this.fadeOutTime && (this.inst.opacity = this.maxOpacity - this.stageTime.sum / this.fadeOutTime * this.maxOpacity, this.runtime.redraw = !0, this.inst.opacity < 0 && (this.inst.opacity = 0, this.stage = 3, this.stageTime.reset(), this.runtime.trigger(cr.behaviors.Fade.prototype.cnds.OnFadeOutEnd, this.inst), 1 === this.destroy && this.runtime.DestroyInstance(this.inst)))
        }, r.doStart = function() {
            this.stage = 0, this.stageTime.reset(), 0 === this.fadeInTime ? (this.stage = 1, 0 === this.waitTime && (this.stage = 2)) : (this.inst.opacity = 0, this.runtime.redraw = !0)
        }, t.prototype.OnFadeOutEnd = function() {
            return !0
        }, t.prototype.OnFadeInEnd = function() {
            return !0
        }, t.prototype.OnWaitEnd = function() {
            return !0
        }, s.cnds = new t, e.prototype.StartFade = function() {
            this.activeAtStart || this.setMaxOpacity || (this.maxOpacity = this.inst.opacity ? this.inst.opacity : 1, this.setMaxOpacity = !0), 3 === this.stage && this.doStart()
        }, e.prototype.RestartFade = function() {
            this.doStart()
        }, e.prototype.SetFadeInTime = function(t) {
            0 > t && (t = 0), this.fadeInTime = t
        }, e.prototype.SetWaitTime = function(t) {
            0 > t && (t = 0), this.waitTime = t
        }, e.prototype.SetFadeOutTime = function(t) {
            0 > t && (t = 0), this.fadeOutTime = t
        }, s.acts = new e, i.prototype.FadeInTime = function(t) {
            t.set_float(this.fadeInTime)
        }, i.prototype.WaitTime = function(t) {
            t.set_float(this.waitTime)
        }, i.prototype.FadeOutTime = function(t) {
            t.set_float(this.fadeOutTime)
        }, s.exps = new i
    }(), cr.behaviors.Flash = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.behaviors.Flash.prototype;
        s.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var n = s.Type.prototype;
        n.onCreate = function() {}, s.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var r = s.Instance.prototype;
        r.onCreate = function() {
            this.ontime = 0, this.offtime = 0, this.stage = 0, this.stagetimeleft = 0, this.timeleft = 0
        }, r.saveToJSON = function() {
            return {
                ontime: this.ontime,
                offtime: this.offtime,
                stage: this.stage,
                stagetimeleft: this.stagetimeleft,
                timeleft: this.timeleft
            }
        }, r.loadFromJSON = function(t) {
            this.ontime = t.ontime, this.offtime = t.offtime, this.stage = t.stage, this.stagetimeleft = t.stagetimeleft, this.timeleft = t.timeleft
        }, r.tick = function() {
            if (!(this.timeleft <= 0)) {
                var t = this.runtime.getDt(this.inst);
                if (this.timeleft -= t, this.timeleft <= 0) return this.timeleft = 0, this.inst.visible = !0, this.runtime.redraw = !0, void this.runtime.trigger(cr.behaviors.Flash.prototype.cnds.OnFlashEnded, this.inst);
                this.stagetimeleft -= t, this.stagetimeleft <= 0 && (0 === this.stage ? (this.inst.visible = !1, this.stage = 1, this.stagetimeleft += this.offtime) : (this.inst.visible = !0, this.stage = 0, this.stagetimeleft += this.ontime), this.runtime.redraw = !0)
            }
        }, t.prototype.IsFlashing = function() {
            return this.timeleft > 0
        }, t.prototype.OnFlashEnded = function() {
            return !0
        }, s.cnds = new t, e.prototype.Flash = function(t, e, i) {
            this.ontime = t, this.offtime = e, this.stage = 1, this.stagetimeleft = e, this.timeleft = i, this.inst.visible = !1, this.runtime.redraw = !0
        }, e.prototype.StopFlashing = function() {
            this.timeleft = 0, this.inst.visible = !0, this.runtime.redraw = !0
        }, s.acts = new e, s.exps = new i
    }(), cr.behaviors.Pin = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.behaviors.Pin.prototype;
        s.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var n = s.Type.prototype;
        n.onCreate = function() {}, s.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var r = s.Instance.prototype;
        r.onCreate = function() {
            this.pinObject = null, this.pinObjectUid = -1, this.pinAngle = 0, this.pinDist = 0, this.myStartAngle = 0, this.theirStartAngle = 0, this.lastKnownAngle = 0, this.mode = 0;
            var t = this;
            this.recycled || (this.myDestroyCallback = function(e) {
                t.onInstanceDestroyed(e)
            }), this.runtime.addDestroyCallback(this.myDestroyCallback)
        }, r.saveToJSON = function() {
            return {
                uid: this.pinObject ? this.pinObject.uid : -1,
                pa: this.pinAngle,
                pd: this.pinDist,
                msa: this.myStartAngle,
                tsa: this.theirStartAngle,
                lka: this.lastKnownAngle,
                m: this.mode
            }
        }, r.loadFromJSON = function(t) {
            this.pinObjectUid = t.uid, this.pinAngle = t.pa, this.pinDist = t.pd, this.myStartAngle = t.msa, this.theirStartAngle = t.tsa, this.lastKnownAngle = t.lka, this.mode = t.m
        }, r.afterLoad = function() {
            -1 === this.pinObjectUid ? this.pinObject = null : this.pinObject = this.runtime.getObjectByUID(this.pinObjectUid), this.pinObjectUid = -1
        }, r.onInstanceDestroyed = function(t) {
            this.pinObject == t && (this.pinObject = null)
        }, r.onDestroy = function() {
            this.pinObject = null, this.runtime.removeDestroyCallback(this.myDestroyCallback)
        }, r.tick = function() {}, r.tick2 = function() {
            if (this.pinObject) {
                this.lastKnownAngle !== this.inst.angle && (this.myStartAngle = cr.clamp_angle(this.myStartAngle + (this.inst.angle - this.lastKnownAngle)));
                var t = this.inst.x,
                    e = this.inst.y;
                if (3 === this.mode || 4 === this.mode) {
                    var i = cr.distanceTo(this.inst.x, this.inst.y, this.pinObject.x, this.pinObject.y);
                    if (i > this.pinDist || 4 === this.mode && i < this.pinDist) {
                        var s = cr.angleTo(this.pinObject.x, this.pinObject.y, this.inst.x, this.inst.y);
                        t = this.pinObject.x + Math.cos(s) * this.pinDist, e = this.pinObject.y + Math.sin(s) * this.pinDist
                    }
                } else t = this.pinObject.x + Math.cos(this.pinObject.angle + this.pinAngle) * this.pinDist, e = this.pinObject.y + Math.sin(this.pinObject.angle + this.pinAngle) * this.pinDist;
                var n = cr.clamp_angle(this.myStartAngle + (this.pinObject.angle - this.theirStartAngle));
                this.lastKnownAngle = n, 0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.inst.x === t && this.inst.y === e || (this.inst.x = t,
                    this.inst.y = e, this.inst.set_bbox_changed()), 0 !== this.mode && 2 !== this.mode || this.inst.angle === n || (this.inst.angle = n, this.inst.set_bbox_changed())
            }
        }, t.prototype.IsPinned = function() {
            return !!this.pinObject
        }, s.cnds = new t, e.prototype.Pin = function(t, e) {
            if (t) {
                var i = t.getFirstPicked(this.inst);
                i && (this.pinObject = i, this.pinAngle = cr.angleTo(i.x, i.y, this.inst.x, this.inst.y) - i.angle, this.pinDist = cr.distanceTo(i.x, i.y, this.inst.x, this.inst.y), this.myStartAngle = this.inst.angle, this.lastKnownAngle = this.inst.angle, this.theirStartAngle = i.angle, this.mode = e)
            }
        }, e.prototype.Unpin = function() {
            this.pinObject = null
        }, s.acts = new e, i.prototype.PinnedUID = function(t) {
            t.set_int(this.pinObject ? this.pinObject.uid : -1)
        }, s.exps = new i
    }(), cr.behaviors.Platform = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.behaviors.Platform.prototype;
        s.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var n = s.Type.prototype;
        n.onCreate = function() {};
        var r = 0,
            o = 1,
            a = 2,
            h = 3;
        s.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime, this.leftkey = !1, this.rightkey = !1, this.jumpkey = !1, this.jumped = !1, this.doubleJumped = !1, this.canDoubleJump = !1, this.ignoreInput = !1, this.simleft = !1, this.simright = !1, this.simjump = !1, this.lastFloorObject = null, this.loadFloorObject = -1, this.lastFloorX = 0, this.lastFloorY = 0, this.floorIsJumpthru = !1, this.animMode = r, this.fallthrough = 0, this.firstTick = !0, this.dx = 0, this.dy = 0
        };
        var c = s.Instance.prototype;
        c.updateGravity = function() {
            this.downx = Math.cos(this.ga), this.downy = Math.sin(this.ga), this.rightx = Math.cos(this.ga - Math.PI / 2), this.righty = Math.sin(this.ga - Math.PI / 2), this.downx = cr.round6dp(this.downx), this.downy = cr.round6dp(this.downy), this.rightx = cr.round6dp(this.rightx), this.righty = cr.round6dp(this.righty), this.g1 = this.g, this.g < 0 && (this.downx *= -1, this.downy *= -1, this.g = Math.abs(this.g))
        }, c.onCreate = function() {
            this.maxspeed = this.properties[0], this.acc = this.properties[1], this.dec = this.properties[2], this.jumpStrength = this.properties[3], this.g = this.properties[4], this.g1 = this.g, this.maxFall = this.properties[5], this.enableDoubleJump = 0 !== this.properties[6], this.jumpSustain = this.properties[7] / 1e3, this.defaultControls = 1 === this.properties[8], this.enabled = 0 !== this.properties[9], this.wasOnFloor = !1, this.wasOverJumpthru = this.runtime.testOverlapJumpThru(this.inst), this.loadOverJumpthru = -1, this.sustainTime = 0, this.ga = cr.to_radians(90), this.updateGravity();
            var t = this;
            this.defaultControls && !this.runtime.isDomFree && (jQuery(document).keydown(function(e) {
                t.onKeyDown(e)
            }), jQuery(document).keyup(function(e) {
                t.onKeyUp(e)
            })), this.recycled || (this.myDestroyCallback = function(e) {
                t.onInstanceDestroyed(e)
            }), this.runtime.addDestroyCallback(this.myDestroyCallback), this.inst.extra.isPlatformBehavior = !0
        }, c.saveToJSON = function() {
            return {
                ii: this.ignoreInput,
                lfx: this.lastFloorX,
                lfy: this.lastFloorY,
                lfo: this.lastFloorObject ? this.lastFloorObject.uid : -1,
                am: this.animMode,
                en: this.enabled,
                fall: this.fallthrough,
                ft: this.firstTick,
                dx: this.dx,
                dy: this.dy,
                ms: this.maxspeed,
                acc: this.acc,
                dec: this.dec,
                js: this.jumpStrength,
                g: this.g,
                g1: this.g1,
                mf: this.maxFall,
                wof: this.wasOnFloor,
                woj: this.wasOverJumpthru ? this.wasOverJumpthru.uid : -1,
                ga: this.ga,
                edj: this.enableDoubleJump,
                cdj: this.canDoubleJump,
                dj: this.doubleJumped,
                sus: this.jumpSustain
            }
        }, c.loadFromJSON = function(t) {
            this.ignoreInput = t.ii, this.lastFloorX = t.lfx, this.lastFloorY = t.lfy, this.loadFloorObject = t.lfo, this.animMode = t.am, this.enabled = t.en, this.fallthrough = t.fall, this.firstTick = t.ft, this.dx = t.dx, this.dy = t.dy, this.maxspeed = t.ms, this.acc = t.acc, this.dec = t.dec, this.jumpStrength = t.js, this.g = t.g, this.g1 = t.g1, this.maxFall = t.mf, this.wasOnFloor = t.wof, this.loadOverJumpthru = t.woj, this.ga = t.ga, this.enableDoubleJump = t.edj, this.canDoubleJump = t.cdj, this.doubleJumped = t.dj, this.jumpSustain = t.sus, this.leftkey = !1, this.rightkey = !1, this.jumpkey = !1, this.jumped = !1, this.simleft = !1, this.simright = !1, this.simjump = !1, this.sustainTime = 0, this.updateGravity()
        }, c.afterLoad = function() {
            -1 === this.loadFloorObject ? this.lastFloorObject = null : this.lastFloorObject = this.runtime.getObjectByUID(this.loadFloorObject), -1 === this.loadOverJumpthru ? this.wasOverJumpthru = null : this.wasOverJumpthru = this.runtime.getObjectByUID(this.loadOverJumpthru)
        }, c.onInstanceDestroyed = function(t) {
            this.lastFloorObject == t && (this.lastFloorObject = null)
        }, c.onDestroy = function() {
            this.lastFloorObject = null, this.runtime.removeDestroyCallback(this.myDestroyCallback)
        }, c.onKeyDown = function(t) {
            switch (t.which) {
                case 38:
                    t.preventDefault(), this.jumpkey = !0;
                    break;
                case 37:
                    t.preventDefault(), this.leftkey = !0;
                    break;
                case 39:
                    t.preventDefault(), this.rightkey = !0
            }
        }, c.onKeyUp = function(t) {
            switch (t.which) {
                case 38:
                    t.preventDefault(), this.jumpkey = !1, this.jumped = !1;
                    break;
                case 37:
                    t.preventDefault(), this.leftkey = !1;
                    break;
                case 39:
                    t.preventDefault(), this.rightkey = !1
            }
        }, c.onWindowBlur = function() {
            this.leftkey = !1, this.rightkey = !1, this.jumpkey = !1
        }, c.getGDir = function() {
            return this.g < 0 ? -1 : 1
        }, c.isOnFloor = function() {
            var t, e, i, s = null,
                n = null,
                r = this.inst.x,
                o = this.inst.y;
            if (this.inst.x += this.downx, this.inst.y += this.downy, this.inst.set_bbox_changed(), this.lastFloorObject && this.runtime.testOverlap(this.inst, this.lastFloorObject)) return this.inst.x = r, this.inst.y = o, this.inst.set_bbox_changed(), this.lastFloorObject;
            if (s = this.runtime.testOverlapSolid(this.inst), s || 0 !== this.fallthrough || (n = this.runtime.testOverlapJumpThru(this.inst, !0)), this.inst.x = r, this.inst.y = o, this.inst.set_bbox_changed(), s) return this.runtime.testOverlap(this.inst, s) ? null : (this.floorIsJumpthru = !1, s);
            if (n && n.length) {
                for (t = 0, i = 0, e = n.length; e > t; t++) n[i] = n[t], this.runtime.testOverlap(this.inst, n[t]) || i++;
                if (i >= 1) return this.floorIsJumpthru = !0, n[0]
            }
            return null
        }, c.tick = function() {}, c.posttick = function() {
            var t, e, i, s, n, c, l, u, p, d, f = this.runtime.getDt(this.inst);
            this.jumpkey || this.simjump || (this.jumped = !1);
            var g = this.leftkey || this.simleft,
                y = this.rightkey || this.simright,
                m = this.jumpkey || this.simjump,
                _ = m && !this.jumped;
            if (this.simleft = !1, this.simright = !1, this.simjump = !1, this.enabled) {
                this.ignoreInput && (g = !1, y = !1, m = !1, _ = !1), m || (this.sustainTime = 0);
                var v = this.lastFloorObject,
                    b = !1;
                this.firstTick && ((this.runtime.testOverlapSolid(this.inst) || this.runtime.testOverlapJumpThru(this.inst)) && this.runtime.pushOutSolid(this.inst, -this.downx, -this.downy, 4, !0), this.firstTick = !1), !v || 0 !== this.dy || v.y === this.lastFloorY && v.x === this.lastFloorX || (t = v.x - this.lastFloorX, e = v.y - this.lastFloorY, this.inst.x += t, this.inst.y += e, this.inst.set_bbox_changed(), this.lastFloorX = v.x, this.lastFloorY = v.y, b = !0, this.runtime.testOverlapSolid(this.inst) && this.runtime.pushOutSolid(this.inst, -t, -e, 2.5 * Math.sqrt(t * t + e * e)));
                var w = this.isOnFloor(),
                    x = this.runtime.testOverlapSolid(this.inst);
                if (x)
                    if (this.inst.extra.inputPredicted) this.runtime.pushOutSolid(this.inst, -this.downx, -this.downy, 10, !1);
                    else {
                        if (!this.runtime.pushOutSolidNearest(this.inst, Math.max(this.inst.width, this.inst.height) / 2)) return;
                        this.runtime.registerCollision(this.inst, x)
                    }
                w ? (this.doubleJumped = !1, this.canDoubleJump = !1, this.dy > 0 && (this.wasOnFloor || (this.runtime.pushInFractional(this.inst, -this.downx, -this.downy, w, 16), this.wasOnFloor = !0), this.dy = 0), v != w ? (this.lastFloorObject = w, this.lastFloorX = w.x, this.lastFloorY = w.y, this.runtime.registerCollision(this.inst, w)) : b && (x = this.runtime.testOverlapSolid(this.inst), x && (this.runtime.registerCollision(this.inst, x), 0 !== t && (t > 0 ? this.runtime.pushOutSolid(this.inst, -this.rightx, -this.righty) : this.runtime.pushOutSolid(this.inst, this.rightx, this.righty)), this.runtime.pushOutSolid(this.inst, -this.downx, -this.downy)))) : m || (this.canDoubleJump = !0), (w && _ || !w && this.enableDoubleJump && m && this.canDoubleJump && !this.doubleJumped) && (p = this.inst.x, d = this.inst.y, this.inst.x -= this.downx, this.inst.y -= this.downy, this.inst.set_bbox_changed(), this.runtime.testOverlapSolid(this.inst) ? _ = !1 : (this.sustainTime = this.jumpSustain, this.runtime.trigger(cr.behaviors.Platform.prototype.cnds.OnJump, this.inst), this.animMode = a, this.dy = -this.jumpStrength, _ = !0, w ? this.jumped = !0 : this.doubleJumped = !0), this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed()), w || (m && this.sustainTime > 0 ? (this.dy = -this.jumpStrength, this.sustainTime -= f) : (this.lastFloorObject = null, this.dy += this.g * f, this.dy > this.maxFall && (this.dy = this.maxFall)), _ && (this.jumped = !0)), this.wasOnFloor = !!w, g == y && (this.dx < 0 ? (this.dx += this.dec * f, this.dx > 0 && (this.dx = 0)) : this.dx > 0 && (this.dx -= this.dec * f, this.dx < 0 && (this.dx = 0))), g && !y && (this.dx > 0 ? this.dx -= (this.acc + this.dec) * f : this.dx -= this.acc * f), y && !g && (this.dx < 0 ? this.dx += (this.acc + this.dec) * f : this.dx += this.acc * f), this.dx > this.maxspeed ? this.dx = this.maxspeed : this.dx < -this.maxspeed && (this.dx = -this.maxspeed);
                var S = !1;
                if (0 !== this.dx) {
                    p = this.inst.x, d = this.inst.y, t = this.dx * f * this.rightx, e = this.dx * f * this.righty, this.inst.x += this.rightx * (this.dx > 1 ? 1 : -1) - this.downx, this.inst.y += this.righty * (this.dx > 1 ? 1 : -1) - this.downy, this.inst.set_bbox_changed();
                    var T = !1,
                        O = this.runtime.testOverlapSolid(this.inst);
                    if (this.inst.x = p + t, this.inst.y = d + e, this.inst.set_bbox_changed(), i = this.runtime.testOverlapSolid(this.inst), !i && w && (i = this.runtime.testOverlapJumpThru(this.inst), i && (this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed(), this.runtime.testOverlap(this.inst, i) ? (i = null, T = !1) : T = !0, this.inst.x = p + t, this.inst.y = d + e, this.inst.set_bbox_changed())), i) {
                        var A = Math.abs(this.dx * f) + 2;
                        O || !this.runtime.pushOutSolid(this.inst, -this.downx, -this.downy, A, T, i) ? (this.runtime.registerCollision(this.inst, i), A = Math.max(Math.abs(this.dx * f * 2.5), 30), this.runtime.pushOutSolid(this.inst, this.rightx * (this.dx < 0 ? 1 : -1), this.righty * (this.dx < 0 ? 1 : -1), A, !1) ? !w || T || this.floorIsJumpthru || (p = this.inst.x, d = this.inst.y, this.inst.x += this.downx, this.inst.y += this.downy, this.runtime.testOverlapSolid(this.inst) ? this.runtime.pushOutSolid(this.inst, -this.downx, -this.downy, 3, !1) || (this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed()) : (this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed())) : (this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed()), T || (this.dx = 0)) : !O && !_ && Math.abs(this.dy) < Math.abs(this.jumpStrength / 4) && (this.dy = 0, w || (S = !0))
                    } else {
                        var C = this.isOnFloor();
                        w && !C ? (s = Math.ceil(Math.abs(this.dx * f)) + 2, p = this.inst.x, d = this.inst.y, this.inst.x += this.downx * s, this.inst.y += this.downy * s, this.inst.set_bbox_changed(), this.runtime.testOverlapSolid(this.inst) || this.runtime.testOverlapJumpThru(this.inst) ? this.runtime.pushOutSolid(this.inst, -this.downx, -this.downy, s + 2, !0) : (this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed())) : C && 0 === this.dy && this.runtime.pushInFractional(this.inst, -this.downx, -this.downy, C, 16)
                    }
                }
                if (0 !== this.dy) {
                    p = this.inst.x, d = this.inst.y, this.inst.x += this.dy * f * this.downx, this.inst.y += this.dy * f * this.downy;
                    var k = this.inst.x,
                        E = this.inst.y;
                    this.inst.set_bbox_changed(), x = this.runtime.testOverlapSolid(this.inst);
                    var P = !1;
                    if (!x && this.dy > 0 && !w) {
                        if (n = this.fallthrough > 0 ? null : this.runtime.testOverlapJumpThru(this.inst, !0), n && n.length) {
                            if (this.wasOverJumpthru) {
                                for (this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed(), c = 0, u = 0, l = n.length; l > c; c++) n[u] = n[c], this.runtime.testOverlap(this.inst, n[c]) || u++;
                                n.length = u, this.inst.x = k, this.inst.y = E, this.inst.set_bbox_changed()
                            }
                            n.length >= 1 && (x = n[0])
                        }
                        P = !!x
                    }
                    if (x) {
                        this.runtime.registerCollision(this.inst, x), this.sustainTime = 0;
                        var A = P ? Math.abs(this.dy * f * 2.5 + 10) : Math.max(Math.abs(this.dy * f * 2.5 + 10), 30);
                        this.runtime.pushOutSolid(this.inst, this.downx * (this.dy < 0 ? 1 : -1), this.downy * (this.dy < 0 ? 1 : -1), A, P, x) ? (this.lastFloorObject = x, this.lastFloorX = x.x, this.lastFloorY = x.y, this.floorIsJumpthru = P, P && (S = !0), this.dy = 0) : (this.inst.x = p, this.inst.y = d, this.inst.set_bbox_changed(), this.wasOnFloor = !0, P || (this.dy = 0))
                    }
                }
                this.animMode !== h && this.dy > 0 && !w && (this.runtime.trigger(cr.behaviors.Platform.prototype.cnds.OnFall, this.inst), this.animMode = h), (w || S) && (this.animMode === h || S || _ && 0 === this.dy ? (this.runtime.trigger(cr.behaviors.Platform.prototype.cnds.OnLand, this.inst), 0 === this.dx && 0 === this.dy ? this.animMode = r : this.animMode = o) : (this.animMode !== r && 0 === this.dx && 0 === this.dy && (this.runtime.trigger(cr.behaviors.Platform.prototype.cnds.OnStop, this.inst), this.animMode = r), this.animMode === o || 0 === this.dx && 0 === this.dy || _ || (this.runtime.trigger(cr.behaviors.Platform.prototype.cnds.OnMove, this.inst), this.animMode = o))), this.fallthrough > 0 && this.fallthrough--, this.wasOverJumpthru = this.runtime.testOverlapJumpThru(this.inst)
            }
        }, t.prototype.IsMoving = function() {
            return 0 !== this.dx || 0 !== this.dy
        }, t.prototype.CompareSpeed = function(t, e) {
            var i = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
            return cr.do_cmp(i, t, e)
        }, t.prototype.IsOnFloor = function() {
            if (0 !== this.dy) return !1;
            var t, e, i, s = null,
                n = null,
                r = this.inst.x,
                o = this.inst.y;
            if (this.inst.x += this.downx, this.inst.y += this.downy, this.inst.set_bbox_changed(), s = this.runtime.testOverlapSolid(this.inst), s || 0 !== this.fallthrough || (n = this.runtime.testOverlapJumpThru(this.inst, !0)), this.inst.x = r, this.inst.y = o, this.inst.set_bbox_changed(), s) return !this.runtime.testOverlap(this.inst, s);
            if (n && n.length) {
                for (t = 0, i = 0, e = n.length; e > t; t++) n[i] = n[t], this.runtime.testOverlap(this.inst, n[t]) || i++;
                if (i >= 1) return !0
            }
            return !1
        }, t.prototype.IsByWall = function(t) {
            var e = !1,
                i = this.inst.x,
                s = this.inst.y;
            return this.inst.x -= 3 * this.downx, this.inst.y -= 3 * this.downy, this.inst.set_bbox_changed(), this.runtime.testOverlapSolid(this.inst) ? (this.inst.x = i, this.inst.y = s, this.inst.set_bbox_changed(), !1) : (0 === t ? (this.inst.x -= 2 * this.rightx, this.inst.y -= 2 * this.righty) : (this.inst.x += 2 * this.rightx, this.inst.y += 2 * this.righty), this.inst.set_bbox_changed(), e = this.runtime.testOverlapSolid(this.inst), this.inst.x = i, this.inst.y = s, this.inst.set_bbox_changed(), e)
        }, t.prototype.IsJumping = function() {
            return this.dy < 0
        }, t.prototype.IsFalling = function() {
            return this.dy > 0
        }, t.prototype.OnJump = function() {
            return !0
        }, t.prototype.OnFall = function() {
            return !0
        }, t.prototype.OnStop = function() {
            return !0
        }, t.prototype.OnMove = function() {
            return !0
        }, t.prototype.OnLand = function() {
            return !0
        }, t.prototype.IsDoubleJumpEnabled = function() {
            return this.enableDoubleJump
        }, s.cnds = new t, e.prototype.SetIgnoreInput = function(t) {
            this.ignoreInput = t
        }, e.prototype.SetMaxSpeed = function(t) {
            this.maxspeed = t, this.maxspeed < 0 && (this.maxspeed = 0)
        }, e.prototype.SetAcceleration = function(t) {
            this.acc = t, this.acc < 0 && (this.acc = 0)
        }, e.prototype.SetDeceleration = function(t) {
            this.dec = t, this.dec < 0 && (this.dec = 0)
        }, e.prototype.SetJumpStrength = function(t) {
            this.jumpStrength = t, this.jumpStrength < 0 && (this.jumpStrength = 0)
        }, e.prototype.SetGravity = function(t) {
            this.g1 !== t && (this.g = t, this.updateGravity(), this.runtime.testOverlapSolid(this.inst) && (this.runtime.pushOutSolid(this.inst, this.downx, this.downy, 10), this.inst.x += 2 * this.downx, this.inst.y += 2 * this.downy, this.inst.set_bbox_changed()), this.lastFloorObject = null)
        }, e.prototype.SetMaxFallSpeed = function(t) {
            this.maxFall = t, this.maxFall < 0 && (this.maxFall = 0)
        }, e.prototype.SimulateControl = function(t) {
            switch (t) {
                case 0:
                    this.simleft = !0;
                    break;
                case 1:
                    this.simright = !0;
                    break;
                case 2:
                    this.simjump = !0
            }
        }, e.prototype.SetVectorX = function(t) {
            this.dx = t
        }, e.prototype.SetVectorY = function(t) {
            this.dy = t
        }, e.prototype.SetGravityAngle = function(t) {
            t = cr.to_radians(t), t = cr.clamp_angle(t), this.ga !== t && (this.ga = t, this.updateGravity(), this.lastFloorObject = null)
        }, e.prototype.SetEnabled = function(t) {
            this.enabled !== (1 === t) && (this.enabled = 1 === t, this.enabled || (this.lastFloorObject = null))
        }, e.prototype.FallThrough = function() {
            var t = this.inst.x,
                e = this.inst.y;
            this.inst.x += this.downx, this.inst.y += this.downy, this.inst.set_bbox_changed();
            var i = this.runtime.testOverlapJumpThru(this.inst, !1);
            this.inst.x = t, this.inst.y = e, this.inst.set_bbox_changed(), i && (this.fallthrough = 3, this.lastFloorObject = null)
        }, e.prototype.SetDoubleJumpEnabled = function(t) {
            this.enableDoubleJump = 0 !== t
        }, e.prototype.SetJumpSustain = function(t) {
            this.jumpSustain = t / 1e3
        }, s.acts = new e, i.prototype.Speed = function(t) {
            t.set_float(Math.sqrt(this.dx * this.dx + this.dy * this.dy))
        }, i.prototype.MaxSpeed = function(t) {
            t.set_float(this.maxspeed)
        }, i.prototype.Acceleration = function(t) {
            t.set_float(this.acc)
        }, i.prototype.Deceleration = function(t) {
            t.set_float(this.dec)
        }, i.prototype.JumpStrength = function(t) {
            t.set_float(this.jumpStrength)
        }, i.prototype.Gravity = function(t) {
            t.set_float(this.g)
        }, i.prototype.GravityAngle = function(t) {
            t.set_float(cr.to_degrees(this.ga))
        }, i.prototype.MaxFallSpeed = function(t) {
            t.set_float(this.maxFall)
        }, i.prototype.MovingAngle = function(t) {
            t.set_float(cr.to_degrees(Math.atan2(this.dy, this.dx)))
        }, i.prototype.VectorX = function(t) {
            t.set_float(this.dx)
        }, i.prototype.VectorY = function(t) {
            t.set_float(this.dy)
        }, i.prototype.JumpSustain = function(t) {
            t.set_float(1e3 * this.jumpSustain)
        }, s.exps = new i
    }(), cr.behaviors.Rotate = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.behaviors.Rotate.prototype;
        s.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var n = s.Type.prototype;
        n.onCreate = function() {}, s.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var r = s.Instance.prototype;
        r.onCreate = function() {
            this.speed = cr.to_radians(this.properties[0]), this.acc = cr.to_radians(this.properties[1])
        }, r.saveToJSON = function() {
            return {
                speed: this.speed,
                acc: this.acc
            }
        }, r.loadFromJSON = function(t) {
            this.speed = t.speed, this.acc = t.acc
        }, r.tick = function() {
            var t = this.runtime.getDt(this.inst);
            0 !== t && (0 !== this.acc && (this.speed += this.acc * t), 0 !== this.speed && (this.inst.angle = cr.clamp_angle(this.inst.angle + this.speed * t), this.inst.set_bbox_changed()))
        }, s.cnds = new t, e.prototype.SetSpeed = function(t) {
            this.speed = cr.to_radians(t)
        }, e.prototype.SetAcceleration = function(t) {
            this.acc = cr.to_radians(t)
        }, s.acts = new e, i.prototype.Speed = function(t) {
            t.set_float(cr.to_degrees(this.speed))
        }, i.prototype.Acceleration = function(t) {
            t.set_float(cr.to_degrees(this.acc))
        }, s.exps = new i
    }(), cr.behaviors.Sin = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.behaviors.Sin.prototype;
        s.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var n = s.Type.prototype;
        n.onCreate = function() {}, s.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime, this.i = 0
        };
        var r = s.Instance.prototype,
            o = 2 * Math.PI,
            a = Math.PI / 2,
            h = 3 * Math.PI / 2;
        r.onCreate = function() {
            this.active = 1 === this.properties[0], this.movement = this.properties[1], this.wave = this.properties[2], this.period = this.properties[3], this.period += Math.random() * this.properties[4], 0 === this.period ? this.i = 0 : (this.i = this.properties[5] / this.period * o, this.i += Math.random() * this.properties[6] / this.period * o), this.mag = this.properties[7], this.mag += Math.random() * this.properties[8], this.initialValue = 0, this.initialValue2 = 0, this.ratio = 0, this.init()
        }, r.saveToJSON = function() {
            return {
                i: this.i,
                a: this.active,
                mv: this.movement,
                w: this.wave,
                p: this.period,
                mag: this.mag,
                iv: this.initialValue,
                iv2: this.initialValue2,
                r: this.ratio,
                lkv: this.lastKnownValue,
                lkv2: this.lastKnownValue2
            }
        }, r.loadFromJSON = function(t) {
            this.i = t.i, this.active = t.a, this.movement = t.mv, this.wave = t.w, this.period = t.p, this.mag = t.mag, this.initialValue = t.iv, this.initialValue2 = t.iv2 || 0, this.ratio = t.r, this.lastKnownValue = t.lkv, this.lastKnownValue2 = t.lkv2 || 0
        }, r.init = function() {
            switch (this.movement) {
                case 0:
                    this.initialValue = this.inst.x;
                    break;
                case 1:
                    this.initialValue = this.inst.y;
                    break;
                case 2:
                    this.initialValue = this.inst.width, this.ratio = this.inst.height / this.inst.width;
                    break;
                case 3:
                    this.initialValue = this.inst.width;
                    break;
                case 4:
                    this.initialValue = this.inst.height;
                    break;
                case 5:
                    this.initialValue = this.inst.angle, this.mag = cr.to_radians(this.mag);
                    break;
                case 6:
                    this.initialValue = this.inst.opacity;
                    break;
                case 7:
                    this.initialValue = 0;
                    break;
                case 8:
                    this.initialValue = this.inst.x, this.initialValue2 = this.inst.y
            }
            this.lastKnownValue = this.initialValue, this.lastKnownValue2 = this.initialValue2
        }, r.waveFunc = function(t) {
            switch (t %= o, this.wave) {
                case 0:
                    return Math.sin(t);
                case 1:
                    return a >= t ? t / a : h >= t ? 1 - 2 * (t - a) / Math.PI : (t - h) / a - 1;
                case 2:
                    return 2 * t / o - 1;
                case 3:
                    return -2 * t / o + 1;
                case 4:
                    return t < Math.PI ? -1 : 1
            }
            return 0
        }, r.tick = function() {
            var t = this.runtime.getDt(this.inst);
            if (this.active && 0 !== t) {
                switch (0 === this.period ? this.i = 0 : (this.i += t / this.period * o, this.i = this.i % o), this.movement) {
                    case 0:
                        this.inst.x !== this.lastKnownValue && (this.initialValue += this.inst.x - this.lastKnownValue), this.inst.x = this.initialValue + this.waveFunc(this.i) * this.mag, this.lastKnownValue = this.inst.x;
                        break;
                    case 1:
                        this.inst.y !== this.lastKnownValue && (this.initialValue += this.inst.y - this.lastKnownValue), this.inst.y = this.initialValue + this.waveFunc(this.i) * this.mag, this.lastKnownValue = this.inst.y;
                        break;
                    case 2:
                        this.inst.width = this.initialValue + this.waveFunc(this.i) * this.mag, this.inst.height = this.inst.width * this.ratio;
                        break;
                    case 3:
                        this.inst.width = this.initialValue + this.waveFunc(this.i) * this.mag;
                        break;
                    case 4:
                        this.inst.height = this.initialValue + this.waveFunc(this.i) * this.mag;
                        break;
                    case 5:
                        this.inst.angle !== this.lastKnownValue && (this.initialValue = cr.clamp_angle(this.initialValue + (this.inst.angle - this.lastKnownValue))), this.inst.angle = cr.clamp_angle(this.initialValue + this.waveFunc(this.i) * this.mag), this.lastKnownValue = this.inst.angle;
                        break;
                    case 6:
                        this.inst.opacity = this.initialValue + this.waveFunc(this.i) * this.mag / 100, this.inst.opacity < 0 ? this.inst.opacity = 0 : this.inst.opacity > 1 && (this.inst.opacity = 1);
                        break;
                    case 8:
                        this.inst.x !== this.lastKnownValue && (this.initialValue += this.inst.x - this.lastKnownValue), this.inst.y !== this.lastKnownValue2 && (this.initialValue2 += this.inst.y - this.lastKnownValue2), this.inst.x = this.initialValue + Math.cos(this.inst.angle) * this.waveFunc(this.i) * this.mag, this.inst.y = this.initialValue2 + Math.sin(this.inst.angle) * this.waveFunc(this.i) * this.mag, this.lastKnownValue = this.inst.x, this.lastKnownValue2 = this.inst.y
                }
                this.inst.set_bbox_changed()
            }
        }, r.onSpriteFrameChanged = function(t, e) {
            switch (this.movement) {
                case 2:
                    this.initialValue *= e.width / t.width, this.ratio = e.height / e.width;
                    break;
                case 3:
                    this.initialValue *= e.width / t.width;
                    break;
                case 4:
                    this.initialValue *= e.height / t.height
            }
        }, t.prototype.IsActive = function() {
            return this.active
        }, t.prototype.CompareMovement = function(t) {
            return this.movement === t
        }, t.prototype.ComparePeriod = function(t, e) {
            return cr.do_cmp(this.period, t, e)
        }, t.prototype.CompareMagnitude = function(t, e) {
            return 5 === this.movement ? cr.do_cmp(this.mag, t, cr.to_radians(e)) : cr.do_cmp(this.mag, t, e)
        }, t.prototype.CompareWave = function(t) {
            return this.wave === t
        }, s.cnds = new t, e.prototype.SetActive = function(t) {
            this.active = 1 === t
        }, e.prototype.SetPeriod = function(t) {
            this.period = t
        }, e.prototype.SetMagnitude = function(t) {
            this.mag = t, 5 === this.movement && (this.mag = cr.to_radians(this.mag))
        }, e.prototype.SetMovement = function(t) {
            5 === this.movement && (this.mag = cr.to_degrees(this.mag)), this.movement = t, this.init()
        }, e.prototype.SetWave = function(t) {
            this.wave = t
        }, e.prototype.SetPhase = function(t) {
            this.i = t * o % o
        }, e.prototype.UpdateInitialState = function() {
            this.init()
        }, s.acts = new e, i.prototype.CyclePosition = function(t) {
            t.set_float(this.i / o)
        }, i.prototype.Period = function(t) {
            t.set_float(this.period)
        }, i.prototype.Magnitude = function(t) {
            5 === this.movement ? t.set_float(cr.to_degrees(this.mag)) : t.set_float(this.mag)
        }, i.prototype.Value = function(t) {
            t.set_float(this.waveFunc(this.i) * this.mag)
        }, s.exps = new i
    }(), cr.behaviors.custom = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}

        function i() {}
        var s = cr.behaviors.custom.prototype;
        s.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var n = s.Type.prototype;
        n.onCreate = function() {}, s.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime, this.dx = 0, this.dy = 0, this.cancelStep = 0
        };
        var r = s.Instance.prototype;
        r.onCreate = function() {
            this.stepMode = this.properties[0], this.pxPerStep = this.properties[1], this.enabled = 0 !== this.properties[2]
        }, r.saveToJSON = function() {
            return {
                dx: this.dx,
                dy: this.dy,
                cancelStep: this.cancelStep,
                enabled: this.enabled,
                stepMode: this.stepMode,
                pxPerStep: this.pxPerStep
            }
        }, r.loadFromJSON = function(t) {
            this.dx = t.dx, this.dy = t.dy, this.cancelStep = t.cancelStep, this.enabled = t.enabled, this.stepMode = t.stepMode, this.pxPerStep = t.pxPerStep
        }, r.getSpeed = function() {
            return Math.sqrt(this.dx * this.dx + this.dy * this.dy)
        }, r.getAngle = function() {
            return Math.atan2(this.dy, this.dx)
        }, r.step = function(t, e, i) {
            if (0 !== t || 0 !== e) {
                var s, n = this.inst.x,
                    r = this.inst.y,
                    o = Math.round(Math.sqrt(t * t + e * e) / this.pxPerStep);
                0 === o && (o = 1);
                var a;
                for (a = 1; o >= a; a++) {
                    if (s = a / o, this.inst.x = n + t * s, this.inst.y = r + e * s, this.inst.set_bbox_changed(), this.runtime.trigger(i, this.inst), 1 === this.cancelStep) return a--, s = a / o, this.inst.x = n + t * s, this.inst.y = r + e * s, void this.inst.set_bbox_changed();
                    if (2 === this.cancelStep) return
                }
            }
        }, r.tick = function() {
            var t = this.runtime.getDt(this.inst),
                e = this.dx * t,
                i = this.dy * t;
            0 === this.dx && 0 === this.dy || !this.enabled || (this.cancelStep = 0, 0 === this.stepMode ? (this.inst.x += e, this.inst.y += i) : 1 === this.stepMode ? this.step(e, i, cr.behaviors.custom.prototype.cnds.OnCMStep) : 2 === this.stepMode ? (this.step(e, 0, cr.behaviors.custom.prototype.cnds.OnCMHorizStep), this.cancelStep = 0, this.step(0, i, cr.behaviors.custom.prototype.cnds.OnCMVertStep)) : 3 === this.stepMode && (this.step(0, i, cr.behaviors.custom.prototype.cnds.OnCMVertStep), this.cancelStep = 0, this.step(e, 0, cr.behaviors.custom.prototype.cnds.OnCMHorizStep)), this.inst.set_bbox_changed())
        }, t.prototype.IsMoving = function() {
            return 0 != this.dx || 0 != this.dy
        }, t.prototype.CompareSpeed = function(t, e, i) {
            var s;
            switch (t) {
                case 0:
                    s = this.getSpeed();
                    break;
                case 1:
                    s = this.dx;
                    break;
                case 2:
                    s = this.dy
            }
            return cr.do_cmp(s, e, i)
        }, t.prototype.OnCMStep = function() {
            return !0
        }, t.prototype.OnCMHorizStep = function() {
            return !0
        }, t.prototype.OnCMVertStep = function() {
            return !0
        }, s.cnds = new t, e.prototype.Stop = function() {
            this.dx = 0, this.dy = 0
        }, e.prototype.Reverse = function(t) {
            switch (t) {
                case 0:
                    this.dx *= -1, this.dy *= -1;
                    break;
                case 1:
                    this.dx *= -1;
                    break;
                case 2:
                    this.dy *= -1
            }
        }, e.prototype.SetSpeed = function(t, e) {
            var i;
            switch (t) {
                case 0:
                    i = this.getAngle(), this.dx = Math.cos(i) * e, this.dy = Math.sin(i) * e;
                    break;
                case 1:
                    this.dx = e;
                    break;
                case 2:
                    this.dy = e
            }
        }, e.prototype.Accelerate = function(t, e) {
            var i, s = this.runtime.getDt(this.inst),
                n = e * s;
            switch (t) {
                case 0:
                    i = this.getAngle(), this.dx += Math.cos(i) * n, this.dy += Math.sin(i) * n;
                    break;
                case 1:
                    this.dx += n;
                    break;
                case 2:
                    this.dy += n
            }
        }, e.prototype.AccelerateAngle = function(t, e) {
            var i = this.runtime.getDt(this.inst),
                s = t * i,
                n = cr.to_radians(e);
            this.dx += Math.cos(n) * s, this.dy += Math.sin(n) * s
        }, e.prototype.AcceleratePos = function(t, e, i) {
            var s = this.runtime.getDt(this.inst),
                n = t * s,
                r = Math.atan2(i - this.inst.y, e - this.inst.x);
            this.dx += Math.cos(r) * n, this.dy += Math.sin(r) * n
        }, e.prototype.SetAngleOfMotion = function(t) {
            var e = cr.to_radians(t),
                i = this.getSpeed();
            this.dx = Math.cos(e) * i, this.dy = Math.sin(e) * i
        }, e.prototype.RotateAngleOfMotionClockwise = function(t) {
            var e = this.getAngle() + cr.to_radians(t),
                i = this.getSpeed();
            this.dx = Math.cos(e) * i, this.dy = Math.sin(e) * i
        }, e.prototype.RotateAngleOfMotionCounterClockwise = function(t) {
            var e = this.getAngle() - cr.to_radians(t),
                i = this.getSpeed();
            this.dx = Math.cos(e) * i, this.dy = Math.sin(e) * i
        }, e.prototype.StopStepping = function(t) {
            this.cancelStep = t + 1
        }, e.prototype.PushOutSolid = function(t) {
            var e, i, s;
            switch (t) {
                case 0:
                    e = this.getAngle(), i = Math.cos(e), s = Math.sin(e), this.runtime.pushOutSolid(this.inst, -i, -s, Math.max(3 * this.getSpeed(), 100));
                    break;
                case 1:
                    this.runtime.pushOutSolidNearest(this.inst);
                    break;
                case 2:
                    this.runtime.pushOutSolid(this.inst, 0, -1, Math.max(3 * Math.abs(this.dy), 100));
                    break;
                case 3:
                    this.runtime.pushOutSolid(this.inst, 0, 1, Math.max(3 * Math.abs(this.dy), 100));
                    break;
                case 4:
                    this.runtime.pushOutSolid(this.inst, -1, 0, Math.max(3 * Math.abs(this.dx), 100));
                    break;
                case 5:
                    this.runtime.pushOutSolid(this.inst, 1, 0, Math.max(3 * Math.abs(this.dx), 100))
            }
        }, e.prototype.PushOutSolidAngle = function(t) {
            t = cr.to_radians(t);
            var e = Math.cos(t),
                i = Math.sin(t);
            this.runtime.pushOutSolid(this.inst, e, i, Math.max(3 * this.getSpeed(), 100))
        }, e.prototype.SetEnabled = function(t) {
            this.enabled = 1 === t
        }, s.acts = new e, i.prototype.Speed = function(t) {
            t.set_float(this.getSpeed())
        }, i.prototype.MovingAngle = function(t) {
            t.set_float(cr.to_degrees(this.getAngle()))
        }, i.prototype.dx = function(t) {
            t.set_float(this.dx)
        }, i.prototype.dy = function(t) {
            t.set_float(this.dy)
        }, s.exps = new i
    }(), cr.behaviors.scrollto = function(t) {
        this.runtime = t, this.shakeMag = 0, this.shakeStart = 0, this.shakeEnd = 0, this.shakeMode = 0
    },
    function() {
        function t(t) {
            var e, i, s;
            for (e = 0, i = t.behavior_insts.length; i > e; ++e)
                if (s = t.behavior_insts[e], s.behavior instanceof cr.behaviors.scrollto) return s;
            return null
        }

        function e() {}
        var i = cr.behaviors.scrollto.prototype;
        i.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var s = i.Type.prototype;
        s.onCreate = function() {}, i.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var n = i.Instance.prototype;
        n.onCreate = function() {
            this.enabled = 0 !== this.properties[0]
        }, n.saveToJSON = function() {
            return {
                smg: this.behavior.shakeMag,
                ss: this.behavior.shakeStart,
                se: this.behavior.shakeEnd,
                smd: this.behavior.shakeMode
            }
        }, n.loadFromJSON = function(t) {
            this.behavior.shakeMag = t.smg, this.behavior.shakeStart = t.ss, this.behavior.shakeEnd = t.se, this.behavior.shakeMode = t.smd
        }, n.tick = function() {}, n.tick2 = function() {
            if (this.enabled) {
                var e, i, s, n = this.behavior.my_instances.valuesRef(),
                    r = 0,
                    o = 0,
                    a = 0;
                for (e = 0, i = n.length; i > e; e++) s = t(n[e]), s && s.enabled && (r += n[e].x, o += n[e].y, ++a);
                var h = this.inst.layer.layout,
                    c = this.runtime.kahanTime.sum,
                    l = 0,
                    u = 0;
                if (c >= this.behavior.shakeStart && c < this.behavior.shakeEnd) {
                    var p = this.behavior.shakeMag * Math.min(this.runtime.timescale, 1);
                    0 === this.behavior.shakeMode && (p *= 1 - (c - this.behavior.shakeStart) / (this.behavior.shakeEnd - this.behavior.shakeStart));
                    var d = Math.random() * Math.PI * 2,
                        f = Math.random() * p;
                    l = Math.cos(d) * f, u = Math.sin(d) * f
                }
                h.scrollToX(r / a + l), h.scrollToY(o / a + u)
            }
        }, e.prototype.Shake = function(t, e, i) {
            this.behavior.shakeMag = t, this.behavior.shakeStart = this.runtime.kahanTime.sum, this.behavior.shakeEnd = this.behavior.shakeStart + e, this.behavior.shakeMode = i
        }, e.prototype.SetEnabled = function(t) {
            this.enabled = 0 !== t
        }, i.acts = new e
    }(), cr.behaviors.solid = function(t) {
        this.runtime = t
    },
    function() {
        function t() {}

        function e() {}
        var i = cr.behaviors.solid.prototype;
        i.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        };
        var s = i.Type.prototype;
        s.onCreate = function() {}, i.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var n = i.Instance.prototype;
        n.onCreate = function() {
            this.inst.extra.solidEnabled = 0 !== this.properties[0]
        }, n.tick = function() {}, t.prototype.IsEnabled = function() {
            return this.inst.extra.solidEnabled
        }, i.cnds = new t, e.prototype.SetEnabled = function(t) {
            this.inst.extra.solidEnabled = !!t
        }, i.acts = new e
    }(), cr.getObjectRefTable = function() {
        return [cr.plugins_.Audio, cr.plugins_.Arr, cr.plugins_.Browser, cr.plugins_.Famobi, cr.plugins_.Keyboard, cr.plugins_.LocalStorage, cr.plugins_.Particles, cr.plugins_.Sprite, cr.plugins_.Spritefont2, cr.plugins_.TiledBg, cr.plugins_.Touch, cr.behaviors.Sin, cr.behaviors.custom, cr.behaviors.Rotate, cr.behaviors.Platform, cr.behaviors.solid, cr.behaviors.Pin, cr.behaviors.Fade, cr.behaviors.Bullet, cr.behaviors.Flash, cr.behaviors.Anchor, cr.behaviors.scrollto, cr.behaviors.DragnDrop, cr.system_object.prototype.cnds.OnLayoutStart, cr.plugins_.Sprite.prototype.acts.SetInstanceVar, cr.system_object.prototype.acts.CreateObject, cr.plugins_.Sprite.prototype.acts.SetAngle, cr.behaviors.custom.prototype.acts.SetSpeed, cr.behaviors.Rotate.prototype.acts.SetSpeed, cr.system_object.prototype.cnds.CompareVar, cr.plugins_.Audio.prototype.acts.Play, cr.system_object.prototype.cnds.Else, cr.plugins_.Sprite.prototype.acts.SetAnim, cr.plugins_.TiledBg.prototype.acts.Destroy, cr.plugins_.TiledBg.prototype.exps.LayerName, cr.plugins_.TiledBg.prototype.exps.X, cr.plugins_.TiledBg.prototype.exps.Y, cr.plugins_.TiledBg.prototype.acts.ZMoveToObject, cr.plugins_.TiledBg.prototype.acts.SetSize, cr.plugins_.TiledBg.prototype.exps.Width, cr.plugins_.TiledBg.prototype.exps.Height, cr.plugins_.Sprite.prototype.acts.Destroy, cr.plugins_.TiledBg.prototype.acts.SetX, cr.plugins_.Sprite.prototype.acts.SetVisible, cr.system_object.prototype.acts.Wait, cr.plugins_.Sprite.prototype.acts.SetBoolInstanceVar, cr.plugins_.Spritefont2.prototype.cnds.CompareInstanceVar, cr.plugins_.Spritefont2.prototype.acts.SetText, cr.plugins_.Audio.prototype.cnds.IsTagPlaying, cr.plugins_.Audio.prototype.acts.SetVolume, cr.plugins_.Touch.prototype.cnds.OnTouchObject, cr.system_object.prototype.acts.GoToLayout, cr.system_object.prototype.acts.SetVar, cr.system_object.prototype.acts.SetTimescale, cr.system_object.prototype.acts.RestartLayout, cr.plugins_.Sprite.prototype.cnds.IsBoolInstanceVarSet, cr.plugins_.Sprite.prototype.acts.MoveToTop, cr.system_object.prototype.exps.viewportleft, cr.system_object.prototype.exps.viewporttop, cr.system_object.prototype.exps.windowwidth, cr.system_object.prototype.exps.windowheight, cr.plugins_.Sprite.prototype.acts.SetPos, cr.plugins_.Sprite.prototype.acts.SetSize, cr.behaviors.Sin.prototype.acts.SetActive, cr.system_object.prototype.acts.SetObjectTimescale, cr.plugins_.Sprite.prototype.cnds.CompareInstanceVar, cr.system_object.prototype.cnds.Compare, cr.plugins_.Sprite.prototype.acts.SetAnimFrame, cr.plugins_.Famobi.prototype.acts.GameOver, cr.plugins_.Sprite.prototype.acts.SetScale, cr.behaviors.Fade.prototype.acts.StartFade, cr.plugins_.Sprite.prototype.cnds.IsAnimPlaying, cr.plugins_.Famobi.prototype.acts.LevelUp, cr.plugins_.Arr.prototype.acts.SetX, cr.plugins_.Arr.prototype.acts.SetXY, cr.plugins_.Arr.prototype.acts.SetXYZ, cr.plugins_.Arr.prototype.exps.At, cr.plugins_.LocalStorage.prototype.acts.SetItem, cr.plugins_.Arr.prototype.exps.AsJSON, cr.plugins_.Sprite.prototype.acts.SetOpacity, cr.plugins_.Sprite.prototype.cnds.CompareFrame, cr.plugins_.Sprite.prototype.exps.ImagePointX, cr.plugins_.Sprite.prototype.exps.ImagePointY, cr.plugins_.Sprite.prototype.cnds.OnCreated, cr.plugins_.Sprite.prototype.exps.X, cr.plugins_.Sprite.prototype.exps.Y, cr.plugins_.Particles.prototype.acts.ZMoveToObject, cr.plugins_.Sprite.prototype.acts.SetY, cr.system_object.prototype.cnds.IsGroupActive, cr.system_object.prototype.cnds.EveryTick, cr.plugins_.Sprite.prototype.acts.SetWidth, cr.plugins_.Sprite.prototype.exps.Width, cr.plugins_.Sprite.prototype.acts.ZMoveToObject, cr.behaviors.Platform.prototype.cnds.IsMoving, cr.behaviors.Platform.prototype.cnds.IsOnFloor, cr.behaviors.Platform.prototype.acts.SetMaxSpeed, cr.behaviors.Platform.prototype.cnds.OnStop, cr.behaviors.Platform.prototype.cnds.OnLand, cr.behaviors.Platform.prototype.acts.SetJumpStrength, cr.behaviors.Platform.prototype.acts.SetDeceleration, cr.behaviors.Platform.prototype.cnds.OnJump, cr.plugins_.Keyboard.prototype.cnds.IsKeyDown, cr.plugins_.Touch.prototype.cnds.IsTouchingObject, cr.plugins_.Sprite.prototype.acts.SetMirrored, cr.behaviors.Platform.prototype.acts.SetVectorX, cr.behaviors.Platform.prototype.acts.SetVectorY, cr.plugins_.Sprite.prototype.exps.Height, cr.behaviors.Platform.prototype.acts.SimulateControl, cr.system_object.prototype.cnds.Every, cr.system_object.prototype.exps.floor, cr.system_object.prototype.exps.random, cr.plugins_.Sprite.prototype.acts.AddInstanceVar, cr.behaviors.Bullet.prototype.acts.SetEnabled, cr.behaviors.Bullet.prototype.acts.SetSpeed, cr.behaviors.Bullet.prototype.exps.Speed, cr.plugins_.Sprite.prototype.acts.SetX, cr.plugins_.Sprite.prototype.cnds.CompareY, cr.plugins_.Sprite.prototype.cnds.CompareWidth, cr.behaviors.Sin.prototype.acts.SetPeriod, cr.behaviors.Sin.prototype.exps.Period, cr.plugins_.Sprite.prototype.cnds.OnCollision, cr.plugins_.Sprite.prototype.cnds.IsOverlapping, cr.plugins_.Sprite.prototype.cnds.OnDestroyed, cr.plugins_.Sprite.prototype.cnds.CompareX, cr.behaviors.Flash.prototype.acts.Flash, cr.plugins_.Sprite.prototype.acts.SetHeight, cr.behaviors.Sin.prototype.acts.UpdateInitialState, cr.plugins_.Sprite.prototype.exps.LayerName, cr.plugins_.Particles.prototype.acts.Destroy, cr.behaviors.Sin.prototype.acts.SetMagnitude, cr.plugins_.TiledBg.prototype.acts.SetY, cr.plugins_.TiledBg.prototype.cnds.OnCreated, cr.plugins_.TiledBg.prototype.acts.SetInstanceVar, cr.plugins_.Particles.prototype.acts.SetPos, cr.behaviors.Pin.prototype.acts.Pin, cr.behaviors.Fade.prototype.acts.SetFadeInTime, cr.plugins_.Spritefont2.prototype.acts.SetScale, cr.plugins_.Spritefont2.prototype.acts.SetCharacterSpacing, cr.behaviors.Fade.prototype.acts.SetWaitTime, cr.plugins_.Famobi.prototype.acts.MoreGamesLink, cr.plugins_.Sprite.prototype.acts.LoadURL, cr.plugins_.Famobi.prototype.exps.GetMoreGamesButtonImage, cr.behaviors.Sin.prototype.acts.SetMovement, cr.plugins_.Spritefont2.prototype.acts.Destroy, cr.system_object.prototype.cnds.IsMobile, cr.plugins_.Audio.prototype.acts.Preload, cr.plugins_.TiledBg.prototype.acts.MoveToTop, cr.plugins_.Arr.prototype.cnds.CompareXYZ, cr.plugins_.Spritefont2.prototype.acts.SetInstanceVar, cr.plugins_.Sprite.prototype.cnds.PickInstVarHiLow, cr.plugins_.Sprite.prototype.acts.SetPosToObject, cr.plugins_.Audio.prototype.acts.Stop, cr.plugins_.Sprite.prototype.cnds.IsVisible, cr.behaviors.Sin.prototype.acts.SetPhase, cr.plugins_.Arr.prototype.cnds.CompareX, cr.plugins_.TiledBg.prototype.cnds.CompareY, cr.plugins_.TiledBg.prototype.cnds.IsBoolInstanceVarSet, cr.behaviors.custom.prototype.acts.AcceleratePos, cr.plugins_.TiledBg.prototype.acts.SetOpacity, cr.plugins_.Sprite.prototype.exps.Angle, cr.plugins_.LocalStorage.prototype.acts.CheckItemExists, cr.plugins_.LocalStorage.prototype.cnds.OnItemMissing, cr.plugins_.LocalStorage.prototype.cnds.OnItemExists, cr.plugins_.LocalStorage.prototype.acts.GetItem, cr.plugins_.LocalStorage.prototype.cnds.OnItemGet, cr.plugins_.Arr.prototype.acts.JSONLoad, cr.plugins_.LocalStorage.prototype.exps.ItemValue, cr.plugins_.Particles.prototype.acts.SetSpraying, cr.plugins_.Particles.prototype.cnds.IsSpraying, cr.system_object.prototype.acts.AddVar, cr.plugins_.Sprite.prototype.acts.SubInstanceVar, cr.plugins_.Touch.prototype.exps.X, cr.plugins_.Touch.prototype.exps.Y, cr.behaviors.custom.prototype.exps.Speed, cr.plugins_.Audio.prototype.cnds.IsSilent, cr.plugins_.Audio.prototype.acts.SetSilent, cr.plugins_.Browser.prototype.cnds.IsDownloadingUpdate, cr.plugins_.TiledBg.prototype.acts.SetWidth, cr.system_object.prototype.exps.loadingprogress];
    };