<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const { quiz } = defineProps(["quiz"]);
</script>

<template>
  <div class="card">
    <img :src="quiz.img" alt="" />
    <div class="card-text">
      <RouterLink :to="`/quiz/${quiz.id}`" href="">
        <h2>{{ quiz.name }}</h2>
      </RouterLink>
      <!-- <p>{{ quiz.questions.length }} questions</p> -->
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  margin-left: 30px;
  cursor: pointer;
  color: hsl(0deg 0% 9%);
}
.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}
.card .card-text {
  padding: 0 5px;
}
.card .card-text h2 {
  font-weight: bold;
}
</style>
