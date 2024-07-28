module.exports = {
  rules: {
    'simple-import-sort/imports': 'off',
  },
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
}
