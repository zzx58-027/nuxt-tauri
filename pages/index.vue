<script lang="ts" setup>
import { Window } from "@tauri-apps/api/window";
import { Command } from "@tauri-apps/plugin-shell";
import { desktopDir } from "@tauri-apps/api/path";
import { mkdir, BaseDirectory, watch } from "@tauri-apps/plugin-fs";

// Success - Sidecar
// const result = await Command.sidecar("binaries/testpy").execute();
// result.[code, signal, stdout, stderr]

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

// const output = await Command.create("echo", "message").execute();

// const sub_window = new Window("test", { width: 800, height: 600,  });
// sub_window.once("tauri://window-created", () => {});
</script>

<template>
  <!-- <div>{{ result.stdout }}</div> -->
  <!-- <div>{{ result.stdout }}</div> -->
  <!-- <div>Notification Permission Granted: {{ permissionGranted }}</div> -->
  <!-- <div>Dialog Action confirm: {{ answer }}</div> -->
</template>

<style></style>
