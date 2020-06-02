(function() {
    function kc() {
        for (var a = document.body.getElementsByTagName("*"), c, d = 0, e = a.length; d < e; d++) c = a[d], "mopub-div" == c.id.substr(0, 9) && (ha = c, clearInterval(xb))
    }

    function Z(a) {
        return "undefined" == typeof a
    }

    function yb(a) {
        C ? CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "openURL", arguments, !0) : open(a, "_blank")
    }

    function P(a) {
        return ab && !C ? {
            play: function() {}
        } : new Audio(a)
    }

    function O(a, c) {
        return Math.min(a, c)
    }

    function da(a, c) {
        return Math.max(a, c)
    }

    function jd() {
        var a = kd++,
            a = 1E4 * Math.sin(a);
        return 2 * (a - Math.floor(a)) - 1
    }

    function zb() {
        bb[cb].play();
        cb++;
        cb >= bb.length && (cb = 0)
    }

    function Ab(a, c, d) {
        C ? a.clear() : (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, c, d))
    }

    function db(a, c) {
        var d = document.createElement("canvas");
        d.width = a;
        d.height = c;
        return d
    }

    function T(a) {
        var c = 0,
            d;
        for (d in a) c = da(ia(a[d]), c);
        var e = db(c, 16 * a.length),
            f = e.getContext("2d");
        Ab(f, c, e.height);
        for (d in a) {
            var b = a[d];
            U(f, lc, b, (c - ia(b)) / 2 | 0, 16 * d, 10, 2)
        }
        return e
    }

    function mc(a, c, d) {
        a = a.getContext("2d");
        var e = c.width;
        d = d % e - e | 0;
        Ab(a, e, c.height);
        a.drawImage(c, d, 0);
        a.drawImage(c, d + e, 0)
    }

    function ia(a) {
        for (var c = 0, d = 0; d < a.length; d++) c += Z(eb[a.charAt(d)]) ? 6 : 12;
        return c
    }

    function U(a, c, d, e, f, b, h) {
        for (var g = 0; g < d.length; g++) {
            var k = eb[d.charAt(g)];
            Z(k) ? e += 3 * h : (a.drawImage(c, k * h, 0, b, b, e, f, b, b), e += b + h)
        }
    }

    function ld(a, c, d, e) {
        U(a, nc, c, d, e, 10, 2)
    }

    function Bb(a, c, d, e) {
        U(a, oc, c, d, e, 10, 2)
    }

    function V(a, c, d, e, f) {
        return {
            b: a,
            wa: d,
            x: e,
            y: f,
            I: a.width,
            n: a.height,
            s: !1,
            w: !1,
            m: 0,
            K: 0,
            L: 0,
            i: null,
            M: (a.width - 1.5 * ia(c)) / 2,
            H: 0,
            d: c,
            f: !0
        }
    }

    function Cb(a, c) {
        a.K = a.x;
        a.L = a.y;
        a.i = c
    }

    function pc(a) {
        if (a.f) {
            a.w && (a.m += L, .22 < a.m && (a.m = 0, a.w = 0));
            var c = (a.s ? 1 : 0) + (a.w ? 1 : 0);
            c && (l.save(), l.translate(a.x + a.I / 2, a.y + a.n / 2), l.scale(1 + .05 * c, 1 + .05 * c), l.translate(-a.x - a.I / 2, -a.y - a.n / 2));
            l.drawImage(a.b, a.x, a.y);
            U(l, qc, a.d, a.x + a.M + 3, a.y + a.n / 2 - 5 + a.H, 15, 3);
            U(l, Ia, a.d, a.x + a.M, a.y + a.n / 2 - 8 + a.H, 15, 3);
            c && l.restore()
        }
    }

    function rc(a) {
        var c, d;
        c = (x - a.height) / 2 - 44 | 0;
        d = t + a.width;
        return {
            b: a,
            A: (t - a.width) / 2 | 0,
            B: c,
            F: d,
            G: c,
            x: d,
            y: c,
            a: 0,
            u: 0,
            elements: [],
            f: !1,
            k: !0,
            d: "",
            v: 0
        }
    }

    function Ja() {
        return {
            c: [],
            j: 13,
            a: 0,
            b: ea
        }
    }

    function Db(a) {
        a.offsetX ? ($ = a.offsetX, aa = a.offsetY) : a.layerX && ($ = a.layerX, aa = a.layerY);
        if (C || ab) $ -= fb, aa -= gb;
        $ /= Eb;
        aa /= Eb;
        var c = !1,
            d;
        for (d in p)
            if (a = p[d], !a.i || a.i.f) a.x <= $ && a.x + a.I >= $ && a.y <= aa && a.y + a.n >= aa ? (c = !0, a.s = !0) : a.s = !1;
        $ > t - Fb && $ < t && aa > x - 40 && aa < x - 15 ? c = hb = 1 : hb = 0;
        M.style.cursor = c ? "pointer" : "default"
    }

    function ib(a) {
        var c = !1,
            d;
        ab && (Gb ? Db({
            offsetX: a.pageX,
            offsetY: a.pageY
        }) : Db({
            offsetX: a.targetTouches[0].pageX,
            offsetY: a.targetTouches[0].pageY
        }));
        for (d in p)
            if (a = p[d], a.s && (!a.i || a.i.f) && a.f) {
                a.w = !0;
                a.m = 0;
                c = a.wa();
                (Z(c) || c) && md.play();
                c = !0;
                break
            }
        //jb && hb && yb("http://suntemple.co");
        sc && !c && (m == D && k == E || 3.3 < ta - Hb) && (Hb = ta, D = ($ - na) / q | 0, E = (aa - ja) / q | 0, Ca = 0, kb = 1, "a" == s && (Math.abs(D - m) > Math.abs(E - k) ? (D = D > m ? F : -1, E = k) : (E = E > k ? I : -1, D = m)), tc(), u == m && z == k || "a" != s || zb())
    }

    function uc() {
        Ib();
        for (var a = -1, c, d; a < I / 2 + 1; a++)
            for (c = -1; c < F / 2 + 1; c++) l.drawImage(Jb, 2 * c * q, 2 * a * q);
        for (d in p) pc(p[d])
    }

    function nd() {
        vc();
        jb = 1;
        uc();
        for (var a = 0, c = 0; c <= lb; c++) {
            var d = 0;
            Da[c] <= fa[c][2] && (d = 1);
            Da[c] <= fa[c][1] && (d = 2);
            Da[c] <= fa[c][0] && (d = 3);
            a += d
        }
        a = "" + a;
        Bb(l, a, 22, 22);
        l.drawImage(Kb, 22 + ia(a) + 3, 14);
       // Fb = ia("Developed by suntemple.co") + 22;
        //Bb(l, "Developed by suntemple.co", t - Fb, x - 33);
        hb && (l.beginPath(), l.strokeStyle = "#fff", l.lineWidth = "2", l.moveTo(t - 168, x - 18), l.lineTo(t - 20, x - 18), l.stroke());
        l.drawImage(wc, 233, 56);
        l.drawImage(xc, 253, 140);
        mb()
    }

    function od() {
        jb = 0;
        var a;
        for (a = Lb; a < p.length; a++) p[a].f = ((a - Lb) / Ka | 0) == ua ? 1 : 0;
        yc();
        uc();
        U(l, Mb, "Choose your level", 208, 44, 20, 4);
        U(l, Nb, "Choose your level", 204, 40, 20, 4);
        for (a = 0; a < p.length; a++) {
            var c = p[a];
            if (c.f && "Lev" == c.d.substring(0, 3)) {
                var d = (c.d.substring(4) | 0) - 1,
                    e = Da[d],
                    f = 0;
                e <= fa[d][0] ? f = 3 : e <= fa[d][1] ? f = 2 : e <= fa[d][2] && (f = 1);
                for (d = 0; d < f; d++) l.drawImage(Kb, c.x + 30 * d + 30, c.y + 48);
                for (d = f; 3 > d; d++) l.drawImage(zc, c.x + 30 * d + 30, c.y + 48)
            }
        }
        mb()
    }

    function pd() {
        qd()
    }

    function rd() {
       // open("https://play.google.com/store/apps/details?id=com.suntemple.elementpuzzle", "_blank")
    }

    function sd() {
        //open("https://itunes.apple.com/us/app/element-puzzle/id919681891", "_blank")
    }

    function Ob(a, c, d, e) {
        a.save();
        a.translate(c * q, d * q);
        a.rotate(Math.PI * e)
    }

    function nb(a) {
        var c = B = a,
            d = 0,
            e, f = 0,
            b, g, l = F * I;
        e = Pb[a];
        var p = Ea.getContext("2d");
        Z(localStorage.elepuzzle_max_level) || (c = localStorage.elepuzzle_max_level, isNaN(c) && (c = 0), c = da(c, a));
        localStorage.elepuzzle_max_level = c;
        oa = [];
        h = 0;
        ba = [];
        ga = [];
        W = [];
        X = [];
        Q = [];
        R = null;
        Ac = La = pa = e;
        for (Ab(p, Ea.width, Ea.height); f < I / 2; f++)
            for (e = 0; e < F / 2; e++) p.drawImage(Jb, 2 * e * q, 2 * f * q);
        for (f = e = 0; d < l; d++, e++)
            if (e >= F && (e = 0, f++), b = pa.charAt(d), "v" == b || "V" == b) a = {}, a.g = e, a.e = f, a.dir = 1, a.a = 0, a.J = "V" == b ? 1 : 0, ga.push(a), ka(e, f, "0");
        for (d in ga) {
            a = ga[d];
            for (c = 0; 2 > c; c++) {
                for (e = 0;; e -= 2 * c - 1) {
                    if (a.J) {
                        if (0 > a.e + e || a.e + e > I - 1) break;
                        f = w(a.g, a.e + e)
                    } else {
                        if (0 > a.g + e || a.g + e > F - 1) break;
                        f = w(a.g + e, a.e)
                    } if (Qb(f) || "B" == f || "b" == f) break
                }
                c ? a.p = e + 1 : a.N = e - 1
            }
            a.a = -a.p / (a.N - a.p)
        }
        for (d = f = e = 0; d < l; d++, e++) {
            e >= F && (e = 0, f++);
            b = pa.charAt(d);
            c = null;
            if ("B" == b || "b" == b) {
                a = {
                    g: e,
                    top: f,
                    bottom: f,
                    a: 0,
                    dir: 1,
                    x: v(e),
                    y: r(f)
                };
                ka(e, f, "b" == b ? "w" : "0");
                for (g = f + 1; g < I; g++) {
                    var t = w(e, g);
                    if ("B" == t || "b" == t) {
                        ka(e, g, "b" == t ? "w" : "0");
                        a.bottom = g;
                        break
                    }
                }
                X.push(a)
            }
            "1" <= b && "9" >= b && (W.push({
                r: b,
                x: e,
                y: f
            }), ka(e, f, "0"));
            "g" == b && (c = Bc);
            "x" == b && (c = Cc);
            "c" == b && (m = u = D = e, k = z = E = f, A = qa = v(e) + y, n = H = r(f) + y, S = 1, ka(e, f, "0"));
            c && (p.drawImage(c, e * q + (q - c.width) / 2, f * q + (q - c.height) / 2), "g" == b && ("g" != w(e, f - 1) && p.drawImage(Ma, e * q, f * q), "g" != w(e, f + 1) && (Ob(p, e + 1, f + 1, 1), p.drawImage(Ma, 0, 0), p.restore()), "g" != w(e + 1, f) && (Ob(p, e + 1, f, .5), p.drawImage(Ma, 0, 0), p.restore()), "g" != w(e - 1, f) && (Ob(p, e, f + 1, -.5), p.drawImage(Ma, 0, 0), p.restore())));
            c = null;
            "A" == b && (c = Dc);
            "W" == b && (c = Ec);
            "F" == b && (c = Fc);
            "E" == b && (c = Gc);
            "-" == b && ba.push({
                x: e,
                y: f,
                t: !1,
                ha: 4 * Math.random()
            });
            "s" == b && Q.push({
                x: e,
                y: f,
                q: e,
                l: f,
                a: 0,
                o: !1,
                screenY: 0
            });
            c && (oa.push({
                b: c,
                g: e,
                e: f,
                a: jd() * Math.PI,
                x: v(e) - c.width / 2,
                y: r(f) - c.height / 2
            }), ka(e, f, "0"))
        }
        s = "e";
        Y = va = J = Na = wa = ob = pb = qb = Oa = 0;
        Pa = Qa = Fa = -1;
        G[0].k = !0;
        G[0].u = 0;
        G[1].k = !0;
        G[1].u = 0;
        a = Ja();
        0 == B && (a.x = v(14) - ea.width - 14, a.y = r(1) - 6, a.c = T(["This is the exit", "Tap it to go there"]), h = a);
        1 == B && (a.x = v(6) - ca.width - 14, a.y = r(1) - 28, a.c = T(["Tap here to get the water", "token to be able to move", "inside or over water"]), a.b = ca, a.h = !0, a.j = 16, h = a, R = td);
        2 == B && (a.x = v(6) - ea.width - 14, a.y = r(3) - 6, a.c = T(["Tap here to get the", "air token and fly!"]), a.h = !0, h = a, R = ud);
        3 == B && (a.x = v(10) - ea.width - 14, a.y = r(1) - 12, a.c = T(["Get fire token to burn", "the wooden bridge!"]), a.h = !0, h = a, R = vd);
        4 == B && (rb = !1, R = wd);
        5 == B && (a.x = v(10) - ea.width - 14, a.y = r(3) - 18, a.c = T(["Avoid the void!"]), a.j = 20, h = a, R = xd);
        7 == B && (R = yd);
        8 == B && (a.x = v(5) - ca.width - 14, a.y = r(5) - 26, a.c = T(["Use portals for", "teleporting to a", "different location"]), a.b = ca, h = a, R = zd);
        10 == B && (R = Ad)
    }

    function td() {
        "w" == s && h.h && (h.x = v(14) - ea.width - 14, h.y = r(1) - 18, h.b = ea, h.j = Ja().j, h.c = T(["Tap here to get", "to the exit now"]), h.h = !1, h.a = 0)
    }

    function ud() {
        "a" == s && h.h && (h.x = v(13) - ea.width - 14, h.y = r(1) - 18, h.b = ea, h.c = T(["Fly to the exit now!"]), h.j = 20, h.h = !1, h.a = 0)
    }

    function vd() {
        "f" == s && (h = 0)
    }

    function wd() {
        if (!rb && "a" == s) {
            var a = Ja();
            a.c = T(["Air element continues", "to move until it hits", "an obstacle"]);
            a.b = ca;
            a.j += 2;
            h = a;
            rb = !0;
            Hc = Y
        }
        rb && (h && (h.x = A - ca.width + 14, h.y = n - 100), Hc != Y && (h = null))
    }

    function xd() {
        Z(typeof ga[0].x) || (h.x = ga[0].x - 220)
    }

    function yd() {
        "w" != s || h || (h = Ja(), h.x = v(10) - ca.width - 37, h.y = r(4) - 37, h.c = T(["You can dive in", "and out of water", "when in water state"]), h.b = ca)
    }

    function zd() {
        h && 33 < n - h.y && (h = 0)
    }

    function Ad() {
        5 != k || "e" == s || h || (h = Ja(), h.h = !0, h.x = v(8) - ca.width - 37, h.y = r(5) - 66, h.c = T(["Use earth state", "to push stones"]));
        h && "e" == s && h.h && (h.h = !1, h.x = v(11) - ca.width - 37, h.y = r(5) - 66, h.c = T(["Push this stone", "to cover the hole"]));
        9 != Q[0].x && (h = null)
    }

    function v(a) {
        return a * q + na
    }

    function r(a) {
        return a * q + ja
    }

    function xa(a, c, d) {
        return a + (c - a) * d
    }

    function w(a, c) {
        return pa.charAt(Math.min(Math.max(a, 0), F - 1) + Math.min(Math.max(c, 0), I - 1) * F)
    }

    function ya(a, c) {
        var d = w(a, c);
        return "w" == d || "S" == d
    }

    function ka(a, c, d) {
        a = O(da(a, 0), F - 1) + O(da(c, 0), I - 1) * F;
        pa = pa.substring(0, a) + d + pa.substring(a + 1)
    }

    function Rb(a, c) {
        var d = w(a, c);
        ka(a, c, "w" == d ? "S" : "s")
    }

    function Sb(a, c) {
        var d = w(a, c);
        ka(a, c, "S" == d ? "w" : "0")
    }

    function Ra(a) {
        return "g" == a || "-" == a || "s" == a || "S" == a
    }

    function Ic(a, c) {
        var d, e, f;
        for (f in X)
            if (d = X[f], d.g == a && (e = (d.y - r(d.e)) / q, d.e == c && .667 > e || d.e == c - 1 && .33 < e)) return 1;
        return 0
    }

    function Qb(a) {
        return "g" == a || "-" == a || "w" == a || "s" == a || "S" == a
    }

    function Bd() {
        var a, c;
        for (a in X)
            if (c = X[a], Math.abs(A - c.x - y) < y && (c.y > n && c.y - n < K && 0 > c.dir || c.y < n && n - c.y - q < K && 0 < c.dir)) return c;
        return null
    }

    function Cd(a, c) {
        for (var d = c + 1; d < I; d++)
            if (Ra(w(a, d))) return d - 1;
        return c
    }

    function Jc() {
        var a = 1E9,
            c = (A - na) / q | 0,
            d = (n - ja) / q | 0,
            e = r(d),
            f = d,
            b, g;
        for (b in X) g = X[b], Math.abs(A - g.x - y) < y && n < g.y && (a = O(g.y - n, a));
        for (b = a; f < I; f++, e += q)
            if (("a" != s && Ra(w(c, f)) || "w" == s && Qb(w(c, f))) && e > n) {
                a = O(e - n, a);
                break
            }
            "w" == s && ya(c, d) && (a = r(d + 1) - n);
        (Ga = b <= a) && (sb = n + b);
        return n + a
    }

    function Kc() {
        if ("a" != s) {
            var a = Jc();
            a > n && (H = a -= K, J || (N = n, S = 0, J = 1), 5 < a - n && (la = qa = A, D = u = m, E = z = k))
        }
    }

    function Tb(a) {
        S = 0;
        la = v(m);
        qa = v(u);
        N = r(k);
        H = r(z);
        qa += y;
        la += y;
        "a" == s ? (N += y, H += y) : (N += q - K, H += q - K, a && (a = Jc() - K, N = O(N, a), H = O(H, a)))
    }

    function tc() {
        Kc();
        var a = 0,
            c = 0,
            d, e;
        if (D != m && (!J || Ga || J && Oa)) {
            E = z = k;
            u = D > m ? m + 1 : m - 1;
            a = w(u, k);
            if ("e" == s && ("s" == a || "S" == a) && Ra(w(u, k + 1)))
                for (c = 0; c < Q.length; c++)
                    if (d = Q[c], !d.o && (d.x == u || d.q == u) && d.y == k) {
                        e = u > m ? u + 1 : u - 1;
                        e == D && (D = e + (u > m ? -1 : 1));
                        var f = w(e, d.y);
                        if ("0" == f || "w" == f) Sb(u, d.y), a = w(u, d.y), Rb(e, d.y), d.q = e, d.x = u, d.a = 0
                    }
            if (Ra(a) || Ic(u, k)) {
                u = m;
                if (.33 < ta - Hb || !Ga) D = m;
                return
            }
            if ("a" == s && ya(u, k)) {
                D = u = m;
                return
            }
            z = k;
            a = 1;
            J = 0;
            Ca = 1
        } else if (E == k || !(!J || J && Oa) || Ga && "a" != s) E = z = k;
        else {
            D = u = m;
            if ("a" == s) {
                z = E > k ? k + 1 : k - 1;
                if (Qb(w(m, z)) || Ic(m, z)) {
                    E = z = k;
                    return
                }
                Ca = 1
            }
            if ("w" == s) {
                z = E > k ? k + 1 : k - 1;
                if (!(ya(m, z) || ya(m, k) && "0" == w(m, z))) {
                    E = z = k;
                    return
                }
                Ca = 1
            }
            J = 0
        } if (m != u || k != z) Tb(a), ob = 0
    }

    function Lc(a) {
        G[a].f = !0;
        G[a].u = 1;
        G[a].a = 0
    }

    function ma() {
        Na || (Mc.play(), Na = 1, Fa = .44)
    }

    function Ib() {
        C ? (ra = Sa.canvas.width, sa = Sa.canvas.height) : Z(innerWidth) || (ra = innerWidth, sa = innerHeight);
        if (ra != Nc || sa != Oc) {
            var a = ra / sa > t / x ? sa / x : ra / t;
            Ub = t * a;
            Vb = x * a;
            Eb = a;
            fb = (ra - Ub) / 2 | 0;
            gb = (sa - Vb) / 2 | 0;
            C || (Sa.canvas.width = t * a, Sa.canvas.height = x * a, M.style.left = fb + "px", M.style.top = gb + "px");
            Nc = ra;
            Oc = sa;
            Wb = !0
        }
        Wb && ha && (ha.style.position = "absolute", ha.style.left = ((ra - 350) / 2 | 0) + "px", ha.style.top = (sa - 50 | 0) + "px", Wb = !1)
    }

    function mb() {
        var a, c;
        C ? (a = fb, c = gb) : c = a = 0;
        Sa.drawImage(Pc, 0, 0, t, x, a, c, Ub, Vb)
    }

    function Xb() {
        var a, c = w(m, k),
            d;
        d = k;
        d = La.charAt(Math.min(Math.max(m, 0), F - 1) + Math.min(Math.max(d, 0), I - 1) * F);
        if ("W" == d || "E" == d || "F" == d || "A" == d)
            for (a in d = d.toLowerCase(), D = u = m, E = z = k, s = d, "a" == s ? zb() : Dd.play(), J = 0, d = k, d = O(da(m, 0), F - 1) + O(da(d, 0), I - 1) * F, La = La.substring(0, d) + "0" + La.substring(d + 1), Tb(!1), oa)
                if (oa[a].g == m && oa[a].e == k) {
                    oa.splice(a, 1);
                    break
                }
                "x" != c || va || (h = 0, R = null, va = 1, Yb = 0, Qc = ta, Ed.play(), c = "elepuzzl_levelmoves" + B, localStorage[c] = Z(localStorage[c]) ? Y : O(Y, localStorage[c]), B == lb && (G[0].d = "Game Complete!", p[2].d = "Main Menu"), Lc(0));
        if ("f" == s) {
            if ("-" == w(m, k + 1))
                for (a in ba) c = ba[a], c.x != m || c.y != k + 1 || c.t || (c.t = !0, c.C = 0);
            (ya(m, k + 1) || ya(m, k)) && ma()
        }
    }

    function Zb() {
        var a, c, d, e;
        for (a in W)
            if (c = W[a], c.x == m && c.y == k && (c.x != Pa || c.y != Qa))
                for (d in W)
                    if (e = W[d], d != a && c.r == e.r) {
                        Pa = e.x;
                        Qa = e.y;
                        m = u = D = e.x;
                        k = z = E = e.y;
                        J = 0;
                        Tb(!1);
                        A = la;
                        n = N;
                        Rc.play();
                        $b = 1;
                        for (a = 0; a < Q.length; a++)
                            if (c = Q[a], c.x == m && c.y == k && c.screenY < r(k) + q) {
                                ma();
                                break
                            }
                        return
                    }
    }

    function Sc(a, c, d) {
        d = za[(ac + d) % za.length | 0];
        l.drawImage(d, v(a) + (q - d.width) / 2, v(c) - d.height + 4)
    }

    function Fd() {
        jb = 0;
        var a, c, d, e, f, b;
        Ib();
        va ? vc() : yc();
        sc = !0;
        0 <= Fa && (Fa -= L, 0 > Fa && (setTimeout(function() {
            Gd.play()
        }, 400), Lc(1), h = 0, R = null, va = 1));
        if (!va && !Na) {
            if (m != Pa || k != Qa) Qa = Pa = -1;
            for (a in ga) b = ga[a], c = b.N - b.p, d = c * q, b.a += b.dir * L / c, 1 < b.a && (b.dir = -b.dir, b.a = 2 - b.a), 0 > b.a && (b.a = -b.a, b.dir = -b.dir), b.J ? (c = v(b.g), d = r(b.e + b.p) + d * b.a) : (c = v(b.g + b.p) + d * b.a, d = r(b.e)), c += y, d += y, b.x = c - Aa[0].width / 2, b.y = d - Aa[0].height / 2, Math.sqrt((c - A) * (c - A) + (d - n) * (d - n)) < y && ma();
            for (a in X)
                if (b = X[a], Math.abs(A - b.x - y) < y && (c = 0, 0 < b.dir ? (d = w(m, k + 1), ("g" == d || "-" == d) && n > b.y + y && r(k + 1) - b.y - q < 1.5 * K && (c = 1)) : (d = w(m, k - 1), ("g" == d || "-" == d) && n < b.y + y && b.y - r(k) < 1.5 * K && (c = 1)), c)) {
                    b.dir = 0;
                    ma();
                    break
                }
            for (a in Q)
                if (b = Q[a], c = v(b.x), d = b.screenY, b.o && Math.abs(A - c - y) < y && n > d + y && r(k + 1) - d - q < 1.5 * K) {
                    ma();
                    break
                }
            S += 8 * L;
            c = wa;
            "a" == s && (wa = Bd());
            if (b = wa && "a" == s)
                if (A = xa(la, qa, O(S, 1)), N = H = n = n < wa.y ? wa.y - K : wa.y + q + K, m = (A - na) / q | 0, E = z = k = (n - ja) / q | 0, c && kb || (D = u = m), pb != A || qb != n) Xb(), Zb();
            J && !b && (n = N + S * S * 8, A = la, c = 1, Ga && n + K < sb && sb - n - K < .5 * K && (n = sb), d = 0, n >= H ? (Oa = 1, H - N > y && bc.play(), n = H, d = 1, Ga ? (N = n, S = 2) : J = S = 0, pb == A && qb == n && (c = 0)) : Oa = 0, m = (A - na) / q | 0, k = (n - ja) / q | 0, ("f" == s && ya(m, k) || k >= I) && ma(), c && (Xb(), Zb()), Kc(), J && d && Math.abs(n - H) < K && (n = H, E = z = k, D = u = m));
            if (!J && !b)
                if (J = 0, 1 > S) A = xa(la, qa, S), n = xa(N, H, S);
                else {
                    c = 0;
                    if (!ob) {
                        c = s;
                        ob = 1;
                        k = z;
                        m = u;
                        Zb();
                        Ca && kb && (Y++, Ca = kb = 0);
                        A = qa;
                        n = H;
                        Xb();
                        if ("w" == s && ("i" == w(m, k) && ma(), "-" == w(m, k + 1)))
                            for (a in ba) b = ba[a], b.x == m && b.y == k + 1 && b.t && ma();
                        (k >= I || 0 > k || 0 > m || m >= F) && ma();
                        la = A;
                        N = n
                    }
                    tc();
                    "a" != c || u != m || z != k || $b || bc.play()
                }
        }
        $b = 0;
        l.fillStyle = "#000";
        l.fillRect(0, 0, t, x);
        l.drawImage(Ea, na, ja);
        ac += 11 * L;
        Ba = (Ba + 10 * L) % 3;
        for (a in ba) b = ba[a], l.drawImage(Tc, v(b.x), r(b.y));
        for (a in X) b = X[a], l.drawImage(Uc, b.x, b.y), c = v(b.g), d = r(b.top), e = c, f = r(b.bottom), b.a += L * b.dir / (b.bottom - b.top), 1 <= b.a && (b.a = 2 - b.a, b.dir = -b.dir), 0 >= b.a && (b.a = -b.a, b.dir = -b.dir), c = xa(c, e, b.a), d = xa(d, f, b.a), b.x = c, b.y = d, b.e = O(da((d - ja) / q | 0, b.top), b.bottom);
        c = Ta[Ba | 0];
        for (a in W) b = W[a], l.drawImage(c, v(b.x) + (q - c.width) / 2, r(b.y) + (q - c.height) / 2);
        e = 0;
        for (a in Q) {
            b = Q[a];
            if (b.o) Na || (b.a += 8 * L), d = r(b.y) + b.a * b.a * 8, f = r(b.l), c = v(b.x), d > f && (bc.play(), b.o = 0, d = f, Sb(b.x, b.y), b.y = b.l, Rb(b.x, b.y));
            else {
                if (1 > b.a && (b.a += 8 * L, 1 <= b.a)) {
                    b.x = b.q;
                    b.y = b.l;
                    for (c = f = 0; c < W.length; c++) {
                        e = W[c];
                        if (e.x == b.x && e.y == b.y)
                            for (d = 0; d < W.length; d++)
                                if (d != c) {
                                    var C = W[d];
                                    if (C.r == e.r) {
                                        Rc.play();
                                        Sb(b.x, b.y);
                                        b.x = b.q = C.x;
                                        b.y = b.l = C.y;
                                        Rb(b.x, b.y);
                                        f = 1;
                                        break
                                    }
                                }
                        if (f) break
                    }
                    e = 1
                }
                c = xa(v(b.x), v(b.q), b.a);
                d = xa(r(b.y), r(b.l), b.a)
            }
            b.screenY = d;
            l.drawImage(Vc, c, d)
        }
        if (e)
            for (a in Q) b = Q[a], Ra(w(b.x, b.y + 1)) || (b.o = 1, b.a = 0, b.l = Cd(b.x, b.y));
        for (a in ga) b = ga[a], l.drawImage(Aa[Ba | 0], b.x, b.y);
        c = cc;
        "a" == s && (c = Ua[Ba | 0]);
        "f" == s && (c = Va[Ba | 0]);
        "w" == s && (c = Wa[Ba | 0]);
        b = c.width / 2;
        d = c.height / 2;
        l.translate(-b, -d);
        l.drawImage(c, A, n);
        l.translate(b, d);
        for (a in oa) b = oa[a], b.a += 5 * L, l.drawImage(b.b, b.x + y, b.y + y + 6 * Math.sin(b.a) | 0);
        for (a = 0; a < ba.length;) {
            b = ba[a];
            if (b.t) {
                b.C += L;
                if (2.33 < b.C) {
                    ka(b.x, b.y, "0");
                    ba.splice(a, 1);
                    Mc.play();
                    continue
                }
                Sc(b.x, b.y, b.ha)
            }
            a++
        }
        for (d = 0; d < I; d++)
            for (c = 0; c < F; c++) b = pa.charAt(c + d * F), "w" != b && "S" != b || l.drawImage(tb, na + c * q, ja + d * q), "i" == b && Sc(c, d + 1, c + d);
        U(l, Ia, "Level " + (B + 1), 22, 8, 15, 3);
        b = "Moves: " + Y;
        U(l, Ia, b, t - 1.5 * ia(b) - 19, 8, 15, 3);
        f = null;
        for (a in G) b = G[a], b.f && (b.a = O(b.a + L * b.u, 1), b.k ? (c = Math.pow(b.a, 1.75), d = Math.pow(b.a, 3), b.x = b.F + (b.A - b.F) + (b.A - b.F) * Math.pow(2, -3 * Math.pow(4 * d, .75)) * Math.sin((4 * d - .5) * Math.PI), b.y = b.G + (b.B - b.G) + (b.B - b.G) * Math.pow(2, -3 * Math.pow(4 * c, .75)) * Math.sin((4 * c - .5) * Math.PI)) : (b.x = b.A - b.a * b.a * b.a * t * 4, b.y = b.B, 1 <= b.a && !Z(b.D) && (f = b.D, b.f = !1)), l.drawImage(b.b, b.x, b.y)), U(l, Mb, b.d, b.x + (b.b.width - 2 * ia(b.d)) / 2 + 3, b.y + 124 + b.v, 20, 4), U(l, Nb, b.d, b.x + (b.b.width - 2 * ia(b.d)) / 2, b.y + 121 + b.v, 20, 4);
        for (a in p) {
            b = p[a];
            if (b.i) {
                if (!b.i.f) continue;
                b.x = b.K + b.i.x;
                b.y = b.L + b.i.y
            }
            pc(b)
        }
        h && (h.a += L, a = -48 * Math.abs(Math.sin(h.a * Math.PI * 3.35)) * da(.67 - h.a, 0) | 0, l.drawImage(h.b, h.x, h.y + a), l.drawImage(h.c, h.x + (h.b.width - h.c.width) / 2, h.y + h.j + a));
        R && R();
        b = G[0];
        if (b.f)
            for (a = "with " + Y + " move" + (1 >= Y ? "" : "s"), U(l, Ia, a, b.x + (g.O.width - (1.5 * ia(a) | 0)) / 2, b.y + 104, 15, 3), e = 0, Y <= fa[B][0] ? e = 3 : Y <= fa[B][1] ? e = 2 : Y <= fa[B][2] && (e = 1), b.k && (e = da(O(e, 3 * (ta - Qc - .5) | 0), 0), e != Yb && (ub[da(e - 1, 0) | 0].play(), Yb = e)), a = 0; 3 > a; a++) c = b.x + 108 + 94 * a, d = b.y + 144, l.drawImage(a < e ? Wc : Xc, c, d), (a < e ? Bb : ld)(l, fa[B][2 - a] + "", c + 32, d + 32);
        pb = A;
        qb = n;
        mb();
        mc(tb, Xa, 8 * ta);
        f && (f(), f = null)
    }

    function Hd() {
        G[0].k = !1;
        G[0].a = 0
    }

    function Id() {
        Yc && !Zc && C && (console.log("Showing full screen banner!"), CocoonJS.Ad.showFullScreen(), Zc = 1);
        G[1].k = !1;
        G[1].a = 0
    }

    function $c() {
        //Jd || !C ? yb("http://suntemple.co") : yb("https://play.google.com/store/apps/developer?id=Sun+Temple")
    }

    function Kd() {
        if (va) return ad.play(), !1;
        nb(B)
    }

    function Ld() {
        dc()
    }

    function Md() {
        var a = g.O,
            c = g.Pa,
            d = g.sa,
            e = g.va,
            f = g.Ba;
        G = [];
        p = [];
        p.push(V(d, "Restart", Kd, 4, x - 90));
        p.push(V(d, "Quit", Ld, 4, x - 44));
        a = rc(a);
        a.v = -75;
        a.d = "Level Complete!";
        a.D = function() {
            B == lb ? dc() : nb(Pb.indexOf(Ac) + 1)
        };
        G[0] = a;
        d = V(e, "Next Level", Hd, (a.b.width - e.width) / 2, a.b.height - 99);
        Cb(d, a);
        p.push(d);
        a = rc(c);
        a.d = "Level Failed!";
        a.v = -50;
        a.D = function() {
            nb(B)
        };
        G[1] = a;
        d = V(f, "Restart", Id, (a.b.width - e.width) / 2, a.b.height - 170);
        Cb(d, a);
        p.push(d);
        d = V(f, "More Games", $c, (a.b.width - e.width) / 2, a.b.height - 90);
        Cb(d, a);
        p.push(d);
        ea = g.Fa;
        ca = g.Ea
    }

    function Nd() {
        ua++;
        ua >= vb && (ua = 0)
    }

    function Od() {
        ua--;
        0 > ua && (ua = vb - 1)
    }

    function bd() {
        for (var a = 0; a <= lb; a++) Da[a] = Z(localStorage["elepuzzl_levelmoves" + a]) ? 999 : localStorage["elepuzzl_levelmoves" + a]
    }

    function qd() {
        p = [];
        var a = g.Ca,
            c = 0,
            d = 0;
        Z(localStorage.elepuzzle_max_level) || (c = localStorage.elepuzzle_max_level);
        isNaN(c) && (c = 0);
        bd();
        var e = 0;
        p[e++] = V(Ya, "", Nd, t - Ya.width - 16, (x - Ya.height) / 2 + 36);
        p[e++] = V(cd, "", Od, 16, (x - Ya.height) / 2 + 36);
        Ka = 16;
        Lb = e;
        vb = Math.ceil(Pb.length / Ka) | 0;
        for (var f = 0; f < vb; f++)
            for (d = 0; d < Ka; d++) {
                var b = d + f * Ka;
                p[e + b] = V(a, b <= c ? "Lev " + (b + 1) : "Locked", b <= c ? function(a) {
                    return function() {
                        Md();
                        nb(a);
                        ec = new Date;
                        Za = Fd
                    }
                }(b) : function() {
                    ad.play();
                    return !1
                }, d % 4 * 154 + 88, 88 + 90 * (d / 4 | 0));
                b <= c && (p[e + b].H = -8)
            }
        Za = od
    }

    function dc() {
        p = [];
        var a = g.Ka;
        wc = dd;
        xc = ed;
        p[0] = V(a, "Start", pd, (t - a.width) / 2, 230);
        p[1] = V(a, "More Games", $c, (t - a.width) / 2, 320);
        C || (p[2] = V(fd, "", rd, 22, 377), p[3] = V(gd, "", sd, 22, 322));
        Za = nd;
        bd();
        zb()
    }

    function fc() {
        var a = new Date;
        L = O((a - ec) / 1E3, .11);
        ta = (a - hd) / 1E3;
        ec = a;
        Za();
        $a && $a(fc)
    }

    function vc() {
        C ? id && !wb && (console.log("Showing the banner!"), wb = !0, CocoonJS.Ad.showBanner(), gc++, 5 < gc && (gc = 0, CocoonJS.Ad.refreshBanner())) : ha && (ha.style.display = "block")
    }

    function yc() {
        C ? wb && (console.log("Hiding the banner!"), wb = !1, CocoonJS.Ad.hideBanner()) : ha && (ha.style.display = "none")
    }
    var Jd = navigator.userAgent.match(/iPhone|iPad|iPod/i),
        ab = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i),
        C = !Z(CocoonJS) && CocoonJS.nativeExtensionObjectAvailable,
        Gb = !1,
        xb = null,
        ha = null,
        xb = setInterval(kc);
    C || (document.ontouchmove = function(a) {
        a.preventDefault()
    }, xb = setInterval(kc, 1E3));
    (function(a) {
        for (a = 0; 4096 > a; a++);
    })();
    var ra = 784,
        sa = 448,
        Dd = P("transform.wav"),
        kd = 1,
        Mc = P("destroy.wav"),
        hc = [1.122462, 1.122462, 1.059463, 1.122462, 1.122462, 1.122462, 1.059463],
        Ed = P("win.wav");
    for (i = 0; i < hc.length; i++) hc[i] = 1 / hc[i];
    var Rc = P("portal.wav"),
        Gd = P("lose.wav"),
        bc = P("fall.wav"),
        ad = P("rechazado.wav"),
        cb = 0,
        bb = [];
    bb[0] = P("wind.wav");
    bb[1] = P("wind.wav");
    var md = P("buttonclick.wav"),
        ub = [];
    ub[0] = P("star.wav");
    ub[1] = P("star.wav");
    ub[2] = P("star.wav");
    var t, x, na, ja, Jb, Bc, Ma, tb, Xa, Tc, za, Cc, Wa, cc, Ua, Va, Dc, Gc, Fc, Ec, ea, ca, Aa, Ta, Uc, dd, ed, lc, nc, oc, Ia, qc, Nb, Mb, fd, gd, Ya, cd, Vc, Kb, zc, Wc, Xc, eb = [],
        ic = 0,
        jc = 0,
        $, aa, hb, Hb = 0,
        M;
    t = 784;
    x = 448;
    C ? M = document.createElement("screencanvas") : (M = document.createElement("canvas"), M.width = t, M.height = x, M.style.cssText = "position:absolute;touch-action: none;touch-action-delay: none;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;outline: none;-webkit-tap-highlight-color: rgba(255, 255, 255, 0);");
    document.body.appendChild(M);
    M.onmousemove = Db;
    ab ? window.navigator.pointerEnabled ? (Gb = !0, M.addEventListener("pointerdown", ib, !1)) : window.navigator.msPointerEnabled ? (Gb = !0, M.addEventListener("MSPointerDown", ib, !1)) : M.addEventListener("touchstart", ib, !1) : M.addEventListener("click", ib, !1);
    var Sa = M.getContext("2d"),
        Pc = db(t, x),
        l = Pc.getContext("2d"),
        g = {
            Q: "bk",
            qa: "gr",
            ra: "gru",
            Qa: "woo",
            Ra: "wfi",
            Sa: "wfi1",
            Ta: "wfi2",
            Ua: "wfi3",
            Oa: "wt",
            ga: "ex",
            W: "cai",
            X: "cai1",
            Y: "cai2",
            ca: "cwt",
            da: "cwt1",
            ea: "cwt2",
            Z: "cea",
            $: "cfr",
            aa: "cfr1",
            ba: "cfr2",
            S: "bai",
            V: "bwt",
            T: "bea",
            U: "bfr",
            font: "fnt",
            ia: "fnt_10x10_black",
            ja: "fnt_10x10_grey",
            ka: "fnt_10x10_white",
            la: "fnt_15x15_grey",
            ma: "fnt_15x15_white",
            Va: "fnt_grey",
            Wa: "fnt_white",
            na: "fnt_20x20_grey",
            oa: "fnt_20x20_white",
            La: "voi",
            Ma: "voi1",
            Na: "voi2",
            xa: "por",
            ya: "por1",
            za: "por2",
            R: "blk",
            Ka: "start_button_bk",
            Ca: "select_level_bk",
            sa: "in_game_action_bk",
            Fa: "speech_small",
            Ea: "speech_big",
            va: "next_lev_bk",
            Ba: "restart_bk",
            O: "wnd_bk",
            Pa: "wnd_fail_bk",
            fa: "element_title",
            Aa: "puzzle_title",
            pa: "gplay",
            P: "astore",
            Da: "side_arrow",
            ta: "left_side_arrow",
            ua: "mv_stone",
            Ia: "star_on",
            Ga: "star_off",
            Ja: "star_on_x2",
            Ha: "star_off_x2"
        },
        Ha;
    for (Ha in g) jc++;
    for (Ha in g) {
        var Pd = g[Ha];
        g[Ha] = new Image;
        g[Ha].onload = function() {
            ic++
        };
        g[Ha].src = Pd + ".png"
    }
    var hd = new Date,
        ec = hd,
        Za, jb = 0,
        Fb, p = [],
        G = [],
        Da = [],
        fa = [
            [1, 5, 10],
            [2, 5, 10],
            [3, 5, 10],
            [4, 5, 10],
            [12, 17, 23],
            [7, 12, 17],
            [6, 11, 16],
            [9, 14, 19],
            [6, 11, 16],
            [10, 15, 20],
            [5, 10, 15],
            [15, 20, 25],
            [14, 19, 24],
            [15, 20, 25],
            [17, 22, 27],
            [21, 26, 31],
            [14, 19, 24],
            [22, 27, 33],
            [13, 18, 23],
            [23, 28, 33],
            [12, 17, 22],
            [17, 22, 27],
            [9, 14, 19],
            [13, 18, 23],
            [24, 29, 34],
            [17, 22, 27],
            [25, 30, 35],
            [14, 19, 24],
            [30, 35, 40],
            [27, 32, 37],
            [23, 28, 33],
            [36, 41, 46]
        ],
        Pb = "00000000000000000000000000000c00000000000xgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg 000000000000000000000000000000000W0c00000xggggggggwwwwwggggggggggwwwgggggggggggggggggggggggggggggggggggggggggggg 0000000000000000000000000000000000000000x00000000000000000000A0c00000ggggggggggggggggggggggggggggggggggggggggggg 0000000000000000000000000000000W000c0F0000ggggg--gggggggggggg00gggggggggggg0000000xggggggggwwwgggggggggggggggggg 0000000000ggggx0000000000000ggggg00ggggg0ggF00cW0000Ag0gg--ggggwwwgg0g000000ggggg00gggggg0000000gggggggggggggggg 00000000000000000000000000000000000ggggg000000000E000000ggg0v00gg000cAggggg0ggggggggggggg0000xgggggggggggggggggg 0000000x00g00000000ggv00000g000000000g000000g00v00000g000000ggg0000000gggggVggg0gggggggc00000Agggggggggggggggggg 00000gg00ggggg00000gggv0W0gg00000gg00g0000ggggggg0000g00x0000gg0000c0Aggggwggggwggggggggwwwwwwwwwggggggggggggggg gggggggggggggggc000ggg2F01gggggg0ggggggggggggg0gggggggggggggA002v000gggggg0ggg---ggggggg1gggg000xggggggggggggggg ggggggggggggggg000000000100gg0F000g000gxgggwg---0c00gggggwggv1AgW0v00ggwwwgggggwwwwggggwwwwwwwwwwggggggggggggggg ggggggggggggggg000000000000gg000000000000gg000000000000ggWc0000000000ggggwg0E00s00xgggggggggggg0gggggggggggggggg ggggggggggggggg0E0000000000gg00s000E00000gg0ggg0s00000cgg00x00gg0000ggg0ggg0Ag00000gggg00000000A0ggggggggggggggg ggggggggggggggg0g0c00g000020g0g000000100gxg0gVggg--ggwggg00A000000g2ggg0g0gW0gggggggggg0g00000F1gggggggggggggggg gggggggggggggggv00g000000gxgg0000E000g00Vgg01g00s00g000gg00g0gg000000gg0A00000000g0gggg10000c0Ag0ggggggggggggggg ggggg0ggggggggg000g00c0gggxgg000E00gv0000ggv0g00E0000gggg00000gV0Egg0ggg000000ggg00gggg0000A00000gggggAggggggggg ggggggggg00000g00E0000g00000g000s000100000g00gggg0F00000g000g0000s0000gAc0g--gggg0gxgggBv0000100gggggBgggggggggg 000000g00200000gv00000Eg000x000g00001000g2g0000g0000000V0000010g0c000A00000A000g0g00ggg00V0000A00ggggggggggggggg ggggggggggggggg0000V00000c1gg0000000gwgg-gg0000000ggggwggggB000F0B0gxggE00gB0gg00gggggg0W0000BV01ggggBgBgggggggg ggggggggggggggg100g00000000Bgg00g0gggg0000gv00g0gc0g000000v0g0ggAgE000gx00g0000g0000ggg0gggggg001Bgggggggggggggg gggggggggggggggV00000gv0A01gg0g000000Bggggx0g-gBv000F01ggwgwg00000gggggwwwg00000W00gggggg0c000gggggggggBgggBgggg ggg0B0v0x0002ggBg0000000000gg0g00c0000002gg0100g0000000gg0000gg0000000gBW00W0A000000ggg00000000001ggggBggggggggg ggggggggggggggg0E4v300Fv3g2gg0gg-g0ggwggxgg00g020gggggggg00ggg4000000gg010010W00000gggg00Ac00gv0Agggggggggwwwwgg gBggggggggggggg000000000000gg00E000000000ggBW00s0000000gggggggg00sc00g00000000Aggggggggxgwg00ggggggggggggggggggg ggggggggggggggA020000000010gg-g-g00gEv0g0gg0s0g00g000gWgggg0g000Fgv00gx0i0gwwg0c000gggg0gwwg2ggg1ggggggggggggggg gggggggggggggggF00000c00001gg-g-g0ggg0V0xgg0gE000000F0ggggg-ggg0ggg00gggW0g1g000000ggggwwwgAV00g-gggggggggA0ggAg ggggggggggggggg2c0000000001gggggg---ggggAgg2000BW00F0g0ggggBg0030gwwwgx3g000000gggggggg00B0000001ggggBgggggggggg ggg0g00c001gggg000000s000A2gg01000ggg02gggg0000sE0E0000gg0000gg0gg000g0W0v0000s000VxggggAgg0gg0gwggggggggggggggg ggggg1c00AgggggF00ggggg0000g000000iii000Wggg0000ggggg-ggg00000s000001gggggggggggg-ggggg0000000000ggggxgggwgggggg gggggggggggggggEB02B00E000i1g200g0s00W00ggc000gBg00s0A0gg100gggggg0g0ggA00gxv00ggg0gggBAgggwwwwwwggggggggggggggg gggggV0c00gggggB00000g00000gg0000000V0000ggB0000BgE000ggg000000W0000gggAEs010g010000ggggggBgggAg0xggggggggggggwg ggggggggggggggg100F00c0A0023gggggBgggggwgg4100000000ggWgg-ggg0gg0s002gg0g030ggggg-gggggwwwwgv00004gggggbggxgwggg ggg00001g0ggggg0g00000000E00g000100FV004B03000s00g300000g-ggggBE00v00Ax0g4WW0000g00gg0ggc00ggwwwbgggggggBggggggg".split(" "),
        lb = 31,
        pa, La, Ac, F = 14,
        I = 8,
        q = 56,
        y = q / 2,
        Ea = db(F * q, I * q),
        A, n, pb, qb, J, wa, Ga, sb, Oa, la, N, qa, H, m, k, u, z, D, E, s = "e",
        S, Y, Ca, kb, B = 0,
        va = 0,
        Qc = 0,
        Yb = 0,
        Fa = -1,
        Na, ac = 0,
        Ba = 0,
        Pa, Qa, ob, K, sc = !1,
        oa, h, ba, ga, W, X, Q, R;
    na = (t - Ea.width) / 2;
    ja = (x - Ea.height) / 2;
    var rb, Hc, Eb = 1,
        Nc = 0,
        Oc = 0,
        fb = 0,
        gb = 0,
        Ub = t,
        Vb = x,
        Wb = !1,
        $b = 0,
        L = new Date,
        ta = L,
        Lb = 0,
        ua = 0,
        Ka = 1,
        vb = 0,
        Da = [],
        wc, xc;
    Za = function() {
        Ib();
        l.fillStyle = "#000";
        l.fillRect(0, 0, t, x);
        l.fillStyle = "#389";
        var a = "Loading... " + (ic / jc * 100 | 0) + "%";
        l.fillText(a, (t - l.measureText(a).width) / 2, x / 2);
        mb();
        if (ic == jc) {
            for (var c in "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:.,!?") a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:.,!?".charAt(c), eb[a] = 6 * c, "A" <= a && "Z" >= a && (eb[a.toLowerCase()] = 6 * c);
            Jb = g.Q;
            Bc = g.qa;
            Ma = g.ra;
            Xa = g.Oa;
            tb = db(Xa.width, Xa.height);
            mc(tb, Xa, 0);
            Tc = g.Qa;
            za = [];
            za[0] = g.Ra;
            za[1] = g.Sa;
            za[2] = g.Ta;
            za[3] = g.Ua;
            Cc = g.ga;
            Ua = [];
            Ua[0] = g.W;
            Ua[1] = g.X;
            Ua[2] = g.Y;
            cc = g.Z;
            K = cc.width / 2;
            Va = [];
            Va[0] = g.$;
            Va[1] = g.aa;
            Va[2] = g.ba;
            Wa = [];
            Wa[0] = g.ca;
            Wa[1] = g.da;
            Wa[2] = g.ea;
            Dc = g.S;
            Gc = g.T;
            Fc = g.U;
            Ec = g.V;
            Aa = [];
            Aa[0] = g.La;
            Aa[1] = g.Ma;
            Aa[2] = g.Na;
            Ta = [];
            Ta[0] = g.xa;
            Ta[1] = g.ya;
            Ta[2] = g.za;
            Uc = g.R;
            dd = g.fa;
            ed = g.Aa;
            lc = g.ia;
            nc = g.ja;
            oc = g.ka;
            Ia = g.ma;
            qc = g.la;
            Nb = g.oa;
            Mb = g.na;
            fd = g.pa;
            gd = g.P;
            Ya = g.Da;
            cd = g.ta;
            Vc = g.ua;
            Kb = g.Ia;
            zc = g.Ga;
            Wc = g.Ja;
            Xc = g.Ha;
            dc()
        }
    };
    var $a = null;
    "function" == typeof requestAnimationFrame && ($a = requestAnimationFrame);
    var id = !1,
        wb = !1,
        gc = 0;
    if (C) {
        console.log("The game is under CocoonJS");
        CocoonJS.Ad.onBannerReady.addEventListener(function() {
            CocoonJS.Ad.setBannerLayout(CocoonJS.Ad.BannerLayout.BOTTOM_CENTER);
            id = !0
        });
        CocoonJS.Ad.preloadBanner();
        var Yc = 0,
            Zc = 0;
        CocoonJS.Ad.onFullScreenReady.addEventListener(function() {
            Yc = !0
        });
        CocoonJS.Ad.preloadFullScreen()
    } else console.log("The game is not under CocoonJS!");
    $a ? $a(fc) : setInterval(fc, 1E3 / 30)
})();