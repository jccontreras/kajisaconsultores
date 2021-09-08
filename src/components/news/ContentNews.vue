<template>
  <div class="container">
    <div class="jumbotron shadow-lg p-3 mb-5 rounded" style="background-color: #dbd1d1"
         v-for="news in newslist" v-bind:key="news.index">
      <h1 class="display-5" style="color: darkred">{{news.title}}</h1>
      <label class="lead">{{news.description}}</label>
      <hr class="my-4">
      <label>{{news.lbl}}
        <a :href="news.link" target="_blank">{{news.lblink}}</a>
      </label>
      <br>
      <a class="btn btn-outline-secondary btn-md" target="_blank"
         :href="news.linkbtn"
         role="button">{{news.btn}}</a>
    </div>
  </div>
</template>

<script>
import newsdata from '@/assets/news/news.json';

export default {
  name: 'ContentNews',
  computed: {
    newslist() {
      return newsdata.map((news) => news);
    },
  },
};
</script>
