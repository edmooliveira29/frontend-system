module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	rootDir: 'src',
	verbose: true,
	collectCoverage: true,
	coverageDirectory: '../coverage',
	setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
