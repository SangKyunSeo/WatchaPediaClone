import{u as h,b as p,_ as C,d as g,o as t,c as n,a as e,F as _,e as d,f as m,w as u,p as D,g as f,t as o}from"./index-dbc7d0c0.js";const B={data(){return{movieDTOList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""}],router:h()}},mounted(){this.selectMovieList()},methods:{selectMovieList(){p.get("/mainMovie").then(i=>{this.movieDTOList=i.data}).catch(i=>{console.log(i)})},getImageUrl(i){return new URL(Object.assign({})[`./assets/movie/${i}.png`],self.location).href}}};const v=i=>(D("data-v-677dbb58"),i=i(),f(),i),L={class:"section-div"},b={class:"section-content"},M={class:"movie-container"},k=v(()=>e("div",{class:"movie-title"},[e("p",null,"박스오피스 순위")],-1)),w={class:"movie-content"},x={class:"movie-child1"},y={class:"movie-child2"},I={class:"movie-child3"},O={class:"movie-child4"},T={class:"movie-name"},A={class:"movie-container"},F=v(()=>e("div",{class:"movie-title"},[e("p",null,"왓챠 영화 순위")],-1)),S={class:"movie-content"},V={class:"movie-child1"},U={class:"movie-child2"},N={class:"movie-child3"},R={class:"movie-child4"},j={class:"movie-name"},E={class:"movie-container"},$=v(()=>e("div",{class:"movie-title"},[e("p",null,"넷플릭스 영화 순위")],-1)),q={class:"movie-content"},z={class:"movie-child1"},G={class:"movie-child2"},H={class:"movie-child3"},J={class:"movie-child4"},K={class:"movie-name"},P=["src"];function Q(i,W,X,Y,l,r){const a=g("router-link");return t(),n("section",null,[e("div",L,[e("section",b,[e("div",M,[k,e("div",w,[e("div",x,[e("div",y,[e("div",I,[e("div",O,[e("ul",null,[(t(!0),n(_,null,d(l.movieDTOList,(s,c)=>(t(),n("li",{key:c},[m(a,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("div",T,o(s.movie_name),1),e("div",null,o(s.movie_open),1),e("div",null,"이미지 : "+o(s.image_url)+", "+o(s.image_oname),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",A,[F,e("div",S,[e("div",V,[e("div",U,[e("div",N,[e("div",R,[e("ul",null,[(t(!0),n(_,null,d(l.movieDTOList,(s,c)=>(t(),n("li",{key:c},[m(a,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("div",j,o(s.movie_name),1),e("div",null,o(s.movie_open),1),e("div",null,"이미지 : "+o(s.image_url)+", "+o(s.image_oname),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",E,[$,e("div",q,[e("div",z,[e("div",G,[e("div",H,[e("div",J,[e("ul",null,[(t(!0),n(_,null,d(l.movieDTOList,(s,c)=>(t(),n("li",{key:c},[m(a,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("div",K,o(s.movie_name),1),e("div",null,o(s.movie_open),1),e("img",{src:r.getImageUrl(s.image_oname)},null,8,P)]),_:2},1032,["to"])]))),128))])])])])])])])])])])}const ee=C(B,[["render",Q],["__scopeId","data-v-677dbb58"]]);export{ee as default};
