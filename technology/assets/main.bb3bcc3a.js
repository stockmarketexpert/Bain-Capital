const gx=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver((i)=>{for(const r of i)
if(r.type==="childList")
for(const o of r.addedNodes)
o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o);}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return(i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?(r.credentials="include"):i.crossorigin==="anonymous"?(r.credentials="omit"):(r.credentials="same-origin"),r);}
function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r);}};gx();(function(s){var e=$("main"),t=document.getElementById("btn-search"),n=document.getElementById("btn-search-close"),i=document.querySelector(".search"),r=i.querySelector(".search__input"),o=$("header a:not(#btn-search)");function a(){l();}
function l(){t.addEventListener("click",c),n.addEventListener("click",u),document.addEventListener("keyup",function(h){h.keyCode==27&&u();});}
function c(){e.addClass("main-wrap--move"),i.classList.add("search--open"),$(o).on("click",u),(t.style.display="none"),(n.style.display="inline-block"),($("#search__input").value=""),(document.getElementById("typedtext-all").innerHTML="");var h=0,d="What are you looking for?",f=30;function p(){h<d.length&&((document.getElementById("typedtext-all").innerHTML+=d.charAt(h)),h++,setTimeout(p,f));}
p(),$("html").keypress(function(){$("#search__input").focus();});}
function u(){e.removeClass("main-wrap--move"),i.classList.remove("search--open"),(t.style.display="inline-block"),(n.style.display="none"),r.blur(),(r.value=""),$("#search__input").focusout(),$("#typedtext-all").empty(),$(this).val()||($("#typedtext").show(),$(".underscore").show()),$("html").unbind("keypress"),(document.getElementById("typedtext-all").innerHTML="");}
a();})();$(document).ready(function(){$("#search__input").focus(function(){$("#typedtext").hide(),$(".underscore").hide();}),$("#search__input").blur(function(){$(this).val()||($("#typedtext").show(),$(".underscore").show());});});const _x=location.hostname==="localhost"?"":"/baincap/bctech";document.querySelectorAll(".header-subbar a").forEach((s)=>{s.href=_x+s.getAttribute("href");});function Ei(s){if(s===void 0)
throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s;}
function Mg(s,e){(s.prototype=Object.create(e.prototype)),(s.prototype.constructor=s),(s.__proto__=e);}/*!
* GSAP 3.12.3
* https://gsap.com
*
* @license Copyright 2008-2023, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
var Ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""},},bo={duration:0.5,overwrite:!1,delay:0},Ud,sn,bt,Un=1e8,lt=1/Un,Fh=Math.PI*2,yx=Fh/4,xx=0,Sg=Math.sqrt,vx=Math.cos,wx=Math.sin,$t=function(e){return typeof e=="string";},Mt=function(e){return typeof e=="function";},Oi=function(e){return typeof e=="number";},Hd=function(e){return typeof e=="undefined";},fi=function(e){return typeof e=="object";},yn=function(e){return e!==!1;},Gd=function(){return typeof window!="undefined";},pl=function(e){return Mt(e)||$t(e);},Tg=(typeof ArrayBuffer=="function"&&ArrayBuffer.isView)||function(){},on=Array.isArray,Oh=/(?:-?\.?\d|\.)+/gi,Eg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Iu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ag=/[+-]=-?[.\d]+/,Cg=/[^,'"\[\]\s]+/gi,bx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,On,kh,Vd,Rn={},Ic={},Lg,Pg=function(e){return(Ic=ls(e,Rn))&&bn;},Wd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()");},Ta=function(e,t){return!t&&console.warn(e);},Rg=function(e,t){return(e&&(Rn[e]=t)&&Ic&&(Ic[e]=t))||Rn;},Ea=function(){return 0;},Mx={suppressEvents:!0,isStart:!0,kill:!1},uc={suppressEvents:!0,kill:!1},Sx={suppressEvents:!0},qd={},ir=[],Nh={},Dg,En={},Bu={},up=30,hc=[],Xd="",$d=function(e){var t=e[0],n,i;if((fi(t)||Mt(t)||(e=[e]),!(n=(t._gsap||{}).harness))){for(i=hc.length;i--&&!hc[i].targetTest(t););n=hc[i];}
for(i=e.length;i--;)
(e[i]&&(e[i]._gsap||(e[i]._gsap=new n0(e[i],n))))||e.splice(i,1);return e;},Kr=function(e){return e._gsap||$d(Hn(e))[0]._gsap;},Ig=function(e,t,n){return(n=e[t])&&Mt(n)?e[t]():(Hd(n)&&e.getAttribute&&e.getAttribute(t))||n;},xn=function(e,t){return(e=e.split(",")).forEach(t)||e;},Pt=function(e){return Math.round(e*1e5)/1e5||0;},Wt=function(e){return Math.round(e*1e7)/1e7||0;},ao=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return((e=parseFloat(e)),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i);},Tx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n;},Bc=function(){var e=ir.length,t=ir.slice(0),n,i;for(Nh={},ir.length=0,n=0;n<e;n++)
(i=t[n]),i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0);},Bg=function(e,t,n,i){ir.length&&!sn&&Bc(),e.render(t,n,i||(sn&&t<0&&(e._initted||e._startAt))),ir.length&&!sn&&Bc();},Fg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Cg).length<2?t:$t(e)?e.trim():e;},Og=function(e){return e;},Gn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e;},Ex=function(e){return function(t,n){for(var i in n)
i in t||(i==="duration"&&e)||i==="ease"||(t[i]=n[i]);};},ls=function(e,t){for(var n in t)e[n]=t[n];return e;},hp=function s(e,t){for(var n in t)
n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=fi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e;},Fc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n;},xa=function(e){var t=e.parent||mt,n=e.keyframes?Ex(on(e.keyframes)):Gn;if(yn(e.inherit))
for(;t;)n(e,t.vars.defaults),(t=t.parent||t._dp);return e;},Ax=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0;},kg=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return(o?((t._next=o._next),(o._next=t)):((t._next=e[n]),(e[n]=t)),t._next?(t._next._prev=t):(e[i]=t),(t._prev=o),(t.parent=t._dp=e),t);},nu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?(r._next=o):e[n]===t&&(e[n]=o),o?(o._prev=r):e[i]===t&&(e[i]=r),(t._next=t._prev=t.parent=null);},cr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),(e._act=0);},Qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))
for(var n=e;n;)(n._dirty=1),(n=n.parent);return e;},Cx=function(e){for(var t=e.parent;t&&t.parent;)
(t._dirty=1),t.totalDuration(),(t=t.parent);return e;},zh=function(e,t,n,i){return(e._startAt&&(sn?e._startAt.revert(uc):(e.vars.immediateRender&&!e.vars.autoRevert)||e._startAt.render(t,!0,i)));},Lx=function s(e){return!e||(e._ts&&s(e.parent));},dp=function(e){return e._repeat?Mo(e._tTime,(e=e.duration()+e._rDelay))*e:0;},Mo=function(e,t){var n=Math.floor((e/=t));return e&&n===e?n-1:n;},Oc=function(e,t){return((e-t._start)*t._ts+
(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur));},iu=function(e){return(e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||lt)||0)));},ru=function(e,t){var n=e._dp;return(n&&n.smoothChildTiming&&e._ts&&((e._start=Wt(n._time-
(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts))),iu(e),n._dirty||Qr(n,e)),e);},Ng=function(e,t){var n;if(((t._time||(!t._dur&&t._initted)||(t._start<e._time&&(t._dur||!t.add)))&&((n=Oc(e.rawTime(),t)),(!t._dur||tl(0,t.totalDuration(),n)-t._tTime>lt)&&t.render(n,!0)),Qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts)){if(e._dur<e.duration())
for(n=e;n._dp;)
n.rawTime()>=0&&n.totalTime(n._tTime),(n=n._dp);e._zTime=-lt;}},ri=function(e,t,n,i){return(t.parent&&cr(t),(t._start=Wt((Oi(n)?n:n||e!==mt?Fn(e,n,t):e._time)+t._delay)),(t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0))),kg(e,t,"_first","_last",e._sort?"_start":0),Uh(t)||(e._recent=t),i||Ng(e,t),e._ts<0&&ru(e,e._tTime),e);},zg=function(e,t){return((Rn.ScrollTrigger||Wd("scrollTrigger",t))&&Rn.ScrollTrigger.create(t,e));},Ug=function(e,t,n,i,r){if((jd(e,t,r),!e._initted))return 1;if(!n&&e._pt&&!sn&&((e._dur&&e.vars.lazy!==!1)||(!e._dur&&e.vars.lazy))&&Dg!==An.frame)
return ir.push(e),(e._lazy=[r,i]),1;},Px=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t));},Uh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart";},Rx=function(e,t,n,i){var r=e.ratio,o=t<0||(!t&&((!e._start&&Px(e)&&!(!e._initted&&Uh(e)))||((e._ts<0||e._dp._ts<0)&&!Uh(e))))?0:1,a=e._rDelay,l=0,c,u,h;if((a&&e._repeat&&((l=tl(0,e._tDur,t)),(u=Mo(l,a)),e._yoyo&&u&1&&(o=1-o),u!==Mo(e._tTime,a)&&((r=1-o),e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||sn||i||e._zTime===lt||(!t&&e._zTime))){if(!e._initted&&Ug(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?lt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)
c.r(o,c.d),(c=c._next);t<0&&zh(e,t,n,!0),e._onUpdate&&!n&&Cn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Cn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&cr(e,1),!n&&!sn&&(Cn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()));}else e._zTime||(e._zTime=t);},Dx=function(e,t,n){var i;if(n>t)
for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next;}
else
for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev;}},So=function(e,t,n,i){var r=e._repeat,o=Wt(t)||0,a=e._tTime/e._tDur;return(a&&!i&&(e._time*=o/e._dur),(e._dur=o),(e._tDur=r?(r<0?1e10:Wt(o*(r+1)+e._rDelay*r)):o),a>0&&!i&&ru(e,(e._tTime=e._tDur*a)),e.parent&&iu(e),n||Qr(e.parent,e),e);},fp=function(e){return e instanceof hn?Qr(e):So(e,e._dur);},Ix={_start:0,endTime:Ea,totalDuration:Ea},Fn=function s(e,t,n){var i=e.labels,r=e._recent||Ix,o=e.duration()>=Un?r.endTime(!1):e._dur,a,l,c;return $t(t)&&(isNaN(t)||t in i)?((l=t.charAt(0)),(c=t.substr(-1)==="%"),(a=t.indexOf("=")),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+
(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):((l=parseFloat(t.charAt(a-1)+t.substr(a+1))),c&&n&&(l=(l/100)*(on(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t;},va=function(e,t,n){var i=Oi(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if((i&&(o.duration=t[1]),(o.parent=n),e)){for(a=o,l=n;l&&!("immediateRender"in a);)
(a=l.vars.defaults||{}),(l=yn(l.vars.inherit)&&l.parent);(o.immediateRender=yn(a.immediateRender)),e<2?(o.runBackwards=1):(o.startAt=t[r-1]);}
return new Ft(t[0],o,t[r+1]);},xr=function(e,t){return e||e===0?t(e):t;},tl=function(e,t,n){return n<e?e:n>t?t:n;},rn=function(e,t){return!$t(e)||!(t=bx.exec(e))?"":t[1];},Bx=function(e,t,n){return xr(n,function(i){return tl(e,t,i);});},Hh=[].slice,Hg=function(e,t){return(e&&fi(e)&&"length"in e&&((!t&&!e.length)||(e.length-1 in e&&fi(e[0])))&&!e.nodeType&&e!==On);},Fx=function(e,t,n){return(n===void 0&&(n=[]),e.forEach(function(i){var r;return($t(i)&&!t)||Hg(i,1)?(r=n).push.apply(r,Hn(i)):n.push(i);})||n);},Hn=function(e,t,n){return bt&&!t&&bt.selector?bt.selector(e):$t(e)&&!n&&(kh||!To())?Hh.call((t||Vd).querySelectorAll(e),0):on(e)?Fx(e,n):Hg(e)?Hh.call(e,0):e?[e]:[];},Gh=function(e){return((e=Hn(e)[0]||Ta("Invalid scope")||{}),function(t){var n=e.current||e.nativeElement||e;return Hn(t,n.querySelectorAll?n:n===e?Ta("Invalid scope")||Vd.createElement("div"):e);});},Gg=function(e){return e.sort(function(){return 0.5-Math.random();});},Vg=function(e){if(Mt(e))return e;var t=fi(e)?e:{each:e},n=es(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return($t(i)?(u=h={center:0.5,edges:0.5,end:1}[i]||0):!a&&l&&((u=i[0]),(h=i[1])),function(d,f,p){var g=(p||t).length,y=o[g],_,m,w,v,x,M,S,T,D;if(!y){if(((D=t.grid==="auto"?0:(t.grid||[1,Un])[1]),!D)){for(S=-Un;S<(S=p[D++].getBoundingClientRect().left)&&D<g;);D<g&&D--;}
for(y=o[g]=[],_=l?Math.min(D,g)*u-0.5:i%D,m=D===Un?0:l?(g*h)/D-0.5:(i/D)|0,S=0,T=Un,M=0;M<g;M++)
(w=(M%D)-_),(v=m-((M/D)|0)),(y[M]=x=c?Math.abs(c==="y"?v:w):Sg(w*w+v*v)),x>S&&(S=x),x<T&&(T=x);i==="random"&&Gg(y),(y.max=S-T),(y.min=T),(y.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(D>g?g-1:c?c==="y"?g/D:D:Math.max(D,g/D))||0)*(i==="edges"?-1:1)),(y.b=g<0?r-g:r),(y.u=rn(t.amount||t.each)||0),(n=n&&g<0?Qg(n):n);}
return((g=(y[d]-y.min)/y.max||0),Wt(y.b+(n?n(g):g)*y.v)+y.u);});},Vh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Wt(Math.round(parseFloat(n)/e)*e*t);return(i-(i%1))/t+(Oi(n)?0:rn(n));};},Wg=function(e,t){var n=on(e),i,r;return(!n&&fi(e)&&((i=n=e.radius||Un),e.values?((e=Hn(e.values)),(r=!Oi(e[0]))&&(i*=i)):(e=Vh(e.increment))),xr(t,n?Mt(e)?function(o){return(r=e(o)),Math.abs(r-o)<=i?r:o;}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Un,u=0,h=e.length,d,f;h--;)
r?((d=e[h].x-a),(f=e[h].y-l),(d=d*d+f*f)):(d=Math.abs(e[h]-a)),d<c&&((c=d),(u=h));return((u=!i||c<=i?e[u]:o),r||u===o||Oi(o)?u:u+rn(o));}:Vh(e)));},qg=function(e,t,n,i){return xr(on(e)?!t:n===!0?!!(n=0):!i,function(){return on(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*0.99))/n)*n*i)/i;});},Ox=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)
t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r);},i);};},kx=function(e,t){return function(n){return e(parseFloat(n))+(t||rn(n));};},Nx=function(e,t,n){return $g(e,t,0,1,n);},Xg=function(e,t,n){return xr(n,function(i){return e[~~t(i)];});},zx=function s(e,t,n){var i=t-e;return on(e)?Xg(e,s(0,e.length),t):xr(n,function(r){return((i+((r-e)%i))%i)+e;});},Ux=function s(e,t,n){var i=t-e,r=i*2;return on(e)?Xg(e,s(0,e.length-1),t):xr(n,function(o){return(o=(r+((o-e)%r))%r||0),e+(o>i?r-o:o);});},Aa=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)
(o=e.indexOf(")",i)),(a=e.charAt(i+7)==="["),(r=e.substr(i+7,o-i-7).match(a?Cg:Oh)),(n+=e.substr(t,i-t)+qg(a?r:+r[0],a?0:+r[1],+r[2]||1e-5)),(t=o+1);return n+e.substr(t,e.length-t);},$g=function(e,t,n,i,r){var o=t-e,a=i-n;return xr(r,function(l){return n+(((l-e)/o)*a||0);});},Hx=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t;};if(!r){var o=$t(e),a={},l,c,u,h,d;if((n===!0&&(i=1)&&(n=null),o))
(e={p:e}),(t={p:t});else if(on(e)&&!on(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)
u.push(s(e[c-1],e[c]));h--,(r=function(p){p*=h;var g=Math.min(d,~~p);return u[g](p-g);}),(n=t);}else i||(e=ls(on(e)?[]:{},e));if(!u){for(l in t)Yd.call(a,e,l,"get",t[l]);r=function(p){return Kd(p,a)||(o?e.p:e);};}}
return xr(n,r);},pp=function(e,t,n){var i=e.labels,r=Un,o,a,l;for(o in i)
(a=i[o]-t),a<0==!!n&&a&&r>(a=Math.abs(a))&&((l=o),(r=a));return l;},Cn=function(e,t,n){var i=e.vars,r=i[t],o=bt,a=e._ctx,l,c,u;if(!!r)
return((l=i[t+"Params"]),(c=i.callbackScope||e),n&&ir.length&&Bc(),a&&(bt=a),(u=l?r.apply(c,l):r.call(c)),(bt=o),u);},da=function(e){return(cr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&Cn(e,"onInterrupt"),e);},eo,Yg=[],jg=function(e){if(Gd()&&e){e=(!e.name&&e.default)||e;var t=e.name,n=Mt(e),i=t&&!n&&e.init?function(){this._props=[];}:e,r={init:Ea,render:Kd,add:Yd,kill:iv,modifier:nv,rawVars:0,},o={targetTest:0,get:0,getSetter:Zd,aliases:{},register:0};if((To(),e!==i)){if(En[t])return;Gn(i,Gn(Fc(e,r),o)),ls(i.prototype,ls(r,Fc(e,o))),(En[(i.prop=t)]=i),e.targetTest&&(hc.push(i),(qd[t]=1)),(t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+
"Plugin");}
Rg(t,i),e.register&&e.register(bn,i,vn);}else e&&Yg.push(e);},at=255,fa={aqua:[0,at,at],lime:[0,at,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,at],navy:[0,0,128],white:[at,at,at],olive:[128,128,0],yellow:[at,at,0],orange:[at,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[at,0,0],pink:[at,192,203],cyan:[0,at,at],transparent:[at,at,at,0],},Fu=function(e,t,n){return((e+=e<0?1:e>1?-1:0),((e*6<1?t+(n-t)*e*6:e<0.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*at+
0.5)|0);},Jg=function(e,t,n){var i=e?(Oi(e)?[e>>16,(e>>8)&at,e&at]:0):fa.black,r,o,a,l,c,u,h,d,f,p;if(!i){if((e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fa[e]))
i=fa[e];else if(e.charAt(0)==="#"){if((e.length<6&&((r=e.charAt(1)),(o=e.charAt(2)),(a=e.charAt(3)),(e="#"+
r+
r+
o+
o+
a+
a+
(e.length===5?e.charAt(4)+e.charAt(4):""))),e.length===9))
return((i=parseInt(e.substr(1,6),16)),[i>>16,(i>>8)&at,i&at,parseInt(e.substr(7),16)/255]);(e=parseInt(e.substr(1),16)),(i=[e>>16,(e>>8)&at,e&at]);}else if(e.substr(0,3)==="hsl"){if(((i=p=e.match(Oh)),!t))
(l=(+i[0]%360)/360),(c=+i[1]/100),(u=+i[2]/100),(o=u<=0.5?u*(c+1):u+c-u*c),(r=u*2-o),i.length>3&&(i[3]*=1),(i[0]=Fu(l+1/3,r,o)),(i[1]=Fu(l,r,o)),(i[2]=Fu(l-1/3,r,o));else if(~e.indexOf("="))
return(i=e.match(Eg)),n&&i.length<4&&(i[3]=1),i;}else i=e.match(Oh)||fa.transparent;i=i.map(Number);}
return(t&&!p&&((r=i[0]/at),(o=i[1]/at),(a=i[2]/at),(h=Math.max(r,o,a)),(d=Math.min(r,o,a)),(u=(h+d)/2),h===d?(l=c=0):((f=h-d),(c=u>0.5?f/(2-h-d):f/(h+d)),(l=h===r?(o-a)/f+(o<a?6:0):h===o?(a-r)/f+2:(r-o)/f+4),(l*=60)),(i[0]=~~(l+0.5)),(i[1]=~~(c*100+0.5)),(i[2]=~~(u*100+0.5))),n&&i.length<4&&(i[3]=1),i);},Zg=function(e){var t=[],n=[],i=-1;return(e.split(rr).forEach(function(r){var o=r.match(Qs)||[];t.push.apply(t,o),n.push((i+=o.length+1));}),(t.c=n),t);},mp=function(e,t,n){var i="",r=(e+i).match(rr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(((r=r.map(function(d){return((d=Jg(d,t,1))&&o+
(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+
")");})),n&&((u=Zg(e)),(l=n.c),l.join(i)!==u.c.join(i))))
for(c=e.replace(rr,"1").split(Qs),h=c.length-1;a<h;a++)
i+=c[a]+
(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)
for(c=e.split(rr),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h];},rr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fa)s+="|"+e+"\\b";return new RegExp(s+")","gi");})(),Gx=/hsl[a]?\(/,Kg=function(e){var t=e.join(" "),n;if(((rr.lastIndex=0),rr.test(t)))
return((n=Gx.test(t)),(e[1]=mp(e[1],n)),(e[0]=mp(e[0],n,Zg(e[1]))),!0);},Ca,An=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,d,f,p=function g(y){var _=s()-i,m=y===!0,w,v,x,M;if((_>e&&(n+=_-t),(i+=_),(x=i-n),(w=x-o),(w>0||m)&&((M=++h.frame),(d=x-h.time*1e3),(h.time=x=x/1e3),(o+=w+(w>=r?4:r-w)),(v=1)),m||(l=c(g)),v))
for(f=0;f<a.length;f++)a[f](x,d,M,y);};return((h={time:0,frame:0,tick:function(){p(!0);},deltaRatio:function(y){return d/(1e3/(y||60));},wake:function(){Lg&&(!kh&&Gd()&&((On=kh=window),(Vd=On.document||{}),(Rn.gsap=bn),(On.gsapVersions||(On.gsapVersions=[])).push(bn.version),Pg(Ic||On.GreenSockGlobals||(!On.gsap&&On)||{}),(u=On.requestAnimationFrame),Yg.forEach(jg)),l&&h.sleep(),(c=u||function(y){return setTimeout(y,(o-h.time*1e3+1)|0);}),(Ca=1),p(2));},sleep:function(){(u?On.cancelAnimationFrame:clearTimeout)(l),(Ca=0),(c=Ea);},lagSmoothing:function(y,_){(e=y||1/0),(t=Math.min(_||33,e));},fps:function(y){(r=1e3/(y||240)),(o=h.time*1e3+r);},add:function(y,_,m){var w=_?function(v,x,M,S){y(v,x,M,S),h.remove(w);}:y;return h.remove(y),a[m?"unshift":"push"](w),To(),w;},remove:function(y,_){~(_=a.indexOf(y))&&a.splice(_,1)&&f>=_&&f--;},_listeners:a,}),h);})(),To=function(){return!Ca&&An.wake();},je={},Vx=/^[\d.\-M][\d.\-,\s]/,Wx=/["']/g,qx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)
(l=n[r]),(a=r!==o-1?l.lastIndexOf(","):l.length),(c=l.substr(0,a)),(t[i]=isNaN(c)?c.replace(Wx,"").trim():+c),(i=l.substr(a+1).trim());return t;},Xx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n);},$x=function(e){var t=(e+"").split("("),n=je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[qx(t[1])]:Xx(e).split(",").map(Fg)):je._CE&&Vx.test(e)?je._CE("",e):n;},Qg=function(e){return function(t){return 1-e(1-t);};},e0=function s(e,t){for(var n=e._first,i;n;)
n instanceof hn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):((i=n._ease),(n._ease=n._yEase),(n._yEase=i),(n._yoyo=t))),(n=n._next);},es=function(e,t){return(e&&(Mt(e)?e:je[e]||$x(e)))||t;},vs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l);}),i===void 0&&(i=function(l){return l<0.5?t(l*2)/2:1-t((1-l)*2)/2;});var r={easeIn:t,easeOut:n,easeInOut:i},o;return(xn(e,function(a){(je[a]=Rn[a]=r),(je[(o=a.toLowerCase())]=n);for(var l in r)
je[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=je[a+"."+l]=r[l];}),r);},t0=function(e){return function(t){return t<0.5?(1-e(1-t*2))/2:0.5+e((t-0.5)*2)/2;};},Ou=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?0.3:0.45))/(t<1?t:1),o=(r/Fh)*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*wx((u-o)*r)+1;},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c);}:t0(a);return((r=Fh/r),(l.config=function(c,u){return s(e,c,u);}),l);},ku=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0;},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r);}:t0(n);return((i.config=function(r){return s(e,r);}),i);};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;vs(s+",Power"+(t-1),e?function(n){return Math.pow(n,t);}:function(n){return n;},function(n){return 1-Math.pow(1-n,t);},function(n){return n<0.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2;});});je.Linear.easeNone=je.none=je.Linear.easeIn;vs("Elastic",Ou("in"),Ou("out"),Ou());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+0.75:a<i?s*(a-=2.25/e)*a+0.9375:s*Math.pow(a-2.625/e,2)+0.984375;};vs("Bounce",function(o){return 1-r(1-o);},r);})(7.5625,2.75);vs("Expo",function(s){return s?Math.pow(2,10*(s-1)):0;});vs("Circ",function(s){return-(Sg(1-s*s)-1);});vs("Sine",function(s){return s===1?1:-vx(s*yx)+1;});vs("Back",ku("in"),ku("out"),ku());je.SteppedEase=je.steps=Rn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-lt;return function(a){return(((i*tl(0,o,a))|0)+r)*n;};},};bo.ease=je["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return(Xd+=s+","+s+"Params,");});var n0=function(e,t){(this.id=xx++),(e._gsap=this),(this.target=e),(this.harness=t),(this.get=t?t.get:Ig),(this.set=t?t.getSetter:Zd);},La=(function(){function s(t){(this.vars=t),(this._delay=+t.delay||0),(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&((this._rDelay=t.repeatDelay||0),(this._yoyo=!!t.yoyo||!!t.yoyoEase)),(this._ts=1),So(this,+t.duration,1,1),(this.data=t.data),bt&&((this._ctx=bt),bt.data.push(this)),Ca||An.wake();}
var e=s.prototype;return((e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),(this._delay=n),this):this._delay;}),(e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur;}),(e.totalDuration=function(n){return arguments.length?((this._dirty=0),So(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur;}),(e.totalTime=function(n,i){if((To(),!arguments.length))return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ru(this,n),!r._dp||r.parent||Ng(r,this);r&&r.parent;)
r.parent._time!==r._start+
(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),(r=r.parent);!this.parent&&this._dp.autoRemoveChildren&&((this._ts>0&&n<this._tDur)||(this._ts<0&&n>0)||(!this._tDur&&!n))&&ri(this._dp,this,this._start-this._delay);}
return((this._tTime!==n||(!this._dur&&!i)||(this._initted&&Math.abs(this._zTime)===lt)||(!n&&!this._initted&&(this.add||this._ptLookup)))&&(this._ts||(this._pTime=n),Bg(this,n,i)),this);}),(e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+dp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time;}),(e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio;}),(e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+
dp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio;}),(e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Mo(this._tTime,r)+1:1;}),(e.timeScale=function(n,i){if(!arguments.length)return this._rts===-lt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Oc(this.parent._time,this):this._tTime;return((this._rts=+n||0),(this._ts=this._ps||n===-lt?0:this._rts),this.totalTime(tl(-Math.abs(this._delay),this._tDur,r),i!==!1),iu(this),Cx(this));}),(e.paused=function(n){return arguments.length?(this._ps!==n&&((this._ps=n),n?((this._pTime=this._tTime||Math.max(-this._delay,this.rawTime())),(this._ts=this._act=0)):(To(),(this._ts=this._rts),this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==lt&&(this._tTime-=lt)))),this):this._ps;}),(e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return(i&&(i._sort||!this.parent)&&ri(i,this,n-this._delay),this);}
return this._start;}),(e.endTime=function(n){return(this._start+
(yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1));}),(e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||(this._repeat&&this._time&&this.totalProgress()<1))?this._tTime%(this._dur+this._rDelay):this._ts?Oc(i.rawTime(n),this):this._tTime:this._tTime;}),(e.revert=function(n){n===void 0&&(n=Sx);var i=sn;return((sn=n),(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-0.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),(sn=i),this);}),(e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)
(r=i._start+r/(Math.abs(i._ts)||1)),(i=i._dp);return!this.parent&&this._sat?this._sat.globalTime(n):r;}),(e.repeat=function(n){return arguments.length?((this._repeat=n===1/0?-2:n),fp(this)):this._repeat===-2?1/0:this._repeat;}),(e.repeatDelay=function(n){if(arguments.length){var i=this._time;return(this._rDelay=n),fp(this),i?this.time(i):this;}
return this._rDelay;}),(e.yoyo=function(n){return arguments.length?((this._yoyo=n),this):this._yoyo;}),(e.seek=function(n,i){return this.totalTime(Fn(this,n),yn(i));}),(e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,yn(i));}),(e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1);}),(e.reverse=function(n,i){return(n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1));}),(e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0);}),(e.resume=function(){return this.paused(!1);}),(e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-lt:0)),this):this._rts<0;}),(e.invalidate=function(){return(this._initted=this._act=0),(this._zTime=-lt),this;}),(e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||(this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-lt));}),(e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?((o[n]=i),r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n];}),(e.then=function(n){var i=this;return new Promise(function(r){var o=Mt(n)?n:Og,a=function(){var c=i.then;(i.then=null),Mt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),(i.then=c);};(i._initted&&i.totalProgress()===1&&i._ts>=0)||(!i._tTime&&i._ts<0)?a():(i._prom=a);});}),(e.kill=function(){da(this);}),s);})();Gn(La.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-lt,_prom:0,_ps:!1,_rts:1,});var hn=(function(s){Mg(e,s);function e(n,i){var r;return(n===void 0&&(n={}),(r=s.call(this,n)||this),(r.labels={}),(r.smoothChildTiming=!!n.smoothChildTiming),(r.autoRemoveChildren=!!n.autoRemoveChildren),(r._sort=yn(n.sortChildren)),mt&&ri(n.parent||mt,Ei(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&zg(Ei(r),n.scrollTrigger),r);}
var t=e.prototype;return((t.to=function(i,r,o){return va(0,arguments,this),this;}),(t.from=function(i,r,o){return va(1,arguments,this),this;}),(t.fromTo=function(i,r,o,a){return va(2,arguments,this),this;}),(t.set=function(i,r,o){return((r.duration=0),(r.parent=this),xa(r).repeatDelay||(r.repeat=0),(r.immediateRender=!!r.immediateRender),new Ft(i,r,Fn(this,o),1),this);}),(t.call=function(i,r,o){return ri(this,Ft.delayedCall(0,i,r),o);}),(t.staggerTo=function(i,r,o,a,l,c,u){return((o.duration=r),(o.stagger=o.stagger||a),(o.onComplete=c),(o.onCompleteParams=u),(o.parent=this),new Ft(i,o,Fn(this,l)),this);}),(t.staggerFrom=function(i,r,o,a,l,c,u){return((o.runBackwards=1),(xa(o).immediateRender=yn(o.immediateRender)),this.staggerTo(i,r,o,a,l,c,u));}),(t.staggerFromTo=function(i,r,o,a,l,c,u,h){return((a.startAt=o),(xa(a).immediateRender=yn(a.immediateRender)),this.staggerTo(i,r,a,l,c,u,h));}),(t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Wt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,p,g,y,_,m,w,v,x,M,S;if((this!==mt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h)){if((a!==this._time&&c&&((u+=this._time-a),(i+=this._time-a)),(d=u),(v=this._start),(w=this._ts),(_=!w),h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat)){if(((M=this._yoyo),(y=c+this._rDelay),this._repeat<-1&&i<0))
return this.totalTime(y*100+i,r,o);if(((d=Wt(u%y)),u===l?((g=this._repeat),(d=c)):((g=~~(u/y)),g&&g===u/y&&((d=c),g--),d>c&&(d=c)),(x=Mo(this._tTime,y)),!a&&this._tTime&&x!==g&&this._tTime-x*y-this._dur<=0&&(x=g),M&&g&1&&((d=c-d),(S=1)),g!==x&&!this._lock)){var T=M&&x&1,D=T===(M&&g&1);if((g<x&&(T=!T),(a=T?0:u%c?c:u),(this._lock=1),(this.render(a||(S?0:Wt(g*y)),r,!c)._lock=0),(this._tTime=u),!r&&this.parent&&Cn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),(a&&a!==this._time)||_!==!this._ts||(this.vars.onRepeat&&!this.parent&&!this._act)))
return this;if(((c=this._dur),(l=this._tDur),D&&((this._lock=2),(a=T?c:-1e-4),this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),(this._lock=0),!this._ts&&!_))
return this;e0(this,S);}}
if((this._hasPause&&!this._forcing&&this._lock<2&&((m=Dx(this,Wt(a),Wt(d))),m&&(u-=d-(d=m._start))),(this._tTime=u),(this._time=d),(this._act=!w),this._initted||((this._onUpdate=this.vars.onUpdate),(this._initted=1),(this._zTime=i),(a=0)),!a&&d&&!r&&!g&&(Cn(this,"onStart"),this._tTime!==u)))
return this;if(d>=a&&i>=0)
for(f=this._first;f;){if(((p=f._next),(f._act||d>=f._start)&&f._ts&&m!==f)){if(f.parent!==this)return this.render(i,r,o);if((f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+
(d-f._start)*f._ts,r,o),d!==this._time||(!this._ts&&!_))){(m=0),p&&(u+=this._zTime=-lt);break;}}
f=p;}
else{f=this._last;for(var I=i<0?i:d;f;){if(((p=f._prev),(f._act||I<=f._end)&&f._ts&&m!==f)){if(f.parent!==this)return this.render(i,r,o);if((f.render(f._ts>0?(I-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+
(I-f._start)*f._ts,r,o||(sn&&(f._initted||f._startAt))),d!==this._time||(!this._ts&&!_))){(m=0),p&&(u+=this._zTime=I?-lt:lt);break;}}
f=p;}}
if(m&&!r&&(this.pause(),(m.render(d>=a?0:-lt)._zTime=d>=a?1:-1),this._ts))
return(this._start=v),iu(this),this.render(i,r,o);this._onUpdate&&!r&&Cn(this,"onUpdate",!0),((u===l&&this._tTime>=this.totalDuration())||(!u&&a))&&(v===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&((u===l&&this._ts>0)||(!u&&this._ts<0))&&cr(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(Cn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())));}
return this;}),(t.add=function(i,r){var o=this;if((Oi(r)||(r=Fn(this,r,i)),!(i instanceof La))){if(on(i))
return(i.forEach(function(a){return o.add(a,r);}),this);if($t(i))return this.addLabel(i,r);if(Mt(i))i=Ft.delayedCall(0,i);else return this;}
return this!==i?ri(this,i,r):this;}),(t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Un);for(var l=[],c=this._first;c;)
c._start>=a&&(c instanceof Ft?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),(c=c._next);return l;}),(t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)
if(r[o].vars.id===i)return r[o];}),(t.remove=function(i){return $t(i)?this.removeLabel(i):Mt(i)?this.killTweensOf(i):(nu(this,i),i===this._recent&&(this._recent=this._last),Qr(this));}),(t.totalTime=function(i,r){return arguments.length?((this._forcing=1),!this._dp&&this._ts&&(this._start=Wt(An.time-
(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),(this._forcing=0),this):this._tTime;}),(t.addLabel=function(i,r){return(this.labels[i]=Fn(this,r)),this;}),(t.removeLabel=function(i){return delete this.labels[i],this;}),(t.addPause=function(i,r,o){var a=Ft.delayedCall(0,r||Ea,o);return((a.data="isPause"),(this._hasPause=1),ri(this,a,Fn(this,i)));}),(t.removePause=function(i){var r=this._first;for(i=Fn(this,i);r;)
r._start===i&&r.data==="isPause"&&cr(r),(r=r._next);}),(t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)
er!==a[l]&&a[l].kill(i,r);return this;}),(t.getTweensOf=function(i,r){for(var o=[],a=Hn(i),l=this._first,c=Oi(r),u;l;)
l instanceof Ft?Tx(l._targets,a)&&(c?(!er||(l._initted&&l._ts))&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),(l=l._next);return o;}),(t.tweenTo=function(i,r){r=r||{};var o=this,a=Fn(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,p=Ft.to(o,Gn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||lt,onStart:function(){if((o.pause(),!f)){var y=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==y&&So(p,y,0,1).render(p._time,!0,!0),(f=1);}
u&&u.apply(p,h||[]);},},r));return d?p.render(0):p;}),(t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Gn({startAt:{time:Fn(this,i)}},o));}),(t.recent=function(){return this._recent;}),(t.nextLabel=function(i){return i===void 0&&(i=this._time),pp(this,Fn(this,i));}),(t.previousLabel=function(i){return i===void 0&&(i=this._time),pp(this,Fn(this,i),1);}),(t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+lt);}),(t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)
a._start>=o&&((a._start+=i),(a._end+=i)),(a=a._next);if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Qr(this);}),(t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),(r=r._next);return s.prototype.invalidate.call(this,i);}),(t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)(o=r._next),this.remove(r),(r=o);return(this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qr(this));}),(t.totalDuration=function(i){var r=0,o=this,a=o._last,l=Un,c,u,h;if(arguments.length)
return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)
(c=a._prev),a._dirty&&a.totalDuration(),(u=a._start),u>l&&o._sort&&a._ts&&!o._lock?((o._lock=1),(ri(o,a,u-a._delay,1)._lock=0)):(l=u),u<0&&a._ts&&((r-=u),((!h&&!o._dp)||(h&&h.smoothChildTiming))&&((o._start+=u/o._ts),(o._time-=u),(o._tTime-=u)),o.shiftChildren(-u,!1,-1/0),(l=0)),a._end>r&&a._ts&&(r=a._end),(a=c);So(o,o===mt&&o._time>r?o._time:r,1,1),(o._dirty=0);}
return o._tDur;}),(e.updateRoot=function(i){if((mt._ts&&(Bg(mt,Oc(i,mt)),(Dg=An.frame)),An.frame>=up)){up+=Ln.autoSleep||120;var r=mt._first;if((!r||!r._ts)&&Ln.autoSleep&&An._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||An.sleep();}}}),e);})(La);Gn(hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Yx=function(e,t,n,i,r,o,a){var l=new vn(this._pt,e,t,0,1,l0,null,r),c=0,u=0,h,d,f,p,g,y,_,m;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Aa(i)),o&&((m=[n,i]),o(m,e,t),(n=m[0]),(i=m[1])),d=n.match(Iu)||[];(h=Iu.exec(i));)
(p=h[0]),(g=i.substring(c,h.index)),f?(f=(f+1)%5):g.substr(-5)==="rgba("&&(f=1),p!==d[u++]&&((y=parseFloat(d[u-1])||0),(l._pt={_next:l._pt,p:g||u===1?g:",",s:y,c:p.charAt(1)==="="?ao(y,p)-y:parseFloat(p)-y,m:f&&f<4?Math.round:0,}),(c=Iu.lastIndex));return((l.c=c<i.length?i.substring(c,i.length):""),(l.fp=a),(Ag.test(i)||_)&&(l.e=0),(this._pt=l),l);},Yd=function(e,t,n,i,r,o,a,l,c,u){Mt(i)&&(i=i(r||0,e,o));var h=e[t],d=n!=="get"?n:Mt(h)?c?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Mt(h)?(c?Qx:o0):Jd,p;if(($t(i)&&(~i.indexOf("random(")&&(i=Aa(i)),i.charAt(1)==="="&&((p=ao(d,i)+(rn(d)||0)),(p||p===0)&&(i=p))),!u||d!==i||Wh))
return!isNaN(d*i)&&i!==""?((p=new vn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?tv:a0,0,f)),c&&(p.fp=c),a&&p.modifier(a,this,e),(this._pt=p)):(!h&&!(t in e)&&Wd(t,i),Yx.call(this,e,t,d,i,f,l||Ln.stringFilter,c));},jx=function(e,t,n,i,r){if((Mt(e)&&(e=wa(e,r,t,n,i)),!fi(e)||(e.style&&e.nodeType)||on(e)||Tg(e)))
return $t(e)?wa(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=wa(e[a],r,t,n,i);return o;},i0=function(e,t,n,i,r,o){var a,l,c,u;if(En[e]&&(a=new En[e]()).init(r,a.rawVars?t[e]:jx(t[e],i,r,o,n),n,i,o)!==!1&&((n._pt=l=new vn(n._pt,r,e,0,1,a.render,a,0,a.priority)),n!==eo))
for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)
c[a._props[u]]=l;return a;},er,Wh,jd=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,p=e._dur,g=e._startAt,y=e._targets,_=e.parent,m=_&&_.data==="nested"?_.vars.targets:y,w=e._overwrite==="auto"&&!Ud,v=e.timeline,x,M,S,T,D,I,b,R,F,O,H,A,z;if((v&&(!d||!r)&&(r="none"),(e._ease=es(r,bo.ease)),(e._yEase=h?Qg(es(h===!0?r:h,bo.ease)):0),h&&e._yoyo&&!e._repeat&&((h=e._yEase),(e._yEase=e._ease),(e._ease=h)),(e._from=!v&&!!i.runBackwards),!v||(d&&!i.stagger))){if(((R=y[0]?Kr(y[0]).harness:0),(A=R&&i[R.prop]),(x=Fc(i,qd)),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&p?uc:Mx),(g._lazy=0)),o)){if((cr((e._startAt=Ft.set(y,Gn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&yn(l),startAt:null,delay:0,onUpdate:c&&function(){return Cn(e,"onUpdate");},stagger:0,},o)))),(e._startAt._dp=0),(e._startAt._sat=e),t<0&&(sn||(!a&&!f))&&e._startAt.revert(uc),a&&p&&t<=0&&n<=0)){t&&(e._zTime=t);return;}}else if(u&&p&&!g){if((t&&(a=!1),(S=Gn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&yn(l),immediateRender:a,stagger:0,parent:_,},x)),A&&(S[R.prop]=A),cr((e._startAt=Ft.set(y,S))),(e._startAt._dp=0),(e._startAt._sat=e),t<0&&(sn?e._startAt.revert(uc):e._startAt.render(-1,!0)),(e._zTime=t),!a))
s(e._startAt,lt,lt);else if(!t)return;}
for(e._pt=e._ptCache=0,l=(p&&yn(l))||(l&&!p),M=0;M<y.length;M++){if(((D=y[M]),(b=D._gsap||$d(y)[M]._gsap),(e._ptLookup[M]=O={}),Nh[b.id]&&ir.length&&Bc(),(H=m===y?M:m.indexOf(D)),R&&(F=new R()).init(D,A||x,e,H,m)!==!1&&((e._pt=T=new vn(e._pt,D,F.name,0,1,F.render,F,0,F.priority)),F._props.forEach(function(U){O[U]=T;}),F.priority&&(I=1)),!R||A))
for(S in x)
En[S]&&(F=i0(S,x,e,H,D,m))?F.priority&&(I=1):(O[S]=T=Yd.call(e,D,S,"get",x[S],H,m,0,i.stringFilter));e._op&&e._op[M]&&e.kill(D,e._op[M]),w&&e._pt&&((er=e),mt.killTweensOf(D,O,e.globalTime(t)),(z=!e.parent),(er=0)),e._pt&&l&&(Nh[b.id]=1);}
I&&c0(e),e._onInit&&e._onInit(e);}
(e._onUpdate=c),(e._initted=(!e._op||e._pt)&&!z),d&&t<=0&&v.render(Un,!0,!0);},Jx=function(e,t,n,i,r,o,a,l){var c=((e._pt&&e._ptCache)||(e._ptCache={}))[t],u,h,d,f;if(!c)
for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(((u=d[f][t]),u&&u.d&&u.d._pt))
for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)
return((Wh=1),(e.vars[t]="+=0"),jd(e,a),(Wh=0),l?Ta(t+" not eligible for reset"):1);c.push(u);}
for(f=c.length;f--;)
(h=c[f]),(u=h._pt||h),(u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c),(u.c=n-u.s),h.e&&(h.e=Pt(n)+rn(h.e)),h.b&&(h.b=u.s+rn(h.b));},Zx=function(e,t){var n=e[0]?Kr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=ls({},t);for(o in i)
if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r;},Kx=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(on(t))
(a=n[e]||(n[e]=[])),t.forEach(function(l,c){return a.push({t:(c/(t.length-1))*100,v:l,e:r});});else
for(o in t)
(a=n[o]||(n[o]=[])),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r});},wa=function(e,t,n,i,r){return Mt(e)?e.call(t,n,i,r):$t(e)&&~e.indexOf("random(")?Aa(e):e;},r0=Xd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",s0={};xn(r0+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return(s0[s]=1);});var Ft=(function(s){Mg(e,s);function e(n,i,r,o){var a;typeof i=="number"&&((r.duration=i),(i=r),(r=null)),(a=s.call(this,o?i:xa(i))||this);var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,p=l.keyframes,g=l.defaults,y=l.scrollTrigger,_=l.yoyoEase,m=i.parent||mt,w=(on(n)||Tg(n)?Oi(n[0]):"length"in i)?[n]:Hn(n),v,x,M,S,T,D,I,b;if(((a._targets=w.length?$d(w):Ta("GSAP target "+n+" not found. https://gsap.com",!Ln.nullTargetWarn)||[]),(a._ptLookup=[]),(a._overwrite=f),p||d||pl(c)||pl(u))){if(((i=a.vars),(v=a.timeline=new hn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:w,})),v.kill(),(v.parent=v._dp=Ei(a)),(v._start=0),d||pl(c)||pl(u))){if(((S=w.length),(I=d&&Vg(d)),fi(d)))
for(T in d)~r0.indexOf(T)&&(b||(b={}),(b[T]=d[T]));for(x=0;x<S;x++)
(M=Fc(i,s0)),(M.stagger=0),_&&(M.yoyoEase=_),b&&ls(M,b),(D=w[x]),(M.duration=+wa(c,Ei(a),x,D,w)),(M.delay=(+wa(u,Ei(a),x,D,w)||0)-a._delay),!d&&S===1&&M.delay&&((a._delay=u=M.delay),(a._start+=u),(M.delay=0)),v.to(D,M,I?I(x,D,w):0),(v._ease=je.none);v.duration()?(c=u=0):(a.timeline=0);}else if(p){xa(Gn(v.vars.defaults,{ease:"none"})),(v._ease=es(p.ease||i.ease||"none"));var R=0,F,O,H;if(on(p))
p.forEach(function(A){return v.to(w,A,">");}),v.duration();else{M={};for(T in p)
T==="ease"||T==="easeEach"||Kx(T,p[T],M,p.easeEach);for(T in M)
for(F=M[T].sort(function(A,z){return A.t-z.t;}),R=0,x=0;x<F.length;x++)
(O=F[x]),(H={ease:O.e,duration:((O.t-(x?F[x-1].t:0))/100)*c,}),(H[T]=O.v),v.to(w,H,R),(R+=H.duration);v.duration()<c&&v.to({},{duration:c-v.duration()});}}
c||a.duration((c=v.duration()));}else a.timeline=0;return(f===!0&&!Ud&&((er=Ei(a)),mt.killTweensOf(w),(er=0)),ri(m,Ei(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||(!c&&!p&&a._start===Wt(m._time)&&yn(h)&&Lx(Ei(a))&&m.data!=="nested"))&&((a._tTime=-lt),a.render(Math.max(0,-u)||0)),y&&zg(Ei(a),y),a);}
var t=e.prototype;return((t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-lt&&!u?l:i<lt?0:i,d,f,p,g,y,_,m,w,v;if(!c)Rx(this,i,r,o);else if(h!==this._tTime||!i||o||(!this._initted&&this._tTime)||(this._startAt&&this._zTime<0!==u)){if(((d=h),(w=this.timeline),this._repeat)){if(((g=c+this._rDelay),this._repeat<-1&&u))
return this.totalTime(g*100+i,r,o);if(((d=Wt(h%g)),h===l?((p=this._repeat),(d=c)):((p=~~(h/g)),p&&p===Wt(h/g)&&((d=c),p--),d>c&&(d=c)),(_=this._yoyo&&p&1),_&&((v=this._yEase),(d=c-d)),(y=Mo(this._tTime,g)),d===a&&!o&&this._initted&&p===y))
return(this._tTime=h),this;p!==y&&(w&&this._yEase&&e0(w,_),this.vars.repeatRefresh&&!_&&!this._lock&&this._time!==c&&this._initted&&((this._lock=o=1),(this.render(Wt(g*p),!0).invalidate()._lock=0)));}
if(!this._initted){if(Ug(this,u?i:d,o,r,h))return(this._tTime=0),this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==y))
return this;if(c!==this._dur)return this.render(i,r,o);}
if(((this._tTime=h),(this._time=d),!this._act&&this._ts&&((this._act=1),(this._lazy=0)),(this.ratio=m=(v||this._ease)(d/c)),this._from&&(this.ratio=m=1-m),d&&!a&&!r&&!p&&(Cn(this,"onStart"),this._tTime!==h)))
return this;for(f=this._pt;f;)f.r(m,f.d),(f=f._next);(w&&w.render(i<0?i:!d&&_?-lt:w._dur*w._ease(d/this._dur),r,o))||(this._startAt&&(this._zTime=i)),this._onUpdate&&!r&&(u&&zh(this,i,r,o),Cn(this,"onUpdate")),this._repeat&&p!==y&&this.vars.onRepeat&&!r&&this.parent&&Cn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&zh(this,i,!0,!0),(i||!c)&&((h===this._tDur&&this._ts>0)||(!h&&this._ts<0))&&cr(this,1),!r&&!(u&&!a)&&(h||a||_)&&(Cn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()));}
return this;}),(t.targets=function(){return this._targets;}),(t.invalidate=function(i){return((!i||!this.vars.runBackwards)&&(this._startAt=0),(this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0),(this._ptLookup=[]),this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i));}),(t.resetTo=function(i,r,o,a,l){Ca||An.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return(this._initted||jd(this,c),(u=this._ease(c/this._dur)),Jx(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(ru(this,0),this.parent||kg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0)));}),(t.kill=function(i,r){if((r===void 0&&(r="all"),!i&&(!r||r==="all")))
return(this._lazy=this._pt=0),this.parent?da(this):this;if(this.timeline){var o=this.timeline.totalDuration();return(this.timeline.killTweensOf(i,r,er&&er.vars.overwrite!==!0)._first||da(this),this.parent&&o!==this.timeline.totalDuration()&&So(this,(this._dur*this.timeline._tDur)/o,0,1),this);}
var a=this._targets,l=i?Hn(i):a,c=this._ptLookup,u=this._pt,h,d,f,p,g,y,_;if((!r||r==="all")&&Ax(a,l))
return r==="all"&&(this._pt=0),da(this);for(h=this._op=this._op||[],r!=="all"&&($t(r)&&((g={}),xn(r,function(m){return(g[m]=1);}),(r=g)),(r=Zx(a,r))),_=a.length;_--;)
if(~l.indexOf(a[_])){(d=c[_]),r==="all"?((h[_]=r),(p=d),(f={})):((f=h[_]=h[_]||{}),(p=r));for(g in p)
(y=d&&d[g]),y&&((!("kill"in y.d)||y.d.kill(g)===!0)&&nu(this,y,"_pt"),delete d[g]),f!=="all"&&(f[g]=1);}
return this._initted&&!this._pt&&u&&da(this),this;}),(e.to=function(i,r){return new e(i,r,arguments[2]);}),(e.from=function(i,r){return va(1,arguments);}),(e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a,});}),(e.fromTo=function(i,r,o){return va(2,arguments);}),(e.set=function(i,r){return(r.duration=0),r.repeatDelay||(r.repeat=0),new e(i,r);}),(e.killTweensOf=function(i,r,o){return mt.killTweensOf(i,r,o);}),e);})(La);Gn(Ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(s){Ft[s]=function(){var e=new hn(),t=Hh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t);};});var Jd=function(e,t,n){return(e[t]=n);},o0=function(e,t,n){return e[t](n);},Qx=function(e,t,n,i){return e[t](i.fp,n);},ev=function(e,t,n){return e.setAttribute(t,n);},Zd=function(e,t){return Mt(e[t])?o0:Hd(e[t])&&e.setAttribute?ev:Jd;},a0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t);},tv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t);},l0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)
(i=n.p+
(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+
i),(n=n._next);i+=t.c;}
t.set(t.t,t.p,i,t);},Kd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),(n=n._next);},nv=function(e,t,n,i){for(var r=this._pt,o;r;)
(o=r._next),r.p===i&&r.modifier(e,t,n),(r=o);},iv=function(e){for(var t=this._pt,n,i;t;)
(i=t._next),(t.p===e&&!t.op)||t.op===e?nu(this,t,"_pt"):t.dep||(n=1),(t=i);return!n;},rv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i);},c0=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?(t._prev._next=t):(r=t),(t._next=i)?(i._prev=t):(o=t),(t=n);}
e._pt=r;},vn=(function(){function s(t,n,i,r,o,a,l,c,u){(this.t=n),(this.s=r),(this.c=o),(this.p=i),(this.r=a||a0),(this.d=l||this),(this.set=c||Jd),(this.pr=u||0),(this._next=t),t&&(t._prev=this);}
var e=s.prototype;return((e.modifier=function(n,i,r){(this.mSet=this.mSet||this.set),(this.set=rv),(this.m=n),(this.mt=r),(this.tween=i);}),s);})();xn(Xd+
"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return(qd[s]=1);});Rn.TweenMax=Rn.TweenLite=Ft;Rn.TimelineLite=Rn.TimelineMax=hn;mt=new hn({sortChildren:!1,defaults:bo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0,});Ln.stringFilter=Kg;var ts=[],dc={},sv=[],gp=0,ov=0,Nu=function(e){return(dc[e]||sv).map(function(t){return t();});},qh=function(){var e=Date.now(),t=[];e-gp>2&&(Nu("matchMediaInit"),ts.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)
(o=On.matchMedia(i[a]).matches),o&&(l=1),o!==r[a]&&((r[a]=o),(c=1));c&&(n.revert(),l&&t.push(n));}),Nu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i);});}),(gp=e),Nu("matchMedia"));},u0=(function(){function s(t,n){(this.selector=n&&Gh(n)),(this.data=[]),(this._r=[]),(this.isReverted=!1),(this.id=ov++),t&&this.add(t);}
var e=s.prototype;return((e.add=function(n,i,r){Mt(n)&&((r=i),(i=n),(n=Mt));var o=this,a=function(){var c=bt,u=o.selector,h;return(c&&c!==o&&c.data.push(o),r&&(o.selector=Gh(r)),(bt=o),(h=i.apply(o,arguments)),Mt(h)&&o._r.push(h),(bt=c),(o.selector=u),(o.isReverted=!1),h);};return((o.last=a),n===Mt?a(o,function(l){return o.add(null,l);}):n?(o[n]=a):a);}),(e.ignore=function(n){var i=bt;(bt=null),n(this),(bt=i);}),(e.getTweens=function(){var n=[];return(this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ft&&!(i.parent&&i.parent.data==="nested")&&n.push(i);}),n);}),(e.clear=function(){this._r.length=this.data.length=0;}),(e.kill=function(n,i){var r=this;if((n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)
(c=r.data[l]),c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1);}));for(a.map(function(u){return{g:u._dur||u._delay||(u._sat&&!u._sat.vars.immediateRender)?u.globalTime(0):-1/0,t:u,};}).sort(function(u,h){return h.g-u.g||-1/0;}).forEach(function(u){return u.t.revert(n);}),l=r.data.length;l--;)
(c=r.data[l]),c instanceof hn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ft)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r);}),(r.isReverted=!0);})():this.data.forEach(function(a){return a.kill&&a.kill();}),this.clear(),i))
for(var o=ts.length;o--;)
ts[o].id===this.id&&ts.splice(o,1);}),(e.revert=function(n){this.kill(n||{});}),s);})(),av=(function(){function s(t){(this.contexts=[]),(this.scope=t);}
var e=s.prototype;return((e.add=function(n,i,r){fi(n)||(n={matches:n});var o=new u0(0,r||this.scope),a=(o.conditions={}),l,c,u;bt&&!o.selector&&(o.selector=bt.selector),this.contexts.push(o),(i=o.add("onMatch",i)),(o.queries=n);for(c in n)
c==="all"?(u=1):((l=On.matchMedia(n[c])),l&&(ts.indexOf(o)<0&&ts.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(qh):l.addEventListener("change",qh)));return(u&&i(o,function(h){return o.add(null,h);}),this);}),(e.revert=function(n){this.kill(n||{});}),(e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0);});}),s);})(),kc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)
t[n]=arguments[n];t.forEach(function(i){return jg(i);});},timeline:function(e){return new hn(e);},getTweensOf:function(e,t){return mt.getTweensOf(e,t);},getProperty:function(e,t,n,i){$t(e)&&(e=Hn(e)[0]);var r=Kr(e||{}).get,o=n?Og:Fg;return(n==="native"&&(n=""),e&&(t?o(((En[t]&&En[t].get)||r)(e,t,n,i)):function(a,l,c){return o(((En[a]&&En[a].get)||r)(e,a,l,c));}));},quickSetter:function(e,t,n){if(((e=Hn(e)),e.length>1)){var i=e.map(function(u){return bn.quickSetter(u,t,n);}),r=i.length;return function(u){for(var h=r;h--;)i[h](u);};}
e=e[0]||{};var o=En[t],a=Kr(e),l=(a.harness&&(a.harness.aliases||{})[t])||t,c=o?function(u){var h=new o();(eo._pt=0),h.init(e,n?u+n:u,eo,0,[e]),h.render(1,h),eo._pt&&Kd(1,eo);}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1);};},quickTo:function(e,t,n){var i,r=bn.to(e,ls(((i={}),(i[t]="+=0.1"),(i.paused=!0),i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u);};return(o.tween=r),o;},isTweening:function(e){return mt.getTweensOf(e,!0).length>0;},defaults:function(e){return e&&e.ease&&(e.ease=es(e.ease,bo.ease)),hp(bo,e||{});},config:function(e){return hp(Ln,e||{});},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return(a&&!En[a]&&!Rn[a]&&Ta(t+" effect requires "+a+" plugin."));}),(Bu[t]=function(a,l,c){return n(Hn(a),Gn(l||{},r),c);}),o&&(hn.prototype[t]=function(a,l,c){return this.add(Bu[t](a,fi(l)?l:(c=l)&&{},this),c);});},registerEase:function(e,t){je[e]=es(t);},parseEase:function(e,t){return arguments.length?es(e,t):je;},getById:function(e){return mt.getById(e);},exportRoot:function(e,t){e===void 0&&(e={});var n=new hn(e),i,r;for(n.smoothChildTiming=yn(e.smoothChildTiming),mt.remove(n),n._dp=0,n._time=n._tTime=mt._time,i=mt._first;i;)
(r=i._next),(t||!(!i._dur&&i instanceof Ft&&i.vars.onComplete===i._targets[0]))&&ri(n,i,i._start-i._delay),(i=r);return ri(mt,n,0),n;},context:function(e,t){return e?new u0(e,t):bt;},matchMedia:function(e){return new av(e);},matchMediaRefresh:function(){return(ts.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&((t[i]=!1),(n=1));n&&e.revert();})||qh());},addEventListener:function(e,t){var n=dc[e]||(dc[e]=[]);~n.indexOf(t)||n.push(t);},removeEventListener:function(e,t){var n=dc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1);},utils:{wrap:zx,wrapYoyo:Ux,distribute:Vg,random:qg,snap:Wg,normalize:Nx,getUnit:rn,clamp:Bx,splitColor:Jg,toArray:Hn,selector:Gh,mapRange:$g,pipe:Ox,unitize:kx,interpolate:Hx,shuffle:Gg,},install:Pg,effects:Bu,ticker:An,updateRoot:hn.updateRoot,plugins:En,globalTimeline:mt,core:{PropTween:vn,globals:Rg,Tween:Ft,Timeline:hn,Animation:La,getCache:Kr,_removeLinkedListItem:nu,reverting:function(){return sn;},context:function(e){return e&&bt&&(bt.data.push(e),(e._ctx=bt)),bt;},suppressOverwrites:function(e){return(Ud=e);},},};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return(kc[s]=Ft[s]);});An.add(hn.updateRoot);eo=kc.to({},{duration:0});var lv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)
n=n._next;return n;},cv=function(e,t){var n=e._targets,i,r,o;for(i in t)
for(r=n.length;r--;)
(o=e._ptLookup[r][i]),o&&(o=o.d)&&(o._pt&&(o=lv(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i));},zu=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(($t(r)&&((l={}),xn(r,function(u){return(l[u]=1);}),(r=l)),t)){l={};for(c in r)l[c]=t(r[c]);r=l;}
cv(a,r);};},};},bn=kc.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)
(l=e.getAttribute(o)||""),(a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o)),(a.op=o),(a.b=l),this._props.push(o);},render:function(e,t){for(var n=t._pt;n;)
sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),(n=n._next);},},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)
this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1);},},zu("roundProps",Vh),zu("modifiers"),zu("snap",Wg))||kc;Ft.version=hn.version=bn.version="3.12.3";Lg=1;Gd()&&To();je.Power0;je.Power1;je.Power2;je.Power3;je.Power4;je.Linear;je.Quad;je.Cubic;je.Quart;je.Quint;je.Strong;je.Elastic;je.Back;je.SteppedEase;je.Bounce;je.Sine;je.Expo;je.Circ;/*!
* CSSPlugin 3.12.3
* https://gsap.com
*
* Copyright 2008-2023, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/var _p,tr,lo,Qd,Vr,yp,ef,uv=function(){return typeof window!="undefined";},ki={},Fr=180/Math.PI,co=Math.PI/180,Rs=Math.atan2,xp=1e8,tf=/([A-Z])/g,hv=/(left|right|width|margin|padding|x)/i,dv=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity",},Xh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t);},fv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t);},pv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t);},mv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-0.5:0.5))+t.u,t);},h0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t);},d0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t);},gv=function(e,t,n){return(e.style[t]=n);},_v=function(e,t,n){return e.style.setProperty(t,n);},yv=function(e,t,n){return(e._gsap[t]=n);},xv=function(e,t,n){return(e._gsap.scaleX=e._gsap.scaleY=n);},vv=function(e,t,n,i,r){var o=e._gsap;(o.scaleX=o.scaleY=n),o.renderTransform(r,o);},wv=function(e,t,n,i,r){var o=e._gsap;(o[t]=n),o.renderTransform(r,o);},gt="transform",wn=gt+"Origin",bv=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in ki&&r){if(((this.tfm=this.tfm||{}),e!=="transform"))
(e=si[e]||e),~e.indexOf(",")?e.split(",").forEach(function(a){return(n.tfm[a]=Ai(i,a));}):(this.tfm[e]=o.x?o[e]:Ai(i,e)),e===wn&&(this.tfm.zOrigin=o.zOrigin);else
return si.transform.split(",").forEach(function(a){return s.call(n,a,t);});if(this.props.indexOf(gt)>=0)return;o.svg&&((this.svgo=i.getAttribute("data-svg-origin")),this.props.push(wn,t,"")),(e=gt);}
(r||t)&&this.props.push(e,t,r[e]);},f0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"));},Mv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)
e[r+1]?(t[e[r]]=e[r+2]):e[r+2]?(n[e[r]]=e[r+2]):n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(tf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),(r=ef()),(!r||!r.isStart)&&!n[gt]&&(f0(n),i.zOrigin&&n[wn]&&((n[wn]+=" "+i.zOrigin+"px"),(i.zOrigin=0),i.renderTransform()),(i.uncache=1));}},p0=function(e,t){var n={target:e,props:[],revert:Mv,save:bv};return(e._gsap||bn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i);}),n);},m0,$h=function(e,t){var n=tr.createElementNS?tr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):tr.createElement(e);return n&&n.style?n:tr.createElement(e);},ai=function s(e,t,n){var i=getComputedStyle(e);return(i[t]||i.getPropertyValue(t.replace(tf,"-$1").toLowerCase())||i.getPropertyValue(t)||(!n&&s(e,Eo(t)||t,1))||"");},vp="O,Moz,ms,Ms,Webkit".split(","),Eo=function(e,t,n){var i=t||Vr,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(vp[o]+e in r););return o<0?null:(o===3?"ms":o>=0?vp[o]:"")+e;},Yh=function(){uv()&&window.document&&((_p=window),(tr=_p.document),(lo=tr.documentElement),(Vr=$h("div")||{style:{}}),$h("div"),(gt=Eo(gt)),(wn=gt+"Origin"),(Vr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0"),(m0=!!Eo("perspective")),(ef=bn.core.reverting),(Qd=1));},Uu=function s(e){var t=$h("svg",(this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns"))||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if((lo.appendChild(t),t.appendChild(this),(this.style.display="block"),e))
try{(o=this.getBBox()),(this._gsapBBox=this.getBBox),(this.getBBox=s);}catch{}
else this._gsapBBox&&(o=this._gsapBBox());return(n&&(i?n.insertBefore(this,i):n.appendChild(this)),lo.removeChild(t),(this.style.cssText=r),o);},wp=function(e,t){for(var n=t.length;n--;)
if(e.hasAttribute(t[n]))return e.getAttribute(t[n]);},g0=function(e){var t;try{t=e.getBBox();}catch{t=Uu.call(e,!0);}
return((t&&(t.width||t.height))||e.getBBox===Uu||(t=Uu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+wp(e,["x","cx","x1"])||0,y:+wp(e,["y","cy","y1"])||0,width:0,height:0,}:t);},_0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&g0(e));},cs=function(e,t){if(t){var n=e.style,i;t in ki&&t!==wn&&(t=gt),n.removeProperty?((i=t.substr(0,2)),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(tf,"-$1").toLowerCase())):n.removeAttribute(t);}},nr=function(e,t,n,i,r,o){var a=new vn(e._pt,t,n,0,1,o?d0:h0);return(e._pt=a),(a.b=i),(a.e=r),e._props.push(n),a;},bp={deg:1,rad:1,turn:1},Sv={grid:1,flex:1},ur=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Vr.style,l=hv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",p,g,y,_;if(i===o||!r||bp[i]||bp[o])return r;if((o!=="px"&&!d&&(r=s(e,t,n,"px")),(_=e.getCTM&&_0(e)),(f||o==="%")&&(ki[t]||~t.indexOf("adius"))))
return((p=_?e.getBBox()[l?"width":"height"]:e[u]),Pt(f?(r/p)*h:(r/100)*p));if(((a[l?"width":"height"]=h+(d?o:i)),(g=~t.indexOf("adius")||(i==="em"&&e.appendChild&&!c)?e:e.parentNode),_&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===tr||!g.appendChild)&&(g=tr.body),(y=g._gsap),y&&f&&y.width&&l&&y.time===An.time&&!y.uncache))
return Pt((r/y.width)*h);if(f&&(t==="height"||t==="width")){var m=e.style[t];(e.style[t]=h+i),(p=e[u]),m?(e.style[t]=m):cs(e,t);}else
(f||o==="%")&&!Sv[ai(g,"display")]&&(a.position=ai(e,"position")),g===e&&(a.position="static"),g.appendChild(Vr),(p=Vr[u]),g.removeChild(Vr),(a.position="absolute");return(l&&f&&((y=Kr(g)),(y.time=An.time),(y.width=g[u])),Pt(d?(p*r)/h:p&&r?(h/p)*r:0));},Ai=function(e,t,n,i){var r;return(Qd||Yh(),t in si&&t!=="transform"&&((t=si[t]),~t.indexOf(",")&&(t=t.split(",")[0])),ki[t]&&t!=="transform"?((r=Ra(e,i)),(r=t!=="transformOrigin"?r[t]:r.svg?r.origin:zc(ai(e,wn))+" "+r.zOrigin+"px")):((r=e.style[t]),(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=(Nc[t]&&Nc[t](e,t,n))||ai(e,t)||Ig(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ur(e,t,r,n)+n:r);},Tv=function(e,t,n,i){if(!n||n==="none"){var r=Eo(t,e,1),o=r&&ai(e,r,1);o&&o!==n?((t=r),(n=o)):t==="borderColor"&&(n=ai(e,"borderTopColor"));}
var a=new vn(this._pt,e.style,t,0,1,l0),l=0,c=0,u,h,d,f,p,g,y,_,m,w,v,x;if(((a.b=n),(a.e=i),(n+=""),(i+=""),i==="auto"&&((g=e.style[t]),(e.style[t]=i),(i=ai(e,t)||i),g?(e.style[t]=g):cs(e,t)),(u=[n,i]),Kg(u),(n=u[0]),(i=u[1]),(d=n.match(Qs)||[]),(x=i.match(Qs)||[]),x.length)){for(;(h=Qs.exec(i));)
(y=h[0]),(m=i.substring(l,h.index)),p?(p=(p+1)%5):(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(p=1),y!==(g=d[c++]||"")&&((f=parseFloat(g)||0),(v=g.substr((f+"").length)),y.charAt(1)==="="&&(y=ao(f,y)+v),(_=parseFloat(y)),(w=y.substr((_+"").length)),(l=Qs.lastIndex-w.length),w||((w=w||Ln.units[t]||v),l===i.length&&((i+=w),(a.e+=w))),v!==w&&(f=ur(e,t,g,w)||0),(a._pt={_next:a._pt,p:m||c===1?m:",",s:f,c:_-f,m:(p&&p<4)||t==="zIndex"?Math.round:0,}));a.c=l<i.length?i.substring(l,i.length):"";}else a.r=t==="display"&&i==="none"?d0:h0;return Ag.test(i)&&(a.e=0),(this._pt=a),a;},Mp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ev=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return((n==="top"||n==="bottom"||i==="left"||i==="right")&&((e=n),(n=i),(i=e)),(t[0]=Mp[n]||n),(t[1]=Mp[i]||i),t.join(" "));},Av=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)(i.cssText=""),(l=1);else
for(r=r.split(","),c=r.length;--c>-1;)
(a=r[c]),ki[a]&&((l=1),(a=a==="transformOrigin"?wn:gt)),cs(n,a);l&&(cs(n,gt),o&&(o.svg&&n.removeAttribute("transform"),Ra(n,1),(o.uncache=1),f0(i)));}},Nc={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=(e._pt=new vn(e._pt,t,n,0,0,Av));return(o.u=i),(o.pr=-10),(o.tween=r),e._props.push(n),1;}},},Pa=[1,0,0,1,0,0],y0={},x0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e;},Sp=function(e){var t=ai(e,gt);return x0(t)?Pa:t.substr(7).match(Eg).map(Pt);},nf=function(e,t){var n=e._gsap||Kr(e),i=e.style,r=Sp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?((l=e.transform.baseVal.consolidate().matrix),(r=[l.a,l.b,l.c,l.d,l.e,l.f]),r.join(",")==="1,0,0,1,0,0"?Pa:r):(r===Pa&&!e.offsetParent&&e!==lo&&!n.svg&&((l=i.display),(i.display="block"),(o=e.parentNode),(!o||!e.offsetParent)&&((c=1),(a=e.nextElementSibling),lo.appendChild(e)),(r=Sp(e)),l?(i.display=l):cs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):lo.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r);},jh=function(e,t,n,i,r,o){var a=e._gsap,l=r||nf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],p=l[1],g=l[2],y=l[3],_=l[4],m=l[5],w=t.split(" "),v=parseFloat(w[0])||0,x=parseFloat(w[1])||0,M,S,T,D;n?l!==Pa&&(S=f*y-p*g)&&((T=v*(y/S)+x*(-g/S)+(g*m-y*_)/S),(D=v*(-p/S)+x*(f/S)-(f*m-p*_)/S),(v=T),(x=D)):((M=g0(e)),(v=M.x+(~w[0].indexOf("%")?(v/100)*M.width:v)),(x=M.y+(~(w[1]||w[0]).indexOf("%")?(x/100)*M.height:x)),!("xOrigin"in a)&&(v||x)&&((v-=M.x),(x-=M.y))),i||(i!==!1&&a.smooth)?((_=v-c),(m=x-u),(a.xOffset=h+(_*f+m*g)-_),(a.yOffset=d+(_*p+m*y)-m)):(a.xOffset=a.yOffset=0),(a.xOrigin=v),(a.yOrigin=x),(a.smooth=!!i),(a.origin=t),(a.originIsAbsolute=!!n),(e.style[wn]="0px 0px"),o&&(nr(o,a,"xOrigin",c,v),nr(o,a,"yOrigin",u,x),nr(o,a,"xOffset",h,a.xOffset),nr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+x);},Ra=function(e,t){var n=e._gsap||new n0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ai(e,wn)||"0",u,h,d,f,p,g,y,_,m,w,v,x,M,S,T,D,I,b,R,F,O,H,A,z,U,B,j,X,K,ue,Ee,Z;return((u=h=d=g=y=_=m=w=v=0),(f=p=1),(n.svg=!!(e.getCTM&&_0(e))),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[gt]=(l.translate!=="none"?"translate3d("+
(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+
") ":"")+
(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+
(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+
(l[gt]!=="none"?l[gt]:"")),(i.scale=i.rotate=i.translate="none")),(S=nf(e,n.svg)),n.svg&&(n.uncache?((U=e.getBBox()),(c=n.xOrigin-U.x+"px "+(n.yOrigin-U.y)+"px"),(z="")):(z=!t&&e.getAttribute("data-svg-origin")),jh(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,S)),(x=n.xOrigin||0),(M=n.yOrigin||0),S!==Pa&&((b=S[0]),(R=S[1]),(F=S[2]),(O=S[3]),(u=H=S[4]),(h=A=S[5]),S.length===6?((f=Math.sqrt(b*b+R*R)),(p=Math.sqrt(O*O+F*F)),(g=b||R?Rs(R,b)*Fr:0),(m=F||O?Rs(F,O)*Fr+g:0),m&&(p*=Math.abs(Math.cos(m*co))),n.svg&&((u-=x-(x*b+M*F)),(h-=M-(x*R+M*O)))):((Z=S[6]),(ue=S[7]),(j=S[8]),(X=S[9]),(K=S[10]),(Ee=S[11]),(u=S[12]),(h=S[13]),(d=S[14]),(T=Rs(Z,K)),(y=T*Fr),T&&((D=Math.cos(-T)),(I=Math.sin(-T)),(z=H*D+j*I),(U=A*D+X*I),(B=Z*D+K*I),(j=H*-I+j*D),(X=A*-I+X*D),(K=Z*-I+K*D),(Ee=ue*-I+Ee*D),(H=z),(A=U),(Z=B)),(T=Rs(-F,K)),(_=T*Fr),T&&((D=Math.cos(-T)),(I=Math.sin(-T)),(z=b*D-j*I),(U=R*D-X*I),(B=F*D-K*I),(Ee=O*I+Ee*D),(b=z),(R=U),(F=B)),(T=Rs(R,b)),(g=T*Fr),T&&((D=Math.cos(T)),(I=Math.sin(T)),(z=b*D+R*I),(U=H*D+A*I),(R=R*D-b*I),(A=A*D-H*I),(b=z),(H=U)),y&&Math.abs(y)+Math.abs(g)>359.9&&((y=g=0),(_=180-_)),(f=Pt(Math.sqrt(b*b+R*R+F*F))),(p=Pt(Math.sqrt(A*A+Z*Z))),(T=Rs(H,A)),(m=Math.abs(T)>2e-4?T*Fr:0),(v=Ee?1/(Ee<0?-Ee:Ee):0)),n.svg&&((z=e.getAttribute("transform")),(n.forceCSS=e.setAttribute("transform","")||!x0(ai(e,gt))),z&&e.setAttribute("transform",z))),Math.abs(m)>90&&Math.abs(m)<270&&(r?((f*=-1),(m+=g<=0?180:-180),(g+=g<=0?180:-180)):((p*=-1),(m+=m<=0?180:-180))),(t=t||n.uncache),(n.x=u-
((n.xPercent=u&&((!t&&n.xPercent)||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?(e.offsetWidth*n.xPercent)/100:0)+
o),(n.y=h-
((n.yPercent=h&&((!t&&n.yPercent)||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?(e.offsetHeight*n.yPercent)/100:0)+
o),(n.z=d+o),(n.scaleX=Pt(f)),(n.scaleY=Pt(p)),(n.rotation=Pt(g)+a),(n.rotationX=Pt(y)+a),(n.rotationY=Pt(_)+a),(n.skewX=m+a),(n.skewY=w+a),(n.transformPerspective=v+o),(n.zOrigin=parseFloat(c.split(" ")[2])||(!t&&n.zOrigin)||0)&&(i[wn]=zc(c)),n.svg||(n.xOffset=n.yOffset=0),(n.force3D=Ln.force3D),(n.renderTransform=n.svg?Lv:m0?v0:Cv),(n.uncache=0),n);},zc=function(e){return(e=e.split(" "))[0]+" "+e[1];},Hu=function(e,t,n){var i=rn(t);return Pt(parseFloat(t)+parseFloat(ur(e,"x",n+"px",i)))+i;},Cv=function(e,t){(t.z="0px"),(t.rotationY=t.rotationX="0deg"),(t.force3D=0),v0(e,t);},Tr="0deg",ia="0px",Er=") ",v0=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,g=n.scaleY,y=n.transformPerspective,_=n.force3D,m=n.target,w=n.zOrigin,v="",x=(_==="auto"&&e&&e!==1)||_===!0;if(w&&(h!==Tr||u!==Tr)){var M=parseFloat(u)*co,S=Math.sin(M),T=Math.cos(M),D;(M=parseFloat(h)*co),(D=Math.cos(M)),(o=Hu(m,o,S*D*-w)),(a=Hu(m,a,-Math.sin(M)*-w)),(l=Hu(m,l,T*D*-w+w));}
y!==ia&&(v+="perspective("+y+Er),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(x||o!==ia||a!==ia||l!==ia)&&(v+=l!==ia||x?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Er),c!==Tr&&(v+="rotate("+c+Er),u!==Tr&&(v+="rotateY("+u+Er),h!==Tr&&(v+="rotateX("+h+Er),(d!==Tr||f!==Tr)&&(v+="skew("+d+", "+f+Er),(p!==1||g!==1)&&(v+="scale("+p+", "+g+Er),(m.style[gt]=v||"translate(0, 0)");},Lv=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,g=n.yOrigin,y=n.xOffset,_=n.yOffset,m=n.forceCSS,w=parseFloat(o),v=parseFloat(a),x,M,S,T,D;(l=parseFloat(l)),(c=parseFloat(c)),(u=parseFloat(u)),u&&((u=parseFloat(u)),(c+=u),(l+=u)),l||c?((l*=co),(c*=co),(x=Math.cos(l)*h),(M=Math.sin(l)*h),(S=Math.sin(l-c)*-d),(T=Math.cos(l-c)*d),c&&((u*=co),(D=Math.tan(c-u)),(D=Math.sqrt(1+D*D)),(S*=D),(T*=D),u&&((D=Math.tan(u)),(D=Math.sqrt(1+D*D)),(x*=D),(M*=D))),(x=Pt(x)),(M=Pt(M)),(S=Pt(S)),(T=Pt(T))):((x=h),(T=d),(M=S=0)),((w&&!~(o+"").indexOf("px"))||(v&&!~(a+"").indexOf("px")))&&((w=ur(f,"x",o,"px")),(v=ur(f,"y",a,"px"))),(p||g||y||_)&&((w=Pt(w+p-(p*x+g*S)+y)),(v=Pt(v+g-(p*M+g*T)+_))),(i||r)&&((D=f.getBBox()),(w=Pt(w+(i/100)*D.width)),(v=Pt(v+(r/100)*D.height))),(D="matrix("+x+","+M+","+S+","+T+","+w+","+v+")"),f.setAttribute("transform",D),m&&(f.style[gt]=D);},Pv=function(e,t,n,i,r){var o=360,a=$t(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Fr:1),c=l-i,u=i+c+"deg",h,d;return(a&&((h=r.split("_")[1]),h==="short"&&((c%=o),c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?(c=((c+o*xp)%o)-~~(c/o)*o):h==="ccw"&&c>0&&(c=((c-o*xp)%o)-~~(c/o)*o)),(e._pt=d=new vn(e._pt,t,n,i,c,fv)),(d.e=u),(d.u="deg"),e._props.push(n),d);},Tp=function(e,t){for(var n in t)e[n]=t[n];return e;},Rv=function(e,t,n){var i=Tp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,p;i.svg?((c=n.getAttribute("transform")),n.setAttribute("transform",""),(o[gt]=t),(a=Ra(n,1)),cs(n,gt),n.setAttribute("transform",c)):((c=getComputedStyle(n)[gt]),(o[gt]=t),(a=Ra(n,1)),(o[gt]=c));for(l in ki)
(c=i[l]),(u=a[l]),c!==u&&r.indexOf(l)<0&&((f=rn(c)),(p=rn(u)),(h=f!==p?ur(n,l,c,p):parseFloat(c)),(d=parseFloat(u)),(e._pt=new vn(e._pt,a,l,h,d-h,Xh)),(e._pt.u=p||0),e._props.push(l));Tp(a,i);};xn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s;});Nc[e>1?"border"+s:s]=function(a,l,c,u,h){var d,f;if(arguments.length<4)
return((d=o.map(function(p){return Ai(a,p,c);})),(f=d.join(" ")),f.split(d[0]).length===5?d[0]:f);(d=(u+"").split(" ")),(f={}),o.forEach(function(p,g){return(f[p]=d[g]=d[g]||d[((g-1)/2)|0]);}),a.init(l,f,h);};});var w0={name:"css",register:Yh,targetTest:function(e){return e.style&&e.nodeType;},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,p,g,y,_,m,w,v,x,M,S,T;Qd||Yh(),(this.styles=this.styles||p0(e)),(T=this.styles.props),(this.tween=n);for(g in t)
if(g!=="autoRound"&&((u=t[g]),!(En[g]&&i0(g,t,n,i,e,r)))){if(((f=typeof u),(p=Nc[g]),f==="function"&&((u=u.call(n,i,e,r)),(f=typeof u)),f==="string"&&~u.indexOf("random(")&&(u=Aa(u)),p))
p(this,e,g,u,n)&&(S=1);else if(g.substr(0,2)==="--")
(c=(getComputedStyle(e).getPropertyValue(g)+"").trim()),(u+=""),(rr.lastIndex=0),rr.test(c)||((y=rn(c)),(_=rn(u))),_?y!==_&&(c=ur(e,g,c,_)+_):y&&(u+=y),this.add(a,"setProperty",c,u,i,r,0,0,g),o.push(g),T.push(g,0,a[g]);else if(f!=="undefined"){if((l&&g in l?((c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g]),$t(c)&&~c.indexOf("random(")&&(c=Aa(c)),rn(c+"")||c==="auto"||(c+=Ln.units[g]||rn(Ai(e,g))||""),(c+"").charAt(1)==="="&&(c=Ai(e,g))):(c=Ai(e,g)),(d=parseFloat(c)),(m=f==="string"&&u.charAt(1)==="="&&u.substr(0,2)),m&&(u=u.substr(2)),(h=parseFloat(u)),g in si&&(g==="autoAlpha"&&(d===1&&Ai(e,"visibility")==="hidden"&&h&&(d=0),T.push("visibility",0,a.visibility),nr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&((g=si[g]),~g.indexOf(",")&&(g=g.split(",")[0]))),(w=g in ki),w)){if((this.styles.save(g),v||((x=e._gsap),(x.renderTransform&&!t.parseTransform)||Ra(e,t.parseTransform),(M=t.smoothOrigin!==!1&&x.smooth),(v=this._pt=new vn(this._pt,a,gt,0,1,x.renderTransform,x,0,-1)),(v.dep=1)),g==="scale"))
(this._pt=new vn(this._pt,x,"scaleY",x.scaleY,(m?ao(x.scaleY,m+h):h)-x.scaleY||0,Xh)),(this._pt.u=0),o.push("scaleY",g),(g+="X");else if(g==="transformOrigin"){T.push(wn,0,a[wn]),(u=Ev(u)),x.svg?jh(e,u,0,M,0,this):((_=parseFloat(u.split(" ")[2])||0),_!==x.zOrigin&&nr(this,x,"zOrigin",x.zOrigin,_),nr(this,a,g,zc(c),zc(u)));continue;}else if(g==="svgOrigin"){jh(e,u,1,M,0,this);continue;}else if(g in y0){Pv(this,x,g,d,m?ao(d,m+u):u);continue;}else if(g==="smoothOrigin"){nr(this,x,"smooth",x.smooth,u);continue;}else if(g==="force3D"){x[g]=u;continue;}else if(g==="transform"){Rv(this,u,e);continue;}}else g in a||(g=Eo(g)||g);if(w||((h||h===0)&&(d||d===0)&&!dv.test(u)&&g in a))
(y=(c+"").substr((d+"").length)),h||(h=0),(_=rn(u)||(g in Ln.units?Ln.units[g]:y)),y!==_&&(d=ur(e,g,c,_)),(this._pt=new vn(this._pt,w?x:a,g,d,(m?ao(d,m+h):h)-d,!w&&(_==="px"||g==="zIndex")&&t.autoRound!==!1?mv:Xh)),(this._pt.u=_||0),y!==_&&_!=="%"&&((this._pt.b=c),(this._pt.r=pv));else if(g in a)Tv.call(this,e,g,c,m?m+u:u);else if(g in e)this.add(e,g,c||e[g],m?m+u:u,i,r);else if(g!=="parseTransform"){Wd(g,u);continue;}
w||(g in a?T.push(g,0,a[g]):T.push(g,1,c||e[g])),o.push(g);}}
S&&c0(this);},render:function(e,t){if(t.tween._time||!ef())
for(var n=t._pt;n;)n.r(e,n.d),(n=n._next);else t.styles.revert();},get:Ai,aliases:si,getSetter:function(e,t,n){var i=si[t];return(i&&i.indexOf(",")<0&&(t=i),t in ki&&t!==wn&&(e._gsap.x||Ai(e,"x"))?n&&yp===n?t==="scale"?xv:yv:(yp=n||{})&&(t==="scale"?vv:wv):e.style&&!Hd(e.style[t])?gv:~t.indexOf("-")?_v:Zd(e,t));},core:{_removeProperty:cs,_getMatrix:nf},};bn.utils.checkPrefix=Eo;bn.core.getStyleSaver=p0;(function(s,e,t,n){var i=xn(s+","+e+","+t,function(r){ki[r]=1;});xn(e,function(r){(Ln.units[r]="deg"),(y0[r]=1);}),(si[i[13]]=s+","+e),xn(n,function(r){var o=r.split(":");si[o[1]]=i[o[0]];});})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ln.units[s]="px";});bn.registerPlugin(w0);var ze=bn.registerPlugin(w0)||bn;ze.core.Tween;/*!
* ScrollTrigger 3.7.1
* https://greensock.com
*
* @license Copyright 2008-2021, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for
* Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/var We,pa,Ct,nn,Pi,At,b0,rf,sf,Da,Yn,ml,fc,Gu,mn,pc,Jh,cn,Ep,Ap,Zs,M0,Vu,S0,Wu,ma=1,ns=[],Wr=[],qr=Date.now,qu=qr(),li=0,Cp=1,gl=function(e){return e;},Lp=function(e){return Math.round(e*1e5)/1e5||0;},T0=function(){return typeof window!="undefined";},E0=function(){return We||(T0()&&(We=window.gsap)&&We.registerPlugin&&We);},Ao=function(e){return!!~b0.indexOf(e);},us=function(e,t){return~ns.indexOf(e)&&ns[ns.indexOf(e)+1][t];},Uc=function(e,t){var n=t.s,i=t.sc,r=Wr.indexOf(e),o=i===un.sc?1:2;return(!~r&&(r=Wr.push(e)-1),Wr[r+o]||(Wr[r+o]=us(e,n)||(Ao(e)?i:function(a){return arguments.length?(e[n]=a):e[n];})));},A0=function(e){return(us(e,"getBoundingClientRect")||(Ao(e)?function(){return(xc.width=Ct.innerWidth),(xc.height=Ct.innerHeight),xc;}:function(){return is(e);}));},Dv=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=us(e,"getBoundingClientRect"))?function(){return o()[i];}:function(){return(t?Ct["inner"+r]:e["client"+r])||0;};},Iv=function(e,t){return!t||~ns.indexOf(e)?A0(e):function(){return xc;};},Zh=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return(n="scroll"+i)&&(o=us(e,n))?o()-A0(e)()[r]:Ao(e)?Math.max(Pi[n],At[n])-
(Ct["inner"+i]||Pi["client"+i]||At["client"+i]):e[n]-e["offset"+i];},Xu=function(e,t){for(var n=0;n<Zs.length;n+=3)
(!t||~t.indexOf(Zs[n+1]))&&e(Zs[n],Zs[n+1],Zs[n+2]);},Ur=function(e){return typeof e=="string";},hr=function(e){return typeof e=="function";},Kh=function(e){return typeof e=="number";},$u=function(e){return typeof e=="object";},_l=function(e){return hr(e)&&e();},Pp=function(e,t){return function(){var n=_l(e),i=_l(t);return function(){_l(n),_l(i);};};},yl=Math.abs,xl="scrollLeft",vl="scrollTop",of="left",af="top",su="right",ou="bottom",uo="width",ho="height",fo="Right",po="Left",mo="Top",go="Bottom",Bt="padding",Nn="margin",hs="Width",au="Height",_n="px",Jn={s:xl,p:of,p2:po,os:su,os2:fo,d:uo,d2:hs,a:"x",sc:function(e){return arguments.length?Ct.scrollTo(e,un.sc()):Ct.pageXOffset||nn[xl]||Pi[xl]||At[xl]||0;},},un={s:vl,p:af,p2:mo,os:ou,os2:go,d:ho,d2:au,a:"y",op:Jn,sc:function(e){return arguments.length?Ct.scrollTo(Jn.sc(),e):Ct.pageYOffset||nn[vl]||Pi[vl]||At[vl]||0;},},Ci=function(e){return Ct.getComputedStyle(e);},Bv=function(e){var t=Ci(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative";},Rp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e;},is=function(e,t){var n=t&&Ci(e)[Jh]!=="matrix(1, 0, 0, 1, 0, 0)"&&We.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0,}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i;},Qh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0;},C0=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t;},Fv=function(e){return function(t){return We.utils.snap(C0(e),t);};},Ov=function(e){return function(t,n){var i=C0(e),r;if((i.sort(function(o,a){return o-a;}),n.direction>0)){for(t-=1e-4,r=0;r<i.length;r++)if(i[r]>=t)return i[r];return i.pop();}else for(r=i.length,t+=1e-4;r--;)if(i[r]<=t)return i[r];return i[0];};},Dp=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i);});},gn=function(e,t,n){return e.addEventListener(t,n,{passive:!0});},ga=function(e,t,n){return e.removeEventListener(t,n);},Ip={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal",},Yu={toggleActions:"play",anticipatePin:0},Bp={top:0,left:0,center:0.5,bottom:1,right:1},mc=function(e,t){if(Ur(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),(e=e.substr(0,n-1))),(e=i+
(e in Bp?Bp[e]*t:~e.indexOf("%")?(parseFloat(e)*t)/100:parseFloat(e)||0));}
return e;},wl=function(e,t,n,i,r,o,a){var l=r.startColor,c=r.endColor,u=r.fontSize,h=r.indent,d=r.fontWeight,f=nn.createElement("div"),p=Ao(n)||us(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,y=p?At:n,_=e.indexOf("start")!==-1,m=_?l:c,w="border-color:"+
m+
";font-size:"+
u+
";color:"+
m+
";font-weight:"+
d+
";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return((w+="position:"+(g&&p?"fixed;":"absolute;")),(g||!p)&&(w+=(i===un?su:ou)+":"+(o+parseFloat(h))+"px;"),a&&(w+="box-sizing:border-box;text-align:left;width:"+
a.offsetWidth+
"px;"),(f._isStart=_),f.setAttribute("class","gsap-marker-"+e),(f.style.cssText=w),(f.innerText=t||t===0?e+"-"+t:e),y.children[0]?y.insertBefore(f,y.children[0]):y.appendChild(f),(f._offset=f["offset"+i.op.d2]),gc(f,0,i,_),f);},gc=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];(e._isFlipped=i),(r[n.a+"Percent"]=i?-100:0),(r[n.a]=i?"1px":0),(r["border"+o+hs]=1),(r["border"+a+hs]=0),(r[n.p]=t+"px"),We.set(e,r);},pt=[],ed={},Fp=function(){return Da||(Da=sf(lf));},bl=function(){Da||((Da=sf(lf)),li||Co("scrollStart"),(li=qr()));},_a=function(){return!mn&&!S0&&!nn.fullscreenElement&&rf.restart(!0);},Ia={},kv=[],wt=[],_o,Op,kp=function(e){var t=We.ticker.frame,n=[],i=0,r;if(Op!==t||ma){for(Hc();i<wt.length;i+=4)
(r=Ct.matchMedia(wt[i]).matches),r!==wt[i+3]&&((wt[i+3]=r),r?n.push(i):Hc(1,wt[i])||(hr(wt[i+2])&&wt[i+2]()));for(P0(),i=0;i<n.length;i++)
(r=n[i]),(_o=wt[r]),(wt[r+2]=wt[r+1](e));(_o=0),pa&&yo(0,1),(Op=t),Co("matchMedia");}},L0=function s(){return ga($e,"scrollEnd",s)||yo(!0);},Co=function(e){return((Ia[e]&&Ia[e].map(function(t){return t();}))||kv);},kn=[],P0=function(e){for(var t=0;t<kn.length;t+=5)
(!e||kn[t+4]===e)&&((kn[t].style.cssText=kn[t+1]),kn[t].getBBox&&kn[t].setAttribute("transform",kn[t+2]||""),(kn[t+3].uncache=1));},Hc=function(e,t){var n;for(cn=0;cn<pt.length;cn++)
(n=pt[cn]),(!t||n.media===t)&&(e?n.kill(1):n.revert());t&&P0(t),t||Co("revert");},td,yo=function(e,t){if(li&&!e){gn($e,"scrollEnd",L0);return;}
td=!0;var n=Co("refreshInit");M0&&$e.sort(),t||Hc(),pt.forEach(function(i){return i.refresh();}),n.forEach(function(i){return i&&i.render&&i.render(-1);}),Wr.forEach(function(i){return typeof i=="function"&&(i.rec=0);}),rf.pause(),(td=!1),Co("refresh");},Np=0,_c=1,lf=function(){if(!td){var e=pt.length,t=qr(),n=t-qu>=50,i=e&&pt[0].scroll();if(((_c=Np>i?-1:1),(Np=i),n&&(li&&!pc&&t-li>200&&((li=0),Co("scrollEnd")),(fc=qu),(qu=t)),_c<0)){for(cn=e;cn-->0;)pt[cn]&&pt[cn].update(0,n);_c=1;}else for(cn=0;cn<e;cn++)pt[cn]&&pt[cn].update(0,n);Da=0;}},nd=[of,af,ou,su,Nn+go,Nn+fo,Nn+mo,Nn+po,"display","flexShrink","float","zIndex","grid-column-start","grid-column-end","grid-row-start","grid-row-end","grid-area","justify-self","align-self","place-self",],yc=nd.concat([uo,ho,"boxSizing","max"+hs,"max"+au,"position",Nn,Bt,Bt+mo,Bt+fo,Bt+go,Bt+po,]),Nv=function(e,t,n){if((Gc(n),e.parentNode===t)){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t));}},ju=function(e,t,n,i){if(e.parentNode!==t){for(var r=nd.length,o=t.style,a=e.style,l;r--;)
(l=nd[r]),(o[l]=n[l]);(o.position=n.position==="absolute"?"absolute":"relative"),n.display==="inline"&&(o.display="inline-block"),(a[ou]=a[su]="auto"),(o.overflow="visible"),(o.boxSizing="border-box"),(o[uo]=Qh(e,Jn)+_n),(o[ho]=Qh(e,un)+_n),(o[Bt]=a[Nn]=a[af]=a[of]="0"),Gc(i),(a[uo]=a["max"+hs]=n[uo]),(a[ho]=a["max"+au]=n[ho]),(a[Bt]=n[Bt]),e.parentNode.insertBefore(t,e),t.appendChild(e);}},zv=/([A-Z])/g,Gc=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||We.core.getCache(e.t)).uncache=1;i<n;i+=2)
(o=e[i+1]),(r=e[i]),o?(t[r]=o):t[r]&&t.removeProperty(r.replace(zv,"-$1").toLowerCase());}},Ju=function(e){for(var t=yc.length,n=e.style,i=[],r=0;r<t;r++)
i.push(yc[r],n[yc[r]]);return(i.t=e),i;},Uv=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)
(a=e[o]),i.push(a,a in t?t[a]:e[o+1]);return(i.t=e.t),i;},xc={left:0,top:0},zp=function(e,t,n,i,r,o,a,l,c,u,h,d){if((hr(e)&&(e=e(l)),Ur(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?mc("0"+e.substr(3),n):0)),Kh(e)))
a&&gc(a,n,i,!0);else{hr(t)&&(t=t(l));var f=Yn(t)[0]||At,p=is(f)||{},g=e.split(" "),y,_,m;(!p||(!p.left&&!p.top))&&Ci(f).display==="none"&&((m=f.style.display),(f.style.display="block"),(p=is(f)),m?(f.style.display=m):f.style.removeProperty("display")),(y=mc(g[0],p[i.d])),(_=mc(g[1]||"0",n)),(e=p[i.p]-c[i.p]-u+y+r-_),a&&gc(a,_,i,n-_<20||(a._isStart&&_>20)),(n-=n-_);}
if(o){var w=e+n,v=o._isStart;(d="scroll"+i.d2),gc(o,w,i,(v&&w>20)||(!v&&(h?Math.max(At[d],Pi[d]):o.parentNode[d])<=w+1)),h&&((c=is(a)),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+_n));}
return Math.round(e);},Hv=/(?:webkit|moz|length|cssText|inset)/i,Up=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===At){(e._stOrig=r.cssText),(a=Ci(e));for(o in a)
!+o&&!Hv.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);(r.top=n),(r.left=i);}else r.cssText=e._stOrig;(We.core.getCache(e).uncache=1),t.appendChild(e);}},Hp=function(e,t){var n=Uc(e,t),i="_scroll"+t.p2,r,o,a=function l(c,u,h,d,f){var p=l.tween,g=u.onComplete,y={};return(p&&p.kill(),(r=Math.round(h)),(u[i]=c),(u.modifiers=y),(y[i]=function(_){return((_=Lp(n())),_!==r&&_!==o&&Math.abs(_-r)>2?(p.kill(),(l.tween=0)):(_=h+d*p.ratio+f*p.ratio*p.ratio),(o=r),(r=Lp(_)));}),(u.onComplete=function(){(l.tween=0),g&&g.call(p);}),(p=l.tween=We.to(e,u)),p);};return((e[i]=n),e.addEventListener("wheel",function(){return a.tween&&a.tween.kill()&&(a.tween=0);},{passive:!0}),a);};Jn.op=un;var $e=(function(){function s(t,n){pa||s.register(We)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n);}
var e=s.prototype;return((e.init=function(n,i){if(((this.progress=this.start=0),this.vars&&this.kill(1),!Cp)){this.update=this.refresh=this.kill=gl;return;}
n=Rp(Ur(n)||Kh(n)||n.nodeType?{trigger:n}:n,Yu);var r=n.horizontal?Jn:un,o=n,a=o.onUpdate,l=o.toggleClass,c=o.id,u=o.onToggle,h=o.onRefresh,d=o.scrub,f=o.trigger,p=o.pin,g=o.pinSpacing,y=o.invalidateOnRefresh,_=o.anticipatePin,m=o.onScrubComplete,w=o.onSnapComplete,v=o.once,x=o.snap,M=o.pinReparent,S=!d&&d!==0,T=Yn(n.scroller||Ct)[0],D=We.core.getCache(T),I=Ao(T),b="pinType"in n?n.pinType==="fixed":I||us(T,"pinType")==="fixed",R=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=S&&n.toggleActions.split(" "),O="markers"in n?n.markers:Yu.markers,H=I?0:parseFloat(Ci(T)["border"+r.p2+hs])||0,A=this,z=n.onRefreshInit&&function(){return n.onRefreshInit(A);},U=Dv(T,I,r),B=Iv(T,I),j=0,X,K,ue,Ee,Z,q,Ae,fe,ce,le,Te,V,ee,se,_e,pe,me,Le,Se,Ue,L,E,Q,ie,he,Me,Re,te,N,oe,be,de,k,ye,ge,Fe;(A.media=_o),(_*=45),(A.scroller=T),(A.scroll=Uc(T,r)),(Ee=A.scroll()),(A.vars=n),(i=i||n.animation),"refreshPriority"in n&&(M0=1),(D.tweenScroll=D.tweenScroll||{top:Hp(T,un),left:Hp(T,Jn)}),(A.tweenTo=X=D.tweenScroll[r.p]),i&&((i.vars.lazy=!1),i._initted||(i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.render(0,!0,!0)),(A.animation=i.pause()),(i.scrollTrigger=A),(be=Kh(d)&&d),be&&(oe=We.to(i,{ease:"power3",duration:be,onComplete:function(){return m&&m(A);},})),(te=0),c||(c=i.vars.id)),pt.push(A),x&&((!$u(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in At.style&&We.set(I?[At,Pi]:T,{scrollBehavior:"auto"}),(ue=hr(x.snapTo)?x.snapTo:x.snapTo==="labels"?Fv(i):x.snapTo==="labelsDirectional"?Ov(i):We.utils.snap(x.snapTo)),(de=x.duration||{min:0.1,max:2}),(de=$u(de)?ml(de.min,de.max):ml(de,de)),(k=We.delayedCall(x.delay||be/2||0.1,function(){if(Math.abs(A.getVelocity())<10&&!pc&&j!==A.scroll()){var ae=i&&!S?i.totalProgress():A.progress,ne=((ae-N)/(qr()-fc))*1e3||0,xe=We.utils.clamp(-A.progress,1-A.progress,(yl(ne/2)*ne)/0.185),Ie=A.progress+(x.inertia===!1?0:xe),Ne=ml(0,1,ue(Ie,A)),De=A.scroll(),et=Math.round(q+Ne*ee),it=x,Nt=it.onStart,ct=it.onInterrupt,Vn=it.onComplete,Gt=X.tween;if(De<=Ae&&De>=q&&et!==De){if(Gt&&!Gt._initted&&Gt.data<=Math.abs(et-De))return;x.inertia===!1&&(xe=Ne-A.progress),X(et,{duration:de(yl((Math.max(yl(Ie-ae),yl(Ne-ae))*0.185)/ne/0.05||0)),ease:x.ease||"power3",data:Math.abs(et-De),onInterrupt:function(){return k.restart(!0)&&ct&&ct(A);},onComplete:function(){(j=A.scroll()),(te=N=i&&!S?i.totalProgress():A.progress),w&&w(A),Vn&&Vn(A);},},De,xe*ee,et-De-xe*ee),Nt&&Nt(A,X.tween);}}else A.isActive&&k.restart(!0);}).pause())),c&&(ed[c]=A),(f=A.trigger=Yn(f||p)[0]),(p=p===!0?f:Yn(p)[0]),Ur(l)&&(l={targets:f,className:l}),p&&(g===!1||g===Nn||(g=!g&&Ci(p.parentNode).display==="flex"?!1:Bt),(A.pin=p),n.force3D!==!1&&We.set(p,{force3D:!0}),(K=We.core.getCache(p)),K.spacer?(se=K.pinState):((K.spacer=me=nn.createElement("div")),me.setAttribute("class","pin-spacer"+(c?" pin-spacer-"+c:"")),(K.pinState=se=Ju(p))),(A.spacer=me=K.spacer),(Re=Ci(p)),(Q=Re[g+r.os2]),(Se=We.getProperty(p)),(Ue=We.quickSetter(p,r.a,_n)),ju(p,me,Re),(pe=Ju(p))),O&&((V=$u(O)?Rp(O,Ip):Ip),(le=wl("scroller-start",c,T,r,V,0)),(Te=wl("scroller-end",c,T,r,V,0,le)),(Le=le["offset"+r.op.d2]),(fe=wl("start",c,T,r,V,Le)),(ce=wl("end",c,T,r,V,Le)),!b&&!(ns.length&&us(T,"fixedMarkers")===!0)&&(Bv(I?At:T),We.set([le,Te],{force3D:!0}),(he=We.quickSetter(le,r.a,_n)),(Me=We.quickSetter(Te,r.a,_n)))),(A.revert=function(ae){var ne=ae!==!1||!A.enabled,xe=mn;ne!==A.isReverted&&(ne&&(A.scroll.rec||(A.scroll.rec=A.scroll()),(ge=Math.max(A.scroll(),A.scroll.rec||0)),(ye=A.progress),(Fe=i&&i.progress())),fe&&[fe,ce,le,Te].forEach(function(Ie){return(Ie.style.display=ne?"none":"block");}),ne&&(mn=1),A.update(ne),(mn=xe),p&&(ne?Nv(p,me,se):(!M||!A.isActive)&&ju(p,me,Ci(p),ie)),(A.isReverted=ne));}),(A.refresh=function(ae,ne){if(!((mn||!A.enabled)&&!ne)){if(p&&ae&&li){gn(s,"scrollEnd",L0);return;}
(mn=1),oe&&oe.pause(),y&&i&&i.progress(0).invalidate(),A.isReverted||A.revert();for(var xe=U(),Ie=B(),Ne=Zh(T,r),De=0,et=0,it=n.end,Nt=n.endTrigger||f,ct=n.start||(n.start===0||!f?0:p?"0 0":"0 100%"),Vn=n.pinnedContainer&&Yn(n.pinnedContainer)[0],Gt=(f&&Math.max(0,pt.indexOf(A)))||0,Kt=Gt,zt,jt,ea,P,G,Y,W,re,Oe,ke;Kt--;)
(Y=pt[Kt]),Y.end||Y.refresh(0,1)||(mn=1),(W=Y.pin),W&&(W===f||W===p)&&!Y.isReverted&&(ke||(ke=[]),ke.unshift(Y),Y.revert());for(q=zp(ct,f,xe,r,A.scroll(),fe,le,A,Ie,H,b,Ne)||(p?-0.001:0),hr(it)&&(it=it(A)),Ur(it)&&!it.indexOf("+=")&&(~it.indexOf(" ")?(it=(Ur(ct)?ct.split(" ")[0]:"")+it):((De=mc(it.substr(2),xe)),(it=Ur(ct)?ct:q+De),(Nt=f))),Ae=Math.max(q,zp(it||(Nt?"100% 0":Ne),Nt,xe,r,A.scroll()+De,ce,Te,A,Ie,H,b,Ne))||-0.001,ee=Ae-q||((q-=0.01)&&0.001),De=0,Kt=Gt;Kt--;)
(Y=pt[Kt]),(W=Y.pin),W&&Y.start-Y._pinPush<q&&((zt=Y.end-Y.start),(W===f||W===Vn)&&(De+=zt),W===p&&(et+=zt));if(((q+=De),(Ae+=De),(A._pinPush=et),fe&&De&&((zt={}),(zt[r.a]="+="+De),Vn&&(zt[r.p]="-="+A.scroll()),We.set([fe,ce],zt)),p))
(zt=Ci(p)),(P=r===un),(ea=A.scroll()),(L=parseFloat(Se(r.a))+et),!Ne&&Ae>1&&((I?At:T).style["overflow-"+r.a]="scroll"),ju(p,me,zt),(pe=Ju(p)),(jt=is(p,!0)),(re=b&&Uc(T,P?Jn:un)()),g&&((ie=[g+r.os2,ee+et+_n]),(ie.t=me),(Kt=g===Bt?Qh(p,r)+ee+et:0),Kt&&ie.push(r.d,Kt+_n),Gc(ie),b&&A.scroll(ge)),b&&((G={top:jt.top+(P?ea-q:re)+_n,left:jt.left+(P?re:ea-q)+_n,boxSizing:"border-box",position:"fixed",}),(G[uo]=G["max"+hs]=Math.ceil(jt.width)+_n),(G[ho]=G["max"+au]=Math.ceil(jt.height)+_n),(G[Nn]=G[Nn+mo]=G[Nn+fo]=G[Nn+go]=G[Nn+po]="0"),(G[Bt]=zt[Bt]),(G[Bt+mo]=zt[Bt+mo]),(G[Bt+fo]=zt[Bt+fo]),(G[Bt+go]=zt[Bt+go]),(G[Bt+po]=zt[Bt+po]),(_e=Uv(se,G,M))),i?((Oe=i._initted),Vu(1),i.render(i.duration(),!0,!0),(E=Se(r.a)-L+ee+et),ee!==E&&_e.splice(_e.length-2,2),i.render(0,!0,!0),Oe||i.invalidate(),Vu(0)):(E=ee);else if(f&&A.scroll())
for(jt=f.parentNode;jt&&jt!==At;)
jt._pinOffset&&((q-=jt._pinOffset),(Ae-=jt._pinOffset)),(jt=jt.parentNode);ke&&ke.forEach(function(He){return He.revert(!1);}),(A.start=q),(A.end=Ae),(Ee=Z=A.scroll()),Ee<ge&&A.scroll(ge),A.revert(!1),(mn=0),i&&S&&i._initted&&i.progress()!==Fe&&i.progress(Fe,!0).render(i.time(),!0,!0),ye!==A.progress&&(oe&&i.totalProgress(ye,!0),(A.progress=ye),A.update()),p&&g&&(me._pinOffset=Math.round(A.progress*E)),h&&h(A);}}),(A.getVelocity=function(){return((A.scroll()-Z)/(qr()-fc))*1e3||0;}),(A.update=function(ae,ne){var xe=A.scroll(),Ie=ae?0:(xe-q)/ee,Ne=Ie<0?0:Ie>1?1:Ie||0,De=A.progress,et,it,Nt,ct,Vn,Gt;if((ne&&((Z=Ee),(Ee=xe),x&&((N=te),(te=i&&!S?i.totalProgress():Ne))),_&&!Ne&&p&&!mn&&!ma&&li&&q<xe+((xe-Z)/(qr()-fc))*_&&(Ne=1e-4),Ne!==De&&A.enabled)){if(((et=A.isActive=!!Ne&&Ne<1),(it=!!De&&De<1),(Gt=et!==it),(Vn=Gt||!!Ne!=!!De),(A.direction=Ne>De?1:-1),(A.progress=Ne),S||(oe&&!mn&&!ma?((oe.vars.totalProgress=Ne),oe.invalidate().restart()):i&&i.totalProgress(Ne,!!mn)),p)){if((ae&&g&&(me.style[g+r.os2]=Q),!b))Ue(L+E*Ne);else if(Vn){if(((ct=!ae&&Ne>De&&Ae+1>xe&&xe+1>=Zh(T,r)),M))
if(!ae&&(et||ct)){var Kt=is(p,!0),zt=xe-q;Up(p,At,Kt.top+(r===un?zt:0)+_n,Kt.left+(r===un?0:zt)+_n);}else Up(p,me);Gc(et||ct?_e:pe),(E!==ee&&Ne<1&&et)||Ue(L+(Ne===1&&!ct?E:0));}}
x&&!X.tween&&!mn&&!ma&&k.restart(!0),l&&(Gt||(v&&Ne&&(Ne<1||!Wu)))&&Yn(l.targets).forEach(function(jt){return jt.classList[et||v?"add":"remove"](l.className);}),a&&!S&&!ae&&a(A),Vn&&!mn?((Nt=Ne&&!De?0:Ne===1?1:De===1?2:3),S&&((ct=(!Gt&&F[Nt+1]!=="none"&&F[Nt+1])||F[Nt]),i&&(ct==="complete"||ct==="reset"||ct in i)&&(ct==="complete"?i.pause().totalProgress(1):ct==="reset"?i.restart(!0).pause():ct==="restart"?i.restart(!0):i[ct]()),a&&a(A)),(Gt||!Wu)&&(u&&Gt&&u(A),R[Nt]&&R[Nt](A),v&&(Ne===1?A.kill(!1,1):(R[Nt]=0)),Gt||((Nt=Ne===1?1:3),R[Nt]&&R[Nt](A)))):S&&a&&!mn&&a(A);}
Me&&(he(xe+(le._isFlipped?1:0)),Me(xe));}),(A.enable=function(ae,ne){A.enabled||((A.enabled=!0),gn(T,"resize",_a),gn(T,"scroll",bl),z&&gn(s,"refreshInit",z),ae!==!1&&((A.progress=ye=0),(Ee=Z=j=A.scroll())),ne!==!1&&A.refresh());}),(A.getTween=function(ae){return ae&&X?X.tween:oe;}),(A.disable=function(ae,ne){if(A.enabled&&(ae!==!1&&A.revert(),(A.enabled=A.isActive=!1),ne||(oe&&oe.pause()),(ge=0),K&&(K.uncache=1),z&&ga(s,"refreshInit",z),k&&(k.pause(),X.tween&&X.tween.kill()&&(X.tween=0)),!I)){for(var xe=pt.length;xe--;)
if(pt[xe].scroller===T&&pt[xe]!==A)return;ga(T,"resize",_a),ga(T,"scroll",bl);}}),(A.kill=function(ae,ne){A.disable(ae,ne),c&&delete ed[c];var xe=pt.indexOf(A);pt.splice(xe,1),xe===cn&&_c>0&&cn--,(xe=0),pt.forEach(function(Ie){return Ie.scroller===A.scroller&&(xe=1);}),xe||(A.scroll.rec=0),i&&((i.scrollTrigger=null),ae&&i.render(-1),ne||i.kill()),fe&&[fe,ce,le,Te].forEach(function(Ie){return Ie.parentNode&&Ie.parentNode.removeChild(Ie);}),p&&(K&&(K.uncache=1),(xe=0),pt.forEach(function(Ie){return Ie.pin===p&&xe++;}),xe||(K.spacer=0));}),A.enable(!1,!1),!i||!i.add||ee?A.refresh():We.delayedCall(0.01,function(){return q||Ae||A.refresh();})&&(ee=0.01)&&(q=Ae=0);}),(s.register=function(n){if(!pa&&((We=n||E0()),T0()&&window.document&&((Ct=window),(nn=document),(Pi=nn.documentElement),(At=nn.body)),We&&((Yn=We.utils.toArray),(ml=We.utils.clamp),(Vu=We.core.suppressOverwrites||gl),We.core.globals("ScrollTrigger",s),At))){(sf=Ct.requestAnimationFrame||function(a){return setTimeout(a,16);}),gn(Ct,"wheel",bl),(b0=[Ct,nn,Pi,At]),gn(nn,"scroll",bl);var i=At.style,r=i.borderTop,o;(i.borderTop="1px solid #000"),(o=is(At)),(un.m=Math.round(o.top+un.sc())||0),(Jn.m=Math.round(o.left+Jn.sc())||0),r?(i.borderTop=r):i.removeProperty("border-top"),(Gu=setInterval(Fp,200)),We.delayedCall(0.5,function(){return(ma=0);}),gn(nn,"touchcancel",gl),gn(At,"touchstart",gl),Dp(gn,nn,"pointerdown,touchstart,mousedown",function(){return(pc=1);}),Dp(gn,nn,"pointerup,touchend,mouseup",function(){return(pc=0);}),(Jh=We.utils.checkPrefix("transform")),yc.push(Jh),(pa=qr()),(rf=We.delayedCall(0.2,yo).pause()),(Zs=[nn,"visibilitychange",function(){var a=Ct.innerWidth,l=Ct.innerHeight;nn.hidden?((Ep=a),(Ap=l)):(Ep!==a||Ap!==l)&&_a();},nn,"DOMContentLoaded",yo,Ct,"load",function(){return li||yo();},Ct,"resize",_a,]),Xu(gn);}
return pa;}),(s.defaults=function(n){for(var i in n)Yu[i]=n[i];}),(s.kill=function(){(Cp=0),pt.slice(0).forEach(function(n){return n.kill(1);});}),(s.config=function(n){"limitCallbacks"in n&&(Wu=!!n.limitCallbacks);var i=n.syncInterval;(i&&clearInterval(Gu))||((Gu=i)&&setInterval(Fp,i)),"autoRefreshEvents"in n&&(Xu(ga)||Xu(gn,n.autoRefreshEvents||"none"),(S0=(n.autoRefreshEvents+"").indexOf("resize")===-1));}),(s.scrollerProxy=function(n,i){var r=Yn(n)[0],o=Wr.indexOf(r),a=Ao(r);~o&&Wr.splice(o,a?6:2),a?ns.unshift(Ct,i,At,i,Pi,i):ns.unshift(r,i);}),(s.matchMedia=function(n){var i,r,o,a,l;for(r in n)
(o=wt.indexOf(r)),(a=n[r]),(_o=r),r==="all"?a():((i=Ct.matchMedia(r)),i&&(i.matches&&(l=a()),~o?((wt[o+1]=Pp(wt[o+1],a)),(wt[o+2]=Pp(wt[o+2],l))):((o=wt.length),wt.push(r,a,l),i.addListener?i.addListener(kp):i.addEventListener("change",kp)),(wt[o+3]=i.matches))),(_o=0);return wt;}),(s.clearMatchMedia=function(n){n||(wt.length=0),(n=wt.indexOf(n)),n>=0&&wt.splice(n,4);}),s);})();$e.version="3.7.1";$e.saveStyles=function(s){return s?Yn(s).forEach(function(e){if(e&&e.style){var t=kn.indexOf(e);t>=0&&kn.splice(t,5),kn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),We.core.getCache(e),_o);}}):kn;};$e.revert=function(s,e){return Hc(!s,e);};$e.create=function(s,e){return new $e(s,e);};$e.refresh=function(s){return s?_a():yo(!0);};$e.update=lf;$e.maxScroll=function(s,e){return Zh(s,e?Jn:un);};$e.getScrollFunc=function(s,e){return Uc(Yn(s)[0],e?Jn:un);};$e.getById=function(s){return ed[s];};$e.getAll=function(){return pt.slice(0);};$e.isScrolling=function(){return!!li;};$e.addEventListener=function(s,e){var t=Ia[s]||(Ia[s]=[]);~t.indexOf(e)||t.push(e);};$e.removeEventListener=function(s,e){var t=Ia[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1);};$e.batch=function(s,e){var t=[],n={},i=e.interval||0.016,r=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=We.delayedCall(i,function(){u(h,d),(h=[]),(d=[]);}).pause();return function(p){h.length||f.restart(!0),h.push(p.trigger),d.push(p),r<=h.length&&f.progress(1);};},a;for(a in e)
n[a]=a.substr(0,2)==="on"&&hr(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return(hr(r)&&((r=r()),gn($e,"refresh",function(){return(r=e.batchMax());})),Yn(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];(c.trigger=l),t.push($e.create(c));}),t);};$e.sort=function(s){return pt.sort(s||function(e,t){return((e.vars.refreshPriority||0)*-1e6+
e.start-
(t.start+(t.vars.refreshPriority||0)*-1e6));});};E0()&&We.registerPlugin($e);/*!
* ScrollToPlugin 3.7.1
* https://greensock.com
*
* @license Copyright 2008-2021, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for
* Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/var zn,R0,Ii,oi,sr,D0,I0,B0=function(){return typeof window!="undefined";},F0=function(){return zn||(B0()&&(zn=window.gsap)&&zn.registerPlugin&&zn);},O0=function(e){return typeof e=="string";},Gp=function(e){return typeof e=="function";},Ba=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,r="client"+n;return e===Ii||e===oi||e===sr?Math.max(oi[i],sr[i])-(Ii["inner"+n]||oi[r]||sr[r]):e[i]-e["offset"+n];},Fa=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return(e===Ii&&(e.pageXOffset!=null?(n="page"+t.toUpperCase()+"Offset"):(e=oi[n]!=null?oi:sr)),function(){return e[n];});},Gv=function(e,t,n,i){if((Gp(e)&&(e=e(t,n,i)),typeof e!="object"))
return O0(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var r={},o;for(o in e)r[o]=o!=="onAutoKill"&&Gp(e[o])?e[o](t,n,i):e[o];return r;},k0=function(e,t){if(((e=D0(e)[0]),!e||!e.getBoundingClientRect))
return(console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0});var n=e.getBoundingClientRect(),i=!t||t===Ii||t===sr,r=i?{top:oi.clientTop-
(Ii.pageYOffset||oi.scrollTop||sr.scrollTop||0),left:oi.clientLeft-
(Ii.pageXOffset||oi.scrollLeft||sr.scrollLeft||0),}:t.getBoundingClientRect(),o={x:n.left-r.left,y:n.top-r.top};return!i&&t&&((o.x+=Fa(t,"x")()),(o.y+=Fa(t,"y")())),o;},Vp=function(e,t,n,i,r){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-r:O0(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-r:e==="max"?Ba(t,n)-r:Math.min(Ba(t,n),k0(e,t)[n]-r);},Wp=function(){(zn=F0()),B0()&&zn&&document.body&&((Ii=window),(sr=document.body),(oi=document.documentElement),(D0=zn.utils.toArray),zn.config({autoKillThreshold:7}),(I0=zn.config()),(R0=1));},ln={version:"3.7.1",name:"scrollTo",rawVars:1,register:function(e){(zn=e),Wp();},init:function(e,t,n,i,r){R0||Wp();var o=this,a=zn.getProperty(e,"scrollSnapType");(o.isWin=e===Ii),(o.target=e),(o.tween=n),(t=Gv(t,i,e,r)),(o.vars=t),(o.autoKill=!!t.autoKill),(o.getX=Fa(e,"x")),(o.getY=Fa(e,"y")),(o.x=o.xPrev=o.getX()),(o.y=o.yPrev=o.getY()),a&&a!=="none"&&((o.snap=1),(o.snapInline=e.style.scrollSnapType),(e.style.scrollSnapType="none")),t.x!=null?(o.add(o,"x",o.x,Vp(t.x,e,"x",o.x,t.offsetX||0),i,r),o._props.push("scrollTo_x")):(o.skipX=1),t.y!=null?(o.add(o,"y",o.y,Vp(t.y,e,"y",o.y,t.offsetY||0),i,r),o._props.push("scrollTo_y")):(o.skipY=1);},render:function(e,t){for(var n=t._pt,i=t.target,r=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,h=t.snapInline,d,f,p,g,y;n;)
n.r(e,n.d),(n=n._next);(d=c||!t.skipX?t.getX():a),(f=c||!t.skipY?t.getY():l),(p=f-l),(g=d-a),(y=I0.autoKillThreshold),t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(g>y||g<-y)&&d<Ba(i,"x")&&(t.skipX=1),!t.skipY&&(p>y||p<-y)&&f<Ba(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(r.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(r,t.vars.onAutoKillParams||[]))),c?Ii.scrollTo(t.skipX?d:t.x,t.skipY?f:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),u&&(e===1||e===0)&&((f=i.scrollTop),(d=i.scrollLeft),h?(i.style.scrollSnapType=h):i.style.removeProperty("scroll-snap-type"),(i.scrollTop=f+1),(i.scrollLeft=d+1),(i.scrollTop=f),(i.scrollLeft=d)),(t.xPrev=t.x),(t.yPrev=t.y);},kill:function(e){var t=e==="scrollTo";(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1);},};ln.max=Ba;ln.getOffset=k0;ln.buildGetter=Fa;F0()&&zn.registerPlugin(ln);ze.registerPlugin($e,ln);function Vc(s){let e;window.matchMedia("(max-width: 991px)").matches?(e=document.querySelectorAll(".more-menu-sec .about-menu .nav-item > a:first-child")):(e=document.querySelectorAll(".bottom-header .nav-item > a:first-child")),document.querySelectorAll(".header-subbar-nav__link--drop").forEach((n,i,r)=>{let o=n.querySelectorAll(".header-subbar-nav__link--drop a:not(:first-child)"),a=ze.timeline({paused:!0});e.forEach((l)=>l.addEventListener("click",()=>a.reverse())),o.forEach((l,c)=>{l.addEventListener("click",()=>{a.reverse();}),a.to(l,{opacity:1,y:c*40+60,duration:0.2+c/30,backgroundColor:"rgba(0,0,0,.3)",overwrite:"auto",ease:"sine",},"<");}),(n.onmouseover=()=>a.play()),(n.onmouseleave=()=>a.reverse());}),e.forEach((n,i)=>{n.onclick=(r)=>{s==="home"?(r.preventDefault(),r.stopPropagation(),ze.to(window,{scrollTo:i===0?0:i===1?".page7":i===2?(window.location.href="/capabilities.html"):i===3?".page9":i===4?".page8":i===5?".page9":0,})):(i!==0&&(document.body.dataset.linkFrom=n.innerText),i===1?(document.body.dataset.scrollPos="page7"):i===2?(window.location.href="/capabilities.html"):i===3?(document.body.dataset.scrollPos=".page9"):i===4&&(document.body.dataset.scrollPos=".page8"));};});}
function qp(s,e){for(var t=0;t<e.length;t++){var n=e[t];(n.enumerable=n.enumerable||!1),(n.configurable=!0),"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n);}}
function cf(s,e,t){return e&&qp(s.prototype,e),t&&qp(s,t),s;}
function Xr(){return(Xr=Object.assign||function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)
Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n]);}
return s;}).apply(this,arguments);}
function lu(s,e){(s.prototype=Object.create(e.prototype)),(s.prototype.constructor=s),(s.__proto__=e);}
function N0(s){return(N0=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e);})(s);}
function uf(s,e){return(uf=Object.setPrototypeOf||function(t,n){return(t.__proto__=n),t;})(s,e);}
function z0(s,e,t){return(z0=(function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)
return!1;if(typeof Proxy=="function")return!0;try{return(Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0);}catch{return!1;}})()?Reflect.construct:function(n,i,r){var o=[null];o.push.apply(o,i);var a=new(Function.bind.apply(n,o))();return r&&uf(a,r.prototype),a;}).apply(null,arguments);}
function U0(s){var e=typeof Map=="function"?new Map():void 0;return(U0=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)
return t;if(typeof t!="function")
throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n);}
function n(){return z0(t,arguments,N0(this).constructor);}
return((n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0,},})),uf(n,t));})(s);}
function Ks(s,e){try{var t=s();}catch(n){return e(n);}
return t&&t.then?t.then(void 0,e):t;}
typeof Symbol!="undefined"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),typeof Symbol!="undefined"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var Qi,Vv="2.9.7",Wv=function(){};(function(s){(s[(s.off=0)]="off"),(s[(s.error=1)]="error"),(s[(s.warning=2)]="warning"),(s[(s.info=3)]="info"),(s[(s.debug=4)]="debug");})(Qi||(Qi={}));var Xp=Qi.off,$r=(function(){function s(t){this.t=t;}
(s.getLevel=function(){return Xp;}),(s.setLevel=function(t){return(Xp=Qi[t]);});var e=s.prototype;return((e.error=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)
n[i]=arguments[i];this.i(console.error,Qi.error,n);}),(e.warn=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)
n[i]=arguments[i];this.i(console.warn,Qi.warning,n);}),(e.info=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)
n[i]=arguments[i];this.i(console.info,Qi.info,n);}),(e.debug=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)
n[i]=arguments[i];this.i(console.log,Qi.debug,n);}),(e.i=function(t,n,i){n<=s.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i));}),s);})(),Or=ff,qv=G0,Xv=hf,$v=V0,Yv=W0,H0="/",jv=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?",].join("|"),"g");function hf(s,e){for(var t,n=[],i=0,r=0,o="",a=(e&&e.delimiter)||H0,l=(e&&e.whitelist)||void 0,c=!1;(t=jv.exec(s))!==null;){var u=t[0],h=t[1],d=t.index;if(((o+=s.slice(r,d)),(r=d+u.length),h))(o+=h[1]),(c=!0);else{var f="",p=t[2],g=t[3],y=t[4],_=t[5];if(!c&&o.length){var m=o.length-1,w=o[m];(!l||l.indexOf(w)>-1)&&((f=w),(o=o.slice(0,m)));}
o&&(n.push(o),(o=""),(c=!1));var v=g||y,x=f||a;n.push({name:p||i++,prefix:f,delimiter:x,optional:_==="?"||_==="*",repeat:_==="+"||_==="*",pattern:v?Jv(v):"[^"+Ti(x===a?x:x+a)+"]+?",});}}
return(o||r<s.length)&&n.push(o+s.substr(r)),n;}
function G0(s,e){return function(t,n){var i=s.exec(t);if(!i)return!1;for(var r=i[0],o=i.index,a={},l=(n&&n.decode)||decodeURIComponent,c=1;c<i.length;c++)
if(i[c]!==void 0){var u=e[c-1];a[u.name]=u.repeat?i[c].split(u.delimiter).map(function(h){return l(h,u);}):l(i[c],u);}
return{path:r,index:o,params:a};};}
function V0(s,e){for(var t=new Array(s.length),n=0;n<s.length;n++)
typeof s[n]=="object"&&(t[n]=new RegExp("^(?:"+s[n].pattern+")$",df(e)));return function(i,r){for(var o="",a=(r&&r.encode)||encodeURIComponent,l=!r||r.validate!==!1,c=0;c<s.length;c++){var u=s[c];if(typeof u!="string"){var h,d=i?i[u.name]:void 0;if(Array.isArray(d)){if(!u.repeat)
throw new TypeError('Expected "'+u.name+'" to not repeat, but got array');if(d.length===0){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty');}
for(var f=0;f<d.length;f++){if(((h=a(d[f],u)),l&&!t[c].test(h)))
throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'"');o+=(f===0?u.prefix:u.delimiter)+h;}}else if(typeof d!="string"&&typeof d!="number"&&typeof d!="boolean"){if(!u.optional)
throw new TypeError('Expected "'+
u.name+
'" to be '+
(u.repeat?"an array":"a string"));}else{if(((h=a(String(d),u)),l&&!t[c].test(h)))
throw new TypeError('Expected "'+
u.name+
'" to match "'+
u.pattern+
'", but got "'+
h+
'"');o+=u.prefix+h;}}else o+=u;}
return o;};}
function Ti(s){return s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");}
function Jv(s){return s.replace(/([=!:$/()])/g,"\\$1");}
function df(s){return s&&s.sensitive?"":"i";}
function W0(s,e,t){for(var n=(t=t||{}).strict,i=t.start!==!1,r=t.end!==!1,o=t.delimiter||H0,a=[].concat(t.endsWith||[]).map(Ti).concat("$").join("|"),l=i?"^":"",c=0;c<s.length;c++){var u=s[c];if(typeof u=="string")l+=Ti(u);else{var h=u.repeat?"(?:"+
u.pattern+
")(?:"+
Ti(u.delimiter)+
"(?:"+
u.pattern+
"))*":u.pattern;e&&e.push(u),(l+=u.optional?u.prefix?"(?:"+Ti(u.prefix)+"("+h+"))?":"("+h+")?":Ti(u.prefix)+"("+h+")");}}
if(r)
n||(l+="(?:"+Ti(o)+")?"),(l+=a==="$"?"$":"(?="+a+")");else{var d=s[s.length-1],f=typeof d=="string"?d[d.length-1]===o:d===void 0;n||(l+="(?:"+Ti(o)+"(?="+a+"))?"),f||(l+="(?="+Ti(o)+"|"+a+")");}
return new RegExp(l,df(t));}
function ff(s,e,t){return s instanceof RegExp?(function(n,i){if(!i)return n;var r=n.source.match(/\((?!\?)/g);if(r)
for(var o=0;o<r.length;o++)
i.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null,});return n;})(s,e):Array.isArray(s)?(function(n,i,r){for(var o=[],a=0;a<n.length;a++)
o.push(ff(n[a],i,r).source);return new RegExp("(?:"+o.join("|")+")",df(r));})(s,e,t):(function(n,i,r){return W0(hf(n,r),i,r);})(s,e,t);}
(Or.match=function(s,e){var t=[];return G0(ff(s,t,e),t);}),(Or.regexpToFunction=qv),(Or.parse=Xv),(Or.compile=function(s,e){return V0(hf(s,e),e);}),(Or.tokensToFunction=$v),(Or.tokensToRegExp=Yv);var ci={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper",},Yr=new((function(){function s(){(this.o=ci),(this.u=new DOMParser());}
var e=s.prototype;return((e.toString=function(t){return t.outerHTML;}),(e.toDocument=function(t){return this.u.parseFromString(t,"text/html");}),(e.toElement=function(t){var n=document.createElement("div");return(n.innerHTML=t),n;}),(e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement);}),(e.getWrapper=function(t){return(t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]'));}),(e.getContainer=function(t){return(t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]'));}),(e.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t);}),(e.addContainer=function(t,n){var i=this.getContainer();i?this.s(t,i):n.appendChild(t);}),(e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null;}),(e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n);}
return null;}),(e.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)
n[i]=arguments[i];var r=n.length;if(r===0)
throw new Error("resolveUrl requires at least one argument; got none.");var o=document.createElement("base");if(((o.href=arguments[0]),r===1))return o.href;var a=document.getElementsByTagName("head")[0];a.insertBefore(o,a.firstChild);for(var l,c=document.createElement("a"),u=1;u<r;u++)
(c.href=arguments[u]),(o.href=l=c.href);return a.removeChild(o),l;}),(e.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling);}),s);})())(),q0=new((function(){function s(){(this.h=[]),(this.v=-1);}
var e=s.prototype;return((e.init=function(t,n){this.l="barba";var i={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t,};this.h.push(i),(this.v=0);var r={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(r,"",t);}),(e.change=function(t,n,i){if(i&&i.state){var r=i.state,o=r.index;(n=this.m(this.v-o)),this.replace(r.states),(this.v=o);}else this.add(t,n);return n;}),(e.add=function(t,n){var i=this.size,r=this.p(n),o={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t,};this.h.push(o),(this.v=i);var a={from:this.l,index:i,states:[].concat(this.h)};switch(r){case "push":window.history&&window.history.pushState(a,"",t);break;case "replace":window.history&&window.history.replaceState(a,"",t);}}),(e.update=function(t,n){var i=n||this.v,r=Xr({},this.get(i),{},t);this.set(i,r);}),(e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--;}),(e.clear=function(){(this.h=[]),(this.v=-1);}),(e.replace=function(t){this.h=t;}),(e.get=function(t){return this.h[t];}),(e.set=function(t,n){return(this.h[t]=n);}),(e.p=function(t){var n="push",i=t,r=ci.prefix+"-"+ci.history;return(i.hasAttribute&&i.hasAttribute(r)&&(n=i.getAttribute(r)),n);}),(e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward";}),cf(s,[{key:"current",get:function(){return this.h[this.v];},},{key:"state",get:function(){return this.h[this.h.length-1];},},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1];},},{key:"size",get:function(){return this.h.length;},},]),s);})())(),Wc=function(s,e){try{var t=(function(){if(!e.next.html)
return Promise.resolve(s).then(function(n){var i=e.next;if(n){var r=Yr.toElement(n);(i.namespace=Yr.getNamespace(r)),(i.container=Yr.getContainer(r)),(i.html=n),q0.update({ns:i.namespace});var o=Yr.toDocument(n);document.title=o.title;}});})();return Promise.resolve(t&&t.then?t.then(function(){}):void 0);}catch(n){return Promise.reject(n);}},X0=Or,Zv={__proto__:null,update:Wc,nextTick:function(){return new Promise(function(s){window.requestAnimationFrame(s);});},pathToRegexp:X0,},$0=function(){return window.location.origin;},Oa=function(s){return s===void 0&&(s=window.location.href),qc(s).port;},qc=function(s){var e,t=s.match(/:\d+/);if(t===null)/^http/.test(s)&&(e=80),/^https/.test(s)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10);}
var i,r=s.replace($0(),""),o={},a=r.indexOf("#");a>=0&&((i=r.slice(a+1)),(r=r.slice(0,a)));var l=r.indexOf("?");return(l>=0&&((o=Y0(r.slice(l+1))),(r=r.slice(0,l))),{hash:i,path:r,port:e,query:o});},Y0=function(s){return s.split("&").reduce(function(e,t){var n=t.split("=");return(e[n[0]]=n[1]),e;},{});},id=function(s){return(s===void 0&&(s=window.location.href),s.replace(/(\/#.*|\/|#.*)$/,""));},Kv={__proto__:null,getHref:function(){return window.location.href;},getOrigin:$0,getPort:Oa,getPath:function(s){return s===void 0&&(s=window.location.href),qc(s).path;},parse:qc,parseQuery:Y0,clean:id,};function Qv(s,e,t){return(e===void 0&&(e=2e3),new Promise(function(n,i){var r=new XMLHttpRequest();(r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE){if(r.status===200)n(r.responseText);else if(r.status){var o={status:r.status,statusText:r.statusText};t(s,o),i(o);}}}),(r.ontimeout=function(){var o=new Error("Timeout error ["+e+"]");t(s,o),i(o);}),(r.onerror=function(){var o=new Error("Fetch error");t(s,o),i(o);}),r.open("GET",s),(r.timeout=e),r.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),r.setRequestHeader("x-barba","yes"),r.send();}));}
var ew=function(s){return(!!s&&(typeof s=="object"||typeof s=="function")&&typeof s.then=="function");};function to(s,e){return(e===void 0&&(e={}),function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)
n[i]=arguments[i];var r=!1,o=new Promise(function(a,l){e.async=function(){return((r=!0),function(u,h){u?l(u):a(h);});};var c=s.apply(e,n);r||(ew(c)?c.then(a,l):a(c));});return o;});}
var Ki=new((function(s){function e(){var n;return(((n=s.call(this)||this).logger=new $r("@barba/core")),(n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after",]),(n.registered=new Map()),n.init(),n);}
lu(e,s);var t=e.prototype;return((t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(r,o){n.registered.has(i)||n.registered.set(i,new Set()),n.registered.get(i).add({ctx:o||{},fn:r});});});}),(t.do=function(n){for(var i=this,r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)
o[a-1]=arguments[a];if(this.registered.has(n)){var l=Promise.resolve();return(this.registered.get(n).forEach(function(c){l=l.then(function(){return to(c.fn,c.ctx).apply(void 0,o);});}),l.catch(function(c){i.logger.debug("Hook error ["+n+"]"),i.logger.error(c);}));}
return Promise.resolve();}),(t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i];}),this.init();}),(t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,r){return n.push(r);}),this.logger.info("Registered hooks: "+n.join(","));}),e);})(Wv))(),j0=(function(){function s(e){if(((this.P=[]),typeof e=="boolean"))this.g=e;else{var t=Array.isArray(e)?e:[e];this.P=t.map(function(n){return X0(n);});}}
return((s.prototype.checkHref=function(e){if(typeof this.g=="boolean")return this.g;var t=qc(e).path;return this.P.some(function(n){return n.exec(t)!==null;});}),s);})(),tw=(function(s){function e(n){var i;return((i=s.call(this,n)||this).k=new Map()),i;}
lu(e,s);var t=e.prototype;return((t.set=function(n,i,r){return(this.k.set(n,{action:r,request:i}),{action:r,request:i});}),(t.get=function(n){return this.k.get(n);}),(t.getRequest=function(n){return this.k.get(n).request;}),(t.getAction=function(n){return this.k.get(n).action;}),(t.has=function(n){return!this.checkHref(n)&&this.k.has(n);}),(t.delete=function(n){return this.k.delete(n);}),(t.update=function(n,i){var r=Xr({},this.k.get(n),{},i);return this.k.set(n,r),r;}),e);})(j0),nw=function(){return!window.history.pushState;},iw=function(s){return!s.el||!s.href;},rw=function(s){var e=s.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;},sw=function(s){var e=s.el;return e.hasAttribute("target")&&e.target==="_blank";},ow=function(s){var e=s.el;return((e.protocol!==void 0&&window.location.protocol!==e.protocol)||(e.hostname!==void 0&&window.location.hostname!==e.hostname));},aw=function(s){var e=s.el;return e.port!==void 0&&Oa()!==Oa(e.href);},lw=function(s){var e=s.el;return e.getAttribute&&typeof e.getAttribute("download")=="string";},cw=function(s){return s.el.hasAttribute(ci.prefix+"-"+ci.prevent);},uw=function(s){return Boolean(s.el.closest("["+ci.prefix+"-"+ci.prevent+'="all"]'));},hw=function(s){var e=s.href;return id(e)===id()&&Oa(e)===Oa();},dw=(function(s){function e(n){var i;return(((i=s.call(this,n)||this).suite=[]),(i.tests=new Map()),i.init(),i);}
lu(e,s);var t=e.prototype;return((t.init=function(){this.add("pushState",nw),this.add("exists",iw),this.add("newTab",rw),this.add("blank",sw),this.add("corsDomain",ow),this.add("corsPort",aw),this.add("download",lw),this.add("preventSelf",cw),this.add("preventAll",uw),this.add("sameUrl",hw,!1);}),(t.add=function(n,i,r){r===void 0&&(r=!0),this.tests.set(n,i),r&&this.suite.push(n);}),(t.run=function(n,i,r,o){return this.tests.get(n)({el:i,event:r,href:o});}),(t.checkLink=function(n,i,r){var o=this;return this.suite.some(function(a){return o.run(a,n,i,r);});}),e);})(j0),Zu=(function(s){function e(t,n){var i;n===void 0&&(n="Barba error");for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)
o[a-2]=arguments[a];return(((i=s.call.apply(s,[this].concat(o))||this).error=t),(i.label=n),Error.captureStackTrace&&Error.captureStackTrace((function(l){if(l===void 0)
throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l;})(i),e),(i.name="BarbaError"),i);}
return lu(e,s),e;})(U0(Error)),fw=(function(){function s(t){t===void 0&&(t=[]),(this.logger=new $r("@barba/core")),(this.all=[]),(this.page=[]),(this.once=[]),(this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"},]),t&&(this.all=this.all.concat(t)),this.update();}
var e=s.prototype;return((e.add=function(t,n){switch(t){case "rule":this.A.splice(n.position||0,0,n.value);break;case "transition":default:this.all.push(n);}
this.update();}),(e.resolve=function(t,n){var i=this;n===void 0&&(n={});var r=n.once?this.once:this.page;r=r.filter(n.self?function(d){return d.name&&d.name==="self";}:function(d){return!d.name||d.name!=="self";});var o=new Map(),a=r.find(function(d){var f=!0,p={};return(!(!n.self||d.name!=="self")||(i.A.reverse().forEach(function(g){f&&((f=i.R(d,g,t,p)),d.from&&d.to&&(f=i.R(d,g,t,p,"from")&&i.R(d,g,t,p,"to")),d.from&&!d.to&&(f=i.R(d,g,t,p,"from")),!d.from&&d.to&&(f=i.R(d,g,t,p,"to")));}),o.set(d,p),f));}),l=o.get(a),c=[];if((c.push(n.once?"once":"page"),n.self&&c.push("self"),l)){var u,h=[a];Object.keys(l).length>0&&h.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(h));}else this.logger.info("No transition found ["+c.join(",")+"]");return a;}),(e.update=function(){var t=this;(this.all=this.all.map(function(n){return t.T(n);}).sort(function(n,i){return n.priority-i.priority;}).reverse().map(function(n){return delete n.priority,n;})),(this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0;})),(this.once=this.all.filter(function(n){return n.once!==void 0;}));}),(e.R=function(t,n,i,r,o){var a=!0,l=!1,c=t,u=n.name,h=u,d=u,f=u,p=o?c[o]:c,g=o==="to"?i.next:i.current;if(o?p&&p[u]:p[u]){switch(n.type){case "strings":default:var y=Array.isArray(p[h])?p[h]:[p[h]];g[h]&&y.indexOf(g[h])!==-1&&(l=!0),y.indexOf(g[h])===-1&&(a=!1);break;case "object":var _=Array.isArray(p[d])?p[d]:[p[d]];g[d]?(g[d].name&&_.indexOf(g[d].name)!==-1&&(l=!0),_.indexOf(g[d].name)===-1&&(a=!1)):(a=!1);break;case "function":p[f](i)?(l=!0):(a=!1);}
l&&(o?((r[o]=r[o]||{}),(r[o][u]=c[o][u])):(r[u]=c[u]));}
return a;}),(e.O=function(t,n,i){var r=0;return((t[n]||(t.from&&t.from[n])||(t.to&&t.to[n]))&&((r+=Math.pow(10,i)),t.from&&t.from[n]&&(r+=1),t.to&&t.to[n]&&(r+=2)),r);}),(e.T=function(t){var n=this;t.priority=0;var i=0;return(this.A.forEach(function(r,o){i+=n.O(t,r.name,o+1);}),(t.priority=i),t);}),s);})(),pw=(function(){function s(t){t===void 0&&(t=[]),(this.logger=new $r("@barba/core")),(this.S=!1),(this.store=new fw(t));}
var e=s.prototype;return((e.get=function(t,n){return this.store.resolve(t,n);}),(e.doOnce=function(t){var n=t.data,i=t.transition;try{var r=function(){o.S=!1;},o=this,a=i||{};o.S=!0;var l=Ks(function(){return Promise.resolve(o.j("beforeOnce",n,a)).then(function(){return Promise.resolve(o.once(n,a)).then(function(){return Promise.resolve(o.j("afterOnce",n,a)).then(function(){});});});},function(c){(o.S=!1),o.logger.debug("Transition error [before/after/once]"),o.logger.error(c);});return Promise.resolve(l&&l.then?l.then(r):r());}catch(c){return Promise.reject(c);}}),(e.doPage=function(t){var n=t.data,i=t.transition,r=t.page,o=t.wrapper;try{var a=function(f){if(l)return f;c.S=!1;},l=!1,c=this,u=i||{},h=u.sync===!0||!1;c.S=!0;var d=Ks(function(){function f(){return Promise.resolve(c.j("before",n,u)).then(function(){var g=!1;function y(m){return g?m:Promise.resolve(c.remove(n)).then(function(){return Promise.resolve(c.j("after",n,u)).then(function(){});});}
var _=(function(){if(h)
return Ks(function(){return Promise.resolve(c.add(n,o)).then(function(){return Promise.resolve(c.j("beforeLeave",n,u)).then(function(){return Promise.resolve(c.j("beforeEnter",n,u)).then(function(){return Promise.resolve(Promise.all([c.leave(n,u),c.enter(n,u)])).then(function(){return Promise.resolve(c.j("afterLeave",n,u)).then(function(){return Promise.resolve(c.j("afterEnter",n,u)).then(function(){});});});});});});},function(x){if(c.M(x))
throw new Zu(x,"Transition error [sync]");});var m=function(x){return g?x:Ks(function(){var M=(function(){if(w!==!1)
return Promise.resolve(c.add(n,o)).then(function(){return Promise.resolve(c.j("beforeEnter",n,u)).then(function(){return Promise.resolve(c.enter(n,u,w)).then(function(){return Promise.resolve(c.j("afterEnter",n,u)).then(function(){});});});});})();if(M&&M.then)return M.then(function(){});},function(M){if(c.M(M))
throw new Zu(M,"Transition error [before/after/enter]");});},w=!1,v=Ks(function(){return Promise.resolve(c.j("beforeLeave",n,u)).then(function(){return Promise.resolve(Promise.all([c.leave(n,u),Wc(r,n)]).then(function(x){return x[0];})).then(function(x){return((w=x),Promise.resolve(c.j("afterLeave",n,u)).then(function(){}));});});},function(x){if(c.M(x))
throw new Zu(x,"Transition error [before/after/leave]");});return v&&v.then?v.then(m):m(v);})();return _&&_.then?_.then(y):y(_);});}
var p=(function(){if(h)return Promise.resolve(Wc(r,n)).then(function(){});})();return p&&p.then?p.then(f):f();},function(f){throw(((c.S=!1),f.name&&f.name==="BarbaError"?(c.logger.debug(f.label),c.logger.error(f.error),f):(c.logger.debug("Transition error [page]"),c.logger.error(f),f)));});return Promise.resolve(d&&d.then?d.then(a):a(d));}catch(f){return Promise.reject(f);}}),(e.once=function(t,n){try{return Promise.resolve(Ki.do("once",t,n)).then(function(){return n.once?to(n.once,n)(t):Promise.resolve();});}catch(i){return Promise.reject(i);}}),(e.leave=function(t,n){try{return Promise.resolve(Ki.do("leave",t,n)).then(function(){return n.leave?to(n.leave,n)(t):Promise.resolve();});}catch(i){return Promise.reject(i);}}),(e.enter=function(t,n,i){try{return Promise.resolve(Ki.do("enter",t,n)).then(function(){return n.enter?to(n.enter,n)(t,i):Promise.resolve();});}catch(r){return Promise.reject(r);}}),(e.add=function(t,n){try{return(Yr.addContainer(t.next.container,n),Ki.do("nextAdded",t),Promise.resolve());}catch(i){return Promise.reject(i);}}),(e.remove=function(t){try{return(Yr.removeContainer(t.current.container),Ki.do("currentRemoved",t),Promise.resolve());}catch(n){return Promise.reject(n);}}),(e.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status;}),(e.j=function(t,n,i){try{return Promise.resolve(Ki.do(t,n,i)).then(function(){return i[t]?to(i[t],i)(n):Promise.resolve();});}catch(r){return Promise.reject(r);}}),cf(s,[{key:"isRunning",get:function(){return this.S;},set:function(t){this.S=t;},},{key:"hasOnce",get:function(){return this.store.once.length>0;},},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self";});},},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return(t.to&&!t.to.route)||t.sync;});},},]),s);})(),mw=(function(){function s(e){var t=this;(this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"]),(this.byNamespace=new Map()),e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n);}),this.names.forEach(function(n){Ki[n](t.L(n));}));}
return((s.prototype.L=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,r=t.byNamespace.get(i.namespace);return r&&r[e]?to(r[e],r)(n):Promise.resolve();};}),s);})();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(s){var e=this;do{if(e.matches(s))return e;e=e.parentElement||e.parentNode;}while(e!==null&&e.nodeType===1);return null;});var gw={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}},},_w=new((function(){function s(){(this.version=Vv),(this.schemaPage=gw),(this.Logger=$r),(this.logger=new $r("@barba/core")),(this.plugins=[]),(this.hooks=Ki),(this.dom=Yr),(this.helpers=Zv),(this.history=q0),(this.request=Qv),(this.url=Kv);}
var e=s.prototype;return((e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.');}),(e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,r=i===void 0?[]:i,o=n.views,a=o===void 0?[]:o,l=n.schema,c=l===void 0?ci:l,u=n.requestError,h=n.timeout,d=h===void 0?2e3:h,f=n.cacheIgnore,p=f!==void 0&&f,g=n.prefetchIgnore,y=g!==void 0&&g,_=n.preventRunning,m=_!==void 0&&_,w=n.prevent,v=w===void 0?null:w,x=n.debug,M=n.logLevel;if(($r.setLevel((x!==void 0&&x)===!0?"debug":M===void 0?"off":M),this.logger.info(this.version),Object.keys(c).forEach(function(D){ci[D]&&(ci[D]=c[D]);}),(this.$=u),(this.timeout=d),(this.cacheIgnore=p),(this.prefetchIgnore=y),(this.preventRunning=m),(this._=this.dom.getWrapper()),!this._))
throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var S=this.data.current;if(!S.container)
throw new Error("[@barba/core] No Barba container found");if(((this.cache=new tw(p)),(this.prevent=new dw(y)),(this.transitions=new pw(r)),(this.views=new mw(a)),v!==null)){if(typeof v!="function")
throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",v);}
this.history.init(S.url.href,S.namespace),(this.B=this.B.bind(this)),(this.U=this.U.bind(this)),(this.D=this.D.bind(this)),this.F(),this.plugins.forEach(function(D){return D.init();});var T=this.data;(T.trigger="barba"),(T.next=T.current),(T.current=Xr({},this.schemaPage)),this.hooks.do("ready",T),this.once(T),this.q();}),(e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),(this.plugins=[]);}),(e.force=function(t){window.location.assign(t);}),(e.go=function(t,n,i){var r;if((n===void 0&&(n="barba"),this.transitions.isRunning))
this.force(t);else if(!(r=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)
return((n=this.history.change(t,n,i)),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,r));}),(e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){});}
var r=(function(){if(n.transitions.hasOnce){var o=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:o,data:t})).then(function(){});}})();return r&&r.then?r.then(i):i();});}catch(i){return Promise.reject(i);}}),(e.page=function(t,n,i){try{var r=function(){var c=o.data;return Promise.resolve(o.hooks.do("page",c)).then(function(){var u=Ks(function(){var h=o.transitions.get(c,{once:!1,self:i});return Promise.resolve(o.transitions.doPage({data:c,page:a,transition:h,wrapper:o._,})).then(function(){o.q();});},function(){$r.getLevel()===0&&o.force(c.current.url.href);});if(u&&u.then)return u.then(function(){});});},o=this;(o.data.next.url=Xr({href:t},o.url.parse(t))),(o.data.trigger=n);var a=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,l=(function(){if(o.transitions.shouldWait)
return Promise.resolve(Wc(a,o.data)).then(function(){});})();return Promise.resolve(l&&l.then?l.then(r):r());}catch(c){return Promise.reject(c);}}),(e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)
i[r-1]=arguments[r];var o=i[0],a=i[1],l=this.cache.getAction(o);return(this.cache.delete(o),!((this.$&&this.$(t,l,o,a)===!1)||(l==="click"&&this.force(o),1)));}),(e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch(function(i){n.logger.error(i);}),"prefetch");}),(e.F=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D);}),(e.H=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D);}),(e.B=function(t){var n=this,i=this.I(t);if(i){var r=this.dom.getHref(i);this.prevent.checkHref(r)||this.cache.has(r)||this.cache.set(r,this.request(r,this.timeout,this.onRequestError.bind(this,i)).catch(function(o){n.logger.error(o);}),"enter");}}),(e.U=function(t){var n=this.I(t);if(n)
return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t);}),(e.D=function(t){this.go(this.url.getHref(),"popstate",t);}),(e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n;}),(e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:Xr({href:t},this.url.parse(t)),};(this.C={current:n,next:Xr({},this.schemaPage),trigger:void 0,}),this.hooks.do("reset",this.data);}),cf(s,[{key:"data",get:function(){return this.C;},},{key:"wrapper",get:function(){return this._;},},]),s);})())();ze.registerPlugin($e,ln);function pf(){let s=document.querySelector(".side-section__back a");window.location.href.startsWith("https://www.baincapital.com/technology/innerPortfolio.html")||($e.create({trigger:".side-section__back",start:"top top+=210",endTrigger:".content",end:"bottom bottom",onLeaveBack:()=>{(s.onclick=(e)=>e.preventDefault()),s.click();},onLeave:()=>{(s.onclick=(e)=>e.preventDefault()),s.click();},}),(s.onclick=(e)=>{e.preventDefault();}));}
ze.registerPlugin($e,ln);function Xc(){setTimeout(()=>{ze.to([".rocket-bg",".rocket-bg1",".rocket-bg2",".rocket"],{y:"-100%",duration:1,ease:"power4.out",stagger:0.4,});},800),ze.timeline().to([".rocket-bg"],{scaleX:1.02,repeat:-1,yoyo:!0,duration:1,ease:"sine",}).to([".rocket-bg1"],{scale:1.02,repeat:-1,yoyo:!0,duration:3,ease:"sine",}).to([".rocket-bg2"],{scale:1.02,repeat:-1,yoyo:!0,duration:5,ease:"sine",});}
function J0(){document.querySelector("p.description-intro:nth-child(4)").innerHTML=document.querySelector("p.description-intro:nth-child(4)").innerText;}
const Z0="https://www.baincapital.com/tech-corporate-bios",K0="https://www.baincapital.com/bc-corporate-portfolio",yw="https://www.baincapital.com/bc-corporate-locations",xw="https://www.baincapital.com/bc-corp-portfolio-hq/226",vw="https://www.baincapital.com/bc-corp-region",ww="https://www.baincapital.com/bc-highlighted-company-portfolio",bw="https://www.baincapital.com/bc-highlighted-portfolio-page";ze.registerPlugin($e,ln);async function Q0(){var s=new URLSearchParams(window.location.search);let e=s.get("team"),t=localStorage.getItem("bio");(t=JSON.parse(t)),((t&&t.Title.toLowerCase()!==e.replace(/-/g," "))||!t)&&(await fetch(Z0).then((g)=>g.json()).then((g)=>{let y=[];g.nodes.map((w,v)=>{y.push(w.node);});let m=y.find((w)=>w.Title.toLowerCase()===e.replace(/-/g," "));m&&((m=JSON.stringify(m)),localStorage.setItem("bio",m));}).catch((g)=>{console.error(g);}));let n=document.querySelector(".people-bios"),i=n.querySelector(".people-bios__title"),r=n.querySelector(".people-bios__position"),o=n.querySelector(".people-bios__business"),a=n.querySelector(".people-bios__city"),l=n.querySelector(".people-bios-details__pic"),c=n.querySelector(".people-bios-details-description__experience"),u=n.querySelector(".people-bios-details-description__education"),h=n.querySelector(".people-bios__container"),d=localStorage.getItem("bio");d?(d=JSON.parse(d)):(window.location="https://www.baincapital.com/technology/");var f=window.location.href,p=f.replace("bios-template.html","");window.history.replaceState("","",p),d.Education==null&&(document.querySelector(".people-bios-details-description__education").style.display="none"),new Promise((g)=>{(i.innerText=d.Title),(r.innerText=d.Designation),(o.innerText=d.Business),(a.innerText=d.Location),(l.src=d.Image!=null?d.Image.src:"https://www.baincapital.com/technology/img/plug.jpg"),(c.innerHTML+=d.Experience.replace(/&lt;\/?p&gt;/g,"").replace(/\.&lt;\?p&gt;/g,"")),(u.innerHTML+=d.Education!=null?d.Education.replace(/&lt;\/?p&gt;/g,"").replace(/\.&lt;\?p&gt;/g,""):""),g();}).then(()=>{ze.timeline().to(h,{opacity:1}).from([i,r,o,a,l,c,u],{opacity:0,y:50,stagger:0.2});});}
ze.registerPlugin($e,ln);async function e_(){var s=new URLSearchParams(window.location.search);let e=s.get("portfolio"),t=localStorage.getItem("portfolio");(t=JSON.parse(t)),((t&&t.Title.toLowerCase().replace(/[^\w\s-]/g,"")!==e.replace(/-/g," "))||!t)&&(await fetch(K0).then((v)=>v.json()).then((v)=>{let x=[];v.nodes.map((T,D)=>{x.push(T.node);});let S=x.find((T)=>T.Title.toLowerCase().replace(/[^\w\s-]/g,"")===e.replace(/-/g," "));S&&((S=JSON.stringify(S)),localStorage.setItem("portfolio",S));}).catch((v)=>{console.error(v);}));let n=document.querySelector(".portfolio-detail-section"),i=n.querySelector(".section-title"),r=n.querySelector(".industry"),o=n.querySelector(".status"),a=n.querySelector(".image"),l=n.querySelector(".year"),c=n.querySelector(".overview-portfolio"),u=n.querySelector(".portfolio-anchor"),h=n.querySelector(".region"),d=n.querySelector(".location"),f=n.querySelector(".container"),p=localStorage.getItem("portfolio");p&&(p=JSON.parse(p)),(l.innerHTML=p.field_portfolio_year);let g=l.innerText;l.innerHTML==""||l.innerHTML==null?(document.querySelector("#liYear").style.display="none"):(l.innerHTML=g.split("-")[0]),(h.innerHTML=p.Region),(d.innerHTML=p["Portfolio HQ(s)"]),(c.innerHTML=p.Body),(u.href=p["Portfolio Website Link"]);var y=window.location.href,_=y.replace("portfolio-template.html","");window.history.replaceState("","",_),(u.innerHTML=p["Portfolio Website Link"]),new Promise((v)=>{(i.innerText=p.Title),(r.innerHTML=p["Sub Vertical"]),(o.innerText=p["Portfolio Status"]),(d.innerText=p["Portfolio HQs"]),(a.alt=p.Title),(a.src=p["Portfolio Logo"]!=null?p["Portfolio Logo"].src:"./public/img/Arosa-logo_1.svg"),(l.innerHTML=g.split("-")[0]),(h.innerHTML=p.Region),v();}).then(()=>{ze.timeline().to(f,{opacity:1}).from([i,a,o,l,d,h,r],{opacity:0,y:50,stagger:0.2});});let m=document.getElementById("portfolio-detail-logo-name"),w=document.querySelector(".portfolio_image");p["Portfolio Logo"]==null||p["Portfolio Logo"]==""?((w.style.display="none"),(m.style.display="block"),(m.innerHTML=p.Title)):(w.src=p["Portfolio Logo"]!=null?p["Portfolio Logo"].src:"/public/img/Arosa-logo_1.svg");}
ze.registerPlugin(ln,$e);function mf(){let s,e=!1;function t(o,a){let l=!1;if(window.XMLHttpRequest)
(l=new XMLHttpRequest()),l.overrideMimeType&&l.overrideMimeType("text/json");else if(window.ActiveXObject)
try{l=new ActiveXObject("Msxml2.XMLHTTP");}catch{try{l=new ActiveXObject("Microsoft.XMLHTTP");}catch{}}
if(!l)return alert("Failed : ( Unable to instantiate XMLHTTP class"),!1;(l.onreadystatechange=function(){n(l,a);}),l.open("GET",o,!0),l.send(null);}
t(Z0,i);function n(o,a){o.readyState==4&&(o.status==200?new Promise((c)=>{(s=JSON.parse(o.responseText).nodes),(s=Array.from(new Set(s.map(JSON.stringify))).map(JSON.parse)),c();}).then(()=>a()):alert("There was a problem with the request."));}
function i(){r();}
function r(o){var y;(y=localStorage.getItem("expScroll"))!=null,document.querySelector(".expirience"),document.querySelector(".scroll-button-expirience");let a=document.querySelector(".expirience-page");document.querySelectorAll(".expirience-page-subsections-subsection");let l=document.querySelector(".expirience-page-cards"),c,u=[],h="ALL",d=0,f=document.querySelector(".expirience-page-nav__search");new Promise((_)=>{if(!d&&!document.querySelectorAll(".expirience-page-cards-card")[3]){let v=function(){let x=document.querySelector(".expirience-page-nav__search-business:first-child");document.querySelectorAll(".expirience-page-nav__search").forEach((S,T,D)=>{let I=S.querySelectorAll(".expirience-page-nav__search-business:not(:first-child)"),b=ze.timeline({paused:!0});x.addEventListener("click",()=>b.reverse()),I.forEach((O,H)=>{O.addEventListener("click",()=>{b.reverse();}),b.to(O,{opacity:1,y:H*40+40,duration:0.2+H/30,backgroundColor:"rgba(0,0,0,.8)",overwrite:"auto",ease:"sine",},"<");});const R=document.querySelector(".expirience-page-nav__search-business.active");let F=!1;document.querySelectorAll(".expirience-page-nav__search-business"),document.addEventListener("click",(O)=>{S.contains(O.target)?F?(b.reverse(),(F=!1),(e=!1),R.classList.remove("rotate")):(b.play(),(F=!0),(e=!0),R.classList.add("rotate")):F&&(b.reverse(),(F=!1),(e=!1),R.classList.remove("rotate"));});});};var m=v;let w=new Set();for(let x in s)w.add(s[x].node.Business);Array.from(w).filter((x)=>x.search(",")===-1).forEach((x,M,S)=>{if(x!="Credit"){let T=document.createElement("div");T.classList.add("expirience-page-nav__search-business"),(T.textContent=x),f.appendChild(T);}}),v();for(let x=0;x<s.length;x++){let M=s[x].node.Image!==null?s[x].node.Image.src:"https://www.baincapital.com/technology/img/plug.jpg";(c=document.createElement("a")),(c.style.order=x.toString()),c.classList.add("expirience-page-cards-card"),(c.href=`./bios-template.html?team=${s[x].node.Title.toLowerCase().replace(/ /g,"-")}`),(c.innerHTML=`<div class="expirience-page-cards-card__img">
<img src="https://www.baincapital.com/technology/img/plug.jpg" alt="photo" data-src=`+
M+
` >
<div class="bleach"></div>
</div>
<h4 class="expirience-page-cards-card__title">`+
s[x].node.Title+
`</h4>
<p class="expirience-page-cards-card__desc">`+
s[x].node.Designation+
`</p>
<p class="expirience-page-cards-card__desc expirience-page-cards-card__desc-bis">`+
s[x].node.Business+
`</p>
<p class="expirience-page-cards-card__desc">`+
s[x].node.Location+
"</p> "),l.appendChild(c),u.push(c),c.addEventListener("click",()=>{let S=JSON.stringify(s[x].node);localStorage.setItem("bio",S);});}
a.getBoundingClientRect().height,(d=1),_();}}).then(()=>{let _={threshold:0.1},m=function(v,x){v.forEach((M)=>{if(M.isIntersecting){let S=M.target.querySelector("img");S.src=S.dataset.src;}});},w=new IntersectionObserver(m,_);u.forEach((v)=>w.observe(v));}).then(()=>{document.querySelectorAll(".expirience-page-cards-card");}),document.querySelectorAll(".expirience-page-nav__search-business").forEach((_,m,w)=>_.addEventListener("click",()=>{e==!0&&(w.forEach((v)=>v.classList.remove("active")),_.classList.add("active"),(w[0].textContent=_.textContent),(h=_.textContent),u.forEach((v)=>{v.querySelector(".expirience-page-cards-card__desc-bis").textContent.search(h)>-1||h==="ALL"?(v.style.display="flex"):(v.style.display="none");}),(e=!1));}));}}
function $p(s,e,t){let n=[],i=[];if((s.map((S)=>{n.push(S.node);}),e.map((S)=>{i.push(S.node);}),document.getElementById("chartInnerDiv"))){var r=am5.Root.new("chartInnerDiv");r._logo.dispose(),r.setThemes([am5themes_Animated.new(r)]);var o=r.container.children.push(am5map.MapChart.new(r,{panX:"rotateX",panY:"none",projection:am5map.geoOrthographic(),paddingBottom:0,paddingTop:0,paddingLeft:0,paddingRight:0,maxZoomLevel:1,minZoomLevel:1,})),a=o.series.push(am5map.MapPolygonSeries.new(r,{})),a=o.series.push(am5map.MapPolygonSeries.new(r,{}));a.mapPolygons.template.setAll({fill:am5.color("#2b65c5"),fillOpacity:1,strokeOpacity:0,}),a.data.push({geometry:am5map.getGeoRectangle(90,180,-90,-180)});var l=o.series.push(am5map.MapPolygonSeries.new(r,{geoJSON:am5geodata_worldLow}));l.mapPolygons.template.setAll({fill:am5.color("#e5e5e5"),fillOpacity:1,strokeWidth:0.5,stroke:am5.color("#2b65c5"),});var c=o.series.push(am5map.MapPolygonSeries.new(r,{}));c.mapPolygons.template.setAll({templateField:"polygonTemplate"}),(a.alwaysShowTooltip=!0);for(var u=[],h=0;h<n.length;++h)
if(n[h].Latitude.trim()!==""){let S="";switch(n[h].name){case "Americas":S="North America";break;case "Europe":S="Europe";break;case "Asia-Pacific":S="Asia";break;default:S=n[h].name;break;}
var d={title:S,latitude:n[h].Latitude,longitude:n[h].Longitude,description:n[h]["Term description"],polygonTemplate:{fill:"#FFFF00",tooltipHTML:`<div class = "globe-tooltip">
                <div class = "globe-tooltip-heading">
                    <h3 class = "globe-heading">{title}</h3>
                </div>
                <div class = "globe-tooltip-description"> 
                    <p class = "globe-description">{description}</p>
                </div>
            </div>`,},radius:3,};u.push(d);}
for(var h=0;h<Object.keys(t).length;++h){var f=t,p=Object.keys(f),g=p[h],y=Object.values(f[g].Latitude),w=0;y.map((D)=>{var I=D.split("\xB0")[0];w+=+I;});var _=w/y.length,m=Object.values(f[g].Longitude),w=0;m.map((D)=>{var I=D.split("\xB0")[0];w+=+I;});var v=w/m.length,x=f[g],M=Object.values(x["Portfolio Title"]),d={title:M.toString(),latitude:_.toString(),longitude:v.toString(),description:"",polygonTemplate:{fill:"#FFFFEC",tooltipHTML:`<div class = "globe-tooltip">
                    <div class = "globe-tooltip-heading">
                    <h3 class = "globe-heading">{title}</h3>
                </div>
              
            </div>`,},radius:1,};u.push(d);}
for(var h=0;h<i.length;++h){var d={title:i[h].title,latitude:i[h].Latitude,longitude:i[h].Longitude,description:"",polygonTemplate:{fill:"#479ce0",tooltipHTML:`<div class = "globe-tooltip">
                    <div class = "globe-tooltip-heading">
                    <h3 class = "globe-heading">{title}</h3>
                </div>
                   
                </div>`,},radius:1.5,};u.push(d);}
l.events.on("datavalidated",function(){c.data.clear(),u.map((S)=>{var T=am5map.getGeoCircle({latitude:S.latitude,longitude:S.longitude},S.radius);c.data.push({title:S.title,description:S.description,polygonTemplate:S.polygonTemplate,geometry:T,});});}),o.animate({key:"rotationX",from:0,to:360,duration:3e4,loops:1/0,}),o.appear(1e3,100);}}
ze.registerPlugin(ln,$e);function gf(){function s(a){var l=new URLSearchParams(window.location.search);return l.get(a);}
function e(a,l){var c=s(a);c&&window.location.search===`?${a}=${c}`&&(window.location.href=`${l}?${a}=${c}`);}
e("team","./bios-template.html"),e("portfolio","https://www.baincapital.com/technology/portfolio-template.html"),$(document).ready(function(){setTimeout(()=>{$(".portfolio-sorting-wrap .dropdown .dropdown-menu a").on("click",function(){$(".portfolio-sorting-wrap .dropdown-menu a").removeClass("selected"),$(this).addClass("selected"),$(this).parent().parent().parent().find(".psorting").find(".selected-value").text($(this).text());});},1e3);});let t;function n(a,l){let c=!1;if(window.XMLHttpRequest)
(c=new XMLHttpRequest()),c.overrideMimeType&&c.overrideMimeType("text/json");else if(window.ActiveXObject)
try{c=new ActiveXObject("Msxml2.XMLHTTP");}catch{try{c=new ActiveXObject("Microsoft.XMLHTTP");}catch{}}
if(!c)return alert("Failed : ( Unable to instantiate XMLHTTP class"),!1;(c.onreadystatechange=function(){i(c,l);}),c.open("GET",a,!0),c.send(null);}
n(ww,r);function i(a,l){a.readyState==4&&(a.status==200?new Promise((u)=>{(t=JSON.parse(a.responseText).nodes),(t=Array.from(new Set(t.map(JSON.stringify))).map(JSON.parse)),u();}).then(()=>l()):alert("There was a problem with the request."));}
function r(){o();}
function o(a){(window.location.href.startsWith("http://playground.lousch.net/baincap/bctech/Supporting-Innovation.html")||window.location.href.startsWith("https://www.baincapital.com/technology/Strategic-Investors.html")||window.location.href.startsWith("https://www.baincapital.com/technology/capabilities.html"))&&window.scrollTo(0,0);let l=document.querySelector(".container-portfolio");document.querySelector(".selected-value");let c=document.querySelector(".portfolio-grid");document.querySelector(".grid-item"),document.getElementById("yearDropdownMenu"),c&&l.removeChild(c);let u=[];t.map((f,p)=>{u.push(f.node);});let h=[];u.filter((f)=>{f["Highlighted company"]=="Yes"&&h.push(f);}),h.sort((f,p)=>f.Title.toLowerCase()>p.Title.toLowerCase()?1:f.Title.toLowerCase()<p.Title.toLowerCase()?-1:0);let d=document.createElement("div");d.classList.add("portfolio-grid","row"),(d.style.marginTop="0px"),l.appendChild(d),h.map((f,p)=>{let g=document.createElement("a");if((g.classList.add("col-lg-3","col-md-4","grid-item"),f.Body!=null)){var y=/[^\w\s-]/g;let M=f.Title.toLowerCase().replace(/ /g,"-");M.replace(y,""),g.setAttribute("href",`https://www.baincapital.com/technology/portfolio-template.html?portfolio=${M.replace(y,"")}`);}
d.appendChild(g);let _=document.createElement("div");_.classList.add("media"),g.appendChild(_);let m=document.createElement("div");m.classList.add("media-img"),_.appendChild(m);let w=document.createElement("div");m.appendChild(w);let v=document.createElement("img"),x=document.createElement("span");if((x.setAttribute("class","media-logo-name"),f["White Logo"]==null||f["White Logo"]==""?f["Portfolio Logo"]==null||f["Portfolio Logo"]==""?((x.innerHTML=f.Title),w.appendChild(x)):((v.src=f["Portfolio Logo"].src),w.appendChild(v)):((v.src=f["White Logo"].src),w.appendChild(v),w.setAttribute("class","black-background")),f.Body!=null)){let M="portfolioAnchor",S=f.Body.replace(/<a.*?href="(.*?)".*?>(.*?)<\/a>/gi,'<a href="$1" id="'+M+'">$2</a>');f.Body=S;}
g.addEventListener("click",()=>{let M=JSON.stringify(f);localStorage.setItem("portfolio",M);}),g.addEventListener("contextmenu",()=>{let M=JSON.stringify(f);return localStorage.setItem("portfolio",M),!1;},!1);});}}
const nl="138",kr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t_=0,rd=1,n_=2,Mw=3,Sw=0,_f=1,i_=2,no=3,ds=0,Lt=1,fs=2,yf=1,Tw=2,ui=0,rs=1,$c=2,sd=3,od=4,r_=5,Hr=100,s_=101,o_=102,ad=103,ld=104,a_=200,l_=201,c_=202,u_=203,xf=204,vf=205,h_=206,d_=207,f_=208,p_=209,m_=210,g_=0,__=1,y_=2,Yc=3,x_=4,v_=5,w_=6,b_=7,il=0,M_=1,S_=2,Bi=0,T_=1,E_=2,A_=3,C_=4,L_=5,cu=300,dr=301,fr=302,ka=303,Na=304,Xo=306,rl=307,za=1e3,dn=1001,Ua=1002,Ot=1003,jc=1004,Ew=1004,Jc=1005,Aw=1005,Ke=1006,wf=1007,Cw=1007,ws=1008,Lw=1008,Zn=1009,P_=1010,R_=1011,Lo=1012,D_=1013,xo=1014,Ri=1015,ss=1016,I_=1017,B_=1018,or=1020,F_=1021,O_=1022,Xt=1023,k_=1024,N_=1025,ar=1026,pr=1027,z_=1028,U_=1029,H_=1030,G_=1031,V_=1033,vc=33776,wc=33777,bc=33778,Mc=33779,cd=35840,ud=35841,hd=35842,dd=35843,W_=36196,fd=37492,pd=37496,md=37808,gd=37809,_d=37810,yd=37811,xd=37812,vd=37813,wd=37814,bd=37815,Md=37816,Sd=37817,Td=37818,Ed=37819,Ad=37820,Cd=37821,Ld=36492,q_=2200,X_=2201,$_=2202,Ha=2300,Ga=2301,Sc=2302,jr=2400,Jr=2401,Va=2402,uu=2500,bf=2501,Y_=0,Pw=1,Rw=2,Kn=3e3,ot=3001,Mf=3200,j_=3201,bs=0,J_=1,Dw=0,Tc=7680,Iw=7681,Bw=7682,Fw=7683,Ow=34055,kw=34056,Nw=5386,zw=512,Uw=513,Hw=514,Gw=515,Vw=516,Ww=517,qw=518,Z_=519,Po=35044,Ro=35048,Xw=35040,$w=35045,Yw=35049,jw=35041,Jw=35046,Zw=35050,Kw=35042,Qw="100",Pd="300 es",Zc=1035;class Hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t);}
hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1;}
removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1);}}
dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null;}}}
const Jt=[];for(let s=0;s<256;s++)Jt[s]=(s<16?"0":"")+s.toString(16);let Ml=1234567;const os=Math.PI/180,Wa=180/Math.PI;function Pn(){const s=(Math.random()*4294967295)|0,e=(Math.random()*4294967295)|0,t=(Math.random()*4294967295)|0,n=(Math.random()*4294967295)|0;return(Jt[s&255]+
Jt[(s>>8)&255]+
Jt[(s>>16)&255]+
Jt[(s>>24)&255]+
"-"+
Jt[e&255]+
Jt[(e>>8)&255]+
"-"+
Jt[((e>>16)&15)|64]+
Jt[(e>>24)&255]+
"-"+
Jt[(t&63)|128]+
Jt[(t>>8)&255]+
"-"+
Jt[(t>>16)&255]+
Jt[(t>>24)&255]+
Jt[n&255]+
Jt[(n>>8)&255]+
Jt[(n>>16)&255]+
Jt[(n>>24)&255]).toUpperCase();}
function Zt(s,e,t){return Math.max(e,Math.min(t,s));}
function Sf(s,e){return((s%e)+e)%e;}
function eb(s,e,t,n,i){return n+((s-e)*(i-n))/(t-e);}
function tb(s,e,t){return s!==e?(t-s)/(e-s):0;}
function ba(s,e,t){return(1-t)*s+t*e;}
function nb(s,e,t,n){return ba(s,e,1-Math.exp(-t*n));}
function ib(s,e=1){return e-Math.abs(Sf(s,e*2)-e);}
function rb(s,e,t){return s<=e?0:s>=t?1:((s=(s-e)/(t-e)),s*s*(3-2*s));}
function sb(s,e,t){return s<=e?0:s>=t?1:((s=(s-e)/(t-e)),s*s*s*(s*(s*6-15)+10));}
function ob(s,e){return s+Math.floor(Math.random()*(e-s+1));}
function ab(s,e){return s+Math.random()*(e-s);}
function lb(s){return s*(0.5-Math.random());}
function cb(s){return(s!==void 0&&(Ml=s%2147483647),(Ml=(Ml*16807)%2147483647),(Ml-1)/2147483646);}
function ub(s){return s*os;}
function hb(s){return s*Wa;}
function Rd(s){return(s&(s-1))===0&&s!==0;}
function K_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2));}
function Kc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2));}
function db(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case "XYX":s.set(a*u,l*h,l*d,a*c);break;case "YZY":s.set(l*d,a*u,l*h,a*c);break;case "ZXZ":s.set(l*h,l*d,a*u,a*c);break;case "XZX":s.set(a*u,l*p,l*f,a*c);break;case "YXY":s.set(l*f,a*u,l*p,a*c);break;case "ZYZ":s.set(l*p,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+
i);}}
var Yp=Object.freeze({__proto__:null,DEG2RAD:os,RAD2DEG:Wa,generateUUID:Pn,clamp:Zt,euclideanModulo:Sf,mapLinear:eb,inverseLerp:tb,lerp:ba,damp:nb,pingpong:ib,smoothstep:rb,smootherstep:sb,randInt:ob,randFloat:ab,randFloatSpread:lb,seededRandom:cb,degToRad:ub,radToDeg:hb,isPowerOfTwo:Rd,ceilPowerOfTwo:K_,floorPowerOfTwo:Kc,setQuaternionFromProperEuler:db,});class J{constructor(e=0,t=0){(this.x=e),(this.y=t);}
get width(){return this.x;}
set width(e){this.x=e;}
get height(){return this.y;}
set height(e){this.y=e;}
set(e,t){return(this.x=e),(this.y=t),this;}
setScalar(e){return(this.x=e),(this.y=e),this;}
setX(e){return(this.x=e),this;}
setY(e){return(this.y=e),this;}
setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e);}
return this;}
getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e);}}
clone(){return new this.constructor(this.x,this.y);}
copy(e){return(this.x=e.x),(this.y=e.y),this;}
add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):((this.x+=e.x),(this.y+=e.y),this);}
addScalar(e){return(this.x+=e),(this.y+=e),this;}
addVectors(e,t){return(this.x=e.x+t.x),(this.y=e.y+t.y),this;}
addScaledVector(e,t){return(this.x+=e.x*t),(this.y+=e.y*t),this;}
sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):((this.x-=e.x),(this.y-=e.y),this);}
subScalar(e){return(this.x-=e),(this.y-=e),this;}
subVectors(e,t){return(this.x=e.x-t.x),(this.y=e.y-t.y),this;}
multiply(e){return(this.x*=e.x),(this.y*=e.y),this;}
multiplyScalar(e){return(this.x*=e),(this.y*=e),this;}
divide(e){return(this.x/=e.x),(this.y/=e.y),this;}
divideScalar(e){return this.multiplyScalar(1/e);}
applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return((this.x=i[0]*t+i[3]*n+i[6]),(this.y=i[1]*t+i[4]*n+i[7]),this);}
min(e){return((this.x=Math.min(this.x,e.x)),(this.y=Math.min(this.y,e.y)),this);}
max(e){return((this.x=Math.max(this.x,e.x)),(this.y=Math.max(this.y,e.y)),this);}
clamp(e,t){return((this.x=Math.max(e.x,Math.min(t.x,this.x))),(this.y=Math.max(e.y,Math.min(t.y,this.y))),this);}
clampScalar(e,t){return((this.x=Math.max(e,Math.min(t,this.x))),(this.y=Math.max(e,Math.min(t,this.y))),this);}
clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)));}
floor(){return(this.x=Math.floor(this.x)),(this.y=Math.floor(this.y)),this;}
ceil(){return(this.x=Math.ceil(this.x)),(this.y=Math.ceil(this.y)),this;}
round(){return(this.x=Math.round(this.x)),(this.y=Math.round(this.y)),this;}
roundToZero(){return((this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x)),(this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y)),this);}
negate(){return(this.x=-this.x),(this.y=-this.y),this;}
dot(e){return this.x*e.x+this.y*e.y;}
cross(e){return this.x*e.y-this.y*e.x;}
lengthSq(){return this.x*this.x+this.y*this.y;}
length(){return Math.sqrt(this.x*this.x+this.y*this.y);}
manhattanLength(){return Math.abs(this.x)+Math.abs(this.y);}
normalize(){return this.divideScalar(this.length()||1);}
angle(){return Math.atan2(-this.y,-this.x)+Math.PI;}
distanceTo(e){return Math.sqrt(this.distanceToSquared(e));}
distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n;}
manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y);}
setLength(e){return this.normalize().multiplyScalar(e);}
lerp(e,t){return(this.x+=(e.x-this.x)*t),(this.y+=(e.y-this.y)*t),this;}
lerpVectors(e,t,n){return((this.x=e.x+(t.x-e.x)*n),(this.y=e.y+(t.y-e.y)*n),this);}
equals(e){return e.x===this.x&&e.y===this.y;}
fromArray(e,t=0){return(this.x=e[t]),(this.y=e[t+1]),this;}
toArray(e=[],t=0){return(e[t]=this.x),(e[t+1]=this.y),e;}
fromBufferAttribute(e,t,n){return(n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),(this.x=e.getX(t)),(this.y=e.getY(t)),this);}
rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return(this.x=r*n-o*i+e.x),(this.y=r*i+o*n+e.y),this;}
random(){return(this.x=Math.random()),(this.y=Math.random()),this;}*[Symbol.iterator](){yield this.x,yield this.y;}}
J.prototype.isVector2=!0;class Ut{constructor(){(this.elements=[1,0,0,0,1,0,0,0,1]),arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");}
set(e,t,n,i,r,o,a,l,c){const u=this.elements;return((u[0]=e),(u[1]=i),(u[2]=a),(u[3]=t),(u[4]=r),(u[5]=l),(u[6]=n),(u[7]=o),(u[8]=c),this);}
identity(){return this.set(1,0,0,0,1,0,0,0,1),this;}
copy(e){const t=this.elements,n=e.elements;return((t[0]=n[0]),(t[1]=n[1]),(t[2]=n[2]),(t[3]=n[3]),(t[4]=n[4]),(t[5]=n[5]),(t[6]=n[6]),(t[7]=n[7]),(t[8]=n[8]),this);}
extractBasis(e,t,n){return(e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this);}
setFromMatrix4(e){const t=e.elements;return(this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this);}
multiply(e){return this.multiplyMatrices(this,e);}
premultiply(e){return this.multiplyMatrices(e,this);}
multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],g=i[0],y=i[3],_=i[6],m=i[1],w=i[4],v=i[7],x=i[2],M=i[5],S=i[8];return((r[0]=o*g+a*m+l*x),(r[3]=o*y+a*w+l*M),(r[6]=o*_+a*v+l*S),(r[1]=c*g+u*m+h*x),(r[4]=c*y+u*w+h*M),(r[7]=c*_+u*v+h*S),(r[2]=d*g+f*m+p*x),(r[5]=d*y+f*w+p*M),(r[8]=d*_+f*v+p*S),this);}
multiplyScalar(e){const t=this.elements;return((t[0]*=e),(t[3]*=e),(t[6]*=e),(t[1]*=e),(t[4]*=e),(t[7]*=e),(t[2]*=e),(t[5]*=e),(t[8]*=e),this);}
determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return(t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l);}
invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=t*h+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return((e[0]=h*g),(e[1]=(i*c-u*n)*g),(e[2]=(a*n-i*o)*g),(e[3]=d*g),(e[4]=(u*t-i*l)*g),(e[5]=(i*r-a*t)*g),(e[6]=f*g),(e[7]=(n*l-c*t)*g),(e[8]=(o*t-n*r)*g),this);}
transpose(){let e;const t=this.elements;return((e=t[1]),(t[1]=t[3]),(t[3]=e),(e=t[2]),(t[2]=t[6]),(t[6]=e),(e=t[5]),(t[5]=t[7]),(t[7]=e),this);}
getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose();}
transposeIntoArray(e){const t=this.elements;return((e[0]=t[0]),(e[1]=t[3]),(e[2]=t[6]),(e[3]=t[1]),(e[4]=t[4]),(e[5]=t[7]),(e[6]=t[2]),(e[7]=t[5]),(e[8]=t[8]),this);}
setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return(this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this);}
scale(e,t){const n=this.elements;return((n[0]*=e),(n[3]*=e),(n[6]*=e),(n[1]*=t),(n[4]*=t),(n[7]*=t),this);}
rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return((i[0]=t*r+n*l),(i[3]=t*o+n*c),(i[6]=t*a+n*u),(i[1]=-n*r+t*l),(i[4]=-n*o+t*c),(i[7]=-n*a+t*u),this);}
translate(e,t){const n=this.elements;return((n[0]+=e*n[2]),(n[3]+=e*n[5]),(n[6]+=e*n[8]),(n[1]+=t*n[2]),(n[4]+=t*n[5]),(n[7]+=t*n[8]),this);}
equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0;}
fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this;}
toArray(e=[],t=0){const n=this.elements;return((e[t]=n[0]),(e[t+1]=n[1]),(e[t+2]=n[2]),(e[t+3]=n[3]),(e[t+4]=n[4]),(e[t+5]=n[5]),(e[t+6]=n[6]),(e[t+7]=n[7]),(e[t+8]=n[8]),e);}
clone(){return new this.constructor().fromArray(this.elements);}}
Ut.prototype.isMatrix3=!0;function Q_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1;}
const fb={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,};function io(s,e){return new fb[s](e);}
function qa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s);}
const ey={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074,},qn={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function Ku(s,e,t){return(t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s);}
function vo(s){return s<0.04045?s*0.0773993808:Math.pow(s*0.9478672986+0.0521327014,2.4);}
function Qu(s){return s<0.0031308?s*12.92:1.055*Math.pow(s,0.41666)-0.055;}
class ve{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n);}
set(e){return(e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this);}
setScalar(e){return(this.r=e),(this.g=e),(this.b=e),this;}
setHex(e){return((e=Math.floor(e)),(this.r=((e>>16)&255)/255),(this.g=((e>>8)&255)/255),(this.b=(e&255)/255),this);}
setRGB(e,t,n){return(this.r=e),(this.g=t),(this.b=n),this;}
setHSL(e,t,n){if(((e=Sf(e,1)),(t=Zt(t,0,1)),(n=Zt(n,0,1)),t===0))
this.r=this.g=this.b=n;else{const i=n<=0.5?n*(1+t):n+t-n*t,r=2*n-i;(this.r=Ku(r,i,e+1/3)),(this.g=Ku(r,i,e)),(this.b=Ku(r,i,e-1/3));}
return this;}
setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.");}
let n;if((n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))){let i;const r=n[1],o=n[2];switch(r){case "rgb":case "rgba":if((i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)))
return((this.r=Math.min(255,parseInt(i[1],10))/255),(this.g=Math.min(255,parseInt(i[2],10))/255),(this.b=Math.min(255,parseInt(i[3],10))/255),t(i[4]),this);if((i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)))
return((this.r=Math.min(100,parseInt(i[1],10))/100),(this.g=Math.min(100,parseInt(i[2],10))/100),(this.b=Math.min(100,parseInt(i[3],10))/100),t(i[4]),this);break;case "hsl":case "hsla":if((i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))){const a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,l,c);}
break;}}else if((n=/^\#([A-Fa-f\d]+)$/.exec(e))){const i=n[1],r=i.length;if(r===3)
return((this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255),(this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255),(this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255),this);if(r===6)
return((this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255),(this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255),(this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255),this);}
return e&&e.length>0?this.setColorName(e):this;}
setColorName(e){const t=ey[e.toLowerCase()];return(t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this);}
clone(){return new this.constructor(this.r,this.g,this.b);}
copy(e){return(this.r=e.r),(this.g=e.g),(this.b=e.b),this;}
copySRGBToLinear(e){return(this.r=vo(e.r)),(this.g=vo(e.g)),(this.b=vo(e.b)),this;}
copyLinearToSRGB(e){return(this.r=Qu(e.r)),(this.g=Qu(e.g)),(this.b=Qu(e.b)),this;}
convertSRGBToLinear(){return this.copySRGBToLinear(this),this;}
convertLinearToSRGB(){return this.copyLinearToSRGB(this),this;}
getHex(){return(((this.r*255)<<16)^((this.g*255)<<8)^((this.b*255)<<0));}
getHexString(){return("000000"+this.getHex().toString(16)).slice(-6);}
getHSL(e){const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),o=Math.min(t,n,i);let a,l;const c=(o+r)/2;if(o===r)(a=0),(l=0);else{const u=r-o;switch(((l=c<=0.5?u/(r+o):u/(2-r-o)),r)){case t:a=(n-i)/u+(n<i?6:0);break;case n:a=(i-t)/u+2;break;case i:a=(t-n)/u+4;break;}
a/=6;}
return(e.h=a),(e.s=l),(e.l=c),e;}
getStyle(){return("rgb("+
((this.r*255)|0)+
","+
((this.g*255)|0)+
","+
((this.b*255)|0)+
")");}
offsetHSL(e,t,n){return(this.getHSL(qn),(qn.h+=e),(qn.s+=t),(qn.l+=n),this.setHSL(qn.h,qn.s,qn.l),this);}
add(e){return(this.r+=e.r),(this.g+=e.g),(this.b+=e.b),this;}
addColors(e,t){return((this.r=e.r+t.r),(this.g=e.g+t.g),(this.b=e.b+t.b),this);}
addScalar(e){return(this.r+=e),(this.g+=e),(this.b+=e),this;}
sub(e){return((this.r=Math.max(0,this.r-e.r)),(this.g=Math.max(0,this.g-e.g)),(this.b=Math.max(0,this.b-e.b)),this);}
multiply(e){return(this.r*=e.r),(this.g*=e.g),(this.b*=e.b),this;}
multiplyScalar(e){return(this.r*=e),(this.g*=e),(this.b*=e),this;}
lerp(e,t){return((this.r+=(e.r-this.r)*t),(this.g+=(e.g-this.g)*t),(this.b+=(e.b-this.b)*t),this);}
lerpColors(e,t,n){return((this.r=e.r+(t.r-e.r)*n),(this.g=e.g+(t.g-e.g)*n),(this.b=e.b+(t.b-e.b)*n),this);}
lerpHSL(e,t){this.getHSL(qn),e.getHSL(Sl);const n=ba(qn.h,Sl.h,t),i=ba(qn.s,Sl.s,t),r=ba(qn.l,Sl.l,t);return this.setHSL(n,i,r),this;}
equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b;}
fromArray(e,t=0){return(this.r=e[t]),(this.g=e[t+1]),(this.b=e[t+2]),this;}
toArray(e=[],t=0){return(e[t]=this.r),(e[t+1]=this.g),(e[t+2]=this.b),e;}
fromBufferAttribute(e,t){return((this.r=e.getX(t)),(this.g=e.getY(t)),(this.b=e.getZ(t)),e.normalized===!0&&((this.r/=255),(this.g/=255),(this.b/=255)),this);}
toJSON(){return this.getHex();}}
ve.NAMES=ey;ve.prototype.isColor=!0;ve.prototype.r=1;ve.prototype.g=1;ve.prototype.b=1;let Ds;class vr{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")
return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ds===void 0&&(Ds=qa("canvas")),(Ds.width=e.width),(Ds.height=e.height);const n=Ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),(t=Ds);}
return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",0.6)):t.toDataURL("image/png");}
static sRGBToLinear(e){if((typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement)||(typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement)||(typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap)){const t=qa("canvas");(t.width=e.width),(t.height=e.height);const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=vo(r[o]/255)*255;return n.putImageData(i,0,0),t;}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)
t instanceof Uint8Array||t instanceof Uint8ClampedArray?(t[n]=Math.floor(vo(t[n]/255)*255)):(t[n]=vo(t[n]));return{data:t,width:e.width,height:e.height};}else
return(console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e);}}
class ro{constructor(e=null){(this.uuid=Pn()),(this.data=e),(this.version=0);}
set needsUpdate(e){e===!0&&this.version++;}
toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)
i[o].isDataTexture?r.push(eh(i[o].image)):r.push(eh(i[o]));}else r=eh(i);n.url=r;}
return t||(e.images[this.uuid]=n),n;}}
function eh(s){return(typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement)||(typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement)||(typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap)?vr.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name,}:(console.warn("THREE.Texture: Unable to serialize Texture."),{});}
ro.prototype.isSource=!0;let pb=0;class Dt extends Hi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=dn,i=dn,r=Ke,o=ws,a=Xt,l=Zn,c=1,u=Kn){super(),Object.defineProperty(this,"id",{value:pb++}),(this.uuid=Pn()),(this.name=""),(this.source=new ro(e)),(this.mipmaps=[]),(this.mapping=t),(this.wrapS=n),(this.wrapT=i),(this.magFilter=r),(this.minFilter=o),(this.anisotropy=c),(this.format=a),(this.internalFormat=null),(this.type=l),(this.offset=new J(0,0)),(this.repeat=new J(1,1)),(this.center=new J(0,0)),(this.rotation=0),(this.matrixAutoUpdate=!0),(this.matrix=new Ut()),(this.generateMipmaps=!0),(this.premultiplyAlpha=!1),(this.flipY=!0),(this.unpackAlignment=4),(this.encoding=u),(this.userData={}),(this.version=0),(this.onUpdate=null),(this.isRenderTargetTexture=!1),(this.needsPMREMUpdate=!1);}
get image(){return this.source.data;}
set image(e){this.source.data=e;}
updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y);}
clone(){return new this.constructor().copy(this);}
copy(e){return((this.name=e.name),(this.source=e.source),(this.mipmaps=e.mipmaps.slice(0)),(this.mapping=e.mapping),(this.wrapS=e.wrapS),(this.wrapT=e.wrapT),(this.magFilter=e.magFilter),(this.minFilter=e.minFilter),(this.anisotropy=e.anisotropy),(this.format=e.format),(this.internalFormat=e.internalFormat),(this.type=e.type),this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),(this.rotation=e.rotation),(this.matrixAutoUpdate=e.matrixAutoUpdate),this.matrix.copy(e.matrix),(this.generateMipmaps=e.generateMipmaps),(this.premultiplyAlpha=e.premultiplyAlpha),(this.flipY=e.flipY),(this.unpackAlignment=e.unpackAlignment),(this.encoding=e.encoding),(this.userData=JSON.parse(JSON.stringify(e.userData))),(this.needsUpdate=!0),this);}
toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment,};return(JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n);}
dispose(){this.dispatchEvent({type:"dispose"});}
transformUv(e){if(this.mapping!==cu)return e;if((e.applyMatrix3(this.matrix),e.x<0||e.x>1))
switch(this.wrapS){case za:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?(e.x=Math.ceil(e.x)-e.x):(e.x=e.x-Math.floor(e.x));break;}
if(e.y<0||e.y>1)
switch(this.wrapT){case za:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?(e.y=Math.ceil(e.y)-e.y):(e.y=e.y-Math.floor(e.y));break;}
return this.flipY&&(e.y=1-e.y),e;}
set needsUpdate(e){e===!0&&(this.version++,(this.source.needsUpdate=!0));}}
Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=cu;Dt.prototype.isTexture=!0;class nt{constructor(e=0,t=0,n=0,i=1){(this.x=e),(this.y=t),(this.z=n),(this.w=i);}
get width(){return this.z;}
set width(e){this.z=e;}
get height(){return this.w;}
set height(e){this.w=e;}
set(e,t,n,i){return(this.x=e),(this.y=t),(this.z=n),(this.w=i),this;}
setScalar(e){return(this.x=e),(this.y=e),(this.z=e),(this.w=e),this;}
setX(e){return(this.x=e),this;}
setY(e){return(this.y=e),this;}
setZ(e){return(this.z=e),this;}
setW(e){return(this.w=e),this;}
setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e);}
return this;}
getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e);}}
clone(){return new this.constructor(this.x,this.y,this.z,this.w);}
copy(e){return((this.x=e.x),(this.y=e.y),(this.z=e.z),(this.w=e.w!==void 0?e.w:1),this);}
add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):((this.x+=e.x),(this.y+=e.y),(this.z+=e.z),(this.w+=e.w),this);}
addScalar(e){return(this.x+=e),(this.y+=e),(this.z+=e),(this.w+=e),this;}
addVectors(e,t){return((this.x=e.x+t.x),(this.y=e.y+t.y),(this.z=e.z+t.z),(this.w=e.w+t.w),this);}
addScaledVector(e,t){return((this.x+=e.x*t),(this.y+=e.y*t),(this.z+=e.z*t),(this.w+=e.w*t),this);}
sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):((this.x-=e.x),(this.y-=e.y),(this.z-=e.z),(this.w-=e.w),this);}
subScalar(e){return(this.x-=e),(this.y-=e),(this.z-=e),(this.w-=e),this;}
subVectors(e,t){return((this.x=e.x-t.x),(this.y=e.y-t.y),(this.z=e.z-t.z),(this.w=e.w-t.w),this);}
multiply(e){return((this.x*=e.x),(this.y*=e.y),(this.z*=e.z),(this.w*=e.w),this);}
multiplyScalar(e){return(this.x*=e),(this.y*=e),(this.z*=e),(this.w*=e),this;}
applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return((this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r),(this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r),(this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r),(this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r),this);}
divideScalar(e){return this.multiplyScalar(1/e);}
setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return(t<1e-4?((this.x=1),(this.y=0),(this.z=0)):((this.x=e.x/t),(this.y=e.y/t),(this.z=e.z/t)),this);}
setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],g=l[2],y=l[6],_=l[10];if(Math.abs(u-d)<0.01&&Math.abs(h-g)<0.01&&Math.abs(p-y)<0.01){if(Math.abs(u+d)<0.1&&Math.abs(h+g)<0.1&&Math.abs(p+y)<0.1&&Math.abs(c+f+_-3)<0.1)
return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,v=(f+1)/2,x=(_+1)/2,M=(u+d)/4,S=(h+g)/4,T=(p+y)/4;return(w>v&&w>x?w<0.01?((n=0),(i=0.707106781),(r=0.707106781)):((n=Math.sqrt(w)),(i=M/n),(r=S/n)):v>x?v<0.01?((n=0.707106781),(i=0),(r=0.707106781)):((i=Math.sqrt(v)),(n=M/i),(r=T/i)):x<0.01?((n=0.707106781),(i=0.707106781),(r=0)):((r=Math.sqrt(x)),(n=S/r),(i=T/r)),this.set(n,i,r,t),this);}
let m=Math.sqrt((y-p)*(y-p)+(h-g)*(h-g)+(d-u)*(d-u));return(Math.abs(m)<0.001&&(m=1),(this.x=(y-p)/m),(this.y=(h-g)/m),(this.z=(d-u)/m),(this.w=Math.acos((c+f+_-1)/2)),this);}
min(e){return((this.x=Math.min(this.x,e.x)),(this.y=Math.min(this.y,e.y)),(this.z=Math.min(this.z,e.z)),(this.w=Math.min(this.w,e.w)),this);}
max(e){return((this.x=Math.max(this.x,e.x)),(this.y=Math.max(this.y,e.y)),(this.z=Math.max(this.z,e.z)),(this.w=Math.max(this.w,e.w)),this);}
clamp(e,t){return((this.x=Math.max(e.x,Math.min(t.x,this.x))),(this.y=Math.max(e.y,Math.min(t.y,this.y))),(this.z=Math.max(e.z,Math.min(t.z,this.z))),(this.w=Math.max(e.w,Math.min(t.w,this.w))),this);}
clampScalar(e,t){return((this.x=Math.max(e,Math.min(t,this.x))),(this.y=Math.max(e,Math.min(t,this.y))),(this.z=Math.max(e,Math.min(t,this.z))),(this.w=Math.max(e,Math.min(t,this.w))),this);}
clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)));}
floor(){return((this.x=Math.floor(this.x)),(this.y=Math.floor(this.y)),(this.z=Math.floor(this.z)),(this.w=Math.floor(this.w)),this);}
ceil(){return((this.x=Math.ceil(this.x)),(this.y=Math.ceil(this.y)),(this.z=Math.ceil(this.z)),(this.w=Math.ceil(this.w)),this);}
round(){return((this.x=Math.round(this.x)),(this.y=Math.round(this.y)),(this.z=Math.round(this.z)),(this.w=Math.round(this.w)),this);}
roundToZero(){return((this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x)),(this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y)),(this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z)),(this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w)),this);}
negate(){return((this.x=-this.x),(this.y=-this.y),(this.z=-this.z),(this.w=-this.w),this);}
dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w;}
lengthSq(){return(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);}
length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);}
manhattanLength(){return(Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w));}
normalize(){return this.divideScalar(this.length()||1);}
setLength(e){return this.normalize().multiplyScalar(e);}
lerp(e,t){return((this.x+=(e.x-this.x)*t),(this.y+=(e.y-this.y)*t),(this.z+=(e.z-this.z)*t),(this.w+=(e.w-this.w)*t),this);}
lerpVectors(e,t,n){return((this.x=e.x+(t.x-e.x)*n),(this.y=e.y+(t.y-e.y)*n),(this.z=e.z+(t.z-e.z)*n),(this.w=e.w+(t.w-e.w)*n),this);}
equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w;}
fromArray(e,t=0){return((this.x=e[t]),(this.y=e[t+1]),(this.z=e[t+2]),(this.w=e[t+3]),this);}
toArray(e=[],t=0){return((e[t]=this.x),(e[t+1]=this.y),(e[t+2]=this.z),(e[t+3]=this.w),e);}
fromBufferAttribute(e,t,n){return(n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),(this.x=e.getX(t)),(this.y=e.getY(t)),(this.z=e.getZ(t)),(this.w=e.getW(t)),this);}
random(){return((this.x=Math.random()),(this.y=Math.random()),(this.z=Math.random()),(this.w=Math.random()),this);}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w;}}
nt.prototype.isVector4=!0;class ft extends Hi{constructor(e,t,n={}){super(),(this.width=e),(this.height=t),(this.depth=1),(this.scissor=new nt(0,0,e,t)),(this.scissorTest=!1),(this.viewport=new nt(0,0,e,t));const i={width:e,height:t,depth:1};(this.texture=new Dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding)),(this.texture.isRenderTargetTexture=!0),(this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1),(this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null),(this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ke),(this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0),(this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1),(this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null),(this.samples=n.samples!==void 0?n.samples:0);}
setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&((this.width=e),(this.height=t),(this.depth=n),(this.texture.image.width=e),(this.texture.image.height=t),(this.texture.image.depth=n),this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t);}
clone(){return new this.constructor().copy(this);}
copy(e){return((this.width=e.width),(this.height=e.height),(this.depth=e.depth),this.viewport.copy(e.viewport),(this.texture=e.texture.clone()),(this.texture.image=Object.assign({},e.texture.image)),(this.depthBuffer=e.depthBuffer),(this.stencilBuffer=e.stencilBuffer),e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),(this.samples=e.samples),this);}
dispose(){this.dispatchEvent({type:"dispose"});}}
ft.prototype.isWebGLRenderTarget=!0;class $o extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),(this.image={data:e,width:t,height:n,depth:i}),(this.magFilter=Ot),(this.minFilter=Ot),(this.wrapR=dn),(this.generateMipmaps=!1),(this.flipY=!1),(this.unpackAlignment=1);}}
$o.prototype.isDataArrayTexture=!0;class ty extends ft{constructor(e,t,n){super(e,t),(this.depth=n),(this.texture=new $o(null,e,t,n)),(this.texture.isRenderTargetTexture=!0);}}
ty.prototype.isWebGLArrayRenderTarget=!0;class sl extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),(this.image={data:e,width:t,height:n,depth:i}),(this.magFilter=Ot),(this.minFilter=Ot),(this.wrapR=dn),(this.generateMipmaps=!1),(this.flipY=!1),(this.unpackAlignment=1);}}
sl.prototype.isData3DTexture=!0;class ny extends ft{constructor(e,t,n){super(e,t),(this.depth=n),(this.texture=new sl(null,e,t,n)),(this.texture.isRenderTargetTexture=!0);}}
ny.prototype.isWebGL3DRenderTarget=!0;class iy extends ft{constructor(e,t,n,i={}){super(e,t,i);const r=this.texture;this.texture=[];for(let o=0;o<n;o++)
(this.texture[o]=r.clone()),(this.texture[o].isRenderTargetTexture=!0);}
setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){(this.width=e),(this.height=t),(this.depth=n);for(let i=0,r=this.texture.length;i<r;i++)
(this.texture[i].image.width=e),(this.texture[i].image.height=t),(this.texture[i].image.depth=n);this.dispose();}
return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this;}
copy(e){this.dispose(),(this.width=e.width),(this.height=e.height),(this.depth=e.depth),this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),(this.depthBuffer=e.depthBuffer),(this.stencilBuffer=e.stencilBuffer),(this.depthTexture=e.depthTexture),(this.texture.length=0);for(let t=0,n=e.texture.length;t<n;t++)
this.texture[t]=e.texture[t].clone();return this;}}
iy.prototype.isWebGLMultipleRenderTargets=!0;class Ht{constructor(e=0,t=0,n=0,i=1){(this._x=e),(this._y=t),(this._z=n),(this._w=i);}
static slerp(e,t,n,i){return(console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i));}
static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],p=r[o+2],g=r[o+3];if(a===0){(e[t+0]=l),(e[t+1]=c),(e[t+2]=u),(e[t+3]=h);return;}
if(a===1){(e[t+0]=d),(e[t+1]=f),(e[t+2]=p),(e[t+3]=g);return;}
if(h!==g||l!==d||c!==f||u!==p){let y=1-a;const _=l*d+c*f+u*p+h*g,m=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const x=Math.sqrt(w),M=Math.atan2(x,_*m);(y=Math.sin(y*M)/x),(a=Math.sin(a*M)/x);}
const v=a*m;if(((l=l*y+d*v),(c=c*y+f*v),(u=u*y+p*v),(h=h*y+g*v),y===1-a)){const x=1/Math.sqrt(l*l+c*c+u*u+h*h);(l*=x),(c*=x),(u*=x),(h*=x);}}
(e[t]=l),(e[t+1]=c),(e[t+2]=u),(e[t+3]=h);}
static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return((e[t]=a*p+u*h+l*f-c*d),(e[t+1]=l*p+u*d+c*h-a*f),(e[t+2]=c*p+u*f+a*d-l*h),(e[t+3]=u*p-a*h-l*d-c*f),e);}
get x(){return this._x;}
set x(e){(this._x=e),this._onChangeCallback();}
get y(){return this._y;}
set y(e){(this._y=e),this._onChangeCallback();}
get z(){return this._z;}
set z(e){(this._z=e),this._onChangeCallback();}
get w(){return this._w;}
set w(e){(this._w=e),this._onChangeCallback();}
set(e,t,n,i){return((this._x=e),(this._y=t),(this._z=n),(this._w=i),this._onChangeCallback(),this);}
clone(){return new this.constructor(this._x,this._y,this._z,this._w);}
copy(e){return((this._x=e.x),(this._y=e.y),(this._z=e.z),(this._w=e.w),this._onChangeCallback(),this);}
setFromEuler(e,t){if(!(e&&e.isEuler))
throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case "XYZ":(this._x=d*u*h+c*f*p),(this._y=c*f*h-d*u*p),(this._z=c*u*p+d*f*h),(this._w=c*u*h-d*f*p);break;case "YXZ":(this._x=d*u*h+c*f*p),(this._y=c*f*h-d*u*p),(this._z=c*u*p-d*f*h),(this._w=c*u*h+d*f*p);break;case "ZXY":(this._x=d*u*h-c*f*p),(this._y=c*f*h+d*u*p),(this._z=c*u*p+d*f*h),(this._w=c*u*h-d*f*p);break;case "ZYX":(this._x=d*u*h-c*f*p),(this._y=c*f*h+d*u*p),(this._z=c*u*p-d*f*h),(this._w=c*u*h+d*f*p);break;case "YZX":(this._x=d*u*h+c*f*p),(this._y=c*f*h+d*u*p),(this._z=c*u*p-d*f*h),(this._w=c*u*h-d*f*p);break;case "XZY":(this._x=d*u*h-c*f*p),(this._y=c*f*h-d*u*p),(this._z=c*u*p+d*f*h),(this._w=c*u*h+d*f*p);break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o);}
return t!==!1&&this._onChangeCallback(),this;}
setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return((this._x=e.x*i),(this._y=e.y*i),(this._z=e.z*i),(this._w=Math.cos(n)),this._onChangeCallback(),this);}
setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=0.5/Math.sqrt(d+1);(this._w=0.25/f),(this._x=(u-l)*f),(this._y=(r-c)*f),(this._z=(o-i)*f);}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);(this._w=(u-l)/f),(this._x=0.25*f),(this._y=(i+o)/f),(this._z=(r+c)/f);}else if(a>h){const f=2*Math.sqrt(1+a-n-h);(this._w=(r-c)/f),(this._x=(i+o)/f),(this._y=0.25*f),(this._z=(l+u)/f);}else{const f=2*Math.sqrt(1+h-n-a);(this._w=(o-i)/f),(this._x=(r+c)/f),(this._y=(l+u)/f),(this._z=0.25*f);}
return this._onChangeCallback(),this;}
setFromUnitVectors(e,t){let n=e.dot(t)+1;return(n<Number.EPSILON?((n=0),Math.abs(e.x)>Math.abs(e.z)?((this._x=-e.y),(this._y=e.x),(this._z=0),(this._w=n)):((this._x=0),(this._y=-e.z),(this._z=e.y),(this._w=n))):((this._x=e.y*t.z-e.z*t.y),(this._y=e.z*t.x-e.x*t.z),(this._z=e.x*t.y-e.y*t.x),(this._w=n)),this.normalize());}
angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)));}
rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this;}
identity(){return this.set(0,0,0,1);}
invert(){return this.conjugate();}
conjugate(){return((this._x*=-1),(this._y*=-1),(this._z*=-1),this._onChangeCallback(),this);}
dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w;}
lengthSq(){return(this._x*this._x+
this._y*this._y+
this._z*this._z+
this._w*this._w);}
length(){return Math.sqrt(this._x*this._x+
this._y*this._y+
this._z*this._z+
this._w*this._w);}
normalize(){let e=this.length();return(e===0?((this._x=0),(this._y=0),(this._z=0),(this._w=1)):((e=1/e),(this._x=this._x*e),(this._y=this._y*e),(this._z=this._z*e),(this._w=this._w*e)),this._onChangeCallback(),this);}
multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e);}
premultiply(e){return this.multiplyQuaternions(e,this);}
multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return((this._x=n*u+o*a+i*c-r*l),(this._y=i*u+o*l+r*a-n*c),(this._z=r*u+o*c+n*l-i*a),(this._w=o*u-n*a-i*l-r*c),this._onChangeCallback(),this);}
slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if((a<0?((this._w=-e._w),(this._x=-e._x),(this._y=-e._y),(this._z=-e._z),(a=-a)):this.copy(e),a>=1))
return(this._w=o),(this._x=n),(this._y=i),(this._z=r),this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return((this._w=f*o+t*this._w),(this._x=f*n+t*this._x),(this._y=f*i+t*this._y),(this._z=f*r+t*this._z),this.normalize(),this._onChangeCallback(),this);}
const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return((this._w=o*h+this._w*d),(this._x=n*h+this._x*d),(this._y=i*h+this._y*d),(this._z=r*h+this._z*d),this._onChangeCallback(),this);}
slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n);}
random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i));}
equals(e){return(e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w);}
fromArray(e,t=0){return((this._x=e[t]),(this._y=e[t+1]),(this._z=e[t+2]),(this._w=e[t+3]),this._onChangeCallback(),this);}
toArray(e=[],t=0){return((e[t]=this._x),(e[t+1]=this._y),(e[t+2]=this._z),(e[t+3]=this._w),e);}
fromBufferAttribute(e,t){return((this._x=e.getX(t)),(this._y=e.getY(t)),(this._z=e.getZ(t)),(this._w=e.getW(t)),this);}
_onChange(e){return(this._onChangeCallback=e),this;}
_onChangeCallback(){}}
Ht.prototype.isQuaternion=!0;class C{constructor(e=0,t=0,n=0){(this.x=e),(this.y=t),(this.z=n);}
set(e,t,n){return(n===void 0&&(n=this.z),(this.x=e),(this.y=t),(this.z=n),this);}
setScalar(e){return(this.x=e),(this.y=e),(this.z=e),this;}
setX(e){return(this.x=e),this;}
setY(e){return(this.y=e),this;}
setZ(e){return(this.z=e),this;}
setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e);}
return this;}
getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e);}}
clone(){return new this.constructor(this.x,this.y,this.z);}
copy(e){return(this.x=e.x),(this.y=e.y),(this.z=e.z),this;}
add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):((this.x+=e.x),(this.y+=e.y),(this.z+=e.z),this);}
addScalar(e){return(this.x+=e),(this.y+=e),(this.z+=e),this;}
addVectors(e,t){return((this.x=e.x+t.x),(this.y=e.y+t.y),(this.z=e.z+t.z),this);}
addScaledVector(e,t){return(this.x+=e.x*t),(this.y+=e.y*t),(this.z+=e.z*t),this;}
sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):((this.x-=e.x),(this.y-=e.y),(this.z-=e.z),this);}
subScalar(e){return(this.x-=e),(this.y-=e),(this.z-=e),this;}
subVectors(e,t){return((this.x=e.x-t.x),(this.y=e.y-t.y),(this.z=e.z-t.z),this);}
multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):((this.x*=e.x),(this.y*=e.y),(this.z*=e.z),this);}
multiplyScalar(e){return(this.x*=e),(this.y*=e),(this.z*=e),this;}
multiplyVectors(e,t){return((this.x=e.x*t.x),(this.y=e.y*t.y),(this.z=e.z*t.z),this);}
applyEuler(e){return((e&&e.isEuler)||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(jp.setFromEuler(e)));}
applyAxisAngle(e,t){return this.applyQuaternion(jp.setFromAxisAngle(e,t));}
applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return((this.x=r[0]*t+r[3]*n+r[6]*i),(this.y=r[1]*t+r[4]*n+r[7]*i),(this.z=r[2]*t+r[5]*n+r[8]*i),this);}
applyNormalMatrix(e){return this.applyMatrix3(e).normalize();}
applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return((this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o),(this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o),(this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o),this);}
applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-r*i,h=l*i+r*n-o*t,d=-r*t-o*n-a*i;return((this.x=c*l+d*-r+u*-a-h*-o),(this.y=u*l+d*-o+h*-r-c*-a),(this.z=h*l+d*-a+c*-o-u*-r),this);}
project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);}
unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);}
transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return((this.x=r[0]*t+r[4]*n+r[8]*i),(this.y=r[1]*t+r[5]*n+r[9]*i),(this.z=r[2]*t+r[6]*n+r[10]*i),this.normalize());}
divide(e){return(this.x/=e.x),(this.y/=e.y),(this.z/=e.z),this;}
divideScalar(e){return this.multiplyScalar(1/e);}
min(e){return((this.x=Math.min(this.x,e.x)),(this.y=Math.min(this.y,e.y)),(this.z=Math.min(this.z,e.z)),this);}
max(e){return((this.x=Math.max(this.x,e.x)),(this.y=Math.max(this.y,e.y)),(this.z=Math.max(this.z,e.z)),this);}
clamp(e,t){return((this.x=Math.max(e.x,Math.min(t.x,this.x))),(this.y=Math.max(e.y,Math.min(t.y,this.y))),(this.z=Math.max(e.z,Math.min(t.z,this.z))),this);}
clampScalar(e,t){return((this.x=Math.max(e,Math.min(t,this.x))),(this.y=Math.max(e,Math.min(t,this.y))),(this.z=Math.max(e,Math.min(t,this.z))),this);}
clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)));}
floor(){return((this.x=Math.floor(this.x)),(this.y=Math.floor(this.y)),(this.z=Math.floor(this.z)),this);}
ceil(){return((this.x=Math.ceil(this.x)),(this.y=Math.ceil(this.y)),(this.z=Math.ceil(this.z)),this);}
round(){return((this.x=Math.round(this.x)),(this.y=Math.round(this.y)),(this.z=Math.round(this.z)),this);}
roundToZero(){return((this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x)),(this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y)),(this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z)),this);}
negate(){return(this.x=-this.x),(this.y=-this.y),(this.z=-this.z),this;}
dot(e){return this.x*e.x+this.y*e.y+this.z*e.z;}
lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z;}
length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);}
manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z);}
normalize(){return this.divideScalar(this.length()||1);}
setLength(e){return this.normalize().multiplyScalar(e);}
lerp(e,t){return((this.x+=(e.x-this.x)*t),(this.y+=(e.y-this.y)*t),(this.z+=(e.z-this.z)*t),this);}
lerpVectors(e,t,n){return((this.x=e.x+(t.x-e.x)*n),(this.y=e.y+(t.y-e.y)*n),(this.z=e.z+(t.z-e.z)*n),this);}
cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e);}
crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return((this.x=i*l-r*a),(this.y=r*o-n*l),(this.z=n*a-i*o),this);}
projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n);}
projectOnPlane(e){return th.copy(this).projectOnVector(e),this.sub(th);}
reflect(e){return this.sub(th.copy(e).multiplyScalar(2*this.dot(e)));}
angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1));}
distanceTo(e){return Math.sqrt(this.distanceToSquared(e));}
distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i;}
manhattanDistanceTo(e){return(Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z));}
setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta);}
setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return((this.x=i*Math.sin(n)),(this.y=Math.cos(t)*e),(this.z=i*Math.cos(n)),this);}
setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y);}
setFromCylindricalCoords(e,t,n){return((this.x=e*Math.sin(t)),(this.y=n),(this.z=e*Math.cos(t)),this);}
setFromMatrixPosition(e){const t=e.elements;return(this.x=t[12]),(this.y=t[13]),(this.z=t[14]),this;}
setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return(this.x=t),(this.y=n),(this.z=i),this;}
setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4);}
setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3);}
setFromEuler(e){return(this.x=e._x),(this.y=e._y),(this.z=e._z),this;}
equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z;}
fromArray(e,t=0){return(this.x=e[t]),(this.y=e[t+1]),(this.z=e[t+2]),this;}
toArray(e=[],t=0){return(e[t]=this.x),(e[t+1]=this.y),(e[t+2]=this.z),e;}
fromBufferAttribute(e,t,n){return(n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),(this.x=e.getX(t)),(this.y=e.getY(t)),(this.z=e.getZ(t)),this);}
random(){return((this.x=Math.random()),(this.y=Math.random()),(this.z=Math.random()),this);}
randomDirection(){const e=(Math.random()-0.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return((this.x=n*Math.cos(t)),(this.y=n*Math.sin(t)),(this.z=e),this);}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z;}}
C.prototype.isVector3=!0;const th=new C(),jp=new Ht();class In{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){(this.min=e),(this.max=t);}
set(e,t){return this.min.copy(e),this.max.copy(t),this;}
setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>o&&(o=h),d>a&&(a=d);}
return this.min.set(t,n,i),this.max.set(r,o,a),this;}
setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>o&&(o=h),d>a&&(a=d);}
return this.min.set(t,n,i),this.max.set(r,o,a),this;}
setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this;}
setFromCenterAndSize(e,t){const n=Ar.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this;}
setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t);}
clone(){return new this.constructor().copy(this);}
copy(e){return this.min.copy(e.min),this.max.copy(e.max),this;}
makeEmpty(){return((this.min.x=this.min.y=this.min.z=1/0),(this.max.x=this.max.y=this.max.z=-1/0),this);}
isEmpty(){return(this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z);}
getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5);}
getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min);}
expandByPoint(e){return this.min.min(e),this.max.max(e),this;}
expandByVector(e){return this.min.sub(e),this.max.add(e),this;}
expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this;}
expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)
if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)
Ar.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ar);}else
n.boundingBox===null&&n.computeBoundingBox(),nh.copy(n.boundingBox),nh.applyMatrix4(e.matrixWorld),this.union(nh);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this;}
containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z);}
containsBox(e){return(this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z);}
getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z));}
intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z);}
intersectsSphere(e){return(this.clampPoint(e.center,Ar),Ar.distanceToSquared(e.center)<=e.radius*e.radius);}
intersectsPlane(e){let t,n;return(e.normal.x>0?((t=e.normal.x*this.min.x),(n=e.normal.x*this.max.x)):((t=e.normal.x*this.max.x),(n=e.normal.x*this.min.x)),e.normal.y>0?((t+=e.normal.y*this.min.y),(n+=e.normal.y*this.max.y)):((t+=e.normal.y*this.max.y),(n+=e.normal.y*this.min.y)),e.normal.z>0?((t+=e.normal.z*this.min.z),(n+=e.normal.z*this.max.z)):((t+=e.normal.z*this.max.z),(n+=e.normal.z*this.min.z)),t<=-e.constant&&n>=-e.constant);}
intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Tl.subVectors(this.max,ra),Is.subVectors(e.a,ra),Bs.subVectors(e.b,ra),Fs.subVectors(e.c,ra),Vi.subVectors(Bs,Is),Wi.subVectors(Fs,Bs),Cr.subVectors(Is,Fs);let t=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-Cr.z,Cr.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,Cr.z,0,-Cr.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-Cr.y,Cr.x,0,];return!ih(t,Is,Bs,Fs,Tl)||((t=[1,0,0,0,1,0,0,0,1]),!ih(t,Is,Bs,Fs,Tl))?!1:(El.crossVectors(Vi,Wi),(t=[El.x,El.y,El.z]),ih(t,Is,Bs,Fs,Tl));}
clampPoint(e,t){return t.copy(e).clamp(this.min,this.max);}
distanceToPoint(e){return Ar.copy(e).clamp(this.min,this.max).sub(e).length();}
getBoundingSphere(e){return(this.getCenter(e.center),(e.radius=this.getSize(Ar).length()*0.5),e);}
intersect(e){return(this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this);}
union(e){return this.min.min(e.min),this.max.max(e.max),this;}
applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this);}
translate(e){return this.min.add(e),this.max.add(e),this;}
equals(e){return e.min.equals(this.min)&&e.max.equals(this.max);}}
In.prototype.isBox3=!0;const yi=[new C(),new C(),new C(),new C(),new C(),new C(),new C(),new C(),],Ar=new C(),nh=new In(),Is=new C(),Bs=new C(),Fs=new C(),Vi=new C(),Wi=new C(),Cr=new C(),ra=new C(),Tl=new C(),El=new C(),Lr=new C();function ih(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Lr.fromArray(s,r);const a=i.x*Math.abs(Lr.x)+i.y*Math.abs(Lr.y)+i.z*Math.abs(Lr.z),l=e.dot(Lr),c=t.dot(Lr),u=n.dot(Lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1;}
return!0;}
const mb=new In(),Jp=new C(),Al=new C(),rh=new C();class wr{constructor(e=new C(),t=-1){(this.center=e),(this.radius=t);}
set(e,t){return this.center.copy(e),(this.radius=t),this;}
setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mb.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)
i=Math.max(i,n.distanceToSquared(e[r]));return(this.radius=Math.sqrt(i)),this;}
copy(e){return this.center.copy(e.center),(this.radius=e.radius),this;}
isEmpty(){return this.radius<0;}
makeEmpty(){return this.center.set(0,0,0),(this.radius=-1),this;}
containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius;}
distanceToPoint(e){return e.distanceTo(this.center)-this.radius;}
intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t;}
intersectsBox(e){return e.intersectsSphere(this);}
intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius;}
clampPoint(e,t){const n=this.center.distanceToSquared(e);return(t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t);}
getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e);}
applyMatrix4(e){return(this.center.applyMatrix4(e),(this.radius=this.radius*e.getMaxScaleOnAxis()),this);}
translate(e){return this.center.add(e),this;}
expandByPoint(e){rh.subVectors(e,this.center);const t=rh.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*0.5;this.center.add(rh.multiplyScalar(i/n)),(this.radius+=i);}
return this;}
union(e){return(this.center.equals(e.center)===!0?Al.set(0,0,1).multiplyScalar(e.radius):Al.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Jp.copy(e.center).add(Al)),this.expandByPoint(Jp.copy(e.center).sub(Al)),this);}
equals(e){return e.center.equals(this.center)&&e.radius===this.radius;}
clone(){return new this.constructor().copy(this);}}
const xi=new C(),sh=new C(),Cl=new C(),qi=new C(),oh=new C(),Ll=new C(),ah=new C();class br{constructor(e=new C(),t=new C(0,0,-1)){(this.origin=e),(this.direction=t);}
set(e,t){return this.origin.copy(e),this.direction.copy(t),this;}
copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this;}
at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin);}
lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this;}
recast(e){return this.origin.copy(this.at(e,xi)),this;}
closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin);}
distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e));}
distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.direction).multiplyScalar(t).add(this.origin),xi.distanceToSquared(e));}
distanceSqToSegment(e,t,n,i){sh.copy(e).add(t).multiplyScalar(0.5),Cl.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(sh);const r=e.distanceTo(t)*0.5,o=-this.direction.dot(Cl),a=qi.dot(this.direction),l=-qi.dot(Cl),c=qi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)
if(((h=o*l-a),(d=o*a-l),(p=r*u),h>=0))
if(d>=-p)
if(d<=p){const g=1/u;(h*=g),(d*=g),(f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c);}else
(d=r),(h=Math.max(0,-(o*d+a))),(f=-h*h+d*(d+2*l)+c);else
(d=-r),(h=Math.max(0,-(o*d+a))),(f=-h*h+d*(d+2*l)+c);else
d<=-p?((h=Math.max(0,-(-o*r+a))),(d=h>0?-r:Math.min(Math.max(-r,-l),r)),(f=-h*h+d*(d+2*l)+c)):d<=p?((h=0),(d=Math.min(Math.max(-r,-l),r)),(f=d*(d+2*l)+c)):((h=Math.max(0,-(o*r+a))),(d=h>0?r:Math.min(Math.max(-r,-l),r)),(f=-h*h+d*(d+2*l)+c));else
(d=o>0?-r:r),(h=Math.max(0,-(o*d+a))),(f=-h*h+d*(d+2*l)+c);return(n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Cl).multiplyScalar(d).add(sh),f);}
intersectSphere(e,t){xi.subVectors(e.center,this.origin);const n=xi.dot(this.direction),i=xi.dot(xi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t);}
intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius;}
distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null;}
intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t);}
intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0;}
intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return(c>=0?((n=(e.min.x-d.x)*c),(i=(e.max.x-d.x)*c)):((n=(e.max.x-d.x)*c),(i=(e.min.x-d.x)*c)),u>=0?((r=(e.min.y-d.y)*u),(o=(e.max.y-d.y)*u)):((r=(e.max.y-d.y)*u),(o=(e.min.y-d.y)*u)),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),h>=0?((a=(e.min.z-d.z)*h),(l=(e.max.z-d.z)*h)):((a=(e.max.z-d.z)*h),(l=(e.min.z-d.z)*h)),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t));}
intersectsBox(e){return this.intersectBox(e,xi)!==null;}
intersectTriangle(e,t,n,i,r){oh.subVectors(t,e),Ll.subVectors(n,e),ah.crossVectors(oh,Ll);let o=this.direction.dot(ah),a;if(o>0){if(i)return null;a=1;}else if(o<0)(a=-1),(o=-o);else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot(Ll.crossVectors(qi,Ll));if(l<0)return null;const c=a*this.direction.dot(oh.cross(qi));if(c<0||l+c>o)return null;const u=-a*qi.dot(ah);return u<0?null:this.at(u/o,r);}
applyMatrix4(e){return(this.origin.applyMatrix4(e),this.direction.transformDirection(e),this);}
equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction);}
clone(){return new this.constructor().copy(this);}}
class Pe{constructor(){(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");}
set(e,t,n,i,r,o,a,l,c,u,h,d,f,p,g,y){const _=this.elements;return((_[0]=e),(_[4]=t),(_[8]=n),(_[12]=i),(_[1]=r),(_[5]=o),(_[9]=a),(_[13]=l),(_[2]=c),(_[6]=u),(_[10]=h),(_[14]=d),(_[3]=f),(_[7]=p),(_[11]=g),(_[15]=y),this);}
identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this;}
clone(){return new Pe().fromArray(this.elements);}
copy(e){const t=this.elements,n=e.elements;return((t[0]=n[0]),(t[1]=n[1]),(t[2]=n[2]),(t[3]=n[3]),(t[4]=n[4]),(t[5]=n[5]),(t[6]=n[6]),(t[7]=n[7]),(t[8]=n[8]),(t[9]=n[9]),(t[10]=n[10]),(t[11]=n[11]),(t[12]=n[12]),(t[13]=n[13]),(t[14]=n[14]),(t[15]=n[15]),this);}
copyPosition(e){const t=this.elements,n=e.elements;return(t[12]=n[12]),(t[13]=n[13]),(t[14]=n[14]),this;}
setFromMatrix3(e){const t=e.elements;return(this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this);}
extractBasis(e,t,n){return(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this);}
makeBasis(e,t,n){return(this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this);}
extractRotation(e){const t=this.elements,n=e.elements,i=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return((t[0]=n[0]*i),(t[1]=n[1]*i),(t[2]=n[2]*i),(t[3]=0),(t[4]=n[4]*r),(t[5]=n[5]*r),(t[6]=n[6]*r),(t[7]=0),(t[8]=n[8]*o),(t[9]=n[9]*o),(t[10]=n[10]*o),(t[11]=0),(t[12]=0),(t[13]=0),(t[14]=0),(t[15]=1),this);}
makeRotationFromEuler(e){(e&&e.isEuler)||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,p=a*u,g=a*h;(t[0]=l*u),(t[4]=-l*h),(t[8]=c),(t[1]=f+p*c),(t[5]=d-g*c),(t[9]=-a*l),(t[2]=g-d*c),(t[6]=p+f*c),(t[10]=o*l);}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,g=c*h;(t[0]=d+g*a),(t[4]=p*a-f),(t[8]=o*c),(t[1]=o*h),(t[5]=o*u),(t[9]=-a),(t[2]=f*a-p),(t[6]=g+d*a),(t[10]=o*l);}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,g=c*h;(t[0]=d-g*a),(t[4]=-o*h),(t[8]=p+f*a),(t[1]=f+p*a),(t[5]=o*u),(t[9]=g-d*a),(t[2]=-o*c),(t[6]=a),(t[10]=o*l);}else if(e.order==="ZYX"){const d=o*u,f=o*h,p=a*u,g=a*h;(t[0]=l*u),(t[4]=p*c-f),(t[8]=d*c+g),(t[1]=l*h),(t[5]=g*c+d),(t[9]=f*c-p),(t[2]=-c),(t[6]=a*l),(t[10]=o*l);}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,g=a*c;(t[0]=l*u),(t[4]=g-d*h),(t[8]=p*h+f),(t[1]=h),(t[5]=o*u),(t[9]=-a*u),(t[2]=-c*u),(t[6]=f*h+p),(t[10]=d-g*h);}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,g=a*c;(t[0]=l*u),(t[4]=-h),(t[8]=c*u),(t[1]=d*h+g),(t[5]=o*u),(t[9]=f*h-p),(t[2]=p*h-f),(t[6]=a*u),(t[10]=g*h+d);}
return((t[3]=0),(t[7]=0),(t[11]=0),(t[12]=0),(t[13]=0),(t[14]=0),(t[15]=1),this);}
makeRotationFromQuaternion(e){return this.compose(gb,e,_b);}
lookAt(e,t,n){const i=this.elements;return(Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Xi.crossVectors(n,Sn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?(Sn.x+=1e-4):(Sn.z+=1e-4),Sn.normalize(),Xi.crossVectors(n,Sn)),Xi.normalize(),Pl.crossVectors(Sn,Xi),(i[0]=Xi.x),(i[4]=Pl.x),(i[8]=Sn.x),(i[1]=Xi.y),(i[5]=Pl.y),(i[9]=Sn.y),(i[2]=Xi.z),(i[6]=Pl.z),(i[10]=Sn.z),this);}
multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e);}
premultiply(e){return this.multiplyMatrices(e,this);}
multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],g=n[6],y=n[10],_=n[14],m=n[3],w=n[7],v=n[11],x=n[15],M=i[0],S=i[4],T=i[8],D=i[12],I=i[1],b=i[5],R=i[9],F=i[13],O=i[2],H=i[6],A=i[10],z=i[14],U=i[3],B=i[7],j=i[11],X=i[15];return((r[0]=o*M+a*I+l*O+c*U),(r[4]=o*S+a*b+l*H+c*B),(r[8]=o*T+a*R+l*A+c*j),(r[12]=o*D+a*F+l*z+c*X),(r[1]=u*M+h*I+d*O+f*U),(r[5]=u*S+h*b+d*H+f*B),(r[9]=u*T+h*R+d*A+f*j),(r[13]=u*D+h*F+d*z+f*X),(r[2]=p*M+g*I+y*O+_*U),(r[6]=p*S+g*b+y*H+_*B),(r[10]=p*T+g*R+y*A+_*j),(r[14]=p*D+g*F+y*z+_*X),(r[3]=m*M+w*I+v*O+x*U),(r[7]=m*S+w*b+v*H+x*B),(r[11]=m*T+w*R+v*A+x*j),(r[15]=m*D+w*F+v*z+x*X),this);}
multiplyScalar(e){const t=this.elements;return((t[0]*=e),(t[4]*=e),(t[8]*=e),(t[12]*=e),(t[1]*=e),(t[5]*=e),(t[9]*=e),(t[13]*=e),(t[2]*=e),(t[6]*=e),(t[10]*=e),(t[14]*=e),(t[3]*=e),(t[7]*=e),(t[11]*=e),(t[15]*=e),this);}
determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],g=e[7],y=e[11],_=e[15];return(p*(+r*l*h-
i*c*h-
r*a*d+
n*c*d+
i*a*f-
n*l*f)+
g*(+t*l*f-
t*c*d+
r*o*d-
i*o*f+
i*c*u-
r*l*u)+
y*(+t*c*h-
t*a*f-
r*o*h+
n*o*f+
r*a*u-
n*c*u)+
_*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u));}
transpose(){const e=this.elements;let t;return((t=e[1]),(e[1]=e[4]),(e[4]=t),(t=e[2]),(e[2]=e[8]),(e[8]=t),(t=e[6]),(e[6]=e[9]),(e[9]=t),(t=e[3]),(e[3]=e[12]),(e[12]=t),(t=e[7]),(e[7]=e[13]),(e[13]=t),(t=e[11]),(e[11]=e[14]),(e[14]=t),this);}
setPosition(e,t,n){const i=this.elements;return(e.isVector3?((i[12]=e.x),(i[13]=e.y),(i[14]=e.z)):((i[12]=e),(i[13]=t),(i[14]=n)),this);}
invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],g=e[13],y=e[14],_=e[15],m=h*y*c-g*d*c+g*l*f-a*y*f-h*l*_+a*d*_,w=p*d*c-u*y*c-p*l*f+o*y*f+u*l*_-o*d*_,v=u*g*c-p*h*c+p*a*f-o*g*f-u*a*_+o*h*_,x=p*h*l-u*g*l-p*a*d+o*g*d+u*a*y-o*h*y,M=t*m+n*w+i*v+r*x;if(M===0)
return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/M;return((e[0]=m*S),(e[1]=(g*d*r-
h*y*r-
g*i*f+
n*y*f+
h*i*_-
n*d*_)*S),(e[2]=(a*y*r-
g*l*r+
g*i*c-
n*y*c-
a*i*_+
n*l*_)*S),(e[3]=(h*l*r-
a*d*r-
h*i*c+
n*d*c+
a*i*f-
n*l*f)*S),(e[4]=w*S),(e[5]=(u*y*r-
p*d*r+
p*i*f-
t*y*f-
u*i*_+
t*d*_)*S),(e[6]=(p*l*r-
o*y*r-
p*i*c+
t*y*c+
o*i*_-
t*l*_)*S),(e[7]=(o*d*r-
u*l*r+
u*i*c-
t*d*c-
o*i*f+
t*l*f)*S),(e[8]=v*S),(e[9]=(p*h*r-
u*g*r-
p*n*f+
t*g*f+
u*n*_-
t*h*_)*S),(e[10]=(o*g*r-
p*a*r+
p*n*c-
t*g*c-
o*n*_+
t*a*_)*S),(e[11]=(u*a*r-
o*h*r-
u*n*c+
t*h*c+
o*n*f-
t*a*f)*S),(e[12]=x*S),(e[13]=(u*g*i-
p*h*i+
p*n*d-
t*g*d-
u*n*y+
t*h*y)*S),(e[14]=(p*a*i-
o*g*i-
p*n*l+
t*g*l+
o*n*y-
t*a*y)*S),(e[15]=(o*h*i-
u*a*i+
u*n*l-
t*h*l-
o*n*d+
t*a*d)*S),this);}
scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return((t[0]*=n),(t[4]*=i),(t[8]*=r),(t[1]*=n),(t[5]*=i),(t[9]*=r),(t[2]*=n),(t[6]*=i),(t[10]*=r),(t[3]*=n),(t[7]*=i),(t[11]*=r),this);}
getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i));}
makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this;}
makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this;}
makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this;}
makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this;}
makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return(this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this);}
makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this;}
makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this;}
compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,g=o*u,y=o*h,_=a*h,m=l*c,w=l*u,v=l*h,x=n.x,M=n.y,S=n.z;return((i[0]=(1-(g+_))*x),(i[1]=(f+v)*x),(i[2]=(p-w)*x),(i[3]=0),(i[4]=(f-v)*M),(i[5]=(1-(d+_))*M),(i[6]=(y+m)*M),(i[7]=0),(i[8]=(p+w)*S),(i[9]=(y-m)*S),(i[10]=(1-(d+g))*S),(i[11]=0),(i[12]=e.x),(i[13]=e.y),(i[14]=e.z),(i[15]=1),this);}
decompose(e,t,n){const i=this.elements;let r=Os.set(i[0],i[1],i[2]).length();const o=Os.set(i[4],i[5],i[6]).length(),a=Os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),(e.x=i[12]),(e.y=i[13]),(e.z=i[14]),Xn.copy(this);const c=1/r,u=1/o,h=1/a;return((Xn.elements[0]*=c),(Xn.elements[1]*=c),(Xn.elements[2]*=c),(Xn.elements[4]*=u),(Xn.elements[5]*=u),(Xn.elements[6]*=u),(Xn.elements[8]*=h),(Xn.elements[9]*=h),(Xn.elements[10]*=h),t.setFromRotationMatrix(Xn),(n.x=r),(n.y=o),(n.z=a),this);}
makePerspective(e,t,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=(2*r)/(t-e),c=(2*r)/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+r)/(o-r),f=(-2*o*r)/(o-r);return((a[0]=l),(a[4]=0),(a[8]=u),(a[12]=0),(a[1]=0),(a[5]=c),(a[9]=h),(a[13]=0),(a[2]=0),(a[6]=0),(a[10]=d),(a[14]=f),(a[3]=0),(a[7]=0),(a[11]=-1),(a[15]=0),this);}
makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),h=(t+e)*l,d=(n+i)*c,f=(o+r)*u;return((a[0]=2*l),(a[4]=0),(a[8]=0),(a[12]=-h),(a[1]=0),(a[5]=2*c),(a[9]=0),(a[13]=-d),(a[2]=0),(a[6]=0),(a[10]=-2*u),(a[14]=-f),(a[3]=0),(a[7]=0),(a[11]=0),(a[15]=1),this);}
equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0;}
fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this;}
toArray(e=[],t=0){const n=this.elements;return((e[t]=n[0]),(e[t+1]=n[1]),(e[t+2]=n[2]),(e[t+3]=n[3]),(e[t+4]=n[4]),(e[t+5]=n[5]),(e[t+6]=n[6]),(e[t+7]=n[7]),(e[t+8]=n[8]),(e[t+9]=n[9]),(e[t+10]=n[10]),(e[t+11]=n[11]),(e[t+12]=n[12]),(e[t+13]=n[13]),(e[t+14]=n[14]),(e[t+15]=n[15]),e);}}
Pe.prototype.isMatrix4=!0;const Os=new C(),Xn=new Pe(),gb=new C(0,0,0),_b=new C(1,1,1),Xi=new C(),Pl=new C(),Sn=new C(),Zp=new Pe(),Kp=new Ht();class Mr{constructor(e=0,t=0,n=0,i=Mr.DefaultOrder){(this._x=e),(this._y=t),(this._z=n),(this._order=i);}
get x(){return this._x;}
set x(e){(this._x=e),this._onChangeCallback();}
get y(){return this._y;}
set y(e){(this._y=e),this._onChangeCallback();}
get z(){return this._z;}
set z(e){(this._z=e),this._onChangeCallback();}
get order(){return this._order;}
set order(e){(this._order=e),this._onChangeCallback();}
set(e,t,n,i=this._order){return((this._x=e),(this._y=t),(this._z=n),(this._order=i),this._onChangeCallback(),this);}
clone(){return new this.constructor(this._x,this._y,this._z,this._order);}
copy(e){return((this._x=e._x),(this._y=e._y),(this._z=e._z),(this._order=e._order),this._onChangeCallback(),this);}
setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case "XYZ":(this._y=Math.asin(Zt(a,-1,1))),Math.abs(a)<0.9999999?((this._x=Math.atan2(-u,f)),(this._z=Math.atan2(-o,r))):((this._x=Math.atan2(d,c)),(this._z=0));break;case "YXZ":(this._x=Math.asin(-Zt(u,-1,1))),Math.abs(u)<0.9999999?((this._y=Math.atan2(a,f)),(this._z=Math.atan2(l,c))):((this._y=Math.atan2(-h,r)),(this._z=0));break;case "ZXY":(this._x=Math.asin(Zt(d,-1,1))),Math.abs(d)<0.9999999?((this._y=Math.atan2(-h,f)),(this._z=Math.atan2(-o,c))):((this._y=0),(this._z=Math.atan2(l,r)));break;case "ZYX":(this._y=Math.asin(-Zt(h,-1,1))),Math.abs(h)<0.9999999?((this._x=Math.atan2(d,f)),(this._z=Math.atan2(l,r))):((this._x=0),(this._z=Math.atan2(-o,c)));break;case "YZX":(this._z=Math.asin(Zt(l,-1,1))),Math.abs(l)<0.9999999?((this._x=Math.atan2(-u,c)),(this._y=Math.atan2(-h,r))):((this._x=0),(this._y=Math.atan2(a,f)));break;case "XZY":(this._z=Math.asin(-Zt(o,-1,1))),Math.abs(o)<0.9999999?((this._x=Math.atan2(d,c)),(this._y=Math.atan2(a,r))):((this._x=Math.atan2(-u,f)),(this._y=0));break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+
t);}
return(this._order=t),n===!0&&this._onChangeCallback(),this;}
setFromQuaternion(e,t,n){return(Zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zp,t,n));}
setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t);}
reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e);}
equals(e){return(e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order);}
fromArray(e){return((this._x=e[0]),(this._y=e[1]),(this._z=e[2]),e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this);}
toArray(e=[],t=0){return((e[t]=this._x),(e[t+1]=this._y),(e[t+2]=this._z),(e[t+3]=this._order),e);}
_onChange(e){return(this._onChangeCallback=e),this;}
_onChangeCallback(){}}
Mr.prototype.isEuler=!0;Mr.DefaultOrder="XYZ";Mr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class hu{constructor(){this.mask=1;}
set(e){this.mask=((1<<e)|0)>>>0;}
enable(e){this.mask|=(1<<e)|0;}
enableAll(){this.mask=-1;}
toggle(e){this.mask^=(1<<e)|0;}
disable(e){this.mask&=~((1<<e)|0);}
disableAll(){this.mask=0;}
test(e){return(this.mask&e.mask)!==0;}
isEnabled(e){return(this.mask&((1<<e)|0))!==0;}}
let yb=0;const Qp=new C(),ks=new Ht(),vi=new Pe(),Rl=new C(),sa=new C(),xb=new C(),vb=new Ht(),em=new C(1,0,0),tm=new C(0,1,0),nm=new C(0,0,1),wb={type:"added"},im={type:"removed"};class Ye extends Hi{constructor(){super(),Object.defineProperty(this,"id",{value:yb++}),(this.uuid=Pn()),(this.name=""),(this.type="Object3D"),(this.parent=null),(this.children=[]),(this.up=Ye.DefaultUp.clone());const e=new C(),t=new Mr(),n=new Ht(),i=new C(1,1,1);function r(){n.setFromEuler(t,!1);}
function o(){t.setFromQuaternion(n,void 0,!1);}
t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe()},normalMatrix:{value:new Ut()},}),(this.matrix=new Pe()),(this.matrixWorld=new Pe()),(this.matrixAutoUpdate=Ye.DefaultMatrixAutoUpdate),(this.matrixWorldNeedsUpdate=!1),(this.layers=new hu()),(this.visible=!0),(this.castShadow=!1),(this.receiveShadow=!1),(this.frustumCulled=!0),(this.renderOrder=0),(this.animations=[]),(this.userData={});}
onBeforeRender(){}
onAfterRender(){}
applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale);}
applyQuaternion(e){return this.quaternion.premultiply(e),this;}
setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t);}
setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0);}
setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e);}
setRotationFromQuaternion(e){this.quaternion.copy(e);}
rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this;}
rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this;}
rotateX(e){return this.rotateOnAxis(em,e);}
rotateY(e){return this.rotateOnAxis(tm,e);}
rotateZ(e){return this.rotateOnAxis(nm,e);}
translateOnAxis(e,t){return(Qp.copy(e).applyQuaternion(this.quaternion),this.position.add(Qp.multiplyScalar(t)),this);}
translateX(e){return this.translateOnAxis(em,e);}
translateY(e){return this.translateOnAxis(tm,e);}
translateZ(e){return this.translateOnAxis(nm,e);}
localToWorld(e){return e.applyMatrix4(this.matrixWorld);}
worldToLocal(e){return e.applyMatrix4(vi.copy(this.matrixWorld).invert());}
lookAt(e,t,n){e.isVector3?Rl.copy(e):Rl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(sa,Rl,this.up):vi.lookAt(Rl,sa,this.up),this.quaternion.setFromRotationMatrix(vi),i&&(vi.extractRotation(i.matrixWorld),ks.setFromRotationMatrix(vi),this.quaternion.premultiply(ks.invert()));}
add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this;}
return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),(e.parent=this),this.children.push(e),e.dispatchEvent(wb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this);}
remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this;}
const t=this.children.indexOf(e);return(t!==-1&&((e.parent=null),this.children.splice(t,1),e.dispatchEvent(im)),this);}
removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this;}
clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];(t.parent=null),t.dispatchEvent(im);}
return(this.children.length=0),this;}
attach(e){return(this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this);}
getObjectById(e){return this.getObjectByProperty("id",e);}
getObjectByName(e){return this.getObjectByProperty("name",e);}
getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o;}}
getWorldPosition(e){return(this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld));}
getWorldQuaternion(e){return(this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,xb),e);}
getWorldScale(e){return(this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,vb,e),e);}
getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize();}
raycast(){}
traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e);}
traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e);}
traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e));}
updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),(this.matrixWorldNeedsUpdate=!0);}
updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),(this.matrixWorldNeedsUpdate=!1),(e=!0));const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e);}
updateWorldMatrix(e,t){const n=this.parent;if((e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0)){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0);}}
toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&((e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{},}),(n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON",}));const i={};(i.uuid=this.uuid),(i.type=this.type),this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),(i.layers=this.layers.mask),(i.matrix=this.matrix.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&((i.type="InstancedMesh"),(i.count=this.count),(i.instanceMatrix=this.instanceMatrix.toJSON()),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid;}
if(this.isScene)
this.background&&(this.background.isColor?(i.background=this.background.toJSON()):this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))
for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h);}
else r(e.shapes,l);}}
if((this.isSkinnedMesh&&((i.bindMode=this.bindMode),(i.bindMatrix=this.bindMatrix.toArray()),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),(i.skeleton=this.skeleton.uuid))),this.material!==void 0))
if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)
a.push(r(e.materials,this.material[l]));i.material=a;}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)
i.children.push(this.children[a].toJSON(e).object);}
if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l));}}
if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p);}
return(n.object=i),n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u);}
return l;}}
clone(e){return new this.constructor().copy(this,e);}
copy(e,t=!0){if(((this.name=e.name),this.up.copy(e.up),this.position.copy(e.position),(this.rotation.order=e.rotation.order),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),(this.matrixAutoUpdate=e.matrixAutoUpdate),(this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate),(this.layers.mask=e.layers.mask),(this.visible=e.visible),(this.castShadow=e.castShadow),(this.receiveShadow=e.receiveShadow),(this.frustumCulled=e.frustumCulled),(this.renderOrder=e.renderOrder),(this.userData=JSON.parse(JSON.stringify(e.userData))),t===!0))
for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone());}
return this;}}
Ye.DefaultUp=new C(0,1,0);Ye.DefaultMatrixAutoUpdate=!0;Ye.prototype.isObject3D=!0;const $n=new C(),wi=new C(),lh=new C(),bi=new C(),Ns=new C(),zs=new C(),rm=new C(),ch=new C(),uh=new C(),hh=new C();class Rt{constructor(e=new C(),t=new C(),n=new C()){(this.a=e),(this.b=t),(this.c=n);}
static getNormal(e,t,n,i){i.subVectors(n,t),$n.subVectors(e,t),i.cross($n);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0);}
static getBarycoord(e,t,n,i,r){$n.subVectors(i,t),wi.subVectors(n,t),lh.subVectors(e,t);const o=$n.dot($n),a=$n.dot(wi),l=$n.dot(lh),c=wi.dot(wi),u=wi.dot(lh),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f);}
static containsPoint(e,t,n,i){return(this.getBarycoord(e,t,n,i,bi),bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1);}
static getUV(e,t,n,i,r,o,a,l){return(this.getBarycoord(e,t,n,i,bi),l.set(0,0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l);}
static isFrontFacing(e,t,n,i){return $n.subVectors(n,t),wi.subVectors(e,t),$n.cross(wi).dot(i)<0;}
set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this;}
setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this;}
setFromAttributeAndIndices(e,t,n,i){return(this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this);}
clone(){return new this.constructor().copy(this);}
copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this;}
getArea(){return($n.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),$n.cross(wi).length()*0.5);}
getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3);}
getNormal(e){return Rt.getNormal(this.a,this.b,this.c,e);}
getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c);}
getBarycoord(e,t){return Rt.getBarycoord(e,this.a,this.b,this.c,t);}
getUV(e,t,n,i,r){return Rt.getUV(e,this.a,this.b,this.c,t,n,i,r);}
containsPoint(e){return Rt.containsPoint(e,this.a,this.b,this.c);}
isFrontFacing(e){return Rt.isFrontFacing(this.a,this.b,this.c,e);}
intersectsBox(e){return e.intersectsTriangle(this);}
closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ns.subVectors(i,n),zs.subVectors(r,n),ch.subVectors(e,n);const l=Ns.dot(ch),c=zs.dot(ch);if(l<=0&&c<=0)return t.copy(n);uh.subVectors(e,i);const u=Ns.dot(uh),h=zs.dot(uh);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)
return(o=l/(l-u)),t.copy(n).addScaledVector(Ns,o);hh.subVectors(e,r);const f=Ns.dot(hh),p=zs.dot(hh);if(p>=0&&f<=p)return t.copy(r);const g=f*c-l*p;if(g<=0&&c>=0&&p<=0)
return(a=c/(c-p)),t.copy(n).addScaledVector(zs,a);const y=u*p-f*h;if(y<=0&&h-u>=0&&f-p>=0)
return(rm.subVectors(r,i),(a=(h-u)/(h-u+(f-p))),t.copy(i).addScaledVector(rm,a));const _=1/(y+g+d);return((o=g*_),(a=d*_),t.copy(n).addScaledVector(Ns,o).addScaledVector(zs,a));}
equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c);}}
let bb=0;class St extends Hi{constructor(){super(),Object.defineProperty(this,"id",{value:bb++}),(this.uuid=Pn()),(this.name=""),(this.type="Material"),(this.fog=!0),(this.blending=rs),(this.side=ds),(this.vertexColors=!1),(this.opacity=1),(this.transparent=!1),(this.blendSrc=xf),(this.blendDst=vf),(this.blendEquation=Hr),(this.blendSrcAlpha=null),(this.blendDstAlpha=null),(this.blendEquationAlpha=null),(this.depthFunc=Yc),(this.depthTest=!0),(this.depthWrite=!0),(this.stencilWriteMask=255),(this.stencilFunc=Z_),(this.stencilRef=0),(this.stencilFuncMask=255),(this.stencilFail=Tc),(this.stencilZFail=Tc),(this.stencilZPass=Tc),(this.stencilWrite=!1),(this.clippingPlanes=null),(this.clipIntersection=!1),(this.clipShadows=!1),(this.shadowSide=null),(this.colorWrite=!0),(this.precision=null),(this.polygonOffset=!1),(this.polygonOffsetFactor=0),(this.polygonOffsetUnits=0),(this.dithering=!1),(this.alphaToCoverage=!1),(this.premultipliedAlpha=!1),(this.visible=!0),(this.toneMapped=!0),(this.userData={}),(this.version=0),(this._alphaTest=0);}
get alphaTest(){return this._alphaTest;}
set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,(this._alphaTest=e);}
onBuild(){}
onBeforeRender(){}
onBeforeCompile(){}
customProgramCacheKey(){return this.onBeforeCompile.toString();}
setValues(e){if(e!==void 0)
for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue;}
if(t==="shading"){console.warn("THREE."+
this.type+
": .shading has been removed. Use the boolean .flatShading instead."),(this.flatShading=n===yf);continue;}
const i=this[t];if(i===void 0){console.warn("THREE."+
this.type+
": '"+
t+
"' is not a property of this material.");continue;}
i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):(this[t]=n);}}
toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON",},};(n.uuid=this.uuid),(n.type=this.type),this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&((n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid),(n.clearcoatNormalScale=this.clearcoatNormalScale.toArray())),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&((n.lightMap=this.lightMap.toJSON(e).uuid),(n.lightMapIntensity=this.lightMapIntensity)),this.aoMap&&this.aoMap.isTexture&&((n.aoMap=this.aoMap.toJSON(e).uuid),(n.aoMapIntensity=this.aoMapIntensity)),this.bumpMap&&this.bumpMap.isTexture&&((n.bumpMap=this.bumpMap.toJSON(e).uuid),(n.bumpScale=this.bumpScale)),this.normalMap&&this.normalMap.isTexture&&((n.normalMap=this.normalMap.toJSON(e).uuid),(n.normalMapType=this.normalMapType),(n.normalScale=this.normalScale.toArray())),this.displacementMap&&this.displacementMap.isTexture&&((n.displacementMap=this.displacementMap.toJSON(e).uuid),(n.displacementScale=this.displacementScale),(n.displacementBias=this.displacementBias)),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&((n.envMap=this.envMap.toJSON(e).uuid),this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==ds&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),(n.depthFunc=this.depthFunc),(n.depthTest=this.depthTest),(n.depthWrite=this.depthWrite),(n.colorWrite=this.colorWrite),(n.stencilWrite=this.stencilWrite),(n.stencilWriteMask=this.stencilWriteMask),(n.stencilFunc=this.stencilFunc),(n.stencilRef=this.stencilRef),(n.stencilFuncMask=this.stencilFuncMask),(n.stencilFail=this.stencilFail),(n.stencilZFail=this.stencilZFail),(n.stencilZPass=this.stencilZPass),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l);}
return o;}
if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o);}
return n;}
clone(){return new this.constructor().copy(this);}
copy(e){(this.name=e.name),(this.fog=e.fog),(this.blending=e.blending),(this.side=e.side),(this.vertexColors=e.vertexColors),(this.opacity=e.opacity),(this.transparent=e.transparent),(this.blendSrc=e.blendSrc),(this.blendDst=e.blendDst),(this.blendEquation=e.blendEquation),(this.blendSrcAlpha=e.blendSrcAlpha),(this.blendDstAlpha=e.blendDstAlpha),(this.blendEquationAlpha=e.blendEquationAlpha),(this.depthFunc=e.depthFunc),(this.depthTest=e.depthTest),(this.depthWrite=e.depthWrite),(this.stencilWriteMask=e.stencilWriteMask),(this.stencilFunc=e.stencilFunc),(this.stencilRef=e.stencilRef),(this.stencilFuncMask=e.stencilFuncMask),(this.stencilFail=e.stencilFail),(this.stencilZFail=e.stencilZFail),(this.stencilZPass=e.stencilZPass),(this.stencilWrite=e.stencilWrite);const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone();}
return((this.clippingPlanes=n),(this.clipIntersection=e.clipIntersection),(this.clipShadows=e.clipShadows),(this.shadowSide=e.shadowSide),(this.colorWrite=e.colorWrite),(this.precision=e.precision),(this.polygonOffset=e.polygonOffset),(this.polygonOffsetFactor=e.polygonOffsetFactor),(this.polygonOffsetUnits=e.polygonOffsetUnits),(this.dithering=e.dithering),(this.alphaTest=e.alphaTest),(this.alphaToCoverage=e.alphaToCoverage),(this.premultipliedAlpha=e.premultipliedAlpha),(this.visible=e.visible),(this.toneMapped=e.toneMapped),(this.userData=JSON.parse(JSON.stringify(e.userData))),this);}
dispose(){this.dispatchEvent({type:"dispose"});}
set needsUpdate(e){e===!0&&this.version++;}}
St.prototype.isMaterial=!0;St.fromType=function(){return null;};class _i extends St{constructor(e){super(),(this.type="MeshBasicMaterial"),(this.color=new ve(16777215)),(this.map=null),(this.lightMap=null),(this.lightMapIntensity=1),(this.aoMap=null),(this.aoMapIntensity=1),(this.specularMap=null),(this.alphaMap=null),(this.envMap=null),(this.combine=il),(this.reflectivity=1),(this.refractionRatio=0.98),(this.wireframe=!1),(this.wireframeLinewidth=1),(this.wireframeLinecap="round"),(this.wireframeLinejoin="round"),this.setValues(e);}
copy(e){return(super.copy(e),this.color.copy(e.color),(this.map=e.map),(this.lightMap=e.lightMap),(this.lightMapIntensity=e.lightMapIntensity),(this.aoMap=e.aoMap),(this.aoMapIntensity=e.aoMapIntensity),(this.specularMap=e.specularMap),(this.alphaMap=e.alphaMap),(this.envMap=e.envMap),(this.combine=e.combine),(this.reflectivity=e.reflectivity),(this.refractionRatio=e.refractionRatio),(this.wireframe=e.wireframe),(this.wireframeLinewidth=e.wireframeLinewidth),(this.wireframeLinecap=e.wireframeLinecap),(this.wireframeLinejoin=e.wireframeLinejoin),this);}}
_i.prototype.isMeshBasicMaterial=!0;const ut=new C(),Dl=new J();class Xe{constructor(e,t,n){if(Array.isArray(e))
throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");(this.name=""),(this.array=e),(this.itemSize=t),(this.count=e!==void 0?e.length/t:0),(this.normalized=n===!0),(this.usage=Po),(this.updateRange={offset:0,count:-1}),(this.version=0);}
onUploadCallback(){}
set needsUpdate(e){e===!0&&this.version++;}
setUsage(e){return(this.usage=e),this;}
copy(e){return((this.name=e.name),(this.array=new e.array.constructor(e.array)),(this.itemSize=e.itemSize),(this.count=e.count),(this.normalized=e.normalized),(this.usage=e.usage),this);}
copyAt(e,t,n){(e*=this.itemSize),(n*=t.itemSize);for(let i=0,r=this.itemSize;i<r;i++)
this.array[e+i]=t.array[n+i];return this;}
copyArray(e){return this.array.set(e),this;}
copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),(o=new ve())),(t[n++]=o.r),(t[n++]=o.g),(t[n++]=o.b);}
return this;}
copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),(o=new J())),(t[n++]=o.x),(t[n++]=o.y);}
return this;}
copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),(o=new C())),(t[n++]=o.x),(t[n++]=o.y),(t[n++]=o.z);}
return this;}
copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),(o=new nt())),(t[n++]=o.x),(t[n++]=o.y),(t[n++]=o.z),(t[n++]=o.w);}
return this;}
applyMatrix3(e){if(this.itemSize===2)
for(let t=0,n=this.count;t<n;t++)
Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)
for(let t=0,n=this.count;t<n;t++)
ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this;}
applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)
(ut.x=this.getX(t)),(ut.y=this.getY(t)),(ut.z=this.getZ(t)),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this;}
applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)
(ut.x=this.getX(t)),(ut.y=this.getY(t)),(ut.z=this.getZ(t)),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this;}
transformDirection(e){for(let t=0,n=this.count;t<n;t++)
(ut.x=this.getX(t)),(ut.y=this.getY(t)),(ut.z=this.getZ(t)),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this;}
set(e,t=0){return this.array.set(e,t),this;}
getX(e){return this.array[e*this.itemSize];}
setX(e,t){return(this.array[e*this.itemSize]=t),this;}
getY(e){return this.array[e*this.itemSize+1];}
setY(e,t){return(this.array[e*this.itemSize+1]=t),this;}
getZ(e){return this.array[e*this.itemSize+2];}
setZ(e,t){return(this.array[e*this.itemSize+2]=t),this;}
getW(e){return this.array[e*this.itemSize+3];}
setW(e,t){return(this.array[e*this.itemSize+3]=t),this;}
setXY(e,t,n){return((e*=this.itemSize),(this.array[e+0]=t),(this.array[e+1]=n),this);}
setXYZ(e,t,n,i){return((e*=this.itemSize),(this.array[e+0]=t),(this.array[e+1]=n),(this.array[e+2]=i),this);}
setXYZW(e,t,n,i,r){return((e*=this.itemSize),(this.array[e+0]=t),(this.array[e+1]=n),(this.array[e+2]=i),(this.array[e+3]=r),this);}
onUpload(e){return(this.onUploadCallback=e),this;}
clone(){return new this.constructor(this.array,this.itemSize).copy(this);}
toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized,};return(this.name!==""&&(e.name=this.name),this.usage!==Po&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e);}}
Xe.prototype.isBufferAttribute=!0;class ry extends Xe{constructor(e,t,n){super(new Int8Array(e),t,n);}}
class sy extends Xe{constructor(e,t,n){super(new Uint8Array(e),t,n);}}
class oy extends Xe{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n);}}
class ay extends Xe{constructor(e,t,n){super(new Int16Array(e),t,n);}}
class du extends Xe{constructor(e,t,n){super(new Uint16Array(e),t,n);}}
class ly extends Xe{constructor(e,t,n){super(new Int32Array(e),t,n);}}
class fu extends Xe{constructor(e,t,n){super(new Uint32Array(e),t,n);}}
class cy extends Xe{constructor(e,t,n){super(new Uint16Array(e),t,n);}}
cy.prototype.isFloat16BufferAttribute=!0;class Ce extends Xe{constructor(e,t,n){super(new Float32Array(e),t,n);}}
class uy extends Xe{constructor(e,t,n){super(new Float64Array(e),t,n);}}
let Mb=0;const Bn=new Pe(),dh=new Ye(),Us=new C(),Tn=new In(),oa=new In(),Vt=new C();class Be extends Hi{constructor(){super(),Object.defineProperty(this,"id",{value:Mb++}),(this.uuid=Pn()),(this.name=""),(this.type="BufferGeometry"),(this.index=null),(this.attributes={}),(this.morphAttributes={}),(this.morphTargetsRelative=!1),(this.groups=[]),(this.boundingBox=null),(this.boundingSphere=null),(this.drawRange={start:0,count:1/0}),(this.userData={});}
getIndex(){return this.index;}
setIndex(e){return(Array.isArray(e)?(this.index=new(Q_(e)?fu:du)(e,1)):(this.index=e),this);}
getAttribute(e){return this.attributes[e];}
setAttribute(e,t){return(this.attributes[e]=t),this;}
deleteAttribute(e){return delete this.attributes[e],this;}
hasAttribute(e){return this.attributes[e]!==void 0;}
addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n});}
clearGroups(){this.groups=[];}
setDrawRange(e,t){(this.drawRange.start=e),(this.drawRange.count=t);}
applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),(t.needsUpdate=!0));const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(e);n.applyNormalMatrix(r),(n.needsUpdate=!0);}
const i=this.attributes.tangent;return(i!==void 0&&(i.transformDirection(e),(i.needsUpdate=!0)),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this);}
applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this;}
rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this;}
rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this;}
rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this;}
translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this;}
scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this;}
lookAt(e){return dh.lookAt(e),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this;}
center(){return(this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this);}
setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0);}
return this.setAttribute("position",new Ce(t,3)),this;}
computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In());const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return;}
if(e!==void 0){if((this.boundingBox.setFromBufferAttribute(e),t))
for(let n=0,i=t.length;n<i;n++){const r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max));}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this);}
computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr());const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C(),1/0);return;}
if(e){const n=this.boundingSphere.center;if((Tn.setFromBufferAttribute(e),t))
for(let r=0,o=t.length;r<o;r++){const a=t[r];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(Tn.min,oa.min),Tn.expandByPoint(Vt),Vt.addVectors(Tn.max,oa.max),Tn.expandByPoint(Vt)):(Tn.expandByPoint(oa.min),Tn.expandByPoint(oa.max));}
Tn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)
Vt.fromBufferAttribute(e,r),(i=Math.max(i,n.distanceToSquared(Vt)));if(t)
for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)
Vt.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(e,c),Vt.add(Us)),(i=Math.max(i,n.distanceToSquared(Vt)));}
(this.boundingSphere.radius=Math.sqrt(i)),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this);}}
computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return;}
const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<a;I++)(c[I]=new C()),(u[I]=new C());const h=new C(),d=new C(),f=new C(),p=new J(),g=new J(),y=new J(),_=new C(),m=new C();function w(I,b,R){h.fromArray(i,I*3),d.fromArray(i,b*3),f.fromArray(i,R*3),p.fromArray(o,I*2),g.fromArray(o,b*2),y.fromArray(o,R*2),d.sub(h),f.sub(h),g.sub(p),y.sub(p);const F=1/(g.x*y.y-y.x*g.y);!isFinite(F)||(_.copy(d).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(F),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(F),c[I].add(_),c[b].add(_),c[R].add(_),u[I].add(m),u[b].add(m),u[R].add(m));}
let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let I=0,b=v.length;I<b;++I){const R=v[I],F=R.start,O=R.count;for(let H=F,A=F+O;H<A;H+=3)w(n[H+0],n[H+1],n[H+2]);}
const x=new C(),M=new C(),S=new C(),T=new C();function D(I){S.fromArray(r,I*3),T.copy(S);const b=c[I];x.copy(b),x.sub(S.multiplyScalar(S.dot(b))).normalize(),M.crossVectors(T,b);const F=M.dot(u[I])<0?-1:1;(l[I*4]=x.x),(l[I*4+1]=x.y),(l[I*4+2]=x.z),(l[I*4+3]=F);}
for(let I=0,b=v.length;I<b;++I){const R=v[I],F=R.start,O=R.count;for(let H=F,A=F+O;H<A;H+=3)
D(n[H+0]),D(n[H+1]),D(n[H+2]);}}
computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)
(n=new Xe(new Float32Array(t.count*3),3)),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C(),r=new C(),o=new C(),a=new C(),l=new C(),c=new C(),u=new C(),h=new C();if(e)
for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),g=e.getX(d+1),y=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,y),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z);}
else
for(let d=0,f=t.count;d<f;d+=3)
i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),(n.needsUpdate=!0);}}
merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return;}
t===void 0&&((t=0),console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,d=c;h<u;h++,d++)o[d]=l[h];}
return this;}
normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)
Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z);}
toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let g=0,y=l.length;g<y;g++){a.isInterleavedBufferAttribute?(f=l[g]*a.data.stride+a.offset):(f=l[g]*u);for(let _=0;_<u;_++)d[p++]=c[f++];}
return new Xe(d,u,h);}
if(this.index===null)
return(console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this);const t=new Be(),n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c);}
const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f);}
t.morphAttributes[a]=l;}
t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex);}
return t;}
toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON",},};if(((e.uuid=this.uuid),(e.type=this.type),this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0)){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e;}
e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array),});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data);}
const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data));}
u.length>0&&((i[l]=u),(r=!0));}
r&&((e.data.morphAttributes=i),(e.data.morphTargetsRelative=this.morphTargetsRelative));const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return(a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius,}),e);}
clone(){return new this.constructor().copy(this);}
copy(e){(this.index=null),(this.attributes={}),(this.morphAttributes={}),(this.groups=[]),(this.boundingBox=null),(this.boundingSphere=null);const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t));}
const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u;}
this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex);}
const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return(l!==null&&(this.boundingSphere=l.clone()),(this.drawRange.start=e.drawRange.start),(this.drawRange.count=e.drawRange.count),(this.userData=e.userData),e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this);}
dispose(){this.dispatchEvent({type:"dispose"});}}
Be.prototype.isBufferGeometry=!0;const sm=new Pe(),Hs=new br(),fh=new wr(),$i=new C(),Yi=new C(),ji=new C(),ph=new C(),mh=new C(),gh=new C(),Il=new C(),Bl=new C(),Fl=new C(),Ol=new J(),kl=new J(),Nl=new J(),_h=new C(),zl=new C();class ht extends Ye{constructor(e=new Be(),t=new _i()){super(),(this.type="Mesh"),(this.geometry=e),(this.material=t),this.updateMorphTargets();}
copy(e){return(super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),(this.material=e.material),(this.geometry=e.geometry),this);}
updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){(this.morphTargetInfluences=[]),(this.morphTargetDictionary={});for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),(this.morphTargetDictionary[a]=r);}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");}}
raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),fh.copy(n.boundingSphere),fh.applyMatrix4(r),e.ray.intersectsSphere(fh)===!1)||(sm.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(sm),n.boundingBox!==null&&Hs.intersectsBox(n.boundingBox)===!1))
return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,f=n.groups,p=n.drawRange;if(a!==null)
if(Array.isArray(i))
for(let g=0,y=f.length;g<y;g++){const _=f[g],m=i[_.materialIndex],w=Math.max(_.start,p.start),v=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let x=w,M=v;x<M;x+=3){const S=a.getX(x),T=a.getX(x+1),D=a.getX(x+2);(o=Ul(this,m,e,Hs,l,c,u,h,d,S,T,D)),o&&((o.faceIndex=Math.floor(x/3)),(o.face.materialIndex=_.materialIndex),t.push(o));}}
else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let _=g,m=y;_<m;_+=3){const w=a.getX(_),v=a.getX(_+1),x=a.getX(_+2);(o=Ul(this,i,e,Hs,l,c,u,h,d,w,v,x)),o&&((o.faceIndex=Math.floor(_/3)),t.push(o));}}
else if(l!==void 0)
if(Array.isArray(i))
for(let g=0,y=f.length;g<y;g++){const _=f[g],m=i[_.materialIndex],w=Math.max(_.start,p.start),v=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let x=w,M=v;x<M;x+=3){const S=x,T=x+1,D=x+2;(o=Ul(this,m,e,Hs,l,c,u,h,d,S,T,D)),o&&((o.faceIndex=Math.floor(x/3)),(o.face.materialIndex=_.materialIndex),t.push(o));}}
else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let _=g,m=y;_<m;_+=3){const w=_,v=_+1,x=_+2;(o=Ul(this,i,e,Hs,l,c,u,h,d,w,v,x)),o&&((o.faceIndex=Math.floor(_/3)),t.push(o));}}}else
n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");}}
ht.prototype.isMesh=!0;function Sb(s,e,t,n,i,r,o,a){let l;if((e.side===Lt?(l=n.intersectTriangle(o,r,i,!0,a)):(l=n.intersectTriangle(i,r,o,e.side!==fs,a)),l===null))
return null;zl.copy(a),zl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(zl);return c<t.near||c>t.far?null:{distance:c,point:zl.clone(),object:s};}
function Ul(s,e,t,n,i,r,o,a,l,c,u,h){$i.fromBufferAttribute(i,c),Yi.fromBufferAttribute(i,u),ji.fromBufferAttribute(i,h);const d=s.morphTargetInfluences;if(r&&d){Il.set(0,0,0),Bl.set(0,0,0),Fl.set(0,0,0);for(let p=0,g=r.length;p<g;p++){const y=d[p],_=r[p];y!==0&&(ph.fromBufferAttribute(_,c),mh.fromBufferAttribute(_,u),gh.fromBufferAttribute(_,h),o?(Il.addScaledVector(ph,y),Bl.addScaledVector(mh,y),Fl.addScaledVector(gh,y)):(Il.addScaledVector(ph.sub($i),y),Bl.addScaledVector(mh.sub(Yi),y),Fl.addScaledVector(gh.sub(ji),y)));}
$i.add(Il),Yi.add(Bl),ji.add(Fl);}
s.isSkinnedMesh&&(s.boneTransform(c,$i),s.boneTransform(u,Yi),s.boneTransform(h,ji));const f=Sb(s,e,t,n,$i,Yi,ji,_h);if(f){a&&(Ol.fromBufferAttribute(a,c),kl.fromBufferAttribute(a,u),Nl.fromBufferAttribute(a,h),(f.uv=Rt.getUV(_h,$i,Yi,ji,Ol,kl,Nl,new J()))),l&&(Ol.fromBufferAttribute(l,c),kl.fromBufferAttribute(l,u),Nl.fromBufferAttribute(l,h),(f.uv2=Rt.getUV(_h,$i,Yi,ji,Ol,kl,Nl,new J())));const p={a:c,b:u,c:h,normal:new C(),materialIndex:0};Rt.getNormal($i,Yi,ji,p.normal),(f.face=p);}
return f;}
class Ni extends Be{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),(this.type="BoxGeometry"),(this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o,});const a=this;(i=Math.floor(i)),(r=Math.floor(r)),(o=Math.floor(o));const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(h,2));function p(g,y,_,m,w,v,x,M,S,T,D){const I=v/S,b=x/T,R=v/2,F=x/2,O=M/2,H=S+1,A=T+1;let z=0,U=0;const B=new C();for(let j=0;j<A;j++){const X=j*b-F;for(let K=0;K<H;K++){const ue=K*I-R;(B[g]=ue*m),(B[y]=X*w),(B[_]=O),c.push(B.x,B.y,B.z),(B[g]=0),(B[y]=0),(B[_]=M>0?1:-1),u.push(B.x,B.y,B.z),h.push(K/S),h.push(1-j/T),(z+=1);}}
for(let j=0;j<T;j++)
for(let X=0;X<S;X++){const K=d+X+H*j,ue=d+X+H*(j+1),Ee=d+(X+1)+H*(j+1),Z=d+(X+1)+H*j;l.push(K,ue,Z),l.push(ue,Ee,Z),(U+=6);}
a.addGroup(f,U,D),(f+=U),(d+=z);}}
static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments);}}
function Do(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?(e[t][n]=i.clone()):Array.isArray(i)?(e[t][n]=i.slice()):(e[t][n]=i);}}
return e;}
function tn(s){const e={};for(let t=0;t<s.length;t++){const n=Do(s[t]);for(const i in n)e[i]=n[i];}
return e;}
const Io={clone:Do,merge:tn};var Tb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kt extends St{constructor(e){super(),(this.type="ShaderMaterial"),(this.defines={}),(this.uniforms={}),(this.vertexShader=Tb),(this.fragmentShader=Eb),(this.linewidth=1),(this.wireframe=!1),(this.wireframeLinewidth=1),(this.fog=!1),(this.lights=!1),(this.clipping=!1),(this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,}),(this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0],}),(this.index0AttributeName=void 0),(this.uniformsNeedUpdate=!1),(this.glslVersion=null),e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e));}
copy(e){return(super.copy(e),(this.fragmentShader=e.fragmentShader),(this.vertexShader=e.vertexShader),(this.uniforms=Do(e.uniforms)),(this.defines=Object.assign({},e.defines)),(this.wireframe=e.wireframe),(this.wireframeLinewidth=e.wireframeLinewidth),(this.lights=e.lights),(this.clipping=e.clipping),(this.extensions=Object.assign({},e.extensions)),(this.glslVersion=e.glslVersion),this);}
toJSON(e){const t=super.toJSON(e);(t.glslVersion=this.glslVersion),(t.uniforms={});for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?(t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}):o&&o.isColor?(t.uniforms[i]={type:"c",value:o.getHex()}):o&&o.isVector2?(t.uniforms[i]={type:"v2",value:o.toArray()}):o&&o.isVector3?(t.uniforms[i]={type:"v3",value:o.toArray()}):o&&o.isVector4?(t.uniforms[i]={type:"v4",value:o.toArray()}):o&&o.isMatrix3?(t.uniforms[i]={type:"m3",value:o.toArray()}):o&&o.isMatrix4?(t.uniforms[i]={type:"m4",value:o.toArray()}):(t.uniforms[i]={value:o});}
Object.keys(this.defines).length>0&&(t.defines=this.defines),(t.vertexShader=this.vertexShader),(t.fragmentShader=this.fragmentShader);const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t;}}
kt.prototype.isShaderMaterial=!0;class Yo extends Ye{constructor(){super(),(this.type="Camera"),(this.matrixWorldInverse=new Pe()),(this.projectionMatrix=new Pe()),(this.projectionMatrixInverse=new Pe());}
copy(e,t){return(super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this);}
getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize();}
updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert();}
updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert();}
clone(){return new this.constructor().copy(this);}}
Yo.prototype.isCamera=!0;class qt extends Yo{constructor(e=50,t=1,n=0.1,i=2e3){super(),(this.type="PerspectiveCamera"),(this.fov=e),(this.zoom=1),(this.near=n),(this.far=i),(this.focus=10),(this.aspect=t),(this.view=null),(this.filmGauge=35),(this.filmOffset=0),this.updateProjectionMatrix();}
copy(e,t){return(super.copy(e,t),(this.fov=e.fov),(this.zoom=e.zoom),(this.near=e.near),(this.far=e.far),(this.focus=e.focus),(this.aspect=e.aspect),(this.view=e.view===null?null:Object.assign({},e.view)),(this.filmGauge=e.filmGauge),(this.filmOffset=e.filmOffset),this);}
setFocalLength(e){const t=(0.5*this.getFilmHeight())/e;(this.fov=Wa*2*Math.atan(t)),this.updateProjectionMatrix();}
getFocalLength(){const e=Math.tan(os*0.5*this.fov);return(0.5*this.getFilmHeight())/e;}
getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(os*0.5*this.fov)/this.zoom);}
getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1);}
getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1);}
setViewOffset(e,t,n,i,r,o){(this.aspect=e/t),this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1,}),(this.view.enabled=!0),(this.view.fullWidth=e),(this.view.fullHeight=t),(this.view.offsetX=n),(this.view.offsetY=i),(this.view.width=r),(this.view.height=o),this.updateProjectionMatrix();}
clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix();}
updateProjectionMatrix(){const e=this.near;let t=(e*Math.tan(os*0.5*this.fov))/this.zoom,n=2*t,i=this.aspect*n,r=-0.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;(r+=(o.offsetX*i)/l),(t-=(o.offsetY*n)/c),(i*=o.width/l),(n*=o.height/c);}
const a=this.filmOffset;a!==0&&(r+=(e*a)/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert();}
toJSON(e){const t=super.toJSON(e);return((t.object.fov=this.fov),(t.object.zoom=this.zoom),(t.object.near=this.near),(t.object.far=this.far),(t.object.focus=this.focus),(t.object.aspect=this.aspect),this.view!==null&&(t.object.view=Object.assign({},this.view)),(t.object.filmGauge=this.filmGauge),(t.object.filmOffset=this.filmOffset),t);}}
qt.prototype.isPerspectiveCamera=!0;const Gs=90,Vs=1;class pu extends Ye{constructor(e,t,n){if((super(),(this.type="CubeCamera"),n.isWebGLCubeRenderTarget!==!0)){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return;}
this.renderTarget=n;const i=new qt(Gs,Vs,e,t);(i.layers=this.layers),i.up.set(0,-1,0),i.lookAt(new C(1,0,0)),this.add(i);const r=new qt(Gs,Vs,e,t);(r.layers=this.layers),r.up.set(0,-1,0),r.lookAt(new C(-1,0,0)),this.add(r);const o=new qt(Gs,Vs,e,t);(o.layers=this.layers),o.up.set(0,0,1),o.lookAt(new C(0,1,0)),this.add(o);const a=new qt(Gs,Vs,e,t);(a.layers=this.layers),a.up.set(0,0,-1),a.lookAt(new C(0,-1,0)),this.add(a);const l=new qt(Gs,Vs,e,t);(l.layers=this.layers),l.up.set(0,-1,0),l.lookAt(new C(0,0,1)),this.add(l);const c=new qt(Gs,Vs,e,t);(c.layers=this.layers),c.up.set(0,-1,0),c.lookAt(new C(0,0,-1)),this.add(c);}
update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;(n.texture.generateMipmaps=!1),e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),(n.texture.generateMipmaps=d),e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),(e.xr.enabled=u),(n.texture.needsPMREMUpdate=!0);}}
class jo extends Dt{constructor(e,t,n,i,r,o,a,l,c,u){(e=e!==void 0?e:[]),(t=t!==void 0?t:dr),super(e,t,n,i,r,o,a,l,c,u),(this.flipY=!1);}
get images(){return this.image;}
set images(e){this.image=e;}}
jo.prototype.isCubeTexture=!0;class mu extends ft{constructor(e,t={}){super(e,e,t);const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];(this.texture=new jo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding)),(this.texture.isRenderTargetTexture=!0),(this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1),(this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ke);}
fromEquirectangularTexture(e,t){(this.texture.type=t.type),(this.texture.format=Xt),(this.texture.encoding=t.encoding),(this.texture.generateMipmaps=t.generateMipmaps),(this.texture.minFilter=t.minFilter),(this.texture.magFilter=t.magFilter);const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,},i=new Ni(5,5,5),r=new kt({name:"CubemapFromEquirect",uniforms:Do(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:ui,});r.uniforms.tEquirect.value=t;const o=new ht(i,r),a=t.minFilter;return(t.minFilter===ws&&(t.minFilter=Ke),new pu(1,10,this).update(e,o),(t.minFilter=a),o.geometry.dispose(),o.material.dispose(),this);}
clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r);}}
mu.prototype.isWebGLCubeRenderTarget=!0;const yh=new C(),Ab=new C(),Cb=new Ut();class ii{constructor(e=new C(1,0,0),t=0){(this.normal=e),(this.constant=t);}
set(e,t){return this.normal.copy(e),(this.constant=t),this;}
setComponents(e,t,n,i){return this.normal.set(e,t,n),(this.constant=i),this;}
setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),(this.constant=-t.dot(this.normal)),this;}
setFromCoplanarPoints(e,t,n){const i=yh.subVectors(n,t).cross(Ab.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this;}
copy(e){return this.normal.copy(e.normal),(this.constant=e.constant),this;}
normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),(this.constant*=e),this;}
negate(){return(this.constant*=-1),this.normal.negate(),this;}
distanceToPoint(e){return this.normal.dot(e)+this.constant;}
distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius;}
projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);}
intersectLine(e,t){const n=e.delta(yh),i=this.normal.dot(n);if(i===0)
return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start);}
intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return(t<0&&n>0)||(n<0&&t>0);}
intersectsBox(e){return e.intersectsPlane(this);}
intersectsSphere(e){return e.intersectsPlane(this);}
coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant);}
applyMatrix4(e,t){const n=t||Cb.getNormalMatrix(e),i=this.coplanarPoint(yh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return(this.constant=-i.dot(r)),this;}
translate(e){return(this.constant-=e.dot(this.normal)),this;}
equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant;}
clone(){return new this.constructor().copy(this);}}
ii.prototype.isPlane=!0;const Ws=new wr(),Hl=new C();class ol{constructor(e=new ii(),t=new ii(),n=new ii(),i=new ii(),r=new ii(),o=new ii()){this.planes=[e,t,n,i,r,o];}
set(e,t,n,i,r,o){const a=this.planes;return(a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this);}
copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this;}
setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],f=n[9],p=n[10],g=n[11],y=n[12],_=n[13],m=n[14],w=n[15];return(t[0].setComponents(a-i,h-l,g-d,w-y).normalize(),t[1].setComponents(a+i,h+l,g+d,w+y).normalize(),t[2].setComponents(a+r,h+c,g+f,w+_).normalize(),t[3].setComponents(a-r,h-c,g-f,w-_).normalize(),t[4].setComponents(a-o,h-u,g-p,w-m).normalize(),t[5].setComponents(a+o,h+u,g+p,w+m).normalize(),this);}
intersectsObject(e){const t=e.geometry;return(t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws));}
intersectsSprite(e){return(Ws.center.set(0,0,0),(Ws.radius=0.7071067811865476),Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws));}
intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0;}
intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(((Hl.x=i.normal.x>0?e.max.x:e.min.x),(Hl.y=i.normal.y>0?e.max.y:e.min.y),(Hl.z=i.normal.z>0?e.max.z:e.min.z),i.distanceToPoint(Hl)<0))
return!1;}
return!0;}
containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0;}
clone(){return new this.constructor().copy(this);}}
function hy(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),(n=s.requestAnimationFrame(i));}
return{start:function(){e!==!0&&t!==null&&((n=s.requestAnimationFrame(i)),(e=!0));},stop:function(){s.cancelAnimationFrame(n),(e=!1);},setAnimationLoop:function(r){t=r;},setContext:function(r){s=r;},};}
function Lb(s,e){const t=e.isWebGL2,n=new WeakMap();function i(c,u){const h=c.array,d=c.usage,f=s.createBuffer();s.bindBuffer(u,f),s.bufferData(u,h,d),c.onUploadCallback();let p;if(h instanceof Float32Array)p=5126;else if(h instanceof Uint16Array)
if(c.isFloat16BufferAttribute)
if(t)p=5131;else
throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=5123;else if(h instanceof Int16Array)p=5122;else if(h instanceof Uint32Array)p=5125;else if(h instanceof Int32Array)p=5124;else if(h instanceof Int8Array)p=5120;else if(h instanceof Uint8Array)p=5121;else if(h instanceof Uint8ClampedArray)p=5121;else
throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,};}
function r(c,u,h){const d=u.array,f=u.updateRange;s.bindBuffer(h,c),f.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),(f.count=-1));}
function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c);}
function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c));}
function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version,});return;}
c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),(h.version=c.version));}
return{get:o,remove:a,update:l};}
class ps extends Be{constructor(e=1,t=1,n=1,i=1){super(),(this.type="PlaneGeometry"),(this.parameters={width:e,height:t,widthSegments:n,heightSegments:i,});const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],g=[],y=[];for(let _=0;_<u;_++){const m=_*d-o;for(let w=0;w<c;w++){const v=w*h-r;p.push(v,-m,0),g.push(0,0,1),y.push(w/a),y.push(1-_/l);}}
for(let _=0;_<l;_++)
for(let m=0;m<a;m++){const w=m+c*_,v=m+c*(_+1),x=m+1+c*(_+1),M=m+1+c*_;f.push(w,v,M),f.push(v,x,M);}
this.setIndex(f),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(g,3)),this.setAttribute("uv",new Ce(y,2));}
static fromJSON(e){return new ps(e.width,e.height,e.widthSegments,e.heightSegments);}}
var Pb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Rb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Db=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ib=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ob="vec3 transformed = vec3( position );",kb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nb=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,zb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,jb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jb=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tM="gl_FragColor = linearToOutputTexel( gl_FragColor );",nM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,fM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mM=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,gM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_M=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,yM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,vM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,bM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,MM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,AM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,PM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,RM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,BM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ]
		#endif
	}
#endif`,NM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			float texelIndex = float( vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,UM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,HM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,GM=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,$M=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,YM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,jM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,JM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,KM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oS=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,aS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,uS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gS=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,_S=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,yS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,xS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,vS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,wS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,bS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,MS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,SS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ES=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,AS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CS=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,LS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,RS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,FS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zS=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,US=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,t1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qe={alphamap_fragment:Pb,alphamap_pars_fragment:Rb,alphatest_fragment:Db,alphatest_pars_fragment:Ib,aomap_fragment:Bb,aomap_pars_fragment:Fb,begin_vertex:Ob,beginnormal_vertex:kb,bsdfs:Nb,bumpmap_pars_fragment:zb,clipping_planes_fragment:Ub,clipping_planes_pars_fragment:Hb,clipping_planes_pars_vertex:Gb,clipping_planes_vertex:Vb,color_fragment:Wb,color_pars_fragment:qb,color_pars_vertex:Xb,color_vertex:$b,common:Yb,cube_uv_reflection_fragment:jb,defaultnormal_vertex:Jb,displacementmap_pars_vertex:Zb,displacementmap_vertex:Kb,emissivemap_fragment:Qb,emissivemap_pars_fragment:eM,encodings_fragment:tM,encodings_pars_fragment:nM,envmap_fragment:iM,envmap_common_pars_fragment:rM,envmap_pars_fragment:sM,envmap_pars_vertex:oM,envmap_physical_pars_fragment:_M,envmap_vertex:aM,fog_vertex:lM,fog_pars_vertex:cM,fog_fragment:uM,fog_pars_fragment:hM,gradientmap_pars_fragment:dM,lightmap_fragment:fM,lightmap_pars_fragment:pM,lights_lambert_vertex:mM,lights_pars_begin:gM,lights_toon_fragment:yM,lights_toon_pars_fragment:xM,lights_phong_fragment:vM,lights_phong_pars_fragment:wM,lights_physical_fragment:bM,lights_physical_pars_fragment:MM,lights_fragment_begin:SM,lights_fragment_maps:TM,lights_fragment_end:EM,logdepthbuf_fragment:AM,logdepthbuf_pars_fragment:CM,logdepthbuf_pars_vertex:LM,logdepthbuf_vertex:PM,map_fragment:RM,map_pars_fragment:DM,map_particle_fragment:IM,map_particle_pars_fragment:BM,metalnessmap_fragment:FM,metalnessmap_pars_fragment:OM,morphcolor_vertex:kM,morphnormal_vertex:NM,morphtarget_pars_vertex:zM,morphtarget_vertex:UM,normal_fragment_begin:HM,normal_fragment_maps:GM,normal_pars_fragment:VM,normal_pars_vertex:WM,normal_vertex:qM,normalmap_pars_fragment:XM,clearcoat_normal_fragment_begin:$M,clearcoat_normal_fragment_maps:YM,clearcoat_pars_fragment:jM,output_fragment:JM,packing:ZM,premultiplied_alpha_fragment:KM,project_vertex:QM,dithering_fragment:eS,dithering_pars_fragment:tS,roughnessmap_fragment:nS,roughnessmap_pars_fragment:iS,shadowmap_pars_fragment:rS,shadowmap_pars_vertex:sS,shadowmap_vertex:oS,shadowmask_pars_fragment:aS,skinbase_vertex:lS,skinning_pars_vertex:cS,skinning_vertex:uS,skinnormal_vertex:hS,specularmap_fragment:dS,specularmap_pars_fragment:fS,tonemapping_fragment:pS,tonemapping_pars_fragment:mS,transmission_fragment:gS,transmission_pars_fragment:_S,uv_pars_fragment:yS,uv_pars_vertex:xS,uv_vertex:vS,uv2_pars_fragment:wS,uv2_pars_vertex:bS,uv2_vertex:MS,worldpos_vertex:SS,background_vert:TS,background_frag:ES,cube_vert:AS,cube_frag:CS,depth_vert:LS,depth_frag:PS,distanceRGBA_vert:RS,distanceRGBA_frag:DS,equirect_vert:IS,equirect_frag:BS,linedashed_vert:FS,linedashed_frag:OS,meshbasic_vert:kS,meshbasic_frag:NS,meshlambert_vert:zS,meshlambert_frag:US,meshmatcap_vert:HS,meshmatcap_frag:GS,meshnormal_vert:VS,meshnormal_frag:WS,meshphong_vert:qS,meshphong_frag:XS,meshphysical_vert:$S,meshphysical_frag:YS,meshtoon_vert:jS,meshtoon_frag:JS,points_vert:ZS,points_frag:KS,shadow_vert:QS,shadow_frag:e1,sprite_vert:t1,sprite_frag:n1,},we={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ut()},uv2Transform:{value:new Ut()},alphaMap:{value:null},alphaTest:{value:0},},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new J(1,1)},},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0},},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)},},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}},},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},},},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},},},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},},},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}},},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{},},},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}},},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}},},ltc_1:{value:null},ltc_2:{value:null},},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut()},},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new J(0.5,0.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut()},},},jn={basic:{uniforms:tn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog,]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag,},lambert:{uniforms:tn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.fog,we.lights,{emissive:{value:new ve(0)}},]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag,},phong:{uniforms:tn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},},]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag,},standard:{uniforms:tn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1},},]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag,},toon:{uniforms:tn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ve(0)}},]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag,},matcap:{uniforms:tn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}},]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag,},points:{uniforms:tn([we.points,we.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag,},dashed:{uniforms:tn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2},},]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag,},depth:{uniforms:tn([we.common,we.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag,},normal:{uniforms:tn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}},]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag,},sprite:{uniforms:tn([we.sprite,we.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag,},background:{uniforms:{uvTransform:{value:new Ut()},t2D:{value:null}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag,},cube:{uniforms:tn([we.envmap,{opacity:{value:1}}]),vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag,},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag,},distanceRGBA:{uniforms:tn([we.common,we.displacementmap,{referencePosition:{value:new C()},nearDistance:{value:1},farDistance:{value:1e3},},]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag,},shadow:{uniforms:tn([we.lights,we.fog,{color:{value:new ve(0)},opacity:{value:1}},]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag,},};jn.physical={uniforms:tn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new J(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new J()},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},},]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag,};function i1(s,e,t,n,i,r){const o=new ve(0);let a=i===!0?0:1,l,c,u=null,h=0,d=null;function f(g,y){let _=!1,m=y.isScene===!0?y.background:null;m&&m.isTexture&&(m=e.get(m));const w=s.xr,v=w.getSession&&w.getSession();v&&v.environmentBlendMode==="additive"&&(m=null),m===null?p(o,a):m&&m.isColor&&(p(m,1),(_=!0)),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Xo)?(c===void 0&&((c=new ht(new Ni(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:Do(jn.cube.uniforms),vertexShader:jn.cube.vertexShader,fragmentShader:jn.cube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,}))),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),(c.onBeforeRender=function(x,M,S){this.matrixWorld.copyPosition(S.matrixWorld);}),Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value;},}),n.update(c)),(c.material.uniforms.envMap.value=m),(c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1),(u!==m||h!==m.version||d!==s.toneMapping)&&((c.material.needsUpdate=!0),(u=m),(h=m.version),(d=s.toneMapping)),g.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(l===void 0&&((l=new ht(new ps(2,2),new kt({name:"BackgroundMaterial",uniforms:Do(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,}))),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value;},}),n.update(l)),(l.material.uniforms.t2D.value=m),m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),(u!==m||h!==m.version||d!==s.toneMapping)&&((l.material.needsUpdate=!0),(u=m),(h=m.version),(d=s.toneMapping)),g.unshift(l,l.geometry,l.material,0,0,null));}
function p(g,y){t.buffers.color.setClear(g.r,g.g,g.b,y,r);}
return{getClearColor:function(){return o;},setClearColor:function(g,y=1){o.set(g),(a=y),p(o,a);},getClearAlpha:function(){return a;},setClearAlpha:function(g){(a=g),p(o,a);},render:f,};}
function r1(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=g(null);let c=l;function u(F,O,H,A,z){let U=!1;if(o){const B=p(A,H,O);c!==B&&((c=B),d(c.object)),(U=y(A,z)),U&&_(A,z);}else{const B=O.wireframe===!0;(c.geometry!==A.id||c.program!==H.id||c.wireframe!==B)&&((c.geometry=A.id),(c.program=H.id),(c.wireframe=B),(U=!0));}
F.isInstancedMesh===!0&&(U=!0),z!==null&&t.update(z,34963),U&&(S(F,O,H,A),z!==null&&s.bindBuffer(34963,t.get(z).buffer));}
function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES();}
function d(F){return n.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F);}
function f(F){return n.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F);}
function p(F,O,H){const A=H.wireframe===!0;let z=a[F.id];z===void 0&&((z={}),(a[F.id]=z));let U=z[O.id];U===void 0&&((U={}),(z[O.id]=U));let B=U[A];return B===void 0&&((B=g(h())),(U[A]=B)),B;}
function g(F){const O=[],H=[],A=[];for(let z=0;z<i;z++)(O[z]=0),(H[z]=0),(A[z]=0);return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:A,object:F,attributes:{},index:null,};}
function y(F,O){const H=c.attributes,A=F.attributes;let z=0;for(const U in A){const B=H[U],j=A[U];if(B===void 0||B.attribute!==j||B.data!==j.data)return!0;z++;}
return c.attributesNum!==z||c.index!==O;}
function _(F,O){const H={},A=F.attributes;let z=0;for(const U in A){const B=A[U],j={};(j.attribute=B),B.data&&(j.data=B.data),(H[U]=j),z++;}
(c.attributes=H),(c.attributesNum=z),(c.index=O);}
function m(){const F=c.newAttributes;for(let O=0,H=F.length;O<H;O++)F[O]=0;}
function w(F){v(F,0);}
function v(F,O){const H=c.newAttributes,A=c.enabledAttributes,z=c.attributeDivisors;(H[F]=1),A[F]===0&&(s.enableVertexAttribArray(F),(A[F]=1)),z[F]!==O&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,O),(z[F]=O));}
function x(){const F=c.newAttributes,O=c.enabledAttributes;for(let H=0,A=O.length;H<A;H++)
O[H]!==F[H]&&(s.disableVertexAttribArray(H),(O[H]=0));}
function M(F,O,H,A,z,U){n.isWebGL2===!0&&(H===5124||H===5125)?s.vertexAttribIPointer(F,O,H,z,U):s.vertexAttribPointer(F,O,H,A,z,U);}
function S(F,O,H,A){if(n.isWebGL2===!1&&(F.isInstancedMesh||A.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)
return;m();const z=A.attributes,U=H.getAttributes(),B=O.defaultAttributeValues;for(const j in U){const X=U[j];if(X.location>=0){let K=z[j];if((K===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(K=F.instanceColor)),K!==void 0)){const ue=K.normalized,Ee=K.itemSize,Z=t.get(K);if(Z===void 0)continue;const q=Z.buffer,Ae=Z.type,fe=Z.bytesPerElement;if(K.isInterleavedBufferAttribute){const ce=K.data,le=ce.stride,Te=K.offset;if(ce.isInstancedInterleavedBuffer){for(let V=0;V<X.locationSize;V++)
v(X.location+V,ce.meshPerAttribute);F.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ce.meshPerAttribute*ce.count);}else for(let V=0;V<X.locationSize;V++)w(X.location+V);s.bindBuffer(34962,q);for(let V=0;V<X.locationSize;V++)
M(X.location+V,Ee/X.locationSize,Ae,ue,le*fe,(Te+(Ee/X.locationSize)*V)*fe);}else{if(K.isInstancedBufferAttribute){for(let ce=0;ce<X.locationSize;ce++)
v(X.location+ce,K.meshPerAttribute);F.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=K.meshPerAttribute*K.count);}else
for(let ce=0;ce<X.locationSize;ce++)w(X.location+ce);s.bindBuffer(34962,q);for(let ce=0;ce<X.locationSize;ce++)
M(X.location+ce,Ee/X.locationSize,Ae,ue,Ee*fe,(Ee/X.locationSize)*ce*fe);}}else if(B!==void 0){const ue=B[j];if(ue!==void 0)
switch(ue.length){case 2:s.vertexAttrib2fv(X.location,ue);break;case 3:s.vertexAttrib3fv(X.location,ue);break;case 4:s.vertexAttrib4fv(X.location,ue);break;default:s.vertexAttrib1fv(X.location,ue);}}}}
x();}
function T(){b();for(const F in a){const O=a[F];for(const H in O){const A=O[H];for(const z in A)f(A[z].object),delete A[z];delete O[H];}
delete a[F];}}
function D(F){if(a[F.id]===void 0)return;const O=a[F.id];for(const H in O){const A=O[H];for(const z in A)f(A[z].object),delete A[z];delete O[H];}
delete a[F.id];}
function I(F){for(const O in a){const H=a[O];if(H[F.id]===void 0)continue;const A=H[F.id];for(const z in A)f(A[z].object),delete A[z];delete H[F.id];}}
function b(){R(),c!==l&&((c=l),d(c.object));}
function R(){(l.geometry=null),(l.program=null),(l.wireframe=!1);}
return{setup:u,reset:b,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:m,enableAttribute:w,disableUnusedAttributes:x,};}
function s1(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c;}
function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1);}
function l(c,u,h){if(h===0)return;let d,f;if(i)(d=s),(f="drawArraysInstanced");else if(((d=e.get("ANGLE_instanced_arrays")),(f="drawArraysInstancedANGLE"),d===null)){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return;}
d[f](r,c,u,h),t.update(u,r,h);}
(this.setMode=o),(this.render=a),(this.renderInstances=l);}
function o1(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT);}else n=0;return n;}
function r(S){if(S==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)
return "highp";S="mediump";}
return S==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp";}
const o=(typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext)||(typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext);let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),(a=l));const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),d=s.getParameter(35660),f=s.getParameter(3379),p=s.getParameter(34076),g=s.getParameter(34921),y=s.getParameter(36347),_=s.getParameter(36348),m=s.getParameter(36349),w=d>0,v=o||e.has("OES_texture_float"),x=w&&v,M=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:m,vertexTextures:w,floatFragmentTextures:v,floatVertexTextures:x,maxSamples:M,};}
function a1(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ii(),a=new Ut(),l={value:null,needsUpdate:!1};(this.uniform=l),(this.numPlanes=0),(this.numIntersection=0),(this.init=function(h,d,f){const p=h.length!==0||d||n!==0||i;return(i=d),(t=u(h,f,0)),(n=h.length),p;}),(this.beginShadows=function(){(r=!0),u(null);}),(this.endShadows=function(){(r=!1),c();}),(this.setState=function(h,d,f){const p=h.clippingPlanes,g=h.clipIntersection,y=h.clipShadows,_=s.get(h);if(!i||p===null||p.length===0||(r&&!y))r?u(null):c();else{const m=r?0:n,w=m*4;let v=_.clippingState||null;(l.value=v),(v=u(p,d,w,f));for(let x=0;x!==w;++x)v[x]=t[x];(_.clippingState=v),(this.numIntersection=g?this.numPlanes:0),(this.numPlanes+=m);}});function c(){l.value!==t&&((l.value=t),(l.needsUpdate=n>0)),(e.numPlanes=n),(e.numIntersection=0);}
function u(h,d,f,p){const g=h!==null?h.length:0;let y=null;if(g!==0){if(((y=l.value),p!==!0||y===null)){const _=f+g*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(y===null||y.length<_)&&(y=new Float32Array(_));for(let w=0,v=f;w!==g;++w,v+=4)
o.copy(h[w]).applyMatrix4(m,a),o.normal.toArray(y,v),(y[v+3]=o.constant);}
(l.value=y),(l.needsUpdate=!0);}
return(e.numPlanes=g),(e.numIntersection=0),y;}}
function l1(s){let e=new WeakMap();function t(o,a){return a===ka?(o.mapping=dr):a===Na&&(o.mapping=fr),o;}
function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ka||a===Na)
if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping);}else{const l=o.image;if(l&&l.height>0){const c=new mu(l.height/2);return(c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping));}else return null;}}
return o;}
function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose());}
function r(){e=new WeakMap();}
return{get:n,dispose:r};}
class Ms extends Yo{constructor(e=-1,t=1,n=1,i=-1,r=0.1,o=2e3){super(),(this.type="OrthographicCamera"),(this.zoom=1),(this.view=null),(this.left=e),(this.right=t),(this.top=n),(this.bottom=i),(this.near=r),(this.far=o),this.updateProjectionMatrix();}
copy(e,t){return(super.copy(e,t),(this.left=e.left),(this.right=e.right),(this.top=e.top),(this.bottom=e.bottom),(this.near=e.near),(this.far=e.far),(this.zoom=e.zoom),(this.view=e.view===null?null:Object.assign({},e.view)),this);}
setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1,}),(this.view.enabled=!0),(this.view.fullWidth=e),(this.view.fullHeight=t),(this.view.offsetX=n),(this.view.offsetY=i),(this.view.width=r),(this.view.height=o),this.updateProjectionMatrix();}
clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix();}
updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;(r+=c*this.view.offsetX),(o=r+c*this.view.width),(a-=u*this.view.offsetY),(l=a-u*this.view.height);}
this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert();}
toJSON(e){const t=super.toJSON(e);return((t.object.zoom=this.zoom),(t.object.left=this.left),(t.object.right=this.right),(t.object.top=this.top),(t.object.bottom=this.bottom),(t.object.near=this.near),(t.object.far=this.far),this.view!==null&&(t.object.view=Object.assign({},this.view)),t);}}
Ms.prototype.isOrthographicCamera=!0;const so=4,om=[0.125,0.215,0.35,0.446,0.526,0.582],Gr=20,xh=new Ms(),am=new ve();let vh=null;const zr=(1+Math.sqrt(5))/2,qs=1/zr,lm=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,zr,qs),new C(0,zr,-qs),new C(qs,0,zr),new C(-qs,0,zr),new C(zr,qs,0),new C(-zr,qs,0),];class Dd{constructor(e){(this._renderer=e),(this._pingPongRenderTarget=null),(this._lodMax=0),(this._cubeSize=0),(this._lodPlanes=[]),(this._sizeLods=[]),(this._sigmas=[]),(this._blurMaterial=null),(this._cubemapMaterial=null),(this._equirectMaterial=null),this._compileMaterial(this._blurMaterial);}
fromScene(e,t=0,n=0.1,i=100){(vh=this._renderer.getRenderTarget()),this._setSize(256);const r=this._allocateTargets();return((r.depthBuffer=!0),this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r);}
fromEquirectangular(e,t=null){return this._fromTexture(e,t);}
fromCubemap(e,t=null){return this._fromTexture(e,t);}
compileCubemapShader(){this._cubemapMaterial===null&&((this._cubemapMaterial=hm()),this._compileMaterial(this._cubemapMaterial));}
compileEquirectangularShader(){this._equirectMaterial===null&&((this._equirectMaterial=um()),this._compileMaterial(this._equirectMaterial));}
dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose();}
_setSize(e){(this._lodMax=Math.floor(Math.log2(e))),(this._cubeSize=Math.pow(2,this._lodMax));}
_dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)
this._lodPlanes[e].dispose();}
_cleanup(e){this._renderer.setRenderTarget(vh),(e.scissorTest=!1),Gl(e,0,0,e.width,e.height);}
_fromTexture(e,t){e.mapping===dr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),(vh=this._renderer.getRenderTarget());const n=t||this._allocateTargets();return(this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n);}
_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize-32,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:ss,format:Xt,encoding:Kn,depthBuffer:!1,},i=cm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),(this._pingPongRenderTarget=cm(e,t,n));const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas,}=c1(r)),(this._blurMaterial=u1(r,e,t));}
return i;}
_compileMaterial(e){const t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,xh);}
_sceneToCubeUV(e,t,n,i){const a=new qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(am),(u.toneMapping=Bi),(u.autoClear=!1);const f=new _i({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1,}),p=new ht(new Ni(),f);let g=!1;const y=e.background;y?y.isColor&&(f.color.copy(y),(e.background=null),(g=!0)):(f.color.copy(am),(g=!0));for(let _=0;_<6;_++){const m=_%3;m===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):m===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const w=this._cubeSize;Gl(i,m*w,_>2?w:0,w,w),u.setRenderTarget(i),g&&u.render(p,a),u.render(e,a);}
p.geometry.dispose(),p.material.dispose(),(u.toneMapping=d),(u.autoClear=h),(e.background=y);}
_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===dr||e.mapping===fr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),(this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1)):this._equirectMaterial===null&&(this._equirectMaterial=um());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Gl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xh);}
_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-
this._sigmas[i-1]*this._sigmas[i-1]),o=lm[(i-1)%lm.length];this._blur(e,i-1,i,r,o);}
t.autoClear=n;}
_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r);}
_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ht(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):(2*Math.PI)/(2*Gr-1),g=r/p,y=isFinite(r)?1+Math.floor(u*g):Gr;y>Gr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Gr}`);const _=[];let m=0;for(let S=0;S<Gr;++S){const T=S/g,D=Math.exp((-T*T)/2);_.push(D),S===0?(m+=D):S<y&&(m+=2*D);}
for(let S=0;S<_.length;S++)_[S]=_[S]/m;(d.envMap.value=e.texture),(d.samples.value=y),(d.weights.value=_),(d.latitudinal.value=o==="latitudinal"),a&&(d.poleAxis.value=a);const{_lodMax:w}=this;(d.dTheta.value=p),(d.mipInt.value=w-n);const v=this._sizeLods[i],x=3*v*(i>w-so?i-w+so:0),M=4*(this._cubeSize-v);Gl(t,x,M,3*v,2*v),l.setRenderTarget(t),l.render(h,xh);}}
function c1(s){const e=[],t=[],n=[];let i=s;const r=s-so+1+om.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-so?(l=om[o-s+so-1]):o===0&&(l=0),n.push(l);const c=1/(a-1),u=-c/2,h=1+c/2,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,g=3,y=2,_=1,m=new Float32Array(g*p*f),w=new Float32Array(y*p*f),v=new Float32Array(_*p*f);for(let M=0;M<f;M++){const S=((M%3)*2)/3-1,T=M>2?0:-1,D=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0,];m.set(D,g*p*M),w.set(d,y*p*M);const I=[M,M,M,M,M,M];v.set(I,_*p*M);}
const x=new Be();x.setAttribute("position",new Xe(m,g)),x.setAttribute("uv",new Xe(w,y)),x.setAttribute("faceIndex",new Xe(v,_)),e.push(x),i>so&&i--;}
return{lodPlanes:e,sizeLods:t,sigmas:n};}
function cm(s,e,t){const n=new ft(s,e,t);return((n.texture.mapping=Xo),(n.texture.name="PMREM.cubeUv"),(n.scissorTest=!0),n);}
function Gl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i);}
function u1(s,e,t){const n=new Float32Array(Gr),i=new C(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`,},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i},},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1,});}
function um(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1,});}
function hm(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1,});}
function Tf(){return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;}
function h1(s){let e=new WeakMap(),t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ka||l===Na,u=l===dr||l===fr;if(c||u)
if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return(t===null&&(t=new Dd(s)),(h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h)),e.set(a,h),h.texture);}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if((c&&h&&h.height>0)||(u&&h&&i(h))){t===null&&(t=new Dd(s));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture;}else return null;}}}
return a;}
function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c;}
function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose());}
function o(){(e=new WeakMap()),t!==null&&(t.dispose(),(t=null));}
return{get:n,dispose:o};}
function d1(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case "WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case "EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case "WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n);}
return(e[n]=i),i;}
return{has:function(n){return t(n)!==null;},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture");},get:function(n){const i=t(n);return(i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i);},};}
function f1(s,e,t,n){const i={},r=new WeakMap();function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--;}
function a(h,d){return(i[d.id]===!0||(d.addEventListener("dispose",o),(i[d.id]=!0),t.memory.geometries++),d);}
function l(h){const d=h.attributes;for(const p in d)e.update(d[p],34962);const f=h.morphAttributes;for(const p in f){const g=f[p];for(let y=0,_=g.length;y<_;y++)e.update(g[y],34962);}}
function c(h){const d=[],f=h.index,p=h.attributes.position;let g=0;if(f!==null){const m=f.array;g=f.version;for(let w=0,v=m.length;w<v;w+=3){const x=m[w+0],M=m[w+1],S=m[w+2];d.push(x,M,M,S,S,x);}}else{const m=p.array;g=p.version;for(let w=0,v=m.length/3-1;w<v;w+=3){const x=w+0,M=w+1,S=w+2;d.push(x,M,M,S,S,x);}}
const y=new(Q_(d)?fu:du)(d,1);y.version=g;const _=r.get(h);_&&e.remove(_),r.set(h,y);}
function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h);}else c(h);return r.get(h);}
return{get:a,update:l,getWireframeAttribute:u};}
function p1(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d;}
let a,l;function c(d){(a=d.type),(l=d.bytesPerElement);}
function u(d,f){s.drawElements(r,f,a,d*l),t.update(f,r,1);}
function h(d,f,p){if(p===0)return;let g,y;if(i)(g=s),(y="drawElementsInstanced");else if(((g=e.get("ANGLE_instanced_arrays")),(y="drawElementsInstancedANGLE"),g===null)){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return;}
g[y](r,f,a,d*l,p),t.update(f,r,p);}
(this.setMode=o),(this.setIndex=c),(this.render=u),(this.renderInstances=h);}
function m1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch((t.calls++,o)){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break;}}
function i(){t.frame++,(t.calls=0),(t.triangles=0),(t.points=0),(t.lines=0);}
return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n,};}
function g1(s,e){return s[0]-e[0];}
function _1(s,e){return Math.abs(e[1])-Math.abs(s[1]);}
function wh(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?(t=127):n instanceof Int16Array?(t=32767):n instanceof Int32Array?(t=2147483647):console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t);}
function y1(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap(),o=new nt(),a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0;let _=r.get(u);if(_===void 0||_.count!==y){let A=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",A);};var p=A;_!==void 0&&_.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let I=0;v===!0&&(I=1),x===!0&&(I=2),M===!0&&(I=3);let b=u.attributes.position.count*I,R=1;b>e.maxTextureSize&&((R=Math.ceil(b/e.maxTextureSize)),(b=e.maxTextureSize));const F=new Float32Array(b*R*4*y),O=new $o(F,b,R,y);(O.format=Xt),(O.type=Ri),(O.needsUpdate=!0);const H=I*4;for(let z=0;z<y;z++){const U=S[z],B=T[z],j=D[z],X=b*R*4*z;for(let K=0;K<U.count;K++){const ue=K*H;v===!0&&(o.fromBufferAttribute(U,K),U.normalized===!0&&wh(o,U),(F[X+ue+0]=o.x),(F[X+ue+1]=o.y),(F[X+ue+2]=o.z),(F[X+ue+3]=0)),x===!0&&(o.fromBufferAttribute(B,K),B.normalized===!0&&wh(o,B),(F[X+ue+4]=o.x),(F[X+ue+5]=o.y),(F[X+ue+6]=o.z),(F[X+ue+7]=0)),M===!0&&(o.fromBufferAttribute(j,K),j.normalized===!0&&wh(o,B),(F[X+ue+8]=o.x),(F[X+ue+9]=o.y),(F[X+ue+10]=o.z),(F[X+ue+11]=j.itemSize===4?o.w:1));}}
(_={count:y,texture:O,size:new J(b,R)}),r.set(u,_),u.addEventListener("dispose",A);}
let m=0;for(let v=0;v<f.length;v++)m+=f[v];const w=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(s,"morphTargetBaseInfluence",w),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size);}else{const g=f===void 0?0:f.length;let y=n[u.id];if(y===void 0||y.length!==g){y=[];for(let x=0;x<g;x++)y[x]=[x,0];n[u.id]=y;}
for(let x=0;x<g;x++){const M=y[x];(M[0]=x),(M[1]=f[x]);}
y.sort(_1);for(let x=0;x<8;x++)
x<g&&y[x][1]?((a[x][0]=y[x][0]),(a[x][1]=y[x][1])):((a[x][0]=Number.MAX_SAFE_INTEGER),(a[x][1]=0));a.sort(g1);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let w=0;for(let x=0;x<8;x++){const M=a[x],S=M[0],T=M[1];S!==Number.MAX_SAFE_INTEGER&&T?(_&&u.getAttribute("morphTarget"+x)!==_[S]&&u.setAttribute("morphTarget"+x,_[S]),m&&u.getAttribute("morphNormal"+x)!==m[S]&&u.setAttribute("morphNormal"+x,m[S]),(i[x]=T),(w+=T)):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),(i[x]=0));}
const v=u.morphTargetsRelative?1:1-w;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",i);}}
return{update:l};}
function x1(s,e,t,n){let i=new WeakMap();function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h);}
function o(){i=new WeakMap();}
function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor);}
return{update:r,dispose:o};}
const dy=new Dt(),fy=new $o(),py=new sl(),my=new jo(),dm=[],fm=[],pm=new Float32Array(16),mm=new Float32Array(9),gm=new Float32Array(4);function Jo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=dm[i];if((r===void 0&&((r=new Float32Array(i)),(dm[i]=r)),e!==0)){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)(a+=t),s[o].toArray(r,a);}
return r;}
function fn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0;}
function an(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t];}
function gu(s,e){let t=fm[e];t===void 0&&((t=new Int32Array(e)),(fm[e]=t));for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t;}
function v1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),(t[0]=e));}
function w1(s,e){const t=this.cache;if(e.x!==void 0)
(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),(t[0]=e.x),(t[1]=e.y));else{if(fn(t,e))return;s.uniform2fv(this.addr,e),an(t,e);}}
function b1(s,e){const t=this.cache;if(e.x!==void 0)
(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),(t[0]=e.x),(t[1]=e.y),(t[2]=e.z));else if(e.r!==void 0)
(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),(t[0]=e.r),(t[1]=e.g),(t[2]=e.b));else{if(fn(t,e))return;s.uniform3fv(this.addr,e),an(t,e);}}
function M1(s,e){const t=this.cache;if(e.x!==void 0)
(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),(t[0]=e.x),(t[1]=e.y),(t[2]=e.z),(t[3]=e.w));else{if(fn(t,e))return;s.uniform4fv(this.addr,e),an(t,e);}}
function S1(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(t,e);}else{if(fn(t,n))return;gm.set(n),s.uniformMatrix2fv(this.addr,!1,gm),an(t,n);}}
function T1(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(t,e);}else{if(fn(t,n))return;mm.set(n),s.uniformMatrix3fv(this.addr,!1,mm),an(t,n);}}
function E1(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(t,e);}else{if(fn(t,n))return;pm.set(n),s.uniformMatrix4fv(this.addr,!1,pm),an(t,n);}}
function A1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),(t[0]=e));}
function C1(s,e){const t=this.cache;fn(t,e)||(s.uniform2iv(this.addr,e),an(t,e));}
function L1(s,e){const t=this.cache;fn(t,e)||(s.uniform3iv(this.addr,e),an(t,e));}
function P1(s,e){const t=this.cache;fn(t,e)||(s.uniform4iv(this.addr,e),an(t,e));}
function R1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),(t[0]=e));}
function D1(s,e){const t=this.cache;fn(t,e)||(s.uniform2uiv(this.addr,e),an(t,e));}
function I1(s,e){const t=this.cache;fn(t,e)||(s.uniform3uiv(this.addr,e),an(t,e));}
function B1(s,e){const t=this.cache;fn(t,e)||(s.uniform4uiv(this.addr,e),an(t,e));}
function F1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),(n[0]=i)),t.setTexture2D(e||dy,i);}
function O1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),(n[0]=i)),t.setTexture3D(e||py,i);}
function k1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),(n[0]=i)),t.setTextureCube(e||my,i);}
function N1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),(n[0]=i)),t.setTexture2DArray(e||fy,i);}
function z1(s){switch(s){case 5126:return v1;case 35664:return w1;case 35665:return b1;case 35666:return M1;case 35674:return S1;case 35675:return T1;case 35676:return E1;case 5124:case 35670:return A1;case 35667:case 35671:return C1;case 35668:case 35672:return L1;case 35669:case 35673:return P1;case 5125:return R1;case 36294:return D1;case 36295:return I1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return O1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return N1;}}
function U1(s,e){s.uniform1fv(this.addr,e);}
function H1(s,e){const t=Jo(e,this.size,2);s.uniform2fv(this.addr,t);}
function G1(s,e){const t=Jo(e,this.size,3);s.uniform3fv(this.addr,t);}
function V1(s,e){const t=Jo(e,this.size,4);s.uniform4fv(this.addr,t);}
function W1(s,e){const t=Jo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t);}
function q1(s,e){const t=Jo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t);}
function X1(s,e){const t=Jo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t);}
function $1(s,e){s.uniform1iv(this.addr,e);}
function Y1(s,e){s.uniform2iv(this.addr,e);}
function j1(s,e){s.uniform3iv(this.addr,e);}
function J1(s,e){s.uniform4iv(this.addr,e);}
function Z1(s,e){s.uniform1uiv(this.addr,e);}
function K1(s,e){s.uniform2uiv(this.addr,e);}
function Q1(s,e){s.uniform3uiv(this.addr,e);}
function eT(s,e){s.uniform4uiv(this.addr,e);}
function tT(s,e,t){const n=e.length,i=gu(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||dy,i[r]);}
function nT(s,e,t){const n=e.length,i=gu(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||py,i[r]);}
function iT(s,e,t){const n=e.length,i=gu(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||my,i[r]);}
function rT(s,e,t){const n=e.length,i=gu(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||fy,i[r]);}
function sT(s){switch(s){case 5126:return U1;case 35664:return H1;case 35665:return G1;case 35666:return V1;case 35674:return W1;case 35675:return q1;case 35676:return X1;case 5124:case 35670:return $1;case 35667:case 35671:return Y1;case 35668:case 35672:return j1;case 35669:case 35673:return J1;case 5125:return Z1;case 36294:return K1;case 36295:return Q1;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT;}}
function oT(s,e,t){(this.id=s),(this.addr=t),(this.cache=[]),(this.setValue=z1(e.type));}
function gy(s,e,t){(this.id=s),(this.addr=t),(this.cache=[]),(this.size=e.size),(this.setValue=sT(e.type));}
gy.prototype.updateCache=function(s){const e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),an(e,s);};function _y(s){(this.id=s),(this.seq=[]),(this.map={});}
_y.prototype.setValue=function(s,e,t){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const o=n[i];o.setValue(s,e[o.id],t);}};const bh=/(\w+)(\])?(\[|\.)?/g;function _m(s,e){s.seq.push(e),(s.map[e.id]=e);}
function aT(s,e,t){const n=s.name,i=n.length;for(bh.lastIndex=0;;){const r=bh.exec(n),o=bh.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if((l&&(a=a|0),c===void 0||(c==="["&&o+2===i))){_m(t,c===void 0?new oT(a,s,e):new gy(a,s,e));break;}else{let h=t.map[a];h===void 0&&((h=new _y(a)),_m(t,h)),(t=h);}}}
function lr(s,e){(this.seq=[]),(this.map={});const t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=s.getActiveUniform(e,n),r=s.getUniformLocation(e,i.name);aT(i,r,this);}}
lr.prototype.setValue=function(s,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(s,t,n);};lr.prototype.setOptional=function(s,e,t){const n=e[t];n!==void 0&&this.setValue(s,t,n);};lr.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){const o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(s,a.value,n);}};lr.seqWithValue=function(s,e){const t=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in e&&t.push(r);}
return t;};function ym(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n;}
let lT=0;function cT(s){const e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`);}
function uT(s){switch(s){case Kn:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return(console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]);}}
function xm(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+
`

`+
i+
`

`+
cT(s.getShaderSource(e));}
function hT(s,e){const t=uT(e);return "vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }";}
function dT(s,e){let t;switch(e){case T_:t="Linear";break;case E_:t="Reinhard";break;case A_:t="OptimizedCineon";break;case C_:t="ACESFilmic";break;case L_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),(t="Linear");}
return("vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }");}
function fT(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":"",].filter(ya).join(`
`);}
function pT(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n);}
return e.join(`
`);}
function mT(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),(t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a,});}
return t;}
function ya(s){return s!=="";}
function vm(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows);}
function wm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection);}
const gT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(s){return s.replace(gT,_T);}
function _T(s,e){const t=qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Id(t);}
const yT=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,xT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bm(s){return s.replace(xT,yy).replace(yT,vT);}
function vT(s,e,t,n){return(console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),yy(s,e,t,n));}
function yy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)
i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i;}
function Mm(s){let e="precision "+
s.precision+
` float;
precision `+
s.precision+
" int;";return(s.precision==="highp"?(e+=`
#define HIGH_PRECISION`):s.precision==="mediump"?(e+=`
#define MEDIUM_PRECISION`):s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e);}
function wT(s){let e="SHADOWMAP_TYPE_BASIC";return(s.shadowMapType===_f?(e="SHADOWMAP_TYPE_PCF"):s.shadowMapType===i_?(e="SHADOWMAP_TYPE_PCF_SOFT"):s.shadowMapType===no&&(e="SHADOWMAP_TYPE_VSM"),e);}
function bT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)
switch(s.envMapMode){case dr:case fr:e="ENVMAP_TYPE_CUBE";break;case Xo:case rl:e="ENVMAP_TYPE_CUBE_UV";break;}
return e;}
function MT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)
switch(s.envMapMode){case fr:case rl:e="ENVMAP_MODE_REFRACTION";break;}
return e;}
function ST(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)
switch(s.combine){case il:e="ENVMAP_BLENDING_MULTIPLY";break;case M_:e="ENVMAP_BLENDING_MIX";break;case S_:e="ENVMAP_BLENDING_ADD";break;}
return e;}
function TT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e/32+1)+3,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t,};}
function ET(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=wT(t),c=bT(t),u=MT(t),h=ST(t),d=TT(t),f=t.isWebGL2?"":fT(t),p=pT(r),g=i.createProgram();let y,_,m=t.glslVersion?"#version "+
t.glslVersion+
`
`:"";t.isRawShaderMaterial?((y=[p].filter(ya).join(`
`)),y.length>0&&(y+=`
`),(_=[f,p].filter(ya).join(`
`)),_.length>0&&(_+=`
`)):((y=[Mm(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`,].filter(ya).join(`
`)),(_=[f,Mm(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?qe.tonemapping_pars_fragment:"",t.toneMapping!==Bi?dT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.encodings_pars_fragment,hT("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`,].filter(ya).join(`
`))),(o=Id(o)),(o=vm(o,t)),(o=wm(o,t)),(a=Id(a)),(a=vm(a,t)),(a=wm(a,t)),(o=bm(o)),(a=bm(a)),t.isWebGL2&&t.isRawShaderMaterial!==!0&&((m=`#version 300 es
`),(y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture",].join(`
`)+
`
`+
y),(_=["#define varying in",t.glslVersion===Pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad",].join(`
`)+
`
`+
_));const w=m+y+o,v=m+_+a,x=ym(i,35633,w),M=ym(i,35632,v);if((i.attachShader(g,x),i.attachShader(g,M),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),s.debug.checkShaderErrors)){const D=i.getProgramInfoLog(g).trim(),I=i.getShaderInfoLog(x).trim(),b=i.getShaderInfoLog(M).trim();let R=!0,F=!0;if(i.getProgramParameter(g,35714)===!1){R=!1;const O=xm(i,x,"vertex"),H=xm(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+
i.getError()+
" - VALIDATE_STATUS "+
i.getProgramParameter(g,35715)+
`

Program Info Log: `+
D+
`
`+
O+
`
`+
H);}else
D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(I===""||b==="")&&(F=!1);F&&(this.diagnostics={runnable:R,programLog:D,vertexShader:{log:I,prefix:y},fragmentShader:{log:b,prefix:_},});}
i.deleteShader(x),i.deleteShader(M);let S;this.getUniforms=function(){return S===void 0&&(S=new lr(i,g)),S;};let T;return((this.getAttributes=function(){return T===void 0&&(T=mT(i,g)),T;}),(this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),(this.program=void 0);}),(this.name=t.shaderName),(this.id=lT++),(this.cacheKey=e),(this.usedTimes=1),(this.program=g),(this.vertexShader=x),(this.fragmentShader=M),this);}
let AT=0;class CT{constructor(){(this.shaderCache=new Map()),(this.materialCache=new Map());}
update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return(o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this);}
remove(e){const t=this.materialCache.get(e);for(const n of t)
n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this;}
getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id;}
getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id;}
dispose(){this.shaderCache.clear(),this.materialCache.clear();}
_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set()),t.get(e);}
_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new LT();t.set(e,n);}
return t.get(e);}}
class LT{constructor(){(this.id=AT++),(this.usedTimes=0);}}
function PT(s,e,t,n,i,r,o){const a=new hu(),l=new CT(),c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.floatVertexTextures,f=i.maxVertexUniforms,p=i.vertexTextures;let g=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite",};function _(b){const F=b.skeleton.bones;if(d)return 1024;{const H=Math.floor((f-20)/4),A=Math.min(H,F.length);return A<F.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+
F.length+
" bones. This GPU supports "+
A+
"."),0):A;}}
function m(b,R,F,O,H){const A=O.fog,z=H.geometry,U=b.isMeshStandardMaterial?O.environment:null,B=(b.isMeshStandardMaterial?t:e).get(b.envMap||U),j=!!B&&(B.mapping===Xo||B.mapping===rl)?B.image.height:null,X=y[b.type],K=H.isSkinnedMesh?_(H):0;b.precision!==null&&((g=i.getMaxPrecision(b.precision)),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const ue=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ee=ue!==void 0?ue.length:0;let Z=0;z.morphAttributes.position!==void 0&&(Z=1),z.morphAttributes.normal!==void 0&&(Z=2),z.morphAttributes.color!==void 0&&(Z=3);let q,Ae,fe,ce;if(X){const se=jn[X];(q=se.vertexShader),(Ae=se.fragmentShader);}else
(q=b.vertexShader),(Ae=b.fragmentShader),l.update(b),(fe=l.getVertexShaderID(b)),(ce=l.getFragmentShaderID(b));const le=s.getRenderTarget(),Te=b.alphaTest>0,V=b.clearcoat>0;return{isWebGL2:u,shaderID:X,shaderName:b.type,vertexShader:q,fragmentShader:Ae,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:p,outputEncoding:le===null?s.outputEncoding:le.isXRRenderTarget===!0?le.texture.encoding:Kn,map:!!b.map,matcap:!!b.matcap,envMap:!!B,envMapMode:B&&B.mapping,envMapCubeUVHeight:j,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===J_,tangentSpaceNormalMap:b.normalMapType===bs,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===ot,clearcoat:V,clearcoatMap:V&&!!b.clearcoatMap,clearcoatRoughnessMap:V&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:V&&!!b.clearcoatNormalMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===rs,alphaMap:!!b.alphaMap,alphaTest:Te,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!z.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!A,useFog:b.fog,fogExp2:A&&A.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0&&K>0,maxBones:K,useVertexTexture:d,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Z,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:b.toneMapped?s.toneMapping:Bi,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fs,flipSided:b.side===Lt,depthPacking:b.depthPacking!==void 0?b.depthPacking:!1,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey(),};}
function w(b){const R=[];if((b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0))
for(const F in b.defines)R.push(F),R.push(b.defines[F]);return(b.isRawShaderMaterial===!1&&(v(R,b),x(R,b),R.push(s.outputEncoding)),R.push(b.customProgramCacheKey),R.join());}
function v(b,R){b.push(R.precision),b.push(R.outputEncoding),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.combine),b.push(R.vertexUvs),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.maxBones),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection);}
function x(b,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.map&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.lightMap&&a.enable(7),R.aoMap&&a.enable(8),R.emissiveMap&&a.enable(9),R.bumpMap&&a.enable(10),R.normalMap&&a.enable(11),R.objectSpaceNormalMap&&a.enable(12),R.tangentSpaceNormalMap&&a.enable(13),R.clearcoat&&a.enable(14),R.clearcoatMap&&a.enable(15),R.clearcoatRoughnessMap&&a.enable(16),R.clearcoatNormalMap&&a.enable(17),R.displacementMap&&a.enable(18),R.specularMap&&a.enable(19),R.roughnessMap&&a.enable(20),R.metalnessMap&&a.enable(21),R.gradientMap&&a.enable(22),R.alphaMap&&a.enable(23),R.alphaTest&&a.enable(24),R.vertexColors&&a.enable(25),R.vertexAlphas&&a.enable(26),R.vertexUvs&&a.enable(27),R.vertexTangents&&a.enable(28),R.uvsVertexOnly&&a.enable(29),R.fog&&a.enable(30),b.push(a.mask),a.disableAll(),R.useFog&&a.enable(0),R.flatShading&&a.enable(1),R.logarithmicDepthBuffer&&a.enable(2),R.skinning&&a.enable(3),R.useVertexTexture&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.physicallyCorrectLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.depthPacking&&a.enable(13),R.dithering&&a.enable(14),R.specularIntensityMap&&a.enable(15),R.specularColorMap&&a.enable(16),R.transmission&&a.enable(17),R.transmissionMap&&a.enable(18),R.thicknessMap&&a.enable(19),R.sheen&&a.enable(20),R.sheenColorMap&&a.enable(21),R.sheenRoughnessMap&&a.enable(22),R.decodeVideoTexture&&a.enable(23),R.opaque&&a.enable(24),b.push(a.mask);}
function M(b){const R=y[b.type];let F;if(R){const O=jn[R];F=Io.clone(O.uniforms);}else F=b.uniforms;return F;}
function S(b,R){let F;for(let O=0,H=c.length;O<H;O++){const A=c[O];if(A.cacheKey===R){(F=A),++F.usedTimes;break;}}
return F===void 0&&((F=new ET(s,R,b,r)),c.push(F)),F;}
function T(b){if(--b.usedTimes===0){const R=c.indexOf(b);(c[R]=c[c.length-1]),c.pop(),b.destroy();}}
function D(b){l.remove(b);}
function I(){l.dispose();}
return{getParameters:m,getProgramCacheKey:w,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:D,programs:c,dispose:I,};}
function RT(){let s=new WeakMap();function e(r){let o=s.get(r);return o===void 0&&((o={}),s.set(r,o)),o;}
function t(r){s.delete(r);}
function n(r,o,a){s.get(r)[o]=a;}
function i(){s=new WeakMap();}
return{get:e,remove:t,update:n,dispose:i};}
function DT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id;}
function Sm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id;}
function Tm(){const s=[];let e=0;const t=[],n=[],i=[];function r(){(e=0),(t.length=0),(n.length=0),(i.length=0);}
function o(h,d,f,p,g,y){let _=s[e];return(_===void 0?((_={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:g,group:y,}),(s[e]=_)):((_.id=h.id),(_.object=h),(_.geometry=d),(_.material=f),(_.groupOrder=p),(_.renderOrder=h.renderOrder),(_.z=g),(_.group=y)),e++,_);}
function a(h,d,f,p,g,y){const _=o(h,d,f,p,g,y);f.transmission>0?n.push(_):f.transparent===!0?i.push(_):t.push(_);}
function l(h,d,f,p,g,y){const _=o(h,d,f,p,g,y);f.transmission>0?n.unshift(_):f.transparent===!0?i.unshift(_):t.unshift(_);}
function c(h,d){t.length>1&&t.sort(h||DT),n.length>1&&n.sort(d||Sm),i.length>1&&i.sort(d||Sm);}
function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;(f.id=null),(f.object=null),(f.geometry=null),(f.material=null),(f.group=null);}}
return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c,};}
function IT(){let s=new WeakMap();function e(n,i){let r;return(s.has(n)===!1?((r=new Tm()),s.set(n,[r])):i>=s.get(n).length?((r=new Tm()),s.get(n).push(r)):(r=s.get(n)[i]),r);}
function t(){s=new WeakMap();}
return{get:e,dispose:t};}
function BT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case "DirectionalLight":t={direction:new C(),color:new ve()};break;case "SpotLight":t={position:new C(),direction:new C(),color:new ve(),distance:0,coneCos:0,penumbraCos:0,decay:0,};break;case "PointLight":t={position:new C(),color:new ve(),distance:0,decay:0};break;case "HemisphereLight":t={direction:new C(),skyColor:new ve(),groundColor:new ve()};break;case "RectAreaLight":t={color:new ve(),position:new C(),halfWidth:new C(),halfHeight:new C(),};break;}
return(s[e.id]=t),t;},};}
function FT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case "DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J(),};break;case "SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J(),};break;case "PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J(),shadowCameraNear:1,shadowCameraFar:1e3,};break;}
return(s[e.id]=t),t;},};}
let OT=0;function kT(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0);}
function NT(s,e){const t=new BT(),n=FT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],};for(let u=0;u<9;u++)i.probe.push(new C());const r=new C(),o=new Pe(),a=new Pe();function l(u,h){let d=0,f=0,p=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let g=0,y=0,_=0,m=0,w=0,v=0,x=0,M=0;u.sort(kT);const S=h!==!0?Math.PI:1;for(let D=0,I=u.length;D<I;D++){const b=u[D],R=b.color,F=b.intensity,O=b.distance,H=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)
(d+=R.r*F*S),(f+=R.g*F*S),(p+=R.b*F*S);else if(b.isLightProbe)
for(let A=0;A<9;A++)
i.probe[A].addScaledVector(b.sh.coefficients[A],F);else if(b.isDirectionalLight){const A=t.get(b);if((A.color.copy(b.color).multiplyScalar(b.intensity*S),b.castShadow)){const z=b.shadow,U=n.get(b);(U.shadowBias=z.bias),(U.shadowNormalBias=z.normalBias),(U.shadowRadius=z.radius),(U.shadowMapSize=z.mapSize),(i.directionalShadow[g]=U),(i.directionalShadowMap[g]=H),(i.directionalShadowMatrix[g]=b.shadow.matrix),v++;}
(i.directional[g]=A),g++;}else if(b.isSpotLight){const A=t.get(b);if((A.position.setFromMatrixPosition(b.matrixWorld),A.color.copy(R).multiplyScalar(F*S),(A.distance=O),(A.coneCos=Math.cos(b.angle)),(A.penumbraCos=Math.cos(b.angle*(1-b.penumbra))),(A.decay=b.decay),b.castShadow)){const z=b.shadow,U=n.get(b);(U.shadowBias=z.bias),(U.shadowNormalBias=z.normalBias),(U.shadowRadius=z.radius),(U.shadowMapSize=z.mapSize),(i.spotShadow[_]=U),(i.spotShadowMap[_]=H),(i.spotShadowMatrix[_]=b.shadow.matrix),M++;}
(i.spot[_]=A),_++;}else if(b.isRectAreaLight){const A=t.get(b);A.color.copy(R).multiplyScalar(F),A.halfWidth.set(b.width*0.5,0,0),A.halfHeight.set(0,b.height*0.5,0),(i.rectArea[m]=A),m++;}else if(b.isPointLight){const A=t.get(b);if((A.color.copy(b.color).multiplyScalar(b.intensity*S),(A.distance=b.distance),(A.decay=b.decay),b.castShadow)){const z=b.shadow,U=n.get(b);(U.shadowBias=z.bias),(U.shadowNormalBias=z.normalBias),(U.shadowRadius=z.radius),(U.shadowMapSize=z.mapSize),(U.shadowCameraNear=z.camera.near),(U.shadowCameraFar=z.camera.far),(i.pointShadow[y]=U),(i.pointShadowMap[y]=H),(i.pointShadowMatrix[y]=b.shadow.matrix),x++;}
(i.point[y]=A),y++;}else if(b.isHemisphereLight){const A=t.get(b);A.skyColor.copy(b.color).multiplyScalar(F*S),A.groundColor.copy(b.groundColor).multiplyScalar(F*S),(i.hemi[w]=A),w++;}}
m>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?((i.rectAreaLTC1=we.LTC_FLOAT_1),(i.rectAreaLTC2=we.LTC_FLOAT_2)):s.has("OES_texture_half_float_linear")===!0?((i.rectAreaLTC1=we.LTC_HALF_1),(i.rectAreaLTC2=we.LTC_HALF_2)):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),(i.ambient[0]=d),(i.ambient[1]=f),(i.ambient[2]=p);const T=i.hash;(T.directionalLength!==g||T.pointLength!==y||T.spotLength!==_||T.rectAreaLength!==m||T.hemiLength!==w||T.numDirectionalShadows!==v||T.numPointShadows!==x||T.numSpotShadows!==M)&&((i.directional.length=g),(i.spot.length=_),(i.rectArea.length=m),(i.point.length=y),(i.hemi.length=w),(i.directionalShadow.length=v),(i.directionalShadowMap.length=v),(i.pointShadow.length=x),(i.pointShadowMap.length=x),(i.spotShadow.length=M),(i.spotShadowMap.length=M),(i.directionalShadowMatrix.length=v),(i.pointShadowMatrix.length=x),(i.spotShadowMatrix.length=M),(T.directionalLength=g),(T.pointLength=y),(T.spotLength=_),(T.rectAreaLength=m),(T.hemiLength=w),(T.numDirectionalShadows=v),(T.numPointShadows=x),(T.numSpotShadows=M),(i.version=OT++));}
function c(u,h){let d=0,f=0,p=0,g=0,y=0;const _=h.matrixWorldInverse;for(let m=0,w=u.length;m<w;m++){const v=u[m];if(v.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),d++;}else if(v.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),p++;}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),x.halfWidth.set(v.width*0.5,0,0),x.halfHeight.set(0,v.height*0.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++;}else if(v.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),f++;}else if(v.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(_),x.direction.normalize(),y++;}}}
return{setup:l,setupView:c,state:i};}
function Em(s,e){const t=new NT(s,e),n=[],i=[];function r(){(n.length=0),(i.length=0);}
function o(h){n.push(h);}
function a(h){i.push(h);}
function l(h){t.setup(n,h);}
function c(h){t.setupView(n,h);}
return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a,};}
function zT(s,e){let t=new WeakMap();function n(r,o=0){let a;return(t.has(r)===!1?((a=new Em(s,e)),t.set(r,[a])):o>=t.get(r).length?((a=new Em(s,e)),t.get(r).push(a)):(a=t.get(r)[o]),a);}
function i(){t=new WeakMap();}
return{get:n,dispose:i};}
class _u extends St{constructor(e){super(),(this.type="MeshDepthMaterial"),(this.depthPacking=Mf),(this.map=null),(this.alphaMap=null),(this.displacementMap=null),(this.displacementScale=1),(this.displacementBias=0),(this.wireframe=!1),(this.wireframeLinewidth=1),(this.fog=!1),this.setValues(e);}
copy(e){return(super.copy(e),(this.depthPacking=e.depthPacking),(this.map=e.map),(this.alphaMap=e.alphaMap),(this.displacementMap=e.displacementMap),(this.displacementScale=e.displacementScale),(this.displacementBias=e.displacementBias),(this.wireframe=e.wireframe),(this.wireframeLinewidth=e.wireframeLinewidth),this);}}
_u.prototype.isMeshDepthMaterial=!0;class yu extends St{constructor(e){super(),(this.type="MeshDistanceMaterial"),(this.referencePosition=new C()),(this.nearDistance=1),(this.farDistance=1e3),(this.map=null),(this.alphaMap=null),(this.displacementMap=null),(this.displacementScale=1),(this.displacementBias=0),(this.fog=!1),this.setValues(e);}
copy(e){return(super.copy(e),this.referencePosition.copy(e.referencePosition),(this.nearDistance=e.nearDistance),(this.farDistance=e.farDistance),(this.map=e.map),(this.alphaMap=e.alphaMap),(this.displacementMap=e.displacementMap),(this.displacementScale=e.displacementScale),(this.displacementBias=e.displacementBias),this);}}
yu.prototype.isMeshDistanceMaterial=!0;const UT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xy(s,e,t){let n=new ol();const i=new J(),r=new J(),o=new nt(),a=new _u({depthPacking:j_}),l=new yu(),c={},u=t.maxTextureSize,h={0:Lt,1:ds,2:fs},d=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J()},radius:{value:4},},vertexShader:UT,fragmentShader:HT,}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Be();p.setAttribute("position",new Xe(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));const g=new ht(p,d),y=this;(this.enabled=!1),(this.autoUpdate=!0),(this.needsUpdate=!1),(this.type=_f),(this.render=function(v,x,M){if(y.enabled===!1||(y.autoUpdate===!1&&y.needsUpdate===!1)||v.length===0)
return;const S=s.getRenderTarget(),T=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),I=s.state;I.setBlending(ui),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let b=0,R=v.length;b<R;b++){const F=v[b],O=F.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue;}
if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const H=O.getFrameExtents();if((i.multiply(H),r.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&((r.x=Math.floor(u/H.x)),(i.x=r.x*H.x),(O.mapSize.x=r.x)),i.y>u&&((r.y=Math.floor(u/H.y)),(i.y=r.y*H.y),(O.mapSize.y=r.y))),O.map===null&&!O.isPointLightShadow&&this.type===no)){const z={minFilter:Ke,magFilter:Ke,format:Xt};(O.map=new ft(i.x,i.y,z)),(O.map.texture.name=F.name+".shadowMap"),(O.mapPass=new ft(i.x,i.y,z)),O.camera.updateProjectionMatrix();}
if(O.map===null){const z={minFilter:Ot,magFilter:Ot,format:Xt};(O.map=new ft(i.x,i.y,z)),(O.map.texture.name=F.name+".shadowMap"),O.camera.updateProjectionMatrix();}
s.setRenderTarget(O.map),s.clear();const A=O.getViewportCount();for(let z=0;z<A;z++){const U=O.getViewport(z);o.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),I.viewport(o),O.updateMatrices(F,z),(n=O.getFrustum()),w(x,M,O.camera,F,this.type);}
!O.isPointLightShadow&&this.type===no&&_(O,M),(O.needsUpdate=!1);}
(y.needsUpdate=!1),s.setRenderTarget(S,T,D);});function _(v,x){const M=e.update(g);d.defines.VSM_SAMPLES!==v.blurSamples&&((d.defines.VSM_SAMPLES=v.blurSamples),(f.defines.VSM_SAMPLES=v.blurSamples),(d.needsUpdate=!0),(f.needsUpdate=!0)),(d.uniforms.shadow_pass.value=v.map.texture),(d.uniforms.resolution.value=v.mapSize),(d.uniforms.radius.value=v.radius),s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(x,null,M,d,g,null),(f.uniforms.shadow_pass.value=v.mapPass.texture),(f.uniforms.resolution.value=v.mapSize),(f.uniforms.radius.value=v.radius),s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(x,null,M,f,g,null);}
function m(v,x,M,S,T,D){let I=null;const b=M.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if((b!==void 0?(I=b):(I=M.isPointLight===!0?l:a),(s.localClippingEnabled&&x.clipShadows===!0&&x.clippingPlanes.length!==0)||(x.displacementMap&&x.displacementScale!==0)||(x.alphaMap&&x.alphaTest>0))){const R=I.uuid,F=x.uuid;let O=c[R];O===void 0&&((O={}),(c[R]=O));let H=O[F];H===void 0&&((H=I.clone()),(O[F]=H)),(I=H);}
return((I.visible=x.visible),(I.wireframe=x.wireframe),D===no?(I.side=x.shadowSide!==null?x.shadowSide:x.side):(I.side=x.shadowSide!==null?x.shadowSide:h[x.side]),(I.alphaMap=x.alphaMap),(I.alphaTest=x.alphaTest),(I.clipShadows=x.clipShadows),(I.clippingPlanes=x.clippingPlanes),(I.clipIntersection=x.clipIntersection),(I.displacementMap=x.displacementMap),(I.displacementScale=x.displacementScale),(I.displacementBias=x.displacementBias),(I.wireframeLinewidth=x.wireframeLinewidth),(I.linewidth=x.linewidth),M.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(M.matrixWorld),(I.nearDistance=S),(I.farDistance=T)),I);}
function w(v,x,M,S,T){if(v.visible===!1)return;if(v.layers.test(x.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||(v.receiveShadow&&T===no))&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,v.matrixWorld);const b=e.update(v),R=v.material;if(Array.isArray(R)){const F=b.groups;for(let O=0,H=F.length;O<H;O++){const A=F[O],z=R[A.materialIndex];if(z&&z.visible){const U=m(v,z,S,M.near,M.far,T);s.renderBufferDirect(M,null,b,U,v,A);}}}else if(R.visible){const F=m(v,R,S,M.near,M.far,T);s.renderBufferDirect(M,null,b,F,v,null);}}
const I=v.children;for(let b=0,R=I.length;b<R;b++)w(I[b],x,M,S,T);}}
function GT(s,e,t){const n=t.isWebGL2;function i(){let k=!1;const ye=new nt();let ge=null;const Fe=new nt(0,0,0,0);return{setMask:function(ae){ge!==ae&&!k&&(s.colorMask(ae,ae,ae,ae),(ge=ae));},setLocked:function(ae){k=ae;},setClear:function(ae,ne,xe,Ie,Ne){Ne===!0&&((ae*=Ie),(ne*=Ie),(xe*=Ie)),ye.set(ae,ne,xe,Ie),Fe.equals(ye)===!1&&(s.clearColor(ae,ne,xe,Ie),Fe.copy(ye));},reset:function(){(k=!1),(ge=null),Fe.set(-1,0,0,0);},};}
function r(){let k=!1,ye=null,ge=null,Fe=null;return{setTest:function(ae){ae?Z(2929):q(2929);},setMask:function(ae){ye!==ae&&!k&&(s.depthMask(ae),(ye=ae));},setFunc:function(ae){if(ge!==ae){if(ae)
switch(ae){case g_:s.depthFunc(512);break;case __:s.depthFunc(519);break;case y_:s.depthFunc(513);break;case Yc:s.depthFunc(515);break;case x_:s.depthFunc(514);break;case v_:s.depthFunc(518);break;case w_:s.depthFunc(516);break;case b_:s.depthFunc(517);break;default:s.depthFunc(515);}
else s.depthFunc(515);ge=ae;}},setLocked:function(ae){k=ae;},setClear:function(ae){Fe!==ae&&(s.clearDepth(ae),(Fe=ae));},reset:function(){(k=!1),(ye=null),(ge=null),(Fe=null);},};}
function o(){let k=!1,ye=null,ge=null,Fe=null,ae=null,ne=null,xe=null,Ie=null,Ne=null;return{setTest:function(De){k||(De?Z(2960):q(2960));},setMask:function(De){ye!==De&&!k&&(s.stencilMask(De),(ye=De));},setFunc:function(De,et,it){(ge!==De||Fe!==et||ae!==it)&&(s.stencilFunc(De,et,it),(ge=De),(Fe=et),(ae=it));},setOp:function(De,et,it){(ne!==De||xe!==et||Ie!==it)&&(s.stencilOp(De,et,it),(ne=De),(xe=et),(Ie=it));},setLocked:function(De){k=De;},setClear:function(De){Ne!==De&&(s.clearStencil(De),(Ne=De));},reset:function(){(k=!1),(ye=null),(ge=null),(Fe=null),(ae=null),(ne=null),(xe=null),(Ie=null),(Ne=null);},};}
const a=new i(),l=new r(),c=new o();let u={},h={},d=new WeakMap(),f=[],p=null,g=!1,y=null,_=null,m=null,w=null,v=null,x=null,M=null,S=!1,T=null,D=null,I=null,b=null,R=null;const F=s.getParameter(35661);let O=!1,H=0;const A=s.getParameter(7938);A.indexOf("WebGL")!==-1?((H=parseFloat(/^WebGL (\d)/.exec(A)[1])),(O=H>=1)):A.indexOf("OpenGL ES")!==-1&&((H=parseFloat(/^OpenGL ES (\d)/.exec(A)[1])),(O=H>=2));let z=null,U={};const B=s.getParameter(3088),j=s.getParameter(2978),X=new nt().fromArray(B),K=new nt().fromArray(j);function ue(k,ye,ge){const Fe=new Uint8Array(4),ae=s.createTexture();s.bindTexture(k,ae),s.texParameteri(k,10241,9728),s.texParameteri(k,10240,9728);for(let ne=0;ne<ge;ne++)
s.texImage2D(ye+ne,0,6408,1,1,0,6408,5121,Fe);return ae;}
const Ee={};(Ee[3553]=ue(3553,3553,1)),(Ee[34067]=ue(34067,34069,6)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Z(2929),l.setFunc(Yc),se(!1),_e(rd),Z(2884),V(ui);function Z(k){u[k]!==!0&&(s.enable(k),(u[k]=!0));}
function q(k){u[k]!==!1&&(s.disable(k),(u[k]=!1));}
function Ae(k,ye){return h[k]!==ye?(s.bindFramebuffer(k,ye),(h[k]=ye),n&&(k===36009&&(h[36160]=ye),k===36160&&(h[36009]=ye)),!0):!1;}
function fe(k,ye){let ge=f,Fe=!1;if(k)
if(((ge=d.get(ye)),ge===void 0&&((ge=[]),d.set(ye,ge)),k.isWebGLMultipleRenderTargets)){const ae=k.texture;if(ge.length!==ae.length||ge[0]!==36064){for(let ne=0,xe=ae.length;ne<xe;ne++)ge[ne]=36064+ne;(ge.length=ae.length),(Fe=!0);}}else ge[0]!==36064&&((ge[0]=36064),(Fe=!0));else ge[0]!==1029&&((ge[0]=1029),(Fe=!0));Fe&&(t.isWebGL2?s.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge));}
function ce(k){return p!==k?(s.useProgram(k),(p=k),!0):!1;}
const le={[Hr]:32774,[s_]:32778,[o_]:32779};if(n)(le[ad]=32775),(le[ld]=32776);else{const k=e.get("EXT_blend_minmax");k!==null&&((le[ad]=k.MIN_EXT),(le[ld]=k.MAX_EXT));}
const Te={[a_]:0,[l_]:1,[c_]:768,[xf]:770,[m_]:776,[f_]:774,[h_]:772,[u_]:769,[vf]:771,[p_]:775,[d_]:773,};function V(k,ye,ge,Fe,ae,ne,xe,Ie){if(k===ui){g===!0&&(q(3042),(g=!1));return;}
if((g===!1&&(Z(3042),(g=!0)),k!==r_)){if(k!==y||Ie!==S){if(((_!==Hr||v!==Hr)&&(s.blendEquation(32774),(_=Hr),(v=Hr)),Ie))
switch(k){case rs:s.blendFuncSeparate(1,771,1,771);break;case $c:s.blendFunc(1,1);break;case sd:s.blendFuncSeparate(0,769,0,1);break;case od:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break;}
else
switch(k){case rs:s.blendFuncSeparate(770,771,1,771);break;case $c:s.blendFunc(770,1);break;case sd:s.blendFuncSeparate(0,769,0,1);break;case od:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break;}
(m=null),(w=null),(x=null),(M=null),(y=k),(S=Ie);}
return;}
(ae=ae||ye),(ne=ne||ge),(xe=xe||Fe),(ye!==_||ae!==v)&&(s.blendEquationSeparate(le[ye],le[ae]),(_=ye),(v=ae)),(ge!==m||Fe!==w||ne!==x||xe!==M)&&(s.blendFuncSeparate(Te[ge],Te[Fe],Te[ne],Te[xe]),(m=ge),(w=Fe),(x=ne),(M=xe)),(y=k),(S=null);}
function ee(k,ye){k.side===fs?q(2884):Z(2884);let ge=k.side===Lt;ye&&(ge=!ge),se(ge),k.blending===rs&&k.transparent===!1?V(ui):V(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);const Fe=k.stencilWrite;c.setTest(Fe),Fe&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),me(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Z(32926):q(32926);}
function se(k){T!==k&&(k?s.frontFace(2304):s.frontFace(2305),(T=k));}
function _e(k){k!==t_?(Z(2884),k!==D&&(k===rd?s.cullFace(1029):k===n_?s.cullFace(1028):s.cullFace(1032))):q(2884),(D=k);}
function pe(k){k!==I&&(O&&s.lineWidth(k),(I=k));}
function me(k,ye,ge){k?(Z(32823),(b!==ye||R!==ge)&&(s.polygonOffset(ye,ge),(b=ye),(R=ge))):q(32823);}
function Le(k){k?Z(3089):q(3089);}
function Se(k){k===void 0&&(k=33984+F-1),z!==k&&(s.activeTexture(k),(z=k));}
function Ue(k,ye){z===null&&Se();let ge=U[z];ge===void 0&&((ge={type:void 0,texture:void 0}),(U[z]=ge)),(ge.type!==k||ge.texture!==ye)&&(s.bindTexture(k,ye||Ee[k]),(ge.type=k),(ge.texture=ye));}
function L(){const k=U[z];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),(k.type=void 0),(k.texture=void 0));}
function E(){try{s.compressedTexImage2D.apply(s,arguments);}catch(k){console.error("THREE.WebGLState:",k);}}
function Q(){try{s.texSubImage2D.apply(s,arguments);}catch(k){console.error("THREE.WebGLState:",k);}}
function ie(){try{s.texSubImage3D.apply(s,arguments);}catch(k){console.error("THREE.WebGLState:",k);}}
function he(){try{s.compressedTexSubImage2D.apply(s,arguments);}catch(k){console.error("THREE.WebGLState:",k);}}
function Me(){try{s.texStorage2D.apply(s,arguments);}catch(k){console.error("THREE.WebGLState:",k);}}
function Re(){try{s.texStorage3D.apply(s,arguments);}catch(k){console.error("THREE.WebGLState:",k);}}
function te(){try{s.texImage2D.apply(s,arguments);}catch(k){console.error("THREE.WebGLState:",k);}}
function N(){try{s.texImage3D.apply(s,arguments);}catch(k){console.error("THREE.WebGLState:",k);}}
function oe(k){X.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),X.copy(k));}
function be(k){K.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),K.copy(k));}
function de(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),(u={}),(z=null),(U={}),(h={}),(d=new WeakMap()),(f=[]),(p=null),(g=!1),(y=null),(_=null),(m=null),(w=null),(v=null),(x=null),(M=null),(S=!1),(T=null),(D=null),(I=null),(b=null),(R=null),X.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset();}
return{buffers:{color:a,depth:l,stencil:c},enable:Z,disable:q,bindFramebuffer:Ae,drawBuffers:fe,useProgram:ce,setBlending:V,setMaterial:ee,setFlipSided:se,setCullFace:_e,setLineWidth:pe,setPolygonOffset:me,setScissorTest:Le,activeTexture:Se,bindTexture:Ue,unbindTexture:L,compressedTexImage2D:E,texImage2D:te,texImage3D:N,texStorage2D:Me,texStorage3D:Re,texSubImage2D:Q,texSubImage3D:ie,compressedTexSubImage2D:he,scissor:oe,viewport:be,reset:de,};}
function VT(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=new WeakMap();let p;const g=new WeakMap();let y=!1;try{y=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null;}catch{}
function _(L,E){return y?new OffscreenCanvas(L,E):qa("canvas");}
function m(L,E,Q,ie){let he=1;if(((L.width>ie||L.height>ie)&&(he=ie/Math.max(L.width,L.height)),he<1||E===!0))
if((typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement)||(typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement)||(typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap)){const Me=E?Kc:Math.floor,Re=Me(he*L.width),te=Me(he*L.height);p===void 0&&(p=_(Re,te));const N=Q?_(Re,te):p;return((N.width=Re),(N.height=te),N.getContext("2d").drawImage(L,0,0,Re,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+
L.width+
"x"+
L.height+
") to ("+
Re+
"x"+
te+
")."),N);}else
return("data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+
L.width+
"x"+
L.height+
")."),L);return L;}
function w(L){return Rd(L.width)&&Rd(L.height);}
function v(L){return a?!1:L.wrapS!==dn||L.wrapT!==dn||(L.minFilter!==Ot&&L.minFilter!==Ke);}
function x(L,E){return L.generateMipmaps&&E&&L.minFilter!==Ot&&L.minFilter!==Ke;}
function M(L){s.generateMipmap(L);}
function S(L,E,Q,ie,he=!1){if(a===!1)return E;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+
L+
"'");}
let Me=E;return(E===6403&&(Q===5126&&(Me=33326),Q===5131&&(Me=33325),Q===5121&&(Me=33321)),E===33319&&(Q===5126&&(Me=33328),Q===5131&&(Me=33327),Q===5121&&(Me=33323)),E===6408&&(Q===5126&&(Me=34836),Q===5131&&(Me=34842),Q===5121&&(Me=ie===ot&&he===!1?35907:32856),Q===32819&&(Me=32854),Q===32820&&(Me=32855)),(Me===33325||Me===33326||Me===33327||Me===33328||Me===34842||Me===34836)&&e.get("EXT_color_buffer_float"),Me);}
function T(L,E,Q){return x(L,Q)===!0||(L.isFramebufferTexture&&L.minFilter!==Ot&&L.minFilter!==Ke)?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1;}
function D(L){return L===Ot||L===jc||L===Jc?9728:9729;}
function I(L){const E=L.target;E.removeEventListener("dispose",I),R(E),E.isVideoTexture&&f.delete(E);}
function b(L){const E=L.target;E.removeEventListener("dispose",b),O(E);}
function R(L){const E=n.get(L);if(E.__webglInit===void 0)return;const Q=L.source,ie=g.get(Q);if(ie){const he=ie[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&F(L),Object.keys(ie).length===0&&g.delete(Q);}
n.remove(L);}
function F(L){const E=n.get(L);s.deleteTexture(E.__webglTexture);const Q=L.source,ie=g.get(Q);delete ie[E.__cacheKey],o.memory.textures--;}
function O(L){const E=L.texture,Q=n.get(L),ie=n.get(E);if((ie.__webglTexture!==void 0&&(s.deleteTexture(ie.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget))
for(let he=0;he<6;he++)
s.deleteFramebuffer(Q.__webglFramebuffer[he]),Q.__webglDepthbuffer&&s.deleteRenderbuffer(Q.__webglDepthbuffer[he]);else
s.deleteFramebuffer(Q.__webglFramebuffer),Q.__webglDepthbuffer&&s.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer&&s.deleteRenderbuffer(Q.__webglColorRenderbuffer),Q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Q.__webglDepthRenderbuffer);if(L.isWebGLMultipleRenderTargets)
for(let he=0,Me=E.length;he<Me;he++){const Re=n.get(E[he]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),o.memory.textures--),n.remove(E[he]);}
n.remove(E),n.remove(L);}
let H=0;function A(){H=0;}
function z(){const L=H;return(L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+
L+
" texture units while this GPU supports only "+
l),(H+=1),L);}
function U(L){const E=[];return(E.push(L.wrapS),E.push(L.wrapT),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.encoding),E.join());}
function B(L,E){const Q=n.get(L);if((L.isVideoTexture&&Se(L),L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version)){const ie=L.image;if(ie===null)
console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)
console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(Q,L,E);return;}}
t.activeTexture(33984+E),t.bindTexture(3553,Q.__webglTexture);}
function j(L,E){const Q=n.get(L);if(L.version>0&&Q.__version!==L.version){Ae(Q,L,E);return;}
t.activeTexture(33984+E),t.bindTexture(35866,Q.__webglTexture);}
function X(L,E){const Q=n.get(L);if(L.version>0&&Q.__version!==L.version){Ae(Q,L,E);return;}
t.activeTexture(33984+E),t.bindTexture(32879,Q.__webglTexture);}
function K(L,E){const Q=n.get(L);if(L.version>0&&Q.__version!==L.version){fe(Q,L,E);return;}
t.activeTexture(33984+E),t.bindTexture(34067,Q.__webglTexture);}
const ue={[za]:10497,[dn]:33071,[Ua]:33648},Ee={[Ot]:9728,[jc]:9984,[Jc]:9986,[Ke]:9729,[wf]:9985,[ws]:9987,};function Z(L,E,Q){if((Q?(s.texParameteri(L,10242,ue[E.wrapS]),s.texParameteri(L,10243,ue[E.wrapT]),(L===32879||L===35866)&&s.texParameteri(L,32882,ue[E.wrapR]),s.texParameteri(L,10240,Ee[E.magFilter]),s.texParameteri(L,10241,Ee[E.minFilter])):(s.texParameteri(L,10242,33071),s.texParameteri(L,10243,33071),(L===32879||L===35866)&&s.texParameteri(L,32882,33071),(E.wrapS!==dn||E.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,10240,D(E.magFilter)),s.texParameteri(L,10241,D(E.minFilter)),E.minFilter!==Ot&&E.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0)){const ie=e.get("EXT_texture_filter_anisotropic");if((E.type===Ri&&e.has("OES_texture_float_linear")===!1)||(a===!1&&E.type===ss&&e.has("OES_texture_half_float_linear")===!1))
return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(L,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),(n.get(E).__currentAnisotropy=E.anisotropy));}}
function q(L,E){let Q=!1;L.__webglInit===void 0&&((L.__webglInit=!0),E.addEventListener("dispose",I));const ie=E.source;let he=g.get(ie);he===void 0&&((he={}),g.set(ie,he));const Me=U(E);if(Me!==L.__cacheKey){he[Me]===void 0&&((he[Me]={texture:s.createTexture(),usedTimes:0}),o.memory.textures++,(Q=!0)),he[Me].usedTimes++;const Re=he[L.__cacheKey];Re!==void 0&&(he[L.__cacheKey].usedTimes--,Re.usedTimes===0&&F(E)),(L.__cacheKey=Me),(L.__webglTexture=he[Me].texture);}
return Q;}
function Ae(L,E,Q){let ie=3553;E.isDataArrayTexture&&(ie=35866),E.isData3DTexture&&(ie=32879);const he=q(L,E),Me=E.source;if((t.activeTexture(33984+Q),t.bindTexture(ie,L.__webglTexture),Me.version!==Me.__currentVersion||he===!0)){s.pixelStorei(37440,E.flipY),s.pixelStorei(37441,E.premultiplyAlpha),s.pixelStorei(3317,E.unpackAlignment),s.pixelStorei(37443,0);const Re=v(E)&&w(E.image)===!1;let te=m(E.image,Re,!1,u);te=Ue(E,te);const N=w(te)||a,oe=r.convert(E.format,E.encoding);let be=r.convert(E.type),de=S(E.internalFormat,oe,be,E.encoding,E.isVideoTexture);Z(ie,E,N);let k;const ye=E.mipmaps,ge=a&&E.isVideoTexture!==!0,Fe=L.__version===void 0,ae=T(E,te,N);if(E.isDepthTexture)
(de=6402),a?E.type===Ri?(de=36012):E.type===xo?(de=33190):E.type===or?(de=35056):(de=33189):E.type===Ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ar&&de===6402&&E.type!==Lo&&E.type!==xo&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),(E.type=Lo),(be=r.convert(E.type))),E.format===pr&&de===6402&&((de=34041),E.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),(E.type=or),(be=r.convert(E.type)))),ge&&Fe?t.texStorage2D(3553,1,de,te.width,te.height):t.texImage2D(3553,0,de,te.width,te.height,0,oe,be,null);else if(E.isDataTexture)
if(ye.length>0&&N){ge&&Fe&&t.texStorage2D(3553,ae,de,ye[0].width,ye[0].height);for(let ne=0,xe=ye.length;ne<xe;ne++)
(k=ye[ne]),ge?t.texSubImage2D(3553,ne,0,0,k.width,k.height,oe,be,k.data):t.texImage2D(3553,ne,de,k.width,k.height,0,oe,be,k.data);E.generateMipmaps=!1;}else
ge?(Fe&&t.texStorage2D(3553,ae,de,te.width,te.height),t.texSubImage2D(3553,0,0,0,te.width,te.height,oe,be,te.data)):t.texImage2D(3553,0,de,te.width,te.height,0,oe,be,te.data);else if(E.isCompressedTexture){ge&&Fe&&t.texStorage2D(3553,ae,de,ye[0].width,ye[0].height);for(let ne=0,xe=ye.length;ne<xe;ne++)
(k=ye[ne]),E.format!==Xt?oe!==null?ge?t.compressedTexSubImage2D(3553,ne,0,0,k.width,k.height,oe,k.data):t.compressedTexImage2D(3553,ne,de,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?t.texSubImage2D(3553,ne,0,0,k.width,k.height,oe,be,k.data):t.texImage2D(3553,ne,de,k.width,k.height,0,oe,be,k.data);}else if(E.isDataArrayTexture)
ge?(Fe&&t.texStorage3D(35866,ae,de,te.width,te.height,te.depth),t.texSubImage3D(35866,0,0,0,0,te.width,te.height,te.depth,oe,be,te.data)):t.texImage3D(35866,0,de,te.width,te.height,te.depth,0,oe,be,te.data);else if(E.isData3DTexture)
ge?(Fe&&t.texStorage3D(32879,ae,de,te.width,te.height,te.depth),t.texSubImage3D(32879,0,0,0,0,te.width,te.height,te.depth,oe,be,te.data)):t.texImage3D(32879,0,de,te.width,te.height,te.depth,0,oe,be,te.data);else if(E.isFramebufferTexture)
ge&&Fe?t.texStorage2D(3553,ae,de,te.width,te.height):t.texImage2D(3553,0,de,te.width,te.height,0,oe,be,null);else if(ye.length>0&&N){ge&&Fe&&t.texStorage2D(3553,ae,de,ye[0].width,ye[0].height);for(let ne=0,xe=ye.length;ne<xe;ne++)
(k=ye[ne]),ge?t.texSubImage2D(3553,ne,0,0,oe,be,k):t.texImage2D(3553,ne,de,oe,be,k);E.generateMipmaps=!1;}else
ge?(Fe&&t.texStorage2D(3553,ae,de,te.width,te.height),t.texSubImage2D(3553,0,0,0,oe,be,te)):t.texImage2D(3553,0,de,oe,be,te);x(E,N)&&M(ie),(Me.__currentVersion=Me.version),E.onUpdate&&E.onUpdate(E);}
L.__version=E.version;}
function fe(L,E,Q){if(E.image.length!==6)return;const ie=q(L,E),he=E.source;if((t.activeTexture(33984+Q),t.bindTexture(34067,L.__webglTexture),he.version!==he.__currentVersion||ie===!0)){s.pixelStorei(37440,E.flipY),s.pixelStorei(37441,E.premultiplyAlpha),s.pixelStorei(3317,E.unpackAlignment),s.pixelStorei(37443,0);const Me=E.isCompressedTexture||E.image[0].isCompressedTexture,Re=E.image[0]&&E.image[0].isDataTexture,te=[];for(let ne=0;ne<6;ne++)
!Me&&!Re?(te[ne]=m(E.image[ne],!1,!0,c)):(te[ne]=Re?E.image[ne].image:E.image[ne]),(te[ne]=Ue(E,te[ne]));const N=te[0],oe=w(N)||a,be=r.convert(E.format,E.encoding),de=r.convert(E.type),k=S(E.internalFormat,be,de,E.encoding),ye=a&&E.isVideoTexture!==!0,ge=L.__version===void 0;let Fe=T(E,N,oe);Z(34067,E,oe);let ae;if(Me){ye&&ge&&t.texStorage2D(34067,Fe,k,N.width,N.height);for(let ne=0;ne<6;ne++){ae=te[ne].mipmaps;for(let xe=0;xe<ae.length;xe++){const Ie=ae[xe];E.format!==Xt?be!==null?ye?t.compressedTexSubImage2D(34069+ne,xe,0,0,Ie.width,Ie.height,be,Ie.data):t.compressedTexImage2D(34069+ne,xe,k,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?t.texSubImage2D(34069+ne,xe,0,0,Ie.width,Ie.height,be,de,Ie.data):t.texImage2D(34069+ne,xe,k,Ie.width,Ie.height,0,be,de,Ie.data);}}}else{(ae=E.mipmaps),ye&&ge&&(ae.length>0&&Fe++,t.texStorage2D(34067,Fe,k,te[0].width,te[0].height));for(let ne=0;ne<6;ne++)
if(Re){ye?t.texSubImage2D(34069+ne,0,0,0,te[ne].width,te[ne].height,be,de,te[ne].data):t.texImage2D(34069+ne,0,k,te[ne].width,te[ne].height,0,be,de,te[ne].data);for(let xe=0;xe<ae.length;xe++){const Ne=ae[xe].image[ne].image;ye?t.texSubImage2D(34069+ne,xe+1,0,0,Ne.width,Ne.height,be,de,Ne.data):t.texImage2D(34069+ne,xe+1,k,Ne.width,Ne.height,0,be,de,Ne.data);}}else{ye?t.texSubImage2D(34069+ne,0,0,0,be,de,te[ne]):t.texImage2D(34069+ne,0,k,be,de,te[ne]);for(let xe=0;xe<ae.length;xe++){const Ie=ae[xe];ye?t.texSubImage2D(34069+ne,xe+1,0,0,be,de,Ie.image[ne]):t.texImage2D(34069+ne,xe+1,k,be,de,Ie.image[ne]);}}}
x(E,oe)&&M(34067),(he.__currentVersion=he.version),E.onUpdate&&E.onUpdate(E);}
L.__version=E.version;}
function ce(L,E,Q,ie,he){const Me=r.convert(Q.format,Q.encoding),Re=r.convert(Q.type),te=S(Q.internalFormat,Me,Re,Q.encoding);n.get(E).__hasExternalTextures||(he===32879||he===35866?t.texImage3D(he,0,te,E.width,E.height,E.depth,0,Me,Re,null):t.texImage2D(he,0,te,E.width,E.height,0,Me,Re,null)),t.bindFramebuffer(36160,L),Le(E)?d.framebufferTexture2DMultisampleEXT(36160,ie,he,n.get(Q).__webglTexture,0,me(E)):s.framebufferTexture2D(36160,ie,he,n.get(Q).__webglTexture,0),t.bindFramebuffer(36160,null);}
function le(L,E,Q){if((s.bindRenderbuffer(36161,L),E.depthBuffer&&!E.stencilBuffer)){let ie=33189;if(Q||Le(E)){const he=E.depthTexture;he&&he.isDepthTexture&&(he.type===Ri?(ie=36012):he.type===xo&&(ie=33190));const Me=me(E);Le(E)?d.renderbufferStorageMultisampleEXT(36161,Me,ie,E.width,E.height):s.renderbufferStorageMultisample(36161,Me,ie,E.width,E.height);}else s.renderbufferStorage(36161,ie,E.width,E.height);s.framebufferRenderbuffer(36160,36096,36161,L);}else if(E.depthBuffer&&E.stencilBuffer){const ie=me(E);Q&&Le(E)===!1?s.renderbufferStorageMultisample(36161,ie,35056,E.width,E.height):Le(E)?d.renderbufferStorageMultisampleEXT(36161,ie,35056,E.width,E.height):s.renderbufferStorage(36161,34041,E.width,E.height),s.framebufferRenderbuffer(36160,33306,36161,L);}else{const ie=E.isWebGLMultipleRenderTargets===!0?E.texture[0]:E.texture,he=r.convert(ie.format,ie.encoding),Me=r.convert(ie.type),Re=S(ie.internalFormat,he,Me,ie.encoding),te=me(E);Q&&Le(E)===!1?s.renderbufferStorageMultisample(36161,te,Re,E.width,E.height):Le(E)?d.renderbufferStorageMultisampleEXT(36161,te,Re,E.width,E.height):s.renderbufferStorage(36161,Re,E.width,E.height);}
s.bindRenderbuffer(36161,null);}
function Te(L,E){if(E&&E.isWebGLCubeRenderTarget)
throw new Error("Depth Texture with cube render targets is not supported");if((t.bindFramebuffer(36160,L),!(E.depthTexture&&E.depthTexture.isDepthTexture)))
throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&((E.depthTexture.image.width=E.width),(E.depthTexture.image.height=E.height),(E.depthTexture.needsUpdate=!0)),B(E.depthTexture,0);const ie=n.get(E.depthTexture).__webglTexture,he=me(E);if(E.depthTexture.format===ar)
Le(E)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,he):s.framebufferTexture2D(36160,36096,3553,ie,0);else if(E.depthTexture.format===pr)
Le(E)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,he):s.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format");}
function V(L){const E=n.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)
throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,L);}else if(Q){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)
t.bindFramebuffer(36160,E.__webglFramebuffer[ie]),(E.__webglDepthbuffer[ie]=s.createRenderbuffer()),le(E.__webglDepthbuffer[ie],L,!1);}else
t.bindFramebuffer(36160,E.__webglFramebuffer),(E.__webglDepthbuffer=s.createRenderbuffer()),le(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null);}
function ee(L,E,Q){const ie=n.get(L);E!==void 0&&ce(ie.__webglFramebuffer,L,L.texture,36064,3553),Q!==void 0&&V(L);}
function se(L){const E=L.texture,Q=n.get(L),ie=n.get(E);L.addEventListener("dispose",b),L.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),(ie.__version=E.version),o.memory.textures++);const he=L.isWebGLCubeRenderTarget===!0,Me=L.isWebGLMultipleRenderTargets===!0,Re=w(L)||a;if(he){Q.__webglFramebuffer=[];for(let te=0;te<6;te++)
Q.__webglFramebuffer[te]=s.createFramebuffer();}else if(((Q.__webglFramebuffer=s.createFramebuffer()),Me))
if(i.drawBuffers){const te=L.texture;for(let N=0,oe=te.length;N<oe;N++){const be=n.get(te[N]);be.__webglTexture===void 0&&((be.__webglTexture=s.createTexture()),o.memory.textures++);}}else
console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&L.samples>0&&Le(L)===!1){(Q.__webglMultisampledFramebuffer=s.createFramebuffer()),(Q.__webglColorRenderbuffer=s.createRenderbuffer()),s.bindRenderbuffer(36161,Q.__webglColorRenderbuffer);const te=r.convert(E.format,E.encoding),N=r.convert(E.type),oe=S(E.internalFormat,te,N,E.encoding),be=me(L);s.renderbufferStorageMultisample(36161,be,oe,L.width,L.height),t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,Q.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),L.depthBuffer&&((Q.__webglDepthRenderbuffer=s.createRenderbuffer()),le(Q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null);}
if(he){t.bindTexture(34067,ie.__webglTexture),Z(34067,E,Re);for(let te=0;te<6;te++)
ce(Q.__webglFramebuffer[te],L,E,36064,34069+te);x(E,Re)&&M(34067),t.unbindTexture();}else if(Me){const te=L.texture;for(let N=0,oe=te.length;N<oe;N++){const be=te[N],de=n.get(be);t.bindTexture(3553,de.__webglTexture),Z(3553,be,Re),ce(Q.__webglFramebuffer,L,be,36064+N,3553),x(be,Re)&&M(3553);}
t.unbindTexture();}else{let te=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?(te=L.isWebGL3DRenderTarget?32879:35866):console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,ie.__webglTexture),Z(te,E,Re),ce(Q.__webglFramebuffer,L,E,36064,te),x(E,Re)&&M(te),t.unbindTexture();}
L.depthBuffer&&V(L);}
function _e(L){const E=w(L)||a,Q=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ie=0,he=Q.length;ie<he;ie++){const Me=Q[ie];if(x(Me,E)){const Re=L.isWebGLCubeRenderTarget?34067:3553,te=n.get(Me).__webglTexture;t.bindTexture(Re,te),M(Re),t.unbindTexture();}}}
function pe(L){if(a&&L.samples>0&&Le(L)===!1){const E=L.width,Q=L.height;let ie=16384;const he=[36064],Me=L.stencilBuffer?33306:36096;L.depthBuffer&&he.push(Me);const Re=n.get(L),te=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;te===!1&&(L.depthBuffer&&(ie|=256),L.stencilBuffer&&(ie|=1024)),t.bindFramebuffer(36008,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Re.__webglFramebuffer),te===!0&&(s.invalidateFramebuffer(36008,[Me]),s.invalidateFramebuffer(36009,[Me])),s.blitFramebuffer(0,0,E,Q,0,0,E,Q,ie,9728),s.invalidateFramebuffer(36008,he),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Re.__webglMultisampledFramebuffer);}}
function me(L){return Math.min(h,L.samples);}
function Le(L){const E=n.get(L);return(a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1);}
function Se(L){const E=o.render.frame;f.get(L)!==E&&(f.set(L,E),L.update());}
function Ue(L,E){const Q=L.encoding,ie=L.format,he=L.type;return(L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Zc||(Q!==Kn&&(Q===ot?a===!1?e.has("EXT_sRGB")===!0&&ie===Xt?((L.format=Zc),(L.minFilter=Ke),(L.generateMipmaps=!1)):(E=vr.sRGBToLinear(E)):(ie!==Xt||he!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Q))),E);}
(this.allocateTextureUnit=z),(this.resetTextureUnits=A),(this.setTexture2D=B),(this.setTexture2DArray=j),(this.setTexture3D=X),(this.setTextureCube=K),(this.rebindTextures=ee),(this.setupRenderTarget=se),(this.updateRenderTargetMipmap=_e),(this.updateMultisampleRenderTarget=pe),(this.setupDepthRenderbuffer=V),(this.setupFrameBufferTexture=ce),(this.useMultisampledRTT=Le);}
function vy(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===Zn)return 5121;if(r===I_)return 32819;if(r===B_)return 32820;if(r===P_)return 5120;if(r===R_)return 5122;if(r===Lo)return 5123;if(r===D_)return 5124;if(r===xo)return 5125;if(r===Ri)return 5126;if(r===ss)
return n?5131:((a=e.get("OES_texture_half_float")),a!==null?a.HALF_FLOAT_OES:null);if(r===F_)return 6406;if(r===Xt)return 6408;if(r===k_)return 6409;if(r===N_)return 6410;if(r===ar)return 6402;if(r===pr)return 34041;if(r===z_)return 6403;if(r===O_)
return(console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408);if(r===Zc)
return(a=e.get("EXT_sRGB")),a!==null?a.SRGB_ALPHA_EXT:null;if(r===U_)return 36244;if(r===H_)return 33319;if(r===G_)return 33320;if(r===V_)return 36249;if(r===vc||r===wc||r===bc||r===Mc)
if(o===ot)
if(((a=e.get("WEBGL_compressed_texture_s3tc_srgb")),a!==null)){if(r===vc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;}else return null;else if(((a=e.get("WEBGL_compressed_texture_s3tc")),a!==null)){if(r===vc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;}else return null;if(r===cd||r===ud||r===hd||r===dd)
if(((a=e.get("WEBGL_compressed_texture_pvrtc")),a!==null)){if(r===cd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ud)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===dd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;}else return null;if(r===W_)
return((a=e.get("WEBGL_compressed_texture_etc1")),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null);if(r===fd||r===pd)
if(((a=e.get("WEBGL_compressed_texture_etc")),a!==null)){if(r===fd)
return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===pd)
return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;}else return null;if(r===md||r===gd||r===_d||r===yd||r===xd||r===vd||r===wd||r===bd||r===Md||r===Sd||r===Td||r===Ed||r===Ad||r===Cd)
if(((a=e.get("WEBGL_compressed_texture_astc")),a!==null)){if(r===md)
return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gd)
return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_d)
return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yd)
return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xd)
return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vd)
return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wd)
return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bd)
return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Md)
return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sd)
return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Td)
return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ed)
return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ad)
return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cd)
return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR;}else return null;if(r===Ld)
if(((a=e.get("EXT_texture_compression_bptc")),a!==null)){if(r===Ld)
return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;}else return null;if(r===or)
return n?34042:((a=e.get("WEBGL_depth_texture")),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null);}
return{convert:i};}
class Ef extends qt{constructor(e=[]){super(),(this.cameras=e);}}
Ef.prototype.isArrayCamera=!0;class Zr extends Ye{constructor(){super(),(this.type="Group");}}
Zr.prototype.isGroup=!0;const WT={type:"move"};class Mh{constructor(){(this._targetRay=null),(this._grip=null),(this._hand=null);}
getHandSpace(){return(this._hand===null&&((this._hand=new Zr()),(this._hand.matrixAutoUpdate=!1),(this._hand.visible=!1),(this._hand.joints={}),(this._hand.inputState={pinching:!1})),this._hand);}
getTargetRaySpace(){return(this._targetRay===null&&((this._targetRay=new Zr()),(this._targetRay.matrixAutoUpdate=!1),(this._targetRay.visible=!1),(this._targetRay.hasLinearVelocity=!1),(this._targetRay.linearVelocity=new C()),(this._targetRay.hasAngularVelocity=!1),(this._targetRay.angularVelocity=new C())),this._targetRay);}
getGripSpace(){return(this._grip===null&&((this._grip=new Zr()),(this._grip.matrixAutoUpdate=!1),(this._grip.visible=!1),(this._grip.hasLinearVelocity=!1),(this._grip.linearVelocity=new C()),(this._grip.hasAngularVelocity=!1),(this._grip.angularVelocity=new C())),this._grip);}
dispatchEvent(e){return(this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this);}
disconnect(e){return(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this);}
update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")
if((a!==null&&((i=t.getPose(e.targetRaySpace,n)),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?((a.hasLinearVelocity=!0),a.linearVelocity.copy(i.linearVelocity)):(a.hasLinearVelocity=!1),i.angularVelocity?((a.hasAngularVelocity=!0),a.angularVelocity.copy(i.angularVelocity)):(a.hasAngularVelocity=!1),this.dispatchEvent(WT))),c&&e.hand)){o=!0;for(const g of e.hand.values()){const y=t.getJointPose(g,n);if(c.joints[g.jointName]===void 0){const m=new Zr();(m.matrixAutoUpdate=!1),(m.visible=!1),(c.joints[g.jointName]=m),c.add(m);}
const _=c.joints[g.jointName];y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),(_.jointRadius=y.radius)),(_.visible=y!==null);}
const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=0.02,p=0.005;c.inputState.pinching&&d>f+p?((c.inputState.pinching=!1),this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this,})):!c.inputState.pinching&&d<=f-p&&((c.inputState.pinching=!0),this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this,}));}else
l!==null&&e.gripSpace&&((r=t.getPose(e.gripSpace,n)),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?((l.hasLinearVelocity=!0),l.linearVelocity.copy(r.linearVelocity)):(l.hasLinearVelocity=!1),r.angularVelocity?((l.hasAngularVelocity=!0),l.angularVelocity.copy(r.angularVelocity)):(l.hasAngularVelocity=!1)));return(a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this);}}
class xu extends Dt{constructor(e,t,n,i,r,o,a,l,c,u){if(((u=u!==void 0?u:ar),u!==ar&&u!==pr))
throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ar&&(n=Lo),n===void 0&&u===pr&&(n=or),super(null,i,r,o,a,l,u,n,c),(this.image={width:e,height:t}),(this.magFilter=a!==void 0?a:Ot),(this.minFilter=l!==void 0?l:Ot),(this.flipY=!1),(this.generateMipmaps=!1);}}
xu.prototype.isDepthTexture=!0;class qT extends Hi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,d=null;const f=t.getContextAttributes();let p=null,g=null;const y=[],_=new Map(),m=new qt();m.layers.enable(1),(m.viewport=new nt());const w=new qt();w.layers.enable(2),(w.viewport=new nt());const v=[m,w],x=new Ef();x.layers.enable(1),x.layers.enable(2);let M=null,S=null;(this.cameraAutoUpdate=!0),(this.enabled=!1),(this.isPresenting=!1),(this.getController=function(U){let B=y[U];return(B===void 0&&((B=new Mh()),(y[U]=B)),B.getTargetRaySpace());}),(this.getControllerGrip=function(U){let B=y[U];return B===void 0&&((B=new Mh()),(y[U]=B)),B.getGripSpace();}),(this.getHand=function(U){let B=y[U];return B===void 0&&((B=new Mh()),(y[U]=B)),B.getHandSpace();});function T(U){const B=_.get(U.inputSource);B&&B.dispatchEvent({type:U.type,data:U.inputSource});}
function D(){_.forEach(function(U,B){U.disconnect(B);}),_.clear(),(M=null),(S=null),e.setRenderTarget(p),(h=null),(u=null),(c=null),(i=null),(g=null),z.stop(),(n.isPresenting=!1),n.dispatchEvent({type:"sessionend"});}
(this.setFramebufferScaleFactor=function(U){(r=U),n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");}),(this.setReferenceSpaceType=function(U){(a=U),n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");}),(this.getReferenceSpace=function(){return o;}),(this.getBaseLayer=function(){return u!==null?u:h;}),(this.getBinding=function(){return c;}),(this.getFrame=function(){return d;}),(this.getSession=function(){return i;}),(this.setSession=async function(U){if(((i=U),i!==null)){if(((p=e.getRenderTarget()),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",D),i.addEventListener("inputsourceschange",I),f.xrCompatible!==!0&&(await t.makeXRCompatible()),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1)){const B={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r,};(h=new XRWebGLLayer(i,t,B)),i.updateRenderState({baseLayer:h}),(g=new ft(h.framebufferWidth,h.framebufferHeight,{format:Xt,type:Zn,encoding:e.outputEncoding,}));}else{let B=null,j=null,X=null;f.depth&&((X=f.stencil?35056:33190),(B=f.stencil?pr:ar),(j=f.stencil?or:Lo));const K={colorFormat:e.outputEncoding===ot?35907:32856,depthFormat:X,scaleFactor:r,};(c=new XRWebGLBinding(i,t)),(u=c.createProjectionLayer(K)),i.updateRenderState({layers:[u]}),(g=new ft(u.textureWidth,u.textureHeight,{format:Xt,type:Zn,depthTexture:new xu(u.textureWidth,u.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0,}));const ue=e.properties.get(g);ue.__ignoreDepthValues=u.ignoreDepthValues;}
(g.isXRRenderTarget=!0),this.setFoveation(1),(o=await i.requestReferenceSpace(a)),z.setContext(i),z.start(),(n.isPresenting=!0),n.dispatchEvent({type:"sessionstart"});}});function I(U){const B=i.inputSources;for(let j=0;j<y.length;j++)_.set(B[j],y[j]);for(let j=0;j<U.removed.length;j++){const X=U.removed[j],K=_.get(X);K&&(K.dispatchEvent({type:"disconnected",data:X}),_.delete(X));}
for(let j=0;j<U.added.length;j++){const X=U.added[j],K=_.get(X);K&&K.dispatchEvent({type:"connected",data:X});}}
const b=new C(),R=new C();function F(U,B,j){b.setFromMatrixPosition(B.matrixWorld),R.setFromMatrixPosition(j.matrixWorld);const X=b.distanceTo(R),K=B.projectionMatrix.elements,ue=j.projectionMatrix.elements,Ee=K[14]/(K[10]-1),Z=K[14]/(K[10]+1),q=(K[9]+1)/K[5],Ae=(K[9]-1)/K[5],fe=(K[8]-1)/K[0],ce=(ue[8]+1)/ue[0],le=Ee*fe,Te=Ee*ce,V=X/(-fe+ce),ee=V*-fe;B.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ee),U.translateZ(V),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const se=Ee+V,_e=Z+V,pe=le-ee,me=Te+(X-ee),Le=((q*Z)/_e)*se,Se=((Ae*Z)/_e)*se;U.projectionMatrix.makePerspective(pe,me,Le,Se,se,_e);}
function O(U,B){B===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(B.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert();}
(this.updateCamera=function(U){if(i===null)return;(x.near=w.near=m.near=U.near),(x.far=w.far=m.far=U.far),(M!==x.near||S!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),(M=x.near),(S=x.far));const B=U.parent,j=x.cameras;O(x,B);for(let K=0;K<j.length;K++)O(j[K],B);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),U.position.copy(x.position),U.quaternion.copy(x.quaternion),U.scale.copy(x.scale),U.matrix.copy(x.matrix),U.matrixWorld.copy(x.matrixWorld);const X=U.children;for(let K=0,ue=X.length;K<ue;K++)X[K].updateMatrixWorld(!0);j.length===2?F(x,m,w):x.projectionMatrix.copy(m.projectionMatrix);}),(this.getCamera=function(){return x;}),(this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(h!==null)return h.fixedFoveation;}),(this.setFoveation=function(U){u!==null&&(u.fixedFoveation=U),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=U);});let H=null;function A(U,B){if(((l=B.getViewerPose(o)),(d=B),l!==null)){const X=l.views;h!==null&&(e.setRenderTargetFramebuffer(g,h.framebuffer),e.setRenderTarget(g));let K=!1;X.length!==x.cameras.length&&((x.cameras.length=0),(K=!0));for(let ue=0;ue<X.length;ue++){const Ee=X[ue];let Z=null;if(h!==null)Z=h.getViewport(Ee);else{const Ae=c.getViewSubImage(u,Ee);(Z=Ae.viewport),ue===0&&(e.setRenderTargetTextures(g,Ae.colorTexture,u.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(g));}
const q=v[ue];q.matrix.fromArray(Ee.transform.matrix),q.projectionMatrix.fromArray(Ee.projectionMatrix),q.viewport.set(Z.x,Z.y,Z.width,Z.height),ue===0&&x.matrix.copy(q.matrix),K===!0&&x.cameras.push(q);}}
const j=i.inputSources;for(let X=0;X<y.length;X++){const K=y[X],ue=j[X];K.update(ue,B,o);}
H&&H(U,B),(d=null);}
const z=new hy();z.setAnimationLoop(A),(this.setAnimationLoop=function(U){H=U;}),(this.dispose=function(){});}}
function XT(s){function e(_,m){_.fogColor.value.copy(m.color),m.isFog?((_.fogNear.value=m.near),(_.fogFar.value=m.far)):m.isFogExp2&&(_.fogDensity.value=m.density);}
function t(_,m,w,v,x){m.isMeshBasicMaterial?n(_,m):m.isMeshLambertMaterial?(n(_,m),l(_,m)):m.isMeshToonMaterial?(n(_,m),u(_,m)):m.isMeshPhongMaterial?(n(_,m),c(_,m)):m.isMeshStandardMaterial?(n(_,m),m.isMeshPhysicalMaterial?d(_,m,x):h(_,m)):m.isMeshMatcapMaterial?(n(_,m),f(_,m)):m.isMeshDepthMaterial?(n(_,m),p(_,m)):m.isMeshDistanceMaterial?(n(_,m),g(_,m)):m.isMeshNormalMaterial?(n(_,m),y(_,m)):m.isLineBasicMaterial?(i(_,m),m.isLineDashedMaterial&&r(_,m)):m.isPointsMaterial?o(_,m,w,v):m.isSpriteMaterial?a(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),(_.opacity.value=m.opacity)):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1);}
function n(_,m){(_.opacity.value=m.opacity),m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map),m.alphaMap&&(_.alphaMap.value=m.alphaMap),m.specularMap&&(_.specularMap.value=m.specularMap),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const w=s.get(m).envMap;w&&((_.envMap.value=w),(_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1),(_.reflectivity.value=m.reflectivity),(_.ior.value=m.ior),(_.refractionRatio.value=m.refractionRatio)),m.lightMap&&((_.lightMap.value=m.lightMap),(_.lightMapIntensity.value=m.lightMapIntensity)),m.aoMap&&((_.aoMap.value=m.aoMap),(_.aoMapIntensity.value=m.aoMapIntensity));let v;m.map?(v=m.map):m.specularMap?(v=m.specularMap):m.displacementMap?(v=m.displacementMap):m.normalMap?(v=m.normalMap):m.bumpMap?(v=m.bumpMap):m.roughnessMap?(v=m.roughnessMap):m.metalnessMap?(v=m.metalnessMap):m.alphaMap?(v=m.alphaMap):m.emissiveMap?(v=m.emissiveMap):m.clearcoatMap?(v=m.clearcoatMap):m.clearcoatNormalMap?(v=m.clearcoatNormalMap):m.clearcoatRoughnessMap?(v=m.clearcoatRoughnessMap):m.specularIntensityMap?(v=m.specularIntensityMap):m.specularColorMap?(v=m.specularColorMap):m.transmissionMap?(v=m.transmissionMap):m.thicknessMap?(v=m.thicknessMap):m.sheenColorMap?(v=m.sheenColorMap):m.sheenRoughnessMap&&(v=m.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),_.uvTransform.value.copy(v.matrix));let x;m.aoMap?(x=m.aoMap):m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),_.uv2Transform.value.copy(x.matrix));}
function i(_,m){_.diffuse.value.copy(m.color),(_.opacity.value=m.opacity);}
function r(_,m){(_.dashSize.value=m.dashSize),(_.totalSize.value=m.dashSize+m.gapSize),(_.scale.value=m.scale);}
function o(_,m,w,v){_.diffuse.value.copy(m.color),(_.opacity.value=m.opacity),(_.size.value=m.size*w),(_.scale.value=v*0.5),m.map&&(_.map.value=m.map),m.alphaMap&&(_.alphaMap.value=m.alphaMap),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let x;m.map?(x=m.map):m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),_.uvTransform.value.copy(x.matrix));}
function a(_,m){_.diffuse.value.copy(m.color),(_.opacity.value=m.opacity),(_.rotation.value=m.rotation),m.map&&(_.map.value=m.map),m.alphaMap&&(_.alphaMap.value=m.alphaMap),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let w;m.map?(w=m.map):m.alphaMap&&(w=m.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),_.uvTransform.value.copy(w.matrix));}
function l(_,m){m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap);}
function c(_,m){_.specular.value.copy(m.specular),(_.shininess.value=Math.max(m.shininess,1e-4)),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap),m.bumpMap&&((_.bumpMap.value=m.bumpMap),(_.bumpScale.value=m.bumpScale),m.side===Lt&&(_.bumpScale.value*=-1)),m.normalMap&&((_.normalMap.value=m.normalMap),_.normalScale.value.copy(m.normalScale),m.side===Lt&&_.normalScale.value.negate()),m.displacementMap&&((_.displacementMap.value=m.displacementMap),(_.displacementScale.value=m.displacementScale),(_.displacementBias.value=m.displacementBias));}
function u(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap),m.bumpMap&&((_.bumpMap.value=m.bumpMap),(_.bumpScale.value=m.bumpScale),m.side===Lt&&(_.bumpScale.value*=-1)),m.normalMap&&((_.normalMap.value=m.normalMap),_.normalScale.value.copy(m.normalScale),m.side===Lt&&_.normalScale.value.negate()),m.displacementMap&&((_.displacementMap.value=m.displacementMap),(_.displacementScale.value=m.displacementScale),(_.displacementBias.value=m.displacementBias));}
function h(_,m){(_.roughness.value=m.roughness),(_.metalness.value=m.metalness),m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap),m.bumpMap&&((_.bumpMap.value=m.bumpMap),(_.bumpScale.value=m.bumpScale),m.side===Lt&&(_.bumpScale.value*=-1)),m.normalMap&&((_.normalMap.value=m.normalMap),_.normalScale.value.copy(m.normalScale),m.side===Lt&&_.normalScale.value.negate()),m.displacementMap&&((_.displacementMap.value=m.displacementMap),(_.displacementScale.value=m.displacementScale),(_.displacementBias.value=m.displacementBias)),s.get(m).envMap&&(_.envMapIntensity.value=m.envMapIntensity);}
function d(_,m,w){h(_,m),(_.ior.value=m.ior),m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),(_.sheenRoughness.value=m.sheenRoughness),m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&((_.clearcoat.value=m.clearcoat),(_.clearcoatRoughness.value=m.clearcoatRoughness),m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),(_.clearcoatNormalMap.value=m.clearcoatNormalMap),m.side===Lt&&_.clearcoatNormalScale.value.negate())),m.transmission>0&&((_.transmission.value=m.transmission),(_.transmissionSamplerMap.value=w.texture),_.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap),(_.thickness.value=m.thickness),m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap),(_.attenuationDistance.value=m.attenuationDistance),_.attenuationColor.value.copy(m.attenuationColor)),(_.specularIntensity.value=m.specularIntensity),_.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap);}
function f(_,m){m.matcap&&(_.matcap.value=m.matcap),m.bumpMap&&((_.bumpMap.value=m.bumpMap),(_.bumpScale.value=m.bumpScale),m.side===Lt&&(_.bumpScale.value*=-1)),m.normalMap&&((_.normalMap.value=m.normalMap),_.normalScale.value.copy(m.normalScale),m.side===Lt&&_.normalScale.value.negate()),m.displacementMap&&((_.displacementMap.value=m.displacementMap),(_.displacementScale.value=m.displacementScale),(_.displacementBias.value=m.displacementBias));}
function p(_,m){m.displacementMap&&((_.displacementMap.value=m.displacementMap),(_.displacementScale.value=m.displacementScale),(_.displacementBias.value=m.displacementBias));}
function g(_,m){m.displacementMap&&((_.displacementMap.value=m.displacementMap),(_.displacementScale.value=m.displacementScale),(_.displacementBias.value=m.displacementBias)),_.referencePosition.value.copy(m.referencePosition),(_.nearDistance.value=m.nearDistance),(_.farDistance.value=m.farDistance);}
function y(_,m){m.bumpMap&&((_.bumpMap.value=m.bumpMap),(_.bumpScale.value=m.bumpScale),m.side===Lt&&(_.bumpScale.value*=-1)),m.normalMap&&((_.normalMap.value=m.normalMap),_.normalScale.value.copy(m.normalScale),m.side===Lt&&_.normalScale.value.negate()),m.displacementMap&&((_.displacementMap.value=m.displacementMap),(_.displacementScale.value=m.displacementScale),(_.displacementBias.value=m.displacementBias));}
return{refreshFogUniforms:e,refreshMaterialUniforms:t};}
function $T(){const s=qa("canvas");return(s.style.display="block"),s;}
function st(s={}){const e=s.canvas!==void 0?s.canvas:$T(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;s.context!==void 0?(u=t.getContextAttributes().alpha):(u=s.alpha!==void 0?s.alpha:!1);let h=null,d=null;const f=[],p=[];(this.domElement=e),(this.debug={checkShaderErrors:!0}),(this.autoClear=!0),(this.autoClearColor=!0),(this.autoClearDepth=!0),(this.autoClearStencil=!0),(this.sortObjects=!0),(this.clippingPlanes=[]),(this.localClippingEnabled=!1),(this.outputEncoding=Kn),(this.physicallyCorrectLights=!1),(this.toneMapping=Bi),(this.toneMappingExposure=1);const g=this;let y=!1,_=0,m=0,w=null,v=-1,x=null;const M=new nt(),S=new nt();let T=null,D=e.width,I=e.height,b=1,R=null,F=null;const O=new nt(0,0,D,I),H=new nt(0,0,D,I);let A=!1;const z=new ol();let U=!1,B=!1,j=null;const X=new Pe(),K=new J(),ue=new C(),Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0,};function Z(){return w===null?b:1;}
let q=t;function Ae(P,G){for(let Y=0;Y<P.length;Y++){const W=P[Y],re=e.getContext(W,G);if(re!==null)return re;}
return null;}
try{const P={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c,};if(("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",k,!1),e.addEventListener("webglcontextrestored",ye,!1),q===null)){const G=["webgl2","webgl","experimental-webgl"];if((g.isWebGL1Renderer===!0&&G.shift(),(q=Ae(G,P)),q===null))
throw Ae(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.");}
q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1};});}catch(P){throw(console.error("THREE.WebGLRenderer: "+P.message),P);}
let fe,ce,le,Te,V,ee,se,_e,pe,me,Le,Se,Ue,L,E,Q,ie,he,Me,Re,te,N,oe;function be(){(fe=new d1(q)),(ce=new o1(q,fe,s)),fe.init(ce),(N=new vy(q,fe,ce)),(le=new GT(q,fe,ce)),(Te=new m1()),(V=new RT()),(ee=new VT(q,fe,le,V,ce,N,Te)),(se=new l1(g)),(_e=new h1(g)),(pe=new Lb(q,ce)),(oe=new r1(q,fe,pe,ce)),(me=new f1(q,pe,Te,oe)),(Le=new x1(q,me,pe,Te)),(Me=new y1(q,ce,ee)),(Q=new a1(V)),(Se=new PT(g,se,_e,fe,ce,oe,Q)),(Ue=new XT(V)),(L=new IT()),(E=new zT(fe,ce)),(he=new i1(g,se,le,Le,u,o)),(ie=new xy(g,Le,ce)),(Re=new s1(q,fe,Te,ce)),(te=new p1(q,fe,Te,ce)),(Te.programs=Se.programs),(g.capabilities=ce),(g.extensions=fe),(g.properties=V),(g.renderLists=L),(g.shadowMap=ie),(g.state=le),(g.info=Te);}
be();const de=new qT(g,q);(this.xr=de),(this.getContext=function(){return q;}),(this.getContextAttributes=function(){return q.getContextAttributes();}),(this.forceContextLoss=function(){const P=fe.get("WEBGL_lose_context");P&&P.loseContext();}),(this.forceContextRestore=function(){const P=fe.get("WEBGL_lose_context");P&&P.restoreContext();}),(this.getPixelRatio=function(){return b;}),(this.setPixelRatio=function(P){P!==void 0&&((b=P),this.setSize(D,I,!1));}),(this.getSize=function(P){return P.set(D,I);}),(this.setSize=function(P,G,Y){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return;}
(D=P),(I=G),(e.width=Math.floor(P*b)),(e.height=Math.floor(G*b)),Y!==!1&&((e.style.width=P+"px"),(e.style.height=G+"px")),this.setViewport(0,0,P,G);}),(this.getDrawingBufferSize=function(P){return P.set(D*b,I*b).floor();}),(this.setDrawingBufferSize=function(P,G,Y){(D=P),(I=G),(b=Y),(e.width=Math.floor(P*Y)),(e.height=Math.floor(G*Y)),this.setViewport(0,0,P,G);}),(this.getCurrentViewport=function(P){return P.copy(M);}),(this.getViewport=function(P){return P.copy(O);}),(this.setViewport=function(P,G,Y,W){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,G,Y,W),le.viewport(M.copy(O).multiplyScalar(b).floor());}),(this.getScissor=function(P){return P.copy(H);}),(this.setScissor=function(P,G,Y,W){P.isVector4?H.set(P.x,P.y,P.z,P.w):H.set(P,G,Y,W),le.scissor(S.copy(H).multiplyScalar(b).floor());}),(this.getScissorTest=function(){return A;}),(this.setScissorTest=function(P){le.setScissorTest((A=P));}),(this.setOpaqueSort=function(P){R=P;}),(this.setTransparentSort=function(P){F=P;}),(this.getClearColor=function(P){return P.copy(he.getClearColor());}),(this.setClearColor=function(){he.setClearColor.apply(he,arguments);}),(this.getClearAlpha=function(){return he.getClearAlpha();}),(this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments);}),(this.clear=function(P=!0,G=!0,Y=!0){let W=0;P&&(W|=16384),G&&(W|=256),Y&&(W|=1024),q.clear(W);}),(this.clearColor=function(){this.clear(!0,!1,!1);}),(this.clearDepth=function(){this.clear(!1,!0,!1);}),(this.clearStencil=function(){this.clear(!1,!1,!0);}),(this.dispose=function(){e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",ye,!1),L.dispose(),E.dispose(),V.dispose(),se.dispose(),_e.dispose(),Le.dispose(),oe.dispose(),Se.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ie),de.removeEventListener("sessionend",Ne),j&&(j.dispose(),(j=null)),De.stop();});function k(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),(y=!0);}
function ye(){console.log("THREE.WebGLRenderer: Context Restored."),(y=!1);const P=Te.autoReset,G=ie.enabled,Y=ie.autoUpdate,W=ie.needsUpdate,re=ie.type;be(),(Te.autoReset=P),(ie.enabled=G),(ie.autoUpdate=Y),(ie.needsUpdate=W),(ie.type=re);}
function ge(P){const G=P.target;G.removeEventListener("dispose",ge),Fe(G);}
function Fe(P){ae(P),V.remove(P);}
function ae(P){const G=V.get(P).programs;G!==void 0&&(G.forEach(function(Y){Se.releaseProgram(Y);}),P.isShaderMaterial&&Se.releaseShaderCache(P));}
(this.renderBufferDirect=function(P,G,Y,W,re,Oe){G===null&&(G=Ee);const ke=re.isMesh&&re.matrixWorld.determinant()<0,He=zt(P,G,Y,W,re);le.setMaterial(W,ke);let Ve=Y.index;const rt=Y.attributes.position;if(Ve===null){if(rt===void 0||rt.count===0)return;}else if(Ve.count===0)return;let Je=1;W.wireframe===!0&&((Ve=me.getWireframeAttribute(Y)),(Je=2)),oe.setup(re,W,He,Y,Ve);let Qe,yt=Re;Ve!==null&&((Qe=pe.get(Ve)),(yt=te),yt.setIndex(Qe));const Sr=Ve!==null?Ve.count:rt.count,Cs=Y.drawRange.start*Je,Ls=Y.drawRange.count*Je,ti=Oe!==null?Oe.start*Je:0,tt=Oe!==null?Oe.count*Je:1/0,Ps=Math.max(Cs,ti),It=Math.min(Sr,Cs+Ls,ti+tt)-1,ni=Math.max(0,It-Ps+1);if(ni!==0){if(re.isMesh)
W.wireframe===!0?(le.setLineWidth(W.wireframeLinewidth*Z()),yt.setMode(1)):yt.setMode(4);else if(re.isLine){let Gi=W.linewidth;Gi===void 0&&(Gi=1),le.setLineWidth(Gi*Z()),re.isLineSegments?yt.setMode(1):re.isLineLoop?yt.setMode(2):yt.setMode(3);}else re.isPoints?yt.setMode(0):re.isSprite&&yt.setMode(4);if(re.isInstancedMesh)yt.renderInstances(Ps,ni,re.count);else if(Y.isInstancedBufferGeometry){const Gi=Math.min(Y.instanceCount,Y._maxInstanceCount);yt.renderInstances(Ps,ni,Gi);}else yt.render(Ps,ni);}}),(this.compile=function(P,G){(d=E.get(P)),d.init(),p.push(d),P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y));}),d.setupLights(g.physicallyCorrectLights),P.traverse(function(Y){const W=Y.material;if(W)
if(Array.isArray(W))
for(let re=0;re<W.length;re++){const Oe=W[re];Gt(Oe,P,Y);}
else Gt(W,P,Y);}),p.pop(),(d=null);});let ne=null;function xe(P){ne&&ne(P);}
function Ie(){De.stop();}
function Ne(){De.start();}
const De=new hy();De.setAnimationLoop(xe),typeof window!="undefined"&&De.setContext(window),(this.setAnimationLoop=function(P){(ne=P),de.setAnimationLoop(P),P===null?De.stop():De.start();}),de.addEventListener("sessionstart",Ie),de.addEventListener("sessionend",Ne),(this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return;}
if(y===!0)return;P.autoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(G),(G=de.getCamera())),P.isScene===!0&&P.onBeforeRender(g,P,G,w),(d=E.get(P,p.length)),d.init(),p.push(d),X.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),z.setFromProjectionMatrix(X),(B=this.localClippingEnabled),(U=Q.init(this.clippingPlanes,B,G)),(h=L.get(P,f.length)),h.init(),f.push(h),et(P,G,0,g.sortObjects),h.finish(),g.sortObjects===!0&&h.sort(R,F),U===!0&&Q.beginShadows();const Y=d.state.shadowsArray;if((ie.render(Y,P,G),U===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(h,P),d.setupLights(g.physicallyCorrectLights),G.isArrayCamera)){const W=G.cameras;for(let re=0,Oe=W.length;re<Oe;re++){const ke=W[re];it(h,P,ke,ke.viewport);}}else it(h,P,G);w!==null&&(ee.updateMultisampleRenderTarget(w),ee.updateRenderTargetMipmap(w)),P.isScene===!0&&P.onAfterRender(g,P,G),oe.resetDefaultState(),(v=-1),(x=null),p.pop(),p.length>0?(d=p[p.length-1]):(d=null),f.pop(),f.length>0?(h=f[f.length-1]):(h=null);});function et(P,G,Y,W){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||z.intersectsSprite(P)){W&&ue.setFromMatrixPosition(P.matrixWorld).applyMatrix4(X);const ke=Le.update(P),He=P.material;He.visible&&h.push(P,ke,He,Y,ue.z,null);}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==Te.render.frame&&(P.skeleton.update(),(P.skeleton.frame=Te.render.frame)),!P.frustumCulled||z.intersectsObject(P))){W&&ue.setFromMatrixPosition(P.matrixWorld).applyMatrix4(X);const ke=Le.update(P),He=P.material;if(Array.isArray(He)){const Ve=ke.groups;for(let rt=0,Je=Ve.length;rt<Je;rt++){const Qe=Ve[rt],yt=He[Qe.materialIndex];yt&&yt.visible&&h.push(P,ke,yt,Y,ue.z,Qe);}}else He.visible&&h.push(P,ke,He,Y,ue.z,null);}}
const Oe=P.children;for(let ke=0,He=Oe.length;ke<He;ke++)et(Oe[ke],G,Y,W);}
function it(P,G,Y,W){const re=P.opaque,Oe=P.transmissive,ke=P.transparent;d.setupLightsView(Y),Oe.length>0&&Nt(re,G,Y),W&&le.viewport(M.copy(W)),re.length>0&&ct(re,G,Y),Oe.length>0&&ct(Oe,G,Y),ke.length>0&&ct(ke,G,Y),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1);}
function Nt(P,G,Y){const W=ce.isWebGL2;j===null&&(j=new ft(1,1,{generateMipmaps:!0,type:N.convert(ss)!==null?ss:Zn,minFilter:ws,samples:W&&r===!0?4:0,})),g.getDrawingBufferSize(K),W?j.setSize(K.x,K.y):j.setSize(Kc(K.x),Kc(K.y));const re=g.getRenderTarget();g.setRenderTarget(j),g.clear();const Oe=g.toneMapping;(g.toneMapping=Bi),ct(P,G,Y),(g.toneMapping=Oe),ee.updateMultisampleRenderTarget(j),ee.updateRenderTargetMipmap(j),g.setRenderTarget(re);}
function ct(P,G,Y){const W=G.isScene===!0?G.overrideMaterial:null;for(let re=0,Oe=P.length;re<Oe;re++){const ke=P[re],He=ke.object,Ve=ke.geometry,rt=W===null?ke.material:W,Je=ke.group;He.layers.test(Y.layers)&&Vn(He,G,Y,Ve,rt,Je);}}
function Vn(P,G,Y,W,re,Oe){P.onBeforeRender(g,G,Y,W,re,Oe),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),re.onBeforeRender(g,G,Y,W,P,Oe),re.transparent===!0&&re.side===fs?((re.side=Lt),(re.needsUpdate=!0),g.renderBufferDirect(Y,G,W,re,P,Oe),(re.side=ds),(re.needsUpdate=!0),g.renderBufferDirect(Y,G,W,re,P,Oe),(re.side=fs)):g.renderBufferDirect(Y,G,W,re,P,Oe),P.onAfterRender(g,G,Y,W,re,Oe);}
function Gt(P,G,Y){G.isScene!==!0&&(G=Ee);const W=V.get(P),re=d.state.lights,Oe=d.state.shadowsArray,ke=re.state.version,He=Se.getParameters(P,re.state,Oe,G,Y),Ve=Se.getProgramCacheKey(He);let rt=W.programs;(W.environment=P.isMeshStandardMaterial?G.environment:null),(W.fog=G.fog),(W.envMap=(P.isMeshStandardMaterial?_e:se).get(P.envMap||W.environment)),rt===void 0&&(P.addEventListener("dispose",ge),(rt=new Map()),(W.programs=rt));let Je=rt.get(Ve);if(Je!==void 0){if(W.currentProgram===Je&&W.lightsStateVersion===ke)
return Kt(P,He),Je;}else
(He.uniforms=Se.getUniforms(P)),P.onBuild(Y,He,g),P.onBeforeCompile(He,g),(Je=Se.acquireProgram(He,Ve)),rt.set(Ve,Je),(W.uniforms=He.uniforms);const Qe=W.uniforms;((!P.isShaderMaterial&&!P.isRawShaderMaterial)||P.clipping===!0)&&(Qe.clippingPlanes=Q.uniform),Kt(P,He),(W.needsLights=ea(P)),(W.lightsStateVersion=ke),W.needsLights&&((Qe.ambientLightColor.value=re.state.ambient),(Qe.lightProbe.value=re.state.probe),(Qe.directionalLights.value=re.state.directional),(Qe.directionalLightShadows.value=re.state.directionalShadow),(Qe.spotLights.value=re.state.spot),(Qe.spotLightShadows.value=re.state.spotShadow),(Qe.rectAreaLights.value=re.state.rectArea),(Qe.ltc_1.value=re.state.rectAreaLTC1),(Qe.ltc_2.value=re.state.rectAreaLTC2),(Qe.pointLights.value=re.state.point),(Qe.pointLightShadows.value=re.state.pointShadow),(Qe.hemisphereLights.value=re.state.hemi),(Qe.directionalShadowMap.value=re.state.directionalShadowMap),(Qe.directionalShadowMatrix.value=re.state.directionalShadowMatrix),(Qe.spotShadowMap.value=re.state.spotShadowMap),(Qe.spotShadowMatrix.value=re.state.spotShadowMatrix),(Qe.pointShadowMap.value=re.state.pointShadowMap),(Qe.pointShadowMatrix.value=re.state.pointShadowMatrix));const yt=Je.getUniforms(),Sr=lr.seqWithValue(yt.seq,Qe);return(W.currentProgram=Je),(W.uniformsList=Sr),Je;}
function Kt(P,G){const Y=V.get(P);(Y.outputEncoding=G.outputEncoding),(Y.instancing=G.instancing),(Y.skinning=G.skinning),(Y.morphTargets=G.morphTargets),(Y.morphNormals=G.morphNormals),(Y.morphColors=G.morphColors),(Y.morphTargetsCount=G.morphTargetsCount),(Y.numClippingPlanes=G.numClippingPlanes),(Y.numIntersection=G.numClipIntersection),(Y.vertexAlphas=G.vertexAlphas),(Y.vertexTangents=G.vertexTangents),(Y.toneMapping=G.toneMapping);}
function zt(P,G,Y,W,re){G.isScene!==!0&&(G=Ee),ee.resetTextureUnits();const Oe=G.fog,ke=W.isMeshStandardMaterial?G.environment:null,He=w===null?g.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Kn,Ve=(W.isMeshStandardMaterial?_e:se).get(W.envMap||ke),rt=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Je=!!W.normalMap&&!!Y.attributes.tangent,Qe=!!Y.morphAttributes.position,yt=!!Y.morphAttributes.normal,Sr=!!Y.morphAttributes.color,Cs=W.toneMapped?g.toneMapping:Bi,Ls=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ti=Ls!==void 0?Ls.length:0,tt=V.get(W),Ps=d.state.lights;if(U===!0&&(B===!0||P!==x)){const Wn=P===x&&W.id===v;Q.setState(W,P,Wn);}
let It=!1;W.version===tt.__version?((tt.needsLights&&tt.lightsStateVersion!==Ps.state.version)||tt.outputEncoding!==He||(re.isInstancedMesh&&tt.instancing===!1)||(!re.isInstancedMesh&&tt.instancing===!0)||(re.isSkinnedMesh&&tt.skinning===!1)||(!re.isSkinnedMesh&&tt.skinning===!0)||tt.envMap!==Ve||(W.fog&&tt.fog!==Oe)||(tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Q.numPlanes||tt.numIntersection!==Q.numIntersection))||tt.vertexAlphas!==rt||tt.vertexTangents!==Je||tt.morphTargets!==Qe||tt.morphNormals!==yt||tt.morphColors!==Sr||tt.toneMapping!==Cs||(ce.isWebGL2===!0&&tt.morphTargetsCount!==ti))&&(It=!0):((It=!0),(tt.__version=W.version));let ni=tt.currentProgram;It===!0&&(ni=Gt(W,G,re));let Gi=!1,ta=!1,Ru=!1;const Qt=ni.getUniforms(),na=tt.uniforms;if((le.useProgram(ni.program)&&((Gi=!0),(ta=!0),(Ru=!0)),W.id!==v&&((v=W.id),(ta=!0)),Gi||x!==P)){if((Qt.setValue(q,"projectionMatrix",P.projectionMatrix),ce.logarithmicDepthBuffer&&Qt.setValue(q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),x!==P&&((x=P),(ta=!0),(Ru=!0)),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap)){const Wn=Qt.map.cameraPosition;Wn!==void 0&&Wn.setValue(q,ue.setFromMatrixPosition(P.matrixWorld));}
(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Qt.setValue(q,"isOrthographic",P.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||re.isSkinnedMesh)&&Qt.setValue(q,"viewMatrix",P.matrixWorldInverse);}
if(re.isSkinnedMesh){Qt.setOptional(q,re,"bindMatrix"),Qt.setOptional(q,re,"bindMatrixInverse");const Wn=re.skeleton;Wn&&(ce.floatVertexTextures?(Wn.boneTexture===null&&Wn.computeBoneTexture(),Qt.setValue(q,"boneTexture",Wn.boneTexture,ee),Qt.setValue(q,"boneTextureSize",Wn.boneTextureSize)):Qt.setOptional(q,Wn,"boneMatrices"));}
const Du=Y.morphAttributes;return((Du.position!==void 0||Du.normal!==void 0||(Du.color!==void 0&&ce.isWebGL2===!0))&&Me.update(re,Y,W,ni),(ta||tt.receiveShadow!==re.receiveShadow)&&((tt.receiveShadow=re.receiveShadow),Qt.setValue(q,"receiveShadow",re.receiveShadow)),ta&&(Qt.setValue(q,"toneMappingExposure",g.toneMappingExposure),tt.needsLights&&jt(na,Ru),Oe&&W.fog&&Ue.refreshFogUniforms(na,Oe),Ue.refreshMaterialUniforms(na,W,b,I,j),lr.upload(q,tt.uniformsList,na,ee)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(lr.upload(q,tt.uniformsList,na,ee),(W.uniformsNeedUpdate=!1)),W.isSpriteMaterial&&Qt.setValue(q,"center",re.center),Qt.setValue(q,"modelViewMatrix",re.modelViewMatrix),Qt.setValue(q,"normalMatrix",re.normalMatrix),Qt.setValue(q,"modelMatrix",re.matrixWorld),ni);}
function jt(P,G){(P.ambientLightColor.needsUpdate=G),(P.lightProbe.needsUpdate=G),(P.directionalLights.needsUpdate=G),(P.directionalLightShadows.needsUpdate=G),(P.pointLights.needsUpdate=G),(P.pointLightShadows.needsUpdate=G),(P.spotLights.needsUpdate=G),(P.spotLightShadows.needsUpdate=G),(P.rectAreaLights.needsUpdate=G),(P.hemisphereLights.needsUpdate=G);}
function ea(P){return(P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||(P.isShaderMaterial&&P.lights===!0));}
(this.getActiveCubeFace=function(){return _;}),(this.getActiveMipmapLevel=function(){return m;}),(this.getRenderTarget=function(){return w;}),(this.setRenderTargetTextures=function(P,G,Y){(V.get(P.texture).__webglTexture=G),(V.get(P.depthTexture).__webglTexture=Y);const W=V.get(P);(W.__hasExternalTextures=!0),W.__hasExternalTextures&&((W.__autoAllocateDepthBuffer=Y===void 0),W.__autoAllocateDepthBuffer||(fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),(W.__useRenderToTexture=!1))));}),(this.setRenderTargetFramebuffer=function(P,G){const Y=V.get(P);(Y.__webglFramebuffer=G),(Y.__useDefaultFramebuffer=G===void 0);}),(this.setRenderTarget=function(P,G=0,Y=0){(w=P),(_=G),(m=Y);let W=!0;if(P){const Ve=V.get(P);Ve.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),(W=!1)):Ve.__webglFramebuffer===void 0?ee.setupRenderTarget(P):Ve.__hasExternalTextures&&ee.rebindTextures(P,V.get(P.texture).__webglTexture,V.get(P.depthTexture).__webglTexture);}
let re=null,Oe=!1,ke=!1;if(P){const Ve=P.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture)&&(ke=!0);const rt=V.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?((re=rt[G]),(Oe=!0)):ce.isWebGL2&&P.samples>0&&ee.useMultisampledRTT(P)===!1?(re=V.get(P).__webglMultisampledFramebuffer):(re=rt),M.copy(P.viewport),S.copy(P.scissor),(T=P.scissorTest);}else
M.copy(O).multiplyScalar(b).floor(),S.copy(H).multiplyScalar(b).floor(),(T=A);if((le.bindFramebuffer(36160,re)&&ce.drawBuffers&&W&&le.drawBuffers(P,re),le.viewport(M),le.scissor(S),le.setScissorTest(T),Oe)){const Ve=V.get(P.texture);q.framebufferTexture2D(36160,36064,34069+G,Ve.__webglTexture,Y);}else if(ke){const Ve=V.get(P.texture),rt=G||0;q.framebufferTextureLayer(36160,36064,Ve.__webglTexture,Y||0,rt);}
v=-1;}),(this.readRenderTargetPixels=function(P,G,Y,W,re,Oe,ke){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return;}
let He=V.get(P).__webglFramebuffer;if((P.isWebGLCubeRenderTarget&&ke!==void 0&&(He=He[ke]),He)){le.bindFramebuffer(36160,He);try{const Ve=P.texture,rt=Ve.format,Je=Ve.type;if(rt!==Xt&&N.convert(rt)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return;}
const Qe=Je===ss&&(fe.has("EXT_color_buffer_half_float")||(ce.isWebGL2&&fe.has("EXT_color_buffer_float")));if(Je!==Zn&&N.convert(Je)!==q.getParameter(35738)&&!(Je===Ri&&(ce.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return;}
q.checkFramebufferStatus(36160)===36053?G>=0&&G<=P.width-W&&Y>=0&&Y<=P.height-re&&q.readPixels(G,Y,W,re,N.convert(rt),N.convert(Je),Oe):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");}finally{const Ve=w!==null?V.get(w).__webglFramebuffer:null;le.bindFramebuffer(36160,Ve);}}}),(this.copyFramebufferToTexture=function(P,G,Y=0){if(G.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return;}
const W=Math.pow(2,-Y),re=Math.floor(G.image.width*W),Oe=Math.floor(G.image.height*W);ee.setTexture2D(G,0),q.copyTexSubImage2D(3553,Y,0,0,P.x,P.y,re,Oe),le.unbindTexture();}),(this.copyTextureToTexture=function(P,G,Y,W=0){const re=G.image.width,Oe=G.image.height,ke=N.convert(Y.format),He=N.convert(Y.type);ee.setTexture2D(Y,0),q.pixelStorei(37440,Y.flipY),q.pixelStorei(37441,Y.premultiplyAlpha),q.pixelStorei(3317,Y.unpackAlignment),G.isDataTexture?q.texSubImage2D(3553,W,P.x,P.y,re,Oe,ke,He,G.image.data):G.isCompressedTexture?q.compressedTexSubImage2D(3553,W,P.x,P.y,G.mipmaps[0].width,G.mipmaps[0].height,ke,G.mipmaps[0].data):q.texSubImage2D(3553,W,P.x,P.y,ke,He,G.image),W===0&&Y.generateMipmaps&&q.generateMipmap(3553),le.unbindTexture();}),(this.copyTextureToTexture3D=function(P,G,Y,W,re=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return;}
const Oe=P.max.x-P.min.x+1,ke=P.max.y-P.min.y+1,He=P.max.z-P.min.z+1,Ve=N.convert(W.format),rt=N.convert(W.type);let Je;if(W.isData3DTexture)ee.setTexture3D(W,0),(Je=32879);else if(W.isDataArrayTexture)ee.setTexture2DArray(W,0),(Je=35866);else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return;}
q.pixelStorei(37440,W.flipY),q.pixelStorei(37441,W.premultiplyAlpha),q.pixelStorei(3317,W.unpackAlignment);const Qe=q.getParameter(3314),yt=q.getParameter(32878),Sr=q.getParameter(3316),Cs=q.getParameter(3315),Ls=q.getParameter(32877),ti=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;q.pixelStorei(3314,ti.width),q.pixelStorei(32878,ti.height),q.pixelStorei(3316,P.min.x),q.pixelStorei(3315,P.min.y),q.pixelStorei(32877,P.min.z),Y.isDataTexture||Y.isData3DTexture?q.texSubImage3D(Je,re,G.x,G.y,G.z,Oe,ke,He,Ve,rt,ti.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Je,re,G.x,G.y,G.z,Oe,ke,He,Ve,ti.data)):q.texSubImage3D(Je,re,G.x,G.y,G.z,Oe,ke,He,Ve,rt,ti),q.pixelStorei(3314,Qe),q.pixelStorei(32878,yt),q.pixelStorei(3316,Sr),q.pixelStorei(3315,Cs),q.pixelStorei(32877,Ls),re===0&&W.generateMipmaps&&q.generateMipmap(Je),le.unbindTexture();}),(this.initTexture=function(P){ee.setTexture2D(P,0),le.unbindTexture();}),(this.resetState=function(){(_=0),(m=0),(w=null),le.reset(),oe.reset();}),typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}
st.prototype.isWebGLRenderer=!0;class wy extends st{}
wy.prototype.isWebGL1Renderer=!0;class al{constructor(e,t=25e-5){(this.name=""),(this.color=new ve(e)),(this.density=t);}
clone(){return new al(this.color,this.density);}
toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density,};}}
al.prototype.isFogExp2=!0;class ll{constructor(e,t=1,n=1e3){(this.name=""),(this.color=new ve(e)),(this.near=t),(this.far=n);}
clone(){return new ll(this.color,this.near,this.far);}
toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far,};}}
ll.prototype.isFog=!0;class Bo extends Ye{constructor(){super(),(this.type="Scene"),(this.background=null),(this.environment=null),(this.fog=null),(this.overrideMaterial=null),(this.autoUpdate=!0),typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}
copy(e,t){return(super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),(this.autoUpdate=e.autoUpdate),(this.matrixAutoUpdate=e.matrixAutoUpdate),this);}
toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t;}}
Bo.prototype.isScene=!0;class Ss{constructor(e,t){(this.array=e),(this.stride=t),(this.count=e!==void 0?e.length/t:0),(this.usage=Po),(this.updateRange={offset:0,count:-1}),(this.version=0),(this.uuid=Pn());}
onUploadCallback(){}
set needsUpdate(e){e===!0&&this.version++;}
setUsage(e){return(this.usage=e),this;}
copy(e){return((this.array=new e.array.constructor(e.array)),(this.count=e.count),(this.stride=e.stride),(this.usage=e.usage),this);}
copyAt(e,t,n){(e*=this.stride),(n*=t.stride);for(let i=0,r=this.stride;i<r;i++)
this.array[e+i]=t.array[n+i];return this;}
set(e,t=0){return this.array.set(e,t),this;}
clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n;}
onUpload(e){return(this.onUploadCallback=e),this;}
toJSON(e){return(e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride,});}}
Ss.prototype.isInterleavedBuffer=!0;const Tt=new C();class mr{constructor(e,t,n,i=!1){(this.name=""),(this.data=e),(this.itemSize=t),(this.offset=n),(this.normalized=i===!0);}
get count(){return this.data.count;}
get array(){return this.data.array;}
set needsUpdate(e){this.data.needsUpdate=e;}
applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)
(Tt.x=this.getX(t)),(Tt.y=this.getY(t)),(Tt.z=this.getZ(t)),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this;}
applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)
(Tt.x=this.getX(t)),(Tt.y=this.getY(t)),(Tt.z=this.getZ(t)),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this;}
transformDirection(e){for(let t=0,n=this.count;t<n;t++)
(Tt.x=this.getX(t)),(Tt.y=this.getY(t)),(Tt.z=this.getZ(t)),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this;}
setX(e,t){return(this.data.array[e*this.data.stride+this.offset]=t),this;}
setY(e,t){return(this.data.array[e*this.data.stride+this.offset+1]=t),this;}
setZ(e,t){return(this.data.array[e*this.data.stride+this.offset+2]=t),this;}
setW(e,t){return(this.data.array[e*this.data.stride+this.offset+3]=t),this;}
getX(e){return this.data.array[e*this.data.stride+this.offset];}
getY(e){return this.data.array[e*this.data.stride+this.offset+1];}
getZ(e){return this.data.array[e*this.data.stride+this.offset+2];}
getW(e){return this.data.array[e*this.data.stride+this.offset+3];}
setXY(e,t,n){return((e=e*this.data.stride+this.offset),(this.data.array[e+0]=t),(this.data.array[e+1]=n),this);}
setXYZ(e,t,n,i){return((e=e*this.data.stride+this.offset),(this.data.array[e+0]=t),(this.data.array[e+1]=n),(this.data.array[e+2]=i),this);}
setXYZW(e,t,n,i,r){return((e=e*this.data.stride+this.offset),(this.data.array[e+0]=t),(this.data.array[e+1]=n),(this.data.array[e+2]=i),(this.data.array[e+3]=r),this);}
clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r]);}
return new Xe(new this.array.constructor(t),this.itemSize,this.normalized);}else
return(e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized));}
toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r]);}
return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized,};}else
return(e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized,});}}
mr.prototype.isInterleavedBufferAttribute=!0;class vu extends St{constructor(e){super(),(this.type="SpriteMaterial"),(this.color=new ve(16777215)),(this.map=null),(this.alphaMap=null),(this.rotation=0),(this.sizeAttenuation=!0),(this.transparent=!0),this.setValues(e);}
copy(e){return(super.copy(e),this.color.copy(e.color),(this.map=e.map),(this.alphaMap=e.alphaMap),(this.rotation=e.rotation),(this.sizeAttenuation=e.sizeAttenuation),this);}}
vu.prototype.isSpriteMaterial=!0;let Xs;const aa=new C(),$s=new C(),Ys=new C(),js=new J(),la=new J(),by=new Pe(),Vl=new C(),ca=new C(),Wl=new C(),Am=new J(),Sh=new J(),Cm=new J();class wu extends Ye{constructor(e){if((super(),(this.type="Sprite"),Xs===void 0)){Xs=new Be();const t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1,]),n=new Ss(t,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new mr(n,3,0,!1)),Xs.setAttribute("uv",new mr(n,2,3,!1));}
(this.geometry=Xs),(this.material=e!==void 0?e:new vu()),(this.center=new J(0.5,0.5));}
raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),by.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-Ys.z);const n=this.material.rotation;let i,r;n!==0&&((r=Math.cos(n)),(i=Math.sin(n)));const o=this.center;ql(Vl.set(-0.5,-0.5,0),Ys,o,$s,i,r),ql(ca.set(0.5,-0.5,0),Ys,o,$s,i,r),ql(Wl.set(0.5,0.5,0),Ys,o,$s,i,r),Am.set(0,0),Sh.set(1,0),Cm.set(1,1);let a=e.ray.intersectTriangle(Vl,ca,Wl,!1,aa);if(a===null&&(ql(ca.set(-0.5,0.5,0),Ys,o,$s,i,r),Sh.set(0,1),(a=e.ray.intersectTriangle(Vl,Wl,ca,!1,aa)),a===null))
return;const l=e.ray.origin.distanceTo(aa);l<e.near||l>e.far||t.push({distance:l,point:aa.clone(),uv:Rt.getUV(aa,Vl,ca,Wl,Am,Sh,Cm,new J()),face:null,object:this,});}
copy(e){return(super.copy(e),e.center!==void 0&&this.center.copy(e.center),(this.material=e.material),this);}}
wu.prototype.isSprite=!0;function ql(s,e,t,n,i,r){js.subVectors(s,t).addScalar(0.5).multiply(n),i!==void 0?((la.x=r*js.x-i*js.y),(la.y=i*js.x+r*js.y)):la.copy(js),s.copy(e),(s.x+=la.x),(s.y+=la.y),s.applyMatrix4(by);}
const Xl=new C(),Lm=new C();class My extends Ye{constructor(){super(),(this._currentLevel=0),(this.type="LOD"),Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0},}),(this.autoUpdate=!0);}
copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance);}
return(this.autoUpdate=e.autoUpdate),this;}
addLevel(e,t=0){t=Math.abs(t);const n=this.levels;let i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this;}
getCurrentLevel(){return this._currentLevel;}
getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object;}
return null;}
raycast(e,t){if(this.levels.length>0){Xl.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Xl);this.getObjectForDistance(i).raycast(e,t);}}
update(e){const t=this.levels;if(t.length>1){Xl.setFromMatrixPosition(e.matrixWorld),Lm.setFromMatrixPosition(this.matrixWorld);const n=Xl.distanceTo(Lm)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r&&n>=t[i].distance;i++)
(t[i-1].object.visible=!1),(t[i].object.visible=!0);for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1;}}
toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),(t.object.levels=[]);const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance});}
return t;}}
const Pm=new C(),Rm=new nt(),Dm=new nt(),YT=new C(),Im=new Pe();class bu extends ht{constructor(e,t){super(e,t),(this.type="SkinnedMesh"),(this.bindMode="attached"),(this.bindMatrix=new Pe()),(this.bindMatrixInverse=new Pe());}
copy(e){return(super.copy(e),(this.bindMode=e.bindMode),this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),(this.skeleton=e.skeleton),this);}
bind(e,t){(this.skeleton=e),t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),(t=this.matrixWorld)),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert();}
pose(){this.skeleton.pose();}
normalizeSkinWeights(){const e=new nt(),t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){(e.x=t.getX(n)),(e.y=t.getY(n)),(e.z=t.getZ(n)),(e.w=t.getW(n));const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w);}}
updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode);}
boneTransform(e,t){const n=this.skeleton,i=this.geometry;Rm.fromBufferAttribute(i.attributes.skinIndex,e),Dm.fromBufferAttribute(i.attributes.skinWeight,e),Pm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Dm.getComponent(r);if(o!==0){const a=Rm.getComponent(r);Im.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(YT.copy(Pm).applyMatrix4(Im),o);}}
return t.applyMatrix4(this.bindMatrixInverse);}}
bu.prototype.isSkinnedMesh=!0;class Mu extends Ye{constructor(){super(),(this.type="Bone");}}
Mu.prototype.isBone=!0;class as extends Dt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ot,u=Ot,h,d){super(null,o,a,l,c,u,i,r,h,d),(this.image={data:e,width:t,height:n}),(this.generateMipmaps=!1),(this.flipY=!1),(this.unpackAlignment=1);}}
as.prototype.isDataTexture=!0;const Bm=new Pe(),jT=new Pe();class Su{constructor(e=[],t=[]){(this.uuid=Pn()),(this.bones=e.slice(0)),(this.boneInverses=t),(this.boneMatrices=null),(this.boneTexture=null),(this.boneTextureSize=0),(this.frame=-1),this.init();}
init(){const e=this.bones,t=this.boneInverses;if(((this.boneMatrices=new Float32Array(e.length*16)),t.length===0))
this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),(this.boneInverses=[]);for(let n=0,i=this.bones.length;n<i;n++)
this.boneInverses.push(new Pe());}}
calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe();this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n);}}
pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert();}
for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale));}}
update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:jT;Bm.multiplyMatrices(a,t[r]),Bm.toArray(n,r*16);}
i!==null&&(i.needsUpdate=!0);}
clone(){return new Su(this.bones,this.boneInverses);}
computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);(e=K_(e)),(e=Math.max(e,4));const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new as(t,e,e,Xt,Ri);return((n.needsUpdate=!0),(this.boneMatrices=t),(this.boneTexture=n),(this.boneTextureSize=e),this);}
getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i;}}
dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),(this.boneTexture=null));}
fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),(o=new Mu())),this.bones.push(o),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]));}
return this.init(),this;}
toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON",},bones:[],boneInverses:[],};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray());}
return e;}}
class ms extends Xe{constructor(e,t,n,i=1){typeof n=="number"&&((i=n),(n=!1),console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),(this.meshPerAttribute=i);}
copy(e){return super.copy(e),(this.meshPerAttribute=e.meshPerAttribute),this;}
toJSON(){const e=super.toJSON();return((e.meshPerAttribute=this.meshPerAttribute),(e.isInstancedBufferAttribute=!0),e);}}
ms.prototype.isInstancedBufferAttribute=!0;const Fm=new Pe(),Om=new Pe(),$l=[],ua=new ht();class Af extends ht{constructor(e,t,n){super(e,t),(this.instanceMatrix=new ms(new Float32Array(n*16),16)),(this.instanceColor=null),(this.count=n),(this.frustumCulled=!1);}
copy(e){return(super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),(this.count=e.count),this);}
getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3);}
getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16);}
raycast(e,t){const n=this.matrixWorld,i=this.count;if(((ua.geometry=this.geometry),(ua.material=this.material),ua.material!==void 0))
for(let r=0;r<i;r++){this.getMatrixAt(r,Fm),Om.multiplyMatrices(n,Fm),(ua.matrixWorld=Om),ua.raycast(e,$l);for(let o=0,a=$l.length;o<a;o++){const l=$l[o];(l.instanceId=r),(l.object=this),t.push(l);}
$l.length=0;}}
setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ms(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3);}
setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16);}
updateMorphTargets(){}
dispose(){this.dispatchEvent({type:"dispose"});}}
Af.prototype.isInstancedMesh=!0;class Yt extends St{constructor(e){super(),(this.type="LineBasicMaterial"),(this.color=new ve(16777215)),(this.linewidth=1),(this.linecap="round"),(this.linejoin="round"),this.setValues(e);}
copy(e){return(super.copy(e),this.color.copy(e.color),(this.linewidth=e.linewidth),(this.linecap=e.linecap),(this.linejoin=e.linejoin),this);}}
Yt.prototype.isLineBasicMaterial=!0;const km=new C(),Nm=new C(),zm=new Pe(),Th=new br(),Yl=new wr();class zi extends Ye{constructor(e=new Be(),t=new Yt()){super(),(this.type="Line"),(this.geometry=e),(this.material=t),this.updateMorphTargets();}
copy(e){return(super.copy(e),(this.material=e.material),(this.geometry=e.geometry),this);}
computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)
if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)
km.fromBufferAttribute(t,i-1),Nm.fromBufferAttribute(t,i),(n[i]=n[i-1]),(n[i]+=km.distanceTo(Nm));e.setAttribute("lineDistance",new Ce(n,1));}else
console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else
e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this;}
raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if((n.boundingSphere===null&&n.computeBoundingSphere(),Yl.copy(n.boundingSphere),Yl.applyMatrix4(i),(Yl.radius+=r),e.ray.intersectsSphere(Yl)===!1))
return;zm.copy(i).invert(),Th.copy(e.ray).applyMatrix4(zm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C(),u=new C(),h=new C(),d=new C(),f=this.isLineSegments?2:1;if(n.isBufferGeometry){const p=n.index,y=n.attributes.position;if(p!==null){const _=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let w=_,v=m-1;w<v;w+=f){const x=p.getX(w),M=p.getX(w+1);if((c.fromBufferAttribute(y,x),u.fromBufferAttribute(y,M),Th.distanceSqToSegment(c,u,d,h)>l))
continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this,});}}else{const _=Math.max(0,o.start),m=Math.min(y.count,o.start+o.count);for(let w=_,v=m-1;w<v;w+=f){if((c.fromBufferAttribute(y,w),u.fromBufferAttribute(y,w+1),Th.distanceSqToSegment(c,u,d,h)>l))
continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this,});}}}else
n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");}
updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){(this.morphTargetInfluences=[]),(this.morphTargetDictionary={});for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),(this.morphTargetDictionary[a]=r);}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");}}}
zi.prototype.isLine=!0;const Um=new C(),Hm=new C();class Mn extends zi{constructor(e,t){super(e,t),(this.type="LineSegments");}
computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)
if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)
Um.fromBufferAttribute(t,i),Hm.fromBufferAttribute(t,i+1),(n[i]=i===0?0:n[i-1]),(n[i+1]=n[i]+Um.distanceTo(Hm));e.setAttribute("lineDistance",new Ce(n,1));}else
console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else
e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this;}}
Mn.prototype.isLineSegments=!0;class Cf extends zi{constructor(e,t){super(e,t),(this.type="LineLoop");}}
Cf.prototype.isLineLoop=!0;class Ts extends St{constructor(e){super(),(this.type="PointsMaterial"),(this.color=new ve(16777215)),(this.map=null),(this.alphaMap=null),(this.size=1),(this.sizeAttenuation=!0),this.setValues(e);}
copy(e){return(super.copy(e),this.color.copy(e.color),(this.map=e.map),(this.alphaMap=e.alphaMap),(this.size=e.size),(this.sizeAttenuation=e.sizeAttenuation),this);}}
Ts.prototype.isPointsMaterial=!0;const Gm=new Pe(),Bd=new br(),jl=new wr(),Jl=new C();class cl extends Ye{constructor(e=new Be(),t=new Ts()){super(),(this.type="Points"),(this.geometry=e),(this.material=t),this.updateMorphTargets();}
copy(e){return(super.copy(e),(this.material=e.material),(this.geometry=e.geometry),this);}
raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if((n.boundingSphere===null&&n.computeBoundingSphere(),jl.copy(n.boundingSphere),jl.applyMatrix4(i),(jl.radius+=r),e.ray.intersectsSphere(jl)===!1))
return;Gm.copy(i).invert(),Bd.copy(e.ray).applyMatrix4(Gm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,g=f;p<g;p++){const y=c.getX(p);Jl.fromBufferAttribute(h,y),Vm(Jl,y,l,i,e,t,this);}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,g=f;p<g;p++)
Jl.fromBufferAttribute(h,p),Vm(Jl,p,l,i,e,t,this);}}else
console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");}
updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){(this.morphTargetInfluences=[]),(this.morphTargetDictionary={});for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),(this.morphTargetDictionary[a]=r);}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");}}}
cl.prototype.isPoints=!0;function Vm(s,e,t,n,i,r,o){const a=Bd.distanceSqToPoint(s);if(a<t){const l=new C();Bd.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o,});}}
class Sy extends Dt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),(this.minFilter=o!==void 0?o:Ke),(this.magFilter=r!==void 0?r:Ke),(this.generateMipmaps=!1);const u=this;function h(){(u.needsUpdate=!0),e.requestVideoFrameCallback(h);}
"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h);}
clone(){return new this.constructor(this.image).copy(this);}
update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0);}}
Sy.prototype.isVideoTexture=!0;class Ty extends Dt{constructor(e,t,n){super({width:e,height:t}),(this.format=n),(this.magFilter=Ot),(this.minFilter=Ot),(this.generateMipmaps=!1),(this.needsUpdate=!0);}}
Ty.prototype.isFramebufferTexture=!0;class Lf extends Dt{constructor(e,t,n,i,r,o,a,l,c,u,h,d){super(null,o,a,l,c,u,i,r,h,d),(this.image={width:t,height:n}),(this.mipmaps=e),(this.flipY=!1),(this.generateMipmaps=!1);}}
Lf.prototype.isCompressedTexture=!0;class Ey extends Dt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),(this.needsUpdate=!0);}}
Ey.prototype.isCanvasTexture=!0;class Fo extends Be{constructor(e=1,t=8,n=0,i=Math.PI*2){super(),(this.type="CircleGeometry"),(this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i,}),(t=Math.max(3,t));const r=[],o=[],a=[],l=[],c=new C(),u=new J();o.push(0,0,0),a.push(0,0,1),l.push(0.5,0.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+(h/t)*i;(c.x=e*Math.cos(f)),(c.y=e*Math.sin(f)),o.push(c.x,c.y,c.z),a.push(0,0,1),(u.x=(o[d]/e+1)/2),(u.y=(o[d+1]/e+1)/2),l.push(u.x,u.y);}
for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(a,3)),this.setAttribute("uv",new Ce(l,2));}
static fromJSON(e){return new Fo(e.radius,e.segments,e.thetaStart,e.thetaLength);}}
class gr extends Be{constructor(e=1,t=1,n=1,i=8,r=1,o=!1,a=0,l=Math.PI*2){super(),(this.type="CylinderGeometry"),(this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l,});const c=this;(i=Math.floor(i)),(r=Math.floor(r));const u=[],h=[],d=[],f=[];let p=0;const g=[],y=n/2;let _=0;m(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Ce(h,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function m(){const v=new C(),x=new C();let M=0;const S=(t-e)/n;for(let T=0;T<=r;T++){const D=[],I=T/r,b=I*(t-e)+e;for(let R=0;R<=i;R++){const F=R/i,O=F*l+a,H=Math.sin(O),A=Math.cos(O);(x.x=b*H),(x.y=-I*n+y),(x.z=b*A),h.push(x.x,x.y,x.z),v.set(H,S,A).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-I),D.push(p++);}
g.push(D);}
for(let T=0;T<i;T++)
for(let D=0;D<r;D++){const I=g[D][T],b=g[D+1][T],R=g[D+1][T+1],F=g[D][T+1];u.push(I,b,F),u.push(b,R,F),(M+=6);}
c.addGroup(_,M,0),(_+=M);}
function w(v){const x=p,M=new J(),S=new C();let T=0;const D=v===!0?e:t,I=v===!0?1:-1;for(let R=1;R<=i;R++)
h.push(0,y*I,0),d.push(0,I,0),f.push(0.5,0.5),p++;const b=p;for(let R=0;R<=i;R++){const O=(R/i)*l+a,H=Math.cos(O),A=Math.sin(O);(S.x=D*A),(S.y=y*I),(S.z=D*H),h.push(S.x,S.y,S.z),d.push(0,I,0),(M.x=H*0.5+0.5),(M.y=A*0.5*I+0.5),f.push(M.x,M.y),p++;}
for(let R=0;R<i;R++){const F=x+R,O=b+R;v===!0?u.push(O,O+1,F):u.push(O+1,O,F),(T+=3);}
c.addGroup(_,T,v===!0?1:2),(_+=T);}}
static fromJSON(e){return new gr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength);}}
class Oo extends gr{constructor(e=1,t=1,n=8,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),(this.type="ConeGeometry"),(this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a,});}
static fromJSON(e){return new Oo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength);}}
class pi extends Be{constructor(e=[],t=[],n=1,i=0){super(),(this.type="PolyhedronGeometry"),(this.parameters={vertices:e,indices:t,radius:n,detail:i});const r=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(r.slice(),3)),this.setAttribute("uv",new Ce(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const w=new C(),v=new C(),x=new C();for(let M=0;M<t.length;M+=3)
f(t[M+0],w),f(t[M+1],v),f(t[M+2],x),l(w,v,x,m);}
function l(m,w,v,x){const M=x+1,S=[];for(let T=0;T<=M;T++){S[T]=[];const D=m.clone().lerp(v,T/M),I=w.clone().lerp(v,T/M),b=M-T;for(let R=0;R<=b;R++)
R===0&&T===M?(S[T][R]=D):(S[T][R]=D.clone().lerp(I,R/b));}
for(let T=0;T<M;T++)
for(let D=0;D<2*(M-T)-1;D++){const I=Math.floor(D/2);D%2===0?(d(S[T][I+1]),d(S[T+1][I]),d(S[T][I])):(d(S[T][I+1]),d(S[T+1][I+1]),d(S[T+1][I]));}}
function c(m){const w=new C();for(let v=0;v<r.length;v+=3)
(w.x=r[v+0]),(w.y=r[v+1]),(w.z=r[v+2]),w.normalize().multiplyScalar(m),(r[v+0]=w.x),(r[v+1]=w.y),(r[v+2]=w.z);}
function u(){const m=new C();for(let w=0;w<r.length;w+=3){(m.x=r[w+0]),(m.y=r[w+1]),(m.z=r[w+2]);const v=y(m)/2/Math.PI+0.5,x=_(m)/Math.PI+0.5;o.push(v,1-x);}
p(),h();}
function h(){for(let m=0;m<o.length;m+=6){const w=o[m+0],v=o[m+2],x=o[m+4],M=Math.max(w,v,x),S=Math.min(w,v,x);M>0.9&&S<0.1&&(w<0.2&&(o[m+0]+=1),v<0.2&&(o[m+2]+=1),x<0.2&&(o[m+4]+=1));}}
function d(m){r.push(m.x,m.y,m.z);}
function f(m,w){const v=m*3;(w.x=e[v+0]),(w.y=e[v+1]),(w.z=e[v+2]);}
function p(){const m=new C(),w=new C(),v=new C(),x=new C(),M=new J(),S=new J(),T=new J();for(let D=0,I=0;D<r.length;D+=9,I+=6){m.set(r[D+0],r[D+1],r[D+2]),w.set(r[D+3],r[D+4],r[D+5]),v.set(r[D+6],r[D+7],r[D+8]),M.set(o[I+0],o[I+1]),S.set(o[I+2],o[I+3]),T.set(o[I+4],o[I+5]),x.copy(m).add(w).add(v).divideScalar(3);const b=y(x);g(M,I+0,m,b),g(S,I+2,w,b),g(T,I+4,v,b);}}
function g(m,w,v,x){x<0&&m.x===1&&(o[w]=m.x-1),v.x===0&&v.z===0&&(o[w]=x/2/Math.PI+0.5);}
function y(m){return Math.atan2(m.z,-m.x);}
function _(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z));}}
static fromJSON(e){return new pi(e.vertices,e.indices,e.radius,e.details);}}
class ko extends pi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i,],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9,];super(r,o,e,t),(this.type="DodecahedronGeometry"),(this.parameters={radius:e,detail:t});}
static fromJSON(e){return new ko(e.radius,e.detail);}}
const Zl=new C(),Kl=new C(),Eh=new C(),Ql=new Rt();class Pf extends Be{constructor(e=null,t=1){if((super(),(this.type="EdgesGeometry"),(this.parameters={geometry:e,thresholdAngle:t}),e!==null)){const i=Math.pow(10,4),r=Math.cos(os*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?((c[0]=o.getX(p)),(c[1]=o.getX(p+1)),(c[2]=o.getX(p+2))):((c[0]=p),(c[1]=p+1),(c[2]=p+2));const{a:g,b:y,c:_}=Ql;if((g.fromBufferAttribute(a,c[0]),y.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),Ql.getNormal(Eh),(h[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`),(h[1]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`),(h[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`),!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0])))
for(let m=0;m<3;m++){const w=(m+1)%3,v=h[m],x=h[w],M=Ql[u[m]],S=Ql[u[w]],T=`${v}_${x}`,D=`${x}_${v}`;D in d&&d[D]?(Eh.dot(d[D].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(S.x,S.y,S.z)),(d[D]=null)):T in d||(d[T]={index0:c[m],index1:c[w],normal:Eh.clone()});}}
for(const p in d)
if(d[p]){const{index0:g,index1:y}=d[p];Zl.fromBufferAttribute(a,g),Kl.fromBufferAttribute(a,y),f.push(Zl.x,Zl.y,Zl.z),f.push(Kl.x,Kl.y,Kl.z);}
this.setAttribute("position",new Ce(f,3));}}}
class Dn{constructor(){(this.type="Curve"),(this.arcLengthDivisions=200);}
getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null;}
getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t);}
getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t;}
getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t;}
getLength(){const e=this.getLengths();return e[e.length-1];}
getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)
return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)
(n=this.getPoint(o/e)),(r+=n.distanceTo(i)),t.push(r),(i=n);return(this.cacheArcLengths=t),t;}
updateArcLengths(){(this.needsUpdate=!0),this.getLengths();}
getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?(o=t):(o=e*n[r-1]);let a=0,l=r-1,c;for(;a<=l;)
if(((i=Math.floor(a+(l-a)/2)),(c=n[i]-o),c<0))a=i+1;else if(c>0)l=i-1;else{l=i;break;}
if(((i=l),n[i]===o))return i/(r-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1);}
getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new J():new C());return l.copy(a).sub(o).normalize(),l;}
getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t);}
computeFrenetFrames(e,t){const n=new C(),i=[],r=[],o=[],a=new C(),l=new Pe();for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new C());}
(r[0]=new C()),(o[0]=new C());let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&((c=u),n.set(1,0,0)),h<=c&&((c=h),n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(((r[f]=r[f-1].clone()),(o[f]=o[f-1].clone()),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON)){a.normalize();const p=Math.acos(Zt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p));}
o[f].crossVectors(i[f],r[f]);}
if(t===!0){let f=Math.acos(Zt(r[0].dot(r[e]),-1,1));(f/=e),i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)
r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p]);}
return{tangents:i,normals:r,binormals:o};}
clone(){return new this.constructor().copy(this);}
copy(e){return(this.arcLengthDivisions=e.arcLengthDivisions),this;}
toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"},};return((e.arcLengthDivisions=this.arcLengthDivisions),(e.type=this.type),e);}
fromJSON(e){return(this.arcLengthDivisions=e.arcLengthDivisions),this;}}
class ul extends Dn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),(this.type="EllipseCurve"),(this.aX=e),(this.aY=t),(this.xRadius=n),(this.yRadius=i),(this.aStartAngle=r),(this.aEndAngle=o),(this.aClockwise=a),(this.aRotation=l);}
getPoint(e,t){const n=t||new J(),i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?(r=0):(r=i)),this.aClockwise===!0&&!o&&(r===i?(r=-i):(r=r-i));const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;(l=d*u-f*h+this.aX),(c=d*h+f*u+this.aY);}
return n.set(l,c);}
copy(e){return(super.copy(e),(this.aX=e.aX),(this.aY=e.aY),(this.xRadius=e.xRadius),(this.yRadius=e.yRadius),(this.aStartAngle=e.aStartAngle),(this.aEndAngle=e.aEndAngle),(this.aClockwise=e.aClockwise),(this.aRotation=e.aRotation),this);}
toJSON(){const e=super.toJSON();return((e.aX=this.aX),(e.aY=this.aY),(e.xRadius=this.xRadius),(e.yRadius=this.yRadius),(e.aStartAngle=this.aStartAngle),(e.aEndAngle=this.aEndAngle),(e.aClockwise=this.aClockwise),(e.aRotation=this.aRotation),e);}
fromJSON(e){return(super.fromJSON(e),(this.aX=e.aX),(this.aY=e.aY),(this.xRadius=e.xRadius),(this.yRadius=e.yRadius),(this.aStartAngle=e.aStartAngle),(this.aEndAngle=e.aEndAngle),(this.aClockwise=e.aClockwise),(this.aRotation=e.aRotation),this);}}
ul.prototype.isEllipseCurve=!0;class Rf extends ul{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),(this.type="ArcCurve");}}
Rf.prototype.isArcCurve=!0;function Df(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){(s=r),(e=a),(t=-3*r+3*o-2*a-l),(n=2*r-2*o+a+l);}
return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o));},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;(d*=u),(f*=u),i(o,a,d,f);},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a;},};}
const ec=new C(),Ah=new Df(),Ch=new Df(),Lh=new Df();class wo extends Dn{constructor(e=[],t=!1,n="centripetal",i=0.5){super(),(this.type="CatmullRomCurve3"),(this.points=e),(this.closed=t),(this.curveType=n),(this.tension=i);}
getPoint(e,t=new C()){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?(a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r):l===0&&a===r-1&&((a=r-2),(l=1));let c,u;this.closed||a>0?(c=i[(a-1)%r]):(ec.subVectors(i[0],i[1]).add(i[0]),(c=ec));const h=i[a%r],d=i[(a+1)%r];if((this.closed||a+2<r?(u=i[(a+2)%r]):(ec.subVectors(i[r-1],i[r-2]).add(i[r-1]),(u=ec)),this.curveType==="centripetal"||this.curveType==="chordal")){const f=this.curveType==="chordal"?0.5:0.25;let p=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),p<1e-4&&(p=g),y<1e-4&&(y=g),Ah.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,g,y),Ch.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,g,y),Lh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,g,y);}else
this.curveType==="catmullrom"&&(Ah.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ch.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Lh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Ah.calc(l),Ch.calc(l),Lh.calc(l)),n;}
copy(e){super.copy(e),(this.points=[]);for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone());}
return((this.closed=e.closed),(this.curveType=e.curveType),(this.tension=e.tension),this);}
toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray());}
return((e.closed=this.closed),(e.curveType=this.curveType),(e.tension=this.tension),e);}
fromJSON(e){super.fromJSON(e),(this.points=[]);for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i));}
return((this.closed=e.closed),(this.curveType=e.curveType),(this.tension=e.tension),this);}}
wo.prototype.isCatmullRomCurve3=!0;function Wm(s,e,t,n,i){const r=(n-e)*0.5,o=(i-t)*0.5,a=s*s,l=s*a;return((2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t);}
function JT(s,e){const t=1-s;return t*t*e;}
function ZT(s,e){return 2*(1-s)*s*e;}
function KT(s,e){return s*s*e;}
function Ma(s,e,t,n){return JT(s,e)+ZT(s,t)+KT(s,n);}
function QT(s,e){const t=1-s;return t*t*t*e;}
function eE(s,e){const t=1-s;return 3*t*t*s*e;}
function tE(s,e){return 3*(1-s)*s*s*e;}
function nE(s,e){return s*s*s*e;}
function Sa(s,e,t,n,i){return QT(s,e)+eE(s,t)+tE(s,n)+nE(s,i);}
class Tu extends Dn{constructor(e=new J(),t=new J(),n=new J(),i=new J()){super(),(this.type="CubicBezierCurve"),(this.v0=e),(this.v1=t),(this.v2=n),(this.v3=i);}
getPoint(e,t=new J()){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sa(e,i.x,r.x,o.x,a.x),Sa(e,i.y,r.y,o.y,a.y)),n;}
copy(e){return(super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this);}
toJSON(){const e=super.toJSON();return((e.v0=this.v0.toArray()),(e.v1=this.v1.toArray()),(e.v2=this.v2.toArray()),(e.v3=this.v3.toArray()),e);}
fromJSON(e){return(super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this);}}
Tu.prototype.isCubicBezierCurve=!0;class If extends Dn{constructor(e=new C(),t=new C(),n=new C(),i=new C()){super(),(this.type="CubicBezierCurve3"),(this.v0=e),(this.v1=t),(this.v2=n),(this.v3=i);}
getPoint(e,t=new C()){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return(n.set(Sa(e,i.x,r.x,o.x,a.x),Sa(e,i.y,r.y,o.y,a.y),Sa(e,i.z,r.z,o.z,a.z)),n);}
copy(e){return(super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this);}
toJSON(){const e=super.toJSON();return((e.v0=this.v0.toArray()),(e.v1=this.v1.toArray()),(e.v2=this.v2.toArray()),(e.v3=this.v3.toArray()),e);}
fromJSON(e){return(super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this);}}
If.prototype.isCubicBezierCurve3=!0;class hl extends Dn{constructor(e=new J(),t=new J()){super(),(this.type="LineCurve"),(this.v1=e),(this.v2=t);}
getPoint(e,t=new J()){const n=t;return(e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n);}
getPointAt(e,t){return this.getPoint(e,t);}
getTangent(e,t){const n=t||new J();return n.copy(this.v2).sub(this.v1).normalize(),n;}
copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this;}
toJSON(){const e=super.toJSON();return(e.v1=this.v1.toArray()),(e.v2=this.v2.toArray()),e;}
fromJSON(e){return(super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this);}}
hl.prototype.isLineCurve=!0;class Ay extends Dn{constructor(e=new C(),t=new C()){super(),(this.type="LineCurve3"),(this.isLineCurve3=!0),(this.v1=e),(this.v2=t);}
getPoint(e,t=new C()){const n=t;return(e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n);}
getPointAt(e,t){return this.getPoint(e,t);}
copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this;}
toJSON(){const e=super.toJSON();return(e.v1=this.v1.toArray()),(e.v2=this.v2.toArray()),e;}
fromJSON(e){return(super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this);}}
class Eu extends Dn{constructor(e=new J(),t=new J(),n=new J()){super(),(this.type="QuadraticBezierCurve"),(this.v0=e),(this.v1=t),(this.v2=n);}
getPoint(e,t=new J()){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ma(e,i.x,r.x,o.x),Ma(e,i.y,r.y,o.y)),n;}
copy(e){return(super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this);}
toJSON(){const e=super.toJSON();return((e.v0=this.v0.toArray()),(e.v1=this.v1.toArray()),(e.v2=this.v2.toArray()),e);}
fromJSON(e){return(super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this);}}
Eu.prototype.isQuadraticBezierCurve=!0;class Au extends Dn{constructor(e=new C(),t=new C(),n=new C()){super(),(this.type="QuadraticBezierCurve3"),(this.v0=e),(this.v1=t),(this.v2=n);}
getPoint(e,t=new C()){const n=t,i=this.v0,r=this.v1,o=this.v2;return(n.set(Ma(e,i.x,r.x,o.x),Ma(e,i.y,r.y,o.y),Ma(e,i.z,r.z,o.z)),n);}
copy(e){return(super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this);}
toJSON(){const e=super.toJSON();return((e.v0=this.v0.toArray()),(e.v1=this.v1.toArray()),(e.v2=this.v2.toArray()),e);}
fromJSON(e){return(super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this);}}
Au.prototype.isQuadraticBezierCurve3=!0;class Cu extends Dn{constructor(e=[]){super(),(this.type="SplineCurve"),(this.points=e);}
getPoint(e,t=new J()){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Wm(a,l.x,c.x,u.x,h.x),Wm(a,l.y,c.y,u.y,h.y)),n;}
copy(e){super.copy(e),(this.points=[]);for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone());}
return this;}
toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray());}
return e;}
fromJSON(e){super.fromJSON(e),(this.points=[]);for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new J().fromArray(i));}
return this;}}
Cu.prototype.isSplineCurve=!0;var Bf=Object.freeze({__proto__:null,ArcCurve:Rf,CatmullRomCurve3:wo,CubicBezierCurve:Tu,CubicBezierCurve3:If,EllipseCurve:ul,LineCurve:hl,LineCurve3:Ay,QuadraticBezierCurve:Eu,QuadraticBezierCurve3:Au,SplineCurve:Cu,});class Cy extends Dn{constructor(){super(),(this.type="CurvePath"),(this.curves=[]),(this.autoClose=!1);}
add(e){this.curves.push(e);}
closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new hl(t,e));}
getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t);}
r++;}
return null;}
getLength(){const e=this.getCurveLengths();return e[e.length-1];}
updateArcLengths(){(this.needsUpdate=!0),(this.cacheLengths=null),this.getCurveLengths();}
getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)
return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)
(t+=this.curves[n].getLength()),e.push(t);return(this.cacheLengths=e),e;}
getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t;}
getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];(n&&n.equals(u))||(t.push(u),(n=u));}}
return(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t);}
copy(e){super.copy(e),(this.curves=[]);for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone());}
return(this.autoClose=e.autoClose),this;}
toJSON(){const e=super.toJSON();(e.autoClose=this.autoClose),(e.curves=[]);for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON());}
return e;}
fromJSON(e){super.fromJSON(e),(this.autoClose=e.autoClose),(this.curves=[]);for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Bf[i.type]().fromJSON(i));}
return this;}}
class Xa extends Cy{constructor(e){super(),(this.type="Path"),(this.currentPoint=new J()),e&&this.setFromPoints(e);}
setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this;}
moveTo(e,t){return this.currentPoint.set(e,t),this;}
lineTo(e,t){const n=new hl(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this;}
quadraticCurveTo(e,t,n,i){const r=new Eu(this.currentPoint.clone(),new J(e,t),new J(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this;}
bezierCurveTo(e,t,n,i,r,o){const a=new Tu(this.currentPoint.clone(),new J(e,t),new J(n,i),new J(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this;}
splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Cu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this;}
arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this;}
absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this;}
ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this;}
absellipse(e,t,n,i,r,o,a,l){const c=new ul(e,t,n,i,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y);}
this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this;}
copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this;}
toJSON(){const e=super.toJSON();return(e.currentPoint=this.currentPoint.toArray()),e;}
fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this;}}
class hi extends Xa{constructor(e){super(e),(this.uuid=Pn()),(this.type="Shape"),(this.holes=[]);}
getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)
t[n]=this.holes[n].getPoints(e);return t;}
extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)};}
copy(e){super.copy(e),(this.holes=[]);for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone());}
return this;}
toJSON(){const e=super.toJSON();(e.uuid=this.uuid),(e.holes=[]);for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON());}
return e;}
fromJSON(e){super.fromJSON(e),(this.uuid=e.uuid),(this.holes=[]);for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Xa().fromJSON(i));}
return this;}}
const iE={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Ly(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if((n&&(r=lE(s,e,r,t)),s.length>80*t)){(a=c=s[0]),(l=u=s[1]);for(let p=t;p<i;p+=t)
(h=s[p]),(d=s[p+1]),h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);(f=Math.max(c-a,u-l)),(f=f!==0?1/f:0);}
return $a(r,o,t,a,l,f),o;},};function Ly(s,e,t,n,i){let r,o;if(i===xE(s,e,t,n)>0)
for(r=e;r<t;r+=n)o=qm(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=qm(r,s[r],s[r+1],o);return o&&Lu(o,o.next)&&(ja(o),(o=o.next)),o;}
function _r(s,e){if(!s)return s;e||(e=s);let t=s,n;do
if(((n=!1),!t.steiner&&(Lu(t,t.next)||_t(t.prev,t,t.next)===0))){if((ja(t),(t=e=t.prev),t===t.next))break;n=!0;}else t=t.next;while(n||t!==e);return e;}
function $a(s,e,t,n,i,r,o){if(!s)return;!o&&r&&fE(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(((l=s.prev),(c=s.next),r?sE(s,n,i,r):rE(s))){e.push(l.i/t),e.push(s.i/t),e.push(c.i/t),ja(s),(s=c.next),(a=c.next);continue;}
if(((s=c),s===a)){o?o===1?((s=oE(_r(s),e,t)),$a(s,e,t,n,i,r,2)):o===2&&aE(s,e,t,n,i,r):$a(_r(s),e,t,n,i,r,1);break;}}}
function rE(s){const e=s.prev,t=s,n=s.next;if(_t(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(oo(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&_t(i.prev,i,i.next)>=0)
return!1;i=i.next;}
return!0;}
function sE(s,e,t,n){const i=s.prev,r=s,o=s.next;if(_t(i,r,o)>=0)return!1;const a=i.x<r.x?(i.x<o.x?i.x:o.x):r.x<o.x?r.x:o.x,l=i.y<r.y?(i.y<o.y?i.y:o.y):r.y<o.y?r.y:o.y,c=i.x>r.x?(i.x>o.x?i.x:o.x):r.x>o.x?r.x:o.x,u=i.y>r.y?(i.y>o.y?i.y:o.y):r.y>o.y?r.y:o.y,h=Fd(a,l,e,t,n),d=Fd(c,u,e,t,n);let f=s.prevZ,p=s.nextZ;for(;f&&f.z>=h&&p&&p.z<=d;){if((f!==s.prev&&f!==s.next&&oo(i.x,i.y,r.x,r.y,o.x,o.y,f.x,f.y)&&_t(f.prev,f,f.next)>=0)||((f=f.prevZ),p!==s.prev&&p!==s.next&&oo(i.x,i.y,r.x,r.y,o.x,o.y,p.x,p.y)&&_t(p.prev,p,p.next)>=0))
return!1;p=p.nextZ;}
for(;f&&f.z>=h;){if(f!==s.prev&&f!==s.next&&oo(i.x,i.y,r.x,r.y,o.x,o.y,f.x,f.y)&&_t(f.prev,f,f.next)>=0)
return!1;f=f.prevZ;}
for(;p&&p.z<=d;){if(p!==s.prev&&p!==s.next&&oo(i.x,i.y,r.x,r.y,o.x,o.y,p.x,p.y)&&_t(p.prev,p,p.next)>=0)
return!1;p=p.nextZ;}
return!0;}
function oE(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Lu(i,r)&&Py(i,n,n.next,r)&&Ya(i,r)&&Ya(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),ja(n),ja(n.next),(n=s=r)),(n=n.next);}while(n!==s);return _r(n);}
function aE(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gE(o,a)){let l=Ry(o,a);(o=_r(o,o.next)),(l=_r(l,l.next)),$a(o,e,t,n,i,r),$a(l,e,t,n,i,r);return;}
a=a.next;}
o=o.next;}while(o!==s);}
function lE(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)
(a=e[r]*n),(l=r<o-1?e[r+1]*n:s.length),(c=Ly(s,a,l,n,!1)),c===c.next&&(c.steiner=!0),i.push(mE(c));for(i.sort(cE),r=0;r<i.length;r++)uE(i[r],t),(t=_r(t,t.next));return t;}
function cE(s,e){return s.x-e.x;}
function uE(s,e){if(((e=hE(s,e)),e)){const t=Ry(e,s);_r(e,e.next),_r(t,t.next);}}
function hE(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+((i-t.y)*(t.next.x-t.x))/(t.next.y-t.y);if(d<=n&&d>r){if(((r=d),d===n)){if(i===t.y)return t;if(i===t.next.y)return t.next;}
o=t.x<t.next.x?t:t.next;}}
t=t.next;}while(t!==e);if(!o)return null;if(n===r)return o;const a=o,l=o.x,c=o.y;let u=1/0,h;t=o;do
n>=t.x&&t.x>=l&&n!==t.x&&oo(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)&&((h=Math.abs(i-t.y)/(n-t.x)),Ya(t,s)&&(h<u||(h===u&&(t.x>o.x||(t.x===o.x&&dE(o,t)))))&&((o=t),(u=h))),(t=t.next);while(t!==a);return o;}
function dE(s,e){return _t(s.prev,s,e.prev)<0&&_t(e.next,s,s.next)<0;}
function fE(s,e,t,n){let i=s;do
i.z===null&&(i.z=Fd(i.x,i.y,e,t,n)),(i.prevZ=i.prev),(i.nextZ=i.next),(i=i.next);while(i!==s);(i.prevZ.nextZ=null),(i.prevZ=null),pE(i);}
function pE(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,(n=n.nextZ),!!n);e++);for(l=c;a>0||(l>0&&n);)
a!==0&&(l===0||!n||t.z<=n.z)?((i=t),(t=t.nextZ),a--):((i=n),(n=n.nextZ),l--),r?(r.nextZ=i):(s=i),(i.prevZ=r),(r=i);t=n;}
(r.nextZ=null),(c*=2);}while(o>1);return s;}
function Fd(s,e,t,n,i){return((s=32767*(s-t)*i),(e=32767*(e-n)*i),(s=(s|(s<<8))&16711935),(s=(s|(s<<4))&252645135),(s=(s|(s<<2))&858993459),(s=(s|(s<<1))&1431655765),(e=(e|(e<<8))&16711935),(e=(e|(e<<4))&252645135),(e=(e|(e<<2))&858993459),(e=(e|(e<<1))&1431655765),s|(e<<1));}
function mE(s){let e=s,t=s;do(e.x<t.x||(e.x===t.x&&e.y<t.y))&&(t=e),(e=e.next);while(e!==s);return t;}
function oo(s,e,t,n,i,r,o,a){return((i-o)*(e-a)-(s-o)*(r-a)>=0&&(s-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(r-a)-(i-o)*(n-a)>=0);}
function gE(s,e){return(s.next.i!==e.i&&s.prev.i!==e.i&&!_E(s,e)&&((Ya(s,e)&&Ya(e,s)&&yE(s,e)&&(_t(s.prev,s,e.prev)||_t(s,e.prev,e)))||(Lu(s,e)&&_t(s.prev,s,s.next)>0&&_t(e.prev,e,e.next)>0)));}
function _t(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y);}
function Lu(s,e){return s.x===e.x&&s.y===e.y;}
function Py(s,e,t,n){const i=nc(_t(s,e,t)),r=nc(_t(s,e,n)),o=nc(_t(t,n,s)),a=nc(_t(t,n,e));return!!((i!==r&&o!==a)||(i===0&&tc(s,t,e))||(r===0&&tc(s,n,e))||(o===0&&tc(t,s,n))||(a===0&&tc(t,e,n)));}
function tc(s,e,t){return(e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y));}
function nc(s){return s>0?1:s<0?-1:0;}
function _E(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Py(t,t.next,s,e))
return!0;t=t.next;}while(t!==s);return!1;}
function Ya(s,e){return _t(s.prev,s,s.next)<0?_t(s,e,s.next)>=0&&_t(s,s.prev,e)>=0:_t(s,e,s.prev)<0||_t(s,s.next,e)<0;}
function yE(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do
t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<((t.next.x-t.x)*(r-t.y))/(t.next.y-t.y)+t.x&&(n=!n),(t=t.next);while(t!==s);return n;}
function Ry(s,e){const t=new Od(s.i,s.x,s.y),n=new Od(e.i,e.x,e.y),i=s.next,r=e.prev;return((s.next=e),(e.prev=s),(t.next=i),(i.prev=t),(n.next=t),(t.prev=n),(r.next=n),(n.prev=r),n);}
function qm(s,e,t,n){const i=new Od(s,e,t);return(n?((i.next=n.next),(i.prev=n),(n.next.prev=i),(n.next=i)):((i.prev=i),(i.next=i)),i);}
function ja(s){(s.next.prev=s.prev),(s.prev.next=s.next),s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ);}
function Od(s,e,t){(this.i=s),(this.x=e),(this.y=t),(this.prev=null),(this.next=null),(this.z=null),(this.prevZ=null),(this.nextZ=null),(this.steiner=!1);}
function xE(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)
(i+=(s[o]-s[r])*(s[r+1]+s[o+1])),(o=r);return i;}
class di{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)
n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*0.5;}
static isClockWise(e){return di.area(e)<0;}
static triangulateShape(e,t){const n=[],i=[],r=[];Xm(e),$m(n,e);let o=e.length;t.forEach(Xm);for(let l=0;l<t.length;l++)
i.push(o),(o+=t[l].length),$m(n,t[l]);const a=iE.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r;}}
function Xm(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop();}
function $m(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y);}
class mi extends Be{constructor(e=new hi([new J(0.5,0.5),new J(-0.5,0.5),new J(-0.5,-0.5),new J(0.5,-0.5),]),t={}){super(),(this.type="ExtrudeGeometry"),(this.parameters={shapes:e,options:t}),(e=Array.isArray(e)?e:[e]);const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c);}
this.setAttribute("position",new Ce(i,3)),this.setAttribute("uv",new Ce(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:0.2,p=t.bevelSize!==void 0?t.bevelSize:f-0.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:vE;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),(h=t.amount));let w,v=!1,x,M,S,T;_&&((w=_.getSpacedPoints(u)),(v=!0),(d=!1),(x=_.computeFrenetFrames(u,!1)),(M=new C()),(S=new C()),(T=new C())),d||((y=0),(f=0),(p=0),(g=0));const D=a.extractPoints(c);let I=D.shape;const b=D.holes;if(!di.isClockWise(I)){I=I.reverse();for(let V=0,ee=b.length;V<ee;V++){const se=b[V];di.isClockWise(se)&&(b[V]=se.reverse());}}
const F=di.triangulateShape(I,b),O=I;for(let V=0,ee=b.length;V<ee;V++){const se=b[V];I=I.concat(se);}
function H(V,ee,se){return(ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().multiplyScalar(se).add(V));}
const A=I.length,z=F.length;function U(V,ee,se){let _e,pe,me;const Le=V.x-ee.x,Se=V.y-ee.y,Ue=se.x-V.x,L=se.y-V.y,E=Le*Le+Se*Se,Q=Le*L-Se*Ue;if(Math.abs(Q)>Number.EPSILON){const ie=Math.sqrt(E),he=Math.sqrt(Ue*Ue+L*L),Me=ee.x-Se/ie,Re=ee.y+Le/ie,te=se.x-L/he,N=se.y+Ue/he,oe=((te-Me)*L-(N-Re)*Ue)/(Le*L-Se*Ue);(_e=Me+Le*oe-V.x),(pe=Re+Se*oe-V.y);const be=_e*_e+pe*pe;if(be<=2)return new J(_e,pe);me=Math.sqrt(be/2);}else{let ie=!1;Le>Number.EPSILON?Ue>Number.EPSILON&&(ie=!0):Le<-Number.EPSILON?Ue<-Number.EPSILON&&(ie=!0):Math.sign(Se)===Math.sign(L)&&(ie=!0),ie?((_e=-Se),(pe=Le),(me=Math.sqrt(E))):((_e=Le),(pe=Se),(me=Math.sqrt(E/2)));}
return new J(_e/me,pe/me);}
const B=[];for(let V=0,ee=O.length,se=ee-1,_e=V+1;V<ee;V++,se++,_e++)
se===ee&&(se=0),_e===ee&&(_e=0),(B[V]=U(O[V],O[se],O[_e]));const j=[];let X,K=B.concat();for(let V=0,ee=b.length;V<ee;V++){const se=b[V];X=[];for(let _e=0,pe=se.length,me=pe-1,Le=_e+1;_e<pe;_e++,me++,Le++)
me===pe&&(me=0),Le===pe&&(Le=0),(X[_e]=U(se[_e],se[me],se[Le]));j.push(X),(K=K.concat(X));}
for(let V=0;V<y;V++){const ee=V/y,se=f*Math.cos((ee*Math.PI)/2),_e=p*Math.sin((ee*Math.PI)/2)+g;for(let pe=0,me=O.length;pe<me;pe++){const Le=H(O[pe],B[pe],_e);Ae(Le.x,Le.y,-se);}
for(let pe=0,me=b.length;pe<me;pe++){const Le=b[pe];X=j[pe];for(let Se=0,Ue=Le.length;Se<Ue;Se++){const L=H(Le[Se],X[Se],_e);Ae(L.x,L.y,-se);}}}
const ue=p+g;for(let V=0;V<A;V++){const ee=d?H(I[V],K[V],ue):I[V];v?(S.copy(x.normals[0]).multiplyScalar(ee.x),M.copy(x.binormals[0]).multiplyScalar(ee.y),T.copy(w[0]).add(S).add(M),Ae(T.x,T.y,T.z)):Ae(ee.x,ee.y,0);}
for(let V=1;V<=u;V++)
for(let ee=0;ee<A;ee++){const se=d?H(I[ee],K[ee],ue):I[ee];v?(S.copy(x.normals[V]).multiplyScalar(se.x),M.copy(x.binormals[V]).multiplyScalar(se.y),T.copy(w[V]).add(S).add(M),Ae(T.x,T.y,T.z)):Ae(se.x,se.y,(h/u)*V);}
for(let V=y-1;V>=0;V--){const ee=V/y,se=f*Math.cos((ee*Math.PI)/2),_e=p*Math.sin((ee*Math.PI)/2)+g;for(let pe=0,me=O.length;pe<me;pe++){const Le=H(O[pe],B[pe],_e);Ae(Le.x,Le.y,h+se);}
for(let pe=0,me=b.length;pe<me;pe++){const Le=b[pe];X=j[pe];for(let Se=0,Ue=Le.length;Se<Ue;Se++){const L=H(Le[Se],X[Se],_e);v?Ae(L.x,L.y+w[u-1].y,w[u-1].x+se):Ae(L.x,L.y,h+se);}}}
Ee(),Z();function Ee(){const V=i.length/3;if(d){let ee=0,se=A*ee;for(let _e=0;_e<z;_e++){const pe=F[_e];fe(pe[2]+se,pe[1]+se,pe[0]+se);}
(ee=u+y*2),(se=A*ee);for(let _e=0;_e<z;_e++){const pe=F[_e];fe(pe[0]+se,pe[1]+se,pe[2]+se);}}else{for(let ee=0;ee<z;ee++){const se=F[ee];fe(se[2],se[1],se[0]);}
for(let ee=0;ee<z;ee++){const se=F[ee];fe(se[0]+A*u,se[1]+A*u,se[2]+A*u);}}
n.addGroup(V,i.length/3-V,0);}
function Z(){const V=i.length/3;let ee=0;q(O,ee),(ee+=O.length);for(let se=0,_e=b.length;se<_e;se++){const pe=b[se];q(pe,ee),(ee+=pe.length);}
n.addGroup(V,i.length/3-V,1);}
function q(V,ee){let se=V.length;for(;--se>=0;){const _e=se;let pe=se-1;pe<0&&(pe=V.length-1);for(let me=0,Le=u+y*2;me<Le;me++){const Se=A*me,Ue=A*(me+1),L=ee+_e+Se,E=ee+pe+Se,Q=ee+pe+Ue,ie=ee+_e+Ue;ce(L,E,Q,ie);}}}
function Ae(V,ee,se){l.push(V),l.push(ee),l.push(se);}
function fe(V,ee,se){le(V),le(ee),le(se);const _e=i.length/3,pe=m.generateTopUV(n,i,_e-3,_e-2,_e-1);Te(pe[0]),Te(pe[1]),Te(pe[2]);}
function ce(V,ee,se,_e){le(V),le(ee),le(_e),le(ee),le(se),le(_e);const pe=i.length/3,me=m.generateSideWallUV(n,i,pe-6,pe-3,pe-2,pe-1);Te(me[0]),Te(me[1]),Te(me[3]),Te(me[1]),Te(me[2]),Te(me[3]);}
function le(V){i.push(l[V*3+0]),i.push(l[V*3+1]),i.push(l[V*3+2]);}
function Te(V){r.push(V.x),r.push(V.y);}}}
toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return wE(t,n,e);}
static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a);}
const i=e.options.extrudePath;return(i!==void 0&&(e.options.extrudePath=new Bf[i.type]().fromJSON(i)),new mi(n,e.options));}}
const vE={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new J(r,o),new J(a,l),new J(c,u)];},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],g=e[r*3],y=e[r*3+1],_=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new J(o,1-l),new J(c,1-h),new J(d,1-p),new J(g,1-_)]:[new J(a,1-l),new J(u,1-h),new J(f,1-p),new J(y,1-_)];},};function wE(s,e,t){if(((t.shapes=[]),Array.isArray(s)))
for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid);}
else t.shapes.push(s.uuid);return(e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t);}
class No extends pi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1,],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1,];super(i,r,e,t),(this.type="IcosahedronGeometry"),(this.parameters={radius:e,detail:t});}
static fromJSON(e){return new No(e.radius,e.detail);}}
class zo extends Be{constructor(e=[new J(0,0.5),new J(0.5,0),new J(0,-0.5)],t=12,n=0,i=Math.PI*2){super(),(this.type="LatheGeometry"),(this.parameters={points:e,segments:t,phiStart:n,phiLength:i}),(t=Math.floor(t)),(i=Zt(i,0,Math.PI*2));const r=[],o=[],a=[],l=[],c=[],u=1/t,h=new C(),d=new J(),f=new C(),p=new C(),g=new C();let y=0,_=0;for(let m=0;m<=e.length-1;m++)
switch(m){case 0:(y=e[m+1].x-e[m].x),(_=e[m+1].y-e[m].y),(f.x=_*1),(f.y=-y),(f.z=_*0),g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:(y=e[m+1].x-e[m].x),(_=e[m+1].y-e[m].y),(f.x=_*1),(f.y=-y),(f.z=_*0),p.copy(f),(f.x+=g.x),(f.y+=g.y),(f.z+=g.z),f.normalize(),l.push(f.x,f.y,f.z),g.copy(p);}
for(let m=0;m<=t;m++){const w=n+m*u*i,v=Math.sin(w),x=Math.cos(w);for(let M=0;M<=e.length-1;M++){(h.x=e[M].x*v),(h.y=e[M].y),(h.z=e[M].x*x),o.push(h.x,h.y,h.z),(d.x=m/t),(d.y=M/(e.length-1)),a.push(d.x,d.y);const S=l[3*M+0]*v,T=l[3*M+1],D=l[3*M+0]*x;c.push(S,T,D);}}
for(let m=0;m<t;m++)
for(let w=0;w<e.length-1;w++){const v=w+m*e.length,x=v,M=v+e.length,S=v+e.length+1,T=v+1;r.push(x,M,T),r.push(S,T,M);}
this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("uv",new Ce(a,2)),this.setAttribute("normal",new Ce(c,3));}
static fromJSON(e){return new zo(e.points,e.segments,e.phiStart,e.phiLength);}}
class gs extends pi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2,];super(n,i,e,t),(this.type="OctahedronGeometry"),(this.parameters={radius:e,detail:t});}
static fromJSON(e){return new gs(e.radius,e.detail);}}
class Uo extends Be{constructor(e=0.5,t=1,n=8,i=1,r=0,o=Math.PI*2){super(),(this.type="RingGeometry"),(this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o,}),(n=Math.max(3,n)),(i=Math.max(1,i));const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,f=new C(),p=new J();for(let g=0;g<=i;g++){for(let y=0;y<=n;y++){const _=r+(y/n)*o;(f.x=h*Math.cos(_)),(f.y=h*Math.sin(_)),l.push(f.x,f.y,f.z),c.push(0,0,1),(p.x=(f.x/t+1)/2),(p.y=(f.y/t+1)/2),u.push(p.x,p.y);}
h+=d;}
for(let g=0;g<i;g++){const y=g*(n+1);for(let _=0;_<n;_++){const m=_+y,w=m,v=m+n+1,x=m+n+2,M=m+1;a.push(w,v,M),a.push(v,x,M);}}
this.setIndex(a),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(u,2));}
static fromJSON(e){return new Uo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength);}}
class _s extends Be{constructor(e=new hi([new J(0,0.5),new J(-0.5,-0.5),new J(0.5,-0.5)]),t=12){super(),(this.type="ShapeGeometry"),(this.parameters={shapes:e,curveSegments:t});const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else
for(let u=0;u<e.length;u++)
c(e[u]),this.addGroup(a,l,u),(a+=l),(l=0);this.setIndex(n),this.setAttribute("position",new Ce(i,3)),this.setAttribute("normal",new Ce(r,3)),this.setAttribute("uv",new Ce(o,2));function c(u){const h=i.length/3,d=u.extractPoints(t);let f=d.shape;const p=d.holes;di.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,_=p.length;y<_;y++){const m=p[y];di.isClockWise(m)===!0&&(p[y]=m.reverse());}
const g=di.triangulateShape(f,p);for(let y=0,_=p.length;y<_;y++){const m=p[y];f=f.concat(m);}
for(let y=0,_=f.length;y<_;y++){const m=f[y];i.push(m.x,m.y,0),r.push(0,0,1),o.push(m.x,m.y);}
for(let y=0,_=g.length;y<_;y++){const m=g[y],w=m[0]+h,v=m[1]+h,x=m[2]+h;n.push(w,v,x),(l+=3);}}}
toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return bE(t,e);}
static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o);}
return new _s(n,e.curveSegments);}}
function bE(s,e){if(((e.shapes=[]),Array.isArray(s)))
for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid);}
else e.shapes.push(s.uuid);return e;}
class yr extends Be{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),(this.type="SphereGeometry"),(this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a,}),(t=Math.max(3,Math.floor(t))),(n=Math.max(2,Math.floor(n)));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new C(),d=new C(),f=[],p=[],g=[],y=[];for(let _=0;_<=n;_++){const m=[],w=_/n;let v=0;_==0&&o==0?(v=0.5/t):_==n&&l==Math.PI&&(v=-0.5/t);for(let x=0;x<=t;x++){const M=x/t;(h.x=-e*Math.cos(i+M*r)*Math.sin(o+w*a)),(h.y=e*Math.cos(o+w*a)),(h.z=e*Math.sin(i+M*r)*Math.sin(o+w*a)),p.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),y.push(M+v,1-w),m.push(c++);}
u.push(m);}
for(let _=0;_<n;_++)
for(let m=0;m<t;m++){const w=u[_][m+1],v=u[_][m],x=u[_+1][m],M=u[_+1][m+1];(_!==0||o>0)&&f.push(w,v,M),(_!==n-1||l<Math.PI)&&f.push(v,x,M);}
this.setIndex(f),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(g,3)),this.setAttribute("uv",new Ce(y,2));}
static fromJSON(e){return new yr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength);}}
class Ho extends pi{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),(this.type="TetrahedronGeometry"),(this.parameters={radius:e,detail:t});}
static fromJSON(e){return new Ho(e.radius,e.detail);}}
class Go extends Be{constructor(e=1,t=0.4,n=8,i=6,r=Math.PI*2){super(),(this.type="TorusGeometry"),(this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,}),(n=Math.floor(n)),(i=Math.floor(i));const o=[],a=[],l=[],c=[],u=new C(),h=new C(),d=new C();for(let f=0;f<=n;f++)
for(let p=0;p<=i;p++){const g=(p/i)*r,y=(f/n)*Math.PI*2;(h.x=(e+t*Math.cos(y))*Math.cos(g)),(h.y=(e+t*Math.cos(y))*Math.sin(g)),(h.z=t*Math.sin(y)),a.push(h.x,h.y,h.z),(u.x=e*Math.cos(g)),(u.y=e*Math.sin(g)),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/i),c.push(f/n);}
for(let f=1;f<=n;f++)
for(let p=1;p<=i;p++){const g=(i+1)*f+p-1,y=(i+1)*(f-1)+p-1,_=(i+1)*(f-1)+p,m=(i+1)*f+p;o.push(g,y,m),o.push(y,_,m);}
this.setIndex(o),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2));}
static fromJSON(e){return new Go(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc);}}
class Vo extends Be{constructor(e=1,t=0.4,n=64,i=8,r=2,o=3){super(),(this.type="TorusKnotGeometry"),(this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o,}),(n=Math.floor(n)),(i=Math.floor(i));const a=[],l=[],c=[],u=[],h=new C(),d=new C(),f=new C(),p=new C(),g=new C(),y=new C(),_=new C();for(let w=0;w<=n;++w){const v=(w/n)*r*Math.PI*2;m(v,r,o,e,f),m(v+0.01,r,o,e,p),y.subVectors(p,f),_.addVectors(p,f),g.crossVectors(y,_),_.crossVectors(g,y),g.normalize(),_.normalize();for(let x=0;x<=i;++x){const M=(x/i)*Math.PI*2,S=-t*Math.cos(M),T=t*Math.sin(M);(h.x=f.x+(S*_.x+T*g.x)),(h.y=f.y+(S*_.y+T*g.y)),(h.z=f.z+(S*_.z+T*g.z)),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(w/n),u.push(x/i);}}
for(let w=1;w<=n;w++)
for(let v=1;v<=i;v++){const x=(i+1)*(w-1)+(v-1),M=(i+1)*w+(v-1),S=(i+1)*w+v,T=(i+1)*(w-1)+v;a.push(x,M,T),a.push(M,S,T);}
this.setIndex(a),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(u,2));function m(w,v,x,M,S){const T=Math.cos(w),D=Math.sin(w),I=(x/v)*w,b=Math.cos(I);(S.x=M*(2+b)*0.5*T),(S.y=M*(2+b)*D*0.5),(S.z=M*Math.sin(I)*0.5);}}
static fromJSON(e){return new Vo(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q);}}
class Fi extends Be{constructor(e=new Au(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,i=8,r=!1){super(),(this.type="TubeGeometry"),(this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r,});const o=e.computeFrenetFrames(t,r);(this.tangents=o.tangents),(this.normals=o.normals),(this.binormals=o.binormals);const a=new C(),l=new C(),c=new J();let u=new C();const h=[],d=[],f=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Ce(h,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function g(){for(let w=0;w<t;w++)y(w);y(r===!1?t:0),m(),_();}
function y(w){u=e.getPointAt(w/t,u);const v=o.normals[w],x=o.binormals[w];for(let M=0;M<=i;M++){const S=(M/i)*Math.PI*2,T=Math.sin(S),D=-Math.cos(S);(l.x=D*v.x+T*x.x),(l.y=D*v.y+T*x.y),(l.z=D*v.z+T*x.z),l.normalize(),d.push(l.x,l.y,l.z),(a.x=u.x+n*l.x),(a.y=u.y+n*l.y),(a.z=u.z+n*l.z),h.push(a.x,a.y,a.z);}}
function _(){for(let w=1;w<=t;w++)
for(let v=1;v<=i;v++){const x=(i+1)*(w-1)+(v-1),M=(i+1)*w+(v-1),S=(i+1)*w+v,T=(i+1)*(w-1)+v;p.push(x,M,T),p.push(M,S,T);}}
function m(){for(let w=0;w<=t;w++)
for(let v=0;v<=i;v++)
(c.x=w/t),(c.y=v/i),f.push(c.x,c.y);}}
toJSON(){const e=super.toJSON();return(e.path=this.parameters.path.toJSON()),e;}
static fromJSON(e){return new Fi(new Bf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed);}}
class Ff extends Be{constructor(e=null){if((super(),(this.type="WireframeGeometry"),(this.parameters={geometry:e}),e!==null)){const t=[],n=new Set(),i=new C(),r=new C();if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let p=d,g=d+f;p<g;p+=3)
for(let y=0;y<3;y++){const _=a.getX(p+y),m=a.getX(p+((y+1)%3));i.fromBufferAttribute(o,_),r.fromBufferAttribute(o,m),Ym(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z));}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)
for(let c=0;c<3;c++){const u=3*a+c,h=3*a+((c+1)%3);i.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),Ym(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z));}}
this.setAttribute("position",new Ce(t,3));}}}
function Ym(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0);}
var jm=Object.freeze({__proto__:null,BoxGeometry:Ni,BoxBufferGeometry:Ni,CircleGeometry:Fo,CircleBufferGeometry:Fo,ConeGeometry:Oo,ConeBufferGeometry:Oo,CylinderGeometry:gr,CylinderBufferGeometry:gr,DodecahedronGeometry:ko,DodecahedronBufferGeometry:ko,EdgesGeometry:Pf,ExtrudeGeometry:mi,ExtrudeBufferGeometry:mi,IcosahedronGeometry:No,IcosahedronBufferGeometry:No,LatheGeometry:zo,LatheBufferGeometry:zo,OctahedronGeometry:gs,OctahedronBufferGeometry:gs,PlaneGeometry:ps,PlaneBufferGeometry:ps,PolyhedronGeometry:pi,PolyhedronBufferGeometry:pi,RingGeometry:Uo,RingBufferGeometry:Uo,ShapeGeometry:_s,ShapeBufferGeometry:_s,SphereGeometry:yr,SphereBufferGeometry:yr,TetrahedronGeometry:Ho,TetrahedronBufferGeometry:Ho,TorusGeometry:Go,TorusBufferGeometry:Go,TorusKnotGeometry:Vo,TorusKnotBufferGeometry:Vo,TubeGeometry:Fi,TubeBufferGeometry:Fi,WireframeGeometry:Ff,});class Of extends St{constructor(e){super(),(this.type="ShadowMaterial"),(this.color=new ve(0)),(this.transparent=!0),this.setValues(e);}
copy(e){return super.copy(e),this.color.copy(e.color),this;}}
Of.prototype.isShadowMaterial=!0;class kf extends kt{constructor(e){super(e),(this.type="RawShaderMaterial");}}
kf.prototype.isRawShaderMaterial=!0;class dl extends St{constructor(e){super(),(this.defines={STANDARD:""}),(this.type="MeshStandardMaterial"),(this.color=new ve(16777215)),(this.roughness=1),(this.metalness=0),(this.map=null),(this.lightMap=null),(this.lightMapIntensity=1),(this.aoMap=null),(this.aoMapIntensity=1),(this.emissive=new ve(0)),(this.emissiveIntensity=1),(this.emissiveMap=null),(this.bumpMap=null),(this.bumpScale=1),(this.normalMap=null),(this.normalMapType=bs),(this.normalScale=new J(1,1)),(this.displacementMap=null),(this.displacementScale=1),(this.displacementBias=0),(this.roughnessMap=null),(this.metalnessMap=null),(this.alphaMap=null),(this.envMap=null),(this.envMapIntensity=1),(this.refractionRatio=0.98),(this.wireframe=!1),(this.wireframeLinewidth=1),(this.wireframeLinecap="round"),(this.wireframeLinejoin="round"),(this.flatShading=!1),this.setValues(e);}
copy(e){return(super.copy(e),(this.defines={STANDARD:""}),this.color.copy(e.color),(this.roughness=e.roughness),(this.metalness=e.metalness),(this.map=e.map),(this.lightMap=e.lightMap),(this.lightMapIntensity=e.lightMapIntensity),(this.aoMap=e.aoMap),(this.aoMapIntensity=e.aoMapIntensity),this.emissive.copy(e.emissive),(this.emissiveMap=e.emissiveMap),(this.emissiveIntensity=e.emissiveIntensity),(this.bumpMap=e.bumpMap),(this.bumpScale=e.bumpScale),(this.normalMap=e.normalMap),(this.normalMapType=e.normalMapType),this.normalScale.copy(e.normalScale),(this.displacementMap=e.displacementMap),(this.displacementScale=e.displacementScale),(this.displacementBias=e.displacementBias),(this.roughnessMap=e.roughnessMap),(this.metalnessMap=e.metalnessMap),(this.alphaMap=e.alphaMap),(this.envMap=e.envMap),(this.envMapIntensity=e.envMapIntensity),(this.refractionRatio=e.refractionRatio),(this.wireframe=e.wireframe),(this.wireframeLinewidth=e.wireframeLinewidth),(this.wireframeLinecap=e.wireframeLinecap),(this.wireframeLinejoin=e.wireframeLinejoin),(this.flatShading=e.flatShading),this);}}
dl.prototype.isMeshStandardMaterial=!0;class Nf extends dl{constructor(e){super(),(this.defines={STANDARD:"",PHYSICAL:""}),(this.type="MeshPhysicalMaterial"),(this.clearcoatMap=null),(this.clearcoatRoughness=0),(this.clearcoatRoughnessMap=null),(this.clearcoatNormalScale=new J(1,1)),(this.clearcoatNormalMap=null),(this.ior=1.5),Object.defineProperty(this,"reflectivity",{get:function(){return Zt((2.5*(this.ior-1))/(this.ior+1),0,1);},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t);},}),(this.sheenColor=new ve(0)),(this.sheenColorMap=null),(this.sheenRoughness=1),(this.sheenRoughnessMap=null),(this.transmissionMap=null),(this.thickness=0),(this.thicknessMap=null),(this.attenuationDistance=0),(this.attenuationColor=new ve(1,1,1)),(this.specularIntensity=1),(this.specularIntensityMap=null),(this.specularColor=new ve(1,1,1)),(this.specularColorMap=null),(this._sheen=0),(this._clearcoat=0),(this._transmission=0),this.setValues(e);}
get sheen(){return this._sheen;}
set sheen(e){this._sheen>0!=e>0&&this.version++,(this._sheen=e);}
get clearcoat(){return this._clearcoat;}
set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,(this._clearcoat=e);}
get transmission(){return this._transmission;}
set transmission(e){this._transmission>0!=e>0&&this.version++,(this._transmission=e);}
copy(e){return(super.copy(e),(this.defines={STANDARD:"",PHYSICAL:""}),(this.clearcoat=e.clearcoat),(this.clearcoatMap=e.clearcoatMap),(this.clearcoatRoughness=e.clearcoatRoughness),(this.clearcoatRoughnessMap=e.clearcoatRoughnessMap),(this.clearcoatNormalMap=e.clearcoatNormalMap),this.clearcoatNormalScale.copy(e.clearcoatNormalScale),(this.ior=e.ior),(this.sheen=e.sheen),this.sheenColor.copy(e.sheenColor),(this.sheenColorMap=e.sheenColorMap),(this.sheenRoughness=e.sheenRoughness),(this.sheenRoughnessMap=e.sheenRoughnessMap),(this.transmission=e.transmission),(this.transmissionMap=e.transmissionMap),(this.thickness=e.thickness),(this.thicknessMap=e.thicknessMap),(this.attenuationDistance=e.attenuationDistance),this.attenuationColor.copy(e.attenuationColor),(this.specularIntensity=e.specularIntensity),(this.specularIntensityMap=e.specularIntensityMap),this.specularColor.copy(e.specularColor),(this.specularColorMap=e.specularColorMap),this);}}
Nf.prototype.isMeshPhysicalMaterial=!0;class zf extends St{constructor(e){super(),(this.type="MeshPhongMaterial"),(this.color=new ve(16777215)),(this.specular=new ve(1118481)),(this.shininess=30),(this.map=null),(this.lightMap=null),(this.lightMapIntensity=1),(this.aoMap=null),(this.aoMapIntensity=1),(this.emissive=new ve(0)),(this.emissiveIntensity=1),(this.emissiveMap=null),(this.bumpMap=null),(this.bumpScale=1),(this.normalMap=null),(this.normalMapType=bs),(this.normalScale=new J(1,1)),(this.displacementMap=null),(this.displacementScale=1),(this.displacementBias=0),(this.specularMap=null),(this.alphaMap=null),(this.envMap=null),(this.combine=il),(this.reflectivity=1),(this.refractionRatio=0.98),(this.wireframe=!1),(this.wireframeLinewidth=1),(this.wireframeLinecap="round"),(this.wireframeLinejoin="round"),(this.flatShading=!1),this.setValues(e);}
copy(e){return(super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),(this.shininess=e.shininess),(this.map=e.map),(this.lightMap=e.lightMap),(this.lightMapIntensity=e.lightMapIntensity),(this.aoMap=e.aoMap),(this.aoMapIntensity=e.aoMapIntensity),this.emissive.copy(e.emissive),(this.emissiveMap=e.emissiveMap),(this.emissiveIntensity=e.emissiveIntensity),(this.bumpMap=e.bumpMap),(this.bumpScale=e.bumpScale),(this.normalMap=e.normalMap),(this.normalMapType=e.normalMapType),this.normalScale.copy(e.normalScale),(this.displacementMap=e.displacementMap),(this.displacementScale=e.displacementScale),(this.displacementBias=e.displacementBias),(this.specularMap=e.specularMap),(this.alphaMap=e.alphaMap),(this.envMap=e.envMap),(this.combine=e.combine),(this.reflectivity=e.reflectivity),(this.refractionRatio=e.refractionRatio),(this.wireframe=e.wireframe),(this.wireframeLinewidth=e.wireframeLinewidth),(this.wireframeLinecap=e.wireframeLinecap),(this.wireframeLinejoin=e.wireframeLinejoin),(this.flatShading=e.flatShading),this);}}
zf.prototype.isMeshPhongMaterial=!0;class Uf extends St{constructor(e){super(),(this.defines={TOON:""}),(this.type="MeshToonMaterial"),(this.color=new ve(16777215)),(this.map=null),(this.gradientMap=null),(this.lightMap=null),(this.lightMapIntensity=1),(this.aoMap=null),(this.aoMapIntensity=1),(this.emissive=new ve(0)),(this.emissiveIntensity=1),(this.emissiveMap=null),(this.bumpMap=null),(this.bumpScale=1),(this.normalMap=null),(this.normalMapType=bs),(this.normalScale=new J(1,1)),(this.displacementMap=null),(this.displacementScale=1),(this.displacementBias=0),(this.alphaMap=null),(this.wireframe=!1),(this.wireframeLinewidth=1),(this.wireframeLinecap="round"),(this.wireframeLinejoin="round"),this.setValues(e);}
copy(e){return(super.copy(e),this.color.copy(e.color),(this.map=e.map),(this.gradientMap=e.gradientMap),(this.lightMap=e.lightMap),(this.lightMapIntensity=e.lightMapIntensity),(this.aoMap=e.aoMap),(this.aoMapIntensity=e.aoMapIntensity),this.emissive.copy(e.emissive),(this.emissiveMap=e.emissiveMap),(this.emissiveIntensity=e.emissiveIntensity),(this.bumpMap=e.bumpMap),(this.bumpScale=e.bumpScale),(this.normalMap=e.normalMap),(this.normalMapType=e.normalMapType),this.normalScale.copy(e.normalScale),(this.displacementMap=e.displacementMap),(this.displacementScale=e.displacementScale),(this.displacementBias=e.displacementBias),(this.alphaMap=e.alphaMap),(this.wireframe=e.wireframe),(this.wireframeLinewidth=e.wireframeLinewidth),(this.wireframeLinecap=e.wireframeLinecap),(this.wireframeLinejoin=e.wireframeLinejoin),this);}}
Uf.prototype.isMeshToonMaterial=!0;class Hf extends St{constructor(e){super(),(this.type="MeshNormalMaterial"),(this.bumpMap=null),(this.bumpScale=1),(this.normalMap=null),(this.normalMapType=bs),(this.normalScale=new J(1,1)),(this.displacementMap=null),(this.displacementScale=1),(this.displacementBias=0),(this.wireframe=!1),(this.wireframeLinewidth=1),(this.fog=!1),(this.flatShading=!1),this.setValues(e);}
copy(e){return(super.copy(e),(this.bumpMap=e.bumpMap),(this.bumpScale=e.bumpScale),(this.normalMap=e.normalMap),(this.normalMapType=e.normalMapType),this.normalScale.copy(e.normalScale),(this.displacementMap=e.displacementMap),(this.displacementScale=e.displacementScale),(this.displacementBias=e.displacementBias),(this.wireframe=e.wireframe),(this.wireframeLinewidth=e.wireframeLinewidth),(this.flatShading=e.flatShading),this);}}
Hf.prototype.isMeshNormalMaterial=!0;class Ja extends St{constructor(e){super(),(this.type="MeshLambertMaterial"),(this.color=new ve(16777215)),(this.map=null),(this.lightMap=null),(this.lightMapIntensity=1),(this.aoMap=null),(this.aoMapIntensity=1),(this.emissive=new ve(0)),(this.emissiveIntensity=1),(this.emissiveMap=null),(this.specularMap=null),(this.alphaMap=null),(this.envMap=null),(this.combine=il),(this.reflectivity=1),(this.refractionRatio=0.98),(this.wireframe=!1),(this.wireframeLinewidth=1),(this.wireframeLinecap="round"),(this.wireframeLinejoin="round"),this.setValues(e);}
copy(e){return(super.copy(e),this.color.copy(e.color),(this.map=e.map),(this.lightMap=e.lightMap),(this.lightMapIntensity=e.lightMapIntensity),(this.aoMap=e.aoMap),(this.aoMapIntensity=e.aoMapIntensity),this.emissive.copy(e.emissive),(this.emissiveMap=e.emissiveMap),(this.emissiveIntensity=e.emissiveIntensity),(this.specularMap=e.specularMap),(this.alphaMap=e.alphaMap),(this.envMap=e.envMap),(this.combine=e.combine),(this.reflectivity=e.reflectivity),(this.refractionRatio=e.refractionRatio),(this.wireframe=e.wireframe),(this.wireframeLinewidth=e.wireframeLinewidth),(this.wireframeLinecap=e.wireframeLinecap),(this.wireframeLinejoin=e.wireframeLinejoin),this);}}
Ja.prototype.isMeshLambertMaterial=!0;class Gf extends St{constructor(e){super(),(this.defines={MATCAP:""}),(this.type="MeshMatcapMaterial"),(this.color=new ve(16777215)),(this.matcap=null),(this.map=null),(this.bumpMap=null),(this.bumpScale=1),(this.normalMap=null),(this.normalMapType=bs),(this.normalScale=new J(1,1)),(this.displacementMap=null),(this.displacementScale=1),(this.displacementBias=0),(this.alphaMap=null),(this.flatShading=!1),this.setValues(e);}
copy(e){return(super.copy(e),(this.defines={MATCAP:""}),this.color.copy(e.color),(this.matcap=e.matcap),(this.map=e.map),(this.bumpMap=e.bumpMap),(this.bumpScale=e.bumpScale),(this.normalMap=e.normalMap),(this.normalMapType=e.normalMapType),this.normalScale.copy(e.normalScale),(this.displacementMap=e.displacementMap),(this.displacementScale=e.displacementScale),(this.displacementBias=e.displacementBias),(this.alphaMap=e.alphaMap),(this.flatShading=e.flatShading),this);}}
Gf.prototype.isMeshMatcapMaterial=!0;class Vf extends Yt{constructor(e){super(),(this.type="LineDashedMaterial"),(this.scale=1),(this.dashSize=3),(this.gapSize=1),this.setValues(e);}
copy(e){return(super.copy(e),(this.scale=e.scale),(this.dashSize=e.dashSize),(this.gapSize=e.gapSize),this);}}
Vf.prototype.isLineDashedMaterial=!0;const ME={ShadowMaterial:Of,SpriteMaterial:vu,RawShaderMaterial:kf,ShaderMaterial:kt,PointsMaterial:Ts,MeshPhysicalMaterial:Nf,MeshStandardMaterial:dl,MeshPhongMaterial:zf,MeshToonMaterial:Uf,MeshNormalMaterial:Hf,MeshLambertMaterial:Ja,MeshDepthMaterial:_u,MeshDistanceMaterial:yu,MeshBasicMaterial:_i,MeshMatcapMaterial:Gf,LineDashedMaterial:Vf,LineBasicMaterial:Yt,Material:St,};St.fromType=function(s){return new ME[s]();};const dt={arraySlice:function(s,e,t){return dt.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t);},convertArray:function(s,e,t){return!s||(!t&&s.constructor===e)?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s);},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView);},getKeyframeOrder:function(s){function e(i,r){return s[i]-s[r];}
const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n;},sortedArray:function(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l];}
return i;},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)
if(Array.isArray(o))
do
(o=r[n]),o!==void 0&&(e.push(r.time),t.push.apply(t,o)),(r=s[i++]);while(r!==void 0);else if(o.toArray!==void 0)
do
(o=r[n]),o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),(r=s[i++]);while(r!==void 0);else
do
(o=r[n]),o!==void 0&&(e.push(r.time),t.push(o)),(r=s[i++]);while(r!==void 0);},subclip:function(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<t||p>=n)){h.push(c.times[f]);for(let g=0;g<u;++g)d.push(c.values[f*u+g]);}}
h.length!==0&&((c.times=dt.convertArray(h,c.times.constructor)),(c.values=dt.convertArray(d,c.values.constructor)),o.push(c));}
r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)
a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r;},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(_){return _.name===a.name&&_.ValueTypeName===l;});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let g;if(r<=a.times[0]){const _=u,m=h-u;g=dt.arraySlice(a.values,_,m);}else if(r>=a.times[p]){const _=p*h+u,m=_+h-u;g=dt.arraySlice(a.values,_,m);}else{const _=a.createInterpolant(),m=u,w=h-u;_.evaluate(r),(g=dt.arraySlice(_.resultBuffer,m,w));}
l==="quaternion"&&new Ht().fromArray(g).normalize().conjugate().toArray(g);const y=c.times.length;for(let _=0;_<y;++_){const m=_*f+d;if(l==="quaternion")
Ht.multiplyQuaternionsFlat(c.values,m,g,0,c.values,m);else{const w=f-d*2;for(let v=0;v<w;++v)c.values[m+v]-=g[v];}}}
return(s.blendMode=bf),s;},};class Ui{constructor(e,t,n,i){(this.parameterPositions=e),(this._cachedIndex=0),(this.resultBuffer=i!==void 0?i:new t.constructor(n)),(this.sampleValues=t),(this.valueSize=n),(this.settings=null),(this.DefaultSettings_={});}
evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return((n=t.length),(this._cachedIndex=n),this.afterEnd_(n-1,e,r));}
if(n===a)break;if(((r=i),(i=t[++n]),e<i))break t;}
o=t.length;break n;}
if(!(e>=r)){const a=t[1];e<a&&((n=2),(r=a));for(let l=n-2;;){if(r===void 0)
return(this._cachedIndex=0),this.beforeStart_(0,e,i);if(n===l)break;if(((i=r),(r=t[--n-1]),e>=r))break t;}
(o=n),(n=0);break n;}
break e;}
for(;n<o;){const a=(n+o)>>>1;e<t[a]?(o=a):(n=a+1);}
if(((i=t[n]),(r=t[n-1]),r===void 0))
return(this._cachedIndex=0),this.beforeStart_(0,e,i);if(i===void 0)
return((n=t.length),(this._cachedIndex=n),this.afterEnd_(n-1,r,e));}
(this._cachedIndex=n),this.intervalChanged_(n,r,i);}
return this.interpolate_(n,r,e,i);}
getSettings_(){return this.settings||this.DefaultSettings_;}
copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t;}
interpolate_(){throw new Error("call to abstract method");}
intervalChanged_(){}}
Ui.prototype.beforeStart_=Ui.prototype.copySampleValue_;Ui.prototype.afterEnd_=Ui.prototype.copySampleValue_;class Dy extends Ui{constructor(e,t,n,i){super(e,t,n,i),(this._weightPrev=-0),(this._offsetPrev=-0),(this._weightNext=-0),(this._offsetNext=-0),(this.DefaultSettings_={endingStart:jr,endingEnd:jr});}
intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)
switch(this.getSettings_().endingStart){case Jr:(r=e),(a=2*t-n);break;case Va:(r=i.length-2),(a=t+i[r]-i[r+1]);break;default:(r=e),(a=n);}
if(l===void 0)
switch(this.getSettings_().endingEnd){case Jr:(o=e),(l=2*n-t);break;case Va:(o=1),(l=n+i[1]-i[0]);break;default:(o=e-1),(l=t);}
const c=(n-t)*0.5,u=this.valueSize;(this._weightPrev=c/(t-a)),(this._weightNext=c/(l-n)),(this._offsetPrev=r*u),(this._offsetNext=o*u);}
interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),g=p*p,y=g*p,_=-d*y+2*d*g-d*p,m=(1+d)*y+(-1.5-2*d)*g+(-0.5+d)*p+1,w=(-1-f)*y+(1.5+f)*g+0.5*p,v=f*y-f*g;for(let x=0;x!==a;++x)
r[x]=_*o[u+x]+m*o[c+x]+w*o[l+x]+v*o[h+x];return r;}}
class Wf extends Ui{constructor(e,t,n,i){super(e,t,n,i);}
interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r;}}
class Iy extends Ui{constructor(e,t,n,i){super(e,t,n,i);}
interpolate_(e){return this.copySampleValue_(e-1);}}
class ei{constructor(e,t,n,i){if(e===void 0)
throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)
throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);(this.name=e),(this.times=dt.convertArray(t,this.TimeBufferType)),(this.values=dt.convertArray(n,this.ValueBufferType)),this.setInterpolation(i||this.DefaultInterpolation);}
static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:dt.convertArray(e.times,Array),values:dt.convertArray(e.values,Array),};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i);}
return(n.type=e.ValueTypeName),n;}
InterpolantFactoryMethodDiscrete(e){return new Iy(this.times,this.values,this.getValueSize(),e);}
InterpolantFactoryMethodLinear(e){return new Wf(this.times,this.values,this.getValueSize(),e);}
InterpolantFactoryMethodSmooth(e){return new Dy(this.times,this.values,this.getValueSize(),e);}
setInterpolation(e){let t;switch(e){case Ha:t=this.InterpolantFactoryMethodDiscrete;break;case Ga:t=this.InterpolantFactoryMethodLinear;break;case Sc:t=this.InterpolantFactoryMethodSmooth;break;}
if(t===void 0){const n="unsupported interpolation for "+
this.ValueTypeName+
" keyframe track named "+
this.name;if(this.createInterpolant===void 0)
if(e!==this.DefaultInterpolation)
this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this;}
return(this.createInterpolant=t),this;}
getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ha;case this.InterpolantFactoryMethodLinear:return Ga;case this.InterpolantFactoryMethodSmooth:return Sc;}}
getValueSize(){return this.values.length/this.times.length;}
shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;}
return this;}
scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;}
return this;}
trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if((++o,r!==0||o!==i)){r>=o&&((o=Math.max(o,1)),(r=o-1));const a=this.getValueSize();(this.times=dt.arraySlice(n,r,o)),(this.values=dt.arraySlice(this.values,r*a,o*a));}
return this;}
validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),(e=!1));const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),(e=!1));let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),(e=!1);break;}
if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),(e=!1);break;}
o=l;}
if(i!==void 0&&dt.isTypedArray(i))
for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),(e=!1);break;}}
return e;}
optimize(){const e=dt.arraySlice(this.times),t=dt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Sc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))
if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){const g=t[h+p];if(g!==t[d+p]||g!==t[f+p]){l=!0;break;}}}
if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f];}
++o;}}
if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o;}
return(o!==e.length?((this.times=dt.arraySlice(e,0,o)),(this.values=dt.arraySlice(t,0,o*n))):((this.times=e),(this.values=t)),this);}
clone(){const e=dt.arraySlice(this.times,0),t=dt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return(i.createInterpolant=this.createInterpolant),i;}}
ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=Ga;class Es extends ei{}
Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Ha;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class qf extends ei{}
qf.prototype.ValueTypeName="color";class Za extends ei{}
Za.prototype.ValueTypeName="number";class By extends Ui{constructor(e,t,n,i){super(e,t,n,i);}
interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ht.slerpFlat(r,0,o,c-a,o,c,l);return r;}}
class Zo extends ei{InterpolantFactoryMethodLinear(e){return new By(this.times,this.values,this.getValueSize(),e);}}
Zo.prototype.ValueTypeName="quaternion";Zo.prototype.DefaultInterpolation=Ga;Zo.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends ei{}
As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Ha;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class Ka extends ei{}
Ka.prototype.ValueTypeName="vector";class Qa{constructor(e,t=-1,n,i=uu){(this.name=e),(this.tracks=n),(this.duration=t),(this.blendMode=i),(this.uuid=Pn()),this.duration<0&&this.resetDuration();}
static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(TE(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return(r.uuid=e.uuid),r;}
static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,};for(let r=0,o=n.length;r!==o;++r)t.push(ei.toJSON(n[r]));return i;}
static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=dt.getKeyframeOrder(l);(l=dt.sortedArray(l,1,u)),(c=dt.sortedArray(c,1,u)),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Za(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n));}
return new this(e,-1,o);}
static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=(i.geometry&&i.geometry.animations)||i.animations;}
for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null;}
static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c);}}
const o=[];for(const a in i)
o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o;}
static parseAnimation(e,t){if(!e)
return(console.error("THREE.AnimationClip: No animation in JSONLoader data."),null);const n=function(h,d,f,p,g){if(f.length!==0){const y=[],_=[];dt.flattenJSON(f,y,_,p),y.length!==0&&g.push(new h(d,y,_));}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))
if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)
if(d[p].morphTargets)
for(let g=0;g<d[p].morphTargets.length;g++)
f[d[p].morphTargets[g]]=-1;for(const g in f){const y=[],_=[];for(let m=0;m!==d[p].morphTargets.length;++m){const w=d[p];y.push(w.time),_.push(w.morphTarget===g?1:0);}
i.push(new Za(".morphTargetInfluence["+g+"]",y,_));}
l=f.length*o;}else{const f=".bones["+t[h].name+"]";n(Ka,f+".position",d,"pos",i),n(Zo,f+".quaternion",d,"rot",i),n(Ka,f+".scale",d,"scl",i);}}
return i.length===0?null:new this(r,l,i,a);}
resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1]);}
return(this.duration=t),this;}
trim(){for(let e=0;e<this.tracks.length;e++)
this.tracks[e].trim(0,this.duration);return this;}
validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)
e=e&&this.tracks[t].validate();return e;}
optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this;}
clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode);}
toJSON(){return this.constructor.toJSON(this);}}
function SE(s){switch(s.toLowerCase()){case "scalar":case "double":case "float":case "number":case "integer":return Za;case "vector":case "vector2":case "vector3":case "vector4":return Ka;case "color":return qf;case "quaternion":return Zo;case "bool":case "boolean":return Es;case "string":return As;}
throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s);}
function TE(s){if(s.type===void 0)
throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=SE(s.type);if(s.times===void 0){const t=[],n=[];dt.flattenJSON(s.keys,t,n,"value"),(s.times=t),(s.values=n);}
return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation);}
const ys={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e);},get:function(s){if(this.enabled!==!1)return this.files[s];},remove:function(s){delete this.files[s];},clear:function(){this.files={};},};class Xf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];(this.onStart=void 0),(this.onLoad=e),(this.onProgress=t),(this.onError=n),(this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),(r=!0);}),(this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&((r=!1),i.onLoad!==void 0&&i.onLoad());}),(this.itemError=function(u){i.onError!==void 0&&i.onError(u);}),(this.resolveURL=function(u){return l?l(u):u;}),(this.setURLModifier=function(u){return(l=u),this;}),(this.addHandler=function(u,h){return c.push(u,h),this;}),(this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this;}),(this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],p=c[h+1];if((f.global&&(f.lastIndex=0),f.test(u)))return p;}
return null;});}}
const Fy=new Xf();class pn{constructor(e){(this.manager=e!==void 0?e:Fy),(this.crossOrigin="anonymous"),(this.withCredentials=!1),(this.path=""),(this.resourcePath=""),(this.requestHeader={});}
load(){}
loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r);});}
parse(){}
setCrossOrigin(e){return(this.crossOrigin=e),this;}
setWithCredentials(e){return(this.withCredentials=e),this;}
setPath(e){return(this.path=e),this;}
setResourcePath(e){return(this.resourcePath=e),this;}
setRequestHeader(e){return(this.requestHeader=e),this;}}
const Mi={};class gi extends pn{constructor(e){super(e);}
load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),(e=this.manager.resolveURL(e));const r=ys.get(e);if(r!==void 0)
return(this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e);},0),r);if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:i});return;}
(Mi[e]=[]),Mi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",}),a=this.mimeType,l=this.responseType;fetch(o).then((c)=>{if(c.status===200||c.status===0){if((c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0))
return c;const u=Mi[e],h=c.body.getReader(),d=c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let g=0;const y=new ReadableStream({start(_){m();function m(){h.read().then(({done:w,value:v})=>{if(w)_.close();else{g+=v.byteLength;const x=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:f,});for(let M=0,S=u.length;M<S;M++){const T=u[M];T.onProgress&&T.onProgress(x);}
_.enqueue(v),m();}});}},});return new Response(y);}else
throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`);}).then((c)=>{switch(l){case "arraybuffer":return c.arrayBuffer();case "blob":return c.blob();case "document":return c.text().then((u)=>new DOMParser().parseFromString(u,a));case "json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then((p)=>f.decode(p));}}}).then((c)=>{ys.add(e,c);const u=Mi[e];delete Mi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c);}}).catch((c)=>{const u=Mi[e];if(u===void 0)throw(this.manager.itemError(e),c);delete Mi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c);}
this.manager.itemError(e);}).finally(()=>{this.manager.itemEnd(e);}),this.manager.itemStart(e);}
setResponseType(e){return(this.responseType=e),this;}
setMimeType(e){return(this.mimeType=e),this;}}
class EE extends pn{constructor(e){super(e);}
load(e,t,n,i){const r=this,o=new gi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)));}catch(l){i?i(l):console.error(l),r.manager.itemError(e);}},n,i);}
parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Qa.parse(e[n]);t.push(i);}
return t;}}
class AE extends pn{constructor(e){super(e);}
load(e,t,n,i){const r=this,o=[],a=new Lf(),l=new gi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function u(h){l.load(e[h],function(d){const f=r.parse(d,!0);(o[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps,}),(c+=1),c===6&&(f.mipmapCount===1&&(a.minFilter=Ke),(a.image=o),(a.format=f.format),(a.needsUpdate=!0),t&&t(a));},n,i);}
if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)u(h);else
l.load(e,function(h){const d=r.parse(h,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let g=0;g<d.mipmapCount;g++)
o[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+g]),(o[p].format=d.format),(o[p].width=d.width),(o[p].height=d.height);}
a.image=o;}else
(a.image.width=d.width),(a.image.height=d.height),(a.mipmaps=d.mipmaps);d.mipmapCount===1&&(a.minFilter=Ke),(a.format=d.format),(a.needsUpdate=!0),t&&t(a);},n,i);return a;}}
class el extends pn{constructor(e){super(e);}
load(e,t,n,i){this.path!==void 0&&(e=this.path+e),(e=this.manager.resolveURL(e));const r=this,o=ys.get(e);if(o!==void 0)
return(r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e);},0),o);const a=qa("img");function l(){u(),ys.add(e,this),t&&t(this),r.manager.itemEnd(e);}
function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e);}
function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1);}
return(a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),(a.src=e),a);}}
class Oy extends pn{constructor(e){super(e);}
load(e,t,n,i){const r=new jo(),o=new el(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){(r.images[c]=u),a++,a===6&&((r.needsUpdate=!0),t&&t(r));},void 0,i);}
for(let c=0;c<e.length;++c)l(c);return r;}}
class ky extends pn{constructor(e){super(e);}
load(e,t,n,i){const r=this,o=new as(),a=new gi(this.manager);return(a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){const c=r.parse(l);!c||(c.image!==void 0?(o.image=c.image):c.data!==void 0&&((o.image.width=c.width),(o.image.height=c.height),(o.image.data=c.data)),(o.wrapS=c.wrapS!==void 0?c.wrapS:dn),(o.wrapT=c.wrapT!==void 0?c.wrapT:dn),(o.magFilter=c.magFilter!==void 0?c.magFilter:Ke),(o.minFilter=c.minFilter!==void 0?c.minFilter:Ke),(o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1),c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&((o.mipmaps=c.mipmaps),(o.minFilter=ws)),c.mipmapCount===1&&(o.minFilter=Ke),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),(o.needsUpdate=!0),t&&t(o,c));},n,i),o);}}
class Ny extends pn{constructor(e){super(e);}
load(e,t,n,i){const r=new Dt(),o=new el(this.manager);return(o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){(r.image=a),(r.needsUpdate=!0),t!==void 0&&t(r);},n,i),r);}}
class Qn extends Ye{constructor(e,t=1){super(),(this.type="Light"),(this.color=new ve(e)),(this.intensity=t);}
dispose(){}
copy(e){return(super.copy(e),this.color.copy(e.color),(this.intensity=e.intensity),this);}
toJSON(e){const t=super.toJSON(e);return((t.object.color=this.color.getHex()),(t.object.intensity=this.intensity),this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t);}}
Qn.prototype.isLight=!0;class $f extends Qn{constructor(e,t,n){super(e,n),(this.type="HemisphereLight"),this.position.copy(Ye.DefaultUp),this.updateMatrix(),(this.groundColor=new ve(t));}
copy(e){return(Qn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this);}}
$f.prototype.isHemisphereLight=!0;const Jm=new Pe(),Zm=new C(),Km=new C();class Yf{constructor(e){(this.camera=e),(this.bias=0),(this.normalBias=0),(this.radius=1),(this.blurSamples=8),(this.mapSize=new J(512,512)),(this.map=null),(this.mapPass=null),(this.matrix=new Pe()),(this.autoUpdate=!0),(this.needsUpdate=!1),(this._frustum=new ol()),(this._frameExtents=new J(1,1)),(this._viewportCount=1),(this._viewports=[new nt(0,0,1,1)]);}
getViewportCount(){return this._viewportCount;}
getFrustum(){return this._frustum;}
updateMatrices(e){const t=this.camera,n=this.matrix;Zm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zm),Km.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Km),t.updateMatrixWorld(),Jm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jm),n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse);}
getViewport(e){return this._viewports[e];}
getFrameExtents(){return this._frameExtents;}
dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose();}
copy(e){return((this.camera=e.camera.clone()),(this.bias=e.bias),(this.radius=e.radius),this.mapSize.copy(e.mapSize),this);}
clone(){return new this.constructor().copy(this);}
toJSON(){const e={};return(this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),(e.camera=this.camera.toJSON(!1).object),delete e.camera.matrix,e);}}
class zy extends Yf{constructor(){super(new qt(50,1,0.5,500)),(this.focus=1);}
updateMatrices(e){const t=this.camera,n=Wa*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&((t.fov=n),(t.aspect=i),(t.far=r),t.updateProjectionMatrix()),super.updateMatrices(e);}
copy(e){return super.copy(e),(this.focus=e.focus),this;}}
zy.prototype.isSpotLightShadow=!0;class jf extends Qn{constructor(e,t,n=0,i=Math.PI/3,r=0,o=1){super(e,t),(this.type="SpotLight"),this.position.copy(Ye.DefaultUp),this.updateMatrix(),(this.target=new Ye()),(this.distance=n),(this.angle=i),(this.penumbra=r),(this.decay=o),(this.shadow=new zy());}
get power(){return this.intensity*Math.PI;}
set power(e){this.intensity=e/Math.PI;}
dispose(){this.shadow.dispose();}
copy(e){return(super.copy(e),(this.distance=e.distance),(this.angle=e.angle),(this.penumbra=e.penumbra),(this.decay=e.decay),(this.target=e.target.clone()),(this.shadow=e.shadow.clone()),this);}}
jf.prototype.isSpotLight=!0;const Qm=new Pe(),ha=new C(),Ph=new C();class Uy extends Yf{constructor(){super(new qt(90,1,0.5,500)),(this._frameExtents=new J(4,2)),(this._viewportCount=6),(this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1),]),(this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0),]),(this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1),]);}
updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&((n.far=r),n.updateProjectionMatrix()),ha.setFromMatrixPosition(e.matrixWorld),n.position.copy(ha),Ph.copy(n.position),Ph.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ph),n.updateMatrixWorld(),i.makeTranslation(-ha.x,-ha.y,-ha.z),Qm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qm);}}
Uy.prototype.isPointLightShadow=!0;class Jf extends Qn{constructor(e,t,n=0,i=1){super(e,t),(this.type="PointLight"),(this.distance=n),(this.decay=i),(this.shadow=new Uy());}
get power(){return this.intensity*4*Math.PI;}
set power(e){this.intensity=e/(4*Math.PI);}
dispose(){this.shadow.dispose();}
copy(e){return(super.copy(e),(this.distance=e.distance),(this.decay=e.decay),(this.shadow=e.shadow.clone()),this);}}
Jf.prototype.isPointLight=!0;class Hy extends Yf{constructor(){super(new Ms(-5,5,5,-5,0.5,500));}}
Hy.prototype.isDirectionalLightShadow=!0;class Zf extends Qn{constructor(e,t){super(e,t),(this.type="DirectionalLight"),this.position.copy(Ye.DefaultUp),this.updateMatrix(),(this.target=new Ye()),(this.shadow=new Hy());}
dispose(){this.shadow.dispose();}
copy(e){return(super.copy(e),(this.target=e.target.clone()),(this.shadow=e.shadow.clone()),this);}}
Zf.prototype.isDirectionalLight=!0;class Kf extends Qn{constructor(e,t){super(e,t),(this.type="AmbientLight");}}
Kf.prototype.isAmbientLight=!0;class Qf extends Qn{constructor(e,t,n=10,i=10){super(e,t),(this.type="RectAreaLight"),(this.width=n),(this.height=i);}
get power(){return this.intensity*this.width*this.height*Math.PI;}
set power(e){this.intensity=e/(this.width*this.height*Math.PI);}
copy(e){return(super.copy(e),(this.width=e.width),(this.height=e.height),this);}
toJSON(e){const t=super.toJSON(e);return(t.object.width=this.width),(t.object.height=this.height),t;}}
Qf.prototype.isRectAreaLight=!0;class ep{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C());}
set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this;}
zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this;}
getAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return(t.copy(o[0]).multiplyScalar(0.282095),t.addScaledVector(o[1],0.488603*i),t.addScaledVector(o[2],0.488603*r),t.addScaledVector(o[3],0.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],0.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],0.546274*(n*n-i*i)),t);}
getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return(t.copy(o[0]).multiplyScalar(0.886227),t.addScaledVector(o[1],2*0.511664*i),t.addScaledVector(o[2],2*0.511664*r),t.addScaledVector(o[3],2*0.511664*n),t.addScaledVector(o[4],2*0.429043*n*i),t.addScaledVector(o[5],2*0.429043*i*r),t.addScaledVector(o[6],0.743125*r*r-0.247708),t.addScaledVector(o[7],2*0.429043*n*r),t.addScaledVector(o[8],0.429043*(n*n-i*i)),t);}
add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this;}
addScaledSH(e,t){for(let n=0;n<9;n++)
this.coefficients[n].addScaledVector(e.coefficients[n],t);return this;}
scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this;}
lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this;}
equals(e){for(let t=0;t<9;t++)
if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0;}
copy(e){return this.set(e.coefficients);}
clone(){return new this.constructor().copy(this);}
fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this;}
toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e;}
static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;(t[0]=0.282095),(t[1]=0.488603*i),(t[2]=0.488603*r),(t[3]=0.488603*n),(t[4]=1.092548*n*i),(t[5]=1.092548*i*r),(t[6]=0.315392*(3*r*r-1)),(t[7]=1.092548*n*r),(t[8]=0.546274*(n*n-i*i));}}
ep.prototype.isSphericalHarmonics3=!0;class fl extends Qn{constructor(e=new ep(),t=1){super(void 0,t),(this.sh=e);}
copy(e){return super.copy(e),this.sh.copy(e.sh),this;}
fromJSON(e){return(this.intensity=e.intensity),this.sh.fromArray(e.sh),this;}
toJSON(e){const t=super.toJSON(e);return(t.object.sh=this.sh.toArray()),t;}}
fl.prototype.isLightProbe=!0;class Gy extends pn{constructor(e){super(e),(this.textures={});}
load(e,t,n,i){const r=this,o=new gi(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)));}catch(l){i?i(l):console.error(l),r.manager.itemError(e);}},n,i);}
parse(e){const t=this.textures;function n(r){return(t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]);}
const i=St.fromType(e.type);if((e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?(i.vertexColors=e.vertexColors>0):(i.vertexColors=e.vertexColors)),e.uniforms!==void 0))
for(const r in e.uniforms){const o=e.uniforms[r];switch(((i.uniforms[r]={}),o.type)){case "t":i.uniforms[r].value=n(o.value);break;case "c":i.uniforms[r].value=new ve().setHex(o.value);break;case "v2":i.uniforms[r].value=new J().fromArray(o.value);break;case "v3":i.uniforms[r].value=new C().fromArray(o.value);break;case "v4":i.uniforms[r].value=new nt().fromArray(o.value);break;case "m3":i.uniforms[r].value=new Ut().fromArray(o.value);break;case "m4":i.uniforms[r].value=new Pe().fromArray(o.value);break;default:i.uniforms[r].value=o.value;}}
if((e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0))
for(const r in e.extensions)i.extensions[r]=e.extensions[r];if((e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0)){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),(i.normalScale=new J().fromArray(r));}
return(e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i);}
setTextures(e){return(this.textures=e),this;}}
class Qc{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t));}catch{return t;}}
static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1);}
static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e);}}
class tp extends Be{constructor(){super(),(this.type="InstancedBufferGeometry"),(this.instanceCount=1/0);}
copy(e){return super.copy(e),(this.instanceCount=e.instanceCount),this;}
clone(){return new this.constructor().copy(this);}
toJSON(){const e=super.toJSON(this);return((e.instanceCount=this.instanceCount),(e.isInstancedBufferGeometry=!0),e);}}
tp.prototype.isInstancedBufferGeometry=!0;class Vy extends pn{constructor(e){super(e);}
load(e,t,n,i){const r=this,o=new gi(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)));}catch(l){i?i(l):console.error(l),r.manager.itemError(e);}},n,i);}
parse(e){const t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];const y=f.interleavedBuffers[p],_=r(f,y.buffer),m=io(y.type,_),w=new Ss(m,y.stride);return(w.uuid=y.uuid),(t[p]=w),w;}
function r(f,p){if(n[p]!==void 0)return n[p];const y=f.arrayBuffers[p],_=new Uint32Array(y).buffer;return(n[p]=_),_;}
const o=e.isInstancedBufferGeometry?new tp():new Be(),a=e.data.index;if(a!==void 0){const f=io(a.type,a.array);o.setIndex(new Xe(f,1));}
const l=e.data.attributes;for(const f in l){const p=l[f];let g;if(p.isInterleavedBufferAttribute){const y=i(e.data,p.data);g=new mr(y,p.itemSize,p.offset,p.normalized);}else{const y=io(p.type,p.array),_=p.isInstancedBufferAttribute?ms:Xe;g=new _(y,p.itemSize,p.normalized);}
p.name!==void 0&&(g.name=p.name),p.usage!==void 0&&g.setUsage(p.usage),p.updateRange!==void 0&&((g.updateRange.offset=p.updateRange.offset),(g.updateRange.count=p.updateRange.count)),o.setAttribute(f,g);}
const c=e.data.morphAttributes;if(c)
for(const f in c){const p=c[f],g=[];for(let y=0,_=p.length;y<_;y++){const m=p[y];let w;if(m.isInterleavedBufferAttribute){const v=i(e.data,m.data);w=new mr(v,m.itemSize,m.offset,m.normalized);}else{const v=io(m.type,m.array);w=new Xe(v,m.itemSize,m.normalized);}
m.name!==void 0&&(w.name=m.name),g.push(w);}
o.morphAttributes[f]=g;}
e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)
for(let f=0,p=h.length;f!==p;++f){const g=h[f];o.addGroup(g.start,g.count,g.materialIndex);}
const d=e.data.boundingSphere;if(d!==void 0){const f=new C();d.center!==void 0&&f.fromArray(d.center),(o.boundingSphere=new wr(f,d.radius));}
return(e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o);}}
class CE extends pn{constructor(e){super(e);}
load(e,t,n,i){const r=this,o=this.path===""?Qc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new gi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l);}catch(h){i!==void 0&&i(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return;}
const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return;}
r.parse(c,t);},n,i);}
async loadAsync(e,t){const n=this,i=this.path===""?Qc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new gi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(e,t),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")
throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a);}
parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(c);}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,r,l,a,n),u=this.parseSkeletons(e.skeletons,c);if((this.bindSkeletons(c,u),t!==void 0)){let h=!1;for(const d in o)
if(o[d]instanceof HTMLImageElement){h=!0;break;}
h===!1&&t(c);}
return c;}
async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,i,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l;}
parseShapes(e){const t={};if(e!==void 0)
for(let n=0,i=e.length;n<i;n++){const r=new hi().fromJSON(e[n]);t[r.uuid]=r;}
return t;}
parseSkeletons(e,t){const n={},i={};if((t.traverse(function(r){r.isBone&&(i[r.uuid]=r);}),e!==void 0))
for(let r=0,o=e.length;r<o;r++){const a=new Su().fromJSON(e[r],i);n[a.uuid]=a;}
return n;}
parseGeometries(e,t){const n={};if(e!==void 0){const i=new Vy();for(let r=0,o=e.length;r<o;r++){let a;const l=e[r];switch(l.type){case "BufferGeometry":case "InstancedBufferGeometry":a=i.parse(l);break;case "Geometry":console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported.");break;default:l.type in jm?(a=jm[l.type].fromJSON(l,t)):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`);}
(a.uuid=l.uuid),l.name!==void 0&&(a.name=l.name),a.isBufferGeometry===!0&&l.userData!==void 0&&(a.userData=l.userData),(n[l.uuid]=a);}}
return n;}
parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new Gy();r.setTextures(t);for(let o=0,a=e.length;o<a;o++){const l=e[o];if(l.type==="MultiMaterial"){const c=[];for(let u=0;u<l.materials.length;u++){const h=l.materials[u];n[h.uuid]===void 0&&(n[h.uuid]=r.parse(h)),c.push(n[h.uuid]);}
i[l.uuid]=c;}else
n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),(i[l.uuid]=n[l.uuid]);}}
return i;}
parseAnimations(e){const t={};if(e!==void 0)
for(let n=0;n<e.length;n++){const i=e[n],r=Qa.parse(i);t[r.uuid]=r;}
return t;}
parseImages(e,t){const n=this,i={};let r;function o(l){return(n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l);},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l);}));}
function a(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(u);}else
return l.data?{data:io(l.type,l.data),width:l.width,height:l.height}:null;}
if(e!==void 0&&e.length>0){const l=new Xf(t);(r=new el(l)),r.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const h=e[c],d=h.url;if(Array.isArray(d)){const f=[];for(let p=0,g=d.length;p<g;p++){const y=d[p],_=a(y);_!==null&&(_ instanceof HTMLImageElement?f.push(_):f.push(new as(_.data,_.width,_.height)));}
i[h.uuid]=new ro(f);}else{const f=a(h.url);i[h.uuid]=new ro(f);}}}
return i;}
async parseImagesAsync(e){const t=this,n={};let i;async function r(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await i.loadAsync(l);}else
return o.data?{data:io(o.type,o.data),width:o.width,height:o.height}:null;}
if(e!==void 0&&e.length>0){(i=new el(this.manager)),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){const l=e[o],c=l.url;if(Array.isArray(c)){const u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=await r(f);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new as(p.data,p.width,p.height)));}
n[l.uuid]=new ro(u);}else{const u=await r(l.url);n[l.uuid]=new ro(u);}}}
return n;}
parseTextures(e,t){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r]);}
const i={};if(e!==void 0)
for(let r=0,o=e.length;r<o;r++){const a=e[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=t[a.image],c=l.data;let u;Array.isArray(c)?((u=new jo()),c.length===6&&(u.needsUpdate=!0)):(c&&c.data?(u=new as()):(u=new Dt()),c&&(u.needsUpdate=!0)),(u.source=l),(u.uuid=a.uuid),a.name!==void 0&&(u.name=a.name),a.mapping!==void 0&&(u.mapping=n(a.mapping,LE)),a.offset!==void 0&&u.offset.fromArray(a.offset),a.repeat!==void 0&&u.repeat.fromArray(a.repeat),a.center!==void 0&&u.center.fromArray(a.center),a.rotation!==void 0&&(u.rotation=a.rotation),a.wrap!==void 0&&((u.wrapS=n(a.wrap[0],eg)),(u.wrapT=n(a.wrap[1],eg))),a.format!==void 0&&(u.format=a.format),a.type!==void 0&&(u.type=a.type),a.encoding!==void 0&&(u.encoding=a.encoding),a.minFilter!==void 0&&(u.minFilter=n(a.minFilter,tg)),a.magFilter!==void 0&&(u.magFilter=n(a.magFilter,tg)),a.anisotropy!==void 0&&(u.anisotropy=a.anisotropy),a.flipY!==void 0&&(u.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(u.unpackAlignment=a.unpackAlignment),a.userData!==void 0&&(u.userData=a.userData),(i[a.uuid]=u);}
return i;}
parseObject(e,t,n,i,r){let o;function a(d){return(t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]);}
function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,g=d.length;p<g;p++){const y=d[p];n[y]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",y),f.push(n[y]);}
return f;}
return(n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]);}}
function c(d){return(i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]);}
let u,h;switch(e.type){case "Scene":(o=new Bo()),e.background!==void 0&&(Number.isInteger(e.background)?(o.background=new ve(e.background)):(o.background=c(e.background))),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?(o.fog=new ll(e.fog.color,e.fog.near,e.fog.far)):e.fog.type==="FogExp2"&&(o.fog=new al(e.fog.color,e.fog.density)));break;case "PerspectiveCamera":(o=new qt(e.fov,e.aspect,e.near,e.far)),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case "OrthographicCamera":(o=new Ms(e.left,e.right,e.top,e.bottom,e.near,e.far)),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case "AmbientLight":o=new Kf(e.color,e.intensity);break;case "DirectionalLight":o=new Zf(e.color,e.intensity);break;case "PointLight":o=new Jf(e.color,e.intensity,e.distance,e.decay);break;case "RectAreaLight":o=new Qf(e.color,e.intensity,e.width,e.height);break;case "SpotLight":o=new jf(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case "HemisphereLight":o=new $f(e.color,e.groundColor,e.intensity);break;case "LightProbe":o=new fl().fromJSON(e);break;case "SkinnedMesh":(u=a(e.geometry)),(h=l(e.material)),(o=new bu(u,h)),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case "Mesh":(u=a(e.geometry)),(h=l(e.material)),(o=new ht(u,h));break;case "InstancedMesh":(u=a(e.geometry)),(h=l(e.material));const d=e.count,f=e.instanceMatrix,p=e.instanceColor;(o=new Af(u,h,d)),(o.instanceMatrix=new ms(new Float32Array(f.array),16)),p!==void 0&&(o.instanceColor=new ms(new Float32Array(p.array),p.itemSize));break;case "LOD":o=new My();break;case "Line":o=new zi(a(e.geometry),l(e.material));break;case "LineLoop":o=new Cf(a(e.geometry),l(e.material));break;case "LineSegments":o=new Mn(a(e.geometry),l(e.material));break;case "PointCloud":case "Points":o=new cl(a(e.geometry),l(e.material));break;case "Sprite":o=new wu(l(e.material));break;case "Group":o=new Zr();break;case "Bone":o=new Mu();break;default:o=new Ye();}
if(((o.uuid=e.uuid),e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0)){const d=e.children;for(let f=0;f<d.length;f++)
o.add(this.parseObject(d[f],t,n,i,r));}
if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const p=d[f];o.animations.push(r[p]);}}
if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const p=d[f],g=o.getObjectByProperty("uuid",p.object);g!==void 0&&o.addLevel(g,p.distance);}}
return o;}
bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix);}});}
setTexturePath(e){return(console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e));}}
const LE={UVMapping:cu,CubeReflectionMapping:dr,CubeRefractionMapping:fr,EquirectangularReflectionMapping:ka,EquirectangularRefractionMapping:Na,CubeUVReflectionMapping:Xo,CubeUVRefractionMapping:rl,},eg={RepeatWrapping:za,ClampToEdgeWrapping:dn,MirroredRepeatWrapping:Ua,},tg={NearestFilter:Ot,NearestMipmapNearestFilter:jc,NearestMipmapLinearFilter:Jc,LinearFilter:Ke,LinearMipmapNearestFilter:wf,LinearMipmapLinearFilter:ws,};class Wy extends pn{constructor(e){super(e),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),(this.options={premultiplyAlpha:"none"});}
setOptions(e){return(this.options=e),this;}
load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),(e=this.manager.resolveURL(e));const r=this,o=ys.get(e);if(o!==void 0)
return(r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e);},0),o);const a={};(a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include"),(a.headers=this.requestHeader),fetch(e,a).then(function(l){return l.blob();}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}));}).then(function(l){ys.add(e,l),t&&t(l),r.manager.itemEnd(e);}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e);}),r.manager.itemStart(e);}}
Wy.prototype.isImageBitmapLoader=!0;let ic;const np={getContext:function(){return(ic===void 0&&(ic=new(window.AudioContext||window.webkitAudioContext)()),ic);},setContext:function(s){ic=s;},};class qy extends pn{constructor(e){super(e);}
load(e,t,n,i){const r=this,o=new gi(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);np.getContext().decodeAudioData(l,function(u){t(u);});}catch(l){i?i(l):console.error(l),r.manager.itemError(e);}},n,i);}}
class Xy extends fl{constructor(e,t,n=1){super(void 0,n);const i=new ve().set(e),r=new ve().set(t),o=new C(i.r,i.g,i.b),a=new C(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(0.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c);}}
Xy.prototype.isHemisphereLightProbe=!0;class $y extends fl{constructor(e,t=1){super(void 0,t);const n=new ve().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI));}}
$y.prototype.isAmbientLightProbe=!0;const ng=new Pe(),ig=new Pe(),Pr=new Pe();class PE{constructor(){(this.type="StereoCamera"),(this.aspect=1),(this.eyeSep=0.064),(this.cameraL=new qt()),this.cameraL.layers.enable(1),(this.cameraL.matrixAutoUpdate=!1),(this.cameraR=new qt()),this.cameraR.layers.enable(2),(this.cameraR.matrixAutoUpdate=!1),(this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null,});}
update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){(t.focus=e.focus),(t.fov=e.fov),(t.aspect=e.aspect*this.aspect),(t.near=e.near),(t.far=e.far),(t.zoom=e.zoom),(t.eyeSep=this.eyeSep),Pr.copy(e.projectionMatrix);const i=t.eyeSep/2,r=(i*t.near)/t.focus,o=(t.near*Math.tan(os*t.fov*0.5))/t.zoom;let a,l;(ig.elements[12]=-i),(ng.elements[12]=i),(a=-o*t.aspect+r),(l=o*t.aspect+r),(Pr.elements[0]=(2*t.near)/(l-a)),(Pr.elements[8]=(l+a)/(l-a)),this.cameraL.projectionMatrix.copy(Pr),(a=-o*t.aspect-r),(l=o*t.aspect-r),(Pr.elements[0]=(2*t.near)/(l-a)),(Pr.elements[8]=(l+a)/(l-a)),this.cameraR.projectionMatrix.copy(Pr);}
this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(ig),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(ng);}}
class ip{constructor(e=!0){(this.autoStart=e),(this.startTime=0),(this.oldTime=0),(this.elapsedTime=0),(this.running=!1);}
start(){(this.startTime=rg()),(this.oldTime=this.startTime),(this.elapsedTime=0),(this.running=!0);}
stop(){this.getElapsedTime(),(this.running=!1),(this.autoStart=!1);}
getElapsedTime(){return this.getDelta(),this.elapsedTime;}
getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rg();(e=(t-this.oldTime)/1e3),(this.oldTime=t),(this.elapsedTime+=e);}
return e;}}
function rg(){return(typeof performance=="undefined"?Date:performance).now();}
const Rr=new C(),sg=new Ht(),RE=new C(),Dr=new C();class DE extends Ye{constructor(){super(),(this.type="AudioListener"),(this.context=np.getContext()),(this.gain=this.context.createGain()),this.gain.connect(this.context.destination),(this.filter=null),(this.timeDelta=0),(this._clock=new ip());}
getInput(){return this.gain;}
removeFilter(){return(this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),(this.filter=null)),this);}
getFilter(){return this.filter;}
setFilter(e){return(this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),(this.filter=e),this.gain.connect(this.filter),this.filter.connect(this.context.destination),this);}
getMasterVolume(){return this.gain.gain.value;}
setMasterVolume(e){return(this.gain.gain.setTargetAtTime(e,this.context.currentTime,0.01),this);}
updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(((this.timeDelta=this._clock.getDelta()),this.matrixWorld.decompose(Rr,sg,RE),Dr.set(0,0,-1).applyQuaternion(sg),t.positionX)){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Rr.x,i),t.positionY.linearRampToValueAtTime(Rr.y,i),t.positionZ.linearRampToValueAtTime(Rr.z,i),t.forwardX.linearRampToValueAtTime(Dr.x,i),t.forwardY.linearRampToValueAtTime(Dr.y,i),t.forwardZ.linearRampToValueAtTime(Dr.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i);}else
t.setPosition(Rr.x,Rr.y,Rr.z),t.setOrientation(Dr.x,Dr.y,Dr.z,n.x,n.y,n.z);}}
class rp extends Ye{constructor(e){super(),(this.type="Audio"),(this.listener=e),(this.context=e.context),(this.gain=this.context.createGain()),this.gain.connect(e.getInput()),(this.autoplay=!1),(this.buffer=null),(this.detune=0),(this.loop=!1),(this.loopStart=0),(this.loopEnd=0),(this.offset=0),(this.duration=void 0),(this.playbackRate=1),(this.isPlaying=!1),(this.hasPlaybackControl=!0),(this.source=null),(this.sourceType="empty"),(this._startedAt=0),(this._progress=0),(this._connected=!1),(this.filters=[]);}
getOutput(){return this.gain;}
setNodeSource(e){return((this.hasPlaybackControl=!1),(this.sourceType="audioNode"),(this.source=e),this.connect(),this);}
setMediaElementSource(e){return((this.hasPlaybackControl=!1),(this.sourceType="mediaNode"),(this.source=this.context.createMediaElementSource(e)),this.connect(),this);}
setMediaStreamSource(e){return((this.hasPlaybackControl=!1),(this.sourceType="mediaStreamNode"),(this.source=this.context.createMediaStreamSource(e)),this.connect(),this);}
setBuffer(e){return((this.buffer=e),(this.sourceType="buffer"),this.autoplay&&this.play(),this);}
play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return;}
if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return;}
this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return((t.buffer=this.buffer),(t.loop=this.loop),(t.loopStart=this.loopStart),(t.loopEnd=this.loopEnd),(t.onended=this.onEnded.bind(this)),t.start(this._startedAt,this._progress+this.offset,this.duration),(this.isPlaying=!0),(this.source=t),this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect());}
pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return;}
return(this.isPlaying===!0&&((this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate),this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),(this.source.onended=null),(this.isPlaying=!1)),this);}
stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return;}
return((this._progress=0),this.source.stop(),(this.source.onended=null),(this.isPlaying=!1),this);}
connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)
this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput());}else this.source.connect(this.getOutput());return(this._connected=!0),this;}
disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)
this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput());}else this.source.disconnect(this.getOutput());return(this._connected=!1),this;}
getFilters(){return this.filters;}
setFilters(e){return(e||(e=[]),this._connected===!0?(this.disconnect(),(this.filters=e.slice()),this.connect()):(this.filters=e.slice()),this);}
setDetune(e){if(((this.detune=e),this.source.detune!==void 0))
return(this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,0.01),this);}
getDetune(){return this.detune;}
getFilter(){return this.getFilters()[0];}
setFilter(e){return this.setFilters(e?[e]:[]);}
setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return;}
return((this.playbackRate=e),this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,0.01),this);}
getPlaybackRate(){return this.playbackRate;}
onEnded(){this.isPlaying=!1;}
getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop;}
setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return;}
return((this.loop=e),this.isPlaying===!0&&(this.source.loop=this.loop),this);}
setLoopStart(e){return(this.loopStart=e),this;}
setLoopEnd(e){return(this.loopEnd=e),this;}
getVolume(){return this.gain.gain.value;}
setVolume(e){return(this.gain.gain.setTargetAtTime(e,this.context.currentTime,0.01),this);}}
const Ir=new C(),og=new Ht(),IE=new C(),Br=new C();class BE extends rp{constructor(e){super(e),(this.panner=this.context.createPanner()),(this.panner.panningModel="HRTF"),this.panner.connect(this.gain);}
getOutput(){return this.panner;}
getRefDistance(){return this.panner.refDistance;}
setRefDistance(e){return(this.panner.refDistance=e),this;}
getRolloffFactor(){return this.panner.rolloffFactor;}
setRolloffFactor(e){return(this.panner.rolloffFactor=e),this;}
getDistanceModel(){return this.panner.distanceModel;}
setDistanceModel(e){return(this.panner.distanceModel=e),this;}
getMaxDistance(){return this.panner.maxDistance;}
setMaxDistance(e){return(this.panner.maxDistance=e),this;}
setDirectionalCone(e,t,n){return((this.panner.coneInnerAngle=e),(this.panner.coneOuterAngle=t),(this.panner.coneOuterGain=n),this);}
updateMatrixWorld(e){if((super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1))
return;this.matrixWorld.decompose(Ir,og,IE),Br.set(0,0,1).applyQuaternion(og);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ir.x,n),t.positionY.linearRampToValueAtTime(Ir.y,n),t.positionZ.linearRampToValueAtTime(Ir.z,n),t.orientationX.linearRampToValueAtTime(Br.x,n),t.orientationY.linearRampToValueAtTime(Br.y,n),t.orientationZ.linearRampToValueAtTime(Br.z,n);}else t.setPosition(Ir.x,Ir.y,Ir.z),t.setOrientation(Br.x,Br.y,Br.z);}}
class Yy{constructor(e,t=2048){(this.analyser=e.context.createAnalyser()),(this.analyser.fftSize=t),(this.data=new Uint8Array(this.analyser.frequencyBinCount)),e.getOutput().connect(this.analyser);}
getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data;}
getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length;}}
class jy{constructor(e,t,n){(this.binding=e),(this.valueSize=n);let i,r,o;switch(t){case "quaternion":(i=this._slerp),(r=this._slerpAdditive),(o=this._setAdditiveIdentityQuaternion),(this.buffer=new Float64Array(n*6)),(this._workIndex=5);break;case "string":case "bool":(i=this._select),(r=this._select),(o=this._setAdditiveIdentityOther),(this.buffer=new Array(n*5));break;default:(i=this._lerp),(r=this._lerpAdditive),(o=this._setAdditiveIdentityNumeric),(this.buffer=new Float64Array(n*5));}
(this._mixBufferRegion=i),(this._mixBufferRegionAdditive=r),(this._setIdentity=o),(this._origIndex=3),(this._addIndex=4),(this.cumulativeWeight=0),(this.cumulativeWeightAdditive=0),(this.useCount=0),(this.referenceCount=0);}
accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t;}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i);}
this.cumulativeWeight=o;}
accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),(this.cumulativeWeightAdditive+=e);}
apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(((this.cumulativeWeight=0),(this.cumulativeWeightAdditive=0),r<1)){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t);}
o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)
if(n[l]!==n[l+t]){a.setValue(n,i);break;}}
saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+(r%n)];this._setIdentity(),(this.cumulativeWeight=0),(this.cumulativeWeightAdditive=0);}
restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e);}
_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0;}
_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),(this.buffer[this._addIndex*this.valueSize+3]=1);}
_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)
this.buffer[t+n]=this.buffer[e+n];}
_select(e,t,n,i,r){if(i>=0.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o];}
_slerp(e,t,n,i){Ht.slerpFlat(e,t,e,t,e,n,i);}
_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Ht.multiplyQuaternionsFlat(e,o,e,t,e,n),Ht.slerpFlat(e,t,e,t,e,o,i);}
_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i;}}
_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i;}}}
const sp="\\[\\]\\.:\\/",FE=new RegExp("["+sp+"]","g"),op="[^"+sp+"]",OE="[^"+sp.replace("\\.","")+"]",kE=/((?:WC+[\/:])*)/.source.replace("WC",op),NE=/(WCOD+)?/.source.replace("WCOD",OE),zE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",op),UE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",op),HE=new RegExp("^"+kE+NE+zE+UE+"$"),GE=["material","materials","bones"];class VE{constructor(e,t,n){const i=n||Ze.parseTrackName(t);(this._targetGroup=e),(this._bindings=e.subscribe_(t,i));}
getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t);}
setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)
n[i].setValue(e,t);}
bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)
e[t].bind();}
unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)
e[t].unbind();}}
class Ze{constructor(e,t,n){(this.path=t),(this.parsedPath=n||Ze.parseTrackName(t)),(this.node=Ze.findNode(e,this.parsedPath.nodeName)||e),(this.rootNode=e),(this.getValue=this._getValue_unbound),(this.setValue=this._setValue_unbound);}
static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n);}
static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(FE,"");}
static parseTrackName(e){const t=HE.exec(e);if(t===null)
throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6],},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);GE.indexOf(r)!==-1&&((n.nodeName=n.nodeName.substring(0,i)),(n.objectName=r));}
if(n.propertyName===null||n.propertyName.length===0)
throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n;}
static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)
return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n;}
if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l;}
return null;},i=n(e.children);if(i)return i;}
return null;}
_getValue_unavailable(){}
_setValue_unavailable(){}
_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName];}
_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i];}
_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex];}
_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t);}
_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t];}
_setValue_direct_setNeedsUpdate(e,t){(this.targetObject[this.propertyName]=e[t]),(this.targetObject.needsUpdate=!0);}
_setValue_direct_setMatrixWorldNeedsUpdate(e,t){(this.targetObject[this.propertyName]=e[t]),(this.targetObject.matrixWorldNeedsUpdate=!0);}
_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];}
_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0;}
_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0;}
_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t];}
_setValue_arrayElement_setNeedsUpdate(e,t){(this.resolvedProperty[this.propertyIndex]=e[t]),(this.targetObject.needsUpdate=!0);}
_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){(this.resolvedProperty[this.propertyIndex]=e[t]),(this.targetObject.matrixWorldNeedsUpdate=!0);}
_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t);}
_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),(this.targetObject.needsUpdate=!0);}
_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),(this.targetObject.matrixWorldNeedsUpdate=!0);}
_getValue_unbound(e,t){this.bind(),this.getValue(e,t);}
_setValue_unbound(e,t){this.bind(),this.setValue(e,t);}
bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if((e||((e=Ze.findNode(this.rootNode,t.nodeName)||this.rootNode),(this.node=e)),(this.getValue=this._getValue_unavailable),(this.setValue=this._setValue_unavailable),!e)){console.error("THREE.PropertyBinding: Trying to update node for track: "+
this.path+
" but it wasn't found.");return;}
if(n){let c=t.objectIndex;switch(n){case "materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return;}
if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return;}
e=e.material.materials;break;case "bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return;}
e=e.skeleton.bones;for(let u=0;u<e.length;u++)
if(e[u].name===c){c=u;break;}
break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return;}
e=e[n];}
if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return;}
e=e[c];}}
const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+
c+
"."+
i+
" but it wasn't found.",e);return;}
let a=this.Versioning.None;(this.targetObject=e),e.needsUpdate!==void 0?(a=this.Versioning.NeedsUpdate):e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return;}
if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return;}
e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r]);}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return;}}
(l=this.BindingType.ArrayElement),(this.resolvedProperty=o),(this.propertyIndex=r);}else
o.fromArray!==void 0&&o.toArray!==void 0?((l=this.BindingType.HasFromToArray),(this.resolvedProperty=o)):Array.isArray(o)?((l=this.BindingType.EntireArray),(this.resolvedProperty=o)):(this.propertyName=i);(this.getValue=this.GetterByBindingType[l]),(this.setValue=this.SetterByBindingTypeAndVersioning[l][a]);}
unbind(){(this.node=null),(this.getValue=this._getValue_unbound),(this.setValue=this._setValue_unbound);}}
Ze.Composite=VE;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3,};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2,};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray,];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate,],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate,],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,],];class Jy{constructor(){(this.uuid=Pn()),(this._objects=Array.prototype.slice.call(arguments)),(this.nCachedObjects_=0);const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)
e[arguments[n].uuid]=n;(this._paths=[]),(this._parsedPaths=[]),(this._bindings=[]),(this._bindingsIndicesByPath={});const t=this;this.stats={objects:{get total(){return t._objects.length;},get inUse(){return this.total-t.nCachedObjects_;},},get bindingsPerObject(){return t._bindings.length;},};}
add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,l=e.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const d=arguments[u],f=d.uuid;let p=t[f];if(p===void 0){(p=l++),(t[f]=p),e.push(d);for(let g=0,y=o;g!==y;++g)r[g].push(new Ze(d,n[g],i[g]));}else if(p<c){a=e[p];const g=--c,y=e[g];(t[y.uuid]=p),(e[p]=y),(t[f]=g),(e[g]=d);for(let _=0,m=o;_!==m;++_){const w=r[_],v=w[g];let x=w[p];(w[p]=v),x===void 0&&(x=new Ze(d,n[_],i[_])),(w[g]=x);}}else
e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");}
this.nCachedObjects_=c;}
remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,u=t[c];if(u!==void 0&&u>=r){const h=r++,d=e[h];(t[d.uuid]=u),(e[u]=d),(t[c]=h),(e[h]=l);for(let f=0,p=i;f!==p;++f){const g=n[f],y=g[h],_=g[u];(g[u]=y),(g[h]=_);}}}
this.nCachedObjects_=r;}
uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],u=c.uuid,h=t[u];if(h!==void 0)
if((delete t[u],h<r)){const d=--r,f=e[d],p=--o,g=e[p];(t[f.uuid]=h),(e[h]=f),(t[g.uuid]=d),(e[d]=g),e.pop();for(let y=0,_=i;y!==_;++y){const m=n[y],w=m[d],v=m[p];(m[h]=w),(m[d]=v),m.pop();}}else{const d=--o,f=e[d];d>0&&(t[f.uuid]=h),(e[h]=f),e.pop();for(let p=0,g=i;p!==g;++p){const y=n[p];(y[h]=y[d]),y.pop();}}}
this.nCachedObjects_=r;}
subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);(i=r.length),(n[e]=i),o.push(e),a.push(t),r.push(h);for(let d=u,f=l.length;d!==f;++d){const p=l[d];h[d]=new Ze(p,e,t);}
return h;}
unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];(t[c]=n),(o[n]=l),o.pop(),(r[n]=r[a]),r.pop(),(i[n]=i[a]),i.pop();}}}
Jy.prototype.isAnimationObjectGroup=!0;class WE{constructor(e,t,n=null,i=t.blendMode){(this._mixer=e),(this._clip=t),(this._localRoot=n),(this.blendMode=i);const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:jr,endingEnd:jr};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);(a[c]=u),(u.settings=l);}
(this._interpolantSettings=l),(this._interpolants=a),(this._propertyBindings=new Array(o)),(this._cacheIndex=null),(this._byClipCacheIndex=null),(this._timeScaleInterpolant=null),(this._weightInterpolant=null),(this.loop=X_),(this._loopCount=-1),(this._startTime=null),(this.time=0),(this.timeScale=1),(this._effectiveTimeScale=1),(this.weight=1),(this._effectiveWeight=1),(this.repetitions=1/0),(this.paused=!1),(this.enabled=!0),(this.clampWhenFinished=!1),(this.zeroSlopeAtStart=!0),(this.zeroSlopeAtEnd=!0);}
play(){return this._mixer._activateAction(this),this;}
stop(){return this._mixer._deactivateAction(this),this.reset();}
reset(){return((this.paused=!1),(this.enabled=!0),(this.time=0),(this._loopCount=-1),(this._startTime=null),this.stopFading().stopWarping());}
isRunning(){return(this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this));}
isScheduled(){return this._mixer._isActiveAction(this);}
startAt(e){return(this._startTime=e),this;}
setLoop(e,t){return(this.loop=e),(this.repetitions=t),this;}
setEffectiveWeight(e){return((this.weight=e),(this._effectiveWeight=this.enabled?e:0),this.stopFading());}
getEffectiveWeight(){return this._effectiveWeight;}
fadeIn(e){return this._scheduleFading(e,0,1);}
fadeOut(e){return this._scheduleFading(e,1,0);}
crossFadeFrom(e,t,n){if((e.fadeOut(t),this.fadeIn(t),n)){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t);}
return this;}
crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n);}
stopFading(){const e=this._weightInterpolant;return(e!==null&&((this._weightInterpolant=null),this._mixer._takeBackControlInterpolant(e)),this);}
setEffectiveTimeScale(e){return((this.timeScale=e),(this._effectiveTimeScale=this.paused?0:e),this.stopWarping());}
getEffectiveTimeScale(){return this._effectiveTimeScale;}
setDuration(e){return(this.timeScale=this._clip.duration/e),this.stopWarping();}
syncWith(e){return((this.time=e.time),(this.timeScale=e.timeScale),this.stopWarping());}
halt(e){return this.warp(this._effectiveTimeScale,0,e);}
warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&((a=i._lendControlInterpolant()),(this._timeScaleInterpolant=a));const l=a.parameterPositions,c=a.sampleValues;return(l[0]=r),(l[1]=r+n),(c[0]=e/o),(c[1]=t/o),this;}
stopWarping(){const e=this._timeScaleInterpolant;return(e!==null&&((this._timeScaleInterpolant=null),this._mixer._takeBackControlInterpolant(e)),this);}
getMixer(){return this._mixer;}
getClip(){return this._clip;}
getRoot(){return this._localRoot||this._mixer._root;}
_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return;}
const r=this._startTime;if(r!==null){const l=(e-r)*n;if(l<0||n===0)return;(this._startTime=null),(t=n*l);}
t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case bf:for(let u=0,h=l.length;u!==h;++u)
l[u].evaluate(o),c[u].accumulateAdditive(a);break;case uu:default:for(let u=0,h=l.length;u!==h;++u)
l[u].evaluate(o),c[u].accumulate(i,a);}}}
_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];(t*=i),e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1));}}
return(this._effectiveWeight=t),t;}
_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&((t*=n.evaluate(e)[0]),e>n.parameterPositions[1]&&(this.stopWarping(),t===0?(this.paused=!0):(this.timeScale=t)));}
return(this._effectiveTimeScale=t),t;}
_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===$_;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===q_){r===-1&&((this._loopCount=0),this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e;}
this.clampWhenFinished?(this.paused=!0):(this.enabled=!1),(this.time=i),this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1,});}}else{if((r===-1&&(e>=0?((r=0),this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0)){const a=Math.floor(i/t);(i-=t*a),(r+=Math.abs(a));const l=this.repetitions-r;if(l<=0)
this.clampWhenFinished?(this.paused=!0):(this.enabled=!1),(i=e>0?t:0),(this.time=i),this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1,});else{if(l===1){const c=e<0;this._setEndings(c,!c,o);}else this._setEndings(!1,!1,o);(this._loopCount=r),(this.time=i),this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a,});}}else this.time=i;if(o&&(r&1)===1)return t-i;}
return i;}
_setEndings(e,t,n){const i=this._interpolantSettings;n?((i.endingStart=Jr),(i.endingEnd=Jr)):(e?(i.endingStart=this.zeroSlopeAtStart?Jr:jr):(i.endingStart=Va),t?(i.endingEnd=this.zeroSlopeAtEnd?Jr:jr):(i.endingEnd=Va));}
_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&((o=i._lendControlInterpolant()),(this._weightInterpolant=o));const a=o.parameterPositions,l=o.sampleValues;return(a[0]=r),(l[0]=t),(a[1]=r+e),(l[1]=n),this;}}
class Zy extends Hi{constructor(e){super(),(this._root=e),this._initMemoryManager(),(this._accuIndex=0),(this.time=0),(this.timeScale=1);}
_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&((u={}),(c[l]=u));for(let h=0;h!==r;++h){const d=i[h],f=d.name;let p=u[f];if(p!==void 0)++p.referenceCount,(o[h]=p);else{if(((p=o[h]),p!==void 0)){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue;}
const g=t&&t._propertyBindings[h].binding.parsedPath;(p=new jy(Ze.create(n,f,g),d.ValueTypeName,d.getValueSize())),++p.referenceCount,this._addInactiveBinding(p,l,f),(o[h]=p);}
a[h].resultBuffer=p.buffer;}}
_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n);}
const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState());}
this._lendAction(e);}}
_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r));}
this._takeBackAction(e);}}
_initMemoryManager(){(this._actions=[]),(this._nActiveActions=0),(this._actionsByClip={}),(this._bindings=[]),(this._nActiveBindings=0),(this._bindingsByRootAndName={}),(this._controlInterpolants=[]),(this._nActiveControlInterpolants=0);const e=this;this.stats={actions:{get total(){return e._actions.length;},get inUse(){return e._nActiveActions;},},bindings:{get total(){return e._bindings.length;},get inUse(){return e._nActiveBindings;},},controlInterpolants:{get total(){return e._controlInterpolants.length;},get inUse(){return e._nActiveControlInterpolants;},},};}
_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions;}
_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)
(o={knownActions:[e],actionByRoot:{}}),(e._byClipCacheIndex=0),(r[t]=o);else{const a=o.knownActions;(e._byClipCacheIndex=a.length),a.push(e);}
(e._cacheIndex=i.length),i.push(e),(o.actionByRoot[n]=e);}
_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;(n._cacheIndex=i),(t[i]=n),t.pop(),(e._cacheIndex=null);const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;(c._byClipCacheIndex=u),(l[u]=c),l.pop(),(e._byClipCacheIndex=null);const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e);}
_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r);}}
_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];(e._cacheIndex=i),(t[i]=e),(r._cacheIndex=n),(t[n]=r);}
_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];(e._cacheIndex=i),(t[i]=e),(r._cacheIndex=n),(t[n]=r);}
_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&((o={}),(i[t]=o)),(o[n]=e),(e._cacheIndex=r.length),r.push(e);}
_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;(l._cacheIndex=c),(t[c]=l),t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i];}
_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];(e._cacheIndex=i),(t[i]=e),(r._cacheIndex=n),(t[n]=r);}
_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];(e._cacheIndex=i),(t[i]=e),(r._cacheIndex=n),(t[n]=r);}
_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return(n===void 0&&((n=new Wf(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer)),(n.__cacheIndex=t),(e[t]=n)),n);}
_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];(e.__cacheIndex=i),(t[i]=e),(r.__cacheIndex=n),(t[n]=r);}
clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Qa.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if((n===void 0&&(o!==null?(n=o.blendMode):(n=uu)),l!==void 0)){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;(c=l.knownActions[0]),o===null&&(o=c._clip);}
if(o===null)return null;const u=new WE(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u;}
existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Qa.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return(a!==void 0&&a.actionByRoot[i])||null;}
stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this;}
update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=(this.time+=e),r=Math.sign(e),o=(this._accuIndex^=1);for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this;}
setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e);}
getRoot(){return this._root;}
uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];(c._cacheIndex=null),(c._byClipCacheIndex=null),(h._cacheIndex=u),(t[u]=h),t.pop(),this._removeInactiveBindingsForAction(c);}
delete i[n];}}
uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l));}
const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)
for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a);}}
uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n));}}
Zy.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Wo{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),(e=arguments[1])),(this.value=e);}
clone(){return new Wo(this.value.clone===void 0?this.value:this.value.clone());}}
class Ky extends Ss{constructor(e,t,n=1){super(e,t),(this.meshPerAttribute=n);}
copy(e){return super.copy(e),(this.meshPerAttribute=e.meshPerAttribute),this;}
clone(e){const t=super.clone(e);return(t.meshPerAttribute=this.meshPerAttribute),t;}
toJSON(e){const t=super.toJSON(e);return((t.isInstancedInterleavedBuffer=!0),(t.meshPerAttribute=this.meshPerAttribute),t);}}
Ky.prototype.isInstancedInterleavedBuffer=!0;class Qy{constructor(e,t,n,i,r){(this.buffer=e),(this.type=t),(this.itemSize=n),(this.elementSize=i),(this.count=r),(this.version=0);}
set needsUpdate(e){e===!0&&this.version++;}
setBuffer(e){return(this.buffer=e),this;}
setType(e,t){return(this.type=e),(this.elementSize=t),this;}
setItemSize(e){return(this.itemSize=e),this;}
setCount(e){return(this.count=e),this;}}
Qy.prototype.isGLBufferAttribute=!0;class qE{constructor(e,t,n=0,i=1/0){(this.ray=new br(e,t)),(this.near=n),(this.far=i),(this.camera=null),(this.layers=new hu()),(this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{},});}
set(e,t){this.ray.set(e,t);}
setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,0.5).unproject(t).sub(this.ray.origin).normalize(),(this.camera=t)):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),(this.camera=t)):console.error("THREE.Raycaster: Unsupported camera type: "+t.type);}
intersectObject(e,t=!0,n=[]){return kd(e,this,n,t),n.sort(ag),n;}
intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)kd(e[i],this,n,t);return n.sort(ag),n;}}
function ag(s,e){return s.distance-e.distance;}
function kd(s,e,t,n){if((s.layers.test(e.layers)&&s.raycast(e,t),n===!0)){const i=s.children;for(let r=0,o=i.length;r<o;r++)kd(i[r],e,t,!0);}}
class Nd{constructor(e=1,t=0,n=0){return(this.radius=e),(this.phi=t),(this.theta=n),this;}
set(e,t,n){return(this.radius=e),(this.phi=t),(this.theta=n),this;}
copy(e){return((this.radius=e.radius),(this.phi=e.phi),(this.theta=e.theta),this);}
makeSafe(){return((this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi))),this);}
setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z);}
setFromCartesianCoords(e,t,n){return((this.radius=Math.sqrt(e*e+t*t+n*n)),this.radius===0?((this.theta=0),(this.phi=0)):((this.theta=Math.atan2(e,n)),(this.phi=Math.acos(Zt(t/this.radius,-1,1)))),this);}
clone(){return new this.constructor().copy(this);}}
class XE{constructor(e=1,t=0,n=0){return(this.radius=e),(this.theta=t),(this.y=n),this;}
set(e,t,n){return(this.radius=e),(this.theta=t),(this.y=n),this;}
copy(e){return((this.radius=e.radius),(this.theta=e.theta),(this.y=e.y),this);}
setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z);}
setFromCartesianCoords(e,t,n){return((this.radius=Math.sqrt(e*e+n*n)),(this.theta=Math.atan2(e,n)),(this.y=t),this);}
clone(){return new this.constructor().copy(this);}}
const lg=new J();class Ko{constructor(e=new J(1/0,1/0),t=new J(-1/0,-1/0)){(this.min=e),(this.max=t);}
set(e,t){return this.min.copy(e),this.max.copy(t),this;}
setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this;}
setFromCenterAndSize(e,t){const n=lg.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this;}
clone(){return new this.constructor().copy(this);}
copy(e){return this.min.copy(e.min),this.max.copy(e.max),this;}
makeEmpty(){return((this.min.x=this.min.y=1/0),(this.max.x=this.max.y=-1/0),this);}
isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y;}
getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5);}
getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min);}
expandByPoint(e){return this.min.min(e),this.max.max(e),this;}
expandByVector(e){return this.min.sub(e),this.max.add(e),this;}
expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this;}
containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y);}
containsBox(e){return(this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y);}
getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y));}
intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y);}
clampPoint(e,t){return t.copy(e).clamp(this.min,this.max);}
distanceToPoint(e){return lg.copy(e).clamp(this.min,this.max).sub(e).length();}
intersect(e){return this.min.max(e.min),this.max.min(e.max),this;}
union(e){return this.min.min(e.min),this.max.max(e.max),this;}
translate(e){return this.min.add(e),this.max.add(e),this;}
equals(e){return e.min.equals(this.min)&&e.max.equals(this.max);}}
Ko.prototype.isBox2=!0;const cg=new C(),rc=new C();class ex{constructor(e=new C(),t=new C()){(this.start=e),(this.end=t);}
set(e,t){return this.start.copy(e),this.end.copy(t),this;}
copy(e){return this.start.copy(e.start),this.end.copy(e.end),this;}
getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(0.5);}
delta(e){return e.subVectors(this.end,this.start);}
distanceSq(){return this.start.distanceToSquared(this.end);}
distance(){return this.start.distanceTo(this.end);}
at(e,t){return this.delta(t).multiplyScalar(e).add(this.start);}
closestPointToPointParameter(e,t){cg.subVectors(e,this.start),rc.subVectors(this.end,this.start);const n=rc.dot(rc);let r=rc.dot(cg)/n;return t&&(r=Zt(r,0,1)),r;}
closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start);}
applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this;}
equals(e){return e.start.equals(this.start)&&e.end.equals(this.end);}
clone(){return new this.constructor().copy(this);}}
const ug=new C();class $E extends Ye{constructor(e,t){super(),(this.light=e),this.light.updateMatrixWorld(),(this.matrix=e.matrixWorld),(this.matrixAutoUpdate=!1),(this.color=t);const n=new Be(),i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1,];for(let o=0,a=1,l=32;o<l;o++,a++){const c=(o/l)*Math.PI*2,u=(a/l)*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1);}
n.setAttribute("position",new Ce(i,3));const r=new Yt({fog:!1,toneMapped:!1});(this.cone=new Mn(n,r)),this.add(this.cone),this.update();}
dispose(){this.cone.geometry.dispose(),this.cone.material.dispose();}
update(){this.light.updateMatrixWorld();const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),ug.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(ug),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color);}}
const Ji=new C(),sc=new Pe(),Rh=new Pe();class tx extends Mn{constructor(e){const t=nx(e),n=new Be(),i=[],r=[],o=new ve(0,0,1),a=new ve(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b));}
n.setAttribute("position",new Ce(i,3)),n.setAttribute("color",new Ce(r,3));const l=new Yt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0,});super(n,l),(this.type="SkeletonHelper"),(this.isSkeletonHelper=!0),(this.root=e),(this.bones=t),(this.matrix=e.matrixWorld),(this.matrixAutoUpdate=!1);}
updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Rh.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(sc.multiplyMatrices(Rh,a.matrixWorld),Ji.setFromMatrixPosition(sc),i.setXYZ(o,Ji.x,Ji.y,Ji.z),sc.multiplyMatrices(Rh,a.parent.matrixWorld),Ji.setFromMatrixPosition(sc),i.setXYZ(o+1,Ji.x,Ji.y,Ji.z),(o+=2));}
(n.getAttribute("position").needsUpdate=!0),super.updateMatrixWorld(e);}}
function nx(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)
e.push.apply(e,nx(s.children[t]));return e;}
class YE extends ht{constructor(e,t,n){const i=new yr(t,4,2),r=new _i({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),(this.light=e),this.light.updateMatrixWorld(),(this.color=n),(this.type="PointLightHelper"),(this.matrix=this.light.matrixWorld),(this.matrixAutoUpdate=!1),this.update();}
dispose(){this.geometry.dispose(),this.material.dispose();}
update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color);}}
const jE=new C(),hg=new ve(),dg=new ve();class JE extends Ye{constructor(e,t,n){super(),(this.light=e),this.light.updateMatrixWorld(),(this.matrix=e.matrixWorld),(this.matrixAutoUpdate=!1),(this.color=n);const i=new gs(t);i.rotateY(Math.PI*0.5),(this.material=new _i({wireframe:!0,fog:!1,toneMapped:!1})),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new Xe(o,3)),this.add(new ht(i,this.material)),this.update();}
dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose();}
update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");hg.copy(this.light.color),dg.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?hg:dg;t.setXYZ(n,r.r,r.g,r.b);}
t.needsUpdate=!0;}
e.lookAt(jE.setFromMatrixPosition(this.light.matrixWorld).negate());}}
class ix extends Mn{constructor(e=10,t=10,n=4473924,i=8947848){(n=new ve(n)),(i=new ve(i));const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const g=d===r?n:i;g.toArray(c,f),(f+=3),g.toArray(c,f),(f+=3),g.toArray(c,f),(f+=3),g.toArray(c,f),(f+=3);}
const u=new Be();u.setAttribute("position",new Ce(l,3)),u.setAttribute("color",new Ce(c,3));const h=new Yt({vertexColors:!0,toneMapped:!1});super(u,h),(this.type="GridHelper");}}
class ZE extends Mn{constructor(e=10,t=16,n=8,i=64,r=4473924,o=8947848){(r=new ve(r)),(o=new ve(o));const a=[],l=[];for(let h=0;h<=t;h++){const d=(h/t)*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,p);const g=h&1?r:o;l.push(g.r,g.g,g.b),l.push(g.r,g.g,g.b);}
for(let h=0;h<=n;h++){const d=h&1?r:o,f=e-(e/n)*h;for(let p=0;p<i;p++){let g=(p/i)*(Math.PI*2),y=Math.sin(g)*f,_=Math.cos(g)*f;a.push(y,0,_),l.push(d.r,d.g,d.b),(g=((p+1)/i)*(Math.PI*2)),(y=Math.sin(g)*f),(_=Math.cos(g)*f),a.push(y,0,_),l.push(d.r,d.g,d.b);}}
const c=new Be();c.setAttribute("position",new Ce(a,3)),c.setAttribute("color",new Ce(l,3));const u=new Yt({vertexColors:!0,toneMapped:!1});super(c,u),(this.type="PolarGridHelper");}}
const fg=new C(),oc=new C(),pg=new C();class KE extends Ye{constructor(e,t,n){super(),(this.light=e),this.light.updateMatrixWorld(),(this.matrix=e.matrixWorld),(this.matrixAutoUpdate=!1),(this.color=n),t===void 0&&(t=1);let i=new Be();i.setAttribute("position",new Ce([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Yt({fog:!1,toneMapped:!1});(this.lightPlane=new zi(i,r)),this.add(this.lightPlane),(i=new Be()),i.setAttribute("position",new Ce([0,0,0,0,0,1],3)),(this.targetLine=new zi(i,r)),this.add(this.targetLine),this.update();}
dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose();}
update(){fg.setFromMatrixPosition(this.light.matrixWorld),oc.setFromMatrixPosition(this.light.target.matrixWorld),pg.subVectors(oc,fg),this.lightPlane.lookAt(oc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(oc),(this.targetLine.scale.z=pg.length());}}
const ac=new C(),xt=new Yo();class QE extends Mn{constructor(e){const t=new Be(),n=new Yt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={},a=new ve(16755200),l=new ve(16711680),c=new ve(43775),u=new ve(16777215),h=new ve(3355443);d("n1","n2",a),d("n2","n4",a),d("n4","n3",a),d("n3","n1",a),d("f1","f2",a),d("f2","f4",a),d("f4","f3",a),d("f3","f1",a),d("n1","f1",a),d("n2","f2",a),d("n3","f3",a),d("n4","f4",a),d("p","n1",l),d("p","n2",l),d("p","n3",l),d("p","n4",l),d("u1","u2",c),d("u2","u3",c),d("u3","u1",c),d("c","t",u),d("p","c",h),d("cn1","cn2",h),d("cn3","cn4",h),d("cf1","cf2",h),d("cf3","cf4",h);function d(p,g,y){f(p,y),f(g,y);}
function f(p,g){i.push(0,0,0),r.push(g.r,g.g,g.b),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1);}
t.setAttribute("position",new Ce(i,3)),t.setAttribute("color",new Ce(r,3)),super(t,n),(this.type="CameraHelper"),(this.camera=e),this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),(this.matrix=e.matrixWorld),(this.matrixAutoUpdate=!1),(this.pointMap=o),this.update();}
update(){const e=this.geometry,t=this.pointMap,n=1,i=1;xt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Et("c",t,e,xt,0,0,-1),Et("t",t,e,xt,0,0,1),Et("n1",t,e,xt,-n,-i,-1),Et("n2",t,e,xt,n,-i,-1),Et("n3",t,e,xt,-n,i,-1),Et("n4",t,e,xt,n,i,-1),Et("f1",t,e,xt,-n,-i,1),Et("f2",t,e,xt,n,-i,1),Et("f3",t,e,xt,-n,i,1),Et("f4",t,e,xt,n,i,1),Et("u1",t,e,xt,n*0.7,i*1.1,-1),Et("u2",t,e,xt,-n*0.7,i*1.1,-1),Et("u3",t,e,xt,0,i*2,-1),Et("cf1",t,e,xt,-n,0,1),Et("cf2",t,e,xt,n,0,1),Et("cf3",t,e,xt,0,-i,1),Et("cf4",t,e,xt,0,i,1),Et("cn1",t,e,xt,-n,0,-1),Et("cn2",t,e,xt,n,0,-1),Et("cn3",t,e,xt,0,-i,-1),Et("cn4",t,e,xt,0,i,-1),(e.getAttribute("position").needsUpdate=!0);}
dispose(){this.geometry.dispose(),this.material.dispose();}}
function Et(s,e,t,n,i,r,o){ac.set(i,r,o).unproject(n);const a=e[s];if(a!==void 0){const l=t.getAttribute("position");for(let c=0,u=a.length;c<u;c++)l.setXYZ(a[c],ac.x,ac.y,ac.z);}}
const lc=new In();class rx extends Mn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7,]),i=new Float32Array(8*3),r=new Be();r.setIndex(new Xe(n,1)),r.setAttribute("position",new Xe(i,3)),super(r,new Yt({color:t,toneMapped:!1})),(this.object=e),(this.type="BoxHelper"),(this.matrixAutoUpdate=!1),this.update();}
update(e){if((e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&lc.setFromObject(this.object),lc.isEmpty()))
return;const t=lc.min,n=lc.max,i=this.geometry.attributes.position,r=i.array;(r[0]=n.x),(r[1]=n.y),(r[2]=n.z),(r[3]=t.x),(r[4]=n.y),(r[5]=n.z),(r[6]=t.x),(r[7]=t.y),(r[8]=n.z),(r[9]=n.x),(r[10]=t.y),(r[11]=n.z),(r[12]=n.x),(r[13]=n.y),(r[14]=t.z),(r[15]=t.x),(r[16]=n.y),(r[17]=t.z),(r[18]=t.x),(r[19]=t.y),(r[20]=t.z),(r[21]=n.x),(r[22]=t.y),(r[23]=t.z),(i.needsUpdate=!0),this.geometry.computeBoundingSphere();}
setFromObject(e){return(this.object=e),this.update(),this;}
copy(e){return Mn.prototype.copy.call(this,e),(this.object=e.object),this;}}
class eA extends Mn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7,]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,],r=new Be();r.setIndex(new Xe(n,1)),r.setAttribute("position",new Ce(i,3)),super(r,new Yt({color:t,toneMapped:!1})),(this.box=e),(this.type="Box3Helper"),this.geometry.computeBoundingSphere();}
updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(0.5),super.updateMatrixWorld(e));}}
class tA extends zi{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0,],o=new Be();o.setAttribute("position",new Ce(r,3)),o.computeBoundingSphere(),super(o,new Yt({color:i,toneMapped:!1})),(this.type="PlaneHelper"),(this.plane=e),(this.size=t);const a=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],l=new Be();l.setAttribute("position",new Ce(a,3)),l.computeBoundingSphere(),this.add(new ht(l,new _i({color:i,opacity:0.2,transparent:!0,depthWrite:!1,toneMapped:!1,})));}
updateMatrixWorld(e){let t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(0.5*this.size,0.5*this.size,t),(this.children[0].material.side=t<0?Lt:ds),this.lookAt(this.plane.normal),super.updateMatrixWorld(e);}}
const mg=new C();let cc,Dh;class nA extends Ye{constructor(e=new C(0,0,1),t=new C(0,0,0),n=1,i=16776960,r=n*0.2,o=r*0.2){super(),(this.type="ArrowHelper"),cc===void 0&&((cc=new Be()),cc.setAttribute("position",new Ce([0,0,0,0,1,0],3)),(Dh=new gr(0,0.5,1,5,1)),Dh.translate(0,-0.5,0)),this.position.copy(t),(this.line=new zi(cc,new Yt({color:i,toneMapped:!1}))),(this.line.matrixAutoUpdate=!1),this.add(this.line),(this.cone=new ht(Dh,new _i({color:i,toneMapped:!1}))),(this.cone.matrixAutoUpdate=!1),this.add(this.cone),this.setDirection(e),this.setLength(n,r,o);}
setDirection(e){if(e.y>0.99999)this.quaternion.set(0,0,0,1);else if(e.y<-0.99999)this.quaternion.set(1,0,0,0);else{mg.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(mg,t);}}
setLength(e,t=e*0.2,n=t*0.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),(this.cone.position.y=e),this.cone.updateMatrix();}
setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e);}
copy(e){return(super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this);}}
class sx extends Mn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,0.6,0,0,1,0,0.6,1,0,0,0,1,0,0.6,1],i=new Be();i.setAttribute("position",new Ce(t,3)),i.setAttribute("color",new Ce(n,3));const r=new Yt({vertexColors:!0,toneMapped:!1});super(i,r),(this.type="AxesHelper");}
setColors(e,t,n){const i=new ve(),r=this.geometry.attributes.color.array;return(i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),(this.geometry.attributes.color.needsUpdate=!0),this);}
dispose(){this.geometry.dispose(),this.material.dispose();}}
class iA{constructor(){(this.type="ShapePath"),(this.color=new ve()),(this.subPaths=[]),(this.currentPath=null);}
moveTo(e,t){return((this.currentPath=new Xa()),this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this);}
lineTo(e,t){return this.currentPath.lineTo(e,t),this;}
quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this;}
bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this;}
splineThru(e){return this.currentPath.splineThru(e),this;}
toShapes(e,t){function n(m){const w=[];for(let v=0,x=m.length;v<x;v++){const M=m[v],S=new hi();(S.curves=M.curves),w.push(S);}
return w;}
function i(m,w){const v=w.length;let x=!1;for(let M=v-1,S=0;S<v;M=S++){let T=w[M],D=w[S],I=D.x-T.x,b=D.y-T.y;if(Math.abs(b)>Number.EPSILON){if((b<0&&((T=w[S]),(I=-I),(D=w[M]),(b=-b)),m.y<T.y||m.y>D.y))
continue;if(m.y===T.y){if(m.x===T.x)return!0;}else{const R=b*(m.x-T.x)-I*(m.y-T.y);if(R===0)return!0;if(R<0)continue;x=!x;}}else{if(m.y!==T.y)continue;if((D.x<=m.x&&m.x<=T.x)||(T.x<=m.x&&m.x<=D.x))
return!0;}}
return x;}
const r=di.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return n(o);let a,l,c;const u=[];if(o.length===1)
return(l=o[0]),(c=new hi()),(c.curves=l.curves),u.push(c),u;let h=!r(o[0].getPoints());h=e?!h:h;const d=[],f=[];let p=[],g=0,y;(f[g]=void 0),(p[g]=[]);for(let m=0,w=o.length;m<w;m++)
(l=o[m]),(y=l.getPoints()),(a=r(y)),(a=e?!a:a),a?(!h&&f[g]&&g++,(f[g]={s:new hi(),p:y}),(f[g].s.curves=l.curves),h&&g++,(p[g]=[])):p[g].push({h:l,p:y[0]});if(!f[0])return n(o);if(f.length>1){let m=!1,w=0;for(let v=0,x=f.length;v<x;v++)d[v]=[];for(let v=0,x=f.length;v<x;v++){const M=p[v];for(let S=0;S<M.length;S++){const T=M[S];let D=!0;for(let I=0;I<f.length;I++)
i(T.p,f[I].p)&&(v!==I&&w++,D?((D=!1),d[I].push(T)):(m=!0));D&&d[v].push(T);}}
w>0&&m===!1&&(p=d);}
let _;for(let m=0,w=f.length;m<w;m++){(c=f[m].s),u.push(c),(_=p[m]);for(let v=0,x=_.length;v<x;v++)c.holes.push(_[v].h);}
return u;}}
const ox=new Float32Array(1),rA=new Int32Array(ox.buffer);class sA{static toHalfFloat(e){e>65504&&(console.warn("THREE.DataUtils.toHalfFloat(): value exceeds 65504."),(e=65504)),(ox[0]=e);const t=rA[0];let n=(t>>16)&32768,i=(t>>12)&2047;const r=(t>>23)&255;return r<103?n:r>142?((n|=31744),(n|=(r==255?0:1)&&t&8388607),n):r<113?((i|=2048),(n|=(i>>(114-r))+((i>>(113-r))&1)),n):((n|=((r-112)<<10)|(i>>1)),(n+=i&1),n);}}
const oA=0,aA=1,lA=0,cA=1,uA=2;function hA(s){return(console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),s);}
function dA(s=[]){return(console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),(s.isMultiMaterial=!0),(s.materials=s),(s.clone=function(){return s.slice();}),s);}
function fA(s,e){return(console.warn("THREE.PointCloud has been renamed to THREE.Points."),new cl(s,e));}
function pA(s){return(console.warn("THREE.Particle has been renamed to THREE.Sprite."),new wu(s));}
function mA(s,e){return(console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new cl(s,e));}
function gA(s){return(console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new Ts(s));}
function _A(s){return(console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new Ts(s));}
function yA(s){return(console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new Ts(s));}
function xA(s,e,t){return(console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new C(s,e,t));}
function vA(s,e){return(console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),new Xe(s,e).setUsage(Ro));}
function wA(s,e){return(console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new ry(s,e));}
function bA(s,e){return(console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new sy(s,e));}
function MA(s,e){return(console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new oy(s,e));}
function SA(s,e){return(console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new ay(s,e));}
function TA(s,e){return(console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new du(s,e));}
function EA(s,e){return(console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new ly(s,e));}
function AA(s,e){return(console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new fu(s,e));}
function CA(s,e){return(console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new Ce(s,e));}
function LA(s,e){return(console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new uy(s,e));}
Dn.create=function(s,e){return(console.log("THREE.Curve.create() has been deprecated"),(s.prototype=Object.create(Dn.prototype)),(s.prototype.constructor=s),(s.prototype.getPoint=e),s);};Xa.prototype.fromPoints=function(s){return(console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s));};function PA(s){return(console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new sx(s));}
function RA(s,e){return(console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new rx(s,e));}
function DA(s,e){return(console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new Mn(new Pf(s.geometry),new Yt({color:e!==void 0?e:16777215})));}
ix.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");};tx.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.");};function IA(s,e){return(console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new Mn(new Ff(s.geometry),new Yt({color:e!==void 0?e:16777215})));}
pn.prototype.extractUrlBase=function(s){return(console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Qc.extractUrlBase(s));};pn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");},};function BA(s){return(console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new gi(s));}
function FA(s){return(console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new ky(s));}
Ko.prototype.center=function(s){return(console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(s));};Ko.prototype.empty=function(){return(console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty());};Ko.prototype.isIntersectionBox=function(s){return(console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s));};Ko.prototype.size=function(s){return(console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(s));};In.prototype.center=function(s){return(console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s));};In.prototype.empty=function(){return(console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty());};In.prototype.isIntersectionBox=function(s){return(console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s));};In.prototype.isIntersectionSphere=function(s){return(console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s));};In.prototype.size=function(s){return(console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s));};Mr.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");};wr.prototype.empty=function(){return(console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty());};ol.prototype.setFromMatrix=function(s){return(console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s));};ex.prototype.center=function(s){return(console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(s));};Ut.prototype.flattenToArrayOffset=function(s,e){return(console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e));};Ut.prototype.multiplyVector3=function(s){return(console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this));};Ut.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");};Ut.prototype.applyToBufferAttribute=function(s){return(console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this));};Ut.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");};Ut.prototype.getInverse=function(s){return(console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert());};Pe.prototype.extractPosition=function(s){return(console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s));};Pe.prototype.flattenToArrayOffset=function(s,e){return(console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e));};Pe.prototype.getPosition=function(){return(console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new C().setFromMatrixColumn(this,3));};Pe.prototype.setRotationFromQuaternion=function(s){return(console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s));};Pe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");};Pe.prototype.multiplyVector3=function(s){return(console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this));};Pe.prototype.multiplyVector4=function(s){return(console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this));};Pe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");};Pe.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this);};Pe.prototype.crossVector=function(s){return(console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this));};Pe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.");};Pe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.");};Pe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.");};Pe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.");};Pe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.");};Pe.prototype.applyToBufferAttribute=function(s){return(console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this));};Pe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");};Pe.prototype.makeFrustum=function(s,e,t,n,i,r){return(console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r));};Pe.prototype.getInverse=function(s){return(console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert());};ii.prototype.isIntersectionLine=function(s){return(console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s));};Ht.prototype.multiplyVector3=function(s){return(console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this));};Ht.prototype.inverse=function(){return(console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert());};br.prototype.isIntersectionBox=function(s){return(console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s));};br.prototype.isIntersectionPlane=function(s){return(console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s));};br.prototype.isIntersectionSphere=function(s){return(console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s));};Rt.prototype.area=function(){return(console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea());};Rt.prototype.barycoordFromPoint=function(s,e){return(console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e));};Rt.prototype.midpoint=function(s){return(console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s));};Rt.prototypenormal=function(s){return(console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s));};Rt.prototype.plane=function(s){return(console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s));};Rt.barycoordFromPoint=function(s,e,t,n,i){return(console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Rt.getBarycoord(s,e,t,n,i));};Rt.normal=function(s,e,t,n){return(console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Rt.getNormal(s,e,t,n));};hi.prototype.extractAllPoints=function(s){return(console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s));};hi.prototype.extrude=function(s){return(console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new mi(this,s));};hi.prototype.makeGeometry=function(s){return(console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new _s(this,s));};J.prototype.fromAttribute=function(s,e,t){return(console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t));};J.prototype.distanceToManhattan=function(s){return(console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s));};J.prototype.lengthManhattan=function(){return(console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength());};C.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");};C.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");};C.prototype.getPositionFromMatrix=function(s){return(console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s));};C.prototype.getScaleFromMatrix=function(s){return(console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s));};C.prototype.getColumnFromMatrix=function(s,e){return(console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s));};C.prototype.applyProjection=function(s){return(console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s));};C.prototype.fromAttribute=function(s,e,t){return(console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t));};C.prototype.distanceToManhattan=function(s){return(console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s));};C.prototype.lengthManhattan=function(){return(console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength());};nt.prototype.fromAttribute=function(s,e,t){return(console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t));};nt.prototype.lengthManhattan=function(){return(console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength());};Ye.prototype.getChildByName=function(s){return(console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s));};Ye.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");};Ye.prototype.translate=function(s,e){return(console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s));};Ye.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");};Ye.prototype.applyMatrix=function(s){return(console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s));};Object.defineProperties(Ye.prototype,{eulerOrder:{get:function(){return(console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order);},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),(this.rotation.order=s);},},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");},},});ht.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");};Object.defineProperties(ht.prototype,{drawMode:{get:function(){return(console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Y_);},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");},},});bu.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.");};qt.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s);};Object.defineProperties(Qn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.");},},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),(this.shadow.camera.fov=s);},},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),(this.shadow.camera.left=s);},},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),(this.shadow.camera.right=s);},},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),(this.shadow.camera.top=s);},},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),(this.shadow.camera.bottom=s);},},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),(this.shadow.camera.near=s);},},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),(this.shadow.camera.far=s);},},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");},},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),(this.shadow.bias=s);},},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.");},},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),(this.shadow.mapSize.width=s);},},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),(this.shadow.mapSize.height=s);},},});Object.defineProperties(Xe.prototype,{length:{get:function(){return(console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length);},},dynamic:{get:function(){return(console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Ro);},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Ro);},},});Xe.prototype.setDynamic=function(s){return(console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Ro:Po),this);};(Xe.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");}),(Xe.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");});Be.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s);};Be.prototype.addAttribute=function(s,e){return(console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new Xe(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e));};Be.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e);};Be.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups();};Be.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");};Be.prototype.removeAttribute=function(s){return(console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s));};Be.prototype.applyMatrix=function(s){return(console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s));};Object.defineProperties(Be.prototype,{drawcalls:{get:function(){return(console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups);},},offsets:{get:function(){return(console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups);},},});Ss.prototype.setDynamic=function(s){return(console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Ro:Po),this);};Ss.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");};mi.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.");};mi.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.");};mi.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.");};Bo.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.");};Wo.prototype.onUpdate=function(){return(console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this);};Object.defineProperties(St.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.");},set:function(){console.warn("THREE.Material: .wrapAround has been removed.");},},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.");},set:function(){console.warn("THREE.Material: .overdraw has been removed.");},},wrapRGB:{get:function(){return(console.warn("THREE.Material: .wrapRGB has been removed."),new ve());},},shading:{get:function(){console.error("THREE."+
this.type+
": .shading has been removed. Use the boolean .flatShading instead.");},set:function(s){console.warn("THREE."+
this.type+
": .shading has been removed. Use the boolean .flatShading instead."),(this.flatShading=s===yf);},},stencilMask:{get:function(){return(console.warn("THREE."+
this.type+
": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask);},set:function(s){console.warn("THREE."+
this.type+
": .stencilMask has been removed. Use .stencilFuncMask instead."),(this.stencilFuncMask=s);},},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.");},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.");},},});Object.defineProperties(kt.prototype,{derivatives:{get:function(){return(console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives);},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),(this.extensions.derivatives=s);},},});st.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n);};st.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s);};st.prototype.getCurrentRenderTarget=function(){return(console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget());};st.prototype.getMaxAnisotropy=function(){return(console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy());};st.prototype.getPrecision=function(){return(console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision);};st.prototype.resetGLState=function(){return(console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset());};st.prototype.supportsFloatTextures=function(){return(console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float"));};st.prototype.supportsHalfFloatTextures=function(){return(console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float"));};st.prototype.supportsStandardDerivatives=function(){return(console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives"));};st.prototype.supportsCompressedTextureS3TC=function(){return(console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc"));};st.prototype.supportsCompressedTexturePVRTC=function(){return(console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc"));};st.prototype.supportsBlendMinMax=function(){return(console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax"));};st.prototype.supportsVertexTextures=function(){return(console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures);};st.prototype.supportsInstancedArrays=function(){return(console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays"));};st.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s);};st.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");};st.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");};st.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");};st.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");};st.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");};st.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");};st.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");};st.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");};st.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");};st.prototype.getActiveMipMapLevel=function(){return(console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel());};Object.defineProperties(st.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled;},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),(this.shadowMap.enabled=s);},},shadowMapType:{get:function(){return this.shadowMap.type;},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),(this.shadowMap.type=s);},},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");},},context:{get:function(){return(console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext());},},vr:{get:function(){return(console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr);},},gammaInput:{get:function(){return(console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1);},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");},},gammaOutput:{get:function(){return(console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1);},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),(this.outputEncoding=s===!0?ot:Kn);},},toneMappingWhitePoint:{get:function(){return(console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1);},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");},},gammaFactor:{get:function(){return(console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2);},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");},},});Object.defineProperties(xy.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");},},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");},},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");},},});function OA(s,e,t){return(console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),new mu(s,t));}
Object.defineProperties(ft.prototype,{wrapS:{get:function(){return(console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS);},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),(this.texture.wrapS=s);},},wrapT:{get:function(){return(console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT);},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),(this.texture.wrapT=s);},},magFilter:{get:function(){return(console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter);},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),(this.texture.magFilter=s);},},minFilter:{get:function(){return(console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter);},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),(this.texture.minFilter=s);},},anisotropy:{get:function(){return(console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy);},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),(this.texture.anisotropy=s);},},offset:{get:function(){return(console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset);},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),(this.texture.offset=s);},},repeat:{get:function(){return(console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat);},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),(this.texture.repeat=s);},},format:{get:function(){return(console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format);},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),(this.texture.format=s);},},type:{get:function(){return(console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type);},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),(this.texture.type=s);},},generateMipmaps:{get:function(){return(console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps);},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),(this.texture.generateMipmaps=s);},},});rp.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return(new qy().load(s,function(n){e.setBuffer(n);}),this);};Yy.prototype.getData=function(){return(console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData());};pu.prototype.updateCubeMap=function(s,e){return(console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e));};pu.prototype.clear=function(s,e,t,n){return(console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n));};vr.crossOrigin=void 0;vr.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Ny();i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r;};vr.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Oy();i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r;};vr.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");};vr.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");};function kA(){console.error("THREE.CanvasRenderer has been removed");}
function NA(){console.error("THREE.JSONLoader has been removed.");}
const zA={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js");},};function UA(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js");}
function HA(){return(console.error("THREE.ParametricGeometry has been moved to /examples/jsm/geometries/ParametricGeometry.js"),new Be());}
function GA(){return(console.error("THREE.TextGeometry has been moved to /examples/jsm/geometries/TextGeometry.js"),new Be());}
function VA(){console.error("THREE.FontLoader has been moved to /examples/jsm/loaders/FontLoader.js");}
function WA(){console.error("THREE.Font has been moved to /examples/jsm/loaders/FontLoader.js");}
function qA(){console.error("THREE.ImmediateRenderObject has been removed.");}
function XA(s,e,t){console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.');const n=new ft(s,e,t);return(n.samples=4),n;}
function $A(s,e,t,n){return(console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."),new $o(s,e,t,n));}
function YA(s,e,t,n){return(console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."),new sl(s,e,t,n));}
typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):(window.__THREE__=nl));var jA=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:C_,AddEquation:Hr,AddOperation:S_,AdditiveAnimationBlendMode:bf,AdditiveBlending:$c,AlphaFormat:F_,AlwaysDepth:__,AlwaysStencilFunc:Z_,AmbientLight:Kf,AmbientLightProbe:$y,AnimationClip:Qa,AnimationLoader:EE,AnimationMixer:Zy,AnimationObjectGroup:Jy,AnimationUtils:dt,ArcCurve:Rf,ArrayCamera:Ef,ArrowHelper:nA,Audio:rp,AudioAnalyser:Yy,AudioContext:np,AudioListener:DE,AudioLoader:qy,AxesHelper:sx,AxisHelper:PA,BackSide:Lt,BasicDepthPacking:Mf,BasicShadowMap:Sw,BinaryTextureLoader:FA,Bone:Mu,BooleanKeyframeTrack:Es,BoundingBoxHelper:RA,Box2:Ko,Box3:In,Box3Helper:eA,BoxBufferGeometry:Ni,BoxGeometry:Ni,BoxHelper:rx,BufferAttribute:Xe,BufferGeometry:Be,BufferGeometryLoader:Vy,ByteType:P_,Cache:ys,Camera:Yo,CameraHelper:QE,CanvasRenderer:kA,CanvasTexture:Ey,CatmullRomCurve3:wo,CineonToneMapping:A_,CircleBufferGeometry:Fo,CircleGeometry:Fo,ClampToEdgeWrapping:dn,Clock:ip,Color:ve,ColorKeyframeTrack:qf,CompressedTexture:Lf,CompressedTextureLoader:AE,ConeBufferGeometry:Oo,ConeGeometry:Oo,CubeCamera:pu,CubeReflectionMapping:dr,CubeRefractionMapping:fr,CubeTexture:jo,CubeTextureLoader:Oy,CubeUVReflectionMapping:Xo,CubeUVRefractionMapping:rl,CubicBezierCurve:Tu,CubicBezierCurve3:If,CubicInterpolant:Dy,CullFaceBack:rd,CullFaceFront:n_,CullFaceFrontBack:Mw,CullFaceNone:t_,Curve:Dn,CurvePath:Cy,CustomBlending:r_,CustomToneMapping:L_,CylinderBufferGeometry:gr,CylinderGeometry:gr,Cylindrical:XE,Data3DTexture:sl,DataArrayTexture:$o,DataTexture:as,DataTexture2DArray:$A,DataTexture3D:YA,DataTextureLoader:ky,DataUtils:sA,DecrementStencilOp:Fw,DecrementWrapStencilOp:kw,DefaultLoadingManager:Fy,DepthFormat:ar,DepthStencilFormat:pr,DepthTexture:xu,DirectionalLight:Zf,DirectionalLightHelper:KE,DiscreteInterpolant:Iy,DodecahedronBufferGeometry:ko,DodecahedronGeometry:ko,DoubleSide:fs,DstAlphaFactor:h_,DstColorFactor:f_,DynamicBufferAttribute:vA,DynamicCopyUsage:Zw,DynamicDrawUsage:Ro,DynamicReadUsage:Yw,EdgesGeometry:Pf,EdgesHelper:DA,EllipseCurve:ul,EqualDepth:x_,EqualStencilFunc:Hw,EquirectangularReflectionMapping:ka,EquirectangularRefractionMapping:Na,Euler:Mr,EventDispatcher:Hi,ExtrudeBufferGeometry:mi,ExtrudeGeometry:mi,FaceColors:cA,FileLoader:gi,FlatShading:yf,Float16BufferAttribute:cy,Float32Attribute:CA,Float32BufferAttribute:Ce,Float64Attribute:LA,Float64BufferAttribute:uy,FloatType:Ri,Fog:ll,FogExp2:al,Font:WA,FontLoader:VA,FramebufferTexture:Ty,FrontSide:ds,Frustum:ol,GLBufferAttribute:Qy,GLSL1:Qw,GLSL3:Pd,GreaterDepth:w_,GreaterEqualDepth:v_,GreaterEqualStencilFunc:qw,GreaterStencilFunc:Vw,GridHelper:ix,Group:Zr,HalfFloatType:ss,HemisphereLight:$f,HemisphereLightHelper:JE,HemisphereLightProbe:Xy,IcosahedronBufferGeometry:No,IcosahedronGeometry:No,ImageBitmapLoader:Wy,ImageLoader:el,ImageUtils:vr,ImmediateRenderObject:qA,IncrementStencilOp:Bw,IncrementWrapStencilOp:Ow,InstancedBufferAttribute:ms,InstancedBufferGeometry:tp,InstancedInterleavedBuffer:Ky,InstancedMesh:Af,Int16Attribute:SA,Int16BufferAttribute:ay,Int32Attribute:EA,Int32BufferAttribute:ly,Int8Attribute:wA,Int8BufferAttribute:ry,IntType:D_,InterleavedBuffer:Ss,InterleavedBufferAttribute:mr,Interpolant:Ui,InterpolateDiscrete:Ha,InterpolateLinear:Ga,InterpolateSmooth:Sc,InvertStencilOp:Nw,JSONLoader:NA,KeepStencilOp:Tc,KeyframeTrack:ei,LOD:My,LatheBufferGeometry:zo,LatheGeometry:zo,Layers:hu,LensFlare:UA,LessDepth:y_,LessEqualDepth:Yc,LessEqualStencilFunc:Gw,LessStencilFunc:Uw,Light:Qn,LightProbe:fl,Line:zi,Line3:ex,LineBasicMaterial:Yt,LineCurve:hl,LineCurve3:Ay,LineDashedMaterial:Vf,LineLoop:Cf,LinePieces:aA,LineSegments:Mn,LineStrip:oA,LinearEncoding:Kn,LinearFilter:Ke,LinearInterpolant:Wf,LinearMipMapLinearFilter:Lw,LinearMipMapNearestFilter:Cw,LinearMipmapLinearFilter:ws,LinearMipmapNearestFilter:wf,LinearToneMapping:T_,Loader:pn,LoaderUtils:Qc,LoadingManager:Xf,LoopOnce:q_,LoopPingPong:$_,LoopRepeat:X_,LuminanceAlphaFormat:N_,LuminanceFormat:k_,MOUSE:kr,Material:St,MaterialLoader:Gy,Math:Yp,MathUtils:Yp,Matrix3:Ut,Matrix4:Pe,MaxEquation:ld,Mesh:ht,MeshBasicMaterial:_i,MeshDepthMaterial:_u,MeshDistanceMaterial:yu,MeshFaceMaterial:hA,MeshLambertMaterial:Ja,MeshMatcapMaterial:Gf,MeshNormalMaterial:Hf,MeshPhongMaterial:zf,MeshPhysicalMaterial:Nf,MeshStandardMaterial:dl,MeshToonMaterial:Uf,MinEquation:ad,MirroredRepeatWrapping:Ua,MixOperation:M_,MultiMaterial:dA,MultiplyBlending:od,MultiplyOperation:il,NearestFilter:Ot,NearestMipMapLinearFilter:Aw,NearestMipMapNearestFilter:Ew,NearestMipmapLinearFilter:Jc,NearestMipmapNearestFilter:jc,NeverDepth:g_,NeverStencilFunc:zw,NoBlending:ui,NoColors:lA,NoToneMapping:Bi,NormalAnimationBlendMode:uu,NormalBlending:rs,NotEqualDepth:b_,NotEqualStencilFunc:Ww,NumberKeyframeTrack:Za,Object3D:Ye,ObjectLoader:CE,ObjectSpaceNormalMap:J_,OctahedronBufferGeometry:gs,OctahedronGeometry:gs,OneFactor:l_,OneMinusDstAlphaFactor:d_,OneMinusDstColorFactor:p_,OneMinusSrcAlphaFactor:vf,OneMinusSrcColorFactor:u_,OrthographicCamera:Ms,PCFShadowMap:_f,PCFSoftShadowMap:i_,PMREMGenerator:Dd,ParametricGeometry:HA,Particle:pA,ParticleBasicMaterial:_A,ParticleSystem:mA,ParticleSystemMaterial:yA,Path:Xa,PerspectiveCamera:qt,Plane:ii,PlaneBufferGeometry:ps,PlaneGeometry:ps,PlaneHelper:tA,PointCloud:fA,PointCloudMaterial:gA,PointLight:Jf,PointLightHelper:YE,Points:cl,PointsMaterial:Ts,PolarGridHelper:ZE,PolyhedronBufferGeometry:pi,PolyhedronGeometry:pi,PositionalAudio:BE,PropertyBinding:Ze,PropertyMixer:jy,QuadraticBezierCurve:Eu,QuadraticBezierCurve3:Au,Quaternion:Ht,QuaternionKeyframeTrack:Zo,QuaternionLinearInterpolant:By,REVISION:nl,RGBADepthPacking:j_,RGBAFormat:Xt,RGBAIntegerFormat:V_,RGBA_ASTC_10x10_Format:Ed,RGBA_ASTC_10x5_Format:Md,RGBA_ASTC_10x6_Format:Sd,RGBA_ASTC_10x8_Format:Td,RGBA_ASTC_12x10_Format:Ad,RGBA_ASTC_12x12_Format:Cd,RGBA_ASTC_4x4_Format:md,RGBA_ASTC_5x4_Format:gd,RGBA_ASTC_5x5_Format:_d,RGBA_ASTC_6x5_Format:yd,RGBA_ASTC_6x6_Format:xd,RGBA_ASTC_8x5_Format:vd,RGBA_ASTC_8x6_Format:wd,RGBA_ASTC_8x8_Format:bd,RGBA_BPTC_Format:Ld,RGBA_ETC2_EAC_Format:pd,RGBA_PVRTC_2BPPV1_Format:dd,RGBA_PVRTC_4BPPV1_Format:hd,RGBA_S3TC_DXT1_Format:wc,RGBA_S3TC_DXT3_Format:bc,RGBA_S3TC_DXT5_Format:Mc,RGBFormat:O_,RGB_ETC1_Format:W_,RGB_ETC2_Format:fd,RGB_PVRTC_2BPPV1_Format:ud,RGB_PVRTC_4BPPV1_Format:cd,RGB_S3TC_DXT1_Format:vc,RGFormat:H_,RGIntegerFormat:G_,RawShaderMaterial:kf,Ray:br,Raycaster:qE,RectAreaLight:Qf,RedFormat:z_,RedIntegerFormat:U_,ReinhardToneMapping:E_,RepeatWrapping:za,ReplaceStencilOp:Iw,ReverseSubtractEquation:o_,RingBufferGeometry:Uo,RingGeometry:Uo,Scene:Bo,SceneUtils:zA,ShaderChunk:qe,ShaderLib:jn,ShaderMaterial:kt,ShadowMaterial:Of,Shape:hi,ShapeBufferGeometry:_s,ShapeGeometry:_s,ShapePath:iA,ShapeUtils:di,ShortType:R_,Skeleton:Su,SkeletonHelper:tx,SkinnedMesh:bu,SmoothShading:Tw,Sphere:wr,SphereBufferGeometry:yr,SphereGeometry:yr,Spherical:Nd,SphericalHarmonics3:ep,SplineCurve:Cu,SpotLight:jf,SpotLightHelper:$E,Sprite:wu,SpriteMaterial:vu,SrcAlphaFactor:xf,SrcAlphaSaturateFactor:m_,SrcColorFactor:c_,StaticCopyUsage:Jw,StaticDrawUsage:Po,StaticReadUsage:$w,StereoCamera:PE,StreamCopyUsage:Kw,StreamDrawUsage:Xw,StreamReadUsage:jw,StringKeyframeTrack:As,SubtractEquation:s_,SubtractiveBlending:sd,TOUCH:Nr,TangentSpaceNormalMap:bs,TetrahedronBufferGeometry:Ho,TetrahedronGeometry:Ho,TextGeometry:GA,Texture:Dt,TextureLoader:Ny,TorusBufferGeometry:Go,TorusGeometry:Go,TorusKnotBufferGeometry:Vo,TorusKnotGeometry:Vo,Triangle:Rt,TriangleFanDrawMode:Rw,TriangleStripDrawMode:Pw,TrianglesDrawMode:Y_,TubeBufferGeometry:Fi,TubeGeometry:Fi,UVMapping:cu,Uint16Attribute:TA,Uint16BufferAttribute:du,Uint32Attribute:AA,Uint32BufferAttribute:fu,Uint8Attribute:bA,Uint8BufferAttribute:sy,Uint8ClampedAttribute:MA,Uint8ClampedBufferAttribute:oy,Uniform:Wo,UniformsLib:we,UniformsUtils:Io,UnsignedByteType:Zn,UnsignedInt248Type:or,UnsignedIntType:xo,UnsignedShort4444Type:I_,UnsignedShort5551Type:B_,UnsignedShortType:Lo,VSMShadowMap:no,Vector2:J,Vector3:C,Vector4:nt,VectorKeyframeTrack:Ka,Vertex:xA,VertexColors:uA,VideoTexture:Sy,WebGL1Renderer:wy,WebGL3DRenderTarget:ny,WebGLArrayRenderTarget:ty,WebGLCubeRenderTarget:mu,WebGLMultipleRenderTargets:iy,WebGLMultisampleRenderTarget:XA,WebGLRenderTarget:ft,WebGLRenderTargetCube:OA,WebGLRenderer:st,WebGLUtils:vy,WireframeGeometry:Ff,WireframeHelper:IA,WrapAroundEnding:Va,XHRLoader:BA,ZeroCurvatureEnding:jr,ZeroFactor:a_,ZeroSlopeEnding:Jr,ZeroStencilOp:Dw,_SRGBAFormat:Zc,sRGBEncoding:ot,},Symbol.toStringTag,{value:"Module"}));var JA="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Li="srgb",ax="srgb-linear",lx=Number(nl.replace(/\D+/g,"")),cx=lx>=152,ZA=new Map([[Kn,ax],[ot,Li],]),KA=new Map([[ax,Kn],[Li,ot],]);function zd(s){return s===null?null:cx?s.outputColorSpace:ZA.get(s.outputEncoding);}
function Ec(s,e){s!==null&&(cx?(s.colorSpace=e):(s.encoding=KA.get(e)));}
function QA(s){return lx<154?s.replace("colorspace_fragment","encodings_fragment"):s;}
var eC=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,tC=class extends kt{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new Wo(null),opacity:new Wo(1)},blending:ui,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:eC,vertexShader:JA,}),(this.fragmentShader=QA(this.fragmentShader));}
set inputBuffer(s){this.uniforms.inputBuffer.value=s;}
setInputBuffer(s){this.uniforms.inputBuffer.value=s;}
getOpacity(s){return this.uniforms.opacity.value;}
setOpacity(s){this.uniforms.opacity.value=s;}},nC=new Yo(),Zi=null;function iC(){if(Zi===null){const s=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]);(Zi=new Be()),Zi.setAttribute!==void 0?(Zi.setAttribute("position",new Xe(s,3)),Zi.setAttribute("uv",new Xe(e,2))):(Zi.addAttribute("position",new Xe(s,3)),Zi.addAttribute("uv",new Xe(e,2)));}
return Zi;}
var Pu=class ux{constructor(e="Pass",t=new Bo(),n=nC){(this.name=e),(this.renderer=null),(this.scene=t),(this.camera=n),(this.screen=null),(this.rtt=!0),(this.needsSwap=!0),(this.needsDepthTexture=!1),(this.enabled=!0);}
get renderToScreen(){return!this.rtt;}
set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),(this.rtt=!e);}}
set mainScene(e){}
set mainCamera(e){}
setRenderer(e){this.renderer=e;}
isEnabled(){return this.enabled;}
setEnabled(e){this.enabled=e;}
get fullscreenMaterial(){return this.screen!==null?this.screen.material:null;}
set fullscreenMaterial(e){let t=this.screen;t!==null?(t.material=e):((t=new ht(iC(),e)),(t.frustumCulled=!1),this.scene===null&&(this.scene=new Bo()),this.scene.add(t),(this.screen=t));}
getFullscreenMaterial(){return this.fullscreenMaterial;}
setFullscreenMaterial(e){this.fullscreenMaterial=e;}
getDepthTexture(){return null;}
setDepthTexture(e,t=Mf){}
render(e,t,n,i,r){throw new Error("Render method not implemented!");}
setSize(e,t){}
initialize(e,t,n){}
dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof ft||t instanceof St||t instanceof Dt||t instanceof ux)&&this[e].dispose();}}},rC=class extends Pu{constructor(s,e=!0){super("CopyPass"),(this.fullscreenMaterial=new tC()),(this.needsSwap=!1),(this.renderTarget=s),s===void 0&&((this.renderTarget=new ft(1,1,{minFilter:Ke,magFilter:Ke,stencilBuffer:!1,depthBuffer:!1,})),(this.renderTarget.texture.name="CopyPass.Target")),(this.autoResize=e);}
get resize(){return this.autoResize;}
set resize(s){this.autoResize=s;}
get texture(){return this.renderTarget.texture;}
getTexture(){return this.renderTarget.texture;}
setAutoResizeEnabled(s){this.autoResize=s;}
render(s,e,t,n,i){(this.fullscreenMaterial.inputBuffer=e.texture),s.setRenderTarget(this.renderToScreen?null:this.renderTarget),s.render(this.scene,this.camera);}
setSize(s,e){this.autoResize&&this.renderTarget.setSize(s,e);}
initialize(s,e,t){t!==void 0&&((this.renderTarget.texture.type=t),t!==Zn?(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):zd(s)===Li&&Ec(this.renderTarget.texture,Li));}},sC=class extends Pu{constructor(){super("ClearMaskPass",null,null),(this.needsSwap=!1);}
render(s,e,t,n,i){const r=s.state.buffers.stencil;r.setLocked(!1),r.setTest(!1);}},gg=new ve(),oC=class extends Pu{constructor(s=!0,e=!0,t=!1){super("ClearPass",null,null),(this.needsSwap=!1),(this.color=s),(this.depth=e),(this.stencil=t),(this.overrideClearColor=null),(this.overrideClearAlpha=-1);}
setClearFlags(s,e,t){(this.color=s),(this.depth=e),(this.stencil=t);}
getOverrideClearColor(){return this.overrideClearColor;}
setOverrideClearColor(s){this.overrideClearColor=s;}
getOverrideClearAlpha(){return this.overrideClearAlpha;}
setOverrideClearAlpha(s){this.overrideClearAlpha=s;}
render(s,e,t,n,i){const r=this.overrideClearColor,o=this.overrideClearAlpha,a=s.getClearAlpha(),l=r!==null,c=o>=0;l?(s.getClearColor(gg),s.setClearColor(r,c?o:a)):c&&s.setClearAlpha(o),s.setRenderTarget(this.renderToScreen?null:e),s.clear(this.color,this.depth,this.stencil),l?s.setClearColor(gg,a):c&&s.setClearAlpha(a);}},aC=class extends Pu{constructor(s,e){super("MaskPass",s,e),(this.needsSwap=!1),(this.clearPass=new oC(!1,!1,!0)),(this.inverse=!1);}
set mainScene(s){this.scene=s;}
set mainCamera(s){this.camera=s;}
get inverted(){return this.inverse;}
set inverted(s){this.inverse=s;}
get clear(){return this.clearPass.enabled;}
set clear(s){this.clearPass.enabled=s;}
getClearPass(){return this.clearPass;}
isInverted(){return this.inverted;}
setInverted(s){this.inverted=s;}
render(s,e,t,n,i){const r=s.getContext(),o=s.state.buffers,a=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,h=1-u;o.color.setMask(!1),o.depth.setMask(!1),o.color.setLocked(!0),o.depth.setLocked(!0),o.stencil.setTest(!0),o.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.stencil.setFunc(r.ALWAYS,u,4294967295),o.stencil.setClear(h),o.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(s,null):(c.render(s,e),c.render(s,t))),this.renderToScreen?(s.setRenderTarget(null),s.render(a,l)):(s.setRenderTarget(e),s.render(a,l),s.setRenderTarget(t),s.render(a,l)),o.color.setLocked(!1),o.depth.setLocked(!1),o.stencil.setLocked(!1),o.stencil.setFunc(r.EQUAL,1,4294967295),o.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.stencil.setLocked(!0);}},Ih=1/1e3,lC=1e3,cC=class{constructor(){(this.startTime=performance.now()),(this.previousTime=0),(this.currentTime=0),(this._delta=0),(this._elapsed=0),(this._fixedDelta=1e3/60),(this.timescale=1),(this.useFixedDelta=!1),(this._autoReset=!1);}
get autoReset(){return this._autoReset;}
set autoReset(s){typeof document!="undefined"&&document.hidden!==void 0&&(s?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),(this._autoReset=s));}
get delta(){return this._delta*Ih;}
get fixedDelta(){return this._fixedDelta*Ih;}
set fixedDelta(s){this._fixedDelta=s*lC;}
get elapsed(){return this._elapsed*Ih;}
update(s){this.useFixedDelta?(this._delta=this.fixedDelta):((this.previousTime=this.currentTime),(this.currentTime=(s!==void 0?s:performance.now())-this.startTime),(this._delta=this.currentTime-this.previousTime)),(this._delta*=this.timescale),(this._elapsed+=this._delta);}
reset(){(this._delta=0),(this._elapsed=0),(this.currentTime=performance.now()-this.startTime);}
handleEvent(s){document.hidden||(this.currentTime=performance.now()-this.startTime);}
dispose(){this.autoReset=!1;}},uC=class{constructor(s=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:n=0,frameBufferType:i,}={}){(this.renderer=null),(this.inputBuffer=this.createBuffer(e,t,i,n)),(this.outputBuffer=this.inputBuffer.clone()),(this.copyPass=new rC()),(this.depthTexture=null),(this.passes=[]),(this.timer=new cC()),(this.autoRenderToScreen=!0),this.setRenderer(s);}
get multisampling(){return this.inputBuffer.samples||0;}
set multisampling(s){const e=this.inputBuffer,t=this.multisampling;t>0&&s>0?((this.inputBuffer.samples=s),(this.outputBuffer.samples=s),this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==s&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),(this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,s)),(this.inputBuffer.depthTexture=this.depthTexture),(this.outputBuffer=this.inputBuffer.clone()));}
getTimer(){return this.timer;}
getRenderer(){return this.renderer;}
setRenderer(s){if(((this.renderer=s),s!==null)){const e=s.getSize(new J()),t=s.getContext().getContextAttributes().alpha,n=this.inputBuffer.texture.type;n===Zn&&zd(s)===Li&&(Ec(this.inputBuffer.texture,Li),Ec(this.outputBuffer.texture,Li),this.inputBuffer.dispose(),this.outputBuffer.dispose()),(s.autoClear=!1),this.setSize(e.width,e.height);for(const i of this.passes)i.initialize(s,t,n);}}
replaceRenderer(s,e=!0){const t=this.renderer,n=t.domElement.parentNode;return(this.setRenderer(s),e&&n!==null&&(n.removeChild(t.domElement),n.appendChild(s.domElement)),t);}
createDepthTexture(){const s=(this.depthTexture=new xu());return((this.inputBuffer.depthTexture=s),this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?((s.format=pr),(s.type=or)):(s.type=xo),s);}
deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),(this.depthTexture=null),(this.inputBuffer.depthTexture=null),this.inputBuffer.dispose();for(const s of this.passes)s.setDepthTexture(null);}}
createBuffer(s,e,t,n){const i=this.renderer,r=i===null?new J():i.getDrawingBufferSize(new J()),o={minFilter:Ke,magFilter:Ke,stencilBuffer:e,depthBuffer:s,type:t,},a=new ft(r.width,r.height,o);return(n>0&&((a.ignoreDepthForMultisampleCopy=!1),(a.samples=n)),t===Zn&&zd(i)===Li&&Ec(a.texture,Li),(a.texture.name="EffectComposer.Buffer"),(a.texture.generateMipmaps=!1),a);}
setMainScene(s){for(const e of this.passes)e.mainScene=s;}
setMainCamera(s){for(const e of this.passes)e.mainCamera=s;}
addPass(s,e){const t=this.passes,n=this.renderer,i=n.getDrawingBufferSize(new J()),r=n.getContext().getContextAttributes().alpha,o=this.inputBuffer.texture.type;if((s.setRenderer(n),s.setSize(i.width,i.height),s.initialize(n,r,o),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),s.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,s):t.push(s),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),s.needsDepthTexture||this.depthTexture!==null))
if(this.depthTexture===null){const a=this.createDepthTexture();for(s of t)s.setDepthTexture(a);}else s.setDepthTexture(this.depthTexture);}
removePass(s){const e=this.passes,t=e.indexOf(s);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const r=(a,l)=>a||l.needsDepthTexture;e.reduce(r,!1)||(s.getDepthTexture()===this.depthTexture&&s.setDepthTexture(null),this.deleteDepthTexture());}
this.autoRenderToScreen&&t===e.length&&((s.renderToScreen=!1),e.length>0&&(e[e.length-1].renderToScreen=!0));}}
removeAllPasses(){const s=this.passes;this.deleteDepthTexture(),s.length>0&&(this.autoRenderToScreen&&(s[s.length-1].renderToScreen=!1),(this.passes=[]));}
render(s){const e=this.renderer,t=this.copyPass;let n=this.inputBuffer,i=this.outputBuffer,r=!1,o,a,l;s===void 0&&(this.timer.update(),(s=this.timer.delta));for(const c of this.passes)
c.enabled&&(c.render(e,n,i,s,r),c.needsSwap&&(r&&((t.renderToScreen=c.renderToScreen),(o=e.getContext()),(a=e.state.buffers.stencil),a.setFunc(o.NOTEQUAL,1,4294967295),t.render(e,n,i,s,r),a.setFunc(o.EQUAL,1,4294967295)),(l=n),(n=i),(i=l)),c instanceof aC?(r=!0):c instanceof sC&&(r=!1));}
setSize(s,e,t){const n=this.renderer,i=n.getSize(new J());(s===void 0||e===void 0)&&((s=i.width),(e=i.height)),(i.width!==s||i.height!==e)&&n.setSize(s,e,t);const r=n.getDrawingBufferSize(new J());this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height);for(const o of this.passes)o.setSize(r.width,r.height);}
reset(){const s=this.timer.autoReset;this.dispose(),(this.autoRenderToScreen=!0),(this.timer.autoReset=s);}
dispose(){for(const s of this.passes)s.dispose();(this.passes=[]),this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose();}};let Ac;function hC(s,e){let t=!1;if(window.XMLHttpRequest)
(t=new XMLHttpRequest()),t.overrideMimeType&&t.overrideMimeType("text/json");else if(window.ActiveXObject)
try{t=new ActiveXObject("Msxml2.XMLHTTP");}catch{try{t=new ActiveXObject("Microsoft.XMLHTTP");}catch{}}
if(!t)return alert("Failed : ( Unable to instantiate XMLHTTP class"),!1;(t.onreadystatechange=function(){dC(t,e);}),t.open("GET",s,!0),t.send(null);}
hC(yw,Cc);function dC(s,e){s.readyState==4&&(s.status==200?new Promise((n)=>{(Ac=JSON.parse(s.responseText).nodes),(Ac=Array.from(new Set(Ac.map(JSON.stringify))).map(JSON.parse)),n();}).then(()=>e()):alert("There was a problem with the request."));}
function Cc(){return Ac;}
let Lc;function fC(s,e){let t=!1;if(window.XMLHttpRequest)
(t=new XMLHttpRequest()),t.overrideMimeType&&t.overrideMimeType("text/json");else if(window.ActiveXObject)
try{t=new ActiveXObject("Msxml2.XMLHTTP");}catch{try{t=new ActiveXObject("Microsoft.XMLHTTP");}catch{}}
if(!t)return alert("Failed : ( Unable to instantiate XMLHTTP class"),!1;(t.onreadystatechange=function(){pC(t,e);}),t.open("GET",s,!0),t.send(null);}
fC(vw,Pc);function pC(s,e){s.readyState==4&&(s.status==200?new Promise((n)=>{(Lc=JSON.parse(s.responseText).nodes),(Lc=Array.from(new Set(Lc.map(JSON.stringify))).map(JSON.parse)),n();}).then(()=>e()):alert("There was a problem with the request."));}
function Pc(){return Lc;}
ze.registerPlugin($e,ln);function mC(s,e,t){let n=[],i=[];am4core.ready(function(){let r=t;s.map((Z)=>{n.push(Z.node);}),e.map((Z)=>{Z.node.title!="Shanghai Century Boulevard"&&i.push(Z.node);}),am4core.useTheme(am4themes_dark),am4core.useTheme(am4themes_animated),am4core.addLicense("MP376085397");var o=am4core.create("chartdiv",am4maps.MapChart);o.logo&&(o.logo.disabled=!0),window.matchMedia("(max-width: 767px)").matches?((o.zoomControl=new am4maps.ZoomControl()),(o.seriesContainer.interactions.touchZoom=!0)):((o.seriesContainer.resizable=!1),(o.seriesContainer.draggable=!1)),(o.maxZoomLevel=64),(o.chartContainer.wheelable=!1),o.chartContainer.background.events.disableType("doublehit"),o.seriesContainer.events.disableType("doublehit"),(o.cursorDownStyle=am4core.MouseCursorStyle.grabbing),(o.geodata=am4geodata_worldLow),(o.projection=new am4maps.projections.Miller()),(o.homeZoomLevel=1.1);var a=o.series.push(new am4maps.MapPolygonSeries());(a.useGeodata=!0),(a.calculateVisualCenter=!0),(a.exclude=["AQ"]);var l=a.mapPolygons.template;(l.fill=am4core.color("#0047BB")),(l.stroke=am4core.color("#000")),(l.innerText="{name}");var c=o.series.push(new am4maps.MapImageSeries()),u=o.series.push(new am4maps.MapImageSeries()),h=o.series.push(new am4maps.MapImageSeries()),d,f,p,g,y,_,m,w,v;const x=(Z,ce,Ae,le)=>{(Z.strokeOpacity=0),(Z.fillOpacity=1);var ce=Z.mapImages.template;(ce.propertyFields.longitude="longitude"),(ce.propertyFields.latitude="latitude"),(ce.propertyFields.fill="tooltipBg"),(Z.tooltip.background.cornerRadius=15),(Z.tooltip.background.propertyFields.fill="tooltipBg"),(Z.tooltip.background.propertyFields.stroke="tooltipBg"),(Z.tooltip.label.interactionsEnabled=!0),(Z.tooltip.pointerOrientation="horizontal"),(Z.tooltip.label.maxWidth=400),(Z.tooltip.label.wrap=!0),Z.tooltip.label.padding(0,0,0,0),(Z.tooltip.fontSize=16),(ce.propertyFields.tooltipHTML="tooltipHTML"),(ce.showTooltipOn="hit");var le=ce.createChild(am4core.Image);(le.propertyFields.href="imageSrc"),(le.propertyFields.width="imageWidth"),(le.propertyFields.height="imageHeight"),(le.nonScaling=!0),(le.horizontalCenter="middle"),(le.verticalCenter="middle");};x(c,d,g,m),x(u,f,y,w),x(h,p,_,v);for(var M=[],S=[],T=[],D=[],I=0;I<n.length;++I)
if(n[I].Latitude.trim()!==""){let Z="";switch(n[I].name){case "Americas":Z="Americas";break;case "Europe":Z="Europe";break;case "Asia-Pacific":Z="Asia";break;default:Z=n[I].name;break;}
var b,R;window.matchMedia("(max-width: 767px)").matches?((b=20),(R=20)):((b=30),(R=30));var F={type:"Region",title:Z,latitude:n[I].Latitude,longitude:n[I].Longitude,description:n[I]["Term description"],polygonTemplate:{fill:"#F2CD00",tooltipHTML:`<div class="tooltip-wrapper">
                                    <div class="tooltip-title">
                                        <h3 class="tooltip-heading">${Z}</h3>
                                    </div>
                                    <div class="tooltip-text-contet"> 
                                        <p class="tooltip-text">{description}</p>
                                    </div>
                                </div>`,},markerSrc:"https://www.baincapital.com/technology/img/yellow-point.svg",imageWidth:b,imageHeight:R,};M.push(F);}
for(var I=0;I<Object.keys(r).length;++I){var O=r,H=Object.keys(O),A=H[I],z=Object.values(O[A].Latitude),j=0;z.map((le)=>{var Te;le.toString().includes("\xB0")?(Te=le.split("\xB0")[0]):(Te=le),(j+=+Te);});var U=j/z.length,B=Object.values(O[A].Longitude),j=0;B.map((le)=>{var Te;le.toString().includes("\xB0")?(Te=le.split("\xB0")[0]):(Te=le),(j+=+Te);});var X=j/B.length,K=O[A],ue=Object.values(K["Portfolio Title"]);let q=[...new Set(ue)];var Ee="<ul><li>"+q.join("</li><li>")+"</li></ul>",b,R;window.matchMedia("(max-width: 767px)").matches?((b=10),(R=10)):((b=14),(R=14));var F={type:"Portfolio Company",title:ue.toString(),latitude:U.toString(),longitude:X.toString(),description:"",polygonTemplate:{fill:"#1CA6DF",tooltipHTML:`<div class="tooltip-wrapper">
                                    <div class="tooltip-title">
                                        <h3 class="tooltip-heading">${Ee}</h3>
                                    </div>
                                    
                                </div>`,},imageWidth:b,imageHeight:R,markerSrc:"https://www.baincapital.com/technology/img/blue-point.svg",};S.push(F);}
for(var I=0;I<i.length;++I){let q=i[I].title;var b,R;window.matchMedia("(max-width: 767px)").matches?((b=10),(R=10)):((b=14),(R=14));var F={type:"Bain Capital Office",title:i[I].title,latitude:i[I].Latitude,longitude:i[I].Longitude,description:"",polygonTemplate:{fill:"#E52823",tooltipHTML:`<div class="tooltip-wrapper">
                        <div class="tooltip-title">
                            <h3 class="tooltip-heading">${q}</h3>
                        </div>
                        
                    </div>`,},imageWidth:b,imageHeight:R,markerSrc:"https://www.baincapital.com/technology/img/red-tringal-point.svg",};T.push(F);}
D.push({pointData:M}),D.push({pointData:S}),D.push({pointData:T}),M==null||M.map((Z)=>{c.data.push({latitude:parseFloat(Z.latitude),longitude:parseFloat(Z.longitude),title:Z.address,description:Z.description,imageSrc:Z.markerSrc,imageWidth:Z.imageWidth,imageWidth:Z.imageHeight,tooltipHTML:Z.polygonTemplate.tooltipHTML,tooltipBg:Z.polygonTemplate.fill,});}),S==null||S.map((Z)=>{u.data.push({latitude:parseFloat(Z.latitude),longitude:parseFloat(Z.longitude),title:Z.address,description:Z.description,imageSrc:Z.markerSrc,imageWidth:Z.imageWidth,imageWidth:Z.imageHeight,tooltipHTML:Z.polygonTemplate.tooltipHTML,tooltipBg:Z.polygonTemplate.fill,});}),T==null||T.map((Z)=>{h.data.push({latitude:parseFloat(Z.latitude),longitude:parseFloat(Z.longitude),title:Z.address,description:Z.description,imageSrc:Z.markerSrc,imageWidth:Z.imageWidth,imageWidth:Z.imageHeight,tooltipHTML:Z.polygonTemplate.tooltipHTML,tooltipBg:Z.polygonTemplate.fill,});}),o.events.on("ready",function(Z){var q=document.getElementById("legend");if($(".legend-wrapper").length==0)
for(var Ae=0;Ae<D.length;++Ae)
q.innerHTML+=`<div class='legend-wrapper' id='legend-${Ae}' data-index=${Ae}>
                            <div class='legend-single'>
                                <div class="legend-image-wrap">
                                    <img src="${D[Ae].pointData[0].markerSrc}"/>
                                </div>
                                <div class="legend-text">${D[Ae].pointData[0].type}</div>
                            </div>
                        </div>`;$(".legend-wrapper").click(function(){var fe=$(this).attr("data-index");c.tooltip.hide(),console.log(c.closeAllPopups()),fe==0?$(this).hasClass("hide")?($(this).removeClass("hide"),c.show()):($(this).addClass("hide"),c.hide()):fe==1?$(this).hasClass("hide")?($(this).removeClass("hide"),u.show()):($(this).addClass("hide"),u.hide()):fe==2&&($(this).hasClass("hide")?($(this).removeClass("hide"),h.show()):($(this).addClass("hide"),h.hide()));});});});}
let hx;function gC(s,e){let t=!1;if(window.XMLHttpRequest)
(t=new XMLHttpRequest()),t.overrideMimeType&&t.overrideMimeType("text/json");else if(window.ActiveXObject)
try{t=new ActiveXObject("Msxml2.XMLHTTP");}catch{try{t=new ActiveXObject("Microsoft.XMLHTTP");}catch{}}
if(!t)return alert("Failed : ( Unable to instantiate XMLHTTP class"),!1;(t.onreadystatechange=function(){_C(t,e);}),t.open("GET",s,!0),t.send(null);}
gC(xw,Rc);function _C(s,e){s.readyState==4&&(s.status==200?new Promise((n)=>{(hx=JSON.parse(s.responseText).nodes),n();}).then(()=>e()):alert("There was a problem with the request."));}
function Rc(){return hx;}
const ap=()=>{document.getElementById("globeAnchor")&&(document.getElementById("globeAnchor").onclick=()=>{setTimeout(()=>{$p(Pc(),Cc(),Rc());},1e3);}),setTimeout(()=>{mC(Pc(),Cc(),Rc());},6500),window.location.href.includes("innerGlobe.html")&&setTimeout(()=>{$p(Pc(),Cc(),Rc());},2e3);};ze.registerPlugin(ln,$e);function eu(){if(window.location.href.startsWith("https://www.baincapital.com/technology/innerPortfolio.html")){let d=function(O,H){let A=!1;if(window.XMLHttpRequest)
(A=new XMLHttpRequest()),A.overrideMimeType&&A.overrideMimeType("text/json");else if(window.ActiveXObject)
try{A=new ActiveXObject("Msxml2.XMLHTTP");}catch{try{A=new ActiveXObject("Microsoft.XMLHTTP");}catch{}}
if(!A)
return alert("Failed : ( Unable to instantiate XMLHTTP class"),!1;(A.onreadystatechange=function(){f(A,H);}),A.open("GET",O,!0),A.send(null);},f=function(O,H){O.readyState==4&&(O.status==200?new Promise((z)=>{(h=JSON.parse(O.responseText).nodes),(h=Array.from(new Set(h.map(JSON.stringify))).map(JSON.parse)),z();}).then(()=>H()):alert("There was a problem with the request."));},p=function(){F();},F=function(O){let H=document.querySelector(".inner-container-portfolio"),A=document.querySelector(".inner-portfolio-grid");A&&H.removeChild(A);let z=[];h.map((j,X)=>z.push(j.node)),(M=z);let U=z.filter((j)=>j);U.sort((j,X)=>j.Title.toLowerCase()>X.Title.toLowerCase()?1:j.Title.toLowerCase()<X.Title.toLowerCase()?-1:0),(U=U.filter((j)=>j["Portfolio Status"]=="Active")),(_=U);let B=document.createElement("div");B.classList.add("portfolio-grid","row","inner-portfolio-grid"),H.appendChild(B),U.map((j,X)=>{let K=document.createElement("a");if((K.classList.add("col-lg-3","col-md-4","grid-item"),j.Body!=null)){var ue=/[^\w\s-]/g;let ce=j.Title.toLowerCase().replace(/ /g,"-");ce.replace(ue,""),K.setAttribute("href",`https://www.baincapital.com/technology/portfolio-template.html?portfolio=${ce.replace(ue,"")}`);}
B.appendChild(K);let Ee=document.createElement("div");Ee.classList.add("media"),K.appendChild(Ee);let Z=document.createElement("div");Z.classList.add("media-img"),Ee.appendChild(Z);let q=document.createElement("div");Z.appendChild(q);let Ae=document.createElement("img"),fe=document.createElement("span");if((fe.setAttribute("class","media-logo-name"),j["Portfolio Logo"]==null||j["Portfolio Logo"]==""?((fe.innerHTML=j.Title),q.appendChild(fe)):((Ae.src=j["Portfolio Logo"].src),q.appendChild(Ae)),j.Body!=null)){let ce="portfolioAnchor",le=j.Body.replace(/<a.*?href="(.*?)".*?>(.*?)<\/a>/gi,'<a href="$1" id="'+ce+'">$2</a>');j.Body=le;}
K.addEventListener("click",()=>{let ce=JSON.stringify(j);localStorage.setItem("portfolio",ce),localStorage.setItem("scrollPos",window.scrollY);}),K.addEventListener("contextmenu",()=>{let ce=JSON.stringify(j);return(localStorage.setItem("portfolio",ce),localStorage.setItem("scrollPos",window.scrollY),!1);},!1);});};var o=d,c=f,l=p,a=F;const u=parseInt(localStorage.getItem("scrollPos"));setTimeout(()=>{u&&u<document.body.scrollHeight?(window.scrollTo(0,u),window.scrollTo(0,u),setTimeout(()=>{localStorage.removeItem("scrollPos");},1e3)):window.scrollTo(0,0);},1e3),$(document).ready(function(){setTimeout(()=>{$(".portfolio-sorting-wrap .dropdown .dropdown-menu a").on("click",function(){$(".portfolio-sorting-wrap .dropdown-menu a").removeClass("selected"),$(this).addClass("selected"),$(this).parent().parent().parent().find(".psorting").find(".selected-value").text($(this).text());});},1e3);});let h;d(K0,p),document.querySelector(".grid-item").addEventListener("click",()=>{});let y,_=[];const m=()=>{let O=document.querySelector(".inner-container-portfolio"),H=document.querySelector(".inner-portfolio-grid");(y=y.toLowerCase()),H&&O.removeChild(H);let A=[];h.map((B,j)=>A.push(B.node));function z(B){return B.filter(function(j){return j.Title.toLowerCase().search(y)!=-1;});}
let U=document.createElement("div");U.classList.add("portfolio-grid","row","inner-portfolio-grid"),O.appendChild(U),z(_).map((B,j)=>{let X=document.createElement("a");if((X.classList.add("col-lg-3","col-md-4","grid-item"),B.Body!=null)){var K=/[^\w\s-]/g;let fe=B.Title.toLowerCase().replace(/ /g,"-");fe.replace(K,""),X.setAttribute("href",`https://www.baincapital.com/technology/portfolio-template.html?portfolio=${fe.replace(K,"")}`);}
U.appendChild(X);let ue=document.createElement("div");ue.classList.add("media"),X.appendChild(ue);let Ee=document.createElement("div");Ee.classList.add("media-img"),ue.appendChild(Ee);let Z=document.createElement("div");Ee.appendChild(Z);let q=document.createElement("img"),Ae=document.createElement("span");if((Ae.setAttribute("class","media-logo-name"),B["Portfolio Logo"]==null||B["Portfolio Logo"]==""?((Ae.innerHTML=B.Title),Z.appendChild(Ae)):((q.src=B["Portfolio Logo"].src),Z.appendChild(q)),B.Body!=null)){let fe="portfolioAnchor",ce=B.Body.replace(/<a.*?href="(.*?)".*?>(.*?)<\/a>/gi,'<a href="$1" id="'+fe+'">$2</a>');B.Body=ce;}
X.addEventListener("click",()=>{let fe=JSON.stringify(B);localStorage.setItem("portfolio",fe),localStorage.setItem("scrollPos",window.scrollY);}),X.addEventListener("contextmenu",()=>{let fe=JSON.stringify(B);return(localStorage.setItem("portfolio",fe),localStorage.setItem("scrollPos",window.scrollY),!1);},!1);});},w=(O)=>{!O.inputType&&v.value===""&&((y=""),R());};let v=document.getElementById("searchText"),x=document.getElementById("portfolioSearchButton");(x.style.cursor="pointer"),x.addEventListener("click",m),v.addEventListener("keydown",function(O){(O.keyCode===13||O.which===13)&&m();}),v.addEventListener("input",w),v.addEventListener("keypress",function(O){y=O.target.value;});let M=[],S=[],T=0,D=0,I=0,b=0;const R=(O)=>{let H=document.querySelector(".inner-container-portfolio"),A=document.querySelector(".inner-portfolio-grid"),z;A&&H.removeChild(A),T==0&&D==0&&I==0&&b==0?(S=M.filter((B)=>B)):T!=0&&D==0&&I==0&&b==0?(S=M.filter((B)=>((z=document.getElementById("firstDrpDwn").innerHTML),z=="All"?B:B.Region==z))):T==0&&D!=0&&I==0&&b==0?(S=M.filter((B)=>((z=document.getElementById("thirdDrpDwn").innerHTML),z=="All"?B:B["Portfolio Status"]==z))):T==0&&D==0&&I!=0&&b==0?(S=M.filter((B)=>((z=document.getElementById("fourthDrpDwn").innerHTML),z=="All"?B:B.Business.includes(z)))):T==0&&D==0&&I==0&&b!=0?(S=M.filter((B)=>((z=document.getElementById("fifthDrpDwn").innerHTML),z=="All"?B:B["Sub Vertical"]==z))):T!=0&&D!=0&&I==0&&b==0?(S=M.filter((B)=>B.Region==document.getElementById("firstDrpDwn").innerHTML&&B["Portfolio Status"]==document.getElementById("thirdDrpDwn").innerHTML)):T!=0&&D==0&&I!=0&&b==0?(S=M.filter((B)=>B.Region==document.getElementById("firstDrpDwn").innerHTML&&B.Business.includes(document.getElementById("fourthDrpDwn").innerHTML))):T!=0&&D==0&&I==0&&b!=0?(S=M.filter((B)=>B.Region==document.getElementById("firstDrpDwn").innerHTML&&B["Sub Vertical"]==document.getElementById("fifthDrpDwn").innerHTML)):T==0&&D!=0&&I!=0&&b==0?(S=M.filter((B)=>((z=document.getElementById("thirdDrpDwn").innerHTML),B["Portfolio Status"]==document.getElementById("thirdDrpDwn").innerHTML&&B.Business.includes(document.getElementById("fourthDrpDwn").innerHTML)))):T==0&&D!=0&&I==0&&b!=0?(S=M.filter((B)=>B["Portfolio Status"]==document.getElementById("thirdDrpDwn").innerHTML&&B["Sub Vertical"]==document.getElementById("fifthDrpDwn").innerHTML)):T==0&&D==0&&I!=0&&b!=0?(S=M.filter((B)=>B.Business.includes(document.getElementById("fourthDrpDwn").innerHTML)&&B["Sub Vertical"]==document.getElementById("fifthDrpDwn").innerHTML)):T!=0&&D!=0&&I!=0&&b==0?(S=M.filter((B)=>B.Region==z&&B["Portfolio Status"]==document.getElementById("thirdDrpDwn").innerHTML&&B.Business.includes(document.getElementById("fourthDrpDwn").innerHTML))):T!=0&&D!=0&&I==0&&b!=0?(S=M.filter((B)=>B.Region==document.getElementById("firstDrpDwn").innerHTML&&B["Portfolio Status"]==document.getElementById("thirdDrpDwn").innerHTML&&B["Sub Vertical"]==document.getElementById("fifthDrpDwn").innerHTML)):T!=0&&D==0&&I!=0&&b!=0?(S=M.filter((B)=>B.Region==document.getElementById("firstDrpDwn").innerHTML&&B.Business.includes(document.getElementById("fourthDrpDwn").innerHTML)&&B["Sub Vertical"]==document.getElementById("fifthDrpDwn").innerHTML)):T==0&&D!=0&&I!=0&&b!=0?(S=M.filter((B)=>B["Portfolio Status"]==document.getElementById("thirdDrpDwn").innerHTML&&B.Business.includes(document.getElementById("fourthDrpDwn").innerHTML)&&B["Sub Vertical"]==document.getElementById("fifthDrpDwn").innerHTML)):T!=0&&D!=0&&I!=0&&b!=0&&(S=M.filter((B)=>B.Region==z&&B["Portfolio Status"]==document.getElementById("thirdDrpDwn").innerHTML&&B.Business.includes(document.getElementById("fourthDrpDwn").innerHTML)&&B["Sub Vertical"]==document.getElementById("fifthDrpDwn").innerHTML)),document.getElementById("thirdDrpDwn").innerHTML=="Active"&&(S=S.filter((B)=>B["Portfolio Status"]==document.getElementById("thirdDrpDwn").innerHTML)),document.getElementById("thirdDrpDwn").innerHTML=="Exited"&&(S=S.filter((B)=>B["Portfolio Status"]==document.getElementById("thirdDrpDwn").innerHTML)),S.sort((B,j)=>B.Title.toLowerCase()>j.Title.toLowerCase()?1:B.Title.toLowerCase()<j.Title.toLowerCase()?-1:0),(_=S);let U=document.createElement("div");U.classList.add("portfolio-grid","row","inner-portfolio-grid"),H.appendChild(U),S.map((B,j)=>{let X=document.createElement("a");if((X.classList.add("col-lg-3","col-md-4","grid-item"),B.Body!=null)){var K=/[^\w\s-]/g;let fe=B.Title.toLowerCase().replace(/ /g,"-");fe.replace(K,""),X.setAttribute("href",`https://www.baincapital.com/technology/portfolio-template.html?portfolio=${fe.replace(K,"")}`);}
U.appendChild(X);let ue=document.createElement("div");ue.classList.add("media"),X.appendChild(ue);let Ee=document.createElement("div");Ee.classList.add("media-img"),ue.appendChild(Ee);let Z=document.createElement("div");Ee.appendChild(Z);let q=document.createElement("img"),Ae=document.createElement("span");if((Ae.setAttribute("class","media-logo-name"),B["Portfolio Logo"]==null||B["Portfolio Logo"]==""?((Ae.innerHTML=B.Title),Z.appendChild(Ae)):((q.src=B["Portfolio Logo"].src),Z.appendChild(q)),B.Body!=null)){let fe="portfolioAnchor",ce=B.Body.replace(/<a.*?href="(.*?)".*?>(.*?)<\/a>/gi,'<a href="$1" id="'+fe+'">$2</a>');B.Body=ce;}
X.addEventListener("click",()=>{let fe=JSON.stringify(B);localStorage.setItem("portfolio",fe),localStorage.setItem("scrollPos",window.scrollY);}),X.addEventListener("contextmenu",()=>{let fe=JSON.stringify(B);return(localStorage.setItem("portfolio",fe),localStorage.setItem("scrollPos",window.scrollY),!1);},!1);});};var s=document.getElementById("firstDrpDwn"),e=document.getElementById("thirdDrpDwn"),t=document.getElementById("fourthDrpDwn"),n=document.getElementById("fifthDrpDwn"),i=new MutationObserver(function(O){let H=[];O.forEach(function(A){H.push(1);for(let z=0;z<H.length-1;z++)
A.target.id=="firstDrpDwn"?(document.getElementById("firstDrpDwn").innerHTML=="All"?(T=0):(T=1),R()):A.target.id=="secondDrpDwn"?(document.getElementById("secondDrpDwn").innerHTML=="All",R()):A.target.id=="thirdDrpDwn"?(document.getElementById("thirdDrpDwn").innerHTML=="All"?(D=0):(D=1),R()):A.target.id=="fourthDrpDwn"?(document.getElementById("fourthDrpDwn").innerHTML=="All"?(I=0):(I=1),R()):A.target.id=="fifthDrpDwn"&&(document.getElementById("fifthDrpDwn").innerHTML=="All"?(b=0):(b=1),R());});}),r={attributes:!0,childList:!0,characterData:!0};i.disconnect(),i.observe(s,r),i.observe(e,r),i.observe(t,r),i.observe(n,r);}}
ze.registerPlugin($e,ln);const yC=[{name:"side-transition",from:{namespace:["home"]},to:{namespace:["side1","side2","side3","side4"]},leave(s){let e=ze.timeline(),t=s.next.container.dataset.barbaNamespace==="side1"?"100%":"-100%";return(e.to(s.current.container,{x:t,opacity:0,overwrite:"auto"}),e.to(document.querySelector(".container3d"),{x:t,opacity:0,duration:0,overwrite:"auto"},"<"),e);},enter(s){history.scrollRestoration&&(history.scrollRestoration="manual"),Vc("side1"),s.current.container.remove(),s.next.container.dataset.barbaNamespace==="side2"&&Xc(),s.next.container.dataset.barbaNamespace==="side4"&&eu();let e=ze.timeline({onComplete:()=>{pf();},});return(e.to(window,{scrollTo:0,duration:0,overwrite:!1}),e.to(".side-section__back",{opacity:1,x:0,duration:0.4}),e.to(".content",{opacity:1,y:0,duration:0.4}),e);},},{name:"side-transition",from:{namespace:["side1","side2","side3","side4"]},to:{namespace:["home"]},leave(s){let e=ze.timeline();return(e.to(".side-section__back",{opacity:0,x:0,duration:0.1}),e.to(".content",{opacity:0,y:0,duration:0.4}),e.to(window,{scrollTo:0,duration:0,overwrite:!1}),e);},enter(s){let e=$e.getAll().length;e>10&&$e.getAll()[e-1].kill(),s.current.container.remove(),s.next.container.dataset.barbaNamespace==="side2"&&Xc(),history.scrollRestoration&&(history.scrollRestoration="manual"),document.body.dataset.enabled3d&&document.body.dataset.enabled3d==="0"&&(document.body.dataset.enabled3d="1"),mf(),gf(),ap(),eu(),Vc("home");let t=s.current.container.dataset.barbaNamespace,n=s.current.container.dataset.barbaNamespace==="side1"?"100%":"-100%",i=ze.timeline();return(i.fromTo(window,{scrollTo:0,duration:0},{scrollTo:t&&t==="side1"?".page4":t&&t==="side2"?".page3":t&&t==="side3"?".page5":t&&t==="side4"?".page9":0,duration:0.1,}),i.fromTo(s.next.container,{x:n,opacity:0},{x:"0",opacity:1,duration:1}),i.fromTo(".container3d",{x:n,opacity:0},{x:"0",opacity:1,duration:1},"<"),i);},},];let Dc;function xC(s,e){let t=!1;if(window.XMLHttpRequest)
(t=new XMLHttpRequest()),t.overrideMimeType&&t.overrideMimeType("text/json");else if(window.ActiveXObject)
try{t=new ActiveXObject("Msxml2.XMLHTTP");}catch{try{t=new ActiveXObject("Microsoft.XMLHTTP");}catch{}}
if(!t)return alert("Failed : ( Unable to instantiate XMLHTTP class"),!1;(t.onreadystatechange=function(){vC(t,e);}),t.open("GET",s,!0),t.send(null);}
xC(bw,wC);function vC(s,e){s.readyState==4&&(s.status==200?new Promise((n)=>{(Dc=JSON.parse(s.responseText).nodes),(Dc=Array.from(new Set(Dc.map(JSON.stringify))).map(JSON.parse)),n();}).then(()=>e()):alert("There was a problem with the request."));}
function wC(){dx();}
function dx(s){document.querySelector("#portfolio-global-referrer")&&(document.querySelector("#portfolio-global-referrer").onclick=()=>{localStorage.setItem("globalPortfolioButton","true"),(window.location.href="https://www.baincapital.com/technology/innerPortfolio.html");}),document.querySelectorAll(".expertise-cases-link").forEach(function(a){a.onclick=(l)=>{localStorage.setItem("scrollPos",window.scrollY);};});const t=parseInt(localStorage.getItem("scrollPos"));if((setTimeout(()=>{t&&t<document.body.scrollHeight&&window.location.href.startsWith("https://www.baincapital.com/technology/sector-expertise/")&&(window.scrollTo(0,t),window.scrollTo(0,t),setTimeout(()=>{localStorage.removeItem("scrollPos");},1e3));},1e3),(s=="IT-Services"||window.location.href.startsWith("https://www.baincapital.com/technology/sector-expertise/IT-Services.html"))&&((document.getElementById("IT-services-content").style.display="block"),(document.getElementById("IT-services-line").style.display="block")),(s=="Healthcare-IT"||window.location.href.startsWith("https://www.baincapital.com/technology/sector-expertise/Healthcare-IT.html"))&&(document.getElementById("IT-services-video").style.display="block"),window.location.href.startsWith("https://www.baincapital.com/technology/sector-expertise/Horizontal-Solutions.html")||window.location.href.startsWith("https://www.baincapital.com/technology/sector-expertise/Vertical-Software.html"))){document.querySelector(".expertise-numbers");let a=document.querySelectorAll(".expertise-numbers-item")[0];a.classList.remove("expertise-numbers-item"),a.classList.add("expertise-numbers-item-horizontals"),document.querySelector(".expertise-numbers-item")&&document.querySelector(".expertise-numbers-item").remove();}else if(document.querySelectorAll(".expertise-numbers-item-horizontals")[0]){let a=document.querySelectorAll(".expertise-numbers-item-horizontals")[0];a.classList.remove("expertise-numbers-item-horizontals"),a.classList.add("expertise-numbers-item");}
if(window.location.href.startsWith("https://www.baincapital.com/technology/sector-expertise/Global-Leaders.html")){let a=document.querySelector("#portfolio-grid");a.style.marginTop="0px";let l=document.querySelector("#description-title");l.style.marginBottom="0px";}
let n=[{name:"financial-technology.html",term:"Financial Technology",link:"https://www.baincapital.com/technology/sector-expertise/financial-technology.html",},{name:"cybersecurity.html",term:"Cybersecurity",link:"https://www.baincapital.com/technology/sector-expertise/cybersecurity.html",},{name:"Horizontal Solutions",term:"Horizontal Solutions",link:"https://www.baincapital.com/technology/sector-expertise/Horizontal-Solutions.html",},{name:"Vertical Software",term:"Vertical Software",link:"https://www.baincapital.com/technology/sector-expertise/Vertical-Software.html",},{name:"Healthcare-IT",term:"Healthcare IT",link:"https://www.baincapital.com/technology/sector-expertise/Healthcare-IT.html",},{name:"Digital-Infrastructure",term:"Digital Infrastructure",link:"https://www.baincapital.com/technology/sector-expertise/Digital-Infrastructure.html",},{name:"Crossing-Borders",term:"Global Leaders",link:"https://www.baincapital.com/technology/sector-expertise/Global-Leaders.html",},{name:"Internet and Consumer Tech",term:"Internet & Consumer Tech",link:"https://www.baincapital.com/technology/sector-expertise/Internet-and-Consumer-Tech.html",},{name:"Internet and Consumer Tech",term:"Internet &amp; Consumer Tech",link:"https://www.baincapital.com/technology/sector-expertise/Internet-and-Consumer-Tech.html",},{name:"IT-Services",term:"IT Services",link:"https://www.baincapital.com/technology/sector-expertise/IT-Services.html",},],i;n.map((a,l)=>{window.location.href==a.link&&(i=a.term);});let r=[];Dc.map((a)=>{a.node["Highlighted on portfolio"].includes(i)&&r.push(a.node);});let o=document.getElementById("portfolio-grid");o&&(r.sort((a,l)=>a.Title.toLowerCase()>l.Title.toLowerCase()?1:a.Title.toLowerCase()<l.Title.toLowerCase()?-1:0),r.map((a,l)=>{let c=document.createElement("a");if((c.classList.add("col-lg-3","col-md-4","grid-item"),a.Body!=null)){var u=/[^\w\s-]/g;let y=a.Title.toLowerCase().replace(/ /g,"-");y.replace(u,""),c.setAttribute("href",`https://www.baincapital.com/technology/portfolio-template.html?portfolio=${y.replace(u,"")}`);}
o.appendChild(c);let h=document.createElement("div");h.classList.add("media"),c.appendChild(h);let d=document.createElement("div");d.classList.add("media-img"),h.appendChild(d);let f=document.createElement("div");d.appendChild(f);let p=document.createElement("img"),g=document.createElement("span");if((g.setAttribute("class","media-logo-name"),a["White Logo"]==null||a["White Logo"]==""?a["Portfolio Logo"]==null||a["Portfolio Logo"]==""?((g.innerHTML=a.Title),f.appendChild(g)):((p.src=a["Portfolio Logo"].src),f.appendChild(p)):((p.src=a["White Logo"].src),f.appendChild(p),f.setAttribute("class","black-background")),a.Body!=null)){let y="portfolioAnchor",_=a.Body.replace(/<a.*?href="(.*?)".*?>(.*?)<\/a>/gi,'<a href="$1" id="'+y+'">$2</a>');a.Body=_;}
c.addEventListener("click",()=>{let y=JSON.stringify(a);localStorage.setItem("portfolio",y),localStorage.setItem("scrollPos",window.scrollY);}),c.addEventListener("contextmenu",function(){let y=JSON.stringify(a);return(localStorage.setItem("portfolio",y),localStorage.setItem("fromSectExp",!0),!1);},!1);}));}
const bC=async()=>{const s=parseInt(localStorage.getItem("scrollPos"));s&&s<document.body.scrollHeight&&window.location.href.startsWith("https://www.baincapital.com/technology/capabilities/")&&(window.scrollTo(0,s),localStorage.removeItem("scrollPos")),document.querySelectorAll("#casestudies-link-button")&&document.querySelectorAll("#casestudies-link-button").forEach(function(t){t.onclick=()=>{localStorage.setItem("scrollPos",window.scrollY);};});};ze.registerPlugin($e,ln);let Di=document.querySelector(".main").dataset.barbaNamespace;window.location.href.includes("innerPortfolio.html")&&eu();Vc(Di);if(Di==="side1"||Di==="side2"||Di==="side3"||Di==="side4"){history.scrollRestoration&&(history.scrollRestoration="manual"),pf();let s=document.querySelector(".side-section"),e=s.querySelector(".side-section__back"),t=s.querySelector(".content"),n=ze.timeline();n.to(e,{opacity:1,x:0,overwrite:"auto"}),n.to(t,{opacity:1,y:0,overwrite:"auto"});}
Di==="bio"&&Q0();Di==="portfolios"&&e_();Di==="Healthcare-IT"&&J0();Di==="side2"&&Xc();let MC=[];_w.init({preventRunning:!0,debug:!0,transitions:[...MC,...yC,{name:"opacity-transition",leave(s){history.scrollRestoration&&(history.scrollRestoration="manual"),s.current.container.dataset.barbaNamespace==="home"&&(document.body.dataset.scrollPos=window.scrollY.toString());let e=ze.timeline();return(e.to(s.current.container,{opacity:0,overwrite:"auto"}),e.to(document.querySelector(".container3d"),{opacity:0,duration:0,overwrite:"auto"},"<"),e);},enter(s){var i;let e=s.next.container.dataset.barbaNamespace;Vc(e);let t=document.getElementById("portfolio-grid");s.current.container.dataset.barbaNamespace;let n=(i=document.body.dataset.scrollPos)!=null?i:0;if((s.current.container.remove(),document.getElementById("capabilities_back_button"))){let r=document.getElementById("capabilities_back_button");r.onclick=()=>{window.location.replace("./capabilities.html");};}
if((t&&e&&dx(e),ze.to(window,{scrollTo:0,duration:0,overwrite:"auto"}),bC(),e==="side4"&&eu(),e==="home"))
(document.body.dataset.enabled3d||document.body.dataset.enabled3d==="0")&&(document.body.dataset.enabled3d="1"),mf(),gf(),ap(),(s.next.container.style.opacity="0"),setTimeout(()=>{let r=ze.timeline();r.to(window,{scrollTo:n,duration:0,overwrite:"auto"}),r.to(s.next.container,{opacity:1,duration:0.6,ease:"none",overwrite:"auto",}),r.to(".container3d",{x:"0%",opacity:0.01,duration:1,ease:"sine",overwrite:"auto",},"<"),r.to(".container3d",{opacity:1,duration:1,overwrite:"auto",});},100);else if(e==="side1"||e==="side2"||e==="side3"||e==="side4"){history.scrollRestoration&&(history.scrollRestoration="manual"),pf();let r=document.querySelector(".side-section"),o=r.querySelector(".side-section__back"),a=r.querySelector(".content"),l=ze.timeline();l.to(o,{opacity:1,x:0,overwrite:"auto"}),l.to(a,{opacity:1,y:0,overwrite:"auto"});}else
ze.from(s.next.container,{opacity:0,duration:1,ease:"none",overwrite:!0,});e==="bio"&&Q0(),e==="portfolios"&&e_(),e==="Healthcare-IT"&&J0(),e==="side2"&&Xc();},},],});const _g={type:"change"},Bh={type:"start"},yg={type:"end"};class SC extends Hi{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),(this.object=e),(this.domElement=t),(this.domElement.style.touchAction="none"),(this.enabled=!0),(this.target=new C()),(this.minDistance=0),(this.maxDistance=1/0),(this.minZoom=0),(this.maxZoom=1/0),(this.minPolarAngle=0),(this.maxPolarAngle=Math.PI),(this.minAzimuthAngle=-1/0),(this.maxAzimuthAngle=1/0),(this.enableDamping=!1),(this.dampingFactor=0.05),(this.enableZoom=!0),(this.zoomSpeed=1),(this.enableRotate=!0),(this.rotateSpeed=1),(this.enablePan=!0),(this.panSpeed=1),(this.screenSpacePanning=!0),(this.keyPanSpeed=7),(this.autoRotate=!1),(this.autoRotateSpeed=2),(this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown",}),(this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN,}),(this.touches={ONE:Nr.ROTATE,TWO:Nr.DOLLY_PAN}),(this.target0=this.target.clone()),(this.position0=this.object.position.clone()),(this.zoom0=this.object.zoom),(this._domElementKeyEvents=null),(this.getPolarAngle=function(){return a.phi;}),(this.getAzimuthalAngle=function(){return a.theta;}),(this.getDistance=function(){return this.object.position.distanceTo(this.target);}),(this.listenToKeyEvents=function(N){N.addEventListener("keydown",L),(this._domElementKeyEvents=N);}),(this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),(n.zoom0=n.object.zoom);}),(this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),(n.object.zoom=n.zoom0),n.object.updateProjectionMatrix(),n.dispatchEvent(_g),n.update(),(r=i.NONE);}),(this.update=(function(){const N=new C(),oe=new Ht().setFromUnitVectors(e.up,new C(0,1,0)),be=oe.clone().invert(),de=new C(),k=new Ht(),ye=2*Math.PI;return function(){const Fe=n.object.position;N.copy(Fe).sub(n.target),N.applyQuaternion(oe),a.setFromVector3(N),n.autoRotate&&r===i.NONE&&D(S()),n.enableDamping?((a.theta+=l.theta*n.dampingFactor),(a.phi+=l.phi*n.dampingFactor)):((a.theta+=l.theta),(a.phi+=l.phi));let ae=n.minAzimuthAngle,ne=n.maxAzimuthAngle;return(isFinite(ae)&&isFinite(ne)&&(ae<-Math.PI?(ae+=ye):ae>Math.PI&&(ae-=ye),ne<-Math.PI?(ne+=ye):ne>Math.PI&&(ne-=ye),ae<=ne?(a.theta=Math.max(ae,Math.min(ne,a.theta))):(a.theta=a.theta>(ae+ne)/2?Math.max(ae,a.theta):Math.min(ne,a.theta))),(a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi))),a.makeSafe(),(a.radius*=c),(a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius))),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),N.setFromSpherical(a),N.applyQuaternion(be),Fe.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?((l.theta*=1-n.dampingFactor),(l.phi*=1-n.dampingFactor),u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),(c=1),h||de.distanceToSquared(n.object.position)>o||8*(1-k.dot(n.object.quaternion))>o?(n.dispatchEvent(_g),de.copy(n.object.position),k.copy(n.object.quaternion),(h=!1),!0):!1);};})()),(this.dispose=function(){n.domElement.removeEventListener("contextmenu",ie),n.domElement.removeEventListener("pointerdown",se),n.domElement.removeEventListener("pointercancel",me),n.domElement.removeEventListener("wheel",Ue),n.domElement.removeEventListener("pointermove",_e),n.domElement.removeEventListener("pointerup",pe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",L);});const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6,};let r=i.NONE;const o=1e-6,a=new Nd(),l=new Nd();let c=1;const u=new C();let h=!1;const d=new J(),f=new J(),p=new J(),g=new J(),y=new J(),_=new J(),m=new J(),w=new J(),v=new J(),x=[],M={};function S(){return((2*Math.PI)/60/60)*n.autoRotateSpeed;}
function T(){return Math.pow(0.95,n.zoomSpeed);}
function D(N){l.theta-=N;}
function I(N){l.phi-=N;}
const b=(function(){const N=new C();return function(be,de){N.setFromMatrixColumn(de,0),N.multiplyScalar(-be),u.add(N);};})(),R=(function(){const N=new C();return function(be,de){n.screenSpacePanning===!0?N.setFromMatrixColumn(de,1):(N.setFromMatrixColumn(de,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(be),u.add(N);};})(),F=(function(){const N=new C();return function(be,de){const k=n.domElement;if(n.object.isPerspectiveCamera){const ye=n.object.position;N.copy(ye).sub(n.target);let ge=N.length();(ge*=Math.tan(((n.object.fov/2)*Math.PI)/180)),b((2*be*ge)/k.clientHeight,n.object.matrix),R((2*de*ge)/k.clientHeight,n.object.matrix);}else
n.object.isOrthographicCamera?(b((be*(n.object.right-n.object.left))/n.object.zoom/k.clientWidth,n.object.matrix),R((de*(n.object.top-n.object.bottom))/n.object.zoom/k.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),(n.enablePan=!1));};})();function O(N){n.object.isPerspectiveCamera?(c/=N):n.object.isOrthographicCamera?((n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*N))),n.object.updateProjectionMatrix(),(h=!0)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),(n.enableZoom=!1));}
function H(N){n.object.isPerspectiveCamera?(c*=N):n.object.isOrthographicCamera?((n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/N))),n.object.updateProjectionMatrix(),(h=!0)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),(n.enableZoom=!1));}
function A(N){d.set(N.clientX,N.clientY);}
function z(N){m.set(N.clientX,N.clientY);}
function U(N){g.set(N.clientX,N.clientY);}
function B(N){f.set(N.clientX,N.clientY),p.subVectors(f,d).multiplyScalar(n.rotateSpeed);const oe=n.domElement;D((2*Math.PI*p.x)/oe.clientHeight),I((2*Math.PI*p.y)/oe.clientHeight),d.copy(f),n.update();}
function j(N){w.set(N.clientX,N.clientY),v.subVectors(w,m),v.y>0?O(T()):v.y<0&&H(T()),m.copy(w),n.update();}
function X(N){y.set(N.clientX,N.clientY),_.subVectors(y,g).multiplyScalar(n.panSpeed),F(_.x,_.y),g.copy(y),n.update();}
function K(N){N.deltaY<0?H(T()):N.deltaY>0&&O(T()),n.update();}
function ue(N){let oe=!1;switch(N.code){case n.keys.UP:F(0,n.keyPanSpeed),(oe=!0);break;case n.keys.BOTTOM:F(0,-n.keyPanSpeed),(oe=!0);break;case n.keys.LEFT:F(n.keyPanSpeed,0),(oe=!0);break;case n.keys.RIGHT:F(-n.keyPanSpeed,0),(oe=!0);break;}
oe&&(N.preventDefault(),n.update());}
function Ee(){if(x.length===1)d.set(x[0].pageX,x[0].pageY);else{const N=0.5*(x[0].pageX+x[1].pageX),oe=0.5*(x[0].pageY+x[1].pageY);d.set(N,oe);}}
function Z(){if(x.length===1)g.set(x[0].pageX,x[0].pageY);else{const N=0.5*(x[0].pageX+x[1].pageX),oe=0.5*(x[0].pageY+x[1].pageY);g.set(N,oe);}}
function q(){const N=x[0].pageX-x[1].pageX,oe=x[0].pageY-x[1].pageY,be=Math.sqrt(N*N+oe*oe);m.set(0,be);}
function Ae(){n.enableZoom&&q(),n.enablePan&&Z();}
function fe(){n.enableZoom&&q(),n.enableRotate&&Ee();}
function ce(N){if(x.length==1)f.set(N.pageX,N.pageY);else{const be=te(N),de=0.5*(N.pageX+be.x),k=0.5*(N.pageY+be.y);f.set(de,k);}
p.subVectors(f,d).multiplyScalar(n.rotateSpeed);const oe=n.domElement;D((2*Math.PI*p.x)/oe.clientHeight),I((2*Math.PI*p.y)/oe.clientHeight),d.copy(f);}
function le(N){if(x.length===1)y.set(N.pageX,N.pageY);else{const oe=te(N),be=0.5*(N.pageX+oe.x),de=0.5*(N.pageY+oe.y);y.set(be,de);}
_.subVectors(y,g).multiplyScalar(n.panSpeed),F(_.x,_.y),g.copy(y);}
function Te(N){const oe=te(N),be=N.pageX-oe.x,de=N.pageY-oe.y,k=Math.sqrt(be*be+de*de);w.set(0,k),v.set(0,Math.pow(w.y/m.y,n.zoomSpeed)),O(v.y),m.copy(w);}
function V(N){n.enableZoom&&Te(N),n.enablePan&&le(N);}
function ee(N){n.enableZoom&&Te(N),n.enableRotate&&ce(N);}
function se(N){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",_e),n.domElement.addEventListener("pointerup",pe)),he(N),N.pointerType==="touch"?E(N):Le(N));}
function _e(N){n.enabled!==!1&&(N.pointerType==="touch"?Q(N):Se(N));}
function pe(N){Me(N),x.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",_e),n.domElement.removeEventListener("pointerup",pe)),n.dispatchEvent(yg),(r=i.NONE);}
function me(N){Me(N);}
function Le(N){let oe;switch(N.button){case 0:oe=n.mouseButtons.LEFT;break;case 1:oe=n.mouseButtons.MIDDLE;break;case 2:oe=n.mouseButtons.RIGHT;break;default:oe=-1;}
switch(oe){case kr.DOLLY:if(n.enableZoom===!1)return;z(N),(r=i.DOLLY);break;case kr.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;U(N),(r=i.PAN);}else{if(n.enableRotate===!1)return;A(N),(r=i.ROTATE);}
break;case kr.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;A(N),(r=i.ROTATE);}else{if(n.enablePan===!1)return;U(N),(r=i.PAN);}
break;default:r=i.NONE;}
r!==i.NONE&&n.dispatchEvent(Bh);}
function Se(N){if(n.enabled!==!1)
switch(r){case i.ROTATE:if(n.enableRotate===!1)return;B(N);break;case i.DOLLY:if(n.enableZoom===!1)return;j(N);break;case i.PAN:if(n.enablePan===!1)return;X(N);break;}}
function Ue(N){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(N.preventDefault(),n.dispatchEvent(Bh),K(N),n.dispatchEvent(yg));}
function L(N){n.enabled===!1||n.enablePan===!1||ue(N);}
function E(N){switch((Re(N),x.length)){case 1:switch(n.touches.ONE){case Nr.ROTATE:if(n.enableRotate===!1)return;Ee(),(r=i.TOUCH_ROTATE);break;case Nr.PAN:if(n.enablePan===!1)return;Z(),(r=i.TOUCH_PAN);break;default:r=i.NONE;}
break;case 2:switch(n.touches.TWO){case Nr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(),(r=i.TOUCH_DOLLY_PAN);break;case Nr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(),(r=i.TOUCH_DOLLY_ROTATE);break;default:r=i.NONE;}
break;default:r=i.NONE;}
r!==i.NONE&&n.dispatchEvent(Bh);}
function Q(N){switch((Re(N),r)){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ce(N),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(N),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;V(N),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ee(N),n.update();break;default:r=i.NONE;}}
function ie(N){n.enabled!==!1&&N.preventDefault();}
function he(N){x.push(N);}
function Me(N){delete M[N.pointerId];for(let oe=0;oe<x.length;oe++)
if(x[oe].pointerId==N.pointerId){x.splice(oe,1);return;}}
function Re(N){let oe=M[N.pointerId];oe===void 0&&((oe=new J()),(M[N.pointerId]=oe)),oe.set(N.pageX,N.pageY);}
function te(N){const oe=N.pointerId===x[0].pointerId?x[1]:x[0];return M[oe.pointerId];}
n.domElement.addEventListener("contextmenu",ie),n.domElement.addEventListener("pointerdown",se),n.domElement.addEventListener("pointercancel",me),n.domElement.addEventListener("wheel",Ue,{passive:!1}),this.update();}}
const xs={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`,};class Qo{constructor(){(this.enabled=!0),(this.needsSwap=!0),(this.clear=!1),(this.renderToScreen=!1);}
setSize(){}
render(){console.error("THREE.Pass: .render() must be implemented in derived pass.");}}
const TC=new Ms(-1,1,1,-1,0,1),lp=new Be();lp.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3));lp.setAttribute("uv",new Ce([0,2,0,0,2,0],2));class cp{constructor(e){this._mesh=new ht(lp,e);}
dispose(){this._mesh.geometry.dispose();}
render(e){e.render(this._mesh,TC);}
get material(){return this._mesh.material;}
set material(e){this._mesh.material=e;}}
class tu extends Qo{constructor(e,t){super(),(this.textureID=t!==void 0?t:"tDiffuse"),e instanceof kt?((this.uniforms=e.uniforms),(this.material=e)):e&&((this.uniforms=Io.clone(e.uniforms)),(this.material=new kt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,}))),(this.fsQuad=new cp(this.material));}
render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),(this.fsQuad.material=this.material),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e));}}
class xg extends Qo{constructor(e,t){super(),(this.scene=e),(this.camera=t),(this.clear=!0),(this.needsSwap=!1),(this.inverse=!1);}
render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?((o=0),(a=1)):((o=1),(a=0)),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0);}}
class EC extends Qo{constructor(){super(),(this.needsSwap=!1);}
render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1);}}
class AC{constructor(e,t){if(((this.renderer=e),t===void 0)){const n={minFilter:Ke,magFilter:Ke,format:Xt},i=e.getSize(new J());(this._pixelRatio=e.getPixelRatio()),(this._width=i.width),(this._height=i.height),(t=new ft(this._width*this._pixelRatio,this._height*this._pixelRatio,n)),(t.texture.name="EffectComposer.rt1");}else
(this._pixelRatio=1),(this._width=t.width),(this._height=t.height);(this.renderTarget1=t),(this.renderTarget2=t.clone()),(this.renderTarget2.texture.name="EffectComposer.rt2"),(this.writeBuffer=this.renderTarget1),(this.readBuffer=this.renderTarget2),(this.renderToScreen=!0),(this.passes=[]),xs===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),tu===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),(this.copyPass=new tu(xs)),(this.clock=new ip());}
swapBuffers(){const e=this.readBuffer;(this.readBuffer=this.writeBuffer),(this.writeBuffer=e);}
addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio);}
insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio);}
removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1);}
isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)
if(this.passes[t].enabled)return!1;return!0;}
render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(((o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i)),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap)){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295);}
this.swapBuffers();}
xg!==void 0&&(o instanceof xg?(n=!0):o instanceof EC&&(n=!1));}}
this.renderer.setRenderTarget(t);}
reset(e){if(e===void 0){const t=this.renderer.getSize(new J());(this._pixelRatio=this.renderer.getPixelRatio()),(this._width=t.width),(this._height=t.height),(e=this.renderTarget1.clone()),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio);}
this.renderTarget1.dispose(),this.renderTarget2.dispose(),(this.renderTarget1=e),(this.renderTarget2=e.clone()),(this.writeBuffer=this.renderTarget1),(this.readBuffer=this.renderTarget2);}
setSize(e,t){(this._width=e),(this._height=t);const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i);}
setPixelRatio(e){(this._pixelRatio=e),this.setSize(this._width,this._height);}}
new Ms(-1,1,1,-1,0,1);const fx=new Be();fx.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3));fx.setAttribute("uv",new Ce([0,2,0,0,2,0],2));class CC extends Qo{constructor(e,t,n,i,r){super(),(this.scene=e),(this.camera=t),(this.overrideMaterial=n),(this.clearColor=i),(this.clearAlpha=r!==void 0?r:0),(this.clear=!0),(this.clearDepth=!1),(this.needsSwap=!1),(this._oldClearColor=new ve());}
render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&((o=this.scene.overrideMaterial),(this.scene.overrideMaterial=this.overrideMaterial)),this.clearColor&&(e.getClearColor(this._oldClearColor),(r=e.getClearAlpha()),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),(e.autoClear=i);}}
const vg={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0},},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`,};class qo extends Qo{constructor(e,t,n,i){super(),(this.strength=t!==void 0?t:1),(this.radius=n),(this.threshold=i),(this.resolution=e!==void 0?new J(e.x,e.y):new J(256,256)),(this.clearColor=new ve(0,0,0));const r={minFilter:Ke,magFilter:Ke,format:Xt};(this.renderTargetsHorizontal=[]),(this.renderTargetsVertical=[]),(this.nMips=5);let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);(this.renderTargetBright=new ft(o,a,r)),(this.renderTargetBright.texture.name="UnrealBloomPass.bright"),(this.renderTargetBright.texture.generateMipmaps=!1);for(let d=0;d<this.nMips;d++){const f=new ft(o,a,r);(f.texture.name="UnrealBloomPass.h"+d),(f.texture.generateMipmaps=!1),this.renderTargetsHorizontal.push(f);const p=new ft(o,a,r);(p.texture.name="UnrealBloomPass.v"+d),(p.texture.generateMipmaps=!1),this.renderTargetsVertical.push(p),(o=Math.round(o/2)),(a=Math.round(a/2));}
vg===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const l=vg;(this.highPassUniforms=Io.clone(l.uniforms)),(this.highPassUniforms.luminosityThreshold.value=i),(this.highPassUniforms.smoothWidth.value=0.01),(this.materialHighPassFilter=new kt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{},})),(this.separableBlurMaterials=[]);const c=[3,5,7,9,11];(o=Math.round(this.resolution.x/2)),(a=Math.round(this.resolution.y/2));for(let d=0;d<this.nMips;d++)
this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),(this.separableBlurMaterials[d].uniforms.texSize.value=new J(o,a)),(o=Math.round(o/2)),(a=Math.round(a/2));(this.compositeMaterial=this.getCompositeMaterial(this.nMips)),(this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture),(this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture),(this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture),(this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture),(this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture),(this.compositeMaterial.uniforms.bloomStrength.value=t),(this.compositeMaterial.uniforms.bloomRadius.value=0.1),(this.compositeMaterial.needsUpdate=!0);const u=[1,0.8,0.6,0.4,0.2];(this.compositeMaterial.uniforms.bloomFactors.value=u),(this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),]),(this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors),xs===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const h=xs;(this.copyUniforms=Io.clone(h.uniforms)),(this.copyUniforms.opacity.value=1),(this.materialCopy=new kt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:$c,depthTest:!1,depthWrite:!1,transparent:!0,})),(this.enabled=!0),(this.needsSwap=!1),(this._oldClearColor=new ve()),(this.oldClearAlpha=1),(this.basic=new _i()),(this.fsQuad=new cp(null));}
dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)
this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)
this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();}
setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)
this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),(this.separableBlurMaterials[r].uniforms.texSize.value=new J(n,i)),(n=Math.round(n/2)),(i=Math.round(i/2));}
render(e,t,n,i,r){e.getClearColor(this._oldClearColor),(this.oldClearAlpha=e.getClearAlpha());const o=e.autoClear;(e.autoClear=!1),e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&((this.fsQuad.material=this.basic),(this.basic.map=n.texture),e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),(this.highPassUniforms.tDiffuse.value=n.texture),(this.highPassUniforms.luminosityThreshold.value=this.threshold),(this.fsQuad.material=this.materialHighPassFilter),e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)
(this.fsQuad.material=this.separableBlurMaterials[l]),(this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture),(this.separableBlurMaterials[l].uniforms.direction.value=qo.BlurDirectionX),e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),(this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture),(this.separableBlurMaterials[l].uniforms.direction.value=qo.BlurDirectionY),e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),(a=this.renderTargetsVertical[l]);(this.fsQuad.material=this.compositeMaterial),(this.compositeMaterial.uniforms.bloomStrength.value=this.strength),(this.compositeMaterial.uniforms.bloomRadius.value=this.radius),(this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors),e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),(this.fsQuad.material=this.materialCopy),(this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture),r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),(e.autoClear=o);}
getSeperableBlurMaterial(e){return new kt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new J(0.5,0.5)},direction:{value:new J(0.5,0.5)},},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`,});}
getCompositeMaterial(e){return new kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0},},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform sampler2D dirtTexture;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`,});}}
qo.BlurDirectionX=new J(1,0);qo.BlurDirectionY=new J(0,1);const LC={uniforms:{tDiffuse1:{value:null},tDiffuse2:{value:null},mixRatio:{value:0.5},opacity:{value:1},},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;
		uniform float mixRatio;

		uniform sampler2D tDiffuse1;
		uniform sampler2D tDiffuse2;

		varying vec2 vUv;

		void main() {

			vec4 texel1 = texture2D( tDiffuse1, vUv );
			vec4 texel2 = texture2D( tDiffuse2, vUv );
			gl_FragColor = opacity * mix( texel1, texel2, mixRatio );

		}`,};class PC extends Qo{constructor(e){super(),xs===void 0&&console.error("THREE.SavePass relies on CopyShader");const t=xs;(this.textureID="tDiffuse"),(this.uniforms=Io.clone(t.uniforms)),(this.material=new kt({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,})),(this.renderTarget=e),this.renderTarget===void 0&&((this.renderTarget=new ft(window.innerWidth,window.innerHeight)),(this.renderTarget.texture.name="SavePass.rt")),(this.needsSwap=!1),(this.fsQuad=new cp(this.material));}
render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),e.setRenderTarget(this.renderTarget),this.clear&&e.clear(),this.fsQuad.render(e);}}
ap();document.getElementById("navbar-brand").onclick=()=>{window.location.href="https://www.baincapital.com/technology/";};document.getElementById("navbar-brand").onclick=()=>{window.location.href="https://www.baincapital.com/technology/";};localStorage.getItem("globalPortfolioButton")=="true"&&(ze.to(window,{scrollTo:".page9"}),localStorage.setItem("globalPortfolioButton",!1),localStorage.removeItem("globalPortfolioButton"));localStorage.getItem("portfolioToSectExp")=="true"&&localStorage.getItem("fromSectExp")=="true"&&(ze.to(window,{scrollTo:".page7"}),localStorage.setItem("portfolioToSectExp",!1),localStorage.removeItem("portfolioToSectExp"),localStorage.setItem("fromSectExp",!1),localStorage.removeItem("fromSectExp"));ze.registerPlugin($e,ln);history.scrollRestoration&&(history.scrollRestoration="manual");let RC=document.querySelector(".main").dataset.barbaNamespace;document.body.dataset.enabled3d="0";let en,Js,vt,Si;const Ge=jA,wg=["#240B0B","#6474AD","#D6CEA8","#7F1B0F","#701D17","#701D17","#C5B5B9","#BEB8CB","#FAD0B8","#A7D9EF","#E9D9D6","#E9D9D6","#263ADA","#263ADA","#263ADA","#263ADA","#AA4317","#F16618","#F16618","#F16618","#F16618","#FAAC17","#FAAC17","#F8FAED","#494CB6","#494CB6",];function bg(s,e){const t=s+Math.random()*(e+1-s);return Math.floor(t);}
function px(){document.body.dataset.enabled3d="1";const s=new Map(),e=new Ge.LoadingManager();let t=new Ge.TextureLoader(e);return(t.load("https://www.baincapital.com/technology/img/globe-map2.png",(n)=>{(n.wrapS=n.wrapT=Ge.RepeatWrapping),s.set("globe-map",n);}),t.load("https://www.baincapital.com/technology/img/cell2.jpg",(n)=>{(n.wrapS=n.wrapT=Ge.RepeatWrapping),n.repeat.set(40,20),s.set("cell",n);}),new Promise((n,i)=>{(e.onError=i),(e.onProgress=(r,o,a)=>{o===a&&n(s);}),(e.onLoad=()=>{});}));}
function mx(s){const e=document.querySelector(".container3d");let t=e.clientWidth,n=e.clientHeight,i=t/n,r=1,o=1;new Ge.Clock(),(en=new Ge.WebGLRenderer({powerPreference:"high-performance",antialias:!0,stencil:!1,depth:!1,})),en.setSize(t,n),en.setClearColor(1114112),(en.toneMapping=Ge.ACESFilmicToneMapping),(en.toneMappingExposure=0.9),window.innerWidth<=1920?en.setPixelRatio(Math.min(2,window.devicePixelRatio)):en.setPixelRatio(0.5),(e.innerHTML=""),e.appendChild(en.domElement),(Js=new Ge.Scene()),(vt=new Ge.PerspectiveCamera()),(vt.fov=15),(vt.aspect=i),(vt.near=0.1),(vt.far=100);let a=new Ge.DirectionalLight(4283782485,2);(a.position.y=0),(a.position.x=-1),(a.position.z=0),(a.target=vt);let l=new Ge.Group();l.add(a),Js.add(l);let c=new Ge.PointLight(16777215,50,153.5,1);c.position.set(0,-20,0),Js.add(c);let u,h,d,f,p,g=1;y(1),y(2);function y(Te){const V=[[2068.5,185.5],[2001,262.5],[2270.9,281.9],[2345.5,212.8],[2178,155.7],[2240.3,72.3],[2153.4,0.6],[2052.6,53.3],];for(let Se=0;Se<V.length;Se++){const Ue=V[Se][0],L=0,E=V[Se][1];V[Se]=new C(Ue,L,E);}
(h=new wo(V)),(h.curveType="chordal"),(h.closed=!0),(f=new Fi(h,1500,2.7,50,!0)),(f.name="geometryT2");let ee=150,se=100;const _e=[];for(let Se=0;Se<se;Se++){let Ue=ee*Math.sin(Ge.MathUtils.degToRad((360/se)*Se)),L=ee*-Math.cos(Ge.MathUtils.degToRad((360/se)*Se));_e.push([Ue,L]);}
for(let Se=0;Se<_e.length;Se++){const Ue=_e[Se][0],L=0,E=_e[Se][1];_e[Se]=new C(Ue,L,E);}
(u=new wo(_e)),(u.curveType="chordal"),(u.closed=!0),(d=new Fi(u,1500,2.7,50,!0));const pe=new Ja();p=Te===1?new ht(d,pe):new ht(f,pe);const me=[];for(let Se=0;Se<p.geometry.attributes.position.count-1;Se++){const Ue=new Ge.Vector3(p.geometry.attributes.position.getX(Se),p.geometry.attributes.position.getY(Se),p.geometry.attributes.position.getZ(Se));me.push(Ue);}
const Le=2e3;for(let Se=0;Se<Le;Se++){const L=bg(0,me.length-2551),E=Math.random()*0.3-0.3/2,Q=[new Ge.Vector3(me[L].x+E,me[L].y+E,me[L].z+E),new Ge.Vector3(me[L+510].x+E,me[L+510].y+E,me[L+510].z+E),new Ge.Vector3(me[L+1020].x+E,me[L+1020].y+E,me[L+1020].z+E),new Ge.Vector3(me[L+1530].x+E,me[L+1530].y+E,me[L+1530].z+E),new Ge.Vector3(me[L+2040].x+E,me[L+2040].y+E,me[L+2040].z+E),new Ge.Vector3(me[L+2550].x+E,me[L+2550].y+E,me[L+2550].z+E),],ie=new wo(Q);(ie.curveType="chordal"),(ie.closed=!1);const he=new Fi(ie,32,Math.random()/12,4,!1),Me=new Ja({color:wg[bg(0,wg.length-1)],transparent:!0,opacity:Math.random()+0.5,}),Re=new ht(he,Me);Js.add(Re);}}
let _=new Ge.Group(),m,w=new Ge.Scene(),v=window.innerWidth<=500?new Ge.PerspectiveCamera(80,i,0.1,1e3):new Ge.PerspectiveCamera(50,i,0.1,1e3),x=new SC(v,en.domElement);(x.enabled=!1),(x.enableDamping=!1),(x.enablePan=!1),(x.enableZoom=!1),(x.minDistance=0.8),(x.maxDistance=2),(x.minPolarAngle=Math.PI/2),(x.maxPolarAngle=Math.PI/2),new Ge.AmbientLight(16777215,0.8);let M=new Ge.DirectionalLight(16777215,1);M.position.set(10,10,10),w.add(M);function S(){v.position.z=1;let Te=s.get("globe-map");const V=new yr(0.5,32,32),ee=new dl({color:14390857,emissive:14390857,emissiveIntensity:1,map:Te,opacity:1,transparent:!0,});(m=new ht(V,ee)),w.add(_),_.add(m),_.position.set(2,-0.5,0),(_.rotation.order="XZY"),_.rotation.set(Ge.MathUtils.degToRad(25),Ge.MathUtils.degToRad(0),Ge.MathUtils.degToRad(15));let se,_e=new Ge.SphereGeometry(0.495,32,32),pe=new Ge.MeshStandardMaterial({color:"#006675",map:s.get("cell"),});(se=new Ge.Mesh(_e,pe)),_.add(se);}
let T=new uC(en);const D={exposure:1,bloomStrength:2,bloomThreshold:0.1,bloomRadius:0.3,},I=new CC(Js,vt),b=new qo(new J(t,n),1.5,0.4,0.85);(b.threshold=D.bloomThreshold),(b.strength=D.bloomStrength),(b.radius=D.bloomRadius),(Si=new AC(en)),(Si.frameBufferType=Ge.HalfFloatType),Si.addPass(I),Si.addPass(b);const R={minFilter:Ke,magFilter:Ke,stencilBuffer:!1},F=new PC(new ft(e.clientWidth,e.clientHeight,R)),O=new tu(LC,"tDiffuse1");(O.uniforms.tDiffuse2.value=F.renderTarget.texture),(O.uniforms.mixRatio.value=0.9);const H=new tu(xs);(H.renderToScreen=!0),Si.addPass(O),Si.addPass(F),Si.addPass(H);let A,z=0,U=0.015,B=new Ge.Group(),j=new Ge.Object3D();B.add(j),Js.add(B);let X=ze.timeline({paused:!0});X.to(".main",{onComplete:()=>{(g=2),(vt.fov=45);},backgroundColor:"rgba(0,0,0,1.0)",duration:1,overwrite:"auto",}),X.to(".main",{onReverseComplete:()=>{(g=1),(vt.fov=15);},backgroundColor:"rgba(0,0,0,0.5)",duration:1,overwrite:"auto",});let K=0;function ue(){ze.timeline({onStart:()=>{(K=1),X.play();},scrollTrigger:{onLeaveBack:()=>{(K=0),X.reverse();},trigger:".page3",end:"+=400",scrub:!0,},}).to(".main",{backgroundImage:"linear-gradient(to left, black 40%, transparent 110%)",}),ze.timeline({scrollTrigger:{trigger:".page4",end:"+=400",scrub:!0},}).to(".main",{backgroundImage:"linear-gradient(to left, black 0%, transparent 30%)",}),ze.timeline({scrollTrigger:{trigger:".page5",end:"+=400",scrub:!0},}).to(".main",{backgroundImage:"linear-gradient(to left, black 40%, transparent 110%)",});let se=ze.timeline({scrollTrigger:{trigger:".page6",end:"+=200",scrub:1},});se.to(".container3d canvas",{opacity:0}),se.to(".main",{backgroundColor:"rgba(0,0,0,.0)",backgroundImage:"linear-gradient(to left, black 0%, transparent 0%)",overwrite:"auto",});}
S(),Ee(".page2"),Ee(".page4"),Z(".page3"),ue(),q(".page5"),mf(),gf();function Ee(Te){ze.timeline({onStart:()=>{},onComplete:()=>{a.position.x=1;},scrollTrigger:{trigger:Te,start:"bottom bottom",end:"bottom top",scrub:!0,onUpdate:(V)=>{z=Math.sin(Ge.MathUtils.degToRad(180)*V.progress.toFixed(3))/50;},},}).to(a.position,{x:1,z:-1,ease:"none",overwrite:"auto"},"<").to(a.position,{x:1,z:0,ease:"none",overwrite:"auto"},"<");}
function Z(Te){ze.timeline({onStart:()=>{},onComplete:()=>{a.position.x=-1;},scrollTrigger:{trigger:Te,start:"bottom bottom",end:"bottom top",scrub:!0,onUpdate:(V)=>{z=Math.sin(Ge.MathUtils.degToRad(180)*V.progress.toFixed(3))/50;},},}).to(a.position,{x:1,z:-1,ease:"none",overwrite:"auto"},"<").to(a.position,{x:-1,z:0,ease:"none",overwrite:"auto"},"<");}
function q(Te){ze.timeline({onStart:()=>{en.setClearColor(0);},onComplete:()=>{(r=0),v.updateProjectionMatrix(),(o=0);},onReverseComplete:()=>{(en.toneMappingExposure=0.9),(r=1),(o=1),en.setClearColor(1114112);},scrollTrigger:{trigger:Te,start:"bottom bottom",end:"bottom center",scrub:!0,},}).to(en,{toneMappingExposure:0,overwrite:"auto"});}
window.addEventListener("resize",(function(){let Te=0;function V(){(t=e.clientWidth),(n=e.clientHeight),en.setSize(t,n),Si.setSize(t,n),(vt.aspect=t/n),vt.updateProjectionMatrix(),(v.aspect=t/n),v.updateProjectionMatrix(),(Te=0);}
return function(se){Te===0&&(Te=setTimeout(V,66,se));};})());let Ae=1,fe=1;const ce=7e-4,le=0.0026;(function Te(){if(o){if(g===1){Ae+=le;const V=u.getPointAt(Ae%1);Ae+U!==0&&(A=u.getPointAt((Ae+U)%1)),B.position.copy(A),vt.position.set(V.x,V.y,V.z),K&&(j.position.x=z),K&&(j.position.y=0);let ee=new Ge.Vector3();ee.setFromMatrixPosition(j.matrixWorld),vt.lookAt(ee),l.position.copy(vt.position),l.rotation.copy(vt.rotation),B.rotation.copy(vt.rotation);}
if(g===2){fe+=ce;const V=h.getPointAt(fe%1);fe+U!==0&&(A=h.getPointAt((fe+U)%1)),B.position.copy(A),vt.position.set(V.x,V.y,V.z),K&&(j.position.x=z),K&&(j.position.y=0);let ee=new Ge.Vector3();ee.setFromMatrixPosition(j.matrixWorld),vt.lookAt(ee),l.position.copy(vt.position),l.rotation.copy(vt.rotation),B.rotation.copy(vt.rotation);}}
if(((_.rotation.y+=0.001),document.getElementById("modal")&&((_.rotation.y=0.39),(_.rotation.x=0),(_.rotation.z=0)),vt.updateProjectionMatrix(),requestAnimationFrame(Te),r)){Si.render();return;}
T.render();})();}
RC==="home"&&px().then(mx).catch(console.error);if(document.body.dataset.enabled3d==="0"){const s=function(t,n){for(let i of t)
i.type==="attributes"&&document.body.dataset.enabled3d==="1"&&(px().then(mx).catch(console.error),n.disconnect());};new MutationObserver(s).observe(document.body,{attributes:!0});}
$(document).ready(function(){if((setTimeout(()=>{$(".portfolio-sorting-wrap .dropdown .dropdown-menu a").on("click",function(){$(".portfolio-sorting-wrap .dropdown-menu a").removeClass("selected"),$(this).addClass("selected"),$(this).parent().parent().parent().find(".psorting").find(".selected-value").text($(this).text());});},1e3),window.matchMedia("(min-width: 992px)").matches&&DC(),$(".more-menu-sidebar .search-widget #keys").focus(function(){$(".more-menu-sidebar .typedtext").hide(),$(".more-menu-sidebar .underscore").hide();}),$(".more-menu-sidebar .search-widget #keys").blur(function(){$(this).val()||($(".more-menu-sidebar .typedtext").show(),$(".more-menu-sidebar .underscore").show());}),$("[data-splitting]").length,$(".more-menu-section").length)){let t=function(){$(".more-menu-section").modal("hide");};var e=t;$(".typedtext-all").text();var s=ze.timeline();s.add("start-point",0).fromTo(".more-menu-section",0.05,{autoAlpha:0},{autoAlpha:1},"start-point").fromTo(".more-menu-section > .container > .row > .col-md-8 > .row > .col-sm-6:first-child > .menu-widget .widget-title",0.05,{autoAlpha:0,xPercent:100},{autoAlpha:1,xPercent:0},"start-point").staggerFromTo(".more-menu-section .menu-widget .about-menu li",0.05,{autoAlpha:0,xPercent:100},{autoAlpha:1,xPercent:0},0.05).staggerFromTo(".local-site-listing .local-site-menu li",0.05,{autoAlpha:0,xPercent:100},{autoAlpha:1,xPercent:0}).staggerFromTo(".more-menu-section .menu-widget .ftr-businesses-menu li",0.05,{autoAlpha:0,xPercent:100},{autoAlpha:1,xPercent:0},0.05).fromTo(".more-menu-section > .container > .row > .col-md-8 > .row > .col-sm-6:nth-child(2) > .menu-widget .widget-title",0.05,{autoAlpha:0,xPercent:100},{autoAlpha:1,xPercent:0}).fromTo(".more-menu-section .more-menu-search-background",0.2,{autoAlpha:0,height:0},{autoAlpha:1,height:"100%",ease:Linear.easeIn},"start-point").fromTo(".more-menu-section .search-widget .widget-title .widget-title-txt",0.2,{autoAlpha:0,xPercent:-100},{autoAlpha:1,xPercent:0,ease:Linear.easeInOut}).fromTo(".more-menu-section #typedtext",1e-4,{autoAlpha:0},{autoAlpha:1}).staggerFromTo(".more-menu-section .typedtext-all, .more-menu-section .typedtext-all .whitespace",0.02,{opacity:0},{opacity:1,ease:Power1.easeIn},0.02).fromTo(".more-menu-section .search-widget .underscore",1,{autoAlpha:0},{autoAlpha:1,delay:0.3,ease:Linear.easeInOut}).add("end",1).fromTo(".more-menu-section .copyright-txt",0.1,{autoAlpha:0},{autoAlpha:1},"end").fromTo(".more-menu-section .copyright-menu",0.1,{autoAlpha:0},{autoAlpha:1},"end").fromTo(".more-menu-section .more-menu-sidebar .investor-login-widget",0.1,{autoAlpha:0},{autoAlpha:1},"end").pause(),$(".navbar-brand").click(function(){t();}),$(".bottom-header .navbar-nav a").not(".down-arrow").click(function(i){document.querySelector(".bottom-header .navbar-nav"),t();}),$(".btn-search").click(function(){t();}),$(".more-menu-section .about-menu a").not(".down-arrow").click(function(){t();});const n=ze.timeline();n.fromTo(".more-menu-slants",0.5,{ease:Linear.easeOut},{ease:Linear.easeOut,delay:0.5},0).fromTo(".more-menu-slants .left-slant",0.5,{left:"-150%",ease:Linear.easeOut},{left:"-10%",ease:Linear.easeOut},0).fromTo(".more-menu-slants .right-slant",0.5,{left:"150%",ease:Linear.easeOut},{left:"-10%",ease:Linear.easeOut},0).fromTo(".more-menu-slants",0.5,{autoAlpha:0},{autoAlpha:1},0).pause(),$("#more-menu-modal").on("show.bs.modal",function(){$(".more-menu-link").addClass("open"),$(".more-menu-link").addClass("backLink"),$("header.site-header").addClass("scrolled"),$(".model_text").html("close"),n.play(),setTimeout(function(){$("#more-menu-modal").addClass("popup-open"),s.play();var i=$(".more-menu-section .more-menu-sidebar"),r=$(".more-menu-section .more-menu-search-background"),o=$(i).offset().left;$(r).css("left",o);},500);}),$("#more-menu-modal").on("hidden.bs.modal",function(){n.reverse(),s.reverse(),$("#more-menu-modal").removeClass("popup-open"),$(".more-menu-link").removeClass("open"),$(".more-menu-link").removeClass("backLink"),$(".model_text").html("more"),$(".more-menu-link").hasClass("open")||$("header.site-header").removeClass("scrolled");});}
IC();});function DC(){if($(".more-menu-sidebar").length){var s=$(".more-menu-section .more-menu-sidebar"),e=$(".more-menu-section .more-menu-search-background"),t=$(s).offset().left;$(e).css("left",t);}}
function IC(){if(window.matchMedia("(min-width: 992px)").matches){const s=$(".site-header .navbar");s.find(".dropdown"),s.find(".dropdown-toggle"),s.find(".dropdown-menu");const e="show";$(".site-header .navbar ul.navbar-nav li.dropdown").hover(function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(100).fadeIn(300),$(this).addClass(e),$(this).find(".dropdown-menu").addClass(e);},function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(100).fadeOut(300),$(this).removeClass(e),$(this).find(".dropdown-menu").removeClass(e);});}}