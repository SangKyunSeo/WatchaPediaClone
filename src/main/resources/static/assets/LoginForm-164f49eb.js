import{u,b as i,_ as l,o as d,c as p,a as o,w as a,v as m}from"./index-1d9a578c.js";const _={data(){return{username:"",password:"",router:u(),userInfo:{member_num:"",member_email:"",member_name:"",member_password:"",role_name:"",token:{grantType:"",accessToken:"",refreshToken:""}}}},methods:{register(){this.router.push({path:"/registerForm"})},login(){i.post("/login",null,{params:{username:this.username,password:this.password}}).then(e=>{e.data==="loginError"?alert("로그인 실패!"):(this.userInfo={member_num:e.data.member_num,member_email:e.data.member_email,member_name:e.data.member_name,member_password:e.data.member_password,role_name:e.data.role_name,token:e.data.token},this.$store.commit("settingInfo",this.userInfo),this.$store.commit("successLogin"),this.router.push({path:"/main"}))}).catch(e=>{console.log("username : "+this.username+", password : "+this.password),console.log(e)})}}},b=o("h1",null,"로그인 화면",-1),h={method:"post"};function c(e,s,g,C,t,n){return d(),p("main",null,[b,o("form",h,[a(o("input",{type:"text",name:"username",id:"username",placeholder:"이메일 입력","onUpdate:modelValue":s[0]||(s[0]=r=>t.username=r)},null,512),[[m,t.username]]),a(o("input",{type:"password",name:"password",id:"password",placeholder:"비밀번호 입력","onUpdate:modelValue":s[1]||(s[1]=r=>t.password=r)},null,512),[[m,t.password]]),o("button",{type:"button",id:"login_btn",class:"login-btn",onClick:s[2]||(s[2]=r=>n.login())},"로그인"),o("button",{type:"button",id:"register_btn",class:"register-btn",onClick:s[3]||(s[3]=r=>n.register())},"회원가입")])])}const f=l(_,[["render",c]]);export{f as default};
