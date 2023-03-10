<template>
  <div class="search">
    <label>
      <input type="text" :placeholder="placeholder" />
      <ion-icon :name="name"></ion-icon>
    </label>
  </div>
</template>

<script setup lang="ts">
interface Props {
  placeholder: string
  name: string
}

const props = defineProps<Props>()
</script>
