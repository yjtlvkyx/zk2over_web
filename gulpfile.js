const gulp = require("gulp"),
    server = require("gulp-webserver");

gulp.task("server", () => {
    return gulp.src("src").pipe(server({
        port: 8844,
        proxies: [
            { source: "/datalist", target: "http://localhost:8024/datalist" }
        ]
    }))
})