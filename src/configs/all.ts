import { Linter } from 'eslint';

export const all: Linter.BaseConfig = {
  plugins: ['filenames-simple-node-18'],
  rules: {
    'filenames-simple-node-18/extension': 'error',
    'filenames-simple-node-18/named-export': 'error',
    'filenames-simple-node-18/naming-convention': 'error',
    'filenames-simple-node-18/no-index': 'error',
    'filenames-simple-node-18/pluralize': ['error', { parentDir: 'plural', file: 'singular' }],
    'filenames-simple-node-18/typescript-module-declaration': 'error',
  },
};
