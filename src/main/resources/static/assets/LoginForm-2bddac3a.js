import{u as l,e as i,_ as p,o as d,c as m,a as s,w as n,v as a}from"./index-5c388297.js";const C={data(){return{username:"",password:"",router:l(),isSuccess:{}}},methods:{register(){this.router.push({path:"/registerForm"})},login(){i.post("/login",null,{params:{username:this.username,password:this.password}}).then(t=>{t.data==="loginError"?alert("로그인 실패!"):(alert(t.data.token),this.router.push({path:"/main"}))}).catch(t=>{console.log("username : "+this.username+", password : "+this.password),console.log(t)})}}},g=s("h1",null,"로그인 화면",-1),c={method:"post"};function h(t,e,w,B,r,u){return d(),m("main",null,[g,s("form",c,[n(s("input",{type:"text",name:"username",id:"username",placeholder:"이메일 입력","onUpdate:modelValue":e[0]||(e[0]=o=>r.username=o)},null,512),[[a,r.username]]),n(s("input",{type:"password",name:"password",id:"password",placeholder:"비밀번호 입력","onUpdate:modelValue":e[1]||(e[1]=o=>r.password=o)},null,512),[[a,r.password]]),s("button",{type:"button",id:"login_btn",class:"login-btn",onClick:e[2]||(e[2]=o=>u.login())},"로그인"),s("button",{type:"button",id:"register_btn",class:"register-btn",onClick:e[3]||(e[3]=o=>u.register())},"회원가입")])])}const f=p(C,[["render",h]]);export{f as default};
