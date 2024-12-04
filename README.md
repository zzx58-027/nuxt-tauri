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
