<template>
  <div> 
    <van-nav-bar title="登录" fixed=true class="page-nav-bar"/>
    <van-form >
      <van-field
        name="userName"
        placeholder="请输入用户名"
        left-icon="manager"
      />
      <van-field
        type="password"
        name="userPwd"
        placeholder="请输入密码"
        left-icon="lock"
      />
      <div style="margin: 16px">
        <van-button block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script lang="ts">
export default {};
</script>

<style></style>
