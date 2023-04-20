<script setup lang="ts">
import HostService from '@/components/HostService.vue'
import NextToHostMessage from '@/components/NextToHostMessage.vue'
import { setHostService } from '@/lib/host-service'
</script>

<template>
  <NextToHostMessage subtitle="Escolha seu plano" />

  <div class="services">
    <HostService :on-selected="() => setHostService('Grátis')" price="Grátis"></HostService>
    <HostService
      :on-selected="() => setHostService('499')"
      price="499"
      :isPopular="true"
    ></HostService>
    <HostService :on-selected="() => setHostService('999')" price="999"></HostService>
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
