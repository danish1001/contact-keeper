(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,A){},69:function(e,t,A){"use strict";A.r(t);var a=A(1),n=A(17),c=A.n(n),r=(A(43),A(13)),s=A.n(r),o=A(16),i=Object(a.createContext)(),l=Object(a.createContext)(),u=A(0),j=function(e){var t=e.title,A=e.icon,n=Object(a.useContext)(i),c=Object(a.useContext)(l),r=n.isAuthenticated,s=n.logout,j=n.user,p=c.clearContacts,d=Object(u.jsxs)(a.Fragment,{children:[Object(u.jsxs)("li",{children:["Hello ",j&&j.name]}),Object(u.jsx)("li",{children:Object(u.jsxs)("a",{onClick:function(){s(),p()},href:"#!",children:[Object(u.jsx)("i",{className:"fas fa-sign-out-alt"})," ",Object(u.jsx)("span",{className:"hide-sm",children:"Logout"})]})})]}),h=Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/register",children:"Register"})}),Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/login",children:"Login"})})]});return Object(u.jsxs)("div",{className:"navbar bg-primary",children:[Object(u.jsxs)("h1",{children:[Object(u.jsx)("i",{className:A})," ",t]}),Object(u.jsx)("ul",{children:r?d:h})]})};j.prototype={title:s.a.string.isRequired,icon:s.a.string.isRequired},j.defaultProps={title:"Contact-Keeper",icon:"fas fa-id-card-alt"};var p=j,d=function(e){var t=e.contact,A=Object(a.useContext)(l),n=t._id,c=t.name,r=t.phone,s=t.email,o=t.type;return Object(u.jsxs)("div",{className:"card bg-light",children:[Object(u.jsxs)("h3",{className:"text-primary text-left",children:[c," "," ",Object(u.jsx)("span",{style:{float:"right"},className:"badge "+("professional"===o?"badge-success":"badge-primary"),children:o.charAt(0).toUpperCase()+o.slice(1)})]}),Object(u.jsxs)("ul",{className:"list",children:[s&&Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"fas fa-envelope-open"})," ",s]}),r&&Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"fas fa-phone"})," ",r]})]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("button",{onClick:function(){return A.setCurrent(t)},className:"btn btn-dark btn-sm",children:"Edit"}),Object(u.jsx)("button",{onClick:function(){A.deleteContact(n),A.clearCurrent()},className:"btn btn-danger btn-sm",children:"Delete"})]})]})},h=A(73),g=A(71);var b=function(){return Object(u.jsx)(a.Fragment,{children:Object(u.jsx)("img",{src:"data:image/gif;base64,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",alt:"Loading...",style:{width:"50px",margin:"auto",display:"block"}})})};var C=function(){var e=Object(a.useContext)(l),t=e.contacts,A=e.filtered,n=e.getContacts,c=e.loading;return Object(a.useEffect)((function(){n()}),[]),null!==t&&0===t.length?Object(u.jsx)("h4",{children:"Please add a contact"}):Object(u.jsx)(a.Fragment,{children:null===t||c?Object(u.jsx)(b,{}):Object(u.jsx)(h.a,{children:null!==A?A.map((function(e){return Object(u.jsx)(g.a,{timeout:500,classNames:"item",children:Object(u.jsx)(d,{contact:e},e.id)},e._id)})):t.map((function(e){return Object(u.jsx)(g.a,{timeout:500,classNames:"item",children:Object(u.jsx)(d,{contact:e},e.id)},e._id)}))})})},O=A(15),x=A(2),I=A(10);var m=function(){var e=Object(a.useContext)(l);Object(a.useEffect)((function(){null!==e.current?c(e.current):c({name:"",email:"",phone:"",type:"personal"})}),[e,e.current]);var t=Object(a.useState)({name:"",email:"",phone:"",type:"personal"}),A=Object(I.a)(t,2),n=A[0],c=A[1],r=n.name,s=n.email,o=n.phone,i=n.type,j=function(e){return c(Object(x.a)(Object(x.a)({},n),{},Object(O.a)({},e.target.name,e.target.value)))},p=function(){e.clearCurrent()};return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),null===e.current?e.addContact(n):e.updateContact(n),p()},children:[Object(u.jsx)("h2",{className:"text-primary",children:e.current?"Edit Contacts":"Add Contact"}),Object(u.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:r,onChange:j}),Object(u.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:s,onChange:j}),Object(u.jsx)("input",{type:"text",name:"phone",placeholder:"Phone",value:o,onChange:j}),Object(u.jsx)("h5",{children:"Contact Type"}),Object(u.jsx)("input",{onChange:j,type:"radio",name:"type",value:"personal",checked:"personal"===i})," ","Personal"," ",Object(u.jsx)("input",{onChange:j,type:"radio",name:"type",value:"professional",checked:"professional"===i})," ","Professional"," ",Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"submit",value:e.current?"Edit Contact":"Add Contact",className:"btn btn-primary btn-block"})}),e.current&&Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:p,className:"btn btn-light btn-block",children:"Clear"})})]})},B=function(){var e=Object(a.useContext)(l),t=Object(a.useRef)(""),A=e.filterContacts,n=e.clearFilter,c=e.filtered;Object(a.useEffect)((function(){null===c&&(t.current.value="")}));return Object(u.jsx)("form",{children:Object(u.jsx)("input",{ref:t,type:"text",placeholder:"Filter Contacts... ",onChange:function(e){""!==t.current.value?A(e.target.value):n()}})})};var Q=function(){var e=Object(a.useContext)(i);return Object(a.useEffect)((function(){e.loadUser()}),[]),Object(u.jsxs)("div",{className:"grid-2",children:[Object(u.jsx)("div",{children:Object(u.jsx)(m,{})}),Object(u.jsxs)("div",{children:[Object(u.jsx)(B,{}),Object(u.jsx)(C,{})]})]})};var E=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"About This App"}),Object(u.jsx)("p",{className:"my-1",children:"This is full stack React app for keeping Contacts"}),Object(u.jsxs)("div",{className:"bg-dark p",children:[Object(u.jsx)("strong",{children:"Version: "}),"1.0.0"]})]})},k=A(4),y=A(6),w=A.n(y),f=A(14),v=A(11),R=A.n(v),F="GET_CONTACTS",J="CLEAR_CONTACTS",S="ADD_CONTACT",G="DELETE_CONTACT",K="SET_CURRENT",Y="CLEAR_CURRENT",M="UPDATE_CONTACT",q="FILTER_CONTACTS",D="CLEAR_FILTER",H="SET_ALERT",N="REMOVE_ALERT",U="CONTACT_ERROR",L="REGISTER_SUCCESS",V="REGISTER_FAIL",T="USER_LOADED",W="AUTH_ERROR",z="LOGIN_SUCCESS",P="LOGIN_FAIL",Z="LOGOUT",X="CLEAR_ERRORS",_=function(e,t){switch(t.type){case L:case z:return localStorage.setItem("token",t.payload.token),Object(x.a)(Object(x.a)(Object(x.a)({},e),t.payload),{},{isAuthenticated:!0,loading:!1});case V:case W:case P:case Z:return localStorage.removeItem("token"),Object(x.a)(Object(x.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null,error:t.payload});case X:return Object(x.a)(Object(x.a)({},e),{},{error:null});case T:return Object(x.a)(Object(x.a)({},e),{},{isAuthenticated:!0,loading:!1,user:t.payload});default:return e}},$=function(e){e?R.a.defaults.headers.common["x-auth-token"]=e:delete R.a.defaults.headers.common["x-auth-token"]},ee=function(e){var t={token:localStorage.getItem("token"),isAuthenticated:null,user:null,loading:!0,error:null},A=Object(a.useReducer)(_,t),n=Object(I.a)(A,2),c=n[0],r=n[1],s=function(){var e=Object(f.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&$(localStorage.token),e.prev=1,e.next=4,R.a.get("/api/auth");case 4:t=e.sent,r({type:T,payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:W});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(f.a)(w.a.mark((function e(t){var A,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,R.a.post("/api/users",t,A);case 4:a=e.sent,r({type:L,payload:a.data}),s(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r({type:V,payload:e.t0.response.data.msg});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(f.a)(w.a.mark((function e(t){var A,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,R.a.post("/api/auth",t,A);case 4:a=e.sent,r({type:z,payload:a.data}),s(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r({type:P,payload:e.t0.response.data.msg});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(i.Provider,{value:{token:c.token,isAuthenticated:c.isAuthenticated,loading:c.loading,user:c.user,error:c.error,register:o,loadUser:s,login:l,logout:function(){r({type:Z})},clearErrors:function(){r({type:X})}},children:e.children})},te=Object(a.createContext)();var Ae=function(e){var t=Object(a.useContext)(te),A=Object(a.useContext)(i),n=t.setAlert,c=A.register,r=A.error,s=A.clearErrors,o=A.isAuthenticated,l=Object(a.useState)({name:"",email:"",password:"",password2:""}),j=Object(I.a)(l,2),p=j[0],d=j[1];Object(a.useEffect)((function(){o&&e.history.push("/"),"user already exists"===r&&(n(r,"danger"),s())}),[r,o,e.history]);var h=p.name,g=p.email,b=p.password,C=p.password2,m=function(e){d(Object(x.a)(Object(x.a)({},p),{},Object(O.a)({},e.target.name,e.target.value)))};return Object(u.jsxs)("div",{className:"form-container register-page",children:[Object(u.jsxs)("h1",{children:["Account ",Object(u.jsx)("span",{className:"text-primary",children:"Register"})]}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===h||""===g||""===b||""===C?n("Please enter all fields","danger"):b!==C?n("Password do not match","danger"):c({name:h,email:g,password:b})},children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"name",children:"Name"}),Object(u.jsx)("input",{type:"text",name:"name",value:h,onChange:m,required:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(u.jsx)("input",{type:"email",name:"email",value:g,onChange:m,required:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",name:"password",value:b,onChange:m,minLength:"6",required:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Confirm Password"}),Object(u.jsx)("input",{type:"password",name:"password2",value:C,onChange:m,minLength:"6",required:!0})]}),Object(u.jsx)("input",{type:"submit",value:"Register",className:"btn btn-primary btn-block"})]})]})};var ae=function(e){var t=Object(a.useContext)(i),A=Object(a.useContext)(te).setAlert,n=t.login,c=t.error,r=t.clearErrors,s=t.isAuthenticated;Object(a.useEffect)((function(){s&&e.history.push("/"),"Invalid Credentials"===c&&(A(c,"danger"),r())}),[c,s,e.history]);var o=Object(a.useState)({email:"",password:""}),l=Object(I.a)(o,2),j=l[0],p=l[1],d=j.email,h=j.password,g=function(e){p(Object(x.a)(Object(x.a)({},j),{},Object(O.a)({},e.target.name,e.target.value)))};return Object(u.jsxs)("div",{className:"form-container",children:[Object(u.jsxs)("h1",{children:["Account ",Object(u.jsx)("span",{className:"text-primary",children:"Login"})]}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===d||""===h?A("Please fill in the fields","danger"):n({email:d,password:h})},children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(u.jsx)("input",{type:"email",name:"email",value:d,onChange:g,required:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",name:"password",value:h,onChange:g,required:!0})]}),Object(u.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary btn-block"})]})]})},ne=A(21),ce=function(e,t){switch(t.type){case H:return[].concat(Object(ne.a)(e),[t.payload]);case N:return e.filter((function(e){return e.id!==t.payload}));default:return e}},re=A(72),se=function(e){var t=Object(a.useReducer)(ce,[]),A=Object(I.a)(t,2),n=A[0],c=A[1];return Object(u.jsx)(te.Provider,{value:{alerts:n,setAlert:function(e,t){var A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,a=Object(re.a)();c({type:H,payload:{msg:e,type:t,id:a}}),setTimeout((function(){return c({type:N,payload:a})}),A)}},children:e.children})};var oe=function(){var e=Object(a.useContext)(te);return e.alerts.length>0&&e.alerts.map((function(e){return Object(u.jsxs)("div",{className:"alert alert-".concat(e.type),children:[Object(u.jsx)("i",{className:"fas fa-info-circle"})," ",e.msg]},e.id)}))},ie=A(36);var le=function(e){var t=e.component,A=Object(ie.a)(e,["component"]),n=Object(a.useContext)(i),c=n.isAuthenticated,r=n.loading;return Object(u.jsx)(k.b,Object(x.a)(Object(x.a)({},A),{},{render:function(e){return c||r?Object(u.jsx)(t,Object(x.a)({},e)):Object(u.jsx)(k.a,{to:"/login"})}}))},ue=function(e,t){switch(t.type){case J:return Object(x.a)(Object(x.a)({},e),{},{contacts:null,filtered:null,error:null,current:null});case F:return Object(x.a)(Object(x.a)({},e),{},{contacts:t.payload,loading:!1});case S:return Object(x.a)(Object(x.a)({},e),{},{contacts:[t.payload].concat(Object(ne.a)(e.contacts)),loading:!1});case G:return Object(x.a)(Object(x.a)({},e),{},{contacts:e.contacts.filter((function(e){return e._id!==t.payload})),loading:!1});case Y:return Object(x.a)(Object(x.a)({},e),{},{current:null});case K:return Object(x.a)(Object(x.a)({},e),{},{current:t.payload});case M:return Object(x.a)(Object(x.a)({},e),{},{contacts:e.contacts.map((function(e){return e._id===t.payload._id?t.payload:e})),loading:!1});case q:return Object(x.a)(Object(x.a)({},e),{},{filtered:e.contacts.filter((function(e){var A=new RegExp("".concat(t.payload),"gi");return e.name.match(A)||e.email.match(A)}))});case D:return Object(x.a)(Object(x.a)({},e),{},{filtered:null});case U:return Object(x.a)(Object(x.a)({},e),{},{error:t.payload});default:return e}},je=function(e){var t=Object(a.useReducer)(ue,{contacts:null,current:null,filtered:null,error:null}),A=Object(I.a)(t,2),n=A[0],c=A[1],r=function(){var e=Object(f.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get("/api/contacts");case 3:t=e.sent,c({type:F,payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c({type:U,payload:e.t0.response.msg});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(f.a)(w.a.mark((function e(t){var A,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,R.a.post("/api/contacts",t,A);case 4:a=e.sent,c({type:S,payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c({type:U,payload:e.t0.response.msg});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(f.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.delete("/api/contacts/".concat(t));case 3:c({type:G,payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),c({type:U,payload:e.t0.response.msg});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(f.a)(w.a.mark((function e(t){var A,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,R.a.put("/api/contacts/".concat(t._id),t,A);case 4:a=e.sent,c({type:M,payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c({type:U,payload:e.t0.response.msg});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(l.Provider,{value:{contacts:n.contacts,current:n.current,filtered:n.filtered,error:n.error,addContact:s,deleteContact:o,setCurrent:function(e){c({type:K,payload:e})},clearCurrent:function(){c({type:Y})},updateContact:i,filterContacts:function(e){c({type:q,payload:e})},clearFilter:function(){c({type:D})},getContacts:r,clearContacts:function(){c({type:J})}},children:e.children})};localStorage.token&&$(localStorage.token);var pe=function(){return Object(u.jsx)(ee,{children:Object(u.jsx)(je,{children:Object(u.jsx)(se,{children:Object(u.jsx)(o.a,{children:Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(p,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(oe,{}),Object(u.jsxs)(k.d,{children:[Object(u.jsx)(le,{exact:!0,path:"/",component:Q}),Object(u.jsx)(k.b,{exact:!0,path:"/about",component:E}),Object(u.jsx)(k.b,{exact:!0,path:"/register",component:Ae}),Object(u.jsx)(k.b,{exact:!0,path:"/login",component:ae})]})]})]})})})})})};c.a.render(Object(u.jsx)(pe,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.93aee474.chunk.js.map