<template>
<!--  <Person/>-->
<!--  <Car/>-->
<!--  <Sum/>-->
<!--  <People :list="peopleList"/>-->
<!--  <HooksDemo></HooksDemo>-->
  <RouterView></RouterView>
  <RouterLink to="/home">主页面</RouterLink>
  <RouterLink to="/news">新闻</RouterLink>
  <RouterLink to="/about">关于</RouterLink>
<!--  <China/>-->
</template>

<script setup lang="ts">
import Person from "@/components/Person.vue";
import Car from "@/components/Car.vue";
import Sum from "@/components/Sum.vue";
import {type PeopleList} from '@/types';
import {reactive} from "vue";
import People from "@/components/People.vue";
import HooksDemo from "@/components/HooksDemo.vue";
import China from "@/components/China.vue";
// import {RouterView} from "vue-router";

defineOptions({
  name: 'App',
})

let peopleList = reactive<PeopleList>([
  {id: 'qwq', name: '张三', age: 18},
  {id: 'awa', name: '李四', age: 20},
  {id: 'ava', name: '王五', age: 90},
])
</script>

<style>
body, html {
  margin: 0;
}
</style>