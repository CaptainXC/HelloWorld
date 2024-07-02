<script setup lang="ts">
import HeaderView from "@/components/HeaderView.vue";
</script>

<template>
  <section class="page-layout">
    <!-- 头部 -->
    <header class="page-layout-header">
      <div class="page-layout-row">
        <!-- 引⼊公共的头部组件 -->
        <HeaderView />
      </div>
    </header>
    <!-- 主体 -->
   <main class="page-layout-content">
    <section class="starter-content">
      <div class="page-layout-row">
        我是一个主体
        <RouterView />
      </div>
    </section>
    </main>
  </section>
</template>

<style scoped>
.page-layout {
  display: flex;
  flex-direction: column;
  background: #0800f9;
  .page-layout-header {
    display: flex;
    justify-content: center;
    min-width: 760px;
    height: 66px;
    background: #fc0606;
    border-bottom: 1px solid #0aa527;
    box-shadow: 0 2px 8px 0 rgba(0, 2, 4, 0.1);
  }
  .page-layout-row {
    width: 1440px;
    display: flex;
    background: #0fffdf;
    flex-direction: column;
  }
  .page-layout-content {
    flex: 1;
  }
  .starter-content {
    height: calc(100vh - 66px);
    display: flex;
    justify-content: center;
  }
}
</style>