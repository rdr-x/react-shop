const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname , 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js' , '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            "@context": path.resolve(__dirname, "src/context/"),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@routes': path.resolve(__dirname, 'src/routes/')
            }
        }
    },
    module: {
        rules: [
            {   //habilitar js
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            { //habilitar html
                test: /\.html$/,
                use: [
                    { loader: 'html-loader'}
                ]
            },
            { //habilitar estilos
                test: /\.s?[ac]ss/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                        {
                        loader: 'file-loader',
                            options: {
                                name: 'images/[hash]-[name].[ext]',
                                },
                        },
                    ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }
    
}