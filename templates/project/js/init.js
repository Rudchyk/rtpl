// function hasClass(elem, className) {
//   return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
// }

var paths = {
      source: '',
      html5Js: 'http://html5shiv.googlecode.com/svn/trunk/html5.js',
      jqueryJS: 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'
    };

if (head.browser.ie && head.browser.version < 8) {
  location.replace(paths.source + 'ie-old-blocker/index.html');
}

if (head.browser.ie && head.browser.version < 9) {
  head.js(paths.html5Js);
}

head.js(
  paths.jqueryJS,
  // paths.source + 'js/min/jquery.fancybox.min.js',
  // paths.source + 'js/min/.js',
  // paths.source + 'js/full/rform.js',
  // paths.source + 'js/full/scripts.js',
  // paths.source + 'js/full/example.js',
  // paths.source + 'js/full/.js',
  function() {}
);

if (head.browser.ie && head.browser.version < 10 || head.browser.opera) {
  head.js(
    paths.source + 'js/min/ph.min.js'
  );
}

// if (hasClass(document.documentElement, 'body_class')) {
//   head.js(
//     scriptsMinPath + '',
//     function() {}
//   );
// }
