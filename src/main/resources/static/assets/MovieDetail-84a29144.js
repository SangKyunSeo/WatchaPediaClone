import{u as h,b as u,_ as g,d as p,o,c as n,a as e,t as c,j as l,F as C,e as w,f as D,w as b,p as f,g as k}from"./index-c7b2efb9.js";const B={name:"MovieDetail",props:{movie_num:{type:Number,default:0}},data(){return{movieDetails:{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""},movieGenreName:"",movieCastList:[{person_item_num:0,person_num:0,item_type:0,item_num:0,person_item_role:"",person_name:"",image_url:"",image_oname:""}],scrabInfo:{scrab_num:0,member_num:0,scrab_item_type:0,scrab_item_num:0,scrab_type:0},wishWatchValue:0,watchingValue:0,router:h(),loginState:this.$store.getters.getLoginState,member_num:this.$store.getters.getUserNum}},mounted(){this.getMovieDetail(),this.getMovieGenre(),this.getMovieCast(),this.loginState==!0&&this.getScrabInfo()},methods:{getMovieDetail(){u.get("/getMovieInfo",{params:{movie_num:this.$route.params.movie_num}}).then(s=>{this.movieDetails=s.data,this.movieDetails.movie_open=this.movieDetails.movie_open.substring(0,4)})},getMovieGenre(){u.get("/getMovieGenre",{params:{movie_num:this.$route.params.movie_num}}).then(s=>{this.movieGenreName=s.data})},getMovieCast(){u.get("/getMovieCast",{params:{movie_num:this.$route.params.movie_num}}).then(s=>{this.movieCastList=s.data})},getImageUrl(s){const t=window.location.href;return new URL(`../movieimg/${s}.jpg`,t).href},getProfileImageUrl(s){const t=window.location.href;return new URL(`../personimg/${s}.jpg`,t).href},getScrabInfo(){u.get("/getScrabInfo",{params:{movie_num:this.$route.params.movie_num,member_num:this.member_num}}).then(s=>{this.scrabInfo=s.data,this.scrabInfo.scrab_type==1?this.wishWatchValue=1:this.scrabInfo.scrab_type==2&&(this.watchingValue=1)})},wishWatch(){this.$store.getters.getAccessToken==""?alert("로그인이 필요합니다."):alert("로그인이 되어있으니 보고싶어요 기능 ㄱㄱ")},writeComment(){this.$store.getters.getAccessToken==""?alert("로그인이 필요합니다."):alert("로그인 되어있으니 코멘트 작성 기능 ㄱㄱ")},watching(){this.$store.getters.getAccessToken==""?alert("로그인이 필요합니다."):alert("로그인이 되어있으니 보는중 기능 ㄱㄱ")}}};const a=s=>(f("data-v-3d11a978"),s=s(),k(),s),y=a(()=>e("h1",null,"영화 상세 화면",-1)),I={class:"movie-detail-header"},A={class:"movie-post"},F={class:"movie-post-summary"},M={key:0},S={key:1},T={key:2},L={class:"movie-summary"},U={class:"movie-info"},V={class:"movie-image"},N={class:"movie-image-child1"},x={class:"movie-image-child2"},G=["src"],W={class:"movie-detail-info"},R={class:"section-review"},E=a(()=>e("div",{class:"movie-review"},[e("div",{class:"review-star"},[e("div",null," 별그림 ")]),e("div",{class:"review-btn"},[e("div",null,"평가하기")])],-1)),j={class:"review-buttons"},P=a(()=>e("div",{class:"wish-btn"},"+",-1)),$=a(()=>e("div",{class:"wish-btn"},"+",-1)),q=a(()=>e("div",{class:"comment-btn"},"연필",-1)),z=a(()=>e("div",{class:"watching-btn"},"눈",-1)),H=a(()=>e("div",{class:"watching-btn"},"눈",-1)),J={class:"section-movie-detail-info"},K={class:"movie-person-comment"},O={class:"movie-persons"},Q={class:"person-title"},X=a(()=>e("h2",null,"출연/제작",-1)),Y={class:"person-profile-image"},Z=["src"],ee={class:"person-name"},se={class:"person-role"},te=a(()=>e("div",{class:"person-main"},null,-1)),ie=a(()=>e("section",{class:"movie-comments"},[e("div",{class:"comment-title"},[e("h2",null,"코멘트")]),e("div",{class:"comment-main"})],-1));function oe(s,t,_,ne,i,r){const v=p("router-link");return o(),n("main",null,[y,e("div",I,[e("div",A,[e("div",F,[e("div",null,[e("h1",null,c(i.movieDetails.movie_name),1),e("div",null,c(i.movieDetails.movie_name),1),e("div",null,c(i.movieDetails.movie_open)+" • "+c(i.movieGenreName),1),i.movieDetails.movie_grade==0?(o(),n("div",M,"2시간4분 / 전체")):i.movieDetails.movie_grade==18?(o(),n("div",S,"2시간4분 / 청불")):(o(),n("div",T,"2시간4분 / "+c(i.movieDetails.movie_grade)+"세",1))])])]),e("div",L,[e("section",U,[e("div",V,[e("div",N,[e("div",x,[e("img",{src:r.getImageUrl(`${i.movieDetails.image_oname}`)},null,8,G)])])]),e("div",W,[e("section",R,[E,e("div",j,[i.wishWatchValue==0?(o(),n("button",{key:0,class:"wish-watch",onClick:t[0]||(t[0]=m=>r.wishWatch())},[P,l(" 보고싶어요 ")])):(o(),n("button",{key:1,class:"wish-watch",onClick:t[1]||(t[1]=m=>r.wishWatch()),disabled:""},[$,l(" 보고싶어요 ")])),e("button",{class:"write-comment",onClick:t[2]||(t[2]=m=>r.writeComment())},[q,l(" 코멘트 ")]),i.watchingValue==0?(o(),n("button",{key:2,class:"watching",onClick:t[3]||(t[3]=m=>r.watching())},[z,l(" 보는중 ")])):(o(),n("button",{key:3,class:"watching",onClick:t[4]||(t[4]=m=>r.watching()),disabled:""},[H,l(" 보는중 ")]))])]),e("section",J,c(i.movieDetails.movie_content),1)])])])]),e("div",K,[e("section",O,[e("div",Q,[X,e("ul",null,[(o(!0),n(C,null,w(i.movieCastList,(m,d)=>(o(),n("li",{key:d},[D(v,{to:{name:"PersonDetail",params:{person_num:m.person_num}},class:"movieCast-details"},{default:b(()=>[e("div",Y,[e("img",{src:r.getProfileImageUrl(`${m.image_oname}`)},null,8,Z)]),e("div",null,[e("div",null,[e("div",ee,c(m.person_name),1),e("div",se,c(m.person_item_role),1)])])]),_:2},1032,["to"])]))),128))])]),te]),ie])])}const me=g(B,[["render",oe],["__scopeId","data-v-3d11a978"]]);export{me as default};
