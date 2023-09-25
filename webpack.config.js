const path = require('node:path')

const config = {
    entry: {
      index: path.resolve(__dirname, 'dist.js','index.js' ),
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json']
    },
    module: {
        rules: [
          {
           
            test: /\.(?:js|mjs|cjs|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                "sourceType": "unambiguous",
                presets: [
                  ['solid']
                ]
              }
            }
          }
        ]
      }
}

const Config =  (env, argv) => {
    if (argv.mode === 'production') {
        return {
            ...config, 
            mode:'production', 
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: '[name].bundle.js'
            }
        }
    }

    return {
        ...config,
        mode:'development',
        output : {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js'
        }
    }

};

module.exports =  Config