<template>
  <div class="admin-container">
    <h2>Espace Admin</h2>

    <div v-for="(list, key) in ingredients" :key="key" class="ingredient-section">
      <h3>{{ categoriesLabels[key] }}</h3>
      <ul>
        <li v-for="(item, index) in list" :key="index" class="ingredient-item ">
          {{ item }}
          <button @click="removeIngredient(key, index)" class="remove-btn">X</button>
        </li>
      </ul>
      <div class="input-group">
        <input v-model="newIngredients[key]" :placeholder="'Ajouter un ' + categoriesLabels[key]"/>
        <button @click="addIngredient(key)">Ajouter</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

const categories = ['bread', 'sauce', 'cheese', 'extra'];
type Category = typeof categories[number]

const categoriesLabels: Record<Category, string> = {
  bread: 'Bread',
  sauce: 'Sauce',
  cheese: 'Cheese',
  extra: 'Extra',
}

const ingredients = reactive<Record<Category, string[]>>({
  bread: JSON.parse(localStorage.getItem('bread') || []),
  sauce: JSON.parse(localStorage.getItem('sauce') || []),
  cheese: JSON.parse(localStorage.getItem('cheese') || []),
  extra: JSON.parse(localStorage.getItem('extra') || []),
})

const newIngredients = reactive<Record<Category, string>>({
  bread: '',
  sauce: '',
  cheese: '',
  extra: '',
})

function addIngredient(category: Category) {
  const ingredient = newIngredients[category].trim()
  if (ingredient && !ingredients[category].includes(ingredient)) {
    ingredients[category].push(ingredient)
    newIngredients[category] = ''
    saveToLocalStorage(category)
  }
}

function removeIngredient(category: Category, index: number) {
  ingredients[category].splice(index, 1)
  saveToLocalStorage(category)
}

function saveToLocalStorage(category: Category) {
  localStorage.setItem(category, JSON.stringify(ingredients[category]))
}
</script>

<style scoped>
.admin-container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1rem;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.ingredient-section {
  margin-bottom: 2rem;
}

h3 {
  margin-bottom: 0.5rem;
  color: #333;
}

ul {
  list-style: none;
  padding-left: 0;
}

.ingredient-item {
  display: flex;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.remove-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: #c0392b;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

input {
  flex: 1;
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.4rem 0.8rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>
