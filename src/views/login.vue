<template>
  <div>
    <h1>ログイン画面</h1>
    <input type="text" v-model="email" placeholder="メールアドレスを入力">
    <div>
      <input type="password" v-model="password" placeholder="パスワードを入力してください">
    </div>
    
    <button @click="login">ログイン</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      email:"",
      password:"",
    }
  },
  methods:{
    login(){
      //通信ライブラリでデータを送る
      axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + "AIzaSyAR4HImtY6KRc9Mv0QjHsbWn0FLfl-JEgc",{
        
        email:this.email,
        password:this.password
      })
      //うまくいったときの処理
      .then(response => {
        console.log(response)
        this.$router.push('/kintai')
        
        //うまくいかなかったときの処理
      }).catch(() => {
        alert("メールアドレスまたはパスワードが間違っています。やり直してください。")
      })
        
    }
  }
}
</script>