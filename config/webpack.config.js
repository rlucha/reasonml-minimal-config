var BabiliPlugin = require('babili-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var production = process.env.NODE_ENV === 'production';

if(!production) {
  var Dashboard = require('webpack-dashboard');
  var DashboardPlugin = require('webpack-dashboard/plugin');
  var dashboard = new Dashboard();
}

module.exports = {
    entry: "./src/main.re",
    output: {
        filename: "./build/bundle.js"
    },
    module: {
        rules: [
          {test: /\.(re|ml)$/, use: "bs-loader"},
        ]
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".json", ".re", ".ml"]
    },
    plugins: getPlugins()
};

function getPlugins() {
    return production
    ? ([new BabiliPlugin()])
    : ([new DashboardPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsFilename: 'stats.json'
        })
      ]);
}
