<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
  <h1>Welcome to {{ title }}</h1>
  <button  @click="SetTitle">change title</button>
  <router-view/>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue"
import TitleModule from './store/Title'

export default defineComponent({
  name: "App",
  setup() {
    const title = computed(() => TitleModule.GetTitle)

    const SetTitle = () => {
      TitleModule.SetTitle('New title')
    }

    return {
      title,
      SetTitle
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
