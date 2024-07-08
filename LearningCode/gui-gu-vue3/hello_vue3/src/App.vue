<template>
  <Person/>
  <Car/>
  <Sum/>
  <People :list="peopleList"/>
  <HooksDemo></HooksDemo>
</template>

<script setup lang="ts">
import Person from "@/components/Person.vue";
import Car from "@/components/Car.vue";
import Sum from "@/components/Sum.vue";
import {type PeopleList} from '@/types';
import {reactive} from "vue";
import People from "@/components/People.vue";
import HooksDemo from "@/components/HooksDemo.vue";

defineOptions({
  name: 'App',
})

let peopleList = reactive<PeopleList>([
  {id: 'qwq', name: '张三', age: 18},
  {id: 'awa', name: '李四', age: 20},
  {id: 'ava', name: '王五', age: 90},
])
</script>