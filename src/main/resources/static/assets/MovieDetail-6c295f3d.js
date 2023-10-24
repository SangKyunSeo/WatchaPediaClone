import{u as c,b as d,_ as l,o,c as a,a as e,t as s,i as n,p as _,g as r}from"./index-ac88f4fd.js";const h={name:"MovieDetail",props:{movie_num:{type:Number,default:0}},data(){return{movieDetails:{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""},movieGenreName:"",router:c()}},mounted(){this.getMovieDetail(),this.getMovieGenre()},methods:{getMovieDetail(){d.get("/getMovieInfo",{params:{movie_num:this.$route.params.movie_num}}).then(i=>{this.movieDetails=i.data,this.movieDetails.movie_open=this.movieDetails.movie_open.substring(0,4)})},getMovieGenre(){d.get("/getMovieGenre",{params:{movie_num:this.$route.params.movie_num}}).then(i=>{this.movieGenreName=i.data})},getImageUrl(i){const v=window.location.href;return new URL(`../movieimg/${i}.jpg`,v).href}}};const C=i=>(_("data-v-7ed065b7"),i=i(),r(),i),b=C(()=>e("h1",null,"영화 상세 화면",-1)),p={class:"movie-detail-header"},D={class:"movie-post"},g={class:"movie-post-summary"},B={key:0},w={key:1},f={key:2},A={class:"movie-summary"},y={class:"movie-info"},M={class:"movie-image"},F=["src"],I={class:"movie-defail-info"},G=n('<section class="section-review" data-v-7ed065b7><div class="movie-review" data-v-7ed065b7><div class="review-star" data-v-7ed065b7><div data-v-7ed065b7> 별그림 </div></div><div class="review-btn" data-v-7ed065b7><div data-v-7ed065b7>평가하기</div></div></div><div class="review-buttons" data-v-7ed065b7><button class="wish-watch" data-v-7ed065b7><div class="wish-btn" data-v-7ed065b7>+</div> 보고싶어요 </button><button class="write-comment" data-v-7ed065b7><div class="comment-btn" data-v-7ed065b7>연필</div> 코멘트 </button><button class="watching" data-v-7ed065b7><div class="watching-btn" data-v-7ed065b7>눈</div> 보는중 </button></div></section>',1),N={class:"section-movie-detail-info"},k=n('<div class="movie-person-comment" data-v-7ed065b7><section class="movie-persons" data-v-7ed065b7><div class="person-title" data-v-7ed065b7><h2 data-v-7ed065b7>출연/제작</h2></div><div class="person-main" data-v-7ed065b7></div></section><section class="movie-comments" data-v-7ed065b7><div class="comment-title" data-v-7ed065b7><h2 data-v-7ed065b7>코멘트</h2></div><div class="comment-main" data-v-7ed065b7></div></section></div>',1);function x(i,v,m,S,t,u){return o(),a("main",null,[b,e("div",p,[e("div",D,[e("div",g,[e("div",null,[e("h1",null,s(t.movieDetails.movie_name),1),e("div",null,s(t.movieDetails.movie_name),1),e("div",null,s(t.movieDetails.movie_open)+" • "+s(t.movieGenreName),1),t.movieDetails.movie_grade==0?(o(),a("div",B,"2시간4분 / 전체")):t.movieDetails.movie_grade==18?(o(),a("div",w,"2시간4분 / 청불")):(o(),a("div",f,"2시간4분 / "+s(t.movieDetails.movie_grade)+"세",1))])])]),e("div",A,[e("section",y,[e("div",M,[e("div",null,[e("div",null,[e("img",{src:u.getImageUrl(`${t.movieDetails.image_oname}`)},null,8,F)])])]),e("div",I,[G,e("section",N,s(t.movieDetails.movie_content),1)])])])]),k])}const E=l(h,[["render",x],["__scopeId","data-v-7ed065b7"]]);export{E as default};
