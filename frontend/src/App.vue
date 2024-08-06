<template>
  <div id="app">
    <header>
      <h1>Recipe Organizer & Meal Planner</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/recipes">Recipes</router-link> |
        <router-link to="/meal-plans">Meal Plans</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

nav {
  margin-top: 10px;
}

nav a {
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  font-weight: bold;
}
</style>