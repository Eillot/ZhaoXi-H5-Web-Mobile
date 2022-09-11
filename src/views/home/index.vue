<template>
    <div>
        <van-nav-bar
        title="朝夕天气"
        left-text="朝夕天气"
        right-text="按钮"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        fixed=true
        />
    </div>
</template>
<script lang="ts">
import { Toast } from 'vant';

export default {
  setup() {
    const onClickLeft = () => history.back();
    const onClickRight = () => Toast('按钮');
    return {
      onClickLeft,
      onClickRight,
    };
  },
};

</script>
<style>
</style>