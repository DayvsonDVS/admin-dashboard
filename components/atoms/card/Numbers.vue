<template>
  <div class="numbers">
    {{ number }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  number: string
}

const props = defineProps<Props>()
</script>
