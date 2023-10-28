module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
        "extraFileExtensions": [".css"]
    },
    "ignorePatterns": ["vite.config.ts", "dist"],
    "plugins": [
        "import",
        "react",
        "@typescript-eslint",
        "prettier",
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/button-has-type": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "comma-dangle": ["error", "only-multiline"],
        "react/prop-types": "off",
        "react/display-name": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-var-requires": "off",
        "react/jsx-uses-react": "off",
        "react/prefer-stateless-function": "off",
        "class-methods-use-this": "off",
        "react/jsx-no-constructed-context-values": "off",
        "import/order": [
            2,
            {
                "groups": [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index"
                ],
                "newlines-between": "always"
            }
        ]
    }
}
