(this["webpackJsonpgesture-calculator"]=this["webpackJsonpgesture-calculator"]||[]).push([[0],[,,function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i}));var n=t(0),r=t.n(n),l=t(8),c=t(7);function i(e){var a=Object(n.useContext)(l.a),t=a.addNumberToParcial,i=a.subtractPartialNumber,o=a.plusPartialNumber,u=e.valueKey;return r.a.createElement("div",{className:e.tallKey?"keyboard-key tall-size-key display-column-center":"keyboard-key regular-size-key display-column-center"},r.a.createElement(c.default,{click:function(){return t(u)},dragUp:function(){return o(u)},dragDown:function(){return i(u)}},r.a.createElement("div",{className:"center-key"},r.a.createElement("h3",null,e.valueKey))))}},,,,,function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return c}));var n=t(6),r=t(0),l=t.n(r);function c(e){var a=Object(r.useState)(),t=Object(n.a)(a,2),c=t[0],i=t[1],o=Object(r.useState)(),u=Object(n.a)(o,2),s=u[0],A=u[1];function m(a,t){t-s<-20?e.dragUp():t-s>20&&e.dragDown(),a-c<-20?e.dragLeft():a-c>20&&e.dragRight()}return l.a.createElement("div",{style:{height:"100%",width:"100%"},draggable:!0,onDragStart:function(e){A(e.screenY),i(e.screenX)},onDragEnd:function(e){e.preventDefault();var a=e.screenY;m(e.screenX,a)},onClick:function(a){console.log(e.click())},onTouchStart:function(e){var a=Object(n.a)(e.changedTouches,1)[0];i(a.screenX),A(a.screenY)},onTouchEnd:function(e){var a=Object(n.a)(e.changedTouches,1)[0],t=a.screenY;m(a.screenX,t)}},e.children)}function i(){}c.defaultProps={click:i,dragLeft:i,dragRight:i,dragUp:i,dragDown:i}},function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return c}));var n=t(6),r=t(0),l=t.n(r),c=l.a.createContext();function i(e){var a=Object(r.useState)(""),t=Object(n.a)(a,2),i=t[0],o=t[1],u=Object(r.useState)(0),s=Object(n.a)(u,2),A=s[0],m=s[1],d=Object(r.useState)(!1),g=Object(n.a)(d,2),f=g[0],E=g[1];return l.a.createElement(c.Provider,{value:{partialNumber:i,addNumberToParcial:function(e){o((function(a){return""+a+e}))},finalResult:A,subtractPartialNumber:function(e){var a=parseInt(""+i+e);f||o(""),isNaN(a)||m((function(){return A-a}))},plusPartialNumber:function(e){var a=parseInt(""+i+e);f||o(""),isNaN(a)||m((function(){return A+a}))},deleteLastPartialNumber:function(){o((function(e){return e.substring(0,e.length-1)}))},deleteAllPartialNumber:function(){o("")},resetFinalResult:function(){m(0)},lockPartialNumber:f,changeLockPartialNumber:function(){E((function(e){return!e}))}}},e.children)}},,,function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return c}));var n=t(0),r=t.n(n),l=t(12);function c(e){return r.a.createElement(l.b,{to:e.to},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("img",{className:"right-top-icon",src:t(41)(e.imgUrl+"")})))}},,,function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var n=t(0),r=t.n(n),l=t(15),c=t(16),i=t(8),o=t(11);function u(){return r.a.createElement(i.b,null,r.a.createElement(o.default,{to:"/gesture-calculator/info",imgUrl:"./images/info-icon.png"}),r.a.createElement("div",{className:"display-column-center",style:{minWidth:"100vw",minHeight:"-webkit-fill-available",height:"-webkit-fill-available",justifyContent:"space-between"}},r.a.createElement(l.default,null),r.a.createElement(c.default,null)))}},function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i}));var n=t(0),r=t.n(n),l=t(8),c=t(7);function i(){var e=Object(n.useContext)(l.a),a=e.partialNumber,t=e.finalResult,i=e.plusPartialNumber,o=e.subtractPartialNumber,u=e.changeLockPartialNumber,s=e.lockPartialNumber?"#ed6663":"#84a9ac";return console.log(s),r.a.createElement("div",{className:"display-column-center",style:{margin:"auto"}},r.a.createElement("div",{className:"center-key",style:{maxWidth:"90vw",margin:"25px"}},r.a.createElement("div",{className:"final-result"},t)),r.a.createElement(c.default,{dragUp:function(){return i()},dragDown:function(){return o()},click:function(){return u()}},r.a.createElement("div",{className:"center-key",style:{maxWidth:"60vw",margin:"auto"}},r.a.createElement("div",{className:"partial-result",style:{backgroundColor:s}},a))))}},function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i}));var n=t(0),r=t.n(n),l=t(2),c=t(17);function i(){return r.a.createElement("div",{style:{display:"flex",height:"60vh",width:"100%",justifyContent:"center"}},r.a.createElement("div",{className:"items-column-keyboard"},r.a.createElement(l.default,{valueKey:"1"}),r.a.createElement(l.default,{valueKey:"4"}),r.a.createElement(l.default,{valueKey:"7"})),r.a.createElement("div",{className:"items-column-keyboard"},r.a.createElement(l.default,{valueKey:"2"}),r.a.createElement(l.default,{valueKey:"5"}),r.a.createElement(l.default,{valueKey:"8"})),r.a.createElement("div",{className:"items-column-keyboard"},r.a.createElement(l.default,{valueKey:"3"}),r.a.createElement(l.default,{valueKey:"6"}),r.a.createElement(l.default,{valueKey:"9"})),r.a.createElement("div",{className:"items-column-keyboard"},r.a.createElement(c.default,{valueKey:"<"}),r.a.createElement(l.default,{valueKey:"0",tallKey:!0})))}},function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i}));var n=t(0),r=t.n(n),l=t(8),c=t(7);function i(e){var a=Object(n.useContext)(l.a),t=a.deleteLastPartialNumber,i=a.deleteAllPartialNumber,o=a.resetFinalResult;return r.a.createElement("div",{className:"keyboard-key regular-size-key display-column-center",style:{backgroundColor:"#3b6978"}},r.a.createElement(c.default,{click:t,dragLeft:i,dragUp:o},r.a.createElement("div",{className:"center-key"},r.a.createElement("h3",null,e.valueKey))))}},function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i}));var n=t(0),r=t.n(n),l=t(19),c=t(11);function i(){return r.a.createElement("div",{className:"display-column-center"},r.a.createElement(c.default,{to:"/gesture-calculator",imgUrl:"./images/exit-icon.png"}),r.a.createElement("div",{className:"main-div-info"},r.a.createElement("h1",null,"Introducci\xf3n a la Calculadora"),r.a.createElement("p",null,"Comenzamos por identificar las tres secciones que componen de la calculadora."),r.a.createElement(l.default,null),r.a.createElement("h2",null,"Sumar y Restar"),r.a.createElement("p",null,"Para sumar \xf3 restar un d\xedgito simplemente hay que deslizar hacia arriba \xf3 hacia abajo en el n\xfamero deseado en el teclado."),r.a.createElement("p",null,"Para sumar o restar n\xfameros de m\xe1s de un d\xedgito, basta con ir acumulando los mismos en \u201cD\xedgitos Parciales\u201d mediante un click sobre el n\xfamero del teclado. Luego para sumar o restar dicho n\xfamero se realiza el mismo gesto de deslizamiento hacia arriba o hacia abajo sobre \u201cDigitos Parciales\u201d o sobre el \xfaltimo n\xfamero que va a componer \u201cD\xedgitos Parciales\u201d"),r.a.createElement("h2",null,"Digitos Parciales"),r.a.createElement("p",null,"Es posible bloquear el n\xfamero presente en \u201cD\xedgitos Parciales\u201d, mediante un click sobre el mismo, evitando que este desaparezca al realizar una operaci\xf3n de suma o resta. Para desbloquear \u201cD\xedgitos Parciales\u201d basta con hacer un click nuevamente."),r.a.createElement("h2",null,"Eliminar"),r.a.createElement("p",null,"Mediante un deslizamiento hacia arriba en la tecla \u201c<\u201d, se reseteara a 0 el \u201cResultado Final\u201d."),r.a.createElement("p",null,"Por otro lado mediante un click sobre la tecla \u201c<\u201d, se eliminar\xe1 el \xfaltimo el \xfaltimo d\xedgito de \u201cD\xedgitos Parciales\u201d. Y con un deslizamiento hacia la izquierda sobre la tecla \u201c<\u201d, se eliminar\xe1n todos los d\xedgitos de \u201cD\xedgitos Parciales\u201d")))}},function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return l}));var n=t(0),r=t.n(n);function l(){return r.a.createElement("div",{className:"display-column-center fit-content info-sections-div"},r.a.createElement("div",{className:"final-result fit-content info-final-result"},"Resultado Final"),r.a.createElement("div",{className:"partial-result fit-content info-partial-result"},"D\xedgitos Parciales"),r.a.createElement("div",{className:"keyboard-key",style:{padding:"50px 20px",width:"80%",textAlign:"center"}},"Teclado"))}},,,,,function(e,a,t){},,,,,function(e,a,t){e.exports=t(45)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){var n={"./GestureDiv":7,"./GestureDiv.js":7,"./InfoCalculator":18,"./InfoCalculator.js":18,"./InfoSectionsCalculator":19,"./InfoSectionsCalculator.js":19,"./Keyboard":16,"./Keyboard.js":16,"./KeyboardDeleteKey":17,"./KeyboardDeleteKey.js":17,"./KeyboardKey":2,"./KeyboardKey.js":2,"./MainCalculator":14,"./MainCalculator.js":14,"./ScreenCalculator":15,"./ScreenCalculator.js":15,"./TopRightLinkIcon":11,"./TopRightLinkIcon.js":11,"./components-style.css":24,"./images/back-icon.png":42,"./images/exit-icon.png":43,"./images/info-icon.png":44};function r(e){var a=l(e);return t(a)}function l(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=41},function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAD8klEQVRYCe2ZT2vUQBTAX7KrJwUPCiKyB7+EB/9AvSoITU31E/Rqq62WrjjQrbVVW7+FZrtBe1F6EvwOvUkPxZNY6EEUNdtxXrftptukC7LJzLx5gbeZTELmze83s/kHwAsTYAJMgAkwASbABJgAE2ACTIAJMAEmwASYABMgREAI4ZvaHc/UxAaVVyNaWZDgX2577VsiDH8M6ryDOg9pAQgfwJvag/U58XZumibB2Km5B+2/V7NR/DwFH89zvQL+B9FsnsINU4KkAITvgXzUC9mTcK0qKx8XVldP9+7TtU1OQKPZepwFvwtYnv/1E4wRUO0mZn8JRz7IoyP/oGcS1pOT/g0xfPvbQZ3mApmLMMI/duQfwB82Bj66JyHAVvgkBNgM33oBtsO3WgAF+NYKoAIfBVj3HDAbrQgb73YQdlZYdRfUge89zerIbp2ht5q7ueX8WCOAInx0YoUAqvCtEEAZvvECqMM3WoAL8I0V4Ap8IwW4BN84Aa7BN0qAi/BRQAV/dMdcFOPTrYC8xcIn3Lyu9NZrfxBD+BKkgLyFMHzsslYBrsPXKoDhI34ALTOA4Xfg42/pAhg+Yu9GqQIYfhf8fqk0AQx/H/nhdSkCGP5h6OmtwgU0ongKQC6kG+0pf0mq3pAIgq899U5s+kX2Ekf+sfDxIeuEf8VV+Mi+sBnAIx/x9o/CZoCEnTP9m+cjCpsBiLbfLJAAm1X1/z8dBBt4vItR2AxAmPXRYFG9aJvHclYo+7V2ItdEHF/M2u9CnWJQfDd5JuQzLkUANs8SkMLRKE0ANs0SkMLhKFUANj3XbE1KCYtYzgrXLsylC0DoLAEpdEKLAGyaJSAFTR9kOk0DsATNAlCE6xIKfRBDwP1iJhx5oV7YTeYdp/4ja0kiP83H8aW8Y2yuV/0zI/1GtPJQTUglIzsfqndHxghA7C5KMEqAixKME+CaBCMFoAT1Ne2BepP6EstZQeWaYKwAhO6CBKMFuCDBeAHUJVghgLIEawSghEazNQESXmE5K2y8MFslAKFTk2CdAGoSrBRASYK1AqhI8LEjtkY9HFlSF96JvPzV6DL+VbbKMS99e+pno9a46shSXsZK0ma16g1NB8FG3jG66lXeupoebLu2SiAjAHXaKMHqawBCT8eT0ZFl9XlzJl2XLqvRVmsnck28Wb2QrtdZJiUAQdZH7zwD6Y1jOTM8WIfK7++Z+zRUkhOADOt3g9dZEtQMeJ/ATijC8A8eZ0KQFIBgj0qQ785ubxkFH/NUgwJXdKPxNr4Pnrx6bnvr3tjY2F+6PTW4Z0IIsjPdYOycGhNgAkyACTABJsAEmAATYAJMgAkwASbABJhAD4F/Vf9MJFV/w5QAAAAASUVORK5CYII="},function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAFDElEQVRYCe2Zz2scZRjH33d21iT9QVoL/ge2BCJID3pRyKnF9KCF+OZQKW2gRBA8RANCIyyaXtoaobegJ4mYDKvQY/ViBQ9KDz2U9ezJgyj1sGmSdnd8nm1Ct2VmMu+77+z7vuUb3neTnffX83w+mdmZd4XADwiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAhUTkCarrC6ulr/+8ixLdPxz9G4naXZmTHTfGLTgX8dPSrjVESm45+jcbVBcgHAQehZGAsBFiAOMgUEDELPwlgIsABxkCmMP4QLFn14XHaN7woK5nXa1Gq36/GBww9sB1GFAKGU6tgO1PV8jSSpidR+FLgE2WeqNSMEaOGy3xkC7DPVmhECtHDZ7wwB9plqzQgBWrjsd4YA+0y1ZoQALVz2O1fyIGYS5ufrzatSimOP/rh3qdFodE3m2G8MPUwdikW0JkW3cVmpu/v1H0a7F2fA8kbzGsFfpITn4onJr0iA9bgI/otxGt2mp9m30zT6+bPvmq/Tes6L9UR1M1peb35BYz6mulesS9iF/xMtcJIql/EoEreWk+Q1fuOyOhVwZaO5IqRYyABgTUIG/L3lxkUa/ehagjMBK0kylkrx5h6NjN9z9YnJG2lKvTIayxwi+IfitHaT+p6kmlVIQu1SVsOwjjkTsKDUg5GtzalUyNt5ydLm4wdXku+/NvlMIPiPr/kifaNg/rXjsvN+XvswjjsTwMktnj/fHt1unymSQP20L0e78Puv+TTN04Xkrp2Q3Quut86dCmAktiWEBJ/zdy6Ag7AlITT4nLsXAjiQQSWECJ/z9kYAB2MqIVT4nLNXAjggXQkhw+d8vRPAQZWVUJt45RvaXgjibofzyqpeCuBAy0iQIj1HffMesoQvt5oUY27xVgBHXEYC98uqIcDnuL0WwAGaSAgFPufnvQAOsk/Cr/y+qNLe0bc+POEWxdjfFoQADrg9OjpCX6Qc5L+LqpTRTqvVopOgqJc/bUEIeHKrKV/dH116saovdfZfW7+H9wKewBe5dzsZaWtv4GXMMZRDXgswhL8HLggJ3gooA5+2sdeJ9i9U84r3EqK8yF0eLwdf0H5+572R7c1pEpH7pQ7l4bUE7wSUh//4y5S+W9QgJXglQBc+/Xf3SsgSvBFgCr9ngF5CleCFgEHhE/9eCVGCcwG24PcM0EtoEpwKsA2f+PdKSBKcCagKfs8AvbCEzgvRO0KKO/Q2r8zVJyZv0AaezOtQ9XFnAnYTy11fSvHDS/f/mVNKdXb7av9qnD17f2Rrc6rwOUGKP6WUzjbvcgFoZ6s5oKHUv7HsThHo354dSjTWXhZdNT8///DZNt33fCaMbrfPZEtIFy+rmWu6c9rs70wAJ/GJUv/VRPe0EPJ3fs+V4dvez8+UIMVHS7PvXuc1XVanAjhxlhDLzimWUAV8XoNrvwRaZ2FJzazwcdfVuQAGwBIeyc5bg17zea6iyhLGD4+d/nR25suifsNsi4e5WNFa/JlQ1G6r7cPp6W1bc9mYx4szwEYioc4BAY7NQQAEOCbgeHmcARDgmIDj5XEGQIBjAo6Xr+JBrL680TTewXTMI3952r/IbzRvqUIAR4NLG1MoUQGqBKQqu0BAlXRLzA0BJSBV2QUCqqRbYm7jD2HaPt5JksR4fInYgujSarUquj8KIn0ECQIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIlCfwPSPUnJKT+BasAAAAASUVORK5CYII="},function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAABpklEQVRYCe3YwY0CMRBEUVgRIhLJcCQZJHJkI+hLj+1azz6Olto18z+FbC4XHwQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEphO4Hkl4vT/fI/NnmX0+7m2OP2eBsOt7EBA2RwABYQLheA0IC7jNyD9yKpjxPKP2nHHq04BRdpr7ENAEN2qMgFEkm/sQ0AQ3aoyAUSSb+xDQBDdqjIBRJJv7ENAEN2psykVs1MNV+1QXoh0vgBpQWV60TsAi0FUMARWZResELAJdxRBQkVm0vuUpaMfTTuVTAyoyi9YJWAS6iiGgIrNonYBFoKsYAioyi9a3PAX5L2jRt+M/xPgJClsmgIAwgXC8BhAQJhCO1wACwgTC8RpAQJhAOF4DCAgTCMdrAAFhAuF4DSAgTCAcrwEEhAmE4zWAgDCBcLwGEBAmEI7XgLCAWzi/Ff983K+twT84pAFhKQQQECYQjtcAAsIEwvEaQECYQDheA8ICplzEXu/PN/xe28RrQFgVAQSECYTjNYCAMAHxCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgicn8Av6bYVuJiuLq0AAAAASUVORK5CYII="},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t.n(l),i=(t(34),t(12)),o=t(9),u=(t(35),t(24),t(14)),s=t(18);var A=function(){return r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/gesture-calculator"},r.a.createElement(u.default,null)),r.a.createElement(o.a,{path:"/gesture-calculator/info"},r.a.createElement(s.default,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.0ae73927.chunk.js.map