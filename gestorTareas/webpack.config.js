const path = require ('path');

module.exports = {
    entry: './src/index.js', //Punto de entrada de la aplicación
    output: {
        filename: 'bundle.js',//nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Reger para identificar archivos css
                use: ['style-loader', 'css-loader'], // guarda correctamente las lineas de estilos
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, //excluir carpeta node
                use: {
                    loader: 'babel-loader', //loader para pasar JS moderno a JS más antigua para todos los navegadores
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuración
    devServer: {
        contentBase: path.resolve(_dirame,'dist'), //Carpeta principal del servidor
        compress: true, //Habilitar la compresion gzip
        port: 9000, //Puerto del servidor de desarrollo
    },
};

