import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'

const NODE_ENV = process.env.NODE_ENV || 'development'
const outputFile = NODE_ENV === 'production' ? './lib/prod.js' : './lib/dev.js'

export default {
  input: './src/index.ts',
  // output: {
  //   file: outputFile,
  //   format: 'esm',
  //   sourcemap: true,
  // },
  output: [
    {
      file: './lib/prod.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: './lib/prod.cjs',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationMap: true,
      exclude: ['node_modules/**', '**/*.test.ts', '**/*.test.tsx', 'example/**'],
    }),
  ],
  external: ['react', 'react-is', 'react-dom', 'prop-types'],
  onwarn: function (message) {
    if (message.code === 'MODULE_LEVEL_DIRECTIVE') return
    console.error(message)
  },
}
