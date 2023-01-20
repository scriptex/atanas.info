import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	moduleDirectories: ['node_modules', 'insights', 'lib', 'npm', 'screenshots', 'src', 'test-config', 'tests'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>/test-config/style-mock.ts',
		'\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/test-config/file-mock.ts',
		'@lib(.*)': '<rootDir>/lib/$1',
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
		],
		'\\.(css|less|sass|scss)$': '<rootDir>/test-config/style-mock.ts',
		'\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md|mdx)$':
			'<rootDir>/test-config/file-mock.ts'
	},
	verbose: false,
	testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
	testPathIgnorePatterns: [],
	collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
	coverageThreshold: {
		global: {
			branches: 0,
			functions: 0,
			lines: 0,
			statements: 0
		}
	},
	coverageReporters: ['lcov', 'html', 'cobertura'],
	globals: {
		window: {},
		navigator: {}
	}
};

export default config;
