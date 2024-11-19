<script setup lang="ts">

  const nameGame = ref('');
  const difficultyGame = ref('');
  const boardGame = ref('')

  function submit() {

    $fetch("/api/v1/games", {
      method: "POST",
      body: {
        name: nameGame.value,
        difficulty: difficultyGame.value,
        board: boardGame.value,
      }
    })
}
</script>

<template>
  <div>
    <input v-model="nameGame" type="text" placeholder="Game name">
    <input v-model="difficultyGame" type="text" placeholder="Difficulty">
    <input v-model="boardGame" type="text" placeholder="boardGame">
    <br>
    <button @click="submit">Add</button>
  </div>
</template>

