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
    <div class="comments__list">
      <ul class="comment__section">
          <li class="comment" v-for="comment in commentData.comments" :key="comment.id">
            <h4 class="comment__username">{{ comment.user }}</h4>
            <p class="comment__detail">{{ comment.text }}</p>
          </li>
      </ul>
    </div>
    <div class="comment__inputs">
      <input class="comment__inputfield" type="text" v-model="commentValue" placeholder="Write your comment">
      <button class="comment__button" @click="addComment">Send</button>
    </div>
  </div>
</template>

<style scoped>
.comments {
  height: 80vh;
  background-color: #f9f9f9;
  border-top: 1px solid #dddddd;
}
.comment {
  padding: 1em 0 0 0;
  border-bottom: 1px solid #e6e6e6;
}
.comment:last-child {
  border-bottom: none;
}
.comment__username {
  line-height: 1em;
  padding: 0;
  margin: 0;
}
.comment__inputfield {
  width: 100%;
  padding: 1em;
  border: 1px solid #DDDDDD;
}
.comment__button {
  padding: 1em;
  background-color: #ffb0b3;
  border: none;
  cursor: pointer;
}
.comment__button:hover {
  background-color: #ff8c8f;
}
.comment__detail {
  line-height: 1em;
  padding: 0.5em 0 1em 0;
  margin: 0;
}
.comments__list {
  padding: 0 1em;
  display: flex;
  flex-direction: column-reverse;
  height: 70vh;
  overflow-y: scroll;
}
.comment__section {
  list-style: none;
  padding: 0;
  margin: 0;
}
.comment__inputs {
  border-top: 1px solid #dddddd;
  background-color: #ffffff;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
}
ul {
  bottom: 0;
  display: flex;
  flex-flow: column;
}
</style>