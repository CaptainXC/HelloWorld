import { createApp } from 'vue'
// 引入全局样式表
import './assets/style/main.css'
import App from './App.vue'
// 创建根组件对象
const app = createApp(App);

// 引入element-plus ui 组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

// 引入 element-plus 图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

//main.ts
//md 预览
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";
// highlightjs
import hljs from "highlight.js";
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
app.use(VMdPreview);

//安装路由插件
import router from "./router";
app.use(router)

app.mount('#app')
