import{u as o,b as a,_ as i,o as s,c as n,a as t,t as r}from"./index-66643a94.js";const m={name:"MovieDetail",props:{movie_num:{type:Number,default:0}},data(){return{movieDetails:{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0},router:o()}},mounted(){this.getMovieDetail()},methods:{getMovieDetail(){a.get("/getMovieInfo",{headers:{Authorization:"Bearer "+this.$store.getters.getAccessToken},params:{movie_num:this.$route.params.movie_num}}).then(e=>{this.movieDetails=e.data})}}},u=t("h1",null,"영화 상세 화면",-1);function _(e,l,c,v,p,d){return s(),n("main",null,[u,t("h2",null,"movie_num : "+r(e.$route.params.movie_num),1)])}const D=i(m,[["render",_]]);export{D as default};