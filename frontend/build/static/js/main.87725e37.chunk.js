(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{201:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){},397:function(e,t,n){},398:function(e,t,n){},399:function(e,t,n){},400:function(e,t,n){},401:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n(179),r=n.n(a),i=n(76),o=n(6),j=n(29),l=(n(201),n(1)),u=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(j.a)(a,2),o=r[0],u=r[1];return Object(l.jsx)("div",{className:"joinOuterContainer",children:Object(l.jsxs)("div",{className:"joinInnerContainer",children:[Object(l.jsx)("h1",{className:"heading",children:"Connect"}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return s(e.target.value)}})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return u(e.target.value)}})}),Object(l.jsx)(i.b,{to:"/chat?name=".concat(n,"&room=").concat(o),onClick:function(e){return n&&o?null:e.preventDefault()},children:Object(l.jsx)("button",{className:"button mt-20",type:"submit",children:"Sign In"})})]})})},m=n(196),b=n(181),O=n.n(b),A=n(182),d=n.n(A),h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII=",x=(n(241),function(e){var t=e.room;return Object(l.jsxs)("div",{className:"infoBar",children:[Object(l.jsxs)("div",{className:"leftInnerContainer",children:[Object(l.jsx)("img",{className:"onlineIcon",src:h,alt:"online-img"}),Object(l.jsx)("h3",{children:t})]}),Object(l.jsx)("div",{className:"rightInnerContainer",children:Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=",alt:"close-img"})})})]})}),g=(n(242),function(e){var t=e.message,n=e.setMessage,s=e.sendMessage;return Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("input",{className:"input",type:"text",placeholder:"Type a text",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?s(e):null}}),Object(l.jsx)("button",{className:"sendButton",onClick:function(e){return s(e)},children:"Send"})]})}),f=n(195),p=n(115),v=n.n(p),N=(n(397),function(e){var t=e.message,n=t.user,s=t.text,c=!1,a=e.name.trim().toLowerCase();return n===a&&(c=!0),c?Object(l.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(l.jsx)("p",{className:"sentText pr-10",children:a}),Object(l.jsx)("div",{className:"messageBox backgroundBlue",children:Object(l.jsx)("p",{className:"messageText colorWhite",children:v.a.emojify(s)})})]}):Object(l.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(l.jsx)("div",{className:"messageBox backgroundLight",children:Object(l.jsx)("p",{className:"messageText colorDark",children:v.a.emojify(s)})}),Object(l.jsx)("p",{className:"sentText pl-10",children:n})]})}),C=(n(398),function(e){var t=e.messages,n=e.name;return Object(l.jsx)(f.a,{className:"messages",children:t.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(N,{message:e,name:n})},t)}))})}),I=(n(399),function(e){var t=e.users;return Object(l.jsx)("div",{className:"textContainer",children:t?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Users Online"}),Object(l.jsx)("div",{className:"activeContainer",children:Object(l.jsx)("h2",{children:t.map((function(e){var t=e.name;return Object(l.jsxs)("div",{className:"activeItem",children:[t,Object(l.jsx)("img",{alt:"Online Icon",src:h})]},t)}))})})]}):null})}),S=(n(400),function(e){var t=e.location,n=Object(c.useState)(""),a=Object(j.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),u=Object(j.a)(o,2),b=u[0],A=u[1],h=Object(c.useState)(""),f=Object(j.a)(h,2),p=f[0],v=f[1],N=Object(c.useState)([]),S=Object(j.a)(N,2),y=S[0],E=S[1],B=Object(c.useState)(""),R=Object(j.a)(B,2),U=R[0],w=R[1];Object(c.useEffect)((function(){var e=O.a.parse(t.search),n=e.name,c=e.room;s=d()("https://chat-with-react-app.herokuapp.com/"),i(n),A(c),s.emit("join",{name:n,room:c},(function(e){}))}),[t.search]),Object(c.useEffect)((function(){s.on("message",(function(e){E([].concat(Object(m.a)(y),[e]))})),s.on("roomData",(function(e){var t=e.users;w(t)}))}),[y]);return console.log(p,y),Object(l.jsxs)("div",{className:"outerContainer",children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(x,{room:b}),Object(l.jsx)(C,{messages:y,name:r}),Object(l.jsx)(g,{message:p,setMessage:v,sendMessage:function(e){e.preventDefault(),p&&s.emit("sendMessage",p,(function(){return v("")}))}})]}),Object(l.jsx)(I,{users:U})]})}),y=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:u}),Object(l.jsx)(o.a,{path:"/chat",component:S})]})};r.a.render(Object(l.jsx)(y,{}),document.getElementById("root"))}},[[401,1,2]]]);
//# sourceMappingURL=main.87725e37.chunk.js.map