!function(t){var e={};function r(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,(function(e){return t[e]}).bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s="bZYr")}({bZYr:function(t,e,r){"use strict";function s(t,e,r,s){return new(r||(r=Promise))(function(n,i){function o(t){try{u(s.next(t))}catch(e){i(e)}}function c(t){try{u(s.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(o,c)}u((s=s.apply(t,e||[])).next())})}function n(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t}r.r(e);class i{constructor(t){this.totalInfections=t,this.spreadSize=[45,10,25,15,5],this.itemsPerClusterCategory=[700,500,300,150,20],this.totalItemsInCluster=[this.spreadSize.length],this.clusterAmount=[this.spreadSize.length],this.totalClusters=0,this.spreadSize.forEach((e,r)=>{this.totalItemsInCluster[r]=Math.floor(t/100*this.spreadSize[r]),this.clusterAmount[r]=Math.floor(this.totalItemsInCluster[r]/this.itemsPerClusterCategory[r]),this.clusterAmount.forEach(t=>this.totalClusters+=t)})}infect(t){const e=[],r={l:0,r:t[0].length,t:0,b:t.length};this.clusterAmount.forEach((s,i)=>{let o=r;for(let c=0;c<s;c++){let s=0,c=0;if(i>0){const t=n(0,e.length-1);o=e[t].range}do{s=n(Math.floor(o.t),Math.floor(o.b)),c=n(Math.floor(o.l),Math.floor(o.r))}while(t[s][c].isInfected);if(t[s][c].isInfected=!0,t[s][c].isCoreOfCluster=!0,t[s][c].clusterSize=Math.ceil(this.itemsPerClusterCategory[i]/17),i<=0){const n=2*t[s][c].clusterSize;e.push({cat:i,row:s,col:c,range:{l:c-n<0?0:c-n,r:c+n>r.r?r.r:c+n,t:s-n<0?0:s-n,b:s+n>=r.b?r.b:s+n}})}}})}}class o{constructor(t){this.clusterSetup=new i(t)}infect(t){return this.city=t,this.clusterSetup.infect(t.humans),this.humansFlat=this.city.humans.reduce((t,e)=>t.concat(e),[]),this}}class c{constructor(t,e,r,s){this.population=t,this.maxWidth=e,this.maxHeight=r,this.humans=[];const n=Math.floor(e/(2*s));(function(t,e){console.log("array: size: "+e,t);const r=[];let s,n;for(s=0,n=-1;s<t.length;s++)s%e==0&&(n++,r[n]=[]),r[n].push(t[s]);return r})(new Array(t),n).forEach((t,e)=>{this.humans.push(t.map((t,r)=>({row:e,col:r,x:2*r*s,y:2*e*s,isInfected:!1,isCoreOfCluster:!1,isBorder:!1})))})}getVisible(){let t=0;return this.humans.forEach(e=>t+=e.filter(t=>t.x<this.maxWidth&&t.y<this.maxHeight).length),t}}function u(t){return"function"==typeof t}let h=!1;const l={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t){const t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else h&&console.log("RxJS: Back to a better error behavior. Thank you. <3");h=t},get useDeprecatedSynchronousErrorHandling(){return h}};function a(t){setTimeout(()=>{throw t},0)}const d={closed:!0,next(t){},error(t){if(l.useDeprecatedSynchronousErrorHandling)throw t;a(t)},complete(){}},f=(()=>Array.isArray||(t=>t&&"number"==typeof t.length))(),b=(()=>{function t(t){return Error.call(this),this.message=t?`${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e+1}) ${t.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t})();let p=(()=>{class t{constructor(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}unsubscribe(){let e;if(this.closed)return;let{_parentOrParents:r,_ctorUnsubscribe:s,_unsubscribe:n,_subscriptions:i}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof t)r.remove(this);else if(null!==r)for(let t=0;t<r.length;++t)r[t].remove(this);if(u(n)){s&&(this._unsubscribe=void 0);try{n.call(this)}catch(c){e=c instanceof b?y(c.errors):[c]}}if(f(i)){let t=-1,r=i.length;for(;++t<r;){const r=i[t];if(null!==(o=r)&&"object"==typeof o)try{r.unsubscribe()}catch(c){e=e||[],c instanceof b?e=e.concat(y(c.errors)):e.push(c)}}}var o;if(e)throw new b(e)}add(e){let r=e;if(!e)return t.EMPTY;switch(typeof e){case"function":r=new t(e);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof t)){const e=r;r=new t,r._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}let{_parentOrParents:s}=r;if(null===s)r._parentOrParents=this;else if(s instanceof t){if(s===this)return r;r._parentOrParents=[s,this]}else{if(-1!==s.indexOf(this))return r;s.push(this)}const n=this._subscriptions;return null===n?this._subscriptions=[r]:n.push(r),r}remove(t){const e=this._subscriptions;if(e){const r=e.indexOf(t);-1!==r&&e.splice(r,1)}}}return t.EMPTY=function(t){return t.closed=!0,t}(new t),t})();function y(t){return t.reduce((t,e)=>t.concat(e instanceof b?e.errors:e),[])}const g=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())();class w extends p{constructor(t,e,r){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=d;break;case 1:if(!t){this.destination=d;break}if("object"==typeof t){t instanceof w?(this.syncErrorThrowable=t.syncErrorThrowable,this.destination=t,t.add(this)):(this.syncErrorThrowable=!0,this.destination=new _(this,t));break}default:this.syncErrorThrowable=!0,this.destination=new _(this,t,e,r)}}[g](){return this}static create(t,e,r){const s=new w(t,e,r);return s.syncErrorThrowable=!1,s}next(t){this.isStopped||this._next(t)}error(t){this.isStopped||(this.isStopped=!0,this._error(t))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(t){this.destination.next(t)}_error(t){this.destination.error(t),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:t}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this}}class _ extends w{constructor(t,e,r,s){let n;super(),this._parentSubscriber=t;let i=this;u(e)?n=e:e&&(n=e.next,r=e.error,s=e.complete,e!==d&&(i=Object.create(e),u(i.unsubscribe)&&this.add(i.unsubscribe.bind(i)),i.unsubscribe=this.unsubscribe.bind(this))),this._context=i,this._next=n,this._error=r,this._complete=s}next(t){if(!this.isStopped&&this._next){const{_parentSubscriber:e}=this;l.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}}error(t){if(!this.isStopped){const{_parentSubscriber:e}=this,{useDeprecatedSynchronousErrorHandling:r}=l;if(this._error)r&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)r?(e.syncErrorValue=t,e.syncErrorThrown=!0):a(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;a(t)}}}complete(){if(!this.isStopped){const{_parentSubscriber:t}=this;if(this._complete){const e=()=>this._complete.call(this._context);l.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,e),this.unsubscribe()):(this.__tryOrUnsub(e),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(t,e){try{t.call(this._context,e)}catch(r){if(this.unsubscribe(),l.useDeprecatedSynchronousErrorHandling)throw r;a(r)}}__tryOrSetError(t,e,r){if(!l.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,r)}catch(s){return l.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=s,t.syncErrorThrown=!0,!0):(a(s),!0)}return!1}_unsubscribe(){const{_parentSubscriber:t}=this;this._context=null,this._parentSubscriber=null,t.unsubscribe()}}const m=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")();function S(t){return t}let x=(()=>{class t{constructor(t){this._isScalar=!1,t&&(this._subscribe=t)}lift(e){const r=new t;return r.source=this,r.operator=e,r}subscribe(t,e,r){const{operator:s}=this,n=function(t,e,r){if(t){if(t instanceof w)return t;if(t[g])return t[g]()}return t||e||r?new w(t,e,r):new w(d)}(t,e,r);if(n.add(s?s.call(n,this.source):this.source||l.useDeprecatedSynchronousErrorHandling&&!n.syncErrorThrowable?this._subscribe(n):this._trySubscribe(n)),l.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable&&(n.syncErrorThrowable=!1,n.syncErrorThrown))throw n.syncErrorValue;return n}_trySubscribe(t){try{return this._subscribe(t)}catch(e){l.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),function(t){for(;t;){const{closed:e,destination:r,isStopped:s}=t;if(e||s)return!1;t=r&&r instanceof w?r:null}return!0}(t)?t.error(e):console.warn(e)}}forEach(t,e){return new(e=E(e))((e,r)=>{let s;s=this.subscribe(e=>{try{t(e)}catch(n){r(n),s&&s.unsubscribe()}},r,e)})}_subscribe(t){const{source:e}=this;return e&&e.subscribe(t)}[m](){return this}pipe(...t){return 0===t.length?this:(0===(e=t).length?S:1===e.length?e[0]:function(t){return e.reduce((t,e)=>e(t),t)})(this);var e}toPromise(t){return new(t=E(t))((t,e)=>{let r;this.subscribe(t=>r=t,t=>e(t),()=>t(r))})}}return t.create=e=>new t(e),t})();function E(t){if(t||(t=l.Promise||Promise),!t)throw new Error("no Promise impl found");return t}class v extends p{constructor(t,e){super()}schedule(t,e=0){return this}}class O extends v{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){if(this.closed)return this;this.state=t;const r=this.id,s=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(s,r,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(s,this.id,e),this}requestAsyncId(t,e,r=0){return setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,e,r=0){if(null!==r&&this.delay===r&&!1===this.pending)return e;clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let r=!1,s=void 0;try{this.work(t)}catch(n){r=!0,s=!!n&&n||new Error(n)}if(r)return this.unsubscribe(),s}_unsubscribe(){const t=this.id,e=this.scheduler,r=e.actions,s=r.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==s&&r.splice(s,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null}}let P=(()=>{class t{constructor(e,r=t.now){this.SchedulerAction=e,this.now=r}schedule(t,e=0,r){return new this.SchedulerAction(this,t).schedule(r,e)}}return t.now=()=>Date.now(),t})();class T extends P{constructor(t,e=P.now){super(t,()=>T.delegate&&T.delegate!==this?T.delegate.now():e()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(t,e=0,r){return T.delegate&&T.delegate!==this?T.delegate.schedule(t,e,r):super.schedule(t,e,r)}flush(t){const{actions:e}=this;if(this.active)return void e.push(t);let r;this.active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}}const M=new T(O);function C(t){return!f(t)&&t-parseFloat(t)+1>=0}function I(t){return t&&"function"==typeof t.schedule}function A(t=0,e,r){let s=-1;return C(e)?s=Number(e)<1?1:Number(e):I(e)&&(r=e),I(r)||(r=M),new x(e=>{const n=C(t)?t:+t-r.now();return r.schedule(H,n,{index:0,period:s,subscriber:e})})}function H(t){const{index:e,period:r,subscriber:s}=t;if(s.next(e),!s.closed){if(-1===r)return s.complete();t.index=e+1,this.schedule(t,r)}}class D{constructor(t){this.ctx=t}getPixelColor(t,e,r){const s=this.ctx.getImageData(t,e,r,r).data;return"#"+("000000"+this.rgbToHex(s[0],s[1],s[2])).slice(-6)}rgbToHex(t,e,r){if(t>255||e>255||r>255)throw Error("Invalid color component");return(t<<16|e<<8|r).toString(16)}}let k,z=null;function j(t,e){return s(this,void 0,void 0,function*(){U(t.x,t.y,"#FF0000",e.itemSize),F(t.x,t.y,"#ff000044",Math.floor(t.clusterSize/5)),F(t.x,t.y,"#ff00000a",Math.floor(t.clusterSize))})}function U(t,e,r,s){z.fillStyle=r,z.fillRect(t,e,s,s)}function F(t,e,r,s){z.fillStyle=r,z.beginPath(),z.arc(t,e,s,0,2*Math.PI),z.fill()}function V(t,e,r,s){postMessage({event:"done",message:t,settings:e,onComplete:s,data:r})}addEventListener("message",({data:t})=>s(void 0,void 0,void 0,function*(){switch(t.canvas&&(z=t.canvas.getContext("2d"),k=new D(z)),t.event){case"init":V("init complete.",t.settings);break;case"startSimulation":const e=yield function(t,e){return s(this,void 0,void 0,function*(){const e=new c(t.population,t.maxWidth,t.maxHeight,t.itemSize);console.log("city",e);const r=new o(t.infected);r.infect(e),r.humansFlat.forEach(e=>{U(e.x,e.y,"#fff",t.itemSize)});const s=function(t){let e,r,s=t.length;for(;0!==s;)r=Math.floor(Math.random()*s),s-=1,e=t[s],t[s]=t[r],t[r]=e;return t}(r.humansFlat).filter(t=>t.isCoreOfCluster);console.log("clusters: ",s);for(const n of s)yield A(20).toPromise(),yield j(n,t);return console.log("complete drawing "+s.length+" ."),r})}(t.settings);V("simulation complete.",t.settings,e,t.onComplete);break;case"drawCluster":console.log("post drawCluster.",t),yield j(t.human,t.settings),V("cluster drawn.",t.settings);break;default:console.log("no event function found.",t.event),postMessage("worker response to "+t)}}))}});