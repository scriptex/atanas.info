import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	moduleDirectories: ['node_modules', 'src'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>/test-config/style-mock.ts',
		'\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/test-config/file-mock.ts',
		'@src(.*)': '<rootDir>/src/$1',
		'@data(.*)': '<rootDir>/src/data/$1',
		'@scripts(.*)': '<rootDir>/src/scripts/$1',
		'@insights(.*)': '<rootDir>/insights/$1',
		'@components': '<rootDir>/src/components'
	},
	setupFiles: ['jest-canvas-mock', '<rootDir>/test-config/index.ts'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'\\.(css|less|sass|scss)$': '<rootDir>/test-config/style-mock.ts',
		'\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md|mdx)$':
			'<rootDir>/test-config/file-mock.ts'
	},
	verbose: false,
	testRegex: '.*\\.(test|spec)\\.(j|tsx?)$',
	testPathIgnorePatterns: [
		'<rootDir>/bin/',
		'<rootDir>/config/',
		'<rootDir>/dist/',
		'<rootDir>/node_modules/',
		'<rootDir>/test-config/'
	],
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{ts,tsx}',
		'!<rootDir>/src/**/*.{d.ts,d.tsx}',
		'!<rootDir>/src/index.tsx',
		'!<rootDir>/src/loadables.tsx',
		'!<rootDir>/src/components/index.ts',
		'!<rootDir>/src/components/github-skyline/index.tsx',
		'!<rootDir>/src/data/*.{js,ts}',
		'!<rootDir>/src/houdini/*.ts',
		'!<rootDir>/src/scripts/*.{ts,js}'
	],
	coverageThreshold: {
		global: {
			branches: 60,
			functions: 80,
			lines: 80,
			statements: 80
		}
	},
	coverageReporters: ['lcov', 'html', 'cobertura'],
	globals: {
		window: {},
		navigator: {}
	}
};

export default config;
