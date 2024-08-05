<template>
  <!-- 主體區域 -->
  <section id="app">
    <!-- 輸入框組件 -->
    <!-- 接收子組件 HeaderItem傳遞過來的數據 -->
    <TodoHeaderItem @add="add"></TodoHeaderItem>
    <!-- 清單組件 -->
     <!-- 利用 :屬性名="屬性值" 將數據傳遞給 MainItem組件 -->
     <!-- @del="del" 接受到 MainItem傳遞過來對應的 刪除功能的 id值 -->
    <TodoMainItem :todoList="todoList" @del="del"></TodoMainItem>
    <!-- 底部統計組件 -->
    <!-- 透過父傳子將數據傳遞給子組件 -->   <!-- 透過@事件名 接受子組件傳遞過來的事件 -->
    <TodoFooterItem :total="todoList" @clear="clear"></TodoFooterItem>
  </section>
</template>
<script>
// 1. 導入組件  
import TodoHeaderItem from './components/TodoHeaderItem.vue';   // 1.1 導入輸入框組件
import TodoMainItem from './components/TodoMainItem.vue';       // 1.2 導入清單組件 
import TodoFooterItem from './components/TodoFooterItem.vue';   // 1.3 導入底部統計組件

//1. 渲染功能 : 提供數據 -> 提供在 父組件 App.vue上
//2. 通過父傳子 , 將數據傳遞給 MainItem組件 
//3. MainItem組件接收數據後用 v-for 渲染

export default {
  data () {
    return {
    
      // 這樣todoList的數據就優先來本地調用 , 如果本地沒數據就默認給一個空數組
      todoList:JSON.parse(localStorage.getItem('storeList')) || []
    }
  }, 
  // 2. 註冊組件
  components:{
     TodoHeaderItem,     // 2.1 註冊輸入框組件
     TodoMainItem,       // 2.2 註冊清單組件 
     TodoFooterItem      // 2.3 註冊底部統計組件
  },
  methods:{
    
    // 利用 HeaderItem傳遞過來的數據 , 利用 unshift添加到 App.vue準備的數組上
    // 因為我們數據的是由 App.vue提供的 , 其他組件也是依照 App.vue進行渲染的 !! 
    add( enterWord ) {
      
      this.todoList.unshift({ id: +new Date , name: enterWord })

    },
    
    // 下面事件處理函數就根據 MainItem子組件傳遞過來的id值來做刪除功能就可以了!
    del( delId ) {
      
      this.todoList = this.todoList.filter( item => item.id !== delId )
    },

    // 處理 FooterItem 傳過來的事件 

    clear() {
      
      // 因為是要清空數據 所以也不用特地帶形參 直接聲明成空數組就可以了!!
      this.todoList = []
    }
  },

  watch: {
    // 在watch監視本地存儲功能
    todoList: {
      deep: true, // 記得要開啟深度監視(因為是複雜數據類型)
      handler( newValue ) {
        // 把更新後的值 存儲在本地裡面
        localStorage.setItem('storeList',JSON.stringify(newValue))
      }
    }
  }

}
</script>

<style>

</style>
