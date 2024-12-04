import {
  defineConfig,
  presetIcons,
  presetTagify,
  presetUno,
  transformerVariantGroup,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  presets: [presetUno({}), presetIcons({}), presetTagify({})],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives({
      applyVariable: ["--uno"],
    }),
  ],
});
