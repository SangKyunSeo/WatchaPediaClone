import{u as C,b as g,_ as D,d as f,o as t,c as n,a as e,F as _,e as d,f as m,w as u,p as B,g as L,t as o}from"./index-8eddf75c.js";const w={data(){return{movieDTOList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""}],router:C()}},mounted(){this.selectMovieList()},methods:{selectMovieList(){g.get("/mainMovie").then(i=>{this.movieDTOList=i.data}).catch(i=>{console.log(i)})},getImageUrl(i){const r=window.location.href;return new URL(`@/movie/${i}.png`,r).href}}};const v=i=>(B("data-v-953bb891"),i=i(),L(),i),M={class:"section-div"},b={class:"section-content"},k={class:"movie-container"},x=v(()=>e("div",{class:"movie-title"},[e("p",null,"박스오피스 순위")],-1)),y={class:"movie-content"},I={class:"movie-child1"},O={class:"movie-child2"},T={class:"movie-child3"},A={class:"movie-child4"},F={class:"movie-name"},S={class:"movie-container"},U=v(()=>e("div",{class:"movie-title"},[e("p",null,"왓챠 영화 순위")],-1)),V={class:"movie-content"},R={class:"movie-child1"},N={class:"movie-child2"},E={class:"movie-child3"},$={class:"movie-child4"},j={class:"movie-name"},q={class:"movie-container"},z=v(()=>e("div",{class:"movie-title"},[e("p",null,"넷플릭스 영화 순위")],-1)),G={class:"movie-content"},H={class:"movie-child1"},J={class:"movie-child2"},K={class:"movie-child3"},P={class:"movie-child4"},Q={class:"movie-name"},W=["src"];function X(i,r,h,Y,l,p){const a=f("router-link");return t(),n("section",null,[e("div",M,[e("section",b,[e("div",k,[x,e("div",y,[e("div",I,[e("div",O,[e("div",T,[e("div",A,[e("ul",null,[(t(!0),n(_,null,d(l.movieDTOList,(s,c)=>(t(),n("li",{key:c},[m(a,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("div",F,o(s.movie_name),1),e("div",null,o(s.movie_open),1),e("div",null,"이미지 : "+o(s.image_url)+", "+o(s.image_oname),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",S,[U,e("div",V,[e("div",R,[e("div",N,[e("div",E,[e("div",$,[e("ul",null,[(t(!0),n(_,null,d(l.movieDTOList,(s,c)=>(t(),n("li",{key:c},[m(a,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("div",j,o(s.movie_name),1),e("div",null,o(s.movie_open),1),e("div",null,"이미지 : "+o(s.image_url)+", "+o(s.image_oname),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",q,[z,e("div",G,[e("div",H,[e("div",J,[e("div",K,[e("div",P,[e("ul",null,[(t(!0),n(_,null,d(l.movieDTOList,(s,c)=>(t(),n("li",{key:c},[m(a,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("div",Q,o(s.movie_name),1),e("div",null,o(s.movie_open),1),e("img",{src:p.getImageUrl(s.image_oname)},null,8,W)]),_:2},1032,["to"])]))),128))])])])])])])])])])])}const ee=D(w,[["render",X],["__scopeId","data-v-953bb891"]]);export{ee as default};
