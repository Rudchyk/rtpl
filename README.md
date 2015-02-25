Compass VikingR Template
========================

Version
----
1.0

License
----
MIT

Installation
--------------
```sh
gem install rtpl-compass
```

Create project
--------------
```sh
compass create my_project -r rtpl-compass --using rtpl-compass
```

####This will create a my_project directory containing the following files:
```sh
my_project
|
|config.rb ***********************************// Settings for Compass
|index.html **********************************// HTML template
|index.php ***********************************// Showcase of the project
|readme.txt **********************************// Notes
|screenshot.jpg ******************************// Screenshot of the project
|compass_watch.bat ***************************// Console command "compass watch"
|css *****************************************// Stylesheets directory
    |dev.css *********************************// Css for developers
|fonts ***************************************// Fonts directory
|ie-old **************************************// Cap for old IE
    |images
        |as.jpg
        |bg_span_wol.gif
        |f.jpg
        |gc.jpg
        |h.jpg
        |ie.jpg
        |mf.jpg
        |op.jpg
        |td1.jpg
        |td2.jpg
        |td3.jpg
    |favicon.ico
    |index.html
|images **************************************// Images directory
    |bg **************************************// Directory with background images
    |icons ***********************************// Directory with icons for sprite
    |required ********************************// Directory with required images
        |loading.gif *************************// Image load when necessary image is loading
        |noimg.jpg ***************************// Image load when necessary image not found
    |temp ************************************// Directory with temporary images
    |favicon.png *****************************// Favicon for the project
|js ******************************************// Javascripts directory
    |full ************************************// Directory for not compressed scripts
        |example.js **************************// Example scripts for the project, default "commented out"
        |rform.js ****************************// JavaScript library for forms, default "commented out"
        |scripts.js **************************// All scripts for the project, default "commented out"
        |ph.min.js ***************************// Compressed script for placeholders in IE9 and Opera
    |min *************************************// Directory for compressed scripts
        |head.min.js *************************// JavaScript library what make the only script in HEAD (*1*)
        |jquery.fancybox.min.js ********// Compressed JavaScript library for FancyBox, default "unconnected" (*2*)
        |ph.js *******************************// Script for placeholders in IE9 and Opera
    |init.js *********************************// Adding HeadJS to the project
|sass ****************************************// Sass directory
    |source **********************************// Source directory for styles
        |bl
            |_content.sass *******************// Styles for content
            |_footer.sass ********************// Styles for footer
            |_header.sass ********************// Styles for header
        |lib
            |mixins
            |_mixins.sass ********************// Mixins sass file
                |_animations.sass ************// Mixins for animations
                |_background.sass ************// Mixins for background
                |_base.sass ******************// Base mixins
                |_browsers.sass **************// Mixins for browsers
                |_fonts.sass *****************// Mixins for typography
                |_forms.sass *****************// Mixins for formstyle
                |_gridsystem.sass ************// Gridsystem mixins
                |_media.sass *****************// Media query mixins
                |_positions.sass *************// Mixins for positions
                |_sprites.sass ***************// Mixins for sprites
                |_width.sass *****************// Mixins for width
            |_default.sass *******************// Default classes
        |plugins
            |_jquery.fancybox.sass ***********// Styles for FancyBox, default "unconnected" (*2*)
            |_rforms.sass ********************// Styles for rforms, default "unconnected"
        |_buttons.sass ***********************// Styles for buttons
        |_formstyle.sass *********************// Styles for forms
        |_global.sass ************************// Global styles
        |_reset.sass *************************// Reset styles
        |_typography.sass ********************// Styles for typography
    |index.sass ******************************// Main sass file
```
*<a href="http://headjs.com/">1</a>*, *<a href="http://www.fancyapps.com/fancybox/">2</a>*
