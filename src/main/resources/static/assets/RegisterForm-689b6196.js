import{d as s,o as r,c as a,a as e,u as l}from"./index-cb2de08c.js";const m=e("h1",null,"회원가입 화면",-1),p={method:"post"},u=e("input",{type:"text",name:"member_name",placeholder:"이름"},null,-1),_=e("input",{type:"text",name:"member_email",placeholder:"이메일"},null,-1),c=e("input",{type:"text",name:"member_pw",placeholder:"비밀번호"},null,-1),b=s({__name:"RegisterForm",setup(i){const o=()=>{l().push({path:"/register"})};return(n,t)=>(r(),a("main",null,[m,e("form",p,[u,_,c,e("button",{type:"button",onClick:t[0]||(t[0]=d=>o())},"회원가입")])]))}});export{b as default};
