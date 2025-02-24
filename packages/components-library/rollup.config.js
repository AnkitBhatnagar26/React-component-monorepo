import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss"; // If using CSS
import svgr from "@svgr/rollup"; // If using SVGs

export default {
  input: "src/index.ts", // Update if needed
  output: [
    {
      file: "dist/index.es.js",
      format: "esm",
      sourcemap: true,
      exports: "named", // Ensure named exports
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
      exports: "named", // Ensure named exports
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    babel({ babelHelpers: "bundled", extensions: [".js", ".ts", ".tsx"] }),
    json(), // Allows importing JSON files
    postcss(), // Allows importing CSS files
    svgr(), // Allows importing SVG files
  ],
  external: ["react", "react-dom"], // Avoid bundling React
};
