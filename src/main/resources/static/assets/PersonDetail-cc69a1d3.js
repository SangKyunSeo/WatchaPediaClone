import{u as s,_ as i,o as c,c as d,j as v}from"./index-1e0643e3.js";const o={name:"PersonDetail",props:{person_num:{type:Number,default:0}},data(){return{router:s()}},mounted(){alert(this.person_num)},methods:{getImageUrl(a){const t=window.location.href;return new URL(`../movieimg/${a}.jpg`,t).href}}};const n=v('<h1 data-v-4c60f793>인물 상세 화면</h1><div class="movie-detail-header" data-v-4c60f793><div class="movie-post" data-v-4c60f793><div class="movie-post-summary" data-v-4c60f793></div></div><div class="movie-summary" data-v-4c60f793><section class="movie-info" data-v-4c60f793><div class="movie-image" data-v-4c60f793><div class="movie-image-child1" data-v-4c60f793></div></div><div class="movie-detail-info" data-v-4c60f793><section class="section-review" data-v-4c60f793><div class="movie-review" data-v-4c60f793><div class="review-star" data-v-4c60f793><div data-v-4c60f793> 별그림 </div></div><div class="review-btn" data-v-4c60f793><div data-v-4c60f793>평가하기</div></div></div><div class="review-buttons" data-v-4c60f793><button class="wish-watch" data-v-4c60f793><div class="wish-btn" data-v-4c60f793>+</div> 보고싶어요 </button><button class="write-comment" data-v-4c60f793><div class="comment-btn" data-v-4c60f793>연필</div> 코멘트 </button><button class="watching" data-v-4c60f793><div class="watching-btn" data-v-4c60f793>눈</div> 보는중 </button></div></section></div></section></div></div>',2),u=[n];function r(a,t,e,l,f,m){return c(),d("main",null,u)}const p=i(o,[["render",r],["__scopeId","data-v-4c60f793"]]);export{p as default};
