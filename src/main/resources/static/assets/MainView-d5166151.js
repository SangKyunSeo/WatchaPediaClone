import{b as o,_ as s,o as a,c as t,a as d,F as n,d as c,e as _,t as e,p,f as C}from"./index-3635680d.js";const r={data(){return{movieVOList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0}]}},mounted(){this.selectMovieList()},methods:{selectMovieList(){o.get("/mainMovie").then(i=>{this.movieVOList=i.data}).catch(i=>{console.log(i)})}}};const m=i=>(p("data-v-2d964981"),i=i(),C(),i),D={class:"section-content"},h={class:"movie-container"},f=m(()=>d("div",{class:"movie-title"},[d("p",null,"박스오피스 순위")],-1)),V={class:"movie-content"},g=_("<div data-v-2d964981><div data-v-2d964981><p data-v-2d964981>왓챠 Top10 영화</p></div><div data-v-2d964981><div data-v-2d964981><div data-v-2d964981><div data-v-2d964981><div data-v-2d964981><ul data-v-2d964981><li data-v-2d964981>영화1</li><li data-v-2d964981>영화2</li><li data-v-2d964981>영화3</li><li data-v-2d964981>영화4</li></ul></div></div></div></div></div></div><div data-v-2d964981><div data-v-2d964981><p data-v-2d964981>넷플릭스 영화 순위</p></div><div data-v-2d964981><div data-v-2d964981><div data-v-2d964981><div data-v-2d964981><div data-v-2d964981><ul data-v-2d964981><li data-v-2d964981>영화1</li><li data-v-2d964981>영화2</li><li data-v-2d964981>영화3</li><li data-v-2d964981>영화4</li></ul></div></div></div></div></div></div>",2);function B(i,L,x,M,l,S){return a(),t("div",null,[d("div",null,[d("div",null,[d("section",null,[d("div",null,[d("section",D,[d("div",h,[f,d("div",V,[d("div",null,[d("div",null,[d("div",null,[d("div",null,[d("ul",null,[(a(!0),t(n,null,c(l.movieVOList,(v,u)=>(a(),t("li",{key:u},[d("a",null,[d("div",null,e(v.movie_name),1),d("div",null,e(v.movie_open),1)])]))),128))])])])])])])]),g])])])])])])}const A=s(r,[["render",B],["__scopeId","data-v-2d964981"]]);export{A as default};
