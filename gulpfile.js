 //此处的代码都是由NODE执行的
    //载入gulp模块
    var gulp = require('gulp');
    var cssnano =require('gulp-less');


    //注册一个任务
    gulp.task('copy', function(){
        //当gulp执行这个say 任务时，会自动海之星此函数
        /*console.log('hello word');*/
        /*gulp.src取出一个文件*/
        gulp.src('src/*.html')
            .pipe(gulp.dest('dist/'));              //将此处需要的操作传递进去
    });

    //监视一个文件，如果发生改变，就进行一次copy
    gulp.task('dist', function(){
        //当gulp执行这个say 任务时，会自动海之星此函数
        /*console.log('hello word');*/
        /*gulp.src取出一个文件*/
        gulp.watch('src/index.html',['copy']);             //将此处需要的操作传递进去
        gulp.watch('src/css/*.less',['style']);

    });

    //压缩工具引用
/*    var cssnano =require('gulp-cssnano');*/

    //下载、使用less插件 压缩插件   都要先下载 
    gulp.task('style',function(){
        gulp.src('src/css/*.less')
        .pipe(less())    
       /* .pipe(cssnano())      */                      //该环境之后就是CSS文件直接压缩
        .pipe(gulp.dest('dist/css'))
    });

