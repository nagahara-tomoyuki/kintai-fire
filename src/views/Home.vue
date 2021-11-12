<template>
  <div class="home">
    <h1>ホーム画面</h1>
    <router-link to="/login">アカウントをお持ちの方はこちら</router-link>
    <div>
      <router-link to="/about">アカウントをお持ちじゃない方はこちら</router-link>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>
