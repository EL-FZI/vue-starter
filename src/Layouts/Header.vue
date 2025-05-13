<script setup lang="ts">

</script>

<template>
  <header class="header">
    <nav>
      <RouterLink :to="{name: 'home'}">Home</RouterLink>
      <RouterLink :to="{name: 'saved'}">Saved Sandwiches</RouterLink>
      <RouterLink :to="{name: 'backoffice'}">Backoffice</RouterLink>
    </nav>
  </header>
</template>

<style scoped>

</style>