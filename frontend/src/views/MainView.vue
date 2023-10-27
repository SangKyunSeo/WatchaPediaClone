<template>
    <section>
        <div class="section-div">
            <section class="section-content">
                <div class="movie-container">
                    <div class="movie-title">
                        <p>박스오피스 순위</p>
                        <!-- 서버 분리 테스트 -->
                        <div>
                            이렇게 새로고침 하면 업데이트가 바로 되나요?
                            안되잖아
                        </div>
                    </div>
                    <div class="movie-content">
                        <div class="movie-child1">
                            <div class="movie-child2">
                                <div class="movie-child3">
                                    <div class="movie-child4">
                                        <ul>
                                            <li :key="i" v-for="(movie, i) in movieDTOList">
                                                <router-link :to="{name: 'MovieDetail', params:{movie_num : movie.movie_num}}" class="movie-items">
                                                    <div class="image-box">
                                                        <img :src="getImageUrl(`${movie.image_oname}`)" v-if="movie.image_oname"/>
                                                    </div>
                                                    <div class="movie-name">{{ movie.movie_name }}</div>
                                                    <div>{{ movie.movie_open }}</div>
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="movie-container">
                    <div class="movie-title">
                        <p>왓챠 영화 순위</p>
                    </div>
                    <div class="movie-content">
                        <div class="movie-child1">
                            <div class="movie-child2">
                                <div class="movie-child3">
                                    <div class="movie-child4">
                                        <ul>
                                            <li :key="i" v-for="(movie, i) in movieDTOList">
                                                <router-link :to="{ name: 'MovieDetail', params: { movie_num: movie.movie_num } }" class="movie-items">
                                                    <div class="image-box">
                                                        <img :src="getImageUrl(`${movie.image_oname}`)" v-if="movie.image_oname"/>
                                                    </div>
                                                    <div class="movie-name">{{ movie.movie_name }}</div>
                                                    <div>{{ movie.movie_open }}</div>
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="movie-container">
                    <div class="movie-title">
                        <p>넷플릭스 영화 순위</p>
                    </div>
                    <div class="movie-content">
                        <div class="movie-child1">
                            <div class="movie-child2">
                                <div class="movie-child3">
                                    <div class="movie-child4">
                                        <ul>
                                            <li :key="i" v-for="(movie, i) in movieDTOList">
                                                <router-link :to="{ name: 'MovieDetail', params: { movie_num: movie.movie_num } }" class="movie-items">
                                                    <div class="image-box">
                                                        <img :src="getImageUrl(`${movie.image_oname}`)" v-if="movie.image_oname"/>
                                                    </div>
                                                    <div class="movie-name">{{ movie.movie_name }}</div>
                                                    <div>{{ movie.movie_open }}</div>
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 이미지 슬라이드 예시 -->
                <div class="movie-container">
                    <div class="movie-title">
                        <p>넷플릭스 영화 순위</p>
                    </div>
                    <div class="movie-content">
                        <div class="movie-child1">
                            <div class="movie-child2">
                                <div class="movie-child3">
                                    <div class="image-slider" slideWidth="100%">
                                        <carousel :items-to-show="5" :wrapAround="true" :autoplay="5000">
                                            <slide :key="i" v-for="(movie, i) in movieDTOList">
                                                <router-link :to="{ name: 'MovieDetail', params: { movie_num: movie.movie_num } }" class="movie-items">
                                                    <div class="image-box">
                                                        <img :src="getImageUrl(`${movie.image_oname}`)" v-if="movie.image_oname"/>
                                                    </div>
                                                    <div class="movie-name">{{ movie.movie_name }}</div>
                                                    <div>{{ movie.movie_open }}</div>
                                                </router-link>
                                            </slide>
                                            <template #addons>
                                                <navigation />
                                                <pagination />
                                            </template>
                                        </carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    </section>

</template>

<script lang="ts">
import axios from 'axios';
import { useRouter } from 'vue-router';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

// import { ref } from 'vue';

    export default {
    data() {
        return {
            movieDTOList:[
                {
                    movie_num: 0,
                    movie_name: '',
                    movie_open: '',
                    movie_content: '',
                    movie_grade: 0,
                    image_url: '',
                    image_oname: ''
                }
            ],
            router: useRouter(),
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    mounted() {
        this.selectMovieList();
    },
    methods: {
        selectMovieList() {
            axios.get('/api/mainMovie')
                .then((result) => {
                    this.movieDTOList = result.data;
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        getImageUrl(name: string): string{
            const currentURL = window.location.href;
            const path = new URL(`../movieimg/${name}.jpg`, currentURL).href;
            return path;
        }
    }
}
</script>

<style scoped>
.carousel__next{
    right: -21px;
}
.section-content{
    margin-top: 80px;
    margin-right: 80px;
    margin-left: 80px;
}
.movie-title{
    white-space: nowrap;
    max-width: 1320px;
    padding: 12px 0px 14px;
    line-height: 30px;
    max-height: 60px;
}
.movie-title p{
    color: rgb(41, 42, 50);
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.4px;
    line-height: 30px;
    margin: 0px;
    padding: 0px;
}
ul{
    list-style: none;
    padding: 0px;
    white-space: nowrap;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 0px !important;
    margin-left: 0px !important;
    margin-block: 0px;
    margin-inline: 0px;
    padding-inline-start: 0px;
}
li{
    display: inline-block;
    width: 20%;
    padding: 10px;
    /*overflow: hidden;*/
}
img{
    width:100%;
    height: 100%;
}
.section-div{
    display: flex;
    flex-direction: column;
}
.movie-child1{
    position: relative;
    transform: translate3d(0px, 0px, 0px);
    margin: 0px -8px;
}
.movie-child2{
    overflow: hidden;
}
.movie-items{
    display: inline-block;
    width: 100%;
    cursor: pointer;
    outline: rgb(0, 0, 0);
    text-decoration: none;
    color: rgb(0, 0, 0);
}
.movie-items:hover{
    background-color: white;
}
.movie-name{
    font-size: 12px;
    overflow: hidden;
}
.image-box{
    border: 1px solid rgb(234, 233, 232);
    border-radius: 5px;
}
</style>