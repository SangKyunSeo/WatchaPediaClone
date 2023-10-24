import{u as r,b as v,_ as h,d as p,o,c as a,a as e,t as s,F as C,e as g,i as D,f,w as B,p as w,g as b}from"./index-23a0bec2.js";const M={name:"MovieDetail",props:{movie_num:{type:Number,default:0}},data(){return{movieDetails:{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""},movieGenreName:"",movieCastList:[{person_item_num:0,person_num:0,item_type:0,item_num:0,person_item_role:"",person_name:""}],router:r()}},mounted(){this.getMovieDetail(),this.getMovieGenre(),this.getMovieCast()},methods:{getMovieDetail(){v.get("/getMovieInfo",{params:{movie_num:this.$route.params.movie_num}}).then(i=>{this.movieDetails=i.data,this.movieDetails.movie_open=this.movieDetails.movie_open.substring(0,4)})},getMovieGenre(){v.get("/getMovieGenre",{params:{movie_num:this.$route.params.movie_num}}).then(i=>{this.movieGenreName=i.data})},getMovieCast(){v.get("/getMovieCast",{params:{movie_num:this.$route.params.movie_num}}).then(i=>{this.movieCastList=i.data})},getImageUrl(i){const c=window.location.href;return new URL(`../movieimg/${i}.jpg`,c).href}}};const n=i=>(w("data-v-1ca6821f"),i=i(),b(),i),y=n(()=>e("h1",null,"영화 상세 화면",-1)),A={class:"movie-detail-header"},F={class:"movie-post"},k={class:"movie-post-summary"},I={key:0},N={key:1},x={key:2},G={class:"movie-summary"},L={class:"movie-info"},S={class:"movie-image"},U={class:"movie-image-child1"},E={class:"movie-image-child2"},R=["src"],V={class:"movie-detail-info"},j=D('<section class="section-review" data-v-1ca6821f><div class="movie-review" data-v-1ca6821f><div class="review-star" data-v-1ca6821f><div data-v-1ca6821f> 별그림 </div></div><div class="review-btn" data-v-1ca6821f><div data-v-1ca6821f>평가하기</div></div></div><div class="review-buttons" data-v-1ca6821f><button class="wish-watch" data-v-1ca6821f><div class="wish-btn" data-v-1ca6821f>+</div> 보고싶어요 </button><button class="write-comment" data-v-1ca6821f><div class="comment-btn" data-v-1ca6821f>연필</div> 코멘트 </button><button class="watching" data-v-1ca6821f><div class="watching-btn" data-v-1ca6821f>눈</div> 보는중 </button></div></section>',1),P={class:"section-movie-detail-info"},q={class:"movie-person-comment"},z={class:"movie-persons"},H={class:"person-title"},J=n(()=>e("h2",null,"출연/제작",-1)),K=n(()=>e("div",{class:"person-profile-image"},null,-1)),O=n(()=>e("div",{class:"person-main"},null,-1)),Q=n(()=>e("section",{class:"movie-comments"},[e("div",{class:"comment-title"},[e("h2",null,"코멘트")]),e("div",{class:"comment-main"})],-1));function T(i,c,u,W,t,l){const _=p("router-link");return o(),a("main",null,[y,e("div",A,[e("div",F,[e("div",k,[e("div",null,[e("h1",null,s(t.movieDetails.movie_name),1),e("div",null,s(t.movieDetails.movie_name),1),e("div",null,s(t.movieDetails.movie_open)+" • "+s(t.movieGenreName),1),t.movieDetails.movie_grade==0?(o(),a("div",I,"2시간4분 / 전체")):t.movieDetails.movie_grade==18?(o(),a("div",N,"2시간4분 / 청불")):(o(),a("div",x,"2시간4분 / "+s(t.movieDetails.movie_grade)+"세",1))])])]),e("div",G,[e("section",L,[e("div",S,[e("div",U,[e("div",E,[e("img",{src:l.getImageUrl(`${t.movieDetails.image_oname}`)},null,8,R)])])]),e("div",V,[j,e("section",P,s(t.movieDetails.movie_content),1)])])])]),e("div",q,[e("section",z,[e("div",H,[J,e("ul",null,[(o(!0),a(C,null,g(t.movieCastList,(m,d)=>(o(),a("li",{key:d},[f(_,{to:{name:"PersonDetail",params:{person_num:m.person_num}},class:"movieCast-details"},{default:B(()=>[K,e("div",null,[e("div",null,[e("div",null,s(m.person_name),1),e("div",null,s(m.person_item_role),1)])])]),_:2},1032,["to"])]))),128))])]),O]),Q])])}const Y=h(M,[["render",T],["__scopeId","data-v-1ca6821f"]]);export{Y as default};