<script setup lang="ts">
import '@/assets/forms-layout.css'
import CompanyLogoCentered from './CompanyLogoCentered.vue'
</script>

<template>
  <CompanyLogoCentered />
  <form class="forms-layout">
    <fieldset>
      <header>
        <legend>Entre na sua conta</legend>
        <span>Para acessar sua conta informe seu e-mail e senha</span>
      </header>

      <label>
        E-mail:
        <input type="email" placeholder="Insira seu e-mail" />
      </label>

      <label>
        Senha:
        <input type="password" placeholder="Insira sua senha" />
      </label>

      <div class="forgot-password-container">
        <a href="">Esqueci minha senha</a>
      </div>

      <div class="btn-login-container">
        <button type="submit">
          <VIcon icon="mdi-login-variant"></VIcon>
          Fazer login
        </button>
      </div>
    </fieldset>
  </form>

  <div class="link-to-create-account">
    <span>Ainda não tem conta? <a href="">Cadastre-se</a></span>
  </div>
</template>

<style scoped>
.forgot-password-container {
  opacity: 0.9;
  text-align: right;
  padding-right: 10%;
}

.link-to-create-account {
  text-align: center;
  font-size: 20px;
  margin: 50px;
}
.link-to-create-account a {
  color: var(--links-color);
  border-bottom: 1px solid var(--links-color);
}
</style>
