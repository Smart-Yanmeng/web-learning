<script setup lang="ts">
import type {PeopleList} from "@/types";

defineOptions({
  name: 'People',
})

// defineProps(['list'])
// defineProps<{list: PeopleList}>()
withDefaults(defineProps<{ list?: PeopleList }>(), {
  list: () => [{id: 'ovo', name: '康师傅', age: 100}]
});
</script>

<template>
  <div class="people">
    <!--    <h2>{{ list }}</h2>-->
    <ul>
      <li v-for="item in list" :key="item.id">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
.people {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 10px;
}
</style>