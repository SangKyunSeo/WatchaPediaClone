import{u as n,b as a,_ as p,o as i,c as _,a as r,h as s,v as u}from"./index-c343141c.js";const b={data(){return{member_name:"",member_email:"",member_pw:"",router:n(),isSuccess:{}}},methods:{register(){a.post("http://localhost:8020/register",null,{params:{member_email:this.member_email,member_name:this.member_name,member_pw:this.member_pw}}).then(o=>{o.data==="success"?(alert("회원가입 성공!"),this.router.push({path:"/main"})):alert("회원가입 실패!")}).catch(o=>{console.log("<<Error>> : "+o)})}}},d=r("h1",null,"회원가입 화면",-1),c={method:"post"};function h(o,e,C,B,m,l){return i(),_("main",null,[d,r("form",c,[s(r("input",{type:"text",name:"member_name",placeholder:"이름","onUpdate:modelValue":e[0]||(e[0]=t=>m.member_name=t)},null,512),[[u,m.member_name]]),s(r("input",{type:"text",name:"member_email",placeholder:"이메일","onUpdate:modelValue":e[1]||(e[1]=t=>m.member_email=t)},null,512),[[u,m.member_email]]),s(r("input",{type:"text",name:"member_pw",placeholder:"비밀번호","onUpdate:modelValue":e[2]||(e[2]=t=>m.member_pw=t)},null,512),[[u,m.member_pw]]),r("button",{type:"button",onClick:e[3]||(e[3]=t=>l.register())},"가입")])])}const x=p(b,[["render",h]]);export{x as default};
