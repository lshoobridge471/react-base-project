import { Configuration } from "webpack";
import * as webpackMerge  from 'webpack-merge';

import { common } from './webpack.common';

const config: Configuration = webpackMerge.merge(common, {
  mode: "development",
  devtool: 'eval-source-map',
});

export default config;