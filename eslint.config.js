import { includeIgnoreFile } from '@eslint/compat';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';

import svelte from 'eslint-plugin-svelte';

import { storyblokLintConfig } from '@storyblok/eslint-config';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default storyblokLintConfig(
  includeIgnoreFile(gitignorePath),
  {
    ignores: ['playground', '**/node_modules/**', 'README.md', 'LICENSE'],
  },
  ...svelte.configs['flat/recommended'],
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
);
