import{u,b as c,_ as l,d as _,o as e,c as a,a as d,F as m,e as r,f as b,g as p,w as C,p as h,h as D,t as o}from"./index-0264f68d.js";const f={data(){return{movieVOList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0}],router:u()}},mounted(){this.selectMovieList()},methods:{selectMovieList(){c.get("/mainMovie").then(i=>{this.movieVOList=i.data}).catch(i=>{console.log(i)})}}};const V=i=>(h("data-v-b4d728d4"),i=i(),D(),i),g={class:"section-div"},x={class:"section-content"},B={class:"movie-container"},L=V(()=>d("div",{class:"movie-title"},[d("p",null,"박스오피스 순위")],-1)),M={class:"movie-content"},k={class:"movie-child1"},w={class:"movie-child2"},S={class:"movie-child3"},y={class:"movie-child4"},A={class:"movie-name"},I=b("<div data-v-b4d728d4><div data-v-b4d728d4><p data-v-b4d728d4>왓챠 Top10 영화</p></div><div data-v-b4d728d4><div data-v-b4d728d4><div data-v-b4d728d4><div data-v-b4d728d4><div data-v-b4d728d4><ul data-v-b4d728d4><li data-v-b4d728d4>영화1</li><li data-v-b4d728d4>영화2</li><li data-v-b4d728d4>영화3</li><li data-v-b4d728d4>영화4</li></ul></div></div></div></div></div></div><div data-v-b4d728d4><div data-v-b4d728d4><p data-v-b4d728d4>넷플릭스 영화 순위</p></div><div data-v-b4d728d4><div data-v-b4d728d4><div data-v-b4d728d4><div data-v-b4d728d4><div data-v-b4d728d4><ul data-v-b4d728d4><li data-v-b4d728d4>영화1</li><li data-v-b4d728d4>영화2</li><li data-v-b4d728d4>영화3</li><li data-v-b4d728d4>영화4</li></ul></div></div></div></div></div></div>",2);function N(i,O,$,F,s,E){const v=_("router-link");return e(),a("section",null,[d("div",g,[d("section",x,[d("div",B,[L,d("div",M,[d("div",k,[d("div",w,[d("div",S,[d("div",y,[d("ul",null,[(e(!0),a(m,null,r(s.movieVOList,(t,n)=>(e(),a("li",{key:n},[p(v,{to:{name:"MovieDetail",params:{movie_num:t.movie_num}},class:"movie-items"},{default:C(()=>[d("div",A,o(t.movie_name),1),d("div",null,o(t.movie_open),1)]),_:2},1032,["to"])]))),128))])])])])])])]),I])])])}const T=l(f,[["render",N],["__scopeId","data-v-b4d728d4"]]);export{T as default};