import{b as s,_ as u,o as i,c as t,a,F as f,d as n,e as c,t as e,p as _,f as p}from"./index-904a5745.js";const C={data(){return{movieVOList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0}]}},mounted(){this.selectMovieList()},methods:{selectMovieList(){s.get("/mainMovie").then(d=>{this.movieVOList=d.data}).catch(d=>{console.log(d)})}}};const r=d=>(_("data-v-4f04d1af"),d=d(),p(),d),m={class:"section-div"},h={class:"section-content"},D={class:"movie-container"},V=r(()=>a("div",{class:"movie-title"},[a("p",null,"박스오피스 순위")],-1)),g={class:"movie-content"},B=c("<div data-v-4f04d1af><div data-v-4f04d1af><p data-v-4f04d1af>왓챠 Top10 영화</p></div><div data-v-4f04d1af><div data-v-4f04d1af><div data-v-4f04d1af><div data-v-4f04d1af><div data-v-4f04d1af><ul data-v-4f04d1af><li data-v-4f04d1af>영화1</li><li data-v-4f04d1af>영화2</li><li data-v-4f04d1af>영화3</li><li data-v-4f04d1af>영화4</li></ul></div></div></div></div></div></div><div data-v-4f04d1af><div data-v-4f04d1af><p data-v-4f04d1af>넷플릭스 영화 순위</p></div><div data-v-4f04d1af><div data-v-4f04d1af><div data-v-4f04d1af><div data-v-4f04d1af><div data-v-4f04d1af><ul data-v-4f04d1af><li data-v-4f04d1af>영화1</li><li data-v-4f04d1af>영화2</li><li data-v-4f04d1af>영화3</li><li data-v-4f04d1af>영화4</li></ul></div></div></div></div></div></div>",2);function L(d,x,M,S,o,y){return i(),t("div",null,[a("div",null,[a("div",null,[a("section",null,[a("div",m,[a("section",h,[a("div",D,[V,a("div",g,[a("div",null,[a("div",null,[a("div",null,[a("div",null,[a("ul",null,[(i(!0),t(f,null,n(o.movieVOList,(v,l)=>(i(),t("li",{key:l},[a("a",null,[a("div",null,e(v.movie_name),1),a("div",null,e(v.movie_open),1)])]))),128))])])])])])])]),B])])])])])])}const I=u(C,[["render",L],["__scopeId","data-v-4f04d1af"]]);export{I as default};