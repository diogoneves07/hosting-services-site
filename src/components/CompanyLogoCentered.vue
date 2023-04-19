<script setup lang="ts">
const props = defineProps<{ imgHeight?: string }>()
</script>
<template>
  <div class="company-logo">
    <img :style="{ height: props.imgHeight || '' }" src="../assets/logo.svg" />
  </div>
</template>
<style scoped>
.company-logo {
  text-align: center;
  margin: 0 30px 30px;
}
.company-logo img {
  height: 100px;
  max-width: 80%;
}
</style>
