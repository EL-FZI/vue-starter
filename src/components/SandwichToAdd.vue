<template>
  <div class="container-generate">
    <h2>Générateur de sandwich</h2>
    <button @click="addNewRandomSandwich">Ajouter</button>

    <div v-if="sandwich" class="listing">
      <p>{{ sandwich.bread }}, {{ sandwich.sauce }}, {{ sandwich.cheese }}, {{ sandwich.extra }}</p>
      <button @click="save">Sauvegarder</button>
    </div>

  </div>
</template>

<script setup lang="ts">

interface Sandwich {
  id: string
  bread: string
  sauce: string
  cheese: string
  extra: string
}

import {ref} from "vue";
import {breads, sauces, cheeses, extras} from '@/ingredientsList.ts'

const sandwich = ref<Sandwich | null>(null);
const savedSandwiches = ref<Sandwich[]>(JSON.parse(localStorage.getItem('sandwiches') || '[]'))


const addNewRandomSandwich = () => {
  const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]
  sandwich.value = {
    id: crypto.randomUUID(),
    bread: getRandom(breads),
    sauce: getRandom(sauces),
    cheese: getRandom(cheeses),
    extra: getRandom(extras),
  }
}

const save = () => {
  if (sandwich.value) {
    savedSandwiches.value.push(sandwich.value)
    localStorage.setItem('sandwiches', JSON.stringify(savedSandwiches.value))
  }
}


</script>

<style scoped>
.container-generate {
  padding: 2rem;
  text-align: center;
}

h2 {
  margin-bottom: 1rem;
}

button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

.listing {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f4f4f4;
  border-radius: 6px;
}
</style>