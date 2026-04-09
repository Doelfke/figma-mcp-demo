import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (viteConfig) => {
    // GitHub Pages serves from /<repo-name>/ — set the base path in CI,
    // leave it as "/" locally so the dev server works unchanged.
    if (process.env.GITHUB_ACTIONS) {
      viteConfig.base = "/figma-mcp-demo/";
    }
    return viteConfig;
  },
};

export default config;
