<template>
  <div class="container">
    <div class="navigation">
      <ul>
        <li v-for="{ icon, title } in list">
          <a href="">
            <span class="icon"><ion-icon :name="icon"></ion-icon></span>
            <span class="title">{{ title }}</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- main -->
    <div class="main">
      <div class="topbar">
        <div class="toggle">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <!-- search -->
        <div class="search">
          <label>
            <input type="text" placeholder="Search here" />
            <ion-icon name="search-outline"></ion-icon>
          </label>
        </div>
        <!-- userImg -->
        <div class="user">
          <img src="@/image/profile.png" alt="" />
        </div>
      </div>
      <!-- cards -->
      <div class="cardBox">
        <div v-for="{ number, cardName, icon } in cards" class="card">
          <div>
            <div class="numbers">{{ number }}</div>
            <div class="cardName">{{ cardName }}</div>
          </div>

          <div class="iconBx">
            <ion-icon :name="icon"></ion-icon>
          </div>
        </div>
      </div>
      <div class="details">
        <!-- order details list -->
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
              <tr v-for="{ name, price, payment, Status } in trTable">
                <td>{{ name }}</td>
                <td>{{ price }}</td>
                <td>{{ payment }}</td>
                <td>
                  <span :class="`status ${Status}`">{{ Status }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- New Customer -->
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'assets/scss/main.scss'

const list = [
  { icon: 'logo-apple', title: 'Brand Name' },
  { icon: 'home-outline', title: 'Dashboard' },
  { icon: 'person-outline', title: 'Customers' },
  { icon: 'chatbubble-outline', title: 'Message' },
  { icon: 'help-outline', title: 'Help' },
  { icon: 'settings-outline', title: 'Settings' },
  { icon: 'lock-closed-outline', title: 'Password' },
  { icon: 'log-out-outline', title: 'Sign Out' }
]
const cards = [
  { icon: 'eye-outline', number: '1,504', cardName: 'Daily Views' },
  { icon: 'cart-outline', number: '80', cardName: 'Sales' },
  { icon: 'chatbubbles-outline', number: '284', cardName: 'Comments' },
  { icon: 'cash-outline', number: '$7,842', cardName: 'Earning' }
]

const tdTable = ['Name', 'Price', 'Payment', 'Status']
const trTable = [
  {
    name: 'Window Coolers',
    price: '$1200',
    payment: 'Paid',
    Status: 'Delivered'
  },
  {
    name: 'Star Refrigerator',
    price: '$110',
    payment: 'Due',
    Status: 'Pending'
  },

  {
    name: 'Speakers',
    price: '$620',
    payment: 'Paid',
    Status: 'Return'
  },

  {
    name: 'Hp Laptop',
    price: '$110',
    payment: 'Due',
    Status: 'In-Progress'
  },
  {
    name: 'Apple Watch',
    price: '$1200',
    payment: 'Paid',
    Status: 'Delivered'
  },
  {
    name: 'Wall Fan',
    price: '$110',
    payment: 'Paid',
    Status: 'Pending'
  },
  {
    name: 'Adidas Shoes',
    price: '$620',
    payment: 'Paid',
    Status: 'Return'
  },
  {
    name: 'Denim Shirts',
    price: '$110',
    payment: 'Due',
    Status: 'In-Progress'
  },
  {
    name: 'Casual Shoes',
    price: '$575',
    payment: 'Paid',
    Status: 'Pending'
  },
  {
    name: 'Wall Fan',
    price: '$110',
    payment: 'Paid',
    Status: 'Pending'
  },
  {
    name: 'Denim Shirts',
    price: '$110',
    payment: 'Due',
    Status: 'In-Progress'
  }
]

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
  .navigation {
    position: fixed;
    width: 300px;
    height: 100%;
    background: var(--blue);
    border-left: 10px solid var(--blue);
    transition: 0.5s;
    overflow: hidden;
    @include for-size('desktop') {
      left: -300px;
    }
    @include for-size('phone') {
      width: 100%;
      left: -100%;
      z-index: 9999;
    }
    ul {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      li {
        position: relative;
        width: 100%;
        list-style: none;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        &:hover,
        &.hovered {
          a {
            &::before {
              content: '';
              position: absolute;
              top: -50px;
              right: 0;
              width: 50px;
              height: 50px;
              background: transparent;
              border-radius: 50%;
              box-shadow: 35px 35px 0 10px var(--white);
              pointer-events: none;
            }
            &::after {
              content: '';
              position: absolute;
              bottom: -50px;
              right: 0;
              width: 50px;
              height: 50px;
              background: transparent;
              border-radius: 50%;
              box-shadow: 35px -35px 0 10px var(--white);
              pointer-events: none;
            }
          }
        }
        a {
          position: relative;
          display: block;
          width: 100%;
          display: flex;
          text-decoration: none;
          color: var(--white);
          .title {
            position: relative;
            display: block;
            padding: 0 10px;
            height: 60px;
            line-height: 60px;
            text-align: start;
            white-space: nowrap;
          }
          .icon {
            position: relative;
            display: block;
            min-width: 60px;
            height: 60px;
            line-height: 70px;
            text-align: center;
            ion-icon {
              font-size: 1.75em;
            }
          }
        }
        &:hover,
        &.hovered {
          background: var(--white);
          a {
            color: var(--blue);
          }
        }
        &:nth-child(1) {
          margin-bottom: 40px;
          pointer-events: none;
        }
      }
    }
    &.active {
      width: 80px;
      @include for-size('desktop') {
        width: 300px;
        left: 0;
      }
      @include for-size('phone') {
        width: 100%;
        left: 0;
      }
    }
  }
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
    .topbar {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      .user {
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        @include for-size('phone') {
          min-width: 40px;
        }
        cursor: pointer;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .search {
        position: relative;
        width: 400px;
        margin: 0 10px;
        label {
          position: relative;
          width: 100%;
          ion-icon {
            position: absolute;
            top: 0;
            left: 10px;
            font-size: 1.2em;
          }
          input {
            width: 100%;
            height: 40px;
            border-radius: 40px;
            padding: 5px 20px;
            padding-left: 35px;
            font-size: 18px;
            outline: none;
            border: 1px solid var(--black2);
          }
        }
      }
      .toggle {
        position: relative;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5em;
        cursor: pointer;
        @include for-size('phone') {
          z-index: 10000;
        }
      }
    }
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
    .details {
      position: relative;
      width: 100%;
      padding: 20px;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 30px;
      @include for-size('tablet') {
        grid-template-columns: 1fr;
      }
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
    }
    &.active {
      width: calc(100% - 80px);
      left: 80px;
      @include for-size('desktop') {
        left: 300px;
      }
      @include for-size('phone') {
        .toggle {
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
