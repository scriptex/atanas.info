import globals from 'globals';

import jest from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';
import compat from 'eslint-plugin-compat';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import tsSortKeys from 'eslint-plugin-typescript-sort-keys';
import importOrder from 'eslint-plugin-import';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';

import tsEsLint from '@typescript-eslint/eslint-plugin';
import tsEsLintParser from '@typescript-eslint/parser';

export default [
	{
		name: 'atanas.info ESLint config',
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.jest
			},
			parser: tsEsLintParser,
			parserOptions: {
				project: 'tsconfig.json',
				sourceType: 'module'
			}
		},
		plugins: {
			jest,
			react,
			compat,
			import: importOrder,
			prettier,
			'react-hooks': reactHooks,
			'sort-keys-fix': sortKeysFix,
			'@typescript-eslint': tsEsLint,
			'typescript-sort-keys': tsSortKeys,
			'sort-destructure-keys': sortDestructureKeys
		},
		ignores: ['*.config.js', '*.config.mjs', '/src/data/open-source.ts'],
		rules: {
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
			'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
			'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false, minKeys: 2 }],
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
							// prettier-ignore
							"pattern": "@*(test-config|components|insights|scripts|public|pages|tests|data|npm|lib|src){,/*}",
							group: 'internal',
							position: 'after'
						},
						{
							pattern: '@*(styles){,/*}',
							patternOptions: { dot: true, nocomment: true },
							group: 'type',
							position: 'before'
						},
						{
							pattern: '**/*.+(css|sass|less|scss|pcss|styl)',
							patternOptions: { dot: true, nocomment: true },
							group: 'type',
							position: 'before'
						},
						{
							pattern: '{.,..}/**/*.+(css|sass|less|scss|pcss|styl)',
							patternOptions: { dot: true, nocomment: true },
							group: 'type',
							position: 'before'
						},
						{
							pattern: '@*(svg){,/*}',
							group: 'index',
							patternOptions: { matchBase: true },
							position: 'after'
						},
						{
							// prettier-ignore
							"pattern": "{.,..}/**/*.+(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|json)",
							group: 'index',
							patternOptions: { matchBase: true },
							position: 'after'
						},
						{
							// prettier-ignore
							"pattern": "**/*.+(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|json)",
							group: 'index',
							patternOptions: { matchBase: true },
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
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	}
];
