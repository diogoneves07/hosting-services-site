<script setup lang="ts"></script>

<template>
  <div class="message">
    <div>
      <strong>A página não foi encontrada!</strong>
      <div class="icon-position">
        <VIcon icon="mdi-note-off-outline"></VIcon>
      </div>
    </div>
  </div>
</template>
<style scoped>
.message {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  font-size: 17px;
  min-height: 70vh;
}

.message div {
  max-width: 750px;
  padding: 20px;
}
.message p {
  margin-top: 30px;
  line-height: 38px;
}
.icon-position {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-size: 30px;
}
</style>
