import{u as l,_ as i,o as p,c as d,a as e,w as n,v as a}from"./index-07ffe8f4.js";import{a as m}from"./axios-21b846bc.js";const C={data(){return{username:"",password:"",router:l(),isSuccess:{}}},methods:{register(){this.router.push({path:"/registerForm"})},login(){m.post("http://localhost:8020/login",null,{params:{username:this.username,password:this.password}}).then(r=>{this.router.push({path:"/main"})}).catch(r=>{console.log("username : "+this.username+", password : "+this.password),console.log(r)})}}},h=e("h1",null,"로그인 화면",-1),c={method:"post"};function g(r,s,w,B,o,u){return p(),d("main",null,[h,e("form",c,[n(e("input",{type:"text",name:"username",id:"username",placeholder:"이메일 입력","onUpdate:modelValue":s[0]||(s[0]=t=>o.username=t)},null,512),[[a,o.username]]),n(e("input",{type:"password",name:"password",id:"password",placeholder:"비밀번호 입력","onUpdate:modelValue":s[1]||(s[1]=t=>o.password=t)},null,512),[[a,o.password]]),e("button",{type:"button",id:"login_btn",class:"login-btn",onClick:s[2]||(s[2]=t=>u.login())},"로그인"),e("button",{type:"button",id:"register_btn",class:"register-btn",onClick:s[3]||(s[3]=t=>u.register())},"회원가입")])])}const D=i(C,[["render",g]]);export{D as default};