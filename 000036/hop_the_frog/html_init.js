// --------------------------------------------------
// HMTL
//---------------------------------------------------
html_init.init = function() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	images = images||{};
	ss = ss||{};
	var loader = new createjs.LoadQueue(false);
	//loader.setMaxConnections(6); causes screen cut off in ios and some failed loads
	loader.installPlugin(createjs.Sound);
	loader.setMaxConnections(6);
	loader.addEventListener("fileload", html_init.handleFileLoad);
	loader.addEventListener("progress", html_init.handleProgress);
	loader.addEventListener("complete", html_init.handleComplete);
	loader.loadManifest(lib.properties.manifest);
};

html_init.handleFileLoad = function(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
};
html_init.handleProgress = function(evt) {
	var total_progress = Math.round(evt.progress);
	// draw the progress bar
	document.getElementById("preloadFill").style.width = total_progress + "%";
};
html_init.handleComplete = function(evt) {
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	html_init.setExportRoot();
	html_init.initStage();
};
html_init.initStage = function(){
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.enableMouseOver(30);// May not be needed
	// Turn canvas back on
	document.getElementById('animation_container').style.visibility = "visible";
	canvas.style.visibility = "visible";
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
		createjs.Touch.enable(stage, true, false);
		stage.update();
	}
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS=1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width, h = lib.properties.height;
			var iw = window.innerWidth, ih=window.innerHeight;
			// pRatio: 1=PC/ipad, 2=android/Kindle
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
			if(isResp) {
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
					sRatio = lastS;
				}
				else if(!isScale) {
					if(iw<w || ih<h)
						sRatio = Math.min(xRatio, yRatio);
				}
				else if(scaleType==1) {
					sRatio = Math.min(xRatio, yRatio);
				}
				else if(scaleType==2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			// Max_Width
			if((w*sRatio)>1000){
				sRatio = 1000/w;
			}
			// allow 50 px border (works on ios and android
			// sRatio = (w*pRatio*sRatio-50)/(w*pRatio);
			//
			canvas.width = w*pRatio*sRatio;
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
			// used to find mouse position (800 is the original flash width)
			html_init.scaleMult = 800/(w*pRatio*sRatio);
		}
	}
	makeResponsive(true,'both',true,1);
	fnStartAnimation();
	//Loading
	html_init.deleteHtmlLoader();
};

html_init.deleteHtmlLoader = function(){
	// remove manifest var
	manifest = null;
	document.getElementById('preload').style.display = 'none';
};
// -----------------------------------------------------
// Text vertical placement for firefox
// -----------------------------------------------------
if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && createjs){
    createjs.DisplayObject.prototype.setTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
        this.x = x || 0;
        this.y = y || 0;
        this.scaleX = scaleX == null ? 1 : scaleX;
        this.scaleY = scaleY == null ? 1 : scaleY;
        this.rotation = rotation || 0;
        this.skewX = skewX || 0;
        this.skewY = skewY || 0;
        this.regX = regX || 0;
        this.regY = regY || 0;

        //ADJUST TEXT POSITION FOR FF
        if(this.font){
			//if(this.name=="correct" || this.name=="wrong")return;
			//console.log("FONT TEXT this.font = "+this.font.match(/'([^']+)'/)[1]+" "+this.name);
			if(this.font.match(/'([^']+)'/)[1]=="CAC Futura Casual"){
				this.y += this.lineHeight*.2;
			}else{
				this.y += this.lineHeight*.15;
			}
        }
        return this;
    };
};
