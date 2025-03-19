import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        gray: {
          50: { value: "#f9f9f9" },
          100: { value: "#ededed" },
          200: { value: "#d3d3d3" },
          300: { value: "#b3b3b3" },
          400: { value: "#a0a0a0" },
          500: { value: "#898989" },
          600: { value: "#6c6c6c" },
          700: { value: "#202020" },
          800: { value: "#121212" },
          900: { value: "#111111" },
        },
        brand: {
          50: { value: "#1A1D26" },
          100: { value: "#F7931A" },
          200: { value: "#232323" },
          300: { value: "#B0B0B0" },
          400: { value: "#FFFFFF" },
          500: { value: "#F7931A" },
          600: { value: "#B0B0B0" },
          700: { value: "#232323" },
          800: { value: "#B0B0B0" },
          900: { value: "#FFFFFF" },
          950: { value: "#FFFFFF" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.100}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
