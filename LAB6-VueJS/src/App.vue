<script setup>
import { ref } from 'vue'
import 'animate.css';
import VideoDetails from './components/VideoDetails.vue'
import VideoPlayer from './components/VideoPlayer.vue'
</script>

<template>
  <div class="app">
    <VideoPlayer />
    <div class="sidebar">
      <VideoDetails />
      <Message />
    </div>
  </div>
</template>

<style scoped>

/* create grid */
.app {
  display: grid;
  grid-template-columns: 3fr 8fr;
}
/* elements in different columns */
VideoPlayer {
  grid-column: 1;
}
.sidebar {
  grid-column: 2;
  display: flex;
  flex-flow: column;
  height: 100%;
}

</style>
