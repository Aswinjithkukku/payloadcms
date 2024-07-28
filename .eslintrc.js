module.exports = {
  rules: {
    'simple-import-sort/imports': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
}
