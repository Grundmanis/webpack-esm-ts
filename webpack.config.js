import path from "path";

export default {
	entry: './src/index.ts',
	mode: "development",
	// target: "node",
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	experiments: {
		outputModule: true,
	},
	output: {
		filename: 'main.js',
		path: path.resolve('dist'),
		library: {
			type: "module",
		},
	},
};
