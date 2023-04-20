<script setup lang="ts">
import '@/assets/forms-layout.css'

import HostService from '@/components/HostService.vue'
import NextToHostMessage from '@/components/NextToHostMessage.vue'
import { saveUserToken } from '@/lib/user-token'

import { reactive, toRaw } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = reactive({
  email: '',
  password: '',
  name: '',
  tel: '',
  siteName: ''
})

const signup = async () => {
  const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(toRaw(user))
  })
  const data = await response.json()
  if (data.token) {
    saveUserToken(data.token)
    router.push('/dashboard')
  }
}
</script>

<template>
  <NextToHostMessage />

  <div class="register">
    <div class="service-selected">
      <HostService :is-selected="true"></HostService>
    </div>

    <form class="forms-layout form-register" @submit.prevent="signup">
      <fieldset>
        <header>
          <legend>Dados pessoais</legend>
          <span>Informe seus dados pessoais para acesso à sua conta</span>
        </header>

        <label>
          Nome completo:
          <input type="text" v-model="user.name" placeholder="Insira seu nome" />
        </label>

        <label>
          Celular:
          <input type="tel" v-model="user.tel" placeholder="Insira seu número" />
        </label>

        <label>
          E-mail:
          <input type="email" v-model="user.email" placeholder="Insira seu e-mail" />
        </label>

        <label>
          Senha:
          <input type="password" v-model="user.password" placeholder="Insira sua senha" />
        </label>

        <label>
          Confirma senha:
          <input type="password" placeholder="Insira sua senha" />
        </label>

        <VDivider></VDivider>

        <fieldset>
          <header>
            <legend>Dados do seu site</legend>
          </header>
          <label>
            Nome do seu site:
            <input type="text" v-model="user.siteName" placeholder="Insira o nome do site" />
            <span>Exatamente igual ao título do seu site</span>
          </label>

          <VDivider></VDivider>

          <label class="terms-checkbox">
            <input type="checkbox" checked />

            <span>
              Ao concluir com seu cadastro você concorda com nossos
              <span>
                <a href=""> Termos de uso</a> e
                <a href=""> politicas de privacidade.</a>
              </span>
            </span>
          </label>
        </fieldset>

        <div class="btn-login-container">
          <button type="submit">
            <VIcon icon="mdi-login-variant"></VIcon>
            Criar conta
          </button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style scoped>
.register {
  margin: 40px 0;
  text-align: center;
}
.form-register {
  display: inline-block;
  margin: 0 40px 40px 40px;
}
.service-selected {
  display: inline-block;
}
@media screen and (min-width: 1093px) {
  .form-register {
    float: left;
  }
  .service-selected {
    float: right;
  }
}

.terms-checkbox {
  display: flex;
  margin: 20px 0;
  padding: 0 40px;
}
.terms-checkbox input {
  height: 20px;
  width: 20px;
  accent-color: var(--links-color);
  float: left;
  margin: 0;
}
.terms-checkbox span {
  max-width: 80%;
}
.terms-checkbox a {
  border-bottom: 1px groove #666;
}
</style>
