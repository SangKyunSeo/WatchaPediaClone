import{u as a,b as u,_ as c,o as e,c as i,a as t,t as o,i as v}from"./index-3b304094.js";const d={name:"TvDetail",props:{tv_num:{type:Number,default:0}},data(){return{tvDetails:{tv_num:0,tv_name:"",tv_open:"",tv_content:"",tv_grade:0,tv_ott:0},router:a()}},mounted(){this.getTvDetail()},methods:{getTvDetail(){u.get("/tvDetail",{params:{tv_num:this.$route.params.tv_num}}).then(n=>{this.tvDetails=n.data})}}},l=t("h1",null,"영화 상세 화면",-1),_={class:"movie-detail-header"},m={class:"movie-post"},r={class:"movie-post-summary"},C=t("div",null,"감독",-1),h=t("div",null,"장르",-1),D={key:0},p={key:1},B={class:"movie-summary"},b={class:"movie-info"},f=t("div",{class:"movie-image"},[t("div",null,[t("div",null,[t("img")])])],-1),g={class:"movie-defail-info"},w=v('<section class="section-review"><div class="movie-review"><div class="review-star"><div> 별그림 </div></div><div class="review-btn"><div>평가하기</div></div></div><div class="review-buttons"><button class="wish-watch"><div class="wish-btn">+</div> 보고싶어요 </button><button class="write-comment"><div class="comment-btn">연필</div> 코멘트 </button><button class="watching"><div class="watching-btn">눈</div> 보는중 </button></div></section>',1),A={class:"section-movie-detail-info"},F=v('<div class="movie-person-comment"><section class="movie-persons"><div class="person-title"><h2>출연/제작</h2></div><div class="person-main"></div></section><section class="movie-comments"><div class="comment-title"><h2>코멘트</h2></div><div class="comment-main"></div></section></div>',1);function y(n,k,x,T,s,E){return e(),i("main",null,[l,t("div",_,[t("div",m,[t("div",r,[t("div",null,[t("h1",null,o(s.tvDetails.tv_name),1),C,h,s.tvDetails.tv_grade==0?(e(),i("div",D,"2시간4분 / 전체")):(e(),i("div",p,"2시간4분 / "+o(s.tvDetails.tv_grade),1))])])]),t("div",B,[t("section",b,[f,t("div",g,[w,t("section",A,o(s.tvDetails.tv_content),1)])])])]),F])}const S=c(d,[["render",y]]);export{S as default};
