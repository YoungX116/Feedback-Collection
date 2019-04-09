const gulp = require("gulp");
const watch = require("gulp-watch");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssvars = require("postcss-simple-vars");
const nested = require("postcss-nested");
const cssImport = require("postcss-import");

gulp.task("default", () => {
  console.log("Created a gulp task.");
});

gulp.task("styles", () => {
  console.log("style changed");
  return gulp
    .src("./client/styles/style.css")
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./client/public"));
});

gulp.task("watch", () => {
  watch("./client/styles/style.css", () => {
    gulp.start("styles");
  });
});
