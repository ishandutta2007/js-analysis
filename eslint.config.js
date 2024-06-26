import globals from "globals";
import js from "@eslint/js";

let rules = {
  "no-console": "off",
  "no-unused-vars": "off",
  "array-bracket-spacing": "error",
  "arrow-spacing": "error",
  "brace-style": [
    "error",
    "allman"
  ],
  "comma-spacing": "error",
  "comma-style": "error",
  "consistent-return": "error",
  "computed-property-spacing": "error",
  "eol-last": "error",
  "indent": [
    "error",
    2,
    {
      "SwitchCase": 1,
      "CallExpression": {
        "arguments": "off"
      },
      "MemberExpression": "off",
      "ArrayExpression": "off",
      "ignoreComments": true
    }
  ],
  "key-spacing": "error",
  "keyword-spacing": "error",
  "linebreak-style": "error",
  "new-parens": "error",
  "no-prototype-builtins": "off",
  "no-spaced-func": "error",
  "no-trailing-spaces": "error",
  "no-var": "error",
  "no-whitespace-before-property": "error",
  "object-curly-spacing": "error",
  "operator-assignment": "error",
  "operator-linebreak": "error",
  "padded-blocks": [
    "error",
    "never"
  ],
  "prefer-rest-params": "warn",
  "prefer-spread": "warn",
  "require-yield": "warn",
  "quotes": [
    "error",
    "double",
    {
      "avoidEscape": true
    }
  ],
  "semi": "error",
  "semi-spacing": "error",
  "space-before-function-paren": [
    "error",
    "never"
  ],
  "space-in-parens": "error",
  "space-infix-ops": "error",
  "space-unary-ops": "error",
  "spaced-comment": "error",
  "yield-star-spacing": "error"
};

export default [
  js.configs.recommended,
  {
    files: ["*.js", "lib/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es6,
      },
    },
    rules
  },
  {
    files: ["test/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.mocha,
        expect: "readonly"
      },
    },
    rules
  },
];
