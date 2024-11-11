<script setup lang="ts">
import {computed, ref} from "vue";

let firstName = ref('york')
let lastName = ref('smith')
let fullName = computed({
  get() {
    return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
  },
  set(val) {
    const [str1, str2] = val.split('-')
    firstName.value = str1
    lastName.value = str2
  }
})
</script>

<template>
  <input placeholder="First Name" v-model="firstName"/>
  <input placeholder="Last Name" v-model="lastName"/>
  <h1>
    <hr>
    {{ fullName }}
  </h1>
</template>

<style scoped>
input {
  height: 30px;
  font-size: medium;
  margin: 0 10px;
}
</style>
