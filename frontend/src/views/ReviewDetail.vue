<template>
    <div>리뷰 상세 페이지</div>
    <br>
    <div>
        <h2>{{ reviewNum }}</h2>
        <h2>{{ reviewItemType }}</h2>
        
        <Preview />
    </div>
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
    reviewRegDate: string,
    memberNum: number,
    memberName: string,
    movieName: string,
    movieOpen: string,
    imageOname: string
}

const route: RouteLocationNormalizedLoaded = useRoute();
const reviewNum: Ref<number | null> = ref(0);
const reviewItemType: Ref<Number | null> = ref(0);


onMounted(()=>{
    reviewNum.value = Number(route.params.reviewNum);
    reviewItemType.value = Number(route.params.reviewItemType);
});

let reviewPreview: reviewPreviewType = {
    reviewNum: 0,
    reviewItemType: 0,
    reviewItemNum: 0,
    reviewContent: '',
    reviewScore: 0,
    reviewRegDate: '',
    memberNum: 0,
    memberName: '',
    movieName: '',
    movieOpen: '',
    imageOname: ''
}

async function getReviewPreview(reviewNum: number, reviewItemType: number){
    try{
        const response = await instance.get('/api/getReviewPreview', {
            params: {
                reviewNum: reviewNum,
                reviewItemType: reviewItemType
            }
        })

        console.log("Response : " + response.data);
        reviewPreview = response.data;

    }catch(error){
        console.log("Error : " + error);
    }
    
}


</script>
<style scoped>

</style>
