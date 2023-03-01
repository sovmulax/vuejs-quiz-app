<script setup>
import Card from "../components/Card.vue";
import data from "../data/quiz.json";
import { ref, watch } from "vue";

const quiz = ref(data);
const search = ref("");

watch(search, () => {
  quiz.value = data.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
  console.log("test");
});
</script>

<template>
  <div>
    <div class="header">
      <img alt="Vue logo" src="../assets/logo.svg" width="75" height="75" />
      <h1>Quiz AP</h1>
      <div>
        <label for="search">Search </label>
        <input v-model="search" type="search" name="" id="search" />
      </div>
    </div>
    <br />
    <div class="main">
      <Card v-for="item in quiz" :quiz="item" :key="item.id" />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
input[type="search"] {
  width: 250px;
  height: 35px;
  background-color: hsl(0, 0%, 40%);
  border: transparent;
  border-radius: 8px;
  color: white;
}

input[type="search"]::after {
  border: transparent;
  text-decoration: none;
}

.main {
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
}
</style>
