const gulp = require("gulp");
const watch = require("gulp-watch");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssvars = require("postcss-simple-vars");
const nested = require("postcss-nested");

gulp.task("default", () => {
  console.log("Created a gulp task.");
});

gulp.task("styles", () => {
  console.log("style changed");
  return gulp
    .src("./client/public/style.css")
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./client/temp"));
});

gulp.task("watch", () => {
  watch("./client/public/style.css", () => {
    gulp.start("styles");
  });
});
