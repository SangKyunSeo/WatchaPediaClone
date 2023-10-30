<template>
    <div>리뷰 상세 페이지</div>
    <br>
    <section class="preview-wrapper">
        <Preview v-if="reviewPreview" :reviewPreview="reviewPreview"/>
        
    </section>
</template>

<script setup lang="ts">

import Preview from './ReviewDetailPreview.vue';
import { ref, onMounted } from 'vue';
import { useRoute} from 'vue-router';
import type { Ref } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import instance from '@/axios_interceptor';

interface reviewPreviewType{
    reviewNum: number,
    reviewItemType: number,
    reviewItemNum: number,
    reviewContent: string,
    reviewScore: number,
    reviewRegdate: string,
    memberNum: number,
    memberName: string,
    movieName: string,
    movieOpen: string,
    imageOname: string,
    scrabType: number
}

const route: RouteLocationNormalizedLoaded = useRoute();
const reviewNum: Ref<number | null> = ref(0);
const reviewItemType: Ref<Number | null> = ref(0);
const reviewItemNum: Ref<Number | null> = ref(0);

onMounted(()=>{
    reviewNum.value = Number(route.params.reviewNum);
    reviewItemType.value = Number(route.params.reviewItemType);
    reviewItemNum.value = Number(route.params.reviewItemNum);
    getReviewPreview();
});

const reviewPreview: Ref<reviewPreviewType | null> = ref({
        reviewNum: 0,
        reviewItemType: 0,
        reviewItemNum: 0,
        reviewContent: '',
        reviewScore: 0,
        reviewRegdate: '',
        memberNum: 0,
        memberName: '',
        movieName: '',
        movieOpen: '',
        imageOname: '',
        scrabType: 0
});

async function getReviewPreview(){
    try{
        const response = await instance.get('/api/getReviewPreview', {
            params: {
                reviewNum: reviewNum.value,
                reviewItemType: reviewItemType.value,
                reviewItemNum: reviewItemNum.value
            }
        })

        console.log("Response : " + response.data);
        reviewPreview.value = response.data;
        
        console.log("[ReviewPreview] : " + reviewPreview.value);
    }catch(error){
        console.log("Error : " + error);
    }
}
</script>
<style scoped>
.preview-wrapper{
    padding-top: 62px;
    padding-bottom: unset;
}

</style>
