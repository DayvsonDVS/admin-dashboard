<template>
  <div class="cardBox">
    <div v-for="{ icon, name, number } in cards" class="card">
      <div>
        <Numbers :number="number" />
        <CardName :name="name" />
      </div>

      <IconBx :icon="icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDashboard } from '@/stores/dashboard'

const dashboard = useDashboard()

const cards = dashboard.card
</script>

<style scoped lang="scss">
.cardBox {
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  @include for-size('desktop') {
    grid-template-columns: repeat(2, 1fr);
  }
  @include for-size('phone') {
    grid-template-columns: 1fr;
  }
  .card {
    position: relative;
    background: var(--white);
    padding: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    &:hover {
      background: var(--blue);
      .numbers,
      .cardName,
      .iconBx {
        color: var(--white);
      }
    }
    .numbers {
      position: relative;
      font-weight: 500;
      font-size: 2.5em;
      color: var(--blue);
    }
    .cardName {
      color: var(--black2);
      font-size: 1.1em;
      margin-top: 5px;
    }
    .iconBx {
      font-size: 3.5em;
      color: var(--black2);
    }
  }
}
</style>
