<template>
  <div class="toggle">
    <ion-icon :name="name"></ion-icon>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
}

const props = defineProps<Props>()
</script>
