import{u,e as i,_ as l,o as d,c as p,a as r,w as a,v as m}from"./index-47435548.js";const _={data(){return{username:"",password:"",router:u(),userInfo:{member_num:"",member_email:"",member_name:"",member_password:"",role_name:"",token:{grantType:"",accessToken:"",refreshToken:""}}}},methods:{register(){this.router.push({path:"/registerForm"})},login(){i.post("/login",null,{params:{username:this.username,password:this.password}}).then(e=>{e.data==="loginError"?alert("로그인 실패!"):(this.userInfo={member_num:e.data.member_num,member_email:e.data.member_email,member_name:e.data.member_name,member_password:e.data.member_password,role_name:e.data.role_name,token:e.data.token},this.$store.commit("settingInfo",this.userInfo),alert(this.$store.getters.getUserInfo.member_name),this.router.push({path:"/main"}))}).catch(e=>{console.log("username : "+this.username+", password : "+this.password),console.log(e)})}}},b=r("h1",null,"로그인 화면",-1),g={method:"post"};function h(e,s,C,w,o,n){return d(),p("main",null,[b,r("form",g,[a(r("input",{type:"text",name:"username",id:"username",placeholder:"이메일 입력","onUpdate:modelValue":s[0]||(s[0]=t=>o.username=t)},null,512),[[m,o.username]]),a(r("input",{type:"password",name:"password",id:"password",placeholder:"비밀번호 입력","onUpdate:modelValue":s[1]||(s[1]=t=>o.password=t)},null,512),[[m,o.password]]),r("button",{type:"button",id:"login_btn",class:"login-btn",onClick:s[2]||(s[2]=t=>n.login())},"로그인"),r("button",{type:"button",id:"register_btn",class:"register-btn",onClick:s[3]||(s[3]=t=>n.register())},"회원가입")])])}const f=l(_,[["render",h]]);export{f as default};
