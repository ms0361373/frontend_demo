module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'react-app',
    'react-app/jest',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  ignorePatterns: ['config', 'public', 'scripts'],
  rules: {
    'class-methods-use-this': ['error', {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
      ],
    }],
    'global-require': 0,
    'no-control-regex': 0,
    'import/no-named-as-default': 0,
    'max-len': ['error', { code: 120 }],
    'react/display-name': 0,
    'no-plusplus': 0,
    'react/react-in-jsx-scope': 'off',
    'jest/valid-describe': 'off',
  },
};
