import{u as b,b as d,j as m,_ as y,d as D,o as n,c as r,a as e,t as u,k as _,h as c,i as w,v as C,F as g,e as p,f as I,w as B,p as k,g as A}from"./index-0d538c73.js";const R={name:"MovieDetail",props:{movie_num:{type:Number,default:0}},data(){return{movieDetails:{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""},movieGenreName:"",movieCastList:[{person_item_num:0,person_num:0,item_type:0,item_num:0,person_item_role:"",person_name:"",image_url:"",image_oname:""}],scrabInfo:{scrab_num:0,member_num:0,scrab_item_type:0,scrab_item_num:0,scrab_type:-1},reviewInfo:{review_num:0,member_num:0,review_item_type:0,review_item_num:0,review_content:"",review_score:0,review_regdate:""},wishWatchValue:-1,watchingValue:-1,router:b(),loginState:this.$store.getters.getLoginState,member_num:this.$store.getters.getUserNum,modalActive:!1,isCommentExist:!1,isReviewExist:!1,updateModalActive:!1,reviewList:[{review_num:0,member_num:0,review_item_type:0,review_item_num:0,review_content:"",review_score:0,member_name:"",image_oname:"",scrab_type:0}]}},mounted(){this.getMovieDetail(),this.getMovieGenre(),this.getMovieCast(),this.getReviewList(),this.loginState==!0&&(this.getScrabInfo(),this.getReview())},computed:{},methods:{getMovieDetail(){d.get("/getMovieInfo",{params:{movie_num:this.$route.params.movie_num}}).then(s=>{this.movieDetails=s.data,this.movieDetails.movie_open=this.movieDetails.movie_open.substring(0,4)})},getMovieGenre(){d.get("/getMovieGenre",{params:{movie_num:this.$route.params.movie_num}}).then(s=>{this.movieGenreName=s.data})},getMovieCast(){d.get("/getMovieCast",{params:{movie_num:this.$route.params.movie_num}}).then(s=>{this.movieCastList=s.data})},getImageUrl(s){const t=window.location.href;return new URL(`../movieimg/${s}.jpg`,t).href},getProfileImageUrl(s){const t=window.location.href;return new URL(`../personimg/${s}.jpg`,t).href},async getScrabInfo(){try{const s=await m.get("/getScrabInfo",{params:{movie_num:this.$route.params.movie_num,member_num:this.member_num,scrab_item_type:1}});console.log("Response: "+s),this.scrabInfo=s.data,this.scrabInfo.scrab_type==0?this.watchingValue=1:this.scrabInfo.scrab_type==1&&(this.wishWatchValue=1)}catch(s){console.log("Error: "+s)}},async wishWatch(){if(this.$store.getters.getAccessToken=="")alert("로그인이 필요합니다.");else try{const t=await m.get("/setWishWatch",{params:{member_num:this.member_num,scrab_item_type:1,scrab_item_num:this.$route.params.movie_num,scrab_type:1}});console.log("Response: "+t),this.scrabInfo=t.data,this.scrabInfo.scrab_type==1&&this.scrabInfo.member_num!=0&&(this.wishWatchValue=1,this.watchingValue=-1),this.scrabInfo||(this.wishWatchValue=-1)}catch(t){console.log("Error: "+t)}},writeComment(){this.$store.getters.getAccessToken==""?alert("로그인이 필요합니다."):(console.log("코멘트 작성 버튼 클릭 이벤트 발생"),this.modalActive=!0)},async setReview(){if(this.reviewInfo.review_content=="")alert("코멘트를 작성하세요!");else{this.modalActive=!0;const s=JSON.parse(JSON.stringify({member_num:this.member_num,review_item_type:1,review_item_num:this.$route.params.movie_num,review_score:this.reviewInfo.review_score,review_content:this.reviewInfo.review_content}));try{const t=await m.post("/setReview",s);this.modalActive=!1,this.isCommentExist=!0,console.log("Response: "+t),this.reviewInfo=t.data,this.isReviewExist=!0}catch(t){console.log("Error : "+t)}}},async watching(){if(this.$store.getters.getAccessToken=="")alert("로그인이 필요합니다.");else try{const t=await m.get("/setWishWatch",{params:{member_num:this.member_num,scrab_item_type:1,scrab_item_num:this.$route.params.movie_num,scrab_type:0}});console.log("Response: "+t),this.scrabInfo=t.data,this.scrabInfo.scrab_type==0&&this.scrabInfo.member_num!=0&&(this.wishWatchValue=-1,this.watchingValue=1),this.scrabInfo||(this.watchingValue=-1)}catch(t){console.log("Error: "+t)}},async getReview(){try{const s=await m.get("/getReviewInfo",{params:{member_num:this.member_num,review_item_type:1,review_item_num:this.$route.params.movie_num}});console.log("Response : "+s.data),s.data!==null&&s.data!==void 0&&s.data!==""&&(this.reviewInfo=s.data,this.isReviewExist=!0)}catch(s){console.log("Error : "+s)}},cancleComment(){this.modalActive=!1},textChange(){this.$refs.textTarget.style.height="auto",this.$refs.textTarget.style.height=this.$refs.textTarget.scrollHeight+"px"},async deleteReview(){if(confirm("정말 삭제하시겠습니까?"))try{const t=await m.get("/deleteReview",{params:{review_num:this.reviewInfo.review_num}});console.log("Response : "+t),t.data===!0?(alert("코멘트를 성공적으로 삭제했습니다."),this.isReviewExist=!1,this.setInitReviewInfo()):alert("코멘트 삭제를 실패했습니다.")}catch(t){console.log("Error : "+t)}},setInitReviewInfo(){this.reviewInfo.member_num=0,this.reviewInfo.review_content="",this.reviewInfo.review_item_num=0,this.reviewInfo.review_num=0,this.reviewInfo.review_item_type=0,this.reviewInfo.review_score=0,this.reviewInfo.review_regdate=""},updateComment(){this.updateModalActive=!0},cancleUpdateComment(){this.updateModalActive=!1},async updateReview(){if(this.reviewInfo.review_content=="")alert("수정할 내용을 입력하세요!");else{const s=JSON.parse(JSON.stringify({member_num:this.member_num,review_item_type:1,review_item_num:this.$route.params.movie_num,review_score:this.reviewInfo.review_score,review_content:this.reviewInfo.review_content,review_num:this.reviewInfo.review_num}));try{const t=await m.post("/updateReview",s);this.updateModalActive=!1,console.log("Response: "+t),this.reviewInfo=t.data}catch(t){console.log("Error : "+t)}}},async getReviewList(){try{const s=await m.get("/getReviewList",{params:{review_item_type:1,review_item_num:this.$route.params.movie_num}});console.log("Response <ReviewList> : "+s.data),this.reviewList=s.data}catch(s){console.log("Error : "+s)}}}};const a=s=>(k("data-v-d354cdc3"),s=s(),A(),s),x=a(()=>e("h1",null,"영화 상세 화면",-1)),E={class:"movie-detail-header"},F={class:"movie-post"},V={class:"movie-post-summary"},M={key:0},L={key:1},T={key:2},N={class:"movie-summary"},S={class:"movie-info"},U={class:"movie-image"},W={class:"movie-image-child1"},G={class:"movie-image-child2"},O=["src"],J={class:"movie-detail-info"},j={class:"section-review"},P=a(()=>e("div",{class:"movie-review"},[e("div",{class:"review-star"},[e("div",null," 별그림 ")]),e("div",{class:"review-btn"},[e("div",null,"평가하기")])],-1)),H={class:"review-buttons"},q=a(()=>e("div",{class:"wish-btn"},"+",-1)),z=a(()=>e("div",{class:"wish-btn"},"+",-1)),K=a(()=>e("div",{class:"comment-btn"},"연필",-1)),Q=a(()=>e("div",{class:"comment-btn"},"연필",-1)),X=a(()=>e("div",{class:"watching-btn"},"눈",-1)),Y=a(()=>e("div",{class:"watching-btn"},"눈",-1)),Z={key:0},$={key:1,class:"myComment-section"},ee=a(()=>e("div",{class:"comment-guide"}," 내가 쓴 코멘트 ",-1)),te={class:"comment-container"},se={class:"comment-content-section"},ie={class:"comment-content"},oe=a(()=>e("div",null,"프로필 사진",-1)),ne={class:"comment-ul"},re={class:"comment-li-first"},ae={class:"section-movie-detail-info"},le={key:0,class:"modal-main"},ue={class:"modal-container"},me={class:"modal-content"},ce={class:"modal-write-area"},_e={class:"modal-button-area"},ve={class:"modal-button-content"},de=a(()=>e("p",null,"0/4000",-1)),he={key:1,class:"modal-main"},we={class:"modal-container"},Ce={class:"modal-content"},ge={class:"modal-write-area"},pe={class:"modal-button-area"},fe={class:"modal-button-content"},be=a(()=>e("p",null,"0/4000",-1)),ye={class:"movie-person-comment"},De={class:"movie-persons"},Ie={class:"person-title"},Be=a(()=>e("h2",null,"출연/제작",-1)),ke={class:"person-ul"},Ae={class:"person-profile-image"},Re=["src"],xe={class:"person-name"},Ee={class:"person-role"},Fe=a(()=>e("div",{class:"person-main"},null,-1)),Ve={class:"movie-comments"},Me=a(()=>e("header",null,[e("h2",null,"코멘트"),e("span",null,"개수"),e("div",null,[e("div",null,[e("a",null,"더보기")])])],-1)),Le={class:"comments-list"},Te={class:"comments-card"},Ne={class:"comments-writer-info"},Se={class:"comments-writer"},Ue=a(()=>e("div",{class:"writer-image"},"img",-1)),We={class:"writer-name"},Ge={class:"comments-writer-detail"},Oe=a(()=>e("img",null,null,-1)),Je={key:0},je={key:1},Pe={key:2},He={class:"comments-content"},qe=a(()=>e("div",{class:"comments-fav-info"},[e("span",{class:"comments-fav-img"}),e("em",null,"10"),e("span",{class:"comments-fav-review-img"}),e("em",null,"0")],-1)),ze=a(()=>e("div",{class:"comments-fav"},[e("button",null,"좋아요")],-1)),Ke=a(()=>e("div",{class:"comment-main"},null,-1));function Qe(s,t,h,Xe,o,l){const f=D("router-link");return n(),r("main",null,[x,e("div",E,[e("div",F,[e("div",V,[e("div",null,[e("h1",null,u(o.movieDetails.movie_name),1),e("div",null,u(o.movieDetails.movie_name),1),e("div",null,u(o.movieDetails.movie_open)+" • "+u(o.movieGenreName),1),o.movieDetails.movie_grade==0?(n(),r("div",M,"2시간4분 / 전체")):o.movieDetails.movie_grade==18?(n(),r("div",L,"2시간4분 / 청불")):(n(),r("div",T,"2시간4분 / "+u(o.movieDetails.movie_grade)+"세",1))])])]),e("div",N,[e("section",S,[e("div",U,[e("div",W,[e("div",G,[e("img",{src:l.getImageUrl(`${o.movieDetails.image_oname}`)},null,8,O)])])]),e("div",J,[e("section",j,[P,e("div",H,[o.wishWatchValue==-1?(n(),r("button",{key:0,class:"wish-watch",onClick:t[0]||(t[0]=i=>l.wishWatch())},[q,_(" 보고싶어요 ")])):(n(),r("button",{key:1,class:"wish-watch",onClick:t[1]||(t[1]=i=>l.wishWatch()),style:{"border-color":"pink"}},[z,_(" 보고싶어요 ")])),o.isReviewExist?(n(),r("button",{key:3,class:"write-comment",onClick:t[3]||(t[3]=i=>l.writeComment()),disabled:""},[Q,_(" 코멘트 ")])):(n(),r("button",{key:2,class:"write-comment",onClick:t[2]||(t[2]=i=>l.writeComment())},[K,_(" 코멘트 ")])),o.watchingValue==-1?(n(),r("button",{key:4,class:"watching",onClick:t[4]||(t[4]=i=>l.watching())},[X,_(" 보는중 ")])):(n(),r("button",{key:5,class:"watching",onClick:t[5]||(t[5]=i=>l.watching()),style:{"border-color":"pink"}},[Y,_(" 보는중 ")]))])]),(o.watchingValue!=-1||o.wishWatchValue!=-1)&&!o.isReviewExist?(n(),r("section",Z,[e("div",null,[e("section",null,[e("div",null,[e("div",null,[e("div",null,[e("h3",null,u(s.$store.getters.getUserName)+" 님의 생각을 글로 적어보세요.",1),e("div",null,[e("button",{onClick:t[6]||(t[6]=i=>l.writeComment())},"코멘트 남기기")])])])])])])])):c("",!0),o.isReviewExist?(n(),r("section",$,[ee,e("div",te,[e("div",null,[e("div",null,[e("section",se,[e("div",ie,[oe,e("a",null,[e("div",null,[e("div",null,[e("div",null,u(o.reviewInfo.review_content),1)])])]),e("ul",ne,[e("li",re,[e("button",{onClick:t[7]||(t[7]=i=>l.deleteReview())},"삭제")]),e("li",null,[e("button",{onClick:t[8]||(t[8]=i=>l.updateComment())},"수정")])])])])])])])])):c("",!0),e("section",ae,u(o.movieDetails.movie_content),1)])])])]),o.modalActive==!0?(n(),r("div",le,[e("div",ue,[e("div",me,[e("header",null,[e("em",null,u(o.movieDetails.movie_name),1),e("div",null,[e("button",{onClick:t[9]||(t[9]=i=>l.cancleComment())},"취소")])]),e("div",ce,[w(e("textarea",{class:"modal-write-content",rows:"{1}",maxlength:"4000",placeholder:"이 작품에 대한 생각을 자유롭게 표현해주세요.",onInput:t[10]||(t[10]=i=>l.textChange()),ref:"textTarget","onUpdate:modelValue":t[11]||(t[11]=i=>o.reviewInfo.review_content=i)},null,544),[[C,o.reviewInfo.review_content]])]),e("div",_e,[e("div",ve,[de,e("button",{onClick:t[12]||(t[12]=i=>l.setReview())},"저장")])])])])])):c("",!0),o.updateModalActive==!0?(n(),r("div",he,[e("div",we,[e("div",Ce,[e("header",null,[e("em",null,u(o.movieDetails.movie_name),1),e("div",null,[e("button",{onClick:t[13]||(t[13]=i=>l.cancleUpdateComment())},"취소")])]),e("div",ge,[w(e("textarea",{class:"modal-write-content",rows:"{1}",maxlength:"4000",placeholder:"이 작품에 대한 생각을 자유롭게 표현해주세요.",onInput:t[14]||(t[14]=i=>l.textChange()),ref:"textTarget","onUpdate:modelValue":t[15]||(t[15]=i=>o.reviewInfo.review_content=i)},null,544),[[C,o.reviewInfo.review_content]])]),e("div",pe,[e("div",fe,[be,e("button",{onClick:t[16]||(t[16]=i=>l.updateReview())},"수정")])])])])])):c("",!0),e("div",ye,[e("section",De,[e("div",Ie,[Be,e("ul",ke,[(n(!0),r(g,null,p(o.movieCastList,(i,v)=>(n(),r("li",{class:"person-li",key:v},[I(f,{to:{name:"PersonDetail",params:{person_num:i.person_num}},class:"movieCast-details"},{default:B(()=>[e("div",Ae,[e("img",{src:l.getProfileImageUrl(`${i.image_oname}`)},null,8,Re)]),e("div",null,[e("div",null,[e("div",xe,u(i.person_name),1),e("div",Ee,u(i.person_item_role),1)])])]),_:2},1032,["to"])]))),128))])]),Fe]),e("section",Ve,[Me,e("ul",Le,[(n(!0),r(g,null,p(o.reviewList,(i,v)=>(n(),r("li",{key:v},[e("div",Te,[e("div",Ne,[e("div",Se,[e("a",null,[Ue,e("div",We,u(i.member_name),1)])]),e("div",Ge,[Oe,i.review_score!=0?(n(),r("span",Je,"2.0")):c("",!0),i.review_score==0&&i.scrab_type==0?(n(),r("span",je,"보는중")):c("",!0),i.review_score==0&&i.scrab_type==1?(n(),r("span",Pe,"보고싶어요")):c("",!0)])]),e("div",He,[e("a",null,[e("div",null,[e("div",null,u(i.review_content),1)])])]),qe,ze])]))),128))]),Ke])])])}const Ze=y(R,[["render",Qe],["__scopeId","data-v-d354cdc3"]]);export{Ze as default};
