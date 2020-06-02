var s_iScaleFactor = 1,
    s_iOffsetX, s_iOffsetY, s_bIsIphone = !1,
    s_bIsRetina;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent ||
    navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}

function getSize(a) {
    var c = a.toLowerCase(),
        b = window.document,
        d = b.documentElement;
    if (void 0 === window["inner" + a]) a = d["client" + a];
    else if (window["inner" + a] != d["client" + a]) {
        var g = b.createElement("body");
        g.id = "vpw-test-b";
        g.style.cssText = "overflow:scroll";
        var e = b.createElement("div");
        e.id = "vpw-test-d";
        e.style.cssText = "position:absolute;top:-1000px";
        e.innerHTML = "<style>@media(" + c + ":" + d["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + c + ":7px!important}}</style>";
        g.appendChild(e);
        d.insertBefore(g, b.head);
        a = 7 == e["offset" + a] ? d["client" + a] : window["inner" + a];
        d.removeChild(g)
    } else a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getNearestNumber(a, c) {
    if (2 > (b = a.length)) return b - 1;
    for (var b, d = Math.abs(a[--b] - c); b-- && !(d < (d = Math.abs(a[b] - c))););
    return b + 1
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
        if (navigator.platform === a.pop()) return !0;
    return s_bIsIphone = !1
}

function isRetina() {
    s_bIsRetina = matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches ? !0 : !1
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function inIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a;
        a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var c = getSize("Width");
        _checkOrientation(c, a);
        var b = Math.min(a / CANVAS_HEIGHT, c / CANVAS_WIDTH),
            d = CANVAS_WIDTH * b,
            b = CANVAS_HEIGHT * b,
            g;
        b < a ? (g = a - b, b += g, d += CANVAS_WIDTH / CANVAS_HEIGHT * g) : d < c && (g = c - d, d += g, b += CANVAS_HEIGHT / CANVAS_WIDTH * g);
        g = a / 2 - b / 2;
        var e = c / 2 - d / 2,
            f = CANVAS_WIDTH / d;
        if (e * f < -EDGEBOARD_X || g * f < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
            c / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), d = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, g = (a - b) / 2, e = (c - d) / 2, f = CANVAS_WIDTH / d;
        s_iOffsetX = -1 * e * f;
        s_iOffsetY = -1 * g * f;
        0 <= g && (s_iOffsetY = 0);
        0 <= e && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oSelectPlayers && s_oSelectPlayers.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oLevelMenu && s_oLevelMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"),
            s_oStage.canvas.width = 2 * d, s_oStage.canvas.height = 2 * b, canvas.style.width = d + "px", canvas.style.height = b + "px", a = Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_iScaleFactor = 2 * a, s_oStage.scaleX = s_oStage.scaleY = 2 * a) : s_bMobile && !1 === isIOS() ? ($("#canvas").css("width", d + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = d, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > g ? $("#canvas").css("top", g + "px") : $("#canvas").css("top",
            "0px");
        $("#canvas").css("left", e + "px")
    }
}

function _checkOrientation(a, c) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > c ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function playSound(a, c, b) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? createjs.Sound.play(a, {
        loop: b,
        volume: c
    }) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || a.stop()
}

function setVolume(a, c) {
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) a.volume = c
}

function setMute(a, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || a.setMute(c)
}

function createBitmap(a, c, b) {
    var d = new createjs.Bitmap(a),
        g = new createjs.Shape;
    c && b ? g.graphics.beginFill("#fff").drawRect(0, 0, c, b) : g.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    d.hitArea = g;
    return d
}

function createSprite(a, c, b, d, g, e) {
    a = null !== c ? new createjs.Sprite(a, c) : new createjs.Sprite(a);
    c = new createjs.Shape;
    c.graphics.beginFill("#000000").drawRect(-b, -d, g, e);
    a.hitArea = c;
    return a
}

function pad(a, c, b) {
    a += "";
    return a.length >= c ? a : Array(c - a.length + 1).join(b || "0") + a
}

function randomSign() {
    return .5 >= Math.random() ? 1 : -1
}

function randomFloatBetween(a, c, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (c - a), c).toFixed(b))
}

function rotateVector2D(a, c) {
    var b = c.getX() * Math.cos(a) + c.getY() * Math.sin(a),
        d = c.getX() * -Math.sin(a) + c.getY() * Math.cos(a);
    c.set(b, d)
}

function tweenVectorsOnX(a, c, b) {
    return a + b * (c - a)
}

function shuffle(a) {
    for (var c = a.length, b, d; 0 !== c;) d = Math.floor(Math.random() * c), --c, b = a[c], a[c] = a[d], a[d] = b;
    return a
}

function centerBetweenPointsV2(a, c) {
    var b = new CVector2;
    b.set(.5 * (a.getX() + c.getX()), .5 * (a.getY() + c.getY()));
    return b
}

function bubbleSort(a) {
    var c;
    do {
        c = !1;
        for (var b = 0; b < a.length - 1; b++) a[b] > a[b + 1] && (c = a[b], a[b] = a[b + 1], a[b + 1] = c, c = !0)
    } while (c)
}

function compare(a, c) {
    return a.index > c.index ? -1 : a.index < c.index ? 1 : 0
}

function easeLinear(a, c, b, d) {
    return b * a / d + c
}

function easeInQuad(a, c, b, d) {
    return b * (a /= d) * a + c
}

function easeInSine(a, c, b, d) {
    return -b * Math.cos(a / d * (Math.PI / 2)) + b + c
}

function easeInCubic(a, c, b, d) {
    return b * (a /= d) * a * a + c
}

function getTrajectoryPoint(a, c) {
    var b = new createjs.Point,
        d = (1 - a) * (1 - a),
        g = a * a;
    b.x = d * c.start.x + 2 * (1 - a) * a * c.traj.x + g * c.end.x;
    b.y = d * c.start.y + 2 * (1 - a) * a * c.traj.y + g * c.end.y;
    return b
}

function formatTime(a) {
    a /= 1E3;
    var c = Math.floor(a / 60);
    a = parseFloat(a - 60 * c).toFixed(1);
    var b = "",
        b = 10 > c ? b + ("0" + c + ":") : b + (c + ":");
    return 10 > a ? b + ("0" + a) : b + a
}

function degreesToRadians(a) {
    return a * Math.PI / 180
}

function checkRectCollision(a, c) {
    var b, d;
    b = getBounds(a, .9);
    d = getBounds(c, .98);
    return calculateIntersection(b, d)
}

function calculateIntersection(a, c) {
    var b, d, g, e, f, l, h, m;
    b = a.x + (g = a.width / 2);
    d = a.y + (e = a.height / 2);
    f = c.x + (l = c.width / 2);
    h = c.y + (m = c.height / 2);
    b = Math.abs(b - f) - (g + l);
    d = Math.abs(d - h) - (e + m);
    return 0 > b && 0 > d ? (b = Math.min(Math.min(a.width, c.width), -b), d = Math.min(Math.min(a.height, c.height), -d), {
        x: Math.max(a.x, c.x),
        y: Math.max(a.y, c.y),
        width: b,
        height: d,
        rect1: a,
        rect2: c
    }) : null
}

function getBounds(a, c) {
    var b = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var d = a.children,
            g = d.length,
            e, f;
        for (f = 0; f < g; f++) e = getBounds(d[f], 1), e.x < b.x && (b.x = e.x), e.y < b.y && (b.y = e.y), e.x + e.width > b.x2 && (b.x2 = e.x + e.width), e.y + e.height > b.y2 && (b.y2 = e.y + e.height);
        Infinity == b.x && (b.x = 0);
        Infinity == b.y && (b.y = 0);
        Infinity == b.x2 && (b.x2 = 0);
        Infinity == b.y2 && (b.y2 = 0);
        b.width = b.x2 - b.x;
        b.height = b.y2 - b.y;
        delete b.x2;
        delete b.y2
    } else {
        var l, h;
        a instanceof createjs.Bitmap ?
            (g = a.sourceRect || a.image, f = g.width * c, l = g.height * c) : a instanceof createjs.Sprite ? a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image ? (g = a.spriteSheet.getFrame(a.currentFrame), f = g.rect.width, l = g.rect.height, d = g.regX, h = g.regY) : (b.x = a.x || 0, b.y = a.y || 0) : (b.x = a.x || 0, b.y = a.y || 0);
        d = d || 0;
        f = f || 0;
        h = h || 0;
        l = l || 0;
        b.regX = d;
        b.regY = h;
        g = a.localToGlobal(0 - d, 0 - h);
        e = a.localToGlobal(f - d, l - h);
        f = a.localToGlobal(f - d, 0 - h);
        d = a.localToGlobal(0 - d, l - h);
        b.x = Math.min(Math.min(Math.min(g.x,
            e.x), f.x), d.x);
        b.y = Math.min(Math.min(Math.min(g.y, e.y), f.y), d.y);
        b.width = Math.max(Math.max(Math.max(g.x, e.x), f.x), d.x) - b.x;
        b.height = Math.max(Math.max(Math.max(g.y, e.y), f.y), d.y) - b.y
    }
    return b
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
    for (var c = a.length, b, d; 0 < c;) d = Math.floor(Math.random() * c), c--, b = a[c], a[c] = a[d], a[d] = b;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var c = document.createEvent("MouseEvents");
            c.initEvent("click", !0, !0);
            a.dispatchEvent(c)
        }
    }
};
(function() {
    function a(a) {
        var b = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[c] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var c = "hidden";
    c in document ? document.addEventListener("visibilitychange", a) : (c = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (c = "webkitHidden") in
        document ? document.addEventListener("webkitvisibilitychange", a) : (c = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var c = window.location.search.substring(1).split("&"), b = 0; b < c.length; b++) {
        var d = c[b].split("=");
        if (d[0] == a) return d[1]
    }
}
String.prototype.format = function() {
    for (var a = this, c = arguments.length; c--;) a = a.replace(new RegExp("\\{" + c + "\\}", "gm"), arguments[c]);
    return a
};

function radiansToDegree(a) {
    return 180 / Math.PI * a
}

function distance(a, c) {
    var b = a.getX() - c.getX(),
        d = a.getY() - c.getY();
    return Math.sqrt(b * b + d * d)
}

function fixEnemyTremble(a, c) {
    var b = !1;
    distanceBetween2Points(c.m_pCenter().getX(), a.getY(), c.m_pCenter().getX(), c.m_pCenter().getY()) <= c.getLength() && (b = !0);
    return b
}

function distanceBetween2Points(a, c, b, d) {
    return Math.sqrt(Math.pow(b - a, 2) + Math.pow(d - c, 2))
}

function collideEdgeWithCircle(a, c, b) {
    a = closestPointOnLine(a.getPointA(), a.getPointB(), c);
    c = distanceV2(c, a);
    return b < c ? null : {
        distance: c,
        closest_point: a
    }
}

function closestPointOnLine(a, c, b) {
    var d = new CVector2,
        g = new CVector2;
    d.setV(a);
    g.setV(c);
    var e = new CVector2;
    e.setV(b);
    e.subtract(a);
    b = new CVector2;
    b.setV(c);
    b.subtract(a);
    b.normalize();
    e = dotProductV2(b, e);
    if (0 >= e) return d;
    if (e >= distanceV2(a, c)) return g;
    b.scalarProduct(e);
    b.addV(a);
    return b
}

function dotProductV2(a, c) {
    return a.getX() * c.getX() + a.getY() * c.getY()
}

function distanceV2(a, c) {
    return Math.sqrt((c.getX() - a.getX()) * (c.getX() - a.getX()) + (c.getY() - a.getY()) * (c.getY() - a.getY()))
}

function reflectVectorV2(a, c) {
    var b = dotProductV2(a, c);
    a.set(a.getX() - 2 * b * c.getX(), a.getY() - 2 * b * c.getY());
    return a
}

function angleBetweenVectors(a, c) {
    var b = Math.acos(dotProductV2(a, c) / (a.length() * c.length()));
    return 1 == isNaN(b) ? 0 : b
}

function distanceV2WithoutSQRT(a, c) {
    return (c.getX() - a.getX()) * (c.getX() - a.getX()) + (c.getY() - a.getY()) * (c.getY() - a.getY())
}

function classifySphere(a, c, b, d) {
    a = c.getX() * a.getX() + c.getY() * a.getY() + planeDistance(c, b);
    return Math.abs(a) < d ? 0 <= a ? "INTERSECT FRONT" : "INTERSECT BEHIND" : a >= d ? "FRONT" : "BEHIND"
}

function planeDistance(a, c) {
    return -(a.getX() * c.getX() + a.getY() * c.getY())
}

function saveItem(a, c) {
    s_bStorageAvailable && localStorage.setItem(a, c)
}

function getItem(a) {
    return s_bStorageAvailable ? localStorage.getItem(a) : null
}

function CSpriteLibrary() {
    var a, c, b, d, g, e;
    this.init = function(f, l, h) {
        b = c = 0;
        d = f;
        g = l;
        e = h;
        a = {}
    };
    this.addSprite = function(b, d) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: d,
            oSprite: new Image
        }, c++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        g.call(e)
    };
    this._onSpriteLoaded = function() {
        d.call(e);
        ++b == c && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return c
    }
}
var CANVAS_WIDTH = 1920,
    CANVAS_HEIGHT = 1080,
    EDGEBOARD_X = 256,
    EDGEBOARD_Y = 84,
    PRIMARY_FONT = "comfortaabold",
    FPS = 30,
    FPS_TIME = 1E3 / FPS,
    DISABLE_SOUND_MOBILE = !1,
    MIN_PLAYER_FORCE_VEL = .1,
    BALL_SPRITE_ANIM_MULTIPLIER = .4,
    BALL = 2,
    LEFT_SIDE = 3,
    RIGHT_SIDE = 4,
    MIN_DIST_COLLISION_DETECT = 1E3,
    BUT_LEVEL_WIDTH = 95,
    BUT_LEVEL_HEIGHT = 84,
    NUM_ROWS_PAGE_LEVEL, NUM_COLS_PAGE_LEVEL, s_b2Players, s_bFriendly, s_bFirstPlay = !0,
    s_bFirstMultiPlayer = !0,
    BLUE_STICK = 0,
    RED_STICK = 1,
    PLAYER_SPEED_STICKS = 10,
    CPU_SPEED_STICK_FRIENDLY, CPU_SPEED_STICKS, NUM_GOAL_FRIENDLY,
    POINTS_TO_WIN = 1,
    TIME_GOAL_ANIMATION = 2500,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    STATE_LEVEL_SELECTION = 4,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    PHYSICS_ITERATIONS = 10,
    BALL_START_VELOCITY = 1.5,
    STICK_ACCELLERATION = 1,
    STICK_FRICTION = .91,
    HORIZONTAL_LINE_UP = 0,
    HORIZONTAL_LINE_DOWN = 1,
    VERTICAL_LINE_LEFT_UP = 2,
    VERTICAL_LINE_LEFT_DOWN = 3,
    VERTICAL_LINE_RIGHT_UP = 4,
    VERTICAL_LINE_RIGHT_DOWN = 5,
    GOAL_HORIZONTAL_LEFT_UP = 6,
    GOAL_HORIZONTAL_LEFT_DOWN = 7,
    GOAL_HORIZONTAL_RIGHT_UP =
    8,
    GOAL_HORIZONTAL_RIGHT_DOWN = 9,
    GOALKEEPER = 0,
    DEFENDER = 1,
    MIDFIELDER = 2,
    STRIKER = 3,
    ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, AD_SHOW_COUNTER;
TEXT_SCORE = "SCORE";
TEXT_ARE_SURE = "ARE YOU SURE?";
TEXT_GAMEOVER = "CONGRATULATION! YOU WON THIS MATCH!";
TEXT_LOSE = "PLAYER ";
TEXT_LOSE2 = " WON THIS MATCH";
TEXT_WIN_2PLAYERS = "PLAYER ";
TEXT_WIN_2PLAYERS_2 = " WON THIS MATCH";
TEXT_DELETE_SAVE = "ALL YOUR PROGRESSES WILL BE DELETED\n\n\nARE YOU SURE?";
TEXT_SELECT_MODE_MENU = TEXT_SELECT_PLAYERS_MENU = "SELECT MODE";
TEXT_SELECT_LEVEL = "SELECT A LEVEL";
TEXT_TUTORIAL_1 = "PRESS THESE BUTTONS TO MOVE YOUR STICKS UP OR DOWN";
TEXT_TUTORIAL_2 = "THE AIM OF THE GAME IS TO SCORE THE GREATEST NUMBER OF GOALS. GOOD LUCK!!!";
TEXT_TUTORIAL_3 = "RE SPIN THE BALL WHEN IT'S POSSIBLE JUST PRESSING THE SPACEBAR OR THIS BUTTON";
TEXT_TUTORIAL_4 = "RE SPIN THE BALL WHEN IT'S POSSIBLE JUST PRESSING THIS BUTTON";
TEXT_TUTORIAL_PLAYER = "PLAYER";
TEXT_PAUSE = "Pause";
TEXT_ERR_LS = "YOUR WEB BROWSER DOES NOT SUPPORT STORING SETTING LOCALLY. IN SAFARI, THE MOST COMMON CAUSE OF THIS IS USING 'PRIVATE BROWSING MODE'. SOME INFO MAY NOT SAVE OR SOME FEATURE MAY NOT WORK PROPERLY.";
TEXT_SHARE_IMAGE = "200x200.jpg";
TEXT_SHARE_TITLE = "Congratulations!";
TEXT_SHARE_MSG1 = "You collected <strong>";
TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_SHARE1 = "My score is ";
TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
    var a, c, b, d, g, e, f;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.loadSprites();
        f = new createjs.Container;
        s_oStage.addChild(f)
    };
    this.unload = function() {
        f.removeAllChildren()
    };
    this.hide = function() {
        var a = this;
        setTimeout(function() {
            createjs.Tween.get(e).to({
                alpha: 1
            }, 500).call(function() {
                a.unload();
                s_oMain.gotoMenu()
            })
        }, 1E3)
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var l = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        f.addChild(l);
        l = s_oSpriteLibrary.getSprite("progress_bar");
        d = createBitmap(l);
        d.x = CANVAS_WIDTH / 2 - l.width / 2;
        d.y = CANVAS_HEIGHT - 170;
        f.addChild(d);
        a = l.width;
        c = l.height;
        g = new createjs.Shape;
        g.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x, d.y, 1, c);
        f.addChild(g);
        d.mask =
            g;
        b = new createjs.Text("", "30px Arial", "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT - 125;
        b.shadow = new createjs.Shadow("#000", 2, 2, 2);
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        f.addChild(b);
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.alpha = 0;
        f.addChild(e)
    };
    this.refreshLoader = function(e) {
        b.text = e + "%";
        g.graphics.clear();
        e = Math.floor(e * a / 100);
        g.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x, d.y, e, c)
    };
    this._init()
}

function CMain(a) {
    var c, b = 0,
        d = 0,
        g = STATE_LOADING,
        e, f, l;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !1;
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(FPS), $("body").on("contextmenu", "#canvas", function(a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(FPS);
        navigator.userAgent.match(/Windows Phone/i) &&
            (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        f = new CPreloader
    };
    this.preloaderReady = function() {
        jQuery.getJSON("level_info.json", this.onLoadedJSON);
        c = !0
    };
    this.onLoadedJSON = function(a) {
        s_oLevelSettings = new CLevelSettings(a);
        try {
            saveItem("ls_available", "ok")
        } catch (m) {
            s_bStorageAvailable = !1
        }!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_oMain._initSounds();
        s_oMain._loadImages()
    };
    this.soundLoaded = function() {
        b++;
        f.refreshLoader(Math.floor(b / d * 100));
        b === d && this._onPreloaderComplete()
    };
    this._initSounds =
        function() {
            createjs.Sound.initializeDefaultPlugins() && (0 < navigator.userAgent.indexOf("Opera") || 0 < navigator.userAgent.indexOf("OPR") ? (createjs.Sound.alternateExtensions = ["mp3"], createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this)), createjs.Sound.registerSound("./sounds/soundtrack.ogg", "soundtrack"), createjs.Sound.registerSound("./sounds/ball_kick.ogg", "ball_kick"), createjs.Sound.registerSound("./sounds/goal.ogg", "goal"), createjs.Sound.registerSound("./sounds/press_button.ogg",
                "click"), createjs.Sound.registerSound("./sounds/game_over.ogg", "game_over"), createjs.Sound.registerSound("./sounds/ball_wall.ogg", "ball_wall"), createjs.Sound.registerSound("./sounds/goal_exultance.ogg", "goal_exultance"), createjs.Sound.registerSound("./sounds/miss_goal.ogg", "miss_goal"), createjs.Sound.registerSound("./sounds/applause.ogg", "applause"), createjs.Sound.registerSound("./sounds/whistle.ogg", "whistle")) : (createjs.Sound.alternateExtensions = ["ogg"], createjs.Sound.addEventListener("fileload",
                    createjs.proxy(this.soundLoaded, this)), createjs.Sound.registerSound("./sounds/soundtrack.mp3", "soundtrack"), createjs.Sound.registerSound("./sounds/ball_kick.mp3", "ball_kick"), createjs.Sound.registerSound("./sounds/goal.mp3", "goal"), createjs.Sound.registerSound("./sounds/press_button.mp3", "click"), createjs.Sound.registerSound("./sounds/game_over.mp3", "game_over"), createjs.Sound.registerSound("./sounds/ball_wall.mp3", "ball_wall"), createjs.Sound.registerSound("./sounds/goal_exultance.mp3", "goal_exultance"),
                createjs.Sound.registerSound("./sounds/miss_goal.mp3", "miss_goal"), createjs.Sound.registerSound("./sounds/applause.mp3", "applause"), createjs.Sound.registerSound("./sounds/whistle.mp3", "whistle")), d += 10)
        };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_yes_big",
            "./sprites/but_yes_big.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("ball", "./sprites/ball.png");
        s_oSpriteLibrary.addSprite("player_shadow", "./sprites/player_shadow.png");
        s_oSpriteLibrary.addSprite("but_p1",
            "./sprites/but_p1.png");
        s_oSpriteLibrary.addSprite("but_p2", "./sprites/but_p2.png");
        s_oSpriteLibrary.addSprite("friendly_mode", "./sprites/friendly_mode.png");
        s_oSpriteLibrary.addSprite("tournament_mode", "./sprites/tournament_mode.png");
        s_oSpriteLibrary.addSprite("arrow", "./sprites/arrow.png");
        s_oSpriteLibrary.addSprite("stick", "./sprites/stick.png");
        s_oSpriteLibrary.addSprite("field", "./sprites/field.png");
        s_oSpriteLibrary.addSprite("player_red", "./sprites/player_red.png");
        s_oSpriteLibrary.addSprite("player_blue",
            "./sprites/player_blue.png");
        s_oSpriteLibrary.addSprite("arena", "./sprites/arena.png");
        s_oSpriteLibrary.addSprite("score_rod_blue", "./sprites/score_rod_blue.png");
        s_oSpriteLibrary.addSprite("score_rod_red", "./sprites/score_rod_red.png");
        s_oSpriteLibrary.addSprite("score_cube_blue", "./sprites/score_cube_blue.png");
        s_oSpriteLibrary.addSprite("score_cube_red", "./sprites/score_cube_red.png");
        s_oSpriteLibrary.addSprite("score_panel", "./sprites/score_panel.png");
        s_oSpriteLibrary.addSprite("logo_menu", "./sprites/logo_menu.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_level", "./sprites/but_level.png");
        s_oSpriteLibrary.addSprite("but_next", "./sprites/but_next.png");
        s_oSpriteLibrary.addSprite("but_kickoff", "./sprites/but_kickoff.png");
        s_oSpriteLibrary.addSprite("goal_text", "./sprites/goal_text.png");
        s_oSpriteLibrary.addSprite("but_delete_save", "./sprites/but_delete_save.png");
        s_oSpriteLibrary.addSprite("key_w",
            "./sprites/key_w.png");
        s_oSpriteLibrary.addSprite("key_s", "./sprites/key_s.png");
        s_oSpriteLibrary.addSprite("key_up", "./sprites/key_up.png");
        s_oSpriteLibrary.addSprite("key_down", "./sprites/key_down.png");
        s_oSpriteLibrary.addSprite("skip_arrow", "./sprites/skip_arrow.png");
        s_oSpriteLibrary.addSprite("skip_arrow_left", "./sprites/skip_arrow_left.png");
        s_oSpriteLibrary.addSprite("but_help", "./sprites/but_help.png");
        s_oSpriteLibrary.addSprite("but_pause", "./sprites/but_pause.png");
        d += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        f.refreshLoader(Math.floor(b / d * 100));
        b === d && this._onPreloaderComplete()
    };
    this._onAllImagesLoaded = function() {};
    this._onPreloaderComplete = function() {
        f.unload();
        isIOS() || (s_oSoundtrack = playSound("soundtrack", 1, -1));
        this.gotoMenu()
    };
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this.gotoMenu = function() {
        new CMenu;
        g = STATE_MENU
    };
    this.gotoGame = function() {
        l = new CGame(e);
        g = STATE_GAME
    };
    this.gotoSelectPlayers = function() {
        new CSelectPlayers
    };
    this.gotoLevelMenu = function() {
        new CLevelMenu;
        g = STATE_LEVEL_SELECTION
    };
    this.gotoSelectMode = function() {
        new CSelectMode
    };
    this.gotoHelp = function() {
        new CHelp;
        g = STATE_HELP
    };
    this.stopUpdate = function() {
        c = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        createjs.Sound.setMute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        c = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        s_bAudioActive && createjs.Sound.setMute(!1)
    };
    this._update = function(a) {
        if (!1 !==
            c) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            g === STATE_GAME && l.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    ENABLE_FULLSCREEN = a.fullscreen;
    NUM_ROWS_PAGE_LEVEL = a.level_menu_rows;
    NUM_COLS_PAGE_LEVEL = a.level_menu_cols;
    CPU_SPEED_STICK_FRIENDLY = a.cpu_speed_friendly;
    NUM_GOAL_FRIENDLY = a.num_goal_friendly;
    e = a;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_iLastLevel = 1,
    s_bFullscreen = !1,
    s_bStorageAvailable = !0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundtrack, s_oCanvas;

function CStick(a, c, b, d, g, e, f, l) {
    var h, m, p, k, r, q, v, t, u, w;
    this.init = function(a, b, c, d, e, g, f, l) {
        var n = 0;
        h = new createjs.Container;
        s_oStage.addChild(h);
        q = [];
        v = [];
        u = c;
        w = 0;
        f === GOALKEEPER ? n = PLAYER_SPEED_STICKS / 2 : f === DEFENDER ? n = PLAYER_SPEED_STICKS / 3 : f !== MIDFIELDER && f === STRIKER && (n = PLAYER_SPEED_STICKS / 4);
        t = l + n;
        c = s_oSpriteLibrary.getSprite("stick");
        m = new createBitmap(c, c.width, c.height);
        m.regX = 21;
        m.regY = 1224;
        m.x = a;
        m.y = b;
        1 === u && (m.scaleY *= -1);
        h.addChild(m);
        p = d;
        k = e;
        r = g;
        0 === u ? (c = s_oSpriteLibrary.getSprite("player_blue"),
            d = 53, e = 32, b = 15) : (c = s_oSpriteLibrary.getSprite("player_red"), d = 49, e = 32, b = -15);
        d = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: 100,
                height: 70,
                regX: d,
                regY: e
            },
            animations: {
                idle: [0, 0, "idle"],
                shot: {
                    frames: [1, 2, 3],
                    next: "idle"
                }
            }
        });
        for (e = 0; e < g.length; e++) q.push(new CEdge(a + b, r[e].y1, a + b, r[e].y2, 1, !1)), v.push(new createjs.Sprite(d, "idle")), v[e].x = q[e].getModel().m_pCenter().getX() - b, v[e].y = q[e].getModel().m_pCenter().getY(), h.addChild(v[e])
    };
    this.getX = function() {
        return m.x
    };
    this.getColorStick = function() {
        return u
    };
    this.getDistanceFromStickToEdge = function(a) {
        return Math.sqrt(Math.pow(a.x - m.x, 2) + Math.pow(a.y - m.y, 2))
    };
    this.onKeyUp = function() {
        m.y !== p && (w -= STICK_ACCELLERATION, this.__updateStickPositions())
    };
    this.onKeyDown = function() {
        m.y !== k && (w += STICK_ACCELLERATION, this.__updateStickPositions())
    };
    this.__updateStickPositions = function() {
        Math.abs(w) > t && (w = 0 > w ? -t : t);
        var a = w;
        m.y + w < p ? (a = p - m.y, w = 0) : m.y + w > k && (w = 0, a = k - m.y);
        m.y += a;
        for (var b = 0; b < q.length; b++) q[b].moveY(a), v[b].y += a
    };
    this.onShot = function() {
        for (var a = 0; a < v.length; a++) v[a].gotoAndPlay("shot")
    };
    this.getEdges = function() {
        return q
    };
    this.update = function() {
        w *= STICK_FRICTION;
        this.__updateStickPositions()
    };
    this.init(a, c, b, d, g, e, f, l)
}

function CToggle(a, c, b, d, g) {
    var e, f, l, h, m, p, k;
    this._init = function(a, b, c, d, g) {
        m = [];
        p = [];
        var f = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: c.width / 2 / 2,
                regY: c.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        e = d;
        k = createSprite(f, "state_" + e, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        k.x = a;
        k.y = b;
        k.stop();
        g.addChild(k);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? k.off("mousedown", f) : (k.off("mousedown", f), k.off("mouseover", h));
        k.off("pressup", l);
        g.removeChild(k)
    };
    this._initListener = function() {
        s_bMobile ? f = k.on("mousedown", this.buttonDown) : (f = k.on("mousedown", this.buttonDown), h = k.on("mouseover", this.buttonOver));
        l = k.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        m[a] = b;
        p[a] = c
    };
    this.setActive = function(a) {
        e = a;
        k.gotoAndStop("state_" + e)
    };
    this.buttonRelease = function() {
        k.scaleX = 1;
        k.scaleY = 1;
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("click");
        e = !e;
        k.gotoAndStop("state_" + e);
        m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(p[ON_MOUSE_UP],
            e)
    };
    this.buttonDown = function() {
        k.scaleX = .9;
        k.scaleY = .9;
        m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN])
    };
    this.buttonOver = function(a) {
        s_bMobile || (a.target.cursor = "pointer")
    };
    this.setPosition = function(a, b) {
        k.x = a;
        k.y = b
    };
    this._init(a, c, b, d, g)
}

function CGfxButton(a, c, b, d) {
    var g, e, f, l, h, m, p, k, r, q;
    this._init = function(a, b, c, d) {
        q = g = !1;
        e = 1;
        m = [];
        p = [];
        k = createBitmap(c);
        k.x = a;
        k.y = b;
        k.scaleX = k.scaleY = e;
        k.regX = c.width / 2;
        k.regY = c.height / 2;
        d.addChild(k);
        this._initListener()
    };
    this.unload = function() {
        s_bMobile ? k.off("mousedown", f) : (k.off("mousedown", f), k.off("mouseover", h));
        k.off("pressup", l);
        d.removeChild(k)
    };
    this.setVisible = function(a) {
        k.visible = a
    };
    this.setClickable = function(a) {
        g = !a
    };
    this._initListener = function() {
        s_bMobile ? f = k.on("mousedown", this.buttonDown) :
            (f = k.on("mousedown", this.buttonDown), h = k.on("mouseover", this.buttonOver));
        l = k.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        m[a] = b;
        p[a] = c
    };
    this.buttonRelease = function() {
        g || (k.scaleX = e, k.scaleY = e, m[ON_MOUSE_UP] && m[ON_MOUSE_UP].call(p[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        g || (k.scaleX = .9 * e, k.scaleY = .9 * e, q || playSound("click", 1, 0), m[ON_MOUSE_DOWN] && m[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN]))
    };
    this.buttonOver = function(a) {
        s_bMobile || g || (a.target.cursor = "pointer")
    };
    this.pulseAnimation =
        function() {
            createjs.Tween.get(k).to({
                scaleX: .9 * e,
                scaleY: .9 * e
            }, 850, createjs.Ease.quadOut).to({
                scaleX: e,
                scaleY: e
            }, 650, createjs.Ease.quadIn).call(function() {
                r.pulseAnimation()
            })
        };
    this.trembleAnimation = function() {
        createjs.Tween.get(k).to({
            rotation: 5
        }, 75, createjs.Ease.quadOut).to({
            rotation: -5
        }, 140, createjs.Ease.quadIn).to({
            rotation: 0
        }, 75, createjs.Ease.quadIn).wait(750).call(function() {
            r.trebleAnimation()
        })
    };
    this.setPosition = function(a, b) {
        k.x = a;
        k.y = b
    };
    this.setX = function(a) {
        k.x = a
    };
    this.setY = function(a) {
        k.y =
            a
    };
    this.getButtonImage = function() {
        return k
    };
    this.getX = function() {
        return k.x
    };
    this.getY = function() {
        return k.y
    };
    this.setMuted = function(a) {
        q = a
    };
    r = this;
    this._init(a, c, b, d);
    return this
}

function CMenu() {
    var a, c, b, d, g, e, f, l, h, m, p, k, r, q, v, t, u, w, y = null,
        D = null,
        A, z, x;
    this._init = function() {
        s_b2Players = !1;
        null !== s_oSoundtrack && void 0 !== s_oSoundtrack && setVolume(s_oSoundtrack, 1);
        r = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(r);
        var n = s_oSpriteLibrary.getSprite("friendly_mode");
        b = CANVAS_WIDTH / 2 - 225;
        d = CANVAS_HEIGHT - 200;
        q = new CGfxButton(b, d, n, s_oStage);
        q.addEventListener(ON_MOUSE_DOWN, this._onButFriendlyRelease, this);
        n = s_oSpriteLibrary.getSprite("tournament_mode");
        a =
            CANVAS_WIDTH / 2 + 225;
        c = CANVAS_HEIGHT - 200;
        A = new CGfxButton(a, c, n, s_oStage);
        A.addEventListener(ON_MOUSE_DOWN, this._onButTournamentRelease, this);
        n = s_oSpriteLibrary.getSprite("but_info");
        p = n.height / 2 + 10;
        k = n.height / 2 + 10;
        u = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 240, n, s_oStage);
        u.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);
        n = s_oSpriteLibrary.getSprite("but_delete_save");
        g = !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? CANVAS_WIDTH - 1.5 * n.height - 5 : CANVAS_WIDTH - n.width / 2 - 10;
        e = n.height / 2 + 10;
        x = new CGfxButton(g,
            e, n, s_oStage);
        x.addEventListener(ON_MOUSE_UP, s_oLevelSettings.deleteSaveData, this);
        n = s_oSpriteLibrary.getSprite("logo_menu");
        z = new createBitmap(n, n.width, n.height);
        z.regX = n.width / 2;
        z.regY = n.height / 2;
        z.y = CANVAS_HEIGHT / 2 - 100;
        z.x = -700;
        s_oStage.addChild(z);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) n = s_oSpriteLibrary.getSprite("audio_icon"), h = CANVAS_WIDTH - n.height / 2, m = n.height / 2 + 10, t = new CToggle(h, m, n, s_bAudioActive, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        var n = window.document,
            B = n.documentElement;
        y = B.requestFullscreen || B.mozRequestFullScreen || B.webkitRequestFullScreen || B.msRequestFullscreen;
        D = n.exitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen || n.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (y = !1);
        y && !inIframe() && (n = s_oSpriteLibrary.getSprite("but_fullscreen"), f = p + n.width / 2 + 10, l = n.height / 2 + 10, w = new CToggle(f, l, n, !0, s_oStage), w.addEventListener(ON_MOUSE_UP, this._onFullscreen, this));
        v = new createjs.Shape;
        v.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(v);
        var C = this;
        createjs.Tween.get(v).to({
            alpha: 0
        }, 1E3).call(function() {
            v.visible = !1
        });
        (new createjs.Tween.get(z)).wait(500).to({
            x: CANVAS_WIDTH / 2
        }, 1E3, createjs.Ease.bounceOut).call(function() {
            C.pulseTitle()
        });
        s_bStorageAvailable || new CMsgBox(TEXT_ERR_LS, s_oStage);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.pulseTitle = function() {
        var a = this;
        (new createjs.Tween.get(z)).to({
            scaleX: .9,
            scaleY: .9
        }, 850, createjs.Ease.quadOut).to({
            scaleX: 1,
            scaleY: 1
        }, 650, createjs.Ease.quadIn).call(function() {
            a.pulseTitle()
        })
    };
    this.unload = function() {
        s_oStage.removeChild(z);
        q.unload();
        A.unload();
        x.unload();
        q = null;
        v.visible = !1;
        u.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t.unload(), t = null;
        y && !inIframe() && w.unload();
        s_oStage.removeChild(r);
        s_oMenu = r = null
    };
    this.refreshButtonPos = function(n, r) {
        q.setPosition(b, d - r);
        A.setPosition(a, c - r);
        x.setPosition(g - n, e + r);
        u.setPosition(p + n, r + k);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || t.setPosition(h - n, r + m);
        y && !inIframe() && w.setPosition(f + n, l + r)
    };
    this._onAudioToggle = function() {
        createjs.Sound.setMute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCreditsBut = function() {
        new CCreditsPanel
    };
    this._onFullscreen = function() {
        s_bFullscreen ? (D.call(window.document), s_bFullscreen = !1) : (y.call(window.document.documentElement), s_bFullscreen = !0);
        sizeHandler()
    };
    this._onButFriendlyRelease = function() {
        this.unload();
        $(s_oMain).trigger("start_session");
        s_bFriendly = !0;
        CPU_SPEED_STICKS = CPU_SPEED_STICK_FRIENDLY;
        POINTS_TO_WIN = NUM_GOAL_FRIENDLY;
        s_oMain.gotoSelectPlayers();
        !isIOS() || null !== s_oSoundtrack && void 0 !== s_oSoundtrack ||
            !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || (s_oSoundtrack = playSound("soundtrack", 1, -1))
    };
    this._onButTournamentRelease = function() {
        this.unload();
        $(s_oMain).trigger("start_session");
        s_bFriendly = !1;
        s_oMain.gotoLevelMenu();
        !isIOS() || null !== s_oSoundtrack && void 0 !== s_oSoundtrack || !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || (s_oSoundtrack = playSound("soundtrack", 1, -1))
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CGame(a) {
    var c, b, d, g = null,
        e, f, l, h, m, p, k, r, q, v, t, u, w, y, D, A, z, x, n, B, C, E, G, F, H, I, J, K;
    this._init = function() {
        setVolume(s_oSoundtrack, .1);
        y = c = !0;
        D = !1;
        E = !0;
        u = t = b = 0;
        new CVector2;
        h = [];
        m = [];
        w = !1;
        F = !0;
        var a = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(a);
        k = p = !1;
        s_b2Players && (q = r = !1);
        a = s_oSpriteLibrary.getSprite("field");
        z = new createBitmap(a, a.width, a.height);
        z.regX = a.width / 2;
        z.regY = a.height / 2;
        z.x = CANVAS_WIDTH / 2;
        z.y = CANVAS_HEIGHT / 2 - 20;
        s_oStage.addChild(z);
        d = new CInterface;
        d.refreshScore(b);
        l = [];
        l[HORIZONTAL_LINE_UP] = (new CEdge(309, 210, 1608, 210, 5, !1)).getModel();
        l[HORIZONTAL_LINE_DOWN] = (new CEdge(1608, 798, 309, 798, 5, !1)).getModel();
        l[VERTICAL_LINE_LEFT_UP] = (new CEdge(309, 360, 309, 210, 5, !1)).getModel();
        l[VERTICAL_LINE_LEFT_DOWN] = (new CEdge(309, 799, 309, 639, 5, !1)).getModel();
        l[VERTICAL_LINE_RIGHT_UP] = (new CEdge(1608, 210, 1608, 360, 5, !1)).getModel();
        l[VERTICAL_LINE_RIGHT_DOWN] = (new CEdge(1608, 639, 1608, 799, 5, !1)).getModel();
        f = new CBall(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 230, s_oSpriteLibrary.getSprite("ball"),
            "ball_1", s_oStage);
        f.setVisible(!1);
        J = [l[HORIZONTAL_LINE_UP], l[VERTICAL_LINE_LEFT_UP], l[VERTICAL_LINE_RIGHT_UP]];
        K = [l[HORIZONTAL_LINE_DOWN], l[VERTICAL_LINE_LEFT_DOWN], l[VERTICAL_LINE_RIGHT_DOWN]];
        h[GOALKEEPER] = new CStick(347, CANVAS_HEIGHT + 200, BLUE_STICK, 1150, 1410, [{
            y2: 475,
            y1: 514
        }], GOALKEEPER, PLAYER_SPEED_STICKS);
        h[DEFENDER] = new CStick(520, CANVAS_HEIGHT + 160, BLUE_STICK, 1140, 1350, [{
            y2: 320,
            y1: 360
        }, {
            y2: 633,
            y1: 673
        }], DEFENDER, PLAYER_SPEED_STICKS);
        h[MIDFIELDER] = new CStick(866, CANVAS_HEIGHT + 100, BLUE_STICK,
            1145, 1210, [{
                y2: 253,
                y1: 292
            }, {
                y2: 407,
                y1: 450
            }, {
                y2: 560,
                y1: 600
            }, {
                y2: 714,
                y1: 752
            }], MIDFIELDER, PLAYER_SPEED_STICKS);
        h[STRIKER] = new CStick(1212, CANVAS_HEIGHT + 160, BLUE_STICK, 1155, 1320, [{
            y2: 305,
            y1: 340
        }, {
            y2: 483,
            y1: 517
        }, {
            y2: 668,
            y1: 706
        }], STRIKER, PLAYER_SPEED_STICKS);
        m[GOALKEEPER] = new CStick(CANVAS_WIDTH - 400 + 51, -270, RED_STICK, -400, -130, [{
            y1: 475,
            y2: 514
        }], GOALKEEPER, CPU_SPEED_STICKS);
        m[DEFENDER] = new CStick(CANVAS_WIDTH - 550 + 27, -240, RED_STICK, -335, -130, [{
            y1: 317,
            y2: 357
        }, {
            y1: 630,
            y2: 670
        }], DEFENDER, CPU_SPEED_STICKS);
        m[MIDFIELDER] =
            new CStick(CANVAS_WIDTH - 920 + 40, -165, RED_STICK, -190, -130, [{
                y1: 248,
                y2: 287
            }, {
                y1: 402,
                y2: 440
            }, {
                y1: 555,
                y2: 592
            }, {
                y1: 709,
                y2: 748
            }], MIDFIELDER, CPU_SPEED_STICKS);
        m[STRIKER] = new CStick(CANVAS_WIDTH - 1300 + 75, -237, RED_STICK, -320, -155, [{
            y1: 300,
            y2: 338
        }, {
            y1: 485,
            y2: 523
        }, {
            y1: 665,
            y2: 703
        }], STRIKER, CPU_SPEED_STICKS);
        H = [h[GOALKEEPER], h[DEFENDER], h[MIDFIELDER], m[STRIKER]];
        I = [m[GOALKEEPER], m[DEFENDER], m[MIDFIELDER], h[STRIKER]];
        v = [m[GOALKEEPER].getX(), m[DEFENDER].getX(), m[MIDFIELDER].getX(), m[STRIKER].getX()];
        a = s_oSpriteLibrary.getSprite("arena");
        A = new createBitmap(a, a.width, a.height);
        A.x = l[HORIZONTAL_LINE_UP].getPointA().getX() - 87;
        A.y = l[HORIZONTAL_LINE_UP].getPointA().getY() - 75;
        A.cache(0, 0, a.width, a.height);
        s_oStage.addChild(A);
        n = new CScoreRod(POINTS_TO_WIN);
        x = new createjs.Shape;
        x.graphics.beginFill("#F00").drawRect(A.x + 10, A.y, 1456, 720);
        x.alpha = .01;
        s_oStage.addChild(x);
        f.getObject().mask = x;
        d.setOnTop();
        s_bMobile ? d.initMobileButtons() : (document.onkeydown = this.keyDownKeyBoard, document.onkeyup = this.keyUpKeyBoard);
        a = s_oSpriteLibrary.getSprite("but_kickoff");
        C = new CGfxButton(.5 * CANVAS_WIDTH, .5 * CANVAS_HEIGHT + 300, a, s_oStage);
        C.pulseAnimation();
        C.addEventListener(ON_MOUSE_DOWN, this.onMouseDown, this);
        !0 !== s_b2Players || s_bMobile || !0 !== s_bFirstMultiPlayer || (s_bFirstPlay = s_bFirstMultiPlayer = !1, new CPanelTutorial);
        !0 === s_bFirstPlay && (s_bFirstPlay = !1, new CPanelTutorial)
    };
    this.keyUpKeyBoard = function(a) {
        a || (a = window.event);
        a.preventDefault();
        switch (a.keyCode) {
            case 87:
                p = !1;
                break;
            case 83:
                k = !1;
                break;
            case 38:
                r = !1;
                break;
            case 40:
                q = !1
        }
    };
    this.keyDownKeyBoard = function(a) {
        a ||
            (a = window.event);
        a.preventDefault();
        switch (a.keyCode) {
            case 87:
                p = !0;
                break;
            case 83:
                k = !0;
                break;
            case 38:
                r = !0;
                break;
            case 40:
                q = !0;
                break;
            case 32:
                if (32 === event.keyCode && F && !1 === w) e.onMouseDown()
        }
        a.preventDefault()
    };
    this.AICpu = function(a, b) {
        var c = getNearestNumber(v, a.getX());
        if (c === GOALKEEPER) {
            if (!1 === fixEnemyTremble(a, b[GOALKEEPER].getEdges()[0].getModel()))
                if (a.getY() > b[GOALKEEPER].getEdges()[0].getModel().m_pCenter().getY())
                    for (c = 0; c < b.length; c++) b[c].onKeyDown();
                else
                    for (c = 0; c < b.length; c++) b[c].onKeyUp()
        } else if (c ===
            DEFENDER) {
            if (c = [b[DEFENDER].getEdges()[0].getModel().m_pCenter().getY(), b[DEFENDER].getEdges()[1].getModel().m_pCenter().getY()], c = getNearestNumber(c, a.getY()), !1 === fixEnemyTremble(a, b[DEFENDER].getEdges()[c].getModel()))
                if (a.getY() - a.getHalfRadius() > b[DEFENDER].getEdges()[c].getModel().m_pCenter().getY())
                    for (c = 0; c < b.length; c++) b[c].onKeyDown();
                else
                    for (c = 0; c < b.length; c++) b[c].onKeyUp()
        } else if (c === MIDFIELDER) {
            if (c = [b[MIDFIELDER].getEdges()[0].getModel().m_pCenter().getY(), b[MIDFIELDER].getEdges()[1].getModel().m_pCenter().getY(),
                b[MIDFIELDER].getEdges()[2].getModel().m_pCenter().getY(), b[MIDFIELDER].getEdges()[3].getModel().m_pCenter().getY()
            ], c = getNearestNumber(c, a.getY()), !1 === fixEnemyTremble(a, b[MIDFIELDER].getEdges()[c].getModel()))
                if (a.getY() > b[MIDFIELDER].getEdges()[c].getModel().m_pCenter().getY())
                    for (c = 0; c < b.length; c++) b[c].onKeyDown();
                else
                    for (c = 0; c < b.length; c++) b[c].onKeyUp()
        } else if (c === STRIKER && (c = [b[STRIKER].getEdges()[0].getModel().m_pCenter().getY(), b[STRIKER].getEdges()[1].getModel().m_pCenter().getY(), b[STRIKER].getEdges()[2].getModel().m_pCenter().getY()],
            c = getNearestNumber(c, a.getY()), !1 === fixEnemyTremble(a, b[STRIKER].getEdges()[c].getModel())))
            if (0 === c)
                if (a.getY() - a.getHalfRadius() > b[STRIKER].getEdges()[c].getModel().getPointB().getY())
                    for (c = 0; c < b.length; c++) b[c].onKeyDown();
                else
                    for (c = 0; c < b.length; c++) b[c].onKeyUp();
        else if (2 === c)
            if (a.getY() - a.getHalfRadius() > b[STRIKER].getEdges()[c].getModel().getPointA().getY())
                for (c = 0; c < b.length; c++) b[c].onKeyDown();
            else
                for (c = 0; c < b.length; c++) b[c].onKeyUp();
        else if (a.getY() > b[STRIKER].getEdges()[c].getModel().m_pCenter().getY())
            for (c =
                0; c < b.length; c++) b[c].onKeyDown();
        else
            for (c = 0; c < b.length; c++) b[c].onKeyUp()
    };
    this.setBooleanUp1 = function(a) {
        p = a
    };
    this.setBooleanDown1 = function(a) {
        k = a
    };
    this.setBooleanUp2 = function(a) {
        r = a
    };
    this.setBooleanDown2 = function(a) {
        q = a
    };
    this.onMouseDown = function() {
        C.setVisible(!1);
        F = !1;
        playSound("whistle");
        var a = new CVector2(randomFloatBetween(.05, .1) * randomSign(), -1);
        a.normalize();
        a.scalarProduct(BALL_START_VELOCITY);
        f.vCurForce().setV(a);
        f.setVisible(!0);
        f.scale(1.4);
        setTimeout(function() {
            f.scale(1)
        }, 400);
        w = !1;
        D = !0;
        setTimeout(function() {
            playSound("ball_wall")
        }, 250)
    };
    this.collideCircleWithEdges = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = collideEdgeWithCircle(b[c], a.vPos(), a.getRadius());
            if (d) {
                playSound("ball_wall");
                var e = new CVector2;
                e.setV(b[c].getNormal());
                e.scalarProduct(1.05 * a.getRadius());
                d.closest_point.addV(e);
                a.setPos(d.closest_point);
                reflectVectorV2(a.vCurForce(), b[c].getNormal());
                break
            }
        }
    };
    this.onField = function(a) {
        var b = new CVector2;
        b.set(a.stageX / s_iScaleFactor, a.stageY / s_iScaleFactor);
        b.subtract(f.vPos());
        b.normalize();
        b.scalarProduct(1);
        f.vCurForce().setV(b)
    };
    this.unload = function() {
        d.unload();
        null !== g && g.unload();
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren()
    };
    this.onExit = function() {
        $(s_oMain).trigger("end_session");
        s_oGame.unload();
        s_oMain.gotoMenu()
    };
    this._onExitHelp = function() {
        $(s_oMain).trigger("start_level", 1)
    };
    this.gameOver = function(a) {
        g = CEndPanel(s_oSpriteLibrary.getSprite("msg_box"), a);
        0 === a && (b = 100 * t, b -= 50 * u);
        s_bFriendly || saveItem("score_foosball_" + s_oLevelSettings.getCurrentLevel(),
            b);
        g.show(b, a)
    };
    this.collideBallWithPlayer = function(a, b) {
        for (var c = 0; c < b.length; c++)
            for (var d = b[c].getEdges(), e = 0; e < d.length; e++) {
                var g = d[e].getModel(),
                    f = collideEdgeWithCircle(g, a.vPos(), a.getRadius());
                if (f) {
                    var h = new CVector2;
                    h.setV(g.getNormal());
                    var m = randomFloatBetween(-.1, .1);
                    h.add(0, m);
                    var l = distance(f.closest_point, g.m_pCenter()),
                        k = .5 * g.getLength(),
                        m = 23 / PHYSICS_ITERATIONS,
                        p = 23 / PHYSICS_ITERATIONS,
                        n = new CVector2,
                        l = l / k,
                        k = 30 * l,
                        k = degreesToRadians(k);
                    f.closest_point.getY() > g.m_pCenter().getY() ? b[c].getColorStick() ===
                        BLUE_STICK ? h.rotate(-k) : h.rotate(+k) : b[c].getColorStick() === BLUE_STICK ? h.rotate(+k) : h.rotate(-k);
                    n.setV(h);
                    n.normalize();
                    n.scalarProduct((1 - l) * p + m);
                    a.vCurForce().setV(n);
                    b[c].onShot();
                    void 0 !== G && G.stop();
                    G = playSound("ball_kick", .6)
                }
            }
    };
    this.goalCheck = function() {
        1608 < f.getX() && (playSound("goal"), y = !1, t++, n.onGoalBlue(), d.refreshPlayersScore(t, u), this.showGoalText(0), t === POINTS_TO_WIN ? (setTimeout(function() {
                s_oGame.gameOver(0)
            }, TIME_GOAL_ANIMATION), !1 === s_bFriendly && s_iLastLevel < s_oLevelSettings.getNextLevel() &&
            saveItem("level_foosball", s_oLevelSettings.getNextLevel())) : (D = !1, setTimeout(this.afterGoal, 2E3)));
        309 > f.getX() && (playSound("goal"), y = !1, u++, n.onGoalRed(), d.refreshPlayersScore(t, u), this.showGoalText(1), u === POINTS_TO_WIN ? setTimeout(function() {
            s_oGame.gameOver(1)
        }, TIME_GOAL_ANIMATION) : (D = !1, setTimeout(this.afterGoal, TIME_GOAL_ANIMATION)))
    };
    this.showGoalText = function(a) {
        var b = new createjs.Shape;
        b.graphics.beginFill("#000000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        b.alpha = .01;
        b.on("mousedown", function() {},
            this);
        s_oStage.addChild(b);
        var c = {
                images: [s_oSpriteLibrary.getSprite("goal_text")],
                frames: {
                    width: 1654,
                    height: 300,
                    regX: 827,
                    regY: 150
                },
                animations: {
                    idle: [0, 1, "idle", .3]
                }
            },
            c = new createjs.SpriteSheet(c);
        B = new createjs.Sprite(c, "idle");
        B.x = .5 * CANVAS_WIDTH;
        B.y = .5 * CANVAS_HEIGHT;
        B.alpha = 0;
        B.scaleX = .3;
        B.scaleY = .3;
        s_oStage.addChild(B);
        0 === a || s_b2Players ? playSound("goal_exultance") : 1 !== a || s_b2Players || playSound("miss_goal");
        (new createjs.Tween.get(B)).to({
            scaleX: .8,
            scaleY: .8,
            alpha: 1
        }, 900, createjs.Ease.cubicOut).wait(1300).to({
            scaleX: 0,
            scaleY: 0,
            alpha: 0
        }, 300, createjs.Ease.cubicIn).call(function() {
            s_oStage.removeChild(B, b)
        })
    };
    this.afterGoal = function() {
        C.setVisible(!0);
        f.resetPos();
        F = !0;
        f.setVisible(!1);
        y = !0;
        D = !1
    };
    this.update = function() {
        if (!w) {
            if (c) {
                for (var a = 0; a < PHYSICS_ITERATIONS; a++) f.vPos().addV(f.vCurForce()), f.vPos().getX() < .5 * CANVAS_WIDTH ? this.collideBallWithPlayer(f, H) : this.collideBallWithPlayer(f, I), f.vPos().getY() > CANVAS_HEIGHT / 2 - 34 ? this.collideCircleWithEdges(f, K) : this.collideCircleWithEdges(f, J), f.rolls();
                E && f.vCurForce().scalarProduct(.99)
            }
            f.updateSpritePosition();
            y && this.goalCheck();
            if (D) {
                if (p)
                    for (a = 0; a < h.length; a++) h[a].onKeyUp();
                if (k)
                    for (a = 0; a < h.length; a++) h[a].onKeyDown();
                if (s_b2Players) {
                    if (q)
                        for (a = 0; a < m.length; a++) m[a].onKeyDown();
                    if (r)
                        for (a = 0; a < m.length; a++) m[a].onKeyUp()
                }
                s_b2Players || this.AICpu(f, m)
            }
            this.checkBallSlow()
        }
        for (a = 0; a < m.length; a++) h[a].update(), m[a].update()
    };
    this.checkBallSlow = function() {
        E = .4 > f.vCurForce().getX() + f.vCurForce().getY() && -.4 < f.vCurForce().getX() + f.vCurForce().getY() ? !1 : !0
    };
    this.setPause = function(a) {
        w = a
    };
    this.setInput = function(a) {
        D =
            a
    };
    s_oGame = this;
    POINTS_TO_LOSE = a.points_to_lose;
    START_SCORE = a.starting_points;
    AD_SHOW_COUNTER = a.ad_show_counter;
    e = this;
    this._init()
}
var s_oGame;

function CInterface() {
    var a, c, b, d, g, e, f, l, h, m, p, k, r, q, v, t, u = null,
        w, y = null,
        D = null,
        A, z, x, n, B, C, E, G, F, H, I, J, K;
    this._init = function() {
        v = new createjs.Container;
        w = !1;
        s_oStage.addChild(v);
        var n = s_oSpriteLibrary.getSprite("but_exit");
        h = CANVAS_WIDTH - n.height / 2 - 10;
        m = n.height / 2 + 10;
        q = new CGfxButton(h, m, n, v);
        q.addEventListener(ON_MOUSE_UP, this._onExit, this);
        a = CANVAS_WIDTH - n.width / 2 - 140;
        c = n.height / 2 + 10;
        n = s_oSpriteLibrary.getSprite("but_pause");
        K = new CGfxButton(a, c, n, v);
        K.addEventListener(ON_MOUSE_UP, function() {
                new CPause
            },
            this);
        f = a - n.width - 10;
        l = c;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) n = s_oSpriteLibrary.getSprite("audio_icon"), r = new CToggle(f, l, n, s_bAudioActive, v), r.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        var x = window.document,
            u = x.documentElement;
        y = u.requestFullscreen || u.mozRequestFullScreen || u.webkitRequestFullScreen || u.msRequestFullscreen;
        D = x.exitFullscreen || x.mozCancelFullScreen || x.webkitExitFullscreen || x.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (y = !1);
        y && !inIframe() ? (n = s_oSpriteLibrary.getSprite("but_fullscreen"),
            g = n.width / 4 + 10, e = n.height / 2 + 10, b = g + n.width / 2 + 10, d = e, t = new CToggle(g, e, n, s_bFullscreen, v), t.addEventListener(ON_MOUSE_UP, this._onFullscreen, this)) : (b = n.width / 4 + 10, d = n.height / 2 + 10);
        n = s_oSpriteLibrary.getSprite("but_help");
        J = new CGfxButton(b, d, n, v);
        J.addEventListener(ON_MOUSE_UP, function() {
            new CPanelTutorial
        }, this);
        p = CANVAS_WIDTH / 2;
        k = 83;
        A = new createjs.Container;
        v.addChild(A);
        n = s_oSpriteLibrary.getSprite("score_panel");
        x = new createBitmap(n, n.width, n.height);
        x.regX = n.width / 2;
        x.regY = n.height / 2;
        A.x = p;
        A.y =
            k;
        H = new createjs.Text(0, " 50px " + PRIMARY_FONT, "#000000");
        H.textAlign = "center";
        H.x = -50;
        H.y = 27;
        H.textBaseline = "alphabetic";
        I = new createjs.Text(0, " 50px " + PRIMARY_FONT, "#000000");
        I.textAlign = "center";
        I.x = 50;
        I.y = 27;
        I.textBaseline = "alphabetic";
        A.addChild(x, H, I);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function() {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) r.unload(), r = null;
        q.unload();
        s_oStage.removeChild(v);
        y && !inIframe() && t.unload();
        s_oInterface = null
    };
    this.refreshPlayersScore = function(a,
        b) {
        H.text = a;
        I.text = b
    };
    this.initMobileButtons = function() {
        w = !0;
        C;
        E;
        G;
        F;
        var a = s_oSpriteLibrary.getSprite("arrow");
        s_b2Players ? (C = {
                x: CANVAS_WIDTH / 2 - 800,
                y: CANVAS_HEIGHT / 2 + 240
            }, E = {
                x: CANVAS_WIDTH / 2 - 800,
                y: CANVAS_HEIGHT / 2 + 450
            }, G = {
                x: CANVAS_WIDTH / 2 + 800,
                y: CANVAS_HEIGHT / 2 + 240
            }, F = {
                x: CANVAS_WIDTH / 2 + 800,
                y: CANVAS_HEIGHT / 2 + 450
            }, z = new CGfxButton(C.x, C.y, a, v), z.setMuted(!0), x = new CGfxButton(E.x, E.y, a, v), x.setMuted(!0), n = new CGfxButton(G.x, G.y, a, v), n.setMuted(!0), B = new CGfxButton(F.x, F.y, a, v), B.setMuted(!0), x.getButtonImage().rotation =
            180, B.getButtonImage().rotation = 180, n.addEventListener(ON_MOUSE_DOWN, function() {
                s_oGame.setBooleanUp2(!0)
            }, this), n.addEventListener(ON_MOUSE_UP, function() {
                s_oGame.setBooleanUp2(!1)
            }, this), B.addEventListener(ON_MOUSE_DOWN, function() {
                s_oGame.setBooleanDown2(!0)
            }, this), B.addEventListener(ON_MOUSE_UP, function() {
                s_oGame.setBooleanDown2(!1)
            }, this)) : (C = {
            x: CANVAS_WIDTH / 2 - 800,
            y: CANVAS_HEIGHT / 2 + 240
        }, E = {
            x: CANVAS_WIDTH / 2 - 800,
            y: CANVAS_HEIGHT / 2 + 450
        }, z = new CGfxButton(C.x, C.y, a, v), z.setMuted(!0), x = new CGfxButton(E.x,
            E.y, a, v), x.setMuted(!0), x.getButtonImage().rotation = 180);
        z.addEventListener(ON_MOUSE_DOWN, function() {
            s_oGame.setBooleanUp1(!0)
        }, this);
        z.addEventListener(ON_MOUSE_UP, function() {
            s_oGame.setBooleanUp1(!1)
        }, this);
        x.addEventListener(ON_MOUSE_DOWN, function() {
            s_oGame.setBooleanDown1(!0)
        }, this);
        x.addEventListener(ON_MOUSE_UP, function() {
            s_oGame.setBooleanDown1(!1)
        }, this);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(p, u) {
        A.y = k + u;
        J.setPosition(b + p, d + u);
        q.setPosition(h - p, u + m);
        K.setPosition(a - p, u + c);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || r.setPosition(f - p, u + l);
        y && !inIframe() && t.setPosition(g + p, e + u);
        s_bMobile && w && (s_b2Players ? (z.setPosition(C.x + p, C.y - u), x.setPosition(E.x + p, E.y - u), n.setPosition(G.x - p, G.y - u), B.setPosition(F.x - p, F.y - u)) : (z.setPosition(C.x + p, C.y - u), x.setPosition(E.x + p, E.y - u)))
    };
    this.setOnTop = function() {
        s_oStage.addChildAt(v, s_oStage.numChildren)
    };
    this.refreshScore = function(a) {};
    this._onButHelpRelease = function() {
        u = new CHelpPanel
    };
    this._onButRestartRelease =
        function() {
            s_oGame.restartGame();
            $(s_oMain).trigger("restart_level", 1)
        };
    this.onExitFromHelp = function() {
        u.unload()
    };
    this._onAudioToggle = function() {
        createjs.Sound.setMute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        new CAreYouSurePanel(s_oGame.onExit)
    };
    this._onFullscreen = function() {
        s_bFullscreen ? (D.call(window.document), s_bFullscreen = !1) : (y.call(window.document.documentElement), s_bFullscreen = !0);
        sizeHandler()
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;

function CHelpPanel() {
    var a, c, b, d, g, e, f;
    this._init = function() {
        var f = this;
        g = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        var h = CANVAS_WIDTH / 2,
            m = CANVAS_HEIGHT / 2 - 200;
        c = new createjs.Text(TEXT_HELP1, " 24px Arial", "#000000");
        c.x = h + 2;
        c.y = m + 2;
        c.textAlign = "center";
        c.textBaseline = "alphabetic";
        c.lineWidth = 400;
        a = new createjs.Text(TEXT_HELP1, " 24px Arial", "#ffffff");
        a.x = h;
        a.y = m;
        a.textAlign = "center";
        a.textBaseline = "alphabetic";
        a.lineWidth = 400;
        h = CANVAS_WIDTH / 2 - 130;
        m = CANVAS_HEIGHT / 2 - 40;
        d = new createjs.Text(TEXT_HELP2,
            " 24px Arial", "#000000");
        d.x = h + 2;
        d.y = m + 2;
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.lineWidth = 280;
        b = new createjs.Text(TEXT_HELP2, " 24px Arial", "#ffffff");
        b.x = h;
        b.y = m;
        b.textAlign = "center";
        b.textBaseline = "alphabetic";
        b.lineWidth = 280;
        e = new createjs.Container;
        e.addChild(g, c, a, d, b);
        e.alpha = 0;
        s_oStage.addChild(e);
        createjs.Tween.get(e).to({
            alpha: 1
        }, 700);
        e.on("pressup", function() {
            f._onExitHelp()
        })
    };
    this.unload = function() {
        s_oStage.removeChild(e);
        var a = this;
        e.off("pressup", function() {
            a._onExitHelp()
        })
    };
    this._onExitHelp = function() {
        f.unload();
        s_oGame._onExitHelp()
    };
    f = this;
    this._init()
}

function CCreditsPanel() {
    var a, c, b, d, g;
    this._init = function() {
        c = new createjs.Shape;
        c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c.alpha = 0;
        c.on("mousedown", function() {});
        s_oStage.addChild(c);
        (new createjs.Tween.get(c)).to({
            alpha: .7
        }, 500);
        b = new createjs.Container;
        s_oStage.addChild(b);
        var e = s_oSpriteLibrary.getSprite("msg_box"),
            f = createBitmap(e);
        f.regX = e.width / 2;
        f.regY = e.height / 2;
        b.addChild(f);
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT + e.height / 2;
        a = b.y;
        (new createjs.Tween.get(b)).to({
            y: CANVAS_HEIGHT /
                2 - 40
        }, 500, createjs.Ease.quartIn);
        f = new createjs.Text("DEVELOPED BY", " 40px " + PRIMARY_FONT, "#ffffff");
        f.y = -e.height / 2 + 170;
        f.textAlign = "center";
        f.textBaseline = "middle";
        f.lineWidth = 300;
        b.addChild(f);
        e = new createjs.Text("www.codethislab.com", " 40px " + PRIMARY_FONT, "#ffffff");
        e.y = 100;
        e.textAlign = "center";
        e.textBaseline = "middle";
        e.lineWidth = 300;
        b.addChild(e);
        e = s_oSpriteLibrary.getSprite("ctl_logo");
        g = createBitmap(e);
        g.on("mousedown", this._onLogoButRelease);
        g.regX = e.width / 2;
        g.regY = e.height / 2;
        b.addChild(g);
        g.on("mouseover", this.changePointer, this);
        e = s_oSpriteLibrary.getSprite("but_exit");
        d = new CGfxButton(341, -195, e, b);
        d.addEventListener(ON_MOUSE_UP, this.unload, this)
    };
    this.changePointer = function(a) {
        !1 === s_bMobile && (a.target.cursor = "pointer")
    };
    this.unload = function() {
        d.setClickable(!1);
        (new createjs.Tween.get(c)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(b)).to({
            y: a
        }, 400, createjs.Ease.backIn).call(function() {
            s_oStage.removeChild(c);
            s_oStage.removeChild(b);
            d.unload()
        });
        c.off("mousedown", function() {});
        g.off("mousedown",
            this._onLogoButRelease)
    };
    this._onLogoButRelease = function() {
        
    };
    this._onMoreGamesReleased = function() {
        
    };
    this._init()
}

function CAreYouSurePanel(a) {
    var c, b, d, g, e, f;
    this._init = function(a) {
        s_oGame.setPause(!0);
        g = new createjs.Shape;
        g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.alpha = 0;
        g.on("mousedown", function() {});
        s_oStage.addChild(g);
        (new createjs.Tween.get(g)).to({
            alpha: .7
        }, 500);
        e = new createjs.Container;
        s_oStage.addChild(e);
        a = s_oSpriteLibrary.getSprite("msg_box");
        var f = createBitmap(a);
        f.regX = a.width / 2;
        f.regY = a.height / 2;
        e.addChild(f);
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT + a.height / 2;
        c = e.y;
        (new createjs.Tween.get(e)).to({
            y: CANVAS_HEIGHT / 2 - 40
        }, 500, createjs.Ease.quartIn);
        f = new createjs.Text(TEXT_ARE_SURE, " 54px " + PRIMARY_FONT, "#000000");
        f.y = -a.height / 2 + 120;
        f.textAlign = "center";
        f.textBaseline = "middle";
        f.lineWidth = 400;
        f.outline = 5;
        e.addChild(f);
        a = new createjs.Text(TEXT_ARE_SURE, " 54px " + PRIMARY_FONT, "#FFFFFF");
        a.y = f.y;
        a.textAlign = "center";
        a.textBaseline = "middle";
        a.lineWidth = 400;
        e.addChild(a);
        b = new CGfxButton(110, 130, s_oSpriteLibrary.getSprite("but_yes_big"), e);
        b.addEventListener(ON_MOUSE_UP,
            this._onButYes, this);
        d = new CGfxButton(-110, 130, s_oSpriteLibrary.getSprite("but_exit"), e);
        d.addEventListener(ON_MOUSE_UP, this._onButNo, this);
        d.pulseAnimation()
    };
    this._onButYes = function() {
        d.setClickable(!1);
        b.setClickable(!1);
        (new createjs.Tween.get(g)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(e)).to({
            y: c
        }, 400, createjs.Ease.backIn).call(function() {
            f.unload();
            a()
        })
    };
    this._onButNo = function() {
        d.setClickable(!1);
        b.setClickable(!1);
        (new createjs.Tween.get(g)).to({
            alpha: 0
        }, 500);
        (new createjs.Tween.get(e)).to({
                y: c
            },
            400, createjs.Ease.backIn).call(function() {
            f.unload();
            s_oGame.setPause(!1)
        })
    };
    this.unload = function() {
        d.unload();
        b.unload();
        s_oStage.removeChild(g);
        s_oStage.removeChild(e);
        g.off("mousedown", function() {})
    };
    f = this;
    this._init(a)
}

function CEndPanel(a, c) {
    var b, d, g, e, f, l, h, m, p, k, r, q, v;
    this._init = function(a, c) {
        s_oGame.setPause(!0);
        r = c;
        var h = new createjs.Shape;
        h.graphics.beginFill("#000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.alpha = .5;
        h.on("mousedown", this.onMouseDown, this);
        b = createBitmap(a);
        var q = b.getBounds();
        b.regX = q.width / 2;
        b.regY = q.height / 2;
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        g = new createjs.Text("", " 52px " + PRIMARY_FONT, "#000");
        g.x = CANVAS_WIDTH / 2 + 1;
        g.y = CANVAS_HEIGHT / 2 - 140;
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        g.lineWidth = 550;
        e = new createjs.Text("", " 52px " + PRIMARY_FONT, "#ffffff");
        e.x = CANVAS_WIDTH / 2;
        e.y = !0 === s_bFriendly ? CANVAS_HEIGHT / 2 - 108 : CANVAS_HEIGHT / 2 - 138;
        e.textAlign = "center";
        e.textBaseline = "alphabetic";
        e.lineWidth = 550;
        f = new createjs.Text("", " 37px " + PRIMARY_FONT, "#000");
        f.x = CANVAS_WIDTH / 2 + 1;
        f.y = CANVAS_HEIGHT / 2 + 30;
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        f.lineWidth = 550;
        l = new createjs.Text("", " 37px " + PRIMARY_FONT, "#ffffff");
        l.x = CANVAS_WIDTH / 2;
        l.y = CANVAS_HEIGHT / 2 + 28;
        l.textAlign = "center";
        l.textBaseline =
            "alphabetic";
        l.lineWidth = 550;
        d = new createjs.Container;
        d.alpha = 0;
        d.visible = !1;
        d.addChild(h, b, f, l, g, e);
        s_oStage.addChild(d);
        h = s_oSpriteLibrary.getSprite("but_restart");
        m = new CGfxButton(CANVAS_WIDTH / 2 + 100, CANVAS_HEIGHT / 2 + 150, h, d);
        h = s_oSpriteLibrary.getSprite("but_home");
        p = new CGfxButton(CANVAS_WIDTH / 2 - 100, CANVAS_HEIGHT / 2 + 150, h, d);
        !1 !== s_bFriendly || s_oLevelSettings.getCurrentLevel() === s_oLevelSettings.getNumLevel() - 1 || 0 !== r && s_oLevelSettings.getCurrentLevel() >= s_iLastLevel - 1 || (m.setX(CANVAS_WIDTH / 2),
            p.setX(m.getX() - 200), h = s_oSpriteLibrary.getSprite("but_next"), k = new CGfxButton(CANVAS_WIDTH / 2 + 200, CANVAS_HEIGHT / 2 + 150, h, d), k.addEventListener(ON_MOUSE_DOWN, this.onButNext, this))
    };
    this.onButNext = function() {
        q.stop();
        s_oGame.unload();
        s_oLevelSettings.nextLevel();
        s_oMain.gotoGame();
        s_oStage.removeChild(d);
        if (!s_bFriendly) {
            var a = "You collected <strong>" + h + " points</strong>!<br><br>Share your score with your friends!",
                b = "My score is " + h + " points! Can you do better?";
            $(s_oMain).trigger("share_event", h, "200x200.jpg",
                "Congratulations!", a, b)
        }
    };
    this.unload = function() {};
    this.onMouseDown = function() {};
    this._initListener = function() {
        p.addEventListener(ON_MOUSE_DOWN, this._onExit, this);
        m.addEventListener(ON_MOUSE_DOWN, this._onRestart, this)
    };
    this.show = function(a, b) {
        v = 0;
        q = 0 === b || s_b2Players ? playSound("applause") : playSound("game_over");
        h = a;
        var c = b + 1;
        0 === b ? (g.text = TEXT_GAMEOVER, e.text = TEXT_GAMEOVER) : (h = a = 0, g.text = TEXT_LOSE + c + TEXT_LOSE2, e.text = TEXT_LOSE + c + TEXT_LOSE2);
        !0 === s_b2Players && (g.text = TEXT_WIN_2PLAYERS + c + TEXT_WIN_2PLAYERS_2,
            e.text = TEXT_WIN_2PLAYERS + c + TEXT_WIN_2PLAYERS_2);
        s_bFriendly || ($(s_oMain).trigger("end_level", s_oLevelSettings.getCurrentLevel()), f.text = TEXT_SCORE + ": " + a, l.text = TEXT_SCORE + ": " + a);
        d.visible = !0;
        var m = this;
        createjs.Tween.get(d).to({
            alpha: 1
        }, 500).call(function() {
            m._initListener()
        });
        for (c = 0; c < s_oLevelSettings.getNumLevel(); c++) null !== getItem("score_foosball_" + c) && null !== getItem("score_foosball_" + c) && 0 !== getItem("score_foosball_" + c) && (v += parseInt(getItem("score_foosball_" + c)));
        s_bFriendly || ($(s_oMain).trigger("save_score",
            v), $(s_oMain).trigger("show_interlevel_ad"), $(s_oMain).trigger("end_session"))
    };
    this._onExit = function() {
        q.stop();
        if (!s_bFriendly) {
            var a = "You collected <strong>" + h + " points</strong>!<br><br>Share your score with your friends!",
                b = "My score is " + h + " points! Can you do better?";
            $(s_oMain).trigger("share_event", h, "200x200.jpg", "Congratulations!", a, b)
        }
        d.off("mousedown", this._onExit);
        s_oStage.removeChild(d);
        s_oGame.unload();
        s_oMain.gotoMenu()
    };
    this._onRestart = function() {
        q.stop();
        s_oGame.unload();
        s_oMain.gotoGame();
        s_oStage.removeChild(d);
        if (!s_bFriendly) {
            var a = "You collected <strong>" + h + " points</strong>!<br><br>Share your score with your friends!",
                b = "My score is " + h + " points! Can you do better?";
            $(s_oMain).trigger("share_event", h, "200x200.jpg", "Congratulations!", a, b)
        }
    };
    this._init(a, c);
    return this
}

function CEdgeModel(a, c, b, d) {
    var g = null,
        e = null,
        f = null,
        l = null,
        h = null;
    this._init = function(a, b, c, d) {
        this.set(a, b, c, d)
    };
    this.destroy = function() {
        h = l = f = e = g = null
    };
    this.render = function(a) {
        a.moveTo(g.x, g.y);
        a.lineTo(e.x, e.y)
    };
    this.toString = function(a) {
        trace(a + " " + g.x + " " + g.y + " " + e.x + " " + e.y)
    };
    this.add = function(a) {
        g.addV(a);
        e.addV(a)
    };
    this.set = function(a, b, c, d) {
        g = new CVector2;
        e = new CVector2;
        g.set(a, b);
        e.set(c, d);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.moveY = function(a) {
        g.add(0, a);
        e.add(0, a);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.scale = function(a) {
        g.scalarProduct(a);
        e.scalarProduct(a);
        this.calculateNormal();
        this.calculateCenter()
    };
    this.calculateNormal = function() {
        h = null;
        h = new CVector2;
        h.setV(e);
        h.subtract(g);
        h.rot90CCW();
        h.normalize()
    };
    this.calculateCenter = function() {
        f = null;
        f = centerBetweenPointsV2(g, e);
        l = new CVector2;
        l.setV(h);
        l.scalarProduct(5);
        l.addV(f)
    };
    this.getPointA = function() {
        return g
    };
    this.m_pCenter = function() {
        return f
    };
    this.getPointB = function() {
        return e
    };
    this.getNormal = function() {
        return h
    };
    this.renderNormal = function(a) {
        a.moveTo(f.x, f.y);
        a.lineTo(l.x, l.y)
    };
    this.getLength = function() {
        return Math.sqrt(Math.pow(b - a, 2) + Math.pow(d - c, 2))
    };
    this._init(a, c, b, d);
    return this
}

function CEdgeViewer(a, c, b, d, g, e) {
    var f;
    this.init = function(a, b, c, d, e, g) {
        a = a > c || b > d ? b === d ? (new createjs.Graphics).beginFill("#000").drawRect(c, d, e, g) : (new createjs.Graphics).beginFill("#000").drawRect(c, d, g, e) : b === d ? (new createjs.Graphics).beginFill("#000").drawRect(a, b, e, g) : (new createjs.Graphics).beginFill("#000").drawRect(a, b, g, e);
        f = new createjs.Shape(a);
        f.y = -g / 2;
        s_oStage.addChild(f)
    };
    this.moveY = function(a) {
        f.y += a
    };
    this.init(a, c, b, d, g, e)
}

function CEdge(a, c, b, d, g, e) {
    var f, l;
    this.init = function(a, b, c, d, g) {
        var h;
        f = new CEdgeModel(a, b, c, d);
        h = f.getLength();
        e && (l = new CEdgeViewer(a, b, c, d, h, g))
    };
    this.getModel = function() {
        return f
    };
    this.moveY = function(a) {
        e && l.moveY(a);
        f.moveY(a)
    };
    this.init(a, c, b, d, g)
}

function CVector2(a, c) {
    var b, d;
    this._init = function(a, c) {
        b = a;
        d = c
    };
    this.add = function(a, c) {
        b += a;
        d += c
    };
    this.addV = function(a) {
        b += a.getX();
        d += a.getY()
    };
    this.scalarDivision = function(a) {
        b /= a;
        d /= a
    };
    this.subtract = function(a) {
        b -= a.getX();
        d -= a.getY()
    };
    this.scalarProduct = function(a) {
        b *= a;
        d *= a
    };
    this.invert = function() {
        b *= -1;
        d *= -1
    };
    this.dotProduct = function(a) {
        return b * a.getX() + d * a.getY()
    };
    this.set = function(a, c) {
        b = a;
        d = c
    };
    this.setV = function(a) {
        b = a.getX();
        d = a.getY()
    };
    this.length = function() {
        return Math.sqrt(b * b + d * d)
    };
    this.length2 = function() {
        return b * b + d * d
    };
    this.normalize = function() {
        var a = this.length();
        0 < a && (b /= a, d /= a)
    };
    this.angleBetweenVectors = function(a) {
        a = Math.acos(this.dotProduct(a) / (this.length() * a.length()));
        return !0 === isNaN(a) ? 0 : a
    };
    this.getNormalize = function(a) {
        this.length();
        a.set(b, d);
        a.normalize()
    };
    this.rot90CCW = function() {
        var a = b;
        b = -d;
        d = a
    };
    this.rot90CW = function() {
        var a = b;
        b = d;
        d = -a
    };
    this.getRotCCW = function(a) {
        a.set(b, d);
        a.rot90CCW()
    };
    this.getRotCW = function(a) {
        a.set(b, d);
        a.rot90CW()
    };
    this.ceil = function() {
        b =
            Math.ceil(b);
        d = Math.ceil(d)
    };
    this.round = function() {
        b = Math.round(b);
        d = Math.round(d)
    };
    this.toString = function() {
        return "Vector2: " + b + ", " + d
    };
    this.print = function() {
        trace("Vector2: " + b + ", " + d + "")
    };
    this.getX = function() {
        return b
    };
    this.getY = function() {
        return d
    };
    this.rotate = function(a) {
        var c = b,
            f = d;
        b = c * Math.cos(a) + f * Math.sin(a);
        d = c * -Math.sin(a) + f * Math.cos(a)
    };
    this._init(a, c)
}

function CBall(a, c, b, d, g) {
    var e, f, l, h, m, p, k, r, q, v, t, u, w, y = 0;
    this._init = function(a, b, c, d) {
        h = new createjs.Container;
        h.x = a;
        h.y = b;
        this.createShadow();
        var g = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 7,
                height: c.height,
                regX: c.width / 2 / 7,
                regY: c.height / 2
            }
        });
        m = createSprite(g, 0, c.width / 2 / 7, c.height / 2, c.width / 7, c.height / 2);
        m.stop();
        h.addChild(m);
        k = new CVector2;
        k.set(h.x, h.y);
        r = new CVector2;
        r.set(0, 0);
        v = d;
        e = a;
        f = b;
        t = .5 * c.width / 7;
        u = .5 * t;
        w = t * t;
        q = new CVector2(0, 0);
        l.addChild(h)
    };
    this.createShadow =
        function() {
            var a = s_oSpriteLibrary.getSprite("player_shadow");
            p = createBitmap(a);
            p.regX = .5 * a.width;
            p.regY = -7;
            p.y = -15;
            p.x = -5;
            p.alpha = .5;
            h.addChild(p)
        };
    this.unload = function() {
        l.removeChild(h)
    };
    this.setVisible = function(a) {
        h.visible = a
    };
    this.setPosition = function(a, b) {
        h.x = a;
        h.y = b
    };
    this.resetPos = function() {
        h.x = e;
        h.y = f;
        k.set(h.x, h.y);
        q.set(0, 0)
    };
    this.setAngle = function(a) {
        m.rotation = a
    };
    this.getHalfRadius = function() {
        return u
    };
    this.getX = function() {
        return h.x
    };
    this.getY = function() {
        return h.y
    };
    this.scale = function(a) {
        h.scaleX =
            a;
        h.scaleY = a
    };
    this.getScale = function() {
        return h.scaleX
    };
    this.type = function() {
        return BALL
    };
    this.vCurForce = function() {
        return q
    };
    this.vPos = function() {
        return k
    };
    this.setPos = function(a) {
        k.setV(a)
    };
    this.vPrevPos = function() {
        return r
    };
    this.getRadius = function() {
        return t
    };
    this.getRadiusQuadro = function() {
        return w
    };
    this.updateSpritePosition = function() {
        h.x = k.getX();
        h.y = k.getY()
    };
    this.isGoalKeeper = function() {
        return !1
    };
    this.getID = function() {
        return v
    };
    this.rolls = function() {
        var a = q.length2() * BALL_SPRITE_ANIM_MULTIPLIER;
        .1 < a && (a = .1);
        y += a;
        7 < y && (y -= 7);
        m.gotoAndStop(Math.round(y));
        0 > q.getY() ? (a = new CVector2(-1, 0), m.rotation = radiansToDegree(a.angleBetweenVectors(q)) - 90) : (a = new CVector2(1, 0), m.rotation = radiansToDegree(a.angleBetweenVectors(q)) + 90)
    };
    this.getChildIndex = function() {
        l.getChildIndex(h)
    };
    this.setChildIndex = function(a) {
        l.setChildIndex(h, a)
    };
    this.getObject = function() {
        return h
    };
    l = g;
    this._init(a, c, b, d);
    return this
}

function CSelectPlayers() {
    var a, c, b, d, g, e, f, l, h, m, p, k, r, q = null,
        v = null;
    this.init = function() {
        s_oSelectPlayers = this;
        f = new createjs.Container;
        s_oStage.addChild(f);
        var t = s_oSpriteLibrary.getSprite("bg_menu"),
            u = new createjs.Shape;
        u.graphics.beginFill("#000000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        u.alpha = .7;
        t = new createBitmap(t, t.width, t.height);
        f.addChild(t);
        f.addChild(u);
        t = s_oSpriteLibrary.getSprite("but_p1");
        l = new CGfxButton(CANVAS_WIDTH / 2 - 225, CANVAS_HEIGHT / 2, t, f);
        l.addEventListener(ON_MOUSE_DOWN,
            function() {
                this.onSelectPlayer(!1)
            }, this);
        t = s_oSpriteLibrary.getSprite("but_p2");
        h = new CGfxButton(CANVAS_WIDTH / 2 + 225, CANVAS_HEIGHT / 2, t, f);
        h.addEventListener(ON_MOUSE_DOWN, function() {
            this.onSelectPlayer(!0)
        }, this);
        m = new createjs.Text(TEXT_SELECT_PLAYERS_MENU, "72px " + PRIMARY_FONT, "#FFFFFF");
        m.y = CANVAS_HEIGHT / 2 - 300;
        m.x = CANVAS_WIDTH / 2;
        m.textAlign = "center";
        f.addChild(m);
        t = s_oSpriteLibrary.getSprite("but_exit");
        g = CANVAS_WIDTH - t.width / 2 - 10;
        e = t.height / 2 + 10;
        p = new CGfxButton(g, e, t, f);
        p.addEventListener(ON_MOUSE_UP,
            this._onExit, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) b = p.getX() - t.width - 10, d = t.height / 2 + 10, k = new CToggle(b, d, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive, f), k.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        u = window.document;
        t = u.documentElement;
        q = t.requestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen || t.msRequestFullscreen;
        v = u.exitFullscreen || u.mozCancelFullScreen || u.webkitExitFullscreen || u.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (q = !1);
        q && !1 === inIframe() &&
            (t = s_oSpriteLibrary.getSprite("but_fullscreen"), a = t.width / 4 + 10, c = t.height / 2 + 10, r = new CToggle(a, c, t, s_bFullscreen, f), r.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(f, h) {
        p.setPosition(g - f, e + h);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || k.setPosition(b - f, h + d);
        q && !1 === inIframe() && r.setPosition(a + f, c + h)
    };
    this.onSelectPlayer = function(a) {
        s_b2Players = a;
        this.unload();
        s_oMain.gotoGame()
    };
    this.unload = function() {
        s_oStage.removeChild(f);
        s_oSelectPlayers
    };
    this._onAudioToggle = function() {
        createjs.Sound.setMute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? (v.call(window.document), s_bFullscreen = !1) : (q.call(window.document.documentElement), s_bFullscreen = !0);
        sizeHandler()
    };
    this._onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    this.init()
}
var s_oSelectPlayers = null;

function CScoreRod(a) {
    var c, b, d, g, e, f, l, h;
    this.init = function(a) {
        g = a;
        10 < g && (g = 10);
        e = [];
        f = [];
        l = h = 0;
        c = new createjs.Container;
        s_oStage.addChild(c);
        a = s_oSpriteLibrary.getSprite("score_rod_blue");
        b = new createBitmap(a, a.width, a.height);
        b.x = CANVAS_WIDTH / 2 - 720;
        b.y = CANVAS_HEIGHT / 2 - 223;
        c.addChild(b);
        a = s_oSpriteLibrary.getSprite("score_rod_red");
        d = new createBitmap(a, a.width, a.height);
        d.x = CANVAS_WIDTH / 2 + 693;
        d.y = CANVAS_HEIGHT / 2 - 223;
        c.addChild(d);
        a = s_oSpriteLibrary.getSprite("score_cube_blue");
        for (var m = s_oSpriteLibrary.getSprite("score_cube_red"),
            k = 0; k < g; k++) e.push(new createBitmap(a, a.width, a.height)), e[k].x = b.x, f.push(new createBitmap(m, m.width, m.height)), f[k].x = d.x, 0 === k ? (e[k].y = b.y + a.height - 7, f[k].y = d.y + 307) : (e[k].y = e[k - 1].y + a.height - 8, f[k].y = f[k - 1].y - m.height + 9), c.addChild(e[k]);
        for (k = f.length; 0 <= k; k--) c.addChild(f[k])
    };
    this.onGoalBlue = function() {
        0 === h ? (new createjs.Tween.get(e[e.length - 1])).to({
            y: b.y + 307
        }, 1E3, createjs.Ease.cubicOut) : (new createjs.Tween.get(e[e.length - (1 + h)])).to({
            y: e[e.length - h].y - 25
        }, 1E3, createjs.Ease.cubicOut);
        h++
    };
    this.onGoalRed = function() {
        0 === l ? (new createjs.Tween.get(f[f.length - 1])).to({
            y: d.y + 33 - 8
        }, 1E3, createjs.Ease.cubicOut) : (new createjs.Tween.get(f[f.length - (1 + l)])).to({
            y: f[f.length - l].y + 33 - 8
        }, 1E3, createjs.Ease.cubicOut);
        l++
    };
    this.init(a)
}

function CLevelSettings(a) {
    var c, b, d;
    this.init = function(a) {
        b = 0;
        c = a;
        s_oLevelSettings = this;
        d = null === getItem("level_foosball") || "undefined" === getItem("level_foosball") ? 0 : getItem("level_foosball")
    };
    this.loadLevel = function(a) {
        b = a;
        POINTS_TO_WIN = c[a].points_to_win;
        CPU_SPEED_STICKS = c[a].cpu_speed_sticks
    };
    this.nextLevel = function() {
        b < c.length && (b++, this.loadLevel(b))
    };
    this.saveLevel = function() {
        d < b + 1 && saveItem("level_foosball", b + 1)
    };
    this.getNextLevel = function() {
        return b < c.length ? b + 2 : b + 1
    };
    this.getCurrentLevel =
        function() {
            return b
        };
    this.getNumLevel = function() {
        return c.length
    };
    this.deleteSaveData = function() {
        var a = s_oSpriteLibrary.getSprite("msg_box"),
            b = new createjs.Container,
            c = new createBitmap(a, a.width, a.height);
        c.regX = a.width / 2;
        c.regY = a.height / 2;
        a = new createjs.Text(TEXT_DELETE_SAVE, " 40px " + PRIMARY_FONT, "#FFFFFF");
        a.y = -180;
        a.textAlign = "center";
        a.lineWidth = 800;
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        b.alpha = 0;
        var d = new createjs.Shape;
        d.graphics.beginFill("#000000").drawRect(-CANVAS_WIDTH / 2, -CANVAS_HEIGHT /
            2, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = .5;
        d.on("mousedown", function() {}, this);
        s_oStage.addChild(b);
        b.addChild(d, c, a);
        c = new CGfxButton(-100, 150, s_oSpriteLibrary.getSprite("but_yes_big"), b);
        a = new CGfxButton(100, 150, s_oSpriteLibrary.getSprite("but_exit"), b);
        a.pulseAnimation();
        a.addEventListener(ON_MOUSE_UP, function() {
            (new createjs.Tween.get(b)).to({
                alpha: 0
            }, 500).call(function() {
                s_oStage.removeChild(b)
            })
        }, this);
        c.addEventListener(ON_MOUSE_UP, function() {
            localStorage.removeItem("level_foosball");
            for (var a =
                0; a < s_oLevelSettings.getNumLevel(); a++) null !== getItem("score_foosball_" + a) && null !== getItem("score_foosball_" + a) && 0 !== getItem("score_foosball_" + a) && setItem("score_foosball_" + a, 0);
            (new createjs.Tween.get(b)).to({
                alpha: 0
            }, 500).call(function() {
                s_oStage.removeChild(b)
            })
        }, this);
        (new createjs.Tween.get(b)).to({
            alpha: 1
        }, 500)
    };
    this.init(a)
}
s_oLevelSettings = null;

function CLevelBut(a, c, b, d, g, e) {
    var f, l, h, m = [],
        p = [],
        k, r, q, v, t, u;
    this._init = function(a, b, c, d, e) {
        l = [];
        h = [];
        q = new createjs.Container;
        v.addChild(q);
        var g = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: d.width / 2,
                height: d.height,
                regX: d.width / 2 / 2,
                regY: d.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        f = e;
        r = createSprite(g, "state_" + f, d.width / 2 / 2, d.height / 2, d.width / 2, d.height);
        r.mouseEnabled = e;
        r.x = a;
        r.y = b;
        r.stop();
        !s_bMobile && f && (q.cursor = "pointer");
        q.addChild(r);
        m.push(r);
        k = new createjs.Text(c,
            "bold 80px " + PRIMARY_FONT, "#fff");
        k.x = a - 7;
        k.y = b + 30;
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.lineWidth = 200;
        q.addChild(k);
        e || (k.color = "#404040");
        this._initListener()
    };
    this.unload = function() {
        q.off("mousedown", t);
        q.off("pressup", u);
        q.removeChild(r)
    };
    this._initListener = function() {
        t = q.on("mousedown", this.buttonDown);
        u = q.on("pressup", this.buttonRelease)
    };
    this.viewBut = function(a) {
        q.addChild(a)
    };
    this.addEventListener = function(a, b, c) {
        l[a] = b;
        h[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, d) {
        l[a] =
            b;
        h[a] = c;
        p = d
    };
    this.ifClickable = function() {
        return !0 === q.mouseEnabled ? 1 : 0
    };
    this.setActive = function(a, b) {
        f = b;
        m[a].gotoAndStop("state_" + f);
        m[a].mouseEnabled = !0;
        k.color = f ? "#69b8d5" : "#b4b4b4"
    };
    this.buttonRelease = function() {
        f && (playSound("click", 1, 0), l[ON_MOUSE_UP] && l[ON_MOUSE_UP].call(h[ON_MOUSE_UP], p))
    };
    this.buttonDown = function() {
        l[ON_MOUSE_DOWN] && l[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN], p)
    };
    this.setPosition = function(a, b) {
        q.x = a;
        q.y = b
    };
    this.setVisible = function(a) {
        q.visible = a
    };
    v = e;
    this._init(a, c, b, d, g, e)
}

function CLevelMenu() {
    var a, c, b, d, g, e, f, l, h, m, p, k, r, q, v, t = null,
        u = null,
        w, y, D, A = null,
        z = null;
    this._init = function() {
        var p = new createjs.Shape;
        p.graphics.beginFill("#000000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        p.alpha = .7;
        s_iLastLevel = "undefined" !== getItem("level_foosball") && null !== getItem("level_foosball") ? getItem("level_foosball") : 1;
        h = 0;
        y = new createjs.Container;
        s_oStage.addChild(y);
        var n = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        y.addChild(n);
        y.addChild(p);
        f = CANVAS_WIDTH / 2;
        l = 18;
        w = new createjs.Text(TEXT_SELECT_LEVEL,
            "70px " + PRIMARY_FONT, "#fff");
        w.x = f;
        w.textAlign = "center";
        s_oStage.addChild(w);
        p = s_oSpriteLibrary.getSprite("but_exit");
        g = CANVAS_WIDTH - p.width / 2 - 10;
        e = p.height / 2 + 10;
        q = new CGfxButton(g, e, p, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onExit, this);
        m = p.height;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) b = q.getX() - p.width - 10, d = p.height / 2 + 10, v = new CToggle(b, d, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive, s_oStage), v.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        p = window.document;
        n = p.documentElement;
        A = n.requestFullscreen || n.mozRequestFullScreen || n.webkitRequestFullScreen || n.msRequestFullscreen;
        z = p.exitFullscreen || p.mozCancelFullScreen || p.webkitExitFullscreen || p.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (A = !1);
        A && !1 === inIframe() && (p = s_oSpriteLibrary.getSprite("but_fullscreen"), a = p.width / 4 + 10, c = p.height / 2 + 10, D = new CToggle(a, c, p, s_bFullscreen, s_oStage), D.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        this._checkBoundLimits();
        k = [];
        for (var p = CANVAS_WIDTH - 2 * EDGEBOARD_X, n = Math.floor(p /
            NUM_COLS_PAGE_LEVEL) / 2, B = 0, C = 0; C < NUM_COLS_PAGE_LEVEL; C++) k.push(B), B += 2 * n;
        r = [];
        this._createNewLevelPage(0, s_oLevelSettings.getNumLevel());
        if (1 < r.length) {
            for (n = 1; n < r.length; n++) r[n].visible = !1;
            t = new CGfxButton(CANVAS_WIDTH / 2 + 300, CANVAS_HEIGHT / 2 + 350, s_oSpriteLibrary.getSprite("arrow"), s_oStage);
            t.getButtonImage().rotation = 90;
            t.addEventListener(ON_MOUSE_UP, this._onRight, this);
            u = new CGfxButton(CANVAS_WIDTH / 2 - 300, CANVAS_HEIGHT / 2 + 350, s_oSpriteLibrary.getSprite("arrow"), s_oStage);
            u.getButtonImage().rotation = -90;
            u.addEventListener(ON_MOUSE_UP, this._onLeft, this)
        }
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        w.y = r[0].y - (175 + Math.floor(p / NUM_COLS_PAGE_LEVEL) / 2)
    };
    this.unload = function() {
        for (var a = 0; a < p.length; a++) p[a].unload();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || v.unload();
        A && !1 === inIframe() && D.unload();
        q.unload();
        null !== u && (u.unload(), t.unload());
        s_oLevelMenu = null
    };
    this.refreshButtonPos = function(f, h) {
        w.y = l + h;
        q.setPosition(g - f, e + h);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || v.setPosition(b - f, h + d);
        A &&
            !1 === inIframe() && D.setPosition(a + f, c + h)
    };
    this._checkBoundLimits = function() {
        for (var a = s_oSpriteLibrary.getSprite("but_level"), b = 0, c = CANVAS_HEIGHT - 2 * EDGEBOARD_Y - 2 * m, d = 0; b < c;) b += a.height + 20, d++;
        NUM_ROWS_PAGE_LEVEL > d && (NUM_ROWS_PAGE_LEVEL = d);
        c = b = 0;
        d = CANVAS_WIDTH - 2 * EDGEBOARD_X;
        for (a = s_oSpriteLibrary.getSprite("but_level"); c < d;) c += a.width / 2 + 5, b++;
        NUM_COLS_PAGE_LEVEL > b && (NUM_COLS_PAGE_LEVEL = b)
    };
    this._createNewLevelPage = function(a, b) {
        var c = new createjs.Container;
        y.addChild(c);
        r.push(c);
        p = [];
        for (var d = 0, e =
            0, f = 1, h = !1, g = s_oSpriteLibrary.getSprite("but_level"), m = a; m < b; m++) {
            var l = new CLevelBut(k[d] + g.width / 4, e + g.height / 2, m + 1, g, m + 1 > s_iLastLevel ? !1 : !0, c);
            l.addEventListenerWithParams(ON_MOUSE_UP, this._onButLevelRelease, this, m);
            p.push(l);
            d++;
            if (d === k.length && m < b - 1 && (d = 0, e += g.height + 20, f++, f > NUM_ROWS_PAGE_LEVEL)) {
                h = !0;
                break
            }
        }
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        c.regX = c.getBounds().width / 2;
        c.regY = c.getBounds().height / 2;
        h && this._createNewLevelPage(m + 1, b)
    };
    this._onRight = function() {
        r[h].visible = !1;
        h++;
        h >= r.length &&
            (h = 0);
        r[h].visible = !0
    };
    this._onLeft = function() {
        r[h].visible = !1;
        h--;
        0 > h && (h = r.length - 1);
        r[h].visible = !0
    };
    this._onButLevelRelease = function(a) {
        $(s_oMain).trigger("start_level", a);
        s_oLevelSettings.loadLevel(a);
        s_oMain.gotoGame();
        this.unload()
    };
    this._onAudioToggle = function() {
        createjs.Sound.setMute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? (z.call(window.document), s_bFullscreen = !1) : (A.call(window.document.documentElement), s_bFullscreen = !0);
        sizeHandler()
    };
    this._onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    s_oLevelMenu = this;
    this._init()
}
var s_oLevelMenu = null;

function CPanelTutorial() {
    var a, c, b, d, g, e, f, l;
    this.init = function() {
        s_oGame.setPause(!0);
        l = 2;
        var h;
        h = new createjs.Shape;
        h.graphics.beginFill("#000000").drawRect(-(CANVAS_WIDTH / 2), -(CANVAS_HEIGHT / 2), CANVAS_WIDTH, CANVAS_HEIGHT);
        h.alpha = .7;
        h.on("mousedown", this.onOver, this);
        f = new createjs.Container;
        e = 0;
        a = new createjs.Container;
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2;
        a.addChild(h);
        a.alpha = 0;
        h = s_oSpriteLibrary.getSprite("msg_box");
        c = new createBitmap(h);
        c.regX = h.width / 2;
        c.regY = h.height / 2;
        c.alpha = .8;
        a.addChild(c);
        s_oStage.addChild(a);
        h = s_oSpriteLibrary.getSprite("skip_arrow");
        b = new CGfxButton(420, 0, h, a);
        b.addEventListener(ON_MOUSE_DOWN, this.onButNext, this);
        h = s_oSpriteLibrary.getSprite("skip_arrow_left");
        d = new CGfxButton(-420, 0, h, a);
        d.addEventListener(ON_MOUSE_DOWN, this.onButBack, this);
        g = new CGfxButton(0, a.getBounds().height / 2 - 80, s_oSpriteLibrary.getSprite("but_next"), a);
        g.addEventListener(ON_MOUSE_DOWN, this.onButSkip, this);
        this.loadPage(e);
        (new createjs.Tween.get(a)).to({
            alpha: 1
        }, 500)
    };
    this.loadPage = function(b) {
        var c,
            d, e, g, h, l;
        switch (b) {
            case 0:
                b = new createjs.Text(TEXT_TUTORIAL_1, " 35px " + PRIMARY_FONT, "#FFFFFF");
                b.lineWidth = 650;
                b.y = -200;
                b.textAlign = "center";
                s_bMobile ? (c = s_oSpriteLibrary.getSprite("arrow"), d = new createBitmap(c, c.width, c.height), d.x = -c.width / 2 - 220, d.y = -40, e = new createBitmap(c, c.width, c.height), e.rotation = 180, e.x = c.width / 2 + 211, e.y = 139) : s_b2Players ? (c = s_oSpriteLibrary.getSprite("key_w"), d = new createBitmap(c, c.width, c.height), d.x = -250, d.y = 0, c = s_oSpriteLibrary.getSprite("key_s"), e = new createBitmap(c,
                    c.width, c.height), e.x = -150, e.y = 0, c = s_oSpriteLibrary.getSprite("key_up"), g = new createBitmap(c, c.width, c.height), g.x = 52, g.y = 0, c = s_oSpriteLibrary.getSprite("key_down"), c = new createBitmap(c, c.width, c.height), c.x = 150, c.y = 0, h = new createjs.Text(TEXT_TUTORIAL_PLAYER + " 1", " 40px " + PRIMARY_FONT, "#FFFFFF"), h.textAlign = "center", h.x = -147, h.y = -60, l = new createjs.Text(TEXT_TUTORIAL_PLAYER + " 2", " 40px " + PRIMARY_FONT, "#FFFFFF"), l.textAlign = "center", l.x = 150, l.y = -60, f.addChild(g, c, h, l)) : (c = s_oSpriteLibrary.getSprite("key_w"),
                    d = new createBitmap(c, c.width, c.height), d.x = -255, d.y = 0, c = s_oSpriteLibrary.getSprite("key_s"), e = new createBitmap(c, c.width, c.height), e.x = 145, e.y = 0);
                f.addChild(b, d, e);
                a.addChild(f);
                break;
            case 1:
                b = s_bMobile ? new createjs.Text(TEXT_TUTORIAL_4, " 35px " + PRIMARY_FONT, "#FFFFFF") : new createjs.Text(TEXT_TUTORIAL_3, " 35px " + PRIMARY_FONT, "#FFFFFF");
                b.lineWidth = 600;
                b.y = -220;
                b.textAlign = "center";
                c = s_oSpriteLibrary.getSprite("but_kickoff");
                d = new createBitmap(c, c.width, c.height);
                d.x = -c.width / 2;
                d.y = -60;
                f.addChild(b,
                    d);
                break;
            case 2:
                b = new createjs.Text(TEXT_TUTORIAL_2, " 35px " + PRIMARY_FONT, "#FFFFFF"), b.lineWidth = 600, b.y = -65, b.textAlign = "center", f.addChild(b)
        }
    };
    this.onButNext = function() {
        e === l ? e = 0 : e++;
        f.removeAllChildren();
        this.loadPage(e)
    };
    this.onButBack = function() {
        0 === e ? e = l : e--;
        f.removeAllChildren();
        this.loadPage(e)
    };
    this.onButSkip = function() {
        (new createjs.Tween.get(a)).to({
            alpha: 0
        }, 500).call(function() {
            s_oStage.removeChild(a);
            s_oGame.setPause(!1)
        })
    };
    this.onOver = function() {};
    this.init()
}

function CPause() {
    var a, c, b, d = this;
    this.init = function() {
        s_oGame.setPause(!0);
        b = new createjs.Container;
        s_oStage.addChild(b);
        a = new createjs.Shape;
        a.graphics.beginFill("#000000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        c = new createjs.Text(TEXT_PAUSE, "185px " + PRIMARY_FONT, "#ffffff");
        c.textBaseline = "alphabetic";
        c.textAlign = "center";
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2;
        b.addChild(a, c);
        a.alpha = 0;
        c.alpha = 0;
        (new createjs.Tween.get(a)).to({
            alpha: .5
        }, 400).call(function() {
            a.on("mousedown", d.onExit, d)
        });
        (new createjs.Tween.get(c)).to({
                alpha: 1
            },
            400)
    };
    this.onExit = function() {
        (new createjs.Tween.get(b)).to({
            alpha: 0
        }, 400).call(function() {
            c.alpha = 0;
            s_oStage.removeChild(b);
            s_oGame.setPause(!1)
        })
    };
    this.init()
}

function CMsgBox(a, c) {
    var b, d, g, e, f;
    this._init = function(a) {
        e = new createjs.Container;
        f.addChild(e);
        a = new createjs.Shape;
        a.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = .7;
        a.on("click", function() {});
        e.addChild(a);
        a = s_oSpriteLibrary.getSprite("msg_box");
        var c = createBitmap(a);
        c.x = .5 * CANVAS_WIDTH;
        c.y = .5 * CANVAS_HEIGHT;
        c.regX = .5 * a.width;
        c.regY = .5 * a.height;
        e.addChild(c);
        b = new createjs.Text(TEXT_ERR_LS, "40px " + PRIMARY_FONT, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = 360;
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.lineWidth = 500;
        e.addChild(b);
        d = new CGfxButton(CANVAS_WIDTH / 2, 880, s_oSpriteLibrary.getSprite("but_yes_big"), e);
        d.addEventListener(ON_MOUSE_UP, this._onButOk, this)
    };
    this._onButOk = function() {
        g.unload()
    };
    this.unload = function() {
        d.unload();
        f.removeChild(e)
    };
    g = this;
    f = c;
    this._init(a)
};