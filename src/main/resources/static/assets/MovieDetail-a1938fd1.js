import{u as h,b as r,_ as p,d as g,o as c,c as m,a as e,t as i,i as _,F as C,e as D,f,w,p as B,g as k}from"./index-dbde6d9d.js";const A={name:"MovieDetail",props:{movie_num:{type:Number,default:0}},data(){return{movieDetails:{movie_num:0,movie_name:"",movie_open:"",movie_content:"",movie_grade:0,image_url:"",image_oname:""},movieGenreName:"",movieCastList:[{person_item_num:0,person_num:0,item_type:0,item_num:0,person_item_role:"",person_name:"",image_url:"",image_oname:""}],router:h()}},mounted(){this.getMovieDetail(),this.getMovieGenre(),this.getMovieCast()},methods:{getMovieDetail(){r.get("/getMovieInfo",{params:{movie_num:this.$route.params.movie_num}}).then(s=>{this.movieDetails=s.data,this.movieDetails.movie_open=this.movieDetails.movie_open.substring(0,4)})},getMovieGenre(){r.get("/getMovieGenre",{params:{movie_num:this.$route.params.movie_num}}).then(s=>{this.movieGenreName=s.data})},getMovieCast(){r.get("/getMovieCast",{params:{movie_num:this.$route.params.movie_num}}).then(s=>{this.movieCastList=s.data})},getImageUrl(s){const t=window.location.href;return new URL(`../movieimg/${s}.jpg`,t).href},getProfileImageUrl(s){const t=window.location.href;return new URL(`../personimg/${s}.jpg`,t).href},wishWatch(){this.$store.getters.getAccessToken==""?alert("로그인이 필요합니다."):alert("로그인이 되어있으니 보고싶어요 기능 ㄱㄱ")},writeComment(){this.$store.getters.getAccessToken==""?alert("로그인이 필요합니다."):alert("로그인 되어있으니 코멘트 작성 기능 ㄱㄱ")},watching(){this.$store.getters.getAccessToken==""?alert("로그인이 필요합니다."):alert("로그인이 되어있으니 보는중 기능 ㄱㄱ")}}};const n=s=>(B("data-v-5cc4f44c"),s=s(),k(),s),M=n(()=>e("h1",null,"영화 상세 화면",-1)),b={class:"movie-detail-header"},y={class:"movie-post"},F={class:"movie-post-summary"},T={key:0},I={key:1},L={key:2},U={class:"movie-summary"},x={class:"movie-info"},N={class:"movie-image"},G={class:"movie-image-child1"},R={class:"movie-image-child2"},S=["src"],E={class:"movie-detail-info"},P={class:"section-review"},V=n(()=>e("div",{class:"movie-review"},[e("div",{class:"review-star"},[e("div",null," 별그림 ")]),e("div",{class:"review-btn"},[e("div",null,"평가하기")])],-1)),j={class:"review-buttons"},W=n(()=>e("div",{class:"wish-btn"},"+",-1)),$=n(()=>e("div",{class:"comment-btn"},"연필",-1)),q=n(()=>e("div",{class:"watching-btn"},"눈",-1)),z={class:"section-movie-detail-info"},H={class:"movie-person-comment"},J={class:"movie-persons"},K={class:"person-title"},O=n(()=>e("h2",null,"출연/제작",-1)),Q={class:"person-profile-image"},X=["src"],Y={class:"person-name"},Z={class:"person-role"},ee=n(()=>e("div",{class:"person-main"},null,-1)),se=n(()=>e("section",{class:"movie-comments"},[e("div",{class:"comment-title"},[e("h2",null,"코멘트")]),e("div",{class:"comment-main"})],-1));function te(s,t,u,oe,o,l){const v=g("router-link");return c(),m("main",null,[M,e("div",b,[e("div",y,[e("div",F,[e("div",null,[e("h1",null,i(o.movieDetails.movie_name),1),e("div",null,i(o.movieDetails.movie_name),1),e("div",null,i(o.movieDetails.movie_open)+" • "+i(o.movieGenreName),1),o.movieDetails.movie_grade==0?(c(),m("div",T,"2시간4분 / 전체")):o.movieDetails.movie_grade==18?(c(),m("div",I,"2시간4분 / 청불")):(c(),m("div",L,"2시간4분 / "+i(o.movieDetails.movie_grade)+"세",1))])])]),e("div",U,[e("section",x,[e("div",N,[e("div",G,[e("div",R,[e("img",{src:l.getImageUrl(`${o.movieDetails.image_oname}`)},null,8,S)])])]),e("div",E,[e("section",P,[V,e("div",j,[e("button",{class:"wish-watch",onClick:t[0]||(t[0]=a=>l.wishWatch())},[W,_(" 보고싶어요 ")]),e("button",{class:"write-comment",onClick:t[1]||(t[1]=a=>l.writeComment())},[$,_(" 코멘트 ")]),e("button",{class:"watching",onClick:t[2]||(t[2]=a=>l.watching())},[q,_(" 보는중 ")])])]),e("section",z,i(o.movieDetails.movie_content),1)])])])]),e("div",H,[e("section",J,[e("div",K,[O,e("ul",null,[(c(!0),m(C,null,D(o.movieCastList,(a,d)=>(c(),m("li",{key:d},[f(v,{to:{name:"PersonDetail",params:{person_num:a.person_num}},class:"movieCast-details"},{default:w(()=>[e("div",Q,[e("img",{src:l.getProfileImageUrl(`${a.image_oname}`)},null,8,X)]),e("div",null,[e("div",null,[e("div",Y,i(a.person_name),1),e("div",Z,i(a.person_item_role),1)])])]),_:2},1032,["to"])]))),128))])]),ee]),se])])}const ne=p(A,[["render",te],["__scopeId","data-v-5cc4f44c"]]);export{ne as default};
