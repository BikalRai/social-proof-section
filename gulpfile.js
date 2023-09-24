const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const buildStyles = () =>
  src("./scss/**/*.scss").pipe(sass()).pipe(dest("css"));

const watchSass = () => {
  watch(["./scss/**/*.scss"], buildStyles);
};

exports.default = series(buildStyles, watchSass);
