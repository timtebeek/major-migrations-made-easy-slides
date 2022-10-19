(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}})();function Ms(n,t){const o=Object.create(null),r=n.split(",");for(let a=0;a<r.length;a++)o[r[a]]=!0;return t?a=>!!o[a.toLowerCase()]:a=>!!o[a]}const yu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mu=Ms(yu);function Ep(n){return!!n||n===""}function $e(n){if(ae(n)){const t={};for(let o=0;o<n.length;o++){const r=n[o],a=Oe(r)?vu(r):$e(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(Oe(n))return n;if(Ue(n))return n}}const fu=/;(?![^(]*\))/g,hu=/:(.+)/;function vu(n){const t={};return n.split(fu).forEach(o=>{if(o){const r=o.split(hu);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function We(n){let t="";if(Oe(n))t=n;else if(ae(n))for(let o=0;o<n.length;o++){const r=We(n[o]);r&&(t+=r+" ")}else if(Ue(n))for(const o in n)n[o]&&(t+=o+" ");return t.trim()}function te(n){if(!n)return null;let{class:t,style:o}=n;return t&&!Oe(t)&&(n.class=We(t)),o&&(n.style=$e(o)),n}const Au="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",wu=Ms(Au),ut=n=>Oe(n)?n:n==null?"":ae(n)||Ue(n)&&(n.toString===Fp||!ce(n.toString))?JSON.stringify(n,Cp,2):String(n),Cp=(n,t)=>t&&t.__v_isRef?Cp(n,t.value):zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[r,a])=>(o[`${r} =>`]=a,o),{})}:xp(t)?{[`Set(${t.size})`]:[...t.values()]}:Ue(t)&&!ae(t)&&!Wp(t)?String(t):t,xe={},Kt=[],xn=()=>{},Nu=()=>!1,ju=/^on[^a-z]/,Os=n=>ju.test(n),ja=n=>n.startsWith("onUpdate:"),ln=Object.assign,ba=(n,t)=>{const o=n.indexOf(t);o>-1&&n.splice(o,1)},bu=Object.prototype.hasOwnProperty,ve=(n,t)=>bu.call(n,t),ae=Array.isArray,zt=n=>Ps(n)==="[object Map]",xp=n=>Ps(n)==="[object Set]",ce=n=>typeof n=="function",Oe=n=>typeof n=="string",Ia=n=>typeof n=="symbol",Ue=n=>n!==null&&typeof n=="object",kp=n=>Ue(n)&&ce(n.then)&&ce(n.catch),Fp=Object.prototype.toString,Ps=n=>Fp.call(n),Iu=n=>Ps(n).slice(8,-1),Wp=n=>Ps(n)==="[object Object]",Ba=n=>Oe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,hs=Ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$s=n=>{const t=Object.create(null);return o=>t[o]||(t[o]=n(o))},Bu=/-(\w)/g,Vn=$s(n=>n.replace(Bu,(t,o)=>o?o.toUpperCase():"")),Du=/\B([A-Z])/g,Gt=$s(n=>n.replace(Du,"-$1").toLowerCase()),Js=$s(n=>n.charAt(0).toUpperCase()+n.slice(1)),ar=$s(n=>n?`on${Js(n)}`:""),Uo=(n,t)=>!Object.is(n,t),Qt=(n,t)=>{for(let o=0;o<n.length;o++)n[o](t)},Is=(n,t,o)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:o})},kr=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let wi;const _u=()=>wi||(wi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let mn;class Sp{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&mn&&(this.parent=mn,this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}run(t){if(this.active){const o=mn;try{return mn=this,t()}finally{mn=o}}}on(){mn=this}off(){mn=this.parent}stop(t){if(this.active){let o,r;for(o=0,r=this.effects.length;o<r;o++)this.effects[o].stop();for(o=0,r=this.cleanups.length;o<r;o++)this.cleanups[o]();if(this.scopes)for(o=0,r=this.scopes.length;o<r;o++)this.scopes[o].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Ru(n){return new Sp(n)}function Eu(n,t=mn){t&&t.active&&t.effects.push(n)}function Gp(){return mn}function Tp(n){mn&&mn.cleanups.push(n)}const Da=n=>{const t=new Set(n);return t.w=0,t.n=0,t},Up=n=>(n.w&dt)>0,Mp=n=>(n.n&dt)>0,Cu=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=dt},xu=n=>{const{deps:t}=n;if(t.length){let o=0;for(let r=0;r<t.length;r++){const a=t[r];Up(a)&&!Mp(a)?a.delete(n):t[o++]=a,a.w&=~dt,a.n&=~dt}t.length=o}},Fr=new WeakMap;let Io=0,dt=1;const Wr=30;let Rn;const xt=Symbol(""),Sr=Symbol("");class _a{constructor(t,o=null,r){this.fn=t,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,Eu(this,r)}run(){if(!this.active)return this.fn();let t=Rn,o=at;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Rn,Rn=this,at=!0,dt=1<<++Io,Io<=Wr?Cu(this):Ni(this),this.fn()}finally{Io<=Wr&&xu(this),dt=1<<--Io,Rn=this.parent,at=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Rn===this?this.deferStop=!0:this.active&&(Ni(this),this.onStop&&this.onStop(),this.active=!1)}}function Ni(n){const{deps:t}=n;if(t.length){for(let o=0;o<t.length;o++)t[o].delete(n);t.length=0}}let at=!0;const Op=[];function lo(){Op.push(at),at=!1}function po(){const n=Op.pop();at=n===void 0?!0:n}function Nn(n,t,o){if(at&&Rn){let r=Fr.get(n);r||Fr.set(n,r=new Map);let a=r.get(o);a||r.set(o,a=Da()),Pp(a)}}function Pp(n,t){let o=!1;Io<=Wr?Mp(n)||(n.n|=dt,o=!Up(n)):o=!n.has(Rn),o&&(n.add(Rn),Rn.deps.push(n))}function Qn(n,t,o,r,a,i){const l=Fr.get(n);if(!l)return;let p=[];if(t==="clear")p=[...l.values()];else if(o==="length"&&ae(n))l.forEach((c,g)=>{(g==="length"||g>=r)&&p.push(c)});else switch(o!==void 0&&p.push(l.get(o)),t){case"add":ae(n)?Ba(o)&&p.push(l.get("length")):(p.push(l.get(xt)),zt(n)&&p.push(l.get(Sr)));break;case"delete":ae(n)||(p.push(l.get(xt)),zt(n)&&p.push(l.get(Sr)));break;case"set":zt(n)&&p.push(l.get(xt));break}if(p.length===1)p[0]&&Gr(p[0]);else{const c=[];for(const g of p)g&&c.push(...g);Gr(Da(c))}}function Gr(n,t){const o=ae(n)?n:[...n];for(const r of o)r.computed&&ji(r);for(const r of o)r.computed||ji(r)}function ji(n,t){(n!==Rn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ku=Ms("__proto__,__v_isRef,__isVue"),$p=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ia)),Fu=Ra(),Wu=Ra(!1,!0),Su=Ra(!0),bi=Gu();function Gu(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...o){const r=Ie(this);for(let i=0,l=this.length;i<l;i++)Nn(r,"get",i+"");const a=r[t](...o);return a===-1||a===!1?r[t](...o.map(Ie)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...o){lo();const r=Ie(this)[t].apply(this,o);return po(),r}}),n}function Ra(n=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(n?t?Zu:Hp:t?qp:Lp).get(r))return r;const l=ae(r);if(!n&&l&&ve(bi,a))return Reflect.get(bi,a,i);const p=Reflect.get(r,a,i);return(Ia(a)?$p.has(a):ku(a))||(n||Nn(r,"get",a),t)?p:Be(p)?l&&Ba(a)?p:p.value:Ue(p)?n?qt(p):Se(p):p}}const Tu=Jp(),Uu=Jp(!0);function Jp(n=!1){return function(o,r,a,i){let l=o[r];if(to(l)&&Be(l)&&!Be(a))return!1;if(!n&&(!Bs(a)&&!to(a)&&(l=Ie(l),a=Ie(a)),!ae(o)&&Be(l)&&!Be(a)))return l.value=a,!0;const p=ae(o)&&Ba(r)?Number(r)<o.length:ve(o,r),c=Reflect.set(o,r,a,i);return o===Ie(i)&&(p?Uo(a,l)&&Qn(o,"set",r,a):Qn(o,"add",r,a)),c}}function Mu(n,t){const o=ve(n,t);n[t];const r=Reflect.deleteProperty(n,t);return r&&o&&Qn(n,"delete",t,void 0),r}function Ou(n,t){const o=Reflect.has(n,t);return(!Ia(t)||!$p.has(t))&&Nn(n,"has",t),o}function Pu(n){return Nn(n,"iterate",ae(n)?"length":xt),Reflect.ownKeys(n)}const Vp={get:Fu,set:Tu,deleteProperty:Mu,has:Ou,ownKeys:Pu},$u={get:Su,set(n,t){return!0},deleteProperty(n,t){return!0}},Ju=ln({},Vp,{get:Wu,set:Uu}),Ea=n=>n,Vs=n=>Reflect.getPrototypeOf(n);function is(n,t,o=!1,r=!1){n=n.__v_raw;const a=Ie(n),i=Ie(t);o||(t!==i&&Nn(a,"get",t),Nn(a,"get",i));const{has:l}=Vs(a),p=r?Ea:o?ka:Mo;if(l.call(a,t))return p(n.get(t));if(l.call(a,i))return p(n.get(i));n!==a&&n.get(t)}function ls(n,t=!1){const o=this.__v_raw,r=Ie(o),a=Ie(n);return t||(n!==a&&Nn(r,"has",n),Nn(r,"has",a)),n===a?o.has(n):o.has(n)||o.has(a)}function ps(n,t=!1){return n=n.__v_raw,!t&&Nn(Ie(n),"iterate",xt),Reflect.get(n,"size",n)}function Ii(n){n=Ie(n);const t=Ie(this);return Vs(t).has.call(t,n)||(t.add(n),Qn(t,"add",n,n)),this}function Bi(n,t){t=Ie(t);const o=Ie(this),{has:r,get:a}=Vs(o);let i=r.call(o,n);i||(n=Ie(n),i=r.call(o,n));const l=a.call(o,n);return o.set(n,t),i?Uo(t,l)&&Qn(o,"set",n,t):Qn(o,"add",n,t),this}function Di(n){const t=Ie(this),{has:o,get:r}=Vs(t);let a=o.call(t,n);a||(n=Ie(n),a=o.call(t,n)),r&&r.call(t,n);const i=t.delete(n);return a&&Qn(t,"delete",n,void 0),i}function _i(){const n=Ie(this),t=n.size!==0,o=n.clear();return t&&Qn(n,"clear",void 0,void 0),o}function cs(n,t){return function(r,a){const i=this,l=i.__v_raw,p=Ie(l),c=t?Ea:n?ka:Mo;return!n&&Nn(p,"iterate",xt),l.forEach((g,u)=>r.call(a,c(g),c(u),i))}}function gs(n,t,o){return function(...r){const a=this.__v_raw,i=Ie(a),l=zt(i),p=n==="entries"||n===Symbol.iterator&&l,c=n==="keys"&&l,g=a[n](...r),u=o?Ea:t?ka:Mo;return!t&&Nn(i,"iterate",c?Sr:xt),{next(){const{value:d,done:y}=g.next();return y?{value:d,done:y}:{value:p?[u(d[0]),u(d[1])]:u(d),done:y}},[Symbol.iterator](){return this}}}}function nt(n){return function(...t){return n==="delete"?!1:this}}function Vu(){const n={get(i){return is(this,i)},get size(){return ps(this)},has:ls,add:Ii,set:Bi,delete:Di,clear:_i,forEach:cs(!1,!1)},t={get(i){return is(this,i,!1,!0)},get size(){return ps(this)},has:ls,add:Ii,set:Bi,delete:Di,clear:_i,forEach:cs(!1,!0)},o={get(i){return is(this,i,!0)},get size(){return ps(this,!0)},has(i){return ls.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:cs(!0,!1)},r={get(i){return is(this,i,!0,!0)},get size(){return ps(this,!0)},has(i){return ls.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:cs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=gs(i,!1,!1),o[i]=gs(i,!0,!1),t[i]=gs(i,!1,!0),r[i]=gs(i,!0,!0)}),[n,o,t,r]}const[Lu,qu,Hu,Ku]=Vu();function Ca(n,t){const o=t?n?Ku:Hu:n?qu:Lu;return(r,a,i)=>a==="__v_isReactive"?!n:a==="__v_isReadonly"?n:a==="__v_raw"?r:Reflect.get(ve(o,a)&&a in r?o:r,a,i)}const zu={get:Ca(!1,!1)},Qu={get:Ca(!1,!0)},Yu={get:Ca(!0,!1)},Lp=new WeakMap,qp=new WeakMap,Hp=new WeakMap,Zu=new WeakMap;function Xu(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ed(n){return n.__v_skip||!Object.isExtensible(n)?0:Xu(Iu(n))}function Se(n){return to(n)?n:xa(n,!1,Vp,zu,Lp)}function nd(n){return xa(n,!1,Ju,Qu,qp)}function qt(n){return xa(n,!0,$u,Yu,Hp)}function xa(n,t,o,r,a){if(!Ue(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const i=a.get(n);if(i)return i;const l=ed(n);if(l===0)return n;const p=new Proxy(n,l===2?r:o);return a.set(n,p),p}function Yt(n){return to(n)?Yt(n.__v_raw):!!(n&&n.__v_isReactive)}function to(n){return!!(n&&n.__v_isReadonly)}function Bs(n){return!!(n&&n.__v_isShallow)}function Kp(n){return Yt(n)||to(n)}function Ie(n){const t=n&&n.__v_raw;return t?Ie(t):n}function Ls(n){return Is(n,"__v_skip",!0),n}const Mo=n=>Ue(n)?Se(n):n,ka=n=>Ue(n)?qt(n):n;function Fa(n){at&&Rn&&(n=Ie(n),Pp(n.dep||(n.dep=Da())))}function Wa(n,t){n=Ie(n),n.dep&&Gr(n.dep)}function Be(n){return!!(n&&n.__v_isRef===!0)}function q(n){return zp(n,!1)}function Wn(n){return zp(n,!0)}function zp(n,t){return Be(n)?n:new td(n,t)}class td{constructor(t,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?t:Ie(t),this._value=o?t:Mo(t)}get value(){return Fa(this),this._value}set value(t){const o=this.__v_isShallow||Bs(t)||to(t);t=o?t:Ie(t),Uo(t,this._rawValue)&&(this._rawValue=t,this._value=o?t:Mo(t),Wa(this))}}function N(n){return Be(n)?n.value:n}const od={get:(n,t,o)=>N(Reflect.get(n,t,o)),set:(n,t,o,r)=>{const a=n[t];return Be(a)&&!Be(o)?(a.value=o,!0):Reflect.set(n,t,o,r)}};function Qp(n){return Yt(n)?n:new Proxy(n,od)}class sd{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:o,set:r}=t(()=>Fa(this),()=>Wa(this));this._get=o,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function Yp(n){return new sd(n)}function rd(n){const t=ae(n)?new Array(n.length):{};for(const o in n)t[o]=id(n,o);return t}class ad{constructor(t,o,r){this._object=t,this._key=o,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function id(n,t,o){const r=n[t];return Be(r)?r:new ad(n,t,o)}var Zp;class ld{constructor(t,o,r,a){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this[Zp]=!1,this._dirty=!0,this.effect=new _a(t,()=>{this._dirty||(this._dirty=!0,Wa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Ie(this);return Fa(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Zp="__v_isReadonly";function pd(n,t,o=!1){let r,a;const i=ce(n);return i?(r=n,a=xn):(r=n.get,a=n.set),new ld(r,a,i||!a,o)}function it(n,t,o,r){let a;try{a=r?n(...r):n()}catch(i){qs(i,t,o)}return a}function kn(n,t,o,r){if(ce(n)){const i=it(n,t,o,r);return i&&kp(i)&&i.catch(l=>{qs(l,t,o)}),i}const a=[];for(let i=0;i<n.length;i++)a.push(kn(n[i],t,o,r));return a}function qs(n,t,o,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const l=t.proxy,p=o;for(;i;){const g=i.ec;if(g){for(let u=0;u<g.length;u++)if(g[u](n,l,p)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){it(c,null,10,[n,l,p]);return}}cd(n,o,a,r)}function cd(n,t,o,r=!0){console.error(n)}let Oo=!1,Tr=!1;const Xe=[];let On=0;const Zt=[];let Hn=null,bt=0;const Xp=Promise.resolve();let Sa=null;function en(n){const t=Sa||Xp;return n?t.then(this?n.bind(this):n):t}function gd(n){let t=On+1,o=Xe.length;for(;t<o;){const r=t+o>>>1;Po(Xe[r])<n?t=r+1:o=r}return t}function Ga(n){(!Xe.length||!Xe.includes(n,Oo&&n.allowRecurse?On+1:On))&&(n.id==null?Xe.push(n):Xe.splice(gd(n.id),0,n),ec())}function ec(){!Oo&&!Tr&&(Tr=!0,Sa=Xp.then(tc))}function ud(n){const t=Xe.indexOf(n);t>On&&Xe.splice(t,1)}function dd(n){ae(n)?Zt.push(...n):(!Hn||!Hn.includes(n,n.allowRecurse?bt+1:bt))&&Zt.push(n),ec()}function Ri(n,t=Oo?On+1:0){for(;t<Xe.length;t++){const o=Xe[t];o&&o.pre&&(Xe.splice(t,1),t--,o())}}function nc(n){if(Zt.length){const t=[...new Set(Zt)];if(Zt.length=0,Hn){Hn.push(...t);return}for(Hn=t,Hn.sort((o,r)=>Po(o)-Po(r)),bt=0;bt<Hn.length;bt++)Hn[bt]();Hn=null,bt=0}}const Po=n=>n.id==null?1/0:n.id,yd=(n,t)=>{const o=Po(n)-Po(t);if(o===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return o};function tc(n){Tr=!1,Oo=!0,Xe.sort(yd);const t=xn;try{for(On=0;On<Xe.length;On++){const o=Xe[On];o&&o.active!==!1&&it(o,null,14)}}finally{On=0,Xe.length=0,nc(),Oo=!1,Sa=null,(Xe.length||Zt.length)&&tc()}}function md(n,t,...o){if(n.isUnmounted)return;const r=n.vnode.props||xe;let a=o;const i=t.startsWith("update:"),l=i&&t.slice(7);if(l&&l in r){const u=`${l==="modelValue"?"model":l}Modifiers`,{number:d,trim:y}=r[u]||xe;y&&(a=o.map(m=>m.trim())),d&&(a=o.map(kr))}let p,c=r[p=ar(t)]||r[p=ar(Vn(t))];!c&&i&&(c=r[p=ar(Gt(t))]),c&&kn(c,n,6,a);const g=r[p+"Once"];if(g){if(!n.emitted)n.emitted={};else if(n.emitted[p])return;n.emitted[p]=!0,kn(g,n,6,a)}}function oc(n,t,o=!1){const r=t.emitsCache,a=r.get(n);if(a!==void 0)return a;const i=n.emits;let l={},p=!1;if(!ce(n)){const c=g=>{const u=oc(g,t,!0);u&&(p=!0,ln(l,u))};!o&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!p?(Ue(n)&&r.set(n,null),null):(ae(i)?i.forEach(c=>l[c]=null):ln(l,i),Ue(n)&&r.set(n,l),l)}function Hs(n,t){return!n||!Os(t)?!1:(t=t.slice(2).replace(/Once$/,""),ve(n,t[0].toLowerCase()+t.slice(1))||ve(n,Gt(t))||ve(n,t))}let nn=null,Ks=null;function Ds(n){const t=nn;return nn=n,Ks=n&&n.type.__scopeId||null,t}function jD(n){Ks=n}function bD(){Ks=null}function S(n,t=nn,o){if(!t||n._n)return n;const r=(...a)=>{r._d&&Mi(-1);const i=Ds(t),l=n(...a);return Ds(i),r._d&&Mi(1),l};return r._n=!0,r._c=!0,r._d=!0,r}function ir(n){const{type:t,vnode:o,proxy:r,withProxy:a,props:i,propsOptions:[l],slots:p,attrs:c,emit:g,render:u,renderCache:d,data:y,setupState:m,ctx:f,inheritAttrs:w}=n;let A,D;const b=Ds(n);try{if(o.shapeFlag&4){const R=a||r;A=Mn(u.call(R,R,d,i,m,y,f)),D=c}else{const R=t;A=Mn(R.length>1?R(i,{attrs:c,slots:p,emit:g}):R(i,null)),D=t.props?c:fd(c)}}catch(R){_o.length=0,qs(R,n,1),A=U(mt)}let I=A;if(D&&w!==!1){const R=Object.keys(D),{shapeFlag:G}=I;R.length&&G&7&&(l&&R.some(ja)&&(D=hd(D,l)),I=St(I,D))}return o.dirs&&(I=St(I),I.dirs=I.dirs?I.dirs.concat(o.dirs):o.dirs),o.transition&&(I.transition=o.transition),A=I,Ds(b),A}const fd=n=>{let t;for(const o in n)(o==="class"||o==="style"||Os(o))&&((t||(t={}))[o]=n[o]);return t},hd=(n,t)=>{const o={};for(const r in n)(!ja(r)||!(r.slice(9)in t))&&(o[r]=n[r]);return o};function vd(n,t,o){const{props:r,children:a,component:i}=n,{props:l,children:p,patchFlag:c}=t,g=i.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&c>=0){if(c&1024)return!0;if(c&16)return r?Ei(r,l,g):!!l;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const y=u[d];if(l[y]!==r[y]&&!Hs(g,y))return!0}}}else return(a||p)&&(!p||!p.$stable)?!0:r===l?!1:r?l?Ei(r,l,g):!0:!!l;return!1}function Ei(n,t,o){const r=Object.keys(t);if(r.length!==Object.keys(n).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==n[i]&&!Hs(o,i))return!0}return!1}function Ad({vnode:n,parent:t},o){for(;t&&t.subTree===n;)(n=t.vnode).el=o,t=t.parent}const sc=n=>n.__isSuspense;function wd(n,t){t&&t.pendingBranch?ae(n)?t.effects.push(...n):t.effects.push(n):dd(n)}function hn(n,t){if(ze){let o=ze.provides;const r=ze.parent&&ze.parent.provides;r===o&&(o=ze.provides=Object.create(r)),o[n]=t}}function F(n,t,o=!1){const r=ze||nn;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&n in a)return a[n];if(arguments.length>1)return o&&ce(t)?t.call(r.proxy):t}}function Xo(n,t){return Ta(n,null,t)}const Ci={};function ye(n,t,o){return Ta(n,t,o)}function Ta(n,t,{immediate:o,deep:r,flush:a,onTrack:i,onTrigger:l}=xe){const p=ze;let c,g=!1,u=!1;if(Be(n)?(c=()=>n.value,g=Bs(n)):Yt(n)?(c=()=>n,r=!0):ae(n)?(u=!0,g=n.some(D=>Yt(D)||Bs(D)),c=()=>n.map(D=>{if(Be(D))return D.value;if(Yt(D))return _t(D);if(ce(D))return it(D,p,2)})):ce(n)?t?c=()=>it(n,p,2):c=()=>{if(!(p&&p.isUnmounted))return d&&d(),kn(n,p,3,[y])}:c=xn,t&&r){const D=c;c=()=>_t(D())}let d,y=D=>{d=A.onStop=()=>{it(D,p,4)}};if(Vo)return y=xn,t?o&&kn(t,p,3,[c(),u?[]:void 0,y]):c(),xn;let m=u?[]:Ci;const f=()=>{if(!!A.active)if(t){const D=A.run();(r||g||(u?D.some((b,I)=>Uo(b,m[I])):Uo(D,m)))&&(d&&d(),kn(t,p,3,[D,m===Ci?void 0:m,y]),m=D)}else A.run()};f.allowRecurse=!!t;let w;a==="sync"?w=f:a==="post"?w=()=>Ye(f,p&&p.suspense):(f.pre=!0,p&&(f.id=p.uid),w=()=>Ga(f));const A=new _a(c,w);return t?o?f():m=A.run():a==="post"?Ye(A.run.bind(A),p&&p.suspense):A.run(),()=>{A.stop(),p&&p.scope&&ba(p.scope.effects,A)}}function Nd(n,t,o){const r=this.proxy,a=Oe(n)?n.includes(".")?rc(r,n):()=>r[n]:n.bind(r,r);let i;ce(t)?i=t:(i=t.handler,o=t);const l=ze;so(this);const p=Ta(a,i.bind(r),o);return l?so(l):kt(),p}function rc(n,t){const o=t.split(".");return()=>{let r=n;for(let a=0;a<o.length&&r;a++)r=r[o[a]];return r}}function _t(n,t){if(!Ue(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),Be(n))_t(n.value,t);else if(ae(n))for(let o=0;o<n.length;o++)_t(n[o],t);else if(xp(n)||zt(n))n.forEach(o=>{_t(o,t)});else if(Wp(n))for(const o in n)_t(n[o],t);return n}function ac(n,t){n.shapeFlag&6&&n.component?ac(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function fe(n){return ce(n)?{setup:n,name:n.name}:n}const Xt=n=>!!n.type.__asyncLoader,ic=n=>n.type.__isKeepAlive,jd={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:t}){const o=Xn(),r=o.ctx;if(!r.renderer)return()=>{const b=t.default&&t.default();return b&&b.length===1?b[0]:b};const a=new Map,i=new Set;let l=null;const p=o.suspense,{renderer:{p:c,m:g,um:u,o:{createElement:d}}}=r,y=d("div");r.activate=(b,I,R,G,T)=>{const k=b.component;g(b,I,R,0,p),c(k.vnode,b,I,R,k,p,G,b.slotScopeIds,T),Ye(()=>{k.isDeactivated=!1,k.a&&Qt(k.a);const z=b.props&&b.props.onVnodeMounted;z&&jn(z,k.parent,b)},p)},r.deactivate=b=>{const I=b.component;g(b,y,null,1,p),Ye(()=>{I.da&&Qt(I.da);const R=b.props&&b.props.onVnodeUnmounted;R&&jn(R,I.parent,b),I.isDeactivated=!0},p)};function m(b){lr(b),u(b,o,p,!0)}function f(b){a.forEach((I,R)=>{const G=Vr(I.type);G&&(!b||!b(G))&&w(R)})}function w(b){const I=a.get(b);!l||I.type!==l.type?m(I):l&&lr(l),a.delete(b),i.delete(b)}ye(()=>[n.include,n.exclude],([b,I])=>{b&&f(R=>Bo(b,R)),I&&f(R=>!Bo(I,R))},{flush:"post",deep:!0});let A=null;const D=()=>{A!=null&&a.set(A,pr(o.subTree))};return yt(D),Ua(D),Qs(()=>{a.forEach(b=>{const{subTree:I,suspense:R}=o,G=pr(I);if(b.type===G.type){lr(G);const T=G.component.da;T&&Ye(T,R);return}m(b)})}),()=>{if(A=null,!t.default)return null;const b=t.default(),I=b[0];if(b.length>1)return l=null,b;if(!oo(I)||!(I.shapeFlag&4)&&!(I.shapeFlag&128))return l=null,I;let R=pr(I);const G=R.type,T=Vr(Xt(R)?R.type.__asyncResolved||{}:G),{include:k,exclude:z,max:se}=n;if(k&&(!T||!Bo(k,T))||z&&T&&Bo(z,T))return l=R,I;const he=R.key==null?G:R.key,Ae=a.get(he);return R.el&&(R=St(R),I.shapeFlag&128&&(I.ssContent=R)),A=he,Ae?(R.el=Ae.el,R.component=Ae.component,R.transition&&ac(R,R.transition),R.shapeFlag|=512,i.delete(he),i.add(he)):(i.add(he),se&&i.size>parseInt(se,10)&&w(i.values().next().value)),R.shapeFlag|=256,l=R,sc(I.type)?I:R}}},lc=jd;function Bo(n,t){return ae(n)?n.some(o=>Bo(o,t)):Oe(n)?n.split(",").includes(t):n.test?n.test(t):!1}function bd(n,t){pc(n,"a",t)}function Id(n,t){pc(n,"da",t)}function pc(n,t,o=ze){const r=n.__wdc||(n.__wdc=()=>{let a=o;for(;a;){if(a.isDeactivated)return;a=a.parent}return n()});if(zs(t,r,o),o){let a=o.parent;for(;a&&a.parent;)ic(a.parent.vnode)&&Bd(r,t,o,a),a=a.parent}}function Bd(n,t,o,r){const a=zs(t,n,r,!0);Ys(()=>{ba(r[t],a)},o)}function lr(n){let t=n.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),n.shapeFlag=t}function pr(n){return n.shapeFlag&128?n.ssContent:n}function zs(n,t,o=ze,r=!1){if(o){const a=o[n]||(o[n]=[]),i=t.__weh||(t.__weh=(...l)=>{if(o.isUnmounted)return;lo(),so(o);const p=kn(t,o,n,l);return kt(),po(),p});return r?a.unshift(i):a.push(i),i}}const Zn=n=>(t,o=ze)=>(!Vo||n==="sp")&&zs(n,t,o),cc=Zn("bm"),yt=Zn("m"),Dd=Zn("bu"),Ua=Zn("u"),Qs=Zn("bum"),Ys=Zn("um"),_d=Zn("sp"),Rd=Zn("rtg"),Ed=Zn("rtc");function Cd(n,t=ze){zs("ec",n,t)}function Ma(n,t){const o=nn;if(o===null)return n;const r=Xs(o)||o.proxy,a=n.dirs||(n.dirs=[]);for(let i=0;i<t.length;i++){let[l,p,c,g=xe]=t[i];ce(l)&&(l={mounted:l,updated:l}),l.deep&&_t(p),a.push({dir:l,instance:r,value:p,oldValue:void 0,arg:c,modifiers:g})}return n}function ht(n,t,o,r){const a=n.dirs,i=t&&t.dirs;for(let l=0;l<a.length;l++){const p=a[l];i&&(p.oldValue=i[l].value);let c=p.dir[r];c&&(lo(),kn(c,o,8,[n.el,p,n,t]),po())}}const gc="components";function $o(n,t){return kd(gc,n,!0,t)||n}const xd=Symbol();function kd(n,t,o=!0,r=!1){const a=nn||ze;if(a){const i=a.type;if(n===gc){const p=Vr(i,!1);if(p&&(p===t||p===Vn(t)||p===Js(Vn(t))))return i}const l=xi(a[n]||i[n],t)||xi(a.appContext[n],t);return!l&&r?i:l}}function xi(n,t){return n&&(n[t]||n[Vn(t)]||n[Js(Vn(t))])}function es(n,t,o,r){let a;const i=o&&o[r];if(ae(n)||Oe(n)){a=new Array(n.length);for(let l=0,p=n.length;l<p;l++)a[l]=t(n[l],l,void 0,i&&i[l])}else if(typeof n=="number"){a=new Array(n);for(let l=0;l<n;l++)a[l]=t(l+1,l,void 0,i&&i[l])}else if(Ue(n))if(n[Symbol.iterator])a=Array.from(n,(l,p)=>t(l,p,void 0,i&&i[p]));else{const l=Object.keys(n);a=new Array(l.length);for(let p=0,c=l.length;p<c;p++){const g=l[p];a[p]=t(n[g],g,p,i&&i[p])}}else a=[];return o&&(o[r]=a),a}function Qe(n,t,o={},r,a){if(nn.isCE||nn.parent&&Xt(nn.parent)&&nn.parent.isCE)return U("slot",t==="default"?null:{name:t},r&&r());let i=n[t];i&&i._c&&(i._d=!1),j();const l=i&&uc(i(o)),p=L(_e,{key:o.key||l&&l.key||`_${t}`},l||(r?r():[]),l&&n._===1?64:-2);return!a&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),i&&i._c&&(i._d=!0),p}function uc(n){return n.some(t=>oo(t)?!(t.type===mt||t.type===_e&&!uc(t.children)):!0)?n:null}const Ur=n=>n?jc(n)?Xs(n)||n.proxy:Ur(n.parent):null,_s=ln(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ur(n.parent),$root:n=>Ur(n.root),$emit:n=>n.emit,$options:n=>Oa(n),$forceUpdate:n=>n.f||(n.f=()=>Ga(n.update)),$nextTick:n=>n.n||(n.n=en.bind(n.proxy)),$watch:n=>Nd.bind(n)}),Fd={get({_:n},t){const{ctx:o,setupState:r,data:a,props:i,accessCache:l,type:p,appContext:c}=n;let g;if(t[0]!=="$"){const m=l[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return a[t];case 4:return o[t];case 3:return i[t]}else{if(r!==xe&&ve(r,t))return l[t]=1,r[t];if(a!==xe&&ve(a,t))return l[t]=2,a[t];if((g=n.propsOptions[0])&&ve(g,t))return l[t]=3,i[t];if(o!==xe&&ve(o,t))return l[t]=4,o[t];Mr&&(l[t]=0)}}const u=_s[t];let d,y;if(u)return t==="$attrs"&&Nn(n,"get",t),u(n);if((d=p.__cssModules)&&(d=d[t]))return d;if(o!==xe&&ve(o,t))return l[t]=4,o[t];if(y=c.config.globalProperties,ve(y,t))return y[t]},set({_:n},t,o){const{data:r,setupState:a,ctx:i}=n;return a!==xe&&ve(a,t)?(a[t]=o,!0):r!==xe&&ve(r,t)?(r[t]=o,!0):ve(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(i[t]=o,!0)},has({_:{data:n,setupState:t,accessCache:o,ctx:r,appContext:a,propsOptions:i}},l){let p;return!!o[l]||n!==xe&&ve(n,l)||t!==xe&&ve(t,l)||(p=i[0])&&ve(p,l)||ve(r,l)||ve(_s,l)||ve(a.config.globalProperties,l)},defineProperty(n,t,o){return o.get!=null?n._.accessCache[t]=0:ve(o,"value")&&this.set(n,t,o.value,null),Reflect.defineProperty(n,t,o)}};let Mr=!0;function Wd(n){const t=Oa(n),o=n.proxy,r=n.ctx;Mr=!1,t.beforeCreate&&ki(t.beforeCreate,n,"bc");const{data:a,computed:i,methods:l,watch:p,provide:c,inject:g,created:u,beforeMount:d,mounted:y,beforeUpdate:m,updated:f,activated:w,deactivated:A,beforeDestroy:D,beforeUnmount:b,destroyed:I,unmounted:R,render:G,renderTracked:T,renderTriggered:k,errorCaptured:z,serverPrefetch:se,expose:he,inheritAttrs:Ae,components:Je,directives:Ve,filters:Me}=t;if(g&&Sd(g,r,null,n.appContext.config.unwrapInjectedRef),l)for(const Q in l){const re=l[Q];ce(re)&&(r[Q]=re.bind(o))}if(a){const Q=a.call(o,o);Ue(Q)&&(n.data=Se(Q))}if(Mr=!0,i)for(const Q in i){const re=i[Q],ue=ce(re)?re.bind(o,o):ce(re.get)?re.get.bind(o,o):xn,Re=!ce(re)&&ce(re.set)?re.set.bind(o):xn,gn=_({get:ue,set:Re});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>gn.value,set:Ze=>gn.value=Ze})}if(p)for(const Q in p)dc(p[Q],r,o,Q);if(c){const Q=ce(c)?c.call(o):c;Reflect.ownKeys(Q).forEach(re=>{hn(re,Q[re])})}u&&ki(u,n,"c");function Te(Q,re){ae(re)?re.forEach(ue=>Q(ue.bind(o))):re&&Q(re.bind(o))}if(Te(cc,d),Te(yt,y),Te(Dd,m),Te(Ua,f),Te(bd,w),Te(Id,A),Te(Cd,z),Te(Ed,T),Te(Rd,k),Te(Qs,b),Te(Ys,R),Te(_d,se),ae(he))if(he.length){const Q=n.exposed||(n.exposed={});he.forEach(re=>{Object.defineProperty(Q,re,{get:()=>o[re],set:ue=>o[re]=ue})})}else n.exposed||(n.exposed={});G&&n.render===xn&&(n.render=G),Ae!=null&&(n.inheritAttrs=Ae),Je&&(n.components=Je),Ve&&(n.directives=Ve)}function Sd(n,t,o=xn,r=!1){ae(n)&&(n=Or(n));for(const a in n){const i=n[a];let l;Ue(i)?"default"in i?l=F(i.from||a,i.default,!0):l=F(i.from||a):l=F(i),Be(l)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>l.value,set:p=>l.value=p}):t[a]=l}}function ki(n,t,o){kn(ae(n)?n.map(r=>r.bind(t.proxy)):n.bind(t.proxy),t,o)}function dc(n,t,o,r){const a=r.includes(".")?rc(o,r):()=>o[r];if(Oe(n)){const i=t[n];ce(i)&&ye(a,i)}else if(ce(n))ye(a,n.bind(o));else if(Ue(n))if(ae(n))n.forEach(i=>dc(i,t,o,r));else{const i=ce(n.handler)?n.handler.bind(o):t[n.handler];ce(i)&&ye(a,i,n)}}function Oa(n){const t=n.type,{mixins:o,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:l}}=n.appContext,p=i.get(t);let c;return p?c=p:!a.length&&!o&&!r?c=t:(c={},a.length&&a.forEach(g=>Rs(c,g,l,!0)),Rs(c,t,l)),Ue(t)&&i.set(t,c),c}function Rs(n,t,o,r=!1){const{mixins:a,extends:i}=t;i&&Rs(n,i,o,!0),a&&a.forEach(l=>Rs(n,l,o,!0));for(const l in t)if(!(r&&l==="expose")){const p=Gd[l]||o&&o[l];n[l]=p?p(n[l],t[l]):t[l]}return n}const Gd={data:Fi,props:Nt,emits:Nt,methods:Nt,computed:Nt,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:Nt,directives:Nt,watch:Ud,provide:Fi,inject:Td};function Fi(n,t){return t?n?function(){return ln(ce(n)?n.call(this,this):n,ce(t)?t.call(this,this):t)}:t:n}function Td(n,t){return Nt(Or(n),Or(t))}function Or(n){if(ae(n)){const t={};for(let o=0;o<n.length;o++)t[n[o]]=n[o];return t}return n}function sn(n,t){return n?[...new Set([].concat(n,t))]:t}function Nt(n,t){return n?ln(ln(Object.create(null),n),t):t}function Ud(n,t){if(!n)return t;if(!t)return n;const o=ln(Object.create(null),n);for(const r in t)o[r]=sn(n[r],t[r]);return o}function Md(n,t,o,r=!1){const a={},i={};Is(i,Zs,1),n.propsDefaults=Object.create(null),yc(n,t,a,i);for(const l in n.propsOptions[0])l in a||(a[l]=void 0);o?n.props=r?a:nd(a):n.type.props?n.props=a:n.props=i,n.attrs=i}function Od(n,t,o,r){const{props:a,attrs:i,vnode:{patchFlag:l}}=n,p=Ie(a),[c]=n.propsOptions;let g=!1;if((r||l>0)&&!(l&16)){if(l&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let y=u[d];if(Hs(n.emitsOptions,y))continue;const m=t[y];if(c)if(ve(i,y))m!==i[y]&&(i[y]=m,g=!0);else{const f=Vn(y);a[f]=Pr(c,p,f,m,n,!1)}else m!==i[y]&&(i[y]=m,g=!0)}}}else{yc(n,t,a,i)&&(g=!0);let u;for(const d in p)(!t||!ve(t,d)&&((u=Gt(d))===d||!ve(t,u)))&&(c?o&&(o[d]!==void 0||o[u]!==void 0)&&(a[d]=Pr(c,p,d,void 0,n,!0)):delete a[d]);if(i!==p)for(const d in i)(!t||!ve(t,d)&&!0)&&(delete i[d],g=!0)}g&&Qn(n,"set","$attrs")}function yc(n,t,o,r){const[a,i]=n.propsOptions;let l=!1,p;if(t)for(let c in t){if(hs(c))continue;const g=t[c];let u;a&&ve(a,u=Vn(c))?!i||!i.includes(u)?o[u]=g:(p||(p={}))[u]=g:Hs(n.emitsOptions,c)||(!(c in r)||g!==r[c])&&(r[c]=g,l=!0)}if(i){const c=Ie(o),g=p||xe;for(let u=0;u<i.length;u++){const d=i[u];o[d]=Pr(a,c,d,g[d],n,!ve(g,d))}}return l}function Pr(n,t,o,r,a,i){const l=n[o];if(l!=null){const p=ve(l,"default");if(p&&r===void 0){const c=l.default;if(l.type!==Function&&ce(c)){const{propsDefaults:g}=a;o in g?r=g[o]:(so(a),r=g[o]=c.call(null,t),kt())}else r=c}l[0]&&(i&&!p?r=!1:l[1]&&(r===""||r===Gt(o))&&(r=!0))}return r}function mc(n,t,o=!1){const r=t.propsCache,a=r.get(n);if(a)return a;const i=n.props,l={},p=[];let c=!1;if(!ce(n)){const u=d=>{c=!0;const[y,m]=mc(d,t,!0);ln(l,y),m&&p.push(...m)};!o&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!i&&!c)return Ue(n)&&r.set(n,Kt),Kt;if(ae(i))for(let u=0;u<i.length;u++){const d=Vn(i[u]);Wi(d)&&(l[d]=xe)}else if(i)for(const u in i){const d=Vn(u);if(Wi(d)){const y=i[u],m=l[d]=ae(y)||ce(y)?{type:y}:y;if(m){const f=Ti(Boolean,m.type),w=Ti(String,m.type);m[0]=f>-1,m[1]=w<0||f<w,(f>-1||ve(m,"default"))&&p.push(d)}}}const g=[l,p];return Ue(n)&&r.set(n,g),g}function Wi(n){return n[0]!=="$"}function Si(n){const t=n&&n.toString().match(/^\s*function (\w+)/);return t?t[1]:n===null?"null":""}function Gi(n,t){return Si(n)===Si(t)}function Ti(n,t){return ae(t)?t.findIndex(o=>Gi(o,n)):ce(t)&&Gi(t,n)?0:-1}const fc=n=>n[0]==="_"||n==="$stable",Pa=n=>ae(n)?n.map(Mn):[Mn(n)],Pd=(n,t,o)=>{if(t._n)return t;const r=S((...a)=>Pa(t(...a)),o);return r._c=!1,r},hc=(n,t,o)=>{const r=n._ctx;for(const a in n){if(fc(a))continue;const i=n[a];if(ce(i))t[a]=Pd(a,i,r);else if(i!=null){const l=Pa(i);t[a]=()=>l}}},vc=(n,t)=>{const o=Pa(t);n.slots.default=()=>o},$d=(n,t)=>{if(n.vnode.shapeFlag&32){const o=t._;o?(n.slots=Ie(t),Is(t,"_",o)):hc(t,n.slots={})}else n.slots={},t&&vc(n,t);Is(n.slots,Zs,1)},Jd=(n,t,o)=>{const{vnode:r,slots:a}=n;let i=!0,l=xe;if(r.shapeFlag&32){const p=t._;p?o&&p===1?i=!1:(ln(a,t),!o&&p===1&&delete a._):(i=!t.$stable,hc(t,a)),l=t}else t&&(vc(n,t),l={default:1});if(i)for(const p in a)!fc(p)&&!(p in l)&&delete a[p]};function Ac(){return{app:null,config:{isNativeTag:Nu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vd=0;function Ld(n,t){return function(r,a=null){ce(r)||(r=Object.assign({},r)),a!=null&&!Ue(a)&&(a=null);const i=Ac(),l=new Set;let p=!1;const c=i.app={_uid:Vd++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:cy,get config(){return i.config},set config(g){},use(g,...u){return l.has(g)||(g&&ce(g.install)?(l.add(g),g.install(c,...u)):ce(g)&&(l.add(g),g(c,...u))),c},mixin(g){return i.mixins.includes(g)||i.mixins.push(g),c},component(g,u){return u?(i.components[g]=u,c):i.components[g]},directive(g,u){return u?(i.directives[g]=u,c):i.directives[g]},mount(g,u,d){if(!p){const y=U(r,a);return y.appContext=i,u&&t?t(y,g):n(y,g,d),p=!0,c._container=g,g.__vue_app__=c,Xs(y.component)||y.component.proxy}},unmount(){p&&(n(null,c._container),delete c._container.__vue_app__)},provide(g,u){return i.provides[g]=u,c}};return c}}function $r(n,t,o,r,a=!1){if(ae(n)){n.forEach((y,m)=>$r(y,t&&(ae(t)?t[m]:t),o,r,a));return}if(Xt(r)&&!a)return;const i=r.shapeFlag&4?Xs(r.component)||r.component.proxy:r.el,l=a?null:i,{i:p,r:c}=n,g=t&&t.r,u=p.refs===xe?p.refs={}:p.refs,d=p.setupState;if(g!=null&&g!==c&&(Oe(g)?(u[g]=null,ve(d,g)&&(d[g]=null)):Be(g)&&(g.value=null)),ce(c))it(c,p,12,[l,u]);else{const y=Oe(c),m=Be(c);if(y||m){const f=()=>{if(n.f){const w=y?u[c]:c.value;a?ae(w)&&ba(w,i):ae(w)?w.includes(i)||w.push(i):y?(u[c]=[i],ve(d,c)&&(d[c]=u[c])):(c.value=[i],n.k&&(u[n.k]=c.value))}else y?(u[c]=l,ve(d,c)&&(d[c]=l)):m&&(c.value=l,n.k&&(u[n.k]=l))};l?(f.id=-1,Ye(f,o)):f()}}}const Ye=wd;function qd(n){return Hd(n)}function Hd(n,t){const o=_u();o.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:l,createText:p,createComment:c,setText:g,setElementText:u,parentNode:d,nextSibling:y,setScopeId:m=xn,cloneNode:f,insertStaticContent:w}=n,A=(h,v,B,x=null,C=null,P=null,H=!1,M=null,V=!!v.dynamicChildren)=>{if(h===v)return;h&&!fo(h,v)&&(x=Z(h),pn(h,C,P,!0),h=null),v.patchFlag===-2&&(V=!1,v.dynamicChildren=null);const{type:W,ref:X,shapeFlag:Y}=v;switch(W){case Ja:D(h,v,B,x);break;case mt:b(h,v,B,x);break;case cr:h==null&&I(v,B,x,H);break;case _e:Ve(h,v,B,x,C,P,H,M,V);break;default:Y&1?T(h,v,B,x,C,P,H,M,V):Y&6?Me(h,v,B,x,C,P,H,M,V):(Y&64||Y&128)&&W.process(h,v,B,x,C,P,H,M,V,me)}X!=null&&C&&$r(X,h&&h.ref,P,v||h,!v)},D=(h,v,B,x)=>{if(h==null)r(v.el=p(v.children),B,x);else{const C=v.el=h.el;v.children!==h.children&&g(C,v.children)}},b=(h,v,B,x)=>{h==null?r(v.el=c(v.children||""),B,x):v.el=h.el},I=(h,v,B,x)=>{[h.el,h.anchor]=w(h.children,v,B,x,h.el,h.anchor)},R=({el:h,anchor:v},B,x)=>{let C;for(;h&&h!==v;)C=y(h),r(h,B,x),h=C;r(v,B,x)},G=({el:h,anchor:v})=>{let B;for(;h&&h!==v;)B=y(h),a(h),h=B;a(v)},T=(h,v,B,x,C,P,H,M,V)=>{H=H||v.type==="svg",h==null?k(v,B,x,C,P,H,M,V):he(h,v,C,P,H,M,V)},k=(h,v,B,x,C,P,H,M)=>{let V,W;const{type:X,props:Y,shapeFlag:ee,transition:ie,patchFlag:we,dirs:Ee}=h;if(h.el&&f!==void 0&&we===-1)V=h.el=f(h.el);else{if(V=h.el=l(h.type,P,Y&&Y.is,Y),ee&8?u(V,h.children):ee&16&&se(h.children,V,null,x,C,P&&X!=="foreignObject",H,M),Ee&&ht(h,null,x,"created"),Y){for(const Fe in Y)Fe!=="value"&&!hs(Fe)&&i(V,Fe,null,Y[Fe],P,h.children,x,C,J);"value"in Y&&i(V,"value",null,Y.value),(W=Y.onVnodeBeforeMount)&&jn(W,x,h)}z(V,h,h.scopeId,H,x)}Ee&&ht(h,null,x,"beforeMount");const Ce=(!C||C&&!C.pendingBranch)&&ie&&!ie.persisted;Ce&&ie.beforeEnter(V),r(V,v,B),((W=Y&&Y.onVnodeMounted)||Ce||Ee)&&Ye(()=>{W&&jn(W,x,h),Ce&&ie.enter(V),Ee&&ht(h,null,x,"mounted")},C)},z=(h,v,B,x,C)=>{if(B&&m(h,B),x)for(let P=0;P<x.length;P++)m(h,x[P]);if(C){let P=C.subTree;if(v===P){const H=C.vnode;z(h,H,H.scopeId,H.slotScopeIds,C.parent)}}},se=(h,v,B,x,C,P,H,M,V=0)=>{for(let W=V;W<h.length;W++){const X=h[W]=M?ot(h[W]):Mn(h[W]);A(null,X,v,B,x,C,P,H,M)}},he=(h,v,B,x,C,P,H)=>{const M=v.el=h.el;let{patchFlag:V,dynamicChildren:W,dirs:X}=v;V|=h.patchFlag&16;const Y=h.props||xe,ee=v.props||xe;let ie;B&&vt(B,!1),(ie=ee.onVnodeBeforeUpdate)&&jn(ie,B,v,h),X&&ht(v,h,B,"beforeUpdate"),B&&vt(B,!0);const we=C&&v.type!=="foreignObject";if(W?Ae(h.dynamicChildren,W,M,B,x,we,P):H||ue(h,v,M,null,B,x,we,P,!1),V>0){if(V&16)Je(M,v,Y,ee,B,x,C);else if(V&2&&Y.class!==ee.class&&i(M,"class",null,ee.class,C),V&4&&i(M,"style",Y.style,ee.style,C),V&8){const Ee=v.dynamicProps;for(let Ce=0;Ce<Ee.length;Ce++){const Fe=Ee[Ce],Bn=Y[Fe],Mt=ee[Fe];(Mt!==Bn||Fe==="value")&&i(M,Fe,Bn,Mt,C,h.children,B,x,J)}}V&1&&h.children!==v.children&&u(M,v.children)}else!H&&W==null&&Je(M,v,Y,ee,B,x,C);((ie=ee.onVnodeUpdated)||X)&&Ye(()=>{ie&&jn(ie,B,v,h),X&&ht(v,h,B,"updated")},x)},Ae=(h,v,B,x,C,P,H)=>{for(let M=0;M<v.length;M++){const V=h[M],W=v[M],X=V.el&&(V.type===_e||!fo(V,W)||V.shapeFlag&70)?d(V.el):B;A(V,W,X,null,x,C,P,H,!0)}},Je=(h,v,B,x,C,P,H)=>{if(B!==x){for(const M in x){if(hs(M))continue;const V=x[M],W=B[M];V!==W&&M!=="value"&&i(h,M,W,V,H,v.children,C,P,J)}if(B!==xe)for(const M in B)!hs(M)&&!(M in x)&&i(h,M,B[M],null,H,v.children,C,P,J);"value"in x&&i(h,"value",B.value,x.value)}},Ve=(h,v,B,x,C,P,H,M,V)=>{const W=v.el=h?h.el:p(""),X=v.anchor=h?h.anchor:p("");let{patchFlag:Y,dynamicChildren:ee,slotScopeIds:ie}=v;ie&&(M=M?M.concat(ie):ie),h==null?(r(W,B,x),r(X,B,x),se(v.children,B,X,C,P,H,M,V)):Y>0&&Y&64&&ee&&h.dynamicChildren?(Ae(h.dynamicChildren,ee,B,C,P,H,M),(v.key!=null||C&&v===C.subTree)&&$a(h,v,!0)):ue(h,v,B,X,C,P,H,M,V)},Me=(h,v,B,x,C,P,H,M,V)=>{v.slotScopeIds=M,h==null?v.shapeFlag&512?C.ctx.activate(v,B,x,H,V):ke(v,B,x,C,P,H,V):Te(h,v,V)},ke=(h,v,B,x,C,P,H)=>{const M=h.component=oy(h,x,C);if(ic(h)&&(M.ctx.renderer=me),sy(M),M.asyncDep){if(C&&C.registerDep(M,Q),!h.el){const V=M.subTree=U(mt);b(null,V,v,B)}return}Q(M,h,v,B,C,P,H)},Te=(h,v,B)=>{const x=v.component=h.component;if(vd(h,v,B))if(x.asyncDep&&!x.asyncResolved){re(x,v,B);return}else x.next=v,ud(x.update),x.update();else v.el=h.el,x.vnode=v},Q=(h,v,B,x,C,P,H)=>{const M=()=>{if(h.isMounted){let{next:X,bu:Y,u:ee,parent:ie,vnode:we}=h,Ee=X,Ce;vt(h,!1),X?(X.el=we.el,re(h,X,H)):X=we,Y&&Qt(Y),(Ce=X.props&&X.props.onVnodeBeforeUpdate)&&jn(Ce,ie,X,we),vt(h,!0);const Fe=ir(h),Bn=h.subTree;h.subTree=Fe,A(Bn,Fe,d(Bn.el),Z(Bn),h,C,P),X.el=Fe.el,Ee===null&&Ad(h,Fe.el),ee&&Ye(ee,C),(Ce=X.props&&X.props.onVnodeUpdated)&&Ye(()=>jn(Ce,ie,X,we),C)}else{let X;const{el:Y,props:ee}=v,{bm:ie,m:we,parent:Ee}=h,Ce=Xt(v);if(vt(h,!1),ie&&Qt(ie),!Ce&&(X=ee&&ee.onVnodeBeforeMount)&&jn(X,Ee,v),vt(h,!0),Y&&oe){const Fe=()=>{h.subTree=ir(h),oe(Y,h.subTree,h,C,null)};Ce?v.type.__asyncLoader().then(()=>!h.isUnmounted&&Fe()):Fe()}else{const Fe=h.subTree=ir(h);A(null,Fe,B,x,h,C,P),v.el=Fe.el}if(we&&Ye(we,C),!Ce&&(X=ee&&ee.onVnodeMounted)){const Fe=v;Ye(()=>jn(X,Ee,Fe),C)}(v.shapeFlag&256||Ee&&Xt(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&h.a&&Ye(h.a,C),h.isMounted=!0,v=B=x=null}},V=h.effect=new _a(M,()=>Ga(W),h.scope),W=h.update=()=>V.run();W.id=h.uid,vt(h,!0),W()},re=(h,v,B)=>{v.component=h;const x=h.vnode.props;h.vnode=v,h.next=null,Od(h,v.props,x,B),Jd(h,v.children,B),lo(),Ri(),po()},ue=(h,v,B,x,C,P,H,M,V=!1)=>{const W=h&&h.children,X=h?h.shapeFlag:0,Y=v.children,{patchFlag:ee,shapeFlag:ie}=v;if(ee>0){if(ee&128){gn(W,Y,B,x,C,P,H,M,V);return}else if(ee&256){Re(W,Y,B,x,C,P,H,M,V);return}}ie&8?(X&16&&J(W,C,P),Y!==W&&u(B,Y)):X&16?ie&16?gn(W,Y,B,x,C,P,H,M,V):J(W,C,P,!0):(X&8&&u(B,""),ie&16&&se(Y,B,x,C,P,H,M,V))},Re=(h,v,B,x,C,P,H,M,V)=>{h=h||Kt,v=v||Kt;const W=h.length,X=v.length,Y=Math.min(W,X);let ee;for(ee=0;ee<Y;ee++){const ie=v[ee]=V?ot(v[ee]):Mn(v[ee]);A(h[ee],ie,B,null,C,P,H,M,V)}W>X?J(h,C,P,!0,!1,Y):se(v,B,x,C,P,H,M,V,Y)},gn=(h,v,B,x,C,P,H,M,V)=>{let W=0;const X=v.length;let Y=h.length-1,ee=X-1;for(;W<=Y&&W<=ee;){const ie=h[W],we=v[W]=V?ot(v[W]):Mn(v[W]);if(fo(ie,we))A(ie,we,B,null,C,P,H,M,V);else break;W++}for(;W<=Y&&W<=ee;){const ie=h[Y],we=v[ee]=V?ot(v[ee]):Mn(v[ee]);if(fo(ie,we))A(ie,we,B,null,C,P,H,M,V);else break;Y--,ee--}if(W>Y){if(W<=ee){const ie=ee+1,we=ie<X?v[ie].el:x;for(;W<=ee;)A(null,v[W]=V?ot(v[W]):Mn(v[W]),B,we,C,P,H,M,V),W++}}else if(W>ee)for(;W<=Y;)pn(h[W],C,P,!0),W++;else{const ie=W,we=W,Ee=new Map;for(W=we;W<=ee;W++){const un=v[W]=V?ot(v[W]):Mn(v[W]);un.key!=null&&Ee.set(un.key,W)}let Ce,Fe=0;const Bn=ee-we+1;let Mt=!1,hi=0;const mo=new Array(Bn);for(W=0;W<Bn;W++)mo[W]=0;for(W=ie;W<=Y;W++){const un=h[W];if(Fe>=Bn){pn(un,C,P,!0);continue}let Un;if(un.key!=null)Un=Ee.get(un.key);else for(Ce=we;Ce<=ee;Ce++)if(mo[Ce-we]===0&&fo(un,v[Ce])){Un=Ce;break}Un===void 0?pn(un,C,P,!0):(mo[Un-we]=W+1,Un>=hi?hi=Un:Mt=!0,A(un,v[Un],B,null,C,P,H,M,V),Fe++)}const vi=Mt?Kd(mo):Kt;for(Ce=vi.length-1,W=Bn-1;W>=0;W--){const un=we+W,Un=v[un],Ai=un+1<X?v[un+1].el:x;mo[W]===0?A(null,Un,B,Ai,C,P,H,M,V):Mt&&(Ce<0||W!==vi[Ce]?Ze(Un,B,Ai,2):Ce--)}}},Ze=(h,v,B,x,C=null)=>{const{el:P,type:H,transition:M,children:V,shapeFlag:W}=h;if(W&6){Ze(h.component.subTree,v,B,x);return}if(W&128){h.suspense.move(v,B,x);return}if(W&64){H.move(h,v,B,me);return}if(H===_e){r(P,v,B);for(let Y=0;Y<V.length;Y++)Ze(V[Y],v,B,x);r(h.anchor,v,B);return}if(H===cr){R(h,v,B);return}if(x!==2&&W&1&&M)if(x===0)M.beforeEnter(P),r(P,v,B),Ye(()=>M.enter(P),C);else{const{leave:Y,delayLeave:ee,afterLeave:ie}=M,we=()=>r(P,v,B),Ee=()=>{Y(P,()=>{we(),ie&&ie()})};ee?ee(P,we,Ee):Ee()}else r(P,v,B)},pn=(h,v,B,x=!1,C=!1)=>{const{type:P,props:H,ref:M,children:V,dynamicChildren:W,shapeFlag:X,patchFlag:Y,dirs:ee}=h;if(M!=null&&$r(M,null,B,h,!0),X&256){v.ctx.deactivate(h);return}const ie=X&1&&ee,we=!Xt(h);let Ee;if(we&&(Ee=H&&H.onVnodeBeforeUnmount)&&jn(Ee,v,h),X&6)K(h.component,B,x);else{if(X&128){h.suspense.unmount(B,x);return}ie&&ht(h,null,v,"beforeUnmount"),X&64?h.type.remove(h,v,B,C,me,x):W&&(P!==_e||Y>0&&Y&64)?J(W,v,B,!1,!0):(P===_e&&Y&384||!C&&X&16)&&J(V,v,B),x&&ft(h)}(we&&(Ee=H&&H.onVnodeUnmounted)||ie)&&Ye(()=>{Ee&&jn(Ee,v,h),ie&&ht(h,null,v,"unmounted")},B)},ft=h=>{const{type:v,el:B,anchor:x,transition:C}=h;if(v===_e){E(B,x);return}if(v===cr){G(h);return}const P=()=>{a(B),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(h.shapeFlag&1&&C&&!C.persisted){const{leave:H,delayLeave:M}=C,V=()=>H(B,P);M?M(h.el,P,V):V()}else P()},E=(h,v)=>{let B;for(;h!==v;)B=y(h),a(h),h=B;a(v)},K=(h,v,B)=>{const{bum:x,scope:C,update:P,subTree:H,um:M}=h;x&&Qt(x),C.stop(),P&&(P.active=!1,pn(H,h,v,B)),M&&Ye(M,v),Ye(()=>{h.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},J=(h,v,B,x=!1,C=!1,P=0)=>{for(let H=P;H<h.length;H++)pn(h[H],v,B,x,C)},Z=h=>h.shapeFlag&6?Z(h.component.subTree):h.shapeFlag&128?h.suspense.next():y(h.anchor||h.el),je=(h,v,B)=>{h==null?v._vnode&&pn(v._vnode,null,null,!0):A(v._vnode||null,h,v,null,null,null,B),Ri(),nc(),v._vnode=h},me={p:A,um:pn,m:Ze,r:ft,mt:ke,mc:se,pc:ue,pbc:Ae,n:Z,o:n};let le,oe;return t&&([le,oe]=t(me)),{render:je,hydrate:le,createApp:Ld(je,le)}}function vt({effect:n,update:t},o){n.allowRecurse=t.allowRecurse=o}function $a(n,t,o=!1){const r=n.children,a=t.children;if(ae(r)&&ae(a))for(let i=0;i<r.length;i++){const l=r[i];let p=a[i];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=a[i]=ot(a[i]),p.el=l.el),o||$a(l,p))}}function Kd(n){const t=n.slice(),o=[0];let r,a,i,l,p;const c=n.length;for(r=0;r<c;r++){const g=n[r];if(g!==0){if(a=o[o.length-1],n[a]<g){t[r]=a,o.push(r);continue}for(i=0,l=o.length-1;i<l;)p=i+l>>1,n[o[p]]<g?i=p+1:l=p;g<n[o[i]]&&(i>0&&(t[r]=o[i-1]),o[i]=r)}}for(i=o.length,l=o[i-1];i-- >0;)o[i]=l,l=t[l];return o}const zd=n=>n.__isTeleport,Do=n=>n&&(n.disabled||n.disabled===""),Ui=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Jr=(n,t)=>{const o=n&&n.to;return Oe(o)?t?t(o):null:o},Qd={__isTeleport:!0,process(n,t,o,r,a,i,l,p,c,g){const{mc:u,pc:d,pbc:y,o:{insert:m,querySelector:f,createText:w,createComment:A}}=g,D=Do(t.props);let{shapeFlag:b,children:I,dynamicChildren:R}=t;if(n==null){const G=t.el=w(""),T=t.anchor=w("");m(G,o,r),m(T,o,r);const k=t.target=Jr(t.props,f),z=t.targetAnchor=w("");k&&(m(z,k),l=l||Ui(k));const se=(he,Ae)=>{b&16&&u(I,he,Ae,a,i,l,p,c)};D?se(o,T):k&&se(k,z)}else{t.el=n.el;const G=t.anchor=n.anchor,T=t.target=n.target,k=t.targetAnchor=n.targetAnchor,z=Do(n.props),se=z?o:T,he=z?G:k;if(l=l||Ui(T),R?(y(n.dynamicChildren,R,se,a,i,l,p),$a(n,t,!0)):c||d(n,t,se,he,a,i,l,p,!1),D)z||us(t,o,G,g,1);else if((t.props&&t.props.to)!==(n.props&&n.props.to)){const Ae=t.target=Jr(t.props,f);Ae&&us(t,Ae,null,g,0)}else z&&us(t,T,k,g,1)}},remove(n,t,o,r,{um:a,o:{remove:i}},l){const{shapeFlag:p,children:c,anchor:g,targetAnchor:u,target:d,props:y}=n;if(d&&i(u),(l||!Do(y))&&(i(g),p&16))for(let m=0;m<c.length;m++){const f=c[m];a(f,t,o,!0,!!f.dynamicChildren)}},move:us,hydrate:Yd};function us(n,t,o,{o:{insert:r},m:a},i=2){i===0&&r(n.targetAnchor,t,o);const{el:l,anchor:p,shapeFlag:c,children:g,props:u}=n,d=i===2;if(d&&r(l,t,o),(!d||Do(u))&&c&16)for(let y=0;y<g.length;y++)a(g[y],t,o,2);d&&r(p,t,o)}function Yd(n,t,o,r,a,i,{o:{nextSibling:l,parentNode:p,querySelector:c}},g){const u=t.target=Jr(t.props,c);if(u){const d=u._lpa||u.firstChild;if(t.shapeFlag&16)if(Do(t.props))t.anchor=g(l(n),t,p(n),o,r,a,i),t.targetAnchor=d;else{t.anchor=l(n);let y=d;for(;y;)if(y=l(y),y&&y.nodeType===8&&y.data==="teleport anchor"){t.targetAnchor=y,u._lpa=t.targetAnchor&&l(t.targetAnchor);break}g(d,t,u,o,r,a,i)}}return t.anchor&&l(t.anchor)}const Zd=Qd,_e=Symbol(void 0),Ja=Symbol(void 0),mt=Symbol(void 0),cr=Symbol(void 0),_o=[];let En=null;function j(n=!1){_o.push(En=n?null:[])}function Xd(){_o.pop(),En=_o[_o.length-1]||null}let Jo=1;function Mi(n){Jo+=n}function wc(n){return n.dynamicChildren=Jo>0?En||Kt:null,Xd(),Jo>0&&En&&En.push(n),n}function $(n,t,o,r,a,i){return wc(e(n,t,o,r,a,i,!0))}function L(n,t,o,r,a){return wc(U(n,t,o,r,a,!0))}function oo(n){return n?n.__v_isVNode===!0:!1}function fo(n,t){return n.type===t.type&&n.key===t.key}const Zs="__vInternal",Nc=({key:n})=>n!=null?n:null,vs=({ref:n,ref_key:t,ref_for:o})=>n!=null?Oe(n)||Be(n)||ce(n)?{i:nn,r:n,k:t,f:!!o}:n:null;function e(n,t=null,o=null,r=0,a=null,i=n===_e?0:1,l=!1,p=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Nc(t),ref:t&&vs(t),scopeId:Ks,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return p?(Va(c,o),i&128&&n.normalize(c)):o&&(c.shapeFlag|=Oe(o)?8:16),Jo>0&&!l&&En&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&En.push(c),c}const U=ey;function ey(n,t=null,o=null,r=0,a=null,i=!1){if((!n||n===xd)&&(n=mt),oo(n)){const p=St(n,t,!0);return o&&Va(p,o),Jo>0&&!i&&En&&(p.shapeFlag&6?En[En.indexOf(n)]=p:En.push(p)),p.patchFlag|=-2,p}if(iy(n)&&(n=n.__vccOpts),t){t=ne(t);let{class:p,style:c}=t;p&&!Oe(p)&&(t.class=We(p)),Ue(c)&&(Kp(c)&&!ae(c)&&(c=ln({},c)),t.style=$e(c))}const l=Oe(n)?1:sc(n)?128:zd(n)?64:Ue(n)?4:ce(n)?2:0;return e(n,t,o,r,a,l,i,!0)}function ne(n){return n?Kp(n)||Zs in n?ln({},n):n:null}function St(n,t,o=!1){const{props:r,ref:a,patchFlag:i,children:l}=n,p=t?Ne(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:p,key:p&&Nc(p),ref:t&&t.ref?o&&a?ae(a)?a.concat(vs(t)):[a,vs(t)]:vs(t):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==_e?i===-1?16:i|16:i,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&St(n.ssContent),ssFallback:n.ssFallback&&St(n.ssFallback),el:n.el,anchor:n.anchor}}function s(n=" ",t=0){return U(Ja,null,n,t)}function de(n="",t=!1){return t?(j(),L(mt,null,n)):U(mt,null,n)}function Mn(n){return n==null||typeof n=="boolean"?U(mt):ae(n)?U(_e,null,n.slice()):typeof n=="object"?ot(n):U(Ja,null,String(n))}function ot(n){return n.el===null||n.memo?n:St(n)}function Va(n,t){let o=0;const{shapeFlag:r}=n;if(t==null)t=null;else if(ae(t))o=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Va(n,a()),a._c&&(a._d=!0));return}else{o=32;const a=t._;!a&&!(Zs in t)?t._ctx=nn:a===3&&nn&&(nn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else ce(t)?(t={default:t,_ctx:nn},o=32):(t=String(t),r&64?(o=16,t=[s(t)]):o=8);n.children=t,n.shapeFlag|=o}function Ne(...n){const t={};for(let o=0;o<n.length;o++){const r=n[o];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=We([t.class,r.class]));else if(a==="style")t.style=$e([t.style,r.style]);else if(Os(a)){const i=t[a],l=r[a];l&&i!==l&&!(ae(i)&&i.includes(l))&&(t[a]=i?[].concat(i,l):l)}else a!==""&&(t[a]=r[a])}return t}function jn(n,t,o,r=null){kn(n,t,7,[o,r])}const ny=Ac();let ty=0;function oy(n,t,o){const r=n.type,a=(t?t.appContext:n.appContext)||ny,i={uid:ty++,vnode:n,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mc(r,a),emitsOptions:oc(r,a),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=md.bind(null,i),n.ce&&n.ce(i),i}let ze=null;const Xn=()=>ze||nn,so=n=>{ze=n,n.scope.on()},kt=()=>{ze&&ze.scope.off(),ze=null};function jc(n){return n.vnode.shapeFlag&4}let Vo=!1;function sy(n,t=!1){Vo=t;const{props:o,children:r}=n.vnode,a=jc(n);Md(n,o,a,t),$d(n,r);const i=a?ry(n,t):void 0;return Vo=!1,i}function ry(n,t){const o=n.type;n.accessCache=Object.create(null),n.proxy=Ls(new Proxy(n.ctx,Fd));const{setup:r}=o;if(r){const a=n.setupContext=r.length>1?Ic(n):null;so(n),lo();const i=it(r,n,0,[n.props,a]);if(po(),kt(),kp(i)){if(i.then(kt,kt),t)return i.then(l=>{Oi(n,l,t)}).catch(l=>{qs(l,n,0)});n.asyncDep=i}else Oi(n,i,t)}else bc(n,t)}function Oi(n,t,o){ce(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Ue(t)&&(n.setupState=Qp(t)),bc(n,o)}let Pi;function bc(n,t,o){const r=n.type;if(!n.render){if(!t&&Pi&&!r.render){const a=r.template||Oa(n).template;if(a){const{isCustomElement:i,compilerOptions:l}=n.appContext.config,{delimiters:p,compilerOptions:c}=r,g=ln(ln({isCustomElement:i,delimiters:p},l),c);r.render=Pi(a,g)}}n.render=r.render||xn}so(n),lo(),Wd(n),po(),kt()}function ay(n){return new Proxy(n.attrs,{get(t,o){return Nn(n,"get","$attrs"),t[o]}})}function Ic(n){const t=r=>{n.exposed=r||{}};let o;return{get attrs(){return o||(o=ay(n))},slots:n.slots,emit:n.emit,expose:t}}function Xs(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Qp(Ls(n.exposed)),{get(t,o){if(o in t)return t[o];if(o in _s)return _s[o](n)}}))}function Vr(n,t=!0){return ce(n)?n.displayName||n.name:n.name||t&&n.__name}function iy(n){return ce(n)&&"__vccOpts"in n}const _=(n,t)=>pd(n,t,Vo);function ly(){return py().slots}function py(){const n=Xn();return n.setupContext||(n.setupContext=Ic(n))}function vn(n,t,o){const r=arguments.length;return r===2?Ue(t)&&!ae(t)?oo(t)?U(n,null,[t]):U(n,t):U(n,null,t):(r>3?o=Array.prototype.slice.call(arguments,2):r===3&&oo(o)&&(o=[o]),U(n,t,o))}const cy="3.2.39",gy="http://www.w3.org/2000/svg",It=typeof document<"u"?document:null,$i=It&&It.createElement("template"),uy={insert:(n,t,o)=>{t.insertBefore(n,o||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,o,r)=>{const a=t?It.createElementNS(gy,n):It.createElement(n,o?{is:o}:void 0);return n==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:n=>It.createTextNode(n),createComment:n=>It.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>It.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},cloneNode(n){const t=n.cloneNode(!0);return"_value"in n&&(t._value=n._value),t},insertStaticContent(n,t,o,r,a,i){const l=o?o.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),o),!(a===i||!(a=a.nextSibling)););else{$i.innerHTML=r?`<svg>${n}</svg>`:n;const p=$i.content;if(r){const c=p.firstChild;for(;c.firstChild;)p.appendChild(c.firstChild);p.removeChild(c)}t.insertBefore(p,o)}return[l?l.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}};function dy(n,t,o){const r=n._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?n.removeAttribute("class"):o?n.setAttribute("class",t):n.className=t}function yy(n,t,o){const r=n.style,a=Oe(o);if(o&&!a){for(const i in o)Lr(r,i,o[i]);if(t&&!Oe(t))for(const i in t)o[i]==null&&Lr(r,i,"")}else{const i=r.display;a?t!==o&&(r.cssText=o):t&&n.removeAttribute("style"),"_vod"in n&&(r.display=i)}}const Ji=/\s*!important$/;function Lr(n,t,o){if(ae(o))o.forEach(r=>Lr(n,t,r));else if(o==null&&(o=""),t.startsWith("--"))n.setProperty(t,o);else{const r=my(n,t);Ji.test(o)?n.setProperty(Gt(r),o.replace(Ji,""),"important"):n[r]=o}}const Vi=["Webkit","Moz","ms"],gr={};function my(n,t){const o=gr[t];if(o)return o;let r=Vn(t);if(r!=="filter"&&r in n)return gr[t]=r;r=Js(r);for(let a=0;a<Vi.length;a++){const i=Vi[a]+r;if(i in n)return gr[t]=i}return t}const Li="http://www.w3.org/1999/xlink";function fy(n,t,o,r,a){if(r&&t.startsWith("xlink:"))o==null?n.removeAttributeNS(Li,t.slice(6,t.length)):n.setAttributeNS(Li,t,o);else{const i=mu(t);o==null||i&&!Ep(o)?n.removeAttribute(t):n.setAttribute(t,i?"":o)}}function hy(n,t,o,r,a,i,l){if(t==="innerHTML"||t==="textContent"){r&&l(r,a,i),n[t]=o==null?"":o;return}if(t==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=o;const c=o==null?"":o;(n.value!==c||n.tagName==="OPTION")&&(n.value=c),o==null&&n.removeAttribute(t);return}let p=!1;if(o===""||o==null){const c=typeof n[t];c==="boolean"?o=Ep(o):o==null&&c==="string"?(o="",p=!0):c==="number"&&(o=0,p=!0)}try{n[t]=o}catch{}p&&n.removeAttribute(t)}const[Bc,vy]=(()=>{let n=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const o=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(o&&Number(o[1])<=53)}return[n,t]})();let qr=0;const Ay=Promise.resolve(),wy=()=>{qr=0},Ny=()=>qr||(Ay.then(wy),qr=Bc());function Jt(n,t,o,r){n.addEventListener(t,o,r)}function jy(n,t,o,r){n.removeEventListener(t,o,r)}function by(n,t,o,r,a=null){const i=n._vei||(n._vei={}),l=i[t];if(r&&l)l.value=r;else{const[p,c]=Iy(t);if(r){const g=i[t]=By(r,a);Jt(n,p,g,c)}else l&&(jy(n,p,l,c),i[t]=void 0)}}const qi=/(?:Once|Passive|Capture)$/;function Iy(n){let t;if(qi.test(n)){t={};let r;for(;r=n.match(qi);)n=n.slice(0,n.length-r[0].length),t[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Gt(n.slice(2)),t]}function By(n,t){const o=r=>{const a=r.timeStamp||Bc();(vy||a>=o.attached-1)&&kn(Dy(r,o.value),t,5,[r])};return o.value=n,o.attached=Ny(),o}function Dy(n,t){if(ae(t)){const o=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{o.call(n),n._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Hi=/^on[a-z]/,_y=(n,t,o,r,a=!1,i,l,p,c)=>{t==="class"?dy(n,r,a):t==="style"?yy(n,o,r):Os(t)?ja(t)||by(n,t,o,r,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ry(n,t,r,a))?hy(n,t,r,i,l,p,c):(t==="true-value"?n._trueValue=r:t==="false-value"&&(n._falseValue=r),fy(n,t,r,a))};function Ry(n,t,o,r){return r?!!(t==="innerHTML"||t==="textContent"||t in n&&Hi.test(t)&&ce(o)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||Hi.test(t)&&Oe(o)?!1:t in n}const Ki=n=>{const t=n.props["onUpdate:modelValue"]||!1;return ae(t)?o=>Qt(t,o):t};function Ey(n){n.target.composing=!0}function zi(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Cy={created(n,{modifiers:{lazy:t,trim:o,number:r}},a){n._assign=Ki(a);const i=r||a.props&&a.props.type==="number";Jt(n,t?"change":"input",l=>{if(l.target.composing)return;let p=n.value;o&&(p=p.trim()),i&&(p=kr(p)),n._assign(p)}),o&&Jt(n,"change",()=>{n.value=n.value.trim()}),t||(Jt(n,"compositionstart",Ey),Jt(n,"compositionend",zi),Jt(n,"change",zi))},mounted(n,{value:t}){n.value=t==null?"":t},beforeUpdate(n,{value:t,modifiers:{lazy:o,trim:r,number:a}},i){if(n._assign=Ki(i),n.composing||document.activeElement===n&&n.type!=="range"&&(o||r&&n.value.trim()===t||(a||n.type==="number")&&kr(n.value)===t))return;const l=t==null?"":t;n.value!==l&&(n.value=l)}},xy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Qi=(n,t)=>o=>{if(!("key"in o))return;const r=Gt(o.key);if(t.some(a=>a===r||xy[a]===r))return n(o)},Dc={beforeMount(n,{value:t},{transition:o}){n._vod=n.style.display==="none"?"":n.style.display,o&&t?o.beforeEnter(n):ho(n,t)},mounted(n,{value:t},{transition:o}){o&&t&&o.enter(n)},updated(n,{value:t,oldValue:o},{transition:r}){!t!=!o&&(r?t?(r.beforeEnter(n),ho(n,!0),r.enter(n)):r.leave(n,()=>{ho(n,!1)}):ho(n,t))},beforeUnmount(n,{value:t}){ho(n,t)}};function ho(n,t){n.style.display=t?n._vod:"none"}const ky=ln({patchProp:_y},uy);let Yi;function Fy(){return Yi||(Yi=qd(ky))}const Wy=(...n)=>{const t=Fy().createApp(...n),{mount:o}=t;return t.mount=r=>{const a=Sy(r);if(!a)return;const i=t._component;!ce(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const l=o(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),l},t};function Sy(n){return Oe(n)?document.querySelector(n):n}var _c="usehead",Zi="head:count",ur="data-head-attrs",Rc="data-meta-body",Gy=(n,t,o)=>{const r=o.createElement(n);for(const a of Object.keys(t))if(a==="body"&&t.body===!0)r.setAttribute(Rc,"true");else{let i=t[a];if(a==="renderPriority"||a==="key"||i===!1)continue;a==="children"?r.textContent=i:r.setAttribute(a,i)}return r};function Xi(n,t){if(n instanceof HTMLElement&&t instanceof HTMLElement){const o=t.getAttribute("nonce");if(o&&!n.getAttribute("nonce")){const r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=o,o===n.nonce&&n.isEqualNode(r)}}return n.isEqualNode(t)}var Ty=n=>{if(!["meta","base","script","link"].includes(n.tag))return!1;const{props:t,tag:o}=n;if(o==="base")return!0;if(o==="link"&&t.rel==="canonical")return{propValue:"canonical"};if(t.charset)return{propKey:"charset"};const r=["key","id","name","property","http-equiv"];for(const a of r){let i;if(typeof t.getAttribute=="function"&&t.hasAttribute(a)?i=t.getAttribute(a):i=t[a],i!==void 0)return{propValue:a}}return!1},Uy=()=>{const n=F(_c);if(!n)throw new Error("You may forget to apply app.use(head)");return n},My=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Oy=(n,t)=>n==null?"":typeof n=="string"?n.replace("%s",t!=null?t:""):n(N(t)),Py=n=>{const t=[],o=Object.keys(n);for(const r of o)if(n[r]!=null)switch(r){case"title":t.push({tag:r,props:{children:n[r]}});break;case"titleTemplate":break;case"base":t.push({tag:r,props:{key:"default",...n[r]}});break;default:if(My.includes(r)){const a=n[r];Array.isArray(a)?a.forEach(i=>{t.push({tag:r,props:N(i)})}):a&&t.push({tag:r,props:a})}break}return t},el=(n,t)=>{const o=n.getAttribute(ur);if(o)for(const a of o.split(","))a in t||n.removeAttribute(a);const r=[];for(const a in t){const i=t[a];i!=null&&(i===!1?n.removeAttribute(a):n.setAttribute(a,i),r.push(a))}r.length?n.setAttribute(ur,r.join(",")):n.removeAttribute(ur)},$y=(n=window.document,t,o)=>{var r,a;const i=n.head,l=n.body;let p=i.querySelector(`meta[name="${Zi}"]`),c=l.querySelectorAll(`[${Rc}]`);const g=p?Number(p.getAttribute("content")):0,u=[],d=[];if(c)for(let m=0;m<c.length;m++)c[m]&&((r=c[m].tagName)==null?void 0:r.toLowerCase())===t&&d.push(c[m]);if(p)for(let m=0,f=p.previousElementSibling;m<g;m++,f=(f==null?void 0:f.previousElementSibling)||null)((a=f==null?void 0:f.tagName)==null?void 0:a.toLowerCase())===t&&u.push(f);else p=n.createElement("meta"),p.setAttribute("name",Zi),p.setAttribute("content","0"),i.append(p);let y=o.map(m=>{var f;return{element:Gy(m.tag,m.props,n),body:(f=m.props.body)!=null?f:!1}});y=y.filter(m=>{for(let f=0;f<u.length;f++){const w=u[f];if(Xi(w,m.element))return u.splice(f,1),!1}for(let f=0;f<d.length;f++){const w=d[f];if(Xi(w,m.element))return d.splice(f,1),!1}return!0}),d.forEach(m=>{var f;return(f=m.parentNode)==null?void 0:f.removeChild(m)}),u.forEach(m=>{var f;return(f=m.parentNode)==null?void 0:f.removeChild(m)}),y.forEach(m=>{m.body===!0?l.insertAdjacentElement("beforeend",m.element):i.insertBefore(m.element,p)}),p.setAttribute("content",""+(g-u.length+y.filter(m=>!m.body).length))},Jy=n=>{let t=[],o=new Set;n&&t.push(Wn(n));const r={install(a){a.config.globalProperties.$head=r,a.provide(_c,r)},get headTags(){const a=[],i=t.map(l=>N(l).titleTemplate).reverse().find(l=>l!=null);return t.forEach(l=>{Py(N(l)).forEach(c=>{const g=Ty(c);if(g){let u=-1;for(let d=0;d<a.length;d++){const y=a[d];if(y.tag===c.tag&&((g===!0||g.propValue&&N(y.props[g.propValue])===N(c.props[g.propValue])||g.propKey&&y.props[g.propKey]&&c.props[g.propKey])&&(u=d),u!==-1))break}u!==-1&&a.splice(u,1)}i&&c.tag==="title"&&(c.props.children=Oy(i,c.props.children)),a.push(c)})}),a},addHeadObjs(a){t.push(a)},removeHeadObjs(a){t=t.filter(i=>i!==a)},updateDOM(a=window.document){let i,l={},p={};const c={};for(const u of r.headTags.sort(qy)){if(u.tag==="title"){i=u.props.children;continue}if(u.tag==="htmlAttrs"){Object.assign(l,u.props);continue}if(u.tag==="bodyAttrs"){Object.assign(p,u.props);continue}c[u.tag]=c[u.tag]||[],c[u.tag].push(u)}i!==void 0&&(a.title=i),el(a.documentElement,l),el(a.body,p);const g=new Set([...Object.keys(c),...o]);for(const u of g)$y(a,u,c[u]||[]);o.clear(),Object.keys(c).forEach(u=>o.add(u))}};return r},Vy=typeof window<"u",Ly=n=>{const t=Uy(),o=q(n);t.addHeadObjs(o),Vy&&(Xo(()=>{t.updateDOM()}),Qs(()=>{t.removeHeadObjs(o),t.updateDOM()}))},qy=(n,t)=>{const o=r=>{if(r.props.renderPriority)return r.props.renderPriority;switch(r.tag){case"base":return-1;case"meta":return r.props.charset?-2:r.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return o(n)-o(t)};const Ro=Symbol("v-click-clicks"),Bt=Symbol("v-click-clicks-elements"),Hr=Symbol("v-click-clicks-order-map"),Eo=Symbol("v-click-clicks-disabled"),Ec=Symbol("slidev-slide-scale"),O=Symbol("slidev-slidev-context"),Hy=Symbol("slidev-route"),Ky=Symbol("slidev-slide-context"),jt="slidev-vclick-target",dr="slidev-vclick-hidden",zy="slidev-vclick-fade",yr="slidev-vclick-hidden-explicitly",vo="slidev-vclick-current",ds="slidev-vclick-prior";function Kr(n,t){if(!n)return!1;const o=n.indexOf(t);return o>=0?(n.splice(o,1),!0):!1}function Qy(...n){let t,o,r;n.length===1?(t=0,r=1,[o]=n):[t,o,r=1]=n;const a=[];let i=t;for(;i<o;)a.push(i),i+=r||1;return a}function Yy(n){return n!=null}function Zy(n,t){return Object.fromEntries(Object.entries(n).map(([o,r])=>t(o,r)).filter(Yy))}const Rt={theme:"default",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"shiki",lineNumbers:!0,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:1280,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",class:"text-center",defaults:{layout:"default"},layout:"image",image:"/cover-baselone.png"},be=Rt;var _p;const lt=(_p=be.aspectRatio)!=null?_p:16/9;var Rp;const Ft=(Rp=be.canvasWidth)!=null?Rp:980,Cc=Math.round(Ft/lt),xc=_(()=>Zy(be.themeConfig||{},(n,t)=>[`--slidev-theme-${n}`,t]));function In(n,t,o){Object.defineProperty(n,t,{value:o,writable:!0,enumerable:!1})}const Tt=Se({page:0,clicks:0});let Xy=[],em=[];In(Tt,"$syncUp",!0);In(Tt,"$syncDown",!0);In(Tt,"$paused",!1);In(Tt,"$onSet",n=>Xy.push(n));In(Tt,"$onPatch",n=>em.push(n));In(Tt,"$patch",async()=>!1);function kc(n,t,o=!1){const r=[];let a=!1,i=!1,l,p;const c=Se(t);function g(m){r.push(m)}function u(m,f){clearTimeout(l),a=!0,c[m]=f,l=setTimeout(()=>a=!1,0)}function d(m){a||(clearTimeout(p),i=!0,Object.entries(m).forEach(([f,w])=>{c[f]=w}),p=setTimeout(()=>i=!1,0))}function y(m){let f;o?o&&window.addEventListener("storage",A=>{A&&A.key===m&&A.newValue&&d(JSON.parse(A.newValue))}):(f=new BroadcastChannel(m),f.addEventListener("message",A=>d(A.data)));function w(){!o&&f&&!i?f.postMessage(Ie(c)):o&&!i&&window.localStorage.setItem(m,JSON.stringify(c)),a||r.forEach(A=>A(c))}if(ye(c,w,{deep:!0}),o){const A=window.localStorage.getItem(m);A&&d(JSON.parse(A))}}return{init:y,onPatch:g,patch:u,state:c}}const{init:nm,onPatch:tm,patch:nl,state:mr}=kc(Tt,{page:1,clicks:0}),Ut=Se({});let om=[],sm=[];In(Ut,"$syncUp",!0);In(Ut,"$syncDown",!0);In(Ut,"$paused",!1);In(Ut,"$onSet",n=>om.push(n));In(Ut,"$onPatch",n=>sm.push(n));In(Ut,"$patch",async()=>!1);const{init:rm,onPatch:am,patch:Fc,state:Es}=kc(Ut,{},!1),im="modulepreload",lm=function(n){return"/major-migrations-made-easy-slides/"+n},tl={},co=function(t,o,r){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=lm(a),a in tl)return;tl[a]=!0;const i=a.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const p=document.createElement("link");if(p.rel=i?"stylesheet":im,i||(p.as="script",p.crossOrigin=""),p.href=a,document.head.appendChild(p),i)return new Promise((c,g)=>{p.addEventListener("load",c),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())};var ol;const Sn=typeof window<"u",pm=n=>typeof n<"u",cm=Object.prototype.toString,Cs=n=>typeof n=="function",gm=n=>typeof n=="number",Wc=n=>typeof n=="string",zr=n=>cm.call(n)==="[object Object]",Qr=()=>+Date.now(),pt=()=>{};Sn&&((ol=window==null?void 0:window.navigator)==null?void 0:ol.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ke(n){return typeof n=="function"?n():N(n)}function um(n,t){function o(...r){n(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return o}const Sc=n=>n();function dm(n=Sc){const t=q(!0);function o(){t.value=!1}function r(){t.value=!0}return{isActive:t,pause:o,resume:r,eventFilter:(...i)=>{t.value&&n(...i)}}}function ym(n){return n}function mm(n,t){var o;if(typeof n=="number")return n+t;const r=((o=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:o[0])||"",a=n.slice(r.length),i=parseFloat(r)+t;return Number.isNaN(i)?n:i+a}function fm(n,t){let o,r,a;const i=q(!0),l=()=>{i.value=!0,a()};ye(n,l,{flush:"sync"});const p=Cs(t)?t:t.get,c=Cs(t)?void 0:t.set,g=Yp((u,d)=>(r=u,a=d,{get(){return i.value&&(o=p(),i.value=!1),r(),o},set(y){c==null||c(y)}}));return Object.isExtensible(g)&&(g.trigger=l),g}function Yn(n){return Gp()?(Tp(n),!0):!1}function hm(n){if(!Be(n))return Se(n);const t=new Proxy({},{get(o,r,a){return N(Reflect.get(n.value,r,a))},set(o,r,a){return Be(n.value[r])&&!Be(a)?n.value[r].value=a:n.value[r]=a,!0},deleteProperty(o,r){return Reflect.deleteProperty(n.value,r)},has(o,r){return Reflect.has(n.value,r)},ownKeys(){return Object.keys(n.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Se(t)}function vm(n){return typeof n=="function"?_(n):q(n)}var Am=Object.defineProperty,wm=Object.defineProperties,Nm=Object.getOwnPropertyDescriptors,sl=Object.getOwnPropertySymbols,jm=Object.prototype.hasOwnProperty,bm=Object.prototype.propertyIsEnumerable,rl=(n,t,o)=>t in n?Am(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,Im=(n,t)=>{for(var o in t||(t={}))jm.call(t,o)&&rl(n,o,t[o]);if(sl)for(var o of sl(t))bm.call(t,o)&&rl(n,o,t[o]);return n},Bm=(n,t)=>wm(n,Nm(t));function Dm(n){if(!Be(n))return rd(n);const t=Array.isArray(n.value)?new Array(n.value.length):{};for(const o in n.value)t[o]=Yp(()=>({get(){return n.value[o]},set(r){if(Array.isArray(n.value)){const a=[...n.value];a[o]=r,n.value=a}else{const a=Bm(Im({},n.value),{[o]:r});Object.setPrototypeOf(a,n.value),n.value=a}}}));return t}function _m(n,t=!0){Xn()?cc(n):t?n():en(n)}function La(n,t=!0){Xn()?yt(n):t?n():en(n)}function Gc(n){Xn()&&Ys(n)}function Rm(n,t=1e3,o={}){const{immediate:r=!0,immediateCallback:a=!1}=o;let i=null;const l=q(!1);function p(){i&&(clearInterval(i),i=null)}function c(){l.value=!1,p()}function g(){N(t)<=0||(l.value=!0,a&&n(),p(),i=setInterval(n,Ke(t)))}if(r&&Sn&&g(),Be(t)){const u=ye(t,()=>{l.value&&Sn&&g()});Yn(u)}return Yn(c),{isActive:l,pause:c,resume:g}}function Em(n,t,o={}){const{immediate:r=!0}=o,a=q(!1);let i=null;function l(){i&&(clearTimeout(i),i=null)}function p(){a.value=!1,l()}function c(...g){l(),a.value=!0,i=setTimeout(()=>{a.value=!1,i=null,n(...g)},Ke(t))}return r&&(a.value=!0,Sn&&c()),Yn(p),{isPending:a,start:c,stop:p}}function Tc(n=!1,t={}){const{truthyValue:o=!0,falsyValue:r=!1}=t,a=Be(n),i=q(n);function l(p){if(arguments.length)return i.value=p,i.value;{const c=Ke(o);return i.value=i.value===c?Ke(r):c,i.value}}return a?l:[i,l]}var al=Object.getOwnPropertySymbols,Cm=Object.prototype.hasOwnProperty,xm=Object.prototype.propertyIsEnumerable,km=(n,t)=>{var o={};for(var r in n)Cm.call(n,r)&&t.indexOf(r)<0&&(o[r]=n[r]);if(n!=null&&al)for(var r of al(n))t.indexOf(r)<0&&xm.call(n,r)&&(o[r]=n[r]);return o};function Fm(n,t,o={}){const r=o,{eventFilter:a=Sc}=r,i=km(r,["eventFilter"]);return ye(n,um(a,t),i)}var Wm=Object.defineProperty,Sm=Object.defineProperties,Gm=Object.getOwnPropertyDescriptors,xs=Object.getOwnPropertySymbols,Uc=Object.prototype.hasOwnProperty,Mc=Object.prototype.propertyIsEnumerable,il=(n,t,o)=>t in n?Wm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,Tm=(n,t)=>{for(var o in t||(t={}))Uc.call(t,o)&&il(n,o,t[o]);if(xs)for(var o of xs(t))Mc.call(t,o)&&il(n,o,t[o]);return n},Um=(n,t)=>Sm(n,Gm(t)),Mm=(n,t)=>{var o={};for(var r in n)Uc.call(n,r)&&t.indexOf(r)<0&&(o[r]=n[r]);if(n!=null&&xs)for(var r of xs(n))t.indexOf(r)<0&&Mc.call(n,r)&&(o[r]=n[r]);return o};function Om(n,t,o={}){const r=o,{eventFilter:a}=r,i=Mm(r,["eventFilter"]),{eventFilter:l,pause:p,resume:c,isActive:g}=dm(a);return{stop:Fm(n,t,Um(Tm({},i),{eventFilter:l})),pause:p,resume:c,isActive:g}}function Cn(n){var t;const o=Ke(n);return(t=o==null?void 0:o.$el)!=null?t:o}const on=Sn?window:void 0,Oc=Sn?window.document:void 0,Pm=Sn?window.navigator:void 0;function ge(...n){let t,o,r,a;if(Wc(n[0])?([o,r,a]=n,t=on):[t,o,r,a]=n,!t)return pt;let i=pt;const l=ye(()=>Cn(t),c=>{i(),c&&(c.addEventListener(o,r,a),i=()=>{c.removeEventListener(o,r,a),i=pt})},{immediate:!0,flush:"post"}),p=()=>{l(),i()};return Yn(p),p}function $m(n,t,o={}){const{window:r=on,ignore:a,capture:i=!0,detectIframe:l=!1}=o;if(!r)return;const p=q(!0);let c;const g=y=>{r.clearTimeout(c);const m=Cn(n),f=y.composedPath();!m||m===y.target||f.includes(m)||!p.value||a&&a.length>0&&a.some(w=>{const A=Cn(w);return A&&(y.target===A||f.includes(A))})||t(y)},u=[ge(r,"click",g,{passive:!0,capture:i}),ge(r,"pointerdown",y=>{const m=Cn(n);p.value=!!m&&!y.composedPath().includes(m)},{passive:!0}),ge(r,"pointerup",y=>{if(y.button===0){const m=y.composedPath();y.composedPath=()=>m,c=r.setTimeout(()=>g(y),50)}},{passive:!0}),l&&ge(r,"blur",y=>{var m;const f=Cn(n);((m=document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(f!=null&&f.contains(document.activeElement))&&t(y)})].filter(Boolean);return()=>u.forEach(y=>y())}const Jm=n=>typeof n=="function"?n:typeof n=="string"?t=>t.key===n:Array.isArray(n)?t=>n.includes(t.key):n?()=>!0:()=>!1;function Vm(n,t,o={}){const{target:r=on,eventName:a="keydown",passive:i=!1}=o,l=Jm(n);return ge(r,a,c=>{l(c)&&t(c)},i)}function Lm(n={}){const{window:t=on}=n,o=fm(()=>null,()=>t==null?void 0:t.document.activeElement);return t&&(ge(t,"blur",o.trigger,!0),ge(t,"focus",o.trigger,!0)),o}function ns(n,t=!1){const o=q(),r=()=>o.value=Boolean(n());return r(),La(r,t),o}function Vt(n,t={}){const{window:o=on}=t,r=ns(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let a;const i=q(!1),l=()=>{!r.value||(a||(a=o.matchMedia(n)),i.value=a.matches)};return _m(()=>{l(),a&&("addEventListener"in a?a.addEventListener("change",l):a.addListener(l),Yn(()=>{"removeEventListener"in a?a.removeEventListener("change",l):a.removeListener(l)}))}),i}const qm={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Hm=Object.defineProperty,ll=Object.getOwnPropertySymbols,Km=Object.prototype.hasOwnProperty,zm=Object.prototype.propertyIsEnumerable,pl=(n,t,o)=>t in n?Hm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,Qm=(n,t)=>{for(var o in t||(t={}))Km.call(t,o)&&pl(n,o,t[o]);if(ll)for(var o of ll(t))zm.call(t,o)&&pl(n,o,t[o]);return n};function Ym(n,t={}){function o(p,c){let g=n[p];return c!=null&&(g=mm(g,c)),typeof g=="number"&&(g=`${g}px`),g}const{window:r=on}=t;function a(p){return r?r.matchMedia(p).matches:!1}const i=p=>Vt(`(min-width: ${o(p)})`,t),l=Object.keys(n).reduce((p,c)=>(Object.defineProperty(p,c,{get:()=>i(c),enumerable:!0,configurable:!0}),p),{});return Qm({greater(p){return Vt(`(min-width: ${o(p,.1)})`,t)},greaterOrEqual:i,smaller(p){return Vt(`(max-width: ${o(p,-.1)})`,t)},smallerOrEqual(p){return Vt(`(max-width: ${o(p)})`,t)},between(p,c){return Vt(`(min-width: ${o(p)}) and (max-width: ${o(c,-.1)})`,t)},isGreater(p){return a(`(min-width: ${o(p,.1)})`)},isGreaterOrEqual(p){return a(`(min-width: ${o(p)})`)},isSmaller(p){return a(`(max-width: ${o(p,-.1)})`)},isSmallerOrEqual(p){return a(`(max-width: ${o(p)})`)},isInBetween(p,c){return a(`(min-width: ${o(p)}) and (max-width: ${o(c,-.1)})`)}},l)}function Zm(n={}){const{navigator:t=Pm,read:o=!1,source:r,copiedDuring:a=1500}=n,i=["copy","cut"],l=ns(()=>t&&"clipboard"in t),p=q(""),c=q(!1),g=Em(()=>c.value=!1,a);function u(){t.clipboard.readText().then(y=>{p.value=y})}if(l.value&&o)for(const y of i)ge(y,u);async function d(y=Ke(r)){l.value&&y!=null&&(await t.clipboard.writeText(y),p.value=y,c.value=!0,g.start())}return{isSupported:l,text:p,copied:c,copy:d}}function Xm(n){return JSON.parse(JSON.stringify(n))}const Yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zr="__vueuse_ssr_handlers__";Yr[Zr]=Yr[Zr]||{};const e8=Yr[Zr];function n8(n,t){return e8[n]||t}function t8(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"||Array.isArray(n)?"object":Number.isNaN(n)?"any":"number"}var o8=Object.defineProperty,cl=Object.getOwnPropertySymbols,s8=Object.prototype.hasOwnProperty,r8=Object.prototype.propertyIsEnumerable,gl=(n,t,o)=>t in n?o8(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,ul=(n,t)=>{for(var o in t||(t={}))s8.call(t,o)&&gl(n,o,t[o]);if(cl)for(var o of cl(t))r8.call(t,o)&&gl(n,o,t[o]);return n};const a8={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}};function Tn(n,t,o,r={}){var a;const{flush:i="pre",deep:l=!0,listenToStorageChanges:p=!0,writeDefaults:c=!0,mergeDefaults:g=!1,shallow:u,window:d=on,eventFilter:y,onError:m=k=>{console.error(k)}}=r,f=(u?Wn:q)(t);if(!o)try{o=n8("getDefaultStorage",()=>{var k;return(k=on)==null?void 0:k.localStorage})()}catch(k){m(k)}if(!o)return f;const w=Ke(t),A=t8(w),D=(a=r.serializer)!=null?a:a8[A],{pause:b,resume:I}=Om(f,()=>R(f.value),{flush:i,deep:l,eventFilter:y});return d&&p&&ge(d,"storage",T),T(),f;function R(k){try{k==null?o.removeItem(n):o.setItem(n,D.write(k))}catch(z){m(z)}}function G(k){if(!(k&&k.key!==n)){b();try{const z=k?k.newValue:o.getItem(n);if(z==null)return c&&w!==null&&o.setItem(n,D.write(w)),w;if(!k&&g){const se=D.read(z);return Cs(g)?g(se,w):A==="object"&&!Array.isArray(se)?ul(ul({},w),se):se}else return typeof z!="string"?z:D.read(z)}catch(z){m(z)}finally{I()}}}function T(k){k&&k.key!==n||(f.value=G(k))}}function i8(n){return Vt("(prefers-color-scheme: dark)",n)}var l8=Object.defineProperty,p8=Object.defineProperties,c8=Object.getOwnPropertyDescriptors,dl=Object.getOwnPropertySymbols,g8=Object.prototype.hasOwnProperty,u8=Object.prototype.propertyIsEnumerable,yl=(n,t,o)=>t in n?l8(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,d8=(n,t)=>{for(var o in t||(t={}))g8.call(t,o)&&yl(n,o,t[o]);if(dl)for(var o of dl(t))u8.call(t,o)&&yl(n,o,t[o]);return n},y8=(n,t)=>p8(n,c8(t));function ID(n,t={}){var o,r,a;const i=(o=t.draggingElement)!=null?o:on,l=(r=t.handle)!=null?r:n,p=q((a=Ke(t.initialValue))!=null?a:{x:0,y:0}),c=q(),g=f=>t.pointerTypes?t.pointerTypes.includes(f.pointerType):!0,u=f=>{Ke(t.preventDefault)&&f.preventDefault(),Ke(t.stopPropagation)&&f.stopPropagation()},d=f=>{var w;if(!g(f)||Ke(t.exact)&&f.target!==Ke(n))return;const A=Ke(n).getBoundingClientRect(),D={x:f.pageX-A.left,y:f.pageY-A.top};((w=t.onStart)==null?void 0:w.call(t,D,f))!==!1&&(c.value=D,u(f))},y=f=>{var w;!g(f)||!c.value||(p.value={x:f.pageX-c.value.x,y:f.pageY-c.value.y},(w=t.onMove)==null||w.call(t,p.value,f),u(f))},m=f=>{var w;!g(f)||!c.value||(c.value=void 0,(w=t.onEnd)==null||w.call(t,p.value,f),u(f))};return Sn&&(ge(l,"pointerdown",d,!0),ge(i,"pointermove",y,!0),ge(i,"pointerup",m,!0)),y8(d8({},Dm(p)),{position:p,isDragging:_(()=>!!c.value),style:_(()=>`left:${p.value.x}px;top:${p.value.y}px;`)})}var ml=Object.getOwnPropertySymbols,m8=Object.prototype.hasOwnProperty,f8=Object.prototype.propertyIsEnumerable,h8=(n,t)=>{var o={};for(var r in n)m8.call(n,r)&&t.indexOf(r)<0&&(o[r]=n[r]);if(n!=null&&ml)for(var r of ml(n))t.indexOf(r)<0&&f8.call(n,r)&&(o[r]=n[r]);return o};function v8(n,t,o={}){const r=o,{window:a=on}=r,i=h8(r,["window"]);let l;const p=ns(()=>a&&"ResizeObserver"in a),c=()=>{l&&(l.disconnect(),l=void 0)},g=ye(()=>Cn(n),d=>{c(),p.value&&a&&d&&(l=new ResizeObserver(t),l.observe(d,i))},{immediate:!0,flush:"post"}),u=()=>{c(),g()};return Yn(u),{isSupported:p,stop:u}}function A8(n,t={}){const{immediate:o=!0,window:r=on}=t,a=q(!1);let i=null;function l(){!a.value||!r||(n(),i=r.requestAnimationFrame(l))}function p(){!a.value&&r&&(a.value=!0,l())}function c(){a.value=!1,i!=null&&r&&(r.cancelAnimationFrame(i),i=null)}return o&&p(),Yn(c),{isActive:a,pause:c,resume:p}}function w8(n,t={width:0,height:0},o={}){const{box:r="content-box"}=o,a=q(t.width),i=q(t.height);return v8(n,([l])=>{const p=r==="border-box"?l.borderBoxSize:r==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;p?(a.value=p.reduce((c,{inlineSize:g})=>c+g,0),i.value=p.reduce((c,{blockSize:g})=>c+g,0)):(a.value=l.contentRect.width,i.value=l.contentRect.height)},o),ye(()=>Cn(n),l=>{a.value=l?t.width:0,i.value=l?t.height:0}),{width:a,height:i}}const fl=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function N8(n,t={}){const{document:o=Oc,autoExit:r=!1}=t,a=n||(o==null?void 0:o.querySelector("html")),i=q(!1);let l=fl[0];const p=ns(()=>{if(o){for(const w of fl)if(w[1]in o)return l=w,!0}else return!1;return!1}),[c,g,u,,d]=l;async function y(){!p.value||(o!=null&&o[u]&&await o[g](),i.value=!1)}async function m(){if(!p.value)return;await y();const w=Cn(a);w&&(await w[c](),i.value=!0)}async function f(){i.value?await y():await m()}return o&&ge(o,d,()=>{i.value=!!(o!=null&&o[u])},!1),r&&Yn(y),{isSupported:p,isFullscreen:i,enter:m,exit:y,toggle:f}}function j8(n,t,o={}){const{root:r,rootMargin:a="0px",threshold:i=.1,window:l=on}=o,p=ns(()=>l&&"IntersectionObserver"in l);let c=pt;const g=p.value?ye(()=>({el:Cn(n),root:Cn(r)}),({el:d,root:y})=>{if(c(),!d)return;const m=new IntersectionObserver(t,{root:y,rootMargin:a,threshold:i});m.observe(d),c=()=>{m.disconnect(),c=pt}},{immediate:!0,flush:"post"}):pt,u=()=>{c(),g()};return Yn(u),{isSupported:p,stop:u}}const b8={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function I8(n={}){const{reactive:t=!1,target:o=on,aliasMap:r=b8,passive:a=!0,onEventFired:i=pt}=n,l=Se(new Set),p={toJSON(){return{}},current:l},c=t?Se(p):p,g=new Set,u=new Set;function d(w,A){w in c&&(t?c[w]=A:c[w].value=A)}function y(){for(const w of u)d(w,!1)}function m(w,A){var D,b;const I=(D=w.key)==null?void 0:D.toLowerCase(),G=[(b=w.code)==null?void 0:b.toLowerCase(),I].filter(Boolean);I&&(A?l.add(I):l.delete(I));for(const T of G)u.add(T),d(T,A);I==="meta"&&!A?(g.forEach(T=>{l.delete(T),d(T,!1)}),g.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&A&&[...l,...G].forEach(T=>g.add(T))}ge(o,"keydown",w=>(m(w,!0),i(w)),{passive:a}),ge(o,"keyup",w=>(m(w,!1),i(w)),{passive:a}),ge("blur",y,{passive:!0}),ge("focus",y,{passive:!0});const f=new Proxy(c,{get(w,A,D){if(typeof A!="string")return Reflect.get(w,A,D);if(A=A.toLowerCase(),A in r&&(A=r[A]),!(A in c))if(/[+_-]/.test(A)){const I=A.split(/[+_-]/g).map(R=>R.trim());c[A]=_(()=>I.every(R=>N(f[R])))}else c[A]=q(!1);const b=Reflect.get(w,A,D);return t?N(b):b}});return f}function BD(n={}){const{type:t="page",touch:o=!0,resetOnTouchEnds:r=!1,initialValue:a={x:0,y:0},window:i=on,eventFilter:l}=n,p=q(a.x),c=q(a.y),g=q(null),u=w=>{t==="page"?(p.value=w.pageX,c.value=w.pageY):t==="client"&&(p.value=w.clientX,c.value=w.clientY),g.value="mouse"},d=()=>{p.value=a.x,c.value=a.y},y=w=>{if(w.touches.length>0){const A=w.touches[0];t==="page"?(p.value=A.pageX,c.value=A.pageY):t==="client"&&(p.value=A.clientX,c.value=A.clientY),g.value="touch"}},m=w=>l===void 0?u(w):l(()=>u(w),{}),f=w=>l===void 0?y(w):l(()=>y(w),{});return i&&(ge(i,"mousemove",m,{passive:!0}),ge(i,"dragover",m,{passive:!0}),o&&(ge(i,"touchstart",f,{passive:!0}),ge(i,"touchmove",f,{passive:!0}),r&&ge(i,"touchend",d,{passive:!0}))),{x:p,y:c,sourceType:g}}var zn;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(zn||(zn={}));function B8(n,t={}){const o=vm(n),{threshold:r=50,onSwipe:a,onSwipeEnd:i,onSwipeStart:l}=t,p=Se({x:0,y:0}),c=(T,k)=>{p.x=T,p.y=k},g=Se({x:0,y:0}),u=(T,k)=>{g.x=T,g.y=k},d=_(()=>p.x-g.x),y=_(()=>p.y-g.y),{max:m,abs:f}=Math,w=_(()=>m(f(d.value),f(y.value))>=r),A=q(!1),D=q(!1),b=_(()=>w.value?f(d.value)>f(y.value)?d.value>0?zn.LEFT:zn.RIGHT:y.value>0?zn.UP:zn.DOWN:zn.NONE),I=T=>t.pointerTypes?t.pointerTypes.includes(T.pointerType):!0,R=[ge(n,"pointerdown",T=>{var k,z;if(!I(T))return;D.value=!0,(z=(k=o.value)==null?void 0:k.style)==null||z.setProperty("touch-action","none");const se=T.target;se==null||se.setPointerCapture(T.pointerId);const{clientX:he,clientY:Ae}=T;c(he,Ae),u(he,Ae),l==null||l(T)}),ge(n,"pointermove",T=>{if(!I(T)||!D.value)return;const{clientX:k,clientY:z}=T;u(k,z),!A.value&&w.value&&(A.value=!0),A.value&&(a==null||a(T))}),ge(n,"pointerup",T=>{var k,z;!I(T)||(A.value&&(i==null||i(T,b.value)),D.value=!1,A.value=!1,(z=(k=o.value)==null?void 0:k.style)==null||z.setProperty("touch-action","initial"))})],G=()=>R.forEach(T=>T());return{isSwiping:qt(A),direction:qt(b),posStart:qt(p),posEnd:qt(g),distanceX:d,distanceY:y,stop:G}}function D8(n,t=pt,o={}){const{immediate:r=!0,manual:a=!1,type:i="text/javascript",async:l=!0,crossOrigin:p,referrerPolicy:c,noModule:g,defer:u,document:d=Oc,attrs:y={}}=o,m=q(null);let f=null;const w=b=>new Promise((I,R)=>{const G=z=>(m.value=z,I(z),z);if(!d){I(!1);return}let T=!1,k=d.querySelector(`script[src="${Ke(n)}"]`);k?k.hasAttribute("data-loaded")&&G(k):(k=d.createElement("script"),k.type=i,k.async=l,k.src=Ke(n),u&&(k.defer=u),p&&(k.crossOrigin=p),g&&(k.noModule=g),c&&(k.referrerPolicy=c),Object.entries(y).forEach(([z,se])=>k==null?void 0:k.setAttribute(z,se)),T=!0),k.addEventListener("error",z=>R(z)),k.addEventListener("abort",z=>R(z)),k.addEventListener("load",()=>{k.setAttribute("data-loaded","true"),t(k),G(k)}),T&&(k=d.head.appendChild(k)),b||G(k)}),A=(b=!0)=>(f||(f=w(b)),f),D=()=>{if(!d)return;f=null,m.value&&(m.value=null);const b=d.querySelector(`script[src="${Ke(n)}"]`);b&&d.head.removeChild(b)};return r&&!a&&La(A),a||Gc(D),{scriptTag:m,load:A,unload:D}}var _8=Object.defineProperty,hl=Object.getOwnPropertySymbols,R8=Object.prototype.hasOwnProperty,E8=Object.prototype.propertyIsEnumerable,vl=(n,t,o)=>t in n?_8(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,C8=(n,t)=>{for(var o in t||(t={}))R8.call(t,o)&&vl(n,o,t[o]);if(hl)for(var o of hl(t))E8.call(t,o)&&vl(n,o,t[o]);return n};function DD(n={}){const{controls:t=!1,offset:o=0,immediate:r=!0,interval:a="requestAnimationFrame"}=n,i=q(Qr()+o),l=()=>i.value=Qr()+o,p=a==="requestAnimationFrame"?A8(l,{immediate:r}):Rm(l,a,{immediate:r});return t?C8({timestamp:i},p):i}var x8=Object.defineProperty,Al=Object.getOwnPropertySymbols,k8=Object.prototype.hasOwnProperty,F8=Object.prototype.propertyIsEnumerable,wl=(n,t,o)=>t in n?x8(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,W8=(n,t)=>{for(var o in t||(t={}))k8.call(t,o)&&wl(n,o,t[o]);if(Al)for(var o of Al(t))F8.call(t,o)&&wl(n,o,t[o]);return n};const S8={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};W8({linear:ym},S8);function $n(n,t,o,r={}){var a,i,l;const{clone:p=!1,passive:c=!1,eventName:g,deep:u=!1,defaultValue:d}=r,y=Xn(),m=o||(y==null?void 0:y.emit)||((a=y==null?void 0:y.$emit)==null?void 0:a.bind(y))||((l=(i=y==null?void 0:y.proxy)==null?void 0:i.$emit)==null?void 0:l.bind(y==null?void 0:y.proxy));let f=g;t||(t="modelValue"),f=g||f||`update:${t.toString()}`;const w=D=>p?Cs(p)?p(D):Xm(D):D,A=()=>pm(n[t])?w(n[t]):d;if(c){const D=A(),b=q(D);return ye(()=>n[t],I=>b.value=w(I)),ye(b,I=>{(I!==n[t]||u)&&m(f,I)},{deep:u}),b}else return _({get(){return A()},set(D){m(f,D)}})}function _D({window:n=on}={}){if(!n)return q(!1);const t=q(n.document.hasFocus());return ge(n,"blur",()=>{t.value=!1}),ge(n,"focus",()=>{t.value=!0}),t}function G8(n={}){const{window:t=on,initialWidth:o=1/0,initialHeight:r=1/0,listenOrientation:a=!0,includeScrollbar:i=!0}=n,l=q(o),p=q(r),c=()=>{t&&(i?(l.value=t.innerWidth,p.value=t.innerHeight):(l.value=t.document.documentElement.clientWidth,p.value=t.document.documentElement.clientHeight))};return c(),La(c),ge("resize",c,{passive:!0}),a&&ge("orientationchange",c,{passive:!0}),{width:l,height:p}}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Lt=typeof window<"u";function T8(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const De=Object.assign;function fr(n,t){const o={};for(const r in t){const a=t[r];o[r]=Gn(a)?a.map(n):n(a)}return o}const Co=()=>{},Gn=Array.isArray,U8=/\/$/,M8=n=>n.replace(U8,"");function hr(n,t,o="/"){let r,a={},i="",l="";const p=t.indexOf("#");let c=t.indexOf("?");return p<c&&p>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,p>-1?p:t.length),a=n(i)),p>-1&&(r=r||t.slice(0,p),l=t.slice(p,t.length)),r=J8(r!=null?r:t,o),{fullPath:r+(i&&"?")+i+l,path:r,query:a,hash:l}}function O8(n,t){const o=t.query?n(t.query):"";return t.path+(o&&"?")+o+(t.hash||"")}function Nl(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function P8(n,t,o){const r=t.matched.length-1,a=o.matched.length-1;return r>-1&&r===a&&ro(t.matched[r],o.matched[a])&&Pc(t.params,o.params)&&n(t.query)===n(o.query)&&t.hash===o.hash}function ro(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Pc(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const o in n)if(!$8(n[o],t[o]))return!1;return!0}function $8(n,t){return Gn(n)?jl(n,t):Gn(t)?jl(t,n):n===t}function jl(n,t){return Gn(t)?n.length===t.length&&n.every((o,r)=>o===t[r]):n.length===1&&n[0]===t}function J8(n,t){if(n.startsWith("/"))return n;if(!n)return t;const o=t.split("/"),r=n.split("/");let a=o.length-1,i,l;for(i=0;i<r.length;i++)if(l=r[i],l!==".")if(l==="..")a>1&&a--;else break;return o.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Lo;(function(n){n.pop="pop",n.push="push"})(Lo||(Lo={}));var xo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(xo||(xo={}));function V8(n){if(!n)if(Lt){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),M8(n)}const L8=/^[^#]+#/;function q8(n,t){return n.replace(L8,"#")+t}function H8(n,t){const o=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:t.behavior,left:r.left-o.left-(t.left||0),top:r.top-o.top-(t.top||0)}}const er=()=>({left:window.pageXOffset,top:window.pageYOffset});function K8(n){let t;if("el"in n){const o=n.el,r=typeof o=="string"&&o.startsWith("#"),a=typeof o=="string"?r?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!a)return;t=H8(a,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function bl(n,t){return(history.state?history.state.position-t:-1)+n}const Xr=new Map;function z8(n,t){Xr.set(n,t)}function Q8(n){const t=Xr.get(n);return Xr.delete(n),t}let Y8=()=>location.protocol+"//"+location.host;function $c(n,t){const{pathname:o,search:r,hash:a}=t,i=n.indexOf("#");if(i>-1){let p=a.includes(n.slice(i))?n.slice(i).length:1,c=a.slice(p);return c[0]!=="/"&&(c="/"+c),Nl(c,"")}return Nl(o,n)+r+a}function Z8(n,t,o,r){let a=[],i=[],l=null;const p=({state:y})=>{const m=$c(n,location),f=o.value,w=t.value;let A=0;if(y){if(o.value=m,t.value=y,l&&l===f){l=null;return}A=w?y.position-w.position:0}else r(m);a.forEach(D=>{D(o.value,f,{delta:A,type:Lo.pop,direction:A?A>0?xo.forward:xo.back:xo.unknown})})};function c(){l=o.value}function g(y){a.push(y);const m=()=>{const f=a.indexOf(y);f>-1&&a.splice(f,1)};return i.push(m),m}function u(){const{history:y}=window;!y.state||y.replaceState(De({},y.state,{scroll:er()}),"")}function d(){for(const y of i)y();i=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:g,destroy:d}}function Il(n,t,o,r=!1,a=!1){return{back:n,current:t,forward:o,replaced:r,position:window.history.length,scroll:a?er():null}}function X8(n){const{history:t,location:o}=window,r={value:$c(n,o)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,g,u){const d=n.indexOf("#"),y=d>-1?(o.host&&document.querySelector("base")?n:n.slice(d))+c:Y8()+n+c;try{t[u?"replaceState":"pushState"](g,"",y),a.value=g}catch(m){console.error(m),o[u?"replace":"assign"](y)}}function l(c,g){const u=De({},t.state,Il(a.value.back,c,a.value.forward,!0),g,{position:a.value.position});i(c,u,!0),r.value=c}function p(c,g){const u=De({},a.value,t.state,{forward:c,scroll:er()});i(u.current,u,!0);const d=De({},Il(r.value,c,null),{position:u.position+1},g);i(c,d,!1),r.value=c}return{location:r,state:a,push:p,replace:l}}function ef(n){n=V8(n);const t=X8(n),o=Z8(n,t.state,t.location,t.replace);function r(i,l=!0){l||o.pauseListeners(),history.go(i)}const a=De({location:"",base:n,go:r,createHref:q8.bind(null,n)},t,o);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function nf(n){return typeof n=="string"||n&&typeof n=="object"}function Jc(n){return typeof n=="string"||typeof n=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vc=Symbol("");var Bl;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Bl||(Bl={}));function ao(n,t){return De(new Error,{type:n,[Vc]:!0},t)}function Ln(n,t){return n instanceof Error&&Vc in n&&(t==null||!!(n.type&t))}const Dl="[^/]+?",tf={sensitive:!1,strict:!1,start:!0,end:!0},of=/[.+*?^${}()[\]/\\]/g;function sf(n,t){const o=De({},tf,t),r=[];let a=o.start?"^":"";const i=[];for(const g of n){const u=g.length?[]:[90];o.strict&&!g.length&&(a+="/");for(let d=0;d<g.length;d++){const y=g[d];let m=40+(o.sensitive?.25:0);if(y.type===0)d||(a+="/"),a+=y.value.replace(of,"\\$&"),m+=40;else if(y.type===1){const{value:f,repeatable:w,optional:A,regexp:D}=y;i.push({name:f,repeatable:w,optional:A});const b=D||Dl;if(b!==Dl){m+=10;try{new RegExp(`(${b})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${f}" (${b}): `+R.message)}}let I=w?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(I=A&&g.length<2?`(?:/${I})`:"/"+I),A&&(I+="?"),a+=I,m+=20,A&&(m+=-8),w&&(m+=-20),b===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(o.strict&&o.end){const g=r.length-1;r[g][r[g].length-1]+=.7000000000000001}o.strict||(a+="/?"),o.end?a+="$":o.strict&&(a+="(?:/|$)");const l=new RegExp(a,o.sensitive?"":"i");function p(g){const u=g.match(l),d={};if(!u)return null;for(let y=1;y<u.length;y++){const m=u[y]||"",f=i[y-1];d[f.name]=m&&f.repeatable?m.split("/"):m}return d}function c(g){let u="",d=!1;for(const y of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of y)if(m.type===0)u+=m.value;else if(m.type===1){const{value:f,repeatable:w,optional:A}=m,D=f in g?g[f]:"";if(Gn(D)&&!w)throw new Error(`Provided param "${f}" is an array but it is not repeatable (* or + modifiers)`);const b=Gn(D)?D.join("/"):D;if(!b)if(A)y.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${f}"`);u+=b}}return u||"/"}return{re:l,score:r,keys:i,parse:p,stringify:c}}function rf(n,t){let o=0;for(;o<n.length&&o<t.length;){const r=t[o]-n[o];if(r)return r;o++}return n.length<t.length?n.length===1&&n[0]===40+40?-1:1:n.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function af(n,t){let o=0;const r=n.score,a=t.score;for(;o<r.length&&o<a.length;){const i=rf(r[o],a[o]);if(i)return i;o++}if(Math.abs(a.length-r.length)===1){if(_l(r))return 1;if(_l(a))return-1}return a.length-r.length}function _l(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const lf={type:0,value:""},pf=/[a-zA-Z0-9_]/;function cf(n){if(!n)return[[]];if(n==="/")return[[lf]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(m){throw new Error(`ERR (${o})/"${g}": ${m}`)}let o=0,r=o;const a=[];let i;function l(){i&&a.push(i),i=[]}let p=0,c,g="",u="";function d(){!g||(o===0?i.push({type:0,value:g}):o===1||o===2||o===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${g}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:g,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),g="")}function y(){g+=c}for(;p<n.length;){if(c=n[p++],c==="\\"&&o!==2){r=o,o=4;continue}switch(o){case 0:c==="/"?(g&&d(),l()):c===":"?(d(),o=1):y();break;case 4:y(),o=r;break;case 1:c==="("?o=2:pf.test(c)?y():(d(),o=0,c!=="*"&&c!=="?"&&c!=="+"&&p--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:o=3:u+=c;break;case 3:d(),o=0,c!=="*"&&c!=="?"&&c!=="+"&&p--,u="";break;default:t("Unknown state");break}}return o===2&&t(`Unfinished custom RegExp for param "${g}"`),d(),l(),a}function gf(n,t,o){const r=sf(cf(n.path),o),a=De(r,{record:n,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function uf(n,t){const o=[],r=new Map;t=Cl({strict:!1,end:!0,sensitive:!1},t);function a(u){return r.get(u)}function i(u,d,y){const m=!y,f=df(u);f.aliasOf=y&&y.record;const w=Cl(t,u),A=[f];if("alias"in u){const I=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of I)A.push(De({},f,{components:y?y.record.components:f.components,path:R,aliasOf:y?y.record:f}))}let D,b;for(const I of A){const{path:R}=I;if(d&&R[0]!=="/"){const G=d.record.path,T=G[G.length-1]==="/"?"":"/";I.path=d.record.path+(R&&T+R)}if(D=gf(I,d,w),y?y.alias.push(D):(b=b||D,b!==D&&b.alias.push(D),m&&u.name&&!El(D)&&l(u.name)),f.children){const G=f.children;for(let T=0;T<G.length;T++)i(G[T],D,y&&y.children[T])}y=y||D,c(D)}return b?()=>{l(b)}:Co}function l(u){if(Jc(u)){const d=r.get(u);d&&(r.delete(u),o.splice(o.indexOf(d),1),d.children.forEach(l),d.alias.forEach(l))}else{const d=o.indexOf(u);d>-1&&(o.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(l),u.alias.forEach(l))}}function p(){return o}function c(u){let d=0;for(;d<o.length&&af(u,o[d])>=0&&(u.record.path!==o[d].record.path||!Lc(u,o[d]));)d++;o.splice(d,0,u),u.record.name&&!El(u)&&r.set(u.record.name,u)}function g(u,d){let y,m={},f,w;if("name"in u&&u.name){if(y=r.get(u.name),!y)throw ao(1,{location:u});w=y.record.name,m=De(Rl(d.params,y.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Rl(u.params,y.keys.map(b=>b.name))),f=y.stringify(m)}else if("path"in u)f=u.path,y=o.find(b=>b.re.test(f)),y&&(m=y.parse(f),w=y.record.name);else{if(y=d.name?r.get(d.name):o.find(b=>b.re.test(d.path)),!y)throw ao(1,{location:u,currentLocation:d});w=y.record.name,m=De({},d.params,u.params),f=y.stringify(m)}const A=[];let D=y;for(;D;)A.unshift(D.record),D=D.parent;return{name:w,path:f,params:m,matched:A,meta:mf(A)}}return n.forEach(u=>i(u)),{addRoute:i,resolve:g,removeRoute:l,getRoutes:p,getRecordMatcher:a}}function Rl(n,t){const o={};for(const r of t)r in n&&(o[r]=n[r]);return o}function df(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:yf(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function yf(n){const t={},o=n.props||!1;if("component"in n)t.default=o;else for(const r in n.components)t[r]=typeof o=="boolean"?o:o[r];return t}function El(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function mf(n){return n.reduce((t,o)=>De(t,o.meta),{})}function Cl(n,t){const o={};for(const r in n)o[r]=r in t?t[r]:n[r];return o}function Lc(n,t){return t.children.some(o=>o===n||Lc(n,o))}const qc=/#/g,ff=/&/g,hf=/\//g,vf=/=/g,Af=/\?/g,Hc=/\+/g,wf=/%5B/g,Nf=/%5D/g,Kc=/%5E/g,jf=/%60/g,zc=/%7B/g,bf=/%7C/g,Qc=/%7D/g,If=/%20/g;function qa(n){return encodeURI(""+n).replace(bf,"|").replace(wf,"[").replace(Nf,"]")}function Bf(n){return qa(n).replace(zc,"{").replace(Qc,"}").replace(Kc,"^")}function ea(n){return qa(n).replace(Hc,"%2B").replace(If,"+").replace(qc,"%23").replace(ff,"%26").replace(jf,"`").replace(zc,"{").replace(Qc,"}").replace(Kc,"^")}function Df(n){return ea(n).replace(vf,"%3D")}function _f(n){return qa(n).replace(qc,"%23").replace(Af,"%3F")}function Rf(n){return n==null?"":_f(n).replace(hf,"%2F")}function ks(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Ef(n){const t={};if(n===""||n==="?")return t;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Hc," "),l=i.indexOf("="),p=ks(l<0?i:i.slice(0,l)),c=l<0?null:ks(i.slice(l+1));if(p in t){let g=t[p];Gn(g)||(g=t[p]=[g]),g.push(c)}else t[p]=c}return t}function xl(n){let t="";for(let o in n){const r=n[o];if(o=Df(o),r==null){r!==void 0&&(t+=(t.length?"&":"")+o);continue}(Gn(r)?r.map(i=>i&&ea(i)):[r&&ea(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+o,i!=null&&(t+="="+i))})}return t}function Cf(n){const t={};for(const o in n){const r=n[o];r!==void 0&&(t[o]=Gn(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const xf=Symbol(""),kl=Symbol(""),Ha=Symbol(""),Yc=Symbol(""),na=Symbol("");function Ao(){let n=[];function t(r){return n.push(r),()=>{const a=n.indexOf(r);a>-1&&n.splice(a,1)}}function o(){n=[]}return{add:t,list:()=>n,reset:o}}function st(n,t,o,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((l,p)=>{const c=d=>{d===!1?p(ao(4,{from:o,to:t})):d instanceof Error?p(d):nf(d)?p(ao(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),l())},g=n.call(r&&r.instances[a],t,o,c);let u=Promise.resolve(g);n.length<3&&(u=u.then(c)),u.catch(d=>p(d))})}function vr(n,t,o,r){const a=[];for(const i of n)for(const l in i.components){let p=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(kf(p)){const g=(p.__vccOpts||p)[t];g&&a.push(st(g,o,r,i,l))}else{let c=p();a.push(()=>c.then(g=>{if(!g)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));const u=T8(g)?g.default:g;i.components[l]=u;const y=(u.__vccOpts||u)[t];return y&&st(y,o,r,i,l)()}))}}return a}function kf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Fl(n){const t=F(Ha),o=F(Yc),r=_(()=>t.resolve(N(n.to))),a=_(()=>{const{matched:c}=r.value,{length:g}=c,u=c[g-1],d=o.matched;if(!u||!d.length)return-1;const y=d.findIndex(ro.bind(null,u));if(y>-1)return y;const m=Wl(c[g-2]);return g>1&&Wl(u)===m&&d[d.length-1].path!==m?d.findIndex(ro.bind(null,c[g-2])):y}),i=_(()=>a.value>-1&&Gf(o.params,r.value.params)),l=_(()=>a.value>-1&&a.value===o.matched.length-1&&Pc(o.params,r.value.params));function p(c={}){return Sf(c)?t[N(n.replace)?"replace":"push"](N(n.to)).catch(Co):Promise.resolve()}return{route:r,href:_(()=>r.value.href),isActive:i,isExactActive:l,navigate:p}}const Ff=fe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fl,setup(n,{slots:t}){const o=Se(Fl(n)),{options:r}=F(Ha),a=_(()=>({[Sl(n.activeClass,r.linkActiveClass,"router-link-active")]:o.isActive,[Sl(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const i=t.default&&t.default(o);return n.custom?i:vn("a",{"aria-current":o.isExactActive?n.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:a.value},i)}}}),Wf=Ff;function Sf(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Gf(n,t){for(const o in t){const r=t[o],a=n[o];if(typeof r=="string"){if(r!==a)return!1}else if(!Gn(a)||a.length!==r.length||r.some((i,l)=>i!==a[l]))return!1}return!0}function Wl(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Sl=(n,t,o)=>n!=null?n:t!=null?t:o,Tf=fe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:o}){const r=F(na),a=_(()=>n.route||r.value),i=F(kl,0),l=_(()=>{let g=N(i);const{matched:u}=a.value;let d;for(;(d=u[g])&&!d.components;)g++;return g}),p=_(()=>a.value.matched[l.value]);hn(kl,_(()=>l.value+1)),hn(xf,p),hn(na,a);const c=q();return ye(()=>[c.value,p.value,n.name],([g,u,d],[y,m,f])=>{u&&(u.instances[d]=g,m&&m!==u&&g&&g===y&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),g&&u&&(!m||!ro(u,m)||!y)&&(u.enterCallbacks[d]||[]).forEach(w=>w(g))},{flush:"post"}),()=>{const g=a.value,u=n.name,d=p.value,y=d&&d.components[u];if(!y)return Gl(o.default,{Component:y,route:g});const m=d.props[u],f=m?m===!0?g.params:typeof m=="function"?m(g):m:null,A=vn(y,De({},f,t,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Gl(o.default,{Component:A,route:g})||A}}});function Gl(n,t){if(!n)return null;const o=n(t);return o.length===1?o[0]:o}const Uf=Tf;function Mf(n){const t=uf(n.routes,n),o=n.parseQuery||Ef,r=n.stringifyQuery||xl,a=n.history,i=Ao(),l=Ao(),p=Ao(),c=Wn(tt);let g=tt;Lt&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=fr.bind(null,E=>""+E),d=fr.bind(null,Rf),y=fr.bind(null,ks);function m(E,K){let J,Z;return Jc(E)?(J=t.getRecordMatcher(E),Z=K):Z=E,t.addRoute(Z,J)}function f(E){const K=t.getRecordMatcher(E);K&&t.removeRoute(K)}function w(){return t.getRoutes().map(E=>E.record)}function A(E){return!!t.getRecordMatcher(E)}function D(E,K){if(K=De({},K||c.value),typeof E=="string"){const oe=hr(o,E,K.path),h=t.resolve({path:oe.path},K),v=a.createHref(oe.fullPath);return De(oe,h,{params:y(h.params),hash:ks(oe.hash),redirectedFrom:void 0,href:v})}let J;if("path"in E)J=De({},E,{path:hr(o,E.path,K.path).path});else{const oe=De({},E.params);for(const h in oe)oe[h]==null&&delete oe[h];J=De({},E,{params:d(E.params)}),K.params=d(K.params)}const Z=t.resolve(J,K),je=E.hash||"";Z.params=u(y(Z.params));const me=O8(r,De({},E,{hash:Bf(je),path:Z.path})),le=a.createHref(me);return De({fullPath:me,hash:je,query:r===xl?Cf(E.query):E.query||{}},Z,{redirectedFrom:void 0,href:le})}function b(E){return typeof E=="string"?hr(o,E,c.value.path):De({},E)}function I(E,K){if(g!==E)return ao(8,{from:K,to:E})}function R(E){return k(E)}function G(E){return R(De(b(E),{replace:!0}))}function T(E){const K=E.matched[E.matched.length-1];if(K&&K.redirect){const{redirect:J}=K;let Z=typeof J=="function"?J(E):J;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=b(Z):{path:Z},Z.params={}),De({query:E.query,hash:E.hash,params:"path"in Z?{}:E.params},Z)}}function k(E,K){const J=g=D(E),Z=c.value,je=E.state,me=E.force,le=E.replace===!0,oe=T(J);if(oe)return k(De(b(oe),{state:typeof oe=="object"?De({},je,oe.state):je,force:me,replace:le}),K||J);const h=J;h.redirectedFrom=K;let v;return!me&&P8(r,Z,J)&&(v=ao(16,{to:h,from:Z}),Re(Z,Z,!0,!1)),(v?Promise.resolve(v):se(h,Z)).catch(B=>Ln(B)?Ln(B,2)?B:ue(B):Q(B,h,Z)).then(B=>{if(B){if(Ln(B,2))return k(De({replace:le},b(B.to),{state:typeof B.to=="object"?De({},je,B.to.state):je,force:me}),K||h)}else B=Ae(h,Z,!0,le,je);return he(h,Z,B),B})}function z(E,K){const J=I(E,K);return J?Promise.reject(J):Promise.resolve()}function se(E,K){let J;const[Z,je,me]=Of(E,K);J=vr(Z.reverse(),"beforeRouteLeave",E,K);for(const oe of Z)oe.leaveGuards.forEach(h=>{J.push(st(h,E,K))});const le=z.bind(null,E,K);return J.push(le),Ot(J).then(()=>{J=[];for(const oe of i.list())J.push(st(oe,E,K));return J.push(le),Ot(J)}).then(()=>{J=vr(je,"beforeRouteUpdate",E,K);for(const oe of je)oe.updateGuards.forEach(h=>{J.push(st(h,E,K))});return J.push(le),Ot(J)}).then(()=>{J=[];for(const oe of E.matched)if(oe.beforeEnter&&!K.matched.includes(oe))if(Gn(oe.beforeEnter))for(const h of oe.beforeEnter)J.push(st(h,E,K));else J.push(st(oe.beforeEnter,E,K));return J.push(le),Ot(J)}).then(()=>(E.matched.forEach(oe=>oe.enterCallbacks={}),J=vr(me,"beforeRouteEnter",E,K),J.push(le),Ot(J))).then(()=>{J=[];for(const oe of l.list())J.push(st(oe,E,K));return J.push(le),Ot(J)}).catch(oe=>Ln(oe,8)?oe:Promise.reject(oe))}function he(E,K,J){for(const Z of p.list())Z(E,K,J)}function Ae(E,K,J,Z,je){const me=I(E,K);if(me)return me;const le=K===tt,oe=Lt?history.state:{};J&&(Z||le?a.replace(E.fullPath,De({scroll:le&&oe&&oe.scroll},je)):a.push(E.fullPath,je)),c.value=E,Re(E,K,J,le),ue()}let Je;function Ve(){Je||(Je=a.listen((E,K,J)=>{if(!ft.listening)return;const Z=D(E),je=T(Z);if(je){k(De(je,{replace:!0}),Z).catch(Co);return}g=Z;const me=c.value;Lt&&z8(bl(me.fullPath,J.delta),er()),se(Z,me).catch(le=>Ln(le,12)?le:Ln(le,2)?(k(le.to,Z).then(oe=>{Ln(oe,20)&&!J.delta&&J.type===Lo.pop&&a.go(-1,!1)}).catch(Co),Promise.reject()):(J.delta&&a.go(-J.delta,!1),Q(le,Z,me))).then(le=>{le=le||Ae(Z,me,!1),le&&(J.delta&&!Ln(le,8)?a.go(-J.delta,!1):J.type===Lo.pop&&Ln(le,20)&&a.go(-1,!1)),he(Z,me,le)}).catch(Co)}))}let Me=Ao(),ke=Ao(),Te;function Q(E,K,J){ue(E);const Z=ke.list();return Z.length?Z.forEach(je=>je(E,K,J)):console.error(E),Promise.reject(E)}function re(){return Te&&c.value!==tt?Promise.resolve():new Promise((E,K)=>{Me.add([E,K])})}function ue(E){return Te||(Te=!E,Ve(),Me.list().forEach(([K,J])=>E?J(E):K()),Me.reset()),E}function Re(E,K,J,Z){const{scrollBehavior:je}=n;if(!Lt||!je)return Promise.resolve();const me=!J&&Q8(bl(E.fullPath,0))||(Z||!J)&&history.state&&history.state.scroll||null;return en().then(()=>je(E,K,me)).then(le=>le&&K8(le)).catch(le=>Q(le,E,K))}const gn=E=>a.go(E);let Ze;const pn=new Set,ft={currentRoute:c,listening:!0,addRoute:m,removeRoute:f,hasRoute:A,getRoutes:w,resolve:D,options:n,push:R,replace:G,go:gn,back:()=>gn(-1),forward:()=>gn(1),beforeEach:i.add,beforeResolve:l.add,afterEach:p.add,onError:ke.add,isReady:re,install(E){const K=this;E.component("RouterLink",Wf),E.component("RouterView",Uf),E.config.globalProperties.$router=K,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>N(c)}),Lt&&!Ze&&c.value===tt&&(Ze=!0,R(a.location).catch(je=>{}));const J={};for(const je in tt)J[je]=_(()=>c.value[je]);E.provide(Ha,K),E.provide(Yc,Se(J)),E.provide(na,c);const Z=E.unmount;pn.add(E),E.unmount=function(){pn.delete(E),pn.size<1&&(g=tt,Je&&Je(),Je=null,c.value=tt,Ze=!1,Te=!1),Z()}}};return ft}function Ot(n){return n.reduce((t,o)=>t.then(()=>o()),Promise.resolve())}function Of(n,t){const o=[],r=[],a=[],i=Math.max(t.matched.length,n.matched.length);for(let l=0;l<i;l++){const p=t.matched[l];p&&(n.matched.find(g=>ro(g,p))?r.push(p):o.push(p));const c=n.matched[l];c&&(t.matched.find(g=>ro(g,c))||a.push(c))}return[o,r,a]}const Ar=q(!1),ko=q(!1),Ht=q(!1),Pf=q(!0),ta=Ym({xs:460,...qm}),Wt=G8(),Zc=I8(),$f=_(()=>Wt.height.value-Wt.width.value/lt>180),Xc=N8(Sn?document.body:null),eo=Lm(),Jf=_(()=>{var n,t;return["INPUT","TEXTAREA"].includes(((n=eo.value)==null?void 0:n.tagName)||"")||((t=eo.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Vf=_(()=>{var n;return["BUTTON","A"].includes(((n=eo.value)==null?void 0:n.tagName)||"")});Tn("slidev-camera","default");Tn("slidev-mic","default");const As=Tn("slidev-scale",0),rn=Tn("slidev-show-overview",!1),wr=Tn("slidev-presenter-cursor",!0),Tl=Tn("slidev-show-editor",!1);Tn("slidev-editor-width",Sn?window.innerWidth*.4:100);const eg=Tc(rn);function Ul(n,t,o,r=a=>a){return n*r(.5-t*(.5-o))}function Lf(n){return[-n[0],-n[1]]}function _n(n,t){return[n[0]+t[0],n[1]+t[1]]}function bn(n,t){return[n[0]-t[0],n[1]-t[1]]}function Dn(n,t){return[n[0]*t,n[1]*t]}function qf(n,t){return[n[0]/t,n[1]/t]}function wo(n){return[n[1],-n[0]]}function Ml(n,t){return n[0]*t[0]+n[1]*t[1]}function Hf(n,t){return n[0]===t[0]&&n[1]===t[1]}function Kf(n){return Math.hypot(n[0],n[1])}function zf(n){return n[0]*n[0]+n[1]*n[1]}function Ol(n,t){return zf(bn(n,t))}function ng(n){return qf(n,Kf(n))}function Qf(n,t){return Math.hypot(n[1]-t[1],n[0]-t[0])}function No(n,t,o){let r=Math.sin(o),a=Math.cos(o),i=n[0]-t[0],l=n[1]-t[1],p=i*a-l*r,c=i*r+l*a;return[p+t[0],c+t[1]]}function oa(n,t,o){return _n(n,Dn(bn(t,n),o))}function Pl(n,t,o){return _n(n,Dn(t,o))}var{min:Pt,PI:Yf}=Math,$l=.275,jo=Yf+1e-4;function Zf(n,t={}){let{size:o=16,smoothing:r=.5,thinning:a=.5,simulatePressure:i=!0,easing:l=Q=>Q,start:p={},end:c={},last:g=!1}=t,{cap:u=!0,easing:d=Q=>Q*(2-Q)}=p,{cap:y=!0,easing:m=Q=>--Q*Q*Q+1}=c;if(n.length===0||o<=0)return[];let f=n[n.length-1].runningLength,w=p.taper===!1?0:p.taper===!0?Math.max(o,f):p.taper,A=c.taper===!1?0:c.taper===!0?Math.max(o,f):c.taper,D=Math.pow(o*r,2),b=[],I=[],R=n.slice(0,10).reduce((Q,re)=>{let ue=re.pressure;if(i){let Re=Pt(1,re.distance/o),gn=Pt(1,1-Re);ue=Pt(1,Q+(gn-Q)*(Re*$l))}return(Q+ue)/2},n[0].pressure),G=Ul(o,a,n[n.length-1].pressure,l),T,k=n[0].vector,z=n[0].point,se=z,he=z,Ae=se,Je=!1;for(let Q=0;Q<n.length;Q++){let{pressure:re}=n[Q],{point:ue,vector:Re,distance:gn,runningLength:Ze}=n[Q];if(Q<n.length-1&&f-Ze<3)continue;if(a){if(i){let me=Pt(1,gn/o),le=Pt(1,1-me);re=Pt(1,R+(le-R)*(me*$l))}G=Ul(o,a,re,l)}else G=o/2;T===void 0&&(T=G);let pn=Ze<w?d(Ze/w):1,ft=f-Ze<A?m((f-Ze)/A):1;G=Math.max(.01,G*Math.min(pn,ft));let E=(Q<n.length-1?n[Q+1]:n[Q]).vector,K=Q<n.length-1?Ml(Re,E):1,J=Ml(Re,k)<0&&!Je,Z=K!==null&&K<0;if(J||Z){let me=Dn(wo(k),G);for(let le=1/13,oe=0;oe<=1;oe+=le)he=No(bn(ue,me),ue,jo*oe),b.push(he),Ae=No(_n(ue,me),ue,jo*-oe),I.push(Ae);z=he,se=Ae,Z&&(Je=!0);continue}if(Je=!1,Q===n.length-1){let me=Dn(wo(Re),G);b.push(bn(ue,me)),I.push(_n(ue,me));continue}let je=Dn(wo(oa(E,Re,K)),G);he=bn(ue,je),(Q<=1||Ol(z,he)>D)&&(b.push(he),z=he),Ae=_n(ue,je),(Q<=1||Ol(se,Ae)>D)&&(I.push(Ae),se=Ae),R=re,k=Re}let Ve=n[0].point.slice(0,2),Me=n.length>1?n[n.length-1].point.slice(0,2):_n(n[0].point,[1,1]),ke=[],Te=[];if(n.length===1){if(!(w||A)||g){let Q=Pl(Ve,ng(wo(bn(Ve,Me))),-(T||G)),re=[];for(let ue=1/13,Re=ue;Re<=1;Re+=ue)re.push(No(Q,Ve,jo*2*Re));return re}}else{if(!(w||A&&n.length===1))if(u)for(let re=1/13,ue=re;ue<=1;ue+=re){let Re=No(I[0],Ve,jo*ue);ke.push(Re)}else{let re=bn(b[0],I[0]),ue=Dn(re,.5),Re=Dn(re,.51);ke.push(bn(Ve,ue),bn(Ve,Re),_n(Ve,Re),_n(Ve,ue))}let Q=wo(Lf(n[n.length-1].vector));if(A||w&&n.length===1)Te.push(Me);else if(y){let re=Pl(Me,Q,G);for(let ue=1/29,Re=ue;Re<1;Re+=ue)Te.push(No(re,Me,jo*3*Re))}else Te.push(_n(Me,Dn(Q,G)),_n(Me,Dn(Q,G*.99)),bn(Me,Dn(Q,G*.99)),bn(Me,Dn(Q,G)))}return b.concat(Te,I.reverse(),ke)}function Xf(n,t={}){var o;let{streamline:r=.5,size:a=16,last:i=!1}=t;if(n.length===0)return[];let l=.15+(1-r)*.85,p=Array.isArray(n[0])?n:n.map(({x:m,y:f,pressure:w=.5})=>[m,f,w]);if(p.length===2){let m=p[1];p=p.slice(0,-1);for(let f=1;f<5;f++)p.push(oa(p[0],m,f/4))}p.length===1&&(p=[...p,[..._n(p[0],[1,1]),...p[0].slice(2)]]);let c=[{point:[p[0][0],p[0][1]],pressure:p[0][2]>=0?p[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],g=!1,u=0,d=c[0],y=p.length-1;for(let m=1;m<p.length;m++){let f=i&&m===y?p[m].slice(0,2):oa(d.point,p[m],l);if(Hf(d.point,f))continue;let w=Qf(f,d.point);if(u+=w,m<y&&!g){if(u<a)continue;g=!0}d={point:f,pressure:p[m][2]>=0?p[m][2]:.5,vector:ng(bn(d.point,f)),distance:w,runningLength:u},c.push(d)}return c[0].vector=((o=c[1])==null?void 0:o.vector)||[0,0],c}function eh(n,t={}){return Zf(Xf(n,t),t)}var nh=()=>({events:{},emit(n,...t){let o=this.events[n]||[];for(let r=0,a=o.length;r<a;r++)o[r](...t)},on(n,t){var o;return(o=this.events[n])!=null&&o.push(t)||(this.events[n]=[t]),()=>{var r;this.events[n]=(r=this.events[n])==null?void 0:r.filter(a=>t!==a)}}});function Fs(n,t){return n-t}function th(n){return n<0?-1:1}function Ws(n){return[Math.abs(n),th(n)]}function tg(){const n=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${n()+n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}var oh=2,Kn=oh,go=class{constructor(n){this.drauu=n,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(n){}onUnselected(){}onStart(n){}onMove(n){return!1}onEnd(n){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(n){var a;var t;const o=this.drauu.el,r=(a=this.drauu.options.coordinateScale)!=null?a:1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(n.pageX-i.left)*r,y:(n.pageY-i.top)*r,pressure:n.pressure}}else{const i=this.drauu.svgPoint;i.x=n.clientX,i.y=n.clientY;const l=i.matrixTransform((t=o.getScreenCTM())==null?void 0:t.inverse());return{x:l.x*r,y:l.y*r,pressure:n.pressure}}}createElement(n,t){var a;const o=document.createElementNS("http://www.w3.org/2000/svg",n),r=t?{...this.brush,...t}:this.brush;return o.setAttribute("fill",(a=r.fill)!=null?a:"transparent"),o.setAttribute("stroke",r.color),o.setAttribute("stroke-width",r.size.toString()),o.setAttribute("stroke-linecap","round"),r.dasharray&&o.setAttribute("stroke-dasharray",r.dasharray),o}attr(n,t){this.el.setAttribute(n,typeof t=="string"?t:t.toFixed(Kn))}_setEvent(n){this.event=n,this.point=this.getMousePosition(n)}_eventDown(n){return this._setEvent(n),this.start=this.point,this.onStart(this.point)}_eventMove(n){return this._setEvent(n),this.onMove(this.point)}_eventUp(n){return this._setEvent(n),this.onEnd(this.point)}},sh=class extends go{constructor(){super(...arguments),this.points=[]}onStart(n){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[n],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&this.points.push(n),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!!n}getSvgData(n){const t=eh(n,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const o=t.reduce((r,[a,i],l,p)=>{const[c,g]=p[(l+1)%p.length];return r.push(a,i,(a+c)/2,(i+g)/2),r},["M",...t[0],"Q"]);return o.push("Z"),o.map(r=>typeof r=="number"?r.toFixed(2):r).join(" ")}},rh=class extends go{onStart(n){return this.el=this.createElement("ellipse"),this.attr("cx",n.x),this.attr("cy",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,o]=Ws(n.x-this.start.x),[r,a]=Ws(n.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,r);t=i,r=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",r);else{const[i,l]=[this.start.x,this.start.x+t*o].sort(Fs),[p,c]=[this.start.y,this.start.y+r*a].sort(Fs);this.attr("cx",(i+l)/2),this.attr("cy",(p+c)/2),this.attr("rx",(l-i)/2),this.attr("ry",(c-p)/2)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function og(n,t){const o=document.createElementNS("http://www.w3.org/2000/svg","defs"),r=document.createElementNS("http://www.w3.org/2000/svg","marker"),a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("fill",t),r.setAttribute("id",n),r.setAttribute("viewBox","0 -5 10 10"),r.setAttribute("refX","5"),r.setAttribute("refY","0"),r.setAttribute("markerWidth","4"),r.setAttribute("markerHeight","4"),r.setAttribute("orient","auto"),a.setAttribute("d","M0,-5L10,0L0,5"),r.appendChild(a),o.appendChild(r),o}var ah=class extends go{onStart(n){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",n.x),this.attr("y1",n.y),this.attr("x2",n.x),this.attr("y2",n.y),this.brush.arrowEnd){const t=tg(),o=document.createElementNS("http://www.w3.org/2000/svg","g");return o.append(og(t,this.brush.color)),o.append(this.el),this.attr("marker-end",`url(#${t})`),o}return this.el}onMove(n){if(!this.el)return!1;let{x:t,y:o}=n;if(this.shiftPressed){const r=n.x-this.start.x,a=n.y-this.start.y;if(a!==0){let i=r/a;i=Math.round(i),Math.abs(i)<=1?(t=this.start.x+a*i,o=this.start.y+a):(t=this.start.x+r,o=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-o),this.attr("x2",t),this.attr("y2",o)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",o)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||n.getTotalLength()<5)}},ih=class extends go{onStart(n){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",n.x),this.attr("y",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[t,o]=Ws(n.x-this.start.x),[r,a]=Ws(n.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,r);t=i,r=i}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-r),this.attr("width",t*2),this.attr("height",r*2);else{const[i,l]=[this.start.x,this.start.x+t*o].sort(Fs),[p,c]=[this.start.y,this.start.y+r*a].sort(Fs);this.attr("x",i),this.attr("y",p),this.attr("width",l-i),this.attr("height",c-p)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function lh(n,t){const o=n.x-t.x,r=n.y-t.y;return o*o+r*r}function ph(n,t,o){let r=t.x,a=t.y,i=o.x-r,l=o.y-a;if(i!==0||l!==0){const p=((n.x-r)*i+(n.y-a)*l)/(i*i+l*l);p>1?(r=o.x,a=o.y):p>0&&(r+=i*p,a+=l*p)}return i=n.x-r,l=n.y-a,i*i+l*l}function ch(n,t){let o=n[0];const r=[o];let a;for(let i=1,l=n.length;i<l;i++)a=n[i],lh(a,o)>t&&(r.push(a),o=a);return o!==a&&a&&r.push(a),r}function sa(n,t,o,r,a){let i=r,l=0;for(let p=t+1;p<o;p++){const c=ph(n[p],n[t],n[o]);c>i&&(l=p,i=c)}i>r&&(l-t>1&&sa(n,t,l,r,a),a.push(n[l]),o-l>1&&sa(n,l,o,r,a))}function gh(n,t){const o=n.length-1,r=[n[0]];return sa(n,0,o,t,r),r.push(n[o]),r}function Jl(n,t,o=!1){if(n.length<=2)return n;const r=t!==void 0?t*t:1;return n=o?n:ch(n,r),n=gh(n,r),n}var uh=class extends go{constructor(){super(...arguments),this.points=[],this.count=0}onStart(n){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[n],this.brush.arrowEnd){this.arrowId=tg();const t=og(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&(this.points.push(n),this.count+=1),this.count>5&&(this.points=Jl(this.points,1,!0),this.count=0),this.attr("d",Ll(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||(n.setAttribute("d",Ll(Jl(this.points,1,!0))),!n.getTotalLength()))}};function dh(n,t){const o=t.x-n.x,r=t.y-n.y;return{length:Math.sqrt(Math.pow(o,2)+Math.pow(r,2)),angle:Math.atan2(r,o)}}function Vl(n,t,o,r){const a=t||n,i=o||n,l=.2,p=dh(a,i),c=p.angle+(r?Math.PI:0),g=p.length*l,u=n.x+Math.cos(c)*g,d=n.y+Math.sin(c)*g;return{x:u,y:d}}function yh(n,t,o){const r=Vl(o[t-1],o[t-2],n),a=Vl(n,o[t-1],o[t+1],!0);return`C ${r.x.toFixed(Kn)},${r.y.toFixed(Kn)} ${a.x.toFixed(Kn)},${a.y.toFixed(Kn)} ${n.x.toFixed(Kn)},${n.y.toFixed(Kn)}`}function Ll(n){return n.reduce((t,o,r,a)=>r===0?`M ${o.x.toFixed(Kn)},${o.y.toFixed(Kn)}`:`${t} ${yh(o,r,a)}`,"")}var mh=class extends go{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(n){const t=(o,r)=>{if(o&&o.length)for(let a=0;a<o.length;a++){const i=o[a];if(i.getTotalLength){const l=i.getTotalLength();for(let p=0;p<this.pathSubFactor;p++){const c=i.getPointAtLength(l*p/this.pathSubFactor),g=i.getPointAtLength(l*(p+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:g.x,y1:c.y,y2:g.y,segment:p,element:r||i})}}else i.children&&t(i.children,i)}};n&&t(n.children)}onUnselected(){this.pathFragments=[]}onStart(n){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=n.x,this.svgPointPrevious.y=n.y}onMove(n){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=n.x,this.svgPointCurrent.y=n.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const n=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const o=this.pathFragments[t],r={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(o,r)&&(o.element.remove(),n.push(t))}return n.length&&(this.pathFragments=this.pathFragments.filter((t,o)=>!n.includes(o))),n.length>0}lineLineIntersect(n,t){const o=n.x1,r=n.x2,a=t.x1,i=t.x2,l=n.y1,p=n.y2,c=t.y1,g=t.y2,u=(o-r)*(c-g)-(l-p)*(a-i),d=(o*p-l*r)*(a-i)-(o-r)*(a*g-c*i),y=(o*p-l*r)*(c-g)-(l-p)*(a*g-c*i),m=(f,w,A)=>f>=w&&f<=A?!0:f>=A&&f<=w;if(u===0)return!1;{const f={x:d/u,y:y/u};return m(f.x,o,r)&&m(f.y,l,p)&&m(f.x,a,i)&&m(f.y,c,g)}}};function fh(n){return{draw:new uh(n),stylus:new sh(n),line:new ah(n),rectangle:new ih(n),ellipse:new rh(n),eraseLine:new mh(n)}}var hh=class{constructor(n={}){this.options=n,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=nh(),this._models=fh(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),n.el&&this.mount(n.el,n.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(n){this._models[this.mode].onUnselected(),this.options.brush.mode=n,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(n){this.options.brush=n}resolveSelector(n){return typeof n=="string"?document.querySelector(n):n||null}mount(n,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(n),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const o=this.resolveSelector(t)||this.el,r=this.eventStart.bind(this),a=this.eventMove.bind(this),i=this.eventEnd.bind(this),l=this.eventKeyboard.bind(this);o.addEventListener("pointerdown",r,{passive:!1}),window.addEventListener("pointermove",a,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),window.addEventListener("pointercancel",i,{passive:!1}),window.addEventListener("keydown",l,!1),window.addEventListener("keyup",l,!1),this._disposables.push(()=>{o.removeEventListener("pointerdown",r),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),window.removeEventListener("keydown",l,!1),window.removeEventListener("keyup",l,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(n=>n()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(n,t){return this._emitter.on(n,t)}undo(){const n=this.el;return n.lastElementChild?(this._undoStack.push(n.lastElementChild.cloneNode(!0)),n.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var n;return!!((n=this.el)!=null&&n.lastElementChild)}eventMove(n){!this.acceptsInput(n)||!this.drawing||this.model._eventMove(n)&&(n.stopPropagation(),n.preventDefault(),this._emitter.emit("changed"))}eventStart(n){!this.acceptsInput(n)||(n.stopPropagation(),n.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(n),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(n){if(!this.acceptsInput(n)||!this.drawing)return;const t=this.model._eventUp(n);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(n){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(n.pointerType)}eventKeyboard(n){this.shiftPressed===n.shiftKey&&this.altPressed===n.altKey||(this.shiftPressed=n.shiftKey,this.altPressed=n.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const n=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",n)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(n){this.clear(),this.el.innerHTML=n}};function vh(n){return new hh(n)}const ra=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Jn=Tn("slidev-drawing-enabled",!1),RD=Tn("slidev-drawing-pinned",!1),Ah=q(!1),wh=q(!1),Nh=q(!1),qo=q(!1),Et=hm(Tn("slidev-drawing-brush",{color:ra[0],size:4,mode:"stylus"})),ql=q("stylus"),sg=_(()=>be.drawings.syncAll||Pn.value);let Ho=!1;const bo=_({get(){return ql.value},set(n){ql.value=n,n==="arrow"?(Et.mode="line",Et.arrowEnd=!0):(Et.mode=n,Et.arrowEnd=!1)}}),jh=Se({brush:Et,acceptsInputTypes:_(()=>Jn.value?void 0:["pen"]),coordinateTransform:!1}),an=Ls(vh(jh));function bh(){an.clear(),sg.value&&Fc(He.value,"")}function rg(){var n;wh.value=an.canRedo(),Ah.value=an.canUndo(),Nh.value=!!((n=an.el)!=null&&n.children.length)}function Ih(n){Ho=!0;const t=Es[n||He.value];t!=null?an.load(t):an.clear(),Ho=!1}an.on("changed",()=>{if(rg(),!Ho){const n=an.dump(),t=He.value;(Es[t]||"")!==n&&sg.value&&Fc(t,an.dump())}});am(n=>{Ho=!0,n[He.value]!=null&&an.load(n[He.value]||""),Ho=!1,rg()});en(()=>{ye(He,()=>{!an.mounted||Ih()},{immediate:!0})});an.on("start",()=>qo.value=!0);an.on("end",()=>qo.value=!1);window.addEventListener("keydown",n=>{if(!Jn.value)return;const t=!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey;let o=!0;n.code==="KeyZ"&&(n.ctrlKey||n.metaKey)?n.shiftKey?an.redo():an.undo():n.code==="Escape"?Jn.value=!1:n.code==="KeyL"&&t?bo.value="line":n.code==="KeyA"&&t?bo.value="arrow":n.code==="KeyS"&&t?bo.value="stylus":n.code==="KeyR"&&t?bo.value="rectangle":n.code==="KeyE"&&t?bo.value="ellipse":n.code==="KeyC"&&t?bh():n.code.startsWith("Digit")&&t&&+n.code[5]<=ra.length?Et.color=ra[+n.code[5]-1]:o=!1,o&&(n.preventDefault(),n.stopPropagation())},!1);function Le(...n){return _(()=>n.every(t=>Ke(t)))}function yn(n){return _(()=>!Ke(n))}const Hl=i8(),Nr=Tn("slidev-color-schema","auto"),aa=_(()=>be.colorSchema!=="auto"),nr=_({get(){return aa.value?be.colorSchema==="dark":Nr.value==="auto"?Hl.value:Nr.value==="dark"},set(n){aa.value||(Nr.value=n===Hl.value?"auto":n?"dark":"light")}}),ag=Tc(nr);Sn&&ye(nr,n=>{const t=document.querySelector("html");t.classList.toggle("dark",n),t.classList.toggle("light",!n)},{immediate:!0});const ws=q(1),Ns=_(()=>qe.length-1),An=q(0),Ka=q(0);function Bh(){An.value>ws.value&&(An.value-=1)}function Dh(){An.value<Ns.value&&(An.value+=1)}function _h(){if(An.value>ws.value){let n=An.value-Ka.value;n<ws.value&&(n=ws.value),An.value=n}}function Rh(){if(An.value<Ns.value){let n=An.value+Ka.value;n>Ns.value&&(n=Ns.value),An.value=n}}function Eh(){const{escape:n,space:t,shift:o,left:r,right:a,up:i,down:l,enter:p,d:c,g,o:u}=Zc;let d=[{name:"next_space",key:Le(t,yn(o)),fn:ct,autoRepeat:!0},{name:"prev_space",key:Le(t,o),fn:gt,autoRepeat:!0},{name:"next_right",key:Le(a,yn(o),yn(rn)),fn:ct,autoRepeat:!0},{name:"prev_left",key:Le(r,yn(o),yn(rn)),fn:gt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:ct,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:gt,autoRepeat:!0},{name:"next_down",key:Le(l,yn(rn)),fn:zo,autoRepeat:!0},{name:"prev_up",key:Le(i,yn(rn)),fn:()=>Qo(!1),autoRepeat:!0},{name:"next_shift",key:Le(a,o),fn:zo,autoRepeat:!0},{name:"prev_shift",key:Le(r,o),fn:()=>Qo(!1),autoRepeat:!0},{name:"toggle_dark",key:Le(c,yn(Jn)),fn:ag},{name:"toggle_overview",key:Le(u,yn(Jn)),fn:eg},{name:"hide_overview",key:Le(n,yn(Jn)),fn:()=>rn.value=!1},{name:"goto",key:Le(g,yn(Jn)),fn:()=>Ht.value=!Ht.value},{name:"next_overview",key:Le(a,rn),fn:Dh},{name:"prev_overview",key:Le(r,rn),fn:Bh},{name:"up_overview",key:Le(i,rn),fn:_h},{name:"down_overview",key:Le(l,rn),fn:Rh},{name:"goto_from_overview",key:Le(p,rn),fn:()=>{io(An.value),rn.value=!1}}];const y=new Set(d.map(f=>f.name));if(d.filter(f=>f.name&&y.has(f.name)).length===0){const f=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(f),console.warn(f)}return d}const ig=Le(yn(Jf),yn(Vf),Pf);function Ch(n,t,o=!1){typeof n=="string"&&(n=Zc[n]);const r=Le(n,ig);let a=0,i;const l=()=>{if(clearTimeout(i),!r.value){a=0;return}o&&(i=setTimeout(l,Math.max(1e3-a*250,150)),a++),t()};return ye(r,l,{flush:"sync"})}function xh(n,t){return Vm(n,o=>{!ig.value||o.repeat||t()})}function kh(){const n=Eh();new Map(n.map(o=>[o.key,o])).forEach(o=>{o.fn&&Ch(o.key,o.fn,o.autoRepeat)}),xh("f",()=>Xc.toggle())}const Fh={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wh=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Sh=[Wh];function Gh(n,t){return j(),$("svg",Fh,Sh)}const Th={name:"carbon-close",render:Gh};function za(n){var o,r;const t=(r=(o=n==null?void 0:n.meta)==null?void 0:o.slide)==null?void 0:r.no;return t!=null?`slidev-page-${t}`:""}const lg=fe({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(n){const t=n;F(O);const o=q(),r=w8(o),a=_(()=>t.width?t.width:r.width.value),i=_(()=>t.width?t.width/lt:r.height.value);t.width&&Xo(()=>{o.value&&(o.value.style.width=`${a.value}px`,o.value.style.height=`${i.value}px`)});const l=_(()=>a.value/i.value),p=_(()=>t.scale?t.scale:l.value<lt?a.value/Ft:i.value*lt/Ft),c=_(()=>({height:`${Cc}px`,width:`${Ft}px`,transform:`translate(-50%, -50%) scale(${p.value})`})),g=_(()=>({"select-none":!be.selectable,"slidev-code-line-numbers":be.lineNumbers}));return hn(Ec,p),(u,d)=>(j(),$("div",{id:"slide-container",ref_key:"root",ref:o,class:We(N(g))},[e("div",{id:"slide-content",style:$e(N(c))},[Qe(u.$slots,"default")],4),Qe(u.$slots,"controls")],2))}});const Qa=fe({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(n,{emit:t}){const o=$n(n,"clicks",t),r=$n(n,"clicksElements",t),a=$n(n,"clicksDisabled",t),i=$n(n,"clicksOrderMap",t);r.value.length=0,hn(Hy,n.route),hn(Ky,n.context),hn(Ro,o),hn(Eo,a),hn(Bt,r),hn(Hr,i)},render(){var n,t;return this.$props.is?vn(this.$props.is):(t=(n=this.$slots)==null?void 0:n.default)==null?void 0:t.call(n)}}),Uh=["innerHTML"],Mh=fe({__name:"DrawingPreview",props:{page:null},setup(n){return F(O),(t,o)=>N(Es)[n.page]?(j(),$("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:N(Es)[n.page]},null,8,Uh)):de("v-if",!0)}}),Oh={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Ph=["onClick"],$h=fe({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(n,{emit:t}){const o=n;F(O);const r=$n(o,"modelValue",t);function a(){r.value=!1}function i(m){io(m),a()}function l(m){return m===An.value}const p=ta.smaller("xs"),c=ta.smaller("sm"),g=4*16*2,u=2*16,d=_(()=>p.value?Wt.width.value-g:c.value?(Wt.width.value-g-u)/2:300),y=_(()=>Math.floor((Wt.width.value-g)/(d.value+u)));return Xo(()=>{An.value=He.value,Ka.value=y.value}),(m,f)=>{const w=Th;return j(),$(_e,null,[Ma(e("div",Oh,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:$e(`grid-template-columns: repeat(auto-fit,minmax(${N(d)}px,1fr))`)},[(j(!0),$(_e,null,es(N(qe).slice(0,-1),(A,D)=>(j(),$("div",{key:A.path,class:"relative"},[e("div",{class:We(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":l(D+1)}]),onClick:b=>i(+A.path)},[(j(),L(lg,{key:A.path,width:N(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:S(()=>[U(N(Qa),{is:A==null?void 0:A.component,"clicks-disabled":!0,class:We(N(za)(A)),route:A,context:"overview"},null,8,["is","class","route"]),U(Mh,{page:+A.path},null,8,["page"])]),_:2},1032,["width"]))],10,Ph),e("div",{class:"absolute top-0 opacity-50",style:$e(`left: ${N(d)+5}px`)},ut(D+1),5)]))),128))],4)],512),[[Dc,N(r)]]),N(r)?(j(),$("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:a},[U(w)])):de("v-if",!0)],64)}}});const Jh="/major-migrations-made-easy-slides/assets/logo.b72bde5d.png",Vh={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Lh=fe({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(n,{emit:t}){const o=n;F(O);const r=$n(o,"modelValue",t);function a(){r.value=!1}return(i,l)=>(j(),L(lc,null,[N(r)?(j(),$("div",Vh,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:l[0]||(l[0]=p=>a())}),e("div",{class:We(["m-auto rounded-md bg-main shadow",o.class]),"dark:border":"~ gray-400 opacity-10"},[Qe(i.$slots,"default")],2)])):de("v-if",!0)],1024))}}),qh={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Hh=["innerHTML"],Kh=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Jh,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),s("dev ")])])],-1),zh=fe({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(n,{emit:t}){const o=n;F(O);const r=$n(o,"modelValue",t),a=_(()=>typeof be.info=="string");return(i,l)=>(j(),L(Lh,{modelValue:N(r),"onUpdate:modelValue":l[0]||(l[0]=p=>Be(r)?r.value=p:null),class:"px-6 py-4"},{default:S(()=>[e("div",qh,[N(a)?(j(),$("div",{key:0,class:"mb-4",innerHTML:N(be).info},null,8,Hh)):de("v-if",!0),Kh])]),_:1},8,["modelValue"]))}});const Qh=["disabled","onKeydown"],Yh=fe({__name:"Goto",setup(n){F(O);const t=q(),o=q(""),r=_(()=>{if(o.value.startsWith("/"))return!!qe.find(l=>l.path===o.value.substring(1));{const l=+o.value;return!isNaN(l)&&l>0&&l<=jg.value}});function a(){r.value&&(o.value.startsWith("/")?io(o.value.substring(1)):io(+o.value)),i()}function i(){Ht.value=!1}return ye(Ht,async l=>{var p,c;l?(await en(),o.value="",(p=t.value)==null||p.focus()):(c=t.value)==null||c.blur()}),ye(o,l=>{l.match(/^[^0-9/]/)&&(o.value=o.value.substring(1))}),(l,p)=>(j(),$("div",{id:"slidev-goto-dialog",class:We(["fixed right-5 bg-main transform transition-all",N(Ht)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ma(e("input",{ref_key:"input",ref:t,"onUpdate:modelValue":p[0]||(p[0]=c=>o.value=c),type:"text",disabled:!N(Ht),class:We(["outline-none bg-transparent",{"text-red-400":!N(r)&&o.value}]),placeholder:"Goto...",onKeydown:[Qi(a,["enter"]),Qi(i,["escape"])],onBlur:i},null,42,Qh),[[Cy,o.value]])],2))}}),Zh=fe({__name:"Controls",setup(n){F(O);const t=Wn(),o=Wn();return(r,a)=>(j(),$(_e,null,[U($h,{modelValue:N(rn),"onUpdate:modelValue":a[0]||(a[0]=i=>Be(rn)?rn.value=i:null)},null,8,["modelValue"]),U(Yh),N(t)?(j(),L(N(t),{key:0})):de("v-if",!0),N(o)?(j(),L(N(o),{key:1,modelValue:N(Ar),"onUpdate:modelValue":a[1]||(a[1]=i=>Be(Ar)?Ar.value=i:null)},null,8,["modelValue"])):de("v-if",!0),N(be).info?(j(),L(zh,{key:2,modelValue:N(ko),"onUpdate:modelValue":a[2]||(a[2]=i=>Be(ko)?ko.value=i:null)},null,8,["modelValue"])):de("v-if",!0)],64))}}),Xh={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ev=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),nv=[ev];function tv(n,t){return j(),$("svg",Xh,nv)}const ov={name:"carbon-settings-adjust",render:tv},sv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},rv=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),av=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),iv=[rv,av];function lv(n,t){return j(),$("svg",sv,iv)}const pv={name:"carbon-information",render:lv},cv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gv=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),uv=[gv];function dv(n,t){return j(),$("svg",cv,uv)}const yv={name:"carbon-download",render:dv},mv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fv=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),hv=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),vv=[fv,hv];function Av(n,t){return j(),$("svg",mv,vv)}const wv={name:"carbon-user-speaker",render:Av},Nv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jv=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),bv=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Iv=[jv,bv];function Bv(n,t){return j(),$("svg",Nv,Iv)}const Dv={name:"carbon-presentation-file",render:Bv},_v={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rv=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Ev=[Rv];function Cv(n,t){return j(),$("svg",_v,Ev)}const xv={name:"carbon-pen",render:Cv},kv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Fv=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Wv=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Sv=[Fv,Wv];function Gv(n,t){return j(),$("svg",kv,Sv)}const Tv={name:"ph-cursor-duotone",render:Gv},Uv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Mv=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Ov=[Mv];function Pv(n,t){return j(),$("svg",Uv,Ov)}const pg={name:"ph-cursor-fill",render:Pv},$v={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jv=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Vv=[Jv];function Lv(n,t){return j(),$("svg",$v,Vv)}const qv={name:"carbon-sun",render:Lv},Hv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Kv=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),zv=[Kv];function Qv(n,t){return j(),$("svg",Hv,zv)}const Yv={name:"carbon-moon",render:Qv},Zv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Xv=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),eA=[Xv];function nA(n,t){return j(),$("svg",Zv,eA)}const tA={name:"carbon-apps",render:nA},oA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},sA=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),rA=[sA];function aA(n,t){return j(),$("svg",oA,rA)}const iA={name:"carbon-arrow-right",render:aA},lA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pA=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),cA=[pA];function gA(n,t){return j(),$("svg",lA,cA)}const uA={name:"carbon-arrow-left",render:gA},dA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yA=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),mA=[yA];function fA(n,t){return j(),$("svg",dA,mA)}const hA={name:"carbon-maximize",render:fA},vA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},AA=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),wA=[AA];function NA(n,t){return j(),$("svg",vA,wA)}const jA={name:"carbon-minimize",render:NA},bA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},IA=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),BA=[IA];function DA(n,t){return j(),$("svg",bA,BA)}const _A={name:"carbon-checkmark",render:DA},RA={class:"select-list"},EA={class:"title"},CA={class:"items"},xA=["onClick"],kA=fe({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(n,{emit:t}){const o=n;F(O);const r=$n(o,"modelValue",t,{passive:!0});return(a,i)=>{const l=_A;return j(),$("div",RA,[e("div",EA,ut(n.title),1),e("div",CA,[(j(!0),$(_e,null,es(n.items,p=>(j(),$("div",{key:p.value,class:We(["item",{active:N(r)===p.value}]),onClick:()=>{var c;r.value=p.value,(c=p.onClick)==null||c.call(p)}},[U(l,{class:We(["text-green-500",{"opacity-0":N(r)!==p.value}])},null,8,["class"]),s(" "+ut(p.display||p.value),1)],10,xA))),128))])])}}});const cg=(n,t)=>{const o=n.__vccOpts||n;for(const[r,a]of t)o[r]=a;return o},FA=cg(kA,[["__scopeId","data-v-7dd0eaca"]]),WA={class:"text-sm"},SA=fe({__name:"Settings",setup(n){F(O);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(o,r)=>(j(),$("div",WA,[U(FA,{modelValue:N(As),"onUpdate:modelValue":r[0]||(r[0]=a=>Be(As)?As.value=a:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),GA={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},TA=fe({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(n,{emit:t}){const o=n;F(O);const r=$n(o,"modelValue",t,{passive:!0}),a=q();return $m(a,()=>{r.value=!1}),(i,l)=>(j(),$("div",{ref_key:"el",ref:a,class:"flex relative"},[e("button",{class:We({disabled:n.disabled}),onClick:l[0]||(l[0]=p=>r.value=!N(r))},[Qe(i.$slots,"button",{class:We({disabled:n.disabled})})],2),(j(),L(lc,null,[N(r)?(j(),$("div",GA,[Qe(i.$slots,"menu")])):de("v-if",!0)],1024))],512))}}),UA={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},ys={__name:"VerticalDivider",setup(n){return F(O),(t,o)=>(j(),$("div",UA))}},MA={render(){return[]}},OA={class:"icon-btn"},PA={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},$A={class:"my-auto"},JA={class:"opacity-50"},VA=fe({__name:"NavControls",props:{persist:{default:!1}},setup(n){const t=n;F(O);const o=ta.smaller("md"),{isFullscreen:r,toggle:a}=Xc,i=_(()=>la.value?`?password=${la.value}`:""),l=_(()=>`/presenter/${He.value}${i.value}`),p=_(()=>`/${He.value}${i.value}`),c=q(),g=()=>{c.value&&eo.value&&c.value.contains(eo.value)&&eo.value.blur()},u=_(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=Wn(),y=Wn();return co(()=>import("./DrawingControls.f8f089d5.js"),["assets/DrawingControls.f8f089d5.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.e203afbf.js"]).then(m=>y.value=m.default),(m,f)=>{const w=jA,A=hA,D=uA,b=iA,I=tA,R=Yv,G=qv,T=pg,k=Tv,z=xv,se=Dv,he=$o("RouterLink"),Ae=wv,Je=yv,Ve=pv,Me=ov;return j(),$("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[e("div",{class:We(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",N(u)]),onMouseleave:g},[N(qn)?de("v-if",!0):(j(),$("button",{key:0,class:"icon-btn",onClick:f[0]||(f[0]=(...ke)=>N(a)&&N(a)(...ke))},[N(r)?(j(),L(w,{key:0})):(j(),L(A,{key:1}))])),e("button",{class:We(["icon-btn",{disabled:!N(zb)}]),onClick:f[1]||(f[1]=(...ke)=>N(gt)&&N(gt)(...ke))},[U(D)],2),e("button",{class:We(["icon-btn",{disabled:!N(Kb)}]),title:"Next",onClick:f[2]||(f[2]=(...ke)=>N(ct)&&N(ct)(...ke))},[U(b)],2),N(qn)?de("v-if",!0):(j(),$("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:f[3]||(f[3]=ke=>N(eg)())},[U(I)])),N(aa)?de("v-if",!0):(j(),$("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:f[4]||(f[4]=ke=>N(ag)())},[N(nr)?(j(),L(R,{key:0})):(j(),L(G,{key:1}))])),U(ys),N(qn)?de("v-if",!0):(j(),$(_e,{key:3},[!N(Pn)&&!N(o)&&N(d)?(j(),$(_e,{key:0},[U(N(d)),U(ys)],64)):de("v-if",!0),N(Pn)?(j(),$("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:f[5]||(f[5]=ke=>wr.value=!N(wr))},[N(wr)?(j(),L(T,{key:0})):(j(),L(k,{key:1,class:"opacity-50"}))])):de("v-if",!0)],64)),!N(be).drawings.presenterOnly&&!N(qn)?(j(),$(_e,{key:4},[e("button",{class:"icon-btn relative",title:"Drawing",onClick:f[6]||(f[6]=ke=>Jn.value=!N(Jn))},[U(z),N(Jn)?(j(),$("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:$e({background:N(Et).color})},null,4)):de("v-if",!0)]),U(ys)],64)):de("v-if",!0),N(qn)?de("v-if",!0):(j(),$(_e,{key:5},[N(Pn)?(j(),L(he,{key:0,to:N(p),class:"icon-btn",title:"Play Mode"},{default:S(()=>[U(se)]),_:1},8,["to"])):de("v-if",!0),N(Lb)?(j(),L(he,{key:1,to:N(l),class:"icon-btn",title:"Presenter Mode"},{default:S(()=>[U(Ae)]),_:1},8,["to"])):de("v-if",!0),de("v-if",!0)],64)),(j(),$(_e,{key:6},[N(be).download?(j(),$("button",{key:0,class:"icon-btn",onClick:f[8]||(f[8]=(...ke)=>N(pa)&&N(pa)(...ke))},[U(Je)])):de("v-if",!0)],64)),!N(Pn)&&N(be).info&&!N(qn)?(j(),$("button",{key:7,class:"icon-btn",onClick:f[9]||(f[9]=ke=>ko.value=!N(ko))},[U(Ve)])):de("v-if",!0),!N(Pn)&&!N(qn)?(j(),L(TA,{key:8},{button:S(()=>[e("button",OA,[U(Me)])]),menu:S(()=>[U(SA)]),_:1})):de("v-if",!0),N(qn)?de("v-if",!0):(j(),L(ys,{key:9})),e("div",PA,[e("div",$A,[s(ut(N(He))+" ",1),e("span",JA,"/ "+ut(N(jg)),1)])]),U(N(MA))],34)],512)}}}),gg={render(){return[]}},ug={render(){return[]}},LA={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},qA=fe({__name:"PresenterMouse",setup(n){return F(O),(t,o)=>{const r=pg;return N(mr).cursor?(j(),$("div",LA,[U(r,{class:"absolute",style:$e({left:`${N(mr).cursor.x}%`,top:`${N(mr).cursor.y}%`})},null,8,["style"])])):de("v-if",!0)}}}),HA=fe({__name:"SlidesShow",props:{context:null},setup(n){F(O),ye(fn,()=>{var o,r;((o=fn.value)==null?void 0:o.meta)&&fn.value.meta.preload!==!1&&(fn.value.meta.__preloaded=!0),((r=jr.value)==null?void 0:r.meta)&&jr.value.meta.preload!==!1&&(jr.value.meta.__preloaded=!0)},{immediate:!0});const t=Wn();return co(()=>import("./DrawingLayer.b3e764e7.js"),[]).then(o=>t.value=o.default),(o,r)=>(j(),$(_e,null,[de(" Global Bottom "),U(N(ug)),de(" Slides "),(j(!0),$(_e,null,es(N(qe),a=>{var i,l;return j(),$(_e,{key:a.path},[((i=a.meta)==null?void 0:i.__preloaded)||a===N(fn)?Ma((j(),L(N(Qa),{key:0,is:a==null?void 0:a.component,clicks:a===N(fn)?N(Fn):0,"clicks-elements":((l=a.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:We(N(za)(a)),route:a,context:n.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Dc,a===N(fn)]]):de("v-if",!0)],64)}),128)),de(" Global Top "),U(N(gg)),N(t)?(j(),L(N(t),{key:0})):de("v-if",!0),N(Pn)?de("v-if",!0):(j(),L(qA,{key:1}))],64))}}),KA=fe({__name:"Play",setup(n){F(O),kh();const t=q();function o(i){var l;Tl.value||((l=i.target)==null?void 0:l.id)==="slide-container"&&(i.screenX/window.innerWidth>.6?ct():gt())}Zb(t);const r=_(()=>$f.value||Tl.value);Wn();const a=Wn();return co(()=>import("./DrawingControls.f8f089d5.js"),["assets/DrawingControls.f8f089d5.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.e203afbf.js"]).then(i=>a.value=i.default),(i,l)=>(j(),$(_e,null,[e("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:$e(N(xc))},[U(lg,{class:"w-full h-full",style:$e({background:"var(--slidev-slide-container-background, black)"}),width:N(ni)?N(Wt).width.value:void 0,scale:N(As),onPointerdown:o},{default:S(()=>[U(HA,{context:"slide"})]),controls:S(()=>[e("div",{class:We(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[N(r)?"opacity-100 right-0":"opacity-0 p-2",N(qo)?"pointer-events-none":""]])},[U(VA,{class:"m-auto",persist:N(r)},null,8,["persist"])],2),!N(be).drawings.presenterOnly&&!N(qn)&&N(a)?(j(),L(N(a),{key:0,class:"ml-0"})):de("v-if",!0)]),_:1},8,["style","width","scale"]),de("v-if",!0)],4),U(Zh)],64))}});function dg(n){const t=_(()=>n.value.path),o=_(()=>qe.length-1),r=_(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),a=_(()=>or(r.value)),i=_(()=>qe.find(y=>y.path===`${r.value}`)),l=_(()=>{var y,m,f;return(f=(m=(y=i.value)==null?void 0:y.meta)==null?void 0:m.slide)==null?void 0:f.id}),p=_(()=>{var y,m;return(m=(y=i.value)==null?void 0:y.meta)==null?void 0:m.layout}),c=_(()=>qe.find(y=>y.path===`${Math.min(qe.length,r.value+1)}`)),g=_(()=>qe.filter(y=>{var m,f;return(f=(m=y.meta)==null?void 0:m.slide)==null?void 0:f.title}).reduce((y,m)=>(ti(y,m),y),[])),u=_(()=>oi(g.value,i.value)),d=_(()=>si(u.value));return{route:n,path:t,total:o,currentPage:r,currentPath:a,currentRoute:i,currentSlideId:l,currentLayout:p,nextRoute:c,rawTree:g,treeWithActiveStatuses:u,tree:d}}function yg(n,t,o){const r=q(0);en(()=>{wn.afterEach(async()=>{await en(),r.value+=1})});const a=_(()=>{var c,g;return r.value,((g=(c=t.value)==null?void 0:c.meta)==null?void 0:g.__clicksElements)||[]}),i=_(()=>{var c,g,u;return+((u=(g=(c=t.value)==null?void 0:c.meta)==null?void 0:g.clicks)!=null?u:a.value.length)}),l=_(()=>o.value<qe.length-1||n.value<i.value),p=_(()=>o.value>1||n.value>0);return{clicks:n,clicksElements:a,clicksTotal:i,hasNext:l,hasPrev:p}}const zA=["id"],Kl=fe({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(n,{emit:t}){const o=n,r=$n(o,"clicksElements",t),a=_(()=>({height:`${Cc}px`,width:`${Ft}px`})),i=Wn();co(()=>import("./DrawingPreview.b1e39d6f.js"),[]).then(g=>i.value=g.default);const l=_(()=>o.clicks),p=yg(l,o.nav.currentRoute,o.nav.currentPage),c=_(()=>`${o.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return hn(O,Se({nav:{...o.nav,...p},configs:be,themeConfigs:_(()=>be.themeConfig)})),(g,u)=>{var d;return j(),$("div",{id:N(c),class:"slide-container",style:$e(N(a))},[U(N(ug)),U(N(Qa),{is:(d=n.route)==null?void 0:d.component,"clicks-elements":N(r),"onUpdate:clicks-elements":u[0]||(u[0]=y=>Be(r)?r.value=y:null),clicks:N(l),"clicks-disabled":!1,class:We(N(za)(n.route)),route:n.route},null,8,["is","clicks-elements","clicks","class","route"]),N(i)?(j(),L(N(i),{key:0,page:+n.route.path},null,8,["page"])):de("v-if",!0),U(N(gg))],12,zA)}}}),QA=fe({__name:"PrintSlide",props:{route:null},setup(n){var i;const t=n;F(O);const o=Se(((i=t.route.meta)==null?void 0:i.__clicksElements)||[]),r=_(()=>t.route),a=dg(r);return(l,p)=>(j(),$(_e,null,[U(Kl,{"clicks-elements":o,"onUpdate:clicks-elements":p[0]||(p[0]=c=>Be(o)?o.value=c:null),clicks:0,nav:N(a),route:N(r)},null,8,["clicks-elements","nav","route"]),N(Fo)?de("v-if",!0):(j(!0),$(_e,{key:0},es(o.length,c=>(j(),L(Kl,{key:c,clicks:c,nav:N(a),route:N(r)},null,8,["clicks","nav","route"]))),128))],64))}}),YA={id:"print-content"},ZA=fe({__name:"PrintContainer",props:{width:null},setup(n){const t=n;F(O);const o=_(()=>t.width),r=_(()=>t.width/lt),a=_(()=>o.value/r.value),i=_(()=>a.value<lt?o.value/Ft:r.value*lt/Ft),l=qe.slice(0,-1),p=_(()=>({"select-none":!be.selectable,"slidev-code-line-numbers":be.lineNumbers}));return hn(Ec,i),(c,g)=>(j(),$("div",{id:"print-container",class:We(N(p))},[e("div",YA,[(j(!0),$(_e,null,es(N(l),u=>(j(),L(QA,{key:u.path,route:u},null,8,["route"]))),128))]),Qe(c.$slots,"controls")],2))}});const XA=fe({__name:"Print",setup(n){F(O);const t=Rt.canvasWidth,o=Math.round(t/Rt.aspectRatio)+1;function r(a,{slots:i}){if(i.default)return vn("style",i.default())}return Xo(()=>{ni?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(a,i)=>(j(),$(_e,null,[U(r,null,{default:S(()=>[s(" @page { size: "+ut(N(t))+"px "+ut(o)+"px; margin: 0px; } ",1)]),_:1}),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:$e(N(xc))},[U(ZA,{class:"w-full h-full",style:$e({background:"var(--slidev-slide-container-background, black)"}),width:N(Wt).width.value},null,8,["style","width"])],4)],64))}});const ew={class:"slidev-layout end"},nw={__name:"end",setup(n){return F(O),(t,o)=>(j(),$("div",ew," END "))}},mg=cg(nw,[["__scopeId","data-v-ab32435f"]]);function zl(n){return n.startsWith("/")?"/major-migrations-made-easy-slides/"+n.slice(1):n}function Ya(n,t=!1){const o=n&&n[0]==="#"&&n.startsWith("rgb"),r={background:o?n:void 0,color:n&&!o?"white":void 0,backgroundImage:o?void 0:n?t?`linear-gradient(#0005, #0008), url(${zl(n)})`:`url("${zl(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return r.background||delete r.background,r}const tr=fe({__name:"image",props:{image:{type:String}},setup(n){const t=n;F(O);const o=_(()=>Ya(t.image));return(r,a)=>(j(),$("div",{class:"slidev-layout w-full h-full",style:$e(N(o))},[Qe(r.$slots,"default")],4))}}),tw={__name:"1",setup(n){const t={layout:"image",class:"text-center",highlighter:"shiki",css:"unocss",colorSchema:"light",lineNumbers:!0,defaults:{layout:"default"},canvasWidth:1280,image:"/cover-baselone.png"};return F(O),(o,r)=>(j(),L(tr,te(ne(t)),null,16))}},ow={__name:"2",setup(n){const t={layout:"image",image:"/title-baselone.png"};return F(O),(o,r)=>(j(),L(tr,te(ne(t)),null,16))}},sw={class:"grid grid-cols-2 w-full h-full"},uo=fe({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(n){const t=n;F(O);const o=_(()=>Ya(t.image));return(r,a)=>(j(),$("div",sw,[e("div",{class:We(["slidev-layout default",t.class])},[Qe(r.$slots,"default")],2),e("div",{class:"w-full w-full",style:$e(N(o))},null,4)]))}}),rw=e("h1",null,[e("s",null,"Java Consultant")],-1),aw=e("h1",null,"Time traveler",-1),iw=e("h2",null,"Migrate outdated technology",-1),lw=e("br",null,null,-1),pw=e("h2",null,"Switch assignments often",-1),cw=e("br",null,null,-1),gw=e("h2",null,"Focus on JVM & Automation",-1),uw={__name:"3",setup(n){const t={layout:"image-right",image:"https://images.unsplash.com/photo-1615053835081-4218b100dae9?h=900&w=800"};return F(O),(o,r)=>(j(),L(uo,te(ne(t)),{default:S(()=>[rw,aw,iw,lw,pw,cw,gw]),_:1},16))}},dw=e("h1",null,"Automate migrations",-1),yw=e("h3",null,"More fun to work with",-1),mw=e("br",null,null,-1),fw=e("h3",null,"Adopted with ease",-1),hw=e("br",null,null,-1),vw=e("h3",null,"Make old feel like new again",-1),Aw=e("br",null,null,-1),ww=e("h3",null,"JVM & language improvements",-1),Nw={__name:"4",setup(n){const t={layout:"image-right",image:"https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?fit=crop&h=900&w=800"};return F(O),(o,r)=>(j(),L(uo,te(ne(t)),{default:S(()=>[dw,yw,mw,fw,hw,vw,Aw,ww]),_:1},16))}},jw=fe({__name:"Transform",props:{scale:null,origin:null},setup(n){const t=n;F(O);const o=_(()=>{const r=[];return t.scale!=null&&r.push(`scale(${t.scale||1})`),{transform:r.join(" "),"transform-origin":t.origin||"top left"}});return(r,a)=>(j(),$("div",{style:$e(N(o))},[Qe(r.$slots,"default")],4))}}),bw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Iw=e("path",{fill:"currentColor",d:"M11.92 24.94A12.76 12.76 0 0 0 24.76 12.1v-.59A9.4 9.4 0 0 0 27 9.18a9.31 9.31 0 0 1-2.59.71a4.56 4.56 0 0 0 2-2.5a8.89 8.89 0 0 1-2.86 1.1a4.52 4.52 0 0 0-7.7 4.11a12.79 12.79 0 0 1-9.3-4.71a4.51 4.51 0 0 0 1.4 6a4.47 4.47 0 0 1-2-.56v.05a4.53 4.53 0 0 0 3.55 4.45a4.53 4.53 0 0 1-2 .08A4.51 4.51 0 0 0 11.68 21a9.05 9.05 0 0 1-5.61 2A9.77 9.77 0 0 1 5 22.91a12.77 12.77 0 0 0 6.92 2"},null,-1),Bw=[Iw];function Dw(n,t){return j(),$("svg",bw,Bw)}const _w={name:"carbon-logo-twitter",render:Dw},Rw=["data-waitfor"],Ew={key:0,class:"w-30 h-30 my-10px bg-gray-400 bg-opacity-10 rounded-lg flex opacity-50"},Cw={class:"m-auto animate-pulse text-4xl"},xw={key:0},kw=fe({__name:"Tweet",props:{id:null,scale:null,conversation:null},setup(n){var p;const t=n;F(O);const o=q(),r=Xn(),a=q(!1),i=q(!1);async function l(){const c=await window.twttr.widgets.createTweet(t.id.toString(),o.value,{theme:nr.value?"dark":"light",conversation:t.conversation||"none"});a.value=!0,c===void 0&&(i.value=!0)}return(p=window==null?void 0:window.twttr)!=null&&p.widgets?yt(l):D8("https://platform.twitter.com/widgets.js",()=>{r.isMounted?l():yt(l,r)},{async:!0}),(c,g)=>{const u=_w,d=jw;return j(),L(d,{scale:n.scale||1},{default:S(()=>[e("div",{ref_key:"tweet",ref:o,class:"tweet","data-waitfor":i.value?"":"iframe"},[!a.value||i.value?(j(),$("div",Ew,[e("div",Cw,[U(u),i.value?(j(),$("span",xw,'Could not load tweet with id="'+ut(t.id)+'"',1)):de("v-if",!0)])])):de("v-if",!0)],8,Rw)]),_:1},8,["scale"])}}}),Fw={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},ts=fe({__name:"two-cols",props:{class:{type:String}},setup(n){const t=n;return F(O),(o,r)=>(j(),$("div",Fw,[e("div",{class:We(["col-left",t.class])},[Qe(o.$slots,"default")],2),e("div",{class:We(["col-right",t.class])},[Qe(o.$slots,"right")],2)]))}}),Ww=e("h1",null,"Types of migrations",-1),Sw=e("ul",null,[e("li",null,[e("p",null,"Java 8 \u2192 11 \u2192 17+")]),e("li",null,[e("p",null,"Spring Boot 1.x \u2192 2.x \u2192 3.x")]),e("li",null,[e("p",null,"JUnit 4 \u2192 JUnit Jupiter \u2192 AssertJ")]),e("li",null,[e("p",null,"Log4j \u2192 SLF4J")]),e("li",null,[e("p",null,"Javax \u2192 Jakarta")]),e("li",null,[e("p",null,"Zip Slip \u2192 Log4Shell \u2192 Spring4Shell \u2192 \u2026")])],-1),Gw={__name:"5",setup(n){const t={layout:"two-cols"};return F(O),(o,r)=>{const a=kw;return j(),L(ts,te(ne(t)),{right:S(i=>[U(a,{id:"1528259740224077824"})]),default:S(()=>[Ww,Sw]),_:1},16)}}},Tw="/major-migrations-made-easy-slides/rewrite-logo.png",Uw={class:"slidev-layout center h-full grid place-content-center"},Mw={class:"my-auto"},fg={__name:"center",setup(n){return F(O),(t,o)=>(j(),$("div",Uw,[e("div",Mw,[Qe(t.$slots,"default")])]))}},Ow=e("p",null,[e("img",{src:Tw,alt:"OpenRewrite"})],-1),Pw={__name:"6",setup(n){const t={layout:"center"};return F(O),(o,r)=>(j(),L(fg,te(ne(t)),{default:S(()=>[Ow]),_:1},16))}},$w="/major-migrations-made-easy-slides/netflix-logo-2015.svg",Jw="/major-migrations-made-easy-slides/slf4j-logo.png",Vw=e("h1",null,"Origin",-1),Lw=e("ul",null,[e("li",null,[e("p",null,"Internal logging framework \u2192 SLF4J")]),e("li",null,[e("p",null,"Perfect transformation required")]),e("li",null,[e("p",null,"Abstract Syntax Tree parser & manipulation")]),e("li",null,[e("p",null,"Produce minimal changes")])],-1),qw=e("p",null,[e("img",{src:$w,alt:"Netflix"})],-1),Hw=e("p",null,[e("br"),e("br"),e("br"),e("br")],-1),Kw=e("p",null,[e("img",{src:Jw,alt:"Netflix"})],-1),zw={__name:"7",setup(n){const t={layout:"two-cols"};return F(O),(o,r)=>(j(),L(ts,te(ne(t)),{right:S(a=>[qw,Hw,Kw]),default:S(()=>[Vw,Lw]),_:1},16))}},Qw=e("h1",null,"Broader application",-1),Yw=e("ul",null,[e("li",null,[e("p",null,"Spinnaker onboarding stalled")]),e("li",null,[e("p",null,"Struggle with outdated libraries & frameworks"),e("ul",null,[e("li",null,[e("p",null,"Spring Boot 1.x \u2192 2.x")]),e("li",null,[e("p",null,"JUnit 4 \u2192 JUnit 5")])])]),e("li",null,[e("p",null,"Apache licensed")])],-1),Zw={__name:"8",setup(n){const t={layout:"image-right",image:"https://images.unsplash.com/photo-1518623001395-125242310d0c?fit=crop&h=900&w=800"};return F(O),(o,r)=>(j(),L(uo,te(ne(t)),{default:S(()=>[Qw,Yw]),_:1},16))}},Xw="/major-migrations-made-easy-slides/tech-logos.png",e5=e("h1",null,"Early focus on JVM",-1),n5=e("br",null,null,-1),t5=e("h2",null,"Search & transformation",-1),o5=e("br",null,null,-1),s5=e("h2",null,"Refactoring ecosystem",-1),r5=e("p",null,[e("img",{src:Xw,alt:"Technologies"})],-1),a5={__name:"9",setup(n){const t={layout:"two-cols"};return F(O),(o,r)=>(j(),L(ts,te(ne(t)),{right:S(a=>[r5]),default:S(()=>[e5,n5,t5,o5,s5]),_:1},16))}},i5="/major-migrations-made-easy-slides/ast.png",l5=e("h1",null,"Abstract syntax tree",-1),p5=e("br",null,null,-1),c5=e("h2",null,"Type attribution",-1),g5=e("br",null,null,-1),u5=e("h2",null,"Format preservation",-1),d5=e("p",null,[e("img",{src:i5,alt:"AST"})],-1),y5={__name:"10",setup(n){const t={layout:"two-cols"};return F(O),(o,r)=>(j(),L(ts,te(ne(t)),{right:S(a=>[d5]),default:S(()=>[l5,p5,c5,g5,u5]),_:1},16))}};function Ql(n){return n.startsWith("/")?"/major-migrations-made-easy-slides/"+n.slice(1):n}function m5(n,t=!1){const o=n&&["#","rgb","hsl"].some(a=>n.indexOf(a)===0),r={background:o?n:void 0,color:n&&!o?"white":void 0,backgroundImage:o?void 0:n?t?`linear-gradient(#0005, #0008), url(${Ql(n)})`:`url("${Ql(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return r.background||delete r.background,r}const f5={class:"my-auto w-full"},Za=fe({__name:"cover",props:{background:{default:""}},setup(n){const t=n;F(O);const o=_(()=>m5(t.background,!0));return(r,a)=>(j(),$("div",{class:"slidev-layout cover",style:$e(N(o))},[e("div",f5,[Qe(r.$slots,"default")])],4))}}),h5=e("h1",null,"Recipes",-1),v5=e("br",null,null,-1),A5=e("h2",null,"Search & Refactor",-1),w5=e("br",null,null,-1),N5=e("h2",null,"Composition",-1),j5={__name:"11",setup(n){const t={layout:"cover",background:"https://images.unsplash.com/photo-1560961911-ba7ef651a56c?fit=crop&h=900&w=800"};return F(O),(o,r)=>(j(),L(Za,te(ne(t)),{default:S(()=>[h5,v5,A5,w5,N5]),_:1},16))}},b5=e("h1",null,"Visitors",-1),I5=e("br",null,null,-1),B5=e("h2",null,"Match & modify elements",-1),D5={__name:"12",setup(n){const t={layout:"image-right",image:"https://images.unsplash.com/photo-1533557213878-99cda20b1400?fit=crop&h=900&w=800"};return F(O),(o,r)=>(j(),L(uo,te(ne(t)),{default:S(()=>[b5,I5,B5]),_:1},16))}},_5=e("h1",null,"Modules",-1),R5=e("br",null,null,-1),E5=e("h2",null,"Specific purpose",-1),C5=e("br",null,null,-1),x5=e("h2",null,"Complete migrations",-1),k5={__name:"13",setup(n){const t={layout:"cover",background:"https://images.unsplash.com/photo-1663173775686-d1529e901713?fit=crop&h=900&w=800"};return F(O),(o,r)=>(j(),L(Za,te(ne(t)),{default:S(()=>[_5,R5,E5,C5,x5]),_:1},16))}},F5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},W5=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),S5=[W5];function G5(n,t){return j(),$("svg",F5,S5)}const T5={name:"ph-clipboard",render:G5},U5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},M5=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),O5=[M5];function P5(n,t){return j(),$("svg",U5,O5)}const $5={name:"ph-check-circle",render:P5};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function hg(n){return typeof n>"u"||n===null}function J5(n){return typeof n=="object"&&n!==null}function V5(n){return Array.isArray(n)?n:hg(n)?[]:[n]}function L5(n,t){var o,r,a,i;if(t)for(i=Object.keys(t),o=0,r=i.length;o<r;o+=1)a=i[o],n[a]=t[a];return n}function q5(n,t){var o="",r;for(r=0;r<t;r+=1)o+=n;return o}function H5(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var K5=hg,z5=J5,Q5=V5,Y5=q5,Z5=H5,X5=L5,Xa={isNothing:K5,isObject:z5,toArray:Q5,repeat:Y5,isNegativeZero:Z5,extend:X5};function vg(n,t){var o="",r=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(o+='in "'+n.mark.name+'" '),o+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!t&&n.mark.snippet&&(o+=`

`+n.mark.snippet),r+" "+o):r}function Ko(n,t){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=t,this.message=vg(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Ko.prototype=Object.create(Error.prototype);Ko.prototype.constructor=Ko;Ko.prototype.toString=function(t){return this.name+": "+vg(this,t)};var Dt=Ko,e3=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],n3=["scalar","sequence","mapping"];function t3(n){var t={};return n!==null&&Object.keys(n).forEach(function(o){n[o].forEach(function(r){t[String(r)]=o})}),t}function o3(n,t){if(t=t||{},Object.keys(t).forEach(function(o){if(e3.indexOf(o)===-1)throw new Dt('Unknown option "'+o+'" is met in definition of "'+n+'" YAML type.')}),this.options=t,this.tag=n,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(o){return o},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=t3(t.styleAliases||null),n3.indexOf(this.kind)===-1)throw new Dt('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var tn=o3;function Yl(n,t){var o=[];return n[t].forEach(function(r){var a=o.length;o.forEach(function(i,l){i.tag===r.tag&&i.kind===r.kind&&i.multi===r.multi&&(a=l)}),o[a]=r}),o}function s3(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,o;function r(a){a.multi?(n.multi[a.kind].push(a),n.multi.fallback.push(a)):n[a.kind][a.tag]=n.fallback[a.tag]=a}for(t=0,o=arguments.length;t<o;t+=1)arguments[t].forEach(r);return n}function ia(n){return this.extend(n)}ia.prototype.extend=function(t){var o=[],r=[];if(t instanceof tn)r.push(t);else if(Array.isArray(t))r=r.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(o=o.concat(t.implicit)),t.explicit&&(r=r.concat(t.explicit));else throw new Dt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(i){if(!(i instanceof tn))throw new Dt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(i.loadKind&&i.loadKind!=="scalar")throw new Dt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(i.multi)throw new Dt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),r.forEach(function(i){if(!(i instanceof tn))throw new Dt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var a=Object.create(ia.prototype);return a.implicit=(this.implicit||[]).concat(o),a.explicit=(this.explicit||[]).concat(r),a.compiledImplicit=Yl(a,"implicit"),a.compiledExplicit=Yl(a,"explicit"),a.compiledTypeMap=s3(a.compiledImplicit,a.compiledExplicit),a};var r3=ia,a3=new tn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),i3=new tn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),l3=new tn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),p3=new r3({explicit:[a3,i3,l3]});function c3(n){if(n===null)return!0;var t=n.length;return t===1&&n==="~"||t===4&&(n==="null"||n==="Null"||n==="NULL")}function g3(){return null}function u3(n){return n===null}var d3=new tn("tag:yaml.org,2002:null",{kind:"scalar",resolve:c3,construct:g3,predicate:u3,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function y3(n){if(n===null)return!1;var t=n.length;return t===4&&(n==="true"||n==="True"||n==="TRUE")||t===5&&(n==="false"||n==="False"||n==="FALSE")}function m3(n){return n==="true"||n==="True"||n==="TRUE"}function f3(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var h3=new tn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:y3,construct:m3,predicate:f3,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function v3(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function A3(n){return 48<=n&&n<=55}function w3(n){return 48<=n&&n<=57}function N3(n){if(n===null)return!1;var t=n.length,o=0,r=!1,a;if(!t)return!1;if(a=n[o],(a==="-"||a==="+")&&(a=n[++o]),a==="0"){if(o+1===t)return!0;if(a=n[++o],a==="b"){for(o++;o<t;o++)if(a=n[o],a!=="_"){if(a!=="0"&&a!=="1")return!1;r=!0}return r&&a!=="_"}if(a==="x"){for(o++;o<t;o++)if(a=n[o],a!=="_"){if(!v3(n.charCodeAt(o)))return!1;r=!0}return r&&a!=="_"}if(a==="o"){for(o++;o<t;o++)if(a=n[o],a!=="_"){if(!A3(n.charCodeAt(o)))return!1;r=!0}return r&&a!=="_"}}if(a==="_")return!1;for(;o<t;o++)if(a=n[o],a!=="_"){if(!w3(n.charCodeAt(o)))return!1;r=!0}return!(!r||a==="_")}function j3(n){var t=n,o=1,r;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),r=t[0],(r==="-"||r==="+")&&(r==="-"&&(o=-1),t=t.slice(1),r=t[0]),t==="0")return 0;if(r==="0"){if(t[1]==="b")return o*parseInt(t.slice(2),2);if(t[1]==="x")return o*parseInt(t.slice(2),16);if(t[1]==="o")return o*parseInt(t.slice(2),8)}return o*parseInt(t,10)}function b3(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Xa.isNegativeZero(n)}var I3=new tn("tag:yaml.org,2002:int",{kind:"scalar",resolve:N3,construct:j3,predicate:b3,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),B3=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function D3(n){return!(n===null||!B3.test(n)||n[n.length-1]==="_")}function _3(n){var t,o;return t=n.replace(/_/g,"").toLowerCase(),o=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:o*parseFloat(t,10)}var R3=/^[-+]?[0-9]+e/;function E3(n,t){var o;if(isNaN(n))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Xa.isNegativeZero(n))return"-0.0";return o=n.toString(10),R3.test(o)?o.replace("e",".e"):o}function C3(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Xa.isNegativeZero(n))}var x3=new tn("tag:yaml.org,2002:float",{kind:"scalar",resolve:D3,construct:_3,predicate:C3,represent:E3,defaultStyle:"lowercase"}),k3=p3.extend({implicit:[d3,h3,I3,x3]}),F3=k3,Ag=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),wg=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function W3(n){return n===null?!1:Ag.exec(n)!==null||wg.exec(n)!==null}function S3(n){var t,o,r,a,i,l,p,c=0,g=null,u,d,y;if(t=Ag.exec(n),t===null&&(t=wg.exec(n)),t===null)throw new Error("Date resolve error");if(o=+t[1],r=+t[2]-1,a=+t[3],!t[4])return new Date(Date.UTC(o,r,a));if(i=+t[4],l=+t[5],p=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(u=+t[10],d=+(t[11]||0),g=(u*60+d)*6e4,t[9]==="-"&&(g=-g)),y=new Date(Date.UTC(o,r,a,i,l,p,c)),g&&y.setTime(y.getTime()-g),y}function G3(n){return n.toISOString()}var T3=new tn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:W3,construct:S3,instanceOf:Date,represent:G3});function U3(n){return n==="<<"||n===null}var M3=new tn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:U3}),ei=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function O3(n){if(n===null)return!1;var t,o,r=0,a=n.length,i=ei;for(o=0;o<a;o++)if(t=i.indexOf(n.charAt(o)),!(t>64)){if(t<0)return!1;r+=6}return r%8===0}function P3(n){var t,o,r=n.replace(/[\r\n=]/g,""),a=r.length,i=ei,l=0,p=[];for(t=0;t<a;t++)t%4===0&&t&&(p.push(l>>16&255),p.push(l>>8&255),p.push(l&255)),l=l<<6|i.indexOf(r.charAt(t));return o=a%4*6,o===0?(p.push(l>>16&255),p.push(l>>8&255),p.push(l&255)):o===18?(p.push(l>>10&255),p.push(l>>2&255)):o===12&&p.push(l>>4&255),new Uint8Array(p)}function $3(n){var t="",o=0,r,a,i=n.length,l=ei;for(r=0;r<i;r++)r%3===0&&r&&(t+=l[o>>18&63],t+=l[o>>12&63],t+=l[o>>6&63],t+=l[o&63]),o=(o<<8)+n[r];return a=i%3,a===0?(t+=l[o>>18&63],t+=l[o>>12&63],t+=l[o>>6&63],t+=l[o&63]):a===2?(t+=l[o>>10&63],t+=l[o>>4&63],t+=l[o<<2&63],t+=l[64]):a===1&&(t+=l[o>>2&63],t+=l[o<<4&63],t+=l[64],t+=l[64]),t}function J3(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var V3=new tn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:O3,construct:P3,predicate:J3,represent:$3}),L3=Object.prototype.hasOwnProperty,q3=Object.prototype.toString;function H3(n){if(n===null)return!0;var t=[],o,r,a,i,l,p=n;for(o=0,r=p.length;o<r;o+=1){if(a=p[o],l=!1,q3.call(a)!=="[object Object]")return!1;for(i in a)if(L3.call(a,i))if(!l)l=!0;else return!1;if(!l)return!1;if(t.indexOf(i)===-1)t.push(i);else return!1}return!0}function K3(n){return n!==null?n:[]}var z3=new tn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:H3,construct:K3}),Q3=Object.prototype.toString;function Y3(n){if(n===null)return!0;var t,o,r,a,i,l=n;for(i=new Array(l.length),t=0,o=l.length;t<o;t+=1){if(r=l[t],Q3.call(r)!=="[object Object]"||(a=Object.keys(r),a.length!==1))return!1;i[t]=[a[0],r[a[0]]]}return!0}function Z3(n){if(n===null)return[];var t,o,r,a,i,l=n;for(i=new Array(l.length),t=0,o=l.length;t<o;t+=1)r=l[t],a=Object.keys(r),i[t]=[a[0],r[a[0]]];return i}var X3=new tn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Y3,construct:Z3}),eN=Object.prototype.hasOwnProperty;function nN(n){if(n===null)return!0;var t,o=n;for(t in o)if(eN.call(o,t)&&o[t]!==null)return!1;return!0}function tN(n){return n!==null?n:{}}var oN=new tn("tag:yaml.org,2002:set",{kind:"mapping",resolve:nN,construct:tN});F3.extend({implicit:[T3,M3],explicit:[V3,z3,X3,oN]});function Zl(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"\x85":n===95?"\xA0":n===76?"\u2028":n===80?"\u2029":""}var sN=new Array(256),rN=new Array(256);for(var $t=0;$t<256;$t++)sN[$t]=Zl($t)?1:0,rN[$t]=Zl($t);function aN(n){return Array.from(new Set(n))}function Xl(...n){let t,o,r;n.length===1?(t=0,r=1,[o]=n):[t,o,r=1]=n;const a=[];let i=t;for(;i<o;)a.push(i),i+=r||1;return a}function iN(n,t){if(!t||t==="all"||t==="*")return Xl(1,n+1);const o=[];for(const r of t.split(/[,;]/g))if(!r.includes("-"))o.push(+r);else{const[a,i]=r.split("-",2);o.push(...Xl(+a,i?+i+1:n+1))}return aN(o).filter(r=>r<=n).sort((r,a)=>r-a)}const lN=["title"],Pe=fe({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(n){const t=n;F(O);const o=F(Ro),r=F(Bt),a=F(Eo);function i(d=5){const y=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",f=m.length;for(let w=0;w<d;w++)y.push(m.charAt(Math.floor(Math.random()*f)));return y.join("")}const l=q(),p=Xn();yt(()=>{const d=t.at==null?r==null?void 0:r.value.length:t.at,y=_(()=>a!=null&&a.value?t.ranges.length-1:Math.min(Math.max(0,((o==null?void 0:o.value)||0)-(d||0)),t.ranges.length-1)),m=_(()=>t.ranges[y.value]||"");if(t.ranges.length>=2&&!(a!=null&&a.value)){const f=i(),w=Qy(t.ranges.length-1).map(A=>f+A);r!=null&&r.value&&(r.value.push(...w),Ys(()=>w.forEach(A=>Kr(r.value,A)),p))}Xo(()=>{if(!l.value)return;const w=l.value.querySelector(".shiki-dark")?Array.from(l.value.querySelectorAll(".shiki")):[l.value];for(const A of w){const D=Array.from(A.querySelectorAll(".line")),b=iN(D.length,m.value);if(D.forEach((I,R)=>{const G=b.includes(R+1);I.classList.toggle(jt,!0),I.classList.toggle("highlighted",G),I.classList.toggle("dishonored",!G)}),t.maxHeight){const I=A.querySelector(".line.highlighted");I&&I.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:g}=Zm();function u(){var y,m;const d=(m=(y=l.value)==null?void 0:y.querySelector(".slidev-code"))==null?void 0:m.textContent;d&&g(d)}return(d,y)=>{const m=$5,f=T5;return j(),$("div",{ref_key:"el",ref:l,class:"slidev-code-wrapper relative group",style:$e({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[Qe(d.$slots,"default"),N(be).codeCopy?(j(),$("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:N(c)?"Copied":"Copy",onClick:y[0]||(y[0]=w=>u())},[N(c)?(j(),L(m,{key:0,class:"p-2 w-8 h-8"})):(j(),L(f,{key:1,class:"p-2 w-8 h-8"}))],8,lN)):de("v-if",!0)],4)}}}),pN={class:"slidev-layout default"},Ge={__name:"default",setup(n){return F(O),(t,o)=>(j(),$("div",pN,[Qe(t.$slots,"default")]))}},cN=e("h1",null,"JUnit 5 recipe",-1),gN=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#429988"}},"type"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"specs.openrewrite.org/v1beta/recipe")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#429988"}},"name"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#429988"}},"recipeList"),e("span",{style:{color:"#858585"}},":")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#429988"}},"org.openrewrite.java.ChangeType"),e("span",{style:{color:"#858585"}},":")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#429988"}},"oldFullyQualifiedTypeName"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"org.junit.Test")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#429988"}},"newFullyQualifiedTypeName"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"org.junit.jupiter.api.Test")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"org.openrewrite.java.testing.junit5.AssertToAssertions")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"org.openrewrite.java.testing.junit5.StaticImports")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"org.openrewrite.java.testing.junit5.ExpectedExceptionToAssertThrows")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"\u2026")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#2F8A89"}},"type"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"specs.openrewrite.org/v1beta/recipe")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#2F8A89"}},"name"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#2F8A89"}},"recipeList"),e("span",{style:{color:"#8E8F8B"}},":")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#2F8A89"}},"org.openrewrite.java.ChangeType"),e("span",{style:{color:"#8E8F8B"}},":")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#2F8A89"}},"oldFullyQualifiedTypeName"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"org.junit.Test")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#2F8A89"}},"newFullyQualifiedTypeName"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"org.junit.jupiter.api.Test")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"org.openrewrite.java.testing.junit5.AssertToAssertions")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"org.openrewrite.java.testing.junit5.StaticImports")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"org.openrewrite.java.testing.junit5.ExpectedExceptionToAssertThrows")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"\u2026")])])])],-1),uN={__name:"14",setup(n){const t={layout:"default"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[cN,U(a,Ne({},{ranges:["1-6","7-"]}),{default:S(()=>[gN]),_:1},16)]),_:1},16)}}},dN={class:"slidev-layout statement"},yN={class:"my-auto"},mN={__name:"statement",setup(n){return F(O),(t,o)=>(j(),$("div",dN,[e("div",yN,[Qe(t.$slots,"default")])]))}},fN=e("h1",null,"Large migrations in",-1),hN=e("h1",null,"small reusable steps",-1),vN={__name:"15",setup(n){const t={layout:"statement"};return F(O),(o,r)=>(j(),L(mN,te(ne(t)),{default:S(()=>[fN,hN]),_:1},16))}},AN=e("h1",null,"JUnit 5 imports",-1),wN=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -1,19 +1,20 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," package org.springframework.samples.petclinic.owner;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-import static org.junit.Assert.assertEquals;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-import org.junit.Before;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-import org.junit.Test;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-import org.junit.runner.RunWith;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+import static org.junit.jupiter.api.Assertions.assertEquals;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+import static org.junit.jupiter.api.Assertions.assertThrows;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+import org.junit.jupiter.api.BeforeEach;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+import org.junit.jupiter.api.Test;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+import org.junit.jupiter.api.extension.ExtendWith;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," import org.mockito.Mock;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," import org.mockito.Mockito;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-import org.mockito.runners.MockitoJUnitRunner;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+import org.mockito.junit.jupiter.MockitoExtension;")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -23,7 +24,7 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-@RunWith(MockitoJUnitRunner.class)")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+@ExtendWith(MockitoExtension.class)")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," public class PetTypeFormatterTests {")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -1,19 +1,20 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," package org.springframework.samples.petclinic.owner;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-import static org.junit.Assert.assertEquals;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-import org.junit.Before;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-import org.junit.Test;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-import org.junit.runner.RunWith;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+import static org.junit.jupiter.api.Assertions.assertEquals;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+import static org.junit.jupiter.api.Assertions.assertThrows;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+import org.junit.jupiter.api.BeforeEach;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+import org.junit.jupiter.api.Test;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+import org.junit.jupiter.api.extension.ExtendWith;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," import org.mockito.Mock;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," import org.mockito.Mockito;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-import org.mockito.runners.MockitoJUnitRunner;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+import org.mockito.junit.jupiter.MockitoExtension;")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -23,7 +24,7 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-@RunWith(MockitoJUnitRunner.class)")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+@ExtendWith(MockitoExtension.class)")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," public class PetTypeFormatterTests {")])])])],-1),NN={__name:"16",setup(n){const t={layout:"default"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[AN,U(a,Ne({},{ranges:["5-15,18-19,22-23"]}),{default:S(()=>[wN]),_:1},16)]),_:1},16)}}},jN=e("h1",null,"JUnit 5 tests",-1),bN=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"index f332257..1d5e072 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"---"),e("span",{style:{color:"#FDAEB7"}}," a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"+++"),e("span",{style:{color:"#85E89D"}}," b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -31,13 +32,13 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#DBD7CA"}}," public class PetTypeFormatterTests {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-    @Test(expected = ParseException.class)")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-    public void shouldThrowParseException() throws ParseException {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-        Mockito.when(this.pets.findPetTypes()).thenReturn(makePetTypes());")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},'-        petTypeFormatter.parse("Fish", Locale.ENGLISH);')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    @Test")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    void shouldThrowParseException() throws ParseException {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+        assertThrows(ParseException.class, () \u2192 {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+            Mockito.when(this.pets.findPetTypes()).thenReturn(makePetTypes());")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},'+            petTypeFormatter.parse("Fish", Locale.ENGLISH);')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+        });")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     }")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"index f332257..1d5e072 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"---"),e("span",{style:{color:"#B31D28"}}," a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"+++"),e("span",{style:{color:"#22863A"}}," b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -31,13 +32,13 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#393A34"}}," public class PetTypeFormatterTests {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-    @Test(expected = ParseException.class)")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-    public void shouldThrowParseException() throws ParseException {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-        Mockito.when(this.pets.findPetTypes()).thenReturn(makePetTypes());")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},'-        petTypeFormatter.parse("Fish", Locale.ENGLISH);')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    @Test")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    void shouldThrowParseException() throws ParseException {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+        assertThrows(ParseException.class, () \u2192 {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+            Mockito.when(this.pets.findPetTypes()).thenReturn(makePetTypes());")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},'+            petTypeFormatter.parse("Fish", Locale.ENGLISH);')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+        });")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     }")])])])],-1),IN={__name:"17",setup(n){const t={layout:"default"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[jN,U(a,Ne({},{ranges:["6-"]}),{default:S(()=>[bN]),_:1},16)]),_:1},16)}}},BN=e("h1",null,"Running recipes",-1),DN=e("ol",null,[e("li",null,"Apply OpenRewrite plugin"),e("li",null,"With Module dependency"),e("li",null,"Run migration recipe")],-1),_N=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	-Drewrite.recipeArtifactCoordinates=")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		org.openrewrite.recipe:rewrite-spring:4.27.0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	-DactiveRecipes=")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"		org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	-Drewrite.recipeArtifactCoordinates=")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		org.openrewrite.recipe:rewrite-spring:4.27.0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	-DactiveRecipes=")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"		org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")])])])],-1),RN={__name:"18",setup(n){const t={layout:"default"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[BN,DN,U(a,Ne({},{ranges:["1,3,5"]}),{default:S(()=>[_N]),_:1},16)]),_:1},16)}}},EN={class:"grid grid-cols-2 w-full h-full"},CN=fe({__name:"image-left",props:{image:{type:String},class:{type:String}},setup(n){const t=n;F(O);const o=_(()=>Ya(t.image));return(r,a)=>(j(),$("div",EN,[e("div",{class:"w-full w-full",style:$e(N(o))},null,4),e("div",{class:We(["slidev-layout default",t.class])},[Qe(r.$slots,"default")],2)]))}}),xN=e("h1",null,"PetClinic migration",-1),kN=e("br",null,null,-1),FN=e("h2",null,"Spring Boot 1.5 \u2192 2.7",-1),WN=e("br",null,null,-1),SN=e("h2",null,"Java 8 \u2192 Java 17",-1),GN=e("br",null,null,-1),TN=e("h2",null,"JUnit 4 \u2192 JUnit 5",-1),UN={__name:"19",setup(n){const t={layout:"image-left",image:"/petclinic.png"};return F(O),(o,r)=>(j(),L(CN,te(ne(t)),{default:S(()=>[xN,kN,FN,WN,SN,GN,TN]),_:1},16))}},MN={class:"slidev-layout section w-full h-full grid"},ON={class:"my-auto text-center"},PN={__name:"section",setup(n){return F(O),(t,o)=>(j(),$("div",MN,[e("div",ON,[Qe(t.$slots,"default")])]))}},$N=e("h1",null,"Demo",-1),JN=e("p",null,[e("img",{src:"https://images.unsplash.com/photo-1590962467161-2555c3b99cf9?crop=entropy&fit=crop&h=900&w=1600",alt:"Demonstration"})],-1),VN={__name:"20",setup(n){const t={layout:"section"};return F(O),(o,r)=>(j(),L(PN,te(ne(t)),{default:S(()=>[$N,JN]),_:1},16))}},LN=e("h1",null,"Applications",-1),qN=e("br",null,null,-1),HN=e("h2",null,"Migrate",-1),KN=e("br",null,null,-1),zN=e("h2",null,"Fix",-1),QN=e("br",null,null,-1),YN=e("h2",null,"Enforce",-1),ZN={__name:"21",setup(n){const t={layout:"image-right",image:"https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?crop=entropy&fit=crop&h=900&w=800"};return F(O),(o,r)=>(j(),L(uo,te(ne(t)),{default:S(()=>[LN,qN,HN,KN,zN,QN,YN]),_:1},16))}},XN=e("h1",null,"Future",-1),e1=e("br",null,null,-1),n1=e("h2",null,"Java 17+",-1),t1=e("br",null,null,-1),o1=e("h2",null,"Kotlin",-1),s1=e("br",null,null,-1),r1=e("h2",null,"Dataflow",-1),a1=e("br",null,null,-1),i1=e("h2",null,"Spring Boot Migrator",-1),l1={__name:"22",setup(n){const t={layout:"image-right",image:"https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?fit=crop&fm=jpg&h=900&w=800"};return F(O),(o,r)=>(j(),L(uo,te(ne(t)),{default:S(()=>[XN,e1,n1,t1,o1,s1,r1,a1,i1]),_:1},16))}},p1="/major-migrations-made-easy-slides/moderne.io-numbers.png",c1=e("p",null,[e("img",{src:p1,alt:"Numbers"})],-1),g1={__name:"23",setup(n){const t={layout:"center"};return F(O),(o,r)=>(j(),L(fg,te(ne(t)),{default:S(()=>[c1]),_:1},16))}},u1="/major-migrations-made-easy-slides/moderne.io-left.png",d1="/major-migrations-made-easy-slides/moderne.io-right.png",y1=e("h1",null,"public.moderne.io",-1),m1=e("div",null,null,-1),f1=e("p",null,[e("img",{src:u1,alt:"Recipes left"})],-1),h1=e("p",null,[e("img",{src:d1,alt:"Recipes right"})],-1),v1={__name:"24",setup(n){const t={layout:"two-cols"};return F(O),(o,r)=>(j(),L(ts,te(ne(t)),{right:S(a=>[h1]),default:S(()=>[y1,m1,f1]),_:1},16))}},A1={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},w1=e("path",{fill:"#E01E5A",d:"M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82c-14.832 0-26.819-11.988-26.819-26.82c0-14.831 11.987-26.818 26.82-26.818H53.84v26.819Zm13.41 0c0-14.831 11.987-26.818 26.819-26.818c14.832 0 26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82c-14.83 0-26.818-11.988-26.818-26.82v-67.047Z"},null,-1),N1=e("path",{fill:"#36C5F0",d:"M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819C67.25 11.987 79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82h-26.82Zm0 13.613c14.832 0 26.819 11.987 26.819 26.819c0 14.832-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818h67.25Z"},null,-1),j1=e("path",{fill:"#2EB67D",d:"M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82c14.832 0 26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55v-26.82Zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819c-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0c14.831 0 26.819 11.987 26.819 26.819v67.25Z"},null,-1),b1=e("path",{fill:"#ECB22E",d:"M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818c0 14.832-11.988 26.82-26.82 26.82c-14.831 0-26.818-11.988-26.818-26.82V201.55h26.819Zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82c0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819c0 14.831-11.988 26.819-26.82 26.819h-67.25Z"},null,-1),I1=[w1,N1,j1,b1];function B1(n,t){return j(),$("svg",A1,I1)}const D1={name:"logos-slack-icon",render:B1},_1={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},R1=e("path",{fill:"#6DB33F",d:"M38.944 35.879c50.58-48.999 131.454-47.682 180.453 3.161c5.532-7.376 10.274-15.542 13.699-23.972c16.07 48.999 25.817 90.095 22.128 121.97c-1.844 26.87-12.381 52.687-29.768 73.235c-45.31 53.741-125.922 60.59-179.663 15.28l-1.028-.915l-.055-.036a12.24 12.24 0 0 1-.498-.367c-.49-.381-.935-.796-1.336-1.24l-.144-.164l-1.68-1.493c-1.64-1.405-3.279-2.81-4.733-4.4l-.536-.606c-49-50.58-47.419-131.454 3.16-180.453ZM57.91 207.376c-4.742-3.688-11.591-3.162-15.28 1.58c-3.242 4.17-3.226 9.969.049 13.815l.052.06l2.033 1.807l.2.136c4.604 3.028 10.8 2.402 14.333-1.878l.194-.241c3.688-4.742 2.898-11.591-1.58-15.28ZM231.78 28.239c-13.173 27.661-45.84 48.736-74.027 55.322c-26.607 6.322-49.79 1.054-74.289 10.537c-55.848 21.339-54.794 87.724-24.236 102.74l1.844 1.054s22.074-4.389 43.902-10.185l1.87-.5c8.718-2.35 17.295-4.91 24.302-7.492c36.354-13.435 76.397-46.628 89.568-85.09c-6.849 40.042-41.359 78.767-75.87 96.418c-18.44 9.483-32.665 11.59-62.96 22.128c-3.688 1.317-6.586 2.635-6.586 2.635l1.108-.15l.736-.095l.733-.092c6.69-.83 12.702-1.244 12.702-1.244c42.94-2.108 110.38 12.118 141.729-29.768c32.139-42.677 14.225-111.697-.527-156.218Z"},null,-1),E1=e("path",{fill:"#FFF",d:"M57.911 207.376c4.479 3.688 5.269 10.537 1.58 15.279c-3.687 4.742-10.537 5.269-15.279 1.58c-4.741-3.688-5.268-10.537-1.58-15.279c3.688-4.742 10.537-5.268 15.28-1.58ZM231.78 28.239c14.752 44.521 32.666 113.541.527 156.218c-31.35 41.886-98.789 27.66-141.729 29.768c0 0-6.012.415-12.702 1.244l-.733.092c-.612.078-1.228.16-1.844.245c0 0 2.898-1.318 6.586-2.635c30.295-10.537 44.52-12.645 62.96-22.128c34.511-17.65 69.021-56.376 75.87-96.418c-13.171 38.462-53.214 71.655-89.568 85.09c-25.026 9.22-70.074 18.177-70.074 18.177l-1.844-1.054c-30.558-15.016-31.612-81.401 24.236-102.74c24.5-9.483 47.682-4.215 74.29-10.537c28.187-6.586 60.853-27.66 74.025-55.322Z"},null,-1),C1=[R1,E1];function x1(n,t){return j(),$("svg",_1,C1)}const k1={name:"logos-spring-icon",render:x1},F1={class:"slidev-icon",viewBox:"0 0 256 250",width:"1.2em",height:"1.2em"},W1=e("path",{fill:"#161614",d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403Z"},null,-1),S1=[W1];function G1(n,t){return j(),$("svg",F1,S1)}const T1={name:"logos-github-icon",render:G1},U1="/major-migrations-made-easy-slides/rewrite-logo-only.png",M1="/major-migrations-made-easy-slides/moderne-logo-only.png",O1="/major-migrations-made-easy-slides/jdriven-logo.png",P1=e("h1",null,"Where to learn more",-1),$1=e("div",null,null,-1),J1=e("p",null,[e("img",{src:U1,width:"60",display:"inline"}),s(" docs.openrewrite.org")],-1),V1=s(" github.com/openrewrite"),L1=e("br",null,null,-1),q1=e("br",null,null,-1),H1=s(" github.com/spring-projects-experimental/spring-boot-migrator "),K1=e("p",null,[e("img",{src:M1,width:"60",display:"inline"}),s(" public.moderne.io")],-1),z1=s(" RewriteOSS.slack.com"),Q1=e("p",null,[e("img",{src:O1,width:"60",display:"inline"}),s(" blog.jdriven.com")],-1),Y1={__name:"25",setup(n){const t={layout:"default",class:"text-4xl"};return F(O),(o,r)=>{const a=T1,i=k1,l=D1;return j(),L(Ge,te(ne(t)),{default:S(()=>[P1,$1,J1,U(a,{class:"text-5xl align-middle"}),V1,L1,q1,U(i,{class:"text-5xl align-middle"}),H1,K1,U(l,{class:"text-5xl align-middle"}),z1,Q1]),_:1},16)}}},Z1="/major-migrations-made-easy-slides/blogpost.png",X1=e("h1",null,[e("em",null,'"This could have been a blogpost"')],-1),ej=e("p",null,[e("img",{src:Z1,alt:"Blogpost"})],-1),nj={__name:"26",setup(n){const t={layout:"default"};return F(O),(o,r)=>{const a=$o("nbsp");return j(),L(Ge,te(ne(t)),{default:S(()=>[X1,U(a),ej]),_:1},16)}}},tj=e("h1",null,"Questions",-1),oj={__name:"27",setup(n){const t={layout:"cover",background:"https://images.unsplash.com/photo-1544535830-9df3f56fff6a?h=900&w=1600"};return F(O),(o,r)=>(j(),L(Za,te(ne(t)),{default:S(()=>[tj]),_:1},16))}},sj=e("div",null,null,-1),rj={__name:"28",setup(n){const t={layout:"image",image:"https://images.unsplash.com/photo-1608363808030-f58d9f02b06a?fit=crop&fm=jpg&h=900&w=1600"};return F(O),(o,r)=>(j(),L(tr,te(ne(t)),{default:S(()=>[sj]),_:1},16))}},aj={__name:"29",setup(n){const t={layout:"image",image:"/cover-baselone.png"};return F(O),(o,r)=>(j(),L(tr,te(ne(t)),null,16))}},ij={__name:"30",setup(n){const t={layout:"end"};return F(O),(o,r)=>(j(),L(mg,te(ne(t)),null,16))}},lj=e("h1",null,"First we start a new branch from the 1.5.x tag of the Spring PetClinic project.",-1),pj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ "),e("span",{style:{color:"#E0A569"}},"cd"),e("span",{style:{color:"#DBD7CA"}}," /home/tim/Documents/workspace/spring-petclinic")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"HEAD is now at 9ad9192 Spring Boot 2.5 on Java 17")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"Switched to branch "),e("span",{style:{color:"#C98A7D"}},"'main'")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"Your branch is up to date with "),e("span",{style:{color:"#C98A7D"}},"'origin/main'"),e("span",{style:{color:"#DBD7CA"}},".")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"Deleted branch openrewrite-migration-demo "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"was 9ad9192"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},".")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"Switched to a new branch "),e("span",{style:{color:"#C98A7D"}},"'openrewrite-migration-demo'")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ "),e("span",{style:{color:"#B58451"}},"cd"),e("span",{style:{color:"#393A34"}}," /home/tim/Documents/workspace/spring-petclinic")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"HEAD is now at 9ad9192 Spring Boot 2.5 on Java 17")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"Switched to branch "),e("span",{style:{color:"#B56959"}},"'main'")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"Your branch is up to date with "),e("span",{style:{color:"#B56959"}},"'origin/main'"),e("span",{style:{color:"#393A34"}},".")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"Deleted branch openrewrite-migration-demo "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"was 9ad9192"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},".")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"Switched to a new branch "),e("span",{style:{color:"#B56959"}},"'openrewrite-migration-demo'")])])])],-1),cj={__name:"31",setup(n){const t={layout:"default",srcSequence:"./demo/checkout.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[lj,U(a,Ne({},{ranges:[""]}),{default:S(()=>[pj]),_:1},16)]),_:1},16)}}},gj=e("h1",null,"Next we ensure we are running Java 8 for now.",-1),uj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ sdk use java 8.0.345-tem")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"==== BROADCAST =================================================================")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," 2022-10-06: quarkus 2.13.1.Final available on SDKMAN"),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#DBD7CA"}}," https://github.com/quarkusio/quarkus/releases/tag/2.13.1.Final")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," 2022-10-05: jbang 0.99.0 available on SDKMAN"),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#DBD7CA"}}," https://github.com/jbangdev/jbang/releases/tag/v0.99.0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}}," 2022-10-03: vertx 4.3.4 available on SDKMAN"),e("span",{style:{color:"#CB7676"}},"!")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"================================================================================")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"Using java version 8.0.345-tem "),e("span",{style:{color:"#4D9375"}},"in"),e("span",{style:{color:"#DBD7CA"}}," this shell.")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"	OK")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ sdk use java 8.0.345-tem")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"==== BROADCAST =================================================================")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," 2022-10-06: quarkus 2.13.1.Final available on SDKMAN"),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#393A34"}}," https://github.com/quarkusio/quarkus/releases/tag/2.13.1.Final")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," 2022-10-05: jbang 0.99.0 available on SDKMAN"),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#393A34"}}," https://github.com/jbangdev/jbang/releases/tag/v0.99.0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}}," 2022-10-03: vertx 4.3.4 available on SDKMAN"),e("span",{style:{color:"#AB5959"}},"!")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"================================================================================")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"Using java version 8.0.345-tem "),e("span",{style:{color:"#1C6B48"}},"in"),e("span",{style:{color:"#393A34"}}," this shell.")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"	OK")])])])],-1),dj={__name:"32",setup(n){const t={layout:"default",srcSequence:"./demo/sdkman-java-8.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[gj,U(a,Ne({},{ranges:[""]}),{default:S(()=>[uj]),_:1},16)]),_:1},16)}}},yj=e("h1",null,"Then we upgrade the Maven wrapper for compatibility, and to add some color.",-1),mj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ ./mvnw wrapper:wrapper -Dmaven=3.8.6")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Scanning "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," projects...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                                                                         ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Building petclinic 1.5.1")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," --- maven-wrapper-plugin:3.1.1:wrapper "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"default-cli"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," @ spring-petclinic ---")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Unpacked bin "),e("span",{style:{color:"#E0A569"}},"type"),e("span",{style:{color:"#DBD7CA"}}," wrapper distribution org.apache.maven.wrapper:maven-wrapper-distribution:zip:bin:3.1.1")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Configuring .mvn/wrapper/maven-wrapper.properties to use Maven 3.8.6 and download from https://repo.maven.apache.org/maven2")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," BUILD SUCCESS")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Total time: 0.679 s")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Finished at: 2022-10-10T10:23:20+00:00")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Final Memory: 19M/298M")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ ./mvnw wrapper:wrapper -Dmaven=3.8.6")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Scanning "),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," projects...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                                                                         ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Building petclinic 1.5.1")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," --- maven-wrapper-plugin:3.1.1:wrapper "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"default-cli"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," @ spring-petclinic ---")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Unpacked bin "),e("span",{style:{color:"#B58451"}},"type"),e("span",{style:{color:"#393A34"}}," wrapper distribution org.apache.maven.wrapper:maven-wrapper-distribution:zip:bin:3.1.1")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Configuring .mvn/wrapper/maven-wrapper.properties to use Maven 3.8.6 and download from https://repo.maven.apache.org/maven2")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," BUILD SUCCESS")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Total time: 0.679 s")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Finished at: 2022-10-10T10:23:20+00:00")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Final Memory: 19M/298M")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")])])])],-1),fj={__name:"33",setup(n){const t={layout:"default",srcSequence:"./demo/maven-wrapper.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[yj,U(a,Ne({},{ranges:[""]}),{default:S(()=>[mj]),_:1},16)]),_:1},16)}}},hj=e("h1",null,"And we commit the results to have a clean slate.",-1),vj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ git commit -a -m Spring"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"Boot"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"1.5"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"on"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"Java"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"8")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"openrewrite-migration-demo e2b047a"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Spring Boot 1.5 on Java 8")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," 2 files changed, 18 insertions"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"+"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},", 1 deletion"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"-"),e("span",{style:{color:"#858585"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," rewrite .mvn/wrapper/maven-wrapper.jar "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"98%"),e("span",{style:{color:"#858585"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," rewrite .mvn/wrapper/maven-wrapper.properties "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"100%"),e("span",{style:{color:"#858585"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ git commit -a -m Spring"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"Boot"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"1.5"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"on"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"Java"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"8")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"openrewrite-migration-demo e2b047a"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Spring Boot 1.5 on Java 8")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," 2 files changed, 18 insertions"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"+"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},", 1 deletion"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"-"),e("span",{style:{color:"#8E8F8B"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," rewrite .mvn/wrapper/maven-wrapper.jar "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"98%"),e("span",{style:{color:"#8E8F8B"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," rewrite .mvn/wrapper/maven-wrapper.properties "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"100%"),e("span",{style:{color:"#8E8F8B"}},")")])])])],-1),Aj={__name:"34",setup(n){const t={layout:"default",srcSequence:"./demo/commit-1.5-java-8.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[hj,U(a,Ne({},{ranges:[""]}),{default:S(()=>[vj]),_:1},16)]),_:1},16)}}},wj=e("h1",null,"We will migrate the Spring PetClinic to Spring Boot 2.",-1),Nj=e("h2",null,"These recipes are in the added Rewrite Spring Module.",-1),jj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \\")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.26.0 \\")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    -DactiveRecipes=org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \\")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.26.0 \\")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    -DactiveRecipes=org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")])])])],-1),bj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," --- rewrite-maven-plugin:4.34.0:run "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"default-cli"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," @ spring-petclinic ---")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Using active recipe"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.openrewrite.java.spring.boot2.SpringBoot1To2Migration"),e("span",{style:{color:"#858585"}},"]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Using active styles"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Validating active recipes...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Project "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"petclinic"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Resolving Poms...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Project "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"petclinic"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Parsing Source Files")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Running recipe"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," org.openrewrite.maven.internal.MavenParsingException: No version provided "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," dependency org.webjars:webjars-locator")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to pom.xml by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}},", newVersion=2.0.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.maven.RemoveProperty: {propertyName=thymeleaf.version}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.maven.RemoveDependency: {groupId=org.webjars, artifactId=webjars-locator}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.maven.AddDependency: {groupId=javax.validation, artifactId=validation-api, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.MigrateNotBlankPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.maven.AddDependency: {groupId=org.springframework.boot, artifactId=spring-boot-starter-validation, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                             org.openrewrite.maven.AddDependency: {groupId=org.hamcrest, artifactId=hamcrest, version=2.x, onlyIfUsing=org.hamcrest.Matchers}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.maven.ExcludeDependency: {groupId=junit, artifactId=junit}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.maven.AddDependency: {groupId=org.junit.jupiter, artifactId=junit-jupiter, version=5.x, onlyIfUsing=org.junit.jupiter.api.Test}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.maven.ExcludeDependency: {groupId=org.junit.vintage, artifactId=junit-vintage-engine}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.testing.junit5.JUnit5BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UseMockitoExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                             org.openrewrite.java.testing.mockito.Mockito1to4Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                                     org.openrewrite.maven.AddDependency: {groupId=org.mockito, artifactId=mockito-junit-jupiter, version=3.x, onlyIfUsing=org.mockito.junit.jupiter.MockitoExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                                 org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.mockito, artifactId=mockito-junit-jupiter, newVersion=4.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}},", newVersion=2.1.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.1.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.2.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}},", newVersion=2.3.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.3.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.4.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=org.junit.vintage, exclusionArtifactId=junit-vintage-engine}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=junit, exclusionArtifactId=junit}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}},", newVersion=2.5.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.5.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/visit/Visit.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/VetController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/VisitController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.ImplicitWebAnnotationNames")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.ImplicitWebAnnotationNames")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/Owner.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.ImplicitWebAnnotationNames")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/model/Person.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/system/CacheConfig.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.BeanMethodsNotPublic")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/resources/application.properties by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.SpringBootProperties_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=management.context-path, newPropertyKey=management.server.servlet.context-path}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.data, newPropertyKey=spring.sql.init.data-locations}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.schema, newPropertyKey=spring.sql.init.schema-locations}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UseMockitoExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                             org.openrewrite.java.testing.mockito.Mockito1to4Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                                     org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.mockito.runners.MockitoJUnitRunner, newFullyQualifiedTypeName=org.mockito.junit.MockitoJUnitRunner}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                             org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.mockito.junit.jupiter.MockitoExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.AssertToAssertions")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.IgnoreToDisabled")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                             org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.junit.Ignore, newFullyQualifiedTypeName=org.junit.jupiter.api.Disabled}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Please review and commit the results.")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," BUILD SUCCESS")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Total time:  30.631 s")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Finished at: 2022-10-10T10:40:19+01:00")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," --- rewrite-maven-plugin:4.34.0:run "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"default-cli"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," @ spring-petclinic ---")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Using active recipe"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.openrewrite.java.spring.boot2.SpringBoot1To2Migration"),e("span",{style:{color:"#8E8F8B"}},"]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Using active styles"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Validating active recipes...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Project "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"petclinic"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Resolving Poms...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Project "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"petclinic"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Parsing Source Files")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Running recipe"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," org.openrewrite.maven.internal.MavenParsingException: No version provided "),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," dependency org.webjars:webjars-locator")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to pom.xml by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}},", newVersion=2.0.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.maven.RemoveProperty: {propertyName=thymeleaf.version}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.maven.RemoveDependency: {groupId=org.webjars, artifactId=webjars-locator}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.maven.AddDependency: {groupId=javax.validation, artifactId=validation-api, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.MigrateNotBlankPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.maven.AddDependency: {groupId=org.springframework.boot, artifactId=spring-boot-starter-validation, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                             org.openrewrite.maven.AddDependency: {groupId=org.hamcrest, artifactId=hamcrest, version=2.x, onlyIfUsing=org.hamcrest.Matchers}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.maven.ExcludeDependency: {groupId=junit, artifactId=junit}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.maven.AddDependency: {groupId=org.junit.jupiter, artifactId=junit-jupiter, version=5.x, onlyIfUsing=org.junit.jupiter.api.Test}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.maven.ExcludeDependency: {groupId=org.junit.vintage, artifactId=junit-vintage-engine}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.testing.junit5.JUnit5BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UseMockitoExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                             org.openrewrite.java.testing.mockito.Mockito1to4Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                                     org.openrewrite.maven.AddDependency: {groupId=org.mockito, artifactId=mockito-junit-jupiter, version=3.x, onlyIfUsing=org.mockito.junit.jupiter.MockitoExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                                 org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.mockito, artifactId=mockito-junit-jupiter, newVersion=4.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}},", newVersion=2.1.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.1.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.2.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}},", newVersion=2.3.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.3.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.4.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=org.junit.vintage, exclusionArtifactId=junit-vintage-engine}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=junit, exclusionArtifactId=junit}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}},", newVersion=2.5.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.5.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/visit/Visit.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/VetController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/VisitController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.ImplicitWebAnnotationNames")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.ImplicitWebAnnotationNames")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/Owner.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.ImplicitWebAnnotationNames")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/model/Person.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/system/CacheConfig.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.BeanMethodsNotPublic")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/resources/application.properties by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.SpringBootProperties_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=management.context-path, newPropertyKey=management.server.servlet.context-path}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.data, newPropertyKey=spring.sql.init.data-locations}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.schema, newPropertyKey=spring.sql.init.schema-locations}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UseMockitoExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                             org.openrewrite.java.testing.mockito.Mockito1to4Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                                     org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.mockito.runners.MockitoJUnitRunner, newFullyQualifiedTypeName=org.mockito.junit.MockitoJUnitRunner}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                             org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.mockito.junit.jupiter.MockitoExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.AssertToAssertions")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.IgnoreToDisabled")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                             org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.junit.Ignore, newFullyQualifiedTypeName=org.junit.jupiter.api.Disabled}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Please review and commit the results.")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," BUILD SUCCESS")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Total time:  30.631 s")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Finished at: 2022-10-10T10:40:19+01:00")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")])])])],-1),Ij={__name:"35",setup(n){const t={layout:"default",srcSequence:"./demo/migrate-spring-boot.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[wj,Nj,U(a,Ne({},{ranges:[""]}),{default:S(()=>[jj]),_:1},16),bj]),_:1},16)}}},Bj=e("h1",null,"Notice how each file lists the changes made by recipes.",-1),Dj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," --- rewrite-maven-plugin:4.34.0:run "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"default-cli"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," @ spring-petclinic ---")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Using active recipe"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.openrewrite.java.spring.boot2.SpringBoot1To2Migration"),e("span",{style:{color:"#858585"}},"]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Using active styles"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Validating active recipes...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Project "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"petclinic"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Resolving Poms...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Project "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"petclinic"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Parsing Source Files")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Running recipe"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," org.openrewrite.maven.internal.MavenParsingException: No version provided "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," dependency org.webjars:webjars-locator")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to pom.xml by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}},", newVersion=2.0.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.maven.RemoveProperty: {propertyName=thymeleaf.version}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.maven.RemoveDependency: {groupId=org.webjars, artifactId=webjars-locator}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.maven.AddDependency: {groupId=javax.validation, artifactId=validation-api, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.MigrateNotBlankPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.maven.AddDependency: {groupId=org.springframework.boot, artifactId=spring-boot-starter-validation, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                             org.openrewrite.maven.AddDependency: {groupId=org.hamcrest, artifactId=hamcrest, version=2.x, onlyIfUsing=org.hamcrest.Matchers}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.maven.ExcludeDependency: {groupId=junit, artifactId=junit}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.maven.AddDependency: {groupId=org.junit.jupiter, artifactId=junit-jupiter, version=5.x, onlyIfUsing=org.junit.jupiter.api.Test}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.maven.ExcludeDependency: {groupId=org.junit.vintage, artifactId=junit-vintage-engine}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.testing.junit5.JUnit5BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UseMockitoExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                             org.openrewrite.java.testing.mockito.Mockito1to4Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                                     org.openrewrite.maven.AddDependency: {groupId=org.mockito, artifactId=mockito-junit-jupiter, version=3.x, onlyIfUsing=org.mockito.junit.jupiter.MockitoExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                                 org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.mockito, artifactId=mockito-junit-jupiter, newVersion=4.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}},", newVersion=2.1.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.1.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.2.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}},", newVersion=2.3.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.3.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.4.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=org.junit.vintage, exclusionArtifactId=junit-vintage-engine}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=junit, exclusionArtifactId=junit}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#CB7676"}},"*"),e("span",{style:{color:"#DBD7CA"}},", newVersion=2.5.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.5.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/visit/Visit.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/VetController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/VisitController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.ImplicitWebAnnotationNames")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.ImplicitWebAnnotationNames")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/Owner.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.ImplicitWebAnnotationNames")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/model/Person.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/system/CacheConfig.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.BeanMethodsNotPublic")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/main/resources/application.properties by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.SpringBootProperties_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=management.context-path, newPropertyKey=management.server.servlet.context-path}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.data, newPropertyKey=spring.sql.init.data-locations}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.schema, newPropertyKey=spring.sql.init.schema-locations}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UseMockitoExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                             org.openrewrite.java.testing.mockito.Mockito1to4Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                                     org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.mockito.runners.MockitoJUnitRunner, newFullyQualifiedTypeName=org.mockito.junit.MockitoJUnitRunner}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                             org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.mockito.junit.jupiter.MockitoExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.AssertToAssertions")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.IgnoreToDisabled")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                             org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.junit.Ignore, newFullyQualifiedTypeName=org.junit.jupiter.api.Disabled}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Please review and commit the results.")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," BUILD SUCCESS")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Total time:  30.631 s")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Finished at: 2022-10-10T10:40:19+01:00")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," --- rewrite-maven-plugin:4.34.0:run "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"default-cli"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," @ spring-petclinic ---")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Using active recipe"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.openrewrite.java.spring.boot2.SpringBoot1To2Migration"),e("span",{style:{color:"#8E8F8B"}},"]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Using active styles"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Validating active recipes...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Project "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"petclinic"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Resolving Poms...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Project "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"petclinic"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Parsing Source Files")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Running recipe"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," org.openrewrite.maven.internal.MavenParsingException: No version provided "),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," dependency org.webjars:webjars-locator")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to pom.xml by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}},", newVersion=2.0.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.maven.RemoveProperty: {propertyName=thymeleaf.version}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.maven.RemoveDependency: {groupId=org.webjars, artifactId=webjars-locator}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.maven.AddDependency: {groupId=javax.validation, artifactId=validation-api, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.MigrateNotBlankPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.maven.AddDependency: {groupId=org.springframework.boot, artifactId=spring-boot-starter-validation, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                             org.openrewrite.maven.AddDependency: {groupId=org.hamcrest, artifactId=hamcrest, version=2.x, onlyIfUsing=org.hamcrest.Matchers}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.maven.ExcludeDependency: {groupId=junit, artifactId=junit}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.maven.AddDependency: {groupId=org.junit.jupiter, artifactId=junit-jupiter, version=5.x, onlyIfUsing=org.junit.jupiter.api.Test}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.maven.ExcludeDependency: {groupId=org.junit.vintage, artifactId=junit-vintage-engine}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.testing.junit5.JUnit5BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UseMockitoExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                             org.openrewrite.java.testing.mockito.Mockito1to4Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                                     org.openrewrite.maven.AddDependency: {groupId=org.mockito, artifactId=mockito-junit-jupiter, version=3.x, onlyIfUsing=org.mockito.junit.jupiter.MockitoExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                                 org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.mockito, artifactId=mockito-junit-jupiter, newVersion=4.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}},", newVersion=2.1.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.1.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.2.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}},", newVersion=2.3.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.3.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.4.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=org.junit.vintage, exclusionArtifactId=junit-vintage-engine}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=junit, exclusionArtifactId=junit}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId="),e("span",{style:{color:"#AB5959"}},"*"),e("span",{style:{color:"#393A34"}},", newVersion=2.5.x, overrideManagedVersion=true}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.5.x}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/visit/Visit.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/VetController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/VisitController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.ImplicitWebAnnotationNames")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.ImplicitWebAnnotationNames")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/Owner.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetController.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.NoAutowiredOnConstructor")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.ImplicitWebAnnotationNames")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/model/Person.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/java/org/springframework/samples/petclinic/system/CacheConfig.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.BeanMethodsNotPublic")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/main/resources/application.properties by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.SpringBootProperties_2_0")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=management.context-path, newPropertyKey=management.server.servlet.context-path}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.data, newPropertyKey=spring.sql.init.data-locations}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.schema, newPropertyKey=spring.sql.init.schema-locations}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UseMockitoExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                             org.openrewrite.java.testing.mockito.Mockito1to4Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                                     org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.mockito.runners.MockitoJUnitRunner, newFullyQualifiedTypeName=org.mockito.junit.MockitoJUnitRunner}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                             org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.mockito.junit.jupiter.MockitoExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.AssertToAssertions")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.testing.junit5.JUnit4to5Migration")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.IgnoreToDisabled")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                             org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.junit.Ignore, newFullyQualifiedTypeName=org.junit.jupiter.api.Disabled}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners="),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},", extension=org.springframework.test.context.junit.jupiter.SpringExtension}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Please review and commit the results.")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," BUILD SUCCESS")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Total time:  30.631 s")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Finished at: 2022-10-10T10:40:19+01:00")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")])])])],-1),_j={__name:"36",setup(n){const t={layout:"default",srcSequence:"./demo/notice-changes.md"};return F(O),(o,r)=>(j(),L(Ge,te(ne(t)),{default:S(()=>[Bj,Dj]),_:1},16))}},Rj=e("h1",null,"Our application has now been upgraded to 2.x.",-1),Ej=e("h2",null,"In our application code we can see quite some revelant changes.",-1),Cj=e("h3",null,"Hibernate validator has been replaced with Javax.",-1),xj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/model/Person.java")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/model/Person.java")])])])],-1),kj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"diff --git a/src/main/java/org/springframework/samples/petclinic/model/Person.java b/src/main/java/org/springframework/samples/petclinic/model/Person.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"index 4cb7481..5d23523 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"---"),e("span",{style:{color:"#FDAEB7"}}," a/src/main/java/org/springframework/samples/petclinic/model/Person.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"+++"),e("span",{style:{color:"#85E89D"}}," b/src/main/java/org/springframework/samples/petclinic/model/Person.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -17,8 +17,7 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#DBD7CA"}}," package org.springframework.samples.petclinic.model;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," import javax.persistence.Column;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," import javax.persistence.MappedSuperclass;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-import org.hibernate.validator.constraints.NotEmpty;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+import javax.validation.constraints.NotEmpty;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," /**")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  * Simple JavaBean domain object representing an person.")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"diff --git a/src/main/java/org/springframework/samples/petclinic/model/Person.java b/src/main/java/org/springframework/samples/petclinic/model/Person.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"index 4cb7481..5d23523 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"---"),e("span",{style:{color:"#B31D28"}}," a/src/main/java/org/springframework/samples/petclinic/model/Person.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"+++"),e("span",{style:{color:"#22863A"}}," b/src/main/java/org/springframework/samples/petclinic/model/Person.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -17,8 +17,7 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#393A34"}}," package org.springframework.samples.petclinic.model;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," import javax.persistence.Column;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," import javax.persistence.MappedSuperclass;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-import org.hibernate.validator.constraints.NotEmpty;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+import javax.validation.constraints.NotEmpty;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," /**")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  * Simple JavaBean domain object representing an person.")])])])],-1),Fj={__name:"37",setup(n){const t={layout:"default",srcSequence:"./demo/hibernate-validator.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[Rj,Ej,Cj,U(a,Ne({},{ranges:[""]}),{default:S(()=>[xj]),_:1},16),U(a,Ne({},{ranges:[""]}),{default:S(()=>[kj]),_:1},16)]),_:1},16)}}},Wj=e("h1",null,"Unnecessary @AutoWired annotations have been removed.",-1),Sj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/vet/VetController.java")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/vet/VetController.java")])])])],-1),Gj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"diff --git a/src/main/java/org/springframework/samples/petclinic/vet/VetController.java b/src/main/java/org/springframework/samples/petclinic/vet/VetController.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"index 7ce8374..ddaa364 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"---"),e("span",{style:{color:"#FDAEB7"}}," a/src/main/java/org/springframework/samples/petclinic/vet/VetController.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"+++"),e("span",{style:{color:"#85E89D"}}," b/src/main/java/org/springframework/samples/petclinic/vet/VetController.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -15,7 +15,6 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," package org.springframework.samples.petclinic.vet;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-import org.springframework.beans.factory.annotation.Autowired;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," import org.springframework.stereotype.Controller;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," import org.springframework.web.bind.annotation.GetMapping;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," import org.springframework.web.bind.annotation.ResponseBody;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -33,7 +32,6 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#DBD7CA"}}," class VetController {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     private final VetRepository vets;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-    @Autowired")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     public VetController(VetRepository clinicService) {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"         this.vets = clinicService;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     }")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"diff --git a/src/main/java/org/springframework/samples/petclinic/vet/VetController.java b/src/main/java/org/springframework/samples/petclinic/vet/VetController.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"index 7ce8374..ddaa364 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"---"),e("span",{style:{color:"#B31D28"}}," a/src/main/java/org/springframework/samples/petclinic/vet/VetController.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"+++"),e("span",{style:{color:"#22863A"}}," b/src/main/java/org/springframework/samples/petclinic/vet/VetController.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -15,7 +15,6 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," package org.springframework.samples.petclinic.vet;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-import org.springframework.beans.factory.annotation.Autowired;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," import org.springframework.stereotype.Controller;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," import org.springframework.web.bind.annotation.GetMapping;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," import org.springframework.web.bind.annotation.ResponseBody;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -33,7 +32,6 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#393A34"}}," class VetController {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     private final VetRepository vets;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-    @Autowired")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     public VetController(VetRepository clinicService) {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"         this.vets = clinicService;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     }")])])])],-1),Tj={__name:"38",setup(n){const t={layout:"default",srcSequence:"./demo/unnecessary-autowired.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[Wj,U(a,Ne({},{ranges:[""]}),{default:S(()=>[Sj]),_:1},16),U(a,Ne({},{ranges:[""]}),{default:S(()=>[Gj]),_:1},16)]),_:1},16)}}},Uj=e("h1",null,"Web parameter arguments have also been removed.",-1),Mj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/owner/PetController.java")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/owner/PetController.java")])])])],-1),Oj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"diff --git a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"index 9c52e03..6f627c5 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"---"),e("span",{style:{color:"#FDAEB7"}}," a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"+++"),e("span",{style:{color:"#85E89D"}}," b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -15,7 +15,6 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," package org.springframework.samples.petclinic.owner;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-import org.springframework.beans.factory.annotation.Autowired;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," import org.springframework.stereotype.Controller;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," import org.springframework.ui.ModelMap;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," import org.springframework.util.StringUtils;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -51,7 +49,7 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#DBD7CA"}}," class PetController {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     }")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},'     @ModelAttribute("owner")')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},'-    public Owner findOwner(@PathVariable("ownerId") int ownerId) {')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    public Owner findOwner(@PathVariable int ownerId) {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"         return this.owners.findById(ownerId);")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     }")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -89,7 +87,7 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#DBD7CA"}}," class PetController {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     }")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},'     @GetMapping("/pets/{petId}/edit")')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},'-    public String initUpdateForm(@PathVariable("petId") int petId, ModelMap model) {')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    public String initUpdateForm(@PathVariable int petId, ModelMap model) {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"         Pet pet = this.pets.findById(petId);")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},'         model.put("pet", pet);')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"         return VIEWS_PETS_CREATE_OR_UPDATE_FORM;")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"diff --git a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"index 9c52e03..6f627c5 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"---"),e("span",{style:{color:"#B31D28"}}," a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"+++"),e("span",{style:{color:"#22863A"}}," b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -15,7 +15,6 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  */")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," package org.springframework.samples.petclinic.owner;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-import org.springframework.beans.factory.annotation.Autowired;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," import org.springframework.stereotype.Controller;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," import org.springframework.ui.ModelMap;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," import org.springframework.util.StringUtils;")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -51,7 +49,7 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#393A34"}}," class PetController {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     }")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},'     @ModelAttribute("owner")')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},'-    public Owner findOwner(@PathVariable("ownerId") int ownerId) {')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    public Owner findOwner(@PathVariable int ownerId) {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"         return this.owners.findById(ownerId);")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     }")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -89,7 +87,7 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#393A34"}}," class PetController {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     }")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},'     @GetMapping("/pets/{petId}/edit")')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},'-    public String initUpdateForm(@PathVariable("petId") int petId, ModelMap model) {')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    public String initUpdateForm(@PathVariable int petId, ModelMap model) {")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"         Pet pet = this.pets.findById(petId);")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},'         model.put("pet", pet);')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"         return VIEWS_PETS_CREATE_OR_UPDATE_FORM;")])])])],-1),Pj={__name:"39",setup(n){const t={layout:"default",srcSequence:"./demo/webparameter-arguments.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[Uj,U(a,Ne({},{ranges:[""]}),{default:S(()=>[Mj]),_:1},16),U(a,Ne({},{ranges:[""]}),{default:S(()=>[Oj]),_:1},16)]),_:1},16)}}},$j=e("h1",null,"Our application.properties have also been updated.",-1),Jj=e("h2",null,"Database initialization properties have been moved.",-1),Vj=e("h2",null,"Actuator properties have also undergone changes.",-1),Lj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ git --no-pager diff src/main/resources/")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ git --no-pager diff src/main/resources/")])])])],-1),qj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"diff --git a/src/main/resources/application.properties b/src/main/resources/application.properties")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"index fb07c6c..20ab139 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"---"),e("span",{style:{color:"#FDAEB7"}}," a/src/main/resources/application.properties")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"+++"),e("span",{style:{color:"#85E89D"}}," b/src/main/resources/application.properties")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -1,7 +1,7 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," # database init, supports mysql too")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," database=hsqldb")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-spring.datasource.schema=classpath*:db/${database}/schema.sql")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-spring.datasource.data=classpath*:db/${database}/data.sql")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+spring.sql.init.schema-locations=classpath*:db/${database}/schema.sql")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+spring.sql.init.data-locations=classpath*:db/${database}/data.sql")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," # Web")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," spring.thymeleaf.mode=HTML")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -13,7 +13,7 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#DBD7CA"}}," spring.jpa.hibernate.ddl-auto=none")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," spring.messages.basename=messages/messages")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," # Actuator / Management")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-management.contextPath=/manage")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+management.server.servlet.context-path=/manage")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," # Spring Boot 1.5 makes actuator secure by default")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," management.security.enabled=false")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"diff --git a/src/main/resources/application.properties b/src/main/resources/application.properties")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"index fb07c6c..20ab139 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"---"),e("span",{style:{color:"#B31D28"}}," a/src/main/resources/application.properties")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"+++"),e("span",{style:{color:"#22863A"}}," b/src/main/resources/application.properties")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -1,7 +1,7 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," # database init, supports mysql too")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," database=hsqldb")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-spring.datasource.schema=classpath*:db/${database}/schema.sql")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-spring.datasource.data=classpath*:db/${database}/data.sql")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+spring.sql.init.schema-locations=classpath*:db/${database}/schema.sql")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+spring.sql.init.data-locations=classpath*:db/${database}/data.sql")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," # Web")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," spring.thymeleaf.mode=HTML")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -13,7 +13,7 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#393A34"}}," spring.jpa.hibernate.ddl-auto=none")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," spring.messages.basename=messages/messages")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," # Actuator / Management")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-management.contextPath=/manage")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+management.server.servlet.context-path=/manage")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," # Spring Boot 1.5 makes actuator secure by default")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," management.security.enabled=false")])])])],-1),Hj={__name:"40",setup(n){const t={layout:"default",srcSequence:"./demo/application-properties.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[$j,Jj,Vj,U(a,Ne({},{ranges:[""]}),{default:S(()=>[Lj]),_:1},16),U(a,Ne({},{ranges:[""]}),{default:S(()=>[qj]),_:1},16)]),_:1},16)}}},Kj=e("h1",null,"Our pom.xml file now contains updated plugins and dependencies",-1),zj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ git --no-pager diff pom.xml")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ git --no-pager diff pom.xml")])])])],-1),Qj=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"diff --git a/pom.xml b/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"index 6fdc4d1..6c68c9f 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"---"),e("span",{style:{color:"#FDAEB7"}}," a/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"+++"),e("span",{style:{color:"#85E89D"}}," b/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -10,7 +10,7 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   <parent>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <groupId>org.springframework.boot</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <artifactId>spring-boot-starter-parent</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-    <version>1.5.4.RELEASE</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    <version>2.5.14</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   </parent>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   <name>petclinic</name>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -26,7 +26,6 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <webjars-jquery-ui.version>1.11.4</webjars-jquery-ui.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <webjars-jquery.version>2.2.4</webjars-jquery.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <wro4j.version>1.8.0</wro4j.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-    <thymeleaf.version>3.0.6.RELEASE</thymeleaf.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <cobertura.version>2.7</cobertura.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -37,6 +36,16 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <groupId>org.springframework.boot</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <artifactId>spring-boot-starter-actuator</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <exclusions>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+        <exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+          <groupId>junit</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+          <artifactId>junit</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+        </exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+        <exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+          <groupId>org.junit.vintage</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+          <artifactId>junit-vintage-engine</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+        </exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      </exclusions>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <groupId>org.springframework.boot</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -54,12 +63,16 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <groupId>org.springframework.boot</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <artifactId>spring-boot-starter-thymeleaf</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <exclusions>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-      	<exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-      		<groupId>nz.net.ultraq.thymeleaf</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-      		<artifactId>thymeleaf-layout-dialect</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-      	</exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+        <exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+          <groupId>nz.net.ultraq.thymeleaf</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+          <artifactId>thymeleaf-layout-dialect</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+        </exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       </exclusions>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <groupId>org.springframework.boot</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <artifactId>spring-boot-starter-validation</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <groupId>org.springframework.boot</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <artifactId>spring-boot-starter-test</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -83,16 +96,16 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <groupId>javax.cache</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <artifactId>cache-api</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <groupId>javax.validation</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <artifactId>validation-api</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <groupId>org.ehcache</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <artifactId>ehcache</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <!-- webjars -->")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-      <groupId>org.webjars</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-      <artifactId>webjars-locator</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <groupId>org.webjars</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <artifactId>jquery</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -115,6 +128,23 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <artifactId>spring-boot-devtools</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <scope>runtime</scope>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <groupId>org.hamcrest</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <artifactId>hamcrest</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <scope>test</scope>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <groupId>org.junit.jupiter</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <artifactId>junit-jupiter</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <version>5.9.1</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <scope>test</scope>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <groupId>org.mockito</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <artifactId>mockito-junit-jupiter</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <version>4.8.0</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <scope>test</scope>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   </dependencies>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   <build>")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"diff --git a/pom.xml b/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"index 6fdc4d1..6c68c9f 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"---"),e("span",{style:{color:"#B31D28"}}," a/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"+++"),e("span",{style:{color:"#22863A"}}," b/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -10,7 +10,7 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   <parent>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <groupId>org.springframework.boot</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <artifactId>spring-boot-starter-parent</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-    <version>1.5.4.RELEASE</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    <version>2.5.14</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   </parent>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   <name>petclinic</name>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -26,7 +26,6 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <webjars-jquery-ui.version>1.11.4</webjars-jquery-ui.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <webjars-jquery.version>2.2.4</webjars-jquery.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <wro4j.version>1.8.0</wro4j.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-    <thymeleaf.version>3.0.6.RELEASE</thymeleaf.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <cobertura.version>2.7</cobertura.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -37,6 +36,16 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <groupId>org.springframework.boot</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <artifactId>spring-boot-starter-actuator</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <exclusions>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+        <exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+          <groupId>junit</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+          <artifactId>junit</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+        </exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+        <exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+          <groupId>org.junit.vintage</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+          <artifactId>junit-vintage-engine</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+        </exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      </exclusions>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <groupId>org.springframework.boot</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -54,12 +63,16 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <groupId>org.springframework.boot</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <artifactId>spring-boot-starter-thymeleaf</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <exclusions>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-      	<exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-      		<groupId>nz.net.ultraq.thymeleaf</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-      		<artifactId>thymeleaf-layout-dialect</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-      	</exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+        <exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+          <groupId>nz.net.ultraq.thymeleaf</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+          <artifactId>thymeleaf-layout-dialect</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+        </exclusion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       </exclusions>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <groupId>org.springframework.boot</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <artifactId>spring-boot-starter-validation</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <groupId>org.springframework.boot</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <artifactId>spring-boot-starter-test</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -83,16 +96,16 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <groupId>javax.cache</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <artifactId>cache-api</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <groupId>javax.validation</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <artifactId>validation-api</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <groupId>org.ehcache</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <artifactId>ehcache</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <!-- webjars -->")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-      <groupId>org.webjars</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-      <artifactId>webjars-locator</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <groupId>org.webjars</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <artifactId>jquery</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -115,6 +128,23 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <artifactId>spring-boot-devtools</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <scope>runtime</scope>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <groupId>org.hamcrest</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <artifactId>hamcrest</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <scope>test</scope>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <groupId>org.junit.jupiter</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <artifactId>junit-jupiter</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <version>5.9.1</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <scope>test</scope>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <groupId>org.mockito</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <artifactId>mockito-junit-jupiter</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <version>4.8.0</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <scope>test</scope>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   </dependencies>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   <build>")])])])],-1),Yj={__name:"41",setup(n){const t={layout:"default",srcSequence:"./demo/pom-2.5.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[Kj,U(a,Ne({},{ranges:[""]}),{default:S(()=>[zj]),_:1},16),U(a,Ne({},{ranges:[""]}),{default:S(()=>[Qj]),_:1},16)]),_:1},16)}}},Zj=e("h1",null,"Our tests have also been migrated to JUnit 5,",-1),Xj=e("h2",null,"with similar changes to what we have seen before.",-1),eb=e("br",null,null,-1),nb=e("h1",null,"Satisfied with our changes, we commit the results.",-1),tb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ git commit -a -m Spring"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"Boot"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"2.5"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"on"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"Java"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"8")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"openrewrite-migration-demo 07b4eb9"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Spring Boot 2.5 on Java 8")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," 21 files changed, 338 insertions"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"+"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},", 339 deletions"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"-"),e("span",{style:{color:"#858585"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," rewrite src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"61%"),e("span",{style:{color:"#858585"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ git commit -a -m Spring"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"Boot"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"2.5"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"on"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"Java"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"8")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"openrewrite-migration-demo 07b4eb9"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Spring Boot 2.5 on Java 8")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," 21 files changed, 338 insertions"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"+"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},", 339 deletions"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"-"),e("span",{style:{color:"#8E8F8B"}},")")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," rewrite src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"61%"),e("span",{style:{color:"#8E8F8B"}},")")])])])],-1),ob={__name:"42",setup(n){const t={layout:"default",srcSequence:"./demo/commit-2.5.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[Zj,Xj,eb,nb,U(a,Ne({},{ranges:[""]}),{default:S(()=>[tb]),_:1},16)]),_:1},16)}}},sb=e("h1",null,"Next we will upgrade to Java 11 using a different module.",-1),rb=e("h2",null,"The Migrate Java module contains recipes to adopt new language features.",-1),ab=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \\")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.11.0 \\")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    -DactiveRecipes=org.openrewrite.java.migrate.Java8toJava11")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," --- rewrite-maven-plugin:4.34.0:run "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"default-cli"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," @ spring-petclinic ---")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Using active recipe"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.openrewrite.java.migrate.Java8toJava11"),e("span",{style:{color:"#858585"}},"]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Using active styles"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Validating active recipes...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Project "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"petclinic"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Resolving Poms...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Project "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"petclinic"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Parsing Source Files")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Running recipe"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to pom.xml by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.migrate.Java8toJava11")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.migrate.javax.AddJaxbDependencies")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.java.migrate.javax.AddJaxbRuntime: {runtime=sun}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.migrate.AddJDeprScanPlugin")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.migrate.cobertura.RemoveCoberturaMavenPlugin")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.maven.RemovePlugin: {groupId=org.codehaus.mojo, artifactId=cobertura-maven-plugin}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.maven.UpgradePluginVersion: {groupId=ro.isdc.wro4j, artifactId=wro4j-maven-plugin, newVersion=1.10.1}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.java.migrate.JavaVersion11")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"             org.openrewrite.maven.ChangePropertyValue: {key=java.version, newValue=11, addIfMissing=false}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Please review and commit the results.")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," BUILD SUCCESS")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Total time:  23.821 s")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Finished at: 2022-10-10T11:05:42+01:00")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \\")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.11.0 \\")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    -DactiveRecipes=org.openrewrite.java.migrate.Java8toJava11")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," --- rewrite-maven-plugin:4.34.0:run "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"default-cli"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," @ spring-petclinic ---")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Using active recipe"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.openrewrite.java.migrate.Java8toJava11"),e("span",{style:{color:"#8E8F8B"}},"]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Using active styles"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Validating active recipes...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Project "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"petclinic"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Resolving Poms...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Project "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"petclinic"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Parsing Source Files")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Running recipe"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to pom.xml by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.migrate.Java8toJava11")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.migrate.javax.AddJaxbDependencies")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.java.migrate.javax.AddJaxbRuntime: {runtime=sun}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.migrate.AddJDeprScanPlugin")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.migrate.cobertura.RemoveCoberturaMavenPlugin")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.maven.RemovePlugin: {groupId=org.codehaus.mojo, artifactId=cobertura-maven-plugin}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.maven.UpgradePluginVersion: {groupId=ro.isdc.wro4j, artifactId=wro4j-maven-plugin, newVersion=1.10.1}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.java.migrate.JavaVersion11")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"             org.openrewrite.maven.ChangePropertyValue: {key=java.version, newValue=11, addIfMissing=false}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Please review and commit the results.")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," BUILD SUCCESS")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Total time:  23.821 s")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Finished at: 2022-10-10T11:05:42+01:00")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")])])])],-1),ib={__name:"43",setup(n){const t={layout:"default",srcSequence:"./demo/migrate-java-11.md"};return F(O),(o,r)=>(j(),L(Ge,te(ne(t)),{default:S(()=>[sb,rb,ab]),_:1},16))}},lb=e("h1",null,"The compiler source and target versions are updated.",-1),pb=e("h2",null,"Dependencies have been added for jaxb.",-1),cb=e("h2",null,"Wro4j has been upgraded to be compatible.",-1),gb=e("h2",null,"Cobertura has been dropped, as it is incompatible.",-1),ub=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ git --no-pager diff pom.xml")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ git --no-pager diff pom.xml")])])])],-1),db=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"diff --git a/pom.xml b/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"index 6c68c9f..6680c33 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"---"),e("span",{style:{color:"#FDAEB7"}}," a/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"+++"),e("span",{style:{color:"#85E89D"}}," b/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -17,7 +17,7 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   <properties>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <!-- Generic properties -->")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-    <java.version>1.8</java.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    <java.version>11</java.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -25,7 +25,7 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <webjars-bootstrap.version>3.3.6</webjars-bootstrap.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <webjars-jquery-ui.version>1.11.4</webjars-jquery-ui.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <webjars-jquery.version>2.2.4</webjars-jquery.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-    <wro4j.version>1.8.0</wro4j.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    <wro4j.version>1.10.1</wro4j.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <cobertura.version>2.7</cobertura.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -116,6 +116,24 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <artifactId>jquery-ui</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <version>${webjars-jquery-ui.version}</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <groupId>com.sun.xml.bind</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <artifactId>jaxb-impl</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <version>2.3.2</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <scope>provided</scope>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <groupId>com.sun.xml.bind</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <artifactId>jaxb-impl</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <version>2.3.2</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <scope>provided</scope>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <groupId>com.sun.xml.bind</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <artifactId>jaxb-impl</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <version>2.3.2</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <scope>provided</scope>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <groupId>org.webjars</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <artifactId>bootstrap</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -170,22 +188,6 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"           </execution>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"         </executions>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       </plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-      <plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-        <groupId>org.codehaus.mojo</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-        <artifactId>cobertura-maven-plugin</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-        <version>${cobertura.version}</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-        <configuration>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-          <check />")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-        </configuration>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-        <executions>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-          <execution>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-            <goals>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-              <goal>clean</goal>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-              <goal>check</goal>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-            </goals>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-          </execution>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-        </executions>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-      </plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <!-- Spring Boot Actuator displays build-related information if a git.properties")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"         file is present at the classpath -->")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -236,22 +238,19 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"           </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"         </dependencies>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       </plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      <plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+        <groupId>org.apache.maven.plugins</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+        <artifactId>maven-jdeprscan-plugin</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+        <version>3.0.0-alpha-1</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+        <configuration>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+          <release>11</release>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+        </configuration>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+      </plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     </plugins>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   </build>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   <reporting>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <plugins>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"       <!-- integrate maven-cobertura-plugin to project site -->")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-      <plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-        <groupId>org.codehaus.mojo</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-        <artifactId>cobertura-maven-plugin</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-        <version>${cobertura.version}</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-        <configuration>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-          <formats>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-            <format>html</format>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-          </formats>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-          <check />")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-        </configuration>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-      </plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     </plugins>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   </reporting>")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"diff --git a/pom.xml b/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"index 6c68c9f..6680c33 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"---"),e("span",{style:{color:"#B31D28"}}," a/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"+++"),e("span",{style:{color:"#22863A"}}," b/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -17,7 +17,7 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   <properties>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <!-- Generic properties -->")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-    <java.version>1.8</java.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    <java.version>11</java.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -25,7 +25,7 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <webjars-bootstrap.version>3.3.6</webjars-bootstrap.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <webjars-jquery-ui.version>1.11.4</webjars-jquery-ui.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <webjars-jquery.version>2.2.4</webjars-jquery.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-    <wro4j.version>1.8.0</wro4j.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    <wro4j.version>1.10.1</wro4j.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <cobertura.version>2.7</cobertura.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -116,6 +116,24 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <artifactId>jquery-ui</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <version>${webjars-jquery-ui.version}</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <groupId>com.sun.xml.bind</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <artifactId>jaxb-impl</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <version>2.3.2</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <scope>provided</scope>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <groupId>com.sun.xml.bind</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <artifactId>jaxb-impl</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <version>2.3.2</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <scope>provided</scope>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <groupId>com.sun.xml.bind</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <artifactId>jaxb-impl</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <version>2.3.2</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <scope>provided</scope>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <groupId>org.webjars</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <artifactId>bootstrap</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -170,22 +188,6 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"           </execution>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"         </executions>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       </plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-      <plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-        <groupId>org.codehaus.mojo</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-        <artifactId>cobertura-maven-plugin</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-        <version>${cobertura.version}</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-        <configuration>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-          <check />")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-        </configuration>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-        <executions>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-          <execution>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-            <goals>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-              <goal>clean</goal>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-              <goal>check</goal>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-            </goals>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-          </execution>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-        </executions>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-      </plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <!-- Spring Boot Actuator displays build-related information if a git.properties")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"         file is present at the classpath -->")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -236,22 +238,19 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"           </dependency>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"         </dependencies>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       </plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      <plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+        <groupId>org.apache.maven.plugins</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+        <artifactId>maven-jdeprscan-plugin</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+        <version>3.0.0-alpha-1</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+        <configuration>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+          <release>11</release>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+        </configuration>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+      </plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     </plugins>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   </build>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   <reporting>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <plugins>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"       <!-- integrate maven-cobertura-plugin to project site -->")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-      <plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-        <groupId>org.codehaus.mojo</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-        <artifactId>cobertura-maven-plugin</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-        <version>${cobertura.version}</version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-        <configuration>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-          <formats>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-            <format>html</format>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-          </formats>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-          <check />")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-        </configuration>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-      </plugin>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     </plugins>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   </reporting>")])])])],-1),yb={__name:"44",setup(n){const t={layout:"default",srcSequence:"./demo/changes-java-11.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[lb,pb,cb,gb,U(a,Ne({},{ranges:[""]}),{default:S(()=>[ub]),_:1},16),U(a,Ne({},{ranges:[""]}),{default:S(()=>[db]),_:1},16)]),_:1},16)}}},mb=e("h1",null,"Individually, these might be simple changes.",-1),fb=e("h2",null,"But by automating these changes, we can run them at scale,",-1),hb=e("h2",null,"to upgrade our entire application landscape in minutes.",-1),vb=e("br",null,null,-1),Ab=e("h1",null,"We update our JDK to now use Java 11",-1),wb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ sdk use java 11.0.16-tem")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"Using java version 11.0.16-tem "),e("span",{style:{color:"#4D9375"}},"in"),e("span",{style:{color:"#DBD7CA"}}," this shell.")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ sdk use java 11.0.16-tem")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"Using java version 11.0.16-tem "),e("span",{style:{color:"#1C6B48"}},"in"),e("span",{style:{color:"#393A34"}}," this shell.")])])])],-1),Nb=e("h1",null,"And we again commit the results",-1),jb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ git commit -a -m Spring"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"Boot"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"2.5"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"on"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"Java"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"11")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"openrewrite-migration-demo 36a5b5d"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Spring Boot 2.5 on Java 11")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," 1 file changed, 28 insertions"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"+"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},", 29 deletions"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"-"),e("span",{style:{color:"#858585"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ git commit -a -m Spring"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"Boot"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"2.5"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"on"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"Java"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"11")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"openrewrite-migration-demo 36a5b5d"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Spring Boot 2.5 on Java 11")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," 1 file changed, 28 insertions"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"+"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},", 29 deletions"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"-"),e("span",{style:{color:"#8E8F8B"}},")")])])])],-1),bb={__name:"45",setup(n){const t={layout:"default",srcSequence:"./demo/commit-java-11.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[mb,fb,hb,vb,Ab,U(a,Ne({},{ranges:[""]}),{default:S(()=>[wb]),_:1},16),Nb,jb]),_:1},16)}}},Ib=e("h1",null,"Next we run the recipe for the Java 17 migration.",-1),Bb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \\")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.11.0 \\")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    -DactiveRecipes=org.openrewrite.java.migrate.JavaVersion17")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \\")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.11.0 \\")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    -DactiveRecipes=org.openrewrite.java.migrate.JavaVersion17")])])])],-1),Db=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," --- rewrite-maven-plugin:4.34.0:run "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"default-cli"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," @ spring-petclinic ---")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Using active recipe"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"org.openrewrite.java.migrate.JavaVersion17"),e("span",{style:{color:"#858585"}},"]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Using active styles"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Validating active recipes...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Project "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"petclinic"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Resolving Poms...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Project "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"petclinic"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Parsing Source Files")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Running recipe"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"s"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Changes have been made to pom.xml by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"     org.openrewrite.java.migrate.JavaVersion17")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"         org.openrewrite.maven.ChangePropertyValue: {key=java.version, newValue=17, addIfMissing=false}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"WARNING"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Please review and commit the results.")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," BUILD SUCCESS")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Total time:  14.908 s")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Finished at: 2022-10-10T11:12:29+01:00")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," --- rewrite-maven-plugin:4.34.0:run "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"default-cli"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," @ spring-petclinic ---")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Using active recipe"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"org.openrewrite.java.migrate.JavaVersion17"),e("span",{style:{color:"#8E8F8B"}},"]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Using active styles"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[]")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Validating active recipes...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Project "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"petclinic"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Resolving Poms...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Project "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"petclinic"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Parsing Source Files")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Running recipe"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"s"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"...")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Changes have been made to pom.xml by:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"     org.openrewrite.java.migrate.JavaVersion17")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"         org.openrewrite.maven.ChangePropertyValue: {key=java.version, newValue=17, addIfMissing=false}")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"WARNING"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Please review and commit the results.")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," BUILD SUCCESS")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Total time:  14.908 s")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Finished at: 2022-10-10T11:12:29+01:00")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")])])])],-1),_b={__name:"46",setup(n){const t={layout:"default",srcSequence:"./demo/migrate-java-17.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[Ib,U(a,Ne({},{ranges:[""]}),{default:S(()=>[Bb]),_:1},16),U(a,Ne({},{ranges:[""]}),{default:S(()=>[Db]),_:1},16)]),_:1},16)}}},Rb=e("h1",null,"The change is minimal",-1),Eb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#79B8FF"}},"diff --git a/pom.xml b/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"index 6680c33..ed3ce9b 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"---"),e("span",{style:{color:"#FDAEB7"}}," a/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"+++"),e("span",{style:{color:"#85E89D"}}," b/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -1,7 +1,5 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},' <?xml version="1.0" encoding="UTF-8"?>')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},'-<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},'-  xmlns="http://maven.apache.org/POM/4.0.0"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},'-  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},'+<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://maven.apache.org/POM/4.0.0" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   <modelVersion>4.0.0</modelVersion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   <groupId>org.springframework.samples</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   <artifactId>spring-petclinic</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585","font-style":"italic"}},"@@"),e("span",{style:{color:"#B392F0","font-style":"italic"}}," -17,7 +15,7 "),e("span",{style:{color:"#858585","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"   <properties>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <!-- Generic properties -->")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-    <java.version>11</java.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+    <java.version>17</java.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#005CC5"}},"diff --git a/pom.xml b/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"index 6680c33..ed3ce9b 100644")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"---"),e("span",{style:{color:"#B31D28"}}," a/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"+++"),e("span",{style:{color:"#22863A"}}," b/pom.xml")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -1,7 +1,5 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},' <?xml version="1.0" encoding="UTF-8"?>')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},'-<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},'-  xmlns="http://maven.apache.org/POM/4.0.0"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},'-  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},'+<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://maven.apache.org/POM/4.0.0" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   <modelVersion>4.0.0</modelVersion>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   <groupId>org.springframework.samples</groupId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   <artifactId>spring-petclinic</artifactId>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@"),e("span",{style:{color:"#6F42C1","font-style":"italic"}}," -17,7 +15,7 "),e("span",{style:{color:"#8E8F8B","font-style":"italic"}},"@@")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"   <properties>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <!-- Generic properties -->")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-    <java.version>11</java.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+    <java.version>17</java.version>")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>")])])])],-1),Cb={__name:"47",setup(n){const t={layout:"default",srcSequence:"./demo/changes-java-17.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[Rb,U(a,Ne({},{ranges:[""]}),{default:S(()=>[Eb]),_:1},16)]),_:1},16)}}},xb=e("h1",null,"We update our JDK to now use Java 17",-1),kb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ sdk use java 17.0.4-tem")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"Using java version 17.0.4-tem "),e("span",{style:{color:"#4D9375"}},"in"),e("span",{style:{color:"#DBD7CA"}}," this shell.")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ sdk use java 17.0.4-tem")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"Using java version 17.0.4-tem "),e("span",{style:{color:"#1C6B48"}},"in"),e("span",{style:{color:"#393A34"}}," this shell.")])])])],-1),Fb=e("h1",null,"And with a final commit, we complete the migration.",-1),Wb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ git commit -a -m Spring"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"Boot"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"2.5"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"on"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"Java"),e("span",{style:{color:"#D4976C"}},"\\ "),e("span",{style:{color:"#DBD7CA"}},"17")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"openrewrite-migration-demo 77eb996"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Spring Boot 2.5 on Java 17")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," 1 file changed, 3 insertions"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"+"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},", 31 deletions"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#DBD7CA"}},"-"),e("span",{style:{color:"#858585"}},")")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ git commit -a -m Spring"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"Boot"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"2.5"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"on"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"Java"),e("span",{style:{color:"#A65E2B"}},"\\ "),e("span",{style:{color:"#393A34"}},"17")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"openrewrite-migration-demo 77eb996"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Spring Boot 2.5 on Java 17")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," 1 file changed, 3 insertions"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"+"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},", 31 deletions"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#393A34"}},"-"),e("span",{style:{color:"#8E8F8B"}},")")])])])],-1),Sb={__name:"48",setup(n){const t={layout:"default",srcSequence:"./demo/commit-java-17.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[xb,U(a,Ne({},{ranges:[""]}),{default:S(()=>[kb]),_:1},16),Fb,U(a,Ne({},{ranges:[""]}),{default:S(()=>[Wb]),_:1},16)]),_:1},16)}}},Gb=e("h1",null,"Now finally, we run Maven verify to see how we did on the migration.",-1),Tb=e("h2",null,"There will be two test failures that we have to fix by hand.",-1),Ub=e("ul",null,[e("li",null,"These are caused by the validator migration & a response type change."),e("li",null,"Not a bad result for an automated migration!")],-1),Mb=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"$ ./mvnw verify")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Results:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"ERROR"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Failures: ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"ERROR"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"   ValidatorTests.shouldNotValidateWhenFirstNameEmpty:42 ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"expected: "),e("span",{style:{color:"#C98A7D"}},'"may not be empty"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"but was "),e("span",{style:{color:"#E0A569"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"must not be empty"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"ERROR"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}},"   VetControllerTests.testShowResourcesVetList:67 Content "),e("span",{style:{color:"#E0A569"}},"type"),e("span",{style:{color:"#DBD7CA"}}," expected:"),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}},"application/json"),e("span",{style:{color:"#CB7676"}},";"),e("span",{style:{color:"#DBD7CA"}},"charset=UTF-"),e("span",{style:{color:"#CB7676"}},"8>"),e("span",{style:{color:"#DBD7CA"}}," but was:"),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}},"application/json"),e("span",{style:{color:"#CB7676"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"ERROR"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Tests run: 41, Failures: 2, Errors: 0, Skipped: 1")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," BUILD FAILURE")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Total time:  11.572 s")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," Finished at: 2022-10-10T11:25:00+01:00")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#DBD7CA"}},"INFO"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#DBD7CA"}}," ------------------------------------------------------------------------")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"$ ./mvnw verify")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Results:")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"ERROR"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Failures: ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"ERROR"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"   ValidatorTests.shouldNotValidateWhenFirstNameEmpty:42 ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"expected: "),e("span",{style:{color:"#B56959"}},'"may not be empty"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"but was "),e("span",{style:{color:"#B58451"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"must not be empty"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"ERROR"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}},"   VetControllerTests.testShowResourcesVetList:67 Content "),e("span",{style:{color:"#B58451"}},"type"),e("span",{style:{color:"#393A34"}}," expected:"),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}},"application/json"),e("span",{style:{color:"#AB5959"}},";"),e("span",{style:{color:"#393A34"}},"charset=UTF-"),e("span",{style:{color:"#AB5959"}},"8>"),e("span",{style:{color:"#393A34"}}," but was:"),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}},"application/json"),e("span",{style:{color:"#AB5959"}},">")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"ERROR"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Tests run: 41, Failures: 2, Errors: 0, Skipped: 1")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," BUILD FAILURE")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Total time:  11.572 s")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," Finished at: 2022-10-10T11:25:00+01:00")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#393A34"}},"INFO"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#393A34"}}," ------------------------------------------------------------------------")])])])],-1),Ob={__name:"49",setup(n){const t={layout:"default",srcSequence:"./demo/mvn-verify.md"};return F(O),(o,r)=>{const a=Pe;return j(),L(Ge,te(ne(t)),{default:S(()=>[Gb,Tb,Ub,U(a,Ne({},{ranges:["1,6-10,12,15"]}),{default:S(()=>[Mb]),_:1},16)]),_:1},16)}}},Pb=[{path:"1",name:"page-1",component:tw,meta:{class:"text-center",highlighter:"shiki",css:"unocss",colorSchema:"light",lineNumbers:!0,defaults:{layout:"default"},canvasWidth:1280,layout:"image",image:"/cover-baselone.png",slide:{raw:`---
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
#background: https://source.unsplash.com/collection/94734566/1920x1080

# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
#highlighter: prism
# use UnoCSS
css: unocss
# Better contrast on beamer & IDE preview
colorSchema: 'light'
# show line numbers in code blocks
lineNumbers: true

# https://sli.dev/custom/#frontmatter-configures
defaults:
  layout: 'default'

# https://sli.dev/guide/faq.html#scale-the-canvas
canvasWidth: 1280

# Cover slide
layout: image
image: /cover-baselone.png
---



<!--
Hi everyone!

First off I'd like to thank the organizers and sponsors of BaselOne for having me.

I'm excited to be here to present Major Migrations Made Easy.
-->
`,content:"",frontmatter:{class:"text-center",highlighter:"shiki",css:"unocss",colorSchema:"light",lineNumbers:!0,defaults:{layout:"default"},canvasWidth:1280,layout:"image",image:"/cover-baselone.png"},note:`Hi everyone!

First off I'd like to thank the organizers and sponsors of BaselOne for having me.

I'm excited to be here to present Major Migrations Made Easy.`,index:0,start:0,end:39,notesHTML:`<p>Hi everyone!</p>
<p>First off I'd like to thank the organizers and sponsors of BaselOne for having me.</p>
<p>I'm excited to be here to present Major Migrations Made Easy.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:ow,meta:{layout:"image",image:"/title-baselone.png",slide:{raw:`---
layout: image
image: /title-baselone.png
---



<!--
My name is Tim te Beek, and I'm a Java consultant at JDriven, in the Netherlands.
-->
`,content:"",frontmatter:{layout:"image",image:"/title-baselone.png"},note:"My name is Tim te Beek, and I'm a Java consultant at JDriven, in the Netherlands.",index:1,start:39,end:50,notesHTML:`<p>My name is Tim te Beek, and I'm a Java consultant at JDriven, in the Netherlands.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:uw,meta:{layout:"image-right",image:"https://images.unsplash.com/photo-1615053835081-4218b100dae9?h=900&w=800",slide:{raw:`---
layout: image-right
image: https://images.unsplash.com/photo-1615053835081-4218b100dae9?h=900&w=800
---

# ~~Java Consultant~~
# Time traveler

## Migrate outdated technology
<br/>

## Switch assignments often
<br/>

## Focus on JVM & Automation

<!--
Now as a consultant, I often switch assignments,
and whenever I do, I feel a bit like a time traveler.

One moment I'm working with Java 17 and all the latest frameworks & technologies.

And then the next, I'm thrown ten years back in time, to Java 7 or 8 and outdated frameworks.

My assignments typically see me bring these outdated technology stacks, back up to date.

And perhaps you face the same challenges as I do;
at a conference like this you hear all about new framework & language features.

Yet back at work, you're stuck using Java 8 and JUnit 4.
And migrating all of that by hand can seem daunting, if it ever gets priority.
-->
`,title:"~~Java Consultant~~",level:1,content:`# ~~Java Consultant~~
# Time traveler

## Migrate outdated technology
<br/>

## Switch assignments often
<br/>

## Focus on JVM & Automation`,frontmatter:{layout:"image-right",image:"https://images.unsplash.com/photo-1615053835081-4218b100dae9?h=900&w=800"},note:`Now as a consultant, I often switch assignments,
and whenever I do, I feel a bit like a time traveler.

One moment I'm working with Java 17 and all the latest frameworks & technologies.

And then the next, I'm thrown ten years back in time, to Java 7 or 8 and outdated frameworks.

My assignments typically see me bring these outdated technology stacks, back up to date.

And perhaps you face the same challenges as I do;
at a conference like this you hear all about new framework & language features.

Yet back at work, you're stuck using Java 8 and JUnit 4.
And migrating all of that by hand can seem daunting, if it ever gets priority.`,index:2,start:50,end:83,notesHTML:`<p>Now as a consultant, I often switch assignments,
and whenever I do, I feel a bit like a time traveler.</p>
<p>One moment I'm working with Java 17 and all the latest frameworks &amp; technologies.</p>
<p>And then the next, I'm thrown ten years back in time, to Java 7 or 8 and outdated frameworks.</p>
<p>My assignments typically see me bring these outdated technology stacks, back up to date.</p>
<p>And perhaps you face the same challenges as I do;
at a conference like this you hear all about new framework &amp; language features.</p>
<p>Yet back at work, you're stuck using Java 8 and JUnit 4.
And migrating all of that by hand can seem daunting, if it ever gets priority.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Nw,meta:{layout:"image-right",image:"https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?fit=crop&h=900&w=800",slide:{raw:`---
layout: image-right
image: >-
  https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?fit=crop&h=900&w=800
---

# Automate migrations

### More fun to work with
<br/>

### Adopted with ease
<br/>

### Make old feel like new again
<br/>

### JVM & language improvements

<!--
I want to show you how easy it can be to perform major migrations.
That way, you too can adopt all the latest language & framework features.

And it can be fun, to pick up new language features such as records and text blocks.
But you don't want to adopt these features manually, or only on a single project.

Instead we will look into automation,
to make old projects FEEL like new again.
So you can benefit from JVM,  language and framework improvements.
-->
`,title:"Automate migrations",level:1,content:`# Automate migrations

### More fun to work with
<br/>

### Adopted with ease
<br/>

### Make old feel like new again
<br/>

### JVM & language improvements`,frontmatter:{layout:"image-right",image:"https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?fit=crop&h=900&w=800"},note:`I want to show you how easy it can be to perform major migrations.
That way, you too can adopt all the latest language & framework features.

And it can be fun, to pick up new language features such as records and text blocks.
But you don't want to adopt these features manually, or only on a single project.

Instead we will look into automation,
to make old projects FEEL like new again.
So you can benefit from JVM,  language and framework improvements.`,index:3,start:83,end:114,notesHTML:`<p>I want to show you how easy it can be to perform major migrations.
That way, you too can adopt all the latest language &amp; framework features.</p>
<p>And it can be fun, to pick up new language features such as records and text blocks.
But you don't want to adopt these features manually, or only on a single project.</p>
<p>Instead we will look into automation,
to make old projects FEEL like new again.
So you can benefit from JVM,  language and framework improvements.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Gw,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

# Types of migrations

- Java 8 \u2192 11 \u2192 17+

- Spring Boot 1.x \u2192 2.x \u2192 3.x

- JUnit 4 \u2192 JUnit Jupiter \u2192 AssertJ

- Log4j \u2192 SLF4J

- Javax \u2192 Jakarta

- Zip Slip \u2192 Log4Shell \u2192 Spring4Shell \u2192 ...

::right::

<Tweet id="1528259740224077824" />

<!--
Here\u2019s  a very brief overview of the types of migrations I\u2019ll be talking about.

Likely you already performed some of these migrations in the past.
And other migrations are always just around the corner.

If you look back over time, there\u2019s a near constant stream of worthwhile improvements to pick up.

And I like the challenge; I still get excited whenever a new version comes out.
I just don\u2019t like the repetitive elements that come with upgrading.

And if you try to keep up by hand, you will hardly get anything else done!
Especially as micro services mean you\u2019re now not upgrading just once, but dozens of times.

Automation may be the only option, especially for large companies maintaining thousands of services.
-->`,title:"Types of migrations",level:1,content:`# Types of migrations

- Java 8 \u2192 11 \u2192 17+

- Spring Boot 1.x \u2192 2.x \u2192 3.x

- JUnit 4 \u2192 JUnit Jupiter \u2192 AssertJ

- Log4j \u2192 SLF4J

- Javax \u2192 Jakarta

- Zip Slip \u2192 Log4Shell \u2192 Spring4Shell \u2192 ...

::right::

<Tweet id="1528259740224077824" />`,frontmatter:{layout:"two-cols"},note:`Here\u2019s  a very brief overview of the types of migrations I\u2019ll be talking about.

Likely you already performed some of these migrations in the past.
And other migrations are always just around the corner.

If you look back over time, there\u2019s a near constant stream of worthwhile improvements to pick up.

And I like the challenge; I still get excited whenever a new version comes out.
I just don\u2019t like the repetitive elements that come with upgrading.

And if you try to keep up by hand, you will hardly get anything else done!
Especially as micro services mean you\u2019re now not upgrading just once, but dozens of times.

Automation may be the only option, especially for large companies maintaining thousands of services.`,index:4,start:114,end:152,notesHTML:`<p>Here\u2019s  a very brief overview of the types of migrations I\u2019ll be talking about.</p>
<p>Likely you already performed some of these migrations in the past.
And other migrations are always just around the corner.</p>
<p>If you look back over time, there\u2019s a near constant stream of worthwhile improvements to pick up.</p>
<p>And I like the challenge; I still get excited whenever a new version comes out.
I just don\u2019t like the repetitive elements that come with upgrading.</p>
<p>And if you try to keep up by hand, you will hardly get anything else done!
Especially as micro services mean you\u2019re now not upgrading just once, but dozens of times.</p>
<p>Automation may be the only option, especially for large companies maintaining thousands of services.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Pw,meta:{layout:"center",slide:{raw:`---
layout: center
---

![OpenRewrite](/rewrite-logo.png)

<!--
So imagine my excitement last year, when I discovered OpenRewrite.
OpenRewrite promises to make light work of all such migrations.

With a simple command, you can now upgrade between versions of Java and Spring.
You can even migrate between frameworks, such as from JUnit to AssertJ, and even from Java EE to Spring.

In this talk I\u2019ll tell you all about OpenRewrite;
- how it came about;
- how it works,
- and what you can do with it.

Finally we\u2019ll look briefly at who is developing these recipes and how to apply them to Open Source projects.
-->
`,content:"![OpenRewrite](/rewrite-logo.png)",frontmatter:{layout:"center"},note:`So imagine my excitement last year, when I discovered OpenRewrite.
OpenRewrite promises to make light work of all such migrations.

With a simple command, you can now upgrade between versions of Java and Spring.
You can even migrate between frameworks, such as from JUnit to AssertJ, and even from Java EE to Spring.

In this talk I\u2019ll tell you all about OpenRewrite;
- how it came about;
- how it works,
- and what you can do with it.

Finally we\u2019ll look briefly at who is developing these recipes and how to apply them to Open Source projects.`,index:5,start:152,end:173,notesHTML:`<p>So imagine my excitement last year, when I discovered OpenRewrite.
OpenRewrite promises to make light work of all such migrations.</p>
<p>With a simple command, you can now upgrade between versions of Java and Spring.
You can even migrate between frameworks, such as from JUnit to AssertJ, and even from Java EE to Spring.</p>
<p>In this talk I\u2019ll tell you all about OpenRewrite;</p>
<ul>
<li>how it came about;</li>
<li>how it works,</li>
<li>and what you can do with it.</li>
</ul>
<p>Finally we\u2019ll look briefly at who is developing these recipes and how to apply them to Open Source projects.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:zw,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

# Origin

- Internal logging framework \u2192 SLF4J

- Perfect transformation required

- Abstract Syntax Tree parser & manipulation

- Produce minimal changes

::right::

![Netflix](/netflix-logo-2015.svg)

<br/><br/><br/><br/>

![Netflix](/slf4j-logo.png)

<!--
OpenRewrite was started at Netflix; Initially to aid in the migration of an internal logging framework to SLF4J.

You can probably imagine any logging framework is going to be pervasive throughout an organisation.
To even consider migrating you would need perfectly accurate automation, especially when usage is spread across hundreds of services.

So they developed a parser to accurately read Java, and turn source code into an Abstract Syntax Tree.
This model can then be modified to replace the old logging statements with calls to SLF4J. 

Next the migrated model is written out as close as possible to the original source code.
This way the applied changes are minimal, leaving surrounding code untouched.
-->`,title:"Origin",level:1,content:`# Origin

- Internal logging framework \u2192 SLF4J

- Perfect transformation required

- Abstract Syntax Tree parser & manipulation

- Produce minimal changes

::right::

![Netflix](/netflix-logo-2015.svg)

<br/><br/><br/><br/>

![Netflix](/slf4j-logo.png)`,frontmatter:{layout:"two-cols"},note:`OpenRewrite was started at Netflix; Initially to aid in the migration of an internal logging framework to SLF4J.

You can probably imagine any logging framework is going to be pervasive throughout an organisation.
To even consider migrating you would need perfectly accurate automation, especially when usage is spread across hundreds of services.

So they developed a parser to accurately read Java, and turn source code into an Abstract Syntax Tree.
This model can then be modified to replace the old logging statements with calls to SLF4J. 

Next the migrated model is written out as close as possible to the original source code.
This way the applied changes are minimal, leaving surrounding code untouched.`,index:6,start:173,end:207,notesHTML:`<p>OpenRewrite was started at Netflix; Initially to aid in the migration of an internal logging framework to SLF4J.</p>
<p>You can probably imagine any logging framework is going to be pervasive throughout an organisation.
To even consider migrating you would need perfectly accurate automation, especially when usage is spread across hundreds of services.</p>
<p>So they developed a parser to accurately read Java, and turn source code into an Abstract Syntax Tree.
This model can then be modified to replace the old logging statements with calls to SLF4J.</p>
<p>Next the migrated model is written out as close as possible to the original source code.
This way the applied changes are minimal, leaving surrounding code untouched.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Zw,meta:{layout:"image-right",image:"https://images.unsplash.com/photo-1518623001395-125242310d0c?fit=crop&h=900&w=800",slide:{raw:`---
layout: image-right
#image: https://source.unsplash.com/800x900/?arrow
image: https://images.unsplash.com/photo-1518623001395-125242310d0c?fit=crop&h=900&w=800
---

# Broader application

- Spinnaker onboarding stalled

- Struggle with outdated libraries & frameworks

  - Spring Boot 1.x \u2192 2.x

  - JUnit 4 \u2192 JUnit 5

- Apache licensed

<!--
Later, the same developers moved on to work on Spinnaker.
While trying to onboard teams and organisations there,
they found teams often struggled with the same outdated libraries and frameworks.

To help these teams adopt the latest versions,
they applied a different set of transformations,
through the same Abstract Syntax Tree parser.

This allowed them to quickly reduce this technical debt,
bringing teams from Spring Boot 1 to 2, and from JUnit 4 to JUnit 5.

The project has since been Open Sourced,
with the company behind it committed
to making all recipes available
under the Apache licence for Open Source Software.
-->`,title:"Broader application",level:1,content:`# Broader application

- Spinnaker onboarding stalled

- Struggle with outdated libraries & frameworks

  - Spring Boot 1.x \u2192 2.x

  - JUnit 4 \u2192 JUnit 5

- Apache licensed`,frontmatter:{layout:"image-right",image:"https://images.unsplash.com/photo-1518623001395-125242310d0c?fit=crop&h=900&w=800"},note:`Later, the same developers moved on to work on Spinnaker.
While trying to onboard teams and organisations there,
they found teams often struggled with the same outdated libraries and frameworks.

To help these teams adopt the latest versions,
they applied a different set of transformations,
through the same Abstract Syntax Tree parser.

This allowed them to quickly reduce this technical debt,
bringing teams from Spring Boot 1 to 2, and from JUnit 4 to JUnit 5.

The project has since been Open Sourced,
with the company behind it committed
to making all recipes available
under the Apache licence for Open Source Software.`,index:7,start:207,end:242,notesHTML:`<p>Later, the same developers moved on to work on Spinnaker.
While trying to onboard teams and organisations there,
they found teams often struggled with the same outdated libraries and frameworks.</p>
<p>To help these teams adopt the latest versions,
they applied a different set of transformations,
through the same Abstract Syntax Tree parser.</p>
<p>This allowed them to quickly reduce this technical debt,
bringing teams from Spring Boot 1 to 2, and from JUnit 4 to JUnit 5.</p>
<p>The project has since been Open Sourced,
with the company behind it committed
to making all recipes available
under the Apache licence for Open Source Software.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:a5,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

# Early focus on JVM
<br/>

## Search & transformation
<br/>

## Refactoring ecosystem

::right::

![Technologies](/tech-logos.png)

<!--
The initial focus for OpenRewrite is on Java Virtual Machine languages and surrounding technologies.

There are parsers for Java, Groovy, Yaml and XML.

These in turn unlock support for build tools such as Maven and Gradle, and libraries such as JUnit, AssertJ and Guava.

Ultimately, refactoring entire frameworks and platforms is supported,
with recipes available for application frameworks such as Micronaut, Quarkus and Spring.
-->`,title:"Early focus on JVM",level:1,content:`# Early focus on JVM
<br/>

## Search & transformation
<br/>

## Refactoring ecosystem

::right::

![Technologies](/tech-logos.png)`,frontmatter:{layout:"two-cols"},note:`The initial focus for OpenRewrite is on Java Virtual Machine languages and surrounding technologies.

There are parsers for Java, Groovy, Yaml and XML.

These in turn unlock support for build tools such as Maven and Gradle, and libraries such as JUnit, AssertJ and Guava.

Ultimately, refactoring entire frameworks and platforms is supported,
with recipes available for application frameworks such as Micronaut, Quarkus and Spring.`,index:8,start:242,end:268,notesHTML:`<p>The initial focus for OpenRewrite is on Java Virtual Machine languages and surrounding technologies.</p>
<p>There are parsers for Java, Groovy, Yaml and XML.</p>
<p>These in turn unlock support for build tools such as Maven and Gradle, and libraries such as JUnit, AssertJ and Guava.</p>
<p>Ultimately, refactoring entire frameworks and platforms is supported,
with recipes available for application frameworks such as Micronaut, Quarkus and Spring.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:y5,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

# Abstract syntax tree
<br/>

## Type attribution
<br/>

## Format preservation

::right::

![AST](/ast.png)

<!--
OpenRewrite is not the only parser capable of understanding and manipulating Java.
However, two features set OpenRewrite apart from the competition.

The first is their focus on exact type attribution.
By having the exact type available on any tree element, they can be sure to only manipulate exact matches.

The second characteristic that sets OpenRewrite apart is their format preservation.
Their parser not only takes into account the functional code, but also the surrounding code style and indentation.

This allows them to accurately reproduce your source file, regardless of further changes.
Any changes made through OpenRewrite, look just like a colleague worked on your code.

Together, these features make OpenRewrite exceptionally good at safe code transformations.
Their changes are minimally invasive, and guaranteed to work, in part due to their do no harm mentality.

By manipulating the full Abstract Syntax Tree, OpenRewrite can far exceed simple search and replace operations.
-->`,title:"Abstract syntax tree",level:1,content:`# Abstract syntax tree
<br/>

## Type attribution
<br/>

## Format preservation

::right::

![AST](/ast.png)`,frontmatter:{layout:"two-cols"},note:`OpenRewrite is not the only parser capable of understanding and manipulating Java.
However, two features set OpenRewrite apart from the competition.

The first is their focus on exact type attribution.
By having the exact type available on any tree element, they can be sure to only manipulate exact matches.

The second characteristic that sets OpenRewrite apart is their format preservation.
Their parser not only takes into account the functional code, but also the surrounding code style and indentation.

This allows them to accurately reproduce your source file, regardless of further changes.
Any changes made through OpenRewrite, look just like a colleague worked on your code.

Together, these features make OpenRewrite exceptionally good at safe code transformations.
Their changes are minimally invasive, and guaranteed to work, in part due to their do no harm mentality.

By manipulating the full Abstract Syntax Tree, OpenRewrite can far exceed simple search and replace operations.`,index:9,start:268,end:302,notesHTML:`<p>OpenRewrite is not the only parser capable of understanding and manipulating Java.
However, two features set OpenRewrite apart from the competition.</p>
<p>The first is their focus on exact type attribution.
By having the exact type available on any tree element, they can be sure to only manipulate exact matches.</p>
<p>The second characteristic that sets OpenRewrite apart is their format preservation.
Their parser not only takes into account the functional code, but also the surrounding code style and indentation.</p>
<p>This allows them to accurately reproduce your source file, regardless of further changes.
Any changes made through OpenRewrite, look just like a colleague worked on your code.</p>
<p>Together, these features make OpenRewrite exceptionally good at safe code transformations.
Their changes are minimally invasive, and guaranteed to work, in part due to their do no harm mentality.</p>
<p>By manipulating the full Abstract Syntax Tree, OpenRewrite can far exceed simple search and replace operations.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:j5,meta:{layout:"cover",background:"https://images.unsplash.com/photo-1560961911-ba7ef651a56c?fit=crop&h=900&w=800",slide:{raw:`---
# https://duotone.shapefactory.co/?f=e17d00&t=193569&q=lego%20house
layout: cover
background: https://images.unsplash.com/photo-1560961911-ba7ef651a56c?fit=crop&h=900&w=800
---

# Recipes
<br/>

## Search & Refactor
<br/>

## Composition

<!--
With the full abstract syntax tree built, we need to instruct OpenRewrite what operations to apply, where in your code.

Recipes are how you define such a group of search and refactoring operations.
Together they accomplish a higher level task, such as a framework migration.

Recipes can consist of a single, stand-alone operation, or be linked together with other recipes.
OpenRewrite comes with a large collection of fine grained recipes out of the box,
that can be combined for common migration steps.

You can think of these as lego building blocks, ready to be applied with the proper parameters.
There are hundreds of these building blocks to for instance:
- change types
- change methods
- change arguments
- manipulate properties
- and alter dependencies & plugins.
-->
`,title:"Recipes",level:1,content:`# Recipes
<br/>

## Search & Refactor
<br/>

## Composition`,frontmatter:{layout:"cover",background:"https://images.unsplash.com/photo-1560961911-ba7ef651a56c?fit=crop&h=900&w=800"},note:`With the full abstract syntax tree built, we need to instruct OpenRewrite what operations to apply, where in your code.

Recipes are how you define such a group of search and refactoring operations.
Together they accomplish a higher level task, such as a framework migration.

Recipes can consist of a single, stand-alone operation, or be linked together with other recipes.
OpenRewrite comes with a large collection of fine grained recipes out of the box,
that can be combined for common migration steps.

You can think of these as lego building blocks, ready to be applied with the proper parameters.
There are hundreds of these building blocks to for instance:
- change types
- change methods
- change arguments
- manipulate properties
- and alter dependencies & plugins.`,index:10,start:302,end:335,notesHTML:`<p>With the full abstract syntax tree built, we need to instruct OpenRewrite what operations to apply, where in your code.</p>
<p>Recipes are how you define such a group of search and refactoring operations.
Together they accomplish a higher level task, such as a framework migration.</p>
<p>Recipes can consist of a single, stand-alone operation, or be linked together with other recipes.
OpenRewrite comes with a large collection of fine grained recipes out of the box,
that can be combined for common migration steps.</p>
<p>You can think of these as lego building blocks, ready to be applied with the proper parameters.
There are hundreds of these building blocks to for instance:</p>
<ul>
<li>change types</li>
<li>change methods</li>
<li>change arguments</li>
<li>manipulate properties</li>
<li>and alter dependencies &amp; plugins.</li>
</ul>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:D5,meta:{layout:"image-right",image:"https://images.unsplash.com/photo-1533557213878-99cda20b1400?fit=crop&h=900&w=800",slide:{raw:`---
layout: image-right
image: https://images.unsplash.com/photo-1533557213878-99cda20b1400?fit=crop&h=900&w=800
---

# Visitors
<br/>

## Match & modify elements

<!--
Individual recipes are implemented as Java visitors
that first match
and then modify
elements of the abstract syntax tree.

There are plenty of examples available,
but note that you only need a dedicated Java visitor
when none of the existing recipes can already achieve your goals.

Typically, you can get very far only configuring,
combining and applying existing recipes through a yaml description file.
-->
`,title:"Visitors",level:1,content:`# Visitors
<br/>

## Match & modify elements`,frontmatter:{layout:"image-right",image:"https://images.unsplash.com/photo-1533557213878-99cda20b1400?fit=crop&h=900&w=800"},note:`Individual recipes are implemented as Java visitors
that first match
and then modify
elements of the abstract syntax tree.

There are plenty of examples available,
but note that you only need a dedicated Java visitor
when none of the existing recipes can already achieve your goals.

Typically, you can get very far only configuring,
combining and applying existing recipes through a yaml description file.`,index:11,start:335,end:359,notesHTML:`<p>Individual recipes are implemented as Java visitors
that first match
and then modify
elements of the abstract syntax tree.</p>
<p>There are plenty of examples available,
but note that you only need a dedicated Java visitor
when none of the existing recipes can already achieve your goals.</p>
<p>Typically, you can get very far only configuring,
combining and applying existing recipes through a yaml description file.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:k5,meta:{layout:"cover",background:"https://images.unsplash.com/photo-1663173775686-d1529e901713?fit=crop&h=900&w=800",slide:{raw:`---
layout: cover
background: https://images.unsplash.com/photo-1663173775686-d1529e901713?fit=crop&h=900&w=800
---

# Modules
<br/>

## Specific purpose
<br/>

## Complete migrations

<!--
Modules combine and group together these fine grained recipes,
into more coarse grained, application specific recipes.

There are modules for example for 
- logging frameworks, 
- testing frameworks 
- and application frameworks such as Spring.

Think of these as lego sets, with build plans for common migrations and fixes, ready to be used.

In my opinion, the Abstract Syntax Tree, combined with the large collection of Open Source recipes,
is what sets OpenRewrite apart from other similar tools, such as Google ErrorProne\u2019s Refaster.
-->
`,title:"Modules",level:1,content:`# Modules
<br/>

## Specific purpose
<br/>

## Complete migrations`,frontmatter:{layout:"cover",background:"https://images.unsplash.com/photo-1663173775686-d1529e901713?fit=crop&h=900&w=800"},note:`Modules combine and group together these fine grained recipes,
into more coarse grained, application specific recipes.

There are modules for example for 
- logging frameworks, 
- testing frameworks 
- and application frameworks such as Spring.

Think of these as lego sets, with build plans for common migrations and fixes, ready to be used.

In my opinion, the Abstract Syntax Tree, combined with the large collection of Open Source recipes,
is what sets OpenRewrite apart from other similar tools, such as Google ErrorProne\u2019s Refaster.`,index:12,start:359,end:387,notesHTML:`<p>Modules combine and group together these fine grained recipes,
into more coarse grained, application specific recipes.</p>
<p>There are modules for example for</p>
<ul>
<li>logging frameworks,</li>
<li>testing frameworks</li>
<li>and application frameworks such as Spring.</li>
</ul>
<p>Think of these as lego sets, with build plans for common migrations and fixes, ready to be used.</p>
<p>In my opinion, the Abstract Syntax Tree, combined with the large collection of Open Source recipes,
is what sets OpenRewrite apart from other similar tools, such as Google ErrorProne\u2019s Refaster.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:uN,meta:{slide:{raw:`

# JUnit 5 recipe

\`\`\`yaml {1-6|7-}
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.JUnit4to5Migration
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.Test
      newFullyQualifiedTypeName: org.junit.jupiter.api.Test
  - org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
  - org.openrewrite.java.testing.junit5.AssertToAssertions
  - org.openrewrite.java.testing.junit5.StaticImports
  - org.openrewrite.java.testing.junit5.ExpectedExceptionToAssertThrows
  - \u2026
\`\`\`


<!--
Now I want to show you how migration recipes are configured in OpenRewrite.

Let us briefly look at a migration from JUnit 4 to JUnit 5.
I want you to imagine what steps would be needed for a JUnit 5 migration.

You likely know a couple of the steps already.

Among others you would have to
- update the test annotations
- But you would also have to 
  - update the assertions, and sometimes argument order
  - update all imports
  - update any test rules
  - and that\u2019s just getting started

Notice how each step is reflected as a separate Recipe in this YAML configuration file.

Some refer to and configure generic steps, such as the ChangeType recipe.

Others are implemented as an imperative step;
a dedicated Java visitor that changes the abstract syntax tree.

All these steps combine to achieve a complete JUnit 5 migration.
-->
`,title:"JUnit 5 recipe",level:1,content:`# JUnit 5 recipe

\`\`\`yaml {1-6|7-}
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.JUnit4to5Migration
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.Test
      newFullyQualifiedTypeName: org.junit.jupiter.api.Test
  - org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
  - org.openrewrite.java.testing.junit5.AssertToAssertions
  - org.openrewrite.java.testing.junit5.StaticImports
  - org.openrewrite.java.testing.junit5.ExpectedExceptionToAssertThrows
  - \u2026
\`\`\``,frontmatter:{},note:`Now I want to show you how migration recipes are configured in OpenRewrite.

Let us briefly look at a migration from JUnit 4 to JUnit 5.
I want you to imagine what steps would be needed for a JUnit 5 migration.

You likely know a couple of the steps already.

Among others you would have to
- update the test annotations
- But you would also have to 
  - update the assertions, and sometimes argument order
  - update all imports
  - update any test rules
  - and that\u2019s just getting started

Notice how each step is reflected as a separate Recipe in this YAML configuration file.

Some refer to and configure generic steps, such as the ChangeType recipe.

Others are implemented as an imperative step;
a dedicated Java visitor that changes the abstract syntax tree.

All these steps combine to achieve a complete JUnit 5 migration.`,index:13,start:388,end:433,notesHTML:`<p>Now I want to show you how migration recipes are configured in OpenRewrite.</p>
<p>Let us briefly look at a migration from JUnit 4 to JUnit 5.
I want you to imagine what steps would be needed for a JUnit 5 migration.</p>
<p>You likely know a couple of the steps already.</p>
<p>Among others you would have to</p>
<ul>
<li>update the test annotations</li>
<li>But you would also have to
<ul>
<li>update the assertions, and sometimes argument order</li>
<li>update all imports</li>
<li>update any test rules</li>
<li>and that\u2019s just getting started</li>
</ul>
</li>
</ul>
<p>Notice how each step is reflected as a separate Recipe in this YAML configuration file.</p>
<p>Some refer to and configure generic steps, such as the ChangeType recipe.</p>
<p>Others are implemented as an imperative step;
a dedicated Java visitor that changes the abstract syntax tree.</p>
<p>All these steps combine to achieve a complete JUnit 5 migration.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:vN,meta:{layout:"statement",slide:{raw:`---
layout: statement
---

# Large migrations in
# small reusable steps
<!--
This is a common pattern with OpenRewrite:

Large migrations are broken up into small reusable steps.
-->`,title:"Large migrations in",level:1,content:`# Large migrations in
# small reusable steps`,frontmatter:{layout:"statement"},note:`This is a common pattern with OpenRewrite:

Large migrations are broken up into small reusable steps.`,index:14,start:433,end:444,notesHTML:`<p>This is a common pattern with OpenRewrite:</p>
<p>Large migrations are broken up into small reusable steps.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:NN,meta:{slide:{raw:`

# JUnit 5 imports

\`\`\`diff {5-15,18-19,22-23}
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
@@ -1,19 +1,20 @@
 package org.springframework.samples.petclinic.owner;
 
-import static org.junit.Assert.assertEquals;
-
-import org.junit.Before;
-import org.junit.Test;
-import org.junit.runner.RunWith;
+import static org.junit.jupiter.api.Assertions.assertEquals;
+import static org.junit.jupiter.api.Assertions.assertThrows;
+
+import org.junit.jupiter.api.BeforeEach;
+import org.junit.jupiter.api.Test;
+import org.junit.jupiter.api.extension.ExtendWith;
 import org.mockito.Mock;
 import org.mockito.Mockito;
-import org.mockito.runners.MockitoJUnitRunner;
+import org.mockito.junit.jupiter.MockitoExtension;

@@ -23,7 +24,7 @@
-@RunWith(MockitoJUnitRunner.class)
+@ExtendWith(MockitoExtension.class)
 public class PetTypeFormatterTests {
\`\`\`

<!--
When we run this Recipe, we get predictable results.

Our imports are converted as we would expect.

And our Mockito Runner is converted into using the Extension.

Life cycle annotations such as @Before are correctly replaced.
-->`,title:"JUnit 5 imports",level:1,content:`# JUnit 5 imports

\`\`\`diff {5-15,18-19,22-23}
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
@@ -1,19 +1,20 @@
 package org.springframework.samples.petclinic.owner;
 
-import static org.junit.Assert.assertEquals;
-
-import org.junit.Before;
-import org.junit.Test;
-import org.junit.runner.RunWith;
+import static org.junit.jupiter.api.Assertions.assertEquals;
+import static org.junit.jupiter.api.Assertions.assertThrows;
+
+import org.junit.jupiter.api.BeforeEach;
+import org.junit.jupiter.api.Test;
+import org.junit.jupiter.api.extension.ExtendWith;
 import org.mockito.Mock;
 import org.mockito.Mockito;
-import org.mockito.runners.MockitoJUnitRunner;
+import org.mockito.junit.jupiter.MockitoExtension;

@@ -23,7 +24,7 @@
-@RunWith(MockitoJUnitRunner.class)
+@ExtendWith(MockitoExtension.class)
 public class PetTypeFormatterTests {
\`\`\``,frontmatter:{},note:`When we run this Recipe, we get predictable results.

Our imports are converted as we would expect.

And our Mockito Runner is converted into using the Extension.

Life cycle annotations such as @Before are correctly replaced.`,index:15,start:445,end:485,notesHTML:`<p>When we run this Recipe, we get predictable results.</p>
<p>Our imports are converted as we would expect.</p>
<p>And our Mockito Runner is converted into using the Extension.</p>
<p>Life cycle annotations such as @Before are correctly replaced.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:IN,meta:{slide:{raw:`

# JUnit 5 tests

\`\`\`diff {6-}
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
index f332257..1d5e072 100644
--- a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
@@ -31,13 +32,13 @@ public class PetTypeFormatterTests {
-    @Test(expected = ParseException.class)
-    public void shouldThrowParseException() throws ParseException {
-        Mockito.when(this.pets.findPetTypes()).thenReturn(makePetTypes());
-        petTypeFormatter.parse("Fish", Locale.ENGLISH);
+    @Test
+    void shouldThrowParseException() throws ParseException {
+        assertThrows(ParseException.class, () \u2192 {
+            Mockito.when(this.pets.findPetTypes()).thenReturn(makePetTypes());
+            petTypeFormatter.parse("Fish", Locale.ENGLISH);
+        });
     }
\`\`\`

<!--
Now interestingly, we can see how OpenRewrite shines through when it comes to converting expected exceptions.

Having the full power of an abstract syntax tree, combined with a Java visitor, allows us to adopt Assert Throws.
This would not be possible with a regular expression approach.

And this is just a small sample of what types of transformations are possible.
-->`,title:"JUnit 5 tests",level:1,content:`# JUnit 5 tests

\`\`\`diff {6-}
diff --git a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
index f332257..1d5e072 100644
--- a/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
+++ b/src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java
@@ -31,13 +32,13 @@ public class PetTypeFormatterTests {
-    @Test(expected = ParseException.class)
-    public void shouldThrowParseException() throws ParseException {
-        Mockito.when(this.pets.findPetTypes()).thenReturn(makePetTypes());
-        petTypeFormatter.parse("Fish", Locale.ENGLISH);
+    @Test
+    void shouldThrowParseException() throws ParseException {
+        assertThrows(ParseException.class, () \u2192 {
+            Mockito.when(this.pets.findPetTypes()).thenReturn(makePetTypes());
+            petTypeFormatter.parse("Fish", Locale.ENGLISH);
+        });
     }
\`\`\``,frontmatter:{},note:`Now interestingly, we can see how OpenRewrite shines through when it comes to converting expected exceptions.

Having the full power of an abstract syntax tree, combined with a Java visitor, allows us to adopt Assert Throws.
This would not be possible with a regular expression approach.

And this is just a small sample of what types of transformations are possible.`,index:16,start:486,end:517,notesHTML:`<p>Now interestingly, we can see how OpenRewrite shines through when it comes to converting expected exceptions.</p>
<p>Having the full power of an abstract syntax tree, combined with a Java visitor, allows us to adopt Assert Throws.
This would not be possible with a regular expression approach.</p>
<p>And this is just a small sample of what types of transformations are possible.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:RN,meta:{slide:{raw:`

# Running recipes

1. Apply OpenRewrite plugin
2. With Module dependency
3. Run migration recipe

\`\`\`shell {1,3,5}
./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run
	-Drewrite.recipeArtifactCoordinates=
		org.openrewrite.recipe:rewrite-spring:4.27.0
	-DactiveRecipes=
		org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
\`\`\`

<!--
Running migration recipes is fairly straightforward.

First, apply a build tool plugin for OpenRewrite.
	I\u2019ve used Maven in my example, but Gradle works just as well.

Then, depending on the changes you want to make,
	add a dependency on the respective OpenRewrite module.

Lastly, run the OpenRewrite plugin
	with the migration Recipe that you want to execute.

The command seen here will  migrate a Spring Boot application to the latest version.
This works all the way back to Spring Boot 1.5.

This will update dependencies, properties, and deprecations from any older versions.
And it includes the JUnit 5 migration seen before, as well as any Spring specific test constructs.
-->`,title:"Running recipes",level:1,content:`# Running recipes

1. Apply OpenRewrite plugin
2. With Module dependency
3. Run migration recipe

\`\`\`shell {1,3,5}
./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run
	-Drewrite.recipeArtifactCoordinates=
		org.openrewrite.recipe:rewrite-spring:4.27.0
	-DactiveRecipes=
		org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
\`\`\``,frontmatter:{},note:`Running migration recipes is fairly straightforward.

First, apply a build tool plugin for OpenRewrite.
	I\u2019ve used Maven in my example, but Gradle works just as well.

Then, depending on the changes you want to make,
	add a dependency on the respective OpenRewrite module.

Lastly, run the OpenRewrite plugin
	with the migration Recipe that you want to execute.

The command seen here will  migrate a Spring Boot application to the latest version.
This works all the way back to Spring Boot 1.5.

This will update dependencies, properties, and deprecations from any older versions.
And it includes the JUnit 5 migration seen before, as well as any Spring specific test constructs.`,index:17,start:518,end:552,notesHTML:`<p>Running migration recipes is fairly straightforward.</p>
<p>First, apply a build tool plugin for OpenRewrite.
I\u2019ve used Maven in my example, but Gradle works just as well.</p>
<p>Then, depending on the changes you want to make,
add a dependency on the respective OpenRewrite module.</p>
<p>Lastly, run the OpenRewrite plugin
with the migration Recipe that you want to execute.</p>
<p>The command seen here will  migrate a Spring Boot application to the latest version.
This works all the way back to Spring Boot 1.5.</p>
<p>This will update dependencies, properties, and deprecations from any older versions.
And it includes the JUnit 5 migration seen before, as well as any Spring specific test constructs.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:UN,meta:{layout:"image-left",image:"/petclinic.png",slide:{raw:`---
layout: image-left
image: /petclinic.png
---

# PetClinic migration
<br/>

## Spring Boot 1.5 \u2192 2.7
<br/>

## Java 8 \u2192 Java 17
<br/>

## JUnit 4 \u2192 JUnit 5


<!--
To show you just how easy it is to migrate a project, I\u2019ve prepared a small demo.

For this demo, we will upgrade an old Spring PetClinic branch from Spring Boot 1.5 on Java 8, all the way to Spring Boot 2 on Java 17.

We will look at the commands and changes made in more detail along the way.
-->`,title:"PetClinic migration",level:1,content:`# PetClinic migration
<br/>

## Spring Boot 1.5 \u2192 2.7
<br/>

## Java 8 \u2192 Java 17
<br/>

## JUnit 4 \u2192 JUnit 5`,frontmatter:{layout:"image-left",image:"/petclinic.png"},note:`To show you just how easy it is to migrate a project, I\u2019ve prepared a small demo.

For this demo, we will upgrade an old Spring PetClinic branch from Spring Boot 1.5 on Java 8, all the way to Spring Boot 2 on Java 17.

We will look at the commands and changes made in more detail along the way.`,index:18,start:552,end:576,notesHTML:`<p>To show you just how easy it is to migrate a project, I\u2019ve prepared a small demo.</p>
<p>For this demo, we will upgrade an old Spring PetClinic branch from Spring Boot 1.5 on Java 8, all the way to Spring Boot 2 on Java 17.</p>
<p>We will look at the commands and changes made in more detail along the way.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:VN,meta:{layout:"section",slide:{raw:`---
layout: section
---

# Demo

![Demonstration](https://images.unsplash.com/photo-1590962467161-2555c3b99cf9?crop=entropy&fit=crop&h=900&w=1600)
`,title:"Demo",level:1,content:`# Demo

![Demonstration](https://images.unsplash.com/photo-1590962467161-2555c3b99cf9?crop=entropy&fit=crop&h=900&w=1600)`,frontmatter:{layout:"section"},index:19,start:576,end:584,notesHTML:"",filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:ZN,meta:{layout:"image-right",image:"https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?crop=entropy&fit=crop&h=900&w=800",slide:{raw:`---
layout: image-right
#image: https://source.unsplash.com/800x900/?tools
image: https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?crop=entropy&fit=crop&h=900&w=800
---
# Applications
<br/>

## Migrate
<br/>

## Fix
<br/>

## Enforce


<!--
Now that we have seen how OpenRewrite works,
Let\u2019s have a look at what you can do with it.

Obviously by now we have seen that it is well suited to migrations.
You have mostly seen migrations from one version to another.
But you can also migrate from one framework to another.

If you want to switch from Log4J to SLF4J, you can.
Same thing for switching between JUnit and AssertJ.
And even larger migrations are in development.

Another application is fixing static analysis findings.
A large collection of CheckStyle, Sonar and Security findings are supported,
to allow you to reduce your technical debt in minutes.

Finally there is a whole class of recipes to enforce code style.
Rather than merely apply a formatter, these style recipes go a step further to actually change your code.
This ensures your code style reads consistently from project to project.

And in addition to what is already available, it\u2019s fairly easy to add custom recipes specific to your projects.
-->`,title:"Applications",level:1,content:`# Applications
<br/>

## Migrate
<br/>

## Fix
<br/>

## Enforce`,frontmatter:{layout:"image-right",image:"https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?crop=entropy&fit=crop&h=900&w=800"},note:`Now that we have seen how OpenRewrite works,
Let\u2019s have a look at what you can do with it.

Obviously by now we have seen that it is well suited to migrations.
You have mostly seen migrations from one version to another.
But you can also migrate from one framework to another.

If you want to switch from Log4J to SLF4J, you can.
Same thing for switching between JUnit and AssertJ.
And even larger migrations are in development.

Another application is fixing static analysis findings.
A large collection of CheckStyle, Sonar and Security findings are supported,
to allow you to reduce your technical debt in minutes.

Finally there is a whole class of recipes to enforce code style.
Rather than merely apply a formatter, these style recipes go a step further to actually change your code.
This ensures your code style reads consistently from project to project.

And in addition to what is already available, it\u2019s fairly easy to add custom recipes specific to your projects.`,index:20,start:584,end:623,notesHTML:`<p>Now that we have seen how OpenRewrite works,
Let\u2019s have a look at what you can do with it.</p>
<p>Obviously by now we have seen that it is well suited to migrations.
You have mostly seen migrations from one version to another.
But you can also migrate from one framework to another.</p>
<p>If you want to switch from Log4J to SLF4J, you can.
Same thing for switching between JUnit and AssertJ.
And even larger migrations are in development.</p>
<p>Another application is fixing static analysis findings.
A large collection of CheckStyle, Sonar and Security findings are supported,
to allow you to reduce your technical debt in minutes.</p>
<p>Finally there is a whole class of recipes to enforce code style.
Rather than merely apply a formatter, these style recipes go a step further to actually change your code.
This ensures your code style reads consistently from project to project.</p>
<p>And in addition to what is already available, it\u2019s fairly easy to add custom recipes specific to your projects.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:l1,meta:{layout:"image-right",image:"https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?fit=crop&fm=jpg&h=900&w=800",slide:{raw:`---
layout: image-right
image: >-
  https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?fit=crop&fm=jpg&h=900&w=800
---

# Future
<br/>

## Java 17+
<br/>

## Kotlin
<br/>

## Dataflow
<br/>

## Spring Boot Migrator

<!--
So, now that we have seen how it works, and what it can do, let\u2019s briefly look ahead at what is still to come.

As you have seen, OpenRewrite has dedicated parsers for multiple languages already.
But, as you can imagine, they have some catching up to do still.

They are working on a parser for both Java 17+ and Kotlin.
Note that you are perfectly able to run on Java 17, but you can not yet migrate to some of the new language features.
The interesting thing about Kotlin is going to be that Java migration recipes will just work, even though the languages look very different.

Another subject they are working on is data flow analysis.
This not only takes into account individual code statements,
but also how data flows through an appliction.
This will allow recipes to for instance add immutability or detailed security fixes.

Another interesting development, is the Spring Boot Migrator project from VMWare.
It builds upon OpenRewrite, to migrate projects towards Spring from other frameworks.
It takes a slightly different, more interactive approach,
which will be helpful when Spring Boot 3 arrives in November.

All of these features are in active development.
It is not yet clear when you can use any of this,
but interesting developments nonetheless.
-->
`,title:"Future",level:1,content:`# Future
<br/>

## Java 17+
<br/>

## Kotlin
<br/>

## Dataflow
<br/>

## Spring Boot Migrator`,frontmatter:{layout:"image-right",image:"https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?fit=crop&fm=jpg&h=900&w=800"},note:`So, now that we have seen how it works, and what it can do, let\u2019s briefly look ahead at what is still to come.

As you have seen, OpenRewrite has dedicated parsers for multiple languages already.
But, as you can imagine, they have some catching up to do still.

They are working on a parser for both Java 17+ and Kotlin.
Note that you are perfectly able to run on Java 17, but you can not yet migrate to some of the new language features.
The interesting thing about Kotlin is going to be that Java migration recipes will just work, even though the languages look very different.

Another subject they are working on is data flow analysis.
This not only takes into account individual code statements,
but also how data flows through an appliction.
This will allow recipes to for instance add immutability or detailed security fixes.

Another interesting development, is the Spring Boot Migrator project from VMWare.
It builds upon OpenRewrite, to migrate projects towards Spring from other frameworks.
It takes a slightly different, more interactive approach,
which will be helpful when Spring Boot 3 arrives in November.

All of these features are in active development.
It is not yet clear when you can use any of this,
but interesting developments nonetheless.`,index:21,start:623,end:668,notesHTML:`<p>So, now that we have seen how it works, and what it can do, let\u2019s briefly look ahead at what is still to come.</p>
<p>As you have seen, OpenRewrite has dedicated parsers for multiple languages already.
But, as you can imagine, they have some catching up to do still.</p>
<p>They are working on a parser for both Java 17+ and Kotlin.
Note that you are perfectly able to run on Java 17, but you can not yet migrate to some of the new language features.
The interesting thing about Kotlin is going to be that Java migration recipes will just work, even though the languages look very different.</p>
<p>Another subject they are working on is data flow analysis.
This not only takes into account individual code statements,
but also how data flows through an appliction.
This will allow recipes to for instance add immutability or detailed security fixes.</p>
<p>Another interesting development, is the Spring Boot Migrator project from VMWare.
It builds upon OpenRewrite, to migrate projects towards Spring from other frameworks.
It takes a slightly different, more interactive approach,
which will be helpful when Spring Boot 3 arrives in November.</p>
<p>All of these features are in active development.
It is not yet clear when you can use any of this,
but interesting developments nonetheless.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:g1,meta:{layout:"center",slide:{raw:`---
layout: center
---

![Numbers](/moderne.io-numbers.png)

<!--
As a last subject, I think it\u2019s only fair to tell you a bit about the company behind OpenRewrite.
As I said before, they have committed to making all recipes available Open Source.

Their focus is on applying recipes at scale.

Through Moderne, clients can discover code patterns across an entire organisation,
and target these for transformation.
-->`,content:"![Numbers](/moderne.io-numbers.png)",frontmatter:{layout:"center"},note:`As a last subject, I think it\u2019s only fair to tell you a bit about the company behind OpenRewrite.
As I said before, they have committed to making all recipes available Open Source.

Their focus is on applying recipes at scale.

Through Moderne, clients can discover code patterns across an entire organisation,
and target these for transformation.`,index:22,start:668,end:683,notesHTML:`<p>As a last subject, I think it\u2019s only fair to tell you a bit about the company behind OpenRewrite.
As I said before, they have committed to making all recipes available Open Source.</p>
<p>Their focus is on applying recipes at scale.</p>
<p>Through Moderne, clients can discover code patterns across an entire organisation,
and target these for transformation.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:v1,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

# public.moderne.io
<div></div>

![Recipes left](/moderne.io-left.png)

::right::

![Recipes right](/moderne.io-right.png)

<!--
And even if you\u2019re not a paying customer,
you can still use their web interface to browse available recipes,
and even apply them to Open Source projects.

This can be a great way to start contributing back to Open Source software.

And if you find any migration steps are missing,
OpenRewrite itself is very accepting of new contributions.

The community plays a large role in the development of new recipes.
-->`,title:"public.moderne.io",level:1,content:`# public.moderne.io
<div></div>

![Recipes left](/moderne.io-left.png)

::right::

![Recipes right](/moderne.io-right.png)`,frontmatter:{layout:"two-cols"},note:`And even if you\u2019re not a paying customer,
you can still use their web interface to browse available recipes,
and even apply them to Open Source projects.

This can be a great way to start contributing back to Open Source software.

And if you find any migration steps are missing,
OpenRewrite itself is very accepting of new contributions.

The community plays a large role in the development of new recipes.`,index:23,start:683,end:708,notesHTML:`<p>And even if you\u2019re not a paying customer,
you can still use their web interface to browse available recipes,
and even apply them to Open Source projects.</p>
<p>This can be a great way to start contributing back to Open Source software.</p>
<p>And if you find any migration steps are missing,
OpenRewrite itself is very accepting of new contributions.</p>
<p>The community plays a large role in the development of new recipes.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:Y1,meta:{class:"text-4xl",slide:{raw:`---
class: text-4xl
---

# Where to learn more
<div></div>

<img src="/rewrite-logo-only.png" width="60" display="inline"/> docs.openrewrite.org

<logos-github-icon class="text-5xl align-middle"/> github.com/openrewrite

<br/>
<br/>
<logos-spring-icon class="text-5xl align-middle"/> github.com/spring-projects-experimental/spring-boot-migrator

<img src="/moderne-logo-only.png" width="60" display="inline"/> public.moderne.io

<logos-slack-icon  class="text-5xl align-middle"/> RewriteOSS.slack.com

<img src="/jdriven-logo.png" width="60" display="inline"/> blog.jdriven.com

<!--
So with that, we are getting near the end of my presentation.
Before I send you on your way, I want to recommend a few resources where you can learn more.

There\u2019s extensive documentation and tutorials available on OpenRewrite.

Development is all on GitHub, with new suggestions picked up with surprising speed.
And as we have already seen, it\u2019s quite easy to contribute minor migration steps.

If you want to try some Recipes quickly,
on Open Source projects,
have a look at public.moderne.io

And if you have any questions, I\u2019ve found the team behind OpenRewrite to be very friendly and responsive.
-->`,title:"Where to learn more",level:1,content:`# Where to learn more
<div></div>

<img src="/rewrite-logo-only.png" width="60" display="inline"/> docs.openrewrite.org

<logos-github-icon class="text-5xl align-middle"/> github.com/openrewrite

<br/>
<br/>
<logos-spring-icon class="text-5xl align-middle"/> github.com/spring-projects-experimental/spring-boot-migrator

<img src="/moderne-logo-only.png" width="60" display="inline"/> public.moderne.io

<logos-slack-icon  class="text-5xl align-middle"/> RewriteOSS.slack.com

<img src="/jdriven-logo.png" width="60" display="inline"/> blog.jdriven.com`,frontmatter:{class:"text-4xl"},note:`So with that, we are getting near the end of my presentation.
Before I send you on your way, I want to recommend a few resources where you can learn more.

There\u2019s extensive documentation and tutorials available on OpenRewrite.

Development is all on GitHub, with new suggestions picked up with surprising speed.
And as we have already seen, it\u2019s quite easy to contribute minor migration steps.

If you want to try some Recipes quickly,
on Open Source projects,
have a look at public.moderne.io

And if you have any questions, I\u2019ve found the team behind OpenRewrite to be very friendly and responsive.`,index:24,start:708,end:744,notesHTML:`<p>So with that, we are getting near the end of my presentation.
Before I send you on your way, I want to recommend a few resources where you can learn more.</p>
<p>There\u2019s extensive documentation and tutorials available on OpenRewrite.</p>
<p>Development is all on GitHub, with new suggestions picked up with surprising speed.
And as we have already seen, it\u2019s quite easy to contribute minor migration steps.</p>
<p>If you want to try some Recipes quickly,
on Open Source projects,
have a look at public.moderne.io</p>
<p>And if you have any questions, I\u2019ve found the team behind OpenRewrite to be very friendly and responsive.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:nj,meta:{slide:{raw:`
# _"This could have been a blogpost"_
<nbsp/>

![Blogpost](/blogpost.png)

<!--
And finally, if you would like to play around with the commands shown before,
I\u2019ve written a blogpost to accompany this presentation.

The blogpost migrates the same old Spring PetClinic branch.
That way you can play around with the commands and see the changes made at every step.

For your own projects, I recommend you start with the testing framework migrations.
They are an easy way to gain confidence in the tool, and see what it can do for your projects.
-->`,title:'_"This could have been a blogpost"_',level:1,content:`# _"This could have been a blogpost"_
<nbsp/>

![Blogpost](/blogpost.png)`,frontmatter:{},note:`And finally, if you would like to play around with the commands shown before,
I\u2019ve written a blogpost to accompany this presentation.

The blogpost migrates the same old Spring PetClinic branch.
That way you can play around with the commands and see the changes made at every step.

For your own projects, I recommend you start with the testing framework migrations.
They are an easy way to gain confidence in the tool, and see what it can do for your projects.`,index:25,start:745,end:761,notesHTML:`<p>And finally, if you would like to play around with the commands shown before,
I\u2019ve written a blogpost to accompany this presentation.</p>
<p>The blogpost migrates the same old Spring PetClinic branch.
That way you can play around with the commands and see the changes made at every step.</p>
<p>For your own projects, I recommend you start with the testing framework migrations.
They are an easy way to gain confidence in the tool, and see what it can do for your projects.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:oj,meta:{layout:"cover",background:"https://images.unsplash.com/photo-1544535830-9df3f56fff6a?h=900&w=1600",slide:{raw:`---
layout: cover
background: https://images.unsplash.com/photo-1544535830-9df3f56fff6a?h=900&w=1600
---

# Questions

<!--
And with that we get to my favorite part of any presentation.

If you have any questions feel free raise your hand to ask them right now.

Or reach out after this presentation either in person or online.
-->
`,title:"Questions",level:1,content:"# Questions",frontmatter:{layout:"cover",background:"https://images.unsplash.com/photo-1544535830-9df3f56fff6a?h=900&w=1600"},note:`And with that we get to my favorite part of any presentation.

If you have any questions feel free raise your hand to ask them right now.

Or reach out after this presentation either in person or online.`,index:26,start:761,end:776,notesHTML:`<p>And with that we get to my favorite part of any presentation.</p>
<p>If you have any questions feel free raise your hand to ask them right now.</p>
<p>Or reach out after this presentation either in person or online.</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:rj,meta:{layout:"image",image:"https://images.unsplash.com/photo-1608363808030-f58d9f02b06a?fit=crop&fm=jpg&h=900&w=1600",slide:{raw:`---
layout: image
#image: https://source.unsplash.com/1600x900/?thanks
image: https://images.unsplash.com/photo-1608363808030-f58d9f02b06a?fit=crop&fm=jpg&h=900&w=1600
---
<div></div>
<!--
And with that; I'd like to thank you all for your attention!
-->
`,content:"<div></div>",frontmatter:{layout:"image",image:"https://images.unsplash.com/photo-1608363808030-f58d9f02b06a?fit=crop&fm=jpg&h=900&w=1600"},note:"And with that; I'd like to thank you all for your attention!",index:27,start:776,end:786,notesHTML:`<p>And with that; I'd like to thank you all for your attention!</p>
`,filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:aj,meta:{layout:"image",image:"/cover-baselone.png",slide:{raw:`---
layout: image
image: /cover-baselone.png
---`,content:"",frontmatter:{layout:"image",image:"/cover-baselone.png"},index:28,start:786,end:790,notesHTML:"",filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:ij,meta:{layout:"end",slide:{raw:`---
layout: end
---
`,content:"",frontmatter:{layout:"end"},index:29,start:790,end:794,notesHTML:"",filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:cj,meta:{title:"First we start a new branch from the 1.5.x tag of the Spring PetClinic project.",srcSequence:"./demo/checkout.md",slide:{raw:null,title:"First we start a new branch from the 1.5.x tag of the Spring PetClinic project.",level:1,content:`# First we start a new branch from the 1.5.x tag of the Spring PetClinic project.

\`\`\`shell
$ cd /home/tim/Documents/workspace/spring-petclinic

HEAD is now at 9ad9192 Spring Boot 2.5 on Java 17
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
Deleted branch openrewrite-migration-demo (was 9ad9192).
Switched to a new branch 'openrewrite-migration-demo'
\`\`\``,frontmatter:{title:"First we start a new branch from the 1.5.x tag of the Spring PetClinic project.",srcSequence:"./demo/checkout.md"},index:30,start:0,end:12,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/checkout.md",raw:`# First we start a new branch from the 1.5.x tag of the Spring PetClinic project.

\`\`\`shell
$ cd /home/tim/Documents/workspace/spring-petclinic

HEAD is now at 9ad9192 Spring Boot 2.5 on Java 17
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
Deleted branch openrewrite-migration-demo (was 9ad9192).
Switched to a new branch 'openrewrite-migration-demo'
\`\`\`
`,title:"First we start a new branch from the 1.5.x tag of the Spring PetClinic project.",level:1,content:`# First we start a new branch from the 1.5.x tag of the Spring PetClinic project.

\`\`\`shell
$ cd /home/tim/Documents/workspace/spring-petclinic

HEAD is now at 9ad9192 Spring Boot 2.5 on Java 17
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
Deleted branch openrewrite-migration-demo (was 9ad9192).
Switched to a new branch 'openrewrite-migration-demo'
\`\`\``,frontmatter:{title:"First we start a new branch from the 1.5.x tag of the Spring PetClinic project."},index:0,start:0,end:12},inline:{raw:`---
src: ./demo/checkout.md
---`,content:"",frontmatter:{},index:30,start:794,end:797},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/checkout.md",notesHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:dj,meta:{title:"Next we ensure we are running Java 8 for now.",srcSequence:"./demo/sdkman-java-8.md",slide:{raw:null,title:"Next we ensure we are running Java 8 for now.",level:1,content:`# Next we ensure we are running Java 8 for now.

\`\`\`shell
$ sdk use java 8.0.345-tem

==== BROADCAST =================================================================
* 2022-10-06: quarkus 2.13.1.Final available on SDKMAN! https://github.com/quarkusio/quarkus/releases/tag/2.13.1.Final
* 2022-10-05: jbang 0.99.0 available on SDKMAN! https://github.com/jbangdev/jbang/releases/tag/v0.99.0
* 2022-10-03: vertx 4.3.4 available on SDKMAN!
================================================================================

Using java version 8.0.345-tem in this shell.

	OK
\`\`\``,frontmatter:{title:"Next we ensure we are running Java 8 for now.",srcSequence:"./demo/sdkman-java-8.md"},index:31,start:0,end:16,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/sdkman-java-8.md",raw:`# Next we ensure we are running Java 8 for now.

\`\`\`shell
$ sdk use java 8.0.345-tem

==== BROADCAST =================================================================
* 2022-10-06: quarkus 2.13.1.Final available on SDKMAN! https://github.com/quarkusio/quarkus/releases/tag/2.13.1.Final
* 2022-10-05: jbang 0.99.0 available on SDKMAN! https://github.com/jbangdev/jbang/releases/tag/v0.99.0
* 2022-10-03: vertx 4.3.4 available on SDKMAN!
================================================================================

Using java version 8.0.345-tem in this shell.

	OK
\`\`\`
`,title:"Next we ensure we are running Java 8 for now.",level:1,content:`# Next we ensure we are running Java 8 for now.

\`\`\`shell
$ sdk use java 8.0.345-tem

==== BROADCAST =================================================================
* 2022-10-06: quarkus 2.13.1.Final available on SDKMAN! https://github.com/quarkusio/quarkus/releases/tag/2.13.1.Final
* 2022-10-05: jbang 0.99.0 available on SDKMAN! https://github.com/jbangdev/jbang/releases/tag/v0.99.0
* 2022-10-03: vertx 4.3.4 available on SDKMAN!
================================================================================

Using java version 8.0.345-tem in this shell.

	OK
\`\`\``,frontmatter:{title:"Next we ensure we are running Java 8 for now."},index:0,start:0,end:16},inline:{raw:`---
src: ./demo/sdkman-java-8.md
---`,content:"",frontmatter:{},index:31,start:797,end:800},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/sdkman-java-8.md",notesHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:fj,meta:{title:"Then we upgrade the Maven wrapper for compatibility, and to add some color.",srcSequence:"./demo/maven-wrapper.md",slide:{raw:null,title:"Then we upgrade the Maven wrapper for compatibility, and to add some color.",level:1,content:`# Then we upgrade the Maven wrapper for compatibility, and to add some color.

\`\`\`shell
$ ./mvnw wrapper:wrapper -Dmaven=3.8.6

[INFO] Scanning for projects...
[INFO]                                                                         
[INFO] ------------------------------------------------------------------------
[INFO] Building petclinic 1.5.1
[INFO] ------------------------------------------------------------------------
[INFO] 
[INFO] --- maven-wrapper-plugin:3.1.1:wrapper (default-cli) @ spring-petclinic ---
[INFO] Unpacked bin type wrapper distribution org.apache.maven.wrapper:maven-wrapper-distribution:zip:bin:3.1.1
[INFO] Configuring .mvn/wrapper/maven-wrapper.properties to use Maven 3.8.6 and download from https://repo.maven.apache.org/maven2
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 0.679 s
[INFO] Finished at: 2022-10-10T10:23:20+00:00
[INFO] Final Memory: 19M/298M
[INFO] ------------------------------------------------------------------------
\`\`\``,frontmatter:{title:"Then we upgrade the Maven wrapper for compatibility, and to add some color.",srcSequence:"./demo/maven-wrapper.md"},index:32,start:0,end:22,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/maven-wrapper.md",raw:`# Then we upgrade the Maven wrapper for compatibility, and to add some color.

\`\`\`shell
$ ./mvnw wrapper:wrapper -Dmaven=3.8.6

[INFO] Scanning for projects...
[INFO]                                                                         
[INFO] ------------------------------------------------------------------------
[INFO] Building petclinic 1.5.1
[INFO] ------------------------------------------------------------------------
[INFO] 
[INFO] --- maven-wrapper-plugin:3.1.1:wrapper (default-cli) @ spring-petclinic ---
[INFO] Unpacked bin type wrapper distribution org.apache.maven.wrapper:maven-wrapper-distribution:zip:bin:3.1.1
[INFO] Configuring .mvn/wrapper/maven-wrapper.properties to use Maven 3.8.6 and download from https://repo.maven.apache.org/maven2
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 0.679 s
[INFO] Finished at: 2022-10-10T10:23:20+00:00
[INFO] Final Memory: 19M/298M
[INFO] ------------------------------------------------------------------------
\`\`\``,title:"Then we upgrade the Maven wrapper for compatibility, and to add some color.",level:1,content:`# Then we upgrade the Maven wrapper for compatibility, and to add some color.

\`\`\`shell
$ ./mvnw wrapper:wrapper -Dmaven=3.8.6

[INFO] Scanning for projects...
[INFO]                                                                         
[INFO] ------------------------------------------------------------------------
[INFO] Building petclinic 1.5.1
[INFO] ------------------------------------------------------------------------
[INFO] 
[INFO] --- maven-wrapper-plugin:3.1.1:wrapper (default-cli) @ spring-petclinic ---
[INFO] Unpacked bin type wrapper distribution org.apache.maven.wrapper:maven-wrapper-distribution:zip:bin:3.1.1
[INFO] Configuring .mvn/wrapper/maven-wrapper.properties to use Maven 3.8.6 and download from https://repo.maven.apache.org/maven2
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 0.679 s
[INFO] Finished at: 2022-10-10T10:23:20+00:00
[INFO] Final Memory: 19M/298M
[INFO] ------------------------------------------------------------------------
\`\`\``,frontmatter:{title:"Then we upgrade the Maven wrapper for compatibility, and to add some color."},index:0,start:0,end:22},inline:{raw:`---
src: ./demo/maven-wrapper.md
---`,content:"",frontmatter:{},index:32,start:800,end:803},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/maven-wrapper.md",notesHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:Aj,meta:{title:"And we commit the results to have a clean slate.",srcSequence:"./demo/commit-1.5-java-8.md",slide:{raw:null,title:"And we commit the results to have a clean slate.",level:1,content:`# And we commit the results to have a clean slate.
\`\`\`shell
$ git commit -a -m Spring\\ Boot\\ 1.5\\ on\\ Java\\ 8

[openrewrite-migration-demo e2b047a] Spring Boot 1.5 on Java 8
 2 files changed, 18 insertions(+), 1 deletion(-)
 rewrite .mvn/wrapper/maven-wrapper.jar (98%)
 rewrite .mvn/wrapper/maven-wrapper.properties (100%)
\`\`\``,frontmatter:{title:"And we commit the results to have a clean slate.",srcSequence:"./demo/commit-1.5-java-8.md"},index:33,start:0,end:9,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/commit-1.5-java-8.md",raw:`# And we commit the results to have a clean slate.
\`\`\`shell
$ git commit -a -m Spring\\ Boot\\ 1.5\\ on\\ Java\\ 8

[openrewrite-migration-demo e2b047a] Spring Boot 1.5 on Java 8
 2 files changed, 18 insertions(+), 1 deletion(-)
 rewrite .mvn/wrapper/maven-wrapper.jar (98%)
 rewrite .mvn/wrapper/maven-wrapper.properties (100%)
\`\`\``,title:"And we commit the results to have a clean slate.",level:1,content:`# And we commit the results to have a clean slate.
\`\`\`shell
$ git commit -a -m Spring\\ Boot\\ 1.5\\ on\\ Java\\ 8

[openrewrite-migration-demo e2b047a] Spring Boot 1.5 on Java 8
 2 files changed, 18 insertions(+), 1 deletion(-)
 rewrite .mvn/wrapper/maven-wrapper.jar (98%)
 rewrite .mvn/wrapper/maven-wrapper.properties (100%)
\`\`\``,frontmatter:{title:"And we commit the results to have a clean slate."},index:0,start:0,end:9},inline:{raw:`---
src: ./demo/commit-1.5-java-8.md
---`,content:"",frontmatter:{},index:33,start:803,end:806},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/commit-1.5-java-8.md",notesHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:Ij,meta:{title:"We will migrate the Spring PetClinic to Spring Boot 2.",srcSequence:"./demo/migrate-spring-boot.md",slide:{raw:null,title:"We will migrate the Spring PetClinic to Spring Boot 2.",level:1,content:`# We will migrate the Spring PetClinic to Spring Boot 2.
## These recipes are in the added Rewrite Spring Module.

\`\`\`shell
$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \\
    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.26.0 \\
    -DactiveRecipes=org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
\`\`\`

\`\`\`shell {maxHeight:'100'}
[INFO] --- rewrite-maven-plugin:4.34.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.spring.boot2.SpringBoot1To2Migration]
[INFO] Using active styles(s) []
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing Source Files
[INFO] Running recipe(s)...
[WARNING] org.openrewrite.maven.internal.MavenParsingException: No version provided for dependency org.webjars:webjars-locator
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.0.x, overrideManagedVersion=true}
[WARNING]             org.openrewrite.maven.RemoveProperty: {propertyName=thymeleaf.version}
[WARNING]             org.openrewrite.maven.RemoveDependency: {groupId=org.webjars, artifactId=webjars-locator}
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.maven.AddDependency: {groupId=javax.validation, artifactId=validation-api, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotBlankPackageName
[WARNING]                 org.openrewrite.maven.AddDependency: {groupId=org.springframework.boot, artifactId=spring-boot-starter-validation, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed
[WARNING]                             org.openrewrite.maven.AddDependency: {groupId=org.hamcrest, artifactId=hamcrest, version=2.x, onlyIfUsing=org.hamcrest.Matchers}
[WARNING]                         org.openrewrite.maven.ExcludeDependency: {groupId=junit, artifactId=junit}
[WARNING]                         org.openrewrite.maven.AddDependency: {groupId=org.junit.jupiter, artifactId=junit-jupiter, version=5.x, onlyIfUsing=org.junit.jupiter.api.Test}
[WARNING]                         org.openrewrite.maven.ExcludeDependency: {groupId=org.junit.vintage, artifactId=junit-vintage-engine}
[WARNING]                 org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UseMockitoExtension
[WARNING]                             org.openrewrite.java.testing.mockito.Mockito1to4Migration
[WARNING]                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration
[WARNING]                                     org.openrewrite.maven.AddDependency: {groupId=org.mockito, artifactId=mockito-junit-jupiter, version=3.x, onlyIfUsing=org.mockito.junit.jupiter.MockitoExtension}
[WARNING]                                 org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.mockito, artifactId=mockito-junit-jupiter, newVersion=4.x}
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
[WARNING]                             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.1.x, overrideManagedVersion=true}
[WARNING]                             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.1.x}
[WARNING]                         org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.2.x}
[WARNING]                     org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.3.x, overrideManagedVersion=true}
[WARNING]                     org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.3.x}
[WARNING]                 org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.4.x}
[WARNING]                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=org.junit.vintage, exclusionArtifactId=junit-vintage-engine}
[WARNING]                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=junit, exclusionArtifactId=junit}
[WARNING]             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.5.x, overrideManagedVersion=true}
[WARNING]             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.5.x}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/visit/Visit.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/VetController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/VisitController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/Owner.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/model/Person.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/system/CacheConfig.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.BeanMethodsNotPublic
[WARNING] Changes have been made to src/main/resources/application.properties by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.SpringBootProperties_2_0
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=management.context-path, newPropertyKey=management.server.servlet.context-path}
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_5
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.data, newPropertyKey=spring.sql.init.data-locations}
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.schema, newPropertyKey=spring.sql.init.schema-locations}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UseMockitoExtension
[WARNING]                             org.openrewrite.java.testing.mockito.Mockito1to4Migration
[WARNING]                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration
[WARNING]                                     org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.mockito.runners.MockitoJUnitRunner, newFullyQualifiedTypeName=org.mockito.junit.MockitoJUnitRunner}
[WARNING]                             org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner], extension=org.mockito.junit.jupiter.MockitoExtension}
[WARNING]                         org.openrewrite.java.testing.junit5.AssertToAssertions
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.IgnoreToDisabled
[WARNING]                             org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.junit.Ignore, newFullyQualifiedTypeName=org.junit.jupiter.api.Disabled}
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  30.631 s
[INFO] Finished at: 2022-10-10T10:40:19+01:00
[INFO] ------------------------------------------------------------------------
\`\`\``,frontmatter:{title:"We will migrate the Spring PetClinic to Spring Boot 2.",srcSequence:"./demo/migrate-spring-boot.md"},index:34,start:0,end:219,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/migrate-spring-boot.md",raw:`# We will migrate the Spring PetClinic to Spring Boot 2.
## These recipes are in the added Rewrite Spring Module.

\`\`\`shell
$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \\
    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.26.0 \\
    -DactiveRecipes=org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
\`\`\`

\`\`\`shell {maxHeight:'100'}
[INFO] --- rewrite-maven-plugin:4.34.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.spring.boot2.SpringBoot1To2Migration]
[INFO] Using active styles(s) []
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing Source Files
[INFO] Running recipe(s)...
[WARNING] org.openrewrite.maven.internal.MavenParsingException: No version provided for dependency org.webjars:webjars-locator
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.0.x, overrideManagedVersion=true}
[WARNING]             org.openrewrite.maven.RemoveProperty: {propertyName=thymeleaf.version}
[WARNING]             org.openrewrite.maven.RemoveDependency: {groupId=org.webjars, artifactId=webjars-locator}
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.maven.AddDependency: {groupId=javax.validation, artifactId=validation-api, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotBlankPackageName
[WARNING]                 org.openrewrite.maven.AddDependency: {groupId=org.springframework.boot, artifactId=spring-boot-starter-validation, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed
[WARNING]                             org.openrewrite.maven.AddDependency: {groupId=org.hamcrest, artifactId=hamcrest, version=2.x, onlyIfUsing=org.hamcrest.Matchers}
[WARNING]                         org.openrewrite.maven.ExcludeDependency: {groupId=junit, artifactId=junit}
[WARNING]                         org.openrewrite.maven.AddDependency: {groupId=org.junit.jupiter, artifactId=junit-jupiter, version=5.x, onlyIfUsing=org.junit.jupiter.api.Test}
[WARNING]                         org.openrewrite.maven.ExcludeDependency: {groupId=org.junit.vintage, artifactId=junit-vintage-engine}
[WARNING]                 org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UseMockitoExtension
[WARNING]                             org.openrewrite.java.testing.mockito.Mockito1to4Migration
[WARNING]                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration
[WARNING]                                     org.openrewrite.maven.AddDependency: {groupId=org.mockito, artifactId=mockito-junit-jupiter, version=3.x, onlyIfUsing=org.mockito.junit.jupiter.MockitoExtension}
[WARNING]                                 org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.mockito, artifactId=mockito-junit-jupiter, newVersion=4.x}
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
[WARNING]                             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.1.x, overrideManagedVersion=true}
[WARNING]                             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.1.x}
[WARNING]                         org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.2.x}
[WARNING]                     org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.3.x, overrideManagedVersion=true}
[WARNING]                     org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.3.x}
[WARNING]                 org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.4.x}
[WARNING]                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=org.junit.vintage, exclusionArtifactId=junit-vintage-engine}
[WARNING]                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=junit, exclusionArtifactId=junit}
[WARNING]             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.5.x, overrideManagedVersion=true}
[WARNING]             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.5.x}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/visit/Visit.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/VetController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/VisitController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/Owner.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/model/Person.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/system/CacheConfig.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.BeanMethodsNotPublic
[WARNING] Changes have been made to src/main/resources/application.properties by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.SpringBootProperties_2_0
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=management.context-path, newPropertyKey=management.server.servlet.context-path}
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_5
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.data, newPropertyKey=spring.sql.init.data-locations}
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.schema, newPropertyKey=spring.sql.init.schema-locations}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UseMockitoExtension
[WARNING]                             org.openrewrite.java.testing.mockito.Mockito1to4Migration
[WARNING]                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration
[WARNING]                                     org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.mockito.runners.MockitoJUnitRunner, newFullyQualifiedTypeName=org.mockito.junit.MockitoJUnitRunner}
[WARNING]                             org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner], extension=org.mockito.junit.jupiter.MockitoExtension}
[WARNING]                         org.openrewrite.java.testing.junit5.AssertToAssertions
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.IgnoreToDisabled
[WARNING]                             org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.junit.Ignore, newFullyQualifiedTypeName=org.junit.jupiter.api.Disabled}
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  30.631 s
[INFO] Finished at: 2022-10-10T10:40:19+01:00
[INFO] ------------------------------------------------------------------------
\`\`\`
`,title:"We will migrate the Spring PetClinic to Spring Boot 2.",level:1,content:`# We will migrate the Spring PetClinic to Spring Boot 2.
## These recipes are in the added Rewrite Spring Module.

\`\`\`shell
$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \\
    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.26.0 \\
    -DactiveRecipes=org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
\`\`\`

\`\`\`shell {maxHeight:'100'}
[INFO] --- rewrite-maven-plugin:4.34.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.spring.boot2.SpringBoot1To2Migration]
[INFO] Using active styles(s) []
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing Source Files
[INFO] Running recipe(s)...
[WARNING] org.openrewrite.maven.internal.MavenParsingException: No version provided for dependency org.webjars:webjars-locator
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.0.x, overrideManagedVersion=true}
[WARNING]             org.openrewrite.maven.RemoveProperty: {propertyName=thymeleaf.version}
[WARNING]             org.openrewrite.maven.RemoveDependency: {groupId=org.webjars, artifactId=webjars-locator}
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.maven.AddDependency: {groupId=javax.validation, artifactId=validation-api, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotBlankPackageName
[WARNING]                 org.openrewrite.maven.AddDependency: {groupId=org.springframework.boot, artifactId=spring-boot-starter-validation, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed
[WARNING]                             org.openrewrite.maven.AddDependency: {groupId=org.hamcrest, artifactId=hamcrest, version=2.x, onlyIfUsing=org.hamcrest.Matchers}
[WARNING]                         org.openrewrite.maven.ExcludeDependency: {groupId=junit, artifactId=junit}
[WARNING]                         org.openrewrite.maven.AddDependency: {groupId=org.junit.jupiter, artifactId=junit-jupiter, version=5.x, onlyIfUsing=org.junit.jupiter.api.Test}
[WARNING]                         org.openrewrite.maven.ExcludeDependency: {groupId=org.junit.vintage, artifactId=junit-vintage-engine}
[WARNING]                 org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UseMockitoExtension
[WARNING]                             org.openrewrite.java.testing.mockito.Mockito1to4Migration
[WARNING]                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration
[WARNING]                                     org.openrewrite.maven.AddDependency: {groupId=org.mockito, artifactId=mockito-junit-jupiter, version=3.x, onlyIfUsing=org.mockito.junit.jupiter.MockitoExtension}
[WARNING]                                 org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.mockito, artifactId=mockito-junit-jupiter, newVersion=4.x}
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
[WARNING]                             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.1.x, overrideManagedVersion=true}
[WARNING]                             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.1.x}
[WARNING]                         org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.2.x}
[WARNING]                     org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.3.x, overrideManagedVersion=true}
[WARNING]                     org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.3.x}
[WARNING]                 org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.4.x}
[WARNING]                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=org.junit.vintage, exclusionArtifactId=junit-vintage-engine}
[WARNING]                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=junit, exclusionArtifactId=junit}
[WARNING]             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.5.x, overrideManagedVersion=true}
[WARNING]             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.5.x}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/visit/Visit.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/VetController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/VisitController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/Owner.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/model/Person.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/system/CacheConfig.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.BeanMethodsNotPublic
[WARNING] Changes have been made to src/main/resources/application.properties by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.SpringBootProperties_2_0
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=management.context-path, newPropertyKey=management.server.servlet.context-path}
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_5
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.data, newPropertyKey=spring.sql.init.data-locations}
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.schema, newPropertyKey=spring.sql.init.schema-locations}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UseMockitoExtension
[WARNING]                             org.openrewrite.java.testing.mockito.Mockito1to4Migration
[WARNING]                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration
[WARNING]                                     org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.mockito.runners.MockitoJUnitRunner, newFullyQualifiedTypeName=org.mockito.junit.MockitoJUnitRunner}
[WARNING]                             org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner], extension=org.mockito.junit.jupiter.MockitoExtension}
[WARNING]                         org.openrewrite.java.testing.junit5.AssertToAssertions
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.IgnoreToDisabled
[WARNING]                             org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.junit.Ignore, newFullyQualifiedTypeName=org.junit.jupiter.api.Disabled}
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  30.631 s
[INFO] Finished at: 2022-10-10T10:40:19+01:00
[INFO] ------------------------------------------------------------------------
\`\`\``,frontmatter:{title:"We will migrate the Spring PetClinic to Spring Boot 2."},index:0,start:0,end:219},inline:{raw:`---
src: ./demo/migrate-spring-boot.md
---`,content:"",frontmatter:{},index:34,start:806,end:809},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/migrate-spring-boot.md",notesHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:_j,meta:{title:"Notice how each file lists the changes made by recipes.",srcSequence:"./demo/notice-changes.md",slide:{raw:null,title:"Notice how each file lists the changes made by recipes.",level:1,content:`# Notice how each file lists the changes made by recipes.
\`\`\`shell {maxHeight:'100'}
[INFO] --- rewrite-maven-plugin:4.34.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.spring.boot2.SpringBoot1To2Migration]
[INFO] Using active styles(s) []
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing Source Files
[INFO] Running recipe(s)...
[WARNING] org.openrewrite.maven.internal.MavenParsingException: No version provided for dependency org.webjars:webjars-locator
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.0.x, overrideManagedVersion=true}
[WARNING]             org.openrewrite.maven.RemoveProperty: {propertyName=thymeleaf.version}
[WARNING]             org.openrewrite.maven.RemoveDependency: {groupId=org.webjars, artifactId=webjars-locator}
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.maven.AddDependency: {groupId=javax.validation, artifactId=validation-api, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotBlankPackageName
[WARNING]                 org.openrewrite.maven.AddDependency: {groupId=org.springframework.boot, artifactId=spring-boot-starter-validation, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed
[WARNING]                             org.openrewrite.maven.AddDependency: {groupId=org.hamcrest, artifactId=hamcrest, version=2.x, onlyIfUsing=org.hamcrest.Matchers}
[WARNING]                         org.openrewrite.maven.ExcludeDependency: {groupId=junit, artifactId=junit}
[WARNING]                         org.openrewrite.maven.AddDependency: {groupId=org.junit.jupiter, artifactId=junit-jupiter, version=5.x, onlyIfUsing=org.junit.jupiter.api.Test}
[WARNING]                         org.openrewrite.maven.ExcludeDependency: {groupId=org.junit.vintage, artifactId=junit-vintage-engine}
[WARNING]                 org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UseMockitoExtension
[WARNING]                             org.openrewrite.java.testing.mockito.Mockito1to4Migration
[WARNING]                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration
[WARNING]                                     org.openrewrite.maven.AddDependency: {groupId=org.mockito, artifactId=mockito-junit-jupiter, version=3.x, onlyIfUsing=org.mockito.junit.jupiter.MockitoExtension}
[WARNING]                                 org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.mockito, artifactId=mockito-junit-jupiter, newVersion=4.x}
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
[WARNING]                             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.1.x, overrideManagedVersion=true}
[WARNING]                             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.1.x}
[WARNING]                         org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.2.x}
[WARNING]                     org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.3.x, overrideManagedVersion=true}
[WARNING]                     org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.3.x}
[WARNING]                 org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.4.x}
[WARNING]                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=org.junit.vintage, exclusionArtifactId=junit-vintage-engine}
[WARNING]                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=junit, exclusionArtifactId=junit}
[WARNING]             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.5.x, overrideManagedVersion=true}
[WARNING]             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.5.x}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/visit/Visit.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/VetController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/VisitController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/Owner.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/model/Person.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/system/CacheConfig.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.BeanMethodsNotPublic
[WARNING] Changes have been made to src/main/resources/application.properties by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.SpringBootProperties_2_0
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=management.context-path, newPropertyKey=management.server.servlet.context-path}
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_5
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.data, newPropertyKey=spring.sql.init.data-locations}
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.schema, newPropertyKey=spring.sql.init.schema-locations}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UseMockitoExtension
[WARNING]                             org.openrewrite.java.testing.mockito.Mockito1to4Migration
[WARNING]                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration
[WARNING]                                     org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.mockito.runners.MockitoJUnitRunner, newFullyQualifiedTypeName=org.mockito.junit.MockitoJUnitRunner}
[WARNING]                             org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner], extension=org.mockito.junit.jupiter.MockitoExtension}
[WARNING]                         org.openrewrite.java.testing.junit5.AssertToAssertions
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.IgnoreToDisabled
[WARNING]                             org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.junit.Ignore, newFullyQualifiedTypeName=org.junit.jupiter.api.Disabled}
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  30.631 s
[INFO] Finished at: 2022-10-10T10:40:19+01:00
[INFO] ------------------------------------------------------------------------
\`\`\``,frontmatter:{title:"Notice how each file lists the changes made by recipes.",srcSequence:"./demo/notice-changes.md"},index:35,start:0,end:211,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/notice-changes.md",raw:`# Notice how each file lists the changes made by recipes.
\`\`\`shell {maxHeight:'100'}
[INFO] --- rewrite-maven-plugin:4.34.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.spring.boot2.SpringBoot1To2Migration]
[INFO] Using active styles(s) []
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing Source Files
[INFO] Running recipe(s)...
[WARNING] org.openrewrite.maven.internal.MavenParsingException: No version provided for dependency org.webjars:webjars-locator
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.0.x, overrideManagedVersion=true}
[WARNING]             org.openrewrite.maven.RemoveProperty: {propertyName=thymeleaf.version}
[WARNING]             org.openrewrite.maven.RemoveDependency: {groupId=org.webjars, artifactId=webjars-locator}
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.maven.AddDependency: {groupId=javax.validation, artifactId=validation-api, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotBlankPackageName
[WARNING]                 org.openrewrite.maven.AddDependency: {groupId=org.springframework.boot, artifactId=spring-boot-starter-validation, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed
[WARNING]                             org.openrewrite.maven.AddDependency: {groupId=org.hamcrest, artifactId=hamcrest, version=2.x, onlyIfUsing=org.hamcrest.Matchers}
[WARNING]                         org.openrewrite.maven.ExcludeDependency: {groupId=junit, artifactId=junit}
[WARNING]                         org.openrewrite.maven.AddDependency: {groupId=org.junit.jupiter, artifactId=junit-jupiter, version=5.x, onlyIfUsing=org.junit.jupiter.api.Test}
[WARNING]                         org.openrewrite.maven.ExcludeDependency: {groupId=org.junit.vintage, artifactId=junit-vintage-engine}
[WARNING]                 org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UseMockitoExtension
[WARNING]                             org.openrewrite.java.testing.mockito.Mockito1to4Migration
[WARNING]                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration
[WARNING]                                     org.openrewrite.maven.AddDependency: {groupId=org.mockito, artifactId=mockito-junit-jupiter, version=3.x, onlyIfUsing=org.mockito.junit.jupiter.MockitoExtension}
[WARNING]                                 org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.mockito, artifactId=mockito-junit-jupiter, newVersion=4.x}
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
[WARNING]                             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.1.x, overrideManagedVersion=true}
[WARNING]                             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.1.x}
[WARNING]                         org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.2.x}
[WARNING]                     org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.3.x, overrideManagedVersion=true}
[WARNING]                     org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.3.x}
[WARNING]                 org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.4.x}
[WARNING]                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=org.junit.vintage, exclusionArtifactId=junit-vintage-engine}
[WARNING]                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=junit, exclusionArtifactId=junit}
[WARNING]             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.5.x, overrideManagedVersion=true}
[WARNING]             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.5.x}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/visit/Visit.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/VetController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/VisitController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/Owner.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/model/Person.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/system/CacheConfig.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.BeanMethodsNotPublic
[WARNING] Changes have been made to src/main/resources/application.properties by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.SpringBootProperties_2_0
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=management.context-path, newPropertyKey=management.server.servlet.context-path}
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_5
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.data, newPropertyKey=spring.sql.init.data-locations}
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.schema, newPropertyKey=spring.sql.init.schema-locations}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UseMockitoExtension
[WARNING]                             org.openrewrite.java.testing.mockito.Mockito1to4Migration
[WARNING]                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration
[WARNING]                                     org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.mockito.runners.MockitoJUnitRunner, newFullyQualifiedTypeName=org.mockito.junit.MockitoJUnitRunner}
[WARNING]                             org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner], extension=org.mockito.junit.jupiter.MockitoExtension}
[WARNING]                         org.openrewrite.java.testing.junit5.AssertToAssertions
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.IgnoreToDisabled
[WARNING]                             org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.junit.Ignore, newFullyQualifiedTypeName=org.junit.jupiter.api.Disabled}
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  30.631 s
[INFO] Finished at: 2022-10-10T10:40:19+01:00
[INFO] ------------------------------------------------------------------------
\`\`\`
`,title:"Notice how each file lists the changes made by recipes.",level:1,content:`# Notice how each file lists the changes made by recipes.
\`\`\`shell {maxHeight:'100'}
[INFO] --- rewrite-maven-plugin:4.34.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.spring.boot2.SpringBoot1To2Migration]
[INFO] Using active styles(s) []
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing Source Files
[INFO] Running recipe(s)...
[WARNING] org.openrewrite.maven.internal.MavenParsingException: No version provided for dependency org.webjars:webjars-locator
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.0.x, overrideManagedVersion=true}
[WARNING]             org.openrewrite.maven.RemoveProperty: {propertyName=thymeleaf.version}
[WARNING]             org.openrewrite.maven.RemoveDependency: {groupId=org.webjars, artifactId=webjars-locator}
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.maven.AddDependency: {groupId=javax.validation, artifactId=validation-api, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotBlankPackageName
[WARNING]                 org.openrewrite.maven.AddDependency: {groupId=org.springframework.boot, artifactId=spring-boot-starter-validation, version=2.x, onlyIfUsing=javax.validation.constraints.NotEmpty}
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed
[WARNING]                             org.openrewrite.maven.AddDependency: {groupId=org.hamcrest, artifactId=hamcrest, version=2.x, onlyIfUsing=org.hamcrest.Matchers}
[WARNING]                         org.openrewrite.maven.ExcludeDependency: {groupId=junit, artifactId=junit}
[WARNING]                         org.openrewrite.maven.AddDependency: {groupId=org.junit.jupiter, artifactId=junit-jupiter, version=5.x, onlyIfUsing=org.junit.jupiter.api.Test}
[WARNING]                         org.openrewrite.maven.ExcludeDependency: {groupId=org.junit.vintage, artifactId=junit-vintage-engine}
[WARNING]                 org.openrewrite.java.testing.junit5.JUnit5BestPractices
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UseMockitoExtension
[WARNING]                             org.openrewrite.java.testing.mockito.Mockito1to4Migration
[WARNING]                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration
[WARNING]                                     org.openrewrite.maven.AddDependency: {groupId=org.mockito, artifactId=mockito-junit-jupiter, version=3.x, onlyIfUsing=org.mockito.junit.jupiter.MockitoExtension}
[WARNING]                                 org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.mockito, artifactId=mockito-junit-jupiter, newVersion=4.x}
[WARNING]                 org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
[WARNING]                     org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2
[WARNING]                         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
[WARNING]                             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.1.x, overrideManagedVersion=true}
[WARNING]                             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.1.x}
[WARNING]                         org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.2.x}
[WARNING]                     org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.3.x, overrideManagedVersion=true}
[WARNING]                     org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.3.x}
[WARNING]                 org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.4.x}
[WARNING]                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=org.junit.vintage, exclusionArtifactId=junit-vintage-engine}
[WARNING]                 org.openrewrite.maven.RemoveExclusion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-test, exclusionGroupId=junit, exclusionArtifactId=junit}
[WARNING]             org.openrewrite.maven.UpgradeDependencyVersion: {groupId=org.springframework.boot, artifactId=*, newVersion=2.5.x, overrideManagedVersion=true}
[WARNING]             org.openrewrite.maven.UpgradeParentVersion: {groupId=org.springframework.boot, artifactId=spring-boot-starter-parent, newVersion=2.5.x}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/visit/Visit.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/vet/VetController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/VisitController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/OwnerController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetTypeFormatter.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/Owner.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/owner/PetController.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.NoAutowiredOnConstructor
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.ImplicitWebAnnotationNames
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/model/Person.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName
[WARNING]                 org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.hibernate.validator.constraints.NotEmpty, newFullyQualifiedTypeName=javax.validation.constraints.NotEmpty}
[WARNING] Changes have been made to src/main/java/org/springframework/samples/petclinic/system/CacheConfig.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
[WARNING]             org.openrewrite.java.spring.BeanMethodsNotPublic
[WARNING] Changes have been made to src/main/resources/application.properties by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
[WARNING]             org.openrewrite.java.spring.boot2.SpringBootProperties_2_0
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=management.context-path, newPropertyKey=management.server.servlet.context-path}
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_5
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.data, newPropertyKey=spring.sql.init.data-locations}
[WARNING]                 org.openrewrite.properties.ChangePropertyKey: {oldPropertyKey=spring.datasource.schema, newPropertyKey=spring.sql.init.schema-locations}
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/vet/VetTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/VisitControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetTypeFormatterTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UseMockitoExtension
[WARNING]                             org.openrewrite.java.testing.mockito.Mockito1to4Migration
[WARNING]                                 org.openrewrite.java.testing.mockito.Mockito1to3Migration
[WARNING]                                     org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.mockito.runners.MockitoJUnitRunner, newFullyQualifiedTypeName=org.mockito.junit.MockitoJUnitRunner}
[WARNING]                             org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner], extension=org.mockito.junit.jupiter.MockitoExtension}
[WARNING]                         org.openrewrite.java.testing.junit5.AssertToAssertions
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/owner/PetControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/model/ValidatorTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/ProductionConfigurationTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Changes have been made to src/test/java/org/springframework/samples/petclinic/system/CrashControllerTests.java by:
[WARNING]     org.openrewrite.java.spring.boot2.SpringBoot1To2Migration
[WARNING]         org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
[WARNING]             org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
[WARNING]                 org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
[WARNING]                     org.openrewrite.java.testing.junit5.JUnit4to5Migration
[WARNING]                         org.openrewrite.java.testing.junit5.IgnoreToDisabled
[WARNING]                             org.openrewrite.java.ChangeType: {oldFullyQualifiedTypeName=org.junit.Ignore, newFullyQualifiedTypeName=org.junit.jupiter.api.Disabled}
[WARNING]                         org.openrewrite.java.testing.junit5.UpdateTestAnnotation
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
[WARNING]                         org.openrewrite.java.testing.junit5.RunnerToExtension: {runners=[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner], extension=org.springframework.test.context.junit.jupiter.SpringExtension}
[WARNING]                     org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  30.631 s
[INFO] Finished at: 2022-10-10T10:40:19+01:00
[INFO] ------------------------------------------------------------------------
\`\`\``,frontmatter:{title:"Notice how each file lists the changes made by recipes."},index:0,start:0,end:211},inline:{raw:`---
src: ./demo/notice-changes.md
---`,content:"",frontmatter:{},index:35,start:809,end:812},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/notice-changes.md",notesHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:Fj,meta:{title:"Our application has now been upgraded to 2.x.",srcSequence:"./demo/hibernate-validator.md",slide:{raw:null,title:"Our application has now been upgraded to 2.x.",level:1,content:`# Our application has now been upgraded to 2.x.
## In our application code we can see quite some revelant changes.

### Hibernate validator has been replaced with Javax.

\`\`\`shell
$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/model/Person.java
\`\`\`

\`\`\`diff
diff --git a/src/main/java/org/springframework/samples/petclinic/model/Person.java b/src/main/java/org/springframework/samples/petclinic/model/Person.java
index 4cb7481..5d23523 100644
--- a/src/main/java/org/springframework/samples/petclinic/model/Person.java
+++ b/src/main/java/org/springframework/samples/petclinic/model/Person.java
@@ -17,8 +17,7 @@ package org.springframework.samples.petclinic.model;
 
 import javax.persistence.Column;
 import javax.persistence.MappedSuperclass;
-
-import org.hibernate.validator.constraints.NotEmpty;
+import javax.validation.constraints.NotEmpty;
 
 /**
  * Simple JavaBean domain object representing an person.
\`\`\``,frontmatter:{title:"Our application has now been upgraded to 2.x.",srcSequence:"./demo/hibernate-validator.md"},index:36,start:0,end:25,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/hibernate-validator.md",raw:`# Our application has now been upgraded to 2.x.
## In our application code we can see quite some revelant changes.

### Hibernate validator has been replaced with Javax.

\`\`\`shell
$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/model/Person.java
\`\`\`

\`\`\`diff
diff --git a/src/main/java/org/springframework/samples/petclinic/model/Person.java b/src/main/java/org/springframework/samples/petclinic/model/Person.java
index 4cb7481..5d23523 100644
--- a/src/main/java/org/springframework/samples/petclinic/model/Person.java
+++ b/src/main/java/org/springframework/samples/petclinic/model/Person.java
@@ -17,8 +17,7 @@ package org.springframework.samples.petclinic.model;
 
 import javax.persistence.Column;
 import javax.persistence.MappedSuperclass;
-
-import org.hibernate.validator.constraints.NotEmpty;
+import javax.validation.constraints.NotEmpty;
 
 /**
  * Simple JavaBean domain object representing an person.
\`\`\``,title:"Our application has now been upgraded to 2.x.",level:1,content:`# Our application has now been upgraded to 2.x.
## In our application code we can see quite some revelant changes.

### Hibernate validator has been replaced with Javax.

\`\`\`shell
$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/model/Person.java
\`\`\`

\`\`\`diff
diff --git a/src/main/java/org/springframework/samples/petclinic/model/Person.java b/src/main/java/org/springframework/samples/petclinic/model/Person.java
index 4cb7481..5d23523 100644
--- a/src/main/java/org/springframework/samples/petclinic/model/Person.java
+++ b/src/main/java/org/springframework/samples/petclinic/model/Person.java
@@ -17,8 +17,7 @@ package org.springframework.samples.petclinic.model;
 
 import javax.persistence.Column;
 import javax.persistence.MappedSuperclass;
-
-import org.hibernate.validator.constraints.NotEmpty;
+import javax.validation.constraints.NotEmpty;
 
 /**
  * Simple JavaBean domain object representing an person.
\`\`\``,frontmatter:{title:"Our application has now been upgraded to 2.x."},index:0,start:0,end:25},inline:{raw:`---
src: ./demo/hibernate-validator.md
---`,content:"",frontmatter:{},index:36,start:812,end:815},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/hibernate-validator.md",notesHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:Tj,meta:{title:"Unnecessary @AutoWired annotations have been removed.",srcSequence:"./demo/unnecessary-autowired.md",slide:{raw:null,title:"Unnecessary @AutoWired annotations have been removed.",level:1,content:`# Unnecessary @AutoWired annotations have been removed.

\`\`\`shell
$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/vet/VetController.java
\`\`\`

\`\`\`diff
diff --git a/src/main/java/org/springframework/samples/petclinic/vet/VetController.java b/src/main/java/org/springframework/samples/petclinic/vet/VetController.java
index 7ce8374..ddaa364 100644
--- a/src/main/java/org/springframework/samples/petclinic/vet/VetController.java
+++ b/src/main/java/org/springframework/samples/petclinic/vet/VetController.java
@@ -15,7 +15,6 @@
  */
 package org.springframework.samples.petclinic.vet;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Controller;
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.ResponseBody;
@@ -33,7 +32,6 @@ class VetController {
 
     private final VetRepository vets;
 
-    @Autowired
     public VetController(VetRepository clinicService) {
         this.vets = clinicService;
     }
\`\`\``,frontmatter:{title:"Unnecessary @AutoWired annotations have been removed.",srcSequence:"./demo/unnecessary-autowired.md"},index:37,start:0,end:28,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/unnecessary-autowired.md",raw:`# Unnecessary @AutoWired annotations have been removed.

\`\`\`shell
$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/vet/VetController.java
\`\`\`

\`\`\`diff
diff --git a/src/main/java/org/springframework/samples/petclinic/vet/VetController.java b/src/main/java/org/springframework/samples/petclinic/vet/VetController.java
index 7ce8374..ddaa364 100644
--- a/src/main/java/org/springframework/samples/petclinic/vet/VetController.java
+++ b/src/main/java/org/springframework/samples/petclinic/vet/VetController.java
@@ -15,7 +15,6 @@
  */
 package org.springframework.samples.petclinic.vet;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Controller;
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.ResponseBody;
@@ -33,7 +32,6 @@ class VetController {
 
     private final VetRepository vets;
 
-    @Autowired
     public VetController(VetRepository clinicService) {
         this.vets = clinicService;
     }
\`\`\``,title:"Unnecessary @AutoWired annotations have been removed.",level:1,content:`# Unnecessary @AutoWired annotations have been removed.

\`\`\`shell
$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/vet/VetController.java
\`\`\`

\`\`\`diff
diff --git a/src/main/java/org/springframework/samples/petclinic/vet/VetController.java b/src/main/java/org/springframework/samples/petclinic/vet/VetController.java
index 7ce8374..ddaa364 100644
--- a/src/main/java/org/springframework/samples/petclinic/vet/VetController.java
+++ b/src/main/java/org/springframework/samples/petclinic/vet/VetController.java
@@ -15,7 +15,6 @@
  */
 package org.springframework.samples.petclinic.vet;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Controller;
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.ResponseBody;
@@ -33,7 +32,6 @@ class VetController {
 
     private final VetRepository vets;
 
-    @Autowired
     public VetController(VetRepository clinicService) {
         this.vets = clinicService;
     }
\`\`\``,frontmatter:{title:"Unnecessary @AutoWired annotations have been removed."},index:0,start:0,end:28},inline:{raw:`---
src: ./demo/unnecessary-autowired.md
---`,content:"",frontmatter:{},index:37,start:815,end:818},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/unnecessary-autowired.md",notesHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:Pj,meta:{title:"Web parameter arguments have also been removed.",srcSequence:"./demo/webparameter-arguments.md",slide:{raw:null,title:"Web parameter arguments have also been removed.",level:1,content:`# Web parameter arguments have also been removed.

\`\`\`shell
$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/owner/PetController.java
\`\`\`

\`\`\`diff
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
index 9c52e03..6f627c5 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
@@ -15,7 +15,6 @@
  */
 package org.springframework.samples.petclinic.owner;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Controller;
 import org.springframework.ui.ModelMap;
 import org.springframework.util.StringUtils;
@@ -51,7 +49,7 @@ class PetController {
     }
 
     @ModelAttribute("owner")
-    public Owner findOwner(@PathVariable("ownerId") int ownerId) {
+    public Owner findOwner(@PathVariable int ownerId) {
         return this.owners.findById(ownerId);
     }
 
@@ -89,7 +87,7 @@ class PetController {
     }
 
     @GetMapping("/pets/{petId}/edit")
-    public String initUpdateForm(@PathVariable("petId") int petId, ModelMap model) {
+    public String initUpdateForm(@PathVariable int petId, ModelMap model) {
         Pet pet = this.pets.findById(petId);
         model.put("pet", pet);
         return VIEWS_PETS_CREATE_OR_UPDATE_FORM;
\`\`\``,frontmatter:{title:"Web parameter arguments have also been removed.",srcSequence:"./demo/webparameter-arguments.md"},index:38,start:0,end:38,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/webparameter-arguments.md",raw:`# Web parameter arguments have also been removed.

\`\`\`shell
$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/owner/PetController.java
\`\`\`

\`\`\`diff
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
index 9c52e03..6f627c5 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
@@ -15,7 +15,6 @@
  */
 package org.springframework.samples.petclinic.owner;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Controller;
 import org.springframework.ui.ModelMap;
 import org.springframework.util.StringUtils;
@@ -51,7 +49,7 @@ class PetController {
     }
 
     @ModelAttribute("owner")
-    public Owner findOwner(@PathVariable("ownerId") int ownerId) {
+    public Owner findOwner(@PathVariable int ownerId) {
         return this.owners.findById(ownerId);
     }
 
@@ -89,7 +87,7 @@ class PetController {
     }
 
     @GetMapping("/pets/{petId}/edit")
-    public String initUpdateForm(@PathVariable("petId") int petId, ModelMap model) {
+    public String initUpdateForm(@PathVariable int petId, ModelMap model) {
         Pet pet = this.pets.findById(petId);
         model.put("pet", pet);
         return VIEWS_PETS_CREATE_OR_UPDATE_FORM;
\`\`\``,title:"Web parameter arguments have also been removed.",level:1,content:`# Web parameter arguments have also been removed.

\`\`\`shell
$ git --no-pager diff src/main/java/org/springframework/samples/petclinic/owner/PetController.java
\`\`\`

\`\`\`diff
diff --git a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
index 9c52e03..6f627c5 100644
--- a/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
+++ b/src/main/java/org/springframework/samples/petclinic/owner/PetController.java
@@ -15,7 +15,6 @@
  */
 package org.springframework.samples.petclinic.owner;
 
-import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Controller;
 import org.springframework.ui.ModelMap;
 import org.springframework.util.StringUtils;
@@ -51,7 +49,7 @@ class PetController {
     }
 
     @ModelAttribute("owner")
-    public Owner findOwner(@PathVariable("ownerId") int ownerId) {
+    public Owner findOwner(@PathVariable int ownerId) {
         return this.owners.findById(ownerId);
     }
 
@@ -89,7 +87,7 @@ class PetController {
     }
 
     @GetMapping("/pets/{petId}/edit")
-    public String initUpdateForm(@PathVariable("petId") int petId, ModelMap model) {
+    public String initUpdateForm(@PathVariable int petId, ModelMap model) {
         Pet pet = this.pets.findById(petId);
         model.put("pet", pet);
         return VIEWS_PETS_CREATE_OR_UPDATE_FORM;
\`\`\``,frontmatter:{title:"Web parameter arguments have also been removed."},index:0,start:0,end:38},inline:{raw:`---
src: ./demo/webparameter-arguments.md
---`,content:"",frontmatter:{},index:38,start:818,end:821},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/webparameter-arguments.md",notesHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:Hj,meta:{title:"Our application.properties have also been updated.",srcSequence:"./demo/application-properties.md",slide:{raw:null,title:"Our application.properties have also been updated.",level:1,content:`# Our application.properties have also been updated.

## Database initialization properties have been moved.

## Actuator properties have also undergone changes.
\`\`\`shell
$ git --no-pager diff src/main/resources/
\`\`\`

\`\`\`diff
diff --git a/src/main/resources/application.properties b/src/main/resources/application.properties
index fb07c6c..20ab139 100644
--- a/src/main/resources/application.properties
+++ b/src/main/resources/application.properties
@@ -1,7 +1,7 @@
 # database init, supports mysql too
 database=hsqldb
-spring.datasource.schema=classpath*:db/\${database}/schema.sql
-spring.datasource.data=classpath*:db/\${database}/data.sql
+spring.sql.init.schema-locations=classpath*:db/\${database}/schema.sql
+spring.sql.init.data-locations=classpath*:db/\${database}/data.sql
 
 # Web
 spring.thymeleaf.mode=HTML
@@ -13,7 +13,7 @@ spring.jpa.hibernate.ddl-auto=none
 spring.messages.basename=messages/messages
 
 # Actuator / Management
-management.contextPath=/manage
+management.server.servlet.context-path=/manage
 # Spring Boot 1.5 makes actuator secure by default
 management.security.enabled=false
\`\`\``,frontmatter:{title:"Our application.properties have also been updated.",srcSequence:"./demo/application-properties.md"},index:39,start:0,end:33,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/application-properties.md",raw:`# Our application.properties have also been updated.

## Database initialization properties have been moved.

## Actuator properties have also undergone changes.
\`\`\`shell
$ git --no-pager diff src/main/resources/
\`\`\`

\`\`\`diff
diff --git a/src/main/resources/application.properties b/src/main/resources/application.properties
index fb07c6c..20ab139 100644
--- a/src/main/resources/application.properties
+++ b/src/main/resources/application.properties
@@ -1,7 +1,7 @@
 # database init, supports mysql too
 database=hsqldb
-spring.datasource.schema=classpath*:db/\${database}/schema.sql
-spring.datasource.data=classpath*:db/\${database}/data.sql
+spring.sql.init.schema-locations=classpath*:db/\${database}/schema.sql
+spring.sql.init.data-locations=classpath*:db/\${database}/data.sql
 
 # Web
 spring.thymeleaf.mode=HTML
@@ -13,7 +13,7 @@ spring.jpa.hibernate.ddl-auto=none
 spring.messages.basename=messages/messages
 
 # Actuator / Management
-management.contextPath=/manage
+management.server.servlet.context-path=/manage
 # Spring Boot 1.5 makes actuator secure by default
 management.security.enabled=false
\`\`\``,title:"Our application.properties have also been updated.",level:1,content:`# Our application.properties have also been updated.

## Database initialization properties have been moved.

## Actuator properties have also undergone changes.
\`\`\`shell
$ git --no-pager diff src/main/resources/
\`\`\`

\`\`\`diff
diff --git a/src/main/resources/application.properties b/src/main/resources/application.properties
index fb07c6c..20ab139 100644
--- a/src/main/resources/application.properties
+++ b/src/main/resources/application.properties
@@ -1,7 +1,7 @@
 # database init, supports mysql too
 database=hsqldb
-spring.datasource.schema=classpath*:db/\${database}/schema.sql
-spring.datasource.data=classpath*:db/\${database}/data.sql
+spring.sql.init.schema-locations=classpath*:db/\${database}/schema.sql
+spring.sql.init.data-locations=classpath*:db/\${database}/data.sql
 
 # Web
 spring.thymeleaf.mode=HTML
@@ -13,7 +13,7 @@ spring.jpa.hibernate.ddl-auto=none
 spring.messages.basename=messages/messages
 
 # Actuator / Management
-management.contextPath=/manage
+management.server.servlet.context-path=/manage
 # Spring Boot 1.5 makes actuator secure by default
 management.security.enabled=false
\`\`\``,frontmatter:{title:"Our application.properties have also been updated."},index:0,start:0,end:33},inline:{raw:`---
src: ./demo/application-properties.md
---`,content:"",frontmatter:{},index:39,start:821,end:824},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/application-properties.md",notesHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:Yj,meta:{title:"Our pom.xml file now contains updated plugins and dependencies",srcSequence:"./demo/pom-2.5.md",slide:{raw:null,title:"Our pom.xml file now contains updated plugins and dependencies",level:1,content:`# Our pom.xml file now contains updated plugins and dependencies

\`\`\`shell
$ git --no-pager diff pom.xml
\`\`\`

\`\`\`diff
diff --git a/pom.xml b/pom.xml
index 6fdc4d1..6c68c9f 100644
--- a/pom.xml
+++ b/pom.xml
@@ -10,7 +10,7 @@
   <parent>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-parent</artifactId>
-    <version>1.5.4.RELEASE</version>
+    <version>2.5.14</version>
   </parent>
   <name>petclinic</name>
 
@@ -26,7 +26,6 @@
     <webjars-jquery-ui.version>1.11.4</webjars-jquery-ui.version>
     <webjars-jquery.version>2.2.4</webjars-jquery.version>
     <wro4j.version>1.8.0</wro4j.version>
-    <thymeleaf.version>3.0.6.RELEASE</thymeleaf.version>
 
     <cobertura.version>2.7</cobertura.version>
 
@@ -37,6 +36,16 @@
     <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-actuator</artifactId>
+      <exclusions>
+        <exclusion>
+          <groupId>junit</groupId>
+          <artifactId>junit</artifactId>
+        </exclusion>
+        <exclusion>
+          <groupId>org.junit.vintage</groupId>
+          <artifactId>junit-vintage-engine</artifactId>
+        </exclusion>
+      </exclusions>
     </dependency>
     <dependency>
       <groupId>org.springframework.boot</groupId>
@@ -54,12 +63,16 @@
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-thymeleaf</artifactId>
       <exclusions>
-      	<exclusion>
-      		<groupId>nz.net.ultraq.thymeleaf</groupId>
-      		<artifactId>thymeleaf-layout-dialect</artifactId>
-      	</exclusion>
+        <exclusion>
+          <groupId>nz.net.ultraq.thymeleaf</groupId>
+          <artifactId>thymeleaf-layout-dialect</artifactId>
+        </exclusion>
       </exclusions>
     </dependency>
+    <dependency>
+      <groupId>org.springframework.boot</groupId>
+      <artifactId>spring-boot-starter-validation</artifactId>
+    </dependency>
     <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-test</artifactId>
@@ -83,16 +96,16 @@
       <groupId>javax.cache</groupId>
       <artifactId>cache-api</artifactId>
     </dependency>
+    <dependency>
+      <groupId>javax.validation</groupId>
+      <artifactId>validation-api</artifactId>
+    </dependency>
     <dependency>
       <groupId>org.ehcache</groupId>
       <artifactId>ehcache</artifactId>
     </dependency>
 
     <!-- webjars -->
-    <dependency>
-      <groupId>org.webjars</groupId>
-      <artifactId>webjars-locator</artifactId>
-    </dependency>
     <dependency>
       <groupId>org.webjars</groupId>
       <artifactId>jquery</artifactId>
@@ -115,6 +128,23 @@
       <artifactId>spring-boot-devtools</artifactId>
       <scope>runtime</scope>
     </dependency>
+    <dependency>
+      <groupId>org.hamcrest</groupId>
+      <artifactId>hamcrest</artifactId>
+      <scope>test</scope>
+    </dependency>
+    <dependency>
+      <groupId>org.junit.jupiter</groupId>
+      <artifactId>junit-jupiter</artifactId>
+      <version>5.9.1</version>
+      <scope>test</scope>
+    </dependency>
+    <dependency>
+      <groupId>org.mockito</groupId>
+      <artifactId>mockito-junit-jupiter</artifactId>
+      <version>4.8.0</version>
+      <scope>test</scope>
+    </dependency>
   </dependencies>
 
   <build>
\`\`\``,frontmatter:{title:"Our pom.xml file now contains updated plugins and dependencies",srcSequence:"./demo/pom-2.5.md"},index:40,start:0,end:112,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/pom-2.5.md",raw:`# Our pom.xml file now contains updated plugins and dependencies

\`\`\`shell
$ git --no-pager diff pom.xml
\`\`\`

\`\`\`diff
diff --git a/pom.xml b/pom.xml
index 6fdc4d1..6c68c9f 100644
--- a/pom.xml
+++ b/pom.xml
@@ -10,7 +10,7 @@
   <parent>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-parent</artifactId>
-    <version>1.5.4.RELEASE</version>
+    <version>2.5.14</version>
   </parent>
   <name>petclinic</name>
 
@@ -26,7 +26,6 @@
     <webjars-jquery-ui.version>1.11.4</webjars-jquery-ui.version>
     <webjars-jquery.version>2.2.4</webjars-jquery.version>
     <wro4j.version>1.8.0</wro4j.version>
-    <thymeleaf.version>3.0.6.RELEASE</thymeleaf.version>
 
     <cobertura.version>2.7</cobertura.version>
 
@@ -37,6 +36,16 @@
     <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-actuator</artifactId>
+      <exclusions>
+        <exclusion>
+          <groupId>junit</groupId>
+          <artifactId>junit</artifactId>
+        </exclusion>
+        <exclusion>
+          <groupId>org.junit.vintage</groupId>
+          <artifactId>junit-vintage-engine</artifactId>
+        </exclusion>
+      </exclusions>
     </dependency>
     <dependency>
       <groupId>org.springframework.boot</groupId>
@@ -54,12 +63,16 @@
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-thymeleaf</artifactId>
       <exclusions>
-      	<exclusion>
-      		<groupId>nz.net.ultraq.thymeleaf</groupId>
-      		<artifactId>thymeleaf-layout-dialect</artifactId>
-      	</exclusion>
+        <exclusion>
+          <groupId>nz.net.ultraq.thymeleaf</groupId>
+          <artifactId>thymeleaf-layout-dialect</artifactId>
+        </exclusion>
       </exclusions>
     </dependency>
+    <dependency>
+      <groupId>org.springframework.boot</groupId>
+      <artifactId>spring-boot-starter-validation</artifactId>
+    </dependency>
     <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-test</artifactId>
@@ -83,16 +96,16 @@
       <groupId>javax.cache</groupId>
       <artifactId>cache-api</artifactId>
     </dependency>
+    <dependency>
+      <groupId>javax.validation</groupId>
+      <artifactId>validation-api</artifactId>
+    </dependency>
     <dependency>
       <groupId>org.ehcache</groupId>
       <artifactId>ehcache</artifactId>
     </dependency>
 
     <!-- webjars -->
-    <dependency>
-      <groupId>org.webjars</groupId>
-      <artifactId>webjars-locator</artifactId>
-    </dependency>
     <dependency>
       <groupId>org.webjars</groupId>
       <artifactId>jquery</artifactId>
@@ -115,6 +128,23 @@
       <artifactId>spring-boot-devtools</artifactId>
       <scope>runtime</scope>
     </dependency>
+    <dependency>
+      <groupId>org.hamcrest</groupId>
+      <artifactId>hamcrest</artifactId>
+      <scope>test</scope>
+    </dependency>
+    <dependency>
+      <groupId>org.junit.jupiter</groupId>
+      <artifactId>junit-jupiter</artifactId>
+      <version>5.9.1</version>
+      <scope>test</scope>
+    </dependency>
+    <dependency>
+      <groupId>org.mockito</groupId>
+      <artifactId>mockito-junit-jupiter</artifactId>
+      <version>4.8.0</version>
+      <scope>test</scope>
+    </dependency>
   </dependencies>
 
   <build>
\`\`\``,title:"Our pom.xml file now contains updated plugins and dependencies",level:1,content:`# Our pom.xml file now contains updated plugins and dependencies

\`\`\`shell
$ git --no-pager diff pom.xml
\`\`\`

\`\`\`diff
diff --git a/pom.xml b/pom.xml
index 6fdc4d1..6c68c9f 100644
--- a/pom.xml
+++ b/pom.xml
@@ -10,7 +10,7 @@
   <parent>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-parent</artifactId>
-    <version>1.5.4.RELEASE</version>
+    <version>2.5.14</version>
   </parent>
   <name>petclinic</name>
 
@@ -26,7 +26,6 @@
     <webjars-jquery-ui.version>1.11.4</webjars-jquery-ui.version>
     <webjars-jquery.version>2.2.4</webjars-jquery.version>
     <wro4j.version>1.8.0</wro4j.version>
-    <thymeleaf.version>3.0.6.RELEASE</thymeleaf.version>
 
     <cobertura.version>2.7</cobertura.version>
 
@@ -37,6 +36,16 @@
     <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-actuator</artifactId>
+      <exclusions>
+        <exclusion>
+          <groupId>junit</groupId>
+          <artifactId>junit</artifactId>
+        </exclusion>
+        <exclusion>
+          <groupId>org.junit.vintage</groupId>
+          <artifactId>junit-vintage-engine</artifactId>
+        </exclusion>
+      </exclusions>
     </dependency>
     <dependency>
       <groupId>org.springframework.boot</groupId>
@@ -54,12 +63,16 @@
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-thymeleaf</artifactId>
       <exclusions>
-      	<exclusion>
-      		<groupId>nz.net.ultraq.thymeleaf</groupId>
-      		<artifactId>thymeleaf-layout-dialect</artifactId>
-      	</exclusion>
+        <exclusion>
+          <groupId>nz.net.ultraq.thymeleaf</groupId>
+          <artifactId>thymeleaf-layout-dialect</artifactId>
+        </exclusion>
       </exclusions>
     </dependency>
+    <dependency>
+      <groupId>org.springframework.boot</groupId>
+      <artifactId>spring-boot-starter-validation</artifactId>
+    </dependency>
     <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-test</artifactId>
@@ -83,16 +96,16 @@
       <groupId>javax.cache</groupId>
       <artifactId>cache-api</artifactId>
     </dependency>
+    <dependency>
+      <groupId>javax.validation</groupId>
+      <artifactId>validation-api</artifactId>
+    </dependency>
     <dependency>
       <groupId>org.ehcache</groupId>
       <artifactId>ehcache</artifactId>
     </dependency>
 
     <!-- webjars -->
-    <dependency>
-      <groupId>org.webjars</groupId>
-      <artifactId>webjars-locator</artifactId>
-    </dependency>
     <dependency>
       <groupId>org.webjars</groupId>
       <artifactId>jquery</artifactId>
@@ -115,6 +128,23 @@
       <artifactId>spring-boot-devtools</artifactId>
       <scope>runtime</scope>
     </dependency>
+    <dependency>
+      <groupId>org.hamcrest</groupId>
+      <artifactId>hamcrest</artifactId>
+      <scope>test</scope>
+    </dependency>
+    <dependency>
+      <groupId>org.junit.jupiter</groupId>
+      <artifactId>junit-jupiter</artifactId>
+      <version>5.9.1</version>
+      <scope>test</scope>
+    </dependency>
+    <dependency>
+      <groupId>org.mockito</groupId>
+      <artifactId>mockito-junit-jupiter</artifactId>
+      <version>4.8.0</version>
+      <scope>test</scope>
+    </dependency>
   </dependencies>
 
   <build>
\`\`\``,frontmatter:{title:"Our pom.xml file now contains updated plugins and dependencies"},index:0,start:0,end:112},inline:{raw:`---
src: ./demo/pom-2.5.md
---`,content:"",frontmatter:{},index:40,start:824,end:827},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/pom-2.5.md",notesHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:ob,meta:{title:"Our tests have also been migrated to JUnit 5,",srcSequence:"./demo/commit-2.5.md",slide:{raw:null,title:"Our tests have also been migrated to JUnit 5,",level:1,content:`# Our tests have also been migrated to JUnit 5,
## with similar changes to what we have seen before.
<br/>

# Satisfied with our changes, we commit the results.
\`\`\`shell
$ git commit -a -m Spring\\ Boot\\ 2.5\\ on\\ Java\\ 8

[openrewrite-migration-demo 07b4eb9] Spring Boot 2.5 on Java 8
 21 files changed, 338 insertions(+), 339 deletions(-)
 rewrite src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java (61%)
\`\`\``,frontmatter:{title:"Our tests have also been migrated to JUnit 5,",srcSequence:"./demo/commit-2.5.md"},index:41,start:0,end:12,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/commit-2.5.md",raw:`# Our tests have also been migrated to JUnit 5,
## with similar changes to what we have seen before.
<br/>

# Satisfied with our changes, we commit the results.
\`\`\`shell
$ git commit -a -m Spring\\ Boot\\ 2.5\\ on\\ Java\\ 8

[openrewrite-migration-demo 07b4eb9] Spring Boot 2.5 on Java 8
 21 files changed, 338 insertions(+), 339 deletions(-)
 rewrite src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java (61%)
\`\`\``,title:"Our tests have also been migrated to JUnit 5,",level:1,content:`# Our tests have also been migrated to JUnit 5,
## with similar changes to what we have seen before.
<br/>

# Satisfied with our changes, we commit the results.
\`\`\`shell
$ git commit -a -m Spring\\ Boot\\ 2.5\\ on\\ Java\\ 8

[openrewrite-migration-demo 07b4eb9] Spring Boot 2.5 on Java 8
 21 files changed, 338 insertions(+), 339 deletions(-)
 rewrite src/test/java/org/springframework/samples/petclinic/owner/OwnerControllerTests.java (61%)
\`\`\``,frontmatter:{title:"Our tests have also been migrated to JUnit 5,"},index:0,start:0,end:12},inline:{raw:`---
src: ./demo/commit-2.5.md
---
`,content:"",frontmatter:{},index:41,start:827,end:831},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/commit-2.5.md",notesHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:ib,meta:{title:"Next we will upgrade to Java 11 using a different module.",srcSequence:"./demo/migrate-java-11.md",slide:{raw:null,title:"Next we will upgrade to Java 11 using a different module.",level:1,content:`# Next we will upgrade to Java 11 using a different module.
## The Migrate Java module contains recipes to adopt new language features.

\`\`\`shell {maxHeight: '100'}
$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \\
    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.11.0 \\
    -DactiveRecipes=org.openrewrite.java.migrate.Java8toJava11

[INFO] --- rewrite-maven-plugin:4.34.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.migrate.Java8toJava11]
[INFO] Using active styles(s) []
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing Source Files
[INFO] Running recipe(s)...
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.migrate.Java8toJava11
[WARNING]         org.openrewrite.java.migrate.javax.AddJaxbDependencies
[WARNING]             org.openrewrite.java.migrate.javax.AddJaxbRuntime: {runtime=sun}
[WARNING]         org.openrewrite.java.migrate.AddJDeprScanPlugin
[WARNING]         org.openrewrite.java.migrate.cobertura.RemoveCoberturaMavenPlugin
[WARNING]             org.openrewrite.maven.RemovePlugin: {groupId=org.codehaus.mojo, artifactId=cobertura-maven-plugin}
[WARNING]         org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion
[WARNING]             org.openrewrite.maven.UpgradePluginVersion: {groupId=ro.isdc.wro4j, artifactId=wro4j-maven-plugin, newVersion=1.10.1}
[WARNING]         org.openrewrite.java.migrate.JavaVersion11
[WARNING]             org.openrewrite.maven.ChangePropertyValue: {key=java.version, newValue=11, addIfMissing=false}
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  23.821 s
[INFO] Finished at: 2022-10-10T11:05:42+01:00
[INFO] ------------------------------------------------------------------------
\`\`\``,frontmatter:{title:"Next we will upgrade to Java 11 using a different module.",srcSequence:"./demo/migrate-java-11.md"},index:42,start:0,end:34,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/migrate-java-11.md",raw:`# Next we will upgrade to Java 11 using a different module.
## The Migrate Java module contains recipes to adopt new language features.

\`\`\`shell {maxHeight: '100'}
$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \\
    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.11.0 \\
    -DactiveRecipes=org.openrewrite.java.migrate.Java8toJava11

[INFO] --- rewrite-maven-plugin:4.34.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.migrate.Java8toJava11]
[INFO] Using active styles(s) []
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing Source Files
[INFO] Running recipe(s)...
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.migrate.Java8toJava11
[WARNING]         org.openrewrite.java.migrate.javax.AddJaxbDependencies
[WARNING]             org.openrewrite.java.migrate.javax.AddJaxbRuntime: {runtime=sun}
[WARNING]         org.openrewrite.java.migrate.AddJDeprScanPlugin
[WARNING]         org.openrewrite.java.migrate.cobertura.RemoveCoberturaMavenPlugin
[WARNING]             org.openrewrite.maven.RemovePlugin: {groupId=org.codehaus.mojo, artifactId=cobertura-maven-plugin}
[WARNING]         org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion
[WARNING]             org.openrewrite.maven.UpgradePluginVersion: {groupId=ro.isdc.wro4j, artifactId=wro4j-maven-plugin, newVersion=1.10.1}
[WARNING]         org.openrewrite.java.migrate.JavaVersion11
[WARNING]             org.openrewrite.maven.ChangePropertyValue: {key=java.version, newValue=11, addIfMissing=false}
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  23.821 s
[INFO] Finished at: 2022-10-10T11:05:42+01:00
[INFO] ------------------------------------------------------------------------
\`\`\``,title:"Next we will upgrade to Java 11 using a different module.",level:1,content:`# Next we will upgrade to Java 11 using a different module.
## The Migrate Java module contains recipes to adopt new language features.

\`\`\`shell {maxHeight: '100'}
$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \\
    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.11.0 \\
    -DactiveRecipes=org.openrewrite.java.migrate.Java8toJava11

[INFO] --- rewrite-maven-plugin:4.34.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.migrate.Java8toJava11]
[INFO] Using active styles(s) []
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing Source Files
[INFO] Running recipe(s)...
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.migrate.Java8toJava11
[WARNING]         org.openrewrite.java.migrate.javax.AddJaxbDependencies
[WARNING]             org.openrewrite.java.migrate.javax.AddJaxbRuntime: {runtime=sun}
[WARNING]         org.openrewrite.java.migrate.AddJDeprScanPlugin
[WARNING]         org.openrewrite.java.migrate.cobertura.RemoveCoberturaMavenPlugin
[WARNING]             org.openrewrite.maven.RemovePlugin: {groupId=org.codehaus.mojo, artifactId=cobertura-maven-plugin}
[WARNING]         org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion
[WARNING]             org.openrewrite.maven.UpgradePluginVersion: {groupId=ro.isdc.wro4j, artifactId=wro4j-maven-plugin, newVersion=1.10.1}
[WARNING]         org.openrewrite.java.migrate.JavaVersion11
[WARNING]             org.openrewrite.maven.ChangePropertyValue: {key=java.version, newValue=11, addIfMissing=false}
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  23.821 s
[INFO] Finished at: 2022-10-10T11:05:42+01:00
[INFO] ------------------------------------------------------------------------
\`\`\``,frontmatter:{title:"Next we will upgrade to Java 11 using a different module."},index:0,start:0,end:34},inline:{raw:`---
src: ./demo/migrate-java-11.md
---`,content:"",frontmatter:{},index:42,start:831,end:834},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/migrate-java-11.md",notesHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:yb,meta:{title:"The compiler source and target versions are updated.",srcSequence:"./demo/changes-java-11.md",slide:{raw:null,title:"The compiler source and target versions are updated.",level:1,content:`# The compiler source and target versions are updated.

## Dependencies have been added for jaxb.

## Wro4j has been upgraded to be compatible.

## Cobertura has been dropped, as it is incompatible.

\`\`\`shell
$ git --no-pager diff pom.xml
\`\`\`

\`\`\`diff
diff --git a/pom.xml b/pom.xml
index 6c68c9f..6680c33 100644
--- a/pom.xml
+++ b/pom.xml
@@ -17,7 +17,7 @@
   <properties>
 
     <!-- Generic properties -->
-    <java.version>1.8</java.version>
+    <java.version>11</java.version>
     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
     <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
 
@@ -25,7 +25,7 @@
     <webjars-bootstrap.version>3.3.6</webjars-bootstrap.version>
     <webjars-jquery-ui.version>1.11.4</webjars-jquery-ui.version>
     <webjars-jquery.version>2.2.4</webjars-jquery.version>
-    <wro4j.version>1.8.0</wro4j.version>
+    <wro4j.version>1.10.1</wro4j.version>
 
     <cobertura.version>2.7</cobertura.version>
 
@@ -116,6 +116,24 @@
       <artifactId>jquery-ui</artifactId>
       <version>\${webjars-jquery-ui.version}</version>
     </dependency>
+    <dependency>
+      <groupId>com.sun.xml.bind</groupId>
+      <artifactId>jaxb-impl</artifactId>
+      <version>2.3.2</version>
+      <scope>provided</scope>
+    </dependency>
+    <dependency>
+      <groupId>com.sun.xml.bind</groupId>
+      <artifactId>jaxb-impl</artifactId>
+      <version>2.3.2</version>
+      <scope>provided</scope>
+    </dependency>
+    <dependency>
+      <groupId>com.sun.xml.bind</groupId>
+      <artifactId>jaxb-impl</artifactId>
+      <version>2.3.2</version>
+      <scope>provided</scope>
+    </dependency>
     <dependency>
       <groupId>org.webjars</groupId>
       <artifactId>bootstrap</artifactId>
@@ -170,22 +188,6 @@
           </execution>
         </executions>
       </plugin>
-      <plugin>
-        <groupId>org.codehaus.mojo</groupId>
-        <artifactId>cobertura-maven-plugin</artifactId>
-        <version>\${cobertura.version}</version>
-        <configuration>
-          <check />
-        </configuration>
-        <executions>
-          <execution>
-            <goals>
-              <goal>clean</goal>
-              <goal>check</goal>
-            </goals>
-          </execution>
-        </executions>
-      </plugin>
 
       <!-- Spring Boot Actuator displays build-related information if a git.properties
         file is present at the classpath -->
@@ -236,22 +238,19 @@
           </dependency>
         </dependencies>
       </plugin>
+      <plugin>
+        <groupId>org.apache.maven.plugins</groupId>
+        <artifactId>maven-jdeprscan-plugin</artifactId>
+        <version>3.0.0-alpha-1</version>
+        <configuration>
+          <release>11</release>
+        </configuration>
+      </plugin>
     </plugins>
   </build>
   <reporting>
     <plugins>
       <!-- integrate maven-cobertura-plugin to project site -->
-      <plugin>
-        <groupId>org.codehaus.mojo</groupId>
-        <artifactId>cobertura-maven-plugin</artifactId>
-        <version>\${cobertura.version}</version>
-        <configuration>
-          <formats>
-            <format>html</format>
-          </formats>
-          <check />
-        </configuration>
-      </plugin>
     </plugins>
   </reporting>
\`\`\``,frontmatter:{title:"The compiler source and target versions are updated.",srcSequence:"./demo/changes-java-11.md"},index:43,start:0,end:114,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/changes-java-11.md",raw:`# The compiler source and target versions are updated.

## Dependencies have been added for jaxb.

## Wro4j has been upgraded to be compatible.

## Cobertura has been dropped, as it is incompatible.

\`\`\`shell
$ git --no-pager diff pom.xml
\`\`\`

\`\`\`diff
diff --git a/pom.xml b/pom.xml
index 6c68c9f..6680c33 100644
--- a/pom.xml
+++ b/pom.xml
@@ -17,7 +17,7 @@
   <properties>
 
     <!-- Generic properties -->
-    <java.version>1.8</java.version>
+    <java.version>11</java.version>
     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
     <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
 
@@ -25,7 +25,7 @@
     <webjars-bootstrap.version>3.3.6</webjars-bootstrap.version>
     <webjars-jquery-ui.version>1.11.4</webjars-jquery-ui.version>
     <webjars-jquery.version>2.2.4</webjars-jquery.version>
-    <wro4j.version>1.8.0</wro4j.version>
+    <wro4j.version>1.10.1</wro4j.version>
 
     <cobertura.version>2.7</cobertura.version>
 
@@ -116,6 +116,24 @@
       <artifactId>jquery-ui</artifactId>
       <version>\${webjars-jquery-ui.version}</version>
     </dependency>
+    <dependency>
+      <groupId>com.sun.xml.bind</groupId>
+      <artifactId>jaxb-impl</artifactId>
+      <version>2.3.2</version>
+      <scope>provided</scope>
+    </dependency>
+    <dependency>
+      <groupId>com.sun.xml.bind</groupId>
+      <artifactId>jaxb-impl</artifactId>
+      <version>2.3.2</version>
+      <scope>provided</scope>
+    </dependency>
+    <dependency>
+      <groupId>com.sun.xml.bind</groupId>
+      <artifactId>jaxb-impl</artifactId>
+      <version>2.3.2</version>
+      <scope>provided</scope>
+    </dependency>
     <dependency>
       <groupId>org.webjars</groupId>
       <artifactId>bootstrap</artifactId>
@@ -170,22 +188,6 @@
           </execution>
         </executions>
       </plugin>
-      <plugin>
-        <groupId>org.codehaus.mojo</groupId>
-        <artifactId>cobertura-maven-plugin</artifactId>
-        <version>\${cobertura.version}</version>
-        <configuration>
-          <check />
-        </configuration>
-        <executions>
-          <execution>
-            <goals>
-              <goal>clean</goal>
-              <goal>check</goal>
-            </goals>
-          </execution>
-        </executions>
-      </plugin>
 
       <!-- Spring Boot Actuator displays build-related information if a git.properties
         file is present at the classpath -->
@@ -236,22 +238,19 @@
           </dependency>
         </dependencies>
       </plugin>
+      <plugin>
+        <groupId>org.apache.maven.plugins</groupId>
+        <artifactId>maven-jdeprscan-plugin</artifactId>
+        <version>3.0.0-alpha-1</version>
+        <configuration>
+          <release>11</release>
+        </configuration>
+      </plugin>
     </plugins>
   </build>
   <reporting>
     <plugins>
       <!-- integrate maven-cobertura-plugin to project site -->
-      <plugin>
-        <groupId>org.codehaus.mojo</groupId>
-        <artifactId>cobertura-maven-plugin</artifactId>
-        <version>\${cobertura.version}</version>
-        <configuration>
-          <formats>
-            <format>html</format>
-          </formats>
-          <check />
-        </configuration>
-      </plugin>
     </plugins>
   </reporting>
\`\`\``,title:"The compiler source and target versions are updated.",level:1,content:`# The compiler source and target versions are updated.

## Dependencies have been added for jaxb.

## Wro4j has been upgraded to be compatible.

## Cobertura has been dropped, as it is incompatible.

\`\`\`shell
$ git --no-pager diff pom.xml
\`\`\`

\`\`\`diff
diff --git a/pom.xml b/pom.xml
index 6c68c9f..6680c33 100644
--- a/pom.xml
+++ b/pom.xml
@@ -17,7 +17,7 @@
   <properties>
 
     <!-- Generic properties -->
-    <java.version>1.8</java.version>
+    <java.version>11</java.version>
     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
     <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
 
@@ -25,7 +25,7 @@
     <webjars-bootstrap.version>3.3.6</webjars-bootstrap.version>
     <webjars-jquery-ui.version>1.11.4</webjars-jquery-ui.version>
     <webjars-jquery.version>2.2.4</webjars-jquery.version>
-    <wro4j.version>1.8.0</wro4j.version>
+    <wro4j.version>1.10.1</wro4j.version>
 
     <cobertura.version>2.7</cobertura.version>
 
@@ -116,6 +116,24 @@
       <artifactId>jquery-ui</artifactId>
       <version>\${webjars-jquery-ui.version}</version>
     </dependency>
+    <dependency>
+      <groupId>com.sun.xml.bind</groupId>
+      <artifactId>jaxb-impl</artifactId>
+      <version>2.3.2</version>
+      <scope>provided</scope>
+    </dependency>
+    <dependency>
+      <groupId>com.sun.xml.bind</groupId>
+      <artifactId>jaxb-impl</artifactId>
+      <version>2.3.2</version>
+      <scope>provided</scope>
+    </dependency>
+    <dependency>
+      <groupId>com.sun.xml.bind</groupId>
+      <artifactId>jaxb-impl</artifactId>
+      <version>2.3.2</version>
+      <scope>provided</scope>
+    </dependency>
     <dependency>
       <groupId>org.webjars</groupId>
       <artifactId>bootstrap</artifactId>
@@ -170,22 +188,6 @@
           </execution>
         </executions>
       </plugin>
-      <plugin>
-        <groupId>org.codehaus.mojo</groupId>
-        <artifactId>cobertura-maven-plugin</artifactId>
-        <version>\${cobertura.version}</version>
-        <configuration>
-          <check />
-        </configuration>
-        <executions>
-          <execution>
-            <goals>
-              <goal>clean</goal>
-              <goal>check</goal>
-            </goals>
-          </execution>
-        </executions>
-      </plugin>
 
       <!-- Spring Boot Actuator displays build-related information if a git.properties
         file is present at the classpath -->
@@ -236,22 +238,19 @@
           </dependency>
         </dependencies>
       </plugin>
+      <plugin>
+        <groupId>org.apache.maven.plugins</groupId>
+        <artifactId>maven-jdeprscan-plugin</artifactId>
+        <version>3.0.0-alpha-1</version>
+        <configuration>
+          <release>11</release>
+        </configuration>
+      </plugin>
     </plugins>
   </build>
   <reporting>
     <plugins>
       <!-- integrate maven-cobertura-plugin to project site -->
-      <plugin>
-        <groupId>org.codehaus.mojo</groupId>
-        <artifactId>cobertura-maven-plugin</artifactId>
-        <version>\${cobertura.version}</version>
-        <configuration>
-          <formats>
-            <format>html</format>
-          </formats>
-          <check />
-        </configuration>
-      </plugin>
     </plugins>
   </reporting>
\`\`\``,frontmatter:{title:"The compiler source and target versions are updated."},index:0,start:0,end:114},inline:{raw:`---
src: ./demo/changes-java-11.md
---`,content:"",frontmatter:{},index:43,start:834,end:837},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/changes-java-11.md",notesHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:bb,meta:{title:"Individually, these might be simple changes.",srcSequence:"./demo/commit-java-11.md",slide:{raw:null,title:"Individually, these might be simple changes.",level:1,content:`# Individually, these might be simple changes.

## But by automating these changes, we can run them at scale,
## to upgrade our entire application landscape in minutes.
<br/>

# We update our JDK to now use Java 11

\`\`\`shell
$ sdk use java 11.0.16-tem

Using java version 11.0.16-tem in this shell.
\`\`\`

# And we again commit the results

\`\`\`shell
$ git commit -a -m Spring\\ Boot\\ 2.5\\ on\\ Java\\ 11

[openrewrite-migration-demo 36a5b5d] Spring Boot 2.5 on Java 11
 1 file changed, 28 insertions(+), 29 deletions(-)
 \`\`\``,frontmatter:{title:"Individually, these might be simple changes.",srcSequence:"./demo/commit-java-11.md"},index:44,start:0,end:22,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/commit-java-11.md",raw:`# Individually, these might be simple changes.

## But by automating these changes, we can run them at scale,
## to upgrade our entire application landscape in minutes.
<br/>

# We update our JDK to now use Java 11

\`\`\`shell
$ sdk use java 11.0.16-tem

Using java version 11.0.16-tem in this shell.
\`\`\`

# And we again commit the results

\`\`\`shell
$ git commit -a -m Spring\\ Boot\\ 2.5\\ on\\ Java\\ 11

[openrewrite-migration-demo 36a5b5d] Spring Boot 2.5 on Java 11
 1 file changed, 28 insertions(+), 29 deletions(-)
 \`\`\``,title:"Individually, these might be simple changes.",level:1,content:`# Individually, these might be simple changes.

## But by automating these changes, we can run them at scale,
## to upgrade our entire application landscape in minutes.
<br/>

# We update our JDK to now use Java 11

\`\`\`shell
$ sdk use java 11.0.16-tem

Using java version 11.0.16-tem in this shell.
\`\`\`

# And we again commit the results

\`\`\`shell
$ git commit -a -m Spring\\ Boot\\ 2.5\\ on\\ Java\\ 11

[openrewrite-migration-demo 36a5b5d] Spring Boot 2.5 on Java 11
 1 file changed, 28 insertions(+), 29 deletions(-)
 \`\`\``,frontmatter:{title:"Individually, these might be simple changes."},index:0,start:0,end:22},inline:{raw:`---
src: ./demo/commit-java-11.md
---
`,content:"",frontmatter:{},index:44,start:837,end:841},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/commit-java-11.md",notesHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:_b,meta:{title:"Next we run the recipe for the Java 17 migration.",srcSequence:"./demo/migrate-java-17.md",slide:{raw:null,title:"Next we run the recipe for the Java 17 migration.",level:1,content:`# Next we run the recipe for the Java 17 migration.
\`\`\`shell
$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \\
    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.11.0 \\
    -DactiveRecipes=org.openrewrite.java.migrate.JavaVersion17
\`\`\`
\`\`\`shell
[INFO] --- rewrite-maven-plugin:4.34.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.migrate.JavaVersion17]
[INFO] Using active styles(s) []
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing Source Files
[INFO] Running recipe(s)...
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.migrate.JavaVersion17
[WARNING]         org.openrewrite.maven.ChangePropertyValue: {key=java.version, newValue=17, addIfMissing=false}
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  14.908 s
[INFO] Finished at: 2022-10-10T11:12:29+01:00
[INFO] ------------------------------------------------------------------------
\`\`\``,frontmatter:{title:"Next we run the recipe for the Java 17 migration.",srcSequence:"./demo/migrate-java-17.md"},index:45,start:0,end:25,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/migrate-java-17.md",raw:`# Next we run the recipe for the Java 17 migration.
\`\`\`shell
$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \\
    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.11.0 \\
    -DactiveRecipes=org.openrewrite.java.migrate.JavaVersion17
\`\`\`
\`\`\`shell
[INFO] --- rewrite-maven-plugin:4.34.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.migrate.JavaVersion17]
[INFO] Using active styles(s) []
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing Source Files
[INFO] Running recipe(s)...
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.migrate.JavaVersion17
[WARNING]         org.openrewrite.maven.ChangePropertyValue: {key=java.version, newValue=17, addIfMissing=false}
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  14.908 s
[INFO] Finished at: 2022-10-10T11:12:29+01:00
[INFO] ------------------------------------------------------------------------
\`\`\``,title:"Next we run the recipe for the Java 17 migration.",level:1,content:`# Next we run the recipe for the Java 17 migration.
\`\`\`shell
$ ./mvnw org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \\
    -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.11.0 \\
    -DactiveRecipes=org.openrewrite.java.migrate.JavaVersion17
\`\`\`
\`\`\`shell
[INFO] --- rewrite-maven-plugin:4.34.0:run (default-cli) @ spring-petclinic ---
[INFO] Using active recipe(s) [org.openrewrite.java.migrate.JavaVersion17]
[INFO] Using active styles(s) []
[INFO] Validating active recipes...
[INFO] Project [petclinic] Resolving Poms...
[INFO] Project [petclinic] Parsing Source Files
[INFO] Running recipe(s)...
[WARNING] Changes have been made to pom.xml by:
[WARNING]     org.openrewrite.java.migrate.JavaVersion17
[WARNING]         org.openrewrite.maven.ChangePropertyValue: {key=java.version, newValue=17, addIfMissing=false}
[WARNING] Please review and commit the results.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  14.908 s
[INFO] Finished at: 2022-10-10T11:12:29+01:00
[INFO] ------------------------------------------------------------------------
\`\`\``,frontmatter:{title:"Next we run the recipe for the Java 17 migration."},index:0,start:0,end:25},inline:{raw:`---
src: ./demo/migrate-java-17.md
---`,content:"",frontmatter:{},index:45,start:841,end:844},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/migrate-java-17.md",notesHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:Cb,meta:{title:"The change is minimal",srcSequence:"./demo/changes-java-17.md",slide:{raw:null,title:"The change is minimal",level:1,content:`# The change is minimal

\`\`\`diff
diff --git a/pom.xml b/pom.xml
index 6680c33..ed3ce9b 100644
--- a/pom.xml
+++ b/pom.xml
@@ -1,7 +1,5 @@
 <?xml version="1.0" encoding="UTF-8"?>
-<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
-  xmlns="http://maven.apache.org/POM/4.0.0"
-  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
+<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://maven.apache.org/POM/4.0.0" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
   <modelVersion>4.0.0</modelVersion>
   <groupId>org.springframework.samples</groupId>
   <artifactId>spring-petclinic</artifactId>
@@ -17,7 +15,7 @@
   <properties>
 
     <!-- Generic properties -->
-    <java.version>11</java.version>
+    <java.version>17</java.version>
     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
\`\`\``,frontmatter:{title:"The change is minimal",srcSequence:"./demo/changes-java-17.md"},index:46,start:0,end:24,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/changes-java-17.md",raw:`# The change is minimal

\`\`\`diff
diff --git a/pom.xml b/pom.xml
index 6680c33..ed3ce9b 100644
--- a/pom.xml
+++ b/pom.xml
@@ -1,7 +1,5 @@
 <?xml version="1.0" encoding="UTF-8"?>
-<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
-  xmlns="http://maven.apache.org/POM/4.0.0"
-  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
+<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://maven.apache.org/POM/4.0.0" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
   <modelVersion>4.0.0</modelVersion>
   <groupId>org.springframework.samples</groupId>
   <artifactId>spring-petclinic</artifactId>
@@ -17,7 +15,7 @@
   <properties>
 
     <!-- Generic properties -->
-    <java.version>11</java.version>
+    <java.version>17</java.version>
     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
\`\`\``,title:"The change is minimal",level:1,content:`# The change is minimal

\`\`\`diff
diff --git a/pom.xml b/pom.xml
index 6680c33..ed3ce9b 100644
--- a/pom.xml
+++ b/pom.xml
@@ -1,7 +1,5 @@
 <?xml version="1.0" encoding="UTF-8"?>
-<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
-  xmlns="http://maven.apache.org/POM/4.0.0"
-  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
+<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://maven.apache.org/POM/4.0.0" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
   <modelVersion>4.0.0</modelVersion>
   <groupId>org.springframework.samples</groupId>
   <artifactId>spring-petclinic</artifactId>
@@ -17,7 +15,7 @@
   <properties>
 
     <!-- Generic properties -->
-    <java.version>11</java.version>
+    <java.version>17</java.version>
     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
\`\`\``,frontmatter:{title:"The change is minimal"},index:0,start:0,end:24},inline:{raw:`---
src: ./demo/changes-java-17.md
---`,content:"",frontmatter:{},index:46,start:844,end:847},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/changes-java-17.md",notesHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:Sb,meta:{title:"We update our JDK to now use Java 17",srcSequence:"./demo/commit-java-17.md",slide:{raw:null,title:"We update our JDK to now use Java 17",level:1,content:`# We update our JDK to now use Java 17

\`\`\`shell
$ sdk use java 17.0.4-tem

Using java version 17.0.4-tem in this shell.
\`\`\`

# And with a final commit, we complete the migration.

\`\`\`shell
$ git commit -a -m Spring\\ Boot\\ 2.5\\ on\\ Java\\ 17

[openrewrite-migration-demo 77eb996] Spring Boot 2.5 on Java 17
 1 file changed, 3 insertions(+), 31 deletions(-)
\`\`\``,frontmatter:{title:"We update our JDK to now use Java 17",srcSequence:"./demo/commit-java-17.md"},index:47,start:0,end:16,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/commit-java-17.md",raw:`# We update our JDK to now use Java 17

\`\`\`shell
$ sdk use java 17.0.4-tem

Using java version 17.0.4-tem in this shell.
\`\`\`

# And with a final commit, we complete the migration.

\`\`\`shell
$ git commit -a -m Spring\\ Boot\\ 2.5\\ on\\ Java\\ 17

[openrewrite-migration-demo 77eb996] Spring Boot 2.5 on Java 17
 1 file changed, 3 insertions(+), 31 deletions(-)
\`\`\``,title:"We update our JDK to now use Java 17",level:1,content:`# We update our JDK to now use Java 17

\`\`\`shell
$ sdk use java 17.0.4-tem

Using java version 17.0.4-tem in this shell.
\`\`\`

# And with a final commit, we complete the migration.

\`\`\`shell
$ git commit -a -m Spring\\ Boot\\ 2.5\\ on\\ Java\\ 17

[openrewrite-migration-demo 77eb996] Spring Boot 2.5 on Java 17
 1 file changed, 3 insertions(+), 31 deletions(-)
\`\`\``,frontmatter:{title:"We update our JDK to now use Java 17"},index:0,start:0,end:16},inline:{raw:`---
src: ./demo/commit-java-17.md
---`,content:"",frontmatter:{},index:47,start:847,end:850},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/commit-java-17.md",notesHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:Ob,meta:{title:"Now finally, we run Maven verify to see how we did on the migration.",srcSequence:"./demo/mvn-verify.md",slide:{raw:null,title:"Now finally, we run Maven verify to see how we did on the migration.",level:1,content:`# Now finally, we run Maven verify to see how we did on the migration.

## There will be two test failures that we have to fix by hand.
- These are caused by the validator migration & a response type change.
- Not a bad result for an automated migration!

\`\`\`shell {1,6-10,12,15}
$ ./mvnw verify

[INFO] 
[INFO] Results:
[INFO] 
[ERROR] Failures: 
[ERROR]   ValidatorTests.shouldNotValidateWhenFirstNameEmpty:42 
expected: "may not be empty"
but was : "must not be empty"
[ERROR]   VetControllerTests.testShowResourcesVetList:67 Content type expected:<application/json;charset=UTF-8> but was:<application/json>
[INFO] 
[ERROR] Tests run: 41, Failures: 2, Errors: 0, Skipped: 1
[INFO] 
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  11.572 s
[INFO] Finished at: 2022-10-10T11:25:00+01:00
[INFO] ------------------------------------------------------------------------
\`\`\``,frontmatter:{title:"Now finally, we run Maven verify to see how we did on the migration.",srcSequence:"./demo/mvn-verify.md"},index:48,start:0,end:27,source:{filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/mvn-verify.md",raw:`# Now finally, we run Maven verify to see how we did on the migration.

## There will be two test failures that we have to fix by hand.
- These are caused by the validator migration & a response type change.
- Not a bad result for an automated migration!

\`\`\`shell {1,6-10,12,15}
$ ./mvnw verify

[INFO] 
[INFO] Results:
[INFO] 
[ERROR] Failures: 
[ERROR]   ValidatorTests.shouldNotValidateWhenFirstNameEmpty:42 
expected: "may not be empty"
but was : "must not be empty"
[ERROR]   VetControllerTests.testShowResourcesVetList:67 Content type expected:<application/json;charset=UTF-8> but was:<application/json>
[INFO] 
[ERROR] Tests run: 41, Failures: 2, Errors: 0, Skipped: 1
[INFO] 
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  11.572 s
[INFO] Finished at: 2022-10-10T11:25:00+01:00
[INFO] ------------------------------------------------------------------------
\`\`\``,title:"Now finally, we run Maven verify to see how we did on the migration.",level:1,content:`# Now finally, we run Maven verify to see how we did on the migration.

## There will be two test failures that we have to fix by hand.
- These are caused by the validator migration & a response type change.
- Not a bad result for an automated migration!

\`\`\`shell {1,6-10,12,15}
$ ./mvnw verify

[INFO] 
[INFO] Results:
[INFO] 
[ERROR] Failures: 
[ERROR]   ValidatorTests.shouldNotValidateWhenFirstNameEmpty:42 
expected: "may not be empty"
but was : "must not be empty"
[ERROR]   VetControllerTests.testShowResourcesVetList:67 Content type expected:<application/json;charset=UTF-8> but was:<application/json>
[INFO] 
[ERROR] Tests run: 41, Failures: 2, Errors: 0, Skipped: 1
[INFO] 
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  11.572 s
[INFO] Finished at: 2022-10-10T11:25:00+01:00
[INFO] ------------------------------------------------------------------------
\`\`\``,frontmatter:{title:"Now finally, we run Maven verify to see how we did on the migration."},index:0,start:0,end:27},inline:{raw:`---
src: ./demo/mvn-verify.md
---
`,content:"",frontmatter:{},index:48,start:850,end:854},filepath:"/home/runner/work/major-migrations-made-easy-slides/major-migrations-made-easy-slides/demo/mvn-verify.md",notesHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",component:mg,meta:{layout:"end"}}],qe=Pb,$b=[{name:"play",path:"/",component:KA,children:[...qe]},{name:"print",path:"/print",component:XA},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>co(()=>import("./Presenter.9677fc60.js"),["assets/Presenter.9677fc60.js","assets/Presenter.e29290d2.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.e203afbf.js"]),beforeEnter:n=>{if(!Rt.remote||Rt.remote===n.query.password)return!0;if(Rt.remote&&n.query.password===void 0){const t=prompt("Enter password");if(Rt.remote===t)return!0}return n.params.no?{path:`/${n.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],wn=Mf({history:ef("/major-migrations-made-easy-slides/"),routes:$b});function Jb(n,t,{mode:o="replace"}={}){return _({get(){const r=wn.currentRoute.value.query[n];return r==null?t!=null?t:null:Array.isArray(r)?r.filter(Boolean):r},set(r){en(()=>{wn[N(o)]({query:{...wn.currentRoute.value.query,[n]:r}})})}})}const Ng=q(0);en(()=>{wn.afterEach(async()=>{await en(),Ng.value+=1})});const et=_(()=>wn.currentRoute.value),ni=_(()=>et.value.query.print!==void 0),Vb=_(()=>et.value.query.print==="clicks"),qn=_(()=>et.value.query.embedded!==void 0),Pn=_(()=>et.value.path.startsWith("/presenter")),Fo=_(()=>ni.value&&!Vb.value),la=_(()=>et.value.query.password),Lb=_(()=>!Pn.value&&(!be.remote||la.value===be.remote)),ep=Jb("clicks","0"),jg=_(()=>qe.length-1),qb=_(()=>et.value.path),He=_(()=>parseInt(qb.value.split(/\//g).slice(-1)[0])||1);_(()=>or(He.value));const fn=_(()=>qe.find(n=>n.path===`${He.value}`));_(()=>{var n,t,o;return(o=(t=(n=fn.value)==null?void 0:n.meta)==null?void 0:t.slide)==null?void 0:o.id});_(()=>{var n,t;return(t=(n=fn.value)==null?void 0:n.meta)==null?void 0:t.layout});const jr=_(()=>qe.find(n=>n.path===`${Math.min(qe.length,He.value+1)}`)),Hb=_(()=>{var n,t;return Ng.value,((t=(n=fn.value)==null?void 0:n.meta)==null?void 0:t.__clicksElements)||[]}),Fn=_({get(){if(Fo.value)return 99999;let n=+(ep.value||0);return isNaN(n)&&(n=0),n},set(n){ep.value=n.toString()}}),Ss=_(()=>{var n,t,o;return+((o=(t=(n=fn.value)==null?void 0:n.meta)==null?void 0:t.clicks)!=null?o:Hb.value.length)}),Kb=_(()=>He.value<qe.length-1||Fn.value<Ss.value),zb=_(()=>He.value>1||Fn.value>0),Qb=_(()=>qe.filter(n=>{var t,o;return(o=(t=n.meta)==null?void 0:t.slide)==null?void 0:o.title}).reduce((n,t)=>(ti(n,t),n),[])),Yb=_(()=>oi(Qb.value,fn.value));_(()=>si(Yb.value));function ct(){Ss.value<=Fn.value?zo():Fn.value+=1}async function gt(){Fn.value<=0?await Qo():Fn.value-=1}function or(n){return Pn.value?`/presenter/${n}`:`/${n}`}function zo(){const n=Math.min(qe.length,He.value+1);return io(n)}async function Qo(n=!0){const t=Math.max(1,He.value-1);await io(t),n&&Ss.value&&wn.replace({query:{...et.value.query,clicks:Ss.value}})}function io(n,t){return wn.push({path:or(n),query:{...et.value.query,clicks:t}})}function Zb(n){const t=q(0),{direction:o,distanceX:r,distanceY:a}=B8(n,{onSwipeStart(i){i.pointerType==="touch"&&(qo.value||(t.value=Qr()))},onSwipeEnd(i){if(i.pointerType!=="touch"||!t.value||qo.value)return;const l=Math.abs(r.value),p=Math.abs(a.value);l/window.innerWidth>.3||l>100?o.value===zn.LEFT?ct():gt():(p/window.innerHeight>.4||p>200)&&(o.value===zn.DOWN?Qo():zo())}})}async function pa(){const{saveAs:n}=await co(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);n(Wc(be.download)?be.download:be.exportFilename?`${be.exportFilename}.pdf`:"/major-migrations-made-easy-slides/slidev-exported.pdf",`${be.title}.pdf`)}async function Xb(n){var t,o;if(n==null){const r=(o=(t=fn.value)==null?void 0:t.meta)==null?void 0:o.slide;if(!(r!=null&&r.filepath))return!1;n=`${r.filepath}:${r.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(n)}`),!0}function ti(n,t,o=1){var a,i,l,p,c;const r=(i=(a=t.meta)==null?void 0:a.slide)==null?void 0:i.level;r&&r>o&&n.length>0?ti(n[n.length-1].children,t,o+1):n.push({children:[],level:o,path:t.path,hideInToc:Boolean((l=t.meta)==null?void 0:l.hideInToc),title:(c=(p=t.meta)==null?void 0:p.slide)==null?void 0:c.title})}function oi(n,t,o=!1,r){return n.map(a=>{const i={...a,active:a.path===(t==null?void 0:t.path),hasActiveParent:o};return i.children.length>0&&(i.children=oi(i.children,t,i.active||i.hasActiveParent,i)),r&&(i.active||i.activeParent)&&(r.activeParent=!0),i})}function si(n,t=1){return n.filter(o=>!o.hideInToc).map(o=>({...o,children:si(o.children,t+1)}))}function e2(){const n=be.titleTemplate.replace("%s",be.title||"Slidev");Ly({title:n}),nm(`${n} - shared`),rm(`${n} - drawings`);function t(){Pn.value&&(nl("page",+He.value),nl("clicks",Fn.value))}wn.afterEach(t),ye(Fn,t),tm(o=>{(+o.page!=+He.value||Fn.value!==o.clicks)&&wn.replace({path:or(o.page),query:{...wn.currentRoute.value.query,clicks:o.clicks||0}})})}const n2=fe({__name:"App",setup(n){return F(O),e2(),(t,o)=>{const r=$o("RouterView"),a=$o("StarportCarrier");return j(),$(_e,null,[U(r),U(a)],64)}}});function br(n){return n!==null&&typeof n=="object"}function ca(n,t,o=".",r){if(!br(t))return ca(n,{},o,r);const a=Object.assign({},t);for(const i in n){if(i==="__proto__"||i==="constructor")continue;const l=n[i];l!=null&&(r&&r(a,i,l,o)||(Array.isArray(l)&&Array.isArray(a[i])?a[i]=l.concat(a[i]):br(l)&&br(a[i])?a[i]=ca(l,a[i],(o?`${o}.`:"")+i.toString(),r):a[i]=l))}return a}function t2(n){return(...t)=>t.reduce((o,r)=>ca(o,r,"",n),{})}const o2=t2(),bg=1/60*1e3,s2=typeof performance<"u"?()=>performance.now():()=>Date.now(),Ig=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(s2()),bg);function r2(n){let t=[],o=[],r=0,a=!1,i=!1;const l=new WeakSet,p={schedule:(c,g=!1,u=!1)=>{const d=u&&a,y=d?t:o;return g&&l.add(c),y.indexOf(c)===-1&&(y.push(c),d&&a&&(r=t.length)),c},cancel:c=>{const g=o.indexOf(c);g!==-1&&o.splice(g,1),l.delete(c)},process:c=>{if(a){i=!0;return}if(a=!0,[t,o]=[o,t],o.length=0,r=t.length,r)for(let g=0;g<r;g++){const u=t[g];u(c),l.has(u)&&(p.schedule(u),n())}a=!1,i&&(i=!1,p.process(c))}};return p}const a2=40;let ga=!0,Yo=!1,ua=!1;const no={delta:0,timestamp:0},os=["read","update","preRender","render","postRender"],sr=os.reduce((n,t)=>(n[t]=r2(()=>Yo=!0),n),{}),da=os.reduce((n,t)=>{const o=sr[t];return n[t]=(r,a=!1,i=!1)=>(Yo||p2(),o.schedule(r,a,i)),n},{}),i2=os.reduce((n,t)=>(n[t]=sr[t].cancel,n),{});os.reduce((n,t)=>(n[t]=()=>sr[t].process(no),n),{});const l2=n=>sr[n].process(no),Bg=n=>{Yo=!1,no.delta=ga?bg:Math.max(Math.min(n-no.timestamp,a2),1),no.timestamp=n,ua=!0,os.forEach(l2),ua=!1,Yo&&(ga=!1,Ig(Bg))},p2=()=>{Yo=!0,ga=!0,ua||Ig(Bg)},Dg=()=>no;function _g(n,t){var o={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(o[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(o[r[a]]=n[r[a]]);return o}var c2=function(){},np=function(){};const ya=(n,t,o)=>Math.min(Math.max(o,n),t),Ir=.001,g2=.01,tp=10,u2=.05,d2=1;function y2({duration:n=800,bounce:t=.25,velocity:o=0,mass:r=1}){let a,i;c2(n<=tp*1e3);let l=1-t;l=ya(u2,d2,l),n=ya(g2,tp,n/1e3),l<1?(a=g=>{const u=g*l,d=u*n,y=u-o,m=ma(g,l),f=Math.exp(-d);return Ir-y/m*f},i=g=>{const d=g*l*n,y=d*o+o,m=Math.pow(l,2)*Math.pow(g,2)*n,f=Math.exp(-d),w=ma(Math.pow(g,2),l);return(-a(g)+Ir>0?-1:1)*((y-m)*f)/w}):(a=g=>{const u=Math.exp(-g*n),d=(g-o)*n+1;return-Ir+u*d},i=g=>{const u=Math.exp(-g*n),d=(o-g)*(n*n);return u*d});const p=5/n,c=f2(a,i,p);if(n=n*1e3,isNaN(c))return{stiffness:100,damping:10,duration:n};{const g=Math.pow(c,2)*r;return{stiffness:g,damping:l*2*Math.sqrt(r*g),duration:n}}}const m2=12;function f2(n,t,o){let r=o;for(let a=1;a<m2;a++)r=r-n(r)/t(r);return r}function ma(n,t){return n*Math.sqrt(1-t*t)}const h2=["duration","bounce"],v2=["stiffness","damping","mass"];function op(n,t){return t.some(o=>n[o]!==void 0)}function A2(n){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!op(n,v2)&&op(n,h2)){const o=y2(n);t=Object.assign(Object.assign(Object.assign({},t),o),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function ri(n){var{from:t=0,to:o=1,restSpeed:r=2,restDelta:a}=n,i=_g(n,["from","to","restSpeed","restDelta"]);const l={done:!1,value:t};let{stiffness:p,damping:c,mass:g,velocity:u,duration:d,isResolvedFromDuration:y}=A2(i),m=sp,f=sp;function w(){const A=u?-(u/1e3):0,D=o-t,b=c/(2*Math.sqrt(p*g)),I=Math.sqrt(p/g)/1e3;if(a===void 0&&(a=Math.min(Math.abs(o-t)/100,.4)),b<1){const R=ma(I,b);m=G=>{const T=Math.exp(-b*I*G);return o-T*((A+b*I*D)/R*Math.sin(R*G)+D*Math.cos(R*G))},f=G=>{const T=Math.exp(-b*I*G);return b*I*T*(Math.sin(R*G)*(A+b*I*D)/R+D*Math.cos(R*G))-T*(Math.cos(R*G)*(A+b*I*D)-R*D*Math.sin(R*G))}}else if(b===1)m=R=>o-Math.exp(-I*R)*(D+(A+I*D)*R);else{const R=I*Math.sqrt(b*b-1);m=G=>{const T=Math.exp(-b*I*G),k=Math.min(R*G,300);return o-T*((A+b*I*D)*Math.sinh(k)+R*D*Math.cosh(k))/R}}}return w(),{next:A=>{const D=m(A);if(y)l.done=A>=d;else{const b=f(A)*1e3,I=Math.abs(b)<=r,R=Math.abs(o-D)<=a;l.done=I&&R}return l.value=l.done?o:D,l},flipTarget:()=>{u=-u,[t,o]=[o,t],w()}}}ri.needsInterpolation=(n,t)=>typeof n=="string"||typeof t=="string";const sp=n=>0,Rg=(n,t,o)=>{const r=t-n;return r===0?1:(o-n)/r},ai=(n,t,o)=>-o*n+o*t+n,Eg=(n,t)=>o=>Math.max(Math.min(o,t),n),Wo=n=>n%1?Number(n.toFixed(5)):n,Zo=/(-)?([\d]*\.?[\d])+/g,fa=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,w2=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ss(n){return typeof n=="string"}const rs={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},So=Object.assign(Object.assign({},rs),{transform:Eg(0,1)}),ms=Object.assign(Object.assign({},rs),{default:1}),ii=n=>({test:t=>ss(t)&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),At=ii("deg"),Go=ii("%"),pe=ii("px"),rp=Object.assign(Object.assign({},Go),{parse:n=>Go.parse(n)/100,transform:n=>Go.transform(n*100)}),li=(n,t)=>o=>Boolean(ss(o)&&w2.test(o)&&o.startsWith(n)||t&&Object.prototype.hasOwnProperty.call(o,t)),Cg=(n,t,o)=>r=>{if(!ss(r))return r;const[a,i,l,p]=r.match(Zo);return{[n]:parseFloat(a),[t]:parseFloat(i),[o]:parseFloat(l),alpha:p!==void 0?parseFloat(p):1}},Ct={test:li("hsl","hue"),parse:Cg("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:o,alpha:r=1})=>"hsla("+Math.round(n)+", "+Go.transform(Wo(t))+", "+Go.transform(Wo(o))+", "+Wo(So.transform(r))+")"},N2=Eg(0,255),Br=Object.assign(Object.assign({},rs),{transform:n=>Math.round(N2(n))}),rt={test:li("rgb","red"),parse:Cg("red","green","blue"),transform:({red:n,green:t,blue:o,alpha:r=1})=>"rgba("+Br.transform(n)+", "+Br.transform(t)+", "+Br.transform(o)+", "+Wo(So.transform(r))+")"};function j2(n){let t="",o="",r="",a="";return n.length>5?(t=n.substr(1,2),o=n.substr(3,2),r=n.substr(5,2),a=n.substr(7,2)):(t=n.substr(1,1),o=n.substr(2,1),r=n.substr(3,1),a=n.substr(4,1),t+=t,o+=o,r+=r,a+=a),{red:parseInt(t,16),green:parseInt(o,16),blue:parseInt(r,16),alpha:a?parseInt(a,16)/255:1}}const ha={test:li("#"),parse:j2,transform:rt.transform},cn={test:n=>rt.test(n)||ha.test(n)||Ct.test(n),parse:n=>rt.test(n)?rt.parse(n):Ct.test(n)?Ct.parse(n):ha.parse(n),transform:n=>ss(n)?n:n.hasOwnProperty("red")?rt.transform(n):Ct.transform(n)},xg="${c}",kg="${n}";function b2(n){var t,o,r,a;return isNaN(n)&&ss(n)&&((o=(t=n.match(Zo))===null||t===void 0?void 0:t.length)!==null&&o!==void 0?o:0)+((a=(r=n.match(fa))===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:0)>0}function Fg(n){typeof n=="number"&&(n=`${n}`);const t=[];let o=0;const r=n.match(fa);r&&(o=r.length,n=n.replace(fa,xg),t.push(...r.map(cn.parse)));const a=n.match(Zo);return a&&(n=n.replace(Zo,kg),t.push(...a.map(rs.parse))),{values:t,numColors:o,tokenised:n}}function Wg(n){return Fg(n).values}function Sg(n){const{values:t,numColors:o,tokenised:r}=Fg(n),a=t.length;return i=>{let l=r;for(let p=0;p<a;p++)l=l.replace(p<o?xg:kg,p<o?cn.transform(i[p]):Wo(i[p]));return l}}const I2=n=>typeof n=="number"?0:n;function B2(n){const t=Wg(n);return Sg(n)(t.map(I2))}const as={test:b2,parse:Wg,createTransformer:Sg,getAnimatableNone:B2},D2=new Set(["brightness","contrast","saturate","opacity"]);function _2(n){let[t,o]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[r]=o.match(Zo)||[];if(!r)return n;const a=o.replace(r,"");let i=D2.has(t)?1:0;return r!==o&&(i*=100),t+"("+i+a+")"}const R2=/([a-z-]*)\(.*?\)/g,va=Object.assign(Object.assign({},as),{getAnimatableNone:n=>{const t=n.match(R2);return t?t.map(_2).join(" "):n}});function Dr(n,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(t-n)*6*o:o<1/2?t:o<2/3?n+(t-n)*(2/3-o)*6:n}function ap({hue:n,saturation:t,lightness:o,alpha:r}){n/=360,t/=100,o/=100;let a=0,i=0,l=0;if(!t)a=i=l=o;else{const p=o<.5?o*(1+t):o+t-o*t,c=2*o-p;a=Dr(c,p,n+1/3),i=Dr(c,p,n),l=Dr(c,p,n-1/3)}return{red:Math.round(a*255),green:Math.round(i*255),blue:Math.round(l*255),alpha:r}}const E2=(n,t,o)=>{const r=n*n,a=t*t;return Math.sqrt(Math.max(0,o*(a-r)+r))},C2=[ha,rt,Ct],ip=n=>C2.find(t=>t.test(n)),Gg=(n,t)=>{let o=ip(n),r=ip(t),a=o.parse(n),i=r.parse(t);o===Ct&&(a=ap(a),o=rt),r===Ct&&(i=ap(i),r=rt);const l=Object.assign({},a);return p=>{for(const c in l)c!=="alpha"&&(l[c]=E2(a[c],i[c],p));return l.alpha=ai(a.alpha,i.alpha,p),o.transform(l)}},x2=n=>typeof n=="number",k2=(n,t)=>o=>t(n(o)),Tg=(...n)=>n.reduce(k2);function Ug(n,t){return x2(n)?o=>ai(n,t,o):cn.test(n)?Gg(n,t):Og(n,t)}const Mg=(n,t)=>{const o=[...n],r=o.length,a=n.map((i,l)=>Ug(i,t[l]));return i=>{for(let l=0;l<r;l++)o[l]=a[l](i);return o}},F2=(n,t)=>{const o=Object.assign(Object.assign({},n),t),r={};for(const a in o)n[a]!==void 0&&t[a]!==void 0&&(r[a]=Ug(n[a],t[a]));return a=>{for(const i in r)o[i]=r[i](a);return o}};function lp(n){const t=as.parse(n),o=t.length;let r=0,a=0,i=0;for(let l=0;l<o;l++)r||typeof t[l]=="number"?r++:t[l].hue!==void 0?i++:a++;return{parsed:t,numNumbers:r,numRGB:a,numHSL:i}}const Og=(n,t)=>{const o=as.createTransformer(t),r=lp(n),a=lp(t);return r.numHSL===a.numHSL&&r.numRGB===a.numRGB&&r.numNumbers>=a.numNumbers?Tg(Mg(r.parsed,a.parsed),o):l=>`${l>0?t:n}`},W2=(n,t)=>o=>ai(n,t,o);function S2(n){if(typeof n=="number")return W2;if(typeof n=="string")return cn.test(n)?Gg:Og;if(Array.isArray(n))return Mg;if(typeof n=="object")return F2}function G2(n,t,o){const r=[],a=o||S2(n[0]),i=n.length-1;for(let l=0;l<i;l++){let p=a(n[l],n[l+1]);if(t){const c=Array.isArray(t)?t[l]:t;p=Tg(c,p)}r.push(p)}return r}function T2([n,t],[o]){return r=>o(Rg(n,t,r))}function U2(n,t){const o=n.length,r=o-1;return a=>{let i=0,l=!1;if(a<=n[0]?l=!0:a>=n[r]&&(i=r-1,l=!0),!l){let c=1;for(;c<o&&!(n[c]>a||c===r);c++);i=c-1}const p=Rg(n[i],n[i+1],a);return t[i](p)}}function Pg(n,t,{clamp:o=!0,ease:r,mixer:a}={}){const i=n.length;np(i===t.length),np(!r||!Array.isArray(r)||r.length===i-1),n[0]>n[i-1]&&(n=[].concat(n),t=[].concat(t),n.reverse(),t.reverse());const l=G2(t,r,a),p=i===2?T2(n,l):U2(n,l);return o?c=>p(ya(n[0],n[i-1],c)):p}const rr=n=>t=>1-n(1-t),pi=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,M2=n=>t=>Math.pow(t,n),$g=n=>t=>t*t*((n+1)*t-n),O2=n=>{const t=$g(n);return o=>(o*=2)<1?.5*t(o):.5*(2-Math.pow(2,-10*(o-1)))},Jg=1.525,P2=4/11,$2=8/11,J2=9/10,Vg=n=>n,ci=M2(2),V2=rr(ci),Lg=pi(ci),qg=n=>1-Math.sin(Math.acos(n)),Hg=rr(qg),L2=pi(Hg),gi=$g(Jg),q2=rr(gi),H2=pi(gi),K2=O2(Jg),z2=4356/361,Q2=35442/1805,Y2=16061/1805,Gs=n=>{if(n===1||n===0)return n;const t=n*n;return n<P2?7.5625*t:n<$2?9.075*t-9.9*n+3.4:n<J2?z2*t-Q2*n+Y2:10.8*n*n-20.52*n+10.72},Z2=rr(Gs),X2=n=>n<.5?.5*(1-Gs(1-n*2)):.5*Gs(n*2-1)+.5;function eI(n,t){return n.map(()=>t||Lg).splice(0,n.length-1)}function nI(n){const t=n.length;return n.map((o,r)=>r!==0?r/(t-1):0)}function tI(n,t){return n.map(o=>o*t)}function js({from:n=0,to:t=1,ease:o,offset:r,duration:a=300}){const i={done:!1,value:n},l=Array.isArray(t)?t:[n,t],p=tI(r&&r.length===l.length?r:nI(l),a);function c(){return Pg(p,l,{ease:Array.isArray(o)?o:eI(l,o)})}let g=c();return{next:u=>(i.value=g(u),i.done=u>=a,i),flipTarget:()=>{l.reverse(),g=c()}}}function oI({velocity:n=0,from:t=0,power:o=.8,timeConstant:r=350,restDelta:a=.5,modifyTarget:i}){const l={done:!1,value:t};let p=o*n;const c=t+p,g=i===void 0?c:i(c);return g!==c&&(p=g-t),{next:u=>{const d=-p*Math.exp(-u/r);return l.done=!(d>a||d<-a),l.value=l.done?g:g+d,l},flipTarget:()=>{}}}const pp={keyframes:js,spring:ri,decay:oI};function sI(n){if(Array.isArray(n.to))return js;if(pp[n.type])return pp[n.type];const t=new Set(Object.keys(n));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?js:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?ri:js}function Kg(n,t,o=0){return n-t-o}function rI(n,t,o=0,r=!0){return r?Kg(t+-n,t,o):t-(n-t)+o}function aI(n,t,o,r){return r?n>=t+o:n<=-o}const iI=n=>{const t=({delta:o})=>n(o);return{start:()=>da.update(t,!0),stop:()=>i2.update(t)}};function zg(n){var t,o,{from:r,autoplay:a=!0,driver:i=iI,elapsed:l=0,repeat:p=0,repeatType:c="loop",repeatDelay:g=0,onPlay:u,onStop:d,onComplete:y,onRepeat:m,onUpdate:f}=n,w=_g(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:A}=w,D,b=0,I=w.duration,R,G=!1,T=!0,k;const z=sI(w);!((o=(t=z).needsInterpolation)===null||o===void 0)&&o.call(t,r,A)&&(k=Pg([0,100],[r,A],{clamp:!1}),r=0,A=100);const se=z(Object.assign(Object.assign({},w),{from:r,to:A}));function he(){b++,c==="reverse"?(T=b%2===0,l=rI(l,I,g,T)):(l=Kg(l,I,g),c==="mirror"&&se.flipTarget()),G=!1,m&&m()}function Ae(){D.stop(),y&&y()}function Je(Me){if(T||(Me=-Me),l+=Me,!G){const ke=se.next(Math.max(0,l));R=ke.value,k&&(R=k(R)),G=T?ke.done:l<=0}f==null||f(R),G&&(b===0&&(I!=null||(I=l)),b<p?aI(l,I,g,T)&&he():Ae())}function Ve(){u==null||u(),D=i(Je),D.start()}return a&&Ve(),{stop:()=>{d==null||d(),D.stop()}}}function Qg(n,t){return t?n*(1e3/t):0}function lI({from:n=0,velocity:t=0,min:o,max:r,power:a=.8,timeConstant:i=750,bounceStiffness:l=500,bounceDamping:p=10,restDelta:c=1,modifyTarget:g,driver:u,onUpdate:d,onComplete:y,onStop:m}){let f;function w(I){return o!==void 0&&I<o||r!==void 0&&I>r}function A(I){return o===void 0?r:r===void 0||Math.abs(o-I)<Math.abs(r-I)?o:r}function D(I){f==null||f.stop(),f=zg(Object.assign(Object.assign({},I),{driver:u,onUpdate:R=>{var G;d==null||d(R),(G=I.onUpdate)===null||G===void 0||G.call(I,R)},onComplete:y,onStop:m}))}function b(I){D(Object.assign({type:"spring",stiffness:l,damping:p,restDelta:c},I))}if(w(n))b({from:n,velocity:t,to:A(n)});else{let I=a*t+n;typeof g<"u"&&(I=g(I));const R=A(I),G=R===o?-1:1;let T,k;const z=se=>{T=k,k=se,t=Qg(se-T,Dg().delta),(G===1&&se>R||G===-1&&se<R)&&b({from:se,to:R,velocity:t})};D({type:"decay",from:n,velocity:t,timeConstant:i,power:a,restDelta:c,modifyTarget:g,onUpdate:w(I)?z:void 0})}return{stop:()=>f==null?void 0:f.stop()}}const Yg=(n,t)=>1-3*t+3*n,Zg=(n,t)=>3*t-6*n,Xg=n=>3*n,Ts=(n,t,o)=>((Yg(t,o)*n+Zg(t,o))*n+Xg(t))*n,eu=(n,t,o)=>3*Yg(t,o)*n*n+2*Zg(t,o)*n+Xg(t),pI=1e-7,cI=10;function gI(n,t,o,r,a){let i,l,p=0;do l=t+(o-t)/2,i=Ts(l,r,a)-n,i>0?o=l:t=l;while(Math.abs(i)>pI&&++p<cI);return l}const uI=8,dI=.001;function yI(n,t,o,r){for(let a=0;a<uI;++a){const i=eu(t,o,r);if(i===0)return t;t-=(Ts(t,o,r)-n)/i}return t}const bs=11,fs=1/(bs-1);function mI(n,t,o,r){if(n===t&&o===r)return Vg;const a=new Float32Array(bs);for(let l=0;l<bs;++l)a[l]=Ts(l*fs,n,o);function i(l){let p=0,c=1;const g=bs-1;for(;c!==g&&a[c]<=l;++c)p+=fs;--c;const u=(l-a[c])/(a[c+1]-a[c]),d=p+u*fs,y=eu(d,n,o);return y>=dI?yI(l,d,n,o):y===0?d:gI(l,p,p+fs,n,o)}return l=>l===0||l===1?l:Ts(i(l),t,r)}const _r={};class fI{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,o,r){if(!!this.subscriptions.size)for(const a of this.subscriptions)a(t,o,r)}clear(){this.subscriptions.clear()}}const cp=n=>!isNaN(parseFloat(n));class hI{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new fI,this.canTrackVelocity=!1,this.updateAndNotify=o=>{this.prev=this.current,this.current=o;const{delta:r,timestamp:a}=Dg();this.lastUpdated!==a&&(this.timeDelta=r,this.lastUpdated=a),da.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>da.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{this.canTrackVelocity||(this.canTrackVelocity=cp(this.current)),o!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=cp(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Qg(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(o=>{const{stop:r}=t(o);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function vI(n){return new hI(n)}const{isArray:AI}=Array;function wI(){const n=q({}),t=r=>{const a=i=>{!n.value[i]||(n.value[i].stop(),n.value[i].destroy(),delete n.value[i])};r?AI(r)?r.forEach(a):a(r):Object.keys(n.value).forEach(a)},o=(r,a,i)=>{if(n.value[r])return n.value[r];const l=vI(a);return l.onChange(p=>i[r]=p),n.value[r]=l,l};return Gc(t),{motionValues:n,get:o,stop:t}}const NI=n=>Array.isArray(n),wt=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Rr=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),jI=n=>({type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}),Er=()=>({type:"keyframes",ease:"linear",duration:300}),bI=n=>({type:"keyframes",duration:800,values:n}),gp={default:jI,x:wt,y:wt,z:wt,rotate:wt,rotateX:wt,rotateY:wt,rotateZ:wt,scaleX:Rr,scaleY:Rr,scale:Rr,backgroundColor:Er,color:Er,opacity:Er},nu=(n,t)=>{let o;return NI(t)?o=bI:o=gp[n]||gp.default,{to:t,...o(t)}},up={...rs,transform:Math.round},tu={color:cn,backgroundColor:cn,outlineColor:cn,fill:cn,stroke:cn,borderColor:cn,borderTopColor:cn,borderRightColor:cn,borderBottomColor:cn,borderLeftColor:cn,borderWidth:pe,borderTopWidth:pe,borderRightWidth:pe,borderBottomWidth:pe,borderLeftWidth:pe,borderRadius:pe,radius:pe,borderTopLeftRadius:pe,borderTopRightRadius:pe,borderBottomRightRadius:pe,borderBottomLeftRadius:pe,width:pe,maxWidth:pe,height:pe,maxHeight:pe,size:pe,top:pe,right:pe,bottom:pe,left:pe,padding:pe,paddingTop:pe,paddingRight:pe,paddingBottom:pe,paddingLeft:pe,margin:pe,marginTop:pe,marginRight:pe,marginBottom:pe,marginLeft:pe,rotate:At,rotateX:At,rotateY:At,rotateZ:At,scale:ms,scaleX:ms,scaleY:ms,scaleZ:ms,skew:At,skewX:At,skewY:At,distance:pe,translateX:pe,translateY:pe,translateZ:pe,x:pe,y:pe,z:pe,perspective:pe,transformPerspective:pe,opacity:So,originX:rp,originY:rp,originZ:pe,zIndex:up,filter:va,WebkitFilter:va,fillOpacity:So,strokeOpacity:So,numOctaves:up},ui=n=>tu[n],ou=(n,t)=>t&&typeof n=="number"&&t.transform?t.transform(n):n;function II(n,t){let o=ui(n);return o!==va&&(o=as),o.getAnimatableNone?o.getAnimatableNone(t):void 0}const BI={linear:Vg,easeIn:ci,easeInOut:Lg,easeOut:V2,circIn:qg,circInOut:L2,circOut:Hg,backIn:gi,backInOut:H2,backOut:q2,anticipate:K2,bounceIn:Z2,bounceInOut:X2,bounceOut:Gs},dp=n=>{if(Array.isArray(n)){const[t,o,r,a]=n;return mI(t,o,r,a)}else if(typeof n=="string")return BI[n];return n},DI=n=>Array.isArray(n)&&typeof n[0]!="number",yp=(n,t)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&as.test(t)&&!t.startsWith("url("));function _I(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function RI({ease:n,times:t,delay:o,...r}){const a={...r};return t&&(a.offset=t),n&&(a.ease=DI(n)?n.map(dp):dp(n)),o&&(a.elapsed=-o),a}function EI(n,t,o){return Array.isArray(t.to)&&(n.duration||(n.duration=800)),_I(t),CI(n)||(n={...n,...nu(o,t.to)}),{...t,...RI(n)}}function CI({delay:n,repeat:t,repeatType:o,repeatDelay:r,from:a,...i}){return!!Object.keys(i).length}function xI(n,t){return n[t]||n.default||n}function kI(n,t,o,r,a){const i=xI(r,n);let l=i.from===null||i.from===void 0?t.get():i.from;const p=yp(n,o);l==="none"&&p&&typeof o=="string"&&(l=II(n,o));const c=yp(n,l);function g(d){const y={from:l,to:o,velocity:r.velocity?r.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return i.type==="inertia"||i.type==="decay"?lI({...y,...i}):zg({...EI(i,y,n),onUpdate:m=>{y.onUpdate(m),i.onUpdate&&i.onUpdate(m)},onComplete:()=>{r.onComplete&&r.onComplete(),a&&a(),d&&d()}})}function u(d){return t.set(o),r.onComplete&&r.onComplete(),a&&a(),d&&d(),{stop:()=>{}}}return!c||!p||i.type===!1?u:g}function FI(){const{motionValues:n,stop:t,get:o}=wI();return{motionValues:n,stop:t,push:(a,i,l,p={},c)=>{const g=l[a],u=o(a,g,l);if(p&&p.immediate){u.set(i);return}const d=kI(a,u,i,p,c);u.start(d)}}}function WI(n,t={},{motionValues:o,push:r,stop:a}=FI()){const i=N(t),l=q(!1);ye(o,d=>{l.value=Object.values(d).filter(y=>y.isAnimating()).length>0},{immediate:!0,deep:!0});const p=d=>{if(!i||!i[d])throw new Error(`The variant ${d} does not exist.`);return i[d]},c=d=>(typeof d=="string"&&(d=p(d)),Promise.all(Object.entries(d).map(([y,m])=>{if(y!=="transition")return new Promise(f=>{r(y,m,n,d.transition||nu(y,d[y]),f)})}).filter(Boolean)));return{isAnimating:l,apply:c,set:d=>{const y=zr(d)?d:p(d);Object.entries(y).forEach(([m,f])=>{m!=="transition"&&r(m,f,n,{immediate:!0})})},leave:async d=>{let y;if(i&&(i.leave&&(y=i.leave),!i.leave&&i.initial&&(y=i.initial)),!y){d();return}await c(y),d()},stop:a}}const di=typeof window<"u",SI=()=>di&&window.onpointerdown===null,GI=()=>di&&window.ontouchstart===null,TI=()=>di&&window.onmousedown===null;function UI({target:n,state:t,variants:o,apply:r}){const a=N(o),i=q(!1),l=q(!1),p=q(!1),c=_(()=>{let u=[];return a&&(a.hovered&&(u=[...u,...Object.keys(a.hovered)]),a.tapped&&(u=[...u,...Object.keys(a.tapped)]),a.focused&&(u=[...u,...Object.keys(a.focused)])),u}),g=_(()=>{const u={};Object.assign(u,t.value),i.value&&a.hovered&&Object.assign(u,a.hovered),l.value&&a.tapped&&Object.assign(u,a.tapped),p.value&&a.focused&&Object.assign(u,a.focused);for(const d in u)c.value.includes(d)||delete u[d];return u});a.hovered&&(ge(n,"mouseenter",()=>i.value=!0),ge(n,"mouseleave",()=>{i.value=!1,l.value=!1}),ge(n,"mouseout",()=>{i.value=!1,l.value=!1})),a.tapped&&(TI()&&(ge(n,"mousedown",()=>l.value=!0),ge(n,"mouseup",()=>l.value=!1)),SI()&&(ge(n,"pointerdown",()=>l.value=!0),ge(n,"pointerup",()=>l.value=!1)),GI()&&(ge(n,"touchstart",()=>l.value=!0),ge(n,"touchend",()=>l.value=!1))),a.focused&&(ge(n,"focus",()=>p.value=!0),ge(n,"blur",()=>p.value=!1)),ye(g,r)}function MI({set:n,target:t,apply:o,variants:r,variant:a}){const i=N(r);ye(()=>t,()=>{!i||(i.initial&&n("initial"),i.enter&&(a.value="enter"))},{immediate:!0,flush:"pre"})}function OI({state:n,apply:t}){ye(n,o=>{o&&t(o)},{immediate:!0})}function PI({target:n,variants:t,variant:o}){const r=N(t);r&&(r.visible||r.visibleOnce)&&j8(n,([{isIntersecting:a}])=>{r.visible?a?o.value="visible":o.value="initial":r.visibleOnce&&(a&&o.value!=="visibleOnce"?o.value="visibleOnce":o.value||(o.value="initial"))})}function $I(n,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&MI(n),t.syncVariants&&OI(n),t.visibilityHooks&&PI(n),t.eventListeners&&UI(n)}function su(n={}){const t=Se({...n}),o=q({});return ye(t,()=>{const r={};for(const[a,i]of Object.entries(t)){const l=ui(a),p=ou(i,l);r[a]=p}o.value=r},{immediate:!0,deep:!0}),{state:t,style:o}}function yi(n,t){ye(()=>Cn(n),o=>{!o||t(o)},{immediate:!0})}const JI={x:"translateX",y:"translateY",z:"translateZ"};function ru(n={},t=!0){const o=Se({...n}),r=q("");return ye(o,a=>{let i="",l=!1;t&&(a.x||a.y||a.z)&&(i+=`translate3d(${[a.x||0,a.y||0,a.z||0].map(pe.transform).join(",")}) `,l=!0);for(const[p,c]of Object.entries(a)){if(t&&(p==="x"||p==="y"||p==="z"))continue;const g=ui(p),u=ou(c,g);i+=`${JI[p]||p}(${u}) `}t&&!l&&(i+="translateZ(0px) "),r.value=i.trim()},{immediate:!0,deep:!0}),{state:o,transform:r}}const VI=["","X","Y","Z"],LI=["perspective","translate","scale","rotate","skew"],au=["transformPerspective","x","y","z"];LI.forEach(n=>{VI.forEach(t=>{const o=n+t;au.push(o)})});const qI=new Set(au);function mi(n){return qI.has(n)}const HI=new Set(["originX","originY","originZ"]);function iu(n){return HI.has(n)}function KI(n){const t={},o={};return Object.entries(n).forEach(([r,a])=>{mi(r)||iu(r)?t[r]=a:o[r]=a}),{transform:t,style:o}}function lu(n){const{transform:t,style:o}=KI(n),{transform:r}=ru(t),{style:a}=su(o);return r.value&&(a.value.transform=r.value),a.value}function zI(n,t){let o,r;const{state:a,style:i}=su();return yi(n,l=>{r=l;for(const p of Object.keys(tu))l.style[p]===null||l.style[p]===""||mi(p)||iu(p)||(a[p]=l.style[p]);o&&Object.entries(o).forEach(([p,c])=>l.style[p]=c),t&&t(a)}),ye(i,l=>{if(!r){o=l;return}for(const p in l)r.style[p]=l[p]},{immediate:!0}),{style:a}}function QI(n){const t=n.trim().split(/\) |\)/);if(t.length===1)return{};const o=r=>r.endsWith("px")||r.endsWith("deg")?parseFloat(r):isNaN(Number(r))?Number(r):r;return t.reduce((r,a)=>{if(!a)return r;const[i,l]=a.split("("),c=l.split(",").map(u=>o(u.endsWith(")")?u.replace(")",""):u.trim())),g=c.length===1?c[0]:c;return{...r,[i]:g}},{})}function YI(n,t){Object.entries(QI(t)).forEach(([o,r])=>{const a=["x","y","z"];if(o==="translate3d"){if(r===0){a.forEach(i=>n[i]=0);return}r.forEach((i,l)=>n[a[l]]=i);return}if(r=parseFloat(r),o==="translateX"){n.x=r;return}if(o==="translateY"){n.y=r;return}if(o==="translateZ"){n.z=r;return}n[o]=r})}function ZI(n,t){let o,r;const{state:a,transform:i}=ru();return yi(n,l=>{r=l,l.style.transform&&YI(a,l.style.transform),o&&(l.style.transform=o),t&&t(a)}),ye(i,l=>{if(!r){o=l;return}r.style.transform=l},{immediate:!0}),{transform:a}}function XI(n,t){const o=Se({}),r=l=>Object.entries(l).forEach(([p,c])=>o[p]=c),{style:a}=zI(n,r),{transform:i}=ZI(n,r);return ye(o,l=>{Object.entries(l).forEach(([p,c])=>{const g=mi(p)?i:a;g[p]&&g[p]===c||(g[p]=c)})},{immediate:!0,deep:!0}),yi(n,()=>t&&r(t)),{motionProperties:o,style:a,transform:i}}function eB(n={}){const t=N(n),o=q();return{state:_(()=>{if(!!o.value)return t[o.value]}),variant:o}}function pu(n,t={},o){const{motionProperties:r}=XI(n),{variant:a,state:i}=eB(t),l=WI(r,t),p={target:n,variant:a,variants:t,state:i,motionProperties:r,...l};return $I(p,o),p}const nB=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],tB=(n,t)=>{const o=n.props?n.props:n.data&&n.data.attrs?n.data.attrs:{};o&&(o.variants&&zr(o.variants)&&(t.value={...t.value,...o.variants}),nB.forEach(r=>{if(r==="delay"){if(o&&o[r]&&gm(o[r])){const a=o[r];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:a,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:a,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:a,...t.value.visibleOnce.transition}))}return}r==="visible-once"&&(r="visibleOnce"),o&&o[r]&&zr(o[r])&&(t.value[r]=o[r])}))},Cr=n=>({created:(r,a,i)=>{const l=a.value&&typeof a.value=="string"?a.value:i.key;l&&_r[l]&&_r[l].stop();const p=q(n||{});typeof a.value=="object"&&(p.value=a.value),tB(i,p);const c=pu(r,p);r.motionInstance=c,l&&(_r[l]=c)},unmounted:r=>{r.motionInstance&&r.motionInstance.stop()},getSSRProps(r,a){let{initial:i}=r.value||a&&(a==null?void 0:a.props)||{};i=N(i);const l=o2((n==null?void 0:n.initial)||{},i||{});return!l||Object.keys(l).length===0?void 0:{style:lu(l)}}}),oB={initial:{opacity:0},enter:{opacity:1}},sB={initial:{opacity:0},visible:{opacity:1}},rB={initial:{opacity:0},visibleOnce:{opacity:1}},aB={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},iB={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},lB={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},pB={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},cB={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},gB={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},uB={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},dB={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},yB={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},mB={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},fB={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},hB={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},vB={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},AB={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},wB={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},NB={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},jB={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},bB={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},IB={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},BB={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},DB={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},_B={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},RB={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},EB={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},CB={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},xB={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},kB={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Aa={__proto__:null,fade:oB,fadeVisible:sB,fadeVisibleOnce:rB,pop:aB,popVisible:iB,popVisibleOnce:lB,rollBottom:vB,rollLeft:pB,rollRight:uB,rollTop:mB,rollVisibleBottom:AB,rollVisibleLeft:cB,rollVisibleRight:dB,rollVisibleTop:fB,rollVisibleOnceBottom:wB,rollVisibleOnceLeft:gB,rollVisibleOnceRight:yB,rollVisibleOnceTop:hB,slideBottom:CB,slideLeft:NB,slideRight:IB,slideTop:_B,slideVisibleBottom:xB,slideVisibleLeft:jB,slideVisibleRight:BB,slideVisibleTop:RB,slideVisibleOnceBottom:kB,slideVisibleOnceLeft:bB,slideVisibleOnceRight:DB,slideVisibleOnceTop:EB},FB=fe({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(n){var p;const t=ly(),o=Se({});if(!n.is&&!t.default)return()=>vn("div",{});const r=_(()=>{let c;return n.preset&&(c=Aa[n.preset]),c}),a=_(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused})),i=_(()=>{const c={...a.value,...r.value||{},...n.variants||{}};return n.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(n.delay)),c}),l=_(()=>{if(!n.is)return;let c=n.is;return typeof l.value=="string"&&!wu(c)&&(c=$o(c)),c});if(((p=process==null?void 0:process.env)==null?void 0:p.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const c=g=>{var u;(u=g.variants)!=null&&u.initial&&g.set("initial"),setTimeout(()=>{var d,y,m;(d=g.variants)!=null&&d.enter&&g.apply("enter"),(y=g.variants)!=null&&y.visible&&g.apply("visible"),(m=g.variants)!=null&&m.visibleOnce&&g.apply("visibleOnce")},10)};Ua(()=>Object.entries(o).forEach(([g,u])=>c(u)))}return{slots:t,component:l,motionConfig:i,instances:o}},render({slots:n,motionConfig:t,instances:o,component:r}){var p;const a=lu(t.initial||{}),i=(c,g)=>(c.props||(c.props={}),c.props.style=a,c.props.onVnodeMounted=({el:u})=>{const d=pu(u,t);o[g]=d},c);if(r){const c=vn(r,void 0,n);return i(c,0),c}return(((p=n.default)==null?void 0:p.call(n))||[]).map((c,g)=>i(c,g))}});function WB(n){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",o="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(t.split("").join("|"),"g");return n.toString().replace(/[A-Z]/g,a=>`-${a}`).toLowerCase().replace(/\s+/g,"-").replace(r,a=>o.charAt(t.indexOf(a))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const SB={install(n,t){if(n.directive("motion",Cr()),n.component("Motion",FB),!t||t&&!t.excludePresets)for(const o in Aa){const r=Aa[o];n.directive(`motion-${WB(o)}`,Cr(r))}if(t&&t.directives)for(const o in t.directives){const r=t.directives[o];r.initial,n.directive(`motion-${o}`,Cr(r))}}};var mp;const To=typeof window<"u",GB=Object.prototype.toString,TB=n=>GB.call(n)==="[object Object]";To&&((mp=window==null?void 0:window.navigator)==null?void 0:mp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function UB(n){return Gp()?(Tp(n),!0):!1}function MB(n){var t;const o=N(n);return(t=o==null?void 0:o.$el)!=null?t:o}const OB=To?window:void 0,wa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Na="__vueuse_ssr_handlers__";wa[Na]=wa[Na]||{};wa[Na];function PB(n,t={}){const{immediate:o=!0,window:r=OB}=t,a=q(!1);let i=null;function l(){!a.value||!r||(n(),i=r.requestAnimationFrame(l))}function p(){!a.value&&r&&(a.value=!0,l())}function c(){a.value=!1,i!=null&&r&&(r.cancelAnimationFrame(i),i=null)}return o&&p(),UB(c),{isActive:a,pause:c,resume:p}}var fp;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(fp||(fp={}));const fi="vue-starport-injection",cu="vue-starport-options",$B={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},gu={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var JB=Object.defineProperty,Us=Object.getOwnPropertySymbols,uu=Object.prototype.hasOwnProperty,du=Object.prototype.propertyIsEnumerable,hp=(n,t,o)=>t in n?JB(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,VB=(n,t)=>{for(var o in t||(t={}))uu.call(t,o)&&hp(n,o,t[o]);if(Us)for(var o of Us(t))du.call(t,o)&&hp(n,o,t[o]);return n},vp=(n,t)=>{var o={};for(var r in n)uu.call(n,r)&&t.indexOf(r)<0&&(o[r]=n[r]);if(n!=null&&Us)for(var r of Us(n))t.indexOf(r)<0&&du.call(n,r)&&(o[r]=n[r]);return o};const LB=fe({name:"StarportProxy",props:VB({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},gu),setup(n,t){const o=F(fi),r=_(()=>o.getInstance(n.port,n.component)),a=q(),i=r.value.generateId(),l=q(!1);return r.value.isVisible||(r.value.land(),l.value=!0),yt(async()=>{r.value.el||(r.value.el=a.value,await en(),l.value=!0,r.value.rect.update())}),Qs(async()=>{r.value.rect.update(),r.value.liftOff(),r.value.el=void 0,l.value=!1,!r.value.options.keepAlive&&(await en(),await en(),!r.value.el&&o.dispose(r.value.port))}),ye(()=>n,async()=>{r.value.props&&await en();const p=n,{props:c}=p,g=vp(p,["props"]);r.value.props=c||{},r.value.setLocalOptions(g)},{deep:!0,immediate:!0}),()=>{const p=n,{initialProps:c,mountedProps:g}=p,u=vp(p,["initialProps","mountedProps"]),d=Ne(u,(l.value?g:c)||{});return vn("div",Ne(d,{id:i,ref:a,"data-starport-proxy":r.value.componentId,"data-starport-landed":r.value.isLanded?"true":void 0,"data-starport-floating":r.value.isLanded?void 0:"true"}),t.slots.default?vn(t.slots.default):void 0)}}});var qB=Object.defineProperty,HB=Object.defineProperties,KB=Object.getOwnPropertyDescriptors,Ap=Object.getOwnPropertySymbols,zB=Object.prototype.hasOwnProperty,QB=Object.prototype.propertyIsEnumerable,wp=(n,t,o)=>t in n?qB(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,YB=(n,t)=>{for(var o in t||(t={}))zB.call(t,o)&&wp(n,o,t[o]);if(Ap)for(var o of Ap(t))QB.call(t,o)&&wp(n,o,t[o]);return n},ZB=(n,t)=>HB(n,KB(t));const XB=fe({name:"Starport",inheritAttrs:!0,props:gu,setup(n,t){const o=q(!1);return yt(()=>{o.value=!0}),()=>{var l,p;const r=(p=(l=t.slots).default)==null?void 0:p.call(l);if(!r)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(r.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${r.length}`);const a=r[0];let i=a.type;return(!TB(i)||oo(i))&&(i={render(){return r}}),vn(LB,ZB(YB({},n),{key:n.port,component:Ls(i),props:a.props}))}}});function eD(n){const t=Se({height:0,width:0,left:0,top:0,update:r,listen:i,pause:l,margin:"0px",padding:"0px"}),o=To?document.documentElement||document.body:void 0;function r(){if(!To)return;const p=MB(n);if(!p)return;const{height:c,width:g,left:u,top:d}=p.getBoundingClientRect(),y=window.getComputedStyle(p),m=y.margin,f=y.padding;Object.assign(t,{height:c,width:g,left:u,top:o.scrollTop+d,margin:m,padding:f})}const a=PB(r,{immediate:!1});function i(){!To||(r(),a.resume())}function l(){a.pause()}return t}let nD=(n,t=21)=>(o=t)=>{let r="",a=o;for(;a--;)r+=n[Math.random()*n.length|0];return r};const Np=nD("abcdefghijklmnopqrstuvwxyz",5);function jp(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function tD(n){var t;return n.name||((t=n.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var oD=Object.defineProperty,bp=Object.getOwnPropertySymbols,sD=Object.prototype.hasOwnProperty,rD=Object.prototype.propertyIsEnumerable,Ip=(n,t,o)=>t in n?oD(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,xr=(n,t)=>{for(var o in t||(t={}))sD.call(t,o)&&Ip(n,o,t[o]);if(bp)for(var o of bp(t))rD.call(t,o)&&Ip(n,o,t[o]);return n};function aD(n,t,o={}){const r=tD(t),a=jp(r)||Np(),i=q(),l=q(null),p=q(!1),c=q(!1),g=Ru(!0),u=q({}),d=_(()=>xr(xr(xr({},$B),o),u.value)),y=q(0);let m;g.run(()=>{m=eD(i),ye(i,async D=>{D&&(c.value=!0),await en(),i.value||(c.value=!1)})});const f=jp(n);function w(){return`starport-${a}-${f}-${Np()}`}const A=w();return Se({el:i,id:A,port:n,props:l,rect:m,scope:g,isLanded:p,isVisible:c,options:d,liftOffTime:y,component:t,componentName:r,componentId:a,generateId:w,setLocalOptions(D={}){u.value=JSON.parse(JSON.stringify(D))},elRef(){return i},liftOff(){!p.value||(p.value=!1,y.value=Date.now(),m.listen())},land(){p.value||(p.value=!0,m.pause())}})}function iD(n){const t=Se(new Map);function o(a,i){let l=t.get(a);return l||(l=aD(a,i,n),t.set(a,l)),l.component=i,l}function r(a){var i;(i=t.get(a))==null||i.scope.stop(),t.delete(a)}return{portMap:t,dispose:r,getInstance:o}}var lD=Object.defineProperty,pD=Object.defineProperties,cD=Object.getOwnPropertyDescriptors,Bp=Object.getOwnPropertySymbols,gD=Object.prototype.hasOwnProperty,uD=Object.prototype.propertyIsEnumerable,Dp=(n,t,o)=>t in n?lD(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,dD=(n,t)=>{for(var o in t||(t={}))gD.call(t,o)&&Dp(n,o,t[o]);if(Bp)for(var o of Bp(t))uD.call(t,o)&&Dp(n,o,t[o]);return n},yD=(n,t)=>pD(n,cD(t));const mD=fe({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(n){const t=F(fi);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const o=_(()=>t.getInstance(n.port,n.component)),r=_(()=>{var l;return((l=o.value.el)==null?void 0:l.id)||o.value.id}),a=_(()=>{const l=Date.now()-o.value.liftOffTime,p=Math.max(0,o.value.options.duration-l),c=o.value.rect,g={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!o.value.isVisible||!o.value.el?yD(dD({},g),{zIndex:-1,display:"none"}):(o.value.isLanded?g.display="none":Object.assign(g,{transitionProperty:"all",transitionDuration:`${p}ms`,transitionTimingFunction:o.value.options.easing}),g)}),i={};return()=>{const l=!!(o.value.isLanded&&o.value.el);return vn("div",{style:a.value,"data-starport-craft":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true",onTransitionend:o.value.land},vn(Zd,{to:l?`#${r.value}`:"body",disabled:!l},vn(o.value.component,Ne(i,o.value.props))))}}}),fD=fe({name:"StarportCarrier",setup(n,{slots:t}){const o=iD(F(cu,{}));return Xn().appContext.app.provide(fi,o),()=>{var a;return[(a=t.default)==null?void 0:a.call(t),Array.from(o.portMap.entries()).map(([i,{component:l}])=>vn(mD,{key:i,port:i,component:l}))]}}});function hD(n={}){return{install(t){t.provide(cu,n),t.component("Starport",XB),t.component("StarportCarrier",fD)}}}function vD(n){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),n.app.use(SB),n.app.use(hD({keepAlive:!0}))}function dn(n,t,o){var r,a;return(a=((r=n.instance)==null?void 0:r.$).provides[t])!=null?a:o}function AD(){return{install(n){n.directive("click",{name:"v-click",mounted(t,o){var u,d,y,m;if(Fo.value||((u=dn(o,Eo))==null?void 0:u.value))return;const r=dn(o,Bt),a=dn(o,Ro),i=dn(o,Hr),l=o.modifiers.hide!==!1&&o.modifiers.hide!=null,p=o.modifiers.fade!==!1&&o.modifiers.fade!=null,c=((d=r==null?void 0:r.value)==null?void 0:d.length)||0,g=p?zy:dr;if(r&&!((y=r==null?void 0:r.value)!=null&&y.includes(t))&&r.value.push(t),o.value===null&&(o.value=r==null?void 0:r.value.length),!(i!=null&&i.value.has(o.value)))i==null||i.value.set(o.value,[t]);else if(!((m=i==null?void 0:i.value.get(o.value))!=null&&m.includes(t))){const f=(i==null?void 0:i.value.get(o.value))||[];i==null||i.value.set(o.value,[t].concat(f))}t==null||t.classList.toggle(jt,!0),a&&ye(a,()=>{var D;const f=(D=a==null?void 0:a.value)!=null?D:0,w=o.value!=null?f>=o.value:f>c;t.classList.contains(yr)||t.classList.toggle(g,!w),l!==!1&&l!==void 0&&t.classList.toggle(g,w),t.classList.toggle(vo,!1);const A=i==null?void 0:i.value.get(f);A==null||A.forEach((b,I)=>{b.classList.toggle(ds,!1),I===A.length-1?b.classList.toggle(vo,!0):b.classList.toggle(ds,!0)}),t.classList.contains(vo)||t.classList.toggle(ds,w)},{immediate:!0})},unmounted(t,o){t==null||t.classList.toggle(jt,!1);const r=dn(o,Bt);r!=null&&r.value&&Kr(r.value,t)}}),n.directive("after",{name:"v-after",mounted(t,o){var p,c;if(Fo.value||((p=dn(o,Eo))==null?void 0:p.value))return;const r=dn(o,Bt),a=dn(o,Ro),i=dn(o,Hr),l=r==null?void 0:r.value.length;o.value===void 0&&(o.value=r==null?void 0:r.value.length),i!=null&&i.value.has(o.value)?(c=i==null?void 0:i.value.get(o.value))==null||c.push(t):i==null||i.value.set(o.value,[t]),t==null||t.classList.toggle(jt,!0),a&&ye(a,()=>{var u,d,y;const g=((u=a.value)!=null?u:0)>=((y=(d=o.value)!=null?d:l)!=null?y:0);t.classList.contains(yr)||t.classList.toggle(dr,!g),t.classList.toggle(vo,!1),t.classList.contains(vo)||t.classList.toggle(ds,g)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(jt,!0)}}),n.directive("click-hide",{name:"v-click-hide",mounted(t,o){var l,p,c;if(Fo.value||((l=dn(o,Eo))==null?void 0:l.value))return;const r=dn(o,Bt),a=dn(o,Ro),i=((p=r==null?void 0:r.value)==null?void 0:p.length)||0;r&&!((c=r==null?void 0:r.value)!=null&&c.includes(t))&&r.value.push(t),t==null||t.classList.toggle(jt,!0),a&&ye(a,()=>{var d;const g=(d=a==null?void 0:a.value)!=null?d:0,u=o.value!=null?g>=o.value:g>i;t.classList.toggle(dr,u),t.classList.toggle(yr,u)},{immediate:!0})},unmounted(t,o){t==null||t.classList.toggle(jt,!1);const r=dn(o,Bt);r!=null&&r.value&&Kr(r.value,t)}})}}}function wD(n,t){const o=dg(n),r=yg(t,o.currentRoute,o.currentPage);return{nav:{...o,...r,downloadPDF:pa,next:ct,nextSlide:zo,openInEditor:Xb,prev:gt,prevSlide:Qo},configs:be,themeConfigs:_(()=>be.themeConfig)}}function ND(){return{install(n){const t=wD(et,Fn);n.provide(O,Se(t))}}}const yo=Wy(n2);yo.use(wn);yo.use(Jy());yo.use(AD());yo.use(ND());vD({app:yo,router:wn});yo.mount("#app");export{bo as $,de as A,Be as B,rn as C,$h as D,jD as E,_e as F,bD as G,Fn as H,Ss as I,Kb as J,jr as K,mr as L,qo as M,wr as N,xc as O,HA as P,za as Q,VA as R,Qa as S,He as T,jg as U,Yh as V,cg as W,Tn as X,ID as Y,Qe as Z,lg as _,e as a,ys as a0,es as a1,Et as a2,Jn as a3,ra as a4,Ah as a5,wh as a6,Nh as a7,bh as a8,Ma as a9,Dc as aa,RD as ab,an as ac,xv as ad,Ec as ae,Ih as af,Qs as ag,Mh as ah,_ as b,$ as c,fe as d,O as e,fn as f,L as g,N as h,F as i,kh as j,Zb as k,be as l,Ly as m,We as n,j as o,yt as p,Se as q,q as r,BD as s,ut as t,DD as u,_D as v,ye as w,U as x,$e as y,S as z};
