<template>
  <div class="recentOrders">
    <div class="cardHeader">
      <h2>Recent Orders</h2>
      <a href="#" class="btn">View All</a>
    </div>
    <table>
      <thead>
        <tr>
          <td v-for="td in tdTable">{{ td }}</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="{ name, price, payment, status } in trTable">
          <td>{{ name }}</td>
          <td>{{ price }}</td>
          <td>{{ payment }}</td>
          <td>
            <span :class="`status ${status}`">{{ status }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useDashboard } from '@/stores/dashboard'

const dashboard = useDashboard()
const tdTable = ['Name', 'Price', 'Payment', 'Status']
const trTable = dashboard.orders
</script>

<style scoped lang="scss">
.recentOrders {
  position: relative;
  display: grid;
  min-height: 500px;
  background: var(--white);
  padding: 20px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  @include for-size('tablet') {
    overflow-x: auto;
  }
  .imgBx {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  table {
    tr {
      &:hover {
        background: var(--blue);
        color: var(--white);
      }
    }
  }
  .cardHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    h2 {
      font-weight: 600;
      color: var(--blue);
      @include for-size('phone') {
        font-size: 18px;
      }
    }
    .btn {
      position: relative;
      padding: 5px 10px;
      background: var(--blue);
      text-decoration: none;
      color: var(--white);
      border-radius: 6px;
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    thead td {
      font-weight: 600;
    }
    thead tr {
      &:hover {
        background: var(--white);
        color: var(--black1);
      }
    }
    tr {
      &:last-child {
        border-bottom: none;
      }
      td {
        padding: 10px;
        &:last-child {
          text-align: end;
        }
        &:nth-child(2) {
          text-align: end;
        }
        &:nth-child(3) {
          text-align: center;
        }
      }
    }
    tbody tr {
      color: var(--black1);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      &:hover {
        background: var(--blue);
        color: var(--white);
      }
    }
    tbody {
      @each $status in Delivered, Pending, Return, 'In-Progress' {
        .status {
          color: var(--white);
          border-radius: 4px;
          font-size: 14px;
          font-weight: 500;
          padding: 2px 4px;
          @if ($status == 'Delivered') {
            &.#{$status} {
              background: #8de02c;
            }
          } @else if($status == 'Pending') {
            &.#{$status} {
              background: #f9ca3f;
            }
          } @else if($status == 'Return') {
            &.#{$status} {
              background: #f00;
            }
          } @else {
            &.#{$status} {
              background: #1795ce;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}
</style>
