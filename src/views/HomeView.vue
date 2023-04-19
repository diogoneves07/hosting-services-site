<script setup lang="ts">
import CompanyLogoCentered from '@/components/CompanyLogoCentered.vue'
</script>

<template>
  <header class="main-header">
    <div class="main-header-container">
      <div class="logo">
        <CompanyLogoCentered img-height="50px" />
      </div>
      <div class="account">D</div>
    </div>
  </header>
  <div class="text">
    <header>
      <h2>Olá Diogo Neves,</h2>
      <span>Seja bem vindo a sua conta de hospedagem.</span>
    </header>
    <CompanyLogoCentered class="media" img-height="400px" />

    <span class="help-center"
      >Caso tenha alguma dúvida, <a href="">visita nossa central de ajuda</a>.</span
    >
  </div>
</template>
<style scoped>
.main-header {
  height: 90px;
}

.main-header-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 15px 50px 20px 25px;
  background-color: #f4f4f4;
  height: 85px;
  z-index: 9999;
}
.logo {
  float: left;
}
.account {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #c0c0c0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 25px;
  float: right;
}
.text {
  text-align: left !important;
  float: left;
  min-width: 680px;
  max-width: 100%;
}
.text h2 {
  font-size: 30px;
}
.media {
  margin: 50px 0;
}
.help-center a {
  border-bottom: 1px groove #555;
}
</style>
