"use strict";(self.webpackChunkvacation_time=self.webpackChunkvacation_time||[]).push([[109],{1381:(e,r,a)=>{a.d(r,{A:()=>c});var s=a(5043),o=a(3216),l=a(5475);const n="Backdrop_backdrop__fV1mH",i="Backdrop_backLink__4B1A4",t="Backdrop_content__e-MJM";var d=a(579);const c=e=>{var r,a;let{children:c}=e;const m=(0,o.zy)(),u=(0,s.useRef)(null!==(r=null===(a=m.state)||void 0===a?void 0:a.from)&&void 0!==r?r:"/");return(0,d.jsxs)("div",{className:n,children:[(0,d.jsx)(l.N_,{className:i,to:u.current}),(0,d.jsx)("div",{className:t,children:c})]})}},3171:(e,r,a)=>{a.d(r,{A:()=>_});var s=a(3516),o=a(1899),l=a.n(o);const n="Formik_control__F96Aj",i="Formik_label__PQ4oW",t="Formik_icon__O+hiU",d="Formik_error__VykRM";var c=a(579);const m=e=>{const{label:r,name:a,...o}=e;return(0,c.jsxs)("div",{className:n,children:[(0,c.jsx)("label",{className:i,htmlFor:a,children:r}),(0,c.jsx)(s.D0,{name:a,autocomplete:"off",children:e=>{let{form:r,field:s}=e;const{setFieldValue:n}=r,{value:i}=s;return(0,c.jsx)(l(),{id:a,...s,...o,showIcon:!0,calendarIconClassname:t,toggleCalendarOnIconClick:!0,selected:i,placeholderText:"dd.MM.yyyy",dateFormat:"dd.MM.yyyy",autocomplete:"off",onChange:e=>n(a,e)})}}),(0,c.jsx)(s.Kw,{name:a,component:"p",className:d})]})},u=e=>{const{label:r,name:a,...o}=e;return(0,c.jsxs)("div",{className:n,children:[(0,c.jsx)("label",{className:i,htmlFor:a,children:r}),(0,c.jsx)(s.D0,{id:a,name:a,...o}),(0,c.jsx)(s.Kw,{name:a,component:"p",className:d})]})};var h=a(4069);const p=e=>{const{label:r,name:a,...o}=e;return(0,c.jsxs)("div",{className:n,children:[(0,c.jsx)("label",{className:i,htmlFor:a,children:r}),(0,c.jsx)(s.D0,{name:a,children:e=>{let{field:r}=e;return(0,c.jsx)(h.N,{...r,...o,id:a,mask:"+38(099) 999-9999",placeholder:"+38(099) 999-9999"})}}),(0,c.jsx)(s.Kw,{name:a,component:"p",className:d})]})};var j=a(8713);const f={control:e=>({...e,flex:"1",height:"100%",marginLeft:"-11px",cursor:"pointer",border:"none",backgroundColor:"#fff",boxShadow:"none"}),option:e=>({...e,cursor:"pointer",color:"inherit",borderBottom:"1px solid #ddd",backgroundColor:"inherit","&:last-child":{borderBottom:"none"},"&:hover":{backgroundColor:"#444765",color:"#fff"}}),menu:e=>({...e,left:"0"})},x=e=>{const{label:r,name:a,options:o,...l}=e;return(0,c.jsxs)("div",{className:n,children:[(0,c.jsx)("label",{className:i,htmlFor:a,children:r}),(0,c.jsx)(s.D0,{name:a,children:e=>{let{field:r,form:s}=e;return(0,c.jsx)(j.Ay,{inputId:a,...l,...r,options:o,styles:f,name:a,value:o.find((e=>e.value===r.value)),onChange:e=>s.setFieldValue(a,e.value),onBlur:r.onBlur})}}),(0,c.jsx)(s.Kw,{name:a,component:"p",className:d})]})},_=e=>{const{control:r,...a}=e;switch(r){case"input":return(0,c.jsx)(u,{...a});case"select":return(0,c.jsx)(x,{...a});case"date":return(0,c.jsx)(m,{...a});case"phone":return(0,c.jsx)(p,{...a});default:return null}}},2996:(e,r,a)=>{a.d(r,{MG:()=>n,Z2:()=>l,rr:()=>i,zK:()=>o});var s=a(899);const o=(0,s.Ik)({name:(0,s.Yj)().trim().required("Name is a required field"),email:(0,s.Yj)().trim().required("Email is a required field"),password:(0,s.Yj)().trim().required("Password is a required field")}),l=(0,s.Ik)({email:(0,s.Yj)().trim().required("Email is a required field"),password:(0,s.Yj)().trim().required("Password is a required field")}),n=(0,s.Ik)({name:(0,s.Yj)().trim().required("This is a required field"),gender:(0,s.Yj)().trim(),dob:(0,s.p6)(),phone:(0,s.Yj)(),email:(0,s.Yj)().trim().required("This is a required field")}),i=(0,s.Ik)({name:(0,s.Yj)().trim().required("Name is a required field"),phone:(0,s.Yj)().trim().matches(/^\+?3?8?(0\d{9})$/,"Invalid phone number").required("Phone is a required field")})},8109:(e,r,a)=>{a.r(r),a.d(r,{default:()=>_});var s=a(5475),o=a(4117),l=a(3003),n=a(3516),i=a(1672),t=a(2996),d=a(3171);const c="LoginForm_form__qXknD",m="LoginForm_input__QVIQ2",u="LoginForm_error__FIsBr",h="LoginForm_button__wGRfV";var p=a(579);const j=()=>{const{error:e}=(0,l.d4)((e=>e.auth)),r=(0,l.wA)(),{t:a}=(0,o.Bd)();return(0,p.jsx)(n.l1,{initialValues:{email:"",password:""},validationSchema:t.Z2,onSubmit:(e,a)=>{r((0,i.iD)(e)),a.resetForm()},children:(0,p.jsxs)(n.lV,{className:c,children:[(0,p.jsx)(d.A,{className:m,control:"input",type:"email",label:a("form.email"),name:"email",placeholder:a("form.placeholderEmail")}),(0,p.jsx)(d.A,{className:m,control:"input",type:"password",label:a("form.password"),name:"password",placeholder:a("form.placeholderPassword")}),e&&(0,p.jsx)("p",{className:u,children:"Incorrect password or email"}),(0,p.jsx)("button",{className:h,type:"submit",children:a("form.log-in-btn")})]})})};var f=a(1381);const x="PageLogin_toggleButton__J87Im",_=()=>{const{t:e}=(0,o.Bd)();return(0,p.jsxs)(f.A,{children:[(0,p.jsx)(j,{}),(0,p.jsx)(s.N_,{to:"/register",className:x,children:e("form.register-btn")})]})}}}]);
//# sourceMappingURL=109.217de471.chunk.js.map