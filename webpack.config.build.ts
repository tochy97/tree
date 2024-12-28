
export default {
  entry: {
    Tree: './src/index.ts',
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: ["ts-loader"],
        exclude: [/node_modules/, /test/],
      },
      {
        test: /\.(css)?$/,
        use: ["style-loader","css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    filename: '[name].mjs',
    path: "/lib",
    library: {
      type: "module",
    },
    clean: true
  },
  experiments: {
      outputModule: true
  },
  plugins: [],
  devtool: false,
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};