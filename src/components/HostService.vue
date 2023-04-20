<script setup lang="ts">
import { ref } from 'vue'
import DefaultButton from './DefaultButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  show?: boolean
  price?: string
  isPopular?: boolean
  isSelected?: boolean
  onSelected?: () => void
}>()

const priceIsNumber = !Number.isNaN(parseFloat(props.price || ''))

let show = ref(props.show || false)

function toggleDisplay() {
  show.value = !show.value
}
function onSelected() {
  props.onSelected && props.onSelected()
  router.push('/cadastro')
}
</script>

<template>
  <VCard class="mx-auto card-container" max-width="344">
    <span v-if="isPopular" class="more-used">MAIS USADO</span>
    <span v-if="isSelected" class="more-used selected">PLANO ESCOLHIDO</span>

    <VCardTitle> <h3 class="title">Hospedagem 1</h3> </VCardTitle>

    <strong class="price">
      <span v-if="priceIsNumber">R$</span>{{ price }}<span v-if="priceIsNumber">/mês</span></strong
    >

    <span class="subtitle"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>

    <span class="subtitle subtitle-message">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </span>

    <DefaultButton v-if="!isSelected" class="get-service-btn" @click="onSelected">
      ESCOLHER ESSE PLANO
    </DefaultButton>

    <DefaultButton v-if="isSelected" class="toggle-service-btn">TROCAR PLANO </DefaultButton>

    <VCardActions class="actions">
      <VBtn color="orange-lighten-2" variant="text" @click="toggleDisplay()"> Ver mais... </VBtn>

      <v-spacer></v-spacer>

      <VBtn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="toggleDisplay()"> </VBtn>
    </VCardActions>

    <VExpandTransition>
      <div v-show="show">
        <VDivider></VDivider>

        <VCardText class="details">
          <p>
            <VIcon icon="mdi-check-outline"></VIcon>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit, libero dolore
            laborum ab.
          </p>

          <p><strong>Maxime beatae velit debitis soluta doloribus!</strong></p>

          <p>
            <VIcon icon="mdi-check-outline"></VIcon>
            Corporis velit sint laborum aperiam omnis dicta. Nemo, cum!
          </p>
          <p><strong>Maxime beatae velit debitis soluta doloribus!</strong></p>

          <p>
            <VIcon icon="mdi-check-outline"></VIcon>
            Corporis velit sint laborum aperiam omnis dicta. Nemo, cum!
          </p>
        </VCardText>
      </div>
    </VExpandTransition>
  </VCard>
</template>

<style scoped>
.card-container {
  text-align: center;
  background-color: #ffffff;
  color: #333;
  padding: 20px 0;
  margin: 0px 30px 50px 30px !important;
}
.price {
  color: var(--links-color);
  font-size: 35px;
  float: left;
  width: 100%;
}
.price span {
  font-size: 20px;
  color: var(--links-color);
}
.title {
  font-size: 30px;
  color: #4f4f4f;
}
.subtitle {
  text-align: center;
  font-size: 15px;
  float: left;
  width: 100%;
  margin: 20px 5%;
  color: #444;
}
.subtitle-message {
  font-size: 17px;
  border-width: 1px 0;
  border-color: #d4d4d4;
  border-style: solid;
  padding: 20px 10px;
}

.get-service-btn {
  color: #fff;
}
.actions {
  margin: 30px 0;
}

.toggle-service-btn {
  background-color: transparent;
  color: #000;
  border: 1px solid #000;
}
.details p {
  margin: 20px 0;
  color: #444;
  float: left;
  text-align: justify;
  padding: 0px;
}
.details p > strong {
  font-size: 17px;
  color: #444;
}
.details i {
  padding: 15px;
}
.more-used {
  background-color: #10c300;
  display: inline-block;
  padding: 8px 20px 5px;
  border-radius: 10px;
  color: #fff;
  margin: 15px 0;
}
.selected {
  background-color: #000;
}
</style>
