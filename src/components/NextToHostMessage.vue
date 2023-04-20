<script setup lang="ts">
import CompanyLogoCentered from './CompanyLogoCentered.vue'
import { defineProps } from 'vue'

const props = defineProps({
  subtitle: String
})
</script>

<template>
  <div>
    <CompanyLogoCentered />
    <header class="header">
      <h2>
        <strong>Você está muito próximo de mudar a forma de hospedar seu site</strong>
        <span>hospedar seu site</span>
      </h2>
      <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
    </header>
  </div>
</template>

<style scoped>
.header {
  text-align: center;
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  justify-items: center;
}
.header h2 {
  text-align: center;
  font-size: 30px;
  max-width: 80%;
  min-width: 380px;
  margin: 0;
}
.header h2 strong {
  font-weight: 900;
  color: #333;
}
.header h2 > span {
  color: var(--links-color);
  border-bottom: 2px solid var(--links-color);
  font-weight: bold;
  display: inline-block;
}

.subtitle {
  font-size: 18px;
  margin: 10px;
}
</style>
