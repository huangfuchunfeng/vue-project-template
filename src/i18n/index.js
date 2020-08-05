import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { loadModules } from '@/utils/common'
import ElementLocale from 'element-ui/lib/locale'
Vue.use(VueI18n)
const messages = loadModules(require.context('./langs', false, /\.js$/), 'object', /([a-z_]+)\.js$/i)
const langs = []
for (const k in messages) {
  langs.push({
    lang: messages[k].lang,
    key: k
  })
}
const i18n = new VueI18n({
  locale: 'zh', // 设置默认语言
  fallbackLocale: 'zh', // 当其他语言不存在时,默认使用ZH语言
  silentFallbackWarn: process.env.NODE_ENV === 'prodeuct', // 隐藏回退本地化警告提醒
  formatFallbackMessages: true, // 找不到相应的键值将回退到原本的语言
  silentTranslationWarn: process.env.NODE_ENV === 'prodeuct', // 取消本地化失败时输出的警告。
  messages // 设置地区信息
})
ElementLocale.i18n((key, value) => {
  return i18n.t(key, value)
})

export { i18n, langs }
