import babel from 'rollup-plugin-babel';
import {uglify} from "rollup-plugin-uglify";
import pkg from './package.json';

export default [
  {
    input: 'src/calendar.js',
    output: {
      name: 'calendar-date-list',
      file: 'dist/calendar.js',
      format: 'umd',
      exports: 'default',
      banner: `/* ${pkg.name} v${pkg.version}, @license MIT */`
    },
    plugins: [
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
]
