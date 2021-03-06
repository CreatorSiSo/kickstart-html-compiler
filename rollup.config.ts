import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default [
  // {
  //   input: "src/index.ts",
  //   output: {
  //     name: "kickstartHtmlCompiler",
  //     file: pkg.browser,
  //     format: "umd",
  //   },
  //   plugins: [
  //     // resolve(), // so Rollup can find `ms`
  //     // commonjs(), // so Rollup can convert `ms` to an ES module
  //     typescript({ tsconfig: "./tsconfig.json" }),
  //   ],
  // },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs", exports: "default" },
      { file: pkg.module, format: "es", exports: "default" },
    ],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  },
];
