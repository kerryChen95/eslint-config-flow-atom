// @flow

module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      globalReturn: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    atomtest: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "eslint-config-airbnb",
  ],
  globals: {
    atom: false,
  },
  plugins: [
    "babel",
    "flow-vars",
    "flowtype",
    "import",
    "prefer-object-spread",
  ],
  rules: {
    "babel/array-bracket-spacing": "warn",
    "babel/arrow-parens": "warn",
    "babel/flow-object-type": "warn",
    "babel/generator-star-spacing": "warn",
    "babel/new-cap": "warn",
    "babel/no-await-in-loop": "warn",
    "babel/object-shorthand": "warn",
    eqeqeq: [
      "error",
      "smart",
    ],
    "flow-vars/define-flow-type": "warn",
    "flow-vars/use-flow-type": "warn",
    "import/no-unresolved": [
      "error",
      {
        ignore: [
          "atom",
        ],
      },
    ],
    "no-duplicate-imports": "off",
    "prefer-object-spread/prefer-object-spread": "error",
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
  },
};
