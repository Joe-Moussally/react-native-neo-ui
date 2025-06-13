const path = require("path");

module.exports = function (context, options) {
  return {
    name: "react-native-web-plugin",
    configureWebpack(config, isServer) {
      return {
        resolve: {
          alias: {
            "react-native$": "react-native-web",
            "@/core": path.resolve(__dirname, "../../core"),
          },
          extensions: [
            ".web.js",
            ".web.ts",
            ".web.tsx",
            ...config.resolve.extensions,
          ],
        },
        module: {
          rules: [
            {
              test: /\.(js|jsx|ts|tsx)$/,
              include: [path.resolve(__dirname, "../../core")],
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    ["@babel/preset-env", { targets: { node: "current" } }],
                    "@babel/preset-react",
                    "@babel/preset-typescript",
                  ],
                  plugins: [["react-native-web/babel", { commonjs: true }]],
                },
              },
            },
          ],
        },
      };
    },
  };
};
