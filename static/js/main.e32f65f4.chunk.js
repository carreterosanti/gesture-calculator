(this["webpackJsonpgesture-calculator"]=this["webpackJsonpgesture-calculator"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),u=(a(9),a(10),a(11),a(1)),i=r.a.createContext();function o(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(0),s=Object(u.a)(o,2),m=s[0],d=s[1];return r.a.createElement(i.Provider,{value:{partialNumber:l,addNumberToParcial:function(e){c((function(t){return""+t+e}))},finalResult:m,subtractPartialNumber:function(e){var t=parseInt(""+l+e);c(""),isNaN(t)||d((function(){return m-t}))},plusPartialNumber:function(e){var t=parseInt(""+l+e);c(""),isNaN(t)||d((function(){return m+t}))},deleteLastPartialNumber:function(){c((function(e){return e.substring(0,e.length-1)}))},deleteAllPartialNumber:function(){c("")},resetFinalResult:function(){d(0)}}},e.children)}function s(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(),o=Object(u.a)(i,2),s=o[0],m=o[1];function d(t,a){a-s<-20?e.dragUp():a-s>20&&e.dragDown(),t-l<-20?e.dragLeft():t-l>20&&e.dragRight()}return r.a.createElement("div",{style:{height:"100%",width:"100%"},draggable:!0,onDragStart:function(e){m(e.screenY),c(e.screenX)},onDragEnd:function(e){e.preventDefault();var t=e.screenY;d(e.screenX,t)},onClick:function(t){console.log(e.click())},onTouchStart:function(e){var t=Object(u.a)(e.changedTouches,1)[0];c(t.screenX),m(t.screenY)},onTouchEnd:function(e){var t=Object(u.a)(e.changedTouches,1)[0],a=t.screenY;d(t.screenX,a)}},e.children)}function m(){}function d(){var e=Object(n.useContext)(i),t=e.partialNumber,a=e.finalResult,l=e.plusPartialNumber,c=e.subtractPartialNumber;return r.a.createElement("div",{className:"display-column-center",style:{maxWidth:"80vw",margin:"auto"}},r.a.createElement("h1",{style:{padding:"40px",backgroundColor:"#3b6978",color:"white"}},a),r.a.createElement(s,{dragUp:function(){return l()},dragDown:function(){return c()}},r.a.createElement("div",{className:"center-key",style:{maxWidth:"60vw",margin:"auto"}},r.a.createElement("h3",{style:{padding:"20px",backgroundColor:"#84a9ac",color:"white",maxWidth:"100%",overflow:"hidden"}},t))))}function v(e){var t=Object(n.useContext)(i),a=t.addNumberToParcial,l=t.subtractPartialNumber,c=t.plusPartialNumber,u=e.valueKey;return r.a.createElement("div",{className:e.tallKey?"keyboard-key tall-size-key display-column-center":"keyboard-key regular-size-key display-column-center"},r.a.createElement(s,{click:function(){return a(u)},dragUp:function(){return c(u)},dragDown:function(){return l(u)}},r.a.createElement("div",{className:"center-key"},r.a.createElement("h3",null,e.valueKey))))}function b(e){var t=Object(n.useContext)(i),a=t.deleteLastPartialNumber,l=t.deleteAllPartialNumber,c=t.resetFinalResult;return r.a.createElement("div",{className:"keyboard-key regular-size-key display-column-center",style:{backgroundColor:"#3b6978"}},r.a.createElement(s,{click:a,dragLeft:l,dragUp:c},r.a.createElement("div",{className:"center-key"},r.a.createElement("h3",null,e.valueKey))))}function f(){return r.a.createElement("div",{style:{display:"flex",height:"60vh",width:"100%",justifyContent:"center"}},r.a.createElement("div",{className:"items-column-keyboard"},r.a.createElement(v,{valueKey:"1"}),r.a.createElement(v,{valueKey:"4"}),r.a.createElement(v,{valueKey:"7"})),r.a.createElement("div",{className:"items-column-keyboard"},r.a.createElement(v,{valueKey:"2"}),r.a.createElement(v,{valueKey:"5"}),r.a.createElement(v,{valueKey:"8"})),r.a.createElement("div",{className:"items-column-keyboard"},r.a.createElement(v,{valueKey:"3"}),r.a.createElement(v,{valueKey:"6"}),r.a.createElement(v,{valueKey:"9"})),r.a.createElement("div",{className:"items-column-keyboard"},r.a.createElement(b,{valueKey:"<"}),r.a.createElement(v,{valueKey:"0",tallKey:!0})))}function y(){return r.a.createElement(o,null,r.a.createElement("div",{className:"display-column-center",style:{minWidth:"100vw",minHeight:"-webkit-fill-available",height:"-webkit-fill-available",justifyContent:"space-between"}},r.a.createElement(d,null),r.a.createElement(f,null)))}s.defaultProps={click:m,dragLeft:m,dragRight:m,dragUp:m,dragDown:m};var g=function(){return r.a.createElement(y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.e32f65f4.chunk.js.map