<template>
  <div class="sum">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我 sum + 1</button>
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from "vue";

defineOptions({
  name: 'Sum',
})

let sum = ref(0)

function changeSum() {
  sum.value += 1
}

watch(sum, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
</script>

<style scoped>
.sum {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 10px;
}
</style>