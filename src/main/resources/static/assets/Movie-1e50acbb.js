import{u as g,b as C,_ as f,d as D,o as i,c as t,a as e,F as m,e as d,f as v,w as u,p as L,g as I,t as n}from"./index-658604d9.js";const M={data(){return{movieDTOList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""}],router:g()}},mounted(){this.selectMovieList()},methods:{selectMovieList(){C.get("/mainMovie").then(o=>{this.movieDTOList=o.data}).catch(o=>{console.log(o)})},getImageUrl(o){const h=window.location.href;return new URL(`../movieimg/${o}.jpg`,h).href}}};const r=o=>(L("data-v-47f5f098"),o=o(),I(),o),k={class:"section-div"},w={class:"section-content"},x={class:"movie-container"},y=r(()=>e("div",{class:"movie-title"},[e("p",null,"박스오피스 순위")],-1)),B={class:"movie-content"},U={class:"movie-child1"},O={class:"movie-child2"},T={class:"movie-child3"},A={class:"movie-child4"},S=["src"],R={class:"movie-name"},F={class:"movie-container"},N=r(()=>e("div",{class:"movie-title"},[e("p",null,"왓챠 영화 순위")],-1)),V={class:"movie-content"},$={class:"movie-child1"},b={class:"movie-child2"},j={class:"movie-child3"},E={class:"movie-child4"},q=["src"],z={class:"movie-name"},G={class:"movie-container"},H=r(()=>e("div",{class:"movie-title"},[e("p",null,"넷플릭스 영화 순위")],-1)),J={class:"movie-content"},K={class:"movie-child1"},P={class:"movie-child2"},Q={class:"movie-child3"},W={class:"movie-child4"},X=["src"],Y={class:"movie-name"};function Z(o,h,p,ee,l,_){const a=D("router-link");return i(),t("section",null,[e("div",k,[e("section",w,[e("div",x,[y,e("div",B,[e("div",U,[e("div",O,[e("div",T,[e("div",A,[e("ul",null,[(i(!0),t(m,null,d(l.movieDTOList,(s,c)=>(i(),t("li",{key:c},[v(a,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("img",{src:_.getImageUrl(`../movieimg/${s.image_oname}`)},null,8,S),e("div",R,n(s.movie_name),1),e("div",null,n(s.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",F,[N,e("div",V,[e("div",$,[e("div",b,[e("div",j,[e("div",E,[e("ul",null,[(i(!0),t(m,null,d(l.movieDTOList,(s,c)=>(i(),t("li",{key:c},[v(a,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("img",{src:_.getImageUrl(`../movieimg/${s.image_oname}`)},null,8,q),e("div",z,n(s.movie_name),1),e("div",null,n(s.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",G,[H,e("div",J,[e("div",K,[e("div",P,[e("div",Q,[e("div",W,[e("ul",null,[(i(!0),t(m,null,d(l.movieDTOList,(s,c)=>(i(),t("li",{key:c},[v(a,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("img",{src:_.getImageUrl(`${s.image_oname}`)},null,8,X),e("div",Y,n(s.movie_name),1),e("div",null,n(s.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])])])])])}const oe=f(M,[["render",Z],["__scopeId","data-v-47f5f098"]]);export{oe as default};