# nuxt-tauri

- 创建 Nuxt 项目
  `bun x nuxi@latest init <project-name>`
  or
  `bunx nuxi@latest init <project-name>`
- Tauri Manual Setup (Tauri CLI)
  `bun add -D @tauri-apps/cli@latest`
- 配置 Nuxt-Tauri 配置项
  - ssr
  - devServer
  - vite
    - clearScreen
    - envPrefix
    - server.strictPort
- 启动项目
  `$: bun tauri dev`

- 安装前端依赖

  - `bun add -D unocss @unocss/nuxt`
  - create file `uno.config.ts`
  - Add '"@unocss/nuxt"' to `nuxt.config.ts -> modules`
  - Install dependency: `bun add class-variance-authority clsx tailwind-merge pinia`

- Server Routes

  Files inside the ~/server/api are automatically prefixed with /api in their route.
  To add server routes without /api prefix, put them into ~/server/routes directory.

- Sidecar

  aarch64-apple-darwin 要添加在 src-tauri/binaries 文件夹 文件后

  Sidecar 从属 Shell 插件, 要配置好 Shell 插件功能

  ```ts
  "bundle": {
    "active": true,
    "targets": "all",
    "icon": [
      "icons/32x32.png",
      "icons/128x128.png",
      "icons/128x128@2x.png",
      "icons/icon.icns",
      "icons/icon.ico"
    ],
    "externalBin": ["binaries/testpy"]
  }
  ```

- 启用 Shell 命令执行

  https://tauri.app/plugin/shell/

  - 安装依赖 `bun tauri add shell`
  - capabilities -> default.json, 注意 `.*`

  ```json
    "shell:default",
    {
      "identifier": "shell:allow-execute",
      "allow": [
        {
          "name": "exec-sh",
          "cmd": "sh",
          "args": [
            "-c",
            {
              "validator": ".*"
            }
          ]
        }
      ]
    }
  ```

  ```ts
  import { Command } from "@tauri-apps/plugin-shell";
  let result = await Command.create("exec-sh", [
    "-c",
    // "echo 'Hello World!'",
    "open 'https://www.baidu.com'",
  ]).execute();
  ```

- 文件操作

  https://tauri.app/plugin/file-system/#scopes
  `bun tauri add fs`
  `const result = await mkdir("test-tauri", { baseDir: BaseDirectory.Desktop });`
  App capabilities:

  ```json
  "permissions": [
    {
      "identifier": "fs:scope",
      "allow": [{ "path": "$DESKTOP/*" }]
      "allow": [{ "path": "**" }]
    }
  ]
  ```

- App 消息提醒

  `bun tauri add notification`
  在 dev 模式下无效, 通过打包成 dmg 生产环境一定程度解决,
  默认 banner 模式但提醒不直接显示, 即使没有开启勿扰模式
  Alert 模式才能确保次次提醒, 但声音等 MacOS 功能设置依旧没有生效

- App 打包

  更改 bundle.targets 从 all 到 dmg, 否则会有打包失败问题, 大概移动端未配置导致

- 其他殊途同归, 不完全成功的会专门记录

- Rust 正则
  ._: . 表示任意字符, 代表除换行符外的字符; _ 表示量词, 匹配前面字符任意次.
  // 注意执行环境的不同， 本地字符串和 sidecar 输出
  // \n 换行符 parse 报错
  // // split 自动将 字符串中 \n 转换为 \\n ?

- Tauri 环境变量设置
  https://tauri.app/start/frontend/nuxt/#%E7%A4%BA%E4%BE%8B%E9%85%8D%E7%BD%AE
  envPrefix: ['VITE_', 'TAURI_'],

- ERROR Error: spawn EBADF 报错问题
  https://jsnoteclub.com/blog/nuxt3-spawn-ebadf/
  清理 tauri target, 或 .nuxt 等生成文件

- 自定义变量的类型提示
  https://cn.vite.dev/guide/env-and-mode#intellisense
  https://cn.vite.dev/guide/env-and-mode#html-env-replacement
  nuxt 项目不需要使用 vite env 类型提示, 可以 runtimeConfig 和 useRuntimeConfig() 以及 NUXT\_\* env 文件中变量前缀声明, 带有类型提示, 前提是变量需要再 runtimeConfig 中定义(空字符串), 其能被 env 文件中变量替换
  注意: NUXT_PUBLIC, NUXT\_ 与 runtimeConfig 的对应关系
  服务端可以访问到 Nuxt ENV private, 客户端不行, 只能 Public
  https://nuxt.com.cn/docs/guide/going-further/runtime-config#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F
