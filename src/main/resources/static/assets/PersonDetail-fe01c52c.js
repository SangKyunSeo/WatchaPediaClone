import{u as e,_ as o,o as n,c as s,l as r}from"./index-830b0da1.js";const u={name:"PersonDetail",props:{person_num:{type:Number,default:0}},data(){return{router:e()}},mounted(){},methods:{getImageUrl(d){const a=window.location.href;return new URL(`../movieimg/${d}.jpg`,a).href}}};const i=r('<h1 data-v-6f71d2d6>인물 상세 화면</h1><div class="person-wrapper" data-v-6f71d2d6><section class="person-section" data-v-6f71d2d6><div class="person-intro-container" data-v-6f71d2d6><div class="person-intro-content" data-v-6f71d2d6><div class="person-intro-details" data-v-6f71d2d6><div class="person-intro-image-container" data-v-6f71d2d6><div data-v-6f71d2d6>이미지</div></div></div><div class="person-intro-detail" data-v-6f71d2d6><h1 data-v-6f71d2d6>actor_name</h1><p data-v-6f71d2d6>actor_role</p></div></div><hr data-v-6f71d2d6><button class="person-fav-button" data-v-6f71d2d6><div data-v-6f71d2d6>따봉이미지</div><span data-v-6f71d2d6>좋아요 0명이 이 인물을 좋아합니다.</span></button></div></section><hr data-v-6f71d2d6><div data-v-6f71d2d6></div></div>',2),c=[i];function v(d,a,t,p,f,_){return n(),s("main",null,c)}const C=o(u,[["render",v],["__scopeId","data-v-6f71d2d6"]]);export{C as default};
