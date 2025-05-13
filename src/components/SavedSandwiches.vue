<template>
  <div class="saved-container">
    <h2>Sandwichs Sauvegardés</h2>
    <input v-model="filter" placeholder="Filtrer par ingrédient" />
    <ul>
      <li v-for="sandwich in filteredByIngredients" :key="sandwich.id">
        {{ sandwich.bread }}, {{ sandwich.sauce }}, {{ sandwich.cheese }}, {{ sandwich.extra }}
      </li>
    </ul>
  </div>
</template>


<script setup lang="ts">

import {ref, computed} from "vue";

interface Sandwich {
  id: string
  bread: string
  sauce: string
  cheese: string
  extra: string
}

const filter = ref('');
const savedSandwiches = ref<Sandwich[]>(JSON.parse(localStorage.getItem('sandwiches') || '[]'))

const filteredByIngredients = computed(() =>
    savedSandwiches.value.filter(sandwich =>
    Object.values(sandwich).some(val => val.toLowerCase().includes(filter.value.toLowerCase()))
))
</script>


<style scoped>
.saved-container {
  padding: 2rem;
  max-width: 600px;
  margin: auto;
}


input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #f8f8f8;
  border-radius: 4px;
}

</style>