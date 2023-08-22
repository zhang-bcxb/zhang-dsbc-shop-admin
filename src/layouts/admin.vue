<template>
  <el-container>
    <el-header>
      <f-header/>
    </el-header>
    <el-container>
      <el-aside :width="$store.state.asideWidth">
        <f-menu></f-menu>
      </el-aside>
      <el-main>
        <f-tag-list/>
        <router-view v-slot="{ Component }">
          <transition name="slide-fade">
            <keep-alive :max="10">
              <component :is="Component"></component>
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import FHeader from './components/FHeader.vue';
import FMenu from './components/FMenu.vue';
import FTagList from './components/FTagList.vue';
</script>
<style>
.el-aside {
  transition: all 0.2s;
}

/*进入之前【fadeInDown-to】*/
.slide-fade-enter-from {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

/*进入之后【fadeInDown-from】*/
.slide-fade-enter-to {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}


/*离开之前【fadeOutDown-to】*/
.slide-fade-leave-from {
  opacity: 1;
}

/*离开之后【fadeOutDown-from】*/
.slide-fade-leave-to {
  opacity: 0;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

/* 设置动画时长 */
.slide-fade-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s;
}

/* 进入的时候延迟 */
.slide-fade-enter-active {
  transition-delay: 0.3s;
}
</style>