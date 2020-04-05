// eslint-disable-next-line no-undef
module.exports = {
	verbose: true,
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	moduleDirectories: ['node_modules', 'src'],
	moduleNameMapper: {
		'\\.(css|less|scss)$': 'identity-obj-proxy',
	},
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.jsx$': 'babel-jest',
	},
	setupFilesAfterEnv: ['./jest.setup.js'],
	collectCoverageFrom: [
		'src/lib/**/*.js',
		'!data/keyMap.js',
		'!/node_modules/',
	],
};
