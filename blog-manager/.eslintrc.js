module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  globals: {
    "shallow": true,
    "render": true,
    "mount": true,
    "fetch": true
  },
  extends: [
    "prettier",
    "prettier/react",
    "airbnb",
    "plugin:flowtype/recommended"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      arrowFunctions: true
    },
    sourceType: "module"
  },
  plugins: [
    "react",
    "jest",
    "flowtype",
    "react-hooks"
    ],
  rules: {
    "import/no-named-as-default-member": "off",
    "react/display-name": 0,
    "radix": 0,
    "react/no-array-index-key": 0,
    "no-unused-expressions": 0,
    "react/jsx-props-no-spreading": 0,
    "import/no-named-as-default": 0,
    "react/require-default-props": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/default-props-match-prop-types": 0,
    "import/prefer-default-export": 0,
    "no-nested-ternary": 0,
    "no-shadow": 0,
    "prefer-const": 0,
    "no-unneeded-ternary": 0,
    "object-curly-newline": 0,
    "no-param-reassign": 0,
    "react/no-danger": 0,
    "global-require": 0,
    "max-len": "off",
    "no-plusplus": "off",
    "camelcase": "off",
    "no-console": "off",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "jsx-quotes": ["error", "prefer-single"],
    "react/prefer-stateless-function": [
      0
    ],
    "react/jsx-filename-extension": [
      0
    ],
    "no-case-declarations": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "no-mixed-operators": 0,
    "comma-dangle": 0,
    "arrow-parens": 0,
    "prefer-template": 0,
    "react/forbid-prop-types": 0,
    "import/no-extraneous-dependencies": 0,
    "function-paren-newline": 0,
    "react/button-has-type": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/prop-types": [2, {
      ignore: ['children', 'history', 'match', 'location', 'component']
    }],
    "react/jsx-no-bind": "off",
    "flowtype/require-exact-type": [
      2,
      "always"
    ]
  }
};
