<template>
  <div>
    <v-header title="首页">
      <router-link slot="right" v-if="user.name" to="/home">{{user.name}}</router-link>
    </v-header>
    <div class="login-msg" v-if="!user.name">
      <router-link to="/login">你还未登录，请先登录</router-link>
    </div>
    <div class="msg" v-if="user.name">
      <img width="50" :src="logo" alt />
      <br />
      哈哈，{{user.name}}
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import logo from "./logo.png";
export default {
  data() {
    return {
      logo,
    };
  },
  computed: mapState({ user: (state) => state.user }),
};
</script>
<style lang="less" scoped>
.login-msg {
  padding: 50px;
  text-align: center;
}
.msg {
  padding: 50px;
  text-align: center;
  font-size: 20px;
  color: red;
}
</style>