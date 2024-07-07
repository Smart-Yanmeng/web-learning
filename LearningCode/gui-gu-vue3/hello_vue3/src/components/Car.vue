<template>
  <div class="car">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万元</h2>
    <button @click="changePrice">改变价格</button>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue";

defineOptions({
  name: 'Car',
})
let car = reactive({
  brand: '奔驰',
  price: 100,
})

function changePrice(): void {
  car.price += 10
}
</script>

<style scoped>
.car {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 10px;
}
</style>