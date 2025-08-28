<template>
  <nav>
    <router-link to="/">Ana Sayfa</router-link>
  </nav>
  <router-view/>
</template>

<style>

router-link {
  text-decoration: none;
  color: inherit;       
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: rgb(20, 220, 87);
}
</style>
