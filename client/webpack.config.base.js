const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotenvPlugin = require("dotenv-webpack");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");
const postcssUrl = require("postcss-url");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  context: path.resolve(__dirname),

  mode: process.env.NODE_ENV,
  target: "web",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                sourceMap: !devMode
              }
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: !devMode,
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: () => [
                postcssImport,
                postcssUrl,
                postcssPresetEnv,
                autoprefixer,
                cssnano
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: !devMode,
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: () => [
                postcssImport,
                postcssUrl,
                postcssPresetEnv,
                autoprefixer,
                cssnano
              ]
            }
          },
          { loader: "resolve-url-loader", options: { debug: true } },
          { loader: "sass-loader", options: { sourceMap: !devMode } }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|tiff)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 10000, name: "[name].[hash:7].[ext]" }
          },
          { loader: "image-webpack-loader", options: { disable: devMode } }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 10000, name: "[name].[hash:7].[ext]" }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 10000, name: "[name].[hash:7].[ext]" }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Dev",
      template: path.resolve(__dirname, "public/index.ejs")
    }),
    new CopyWebpackPlugin([
      {
        from: "public",
        ignore: ["index.ejs"]
      }
    ]),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:10].css",
      chunkFilename: "[name].[contenthash:10].css"
    }),
    new DotenvPlugin(),
    new StyleLintPlugin()
    // new DuplicatePackageCheckerPlugin(),
    // new ForkTsCheckerWebpackPlugin()
  ],

  resolve: {
    // What directories should be searched when resolving modules
    modules: ["node_modules", "src"],
    // Automatically resolve certain extensions (Ex. import 'folder/name(.ext)')
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
};
