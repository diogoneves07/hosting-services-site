<script setup lang="ts">
import HostService from '@/components/HostService.vue'
import NextToHostMessage from '@/components/NextToHostMessage.vue'
</script>

<template>
  <NextToHostMessage subtitle="Escolha seu plano" />

  <div class="services">
    <HostService></HostService>
    <HostService price="499" :isPopular="true"></HostService>
    <HostService price="999"></HostService>
  </div>
</template>

<style scoped>
.services {
  margin: 70px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
