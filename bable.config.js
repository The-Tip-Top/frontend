// module.exports = { "presets": ["@babel/preset-env", "@babel/preset-typescript"] };
module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript'
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      // other plugins if needed
    ],
  };
  