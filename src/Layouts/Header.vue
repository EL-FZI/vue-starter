<template>
  <header class="header">
    <nav>
      <RouterLink class="link" to="/">Home/</RouterLink>
      <RouterLink class="link" to="/saved">Saved Sandwiches/</RouterLink>
      <RouterLink class="link" to="/backoffice">Backoffice</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.header {
  background-color: #333;
  padding: 1rem;
}

nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.link {
  color: white;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>