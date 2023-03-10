<template>
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
</template>

<script setup lang="ts">
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
</script>

<style scoped lang="scss">
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
</style>
