<script lang="ts" setup>
import { Window } from "@tauri-apps/api/window";
import { Command } from "@tauri-apps/plugin-shell";
import {
  desktopDir,
  tempDir,
  appCacheDir,
  appConfigDir,
  appDataDir,
  appLocalDataDir,
  appLogDir,
  audioDir,
  cacheDir,
  configDir,
  dataDir,
  documentDir,
  downloadDir,
  localDataDir,
  executableDir,
  fontDir,
  homeDir,
  pictureDir,
  publicDir,
  runtimeDir,
  templateDir,
  videoDir,
  resourceDir,
} from "@tauri-apps/api/path";
import {
  mkdir,
  BaseDirectory,
  watch,
  open as fsOpen,
} from "@tauri-apps/plugin-fs";
import { open } from "@tauri-apps/plugin-dialog";

// Success - Sidecar
// const result = await Command.sidecar("binaries/testpy").execute();
// 注意执行环境的不同， 本地字符串和 sidecar 输出
// const result = await Command.sidecar("binaries/excel/extract_sale_data", [
//   "/Users/zzx58/Desktop/DevProjects/pycode/_test_cases/sale.xlsx",
//   "Sheet1",
// ]).execute();
// // tauri 自动将 stdout 的字符串中 \n 转换为 \\n
// const str_matrix = result.stdout.split("\n");
// const test = str_matrix[2].replace(/'/g, '"').replace(/None/g, "null");
// \n 换行符 parse 报错
// const test_result = str_test
//   .replace(/'/g, '"')
//   .replace(/None/g, "null")
//   .replace(/\n/g, "\\n");

// Success - Extract And Display Images
// const result = await Command.sidecar("binaries/excel/extract_sale_imgs", [
//   "/Users/zzx58/Desktop/DevProjects/pycode/_test_cases/sale.xlsx",
//   "Sheet1",
//   // 参数要符合设定, 不可缺少.
//   "D",
// ]).execute();
// // const img_url = "data:image/png;base64," + result.stdout;
// // 清晰 sidecar 返回数据
// const img_data_arr_temp = result.stdout
//   .split("\n")[2]
//   .replace(/'/g, '"')
//   .replace(/None/g, "null");
// const img_data_arr = JSON.parse(img_data_arr_temp) as string[];
// // base64 转 blob 转 objectURL
// const imageBinaryArr = img_data_arr.map((item) => "123");

// Success
// let result = await Command.create("exec-sh", [
//   "-c",
//   "echo 'Hello World!'",
//   // "open 'https://www.baidu.com'",
// ]).execute();

// Success
// const result = await desktopDir();
// const desktop_dir_path = await desktopDir();
// const result = await mkdir("test-tauri", { baseDir: BaseDirectory.Desktop });
// const result_paths = [
//   await tempDir(),
//   await desktopDir(),
//   await appCacheDir(),
//   await appConfigDir(),
//   await appDataDir(),
//   await appLocalDataDir(),
//   await appLogDir(),
//   await audioDir(),
//   await cacheDir(),
//   await configDir(),
//   await dataDir(),
//   await documentDir(),
//   await downloadDir(),
//   // await executableDir(), // error
//   await fontDir(),
//   await localDataDir(),
//   await homeDir(),
//   await pictureDir(),
//   await publicDir(),
//   // await templateDir(), // error
//   // await runtimeDir(), // error
//   await videoDir(),
//   await resourceDir(),
// ];

// Success
// import { ask, open } from "@tauri-apps/plugin-dialog";
// const answer = await ask("This action cannot be reverted. Are you sure?", {
//   title: "Tauri",
//   kind: "warning",
// });

// Success for Some circumstances
// import {
//   isPermissionGranted,
//   requestPermission,
//   sendNotification,
// } from "@tauri-apps/plugin-notification";
// // when using `"withGlobalTauri": true`, you may use
// // const { isPermissionGranted, requestPermission, sendNotification, } = window.__TAURI__.notification;
// // Do you have permission to send a notification?
// let permissionGranted = await isPermissionGranted();
// // If not we need to request it
// if (!permissionGranted) {
//   const permission = await requestPermission();
//   permissionGranted = permission === "granted";
// }
// // Once permission has been granted we can send the notification
// if (permissionGranted) {
//   sendNotification({ title: "Tauri", body: "Tauri is awesome!" });
// }

// Success
// let file_paths: string[] = [];
// let files = await open({ multiple: true });
// files?.forEach(async (file_path) => {
//   file_paths.push(file_path);
// });

// Success 环境变量 类型提示
// const env1 = import.meta.env.BE_DATABASE_URL_DEV;
const { data } = await useFetch("/test", { method: "get" });
const test = useRuntimeConfig();

// Untest
// const output = await Command.create("echo", "message").execute();

// const sub_window = new Window("test", { width: 800, height: 600,  });
// sub_window.once("tauri://window-created", () => {});

// 假设从 stdout 获得的 Base64 字符串

// // const img = new Image();
// const img_base64 = "data:image/png;base64," + base64Image;
// document.body.appendChild(img); // 将图片添加到页面
</script>

<template>
  <div class="select-text">
    <div>123</div>
    <!-- <pre>{{ file_paths }}</pre> -->

    <!-- Tauri Path:
    <pre>{{ result_paths }}</pre>

    Excel Extract Error:
    <pre>{{ result.stderr }}</pre>
    Excel Extract Result: -->
    <!-- <pre>{{ result }}</pre> -->
    <!-- <img :src="img_url" class="w-200px h-400px" /> -->
    <!-- <pre>{{ JSON.parse(img_data_arr).length }}</pre> -->
    <!-- <pre>{{ img_data_arr }}</pre> -->
    <!-- <pre>{{ imageBinaryArr }}</pre> -->
    <pre>{{ test }}</pre>
    <pre>{{ data }}</pre>
    <!-- <pre>env1: {{ env1 }}</pre> -->
    <!-- <pre>{{ test2 }}</pre> -->
    <!-- <img v-for="item in img_data_arr" :src="item" /> -->
    <!-- <pre>{{ result.stdout }}</pre> -->
    <!-- <pre>{{ str_matrix }}</pre> -->
    <!-- <pre>{{ test }}</pre> -->
    <!-- <pre>{{ JSON.parse(test) }}</pre> -->
    <!-- <pre>{{ JSON.parse(test)[1][2] }}</pre> -->
    <!-- <pre>{{ "[['123 \n 123'],\n['123 \n123']]".split("\n") }}</pre> -->

    <!-- <div>Notification Permission Granted: {{ permissionGranted }}</div> -->
    <!-- <div>Dialog Action confirm: {{ answer }}</div> -->
    <!-- <img :src="img_base64" class=""/> -->
  </div>
</template>

<style></style>
