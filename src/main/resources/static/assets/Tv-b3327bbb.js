import{u as g,b as C,_ as D,d as f,o,c as i,a as t,F as d,e as v,f as u,w as m,p as T,g as A,t as c}from"./index-d045d172.js";const B={data(){return{tvDTOList:[{tv_num:0,tv_name:"",tv_open:"",tv_content:"",tv_grade:0,tv_ott:0,image_url:"",image_oname:""}],router:g()}},mounted(){this.selectTvList()},methods:{selectTvList(){C.get("/tvList").then(s=>{this.tvDTOList=s.data}).catch(s=>{console.log(s)})},getImageUrl(s){const h=window.location.href;return new URL(`../tvimg/${s}.jpg`,h).href}}};const r=s=>(T("data-v-cf857262"),s=s(),A(),s),L={class:"section-div"},I={class:"section-content"},k={class:"movie-container"},w=r(()=>t("div",{class:"movie-title"},[t("p",null,"한국 TV프로그램 인기 순위")],-1)),x={class:"movie-content"},y={class:"movie-child1"},U={class:"movie-child2"},F={class:"movie-child3"},O={class:"movie-child4"},V=["src"],S={class:"movie-name"},E={class:"movie-container"},R=r(()=>t("div",{class:"movie-title"},[t("p",null,"왓챠 TV프로그램 인기 순위")],-1)),N={class:"movie-content"},$={class:"movie-child1"},b={class:"movie-child2"},j={class:"movie-child3"},q={class:"movie-child4"},z=["src"],G={class:"movie-name"},H={class:"movie-container"},J=r(()=>t("div",{class:"movie-title"},[t("p",null,"넷플릭스 TV프로그램 순위")],-1)),K={class:"movie-content"},M={class:"movie-child1"},P={class:"movie-child2"},Q={class:"movie-child3"},W={class:"movie-child4"},X=["src"],Y={class:"movie-name"};function Z(s,h,p,tt,l,_){const a=f("router-link");return o(),i("section",null,[t("div",L,[t("section",I,[t("div",k,[w,t("div",x,[t("div",y,[t("div",U,[t("div",F,[t("div",O,[t("ul",null,[(o(!0),i(d,null,v(l.tvDTOList,(e,n)=>(o(),i("li",{key:n},[u(a,{to:{name:"TvDetail",params:{tv_num:e.tv_num}},class:"movie-items"},{default:m(()=>[t("img",{src:_.getImageUrl(`${e.image_oname}`)},null,8,V),t("div",S,c(e.tv_name),1),t("div",null,c(e.tv_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),t("div",E,[R,t("div",N,[t("div",$,[t("div",b,[t("div",j,[t("div",q,[t("ul",null,[(o(!0),i(d,null,v(l.tvDTOList,(e,n)=>(o(),i("li",{key:n},[u(a,{to:{name:"TvDetail",params:{tv_num:e.tv_num}},class:"movie-items"},{default:m(()=>[t("img",{src:_.getImageUrl(`${e.image_oname}`)},null,8,z),t("div",G,c(e.tv_name),1),t("div",null,c(e.tv_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),t("div",H,[J,t("div",K,[t("div",M,[t("div",P,[t("div",Q,[t("div",W,[t("ul",null,[(o(!0),i(d,null,v(l.tvDTOList,(e,n)=>(o(),i("li",{key:n},[u(a,{to:{name:"TvDetail",params:{tv_num:e.tv_num}},class:"movie-items"},{default:m(()=>[t("img",{src:_.getImageUrl(`${e.image_oname}`)},null,8,X),t("div",Y,c(e.tv_name),1),t("div",null,c(e.tv_open),1)]),_:2},1032,["to"])]))),128))])])])])])])])])])])}const st=D(B,[["render",Z],["__scopeId","data-v-cf857262"]]);export{st as default};
