export default defineEventHandler(async (event): Promise<any> => {
  const test = await fetch("http://localhost:11434");
  // const test = await $fetch("http://localhost:11434");
  return test;
});
