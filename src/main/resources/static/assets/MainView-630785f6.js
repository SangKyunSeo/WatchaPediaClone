import{u as C,b as f,_ as D,d as k,o as i,c as t,a as e,F as d,e as m,f as v,w as u,p as L,g as y,h as r,t as n}from"./index-3107e59d.js";const w={data(){return{movieDTOList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""}],router:C()}},mounted(){this.selectMovieList()},methods:{selectMovieList(){f.get("/mainMovie").then(o=>{this.movieDTOList=o.data}).catch(o=>{console.log(o)})},getImageUrl(o){const p=window.location.href;return new URL(`../movieimg/${o}.jpg`,p).href}}};const h=o=>(L("data-v-f954e0db"),o=o(),y(),o),I={class:"section-div"},M={class:"section-content"},x={class:"movie-container"},B=h(()=>e("div",{class:"movie-title"},[e("p",null,"박스오피스 순위")],-1)),U={class:"movie-content"},O={class:"movie-child1"},T={class:"movie-child2"},V={class:"movie-child3"},b={class:"movie-child4"},A=["src"],S={class:"movie-name"},N={class:"movie-container"},R=h(()=>e("div",{class:"movie-title"},[e("p",null,"왓챠 영화 순위")],-1)),F={class:"movie-content"},$={class:"movie-child1"},j={class:"movie-child2"},E={class:"movie-child3"},q={class:"movie-child4"},z=["src"],G={class:"movie-name"},H={class:"movie-container"},J=h(()=>e("div",{class:"movie-title"},[e("p",null,"넷플릭스 영화 순위")],-1)),K={class:"movie-content"},P={class:"movie-child1"},Q={class:"movie-child2"},W={class:"movie-child3"},X={class:"movie-child4"},Y=["src"],Z={class:"movie-name"};function ee(o,p,g,se,a,_){const l=k("router-link");return i(),t("section",null,[e("div",I,[e("section",M,[e("div",x,[B,e("div",U,[e("div",O,[e("div",T,[e("div",V,[e("div",b,[e("ul",null,[(i(!0),t(d,null,m(a.movieDTOList,(s,c)=>(i(),t("li",{key:c},[v(l,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[s.image_oname?(i(),t("img",{key:0,src:_.getImageUrl(`${s.image_oname}`)},null,8,A)):r("",!0),e("div",S,n(s.movie_name),1),e("div",null,n(s.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",N,[R,e("div",F,[e("div",$,[e("div",j,[e("div",E,[e("div",q,[e("ul",null,[(i(!0),t(d,null,m(a.movieDTOList,(s,c)=>(i(),t("li",{key:c},[v(l,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[s.image_oname?(i(),t("img",{key:0,src:_.getImageUrl(`${s.image_oname}`)},null,8,z)):r("",!0),e("div",G,n(s.movie_name),1),e("div",null,n(s.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",H,[J,e("div",K,[e("div",P,[e("div",Q,[e("div",W,[e("div",X,[e("ul",null,[(i(!0),t(d,null,m(a.movieDTOList,(s,c)=>(i(),t("li",{key:c},[v(l,{to:{name:"MovieDetail",params:{movie_num:s.movie_num}},class:"movie-items"},{default:u(()=>[s.image_oname?(i(),t("img",{key:0,src:_.getImageUrl(`${s.image_oname}`)},null,8,Y)):r("",!0),e("div",Z,n(s.movie_name),1),e("div",null,n(s.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])])])])])}const ie=D(w,[["render",ee],["__scopeId","data-v-f954e0db"]]);export{ie as default};
