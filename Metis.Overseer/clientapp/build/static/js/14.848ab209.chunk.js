(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{391:function(e,t,n){"use strict";n(419);var r=n(441),a=n(382),c=n.n(a),u=n(383),s=n(31),o="http://192.168.101.57";function i(){var e=new Headers;e.append("Content-Type","application/json");var t=s.a.get("token");return t&&e.append("Authorization","Bearer ".concat(t)),e}function l(e){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.json();case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",null);case 9:case"end":return e.stop()}},e,null,[[0,6]])}))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(c.a.mark(function e(t){var n,a,u,s,p;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.method,a=t.url,u=t.data,e.prev=1,e.next=4,fetch(o+a,{method:n,headers:i(),body:u&&JSON.stringify(u)});case 4:return s=e.sent,e.next=7,l(s);case 7:if(p=e.sent,s.ok){e.next=10;break}throw new Error(p&&p.Message||"".concat(s.statusText," (").concat(s.status,")"));case 10:return e.abrupt("return",p);case 13:return e.prev=13,e.t0=e.catch(1),r.a.error({placement:"bottomRight",message:"\u03a3\u03c6\u03ac\u03bb\u03bc\u03b1",description:e.t0.message}),e.abrupt("return",null);case 17:case"end":return e.stop()}},e,null,[[1,13]])}))).apply(this,arguments)}var m={get:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f({method:"GET",url:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),post:function(){var e=Object(u.a)(c.a.mark(function e(t,n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f({method:"POST",url:t,data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),put:function(){var e=Object(u.a)(c.a.mark(function e(t,n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f({method:"PUT",url:t,data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),patch:function(){var e=Object(u.a)(c.a.mark(function e(t,n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f({method:"PATCH",url:t,data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),delete:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f({method:"DELETE",url:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};t.a=m},397:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"f",function(){return u}),n.d(t,"a",function(){return s}),n.d(t,"e",function(){return o});var r="".concat("http://192.168.101.57","/guard"),a={LIGHT:"https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",LIGHT_LABELS:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",DARK:"https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",DARK_LABELS:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"},c={lat:38,lng:25},u={Alarm:"#f5222d",Ok:"#52c41a",NotFound:"#1890ff",Maintenance:"#faad14",Selected:"cyan",Pending:"#fadb14"},s=[{key:"Ok",enabled:!1,color:u.Ok},{key:"Alarm",enabled:!0,color:u.Alarm},{key:"Maintenance",enabled:!0,color:u.Maintenance},{key:"NotFound",enabled:!1,color:u.NotFound},{key:"Pending",enabled:!1,color:u.Pending},{key:"\u0394\u03ae\u03bc\u03bf\u03b9",enabled:!0,color:"#2abbbb"}];function o(e,t,n){return t.find(function(t){return t.key===e.status}).enabled&&t.find(function(t){return t.key===e.category}).enabled&&e.name.toLowerCase().match(n)}},426:function(e,t,n){"use strict";var r=n(382),a=n.n(r),c=n(383),u=n(561),s=n(31),o=12e4,i=6e3;function l(){return(l=Object(c.a)(a.a.mark(function e(t){var n,r,l;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l=function(){return(l=Object(c.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s.a.get("token")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.start();case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0),setTimeout(function(){return r()},i);case 11:case"end":return e.stop()}},e,null,[[2,7]])}))).apply(this,arguments)},r=function(){return l.apply(this,arguments)},(n=(new u.a).withUrl(t,{accessTokenFactory:function(){return s.a.get("token")}}).configureLogging(u.b.Debug).build()).serverTimeoutInMilliseconds=o,n.onclose(Object(c.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}))),e.next=7,r();case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}t.a=function(e){return l.apply(this,arguments)}},428:function(e,t,n){},493:function(e,t,n){"use strict";var r=n(77),a=n(382),c=n.n(a),u=n(450),s=n(383),o=n(47),i=n(0),l=n.n(i),p=n(426),f=n(397),d=n(391);t.a=function(e){var t=e.children,n=Object(i.useRef)(null),a=Object(i.useState)([]),m=Object(o.a)(a,2),h=m[0],b=m[1],v=Object(i.useState)([]),y=Object(o.a)(v,2),g=y[0],w=y[1],x=Object(i.useState)(null),k=Object(o.a)(x,2),E=k[0],O=k[1],j=Object(i.useState)(null),S=Object(o.a)(j,2),T=S[0],L=S[1];function C(){return A.apply(this,arguments)}function A(){return(A=Object(s.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return O(function(e){return Object(r.a)({},e,{status:"Pending"})}),e.next=3,d.a.get("/api/sites/".concat(E.id,"/maintenance/start"));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(){return G.apply(this,arguments)}function G(){return(G=Object(s.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return O(function(e){return Object(r.a)({},e,{status:"Pending"})}),e.next=3,d.a.get("/api/sites/".concat(E.id,"/maintenance/stop"));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(i.useEffect)(function(){function e(){return(e=Object(s.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/sites");case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),Object(p.a)(f.b).then(function(e){n.current=e,n.current.on("SiteStatusChanged",function(e){console.info("".concat(e.name,": ").concat(e.previousStatus," -> ").concat(e.currentStatus)),w(function(t){return[e].concat(Object(u.a)(t.slice(-100)))}),L(e)}),n.current.on("SiteGuardingException",function(e){console.info("site exception:",e)})}).catch(function(e){console.error(e),n.current=null}),function(){n.current&&(n.current.stop(),n.current=null)}},[]),Object(i.useEffect)(function(){T&&(b(function(e){var t=e.find(function(e){return e.id===T.id}),n=e.indexOf(t);return e.splice(n,1,Object(r.a)({},t,{status:T.currentStatus})),e.slice()}),O(function(e){return e&&e.id===T.id?Object(r.a)({},e,{status:T.currentStatus}):e}))},[T]),l.a.Children.map(t,function(e){return l.a.cloneElement(e,{sites:h,messages:g,alarm:T,selected:E,setSelected:O,onMaintenanceStart:C,onMaintenanceStop:N})})}},494:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(601),u=n(602),s=n(594),o=n(385),i=n.n(o),l=(n(428),n(397));t.a=function(e){var t=e.sites,n=e.selected,r=e.onSelect;return a.a.createElement(c.a,{center:l.c,zoom:7,className:"map"},a.a.createElement(u.a,{url:l.d.LIGHT}),t.filter(function(e){return e.latitude>0}).map(function(e){return a.a.createElement(s.a,{key:e.id,position:{lat:e.latitude,lng:e.longitude},icon:new i.a.DivIcon({className:"marker-".concat(e.status.toLowerCase()).concat(n&&n.id===e.id?" marker-selected":"")}),onclick:function(){return r(e)}})}))}},566:function(e,t,n){"use strict";n(197);var r=n(20),a=n(47),c=n(0),u=n.n(c),s=n(397),o=function(e){var t=e.alarm,n=e.isExpanded;return u.a.createElement("p",{style:{fontSize:12,fontWeight:"bolder"}},u.a.createElement("span",{style:{color:s.f[t.currentStatus]}},"[",(new Date).toLocaleTimeString("el-GR"),"]"),u.a.createElement("span",{style:{color:"white"}},t.name),u.a.createElement("span",{style:{color:s.f[t.previousStatus]}},t.previousStatus),u.a.createElement("span",{style:{color:"white"}},"\u2192"),u.a.createElement("span",{style:{color:s.f[t.currentStatus]}},t.currentStatus),n&&u.a.createElement("span",null,"(",t.message,")"))};n(428),t.a=function(e){var t=e.alarms,n=Object(c.useRef)(null),s=Object(c.useState)(!1),i=Object(a.a)(s,2),l=i[0],p=i[1];return u.a.createElement("div",{className:"map-alarms-container",ref:n},u.a.createElement("div",{className:"map-alarms-content"},u.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},l?u.a.createElement("span",{className:"is-link",onClick:function(){n.current.style.height="200px",n.current.style.width="450px",p(!1)}},u.a.createElement(r.a,{type:"shrink",title:"\u0395\u03bb\u03b1\u03c7\u03b9\u03c3\u03c4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7",style:{fontWeight:"bolder"}})):u.a.createElement("span",{className:"is-link",onClick:function(){n.current.style.height="calc(100% - 100px)",n.current.style.width="60vw",p(!0)}},u.a.createElement(r.a,{type:"arrows-alt",title:"\u039c\u03b5\u03b3\u03b9\u03c3\u03c4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7",style:{fontWeight:"bolder"}}))),t.map(function(e,t){return u.a.createElement(o,{key:t,alarm:e,isExpanded:l})})))}},603:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(493),u=n(494),s=n(566),o=function(e){var t=e.sites,n=e.selected,r=e.setSelected,c=e.messages;return a.a.createElement("div",{style:{height:"100vh",display:"flex"}},a.a.createElement("div",{style:{flexGrow:1}},a.a.createElement(u.a,{sites:t,selected:n,onSelect:r,zoom:9,style:{height:"100vh"}}),a.a.createElement("svg",{hidden:!0},a.a.createElement("filter",{id:"map-filter"},a.a.createElement("feColorMatrix",{type:"matrix",values:"0.2 0 0 0 0  0 0.3 0 0 0  0 0 0.4 0 0  0 0 0 1 0"})))),a.a.createElement(s.a,{alarms:c}))};t.default=function(){return a.a.createElement(c.a,null,a.a.createElement(o,null))}}}]);
//# sourceMappingURL=14.848ab209.chunk.js.map