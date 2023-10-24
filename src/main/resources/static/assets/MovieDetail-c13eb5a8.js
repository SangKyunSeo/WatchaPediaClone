import{u as m,b as v,_ as u,o as t,c as n,a as e,t as s,i as a}from"./index-bdb1c6b0.js";const c={name:"MovieDetail",props:{movie_num:{type:Number,default:0}},data(){return{movieDetails:{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0},movieGenreName:"",router:m()}},mounted(){this.getMovieDetail(),this.getMovieGenre()},methods:{getMovieDetail(){v.get("/getMovieInfo",{params:{movie_num:this.$route.params.movie_num}}).then(o=>{this.movieDetails=o.data,this.movieDetails.movie_open=this.movieDetails.movie_open.substring(0,4)})},getMovieGenre(){v.get("/getMovieGenre",{params:{movie_num:this.$route.params.movie_num}}).then(o=>{this.movieGenreName=o.data})}}},d=e("h1",null,"영화 상세 화면",-1),l={class:"movie-detail-header"},_={class:"movie-post"},r={class:"movie-post-summary"},h=e("div",null,"감독",-1),C={key:0},D={key:1},p={class:"movie-summary"},B={class:"movie-info"},g=e("div",{class:"movie-image"},[e("div",null,[e("div",null,[e("img")])])],-1),b={class:"movie-defail-info"},f=a('<section class="section-review"><div class="movie-review"><div class="review-star"><div> 별그림 </div></div><div class="review-btn"><div>평가하기</div></div></div><div class="review-buttons"><button class="wish-watch"><div class="wish-btn">+</div> 보고싶어요 </button><button class="write-comment"><div class="comment-btn">연필</div> 코멘트 </button><button class="watching"><div class="watching-btn">눈</div> 보는중 </button></div></section>',1),w={class:"section-movie-detail-info"},A=a('<div class="movie-person-comment"><section class="movie-persons"><div class="person-title"><h2>출연/제작</h2></div><div class="person-main"></div></section><section class="movie-comments"><div class="comment-title"><h2>코멘트</h2></div><div class="comment-main"></div></section></div>',1);function F(o,M,y,G,i,N){return t(),n("main",null,[d,e("div",l,[e("div",_,[e("div",r,[e("div",null,[e("h1",null,s(i.movieDetails.movie_name),1),h,e("div",null,s(i.movieDetails.movie_open)+" • "+s(i.movieGenreName),1),i.movieDetails.movie_grade==0?(t(),n("div",C,"2시간4분 / 전체")):(t(),n("div",D,"2시간4분 / "+s(i.movieDetails.movie_grade),1))])])]),e("div",p,[e("section",B,[g,e("div",b,[f,e("section",w,s(i.movieDetails.movie_content),1)])])])]),A])}const x=u(c,[["render",F]]);export{x as default};