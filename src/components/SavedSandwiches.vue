<template>
  <div>
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
interface Sandwich {
  id: string
  bread: string
  sauce: string
  cheese: string
  extra: string
}

const filter = ref('');
const savedSandwiches = ref<Sandwich[]>(JSON.parse(localStorage.getItem('sandwiches') || '[]'))

const filteredByIngredients = computed(() => savedSandwiches.value.filter(sandwich =>
    Object.values(sandwich).some(val => val.toLowerCase().includes(filter.value.toLowerCase()))
))
</script>


<style scoped>

</style>