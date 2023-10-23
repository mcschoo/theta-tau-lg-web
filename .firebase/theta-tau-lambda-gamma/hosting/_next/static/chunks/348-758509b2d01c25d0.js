"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{1172:function(e,t,n){n.d(t,{w_:function(){return s}});var r=n(2265),u={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(u),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var u in t=arguments[n])Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var u=0,r=Object.getOwnPropertySymbols(e);u<r.length;u++)0>t.indexOf(r[u])&&Object.prototype.propertyIsEnumerable.call(e,r[u])&&(n[r[u]]=e[r[u]]);return n};function s(e){return function(t){return r.createElement(a,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,l({key:n},t.attr),e(t.child))})}(e.child))}}function a(e){var t=function(t){var n,u=e.attr,o=e.size,s=e.title,a=i(e,["attr","size","title"]),c=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,u,a,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==o?r.createElement(o.Consumer,null,function(e){return t(e)}):t(u)}},5744:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}},6989:function(e,t,n){n.d(t,{b:function(){return o},k:function(){return u}});var r=n(2265);function u(e,t){let n=(0,r.createContext)(t);function u(e){let{children:t,...u}=e,o=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(n.Provider,{value:o},t)}return u.displayName=e+"Provider",[u,function(u){let o=(0,r.useContext)(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function o(e,t=[]){let n=[],u=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let u=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return u.scopeName=e,[function(t,u){let o=(0,r.createContext)(u),l=n.length;function i(t){let{scope:n,children:u,...i}=t,s=(null==n?void 0:n[e][l])||o,a=(0,r.useMemo)(()=>i,Object.values(i));return(0,r.createElement)(s.Provider,{value:a},u)}return n=[...n,u],i.displayName=t+"Provider",[i,function(n,i){let s=(null==i?void 0:i[e][l])||o,a=(0,r.useContext)(s);if(a)return a;if(void 0!==u)return u;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e),o=u[`__scope${r}`];return{...t,...o}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(u,...t)]}},9249:function(e,t,n){let r;n.d(t,{I0:function(){return y},XB:function(){return f},fC:function(){return E}});var u=n(3428),o=n(2265),l=n(5744),i=n(9381),s=n(2210),a=n(6459);let c="dismissableLayer.update",d=(0,o.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,o.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:v,onPointerDownOutside:E,onFocusOutside:y,onInteractOutside:b,onDismiss:h,...N}=e,O=(0,o.useContext)(d),[w,g]=(0,o.useState)(null),C=null!==(n=null==w?void 0:w.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,P]=(0,o.useState)({}),T=(0,s.e)(t,e=>g(e)),L=Array.from(O.layers),[D]=[...O.layersWithOutsidePointerEventsDisabled].slice(-1),M=L.indexOf(D),k=w?L.indexOf(w):-1,W=O.layersWithOutsidePointerEventsDisabled.size>0,S=k>=M,_=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,a.W)(e),r=(0,o.useRef)(!1),u=(0,o.useRef)(()=>{});return(0,o.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function o(){p("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",u.current),u.current=o,t.addEventListener("click",u.current,{once:!0})):o()}else t.removeEventListener("click",u.current);r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",u.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...O.branches].some(e=>e.contains(t));!S||n||(null==E||E(e),null==b||b(e),e.defaultPrevented||null==h||h())},C),x=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,a.W)(e),r=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e=e=>{e.target&&!r.current&&p("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...O.branches].some(e=>e.contains(t));n||(null==y||y(e),null==b||b(e),e.defaultPrevented||null==h||h())},C);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,a.W)(e);(0,o.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{let t=k===O.layers.size-1;t&&(null==v||v(e),!e.defaultPrevented&&h&&(e.preventDefault(),h()))},C),(0,o.useEffect)(()=>{if(w)return f&&(0===O.layersWithOutsidePointerEventsDisabled.size&&(r=C.body.style.pointerEvents,C.body.style.pointerEvents="none"),O.layersWithOutsidePointerEventsDisabled.add(w)),O.layers.add(w),m(),()=>{f&&1===O.layersWithOutsidePointerEventsDisabled.size&&(C.body.style.pointerEvents=r)}},[w,C,f,O]),(0,o.useEffect)(()=>()=>{w&&(O.layers.delete(w),O.layersWithOutsidePointerEventsDisabled.delete(w),m())},[w,O]),(0,o.useEffect)(()=>{let e=()=>P({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,o.createElement)(i.WV.div,(0,u.Z)({},N,{ref:T,style:{pointerEvents:W?S?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.M)(e.onFocusCapture,x.onFocusCapture),onBlurCapture:(0,l.M)(e.onBlurCapture,x.onBlurCapture),onPointerDownCapture:(0,l.M)(e.onPointerDownCapture,_.onPointerDownCapture)}))}),v=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(d),r=(0,o.useRef)(null),l=(0,s.e)(t,r);return(0,o.useEffect)(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,o.createElement)(i.WV.div,(0,u.Z)({},e,{ref:l}))});function m(){let e=new CustomEvent(c);document.dispatchEvent(e)}function p(e,t,n,{discrete:r}){let u=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&u.addEventListener(e,t,{once:!0}),r?(0,i.jH)(u,o):u.dispatchEvent(o)}let E=f,y=v},2730:function(e,t,n){n.d(t,{h:function(){return i}});var r=n(3428),u=n(2265),o=n(4887),l=n(9381);let i=(0,u.forwardRef)((e,t)=>{var n;let{container:i=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...s}=e;return i?o.createPortal((0,u.createElement)(l.WV.div,(0,r.Z)({},s,{ref:t})),i):null})},5606:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(2265),u=n(4887),o=n(2210),l=n(1030);let i=e=>{let{present:t,children:n}=e,i=function(e){var t;let[n,o]=(0,r.useState)(),i=(0,r.useRef)({}),a=(0,r.useRef)(e),c=(0,r.useRef)("none"),d=e?"mounted":"unmounted",[f,v]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},d));return(0,r.useEffect)(()=>{let e=s(i.current);c.current="mounted"===f?e:"none"},[f]),(0,l.b)(()=>{let t=i.current,n=a.current,r=n!==e;if(r){let r=c.current,u=s(t);e?v("MOUNT"):"none"===u||(null==t?void 0:t.display)==="none"?v("UNMOUNT"):n&&r!==u?v("ANIMATION_OUT"):v("UNMOUNT"),a.current=e}},[e,v]),(0,l.b)(()=>{if(n){let e=e=>{let t=s(i.current),r=t.includes(e.animationName);e.target===n&&r&&(0,u.flushSync)(()=>v("ANIMATION_END"))},t=e=>{e.target===n&&(c.current=s(i.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}v("ANIMATION_END")},[n,v]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,r.useCallback)(e=>{e&&(i.current=getComputedStyle(e)),o(e)},[])}}(t),a="function"==typeof n?n({present:i.isPresent}):r.Children.only(n),c=(0,o.e)(i.ref,a.ref),d="function"==typeof n;return d||i.isPresent?(0,r.cloneElement)(a,{ref:c}):null};function s(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},6459:function(e,t,n){n.d(t,{W:function(){return u}});var r=n(2265);function u(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},3763:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(2265),u=n(6459);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,l]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[o]=n,l=(0,r.useRef)(o),i=(0,u.W)(t);return(0,r.useEffect)(()=>{l.current!==o&&(i(o),l.current=o)},[o,l,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,s=i?e:o,a=(0,u.W)(n),c=(0,r.useCallback)(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&a(n)}else l(t)},[i,e,l,a]);return[s,c]}},1030:function(e,t,n){n.d(t,{b:function(){return u}});var r=n(2265);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},6061:function(e,t,n){n.d(t,{j:function(){return l}});var r=n(7042);let u=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=r.W,l=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:l,defaultVariants:i}=t,s=Object.keys(l).map(e=>{let t=null==n?void 0:n[e],r=null==i?void 0:i[e];if(null===t)return null;let o=u(t)||u(r);return l[e][o]}),a=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),c=null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...u}=t;return Object.entries(u).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...a}[t]):({...i,...a})[t]===n})?[...e,n,r]:e},[]);return o(e,s,c,null==n?void 0:n.class,null==n?void 0:n.className)}}}]);