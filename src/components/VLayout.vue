<template>
  <el-container>
    <el-header>
      <el-row
        justify="space-between"
        align="middle"
        type="flex"
      >
        <el-col
          :span="12"
          style="text-align:left"
        > {{ $t('welcome', ['Vue-Project-Template']) }} </el-col>
        <el-col
          :span="12"
          style="text-align:right"
        >
          <el-dropdown
            trigger="click"
            @command="changeLang"
          >
            <span class="el-dropdown-link">
              {{$t('lang')}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="lang in langs"
                :key="lang.key"
                :command="lang.key"
              >{{lang.lang}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'v-layout',
  data () {
    return {}
  },
  methods: {
    changeLang (lang) {
      this.$i18n.locale = lang
    }
  },
  computed: {
    langs () {
      return this.$store.state.langs
    }
  }
}
</script>
<style lang="scss">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
