module.exports = {
  content: [
    './src/**/*.{astro,html,js,svelte,vue}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0px -4px 10px 2px rgba(0, 0, 0, 0.1), 0px 4px 10px 2px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
