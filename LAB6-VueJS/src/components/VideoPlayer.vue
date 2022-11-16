<script setup>
import { ref, onMounted, reactive } from "vue";
import 'animate.css';
let animation = ref('');

// Ref is two way binding, past direct iets aan in beeld (handig in chat apps)
let src = ref('')
let videos = reactive({videos: []})
let counter = ref(0)

// onmounted
onMounted(()=> {
  // fetch api
  const api_url = "http://localhost:5173/tiktok.json";
  fetch(api_url)
  .then(response => response.json())
  .then(data => {
    // set data to state
    src.value = data.videos[counter.value].video;
    videos.videos = data.videos;
  })
})

const nextVideo = () => {
  counter.value++;
  animation.value = 'animate__slideOutDown';
  setTimeout(() => {
    src.value = videos.videos[counter.value].video;
    animation.value = 'animate__slideInDown';
  }, 1000);
}

</script>
<template>
  <div  class="video">
    <div class="controls">
      <a @click.prevent="nextVideo" href="#" class="controls__next">⬇️</a>
    </div>
    <video :class="animation" :src="src" autoplay muted loop controls class="animate__animated">
    </video>
  </div>
</template>

<style scoped>
.video {
  position: relative;
  height: 100vh;
}
.animation {
  animation-duration: 1s;
  animation-fill-mode: both;
}
  .controls {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 3rem;
  }
  .controls a {
    text-decoration: none;
  }
  video {
    height: 100%;
  }
</style>