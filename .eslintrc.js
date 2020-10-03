module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    parser: 'babel-eslint',
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  // required to lint *.vue files
  plugins: [ 'vue' ],
  // add your custom rules here
  rules: {
    'import/no-extraneous-dependencies': [ 'error', { devDependencies: true } ],
    semi: [ 2, 'always' ],
    quotes: [ 2, 'single', { avoidEscape: true } ],
    indent: [ 'error', 2 ],
    'array-bracket-spacing': [ 2, 'always' ],
    'no-var': 2,
    camelcase: 1,
    'no-console': 'warn',
    'no-mixed-spaces-and-tabs': 2,
    'vue/max-attributes-per-line': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.return value
        ],
      },
    ],
    'no-trailing-spaces': 0,
    'no-unused-vars': [ 'error', { vars: 'local', args: 'none' } ],
    'no-new': 0,
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignorePattern: '(\\$t\\()|(:ref=")|(class=")|(^import.*)',
      },
    ],
    'vue/html-indent': [
      'warn',
      2,
      {
        attribute: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
