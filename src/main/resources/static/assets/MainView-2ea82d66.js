import{b as o,_ as f,o as t,c as d,a,F as s,d as n,e as c,t as e,p as _,f as b}from"./index-f8b6b011.js";const p={data(){return{movieVOList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0}]}},mounted(){this.selectMovieList()},methods:{selectMovieList(){o.get("/mainMovie").then(i=>{this.movieVOList=i.data}).catch(i=>{console.log(i)})}}};const C=i=>(_("data-v-260fbafa"),i=i(),b(),i),r={class:"section-content"},m={class:"movie-container"},D=C(()=>a("div",{class:"movie-title"},[a("p",null,"박스오피스 순위")],-1)),h={class:"movie-content"},V=c("<div data-v-260fbafa><div data-v-260fbafa><p data-v-260fbafa>왓챠 Top10 영화</p></div><div data-v-260fbafa><div data-v-260fbafa><div data-v-260fbafa><div data-v-260fbafa><div data-v-260fbafa><ul data-v-260fbafa><li data-v-260fbafa>영화1</li><li data-v-260fbafa>영화2</li><li data-v-260fbafa>영화3</li><li data-v-260fbafa>영화4</li></ul></div></div></div></div></div></div><div data-v-260fbafa><div data-v-260fbafa><p data-v-260fbafa>넷플릭스 영화 순위</p></div><div data-v-260fbafa><div data-v-260fbafa><div data-v-260fbafa><div data-v-260fbafa><div data-v-260fbafa><ul data-v-260fbafa><li data-v-260fbafa>영화1</li><li data-v-260fbafa>영화2</li><li data-v-260fbafa>영화3</li><li data-v-260fbafa>영화4</li></ul></div></div></div></div></div></div>",2);function g(i,B,L,x,l,M){return t(),d("div",null,[a("div",null,[a("div",null,[a("section",null,[a("div",null,[a("section",r,[a("div",m,[D,a("div",h,[a("div",null,[a("div",null,[a("div",null,[a("div",null,[a("ul",null,[(t(!0),d(s,null,n(l.movieVOList,(v,u)=>(t(),d("li",{key:u},[a("a",null,[a("div",null,e(v.movie_name),1),a("div",null,e(v.movie_open),1)])]))),128))])])])])])])]),V])])])])])])}const y=f(p,[["render",g],["__scopeId","data-v-260fbafa"]]);export{y as default};