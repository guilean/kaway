module.exports = {
	stories: ['../stories/**/*.stories.js'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-a11y/register',
		'@storybook/addon-knobs/register',
	],
	webpackFinal: async (config) => {
		// do mutation to the config
		config.module = {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.s[ac]ss$/i,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
			],
		};
		return config;
	},
};
