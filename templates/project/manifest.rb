# Description
description "A compass template (Sass syntax) implementation of Sergii Rudchyk's"

# General File Import
html 'index.html', :to => "index.html"
html 'index.php', :to => "index.php"
image 'files/screenshot.jpg', :to => "../screenshot.jpg"
image 'files/favicon.png', :to => "favicon.png"
file 'files/readme.txt', :to => "readme.txt"
file 'files/compass_watch.bat', :to => "compass_watch.bat"

# Stylesheet Import
file 'css/dev.css', :to => "css/dev.css"

# Sass Import
# Sass bl
file 'sass/source/bl/_header.sass', :to => "sass/source/bl/_header.sass"
file 'sass/source/bl/_footer.sass', :to => "sass/source/bl/_footer.sass"
file 'sass/source/bl/_content.sass', :to => "sass/source/bl/_content.sass"
# Sass lib
file 'sass/source/lib/_mixins.sass', :to => "sass/source/lib/_mixins.sass"
file 'sass/source/lib/_default.sass', :to => "sass/source/lib/_default.sass"
file 'sass/source/lib/mixins/_animations.sass', :to => "sass/source/lib/mixins/_animations.sass"
file 'sass/source/lib/mixins/_background.sass', :to => "sass/source/lib/mixins/_background.sass"
file 'sass/source/lib/mixins/_base.sass', :to => "sass/source/lib/mixins/_base.sass"
file 'sass/source/lib/mixins/_browsers.sass', :to => "sass/source/lib/mixins/_browsers.sass"
file 'sass/source/lib/mixins/_fonts.sass', :to => "sass/source/lib/mixins/_fonts.sass"
file 'sass/source/lib/mixins/_forms.sass', :to => "sass/source/lib/mixins/_forms.sass"
file 'sass/source/lib/mixins/_gridsystem.sass', :to => "sass/source/lib/mixins/_gridsystem.sass"
file 'sass/source/lib/mixins/_media.sass', :to => "sass/source/lib/mixins/_media.sass"
file 'sass/source/lib/mixins/_positions.sass', :to => "sass/source/lib/mixins/_positions.sass"
file 'sass/source/lib/mixins/_sprites.sass', :to => "sass/source/lib/mixins/_sprites.sass"
file 'sass/source/lib/mixins/_width.sass', :to => "sass/source/lib/mixins/_width.sass"
# Sass plugins
file 'sass/source/plugins/_rforms.sass', :to => "sass/source/plugins/_rforms.sass"
file 'sass/source/plugins/_jquery.fancybox.sass', :to => "sass/source/plugins/_jquery.fancybox.sass"
# Sass global
file 'sass/source/_typography.sass', :to => "sass/source/_typography.sass"
file 'sass/source/_reset.sass', :to => "sass/source/_reset.sass"
file 'sass/source/_global.sass', :to => "sass/source/_global.sass"
file 'sass/source/_formstyle.sass', :to => "sass/source/_formstyle.sass"
file 'sass/source/_buttons.sass', :to => "sass/source/_buttons.sass"
# Sass index
file 'sass/index.sass', :to => "sass/index.sass"

# Image Import
image 'images/favicon.png', :to => "favicon.png"
image 'images/loading.gif', :to => "required/loading.gif"
image 'images/noimg.jpg', :to => "required/noimg.jpg"
image 'images/fancyClose.png', :to => "icons/fancyClose.png"
image 'images/fancyNext.png', :to => "icons/fancyNext.png"
image 'images/fancyPrev.png', :to => "icons/fancyPrev.png"

# Javascript Import
# JS min
file 'js/min/head.min.js', :like => :javascript, :to => 'min/head.min.js'
file 'js/min/ph.min.js', :like => :javascript, :to => 'min/ph.min.js'
file 'js/min/jquery.fancybox.min.js', :like => :javascript, :to => 'min/jquery.fancybox.min.js'
# JS full
file 'js/full/ph.js', :like => :javascript, :to => 'full/ph.js'
file 'js/full/rform.js', :like => :javascript, :to => 'full/rform.js'
file 'js/full/scripts.js', :like => :javascript, :to => 'full/scripts.js'
file 'js/full/example.js', :like => :javascript, :to => 'full/example.js'
# JS global
file 'js/init.js', :like => :javascript, :to => 'init.js'

# ie-old Import
image 'ie-old/favicon.ico', :to => "../ie-old/favicon.ico"
html 'ie-old/index.html', :to => "ie-old/index.html"
image 'ie-old/images/as.jpg', :to => "../ie-old/images/as.jpg"
image 'ie-old/images/bg_span_wol.gif', :to => "../ie-old/images/bg_span_wol.gif"
image 'ie-old/images/f.jpg', :to => "../ie-old/images/f.jpg"
image 'ie-old/images/gc.jpg', :to => "../ie-old/images/gc.jpg"
image 'ie-old/images/h.jpg', :to => "../ie-old/images/h.jpg"
image 'ie-old/images/ie.jpg', :to => "../ie-old/images/ie.jpg"
image 'ie-old/images/mf.jpg', :to => "../ie-old/images/mf.jpg"
image 'ie-old/images/op.jpg', :to => "../ie-old/images/op.jpg"
image 'ie-old/images/td1.jpg', :to => "../ie-old/images/td1.jpg"
image 'ie-old/images/td2.jpg', :to => "../ie-old/images/td2.jpg"
image 'ie-old/images/td3.jpg', :to => "../ie-old/images/td3.jpg"

#directories
directory 'fonts', :to => 'fonts'
directory 'bg', :to => 'images/bg'
directory 'temp', :to => 'images/temp'
directory 'svg', :to => 'images/svg'

# Compass Extension Help
help %Q{
  Help for compass-vikingR-template-sass
}

# Compass Extension Welcome Message
#  Users will see this when they create a new project using this template.
welcome_message %Q{
  Welcome to compass-vikingR-template-sass!
}