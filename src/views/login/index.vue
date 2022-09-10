<script lang="ts">
import { Toast } from "vant";

export default {
  setup() {
    const onClickLeft = () => history.back();
    const onClickRight = () => Toast("按钮");
    return {
      onClickLeft,
      onClickRight,
    };
  },
};
</script>
<template>
  <div>
    <van-nav-bar
    title="登录"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    fixed="true"
    />
  </div>
</template>

<style scoped>
</style>
