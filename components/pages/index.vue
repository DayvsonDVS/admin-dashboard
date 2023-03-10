<template>
  <div class="container">
    <Navigation />

    <div class="main">
      <TopBar />

      <CardBx />

      <Details />
    </div>
  </div>
</template>

<script setup lang="ts">
import 'assets/scss/main.scss'

onMounted(() => {
  const elements = document.querySelectorAll('.navigation li')
  const toggle = document.querySelector('.toggle')
  const navigation = document.querySelector('.navigation')
  const main = document.querySelector('.main')

  toggle?.addEventListener('click', () => {
    navigation?.classList.toggle('active')
    main?.classList.toggle('active')
  })

  elements.forEach((el) => {
    el.addEventListener('mouseover', () => {
      removeHovered()
      el.classList.add('hovered')
    })
  })

  function removeHovered() {
    elements.forEach((el) => {
      el.classList.remove('hovered')
    })
  }
})
</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  .main {
    position: absolute;
    width: calc(100% - 300px);
    left: 300px;
    min-height: 100vh;
    background: var(--white);
    transition: 0.5s;
    @include for-size('desktop') {
      width: 100%;
      left: 0;
    }
    &.active {
      width: calc(100% - 80px);
      left: 80px;
      @include for-size('desktop') {
        left: 300px;
      }
      @include for-size('phone') {
        :deep(.toggle) {
          position: fixed;
          right: 0;
          left: initial;
          color: var(--white);
        }
      }
    }
  }
}
</style>
