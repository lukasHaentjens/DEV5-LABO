<script setup>

import { ref, onMounted, reactive } from "vue";

// Ref is two way binding, past direct iets aan in beeld (handig in chat apps)
let username = ref('')
let description = ref('')

// onmounted
onMounted(()=> {
  // fetch api
  const api_url = "http://localhost:5173/tiktok.json";
  fetch(api_url)
      .then(response => response.json())
      .then(data => {
        // set data to state
        console.log(data);
        username.value = data.videos[0].username;
        description.value = data.videos[0].description;
      })
})


</script>
<template>
  <div>
    <h3>
      {{ username }}
    </h3>
    <p>
      {{ description }}
    </p>

  </div>
</template>

<style scoped>

</style>