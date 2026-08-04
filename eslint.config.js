import js from '@eslint/js'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

export default [
  {
    // Ignore build artifacts and dependencies
    ignores: [
      'lib/**',
      'dist/**',
      'build/**',
      'node_modules/**',
      'styleguide.config.cjs',
      'utils/**', //Todo: Fix
      'example/**',
    ],
  },
  js.configs.recommended, // Use baseline JavaScript rules
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
      globals: {
        ...globals.browser, // Add browser environments (window, document, etc.)
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect your React version
      },
    },
    rules: {
      // React core rules
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Disable for React 17+ (New JSX transform)
      // React Hooks rules
      ...reactHooksPlugin.configs.recommended.rules,
    },
  },
  // Jest globals
  {
    files: [
      '**/*.test.{js,jsx,ts,tsx}',
      '**/*.spec.{js,jsx,ts,tsx}',
      '**/__tests__/**/*.{js,jsx,ts,tsx}',
    ],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]
