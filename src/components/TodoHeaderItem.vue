<template>
  <!-- 輸入框 -->
  <header class="header">
      <h1>記事本</h1>
      <!-- 1. 給輸入框做 v-model 雙向數據綁定   --> 
      <!-- 3. 因為還要有 按enter可以輸入效果 這裡給表單註冊 keyup事件 然後處理函數和添加一樣  -->
      <input placeholder="請輸入任務" class="new-todo" v-model.trim="enterWord" @keyup.enter="add"/>
      <!-- 2. 給按鈕做點擊事件  -->
      <button class="add" @click.enter="add" >添加任務</button>
  </header>
</template>
<script>

export default {

  data() {

    return {
      
      // 4. 準備空串 接受 輸入框傳過來的數據
      enterWord:''

    }
  },
  methods:{
    add() {
      // 7. 優化做一個非空判斷 
      if ( this.enterWord === '' ) {

         alert('請確認是否有輸入內容!')

         return
      }    
      // 5. 透過 this.$emit() 進行 子傳父 按下按鈕後將表單輸入的值傳遞給 App.vue父組件
      this.$emit('add' , this.enterWord )
      
      // 6. 輸入完成後做清空表單功能 ! 
      this.enterWord = ''
    }
  }
}
</script>

<style>

</style>