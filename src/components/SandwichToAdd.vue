<template>

  <h2>Générateur de sandwich</h2>
    <button @click="addNewRandomSandwich">Ajouter</button>
  <div v-if="sandwich">
    <p>{{ sandwich.bread }}, {{ sandwich.sauce }}, {{ sandwich.cheese }}, {{ sandwich.extra }}</p>
    <button @click="save">Sauvegarder</button>
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
import { breads, sauces, cheeses, extras } from '@/ingredientsList.ts'

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