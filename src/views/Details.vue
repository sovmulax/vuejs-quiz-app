<script setup>
import data from "../data/quiz.json";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const id = route.params;

let detail = ref();
detail = data.filter((data) => data.id == id.id);

console.log(detail[0].id);
</script>

<template>
  <div class="main">
    <img :src="detail[0].img" />
    <div class="divider"></div>
    <div class="description">
      <h1 class="green">{{detail[0].name}}</h1>
      <h2>{{detail[0].img}}</h2>
      <h2>Nombre de Question : {{detail[0].questions.length}}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, voluptate <br>
        dignissimos? Exercitationem expedita sit obcaecati cumque consectetur ad mollitia <br>
        maiores doloribus amet. Delectus fugit voluptatem quia ratione voluptas ipsum vel? 
      </p>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 200px;
  width: 300px;
}

.main {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.divider{
    width: 50px;
}
</style>
