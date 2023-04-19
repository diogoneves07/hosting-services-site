<script setup lang="ts"></script>
<template>
  <button>
    <slot></slot>
  </button>
</template>
<style scoped>
button {
  background-color: var(--links-color);
  width: 300px;
  padding: 15px;
  color: #dcdcdc;
  font-size: 17px;
  border-radius: 5px;
  margin: 20px 0;
}
</style>
