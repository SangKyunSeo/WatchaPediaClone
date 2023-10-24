import{u as g,b as _,j as m,_ as p,d as w,o as n,c as a,a as e,t as r,k as c,h as v,F as b,e as f,f as D,w as y,p as B,g as k}from"./index-8eede5a3.js";const A={name:"MovieDetail",props:{movie_num:{type:Number,default:0}},data(){return{movieDetails:{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""},movieGenreName:"",movieCastList:[{person_item_num:0,person_num:0,item_type:0,item_num:0,person_item_role:"",person_name:"",image_url:"",image_oname:""}],scrabInfo:{scrab_num:0,member_num:0,scrab_item_type:0,scrab_item_num:0,scrab_type:0},reviewInfo:{review_num:0,member_num:0,review_item_type:0,review_item_num:0,review_content:"",review_score:0,review_regdate:"",review_scrab_type:0},wishWatchValue:-1,watchingValue:-1,router:g(),loginState:this.$store.getters.getLoginState,member_num:this.$store.getters.getUserNum,modalActive:!1}},mounted(){this.getMovieDetail(),this.getMovieGenre(),this.getMovieCast(),this.loginState==!0&&this.getScrabInfo()},computed:{},methods:{getMovieDetail(){_.get("/getMovieInfo",{params:{movie_num:this.$route.params.movie_num}}).then(s=>{this.movieDetails=s.data,this.movieDetails.movie_open=this.movieDetails.movie_open.substring(0,4)})},getMovieGenre(){_.get("/getMovieGenre",{params:{movie_num:this.$route.params.movie_num}}).then(s=>{this.movieGenreName=s.data})},getMovieCast(){_.get("/getMovieCast",{params:{movie_num:this.$route.params.movie_num}}).then(s=>{this.movieCastList=s.data})},getImageUrl(s){const t=window.location.href;return new URL(`../movieimg/${s}.jpg`,t).href},getProfileImageUrl(s){const t=window.location.href;return new URL(`../personimg/${s}.jpg`,t).href},async getScrabInfo(){try{const s=await m.get("/getScrabInfo",{params:{movie_num:this.$route.params.movie_num,member_num:this.member_num,scrab_item_type:1}});console.log("Response: "+s),this.scrabInfo=s.data,this.scrabInfo.scrab_type==0?this.watchingValue=1:this.scrabInfo.scrab_type==1&&(this.wishWatchValue=1)}catch(s){console.log("Error: "+s)}},async wishWatch(){if(this.$store.getters.getAccessToken=="")alert("로그인이 필요합니다.");else try{const t=await m.get("/setWishWatch",{params:{member_num:this.member_num,scrab_item_type:1,scrab_item_num:this.$route.params.movie_num,scrab_type:1}});console.log("Response: "+t),this.scrabInfo=t.data,this.scrabInfo.scrab_type==1&&this.scrabInfo.member_num!=0&&(this.wishWatchValue=1,this.watchingValue=-1),this.scrabInfo||(this.wishWatchValue=-1)}catch(t){console.log("Error: "+t)}},writeComment(){this.$store.getters.getAccessToken==""?alert("로그인이 필요합니다."):this.modalActive=!0},async watching(){if(this.$store.getters.getAccessToken=="")alert("로그인이 필요합니다.");else try{const t=await m.get("/setWishWatch",{params:{member_num:this.member_num,scrab_item_type:1,scrab_item_num:this.$route.params.movie_num,scrab_type:0}});console.log("Response: "+t),this.scrabInfo=t.data,this.scrabInfo.scrab_type==0&&this.scrabInfo.member_num!=0&&(this.wishWatchValue=-1,this.watchingValue=1),this.scrabInfo||(this.watchingValue=-1)}catch(t){console.log("Error: "+t)}},async getReview(){try{const s=await m.get("/getReviewInfo",{params:{member_num:this.member_num,review_item_type:1,review_item_num:this.$route.params.movie_num}});this.reviewInfo=s.data}catch(s){console.log("Error : "+s)}},cancleComment(){this.modalActive=!1},textChange(){this.$refs.textTarget.style.height="auto",this.$refs.textTarget.style.height=this.$refs.textTarget.scrollHeight+"px"}}};const o=s=>(B("data-v-9680e73b"),s=s(),k(),s),I=o(()=>e("h1",null,"영화 상세 화면",-1)),V={class:"movie-detail-header"},F={class:"movie-post"},x={class:"movie-post-summary"},W={key:0},T={key:1},E={key:2},M={class:"movie-summary"},N={class:"movie-info"},R={class:"movie-image"},S={class:"movie-image-child1"},U={class:"movie-image-child2"},L=["src"],G={class:"movie-detail-info"},j={class:"section-review"},P=o(()=>e("div",{class:"movie-review"},[e("div",{class:"review-star"},[e("div",null," 별그림 ")]),e("div",{class:"review-btn"},[e("div",null,"평가하기")])],-1)),H={class:"review-buttons"},$=o(()=>e("div",{class:"wish-btn"},"+",-1)),q=o(()=>e("div",{class:"wish-btn"},"+",-1)),z=o(()=>e("div",{class:"comment-btn"},"연필",-1)),J=o(()=>e("div",{class:"watching-btn"},"눈",-1)),K=o(()=>e("div",{class:"watching-btn"},"눈",-1)),O={key:0},Q={key:1},X=o(()=>e("div",null," 내가 쓴 코멘트 ",-1)),Y=o(()=>e("div",null,"프로필 사진",-1)),Z=o(()=>e("ul",null,[e("li",null,[e("button",null,"삭제")]),e("li",null,[e("button",null,"수정")])],-1)),ee={class:"section-movie-detail-info"},te={key:0,class:"modal-main"},se={class:"modal-container"},ie={class:"modal-content"},oe={class:"modal-write-area"},ne=o(()=>e("div",{class:"modal-button-area"},[e("div",{class:"modal-button-content"},[e("p",null,"0/4000"),e("button",null,"저장")])],-1)),ae={class:"movie-person-comment"},ue={class:"movie-persons"},re={class:"person-title"},le=o(()=>e("h2",null,"출연/제작",-1)),ce={class:"person-profile-image"},me=["src"],_e={class:"person-name"},ve={class:"person-role"},he=o(()=>e("div",{class:"person-main"},null,-1)),de=o(()=>e("section",{class:"movie-comments"},[e("div",{class:"comment-title"},[e("h2",null,"코멘트")]),e("div",{class:"comment-main"})],-1));function Ce(s,t,h,ge,i,l){const d=w("router-link");return n(),a("main",null,[I,e("div",V,[e("div",F,[e("div",x,[e("div",null,[e("h1",null,r(i.movieDetails.movie_name),1),e("div",null,r(i.movieDetails.movie_name),1),e("div",null,r(i.movieDetails.movie_open)+" • "+r(i.movieGenreName),1),i.movieDetails.movie_grade==0?(n(),a("div",W,"2시간4분 / 전체")):i.movieDetails.movie_grade==18?(n(),a("div",T,"2시간4분 / 청불")):(n(),a("div",E,"2시간4분 / "+r(i.movieDetails.movie_grade)+"세",1))])])]),e("div",M,[e("section",N,[e("div",R,[e("div",S,[e("div",U,[e("img",{src:l.getImageUrl(`${i.movieDetails.image_oname}`)},null,8,L)])])]),e("div",G,[e("section",j,[P,e("div",H,[i.wishWatchValue==-1?(n(),a("button",{key:0,class:"wish-watch",onClick:t[0]||(t[0]=u=>l.wishWatch())},[$,c(" 보고싶어요 ")])):(n(),a("button",{key:1,class:"wish-watch",onClick:t[1]||(t[1]=u=>l.wishWatch()),style:{"border-color":"pink"}},[q,c(" 보고싶어요 ")])),e("button",{class:"write-comment",onClick:t[2]||(t[2]=u=>l.writeComment())},[z,c(" 코멘트 ")]),i.watchingValue==-1?(n(),a("button",{key:2,class:"watching",onClick:t[3]||(t[3]=u=>l.watching())},[J,c(" 보는중 ")])):(n(),a("button",{key:3,class:"watching",onClick:t[4]||(t[4]=u=>l.watching()),style:{"border-color":"pink"}},[K,c(" 보는중 ")]))])]),(i.watchingValue!=-1||i.wishWatchValue!=-1)&&i.reviewInfo.review_content==""?(n(),a("section",O,[e("div",null,[e("section",null,[e("div",null,[e("div",null,[e("div",null,[e("h3",null,r(s.$store.getters.getUserName)+" 님의 생각을 글로 적어보세요.",1),e("div",null,[e("button",{onClick:t[5]||(t[5]=u=>l.writeComment())},"코멘트 남기기")])])])])])])])):v("",!0),(i.watchingValue!=-1||i.wishWatchValue!=-1)&&i.reviewInfo.review_content!=""?(n(),a("section",Q,[X,e("div",null,[e("div",null,[e("div",null,[e("section",null,[e("div",null,[Y,e("a",null,[e("div",null,[e("div",null,[e("div",null,r(i.reviewInfo.review_content),1)])])]),Z])])])])])])):v("",!0),e("section",ee,r(i.movieDetails.movie_content),1)])])])]),i.modalActive==!0?(n(),a("div",te,[e("div",se,[e("div",ie,[e("header",null,[e("em",null,r(i.movieDetails.movie_name),1),e("div",null,[e("button",{onClick:t[6]||(t[6]=u=>l.cancleComment())},"취소")])]),e("div",oe,[e("textarea",{class:"modal-write-content",rows:"{1}",maxlength:"4000",placeholder:"이 작품에 대한 생각을 자유롭게 표현해주세요.",onInput:t[7]||(t[7]=u=>l.textChange()),ref:"textTarget"},null,544)]),ne])])])):v("",!0),e("div",ae,[e("section",ue,[e("div",re,[le,e("ul",null,[(n(!0),a(b,null,f(i.movieCastList,(u,C)=>(n(),a("li",{key:C},[D(d,{to:{name:"PersonDetail",params:{person_num:u.person_num}},class:"movieCast-details"},{default:y(()=>[e("div",ce,[e("img",{src:l.getProfileImageUrl(`${u.image_oname}`)},null,8,me)]),e("div",null,[e("div",null,[e("div",_e,r(u.person_name),1),e("div",ve,r(u.person_item_role),1)])])]),_:2},1032,["to"])]))),128))])]),he]),de])])}const we=p(A,[["render",Ce],["__scopeId","data-v-9680e73b"]]);export{we as default};
