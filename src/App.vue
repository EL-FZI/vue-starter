<template>
    <div>
      <nav>
        <router-link to="/">Accueil</router-link> |
        <router-link to="/saved">Sauvegardés</router-link> |
        <router-link to="/backoffice">Backoffice</router-link>
      </nav>
      <router-view />
    </div>
  </template>