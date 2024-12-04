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
