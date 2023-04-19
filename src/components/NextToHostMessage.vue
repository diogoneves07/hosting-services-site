<script setup lang="ts">
import CompanyLogoCentered from './CompanyLogoCentered.vue'

const props = defineProps<{ subtitle?: string }>()
</script>

<template>
  <CompanyLogoCentered />
  <header class="header">
    <h2>
      <strong>Você está muito próximo de mudar a forma de</strong>
      <span>hospedar seu site</span>
    </h2>
    <span v-if="subtitle" class="subtitle">{{ props.subtitle }}</span>
  </header>
  <template> </template>
</template>
<style scoped>
.header {
  text-align: center;
  padding: 20px;
}
.header h2 {
  text-align: center;
  font-size: 30px;
}
.header h2 strong {
  float: left;
  width: 100%;
  font-weight: 900;
  color: #333;
}
.header h2 > span {
  color: var(--links-color);
  border-bottom: 2px solid var(--links-color);
  display: inline-block;
  font-weight: bold;
}

.subtitle {
  font-size: 18px;
  display: inline-block;
  margin: 10px;
}
</style>
