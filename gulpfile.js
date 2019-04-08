const gulp = require("gulp");
const watch = require("gulp-watch");

gulp.task("default", () => {
  console.log("Created a gulp task.");
});

gulp.task("css", () => {
  console.log("CSS changed.");
});

gulp.task("watch", () => {
  watch("./client/public/style.css", () => {
    gulp.start("css");
  });
});
