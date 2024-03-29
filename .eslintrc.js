module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/comment-directive': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}
