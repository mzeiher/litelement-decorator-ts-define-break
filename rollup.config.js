import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: './main.ts',
  output: {
    file: 'bundled.js',
    format: 'esm',
  },
  plugins: [
    resolve(),
    typescript()
  ]
}