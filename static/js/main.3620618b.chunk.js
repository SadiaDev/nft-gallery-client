(this["webpackJsonpnft-gallery-client"]=this["webpackJsonpnft-gallery-client"]||[]).push([[0],{107:function(e,t,n){},141:function(e,t,n){},151:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(49),s=n.n(i),c=(n(141),n(15)),o=n(44),l=n(45),j=n(57),d=n(56),u=n(16),h=n(227),b=n(61),x=n(109),g=n(0),O=["user","component","render"],m=function(e){var t=e.user,n=e.component,r=e.render,a=Object(x.a)(e,O);return t&&r?Object(g.jsx)(u.b,Object(b.a)(Object(b.a)({},a),{},{render:r})):Object(g.jsx)(u.b,Object(b.a)(Object(b.a)({},a),{},{render:function(e){return t?Object(g.jsx)(n,Object(b.a)({},e)):Object(g.jsx)(u.a,{to:"/"})}}))},p=n(228),f=n(224),y=n(233),v=(n(151),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleClose=function(){return r.setState({show:!1})},r.state={show:!0},r.timeoutId=null,r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,r=e.message,a=e.deleteAlert,i=e.id;return this.state.show||setTimeout((function(){a(i)}),300),Object(g.jsx)(p.a,{open:open,autoHideDuration:6e3,onClose:this.handleClose,children:Object(g.jsx)(f.a,{variant:"filled",severity:t,onClose:this.handleClose,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(y.a,{variant:"h6",children:n}),Object(g.jsx)("p",{className:"alert-body",children:r})]})})})}}]),n}(a.a.Component)),w=n(19),k=n(235),C=n(234),S=n(236),A=n.p+"static/media/zyzygy_eclipse1.364b111f.png",P=Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(w.c,{style:{color:"white",margin:15,textDecoration:"none"},to:"/submit-art",className:"nav-link",children:"Submit Art"}),Object(g.jsx)(w.c,{style:{color:"white",margin:15,textDecoration:"none"},to:"/change-password",className:"nav-link",children:"Change Password"}),Object(g.jsx)(w.c,{style:{color:"white",margin:15,textDecoration:"none"},to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),T=Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(w.c,{style:{color:"white",margin:15,textDecoration:"none"},to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(g.jsx)(w.c,{style:{color:"white",margin:15,textDecoration:"none"},to:"/sign-in",className:"nav-link",children:"Sign In"})]}),q=Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(w.c,{style:{color:"white",margin:15,textDecoration:"none"},exact:!0,to:"/",className:"nav-link",children:"Home"}),Object(g.jsx)(w.c,{style:{color:"white",margin:15,textDecoration:"none"},exact:!0,to:"/gallery",className:"nav-link",children:"Gallery"})]}),D=function(e){var t=e.user;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(C.a,{sx:{flexGrow:1,fontWeight:"100"},children:Object(g.jsx)(k.a,{style:{backgroundColor:"#424242"},position:"fixed",children:Object(g.jsxs)(S.a,{children:[Object(g.jsx)(w.b,{to:"/",style:{paddingLeft:"20px",color:"#FFF",textDecoration:"none",fontWeight:"100",flexGrow:1},children:Object(g.jsx)("img",{src:A,style:{width:"300px",marginTop:10}})}),t&&Object(g.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),q,t?P:T]})})})})},U=n(11),R="https://rocky-ocean-73265.herokuapp.com",F="http://localhost:4741",B="localhost"===window.location.hostname?F:R,I=n(38),N=n.n(I),E=function(e){return N()({url:B+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},H="Missing email. Please check the form.",W="Missing password. Please check the form.",M=n(240),z=n(231),G=n(238),J=n(239),L=n(55),Y=n.n(L),_=n(51),K=n.n(_),Z=n(223),Q=n(237),V=function(e){var t=e.id,n=e.label,r=e.icon,a=e.value,i=e.onChange,s=e.type,c=e.required,o=e.keyPress;return Object(g.jsx)(Z.a,{required:c,id:t,label:n,InputProps:{startAdornment:Object(g.jsx)(Q.a,{position:"start",children:r}),style:{color:"white"}},variant:"outlined",color:"primary",value:a,type:s,onChange:i,onKeyPress:o,sx:{width:"100%",marginTop:"20px","& label.Mui-focused":{color:"green"},"& label":{color:"white"},"&:hover label":{color:"#5ba7ff"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"#5ba7ff"},"&.Mui-focused fieldset":{borderColor:"green"}}}})},X=n(112),$=n.n(X),ee=function(e){var t=e.msgAlert,n=e.setUser,a=Object(r.useState)(""),i=Object(U.a)(a,2),s=i[0],c=i[1],o=Object(r.useState)(""),l=Object(U.a)(o,2),j=l[0],d=l[1],h=Object(r.useState)(""),b=Object(U.a)(h,2),x=b[0],O=b[1],m=Object(u.f)(),p=function(e){var r;e&&e.preventDefault(),t({heading:"passwords do not match"}),""===s?t({heading:"email field is required. Cannot be empty",message:H,variant:"error"}):""===j?t({heading:"password field is required. Cannot be empty",message:W,variant:"error"}):""===x?t({heading:"password confirmation field is required. Cannot be empty",message:"Missing password confirmation. Please check the form.",variant:"error"}):(r={email:s,password:j,passwordConfirmation:x},N()({method:"POST",url:B+"/sign-up/",data:{credentials:{email:r.email,password:r.password,password_confirmation:r.passwordConfirmation}}})).then((function(){return E({email:s,password:j})})).then((function(e){return n(e.data.user)})).then((function(){return t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return m.push("/")})).catch((function(e){c(""),d(""),O(""),t({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"error"})}))};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(z.a,{style:{paddingTop:"150px"},container:!0,justify:"center",children:[Object(g.jsx)(z.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})}),Object(g.jsx)(z.a,{item:!0,xs:12,sm:12,md:4,children:Object(g.jsx)(G.a,{style:{backgroundColor:"gray"},children:Object(g.jsxs)(J.a,{style:{color:"white"},children:[Object(g.jsxs)(z.a,{container:!0,children:[Object(g.jsx)(z.a,{item:!0,children:Object(g.jsx)($.a,{sx:{color:"white",marginRight:"10px",height:"30px"}})}),Object(g.jsx)(z.a,{item:!0,children:Object(g.jsx)(y.a,{variant:"h5",children:"Register for an Account"})})]})," ",Object(g.jsx)(V,{required:!0,id:"email",label:"Email",icon:Object(g.jsx)(Y.a,{sx:{color:"white"}}),variant:"outlined",onChange:function(e){return c(e.target.value)}}),Object(g.jsx)(V,{required:!0,id:"password",label:"Password",icon:Object(g.jsx)(K.a,{sx:{color:"white"}}),variant:"outlined",type:"password",onChange:function(e){return d(e.target.value)}}),Object(g.jsx)(V,{required:!0,id:"passwordConfirmation",label:"Password Confirmation",icon:Object(g.jsx)(K.a,{sx:{color:"white"}}),variant:"outlined",type:"password",onChange:function(e){return O(e.target.value)},keyPress:function(e){13!==e.keyCode&&13!==e.which||p()}}),Object(g.jsx)(M.a,{style:{marginTop:"20px"},variant:"contained",type:"submit",onClick:p,children:"Register"})]})})}),Object(g.jsx)(z.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})})]})})},te=n(113),ne=n.n(te),re=function(e){var t=e.msgAlert,n=e.setUser,a=Object(r.useState)(""),i=Object(U.a)(a,2),s=i[0],c=i[1],o=Object(r.useState)(""),l=Object(U.a)(o,2),j=l[0],d=l[1],h=Object(u.f)(),b=function(e){e&&e.preventDefault(),""===s?t({heading:"email field is required. Cannot be empty",message:H,variant:"error"}):""===j?t({heading:"password field is required. Cannot be empty",message:W,variant:"error"}):E({email:s,password:j,history:h}).then((function(e){return n(e.data.user)})).then((function(){return t({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return h.push("/")})).catch((function(e){c(""),d(""),t({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"error"})}))};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(z.a,{style:{paddingTop:"150px"},container:!0,justify:"center",children:[Object(g.jsx)(z.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})}),Object(g.jsx)(z.a,{item:!0,xs:12,sm:12,md:4,children:Object(g.jsx)(G.a,{style:{backgroundColor:"gray"},children:Object(g.jsxs)(J.a,{style:{color:"white"},children:[Object(g.jsxs)(z.a,{container:!0,children:[Object(g.jsx)(z.a,{item:!0,children:Object(g.jsx)(ne.a,{sx:{color:"white",marginRight:"10px",height:"30px"}})}),Object(g.jsx)(z.a,{item:!0,children:Object(g.jsx)(y.a,{variant:"h5",children:"Login to Your Account"})})]})," ",Object(g.jsx)(V,{required:!0,id:"email",label:"Email",icon:Object(g.jsx)(Y.a,{sx:{color:"white"}}),value:s,onChange:function(e){return c(e.target.value)}}),Object(g.jsx)(V,{required:!0,id:"password",label:"Password",icon:Object(g.jsx)(K.a,{sx:{color:"white"}}),value:j,type:"password",onChange:function(e){return d(e.target.value)},keyPress:function(e){13!==e.keyCode&&13!==e.which||b()}}),Object(g.jsx)(M.a,{style:{marginTop:"20px"},variant:"contained",type:"submit",onClick:b,children:"Sign In"}),Object(g.jsx)(y.a,{variant:"h6",style:{marginTop:"20px",marginBottom:"10px"},children:"No account yet?"}),Object(g.jsx)(y.a,{paragraph:!0,style:{marginBottom:"20px"},children:"Get the inside track on upcoming Releases, the newest collaborations and latest events, along with purchasing any of our works using Ethereum with the metamask chrome browser extension."}),Object(g.jsx)(w.c,{style:{marginTop:"50px",textDecoration:"none"},to:"/sign-up",className:"nav-link",children:Object(g.jsx)(M.a,{color:"success",variant:"contained",children:"Join Zyzygy studios"})})]})})}),Object(g.jsx)(z.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})})]})})},ae=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,r=e.clearUser;(function(e){return N()({url:B+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return r()}))}},{key:"render",value:function(){return""}}]),n}(r.Component),ie=Object(u.g)(ae),se=n(241),ce=n.p+"static/media/Jose-Parla-Studio-Yellowtrace-54.a71ab207.jpeg",oe=function(){return Object(g.jsx)(se.a,{style:{height:"100vh",width:"100vw",backgroundImage:"url(".concat(ce,")"),backgroundSize:"cover",backgroundPosition:"center center",maxWidth:"100%",paddingTop:"100px"},children:Object(g.jsx)(y.a,{style:{fontWeight:"100",padding:"50px"},variant:"h4",align:"center",color:"white",gutterBottom:!0,children:"Featured Artists"})})},le=n(114),je=n.n(le),de=function(e){var t=e.msgAlert,n=e.user,a=Object(r.useState)(""),i=Object(U.a)(a,2),s=i[0],c=i[1],o=Object(r.useState)(""),l=Object(U.a)(o,2),j=l[0],d=l[1],h=Object(u.f)(),b=function(e){e&&e.preventDefault(),function(e,t){return N()({url:B+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})}({oldPassword:s,newPassword:j},n).then((function(){return t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return h.push("/")})).catch((function(e){c(""),d(""),t({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"error"})}))};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(z.a,{style:{paddingTop:"150px"},container:!0,justify:"center",children:[Object(g.jsx)(z.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})}),Object(g.jsx)(z.a,{item:!0,xs:12,sm:12,md:4,children:Object(g.jsx)(G.a,{style:{backgroundColor:"gray"},children:Object(g.jsxs)(J.a,{style:{color:"white"},children:[Object(g.jsxs)(z.a,{container:!0,children:[Object(g.jsx)(z.a,{item:!0,children:Object(g.jsx)(je.a,{sx:{color:"white",marginRight:"10px",height:"30px"}})}),Object(g.jsx)(z.a,{item:!0,children:Object(g.jsx)(y.a,{variant:"h5",children:"Change Password"})})]})," ",Object(g.jsx)(V,{required:!0,id:"oldPassword",label:"Old Password",icon:Object(g.jsx)(K.a,{sx:{color:"white"}}),value:s,type:"password",onChange:function(e){return c(e.target.value)}}),Object(g.jsx)(V,{required:!0,id:"newPassword",label:"New Password",icon:Object(g.jsx)(K.a,{sx:{color:"white"}}),value:j,type:"password",onChange:function(e){return d(e.target.value)},keyPress:function(e){13!==e.keyCode&&13!==e.which||b()}}),Object(g.jsx)(M.a,{style:{marginTop:"20px"},variant:"contained",type:"submit",onClick:b,children:"Update"})]})})}),Object(g.jsx)(z.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})})]})})},ue=n(242),he=(n(107),n(226)),be=n(230),xe=n(219),ge={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"50%",bgcolor:"background.paper",boxShadow:24,p:1},Oe=function(e){var t=e.card,n=e.handleClose,r=e.open;return Object(g.jsx)(he.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:r,onClose:n,closeAfterTransition:!0,BackdropComponent:be.a,BackdropProps:{timeout:500},style:{overflow:"scroll"},children:Object(g.jsx)(xe.a,{in:r,children:Object(g.jsxs)(C.a,{sx:ge,children:[Object(g.jsx)("div",{style:{padding:"0px"},children:Object(g.jsx)("img",{style:{maxWidth:"100%"},src:t.imageUrl,alt:t.artist})}),Object(g.jsxs)("div",{style:{padding:"20px"},children:[Object(g.jsx)(y.a,{gutterBottom:!0,variant:"h4",children:t.artist}),Object(g.jsxs)(y.a,{gutterBottom:!0,variant:"h5",children:["Title: ","'".concat(t.title,"'")]}),Object(g.jsx)(y.a,{gutterBottom:!0,paragraph:!0,children:t.notes})," ",Object(g.jsx)(y.a,{variant:"h5",children:"Medium"}),Object(g.jsx)(y.a,{children:t.medium})," ",Object(g.jsx)(M.a,{style:{marginTop:"10px"},variant:"outlined",size:"small",color:"warning",children:"Inquire"})]})]})})})},me=function(){var e=Object(r.useState)([]),t=Object(U.a)(e,2),n=t[0],i=t[1],s=Object(r.useState)(0),c=Object(U.a)(s,2),o=c[0],l=c[1],j=Object(r.useState)(!1),d=Object(U.a)(j,2),u=d[0],h=d[1];Object(r.useEffect)((function(){document.body.style.cursor=u?"pointer":"auto"}),[u]),Object(r.useEffect)((function(){N()({method:"GET",url:B+"/artwork"}).then((function(e){i(e.data.artwork),console.log(n)}))}),[]);var b=a.a.useState(!1),x=Object(U.a)(b,2),O=x[0],m=x[1];return Object(g.jsxs)("div",{style:{backgroundColor:"#202020"},children:[Object(g.jsxs)(se.a,{maxWidth:"sm",sx:{padding:"8, 0, 6",paddingTop:"100px"},children:[Object(g.jsx)(y.a,{style:{fontWeight:"100",color:"white",marginTop:"75px"},variant:"h4",align:"center",gutterBottom:!0,children:"All Artists"}),Object(g.jsx)(y.a,{style:{fontWeight:"100",color:"white"},variant:"h6",align:"center",paragraph:!0,children:"Exclusive works by iconic artists"}),Object(g.jsx)("div",{children:Object(g.jsx)(z.a,{container:!0,spacing:2,justifyContent:"center",sx:{marginTop:"20px"}})})]}),Object(g.jsx)(se.a,{maxWidth:"flex",sx:{padding:"20px 0"},children:Object(g.jsxs)(z.a,{container:!0,spacing:4,children:[n.map((function(e,t){return Object(g.jsx)(z.a,{item:!0,xs:12,sm:6,md:4,children:Object(g.jsxs)(G.a,{sx:{height:"100%",display:"flex",flexDirection:"column",borderRadius:"0",margin:"0",color:"white",backgroundColor:"#505050"},children:[Object(g.jsx)(ue.a,{sx:{paddingTop:"92%"},image:e.imageUrl,title:"Image Title",onClick:function(e){return function(e){console.log(o),l(e),console.log(e),m(!0)}(t)},onPointerOver:function(){return h(!0)},onPointerOut:function(){return h(!1)}}),Object(g.jsxs)(J.a,{sx:{flexGrow:1},children:[Object(g.jsx)(y.a,{gutterBottom:!0,variant:"h5",children:e.artist}),Object(g.jsx)(y.a,{children:"'".concat(e.title,"'")})," "]})]})},t)})),n.length>0?Object(g.jsx)(Oe,{card:n[o],handleClose:function(){return m(!1)},open:O}):Object(g.jsx)(g.Fragment,{})]})})]})},pe=n(115),fe=n.n(pe),ye=n(91),ve=n.n(ye),we=n(92),ke=n.n(we),Ce=n(117),Se=n.n(Ce),Ae=n(116),Pe=n.n(Ae),Te=n(118),qe=n.n(Te),De=n(90),Ue=n.n(De),Re=n(119),Fe=n.n(Re),Be=function(e){var t=e.msgAlert,n=e.user,a=Object(r.useState)(null),i=Object(U.a)(a,2),s=i[0],c=i[1],o=Object(r.useState)(null),l=Object(U.a)(o,2),j=l[0],d=l[1],u=Object(r.useState)(null),h=Object(U.a)(u,2),b=h[0],x=h[1],O=Object(r.useState)(null),m=Object(U.a)(O,2),p=m[0],f=m[1],v=Object(r.useState)(null),w=Object(U.a)(v,2),k=w[0],C=w[1],S=Object(r.useState)(null),A=Object(U.a)(S,2),P=A[0],T=A[1],q=Object(r.useState)(null),D=Object(U.a)(q,2),R=D[0],F=D[1],I=Object(r.useState)(null),E=Object(U.a)(I,2),H=E[0],W=E[1],L=Object(r.useState)(null),_=Object(U.a)(L,2),K=_[0],Z=_[1],Q=Object(r.useState)(null),X=Object(U.a)(Q,2),$=X[0],ee=X[1],te=Object(r.useState)(null),ne=Object(U.a)(te,2),re=ne[0],ae=ne[1],ie=Object(r.useState)(!1),se=Object(U.a)(ie,2),ce=se[0],oe=(se[1],{artist:s,title:j,imageUrl:b,releaseDate:p,medium:k,artistRoyalty:P,curatorRoyalty:R,provenance:H,exhibitionHistory:K,publishingHistory:$,notes:re}),le=function(e){e&&e.preventDefault(),console.log(oe),console.log(ce),function(e,t){return N()({method:"POST",url:B+"/artwork",headers:{Authorization:"Bearer ".concat(e.token)},data:{artwork:{artist:t.artist,title:t.title,imageUrl:t.imageUrl,releaseDate:t.releaseDate,medium:t.medium,artistRoyalty:t.artistRoyalty,curatorRoyalty:t.curatorRoyalty,provenance:t.provenance,exhibitionHistory:t.exhibitionHistory,publishingHistory:t.publishingHistory,notes:t.notes,owner:e}}})}(n,oe).then((function(e){console.log(e.data.artwork)})).then((function(){return t({heading:"Submit Artwork Success",message:"Thank you for adding to our collection!",variant:"success"})})).catch((function(e){t({heading:"Submit Art Failed with error: "+e.message,message:"Something went wrong, please try again.",variant:"error"})})).finally((function(){c(""),d(""),x(""),f(""),C(""),T(""),F(""),Z(""),ee(""),W(""),ae("")}))};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(z.a,{style:{paddingTop:"150px"},container:!0,justify:"center",children:[Object(g.jsx)(z.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})}),Object(g.jsx)(z.a,{item:!0,xs:11,sm:11,md:6,children:Object(g.jsx)(G.a,{style:{backgroundColor:"gray"},children:Object(g.jsxs)(J.a,{style:{color:"white"},children:[Object(g.jsxs)(z.a,{container:!0,children:[Object(g.jsx)(z.a,{item:!0,children:Object(g.jsx)(Ue.a,{sx:{color:"white",marginRight:"10px",height:"30px"}})}),Object(g.jsx)(z.a,{item:!0,children:Object(g.jsx)(y.a,{variant:"h5",children:"Submit Your Artwork"})})]}),Object(g.jsxs)(z.a,{container:!0,children:[Object(g.jsx)(z.a,{item:!0,xs:12,children:Object(g.jsx)(V,{required:!0,id:"artist",label:"Artist",icon:Object(g.jsx)(Y.a,{sx:{color:"white"}}),value:s,onChange:function(e){return c(e.target.value)}})}),Object(g.jsx)(z.a,{item:!0,xs:12,children:Object(g.jsx)(V,{required:!0,id:"title",label:"Title",icon:Object(g.jsx)(fe.a,{sx:{color:"white"}}),value:j,onChange:function(e){return d(e.target.value)}})}),Object(g.jsxs)(z.a,{container:!0,spacing:3,children:[Object(g.jsx)(z.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(V,{required:!0,id:"imageUrl",label:"Image URL",icon:Object(g.jsx)(ve.a,{sx:{color:"white"}}),value:b,onChange:function(e){return x(e.target.value)}})}),Object(g.jsx)(z.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(V,{required:!0,id:"releaseDate",label:"Release Date",icon:Object(g.jsx)(Pe.a,{sx:{color:"white"}}),value:p,onChange:function(e){return f(e.target.value)}})})]}),Object(g.jsxs)(z.a,{container:!0,spacing:3,children:[Object(g.jsx)(z.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(V,{required:!0,id:"medium",label:"Medium",icon:Object(g.jsx)(Se.a,{sx:{color:"white"}}),value:k,onChange:function(e){return C(e.target.value)}})}),Object(g.jsx)(z.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(V,{required:!0,id:"artistRoyalty",label:"Artist Royalty",icon:Object(g.jsx)(ke.a,{sx:{color:"white"}}),value:P,onChange:function(e){return T(e.target.value)}})})]}),Object(g.jsxs)(z.a,{container:!0,spacing:3,children:[Object(g.jsx)(z.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(V,{required:!0,id:"curatorRoyalty",label:"Curator Royalty",icon:Object(g.jsx)(ke.a,{sx:{color:"white"}}),value:R,onChange:function(e){return F(e.target.value)}})}),Object(g.jsx)(z.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(V,{required:!0,id:"provenance",label:"Provenance",icon:Object(g.jsx)(ve.a,{sx:{color:"white"}}),value:H,onChange:function(e){return W(e.target.value)}})})]}),Object(g.jsxs)(z.a,{container:!0,spacing:3,children:[Object(g.jsx)(z.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(V,{id:"exhibitionHistory",label:"Exhibition History",icon:Object(g.jsx)(qe.a,{sx:{color:"white"}}),value:K,onChange:function(e){return Z(e.target.value)}})}),Object(g.jsx)(z.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(V,{id:"publishingHistory",label:"Publishing History",icon:Object(g.jsx)(Ue.a,{sx:{color:"white"}}),value:$,onChange:function(e){return ee(e.target.value)}})})]}),Object(g.jsx)(z.a,{container:!0,spacing:3,children:Object(g.jsx)(z.a,{item:!0,xs:12,children:Object(g.jsx)(V,{id:"notes",label:"Notes",icon:Object(g.jsx)(Fe.a,{sx:{color:"white"}}),value:re,onChange:function(e){return ae(e.target.value)},keyPress:function(e){13!==e.keyCode&&13!==e.which||le()}})})}),Object(g.jsx)(z.a,{container:!0,children:Object(g.jsx)(z.a,{item:!0,xs:10,md:6,style:{marginTop:"20px"},children:Object(g.jsx)(M.a,{variant:"contained",type:"submit",onClick:le,children:"Submit Artwork"})})})]})]})})}),Object(g.jsx)(z.a,{item:!0,xs:!0,children:Object(g.jsx)("div",{})})]})})},Ie=n(222),Ne=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).setUser=function(e){return r.setState({user:e})},r.clearUser=function(){return r.setState({user:null})},r.deleteAlert=function(e){r.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},r.msgAlert=function(e){var t=e.heading,n=e.message,a=e.variant,i=Object(h.a)();r.setState((function(e){return{msgAlerts:[].concat(Object(c.a)(e.msgAlerts),[{heading:t,message:n,variant:a,id:i}])}}))},r.state={user:null,msgAlerts:[]},r}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,r=t.user;return Object(g.jsxs)("div",{style:{backgroundColor:"#202020",height:"100vh"},children:[Object(g.jsx)(Ie.a,{}),Object(g.jsx)(D,{user:r}),n.map((function(t){return Object(g.jsx)(v,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(g.jsxs)(se.a,{style:{width:"100vw",padding:"0",maxWidth:"100%"},children:[Object(g.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(g.jsx)(oe,{style:{backgroundColor:"#202020"}})}}),Object(g.jsx)(u.b,{path:"/sign-up",render:function(){return Object(g.jsx)(ee,{style:{backgroundColor:"black"},msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(u.b,{path:"/sign-in",render:function(){return Object(g.jsx)(re,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(u.b,{path:"/gallery",render:function(){return Object(g.jsx)(me,{style:{backgroundColor:"#202020"}})}}),Object(g.jsx)(m,{user:r,path:"/sign-out",render:function(){return Object(g.jsx)(ie,{style:{backgroundColor:"black"},msgAlert:e.msgAlert,clearUser:e.clearUser,user:r})}}),Object(g.jsx)(m,{user:r,path:"/change-password",render:function(){return Object(g.jsx)(de,{msgAlert:e.msgAlert,user:r})}}),Object(g.jsx)(m,{user:r,path:"/submit-art",render:function(){return Object(g.jsx)(Be,{style:{backgroundColor:"black"},msgAlert:e.msgAlert,user:r})}})]})]})}}]),n}(r.Component),Ee=(n(173),n(174),n(175),n(176),Object(g.jsx)(w.a,{basename:"/nft-gallery-client",children:Object(g.jsx)(Ne,{})}));s.a.render(Ee,document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.3620618b.chunk.js.map