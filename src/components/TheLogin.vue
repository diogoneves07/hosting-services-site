<script setup lang="ts">
import '@/assets/forms-layout.css'
import CompanyLogoCentered from './CompanyLogoCentered.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { saveUserToken, deleteUserToken } from '../lib/user-token'
import { useUserStore } from '../stores/user'

// Auto logout
deleteUserToken()

const unauthorizedStatusCode = 401

const router = useRouter()

const { setUser } = useUserStore()

let email = ref('johnd')
let password = ref('m38rmF$')

let loginFailed = ref(false)

async function login() {
  loginFailed.value = false

  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: email.value,
      password: password.value
    })
  })

  if (response.status === unauthorizedStatusCode) {
    loginFailed.value = true
  } else {
    const data = await response.json()

    setUser({ username: email.value })
    saveUserToken(data.token)
    router.push('/dashboard')
  }
}
</script>

<template>
  <CompanyLogoCentered />
  <form class="forms-layout" @submit.prevent="login">
    <fieldset>
      <header>
        <legend>Entre na sua conta</legend>
        <span>Para acessar sua conta informe seu e-mail e senha</span>
      </header>

      <strong
        :style="{
          opacity: loginFailed ? 1 : 0
        }"
        class="login-failed"
      >
        {{ loginFailed ? 'A senha e/ou o email estão incorretos!' : '' }}
      </strong>

      <label>
        E-mail:
        <input type="text" v-model="email" placeholder="Insira seu e-mail" />
      </label>

      <label>
        Senha:
        <input type="password" v-model="password" placeholder="Insira sua senha" />
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
    <span>Ainda não tem conta? <a href="/planos">Cadastre-se</a></span>
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
  font-size: 18px;
  margin: 50px;
}
.link-to-create-account a {
  color: var(--links-color);
  border-bottom: 1px solid var(--links-color);
}
.login-failed {
  color: var(--links-color);
  text-align: center;
  display: inline-block;
  margin: 20px 0 0px;
  width: 100%;
  transition: 1s all ease-in-out;
  opacity: 0;
}
</style>
