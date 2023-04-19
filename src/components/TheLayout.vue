<script setup lang="ts"></script>

<template>
  <div class="layout">
    <div class="layout-content">
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  background-color: var(--dark-background-color);
  background-attachment: fixed;
}

.layout-content {
  min-height: 100vh;
  background-color: var(--dark-background-color-soft);
  background-attachment: fixed;
  padding: 2% 5px;
}
.layout-content main {
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
}

.layout-header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #fff;
}

.layout-header div {
  height: 45px;
  background-color: rgb(1, 18, 43);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  padding: 20px;
}

.layout-header a {
  display: flex;
  align-items: center;
  justify-content: center;
}

.layout-header svg {
  font-size: 30px;
}

.layout-header span {
  padding: 5px;
}
</style>
