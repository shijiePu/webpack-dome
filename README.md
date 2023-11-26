# webpack-demo

重复依赖时
old： a、b都引用loadsh  dist体积 ： 1.08MB
new：使用dependOn优化后体积：560kb


可以看下webpack是如何处理的
  <script defer src="index.bunder.js"></script>
  <script defer src="another.bunder.js"></script>
  <script defer src="shared.bunder.js"></script>

webpack将生成一个新的shared.bunder文件， import xxx 在共享的文件中去引入它。

不过它化多生成了一个runtime.bunder文件
Entrypoint index 1.91 KiB = index.bunder.js
Entrypoint another 1.67 KiB = another.bunder.js
Entrypoint shared 558 KiB = runtime.bunder.js 7.61 KiB shared.bunder.js 550 KiB
runtime modules 3.65 KiB 8 modules
cacheable modules 532 KiB



mini-css-extract-plugin：用于将 CSS 从主应用程序中分离。