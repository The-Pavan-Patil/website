// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg)$/i, // Regex to match .jpg/.jpeg files
                type: 'asset/resource', // Emits the file as a resource (like file-loader)
                generator: {
                    filename: 'static/images/[name][hash][ext]', // Output path/filename
                },
            },
        ],
    },
};