import{u as C,b as g,_ as f,d as D,o as t,c as n,a as e,F as _,e as d,f as m,w as u,p as B,g as L,t as o}from"./index-ff15bce5.js";const M={data(){return{movieDTOList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""}],router:C()}},mounted(){this.selectMovieList()},methods:{selectMovieList(){g.get("/mainMovie").then(s=>{this.movieDTOList=s.data}).catch(s=>{console.log(s)})},getImageUrl(s){const r=window.location.href;return require(`./movieimg/${s}.png`,r).href}}};const v=s=>(B("data-v-2c75c0fa"),s=s(),L(),s),k={class:"section-div"},w={class:"section-content"},x={class:"movie-container"},y=v(()=>e("div",{class:"movie-title"},[e("p",null,"박스오피스 순위")],-1)),I={class:"movie-content"},O={class:"movie-child1"},T={class:"movie-child2"},A={class:"movie-child3"},F={class:"movie-child4"},S={class:"movie-name"},V={class:"movie-container"},U=v(()=>e("div",{class:"movie-title"},[e("p",null,"왓챠 영화 순위")],-1)),N={class:"movie-content"},R={class:"movie-child1"},$={class:"movie-child2"},b={class:"movie-child3"},q={class:"movie-child4"},E={class:"movie-name"},j={class:"movie-container"},z=v(()=>e("div",{class:"movie-title"},[e("p",null,"넷플릭스 영화 순위")],-1)),G={class:"movie-content"},H={class:"movie-child1"},J={class:"movie-child2"},K={class:"movie-child3"},P={class:"movie-child4"},Q={class:"movie-name"},W=["src"];function X(s,r,h,Y,a,p){const l=D("router-link");return t(),n("section",null,[e("div",k,[e("section",w,[e("div",x,[y,e("div",I,[e("div",O,[e("div",T,[e("div",A,[e("div",F,[e("ul",null,[(t(!0),n(_,null,d(a.movieDTOList,(i,c)=>(t(),n("li",{key:c},[m(l,{to:{name:"MovieDetail",params:{movie_num:i.movie_num}},class:"movie-items"},{default:u(()=>[e("div",S,o(i.movie_name),1),e("div",null,o(i.movie_open),1),e("div",null,"이미지 : "+o(i.image_url)+", "+o(i.image_oname),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",V,[U,e("div",N,[e("div",R,[e("div",$,[e("div",b,[e("div",q,[e("ul",null,[(t(!0),n(_,null,d(a.movieDTOList,(i,c)=>(t(),n("li",{key:c},[m(l,{to:{name:"MovieDetail",params:{movie_num:i.movie_num}},class:"movie-items"},{default:u(()=>[e("div",E,o(i.movie_name),1),e("div",null,o(i.movie_open),1),e("div",null,"이미지 : "+o(i.image_url)+", "+o(i.image_oname),1)]),_:2},1032,["to"])]))),128))])])])])])])]),e("div",j,[z,e("div",G,[e("div",H,[e("div",J,[e("div",K,[e("div",P,[e("ul",null,[(t(!0),n(_,null,d(a.movieDTOList,(i,c)=>(t(),n("li",{key:c},[m(l,{to:{name:"MovieDetail",params:{movie_num:i.movie_num}},class:"movie-items"},{default:u(()=>[e("div",Q,o(i.movie_name),1),e("div",null,o(i.movie_open),1),e("img",{src:p.getImageUrl(`../movieimg/${i.image_oname}.png`)},null,8,W)]),_:2},1032,["to"])]))),128))])])])])])])])])])])}const ee=f(M,[["render",X],["__scopeId","data-v-2c75c0fa"]]);export{ee as default};