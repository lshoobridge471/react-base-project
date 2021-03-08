import * as path from "path";
import * as webpack from "webpack";
import * as HtmlWebPackPlugin from "html-webpack-plugin";
import * as MiniCSSExtractPlugin from 'mini-css-extract-plugin';

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/public/index.html",
  filename: "./index.html"
});

const config: webpack.Configuration = {
  mode: "production",
  devtool: 'cheap-module-source-map',
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { test: /\.css$/, loader: "css-loader" },
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
                resources: [
                    // The second parameter of the resolve method is the address of the scss configuration file. If there are more than one, just add them one by one.
                    path.resolve(__dirname, './../src/theme.scss')
                ]
            }
        }
      ]
    },
    ]
  },
  plugins: [
    htmlPlugin,
    new MiniCSSExtractPlugin({
      filename: "./css/styles.css",
    })
  ]
};

export default config;