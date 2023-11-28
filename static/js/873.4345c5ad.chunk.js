"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[873],{5224:(n,e,t)=>{t.d(e,{z:()=>d});var i,r=t(168);const a=(0,t(1191).ZP)("button")(i||(i=(0,r.Z)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: 1px solid #edf3f5;\n  border-radius: 4px;\n  padding: 13px 0;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);\n\n  &:hover,\n  &:active,\n  &:focus {\n    color: #fff;\n    border: 1px solid rgb(255, 130, 92);\n    background-color: rgb(255, 130, 92);\n  }\n"])),(n=>n.color||"#2e186a"),(n=>n.color?"#2E186A":"#fff"));var s=t(184);const d=n=>{let{color:e,fixedWidth:t,children:i,onClick:r}=n;return(0,s.jsx)(a,{color:e,fixedWidth:t,onClick:r,children:i})}},9873:(n,e,t)=>{t.r(e),t.d(e,{default:()=>B});var i=t(605),r=t(9603),a=t(4720),s=t(1758),d=t(2791),l=t(2147),o=t(4569),c=t.n(o);const m=n=>{const[e,t]=(0,d.useState)({}),[i,r]=(0,d.useState)({}),[a,s]=(0,d.useState)(!1);(0,d.useEffect)((()=>{0===Object.keys(i).length&&a&&(t(""),l.Z.success({message:"Success",description:"Your message has been sent!"}))}),[i,a]);return{handleChange:n=>{n.persist(),t((e=>({...e,[n.target.name]:n.target.value}))),r((e=>({...e,[n.target.name]:""})))},handleSubmit:t=>{t.preventDefault(),r(n(e));3===Object.keys(e).length&&c().post("",{...e}).then((()=>{s(!0)}))},values:e,errors:i}};function h(n){let e={};return n.name||(e.name="Name is required"),n.email?/\S+@\S+\.\S+/.test(n.email)||(e.email="Email address is invalid"):e.email="Email address is required",n.message||(e.message="Message is required"),e}var p,x,u,g=t(5224),Z=t(168),b=t(1191);const f=(0,b.ZP)("p")(p||(p=(0,Z.Z)(["\n  margin-top: 1.5rem;\n"]))),j=(0,b.ZP)("div")(x||(x=(0,Z.Z)(["\n  position: relative;\n  max-width: 700px;\n"]))),v=(0,b.ZP)("div")(u||(u=(0,Z.Z)(["\n  border-radius: 3rem;\n  max-width: 400px;\n"])));var w=t(184);const y=(0,a.Z)()((n=>{let{title:e,content:t,t:i}=n;return(0,w.jsxs)(j,{children:[(0,w.jsx)("h6",{children:i(e)}),(0,w.jsx)(v,{children:(0,w.jsx)(f,{children:i(t)})})]})}));var k,P;const C=(0,b.ZP)("div")(k||(k=(0,Z.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n"]))),S=(0,b.ZP)("input")(P||(P=(0,Z.Z)(["\n  font-size: 0.875rem;\n"])));var z,E,q;(0,b.ZP)("div")(z||(z=(0,Z.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 10px 5px;\n  margin-bottom: -0.625rem;\n"]))),(0,b.ZP)("textarea")(E||(E=(0,Z.Z)(["\n  resize: none;\n  font-size: 0.875rem;\n  height: 185px;\n"])));const M=(0,b.ZP)("label")(q||(q=(0,Z.Z)(["\n  display: block;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n"]))),N=(0,a.Z)()((n=>{let{name:e,placeholder:t,onChange:i,t:r}=n;return(0,w.jsxs)(C,{children:[(0,w.jsx)(M,{htmlFor:e,children:r(e)}),(0,w.jsx)(S,{placeholder:r(t),name:e,id:e,onChange:i})]})}));var O,W,_,A;const D=(0,b.ZP)("div")(O||(O=(0,Z.Z)(["\n  padding: 5rem 0;\n\n  @media only screen and (max-width: 1024px) {\n    padding: 3rem 0;\n  }\n"]))),F=(0,b.ZP)("form")(W||(W=(0,Z.Z)(["\n  width: 100%;\n  max-width: 520px;\n\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"]))),Y=((0,b.ZP)("span")(_||(_=(0,Z.Z)(["\n  display: block;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),(0,b.ZP)("div")(A||(A=(0,Z.Z)(["\n  text-align: end;\n  position: relative;\n\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"])))),B=(0,a.Z)()((n=>{let{title:e,content:t,id:a,t:d}=n;const{values:l,errors:o,handleChange:c,handleSubmit:p}=m(h);return(0,w.jsx)(D,{id:a,children:(0,w.jsxs)(i.Z,{justify:"space-between",align:"middle",children:[(0,w.jsx)(r.Z,{lg:12,md:11,sm:24,xs:24,children:(0,w.jsx)(s.Mi,{direction:"left",children:(0,w.jsx)(y,{title:e,content:t})})}),(0,w.jsx)(r.Z,{lg:12,md:12,sm:24,xs:24,children:(0,w.jsx)(s.Mi,{direction:"right",children:(0,w.jsxs)(F,{autoComplete:"off",onSubmit:p,children:[(0,w.jsx)(r.Z,{span:24,children:(0,w.jsx)(N,{type:"text",name:"name",placeholder:"Name",value:l.name||"",onChange:c})}),(0,w.jsx)(r.Z,{span:24,children:(0,w.jsx)(N,{type:"text",name:"email",placeholder:"Email",value:l.email||"",onChange:c})}),(0,w.jsx)(Y,{children:(0,w.jsx)(g.z,{name:"submit",children:"Style me up!"})})]})})})]})})}))}}]);
//# sourceMappingURL=873.4345c5ad.chunk.js.map