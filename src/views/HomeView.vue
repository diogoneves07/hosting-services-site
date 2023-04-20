<script setup lang="ts">
import CompanyLogoCentered from '@/components/CompanyLogoCentered.vue'
import { getUserToken } from '../lib/user-token'
import { useRouter } from 'vue-router'

if (getUserToken() === false) {
  useRouter().push('/login')
}
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
  padding: 15px 20px 20px 0px;
  background-color: #f4f4f4;
  height: 85px;
  z-index: 9999;
}
@media screen and (min-width: 500px) {
  .main-header-container {
    padding: 15px 25px 20px 25px;
  }
}
.logo {
  float: left;
  position: relative;
  left: -16px;
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
  max-width: 100%;
  padding: 0 20px;
}

@media screen and (min-width: 800px) {
  .text {
    min-width: 750px;
  }
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
