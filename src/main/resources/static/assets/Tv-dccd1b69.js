import{u as h,b as r,_ as p,d as C,o,c as i,a as s,F as d,e as a,f as v,w as u,p as D,g as f,t as n}from"./index-b5d01312.js";const A={data(){return{tvVOList:[{tv_num:0,tv_name:"",tv_open:"",tv_content:"",tv_grade:0,tv_ott:0}],router:h()}},mounted(){this.selectTvList()},methods:{selectTvList(){r.get("/tvList").then(e=>{this.tvVOList=e.data}).catch(e=>{console.log(e)})}}};const m=e=>(D("data-v-8eebf403"),e=e(),f(),e),B={class:"section-div"},T={class:"section-content"},V={class:"movie-container"},L=m(()=>s("div",{class:"movie-title"},[s("p",null,"한국 TV프로그램 인기 순위")],-1)),g={class:"movie-content"},k={class:"movie-child1"},x={class:"movie-child2"},y={class:"movie-child3"},F={class:"movie-child4"},O={class:"movie-name"},b={class:"movie-container"},I=m(()=>s("div",{class:"movie-title"},[s("p",null,"왓챠 TV프로그램 인기 순위")],-1)),S={class:"movie-content"},w={class:"movie-child1"},E={class:"movie-child2"},N={class:"movie-child3"},R={class:"movie-child4"},$={class:"movie-name"},j={class:"movie-container"},q=m(()=>s("div",{class:"movie-title"},[s("p",null,"넷플릭스 TV프로그램 순위")],-1)),z={class:"movie-content"},G={class:"movie-child1"},H={class:"movie-child2"},J={class:"movie-child3"},K={class:"movie-child4"},M={class:"movie-name"};function P(e,Q,U,W,_,X){const l=C("router-link");return o(),i("section",null,[s("div",B,[s("section",T,[s("div",V,[L,s("div",g,[s("div",k,[s("div",x,[s("div",y,[s("div",F,[s("ul",null,[(o(!0),i(d,null,a(_.tvVOList,(t,c)=>(o(),i("li",{key:c},[v(l,{to:{name:"TvDetail",params:{tv_num:t.tv_num}},class:"movie-items"},{default:u(()=>[s("div",O,n(t.tv_name),1),s("div",null,n(t.tv_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),s("div",b,[I,s("div",S,[s("div",w,[s("div",E,[s("div",N,[s("div",R,[s("ul",null,[(o(!0),i(d,null,a(_.tvVOList,(t,c)=>(o(),i("li",{key:c},[v(l,{to:{name:"TvDetail",params:{tv_num:t.tv_num}},class:"movie-items"},{default:u(()=>[s("div",$,n(t.tv_name),1),s("div",null,n(t.tv_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),s("div",j,[q,s("div",z,[s("div",G,[s("div",H,[s("div",J,[s("div",K,[s("ul",null,[(o(!0),i(d,null,a(_.tvVOList,(t,c)=>(o(),i("li",{key:c},[v(l,{to:{name:"TvDetail",params:{tv_num:t.tv_num}},class:"movie-items"},{default:u(()=>[s("div",M,n(t.tv_name),1),s("div",null,n(t.tv_open),1)]),_:2},1032,["to"])]))),128))])])])])])])])])])])}const Z=p(A,[["render",P],["__scopeId","data-v-8eebf403"]]);export{Z as default};
