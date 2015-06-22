module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/avanti.css': 'scss/avanti.scss',
          'css/fixed-width.css': 'scss/fixed-width.scss' // Used for fixed width browsers
        }
      }
    },

    concat: {
        options: {
            separator: ';'
        },  
        basic: {
            src: [
                'js/jquery.2.1.4.min.js',
                'bower_components/foundation/js/foundation.min.js',
                'lib/waypoints/jquery.waypoints.min.js',
                'lib/owl.carousel/owl.carousel.min.js',                
                'js/app.js'
            ],
            dest: 'js/avanti.js'            
        }      
    }, 
      
    uglify: {
        build: {
            files: {
                'js/avanti.min.js': ['js/avanti.js']
            }
        }
    },
      
    autoprefixer: {
        dist: {
            files: {
              'css/avanti.css': 'css/avanti.css' 
            }
        }
    },
      
    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass','autoprefixer']
      },
        
      scripts: {
        files: 'js/app.js',
        tasks: ['concat','uglify'],
        options: {
          
        }
      } 
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
    
  grunt.registerTask('build', ['sass','concat','uglify']);
  grunt.registerTask('default', ['build','watch','concat','uglify']);
}
