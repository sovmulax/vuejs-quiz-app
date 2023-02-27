<script setup>
import data from "../data/quiz.json";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const id = route.params;

//let detail = ref();
const detail = data.find((data) => data.id == id.id);

</script>

<template>
  <div v-if="detail" class="main">
    <img :src="detail.img" />
    <div class="divider"></div>
    <div class="description">
      <h1 class="green">{{detail.name}}</h1>
      <h2>{{detail.img}}</h2>
      <h2>Nombre de Question : {{detail.questions.length}}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, voluptate <br>
        dignissimos? Exercitationem expedita sit obcaecati cumque consectetur ad mollitia <br>
        maiores doloribus amet. Delectus fugit voluptatem quia ratione voluptas ipsum vel? 
      </p>
    </div>
  </div>

  <div v-else class="main">
    <h1 class="green">404 ERREUR</h1>
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
