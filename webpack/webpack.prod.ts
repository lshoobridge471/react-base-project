import { Configuration } from "webpack";
import { merge } from 'webpack-merge';

import { common } from './webpack.common';

const config: Configuration = merge(common, {
  mode: "production",
  devtool: 'cheap-module-source-map',
});

export default config;