import{u as g,b as C,_ as D,d as f,o,c as i,a as t,F as d,e as v,f as u,w as m,p as T,g as A,t as n}from"./index-bdb1c6b0.js";const B={data(){return{tvDTOList:[{tv_num:0,tv_name:"",tv_open:"",tv_content:"",tv_grade:0,tv_ott:0,image_url:"",image_oname:""}],router:g()}},mounted(){this.selectTvList()},methods:{selectTvList(){C.get("/tvList").then(s=>{this.tvDTOList=s.data}).catch(s=>{console.log(s)})},getImageUrl(s){const h=window.location.href;return new URL(`./tvimg/${s}.jpg`,h).href}}};const r=s=>(T("data-v-bf4db78e"),s=s(),A(),s),L={class:"section-div"},I={class:"section-content"},b={class:"movie-container"},k=r(()=>t("div",{class:"movie-title"},[t("p",null,"한국 TV프로그램 인기 순위")],-1)),w={class:"movie-content"},x={class:"movie-child1"},y={class:"movie-child2"},U={class:"movie-child3"},F={class:"movie-child4"},O=["src"],V={class:"movie-name"},S={class:"movie-container"},E=r(()=>t("div",{class:"movie-title"},[t("p",null,"왓챠 TV프로그램 인기 순위")],-1)),R={class:"movie-content"},N={class:"movie-child1"},$={class:"movie-child2"},j={class:"movie-child3"},q={class:"movie-child4"},z=["src"],G={class:"movie-name"},H={class:"movie-container"},J=r(()=>t("div",{class:"movie-title"},[t("p",null,"넷플릭스 TV프로그램 순위")],-1)),K={class:"movie-content"},M={class:"movie-child1"},P={class:"movie-child2"},Q={class:"movie-child3"},W={class:"movie-child4"},X=["src"],Y={class:"movie-name"};function Z(s,h,p,tt,l,_){const a=f("router-link");return o(),i("section",null,[t("div",L,[t("section",I,[t("div",b,[k,t("div",w,[t("div",x,[t("div",y,[t("div",U,[t("div",F,[t("ul",null,[(o(!0),i(d,null,v(l.tvDTOList,(e,c)=>(o(),i("li",{key:c},[u(a,{to:{name:"TvDetail",params:{tv_num:e.tv_num}},class:"movie-items"},{default:m(()=>[t("img",{src:_.getImageUrl(`../tvimg/${e.image_oname}`)},null,8,O),t("div",V,n(e.tv_name),1),t("div",null,n(e.tv_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),t("div",S,[E,t("div",R,[t("div",N,[t("div",$,[t("div",j,[t("div",q,[t("ul",null,[(o(!0),i(d,null,v(l.tvDTOList,(e,c)=>(o(),i("li",{key:c},[u(a,{to:{name:"TvDetail",params:{tv_num:e.tv_num}},class:"movie-items"},{default:m(()=>[t("img",{src:_.getImageUrl(`../tvimg/${e.image_oname}`)},null,8,z),t("div",G,n(e.tv_name),1),t("div",null,n(e.tv_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),t("div",H,[J,t("div",K,[t("div",M,[t("div",P,[t("div",Q,[t("div",W,[t("ul",null,[(o(!0),i(d,null,v(l.tvDTOList,(e,c)=>(o(),i("li",{key:c},[u(a,{to:{name:"TvDetail",params:{tv_num:e.tv_num}},class:"movie-items"},{default:m(()=>[t("img",{src:_.getImageUrl(`../tvimg/${e.image_oname}`)},null,8,X),t("div",Y,n(e.tv_name),1),t("div",null,n(e.tv_open),1)]),_:2},1032,["to"])]))),128))])])])])])])])])])])}const st=D(B,[["render",Z],["__scopeId","data-v-bf4db78e"]]);export{st as default};
