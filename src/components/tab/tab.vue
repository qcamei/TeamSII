<template>
  <div class="tab">
    <keep-alive>
      <router-link tag="div" class="tab-item" to="/dynamic">
        <span class="tab-link">动态</span>
      </router-link>
    </keep-alive>
    <keep-alive>
      <router-link tag="div" class="tab-item" to="/recommend">
        <span class="tab-link">推荐</span>
      </router-link>
    </keep-alive>
    <keep-alive>
      <router-link tag="div" class="tab-item" to="/video">
        <span class="tab-link">视频</span>
      </router-link>
    </keep-alive>
    <keep-alive>
      <router-link tag="div" class="tab-item" to="/article">
        <span class="tab-link">文章</span>
      </router-link>
    </keep-alive>
    <keep-alive>
      <router-link tag="div" class="tab-item" to="/painting">
        <span class="tab-link">手绘</span>
      </router-link>
    </keep-alive>
    <keep-alive>
      <router-link tag="div" class="tab-item" to="/music">
        <span class="tab-link">歌曲</span>
      </router-link>
    </keep-alive>
    <keep-alive>
      <router-link tag="div" class="tab-item" to="/trip">
        <span class="tab-link">行程</span>
      </router-link>
    </keep-alive>
    <keep-alive>
      <router-link tag="div" class="tab-item" to="/raise">
        <span class="tab-link">集资</span>
      </router-link>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@media screen and (min-width 1366px)
  .tab
    border-top 1px solid #f2f2f5
    box-shadow 0 1px 1px rgba(0,0,0,0.15)
    background-color #FFF
    display flex
    height 40px
    line-height 40px
    font-size $font-size-medium4
    flex-direction row
    .tab-item
      flex-grow 1
      text-align center
      text-decoration none
      color #2c3e50
      .tab-link
        cursor pointer
        font-weight bolder
        padding 0 15px 5px 15px
    &.router-link-active
      .tab-link
        border-bottom 5px solid $color-team-sii

@media screen and (max-width 1366px)
  .tab
    border-top 1px solid #f2f2f5
    box-shadow 0 1px 1px rgba(0,0,0,0.15)
    background-color #FFF
    display flex
    height 20px
    line-height 20px
    font-size $font-size-medium4
    flex-direction row
    .tab-item
      flex-grow 1
      text-align center
      text-decoration none
      color #2c3e50
      .tab-link
        cursor pointer
        font-weight bolder
        padding 0 6px 2px 6px
        font-size 10px
    &.router-link-active
      .tab-link
        border-bottom 2px solid $color-team-sii
</style>
