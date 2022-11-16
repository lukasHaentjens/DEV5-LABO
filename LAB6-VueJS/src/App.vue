<script setup>
import 'animate.css';
import VideoDetails from './components/VideoDetails.vue'
import VideoPlayer from './components/VideoPlayer.vue'
import Messages from './components/Messages.vue'
</script>

<template>
  <div class="app">
    <VideoPlayer />
    <div class="sidebar">
      <VideoDetails />
      <Messages />
    </div>
  </div>
</template>

<style scoped>

/* create grid */
.app {
  display: grid;
  grid-template-columns: 8fr 4fr;
}
/* elements in different columns */
VideoPlayer {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  grid-column: 1;
}
.sidebar {
  grid-column: 2;
  display: flex;
  flex-flow: column;
  height: 100vh;
}

</style>
