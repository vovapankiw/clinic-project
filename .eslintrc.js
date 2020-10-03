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
    semi: [ 2, 'always' ],
    quotes: [ 2, 'single', { avoidEscape: true } ],
    indent: [ 'error', 2 ],
    'array-bracket-spacing': [ 2, 'always' ],
    'no-var': 2,
    camelcase: 1,
    'no-console': 'warn',
    'no-mixed-spaces-and-tabs': 2,
    'vue/max-attributes-per-line': [ 'error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    } ],
    'no-shadow': [ 'error', { allow: [ 'state' ] } ],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope',
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
        ignoreUrls: true,
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
    'no-useless-escape': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [ 'error', 'never', { js: 'never', vue: 'never' } ],
  },
};
