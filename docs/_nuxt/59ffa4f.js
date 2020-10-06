/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{747:function(e,n,t){!function(){"use strict";var n="undefined"!=typeof window&&void 0!==window.document?window.document:{},t=e.exports,r=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=0,r=t.length,l={};i<r;i++)if((e=t[i])&&e[1]in n){for(i=0;i<e.length;i++)l[t[0][i]]=e[i];return l}return!1}(),l={change:r.fullscreenchange,error:r.fullscreenerror},c={request:function(element){return new Promise(function(e,t){var l=function(){this.off("change",l),e()}.bind(this);this.on("change",l);var c=(element=element||n.documentElement)[r.requestFullscreen]();c instanceof Promise&&c.then(l).catch(t)}.bind(this))},exit:function(){return new Promise(function(e,t){if(this.isFullscreen){var l=function(){this.off("change",l),e()}.bind(this);this.on("change",l);var c=n[r.exitFullscreen]();c instanceof Promise&&c.then(l).catch(t)}else e()}.bind(this))},toggle:function(element){return this.isFullscreen?this.exit():this.request(element)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,t){var r=l[e];r&&n.addEventListener(r,t,!1)},off:function(e,t){var r=l[e];r&&n.removeEventListener(r,t,!1)},raw:r};r?(Object.defineProperties(c,{isFullscreen:{get:function(){return Boolean(n[r.fullscreenElement])}},element:{enumerable:!0,get:function(){return n[r.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(n[r.fullscreenEnabled])}}}),t?e.exports=c:window.screenfull=c):t?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}()},759:function(e,n,t){"use strict";t.r(n);t(9),t(8),t(6),t(4),t(7),t(25),t(27);var r=t(1),l=t(747),c=t.n(l),o=t(70);function f(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var m={props:{element:{type:String,default:""}},data:function(){return{Screenfull:c.a,isFullscreen:!1}},computed:{},methods:h(h({},Object(o.d)({setRoomToggle:"projects/setRoomToggle"})),{},{onResize:function(){this.isFullscreen=this.$fullscreen.getState(),this.$emit("toggleFullscreen",this.isFullscreen)},handleClick:function(){var e,n=this;this.element&&(this.$fullscreen.toggle(document.querySelector("#"+this.element),{}),("projectInfoRoomInfo"==this.element||this.element.includes("room"))&&(c.a.isFullscreen||(this.setRoomToggle(1),(e=100,new Promise((function(n){return setTimeout(n,e)}))).then((function(){n.setRoomToggle(2)})))))}})},d=t(20),w=t(33),F=t.n(w),v=t(154),E=t(260),O=t.n(E),k=t(47),component=Object(d.a)(m,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return this.$fullscreen.support?t("span",{directives:[{name:"resize",rawName:"v-resize",value:e.onResize,expression:"onResize"}],staticStyle:{float:"right"}},[t("v-icon",{style:e.$vuetify.breakpoint.mobile?"margin-top: 7px;":"",attrs:{color:"secondary"},on:{click:function(n){return n.stopPropagation(),e.handleClick(n)}}},[e._v("\n    "+e._s(e.isFullscreen?"mdi-fullscreen-exit":"mdi-fullscreen")+"\n  ")])],1):e._e()}),[],!1,null,"0ca8953a",null);n.default=component.exports;F()(component,{VIcon:v.a}),O()(component,{Resize:k.b})}}]);