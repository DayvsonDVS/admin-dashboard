<template>
  <div class="topbar">
    <Toggle name="menu-outline" />

    <Search name="search-outline" placeholder=" Search here" />

    <User />
  </div>
</template>

<style scoped lang="scss">
.topbar {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  :deep(.user) {
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
    :deep(label) {
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
  :deep(.toggle) {
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
</style>
