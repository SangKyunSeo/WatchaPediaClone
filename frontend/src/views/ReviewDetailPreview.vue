<template>
    <div class="wrapper">
        <div class="container">
            <section class="preview-section">
                <div class="preview-container">
                    <div class="preview-content">
                        <a class="preview-writer-info">
                            <div></div>
                            <div class="writer-detail">
                                <div class="writer-name">{{ props.reviewPreview.memberName }}</div>
                                <div class="writer-date">{{ props.reviewPreview.reviewRegdate }}</div>
                            </div>
                        </a>
                        <a class="preview-item-info">
                            <div class="preview-item-detail">
                                <div class="item-name">{{ props.reviewPreview.movieName }}</div>
                                <div class="item-info" v-if="props.reviewPreview.reviewItemType == 1">영화 - {{ props.reviewPreview.movieOpen.substring(0, 4) }}</div>
                                <div class="item-info" v-if="props.reviewPreview.reviewItemType == 2">TV</div>
                            </div>
                        </a>
                        <div class="preview-review-info">
                            <div class="preview-review-detail">
                                <span class="score" v-if="props.reviewPreview.reviewScore == 0 && props.reviewPreview.scrabType == 0">보는중</span>
                                <span class="score" v-if="props.reviewPreview.reviewScore == 0 && props.reviewPreview.scrabType == 1">보고싶어요</span>
                                <span class="score" v-if="props.reviewPreview.reviewScore > 0">{{ props.reviewPreview.reviewScore }}</span>
                            </div>
                        </div>
                    </div>
                    <a class="preview-item-poster">
                        <div class="poster-content">
                            <img :src="getImageUrl(`${props.reviewPreview.imageOname}`)">
                        </div>
                    </a>
                </div>
                <div class="preview-review-content-container">
                    <div class="preview-review-content-detail">
                        <span>{{ props.reviewPreview.reviewContent }}</span>
                    </div>
                </div>
                <div class="preview-review-fav-container">
                    <div class="preview-review-fav-detail">
                        <span class="fav">좋아요 {{ favTotal }}</span>
                        <span class="review">댓글 0</span>
                    </div>
                </div>
            </section>
            <section class="interact-section">
                <hr class="section-divided">
                <div class="interact-container">
                    <div class="interact-content">
                        <div class="interact-detail">
                            <button class="fav-button" v-if="!isFaved" @click="setFav">좋아요</button>
                            <button class="fav-button" v-else style="color: pink;" @click="deleteFav">좋아요</button>
                            <button class="review-button" @click="viewRepleForm">댓글</button>
                        </div>
                    </div>
                </div>
                <hr class="section-divided">
            </section>
            <div class="modal-main" v-if="isRepleModal == true">
                <div class="modal-container">
                    <div class="modal-content">
                    <header>
                        <em>댓글</em>
                        <div>
                        <button @click="cancelReple">취소</button>
                        </div>
                    </header>
                    <div class="modal-write-area">
                        <textarea class="modal-write-content" rows={1} maxlength="4000" placeholder="코멘트에 대한 생각을 자유롭게 표현해주세요." v-model="repleContent"></textarea>
                    </div>
                    <div class="modal-button-area">
                        <div class="modal-button-content">
                        <p>0/4000</p>
                        <button @click="setReple">저장</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            <section class="review-reple-section">
                <div class="review-reple-container">
                    <div class="review-reple-content">
                        <div>댓글1</div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onUpdated } from 'vue';
import type { Ref } from 'vue'
import instance from '@/axios_interceptor';
import {store} from '@/store';
import type { Store } from 'vuex';

onUpdated(()=>{
    getFavTotal();
    getMyFavInfo();
});

const props = defineProps({
    reviewPreview:{
        type: Object,
        required: true
    }
})

const favTotal: Ref<number | null> = ref(0);
const isFaved: Ref<boolean | null> = ref(false);
const loginState: Ref<boolean | null> = ref(store.getters.getLoginState);
const loginMemberNum: Ref<number | null> = ref(store.getters.getUserNum);
const isRepleModal: Ref<boolean | null> = ref(false);
const repleContent: Ref<string> = ref('');

function getImageUrl(name: string){
    const currentURL = window.location.href;
    const path = new URL(`/movieimg/${name}.jpg`, currentURL).href;
    return path;
}

async function getMyFavInfo(){
    try {
        const response = await instance.get('/api/getMyFavInfo', {
            params: {
                member_num: props.reviewPreview.memberNum,
                fav_item_num: props.reviewPreview.reviewItemNum,
                fav_item_type: 2
            }
        })

        console.log("Response <getMyPersonFavInfo> : " + response.data);
        isFaved.value = response.data;

    } catch (error) {
        console.log("Error : " + error);
    }
}

async function setFav(){

    if (loginState.value == false) {
        alert('로그인 후 이용 가능합니다!');
        return;
    }

    try {
        const response = await instance.get('/api/setFav', {
            params: {
                member_num: props.reviewPreview.memberNum,
                fav_item_num: props.reviewPreview.reviewItemNum,
                fav_item_type: 2
            }
        })
        console.log('Response : ' + response);
        getFavTotal();
        getMyFavInfo();

    } catch (error) {
        console.log(error);
    }
}
async function deleteFav(){
    try {
        const reponse = await instance.get('/api/deleteFav', {
            params: {
                member_num: props.reviewPreview.memberNum,
                fav_item_num: props.reviewPreview.reviewItemNum,
                fav_item_type: 2
            }
        })

        console.log("Response : " + reponse);

        isFaved.value = false;
        getFavTotal();
        getMyFavInfo();
    } catch (error) {
        console.log("Error : " + error);
    }
}

async function setReple(){
    if(repleContent.value == ''){
        alert('내용을 입력하세요!');
        return;
    }    
    try{
        const response = await instance.post('/api/setReple','',{
            
            params: {
                member_num: loginMemberNum.value,
                review_num: props.reviewPreview.reviewNum,
                reple_content: repleContent.value,
            }
        })

        if(response.data === true){
            alert('댓글 작성 완료!');
            isRepleModal.value = false;
        }else{
            alert('댓글 작성 실패');
            isRepleModal.value = false;
        }


    }catch(error){
        console.log("Error : " + error);
    }
}

function getFavTotal(){
    axios.get('/api/getFavTotal',{params:{
        fav_item_num: props.reviewPreview.reviewItemNum,
        fav_item_type: 2
    }})
    .then((response) => {
        console.log("Reponse : " + response.data);
        favTotal.value = response.data;

    }).catch((error) => {
        console.log("Error : " + error);
    })
}

function viewRepleForm(){
    if (props.reviewPreview.memberNum == loginMemberNum.value) {
        alert('본인 코멘트에 댓글을 달 수 없습니다!');
        return;
    }

    isRepleModal.value = true;
}

function cancelReple(){
    isRepleModal.value = false;
}

</script>
<style scoped>
.wrapper{
    margin-right: 60px;
    margin-left: 60px;
}
.container{
    margin: 18px 0px 16px;
}
.preview-container{
    display: flex;
    margin-bottom: 18px;
}
.preview-content{
    flex: 1 1 0%;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.7px;
    line-height: 22px;
    overflow: hidden;
}
.preview-writer-info{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(0, 0, 0);
    text-decoration: none;
    cursor: pointer;
}
.writer-detail{
    display: flex;
    align-items: center;
}
.writer-name{
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.2px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(74, 74, 74);
    line-height: 16px;
}
.writer-date{
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.2px;
    color: rgb(120, 120, 120);
    line-height: 16px;
    margin-left: 4px;
}
.preview-item-info{
    color: rgb(0, 0, 0);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(0, 0, 0);
    text-decoration: none;
    outline: rgb(0, 0, 0);
    cursor: pointer;
}
.preview-item-detail{
    color: rgb(0, 0, 0);
}
.item-name{
    color: rgb(0, 0, 0);
    font-size: 16px;
    letter-spacing: -0.6px;
    line-height: 21px;
    margin-top: 3px;
}
.item-info{
    color: rgb(120, 120, 120);
    font-size: 12px;
    letter-spacing: -0.2px;
    line-height: 16px;
    margin-top: 3px;
}
.preview-review-info{
    display: flex;
    margin-top: 5px;
    cursor: pointer;
}
.preview-review-detail{
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(255, 255, 255);
    color: rgb(74, 74, 74);
    font-weight: 400;
    letter-spacing: -0.3px;
    font-size: 13px;
    line-height: 16px;
    box-sizing: border-box;
    height: 24px;
    padding-right: 8px;
    padding-left: 8px;
    border: 1px solid rgb(234, 234, 234);
    border-radius: 13px;
}
.score{
    margin-left: 4px;
    color: rgb(74, 74, 74);
    font-weight: 400;
    letter-spacing: -0.3px;
    font-size: 13px;
    line-height: 16px;
}
.preview-item-poster{
    color: rgb(0, 0, 0);
    outline: rgb(0, 0, 0);
    text-decoration: none;
    cursor: pointer;
}
.poster-content{
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    width: 72px;
    height: 106px;
    border: 0.5px solid rgba(0, 0, 0, 0.16);
    border-radius: 3px;
    background: rgb(248, 248, 248);
    transition: all 300ms ease 0s;
}
.poster-content img{
    vertical-align: top;
    width: 100%;
    height: 100%;
    min-height: 1px;
    opacity: 1;
    object-fit: cover;
    transition: opacity 420ms ease 0s;
    border-style: none;
}
.preview-review-content-container{
    position: relative;
    color: rgb(74, 74, 74);
    font-size: 16px;
    letter-spacing: -0.6px;
    line-height: 25px;
    margin-bottom: 22px;
}
.preview-review-content-detail{
    white-space: pre-wrap;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.2px;
    line-height: 24px;
    overflow: hidden;
    opacity: 1;
    transition: all 400ms ease 0s;
    color: rgb(74, 74, 74);
}
.preview-review-content-detail span{
    white-space: pre-wrap;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: -0.2px;
    line-height: 24px;
}
.preview-review-fav-container{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    height: 40px;
    margin-top: 32px;
}
.preview-review-fav-detail{
    color: rgb(120, 120, 120);
    font-size: 12px;
    letter-spacing: -0.2px;
    line-height: 16px;
}
.fav{
    color: rgb(120, 120, 120);
    font-size: 12px;
    letter-spacing: -0.2px;
    line-height: 16px;
    margin-right: 18px;
}
.review{
    color: rgb(120, 120, 120);
    font-size: 12px;
    letter-spacing: -0.2px;
    line-height: 16px;
}
.section-divided{
    border-width: 0px 0px 1px;
    border-top-style: initial;
    border-right-style: initial;
    border-left-style: initial;
    border-top-color: initial;
    border-right-color: initial;
    border-left-color: initial;
    border-image: initial;
    border-bottom-style: solid;
    border-bottom-color: rgb(240, 240, 240);
}
.interact-content{
    margin: 0px 20px;
}
.interact-detail{
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    height: 43px;
}
.fav-button{
    background: none;
    padding: 0px;
    border: none;
    cursor: pointer;
    display: flex;
    position: relative;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(103, 104, 106);
    font-size: 15px;
    letter-spacing: -0.3px;
    line-height: 18px;
    border-radius: 5px;
    margin: 3px;
    outline: none 0px
}
.fav-button:hover{
    background: rgb(214, 212, 208);
}
.fav-button::after{
    content: "";
    display: block;
    position: absolute;
    right: -4px;
    background: rgb(240, 240, 240);
    width: 1px;
    height: 14px;
}
.review-button{
    background: none;
    padding: 0px;
    border: none;
    cursor: pointer;
    display: flex;
    position: relative;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(103, 104, 106);
    font-size: 15px;
    letter-spacing: -0.3px;
    line-height: 18px;
    border-radius: 5px;
    margin: 3px;
    outline: none 0px;
}
.review-button:hover{
    background: rgb(214, 212, 208);
}
.interact-section{
    margin-right: 60px;
    margin-left: 60px;
}
.modal-main{
    display: block;
    position: fixed;
    inset: 0px;
    z-index: 100;
    background: rgba(0, 0, 0, 0.56);
    overflow: hidden scroll;
}
.modal-container{
    text-align: center;
    padding: 20px 0px;
    overflow: auto;
    position: absolute;
    inset: 0px;
    z-index: 101;
}

.modal-content{
    display: inline-block;
    width: 480px;
    min-height: 460px;
    padding: 16px 20px 18px;
    border-radius: 16px;
    vertical-align: middle;
    height: auto;
    background: rgb(255, 255, 255);
    position: relative;
}

.modal-write-area{
    height: auto;
    overflow: auto;
}
.modal-write-content:focus{
    outline: none;
}

.modal-write-content{
    width: 100%;
    resize: none;
    border: 0;
    margin: 1px 0;
}

.modal-button-area{
    position: absolute;
    right: 0px;
    bottom: 0px;
    margin: 0 auto;
    width: 100%;
}
.modal-button-content{
    display: flex;
    padding: 0px 20px;
    justify-content: center;
    align-items: center;
}
.modal-button-content button{
    margin: 0 0 0 12px;
    padding: 0px 30px;
    height: 28px;
}
</style>