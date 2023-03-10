<template>
  <div class="recentCustomers">
    <div class="cardHeader">
      <h2>Recent Customers</h2>
    </div>
    <table>
      <tr v-for="{ name, country, index } in customers">
        <td width="60px">
          <div class="imgBx">
            <img :src="`image/customers/img${index}.jpg`" />
          </div>
          <h4>
            {{ name }} <br />
            <span>{{ country }}</span>
          </h4>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
const customers = [
  { name: 'David', country: 'Italy', index: 1 },
  { name: 'Muhammad', country: 'India', index: 2 },
  { name: 'Amelia', country: 'France', index: 3 },
  { name: 'Olivia', country: 'USA', index: 4 },
  { name: 'Amit', country: 'Japan', index: 5 },
  { name: 'Ashraf', country: 'India', index: 6 },
  { name: 'Diana', country: 'Malaysia', index: 7 },
  { name: 'Amit', country: 'India', index: 8 }
]
</script>

<style scoped lang="scss">
.recentCustomers {
  position: relative;
  display: grid;
  min-height: 500px;
  padding: 20px;
  background: var(--white);
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  .cardHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    h2 {
      font-weight: 600;
      color: var(--blue);
      @include for-size('phone') {
        font-size: 20px;
      }
    }
  }
  .imgBx {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  table tr td {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    padding: 12px 10px;
    h4 {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.2em;
      span {
        font-size: 14px;
        color: var(--black2);
      }
    }
  }
  table tr {
    &:hover {
      background: var(--blue);
      color: var(--white);
      span {
        color: var(--white);
      }
    }
  }
}
</style>
