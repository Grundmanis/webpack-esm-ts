import path from "path";
import nodeExternals from "webpack-node-externals";

const {
	NODE_ENV = 'production',
} = process.env;
export default {
	entry: './src/index.ts',
	mode: NODE_ENV,
	target: 'node',
	output: {
		path: path.resolve('build'),
		filename: 'index.js'
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					'ts-loader',
				]
			}
		]
	},
	plugins: [
	],
	externals: [ nodeExternals() ]
}
