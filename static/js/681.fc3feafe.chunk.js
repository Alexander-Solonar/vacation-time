"use strict";(self.webpackChunkvacation_time=self.webpackChunkvacation_time||[]).push([[681],{3720:(e,a,l)=>{l.d(a,{A:()=>r});const t="MainTitle_titleContainer__lBkLs",s="MainTitle_title__58GzQ";var n=l(579);const r=e=>{let{name:a}=e;return(0,n.jsx)("div",{className:t,children:(0,n.jsx)("h1",{className:s,children:a})})}},1179:(e,a,l)=>{l.d(a,{A:()=>A});var t=l(3516),s=l(1899),n=l.n(s);const r="Formik_control__F96Aj",i="Formik_label__PQ4oW",o="Formik_icon__O+hiU",c="Formik_error__VykRM";var d=l(579);const m=e=>{const{label:a,name:l,...s}=e;return(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("label",{className:i,htmlFor:l,children:a}),(0,d.jsx)(t.D0,{name:l,autocomplete:"off",children:e=>{let{form:a,field:t}=e;const{setFieldValue:r}=a,{value:i}=t;return(0,d.jsx)(n(),{id:l,...t,...s,showIcon:!0,calendarIconClassname:o,toggleCalendarOnIconClick:!0,selected:i,placeholderText:"dd.MM.yyyy",dateFormat:"dd.MM.yyyy",autocomplete:"off",onChange:e=>r(l,e)})}}),(0,d.jsx)(t.Kw,{name:l,component:"p",className:c})]})},u=e=>{const{label:a,name:l,...s}=e;return(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("label",{className:i,htmlFor:l,children:a}),(0,d.jsx)(t.D0,{id:l,name:l,...s}),(0,d.jsx)(t.Kw,{name:l,component:"p",className:c})]})};var h=l(4069);const v=e=>{const{label:a,name:l,...s}=e;return(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("label",{className:i,htmlFor:l,children:a}),(0,d.jsx)(t.D0,{name:l,children:e=>{let{field:a}=e;return(0,d.jsx)(h.N,{...a,...s,id:l,mask:"+38(099) 999-9999",placeholder:"+38(099) 999-9999"})}}),(0,d.jsx)(t.Kw,{name:l,component:"p",className:c})]})};var f=l(8713);const j={control:e=>({...e,flex:"1",height:"100%",marginLeft:"-11px",cursor:"pointer",border:"none",backgroundColor:"#fff",boxShadow:"none"}),option:e=>({...e,cursor:"pointer",color:"inherit",borderBottom:"1px solid #ddd",backgroundColor:"inherit","&:last-child":{borderBottom:"none"},"&:hover":{backgroundColor:"#444765",color:"#fff"}}),menu:e=>({...e,left:"0"})},p=e=>{const{label:a,name:l,options:s,...n}=e;return(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("label",{className:i,htmlFor:l,children:a}),(0,d.jsx)(t.D0,{name:l,children:e=>{let{field:a,form:t}=e;return(0,d.jsx)(f.Ay,{inputId:l,...n,...a,options:s,styles:j,name:l,value:s.find((e=>e.value===a.value)),onChange:e=>t.setFieldValue(l,e.value),onBlur:a.onBlur})}}),(0,d.jsx)(t.Kw,{name:l,component:"p",className:c})]})},A=e=>{const{control:a,...l}=e;switch(a){case"input":return(0,d.jsx)(u,{...l});case"select":return(0,d.jsx)(p,{...l});case"date":return(0,d.jsx)(m,{...l});case"phone":return(0,d.jsx)(v,{...l});default:return null}}},7681:(e,a,l)=>{l.r(a),l.d(a,{default:()=>V});var t=l(3003),s=l(4117),n=l(3720),r=l(9473);const i="Loader_loader__ixwpY";var o=l(579);const c=()=>(0,o.jsx)("div",{className:i,children:(0,o.jsx)(r.BM,{height:60,width:60,color:"#202846",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#2e3963",strokeWidth:4,strokeWidthSecondary:4})}),d="data:image/png;base64,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";var m=l(1672),u=l(5043);const h="UserCard_content__cl+Jg",v="UserCard_infoContainer__sMKUh",f="UserCard_avatarImageContainer__9S2IY",j="UserCard_avatarImage__lcWHl",p="UserCard_buttonsContainer__-Iyc+",A="UserCard_list__9+aHj",b="UserCard_item__bbLgv",x="UserCard_label__EX734",R="UserCard_value__Iok54",g="UserCard_changeAvatarButton__7yfpy",C="UserCard_settingButton__Km2UW",k="UserCard_logoutButton__T809m",N="AvatarUploader_modalOverlay__m1UUD",E="AvatarUploader_modal__-G-xy",U="AvatarUploader_closeButton__+Fw0V",O="AvatarUploader_form__cw4iy",B="AvatarUploader_previewContainer__v2s8+",Y="AvatarUploader_previewImage__SOw5Q",F="AvatarUploader_inputLabel__tBE1P",I="AvatarUploader_submitButton__MtJxg";var w=l(3676),G=l(5023);const T=e=>{let{onClose:a}=e;const[l,s]=(0,u.useState)(null),[n,r]=(0,u.useState)(null),i=(0,t.wA)(),{uid:c}=(0,t.d4)((e=>e.auth)),{avatarURL:m}=(0,t.d4)((e=>e.data.user));return(0,o.jsx)("div",{className:N,children:(0,o.jsxs)("div",{className:E,children:[(0,o.jsx)("button",{className:U,onClick:()=>a(!1),children:(0,o.jsx)("svg",{width:"32",height:"32",children:(0,o.jsx)("use",{href:"".concat(w.A,"#icon-close-menu")})})}),(0,o.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),i((0,G.YB)({avatar:l,uid:c,preview:n}))},className:O,children:[(0,o.jsx)("div",{className:B,children:(0,o.jsx)("img",{src:n||(m||d),alt:"Avatar Preview",className:Y})}),(m||n)&&(0,o.jsx)("button",{type:"button",className:F,onClick:()=>{s(null),r(null),m&&i((0,G.gD)({uid:c}))},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0442\u043e"}),(0,o.jsx)("label",{htmlFor:"fileInput",className:F,children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0430\u0439\u043b"}),(0,o.jsx)("input",{id:"fileInput",type:"file",accept:"image/*",onChange:e=>{const a=e.target.files[0];if(a){s(a);const e=new FileReader;e.onloadend=()=>{r(e.result)},e.readAsDataURL(a)}}}),(0,o.jsx)("button",{type:"submit",className:I,disabled:!l,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440"})]})]})})};var z=l(3516),D=l(899),K=(l(5015),l(1179)),P=l(3932),X=l(2078);const M="EditProfileForm_modalOverlay__Jc-Hi",H="EditProfileForm_wrapper__hare3",S="EditProfileForm_closeButton__DnNA8",Z="EditProfileForm_form__lCnXC",q="EditProfileForm_input__SjSl-",Q="EditProfileForm_submitButton__0KlMp",W=(0,D.Ik)({name:(0,D.Yj)().trim().required("This is a required field"),gender:(0,D.Yj)().trim(),age:(0,D.p6)().required("This is a required field"),phone:(0,D.Yj)(),email:(0,D.Yj)().trim().required("This is a required field")}),L=[{value:"male",label:"Male"},{value:"female",label:"Female"}],J=e=>{let{items:a,onClose:l}=e;const{uid:s}=(0,t.d4)((e=>e.auth)),n=(0,t.wA)(),r={...a,age:""===a.age?"":(0,P.qg)(a.age,"dd.MM.yyyy",new Date)};return(0,o.jsx)("div",{className:M,children:(0,o.jsxs)("div",{className:H,children:[(0,o.jsx)("button",{className:S,onClick:()=>l(!1),children:(0,o.jsx)("svg",{width:"32",height:"32",children:(0,o.jsx)("use",{href:"".concat(w.A,"#icon-close-menu")})})}),(0,o.jsx)(z.l1,{initialValues:r,validationSchema:W,onSubmit:e=>{const l=(0,X.GP)(e.age,"dd.MM.yyyy");n((0,G.oS)({uid:s,values:{...e,age:l,avatarURL:a.avatarURL}}))},children:()=>(0,o.jsxs)(z.lV,{className:Z,children:[(0,o.jsx)(K.A,{className:q,control:"input",type:"text",label:"Name",name:"name"}),(0,o.jsx)(K.A,{className:q,control:"select",label:"Gender",name:"gender",options:L}),(0,o.jsx)(K.A,{className:q,control:"date",label:"Age",name:"age"}),(0,o.jsx)(K.A,{className:q,control:"phone",type:"text",label:"Phone",name:"phone"}),(0,o.jsx)(K.A,{className:q,control:"input",type:"email",label:"Email",name:"email"}),(0,o.jsx)("button",{className:Q,type:"submit",children:"Submit"})]})})]})})},y=()=>{const[e,a]=(0,u.useState)(!1),[l,n]=(0,u.useState)(!1),{user:r,isLoading:i}=(0,t.d4)((e=>e.data)),{name:c,gender:N,age:E,phone:U,email:O,avatarURL:B}=(0,t.d4)((e=>e.data.user||"")),{t:Y}=(0,s.Bd)(),F=(0,t.wA)(),I=[{value:c},{label:Y("account.sex"),value:N},{label:Y("account.date-birth"),value:E},{label:Y("account.phone"),value:U},{label:Y("account.email"),value:O}];return(0,o.jsx)(o.Fragment,{children:i&&(0,o.jsxs)("div",{className:h,children:[(0,o.jsxs)("div",{className:v,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:f,children:(0,o.jsx)("img",{className:j,src:B||d,alt:"default-user-avatar"})}),(0,o.jsxs)("div",{className:p,children:[(0,o.jsx)("button",{className:g,onClick:()=>n(!0),children:Y("account.change-avatar-btn")}),(0,o.jsx)("button",{className:C,onClick:()=>a(!0),children:Y("account.settings-btn")})]})]}),(0,o.jsx)("ul",{className:A,children:I.map(((e,a)=>{let{label:l,value:t}=e;return(0,o.jsx)("li",{className:b,children:(0,o.jsxs)("p",{children:[l&&(0,o.jsxs)("span",{className:x,children:[l,":"]}),(0,o.jsxs)("span",{className:R,children:[" ",t]})]})},a)}))})]}),(0,o.jsx)("button",{className:k,onClick:()=>{F((0,m.je)())},children:Y("account.exit-btn")}),e&&(0,o.jsx)(J,{items:r,onClose:a}),l&&(0,o.jsx)(T,{onClose:n})]})})},V=()=>{const{t:e}=(0,s.Bd)(),{isLoading:a}=(0,t.d4)((e=>e.data));return(0,o.jsxs)("div",{children:[(0,o.jsx)(n.A,{name:e("account.title")}),(0,o.jsx)("div",{className:"container",children:a?(0,o.jsx)(y,{}):(0,o.jsx)(c,{})})]})}}}]);
//# sourceMappingURL=681.fc3feafe.chunk.js.map