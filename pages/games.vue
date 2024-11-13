<script setup lang="ts">
import { Input } from 'postcss';


  const nameInput = ref('');
  const emailInput = ref('');
  const pole = []

  function submit() {

    $fetch("/api/addUser", {
      method: "POST",
      body: {
        name: nameInput.value,
        email: emailInput.value
      }
  })
}
</script>

<template>
  <div>
    <input v-model="nameInput" type="text" placeholder="Name">
    <input v-model="emailInput" type="text" placeholder="Email">
    <br>
    <button @click="submit">Add</button>
  </div>
</template>