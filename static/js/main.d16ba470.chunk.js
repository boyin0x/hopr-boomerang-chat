(this["webpackJsonphopr-demo-react-hello-world"]=this["webpackJsonphopr-demo-react-hello-world"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n(4),o=n(2),s=n(3),a=n.n(s),u=n(1),i=n(8),d=n(7),l=function(e){var t=Object(u.useState)(),n=Object(o.a)(t,2),r=(n[0],n[1]),c=Object(i.a)({status:"DISCONNECTED"}),s=Object(o.a)(c,2),a=s[0],l=s[1],j=Object(u.useRef)(),f=Object(d.debounce)((function(e){r(e)}),1e3),p=function(){console.info("WS CONNECTED"),l((function(e){return e.status="CONNECTED",e}))},b=function(){console.info("WS DISCONNECTED"),l((function(e){return e.status="DISCONNECTED",e})),f(+new Date)},O=function(e){console.error("WS ERROR",e),l((function(t){t.status="DISCONNECTED",t.error=String(e)})),f(+new Date)};return Object(u.useEffect)((function(){if("undefined"!==typeof window){j.current&&(console.info("WS Disconnecting.."),j.current.close(1e3,"Shutting down"));try{var t=new URL(e.wsEndpoint);e.securityToken&&(t.search="?apiToken=".concat(e.securityToken)),console.info("WS Connecting.."),j.current=new WebSocket(t),j.current.addEventListener("open",p),j.current.addEventListener("close",b),j.current.addEventListener("error",O)}catch(n){console.error("URL is invalid",e.wsEndpoint)}return function(){j.current&&(j.current.removeEventListener("open",p),j.current.removeEventListener("close",b),j.current.removeEventListener("error",O))}}}),[e.wsEndpoint,e.securityToken]),{state:a,socketRef:j}},j=n(0),f=function(e){var t=e.wsEndpoint,n=e.securityToken,r=Object(u.useState)(""),s=Object(o.a)(r,2),i=s[0],d=s[1],f=l({wsEndpoint:t,securityToken:n}).socketRef,p=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n=JSON.parse(t.data),console.log("WebSocket Data",n),"message"===n.type&&d(n.msg)}catch(r){console.error(r)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){if(f.current)return f.current.addEventListener("message",p),function(){f.current&&f.current.removeEventListener("message",p)}}),[f.current]),Object(j.jsx)("span",{children:i||"You have no messages."})};n(15);function p(){var e=Object(u.useState)("Hello world"),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(u.useState)(""),i=Object(o.a)(s,2),d=i[0],l=i[1],p=Object(u.useState)("ws://localhost:3000"),b=Object(o.a)(p,2),O=b[0],h=b[1],v=Object(u.useState)("http://localhost:3001"),E=Object(o.a)(v,2),w=E[0],S=E[1],x=Object(u.useState)(""),g=Object(o.a)(x,2),m=g[0],k=g[1],y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new Headers;return e&&(t.set("Content-Type","application/json"),t.set("Accept-Content","application/json")),t.set("Authorization","Basic "+btoa(d)),t};Object(u.useEffect)((function(){var e=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y(),e.next=3,fetch("".concat(w,"/api/v2/account/address"),{headers:t}).then((function(e){return e.json()})).catch((function(e){return console.error(e)}));case 3:n=e.sent,k(null===n||void 0===n?void 0:n.hoprAddress);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[d,w]);var C=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("".concat(w,"/api/v2/messages"),{method:"POST",headers:y(!0),body:JSON.stringify({recipient:m,body:n})}).catch((function(e){return console.error(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"WS Endpoint"})," ",Object(j.jsx)("input",{name:"wsEndpoint",placeholder:O,value:O,onChange:function(e){return h(e.target.value)}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"HTTP Endpoint"})," ",Object(j.jsx)("input",{name:"httpEndpoint",placeholder:w,value:w,onChange:function(e){return S(e.target.value)}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Security Token"})," ",Object(j.jsx)("input",{name:"securityToken",placeholder:d,value:d,onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Send a message"})," ",Object(j.jsx)("input",{name:"httpEndpoint",value:n,placeholder:n,onChange:function(e){return r(e.target.value)}})]}),Object(j.jsx)("button",{onClick:function(){return C()},children:"Send message to node"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)(f,{wsEndpoint:O,securityToken:d})]})}var b=document.getElementById("root");Object(r.render)(Object(j.jsx)(p,{}),b)}},[[16,1,2]]]);
//# sourceMappingURL=main.d16ba470.chunk.js.map