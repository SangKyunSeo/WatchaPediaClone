import{b as o,_ as s,o as u,c as e,a as i,F as a,d as c,e as C,t as v}from"./index-d696e07a.js";const r={data(){return{movieVOList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0}]}},mounted(){this.selectMovieList()},methods:{selectMovieList(){o.get("/mainMovie").then(l=>{this.movieVOList=l.data}).catch(l=>{console.log(l)})}}},m=i("div",null,[i("p",null,"박스오피스 순위")],-1),_=C("<div><div><p>왓챠 Top10 영화</p></div><div><div><div><div><div><ul><li>영화1</li><li>영화2</li><li>영화3</li><li>영화4</li></ul></div></div></div></div></div></div><div><div><p>넷플릭스 영화 순위</p></div><div><div><div><div><div><ul><li>영화1</li><li>영화2</li><li>영화3</li><li>영화4</li></ul></div></div></div></div></div></div>",2);function p(l,D,h,f,n,B){return u(),e("div",null,[i("div",null,[i("div",null,[i("section",null,[i("div",null,[i("section",null,[i("div",null,[m,i("div",null,[i("div",null,[i("div",null,[i("div",null,[i("div",null,[i("ul",null,[(u(!0),e(a,null,c(n.movieVOList,(d,t)=>(u(),e("li",{key:t},[i("a",null,[i("div",null,v(d.movie_name),1),i("div",null,v(d.movie_open),1)])]))),128))])])])])])])]),_])])])])])])}const V=s(r,[["render",p]]);export{V as default};
