import{u as g,b as C,_ as D,d as f,o as i,c as t,a as e,F as d,e as m,f as v,w as u,p as L,g as I,t as n}from"./index-51f2fbd6.js";const M={data(){return{movieDTOList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""}],router:g()}},mounted(){this.selectMovieList()},methods:{selectMovieList(){C.get("/mainMovie").then(o=>{this.movieDTOList=o.data}).catch(o=>{console.log(o)})},getImageUrl(o){const h=window.location.href;return new URL(`../movieimg/${o}.jpg`,h).href}}};const r=o=>(L("data-v-55712db8"),o=o(),I(),o),k={class:"section-div"},w={class:"section-content"},x={class:"movie-container"},y=r(()=>e("div",{class:"movie-title"},[e("p",null,"박스오피스 순위")],-1)),B={class:"movie-content"},U={class:"movie-child1"},O={class:"movie-child2"},T={class:"movie-child3"},b={class:"movie-child4"},A=["src"],S={class:"movie-name"},R={class:"movie-container"},F=r(()=>e("div",{class:"movie-title"},[e("p",null,"왓챠 영화 순위")],-1)),N={class:"movie-content"},V={class:"movie-child1"},$={class:"movie-child2"},j={class:"movie-child3"},E={class:"movie-child4"},q=["src"],z={class:"movie-name"},G={class:"movie-container"},H=r(()=>e("div",{class:"movie-title"},[e("p",null,"넷플릭스 영화 순위")],-1)),J={class:"movie-content"},K={class:"movie-child1"},P={class:"movie-child2"},Q={class:"movie-child3"},W={class:"movie-child4"},X=["src"],Y={class:"movie-name"};function Z(o,h,p,ee,l,_){const a=f("router-link");return i(),t("section",null,[e("div",k,[e("section",w,[e("div",x,[y,e("div",B,[e("div",U,[e("div",O,[e("div",T,[e("div",b,[e("ul",null,[(i(!0),t(d,null,m(l.movieDTOList,(s,c)=>(i(),t("li",{key:c},[v(a,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("img",{src:_.getImageUrl(`${s.image_oname}`)},null,8,A),e("div",S,n(s.movie_name),1),e("div",null,n(s.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",R,[F,e("div",N,[e("div",V,[e("div",$,[e("div",j,[e("div",E,[e("ul",null,[(i(!0),t(d,null,m(l.movieDTOList,(s,c)=>(i(),t("li",{key:c},[v(a,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("img",{src:_.getImageUrl(`${s.image_oname}`)},null,8,q),e("div",z,n(s.movie_name),1),e("div",null,n(s.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",G,[H,e("div",J,[e("div",K,[e("div",P,[e("div",Q,[e("div",W,[e("ul",null,[(i(!0),t(d,null,m(l.movieDTOList,(s,c)=>(i(),t("li",{key:c},[v(a,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("img",{src:_.getImageUrl(`${s.image_oname}`)},null,8,X),e("div",Y,n(s.movie_name),1),e("div",null,n(s.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])])])])])}const oe=D(M,[["render",Z],["__scopeId","data-v-55712db8"]]);export{oe as default};
