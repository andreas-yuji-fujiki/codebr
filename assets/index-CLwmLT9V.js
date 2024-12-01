(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function dd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var za={exports:{}},qi={},Na={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Or=Symbol.for("react.element"),pd=Symbol.for("react.portal"),hd=Symbol.for("react.fragment"),md=Symbol.for("react.strict_mode"),gd=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),yd=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),Sd=Symbol.for("react.memo"),kd=Symbol.for("react.lazy"),Ju=Symbol.iterator;function Cd(e){return e===null||typeof e!="object"?null:(e=Ju&&e[Ju]||e["@@iterator"],typeof e=="function"?e:null)}var Pa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ja=Object.assign,La={};function Fn(e,t,n){this.props=e,this.context=t,this.refs=La,this.updater=n||Pa}Fn.prototype.isReactComponent={};Fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ta(){}Ta.prototype=Fn.prototype;function ql(e,t,n){this.props=e,this.context=t,this.refs=La,this.updater=n||Pa}var bl=ql.prototype=new Ta;bl.constructor=ql;ja(bl,Fn.prototype);bl.isPureReactComponent=!0;var qu=Array.isArray,Oa=Object.prototype.hasOwnProperty,eu={current:null},Ia={key:!0,ref:!0,__self:!0,__source:!0};function Ra(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Oa.call(t,r)&&!Ia.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Or,type:e,key:o,ref:l,props:i,_owner:eu.current}}function Ed(e,t){return{$$typeof:Or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function tu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Or}function _d(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bu=/\/+/g;function Co(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_d(""+e.key):t.toString(36)}function oi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Or:case pd:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Co(l,0):r,qu(i)?(n="",e!=null&&(n=e.replace(bu,"$&/")+"/"),oi(i,t,n,"",function(c){return c})):i!=null&&(tu(i)&&(i=Ed(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(bu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",qu(e))for(var u=0;u<e.length;u++){o=e[u];var s=r+Co(o,u);l+=oi(o,t,n,s,i)}else if(s=Cd(e),typeof s=="function")for(e=s.call(e),u=0;!(o=e.next()).done;)o=o.value,s=r+Co(o,u++),l+=oi(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ur(e,t,n){if(e==null)return e;var r=[],i=0;return oi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function zd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},li={transition:null},Nd={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:li,ReactCurrentOwner:eu};function $a(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:Ur,forEach:function(e,t,n){Ur(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ur(e,function(){t++}),t},toArray:function(e){return Ur(e,function(t){return t})||[]},only:function(e){if(!tu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Fn;I.Fragment=hd;I.Profiler=gd;I.PureComponent=ql;I.StrictMode=md;I.Suspense=wd;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nd;I.act=$a;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ja({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=eu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)Oa.call(t,s)&&!Ia.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Or,type:e.type,key:i,ref:o,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:yd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vd,_context:e},e.Consumer=e};I.createElement=Ra;I.createFactory=function(e){var t=Ra.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:xd,render:e}};I.isValidElement=tu;I.lazy=function(e){return{$$typeof:kd,_payload:{_status:-1,_result:e},_init:zd}};I.memo=function(e,t){return{$$typeof:Sd,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=li.transition;li.transition={};try{e()}finally{li.transition=t}};I.unstable_act=$a;I.useCallback=function(e,t){return he.current.useCallback(e,t)};I.useContext=function(e){return he.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return he.current.useDeferredValue(e)};I.useEffect=function(e,t){return he.current.useEffect(e,t)};I.useId=function(){return he.current.useId()};I.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return he.current.useMemo(e,t)};I.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};I.useRef=function(e){return he.current.useRef(e)};I.useState=function(e){return he.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return he.current.useTransition()};I.version="18.3.1";Na.exports=I;var ce=Na.exports;const Re=dd(ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd=ce,jd=Symbol.for("react.element"),Ld=Symbol.for("react.fragment"),Td=Object.prototype.hasOwnProperty,Od=Pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Id={key:!0,ref:!0,__self:!0,__source:!0};function Ma(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Td.call(t,r)&&!Id.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:jd,type:e,key:o,ref:l,props:i,_owner:Od.current}}qi.Fragment=Ld;qi.jsx=Ma;qi.jsxs=Ma;za.exports=qi;var g=za.exports,Da={exports:{}},je={},Aa={exports:{}},Fa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,P){var j=_.length;_.push(P);e:for(;0<j;){var D=j-1>>>1,A=_[D];if(0<i(A,P))_[D]=P,_[j]=A,j=D;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var P=_[0],j=_.pop();if(j!==P){_[0]=j;e:for(var D=0,A=_.length,Ut=A>>>1;D<Ut;){var Fe=2*(D+1)-1,pt=_[Fe],Ce=Fe+1,et=_[Ce];if(0>i(pt,j))Ce<A&&0>i(et,pt)?(_[D]=et,_[Ce]=j,D=Ce):(_[D]=pt,_[Fe]=j,D=Fe);else if(Ce<A&&0>i(et,j))_[D]=et,_[Ce]=j,D=Ce;else break e}}return P}function i(_,P){var j=_.sortIndex-P.sortIndex;return j!==0?j:_.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var s=[],c=[],m=1,h=null,p=3,y=!1,x=!1,k=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(_){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=_)r(c),P.sortIndex=P.expirationTime,t(s,P);else break;P=n(c)}}function v(_){if(k=!1,d(_),!x)if(n(s)!==null)x=!0,Wn(E);else{var P=n(c);P!==null&&Ft(v,P.startTime-_)}}function E(_,P){x=!1,k&&(k=!1,f(N),N=-1),y=!0;var j=p;try{for(d(P),h=n(s);h!==null&&(!(h.expirationTime>P)||_&&!ke());){var D=h.callback;if(typeof D=="function"){h.callback=null,p=h.priorityLevel;var A=D(h.expirationTime<=P);P=e.unstable_now(),typeof A=="function"?h.callback=A:h===n(s)&&r(s),d(P)}else r(s);h=n(s)}if(h!==null)var Ut=!0;else{var Fe=n(c);Fe!==null&&Ft(v,Fe.startTime-P),Ut=!1}return Ut}finally{h=null,p=j,y=!1}}var C=!1,w=null,N=-1,U=5,O=-1;function ke(){return!(e.unstable_now()-O<U)}function Dt(){if(w!==null){var _=e.unstable_now();O=_;var P=!0;try{P=w(!0,_)}finally{P?At():(C=!1,w=null)}}else C=!1}var At;if(typeof a=="function")At=function(){a(Dt)};else if(typeof MessageChannel<"u"){var Ar=new MessageChannel,So=Ar.port2;Ar.port1.onmessage=Dt,At=function(){So.postMessage(null)}}else At=function(){T(Dt,0)};function Wn(_){w=_,C||(C=!0,At())}function Ft(_,P){N=T(function(){_(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Wn(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var j=p;p=P;try{return _()}finally{p=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,P){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var j=p;p=_;try{return P()}finally{p=j}},e.unstable_scheduleCallback=function(_,P,j){var D=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?D+j:D):j=D,_){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=j+A,_={id:m++,callback:P,priorityLevel:_,startTime:j,expirationTime:A,sortIndex:-1},j>D?(_.sortIndex=j,t(c,_),n(s)===null&&_===n(c)&&(k?(f(N),N=-1):k=!0,Ft(v,j-D))):(_.sortIndex=A,t(s,_),x||y||(x=!0,Wn(E))),_},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(_){var P=p;return function(){var j=p;p=P;try{return _.apply(this,arguments)}finally{p=j}}}})(Fa);Aa.exports=Fa;var Rd=Aa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d=ce,Pe=Rd;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ua=new Set,hr={};function rn(e,t){Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(hr[e]=t,e=0;e<t.length;e++)Ua.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bo=Object.prototype.hasOwnProperty,Md=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,es={},ts={};function Dd(e){return bo.call(ts,e)?!0:bo.call(es,e)?!1:Md.test(e)?ts[e]=!0:(es[e]=!0,!1)}function Ad(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fd(e,t,n,r){if(t===null||typeof t>"u"||Ad(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var nu=/[\-:]([a-z])/g;function ru(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nu,ru);le[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nu,ru);le[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nu,ru);le[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function iu(e,t,n,r){var i=le.hasOwnProperty(t)?le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fd(t,n,i,r)&&(n=null),r||i===null?Dd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=$d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Br=Symbol.for("react.element"),sn=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),ou=Symbol.for("react.strict_mode"),el=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ha=Symbol.for("react.context"),lu=Symbol.for("react.forward_ref"),tl=Symbol.for("react.suspense"),nl=Symbol.for("react.suspense_list"),uu=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Wa=Symbol.for("react.offscreen"),ns=Symbol.iterator;function Qn(e){return e===null||typeof e!="object"?null:(e=ns&&e[ns]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Eo;function bn(e){if(Eo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Eo=t&&t[1]||""}return`
`+Eo+e}var _o=!1;function zo(e,t){if(!e||_o)return"";_o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=u);break}}}finally{_o=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bn(e):""}function Ud(e){switch(e.tag){case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return bn("Suspense");case 19:return bn("SuspenseList");case 0:case 2:case 15:return e=zo(e.type,!1),e;case 11:return e=zo(e.type.render,!1),e;case 1:return e=zo(e.type,!0),e;default:return""}}function rl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case an:return"Fragment";case sn:return"Portal";case el:return"Profiler";case ou:return"StrictMode";case tl:return"Suspense";case nl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ha:return(e.displayName||"Context")+".Consumer";case Ba:return(e._context.displayName||"Context")+".Provider";case lu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uu:return t=e.displayName||null,t!==null?t:rl(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return rl(e(t))}catch{}}return null}function Bd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rl(t);case 8:return t===ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Va(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hd(e){var t=Va(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hr(e){e._valueTracker||(e._valueTracker=Hd(e))}function Qa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Va(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function il(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function rs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ot(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ya(e,t){t=t.checked,t!=null&&iu(e,"checked",t,!1)}function ol(e,t){Ya(e,t);var n=Ot(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&ll(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function is(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ll(e,t,n){(t!=="number"||ki(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var er=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function os(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(er(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ot(n)}}function Ka(e,t){var n=Ot(t.value),r=Ot(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ls(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ga(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ga(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wr,Xa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wr=Wr||document.createElement("div"),Wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wd=["Webkit","ms","Moz","O"];Object.keys(ir).forEach(function(e){Wd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ir[t]=ir[e]})});function Za(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ir.hasOwnProperty(e)&&ir[e]?(""+t).trim():t+"px"}function Ja(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Za(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vd=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function al(e,t){if(t){if(Vd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fl=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dl=null,kn=null,Cn=null;function us(e){if(e=$r(e)){if(typeof dl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ro(t),dl(e.stateNode,e.type,t))}}function qa(e){kn?Cn?Cn.push(e):Cn=[e]:kn=e}function ba(){if(kn){var e=kn,t=Cn;if(Cn=kn=null,us(e),t)for(e=0;e<t.length;e++)us(t[e])}}function ec(e,t){return e(t)}function tc(){}var No=!1;function nc(e,t,n){if(No)return e(t,n);No=!0;try{return ec(e,t,n)}finally{No=!1,(kn!==null||Cn!==null)&&(tc(),ba())}}function gr(e,t){var n=e.stateNode;if(n===null)return null;var r=ro(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var pl=!1;if(ut)try{var Yn={};Object.defineProperty(Yn,"passive",{get:function(){pl=!0}}),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)}catch{pl=!1}function Qd(e,t,n,r,i,o,l,u,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var or=!1,Ci=null,Ei=!1,hl=null,Yd={onError:function(e){or=!0,Ci=e}};function Kd(e,t,n,r,i,o,l,u,s){or=!1,Ci=null,Qd.apply(Yd,arguments)}function Gd(e,t,n,r,i,o,l,u,s){if(Kd.apply(this,arguments),or){if(or){var c=Ci;or=!1,Ci=null}else throw Error(S(198));Ei||(Ei=!0,hl=c)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ss(e){if(on(e)!==e)throw Error(S(188))}function Xd(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ss(i),e;if(o===r)return ss(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function ic(e){return e=Xd(e),e!==null?oc(e):null}function oc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=oc(e);if(t!==null)return t;e=e.sibling}return null}var lc=Pe.unstable_scheduleCallback,as=Pe.unstable_cancelCallback,Zd=Pe.unstable_shouldYield,Jd=Pe.unstable_requestPaint,Z=Pe.unstable_now,qd=Pe.unstable_getCurrentPriorityLevel,au=Pe.unstable_ImmediatePriority,uc=Pe.unstable_UserBlockingPriority,_i=Pe.unstable_NormalPriority,bd=Pe.unstable_LowPriority,sc=Pe.unstable_IdlePriority,bi=null,qe=null;function ep(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(bi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:rp,tp=Math.log,np=Math.LN2;function rp(e){return e>>>=0,e===0?32:31-(tp(e)/np|0)|0}var Vr=64,Qr=4194304;function tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=tr(u):(o&=l,o!==0&&(r=tr(o)))}else l=n&~i,l!==0?r=tr(l):o!==0&&(r=tr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),i=1<<n,r|=e[n],t&=~i;return r}function ip(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function op(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ve(o),u=1<<l,s=i[l];s===-1?(!(u&n)||u&r)&&(i[l]=ip(u,t)):s<=t&&(e.expiredLanes|=u),o&=~u}}function ml(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ac(){var e=Vr;return Vr<<=1,!(Vr&4194240)&&(Vr=64),e}function Po(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function lp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ve(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function cu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function cc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fc,fu,dc,pc,hc,gl=!1,Yr=[],Et=null,_t=null,zt=null,vr=new Map,yr=new Map,xt=[],up="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cs(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(t.pointerId)}}function Kn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=$r(t),t!==null&&fu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sp(e,t,n,r,i){switch(t){case"focusin":return Et=Kn(Et,e,t,n,r,i),!0;case"dragenter":return _t=Kn(_t,e,t,n,r,i),!0;case"mouseover":return zt=Kn(zt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return vr.set(o,Kn(vr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,yr.set(o,Kn(yr.get(o)||null,e,t,n,r,i)),!0}return!1}function mc(e){var t=Vt(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=rc(n),t!==null){e.blockedOn=t,hc(e.priority,function(){dc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fl=r,n.target.dispatchEvent(r),fl=null}else return t=$r(n),t!==null&&fu(t),e.blockedOn=n,!1;t.shift()}return!0}function fs(e,t,n){ui(e)&&n.delete(t)}function ap(){gl=!1,Et!==null&&ui(Et)&&(Et=null),_t!==null&&ui(_t)&&(_t=null),zt!==null&&ui(zt)&&(zt=null),vr.forEach(fs),yr.forEach(fs)}function Gn(e,t){e.blockedOn===t&&(e.blockedOn=null,gl||(gl=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,ap)))}function xr(e){function t(i){return Gn(i,e)}if(0<Yr.length){Gn(Yr[0],e);for(var n=1;n<Yr.length;n++){var r=Yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Et!==null&&Gn(Et,e),_t!==null&&Gn(_t,e),zt!==null&&Gn(zt,e),vr.forEach(t),yr.forEach(t),n=0;n<xt.length;n++)r=xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xt.length&&(n=xt[0],n.blockedOn===null);)mc(n),n.blockedOn===null&&xt.shift()}var En=ft.ReactCurrentBatchConfig,Ni=!0;function cp(e,t,n,r){var i=M,o=En.transition;En.transition=null;try{M=1,du(e,t,n,r)}finally{M=i,En.transition=o}}function fp(e,t,n,r){var i=M,o=En.transition;En.transition=null;try{M=4,du(e,t,n,r)}finally{M=i,En.transition=o}}function du(e,t,n,r){if(Ni){var i=vl(e,t,n,r);if(i===null)Ao(e,t,r,Pi,n),cs(e,r);else if(sp(i,e,t,n,r))r.stopPropagation();else if(cs(e,r),t&4&&-1<up.indexOf(e)){for(;i!==null;){var o=$r(i);if(o!==null&&fc(o),o=vl(e,t,n,r),o===null&&Ao(e,t,r,Pi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ao(e,t,r,null,n)}}var Pi=null;function vl(e,t,n,r){if(Pi=null,e=su(r),e=Vt(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Pi=e,null}function gc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qd()){case au:return 1;case uc:return 4;case _i:case bd:return 16;case sc:return 536870912;default:return 16}default:return 16}}var St=null,pu=null,si=null;function vc(){if(si)return si;var e,t=pu,n=t.length,r,i="value"in St?St.value:St.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return si=i.slice(e,1<r?1-r:void 0)}function ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kr(){return!0}function ds(){return!1}function Le(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Kr:ds,this.isPropagationStopped=ds,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),t}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=Le(Un),Rr=G({},Un,{view:0,detail:0}),dp=Le(Rr),jo,Lo,Xn,eo=G({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(jo=e.screenX-Xn.screenX,Lo=e.screenY-Xn.screenY):Lo=jo=0,Xn=e),jo)},movementY:function(e){return"movementY"in e?e.movementY:Lo}}),ps=Le(eo),pp=G({},eo,{dataTransfer:0}),hp=Le(pp),mp=G({},Rr,{relatedTarget:0}),To=Le(mp),gp=G({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),vp=Le(gp),yp=G({},Un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xp=Le(yp),wp=G({},Un,{data:0}),hs=Le(wp),Sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ep(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cp[e])?!!t[e]:!1}function mu(){return Ep}var _p=G({},Rr,{key:function(e){if(e.key){var t=Sp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zp=Le(_p),Np=G({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ms=Le(Np),Pp=G({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),jp=Le(Pp),Lp=G({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tp=Le(Lp),Op=G({},eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ip=Le(Op),Rp=[9,13,27,32],gu=ut&&"CompositionEvent"in window,lr=null;ut&&"documentMode"in document&&(lr=document.documentMode);var $p=ut&&"TextEvent"in window&&!lr,yc=ut&&(!gu||lr&&8<lr&&11>=lr),gs=" ",vs=!1;function xc(e,t){switch(e){case"keyup":return Rp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function Mp(e,t){switch(e){case"compositionend":return wc(t);case"keypress":return t.which!==32?null:(vs=!0,gs);case"textInput":return e=t.data,e===gs&&vs?null:e;default:return null}}function Dp(e,t){if(cn)return e==="compositionend"||!gu&&xc(e,t)?(e=vc(),si=pu=St=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yc&&t.locale!=="ko"?null:t.data;default:return null}}var Ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ap[e.type]:t==="textarea"}function Sc(e,t,n,r){qa(r),t=ji(t,"onChange"),0<t.length&&(n=new hu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ur=null,wr=null;function Fp(e){Oc(e,0)}function to(e){var t=pn(e);if(Qa(t))return e}function Up(e,t){if(e==="change")return t}var kc=!1;if(ut){var Oo;if(ut){var Io="oninput"in document;if(!Io){var xs=document.createElement("div");xs.setAttribute("oninput","return;"),Io=typeof xs.oninput=="function"}Oo=Io}else Oo=!1;kc=Oo&&(!document.documentMode||9<document.documentMode)}function ws(){ur&&(ur.detachEvent("onpropertychange",Cc),wr=ur=null)}function Cc(e){if(e.propertyName==="value"&&to(wr)){var t=[];Sc(t,wr,e,su(e)),nc(Fp,t)}}function Bp(e,t,n){e==="focusin"?(ws(),ur=t,wr=n,ur.attachEvent("onpropertychange",Cc)):e==="focusout"&&ws()}function Hp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return to(wr)}function Wp(e,t){if(e==="click")return to(t)}function Vp(e,t){if(e==="input"||e==="change")return to(t)}function Qp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:Qp;function Sr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bo.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function Ss(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ks(e,t){var n=Ss(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ss(n)}}function Ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _c(){for(var e=window,t=ki();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ki(e.document)}return t}function vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yp(e){var t=_c(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ec(n.ownerDocument.documentElement,n)){if(r!==null&&vu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ks(n,o);var l=ks(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kp=ut&&"documentMode"in document&&11>=document.documentMode,fn=null,yl=null,sr=null,xl=!1;function Cs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xl||fn==null||fn!==ki(r)||(r=fn,"selectionStart"in r&&vu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sr&&Sr(sr,r)||(sr=r,r=ji(yl,"onSelect"),0<r.length&&(t=new hu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fn)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dn={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionend:Gr("Transition","TransitionEnd")},Ro={},zc={};ut&&(zc=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function no(e){if(Ro[e])return Ro[e];if(!dn[e])return e;var t=dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zc)return Ro[e]=t[n];return e}var Nc=no("animationend"),Pc=no("animationiteration"),jc=no("animationstart"),Lc=no("transitionend"),Tc=new Map,Es="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){Tc.set(e,t),rn(t,[e])}for(var $o=0;$o<Es.length;$o++){var Mo=Es[$o],Gp=Mo.toLowerCase(),Xp=Mo[0].toUpperCase()+Mo.slice(1);Rt(Gp,"on"+Xp)}Rt(Nc,"onAnimationEnd");Rt(Pc,"onAnimationIteration");Rt(jc,"onAnimationStart");Rt("dblclick","onDoubleClick");Rt("focusin","onFocus");Rt("focusout","onBlur");Rt(Lc,"onTransitionEnd");Nn("onMouseEnter",["mouseout","mouseover"]);Nn("onMouseLeave",["mouseout","mouseover"]);Nn("onPointerEnter",["pointerout","pointerover"]);Nn("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zp=new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));function _s(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gd(r,t,void 0,e),e.currentTarget=null}function Oc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==o&&i.isPropagationStopped())break e;_s(i,u,c),o=s}else for(l=0;l<r.length;l++){if(u=r[l],s=u.instance,c=u.currentTarget,u=u.listener,s!==o&&i.isPropagationStopped())break e;_s(i,u,c),o=s}}}if(Ei)throw e=hl,Ei=!1,hl=null,e}function H(e,t){var n=t[El];n===void 0&&(n=t[El]=new Set);var r=e+"__bubble";n.has(r)||(Ic(t,e,2,!1),n.add(r))}function Do(e,t,n){var r=0;t&&(r|=4),Ic(n,e,r,t)}var Xr="_reactListening"+Math.random().toString(36).slice(2);function kr(e){if(!e[Xr]){e[Xr]=!0,Ua.forEach(function(n){n!=="selectionchange"&&(Zp.has(n)||Do(n,!1,e),Do(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xr]||(t[Xr]=!0,Do("selectionchange",!1,t))}}function Ic(e,t,n,r){switch(gc(t)){case 1:var i=cp;break;case 4:i=fp;break;default:i=du}n=i.bind(null,t,n,e),i=void 0,!pl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ao(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Vt(u),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}u=u.parentNode}}r=r.return}nc(function(){var c=o,m=su(n),h=[];e:{var p=Tc.get(e);if(p!==void 0){var y=hu,x=e;switch(e){case"keypress":if(ai(n)===0)break e;case"keydown":case"keyup":y=zp;break;case"focusin":x="focus",y=To;break;case"focusout":x="blur",y=To;break;case"beforeblur":case"afterblur":y=To;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=jp;break;case Nc:case Pc:case jc:y=vp;break;case Lc:y=Tp;break;case"scroll":y=dp;break;case"wheel":y=Ip;break;case"copy":case"cut":case"paste":y=xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ms}var k=(t&4)!==0,T=!k&&e==="scroll",f=k?p!==null?p+"Capture":null:p;k=[];for(var a=c,d;a!==null;){d=a;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=gr(a,f),v!=null&&k.push(Cr(a,v,d)))),T)break;a=a.return}0<k.length&&(p=new y(p,x,null,n,m),h.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==fl&&(x=n.relatedTarget||n.fromElement)&&(Vt(x)||x[st]))break e;if((y||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?Vt(x):null,x!==null&&(T=on(x),x!==T||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(k=ps,v="onMouseLeave",f="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(k=ms,v="onPointerLeave",f="onPointerEnter",a="pointer"),T=y==null?p:pn(y),d=x==null?p:pn(x),p=new k(v,a+"leave",y,n,m),p.target=T,p.relatedTarget=d,v=null,Vt(m)===c&&(k=new k(f,a+"enter",x,n,m),k.target=d,k.relatedTarget=T,v=k),T=v,y&&x)t:{for(k=y,f=x,a=0,d=k;d;d=ln(d))a++;for(d=0,v=f;v;v=ln(v))d++;for(;0<a-d;)k=ln(k),a--;for(;0<d-a;)f=ln(f),d--;for(;a--;){if(k===f||f!==null&&k===f.alternate)break t;k=ln(k),f=ln(f)}k=null}else k=null;y!==null&&zs(h,p,y,k,!1),x!==null&&T!==null&&zs(h,T,x,k,!0)}}e:{if(p=c?pn(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var E=Up;else if(ys(p))if(kc)E=Vp;else{E=Hp;var C=Bp}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Wp);if(E&&(E=E(e,c))){Sc(h,E,n,m);break e}C&&C(e,p,c),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&ll(p,"number",p.value)}switch(C=c?pn(c):window,e){case"focusin":(ys(C)||C.contentEditable==="true")&&(fn=C,yl=c,sr=null);break;case"focusout":sr=yl=fn=null;break;case"mousedown":xl=!0;break;case"contextmenu":case"mouseup":case"dragend":xl=!1,Cs(h,n,m);break;case"selectionchange":if(Kp)break;case"keydown":case"keyup":Cs(h,n,m)}var w;if(gu)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else cn?xc(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(yc&&n.locale!=="ko"&&(cn||N!=="onCompositionStart"?N==="onCompositionEnd"&&cn&&(w=vc()):(St=m,pu="value"in St?St.value:St.textContent,cn=!0)),C=ji(c,N),0<C.length&&(N=new hs(N,e,null,n,m),h.push({event:N,listeners:C}),w?N.data=w:(w=wc(n),w!==null&&(N.data=w)))),(w=$p?Mp(e,n):Dp(e,n))&&(c=ji(c,"onBeforeInput"),0<c.length&&(m=new hs("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=w))}Oc(h,t)})}function Cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ji(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=gr(e,n),o!=null&&r.unshift(Cr(e,o,i)),o=gr(e,t),o!=null&&r.push(Cr(e,o,i))),e=e.return}return r}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zs(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var u=n,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,i?(s=gr(n,o),s!=null&&l.unshift(Cr(n,s,u))):i||(s=gr(n,o),s!=null&&l.push(Cr(n,s,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Jp=/\r\n?/g,qp=/\u0000|\uFFFD/g;function Ns(e){return(typeof e=="string"?e:""+e).replace(Jp,`
`).replace(qp,"")}function Zr(e,t,n){if(t=Ns(t),Ns(e)!==t&&n)throw Error(S(425))}function Li(){}var wl=null,Sl=null;function kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cl=typeof setTimeout=="function"?setTimeout:void 0,bp=typeof clearTimeout=="function"?clearTimeout:void 0,Ps=typeof Promise=="function"?Promise:void 0,e0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ps<"u"?function(e){return Ps.resolve(null).then(e).catch(t0)}:Cl;function t0(e){setTimeout(function(){throw e})}function Fo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xr(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function js(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),Je="__reactFiber$"+Bn,Er="__reactProps$"+Bn,st="__reactContainer$"+Bn,El="__reactEvents$"+Bn,n0="__reactListeners$"+Bn,r0="__reactHandles$"+Bn;function Vt(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=js(e);e!==null;){if(n=e[Je])return n;e=js(e)}return t}e=n,n=e.parentNode}return null}function $r(e){return e=e[Je]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ro(e){return e[Er]||null}var _l=[],hn=-1;function $t(e){return{current:e}}function V(e){0>hn||(e.current=_l[hn],_l[hn]=null,hn--)}function B(e,t){hn++,_l[hn]=e.current,e.current=t}var It={},fe=$t(It),xe=$t(!1),qt=It;function Pn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function we(e){return e=e.childContextTypes,e!=null}function Ti(){V(xe),V(fe)}function Ls(e,t,n){if(fe.current!==It)throw Error(S(168));B(fe,t),B(xe,n)}function Rc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Bd(e)||"Unknown",i));return G({},n,r)}function Oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,qt=fe.current,B(fe,e),B(xe,xe.current),!0}function Ts(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Rc(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,V(xe),V(fe),B(fe,e)):V(xe),B(xe,n)}var rt=null,io=!1,Uo=!1;function $c(e){rt===null?rt=[e]:rt.push(e)}function i0(e){io=!0,$c(e)}function Mt(){if(!Uo&&rt!==null){Uo=!0;var e=0,t=M;try{var n=rt;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,io=!1}catch(i){throw rt!==null&&(rt=rt.slice(e+1)),lc(au,Mt),i}finally{M=t,Uo=!1}}return null}var mn=[],gn=0,Ii=null,Ri=0,Te=[],Oe=0,bt=null,it=1,ot="";function Ht(e,t){mn[gn++]=Ri,mn[gn++]=Ii,Ii=e,Ri=t}function Mc(e,t,n){Te[Oe++]=it,Te[Oe++]=ot,Te[Oe++]=bt,bt=e;var r=it;e=ot;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var o=32-Ve(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,it=1<<32-Ve(t)+i|n<<i|r,ot=o+e}else it=1<<o|n<<i|r,ot=e}function yu(e){e.return!==null&&(Ht(e,1),Mc(e,1,0))}function xu(e){for(;e===Ii;)Ii=mn[--gn],mn[gn]=null,Ri=mn[--gn],mn[gn]=null;for(;e===bt;)bt=Te[--Oe],Te[Oe]=null,ot=Te[--Oe],Te[Oe]=null,it=Te[--Oe],Te[Oe]=null}var Ne=null,ze=null,Q=!1,We=null;function Dc(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Os(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,ze=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bt!==null?{id:it,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,ze=null,!0):!1;default:return!1}}function zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nl(e){if(Q){var t=ze;if(t){var n=t;if(!Os(e,t)){if(zl(e))throw Error(S(418));t=Nt(n.nextSibling);var r=Ne;t&&Os(e,t)?Dc(r,n):(e.flags=e.flags&-4097|2,Q=!1,Ne=e)}}else{if(zl(e))throw Error(S(418));e.flags=e.flags&-4097|2,Q=!1,Ne=e}}}function Is(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Jr(e){if(e!==Ne)return!1;if(!Q)return Is(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kl(e.type,e.memoizedProps)),t&&(t=ze)){if(zl(e))throw Ac(),Error(S(418));for(;t;)Dc(e,t),t=Nt(t.nextSibling)}if(Is(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Ne?Nt(e.stateNode.nextSibling):null;return!0}function Ac(){for(var e=ze;e;)e=Nt(e.nextSibling)}function jn(){ze=Ne=null,Q=!1}function wu(e){We===null?We=[e]:We.push(e)}var o0=ft.ReactCurrentBatchConfig;function Zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function qr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rs(e){var t=e._init;return t(e._payload)}function Fc(e){function t(f,a){if(e){var d=f.deletions;d===null?(f.deletions=[a],f.flags|=16):d.push(a)}}function n(f,a){if(!e)return null;for(;a!==null;)t(f,a),a=a.sibling;return null}function r(f,a){for(f=new Map;a!==null;)a.key!==null?f.set(a.key,a):f.set(a.index,a),a=a.sibling;return f}function i(f,a){return f=Tt(f,a),f.index=0,f.sibling=null,f}function o(f,a,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<a?(f.flags|=2,a):d):(f.flags|=2,a)):(f.flags|=1048576,a)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,a,d,v){return a===null||a.tag!==6?(a=Ko(d,f.mode,v),a.return=f,a):(a=i(a,d),a.return=f,a)}function s(f,a,d,v){var E=d.type;return E===an?m(f,a,d.props.children,v,d.key):a!==null&&(a.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vt&&Rs(E)===a.type)?(v=i(a,d.props),v.ref=Zn(f,a,d),v.return=f,v):(v=gi(d.type,d.key,d.props,null,f.mode,v),v.ref=Zn(f,a,d),v.return=f,v)}function c(f,a,d,v){return a===null||a.tag!==4||a.stateNode.containerInfo!==d.containerInfo||a.stateNode.implementation!==d.implementation?(a=Go(d,f.mode,v),a.return=f,a):(a=i(a,d.children||[]),a.return=f,a)}function m(f,a,d,v,E){return a===null||a.tag!==7?(a=Xt(d,f.mode,v,E),a.return=f,a):(a=i(a,d),a.return=f,a)}function h(f,a,d){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Ko(""+a,f.mode,d),a.return=f,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case Br:return d=gi(a.type,a.key,a.props,null,f.mode,d),d.ref=Zn(f,null,a),d.return=f,d;case sn:return a=Go(a,f.mode,d),a.return=f,a;case vt:var v=a._init;return h(f,v(a._payload),d)}if(er(a)||Qn(a))return a=Xt(a,f.mode,d,null),a.return=f,a;qr(f,a)}return null}function p(f,a,d,v){var E=a!==null?a.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:u(f,a,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Br:return d.key===E?s(f,a,d,v):null;case sn:return d.key===E?c(f,a,d,v):null;case vt:return E=d._init,p(f,a,E(d._payload),v)}if(er(d)||Qn(d))return E!==null?null:m(f,a,d,v,null);qr(f,d)}return null}function y(f,a,d,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,u(a,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Br:return f=f.get(v.key===null?d:v.key)||null,s(a,f,v,E);case sn:return f=f.get(v.key===null?d:v.key)||null,c(a,f,v,E);case vt:var C=v._init;return y(f,a,d,C(v._payload),E)}if(er(v)||Qn(v))return f=f.get(d)||null,m(a,f,v,E,null);qr(a,v)}return null}function x(f,a,d,v){for(var E=null,C=null,w=a,N=a=0,U=null;w!==null&&N<d.length;N++){w.index>N?(U=w,w=null):U=w.sibling;var O=p(f,w,d[N],v);if(O===null){w===null&&(w=U);break}e&&w&&O.alternate===null&&t(f,w),a=o(O,a,N),C===null?E=O:C.sibling=O,C=O,w=U}if(N===d.length)return n(f,w),Q&&Ht(f,N),E;if(w===null){for(;N<d.length;N++)w=h(f,d[N],v),w!==null&&(a=o(w,a,N),C===null?E=w:C.sibling=w,C=w);return Q&&Ht(f,N),E}for(w=r(f,w);N<d.length;N++)U=y(w,f,N,d[N],v),U!==null&&(e&&U.alternate!==null&&w.delete(U.key===null?N:U.key),a=o(U,a,N),C===null?E=U:C.sibling=U,C=U);return e&&w.forEach(function(ke){return t(f,ke)}),Q&&Ht(f,N),E}function k(f,a,d,v){var E=Qn(d);if(typeof E!="function")throw Error(S(150));if(d=E.call(d),d==null)throw Error(S(151));for(var C=E=null,w=a,N=a=0,U=null,O=d.next();w!==null&&!O.done;N++,O=d.next()){w.index>N?(U=w,w=null):U=w.sibling;var ke=p(f,w,O.value,v);if(ke===null){w===null&&(w=U);break}e&&w&&ke.alternate===null&&t(f,w),a=o(ke,a,N),C===null?E=ke:C.sibling=ke,C=ke,w=U}if(O.done)return n(f,w),Q&&Ht(f,N),E;if(w===null){for(;!O.done;N++,O=d.next())O=h(f,O.value,v),O!==null&&(a=o(O,a,N),C===null?E=O:C.sibling=O,C=O);return Q&&Ht(f,N),E}for(w=r(f,w);!O.done;N++,O=d.next())O=y(w,f,N,O.value,v),O!==null&&(e&&O.alternate!==null&&w.delete(O.key===null?N:O.key),a=o(O,a,N),C===null?E=O:C.sibling=O,C=O);return e&&w.forEach(function(Dt){return t(f,Dt)}),Q&&Ht(f,N),E}function T(f,a,d,v){if(typeof d=="object"&&d!==null&&d.type===an&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Br:e:{for(var E=d.key,C=a;C!==null;){if(C.key===E){if(E=d.type,E===an){if(C.tag===7){n(f,C.sibling),a=i(C,d.props.children),a.return=f,f=a;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vt&&Rs(E)===C.type){n(f,C.sibling),a=i(C,d.props),a.ref=Zn(f,C,d),a.return=f,f=a;break e}n(f,C);break}else t(f,C);C=C.sibling}d.type===an?(a=Xt(d.props.children,f.mode,v,d.key),a.return=f,f=a):(v=gi(d.type,d.key,d.props,null,f.mode,v),v.ref=Zn(f,a,d),v.return=f,f=v)}return l(f);case sn:e:{for(C=d.key;a!==null;){if(a.key===C)if(a.tag===4&&a.stateNode.containerInfo===d.containerInfo&&a.stateNode.implementation===d.implementation){n(f,a.sibling),a=i(a,d.children||[]),a.return=f,f=a;break e}else{n(f,a);break}else t(f,a);a=a.sibling}a=Go(d,f.mode,v),a.return=f,f=a}return l(f);case vt:return C=d._init,T(f,a,C(d._payload),v)}if(er(d))return x(f,a,d,v);if(Qn(d))return k(f,a,d,v);qr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,a!==null&&a.tag===6?(n(f,a.sibling),a=i(a,d),a.return=f,f=a):(n(f,a),a=Ko(d,f.mode,v),a.return=f,f=a),l(f)):n(f,a)}return T}var Ln=Fc(!0),Uc=Fc(!1),$i=$t(null),Mi=null,vn=null,Su=null;function ku(){Su=vn=Mi=null}function Cu(e){var t=$i.current;V($i),e._currentValue=t}function Pl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){Mi=e,Su=vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(Su!==e)if(e={context:e,memoizedValue:t,next:null},vn===null){if(Mi===null)throw Error(S(308));vn=e,Mi.dependencies={lanes:0,firstContext:e}}else vn=vn.next=e;return t}var Qt=null;function Eu(e){Qt===null?Qt=[e]:Qt.push(e)}function Bc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Eu(t)):(n.next=i.next,i.next=n),t.interleaved=n,at(e,r)}function at(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function _u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,at(e,n)}return i=r.interleaved,i===null?(t.next=t,Eu(r)):(t.next=i.next,i.next=t),r.interleaved=t,at(e,n)}function ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cu(e,n)}}function $s(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Di(e,t,n,r){var i=e.updateQueue;yt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var s=u,c=s.next;s.next=null,l===null?o=c:l.next=c,l=s;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==l&&(u===null?m.firstBaseUpdate=c:u.next=c,m.lastBaseUpdate=s))}if(o!==null){var h=i.baseState;l=0,m=c=s=null,u=o;do{var p=u.lane,y=u.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=e,k=u;switch(p=t,y=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){h=x.call(y,h,p);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,p=typeof x=="function"?x.call(y,h,p):x,p==null)break e;h=G({},h,p);break e;case 2:yt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[u]:p.push(u))}else y={eventTime:y,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(c=m=y,s=h):m=m.next=y,l|=p;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(m===null&&(s=h),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);tn|=l,e.lanes=l,e.memoizedState=h}}function Ms(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Mr={},be=$t(Mr),_r=$t(Mr),zr=$t(Mr);function Yt(e){if(e===Mr)throw Error(S(174));return e}function zu(e,t){switch(B(zr,t),B(_r,e),B(be,Mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sl(t,e)}V(be),B(be,t)}function Tn(){V(be),V(_r),V(zr)}function Wc(e){Yt(zr.current);var t=Yt(be.current),n=sl(t,e.type);t!==n&&(B(_r,e),B(be,n))}function Nu(e){_r.current===e&&(V(be),V(_r))}var Y=$t(0);function Ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bo=[];function Pu(){for(var e=0;e<Bo.length;e++)Bo[e]._workInProgressVersionPrimary=null;Bo.length=0}var fi=ft.ReactCurrentDispatcher,Ho=ft.ReactCurrentBatchConfig,en=0,K=null,b=null,te=null,Fi=!1,ar=!1,Nr=0,l0=0;function ue(){throw Error(S(321))}function ju(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function Lu(e,t,n,r,i,o){if(en=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fi.current=e===null||e.memoizedState===null?c0:f0,e=n(r,i),ar){o=0;do{if(ar=!1,Nr=0,25<=o)throw Error(S(301));o+=1,te=b=null,t.updateQueue=null,fi.current=d0,e=n(r,i)}while(ar)}if(fi.current=Ui,t=b!==null&&b.next!==null,en=0,te=b=K=null,Fi=!1,t)throw Error(S(300));return e}function Tu(){var e=Nr!==0;return Nr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?K.memoizedState=te=e:te=te.next=e,te}function De(){if(b===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=b.next;var t=te===null?K.memoizedState:te.next;if(t!==null)te=t,b=e;else{if(e===null)throw Error(S(310));b=e,e={memoizedState:b.memoizedState,baseState:b.baseState,baseQueue:b.baseQueue,queue:b.queue,next:null},te===null?K.memoizedState=te=e:te=te.next=e}return te}function Pr(e,t){return typeof t=="function"?t(e):t}function Wo(e){var t=De(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=b,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,s=null,c=o;do{var m=c.lane;if((en&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=h,l=r):s=s.next=h,K.lanes|=m,tn|=m}c=c.next}while(c!==null&&c!==o);s===null?l=r:s.next=u,Ke(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vo(e){var t=De(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ke(o,t.memoizedState)||(ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Vc(){}function Qc(e,t){var n=K,r=De(),i=t(),o=!Ke(r.memoizedState,i);if(o&&(r.memoizedState=i,ve=!0),r=r.queue,Ou(Gc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,jr(9,Kc.bind(null,n,r,i,t),void 0,null),re===null)throw Error(S(349));en&30||Yc(n,t,i)}return i}function Yc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kc(e,t,n,r){t.value=n,t.getSnapshot=r,Xc(t)&&Zc(e)}function Gc(e,t,n){return n(function(){Xc(t)&&Zc(e)})}function Xc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Zc(e){var t=at(e,1);t!==null&&Qe(t,e,1,-1)}function Ds(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:e},t.queue=e,e=e.dispatch=a0.bind(null,K,e),[t.memoizedState,e]}function jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jc(){return De().memoizedState}function di(e,t,n,r){var i=Xe();K.flags|=e,i.memoizedState=jr(1|t,n,void 0,r===void 0?null:r)}function oo(e,t,n,r){var i=De();r=r===void 0?null:r;var o=void 0;if(b!==null){var l=b.memoizedState;if(o=l.destroy,r!==null&&ju(r,l.deps)){i.memoizedState=jr(t,n,o,r);return}}K.flags|=e,i.memoizedState=jr(1|t,n,o,r)}function As(e,t){return di(8390656,8,e,t)}function Ou(e,t){return oo(2048,8,e,t)}function qc(e,t){return oo(4,2,e,t)}function bc(e,t){return oo(4,4,e,t)}function ef(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tf(e,t,n){return n=n!=null?n.concat([e]):null,oo(4,4,ef.bind(null,t,e),n)}function Iu(){}function nf(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ju(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rf(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ju(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function of(e,t,n){return en&21?(Ke(n,t)||(n=ac(),K.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function u0(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Ho.transition;Ho.transition={};try{e(!1),t()}finally{M=n,Ho.transition=r}}function lf(){return De().memoizedState}function s0(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uf(e))sf(t,n);else if(n=Bc(e,t,n,r),n!==null){var i=pe();Qe(n,e,r,i),af(n,t,r)}}function a0(e,t,n){var r=Lt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uf(e))sf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,u=o(l,n);if(i.hasEagerState=!0,i.eagerState=u,Ke(u,l)){var s=t.interleaved;s===null?(i.next=i,Eu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Bc(e,t,i,r),n!==null&&(i=pe(),Qe(n,e,r,i),af(n,t,r))}}function uf(e){var t=e.alternate;return e===K||t!==null&&t===K}function sf(e,t){ar=Fi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function af(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cu(e,n)}}var Ui={readContext:Me,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},c0={readContext:Me,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:As,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,di(4194308,4,ef.bind(null,t,e),n)},useLayoutEffect:function(e,t){return di(4194308,4,e,t)},useInsertionEffect:function(e,t){return di(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=s0.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:Ds,useDebugValue:Iu,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=Ds(!1),t=e[0];return e=u0.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=Xe();if(Q){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),re===null)throw Error(S(349));en&30||Yc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,As(Gc.bind(null,r,o,e),[e]),r.flags|=2048,jr(9,Kc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Xe(),t=re.identifierPrefix;if(Q){var n=ot,r=it;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=l0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},f0={readContext:Me,useCallback:nf,useContext:Me,useEffect:Ou,useImperativeHandle:tf,useInsertionEffect:qc,useLayoutEffect:bc,useMemo:rf,useReducer:Wo,useRef:Jc,useState:function(){return Wo(Pr)},useDebugValue:Iu,useDeferredValue:function(e){var t=De();return of(t,b.memoizedState,e)},useTransition:function(){var e=Wo(Pr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Vc,useSyncExternalStore:Qc,useId:lf,unstable_isNewReconciler:!1},d0={readContext:Me,useCallback:nf,useContext:Me,useEffect:Ou,useImperativeHandle:tf,useInsertionEffect:qc,useLayoutEffect:bc,useMemo:rf,useReducer:Vo,useRef:Jc,useState:function(){return Vo(Pr)},useDebugValue:Iu,useDeferredValue:function(e){var t=De();return b===null?t.memoizedState=e:of(t,b.memoizedState,e)},useTransition:function(){var e=Vo(Pr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Vc,useSyncExternalStore:Qc,useId:lf,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function jl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var lo={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),i=Lt(e),o=lt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Pt(e,o,i),t!==null&&(Qe(t,e,i,r),ci(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),i=Lt(e),o=lt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Pt(e,o,i),t!==null&&(Qe(t,e,i,r),ci(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=Lt(e),i=lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Pt(e,i,r),t!==null&&(Qe(t,e,r,n),ci(t,e,r))}};function Fs(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,r)||!Sr(i,o):!0}function cf(e,t,n){var r=!1,i=It,o=t.contextType;return typeof o=="object"&&o!==null?o=Me(o):(i=we(t)?qt:fe.current,r=t.contextTypes,o=(r=r!=null)?Pn(e,i):It),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=lo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&lo.enqueueReplaceState(t,t.state,null)}function Ll(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},_u(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Me(o):(o=we(t)?qt:fe.current,i.context=Pn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(jl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&lo.enqueueReplaceState(i,i.state,null),Di(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function On(e,t){try{var n="",r=t;do n+=Ud(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Qo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Tl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var p0=typeof WeakMap=="function"?WeakMap:Map;function ff(e,t,n){n=lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hi||(Hi=!0,Bl=r),Tl(e,t)},n}function df(e,t,n){n=lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Tl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Tl(e,t),typeof r!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Bs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new p0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=N0.bind(null,e,t,n),t.then(e,e))}function Hs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ws(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lt(-1,1),t.tag=2,Pt(n,t,1))),n.lanes|=1),e)}var h0=ft.ReactCurrentOwner,ve=!1;function de(e,t,n,r){t.child=e===null?Uc(t,null,n,r):Ln(t,e.child,n,r)}function Vs(e,t,n,r,i){n=n.render;var o=t.ref;return _n(t,i),r=Lu(e,t,n,r,o,i),n=Tu(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(Q&&n&&yu(t),t.flags|=1,de(e,t,r,i),t.child)}function Qs(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Bu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,pf(e,t,o,r,i)):(e=gi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Sr,n(l,r)&&e.ref===t.ref)return ct(e,t,i)}return t.flags|=1,e=Tt(o,r),e.ref=t.ref,e.return=t,t.child=e}function pf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Sr(o,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,ct(e,t,i)}return Ol(e,t,n,r,i)}function hf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(xn,_e),_e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(xn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(xn,_e),_e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,B(xn,_e),_e|=r;return de(e,t,i,n),t.child}function mf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ol(e,t,n,r,i){var o=we(n)?qt:fe.current;return o=Pn(t,o),_n(t,i),n=Lu(e,t,n,r,o,i),r=Tu(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ct(e,t,i)):(Q&&r&&yu(t),t.flags|=1,de(e,t,n,i),t.child)}function Ys(e,t,n,r,i){if(we(n)){var o=!0;Oi(t)}else o=!1;if(_n(t,i),t.stateNode===null)pi(e,t),cf(t,n,r),Ll(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Me(c):(c=we(n)?qt:fe.current,c=Pn(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||s!==c)&&Us(t,l,r,c),yt=!1;var p=t.memoizedState;l.state=p,Di(t,r,l,i),s=t.memoizedState,u!==r||p!==s||xe.current||yt?(typeof m=="function"&&(jl(t,n,m,r),s=t.memoizedState),(u=yt||Fs(t,n,u,r,p,s,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Hc(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Be(t.type,u),l.props=c,h=t.pendingProps,p=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Me(s):(s=we(n)?qt:fe.current,s=Pn(t,s));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==h||p!==s)&&Us(t,l,r,s),yt=!1,p=t.memoizedState,l.state=p,Di(t,r,l,i);var x=t.memoizedState;u!==h||p!==x||xe.current||yt?(typeof y=="function"&&(jl(t,n,y,r),x=t.memoizedState),(c=yt||Fs(t,n,c,r,p,x,s)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Il(e,t,n,r,o,i)}function Il(e,t,n,r,i,o){mf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ts(t,n,!1),ct(e,t,o);r=t.stateNode,h0.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ln(t,e.child,null,o),t.child=Ln(t,null,u,o)):de(e,t,u,o),t.memoizedState=r.state,i&&Ts(t,n,!0),t.child}function gf(e){var t=e.stateNode;t.pendingContext?Ls(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ls(e,t.context,!1),zu(e,t.containerInfo)}function Ks(e,t,n,r,i){return jn(),wu(i),t.flags|=256,de(e,t,n,r),t.child}var Rl={dehydrated:null,treeContext:null,retryLane:0};function $l(e){return{baseLanes:e,cachePool:null,transitions:null}}function vf(e,t,n){var r=t.pendingProps,i=Y.current,o=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(Y,i&1),e===null)return Nl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ao(l,r,0,null),e=Xt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$l(n),t.memoizedState=Rl,e):Ru(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return m0(e,t,l,r,u,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,u=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Tt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=Tt(u,o):(o=Xt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?$l(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Rl,r}return o=e.child,e=o.sibling,r=Tt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ru(e,t){return t=ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function br(e,t,n,r){return r!==null&&wu(r),Ln(t,e.child,null,n),e=Ru(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function m0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Qo(Error(S(422))),br(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ao({mode:"visible",children:r.children},i,0,null),o=Xt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ln(t,e.child,null,l),t.child.memoizedState=$l(l),t.memoizedState=Rl,o);if(!(t.mode&1))return br(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(S(419)),r=Qo(o,r,void 0),br(e,t,l,r)}if(u=(l&e.childLanes)!==0,ve||u){if(r=re,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,at(e,i),Qe(r,e,i,-1))}return Uu(),r=Qo(Error(S(421))),br(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=P0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Nt(i.nextSibling),Ne=t,Q=!0,We=null,e!==null&&(Te[Oe++]=it,Te[Oe++]=ot,Te[Oe++]=bt,it=e.id,ot=e.overflow,bt=t),t=Ru(t,r.children),t.flags|=4096,t)}function Gs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pl(e.return,t,n)}function Yo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function yf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(de(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gs(e,n,t);else if(e.tag===19)Gs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ai(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Yo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ai(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Yo(t,!0,n,null,o);break;case"together":Yo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function g0(e,t,n){switch(t.tag){case 3:gf(t),jn();break;case 5:Wc(t);break;case 1:we(t.type)&&Oi(t);break;case 4:zu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B($i,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?vf(e,t,n):(B(Y,Y.current&1),e=ct(e,t,n),e!==null?e.sibling:null);B(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,hf(e,t,n)}return ct(e,t,n)}var xf,Ml,wf,Sf;xf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ml=function(){};wf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yt(be.current);var o=null;switch(n){case"input":i=il(e,i),r=il(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=ul(e,i),r=ul(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Li)}al(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var u=i[c];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(hr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(u=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(l in u)!u.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&u[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(hr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&H("scroll",e),o||u===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Sf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Jn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function v0(e,t,n){var r=t.pendingProps;switch(xu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return we(t.type)&&Ti(),se(t),null;case 3:return r=t.stateNode,Tn(),V(xe),V(fe),Pu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(Vl(We),We=null))),Ml(e,t),se(t),null;case 5:Nu(t);var i=Yt(zr.current);if(n=t.type,e!==null&&t.stateNode!=null)wf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return se(t),null}if(e=Yt(be.current),Jr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Je]=t,r[Er]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<nr.length;i++)H(nr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":rs(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":os(r,o),H("invalid",r)}al(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Zr(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Zr(r.textContent,u,e),i=["children",""+u]):hr.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&H("scroll",r)}switch(n){case"input":Hr(r),is(r,o,!0);break;case"textarea":Hr(r),ls(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Li)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ga(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Je]=t,e[Er]=r,xf(e,t,!1,!1),t.stateNode=e;e:{switch(l=cl(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<nr.length;i++)H(nr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":rs(e,r),i=il(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),H("invalid",e);break;case"textarea":os(e,r),i=ul(e,r),H("invalid",e);break;default:i=r}al(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var s=u[o];o==="style"?Ja(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Xa(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&mr(e,s):typeof s=="number"&&mr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(hr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&H("scroll",e):s!=null&&iu(e,o,s,l))}switch(n){case"input":Hr(e),is(e,r,!1);break;case"textarea":Hr(e),ls(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ot(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Sn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Li)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Sf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Yt(zr.current),Yt(be.current),Jr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return se(t),null;case 13:if(V(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&ze!==null&&t.mode&1&&!(t.flags&128))Ac(),jn(),t.flags|=98560,o=!1;else if(o=Jr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[Je]=t}else jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else We!==null&&(Vl(We),We=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ee===0&&(ee=3):Uu())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return Tn(),Ml(e,t),e===null&&kr(t.stateNode.containerInfo),se(t),null;case 10:return Cu(t.type._context),se(t),null;case 17:return we(t.type)&&Ti(),se(t),null;case 19:if(V(Y),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Jn(o,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ai(e),l!==null){for(t.flags|=128,Jn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Y,Y.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>In&&(t.flags|=128,r=!0,Jn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ai(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Jn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Q)return se(t),null}else 2*Z()-o.renderingStartTime>In&&n!==1073741824&&(t.flags|=128,r=!0,Jn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=Y.current,B(Y,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Fu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function y0(e,t){switch(xu(t),t.tag){case 1:return we(t.type)&&Ti(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),V(xe),V(fe),Pu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Nu(t),null;case 13:if(V(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Y),null;case 4:return Tn(),null;case 10:return Cu(t.type._context),null;case 22:case 23:return Fu(),null;case 24:return null;default:return null}}var ei=!1,ae=!1,x0=typeof WeakSet=="function"?WeakSet:Set,z=null;function yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Dl(e,t,n){try{n()}catch(r){X(e,t,r)}}var Xs=!1;function w0(e,t){if(wl=Ni,e=_c(),vu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,s=-1,c=0,m=0,h=e,p=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(u=l+i),h!==o||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===e)break t;if(p===n&&++c===i&&(u=l),p===o&&++m===r&&(s=l),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sl={focusedElem:e,selectionRange:n},Ni=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,T=x.memoizedState,f=t.stateNode,a=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Be(t.type,k),T);f.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){X(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return x=Xs,Xs=!1,x}function cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Dl(t,n,o)}i=i.next}while(i!==r)}}function uo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Al(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kf(e){var t=e.alternate;t!==null&&(e.alternate=null,kf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[Er],delete t[El],delete t[n0],delete t[r0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cf(e){return e.tag===5||e.tag===3||e.tag===4}function Zs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Li));else if(r!==4&&(e=e.child,e!==null))for(Fl(e,t,n),e=e.sibling;e!==null;)Fl(e,t,n),e=e.sibling}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}var ie=null,He=!1;function mt(e,t,n){for(n=n.child;n!==null;)Ef(e,t,n),n=n.sibling}function Ef(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(bi,n)}catch{}switch(n.tag){case 5:ae||yn(n,t);case 6:var r=ie,i=He;ie=null,mt(e,t,n),ie=r,He=i,ie!==null&&(He?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(He?(e=ie,n=n.stateNode,e.nodeType===8?Fo(e.parentNode,n):e.nodeType===1&&Fo(e,n),xr(e)):Fo(ie,n.stateNode));break;case 4:r=ie,i=He,ie=n.stateNode.containerInfo,He=!0,mt(e,t,n),ie=r,He=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Dl(n,t,l),i=i.next}while(i!==r)}mt(e,t,n);break;case 1:if(!ae&&(yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){X(n,t,u)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,mt(e,t,n),ae=r):mt(e,t,n);break;default:mt(e,t,n)}}function Js(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new x0),t.forEach(function(r){var i=j0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:ie=u.stateNode,He=!1;break e;case 3:ie=u.stateNode.containerInfo,He=!0;break e;case 4:ie=u.stateNode.containerInfo,He=!0;break e}u=u.return}if(ie===null)throw Error(S(160));Ef(o,l,i),ie=null,He=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){X(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_f(t,e),t=t.sibling}function _f(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ge(e),r&4){try{cr(3,e,e.return),uo(3,e)}catch(k){X(e,e.return,k)}try{cr(5,e,e.return)}catch(k){X(e,e.return,k)}}break;case 1:Ue(t,e),Ge(e),r&512&&n!==null&&yn(n,n.return);break;case 5:if(Ue(t,e),Ge(e),r&512&&n!==null&&yn(n,n.return),e.flags&32){var i=e.stateNode;try{mr(i,"")}catch(k){X(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Ya(i,o),cl(u,l);var c=cl(u,o);for(l=0;l<s.length;l+=2){var m=s[l],h=s[l+1];m==="style"?Ja(i,h):m==="dangerouslySetInnerHTML"?Xa(i,h):m==="children"?mr(i,h):iu(i,m,h,c)}switch(u){case"input":ol(i,o);break;case"textarea":Ka(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Sn(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?Sn(i,!!o.multiple,o.defaultValue,!0):Sn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Er]=o}catch(k){X(e,e.return,k)}}break;case 6:if(Ue(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){X(e,e.return,k)}}break;case 3:if(Ue(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xr(t.containerInfo)}catch(k){X(e,e.return,k)}break;case 4:Ue(t,e),Ge(e);break;case 13:Ue(t,e),Ge(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Du=Z())),r&4&&Js(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(c=ae)||m,Ue(t,e),ae=c):Ue(t,e),Ge(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(z=e,m=e.child;m!==null;){for(h=z=m;z!==null;){switch(p=z,y=p.child,p.tag){case 0:case 11:case 14:case 15:cr(4,p,p.return);break;case 1:yn(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){X(r,n,k)}}break;case 5:yn(p,p.return);break;case 22:if(p.memoizedState!==null){bs(h);continue}}y!==null?(y.return=p,z=y):bs(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=Za("display",l))}catch(k){X(e,e.return,k)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){X(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ue(t,e),Ge(e),r&4&&Js(e);break;case 21:break;default:Ue(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mr(i,""),r.flags&=-33);var o=Zs(e);Ul(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=Zs(e);Fl(e,u,l);break;default:throw Error(S(161))}}catch(s){X(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function S0(e,t,n){z=e,zf(e)}function zf(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ei;if(!l){var u=i.alternate,s=u!==null&&u.memoizedState!==null||ae;u=ei;var c=ae;if(ei=l,(ae=s)&&!c)for(z=i;z!==null;)l=z,s=l.child,l.tag===22&&l.memoizedState!==null?ea(i):s!==null?(s.return=l,z=s):ea(i);for(;o!==null;)z=o,zf(o),o=o.sibling;z=i,ei=u,ae=c}qs(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):qs(e)}}function qs(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||uo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ms(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ms(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&xr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ae||t.flags&512&&Al(t)}catch(p){X(t,t.return,p)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function bs(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function ea(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{uo(4,t)}catch(s){X(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){X(t,i,s)}}var o=t.return;try{Al(t)}catch(s){X(t,o,s)}break;case 5:var l=t.return;try{Al(t)}catch(s){X(t,l,s)}}}catch(s){X(t,t.return,s)}if(t===e){z=null;break}var u=t.sibling;if(u!==null){u.return=t.return,z=u;break}z=t.return}}var k0=Math.ceil,Bi=ft.ReactCurrentDispatcher,$u=ft.ReactCurrentOwner,$e=ft.ReactCurrentBatchConfig,R=0,re=null,q=null,oe=0,_e=0,xn=$t(0),ee=0,Lr=null,tn=0,so=0,Mu=0,fr=null,ge=null,Du=0,In=1/0,tt=null,Hi=!1,Bl=null,jt=null,ti=!1,kt=null,Wi=0,dr=0,Hl=null,hi=-1,mi=0;function pe(){return R&6?Z():hi!==-1?hi:hi=Z()}function Lt(e){return e.mode&1?R&2&&oe!==0?oe&-oe:o0.transition!==null?(mi===0&&(mi=ac()),mi):(e=M,e!==0||(e=window.event,e=e===void 0?16:gc(e.type)),e):1}function Qe(e,t,n,r){if(50<dr)throw dr=0,Hl=null,Error(S(185));Ir(e,n,r),(!(R&2)||e!==re)&&(e===re&&(!(R&2)&&(so|=n),ee===4&&wt(e,oe)),Se(e,r),n===1&&R===0&&!(t.mode&1)&&(In=Z()+500,io&&Mt()))}function Se(e,t){var n=e.callbackNode;op(e,t);var r=zi(e,e===re?oe:0);if(r===0)n!==null&&as(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&as(n),t===1)e.tag===0?i0(ta.bind(null,e)):$c(ta.bind(null,e)),e0(function(){!(R&6)&&Mt()}),n=null;else{switch(cc(r)){case 1:n=au;break;case 4:n=uc;break;case 16:n=_i;break;case 536870912:n=sc;break;default:n=_i}n=Rf(n,Nf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nf(e,t){if(hi=-1,mi=0,R&6)throw Error(S(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=zi(e,e===re?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Vi(e,r);else{t=r;var i=R;R|=2;var o=jf();(re!==e||oe!==t)&&(tt=null,In=Z()+500,Gt(e,t));do try{_0();break}catch(u){Pf(e,u)}while(!0);ku(),Bi.current=o,R=i,q!==null?t=0:(re=null,oe=0,t=ee)}if(t!==0){if(t===2&&(i=ml(e),i!==0&&(r=i,t=Wl(e,i))),t===1)throw n=Lr,Gt(e,0),wt(e,r),Se(e,Z()),n;if(t===6)wt(e,r);else{if(i=e.current.alternate,!(r&30)&&!C0(i)&&(t=Vi(e,r),t===2&&(o=ml(e),o!==0&&(r=o,t=Wl(e,o))),t===1))throw n=Lr,Gt(e,0),wt(e,r),Se(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Wt(e,ge,tt);break;case 3:if(wt(e,r),(r&130023424)===r&&(t=Du+500-Z(),10<t)){if(zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Cl(Wt.bind(null,e,ge,tt),t);break}Wt(e,ge,tt);break;case 4:if(wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ve(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*k0(r/1960))-r,10<r){e.timeoutHandle=Cl(Wt.bind(null,e,ge,tt),r);break}Wt(e,ge,tt);break;case 5:Wt(e,ge,tt);break;default:throw Error(S(329))}}}return Se(e,Z()),e.callbackNode===n?Nf.bind(null,e):null}function Wl(e,t){var n=fr;return e.current.memoizedState.isDehydrated&&(Gt(e,t).flags|=256),e=Vi(e,t),e!==2&&(t=ge,ge=n,t!==null&&Vl(t)),e}function Vl(e){ge===null?ge=e:ge.push.apply(ge,e)}function C0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ke(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~Mu,t&=~so,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function ta(e){if(R&6)throw Error(S(327));zn();var t=zi(e,0);if(!(t&1))return Se(e,Z()),null;var n=Vi(e,t);if(e.tag!==0&&n===2){var r=ml(e);r!==0&&(t=r,n=Wl(e,r))}if(n===1)throw n=Lr,Gt(e,0),wt(e,t),Se(e,Z()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,ge,tt),Se(e,Z()),null}function Au(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(In=Z()+500,io&&Mt())}}function nn(e){kt!==null&&kt.tag===0&&!(R&6)&&zn();var t=R;R|=1;var n=$e.transition,r=M;try{if($e.transition=null,M=1,e)return e()}finally{M=r,$e.transition=n,R=t,!(R&6)&&Mt()}}function Fu(){_e=xn.current,V(xn)}function Gt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bp(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ti();break;case 3:Tn(),V(xe),V(fe),Pu();break;case 5:Nu(r);break;case 4:Tn();break;case 13:V(Y);break;case 19:V(Y);break;case 10:Cu(r.type._context);break;case 22:case 23:Fu()}n=n.return}if(re=e,q=e=Tt(e.current,null),oe=_e=t,ee=0,Lr=null,Mu=so=tn=0,ge=fr=null,Qt!==null){for(t=0;t<Qt.length;t++)if(n=Qt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Qt=null}return e}function Pf(e,t){do{var n=q;try{if(ku(),fi.current=Ui,Fi){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fi=!1}if(en=0,te=b=K=null,ar=!1,Nr=0,$u.current=null,n===null||n.return===null){ee=1,Lr=t,q=null;break}e:{var o=e,l=n.return,u=n,s=t;if(t=oe,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=u,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Hs(l);if(y!==null){y.flags&=-257,Ws(y,l,u,o,t),y.mode&1&&Bs(o,c,t),t=y,s=c;var x=t.updateQueue;if(x===null){var k=new Set;k.add(s),t.updateQueue=k}else x.add(s);break e}else{if(!(t&1)){Bs(o,c,t),Uu();break e}s=Error(S(426))}}else if(Q&&u.mode&1){var T=Hs(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Ws(T,l,u,o,t),wu(On(s,u));break e}}o=s=On(s,u),ee!==4&&(ee=2),fr===null?fr=[o]:fr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=ff(o,s,t);$s(o,f);break e;case 1:u=s;var a=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(jt===null||!jt.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=df(o,u,t);$s(o,v);break e}}o=o.return}while(o!==null)}Tf(n)}catch(E){t=E,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function jf(){var e=Bi.current;return Bi.current=Ui,e===null?Ui:e}function Uu(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||!(tn&268435455)&&!(so&268435455)||wt(re,oe)}function Vi(e,t){var n=R;R|=2;var r=jf();(re!==e||oe!==t)&&(tt=null,Gt(e,t));do try{E0();break}catch(i){Pf(e,i)}while(!0);if(ku(),R=n,Bi.current=r,q!==null)throw Error(S(261));return re=null,oe=0,ee}function E0(){for(;q!==null;)Lf(q)}function _0(){for(;q!==null&&!Zd();)Lf(q)}function Lf(e){var t=If(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?Tf(e):q=t,$u.current=null}function Tf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=y0(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,q=null;return}}else if(n=v0(n,t,_e),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);ee===0&&(ee=5)}function Wt(e,t,n){var r=M,i=$e.transition;try{$e.transition=null,M=1,z0(e,t,n,r)}finally{$e.transition=i,M=r}return null}function z0(e,t,n,r){do zn();while(kt!==null);if(R&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(lp(e,o),e===re&&(q=re=null,oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ti||(ti=!0,Rf(_i,function(){return zn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$e.transition,$e.transition=null;var l=M;M=1;var u=R;R|=4,$u.current=null,w0(e,n),_f(n,e),Yp(Sl),Ni=!!wl,Sl=wl=null,e.current=n,S0(n),Jd(),R=u,M=l,$e.transition=o}else e.current=n;if(ti&&(ti=!1,kt=e,Wi=i),o=e.pendingLanes,o===0&&(jt=null),ep(n.stateNode),Se(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hi)throw Hi=!1,e=Bl,Bl=null,e;return Wi&1&&e.tag!==0&&zn(),o=e.pendingLanes,o&1?e===Hl?dr++:(dr=0,Hl=e):dr=0,Mt(),null}function zn(){if(kt!==null){var e=cc(Wi),t=$e.transition,n=M;try{if($e.transition=null,M=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,Wi=0,R&6)throw Error(S(331));var i=R;for(R|=4,z=e.current;z!==null;){var o=z,l=o.child;if(z.flags&16){var u=o.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(z=c;z!==null;){var m=z;switch(m.tag){case 0:case 11:case 15:cr(8,m,o)}var h=m.child;if(h!==null)h.return=m,z=h;else for(;z!==null;){m=z;var p=m.sibling,y=m.return;if(kf(m),m===c){z=null;break}if(p!==null){p.return=y,z=p;break}z=y}}}var x=o.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var T=k.sibling;k.sibling=null,k=T}while(k!==null)}}z=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,z=l;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:cr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,z=f;break e}z=o.return}}var a=e.current;for(z=a;z!==null;){l=z;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,z=d;else e:for(l=a;z!==null;){if(u=z,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:uo(9,u)}}catch(E){X(u,u.return,E)}if(u===l){z=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,z=v;break e}z=u.return}}if(R=i,Mt(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(bi,e)}catch{}r=!0}return r}finally{M=n,$e.transition=t}}return!1}function na(e,t,n){t=On(n,t),t=ff(e,t,1),e=Pt(e,t,1),t=pe(),e!==null&&(Ir(e,1,t),Se(e,t))}function X(e,t,n){if(e.tag===3)na(e,e,n);else for(;t!==null;){if(t.tag===3){na(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jt===null||!jt.has(r))){e=On(n,e),e=df(t,e,1),t=Pt(t,e,1),e=pe(),t!==null&&(Ir(t,1,e),Se(t,e));break}}t=t.return}}function N0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(oe&n)===n&&(ee===4||ee===3&&(oe&130023424)===oe&&500>Z()-Du?Gt(e,0):Mu|=n),Se(e,t)}function Of(e,t){t===0&&(e.mode&1?(t=Qr,Qr<<=1,!(Qr&130023424)&&(Qr=4194304)):t=1);var n=pe();e=at(e,t),e!==null&&(Ir(e,t,n),Se(e,n))}function P0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Of(e,n)}function j0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Of(e,n)}var If;If=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,g0(e,t,n);ve=!!(e.flags&131072)}else ve=!1,Q&&t.flags&1048576&&Mc(t,Ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;pi(e,t),e=t.pendingProps;var i=Pn(t,fe.current);_n(t,n),i=Lu(null,t,r,e,i,n);var o=Tu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(o=!0,Oi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_u(t),i.updater=lo,t.stateNode=i,i._reactInternals=t,Ll(t,r,e,n),t=Il(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&yu(t),de(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(pi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=T0(r),e=Be(r,e),i){case 0:t=Ol(null,t,r,e,n);break e;case 1:t=Ys(null,t,r,e,n);break e;case 11:t=Vs(null,t,r,e,n);break e;case 14:t=Qs(null,t,r,Be(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Ol(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Ys(e,t,r,i,n);case 3:e:{if(gf(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Hc(e,t),Di(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=On(Error(S(423)),t),t=Ks(e,t,r,n,i);break e}else if(r!==i){i=On(Error(S(424)),t),t=Ks(e,t,r,n,i);break e}else for(ze=Nt(t.stateNode.containerInfo.firstChild),Ne=t,Q=!0,We=null,n=Uc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),r===i){t=ct(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return Wc(t),e===null&&Nl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,kl(r,i)?l=null:o!==null&&kl(r,o)&&(t.flags|=32),mf(e,t),de(e,t,l,n),t.child;case 6:return e===null&&Nl(t),null;case 13:return vf(e,t,n);case 4:return zu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ln(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Vs(e,t,r,i,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,B($i,r._currentValue),r._currentValue=l,o!==null)if(Ke(o.value,l)){if(o.children===i.children&&!xe.current){t=ct(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=lt(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Pl(o.return,n,t),u.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Pl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}de(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_n(t,n),i=Me(i),r=r(i),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,i=Be(r,t.pendingProps),i=Be(r.type,i),Qs(e,t,r,i,n);case 15:return pf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),pi(e,t),t.tag=1,we(r)?(e=!0,Oi(t)):e=!1,_n(t,n),cf(t,r,i),Ll(t,r,i,n),Il(null,t,r,!0,e,n);case 19:return yf(e,t,n);case 22:return hf(e,t,n)}throw Error(S(156,t.tag))};function Rf(e,t){return lc(e,t)}function L0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new L0(e,t,n,r)}function Bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function T0(e){if(typeof e=="function")return Bu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===lu)return 11;if(e===uu)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function gi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Bu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case an:return Xt(n.children,i,o,t);case ou:l=8,i|=8;break;case el:return e=Ie(12,n,t,i|2),e.elementType=el,e.lanes=o,e;case tl:return e=Ie(13,n,t,i),e.elementType=tl,e.lanes=o,e;case nl:return e=Ie(19,n,t,i),e.elementType=nl,e.lanes=o,e;case Wa:return ao(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ba:l=10;break e;case Ha:l=9;break e;case lu:l=11;break e;case uu:l=14;break e;case vt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ie(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Xt(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function ao(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=Wa,e.lanes=n,e.stateNode={isHidden:!1},e}function Ko(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function Go(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function O0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Po(0),this.expirationTimes=Po(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Po(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hu(e,t,n,r,i,o,l,u,s){return e=new O0(e,t,n,u,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ie(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_u(o),e}function I0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $f(e){if(!e)return It;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(we(n))return Rc(e,n,t)}return t}function Mf(e,t,n,r,i,o,l,u,s){return e=Hu(n,r,!0,e,i,o,l,u,s),e.context=$f(null),n=e.current,r=pe(),i=Lt(n),o=lt(r,i),o.callback=t??null,Pt(n,o,i),e.current.lanes=i,Ir(e,i,r),Se(e,r),e}function co(e,t,n,r){var i=t.current,o=pe(),l=Lt(i);return n=$f(n),t.context===null?t.context=n:t.pendingContext=n,t=lt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pt(i,t,l),e!==null&&(Qe(e,i,l,o),ci(e,i,l)),l}function Qi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ra(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wu(e,t){ra(e,t),(e=e.alternate)&&ra(e,t)}function R0(){return null}var Df=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vu(e){this._internalRoot=e}fo.prototype.render=Vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));co(e,t,null,null)};fo.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){co(null,e,null,null)}),t[st]=null}};function fo(e){this._internalRoot=e}fo.prototype.unstable_scheduleHydration=function(e){if(e){var t=pc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xt.length&&t!==0&&t<xt[n].priority;n++);xt.splice(n,0,e),n===0&&mc(e)}};function Qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ia(){}function $0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Qi(l);o.call(c)}}var l=Mf(t,r,e,0,null,!1,!1,"",ia);return e._reactRootContainer=l,e[st]=l.current,kr(e.nodeType===8?e.parentNode:e),nn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var c=Qi(s);u.call(c)}}var s=Hu(e,0,!1,null,null,!1,!1,"",ia);return e._reactRootContainer=s,e[st]=s.current,kr(e.nodeType===8?e.parentNode:e),nn(function(){co(t,s,n,r)}),s}function ho(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var s=Qi(l);u.call(s)}}co(t,l,e,i)}else l=$0(n,t,e,i,r);return Qi(l)}fc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tr(t.pendingLanes);n!==0&&(cu(t,n|1),Se(t,Z()),!(R&6)&&(In=Z()+500,Mt()))}break;case 13:nn(function(){var r=at(e,1);if(r!==null){var i=pe();Qe(r,e,1,i)}}),Wu(e,1)}};fu=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var n=pe();Qe(t,e,134217728,n)}Wu(e,134217728)}};dc=function(e){if(e.tag===13){var t=Lt(e),n=at(e,t);if(n!==null){var r=pe();Qe(n,e,t,r)}Wu(e,t)}};pc=function(){return M};hc=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};dl=function(e,t,n){switch(t){case"input":if(ol(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ro(r);if(!i)throw Error(S(90));Qa(r),ol(r,i)}}}break;case"textarea":Ka(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};ec=Au;tc=nn;var M0={usingClientEntryPoint:!1,Events:[$r,pn,ro,qa,ba,Au]},qn={findFiberByHostInstance:Vt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D0={bundleType:qn.bundleType,version:qn.version,rendererPackageName:qn.rendererPackageName,rendererConfig:qn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ic(e),e===null?null:e.stateNode},findFiberByHostInstance:qn.findFiberByHostInstance||R0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ni.isDisabled&&ni.supportsFiber)try{bi=ni.inject(D0),qe=ni}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(t))throw Error(S(200));return I0(e,t,null,n)};je.createRoot=function(e,t){if(!Qu(e))throw Error(S(299));var n=!1,r="",i=Df;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Hu(e,1,!1,null,null,n,!1,r,i),e[st]=t.current,kr(e.nodeType===8?e.parentNode:e),new Vu(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ic(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return nn(e)};je.hydrate=function(e,t,n){if(!po(t))throw Error(S(200));return ho(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Qu(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Df;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Mf(t,null,e,1,n??null,i,!1,o,l),e[st]=t.current,kr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new fo(t)};je.render=function(e,t,n){if(!po(t))throw Error(S(200));return ho(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!po(e))throw Error(S(40));return e._reactRootContainer?(nn(function(){ho(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};je.unstable_batchedUpdates=Au;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!po(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ho(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function Af(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af)}catch(e){console.error(e)}}Af(),Da.exports=je;var A0=Da.exports,Ff,oa=A0;Ff=oa.createRoot,oa.hydrateRoot;var ye=function(){return ye=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ye.apply(this,arguments)};function Yi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var W="-ms-",pr="-moz-",$="-webkit-",Uf="comm",mo="rule",Yu="decl",F0="@import",Bf="@keyframes",U0="@layer",Hf=Math.abs,Ku=String.fromCharCode,Ql=Object.assign;function B0(e,t){return ne(e,0)^45?(((t<<2^ne(e,0))<<2^ne(e,1))<<2^ne(e,2))<<2^ne(e,3):0}function Wf(e){return e.trim()}function nt(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function vi(e,t,n){return e.indexOf(t,n)}function ne(e,t){return e.charCodeAt(t)|0}function Rn(e,t,n){return e.slice(t,n)}function Ze(e){return e.length}function Vf(e){return e.length}function rr(e,t){return t.push(e),e}function H0(e,t){return e.map(t).join("")}function la(e,t){return e.filter(function(n){return!nt(n,t)})}var go=1,$n=1,Qf=0,Ae=0,J=0,Hn="";function vo(e,t,n,r,i,o,l,u){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:go,column:$n,length:l,return:"",siblings:u}}function gt(e,t){return Ql(vo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function un(e){for(;e.root;)e=gt(e.root,{children:[e]});rr(e,e.siblings)}function W0(){return J}function V0(){return J=Ae>0?ne(Hn,--Ae):0,$n--,J===10&&($n=1,go--),J}function Ye(){return J=Ae<Qf?ne(Hn,Ae++):0,$n++,J===10&&($n=1,go++),J}function Zt(){return ne(Hn,Ae)}function yi(){return Ae}function yo(e,t){return Rn(Hn,e,t)}function Yl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Q0(e){return go=$n=1,Qf=Ze(Hn=e),Ae=0,[]}function Y0(e){return Hn="",e}function Xo(e){return Wf(yo(Ae-1,Kl(e===91?e+2:e===40?e+1:e)))}function K0(e){for(;(J=Zt())&&J<33;)Ye();return Yl(e)>2||Yl(J)>3?"":" "}function G0(e,t){for(;--t&&Ye()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return yo(e,yi()+(t<6&&Zt()==32&&Ye()==32))}function Kl(e){for(;Ye();)switch(J){case e:return Ae;case 34:case 39:e!==34&&e!==39&&Kl(J);break;case 40:e===41&&Kl(e);break;case 92:Ye();break}return Ae}function X0(e,t){for(;Ye()&&e+J!==57;)if(e+J===84&&Zt()===47)break;return"/*"+yo(t,Ae-1)+"*"+Ku(e===47?e:Ye())}function Z0(e){for(;!Yl(Zt());)Ye();return yo(e,Ae)}function J0(e){return Y0(xi("",null,null,null,[""],e=Q0(e),0,[0],e))}function xi(e,t,n,r,i,o,l,u,s){for(var c=0,m=0,h=l,p=0,y=0,x=0,k=1,T=1,f=1,a=0,d="",v=i,E=o,C=r,w=d;T;)switch(x=a,a=Ye()){case 40:if(x!=108&&ne(w,h-1)==58){vi(w+=L(Xo(a),"&","&\f"),"&\f",Hf(c?u[c-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:w+=Xo(a);break;case 9:case 10:case 13:case 32:w+=K0(x);break;case 92:w+=G0(yi()-1,7);continue;case 47:switch(Zt()){case 42:case 47:rr(q0(X0(Ye(),yi()),t,n,s),s);break;default:w+="/"}break;case 123*k:u[c++]=Ze(w)*f;case 125*k:case 59:case 0:switch(a){case 0:case 125:T=0;case 59+m:f==-1&&(w=L(w,/\f/g,"")),y>0&&Ze(w)-h&&rr(y>32?sa(w+";",r,n,h-1,s):sa(L(w," ","")+";",r,n,h-2,s),s);break;case 59:w+=";";default:if(rr(C=ua(w,t,n,c,m,i,u,d,v=[],E=[],h,o),o),a===123)if(m===0)xi(w,t,C,C,v,o,h,u,E);else switch(p===99&&ne(w,3)===110?100:p){case 100:case 108:case 109:case 115:xi(e,C,C,r&&rr(ua(e,C,C,0,0,i,u,d,i,v=[],h,E),E),i,E,h,u,r?v:E);break;default:xi(w,C,C,C,[""],E,0,u,E)}}c=m=y=0,k=f=1,d=w="",h=l;break;case 58:h=1+Ze(w),y=x;default:if(k<1){if(a==123)--k;else if(a==125&&k++==0&&V0()==125)continue}switch(w+=Ku(a),a*k){case 38:f=m>0?1:(w+="\f",-1);break;case 44:u[c++]=(Ze(w)-1)*f,f=1;break;case 64:Zt()===45&&(w+=Xo(Ye())),p=Zt(),m=h=Ze(d=w+=Z0(yi())),a++;break;case 45:x===45&&Ze(w)==2&&(k=0)}}return o}function ua(e,t,n,r,i,o,l,u,s,c,m,h){for(var p=i-1,y=i===0?o:[""],x=Vf(y),k=0,T=0,f=0;k<r;++k)for(var a=0,d=Rn(e,p+1,p=Hf(T=l[k])),v=e;a<x;++a)(v=Wf(T>0?y[a]+" "+d:L(d,/&\f/g,y[a])))&&(s[f++]=v);return vo(e,t,n,i===0?mo:u,s,c,m,h)}function q0(e,t,n,r){return vo(e,t,n,Uf,Ku(W0()),Rn(e,2,-2),0,r)}function sa(e,t,n,r,i){return vo(e,t,n,Yu,Rn(e,0,r),Rn(e,r+1,-1),r,i)}function Yf(e,t,n){switch(B0(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 4789:return pr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+pr+e+W+e+e;case 5936:switch(ne(e,t+11)){case 114:return $+e+W+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+W+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+W+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $+e+W+e+e;case 6165:return $+e+W+"flex-"+e+e;case 5187:return $+e+L(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+W+"flex-$1$2")+e;case 5443:return $+e+W+"flex-item-"+L(e,/flex-|-self/g,"")+(nt(e,/flex-|baseline/)?"":W+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return $+e+W+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return $+e+W+L(e,"shrink","negative")+e;case 5292:return $+e+W+L(e,"basis","preferred-size")+e;case 6060:return $+"box-"+L(e,"-grow","")+$+e+W+L(e,"grow","positive")+e;case 4554:return $+L(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+W+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4200:if(!nt(e,/flex-|baseline/))return W+"grid-column-align"+Rn(e,t)+e;break;case 2592:case 3360:return W+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,nt(r.props,/grid-\w+-end/)})?~vi(e+(n=n[t].value),"span",0)?e:W+L(e,"-start","")+e+W+"grid-row-span:"+(~vi(n,"span",0)?nt(n,/\d+/):+nt(n,/\d+/)-+nt(e,/\d+/))+";":W+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return nt(r.props,/grid-\w+-start/)})?e:W+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ze(e)-1-t>6)switch(ne(e,t+1)){case 109:if(ne(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+pr+(ne(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vi(e,"stretch",0)?Yf(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,u,s,c){return W+i+":"+o+c+(l?W+i+"-span:"+(u?s:+s-+o)+c:"")+e});case 4949:if(ne(e,t+6)===121)return L(e,":",":"+$)+e;break;case 6444:switch(ne(e,ne(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$+(ne(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+W+"$2box$3")+e;case 100:return L(e,":",":"+W)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function Ki(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function b0(e,t,n,r){switch(e.type){case U0:if(e.children.length)break;case F0:case Yu:return e.return=e.return||e.value;case Uf:return"";case Bf:return e.return=e.value+"{"+Ki(e.children,r)+"}";case mo:if(!Ze(e.value=e.props.join(",")))return""}return Ze(n=Ki(e.children,r))?e.return=e.value+"{"+n+"}":""}function eh(e){var t=Vf(e);return function(n,r,i,o){for(var l="",u=0;u<t;u++)l+=e[u](n,r,i,o)||"";return l}}function th(e){return function(t){t.root||(t=t.return)&&e(t)}}function nh(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Yu:e.return=Yf(e.value,e.length,n);return;case Bf:return Ki([gt(e,{value:L(e.value,"@","@"+$)})],r);case mo:if(e.length)return H0(n=e.props,function(i){switch(nt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":un(gt(e,{props:[L(i,/:(read-\w+)/,":"+pr+"$1")]})),un(gt(e,{props:[i]})),Ql(e,{props:la(n,r)});break;case"::placeholder":un(gt(e,{props:[L(i,/:(plac\w+)/,":"+$+"input-$1")]})),un(gt(e,{props:[L(i,/:(plac\w+)/,":"+pr+"$1")]})),un(gt(e,{props:[L(i,/:(plac\w+)/,W+"input-$1")]})),un(gt(e,{props:[i]})),Ql(e,{props:la(n,r)});break}return""})}}var rh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ee={},Mn=typeof process<"u"&&Ee!==void 0&&(Ee.REACT_APP_SC_ATTR||Ee.SC_ATTR)||"data-styled",Kf="active",Gf="data-styled-version",xo="6.1.13",Gu=`/*!sc*/
`,Gi=typeof window<"u"&&"HTMLElement"in window,ih=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ee!==void 0&&Ee.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ee.REACT_APP_SC_DISABLE_SPEEDY!==""?Ee.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ee.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ee!==void 0&&Ee.SC_DISABLE_SPEEDY!==void 0&&Ee.SC_DISABLE_SPEEDY!==""&&Ee.SC_DISABLE_SPEEDY!=="false"&&Ee.SC_DISABLE_SPEEDY),wo=Object.freeze([]),Dn=Object.freeze({});function oh(e,t,n){return n===void 0&&(n=Dn),e.theme!==n.theme&&e.theme||t||n.theme}var Xf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),lh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uh=/(^-|-$)/g;function aa(e){return e.replace(lh,"-").replace(uh,"")}var sh=/(a)(d)/gi,ri=52,ca=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gl(e){var t,n="";for(t=Math.abs(e);t>ri;t=t/ri|0)n=ca(t%ri)+n;return(ca(t%ri)+n).replace(sh,"$1-$2")}var Zo,Zf=5381,wn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jf=function(e){return wn(Zf,e)};function ah(e){return Gl(Jf(e)>>>0)}function ch(e){return e.displayName||e.name||"Component"}function Jo(e){return typeof e=="string"&&!0}var qf=typeof Symbol=="function"&&Symbol.for,bf=qf?Symbol.for("react.memo"):60115,fh=qf?Symbol.for("react.forward_ref"):60112,dh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ph={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ed={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hh=((Zo={})[fh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zo[bf]=ed,Zo);function fa(e){return("type"in(t=e)&&t.type.$$typeof)===bf?ed:"$$typeof"in e?hh[e.$$typeof]:dh;var t}var mh=Object.defineProperty,gh=Object.getOwnPropertyNames,da=Object.getOwnPropertySymbols,vh=Object.getOwnPropertyDescriptor,yh=Object.getPrototypeOf,pa=Object.prototype;function td(e,t,n){if(typeof t!="string"){if(pa){var r=yh(t);r&&r!==pa&&td(e,r,n)}var i=gh(t);da&&(i=i.concat(da(t)));for(var o=fa(e),l=fa(t),u=0;u<i.length;++u){var s=i[u];if(!(s in ph||n&&n[s]||l&&s in l||o&&s in o)){var c=vh(t,s);try{mh(e,s,c)}catch{}}}}return e}function An(e){return typeof e=="function"}function Xu(e){return typeof e=="object"&&"styledComponentId"in e}function Kt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ha(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Tr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xl(e,t,n){if(n===void 0&&(n=!1),!n&&!Tr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xl(e[r],t[r]);else if(Tr(t))for(var r in t)e[r]=Xl(e[r],t[r]);return e}function Zu(e,t){Object.defineProperty(e,"toString",{value:t})}function Dr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var xh=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Dr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(u,n[l])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Gu);return n},e}(),wi=new Map,Xi=new Map,Si=1,ii=function(e){if(wi.has(e))return wi.get(e);for(;Xi.has(Si);)Si++;var t=Si++;return wi.set(e,t),Xi.set(t,e),t},wh=function(e,t){Si=t+1,wi.set(e,t),Xi.set(t,e)},Sh="style[".concat(Mn,"][").concat(Gf,'="').concat(xo,'"]'),kh=new RegExp("^".concat(Mn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ch=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Eh=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Gu),i=[],o=0,l=r.length;o<l;o++){var u=r[o].trim();if(u){var s=u.match(kh);if(s){var c=0|parseInt(s[1],10),m=s[2];c!==0&&(wh(m,c),Ch(e,m,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(u)}}},ma=function(e){for(var t=document.querySelectorAll(Sh),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Mn)!==Kf&&(Eh(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function _h(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var nd=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(u){var s=Array.from(u.querySelectorAll("style[".concat(Mn,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Mn,Kf),r.setAttribute(Gf,xo);var l=_h();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},zh=function(){function e(t){this.element=nd(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Dr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Nh=function(){function e(t){this.element=nd(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ph=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ga=Gi,jh={isServer:!Gi,useCSSOMInjection:!ih},rd=function(){function e(t,n,r){t===void 0&&(t=Dn),n===void 0&&(n={});var i=this;this.options=ye(ye({},jh),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Gi&&ga&&(ga=!1,ma(this)),Zu(this,function(){return function(o){for(var l=o.getTag(),u=l.length,s="",c=function(h){var p=function(f){return Xi.get(f)}(h);if(p===void 0)return"continue";var y=o.names.get(p),x=l.getGroup(h);if(y===void 0||!y.size||x.length===0)return"continue";var k="".concat(Mn,".g").concat(h,'[id="').concat(p,'"]'),T="";y!==void 0&&y.forEach(function(f){f.length>0&&(T+="".concat(f,","))}),s+="".concat(x).concat(k,'{content:"').concat(T,'"}').concat(Gu)},m=0;m<u;m++)c(m);return s}(i)})}return e.registerId=function(t){return ii(t)},e.prototype.rehydrate=function(){!this.server&&Gi&&ma(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ye(ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Ph(i):r?new zh(i):new Nh(i)}(this.options),new xh(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ii(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ii(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ii(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Lh=/&/g,Th=/^\s*\/\/.*$/gm;function id(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=id(n.children,t)),n})}function Oh(e){var t,n,r,i=Dn,o=i.options,l=o===void 0?Dn:o,u=i.plugins,s=u===void 0?wo:u,c=function(p,y,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):p},m=s.slice();m.push(function(p){p.type===mo&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Lh,n).replace(r,c))}),l.prefix&&m.push(nh),m.push(b0);var h=function(p,y,x,k){y===void 0&&(y=""),x===void 0&&(x=""),k===void 0&&(k="&"),t=k,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var T=p.replace(Th,""),f=J0(x||y?"".concat(x," ").concat(y," { ").concat(T," }"):T);l.namespace&&(f=id(f,l.namespace));var a=[];return Ki(f,eh(m.concat(th(function(d){return a.push(d)})))),a};return h.hash=s.length?s.reduce(function(p,y){return y.name||Dr(15),wn(p,y.name)},Zf).toString():"",h}var Ih=new rd,Zl=Oh(),od=Re.createContext({shouldForwardProp:void 0,styleSheet:Ih,stylis:Zl});od.Consumer;Re.createContext(void 0);function va(){return ce.useContext(od)}var Rh=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Zl);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Zu(this,function(){throw Dr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Zl),this.name+t.hash},e}(),$h=function(e){return e>="A"&&e<="Z"};function ya(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;$h(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ld=function(e){return e==null||e===!1||e===""},ud=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!ld(o)&&(Array.isArray(o)&&o.isCss||An(o)?r.push("".concat(ya(i),":"),o,";"):Tr(o)?r.push.apply(r,Yi(Yi(["".concat(i," {")],ud(o),!1),["}"],!1)):r.push("".concat(ya(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in rh||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Jt(e,t,n,r){if(ld(e))return[];if(Xu(e))return[".".concat(e.styledComponentId)];if(An(e)){if(!An(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Jt(i,t,n,r)}var o;return e instanceof Rh?n?(e.inject(n,r),[e.getName(r)]):[e]:Tr(e)?ud(e):Array.isArray(e)?Array.prototype.concat.apply(wo,e.map(function(l){return Jt(l,t,n,r)})):[e.toString()]}function Mh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(An(n)&&!Xu(n))return!1}return!0}var Dh=Jf(xo),Ah=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Mh(t),this.componentId=n,this.baseHash=wn(Dh,n),this.baseStyle=r,rd.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Kt(i,this.staticRulesId);else{var o=ha(Jt(this.rules,t,n,r)),l=Gl(wn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var u=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,u)}i=Kt(i,l),this.staticRulesId=l}else{for(var s=wn(this.baseHash,r.hash),c="",m=0;m<this.rules.length;m++){var h=this.rules[m];if(typeof h=="string")c+=h;else if(h){var p=ha(Jt(h,t,n,r));s=wn(s,p+m),c+=p}}if(c){var y=Gl(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),i=Kt(i,y)}}return i},e}(),sd=Re.createContext(void 0);sd.Consumer;var qo={};function Fh(e,t,n){var r=Xu(e),i=e,o=!Jo(e),l=t.attrs,u=l===void 0?wo:l,s=t.componentId,c=s===void 0?function(v,E){var C=typeof v!="string"?"sc":aa(v);qo[C]=(qo[C]||0)+1;var w="".concat(C,"-").concat(ah(xo+C+qo[C]));return E?"".concat(E,"-").concat(w):w}(t.displayName,t.parentComponentId):s,m=t.displayName,h=m===void 0?function(v){return Jo(v)?"styled.".concat(v):"Styled(".concat(ch(v),")")}(e):m,p=t.displayName&&t.componentId?"".concat(aa(t.displayName),"-").concat(t.componentId):t.componentId||c,y=r&&i.attrs?i.attrs.concat(u).filter(Boolean):u,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var k=i.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;x=function(v,E){return k(v,E)&&T(v,E)}}else x=k}var f=new Ah(n,p,r?i.componentStyle:void 0);function a(v,E){return function(C,w,N){var U=C.attrs,O=C.componentStyle,ke=C.defaultProps,Dt=C.foldedComponentIds,At=C.styledComponentId,Ar=C.target,So=Re.useContext(sd),Wn=va(),Ft=C.shouldForwardProp||Wn.shouldForwardProp,_=oh(w,So,ke)||Dn,P=function(pt,Ce,et){for(var Vn,Bt=ye(ye({},Ce),{className:void 0,theme:et}),ko=0;ko<pt.length;ko+=1){var Fr=An(Vn=pt[ko])?Vn(Bt):Vn;for(var ht in Fr)Bt[ht]=ht==="className"?Kt(Bt[ht],Fr[ht]):ht==="style"?ye(ye({},Bt[ht]),Fr[ht]):Fr[ht]}return Ce.className&&(Bt.className=Kt(Bt.className,Ce.className)),Bt}(U,w,_),j=P.as||Ar,D={};for(var A in P)P[A]===void 0||A[0]==="$"||A==="as"||A==="theme"&&P.theme===_||(A==="forwardedAs"?D.as=P.forwardedAs:Ft&&!Ft(A,j)||(D[A]=P[A]));var Ut=function(pt,Ce){var et=va(),Vn=pt.generateAndInjectStyles(Ce,et.styleSheet,et.stylis);return Vn}(O,P),Fe=Kt(Dt,At);return Ut&&(Fe+=" "+Ut),P.className&&(Fe+=" "+P.className),D[Jo(j)&&!Xf.has(j)?"class":"className"]=Fe,D.ref=N,ce.createElement(j,D)}(d,v,E)}a.displayName=h;var d=Re.forwardRef(a);return d.attrs=y,d.componentStyle=f,d.displayName=h,d.shouldForwardProp=x,d.foldedComponentIds=r?Kt(i.foldedComponentIds,i.styledComponentId):"",d.styledComponentId=p,d.target=r?i.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(E){for(var C=[],w=1;w<arguments.length;w++)C[w-1]=arguments[w];for(var N=0,U=C;N<U.length;N++)Xl(E,U[N],!0);return E}({},i.defaultProps,v):v}}),Zu(d,function(){return".".concat(d.styledComponentId)}),o&&td(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function xa(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var wa=function(e){return Object.assign(e,{isCss:!0})};function Uh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(An(e)||Tr(e))return wa(Jt(xa(wo,Yi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Jt(r):wa(Jt(xa(r,t)))}function Jl(e,t,n){if(n===void 0&&(n=Dn),!t)throw Dr(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Uh.apply(void 0,Yi([i],o,!1)))};return r.attrs=function(i){return Jl(e,t,ye(ye({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Jl(e,t,ye(ye({},n),i))},r}var ad=function(e){return Jl(Fh,e)},F=ad;Xf.forEach(function(e){F[e]=ad(e)});const Bh=F.h1`
    display: flex;
    position: relative;
    font-size: 14px;

    @media (max-width: 1145px){
        flex: 1;
    }

    @media(max-width: 660px){
        width: 130px;
    }
`,Hh=F.img`
    width: 190px;

    @media(max-width: 660px){
        width: 135px;
    }
    @media(max-width: 380px){
        width: 115px;
    }
`,Wh=()=>g.jsx(g.Fragment,{children:g.jsx(Bh,{children:g.jsx("a",{href:"#",children:g.jsx(Hh,{src:"app-logo.svg",alt:"Code - A plataforma que eleva a produtividade do Desenvolvedor."})})})});var cd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sa=Re.createContext&&Re.createContext(cd),Vh=["attr","size","title"];function Qh(e,t){if(e==null)return{};var n=Yh(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Yh(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Zi(){return Zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zi.apply(this,arguments)}function ka(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ji(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ka(Object(n),!0).forEach(function(r){Kh(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ka(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kh(e,t,n){return t=Gh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gh(e){var t=Xh(e,"string");return typeof t=="symbol"?t:t+""}function Xh(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fd(e){return e&&e.map((t,n)=>Re.createElement(t.tag,Ji({key:n},t.attr),fd(t.child)))}function dt(e){return t=>Re.createElement(Zh,Zi({attr:Ji({},e.attr)},t),fd(e.child))}function Zh(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=Qh(e,Vh),u=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),Re.createElement("svg",Zi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:Ji(Ji({color:e.color||n.color},n.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&Re.createElement("title",null,o),e.children)};return Sa!==void 0?Re.createElement(Sa.Consumer,null,n=>t(n)):t(cd)}function Jh(e){return dt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"},child:[]}]})(e)}function qh(e){return dt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"},child:[]}]})(e)}function bh(e){return dt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 15c-.83 0-1.58.34-2.12.88C2.7 17.06 2 22 2 22s4.94-.7 6.12-1.88A2.996 2.996 0 0 0 6 15zm.71 3.71c-.28.28-2.17.76-2.17.76s.47-1.88.76-2.17c.17-.19.42-.3.7-.3a1.003 1.003 0 0 1 .71 1.71zm10.71-5.06c6.36-6.36 4.24-11.31 4.24-11.31S16.71.22 10.35 6.58l-2.49-.5a2.03 2.03 0 0 0-1.81.55L2 10.69l5 2.14L11.17 17l2.14 5 4.05-4.05c.47-.47.68-1.15.55-1.81l-.49-2.49zM7.41 10.83l-1.91-.82 1.97-1.97 1.44.29c-.57.83-1.08 1.7-1.5 2.5zm6.58 7.67-.82-1.91c.8-.42 1.67-.93 2.49-1.5l.29 1.44-1.96 1.97zM16 12.24c-1.32 1.32-3.38 2.4-4.04 2.73l-2.93-2.93c.32-.65 1.4-2.71 2.73-4.04 4.68-4.68 8.23-3.99 8.23-3.99s.69 3.55-3.99 8.23zM15 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"},child:[]}]})(e)}function em(e){return dt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 270.9l118.9 44.6L181.7 464 256 360l104 104L464 48 48 270.9zm294.9 126L260 313.4 374.9 152 193.6 289.8 124.9 265l291-156.2-73 288.1z"},child:[]}]})(e)}function tm(e){return dt({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function nm(e){return dt({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M235.36,98.49A12.21,12.21,0,0,0,224.59,90l-61.47-5L139.44,27.67a12.37,12.37,0,0,0-22.88,0L92.88,85,31.41,90a12.45,12.45,0,0,0-7.07,21.84l46.85,40.41L56.87,212.64a12.35,12.35,0,0,0,18.51,13.49L128,193.77l52.62,32.36a12.12,12.12,0,0,0,13.69-.51,12.28,12.28,0,0,0,4.82-13l-14.32-60.42,46.85-40.41A12.29,12.29,0,0,0,235.36,98.49Zm-8.93,7.26-48.68,42a4,4,0,0,0-1.28,3.95l14.87,62.79a4.37,4.37,0,0,1-1.72,4.65,4.24,4.24,0,0,1-4.81.18L130.1,185.67a4,4,0,0,0-4.2,0L71.19,219.32a4.24,4.24,0,0,1-4.81-.18,4.37,4.37,0,0,1-1.72-4.65L79.53,151.7a4,4,0,0,0-1.28-3.95l-48.68-42A4.37,4.37,0,0,1,28.25,101a4.31,4.31,0,0,1,3.81-3L96,92.79a4,4,0,0,0,3.38-2.46L124,30.73a4.35,4.35,0,0,1,8.08,0l24.62,59.6A4,4,0,0,0,160,92.79l63.9,5.15a4.31,4.31,0,0,1,3.81,3A4.37,4.37,0,0,1,226.43,105.75Z"},child:[]}]})(e)}const rm=F.div`
    display: none;

    color: #fff;
    padding: 5px 32px 5px 6px;
    font-size: 22px;;

    .icon{
        opacity: 0.8;
        position: relative;
        z-index: 900;
        cursor: pointer;
    }
    .icon:hover{
        opacity: 1;
    }

    @media(max-width: 1145px){
        display: inline-block;
    }
    @media(max-width: 660px){
        font-size: 20px;
        padding: 5px 24px 5px 6px;
    }
    @media(max-width: 428px){
        padding: 0 22.2px 0 12.2px;
    }
    @media(max-width: 414px){
        padding: 0 20px 0 12.2px;
    }
    @media(max-width: 380px){
        font-size: 18px;
        margin-bottom: -3.4px;
        padding: 0 19px 0 10px;
    }
    @media(max-width: 365px){
        padding: 0 20px 0 10.2px;
    }
`,im=F.div`
    visibility: hidden;

    width: 355px;
    height: 100vh;
    background-color: #0e1015;

    position: fixed;
    left: 0;
    top: 0;
    
    &.active{
        visibility: visible;
    }
    
    @media (max-width: 660px){
        width: 248px;
    }
    @media (max-width: 380px){
        width: 230px;
        padding-left: 0;
    }
    @media (max-width: 310px){
        width: 205px;
    }
`,om=F.nav`
    width: 100%;
    height: 85vh;
    display: none;

    .icon{
        margin-bottom: -3px;
    }

    *{
        font-size: 16px;
        letter-spacing: 1.5px;
    }

    &.active{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 5px 0 0 22px;
    }

    margin-top: 24%;
    @media (max-width: 660px){
        margin-top: 30%;
    }
    @media (max-width: 428px){
        margin-top: 29%;
    }
    @media (max-width: 380px){
        margin-top: 31.2%;
    }
    @media (max-width: 310px){
        margin-top: 32.5%;
    }
`,lm=F.button`
    color: #fff;
    background-color: transparent;
    padding: 17.5px 5px 17.5px 0;

    font-size: 15.8px;
    border: none;
    color: #fff;
    font-weight: 900;
    opacity: 0.67;

    &:hover{
        cursor: pointer;
        opacity: 1;
    }

    /* active */
    &.active{
        opacity: 0.4;
        text-decoration: underline;
        text-decoration-color: #007bff;
        text-underline-offset: 2.7px;
        pointer-events: none;
        .icon{
            display: none;
        }
    }
    &.active::before{
        content: '>';
        color: #007bff;
        margin-right: 4px;
    }

    @media (max-width: 380px){
        padding: 17.5px 5px 17.5px 0;
    }
`,Ct=({text:e,path:t,isActive:n,onClick:r})=>{const i=n?"active":"";return g.jsx(lm,{className:i,onClick:r,children:g.jsx("a",{href:t,children:e})})},um=()=>{const[e,t]=ce.useState(!1),[n,r]=ce.useState(""),[i,o]=ce.useState("comeceAgora");ce.useEffect(()=>{document.body.style.overflow=e?"hidden":"auto"},[e]);function l(){t(!e),r(c=>c===""?"active":"")}const u=c=>{console.log(c),o(c),t(!1),r("")},s=c=>{e&&!c.target.closest(".menu-bar")&&(t(!1),r(""))};return ce.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}),[e]),g.jsxs(rm,{className:n,onClick:l,children:[e?g.jsx(Jh,{className:"icon"}):g.jsx(qh,{className:"icon"}),g.jsx(im,{className:`menu-bar ${n}`,children:g.jsxs(om,{className:n,children:[g.jsx(Ct,{text:g.jsxs(g.Fragment,{children:[g.jsx(nm,{className:"icon"})," Comece Agora"]}),isActive:i==="comeceAgora",onClick:c=>{c.stopPropagation(),u("comeceAgora")}}),g.jsx(Ct,{text:g.jsxs(g.Fragment,{children:[g.jsx(tm,{className:"icon"})," Soluções"]}),isActive:i==="solucoes",onClick:c=>{c.stopPropagation(),u("solucoes")}}),g.jsx(Ct,{text:g.jsxs(g.Fragment,{children:[g.jsx(em,{className:"icon"})," Recursos"]}),isActive:i==="recursos",onClick:c=>{c.stopPropagation(),u("recursos")}}),g.jsx(Ct,{text:g.jsxs(g.Fragment,{children:[g.jsx(bh,{className:"icon"})," Planos"]}),isActive:i==="planos",onClick:c=>{c.stopPropagation(),u("planos")}})]})})]})},sm=F.nav`
    display: flex;
    gap: 25px;

    @media (max-width: 1145px){
        display: none;
    }
`,am=()=>{const[e,t]=ce.useState("comeceAgora"),n=r=>{t(r)};return g.jsxs(sm,{children:[g.jsx(Ct,{text:"Comece Agora",isActive:e==="comeceAgora",onClick:()=>n("comeceAgora")}),g.jsx(Ct,{text:"Soluções",isActive:e==="solucoes",onClick:()=>n("solucoes")}),g.jsx(Ct,{text:"Recursos",isActive:e==="recursos",onClick:()=>n("recursos")}),g.jsx(Ct,{text:"Planos",isActive:e==="planos",onClick:()=>n("planos")})]})},cm=F.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: #fff;

    opacity: 0.7;
    padding: 10px 14px;
    border-radius: 20px;
    font-weight: 900;
    font-size: 15px;

    &:hover{
        opacity: 1;
    }

    @media(max-width: 660px){
        margin-top: -3px;
        font-size: 15px;
        border: none;
        background-color: #fff;
        color: #000;

        font-weight: 900;
        letter-spacing: 1.2px;
        opacity: 0.9;

        padding: 8px 20px;
        border-radius: 20px;

        &:hover{
            transition: 0.2s linear;
            background-color: #007bff;
            color: #fff;
        }
    }

    @media(max-width: 380px){
        font-size: 13px;
        padding: 7px 15px;
    }
`,fm=F.button`
    cursor: pointer;
    font-size: 15px;
    border: none;
    background-color: #fff;
    color: #000;

    font-weight: 900;
    letter-spacing: 1.2px;
    opacity: 0.9;

    padding: 10px 22px;
    border-radius: 20px;

    &:hover{
        transition: 0.2s linear;
        background-color: #007bff;
        color: #fff;
    }

    @media(max-width: 660px){
        display: none;
    }
`,dm=()=>g.jsx(cm,{children:g.jsx("span",{className:"button-text",children:"Entrar"})}),pm=()=>g.jsx(fm,{children:g.jsx("span",{className:"button-text",children:"Cadastre-se, é grátis!"})}),hm=F.section`
    display: flex;
    gap: 11px;
`,mm=()=>g.jsxs(hm,{children:[g.jsx(dm,{}),g.jsx(pm,{})]}),gm=F.header`
    background-color: ${({isScrolled:e})=>e?"#000":"transparent"};
    z-index: 1900;
    padding: 27px 10px 15px 10px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: background-color 0.3s ease; /* Transição suave */
`,vm=F.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: 1525px) {
        max-width: 95vw;
    }
`,ym=()=>{const[e,t]=ce.useState(!1);return ce.useEffect(()=>{const n=()=>{t(window.scrollY>0)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),g.jsx(gm,{isScrolled:e,children:g.jsxs(vm,{children:[g.jsx(um,{}),g.jsx(Wh,{}),g.jsx(am,{}),g.jsx(mm,{})]})})},xm=F.h2`
    color: #fff;
    font-size: 55px;
    letter-spacing: 4px;
    position: relative;

    .mobile{
        display: none;
    }

    .desktop{
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-color: #007bff;
    }

    @media (max-width: 940px){
        font-size: 48px;
    }
    @media (max-width: 875px){
        font-size: 46px;
    }
    @media (max-width: 804px){
        font-size: 40px;
    }
    @media (max-width: 712px){
        font-size: 37px;
    }
    @media (max-width: 660px){
        font-size: 35px;
    }
    @media (max-width: 630px){
        font-size: 40px;
        text-align: left;

        .desktop{
            display: none;
        }
        .mobile{
            display: inline-block;
        }
        .mobile-decoration{
            text-decoration: underline;
            text-underline-offset: 5px;
            text-decoration-color: #007bff;
        }
    }
    @media (max-width: 540px){
        font-size: 36.6px;
    }
    @media (max-width: 490px){
        font-size: 33px;
    }
    @media (max-width: 456px){
        font-size: 30px;
    } 
    @media (max-width: 420px){
        font-size: 28px;
    }
    @media (max-width: 400px){
        font-size: 25px;
    }
    @media (max-width: 375px){
        font-size: 23px;
    }
    @media (max-width: 360px){
        font-size: 20px;
    }
`,wm=()=>g.jsxs(xm,{children:["Construa seu projeto ",g.jsx("br",{className:"mobile"})," em ",g.jsx("br",{className:"desktop"}),g.jsx("span",{className:"mobile-decoration",children:"30 segundos."})," ",g.jsx("span",{className:"desktop",children:"Não é exagero!"})]}),Sm=F.button`
    font-size: 1.4rem;
    letter-spacing: 3.5px;
    padding: 1rem 2.5rem;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: #007bff;
    color: rgb(234, 234, 234);
    font-weight: 700;
    transition: 0.6s;
    box-shadow: 0px 0px 60px #1f4c65;
    -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));

    &:active{
        scale: 0.92;
    }

    &:hover{
        background: rgb(2,29,78);
        background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
        color: rgb(4, 4, 38);
    }

    @media (max-width: 804px){
        width: 70%;
    }
    @media (max-width: 660px){
        font-size: 18.5px;
    }
    @media (max-width: 630px){
        width: 100%;
    }
    @media (max-width: 440px){
        font-size: 17px;
    }
    @media (max-width: 390px){
        font-size: 15px;
    }
    @media (max-width: 335px){
        font-size: 14px;
        padding: 0.9rem 2rem;
    }
`;function km(e){return dt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"},child:[]}]})(e)}const Cm=()=>g.jsxs(Sm,{children:["Teste grátis! ",g.jsx(km,{})]}),Em=F.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 30px;

    @media (max-width: 875px){
        gap: 35px;
    }
    @media (max-width: 730px){
        gap: 30px;
    }
    @media (max-width: 660px){
        gap: 25px;
    }
    @media (max-width: 508px){
        gap: 22px;
    }
    @media (max-width: 330px){
        gap: 18px;
    }
`,_m=()=>g.jsx(g.Fragment,{children:g.jsxs(Em,{children:[g.jsx(wm,{}),g.jsx(Cm,{})]})}),zm=()=>g.jsx(Nm,{children:g.jsxs("div",{className:"brutalist-container",children:[g.jsx("input",{placeholder:"seuprojeto.code.com.br",className:"brutalist-input smooth-type",type:"text"}),g.jsx("label",{className:"brutalist-label",children:"domínio code.com.br grátis!"})]})}),Nm=F.div`
    .brutalist-container {
      position: absolute;
      z-index: 1;
      margin-top: -40px;
      right: 7%;

      pointer-events: none;
      opacity: 1;
      z-index: 1;
      width: 250px;
      font-family: monospace;
  }

  .brutalist-input {
    width: 100%;
    padding: 10px 15px;
    font-size: 18.6px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    border: 4px solid #000;
    position: relative;
    overflow: hidden;
    border-radius: 0;
    outline: none;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 5px 5px 0 #000, 10px 10px 0 #007bff;
  }

  .brutalist-label {
    position: absolute;
    left: -3px;
    top: -30px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    padding: 5px 10px;
    transform: rotate(-1deg);
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  // responsivity
  @media (max-width: 1145px){
    .brutalist-container{
      right: 43px;
    }
    .brutalist-input{
      font-size: 15px;
      width: 85%;
      padding: 10px;
    }
    .brutalist-label{
      font-size: 12px;
      top: -27px;
    }
  }
  @media (max-width: 1145px){
    .brutalist-container{
      right: 3%;
    }
  }
  @media (max-width: 768px){
    .brutalist-container{
      display: none;
    }
  }
`,Pm=()=>g.jsxs(jm,{children:[g.jsx(zm,{}),g.jsx("img",{src:"studio-img.png",alt:"Code Studio"})]}),jm=F.div`
    display: flex;
    justify-content: center;

    img{
        position: relative;
        z-index: -1;
        width: 86%;
        margin: 0 auto;
        border: 2px solid #007bff;
        opacity: 0.75;
    }
    @media (max-width: 768px){
        align-items: center;
        img{
            border: none;
            opacity: 0.7;
        }
    }
`,Lm=F.div`
    position: relative;
    overflow: hidden;
    padding: 200px 0 110px 0;

    width: 100%;
    background-color: #000;

    padding: 200px 0 110px 0;
    
    @media (max-width: 875px){
        padding: 155px 0 100px 0;
    }
    @media (max-width: 768px){
        padding: 155px 0 80px 0;
    }
    @media (max-width: 660px){
        padding: 135px 0 70px 0;
    }
    @media (max-width: 450px){
        padding: 130px 0 63px 0;
    }
    @media (max-width: 335px){
        padding: 100px 0 55px 0;
    }
    @media (max-width: 324px){
        padding: 90px 0 55px 0;
    }

    .stars1 {
        animation: space 10s alternate infinite;
    }
    .stars2 {
        animation: space 20s alternate infinite;
    }
    .stars3 {
        animation: space 30s ease-in-out infinite;
    }

    .space {
        background: #000 center / 320px 250px round;
        
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;

        background-image:
            radial-gradient(
            1px 1px at 10px 10px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            1px 1px at 150px 150px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            1.5px 1.5px at 60px 170px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            1.5px 1.5px at 175px 180px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            2px 2px at 195px 95px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            2.5px 2.5px at 95px 145px, 
            white, 
            rgba(255, 255, 255, 0)
        );
    }

    @keyframes space {
        40% {
            opacity: 0.75;
        }
        50% {
            opacity: 0.25;
        }
        60% {
            opacity: 0.75;
        }
        100% {
            transform: rotate(360deg);
        }
    }
`,Tm=F.div`
    max-width: 1340px;

    display: flex;
    flex-direction: column;
    
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
`,Om=F.div`
    width: 100vw;
    height: 400px;
    border-top: 135px solid #000;
    position: absolute;
    z-index: -1;

    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('hero-waves.svg');

    @media (max-width: 768px){
        border-top: 65px solid #000;
    }
    @media (max-width: 500px){
        border-top: 45px solid #000;
    }
`,Im=()=>g.jsxs("main",{children:[g.jsxs(Lm,{children:[g.jsx("div",{className:"space stars1"}),g.jsx("div",{className:"space stars2"}),g.jsx("div",{className:"space stars3"}),g.jsx(Tm,{children:g.jsx(_m,{})})]}),g.jsx(Om,{}),g.jsx(Pm,{})]});function Rm(e){return dt({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 16 4-4-4-4"},child:[]},{tag:"path",attr:{d:"m6 8-4 4 4 4"},child:[]},{tag:"path",attr:{d:"m14.5 4-5 16"},child:[]}]})(e)}function $m(e){return dt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"},child:[]}]})(e)}const Ca=({title:e,cardItems:t,className:n})=>g.jsx(Mm,{children:g.jsxs("div",{className:`container ${n}`,children:[g.jsx("div",{className:"hover-area hover-area-1"}),g.jsx("div",{className:"hover-area hover-area-2"}),g.jsx("div",{className:"hover-area hover-area-3"}),g.jsx("div",{className:"hover-area hover-area-4"}),g.jsxs("div",{className:"card",children:[g.jsx("div",{className:"card-header",children:e}),g.jsx("div",{className:"cardInfo",children:g.jsx("ul",{className:"cardItems",children:t.map((r,i)=>g.jsx("li",{children:r},i))})})]})]})}),Mm=F.div`
    // default behaviors
    width: 49%;
    min-height: 400px;

    // general styles
    .container {
      perspective: 1000px;
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: stretch;
    }
    .card {
      background-color: #1a1a1c;
      border: 1px solid black;
      position: relative;
      z-index: 0;
      transition: all 300ms ease-out;
      transform-origin: center center;
      width: 100%;
      height: 100%;
      box-shadow: 0px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  // programmers card
    .programmers-card .card{
      transform: rotateX(2.5deg) rotateY(2.5deg) translateZ(0);
      transform-origin: left bottom;
      box-shadow: -10px 10px #007bff;
    }
  // beginners card
    .beginners-card .card{
        transform: rotateX(2.5deg) rotateY(-2.5deg) translateZ(0);
        transform-origin: right bottom;
        box-shadow: 10px 10px #007bff;
    }
    
    .card-header {
      display: flex;
      align-items: center;
      gap: 13px;

      padding: 25px 30px;

      color: #fff;
      font-size: 23px;
      letter-spacing: 7px;
      text-transform: uppercase;

      background-color: #000;
    }

    // card list items & button
    .cardInfo{
        height: 100%;

        display: flex;
        align-items: flex-start;

        background-color: #161616;
    }
    .cardItems{
        list-style: none;
        width: 100%;
        padding: 30px;
        opacity: 0.85;

        display: flex;
        flex-direction: column;
        gap: 40px;
        line-height: 35px;

        font-size: 21px;
    }
    .cardItems li::before{
        content: '';

        width: 22px;
        height: 22px;
        
        display: inline-block;
        margin-right: 12px;
        margin-bottom: -3px;

        border-radius: 100%;
        background-image: url('checked.png');
        background-size: cover;
    }
  
    /* hover effects */

  // programmers card particularity
    .programmers-card .hover-area-2:hover ~ .card{
        transform: rotateX(0deg) rotateY(0deg);
    }
  // begginers card particularity
    .beginners-card .hover-area-1:hover ~ .card{
      transform: rotateX(0deg) rotateY(0deg);
    }

    .hover-area {
        opacity: 0;
        position: absolute;
        z-index: 1;
        width: 50%;
        height: 50%;
    }

    .hover-area:hover ~ .card,
    .hover-area:focus ~ .card {
        transform: translateZ(0);
    }
    .hover-area-1 {
        top: 0;
        left: 0;
    }
    .hover-area-1:hover ~ .card {
        transform: rotateX(2.5deg) rotateY(-2.5deg) translateZ(0);
        transform-origin: right bottom;
        box-shadow: 10px 10px #007bff;
    }
    .hover-area-2 {
        top: 0;
        right: 0;
    }
    .hover-area-2:hover ~ .card {
        transform: rotateX(2.5deg) rotateY(2.5deg) translateZ(0);
        transform-origin: left bottom;
        box-shadow: -10px 10px #007bff; /* sombra azul */
    }
    .hover-area-3 {
        bottom: 0;
        right: 0;
    }
    .hover-area-3:hover ~ .card {
        transform-origin: left top;
        transform: rotateX(-2.5deg) rotateY(2.5deg) translateZ(0);
        box-shadow: -10px -10px #007bff; /* sombra azul */
    }
    .hover-area-4 {
        bottom: 0;
        left: 0;
    }
    .hover-area-4:hover ~ .card {
        transform-origin: right top;
        transform: rotateX(-2.5deg) rotateY(-2.5deg) translateZ(0);
        box-shadow: 10px -10px #007bff;
    }

    // responsivity
    @media (max-width: 1520px){
      width: 100%;
    }
    @media (max-width: 768px) {
      width: 95%;

      .hover-area{
        pointer-events: none;
      }

      .cardItems{
        padding: 30px 20px 30px 30px;
      }

      .programmers-card .card,
      .beginners-card .card{
        transform: rotateX(0) rotateY(0) translateZ(0);
        transform-origin: left bottom;
        box-shadow: 0px -8px #007bff; /* sombra azul */
      }
      @media(max-width: 400px){
        .card-header{
          font-size: 20px;
        }
      }
      @media(max-width: 370px){
        .card-header{
          font-size: 15px;
        }
      }
    }
`,Dm=()=>{const e=["Acelere o desenvolvimento com templates personalizáveis","Integração fácil com ferramentas de desenvolvimento populares","Economize tempo em projetos repetitivos e foque na inovação","Acesso a uma comunidade de desenvolvedores para troca de ideias e suporte"],t=["Tutoriais interativos e didáticos","Acesso a uma comunidade engajada","Modifique templates prontos e crie seu próprio projeto","Suporte disponível sempre que você precisar"];return g.jsxs(Am,{children:[g.jsx(Ca,{className:"programmers-card",title:g.jsxs(g.Fragment,{children:[g.jsx(Rm,{})," Programadores"]}),cardItems:e}),g.jsx(Ca,{className:"beginners-card",title:g.jsxs(g.Fragment,{children:[g.jsx($m,{})," Iniciantes"]}),cardItems:t})]})},Am=F.article`
    width: 93%;
    margin: 0 auto;
    color: #fff;

    display: flex;
    
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1520px){
      width: 96%;
    }
    @media (max-width: 768px){
        margin-top: 5.1%;
        width: 100%;
        gap: 15px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;function Fm(){const e=[{title:"Codificação",src:"./codeStep.png",alt:"Imagem de Codificação"},{title:"Tabelas",src:"./tablesStep.png",alt:"Imagem de Tabelas"},{title:"Compartilhe!",src:"./shareStep.png",alt:"Imagem de Compartilhamento"}],[t,n]=ce.useState(null),[r,i]=ce.useState({src:"",alt:""}),o=l=>{n(l.title),i({src:l.src,alt:l.alt})};return g.jsxs(Um,{children:[g.jsx("ul",{id:"titlesWrapper",children:e.map((l,u)=>g.jsxs("li",{className:t===l.title?"selected":"",onClick:()=>o(l),children:[l.title,g.jsx("div",{className:"icon"})]},u))}),g.jsx("div",{id:"imagesWrapper",children:r.src&&g.jsx("img",{src:r.src,alt:r.alt})})]})}const Um=F.div`
    color: #fff;
    background-color: #161616;
    width: 90%;
    margin: 0 auto;

    #titlesWrapper {
        list-style: none;
        display: flex;
        justify-content: space-between;
    }

    li {
        z-index: 1;
        height: 60px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        
        text-transform: uppercase;
        letter-spacing: 4px;
        background-color: #000;

        &:hover {
            cursor: pointer;
            transition: color 0.3s;
            color: #aaa;
        }
    }

    li.selected {
        flex-direction: column;

        font-weight: 900;
        color: #007bff;
        border: 1px solid #007bff;
    }

    li.selected .icon{
        position: absolute;
        margin-top: 60px;
        z-index: -1;

        min-width: 40px;
        min-height: 40px;

        background-color: #000;
        border-right: 1px solid #007bff;
        border-bottom: 1px solid #007bff;

        transform: rotate(45deg);
    }

    img{
        width: 100%;
        min-height: 400px;
        height: auto;
        display: block;
    }

    @media (max-width: 1520px){
        width: 97%;
    }
`;function Ea({content:e}){return g.jsxs("div",{children:[g.jsx(_a,{className:"divider top",src:"./section-title-waves.svg"}),g.jsxs(Bm,{children:[g.jsx("div",{className:"space stars1"}),g.jsx("div",{className:"space stars2"}),g.jsx("div",{className:"space stars3"}),g.jsx("h2",{children:e})]}),g.jsx(_a,{className:"divider bottom",src:"./section-title-waves.svg"})]})}const _a=F.img`
    width: 100%;
    &.top{
        margin-bottom: -10px;
        transform: rotate(180deg) scaleX(-1);
    }
`,Bm=F.div`
    position: relative;
    overflow: hidden;
    background-color: #000;
    z-index: -1;

    width: 100%;

    h2{
        padding: 160px 0;
        position: relative;
        z-index: 2;
        text-align: center;
        font-size: 46px;
        letter-spacing: 7px;
        font-weight: 900;
        color: #fff;
        z-index: 2;
    }

    h2 .highlight {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 12px;
        text-decoration-color: #007bff;
    }

    .stars1 {
        animation: space 5s alternate infinite;
    }
    .stars2 {
        animation: space 10s alternate infinite;
    }
    .stars3 {
        animation: space 15s ease-in-out infinite;
    }

    .space {
        background: #000 center / 320px 250px round;
        
        z-index: 1;

        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;

        background-image:
            radial-gradient(
            1px 1px at 10px 10px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            1px 1px at 150px 150px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            1.5px 1.5px at 60px 170px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            1.5px 1.5px at 175px 180px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            2px 2px at 195px 95px, 
            white, 
            rgba(255, 255, 255, 0)
            ),
            radial-gradient(
            2.5px 2.5px at 95px 145px, 
            white, 
            rgba(255, 255, 255, 0)
        );
    }

    @keyframes space {
        40% {
            opacity: 0.75;
        }
        50% {
            opacity: 0.25;
        }
        60% {
            opacity: 0.75;
        }
        100% {
            transform: rotate(360deg);
        }
    }
`,Hm=()=>g.jsxs(Wm,{children:[g.jsx(Ea,{content:g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"highlight",children:"3 Passos"})," para criar seu projeto:"]})}),g.jsx(Fm,{}),g.jsx(Ea,{content:g.jsxs(g.Fragment,{children:["O Code ",g.jsx("span",{className:"highlight",children:"facilita"})," para você:"]})}),g.jsx(Dm,{})]}),Wm=F.section`
  display: flex;
  flex-direction: column;
  gap: 85px;
  padding-bottom:170px;
  margin-top: 85px;
`;function Vm(){return g.jsxs(g.Fragment,{children:[g.jsx(ym,{}),g.jsx(Im,{}),g.jsx(Hm,{})]})}Ff(document.getElementById("root")).render(g.jsx(ce.StrictMode,{children:g.jsx(Vm,{})}));