(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{151:function(e,t,a){e.exports=a(184)},156:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n,r,c,o,l=a(0),i=a.n(l),s=a(35),u=a.n(s),E=(a(156),a(21)),m=a(22),p=a(24),T=a(23),S=a(12),d=a(150),C=a(15),O=function(e){return e.contacts},h=function(e){return e.filter},b=function(e){return e.token},_=function(e){return e.user},f=function(e){return e.authentificated},R=function(e){return e.loader.loaderApp},y=function(e){return e.loader.loaderButton},U=function(e){return e.loader.loaderContacts},g=function(e){return e.authError},v=Object(C.b)((function(e){return{authentificated:f(e)}}))((function(e){var t=e.authentificated,a=e.redirectTo,n=void 0===a?"/login":a,r=e.component,c=Object(d.a)(e,["authentificated","redirectTo","component"]);return i.a.createElement(S.b,Object.assign({},c,{render:function(e){return t?i.a.createElement(r,e):i.a.createElement(S.a,{to:{pathname:n,state:{from:e.location}}})}}))})),A=a(29),j=a.n(A),N=function(e){j.a.defaults.headers.common.Authorization="".concat(e)},G=a(7),L=a(4),k=Object(G.createAction)(L.Type.SIGNUP_START),w=Object(G.createAction)(L.Type.SIGNUP_SUCCESS),I=Object(G.createAction)(L.Type.SIGNUP_ERROR),D=Object(G.createAction)(L.Type.LOGIN_START),P=Object(G.createAction)(L.Type.LOGIN_SUCCESS),F=Object(G.createAction)(L.Type.LOGIN_ERROR),x=Object(G.createAction)(L.Type.GET_USER_START),B=Object(G.createAction)(L.Type.GET_USER_SUCCESS),M=Object(G.createAction)(L.Type.GET_USER_ERROR),H=Object(G.createAction)(L.Type.LOGOUT_START),V=Object(G.createAction)(L.Type.LOGOUT_SUCCESS),q=Object(G.createAction)(L.Type.LOGOUT_ERROR),z=Object(G.createAction)(L.Type.DELETE_USER_START),W=Object(G.createAction)(L.Type.DELETE_USER_SUCCESS),J=Object(G.createAction)(L.Type.DELETE_USER_ERROR),Y=a(89),X=a(32),K=a(8),Q=function(e){Object(p.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={deleteUserCheck:!1},e.handleChange=function(t){var a=t.target;e.setState({deleteUserCheck:a.checked})},e.handleSubmit=function(t){t.preventDefault(),e.props.deleteUserFetch(),e.props.onHide()},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.deleteUserCheck&&this.setState({deleteUserCheck:!1})}},{key:"render",value:function(){return i.a.createElement(Y.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),i.a.createElement(Y.a.Header,{closeButton:!0},i.a.createElement(Y.a.Title,{id:"contained-modal-title-vcenter"},this.props.user.name)),i.a.createElement(Y.a.Body,null,i.a.createElement("p",null,"email: ",this.props.user.email),i.a.createElement(K.a,{onSubmit:this.handleSubmit},i.a.createElement(K.a.Group,{controlId:"formBasicCheckbox"},i.a.createElement(K.a.Check,{checked:this.state.deleteUserCheck,type:"checkbox",label:"Delete my profile",onChange:this.handleChange,value:this.state.deleteUserCheck})),i.a.createElement(X.a,{type:"submit",variant:"danger",disabled:!this.state.deleteUserCheck},"Delete"))),i.a.createElement(Y.a.Footer,null,i.a.createElement(X.a,{onClick:this.props.onHide},"Close")))}}]),a}(l.Component),Z={deleteUserFetch:function(){return function(e){e(z()),j.a.delete("/users/current").then((function(){e(W())})).catch((function(t){e(J(t))}))}}},$=Object(C.b)(null,Z)(Q),ee=a(25),te=a(95),ae=a(27),ne=a(131),re=a(124),ce=a(50),oe=function(e){var t=e.user,a=e.authentificated,n=e.logout,r=e.openModal;return i.a.createElement(te.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},i.a.createElement(ae.a,null,i.a.createElement(te.a.Brand,null,"Phonebook App"),i.a.createElement(te.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),i.a.createElement(te.a.Collapse,null,i.a.createElement(ne.a,{className:"mr-auto"},i.a.createElement(ee.b,{to:"/",exact:!0,className:"nav-link"},"Home"),a&&i.a.createElement(ee.b,{to:"/contacts",className:"nav-link"},"Contacts")),i.a.createElement(ne.a,null,a?i.a.createElement(re.a,{title:t.name,id:"basic-nav-dropdown"},i.a.createElement(ce.a.Item,{as:"button",onClick:r},"My profile"),i.a.createElement(re.a.Divider,null),i.a.createElement(re.a.Item,{as:"button",onClick:n},"Log Out")):i.a.createElement(i.a.Fragment,null,i.a.createElement(ee.b,{to:"/login",className:"nav-link"},"Login"),i.a.createElement(ee.b,{to:"/signup",className:"nav-link"},"Signup"))))))},le=function(){return i.a.createElement(ae.a,{className:"pt-4 text-center"},i.a.createElement("h2",{className:"mb-5"},"Welcome"),i.a.createElement("p",{className:"h5 mb-3"},"You can save your contacts with phone number"),i.a.createElement("p",{className:"h5"},"To use this app, you must to ",i.a.createElement(ee.b,{to:"/login"},"Login")," or"," ",i.a.createElement(ee.b,{to:"/signup"},"Register")))},ie=a(74),se=a(63),ue=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(se.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true",className:"mr-2"}),i.a.createElement(se.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true",className:"mr-2"}),i.a.createElement(se.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}))},Ee=(0,a(7).createAction)(a(4).Type.CLEAR_AUTH_ERROR),me=a(116),pe=a(117),Te=a(55),Se=Object(Te.a)({email:Object(Te.b)().email("Wrong email").required("Enter email"),password:Object(Te.b)().required("Enter password")}),de=function(e){Object(p.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){e.props.loginFetch(Object(ie.a)({},t))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(pe.a,{validationSchema:Se,onSubmit:this.handleSubmit,initialValues:{email:"",password:""}},(function(t){var a=t.handleSubmit,n=t.handleChange,r=t.values,c=t.errors,o=t.touched;return i.a.createElement(K.a,{onSubmit:a,noValidate:!0},i.a.createElement(K.a.Group,{controlId:"formBasicEmail"},i.a.createElement(K.a.Label,null,"Email"),i.a.createElement(K.a.Control,{type:"email",name:"email",placeholder:"Enter email",value:r.email,onChange:n,isInvalid:c.email,isValid:o.email}),i.a.createElement(K.a.Control.Feedback,{type:"invalid"},c.email)),i.a.createElement(K.a.Group,{controlId:"formBasicPassword"},i.a.createElement(K.a.Label,null,"Password"),i.a.createElement(K.a.Control,{type:"password",name:"password",placeholder:"Enter password",value:r.password,onChange:n,isInvalid:c.password,isValid:o.password}),i.a.createElement(K.a.Control.Feedback,{type:"invalid"},c.password)),e.props.authError.isError&&i.a.createElement(me.a,{variant:e.props.authError.type},e.props.authError.text),i.a.createElement(X.a,{variant:"primary",type:"submit",block:!0,disabled:e.props.loadingButton},e.props.loadingButton?i.a.createElement(ue,null):i.a.createElement(i.a.Fragment,null,"Login")))}))}}]),a}(l.Component),Ce={loginFetch:function(e){return function(t){t(D()),j.a.post("/users/login",e).then((function(e){var a=e.data;N(a.token),t(P(a))})).catch((function(e){return t(F(e))}))}},clearAuthError:Ee},Oe=Object(C.b)((function(e){return{loadingButton:y(e),authError:g(e)}}),Ce)(de),he=a(43),be=a(49),_e=function(e){var t=function(t){Object(p.a)(n,t);var a=Object(T.a)(n);function n(){return Object(E.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidUpdate",value:function(){this.props.authentificated&&this.props.history.replace("/contacts")}},{key:"componentDidMount",value:function(){this.props.authentificated&&this.props.history.replace("/contacts")}},{key:"render",value:function(){return i.a.createElement(e,this.props)}}]),n}(l.Component);return Object(C.b)((function(e){return{authentificated:f(e)}}))(t)},fe=_e((function(){return i.a.createElement(ae.a,{className:"pt-4"},i.a.createElement(he.a,{lg:6,className:"justify-content-center"},i.a.createElement(be.a,{lg:4},i.a.createElement("h3",{className:"text-center"},"Login"),i.a.createElement(Oe,null),i.a.createElement("p",{className:"mt-4 text-center"},"or\xa0",i.a.createElement(ee.b,{to:"/signup"},"Register")))))})),Re=Object(Te.a)({name:Object(Te.b)().min(4,"From 4 to 12 symbols").max(12,"From 4 to 12 symbols").required("Enter name"),email:Object(Te.b)().email("Wrong email").required("Enter email"),password:Object(Te.b)().min(6,"Too short password").max(12,"Too long password").required("Enter password")}),ye=function(e){Object(p.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){e.props.signupFetch(Object(ie.a)({},t))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return i.a.createElement(pe.a,{validationSchema:Re,onSubmit:this.handleSubmit,initialValues:{name:"",email:"",password:""}},(function(t){var a=t.handleSubmit,n=t.handleChange,r=t.values,c=t.errors,o=t.touched;return i.a.createElement(K.a,{onSubmit:a},i.a.createElement(K.a.Group,{controlId:"formName"},i.a.createElement(K.a.Label,null,"Name"),i.a.createElement(K.a.Control,{type:"username",name:"name",placeholder:"Enter name",value:r.name,onChange:n,isInvalid:c.name,isValid:o.name}),i.a.createElement(K.a.Control.Feedback,{type:"invalid"},c.name)),i.a.createElement(K.a.Group,{controlId:"formEmail"},i.a.createElement(K.a.Label,null,"Email"),i.a.createElement(K.a.Control,{type:"email",name:"email",placeholder:"Enter email",value:r.email,onChange:n,isInvalid:c.email,isValid:o.email}),i.a.createElement(K.a.Control.Feedback,{type:"invalid"},c.email)),i.a.createElement(K.a.Group,{controlId:"formPassword"},i.a.createElement(K.a.Label,null,"Password"),i.a.createElement(K.a.Control,{type:"password",name:"password",placeholder:"Enter password from 6 to 12 symbols",value:r.password,onChange:n,isInvalid:c.password,isValid:o.password}),i.a.createElement(K.a.Control.Feedback,{type:"invalid"},c.password)),e.props.authError.isError&&i.a.createElement(me.a,{variant:e.props.authError.type},e.props.authError.text),i.a.createElement(X.a,{variant:"primary",type:"submit",block:!0,disabled:e.props.loadingButton},e.props.loadingButton?i.a.createElement(ue,null):i.a.createElement(i.a.Fragment,null,"Sign up")))}))}}]),a}(l.Component),Ue={signupFetch:function(e){return function(t){t(k()),j.a.post("/users/signup",e).then((function(e){var a=e.data;N(a.token),t(w(a))})).catch((function(e){return t(I(e))}))}}},ge=Object(C.b)((function(e){return{loadingButton:y(e),authError:g(e)}}),Ue)(ye),ve=_e((function(){return i.a.createElement(ae.a,{className:"pt-4"},i.a.createElement(he.a,{lg:6,className:"justify-content-center"},i.a.createElement(be.a,{lg:4},i.a.createElement("h3",{className:"text-center"},"Register"),i.a.createElement(ge,null),i.a.createElement("p",{className:"mt-4 text-center"},"or\xa0",i.a.createElement(ee.b,{to:"/login"},"Login")))))})),Ae=a(11),je=Object(G.createAction)(L.Type.FILTER_CONTACT),Ne=Object(G.createAction)(L.Type.GET_CONTACTS_START),Ge=Object(G.createAction)(L.Type.GET_CONTACTS_SUCCESS),Le=Object(G.createAction)(L.Type.GET_CONTACTS_ERROR),ke=Object(G.createAction)(L.Type.POST_CONTACT_START),we=Object(G.createAction)(L.Type.POST_CONTACT_SUCCESS),Ie=Object(G.createAction)(L.Type.POST_CONTACT_ERROR),De=Object(G.createAction)(L.Type.DELETE_CONTACT_START),Pe=Object(G.createAction)(L.Type.DELETE_CONTACT_SUCESS),Fe=Object(G.createAction)(L.Type.DELETE_CONTACT_ERROR),xe=a(70),Be=a(145),Me={name:"",number:""},He=function(e){Object(p.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state=Me,e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(Ae.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,r=a.number;n&&r&&(e.props.postContact(Object(ie.a)({},e.state)),e.reset())},e.reset=function(){e.setState(Me)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.number;return i.a.createElement(K.a,{onSubmit:this.handleSubmit,className:"mb-4"},i.a.createElement(xe.a,{className:"mb-3"},i.a.createElement(xe.a.Prepend,null,i.a.createElement(xe.a.Text,null,"Name")),i.a.createElement(K.a.Control,{type:"text",name:"name",placeholder:"Enter name",value:t,onChange:this.handleChange})),i.a.createElement(xe.a,{className:"mb-3"},i.a.createElement(xe.a.Prepend,null,i.a.createElement(xe.a.Text,null,"Number")),i.a.createElement(Be.a,{className:"form-control",name:"number",format:"+380 (##) ###-##-##",mask:"_",allowEmptyFormatting:!0,onChange:this.handleChange,value:a})),i.a.createElement(X.a,{variant:"primary",type:"submit",block:!0,disabled:this.props.loadingButton},this.props.loadingButton?i.a.createElement(ue,null):i.a.createElement(i.a.Fragment,null,"Add Contact")))}}]),a}(l.Component),Ve={postContact:function(e){return function(t){t(ke()),j.a.post("/contacts",e).then((function(e){var a=e.data;return t(we(a))})).catch((function(e){return t(Ie(e))}))}}},qe=Object(C.b)((function(e){return{loadingButton:y(e)}}),Ve)(He),ze=a(120),We=function(e){var t=e.name,a=e.number,n=e.id,r=e.deleteContact;return i.a.createElement(ze.a.Item,{as:"li"},i.a.createElement("span",{className:"font-weight-bold mr-3"},t),i.a.createElement("a",{href:"tel:".concat(a),className:"mr-3"},a),i.a.createElement(X.a,{variant:"danger",onClick:function(){return r(n)}},"X"))},Je=function(e){Object(p.a)(a,e);var t=Object(T.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(K.a,{className:"mb-2"},i.a.createElement(K.a.Group,{controlId:"formBasicFilter"},i.a.createElement(K.a.Control,{type:"text",name:"filter",placeholder:"Filter...",value:this.props.filter,onChange:function(t){return e.props.filterContact(t.target.value)},autoComplete:"off"})))}}]),a}(l.Component),Ye={filterContact:je},Xe=Object(C.b)((function(e){return{filter:h(e)}}),Ye)(Je),Ke=function(e){Object(p.a)(a,e);var t=Object(T.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var e=this,t=this.props,a=t.contacts,n=t.filter,r=n?function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(a,n):a;return i.a.createElement(i.a.Fragment,null,this.props.loaderContacts&&i.a.createElement(ae.a,{className:"pt-4"},i.a.createElement(he.a,{className:"justify-content-center"},i.a.createElement(se.a,{animation:"border"}))),!this.props.loaderContacts&&i.a.createElement(i.a.Fragment,null,a.length>2&&i.a.createElement(Xe,null),i.a.createElement(ze.a,{as:"ul"},r.length>0?r.map((function(t){var a=t.id,n=t.name,r=t.number;return i.a.createElement(We,{key:a,id:a,name:n,number:r,deleteContact:e.props.deleteContact})})):i.a.createElement("h4",null,"You have no contacts yet"))))}}]),a}(l.Component),Qe={fetchContacts:function(){return function(e){e(Ne()),j.a.get("/contacts").then((function(t){var a=t.data;return e(Ge(a))})).catch((function(t){return e(Le(t))}))}},deleteContact:function(e){return function(t){t(De()),j.a.delete("/contacts/".concat(e)).then((function(){return t(Pe(e))})).catch((function(e){return t(Fe(e))}))}}},Ze=Object(C.b)((function(e){return{contacts:O(e),filter:h(e),loaderButton:y(e),loaderContacts:U(e)}}),Qe)(Ke),$e=function(){return i.a.createElement(ae.a,{className:"pt-4"},i.a.createElement(he.a,{className:"justify-content-center"},i.a.createElement(be.a,null,i.a.createElement("h3",{className:"text-center"},"Contacts"))),i.a.createElement(he.a,null,i.a.createElement(be.a,{lg:5},i.a.createElement(qe,null)),i.a.createElement(be.a,{lg:"7"},i.a.createElement(Ze,null))))},et=(a(181),function(e){Object(p.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showModalSettings:!1},e.openModal=function(){e.setState({showModalSettings:!0})},e.closeModal=function(){e.setState({showModalSettings:!1})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){j.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com",this.props.token&&(N(this.props.token),this.props.getUserFetch())}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(oe,{user:this.props.user,authentificated:this.props.authentificated,logout:this.props.logoutFetch,openModal:this.openModal}),this.props.loaderApp?i.a.createElement(ae.a,{className:"pt-4"},i.a.createElement(he.a,{className:"justify-content-center"},i.a.createElement(se.a,{animation:"border"}))):i.a.createElement(S.d,null,i.a.createElement(S.b,{exact:!0,path:"/",component:le}),i.a.createElement(v,{path:"/contacts",component:$e}),i.a.createElement(S.b,{path:"/login",component:fe}),i.a.createElement(S.b,{path:"/signup",component:ve})),i.a.createElement($,{show:this.state.showModalSettings,onHide:this.closeModal,user:this.props.user}))}}]),a}(l.Component)),tt={getUserFetch:function(){return function(e){e(x()),j.a.get("/users/current").then((function(t){var a=t.data;e(B(a))})).catch((function(t){return e(M(t))}))}},logoutFetch:function(){return function(e,t){e(H()),j.a.post("/users/logout").then((function(){e(V())})).catch((function(t){e(q(t))}))}}},at=Object(C.b)((function(e){return{user:_(e),token:b(e),authentificated:f(e),loaderApp:R(e)}}),tt)(et),nt=a(18),rt=a(149),ct=Object(G.createReducer)([],(n={},Object(Ae.a)(n,L.Type.GET_CONTACTS_SUCCESS,(function(e,t){return t.payload})),Object(Ae.a)(n,L.Type.POST_CONTACT_SUCCESS,(function(e,t){var a=t.payload;return[].concat(Object(rt.a)(e),[a])})),Object(Ae.a)(n,L.Type.DELETE_CONTACT_SUCESS,(function(e,t){var a=t.payload;return e.filter((function(e){return e.id!==a}))})),Object(Ae.a)(n,L.Type.LOGOUT_SUCCESS,(function(){return""})),Object(Ae.a)(n,L.Type.DELETE_USER_SUCCESS,(function(){return""})),n)),ot=Object(G.createReducer)("",(r={},Object(Ae.a)(r,L.Type.FILTER_CONTACT,(function(e,t){return t.payload})),Object(Ae.a)(r,L.Type.LOGOUT_SUCCESS,(function(){return""})),Object(Ae.a)(r,L.Type.DELETE_USER_SUCCESS,(function(){return""})),r)),lt=Object(G.createReducer)("",(c={},Object(Ae.a)(c,L.Type.SIGNUP_SUCCESS,(function(e,t){return t.payload.token})),Object(Ae.a)(c,L.Type.LOGIN_SUCCESS,(function(e,t){return t.payload.token})),Object(Ae.a)(c,L.Type.LOGOUT_SUCCESS,(function(){return""})),Object(Ae.a)(c,L.Type.DELETE_USER_SUCCESS,(function(){return""})),c)),it=Object(G.createReducer)("",(o={},Object(Ae.a)(o,L.Type.SIGNUP_SUCCESS,(function(e,t){return t.payload.user})),Object(Ae.a)(o,L.Type.LOGIN_SUCCESS,(function(e,t){return t.payload.user})),Object(Ae.a)(o,L.Type.GET_USER_SUCCESS,(function(e,t){return t.payload})),Object(Ae.a)(o,L.Type.LOGOUT_SUCCESS,(function(){return""})),Object(Ae.a)(o,L.Type.DELETE_USER_SUCCESS,(function(){return""})),o)),st=Object(nt.combineReducers)({loaderApp:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type;switch(a){case L.Type.LOGOUT_START:case L.Type.GET_USER_START:case L.Type.DELETE_USER_START:return!0;case L.Type.LOGOUT_SUCCESS:case L.Type.LOGOUT_ERROR:case L.Type.GET_USER_SUCCESS:case L.Type.GET_USER_ERROR:case L.Type.DELETE_USER_SUCCESS:case L.Type.DELETE_USER_ERROR:return!1;default:return e}},loaderButton:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type;switch(a){case L.Type.LOGIN_START:case L.Type.SIGNUP_START:case L.Type.POST_CONTACT_START:return!0;case L.Type.LOGIN_SUCCESS:case L.Type.LOGIN_ERROR:case L.Type.SIGNUP_SUCCESS:case L.Type.SIGNUP_ERROR:case L.Type.POST_CONTACT_SUCCESS:case L.Type.POST_CONTACT_ERROR:return!1;default:return e}},loaderContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type;switch(a){case L.Type.GET_CONTACTS_START:return!0;case L.Type.GET_CONTACTS_SUCCESS:case L.Type.GET_CONTACTS_ERROR:return!1;default:return e}}}),ut=a(146),Et=a(91),mt=a(130),pt=a(147),Tt={key:"session",storage:a.n(pt).a,whitelist:["token"]},St=Object(nt.combineReducers)({contacts:ct,filter:ot,token:lt,user:it,authentificated:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type;switch(a){case L.Type.LOGIN_SUCCESS:case L.Type.SIGNUP_SUCCESS:case L.Type.GET_USER_SUCCESS:return!0;case L.Type.LOGOUT_SUCCESS:case L.Type.DELETE_USER_SUCCESS:return!1;default:return e}},authError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isError:!1},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case L.Type.LOGIN_ERROR:case L.Type.SIGNUP_ERROR:return{isError:!0,type:"danger",text:n.message};case L.Type.CLEAR_AUTH_ERROR:return{isError:!1};default:return e}},loader:st}),dt=Object(mt.a)(Tt,St),Ct=Object(nt.applyMiddleware)(Et.a),Ot=Object(nt.createStore)(dt,Object(ut.composeWithDevTools)(Ct)),ht=Object(mt.b)(Ot),bt=a(148);u.a.render(i.a.createElement(C.a,{store:Ot},i.a.createElement(bt.a,{loading:null,persistor:ht},i.a.createElement(ee.a,{basename:"/goit-react-hw-08-phonebook"},i.a.createElement(i.a.StrictMode,null,i.a.createElement(at,null))))),document.getElementById("root"))},4:function(e,t,a){"use strict";a.r(t),a.d(t,"Type",(function(){return n}));var n={FILTER_CONTACT:"FILTER_CONTACT",GET_CONTACTS_START:"GET_CONTACTS_START",GET_CONTACTS_SUCCESS:"GET_CONTACTS_SUCCES",GET_CONTACTS_ERROR:"GET_CONTACTS_ERROR",POST_CONTACT_START:"POST_CONTACT_START",POST_CONTACT_SUCCESS:"POST_CONTACT_SUCCESS",POST_CONTACT_ERROR:"POST_CONTACT_ERROR",DELETE_CONTACT_START:"DELETE_CONTACT_START",DELETE_CONTACT_SUCESS:"DELETE_CONTACT_SUCESS",DELETE_CONTACT_ERROR:"DELETE_CONTACT_ERROR",SIGNUP_START:"SIGNUP_START",SIGNUP_SUCCESS:"SIGNUP_SUCCESS",SIGNUP_ERROR:"SIGNUP_ERROR",LOGIN_START:"LOGIN_START",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_ERROR:"LOGIN_ERROR",GET_USER_START:"GET_USER_START",GET_USER_SUCCESS:"GET_USER_SUCCESS",GET_USER_ERROR:"GET_USER_ERROR",LOGOUT_START:"LOGOUT_START",LOGOUT_SUCCESS:"LOGOUT_SUCCESS",LOGOUT_ERROR:"LOGOUT_ERROR",DELETE_USER_START:"DELETE_USER_START",DELETE_USER_SUCCESS:"DELETE_USER_SUCCESS",DELETE_USER_ERROR:"DELETE_USER_ERROR",CLEAR_AUTH_ERROR:"CLEAR_AUTH_ERROR"}}},[[151,1,2]]]);
//# sourceMappingURL=main.a5cd09d1.chunk.js.map