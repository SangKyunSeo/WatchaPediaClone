import{u,b as a,_ as c,o as s,c as t,a as e,t as o,i as v}from"./index-17a7d9ed.js";const d={name:"MovieDetail",props:{movie_num:{type:Number,default:0}},data(){return{movieDetails:{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0},router:u()}},mounted(){this.getMovieDetail()},methods:{getMovieDetail(){a.get("/getMovieInfo",{params:{movie_num:this.$route.params.movie_num}}).then(n=>{this.movieDetails=n.data})}}},m=e("h1",null,"영화 상세 화면",-1),l={class:"movie-detail-header"},_={class:"movie-post"},r={class:"movie-post-summary"},C=e("div",null,"감독",-1),h=e("div",null,"장르",-1),D={key:0},p={key:1},B={class:"movie-summary"},b={class:"movie-info"},f=e("div",{class:"movie-image"},[e("div",null,[e("div",null,[e("img")])])],-1),g={class:"movie-defail-info"},w=v('<section class="section-review"><div class="movie-review"><div class="review-star"><div> 별그림 </div></div><div class="review-btn"><div>평가하기</div></div></div><div class="review-buttons"><button class="wish-watch"><div class="wish-btn">+</div> 보고싶어요 </button><button class="write-comment"><div class="comment-btn">연필</div> 코멘트 </button><button class="watching"><div class="watching-btn">눈</div> 보는중 </button></div></section>',1),A={class:"section-movie-detail-info"},F=v('<div class="movie-person-comment"><section class="movie-persons"><div class="person-title"><h2>출연/제작</h2></div><div class="person-main"></div></section><section class="movie-comments"><div class="comment-title"><h2>코멘트</h2></div><div class="comment-main"></div></section></div>',1);function y(n,M,k,x,i,E){return s(),t("main",null,[m,e("div",l,[e("div",_,[e("div",r,[e("div",null,[e("h1",null,o(i.movieDetails.movie_name),1),C,h,i.movieDetails.movie_grade==0?(s(),t("div",D,"2시간4분 / 전체")):(s(),t("div",p,"2시간4분 / "+o(i.movieDetails.movie_grade),1))])])]),e("div",B,[e("section",b,[f,e("div",g,[w,e("section",A,o(i.movieDetails.movie_content),1)])])])]),F])}const S=c(d,[["render",y]]);export{S as default};
