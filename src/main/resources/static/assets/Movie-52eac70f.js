import{u as h,b as r,_ as p,d as C,o as i,c as t,a as e,F as d,e as a,f as v,w as m,p as f,g as D,t as n}from"./index-c343141c.js";const L={data(){return{movieVOList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0}],router:h()}},mounted(){this.selectMovieList()},methods:{selectMovieList(){r.get("/mainMovie").then(o=>{this.movieVOList=o.data}).catch(o=>{console.log(o)})}}};const u=o=>(f("data-v-6d84b312"),o=o(),D(),o),M={class:"section-div"},g={class:"section-content"},k={class:"movie-container"},V=u(()=>e("div",{class:"movie-title"},[e("p",null,"박스오피스 순위")],-1)),x={class:"movie-content"},y={class:"movie-child1"},B={class:"movie-child2"},O={class:"movie-child3"},b={class:"movie-child4"},A={class:"movie-name"},I={class:"movie-container"},S=u(()=>e("div",{class:"movie-title"},[e("p",null,"왓챠 영화 순위")],-1)),w={class:"movie-content"},F={class:"movie-child1"},N={class:"movie-child2"},E={class:"movie-child3"},R={class:"movie-child4"},$={class:"movie-name"},j={class:"movie-container"},q=u(()=>e("div",{class:"movie-title"},[e("p",null,"넷플릭스 영화 순위")],-1)),z={class:"movie-content"},G={class:"movie-child1"},H={class:"movie-child2"},J={class:"movie-child3"},K={class:"movie-child4"},P={class:"movie-name"};function Q(o,T,U,W,l,X){const _=C("router-link");return i(),t("section",null,[e("div",M,[e("section",g,[e("div",k,[V,e("div",x,[e("div",y,[e("div",B,[e("div",O,[e("div",b,[e("ul",null,[(i(!0),t(d,null,a(l.movieVOList,(s,c)=>(i(),t("li",{key:c},[v(_,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:m(()=>[e("div",A,n(s.movie_name),1),e("div",null,n(s.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",I,[S,e("div",w,[e("div",F,[e("div",N,[e("div",E,[e("div",R,[e("ul",null,[(i(!0),t(d,null,a(l.movieVOList,(s,c)=>(i(),t("li",{key:c},[v(_,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:m(()=>[e("div",$,n(s.movie_name),1),e("div",null,n(s.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",j,[q,e("div",z,[e("div",G,[e("div",H,[e("div",J,[e("div",K,[e("ul",null,[(i(!0),t(d,null,a(l.movieVOList,(s,c)=>(i(),t("li",{key:c},[v(_,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:m(()=>[e("div",P,n(s.movie_name),1),e("div",null,n(s.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])])])])])}const Z=p(L,[["render",Q],["__scopeId","data-v-6d84b312"]]);export{Z as default};
