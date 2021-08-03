module.exports = {
  extends: [
    "react-app",
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "prettier/react",
  ],
  env: {
    browser: true,
    jest: true,
  },
  plugins: ["prettier", "react-hooks"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn",
  },
  parser: "babel-eslint",
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
