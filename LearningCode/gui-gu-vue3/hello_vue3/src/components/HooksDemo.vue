<template>
  <div class="hook">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我 sum 加一</button>
    <hr>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index" />
    <hr>
    <button @click="addDog">点我加一只狗</button>
  </div>
</template>

<script lang="ts" setup>
import useSum from "@/hooks/useSum";
import useDog from "@/hooks/useDog";

defineOptions({
  name: 'HooksDemo',
})

const {sum, add} = useSum()
const {dogList, addDog} = useDog()
</script>

<style scoped>
.hook {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>