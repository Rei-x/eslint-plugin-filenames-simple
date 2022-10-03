import { Linter } from 'eslint';

export const recommended: Linter.BaseConfig = {
  plugins: ['filenames-simple-node-18'],
  rules: {
    'filenames-simple-node-18/extension': 'error',
    'filenames-simple-node-18/named-export': ['warn', 'singular'],
    'filenames-simple-node-18/naming-convention': 'error',
    'filenames-simple-node-18/no-index': 'off',
    'filenames-simple-node-18/pluralize': 'off',
    'filenames-simple-node-18/typescript-module-declaration': 'error',
  },
};

export const recommendedReact: Linter.BaseConfig = {
  ...recommended,
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        'filenames-simple-node-18/naming-convention': ['error', { rule: 'PascalCase' }],
      },
    },
  ],
};

export const recommendedVue: Linter.BaseConfig = {
  ...recommended,
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'filenames-simple-node-18/naming-convention': ['error', { rule: 'PascalCase' }],
      },
    },
  ],
};
