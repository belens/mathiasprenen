// // ESLint configuration
// // http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: "babel-eslint",

  extends: [
    "airbnb",
    // "plugin:flowtype/recommended",
    "prettier",
    // "prettier/flowtype",
    // "prettier/react"
  ],

  plugins: ["react", "flowtype", "prettier"],

  globals: {
    __DEV__: true,
    window: true
  },

  env: {
    browser: true
  },

  rules: {
    // `js` and `jsx` are common extensions
    // `mjs` is for `universal-router` only, for now
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
        mjs: "never"
      }
    ],

    // Not supporting nested package.json yet
    // https://github.com/benmosher/eslint-plugin-import/issues/458
    "import/no-extraneous-dependencies": "off",

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"]
      }
    ],

    // Allow js files to use jsx syntax, too
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],

    // Automatically convert pure class to function by
    // babel-plugin-transform-react-pure-class-to-function
    // https://github.com/kriasoft/react-starter-kit/pull/961
    "react/prefer-stateless-function": "off",

  //   // ESLint plugin for prettier formatting
  //   // https://github.com/prettier/eslint-plugin-prettier
  //   "prettier/prettier": [
  //     "error",
  //     {
  //       // https://github.com/prettier/prettier#options
  //       singleQuote: true,
  //       trailingComma: "all"
  //     }
  //   ],
  //   "no-unused-expressions": ["error", { allowTaggedTemplates: true }]
  },

  // settings: {
  //   // Allow absolute paths in imports, e.g. import Button from 'components/Button'
  //   // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
  //   "import/resolver": {
  //     node: {
  //       moduleDirectory: ["node_modules", "src"]
  //     }
  //   }
  // }
};
