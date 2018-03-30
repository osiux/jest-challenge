const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    entry: ["./src/js/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: "/node_modules/",
                loader: "babel-loader"
            },
            {
                test: /\.(html)$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: "src/index.html"
        })
    ]
};
