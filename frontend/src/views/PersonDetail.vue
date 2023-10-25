<script lang="ts">
import {useRouter} from 'vue-router';
import axios from 'axios';
import { useStore } from 'vuex';
import instance from '@/axios_interceptor';

//import TheWelcome from '../components/TheWelcome.vue'
export default{
  name: "PersonDetail",
  props:{
    person_num: {
      type: Number,
      default: 0
    }
  },
  data(){
    return{
      router: useRouter(),
      person: {
        person_num : 0,
        person_name : '',
        person_job : 0,
        person_content: '',
        image_oname: ''
      },
      personMovieList: [
        {
          movie_num: 0,
          movie_name: '',
          movie_open: '',
          person_item_role: '',
          image_oname: '',
          review_avg: 0.0
        }
      ],
      personTvList: [
        {
          tv_num: 0,
          tv_name: '',
          tv_open: '',
          person_item_role: '',
          image_oname: '',
          review_avg: 0.0
        }
      ],
      loginState: this.$store.getters.getLoginState,
      member_num: this.$store.getters.getUserNum,
      personFavCount: 0,
    }
  },
  mounted(){
    this.getPersonDetail();
    this.getPersonMovieList();
    this.getPersonTvList();
  },
  methods: {
    async getPersonDetail(){
      try{
        const response = await instance.get("/getPersonDetail",{params:{
          person_num : this.$route.params.person_num
        }})

        console.log("Response <Person> : " + response.data); 
        this.person = response.data;
      }catch(error){
        console.log("Error : " + error);
      }
    },
    async getPersonMovieList(){
      try{
        const response = await instance.get("/getPersonMovieList",{params:{
          person_num : this.$route.params.person_num
        }})

        console.log("Response <PersonMovieList> : " + response.data);
        this.personMovieList = response.data;


      }catch(error){
        console.log("Error : " + error);
      }
    },
    async getPersonTvList(){
      try{
        const response = await instance.get("/getPersonTvList",{params:{
          person_num : this.$route.params.person_num
        }})

        console.log("Response <PersonTvList> : " + response.data);
        this.personTvList = response.data;
      }catch(error){
        console.log("Error : " + error);
      } 
    },
    getImageUrl(name: string): string {
      const currentURL = window.location.href;
      const path = new URL(`../movieimg/${name}.jpg`, currentURL).href;
      return path;
    },
    getTvImageUrl(name: string): string {
      const currentURL = window.location.href;
      const path = new URL(`../tvimg/${name}.jpg`, currentURL).href;
      return path;
    },
    async setPersonFav(){

      if(this.loginState == false){
        alert('로그인 후 이용 가능합니다!');
        return;
      }

      try{
        const response = await instance.get('/setPersonFav',{params:{
          person_num : this.$route.params.person_num,
          member_num : this.member_num
        }})
      }catch(error){
        console.log(error);
      }
    },
    async getPersonFav(){
      try{
        const response = await instance.get('/getPersonFav',{params:{
          person_num : this.$route.params.person_num,
          fav_item_type : 1  // 인물
        }})

        this.personFavCount = response.data;
      }catch(error){
        console.log(error);
      }
    }
  }
}
</script>

<template>
  <main>
    <h1>인물 상세 화면</h1>
    <div class="person-wrapper">
      <section class="person-section">
        <div class="person-intro-container">
          <div class="person-intro-content">
            <div class="person-intro-details">
              <div class="person-intro-image-container">
                <!-- <div></div> -->
                <div :style="{ background: `url(../personimg/${person.image_oname}.jpg) center center / cover no-repeat` }"></div>
              </div>
            </div>
            <div class="person-intro-detail">
              <h1>{{ person.person_name }}</h1>
              <p v-if="person.person_job == 1">배우</p>
              <p v-else-if="person.person_job == 2">감독</p>
              <p v-else-if="person.person_job == 3">성우</p>
              <p v-else>성우</p>
            </div>
          </div>
          <div class="person-content">
            <h2>소개</h2>
            <div>{{ person.person_content }}</div>
          </div>
          <hr>
          <button class="person-fav-button" @click="setPersonFav()">
            <div>따봉이미지</div>
            <span>좋아요 0명이 이 인물을 좋아합니다.</span>
          </button>
        </div>
      </section>
      <hr>
      <div class="person-items">
        <div class="person-items-container">
          <div class="person-items-tv">
            <h2>TV 프로그램</h2>
            <div class="person-items-tv-content">
              <h3>출연</h3>
              <div class="person-items-tv-header">
                <div class="person-items-tv-date"></div>
                <div class="person-items-tv-image"></div>
                <div class="person-items-tv-title">제목</div>
                <div class="person-items-tv-role">역할</div>
                <div class="person-items-tv-score">평가</div>
              </div>
              <a class="person-items-tv-row" :key="i" v-for="(personTv, i) in personTvList">
                <div class="person-items-tv-cols">
                  <div class="person-items-tv-col-date">{{ personTv.tv_open }}</div>
                  <div class="person-items-tv-col-image">
                    <div>
                      <img :src="getTvImageUrl(`${personTv.image_oname}`)" />
                    </div>
                  </div>
                  <div class="person-items-tv-col-title">{{ personTv.tv_name }}</div>
                  <div class="person-items-tv-col-role">{{ personTv.person_item_role }}</div>
                  <div class="person-items-tv-col-score">{{ personTv.review_avg }}</div>
                </div>
              </a>
            </div>
          </div>
          <div class="person-items-tv">
            <h2>영화</h2>
            <div class="person-items-tv-content">
              <h3>출연</h3>
              <div class="person-items-tv-header">
                <div class="person-items-tv-date"></div>
                <div class="person-items-tv-image"></div>
                <div class="person-items-tv-title">제목</div>
                <div class="person-items-tv-role">역할</div>
                <div class="person-items-tv-score">평가</div>
              </div>
              
              <a class="person-items-tv-row" :key="i" v-for="(personMovie, i) in personMovieList">
                <router-link :to="{ name: 'MovieDetail', params: { movie_num: personMovie.movie_num } }" class="movie-items">
                  <div class="person-items-tv-cols">
                    <div class="person-items-tv-col-date">{{ personMovie.movie_open }}</div>
                    <div class="person-items-tv-col-image">
                      <div>
                        <img :src="getImageUrl(`${personMovie.image_oname}`)" />
                      </div>
                    </div>
                    <div class="person-items-tv-col-title">{{ personMovie.movie_name }}</div>
                    <div class="person-items-tv-col-role">{{ personMovie.person_item_role }}</div>
                    <div class="person-items-tv-col-score">{{ personMovie.review_avg }}</div>
                  </div>
                </router-link>
              </a>
            </div>
          </div>
        </div>
        <div class="person-items-nav"></div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.person-wrapper{
  margin-right: 60px;
  margin-left: 60px;
}
.person-section{
  margin: 29px 0px 0px;
}
.person-intro-content{
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  -webkit-box-align: center;
  min-height: 84px;
  margin-bottom: 16px;
}
.person-intro-details{
  text-align: left;
  margin-right: 15px;
}
.person-intro-image-container{
  display: flex;
  position: relative;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  width: 84px;
  height: 84px;
  border: none;
  border-radius: 8px;
}
.person-intro-image-container div{
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.person-intro-detail{
  margin-top: 16px;
}
.person-intro-detail h1{
  color: rgb(41, 42, 50);
  font-weight: 700;
}
.person-intro-detail p{
  color: rgb(149, 149, 149);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.2px;
  line-height: 18px;
}
.person-content{
  display: block;
  margin: 31px 0px 65px;
}
.person-content h2{
  color: rgb(41, 42, 50);
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 26px;
  margin: 0px 0px 12px;
}
.person-content div{
  max-height: 78px;
  position: relative;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.2px;
  line-height: 26px;
  overflow: hidden;
}
.person-fav-button{
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
  width: 100%;
  height: 40px;
  border-radius: 5px;
  margin: 3px;
}
.person-fav-button span{
  display: inline-block;
}

.person-items{
  grid-template-columns: 1fr 170px;
  column-gap: 55px;
  display: grid;
}
.person-items-container{
  grid-column: span 1 / auto;
}
.person-items-tv{
  margin: 31px 0px 65px;
}
.person-items-tv h2{
  color: rgb(41, 42, 50);
  font-size: 22px;
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 26px;
  margin: 15px 0px 24px;
}
.person-items-tv-content{
  margin-bottom: 40px;
}
.person-items-tv-content h3{
  color: rgb(41, 42, 50);
  font-size: 17px;
  font-weight: bold;
  letter-spacing: -0.34px;
  line-height: 18px;
  padding-bottom: 11px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.person-items-tv-header{
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(116, 116, 123);
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  grid-template-columns: 48px 82px 1fr 149px 110px 125px;
  box-sizing: border-box;
  height: 31px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.person-items-tv-date{
  grid-column: span 1 / auto;
}
.person-items-tv-image{
  grid-column: span 1 / auto;
}
.person-items-tv-title{
  grid-column: span 1 / auto;
  padding-left: 9px;
}
.person-items-tv-role{
  grid-column: span 1 / auto;
  padding-left: 9px;
}
.person-items-tv-score{
  grid-column: span 1 / auto;
  padding-left: 9px;
}
.person-items-tv-row{
  text-decoration: none;
  cursor: pointer;
}
.person-items-tv-cols{
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  grid-template-columns: 48px 82px 1fr 149px 110px 125px;
  box-sizing: border-box;
  height: 107px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.person-items-tv-col-date{
  grid-column: span 1 / auto;
  color: rgb(116, 116, 123);
  font-size: 13px;
  line-height: 16px;
}
.person-items-tv-col-image{
  grid-column: span 1 / auto;
  width: 62px;
  height: 90px;
  margin: auto;
  position: relative;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset;
}
.person-items-tv-col-image div{
  overflow: hidden;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: rgb(248, 248, 248);
  transition: all 300ms ease 0s;
}
.person-items-tv-col-image div img{
  opacity: 1;
  vertical-align: top;
  width: 100%;
  height: 100%;
  min-height: 1px;
  object-fit: cover;
  transition: opacity 420ms ease 0s;
}
.person-items-tv-col-title{
  font-size: 16px;
  line-height: 20px;
  width: 216px;
  padding-left: 9px;
}
.person-items-tv-col-role{
  color: rgb(116, 116, 123);
  font-size: 13px;
  line-height: 16px;
  width: 129px;
  padding-left: 9px;
}
.person-items-tv-col-score{
  padding-left: 9px;
}
</style>