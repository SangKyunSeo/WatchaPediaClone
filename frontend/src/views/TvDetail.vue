<script lang="ts">
import {useRouter} from 'vue-router';
import axios from 'axios';
import { useStore } from 'vuex';

//import TheWelcome from '../components/TheWelcome.vue'
export default{
  name: "TvDetail",
  props:{
    tv_num: {
      type: Number,
      default: 0
    }
  },
  data(){
    return{
      tvDetails:{
        tv_num: 0,
        tv_name: '',
        tv_open: '',
        tv_content: '',
        tv_grade: 0,
        tv_ott: 0,
        image_oname: ''
      },
      tvGenreName: '',
      router: useRouter()
    }
  },
  mounted(){
    this.getTvDetail();
    this.getTvGenre();
  },
  methods: {
    getTvDetail(){
      axios.get('/tvDetail',{
        params:{
        tv_num: this.$route.params.tv_num
      }})
      .then((result) => {
        this.tvDetails = result.data;
        this.tvDetails.tv_open =  this.tvDetails.tv_open.substring(0,4);
      })
    },
    getTvGenre() {
      axios.get('/getTvGenre', {
        params: {
          tv_num: this.$route.params.tv_num
        }
      })
        .then((result) => {
          this.tvGenreName = result.data;
        })
    },
    getImageUrl(name: string): string {
      const currentURL = window.location.href;
      const path = new URL(`../tvimg/${name}.jpg`, currentURL).href;
      return path;
    },     
  }
}
</script>

<template>
  <main>
    <h1>Tv 상세 화면</h1>
    <div class="movie-detail-header">
      <div class="movie-post">
        <div class="movie-post-summary">
          <div>
            <h1>{{ tvDetails.tv_name }}</h1>
            <div>{{ tvDetails.tv_name }}</div>
            <div>{{ tvDetails.tv_open }} &bull; {{ tvGenreName }}</div>
            <div v-if="tvDetails.tv_grade == 0">2시간4분 / 전체</div>
            <div v-else-if="tvDetails.tv_grade == 18">2시간4분 / 청불</div>
            <div v-else>2시간4분 / {{ tvDetails.tv_grade }}세</div>
          </div>
        </div>
      </div>
      <div class="movie-summary">
          <section class="movie-info">
            <div class="movie-image">
              <div class="movie-image-child1">
                <div class="movie-image-child2">
                  <img :src="getImageUrl(`${tvDetails.image_oname}`)" />
                </div>
              </div>
            </div>
            <!-- <div class="movie-detail-info">
              <section class="section-review">
                <div class="movie-review">
                  <div class="review-star">
                    <div>
                      별그림
                    </div>
                  </div>
                  <div class="review-btn">
                    <div>평가하기</div>
                  </div>
                </div>
                <div class="review-buttons">
                  <button class="wish-watch" @click="wishWatch()" v-if="wishWatchValue == -1">
                    <div class="wish-btn">+</div>
                    보고싶어요
                  </button>
                  <button class="wish-watch" @click="wishWatch()" v-else style="border-color: pink;">
                      <div class="wish-btn">+</div>
                      보고싶어요
                    </button>
                  <button class="write-comment" @click="writeComment()" v-if="!isReviewExist">
                    <div class="comment-btn">연필</div>
                      코멘트
                  </button>
                  <button class="write-comment" @click="writeComment()" v-else disabled>
                    <div class="comment-btn">연필</div>
                      코멘트
                  </button>
                  <button class="watching" @click="watching()" v-if="watchingValue == -1">
                    <div class="watching-btn">눈</div>
                    보는중
                  </button>
                  <button class="watching" @click="watching()" v-else style="border-color: pink;">
                      <div class="watching-btn">눈</div>
                      보는중
                    </button>
                </div>
              </section>
              <section v-if="(watchingValue != -1 || wishWatchValue != -1) && !isReviewExist">
                <div>
                  <section>
                    <div>
                      <div>
                        <div>
                          <h3>{{ $store.getters.getUserName }} 님의 생각을 글로 적어보세요.</h3>
                          <div>
                            <button @click="writeComment()">코멘트 남기기</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
              <section class="myComment-section" v-if="isReviewExist">
                  <div class="comment-guide">
                    내가 쓴 코멘트
                  </div>
                  <div class="comment-container">
                    <div>
                      <div>
                        <section class="comment-content-section">
                          <div class="comment-content">
                            <div>프로필 사진</div>
                            <a>
                              <div>
                                <div>
                                  <div>{{ reviewInfo.review_content }}</div>
                                </div>
                              </div>
                            </a>
                            <ul class="comment-ul">
                              <li class="comment-li-first">
                                <button @click="deleteReview()">삭제</button>
                              </li>
                              <li>
                                <button @click="updateComment()">수정</button>
                              </li>
                            </ul>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </section>
              <section class="section-movie-detail-info">
                {{ movieDetails.movie_content }}
              </section>
            </div> -->
          </section>
        </div>
      </div>
      <!-- <div class="modal-main" v-if="modalActive == true">
        <div class="modal-container">
          <div class="modal-content">
            <header>
              <em>{{ movieDetails.movie_name }}</em>
              <div>
                <button @click="cancleComment()">취소</button>
              </div>
            </header>
            <div class="modal-write-area">
              <textarea class="modal-write-content" rows={1} maxlength="4000" placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요." @input="textChange()" ref="textTarget" v-model="reviewInfo.review_content"></textarea>
            </div>
            <div class="modal-button-area">
              <div class="modal-button-content">
                <p>0/4000</p>
                <button @click="setReview()">저장</button>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="modal-main" v-if="updateModalActive == true">
          <div class="modal-container">
            <div class="modal-content">
              <header>
                <em>{{ movieDetails.movie_name }}</em>
                <div>
                  <button @click="cancleUpdateComment()">취소</button>
                </div>
              </header>
              <div class="modal-write-area">
                <textarea class="modal-write-content" rows={1} maxlength="4000" placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요." @input="textChange()" ref="textTarget" v-model="reviewInfo.review_content"></textarea>
              </div>
              <div class="modal-button-area">
                <div class="modal-button-content">
                  <p>0/4000</p>
                  <button @click="updateReview()">수정</button>
                </div>
              </div>
            </div>
          </div>
        </div> -->

      <!-- <div class="movie-person-comment">
        <section class="movie-persons">
          <div class="person-title">
            <h2>출연/제작</h2>
            <ul class="person-ul">
              <li class="person-li" :key="i" v-for="(movieCast, i) in movieCastList">
                <router-link :to="{ name: 'PersonDetail', params: { person_num: movieCast.person_num } }" class="movieCast-details">
                  <div class="person-profile-image">
                    <img :src="getProfileImageUrl(`${movieCast.image_oname}`)"/>
                  </div>
                  <div>
                    <div>
                      <div class="person-name">{{ movieCast.person_name }}</div>
                      <div class="person-role">{{ movieCast.person_item_role }}</div>
                    </div>  
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="person-main"></div>
        </section>
        <section class="movie-comments">
          <header>
            <h2>코멘트</h2>
            <span>{{ reviewList.length }}</span>
            <div>
              <div>
                <a>더보기</a>
              </div>
            </div>
          </header>
          <ul class="comments-list">
            <li :key="i" v-for="(review, i) in reviewList">
              <div class="comments-card">
                <div class="comments-writer-info">
                  <div class="comments-writer">
                    <a>
                      <div class="writer-image">img</div>
                      <div class="writer-name">{{ review.member_name }}</div>
                    </a>
                  </div>
                  <div class="comments-writer-detail">
                    <img v-if="review.scrab_type != -1">
                    <span v-if="review.review_score != 0">{{ review.review_score }}</span>
                    <span v-if="review.review_score == 0 && review.scrab_type == 0">보는중</span>
                    <span v-if="review.review_score == 0 && review.scrab_type == 1">보고싶어요</span>
                    <span v-if="review.review_score == 0 && review.scrab_type == -1"></span>
                  </div>
                </div>
                <div class="comments-content">
                  <a>
                    <div>
                      <div>
                        {{ review.review_content }}
                      </div>
                    </div>
                  </a>
                </div>
                <div class="comments-fav-info">
                  <span class="comments-fav-img"></span>
                  <em>10</em>
                  <span class="comments-fav-review-img"></span>
                  <em>0</em>
                </div>
                <div class="comments-fav">
                  <button>좋아요</button>
                </div>
              </div>
            </li>
          </ul>
          <div class="comment-main"></div>
        </section>
      </div> -->
    </main>
</template>
<style scoped>
img {
  width: 100%;
  height: 100%;
}

.person-ul {
  list-style: none;
  padding: 0px;
  height: 228px;
  display: flex;
  align-content: flex-start;
  margin: 4px -5px 16px;
}

.person-li {
  width: 25%;
}

.movie-info {
  flex-direction: row;
  display: flex;
}

.movie-detail-header {
  background: rgb(248, 248, 248);
}

.movie-image {
  width: 280px;
  margin: unset;
}

.movie-image-child2 {
  width: 280px;
  height: 400px;
}

.movie-summary {
  padding: 30px 0px 60px;
  margin: 0 60px;
}

.movie-detail-info {
  margin-left: 32px;
}

.person-name {
  color: rgb(30, 30, 30);
  font-size: 17px;
}

.person-role {
  color: rgb(140, 140, 140);
  font-size: 14px;
}

.movieCast-details {
  display: flex;
  align-items: center;
  height: 76px;
}

.person-profile-image {
  width: 56px;
  height: 56px;
  margin: 0px 12px 0px 0px
}

.modal-main {
  display: block;
  position: fixed;
  inset: 0px;
  z-index: 100;
  background: rgba(0, 0, 0, 0.56);
  overflow: hidden scroll;
}

.modal-container {
  text-align: center;
  padding: 20px 0px;
  overflow: auto;
  position: absolute;
  inset: 0px;
  z-index: 101;
}

.modal-content {
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

.modal-write-area {
  height: auto;
  overflow: auto;
}

.modal-write-content:focus {
  outline: none;
}

.modal-write-content {
  width: 100%;
  resize: none;
  border: 0;
  margin: 1px 0;
}

.modal-button-area {
  position: absolute;
  right: 0px;
  bottom: 0px;
  margin: 0 auto;
  width: 100%;
}

.modal-button-content {
  display: flex;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
}

.modal-button-content button {
  margin: 0 0 0 12px;
  padding: 0px 30px;
  height: 28px;
}

.movie-person-comment {
  margin: 0 60px;
}

.myComment-section {
  margin-top: 20px;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 20px
}

.comment-guide {
  color: rgb(140, 140, 140);
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 10px;
}

.comment-container {
  border: 1px solid;
  border-radius: 6px;
  background: #fff;
  border-color: #e3e3e3 !important;
  overflow: hidden;
}

.comment-container div div {
  margin: 0px 20px;
}

.comment-content-section {
  text-align: center;
  padding: 20px 0px;
}

.comment-content {
  display: flex;
  align-items: center;
}

.comment-content a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  flex: 1 1 0%;
  cursor: pointer;
}

.comment-ul {
  list-style: none;
  margin: 0px;
  font-size: 14px;
}

.comment-ul li {
  display: inline-block;
}

.comment-li-first::after {
  content: "";
  display: inline-block;
  background: #8c8c8c;
  width: 1px;
  height: 8px;
  margin: 0 17px;
}

.movie-comments {
  margin-top: 60px;
}

.movie-comments header {
  margin-bottom: 20px;
  overflow: hidden;
}

.movie-comments header h2 {
  color: rgb(0, 0, 0);
  font-size: 24px;
  margin: 0px;
  float: left;
  font-weight: 700;
  line-height: 28px;
}

.movie-comments header span {
  color: rgb(255, 47, 110);
  font-size: 24px;
  line-height: 28px;
  margin: 0px 0px 0px 8px;
  display: inline-block;
  font-weight: 400;
}

.movie-comments header div {
  float: right;
}

.movie-comments header div div {
  margin: 12px 0px;
}

.movie-comments header div div a {
  color: rgb(255, 47, 110);
  text-decoration: none;
  cursor: pointer;
}

.comments-list {
  grid-template-columns: repeat(4, minmax(0px, 1fr));
  display: grid;
  gap: 8px;
  list-style: none;
  padding: 0px;
  margin: 0px;
  white-space: nowrap;
  margin-block: 0px;
  margin-inline: 0px;
  padding-inline-start: 0px;
}

.comments-list li {
  box-sizing: border-box;
  width: 100%;
  display: block;
  padding: 0px;
}

.comments-card {
  background-color: rgb(242, 242, 242);
  box-sizing: border-box;
  padding: 0px 12px;
  border-radius: 6px;
  overflow: hidden;
}

.comments-writer-info {
  display: flex;
  border-bottom: 1px solid rgb(229, 229, 229);
  overflow: hidden;
}

.comments-writer {
  flex: 1 1 0%;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
  overflow: hidden;
}

.comments-writer a {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(0, 0, 0);
  text-decoration: none;
  cursor: pointer;
}

.writer-image {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  display: flex;
  position: relative;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  margin: 11px 8px 11px 0px;
}

.writer-name {
  color: rgb(31, 31, 31);
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.comments-writer-detail {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(255, 255, 255);
  color: rgb(74, 74, 74);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 19px;
  box-sizing: border-box;
  min-width: 55px;
  height: 26px;
  padding: 0px 8px;
  border: 1px solid rgb(234, 234, 234);
  border-radius: 13px;
  margin: 15px 0px 0px 16px;
}

.comments-writer-detail img {
  vertical-align: top;
  margin: 0px 3px 0px 0px;
}

.comments-content {
  position: relative;
  height: 120px;
  margin: 12px 0px 15px;
}

.comments-content a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  cursor: pointer;
}

.comments-content a div {
  word-break: break-all;
  max-height: 120px;
  margin: 0px;
  overflow: hidden;
}

.comments-content a div div {
  white-space: pre-wrap;
  opacity: 1;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.2px;
  line-height: 24px;
}

.comments-fav-info {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(120, 120, 120);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 19px;
  height: 44px;
  border-top: 1px solid rgb(229, 229, 229);
  border-bottom: 1px solid rgb(229, 229, 229);
  overflow: hidden;
}

.comments-fav-img {
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0px 3px
}

.comments-fav-review-img {
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0px 3px 0px 13px
}

.comments-fav {
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
  padding: 9.5px 0px;
  margin: 0px -4px;
}

.comments-fav button {
  background: none;
  border: none;
  margin: 0px;
  cursor: pointer;
  color: rgb(255, 47, 110);
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
  padding: 2px 8px;
}</style>