import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

const extensions = ['.ts'];
const tsconfig = path.resolve(__dirname, 'tsconfig.json');

const config: webpack.Configuration = {
	entry: path.resolve(__dirname, 'src/app.ts'),
	module: {
		rules: [
			{
				exclude: /node_modules/,
				loader: 'ts-loader',
				options: { configFile: tsconfig },
				test: /\.ts$/
			}
		]
	},
	optimization: {
		minimizer: [new TerserPlugin({ parallel: true, terserOptions: { ecma: 6 } })]
	},
	output: { path: path.resolve(__dirname, 'dist'), filename: 'server.js' },
	plugins: [new CleanWebpackPlugin({ verbose: true })],
	resolve: {
		extensions,
		plugins: [new TsconfigPathsPlugin({ configFile: tsconfig, extensions })]
	},
	target: 'node',
	externals: [nodeExternals()]
};

export default config;
