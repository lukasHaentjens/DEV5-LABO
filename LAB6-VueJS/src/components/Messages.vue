<script setup>
import {onMounted, reactive, ref} from 'vue'
import 'animate.css';

let commentValue = ref('')
let commentData = reactive({comments: []})

// fetch comments
onMounted(() => {
  const api_url = "https://lab5-p379.onrender.com/api/v1/messages/";
  fetch(api_url)
      .then(response => response.json())
      .then(data => {
        // set data to state
        console.log(data);
        // all comments
        commentData.comments = data;
      })
})
const addComment = () => {
  console.log(commentValue.value)
}

</script>

<template>
  <div class="comments">
    <div class="comments__header">
      <h3>Comments</h3>
      <div class="comment">
        <input type="text" v-model="commentValue" placeholder="Write your comment">
        <button @click="addComment">Send</button>
        <ul class="comment__section">
          <li v-for="comment in commentData.comments" :key="comment.id">
            <h4>{{ comment.user }}</h4>
            <p>{{ comment.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comment__section {
  display: flex;
  flex-direction: column-reverse;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>