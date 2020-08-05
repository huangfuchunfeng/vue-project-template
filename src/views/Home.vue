<template>
  <div>
    <el-row
      :gutter="30"
      type="flex"
      justify="center"
    >
      <el-col
        :span="12"
        style="text-align:right"
      >
        <router-link :to="{name:'Login'}"> {{$t('login')}}</router-link>
      </el-col>
      <el-col
        :span="12"
        style="text-align:left"
      >
        <router-link :to="{name:'Register'}"> {{$t('register')}}</router-link>
      </el-col>
    </el-row>
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
