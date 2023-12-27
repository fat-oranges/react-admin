module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parserOptions: {
    "jsxPragma": "React",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react', '@typescript-eslint', 'react-refresh', 'react-hooks'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/display-name": "off"
  },
}
