<template>
    <section>
        <div class="section-div">
            <section class="section-content">
                <div class="movie-container">
                    <div class="movie-title">
                        <p>박스오피스 순위</p>
                    </div>
                    <div class="movie-content">
                        <div class="movie-child1">
                            <div class="movie-child2">
                                <div class="movie-child3">
                                    <div class="movie-child4">
                                        <ul>
                                            <li :key="i" v-for="(movie, i) in movieDTOList">
                                                <router-link :to="{name: 'MovieDetail', params:{movie_num : movie.movie_num}}" class="movie-items">
                                                    <img :src="getImageUrl(`${movie.image_oname}`)" v-if="movie.image_oname"/>
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
                                                    <img :src="getImageUrl(`${movie.image_oname}`)" v-if="movie.image_oname"/>
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
                                                    <img :src="getImageUrl(`${movie.image_oname}`)" v-if="movie.image_oname"/>
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
            </section>
        </div>
    </section>

</template>
<script lang="ts" >
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

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
    mounted() {
        this.selectMovieList();
    },
    methods: {
        selectMovieList() {
            axios.get('/mainMovie')
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
.section-content{
    margin-top: 80px;
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
    margin: 10px;
    overflow: hidden;
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
}
</style>