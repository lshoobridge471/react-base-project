import { Configuration } from "webpack";
import * as webpackMerge  from 'webpack-merge';

import { common } from './webpack.common';

const config: Configuration = webpackMerge.merge(common, {
  mode: "production",
  devtool: 'cheap-module-source-map',
});

export default config;