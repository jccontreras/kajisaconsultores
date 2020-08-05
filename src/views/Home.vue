<template>
  <div class="container">
    <div class="row">
      <div class="col-md">
        <content1-home/>
      </div>
      <div class="col-md">
        <contact/>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <content-videos/>
      </div>
    </div>
  </div>
</template>

<script>
import Content1Home from '@/components/home/Content1Home.vue';
import Contact from '@/components/home/Contact.vue';
import ContentVideos from '@/components/home/ContentVideos.vue';

export default {
  name: 'Home',
  components: {
    Content1Home,
    Contact,
    ContentVideos,
  },
};
</script>
