import{b as d,_ as v,o as u,c as e,d as t}from"./index-136fac4c.js";const o={data(){return{movieList:[{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0}]}},mounted(){this.selectMovieList()},methods:{selectMovieList(){d.get("/main").then(i=>{this.movieList=i.data,alert(this.movieList[0].movie_name)}).catch(i=>{console.log(i)})}}},l=t("<div><div><section><div><section><div><div><p>박스오피스 순위</p></div><div><div><div><div><div><ul><li>영화1</li><li>영화2</li><li>영화3</li><li>영화4</li></ul></div></div></div></div></div></div><div><div><p>왓챠 Top10 영화</p></div><div><div><div><div><div><ul><li>영화1</li><li>영화2</li><li>영화3</li><li>영화4</li></ul></div></div></div></div></div></div><div><div><p>넷플릭스 영화 순위</p></div><div><div><div><div><div><ul><li>영화1</li><li>영화2</li><li>영화3</li><li>영화4</li></ul></div></div></div></div></div></div></section></div></section></div></div>",1),s=[l];function n(i,C,c,a,m,_){return u(),e("div",null,s)}const D=v(o,[["render",n]]);export{D as default};
