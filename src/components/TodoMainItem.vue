<template>
  <!-- 清單區域 -->
  <section class="main">
      <ul class="todo-list">
        <!-- 2. 上面用 v-for進行渲染 -->
        <li class="todo" v-for=" ( item , index ) in todoList" :key="item.id">
          <div class="view">
            <span class="index">{{ index + 1 }}</span><label>{{ item.name }}</label>
            <!-- 做刪除功能 綁定點擊事件 並傳遞對應的 id 值 ( item.id ) -->
            <button class="destroy" @click="del(item.id)"></button>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>
export default {
  

  // 1. 子組件用 props接收父組件傳遞過來的數據
  props : {
    todoList: Array
  },

  methods:{
    
    // 事件處理函數這裡通過 $emit 把點擊後的 id值傳遞給父組件 App.vue
    del(id) {

      this.$emit('del' , id)  
      
    }
  }

}
</script>

<style>

</style>