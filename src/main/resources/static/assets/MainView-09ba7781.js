import{u as g,b as C,_ as f,d as D,o,c as t,a as e,F as d,e as m,f as v,w as u,p as L,g as w,t as n}from"./index-658604d9.js";const I={data(){return{movieDTOList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""}],router:g()}},mounted(){this.selectMovieList()},methods:{selectMovieList(){C.get("/mainMovie").then(i=>{this.movieDTOList=i.data}).catch(i=>{console.log(i)})},getImageUrl(i){const h=window.location.href;return new URL(`../movieimg/${i}.jpg`,h).href}}};const r=i=>(L("data-v-43a2f946"),i=i(),w(),i),M={class:"section-div"},k={class:"section-content"},x={class:"movie-container"},y=r(()=>e("div",{class:"movie-title"},[e("p",null,"박스오피스 순위")],-1)),B={class:"movie-content"},U={class:"movie-child1"},O={class:"movie-child2"},T={class:"movie-child3"},A={class:"movie-child4"},S=["src"],V={class:"movie-name"},R={class:"movie-container"},F=r(()=>e("div",{class:"movie-title"},[e("p",null,"왓챠 영화 순위")],-1)),N={class:"movie-content"},$={class:"movie-child1"},b={class:"movie-child2"},j={class:"movie-child3"},E={class:"movie-child4"},q=["src"],z={class:"movie-name"},G={class:"movie-container"},H=r(()=>e("div",{class:"movie-title"},[e("p",null,"넷플릭스 영화 순위")],-1)),J={class:"movie-content"},K={class:"movie-child1"},P={class:"movie-child2"},Q={class:"movie-child3"},W={class:"movie-child4"},X=["src"],Y={class:"movie-name"};function Z(i,h,p,ee,a,l){const _=D("router-link");return o(),t("section",null,[e("div",M,[e("section",k,[e("div",x,[y,e("div",B,[e("div",U,[e("div",O,[e("div",T,[e("div",A,[e("ul",null,[(o(!0),t(d,null,m(a.movieDTOList,(s,c)=>(o(),t("li",{key:c},[v(_,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("img",{src:l.getImageUrl(`${s.image_oname}`)},null,8,S),e("div",V,n(s.movie_name),1),e("div",null,n(s.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",R,[F,e("div",N,[e("div",$,[e("div",b,[e("div",j,[e("div",E,[e("ul",null,[(o(!0),t(d,null,m(a.movieDTOList,(s,c)=>(o(),t("li",{key:c},[v(_,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("img",{src:l.getImageUrl(`${s.image_oname}`)},null,8,q),e("div",z,n(s.movie_name),1),e("div",null,n(s.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",G,[H,e("div",J,[e("div",K,[e("div",P,[e("div",Q,[e("div",W,[e("ul",null,[(o(!0),t(d,null,m(a.movieDTOList,(s,c)=>(o(),t("li",{key:c},[v(_,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("img",{src:l.getImageUrl(`${s.image_oname}`)},null,8,X),e("div",Y,n(s.movie_name),1),e("div",null,n(s.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])])])])])}const ie=f(I,[["render",Z],["__scopeId","data-v-43a2f946"]]);export{ie as default};
