<template>
  <div class="person">
    姓：<input type="text" v-model="person.firstName"> <br>
    名：<input type="text" v-model="person.lastName"> <br>
    全名：<span>{{ fullName }}</span> <br>
    年龄：<span>{{ person.age }}</span> <br>
    <button @click="changeFullName">改全名</button>
    <br>
    <button @click="changeAge">改年龄</button>
    <br>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref, watch} from "vue";

defineOptions({
  name: 'Person',
})

let person = ref({
  firstName: '张',
  lastName: '三',
  age: 18,
})

let fullName = computed({
  get() {
    return person.value.firstName + '-' + person.value.lastName
  },
  set(val) {
    const [str1, str2] = val.split('-')
    person.value.firstName = str1
    person.value.lastName = str2
  }
})

function changeFullName(): void {
  fullName.value = '哈哈-全名被我改了吧！'
}

function changeAge(): void {
  person.value.age += 1
}

watch(person, (newVal, oldVal) => {
  console.log(newVal, oldVal)
}, {deep: true})
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 10px;
}
</style>