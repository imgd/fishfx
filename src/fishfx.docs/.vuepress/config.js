module.exports = {
  title: 'Fish Framework（简称：FishFX，中文名：鱼摆摆）',
  description: 'FishFX 框架是采用 TypeScript（version：3.8.3）现有体系标准，对平时编码时的一些常用功能进行封装。主要思想参考 CoreFX 进行构建，致力于让TypeScript拥有如同编写 .Net Core 应用般的丝滑。',
  themeConfig: {
    search: false,
    sidebar: [{
      title: "指南",
      collapsable: false,
      path: "/"
    }, {
      title: "system",
      collapsable: true,
      children: [{
        title: "String扩展",
        path: "/system/string"
      }, {
        title: "Number扩展",
        path: "/system/number"
      }, {
        title: "convert转换器",
        path: "/system/convert"
      }]
    }, {
      title: "system.collections",
      collapsable: true,
      children: [{
        title: "list<T>",
        path: "/system/collections/list"
      }]
    }, {
      title: "system.linq",
      collapsable: true,
      path: "/system/linq/linq"
    }]
  }
}