<template>
    <!-- 統計和清空 -->
    <footer class="footer">
      <!-- 統計 -->
                             <!-- 通過父組件傳過來的總數據的長度來做 合計模塊的渲染就OK了 -->
      <span class="todo-count">合 計:<strong>{{ total.length }}</strong></span>
      <!-- 清空 -->
                                      <!-- 給清空按鈕添加點擊事件 -->
      <button class="clear-completed" @click="clear">
        清空任務
      </button>
    </footer>
</template>

<script>
export default {
  
  // props接受 父組件傳遞過來的總數據

  props:{
    
    total:{
      type:Array
    }

  },

  methods:{
    
    // 在事件處理函數 用 this.$emit進行子傳父 把事件傳遞給父組件
    clear() {

      this.$emit('clear')
    }
  }

  
}
</script>

<style>

</style>