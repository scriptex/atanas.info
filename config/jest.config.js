module.exports = {
	preset: 'ts-jest',
	moduleDirectories: ['node_modules', 'src'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>/test-config/style-mock.js',
		'\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/test-config/file-mock.js'
	},
	setupFiles: ['jest-canvas-mock', '<rootDir>/test-config/index.js', '<rootDir>/test-config/local-storage-mock.js'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'\\.(css|less|sass|scss)$': '<rootDir>/test-config/style-mock.js',
		'\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md|mdx)$':
			'<rootDir>/test-config/file-mock.js'
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
			branches: 25,
			functions: 25,
			lines: 25,
			statements: 25
		}
	},
	coverageReporters: ['lcov', 'html', 'cobertura'],
	globals: {
		window: {},
		navigator: {}
	}
};
