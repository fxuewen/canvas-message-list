<template>
    <div>
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router active-text-color="#42a0f8">
            <el-menu-item index="/root/test">测试1</el-menu-item>
            <el-menu-item index="/root/test2">测试2</el-menu-item>
        </el-menu>
    <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'Root',
  data() {
    return {
      msg: 'test'
    }
  }
}
</script>
