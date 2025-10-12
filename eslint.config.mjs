import path from 'node:path';
import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';

import globals from 'globals';

import jest from 'eslint-plugin-jest';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import importPlugin from 'eslint-plugin-import';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [
	{
		ignores: ['**/*.config.js', '**/*.config.mjs', 'src/data/open-source.ts', './next-env.d.ts', '.next/**']
	},
	...fixupConfigRules(
		compat.extends(
			'prettier',
			'next/core-web-vitals',
			'next/typescript',
			'plugin:react/recommended',
			'plugin:react-hooks/recommended',
			'plugin:compat/recommended',
			'plugin:@typescript-eslint/recommended'
		)
	),
	{
		name: 'atanas.info',
		plugins: {
			jest,
			import: fixupPluginRules(importPlugin),
			'@typescript-eslint': fixupPluginRules(typescriptEslint),
			'react-hooks': fixupPluginRules(reactHooks),
			'sort-keys-fix': sortKeysFix,
			'sort-destructure-keys': sortDestructureKeys,
			'typescript-sort-keys': fixupPluginRules(typescriptSortKeys)
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...jest.environments.globals.globals
			},
			parser: tsParser,
			ecmaVersion: 5,
			sourceType: 'module',
			parserOptions: {
				project: 'tsconfig.json'
			}
		},
		settings: {
			react: {
				version: 'detect'
			}
		},
		rules: {
			...typescriptSortKeys.configs.recommended.rules,
			'compat/compat': 'off',
			'no-console': 'off',
			'react/display-name': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': [
				'warn',
				{
					additionalHooks: ''
				}
			],
			'react/jsx-sort-props': [
				2,
				{
					callbacksLast: false,
					shorthandFirst: false,
					shorthandLast: false,
					ignoreCase: true,
					noSortAlphabetically: false,
					reservedFirst: false,
					locale: 'auto'
				}
			],
			'react/react-in-jsx-scope': 'off',
			'react/no-unknown-property': [
				2,
				{
					ignore: ['global', 'jsx']
				}
			],
			'react/no-unescaped-entities': 'off',
			'sort-imports': [
				'error',
				{
					ignoreCase: true,
					ignoreDeclarationSort: true
				}
			],
			'sort-keys': [
				'error',
				'asc',
				{
					caseSensitive: true,
					natural: false,
					minKeys: 2
				}
			],
			'sort-keys-fix/sort-keys-fix': 'warn',
			'sort-vars': 'error',
			'sort-destructure-keys/sort-destructure-keys': 2,
			'import/order': [
				'error',
				{
					groups: ['external', 'builtin', 'internal', ['sibling', 'parent'], 'index'],
					pathGroups: [
						{
							pattern: '@(react|react-native)',
							group: 'external',
							position: 'before'
						},
						{
							pattern: 'react-*',
							group: 'external',
							position: 'before'
						},
						{
							pattern: 'react-*/**',
							group: 'external',
							position: 'before'
						},
						{
							pattern:
								'@*(test-config|components|insights|scripts|public|pages|tests|data|npm|lib|src){,/*}',
							group: 'internal',
							position: 'after'
						},
						{
							pattern: '@*(styles){,/*}',
							patternOptions: {
								dot: true,
								nocomment: true
							},
							group: 'type',
							position: 'before'
						},
						{
							pattern: '**/*.+(css|sass|less|scss|pcss|styl)',
							patternOptions: {
								dot: true,
								nocomment: true
							},
							group: 'type',
							position: 'before'
						},
						{
							pattern: '{.,..}/**/*.+(css|sass|less|scss|pcss|styl)',
							patternOptions: {
								dot: true,
								nocomment: true
							},
							group: 'type',
							position: 'before'
						},
						{
							pattern: '@*(svg){,/*}',
							group: 'index',
							patternOptions: {
								matchBase: true
							},
							position: 'after'
						},
						{
							pattern:
								'{.,..}/**/*.+(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|json)',
							group: 'index',
							patternOptions: {
								matchBase: true
							},
							position: 'after'
						},
						{
							pattern:
								'**/*.+(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|json)',
							group: 'index',
							patternOptions: {
								matchBase: true
							},
							position: 'after'
						}
					],
					pathGroupsExcludedImportTypes: ['@(react|react-native)'],
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true
					}
				}
			],
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-explicit-any': 'off'
		}
	}
];
