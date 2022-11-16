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
  console.log(commentValue.value);
  commentData.comments.push({
        user: 'Lukas',
        text: commentValue.value
      }
  )

let data = {
    user : 'Lukas',
    text : commentValue.value
  }
  // add comment to api
  const api_url = "https://lab5-p379.onrender.com/api/v1/messages/";
  fetch(api_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
      .then(response => response.json())
      .then(data => {
        // set data to state
        console.log(data);
        // all comments
        commentData.comments.push(
          {
            id: data.id,
            user: data.user,
            text: data.text
          }
        );
      })
}

</script>

<template>
  <div class="comments">
    <div class="comments__header">
      <h3>Comments</h3>
    </div>
    <ul class="comment__section">
          <li v-for="comment in commentData.comments" :key="comment.id">
            <h4>{{ comment.user }}</h4>
            <p>{{ comment.text }}</p>
          </li>
    </ul>
    <div class="comment__inputs">
      <input type="text" v-model="commentValue" placeholder="Write your comment">
      <button @click="addComment">Send</button>
  </div>
  </div>
</template>

<style scoped>
.comments {
  height: 80vh;
}
.comments__header{
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}
.comment__section {
  display: flex;
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
}
ul {
  max-height: 70vh;
  overflow-y: scroll;
  position: relative;
  top: 0;
  overflow-x: hidden;
  justify-content: flex-end;
  flex-direction: column-reverse;
}
</style>