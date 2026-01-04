import path from 'node:path';
import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import { fixupPluginRules } from '@eslint/compat';

import globals from 'globals';

import tsParser from '@typescript-eslint/parser';

import jest from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';
import perfectionist from 'eslint-plugin-perfectionist';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

import prettierExtends from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
	{
		ignores: [
			'.github/**',
			'.husky/**',
			'.next/**',
			'.vercel/**',
			'bin/*.sh',
			'coverage/**',
			'design/**',
			'email/**',
			'public/**',
			'./next-env.d.ts',
			'./svgo-config.mjs',
			'**/*.config.js',
			'**/*.config.mjs',
			'src/data/open-source.ts'
		]
	},
	{
		name: 'atanas.info',
		files: ['**/*.{ts,tsx}'],
		plugins: {
			jest,
			react,
			perfectionist,
			'react-hooks': fixupPluginRules(reactHooks),
			'@next/next': nextPlugin,
			'@typescript-eslint': fixupPluginRules(typescriptEslint)
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...jest.environments.globals.globals,
				NodeJS: true,
				registerPaint: true
			},
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				project: 'tsconfig.json',
				tsconfigRootDir: __dirname
			}
		},
		settings: {
			react: {
				version: 'detect'
			}
		},
		rules: {
			...js.configs.recommended.rules,
			...prettierExtends.rules,
			...react.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...typescriptEslint.configs.recommended.rules,
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
			'no-console': 'off',
			'react/display-name': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': [
				'warn',
				{
					additionalHooks: ''
				}
			],
			'react/jsx-sort-props': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/no-unknown-property': [
				2,
				{
					ignore: ['global', 'jsx']
				}
			],
			'perfectionist/sort-objects': [
				'error',
				{
					type: 'natural',
					order: 'asc'
				}
			],
			'sort-vars': 'error',
			'perfectionist/sort-jsx-props': 'error',
			'perfectionist/sort-interfaces': 'error',
			'perfectionist/sort-object-types': 'error',
			'perfectionist/sort-imports': [
				'error',
				{
					type: 'natural',
					order: 'asc',
					newlinesBetween: 1,
					groups: [
						'builtin',
						'react',
						'reactEcosystem',
						'next',
						'external',
						'lib',
						'insights',
						'components',
						'pages',
						'scripts',
						'shared',
						'data',
						'src',
						'testConfig',
						'internal'
					],
					customGroups: Object.entries({
						react: ['^react$'],
						reactEcosystem: ['^react-.+'],
						next: ['^next.*'],
						lib: ['^@lib/.+'],
						insights: ['^@insights/.+'],
						components: ['^@components'],
						pages: ['^@pages/.+'],
						scripts: ['^@scripts/.+'],
						shared: ['^@shared/.+'],
						data: ['^@data/.+'],
						src: ['^@src/.+'],
						testConfig: ['^@test-config/.+']
					}).flatMap(([groupName, elementNamePattern]) => [
						{
							selector: 'type',
							groupName,
							elementNamePattern
						},
						{
							groupName,
							elementNamePattern
						}
					])
				}
			],
			'perfectionist/sort-named-imports': [
				'error',
				{
					type: 'natural',
					order: 'asc'
				}
			],
			'perfectionist/sort-union-types': [
				'error',
				{
					type: 'natural',
					order: 'asc'
				}
			],
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/consistent-type-imports': 'error'
		}
	}
];
