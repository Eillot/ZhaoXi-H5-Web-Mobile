<template>
    <div>
      <van-nav-bar
        class="home-view"
        left-text="朝夕天气"
        right-text="按钮"
        @click-right="onClickRight"
        fixed="true"
      />
    </div>
</template>
<script lang="ts">
import { Toast } from 'vant';

export default {
  setup() {
    const onClickRight = () => Toast('按钮');
    return {
      onClickRight
    };
  },
};

</script>
<style>
    .home-view
    {
      background-color:#212529;
        
    }
    .home-view .van-nav-bar__text
    {
      color:#fff;
    }
</style>