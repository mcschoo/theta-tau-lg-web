(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[866],{4702:function(e,t,r){Promise.resolve().then(r.t.bind(r,3222,23)),Promise.resolve().then(r.bind(r,6258))},2706:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return s}});let a=r(1024),n=a._(r(2265)),s=n.default.createContext(null)},6258:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var a=r(7437),n=r(2265);let s=e=>{let{brother:t}=e;return(0,a.jsxs)("div",{className:"w-48",children:[(0,a.jsx)("img",{src:t.image,alt:t.name,className:"w-full h-auto object-cover aspect-square"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-lg",children:t.name}),(0,a.jsx)("p",{className:"text-sm",children:t.email}),(0,a.jsx)("p",{className:"text-sm",children:t.major})]})]},t.email)};var o=r(7982),c=r(4086);function i(){let[e,t]=(0,n.useState)([]);return(0,n.useEffect)(()=>{let e=async()=>{let e=(0,c.JU)(o.db,"public","brothers"),r=await (0,c.QT)(e),a=r.data(),n=a.displayOrder.map(e=>{let t=a.brotherList[e],r={name:"".concat(t.firstName," ").concat(t.lastName),email:t.displayEmail,image:t.profilePicture,major:t.major};return r});t(n),console.log(a)};e()},[]),(0,a.jsxs)("section",{className:"p-16",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold text-center my-8",children:"Meet the Brothers of the Lambda Gamma Chapter!"}),(0,a.jsx)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-center items-center",children:e.map((e,t)=>(0,a.jsx)(s,{brother:e},t))})]})}},7982:function(e,t,r){"use strict";r.d(t,{I8:function(){return i},db:function(){return l},tO:function(){return u}});var a=r(994),n=r(3085),s=r(4086),o=r(9584);let c=0===(0,a.C6)().length?(0,a.ZF)({apiKey:"AIzaSyAXWZ2GUKOBaRi10YQWzMqw1-s5krK2ZSQ",authDomain:"theta-tau-lambda-gamma.firebaseapp.com",projectId:"theta-tau-lambda-gamma",storageBucket:"theta-tau-lambda-gamma.appspot.com",messagingSenderId:"786566986467",appId:"1:786566986467:web:e3501dfdb368e5d45e23d6",measurementId:"G-87T7K6GX57"}):(0,a.C6)()[0],i=(0,n.v0)(c),l=(0,s.ad)(c),u=(0,o.cF)(c)},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(2265),n=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var a,i={},l=null,u=null;for(a in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,a)&&!c.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:n,type:e,key:l,ref:u,props:i,_owner:o.current}}t.jsx=i,t.jsxs=i},7437:function(e,t,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[358,214,266,222,971,596,744],function(){return e(e.s=4702)}),_N_E=e.O()}]);