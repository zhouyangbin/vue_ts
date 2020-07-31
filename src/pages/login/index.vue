<template>
  <div class="login_container">
    <v-header title="登录">
      <router-link slot="left" to="/">返回</router-link>
    </v-header>
    <form class="login" v-if="type == 1">
      <div class="line">
        <div v-show="btn && !form.name">name不能为空</div>
        <input type="text" placeholder="输入你的name" v-model="form.name" />
      </div>
      <div class="line">
        <div v-show="btn && !form.password">用户名不能为空</div>
        <input type="text" placeholder="输入你的密码" v-model="form.password" />
      </div>
    </form>
    <form class="login" v-if="type == 2">
      <div class="line">
        <div v-show="btn && !registdata.name">name不能为空</div>
        <input type="text" placeholder="输入你的name" v-model="registdata.name" />
      </div>
      <div class="line">
        <div v-show="btn && !registdata.password">用户名不能为空</div>
        <input type="text" placeholder="输入你的密码" v-model="registdata.password" />
      </div>
      <div class="line">
        <div v-show="btn && !registdata.email">邮箱不能为空</div>
        <input type="text" placeholder="输入你的用户名" v-model="registdata.email" />
      </div>
    </form>
    <div class="btn_box">
      <div class="line" v-if="login_error">{{login_error}}</div>
      <button @click="submit">请登录</button>
      <button @click="add">前去注册</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { USER_SIGNIN } from "store/user";
import { login, regist } from "../../api";
import { aaa, bbb, ccc } from "../../test.ts";

export default {
  data() {
    return {
      btn: false, //true 已经提交过， false没有提交过
      form: {},
      registdata: {},
      login_error: "",
      type: 1,
    };
  },
  created() {
    // bbb();
  },
  mounted() {
    console.log(aaa("11"));
    bbb();
    // ccc();
  },
  methods: {
    ...mapActions([USER_SIGNIN]),
    submit() {
      this.btn = true;
      this.type = 1;
      this.registdata = {
        name: "",
        password: "",
        email: "",
      };
      if (this.form.password && this.form.name) {
        login({ name: this.form.name, password: this.form.password }).then(
          (res) => {
            if (res.code == 200) {
              this.login_error = "";
              this.USER_SIGNIN(this.form);
              this.$router.replace({ path: "/home" });
            } else {
              this.login_error = "账号密码错误";
            }
          }
        );
      }
    },
    add() {
      this.btn = true;
      this.type = 2;
      this.form = {
        name: "",
        password: "",
      };
      if (
        this.registdata.password &&
        this.registdata.name &&
        this.registdata.email
      ) {
        regist({
          name: this.registdata.name,
          password: this.registdata.password,
          email: this.registdata.email,
        }).then((res) => {
          if (res.code == 200) {
            this.login_error = "";
            this.USER_SIGNIN(this.registdata);
            this.$router.replace({ path: "/home" });
          } else {
            this.login_error = res.msg;
          }
        });
        return;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.login_container {
  .login {
    padding: 50px;
    text-align: center;
    .line {
      padding: 5px;
      input {
        padding: 0 10px;
        line-height: 28px;
      }
    }
    button {
      padding: 0 20px;
      margin-top: 20px;
      line-height: 28px;
    }
  }
  .btn_box {
    text-align: center;
  }
}
</style>