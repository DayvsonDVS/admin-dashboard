<template>
  <div class="iconBx">
    <ion-icon :name="icon"></ion-icon>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
}

const porps = defineProps<Props>()
</script>

<style scoped lang="scss">
.iconBx {
  font-size: 3.5em;
  color: var(--black2);
}
</style>
