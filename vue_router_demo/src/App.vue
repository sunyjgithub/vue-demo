<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Test</h2></div>
      </div>
    </div>

    <div class="row">

     <!--左面-->
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--生成路由链接-->
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>
      <!--右面-->
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            &lt;!&ndash;显示当前组件&ndash;&gt;

            <!--使用keep-alive会将当前的组件缓存起来 提高渲染速度，但是唯一的缺点是 因为使用的是组件的缓存，所以生命周期相关的方法不会再调用-->
           <!-- <keep-alive>
              <router-view msg="abc"></router-view>
            </keep-alive>-->


            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
           <router-view msg="1111"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

}
</script>

<style>

</style>
