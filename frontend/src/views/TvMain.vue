<template>
    <section>
        <div class="section-div">
            <section class="section-content">
                <div class="movie-container">
                    <div class="movie-title">
                        <p>한국 TV프로그램 인기 순위</p>
                    </div>
                    <div class="movie-content">
                        <div class="movie-child1">
                            <div class="movie-child2">
                                <div class="movie-child3">
                                    <div class="movie-child4">
                                        <ul>
                                            <li :key="i" v-for="(tv, i) in tvDTOList">
                                                    <router-link
                                                        :to="{ name: 'TvDetail', params: { tv_num: tv.tv_num } }"
                                                        class="movie-items">
                                                        <div class="image-box">
                                                            <img :src="getImageUrl(`${tv.image_oname}`)"/>
                                                        </div>
                                                        <div class="movie-name">{{ tv.tv_name }}</div>
                                                        <div>{{ tv.tv_open }}</div>
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
                        <p>왓챠 TV프로그램 인기 순위</p>
                    </div>
                    <div class="movie-content">
                        <div class="movie-child1">
                            <div class="movie-child2">
                                <div class="movie-child3">
                                    <div class="movie-child4">
                                        <ul>
                                            <li :key="i" v-for="(tv, i) in tvDTOList">
                                                <router-link
                                                    :to="{ name: 'TvDetail', params: { tv_num: tv.tv_num } }"
                                                    class="movie-items">
                                                    <div class="image-box">
                                                        <img :src="getImageUrl(`${tv.image_oname}`)"/>
                                                    </div>
                                                    <div class="movie-name">{{ tv.tv_name }}</div>
                                                    <div>{{ tv.tv_open }}</div>
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
                        <p>넷플릭스 TV프로그램 순위</p>
                    </div>
                    <div class="movie-content">
                        <div class="movie-child1">
                            <div class="movie-child2">
                                <div class="movie-child3">
                                    <div class="movie-child4">
                                        <ul>
                                            <li :key="i" v-for="(tv, i) in tvDTOList">
                                                <router-link
                                                    :to="{ name: 'TvDetail', params: { tv_num: tv.tv_num } }"
                                                    class="movie-items">
                                                    <div class="image-box">
                                                        <img :src="getImageUrl(`${tv.image_oname}`)"/>
                                                    </div>
                                                    <div class="movie-name">{{ tv.tv_name }}</div>
                                                    <div>{{ tv.tv_open }}</div>
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
<script lang="ts">
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            tvDTOList: [
                {
                    tv_num: 0,
                    tv_name: '',
                    tv_open: '',
                    tv_content: '',
                    tv_grade: 0,
                    tv_ott: 0,
                    image_url: '',
                    image_oname: ''
                }
            ],
            router: useRouter()
        }
    },
    mounted() {
        this.selectTvList();
    },
    methods: {
        selectTvList() {
            axios.get('/api/tvList')
                .then((result) => {
                    this.tvDTOList = result.data;
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        getImageUrl(name: string): string {
            const currentURL = window.location.href;
            const path = new URL(`../tvimg/${name}.jpg`, currentURL).href;
            return path;
        }
    }
}
</script>
<style scoped>
.section-content {
    margin-top: 80px;
    margin-right: 80px;
    margin-left: 80px;
}

.movie-title {
    white-space: nowrap;
    max-width: 1320px;
    padding: 12px 0px 14px;
    line-height: 30px;
    max-height: 60px;
}

.movie-title p {
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

ul {
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

li {
    display: inline-block;
    width: 20%;
    padding: 10px;
}

img{
    width:100%;
    height: 100%;
}

.section-div {
    display: flex;
    flex-direction: column;
}

.movie-child1 {
    position: relative;
    transform: translate3d(0px, 0px, 0px);
    margin: 0px -8px;
}

.movie-child2 {
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