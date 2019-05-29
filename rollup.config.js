import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import {uglify} from "rollup-plugin-uglify"
import pkg from './package.json'

export default {
  input: 'src/calendar-date-list.js',
  output: {
    name: 'calendar-date-list',
    file: 'dist/calendar-date-list.js',
    format: 'umd',
    banner: `/* ${pkg.name} v${pkg.version}, @license MIT */`
  },
  plugins: [
    resolve(),
    babel({
      runtimeHelpers: true
    }),
    uglify({
      output: {
        comments: 'all'
      }
    })
  ]
}
