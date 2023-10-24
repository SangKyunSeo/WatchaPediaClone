import{u as h,b as _,_ as p,d as g,o as a,c,a as e,t as o,i as r,F as C,e as D,f as w,w as f,p as B,g as k}from"./index-5adf75e5.js";const b={name:"MovieDetail",props:{movie_num:{type:Number,default:0}},data(){return{movieDetails:{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""},movieGenreName:"",movieCastList:[{person_item_num:0,person_num:0,item_type:0,item_num:0,person_item_role:"",person_name:"",image_url:"",image_oname:""}],router:h()}},mounted(){this.getMovieDetail(),this.getMovieGenre(),this.getMovieCast()},methods:{getMovieDetail(){_.get("/getMovieInfo",{params:{movie_num:this.$route.params.movie_num}}).then(s=>{this.movieDetails=s.data,this.movieDetails.movie_open=this.movieDetails.movie_open.substring(0,4)})},getMovieGenre(){_.get("/getMovieGenre",{params:{movie_num:this.$route.params.movie_num}}).then(s=>{this.movieGenreName=s.data})},getMovieCast(){_.get("/getMovieCast",{params:{movie_num:this.$route.params.movie_num}}).then(s=>{this.movieCastList=s.data})},getImageUrl(s){const n=window.location.href;return new URL(`../movieimg/${s}.jpg`,n).href},getProfileImageUrl(s){const n=window.location.href;return new URL(`../personimg/${s}.jpg`,n).href},wishWatch(){this.$store.getters.getAccessToken==""?alert("로그인이 필요합니다."):alert("로그인이 되어있으니 보고싶어요 기능 ㄱㄱ")},writeComment(){this.$store.getters.getAccessToken==""?alert("로그인이 필요합니다."):alert("로그인 되어있으니 코멘트 작성 기능 ㄱㄱ")},watching(){this.$store.getters.getAccessToken==""?alert("로그인이 필요합니다."):alert("로그인이 되어있으니 보는중 기능 ㄱㄱ")}}};const i=s=>(B("data-v-0b5376dd"),s=s(),k(),s),A=i(()=>e("h1",null,"영화 상세 화면",-1)),M={class:"movie-detail-header"},y={class:"movie-post"},F={class:"movie-post-summary"},T={key:0},I={key:1},L={key:2},U={class:"movie-summary"},x={class:"movie-info"},N={class:"movie-image"},G={class:"movie-image-child1"},R={class:"movie-image-child2"},S=["src"],E={class:"movie-detail-info"},P={class:"section-review"},V=i(()=>e("div",{class:"movie-review"},[e("div",{class:"review-star"},[e("div",null," 별그림 ")]),e("div",{class:"review-btn"},[e("div",null,"평가하기")])],-1)),j={class:"review-buttons"},W=i(()=>e("div",{class:"wish-btn"},"+",-1)),$=i(()=>e("button",{class:"write-comment"},[e("div",{class:"comment-btn"},"연필"),r(" 코멘트 ")],-1)),q=i(()=>e("button",{class:"watching"},[e("div",{class:"watching-btn"},"눈"),r(" 보는중 ")],-1)),z={class:"section-movie-detail-info"},H={class:"movie-person-comment"},J={class:"movie-persons"},K={class:"person-title"},O=i(()=>e("h2",null,"출연/제작",-1)),Q={class:"person-profile-image"},X=["src"],Y={class:"person-name"},Z={class:"person-role"},ee=i(()=>e("div",{class:"person-main"},null,-1)),se=i(()=>e("section",{class:"movie-comments"},[e("div",{class:"comment-title"},[e("h2",null,"코멘트")]),e("div",{class:"comment-main"})],-1));function te(s,n,u,oe,t,l){const v=g("router-link");return a(),c("main",null,[A,e("div",M,[e("div",y,[e("div",F,[e("div",null,[e("h1",null,o(t.movieDetails.movie_name),1),e("div",null,o(t.movieDetails.movie_name),1),e("div",null,o(t.movieDetails.movie_open)+" • "+o(t.movieGenreName),1),t.movieDetails.movie_grade==0?(a(),c("div",T,"2시간4분 / 전체")):t.movieDetails.movie_grade==18?(a(),c("div",I,"2시간4분 / 청불")):(a(),c("div",L,"2시간4분 / "+o(t.movieDetails.movie_grade)+"세",1))])])]),e("div",U,[e("section",x,[e("div",N,[e("div",G,[e("div",R,[e("img",{src:l.getImageUrl(`${t.movieDetails.image_oname}`)},null,8,S)])])]),e("div",E,[e("section",P,[V,e("div",j,[e("button",{class:"wish-watch",onClick:n[0]||(n[0]=m=>l.wishWatch())},[W,r(" 보고싶어요 ")]),$,q])]),e("section",z,o(t.movieDetails.movie_content),1)])])])]),e("div",H,[e("section",J,[e("div",K,[O,e("ul",null,[(a(!0),c(C,null,D(t.movieCastList,(m,d)=>(a(),c("li",{key:d},[w(v,{to:{name:"PersonDetail",params:{person_num:m.person_num}},class:"movieCast-details"},{default:f(()=>[e("div",Q,[e("img",{src:l.getProfileImageUrl(`${m.image_oname}`)},null,8,X)]),e("div",null,[e("div",null,[e("div",Y,o(m.person_name),1),e("div",Z,o(m.person_item_role),1)])])]),_:2},1032,["to"])]))),128))])]),ee]),se])])}const ne=p(b,[["render",te],["__scopeId","data-v-0b5376dd"]]);export{ne as default};