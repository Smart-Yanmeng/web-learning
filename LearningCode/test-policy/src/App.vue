<template>
  <div id="app">
    <Tree />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tree from './components/Tree.vue';

export default defineComponent({
  name: 'App',
  components: {
    Tree,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
