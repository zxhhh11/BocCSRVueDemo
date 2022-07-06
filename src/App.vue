<template>
  <div>
    <!-- app.vue -->
    <router-view />
  </div>
</template>
<script lang="ts"></script>
<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
#app > div {
  width: 100%;
  height: 100%;
  background: #f4f8fa;
  box-sizing: border-box;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
