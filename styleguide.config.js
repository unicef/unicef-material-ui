const path = require('path')
const { styles, theme } = require('./styleguide.styles')
module.exports = {
  title: 'UNICEF Material UI',
  styles,
  theme,
  getComponentPathLine: componentPath => {
    const dirname = path.dirname(componentPath, '.js')
    const name = dirname.split('/').slice(-1)[0]

    return `import { ${name} } from '@unicef/material-ui'`
  },
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
  sections: [
    {
      name: '',
      content: 'src/readme.md',
    },
    {
      name: 'Components',
      components: 'src/components/**/[A-Z]*.js',
    },
  ],
}
