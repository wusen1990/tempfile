(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Frog_Hop_atlas_", frames: [[0,0,800,600]]},
		{name:"Frog_Hop_atlas_2", frames: [[0,0,800,600]]},
		{name:"Frog_Hop_atlas_3", frames: [[476,0,360,510],[0,474,360,510],[0,0,474,472],[362,834,579,164],[362,512,560,320]]},
		{name:"Frog_Hop_atlas_4", frames: [[808,0,120,120],[686,208,120,120],[808,122,120,120],[808,244,120,120],[126,394,120,120],[126,516,120,120],[686,86,120,120],[126,638,120,120],[560,642,100,100],[438,860,100,100],[540,758,100,100],[540,860,100,100],[598,330,100,100],[700,330,100,100],[662,432,100,100],[662,534,100,100],[662,636,100,100],[802,366,100,100],[642,840,100,100],[764,774,100,100],[744,876,100,100],[866,468,100,100],[866,570,100,100],[866,672,100,100],[866,774,100,100],[846,876,100,100],[204,876,100,100],[306,874,100,100],[560,438,100,100],[356,554,100,100],[458,554,100,100],[560,540,100,100],[350,656,100,100],[452,656,100,100],[336,772,100,100],[438,758,100,100],[0,898,100,100],[102,898,100,100],[248,568,100,100],[356,452,100,100],[248,670,100,100],[234,772,100,100],[458,452,100,100],[496,336,100,100],[764,468,100,100],[764,570,100,100],[764,672,100,100],[662,738,100,100],[540,212,106,114],[280,336,106,114],[388,336,106,114],[248,452,106,114],[126,760,106,114],[308,212,230,60],[280,274,230,60],[0,0,800,84],[0,86,152,152],[0,240,152,152],[154,86,152,152],[0,394,124,124],[154,240,124,124],[308,86,124,124],[0,520,124,124],[434,86,124,124],[0,646,124,124],[560,86,124,124],[0,772,124,124]]},
		{name:"Frog_Hop_atlas_5", frames: [[376,0,84,84],[290,86,84,84],[204,86,84,84],[290,0,84,84],[102,102,84,84],[204,0,84,84],[174,244,70,70],[102,260,70,70],[246,244,70,70],[318,411,40,40],[318,453,40,40],[228,465,40,40],[270,465,40,40],[360,415,40,40],[462,43,40,40],[448,155,60,60],[452,86,60,60],[318,299,60,60],[380,299,60,60],[442,299,60,60],[0,0,100,100],[0,102,100,100],[0,204,100,100],[0,306,100,100],[0,408,100,100],[102,0,100,100],[408,482,15,14],[376,155,70,70],[188,172,70,70],[102,188,70,70],[260,172,70,70],[332,227,70,70],[404,227,70,70],[425,452,32,32],[434,415,32,32],[210,405,52,52],[366,361,52,52],[360,457,63,23],[474,383,17,22],[493,383,17,22],[156,459,70,33],[462,0,41,41],[332,172,41,41],[264,370,30,35],[476,217,30,35],[476,254,30,35],[402,415,30,35],[468,415,24,24],[360,482,24,24],[496,361,16,16],[494,427,16,16],[312,495,17,11],[459,449,22,35],[386,482,20,20],[494,407,18,18],[474,361,20,20],[264,411,52,52],[420,361,52,52],[102,386,52,52],[156,405,52,52],[102,440,52,52],[166,370,88,33],[174,316,62,52],[102,332,62,52],[238,316,62,52],[376,86,74,67],[302,361,62,48]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.beetle0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.beetle0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.beetle0003 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.beetle0004 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.beetle0005 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.beetle0006 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.butterfly0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.butterfly0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.butterfly0003 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.butterfly0004 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.butterfly0005 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.butterfly0006 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.butterfly0007 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.butterfly0008 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cloud0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cloud0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.cloud0003 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.cloud0004 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.cloud0005 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cloud0006 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.cloud0007 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.cloud0008 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.draggonfly0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.draggonfly0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.draggonfly0003 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.firefly0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.firefly0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.firefly0003 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.firefly0004 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.firefly0005 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.firefly0006 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.fly0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.fly0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.fly0003 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.fly0004 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.fly0005 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.frog0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.frog0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.frog0003 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.frog0004 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.frog0005 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.frog0006 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.frog0007 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.frog0008 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.frog0009 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.frog0010 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.frog0011 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.frog0012 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.frog0013 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.frog0014 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.frog0015 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.frog0016 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.frog0017 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.frog0018 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.frog0019 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.frog0020 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.frog0021 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.frog0022 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.frog0023 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.frog0024 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.frog0025 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.frog0026 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.frog0027 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.frog0028 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.frog0029 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.frog0030 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.frog0031 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.frog0032 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.frog0033 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.frog0034 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.frog0035 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.frog0036 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.frog0037 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.glow1 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.grass0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.grass0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.grass0003 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.grass0004 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.grass0005 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.grass0006 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.grass0007 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.grass3 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.grub0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.grub0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.grub0003 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.grub0004 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.grub0005 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.grub0006 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hearts0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hearts0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.help0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.help0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.high_ui = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hill = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.howtoplaybar = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.jumpIcon0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.jumpIcon0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.meter4 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.meter5 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.meter6 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.meterBar = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.multbox0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.multbox0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.mute0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.mute0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.mute0003 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.mute0004 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.part1 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.part2 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.part3 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.part4 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.part5 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.part6 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.part7 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.part8 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.part9 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.pause0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.pause0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.pause0003 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.pause0004 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.pause0005 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.play0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.play0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.play0003 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.scorebar = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.sky1 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.snail0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.snail0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.snail0003 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.snail0004 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.spark = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_5"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.submit_ui = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.wasp0001 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.wasp0002 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.wasp0003 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.wasp0004 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.wasp0005 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.wasp0006 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.wasp0007 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.wasp0008 = function() {
	this.spriteSheet = ss["Frog_Hop_atlas_4"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.waspflyanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wasp0001();
	this.instance.parent = this;
	this.instance.setTransform(-62,-62);

	this.instance_1 = new lib.wasp0002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62,-62);

	this.instance_2 = new lib.wasp0003();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-62,-62);

	this.instance_3 = new lib.wasp0004();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-62,-62);

	this.instance_4 = new lib.wasp0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-62,-62);

	this.instance_5 = new lib.wasp0006();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-62,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-62,124,124);


(lib.waspattackanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.wasp0007();
	this.instance.parent = this;
	this.instance.setTransform(-62,-62);

	this.instance_1 = new lib.wasp0008();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-72,-62);

	this.instance_2 = new lib.wasp0001();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-62,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-62}}]}).to({state:[{t:this.instance,p:{x:-69}}]},1).to({state:[{t:this.instance_1,p:{x:-72}}]},1).to({state:[{t:this.instance_1,p:{x:-73}}]},1).to({state:[{t:this.instance,p:{x:-71}}]},1).to({state:[{t:this.instance,p:{x:-69}}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-62,124,124);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.play0002();
	this.instance.parent = this;
	this.instance.setTransform(-76,-76);

	this.instance_1 = new lib.play0003();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-76,-76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},2).wait(1));

	// Layer 2
	this.instance_2 = new lib.play0001();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-76,-76);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ar3L4IAA3vIXvAAIAAXvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-76,152,152);


(lib.spark_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spark();
	this.instance.parent = this;
	this.instance.setTransform(-18.5,-14.3,0.598,0.598);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.spark_1, new cjs.Rectangle(-18.5,-14.3,37.1,28.7), null);


(lib.snailwalk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 2
	this.instance = new lib.snail0004();
	this.instance.parent = this;
	this.instance.setTransform(-20.7,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:-31.6},0).wait(1).to({y:-31.9},0).wait(1).to({y:-32.1},0).wait(3).to({y:-31.6},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.snail0001();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-46.8,-20.9);

	this.instance_2 = new lib.snail0002();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47.3,-20.9,1,1,0,-1.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{skewX:0,x:-46.8}}]}).to({state:[{t:this.instance_1,p:{skewX:1.8,x:-45.5}}]},3).to({state:[{t:this.instance_2,p:{skewX:-1.1,x:-47.3}}]},1).to({state:[{t:this.instance_2,p:{skewX:0,x:-46.8}}]},1).to({state:[{t:this.instance_1,p:{skewX:1.8,x:-45.5}}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-31.4,100.1,67);


(lib.snailslughit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(5));

	// Layer 1
	this.instance = new lib.snail0003();
	this.instance.parent = this;
	this.instance.setTransform(-46.8,-20.9);

	this.instance_1 = new lib.snail0002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-41.5,-10.9,1,0.813,0,7.2,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({scaleY:1.01,skewX:8.4,x:-39.1},0).wait(1).to({scaleY:1.05,skewX:17,x:-30.9},0).wait(1).to({scaleY:1.06,skewX:19.6,x:-28.3},0).wait(1).to({scaleY:1.09,skewX:23.4,x:-24.3},0).wait(2).to({scaleY:1.04,skewX:15.6,x:-32.3},0).wait(1).to({scaleY:1.02,skewX:10.1,x:-37.6},0).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(1).to({scaleY:0.89,skewX:4.4,x:-43.3,y:-14.8},0).wait(1).to({scaleY:1,skewX:0,x:-46.8,y:-20.9},0).wait(1).to({scaleY:1,skewX:-4.1,x:-50.5},0).wait(1).to({scaleY:1.01,skewX:-7,x:-53.2},0).wait(1).to({scaleY:1,skewX:-1.8,x:-48.4},0).wait(2).to({scaleY:1,skewX:2,x:-45},0).wait(2).to({scaleY:1,skewX:0,x:-46.8},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-20.9,62,52);


(lib.snailslug = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 1
	this.instance = new lib.snail0001();
	this.instance.parent = this;
	this.instance.setTransform(-46.8,-20.9);

	this.instance_1 = new lib.snail0002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47.3,-20.9,1,1,0,-1.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{skewX:0,x:-46.8}}]}).to({state:[{t:this.instance,p:{skewX:1.8,x:-45.5}}]},3).to({state:[{t:this.instance_1,p:{skewX:-1.1,x:-47.3}}]},1).to({state:[{t:this.instance_1,p:{skewX:0,x:-46.8}}]},1).to({state:[{t:this.instance,p:{skewX:1.8,x:-45.5}}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-20.9,62,52);


(lib.snailattack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// Layer 2
	this.instance = new lib.snail0004();
	this.instance.parent = this;
	this.instance.setTransform(-20.7,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-90,x:-52.2,y:33.9},0).wait(1).to({x:-70.5},0).wait(1).to({rotation:-95,x:-73,y:36.1},0).wait(1).to({rotation:-90,x:-63,y:33.9},0).wait(1).to({rotation:-60,x:-53.6,y:12.2},0).wait(1).to({rotation:-45,x:-49.1,y:-0.6},0).wait(1).to({rotation:0,x:-18,y:-31.4},0).wait(1).to({x:-14.7},0).wait(1).to({x:-13},0).wait(1).to({x:-12.2},0).wait(1).to({x:-11.7},0).wait(1).to({x:-11.5},0).wait(2).to({x:-11.7},0).wait(1).to({x:-12.2},0).wait(1).to({x:-13},0).wait(1).to({x:-14.7},0).wait(1).to({x:-18.5},0).wait(1).to({x:-20.5},0).wait(1).to({x:-20.7,y:-31.6},0).wait(1).to({y:-32.1},0).wait(1).to({y:-31.9},0).wait(1).to({y:-31.6},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.snail0003();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31.8,-20.9);

	this.instance_2 = new lib.snail0001();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-46.3,-8.6,1,0.877,0,-8,-9.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-36.3,y:-20.7},0).wait(1).to({x:-48.8},0).wait(1).to({x:-52.1},0).wait(1).to({x:-41.3},0).wait(1).to({x:-33.8},0).wait(1).to({x:-32.3},0).wait(1).to({x:-29.1,y:-20.9},0).wait(1).to({x:-23.3},0).wait(1).to({x:-18.1},0).wait(1).to({x:-15.8},0).wait(1).to({x:-13.6},0).wait(1).to({x:-13.3},0).wait(2).to({x:-13.6},0).wait(1).to({x:-15.8},0).wait(1).to({x:-18.1},0).wait(1).to({x:-23.3},0).wait(1).to({x:-29.6},0).wait(1).to({x:-35.8},0).to({_off:true},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(1).to({scaleY:1,skewX:1.8,skewY:0,x:-45.5,y:-20.9},0).wait(1).to({skewX:1.8,x:-43.8},0).wait(1).to({x:-45.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.8,-31.4,85.1,67);


(lib.scrollmov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.multbox0002();
	this.instance.parent = this;
	this.instance.setTransform(20.5,20.5,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.scrollmov, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.pausebutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.pause0003();
	this.instance.parent = this;
	this.instance.setTransform(-26,-26);

	this.instance_1 = new lib.pause0005();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-26,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.instance_2 = new lib.pause0001();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-26,-26);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkSETIAAolIIlAAIAAIlg");
	this.shape.setTransform(-0.5,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-26,52,52);


(lib.p_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.POINTS = new cjs.Text("9999", "bold 28px 'Arial'");
	this.POINTS.name = "POINTS";
	this.POINTS.textAlign = "center";
	this.POINTS.lineHeight = 33;
	this.POINTS.lineWidth = 64;
	this.POINTS.parent = this;
	this.POINTS.setTransform(0.8,-16.4);

	this.timeline.addTween(cjs.Tween.get(this.POINTS).wait(1));

}).prototype = getMCSymbolPrototype(lib.p_mov, new cjs.Rectangle(-33.3,-18.4,68.2,36.4), null);


(lib.mutemusic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mute0004();
	this.instance.parent = this;
	this.instance.setTransform(-15,-17.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjIDJIAAmRIGRAAIAAGRg");
	this.shape.setTransform(0.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:-15,y:-17.5}}]}).to({state:[{t:this.instance,p:{scaleX:1.066,scaleY:1.066,x:-16,y:-18.6}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-17.5,30,35);


(lib.mutemusic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mute0003();
	this.instance.parent = this;
	this.instance.setTransform(-15,-17.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjIDJIAAmRIGRAAIAAGRg");
	this.shape.setTransform(0.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:-15,y:-17.5}}]}).to({state:[{t:this.instance,p:{scaleX:1.066,scaleY:1.066,x:-16,y:-18.6}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-17.5,30,35);


(lib.mutefx2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mute0002();
	this.instance.parent = this;
	this.instance.setTransform(-15,-17.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjIDJIAAmRIGRAAIAAGRg");
	this.shape.setTransform(0.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:-15,y:-17.5}}]}).to({state:[{t:this.instance,p:{scaleX:1.066,scaleY:1.066,x:-16,y:-18.6}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-17.5,30,35);


(lib.mutefx1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mute0001();
	this.instance.parent = this;
	this.instance.setTransform(-15,-17.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjIDJIAAmRIGRAAIAAGRg");
	this.shape.setTransform(0.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:-15,y:-17.5}}]}).to({state:[{t:this.instance,p:{scaleX:1.066,scaleY:1.066,x:-16,y:-18.6}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-17.5,30,35);


(lib.multx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCF286").s().p("AANAhIgNgTIgMATIgYAAIAYghIgYggIAYAAIAMATIANgTIAXAAIgYAgIAZAhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.multx, new cjs.Rectangle(-3.6,-3.3,7.3,6.6), null);


(lib.mult7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCF286").s().p("AgwBJIBAh1IhEAAIAAgcIBpAAIAAAdIg8B0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mult7, new cjs.Rectangle(-5.3,-7.2,10.7,14.6), null);


(lib.mult6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCF286").s().p("AgVBIQgKgEgHgHQgHgJgFgMQgFgOAAgTQAAgRAFgPQAEgPAJgLQAJgMAPgFQANgHAUAAIANABIAKACIAAAdIgCAAIgJgEQgFgBgIAAQgRAAgIAJQgKAJgCARQAHgFAHgDQAHgCAKAAQAHgBAHADQAHACAGAEQAHAGAEAJQAFAIAAAPQAAAXgPAPQgPAPgZAAQgLgBgLgDgAgLACIgHACIAAADIAAAHQAAAMACAHQACAIADAEQADADAEABQADACACAAIAGgCQAEgBADgDIADgHQACgFAAgJQAAgGgCgFQgCgEgCgDQgEgDgEgBIgIgBIgIABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mult6, new cjs.Rectangle(-5.5,-7.5,11.1,15.1), null);


(lib.mult5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCF286").s().p("AghBIQgMgDgHgEIAAgfIADAAIAGADIAJAEIALAEQAFABAGAAIAMgBQAGgCAFgDIAEgHQABgEAAgGQAAgFgCgDQgCgEgDgCQgFgEgGgBIgMgBQgIAAgIACIgNACIgDAAIAAhQIBfAAIAAAbIg9AAIAAAZIAIgBIAFAAQAKAAAJACQAJACAHAFQAIAFAFAIQAEAJAAANQAAALgEAKQgDAKgIAHQgIAHgKADQgLAEgOAAQgRAAgLgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mult5, new cjs.Rectangle(-5.3,-7.4,10.7,14.9), null);


(lib.mult4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCF286").s().p("AAFBJIAAgiIg/AAIAAgbIA9hUIAlAAIAABVIATAAIAAAaIgTAAIAAAigAgfANIAkAAIAAgxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mult4, new cjs.Rectangle(-5.9,-7.3,11.9,14.6), null);


(lib.mult3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCF286").s().p("AghBJQgMgDgIgDIAAggIAEAAQAHAFALAEQALAEAJAAIALgBQAGgBAEgDIAFgGQACgEAAgHQAAgGgDgDQgDgEgEgBQgFgCgGAAIgLgBIgGAAIAAgYIAGAAIAMgBQAFAAADgCQAEgCADgDQABgEABgFQgBgFgBgCQgDgDgDgCIgHgCIgIgBIgLACIgLADIgIAEIgHAEIgDAAIAAggIAUgGQANgDANAAQAMAAAKADQAKACAGAEQAHAFAFAHQADAHAAAJQAAAMgHAKQgHAJgMADIAAABIAKADQAFAAAFAFQAEADADAGQADAGAAAJQAAAKgEAJQgEAJgHAGQgIAGgKAEQgLADgOAAQgRAAgMgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mult3, new cjs.Rectangle(-5.4,-7.5,10.8,15.2), null);


(lib.mult2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCF286").s().p("Ag0BKIAAgYIAYgUIATgSQAKgMAEgHQAFgJABgIQgBgKgGgGQgFgGgLAAQgFAAgFACIgKAEIgIAEIgGAEIgDAAIAAggQAGgDANgDQANgDANAAQAZAAANAMQANALAAAUQAAAOgGAMQgGALgOAPIgRAPIgLAKIA8AAIAAAbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mult2, new cjs.Rectangle(-5.3,-7.4,10.7,14.8), null);


(lib.multbox2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.multbox0002();
	this.instance.parent = this;
	this.instance.setTransform(-20.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.multbox2, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.HILL_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hill();
	this.instance.parent = this;
	this.instance.setTransform(0,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.HILL_MOV, new cjs.Rectangle(0,-164,579,164), null);


(lib.GRASS_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.grass0001();
	this.instance.parent = this;
	this.instance.setTransform(-53,-114);

	this.instance_1 = new lib.grass0002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-53,-114);

	this.instance_2 = new lib.grass0003();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-53,-114);

	this.instance_3 = new lib.grass0004();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-53,-114);

	this.instance_4 = new lib.grass0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-53,-114);

	this.instance_5 = new lib.grass0006();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-115,-60);

	this.instance_6 = new lib.grass0007();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-115,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{skewY:0,x:-53}}]}).to({state:[{t:this.instance_1,p:{skewY:0,x:-53}}]},1).to({state:[{t:this.instance_2,p:{skewY:0,x:-53}}]},1).to({state:[{t:this.instance_3,p:{skewY:0,x:-53}}]},1).to({state:[{t:this.instance_4,p:{skewY:0,x:-53}}]},1).to({state:[{t:this.instance_5,p:{skewY:0,x:-115}}]},1).to({state:[{t:this.instance_6,p:{skewY:0,x:-115}}]},1).to({state:[{t:this.instance,p:{skewY:180,x:53}}]},1).to({state:[{t:this.instance_1,p:{skewY:180,x:53}}]},1).to({state:[{t:this.instance_2,p:{skewY:180,x:53}}]},1).to({state:[{t:this.instance_3,p:{skewY:180,x:53}}]},1).to({state:[{t:this.instance_4,p:{skewY:180,x:53}}]},1).to({state:[{t:this.instance_5,p:{skewY:180,x:115}}]},1).to({state:[{t:this.instance_6,p:{skewY:180,x:115}}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-114,106,114);


(lib.FX_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.part1();
	this.instance.parent = this;
	this.instance.setTransform(-12,-12);

	this.instance_1 = new lib.part2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12,12,1,1,-90);
	this.instance_1._off = true;

	this.instance_2 = new lib.part3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8,8,1,1,-90);

	this.instance_3 = new lib.part4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(8,8,1,1,180);

	this.instance_4 = new lib.part5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-8.5,-5.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.part6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-11,-17.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.part7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-10,-10,1,1,0,-90,90);
	this.instance_6._off = true;

	this.instance_7 = new lib.part8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-9,-9);

	this.instance_8 = new lib.part9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-9.5,-9.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2,p:{rotation:-90,y:8,x:-8}}]},1).to({state:[{t:this.instance_2,p:{rotation:0,y:-8,x:-8}}]},1).to({state:[{t:this.instance_2,p:{rotation:90,y:-8,x:8}}]},1).to({state:[{t:this.instance_3,p:{rotation:180,x:8,y:8}}]},1).to({state:[{t:this.instance_3,p:{rotation:-90,x:-8,y:8}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:-8,y:-8}}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:-9,y:-9}}]},1).to({state:[{t:this.instance_7,p:{rotation:90,x:9,y:-9}}]},1).to({state:[{t:this.instance_7,p:{rotation:-90,x:-9,y:9}}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:90,x:12},0).wait(1).to({rotation:180,y:12},0).wait(1).to({rotation:270,x:-12},0).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({rotation:0,y:-12},0).wait(1).to({rotation:90,x:12},0).wait(1).to({rotation:180,y:12},0).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).wait(1).to({rotation:90,x:5.5,y:-8.5},0).wait(1).to({rotation:180,x:8.5,y:5.5},0).wait(1).to({rotation:270,x:-5.5,y:8.5},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).wait(1).to({rotation:90,x:17.5,y:-11},0).wait(1).to({rotation:180,x:11,y:17.5},0).wait(1).to({rotation:270,x:-17.5,y:11},0).wait(1).to({rotation:360,skewY:180,x:11,y:-17.5},0).wait(1).to({skewX:90,skewY:270,x:17.5,y:11},0).wait(1).to({skewX:180,skewY:360,x:-11,y:17.5},0).wait(1).to({skewX:270,skewY:450,x:-17.5,y:-11},0).to({_off:true},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(26).to({_off:false},0).wait(1).to({skewX:0,skewY:180,x:10},0).wait(1).to({skewX:90,skewY:270,y:10},0).wait(1).to({skewX:180,skewY:360,x:-10},0).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(33).to({_off:false},0).wait(1).to({rotation:90,x:10.5},0).wait(1).to({rotation:180,y:10.5},0).wait(1).to({rotation:270,x:-9.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-12,24,24);


(lib.CONTAINER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.grass3();
	this.instance.parent = this;
	this.instance.setTransform(-25.5,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CONTAINER, new cjs.Rectangle(-25.5,-1.8,15,14), null);


(lib.letterbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.multbox0002();
	this.instance.parent = this;
	this.instance.setTransform(-20.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-21.6,y:-21.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-19.8,y:-19.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-21.6,y:-21.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-20.5,41,41);


(lib.letter_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.LETTER_DIS = new cjs.Text("M", "bold 26px 'Arial'", "#FFFFFF");
	this.LETTER_DIS.name = "LETTER_DIS";
	this.LETTER_DIS.textAlign = "center";
	this.LETTER_DIS.lineHeight = 31;
	this.LETTER_DIS.lineWidth = 34;
	this.LETTER_DIS.parent = this;
	this.LETTER_DIS.setTransform(-2.7,-14);

	this.timeline.addTween(cjs.Tween.get(this.LETTER_DIS).wait(1));

}).prototype = getMCSymbolPrototype(lib.letter_mov, new cjs.Rectangle(-21.8,-16,38.3,37.9), null);


(lib.howtoplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.howtoplaybar();
	this.instance.parent = this;
	this.instance.setTransform(-400,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.howtoplay, new cjs.Rectangle(-400,-42,800,84), null);


(lib.hophelp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.help0001();
	this.instance.parent = this;
	this.instance.setTransform(-180,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hophelp, new cjs.Rectangle(-180,-255,360,510), null);


(lib.highlightmov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF99","rgba(255,255,255,0)"],[0,0.91],-118.4,-0.4,118.8,-0.4).s().p("AwrCjQhBgCguguQgugugChBIAAgHQAChBAugvQAuguBBgBMAj2AAAIAAFFg");
	this.shape.setTransform(13.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.highlightmov, new cjs.Rectangle(-109.6,-15.9,245.3,32.6), null);


(lib.helpbackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B8D3CD","#5A988A"],[0,0.863],0,-226.9,0,300).s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.helpbackground, new cjs.Rectangle(-400,-300,800,600), null);


(lib.heart2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hearts0002();
	this.instance.parent = this;
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.heart2, new cjs.Rectangle(-16,-16,32,32), null);


(lib.heart1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hearts0001();
	this.instance.parent = this;
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.heart1, new cjs.Rectangle(-16,-16,32,32), null);


(lib.grubrun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.grub0001();
	this.instance.parent = this;
	this.instance.setTransform(-35,-35);

	this.instance_1 = new lib.grub0002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35,-35);

	this.instance_2 = new lib.grub0003();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35,-35);

	this.instance_3 = new lib.grub0004();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-35,-35);

	this.instance_4 = new lib.grub0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-35,-35);

	this.instance_5 = new lib.grub0006();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-35,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.greenbar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.meter6();
	this.instance.parent = this;
	this.instance.setTransform(-8.5,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.greenbar2, new cjs.Rectangle(-8.5,-11,17,22), null);


(lib.greenbar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.meter5();
	this.instance.parent = this;
	this.instance.setTransform(-8.5,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.greenbar1, new cjs.Rectangle(-8.5,-11,17,22), null);


(lib.glow1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glow1();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glow1_1, new cjs.Rectangle(-50,-50,100,100), null);


(lib.frogruntalk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_9 = function() {
		this.parent.gotoAndStop("run");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.frog0034();
	this.instance.parent = this;
	this.instance.setTransform(0,-2.4);

	this.instance_1 = new lib.frog0005();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,1.1,1.021,0.949);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.4,100,100);


(lib.frogruneat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_6 = function() {
		this.parent.gotoAndStop("run");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.frog0014();
	this.instance.parent = this;

	this.instance_1 = new lib.frog0006();
	this.instance_1.parent = this;

	this.instance_2 = new lib.frog0005();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:0,y:0}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.154,scaleY:0.846,x:-7.7,y:10.5}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:0,y:0}}]},1).to({state:[{t:this.instance_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.frogrun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.frog0002();
	this.instance.parent = this;

	this.instance_1 = new lib.frog0003();
	this.instance_1.parent = this;

	this.instance_2 = new lib.frog0004();
	this.instance_2.parent = this;

	this.instance_3 = new lib.frog0005();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.frogjumptalk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_9 = function() {
		this.parent.gotoAndStop("up end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.frog0035();
	this.instance.parent = this;
	this.instance.setTransform(0,1.8,1,0.964);

	this.instance_1 = new lib.frog0007();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.2,0,1.025,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleY:0.964,y:1.8}}]}).to({state:[{t:this.instance,p:{scaleY:1,y:0}}]},1).to({state:[{t:this.instance_1}]},7).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.8,100,96.4);


(lib.frogjumpeat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_6 = function() {
		this.parent.gotoAndStop("up end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.frog0015();
	this.instance.parent = this;

	this.instance_1 = new lib.frog0016();
	this.instance_1.parent = this;

	this.instance_2 = new lib.frog0007();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:0,y:0}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.049,scaleY:0.93,x:-2.4,y:3.5}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:0,y:0}}]},1).to({state:[{t:this.instance_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.frogjumpcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.frog0007();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frogjumpcopy, new cjs.Rectangle(0,0,100,100), null);


(lib.frogjump = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.frog0007();
	this.instance.parent = this;

	this.instance_1 = new lib.frog0008();
	this.instance_1.parent = this;

	this.instance_2 = new lib.frog0009();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.frogfloattalk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_9 = function() {
		this.parent.gotoAndStop("float end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.frog0036();
	this.instance.parent = this;

	this.instance_1 = new lib.frog0013();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.3,0,0.975,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,x:0}}]}).to({state:[{t:this.instance,p:{scaleX:0.979,x:1.1}}]},7).to({state:[{t:this.instance_1}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.frogfloateat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_6 = function() {
		this.parent.gotoAndStop("float end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.frog0017();
	this.instance.parent = this;

	this.instance_1 = new lib.frog0011();
	this.instance_1.parent = this;

	this.instance_2 = new lib.frog0012();
	this.instance_2.parent = this;

	this.instance_3 = new lib.frog0013();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.8,2.5,1.056,0.951);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3,p:{scaleX:1.056,scaleY:0.951,x:-2.8,y:2.5}}]},1).to({state:[{t:this.instance_3,p:{scaleX:1,scaleY:1,x:0,y:0}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.frogfloatcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.frog0013();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frogfloatcopy, new cjs.Rectangle(0,0,100,100), null);


(lib.frogfloat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.frog0010();
	this.instance.parent = this;

	this.instance_1 = new lib.frog0011();
	this.instance_1.parent = this;

	this.instance_2 = new lib.frog0012();
	this.instance_2.parent = this;

	this.instance_3 = new lib.frog0013();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.frogdead2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// Layer 1
	this.instance = new lib.frog0030();
	this.instance.parent = this;
	this.instance.setTransform(5.2,0);

	this.instance_1 = new lib.frog0031();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.2,0);

	this.instance_2 = new lib.frog0032();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5.2,0);

	this.instance_3 = new lib.frog0033();
	this.instance_3.parent = this;
	this.instance_3.setTransform(5.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.2,0,100,100);


(lib.frogdead1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.frog0029();
	this.instance.parent = this;
	this.instance.setTransform(5.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:-90,y:100},0).wait(2).to({rotation:-180,x:105.2},0).wait(2).to({rotation:-270,y:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.2,0,100,100);


(lib.frogcloudtalk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_9 = function() {
		this.parent.gotoAndStop("cloud end talk");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.instance = new lib.frog0037();
	this.instance.parent = this;

	this.instance_1 = new lib.frog0026();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2.1,1,0.974);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.frogcloudeatcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_5 = function() {
		this.parent.gotoAndStop("cloud end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.frog0014();
	this.instance.parent = this;
	this.instance.setTransform(5.2,0);

	this.instance_1 = new lib.frog0006();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,x:13.8,y:1.8}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.154,scaleY:0.846,x:15.3,y:12.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.074,scaleY:1,x:13.6,y:3}}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.2,0,100,100);


(lib.frogblink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.frog0026();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.instance_1 = new lib.frog0027();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.frog0028();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.flyfly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fly0001();
	this.instance.parent = this;

	this.instance_1 = new lib.fly0002();
	this.instance_1.parent = this;

	this.instance_2 = new lib.fly0003();
	this.instance_2.parent = this;

	this.instance_3 = new lib.fly0004();
	this.instance_3.parent = this;

	this.instance_4 = new lib.fly0005();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.fireflyfly3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.firefly0004();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20);

	this.instance_1 = new lib.firefly0005();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-20);

	this.instance_2 = new lib.firefly0006();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.fireflyfly1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.firefly0001();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20);

	this.instance_1 = new lib.firefly0002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.emptycontainer3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.grass3();
	this.instance.parent = this;
	this.instance.setTransform(-25.5,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.emptycontainer3, new cjs.Rectangle(-25.5,-1.8,15,14), null);


(lib.emptycontainer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.grass3();
	this.instance.parent = this;
	this.instance.setTransform(-25.5,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.emptycontainer1, new cjs.Rectangle(-25.5,-1.8,15,14), null);


(lib.eathelp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.help0002();
	this.instance.parent = this;
	this.instance.setTransform(-180,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eathelp, new cjs.Rectangle(-180,-255,360,510), null);


(lib.dragonflyfly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer 1
	this.instance = new lib.draggonfly0001();
	this.instance.parent = this;
	this.instance.setTransform(-35,-35);

	this.instance_1 = new lib.draggonfly0002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35,-35);

	this.instance_2 = new lib.draggonfly0003();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-35,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.distext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.dis_text1 = new cjs.Text("Level 1", "bold 45px 'Arial'", "#FBF799");
	this.dis_text1.name = "dis_text1";
	this.dis_text1.textAlign = "center";
	this.dis_text1.lineHeight = 52;
	this.dis_text1.lineWidth = 364;
	this.dis_text1.parent = this;
	this.dis_text1.setTransform(-5,-26.9);

	this.dis_text2 = new cjs.Text("Level 1", "bold 45px 'Arial'", "#D49F00");
	this.dis_text2.name = "dis_text2";
	this.dis_text2.textAlign = "center";
	this.dis_text2.lineHeight = 52;
	this.dis_text2.lineWidth = 364;
	this.dis_text2.parent = this;
	this.dis_text2.setTransform(-1,-23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dis_text2},{t:this.dis_text1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.distext, new cjs.Rectangle(-188.9,-28.9,372,60.6), null);


(lib.coudsadfly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud0005();
	this.instance.parent = this;
	this.instance.setTransform(50,-50,1,1,0,0,180);

	this.instance_1 = new lib.cloud0004();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50,-50,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.copyrightsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFAD01").s().p("Ag8A9QgZgZAAgkQAAgXANgVQANgVATgKQAUgKATAAQAmAAAYAaQAZAZAAAiQAAAkgZAYQgZAagkAAQgjAAgZgZgAgwgwQgUAVAAAbQAAAcAUAVQAVAUAbAAQAdAAAUgUQAUgVAAgcQAAgdgVgUQgVgTgZAAQgeAAgUAUgAgeAjQgLgNAAgVQAAgWALgMQAMgNATgBQAdAAAJAbIgSAFQgGgQgOAAQgLABgFAIQgHAJAAANQAAAPAHAIQAFAJAKAAQAPAAAGgTIASAGQgJAdgdAAQgSAAgNgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-8.6,17.2,17.2);


(lib.copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("2015 CartoonDan.com v.1.15", "bold 12px 'Arial'", "#DFAD01");
	this.text.lineHeight = 16;
	this.text.parent = this;
	this.text.setTransform(-102.3,-12.9,1.507,1.507);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFAD01").s().p("A2lChIAAlBMAtLAAAIAAFBg");
	this.shape.setTransform(0,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.2,-15.9,252.3,31.5);


(lib.cloudloading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud0003();
	this.instance.parent = this;
	this.instance.setTransform(50,-50,1,1,0,0,180);

	this.instance_1 = new lib.cloud0004();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50,-50,1,1,0,0,180);

	this.instance_2 = new lib.cloud0005();
	this.instance_2.parent = this;
	this.instance_2.setTransform(50,-50,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.cloudhappy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_25 = function() {
		this.parent.gotoAndStop("fly");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(1));

	// Layer 1
	this.instance = new lib.cloud0002();
	this.instance.parent = this;
	this.instance.setTransform(50,-43.7,1,0.929,0,0,180);

	this.instance_1 = new lib.cloud0001();
	this.instance_1.parent = this;
	this.instance_1.setTransform(51.3,-47.5,1.025,0.975,0,0,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1,y:-52},0).wait(1).to({scaleX:0.98,scaleY:1.03,x:49,y:-62.3},0).wait(1).to({scaleX:0.96,scaleY:1.05,x:47.8,y:-65.8},0).wait(1).to({scaleX:1,scaleY:1,x:50,y:-62.7},0).wait(1).to({scaleX:1.02,scaleY:0.98,x:51,y:-57},0).wait(1).to({scaleX:1,scaleY:0.93,x:50,y:-50.7},0).wait(1).to({y:-43.7},0).wait(1).to({y:-41.7},0).wait(1).to({y:-40.7},0).wait(2).to({y:-41.7},0).wait(2).to({y:-42.7},0).wait(2).to({y:-43.7},0).to({_off:true},5).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(2).to({scaleX:1.1,scaleY:0.86,x:54.9,y:-36.1},0).wait(1).to({scaleX:1.03,scaleY:0.92,x:51.5,y:-42.7},0).wait(1).to({scaleX:1.02,scaleY:0.98,x:51,y:-47.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-43.7,100,92.9);


(lib.cloudfly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud0001();
	this.instance.parent = this;
	this.instance.setTransform(50,-50,1,1,0,0,180);

	this.instance_1 = new lib.cloud0006();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50,-50,1,1,0,0,180);

	this.instance_2 = new lib.cloud0007();
	this.instance_2.parent = this;
	this.instance_2.setTransform(50,-50,1,1,0,0,180);

	this.instance_3 = new lib.cloud0008();
	this.instance_3.parent = this;
	this.instance_3.setTransform(50,-50,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.Butterflystill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.butterfly0002();
	this.instance.parent = this;
	this.instance.setTransform(-60,-60);

	this.instance_1 = new lib.butterfly0007();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-60,-60);

	this.instance_2 = new lib.butterfly0008();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,120,120);


(lib.Butterflyfly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18));

	// Layer 1
	this.instance = new lib.butterfly0001();
	this.instance.parent = this;
	this.instance.setTransform(-60,-60);

	this.instance_1 = new lib.butterfly0002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-60,-60);

	this.instance_2 = new lib.butterfly0003();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-60,-60);

	this.instance_3 = new lib.butterfly0004();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-60,-60);

	this.instance_4 = new lib.butterfly0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-60,-60);

	this.instance_5 = new lib.butterfly0006();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,120,120);


(lib.beetlewalkcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.beetle0001();
	this.instance.parent = this;
	this.instance.setTransform(-42,-42);

	this.instance_1 = new lib.beetle0002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-42,-42);

	this.instance_2 = new lib.beetle0003();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-42,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-42,84,84);


(lib.beetlewalk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.beetle0001();
	this.instance.parent = this;
	this.instance.setTransform(-42,-42);

	this.instance_1 = new lib.beetle0002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-42,-42);

	this.instance_2 = new lib.beetle0003();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-42,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-42,84,84);


(lib.beetleattack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18));

	// Layer 1
	this.instance = new lib.beetle0001();
	this.instance.parent = this;
	this.instance.setTransform(-42,-42);

	this.instance_1 = new lib.beetle0005();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-44.2,-45.2);

	this.instance_2 = new lib.beetle0006();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-56,-40.2);

	this.instance_3 = new lib.beetle0004();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-55.8,-40.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{x:-44.2,y:-45.2}}]},1).to({state:[{t:this.instance_1,p:{x:-48.2,y:-48.7}}]},1).to({state:[{t:this.instance_1,p:{x:-53.2,y:-46.2}}]},1).to({state:[{t:this.instance_2,p:{x:-56}}]},1).to({state:[{t:this.instance_2,p:{x:-58}}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).wait(1).to({x:-49.5},0).wait(1).to({x:-39.5,y:-42},0).wait(1).to({x:-38},0).wait(1).to({x:-39.2},0).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-42,84,84);


(lib.backbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.pause0002();
	this.instance.parent = this;
	this.instance.setTransform(-26,-26);

	this.instance_1 = new lib.pause0004();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-26,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.instance_2 = new lib.pause0001();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-26,-26);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg+zAGaIAAszMB9nAAAIAAMzg");
	this.shape.setTransform(-362,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-26,52,52);


(lib.arrowmov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.pause0002();
	this.instance.parent = this;
	this.instance.setTransform(-26,26,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowmov, new cjs.Rectangle(-26,-26,52,52), null);


(lib.upcontainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.letterbutton();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.letterbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.upcontainer, new cjs.Rectangle(-21.6,-21.6,43.2,43.2), null);


(lib.TITLE_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{open:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		var TITLE_MOV = this;
		this.stop();
		this.start_but.on('click', on_start);
		this.copyright_but.on('click', on_copyright);
		//this.dispatchEvent('opened');
		function on_start (){
			TITLE_MOV.start_but.off('click', on_start);
			TITLE_MOV.copyright_but.off('click', on_copyright);
			TITLE_MOV.play();
			//createjs.Sound.stop();
			//playSound('clickwav',0);
			TITLE_MOV.dispatchEvent('closed');
			this.gotoAndStop(0);
			//this.parent.visible = false;
		}
		function on_copyright (){
			 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(5));

	// Layer 7
	this.instance = new lib.copyrightsymbol();
	this.instance.parent = this;
	this.instance.setTransform(288.8,582.1,0.727,0.727);

	this.copyright_but = new lib.copyright();
	this.copyright_but.parent = this;
	this.copyright_but.setTransform(402,584.4);
	new cjs.ButtonHelper(this.copyright_but, 0, 1, 2, false, new lib.copyright(), 3);

	this.start_but = new lib.start();
	this.start_but.parent = this;
	this.start_but.setTransform(663.1,474.8);
	new cjs.ButtonHelper(this.start_but, 0, 1, 2, false, new lib.start(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.start_but},{t:this.copyright_but},{t:this.instance}]},1).to({state:[]},1).wait(4));

	// Layer 9
	this.instance_1 = new lib.title();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.INS_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{off:1,"open":5,on:28});

	// timeline functions:
	this.frame_0 = function() {
		if(!_GLOBAL.score){
			console.log("INS FIRST PLAY");
			this.gotoAndPlay("open");
		}else{
			console.log("INS RETURN PLAY");
			this.gotoAndStop("off");
		}
	}
	this.frame_8 = function() {
		_PLAY_SOUND("FROG_JUMP2",.6);
	}
	this.frame_15 = function() {
		_PLAY_SOUND("FROG_JUMP2",.6);
	}
	this.frame_28 = function() {
		var INS_MOV = this;
		this.stop();
		INS_MOV.BACK_BUT.on('click', onBackBut);
		//
		function onBackBut (evt){
			console.log("onBackBut");
			evt.remove();
			INS_MOV.BACK_BUT.off('click', onBackBut);
			INS_MOV.dispatchEvent('closed');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(7).call(this.frame_15).wait(13).call(this.frame_28).wait(2));

	// Layer 3
	this.BACK_BUT = new lib.backbutton();
	this.BACK_BUT.parent = this;
	this.BACK_BUT.setTransform(363,-261);
	this.BACK_BUT._off = true;
	new cjs.ButtonHelper(this.BACK_BUT, 0, 1, 2, false, new lib.backbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.BACK_BUT).wait(28).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 5
	this.instance = new lib.howtoplay();
	this.instance.parent = this;
	this.instance.setTransform(0,-338);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({y:-258},7,cjs.Ease.get(1)).to({_off:true},17).wait(1));

	// Layer 4
	this.instance_1 = new lib.eathelp();
	this.instance_1.parent = this;
	this.instance_1.setTransform(180,555);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({y:40},13,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Layer 2
	this.instance_2 = new lib.hophelp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-180,555);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({y:40},13,cjs.Ease.get(1)).to({_off:true},8).wait(1));

	// Layer 1
	this.instance_3 = new lib.helpbackground();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({_off:true},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.nextmov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.start();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.start(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nextmov, new cjs.Rectangle(-76,-76,152,152), null);


(lib.mutemusic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":1,"off":2});

	// timeline functions:
	this.frame_0 = function() {
		if(_GLOBAL.MUTE_MUSIC){
			this.gotoAndStop("off");
		}else{
			this.gotoAndStop("on");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.mute0004();
	this.instance.parent = this;
	this.instance.setTransform(-15,-17.5);

	this.instance_1 = new lib.mutemusic1();
	this.instance_1.parent = this;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.mutemusic1(), 3);

	this.instance_2 = new lib.mutemusic2();
	this.instance_2.parent = this;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.mutemusic2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-17.5,30,35);


(lib.mutefx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":1,"off":2});

	// timeline functions:
	this.frame_0 = function() {
		if(_GLOBAL.MUTE_FX){
			this.gotoAndStop("off");
		}else{
			this.gotoAndStop("on");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.mute0002();
	this.instance.parent = this;
	this.instance.setTransform(-15,-17.5);

	this.instance_1 = new lib.mutefx1();
	this.instance_1.parent = this;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.mutefx1(), 3);

	this.instance_2 = new lib.mutefx2();
	this.instance_2.parent = this;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.mutefx2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-17.5,30,35);


(lib.multboxshine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.instance = new lib.multbox2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.451,1.451);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-29.7,59.5,59.5);


(lib.moltmov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.mov.gotoAndPlay(0);
	}
	this.frame_3 = function() {
		this.mov.gotoAndPlay(0);
	}
	this.frame_4 = function() {
		this.mov.gotoAndPlay(0);
	}
	this.frame_5 = function() {
		this.mov.gotoAndPlay(0);
	}
	this.frame_6 = function() {
		this.mov.gotoAndPlay(0);
	}
	this.frame_7 = function() {
		this.mov.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(8));

	// Layer 4
	this.instance = new lib.multx();
	this.instance.parent = this;
	this.instance.setTransform(-7.6,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(13));

	// Layer 3
	this.instance_1 = new lib.mult2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.3,-0.7);

	this.instance_2 = new lib.mult3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.9,-0.2);

	this.instance_3 = new lib.mult4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(2.8,-0.3);

	this.instance_4 = new lib.mult5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(3,0);

	this.instance_5 = new lib.mult6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(3,0.1);

	this.instance_6 = new lib.mult7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(8));

	// Layer 1
	this.instance_7 = new lib.multbox0001();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-20.5,-20.5);

	this.mov = new lib.multboxshine();
	this.mov.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.mov}]},2).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-20.5,41,41);


(lib.loadingmov2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.frog0028();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50);

	this.instance_1 = new lib.frog0027();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-50);

	this.instance_2 = new lib.frog0026();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},28).to({state:[{t:this.instance}]},2).wait(29));

	// Layer 2
	this.instance_3 = new lib.cloudloading();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,126.6);


(lib.WASP_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fly:0,attack:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.waspflyanimation();
	this.instance.parent = this;

	this.instance_1 = new lib.waspattackanimation();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-62,124,124);


(lib.SPARK_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// Layer 1
	this.instance = new lib.spark_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.86,scaleY:2.86},6).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-14.3,37.1,28.7);


(lib.SNAIL_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:0,"attack":1,"slug hit":2,"slug run":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.instance = new lib.snailwalk();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.5);

	this.instance_1 = new lib.snailattack();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.2,-0.5);

	this.instance_2 = new lib.snailslughit();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.2,-0.5);

	this.instance_3 = new lib.snailslug();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.2,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.1,-31.9,100.1,67);


(lib.POINTS_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// Layer 1
	this.p_mov = new lib.p_mov();
	this.p_mov.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.p_mov).to({x:66},9,cjs.Ease.get(1)).wait(12));

	// Layer 3
	this.instance = new lib.glow1_1();
	this.instance.parent = this;
	this.instance.setTransform(62,-4,0.562,0.562);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1.68,scaleY:1.68,alpha:0.199},10,cjs.Ease.get(1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.3,-18.4,68.2,36.4);


(lib.METER_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 6
	this.instance = new lib.jumpIcon0001();
	this.instance.parent = this;
	this.instance.setTransform(-33,-28);

	this.instance_1 = new lib.jumpIcon0002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-33,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(1));

	// Layer 4
	this.instance_2 = new lib.meterBar();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));

	// Layer 8
	this.instance_3 = new lib.greenbar1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19.9,-3);

	this.instance_4 = new lib.greenbar1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(33.1,-3);

	this.instance_5 = new lib.greenbar2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(60.5,-2);

	this.instance_6 = new lib.greenbar1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(46.3,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4,p:{x:33.1}},{t:this.instance_3,p:{x:19.9}}]}).to({state:[{t:this.instance_4,p:{x:38.8}},{t:this.instance_3,p:{x:24.4}}]},1).to({state:[{t:this.instance_3,p:{x:21.4}}]},1).to({state:[]},1).wait(1));

	// Layer 3
	this.instance_7 = new lib.meter4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(6.8,-13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-28,108,52);


(lib.GRUB_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.grubrun();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.GRUB_MOV, new cjs.Rectangle(-35,-35,70,70), null);


(lib.FLY_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.flyfly();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.FLY_MOV, new cjs.Rectangle(-30,-30,60,60), null);


(lib.FIREFLY_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,fly2:1,down:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.fireflyfly1();
	this.instance.parent = this;

	this.instance_1 = new lib.firefly0003();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-20);

	this.instance_2 = new lib.fireflyfly3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.DRAGGONFLY_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dragonflyfly();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.DRAGGONFLY_MOV, new cjs.Rectangle(-35,-35,70,70), null);


(lib.LEVEL_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.mov = new lib.distext();
	this.mov.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mov).to({y:193.5},14,cjs.Ease.get(1)).wait(31).to({y:180,alpha:0.199},13).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.9,-28.9,372,60.6);


(lib.BUTTERFLY_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"fly":0,wait:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.Butterflyfly();
	this.instance.parent = this;

	this.instance_1 = new lib.Butterflystill();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,120,120);


(lib.BEETLE_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"fly":0,"attack":1,flee:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.beetlewalk();
	this.instance.parent = this;

	this.instance_1 = new lib.beetleattack();
	this.instance_1.parent = this;

	this.instance_2 = new lib.beetlewalkcopy();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-42,84,84);


(lib.letterkeymov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var letter_mov = this.letter_mov;
		letter_mov.mouseEnabled = false;
		letter_mov.mouseChildren = false;
		//this.mouseChildren = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.letter_mov = new lib.letter_mov();
	this.letter_mov.parent = this;
	this.letter_mov.setTransform(2.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.letter_mov).wait(1));

	// Layer 1
	this.instance = new lib.letterbutton();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.letterbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.letterkeymov, new cjs.Rectangle(-21.6,-21.6,43.2,43.2), null);


(lib.highscorerowmov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.score_dis = new cjs.Text("123456", "bold 28px 'Arial'", "#343F30");
	this.score_dis.name = "score_dis";
	this.score_dis.lineHeight = 33;
	this.score_dis.lineWidth = 163;
	this.score_dis.parent = this;
	this.score_dis.setTransform(194.7,-28.3);

	this.name_dis = new cjs.Text("DDD", "bold 28px 'Arial'", "#507C1F");
	this.name_dis.name = "name_dis";
	this.name_dis.lineHeight = 33;
	this.name_dis.lineWidth = 77;
	this.name_dis.parent = this;
	this.name_dis.setTransform(87,-28.3);

	this.n_dis = new cjs.Text("2", "bold 28px 'Arial'", "#7A8674");
	this.n_dis.name = "n_dis";
	this.n_dis.textAlign = "right";
	this.n_dis.lineHeight = 33;
	this.n_dis.lineWidth = 77;
	this.n_dis.parent = this;
	this.n_dis.setTransform(79,-28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.n_dis},{t:this.name_dis},{t:this.score_dis}]}).wait(1));

	// Layer 2
	this.highlight_mov = new lib.highlightmov();
	this.highlight_mov.parent = this;
	this.highlight_mov.setTransform(189.5,-13.9);
	this.highlight_mov.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.highlight_mov).wait(1));

}).prototype = getMCSymbolPrototype(lib.highscorerowmov, new cjs.Rectangle(0,-30.3,359.3,43.5), null);


(lib.heartmov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.heart1();
	this.instance.parent = this;
	this.instance.setTransform(41,0);

	this.instance_1 = new lib.heart1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.heart1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-41,0);

	this.instance_3 = new lib.heart2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(41,0);

	this.instance_4 = new lib.heart2();
	this.instance_4.parent = this;

	this.instance_5 = new lib.heart2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-41,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:0}},{t:this.instance,p:{x:41}}]}).to({state:[{t:this.instance_1,p:{x:-41}},{t:this.instance,p:{x:0}},{t:this.instance_3}]},1).to({state:[{t:this.instance,p:{x:-41}},{t:this.instance_4},{t:this.instance_3}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-16,114,32);


(lib.frogcloudendcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.frogblink();
	this.instance.parent = this;
	this.instance.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.frogcloudendcopy, new cjs.Rectangle(0,0,100,100), null);


(lib.frogcloudend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.frog0019();
	this.instance.parent = this;

	this.instance_1 = new lib.frog0024();
	this.instance_1.parent = this;

	this.instance_2 = new lib.frog0025();
	this.instance_2.parent = this;

	this.instance_3 = new lib.frogblink();
	this.instance_3.parent = this;
	this.instance_3.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.frogcloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(1));

	// Layer 1
	this.instance = new lib.frog0018();
	this.instance.parent = this;

	this.instance_1 = new lib.frog0019();
	this.instance_1.parent = this;

	this.instance_2 = new lib.frog0020();
	this.instance_2.parent = this;

	this.instance_3 = new lib.frog0021();
	this.instance_3.parent = this;

	this.instance_4 = new lib.frog0022();
	this.instance_4.parent = this;

	this.instance_5 = new lib.frog0023();
	this.instance_5.parent = this;

	this.instance_6 = new lib.frog0024();
	this.instance_6.parent = this;

	this.instance_7 = new lib.frog0025();
	this.instance_7.parent = this;

	this.instance_8 = new lib.frogblink();
	this.instance_8.parent = this;
	this.instance_8.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.frogbounceland = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(1));

	// Layer 1
	this.instance = new lib.frogrun();
	this.instance.parent = this;
	this.instance.setTransform(50,54,1.127,0.842,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.26,scaleY:0.7,y:58},0).wait(1).to({scaleX:1,scaleY:1,y:50},0).wait(1).to({scaleX:0.92,y:47.6},0).wait(1).to({scaleX:1,y:46.6},0).wait(1).to({y:47.4},0).wait(1).to({y:50},0).wait(1).to({y:51},0).wait(1).to({y:50},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,11.9,112.7,84.2);


(lib.downcontainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.letterbutton();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.letterbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.downcontainer, new cjs.Rectangle(-21.6,-21.6,43.2,43.2), null);


(lib.cloudsad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(1));

	// Layer 1
	this.instance = new lib.cloud0003();
	this.instance.parent = this;
	this.instance.setTransform(50,-50,1,1,0,0,180);

	this.instance_1 = new lib.cloud0004();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50,-50,1,1,0,0,180);

	this.instance_2 = new lib.cloud0005();
	this.instance_2.parent = this;
	this.instance_2.setTransform(50,-50,1,1,0,0,180);

	this.instance_3 = new lib.coudsadfly();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_3}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.HIGH_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"open":1,"got high":5,save:14,list:21});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		var HIGH_MOV = this;
		//
		function check_high_scores(){
			var o,
			xhr,
			jason_string;
		   	// AJAX CALL
			o={};
			o.score=_GLOBAL.score;
			o.action="check";
			o.filename="List";
			o.scoresize=1000;
			o.r=Math.floor(Math.random() *100)+1;
			jason_string = JSON.stringify(o);
			// call_php
			xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200){
					_GLOBAL.HIGHSCORES = JSON.parse(this.responseText);
					if(_GLOBAL.score>0 && _GLOBAL.score>=_GLOBAL.HIGHSCORES[_GLOBAL.HIGHSCORES.length-1][0]){
						// they made the list
						HIGH_MOV.gotoAndStop("got high");
					}else{
						// they did not make the list
						HIGH_MOV.dispatchEvent('closed');
					}
					//console.log(this.responseText);
				} else if(this.readyState == 4){
					//error
					//console.log("Error readyState= "+this.readyState+" status= "+this.status);
					HIGH_MOV.dispatchEvent('closed');
				} else {
					// waiting
					//console.log(this.readyState);
				}
			}
			xhr.open("GET","high-scores.php?o="+jason_string,true);
		   	xhr.send();
		}
		//
		if(!_GLOBAL.high || _GLOBAL.score>_GLOBAL.high){
			//check high scores
			_GLOBAL.high = _GLOBAL.score;
			// check_high_scores();
			HIGH_MOV.dispatchEvent('closed');
		}else{
			// goto Show high page
			HIGH_MOV.dispatchEvent('closed');
		}
	}
	this.frame_5 = function() {
		this.stop();
		var HIGH_MOV = this,
		letters="QWERTYUIOPASDFGHJKLZXCVBNM<",
		letters_array = letters.split(""),
		SCORE_DIS = this.SCORE_DIS,
		SCORE_DIS2 = this.SCORE_DIS2,
		NAME_DIS = this.SCORE_DIS2,
		SCORE = _GLOBAL.score,
		NAME = (_GLOBAL.name) ? _GLOBAL.name : "",
		test,
		listener,
		n;
		//
		this.next_but.name = "next_but";
		SCORE_DIS.text = SCORE;
		NAME_DIS.text = NAME;
		
		//test = this.SCORE_DIS3.getBounds();
		
		for(n=0;n<=letters_array.length-1;n++){
			var mov = this["box_"+n];
			mov.name = "box_"+n;
			mov.letter_mov.LETTER_DIS.text=letters_array[n];
			// must set name of button to be detected on click
			if(n==26)mov.letter_mov.LETTER_DIS.color = "#FFFF33";
		}
		
		//this.box_0.letter_mov.LETTER_DIS.text = letters_array[0];
		// evt.target
		this.stop();
		//
		//listener = HIGH_MOV.on("click", onClick);
		HIGH_MOV.on("click",onClick);
		function onClick(evt){
			//console.log("CLICK KEYBOARD SCREEN ###################################");
			//console.log("evt = "+evt);
			//console.log("evt.name = "+evt.name);
			//console.log("evt.target = "+evt.target);
			//console.log("evt.target.name = "+evt.target.name);
			//console.log("evt.target.parent = "+evt.target.parent);
			//console.log("evt.target.parent.name = "+evt.target.parent.name);
			var but,but_array,but_type,but_n;
			if(evt.target.parent.name){
				but = evt.target.parent.name;
			}else if(evt.target.name){
				but = evt.target.name;
			}
			//console.log("but = "+but);
			if(!but)return;
			//
			but_array = but.split("_");
			but_type = but_array[0];
			but_n = but_array[1];
			
			if(but == "box_26"){
				if(NAME.length>=1){
					// backspace
					NAME = NAME.substr(0,NAME.length-1);
					NAME_DIS.text = NAME;
				}
			}else if(but_type=="box" && NAME.length<3){
				NAME = NAME+(letters[but_n]);
				NAME_DIS.text = NAME;
			}else if(but=="next_but"){
				//console.log("next_but");
				HIGH_MOV.off("click",onClick);
				evt.remove();
				//HIGH_MOV.removeAllEventListeners();
				if(!NAME)NAME="AAA";
				_GLOBAL.name = NAME;
				HIGH_MOV.gotoAndStop("save");
				HIGH_MOV.off("click",onClick);
			}
		}
	}
	this.frame_14 = function() {
		this.stop();
		var HIGH_MOV = this,
		o,
		jason_string;
		// AJAX CALL
		o={};
		o.score=_GLOBAL.score;
		o.name=_GLOBAL.name;
		o.filename="Hop";
		o.action="save";
		o.scoresize=1000;
		o.r=Math.random();
		jason_string = JSON.stringify(o);
		//
		//
		function save_high_scores(){
			var o,
			xhr,
			jason_string;
		   	// AJAX CALL
			o={};
			o.score=_GLOBAL.score;
			o.name=_GLOBAL.name;
			o.action="save";
			o.filename="List";
			o.scoresize=1000;
			o.r=Math.floor(Math.random() *100)+1;
			jason_string = JSON.stringify(o);
			// call_php
			xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200){
					_GLOBAL.HIGHSCORES = JSON.parse(this.responseText);
					HIGH_MOV.gotoAndStop("list");
					//console.log(this.responseText);
				} else if(this.readyState == 4){
					//error
					//console.log("Error readyState= "+this.readyState+" status= "+this.status);
					HIGH_MOV.dispatchEvent('closed');
				} else {
					// waiting
					//console.log(this.readyState);
				}
			}
			xhr.open("GET","high-scores.php?o="+jason_string,true);
		   	// xhr.send();
		}
		//
		save_high_scores();
	}
	this.frame_21 = function() {
		this.stop();
		var HIGH_MOV = this,
		page_n=0,
		page_n_start,
		h_index_n,
		scroll_max=408,
		scroll_min=172,
		scroll_step = (scroll_max-scroll_min)/99,
		mouse_down=false,
		ROW_0 = this.ROW_0,
		ROW_1 = this.ROW_1,
		ROW_2 = this.ROW_2,
		ROW_3 = this.ROW_3,
		ROW_4 = this.ROW_4,
		ROW_5 = this.ROW_5,
		ROW_6 = this.ROW_6,
		ROW_7 = this.ROW_7,
		ROW_8 = this.ROW_8,
		ROW_9 = this.ROW_9,
		SCROLL_MOV = this.SCROLL_MOV,
		o,
		n;
		this.up_but.name = "up_but";
		this.down_but.name = "down_but";
		this.next_but.name = "next_but";
		//
		// show ten scores
		
		// click on screen
		HIGH_MOV.on('mousedown', onDown);
		//HIGH_MOV.on('mousemove', onMove);
		stage.on("stagemousemove",onMove);
		stage.on("stagemouseup",onUp);
		//HIGH_MOV.on('mouseup', onUp);
		function onUp(evt){
			mouse_down = false;
		}
		function onMove(evt){
			//if(mouse_down)console.log("evt.stageX = "+evt.stageX+"   evt.stageY = "+evt.stageY);
			if(mouse_down && (evt.stageX*html_init.scaleMult)>540 && (evt.stageX*html_init.scaleMult)<640 && (evt.stageY*html_init.scaleMult)>155 && (evt.stageY*html_init.scaleMult)<428){
				scroll_bar(evt.stageY*html_init.scaleMult);
				show_scores();
			}
		}
		function onDown(evt){
			var but,but_array,but_type,but_n;
			mouse_down = true;
			if(evt.target.parent.name){
				but = evt.target.parent.name;
			}else if(evt.target.name){
				but = evt.target.name;
			}
			if(but){
				but_array = but.split("_");
				but_type = but_array[0];
				but_n = but_array[1];
			}
			//console.log("High Score Table Click ###########################");
			//console.log("but = "+but);
			if(but == "up_but"){
				if(page_n>0){
					page_n--;
					show_scores();
				}
			}else if(but == "down_but"){
				if(page_n<99){
					page_n++;
					show_scores();
				}
			}else if(but == "next_but"){
				HIGH_MOV.off('mousedown', onDown);
				stage.off("stagemousemove",onMove);
				stage.off("stagemouseup",onUp);
				evt.remove();
				HIGH_MOV.gotoAndStop(0);
				HIGH_MOV.dispatchEvent('closed');
			}else if((evt.stageX*html_init.scaleMult)>540 && (evt.stageX*html_init.scaleMult)<640 && (evt.stageY*html_init.scaleMult)>155 && (evt.stageY*html_init.scaleMult)<428){
				scroll_bar(evt.stageY);
				show_scores();
			}
		}
		function show_scores(){
			var score_n,
			scroll_box_y;
			for(n=0;n<10;n++){
				//mov = HIGH_MOV["ROW_"+1];
				//
				score_n = n+(page_n*10);
				//
				HIGH_MOV["ROW_"+n].n_dis.text = (score_n+1)+".";
				HIGH_MOV["ROW_"+n].name_dis.text = _GLOBAL.HIGHSCORES[score_n][1];
				HIGH_MOV["ROW_"+n].name_dis.color = "#507C1F";
				HIGH_MOV["ROW_"+n].score_dis.text = addCommas(_GLOBAL.HIGHSCORES[score_n][0]);
				//console.log(HIGH_MOV["ROW_"+n]);
				// highlight
				if(page_n_start==page_n && score_n==h_index_n){
					HIGH_MOV["ROW_"+n].highlight_mov.visible=true;
					HIGH_MOV["ROW_"+n].name_dis.color = "#E98D00";
				}else{
					HIGH_MOV["ROW_"+n].highlight_mov.visible=false;
				}
				// scroll box
				if(page_n==0){
					scroll_box_y = scroll_min;
				}else if(page_n==99){
					scroll_box_y = scroll_max;
				}else{
					scroll_box_y =scroll_min+((page_n-1)*scroll_step);
				}
				SCROLL_MOV.y = scroll_box_y;
			}
		}
		function scroll_bar(y_spot){
			// click or drag on scroll area
			page_n = Math.floor((y_spot-scroll_min)/scroll_step);
			if(page_n <0){
				page_n = 0;
			}else if(page_n>99){
				page_n = 99;
			}
		}
		// get page_n_start
		if(_GLOBAL.score){
			for(n=0;n<_GLOBAL.HIGHSCORES.length;n++){
				if(_GLOBAL.score==_GLOBAL.HIGHSCORES[n][0] && _GLOBAL.name==_GLOBAL.HIGHSCORES[n][1]){
					h_index_n = n;
					break;
				}
			}
			if(h_index_n>=0){
				page_n = Math.floor(h_index_n/10);
				page_n_start = page_n;
			}
		}
		function addCommas(intNum) {
		  return (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
		}
		show_scores();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(9).call(this.frame_14).wait(7).call(this.frame_21).wait(6));

	// Layer 7
	this.instance = new lib.loadingmov2();
	this.instance.parent = this;
	this.instance.setTransform(400,262.1);

	this.text = new cjs.Text("Loading Data...", "bold 28px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 738;
	this.text.parent = this;
	this.text.setTransform(400,183.4);

	this.instance_1 = new lib.arrowmov();
	this.instance_1.parent = this;
	this.instance_1.setTransform(593.6,448.1,1,1,0,180,0);

	this.instance_2 = new lib.arrowmov();
	this.instance_2.parent = this;
	this.instance_2.setTransform(593.6,133.9);

	this.ROW_9 = new lib.highscorerowmov();
	this.ROW_9.parent = this;
	this.ROW_9.setTransform(194.1,468);

	this.ROW_8 = new lib.highscorerowmov();
	this.ROW_8.parent = this;
	this.ROW_8.setTransform(194.1,432);

	this.ROW_7 = new lib.highscorerowmov();
	this.ROW_7.parent = this;
	this.ROW_7.setTransform(194.1,396);

	this.ROW_6 = new lib.highscorerowmov();
	this.ROW_6.parent = this;
	this.ROW_6.setTransform(194.1,360);

	this.ROW_5 = new lib.highscorerowmov();
	this.ROW_5.parent = this;
	this.ROW_5.setTransform(194.1,324);

	this.ROW_4 = new lib.highscorerowmov();
	this.ROW_4.parent = this;
	this.ROW_4.setTransform(194.1,288);

	this.ROW_3 = new lib.highscorerowmov();
	this.ROW_3.parent = this;
	this.ROW_3.setTransform(194.1,252);

	this.ROW_2 = new lib.highscorerowmov();
	this.ROW_2.parent = this;
	this.ROW_2.setTransform(194.1,216);

	this.ROW_1 = new lib.highscorerowmov();
	this.ROW_1.parent = this;
	this.ROW_1.setTransform(194.1,180);

	this.ROW_0 = new lib.highscorerowmov();
	this.ROW_0.parent = this;
	this.ROW_0.setTransform(194.1,144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text,p:{text:"Loading Data..."}},{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.text,p:{text:"Saving Data..."}},{t:this.instance}]},12).to({state:[]},1).to({state:[{t:this.ROW_0},{t:this.ROW_1},{t:this.ROW_2},{t:this.ROW_3},{t:this.ROW_4},{t:this.ROW_5},{t:this.ROW_6},{t:this.ROW_7},{t:this.ROW_8},{t:this.ROW_9},{t:this.instance_2},{t:this.instance_1}]},6).to({state:[]},3).wait(3));

	// Layer 3
	this.next_but = new lib.nextmov();
	this.next_but.parent = this;
	this.next_but.setTransform(709.2,511.4);

	this.box_26 = new lib.letterkeymov();
	this.box_26.parent = this;
	this.box_26.setTransform(558.5,392.5);

	this.box_25 = new lib.letterkeymov();
	this.box_25.parent = this;
	this.box_25.setTransform(507.7,392.5);

	this.box_24 = new lib.letterkeymov();
	this.box_24.parent = this;
	this.box_24.setTransform(457.1,392.5);

	this.box_23 = new lib.letterkeymov();
	this.box_23.parent = this;
	this.box_23.setTransform(406.5,392.5);

	this.box_22 = new lib.letterkeymov();
	this.box_22.parent = this;
	this.box_22.setTransform(355.9,392.5);

	this.box_21 = new lib.letterkeymov();
	this.box_21.parent = this;
	this.box_21.setTransform(305.3,392.5);

	this.box_20 = new lib.letterkeymov();
	this.box_20.parent = this;
	this.box_20.setTransform(254.7,392.5);

	this.box_19 = new lib.letterkeymov();
	this.box_19.parent = this;
	this.box_19.setTransform(204.1,392.5);

	this.box_18 = new lib.letterkeymov();
	this.box_18.parent = this;
	this.box_18.setTransform(583.7,338.5);

	this.box_17 = new lib.letterkeymov();
	this.box_17.parent = this;
	this.box_17.setTransform(533.4,338.5);

	this.box_16 = new lib.letterkeymov();
	this.box_16.parent = this;
	this.box_16.setTransform(483.5,338.5);

	this.box_15 = new lib.letterkeymov();
	this.box_15.parent = this;
	this.box_15.setTransform(433.5,338.5);

	this.box_14 = new lib.letterkeymov();
	this.box_14.parent = this;
	this.box_14.setTransform(383.6,338.5);

	this.box_13 = new lib.letterkeymov();
	this.box_13.parent = this;
	this.box_13.setTransform(333.6,338.5);

	this.box_12 = new lib.letterkeymov();
	this.box_12.parent = this;
	this.box_12.setTransform(283.7,338.5);

	this.box_11 = new lib.letterkeymov();
	this.box_11.parent = this;
	this.box_11.setTransform(233.7,338.5);

	this.box_10 = new lib.letterkeymov();
	this.box_10.parent = this;
	this.box_10.setTransform(183.8,338.5);

	this.box_9 = new lib.letterkeymov();
	this.box_9.parent = this;
	this.box_9.setTransform(615.8,284.5);

	this.box_8 = new lib.letterkeymov();
	this.box_8.parent = this;
	this.box_8.setTransform(565.8,284.5);

	this.box_7 = new lib.letterkeymov();
	this.box_7.parent = this;
	this.box_7.setTransform(515.8,284.5);

	this.box_6 = new lib.letterkeymov();
	this.box_6.parent = this;
	this.box_6.setTransform(465.8,284.5);

	this.box_5 = new lib.letterkeymov();
	this.box_5.parent = this;
	this.box_5.setTransform(415.8,284.5);

	this.box_4 = new lib.letterkeymov();
	this.box_4.parent = this;
	this.box_4.setTransform(365.8,284.5);

	this.box_3 = new lib.letterkeymov();
	this.box_3.parent = this;
	this.box_3.setTransform(315.8,284.5);

	this.box_2 = new lib.letterkeymov();
	this.box_2.parent = this;
	this.box_2.setTransform(265.8,284.5);

	this.box_1 = new lib.letterkeymov();
	this.box_1.parent = this;
	this.box_1.setTransform(215.8,284.5);

	this.box_0 = new lib.letterkeymov();
	this.box_0.parent = this;
	this.box_0.setTransform(165.8,284.5);

	this.SCORE_DIS2 = new cjs.Text("MMM", "bold 52px 'Arial'", "#FFFFFF");
	this.SCORE_DIS2.name = "SCORE_DIS2";
	this.SCORE_DIS2.textAlign = "center";
	this.SCORE_DIS2.lineHeight = 60;
	this.SCORE_DIS2.lineWidth = 681;
	this.SCORE_DIS2.parent = this;
	this.SCORE_DIS2.setTransform(394.7,137.2);

	this.SCORE_DIS = new cjs.Text("1000", "bold 52px 'Arial'", "#FCF286");
	this.SCORE_DIS.name = "SCORE_DIS";
	this.SCORE_DIS.textAlign = "center";
	this.SCORE_DIS.lineHeight = 60;
	this.SCORE_DIS.lineWidth = 681;
	this.SCORE_DIS.parent = this;
	this.SCORE_DIS.setTransform(392.7,62.4);
	this.SCORE_DIS.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,40);

	this.down_but = new lib.downcontainer();
	this.down_but.parent = this;
	this.down_but.setTransform(592.7,447.8);

	this.up_but = new lib.upcontainer();
	this.up_but.parent = this;
	this.up_but.setTransform(592.7,133.6);

	this.SCROLL_MOV = new lib.scrollmov();
	this.SCROLL_MOV.parent = this;
	this.SCROLL_MOV.setTransform(592.7,172.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.SCORE_DIS},{t:this.SCORE_DIS2},{t:this.box_0},{t:this.box_1},{t:this.box_2},{t:this.box_3},{t:this.box_4},{t:this.box_5},{t:this.box_6},{t:this.box_7},{t:this.box_8},{t:this.box_9},{t:this.box_10},{t:this.box_11},{t:this.box_12},{t:this.box_13},{t:this.box_14},{t:this.box_15},{t:this.box_16},{t:this.box_17},{t:this.box_18},{t:this.box_19},{t:this.box_20},{t:this.box_21},{t:this.box_22},{t:this.box_23},{t:this.box_24},{t:this.box_25},{t:this.box_26},{t:this.next_but}]},5).to({state:[]},1).to({state:[{t:this.SCROLL_MOV},{t:this.up_but},{t:this.down_but},{t:this.next_but}]},15).to({state:[]},3).wait(3));

	// Layer 6
	this.instance_3 = new lib.submit_ui();
	this.instance_3.parent = this;
	this.instance_3.setTransform(113.9,124.1);

	this.instance_4 = new lib.high_ui();
	this.instance_4.parent = this;
	this.instance_4.setTransform(163,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},5).to({state:[]},1).to({state:[{t:this.instance_4}]},15).to({state:[]},3).wait(3));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D1E9E8","#76C9AB"],[0,1],0,299,0,-296.9).s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape.setTransform(400,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ninjamov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"run":0,"run eat":1,"run talk":2,still:3,duck:4,"up":5,"up end":6,"up eat":7,"up talk":8,"float":9,"float end":10,"float eat":11,"float talk":12,land:14,land_hard:19,cloud:22,"cloud end":23,"cloud end talk":24,"cloud eat":25,"cloud talk":26,dead1:29,dead2:30});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(34));

	// Layer 3
	this.instance = new lib.frogrun();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_1 = new lib.frogruneat();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_2 = new lib.frogruntalk();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_3 = new lib.frog0001();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-50);

	this.instance_4 = new lib.frog0006();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50,-50);

	this.instance_5 = new lib.frogjump();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_6 = new lib.frogjumpcopy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_7 = new lib.frogjumpeat();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_8 = new lib.frogjumptalk();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_9 = new lib.frogfloat();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_10 = new lib.frogfloatcopy();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_11 = new lib.frogfloateat();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_12 = new lib.frogfloattalk();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_13 = new lib.frogbounceland();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_14 = new lib.frogcloud();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_15 = new lib.frogcloudend();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_16 = new lib.frogcloudendcopy();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_17 = new lib.frogcloudeatcopy();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_18 = new lib.frogcloudtalk();
	this.instance_18.parent = this;
	this.instance_18.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_19 = new lib.frogdead1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(0,0,1,1,0,0,0,50,50);

	this.instance_20 = new lib.frogdead2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(0,0,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.CLOUDR_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"fly":0,sad:1,happy:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.cloudfly();
	this.instance.parent = this;

	this.instance_1 = new lib.cloudsad();
	this.instance_1.parent = this;

	this.instance_2 = new lib.cloudhappy();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.CLOUDL_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"fly":0,"sad":1,"happy":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.cloudfly();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.instance_1 = new lib.cloudsad();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,180);

	this.instance_2 = new lib.cloudhappy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.GAME_MOV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// ###################################################################
		// GAME CODE 
		// ###################################################################
		// exportRoot = _GLOBAL
		var GAME_MOV = this,
		PLAYER_MOV = this.PLAYER_MOV,
		LAYER0_MOV = this.LAYER0_MOV,
		LAYER1_MOV = this.LAYER1_MOV,
		LAYER2_MOV = this.LAYER2_MOV,
		LAYER3_MOV = this.LAYER3_MOV,
		METER_MOV = this.METER_MOV,
		HEART_MOV = this.HEART_MOV,
		SCORE_DIS = this.SCORE_DIS,
		FPS_NOW_DIS = this.FPS_NOW_DIS,
		MULT_MOV = this.MULT_MOV,
		INS_MOV = this.INS_MOV,
		MUTE_MUSIC_MOV = this.MUTE_MUSIC_MOV,
		MUTE_FX_MOV = this.MUTE_FX_MOV,
		SCORE = 0,
		LEVEL = 0,
		HEALTH = 3,
		MULT = 0,
		MULT_MAX =7,
		PLAYER,
		CURRENT_MUSIC,
		//
		LEVEL_STEP = 0,
		LEVEL_STEP_MAX = 0,
		FLY_ARRAY=[],
		FLY_ARRAY_MAX=4,
		FLY_ARRAY_R=80,
		BEETLE_ARRAY=[],
		BEETLE_ARRAY_MAX=0,
		BEETLE_ARRAY_R=95,
		WASP_ARRAY=[],
		WASP_ARRAY_MAX=1,
		WASP_ARRAY_R=95,
		GRUB_ARRAY=[],
		GRUB_ARRAY_MAX=4,
		GRUB_ARRAY_R=85,
		SNAIL_ARRAY=[],
		SNAIL_ARRAY_MAX=0,
		SNAIL_ARRAY_R=90,
		FIREFLY_ARRAY=[],
		FIREFLY_ARRAY_MAX=0,
		FIREFLY_ARRAY_R=80,
		BUTTERFLY_ARRAY=[],
		BUTTERFLY_ARRAY_MAX=0,
		BUTTERFLY_ARRAY_R=80,
		DRAGGONFLY_ARRAY=[],
		DRAGGONFLY_ARRAY_MAX=0,
		DRAGGONFLY_ARRAY_R=80,
		CLOUDR_ARRAY=[],
		CLOUDR_ARRAY_MAX=0,
		CLOUDR_ARRAY_R=90,
		CLOUDL_ARRAY=[],
		CLOUDL_ARRAY_MAX=0,
		CLOUDL_ARRAY_R=90,
		GRASS_ARRAY=[],
		GRASS_ARRAY_MAX=4,
		GRASS_ARRAY_R=95,
		HILL_ARRAY=[],
		HILL_ARRAY_MAX=3,
		HILL_ARRAY_R=95,
		SPEED=5,
		//
		FX_ARRAY=[],
		FX_ARRAY_MAX=10,
		FLOOR_N = 500,
		FPS = 30,
		FPS_NOW = FPS,
		FPS_SLOW = 0,
		WIDTH = 800,
		PAUSE=false,
		DEAD=false,
		FRAME_N = 1;
		this.stop();
		//PAUSE BUTTON
		
		//GAME_MOV.on('click', onClick);
		//stage.on('stagemousedown', onClick(evt));
		function init_game(){
			// music
			play_music("start");
			//
			PLAYER_MOV.regX = PLAYER_MOV.width * 0.5;
			PLAYER_MOV.regY = PLAYER_MOV.height * 0.5;
			PLAYER_MOV.y = FLOOR_N;
			PLAYER_MOV.gotoAndStop("run");
			PLAYER={x_spot:PLAYER_MOV.x,y_spot:PLAYER_MOV.y,state:"run",step_n:0,floor_n:FLOOR_N,x_end:107,jump_n:0,down:false}
			//
			SCORE_DIS.text = SCORE;
			// listeners
			GAME_MOV.PAUSE_BUT.on('click',open_help);
			MUTE_MUSIC_MOV.on('click',click_mute_music);
			MUTE_FX_MOV.on('click',click_mute_fx);
			
			stage.on("stagemousedown",onClick);
			GAME_MOV.on('tick', gameLoop);
			// put background items on screen
			spawn_grass(1);
			spawn_grass(1);
			spawn_hill(1);
		}
		function kill_game(){
			_GLOBAL.score = SCORE;
			//turn off listeners
			stage.off("stagemousedown",onClick);
			GAME_MOV.PAUSE_BUT.off('click',open_help);
			MUTE_MUSIC_MOV.off('click',click_mute_music);
			MUTE_FX_MOV.off('click',click_mute_fx);
			GAME_MOV.off('tick', gameLoop);
			// remove children
			GAME_MOV.removeAllChildren();
			GAME_MOV.dispatchEvent('closed');
		}
		function update_level_progress(){
			LEVEL_STEP++;
			fps_check();
			if(LEVEL_STEP>=LEVEL_STEP_MAX){
				next_level();
			}
		}
		function fps_check(){
			FPS_NOW = Math.round(createjs.Ticker.getMeasuredFPS());
			//FPS_NOW_DIS.text = FPS_NOW + " fps";
			if(FPS_NOW<=22){
				FPS_SLOW++;
			}else if(FPS_NOW>=28 && FPS_SLOW){
				FPS_SLOW--;
			}
			// 1 remove bug parts fx
			// 2 no new hills or grass
			// 4 remove score display
		}
		function next_level(){
			if(!DEAD){
				LEVEL++;
				//music_ends();
				//play_sound("LEVEL_END");
				// display text
				o = new lib.LEVEL_MOV();
				o.regX = o.width * 0.5;
				o.regY = o.height * 0.5;
				o.vars = {step_n:60,state:"level-start-delay"};
				o.x = float2int(WIDTH/2);
				o.y = 0;
				o.mov.dis_text1.text = "Level "+LEVEL;
				o.mov.dis_text2.text = "Level "+LEVEL;
				FX_ARRAY.push(o);                
				LAYER3_MOV.addChildAt(o,1);
				//
				LEVEL_STEP=0;
				switch(LEVEL){
					case 0:
					case 1:
						// start
						LEVEL_STEP_MAX = 15;
						CLOUDL_ARRAY_MAX=1;
						FLY_ARRAY_MAX=13;
						break;
					case 2:
						// beetle both clouds
						BEETLE_ARRAY_MAX=1;
						CLOUDR_ARRAY_MAX=1;
						BUTTERFLY_ARRAY_MAX=1;
						BUTTERFLY_ARRAY_R=80;
						break;
					case 3:
						// firefly
						LEVEL_STEP_MAX = 25;
						CLOUDL_ARRAY_MAX++;
						CLOUDR_ARRAY_MAX++;
						FLY_ARRAY_MAX=5;
						FIREFLY_ARRAY_MAX=3;
						BUTTERFLY_ARRAY_MAX=0;
						break;
					case 4:
						// draggonfly
						CLOUDL_ARRAY_MAX++;
						CLOUDR_ARRAY_MAX++;
						DRAGGONFLY_ARRAY_MAX=2;
						WASP_ARRAY_MAX=2;
						BUTTERFLY_ARRAY_MAX=1;
						BUTTERFLY_ARRAY_R=95;
						break;
					case 5:
						// Snail
						LEVEL_STEP_MAX = 30;
						CLOUDL_ARRAY_MAX=1;
						CLOUDR_ARRAY_MAX=1;
						BEETLE_ARRAY_MAX=0;
						WASP_ARRAY_MAX=1;
						SNAIL_ARRAY_MAX=2;
						break;
					case 6:
						// lots of clouds
						CLOUDL_ARRAY_MAX=6;
						CLOUDR_ARRAY_MAX=6;
						BEETLE_ARRAY_MAX=1;
						BUTTERFLY_ARRAY_MAX=0;
						break;
					case 7:
						// lots of sky stuff no ground few clouds
						FLY_ARRAY_MAX=10;
						FIREFLY_ARRAY_MAX=4;
						DRAGGONFLY_ARRAY_MAX=4;
						GRUB_ARRAY_MAX=0;
						CLOUDL_ARRAY_MAX=2;
						CLOUDR_ARRAY_MAX=2;
						SNAIL_ARRAY_MAX=0;
						BEETLE_ARRAY_MAX=0;
						WASP_ARRAY_MAX=3;
						BUTTERFLY_ARRAY_MAX=1;
						BUTTERFLY_ARRAY_R=90;
						break;
					case 8:
						// one cloud lots of snails fireflys
						FIREFLY_ARRAY_MAX=10;
						DRAGGONFLY_ARRAY_MAX=0;
						FLY_ARRAY_MAX=0;
						CLOUDL_ARRAY_MAX=0;
						CLOUDR_ARRAY_MAX=1;
						SNAIL_ARRAY_MAX=7;
						BEETLE_ARRAY_MAX=1;
						WASP_ARRAY_MAX=0;
						BUTTERFLY_ARRAY_MAX=0;
						break;
					case 9:
						// lots of clouds flys and hornets
						FLY_ARRAY_MAX=13;
						FIREFLY_ARRAY_MAX=1;
						DRAGGONFLY_ARRAY_MAX=1;
						CLOUDL_ARRAY_MAX=7;
						CLOUDR_ARRAY_MAX=7;
						SNAIL_ARRAY_MAX=1;
						BEETLE_ARRAY_MAX=1;
						WASP_ARRAY_MAX=4;
						BUTTERFLY_ARRAY_MAX=1;
						break;
					case 10:
						// hard
						FLY_ARRAY_MAX=3;
						FIREFLY_ARRAY_MAX=2;
						DRAGGONFLY_ARRAY_MAX=2;
						CLOUDL_ARRAY_MAX=4;
						CLOUDR_ARRAY_MAX=4;
						SNAIL_ARRAY_MAX=2;
						BEETLE_ARRAY_MAX=2;
						WASP_ARRAY_MAX=3;
						BUTTERFLY_ARRAY_MAX=0;
						break;
					case 11:
						// no L clouds
						FLY_ARRAY_MAX=3;
						FIREFLY_ARRAY_MAX=2;
						DRAGGONFLY_ARRAY_MAX=2;
						CLOUDL_ARRAY_MAX=0;
						CLOUDR_ARRAY_MAX=5;
						SNAIL_ARRAY_MAX=2;
						BEETLE_ARRAY_MAX=2;
						WASP_ARRAY_MAX=3;
						BUTTERFLY_ARRAY_MAX=3;
						break;
					case 12:
						// ground is death
						PLAYER.x_end+=10;
						FLY_ARRAY_MAX=5;
						FIREFLY_ARRAY_MAX=2;
						DRAGGONFLY_ARRAY_MAX=5;
						CLOUDL_ARRAY_MAX=5;
						CLOUDR_ARRAY_MAX=5;
						SNAIL_ARRAY_MAX=2;
						BEETLE_ARRAY_MAX=8;
						BEETLE_ARRAY_R=70;
						WASP_ARRAY_MAX=2;
						BUTTERFLY_ARRAY_MAX=0;
						break;
					case 13:
						// hard but lots of fireflys draggonflies
						PLAYER.x_end+=10;
						FLY_ARRAY_MAX=0;
						FIREFLY_ARRAY_MAX=10;
						DRAGGONFLY_ARRAY_MAX=5;
						CLOUDL_ARRAY_MAX=4;
						CLOUDR_ARRAY_MAX=4;
						SNAIL_ARRAY_MAX=3;
						BEETLE_ARRAY_MAX=5;
						WASP_ARRAY_MAX=4;
						BUTTERFLY_ARRAY_MAX=2;
						break;
					default :
						SPEED++;
						PLAYER.x_end+=10;
						WASP_ARRAY_R-=5;
						WASP_ARRAY_MAX++;
						BEETLE_ARRAY_MAX=7;
						BUTTERFLY_ARRAY_R=80;
						//BEETLE_ARRAY_MAX++;
						break;
				}
			}
		}
		function game_over_text(){
			// display text
			//CURRENT_MUSIC.stop();
			play_music("stop");
			//console.log("game_over_text");
			o = new lib.LEVEL_MOV();
			o.regX = o.width * 0.5;
			o.regY = o.height * 0.5;
			o.vars = {step_n:60,state:"off-delay"};
			o.x = float2int(WIDTH/2);
			o.y = 0;
			o.mov.dis_text1.text = "Game Over";
			o.mov.dis_text2.text = "Game Over";
			FX_ARRAY.push(o);                
			LAYER3_MOV.addChildAt(o,1);
		}
		function gameLoop() {
			if(!PAUSE){
				if(!DEAD){
					fly_hittest();
					firefly_hittest();
					draggonfly_hittest();
					butterfly_hittest();
					cloudr_hittest();
					cloudl_hittest();
					grub_hittest();
					beetle_hittest();
					wasp_hittest();
					snail_hittest();
				}
				//
				if(FRAME_N>FPS && !DEAD){
					FRAME_N = 1;
					update_level_progress();
				}else{
					FRAME_N++;
					if(FRAME_N % 5==1){
						spawn_fly();
						spawn_firefly();
						spawn_draggonfly();
						spawn_butterfly();
						spawn_cloudr();
						spawn_cloudl();
						spawn_grub();
						spawn_beetle();
						spawn_wasp();
						spawn_snail();
						if(!DEAD){
							spawn_grass();
							spawn_hill();
						}
					}
				}
				update_player(PLAYER,PLAYER_MOV);
				update_cloudr();
				update_cloudl();
				update_fly();
				update_firefly();
				update_draggonfly();
				update_butterfly();
				update_grub();
				update_beetle();
				update_wasp();
				update_snail();
				if(!DEAD){
					update_grass();
					update_hill();
				}
				update_fx();
			}
		}
		
		function onClick (evt){
			var x_spot,
			y_spot;
			if(DEAD)evt.remove();
			if(!PAUSE && !DEAD){
				x_spot = evt.stageX*html_init.scaleMult;
				y_spot = evt.stageY*html_init.scaleMult;
				if(x_spot>600 && y_spot>525){
					//iiopen_help();
				}else if(PLAYER.jump_n<3){
					PLAYER_MOV.gotoAndStop("duck");
					PLAYER.jump_n++;
					METER_MOV.gotoAndStop(PLAYER.jump_n);
					PLAYER.state = "jump1-1";
					//audio
					_PLAY_SOUND("FROG_JUMP"+PLAYER.jump_n);
				}
			}
		}
		function open_help(){
			//CURRENT_MUSIC.pause();
			play_music("pause");
			PAUSE=true;
			INS_MOV.on('closed', close_help);//listen for help to close
			INS_MOV.gotoAndPlay("open");
		}
		function close_help(){
			//CURRENT_MUSIC.play();
			play_music("play");
			PAUSE=false;
			INS_MOV.off('closed', close_help);//turn off listener
			INS_MOV.gotoAndStop("off");
		}
		function click_mute_music(){
			//console.log("click_mute_music");
			if(_GLOBAL.MUTE_MUSIC){
				//console.log("UN-MUTE");
				_GLOBAL.MUTE_MUSIC=false;
				(CURRENT_MUSIC) ? play_music("play") : play_music("start");
				MUTE_MUSIC_MOV.gotoAndStop("on");
			}else{
				//console.log("MUTE");
				if(CURRENT_MUSIC)play_music("pause");
				MUTE_MUSIC_MOV.gotoAndStop("off");
				_GLOBAL.MUTE_MUSIC=true;
			}
		}
		function click_mute_fx(){
			//console.log("click_fx_music");
			_GLOBAL.MUTE_FX=(_GLOBAL.MUTE_FX) ? false : true;
			(_GLOBAL.MUTE_FX) ? MUTE_FX_MOV.gotoAndStop("off") : MUTE_FX_MOV.gotoAndStop("on");
		}
		//stage.on("stagemousedown", function(evt) {
		    //alert("the canvas was clicked at "+evt.stageX+","+evt.stageY);
		//})
		// ====================================================
		// PLAYER
		// ===================================================
		function update_player(o,mov){
			//o.x_spot+=1;
			//mov.x=o.x_spot;
			// Jumping
			switch(o.state){
				case "jump1-1":
					o.y_speed = 70;
					o.y_slow1 = .60;
					o.gravity1 = 37;
					//
					o.y_slow2 = .90;
					o.gravity2 = 3;
					o.float_point = 10;
					if(!DEAD)mov.gotoAndStop("up");
					o.state = "jump1-2";
					break;
				case "jump1-2":
					// up1
					o.y_spot-=o.y_speed;
					o.y_speed*= o.y_slow1;
					mov.y = float2int(o.y_spot);
					if(o.y_speed<=2){
						PLAYER.down=true;
						o.y_slow1=1+(1-o.y_slow1);
						o.state = "jump1-3";
					}
					break;
				case "jump1-3":
					// down gain speed
					o.y_spot+=o.y_speed;
					if(o.y_speed >= o.gravity1){
						o.y_speed = o.gravity1
					}else{
						o.y_speed*= o.y_slow1;
					}
					mov.y = float2int(o.y_spot);
					if(o.y_spot>=o.floor_n){
						// end fall
						
						if(DEAD){
							_PLAY_SOUND("FROG_DEAD");
							o.y_spot = o.floor_n-6;
							mov.y = o.y_spot;
							game_over_text();
							mov.gotoAndStop("dead2");
							o.step_n=80;
							o.state = "dead2";
						}else{
							_PLAY_SOUND("FROG_LAND");
							o.y_spot = o.floor_n;
							mov.y = o.y_spot;
							mov.gotoAndStop("land_hard");
							o.state = "land";
						}
					}else if(o.jump_n>1 && o.y_speed>o.float_point && !DEAD){
						o.y_speed = o.float_point;
						// trigger a float
						_PLAY_SOUND("FROG_AIR");
						mov.gotoAndStop("float");
						o.state = "float";
					}
					break;
				case "fall":
					o.y_spot+=36;
					mov.y = float2int(o.y_spot);
					if(o.y_spot>=o.floor_n){
						// end fall
						o.y_spot = (!DEAD) ? o.floor_n : o.floor_n-8;
						mov.y = o.y_spot;
						mov.gotoAndStop("land_hard");
						o.state = "land";
					}
					break;
				case "float":
					// down float slow down
					o.y_spot+=o.y_speed;
					o.y_speed*= o.y_slow2;
					mov.y = float2int(o.y_spot);
				
					if(o.y_spot>=o.floor_n){
						// end fall
						o.y_spot = o.floor_n;
						mov.y = o.y_spot;
						mov.gotoAndStop("land");
						o.state = "land";
					}else{
						if(o.y_speed<o.gravity2){
							o.y_speed = o.gravity2;
						}
					}
				break;
				case "land":
					if(o.jump_n>1){
						mov.gotoAndStop("run");
					}
					MULT=0;
					MULT_MOV.gotoAndStop(MULT);
					o.down=false;
					o.state = "run";
					o.jump_n = 0;
					METER_MOV.gotoAndStop(o.jump_n);
					break;
				case "cloud":
					//mov.gotoAndStop("cloud");
					PLAYER.down=false;
					o.state = "cloud-still";
					o.jump_n = 0;
					METER_MOV.gotoAndStop(o.jump_n);
					mov.x = o.x_spot;
					mov.y = o.y_spot;
					break;
				case "cloud-still":
					mov.x = o.x_spot;
					mov.y = o.y_spot;
					break;
				case "snail-bounce":
					PLAYER.down=false;
					o.jump_n = 0;
					METER_MOV.gotoAndStop(o.jump_n);
					//
					o.y_speed = 40;
					o.y_slow1 = .60;
					o.gravity1 = 40;
					//
					o.y_slow2 = .90;
					o.gravity2 = 3;
					o.float_point = 10;
					if(!DEAD)mov.gotoAndStop("up");
					o.state = "jump1-2";
					break;
				case "dead2":
					// up slow slow down
					o.step_n--;
					if(o.step_n<=0){
						kill_game();
					}
					break;
			}
			// side movement
			if(o.x_spot!=o.x_end && o.state!="cloud-still" && !DEAD){
				if(o.x_spot>o.x_end){
					o.x_spot--;
					if(o.x_spot-o.x_end<1)o.x_spot=o.x_end;
				}else{
					o.x_spot++;
					if(o.x_end-o.x_spot<1)o.x_spot=o.x_end;
				}
				mov.x=o.x_spot;
			}
		}
		function eat(points){
			var o,
			score_audio;
			//console.log("eat");
			if(DEAD)return;
			// audio
			_PLAY_SOUND("FROG_BITE"+randRange(1,4));
			if(PLAYER.state=="run"){
				MULT=0;
			}else if(MULT<MULT_MAX){
				MULT++;
				MULT_MOV.gotoAndStop(MULT);
			}
			points = MULT ? (points*MULT) : points;
			get_points(points);
			// points fx
			if(FPS_SLOW<=4){
				if(points<=15){
					score_audio="SCORE1";
				}else if(points<=25){
					score_audio="SCORE2";
				}else if(points<=40){
					score_audio="SCORE3";
				}else if(points<=75){
					score_audio="SCORE4";
				}else if(points<=100){
					score_audio="SCORE5";
				}else if(points<=150){
					score_audio="SCORE6";
				}else if(points<=200){
					score_audio="SCORE7";
				}else if(points<=350){
					score_audio="SCORE8";
				}else{
					score_audio="SCORE2";
				}
				o = new lib.POINTS_MOV();
				o.regX = o.width * 0.5;
				o.regY = o.height * 0.5;
				o.vars = {step_n:30,state:"off-delay",score_audio:score_audio};
				o.x = PLAYER.x_spot;
				o.y = PLAYER.y_spot;
				o.p_mov.POINTS.text = points;
				FX_ARRAY.push(o);                
				LAYER3_MOV.addChildAt(o,1);
			}
			//
			switch(PLAYER.state){
				case "float":
					PLAYER_MOV.gotoAndStop("float eat");
				break;
				case "jump1-1":
				case "jump1-2":
				case "jump1-3":
				case "snail-bounce":
				case "fall":
					PLAYER_MOV.gotoAndStop("up eat");
				break;
				case "cloud":
				case "cloud-still":
					PLAYER_MOV.gotoAndStop("cloud eat");
				break;
				default:
					PLAYER_MOV.gotoAndStop("run eat");
				break;
			}
		}
		function frog_talk(){
			if(!DEAD){
				_PLAY_SOUND("FROG_TALK",.7);
				switch(PLAYER.state){
					case "float":
						PLAYER_MOV.gotoAndStop("float talk");
						break;
					case "jump1-1":
					case "jump1-2":
					case "jump1-3":
					case "snail-bounce":
					case "fall":
						PLAYER_MOV.gotoAndStop("up talk");
						break;
					case "cloud":
					case "cloud-still":
						PLAYER_MOV.gotoAndStop("cloud talk");
						break;
					default:
						PLAYER_MOV.gotoAndStop("run talk");
						break;
				}
			}
		}
		function get_points(points){
			SCORE+=points;
			SCORE_DIS.text=SCORE;
		}
		function hurt_player(){
			HEALTH--;
			_PLAY_SOUND("ENEMY_HIT");
			if(HEALTH>=0)HEART_MOV.gotoAndStop(3-HEALTH);
			// spark fx
			o = new lib.SPARK_MOV();
			o.regX = o.width * 0.5;
			o.regY = o.height * 0.5;
			o.vars = {step_n:10,state:"off-delay"};
			o.x = PLAYER.x_spot;
			o.y = PLAYER.y_spot;
			FX_ARRAY.push(o);                
			LAYER3_MOV.addChildAt(o,1);
			if(HEALTH==0){
				// kill player animation
				//play_sound("GAME_OVER");
				DEAD=true;
				PLAYER.state = "jump1-1";
				PLAYER_MOV.gotoAndStop("dead1");
				//console.log("DEAD ********************************************");
			}else{
				// hurt player animation
				PLAYER.x_spot-=30;
				// if in air knock down
				switch(PLAYER.state){
					case "cloud":
					case "cloud-still":
					case "float":
					case "jump1-1":
					case "jump1-2":
					case "jump1-3":
						PLAYER.jump_n=4;
						PLAYER.state="fall";
					break;
				}
			}
		}
		// ====================================================
		// GAME OBJECTS
		// ====================================================
		//lib.FLY_MOV.prototype.vars={x_spot:700,y_spot:randRange(200, 700),state:"run",step_n:0,floor_n:floor_n,x_end:-30,speed:speed,hit_ready:true,hit_box:40};
		function spawn_fly() {
		    if(FLY_ARRAY.length < FLY_ARRAY_MAX && randRange(0, 100) > 80) {
		        var o = new lib.FLY_MOV();
		        o.regX = o.width * 0.5;
		        o.regY = o.height * 0.5;
				o.vars = {x_spot:820,y_spot:randRange(150, 510),state:"run",step_n:0,x_end:-10,speed:randRange(2, 7),fx_n:1,hit_ready:true,hit_box:40,points:10};
		        FLY_ARRAY.push(o);
		        LAYER3_MOV.addChildAt(o,1);
		    }
		}
		function update_fly(){
			var n;
			var o;
			for(n=FLY_ARRAY.length-1;n>=0;n--){
				o=FLY_ARRAY[n];
				if(o.vars.state=="run"){
					o.vars.x_spot-=o.vars.speed;
					o.x = o.vars.x_spot;
					o.y = o.vars.y_spot;
				}
				if(o.vars.x_spot<o.vars.x_end){
					// remove
					LAYER3_MOV.removeChild(FLY_ARRAY[n]);  
		            FLY_ARRAY.splice(n, 1); 
				}
			}
		}
		function fly_hittest(){
			var total_objects = FLY_ARRAY.length-1;
			var o;
			for(var i=total_objects;i>=0;--i){
				o = FLY_ARRAY[i];
				if(o.vars.hit_ready && distance(o.vars, PLAYER) < o.vars.hit_box) {
					eat(o.vars.points);
					//console.log("hit fly");
					o.vars.state="hit";
					o.vars.hit_ready=false;
					spawn_fx(o);
					LAYER3_MOV.removeChild(FLY_ARRAY[i]);
		            FLY_ARRAY.splice(i, 1);
				}
			}
		}
		function spawn_grub() {  
		    if(GRUB_ARRAY.length < GRUB_ARRAY_MAX && randRange(0, 100) > GRUB_ARRAY_R) {
		        var o = new lib.GRUB_MOV();
		        o.regX = o.width * 0.5;
		        o.regY = o.height * 0.5;
				o.vars = {x_spot:820,y_spot:FLOOR_N+10,state:"run",step_n:0,x_end:-30,speed:SPEED,fx_n:2,hit_ready:true,hit_box:40,points:5};
		        o.y = o.vars.y_spot;
				GRUB_ARRAY.push(o);                
		        LAYER3_MOV.addChildAt(o,1); 
		    }
		}
		function update_grub(){
			var n;
			var o;
			for(n=GRUB_ARRAY.length-1;n>=0;n--){
				o=GRUB_ARRAY[n];
				if(o.vars.state=="run"){
					o.vars.x_spot-=o.vars.speed;
					o.x = o.vars.x_spot;
				}
				if(o.vars.x_spot<o.vars.x_end){
					// remove
					LAYER3_MOV.removeChild(GRUB_ARRAY[n]);  
		            GRUB_ARRAY.splice(n, 1); 
				}
			}
		}
		function grub_hittest(){
			var total_objects = GRUB_ARRAY.length-1;
			var o;
			for(var i=total_objects;i>=0;--i){
				o = GRUB_ARRAY[i];
				if(o.vars.hit_ready && distance(o.vars, PLAYER) < o.vars.hit_box) {
					//console.log("hit grub");
					eat(o.vars.points);
					o.vars.state="hit";
					o.vars.hit_ready=false;
					spawn_fx(o);
					LAYER3_MOV.removeChild(GRUB_ARRAY[i]);
		            GRUB_ARRAY.splice(i, 1);
				}
			}
		}
		function spawn_firefly() {
		    if(FIREFLY_ARRAY.length < FIREFLY_ARRAY_MAX && randRange(0, 100) > FIREFLY_ARRAY_R) {
		        var o = new lib.FIREFLY_MOV();
		        o.regX = o.width * 0.5;
		        o.regY = o.height * 0.5;
				o.vars = {x_spot:820,y_spot:randRange(50, 350),state:"up",step_n_max:90,step_n:randRange(30, 90),x_end:-30,x_speed_max:randRange(2, 4),y_speed_max: randRange(1,4),fx_n:3,hit_ready:true,hit_box:35,points:25};
				o.vars.x_speed = o.vars.x_speed_max;
				o.vars.y_speed = o.vars.y_speed_max;
				o.gotoAndStop("up");
				FIREFLY_ARRAY.push(o);                
		        LAYER3_MOV.addChildAt(o,1); 
		    }
		}
		function update_firefly(){
			var n;
			var o;
			for(n=FIREFLY_ARRAY.length-1;n>=0;n--){
				o=FIREFLY_ARRAY[n];
				switch(o.vars.state){
					case "up":
						o.vars.x_spot-=o.vars.x_speed;
						o.x = o.vars.x_spot;
						//
						if(o.vars.y_speed<o.vars.y_speed_max)o.vars.y_speed+=.1;
						o.vars.y_spot-=o.vars.y_speed;
						o.y = o.vars.y_spot;
						//
						o.vars.step_n--;
						if(o.vars.step_n<=0){
							o.vars.step_n = o.vars.step_n_max;
							o.vars.y_speed *= -.5;
							o.gotoAndStop("down");
							o.vars.state = "down";
						}
						break;
					case "down":
						o.vars.x_spot-=o.vars.x_speed;
						o.x = o.vars.x_spot;
						//
						if(o.vars.y_speed<o.vars.y_speed_max)o.vars.y_speed+=.1;
						o.vars.y_spot+=o.vars.y_speed;
						o.y = o.vars.y_spot;
						//
						o.vars.step_n--;
						if(o.vars.step_n<=0 || o.vars.y_spot>=FLOOR_N){
							o.vars.step_n = o.vars.step_n_max;
							o.vars.y_speed *= -.5;
							o.gotoAndStop("up");
							o.vars.state = "up";
						}
						break;
				}
				//|| o.vars.y_spot<=FLOOR_N
				if(o.vars.x_spot<o.vars.x_end){
					// remove
					LAYER3_MOV.removeChild(FIREFLY_ARRAY[n]);  
		            FIREFLY_ARRAY.splice(n, 1); 
				}
			}
		}
		function firefly_hittest(){
			var total_objects = FIREFLY_ARRAY.length-1;
			var o;
			for(var i=total_objects;i>=0;--i){
				o = FIREFLY_ARRAY[i];
				if(o.vars.hit_ready && distance(o.vars, PLAYER) < o.vars.hit_box) {
					eat(o.vars.points);
					o.vars.state="hit";
					o.vars.hit_ready=false;
					spawn_fx(o);
					LAYER3_MOV.removeChild(FIREFLY_ARRAY[i]);
		            FIREFLY_ARRAY.splice(i, 1);
				}
			}
		}
		function spawn_draggonfly() {
		    if(DRAGGONFLY_ARRAY.length < DRAGGONFLY_ARRAY_MAX && randRange(0, 100) > DRAGGONFLY_ARRAY_R) {
		        var o = new lib.DRAGGONFLY_MOV();
		        o.regX = o.width * 0.5;
		        o.regY = o.height * 0.5;
				o.vars = {x_spot:820,y_spot:randRange(20, 60),state:"run",x_end:-40,speed:randRange(2, 6),fx_n:4,hit_ready:true,hit_box:50,points:50};
				o.y = o.vars.y_spot;
				DRAGGONFLY_ARRAY.push(o);                
		        LAYER3_MOV.addChildAt(o,1); 
		    }
		}
		function update_draggonfly(){
			var n;
			var o;
			for(n=DRAGGONFLY_ARRAY.length-1;n>=0;n--){
				o=DRAGGONFLY_ARRAY[n];
				switch(o.vars.state){
					case "run":
						o.vars.x_spot-=o.vars.speed;
						o.x = o.vars.x_spot;
						break;
				}
				if(o.vars.x_spot<o.vars.x_end){
					// remove
					LAYER3_MOV.removeChild(DRAGGONFLY_ARRAY[n]);  
		            DRAGGONFLY_ARRAY.splice(n, 1); 
				}
			}
		}
		function draggonfly_hittest(){
			var total_objects = DRAGGONFLY_ARRAY.length-1;
			var o;
			for(var i=total_objects;i>=0;--i){
				o = DRAGGONFLY_ARRAY[i];
				if(o.vars.hit_ready && distance(o.vars, PLAYER) < o.vars.hit_box) {
					eat(o.vars.points);
					o.vars.state="hit";
					o.vars.hit_ready=false;
					spawn_fx(o);
					LAYER3_MOV.removeChild(DRAGGONFLY_ARRAY[i]);
		            DRAGGONFLY_ARRAY.splice(i, 1);
				}
			}
		}
		function spawn_butterfly() {
		    if(BUTTERFLY_ARRAY.length < BUTTERFLY_ARRAY_MAX && randRange(0, 100) > BUTTERFLY_ARRAY_R) {
		        var o = new lib.BUTTERFLY_MOV();
		        o.regX = o.width * 0.5;
		        o.regY = o.height * 0.5;
				o.vars = {x_spot:randRange(207, 740),y_spot_max:randRange(440, 80),y_spot:-80,state:"down",step_n:90,y_end:-90,y_speed:1,y_speed_max: randRange(1,3),fx_n:7,hit_ready:true,hit_box:52,points:100};
				o.y = o.vars.y_spot;
				o.x = o.vars.x_spot;
				BUTTERFLY_ARRAY.push(o);                
		        LAYER3_MOV.addChildAt(o,1); 
		    }
		}
		function update_butterfly(){
			var n;
			var o;
			for(n=BUTTERFLY_ARRAY.length-1;n>=0;n--){
				o=BUTTERFLY_ARRAY[n];
				switch(o.vars.state){
					case "down":
						if(o.vars.y_speed<o.vars.y_speed_max)o.vars.y_speed+=.1;
						o.vars.y_spot+=o.vars.y_speed;
						o.y = o.vars.y_spot;
						//
						//o.vars.step_n--;
						if(o.vars.y_spot>=o.vars.y_spot_max || o.vars.y_spot>=FLOOR_N){
							o.vars.y_speed = .1;
							o.gotoAndStop("wait");
							o.vars.state = "wait";
						}
						break;
					case "wait":
						o.vars.step_n--;
						if(o.vars.step_n<=0){
							o.gotoAndStop("fly");
							o.vars.state = "up";
						}
						break;
					case "up":
						if(o.vars.y_speed<o.vars.y_speed_max)o.vars.y_speed+=.1;
						o.vars.y_spot-=o.vars.y_speed;
						o.y = o.vars.y_spot;
						if(o.vars.y_spot<=o.vars.y_end){
							LAYER3_MOV.removeChild(BUTTERFLY_ARRAY[n]);
							BUTTERFLY_ARRAY.splice(n, 1);
						}
						break;
				}
				//|| o.vars.y_spot<=FLOOR_N
				if(o.vars.x_spot<o.vars.x_end){
					// remove
					LAYER3_MOV.removeChild(BUTTERFLY_ARRAY[n]);  
		            BUTTERFLY_ARRAY.splice(n, 1); 
				}
			}
		}
		function butterfly_hittest(){
			var total_objects = BUTTERFLY_ARRAY.length-1;
			var o;
			for(var i=total_objects;i>=0;--i){
				o = BUTTERFLY_ARRAY[i];
				if(o.vars.hit_ready && distance(o.vars, PLAYER) < o.vars.hit_box) {
					eat(o.vars.points);
					o.vars.state="hit";
					o.vars.hit_ready=false;
					spawn_fx(o);
					LAYER3_MOV.removeChild(BUTTERFLY_ARRAY[i]);
		            BUTTERFLY_ARRAY.splice(i, 1);
				}
			}
		}
		function spawn_cloudr() {
		    if(CLOUDR_ARRAY.length < CLOUDR_ARRAY_MAX && randRange(0, 100) > CLOUDR_ARRAY_R) {
		        var o = new lib.CLOUDR_MOV();
		        o.regX = o.width * 0.5;
		        o.regY = o.height * 0.5;
				o.vars = {x_spot:-50,y_spot:randRange(80, 420),state:"run",step_n:0,x_end:WIDTH+50,speed:randRange(1, 4),fx_n:3,hit_ready:true,hit_box:50,lift:false};
		        CLOUDR_ARRAY.push(o);                
		        LAYER2_MOV.addChildAt(o,1); 
		    }
		}
		function update_cloudr(){
			var n;
			var o;
			for(n=CLOUDR_ARRAY.length-1;n>=0;n--){
				o=CLOUDR_ARRAY[n];
				// special animations
				switch(o.vars.state){
					case "dip1-1":
						// init dip settings
						o.vars.y_start = o.vars.y_spot;
						o.vars.y_speed = 8;
						o.vars.y_slow1 = .70;
						o.vars.state="dip1-2";
						break;
					case "dip1-2":
						// down
						o.vars.y_spot+=o.vars.y_speed;
						o.vars.y_speed *= o.vars.y_slow1;
						if(o.vars.y_speed<1){
							o.vars.y_speed = 1;
							o.vars.y_slow1+=1;
							o.vars.state="dip1-3";
						}
						break;
					case "dip1-3":
						// up speed up
						o.vars.y_spot-=1;
						if(o.vars.y_spot-o.vars.y_start<4){
							o.vars.state="run";
						}
						break;
				}
				// move the image
				o.vars.x_spot+=o.vars.speed;
				o.x = o.vars.x_spot;
				o.y = o.vars.y_spot;
				// check to lift player
				if(o.vars.lift && !DEAD){
					PLAYER.x_spot = o.vars.x_spot;
					PLAYER.y_spot = o.vars.y_spot-26;
					// check and see if frog has hopped or gone off screen
					if(PLAYER.jump_n || o.vars.x_spot>WIDTH){
						if(o.vars.x_spot>WIDTH)PLAYER.down = true;
						o.vars.lift=false;
						_PLAY_SOUND("CLOUD2");
						// reactivate cloud
						o.vars.hit_ready_delay = 20;
						o.gotoAndStop("happy");
						//gone off screen
						if(o.vars.x_spot>WIDTH){
							PLAYER.state="jump1-3";
							PLAYER.y_speed = 1;
							PLAYER.gravity1 = 40;
							PLAYER.y_slow1 = 1.4;
						}
					}
				}
				if(o.vars.hit_ready_delay){
					o.vars.hit_ready_delay--;
					if(!o.vars.hit_ready_delay)o.vars.hit_ready=true;
				}
				// remove if off screen
				if(o.vars.x_spot>o.vars.x_end){
					// remove
					LAYER2_MOV.removeChild(CLOUDR_ARRAY[n]);  
		            CLOUDR_ARRAY.splice(n, 1); 
				}
			}
		}
		function cloudr_hittest(){
			var total_objects = CLOUDR_ARRAY.length-1;
			var o;
			for(var i=total_objects;i>=0;--i){
				o = CLOUDR_ARRAY[i];
				if(PLAYER.down && PLAYER.y_spot< o.vars.y_spot && o.vars.hit_ready && distance(o.vars, PLAYER) < o.vars.hit_box && !DEAD && PLAYER.state!="cloud") {
					_PLAY_SOUND("CLOUD1");
					PLAYER_MOV.gotoAndStop("cloud");
					PLAYER.state="cloud";
					o.vars.state="dip1-1";
					o.vars.lift=true;
					o.vars.hit_ready=false;
					o.gotoAndStop("sad");
				}
			}
		}
		function spawn_cloudl() {
		    if(CLOUDL_ARRAY.length < CLOUDL_ARRAY_MAX && randRange(0, 100) > CLOUDL_ARRAY_R) {
		        var o = new lib.CLOUDL_MOV();
		        o.regX = o.width * 0.5;
		        o.regY = o.height * 0.5;
				o.vars = {x_spot:WIDTH+50,y_spot:randRange(80, 420),state:"run",step_n:0,x_end:-50,speed:randRange(1, 4),fx_n:3,hit_ready:true,hit_box:50,lift:false};
		        CLOUDL_ARRAY.push(o);                
		        LAYER2_MOV.addChildAt(o,1); 
		    }
		}
		function update_cloudl(){
			var n;
			var o;
			for(n=CLOUDL_ARRAY.length-1;n>=0;n--){
				o=CLOUDL_ARRAY[n];
				// special animations
				switch(o.vars.state){
					case "dip1-1":
						// init dip settings
						o.vars.y_start = o.vars.y_spot;
						o.vars.y_speed = 8;
						o.vars.y_slow1 = .70;
						o.vars.state="dip1-2";
						break;
					case "dip1-2":
						// down
						o.vars.y_spot+=o.vars.y_speed;
						o.vars.y_speed *= o.vars.y_slow1;
						if(o.vars.y_speed<1){
							o.vars.y_speed = 1;
							o.vars.y_slow1+=1;
							o.vars.state="dip1-3";
						}
						break;
					case "dip1-3":
						// up speed up
						o.vars.y_spot-=1;
						if(o.vars.y_spot-o.vars.y_start<4){
							o.vars.state="run";
						}
						break;
				}
				// move the image
				o.vars.x_spot-=o.vars.speed;
				o.x = o.vars.x_spot;
				o.y = o.vars.y_spot;
				// check to lift player
				if(o.vars.lift && !DEAD){
					PLAYER.x_spot = o.vars.x_spot;
					PLAYER.y_spot = o.vars.y_spot-26;
					// check and see if frog has hopped or gone off screen
					if(PLAYER.jump_n || o.vars.x_spot<0){
						if(o.vars.x_spot<0)PLAYER.down = true;
						_PLAY_SOUND("CLOUD2");
						o.vars.lift=false;
						// reactivate cloud
						o.vars.hit_ready_delay = 20;
						o.gotoAndStop("happy");
						//gone off screen
						if(o.vars.x_spot<0){
							PLAYER.state="jump1-3";
							PLAYER.y_speed = 1;
							PLAYER.gravity1 = 40;
							PLAYER.y_slow1 = 1.4;
						}
					}
				}
				if(o.vars.hit_ready_delay){
					o.vars.hit_ready_delay--;
					if(!o.vars.hit_ready_delay)o.vars.hit_ready=true;
				}
				// remove if off screen
				if(o.vars.x_spot<o.vars.x_end){
					// remove
					LAYER2_MOV.removeChild(CLOUDL_ARRAY[n]);  
		            CLOUDL_ARRAY.splice(n, 1); 
				}
			}
		}
		function cloudl_hittest(){
			var total_objects = CLOUDL_ARRAY.length-1;
			var o;
			for(var i=total_objects;i>=0;--i){
				o = CLOUDL_ARRAY[i];
				if(PLAYER.down && PLAYER.y_spot< o.vars.y_spot && o.vars.hit_ready && distance(o.vars, PLAYER) < o.vars.hit_box && !DEAD && PLAYER.state!="cloud") {
					_PLAY_SOUND("CLOUD1");
					PLAYER_MOV.gotoAndStop("cloud");
					PLAYER.state="cloud";
					o.vars.state="dip1-1";
					o.vars.lift=true;
					o.vars.hit_ready=false;
					o.gotoAndStop("sad");
				}
			}
		}
		function spawn_beetle() {  
		    if(BEETLE_ARRAY.length < BEETLE_ARRAY_MAX && randRange(0, 100) > BEETLE_ARRAY_R) {
		        var o = new lib.BEETLE_MOV();
		        o.regX = o.width * 0.5;
		        o.regY = o.height * 0.5;
				o.vars = {x_spot:820,y_spot:FLOOR_N+10,state:"run",step_n:0,x_end:-30,speed:randRange(SPEED,SPEED+4),hit_ready:true,hit_box:38};
		        o.y = o.vars.y_spot;
				BEETLE_ARRAY.push(o);                
		        LAYER3_MOV.addChildAt(o,1); 
		    }
		} 
		function update_beetle(){
			var n;
			var o;
			for(n=BEETLE_ARRAY.length-1;n>=0;n--){
				o=BEETLE_ARRAY[n];
				if(o.vars.state=="run"){
					o.vars.x_spot-=o.vars.speed;
					if(!o.vars.hit_ready)o.vars.x_spot-=o.vars.speed;
					o.x = o.vars.x_spot;
					//o.y = o.vars.y_spot;
				}else if(o.vars.state=="attack"){
					o.vars.step_n++;
					if(o.vars.step_n>=15){
						o.vars.step_n=0;
						o.vars.state="run";
						o.gotoAndStop("flee");
					}
				}
				if(o.vars.x_spot<o.vars.x_end){
					// remove
					LAYER3_MOV.removeChild(BEETLE_ARRAY[n]);  
		            BEETLE_ARRAY.splice(n, 1); 
				}
			}
		}
		function beetle_hittest(){
			var total_objects = BEETLE_ARRAY.length-1;
			var o;
			for(var i=total_objects;i>=0;--i){
				o = BEETLE_ARRAY[i];
				if(o.vars.hit_ready && distance(o.vars, PLAYER) < o.vars.hit_box) {
					//console.log("hit beetle");
					hurt_player();
					o.vars.state="attack";
					o.vars.hit_ready=false;
					o.gotoAndStop("attack");
				}
			}
		}
		function spawn_snail() {  
		    if(SNAIL_ARRAY.length < SNAIL_ARRAY_MAX && randRange(0, 100) > SNAIL_ARRAY_R) {
		        var o = new lib.SNAIL_MOV();
		        o.regX = o.width * 0.5;
		        o.regY = o.height * 0.5;
				o.vars = {x_spot:820,y_spot:FLOOR_N-4,state:"run",step_n:0,x_end:-40,x_speed_max:randRange(SPEED,SPEED+2),hit_ready:false,attack_ready:true,fx_n:5,hit_box:48,points:100};
		        o.vars.x_speed = o.vars.x_speed_max
				o.y = o.vars.y_spot;
				SNAIL_ARRAY.push(o);                
		        LAYER3_MOV.addChildAt(o,1); 
		    }
		} 
		function update_snail(){
			var n;
			var o;
			for(n=SNAIL_ARRAY.length-1;n>=0;n--){
				o=SNAIL_ARRAY[n];
				switch(o.vars.state){
					case "run":
						o.vars.x_spot-=o.vars.x_speed;
						if(!o.vars.attack_ready && !o.vars.hit_ready)o.vars.x_spot-=o.vars.x_speed;
						o.x = o.vars.x_spot;
						break;
					case "attack":
						o.vars.step_n++;
						if(o.vars.step_n>=15){
							o.vars.step_n=0;
							o.vars.state="run";
							o.gotoAndStop("run");
						}
						break;
					case "slug-hit1":
						o.vars.x_speed = 40;
						o.vars.x_slow = .90;
						o.vars.x_spot+=o.vars.x_speed;
						o.x = o.vars.x_spot;
						o.vars.step_n=30;
						o.vars.state="slug-hit2";
						o.gotoAndStop("slug hit");
						_PLAY_SOUND("SNAIL_POP");
						break;
					case "slug-hit2":
						o.vars.x_speed*=o.vars.x_slow;
						o.vars.x_spot+=o.vars.x_speed;
						o.x = o.vars.x_spot;
						o.vars.step_n--;
						if(o.vars.step_n<=0){
							o.vars.x_speed = o.vars.x_speed_max;
							o.vars.hit_ready = true;
							o.vars.state="run";
							o.gotoAndStop("slug run");
						}
						break;
						
				}
				if(o.vars.x_spot<o.vars.x_end){
					// remove
					LAYER3_MOV.removeChild(SNAIL_ARRAY[n]);  
		            SNAIL_ARRAY.splice(n, 1);
				}
			}
		}
		function snail_hittest(){
			var total_objects = SNAIL_ARRAY.length-1,
			hit_add,
			o;
			for(var i=total_objects;i>=0;--i){
				o = SNAIL_ARRAY[i];
				hit_add = (PLAYER.state=="float") ? 20 : 0;
				if(distance(o.vars, PLAYER) < (o.vars.hit_box+hit_add)) {
					if(o.vars.attack_ready){
						if(PLAYER.down && PLAYER.y_spot< o.vars.y_spot){
							//console.log("hit snail 1");
							// hurt snail
							_PLAY_SOUND("SHELL_BREAK");
							if(!DEAD)PLAYER.state="snail-bounce";
							o.vars.attack_ready=false;
							o.vars.state="slug-hit1";
							o.gotoAndStop("slug hit");
							spawn_fx(o);
							o.vars.fx_n=6;
						}else if(PLAYER.x_spot<=(o.vars.x_spot+15)){
							// hurt player
							//console.log("hit snail 2");
							hurt_player();
							o.vars.state="attack";
							o.vars.attack_ready=false;
							o.gotoAndStop("attack");
						}
					}else if(o.vars.hit_ready){
						//console.log("hit snail 3");
						eat(o.vars.points);
						o.vars.hit_ready=false;
						spawn_fx(o);
						LAYER3_MOV.removeChild(SNAIL_ARRAY[i]);  
						SNAIL_ARRAY.splice(i, 1);
					}
				}
			}
		}
		function spawn_wasp() {  
		    if(WASP_ARRAY.length < WASP_ARRAY_MAX && randRange(0, 100) > WASP_ARRAY_R) {
		        var o = new lib.WASP_MOV();
		        o.regX = o.width * 0.5;
		        o.regY = o.height * 0.5;
				o.vars = {x_spot:820,y_spot:randRange(120, 510),state:"run",step_n:0,x_end:-30,speed:randRange(2, 5),hit_ready:true,hit_box:50};
		        WASP_ARRAY.push(o);                
		        LAYER3_MOV.addChildAt(o,1); 
		    }
		} 
		function update_wasp(){
			var n;
			var o;
			for(n=WASP_ARRAY.length-1;n>=0;n--){
				o=WASP_ARRAY[n];
				if(o.vars.state=="run"){
					o.vars.x_spot-=o.vars.speed;
					if(!o.vars.hit_ready)o.vars.y_spot-=SPEED;
					o.x = o.vars.x_spot;
					o.y = o.vars.y_spot;
				}else if(o.vars.state=="attack"){
					o.vars.step_n++;
					if(o.vars.step_n>=10){
						o.vars.step_n=0;
						o.vars.state="run";
						o.gotoAndStop("fly");
					}
				}
				if(o.vars.x_spot<o.vars.x_end){
					// remove
					LAYER3_MOV.removeChild(WASP_ARRAY[n]);  
		            WASP_ARRAY.splice(n, 1); 
				}
			}
		}
		function wasp_hittest(){
			var total_objects = WASP_ARRAY.length-1;
			var o;
			for(var i=total_objects;i>=0;--i){
				o = WASP_ARRAY[i];
				if(o.vars.hit_ready && distance(o.vars, PLAYER) < o.vars.hit_box) {
					hurt_player();
					o.vars.state="attack";
					o.vars.hit_ready=false;
					o.gotoAndStop("attack");
				}
			}
		}
		// ====================================================
		// BACKGROUND
		// ===================================================
		function spawn_grass(start) {  
		    if(GRASS_ARRAY.length < GRASS_ARRAY_MAX && randRange(0, 100) > GRASS_ARRAY_R && FPS_SLOW<=2 || start) {
		        var o = new lib.GRASS_MOV();
				o.vars = {x_spot:890,y_spot:FLOOR_N+2,x_end:-90,speed:SPEED};
		        o.regX = o.width * 0.5;
		        o.regY = o.height;
		        //o.x = randRange(20, 384);
				if(start){
					o.vars.x_spot = randRange(20, WIDTH)
					o.x = o.vars.x_spot;
				}
		        o.y = o.vars.y_spot;
				o.gotoAndStop(randRange(0, 13));
				//o.x=900;
				//o.y=100;
				//o.data = {x_spot:500};
				o.cache(-110, -200, 220, 200);
		        GRASS_ARRAY.push(o);                
		        LAYER1_MOV.addChildAt(o,1); 
		    }
		} 
		function update_grass(){
			var n;
			var o;
			for(n=GRASS_ARRAY.length-1;n>=0;n--){
				o=GRASS_ARRAY[n];
				if(o.vars.x_spot<o.vars.x_end){
					// remove
					LAYER1_MOV.removeChild(GRASS_ARRAY[n]);  
		            GRASS_ARRAY.splice(n, 1); 
				}else{
					o.vars.x_spot-=o.vars.speed;
					o.x = o.vars.x_spot;
					//o.y = o.vars.y_spot;
				}
			}
		}
		function spawn_hill(start) {  
		    if(HILL_ARRAY.length < HILL_ARRAY_MAX && randRange(0, 100) > HILL_ARRAY_R && FPS_SLOW<=2 || start) {
		        var o = new lib.HILL_MOV();
		        o.regX = 0;
		        o.regY = o.height;
				o.scaleX = randRange(50,100) *.01 ;
				o.scaleY = randRange(50,100) *.01 ;
				o.vars = {x_spot:810,y_spot:FLOOR_N,x_end:-600,speed:1};
				if(start){
					o.vars.x_spot = randRange(0, WIDTH)
					o.x = o.vars.x_spot;
				}
		        o.y = o.vars.y_spot;
		        HILL_ARRAY.push(o);                
		        LAYER0_MOV.addChildAt(o,1); 
		    }
		} 
		function update_hill(){
			var n;
			var o;
			for(n=HILL_ARRAY.length-1;n>=0;n--){
				o=HILL_ARRAY[n];
				if(o.vars.x_spot<o.vars.x_end){
					// remove
					LAYER0_MOV.removeChild(HILL_ARRAY[n]);  
		            HILL_ARRAY.splice(n, 1); 
				}else{
					o.vars.x_spot-=o.vars.speed;
					o.x = o.vars.x_spot;
				}
			}
		}
		// ====================================================
		// FX
		// ===================================================
		function spawn_fx(o) { 
			var part,
			n,
			n_max=1,
			animation_min,
			animation_max;
			//
		    if(FX_ARRAY.length < FX_ARRAY_MAX && FPS_SLOW<=1) {
				switch(o.vars.fx_n){
					case 1:
						// fly
						n_max = 2;
						animation_min = 0;
						animation_max = 7;
					break;
					case 2:
						// grub
						n_max = 4;
						animation_min = 8;
						animation_max = 13;
					break;
					case 3:
						// firefly
						n_max = 2;
						animation_min = 14;
						animation_max = 18;
					break;
					case 4:
						// draggonfly
						n_max = 4;
						animation_min = 19;
						animation_max = 26;
					break;
					case 5:
						// snail - shell
						n_max = 5;
						animation_min = 27;
						animation_max = 30;
					break;
					case 6:
						// snail - slug
						n_max = 4;
						animation_min = 31;
						animation_max = 33;
					break;
					case 7:
						// butterfly
						n_max = 7;
						animation_min = 34;
						animation_max = 37;
					break;
				}
				for(n=1;n<=n_max;n++){
					part = new lib.FX_MOV();
					part.regX = o.width * 0.5;
					part.regY = o.height * 0.5;
					part.vars = {x_spot:o.vars.x_spot,y_spot:o.vars.y_spot,state:"init"};
					part.x = part.vars.x_spot;
					part.y = part.vars.y_spot;
					part.gotoAndStop(randRange(animation_min,animation_max));
					// see if this helps at all
					part.cache(-15, -15, 30, 30);
					FX_ARRAY.push(part);                
					LAYER3_MOV.addChildAt(part,1); 
				}
		    }
		}
		function update_fx(){
			var n;
			var o;
			for(n=FX_ARRAY.length-1;n>=0;n--){
				o=FX_ARRAY[n];
				switch(o.vars.state){
				case "init":
					//speed:randRange(2, 7)
					o.vars.y_speed = randRange(30,70);
					o.vars.y_slow1 = .60;
					o.vars.x_speed = randRange(-30,30);
					o.vars.x_slow1 = .92;
					o.vars.gravity1 = 20;
					o.vars.state = "up";
					break;
				case "up":
					// up1
					o.vars.y_spot-=o.vars.y_speed;
					o.vars.y_speed*= o.vars.y_slow1;
					o.vars.x_spot-=o.vars.x_speed;
					o.vars.x_speed*= o.vars.x_slow1;
					//
					o.y = float2int(o.vars.y_spot);
					o.x = float2int(o.vars.x_spot);
					if(o.vars.y_speed<=2){
						o.vars.y_speed = 2;
						o.vars.y_slow1=1+(1-o.vars.y_slow1);
						o.vars.state = "down";
					}
					break;
				case "down":
					// down gain speed
					o.vars.y_spot+=o.vars.y_speed;
					if(o.vars.y_speed<o.vars.gravity1)o.vars.y_speed*= o.vars.y_slow1;
					o.vars.x_spot-=o.vars.x_speed;
					o.vars.x_speed*= o.vars.x_slow1;
					o.y = float2int(o.vars.y_spot);
					o.x = float2int(o.vars.x_spot);
					if(o.vars.y_spot>=FLOOR_N+10){
						// end fall
						LAYER3_MOV.removeChild(FX_ARRAY[n]);  
						FX_ARRAY.splice(n, 1);
					}
					break;
				case "off-delay":
					o.vars.step_n--;
					if(o.vars.step_n<=0){
						LAYER3_MOV.removeChild(FX_ARRAY[n]);  
						FX_ARRAY.splice(n, 1);
					}else if(o.vars.step_n==20 && o.vars.score_audio){
						_PLAY_SOUND(o.vars.score_audio,.5);
					}
					break;
				case "level-start-delay":
					o.vars.step_n--;
					if(o.vars.step_n<=0){
						LAYER3_MOV.removeChild(FX_ARRAY[n]);  
						FX_ARRAY.splice(n, 1);
					}else if(o.vars.step_n==50 && !DEAD){
						frog_talk();
					}
					break;
				}
			}
		}
		// ====================================================
		// HELPERS
		// ===================================================
		function float2int (value) {
		    return value | 0;
		}
		function distance(obj1, obj2) { 
		    if(obj1 !== null && obj2 !== null){ 
		        var difx = obj2.x_spot - obj1.x_spot;  
		        var dify = obj2.y_spot - obj1.y_spot;  
		        return Math.sqrt( (difx*difx) + (dify*dify) ); 
		    } 
		}  
		function randRange(min, max) {  
		    return Math.floor(Math.random() * (max - min)) + min;  
		}
		/*
		function play_sound(id,v) {
			//createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
			if(MUTE_FX)return;
			if(v){
				createjs.Sound.play(id,{volume:v});
			}else{
				createjs.Sound.play(id);
			}
		}
		*/
		function play_music(step){
			if(_GLOBAL.MUTE_MUSIC)return;
			switch(step){
				case "start":
					//console.log("play_music start");
					CURRENT_MUSIC = createjs.Sound.play("MUSIC",{offset:58,volume:.4,loop:-1});
					break;
				case "pause":
					//console.log("pause music");
					//if(CURRENT_MUSIC)CURRENT_MUSIC.stop();
					if(CURRENT_MUSIC)CURRENT_MUSIC.paused=true;
					break;
				case "play":
					//console.log("play music");
					if(CURRENT_MUSIC)CURRENT_MUSIC.paused=false;
					break;
				case "stop":
					//console.log("stop music");
					if(CURRENT_MUSIC)CURRENT_MUSIC.stop();
					break;
			}
		}
		init_game();
		if(!_GLOBAL.score){
			console.log("FIRST PLAY");
			open_help();
		}else{
			console.log("RETURN PLAY");
			close_help();
		}
		// ###################################################################
		// ###################################################################
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// help
	this.INS_MOV = new lib.INS_MOV();
	this.INS_MOV.parent = this;
	this.INS_MOV.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.INS_MOV).wait(1));

	// layer3_mov
	this.LAYER3_MOV = new lib.emptycontainer3();
	this.LAYER3_MOV.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.LAYER3_MOV).wait(1));

	// meter
	this.SCORE_DIS = new cjs.Text("", "bold 22px 'Arial'", "#FCF286");
	this.SCORE_DIS.name = "SCORE_DIS";
	this.SCORE_DIS.textAlign = "center";
	this.SCORE_DIS.lineHeight = 27;
	this.SCORE_DIS.lineWidth = 76;
	this.SCORE_DIS.parent = this;
	this.SCORE_DIS.setTransform(400.9,555);

	this.FPS_NOW_DIS = new cjs.Text("", "bold 20px 'Arial'", "#DB8402");
	this.FPS_NOW_DIS.name = "FPS_NOW_DIS";
	this.FPS_NOW_DIS.lineHeight = 24;
	this.FPS_NOW_DIS.lineWidth = 64;
	this.FPS_NOW_DIS.parent = this;
	this.FPS_NOW_DIS.setTransform(11,14.2);

	this.MUTE_FX_MOV = new lib.mutefx();
	this.MUTE_FX_MOV.parent = this;
	this.MUTE_FX_MOV.setTransform(691.2,569.5);

	this.MUTE_MUSIC_MOV = new lib.mutemusic();
	this.MUTE_MUSIC_MOV.parent = this;
	this.MUTE_MUSIC_MOV.setTransform(631.6,569.5);

	this.MULT_MOV = new lib.moltmov();
	this.MULT_MOV.parent = this;
	this.MULT_MOV.setTransform(319.5,568);

	this.PAUSE_BUT = new lib.pausebutton();
	this.PAUSE_BUT.parent = this;
	this.PAUSE_BUT.setTransform(763,568);
	new cjs.ButtonHelper(this.PAUSE_BUT, 0, 1, 2, false, new lib.pausebutton(), 3);

	this.HEART_MOV = new lib.heartmov();
	this.HEART_MOV.parent = this;
	this.HEART_MOV.setTransform(210.6,571);

	this.instance = new lib.scorebar();
	this.instance.parent = this;
	this.instance.setTransform(356.1,551);

	this.METER_MOV = new lib.METER_MOV();
	this.METER_MOV.parent = this;
	this.METER_MOV.setTransform(42,570);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.METER_MOV},{t:this.instance},{t:this.HEART_MOV},{t:this.PAUSE_BUT},{t:this.MULT_MOV},{t:this.MUTE_MUSIC_MOV},{t:this.MUTE_FX_MOV},{t:this.FPS_NOW_DIS},{t:this.SCORE_DIS}]}).wait(1));

	// Frog
	this.PLAYER_MOV = new lib.ninjamov();
	this.PLAYER_MOV.parent = this;
	this.PLAYER_MOV.setTransform(0,500);

	this.timeline.addTween(cjs.Tween.get(this.PLAYER_MOV).wait(1));

	// layer2_mov
	this.LAYER2_MOV = new lib.emptycontainer1();
	this.LAYER2_MOV.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.LAYER2_MOV).wait(1));

	// layer1_mov
	this.LAYER1_MOV = new lib.CONTAINER();
	this.LAYER1_MOV.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.LAYER1_MOV).wait(1));

	// layer0_mov
	this.LAYER0_MOV = new lib.CONTAINER();
	this.LAYER0_MOV.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.LAYER0_MOV).wait(1));

	// background
	this.instance_1 = new lib.sky1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.GAME_MOV, new cjs.Rectangle(-50,-1.8,850,601.9), null);


// stage content:
(lib.Frog_Hop16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// ###################################################################
		// Main Time Line 
		// ###################################################################
		// exportRoot = _GLOBAL if you want movie clip to acces the main timeline
		this.stop();
		MAIN = this;
		_GLOBAL = {}; // global object
		_PLAY_SOUND = function(id,v) {
			//createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
			if(_GLOBAL.MUTE_FX)return;
			if(v){
				createjs.Sound.play(id,{volume:v});
			}else{
				createjs.Sound.play(id);
			}
		};
		//
		var TITLE_MOV, GAME_MOV, HIGH_MOV;
		//
		openTitleScreen();
		//
		function openTitleScreen(){
			createjs.Touch.enable(stage, true, true);
			if(HIGH_MOV)HIGH_MOV.removeAllEventListeners();
			MAIN.removeAllChildren();// remove all screens
			TITLE_MOV = new lib.TITLE_MOV(); 
			TITLE_MOV.x = 0;
			TITLE_MOV.y = 0;
			TITLE_MOV.on('closed', openGameScreen);
			MAIN.addChild(TITLE_MOV);
			TITLE_MOV.gotoAndPlay("open");
		}
		function openGameScreen() {
			createjs.Touch.enable(stage, true, false);
			if(TITLE_MOV)TITLE_MOV.removeAllEventListeners();
			MAIN.removeAllChildren();// remove all screens
			GAME_MOV = new lib.GAME_MOV();
			GAME_MOV.x = 0;
			GAME_MOV.y = 0;
			GAME_MOV.on('closed', openHighScreen);
			MAIN.addChild(GAME_MOV);
		}
		function openHighScreen(){
			if(GAME_MOV)GAME_MOV.removeAllEventListeners();
			MAIN.removeAllChildren();// remove all screens
			HIGH_MOV = new lib.HIGH_MOV();
			HIGH_MOV.x = 0;
			HIGH_MOV.y = 0;
			HIGH_MOV.on('closed', openTitleScreen);
			MAIN.addChild(HIGH_MOV);
			HIGH_MOV.gotoAndPlay("open");
		}
		//createjs.Touch.enable(stage, true, true);
		// ###################################################################
		// ###################################################################
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Frog_Hop_atlas_.png", id:"Frog_Hop_atlas_"},
		{src:"images/Frog_Hop_atlas_2.png", id:"Frog_Hop_atlas_2"},
		{src:"images/Frog_Hop_atlas_3.png", id:"Frog_Hop_atlas_3"},
		{src:"images/Frog_Hop_atlas_4.png", id:"Frog_Hop_atlas_4"},
		{src:"images/Frog_Hop_atlas_5.png", id:"Frog_Hop_atlas_5"},
		{src:"sounds/CLOUD1.mp3", id:"CLOUD1"},
		{src:"sounds/CLOUD2.mp3", id:"CLOUD2"},
		{src:"sounds/ENEMY_HIT.mp3", id:"ENEMY_HIT"},
		{src:"sounds/FROG_AIR.mp3", id:"FROG_AIR"},
		{src:"sounds/FROG_BITE1.mp3", id:"FROG_BITE1"},
		{src:"sounds/FROG_BITE2.mp3", id:"FROG_BITE2"},
		{src:"sounds/FROG_BITE3.mp3", id:"FROG_BITE3"},
		{src:"sounds/FROG_BITE4.mp3", id:"FROG_BITE4"},
		{src:"sounds/FROG_DEAD.mp3", id:"FROG_DEAD"},
		{src:"sounds/FROG_JUMP1.mp3", id:"FROG_JUMP1"},
		{src:"sounds/FROG_JUMP2.mp3", id:"FROG_JUMP2"},
		{src:"sounds/FROG_JUMP3.mp3", id:"FROG_JUMP3"},
		{src:"sounds/FROG_LAND.mp3", id:"FROG_LAND"},
		{src:"sounds/FROG_TALK.mp3", id:"FROG_TALK"},
		{src:"sounds/MUSIC.mp3", id:"MUSIC"},
		{src:"sounds/SCORE1.mp3", id:"SCORE1"},
		{src:"sounds/SCORE2.mp3", id:"SCORE2"},
		{src:"sounds/SCORE3.mp3", id:"SCORE3"},
		{src:"sounds/SCORE4.mp3", id:"SCORE4"},
		{src:"sounds/SCORE5.mp3", id:"SCORE5"},
		{src:"sounds/SCORE6.mp3", id:"SCORE6"},
		{src:"sounds/SCORE7.mp3", id:"SCORE7"},
		{src:"sounds/SCORE8.mp3", id:"SCORE8"},
		{src:"sounds/SHELL_BREAK.mp3", id:"SHELL_BREAK"},
		{src:"sounds/SNAIL_POP.mp3", id:"SNAIL_POP"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;