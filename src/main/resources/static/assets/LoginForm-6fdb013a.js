import{u as l,_ as i,o as p,c as d,a as s,w as n,v as a}from"./index-04503116.js";import{a as m}from"./axios-21b846bc.js";const C={data(){return{username:"",password:"",router:l(),isSuccess:{}}},methods:{register(){this.router.push({path:"/registerForm"})},login(){m.post("http://localhost:8020/login",null,{params:{username:this.username,password:this.password}}).then(t=>{console.log(t.config)}).catch(t=>{console.log("username : "+this.username+", password : "+this.password),console.log(t)})}}},c=s("h1",null,"로그인 화면",-1),g={method:"post"};function h(t,e,w,B,r,u){return p(),d("main",null,[c,s("form",g,[n(s("input",{type:"text",name:"username",id:"username",placeholder:"이메일 입력","onUpdate:modelValue":e[0]||(e[0]=o=>r.username=o)},null,512),[[a,r.username]]),n(s("input",{type:"password",name:"password",id:"password",placeholder:"비밀번호 입력","onUpdate:modelValue":e[1]||(e[1]=o=>r.password=o)},null,512),[[a,r.password]]),s("button",{type:"button",id:"login_btn",class:"login-btn",onClick:e[2]||(e[2]=o=>u.login())},"로그인"),s("button",{type:"button",id:"register_btn",class:"register-btn",onClick:e[3]||(e[3]=o=>u.register())},"회원가입")])])}const D=i(C,[["render",h]]);export{D as default};
