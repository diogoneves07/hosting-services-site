<script setup lang="ts">
import HostService from '@/components/HostService.vue'
import NextToHostMessage from '@/components/NextToHostMessage.vue'
import { setHostService } from '@/lib/host-service'
</script>

<template>
  <NextToHostMessage subtitle="Escolha seu plano" />

  <div class="services">
    <HostService
      title="Hospedagem 1"
      :on-selected="() => setHostService('Grátis', 'Hospedagem 1')"
      price="Grátis"
    />
    <HostService
      title="Hospedagem 2"
      :on-selected="() => setHostService('499', 'Hospedagem 2')"
      price="499"
      :isPopular="true"
    />
    <HostService
      title="Hospedagem 3"
      :on-selected="() => setHostService('999', 'Hospedagem 3')"
      price="999"
    />
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
