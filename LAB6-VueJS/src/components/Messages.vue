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
    <hr>
    <div class="comments__list">
      <ul class="comment__section">
          <li class="comment" v-for="comment in commentData.comments" :key="comment.id">
            <h4 class="comment__username">{{ comment.user }}</h4>
            <p class="comment__detail">{{ comment.text }}</p>
            <hr>
          </li>
      </ul>
    </div>
    <hr>
    <div class="comment__inputs">
      <input type="text" v-model="commentValue" placeholder="Write your comment">
      <button @click="addComment">Send</button>
    </div>
  </div>
</template>

<style scoped>
.comments {
  height: 90vh;
}
.comment {
  padding: 1em 0 0 0;
}
.comment hr {
  opacity: 10%;
}
.comment__username {
  line-height: 1em;
  padding: 0;
  margin: 0;
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
  height: 80vh;
  overflow-y: scroll;
}
.comment__section {
  list-style: none;
  padding: 0;
  margin: 0;
}
.comment__inputs {
  height: 5vh;
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