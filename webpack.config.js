// const webpack = require("webpack");
// const path = require("path");
// const nodeExternals = require("webpack-node-externals");

// var config = {
//     mode: "development",
//     plugins: [new webpack.HotModuleReplacementPlugin()],
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,
//                 use: "ts-loader",
//                 exclude: /node_modules/
//             },
//             {
//                 test: /\.(jpg|jpeg|png|gif|ico)$/,
//                 use: [
//                     {
//                         loader: "file-loader",
//                         options: {
//                             name: "images/[name].[contenthash:4].[ext]",
//                             outputPath: "images/"
//                         }
//                     }
//                 ]
//             }
//         ]
//     },
//     resolve: {
//         extensions: [".tsx", ".ts", ".js"],
//         modules: ["src", "node_modules"]
//     }
// };

// var client = Object.assign({}, config, {
//     name: "client",
//     target: "web",
//     entry: path.resolve(__dirname, "src/client/index.tsx"),
//     output: {
//         filename: "bundle.js",
//         path: path.resolve(__dirname, "build")
//     }
// });

// var server = Object.assign({}, config, {
//     name: "server",
//     target: "node",
//     externals: [nodeExternals()],
//     entry: path.resolve(__dirname, "src/server/index.tsx"),
//     output: {
//         filename: "server.js",
//         path: path.resolve(__dirname, "build")
//     }
// });

// module.exports = [client, server];

const path = require("path");

module.exports = {
    entry: "./src/client.tsx",
    mode: process.env.NODE_ENV || "development",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
                // resolve: {
                //     extensions: [".ts", ".tsx", ".json"]
                // }
            }
        ]
    }
};
