import{u as h,b as p,_ as C,d as g,o as t,c as n,a as e,F as _,e as d,f as m,w as u,p as f,g as D,t as i}from"./index-ada7e0be.js";const B={data(){return{movieDTOList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""}],router:h()}},mounted(){this.selectMovieList()},methods:{selectMovieList(){p.get("/mainMovie").then(o=>{this.movieDTOList=o.data}).catch(o=>{console.log(o)})},getImageUrl(o){return new URL("./movie/{name}.png",self.location).href}}};const v=o=>(f("data-v-4f195fae"),o=o(),D(),o),L={class:"section-div"},M={class:"section-content"},k={class:"movie-container"},w=v(()=>e("div",{class:"movie-title"},[e("p",null,"박스오피스 순위")],-1)),x={class:"movie-content"},y={class:"movie-child1"},I={class:"movie-child2"},O={class:"movie-child3"},T={class:"movie-child4"},A={class:"movie-name"},F={class:"movie-container"},S=v(()=>e("div",{class:"movie-title"},[e("p",null,"왓챠 영화 순위")],-1)),V={class:"movie-content"},U={class:"movie-child1"},N={class:"movie-child2"},R={class:"movie-child3"},b={class:"movie-child4"},E={class:"movie-name"},j={class:"movie-container"},q=v(()=>e("div",{class:"movie-title"},[e("p",null,"넷플릭스 영화 순위")],-1)),z={class:"movie-content"},G={class:"movie-child1"},H={class:"movie-child2"},J={class:"movie-child3"},K={class:"movie-child4"},P={class:"movie-name"},Q=["src"];function W(o,X,Y,Z,a,r){const l=g("router-link");return t(),n("section",null,[e("div",L,[e("section",M,[e("div",k,[w,e("div",x,[e("div",y,[e("div",I,[e("div",O,[e("div",T,[e("ul",null,[(t(!0),n(_,null,d(a.movieDTOList,(s,c)=>(t(),n("li",{key:c},[m(l,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("div",A,i(s.movie_name),1),e("div",null,i(s.movie_open),1),e("div",null,"이미지 : "+i(s.image_url)+", "+i(s.image_oname),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",F,[S,e("div",V,[e("div",U,[e("div",N,[e("div",R,[e("div",b,[e("ul",null,[(t(!0),n(_,null,d(a.movieDTOList,(s,c)=>(t(),n("li",{key:c},[m(l,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("div",E,i(s.movie_name),1),e("div",null,i(s.movie_open),1),e("div",null,"이미지 : "+i(s.image_url)+", "+i(s.image_oname),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",j,[q,e("div",z,[e("div",G,[e("div",H,[e("div",J,[e("div",K,[e("ul",null,[(t(!0),n(_,null,d(a.movieDTOList,(s,c)=>(t(),n("li",{key:c},[m(l,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[e("div",P,i(s.movie_name),1),e("div",null,i(s.movie_open),1),e("img",{src:r.getImageUrl(s.image_oname)},null,8,Q)]),_:2},1032,["to"])]))),128))])])])])])])])])])])}const ee=C(B,[["render",W],["__scopeId","data-v-4f195fae"]]);export{ee as default};
