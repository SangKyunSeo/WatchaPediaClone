import{u as r,b as h,_ as C,d as p,o as t,c as n,a as e,F as _,e as d,f as u,w as m,p as g,g as D,t as i}from"./index-9c261e79.js";const B={data(){return{movieDTOList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""}],router:r()}},mounted(){this.selectMovieList()},methods:{selectMovieList(){h.get("/mainMovie").then(o=>{this.movieDTOList=o.data}).catch(o=>{console.log(o)})}}};const v=o=>(g("data-v-156a53ba"),o=o(),D(),o),f={class:"section-div"},L={class:"section-content"},M={class:"movie-container"},k=v(()=>e("div",{class:"movie-title"},[e("p",null,"박스오피스 순위")],-1)),x={class:"movie-content"},y={class:"movie-child1"},F={class:"movie-child2"},O={class:"movie-child3"},T={class:"movie-child4"},b={class:"movie-name"},A={class:"movie-container"},I=v(()=>e("div",{class:"movie-title"},[e("p",null,"왓챠 영화 순위")],-1)),S={class:"movie-content"},w={class:"movie-child1"},N={class:"movie-child2"},V={class:"movie-child3"},E={class:"movie-child4"},R={class:"movie-name"},$={class:"movie-container"},j=v(()=>e("div",{class:"movie-title"},[e("p",null,"넷플릭스 영화 순위")],-1)),q={class:"movie-content"},z={class:"movie-child1"},G={class:"movie-child2"},H={class:"movie-child3"},J={class:"movie-child4"},K={class:"movie-name"};function P(o,Q,U,W,a,X){const l=p("router-link");return t(),n("section",null,[e("div",f,[e("section",L,[e("div",M,[k,e("div",x,[e("div",y,[e("div",F,[e("div",O,[e("div",T,[e("ul",null,[(t(!0),n(_,null,d(a.movieDTOList,(s,c)=>(t(),n("li",{key:c},[u(l,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:m(()=>[e("div",b,i(s.movie_name),1),e("div",null,i(s.movie_open),1),e("div",null,"이미지 : "+i(s.image_url)+", "+i(s.image_oname),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",A,[I,e("div",S,[e("div",w,[e("div",N,[e("div",V,[e("div",E,[e("ul",null,[(t(!0),n(_,null,d(a.movieDTOList,(s,c)=>(t(),n("li",{key:c},[u(l,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:m(()=>[e("div",R,i(s.movie_name),1),e("div",null,i(s.movie_open),1),e("div",null,"이미지 : "+i(s.image_url)+", "+i(s.image_oname),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",$,[j,e("div",q,[e("div",z,[e("div",G,[e("div",H,[e("div",J,[e("ul",null,[(t(!0),n(_,null,d(a.movieDTOList,(s,c)=>(t(),n("li",{key:c},[u(l,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:m(()=>[e("div",K,i(s.movie_name),1),e("div",null,i(s.movie_open),1),e("div",null,"이미지 : "+i(s.image_url)+", "+i(s.image_oname),1)]),_:2},1032,["to"])]))),128))])])])])])])])])])])}const Z=C(B,[["render",P],["__scopeId","data-v-156a53ba"]]);export{Z as default};
