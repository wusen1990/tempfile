function CSpriteLibrary() {
    var a, g, b, e, c, k;
    this.init = function(d, h, f) {
        b = g = 0;
        e = d;
        c = h;
        k = f;
        a = {}
    };
    this.addSprite = function(b, c) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: c,
            oSprite: new Image
        },
        g++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite: null
    };
    this._onSpritesLoaded = function() {
        c.call(k)
    };
    this._onSpriteLoaded = function() {
        e.call(k); ++b == g && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this,
        a[b].oSprite.onload = function() {
            this.oSpriteLibrary._onSpriteLoaded()
        },
        a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return g
    }
}
var CANVAS_WIDTH = 1360,
CANVAS_HEIGHT = 640,
CANVAS_WIDTH_HALF = .5 * CANVAS_WIDTH,
CANVAS_HEIGHT_HALF = .5 * CANVAS_HEIGHT,
EDGEBOARD_X = 250,
EDGEBOARD_Y = 5,
DISABLE_SOUND_MOBILE = !1,
PRIMARY_FONT = "walibi",
PRIMARY_FONT_COLOR = "#ffffff",
SECONDARY_FONT_COLOR = "#004080",
THIRD_FONT_COLOR = "#000000",
STATE_LOADING = 0,
STATE_MENU = 1,
STATE_HELP = 1,
STATE_GAME = 3,
ON_MOUSE_DOWN = 0,
ON_MOUSE_UP = 1,
ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, PERFECT_SCORE, MODE_SNAKES = 0,
MODE_CHUTES = 1,
MSG_GOOD = 0,
MSG_BAD = 1,
MSG_DICE = 2,
LAST_SQUARE = 100,
LADDERS_SQUARES = [1, 4, 9, 21, 28, 36, 51, 71, 80],
OBSTACLES_SQUARES = [16, 47, 49, 56, 62, 64, 87, 93, 95, 98],
OBSTACLES_ANGLES = [100, 290, 70, 240, 320, 80, 330, 290, 90, 90],
OBSTACLES_MOVEMENT_SQUARES = [[16, 6], [47, 26], [49, 11], [56, 53], [62, 19], [64, 60], [87, 24], [93, 73], [95, 75], [98, 78]],
LADDER_MOVEMENT_SQUARES = [[1, 38], [4, 14], [9, 31], [21, 42], [28, 84], [36, 44], [51, 67], [71, 91], [80, 100]],
BOARD_SQUARES;
BOARD_SQUARES = [[334, 565], [435, 565], [490, 565], [540, 565], [600, 565], [655, 565], [710, 565], [765, 565], [820, 565], [875, 565], [925, 565], [925, 510], [875, 510], [820, 510], [765, 510], [710, 510], [655, 510], [600, 510], [540, 510], [490, 510], [435, 510], [435, 455], [490, 455], [540, 455], [600, 455], [655, 455], [710, 455], [765, 455], [820, 455], [875, 455], [925, 455], [925, 400], [875, 400], [820, 400], [765, 400], [710, 400], [655, 400], [600, 400], [540, 400], [490, 400], [435, 400], [435, 345], [490, 345], [540, 345], [600, 345], [655, 345], [710, 345], [765, 345], [820, 345], [875, 345], [925, 345], [925, 290], [875, 290], [820, 290], [765, 290], [710, 290], [655, 290], [600, 290], [540, 290], [490, 290], [435, 290], [435, 235], [490, 235], [540, 235], [600, 235], [655, 235], [710, 235], [765, 235], [820, 235], [875, 235], [925, 235], [925, 180], [875, 180], [820, 180], [765, 180], [710, 180], [655, 180], [600, 180], [540, 180], [490, 180], [435, 180], [435, 125], [490, 125], [540, 125], [600, 125], [655, 125], [710, 125], [765, 125], [820, 125], [875, 125], [925, 125], [925, 70], [875, 70], [820, 70], [765, 70], [710, 70], [655, 70], [600, 70], [540, 70], [490, 70], [435, 70]];
var aColumn = [370, 340, 310],
aRow = [530, 580],
ZERO_SQUARE_POSITIONS = [[aColumn[0], aRow[0]], [aColumn[0], aRow[1]], [aColumn[1], aRow[0]], [aColumn[1], aRow[1]], [aColumn[2], aRow[0]], [aColumn[2], aRow[1]]],
CHUTES_COORDS_16 = [[635.8, 507.8], [589.7, 528.3], [577.3, 545.8], [595.15, 564.3], [647.7, 568.8], [696.15, 576.25]],
CHUTES_COORDS_47 = [[785.25, 348.3], [812.15, 367.8], [820.25, 388.3], [804.1, 409.3], [759.65, 423.8], [723.65, 441.75]],
CHUTES_COORDS_49 = [[878.75, 364.3], [892.15, 383.3], [898.75, 411.8], [904.1, 443.3], [913.65, 469.8], [930.15, 497.75]],
CHUTES_COORDS_56 = [[666.3, 276.8], [702.25, 276.8], [729.75, 286.8], [759.1, 295.3], [798.15, 295.3]],
CHUTES_COORDS_62 = [[508.3, 239.8], [541.8, 282.5], [550.3, 298.8], [545.65, 319.3], [510.7, 365.9], [501.6, 387.4], [506.2, 410.4], [541.8, 451.75], [548.7, 480.75], [501.6, 519.25]],
CHUTES_COORDS_64 = [[582.3, 228.3], [561.7, 229.8], [541.8, 241.7], [519.65, 258.8], [503.2, 273.4], [477.6, 285.4], [447.2, 295.9]],
CHUTES_COORDS_87 = [[767.75, 147.3], [750.15, 195.5], [736.75, 208.9], [647.65, 251.3], [629.2, 270.9], [623.6, 297.4], [640.7, 326.4], [677.15, 350.25], [693.15, 368.25], [694.65, 390.25], [683.65, 411.25], [663.75, 430.25], [621.65, 449.75]],
CHUTES_COORDS_93 = [[838.75, 70.85], [880.65, 82.5], [885.15, 96.9], [880.65, 112.3], [858.7, 133.9], [835.6, 153.4], [822.2, 170.9]],
CHUTES_COORDS_95 = [[683.75, 63.35], [649.2, 80.4], [643.7, 95.9], [653.6, 108.3], [702.2, 133.9], [714.1, 151.9], [711.7, 172.4]],
CHUTES_COORDS_98 = [[516.75, 62.35], [482.2, 79.4], [476.7, 94.9], [486.6, 107.3], [535.2, 132.9], [547.1, 150.9], [544.7, 171.4]],
PLAYER_SPRITE_WIDTH = [58, 50, 60, 60, 60, 52],
PLAYER_SPRITE_HEIGHT = [70, 72, 70, 86, 70, 70],
STEP_LENGTH = 10,
LADDERS_SPEED = 1E3,
SNAKE_SPEED = 800,
s_iScaleFactor = 1,
s_iOffsetX,
s_iOffsetY,
s_bIsRetina; (function(a) { (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});
function NotImplementedError(a) {
    this.name = "NotImplementedError";
    this.message = a || ""
}
NotImplementedError.prototype = Error.prototype;
function error(a) {
    throw {
        name: "NotImplementedError",
        message: a
    };
}
function trace(a) {
    console.log(a)
}
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
    sizeHandler()
}
function ifArrayContainsValue(a, g) {
    for (var b = 0; b < a.length; b++) if (a[b] === g) return ! 0;
    return ! 1
}
function getSize(a) {
    var g = a.toLowerCase(),
    b = window.document,
    e = b.documentElement;
    if (void 0 === window["inner" + a]) a = e["client" + a];
    else if (window["inner" + a] != e["client" + a]) {
        var c = b.createElement("body");
        c.id = "vpw-test-b";
        c.style.cssText = "overflow:scroll";
        var k = b.createElement("div");
        k.id = "vpw-test-d";
        k.style.cssText = "position:absolute;top:-1000px";
        k.innerHTML = "<style>@media(" + g + ":" + e["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + g + ":7px!important}}</style>";
        c.appendChild(k);
        e.insertBefore(c, b.head);
        a = 7 == k["offset" + a] ? e["client" + a] : window["inner" + a];
        e.removeChild(c)
    } else a = window["inner" + a];
    return a
}
function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var g = getSize("Width");
        s_iScaleFactor = Math.min(a / CANVAS_HEIGHT, g / CANVAS_WIDTH);
        var b = CANVAS_WIDTH * s_iScaleFactor,
        e = CANVAS_HEIGHT * s_iScaleFactor;
        if (e < a) {
            var c = a - e;
            e += c;
            b += CANVAS_WIDTH / CANVAS_HEIGHT * c
        } else b < g && (c = g - b, b += c, e += CANVAS_HEIGHT / CANVAS_WIDTH * c);
        c = a / 2 - e / 2;
        var k = g / 2 - b / 2,
        d = CANVAS_WIDTH / b;
        if (k * d < -EDGEBOARD_X || c * d < -EDGEBOARD_Y) s_iScaleFactor = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), g / (CANVAS_WIDTH - 2 * EDGEBOARD_X)),
        b = CANVAS_WIDTH * s_iScaleFactor,
        e = CANVAS_HEIGHT * s_iScaleFactor,
        c = (a - e) / 2,
        k = (g - b) / 2,
        d = CANVAS_WIDTH / b;
        s_iOffsetX = -1 * k * d;
        s_iOffsetY = -1 * c * d;
        0 <= c && (s_iOffsetY = 0);
        0 <= k && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oColourChoose && s_oColourChoose.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oPlayersChoose && s_oPlayersChoose.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oModeChoose && s_oModeChoose.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        $("#canvas").css("width", b + "px");
        $("#canvas").css("height", e + "px");
        0 > c ? $("#canvas").css("top", c + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", k + "px")
    }
}
function _checkOrientation(a, g) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > g ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()))
}
function isIOS() {
    isRetina();
    for (var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";"); a.length;) if (navigator.platform === a.pop()) return ! 0;
    return ! 1
}
function isRetina() {
    s_bIsRetina = matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches ? !0 : !1
}
function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}
function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height: screen.width) - getIOSWindowHeight();
    return 1 < a ? a: 0
}
function getMobileOperatingSystem() {
    var a = navigator.userAgent || navigator.vendor || window.opera;
    return a.match(/iPad/i) || a.match(/iPhone/i) || a.match(/iPod/i) ? "ios": a.match(/Android/i) ? "android": "unknown"
}
function inIframe() {
    try {
        return window.self !== window.top
    } catch(a) {
        return ! 0
    }
}
function stopSound(a) { ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}
function playSound(a, g, b) {
    return ! 1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(g), s_aSounds[a].loop(b), s_aSounds[a]) : null
}
function setVolume(a, g) { ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(g)
}
function setMute(a, g) { ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[g].mute(a)
}
function createBitmap(a, g, b) {
    var e = new createjs.Bitmap(a),
    c = new createjs.Shape;
    g && b ? c.graphics.beginFill("#fff").drawRect(0, 0, g, b) : c.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    e.hitArea = c;
    return e
}
function createSprite(a, g, b, e, c, k) {
    a = null !== g ? new createjs.Sprite(a, g) : new createjs.Sprite(a);
    g = new createjs.Shape;
    g.graphics.beginFill("#000000").drawRect( - b, -e, c, k);
    a.hitArea = g;
    return a
}
function randomFloatBetween(a, g, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (g - a), g).toFixed(b))
}
function shuffle(a) {
    for (var g = a.length,
    b, e; 0 !== g;) e = Math.floor(Math.random() * g),
    --g,
    b = a[g],
    a[g] = a[e],
    a[e] = b;
    return a
}
function easeLinear(a, g, b, e) {
    return b * a / e + g
}
function easeInQuad(a, g, b, e) {
    return b * (a /= e) * a + g
}
function easeInSine(a, g, b, e) {
    return - b * Math.cos(a / e * (Math.PI / 2)) + b + g
}
function easeInCubic(a, g, b, e) {
    return b * (a /= e) * a * a + g
}
function getTrajectoryPoint(a, g) {
    var b = new createjs.Point,
    e = (1 - a) * (1 - a),
    c = a * a;
    b.x = e * g.start.x + 2 * (1 - a) * a * g.traj.x + c * g.end.x;
    b.y = e * g.start.y + 2 * (1 - a) * a * g.traj.y + c * g.end.y;
    return b
}
function formatTime(a) {
    a /= 1E3;
    var g = Math.floor(a / 60);
    a = parseFloat(a - 60 * g).toFixed(1);
    var b = "",
    b = 10 > g ? b + ("0" + g + ":") : b + (g + ":");
    return 10 > a ? b + ("0" + a) : b + a
}
function degreesToRadians(a) {
    return a * Math.PI / 180
}
function checkRectCollision(a, g) {
    var b = getBounds(a, .9);
    var e = getBounds(g, .98);
    return calculateIntersection(b, e)
}
function calculateIntersection(a, g) {
    var b, e, c, k;
    var d = a.x + (b = a.width / 2);
    var h = a.y + (e = a.height / 2);
    var f = g.x + (c = g.width / 2);
    var l = g.y + (k = g.height / 2);
    d = Math.abs(d - f) - (b + c);
    h = Math.abs(h - l) - (e + k);
    return 0 > d && 0 > h ? (d = Math.min(Math.min(a.width, g.width), -d), h = Math.min(Math.min(a.height, g.height), -h), {
        x: Math.max(a.x, g.x),
        y: Math.max(a.y, g.y),
        width: d,
        height: h,
        rect1: a,
        rect2: g
    }) : null
}
function getBounds(a, g) {
    var b = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var e = a.children,
        c = e.length,
        k;
        for (k = 0; k < c; k++) {
            var d = getBounds(e[k], 1);
            d.x < b.x && (b.x = d.x);
            d.y < b.y && (b.y = d.y);
            d.x + d.width > b.x2 && (b.x2 = d.x + d.width);
            d.y + d.height > b.y2 && (b.y2 = d.y + d.height)
        }
        Infinity == b.x && (b.x = 0);
        Infinity == b.y && (b.y = 0);
        Infinity == b.x2 && (b.x2 = 0);
        Infinity == b.y2 && (b.y2 = 0);
        b.width = b.x2 - b.x;
        b.height = b.y2 - b.y;
        delete b.x2;
        delete b.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            c = a.sourceRect || a.image;
            k = c.width * g;
            var h = c.height * g
        } else if (a instanceof createjs.Sprite) if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
            c = a.spriteSheet.getFrame(a.currentFrame);
            k = c.rect.width;
            h = c.rect.height;
            e = c.regX;
            var f = c.regY
        } else b.x = a.x || 0,
        b.y = a.y || 0;
        else b.x = a.x || 0,
        b.y = a.y || 0;
        e = e || 0;
        k = k || 0;
        f = f || 0;
        h = h || 0;
        b.regX = e;
        b.regY = f;
        c = a.localToGlobal(0 - e, 0 - f);
        d = a.localToGlobal(k - e, h - f);
        k = a.localToGlobal(k - e, 0 - f);
        e = a.localToGlobal(0 - e, h - f);
        b.x = Math.min(Math.min(Math.min(c.x, d.x), k.x), e.x);
        b.y = Math.min(Math.min(Math.min(c.y, d.y), k.y), e.y);
        b.width = Math.max(Math.max(Math.max(c.x, d.x), k.x), e.x) - b.x;
        b.height = Math.max(Math.max(Math.max(c.y, d.y), k.y), e.y) - b.y
    }
    return b
}
function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
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
        this.element.removeEventListener("touchend", this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var g = document.createEvent("MouseEvents");
            g.initEvent("click", !0, !0);
            a.dispatchEvent(g)
        }
    }
}; (function() {
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
        a.type in b ? document.body.className = b[a.type] : (document.body.className = this[g] ? "hidden": "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var g = "hidden";
    g in document ? document.addEventListener("visibilitychange", a) : (g = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (g = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", a) : (g = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a: window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();
function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}
function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}
function getParamValue(a) {
    for (var g = window.location.search.substring(1).split("&"), b = 0; b < g.length; b++) {
        var e = g[b].split("=");
        if (e[0] == a) return e[1]
    }
}
function saveItem(a, g) {
    s_bStorageAvailable && localStorage.setItem(a, g)
}
function getItem(a) {
    return s_bStorageAvailable ? localStorage.getItem(a) : null
}
function CWinPanel(a) {
    var g, b, e, c, k, d, h, f, l, n, m;
    this._init = function(a) {
        $(s_oMain).trigger("share_event", s_aGamesWon);
        $(s_oMain).trigger("save_score", s_aGamesWon);
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m.alpha = 0;
        s_oStage.addChild(m);
        f = new createjs.Container;
        f.alpha = 1;
        f.visible = !1;
        f.y = CANVAS_HEIGHT;
        g = createBitmap(a);
        g.x = CANVAS_WIDTH_HALF;
        g.y = CANVAS_HEIGHT_HALF;
        g.regX = .5 * a.width;
        g.regY = .5 * a.height;
        f.addChild(g);
        b = new createjs.Text(TEXT_WIN, "40px " + PRIMARY_FONT, SECONDARY_FONT_COLOR);
        b.x = CANVAS_WIDTH_HALF;
        b.y = 220;
        b.textAlign = "center";
        b.outline = 5;
        b.textBaseline = "middle";
        f.addChild(b);
        e = new createjs.Text(TEXT_WIN, "40px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        e.x = b.x;
        e.y = b.y;
        e.textAlign = b.textAlign;
        e.textBaseline = b.textBaseline;
        f.addChild(e);
        c = new createjs.Text(TEXT_GAMES_PLAYED + ": " + s_aGamesPlayed, "20px " + PRIMARY_FONT, SECONDARY_FONT_COLOR);
        c.x = CANVAS_WIDTH_HALF;
        c.y = 270;
        c.textAlign = "center";
        c.outline = 5;
        c.textBaseline = "middle";
        f.addChild(c);
        k = new createjs.Text(TEXT_GAMES_PLAYED + ": " + s_aGamesPlayed, "20px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        k.x = c.x;
        k.y = c.y;
        k.textAlign = c.textAlign;
        k.textBaseline = c.textBaseline;
        f.addChild(k);
        d = new createjs.Text(TEXT_GAMES_WON + ": " + s_aGamesWon, "20px " + PRIMARY_FONT, SECONDARY_FONT_COLOR);
        d.x = CANVAS_WIDTH_HALF;
        d.y = 300;
        d.textAlign = "center";
        d.outline = 5;
        d.textBaseline = "middle";
        f.addChild(d);
        h = new createjs.Text(TEXT_GAMES_WON + ": " + s_aGamesWon, "20px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        h.x = d.x;
        h.y = d.y;
        h.textAlign = d.textAlign;
        h.textBaseline = d.textBaseline;
        f.addChild(h);
        s_oStage.addChild(f);
        a = s_oSpriteLibrary.getSprite("but_home");
        l = new CGfxButton(CANVAS_WIDTH_HALF - 150, CANVAS_HEIGHT_HALF + 80, a, f);
        l.addEventListener(ON_MOUSE_DOWN, this._onExit, this);
        a = s_oSpriteLibrary.getSprite("but_restart");
        n = new CGfxButton(CANVAS_WIDTH_HALF + 150, CANVAS_HEIGHT_HALF + 80, a, f);
        n.addEventListener(ON_MOUSE_DOWN, this._onRestart, this);
        n.pulseAnimation()
    };
    this.unload = function() {
        createjs.Tween.get(f).to({
            alpha: 0
        },
        500, createjs.Ease.cubicOut).call(function() {
            s_oStage.removeChild(f);
            l.unload();
            l = null;
            m.removeAllEventListeners();
            n.unload();
            n = null
        })
    };
    this.show = function() {
        f.visible = !0;
        createjs.Tween.get(m).to({
            alpha: .5
        },
        500, createjs.Ease.cubicOut);
        m.on("click",
        function() {});
        createjs.Tween.get(f).wait(250).to({
            y: 0
        },
        1250, createjs.Ease.elasticOut).call(function() {
            $(s_oMain).trigger("show_interlevel_ad")
        })
    };
    this._onRestart = function() {
        this.unload();
        createjs.Tween.get(m).to({
            alpha: 0
        },
        400, createjs.Ease.cubicOut).call(function() {
            s_oStage.removeChild(m)
        });
        s_oGame.restartGame()
    };
    this._onExit = function() {
        this.unload();
        s_oGame.onExit()
    };
    this._init(a);
    return this
}
function CToggle(a, g, b, e, c) {
    var k, d, h, f;
    this._init = function(a, b, c, e) {
        d = [];
        h = [];
        var g = new createjs.SpriteSheet({
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
        k = e;
        f = createSprite(g, "state_" + k, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        f.x = a;
        f.y = b;
        f.stop();
        s_bMobile || (f.cursor = "pointer");
        l.addChild(f);
        this._initListener()
    };
    this.unload = function() {
        f.off("mousedown", this.buttonDown);
        f.off("pressup", this.buttonRelease);
        l.removeChild(f)
    };
    this._initListener = function() {
        f.on("mousedown", this.buttonDown);
        f.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        d[a] = b;
        h[a] = c
    };
    this.setCursorType = function(a) {
        f.cursor = a
    };
    this.setActive = function(a) {
        k = a;
        f.gotoAndStop("state_" + k)
    };
    this.buttonRelease = function() {
        f.scaleX = 1;
        f.scaleY = 1;
        playSound("click", 1, !1);
        k = !k;
        f.gotoAndStop("state_" + k);
        d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(h[ON_MOUSE_UP], k)
    };
    this.setVisible = function(a) {
        f.visible = a
    };
    this.buttonDown = function() {
        f.scaleX = .9;
        f.scaleY = .9;
        d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN])
    };
    this.getButtonImage = function() {
        return f
    };
    this.setPosition = function(a, b) {
        f.x = a;
        f.y = b
    };
    var l = c;
    this._init(a, g, b, e)
}
function CSpritesheetButton(a, g, b, e, c) {
    var k, d, h, f, l, n, m, q = !1,
    t = c;
    this._init = function(a, b, c, e) {
        k = [];
        d = [];
        l = [];
        h = createSprite(c, e, a / 2, b / 2, a, b);
        h.gotoAndStop(e);
        f = new createjs.Shape;
        f.graphics.beginFill("#ff0000").drawRect(0, 0, 2 * a, 2 * b);
        f.regX = a;
        f.regY = b;
        f.alpha = .01;
        t.addChild(f);
        m = n = 1;
        s_bMobile || (f.cursor = "pointer");
        t.addChild(h, f);
        this._initListener()
    };
    this.setShape = function(a) {
        f.scaleX = f.scaleY = a
    };
    this.unload = function() {
        h.off("mousedown", this.buttonDown);
        h.off("pressup", this.buttonRelease);
        t.removeChild(h)
    };
    this.setVisible = function(a) {
        h.visible = a
    };
    this.setCursorType = function(a) {
        h.cursor = a
    };
    this._initListener = function() {
        f.on("mousedown", this.buttonDown);
        f.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        k[a] = b;
        d[a] = c
    };
    this.addEventListenerWithParams = function(a, b, c, h) {
        k[a] = b;
        d[a] = c;
        l[a] = h
    };
    this.buttonRelease = function() {
        q || (h.scaleX = 0 < n ? 1 : -1, h.scaleY = 1, playSound("click", 1, !1), k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(d[ON_MOUSE_UP], l[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        q || (h.scaleX = 0 < n ? .9 : -.9, h.scaleY = .9, k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(d[ON_MOUSE_DOWN], l[ON_MOUSE_DOWN]))
    };
    this.rotation = function(a) {
        h.rotation = a
    };
    this.getButton = function() {
        return h
    };
    this.setPosition = function(a, b) {
        h.x = f.x = a;
        h.y = f.y = b
    };
    this.setX = function(a) {
        h.x = f.x = a
    };
    this.setY = function(a) {
        h.y = f.y = a
    };
    this.getButtonImage = function() {
        return h
    };
    this.block = function(a) {
        q = a;
        h.scaleX = n;
        h.scaleY = m
    };
    this.setScaleX = function(a) {
        n = h.scaleX = a
    };
    this.setScaleY = function(a) {
        m = h.scaleY = a
    };
    this.getX = function() {
        return h.x
    };
    this.getY = function() {
        return h.y
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(h).to({
            scaleX: .9 * n,
            scaleY: .9 * m
        },
        850, createjs.Ease.quadOut).to({
            scaleX: n,
            scaleY: m
        },
        650, createjs.Ease.quadIn).call(function() {
            v.pulseAnimation()
        })
    };
    this.trebleAnimation = function() {
        createjs.Tween.get(h).to({
            rotation: 5
        },
        75, createjs.Ease.quadOut).to({
            rotation: -5
        },
        140, createjs.Ease.quadIn).to({
            rotation: 0
        },
        75, createjs.Ease.quadIn).wait(750).call(function() {
            v.trebleAnimation()
        })
    };
    this.removeAllTweens = function() {
        createjs.Tween.removeTweens(h)
    };
    t = c;
    this._init(a, g, b, e);
    var v = this;
    return this
}
function CPreloader() {
    var a, g, b, e, c, k, d;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_preloader", "./sprites/bg_preloader.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.loadSprites();
        d = new createjs.Container;
        s_oStage.addChild(d)
    };
    this.unload = function() {
        d.removeAllChildren()
    };
    this.hide = function() {
        var a = this;
        setTimeout(function() {
            createjs.Tween.get(k).to({
                alpha: 1
            },
            500).call(function() {
                a.unload();
                s_oMain.gotoMenu()
            })
        },
        1E3)
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var h = createBitmap(s_oSpriteLibrary.getSprite("bg_preloader"));
        d.addChild(h);
        h = s_oSpriteLibrary.getSprite("progress_bar");
        e = createBitmap(h);
        e.x = CANVAS_WIDTH_HALF - h.width / 2;
        e.y = CANVAS_HEIGHT - 150;
        d.addChild(e);
        a = h.width;
        g = h.height;
        c = new createjs.Shape;
        c.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(e.x, e.y, 1, g);
        d.addChild(c);
        e.mask = c;
        b = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
        b.x = CANVAS_WIDTH_HALF;
        b.y = CANVAS_HEIGHT - 150;
        b.shadow = new createjs.Shadow("#000", 2, 2, 2);
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        d.addChild(b);
        k = new createjs.Shape;
        k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.alpha = 0;
        d.addChild(k)
    };
    this.refreshLoader = function(h) {
        b.text = h + "%";
        c.graphics.clear();
        h = Math.floor(h * a / 100);
        c.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(e.x, e.y, h, g)
    };
    this._init()
}
function CPlayersInterface(a) {
    var g, b, e, c, k;
    this._init = function() {
        k = [void 0, void 0, void 0, void 0, void 0, void 0];
        e = new createjs.Container;
        s_oStage.addChild(e);
        g = 20;
        b = 10;
        e.x = g;
        e.y = b;
        c = createBitmap(s_oSpriteLibrary.getSprite("turn_panel"));
        e.addChild(c);
        for (var d = [34, 44], h = [34, 44], f = "turns" + s_iModeGame, l = 0; 6 > l; l++) {
            var n = {
                images: [s_oSpriteLibrary.getSprite(f)],
                framerate: 0,
                frames: {
                    width: d[s_iModeGame],
                    height: h[s_iModeGame],
                    regX: d[s_iModeGame] / 2,
                    regY: h[s_iModeGame]
                }
            },
            n = new createjs.SpriteSheet(n);
            k[l] = createSprite(n, 0, d[s_iModeGame] / 2, h[s_iModeGame] / 2, d[s_iModeGame], h[s_iModeGame]);
            k[l].x = 45;
            k[l].y = 79.5 + 50 * l;
            k[l].gotoAndStop(l);
            k[l].visible = !0;
            e.addChild(k[l])
        }
        for (d = a; 6 > d; d++) k[d].visible = !1
    };
    this.setTurn = function(a) {
        k[a].gotoAndStop(a + 6);
        for (var b = 0; 6 > b; b++) b !== a && k[b].gotoAndStop(b)
    };
    this.refreshPosition = function(a) {
        e.x = g + a;
        e.y = b
    };
    s_oPlayersInterface = this;
    this._init();
    return this
}
var s_oPlayersInterface = null;
function CPlayersChoose() {
    var a, g, b, e, c, k, d, h, f, l, n, m, q, t, v, x, A;
    this._init = function() {
        a = CANVAS_WIDTH_HALF;
        g = CANVAS_HEIGHT_HALF - 20;
        d = createBitmap(s_oSpriteLibrary.getSprite("bg_game" + s_iModeGame));
        d.cache(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(d);
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        l.alpha = .5;
        s_oStage.addChild(l);
        var p = s_oSpriteLibrary.getSprite("msg_box");
        h = createBitmap(p);
        h.x = .5 * CANVAS_WIDTH;
        h.y = .5 * CANVAS_HEIGHT;
        h.regX = .5 * p.width;
        h.regY = .5 * p.height;
        s_oStage.addChild(h);
        f = new createjs.Container;
        p = new createjs.Text(TEXT_SELECT_PLAYERS, "40px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        p.textAlign = "center";
        p.x = 0;
        p.y = 40;
        var r = new createjs.Text(TEXT_SELECT_PLAYERS, "40px " + PRIMARY_FONT, SECONDARY_FONT_COLOR);
        r.textAlign = "center";
        r.x = p.x;
        r.y = p.y;
        r.outline = 5;
        f.x = 682;
        f.y = 135;
        f.addChild(r, p);
        s_oStage.addChild(f);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p = s_oSpriteLibrary.getSprite("audio_icon"),
        c = CANVAS_WIDTH - p.width / 2 - 60,
        k = p.height / 2 + 20,
        n = new CToggle(c, k, p, s_bAudioActive, s_oStage),
        n.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        p = [120, 120];
        r = [128, 128];
        var u = {
            images: [s_oSpriteLibrary.getSprite("but_play" + s_iModeGame)],
            framerate: 0,
            frames: {
                width: p[s_iModeGame],
                height: r[s_iModeGame],
                regX: p[s_iModeGame] / 2,
                regY: r[s_iModeGame] / 2
            },
            animations: {
                0 : [0, 0],
                1 : [1, 1],
                2 : [2, 2],
                3 : [3, 3],
                4 : [4, 4]
            }
        },
        u = new createjs.SpriteSheet(u),
        w = .9 * p[s_iModeGame];
        q = new CSpritesheetButton(p[s_iModeGame], r[s_iModeGame], u, 0, s_oStage);
        q.setShape(.5);
        q.setPosition(a - 2 * w, g + 3);
        q.addEventListener(ON_MOUSE_UP,
        function() {
            this._onButPlayRelease(2)
        },
        this);
        t = new CSpritesheetButton(p[s_iModeGame], r[s_iModeGame], u, 1, s_oStage);
        t.setShape(.5);
        t.setPosition(a - w, g + 90);
        t.addEventListener(ON_MOUSE_UP,
        function() {
            this._onButPlayRelease(3)
        },
        this);
        v = new CSpritesheetButton(p[s_iModeGame], r[s_iModeGame], u, 2, s_oStage);
        v.setShape(.5);
        v.setPosition(a, g);
        v.addEventListener(ON_MOUSE_UP,
        function() {
            this._onButPlayRelease(4)
        },
        this);
        x = new CSpritesheetButton(p[s_iModeGame], r[s_iModeGame], u, 3, s_oStage);
        x.setShape(.5);
        x.setPosition(a + w, g + 90);
        x.addEventListener(ON_MOUSE_UP,
        function() {
            this._onButPlayRelease(5)
        },
        this);
        A = new CSpritesheetButton(p[s_iModeGame], r[s_iModeGame], u, 4, s_oStage);
        A.setShape(.5);
        A.setPosition(a + 2 * w, g);
        A.addEventListener(ON_MOUSE_UP,
        function() {
            this._onButPlayRelease(6)
        },
        this);
        p = s_oSpriteLibrary.getSprite("but_exit");
        b = CANVAS_WIDTH - p.height / 2 - 20;
        e = p.height / 2 + 20;
        m = new CGfxButton(b, e, p, s_oStage);
        m.addEventListener(ON_MOUSE_UP, this._onExit, this);
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(l);
        createjs.Tween.get(l).to({
            alpha: 0
        },
        1E3).call(function() {
            l.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(a, h) {
        m.setPosition(b - a, e); ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.setPosition(c - a, k)
    };
    this.unload = function() {
        m.unload();
        q.unload();
        q = m = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) n.unload(),
        n = null;
        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens();
        s_oPlayersChoose = null
    };
    this._onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButPlayRelease = function(a) {
        this.unload();
        s_oMain.gotoColourChoose(a)
    };
    s_oPlayersChoose = this;
    this._init()
}
var s_oPlayersChoose = null;
function CPlayers(a, g, b) {
    var e, c, k, d, h, f;
    this._init = function() {
        f = s_oGame.getCurveMapData();
        e = 0;
        if (s_iModeGame === MODE_SNAKES) {
            c = createBitmap(s_oSpriteLibrary.getSprite("player_shadow"));
            c.regX = 17;
            c.regY = 0;
            c.x = ZERO_SQUARE_POSITIONS[a][0];
            c.y = ZERO_SQUARE_POSITIONS[a][1];
            b.addChild(c);
            var l = [22, 22],
            n = [62, 62];
            var m = {
                images: [s_oSpriteLibrary.getSprite("players_" + s_iModeGame)],
                framerate: 0,
                frames: {
                    width: l[s_iModeGame],
                    height: n[s_iModeGame],
                    regX: l[s_iModeGame] / 2,
                    regY: n[s_iModeGame] - 10
                },
                animations: {
                    0 : [0, 0],
                    1 : [1, 1],
                    2 : [2, 2],
                    3 : [3, 3],
                    4 : [4, 4],
                    5 : [5, 5]
                }
            };
            m = new createjs.SpriteSheet(m);
            k = createSprite(m, a, l[s_iModeGame], n[s_iModeGame] - 10, l[s_iModeGame], n[s_iModeGame]);
            k.gotoAndStop(a)
        } else m = {
            images: [s_oSpriteLibrary.getSprite("player_" + s_iModeGame + "_" + a)],
            framerate: 30,
            frames: {
                width: PLAYER_SPRITE_WIDTH[a],
                height: PLAYER_SPRITE_HEIGHT[a],
                regX: PLAYER_SPRITE_WIDTH[a] / 2,
                regY: PLAYER_SPRITE_HEIGHT[a] / 2 + 20
            },
            animations: {
                idle: [0, 26, !0, .5],
                walk: [27, 40],
                slide: [41, 41, !1, .3]
            }
        },
        m = new createjs.SpriteSheet(m),
        k = createSprite(m, "idle", PLAYER_SPRITE_WIDTH[a], PLAYER_SPRITE_HEIGHT[a], PLAYER_SPRITE_WIDTH[a], PLAYER_SPRITE_HEIGHT[a]);
        k.x = ZERO_SQUARE_POSITIONS[a][0];
        k.y = ZERO_SQUARE_POSITIONS[a][1];
        h = 0;
        g.addChild(k);
        d = createBitmap(s_oSpriteLibrary.getSprite("arrow"));
        d.regX = 15;
        d.regY = 80;
        d.visible = !1;
        g.addChild(d); (new createjs.Tween.get(d, {
            loop: !0
        })).to({
            scaleY: 1.2
        },
        500, createjs.Ease.quadIn).to({
            scaleY: 1
        },
        500, createjs.Ease.quadIn)
    };
    this.animationWalk = function() {
        k.gotoAndPlay("walk")
    };
    this.animationSlide = function() {
        k.gotoAndPlay("slide")
    };
    this.animationIdle = function() {
        k.gotoAndPlay("idle")
    };
    this.getArrow = function() {
        return d
    };
    this.setArrowVisible = function(a) {
        d.visible = a
    };
    this.isArrowVisible = function() {
        return d.visible
    };
    this.setArrowX = function(a) {
        d.x = a
    };
    this.setArrowY = function(a) {
        d.y = a
    };
    this.setVisible = function(a) {
        k.visible = a;
        c.visible = a
    };
    this.getSprite = function() {
        return k
    };
    this.getShadow = function() {
        return c
    };
    this.getPosition = function() {
        return h
    };
    this.setPosition = function(a) {
        h = a
    };
    this.getX = function() {
        return k.x
    };
    this.getY = function() {
        return k.y
    };
    this.setX = function(a) {
        k.x = c.x = a
    };
    this.setY = function(a) {
        k.y = c.y = a
    };
    this.decreasePosition = function() {--h
    };
    this.increasePosition = function() {
        h += 1
    };
    this.unload = function() {
        s_oPlayers = null
    };
    this.update = function() {
        var a = f[e][0],
        b = f[e][1];
        s_iModeGame === MODE_CHUTES && (k.scaleX = a > k.x ? 1 : -1);
        k.x = a;
        k.y = b;
        e++;
        e >= f.length && (e = 0, s_oGame.onEndChuteAnimation())
    };
    s_oPlayers = this;
    this._init()
}
var s_oPlayers;
function CPauseButton(a) {
    var g, b, e, c, k;
    this.init = function(a) {
        s_oGame.pause(!0);
        c = new createjs.Container;
        k = a;
        k.addChild(c);
        g = new createjs.Shape;
        g.graphics.beginFill("#black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        g.alpha = .7;
        g.on("mousedown",
        function() {});
        b = new createjs.Text(TEXT_PAUSE, " 40px " + PRIMARY_FONT, THIRD_FONT_COLOR);
        b.textBaseline = "alphabetic";
        b.textAlign = "center";
        b.x = CANVAS_WIDTH_HALF;
        b.y = CANVAS_HEIGHT_HALF;
        b.outline = 5;
        e = new createjs.Text(TEXT_PAUSE, " 40px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        e.textBaseline = b.textBaseline;
        e.textAlign = b.textAlign;
        e.x = b.x;
        e.y = b.y;
        b.alpha = e.alpha = 1;
        c.addChild(g, b, e)
    };
    this.onExit = function() {
        g.alpha = 0;
        b.alpha = 0;
        e.alpha = 0;
        s_oStage.removeChild(c);
        s_oGame.pause(!1)
    };
    this.init(a)
}
function CPause() {
    var a;
    this._init = function() {
        var g = new createjs.Container;
        g.alpha = 0;
        a = new createjs.Shape;
        a.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = .5;
        var b = new createjs.Shape;
        b.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.hitArea = b;
        a.on("click",
        function() {});
        g.addChild(a);
        b = new createjs.Text(TEXT_PAUSE, "50px " + PRIMARY_FONT, THIRD_FONT_COLOR);
        b.x = .5 * CANVAS_WIDTH;
        b.y = .5 * CANVAS_HEIGHT - 130;
        b.textAlign = "center";
        b.outline = 5;
        g.addChild(b);
        var e = new createjs.Text(TEXT_PAUSE, "50px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        e.x = b.x;
        e.y = b.y;
        e.textAlign = "center";
        g.addChild(e);
        b = s_oSpriteLibrary.getSprite("but_continue"); (new CGfxButton(.5 * CANVAS_WIDTH, .5 * CANVAS_HEIGHT + 70, b, g)).addEventListenerWithParams(ON_MOUSE_UP, this._onLeavePause, this, g);
        s_oStage.addChild(g);
        createjs.Tween.get(g).to({
            alpha: 1
        },
        300, createjs.quartOut)
    };
    this.unload = function() {
        a.off("click",
        function() {});
        s_oStage.removeChild(void 0)
    };
    this._onLeavePause = function(a) {
        createjs.Tween.get(a).to({
            alpha: 0
        },
        300, createjs.quartIn).call(function() {
            s_oInterface.unloadPause();
            s_oGame.pause(!1)
        })
    };
    this._init();
    return this
}
function CMsgBox(a, g) {
    var b, e, c;
    this._init = function(a) {
        c = new createjs.Container;
        d.addChild(c);
        a = new createjs.Shape;
        a.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        a.alpha = .5;
        a.on("click",
        function() {});
        c.addChild(a);
        a = s_oSpriteLibrary.getSprite("msg_box");
        var f = createBitmap(a);
        f.x = CANVAS_WIDTH_HALF;
        f.y = CANVAS_HEIGHT_HALF;
        f.regX = .5 * a.width;
        f.regY = .5 * a.height;
        c.addChild(f);
        b = new createjs.Text(TEXT_ERR_LS, "20px " + PRIMARY_FONT, "#fff");
        b.x = CANVAS_WIDTH_HALF;
        b.y = CANVAS_HEIGHT_HALF - 130;
        b.textAlign = "center";
        b.textBaseline = "middle";
        b.lineWidth = 450;
        c.addChild(b);
        e = new CGfxButton(CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF + 100, s_oSpriteLibrary.getSprite("but_yes"), c);
        e.addEventListener(ON_MOUSE_UP, this._onButOk, this)
    };
    this._onButOk = function() {
        k.unload()
    };
    this.unload = function() {
        e.unload();
        d.removeChild(c)
    };
    var k = this;
    var d = g;
    this._init(a)
}
function CMotivationalMsg(a) {
    var g, b, e, c, k, d, h;
    this._init = function() {
        k = 700;
        if (a !== MSG_DICE) switch (Math.floor(5 * Math.random())) {
        case 0:
            c = a === MSG_GOOD ? TEXT_MOTIVATIONAL0: TEXT_DEMOTIVATIONAL0;
            break;
        case 1:
            c = a === MSG_GOOD ? TEXT_MOTIVATIONAL1: TEXT_DEMOTIVATIONAL1;
            break;
        case 2:
            c = a === MSG_GOOD ? TEXT_MOTIVATIONAL2: TEXT_DEMOTIVATIONAL2;
            break;
        case 3:
            c = a === MSG_GOOD ? TEXT_MOTIVATIONAL3: TEXT_DEMOTIVATIONAL3;
            break;
        case 4:
            c = a === MSG_GOOD ? TEXT_MOTIVATIONAL4: TEXT_DEMOTIVATIONAL4
        } else c = TEXT_EXTRA_DICE;
        e = new createjs.Container;
        a !== MSG_DICE ? (e.x = 0, e.y = CANVAS_HEIGHT_HALF, d = CANVAS_WIDTH + 300, h = CANVAS_HEIGHT_HALF) : (e.x = CANVAS_WIDTH_HALF, e.y = -100, d = CANVAS_WIDTH_HALF, h = CANVAS_HEIGHT + 300);
        s_oStage.addChild(e);
        b = new createjs.Text(c, "60px " + PRIMARY_FONT, THIRD_FONT_COLOR);
        b.textAlign = "center";
        b.textBaseline = "alphabetic";
        b.lineWidth = 700;
        b.outline = 3;
        g = new createjs.Text(c, "60px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        g.lineWidth = b.lineWidth;
        e.addChild(g, b); (new createjs.Tween.get(e)).to({
            x: CANVAS_WIDTH_HALF,
            y: CANVAS_HEIGHT_HALF
        },
        k, createjs.Ease.cubicIn).call(this.exit)
    };
    this.exit = function() { (new createjs.Tween.get(e)).wait(k).to({
            x: d,
            y: h
        },
        .5 * k, createjs.Ease.cubicOut).call(function() {
            a === MSG_DICE ? s_oGame.extraDiceLaunch() : s_oMotivationalMsg.unload()
        })
    };
    this.unload = function() {
        s_oStage.removeChild(e);
        s_oMotivationalMsg = null
    };
    s_oMotivationalMsg = this;
    this._init()
}
var s_oMotivationalMsg;
function CModeChoose() {
    var a, g, b, e, c, k, d, h, f, l, n, m, q, t;
    this._init = function() {
        a = CANVAS_WIDTH_HALF;
        g = CANVAS_HEIGHT_HALF + 30;
        d = createBitmap(s_oSpriteLibrary.getSprite("bg_game0"));
        d.cache(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(d);
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        l.alpha = .5;
        s_oStage.addChild(l);
        var v = s_oSpriteLibrary.getSprite("msg_box");
        h = createBitmap(v);
        h.x = .5 * CANVAS_WIDTH;
        h.y = .5 * CANVAS_HEIGHT;
        h.regX = .5 * v.width;
        h.regY = .5 * v.height;
        s_oStage.addChild(h);
        f = new createjs.Container;
        v = new createjs.Text(TEXT_SELECT_MODE, "40px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        v.textAlign = "center";
        v.x = 0;
        v.y = 40;
        var x = new createjs.Text(TEXT_SELECT_MODE, "40px " + PRIMARY_FONT, SECONDARY_FONT_COLOR);
        x.textAlign = "center";
        x.x = v.x;
        x.y = v.y;
        x.outline = 5;
        f.x = 682;
        f.y = 135;
        f.addChild(x, v);
        s_oStage.addChild(f);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) v = s_oSpriteLibrary.getSprite("audio_icon"),
        c = CANVAS_WIDTH - v.width / 2 - 60,
        k = v.height / 2 + 20,
        n = new CToggle(c, k, v, s_bAudioActive, s_oStage),
        n.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        v = s_oSpriteLibrary.getSprite("but_mode0");
        q = new CGfxButton(a - 100, g, v, s_oStage);
        q.addEventListener(ON_MOUSE_UP,
        function() {
            this._onButPlayRelease(MODE_SNAKES)
        },
        this);
        v = s_oSpriteLibrary.getSprite("but_mode1");
        t = new CGfxButton(a + 100, g, v, s_oStage);
        t.addEventListener(ON_MOUSE_UP,
        function() {
            this._onButPlayRelease(MODE_CHUTES)
        },
        this);
        v = s_oSpriteLibrary.getSprite("but_exit");
        b = CANVAS_WIDTH - v.height / 2 - 20;
        e = v.height / 2 + 20;
        m = new CGfxButton(b, e, v, s_oStage);
        m.addEventListener(ON_MOUSE_UP, this._onExit, this);
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(l);
        createjs.Tween.get(l).to({
            alpha: 0
        },
        1E3).call(function() {
            l.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(a, f) {
        m.setPosition(b - a, e); ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || n.setPosition(c - a, k)
    };
    this.unload = function() {
        m.unload();
        q.unload();
        t.unload();
        t = q = m = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) n.unload(),
        n = null;
        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens();
        s_iModeGame = s_oModeChoose = null
    };
    this._onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButPlayRelease = function(a) {
        this.unload();
        s_oMain.gotoPlayersChoose(a)
    };
    s_oModeChoose = this;
    this._init()
}
var s_oModeChoose = null;
function CMenu() {
    var a, g, b, e, c, k, d, h, f, l, n, m, q, t, v, x = null,
    A = null;
    this._init = function() {
        f = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        f.cache(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(f);
        l = createBitmap(s_oSpriteLibrary.getSprite("logo_menu"));
        l.regX = 304;
        l.regY = 160;
        l.x = CANVAS_WIDTH_HALF;
        l.y = -500;
        s_oStage.addChild(l); (new createjs.Tween.get(l)).to({
            y: CANVAS_HEIGHT_HALF - 100
        },
        500, createjs.Ease.linear); (new createjs.Tween.get(l, {
            loop: !0
        })).to({
            scaleX: 1.1,
            scaleY: 1.1
        },
        850, createjs.Ease.quadOut).to({
            scaleX: 1,
            scaleY: 1
        },
        650, createjs.Ease.quadIn);
        var p = s_oSpriteLibrary.getSprite("but_play");
        c = CANVAS_WIDTH_HALF;
        k = CANVAS_HEIGHT - 120;
        n = new CGfxButton(c, k, p, s_oStage);
        n.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        n.pulseAnimation();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p = s_oSpriteLibrary.getSprite("audio_icon"),
        d = CANVAS_WIDTH - p.height / 2 - 20,
        h = p.height / 2 + 20,
        t = new CToggle(d, h, p, s_bAudioActive, s_oStage),
        t.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        var r = s_oSpriteLibrary.getSprite("but_info");
        b = p.height / 2 + 20;
        e = p.height / 2 + 20;
        m = new CGfxButton(b, e, r, s_oStage);
        m.addEventListener(ON_MOUSE_UP, this._onButInfoRelease, this);
        p = window.document;
        r = p.documentElement;
        x = r.requestFullscreen || r.mozRequestFullScreen || r.webkitRequestFullScreen || r.msRequestFullscreen;
        A = p.exitFullscreen || p.mozCancelFullScreen || p.webkitExitFullscreen || p.msExitFullscreen; ! 1 === ENABLE_FULLSCREEN && (x = !1);
        x && !1 === inIframe() && (p = s_oSpriteLibrary.getSprite("but_fullscreen"), a = b + p.width / 2 + 10, g = e, v = new CToggle(a, g, p, s_bFullscreen, s_oStage), v.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        q = new createjs.Shape;
        q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(q);
        createjs.Tween.get(q).to({
            alpha: 0
        },
        1E3).call(function() {
            q.visible = !1
        });
        s_bStorageAvailable ? (p = getItem("snakesandladders_gameswon"), null !== p && (s_aGamesWon = p), p = getItem("snakesandladders_gamesplayed"), null !== p && (s_aGamesPlayed = p)) : new CMsgBox(TEXT_ERR_LS, s_oStage);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(f, q) {
        n.setPosition(c, k - q);
        m.setPosition(b + f, e); ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || t.setPosition(d - f, h);
        x && !1 === inIframe() && v.setPosition(a + f, g)
    };
    this.unload = function() {
        n.unload();
        n = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) t.unload(),
        t = null;
        x && !1 === inIframe() && v.unload();
        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens();
        s_oMenu = null
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButInfoRelease = function() {
        new CCreditsPanel
    };
    this._onButPlayRelease = function() {
        this.unload();
        s_oMain.gotoModeChoose()
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? (A.call(window.document), s_bFullscreen = !1) : (x.call(window.document.documentElement), s_bFullscreen = !0);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;
function CMain(a) {
    var g, b = 0,
    e = 0,
    c = STATE_LOADING,
    k, d;
    this.initContainer = function() {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        createjs.Touch.enable(s_oStage);
        s_oStage.preventSelection = !1;
        a.opacity = .5;
        s_bMobile = jQuery.browser.mobile; ! 1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas",
        function(a) {
            return ! 1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(30);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        k = new CPreloader;
        g = !0
    };
    this.soundLoaded = function() {
        b++;
        k.refreshLoader(Math.floor(b / e * 100));
        b === e && this._onRemovePreloader()
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        a.push({
            path: "./sounds/",
            filename: "but_press",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: "./sounds/",
            filename: "game_win",
            loop: !1,
            volume: 1,
            ingamename: "game_win"
        });
        a.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        a.push({
            path: "./sounds/",
            filename: "bonus",
            loop: !1,
            volume: 1,
            ingamename: "bonus"
        });
        a.push({
            path: "./sounds/",
            filename: "malus",
            loop: !1,
            volume: 1,
            ingamename: "malus"
        });
        a.push({
            path: "./sounds/",
            filename: "step_land",
            loop: !1,
            volume: 1,
            ingamename: "step_land"
        });
        a.push({
            path: "./sounds/",
            filename: "ladder",
            loop: !1,
            volume: 1,
            ingamename: "ladder"
        });
        a.push({
            path: "./sounds/",
            filename: "dices",
            loop: !1,
            volume: 1,
            ingamename: "dices"
        });
        a.push({
            path: "./sounds/",
            filename: "snake",
            loop: !1,
            volume: 1,
            ingamename: "snake"
        });
        a.push({
            path: "./sounds/",
            filename: "eat",
            loop: !1,
            volume: 1,
            ingamename: "eat"
        });
        a.push({
            path: "./sounds/",
            filename: "chute",
            loop: !1,
            volume: 1,
            ingamename: "chute"
        });
        e += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++) s_aSounds[a[b].ingamename] = new Howl({
            src: [a[b].path + a[b].filename + ".mp3", a[b].path + a[b].filename + ".ogg"],
            autoplay: !1,
            preload: !0,
            loop: a[b].loop,
            volume: a[b].volume,
            onload: s_oMain.soundLoaded()
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        for (var a = 0; 6 > a; a++) s_oSpriteLibrary.addSprite("player_1_" + a, "./sprites/players1/player_" + a + ".png");
        for (a = 1; 7 > a; a++) s_oSpriteLibrary.addSprite("dice_" + a, "./sprites/dice_" + a + ".png");
        for (a = 0; a < LADDERS_SQUARES.length; a++) s_oSpriteLibrary.addSprite("ladder_" + LADDERS_SQUARES[a], "./sprites/ladders/ladder_" + +LADDERS_SQUARES[a] + ".png");
        for (a = 0; a < OBSTACLES_SQUARES.length; a++) s_oSpriteLibrary.addSprite("snake_" + OBSTACLES_SQUARES[a], "./sprites/snakes/snake_" + +OBSTACLES_SQUARES[a] + ".png"),
        s_oSpriteLibrary.addSprite("chute_" + OBSTACLES_SQUARES[a], "./sprites/chutes/chute_" + +OBSTACLES_SQUARES[a] + ".png");
        for (a = 0; 2 > a; a++) s_oSpriteLibrary.addSprite("but_mode" + a, "./sprites/but_mode" + a + ".png"),
        s_oSpriteLibrary.addSprite("bg_game" + a, "./sprites/bg_game" + a + ".jpg"),
        s_oSpriteLibrary.addSprite("turns" + a, "./sprites/turns" + a + ".png"),
        s_oSpriteLibrary.addSprite("playerbig_" + a, "./sprites/playerbig_" + a + ".png"),
        s_oSpriteLibrary.addSprite("but_play" + a, "./sprites/but_play" + a + ".png");
        s_oSpriteLibrary.addSprite("logo_menu", "./sprites/logo_menu.png");
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_dice", "./sprites/but_dice.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("but_settings", "./sprites/but_settings.png");
        s_oSpriteLibrary.addSprite("but_help", "./sprites/but_help.png");
        s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_skip_small.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("but_skip_small", "./sprites/but_skip_small.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("launch_dice", "./sprites/launch_dices.png");
        s_oSpriteLibrary.addSprite("player_shadow", "./sprites/player_shadow.png");
        s_oSpriteLibrary.addSprite("turn_panel", "./sprites/turn_panel.png");
        s_oSpriteLibrary.addSprite("arrow", "./sprites/arrow.png");
        s_oSpriteLibrary.addSprite("help_ladder_ch", "./sprites/help_ladder_ch.png");
        s_oSpriteLibrary.addSprite("help_ladder_sn", "./sprites/help_ladder_sn.png");
        s_oSpriteLibrary.addSprite("help_snake", "./sprites/help_snake.png");
        s_oSpriteLibrary.addSprite("help_chute", "./sprites/help_chute.png");
        s_oSpriteLibrary.addSprite("help_ladder_anim_sn", "./sprites/help_ladder_anim_sn.png");
        s_oSpriteLibrary.addSprite("help_ladder_anim_ch", "./sprites/help_ladder_anim_ch.png");
        s_oSpriteLibrary.addSprite("help_chute_anim", "./sprites/help_chute_anim.png");
        s_oSpriteLibrary.addSprite("players_0", "./sprites/players_0.png");
        e += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        k.refreshLoader(Math.floor(b / e * 100));
        b === e && this._onRemovePreloader()
    };
    this._onAllImagesLoaded = function() {};
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this.preloaderReady = function() {
        this._loadImages(); ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        g = !0
    };
    this._onRemovePreloader = function() {
        try {
            saveItem("ls_available", "ok")
        } catch(h) {
            s_bStorageAvailable = !1
        }
        k.unload();
        isIOS() || !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || (s_oSoundTrack = playSound("soundtrack", 1, !0));
        this.gotoMenu()
    };
    this.gotoMenu = function() {
        new CMenu;
        c = STATE_MENU
    };
    this.gotoModeChoose = function() {
        new CModeChoose;
        c = STATE_MENU
    };
    this.gotoPlayersChoose = function(a) {
        s_iModeGame = a;
        new CPlayersChoose;
        c = STATE_MENU
    };
    this.gotoColourChoose = function(a) {
        new CColourChoose(a);
        c = STATE_MENU
    };
    this.gotoGame = function(a, b) {
        d = new CGame(a, b);
        c = STATE_GAME
    };
    this.gotoHelp = function() {
        new CHelp;
        c = STATE_HELP
    };
    this.stopUpdate = function() {
        g = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        s_bAudioActive && Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        g = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(a) {
        if (!1 !== g) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            c === STATE_GAME && d.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    PERFECT_SCORE = a.perfect_score;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
s_iCntTime = 0,
s_bFullscreen = !1,
s_iTimeElaps = 0,
s_iPrevTime = 0,
s_iCntFps = 0,
s_iCurFps = 0,
s_oPhysicsController, s_oAdsLevel = 1,
s_oDrawLayer, s_oStage, s_oScrollStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack, s_bStorageAvailable = !0,
s_aGamesWon = 0,
s_aGamesPlayed = 0,
s_iModeGame;
function CLosePanel(a) {
    var g, b, e, c, k, d, h, f, l, n, m;
    this._init = function(a) {
        $(s_oMain).trigger("save_score", s_aGamesWon);
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        m.alpha = 0;
        s_oStage.addChild(m);
        f = new createjs.Container;
        f.alpha = 1;
        f.visible = !1;
        f.y = CANVAS_HEIGHT;
        g = createBitmap(a);
        g.x = CANVAS_WIDTH_HALF;
        g.y = CANVAS_HEIGHT_HALF;
        g.regX = .5 * a.width;
        g.regY = .5 * a.height;
        f.addChild(g);
        b = new createjs.Text(TEXT_LOSE, "40px " + PRIMARY_FONT, SECONDARY_FONT_COLOR);
        b.x = CANVAS_WIDTH_HALF;
        b.y = 220;
        b.textAlign = "center";
        b.outline = 5;
        b.textBaseline = "middle";
        f.addChild(b);
        e = new createjs.Text(TEXT_LOSE, "40px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        e.x = b.x;
        e.y = b.y;
        e.textAlign = b.textAlign;
        e.textBaseline = b.textBaseline;
        f.addChild(e);
        c = new createjs.Text(TEXT_GAMES_PLAYED + ": " + s_aGamesPlayed, "20px " + PRIMARY_FONT, SECONDARY_FONT_COLOR);
        c.x = CANVAS_WIDTH_HALF;
        c.y = 270;
        c.textAlign = "center";
        c.outline = 5;
        c.textBaseline = "middle";
        f.addChild(c);
        k = new createjs.Text(TEXT_GAMES_PLAYED + ": " + s_aGamesPlayed, "20px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        k.x = c.x;
        k.y = c.y;
        k.textAlign = c.textAlign;
        k.textBaseline = c.textBaseline;
        f.addChild(k);
        d = new createjs.Text(TEXT_GAMES_WON + ": " + s_aGamesWon, "20px " + PRIMARY_FONT, SECONDARY_FONT_COLOR);
        d.x = CANVAS_WIDTH_HALF;
        d.y = 300;
        d.textAlign = "center";
        d.outline = 5;
        d.textBaseline = "middle";
        f.addChild(d);
        h = new createjs.Text(TEXT_GAMES_WON + ": " + s_aGamesWon, "20px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        h.x = d.x;
        h.y = d.y;
        h.textAlign = d.textAlign;
        h.textBaseline = d.textBaseline;
        f.addChild(h);
        s_oStage.addChild(f);
        a = s_oSpriteLibrary.getSprite("but_home");
        l = new CGfxButton(CANVAS_WIDTH_HALF - 150, CANVAS_HEIGHT_HALF + 80, a, f);
        l.addEventListener(ON_MOUSE_DOWN, this._onExit, this);
        a = s_oSpriteLibrary.getSprite("but_restart");
        n = new CGfxButton(CANVAS_WIDTH_HALF + 150, CANVAS_HEIGHT_HALF + 80, a, f);
        n.addEventListener(ON_MOUSE_DOWN, this._onRestart, this);
        n.pulseAnimation()
    };
    this.unload = function() {
        createjs.Tween.get(f).to({
            alpha: 0
        },
        500, createjs.Ease.cubicOut).call(function() {
            s_oStage.removeChild(f);
            l.unload();
            l = null;
            m.removeAllEventListeners();
            n.unload();
            n = null
        })
    };
    this.show = function() {
        f.visible = !0;
        createjs.Tween.get(m).to({
            alpha: .5
        },
        500, createjs.Ease.cubicOut);
        m.on("click",
        function() {});
        createjs.Tween.get(f).wait(250).to({
            y: 0
        },
        1250, createjs.Ease.elasticOut).call(function() {
            $(s_oMain).trigger("show_interlevel_ad")
        })
    };
    this._onRestart = function() {
        this.unload();
        createjs.Tween.get(m).to({
            alpha: 0
        },
        400, createjs.Ease.cubicOut).call(function() {
            s_oStage.removeChild(m)
        });
        s_oGame.restartGame()
    };
    this._onExit = function() {
        this.unload();
        s_oGame.onExit()
    };
    this._init(a);
    return this
}
var TEXT_HELP1 = "REACH THE END OF THE BOARD LAUNCHING THE DICE. ROLLING A 6 WILL GIVE THE PLAYER AN EXTRA DICE",
TEXT_HELP2_PT1 = "LADDER: YOU GO UP!",
TEXT_HELP2_PT2 = ": YOU GO DOWN!",
TEXT_MODE0 = "SNAKE",
TEXT_MODE1 = "CHUTE",
TEXT_EXTRA_DICE = "EXTRA DICE!",
TEXT_SELECT_MODE = "SELECT GAME MODE",
TEXT_SELECT_PLAYERS = "SELECT PLAYERS",
TEXT_SELECT_COLOUR = "SELECT YOUR COLOUR",
TEXT_GAMES_PLAYED = "GAMES PLAYED",
TEXT_GAMES_WON = "GAMES WON",
TEXT_WIN = "YOU WON",
TEXT_LOSE = "YOU LOSE",
TEXT_PAUSE = "PAUSE",
TEXT_ARE_SURE = "ARE YOU SURE?",
TEXT_MOTIVATIONAL0 = "GREAT!",
TEXT_MOTIVATIONAL1 = "COOL!",
TEXT_MOTIVATIONAL2 = "NICE!",
TEXT_MOTIVATIONAL3 = "SUPER!",
TEXT_MOTIVATIONAL4 = "GOOD!",
TEXT_DEMOTIVATIONAL0 = "BAD ROLL!",
TEXT_DEMOTIVATIONAL1 = "NOOOO!",
TEXT_DEMOTIVATIONAL2 = "SORRY...",
TEXT_DEMOTIVATIONAL3 = "UNLUCKY!",
TEXT_DEMOTIVATIONAL4 = "BAD RESULT!",
TEXT_CREDITS_DEVELOPED = "Developed by",
TEXT_LINK = "www.codethislab.com",
TEXT_ERR_LS = "YOUR WEB BROWSER DOES NOT SUPPORT LOCAL STORAGE. IF YOU'RE USING SAFARI, IT MAY BE RELATED TO PRIVATE BROWSING. AS A RESULT, SOME INFO MAY NOT BE SAVED OR SOME FEATURES MAY NOT BE AVAILABLE.",
TEXT_SHARE_IMAGE = "200x200.jpg",
TEXT_SHARE_TITLE = "Congratulations!",
TEXT_SHARE_MSG1 = "You collected <strong>",
TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
TEXT_SHARE_SHARE1 = "My score is ",
TEXT_SHARE_SHARE2 = " points! Can you do better?";
function CInterface(a) {
    var g, b, e, c, k, d, h, f, l, n, m, q, t, v, x = null,
    A, p, r, u, w, y, z, B, D, C = null,
    E = null;
    this._init = function() {
        k = CANVAS_WIDTH - 50;
        d = CANVAS_HEIGHT - 50;
        u = new CDiceButton(k, d, s_oStage);
        u.addEventListener(ON_MOUSE_UP, this._onDicesLaunch, this);
        D = !1;
        t = new createjs.Container;
        v = new createjs.Container;
        s_oStage.addChild(t);
        t.addChild(v);
        var a = s_oSpriteLibrary.getSprite("but_settings");
        g = CANVAS_WIDTH - a.width / 2 - 10;
        b = a.height / 2 + 10;
        a = s_oSpriteLibrary.getSprite("but_exit");
        m = g;
        q = b + a.height + 10;
        w = new CGfxButton(m, q, a, t);
        w.addEventListener(ON_MOUSE_UP, this._onExit, this);
        w.setVisible(!1);
        a = s_oSpriteLibrary.getSprite("but_help");
        e = g;
        c = q + a.height + 10;
        z = new CGfxButton(e, c, a, t);
        z.addEventListener(ON_MOUSE_UP,
        function() {
            new CHelpPanel
        },
        this);
        z.setVisible(!1);
        l = e;
        n = c + a.height + 10;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) a = s_oSpriteLibrary.getSprite("audio_icon"),
        p = new CToggle(l, n, a, s_bAudioActive, t),
        p.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this),
        p.setVisible(!1);
        a = window.document;
        var F = a.documentElement;
        C = F.requestFullscreen || F.mozRequestFullScreen || F.webkitRequestFullScreen || F.msRequestFullscreen;
        E = a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen; ! 1 === ENABLE_FULLSCREEN && (C = !1);
        C && !inIframe() && (a = s_oSpriteLibrary.getSprite("but_fullscreen"), p ? (h = l, f = n + a.height + 10) : (h = l, f = n), y = new CToggle(h, f, a, s_bFullscreen, t), y.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this), y.setVisible(!1));
        a = s_oSpriteLibrary.getSprite("but_settings");
        r = new CGfxButton(g, b, a, t);
        r.addEventListener(ON_MOUSE_UP, this.onSettings);
        B = !1;
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.onSettings = function() {
        B ? s_oInterface.closePanel() : (A = new CPauseButton(v), B = !0, w.setX(r.getX()), w.setY(r.getY()), w.setVisible(!0), z.setX(r.getX()), z.setY(r.getY()), z.setVisible(!0), p && (p.setPosition(r.getX(), r.getY()), p.setVisible(!0), (new createjs.Tween.get(p.getButtonImage())).to({
            x: l - s_iOffsetX,
            y: n
        },
        300, createjs.Ease.cubicOut)), y && (y.setPosition(r.getX(), r.getY()), y.setVisible(!0), (new createjs.Tween.get(y.getButtonImage())).to({
            x: h - s_iOffsetX,
            y: f
        },
        300, createjs.Ease.cubicOut)), (new createjs.Tween.get(w.getButtonImage())).to({
            x: m - s_iOffsetX,
            y: q
        },
        300, createjs.Ease.cubicOut), (new createjs.Tween.get(z.getButtonImage())).to({
            x: e - s_iOffsetX,
            y: c
        },
        300, createjs.Ease.cubicOut))
    };
    this.closePanel = function() {
        A.onExit();
        B = !1; (new createjs.Tween.get(w.getButtonImage())).to({
            x: r.getX(),
            y: r.getY()
        },
        300, createjs.Ease.cubicIn).call(function() {
            w.setVisible(!1);
            z.setVisible(!1);
            p && p.setVisible(!1);
            y && y.setVisible(!1)
        }); (new createjs.Tween.get(z.getButtonImage())).to({
            x: r.getX(),
            y: r.getY()
        },
        300, createjs.Ease.cubicIn);
        p && (new createjs.Tween.get(p.getButtonImage())).to({
            x: r.getX(),
            y: r.getY()
        },
        300, createjs.Ease.cubicIn);
        y && (new createjs.Tween.get(y.getButtonImage())).to({
            x: r.getX(),
            y: r.getY()
        },
        300, createjs.Ease.cubicIn)
    };
    this.unloadPause = function() {};
    this.unload = function() {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p.unload(),
        p = null;
        u.unload();
        w.unload();
        s_oStage.removeChild(t);
        C && !inIframe() && y.unload();
        s_oInterface = null
    };
    this.animationDiceButton = function() {
        u.pulseAnimation()
    };
    this.animationDiceButtonStop = function() {
        u.removeAllTweens()
    };
    this.getButDicesX = function() {
        return u.getX()
    };
    this.refreshButtonPos = function(t, F) {
        r.setPosition(g - t, b);
        w.setPosition(m - t, q);
        z.setPosition(e - t, c);
        u.setPosition(k - t, d - F); ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.setPosition(l - t, n);
        C && !inIframe() && y.setPosition(h - t, f);
        a.refreshPosition(t)
    };
    this._onButHelpRelease = function() {
        x = new CHelpPanel
    };
    this._onButRestartRelease = function() {
        s_oGame.restartGame();
        $(s_oMain).trigger("restart_level", 1)
    };
    this.onExitFromHelp = function() {
        x.unload()
    };
    this._onExit = function() {
        new CAreYouSurePanel(s_oGame.onExit)
    };
    this.gameOver = function(a) {
        new CEndPanel(a)
    };
    this.showWin = function() {
        new CWinPanel
    };
    this.getButtonDices = function() {
        return u
    };
    this.enableDices = function(a) {
        D = a;
        u.toggle(a)
    };
    this.DicesEnabled = function() {
        return D
    };
    this._onDicesLaunch = function() {
        s_oGame.launchDices();
        this.enableDices(!1);
        this.animationDiceButtonStop()
    };
    this.isAreYouSurePanel = function() {
        return null === _oAreYouSurePanel ? !1 : !0
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? (E.call(window.document), s_bFullscreen = !1) : (C.call(window.document.documentElement), s_bFullscreen = !0);
        sizeHandler()
    };
    this._onRestart = function() {
        s_oGame.onRestart()
    };
    s_oInterface = this;
    this._init();
    return this
}
var s_oInterface = null;
function CHelpPanel() {
    var a, g, b, e, c, k, d, h, f, l, n, m, q, t, v, x, A;
    this._init = function() {
        var p = CANVAS_HEIGHT_HALF - 140;
        var r = CANVAS_HEIGHT_HALF - 10;
        var u = CANVAS_HEIGHT_HALF + 80;
        var w = s_oSpriteLibrary.getSprite("bg_help");
        v = createBitmap(w);
        v.x = CANVAS_WIDTH_HALF;
        v.y = CANVAS_HEIGHT_HALF;
        v.regX = .5 * w.width;
        v.regY = .5 * w.height;
        t = new createjs.Shape;
        t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        t.alpha = .7;
        t.on("mousedown",
        function() {});
        x = new createjs.Container;
        x.addChild(t, v);
        s_oStage.addChild(x);
        b = new createjs.Text(TEXT_HELP1, " 22px " + PRIMARY_FONT, SECONDARY_FONT_COLOR);
        b.x = CANVAS_WIDTH_HALF;
        b.y = p;
        b.textAlign = "center";
        b.textBaseline = "alphabetic";
        b.lineWidth = 500;
        b.lineHeight = 25;
        b.outline = 4;
        k = new createjs.Text(TEXT_HELP1, " 22px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        k.x = b.x;
        k.y = b.y;
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.lineHeight = 25;
        k.lineWidth = 500;
        e = new createjs.Text(TEXT_HELP2_PT1, " 22px " + PRIMARY_FONT, SECONDARY_FONT_COLOR);
        e.x = CANVAS_WIDTH_HALF - 120;
        e.y = r;
        e.textAlign = "left";
        e.textBaseline = "alphabetic";
        e.lineWidth = 320;
        e.lineHeight = 25;
        e.outline = 4;
        d = new createjs.Text(TEXT_HELP2_PT1, " 22px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        d.x = e.x;
        d.y = e.y;
        d.textAlign = e.textAlign;
        d.textBaseline = e.textBaseline;
        d.lineHeight = e.lineHeight;
        d.lineWidth = e.lineWidth;
        c = new createjs.Text(" ", " 22px " + PRIMARY_FONT, SECONDARY_FONT_COLOR);
        c.x = CANVAS_WIDTH_HALF + 120;
        c.y = u;
        c.textAlign = "right";
        c.textBaseline = "alphabetic";
        c.lineWidth = 320;
        c.lineHeight = 25;
        c.outline = 4;
        h = new createjs.Text(" ", " 22px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        h.x = c.x;
        h.y = c.y;
        h.textAlign = c.textAlign;
        h.textBaseline = c.textBaseline;
        h.lineHeight = c.lineHeight;
        h.lineWidth = c.lineWidth;
        c.text = s_iModeGame === MODE_SNAKES ? h.text = TEXT_MODE0 + TEXT_HELP2_PT2: h.text = TEXT_MODE1 + TEXT_HELP2_PT2;
        if (s_iModeGame === MODE_SNAKES) {
            var y = s_oSpriteLibrary.getSprite("help_ladder_sn");
            w = s_oSpriteLibrary.getSprite("help_ladder_anim_sn");
            p = s_oSpriteLibrary.getSprite("help_ladder_anim_sn")
        } else y = s_oSpriteLibrary.getSprite("help_ladder_ch"),
        w = s_oSpriteLibrary.getSprite("help_ladder_anim_ch"),
        p = s_oSpriteLibrary.getSprite("help_chute_anim");
        f = createBitmap(y);
        f.regX = .5 * y.width;
        f.regY = .5 * y.height;
        f.x = CANVAS_WIDTH_HALF - 200;
        f.y = r;
        l = createBitmap(w);
        l.regX = .5 * w.width;
        l.regY = .5 * w.height;
        l.x = f.x + [35, 30][s_iModeGame];
        l.y = f.y + 10; (new createjs.Tween.get(l, {
            loop: !0
        })).to({
            x: f.x - 25,
            y: f.y - 60
        },
        1E3, createjs.Ease.cubicIn).wait(500);
        r = s_iModeGame === MODE_SNAKES ? s_oSpriteLibrary.getSprite("help_snake") : s_oSpriteLibrary.getSprite("help_chute");
        q = createBitmap(r);
        q.regX = .5 * r.width;
        q.regY = .5 * r.height;
        q.x = CANVAS_WIDTH_HALF + 200;
        q.y = u;
        x.addChild(b, k, e, d, c, h, f, l, q);
        s_iModeGame === MODE_SNAKES ? (n = createBitmap(p), n.regX = .5 * p.width, n.regY = .5 * p.height, n.x = q.x - 20, n.y = q.y - 45, n.scaleX = n.scaleY = .6, x.addChild(n), (new createjs.Tween.get(n, {
            loop: !0
        })).to({
            x: q.x,
            y: q.y - 15
        },
        300, createjs.Ease.linear).to({
            x: q.x + 25,
            y: q.y
        },
        300, createjs.Ease.linear).to({
            x: q.x + 30,
            y: q.y + 10
        },
        300, createjs.Ease.linear).wait(500)) : (m = createBitmap(p), m.regX = .5 * p.width, m.regY = .5 * p.height, m.x = q.x - 25, m.y = q.y - 35, m.scaleX = m.scaleY = .6, x.addChild(m), (new createjs.Tween.get(m, {
            loop: !0
        })).to({
            x: q.x,
            y: q.y - 15
        },
        300, createjs.Ease.linear).to({
            x: q.x + 10,
            y: q.y
        },
        300, createjs.Ease.linear).to({
            x: q.x + 35,
            y: q.y + 15
        },
        300, createjs.Ease.linear).wait(500));
        u = s_oSpriteLibrary.getSprite("but_skip_small");
        a = CANVAS_WIDTH_HALF;
        g = CANVAS_HEIGHT_HALF + 180;
        A = new CGfxButton(a, g, u, s_oStage);
        A.addEventListener(ON_MOUSE_UP, this._onExitHelp, this);
        t = new createjs.Shape;
        t.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(t);
        createjs.Tween.get(t).to({
            alpha: 0
        },
        1E3).call(function() {
            t.visible = !1
        })
    };
    this.unload = function() {
        s_oStage.removeChild(x);
        A.unload();
        var a = this;
        x.off("pressup",
        function() {
            a._onExitHelp()
        })
    };
    this._onExitHelp = function() {
        this.unload();
        setTimeout(s_oGame._onExitHelp, 200)
    };
    this._init()
}
function CGfxButton(a, g, b, e) {
    var c, k, d, h, f, l, n = !1;
    this._init = function(a, b, e) {
        c = [];
        k = [];
        h = [];
        d = createBitmap(e);
        d.x = a;
        d.y = b;
        l = f = 1;
        d.regX = e.width / 2;
        d.regY = e.height / 2;
        s_bMobile || (d.cursor = "pointer");
        m.addChild(d);
        this._initListener()
    };
    this.unload = function() {
        d.off("mousedown", this.buttonDown);
        d.off("pressup", this.buttonRelease);
        m.removeChild(d)
    };
    this.setVisible = function(a) {
        d.visible = a
    };
    this.setCursorType = function(a) {
        d.cursor = a
    };
    this._initListener = function() {
        d.on("mousedown", this.buttonDown);
        d.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, e) {
        c[a] = b;
        k[a] = e
    };
    this.addEventListenerWithParams = function(a, b, e, f) {
        c[a] = b;
        k[a] = e;
        h[a] = f
    };
    this.buttonRelease = function() {
        n || (d.scaleX = 0 < f ? 1 : -1, d.scaleY = 1, playSound("click", 1, !1), c[ON_MOUSE_UP] && c[ON_MOUSE_UP].call(k[ON_MOUSE_UP], h[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        n || (d.scaleX = 0 < f ? .9 : -.9, d.scaleY = .9, c[ON_MOUSE_DOWN] && c[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN], h[ON_MOUSE_DOWN]))
    };
    this.rotation = function(a) {
        d.rotation = a
    };
    this.getButton = function() {
        return d
    };
    this.setPosition = function(a, b) {
        d.x = a;
        d.y = b
    };
    this.setX = function(a) {
        d.x = a
    };
    this.setY = function(a) {
        d.y = a
    };
    this.getButtonImage = function() {
        return d
    };
    this.block = function(a) {
        n = a;
        d.scaleX = f;
        d.scaleY = l
    };
    this.setScaleX = function(a) {
        f = d.scaleX = a
    };
    this.getX = function() {
        return d.x
    };
    this.getY = function() {
        return d.y
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(d).to({
            scaleX: .9 * f,
            scaleY: .9 * l
        },
        850, createjs.Ease.quadOut).to({
            scaleX: f,
            scaleY: l
        },
        650, createjs.Ease.quadIn).call(function() {
            q.pulseAnimation()
        })
    };
    this.trebleAnimation = function() {
        createjs.Tween.get(d).to({
            rotation: 5
        },
        75, createjs.Ease.quadOut).to({
            rotation: -5
        },
        140, createjs.Ease.quadIn).to({
            rotation: 0
        },
        75, createjs.Ease.quadIn).wait(750).call(function() {
            q.trebleAnimation()
        })
    };
    this.removeAllTweens = function() {
        createjs.Tween.removeTweens(d)
    };
    var m = e;
    this._init(a, g, b);
    var q = this;
    return this
}
function CGame(a, g) {
    var b, e, c, k, d, h, f, l, n, m, q, t, v, x, A, p, r, u, w, y, z, B, D, C, E, G;
    this._init = function() {
        $(s_oMain).trigger("start_session");
        d = a;
        h = g;
        B = z = null;
        x = v = t = q = !1;
        c = [];
        k = [];
        s_oBezier = new CBezier;
        var b = s_oSpriteLibrary.getSprite("bg_game" + s_iModeGame);
        D = createBitmap(b);
        D.cache(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        A = new createjs.Container;
        p = new createjs.Container;
        r = new createjs.Container;
        s_oStage.addChild(D, A, p, r);
        C = new CBoard(A, p, r);
        w = new createjs.Container;
        u = new createjs.Container;
        s_oStage.addChild(w, u);
        for (b = 0; b < d; b++) c.push(new CPlayers(b, u, w));
        this.arrangePlayerZ();
        G = new CDice;
        E = new CPlayersInterface(d);
        y = new CInterface(E);
        new CHelpPanel;
        m = 0;
        setVolume("soundtrack", .3)
    };
    this._unload = function() {
        q = !1;
        null !== z && z.unload();
        null !== B && B.unload();
        C.unload();
        G.unload();
        y.unload();
        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens(); ! 1 === s_bMobile && (document.onkeydown = null, document.onkeyup = null)
    };
    this.onExit = function() {
        this._unload();
        $(s_oMain).trigger("show_interlevel_ad");
        $(s_oMain).trigger("end_session");
        setVolume("soundtrack", 1);
        s_oMain.gotoMenu()
    };
    this._onExitHelp = function() {
        t = q = !0
    };
    this.pause = function(a) {
        q = !a;
        s_oDices.setPaused(a)
    };
    this.getDiceResult = function(a) {
        l = a
    };
    this.movePlayer = function(a) {
        f = a;
        c[m].setArrowVisible(!1);
        this.setPlayerPos(m)
    };
    this.setPlayerPos = function(a) {
        this.playerAdvance(a, f)
    };
    this.arrangeSquarePlayers = function(a, b, e) {
        e = 0 === e % 2 ? 5 * Math.floor(e / 2) : -5 * Math.floor(e / 2); (new createjs.Tween.get(c[a].getSprite())).to({
            x: this.getBoardSquareX(b) + e,
            y: this.getBoardSquareY(b) + e
        },
        150);
        s_iModeGame === MODE_SNAKES && (new createjs.Tween.get(c[a].getShadow())).to({
            x: this.getBoardSquareX(b) + e,
            y: this.getBoardSquareY(b) + e
        },
        150)
    };
    this.checkForAnotherPlayer = function(a, b) {
        for (var e = 0,
        f = 0; f < c.length; f++) c[f].getPosition() === a && (e += 1);
        1 < e ? (s_oGame.arrangeSquarePlayers(b, a, e), s_oGame.arrangePlayerZ()) : s_oBoard.setSquareOccupied(a, !1)
    };
    this.checkForSpecialSquares = function(a) {
        var f = c[a].getPosition();
        this.checkForAnotherPlayer(f, a);
        v = !0;
        n = 0;
        if (f === LAST_SQUARE) s_oGame.onWin(a); ! 0 === ifArrayContainsValue(OBSTACLES_SQUARES, f) ? (playSound("malus", 1, !1), new CMotivationalMsg(MSG_BAD), b = this.obstacleSquare, e = a) : !0 === ifArrayContainsValue(LADDERS_SQUARES, f) ? (playSound("bonus", 1, !1), new CMotivationalMsg(MSG_GOOD), b = this.ladderSquare, e = a) : (b = this.changeTurn, e = !0)
    };
    this.obstacleSquare = function(a) {
        var b = c[a].getPosition();
        s_oGame.startObstacleAnimation(b, a)
    };
    this.startObstacleAnimation = function(a, b) {
        var e = OBSTACLES_SQUARES.indexOf(a),
        f = c[b].getSprite();
        if (s_iModeGame === MODE_SNAKES) {
            c[b].getShadow().visible = !1;
            var d = C.getObstaclesArray(),
            g = this.getBoardSquareX(a),
            h = this.getBoardSquareY(a);
            d[e].gotoAndPlay("idle");
            playSound("eat", 1, !1); (new createjs.Tween.get(f)).to({
                scaleX: 0,
                scaleY: 0
            },
            300, createjs.Ease.quadOut).to({
                x: g,
                y: h
            },
            SNAKE_SPEED, createjs.Ease.quadOut).call(function() {
                s_oGame.obstacleAnimationOver(b, e)
            })
        } else {
            c[b].animationSlide();
            k.length = 0;
            switch (a) {
            case 16:
                d = CHUTES_COORDS_16;
                break;
            case 47:
                d = CHUTES_COORDS_47;
                break;
            case 49:
                d = CHUTES_COORDS_49;
                break;
            case 56:
                d = CHUTES_COORDS_56;
                break;
            case 62:
                d = CHUTES_COORDS_62;
                break;
            case 64:
                d = CHUTES_COORDS_64;
                break;
            case 87:
                d = CHUTES_COORDS_87;
                break;
            case 93:
                d = CHUTES_COORDS_93;
                break;
            case 95:
                d = CHUTES_COORDS_95;
                break;
            case 98:
                d = CHUTES_COORDS_98
            }
            s_oGame.initCurve(d)
        }
    };
    this.initCurve = function(a) {
        playSound("chute", 1, !1);
        for (var b = 0; b < a.length - 2; b++) for (var c = new createjs.Point(a[b][0], a[b][1]), e = new createjs.Point(a[b + 1][0], a[b + 1][1]), f = new createjs.Point(a[b + 2][0], a[b + 2][1]), b = b + 1, c = s_oBezier.init(c, e, f, STEP_LENGTH), e = 1; e <= c; ++e) f = s_oBezier.getAnchorPoint(e),
        k.push(f);
        x = !0
    };
    this.obstacleAnimationOver = function(a, b) {
        var e = OBSTACLES_MOVEMENT_SQUARES[b][1],
        f = c[a].getSprite(),
        d = BOARD_SQUARES[e][0],
        g = BOARD_SQUARES[e][1];
        if (s_iModeGame === MODE_SNAKES) {
            var h = c[a].getShadow();
            playSound("snake", 1, !1);
            f.x = h.x = d;
            f.y = h.y = g;
            c[a].setVisible(!0); (new createjs.Tween.get(f)).to({
                scaleX: 1,
                scaleY: 1
            },
            250, createjs.Ease.cubicOut)
        } else(new createjs.Tween.get(c[a].getSprite())).to({
            x: d,
            y: g
        },
        100, createjs.Ease.quadIn).call(function() {
            c[a].animationIdle()
        });
        c[a].setPosition(e + 1);
        s_oGame.playerArrived(a)
    };
    this.ladderSquare = function(a) {
        var b, e = c[a].getSprite();
        s_iModeGame === MODE_SNAKES && (b = c[a].getShadow());
        for (var f = 0; f < LADDER_MOVEMENT_SQUARES.length; f++) if (c[a].getPosition() === LADDER_MOVEMENT_SQUARES[f][0]) {
            var d = LADDER_MOVEMENT_SQUARES[f][1],
            g = BOARD_SQUARES[d][0],
            h = BOARD_SQUARES[d][1];
            playSound("ladder", 1, !1); (new createjs.Tween.get(e)).to({
                x: g,
                y: h
            },
            LADDERS_SPEED, createjs.Ease.cubicOut).call(function() {
                c[a].setPosition(d + 1);
                s_oGame.playerArrived(a)
            });
            s_iModeGame === MODE_SNAKES && (new createjs.Tween.get(b)).to({
                x: g,
                y: h
            },
            LADDERS_SPEED, createjs.Ease.cubicOut)
        }
    };
    this.endTimeoutSpecialSquare = function() {
        b(e);
        v = !1
    };
    this.changeTurn = function() {
        s_oDices.fadeOutTween();
        6 !== l ? (m++, m > d - 1 && (m = 0), s_oGame.changePlayerTurn()) : (playSound("bonus", 1, !1), new CMotivationalMsg(MSG_DICE))
    };
    this.extraDiceLaunch = function() {
        s_oDices.show()
    };
    this.playerArrived = function(a) {
        s_iModeGame === MODE_CHUTES && c[a].animationIdle();
        f++;
        c[a].decreasePosition();
        s_oGame.checkToFlip(a);
        this.checkForSpecialSquares(a)
    };
    this.playerBounceTween = function(a) {
        var b = s_oGame.getBoardSquareY(c[a].getPosition()); (new createjs.Tween.get(c[a].getSprite())).to({
            y: b - 20
        },
        150, createjs.Ease.quadIn).to({
            y: b
        },
        150, createjs.Ease.quadIn)
    };
    this.playerAdvance = function(a, b) {
        s_oGame.arrangePlayerZ();
        c[a].increasePosition();
        if (0 === b) s_oGame.playerArrived(a);
        else if (0 < b) {
            var e = s_oGame.getBoardSquareX(c[a].getPosition()),
            f = s_oGame.getBoardSquareY(c[a].getPosition());
            s_oGame.checkToFlip(a);
            if (s_iModeGame === MODE_SNAKES) {
                var d = createjs.Ease.quadIn;
                this.playerBounceTween(a); (new createjs.Tween.get(c[a].getShadow())).to({
                    alpha: .5
                },
                150, createjs.Ease.quadIn).to({
                    alpha: 1
                },
                150, createjs.Ease.quadIn)
            } else d = createjs.Ease.linear,
            c[a].animationWalk(); (new createjs.Tween.get(c[a].getSprite())).to({
                x: e,
                y: f
            },
            300, d).call(function() {
                playSound("step_land", 1, !1);
                s_oGame.arrangePlayerZ();
                b--;
                s_oGame.checkFinalSquare(a, b)
            });
            s_iModeGame === MODE_SNAKES && (new createjs.Tween.get(c[a].getShadow())).to({
                x: e,
                y: f
            },
            300, createjs.Ease.quadIn)
        }
    };
    this.checkFinalSquare = function(a, b) {
        s_oGame.arrangePlayerZ();
        var e = c[a].getPosition();
        if (!0 === PERFECT_SCORE) {
            if (e === LAST_SQUARE && 0 === b) s_oGame.onWin(a);
            e >= LAST_SQUARE ? s_oGame.playerBack(a, b) : s_oGame.playerAdvance(a, b)
        } else if (e === LAST_SQUARE) s_oGame.onWin(a);
        else s_oGame.playerAdvance(a, b)
    };
    this.playerBack = function(a, b) {
        s_oGame.arrangePlayerZ();
        c[a].decreasePosition();
        if (0 === b) s_iModeGame === MODE_CHUTES && c[a].animationIdle(),
        f--,
        c[a].increasePosition(),
        s_oGame.checkForSpecialSquares(a);
        else if (0 < b) {
            s_oGame.checkToFlip(a);
            var e = s_oGame.getBoardSquareX(c[a].getPosition()),
            d = s_oGame.getBoardSquareY(c[a].getPosition()); (new createjs.Tween.get(c[a].getSprite())).to({
                x: e,
                y: d
            },
            100, createjs.Ease.quadIn).call(function() {
                s_oGame.arrangePlayerZ();
                b--;
                s_oGame.playerBack(a, b)
            });
            s_iModeGame === MODE_SNAKES && (new createjs.Tween.get(c[a].getShadow())).to({
                x: e,
                y: d
            },
            100, createjs.Ease.quadIn)
        }
    };
    this.changePlayerTurn = function() {
        s_oGame.arrangePlayerZ();
        s_oGame.setTurnReady(!0);
        return ! 1
    };
    this.setPlayerVisible = function(a) {
        c[a].setVisible(!0)
    };
    this.onWin = function(a) {
        q = !1;
        m = null;
        s_aGamesPlayed++;
        saveItem("snakesandladders_gamesplayed", s_aGamesPlayed);
        a === h ? (s_aGamesWon++, saveItem("snakesandladders_gameswon", s_aGamesWon), s_oGame.gameWin()) : s_oGame.gameOver(a)
    };
    this.gameWin = function(a) {
        null === z && (q = !1, playSound("game_win", 1, !1), z = CWinPanel(s_oSpriteLibrary.getSprite("msg_box"), a), z.show())
    };
    this.setTurnReady = function(a) {
        t = a
    };
    this.isTurnReady = function() {
        return t
    };
    this.gameOver = function(a) {
        null === B && (playSound("game_over", 1, !1), B = CLosePanel(s_oSpriteLibrary.getSprite("msg_box"), a), B.show())
    };
    this.restartGame = function() {
        this._unload();
        this._init()
    };
    this.launchDices = function() {
        m === h && !0 === s_oInterface.DicesEnabled() && !0 === s_oGame.isTurnReady() && s_oDices.show()
    };
    this.getBoardSquareX = function(a) {
        return BOARD_SQUARES[a][0]
    };
    this.getBoardSquareY = function(a) {
        return BOARD_SQUARES[a][1]
    };
    this.arrangePlayerZ = function() {
        for (var a = [], b = 0; b < u.children.length; b++) {
            var c = u.children[b];
            a.push({
                height: c.y,
                player: c
            })
        }
        a.sort(this.compareHeight);
        for (b = c = 0; b < u.children.length; b++) u.setChildIndex(a[b].player, c++)
    };
    this.compareHeight = function(a, b) {
        return a.height < b.height ? -1 : a.height > b.height ? 1 : 0
    };
    this.getPlayerX = function(a) {
        return c[a].getSprite().x
    };
    this.getPlayerY = function(a) {
        return c[a].getSprite().y
    };
    this.checkToFlip = function(a) {
        if (s_iModeGame !== MODE_SNAKES) {
            var b = c[a].getSprite();
            a = c[a].getPosition();
            10 >= a ? b.scaleX = 1 : 10 < a && 20 >= a ? b.scaleX = -1 : 20 < a && 30 >= a ? b.scaleX = 1 : 30 < a && 40 >= a ? b.scaleX = -1 : 40 < a && 50 >= a ? b.scaleX = 1 : 50 < a && 60 >= a ? b.scaleX = -1 : 60 < a && 70 >= a ? b.scaleX = 1 : 70 < a && 80 >= a ? b.scaleX = -1 : 80 < a && 90 >= a ? b.scaleX = 1 : 90 < a && (b.scaleX = -1)
        }
    };
    this.setArrow = function(a) {
        c[a].setArrowX(this.getPlayerX(a));
        c[a].setArrowY(this.getPlayerY(a))
    };
    this.checkForNextTurn = function() {
        m !== h ? (c[m].setArrowVisible(!1), s_oDices.show(), y.enableDices(!1), y.animationDiceButtonStop()) : (!1 === c[m].isArrowVisible() && (c[m].setArrowVisible(!0), this.setArrow(m)), y.enableDices(!0), !0 === y.DicesEnabled() && y.animationDiceButton());
        E.setTurn(m)
    };
    this.getCurveMapData = function() {
        return k
    };
    this.checkForFirstTurn = function() {
        if (s_oDices.isFirstLaunch) for (var a = 0; a < c.length; a++) 0 < c[a].getPosition() ? s_oDices.setFirstLaunch(!1) : s_oDices.setFirstLaunch(!0)
    };
    this.onEndChuteAnimation = function() {
        x = !1;
        for (var a = c[m].getPosition(), b = 0; b < OBSTACLES_MOVEMENT_SQUARES.length; b++) a === OBSTACLES_MOVEMENT_SQUARES[b][0] && s_oGame.obstacleAnimationOver(m, b)
    };
    this.update = function() { ! 0 === q && (!0 === t && this.checkForNextTurn(), !0 === v && (n += s_iTimeElaps, 500 < n && this.endTimeoutSpecialSquare()), x && c[m].update())
    };
    s_oGame = this;
    this._init()
}
var s_oGame, s_oBezier;
function CDiceButton(a, g, b) {
    var e, c, k, d, h, f, l = !1;
    this._init = function(a, b) {
        e = [];
        c = [];
        k = [];
        var g = {
            images: [s_oSpriteLibrary.getSprite("but_dice")],
            framerate: 0,
            frames: {
                width: 84,
                height: 87,
                regX: 42,
                regY: 43
            },
            animations: {
                on: [0, 0, !1],
                off: [1, 1, !1]
            }
        },
        g = new createjs.SpriteSheet(g);
        f = createSprite(g, "on", 42, 42, 84, 83);
        f.x = a;
        f.y = b;
        f.gotoAndPlay("off");
        h = d = 1;
        n.addChild(f);
        this._initListener()
    };
    this.unload = function() {
        f.off("mousedown", this.buttonDown);
        f.off("pressup", this.buttonRelease);
        n.removeChild(f)
    };
    this.toggle = function(a) {
        a ? (f.gotoAndPlay("on"), l = !1, s_bMobile || (f.cursor = "pointer")) : (f.gotoAndPlay("off"), l = !0, s_bMobile || (f.cursor = "normal"))
    };
    this.setVisible = function(a) {
        f.visible = a
    };
    this.setCursorType = function(a) {
        f.cursor = a
    };
    this._initListener = function() {
        f.on("mousedown", this.buttonDown);
        f.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, f) {
        e[a] = b;
        c[a] = f
    };
    this.addEventListenerWithParams = function(a, b, f, d) {
        e[a] = b;
        c[a] = f;
        k[a] = d
    };
    this.buttonRelease = function() {
        l || (f.scaleX = 0 < d ? 1 : -1, f.scaleY = 1, playSound("click", 1, !1), e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(c[ON_MOUSE_UP], k[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        l || (f.scaleX = 0 < d ? .9 : -.9, f.scaleY = .9, e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(c[ON_MOUSE_DOWN], k[ON_MOUSE_DOWN]))
    };
    this.rotation = function(a) {
        f.rotation = a
    };
    this.getButton = function() {
        return f
    };
    this.setPosition = function(a, b) {
        f.x = a;
        f.y = b
    };
    this.setX = function(a) {
        f.x = a
    };
    this.setY = function(a) {
        f.y = a
    };
    this.getButtonImage = function() {
        return f
    };
    this.block = function(a) {
        l = a;
        f.scaleX = d;
        f.scaleY = h
    };
    this.setScaleX = function(a) {
        d = f.scaleX = a
    };
    this.getX = function() {
        return f.x
    };
    this.getY = function() {
        return f.y
    };
    this.pulseAnimation = function() {
        createjs.Tween.get(f, {
            loop: !0
        }).to({
            scaleX: .9 * d,
            scaleY: .9 * h
        },
        850, createjs.Ease.quadOut).to({
            scaleX: d,
            scaleY: h
        },
        650, createjs.Ease.quadIn)
    };
    this.trebleAnimation = function() {
        createjs.Tween.get(f).to({
            rotation: 5
        },
        75, createjs.Ease.quadOut).to({
            rotation: -5
        },
        140, createjs.Ease.quadIn).to({
            rotation: 0
        },
        75, createjs.Ease.quadIn).wait(750).call(function() {
            m.trebleAnimation()
        })
    };
    this.removeAllTweens = function() {
        createjs.Tween.removeTweens(f)
    };
    var n = b;
    this._init(a, g);
    var m = this;
    return this
}
function CDice() {
    var a, g, b, e, c = !1,
    k;
    this._init = function() {
        k = !0;
        s_oGame.setTurnReady(!1);
        a = new createjs.Container;
        s_oStage.addChild(a);
        var c = CANVAS_WIDTH_HALF + 400,
        g = CANVAS_HEIGHT,
        f = {
            images: [s_oSpriteLibrary.getSprite("launch_dice")],
            framerate: 24,
            frames: {
                width: 154,
                height: 234,
                regX: 154,
                regY: 234
            },
            animations: {
                stop: [8, 8],
                idle: [0, 8, "stop"]
            }
        },
        f = new createjs.SpriteSheet(f);
        e = createSprite(f, 0, 154, 234, 154, 234);
        e.x = c;
        e.y = g;
        e.visible = !1;
        a.addChild(e);
        f = {
            images: [s_oSpriteLibrary.getSprite("dice_1"), s_oSpriteLibrary.getSprite("dice_2"), s_oSpriteLibrary.getSprite("dice_3"), s_oSpriteLibrary.getSprite("dice_4"), s_oSpriteLibrary.getSprite("dice_5"), s_oSpriteLibrary.getSprite("dice_6")],
            framerate: 24,
            frames: {
                width: 150,
                height: 410,
                regX: 150,
                regY: 410
            },
            animations: {
                stop1: [11, 11],
                idle1: [0, 11, "stop1"],
                stop2: [23, 23],
                idle2: [12, 23, "stop2"],
                stop3: [35, 35],
                idle3: [24, 35, "stop3"],
                stop4: [47, 47],
                idle4: [36, 47, "stop4"],
                stop5: [59, 59],
                idle5: [48, 59, "stop5"],
                stop6: [71, 71],
                idle6: [60, 71, "stop6"]
            }
        };
        f = new createjs.SpriteSheet(f);
        b = createSprite(f, 0, 75, 205, 150, 410);
        b.x = c;
        b.y = g - 100;
        b.visible = !1;
        a.addChild(b)
    };
    this.isAnimationOn = function() {
        return c
    };
    this.show = function() {
        b.visible = !1;
        b.on("animationend", this.movePlayer);
        s_oGame.setTurnReady(!1);
        g = Math.floor(6 * Math.random() + 1);
        c = !0;
        playSound("dices", 1, !1);
        e.visible = !0;
        e.gotoAndPlay("idle");
        e.on("animationend",
        function() {
            e.visible && s_oDices.secondAnimation()
        })
    };
    this.secondAnimation = function() {
        e.visible = !1;
        b.alpha = 1;
        b.visible = !0;
        b.gotoAndPlay("idle" + g);
        s_oGame.getDiceResult(g);
        c = !1
    };
    this.movePlayer = function() { ! 1 === c && (c = !0, s_oGame.movePlayer(g))
    };
    this.fadeOutTween = function() {
        createjs.Tween.get(b, {
            loop: !1
        }).to({
            alpha: 0
        },
        200).call(this.hide)
    };
    this.returnDiceResult = function() {
        return g
    };
    this.hide = function() {
        b.visible = !1
    };
    this.unload = function() {
        s_oDices = null
    };
    this.isFirstLaunch = function() {
        return k
    };
    this.setFirstLaunch = function(a) {
        k = a
    };
    this.setPaused = function(a) {
        e.tickEnabled = b.tickEnabled = !a
    };
    s_oDices = this;
    this._init()
}
var s_oDices = this;
function CCreditsPanel() {
    var a, g, b, e, c, k, d, h, f, l, n, m;
    this._init = function() {
        b = new createjs.Shape;
        b.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        b.alpha = .5;
        s_oStage.addChild(b);
        var q = s_oSpriteLibrary.getSprite("msg_box");
        m = new createjs.Container;
        m.y = CANVAS_HEIGHT + q.height / 2;
        s_oStage.addChild(m);
        e = createBitmap(q);
        e.regX = q.width / 2;
        e.regY = q.height / 2;
        e.x = CANVAS_WIDTH_HALF;
        e.y = CANVAS_HEIGHT_HALF;
        m.addChild(e);
        h = new createjs.Text(TEXT_CREDITS_DEVELOPED, "40px " + PRIMARY_FONT, SECONDARY_FONT_COLOR);
        h.textAlign = "center";
        h.textBaseline = "alphabetic";
        h.x = CANVAS_WIDTH_HALF;
        h.y = CANVAS_HEIGHT_HALF - 75;
        h.outline = 5;
        m.addChild(h);
        d = new createjs.Text(TEXT_CREDITS_DEVELOPED, "40px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.x = h.x;
        d.y = h.y;
        m.addChild(d);
        q = s_oSpriteLibrary.getSprite("logo_ctl");
        c = createBitmap(q);
        c.regX = q.width / 2;
        c.regY = q.height / 2;
        c.x = CANVAS_WIDTH_HALF;
        c.y = CANVAS_HEIGHT_HALF - 5;
        m.addChild(c);
        n = new createjs.Text(TEXT_LINK, "28px " + PRIMARY_FONT, SECONDARY_FONT_COLOR);
        n.textAlign = "center";
        n.textBaseline = "alphabetic";
        n.x = CANVAS_WIDTH_HALF;
        n.y = CANVAS_HEIGHT_HALF + 75;
        n.outline = 5;
        m.addChild(n);
        l = new createjs.Text(TEXT_LINK, "28px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        l.textAlign = "center";
        l.textBaseline = "alphabetic";
        l.x = n.x;
        l.y = n.y;
        m.addChild(l);
        f = new createjs.Shape;
        f.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = .01;
        f.on("click", this._onLogoButRelease);
        m.addChild(f);
        s_bMobile || (f.cursor = "pointer");
        q = s_oSpriteLibrary.getSprite("but_exit");
        a = CANVAS_WIDTH_HALF + 230;
        g = CANVAS_HEIGHT_HALF - 130;
        k = new CGfxButton(a, g, q, m);
        k.addEventListener(ON_MOUSE_UP, this.unload, this); (new createjs.Tween.get(m)).to({
            y: 0
        },
        1E3, createjs.Ease.backOut)
    };
    this.unload = function() {
        f.off("click", this._onLogoButRelease);
        k.unload();
        k = null;
        s_oStage.removeChild(m, b)
    };
    this._onLogoButRelease = function() {
        
    };
    this._init()
}
function CColourChoose(a) {
    var g, b, e, c, k, d, h, f, l, n, m, q, t, v, x, A, p, r;
    this._init = function() {
        p = new createjs.Container;
        s_oStage.addChild(p);
        k = createBitmap(s_oSpriteLibrary.getSprite("bg_game" + s_iModeGame));
        k.cache(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        p.addChild(k);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = .5;
        p.addChild(f);
        var u = s_oSpriteLibrary.getSprite("msg_box");
        d = createBitmap(u);
        d.x = .5 * CANVAS_WIDTH;
        d.y = .5 * CANVAS_HEIGHT;
        d.regX = .5 * u.width;
        d.regY = .5 * u.height;
        p.addChild(d);
        h = new createjs.Container;
        u = new createjs.Text(TEXT_SELECT_COLOUR, "40px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        u.textAlign = "center";
        u.x = 0;
        u.y = 40;
        var w = new createjs.Text(TEXT_SELECT_COLOUR, "40px " + PRIMARY_FONT, SECONDARY_FONT_COLOR);
        w.textAlign = "center";
        w.x = u.x;
        w.y = u.y;
        w.outline = 5;
        h.x = 682;
        h.y = 135;
        h.addChild(w, u);
        p.addChild(h);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) u = s_oSpriteLibrary.getSprite("audio_icon"),
        e = CANVAS_WIDTH - u.width / 2 - 60,
        c = u.height / 2 + 20,
        l = new CToggle(e, c, u, s_bAudioActive, s_oStage),
        l.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        r = new createjs.Container;
        p.addChild(r);
        u = [50, 30];
        w = [52, 101];
        var y = [155, 112],
        z = [0, 15],
        B = {
            images: [s_oSpriteLibrary.getSprite("playerbig_" + s_iModeGame)],
            framerate: 0,
            frames: {
                width: w[s_iModeGame],
                height: y[s_iModeGame],
                regX: w[s_iModeGame] / 2,
                regY: y[s_iModeGame] / 2
            },
            animations: {
                0 : [0, 0],
                1 : [1, 1],
                2 : [2, 2],
                3 : [3, 3],
                4 : [4, 4],
                5 : [5, 5]
            }
        },
        B = new createjs.SpriteSheet(B);
        m = new CSpritesheetButton(w[s_iModeGame] / 2, y[s_iModeGame] / 2, B, 0, r);
        m.setShape(1);
        s_iModeGame === MODE_SNAKES ? m.setPosition(z[s_iModeGame] + u[s_iModeGame] / 2, y[s_iModeGame] / 1.5) : m.setPosition(z[s_iModeGame] + u[s_iModeGame] / 2 + u[s_iModeGame], y[s_iModeGame] / 1.5);
        m.addEventListener(ON_MOUSE_UP,
        function() {
            this._onButColourRelease(0)
        },
        this);
        q = new CSpritesheetButton(w[s_iModeGame] / 2, y[s_iModeGame] / 2, B, 1, r);
        q.setShape(1);
        q.setPosition(z[s_iModeGame] + (w[s_iModeGame] / 2 * 2 + u[s_iModeGame]), y[s_iModeGame] / 1.5);
        q.addEventListener(ON_MOUSE_UP,
        function() {
            this._onButColourRelease(1)
        },
        this);
        2 < a && (t = new CSpritesheetButton(w[s_iModeGame] / 2, y[s_iModeGame] / 2, B, 2, r), t.setShape(1), t.setPosition(z[s_iModeGame] + (w[s_iModeGame] / 2 * 3 + 2 * u[s_iModeGame]), y[s_iModeGame] / 1.5), t.addEventListener(ON_MOUSE_UP,
        function() {
            this._onButColourRelease(2)
        },
        this), 3 < a && (v = new CSpritesheetButton(w[s_iModeGame] / 2, y[s_iModeGame] / 2, B, 3, r), v.setShape(1), v.setPosition(z[s_iModeGame] + (w[s_iModeGame] / 2 * 4 + 3 * u[s_iModeGame]), y[s_iModeGame] / 1.5), v.addEventListener(ON_MOUSE_UP,
        function() {
            this._onButColourRelease(3)
        },
        this), 4 < a && (x = new CSpritesheetButton(w[s_iModeGame] / 2, y[s_iModeGame] / 2, B, 4, r), x.setShape(1), x.setPosition(z[s_iModeGame] + (w[s_iModeGame] / 2 * 5 + 4 * u[s_iModeGame]), y[s_iModeGame] / 1.5), x.addEventListener(ON_MOUSE_UP,
        function() {
            this._onButColourRelease(4)
        },
        this), 5 < a && (A = new CSpritesheetButton(w[s_iModeGame] / 2, y[s_iModeGame] / 2, B, 5, r), A.setShape(1), A.setPosition(z[s_iModeGame] + (w[s_iModeGame] / 2 * 6 + 5 * u[s_iModeGame]), y[s_iModeGame] / 1.5), A.addEventListener(ON_MOUSE_UP,
        function() {
            this._onButColourRelease(5)
        },
        this)))));
        u = r.getBounds();
        r.x = CANVAS_WIDTH_HALF;
        r.y = CANVAS_HEIGHT_HALF;
        r.regX = u.width / 2;
        r.regY = u.height / 2;
        u = s_oSpriteLibrary.getSprite("but_exit");
        g = CANVAS_WIDTH - u.height / 2 - 20;
        b = u.height / 2 + 20;
        n = new CGfxButton(g, b, u, s_oStage);
        n.addEventListener(ON_MOUSE_UP, this._onExit, this);
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(f);
        createjs.Tween.get(f).to({
            alpha: 0
        },
        1E3).call(function() {
            f.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.refreshButtonPos = function(a, f) {
        n.setPosition(g - a, b); ! 1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || l.setPosition(e - a, c)
    };
    this.unload = function() {
        n.unload();
        n = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) l.unload(),
        l = null;
        s_oStage.removeAllChildren();
        createjs.Tween.removeAllTweens();
        s_oColourChoose = null
    };
    this._onExit = function() {
        this.unload();
        s_oMain.gotoMenu()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButColourRelease = function(b) {
        this.unload();
        s_oMain.gotoGame(a, b)
    };
    s_oColourChoose = this;
    this._init()
}
var s_oColourChoose = null;
function CBoard(a, g, b) {
    var e = [],
    c = [],
    k = [],
    d = [],
    h = [];
    this._init = function() {
        for (var b = 0; b <= LAST_SQUARE; b++) {
            var d = BOARD_SQUARES[b][0],
            g = BOARD_SQUARES[b][1],
            h = new createjs.Shape;
            h.graphics.beginFill("red");
            h.graphics.drawRect(0, 0, 44, 44);
            h.x = d;
            h.y = g;
            h.regX = 22;
            h.regY = 22;
            h.alpha = .5;
            h.visible = !1;
            h.setBounds();
            k.push(h);
            a.addChild(h);
            e.push(!1);
            c.push([!1, !1, !1, !1])
        }
        this.initLaddersOnBoard();
        this.initObstaclesOnBoard()
    };
    this.initObstaclesOnBoard = function() {
        if (s_iModeGame === MODE_SNAKES) for (var a = [150, 150, 120, 190, 96, 170, 230, 100, 100, 100], b = [100, 150, 200, 72, 310, 90, 380, 130, 130, 130], c = [650, 780, 930, 730, 525, 525, 680, 855, 665, 495], e = [545, 400, 425, 280, 385, 275, 305, 120, 120, 120], d = 0; d < OBSTACLES_SQUARES.length; d++) {
            var k = {
                images: [s_oSpriteLibrary.getSprite("snake_" + OBSTACLES_SQUARES[d])],
                framerate: 30,
                frames: {
                    width: a[d],
                    height: b[d],
                    regX: a[d] / 2,
                    regY: b[d] / 2
                },
                animations: {
                    stop: [0, 0],
                    idle: [0, 31, "stop"]
                }
            },
            k = new createjs.SpriteSheet(k),
            k = createSprite(k, "stop", b[d] / 2, a[d] / 2, b[d], a[d]);
            k.x = c[d];
            k.y = e[d];
            g.addChild(k);
            h.push(k)
        } else for (a = [152, 131, 90, 152, 86, 162, 177, 94, 102, 101], b = [99, 116, 149, 54, 299, 97, 333, 118, 125, 127], c = [555, 700, 850, 650, 480, 440, 600, 805, 625, 465], e = [495, 335, 355, 265, 230, 215, 140, 60, 60, 60], d = 0; d < OBSTACLES_SQUARES.length; d++) k = s_oSpriteLibrary.getSprite("chute_" + OBSTACLES_SQUARES[d]),
        k = createBitmap(k, b[d], a[d]),
        k.x = c[d],
        k.y = e[d],
        g.addChild(k),
        h.push(k)
    };
    this.getObstaclesArray = function() {
        return h
    };
    this.initLaddersOnBoard = function() {
        for (var a = [149, 172, 99, 78, 250, 74, 166, 50, 46], c = [189, 94, 172, 101, 348, 85, 93, 96, 95], e = [415, 600, 850, 420, 585, 590, 765, 900, 410], g = [385, 490, 400, 350, 115, 330, 215, 80, 80], h = 0; h < LADDERS_SQUARES.length; h++) {
            var k = s_oSpriteLibrary.getSprite("ladder_" + LADDERS_SQUARES[h]),
            k = createBitmap(k, a[h], c[h]);
            k.x = e[h];
            k.y = g[h];
            b.addChild(k);
            d.push(k)
        }
    };
    this.setSquareOccupied = function(a, b) {
        e[a] = b
    };
    this.checkFreeSquarePoints = function(a) {
        return c[a].indexOf(!1)
    };
    this.unload = function() {
        s_oBoard = null
    };
    s_oBoard = this;
    this._init()
}
var s_oBoard;
function CBezier() {
    var a, g, b, e, c, k, d, h, f, l, n, m;
    this.init = function(q, t, v, x) {
        a = q;
        g = t;
        b = v;
        c = a.x - 2 * g.x + b.x;
        k = a.y - 2 * g.y + b.y;
        d = 2 * g.x - 2 * a.x;
        h = 2 * g.y - 2 * a.y;
        f = 4 * (c * c + k * k);
        l = 4 * (c * d + k * h);
        n = d * d + h * h;
        m = this._length(1);
        e = Math.floor(m / x);
        m % x > x / 2 && e++;
        return e
    };
    this._speed = function(a) {
        return Math.sqrt(f * a * a + l * a + n)
    };
    this._length = function(a) {
        var b = Math.sqrt(n + a * (l + f * a));
        return (2 * Math.sqrt(f) * (2 * f * a * b + l * (b - Math.sqrt(n))) + (l * l - 4 * f * n) * (Math.log(l + 2 * Math.sqrt(f) * Math.sqrt(n)) - Math.log(l + 2 * f * a + 2 * Math.sqrt(f) * b))) / (8 * Math.pow(f, 1.5))
    };
    this.invertL = function(a, b) {
        var c = a;
        do {
            var e = c - (this._length(c) - b) / this._speed(c);
            if (1E-6 > Math.abs(c - e)) break;
            c = e
        } while ( 1 );
        return e
    };
    this.getAnchorPoint = function(c) {
        if (0 <= c && c <= e) {
            var d = c / e,
            d = this.invertL(d, d * m);
            c = (1 - d) * (1 - d) * a.x + 2 * (1 - d) * d * g.x + d * d * b.x;
            var f = (1 - d) * (1 - d) * a.y + 2 * (1 - d) * d * g.y + d * d * b.y,
            h = new createjs.Point((1 - d) * a.x + d * g.x, (1 - d) * a.y + d * g.y),
            d = new createjs.Point((1 - d) * g.x + d * b.x, (1 - d) * g.y + d * b.y);
            return [c, f, 180 * Math.atan2(d.y - h.y, d.x - h.x) / Math.PI]
        }
        return []
    }
}
function CAreYouSurePanel() {
    var a, g, b, e, c;
    this._init = function() {
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.alpha = .5;
        e.on("mousedown",
        function() {});
        s_oStage.addChild(e); (new createjs.Tween.get(e)).to({
            alpha: .7
        },
        500);
        c = new createjs.Container;
        s_oStage.addChild(c);
        var d = s_oSpriteLibrary.getSprite("msg_box"),
        h = createBitmap(d);
        h.regX = d.width / 2;
        h.regY = d.height / 2;
        h.x = CANVAS_WIDTH_HALF;
        h.y = CANVAS_HEIGHT_HALF;
        c.addChild(h);
        c.y = CANVAS_HEIGHT + d.height / 2;
        a = c.y; (new createjs.Tween.get(c)).to({
            y: 0
        },
        1E3, createjs.Ease.backOut);
        d = new createjs.Text(TEXT_ARE_SURE, " 50px " + PRIMARY_FONT, SECONDARY_FONT_COLOR);
        d.x = CANVAS_WIDTH_HALF;
        d.y = CANVAS_HEIGHT_HALF - 80;
        d.textAlign = "center";
        d.textBaseline = "middle";
        d.outline = 5;
        c.addChild(d);
        h = new createjs.Text(TEXT_ARE_SURE, " 50px " + PRIMARY_FONT, PRIMARY_FONT_COLOR);
        h.x = CANVAS_WIDTH_HALF;
        h.y = CANVAS_HEIGHT_HALF - 80;
        h.textAlign = "center";
        h.textBaseline = "middle";
        h.lineWidth = d.lineWidth;
        c.addChild(h);
        d = CANVAS_HEIGHT_HALF + 40;
        g = new CGfxButton(CANVAS_WIDTH_HALF + 100, d, s_oSpriteLibrary.getSprite("but_yes"), c);
        g.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        b = new CGfxButton(CANVAS_WIDTH_HALF - 100, d, s_oSpriteLibrary.getSprite("but_no"), c);
        b.addEventListener(ON_MOUSE_UP, this._onButNo, this);
        s_oGame.pause(!0)
    };
    this._onButYes = function() { (new createjs.Tween.get(e)).to({
            alpha: 0
        },
        500); (new createjs.Tween.get(c)).to({
            y: a
        },
        400, createjs.Ease.backIn).call(function() {
            k.unload();
            s_oGame.onExit()
        })
    };
    this._onButNo = function() {
        s_oInterface.closePanel(); (new createjs.Tween.get(e)).to({
            alpha: 0
        },
        500); (new createjs.Tween.get(c)).to({
            y: a
        },
        400, createjs.Ease.backIn).call(function() {
            k.unload()
        });
        s_oGame.pause(!1)
    };
    this.unload = function() {
        b.unload();
        g.unload();
        s_oStage.removeChild(e);
        s_oStage.removeChild(c);
        e.off("mousedown",
        function() {})
    };
    var k = this;
    this._init()
};