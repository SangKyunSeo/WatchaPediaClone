import{u,b as n,_ as l,o as s,c as o,a as e,t as a,i as m,p as _,g as b}from"./index-d1876774.js";const r={name:"MovieDetail",props:{movie_num:{type:Number,default:0}},data(){return{movieDetails:{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""},movieGenreName:"",router:u()}},mounted(){this.getMovieDetail(),this.getMovieGenre()},methods:{getMovieDetail(){n.get("/getMovieInfo",{params:{movie_num:this.$route.params.movie_num}}).then(i=>{this.movieDetails=i.data,this.movieDetails.movie_open=this.movieDetails.movie_open.substring(0,4)})},getMovieGenre(){n.get("/getMovieGenre",{params:{movie_num:this.$route.params.movie_num}}).then(i=>{this.movieGenreName=i.data})},getImageUrl(i){const v=window.location.href;return new URL(`../movieimg/${i}.jpg`,v).href}}};const h=i=>(_("data-v-ab407b73"),i=i(),b(),i),C=h(()=>e("h1",null,"영화 상세 화면",-1)),p={class:"movie-detail-header"},D={class:"movie-post"},g={class:"movie-post-summary"},B={key:0},w={key:1},f={key:2},A={class:"movie-summary"},y={class:"movie-info"},M={class:"movie-image"},F={class:"movie-image-child1"},I={class:"movie-image-child2"},G=["src"],N={class:"movie-detail-info"},k=m('<section class="section-review" data-v-ab407b73><div class="movie-review" data-v-ab407b73><div class="review-star" data-v-ab407b73><div data-v-ab407b73> 별그림 </div></div><div class="review-btn" data-v-ab407b73><div data-v-ab407b73>평가하기</div></div></div><div class="review-buttons" data-v-ab407b73><button class="wish-watch" data-v-ab407b73><div class="wish-btn" data-v-ab407b73>+</div> 보고싶어요 </button><button class="write-comment" data-v-ab407b73><div class="comment-btn" data-v-ab407b73>연필</div> 코멘트 </button><button class="watching" data-v-ab407b73><div class="watching-btn" data-v-ab407b73>눈</div> 보는중 </button></div></section>',1),x={class:"section-movie-detail-info"},S=m('<div class="movie-person-comment" data-v-ab407b73><section class="movie-persons" data-v-ab407b73><div class="person-title" data-v-ab407b73><h2 data-v-ab407b73>출연/제작</h2></div><div class="person-main" data-v-ab407b73></div></section><section class="movie-comments" data-v-ab407b73><div class="comment-title" data-v-ab407b73><h2 data-v-ab407b73>코멘트</h2></div><div class="comment-main" data-v-ab407b73></div></section></div>',1);function U(i,v,d,E,t,c){return s(),o("main",null,[C,e("div",p,[e("div",D,[e("div",g,[e("div",null,[e("h1",null,a(t.movieDetails.movie_name),1),e("div",null,a(t.movieDetails.movie_name),1),e("div",null,a(t.movieDetails.movie_open)+" • "+a(t.movieGenreName),1),t.movieDetails.movie_grade==0?(s(),o("div",B,"2시간4분 / 전체")):t.movieDetails.movie_grade==18?(s(),o("div",w,"2시간4분 / 청불")):(s(),o("div",f,"2시간4분 / "+a(t.movieDetails.movie_grade)+"세",1))])])]),e("div",A,[e("section",y,[e("div",M,[e("div",F,[e("div",I,[e("img",{src:c.getImageUrl(`${t.movieDetails.image_oname}`)},null,8,G)])])]),e("div",N,[k,e("section",x,a(t.movieDetails.movie_content),1)])])])]),S])}const L=l(r,[["render",U],["__scopeId","data-v-ab407b73"]]);export{L as default};
