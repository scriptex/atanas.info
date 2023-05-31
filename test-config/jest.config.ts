import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	moduleDirectories: ['node_modules', 'insights', 'lib', 'npm', 'screenshots', 'src', 'test-config', 'tests'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'\\.svg': '<rootDir>/test-config/svg.ts',
		'\\.(css|scss)$': '<rootDir>/test-config/style-mock.ts',
		'@lib(.*)': '<rootDir>/lib/$1',
		'@npm': '<rootDir>/npm',
		'@src(.*)': '<rootDir>/src/$1',
		'@svg(.*)': '<rootDir>/src/svg/$1',
		'@data(.*)': '<rootDir>/src/data/$1',
		'@tests(.*)': '<rootDir>/tests/$1',
		'@pages(.*)': '<rootDir>/src/pages/$1',
		'@public(.*)': '<rootDir>/public/$1',
		'@styles(.*)': '<rootDir>/src/styles/$1',
		'@scripts(.*)': '<rootDir>/src/scripts/$1',
		'@insights(.*)': '<rootDir>/insights/$1',
		'@components': '<rootDir>/src/components',
		'@test-config(.*)': '<rootDir>/test-config/$1'
	},
	setupFiles: ['jest-canvas-mock', '<rootDir>/test-config/index.ts'],
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
	verbose: false,
	testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
	testPathIgnorePatterns: [],
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
	coverageThreshold: {
		global: {
			lines: 97,
			branches: 88,
			functions: 94,
			statements: 97
		}
	},
	coverageReporters: ['lcov', 'html', 'cobertura'],
	globals: {
		window: {},
		navigator: {}
	}
};

export default config;
