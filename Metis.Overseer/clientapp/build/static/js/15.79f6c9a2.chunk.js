(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{397:function(e,t,n){"use strict";n(420);var r=n(431),a=n(386),c=n.n(a),u=n(387),o=n(31),s="https://scag.ga";function i(){var e=new Headers;e.append("Content-Type","application/json");var t=o.a.get("token");return t&&e.append("Authorization","Bearer ".concat(t)),e}function p(e){return l.apply(this,arguments)}function l(){return(l=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.json();case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",null);case 9:case"end":return e.stop()}},e,null,[[0,6]])}))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(c.a.mark(function e(t){var n,a,u,o,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.method,a=t.url,u=t.data,e.prev=1,e.next=4,fetch(s+a,{method:n,headers:i(),body:u&&JSON.stringify(u)});case 4:return o=e.sent,e.next=7,p(o);case 7:if(l=e.sent,o.ok){e.next=10;break}throw new Error(l&&l.Message||"".concat(o.statusText," (").concat(o.status,")"));case 10:return e.abrupt("return",l);case 13:return e.prev=13,e.t0=e.catch(1),r.a.error({placement:"bottomRight",message:"\u03a3\u03c6\u03ac\u03bb\u03bc\u03b1",description:e.t0.message}),e.abrupt("return",null);case 17:case"end":return e.stop()}},e,null,[[1,13]])}))).apply(this,arguments)}var d={get:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f({method:"GET",url:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),post:function(){var e=Object(u.a)(c.a.mark(function e(t,n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f({method:"POST",url:t,data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),put:function(){var e=Object(u.a)(c.a.mark(function e(t,n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f({method:"PUT",url:t,data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),patch:function(){var e=Object(u.a)(c.a.mark(function e(t,n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f({method:"PATCH",url:t,data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),delete:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f({method:"DELETE",url:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};t.a=d},625:function(e,t,n){},634:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(386),u=n.n(c),o=n(387),s=n(48),i=n(46),p=n(397),l=Object(i.f)(function(e){var t=e.match.params.id,n=e.children,c=e.history,i=Object(r.useState)(null),l=Object(s.a)(i,2),f=l[0],h=l[1];function d(){c.push("/logbooks")}function m(){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.put("/api/logbooks/".concat(t),f);case 2:n=e.sent,h(n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function b(){c.push("/logbooks/".concat(t))}return Object(r.useEffect)(function(){function e(){return(e=Object(o.a)(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/logbooks/".concat(t));case 2:n=e.sent,h(n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[t]),a.a.Children.map(n,function(e){return a.a.cloneElement(e,{logBook:f,onBack:d,onSave:m,onCancel:b})})}),f=(n(508),n(507)),h=(n(401),n(400)),d=(n(625),"\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u0392\u03b9\u03b2\u03bb\u03af\u03bf\u03c5 \u03a3\u03c5\u03bc\u03b2\u03ac\u03bd\u03c4\u03c9\u03bd"),m="\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7",v="\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",b=function(e){var t=e.logBook,n=e.onBack,r=e.onSave,c=e.onCancel;return a.a.createElement(f.a,{title:t.name,subTitle:d,onBack:function(){return n()},className:"logbook-header",extra:[[a.a.createElement(h.a,{key:"2",type:"danger",size:"small",onClick:c},v),a.a.createElement(h.a,{key:"1",type:"primary",size:"small",onClick:r},m)]]})},k=function(e){var t=e.logBook,n=e.onBack,r=e.onSave,c=e.onCancel;return t?a.a.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column"}},a.a.createElement(b,{logBook:t,onBack:n,onSave:r,onCancel:c}),a.a.createElement("div",{style:{display:"flex",height:"100%"}},a.a.createElement("div",null,"form"))):null};t.default=function(){return a.a.createElement(l,null,a.a.createElement(k,null))}}}]);
//# sourceMappingURL=15.79f6c9a2.chunk.js.map