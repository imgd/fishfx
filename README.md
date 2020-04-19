# Fish Framework（简称：FishFX，中文名：鱼摆摆）
 * 该项目是 `FishFX` 系列的聚合仓库，不包含任何代码。

`FishFX` 框架是采用 `TypeScript`（version：3.8.3）现有体系标准，对平时编码时的一些常用功能进行封装。

主要思想参考 `CoreFX` 进行构建，致力于让 `TypeScript` 拥有如同编写 `.Net Core` 应用般的丝滑。

## FishFX 系列
* fishfx.system：`核心模块，主要包含：基础类型扩展、异常、通用工具等。`
* fishfx.system.collections：`包含可使用的集合类和相关的接口，提供了集合的基本功能。`
* fishfx.system.linq：`包含支持使用语言集成查询进行查询的类和接口。`
* 后续持续更新

## 其他仓库
* [fishfx.system](https://github.com/cn-troy/fishfx.system)
* [fishfx.system.collections](https://github.com/cn-troy/fishfx.system.collections)
* [fishfx.system.linq](https://github.com/cn-troy/fishfx.system.linq)
* 后续持续更新

### PS
1. `npm` 已经创建，但还未实现 `v1.0` 版本。暂无法直接从 `npm` 中直接使用。
2. 进行二次开发时，请首先在 `fishfx.xxxx` 目录使用 `npm link` 添加 `fishfx` 本地连接。之后到需要引用的项目目录中使用 `npm link fishfx.xxxx` 进行挂载。即可使用本地依赖包进行测试开发。