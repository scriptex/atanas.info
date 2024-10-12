/* eslint-disable sort-keys */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	collectCoverageFrom: [
		'<rootDir>/insights/**/*.{ts,tsx}',
		'<rootDir>/lib/**/*.{ts,tsx}',
		'<rootDir>/npm/**/*.{ts,tsx}',
		'<rootDir>/screenshots/**/*.{ts,tsx}',
		'<rootDir>/src/**/*.{ts,tsx}',
		'!<rootDir>/**/*.d.ts',
		'!<rootDir>/insights/client.ts',
		'!<rootDir>/lib/mongodb.ts',
		'!<rootDir>/screenshots/*',
		'!<rootDir>/src/components/github-skyline/*',
		'!<rootDir>/src/houdini/*',
		'!<rootDir>/src/pages/api/*',
		'!<rootDir>/src/scripts/*'
	],
	coverageReporters: ['lcov', 'html', 'cobertura'],
	coverageThreshold: {
		global: {
			branches: 65,
			functions: 75,
			lines: 75,
			statements: 75
		}
	},
	globals: {
		navigator: {},
		window: {}
	},
	moduleDirectories: ['node_modules', 'insights', 'lib', 'npm', 'screenshots', 'src', 'test-config', 'tests'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'\\.(css|scss)$': '<rootDir>/test-config/style-mock.ts',
		'\\.svg': '<rootDir>/test-config/svg.ts',
		'@components': '<rootDir>/src/components',
		'@data(.*)': '<rootDir>/src/data/$1',
		'@insights(.*)': '<rootDir>/insights/$1',
		'@lib(.*)': '<rootDir>/lib/$1',
		'@npm': '<rootDir>/npm',
		'@pages(.*)': '<rootDir>/src/pages/$1',
		'@public(.*)': '<rootDir>/public/$1',
		'@scripts(.*)': '<rootDir>/src/scripts/$1',
		'@src(.*)': '<rootDir>/src/$1',
		'@styles(.*)': '<rootDir>/src/styles/$1',
		'@svg(.*)': '<rootDir>/src/svg/$1',
		'@test-config(.*)': '<rootDir>/test-config/$1',
		'@tests(.*)': '<rootDir>/tests/$1',
		'swiper/css': '<rootDir>/test-config/style-mock.ts'
	},
	preset: 'ts-jest',
	setupFiles: ['jest-canvas-mock', '<rootDir>/test-config/index.ts'],
	testPathIgnorePatterns: [],
	testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
	transform: {
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				tsconfig: {
					jsx: 'react-jsx'
				}
			}
		]
	},
	verbose: false
};

export default config;
