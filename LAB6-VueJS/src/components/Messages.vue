<script setup>
import {onMounted, reactive, ref} from 'vue'
import 'animate.css';


// fetch comments
onMounted(() => {
  const api_url = "https://lab5-p379.onrender.com/api/v1/messages/";
  fetch(api_url)
      .then(response => response.json())
      .then(data => {
        // set data to state
        console.log(data);
      })
})

</script>

<template>
  <div class="comments">
    <div class="comments__header">
      <h3>Comments</h3>
      <div class="comment">
        <ul>
          <li>
            <h4>Username</h4>
            <p>Comment</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>