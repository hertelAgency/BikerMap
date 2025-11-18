import js from "@eslint/js";
import globals from "globals";
import parserTypeScript from "@typescript-eslint/parser";
import pluginTypeScript from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": pluginTypeScript,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      import: pluginImport,
    },
    rules: {
      // TypeScript-spezifische Regeln
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",

      // React-spezifische Regeln
      "react/jsx-uses-react": "off", // nicht mehr nötig mit React 17+
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off", // bei TypeScript unnötig
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Import-Sortierung und Ordnung
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];