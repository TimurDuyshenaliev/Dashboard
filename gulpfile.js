const { task, src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));


task('scss:build', () => {
    return src('src/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('dist'));
})

task('watch', ()=>{
    watch('src/*.scss', series('scss:build'));
})