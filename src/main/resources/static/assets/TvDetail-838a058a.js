import{u,b as v,_ as c,o,c as n,a as t,t as s,l as a}from"./index-fa0ba358.js";const l={name:"TvDetail",props:{tv_num:{type:Number,default:0}},data(){return{tvDetails:{tv_num:0,tv_name:"",tv_open:"",tv_content:"",tv_grade:0,tv_ott:0},tvGenreName:"",router:u()}},mounted(){this.getTvDetail(),this.getTvGenre()},methods:{getTvDetail(){v.get("/tvDetail",{params:{tv_num:this.$route.params.tv_num}}).then(i=>{this.tvDetails=i.data,this.tvDetails.tv_open=this.tvDetails.tv_open.substring(0,4)})},getTvGenre(){v.get("/getTvGenre",{params:{tv_num:this.$route.params.tv_num}}).then(i=>{this.tvGenreName=i.data})}}},d=t("h1",null,"영화 상세 화면",-1),m={class:"movie-detail-header"},_={class:"movie-post"},r={class:"movie-post-summary"},C={key:0},h={key:1},D={key:2},p={class:"movie-summary"},B={class:"movie-info"},g=t("div",{class:"movie-image"},[t("div",null,[t("div",null,[t("img")])])],-1),b={class:"movie-defail-info"},f=a('<section class="section-review"><div class="movie-review"><div class="review-star"><div> 별그림 </div></div><div class="review-btn"><div>평가하기</div></div></div><div class="review-buttons"><button class="wish-watch"><div class="wish-btn">+</div> 보고싶어요 </button><button class="write-comment"><div class="comment-btn">연필</div> 코멘트 </button><button class="watching"><div class="watching-btn">눈</div> 보는중 </button></div></section>',1),w={class:"section-movie-detail-info"},A=a('<div class="movie-person-comment"><section class="movie-persons"><div class="person-title"><h2>출연/제작</h2></div><div class="person-main"></div></section><section class="movie-comments"><div class="comment-title"><h2>코멘트</h2></div><div class="comment-main"></div></section></div>',1);function F(i,y,T,G,e,N){return o(),n("main",null,[d,t("div",m,[t("div",_,[t("div",r,[t("div",null,[t("h1",null,s(e.tvDetails.tv_name),1),t("div",null,s(e.tvDetails.tv_name),1),t("div",null,s(e.tvDetails.tv_open)+" • "+s(e.tvGenreName),1),e.tvDetails.tv_grade==0?(o(),n("div",C,"2시간4분 / 전체")):e.tvDetails.tv_grade==18?(o(),n("div",h,"2시간4분 / 청불")):(o(),n("div",D,"2시간4분 / "+s(e.tvDetails.tv_grade)+"세",1))])])]),t("div",p,[t("section",B,[g,t("div",b,[f,t("section",w,s(e.tvDetails.tv_content),1)])])])]),A])}const x=c(l,[["render",F]]);export{x as default};
