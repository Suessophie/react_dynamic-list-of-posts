(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r),s=n(1),l=(n(11),n(12),n(13),function(e){var t=e.changePostId,n=e.postId,r=Object(a.useState)(!1),o=Object(s.a)(r,2),l=o[0],u=o[1];return c.a.createElement(c.a.Fragment,null,l?c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){t(0),u(!1)}},"Close"):c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){t(n),u(!0)}},"Open"))}),u=function(e){var t=e.posts,n=e.changePostId;return c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostsList__item"},c.a.createElement("div",null,c.a.createElement("b",null,"User #".concat(e.userId)),c.a.createElement("br",null),e.title),c.a.createElement(l,{changePostId:n,postId:e.id}))}))))},m=(n(14),function(e){var t=e.postId,n=e.getNewComment,r=Object(a.useState)(""),o=Object(s.a)(r,2),l=o[0],u=o[1],m=Object(a.useState)(""),i=Object(s.a)(m,2),p=i[0],f=i[1],b=Object(a.useState)(""),E=Object(s.a)(b,2),d=E[0],v=E[1];return c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),n({id:888,postId:t,name:l,email:p,body:d}),u(""),f(""),v("")}},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:l,onChange:function(e){var t=e.target.value;u(t)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:p,onChange:function(e){var t=e.target.value;f(t)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:d,onChange:function(e){var t=e.target.value;v(t)}})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),i=(n(15),n(16),function(){return c.a.createElement("div",{className:"Loader"},c.a.createElement("div",{className:"Loader__content"}))}),p=n(2),f=n.n(p),b=n(3),E=function(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))},d=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("/posts");case 2:if(n=e.sent,t){e.next=5;break}return e.abrupt("return",n);case 5:return e.abrupt("return",n.filter((function(e){return e.userId===t})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("/posts/".concat(t));case 2:if(n=e.sent,t){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("/comments");case 2:if(n=e.sent,t){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",n.filter((function(e){return e.postId===t})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){return t={newComment:e},E("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)});var t},N=function(e){return t="/comments/".concat(e),E(t,{method:"DELETE"});var t},O=function(e){var t=e.commentsLength,n=e.isShowedCommentsOnClick,r=Object(a.useState)(!1),o=Object(s.a)(r,2),l=o[0],u=o[1];return c.a.createElement(c.a.Fragment,null,l?c.a.createElement("button",{type:"button",className:"button",onClick:function(){u(!1),n(!1)}},"Hide ".concat(t," comments")):c.a.createElement("button",{type:"button",className:"button",onClick:function(){u(!0),n(!0)}},"Show ".concat(t," comments")))},j=function(e){var t=e.postId,n=Object(a.useState)([]),r=Object(s.a)(n,2),o=r[0],l=r[1],u=Object(a.useState)(null),p=Object(s.a)(u,2),f=p[0],b=p[1],E=Object(a.useState)(!1),d=Object(s.a)(E,2),j=d[0],y=d[1],C=Object(a.useState)(null),g=Object(s.a)(C,2),w=g[0],P=g[1],S=Object(a.useState)(0),k=Object(s.a)(S,2),I=k[0],x=k[1];Object(a.useEffect)((function(){v(t).then((function(e){b(e)})),h(t).then((function(e){l(e)})),_(w).then(),N(I).then()}),[t,o,f,w,I]);return c.a.createElement(c.a.Fragment,null,f?c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,f.body)),!!o.length&&c.a.createElement("section",{className:"PostDetails__comments"},c.a.createElement(O,{commentsLength:o.length,isShowedCommentsOnClick:function(e){y(e)}}),j&&c.a.createElement("ul",{className:"PostDetails__list"},o.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostDetails__list-item"},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return t=e.id,void x(t);var t}},"X"),c.a.createElement("p",null,e.body))})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(m,{postId:t,getNewComment:function(e){P(e)}})))):c.a.createElement(i,null))},y=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(0),l=Object(s.a)(o,2),m=l[0],i=l[1],p=Object(a.useState)(0),f=Object(s.a)(p,2),b=f[0],E=f[1];return Object(a.useEffect)((function(){d(m).then((function(e){r(e)}))}),[m,n]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",value:m,onChange:function(e){var t=e.target.value;i(+t)}},c.a.createElement("option",{value:"0"},"All users"),c.a.createElement("option",{value:"1"},"Leanne Graham"),c.a.createElement("option",{value:"2"},"Ervin Howell"),c.a.createElement("option",{value:"3"},"Clementine Bauch"),c.a.createElement("option",{value:"4"},"Patricia Lebsack"),c.a.createElement("option",{value:"5"},"Chelsey Dietrich"),c.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),c.a.createElement("option",{value:"7"},"Kurtis Weissnat"),c.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),c.a.createElement("option",{value:"9"},"Glenna Reichert"),c.a.createElement("option",{value:"10"},"Leanne Graham")))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(u,{posts:n,changePostId:function(e){E(e)}})),c.a.createElement("div",{className:"App__content"},b?c.a.createElement(j,{postId:b}):c.a.createElement("div",null,"Please, choose an item"))))};o.a.render(c.a.createElement(y,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.e656e0a3.chunk.js.map