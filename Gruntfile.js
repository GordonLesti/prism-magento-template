module.exports = function( grunt ) {
    "use strict";
    var key;

    grunt.initConfig( {
        pkg: grunt.file.readJSON( "package.json" ),
        jshint: {
            options: {
                jshintrc: true
            },
            grunt: "Gruntfile.js",
            src: "components/prism-magentotemplate.js"
        },
        jscs: {
            src: "components/prism-magentotemplate.js",
            gruntfile: "Gruntfile.js",
            options: {
                config: ".jscsrc"
            }
        },
        jsonlint: {
            pkg: {
                src: [
                    "package.json"
                ]
            }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> */\n"
            },
            build: {
                src: "components/prism-magentotemplate.js",
                dest: "components/prism-magentotemplate.min.js"
            }
        },
        connect: {
            server: {
                options: {
                    base: "",
                    port: 9999
                }
            }
        },
        watch: {}
    } );

    for ( key in grunt.file.readJSON( "package.json" ).devDependencies ) {
        if ( key !== "grunt" && key.indexOf( "grunt" ) === 0 ) {
            grunt.loadNpmTasks( key );
        }
    }

    grunt.registerTask( "default", [ "jshint", "jscs", "jsonlint", "uglify" ] );
    grunt.registerTask( "dev", [ "connect", "watch" ] );
    grunt.registerTask( "ci", [ "jshint", "jscs", "jsonlint" ] );
};
